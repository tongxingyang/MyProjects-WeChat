var t, e = require("../@babel/runtime/helpers/interopRequireDefault"), r = e(require("../@babel/runtime/helpers/slicedToArray")), a = e(require("../@babel/runtime/helpers/possibleConstructorReturn")), i = e(require("../@babel/runtime/helpers/getPrototypeOf")), n = e(require("../@babel/runtime/helpers/inherits")), o = e(require("../@babel/runtime/helpers/classCallCheck")), s = e(require("../@babel/runtime/helpers/createClass")), u = e(require("../@babel/runtime/helpers/typeof"));

function d(t) {
    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (t = function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return l(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(t, e);
        }(t))) {
            var e = 0, r = function() {};
            return {
                s: r,
                n: function() {
                    return e >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[e++]
                    };
                },
                e: function(t) {
                    throw t;
                },
                f: r
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a, i, n = !0, o = !1;
    return {
        s: function() {
            a = t[Symbol.iterator]();
        },
        n: function() {
            var t = a.next();
            return n = t.done, t;
        },
        e: function(t) {
            o = !0, i = t;
        },
        f: function() {
            try {
                n || null == a.return || a.return();
            } finally {
                if (o) throw i;
            }
        }
    };
}

function l(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, a = new Array(e); r < e; r++) a[r] = t[r];
    return a;
}

function c(t) {
    return function() {
        var e, r = (0, i.default)(t);
        if (f()) {
            var n = (0, i.default)(this).constructor;
            e = Reflect.construct(r, arguments, n);
        } else e = r.apply(this, arguments);
        return (0, a.default)(this, e);
    };
}

function f() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
        !0;
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return !1;
    }
}

