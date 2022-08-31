var _typeof2 = require("../@babel/runtime/helpers/typeof");

function iapJudge(e, t) {
    return e.orderId && "string" == typeof e.orderId ? "number" != typeof e.amount || e.amount !== e.amount ? (console.warn("请填写正确的订单金额"), 
    !1) : "string" != typeof e.currencyType || 3 !== e.currencyType.length ? (console.warn("请填写正确的货币类型"), 
    !1) : !t || "string" == typeof e.paymentType || void 0 === e.paymentType || (console.warn("请填写正确的支付方式"), 
    !1) : (console.warn("请填写正确的订单ID"), !1);
}

!function() {
    function e() {
        function e(e) {
            return !/^\d+(.\d+)*$/.test(e.stageId) || e.stageId.length > 32 ? (console.warn("关卡stageId必须符合传参规则,请参考文档。"), 
            !1) : !("string" !== o(e.stageName) || e.stageName.length > 32) || (console.warn("关卡名称为必传字段,且长度小于32个字符,请参考文档"), 
            !1);
        }
        var t = "", n = "", a = 0;
        this.onStart = function(i) {
            if (e(i)) {
                var r = {};
                a = Date.now(), r.sid = i.stageId, r.snm = i.stageName, r.state = "start", n = "" + Date.now() + Math.floor(1e7 * Math.random()), 
                t = r, ("string" === o(i.userId) && i.userId) < 32 && (this.uid = i.uid), this.request();
            }
        }, this.onRunning = function(n) {
            if (e(n)) {
                var a = {
                    params: {}
                };
                if (("string" === o(n.userId) && n.userId) < 32 && (this.uid = n.uid), !o(n.event) && -1 != q.join(",").indexOf(n.event + ",")) return void q.join(",");
                if (a.event = n.event, "object" === o(n.params)) {
                    if ("string" !== o(n.params.itemName) || n.params.itemName.length > 32) return void console.warn("道具/商品名称为必传字段，且长度小于32个字符，详情请参考文档");
                    a.params.itnm = n.params.itemName, "string" === o(n.params.itemId) && n.params.itemId.length < 32 && (a.params.itid = n.params.itemId), 
                    "number" === o(n.params.itemCount) && n.params.itemCount.length < 32 ? a.params.itco = n.params.itemCount : a.params.itco = 1, 
                    -1 !== n.event.indexOf("pay") && ("number" === o(n.params.itemMoney) && n.params.itemMoney.length < 32 ? a.params.money = n.params.itemMoney : a.params.money = 0), 
                    "string" === o(n.params.desc) && n.params.desc.length < 64 && (a.params.desc = n.params.desc), 
                    a.state = "running", a.sid = n.stageId, a.snm = n.stageName, t = a, this.request();
                }
            }
        }, this.onEnd = function(n) {
            if (e(n)) {
                var i = {};
                if (i.state = "end", ("string" === o(n.userId) && n.userId) < 32 && (this.uid = n.uid), 
                !o(n.event) && -1 !== E.join(",").indexOf(n.event + ",")) return void E.join(",");
                i.sid = n.stageId, i.snm = n.stageName, i.event = n.event, i.sdr = 0 !== a ? Date.now() - a : "", 
                i.params = {}, "object" === o(n.params) && "string" === o(n.params.desc) && n.params.desc.length < 64 && (i.params.desc = n.params.desc), 
                t = i, this.request();
            }
        }, this.request = function() {
            var e = d(v);
            t.ss = n, e.ct = t, c(e, "screen");
        };
    }
    function t() {
        return new Promise(function(e, t) {
            wx.getSetting({
                success: function success(t) {
                    t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                        success: function success(t) {
                            O = l(t.userInfo.avatarUrl.split("/")), e(t);
                        },
                        fail: function fail() {
                            e("");
                        }
                    }) : e("");
                },
                fail: function fail() {
                    e("");
                }
            });
        });
    }
    function n() {
        return new Promise(function(e, t) {
            wx.getNetworkType({
                success: function success(t) {
                    e(t);
                },
                fail: function fail() {
                    e("");
                }
            });
        });
    }
    function a() {
        return new Promise(function(e, t) {
            "1044" == T.scene ? wx.getShareInfo({
                shareTicket: T.shareTicket,
                success: function success(t) {
                    e(t);
                },
                fail: function fail() {
                    e("");
                }
            }) : e("");
        });
    }
    function i() {
        return new Promise(function(e, t) {
            m.getLocation ? wx.getLocation({
                success: function success(t) {
                    e(t);
                },
                fail: function fail() {
                    e("");
                }
            }) : wx.getSetting({
                success: function success(t) {
                    t.authSetting["scope.userLocation"] ? (wx.getLocation({
                        success: function success(t) {
                            e(t);
                        },
                        fail: function fail() {
                            e("");
                        }
                    }), e("")) : e("");
                },
                fail: function fail() {
                    e("");
                }
            });
        });
    }
    function o(e) {
        function t(e) {
            return Object.prototype.toString.call(e);
        }
        var n = {};
        return "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(e, t) {
            n["[object " + e + "]"] = e.toLowerCase();
        }), function() {
            return null == e ? e : "object" == _typeof2(e) || "function" == typeof e ? n[t.call(e)] || "object" : _typeof2(e);
        }();
    }
    function r() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }
        return e() + e() + e() + e() + e() + e() + e() + e();
    }
    function s() {
        this.concurrency = 4, this.queue = [], this.tasks = [], this.activeCount = 0;
        var e = this;
        this.push = function(t) {
            this.tasks.push(new Promise(function(n, a) {
                var i = function i() {
                    e.activeCount++, t().then(function(e) {
                        n(e);
                    }).then(function() {
                        e.next();
                    });
                };
                e.activeCount < e.concurrency ? i() : e.queue.push(i);
            }));
        }, this.all = function() {
            return Promise.all(this.tasks);
        }, this.next = function() {
            e.activeCount--, e.queue.length > 0 && e.queue.shift()();
        };
    }
    function c(e, t) {
        function n() {
            return new Promise(function(t, n) {
                wx.request({
                    url: "https://" + f + ".aldwx.com/d.html",
                    data: e,
                    header: {
                        se: y || "",
                        op: S || "",
                        img: O || ""
                    },
                    method: "GET",
                    fail: function fail() {
                        t("");
                    },
                    success: function success(e) {
                        t(200 == e.statusCode ? "" : "status error");
                    }
                });
            });
        }
        w++, e.as = D, e.at = U, e.rq_c = w, e.ifo = h, e.ak = m.app_key, e.uu = g, e.v = p, 
        e.st = Date.now(), e.ev = t, e.wsr = T, "" !== u(e.ufo) && (e.ufo = e.ufo), e.ec = I, 
        wx.Queue.push(n);
    }
    function u(e) {
        if (void 0 === e || "" === e) return "";
        var t = {};
        for (var n in e) {
            "rawData" != n && "errMsg" != n && (t[n] = e[n]);
        }
        return t;
    }
    function d(e) {
        var t = {};
        for (var n in e) {
            t[n] = e[n];
        }
        return t;
    }
    function l(e) {
        for (var t = "", n = 0; n < e.length; n++) {
            e[n].length > t.length && (t = e[n]);
        }
        return t;
    }
    var p = "2.0.0", f = "glog", m = require("./fl_analyse_config.js");
    "" === m.app_key && console.error("请在配置文件中填写您的app_key"), m.app_key = m.app_key.replace(/\s/g, ""), 
    function() {
        wx.request({
            url: "https://" + f + ".aldwx.com/config/app.json",
            method: "GET",
            success: function success(e) {
                200 === e.statusCode && (e.data.version != p && console.warn("您的SDK不是最新版本，请尽快升级！"), 
                e.data.warn && console.warn(e.data.warn), e.data.error && console.error(e.data.error));
            }
        });
    }();
    var h = "", g = function() {
        var e = "";
        try {
            e = wx.getStorageSync("aldstat_uuid"), wx.setStorageSync("ald_ifo", !0);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            e = "uuid_getstoragesync";
        }
        if (e) h = !1; else {
            e = r(), h = !0;
            try {
                wx.setStorageSync("aldstat_uuid", e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
            }
        }
        return e;
    }(), v = {}, y = "", S = "", I = 0, w = "", T = wx.getLaunchOptionsSync(), _ = Date.now(), U = "" + Date.now() + Math.floor(1e7 * Math.random()), D = "" + Date.now() + Math.floor(1e7 * Math.random()), b = 0, x = "", O = "", L = !0, k = !1, N = [ "aldSendEvent", "aldOnShareAppMessage", "aldShareAppMessage", "aldSendSession", "aldSendOpenid", "aldLevelEvent" ], q = [ "payStart", "paySuccess", "payFail", "die", "revive", "tools", "award" ], E = [ "complate", "fail" ];
    void 0 === wx.Queue && (wx.Queue = new s(), wx.Queue.all()), function() {
        return Promise.all([ t(), n(), i() ]);
    }().then(function(e) {
        "" !== e[2] ? (v.lat = e[2].latitude || "", v.lng = e[2].longitude || "", v.spd = e[2].speed || "") : (v.lat = "", 
        v.lng = "", v.spd = ""), "" !== e[1] ? v.nt = e[1].networkType || "" : v.nt = "";
        var t = d(v);
        "" !== e[0] && (t.ufo = e[0], x = e[0]), c(t, "init");
    }), wx.onShow(function(e) {
        if (T = e, b = Date.now(), !L && !k) {
            U = "" + Date.now() + Math.floor(1e7 * Math.random()), h = !1;
            try {
                wx.setStorageSync("ald_ifo", !1);
            } catch (e) {}
        }
        L = !1, k = !1;
        var t = d(v), n = d(v);
        t.sm = b - _, e.query.ald_share_src && e.shareTicket && "1044" === e.scene ? (n.tp = "ald_share_click", 
        a().then(function(e) {
            n.ct = e, c(n, "event");
        })) : e.query.ald_share_src && (n.tp = "ald_share_click", n.ct = "1", c(n, "event")), 
        c(t, "show");
    }), wx.onHide(function() {
        var e = d(v);
        e.dr = Date.now() - b, "" === x ? wx.getSetting({
            success: function success(t) {
                t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function success(t) {
                        e.ufo = t, x = t, O = l(t.userInfo.avatarUrl.split("/")), c(e, "hide");
                    }
                }) : c(e, "hide");
            }
        }) : c(e, "hide");
    }), wx.onError(function(e) {
        var t = d(v);
        t.tp = "ald_error_message", t.ct = e, I++, c(t, "event");
    });
    var F = {
        aldSendEvent: function aldSendEvent(e, t) {
            var n = d(v);
            "" !== e && "string" == typeof e && e.length <= 255 ? (n.tp = e, "string" == typeof t && t.length <= 255 ? (n.ct = String(t), 
            c(n, "event")) : "object" == _typeof2(t) ? (JSON.stringify(t).length >= 255 && console.error("自定义事件参数不能超过255个字符"), 
            n.ct = JSON.stringify(t), c(n, "event")) : void 0 === t || "" === t ? c(n, "event") : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符")) : console.error("事件名称必须为String类型且不能超过255个字符");
        },
        aldOnShareAppMessage: function aldOnShareAppMessage(e) {
            wx.onShareAppMessage(function() {
                k = !0;
                var t = e(), n = "";
                n = void 0 !== T.query.ald_share_src ? void 0 !== t.query ? (T.query.ald_share_src.indexOf(g), 
                t.query + "&ald_share_src=" + T.query.ald_share_src + "," + g) : (T.query.ald_share_src.indexOf(g), 
                "ald_share_src=" + T.query.ald_share_src + "," + g) : void 0 !== t.query ? t.query + "&ald_share_src=" + g : "ald_share_src=" + g, 
                t.query = n;
                var a = d(v);
                return a.ct = t, a.ct.sho = 1, a.tp = "ald_share_chain", c(a, "event"), t;
            });
        },
        aldShareAppMessage: function aldShareAppMessage(e) {
            k = !0;
            var t = e, n = "";
            n = void 0 !== T.query.ald_share_src ? void 0 !== t.query ? (T.query.ald_share_src.indexOf(g), 
            t.query + "&ald_share_src=" + T.query.ald_share_src + "," + g) : (T.query.ald_share_src.indexOf(g), 
            "ald_share_src=" + T.query.ald_share_src + "," + g) : void 0 !== t.query ? t.query + "&ald_share_src=" + g : "ald_share_src=" + g;
            var a = d(v);
            t.query = n, a.ct = t, a.tp = "ald_share_chain", c(a, "event"), wx.shareAppMessage(t);
        },
        aldSendSession: function aldSendSession(e) {
            if ("" !== e && e) {
                var t = d(v);
                t.tp = "session", t.ct = "session", y = e, "" === x ? wx.getSetting({
                    success: function success(e) {
                        e.authSetting["scope.userInfo"] ? wx.getUserInfo({
                            success: function success(e) {
                                t.ufo = e, c(t, "event");
                            }
                        }) : c(t, "event");
                    }
                }) : (t.ufo = x, "" !== x && (t.gid = ""), c(t, "event"));
            } else console.error("请传入从后台获取的session_key");
        },
        aldSendOpenid: function aldSendOpenid(e) {
            if ("" !== e && e) {
                S = e;
                var t = d(v);
                t.tp = "openid", t.ct = "openid", c(t, "event");
            } else console.error("openID不能为空");
        }
    };
    wx.aldStage = new e();
    for (var C = 0; C < N.length; C++) {
        !function(e, t) {
            Object.defineProperty(wx, e, {
                value: t,
                writable: !1,
                enumerable: !0,
                configurable: !0
            });
        }(N[C], F[N[C]]);
    }
    try {
        var P = wx.getSystemInfoSync();
        v.br = P.brand || "", v.md = P.model, v.pr = P.pixelRatio, v.sw = P.screenWidth, 
        v.sh = P.screenHeight, v.ww = P.windowWidth, v.wh = P.windowHeight, v.lang = P.language, 
        v.wv = P.version, v.sv = P.system, v.wvv = P.platform, v.fs = P.fontSizeSetting, 
        v.wsdk = P.SDKVersion, v.bh = P.benchmarkLevel || "", v.bt = P.battery || "", v.wf = P.wifiSignal || "", 
        v.lng = "", v.lat = "", v.nt = "", v.spd = "", v.ufo = "";
    } catch (e) {}
}();

