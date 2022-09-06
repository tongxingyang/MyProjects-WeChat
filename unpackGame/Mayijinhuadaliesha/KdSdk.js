var e = require("@babel/runtime/helpers/interopRequireDefault")(require("@babel/runtime/helpers/typeof"));

!function(e, n) {
    for (var t in n) e[t] = n[t];
}(exports, function(e) {
    var n = {};
    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
    }
    return t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        });
    }, t.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return t.d(n, "a", n), n;
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
    }, t.p = "", t(t.s = 11);
}([ function(n, t, o) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function n() {}
        return n.lerr = function() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            e.unshift("====>"), console.error.apply(window, e);
        }, n.llog = function() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            e.unshift("====>"), console.log.apply(window, e);
        }, n.twoInt = function(e) {
            return e < 10 ? "0" + e : e;
        }, n.todayStr = function() {
            var e = new Date();
            return "" + e.getFullYear() + n.twoInt(e.getMonth() + 1) + n.twoInt(e.getDate());
        }, n.randomInt = function(e, n) {
            return Math.floor(Math.random() * (n - e + 1) + e);
        }, n.saveData = function(e, n) {
            var t = window.localStorage;
            t && t.setItem("kcSdk_" + e, n);
        }, n.loadData = function(e) {
            var n = window.localStorage;
            if (n) {
                var t = n.getItem("kcSdk_" + e);
                if (t) return t;
            }
            return null;
        }, n.encodeUTF8 = function(e) {
            var n, t, o, i = [];
            for (n = 0; n < e.length; n++) (t = e.charCodeAt(n)) < 128 ? i.push(t) : t < 2048 ? i.push(192 + (t >> 6 & 31), 128 + (63 & t)) : ((o = 55296 ^ t) >> 10 == 0 ? (t = (o << 10) + (56320 ^ e.charCodeAt(++n)) + 65536, 
            i.push(240 + (t >> 18 & 7), 128 + (t >> 12 & 63))) : i.push(224 + (t >> 12 & 15)), 
            i.push(128 + (t >> 6 & 63), 128 + (63 & t)));
            return i;
        }, n.s = function(e) {
            var t, o, i, r = new Uint8Array(n.encodeUTF8(e)), a = 16 + (r.length + 8 >>> 6 << 4);
            for ((e = new Uint8Array(a << 2)).set(new Uint8Array(r.buffer)), e = new Uint32Array(e.buffer), 
            i = new DataView(e.buffer), t = 0; t < a; t++) e[t] = i.getUint32(t << 2);
            e[r.length >> 2] |= 128 << 24 - 8 * (3 & r.length), e[a - 1] = r.length << 3;
            var d = [], l = [ function() {
                return c[1] & c[2] | ~c[1] & c[3];
            }, function() {
                return c[1] ^ c[2] ^ c[3];
            }, function() {
                return c[1] & c[2] | c[1] & c[3] | c[2] & c[3];
            }, function() {
                return c[1] ^ c[2] ^ c[3];
            } ], s = function(e, n) {
                return e << n | e >>> 32 - n;
            }, h = [ 1518500249, 1859775393, -1894007588, -899497514 ], c = [ 1732584193, -271733879, null, null, -1009589776 ];
            for (c[2] = ~c[0], c[3] = ~c[1], t = 0; t < e.length; t += 16) {
                var u = c.slice(0);
                for (o = 0; o < 80; o++) d[o] = o < 16 ? e[t + o] : s(d[o - 3] ^ d[o - 8] ^ d[o - 14] ^ d[o - 16], 1), 
                i = s(c[0], 5) + l[o / 20 | 0]() + c[4] + d[o] + h[o / 20 | 0] | 0, c[1] = s(c[1], 30), 
                c.pop(), c.unshift(i);
                for (o = 0; o < 5; o++) c[o] = c[o] + u[o] | 0;
            }
            for (i = new DataView(new Uint32Array(c).buffer), t = 0; t < 5; t++) c[t] = i.getUint32(t << 2);
            return Array.prototype.map.call(new Uint8Array(new Uint32Array(c).buffer), function(e) {
                return (e < 16 ? "0" : "") + e.toString(16);
            }).join("");
        }, n.b = function(n) {
            var t = [];
            for (var o in n) t.push(o);
            t = t.sort();
            for (var i = "", r = 0; r < t.length; r++) {
                var a = n[t[r]];
                "object" == (0, e.default)(a) && (a = this.b(a)), i += t[r] + a;
            }
            return i;
        }, n.a = function(e, t, o) {
            var i = [];
            for (var r in e) null !== e[r] && void 0 !== e[r] ? i.push(r) : delete e[r];
            i = i.sort();
            var a = n.b(e);
            return t && (a += t), a += o || "pH0Xhyenu2e1zdUg", n.s(a);
        }, n.jget = function(e, t) {
            t || (t = function(e) {
                if (e) return n.lerr(e);
            });
            var o = new XMLHttpRequest();
            o.open("GET", e, !0), o.onload = function() {
                return 200 == o.status ? t(null, o.responseText) : t("[ERR-jget]:" + o.status);
            }, o.send();
        }, n.jax = function(e, t, o) {
            o || (o = function(e) {
                if (e) return n.lerr(e);
            });
            var i = new XMLHttpRequest(), r = new Date().getTime();
            t.s = n.a(t, r), i.open("POST", e, !0), i.setRequestHeader("Content-Type", "application/json; charset=utf-8"), 
            i.setRequestHeader("ts", "" + r);
            var a = JSON.stringify(t);
            i.send(a), i.onload = function() {
                if (200 == i.status) {
                    var e = {
                        jaxERR: "" + i.responseText
                    };
                    try {
                        e = JSON.parse(i.responseText);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        return n.lerr(e), o(null, {
                            re: "1111",
                            err: "jsonErr:" + i.responseText
                        });
                    }
                    return o(null, e);
                }
                return o(null, {
                    re: "9" + i.status
                });
            };
        }, n;
    }();
    t.jax = i.jax, t.jget = i.jget, t.llog = i.llog, t.lerr = i.lerr, t.saveData = i.saveData, 
    t.loadData = i.loadData, t.randomInt = i.randomInt, t.todayStr = i.todayStr;
}, function(e, n, t) {
    var o, i = this && this.__extends || (o = function(e, n) {
        return (o = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, n) {
            e.__proto__ = n;
        } || function(e, n) {
            for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        })(e, n);
    }, function(e, n) {
        function t() {
            this.constructor = e;
        }
        o(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, 
        new t());
    });
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = t(2), a = t(0), d = function(e) {
        function n() {
            var n = null !== e && e.apply(this, arguments) || this;
            return n.adPosIdKey = "adUnitId", n.wxBannerShowTimes = 0, n.bannerDestroyed = !1, 
            n;
        }
        return i(n, e), n.prototype.getChannelT = function(e) {
            var n = window.wx;
            return n ? e && !n[e] ? (a.llog("channelT(wx)." + e + " 不存在!!"), null) : n : (a.llog("channelT(wx) 不存在!!"), 
            null);
        }, n.prototype.initChannel = function(e, n) {
            this.videoSleepTime = 5e3;
            var t = this;
            t.isInitOK = !0, setTimeout(function() {
                t.loadBanner();
            }, this.bannerLoadDelay), setTimeout(function() {
                t.interAutoLoad && t.loadInter();
            }, 1e3), t.videoAutoLoad && t.loadVideo(), t.onShow(), t.showShareMenu(), t.getLaunchOptionsSync(), 
            a.llog("init complete!" + this.channelName), t.isInitOK = !0;
        }, n.prototype.showShareMenu = function() {
            var e = this.getChannelT();
            e && e.showShareMenu && this.showShareMenuObj && (e.showShareMenu(this.showShareMenuObj), 
            a.llog("showShareMenu"));
        }, n.prototype.shareAppMessage = function() {
            var e = this.getChannelT();
            e && e.shareAppMessage && this.shareAppMessageObj && e.shareAppMessage(this.shareAppMessageObj);
        }, n.prototype.onShow = function() {
            var e = this.getChannelT();
            e && e.onShow && this.onShowFn && e.onShow(this.onShowFn);
        }, n.prototype.getLaunchOptionsSync = function() {
            var e = this.getChannelT();
            e && e.getLaunchOptionsSync && this.getLaunchOptionsSyncFn && this.getLaunchOptionsSyncFn(e.getLaunchOptionsSync());
        }, n.prototype.installShortcut = function() {}, n.prototype.destroyBanner = function() {
            this.bannerAdObj && this.bannerAdObj.destroy && (this.bannerAdObj.destroy(), this.bannerDestroyed = !0, 
            this.triggerEvent("banner", "destroy"));
        }, n.prototype.loadBanner = function(e) {
            var n = this;
            if (e || !(this.checkPrepare("banner", "createBannerAd", !0) <= 0)) {
                a.llog("loadBanner now");
                var t = this.getChannelT(), o = {
                    style: {
                        left: 20,
                        top: 400,
                        width: 350
                    }
                };
                if (o[this.adPosIdKey] = this.bannerId, this.bannerIntervals && (o.adIntervals = this.bannerIntervals), 
                this.bannerStyle) {
                    var i = this.bannerStyle;
                    "function" == typeof this.bannerStyle && (i = this.bannerStyle()), o.style = i;
                }
                n.bannerAdObj && n.bannerAdObj.destroy && (n.bannerAdObj.destroy(), a.llog("banner destroy and reCreate"));
                var r = n.addCreateAdConfProp(o), d = t.createBannerAd(r);
                this.bannerDestroyed = !1, n.bannerAdObj = d, d.onLoad(function() {
                    a.llog("banner onLoad"), n.triggerEvent("banner", "load");
                }), d.onError(function(e) {
                    a.llog("banner onError:", e), a.llog("bannerConfig:", r), n.loadDelay("banner", 3e3, function() {
                        n.loadBanner(!1);
                    }), n.triggerEvent("banner", "error");
                }), d.onResize(function(e) {
                    a.llog("banner onResize", e), n.bannerOnResize ? n.bannerOnResize(e, d, t) : (d.style.top = t.getSystemInfoSync().screenHeight - e.height + .1, 
                    d.style.left = (t.getSystemInfoSync().screenWidth - e.width) / 2 + .1);
                }), e && this.doShowBanner();
            }
        }, n.prototype.doShowBanner = function() {
            this.wxBannerShowTimes++, a.llog("show banner now! - ", this.wxBannerShowTimes, "/", this.wxBannerMaxShowTimes), 
            this.bannerAdObj.show();
        }, n.prototype.showBanner = function() {
            this.checkPrepare("banner", null, !0) <= 0 || (!this.bannerDestroyed && this.bannerAdObj && this.wxBannerShowTimes <= this.wxBannerMaxShowTimes ? this.doShowBanner() : (this.wxBannerShowTimes = 0, 
            this.loadBanner(!0)));
        }, n.prototype.loadInter = function(e, n) {
            if (n || !(this.checkPrepare("inter", "createInterstitialAd", !0) <= 0)) {
                a.llog("load inter start," + e + "," + n), this.interAdObj && (this.interAdObj.offLoad(this.interAdObj.onLoadDoFn), 
                this.interAdObj.offError(this.interAdObj.onErrorDoFn), this.interAdObj.offClose(this.interAdObj.onCloseDoFn), 
                this.interAdObj.alreadyShow = !1), this.interLoaded = !1;
                var t = this.getChannelT(), o = this, i = {};
                i[this.adPosIdKey] = e || this.interId, this.interAdObj = t.createInterstitialAd(this.addCreateAdConfProp(i)), 
                this.interAdObj.onLoadDoFn = function() {
                    if (a.llog("inter onLoad"), o.interLoaded = !0, n && !o.interAdObj.alreadyShow) {
                        o.interAdObj.alreadyShow = !0;
                        var e = o.interAdObj.show();
                        e && e.catch && e.catch(function(e) {
                            a.lerr(e);
                        });
                    }
                    o.triggerEvent("inter", "load");
                }, this.interAdObj.onLoad(this.interAdObj.onLoadDoFn), this.interAdObj.onCloseDoFn = function() {
                    a.llog("inter onClose"), o.interLoaded = !1, o.triggerEvent("inter", "close");
                }, this.interAdObj.onClose(this.interAdObj.onCloseDoFn), this.interAdObj.onErrorDoFn = function(e) {
                    a.llog("inter onError:", e), o.interLoaded = !1, o.triggerEvent("inter", "error");
                }, this.interAdObj.onError(this.interAdObj.onErrorDoFn), a.llog("load inter now"), 
                this.interAdObj.load();
            }
        }, n.prototype.showInter = function(e) {
            if (e) this.loadInter(e, !0); else {
                var n = this.checkPrepare("inter");
                if (-1 !== n) {
                    if (!(n <= 0)) {
                        var t = this.interAdObj.show();
                        t && t.catch && t.catch(function(e) {
                            a.lerr(e);
                        });
                    }
                } else this.loadInter(this.interId, !0);
            }
        }, n.prototype.callVideoLoad = function(n) {
            var t = this, o = e.prototype.callVideoLoad.call(this, n);
            return o && o.catch && o.catch(function(e) {
                a.llog("video load Error:"), t.videoLoaded = !1, t.isVideoLoading = !1, a.lerr(e);
            }), o;
        }, n.prototype.callVideoShow = function() {
            var n = this, t = e.prototype.callVideoShow.call(this);
            return t && t.catch && t.catch(function(e) {
                a.llog("video show Error:"), n.videoLoaded = !1, n.isVideoLoading = !1, a.lerr(e);
            }), t;
        }, n.prototype.callVideoOnCLose = function(e) {
            var n = this;
            this.videoAdObj.onCloseDoFn = function(t) {
                a.llog("video onClose"), n.videoLoaded = !1, n.isVideoLoading = !1, e && !n.videoAutoLoad && n.videoAdObj.onLoadDoFn && n.videoAdObj.offLoad(n.videoAdObj.onLoadDoFn);
                var o = "notEnd";
                t && t.isEnded && (o = null), n.callVideoCallback(o), n.triggerEvent("video", "close");
            }, this.videoAdObj.onClose(this.videoAdObj.onCloseDoFn);
        }, n.prototype.loadVideo = function(e, n) {
            if (this.videoErrCalled = !1, this.videoLoaded) a.llog("video is already loaded"); else if (this.isVideoLoading) a.llog("video is loading..."); else if (n || !(this.checkPrepare("video", "createRewardedVideoAd", !0) <= 0)) {
                a.llog("video load start, isAutoShow:" + n + " newPosId:" + e + " channel:" + this.channelName + " videoLoaded:" + this.videoLoaded), 
                this.videoAdObj && (this.videoAdObj.offLoad(this.videoAdObj.onLoadDoFn), this.videoAdObj.offError(this.videoAdObj.onErrorDoFn), 
                this.videoAdObj.offClose(this.videoAdObj.onCloseDoFn)), a.llog("go new videoAdObj");
                var t = this.getChannelT(), o = {};
                o[this.adPosIdKey] = e || this.videoId;
                var i = this.addCreateAdConfProp(o);
                e && "wx" === this.channelName && (i.multiton = !0), this.videoAdObj = t.createRewardedVideoAd(i), 
                this.callVideoOnLoad(n), this.callVideoOnCLose(e), this.callVideoOnStart(), this.callVideoOnError(e), 
                this.callVideoLoad(n);
            }
        }, n.prototype.loadNative = function(e, n) {}, n;
    }(r.KdBase);
    n.default = d;
}, function(e, n, t) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = t(0), i = function() {
        function e() {
            this.version = "1.6.1", this.channelName = "oppo", this.bannerLoadDelay = 10, this.bannerMaxShowPerDay = 200, 
            this.bannerCreateTime = 0, this.bannerSleepTime = 3e4, this.adPosIdKey = "posId", 
            this.showCountMap = {
                banner: 0,
                inter: 0,
                video: 0,
                native: 0
            }, this.showMaxMap = {
                banner: 0,
                inter: 0,
                video: 0,
                native: 0
            }, this.interCreateTime = 0, this.interSleepTime = 5e3, this.interShowCount = 0, 
            this.interLoaded = !1, this.interAutoLoad = !0, this.videoCreateTime = 0, this.videoSleepTime = 5e3, 
            this.videoLoaded = !1, this.videoAutoLoad = !0, this.wxBannerMaxShowTimes = 3, this.nativeCreateTime = 0, 
            this.nativeSleepTime = 5e3, this.nativeLoaded = !1, this.black = 0, this.isInitOK = !1, 
            this.timeOutIdMap = {}, this.posIdMap = {
                banner: [],
                inter: [],
                video: [],
                native: []
            }, this.kUrl = "https://ga.gametdd.com/adCtrl/adc/getBlack", this.kdStrategy = [ [ [ 100, 1, 2 ] ] ], 
            this.audioCtrl = {
                play: function() {},
                stop: function() {}
            }, this.eventMap = {}, this.videoErrCalled = !1, this.isAudioStoped = !1, this.isVideoLoading = !1, 
            this.isOnLoadCalling = !1, this.nativeAdIdMap = {};
        }
        return e.prototype.getChannelName = function() {
            return this.channelName;
        }, e.prototype.login = function(e) {
            var n = this.getChannelT();
            n && n.login && this.loginObj && n.login(e || this.loginObj);
        }, e.prototype.showShareMenu = function() {}, e.prototype.shareAppMessage = function() {}, 
        e.prototype.onEvent = function(e, n, t, o) {
            this.eventMap[e + "_" + n + "_" + t] = o;
        }, e.prototype.triggerEvent = function(e, n) {
            var t = this.eventMap[this.channelName + "_" + e + "_" + n];
            t && t();
        }, e.prototype.onShow = function() {
            var e = this.getChannelT();
            e && e.onShow && this.onShowFn && e.onShow(this.onShowFn);
        }, e.prototype.getLaunchOptionsSync = function() {
            var e = this.getChannelT();
            e && e.getLaunchOptionsSync && this.getLaunchOptionsSyncFn && this.getLaunchOptionsSyncFn(e.getLaunchOptionsSync());
        }, e.prototype.installShortcut = function() {
            var e = this.getChannelT();
            if (e && e.hasShortcutInstalled && e.installShortcut) {
                var n = this;
                e.hasShortcutInstalled({
                    success: function(t) {
                        t ? n.shortCutObj.success(t) : e.installShortcut(n.shortCutObj);
                    },
                    fail: function(e) {
                        n.shortCutObj.fail && n.shortCutObj.fail(e);
                    },
                    complete: function() {}
                });
            }
        }, e.prototype.getChannelT = function(e) {
            var n = window.qg;
            return n ? e && !n[e] ? (o.llog("channelT(qg)." + e + " 不存在!!"), null) : n : (o.llog("channelT(qg) 不存在!!"), 
            null);
        }, e.prototype.initChannel = function(e, n) {
            o.llog("init Channnel:" + n.channelName), this.isInitOK = !0;
        }, e.prototype.getBlack = function() {
            return this.black;
        }, e.prototype.loadDelay = function(e, n, t) {
            o.llog("loadDelay:" + e + "," + n);
            var i = this, r = i.timeOutIdMap[e];
            r && clearTimeout(r);
            var a = e.charAt(0).toUpperCase() + e.substring(1), d = t || function() {
                i["load" + a] ? (i["load" + a](), o.llog("后台load,关闭错误回调"), i.videoErrCalled = !0) : o.lerr("err adType:" + a + "," + i.channelName);
            };
            d ? i.timeOutIdMap[e] = setTimeout(d, n || 100) : o.llog("无loadFn:load" + a);
        }, e.prototype.showCountAdd = function(e) {
            o.llog("showCountAdd:" + e + "|" + this.showCountMap[e]), this.showCountMap[e]++, 
            this.showMaxMap[e] && o.saveData("show_count_" + e + "_" + o.todayStr(), "" + this.showCountMap[e]);
        }, e.prototype.loadAllShowCount = function() {
            for (var e in this.showCountMap) {
                var n = o.loadData("show_count_" + e + "_" + o.todayStr());
                n && (this.showCountMap[e] = parseInt(n));
            }
        }, e.prototype.checkPrepare = function(e, n, t, i, r) {
            if (!this.getChannelT(n)) return 0;
            if (this.showMaxMap[e] && this.showCountMap[e] >= this.showMaxMap[e]) return o.llog("当日展示次数已达上限:" + e + "," + this.showCountMap[e] + "/" + this.showMaxMap[e]), 
            this.triggerEvent(e, "limit"), 0;
            if (!this.isInitOK) return o.llog(e + " SDK未完成init"), this.triggerEvent(e, "noInit"), 
            0;
            if (!this[e + "Id"]) return o.llog(e + " 无Id,请检查init参数"), 0;
            if (!t) {
                if (!this[e + "AdObj"]) return o.llog(e + "AdObj 为空!"), -1;
                if (!this[e + "Loaded"]) return o.llog(e + " 未完成load!"), -1;
            }
            return 1;
        }, e.prototype.setConf = function(e) {
            e ? (void 0 !== e.gameId && (this.gameId = e.gameId), void 0 !== e.appId && (this.appId = e.appId), 
            void 0 !== e.bannerOnResize && (this.bannerOnResize = e.bannerOnResize), void 0 !== e.channelName && (this.channelName = e.channelName), 
            void 0 !== e.bannerId && (this.bannerId = e.bannerId), void 0 !== e.interId && (this.interId = e.interId), 
            void 0 !== e.videoId && (this.videoId = e.videoId), void 0 !== e.nativeId && (this.nativeId = e.nativeId), 
            void 0 !== e.audioCtrl && (this.audioCtrl = e.audioCtrl), void 0 !== e.kUrl && (this.kUrl = e.kUrl), 
            void 0 !== e.nativeOnLoad && (this.nativeOnLoad = e.nativeOnLoad), void 0 !== e.nativeOnError && (this.nativeOnError = e.nativeOnError), 
            void 0 !== e.bannerIntervals && (this.bannerIntervals = e.bannerIntervals), void 0 !== e.bannerLoadDelay && (this.bannerLoadDelay = e.bannerLoadDelay), 
            void 0 !== e.bannerStyle && (this.bannerStyle = e.bannerStyle), void 0 !== e.showShareMenuObj && (this.showShareMenuObj = e.showShareMenuObj), 
            void 0 !== e.shareAppMessageObj && (this.shareAppMessageObj = e.shareAppMessageObj), 
            void 0 !== e.loginObj && (this.loginObj = e.loginObj), void 0 !== e.shortCutObj && (this.shortCutObj = e.shortCutObj), 
            void 0 !== e.onShowFn && (this.onShowFn = e.onShowFn), void 0 !== e.getLaunchOptionsSyncFn && (this.getLaunchOptionsSyncFn = e.getLaunchOptionsSyncFn), 
            void 0 !== e.videoAutoLoad && (this.videoAutoLoad = e.videoAutoLoad), void 0 !== e.interAutoLoad && (this.interAutoLoad = e.interAutoLoad), 
            void 0 !== e.wxBannerMaxShowTimes && (this.wxBannerMaxShowTimes = e.wxBannerMaxShowTimes)) : o.llog(" Kd init no conf!!!");
        }, e.prototype.updatePosId = function(e, n) {
            if (n && !(n.length < 3)) {
                o.llog("updatePosId", e, n);
                var t = n.split(",");
                this[e + "Id"] = t[0], this.posIdMap[e] = [];
                for (var i = 0; i < t.length; i++) {
                    var r = t[i].trim();
                    r.length > 2 && this.posIdMap[e].push(r);
                }
            }
        }, e.prototype.getPosId = function(e, n) {
            if (!this.isInitOK) return o.llog("getPosId未初始完成,adType:" + e + " num:" + n), "";
            if (!n) return this[e + "Id"];
            var t = this.posIdMap[e];
            return t ? n >= t.length ? (o.llog("getPosId-" + e + "长度不足 num:" + n + " len:" + t.length), 
            "") : t[n] : (o.llog("getPosId无此adType:" + e + " num:" + n), "");
        }, e.prototype.init = function(e, n) {
            this.setConf(e), o.llog("KD init v:" + this.version + "," + this.channelName + "," + this.gameId), 
            n || (n = function(e) {});
            var t = this.getChannelT(null);
            if (t) {
                var i = this;
                o.jax(this.kUrl, {
                    gameId: this.gameId + "_" + this.channelName
                }, function(e, t) {
                    return e ? (o.lerr(e), o.llog(" getBlack error!"), void n("getBlack error")) : t.re < 0 ? (o.lerr("getBlack.re err:" + t.re), 
                    void n("getBlack.re err:" + t.re)) : (i.black = t.black, o.llog("KD inited OK. black:" + i.black), 
                    i.updatePosId("banner", t.banner), i.updatePosId("inter", t.inter), i.updatePosId("video", t.video), 
                    i.updatePosId("native", t.native), void n(null));
                }), this.initChannel(t, e), this.loadAllShowCount();
            } else n("channelT error");
        }, e.prototype.addCreateAdConfProp = function(e) {
            return e;
        }, e.prototype.showBanner = function() {
            var e = this;
            if (!(this.checkPrepare("banner", "createBannerAd", !0) <= 0)) {
                o.llog("showBanner start", this.channelName);
                var n = this.getChannelT();
                if (n.createBannerAd) {
                    var t = {};
                    t[this.adPosIdKey] = this.bannerId, this.bannerIntervals && (t.adIntervals = this.bannerIntervals), 
                    e.bannerAdObj = n.createBannerAd(t), e.bannerAdObj.offShow && (e.bannerAdObj.offShow(), 
                    e.bannerAdObj.onShow(function() {
                        o.llog("banner onShow"), e.triggerEvent("banner", "show");
                    })), e.bannerAdObj.offHide && (e.bannerAdObj.offHide(), e.bannerAdObj.onHide(function() {
                        o.llog("banner onHide"), e.showCountAdd("banner"), e.triggerEvent("banner", "close");
                    })), e.bannerAdObj.offError(), e.bannerAdObj.onError(function(n) {
                        o.llog("banner onError:", n), e.triggerEvent("banner", "error");
                    }), o.llog("banner show now"), e.bannerAdObj.show();
                } else o.llog("no createBannerAd!");
            }
        }, e.prototype.closeBanner = function() {
            this.bannerAdObj && (o.llog("banner hide now"), this.bannerAdObj.hide());
        }, e.prototype.destroyBanner = function() {
            this.bannerAdObj && this.bannerAdObj.destroy && (this.bannerAdObj.destroy(), this.triggerEvent("banner", "destroy"));
        }, e.prototype.destroyVideo = function() {
            this.videoAdObj && this.videoAdObj.destroy && (this.videoAdObj.destroy(), this.triggerEvent("video", "destroy"));
        }, e.prototype.destroyInter = function() {
            this.interAdObj && this.interAdObj.destroy && (this.interAdObj.destroy(), this.triggerEvent("inter", "destroy"));
        }, e.prototype.loadInter = function(e, n) {
            if (this.interLoaded = !1, n || !(this.checkPrepare("inter", "createInsertAd", !0) <= 0)) {
                o.llog("load inter start:" + e + "," + n);
                var t = this.getChannelT(), i = t.createInsertAd || t.createInterstitialAd;
                if (i) {
                    var r = this, a = {};
                    a[this.adPosIdKey] = e || this.interId, this.interAdObj = i(a), this.interAdObj.offLoad(), 
                    this.interAdObj.onLoad(function() {
                        o.llog("inter onLoad,autoShow:" + n), r.interLoaded = !0, n && (o.llog("show inter now"), 
                        r.interAdObj.show()), r.triggerEvent("inter", "load");
                    }), this.interAdObj.offClose ? (this.interAdObj.offClose(), this.interAdObj.onClose && this.interAdObj.onClose(function() {
                        o.llog("inter onClose,autoLoad:" + r.interAutoLoad), r.interLoaded = !1, r.showCountAdd("inter"), 
                        r.interAutoLoad && r.loadDelay("inter", 1e3), r.triggerEvent("inter", "close");
                    })) : this.interAdObj.offShow && (this.interAdObj.offShow(), this.interAdObj.onShow && this.interAdObj.onShow(function() {
                        o.llog("inter onShow,autoLoad:" + r.interAutoLoad), r.interLoaded = !1, r.showCountAdd("inter"), 
                        r.interAutoLoad && r.loadDelay("inter", 1e3), r.triggerEvent("inter", "show");
                    })), this.interAdObj.offError(), this.interAdObj.onError(function(e) {
                        for (var n in e) o.llog("interErr:[" + n + "]:" + e[n]);
                        r.interLoaded = !1, r.triggerEvent("inter", "error");
                    }), o.llog("load inter now"), this.interAdObj.load();
                } else o.llog("no inter createFn!");
            }
        }, e.prototype.showInter = function(e) {
            if (e) this.loadInter(e, !0); else {
                var n = this.checkPrepare("inter");
                -1 !== n ? n <= 0 || (o.llog("show inter now"), this.interAdObj.show()) : this.loadInter(this.interId, !0);
            }
        }, e.prototype.callVideoLoad = function(e) {
            return this.isVideoLoading ? (o.llog("video is loading,cancel load"), null) : (this.isVideoLoading = !0, 
            o.llog("video load now"), this.videoAdObj.load());
        }, e.prototype.callVideoShow = function() {
            if (o.llog("callVideoShow now"), !this.isAudioStoped) try {
                this.isAudioStoped = !0, this.audioCtrl.stop();
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                o.llog(e);
            }
            return o.llog("video show now"), this.videoAdObj.show();
        }, e.prototype.setVideoCallback = function(e) {
            var n = this;
            this.videoErrCalled = !1, n.videoCallback = function(t) {
                if (n.isAudioStoped) try {
                    n.isAudioStoped = !1, n.audioCtrl.play();
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    o.llog(e);
                }
                o.llog(" videoCallback:" + t), e(t);
            };
        }, e.prototype.callVideoCallback = function(e) {
            this.videoCallback && (this.videoErrCalled ? o.llog("videoCallback already called") : (this.videoErrCalled = !0, 
            o.llog(" callVideoCallback:" + e), this.videoCallback(e)));
        }, e.prototype.callVideoOnLoad = function(e) {
            var n = this;
            o.llog("callVideoOnLoad isOnLoadCalling:", this.isOnLoadCalling), this.isOnLoadCalling = !1;
            var t = this;
            this.videoAdObj.onLoadDoFn = function() {
                o.llog("onLoadDoFn called:", n.isOnLoadCalling), n.isOnLoadCalling || (n.isOnLoadCalling = !0, 
                t.videoLoaded = !0, t.isVideoLoading = !1, o.llog("video onLoad, isAutoShow:" + e + " videoLoaded:" + t.videoLoaded), 
                e && t.callVideoShow(), t.triggerEvent("video", "load"));
            }, t.videoAdObj.onLoad(t.videoAdObj.onLoadDoFn);
        }, e.prototype.callVideoOnCLose = function(e) {
            var n = this;
            this.videoAdObj.onCloseDoFn = function(e) {
                o.llog("video onClose"), n.videoLoaded = !1, n.isVideoLoading = !1;
                var t = "notEnd";
                e && e.isEnded && (t = null), n.callVideoCallback(t), n.videoAutoLoad && n.loadDelay("video", 100), 
                n.triggerEvent("video", "close");
            }, n.videoAdObj.onClose(n.videoAdObj.onCloseDoFn);
        }, e.prototype.callVideoOnStart = function() {}, e.prototype.callVideoOnError = function(e) {
            var n = this;
            this.videoAdObj.onErrorDoFn = function(e) {
                o.llog("video onError:", JSON.stringify(e)), n.videoLoaded = !1, n.isVideoLoading = !1, 
                n.callVideoCallback("noAd"), n.triggerEvent("video", "error");
            }, n.videoAdObj.onError(n.videoAdObj.onErrorDoFn);
        }, e.prototype.loadVideo = function(e, n) {
            if (this.videoLoaded) o.llog("video is already loaded"); else if (n || !(this.checkPrepare("video", "createRewardedVideoAd", !0) <= 0)) {
                o.llog("video load start", this.videoId);
                var t = this.getChannelT(), i = {};
                i[this.adPosIdKey] = e || this.videoId, this.videoAdObj = t.createRewardedVideoAd(i), 
                this.callVideoOnLoad(n), this.callVideoOnCLose(e), this.callVideoOnStart(), this.callVideoOnError(e), 
                this.callVideoLoad(n);
            }
        }, e.prototype.showVideo = function(e, n, t) {
            if (this.videoErrCalled = !1, this.setVideoCallback(e), n) return o.llog("video load and show start, newPosId:" + n), 
            void this.loadVideo(n, !0);
            var i = this.checkPrepare("video");
            -1 !== i || this.isVideoLoading || t ? i <= 0 ? this.callVideoCallback("noAd") : (o.llog("video show start,videoLoaded:" + this.videoLoaded), 
            this.callVideoShow()) : this.loadVideo(this.videoId, !0);
        }, e.prototype.getNativeAdId = function(e) {
            if (!this.nativeData) return o.llog("getNativeAdId 未完成load"), 0;
            var n = this.nativeData.adId, t = e || this.nativeId;
            return t && this.nativeAdIdMap[t] && (n = this.nativeAdIdMap[t]), n;
        }, e.prototype.loadNative = function(e, n) {
            if (!(this.checkPrepare("native", "createNativeAd", !0) <= 0)) {
                o.llog("loadNative start", this.channelName);
                var t = this.getChannelT(), i = this;
                i.nativeLoaded = !1;
                var r = n || this.nativeId, a = {};
                a[this.adPosIdKey] = r, this.nativeAdObj = t.createNativeAd(a), this.nativeAdObj.offLoad(), 
                this.nativeAdObj.onLoad(function(n) {
                    i.nativeLoaded = !0, i.nativeOnLoad || e ? ((void 0 === n.code || 0 === n.code) && n.adList.length > 0 ? (i.nativeData = n.adList[0], 
                    i.nativeAdIdMap[r] = i.nativeData.adId) : (i.nativeData = null, o.llog("nativeAd load data error:", JSON.stringify(n))), 
                    e ? e(n) : i.nativeOnLoad(n)) : o.llog("no nativeOnLoad");
                }), this.nativeAdObj.offError(), this.nativeAdObj.onError(function(e) {
                    o.llog("native onError:", JSON.stringify(e)), i.nativeLoaded = !1, i.nativeOnError ? i.nativeOnError(e) : o.llog("no nativeOnError!");
                }), o.llog("loadNative now"), this.nativeAdObj.load();
            }
        }, e.prototype.reportNativeShow = function(e) {
            if (this.nativeAdObj) {
                this.showCountAdd("native");
                var n = this.getNativeAdId(e);
                this.nativeAdObj.reportAdShow({
                    adId: n
                }), o.llog("reportNativeShow:" + n + ",newPosId:" + e);
            } else o.llog("无nativeAdObj");
        }, e.prototype.reportNativeClick = function(e) {
            if (this.nativeAdObj) {
                var n = this.getNativeAdId(e);
                this.nativeAdObj.reportAdClick({
                    adId: n
                }), o.llog("reportNativeClick:" + n + ",newPosId:" + e);
            } else o.llog("无nativeAdObj");
        }, e;
    }();
    n.KdBase = i;
}, function(e, n, t) {
    var o, i = this && this.__extends || (o = function(e, n) {
        return (o = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, n) {
            e.__proto__ = n;
        } || function(e, n) {
            for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        })(e, n);
    }, function(e, n) {
        function t() {
            this.constructor = e;
        }
        o(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, 
        new t());
    });
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = t(2), a = t(0), d = function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return i(n, e), n.prototype.initChannel = function(e, n) {
            a.llog("init Channnel:" + n.channelName), this.showMaxMap.banner = 5, this.showMaxMap.inter = 8;
            var t = this;
            e.initAdService({
                appId: n.appId,
                isDebug: !1,
                success: function(e) {
                    a.llog("init success");
                },
                fail: function(e) {
                    a.llog("init fail:" + e.code + e.msg);
                },
                complete: function(e) {
                    a.llog("init complete!" + this.channelName), t.isInitOK = !0, t.interAutoLoad && setTimeout(function() {
                        t.loadInter();
                    }, 2e3), t.videoAutoLoad && t.loadVideo();
                }
            }), t.getLaunchOptionsSync();
        }, n.prototype.setConf = function(n) {
            e.prototype.setConf.call(this, n), n.interMaxPerDay && (this.showMaxMap.inter = n.interMaxPerDay, 
            a.llog("interMaxPerDay set to:" + this.showMaxMap.inter));
        }, n.prototype.callVideoOnLoad = function(n) {
            this.videoAdObj.offLoad(), e.prototype.callVideoOnLoad.call(this, n);
        }, n.prototype.callVideoOnCLose = function(n) {
            this.videoAdObj.offClose(), e.prototype.callVideoOnCLose.call(this, n);
        }, n.prototype.callVideoOnStart = function() {
            this.videoAdObj.offVideoStart();
            var e = this;
            this.videoAdObj.onVideoStart(function() {
                a.llog("video onVideoStart"), e.showCountAdd("video");
            });
        }, n.prototype.callVideoOnError = function(n) {
            this.videoAdObj.offError(), e.prototype.callVideoOnError.call(this, n);
        }, n;
    }(r.KdBase);
    n.default = d;
}, function(e, n, t) {
    var o, i = this && this.__extends || (o = function(e, n) {
        return (o = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, n) {
            e.__proto__ = n;
        } || function(e, n) {
            for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        })(e, n);
    }, function(e, n) {
        function t() {
            this.constructor = e;
        }
        o(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, 
        new t());
    });
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = t(2), a = t(0), d = function(e) {
        function n() {
            var n = null !== e && e.apply(this, arguments) || this;
            return n.adPosIdKey = "adUnitId", n;
        }
        return i(n, e), n.prototype.getChannelT = function(e) {
            var n = window.hbs;
            return n ? e && !n[e] ? (a.llog("channelT(hbs)." + e + " 不存在!!"), null) : n : (a.llog("channelT(hbs) 不存在!!"), 
            null);
        }, n.prototype.initChannel = function(e, n) {
            a.llog("init Channnel:" + n.channelName);
            var t = this;
            this.bannerIntervals = 60, t.videoAutoLoad && setTimeout(function() {
                t.loadVideo();
            }, 2e3), a.llog("init complete!" + this.channelName), this.isInitOK = !0;
        }, n.prototype.shareAppMessage = function() {}, n.prototype.installShortcut = function() {}, 
        n.prototype.showBanner = function() {
            var e = this;
            if (!(this.checkPrepare("banner", "createBannerAd", !0) <= 0)) {
                var n = this.getChannelT();
                if (n.createBannerAd) {
                    var t = {
                        style: {
                            left: 0,
                            top: 0,
                            width: 360,
                            height: 57
                        }
                    };
                    if (t[this.adPosIdKey] = this.bannerId, this.bannerIntervals && (t.adIntervals = this.bannerIntervals), 
                    this.bannerStyle) {
                        var o = this.bannerStyle;
                        "function" == typeof this.bannerStyle && (o = this.bannerStyle()), t.style = o;
                    }
                    e.bannerAdObj = n.createBannerAd(t), e.bannerAdObj.offLoad && (e.bannerAdObj.offLoad(), 
                    e.bannerAdObj.onLoad(function() {
                        a.llog("banner onLoad"), e.triggerEvent("banner", "load");
                    })), e.bannerAdObj.offClose && (e.bannerAdObj.offClose(), e.bannerAdObj.onClose(function() {
                        a.llog("banner onClose"), e.showCountAdd("banner"), e.triggerEvent("banner", "close");
                    })), e.bannerAdObj.offError(), e.bannerAdObj.onError(function(n) {
                        for (var t in n) a.llog("bannerErr:[" + t + "]:" + n[t]);
                        e.triggerEvent("banner", "error");
                    }), a.llog("banner show now"), e.bannerAdObj.show();
                } else a.llog("no createBannerAd!");
            }
        }, n.prototype.loadVideo = function(e, n) {
            if (n || !(this.checkPrepare("video", "createRewardedVideoAd", !0) <= 0)) {
                a.llog("video load start", this.videoId);
                var t = this.getChannelT(), o = {};
                o[this.adPosIdKey] = e || this.videoId, o.success = function(e) {
                    a.llog("huawei video success");
                }, o.fail = function(e, n) {
                    a.llog("huawei video create error:", e, n);
                }, o.complete = function() {
                    a.llog("huawei video complete");
                }, this.videoAdObj = t.createRewardedVideoAd(o), this.callVideoOnLoad(n), this.callVideoOnCLose(e), 
                this.callVideoOnError(e), this.callVideoLoad(n);
            }
        }, n;
    }(r.KdBase);
    n.default = d;
}, function(e, n, t) {
    var o, i = this && this.__extends || (o = function(e, n) {
        return (o = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, n) {
            e.__proto__ = n;
        } || function(e, n) {
            for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        })(e, n);
    }, function(e, n) {
        function t() {
            this.constructor = e;
        }
        o(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, 
        new t());
    });
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = t(0), a = function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return i(n, e), n.prototype.getChannelT = function(e) {
            var n = window.uc;
            return n ? e && !n[e] ? (r.llog("channelT(uc)." + e + " 不存在!!"), null) : n : (r.llog("channelT(uc) 不存在!!"), 
            null);
        }, n.prototype.loadBanner = function(e) {
            var n = this, t = this;
            if (e || !(this.checkPrepare("banner", "createBannerAd", !0) <= 0)) {
                r.llog("loadBanner now");
                var o = this.getChannelT(), i = {
                    style: {
                        left: 20,
                        top: 400,
                        width: 350
                    }
                };
                if (i[this.adPosIdKey] = this.bannerId, this.bannerStyle) {
                    var a = this.bannerStyle;
                    "function" == typeof this.bannerStyle && (a = this.bannerStyle()), i.style = a;
                }
                t.bannerAdObj && t.bannerAdObj.destroy && (t.bannerAdObj.destroy(), r.llog("banner destroy and reCreate"));
                var d = t.addCreateAdConfProp(i), l = o.createBannerAd(d);
                this.bannerDestroyed = !1, t.bannerAdObj = l, l.onLoad(function() {
                    r.llog("banner onLoad"), t.triggerEvent("banner", "load"), e && n.doShowBanner();
                }), l.onError(function(e) {
                    r.llog("banner onError:", e), r.llog("bannerConfig:", d), t.loadDelay("banner", 3e3, function() {
                        t.loadBanner(!1);
                    }), t.triggerEvent("banner", "error");
                });
            }
        }, n.prototype.callVideoLoad = function(e) {
            return null;
        }, n.prototype.callVideoShow = function() {
            var n = this, t = e.prototype.callVideoShow.call(this);
            return t && t.catch && t.catch(function(e) {
                r.llog("video show Error:"), n.videoLoaded = !1, n.isVideoLoading = !1, r.lerr(e);
            }), t;
        }, n.prototype.loadVideo = function(e, n) {
            if (this.videoErrCalled = !1, this.videoLoaded) r.llog("video is already loaded"); else if (n || !(this.checkPrepare("video", "createRewardVideoAd", !0) <= 0)) {
                r.llog("video load start", this.videoId);
                var t = this.getChannelT();
                return this.videoAdObj = t.createRewardVideoAd(), this.callVideoOnCLose(e), this.callVideoOnError(e), 
                this.callVideoOnLoad(!1), n && e === this.videoId ? (n = !1, void this.callVideoShow()) : void 0;
            }
        }, n;
    }(t(1).default);
    n.default = a;
}, function(e, n, t) {
    var o, i = this && this.__extends || (o = function(e, n) {
        return (o = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, n) {
            e.__proto__ = n;
        } || function(e, n) {
            for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        })(e, n);
    }, function(e, n) {
        function t() {
            this.constructor = e;
        }
        o(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, 
        new t());
    });
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = t(2), a = t(0), d = function(e) {
        function n() {
            var n = null !== e && e.apply(this, arguments) || this;
            return n.adPosIdKey = "adUnitId", n.isBannerOnLoadSet = !1, n;
        }
        return i(n, e), n.prototype.initChannel = function(e, n) {
            this.bannerSleepTime = 1e3, this.interSleepTime = 1e3, this.videoSleepTime = 5e3, 
            this.nativeSleepTime = 1, this.isInitOK = !0, a.llog("init complete! " + this.channelName);
        }, n.prototype.onShow = function() {}, n.prototype.getLaunchOptionsSync = function() {}, 
        n.prototype.installShortcut = function() {}, n.prototype.showBanner = function() {
            var e = this;
            if (!(this.checkPrepare("banner", "createBannerAd", !0) <= 0)) {
                if (a.llog("showBanner start", this.channelName), e.bannerAdObj) return e.bannerAdObj.show(), 
                void e.triggerEvent("banner", "show");
                var n = this.getChannelT(), t = {
                    adUnitId: this.bannerId
                };
                if (this.bannerStyle) {
                    var o = this.bannerStyle;
                    "function" == typeof this.bannerStyle && (o = this.bannerStyle()), t.style = {}, 
                    o.left && (t.style.left = o.left), o.top && (t.style.top = o.top), o.width && (t.style.width = o.width), 
                    o.height && (t.style.height = o.height);
                }
                a.llog("meizu bannerConf:", t), e.bannerAdObj = n.createBannerAd(t), this.isBannerOnLoadSet || (this.isBannerOnLoadSet = !0, 
                e.bannerAdObj.onLoad(function() {
                    a.llog("banner onload and show now"), e.bannerAdObj.show(), e.triggerEvent("banner", "show");
                })), e.bannerAdObj.offClose(), e.bannerAdObj.onClose(function(n) {
                    a.llog("banner onClose:", n), e.showCountAdd("banner"), e.triggerEvent("banner", "close");
                }), e.bannerAdObj.offError(), e.bannerAdObj.onError(function(n) {
                    a.llog("banner onError:", n), e.triggerEvent("banner", "error");
                });
            }
        }, n.prototype.callVideoOnCLose = function(e) {
            var n = this;
            this.videoAdObj.onCloseDoFn = function() {
                a.llog("video onClose"), n.videoLoaded = !1, n.isVideoLoading = !1, n.callVideoCallback("notEnd"), 
                n.videoAutoLoad && n.loadDelay("video", 100), n.triggerEvent("video", "close");
            }, n.videoAdObj.onClose(n.videoAdObj.onCloseDoFn);
        }, n.prototype.callVideoOnStart = function() {
            var e = this;
            this.videoAdObj.offRewarded(), this.videoAdObj.onRewarded(function() {
                a.llog("video onRewarded"), e.videoLoaded = !1, e.callVideoCallback(null), e.triggerEvent("video", "reward");
            });
        }, n;
    }(r.KdBase);
    n.default = d;
}, function(e, n, t) {
    var o, i = this && this.__extends || (o = function(e, n) {
        return (o = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, n) {
            e.__proto__ = n;
        } || function(e, n) {
            for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        })(e, n);
    }, function(e, n) {
        function t() {
            this.constructor = e;
        }
        o(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, 
        new t());
    });
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = t(0), a = function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return i(n, e), n.prototype.getChannelT = function(e) {
            var n = window.tt;
            return n ? e && !n[e] ? (r.llog("channelT(tt)." + e + " 不存在!!"), null) : n : (r.llog("channelT(tt) 不存在!!"), 
            null);
        }, n.prototype.initChannel = function(e, n) {
            this.isInitOK = !0, this.onShow(), this.showShareMenu(), this.getLaunchOptionsSync(), 
            r.llog("init complete!" + this.channelName), this.isInitOK = !0;
        }, n.prototype.loadBanner = function(e) {}, n.prototype.showBanner = function() {
            var e = this, n = this.getChannelT(), t = {
                style: {
                    left: 20,
                    top: 400,
                    width: 350
                }
            };
            if (t[e.adPosIdKey] = e.bannerId, e.bannerIntervals && (t.adIntervals = e.bannerIntervals), 
            e.bannerStyle) {
                var o = e.bannerStyle;
                "function" == typeof e.bannerStyle && (o = e.bannerStyle()), t.style.left = o.left || 20, 
                t.style.top = o.top || 400, t.style.width = o.width || 350;
            }
            e.bannerAdObj && e.bannerAdObj.destroy && e.bannerAdObj.destroy();
            var i = e.addCreateAdConfProp(t), a = n.createBannerAd(i);
            e.bannerAdObj = a, a.onLoad(function() {
                r.llog("banner onLoad"), e.triggerEvent("banner", "load"), a.show().then(function() {
                    r.llog("banner显示成功");
                }).catch(function(e) {
                    r.llog("banner广告组件出现问题", e);
                });
            }), a.onError(function(n) {
                r.llog("banner onError:", n), r.llog("bannerConfig:", i), e.triggerEvent("banner", "error");
            }), a.onResize(function(t) {
                r.llog("banner onResize", t), e.bannerOnResize ? e.bannerOnResize(t, a, n) : (a.style.top = n.getSystemInfoSync().screenHeight - t.height + .1, 
                a.style.left = (n.getSystemInfoSync().screenWidth - t.width) / 2 + .1);
            });
        }, n.prototype.loadInter = function(e, n) {}, n.prototype.showInter = function(e) {
            r.llog("showInter start", this.channelName, "interId", this.interId);
            var n = this, t = this.getChannelT(), o = {};
            o[this.adPosIdKey] = e || this.interId, n.interAdObj = t.createInterstitialAd(this.addCreateAdConfProp(o)), 
            n.interAdObj.onLoad(function() {
                r.llog("inter onLoad, will show now", n.channelName), n.triggerEvent("inter", "load");
            }), n.interAdObj.onClose(function() {
                r.llog("inter onClose"), n.triggerEvent("inter", "close");
            }), n.interAdObj.onError(function(e) {
                r.llog("inter onError:", e), n.triggerEvent("inter", "error");
            }), n.interAdObj.load().then(function() {
                n.interAdObj.show();
            }).catch(function(e) {
                r.llog("inter Error:", e), n.triggerEvent("inter", "error");
            });
        }, n.prototype.addCreateAdConfProp = function(e) {
            return this.interAdObj && (r.llog("destroy inter"), this.interAdObj.destroy(), this.interAdObj = null), 
            e;
        }, n.prototype.showVideo = function(e, n) {
            this.videoErrCalled = !1, this.setVideoCallback(e), n || (n = this.videoId);
            var t = this;
            this.videoAutoLoad = !1, r.llog("video show start with no load");
            var o = {};
            o[this.adPosIdKey] = n || this.videoId;
            var i = this.getChannelT();
            this.videoAdObj = i.createRewardedVideoAd(o), this.callVideoOnCLose(n), this.callVideoOnError(n), 
            this.videoAdObj.show().then(function() {
                r.llog("video广告显示成功");
            }).catch(function(e) {
                r.llog("video广告组件出现问题", e), t.videoAdObj.load().then(function() {
                    return r.llog("video手动加载成功"), t.videoAdObj.show();
                });
            });
        }, n;
    }(t(1).default);
    n.default = a;
}, function(e, n, t) {
    var o, i = this && this.__extends || (o = function(e, n) {
        return (o = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, n) {
            e.__proto__ = n;
        } || function(e, n) {
            for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        })(e, n);
    }, function(e, n) {
        function t() {
            this.constructor = e;
        }
        o(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, 
        new t());
    });
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = t(0), a = function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return i(n, e), n.prototype.getChannelT = function(e) {
            var n = window.swan;
            return n ? e && !n[e] ? (r.llog("channelT(swan)." + e + " 不存在!!"), null) : n : (r.llog("channelT(swan) 不存在!!"), 
            null);
        }, n.prototype.addCreateAdConfProp = function(e) {
            return e.appSid = this.appId, e;
        }, n.prototype.loadBanner = function(n) {
            e.prototype.loadBanner.call(this, n);
            var t = this;
            setTimeout(function() {
                r.llog("banner width change"), t.bannerAdObj.style.width++;
            }, 100);
        }, n.prototype.loadInter = function(e, n) {}, n.prototype.showInter = function(e) {}, 
        n;
    }(t(1).default);
    n.default = a;
}, function(e, n, t) {
    var o, i = this && this.__extends || (o = function(e, n) {
        return (o = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, n) {
            e.__proto__ = n;
        } || function(e, n) {
            for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        })(e, n);
    }, function(e, n) {
        function t() {
            this.constructor = e;
        }
        o(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, 
        new t());
    });
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = t(0), a = function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return i(n, e), n.prototype.getChannelT = function(e) {
            var n = window.qq;
            return n ? e && !n[e] ? (r.llog("channelT(qq)." + e + " 不存在!!"), null) : n : (r.llog("channelT(qq) 不存在!!"), 
            null);
        }, n.prototype.callVideoOnLoad = function(e) {
            var n = this;
            this.videoAdObj.onLoadDoFn = function() {
                n.videoLoaded = !0, r.llog("video onLoad, isAutoShow:" + e + " videoLoaded:" + n.videoLoaded), 
                n.triggerEvent("video", "load");
            }, n.videoAdObj.onLoad(n.videoAdObj.onLoadDoFn);
        }, n.prototype.callVideoLoad = function(e) {
            var n = this;
            if (!this.isVideoLoading) {
                var t = this.videoAdObj.load();
                return t.then(function() {
                    r.llog("video load then, isAutoShow:" + e), e && n.videoAdObj.show();
                }).catch(function(e) {
                    r.llog("video load Error:"), n.videoLoaded = !1, n.isVideoLoading = !1, r.lerr(e);
                }), t;
            }
            r.llog("video is loading,cancel load");
        }, n;
    }(t(1).default);
    n.default = a;
}, function(e, n, t) {
    var o, i = this && this.__extends || (o = function(e, n) {
        return (o = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, n) {
            e.__proto__ = n;
        } || function(e, n) {
            for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        })(e, n);
    }, function(e, n) {
        function t() {
            this.constructor = e;
        }
        o(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, 
        new t());
    });
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = t(0), a = function(e) {
        function n() {
            var n = null !== e && e.apply(this, arguments) || this;
            return n.vivoVideoFirstErr = !1, n;
        }
        return i(n, e), n.prototype.initChannel = function(e, n) {
            this.bannerSleepTime = 11e3, this.interSleepTime = 11e3, this.videoSleepTime = 6e4, 
            this.nativeSleepTime = 1, this.isInitOK = !0, r.llog("init complete! vivo, videoAutoLoad:" + this.videoAutoLoad), 
            this.videoAutoLoad = !1;
        }, n.prototype.onShow = function() {}, n.prototype.getLaunchOptionsSync = function() {}, 
        n.prototype.checkPrepare = function(n, t, o, i, a) {
            if (o) {
                var d = this[n + "CreateTime"], l = this[n + "SleepTime"];
                if (0 !== d && new Date().getTime() - d <= l) return r.llog(n + "间隔时间未到"), this.triggerEvent(n, "limit"), 
                0;
            }
            return e.prototype.checkPrepare.call(this, n, t, o, i, a);
        }, n.prototype.showBanner = function() {
            var e = this;
            if (!(this.checkPrepare("banner", "createBannerAd", !0) <= 0)) {
                r.llog("showBanner start", this.channelName, "bannerId", e.bannerId), e.bannerCreateTime = new Date().getTime();
                var n = this.getChannelT();
                e.bannerAdObj = n.createBannerAd({
                    posId: e.bannerId,
                    style: {}
                }), e.bannerAdObj.offLoad(), e.bannerAdObj.onLoad(function() {
                    r.llog("banner onLoad,showBanner now", e.channelName), e.triggerEvent("banner", "load");
                }), e.bannerAdObj.offClose(), e.bannerAdObj.onClose(function() {
                    r.llog("banner onClose"), e.triggerEvent("banner", "close");
                }), e.bannerAdObj.offError(), e.bannerAdObj.onError(function(n) {
                    r.llog("banner onError:", n), e.triggerEvent("banner", "error");
                });
                var t = e.bannerAdObj.show();
                t && t.then(function() {
                    r.llog("banner广告展示成功");
                }).catch(function(e) {
                    r.llog("banner广告展示失败", e);
                });
            }
        }, n.prototype.loadInter = function(e, n) {}, n.prototype.showInter = function(e) {
            if (!(this.checkPrepare("inter", "createInterstitialAd", !0) <= 0)) {
                r.llog("showInter start", this.channelName, "interId", this.interId);
                var n = this, t = this.getChannelT();
                n.interAdObj = t.createInterstitialAd({
                    posId: e || this.interId
                }), n.interAdObj.offLoad(), n.interAdObj.onLoad(function() {
                    r.llog("inter onLoad, will show now", n.channelName), n.triggerEvent("inter", "load");
                }), n.interAdObj.offClose(), n.interAdObj.onClose(function() {
                    r.llog("inter onClose"), n.triggerEvent("inter", "close");
                }), n.interAdObj.offError(), n.interAdObj.onError(function(e) {
                    r.llog("inter onError:", e), n.triggerEvent("inter", "error");
                });
                var o = n.interAdObj.show();
                o && o.then(function() {
                    r.llog("inter广告展示成功");
                }).catch(function(e) {
                    r.llog("inter广告展示失败", e);
                });
            }
        }, n.prototype.callVideoOnStart = function() {}, n.prototype.callVideoOnError = function(e) {
            var n = this;
            this.videoAdObj.onError(function(e) {
                if (r.llog("video onError:", e), n.videoLoaded = !1, n.isVideoLoading = !1, !n.vivoVideoFirstErr) return r.llog("vivoVideoFirstErr"), 
                void (n.vivoVideoFirstErr = !0);
                n.callVideoCallback("noAd"), n.triggerEvent("video", "error");
            });
        }, n.prototype.callVideoLoad = function(n) {
            var t = this;
            r.llog("callVideoLoad vivo");
            var o = e.prototype.callVideoLoad.call(this, n);
            return o && o.catch && o.catch(function(e) {
                r.llog("vivo video load Error:", e), t.videoLoaded = !1, t.isVideoLoading = !1, 
                t.callVideoCallback("noAd");
            }), o;
        }, n.prototype.callVideoShow = function() {
            var n = this;
            r.llog("callVideoShow vivo");
            var t = e.prototype.callVideoShow.call(this);
            return t && t.catch && t.then(function() {}).catch(function(e) {
                r.llog("vivo video广告展示失败", e), n.videoLoaded = !1, n.isVideoLoading = !1, n.callVideoCallback("noAd");
            }), t;
        }, n.prototype.showVideo = function(e, n) {
            this.videoErrCalled = !1, this.videoAutoLoad = !1, this.setVideoCallback(e), n || (n = this.videoId), 
            r.llog("video load and show start"), this.loadVideo(n, !0);
        }, n.prototype.loadNative = function(e, n) {
            if (!(this.checkPrepare("native", "createNativeAd", !0) <= 0)) {
                r.llog("loadNative start", this.channelName);
                var t = this.getChannelT(), o = this;
                o.nativeLoaded = !1;
                var i = n || this.nativeId;
                this.nativeAdObj = t.createNativeAd({
                    posId: i
                }), this.nativeAdObj.onLoad(function(n) {
                    o.nativeLoaded = !0, o.nativeOnLoad || e ? (n && n.adList.length > 0 ? (o.nativeData = n.adList[0], 
                    o.nativeAdIdMap[i] = o.nativeData.adId) : (o.nativeData = null, r.llog("nativeAd load data error:", n)), 
                    e ? e(n) : o.nativeOnLoad(n)) : r.llog("no nativeOnLoad");
                });
                var a = this.nativeAdObj.load();
                a && a.then(function() {}).catch(function(e) {
                    r.llog("native 加载失败", JSON.stringify(e)), o.nativeOnError ? o.nativeOnError(e) : r.llog("no nativeOnError!");
                });
            }
        }, n;
    }(t(3).default);
    n.default = a;
}, function(e, n, t) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = t(3), i = t(10), r = t(1), a = t(9), d = t(8), l = t(7), s = t(6), h = t(0), c = t(5), u = t(4), p = function() {
        function e() {
            this.channelMap = {
                oppo: new o.default(),
                vivo: new i.default(),
                wx: new r.default(),
                qq: new a.default(),
                toutiao: new l.default(),
                baidu: new d.default(),
                meizu: new s.default(),
                uc: new c.default(),
                huawei: new u.default()
            };
        }
        return e.instance = function() {
            return e.me ? e.me : (e.me = new e(), e.me);
        }, e.prototype.init = function(e, n) {
            this.kdChannel = this.channelMap[e.channelName], this.kdChannel ? this.kdChannel.init(e, n) : h.llog("ERR channelName!!init", e);
        }, e.prototype.setConf = function(e) {
            this.kdChannel = this.channelMap[e.channelName], this.kdChannel ? this.kdChannel.setConf(e) : h.llog("ERR channelName!!setConf", e);
        }, e.prototype.onEvent = function(e, n, t, o) {
            this.kdChannel ? this.kdChannel.onEvent(e, n, t, o) : h.llog("ERR kdChannel!!onEvent");
        }, e.prototype.getPosId = function(e, n) {
            return this.kdChannel ? this.kdChannel.getPosId(e, n) : (h.llog("no kdChannel!!getPosId"), 
            "");
        }, e.prototype.login = function(e) {
            this.kdChannel ? this.kdChannel.login(e) : h.llog("no kdChannel!!login");
        }, e.prototype.shareAppMessage = function() {
            this.kdChannel ? this.kdChannel.shareAppMessage() : h.llog("no kdChannel!!shareAppMessage");
        }, e.prototype.installShortcut = function() {
            this.kdChannel ? this.kdChannel.installShortcut() : h.llog("no kdChannel!!installShortcut");
        }, e.prototype.showBanner = function() {
            this.kdChannel ? this.kdChannel.showBanner() : h.llog("no kdChannel!!showBanner");
        }, e.prototype.closeBanner = function() {
            this.kdChannel ? this.kdChannel.closeBanner() : h.llog("no kdChannel!!closeBanner");
        }, e.prototype.destroyBanner = function() {
            this.kdChannel ? this.kdChannel.destroyBanner() : h.llog("no kdChannel!!destroyBanner");
        }, e.prototype.destroyVideo = function() {
            this.kdChannel ? this.kdChannel.destroyVideo() : h.llog("no kdChannel!!destroyVideo");
        }, e.prototype.destroyInter = function() {
            this.kdChannel ? this.kdChannel.destroyInter() : h.llog("no kdChannel!!destroyInter");
        }, e.prototype.showInter = function(e) {
            this.kdChannel ? this.kdChannel.showInter(e) : h.llog("no kdChannel!!showInter");
        }, e.prototype.showVideo = function(e, n, t) {
            this.kdChannel ? this.kdChannel.showVideo(e, n, t) : h.llog("no kdChannel!!showVideo");
        }, e.prototype.getBlack = function() {
            return this.kdChannel ? this.kdChannel.getBlack() : (h.llog("no kdChannel!!getBlack"), 
            0);
        }, e.prototype.loadNative = function(e, n) {
            this.kdChannel ? this.kdChannel.loadNative(e, n) : h.llog("no kdChannel!!loadNative");
        }, e.prototype.reportNativeShow = function(e) {
            this.kdChannel ? this.kdChannel.reportNativeShow(e) : h.llog("no kdChannel!!reportNativeShow");
        }, e.prototype.reportNativeClick = function(e) {
            this.kdChannel ? this.kdChannel.reportNativeClick(e) : h.llog("no kdChannel!!reportNativeClick");
        }, e.prototype.getChannel = function() {
            return this.kdChannel;
        }, e.prototype.getConf = function(e, n, t) {
            if (!e) return h.llog("getConf no id!"), n();
            var o = {
                id: e
            };
            t && (o.sid = t.trim()), h.jax("https://ga.gametdd.com/adCtrl/agd/conf", o, function(e, t) {
                if (e) return h.llog("getConf error!"), h.llog(e), n();
                0 !== t.code ? (h.llog("getConf ERR:" + JSON.stringify(t)), n()) : n(t.data);
            });
        }, e;
    }();
    n.default = p.instance();
} ]));