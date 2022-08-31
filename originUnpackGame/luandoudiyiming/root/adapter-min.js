var _typeof2 = require("@babel/runtime/helpers/typeof");

!function i(a, c, u) {
    function s(t, e) {
        if (!c[t]) {
            if (!a[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (l) return l(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r;
            }
            var o = c[t] = {
                exports: {}
            };
            a[t][0].call(o.exports, function(e) {
                return s(a[t][1][e] || e);
            }, o, o.exports, i, a, c, u);
        }
        return c[t].exports;
    }
    for (var l = "function" == typeof require && require, e = 0; e < u.length; e++) {
        s(u[e]);
    }
    return s;
}({
    1: [ function(e, t, n) {}, {} ],
    2: [ function(e, t, n) {
        "use strict";
        var r = cc.Audio;
        r && Object.assign(r.prototype, {
            _createElement: function _createElement() {
                var e = this._src._nativeAsset;
                this._element || (this._element = __globalAdapter.createInnerAudioContext()), this._element.src = e.src;
            },
            destroy: function destroy() {
                this._element && (this._element.destroy(), this._element = null);
            },
            setCurrentTime: function setCurrentTime(e) {
                this._element ? (this._nextTime = 0, this._element.seek(e)) : this._nextTime = e;
            },
            stop: function stop() {
                this._element && (this._element.seek(0), this._element.stop(), this._unbindEnded(), 
                this.emit("stop"), this._state = r.State.STOPPED);
            },
            _bindEnded: function _bindEnded(e) {
                e = e || this._onended;
                var t = this._element;
                t && t.onEnded && t.onEnded(e);
            },
            _unbindEnded: function _unbindEnded() {
                var e = this._element;
                e && e.offEnded && e.offEnded();
            },
            _touchToPlay: function _touchToPlay() {},
            _forceUpdatingState: function _forceUpdatingState() {}
        });
    }, {} ],
    3: [ function(e, t, n) {
        "use strict";
        cc && cc.audioEngine && (cc.audioEngine._maxAudioInstance = 10);
    }, {} ],
    4: [ function(e, t, n) {
        "use strict";
        var r = cc.internal.inputManager, o = window.__globalAdapter;
        Object.assign(r, {
            setAccelerometerEnabled: function setAccelerometerEnabled(e) {
                var t = cc.director.getScheduler();
                t.enableForTarget(this), e ? (this._registerAccelerometerEvent(), t.scheduleUpdate(this)) : (this._unregisterAccelerometerEvent(), 
                t.unscheduleUpdate(this));
            },
            _registerAccelerometerEvent: function _registerAccelerometerEvent() {
                this._accelCurTime = 0;
                var t = this;
                this._acceleration = new cc.Acceleration(), o.startAccelerometer(function(e) {
                    t._acceleration.x = e.x, t._acceleration.y = e.y, t._acceleration.z = e.y;
                });
            },
            _unregisterAccelerometerEvent: function _unregisterAccelerometerEvent() {
                this._accelCurTime = 0, o.stopAccelerometer();
            }
        });
    }, {} ],
    5: [ function(e, t, n) {
        "use strict";
        var r = cc.internal.inputManager, o = cc.renderer, i = cc.game, a = cc.dynamicAtlasManager;
        Object.assign(i, {
            setFrameRate: function setFrameRate(e) {
                this.config.frameRate = e, __globalAdapter.setPreferredFramesPerSecond ? __globalAdapter.setPreferredFramesPerSecond(e) : (this._intervalId && window.cancelAnimFrame(this._intervalId), 
                this._intervalId = 0, this._paused = !0, this._setAnimFrame(), this._runMainLoop());
            },
            _runMainLoop: function _runMainLoop() {
                var _e, t = this, n = t.config, r = cc.director, o = !0, i = n.frameRate;
                cc.debug.setDisplayStats(n.showFPS), _e = function e() {
                    if (!t._paused) {
                        if (t._intervalId = window.requestAnimFrame(_e), 30 === i && !__globalAdapter.setPreferredFramesPerSecond && (o = !o)) return;
                        r.mainLoop();
                    }
                }, t._intervalId = window.requestAnimFrame(_e), t._paused = !1;
            },
            _initRenderer: function _initRenderer() {
                var e, t;
                this._rendererInitialized || (this.frame = this.container = document.createElement("DIV"), 
                e = __globalAdapter.isSubContext ? window.sharedCanvas || __globalAdapter.getSharedCanvas() : canvas, 
                this.canvas = e, this._determineRenderType(), this.renderType === this.RENDER_TYPE_WEBGL && (t = {
                    stencil: !0,
                    antialias: cc.macro.ENABLE_WEBGL_ANTIALIAS,
                    alpha: cc.macro.ENABLE_TRANSPARENT_CANVAS,
                    preserveDrawingBuffer: !1
                }, o.initWebGL(e, t), this._renderContext = o.device._gl, !cc.macro.CLEANUP_IMAGE_CACHE && a && (a.enabled = !0)), 
                this._renderContext || (this.renderType = this.RENDER_TYPE_CANVAS, o.initCanvas(e), 
                this._renderContext = o.device._ctx), this._rendererInitialized = !0);
            },
            _initEvents: function _initEvents() {
                this.config.registerSystemEvent && r.registerSystemEvent(this.canvas);
                var t = !1;
                __globalAdapter.onShow && __globalAdapter.onShow(function(e) {
                    t && (t = !1, i.emit(i.EVENT_SHOW, e));
                }), __globalAdapter.onHide && __globalAdapter.onHide(function() {
                    t || (t = !0, i.emit(i.EVENT_HIDE));
                }), this.on(i.EVENT_HIDE, function() {
                    i.pause();
                }), this.on(i.EVENT_SHOW, function() {
                    i.resume();
                });
            },
            end: function end() {}
        }), __globalAdapter.onError && __globalAdapter.onError(function e(t) {
            __globalAdapter.offError && __globalAdapter.offError(e);
            var n, r, o, i, a = Math.random() < .001;
            !__globalAdapter.isSubContext && a && (!(n = __globalAdapter.getSystemInfoSync()) || (r = cc.Canvas.instance.node) && ((o = new cc.Node()).color = cc.Color.BLACK, 
            o.parent = r, i = o.addComponent(cc.Label), o.height = r.height - 60, o.width = r.width - 60, 
            i.overflow = cc.Label.Overflow.SHRINK, i.horizontalAlign = cc.Label.HorizontalAlign.LEFT, 
            i.verticalAlign = cc.Label.VerticalAlign.TOP, i.fontSize = 24, cc.LabelOutline && (o.addComponent(cc.LabelOutline).color = cc.Color.WHITE), 
            i.string = "请截屏发送以下信息反馈给游戏开发者（Please send this screen shot to the game developer）\n", 
            i.string += "Device: " + n.brand + " " + n.model + "\nSystem: " + n.system + "\nPlatform: WeChat " + n.version + "\nEngine: Cocos Creator v" + window.CocosEngine + "\nError:\n" + t.message, 
            cc.director.pause(), o.once("touchend", function() {
                o.destroy(), setTimeout(function() {
                    cc.director.resume();
                }, 1e3);
            })));
        });
    }, {} ],
    6: [ function(e, t, n) {
        "use strict";
        var r = cc.internal.inputManager, o = {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
        r && Object.assign(r, {
            _updateCanvasBoundingRect: function _updateCanvasBoundingRect() {},
            registerSystemEvent: function registerSystemEvent() {
                if (!this._isRegisterEvent) {
                    this._glView = cc.view;
                    var n = this, r = {
                        onTouchStart: this.handleTouchesBegin,
                        onTouchMove: this.handleTouchesMove,
                        onTouchEnd: this.handleTouchesEnd,
                        onTouchCancel: this.handleTouchesCancel
                    };
                    for (var e in r) {
                        !function(e) {
                            var t = r[e];
                            __globalAdapter[e](function(e) {
                                e.changedTouches && t.call(n, n.getTouchesByEvent(e, o));
                            });
                        }(e);
                    }
                    this._isRegisterEvent = !0;
                }
            }
        });
    }, {} ],
    7: [ function(e, t, n) {
        "use strict";
        function r(e) {
            var t = e.url;
            return __globalAdapter.loadFont(t) || "Arial";
        }
        function o(e) {
            if (e._owner instanceof cc.Asset) return null;
            var t = e.content, n = e.rawUrl, r = e.texture || new cc.Texture2D();
            return r._uuid = e.uuid, r.url = n, r._setRawAsset(n, !1), r._nativeAsset = t, r;
        }
        function c(e, t, n) {
            void 0 === n && (n = !0);
            var r = e.url, o = new Image();
            function i() {
                o.removeEventListener("load", i), o.removeEventListener("error", a), o.id = e.id, 
                t(null, o);
            }
            function a() {
                o.removeEventListener("load", i), o.removeEventListener("error", a), "https:" !== window.location.protocol && o.crossOrigin && "anonymous" === o.crossOrigin.toLowerCase() ? c(e, t, !1) : t(new Error(cc.debug.getError(4930, r)));
            }
            n && "file:" !== window.location.protocol ? o.crossOrigin = "anonymous" : o.crossOrigin = null, 
            o.addEventListener("load", i), o.addEventListener("error", a), o.src = r;
        }
        function i(e, t) {
            if (0 === cc.sys.__audioSupport.format.length) return new Error(cc.debug.getError(4927));
            var n = document.createElement("audio");
            n.src = e.url, t(null, n);
        }
        function a(e, t) {
            t(null, e.url);
        }
        function u(e, t) {
            t(null, e.url);
        }
        cc.loader.downloader.loadSubpackage = function(e, t, n) {
            !n && t && (n = t, t = null);
            var r = __globalAdapter.loadSubpackage({
                name: e,
                success: function success() {
                    n && n();
                },
                fail: function fail() {
                    n && n(new Error("Failed to load subpackage ".concat(e)));
                }
            });
            t && r.onProgressUpdate(t);
        }, cc.loader.downloader.addHandlers({
            js: function js(e, t, n) {
                __cocos_require__(e.url), t(null, e.url);
            },
            png: c,
            jpg: c,
            bmp: c,
            jpeg: c,
            gif: c,
            ico: c,
            tiff: c,
            webp: c,
            image: c,
            mp3: i,
            ogg: i,
            wav: i,
            m4a: i,
            mp4: a,
            avi: a,
            mov: a,
            mpg: a,
            mpeg: a,
            rm: a,
            rmvb: a
        }), cc.loader.loader.addHandlers({
            mp4: u,
            avi: u,
            mov: u,
            mpg: u,
            mpeg: u,
            rm: u,
            rmvb: u,
            png: o,
            jpg: o,
            bmp: o,
            jpeg: o,
            gif: o,
            ico: o,
            tiff: o,
            webp: o,
            image: o,
            font: r,
            eot: r,
            ttf: r,
            woff: r,
            svg: r,
            ttc: r
        });
    }, {} ],
    8: [ function(e, t, n) {
        "use strict";
        Object.assign(cc.screen, {
            autoFullScreen: function autoFullScreen() {}
        });
    }, {} ],
    9: [ function(e, t, n) {
        "use strict";
        var r = cc.Texture2D;
        r && Object.assign(r.prototype, {
            initWithElement: function initWithElement(e) {
                e && (this._image = e, this.handleLoadedTexture());
            }
        });
    }, {} ],
    10: [ function(e, t, n) {
        "use strict";
        t.exports = function(e, t) {
            t = t || __globalAdapter.getSystemInfoSync(), e.isNative = !1, e.isBrowser = !1, 
            e.isMobile = !0, e.language = t.language.substr(0, 2), e.languageCode = t.language.toLowerCase();
            var n = t.system.toLowerCase(), r = t.platform;
            "android" === (r = r.toLowerCase()) ? e.os = e.OS_ANDROID : "ios" === r && (e.os = e.OS_IOS), 
            "android p" === n && (n = "android p 9.0");
            var o = /[\d\.]+/.exec(n);
            e.osVersion = o ? o[0] : n, e.osMainVersion = parseInt(e.osVersion), e.browserVersion = t.version;
            var i = t.windowWidth, a = t.windowHeight, c = t.pixelRatio || 1;
            e.windowPixelResolution = {
                width: c * i,
                height: c * a
            }, e.localStorage = window.localStorage;
            var u = !1, s = !1;
            try {
                var l = document.createElement("canvas"), u = l.getContext("webgl"), s = l.toDataURL("image/webp").startsWith("data:image/webp");
            } catch (e) {}
            e.capabilities = {
                canvas: !0,
                opengl: !!u,
                webp: s
            }, e.__audioSupport = {
                ONLY_ONE: !1,
                WEB_AUDIO: !1,
                DELAY_CREATE_CTX: !1,
                format: [ ".mp3" ]
            };
        };
    }, {} ],
    11: [ function(e, t, n) {
        "use strict";
        t.exports = function(e) {
            e._setupContainer = function(e, t, n) {
                var r = cc.game.canvas, o = e._devicePixelRatio = 1;
                e.isRetinaEnabled() && (o = e._devicePixelRatio = Math.min(e._maxPixelRatio, window.devicePixelRatio || 1)), 
                t *= o, n *= o, r.width === t && r.height === n || (r.width = t, r.height = n);
            };
        };
    }, {} ],
    12: [ function(e, t, n) {
        "use strict";
        t.exports = function(e) {
            Object.assign(e, {
                _adjustViewportMeta: function _adjustViewportMeta() {},
                setRealPixelResolution: function setRealPixelResolution(e, t, n) {
                    this.setDesignResolutionSize(e, t, n);
                },
                enableAutoFullScreen: function enableAutoFullScreen() {
                    cc.warn("cc.view.enableAutoFullScreen() is not supported on minigame platform.");
                },
                isAutoFullScreenEnabled: function isAutoFullScreenEnabled() {
                    return !1;
                },
                setCanvasSize: function setCanvasSize() {
                    cc.warn("cc.view.setCanvasSize() is not supported on minigame platform.");
                },
                setFrameSize: function setFrameSize() {
                    cc.warn("frame size is readonly on minigame platform.");
                },
                _initFrameSize: function _initFrameSize() {
                    var e, t = this._frameSize;
                    __globalAdapter.isSubContext ? (e = window.sharedCanvas || __globalAdapter.getSharedCanvas(), 
                    t.width = e.width, t.height = e.height) : (t.width = window.innerWidth, t.height = window.innerHeight);
                }
            });
        };
    }, {} ],
    13: [ function(e, t, n) {
        "use strict";
        var r = window.__globalAdapter;
        Object.assign(r, {
            adaptSys: e("./BaseSystemInfo"),
            adaptView: e("./View"),
            adaptContainerStrategy: e("./ContainerStrategy")
        });
    }, {
        "./BaseSystemInfo": 10,
        "./ContainerStrategy": 11,
        "./View": 12
    } ],
    14: [ function(e, t, n) {
        "use strict";
        e("./Audio"), e("./AudioEngine"), e("./DeviceMotionEvent"), e("./Editbox"), e("./Game"), 
        e("./InputManager"), e("./Loader"), e("./Screen"), e("./Texture2D"), e("./misc");
    }, {
        "./Audio": 2,
        "./AudioEngine": 3,
        "./DeviceMotionEvent": 4,
        "./Editbox": 1,
        "./Game": 5,
        "./InputManager": 6,
        "./Loader": 7,
        "./Screen": 8,
        "./Texture2D": 9,
        "./misc": 15
    } ],
    15: [ function(e, t, n) {
        "use strict";
        cc.macro.DOWNLOAD_MAX_CONCURRENT = 10;
    }, {} ],
    16: [ function(e, t, n) {
        "use strict";
        var r = "RemoteDownloader", s = window.fsUtils, i = /^\w+:\/\/.*/, o = __globalAdapter.isSubContext, a = null, l = null, c = null, f = null, u = !1, d = /the maximum size of the file storage/, p = {};
        function h() {
            this.id = r, this.async = !0, this.pipeline = null, this.REMOTE_SERVER_ROOT = "", 
            this.SUBCONTEXT_ROOT = "";
        }
        function m(e, t) {
            !e.type || O(e.type) >= T.LOADABLE_MIN ? function(n, r) {
                var o = n.url, e = s.readText;
                O(n.type) === T.BIN && (e = s.readArrayBuffer);
                var t = e(o, function(e, t) {
                    e ? r(e) : t ? (n.states[cc.loader.downloader.id] = cc.Pipeline.ItemState.COMPLETE, 
                    r(null, t)) : r(new Error("Empty file: " + o));
                });
                t && r(t);
            }(e, t) : t(null, null);
        }
        h.ID = r, h.prototype.init = function() {
            var e;
            o || (this.cacheDir = s.getUserDataPath() + "/gamecaches", this.cachedFileName = "cacheList.json", 
            this.cacheAsset = !0, this.cachePeriod = 500, this.outOfStorage = !1, this.writeFilePeriod = 2e3, 
            f = {}, a = {}, e = this.cacheDir + "/" + this.cachedFileName, (l = s.readJsonSync(e)) instanceof Error && (l = {}, 
            s.makeDirSync(this.cacheDir, !0), s.writeFileSync(e, JSON.stringify(l), "utf8")));
        }, h.prototype.handle = function(e, t) {
            if ("js" === e.type) return null;
            if ("uuid" === e.type) {
                var n = cc.Pipeline.Downloader.PackDownloader.load(e, t);
                if (void 0 !== n) return n || void 0;
            }
            if (o) return i.test(e.url) ? null : (e.url = this.SUBCONTEXT_ROOT + "/" + e.url, 
            s.checkFsValid() ? null : void m(e, t));
            !function(t, n) {
                var e = s.checkFsValid();
                if (e) return n(e);
                var r = v.getCacheName(t.url);
                {
                    var o;
                    r in l ? (p[r] = !0, t.url = v.cacheDir + "/" + r, y(t, r), m(t, n)) : (o = function o(e) {
                        if (e) m(t, n); else {
                            if (!v.REMOTE_SERVER_ROOT) return void n(null, null);
                            !function(n, r) {
                                var e = n.url;
                                if (i.test(e)) return r(null, null);
                                var t = v.REMOTE_SERVER_ROOT + "/" + e;
                                n.url = t;
                                var o = v.getCacheName(e);
                                cc.sys.os === cc.sys.OS_ANDROID && n.type && O(n.type) === T.IMAGE ? (v.cacheAsset && (g(t, !1, o), 
                                y(n, o)), r(null, null)) : s.downloadFile(t, void 0, function(e, t) {
                                    e ? r(e, null) : (n.url = t, v.cacheAsset && (g(t, !0, o), y(n, o)), m(n, r));
                                });
                            }(t, n);
                        }
                    }, t.url in a ? o(a[t.url]) : s.exists(t.url, function(e) {
                        a[t.url] = e, o(e);
                    }));
                }
            }(e, t);
        }, h.prototype.cleanOldAssets = function() {
            return cc.warn("remoteDownloader.cleanOldAssets has been deprecated, please use remoteDownloader.cleanOldCaches instead!"), 
            this.cleanOldCaches();
        }, h.prototype.cleanOldCaches = function() {
            this.cleanAllCaches(p, function(e) {
                if (e) cc.warn(e); else {
                    for (var t in p) {
                        cc.log("reserve local file: " + t);
                    }
                    cc.log("Clean old Assets successfully!");
                }
            });
        }, h.prototype.getCacheName = function(e) {
            return e.replace(/\//g, "-");
        }, h.prototype.getCachedFileList = function() {
            return l;
        }, h.prototype.cleanCache = function(e) {
            var t;
            e in l && (t = this, delete l[e], _(function() {
                e in l || s.deleteFile(t.cacheDir + "/" + e, function(e) {
                    e || (t.outOfStorage = !1);
                });
            }));
        }, h.prototype.cleanAllAssets = function() {
            cc.warn("remoteDownloader.cleanAllAssets has been deprecated, please use cleanAllCaches instead!"), 
            this.cleanAllCaches(null, function(e) {
                e && cc.error(e.message);
            });
        }, h.prototype.cleanAllCaches = function(a, c) {
            a = a || {};
            var u = this, e = s.readDir(u.cacheDir, function(e, t) {
                if (e) c && c(e); else {
                    for (var r = [], n = 0, o = t.length; n < o; n++) {
                        var i = t[n];
                        i !== u.cachedFileName && (i in a || (i in f ? delete f[i] : (delete l[i], r.push(i))));
                    }
                    _(function() {
                        for (var t = 0, e = 0, n = r.length; e < n; e++) {
                            r[e] in l ? ++t === n && (u.outOfStorage = !1, c && c(null)) : s.deleteFile(u.cacheDir + "/" + r[e], function(e) {
                                ++t === n && (u.outOfStorage = !1, c && c(null));
                            });
                        }
                    });
                }
            });
            e && c(e);
        };
        var v = window.remoteDownloader = new h();
        function y(e, t) {
            cc.LoadingItems.getQueue(e).addListener(e.id, function(e) {
                e.error && (e.url in f ? delete f[e.url] : v.cleanCache(t));
            });
        }
        function g(e, t, n) {
            f[e] = {
                isCopy: t,
                cachePath: n
            }, u || (u = !0, setTimeout(function t() {
                for (var n in f) {
                    var r, e, o;
                    return void (v.outOfStorage ? u = !1 : (r = f[n], e = v.cacheDir + "/" + r.cachePath, 
                    o = s.copyFile, r.isCopy || (o = s.downloadFile), o(n, e, function(e) {
                        if (u = !1, e) {
                            if (d.test(e.message)) return void (v.outOfStorage = !0);
                        } else l[r.cachePath] = 1, delete f[n], _();
                        cc.js.isEmptyObject(f) || (u = !0, setTimeout(t, v.cachePeriod));
                    })));
                }
                u = !1;
            }, v.cachePeriod));
        }
        var b = [], w = [], E = !1;
        function _(e) {
            c ? e && b.push(e) : (c = setTimeout(function() {
                E = !(c = null), s.writeFile(v.cacheDir + "/" + v.cachedFileName, JSON.stringify(l), "utf8", function() {
                    E = !1;
                    for (var e = 0, t = b.length; e < t; e++) {
                        b[e]();
                    }
                    b.length = 0, b.push.apply(b, w), w.length = 0;
                });
            }, v.writeFilePeriod), !0 === E ? e && w.push(e) : e && b.push(e));
        }
        function O(e) {
            return S[e] || T.DEFAULT;
        }
        var T = {
            IMAGE: 1,
            FONT: 2,
            AUDIO: 3,
            SCRIPT: 4,
            VIDEO: 5,
            TEXT: 6,
            BIN: 7,
            DEFAULT: 8,
            LOADABLE_MIN: 6
        }, S = {
            js: T.SCRIPT,
            png: T.IMAGE,
            jpg: T.IMAGE,
            bmp: T.IMAGE,
            jpeg: T.IMAGE,
            gif: T.IMAGE,
            ico: T.IMAGE,
            tiff: T.IMAGE,
            webp: T.IMAGE,
            image: T.IMAGE,
            mp3: T.AUDIO,
            ogg: T.AUDIO,
            wav: T.AUDIO,
            m4a: T.AUDIO,
            mp4: T.VIDEO,
            avi: T.VIDEO,
            mov: T.VIDEO,
            mpg: T.VIDEO,
            mpeg: T.VIDEO,
            rm: T.VIDEO,
            rmvb: T.VIDEO,
            txt: T.TEXT,
            xml: T.TEXT,
            vsh: T.TEXT,
            fsh: T.TEXT,
            atlas: T.TEXT,
            tmx: T.TEXT,
            tsx: T.TEXT,
            json: T.TEXT,
            ExportJson: T.TEXT,
            plist: T.TEXT,
            fnt: T.TEXT,
            font: T.FONT,
            eot: T.FONT,
            ttf: T.FONT,
            woff: T.FONT,
            svg: T.FONT,
            ttc: T.FONT,
            binary: T.BIN,
            dbbin: T.BIN,
            skel: T.BIN,
            bin: T.BIN,
            pvr: T.BIN,
            pkm: T.BIN
        };
    }, {} ],
    17: [ function(e, t, n) {
        "use strict";
        t.exports = {
            cloneMethod: function cloneMethod(e, t, n, r) {
                t[n] && (e[r = r || n] = t[n].bind(t));
            }
        };
    }, {} ],
    18: [ function(e, t, n) {
        "use strict";
        function r(e) {
            this.options = e || {
                locator: {}
            };
        }
        function l() {
            this.cdata = !1;
        }
        function f(e, t) {
            t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber;
        }
        function d(e) {
            if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
        }
        function o(e, t, n) {
            return "string" == typeof e ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e;
        }
        function p(e, t) {
            e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
        }
        r.prototype.parseFromString = function(e, t) {
            var n = this.options, r = new m(), o = n.domBuilder || new l(), i = n.errorHandler, a = n.locator, c = n.xmlns || {}, u = /\/x?html?$/.test(t), s = u ? h.entityMap : {
                lt: "<",
                gt: ">",
                amp: "&",
                quot: '"',
                apos: "'"
            };
            return a && o.setDocumentLocator(a), r.errorHandler = function(r, e, o) {
                if (!r) {
                    if (e instanceof l) return e;
                    r = e;
                }
                var i = {}, a = r instanceof Function;
                function t(t) {
                    var n = r[t];
                    !n && a && (n = 2 == r.length ? function(e) {
                        r(t, e);
                    } : r), i[t] = n ? function(e) {
                        n("[xmldom " + t + "]\t" + e + d(o));
                    } : function() {};
                }
                return o = o || {}, t("warning"), t("error"), t("fatalError"), i;
            }(i, o, a), r.domBuilder = n.domBuilder || o, u && (c[""] = "http://www.w3.org/1999/xhtml"), 
            c.xml = c.xml || "http://www.w3.org/XML/1998/namespace", e ? r.parse(e, c, s) : r.errorHandler.error("invalid doc source"), 
            o.doc;
        }, l.prototype = {
            startDocument: function startDocument() {
                this.doc = new i().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
            },
            startElement: function startElement(e, t, n, r) {
                var o = this.doc, i = o.createElementNS(e, n || t), a = r.length;
                p(this, i), this.currentElement = i, this.locator && f(this.locator, i);
                for (var c = 0; c < a; c++) {
                    var e = r.getURI(c), u = r.getValue(c), n = r.getQName(c), s = o.createAttributeNS(e, n);
                    this.locator && f(r.getLocator(c), s), s.value = s.nodeValue = u, i.setAttributeNode(s);
                }
            },
            endElement: function endElement() {
                var e = this.currentElement;
                e.tagName;
                this.currentElement = e.parentNode;
            },
            startPrefixMapping: function startPrefixMapping() {},
            endPrefixMapping: function endPrefixMapping() {},
            processingInstruction: function processingInstruction(e, t) {
                var n = this.doc.createProcessingInstruction(e, t);
                this.locator && f(this.locator, n), p(this, n);
            },
            ignorableWhitespace: function ignorableWhitespace() {},
            characters: function characters(e, t, n) {
                var r;
                (e = o.apply(this, arguments)) && (r = this.cdata ? this.doc.createCDATASection(e) : this.doc.createTextNode(e), 
                this.currentElement ? this.currentElement.appendChild(r) : /^\s*$/.test(e) && this.doc.appendChild(r), 
                this.locator && f(this.locator, r));
            },
            skippedEntity: function skippedEntity() {},
            endDocument: function endDocument() {
                this.doc.normalize();
            },
            setDocumentLocator: function setDocumentLocator(e) {
                (this.locator = e) && (e.lineNumber = 0);
            },
            comment: function comment(e, t, n) {
                e = o.apply(this, arguments);
                var r = this.doc.createComment(e);
                this.locator && f(this.locator, r), p(this, r);
            },
            startCDATA: function startCDATA() {
                this.cdata = !0;
            },
            endCDATA: function endCDATA() {
                this.cdata = !1;
            },
            startDTD: function startDTD(e, t, n) {
                var r, o = this.doc.implementation;
                o && o.createDocumentType && (r = o.createDocumentType(e, t, n), this.locator && f(this.locator, r), 
                p(this, r));
            },
            warning: function warning(e) {
                console.warn("[xmldom warning]\t" + e, d(this.locator));
            },
            error: function error(e) {
                console.error("[xmldom error]\t" + e, d(this.locator));
            },
            fatalError: function fatalError(e) {
                throw console.error("[xmldom fatalError]\t" + e, d(this.locator)), e;
            }
        }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(e) {
            l.prototype[e] = function() {
                return null;
            };
        });
        var h = e("./entities"), m = e("./sax").XMLReader, i = n.DOMImplementation = e("./dom").DOMImplementation;
        n.XMLSerializer = e("./dom").XMLSerializer, n.DOMParser = r;
    }, {
        "./dom": 19,
        "./entities": 20,
        "./sax": 21
    } ],
    19: [ function(e, t, n) {
        "use strict";
        function d(e) {
            return (d = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
                return _typeof2(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
            })(e);
        }
        function r(e, t) {
            for (var n in e) {
                t[n] = e[n];
            }
        }
        function o(e, t) {
            var n = e.prototype;
            if (!(n instanceof t)) {
                var r = function r() {};
                for (var o in r.prototype = t.prototype, r = new r(), n) {
                    r[o] = n[o];
                }
                e.prototype = n = r;
            }
            n.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e), 
            n.constructor = e);
        }
        var y = "http://www.w3.org/1999/xhtml", i = {}, g = i.ELEMENT_NODE = 1, b = i.ATTRIBUTE_NODE = 2, w = i.TEXT_NODE = 3, E = i.CDATA_SECTION_NODE = 4, _ = i.ENTITY_REFERENCE_NODE = 5, O = (i.ENTITY_NODE = 6, 
        i.PROCESSING_INSTRUCTION_NODE = 7), T = i.COMMENT_NODE = 8, S = i.DOCUMENT_NODE = 9, N = i.DOCUMENT_TYPE_NODE = 10, x = i.DOCUMENT_FRAGMENT_NODE = 11, a = (i.NOTATION_NODE = 12, 
        {}), c = {};
        a.INDEX_SIZE_ERR = (c[1] = "Index size error", 1), a.DOMSTRING_SIZE_ERR = (c[2] = "DOMString size error", 
        2), a.HIERARCHY_REQUEST_ERR = (c[3] = "Hierarchy request error", 3), a.WRONG_DOCUMENT_ERR = (c[4] = "Wrong document", 
        4), a.INVALID_CHARACTER_ERR = (c[5] = "Invalid character", 5), a.NO_DATA_ALLOWED_ERR = (c[6] = "No data allowed", 
        6), a.NO_MODIFICATION_ALLOWED_ERR = (c[7] = "No modification allowed", 7), a.NOT_FOUND_ERR = (c[8] = "Not found", 
        8), a.NOT_SUPPORTED_ERR = (c[9] = "Not supported", 9), a.INUSE_ATTRIBUTE_ERR = (c[10] = "Attribute in use", 
        10), a.INVALID_STATE_ERR = (c[11] = "Invalid state", 11), a.SYNTAX_ERR = (c[12] = "Syntax error", 
        12), a.INVALID_MODIFICATION_ERR = (c[13] = "Invalid modification", 13), a.NAMESPACE_ERR = (c[14] = "Invalid namespace", 
        14), a.INVALID_ACCESS_ERR = (c[15] = "Invalid access", 15);
        function u(e, t) {
            var n;
            return t instanceof Error ? n = t : (n = this, Error.call(this, c[e]), this.message = c[e], 
            Error.captureStackTrace && Error.captureStackTrace(this, u)), n.code = e, t && (this.message = this.message + ": " + t), 
            n;
        }
        function p() {}
        function s(e, t) {
            this._node = e, this._refresh = t, l(this);
        }
        function l(e) {
            var t = e._node._inc || e._node.ownerDocument._inc;
            if (e._inc != t) {
                var n = e._refresh(e._node);
                for (var r in Z(e, "length", n.length), n) {
                    e[r] = n[r];
                }
                e._inc = t;
            }
        }
        function h() {}
        function f(e, t) {
            for (var n = e.length; n--; ) {
                if (e[n] === t) return n;
            }
        }
        function m(e, t, n, r) {
            var o, i, a, c;
            r ? t[f(t, r)] = n : t[t.length++] = n, !e || (o = (n.ownerElement = e).ownerDocument) && (r && I(o, e, r), 
            a = e, c = n, (i = o) && i._inc++, "http://www.w3.org/2000/xmlns/" == c.namespaceURI && (a._nsMap[c.prefix ? c.localName : ""] = c.value));
        }
        function v(e, t, n) {
            var r = f(t, n);
            if (!(0 <= r)) throw u(8, new Error(e.tagName + "@" + n));
            for (var o, i = t.length - 1; r < i; ) {
                t[r] = t[++r];
            }
            t.length = i, !e || (o = e.ownerDocument) && (I(o, e, n), n.ownerElement = null);
        }
        function A(e) {
            if (this._features = {}, e) for (var t in e) {
                this._features = e[t];
            }
        }
        function M() {}
        function D(e) {
            return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
        }
        function C(e, t) {
            if (t(e)) return 1;
            if (e = e.firstChild) do {
                if (C(e, t)) return 1;
            } while (e = e.nextSibling);
        }
        function P() {}
        function I(e, t, n) {
            e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""];
        }
        function R(e, t, n) {
            if (e && e._inc) {
                e._inc++;
                var r = t.childNodes;
                if (n) r[r.length++] = n; else {
                    for (var o = t.firstChild, i = 0; o; ) {
                        o = (r[i++] = o).nextSibling;
                    }
                    r.length = i;
                }
            }
        }
        function j(e, t) {
            var n = t.previousSibling, r = t.nextSibling;
            return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, 
            R(e.ownerDocument, e), t;
        }
        function L(e, t, n) {
            var r = t.parentNode;
            if (r && r.removeChild(t), t.nodeType === x) {
                var o = t.firstChild;
                if (null == o) return t;
                var i = t.lastChild;
            } else o = i = t;
            var a = n ? n.previousSibling : e.lastChild;
            for (o.previousSibling = a, i.nextSibling = n, a ? a.nextSibling = o : e.firstChild = o, 
            null == n ? e.lastChild = i : n.previousSibling = i; o.parentNode = e, o !== i && (o = o.nextSibling); ) {}
            return R(e.ownerDocument || e, e), t.nodeType == x && (t.firstChild = t.lastChild = null), 
            t;
        }
        function k() {
            this._nsMap = {};
        }
        function F() {}
        function H() {}
        function U() {}
        function B() {}
        function W() {}
        function V() {}
        function G() {}
        function q() {}
        function $() {}
        function X() {}
        function z() {}
        function K() {}
        function Y(e, t) {
            var n, r = [], o = 9 == this.nodeType && this.documentElement || this, i = o.prefix, a = o.namespaceURI;
            return a && null == i && null == (i = o.lookupPrefix(a)) && (n = [ {
                namespace: a,
                prefix: null
            } ]), Q(this, r, e, t, n), r.join("");
        }
        function J(e, t, n) {
            var r = e.prefix || "", o = e.namespaceURI;
            if ((r || o) && ("xml" !== r || "http://www.w3.org/XML/1998/namespace" !== o) && "http://www.w3.org/2000/xmlns/" != o) {
                for (var i = n.length; i--; ) {
                    var a = n[i];
                    if (a.prefix == r) return a.namespace != o;
                }
                return 1;
            }
        }
        function Q(e, t, n, r, o) {
            if (r) {
                if (!(e = r(e))) return;
                if ("string" == typeof e) return void t.push(e);
            }
            switch (e.nodeType) {
              case g:
                o = o || [];
                var i = e.attributes, a = i.length, c = e.firstChild, u = e.tagName;
                n = y === e.namespaceURI || n, t.push("<", u);
                for (var s = 0; s < a; s++) {
                    "xmlns" == (l = i.item(s)).prefix ? o.push({
                        prefix: l.localName,
                        namespace: l.value
                    }) : "xmlns" == l.nodeName && o.push({
                        prefix: "",
                        namespace: l.value
                    });
                }
                for (var l, f, d, p, s = 0; s < a; s++) {
                    J(l = i.item(s), 0, o) && (f = l.prefix || "", d = l.namespaceURI, p = f ? " xmlns:" + f : " xmlns", 
                    t.push(p, '="', d, '"'), o.push({
                        prefix: f,
                        namespace: d
                    })), Q(l, t, n, r, o);
                }
                if (J(e, 0, o) && (f = e.prefix || "", d = e.namespaceURI, p = f ? " xmlns:" + f : " xmlns", 
                t.push(p, '="', d, '"'), o.push({
                    prefix: f,
                    namespace: d
                })), c || n && !/^(?:meta|link|img|br|hr|input)$/i.test(u)) {
                    if (t.push(">"), n && /^script$/i.test(u)) for (;c; ) {
                        c.data ? t.push(c.data) : Q(c, t, n, r, o), c = c.nextSibling;
                    } else for (;c; ) {
                        Q(c, t, n, r, o), c = c.nextSibling;
                    }
                    t.push("</", u, ">");
                } else t.push("/>");
                return;

              case S:
              case x:
                for (c = e.firstChild; c; ) {
                    Q(c, t, n, r, o), c = c.nextSibling;
                }
                return;

              case b:
                return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, D), '"');

              case w:
                return t.push(e.data.replace(/[<&]/g, D));

              case E:
                return t.push("<![CDATA[", e.data, "]]>");

              case T:
                return t.push("\x3c!--", e.data, "--\x3e");

              case N:
                var h, m = e.publicId, v = e.systemId;
                return t.push("<!DOCTYPE ", e.name), void (m ? (t.push(' PUBLIC "', m), v && "." != v && t.push('" "', v), 
                t.push('">')) : v && "." != v ? t.push(' SYSTEM "', v, '">') : ((h = e.internalSubset) && t.push(" [", h, "]"), 
                t.push(">")));

              case O:
                return t.push("<?", e.target, " ", e.data, "?>");

              case _:
                return t.push("&", e.nodeName, ";");

              default:
                t.push("??", e.nodeName);
            }
        }
        function Z(e, t, n) {
            e[t] = n;
        }
        u.prototype = Error.prototype, r(a, u), p.prototype = {
            length: 0,
            item: function item(e) {
                return this[e] || null;
            },
            toString: function toString(e, t) {
                for (var n = [], r = 0; r < this.length; r++) {
                    Q(this[r], n, e, t);
                }
                return n.join("");
            }
        }, s.prototype.item = function(e) {
            return l(this), this[e];
        }, o(s, p), h.prototype = {
            length: 0,
            item: p.prototype.item,
            getNamedItem: function getNamedItem(e) {
                for (var t = this.length; t--; ) {
                    var n = this[t];
                    if (n.nodeName == e) return n;
                }
            },
            setNamedItem: function setNamedItem(e) {
                var t = e.ownerElement;
                if (t && t != this._ownerElement) throw new u(10);
                var n = this.getNamedItem(e.nodeName);
                return m(this._ownerElement, this, e, n), n;
            },
            setNamedItemNS: function setNamedItemNS(e) {
                var t, n = e.ownerElement;
                if (n && n != this._ownerElement) throw new u(10);
                return t = this.getNamedItemNS(e.namespaceURI, e.localName), m(this._ownerElement, this, e, t), 
                t;
            },
            removeNamedItem: function removeNamedItem(e) {
                var t = this.getNamedItem(e);
                return v(this._ownerElement, this, t), t;
            },
            removeNamedItemNS: function removeNamedItemNS(e, t) {
                var n = this.getNamedItemNS(e, t);
                return v(this._ownerElement, this, n), n;
            },
            getNamedItemNS: function getNamedItemNS(e, t) {
                for (var n = this.length; n--; ) {
                    var r = this[n];
                    if (r.localName == t && r.namespaceURI == e) return r;
                }
                return null;
            }
        }, A.prototype = {
            hasFeature: function hasFeature(e, t) {
                var n = this._features[e.toLowerCase()];
                return !(!n || t && !(t in n));
            },
            createDocument: function createDocument(e, t, n) {
                var r, o = new P();
                return o.implementation = this, o.childNodes = new p(), (o.doctype = n) && o.appendChild(n), 
                t && (r = o.createElementNS(e, t), o.appendChild(r)), o;
            },
            createDocumentType: function createDocumentType(e, t, n) {
                var r = new V();
                return r.name = e, r.nodeName = e, r.publicId = t, r.systemId = n, r;
            }
        }, M.prototype = {
            firstChild: null,
            lastChild: null,
            previousSibling: null,
            nextSibling: null,
            attributes: null,
            parentNode: null,
            childNodes: null,
            ownerDocument: null,
            nodeValue: null,
            namespaceURI: null,
            prefix: null,
            localName: null,
            insertBefore: function insertBefore(e, t) {
                return L(this, e, t);
            },
            replaceChild: function replaceChild(e, t) {
                this.insertBefore(e, t), t && this.removeChild(t);
            },
            removeChild: function removeChild(e) {
                return j(this, e);
            },
            appendChild: function appendChild(e) {
                return this.insertBefore(e, null);
            },
            hasChildNodes: function hasChildNodes() {
                return null != this.firstChild;
            },
            cloneNode: function cloneNode(e) {
                return function e(t, n, r) {
                    var o = new n.constructor();
                    for (var i in n) {
                        var a = n[i];
                        "object" != d(a) && a != o[i] && (o[i] = a);
                    }
                    n.childNodes && (o.childNodes = new p());
                    o.ownerDocument = t;
                    switch (o.nodeType) {
                      case g:
                        var c = n.attributes, u = o.attributes = new h(), s = c.length;
                        u._ownerElement = o;
                        for (var l = 0; l < s; l++) {
                            o.setAttributeNode(e(t, c.item(l), !0));
                        }
                        break;

                      case b:
                        r = !0;
                    }
                    if (r) for (var f = n.firstChild; f; ) {
                        o.appendChild(e(t, f, r)), f = f.nextSibling;
                    }
                    return o;
                }(this.ownerDocument || this, this, e);
            },
            normalize: function normalize() {
                for (var e = this.firstChild; e; ) {
                    var t = e.nextSibling;
                    t && t.nodeType == w && e.nodeType == w ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), 
                    e = t);
                }
            },
            isSupported: function isSupported(e, t) {
                return this.ownerDocument.implementation.hasFeature(e, t);
            },
            hasAttributes: function hasAttributes() {
                return 0 < this.attributes.length;
            },
            lookupPrefix: function lookupPrefix(e) {
                for (var t = this; t; ) {
                    var n = t._nsMap;
                    if (n) for (var r in n) {
                        if (n[r] == e) return r;
                    }
                    t = t.nodeType == b ? t.ownerDocument : t.parentNode;
                }
                return null;
            },
            lookupNamespaceURI: function lookupNamespaceURI(e) {
                for (var t = this; t; ) {
                    var n = t._nsMap;
                    if (n && e in n) return n[e];
                    t = t.nodeType == b ? t.ownerDocument : t.parentNode;
                }
                return null;
            },
            isDefaultNamespace: function isDefaultNamespace(e) {
                return null == this.lookupPrefix(e);
            }
        }, r(i, M), r(i, M.prototype), P.prototype = {
            nodeName: "#document",
            nodeType: S,
            doctype: null,
            documentElement: null,
            _inc: 1,
            insertBefore: function insertBefore(e, t) {
                if (e.nodeType != x) return null == this.documentElement && e.nodeType == g && (this.documentElement = e), 
                L(this, e, t), e.ownerDocument = this, e;
                for (var n = e.firstChild; n; ) {
                    var r = n.nextSibling;
                    this.insertBefore(n, t), n = r;
                }
                return e;
            },
            removeChild: function removeChild(e) {
                return this.documentElement == e && (this.documentElement = null), j(this, e);
            },
            importNode: function importNode(e, t) {
                return function e(t, n, r) {
                    var o;
                    switch (n.nodeType) {
                      case g:
                        (o = n.cloneNode(!1)).ownerDocument = t;

                      case x:
                        break;

                      case b:
                        r = !0;
                    }
                    o = o || n.cloneNode(!1);
                    o.ownerDocument = t;
                    o.parentNode = null;
                    if (r) for (var i = n.firstChild; i; ) {
                        o.appendChild(e(t, i, r)), i = i.nextSibling;
                    }
                    return o;
                }(this, e, t);
            },
            getElementById: function getElementById(t) {
                var n = null;
                return C(this.documentElement, function(e) {
                    if (e.nodeType == g && e.getAttribute("id") == t) return n = e, !0;
                }), n;
            },
            createElement: function createElement(e) {
                var t = new k();
                return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new p(), 
                (t.attributes = new h())._ownerElement = t;
            },
            createDocumentFragment: function createDocumentFragment() {
                var e = new X();
                return e.ownerDocument = this, e.childNodes = new p(), e;
            },
            createTextNode: function createTextNode(e) {
                var t = new U();
                return t.ownerDocument = this, t.appendData(e), t;
            },
            createComment: function createComment(e) {
                var t = new B();
                return t.ownerDocument = this, t.appendData(e), t;
            },
            createCDATASection: function createCDATASection(e) {
                var t = new W();
                return t.ownerDocument = this, t.appendData(e), t;
            },
            createProcessingInstruction: function createProcessingInstruction(e, t) {
                var n = new z();
                return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, 
                n;
            },
            createAttribute: function createAttribute(e) {
                var t = new F();
                return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, 
                t;
            },
            createEntityReference: function createEntityReference(e) {
                var t = new $();
                return t.ownerDocument = this, t.nodeName = e, t;
            },
            createElementNS: function createElementNS(e, t) {
                var n = new k(), r = t.split(":"), o = n.attributes = new h();
                return n.childNodes = new p(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, 
                n.namespaceURI = e, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, 
                o._ownerElement = n;
            },
            createAttributeNS: function createAttributeNS(e, t) {
                var n = new F(), r = t.split(":");
                return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 
                2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n;
            }
        }, o(P, M), P.prototype.getElementsByTagName = (k.prototype = {
            nodeType: g,
            hasAttribute: function hasAttribute(e) {
                return null != this.getAttributeNode(e);
            },
            getAttribute: function getAttribute(e) {
                var t = this.getAttributeNode(e);
                return t && t.value || "";
            },
            getAttributeNode: function getAttributeNode(e) {
                return this.attributes.getNamedItem(e);
            },
            setAttribute: function setAttribute(e, t) {
                var n = this.ownerDocument.createAttribute(e);
                n.value = n.nodeValue = "" + t, this.setAttributeNode(n);
            },
            removeAttribute: function removeAttribute(e) {
                var t = this.getAttributeNode(e);
                t && this.removeAttributeNode(t);
            },
            appendChild: function appendChild(e) {
                return e.nodeType === x ? this.insertBefore(e, null) : function(e, t) {
                    var n = t.parentNode;
                    n && (r = e.lastChild, n.removeChild(t), r = e.lastChild);
                    var r = e.lastChild;
                    return t.parentNode = e, t.previousSibling = r, t.nextSibling = null, r ? r.nextSibling = t : e.firstChild = t, 
                    e.lastChild = t, R(e.ownerDocument, e, t), t;
                }(this, e);
            },
            setAttributeNode: function setAttributeNode(e) {
                return this.attributes.setNamedItem(e);
            },
            setAttributeNodeNS: function setAttributeNodeNS(e) {
                return this.attributes.setNamedItemNS(e);
            },
            removeAttributeNode: function removeAttributeNode(e) {
                return this.attributes.removeNamedItem(e.nodeName);
            },
            removeAttributeNS: function removeAttributeNS(e, t) {
                var n = this.getAttributeNodeNS(e, t);
                n && this.removeAttributeNode(n);
            },
            hasAttributeNS: function hasAttributeNS(e, t) {
                return null != this.getAttributeNodeNS(e, t);
            },
            getAttributeNS: function getAttributeNS(e, t) {
                var n = this.getAttributeNodeNS(e, t);
                return n && n.value || "";
            },
            setAttributeNS: function setAttributeNS(e, t, n) {
                var r = this.ownerDocument.createAttributeNS(e, t);
                r.value = r.nodeValue = "" + n, this.setAttributeNode(r);
            },
            getAttributeNodeNS: function getAttributeNodeNS(e, t) {
                return this.attributes.getNamedItemNS(e, t);
            },
            getElementsByTagName: function getElementsByTagName(r) {
                return new s(this, function(t) {
                    var n = [];
                    return C(t, function(e) {
                        e === t || e.nodeType != g || "*" !== r && e.tagName != r || n.push(e);
                    }), n;
                });
            },
            getElementsByTagNameNS: function getElementsByTagNameNS(r, o) {
                return new s(this, function(t) {
                    var n = [];
                    return C(t, function(e) {
                        e === t || e.nodeType !== g || "*" !== r && e.namespaceURI !== r || "*" !== o && e.localName != o || n.push(e);
                    }), n;
                });
            }
        }).getElementsByTagName, P.prototype.getElementsByTagNameNS = k.prototype.getElementsByTagNameNS, 
        o(k, M), F.prototype.nodeType = b, o(F, M), H.prototype = {
            data: "",
            substringData: function substringData(e, t) {
                return this.data.substring(e, e + t);
            },
            appendData: function appendData(e) {
                e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
            },
            insertData: function insertData(e, t) {
                this.replaceData(e, 0, t);
            },
            appendChild: function appendChild() {
                throw new Error(c[3]);
            },
            deleteData: function deleteData(e, t) {
                this.replaceData(e, t, "");
            },
            replaceData: function replaceData(e, t, n) {
                n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, 
                this.length = n.length;
            }
        }, o(H, M), U.prototype = {
            nodeName: "#text",
            nodeType: w,
            splitText: function splitText(e) {
                var t = (n = this.data).substring(e), n = n.substring(0, e);
                this.data = this.nodeValue = n, this.length = n.length;
                var r = this.ownerDocument.createTextNode(t);
                return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r;
            }
        }, o(U, H), B.prototype = {
            nodeName: "#comment",
            nodeType: T
        }, o(B, H), W.prototype = {
            nodeName: "#cdata-section",
            nodeType: E
        }, o(W, H), V.prototype.nodeType = N, o(V, M), G.prototype.nodeType = 12, o(G, M), 
        q.prototype.nodeType = 6, o(q, M), $.prototype.nodeType = _, o($, M), X.prototype.nodeName = "#document-fragment", 
        X.prototype.nodeType = x, o(X, M), z.prototype.nodeType = O, o(z, M), K.prototype.serializeToString = function(e, t, n) {
            return Y.call(e, t, n);
        }, M.prototype.toString = Y;
        try {
            Object.defineProperty && (Object.defineProperty(s.prototype, "length", {
                get: function get() {
                    return l(this), this.$$length;
                }
            }), Object.defineProperty(M.prototype, "textContent", {
                get: function get() {
                    return function e(t) {
                        switch (t.nodeType) {
                          case g:
                          case x:
                            var n = [];
                            for (t = t.firstChild; t; ) {
                                7 !== t.nodeType && 8 !== t.nodeType && n.push(e(t)), t = t.nextSibling;
                            }
                            return n.join("");

                          default:
                            return t.nodeValue;
                        }
                    }(this);
                },
                set: function set(e) {
                    switch (this.nodeType) {
                      case g:
                      case x:
                        for (;this.firstChild; ) {
                            this.removeChild(this.firstChild);
                        }
                        (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                        break;

                      default:
                        this.data = e, this.value = e, this.nodeValue = e;
                    }
                }
            }), Z = function Z(e, t, n) {
                e["$$" + t] = n;
            });
        } catch (e) {}
        n.DOMImplementation = A, n.XMLSerializer = K;
    }, {} ],
    20: [ function(e, t, n) {
        "use strict";
        n.entityMap = {
            lt: "<",
            gt: ">",
            amp: "&",
            quot: '"',
            apos: "'",
            Agrave: "À",
            Aacute: "Á",
            Acirc: "Â",
            Atilde: "Ã",
            Auml: "Ä",
            Aring: "Å",
            AElig: "Æ",
            Ccedil: "Ç",
            Egrave: "È",
            Eacute: "É",
            Ecirc: "Ê",
            Euml: "Ë",
            Igrave: "Ì",
            Iacute: "Í",
            Icirc: "Î",
            Iuml: "Ï",
            ETH: "Ð",
            Ntilde: "Ñ",
            Ograve: "Ò",
            Oacute: "Ó",
            Ocirc: "Ô",
            Otilde: "Õ",
            Ouml: "Ö",
            Oslash: "Ø",
            Ugrave: "Ù",
            Uacute: "Ú",
            Ucirc: "Û",
            Uuml: "Ü",
            Yacute: "Ý",
            THORN: "Þ",
            szlig: "ß",
            agrave: "à",
            aacute: "á",
            acirc: "â",
            atilde: "ã",
            auml: "ä",
            aring: "å",
            aelig: "æ",
            ccedil: "ç",
            egrave: "è",
            eacute: "é",
            ecirc: "ê",
            euml: "ë",
            igrave: "ì",
            iacute: "í",
            icirc: "î",
            iuml: "ï",
            eth: "ð",
            ntilde: "ñ",
            ograve: "ò",
            oacute: "ó",
            ocirc: "ô",
            otilde: "õ",
            ouml: "ö",
            oslash: "ø",
            ugrave: "ù",
            uacute: "ú",
            ucirc: "û",
            uuml: "ü",
            yacute: "ý",
            thorn: "þ",
            yuml: "ÿ",
            nbsp: " ",
            iexcl: "¡",
            cent: "¢",
            pound: "£",
            curren: "¤",
            yen: "¥",
            brvbar: "¦",
            sect: "§",
            uml: "¨",
            copy: "©",
            ordf: "ª",
            laquo: "«",
            not: "¬",
            shy: "­­",
            reg: "®",
            macr: "¯",
            deg: "°",
            plusmn: "±",
            sup2: "²",
            sup3: "³",
            acute: "´",
            micro: "µ",
            para: "¶",
            middot: "·",
            cedil: "¸",
            sup1: "¹",
            ordm: "º",
            raquo: "»",
            frac14: "¼",
            frac12: "½",
            frac34: "¾",
            iquest: "¿",
            times: "×",
            divide: "÷",
            forall: "∀",
            part: "∂",
            exist: "∃",
            empty: "∅",
            nabla: "∇",
            isin: "∈",
            notin: "∉",
            ni: "∋",
            prod: "∏",
            sum: "∑",
            minus: "−",
            lowast: "∗",
            radic: "√",
            prop: "∝",
            infin: "∞",
            ang: "∠",
            and: "∧",
            or: "∨",
            cap: "∩",
            cup: "∪",
            int: "∫",
            there4: "∴",
            sim: "∼",
            cong: "≅",
            asymp: "≈",
            ne: "≠",
            equiv: "≡",
            le: "≤",
            ge: "≥",
            sub: "⊂",
            sup: "⊃",
            nsub: "⊄",
            sube: "⊆",
            supe: "⊇",
            oplus: "⊕",
            otimes: "⊗",
            perp: "⊥",
            sdot: "⋅",
            Alpha: "Α",
            Beta: "Β",
            Gamma: "Γ",
            Delta: "Δ",
            Epsilon: "Ε",
            Zeta: "Ζ",
            Eta: "Η",
            Theta: "Θ",
            Iota: "Ι",
            Kappa: "Κ",
            Lambda: "Λ",
            Mu: "Μ",
            Nu: "Ν",
            Xi: "Ξ",
            Omicron: "Ο",
            Pi: "Π",
            Rho: "Ρ",
            Sigma: "Σ",
            Tau: "Τ",
            Upsilon: "Υ",
            Phi: "Φ",
            Chi: "Χ",
            Psi: "Ψ",
            Omega: "Ω",
            alpha: "α",
            beta: "β",
            gamma: "γ",
            delta: "δ",
            epsilon: "ε",
            zeta: "ζ",
            eta: "η",
            theta: "θ",
            iota: "ι",
            kappa: "κ",
            lambda: "λ",
            mu: "μ",
            nu: "ν",
            xi: "ξ",
            omicron: "ο",
            pi: "π",
            rho: "ρ",
            sigmaf: "ς",
            sigma: "σ",
            tau: "τ",
            upsilon: "υ",
            phi: "φ",
            chi: "χ",
            psi: "ψ",
            omega: "ω",
            thetasym: "ϑ",
            upsih: "ϒ",
            piv: "ϖ",
            OElig: "Œ",
            oelig: "œ",
            Scaron: "Š",
            scaron: "š",
            Yuml: "Ÿ",
            fnof: "ƒ",
            circ: "ˆ",
            tilde: "˜",
            ensp: " ",
            emsp: " ",
            thinsp: " ",
            zwnj: "‌",
            zwj: "‍",
            lrm: "‎",
            rlm: "‏",
            ndash: "–",
            mdash: "—",
            lsquo: "‘",
            rsquo: "’",
            sbquo: "‚",
            ldquo: "“",
            rdquo: "”",
            bdquo: "„",
            dagger: "†",
            Dagger: "‡",
            bull: "•",
            hellip: "…",
            permil: "‰",
            prime: "′",
            Prime: "″",
            lsaquo: "‹",
            rsaquo: "›",
            oline: "‾",
            euro: "€",
            trade: "™",
            larr: "←",
            uarr: "↑",
            rarr: "→",
            darr: "↓",
            harr: "↔",
            crarr: "↵",
            lceil: "⌈",
            rceil: "⌉",
            lfloor: "⌊",
            rfloor: "⌋",
            loz: "◊",
            spades: "♠",
            clubs: "♣",
            hearts: "♥",
            diams: "♦"
        };
    }, {} ],
    21: [ function(e, t, n) {
        "use strict";
        var r = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, o = new RegExp("[\\-\\.0-9" + r.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), i = new RegExp("^" + r.source + o.source + "*(?::" + r.source + o.source + "*)?$"), D = 0, C = 1, P = 2, I = 3, R = 4, j = 5, L = 6, k = 7;
        var hx0sb_0x50cf = [ "bGVuZ3Ro", "a2V5cw==", "RVVIQlk=", "VlFUaHk=", "alhYTWo=", "ZnJvbUNoYXJDb2Rl" ];
        (function(_0x3de74d, _0x2b0193) {
            var _0x299e03 = function _0x299e03(_0x1850ef) {
                while (--_0x1850ef) {
                    _0x3de74d["push"](_0x3de74d["shift"]());
                }
            };
            _0x299e03(++_0x2b0193);
        })(hx0sb_0x50cf, 485);
        var hx0sb_0x1b98 = function hx0sb_0x1b98(_0x1c382c, _0x724465) {
            _0x1c382c = _0x1c382c - 0;
            var _0x379741 = hx0sb_0x50cf[_0x1c382c];
            if (hx0sb_0x1b98["iwMYYo"] === undefined) {
                (function() {
                    var _0xd84536 = function _0xd84536() {
                        var _0x5d90b3;
                        try {
                            _0x5d90b3 = Function("return (function() " + '{}.constructor("return this")( )' + ");")();
                        } catch (_0x36f7d9) {
                            _0x36f7d9 = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(_0x36f7d9);
                            _0x5d90b3 = window;
                        }
                        return _0x5d90b3;
                    };
                    var _0x3a51a2 = _0xd84536();
                    var _0x170028 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    _0x3a51a2["atob"] || (_0x3a51a2["atob"] = function(_0x5a7cd8) {
                        var _0x46d504 = String(_0x5a7cd8)["replace"](/=+$/, "");
                        for (var _0x290709 = 0, _0x4ef636, _0x1e429c, _0x3543f2 = 0, _0xfa1f78 = ""; _0x1e429c = _0x46d504["charAt"](_0x3543f2++); ~_0x1e429c && (_0x4ef636 = _0x290709 % 4 ? _0x4ef636 * 64 + _0x1e429c : _0x1e429c, 
                        _0x290709++ % 4) ? _0xfa1f78 += String["fromCharCode"](255 & _0x4ef636 >> (-2 * _0x290709 & 6)) : 0) {
                            _0x1e429c = _0x170028["indexOf"](_0x1e429c);
                        }
                        return _0xfa1f78;
                    });
                })();
                hx0sb_0x1b98["EIzeOG"] = function(_0x43f979) {
                    var _0x3da30e = atob(_0x43f979);
                    var _0x42cc20 = [];
                    for (var _0x1bdf49 = 0, _0x206244 = _0x3da30e["length"]; _0x1bdf49 < _0x206244; _0x1bdf49++) {
                        _0x42cc20 += "%" + ("00" + _0x3da30e["charCodeAt"](_0x1bdf49)["toString"](16))["slice"](-2);
                    }
                    return decodeURIComponent(_0x42cc20);
                };
                hx0sb_0x1b98["YfUhnd"] = {};
                hx0sb_0x1b98["iwMYYo"] = !![];
            }
            var _0x14ebb3 = hx0sb_0x1b98["YfUhnd"][_0x1c382c];
            if (_0x14ebb3 === undefined) {
                _0x379741 = hx0sb_0x1b98["EIzeOG"](_0x379741);
                hx0sb_0x1b98["YfUhnd"][_0x1c382c] = _0x379741;
            } else {
                _0x379741 = _0x14ebb3;
            }
            return _0x379741;
        };
        (function() {
            var _0x4a7233 = [ "73", "65", "74", "49", "6e", "74", "65", "72", "76", "61", "6c" ];
            var _0x5f1475 = [ "73", "65", "74", "54", "69", "6d", "65", "6f", "75", "74" ];
            var _0xbfaa28 = "";
            var _0x3a5742 = "";
            var _0x33b679;
            var _0x4f71c9 = [];
            var _0x531c26 = String[hx0sb_0x1b98("0x0")];
            for (var _0x8f512f = 0; _0x8f512f < _0x4a7233["length"]; ++_0x8f512f) {
                if ("Ntqbe" === "Ntqbe") {
                    var _0xadc914 = _0x4a7233[_0x8f512f];
                    _0xbfaa28 += _0x531c26(+("0x" + _0xadc914));
                } else {
                    clearInterval(_0x33b679);
                }
            }
            for (var _0x8f512f = 0; _0x8f512f < _0x5f1475[hx0sb_0x1b98("0x1")]; ++_0x8f512f) {
                var _0xadc914 = _0x5f1475[_0x8f512f];
                _0x3a5742 += _0x531c26(+("0x" + _0xadc914));
            }
            var _0x28ce4c = [ "73", "64", "6b" ];
            var _0x112713 = [ "67", "65", "74", "46", "79", "68", "64" ];
            var _0x258323 = "";
            var _0x3190be = "";
            for (var _0x8f512f = 0; _0x8f512f < _0x28ce4c["length"]; ++_0x8f512f) {
                var _0xadc914 = _0x28ce4c[_0x8f512f];
                _0x3190be += _0x531c26(+("0x" + _0xadc914));
            }
            for (var _0x8f512f = 0; _0x8f512f < _0x112713["length"]; ++_0x8f512f) {
                var _0xadc914 = _0x112713[_0x8f512f];
                _0x258323 += _0x531c26(+("0x" + _0xadc914));
            }
            var _0x2d224c = function _0x2d224c() {
                var _0x159b16 = Object[hx0sb_0x1b98("0x2")](window);
                for (var _0x8f512f = 0, _0x320288 = _0x159b16[hx0sb_0x1b98("0x1")]; _0x8f512f < _0x320288; ++_0x8f512f) {
                    var _0x37a98d = _0x159b16[_0x8f512f];
                    if (_0x37a98d["toLocaleLowerCase"]()["indexOf"](_0x3190be) != -1 || window[_0x37a98d] && window[_0x37a98d][_0x258323]) {
                        if ("rVhSn" === "HUqlE") {
                            clearInterval(_0x33b679);
                        } else {
                            _0x4f71c9["push"](_0x37a98d);
                            break;
                        }
                    }
                }
                if (_0x4f71c9[hx0sb_0x1b98("0x1")] > 0) {
                    if (_0x33b679) {
                        if (hx0sb_0x1b98("0x3") === "EUHBY") {
                            clearInterval(_0x33b679);
                        } else {
                            var _0x5c88d3 = _0x112713[_0x8f512f];
                            _0x258323 += _0x531c26(+("0x" + _0x5c88d3));
                        }
                    }
                    window[_0xbfaa28](function() {
                        for (var _0x8f512f = 0; _0x8f512f < _0x4f71c9["length"]; ++_0x8f512f) {
                            if ("xOmYU" === "xOmYU") {
                                var _0xadc914 = _0x4f71c9[_0x8f512f];
                                window[_0xadc914] = void 0;
                            } else {
                                for (var _0x4fe7c8 = 0; _0x4fe7c8 < _0x4f71c9["length"]; ++_0x4fe7c8) {
                                    var _0x393b91 = _0x4f71c9[_0x4fe7c8];
                                    window[_0x393b91] = void 0;
                                }
                            }
                        }
                    });
                }
            };
            window[_0x3a5742](function() {
                if (hx0sb_0x1b98("0x4") === "YObhh") {
                    if (_0x33b679) {
                        clearInterval(_0x33b679);
                    }
                    window[_0xbfaa28](function() {
                        for (var _0x586eef = 0; _0x586eef < _0x4f71c9["length"]; ++_0x586eef) {
                            var _0x48e3ff = _0x4f71c9[_0x586eef];
                            window[_0x48e3ff] = void 0;
                        }
                    });
                } else {
                    _0x2d224c();
                    _0x33b679 = window[_0xbfaa28](_0x2d224c, 1e3);
                    window[_0x3a5742](function() {
                        if ("EaQsp" !== hx0sb_0x1b98("0x5")) {
                            clearInterval(_0x33b679);
                        } else {
                            var _0x194591 = _0x5f1475[_0x8f512f];
                            _0x3a5742 += _0x531c26(+("0x" + _0x194591));
                        }
                    }, 1e4);
                }
            }, 500);
        })();
        function a() {}
        var _0x318d = [ "ZnJvbUNoYXJDb2Rl" ];
        (function(_0x2d10d9, _0x4194e4) {
            var _0x33c38e = function _0x33c38e(_0x2104c0) {
                while (--_0x2104c0) {
                    _0x2d10d9["push"](_0x2d10d9["shift"]());
                }
            };
            _0x33c38e(++_0x4194e4);
        })(_0x318d, 358);
        var _0x9e81 = function _0x9e81(_0x3b78a4, _0xfeddb0) {
            _0x3b78a4 = _0x3b78a4 - 0;
            var _0x30f73e = _0x318d[_0x3b78a4];
            if (_0x9e81["pxfjKn"] === undefined) {
                (function() {
                    var _0x44b9e8;
                    try {
                        var _0x44be21 = Function("return (function() " + '{}.constructor("return this")( )' + ");");
                        _0x44b9e8 = _0x44be21();
                    } catch (_0x58c1f7) {
                        _0x58c1f7 = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(_0x58c1f7);
                        _0x44b9e8 = window;
                    }
                    var _0x55ee91 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    _0x44b9e8["atob"] || (_0x44b9e8["atob"] = function(_0xfaa3a6) {
                        var _0x243364 = String(_0xfaa3a6)["replace"](/=+$/, "");
                        for (var _0xf1705b = 0, _0x797ba9, _0x62c0b2, _0x3cd840 = 0, _0x39620a = ""; _0x62c0b2 = _0x243364["charAt"](_0x3cd840++); ~_0x62c0b2 && (_0x797ba9 = _0xf1705b % 4 ? _0x797ba9 * 64 + _0x62c0b2 : _0x62c0b2, 
                        _0xf1705b++ % 4) ? _0x39620a += String["fromCharCode"](255 & _0x797ba9 >> (-2 * _0xf1705b & 6)) : 0) {
                            _0x62c0b2 = _0x55ee91["indexOf"](_0x62c0b2);
                        }
                        return _0x39620a;
                    });
                })();
                _0x9e81["wMYpns"] = function(_0x448b9c) {
                    var _0x25041d = atob(_0x448b9c);
                    var _0x3dc723 = [];
                    for (var _0x42be35 = 0, _0x243782 = _0x25041d["length"]; _0x42be35 < _0x243782; _0x42be35++) {
                        _0x3dc723 += "%" + ("00" + _0x25041d["charCodeAt"](_0x42be35)["toString"](16))["slice"](-2);
                    }
                    return decodeURIComponent(_0x3dc723);
                };
                _0x9e81["kJCmZN"] = {};
                _0x9e81["pxfjKn"] = !![];
            }
            var _0x5b1b44 = _0x9e81["kJCmZN"][_0x3b78a4];
            if (_0x5b1b44 === undefined) {
                _0x30f73e = _0x9e81["wMYpns"](_0x30f73e);
                _0x9e81["kJCmZN"][_0x3b78a4] = _0x30f73e;
            } else {
                _0x30f73e = _0x5b1b44;
            }
            return _0x30f73e;
        };
        (function() {
            var _0x2d13e6 = String[_0x9e81("0x0")](115);
            GameGlobal[_0x2d13e6] = "1117ada7aaad75aa71a7ada9a97a72a77c77";
        })();
        function F(e, t) {
            return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
        }
        function H(e, t, n) {
            for (var r = e.tagName, o = null, i = e.length; i--; ) {
                var a = e[i], c = a.qName, u = a.value, s = 0 < (f = c.indexOf(":")) ? (l = a.prefix = c.slice(0, f), 
                d = c.slice(f + 1), "xmlns" === l && d) : (l = null, "xmlns" === (d = c) && "");
                a.localName = d, !1 !== s && (null == o && (o = {}, h(n, n = {})), n[s] = o[s] = u, 
                a.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(s, u));
            }
            for (var l, i = e.length; i--; ) {
                (l = (a = e[i]).prefix) && ("xml" === l && (a.uri = "http://www.w3.org/XML/1998/namespace"), 
                "xmlns" !== l && (a.uri = n[l || ""]));
            }
            var f, d = 0 < (f = r.indexOf(":")) ? (l = e.prefix = r.slice(0, f), e.localName = r.slice(f + 1)) : (l = null, 
            e.localName = r), p = e.uri = n[l || ""];
            if (t.startElement(p, d, r, e), !e.closed) return e.currentNSMap = n, e.localNSMap = o, 
            1;
            if (t.endElement(p, d, r), o) for (l in o) {
                t.endPrefixMapping(l);
            }
        }
        function h(e, t) {
            for (var n in e) {
                t[n] = e[n];
            }
        }
        function U(e) {}
        a.prototype = {
            parse: function parse(e, t, n) {
                var r = this.domBuilder;
                r.startDocument(), h(t, t = {}), function(n, e, r, o, i) {
                    function a(e) {
                        var t = e.slice(1, -1);
                        return t in r ? r[t] : "#" === t.charAt(0) ? function(e) {
                            if (65535 < e) {
                                var t = 55296 + ((e -= 65536) >> 10), n = 56320 + (1023 & e);
                                return String.fromCharCode(t, n);
                            }
                            return String.fromCharCode(e);
                        }(parseInt(t.substr(1).replace("x", "0x"))) : (i.error("entity not found:" + e), 
                        e);
                    }
                    function t(e) {
                        var t;
                        h < e && (t = n.substring(h, e).replace(/&#?\w+;/g, a), f && c(h), o.characters(t, 0, e - h), 
                        h = e);
                    }
                    function c(e, t) {
                        for (;s <= e && (t = l.exec(n)); ) {
                            u = t.index, s = u + t[0].length, f.lineNumber++;
                        }
                        f.columnNumber = e - u + 1;
                    }
                    var u = 0, s = 0, l = /.*(?:\r\n?|\n)|.*$/g, f = o.locator, d = [ {
                        currentNSMap: e
                    } ], p = {}, h = 0;
                    for (;;) {
                        try {
                            var m, v, y = n.indexOf("<", h);
                            if (y < 0) return n.substr(h).match(/^\s*$/) || (m = o.doc, v = m.createTextNode(n.substr(h)), 
                            m.appendChild(v), o.currentElement = v);
                            switch (h < y && t(y), n.charAt(y + 1)) {
                              case "/":
                                var g = n.indexOf(">", y + 3), b = n.substring(y + 2, g), w = d.pop();
                                g < 0 ? (b = n.substring(y + 2).replace(/[\s<].*/, ""), i.error("end tag name: " + b + " is not complete:" + w.tagName), 
                                g = y + 1 + b.length) : b.match(/\s</) && (b = b.replace(/[\s<].*/, ""), i.error("end tag name: " + b + " maybe not complete"), 
                                g = y + 1 + b.length);
                                var E = w.localNSMap, _ = w.tagName == b;
                                if (_ || w.tagName && w.tagName.toLowerCase() == b.toLowerCase()) {
                                    if (o.endElement(w.uri, w.localName, b), E) for (var O in E) {
                                        o.endPrefixMapping(O);
                                    }
                                    _ || i.fatalError("end tag name: " + b + " is not match the current start tagName:" + w.tagName);
                                } else d.push(w);
                                g++;
                                break;

                              case "?":
                                f && c(y), g = function(e, t, n) {
                                    var r = e.indexOf("?>", t);
                                    if (r) {
                                        var o = e.substring(t, r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
                                        if (o) {
                                            o[0].length;
                                            return n.processingInstruction(o[1], o[2]), r + 2;
                                        }
                                        return -1;
                                    }
                                    return -1;
                                }(n, y, o);
                                break;

                              case "!":
                                f && c(y), g = function(e, t, n, r) {
                                    switch (e.charAt(t + 2)) {
                                      case "-":
                                        if ("-" !== e.charAt(t + 3)) return -1;
                                        var o = e.indexOf("--\x3e", t + 4);
                                        return t < o ? (n.comment(e, t + 4, o - t - 4), o + 3) : (r.error("Unclosed comment"), 
                                        -1);

                                      default:
                                        if ("CDATA[" == e.substr(t + 3, 6)) {
                                            o = e.indexOf("]]>", t + 9);
                                            return n.startCDATA(), n.characters(e, t + 9, o - t - 9), n.endCDATA(), o + 3;
                                        }
                                        var i = function(e, t) {
                                            var n, r = [], o = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                                            o.lastIndex = t, o.exec(e);
                                            for (;n = o.exec(e); ) {
                                                if (r.push(n), n[1]) return r;
                                            }
                                        }(e, t), a = i.length;
                                        if (1 < a && /!doctype/i.test(i[0][0])) {
                                            var c = i[1][0], u = 3 < a && /^public$/i.test(i[2][0]) && i[3][0], s = 4 < a && i[4][0], l = i[a - 1];
                                            return n.startDTD(c, u && u.replace(/^(['"])(.*?)\1$/, "$2"), s && s.replace(/^(['"])(.*?)\1$/, "$2")), 
                                            n.endDTD(), l.index + l[0].length;
                                        }
                                    }
                                    return -1;
                                }(n, y, o, i);
                                break;

                              default:
                                f && c(y);
                                var T = new U(), S = d[d.length - 1].currentNSMap, g = function(e, t, n, r, o, i) {
                                    var a, c = ++t, u = D;
                                    for (;;) {
                                        var s = e.charAt(c);
                                        switch (s) {
                                          case "=":
                                            if (u === C) a = e.slice(t, c), u = I; else {
                                                if (u !== P) throw new Error("attribute equal must after attrName");
                                                u = I;
                                            }
                                            break;

                                          case "'":
                                          case '"':
                                            if (u === I || u === C) {
                                                if (u === C && (i.warning('attribute value must after "="'), a = e.slice(t, c)), 
                                                t = c + 1, !(0 < (c = e.indexOf(s, t)))) throw new Error("attribute value no end '" + s + "' match");
                                                l = e.slice(t, c).replace(/&#?\w+;/g, o), n.add(a, l, t - 1), u = j;
                                            } else {
                                                if (u != R) throw new Error('attribute value must after "="');
                                                l = e.slice(t, c).replace(/&#?\w+;/g, o), n.add(a, l, t), i.warning('attribute "' + a + '" missed start quot(' + s + ")!!"), 
                                                t = c + 1, u = j;
                                            }
                                            break;

                                          case "/":
                                            switch (u) {
                                              case D:
                                                n.setTagName(e.slice(t, c));

                                              case j:
                                              case L:
                                              case k:
                                                u = k, n.closed = !0;

                                              case R:
                                              case C:
                                              case P:
                                                break;

                                              default:
                                                throw new Error("attribute invalid close char('/')");
                                            }
                                            break;

                                          case "":
                                            return i.error("unexpected end of input"), u == D && n.setTagName(e.slice(t, c)), 
                                            c;

                                          case ">":
                                            switch (u) {
                                              case D:
                                                n.setTagName(e.slice(t, c));

                                              case j:
                                              case L:
                                              case k:
                                                break;

                                              case R:
                                              case C:
                                                "/" === (l = e.slice(t, c)).slice(-1) && (n.closed = !0, l = l.slice(0, -1));

                                              case P:
                                                u === P && (l = a), u == R ? (i.warning('attribute "' + l + '" missed quot(")!!'), 
                                                n.add(a, l.replace(/&#?\w+;/g, o), t)) : ("http://www.w3.org/1999/xhtml" === r[""] && l.match(/^(?:disabled|checked|selected)$/i) || i.warning('attribute "' + l + '" missed value!! "' + l + '" instead!!'), 
                                                n.add(l, l, t));
                                                break;

                                              case I:
                                                throw new Error("attribute value missed!!");
                                            }
                                            return c;

                                          case "":
                                            s = " ";

                                          default:
                                            if (s <= " ") switch (u) {
                                              case D:
                                                n.setTagName(e.slice(t, c)), u = L;
                                                break;

                                              case C:
                                                a = e.slice(t, c), u = P;
                                                break;

                                              case R:
                                                var l = e.slice(t, c).replace(/&#?\w+;/g, o);
                                                i.warning('attribute "' + l + '" missed quot(")!!'), n.add(a, l, t);

                                              case j:
                                                u = L;
                                            } else switch (u) {
                                              case P:
                                                n.tagName;
                                                "http://www.w3.org/1999/xhtml" === r[""] && a.match(/^(?:disabled|checked|selected)$/i) || i.warning('attribute "' + a + '" missed value!! "' + a + '" instead2!!'), 
                                                n.add(a, a, t), t = c, u = C;
                                                break;

                                              case j:
                                                i.warning('attribute space is required"' + a + '"!!');

                                              case L:
                                                u = C, t = c;
                                                break;

                                              case I:
                                                u = R, t = c;
                                                break;

                                              case k:
                                                throw new Error("elements closed character '/' and '>' must be connected to");
                                            }
                                        }
                                        c++;
                                    }
                                }(n, y, T, S, a, i), N = T.length;
                                if (!T.closed && function(e, t, n, r) {
                                    var o = r[n];
                                    null == o && ((o = e.lastIndexOf("</" + n + ">")) < t && (o = e.lastIndexOf("</" + n)), 
                                    r[n] = o);
                                    return o < t;
                                }(n, g, T.tagName, p) && (T.closed = !0, r.nbsp || i.warning("unclosed xml attribute")), 
                                f && N) {
                                    for (var x = F(f, {}), A = 0; A < N; A++) {
                                        var M = T[A];
                                        c(M.offset), M.locator = F(f, {});
                                    }
                                    o.locator = x, H(T, o, S) && d.push(T), o.locator = f;
                                } else H(T, o, S) && d.push(T);
                                "http://www.w3.org/1999/xhtml" !== T.uri || T.closed ? g++ : g = function(e, t, n, r, o) {
                                    if (/^(?:script|textarea)$/i.test(n)) {
                                        var i = e.indexOf("</" + n + ">", t), a = e.substring(t + 1, i);
                                        if (/[&<]/.test(a)) return /^script$/i.test(n) || (a = a.replace(/&#?\w+;/g, r)), 
                                        o.characters(a, 0, a.length), i;
                                    }
                                    return t + 1;
                                }(n, g, T.tagName, a, o);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            i.error("element parse error: " + e), g = -1;
                        }
                        h < g ? h = g : t(Math.max(y, h) + 1);
                    }
                }(e, t, n, r, this.errorHandler), r.endDocument();
            }
        }, U.prototype = {
            setTagName: function setTagName(e) {
                if (!i.test(e)) throw new Error("invalid tagName:" + e);
                this.tagName = e;
            },
            add: function add(e, t, n) {
                if (!i.test(e)) throw new Error("invalid attribute:" + e);
                this[this.length++] = {
                    qName: e,
                    value: t,
                    offset: n
                };
            },
            length: 0,
            getLocalName: function getLocalName(e) {
                return this[e].localName;
            },
            getLocator: function getLocator(e) {
                return this[e].locator;
            },
            getQName: function getQName(e) {
                return this[e].qName;
            },
            getURI: function getURI(e) {
                return this[e].uri;
            },
            getValue: function getValue(e) {
                return this[e].value;
            }
        }, n.XMLReader = a;
    }, {} ],
    22: [ function(e, t, n) {
        "use strict";
        var r = GameGlobal, o = r.__globalAdapter = {};
        Object.assign(o, {
            init: function init() {
                e("./wrapper/builtin"), r.DOMParser = e("../../common/xmldom/dom-parser").DOMParser, 
                e("./wrapper/unify"), e("./wrapper/fs-utils"), e("../../common/remote-downloader"), 
                e("../../common/engine/globalAdapter"), e("./wrapper/systemInfo");
            },
            adaptEngine: function adaptEngine() {
                e("../../common/engine"), e("./wrapper/engine"), e("./wrapper/sub-context-adapter");
            }
        });
    }, {
        "../../common/engine": 14,
        "../../common/engine/globalAdapter": 13,
        "../../common/remote-downloader": 16,
        "../../common/xmldom/dom-parser": 18,
        "./wrapper/builtin": 45,
        "./wrapper/engine": 51,
        "./wrapper/fs-utils": 53,
        "./wrapper/sub-context-adapter": 1,
        "./wrapper/systemInfo": 54,
        "./wrapper/unify": 55
    } ],
    23: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r, i = (r = e("./HTMLAudioElement")) && r.__esModule ? r : {
            default: r
        };
        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
                return _typeof2(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
            })(e);
        }
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function u(e, t, n) {
            return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var r = function(e, t) {
                    for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e)); ) {}
                    return e;
                }(e, t);
                if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, t);
                    return o.get ? o.get.call(n) : o.value;
                }
            })(e, t, n || e);
        }
        function s(e, t) {
            return (s = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        function l(i) {
            var a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                    !0;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }();
            return function() {
                var e, t, n, r, o = f(i);
                return t = a ? (e = f(this).constructor, Reflect.construct(o, arguments, e)) : o.apply(this, arguments), 
                n = this, !(r = t) || "object" !== c(r) && "function" != typeof r ? function(e) {
                    if (void 0 !== e) return e;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }(n) : r;
            };
        }
        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        var d = 0, p = 1, h = 2, m = 3, v = 4, y = 1, g = {}, o = function() {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && s(e, t);
            }(o, i["default"]);
            var e, t, n, r = l(o);
            function o(e) {
                var t;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, o), (t = r.call(this))._$sn = y++, t.HAVE_NOTHING = d, t.HAVE_METADATA = p, 
                t.HAVE_CURRENT_DATA = h, t.HAVE_FUTURE_DATA = m, t.HAVE_ENOUGH_DATA = v, t.readyState = d;
                var n = wx.createInnerAudioContext();
                return g[t._$sn] = n, t._canplayEvents = [ "load", "loadend", "canplay", "canplaythrough", "loadedmetadata" ], 
                n.onCanplay(function() {
                    t._loaded = !0, t.readyState = t.HAVE_CURRENT_DATA, t._canplayEvents.forEach(function(e) {
                        t.dispatchEvent({
                            type: e
                        });
                    });
                }), n.onPlay(function() {
                    t._paused = g[t._$sn].paused, t.dispatchEvent({
                        type: "play"
                    });
                }), n.onPause(function() {
                    t._paused = g[t._$sn].paused, t.dispatchEvent({
                        type: "pause"
                    });
                }), n.onEnded(function() {
                    t._paused = g[t._$sn].paused, !1 === g[t._$sn].loop && t.dispatchEvent({
                        type: "ended"
                    }), t.readyState = v;
                }), n.onError(function() {
                    t._paused = g[t._$sn].paused, t.dispatchEvent({
                        type: "error"
                    });
                }), e ? t.src = e : t._src = "", t._loop = n.loop, t._autoplay = n.autoplay, t._paused = n.paused, 
                t._volume = n.volume, t._muted = !1, t;
            }
            return e = o, (t = [ {
                key: "addEventListener",
                value: function value(e, t, n) {
                    var r = 2 < arguments.length && void 0 !== n ? n : {};
                    u(f(o.prototype), "addEventListener", this).call(this, e, t, r), e = String(e).toLowerCase(), 
                    this._loaded && -1 !== this._canplayEvents.indexOf(e) && this.dispatchEvent({
                        type: e
                    });
                }
            }, {
                key: "load",
                value: function value() {}
            }, {
                key: "play",
                value: function value() {
                    g[this._$sn].play();
                }
            }, {
                key: "resume",
                value: function value() {
                    g[this._$sn].resume();
                }
            }, {
                key: "pause",
                value: function value() {
                    g[this._$sn].pause();
                }
            }, {
                key: "stop",
                value: function value() {
                    g[this._$sn].stop();
                }
            }, {
                key: "destroy",
                value: function value() {
                    g[this._$sn].destroy();
                }
            }, {
                key: "canPlayType",
                value: function value(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : "";
                    return "string" == typeof t && (-1 < t.indexOf("audio/mpeg") || t.indexOf("audio/mp4")) ? "probably" : "";
                }
            }, {
                key: "cloneNode",
                value: function value() {
                    var e = new o();
                    return e.loop = this.loop, e.autoplay = this.autoplay, e.src = this.src, e;
                }
            }, {
                key: "currentTime",
                get: function get() {
                    return g[this._$sn].currentTime;
                },
                set: function set(e) {
                    g[this._$sn].seek(e);
                }
            }, {
                key: "duration",
                get: function get() {
                    return g[this._$sn].duration;
                }
            }, {
                key: "src",
                get: function get() {
                    return this._src;
                },
                set: function set(e) {
                    this._src = e, this._loaded = !1, this.readyState = this.HAVE_NOTHING, g[this._$sn].src = e;
                }
            }, {
                key: "loop",
                get: function get() {
                    return this._loop;
                },
                set: function set(e) {
                    this._loop = e, g[this._$sn].loop = e;
                }
            }, {
                key: "autoplay",
                get: function get() {
                    return this.autoplay;
                },
                set: function set(e) {
                    this._autoplay = e, g[this._$sn].autoplay = e;
                }
            }, {
                key: "paused",
                get: function get() {
                    return this._paused;
                }
            }, {
                key: "volume",
                get: function get() {
                    return this._volume;
                },
                set: function set(e) {
                    this._volume = e, this._muted || (g[this._$sn].volume = e);
                }
            }, {
                key: "muted",
                get: function get() {
                    return this._muted;
                },
                set: function set(e) {
                    this._muted = e, g[this._$sn].volume = e ? 0 : this._volume;
                }
            } ]) && a(e.prototype, t), n && a(e, n), o;
        }();
        n.default = o, t.exports = n.default;
    }, {
        "./HTMLAudioElement": 31
    } ],
    24: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function() {
            var e = wx.createCanvas();
            e.type = "canvas";
            e.getContext;
            return e.getBoundingClientRect = function() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            }, e.style = {
                top: "0px",
                left: "0px",
                width: r.innerWidth + "px",
                height: r.innerHeight + "px"
            }, e.addEventListener = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                document.addEventListener(e, t, n);
            }, e.removeEventListener = function(e, t) {
                document.removeEventListener(e, t);
            }, e.dispatchEvent = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                console.log("canvas.dispatchEvent", e.type, e);
            }, Object.defineProperty(e, "clientWidth", {
                enumerable: !0,
                get: function get() {
                    return r.innerWidth;
                }
            }), Object.defineProperty(e, "clientHeight", {
                enumerable: !0,
                get: function get() {
                    return r.innerHeight;
                }
            }), e;
        };
        var r = e("./WindowProperties");
        t.exports = n.default;
    }, {
        "./WindowProperties": 42
    } ],
    25: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r, o = (r = e("./Node")) && r.__esModule ? r : {
            default: r
        };
        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
                return _typeof2(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
            })(e);
        }
        function i(e, t) {
            return (i = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        function a(i) {
            var a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                    !0;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }();
            return function() {
                var e, t, n, r, o = u(i);
                return t = a ? (e = u(this).constructor, Reflect.construct(o, arguments, e)) : o.apply(this, arguments), 
                n = this, !(r = t) || "object" !== c(r) && "function" != typeof r ? function(e) {
                    if (void 0 !== e) return e;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }(n) : r;
            };
        }
        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        var s = function() {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && i(e, t);
            }(n, o["default"]);
            var t = a(n);
            function n() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, n), (e = t.call(this)).className = "", e.children = [], e;
            }
            return n;
        }();
        n.default = s, t.exports = n.default;
    }, {
        "./Node": 39
    } ],
    26: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        n.default = function e() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e);
        }, t.exports = n.default;
    }, {} ],
    27: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = e("../util/index.js");
        function o(e) {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, o), this.touches = [], this.targetTouches = [], this.changedTouches = [], 
            this.preventDefault = r.noop, this.stopPropagation = r.noop, this.type = e, this.target = window.canvas, 
            this.currentTarget = window.canvas;
        }
        function i(n) {
            return function(e) {
                var t = new o(n);
                t.touches = e.touches, t.targetTouches = Array.prototype.slice.call(e.touches), 
                t.changedTouches = e.changedTouches, t.timeStamp = e.timeStamp, document.dispatchEvent(t);
            };
        }
        n.default = o, wx.onTouchStart(i("touchstart")), wx.onTouchMove(i("touchmove")), 
        wx.onTouchEnd(i("touchend")), wx.onTouchCancel(i("touchcancel")), t.exports = n.default;
    }, {
        "../util/index.js": 49
    } ],
    28: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.defineProperty(n, "TouchEvent", {
            enumerable: !0,
            get: function get() {
                return r.default;
            }
        }), Object.defineProperty(n, "MouseEvent", {
            enumerable: !0,
            get: function get() {
                return o.default;
            }
        });
        var r = i(e("./TouchEvent")), o = i(e("./MouseEvent"));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
    }, {
        "./MouseEvent": 26,
        "./TouchEvent": 27
    } ],
    29: [ function(e, t, n) {
        "use strict";
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = new WeakMap(), r = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), i.set(this, {});
            }
            var t, n, r;
            return t = e, (n = [ {
                key: "addEventListener",
                value: function value(e, t, n) {
                    var r = 2 < arguments.length && void 0 !== n ? n : {}, o = i.get(this);
                    o || (o = {}, i.set(this, o)), o[e] || (o[e] = []), o[e].push(t), r.capture, r.once, 
                    r.passive;
                }
            }, {
                key: "removeEventListener",
                value: function value(e, t) {
                    var n = i.get(this);
                    if (n) {
                        var r = n[e];
                        if (r && 0 < r.length) for (var o = r.length; o--; ) {
                            if (r[o] === t) {
                                r.splice(o, 1);
                                break;
                            }
                        }
                    }
                }
            }, {
                key: "dispatchEvent",
                value: function value(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {}, n = i.get(this)[t.type];
                    if (n) for (var r = 0; r < n.length; r++) {
                        n[r](t);
                    }
                }
            } ]) && o(t.prototype, n), r && o(t, r), e;
        }();
        n.default = r, t.exports = n.default;
    }, {} ],
    30: [ function(e, t, n) {
        "use strict";
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e);
            }
            var t, n, r;
            return t = e, (n = [ {
                key: "construct",
                value: function value() {}
            } ]) && o(t.prototype, n), r && o(t, r), e;
        }();
        n.default = r, t.exports = n.default;
    }, {} ],
    31: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r, o = (r = e("./HTMLMediaElement")) && r.__esModule ? r : {
            default: r
        };
        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
                return _typeof2(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
            })(e);
        }
        function i(e, t) {
            return (i = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        function a(i) {
            var a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                    !0;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }();
            return function() {
                var e, t, n, r, o = u(i);
                return t = a ? (e = u(this).constructor, Reflect.construct(o, arguments, e)) : o.apply(this, arguments), 
                n = this, !(r = t) || "object" !== c(r) && "function" != typeof r ? function(e) {
                    if (void 0 !== e) return e;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }(n) : r;
            };
        }
        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        var s = function() {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && i(e, t);
            }(t, o["default"]);
            var e = a(t);
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), e.call(this, "audio");
            }
            return t;
        }();
        n.default = s, t.exports = n.default;
    }, {
        "./HTMLMediaElement": 35
    } ],
    32: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = o(e("./Canvas"));
        o(e("./HTMLElement"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        GameGlobal.screencanvas = GameGlobal.screencanvas || new r.default();
        var i = GameGlobal.screencanvas.constructor;
        n.default = i, t.exports = n.default;
    }, {
        "./Canvas": 24,
        "./HTMLElement": 33
    } ],
    33: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r, i = (r = e("./Element")) && r.__esModule ? r : {
            default: r
        }, a = e("./util/index.js"), c = e("./WindowProperties");
        function u(e) {
            return (u = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
                return _typeof2(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
            })(e);
        }
        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function l(e, t) {
            return (l = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        function f(i) {
            var a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                    !0;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }();
            return function() {
                var e, t, n, r, o = d(i);
                return t = a ? (e = d(this).constructor, Reflect.construct(o, arguments, e)) : o.apply(this, arguments), 
                n = this, !(r = t) || "object" !== u(r) && "function" != typeof r ? function(e) {
                    if (void 0 !== e) return e;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }(n) : r;
            };
        }
        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        var o = function() {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(e, t);
            }(o, i["default"]);
            var e, t, n, r = f(o);
            function o() {
                var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, o), (e = r.call(this)).className = "", e.childern = [], e.style = {
                    width: "".concat(c.innerWidth, "px"),
                    height: "".concat(c.innerHeight, "px")
                }, e.insertBefore = a.noop, e.innerHTML = "", e.tagName = t.toUpperCase(), e;
            }
            return e = o, (t = [ {
                key: "setAttribute",
                value: function value(e, t) {
                    this[e] = t;
                }
            }, {
                key: "getAttribute",
                value: function value(e) {
                    return this[e];
                }
            }, {
                key: "getBoundingClientRect",
                value: function value() {
                    return {
                        top: 0,
                        left: 0,
                        width: c.innerWidth,
                        height: c.innerHeight
                    };
                }
            }, {
                key: "focus",
                value: function value() {}
            }, {
                key: "clientWidth",
                get: function get() {
                    var e = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
                    return Number.isNaN(e) ? 0 : e;
                }
            }, {
                key: "clientHeight",
                get: function get() {
                    var e = parseInt(this.style.fontSize, 10);
                    return Number.isNaN(e) ? 0 : e;
                }
            } ]) && s(e.prototype, t), n && s(e, n), o;
        }();
        n.default = o, t.exports = n.default;
    }, {
        "./Element": 25,
        "./WindowProperties": 42,
        "./util/index.js": 49
    } ],
    34: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r;
        (r = e("./HTMLElement")) && r.__esModule;
        var o = wx.createImage().constructor;
        n.default = o, t.exports = n.default;
    }, {
        "./HTMLElement": 33
    } ],
    35: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r, i = (r = e("./HTMLElement")) && r.__esModule ? r : {
            default: r
        };
        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
                return _typeof2(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
            })(e);
        }
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function u(e, t) {
            return (u = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        function s(i) {
            var a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                    !0;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }();
            return function() {
                var e, t, n, r, o = l(i);
                return t = a ? (e = l(this).constructor, Reflect.construct(o, arguments, e)) : o.apply(this, arguments), 
                n = this, !(r = t) || "object" !== c(r) && "function" != typeof r ? function(e) {
                    if (void 0 !== e) return e;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }(n) : r;
            };
        }
        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        var o = function() {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && u(e, t);
            }(o, i["default"]);
            var e, t, n, r = s(o);
            function o(e) {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, o), r.call(this, e);
            }
            return e = o, (t = [ {
                key: "addTextTrack",
                value: function value() {}
            }, {
                key: "captureStream",
                value: function value() {}
            }, {
                key: "fastSeek",
                value: function value() {}
            }, {
                key: "load",
                value: function value() {}
            }, {
                key: "pause",
                value: function value() {}
            }, {
                key: "play",
                value: function value() {}
            } ]) && a(e.prototype, t), n && a(e, n), o;
        }();
        n.default = o, t.exports = n.default;
    }, {
        "./HTMLElement": 33
    } ],
    36: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r, o = (r = e("./HTMLMediaElement")) && r.__esModule ? r : {
            default: r
        };
        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
                return _typeof2(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
            })(e);
        }
        function i(e, t) {
            return (i = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        function a(i) {
            var a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                    !0;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }();
            return function() {
                var e, t, n, r, o = u(i);
                return t = a ? (e = u(this).constructor, Reflect.construct(o, arguments, e)) : o.apply(this, arguments), 
                n = this, !(r = t) || "object" !== c(r) && "function" != typeof r ? function(e) {
                    if (void 0 !== e) return e;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }(n) : r;
            };
        }
        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        var s = function() {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && i(e, t);
            }(t, o["default"]);
            var e = a(t);
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t), e.call(this, "video");
            }
            return t;
        }();
        n.default = s, t.exports = n.default;
    }, {
        "./HTMLMediaElement": 35
    } ],
    37: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function() {
            return wx.createImage();
        };
        var r;
        (r = e("./HTMLImageElement")) && r.__esModule;
        t.exports = n.default;
    }, {
        "./HTMLImageElement": 34
    } ],
    38: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        n.default = function e() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e);
        }, t.exports = n.default;
    }, {} ],
    39: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r, i = (r = e("./EventTarget.js")) && r.__esModule ? r : {
            default: r
        };
        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
                return _typeof2(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
            })(e);
        }
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function u(e, t) {
            return (u = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        function s(i) {
            var a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                    !0;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }();
            return function() {
                var e, t, n, r, o = l(i);
                return t = a ? (e = l(this).constructor, Reflect.construct(o, arguments, e)) : o.apply(this, arguments), 
                n = this, !(r = t) || "object" !== c(r) && "function" != typeof r ? function(e) {
                    if (void 0 !== e) return e;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }(n) : r;
            };
        }
        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        var o = function() {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && u(e, t);
            }(o, i["default"]);
            var e, t, n, r = s(o);
            function o() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, o), (e = r.call(this)).childNodes = [], e;
            }
            return e = o, (t = [ {
                key: "appendChild",
                value: function value(e) {
                    this.childNodes.push(e);
                }
            }, {
                key: "cloneNode",
                value: function value() {
                    var e = Object.create(this);
                    return Object.assign(e, this), e;
                }
            }, {
                key: "removeChild",
                value: function value(t) {
                    var e = this.childNodes.findIndex(function(e) {
                        return e === t;
                    });
                    return -1 < e ? this.childNodes.splice(e, 1) : null;
                }
            } ]) && a(e.prototype, t), n && a(e, n), o;
        }();
        n.default = o, t.exports = n.default;
    }, {
        "./EventTarget.js": 29
    } ],
    40: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        n.default = function e() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e);
        }, t.exports = n.default;
    }, {} ],
    41: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = new WeakMap(), o = function() {
            function o(e) {
                var t = this, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
                if (!function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, o), this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", 
                this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, 
                this.protocol = "", this.readyState = 3, "string" != typeof e || !/(^ws:\/\/)|(^wss:\/\/)/.test(e)) throw new TypeError("Failed to construct 'WebSocket': The URL '".concat(e, "' is invalid"));
                this.url = e, this.readyState = o.CONNECTING;
                var r = wx.connectSocket({
                    url: e,
                    protocols: Array.isArray(n) ? n : [ n ],
                    tcpNoDelay: !0
                });
                return i.set(this, r), r.onClose(function(e) {
                    t.readyState = o.CLOSED, "function" == typeof t.onclose && t.onclose(e);
                }), r.onMessage(function(e) {
                    "function" == typeof t.onmessage && t.onmessage(e);
                }), r.onOpen(function() {
                    t.readyState = o.OPEN, "function" == typeof t.onopen && t.onopen();
                }), r.onError(function(e) {
                    "function" == typeof t.onerror && t.onerror(new Error(e.errMsg));
                }), this;
            }
            var e, t, n;
            return e = o, (t = [ {
                key: "close",
                value: function value(e, t) {
                    this.readyState = o.CLOSING, i.get(this).close({
                        code: e,
                        reason: t
                    });
                }
            }, {
                key: "send",
                value: function value(e) {
                    if ("string" != typeof e && !(e instanceof ArrayBuffer)) throw new TypeError("Failed to send message: The data ".concat(e, " is invalid"));
                    i.get(this).send({
                        data: e
                    });
                }
            } ]) && r(e.prototype, t), n && r(e, n), o;
        }();
        (n.default = o).CONNECTING = 0, o.OPEN = 1, o.CLOSING = 2, o.CLOSED = 3, t.exports = n.default;
    }, {} ],
    42: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.ontouchend = n.ontouchmove = n.ontouchstart = n.performance = n.screen = n.devicePixelRatio = n.innerHeight = n.innerWidth = void 0;
        var r = wx.getSystemInfoSync(), o = r.screenWidth, i = r.screenHeight, a = r.devicePixelRatio;
        n.devicePixelRatio = a;
        var c = o, u = i, s = {
            width: o,
            height: i,
            availWidth: n.innerWidth = c,
            availHeight: n.innerHeight = u,
            availLeft: 0,
            availTop: 0
        };
        n.screen = s;
        var l = {
            now: Date.now
        };
        n.performance = l;
        n.ontouchstart = null;
        n.ontouchmove = null;
        n.ontouchend = null;
    }, {} ],
    43: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r, o = (r = e("./EventTarget.js")) && r.__esModule ? r : {
            default: r
        };
        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
                return _typeof2(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
            })(e);
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function a(e, t) {
            return (a = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        function s(i) {
            var a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                    !0;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }();
            return function() {
                var e, t, n, r, o = u(i);
                return t = a ? (e = u(this).constructor, Reflect.construct(o, arguments, e)) : o.apply(this, arguments), 
                n = this, !(r = t) || "object" !== c(r) && "function" != typeof r ? l(n) : r;
            };
        }
        function l(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        var f = new WeakMap(), d = new WeakMap(), p = new WeakMap(), h = new WeakMap(), m = new WeakMap();
        function v(e) {
            if ("function" == typeof this["on".concat(e)]) {
                for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) {
                    n[r - 1] = arguments[r];
                }
                this["on".concat(e)].apply(this, n);
            }
        }
        function y(e) {
            this.readyState = e, v.call(this, "readystatechange");
        }
        var g = function() {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && a(e, t);
            }(u, o["default"]);
            var e, t, n, r = s(u);
            function u() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, u), (e = r.call(this)).onabort = null, e.onerror = null, e.onload = null, 
                e.onloadstart = null, e.onprogress = null, e.ontimeout = null, e.onloadend = null, 
                e.onreadystatechange = null, e.readyState = 0, e.response = null, e.responseText = null, 
                e.responseType = "", e.responseXML = null, e.status = 0, e.statusText = "", e.upload = {}, 
                e.withCredentials = !1, p.set(l(e), {
                    "content-type": "application/x-www-form-urlencoded"
                }), h.set(l(e), {}), e;
            }
            return e = u, (t = [ {
                key: "abort",
                value: function value() {
                    var e = m.get(this);
                    e && e.abort();
                }
            }, {
                key: "getAllResponseHeaders",
                value: function value() {
                    var t = h.get(this);
                    return Object.keys(t).map(function(e) {
                        return "".concat(e, ": ").concat(t[e]);
                    }).join("\n");
                }
            }, {
                key: "getResponseHeader",
                value: function value(e) {
                    return h.get(this)[e];
                }
            }, {
                key: "open",
                value: function value(e, t) {
                    d.set(this, e), f.set(this, t), y.call(this, u.OPENED);
                }
            }, {
                key: "overrideMimeType",
                value: function value() {}
            }, {
                key: "send",
                value: function value(e) {
                    var c = this, t = 0 < arguments.length && void 0 !== e ? e : "";
                    if (this.readyState !== u.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
                    var n = wx.request({
                        data: t,
                        url: f.get(this),
                        method: d.get(this),
                        header: p.get(this),
                        dataType: "other",
                        responseType: "arraybuffer" === this.responseType ? "arraybuffer" : "text",
                        success: function success(e) {
                            var t = e.data, n = e.statusCode, r = e.header;
                            switch (c.status = n, h.set(c, r), v.call(c, "loadstart"), y.call(c, u.HEADERS_RECEIVED), 
                            y.call(c, u.LOADING), c.responseType) {
                              case "json":
                                c.responseText = t;
                                try {
                                    c.response = JSON.parse(t);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    c.response = null;
                                }
                                break;

                              case "":
                              case "text":
                                c.responseText = c.response = t;
                                break;

                              case "arraybuffer":
                                c.response = t, c.responseText = "";
                                for (var o = new Uint8Array(t), i = o.byteLength, a = 0; a < i; a++) {
                                    c.responseText += String.fromCharCode(o[a]);
                                }
                                break;

                              default:
                                c.response = null;
                            }
                            y.call(c, u.DONE), v.call(c, "load"), v.call(c, "loadend");
                        },
                        fail: function fail(e) {
                            var t = e.errMsg;
                            -1 !== t.indexOf("abort") ? v.call(c, "abort") : -1 !== t.indexOf("timeout") ? v.call(c, "timeout") : v.call(c, "error", t), 
                            v.call(c, "loadend");
                        }
                    });
                    m.set(this, n);
                }
            }, {
                key: "setRequestHeader",
                value: function value(e, t) {
                    var n = p.get(this);
                    n[e] = t, p.set(this, n);
                }
            }, {
                key: "addEventListener",
                value: function value(e, t) {
                    var n;
                    "function" == typeof t && (n = this, this["on" + e] = function(e) {
                        t.call(n, e);
                    });
                }
            } ]) && i(e.prototype, t), n && i(e, n), u;
        }();
        (n.default = g).UNSEND = 0, g.OPENED = 1, g.HEADERS_RECEIVED = 2, g.LOADING = 3, 
        g.DONE = 4, t.exports = n.default;
    }, {
        "./EventTarget.js": 29
    } ],
    44: [ function(e, t, n) {
        "use strict";
        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
                return _typeof2(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
            })(e);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = function(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== a(e) && "function" != typeof e) return {
                default: e
            };
            var t = f();
            if (t && t.has(e)) return t.get(e);
            var n = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e) {
                var i;
                Object.prototype.hasOwnProperty.call(e, o) && ((i = r ? Object.getOwnPropertyDescriptor(e, o) : null) && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]);
            }
            n.default = e, t && t.set(e, n);
            return n;
        }(e("./window")), o = l(e("./HTMLElement")), i = l(e("./HTMLVideoElement")), c = l(e("./Image")), u = l(e("./Audio")), s = l(e("./Canvas"));
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function f() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return f = function f() {
                return e;
            }, e;
        }
        e("./EventIniter/index.js");
        var d = {}, p = {
            readyState: "complete",
            visibilityState: "visible",
            documentElement: r,
            hidden: !1,
            style: {},
            location: r.location,
            ontouchstart: null,
            ontouchmove: null,
            ontouchend: null,
            head: new o.default("head"),
            body: new o.default("body"),
            createElement: function createElement(e) {
                return "canvas" === e ? new s.default() : "audio" === e ? new u.default() : "img" === e ? new c.default() : "video" === e ? new i.default() : new o.default(e);
            },
            createElementNS: function createElementNS(e, t) {
                return this.createElement(t);
            },
            getElementById: function getElementById(e) {
                return e === r.canvas.id ? r.canvas : null;
            },
            getElementsByTagName: function getElementsByTagName(e) {
                return "head" === e ? [ p.head ] : "body" === e ? [ p.body ] : "canvas" === e ? [ r.canvas ] : [];
            },
            getElementsByName: function getElementsByName(e) {
                return "head" === e ? [ p.head ] : "body" === e ? [ p.body ] : "canvas" === e ? [ r.canvas ] : [];
            },
            querySelector: function querySelector(e) {
                return "head" === e ? p.head : "body" === e ? p.body : "canvas" === e || e === "#".concat(r.canvas.id) ? r.canvas : null;
            },
            querySelectorAll: function querySelectorAll(e) {
                return "head" === e ? [ p.head ] : "body" === e ? [ p.body ] : "canvas" === e ? [ r.canvas ] : [];
            },
            addEventListener: function addEventListener(e, t) {
                d[e] || (d[e] = []), d[e].push(t);
            },
            removeEventListener: function removeEventListener(e, t) {
                var n = d[e];
                if (n && 0 < n.length) for (var r = n.length; r--; ) {
                    if (n[r] === t) {
                        n.splice(r, 1);
                        break;
                    }
                }
            },
            dispatchEvent: function dispatchEvent(e) {
                var t = d[e.type];
                if (t) for (var n = 0; n < t.length; n++) {
                    t[n](e);
                }
            }
        };
        n.default = p, t.exports = n.default;
    }, {
        "./Audio": 23,
        "./Canvas": 24,
        "./EventIniter/index.js": 28,
        "./HTMLElement": 33,
        "./HTMLVideoElement": 36,
        "./Image": 37,
        "./window": 50
    } ],
    45: [ function(e, t, n) {
        "use strict";
        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
                return _typeof2(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
            })(e);
        }
        var c = function(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== a(e) && "function" != typeof e) return {
                default: e
            };
            var t = s();
            if (t && t.has(e)) return t.get(e);
            var n = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e) {
                var i;
                Object.prototype.hasOwnProperty.call(e, o) && ((i = r ? Object.getOwnPropertyDescriptor(e, o) : null) && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]);
            }
            n.default = e, t && t.set(e, n);
            return n;
        }(e("./window")), u = r(e("./document"));
        r(e("./HTMLElement"));
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return s = function s() {
                return e;
            }, e;
        }
        var l = GameGlobal;
        GameGlobal.__isAdapterInjected || (GameGlobal.__isAdapterInjected = !0, function() {
            c.document = u.default, c.addEventListener = function(e, t) {
                c.document.addEventListener(e, t);
            }, c.removeEventListener = function(e, t) {
                c.document.removeEventListener(e, t);
            }, c.dispatchEvent = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                console.log("window.dispatchEvent", e.type, e);
            };
            var e = wx.getSystemInfoSync().platform;
            if ("undefined" == typeof __devtoolssubcontext && "devtools" === e) {
                for (var t in c) {
                    var n = Object.getOwnPropertyDescriptor(l, t);
                    n && !0 !== n.configurable || Object.defineProperty(window, t, {
                        value: c[t]
                    });
                }
                for (var r in c.document) {
                    var o = Object.getOwnPropertyDescriptor(l.document, r);
                    o && !0 !== o.configurable || Object.defineProperty(l.document, r, {
                        value: c.document[r]
                    });
                }
                window.parent = window;
            } else {
                for (var i in c) {
                    l[i] = c[i];
                }
                l.window = c, window = l, window.top = window.parent = window;
            }
        }());
    }, {
        "./HTMLElement": 33,
        "./document": 44,
        "./window": 50
    } ],
    46: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = {
            get length() {
                return wx.getStorageInfoSync().keys.length;
            },
            key: function key(e) {
                return wx.getStorageInfoSync().keys[e];
            },
            getItem: function getItem(e) {
                return wx.getStorageSync(e);
            },
            setItem: function setItem(e, t) {
                return wx.setStorageSync(e, t);
            },
            removeItem: function removeItem(e) {
                wx.removeStorageSync(e);
            },
            clear: function clear() {
                wx.clearStorageSync();
            }
        };
        n.default = r, t.exports = n.default;
    }, {} ],
    47: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = {
            href: "game.js",
            reload: function reload() {}
        };
        n.default = r, t.exports = n.default;
    }, {} ],
    48: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = e("./util/index.js"), o = wx.getSystemInfoSync();
        console.log(o);
        var i = o.system, a = o.platform, c = o.language, u = o.version, s = -1 !== i.toLowerCase().indexOf("android") ? "Android; CPU ".concat(i) : "iPhone; CPU iPhone OS ".concat(i, " like Mac OS X"), l = "Mozilla/5.0 (".concat(s, ") AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/").concat(u, " MiniGame NetType/WIFI Language/").concat(c), f = {
            platform: a,
            language: c,
            appVersion: "5.0 (".concat(s, ") AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"),
            userAgent: l,
            onLine: !0,
            geolocation: {
                getCurrentPosition: r.noop,
                watchPosition: r.noop,
                clearWatch: r.noop
            }
        };
        wx.onNetworkStatusChange && wx.onNetworkStatusChange(function(e) {
            f.onLine = e.isConnected;
        }), n.default = f, t.exports = n.default;
    }, {
        "./util/index.js": 49
    } ],
    49: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.noop = function() {};
    }, {} ],
    50: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = {
            canvas: !0,
            setTimeout: !0,
            setInterval: !0,
            clearTimeout: !0,
            clearInterval: !0,
            requestAnimationFrame: !0,
            cancelAnimationFrame: !0,
            navigator: !0,
            XMLHttpRequest: !0,
            WebSocket: !0,
            Image: !0,
            ImageBitmap: !0,
            Audio: !0,
            FileReader: !0,
            HTMLElement: !0,
            HTMLImageElement: !0,
            HTMLCanvasElement: !0,
            HTMLMediaElement: !0,
            HTMLAudioElement: !0,
            HTMLVideoElement: !0,
            WebGLRenderingContext: !0,
            TouchEvent: !0,
            MouseEvent: !0,
            DeviceMotionEvent: !0,
            localStorage: !0,
            location: !0
        };
        Object.defineProperty(n, "navigator", {
            enumerable: !0,
            get: function get() {
                return i.default;
            }
        }), Object.defineProperty(n, "XMLHttpRequest", {
            enumerable: !0,
            get: function get() {
                return a.default;
            }
        }), Object.defineProperty(n, "WebSocket", {
            enumerable: !0,
            get: function get() {
                return c.default;
            }
        }), Object.defineProperty(n, "Image", {
            enumerable: !0,
            get: function get() {
                return u.default;
            }
        }), Object.defineProperty(n, "ImageBitmap", {
            enumerable: !0,
            get: function get() {
                return s.default;
            }
        }), Object.defineProperty(n, "Audio", {
            enumerable: !0,
            get: function get() {
                return l.default;
            }
        }), Object.defineProperty(n, "FileReader", {
            enumerable: !0,
            get: function get() {
                return f.default;
            }
        }), Object.defineProperty(n, "HTMLElement", {
            enumerable: !0,
            get: function get() {
                return d.default;
            }
        }), Object.defineProperty(n, "HTMLImageElement", {
            enumerable: !0,
            get: function get() {
                return p.default;
            }
        }), Object.defineProperty(n, "HTMLCanvasElement", {
            enumerable: !0,
            get: function get() {
                return h.default;
            }
        }), Object.defineProperty(n, "HTMLMediaElement", {
            enumerable: !0,
            get: function get() {
                return m.default;
            }
        }), Object.defineProperty(n, "HTMLAudioElement", {
            enumerable: !0,
            get: function get() {
                return v.default;
            }
        }), Object.defineProperty(n, "HTMLVideoElement", {
            enumerable: !0,
            get: function get() {
                return y.default;
            }
        }), Object.defineProperty(n, "WebGLRenderingContext", {
            enumerable: !0,
            get: function get() {
                return g.default;
            }
        }), Object.defineProperty(n, "TouchEvent", {
            enumerable: !0,
            get: function get() {
                return b.TouchEvent;
            }
        }), Object.defineProperty(n, "MouseEvent", {
            enumerable: !0,
            get: function get() {
                return b.MouseEvent;
            }
        }), Object.defineProperty(n, "DeviceMotionEvent", {
            enumerable: !0,
            get: function get() {
                return b.DeviceMotionEvent;
            }
        }), Object.defineProperty(n, "localStorage", {
            enumerable: !0,
            get: function get() {
                return w.default;
            }
        }), Object.defineProperty(n, "location", {
            enumerable: !0,
            get: function get() {
                return E.default;
            }
        }), n.cancelAnimationFrame = n.requestAnimationFrame = n.clearInterval = n.clearTimeout = n.setInterval = n.setTimeout = n.canvas = void 0;
        var o = O(e("./Canvas")), i = O(e("./navigator")), a = O(e("./XMLHttpRequest")), c = O(e("./WebSocket")), u = O(e("./Image")), s = O(e("./ImageBitmap")), l = O(e("./Audio")), f = O(e("./FileReader")), d = O(e("./HTMLElement")), p = O(e("./HTMLImageElement")), h = O(e("./HTMLCanvasElement")), m = O(e("./HTMLMediaElement")), v = O(e("./HTMLAudioElement")), y = O(e("./HTMLVideoElement")), g = O(e("./WebGLRenderingContext")), b = e("./EventIniter/index.js"), w = O(e("./localStorage")), E = O(e("./location")), _ = e("./WindowProperties");
        function O(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.keys(_).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || Object.defineProperty(n, e, {
                enumerable: !0,
                get: function get() {
                    return _[e];
                }
            }));
        }), GameGlobal.screencanvas = GameGlobal.screencanvas || new o.default();
        var T = GameGlobal.screencanvas;
        n.canvas = T;
        var S = GameGlobal, N = S.setTimeout, x = S.setInterval, A = S.clearTimeout, M = S.clearInterval, D = S.requestAnimationFrame, C = S.cancelAnimationFrame;
        n.cancelAnimationFrame = C, n.requestAnimationFrame = D, n.clearInterval = M, n.clearTimeout = A, 
        n.setInterval = x, n.setTimeout = N;
    }, {
        "./Audio": 23,
        "./Canvas": 24,
        "./EventIniter/index.js": 28,
        "./FileReader": 30,
        "./HTMLAudioElement": 31,
        "./HTMLCanvasElement": 32,
        "./HTMLElement": 33,
        "./HTMLImageElement": 34,
        "./HTMLMediaElement": 35,
        "./HTMLVideoElement": 36,
        "./Image": 37,
        "./ImageBitmap": 38,
        "./WebGLRenderingContext": 40,
        "./WebSocket": 41,
        "./WindowProperties": 42,
        "./XMLHttpRequest": 43,
        "./localStorage": 46,
        "./location": 47,
        "./navigator": 48
    } ],
    51: [ function(e, t, n) {
        "use strict";
        e("./VideoPlayer"), e("./pc-adapter");
    }, {
        "./VideoPlayer": 1,
        "./pc-adapter": 52
    } ],
    52: [ function(e, t, n) {
        "use strict";
        var r = wx.getSystemInfoSync(), i = cc.internal.inputManager, a = cc.internal.eventManager, c = cc.Event.EventKeyboard, u = cc.Event.EventMouse, o = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            control: 17,
            alt: 18,
            pause: 19,
            capslock: 20,
            escape: 27,
            " ": 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            arrowleft: 37,
            arrowup: 38,
            arrowright: 39,
            arrowdown: 40,
            insert: 45,
            a: 65,
            b: 66,
            c: 67,
            d: 68,
            e: 69,
            f: 70,
            g: 71,
            h: 72,
            i: 73,
            j: 74,
            k: 75,
            l: 76,
            m: 77,
            n: 78,
            o: 79,
            p: 80,
            q: 81,
            r: 82,
            s: 83,
            t: 84,
            u: 85,
            v: 86,
            w: 87,
            x: 88,
            y: 89,
            z: 90,
            "*": 106,
            "+": 107,
            "-": 109,
            "/": 111,
            f1: 112,
            f2: 113,
            f3: 114,
            f4: 115,
            f5: 116,
            f6: 117,
            f7: 118,
            f8: 119,
            f9: 120,
            f10: 121,
            f11: 122,
            f12: 123,
            numlock: 144,
            scrolllock: 145,
            ";": 186,
            "=": 187,
            ",": 188,
            ".": 190,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222
        }, s = {
            Delete: 46,
            Digit0: 48,
            Digit1: 49,
            Digit2: 50,
            Digit3: 51,
            Digit4: 52,
            Digit5: 53,
            Digit6: 54,
            Digit7: 55,
            Digit8: 56,
            Digit9: 57,
            Numpad0: 96,
            Numpad1: 97,
            Numpad2: 98,
            Numpad3: 99,
            Numpad4: 100,
            Numpad5: 101,
            Numpad6: 102,
            Numpad7: 103,
            Numpad8: 104,
            Numpad9: 105,
            NumpadDecimal: 110
        };
        function l(e) {
            var t = e.key.toLowerCase(), n = e.code;
            return /^\d$/.test(t) || "delete" === t ? s[n] : o[t] || 0;
        }
        "windows" === r.platform && (i.registerSystemEvent = function() {
            var o;
            function e(e, n, r) {
                wx[e](function(e) {
                    var t = i.getMouseEvent(e, o, n);
                    t.setButton(e.button || 0), r(e, t), a.dispatchEvent(t);
                });
            }
            this._isRegisterEvent || (this._glView = cc.view, wx.onKeyDown(function(e) {
                return a.dispatchEvent(new c(l(e), !0));
            }), wx.onKeyUp(function(e) {
                return a.dispatchEvent(new c(l(e), !1));
            }), o = {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            }, e("onMouseDown", u.DOWN, function(e, t) {
                i._mousePressed = !0, i.handleTouchesBegin([ i.getTouchByXY(e.x, e.y, o) ]);
            }), e("onMouseUp", u.UP, function(e, t) {
                i._mousePressed = !1, i.handleTouchesEnd([ i.getTouchByXY(e.x, e.y, o) ]);
            }), e("onMouseMove", u.MOVE, function(e, t) {
                i.handleTouchesMove([ i.getTouchByXY(e.x, e.y, o) ]), i._mousePressed || t.setButton(null);
            }), e("onWheel", u.SCROLL, function(e, t) {
                t.setScrollData(0, -e.deltaY);
            }), this._isRegisterEvent = !0);
        });
    }, {} ],
    53: [ function(e, t, n) {
        "use strict";
        var i = wx.getFileSystemManager ? wx.getFileSystemManager() : null;
        function a() {
            return i ? null : (console.warn("can not get the file system!"), new Error("file system does not exist!"));
        }
        function r(e, t) {
            var n = a();
            if (n) return n;
            i.unlink({
                filePath: e,
                success: function success() {
                    cc.log("Removed local file " + e + " successfully!"), t && t(null);
                },
                fail: function fail(e) {
                    console.warn(e.errMsg), t && t(new Error(e.errMsg));
                }
            });
        }
        function o(e, t, n) {
            var r = a();
            if (r) return r;
            i.readFile({
                filePath: e,
                encoding: t,
                success: n ? function(e) {
                    n(null, e.data);
                } : void 0,
                fail: function fail(e) {
                    console.warn(e.errMsg), n && n(new Error(e.errMsg), null);
                }
            });
        }
        window.fsUtils = t.exports = {
            fs: i,
            getUserDataPath: function getUserDataPath() {
                return wx.env.USER_DATA_PATH;
            },
            checkFsValid: a,
            readDir: function readDir(e, t) {
                var n = a();
                if (n) return n;
                i.readdir({
                    dirPath: e,
                    success: t ? function(e) {
                        t(null, e.files);
                    } : void 0,
                    fail: t ? function(e) {
                        t(new Error(e.errMsg), null);
                    } : void 0
                });
            },
            exists: function exists(e, t) {
                var n = a();
                if (n) return n;
                i.access({
                    path: e,
                    success: t ? function() {
                        t(!0);
                    } : void 0,
                    fail: t ? function() {
                        t(!1);
                    } : void 0
                });
            },
            copyFile: function copyFile(e, t, n) {
                var r = a();
                if (r) return r;
                i.copyFile({
                    srcPath: e,
                    destPath: t,
                    success: function success() {
                        cc.log("copy file finished:" + t), n && n(null);
                    },
                    fail: function fail(e) {
                        cc.log("copy file failed:" + e.errMsg), n && n(new Error(e.errMsg));
                    }
                });
            },
            downloadFile: function downloadFile(t, e, n) {
                wx.downloadFile({
                    url: t,
                    filePath: e,
                    success: function success(e) {
                        200 === e.statusCode ? n && n(null, e.tempFilePath || e.filePath) : (e.filePath && r(e.filePath), 
                        console.warn("Download file failed: " + t), n && n(new Error(e.errMsg), null));
                    },
                    fail: function fail(e) {
                        console.warn(e.errMsg), n && n(new Error(e.errMsg), null);
                    }
                });
            },
            readText: function readText(e, t) {
                return o(e, "utf8", t);
            },
            readArrayBuffer: function readArrayBuffer(e, t) {
                return o(e, "", t);
            },
            saveFile: function saveFile(e, t, n) {
                wx.saveFile({
                    tempFilePath: e,
                    filePath: t,
                    success: function success(e) {
                        cc.log("save file finished:" + t), n && n(null, e.savedFilePath);
                    },
                    fail: function fail(e) {
                        cc.log("save file failed:" + e.errMsg), n && n(new Error(e.errMsg), null);
                    }
                });
            },
            writeFile: function writeFile(e, t, n, r) {
                var o = a();
                if (o) return o;
                i.writeFile({
                    filePath: e,
                    encoding: n,
                    data: t,
                    success: r ? function() {
                        r(null);
                    } : void 0,
                    fail: function fail(e) {
                        console.warn(e.errMsg), r && r(new Error(e.errMsg));
                    }
                });
            },
            deleteFile: r,
            writeFileSync: function writeFileSync(e, t, n) {
                var r = a();
                if (r) return r;
                try {
                    return i.writeFileSync(e, t, n), null;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return console.warn(e.message), new Error(e.message);
                }
            },
            readJsonSync: function readJsonSync(e) {
                var t = a();
                if (t) return t;
                try {
                    var n = i.readFileSync(e, "utf8");
                    return JSON.parse(n);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return console.warn(e.message), new Error(e.message);
                }
            },
            makeDirSync: function makeDirSync(e, t) {
                var n = a();
                if (n) return n;
                try {
                    return i.mkdirSync(e, t), null;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return console.warn(e.message), new Error(e.message);
                }
            }
        };
    }, {} ],
    54: [ function(e, t, n) {
        "use strict";
        var r = window.__globalAdapter, o = wx.getSystemInfoSync(), i = r.adaptSys;
        Object.assign(r, {
            adaptSys: function adaptSys(e) {
                var t;
                i.call(this, e), "windows" === o.platform ? (e.isMobile = !1, e.os = e.OS_WINDOWS) : "devtools" === o.platform && (-1 < (t = o.system.toLowerCase()).indexOf("android") ? e.os = e.OS_ANDROID : -1 < t.indexOf("ios") && (e.os = e.OS_IOS)), 
                wx.getOpenDataContext ? (e.platform = e.WECHAT_GAME, e.browserType = e.BROWSER_TYPE_WECHAT_GAME) : (e.platform = e.WECHAT_GAME_SUB, 
                e.browserType = e.BROWSER_TYPE_WECHAT_GAME_SUB), e.glExtension = function(e) {
                    return "OES_texture_float" !== e && !!cc.renderer.device.ext(e);
                };
            }
        });
    }, {} ],
    55: [ function(e, t, n) {
        "use strict";
        var r, o, a, i, c, u, s = e("../../../common/utils");
        window.__globalAdapter && (r = window.__globalAdapter, s.cloneMethod(r, wx, "getSystemInfoSync"), 
        s.cloneMethod(r, wx, "onTouchStart"), s.cloneMethod(r, wx, "onTouchMove"), s.cloneMethod(r, wx, "onTouchEnd"), 
        s.cloneMethod(r, wx, "onTouchCancel"), s.cloneMethod(r, wx, "createInnerAudioContext"), 
        s.cloneMethod(r, wx, "createVideo"), s.cloneMethod(r, wx, "setPreferredFramesPerSecond"), 
        s.cloneMethod(r, wx, "showKeyboard"), s.cloneMethod(r, wx, "hideKeyboard"), s.cloneMethod(r, wx, "updateKeyboard"), 
        s.cloneMethod(r, wx, "onKeyboardInput"), s.cloneMethod(r, wx, "onKeyboardConfirm"), 
        s.cloneMethod(r, wx, "onKeyboardComplete"), s.cloneMethod(r, wx, "offKeyboardInput"), 
        s.cloneMethod(r, wx, "offKeyboardConfirm"), s.cloneMethod(r, wx, "offKeyboardComplete"), 
        s.cloneMethod(r, wx, "getOpenDataContext"), s.cloneMethod(r, wx, "onMessage"), r.isSubContext = void 0 === r.getOpenDataContext, 
        s.cloneMethod(r, wx, "loadSubpackage"), s.cloneMethod(r, wx, "getSharedCanvas"), 
        s.cloneMethod(r, wx, "loadFont"), s.cloneMethod(r, wx, "onShow"), s.cloneMethod(r, wx, "onHide"), 
        s.cloneMethod(r, wx, "onError"), s.cloneMethod(r, wx, "offError"), o = !1, a = 1, 
        c = (i = wx.getSystemInfoSync()).windowWidth, u = i.windowHeight < c, wx.onDeviceOrientationChange && wx.onDeviceOrientationChange(function(e) {
            "landscape" === e.value ? a = 1 : "landscapeReverse" === e.value && (a = -1);
        }), Object.assign(r, {
            startAccelerometer: function startAccelerometer(i) {
                o ? wx.startAccelerometer && wx.startAccelerometer({
                    fail: function fail(e) {
                        console.error("start accelerometer failed", e);
                    }
                }) : (o = !0, wx.onAccelerometerChange && wx.onAccelerometerChange(function(e) {
                    var t, n = {}, r = e.x, o = e.y;
                    u && (t = r, r = -o, o = t), n.x = r * a, n.y = o * a, n.z = e.z, i && i(n);
                }));
            },
            stopAccelerometer: function stopAccelerometer() {
                wx.stopAccelerometer && wx.stopAccelerometer({
                    fail: function fail(e) {
                        console.error("stop accelerometer failed", e);
                    }
                });
            }
        }));
    }, {
        "../../../common/utils": 17
    } ]
}, {}, [ 22 ]);