var customConf = require("./fl_analyse_config.js"), _uidUrl = "https://api.talkingdata.com/mpopenid", _requestUrl = "https://h5.udrig.com/app/wx/v1", _uidKey = "openId", _version = [ "1", "0", "8" ], waitFlag = {
    device: !0,
    network: !0,
    uid: !0
}, appInfo = {
    sdk: {
        version: _version[0],
        minorVersion: _version[1],
        build: _version[2],
        platform: "Weapp",
        partner: ""
    },
    app: {
        versionCode: customConf.config.versionCode || "1",
        versionName: customConf.config.versionName || "1.0.0",
        installTime: 0,
        displayName: customConf.config.appName,
        appKey: customConf.config.appkey,
        uniqueId: customConf.config.wxAppid,
        channel: ""
    },
    device: {
        type: "mobile",
        softwareConfig: {},
        hardwareConfig: {},
        deviceId: {}
    },
    networks: [ {
        type: "wifi",
        available: !1,
        connected: !1
    }, {
        type: "cellular",
        available: !1,
        connected: !1,
        current: []
    }, {
        type: "unknown",
        available: !1,
        connected: !1
    } ],
    locations: [ {} ],
    appContext: {}
}, Util = {
    firstInit: !1,
    initTime: 0,
    sessionId: "",
    sessionStartTime: 0,
    appLaunchInfo: null,
    sendFailTimes: 0,
    bakData: {},
    Store: {
        set: function set(e, t) {
            try {
                wx.setStorageSync("TDSDK_" + e, t);
            } catch (e) {}
            Util.bakData["TDSDK_" + e] = t;
        },
        get: function get(e) {
            var t = null;
            try {
                t = wx.getStorageSync("TDSDK_" + e);
            } catch (e) {}
            return t || (t = Util.bakData["TDSDK_" + e] || null), t;
        },
        remove: function remove(e) {
            try {
                wx.removeStorageSync("TDSDK_" + e);
            } catch (e) {}
            delete Util.bakData["TDSDK_" + e];
        },
        getInfo: function getInfo() {
            try {
                return wx.getStorageInfoSync() || {};
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return {};
            }
        }
    },
    random: function random() {
        for (var e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", t = e.length, n = "", a = 0; a < 12; a++) {
            n += e.charAt(Math.floor(Math.random() * t));
        }
        return n;
    },
    timestamp: function timestamp() {
        return new Date().getTime();
    },
    deviceId: function deviceId() {
        return "weapp-" + this.timestamp() + "-" + this.random();
    },
    getEventId: function getEventId(e) {
        if (!e && !/0{1}/.test(e)) return "";
        var t = "";
        try {
            t = e.toString();
        } catch (n) {
            n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
            try {
                t = JSON.stringify(e);
            } catch (e) {}
        }
        return t.split(" ")[0].slice(0, 64);
    },
    addStoreData: function addStoreData() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = "EVENT_" + Util.sessionId, n = Util.Store.get(t);
        n = n && n.length ? n.concat(e) : e, Util.Store.set(t, n), n.length >= 30 && (onLaunchFn.sessionContinue(), 
        onLaunchFn.startLoop());
    },
    eventHandle: function eventHandle() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e) {
            var n = {
                eventId: e,
                count: 1,
                startTime: Util.timestamp()
            };
            if ("WeappShare" === e) {
                n.shareTickets = t.shareTickets;
                var a = {};
                a.user = Util.deviceId, a.title = t.title, a.desc = t.desc;
                var i = t.path;
                i ? (i = Util.getUrl("", Util.getSearchParams(t.path)), i = i.substring(1)) : console.log("分享事件的path参数缺少有效值"), 
                a.path = i, n.params = a;
            }
            Util.addStoreData([ n ]);
        }
    },
    getCacheData: function getCacheData() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Object.keys(e), n = [], a = [];
        return t.length && t.forEach(function(t) {
            var i = e[t];
            i && i.sendFail && i.data && (n = n.concat(i.data), a.push(t));
        }), {
            data: n,
            keys: a
        };
    },
    sendCacheList: {},
    updateSendTime: function updateSendTime() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = appInfo.device.deviceId, a = Util.Store.get("uid"), i = Util.Store.get("deviceId");
        return e.forEach(function(o, r) {
            if (!o.device.deviceId.tid && !o.device.deviceId.uid) if (n.tid) {
                if (o.device.deviceId.tid = n.tid, n.uid) return o.device.deviceId.uid = n.uid, 
                !0;
            } else {
                if (n.uid) return o.device.deviceId.uid = n.uid, o.device.deviceId.tid = n.uid, 
                !0;
                if (TDID.isWaitingForOpenid) {
                    if (a) return o.device.deviceId.uid = a, o.device.deviceId.tid = a, n.uid = a, n.tid = a, 
                    !0;
                    if (i) o.device.deviceId.tid = i, o.device.deviceId.uid = ""; else {
                        var s = Util.deviceId();
                        n.tid = s, n.uid = "", Util.Store.set("deviceId", s), o.device.deviceId.tid = s, 
                        o.device.deviceId.uid = "", TDID.shouldOverwriteTid = !1;
                    }
                } else o.device.deviceId.tid = n.tid, o.device.deviceId.uid = n.uid;
            }
            o.action && o.action.data && (e[r].action.data.start = t);
        }), e;
    },
    getRequestData: function getRequestData() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = JSON.parse(JSON.stringify(e)), n = Util.sendCacheList;
        if (Object.keys(n).length) {
            var a = Util.getCacheData(n);
            t = t.concat(a.data), a.keys.forEach(function(e) {
                return delete n[e];
            });
        }
        var i = t.length;
        if (i) {
            var o = [];
            i >= 30 ? (JSON.stringify(t).length > 61440 && o.push(t.splice(0, i / 2)), o.push(t)) : o.push(t), 
            o.forEach(function(e) {
                var t = Util.timestamp();
                n[t] = {
                    data: e,
                    sendFail: !1
                };
                var a = Util.updateSendTime(e, Util.timestamp());
                Util.request(t, a);
            });
        }
    },
    request: function request() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        wx.request({
            url: _requestUrl,
            data: JSON.stringify(t),
            method: "POST",
            success: function success(t) {
                200 === t.statusCode && (delete Util.sendCacheList[e], Util.sendFailTimes = 0, appHandle.appIsHide || (clearTimeout(onLaunchFn.timeout), 
                onLaunchFn.timeout = null, onLaunchFn.startLoop()));
            },
            fail: function fail() {
                appHandle.appIsHide ? (Util.Store.set("RESEND_" + e, t), delete Util.sendCacheList[e]) : (Util.sendCacheList[e].sendFail = !0, 
                Util.sendFailTimes < 5 && Util.sendFailTimes++);
            }
        });
    },
    getUrl: function getUrl() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = Object.keys(t).sort() || [], a = n.length ? e + "?" : e;
        return n.forEach(function(e, n) {
            0 !== n && (a += "&"), a += e + "=" + t[e];
        }), a;
    },
    getSearchParams: function getSearchParams(e) {
        if (!e) return {};
        var t = {};
        return e.split("&").forEach(function(e) {
            var n = e.split("=");
            2 === n.length && (t[n[0]] = n[1]);
        }), t;
    }
}, TDID = {
    shouldOverwriteTid: !0,
    isWaitingForOpenid: !0,
    isFirst: !0,
    init: function init() {
        var e = this, t = Util.Store.get("deviceId"), n = Util.Store.get("uid");
        if (n) {
            var a = t || n;
            e.setData(a, n);
        } else new Promise(this.getOpenid).then(function(n) {
            var a = void 0;
            t ? a = t : (a = n, Util.Store.set("deviceId", n)), e.setData(a, n), Util.Store.set("uid", n), 
            TDID.isWaitingForOpenid = !1;
        }).catch(function(n) {
            var a = void 0;
            a = t || Util.deviceId(), e.setData(a, ""), TDID.shouldOverwriteTid && Util.Store.set("deviceId", a), 
            TDID.isWaitingForOpenid = !1;
        });
    },
    setData: function setData(e, t) {
        TDID.shouldOverwriteTid ? appInfo.device.deviceId = {
            tid: e,
            uid: t
        } : appInfo.device.deviceId.uid = t, waitFlag.uid = !1, onLaunchFn.getAppProfile();
    },
    getOpenid: function getOpenid(e, t) {
        function n() {
            a.isFirst ? a.reGetOpenid(e, t) : t("error");
        }
        var a = TDID;
        new Date().getTime(), wx.login({
            timeout: 3e3,
            success: function success(t) {
                if (t.code) {
                    var a = _uidUrl;
                    wx.request({
                        url: a + "/" + customConf.config.appkey + "/" + t.code,
                        success: function success(t) {
                            var a = t.data;
                            a && 200 === a.code && a[_uidKey] ? e(a[_uidKey]) : n();
                        },
                        fail: function fail(e) {
                            n();
                        }
                    });
                } else n();
            },
            fail: function fail(e) {
                n();
            }
        });
    },
    reGetOpenid: function reGetOpenid(e, t) {
        TDID.isFirst = !1, TDID.getOpenid(e, t);
    }
}, DomainName = {
    placeOrder: {
        domain: "iap",
        name: "placeOrder"
    },
    orderPaySucc: {
        domain: "iap",
        name: "pay"
    },
    cancelOrder: {
        domain: "iap",
        name: "cancelOrder"
    },
    register: {
        domain: "account",
        name: "register"
    },
    login: {
        domain: "account",
        name: "login"
    }
}, request = {
    sendTime: 0,
    statusType: function statusType() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = [], n = JSON.parse(JSON.stringify(appInfo)), a = {
            domain: e.domain,
            name: e.name,
            data: e.data
        };
        n.ts = e.data.start || Util.timestamp(), n.action = a, t.push(n), Util.getRequestData(t);
    },
    dataType: function dataType(e, t) {
        var n = this.getStoreList(e, t);
        Util.getRequestData(n);
    },
    getEventType: function getEventType() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = DomainName[e.domainName];
        if (t) return t;
        if (e.pageEvent) return {
            domain: "page",
            name: "leave"
        };
        if (e.eventId) {
            var n = {};
            switch (e.eventId) {
              case "WeappShare":
                n = {
                    domain: "user",
                    name: "share"
                };
                break;

              case "WeappPullDownRefresh":
                n = {
                    domain: "page",
                    name: "pullDownRefresh"
                };
                break;

              case "WeappReachBottom":
                n = {
                    domain: "page",
                    name: "reachBottom"
                };
                break;

              default:
                n = {
                    domain: "appEvent",
                    name: ""
                };
            }
            return n;
        }
    },
    getStoreList: function getStoreList(e, t) {
        var n = this, a = [], i = e || Util.sessionId, o = JSON.stringify(appInfo), r = Util.Store.get("EVENT_" + i);
        return r && r.length && (r.forEach(function(e) {
            var i = n.getEventType(e), r = JSON.parse(o);
            t && r.appContext && (r.appContext.sessionStartTime = t);
            var s = JSON.parse(JSON.stringify(e));
            s.pageEvent && delete s.pageEvent, s.domainName || (s.status = 2), s.domainName && delete s.domainName;
            var c = {
                domain: i.domain,
                name: i.name,
                data: s
            };
            r.ts = s.startTime ? s.startTime : Util.timestamp(), r.action = c, a.push(r);
        }), Util.Store.remove("EVENT_" + i)), a;
    }
}, Account = {
    switchType: function switchType(e) {
        var t = "";
        switch (e) {
          case 0:
            t = "ANONYMOUS";
            break;

          case 1:
            t = "REGISTERED";
            break;

          case 2:
            t = "SINA_WEIBO";
            break;

          case 3:
            t = "QQ";
            break;

          case 4:
            t = "QQ_WEIBO";
            break;

          case 5:
            t = "ND91";
            break;

          case 6:
            t = "WEIXIN";
            break;

          case 11:
            t = "TYPE1";
            break;

          case 12:
            t = "TYPE2";
            break;

          case 13:
            t = "TYPE3";
            break;

          case 14:
            t = "TYPE4";
            break;

          case 15:
            t = "TYPE5";
            break;

          case 16:
            t = "TYPE6";
            break;

          case 17:
            t = "TYPE7";
            break;

          case 18:
            t = "TYPE8";
            break;

          case 19:
            t = "TYPE9";
            break;

          case 20:
            t = "TYPE10";
        }
        return t;
    },
    handleData: function handleData() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
        if (e.accountId || /0{1}/.test(e.accountId)) {
            if ("number" != typeof e.accountType || e.accountType < -1 || e.accountType > 6 && e.accountType < 11 || e.accountType > 20) console.warn("请上传正确的accountType"); else if (Account.updateAccountInfo("account", e), 
            "register" === t || "login" === t) {
                var n = Object.assign({
                    domainName: t
                }, e);
                Util.addStoreData([ n ]);
            }
        } else console.warn("accountId为必填字段！");
    },
    updateAccountInfo: function updateAccountInfo(e, t) {
        Util.Store.set(e, t), Account.assignAccount(t);
    },
    setAccountInfo: function setAccountInfo(e) {
        var t = Util.Store.get(e);
        "[object Object]" === Object.prototype.toString.call(t) && Account.assignAccount(t);
    },
    assignAccount: function assignAccount(e) {
        e.type = Account.switchType(e.accountType), delete e.accountType, appInfo.appContext.account = e;
    }
}, accountApi = {
    register: function register() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        Account.handleData(e, "register");
    },
    login: function login() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        Account.handleData(e, "login");
    }
}, iapEvent = {
    placeOrder: function placeOrder(e) {
        if (!iapJudge(e)) return !1;
        var t = {
            orderId: e.orderId,
            amount: e.amount,
            currencyType: e.currencyType,
            domainName: "placeOrder"
        };
        Util.addStoreData([ t ]);
    },
    orderPaySucc: function orderPaySucc(e) {
        if (!iapJudge(e, !0)) return !1;
        var t = {
            orderId: e.orderId,
            amount: e.amount,
            currencyType: e.currencyType,
            payType: e.paymentType,
            domainName: "orderPaySucc"
        };
        Util.addStoreData([ t ]);
    },
    cancelOrder: function cancelOrder(e) {
        if (!iapJudge(e)) return !1;
        var t = {
            orderId: e.orderId,
            amount: e.amount,
            currencyType: e.currencyType,
            domainName: "cancelOrder"
        };
        Util.addStoreData([ t ]);
    }
}, hasDataFlag = !1, onLaunchFn = {
    timeout: null,
    init: function init() {
        var e = wx.getLaunchOptionsSync();
        Util.appLaunchInfo = JSON.parse(JSON.stringify(e)), Util.appLaunchInfo.scene = e.scene ? e.scene.toString() : "", 
        TDID.init(), onLaunchFn.judgeRequireData(), onLaunchFn.getLocalParams(), customConf.config.getLocation && onLaunchFn.getLocation(), 
        onLaunchFn.getSystemInfo(), onLaunchFn.getNetwork();
    },
    launchRequest: function launchRequest() {
        var e = {
            first: !0
        };
        request.statusType({
            domain: "app",
            name: "init",
            data: e
        });
    },
    sessionStart: function sessionStart(e) {
        var t = Util.appLaunchInfo || {}, n = {
            status: 1,
            duration: 0,
            name: t.path,
            scene: t.scene,
            query: t.query || {},
            shareTicket: t.shareTicket,
            referrerInfo: t.referrerInfo
        };
        e && onLaunchFn.setNewSession(), n.start = Util.Store.get("session_time") || Util.timestamp(), 
        n.url = Util.getUrl(n.name, n.query), request.statusType({
            domain: "session",
            name: "begin",
            data: n
        });
    },
    sessionContinue: function sessionContinue() {
        request.dataType();
    },
    sessionEnd: function sessionEnd() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = {
            status: 3,
            start: e.startTime,
            duration: e.duration
        };
        request.statusType({
            domain: "session",
            name: "end",
            data: t
        });
    },
    sendTmpSession: function sendTmpSession() {
        onLaunchFn.sessionContinue(), onLaunchFn.startLoop();
    },
    startLoop: function startLoop() {
        onLaunchFn.timeout && (clearTimeout(onLaunchFn.timeout), onLaunchFn.timeout = null);
        var e = 3e3 * (Util.sendFailTimes + 1);
        onLaunchFn.timeout = setTimeout(function() {
            onLaunchFn.sendTmpSession();
        }, e);
    },
    judgeRequireData: function judgeRequireData() {
        appInfo.app.appKey || (appInfo.app.appKey = "", console.error("请填写您在TalkingData申请的App ID")), 
        appInfo.app.displayName || (appInfo.app.displayName = "appname", console.error("请填写您的小程序名称"));
    },
    getLocalParams: function getLocalParams() {
        var e = Util.Store.get("initTime");
        e ? Util.initTime = e : (Util.initTime = Util.timestamp(), Util.Store.set("initTime", Util.initTime), 
        Util.firstInit = !0), appInfo.app.installTime = Util.initTime;
        var t = Util.appLaunchInfo.query || {}, n = t.TDChannelId ? t.TDChannelId : "";
        appInfo.app.channel = n, Account && Account.setAccountInfo("account"), onLaunchFn.setNewSession();
    },
    setNewSession: function setNewSession() {
        Util.sessionId = Util.deviceId(), Util.sessionStartTime = Util.timestamp(), Util.Store.set("session_time", Util.sessionStartTime), 
        appInfo.appContext.sessionId = Util.sessionId, appInfo.appContext.sessionStartTime = Util.sessionStartTime;
    },
    getLaunchInfo: function getLaunchInfo() {
        var e = JSON.parse(JSON.stringify(onLaunchFn.launchOptions));
        return e.type = "appLaunch", e;
    },
    getAppProfile: function getAppProfile() {
        if (!hasDataFlag) {
            var e = !0;
            [ "device", "network", "uid" ].forEach(function(t) {
                waitFlag[t] && (e = !1);
            }), e && (hasDataFlag = !0, this.startRequest());
        }
    },
    startRequest: function startRequest() {
        Util.firstInit && onLaunchFn.launchRequest(), this.sessionStart(), this.startLoop();
    },
    getLocation: function getLocation() {
        wx.getLocation({
            type: "wgs84",
            complete: function complete(e) {
                if (e.longitude || e.latitude || e.horizontalAccuracy || e.verticalAccuracy) {
                    var t = appInfo.locations[0];
                    t.lng = e.longitude, t.lat = e.latitude, t.hAccuracy = e.horizontalAccuracy, t.vAccuracy = e.verticalAccuracy, 
                    t.speed = e.speed, t.altitude = e.altitude, t.ts = new Date().getTime();
                }
            }
        });
    },
    getNetwork: function getNetwork() {
        wx.getNetworkType({
            complete: function complete(e) {
                var t = appInfo.networks, n = e.networkType;
                "wifi" === n ? (t[0].available = !0, t[0].connected = !0) : "unknown" === n ? (t[2].available = !0, 
                t[2].connected = !0) : "none" !== n && (t[1].available = !0, t[1].connected = !0, 
                t[1].current.push({
                    type: n
                })), waitFlag.network = !1, onLaunchFn.getAppProfile();
            }
        });
    },
    getSystemInfo: function getSystemInfo() {
        wx.getSystemInfo({
            complete: function complete(e) {
                if (e.model || e.system || e.SDKVersion) {
                    var t = {
                        model: e.model,
                        pixel: e.screenWidth + "*" + e.screenHeight + "*" + e.pixelRatio,
                        densityDpi: e.pixelRatio,
                        brand: e.brand
                    }, n = {
                        os: e.system,
                        local: e.language,
                        language: "zh_CN",
                        osVersionCode: e.version,
                        timezone: -new Date().getTimezoneOffset() / 60,
                        mpVersion: e.SDKVersion
                    };
                    appInfo.device.hardwareConfig = t, appInfo.device.softwareConfig = n;
                }
                waitFlag.device = !1, onLaunchFn.getAppProfile();
            }
        });
    }
}, eventHandle = {
    event: function event() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Util.getEventId(e.id);
        if (t) {
            var n = {};
            n.eventId = t, n.label = Util.getEventId(e.label), n.count = e.count || 1, n.params = e.params, 
            n.startTime = Util.timestamp(), void 0 !== e.value ? "number" != typeof e.value ? console.error('自定义事件"' + t + '"中value对应的值的类型需为Number类型') : isNaN(e.value) ? console.error('自定义事件"' + t + '"中请输入有效的Number类型数值') : (n.value = e.value, 
            Util.addStoreData([ n ])) : Util.addStoreData([ n ]);
        }
    },
    share: function share() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        Util.eventHandle("WeappShare", e);
    },
    pullDownRefresh: function pullDownRefresh() {
        Util.eventHandle("WeappPullDownRefresh");
    },
    reachBottom: function reachBottom() {
        Util.eventHandle("WeappReachBottom");
    },
    setProfile: function setProfile() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.accountId || /0{1}/.test(e.accountId) ? e.accountType || /0{1}/.test(e.accountType) ? void (appInfo.appContext.account = e) : void console.warn("accountType为必填字段！") : void console.warn("accountId为必填字段！");
    },
    profile: accountApi,
    iap: iapEvent
}, appHandle = {
    isHide2Show: !1,
    appIsHide: !1,
    show: function show() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (appHandle.appIsHide = !1, appHandle.getlastTmpData(), appHandle.isHide2Show) {
            var t = Util.Store.get("TMP_time_end_" + Util.sessionId), n = e.scene ? e.scene.toString() : "";
            e.scene && n === Util.appLaunchInfo.scene ? Util.timestamp() - t > 3e4 ? appHandle.sessionRestart(t) : Util.Store.remove("TMP_time_end_" + Util.sessionId) : (Util.appLaunchInfo = JSON.parse(JSON.stringify(e)), 
            Util.appLaunchInfo.scene = n, appHandle.sessionRestart(t)), appHandle.isHide2Show = !1, 
            onLaunchFn.startLoop();
        }
    },
    sessionRestart: function sessionRestart(e) {
        var t = Util.Store.get("TMP_time_start_" + Util.sessionId), n = {
            startTime: t,
            duration: parseInt((e - t) / 1e3)
        };
        onLaunchFn.sessionEnd(n), Util.Store.remove("TMP_time_start_" + Util.sessionId), 
        Util.Store.remove("TMP_time_end_" + Util.sessionId), Util.Store.remove("session_time"), 
        onLaunchFn.sessionStart(!0);
    },
    hide: function hide() {
        appHandle.appIsHide = !0, clearTimeout(onLaunchFn.timeout), onLaunchFn.timeout = null, 
        onLaunchFn.sessionContinue(), appHandle.isHide2Show = !0, Util.Store.set("TMP_time_start_" + Util.sessionId, Util.Store.get("session_time")), 
        Util.Store.set("TMP_time_end_" + Util.sessionId, Util.timestamp());
    },
    getlastTmpData: function getlastTmpData() {
        var e = [], t = Util.Store.getInfo().keys || [], n = void 0, a = void 0;
        t && t.length && (n = t.filter(function(e) {
            return e.indexOf("TDSDK_EVENT") > -1;
        }), a = t.filter(function(e) {
            return e.indexOf("TDSDK_RESEND") > -1;
        })), n && n.length && (n.forEach(function(t) {
            var n = {};
            t.split("_")[2], n.id = t.split("_")[2], n.time = n.id.split("-")[1], e.push(n);
        }), appHandle.sendLastTmpData(e)), a && a.length && a.forEach(function(e) {
            wx.getStorage({
                key: e,
                success: function success(t) {
                    Util.getRequestData(t.data), wx.removeStorage({
                        key: e,
                        success: function success(e) {}
                    });
                }
            });
        });
    },
    sendLastTmpData: function sendLastTmpData() {
        (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(function(e) {
            request.dataType(e.id, e.time);
        });
    }
};

onLaunchFn.init(), wx.onShow(appHandle.show), wx.onHide(appHandle.hide), Object.assign(wx, eventHandle);