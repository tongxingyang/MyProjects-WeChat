var _assertThisInitialized2 = require("../@babel/runtime/helpers/assertThisInitialized");

var _get2 = require("../@babel/runtime/helpers/get");

var _getPrototypeOf2 = require("../@babel/runtime/helpers/getPrototypeOf");

var _inherits2 = require("../@babel/runtime/helpers/inherits");

var _createSuper2 = require("../@babel/runtime/helpers/createSuper");

var _classCallCheck2 = require("../@babel/runtime/helpers/classCallCheck");

var _createClass2 = require("../@babel/runtime/helpers/createClass");

window.wxMiniGame = function(e, t) {
    "use strict";
    var i = /* */ function() {
        function i() {
            _classCallCheck2(this, i);
        }
        _createClass2(i, null, [ {
            key: "isLocalNativeFile",
            value: function isLocalNativeFile(e) {
                for (var t = 0, _i = l.nativefiles.length; t < _i; t++) {
                    if (0 == e.indexOf(l.nativefiles[t])) return !0;
                }
                return !1;
            }
        }, {
            key: "getFileInfo",
            value: function getFileInfo(e) {
                var t = e, n = i.fakeObj[t];
                return null == n ? null : n;
            }
        }, {
            key: "read",
            value: function read(e) {
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "utf8";
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
                var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
                var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
                var l;
                l = "" == s || -1 == s.indexOf("http://") && -1 == s.indexOf("https://") ? e : i.getFileNativePath(e), 
                l = t.URL.getAdptedFilePath(l), i.fs.readFile({
                    filePath: l,
                    encoding: n,
                    success: function success(e) {
                        null != a && a.runWith([ 0, e ]);
                    },
                    fail: function fail(e) {
                        e && "" != s ? i.downFiles(s, n, a, s, o, r) : null != a && a.runWith([ 1 ]);
                    }
                });
            }
        }, {
            key: "isFile",
            value: function isFile(e) {
                var t;
                try {
                    t = i.fs.statSync(e);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
                return t.isFile();
            }
        }, {
            key: "downFiles",
            value: function downFiles(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "utf8";
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
                var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
                var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
                var r = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !0;
                i.down({
                    url: e,
                    success: function success(l) {
                        200 === l.statusCode ? i.readFile(l.tempFilePath, t, n, a, s, o, r) : 403 === l.statusCode ? null != n && n.runWith([ 0, e ]) : null != n && n.runWith([ 1, l ]);
                    },
                    fail: function fail(e) {
                        null != n && n.runWith([ 1, e ]);
                    }
                }).onProgressUpdate(function(e) {
                    null != n && n.runWith([ 2, e.progress ]);
                });
            }
        }, {
            key: "readFile",
            value: function readFile(e) {
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "utf8";
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
                var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
                var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
                var d = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !0;
                e = t.URL.getAdptedFilePath(e), i.fs.readFile({
                    filePath: e,
                    encoding: n,
                    success: function success(t) {
                        -1 == e.indexOf("http://") && -1 == e.indexOf("https://") || -1 != e.indexOf(l.window.wx.env.USER_DATA_PATH) ? null != a && a.runWith([ 0, t ]) : l.AutoCacheDownFile || o ? (null != a && a.runWith([ 0, t ]), 
                        i.copyTOCache(e, s, null, n, d)) : null != a && a.runWith([ 0, t ]);
                    },
                    fail: function fail(e) {
                        e && null != a && a.runWith([ 1, e ]);
                    }
                });
            }
        }, {
            key: "downOtherFiles",
            value: function downOtherFiles(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                i.down({
                    url: e,
                    success: function success(e) {
                        200 === e.statusCode ? (l.autoCacheFile || a) && -1 == n.indexOf("qlogo.cn") && -1 == n.indexOf(".php") ? (null != t && t.runWith([ 0, e.tempFilePath ]), 
                        i.copyTOCache(e.tempFilePath, n, null, "", s)) : null != t && t.runWith([ 0, e.tempFilePath ]) : null != t && t.runWith([ 1, e ]);
                    },
                    fail: function fail(e) {
                        null != t && t.runWith([ 1, e ]);
                    }
                });
            }
        }, {
            key: "copyFile",
            value: function copyFile(e, t) {
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                i.fs.copyFile({
                    srcPath: e,
                    destPath: t,
                    success: function success() {
                        n && n.runWith(0);
                    },
                    fail: function fail(e) {
                        n && n.runWith([ 1, e ]);
                    }
                });
            }
        }, {
            key: "downLoadFile",
            value: function downLoadFile(e) {
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "utf8";
                window.navigator.userAgent.indexOf("MiniGame") < 0 ? t.Laya.loader.load(e, a) : n == t.Loader.IMAGE || n == t.Loader.SOUND ? i.downOtherFiles(e, a, e, !0, !1) : i.downFiles(e, s, a, e, !0, n, !1);
            }
        }, {
            key: "copyTOCache",
            value: function copyTOCache(e, n, a) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
                var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                var r = e.split("/"), d = r[r.length - 1], u = n, c = i.getFileInfo(n), h = i.getFileNativePath(d);
                i.fakeObj[u] = {
                    md5: d,
                    readyUrl: n,
                    size: 0,
                    times: t.Browser.now(),
                    encoding: s
                };
                var f = i.getCacheUseSize();
                c ? c.readyUrl != n ? i.fs.getFileInfo({
                    filePath: e,
                    success: function success(t) {
                        o && f + 4194304 + t.size >= 52428800 && (t.size > l.minClearSize && (l.minClearSize = t.size), 
                        i.onClearCacheRes()), i.deleteFile(e, n, a, s, t.size);
                    },
                    fail: function fail(e) {
                        null != a && a.runWith([ 1, e ]);
                    }
                }) : null != a && a.runWith([ 0 ]) : i.fs.getFileInfo({
                    filePath: e,
                    success: function success(t) {
                        o && f + 4194304 + t.size >= 52428800 && (t.size > l.minClearSize && (l.minClearSize = t.size), 
                        i.onClearCacheRes()), i.fs.copyFile({
                            srcPath: e,
                            destPath: h,
                            success: function success(e) {
                                i.onSaveFile(n, d, !0, s, a, t.size);
                            },
                            fail: function fail(e) {
                                null != a && a.runWith([ 1, e ]);
                            }
                        });
                    },
                    fail: function fail(e) {
                        null != a && a.runWith([ 1, e ]);
                    }
                });
            }
        }, {
            key: "onClearCacheRes",
            value: function onClearCacheRes() {
                var e = l.minClearSize, t = [];
                for (var n in i.filesListObj) {
                    "fileUsedSize" != n && t.push(i.filesListObj[n]);
                }
                i.sortOn(t, "times", i.NUMERIC);
                for (var a = 0, s = 1, o = t.length; s < o; s++) {
                    var r = t[s];
                    if (a >= e) break;
                    a += r.size, i.deleteFile("", r.readyUrl);
                }
            }
        }, {
            key: "sortOn",
            value: function sortOn(e, t) {
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                return n == i.NUMERIC ? e.sort(function(e, i) {
                    return e[t] - i[t];
                }) : n == (i.NUMERIC | i.DESCENDING) ? e.sort(function(e, i) {
                    return i[t] - e[t];
                }) : e.sort(function(e, i) {
                    return e[t] - i[t];
                });
            }
        }, {
            key: "getFileNativePath",
            value: function getFileNativePath(e) {
                return i.fileNativeDir + "/" + e;
            }
        }, {
            key: "deleteFile",
            value: function deleteFile(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
                var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var o = i.getFileInfo(t), r = i.getFileNativePath(o.md5);
                i.fs.unlink({
                    filePath: r,
                    success: function success(o) {
                        if ("" != e) {
                            var r = i.getFileNativePath(e);
                            i.fs.copyFile({
                                srcPath: e,
                                destPath: r,
                                success: function success(o) {
                                    i.onSaveFile(t, e, !0, a, n, s);
                                },
                                fail: function fail(e) {
                                    null != n && n.runWith([ 1, e ]);
                                }
                            });
                        } else i.onSaveFile(t, e, !1, a, n, s);
                    },
                    fail: function fail(e) {
                        null != n && n.runWith([ 1, e ]);
                    }
                });
            }
        }, {
            key: "deleteAll",
            value: function deleteAll() {
                var e = [];
                for (var t in i.filesListObj) {
                    "fileUsedSize" != t && e.push(i.filesListObj[t]);
                }
                for (var n = 1, a = e.length; n < a; n++) {
                    var s = e[n];
                    i.deleteFile("", s.readyUrl);
                }
                i.filesListObj && i.filesListObj.fileUsedSize && (i.filesListObj.fileUsedSize = 0), 
                i.writeFilesList("", JSON.stringify({}), !1);
            }
        }, {
            key: "onSaveFile",
            value: function onSaveFile(e, n) {
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
                var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var l = e;
                if (null == i.filesListObj.fileUsedSize && (i.filesListObj.fileUsedSize = 0), a) {
                    i.getFileNativePath(n);
                    i.filesListObj[l] = {
                        md5: n,
                        readyUrl: e,
                        size: r,
                        times: t.Browser.now(),
                        encoding: s
                    }, i.filesListObj.fileUsedSize = parseInt(i.filesListObj.fileUsedSize) + r, i.writeFilesList(l, JSON.stringify(i.filesListObj), !0), 
                    null != o && o.runWith([ 0 ]);
                } else if (i.filesListObj[l]) {
                    var d = parseInt(i.filesListObj[l].size);
                    i.filesListObj.fileUsedSize = parseInt(i.filesListObj.fileUsedSize) - d, i.fakeObj[l].md5 == i.filesListObj[l].md5 && delete i.fakeObj[l], 
                    delete i.filesListObj[l], i.writeFilesList(l, JSON.stringify(i.filesListObj), !1), 
                    null != o && o.runWith([ 0 ]);
                }
            }
        }, {
            key: "writeFilesList",
            value: function writeFilesList(e, t, n) {
                var a = i.fileNativeDir + "/" + i.fileListName;
                i.fs.writeFile({
                    filePath: a,
                    encoding: "utf8",
                    data: t,
                    success: function success(e) {},
                    fail: function fail(e) {}
                }), !l.isZiYu && l.isPosMsgYu && l.window.wx.postMessage({
                    url: e,
                    data: i.filesListObj[e],
                    isLoad: "filenative",
                    isAdd: n
                });
            }
        }, {
            key: "getCacheUseSize",
            value: function getCacheUseSize() {
                return i.filesListObj && i.filesListObj.fileUsedSize ? i.filesListObj.fileUsedSize : 0;
            }
        }, {
            key: "getCacheList",
            value: function getCacheList(e, t) {
                var n;
                try {
                    n = i.fs.statSync(e);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    n = null;
                }
                n ? i.readSync(i.fileListName, "utf8", t) : (i.fs.mkdirSync(e, !0), t && t.runWith([ 1 ]));
            }
        }, {
            key: "existDir",
            value: function existDir(e, t) {
                i.fs.mkdir({
                    dirPath: e,
                    success: function success(e) {
                        null != t && t.runWith([ 0, {
                            data: JSON.stringify({})
                        } ]);
                    },
                    fail: function fail(e) {
                        -1 != e.errMsg.indexOf("file already exists") ? i.readSync(i.fileListName, "utf8", t) : null != t && t.runWith([ 1, e ]);
                    }
                });
            }
        }, {
            key: "readSync",
            value: function readSync(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "utf8";
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
                var s, o = i.getFileNativePath(e);
                try {
                    s = i.fs.readFileSync(o, t), null != n && n.runWith([ 0, {
                        data: s
                    } ]);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    null != n && n.runWith([ 1 ]);
                }
            }
        }, {
            key: "setNativeFileDir",
            value: function setNativeFileDir(e) {
                i.fileNativeDir = l.window.wx.env.USER_DATA_PATH + e;
            }
        } ]);
        return i;
    }();
    i.fs = window.wx.getFileSystemManager(), i.down = window.wx.downloadFile, i.filesListObj = {}, 
    i.fakeObj = {}, i.fileListName = "layaairfiles.txt", i.ziyuFileData = {}, i.ziyuFileTextureData = {}, 
    i.loadPath = "", i.DESCENDING = 2, i.NUMERIC = 16;
    var n = /* */ function(_t$SoundChannel) {
        _inherits2(n, _t$SoundChannel);
        var _super = _createSuper2(n);
        function n(e) {
            var _this;
            _classCallCheck2(this, n);
            _this = _super.call(this), _this._sound = e, _this._audio = e._sound, _this._onCanplay = _this.onCanPlay.bind(_assertThisInitialized2(_this)), 
            _this._onError = _this.onError.bind(_assertThisInitialized2(_this)), _this._onEnd = _this.__onEnd.bind(_assertThisInitialized2(_this)), 
            _this.addEventListener();
            return _this;
        }
        _createClass2(n, [ {
            key: "addEventListener",
            value: function addEventListener() {
                this._audio.onError(this._onError), this._audio.onCanplay(this._onCanplay);
            }
        }, {
            key: "offEventListener",
            value: function offEventListener() {
                this._audio.offError(this._onError), this._audio.offCanplay(this._onCanplay), this._audio.offEnded(this._onEnd);
            }
        }, {
            key: "onError",
            value: function onError(e) {
                console.log("-----1---------------minisound-----url:", this.url), console.log(e), 
                this.event(t.Event.ERROR), this._audio && (this._sound.dispose(), this.offEventListener(), 
                this._sound = this._audio = null);
            }
        }, {
            key: "onCanPlay",
            value: function onCanPlay() {
                this._audio && (this.event(t.Event.COMPLETE), this.offEventListener(), this._audio.onEnded(this._onEnd), 
                this.isStopped ? this.stop() : this.play());
            }
        }, {
            key: "__onEnd",
            value: function __onEnd() {
                if (1 == this.loops) return this.completeHandler && (t.Laya.systemTimer.once(10, this, this.__runComplete, [ this.completeHandler ], !1), 
                this.completeHandler = null), this.stop(), void this.event(t.Event.COMPLETE);
                this.loops > 0 && this.loops--, this.startTime = 0, this.play();
            }
        }, {
            key: "play",
            value: function play() {
                this.isStopped = !1, t.SoundManager.addChannel(this), this._audio && this._audio.play();
            }
        }, {
            key: "startTime",
            set: function set(e) {
                this._audio && (this._audio.startTime = e);
            }
        }, {
            key: "autoplay",
            get: function get() {
                return !!this._audio && this._audio.autoplay;
            },
            set: function set(e) {
                this._audio && (this._audio.autoplay = e);
            }
        }, {
            key: "position",
            get: function get() {
                return this._audio ? this._audio.currentTime : 0;
            }
        }, {
            key: "duration",
            get: function get() {
                return this._audio ? this._audio.duration : 0;
            }
        }, {
            key: "stop",
            value: function stop() {
                _get2(_getPrototypeOf2(n.prototype), "stop", this).call(this), this.isStopped = !0, 
                t.SoundManager.removeChannel(this), this.completeHandler = null, this._audio && (this._audio.stop(), 
                this.loop || (this.offEventListener(), this._sound.dispose(), this._sound = null, 
                this._audio = null));
            }
        }, {
            key: "pause",
            value: function pause() {
                this.isStopped = !0, this._audio && this._audio.pause();
            }
        }, {
            key: "loop",
            get: function get() {
                return !!this._audio && this._audio.loop;
            },
            set: function set(e) {
                this._audio && (this._audio.loop = e);
            }
        }, {
            key: "resume",
            value: function resume() {
                this.isStopped = !1, t.SoundManager.addChannel(this), this._audio && this._audio.play();
            }
        }, {
            key: "volume",
            get: function get() {
                return this._audio ? this._audio.volume : 0;
            },
            set: function set(e) {
                this._audio && (this._audio.volume = e);
            }
        } ]);
        return n;
    }(t.SoundChannel);
    var a = /* */ function(_t$EventDispatcher) {
        _inherits2(a, _t$EventDispatcher);
        var _super2 = _createSuper2(a);
        function a() {
            var _this2;
            _classCallCheck2(this, a);
            _this2 = _super2.call(this), _this2.loaded = !1, _this2._sound = a._createSound();
            return _this2;
        }
        _createClass2(a, [ {
            key: "load",
            value: function load(e) {
                if (i.isLocalNativeFile(e)) {
                    if (-1 == e.indexOf(l.window.wx.env.USER_DATA_PATH) && (-1 != e.indexOf("http://") || -1 != e.indexOf("https://"))) if ("" != i.loadPath) e = e.split(i.loadPath)[1]; else {
                        var n = "" != t.URL.rootPath ? t.URL.rootPath : t.URL._basePath;
                        "" != n && (e = e.split(n)[1]);
                    }
                } else e = t.URL.formatURL(e);
                if (this.url = e, this.readyUrl = e, l.autoCacheFile && i.getFileInfo(e)) this.onDownLoadCallBack(e, 0); else if (l.autoCacheFile) {
                    if (i.isLocalNativeFile(e)) {
                        if (l.subNativeFiles && 0 == l.subNativeheads.length) for (var _a in l.subNativeFiles) {
                            var s = l.subNativeFiles[_a];
                            l.subNativeheads = l.subNativeheads.concat(s);
                            for (var _e = 0; _e < s.length; _e++) {
                                l.subMaps[s[_e]] = _a + "/" + s[_e];
                            }
                        }
                        if (l.subNativeFiles && -1 != e.indexOf("/")) {
                            var o = e.split("/")[0] + "/";
                            if (o && -1 != l.subNativeheads.indexOf(o)) {
                                var r = l.subMaps[o];
                                e = e.replace(o, r);
                            }
                        }
                        this.onDownLoadCallBack(e, 0);
                    } else !i.isLocalNativeFile(e) && -1 == e.indexOf("http://") && -1 == e.indexOf("https://") || -1 != e.indexOf(l.window.wx.env.USER_DATA_PATH) ? this.onDownLoadCallBack(e, 0) : i.downOtherFiles(e, t.Handler.create(this, this.onDownLoadCallBack, [ e ]), e);
                } else this.onDownLoadCallBack(e, 0);
            }
        }, {
            key: "onDownLoadCallBack",
            value: function onDownLoadCallBack(e, n) {
                var _a2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s;
                if (n) this.event(t.Event.ERROR); else if (l.autoCacheFile) {
                    if (_a2) s = _a2; else if (i.isLocalNativeFile(e)) {
                        var o = "" != t.URL.rootPath ? t.URL.rootPath : t.URL._basePath, r = e;
                        "" == o || -1 == e.indexOf("http://") && -1 == e.indexOf("https://") || (s = e.split(o)[1]), 
                        s || (s = r);
                    } else {
                        var d = i.getFileInfo(e);
                        if (d && d.md5) {
                            var u = d.md5;
                            s = i.getFileNativePath(u);
                        } else s = e;
                    }
                    this._sound.src = this.readyUrl = s;
                } else this._sound.src = this.readyUrl = e;
            }
        }, {
            key: "play",
            value: function play() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                if (this.isPlaying = !0, !this.url) return null;
                var _a3 = new n(this);
                return _a3.url = this.url, _a3.loops = i, _a3.loop = 0 === i, _a3.startTime = e, 
                _a3.play(), t.SoundManager.addChannel(_a3), _a3;
            }
        }, {
            key: "duration",
            get: function get() {
                return this._sound.duration;
            }
        }, {
            key: "dispose",
            value: function dispose() {
                this._sound && (this._sound.destroy(), this._sound = null, this.readyUrl = this.url = null);
            }
        } ], [ {
            key: "_createSound",
            value: function _createSound() {
                return a._id++, l.window.wx.createInnerAudioContext();
            }
        } ]);
        return a;
    }(t.EventDispatcher);
    a._id = 0;
    var s = /* */ function() {
        function s() {
            _classCallCheck2(this, s);
        }
        _createClass2(s, null, [ {
            key: "_createInputElement",
            value: function _createInputElement() {
                t.Input._initInput(t.Input.area = t.Browser.createElement("textarea")), t.Input._initInput(t.Input.input = t.Browser.createElement("input")), 
                t.Input.inputContainer = t.Browser.createElement("div"), t.Input.inputContainer.style.position = "absolute", 
                t.Input.inputContainer.style.zIndex = 1e5, t.Browser.container.appendChild(t.Input.inputContainer), 
                t.Laya.stage.on("resize", null, s._onStageResize), l.window.wx.onWindowResize && l.window.wx.onWindowResize(function(e) {}), 
                t.SoundManager._soundClass = a, t.SoundManager._musicClass = a;
                var e = l.systemInfo.model, i = l.systemInfo.system;
                -1 != e.indexOf("iPhone") && (t.Browser.onIPhone = !0, t.Browser.onIOS = !0, t.Browser.onIPad = !0, 
                t.Browser.onAndroid = !1), -1 == i.indexOf("Android") && -1 == i.indexOf("Adr") || (t.Browser.onAndroid = !0, 
                t.Browser.onIPhone = !1, t.Browser.onIOS = !1, t.Browser.onIPad = !1);
            }
        }, {
            key: "_onStageResize",
            value: function _onStageResize() {
                t.Laya.stage._canvasTransform.identity().scale(t.Browser.width / t.Render.canvas.width / t.Browser.pixelRatio, t.Browser.height / t.Render.canvas.height / t.Browser.pixelRatio);
            }
        }, {
            key: "wxinputFocus",
            value: function wxinputFocus(e) {
                var i = t.Input.inputElement.target;
                i && !i.editable || (l.window.wx.offKeyboardConfirm(), l.window.wx.offKeyboardInput(), 
                l.window.wx.showKeyboard({
                    defaultValue: i.text,
                    maxLength: i.maxChars,
                    multiple: i.multiline,
                    confirmHold: !0,
                    confirmType: i.confirmType || "done",
                    success: function success(e) {},
                    fail: function fail(e) {}
                }), l.window.wx.onKeyboardConfirm(function(e) {
                    var n = e ? e.value : "";
                    i._restrictPattern && (n = n.replace(/\u2006|\x27/g, ""), i._restrictPattern.test(n) && (n = n.replace(i._restrictPattern, ""))), 
                    i.text = n, i.event(t.Event.INPUT), s.inputEnter(), i.event("confirm");
                }), l.window.wx.onKeyboardInput(function(e) {
                    var n = e ? e.value : "";
                    i.multiline || -1 == n.indexOf("\n") ? (i._restrictPattern && (n = n.replace(/\u2006|\x27/g, ""), 
                    i._restrictPattern.test(n) && (n = n.replace(i._restrictPattern, ""))), i.text = n, 
                    i.event(t.Event.INPUT)) : s.inputEnter();
                }));
            }
        }, {
            key: "inputEnter",
            value: function inputEnter() {
                t.Input.inputElement.target.focus = !1;
            }
        }, {
            key: "wxinputblur",
            value: function wxinputblur() {
                s.hideKeyboard();
            }
        }, {
            key: "hideKeyboard",
            value: function hideKeyboard() {
                l.window.wx.offKeyboardConfirm(), l.window.wx.offKeyboardInput(), l.window.wx.hideKeyboard({
                    success: function success(e) {
                        console.log("隐藏键盘");
                    },
                    fail: function fail(e) {
                        console.log("隐藏键盘出错:" + (e ? e.errMsg : ""));
                    }
                });
            }
        } ]);
        return s;
    }();
    var o = /* */ function(_t$EventDispatcher2) {
        _inherits2(o, _t$EventDispatcher2);
        var _super3 = _createSuper2(o);
        function o() {
            _classCallCheck2(this, o);
            return _super3.call(this);
        }
        _createClass2(o, [ {
            key: "_loadResourceFilter",
            value: function _loadResourceFilter(e, n) {
                if (this.sourceUrl = t.URL.formatURL(n), -1 == n.indexOf(l.window.wx.env.USER_DATA_PATH) && (-1 != n.indexOf("http://") || -1 != n.indexOf("https://"))) if ("" != i.loadPath) n = n.split(i.loadPath)[1]; else {
                    var a = "" != t.URL.rootPath ? t.URL.rootPath : t.URL._basePath, s = n;
                    "" != a && (n = n.split(a)[1]), n || (n = s);
                }
                if (l.subNativeFiles && 0 == l.subNativeheads.length) for (var r in l.subNativeFiles) {
                    var d = l.subNativeFiles[r];
                    l.subNativeheads = l.subNativeheads.concat(d);
                    for (var u = 0; u < d.length; u++) {
                        l.subMaps[d[u]] = r + "/" + d[u];
                    }
                }
                if (l.subNativeFiles && -1 != n.indexOf("/")) {
                    var c = n.split("/")[0] + "/";
                    if (c && -1 != l.subNativeheads.indexOf(c)) {
                        var h = l.subMaps[c];
                        n = n.replace(c, h);
                    }
                }
                switch (e) {
                  case t.Loader.IMAGE:
                  case "htmlimage":
                  case "nativeimage":
                    o._transformImgUrl(n, e, this);
                    break;

                  case t.Loader.SOUND:
                    this._loadSound(n);
                    break;

                  default:
                    this._loadResource(e, n);
                }
            }
        }, {
            key: "_loadSound",
            value: function _loadSound(e) {
                if (l.autoCacheFile) {
                    var n = t.URL.formatURL(e);
                    i.isLocalNativeFile(e) || i.getFileInfo(n) ? o.onDownLoadCallBack(e, this, 0) : -1 != n.indexOf("http://") && -1 != n.indexOf("https://") && -1 == n.indexOf(l.window.wx.env.USER_DATA_PATH) ? i.downOtherFiles(encodeURI(n), t.Handler.create(o, o.onDownLoadCallBack, [ n, this ]), n) : o.onDownLoadCallBack(e, this, 0);
                } else o.onDownLoadCallBack(e, this, 0);
            }
        }, {
            key: "complete",
            value: function complete(e) {
                e instanceof t.Resource ? e._setCreateURL(this.sourceUrl) : e instanceof t.Texture && e.bitmap instanceof t.Resource && e.bitmap._setCreateURL(this.sourceUrl), 
                this.originComplete(e);
            }
        }, {
            key: "_loadHttpRequestWhat",
            value: function _loadHttpRequestWhat(e, n) {
                var a = l.getUrlEncode(e, n);
                if (t.Loader.preLoadedMap[e]) this.onLoaded(t.Loader.preLoadedMap[e]); else {
                    var s = t.URL.formatURL(e);
                    if (l.AutoCacheDownFile) {
                        if (i.isLocalNativeFile(e) || i.getFileInfo(s)) {
                            var r = e, d = i.getFileInfo(s);
                            d && d.md5 && (r = i.getFileNativePath(d.md5)), i.readFile(r, a, new t.Handler(o, o.onReadNativeCallBack, [ e, n, this ]), e);
                        } else -1 != e.indexOf(l.window.wx.env.USER_DATA_PATH) || -1 == s.indexOf("http://") && -1 == s.indexOf("https://") ? i.readFile(e, a, new t.Handler(o, o.onReadNativeCallBack, [ e, n, this ]), e) : i.downFiles(s, a, new t.Handler(o, o.onReadNativeCallBack, [ e, n, this ]), s, !0);
                    } else -1 != e.indexOf(l.window.wx.env.USER_DATA_PATH) || -1 == s.indexOf("http://") && -1 == s.indexOf("https://") ? i.readFile(e, a, new t.Handler(o, o.onReadNativeCallBack, [ e, n, this ]), e) : this._loadHttpRequest(s, n, this, this.onLoaded, this, this.onProgress, this, this.onError);
                }
            }
        } ], [ {
            key: "onDownLoadCallBack",
            value: function onDownLoadCallBack(e, n, a) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                if (a) n.event(t.Event.ERROR, "Load sound failed"); else {
                    var _o;
                    if (l.autoCacheFile) {
                        if (s) _o = s; else if (i.isLocalNativeFile(e)) _o = e; else {
                            var r = i.getFileInfo(e);
                            if (r && r.md5) {
                                var d = r.md5;
                                _o = i.getFileNativePath(d);
                            } else _o = e;
                        }
                    } else _o = t.URL.formatURL(e);
                    e = _o;
                    var u = new t.SoundManager._soundClass();
                    u.load(e), n.onLoaded(u);
                }
            }
        }, {
            key: "onReadNativeCallBack",
            value: function onReadNativeCallBack(e) {
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var _o2;
                a ? 1 == a && n._loadHttpRequest(e, i, n, n.onLoaded, n, n.onProgress, n, n.onError) : (_o2 = i == t.Loader.JSON || i == t.Loader.ATLAS || i == t.Loader.PREFAB || i == t.Loader.PLF ? l.getJson(s.data) : i == t.Loader.XML ? t.Utils.parseXMLFromString(s.data) : s.data, 
                !l.isZiYu && l.isPosMsgYu && i != t.Loader.BUFFER && l.window.wx.postMessage({
                    url: e,
                    data: _o2,
                    isLoad: "filedata"
                }), n.onLoaded(_o2));
            }
        }, {
            key: "_transformImgUrl",
            value: function _transformImgUrl(e, n, a) {
                if (l.isZiYu || i.isLocalNativeFile(e)) a._loadImage(e, !1); else if (l.autoCacheFile) {
                    var s = t.URL.formatURL(e);
                    i.isLocalNativeFile(e) || i.getFileInfo(s) ? o.onCreateImage(e, a) : -1 != e.indexOf(l.window.wx.env.USER_DATA_PATH) || -1 == s.indexOf("http://") && -1 == s.indexOf("https://") ? o.onCreateImage(e, a, !0) : i.downOtherFiles(s, new t.Handler(o, o.onDownImgCallBack, [ e, a ]), s);
                } else a._loadImage(e);
            }
        }, {
            key: "onDownImgCallBack",
            value: function onDownImgCallBack(e, t, i) {
                var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
                i ? t.onError(null) : o.onCreateImage(e, t, !1, n);
            }
        }, {
            key: "onCreateImage",
            value: function onCreateImage(e, n) {
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
                var _o3;
                if (l.autoCacheFile) {
                    if (a) {
                        if (l.isZiYu) {
                            var r = t.URL.formatURL(e);
                            _o3 = i.ziyuFileTextureData[r] ? i.ziyuFileTextureData[r] : e;
                        } else _o3 = e;
                    } else if ("" != s) _o3 = s; else {
                        var d = i.getFileInfo(t.URL.formatURL(e)).md5;
                        _o3 = i.getFileNativePath(d);
                    }
                } else _o3 = a ? e : s;
                n._loadImage(_o3, !1);
            }
        } ]);
        return o;
    }(t.EventDispatcher);
    var r = /* */ function() {
        function r() {
            _classCallCheck2(this, r);
        }
        _createClass2(r, null, [ {
            key: "__init__",
            value: function __init__() {
                r.items = r;
            }
        }, {
            key: "setItem",
            value: function setItem(e, t) {
                try {
                    l.window.wx.setStorageSync(e, t);
                } catch (i) {
                    i = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(i);
                    l.window.wx.setStorage({
                        key: e,
                        data: t
                    });
                }
            }
        }, {
            key: "getItem",
            value: function getItem(e) {
                return l.window.wx.getStorageSync(e);
            }
        }, {
            key: "setJSON",
            value: function setJSON(e, t) {
                r.setItem(e, t);
            }
        }, {
            key: "getJSON",
            value: function getJSON(e) {
                return r.getItem(e);
            }
        }, {
            key: "removeItem",
            value: function removeItem(e) {
                l.window.wx.removeStorageSync(e);
            }
        }, {
            key: "clear",
            value: function clear() {
                l.window.wx.clearStorageSync();
            }
        }, {
            key: "getStorageInfoSync",
            value: function getStorageInfoSync() {
                try {
                    var e = l.window.wx.getStorageInfoSync();
                    return console.log(e.keys), console.log(e.currentSize), console.log(e.limitSize), 
                    e;
                } catch (e) {}
                return null;
            }
        } ]);
        return r;
    }();
    r.support = !0;
    var l = /* */ function() {
        function l() {
            _classCallCheck2(this, l);
        }
        _createClass2(l, null, [ {
            key: "getJson",
            value: function getJson(e) {
                return JSON.parse(e);
            }
        }, {
            key: "enable",
            value: function enable() {
                l.init(t.Laya.isWXPosMsg, t.Laya.isWXOpenDataContext);
            }
        }, {
            key: "init",
            value: function init() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                l._inited || (l._inited = !0, l.window = window, l.window.hasOwnProperty("wx") && (l.window.navigator.userAgent.indexOf("MiniGame") < 0 || (l.isZiYu = n, 
                l.isPosMsgYu = e, l.EnvConfig = {}, l.isZiYu || (i.setNativeFileDir("/layaairGame"), 
                i.getCacheList(i.fileNativeDir, t.Handler.create(l, l.onMkdirCallBack))), l.systemInfo = l.window.wx.getSystemInfoSync(), 
                l.window.focus = function() {}, t.Laya._getUrlPath = function() {
                    return "";
                }, l.window.logtime = function(e) {}, l.window.alertTimeLog = function(e) {}, l.window.resetShareInfo = function() {}, 
                l.window.CanvasRenderingContext2D = function() {}, l.window.CanvasRenderingContext2D.prototype = l.window.wx.createCanvas().getContext("2d").__proto__, 
                l.window.document.body.appendChild = function() {}, l.EnvConfig.pixelRatioInt = 0, 
                t.Browser._pixelRatio = l.pixelRatio(), l._preCreateElement = t.Browser.createElement, 
                t.Browser.createElement = l.createElement, t.RunDriver.createShaderCondition = l.createShaderCondition, 
                t.Utils.parseXMLFromString = l.parseXMLFromString, t.Input._createInputElement = s._createInputElement, 
                t.Loader.prototype._loadResourceFilter = o.prototype._loadResourceFilter, t.Loader.prototype.originComplete = t.Loader.prototype.complete, 
                t.Loader.prototype.complete = o.prototype.complete, t.Loader.prototype._loadSound = o.prototype._loadSound, 
                t.Loader.prototype._loadHttpRequestWhat = o.prototype._loadHttpRequestWhat, t.LocalStorage._baseClass = r, 
                r.__init__(), l.window.wx.onMessage && l.window.wx.onMessage(l._onMessage))));
            }
        }, {
            key: "_onMessage",
            value: function _onMessage(e) {
                switch (e.type) {
                  case "changeMatrix":
                    t.Laya.stage.transform.identity(), t.Laya.stage._width = e.w, t.Laya.stage._height = e.h, 
                    t.Laya.stage._canvasTransform = new t.Matrix(e.a, e.b, e.c, e.d, e.tx, e.ty);
                    break;

                  case "display":
                    t.Laya.stage.frameRate = e.rate || t.Stage.FRAME_FAST;
                    break;

                  case "undisplay":
                    t.Laya.stage.frameRate = t.Stage.FRAME_SLEEP;
                }
                "opendatacontext" == e.isLoad ? e.url && (i.ziyuFileData[e.url] = e.atlasdata, i.ziyuFileTextureData[e.imgReadyUrl] = e.imgNativeUrl) : "openJsondatacontext" == e.isLoad ? e.url && (i.ziyuFileData[e.url] = e.atlasdata) : "openJsondatacontextPic" == e.isLoad && (i.ziyuFileTextureData[e.imgReadyUrl] = e.imgNativeUrl);
            }
        }, {
            key: "getUrlEncode",
            value: function getUrlEncode(e, t) {
                return "arraybuffer" == t ? "" : "utf8";
            }
        }, {
            key: "downLoadFile",
            value: function downLoadFile(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "utf8";
                i.getFileInfo(e) ? null != n && n.runWith([ 0 ]) : i.downLoadFile(e, t, n, a);
            }
        }, {
            key: "remove",
            value: function remove(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                i.deleteFile("", e, t, "", 0);
            }
        }, {
            key: "removeAll",
            value: function removeAll() {
                i.deleteAll();
            }
        }, {
            key: "hasNativeFile",
            value: function hasNativeFile(e) {
                return i.isLocalNativeFile(e);
            }
        }, {
            key: "getFileInfo",
            value: function getFileInfo(e) {
                return i.getFileInfo(e);
            }
        }, {
            key: "getFileList",
            value: function getFileList() {
                return i.filesListObj;
            }
        }, {
            key: "exitMiniProgram",
            value: function exitMiniProgram() {
                l.window.wx.exitMiniProgram();
            }
        }, {
            key: "onMkdirCallBack",
            value: function onMkdirCallBack(e, t) {
                e ? (i.fakeObj = {}, i.filesListObj = {}) : (i.filesListObj = JSON.parse(t.data), 
                i.fakeObj = JSON.parse(t.data));
                var n = i.fs.readdirSync(i.fileNativeDir);
                if (n.length) {
                    var a, s, o = {};
                    for (var _e2 in i.filesListObj) {
                        "fileUsedSize" != _e2 && (o[(a = i.filesListObj[_e2]).md5] = a.readyUrl);
                    }
                    for (var _e3 = 0, _t = n.length; _e3 < _t; _e3++) {
                        if ((s = n[_e3]) != i.fileListName) {
                            if (!o[s]) {
                                var _e4 = i.getFileNativePath(s);
                                i.fs.unlink({
                                    filePath: _e4,
                                    success: function success(e) {
                                        console.log("删除无引用的磁盘文件:" + s);
                                    }
                                });
                            }
                            delete o[s];
                        }
                    }
                    for (var _e5 in o) {
                        delete i.filesListObj[o[_e5]], delete i.fakeObj[o[_e5]], console.log("删除错误记录：", o[_e5]);
                    }
                }
            }
        }, {
            key: "pixelRatio",
            value: function pixelRatio() {
                if (!l.EnvConfig.pixelRatioInt) try {
                    return l.EnvConfig.pixelRatioInt = l.systemInfo.pixelRatio, l.systemInfo.pixelRatio;
                } catch (e) {}
                return l.EnvConfig.pixelRatioInt;
            }
        }, {
            key: "createElement",
            value: function createElement(e) {
                var t;
                if ("canvas" == e) return 1 == l.idx ? l.isZiYu ? (t = l.window.sharedCanvas).style = {} : t = l.window.canvas : t = l.window.wx.createCanvas(), 
                l.idx++, t;
                if ("textarea" == e || "input" == e) return l.onCreateInput(e);
                if ("div" == e) {
                    var i = l._preCreateElement(e);
                    return i.contains = function(e) {
                        return null;
                    }, i.removeChild = function(e) {}, i;
                }
                return l._preCreateElement(e);
            }
        }, {
            key: "onCreateInput",
            value: function onCreateInput(e) {
                var t = l._preCreateElement(e);
                return t.focus = s.wxinputFocus, t.blur = s.wxinputblur, t.style = {}, t.value = 0, 
                t.parentElement = {}, t.placeholder = {}, t.type = {}, t.setColor = function(e) {}, 
                t.setType = function(e) {}, t.setFontFace = function(e) {}, t.addEventListener = function(e) {}, 
                t.contains = function(e) {
                    return null;
                }, t.removeChild = function(e) {}, t;
            }
        }, {
            key: "createShaderCondition",
            value: function createShaderCondition(e) {
                return function() {
                    return this[e.replace("this.", "")];
                };
            }
        }, {
            key: "sendAtlasToOpenDataContext",
            value: function sendAtlasToOpenDataContext(e) {
                if (!l.isZiYu) {
                    var i = t.Loader.getRes(t.URL.formatURL(e));
                    if (!i) throw "传递的url没有获取到对应的图集数据信息，请确保图集已经过！";
                    i.meta.image.split(",");
                    if (i.meta && i.meta.image) for (var n = i.meta.image.split(","), a = e.indexOf("/") >= 0 ? "/" : "\\", s = e.lastIndexOf(a), o = s >= 0 ? e.substr(0, s + 1) : "", r = 0, d = n.length; r < d; r++) {
                        n[r] = o + n[r];
                    } else n = [ e.replace(".json", ".png") ];
                    for (r = 0; r < n.length; r++) {
                        var u = n[r];
                        l.postInfoToContext(t.Laya.URL.formatURL(e), t.Laya.URL.formatURL(u), i);
                    }
                }
            }
        }, {
            key: "postInfoToContext",
            value: function postInfoToContext(e, n, a) {
                var s = {
                    frames: a.frames,
                    meta: a.meta
                }, o = n, r = i.getFileInfo(t.URL.formatURL(n));
                if (r) var d = r.md5, u = i.getFileNativePath(d); else u = o;
                if (!u) throw "获取图集的磁盘url路径不存在！";
                l.window.wx.postMessage({
                    url: e,
                    atlasdata: s,
                    imgNativeUrl: u,
                    imgReadyUrl: o,
                    isLoad: "opendatacontext"
                });
            }
        }, {
            key: "sendSinglePicToOpenDataContext",
            value: function sendSinglePicToOpenDataContext(e) {
                var n = t.URL.formatURL(e), a = i.getFileInfo(n);
                if (a) {
                    var s = a.md5, o = i.getFileNativePath(s);
                    e = n;
                } else o = e;
                if (!o) throw "获取图集的磁盘url路径不存在！";
                e = t.Laya.URL.formatURL(e), l.window.wx.postMessage({
                    url: e,
                    imgNativeUrl: o,
                    imgReadyUrl: e,
                    isLoad: "openJsondatacontextPic"
                });
            }
        }, {
            key: "sendJsonDataToDataContext",
            value: function sendJsonDataToDataContext(e) {
                if (!l.isZiYu) {
                    e = t.Laya.URL.formatURL(e);
                    var i = t.Loader.getRes(e);
                    if (!i) throw "传递的url没有获取到对应的图集数据信息，请确保图集已经过！";
                    l.window.wx.postMessage({
                        url: e,
                        atlasdata: i,
                        isLoad: "openJsondatacontext"
                    });
                }
            }
        } ]);
        return l;
    }();
    l._inited = !1, l.autoCacheFile = !0, l.minClearSize = 5242880, l.nativefiles = [ "layaNativeDir", "wxlocal" ], 
    l.subNativeFiles = [], l.subNativeheads = [], l.subMaps = [], l.AutoCacheDownFile = !1, 
    l.parseXMLFromString = function(e) {
        var t;
        e = e.replace(/>\s+</g, "><");
        try {
            t = new l.window.Parser.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            throw "需要引入xml解析库文件";
        }
        return t;
    }, l.idx = 1;
    var d = /* */ function(_t$EventDispatcher3) {
        _inherits2(d, _t$EventDispatcher3);
        var _super4 = _createSuper2(d);
        function d() {
            _classCallCheck2(this, d);
            return _super4.call(this);
        }
        _createClass2(d, [ {
            key: "on",
            value: function on(e, t, i) {
                var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return _get2(_getPrototypeOf2(d.prototype), "on", this).call(this, e, t, i, n), 
                d.startListen(this.onDeviceOrientationChange), this;
            }
        }, {
            key: "off",
            value: function off(e, t, i) {
                var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                return this.hasListener(e) || d.stopListen(), _get2(_getPrototypeOf2(d.prototype), "off", this).call(this, e, t, i, n);
            }
        } ], [ {
            key: "__init__",
            value: function __init__() {
                try {
                    var e;
                    if (!(e = t.Accelerator)) return;
                    e.prototype.on = d.prototype.on, e.prototype.off = d.prototype.off;
                } catch (e) {}
            }
        }, {
            key: "startListen",
            value: function startListen(e) {
                if (d._callBack = e, !d._isListening) {
                    d._isListening = !0;
                    try {
                        l.window.wx.onAccelerometerChange(d.onAccelerometerChange);
                    } catch (e) {}
                }
            }
        }, {
            key: "stopListen",
            value: function stopListen() {
                d._isListening = !1;
                try {
                    l.window.wx.stopAccelerometer({});
                } catch (e) {}
            }
        }, {
            key: "onAccelerometerChange",
            value: function onAccelerometerChange(e) {
                var t;
                (t = {}).acceleration = e, t.accelerationIncludingGravity = e, t.rotationRate = {}, 
                null != d._callBack && d._callBack(t);
            }
        } ]);
        return d;
    }(t.EventDispatcher);
    d._isListening = !1;
    var u = /* */ function() {
        function u() {
            _classCallCheck2(this, u);
        }
        _createClass2(u, null, [ {
            key: "__init__",
            value: function __init__() {
                l.window.navigator.geolocation.getCurrentPosition = u.getCurrentPosition, l.window.navigator.geolocation.watchPosition = u.watchPosition, 
                l.window.navigator.geolocation.clearWatch = u.clearWatch;
            }
        }, {
            key: "getCurrentPosition",
            value: function getCurrentPosition() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var n;
                (n = {}).success = function(t) {
                    null != e && e(t);
                }, n.fail = t, l.window.wx.getLocation(n);
            }
        }, {
            key: "watchPosition",
            value: function watchPosition() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var a;
                return u._curID++, (a = {}).success = e, a.error = i, u._watchDic[u._curID] = a, 
                t.Laya.systemTimer.loop(1e3, null, u._myLoop), u._curID;
            }
        }, {
            key: "clearWatch",
            value: function clearWatch(e) {
                delete u._watchDic[e], u._hasWatch() || t.Laya.systemTimer.clear(null, u._myLoop);
            }
        }, {
            key: "_hasWatch",
            value: function _hasWatch() {
                var e;
                for (e in u._watchDic) {
                    if (u._watchDic[e]) return !0;
                }
                return !1;
            }
        }, {
            key: "_myLoop",
            value: function _myLoop() {
                u.getCurrentPosition(u._mySuccess, u._myError);
            }
        }, {
            key: "_mySuccess",
            value: function _mySuccess(e) {
                var i, n = {};
                for (i in n.coords = e, n.timestamp = t.Browser.now(), u._watchDic) {
                    u._watchDic[i].success && u._watchDic[i].success(n);
                }
            }
        }, {
            key: "_myError",
            value: function _myError(e) {
                var t;
                for (t in u._watchDic) {
                    u._watchDic[t].error && u._watchDic[t].error(e);
                }
            }
        } ]);
        return u;
    }();
    u._watchDic = {}, u._curID = 0;
    e.MiniAccelerator = d, e.MiniAdpter = l, e.MiniFileMgr = i, e.MiniInput = s, e.MiniLoader = o, 
    e.MiniLocalStorage = r, e.MiniLocation = u, e.MiniSound = a, e.MiniSoundChannel = n, 
    e.MiniVideo = /* */ function() {
        function _class() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 320;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 240;
            _classCallCheck2(this, _class);
            this.videoend = !1, this.videourl = "", this.videoElement = l.window.wx.createVideo({
                width: e,
                height: t,
                autoplay: !0
            });
        }
        _createClass2(_class, [ {
            key: "on",
            value: function on(e, t, i) {
                "loadedmetadata" == e ? (this.onPlayFunc = i.bind(t), this.videoElement.onPlay = this.onPlayFunction.bind(this)) : "ended" == e && (this.onEndedFunC = i.bind(t), 
                this.videoElement.onEnded = this.onEndedFunction.bind(this)), this.videoElement.onTimeUpdate = this.onTimeUpdateFunc.bind(this);
            }
        }, {
            key: "onTimeUpdateFunc",
            value: function onTimeUpdateFunc(e) {
                this.position = e.position, this._duration = e.duration;
            }
        }, {
            key: "duration",
            get: function get() {
                return this._duration;
            }
        }, {
            key: "onPlayFunction",
            value: function onPlayFunction() {
                this.videoElement && (this.videoElement.readyState = 200), console.log("=====视频加载完成========"), 
                null != this.onPlayFunc && this.onPlayFunc();
            }
        }, {
            key: "onEndedFunction",
            value: function onEndedFunction() {
                this.videoElement && (this.videoend = !0, console.log("=====视频播放完毕========"), null != this.onEndedFunC && this.onEndedFunC());
            }
        }, {
            key: "off",
            value: function off(e, t, i) {
                "loadedmetadata" == e ? (this.onPlayFunc = i.bind(t), this.videoElement.offPlay = this.onPlayFunction.bind(this)) : "ended" == e && (this.onEndedFunC = i.bind(t), 
                this.videoElement.offEnded = this.onEndedFunction.bind(this));
            }
        }, {
            key: "load",
            value: function load(e) {
                this.videoElement && (this.videoElement.src = e);
            }
        }, {
            key: "play",
            value: function play() {
                this.videoElement && (this.videoend = !1, this.videoElement.play());
            }
        }, {
            key: "pause",
            value: function pause() {
                this.videoElement && (this.videoend = !0, this.videoElement.pause());
            }
        }, {
            key: "currentTime",
            get: function get() {
                return this.videoElement ? this.videoElement.initialTime : 0;
            },
            set: function set(e) {
                this.videoElement && (this.videoElement.initialTime = e);
            }
        }, {
            key: "videoWidth",
            get: function get() {
                return this.videoElement ? this.videoElement.width : 0;
            }
        }, {
            key: "videoHeight",
            get: function get() {
                return this.videoElement ? this.videoElement.height : 0;
            }
        }, {
            key: "ended",
            get: function get() {
                return this.videoend;
            }
        }, {
            key: "loop",
            get: function get() {
                return !!this.videoElement && this.videoElement.loop;
            },
            set: function set(e) {
                this.videoElement && (this.videoElement.loop = e);
            }
        }, {
            key: "playbackRate",
            get: function get() {
                return this.videoElement ? this.videoElement.playbackRate : 0;
            },
            set: function set(e) {
                this.videoElement && (this.videoElement.playbackRate = e);
            }
        }, {
            key: "muted",
            get: function get() {
                return !!this.videoElement && this.videoElement.muted;
            },
            set: function set(e) {
                this.videoElement && (this.videoElement.muted = e);
            }
        }, {
            key: "paused",
            get: function get() {
                return !!this.videoElement && this.videoElement.paused;
            }
        }, {
            key: "size",
            value: function size(e, t) {
                this.videoElement && (this.videoElement.width = e, this.videoElement.height = t);
            }
        }, {
            key: "x",
            get: function get() {
                return this.videoElement ? this.videoElement.x : 0;
            },
            set: function set(e) {
                this.videoElement && (this.videoElement.x = e);
            }
        }, {
            key: "y",
            get: function get() {
                return this.videoElement ? this.videoElement.y : 0;
            },
            set: function set(e) {
                this.videoElement && (this.videoElement.y = e);
            }
        }, {
            key: "currentSrc",
            get: function get() {
                return this.videoElement.src;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.videoElement && this.videoElement.destroy(), this.videoElement = null, this.onEndedFunC = null, 
                this.onPlayFunc = null, this.videoend = !1, this.videourl = null;
            }
        }, {
            key: "reload",
            value: function reload() {
                this.videoElement && (this.videoElement.src = this.videourl);
            }
        } ], [ {
            key: "__init__",
            value: function __init__() {}
        } ]);
        return _class;
    }();
};