t = function() {
    return function(t) {
        var e = {};
        function r(a) {
            if (e[a]) return e[a].exports;
            var i = e[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return t[a].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
        }
        return r.m = t, r.c = e, r.d = function(t, e, a) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: a
            });
        }, r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, r.t = function(t, e) {
            if (1 & e && (t = r(t)), 8 & e) return t;
            if (4 & e && "object" == (0, u.default)(t) && t && t.__esModule) return t;
            var a = Object.create(null);
            if (r.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var i in t) r.d(a, i, function(e) {
                return t[e];
            }.bind(null, i));
            return a;
        }, r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return r.d(e, "a", e), e;
        }, r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, r.p = "", r(r.s = 0);
    }([ function(t, e, a) {
        a.r(e);
        var i = function() {
            function t(e, r) {
                (0, o.default)(this, t), this.runtime = r, this.data = {
                    sid: e.slotId
                }, this.ad = e.createAd(e.params), this.ad.onError(function(t) {
                    self.runtime.event("ad", "imp", {
                        lbl: self.data.stype,
                        val: -2,
                        sub5: self.data.sid,
                        sub7: t.errMsg,
                        subi4: t.errCode
                    });
                });
            }
            return (0, s.default)(t, [ {
                key: "load",
                value: function() {
                    return this.ad.load();
                }
            }, {
                key: "show",
                value: function() {
                    var t = this;
                    return this.ad.show().then(function() {
                        t.runtime.event("ad", "imp", {
                            lbl: t.data.stype,
                            val: 0,
                            sub5: t.data.sid
                        });
                    }, function(e) {
                        throw t.runtime.event("ad", "imp", {
                            lbl: t.data.stype,
                            val: -1,
                            sub5: t.data.sid,
                            sub7: e.errMsg,
                            subi4: e.errCode
                        }), e;
                    });
                }
            }, {
                key: "destroy",
                value: function() {
                    this.ad.destroy();
                }
            }, {
                key: "onClose",
                value: function(t) {
                    this.ad.onClose(t);
                }
            }, {
                key: "offClose",
                value: function(t) {
                    this.ad.offClose(t);
                }
            }, {
                key: "onLoad",
                value: function(t) {
                    this.ad.onLoad(t);
                }
            }, {
                key: "offLoad",
                value: function(t) {
                    this.ad.offLoad(t);
                }
            }, {
                key: "onError",
                value: function(t) {
                    this.ad.onError(t);
                }
            }, {
                key: "offError",
                value: function(t) {
                    this.ad.offError(t);
                }
            } ]), t;
        }(), u = function(t) {
            (0, n.default)(r, t);
            var e = c(r);
            function r(t, a) {
                var i;
                return (0, o.default)(this, r), (i = e.call(this, t, a)).data.stype = "banner", 
                i.showed = !1, i;
            }
            return (0, s.default)(r, [ {
                key: "show",
                value: function() {
                    var t = this;
                    return this.ad.show().then(function() {
                        t.showed || (t.showed = !0, t.runtime.event("ad", "imp", {
                            lbl: t.data.stype,
                            val: 0,
                            sub5: t.data.sid
                        }));
                    }, function(e) {
                        throw t.runtime.event("ad", "imp", {
                            lbl: t.data.stype,
                            val: -1,
                            sub5: t.data.sid,
                            subi4: e.errCode
                        }), e;
                    });
                }
            }, {
                key: "hide",
                value: function() {
                    this.ad.hide();
                }
            }, {
                key: "offResize",
                value: function(t) {
                    this.ad.offResize(t);
                }
            }, {
                key: "onResize",
                value: function(t) {
                    this.ad.onResize(t);
                }
            } ]), r;
        }(i), l = function(t) {
            (0, n.default)(r, t);
            var e = c(r);
            function r(t, a) {
                var i;
                return (0, o.default)(this, r), (i = e.call(this, t, a)).data.stype = "interstitial", 
                i;
            }
            return r;
        }(i), f = function(t) {
            (0, n.default)(r, t);
            var e = c(r);
            function r(t, a) {
                var i;
                return (0, o.default)(this, r), (i = e.call(this, t, a)).data.stype = "video", i.adUnitId = t.adUnitId, 
                i.onCloseCallbacks = [], i.onLoadCallbacks = [], i.onErrorCallbacks = [], i;
            }
            return (0, s.default)(r, [ {
                key: "load",
                value: function() {
                    var t = this;
                    return this.ad.offError(), this.ad.onError(function(e) {
                        t.runtime.event("ad", "imp", {
                            lbl: t.data.stype,
                            val: -2,
                            sub5: t.data.sid,
                            sub7: e.errMsg,
                            subi4: e.errCode
                        });
                        var r, a = d(t.onErrorCallbacks);
                        try {
                            for (a.s(); !(r = a.n()).done; ) (0, r.value)(e);
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            a.e(t);
                        } finally {
                            a.f();
                        }
                    }), this.ad.offLoad(), this.ad.onLoad(function() {
                        var e, r = d(t.onLoadCallbacks);
                        try {
                            for (r.s(); !(e = r.n()).done; ) (0, e.value)();
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            r.e(t);
                        } finally {
                            r.f();
                        }
                    }), this.ad.load();
                }
            }, {
                key: "show",
                value: function() {
                    var t = this;
                    return this.ad.offClose(), this.ad.onClose(function(e) {
                        e && e.isEnded || void 0 === e ? t.runtime.event("ad", "imp", {
                            lbl: t.data.stype,
                            val: 0,
                            sub5: t.data.sid
                        }) : t.runtime.event("ad", "imp", {
                            lbl: t.data.stype,
                            val: 1,
                            sub5: t.data.sid
                        });
                        var r, a = d(t.onCloseCallbacks);
                        try {
                            for (a.s(); !(r = a.n()).done; ) (0, r.value)(e);
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            a.e(t);
                        } finally {
                            a.f();
                        }
                    }), this.ad.show();
                }
            }, {
                key: "onClose",
                value: function(t) {
                    this.onCloseCallbacks.push(t);
                }
            }, {
                key: "onLoad",
                value: function(t) {
                    this.onLoadCallbacks.push(t), this.ad.offLoad(), this.ad.onLoad(t);
                }
            }, {
                key: "onError",
                value: function(t) {
                    this.onErrorCallbacks.push(t);
                    var e = this;
                    this.ad.offError(), this.ad.onError(function(r) {
                        e.runtime.event("ad", "imp", {
                            lbl: e.data.stype,
                            val: -2,
                            sub5: e.adUnitId,
                            sub7: r.errMsg,
                            subi4: r.errCode
                        }), t(r);
                    });
                }
            } ]), r;
        }(i);
        function h(t, e) {
            if (!t) {
                var r = (t = window.location.search).indexOf("?");
                -1 != r && (t = t.substr(r + 1));
            }
            for (var a = {}, i = t.split(e || "&"), n = 0; n < i.length; n++) if (i[n]) {
                var o = i[n].split("=");
                a[o[0].trim()] = decodeURIComponent(o[1].trim());
            }
            return a;
        }
        function v(t, e) {
            var r = [];
            for (var a in t) t[a] && r.push(a + "=" + encodeURIComponent(t[a]));
            return r.join(e || "&");
        }
        function m(t) {
            for (var e = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = 0; a < t; a++) e += r.charAt(Math.floor(Math.random() * r.length));
            return e;
        }
        function p(t, e) {
            for (var r in t) "__proto__" != r && t[r] && (e[r] = t[r]);
        }
        function b(t, e, r, a) {
            return new Promise(function(i, n) {
                var o;
                o = {
                    url: e,
                    method: t,
                    header: r,
                    data: a,
                    success: function(t) {
                        200 == t.statusCode ? i(t.data) : n(Error(t.statusCode));
                    },
                    fail: function(t) {
                        n(t);
                    }
                }, wx.request(o);
            });
        }
        var y = new (function() {
            function t() {
                (0, o.default)(this, t);
            }
            return (0, s.default)(t, [ {
                key: "get",
                value: function(t, e) {
                    return b("GET", t, e).catch(function(r) {
                        if ("request:fail timeout" == r.errMsg) return b("GET", t, e);
                        throw r;
                    });
                }
            }, {
                key: "post",
                value: function(t, e, r) {
                    return b("POST", t, e, r).catch(function(a) {
                        if ("request:fail timeout" == a.errMsg) return b("POST", t, e, r);
                        throw a;
                    });
                }
            } ]), t;
        }())();
        function g(t) {
            wx.login(t);
        }
        function w(t) {
            wx.onShareAppMessage(t);
        }
        function k(t) {
            wx.shareAppMessage(t);
        }
        var I = function(t) {
            (0, n.default)(r, t);
            var e = c(r);
            function r(t, a) {
                var i;
                return (0, o.default)(this, r), t.createAd = wx.createBannerAd, t.params = {
                    adUnitId: t.adUnitId,
                    adIntervals: t.adIntervals,
                    style: t.style
                }, (i = e.call(this, t, a)).style = i.ad.style, i;
            }
            return r;
        }(u), S = function(t) {
            (0, n.default)(r, t);
            var e = c(r);
            function r(t, a) {
                return (0, o.default)(this, r), t.createAd = wx.createInterstitialAd, t.params = {
                    adUnitId: t.adUnitId
                }, e.call(this, t, a);
            }
            return r;
        }(l), q = function(t) {
            (0, n.default)(r, t);
            var e = c(r);
            function r(t, a) {
                return (0, o.default)(this, r), t.createAd = wx.createRewardedVideoAd, t.params = {
                    adUnitId: t.adUnitId,
                    multiton: t.multiton
                }, e.call(this, t, a);
            }
            return r;
        }(f), C = function() {
            function t(e, r) {
                (0, o.default)(this, t), this.data = {}, p(e, this.data), this.runtime = r, this.showed = !1;
            }
            return (0, s.default)(t, [ {
                key: "show",
                value: function(t) {
                    if (!this.showed) {
                        var e = this.data.impurl, r = {}, a = this.data.impurl.indexOf("?");
                        -1 != a && (e = this.data.impurl.substr(0, a), r = h(this.data.impurl.substr(a + 1))), 
                        t && (r.em = t, r.ec = -1), e = e + "?" + v(r), y.get(e), this.showed = !0;
                    }
                }
            }, {
                key: "click",
                value: function(t) {
                    t = t || {}, function(t, e) {
                        wx.navigateToMiniProgram({
                            appId: t.appid,
                            path: t.path,
                            extraData: e.extraData,
                            envVersion: e.envVersion,
                            success: e.success,
                            fail: e.fail,
                            complete: function(r) {
                                var a = t.clkurl, i = {}, n = t.clkurl.indexOf("?");
                                -1 != n && (a = t.clkurl.substr(0, n), i = h(t.clkurl.substr(n + 1))), "navigateToMiniProgram:ok" != r.errMsg && (i.em = r.errMsg, 
                                i.ec = -1), a = a + "?" + v(i), y.get(a), e.complete && e.complete(r);
                            }
                        });
                    }(this.data, t);
                }
            }, {
                key: "dot",
                value: function() {
                    return this.data.dot;
                }
            } ]), t;
        }();
        e.default = new (function() {
            function t() {
                (0, o.default)(this, t);
            }
            return (0, s.default)(t, [ {
                key: "init",
                value: function(t) {
                    if (!t.gameId) throw Error("obj.gameId is required by init(obj)");
                    var e = wx.getLaunchOptionsSync();
                    this.data = {
                        sdkv: "0.0.12",
                        gid: parseInt(t.gameId),
                        uid: t.userId,
                        uinfo: t.userInfo || {},
                        cid: parseInt(e.query.cid || 0),
                        utmsrc: e.query.utmsrc || "",
                        suid: e.query.suid || "",
                        ssid: e.query.ssid || "",
                        smid: parseInt(e.query.smid || 0)
                    };
                    var a, i = this;
                    this.getSystemInfoPromise = new Promise(function(t, e) {
                        new Promise(function(t, e) {
                            wx.getSystemInfo({
                                success: function(e) {
                                    var a = e.system.split(" "), i = (0, r.default)(a, 2), n = i[0], o = i[1], s = {
                                        lang: e.language,
                                        os: n,
                                        osv: o,
                                        make: e.brand,
                                        model: e.model,
                                        width: e.screenWidth,
                                        height: e.screenHeight,
                                        pv: e.version,
                                        plv: e.SDKVersion
                                    };
                                    e.windowWidth > e.windowHeight ? s.o = "landscape" : s.o = "portrait", t(s);
                                },
                                fail: e
                            });
                        }).then(function(e) {
                            p(e, i.data), t(e);
                        }, e);
                    }), this.getSettingPromise = new Promise(function(t, e) {
                        !function(t) {
                            wx.getSetting(t);
                        }({
                            withSubscriptions: !0,
                            success: function(e) {
                                var r = (e.subscriptionsSetting || {}).itemSettings || {}, a = [];
                                for (var n in r) "accept" == r[n] && a.push(n);
                                i.data.tids = a, t(e);
                            },
                            fail: e
                        });
                    }), this.authPromise = new Promise(function(e, r) {
                        t.userId ? e({
                            openid: t.userId
                        }) : i.login().then(function(t) {
                            i.data.uid = t.openid, e(t);
                        }, r);
                    }), this.initPromise = Promise.all([ this.getSystemInfoPromise, this.getSettingPromise, this.authPromise ]).catch(function(t) {
                        i.data.err = t.message;
                    }).then(function() {
                        return y.post("https://gw.api.umgame.cn/api/v1/init", {}, i.data).then(function(t) {
                            if (0 !== t.c) throw Error(t.m);
                            return i.data.inited = 1, i.data.cid = t.d.cid, i.data.utmsrc = t.d.utmsrc, i.data.its = t.d.its, 
                            i.bald = t.d.bald, i.config = t.d.params || {}, i.shareMaterial = t.d.share_material || {}, 
                            i.shareStats = {
                                new: t.d.share_new,
                                exists: t.d.share_old
                            }, i.loc = {
                                province: t.d.province,
                                city: t.d.city
                            }, !0;
                        });
                    }).catch(function(t) {
                        return i.data.inited = 0, !1;
                    }), this.configPromise = this.initPromise.then(function() {
                        return i.config;
                    }), this.startTime = Date.now(), a = function(t) {
                        i.isShareDialogVisible ? i.isShareDialogVisible = !1 : i.startTime = Date.now();
                    }, wx.onShow(a), wx.onHide(function(t) {
                        if (!i.isShareDialogVisible) {
                            var e = Date.now(), r = parseInt((e - i.startTime) / 1e3);
                            i.event("sdk", "exit", {
                                val: r
                            });
                        }
                    });
                }
            }, {
                key: "login",
                value: function() {
                    var t = this;
                    return new Promise(function(e, r) {
                        var a = "umsdk:auth:" + t.data.gid, i = {
                            success: function(i) {
                                if (i.code) {
                                    var n = "https://gw.api.umgame.cn/api/v1/auth?" + v({
                                        gid: t.data.gid,
                                        code: i.code
                                    }, "&");
                                    y.get(n).then(function(t) {
                                        var i;
                                        0 === t.c ? (i = {
                                            key: a,
                                            data: JSON.stringify(t.d),
                                            complete: function(r) {
                                                r.errMsg, e(t.d);
                                            }
                                        }, wx.setStorage(i)) : r(Error(t.m));
                                    }).catch(r);
                                } else r(i);
                            },
                            fail: function(t) {
                                r(t);
                            }
                        };
                        !function(t) {
                            wx.getStorage(t);
                        }({
                            key: a,
                            success: function(t) {
                                var r, a = JSON.parse(t.data);
                                r = {
                                    success: function() {
                                        e(a);
                                    },
                                    fail: function() {
                                        g(i);
                                    }
                                }, wx.checkSession(r);
                            },
                            fail: function(t) {
                                g(i);
                            }
                        });
                    });
                }
            }, {
                key: "getSetting",
                value: function() {
                    return this.getSettingPromise;
                }
            }, {
                key: "loadAttrLib",
                value: function(t, e) {
                    if (!t) throw Error("function fn is required by loadAttrLib(fn)");
                    var r = this;
                    this.initPromise.then(function(a) {
                        a && (r.bald && !e || t());
                    });
                }
            }, {
                key: "fetchConfig",
                value: function() {
                    return this.configPromise;
                }
            }, {
                key: "fetchLocation",
                value: function() {
                    var t = this;
                    return this.initPromise.then(function() {
                        return t.loc;
                    });
                }
            }, {
                key: "fetchShareData",
                value: function() {
                    var t = this;
                    return this.initPromise.then(function() {
                        return t.shareStats;
                    });
                }
            }, {
                key: "fetchLaunchOptions",
                value: function() {
                    var t = this;
                    return this.initPromise.then(function() {
                        return {
                            cid: t.data.cid,
                            src: t.data.utmsrc,
                            its: t.data.its
                        };
                    });
                }
            }, {
                key: "fetchShareQuery",
                value: function() {
                    var t = this;
                    return this.initPromise.then(function() {
                        return v({
                            utmsrc: "share",
                            cid: t.data.cid,
                            suid: t.data.uid,
                            smid: t.shareMaterial.smid
                        });
                    });
                }
            }, {
                key: "subscribe",
                value: function(t) {
                    var e = this;
                    this.wait4init().then(function() {
                        var r = {};
                        p(e.data, r), "subscribeAppMsg:ok" == t.errMsg && (r.tall = 1), t.ids && (r.tids = t.ids), 
                        y.post("https://gw.api.umgame.cn/api/v1/sub", {}, r);
                    });
                }
            }, {
                key: "auth",
                value: function() {
                    return this.authPromise;
                }
            }, {
                key: "wait4init",
                value: function() {
                    return this.initPromise;
                }
            }, {
                key: "event",
                value: function(t, e, r) {
                    if (!t || !e) throw Error("cat and act is required by event(cat, act, params)");
                    var a = this;
                    return this.wait4init().then(function() {
                        var i = {
                            app: "minigame",
                            cat: t,
                            act: e,
                            rid: m(16),
                            lang: a.data.lang,
                            os: a.data.os,
                            osv: a.data.osv,
                            make: a.data.make,
                            model: a.data.model,
                            w: a.data.width,
                            h: a.data.height,
                            did: a.data.uid,
                            sub1: a.data.sdkv,
                            sub2: a.data.pv,
                            sub3: a.data.plv,
                            sub4: a.data.utmsrc,
                            subi1: a.data.gid,
                            subi2: a.data.cid,
                            subi3: a.data.its,
                            subi7: a.data.inited
                        };
                        r && p(r, i);
                        var n = "https://event.api.umgame.cn/api/v1/event?" + v(i, "&");
                        return y.get(n);
                    });
                }
            }, {
                key: "onShareAppMessage",
                value: function(t, e) {
                    var r = this;
                    this.fetchShareQuery().then(function(a) {
                        w(function() {
                            var i = e();
                            return r.shareMaterial.title && (i.title = r.shareMaterial.title), r.shareMaterial.image && (i.imageUrl = r.shareMaterial.image), 
                            i.query ? i.query = i.query + "&" + a : i.query = a, i.query = i.query + "&ssid=" + t, 
                            r.isShareDialogVisible = !0, r.event("user", "share", {
                                sub5: t,
                                subi10: r.shareMaterial.smid
                            }), i;
                        });
                    }, function(t) {
                        r.isShareDialogVisible = !0, w(e);
                    });
                }
            }, {
                key: "shareAppMessage",
                value: function(t) {
                    if (!t.slotId || !t.data) throw Error("`obj.slotId` and `obj.data` are required by shareAppMessage");
                    var e = this;
                    this.fetchShareQuery().then(function(r) {
                        if (e.shareMaterial.title && (t.data.title = e.shareMaterial.title), e.shareMaterial.image && (t.data.imageUrl = e.shareMaterial.image), 
                        t.data.query ? t.data.query = t.data.query + "&" + r : t.data.query = r, t.data.query = t.data.query + "&ssid=" + t.slotId, 
                        e.isShareDialogVisible = !0, t.data.success) {
                            var a = t.data.success;
                            t.data.success = function() {
                                e.event("user", "share", {
                                    sub5: t.slotId,
                                    subi10: e.shareMaterial.smid
                                }), a();
                            }, k(t.data);
                        } else k(t.data), e.event("user", "share", {
                            sub5: t.slotId,
                            subi10: e.shareMaterial.smid
                        });
                    }, function(r) {
                        e.isShareDialogVisible = !0, k(t.data);
                    });
                }
            }, {
                key: "createIconAd",
                value: function(t) {
                    if (!t.slotId) throw Error("obj.slotId is required by createIconAd(obj)");
                    return new (function() {
                        function t(e, r) {
                            (0, o.default)(this, t), this.runtime = r, this.data = {
                                stype: "icon",
                                sid: e.slotId,
                                limit: e.limit || 10,
                                min_size: e.min_size || 0,
                                max_size: e.max_size || 0
                            }, this.data.limit <= 0 && (this.data.limit = 1);
                        }
                        return (0, s.default)(t, [ {
                            key: "load",
                            value: function() {
                                var t = this;
                                return t.runtime.wait4init().then(function() {
                                    var e = {};
                                    return p(t.data, e), p(t.runtime.data, e), y.post("https://gw.api.umgame.cn/api/v1/slot", {}, e).then(function(e) {
                                        if (0 !== e.c) throw Error(e.m);
                                        for (var r = e.d, a = [], i = 0; i < r.length; i++) {
                                            r[i].sid = t.data.sid;
                                            var n = new C(r[i], t.runtime);
                                            a.push(n);
                                        }
                                        return t.onLoadCallback && t.onLoadCallback(a), a;
                                    }).catch(function(e) {
                                        return t.onErrorCallback && t.onErrorCallback(e), e;
                                    });
                                });
                            }
                        }, {
                            key: "onLoad",
                            value: function(t) {
                                this.onLoadCallback = t;
                            }
                        }, {
                            key: "onError",
                            value: function(t) {
                                this.onErrorCallback = t;
                            }
                        } ]), t;
                    }())(t, this);
                }
            }, {
                key: "createBannerAd",
                value: function(t) {
                    if (!t.adUnitId) throw Error("obj.adUnitId is required by createBannerAd(obj)");
                    if (!t.slotId) throw Error("obj.slotId is required by createBannerAd(obj)");
                    return new I(t, this);
                }
            }, {
                key: "createInterstitialAd",
                value: function(t) {
                    if (!t.adUnitId) throw Error("obj.adUnitId is required by createInterstitialAd(obj)");
                    if (!t.slotId) throw Error("obj.slotId is required by createInterstitialAd(obj)");
                    return new S(t, this);
                }
            }, {
                key: "createRewardedVideoAd",
                value: function(t) {
                    if (!t.adUnitId) throw Error("obj.adUnitId is required by createRewardedVideoAd(obj);");
                    if (!t.slotId) throw Error("obj.slotId is required by createRewardedVideoAd(obj)");
                    return new q(t, this);
                }
            } ]), t;
        }())();
    } ]);
}, "object" == ("undefined" == typeof exports ? "undefined" : (0, u.default)(exports)) && "object" == ("undefined" == typeof module ? "undefined" : (0, 
u.default)(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == ("undefined" == typeof exports ? "undefined" : (0, 
u.default)(exports)) ? exports.umsdk = t() : (void 0).umsdk = t();