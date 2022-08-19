window.zs = window.zs || {}, function(e) {
    "use strict";
    class n {
        constructor() {}
        static initSdkByConf(t = {}) {
            n.conf.channel = t.channel ? t.channel : n.conf.channel, n.conf.appId = t.appId ? t.appId : n.conf.appId, 
            n.conf.secret = t.secret ? t.secret : n.conf.secret, this.Instance = this.getInstance(n.conf.channel);
        }
        static init(t) {
            this.Instance ? this.Instance.init ? (t || console.error("SDK初始化未传入用户唯一标识"), this.Instance.init(t)) : console.error("该平台不支持该接口") : console.error("SDK未初始化");
        }
        static login(t, e) {
            this.Instance && this.Instance.login && this.Instance.login(t, e);
        }
        static loadAd(t) {
            this.Instance && this.Instance.loadAd && this.Instance.loadAd(t);
        }
        static loadCfg(t, e) {
            this.Instance && this.Instance.loadCfg && this.Instance.loadCfg(t, e);
        }
        static navigate2Mini(t, e, n, o, i) {
            this.Instance && this.Instance.navigate2Mini && this.Instance.navigate2Mini(t, e, n, o, i);
        }
        static uploadNavigateEvent(t, e) {
            this.Instance && this.Instance.uploadNavigateEvent && this.Instance.uploadNavigateEvent(data, openid);
        }
        static showMoreGamesModal(t, e) {
            this.Instance && this.Instance.showMoreGamesModal && this.Instance.showMoreGamesModal(t, e);
        }
        static isFromLink() {
            return this.Instance && this.Instance.isFromLink && this.Instance.isFromLink();
        }
        static getInstance(t) {
            switch (t) {
              case "wx":
                return new i();

              case "oppo":
                return new l();

              case "vivo":
                return new s();

              case "tt":
                return new d();

              case "qq":
                return new a();

              case "baidu":
                return new u();

              default:
                console.error("暂不支持" + t + "平台");
            }
        }
    }
    (window.zs = window.zs || {}).sdk = n, n.Instance = null, n.conf = {
        appId: "wx449496bc7bd3daea",
        secret: "BEVDAFwjHKME6R8H",
        uploadLog: "true",
        channel: "wx"
    }, n.adDomain = "https://zsad.zxmn2018.com", n.adDomainList = [ "https://zsad.zxmn2018.com", "https://ad.ali-yun.wang", "https://zsad.zaml2018.com" ];
    class i {
        constructor() {
            this.tjconf = {
                app_key: n.conf.appId,
                getLocation: !1
            }, this.loginUrl = "https://cpcf.wqop2018.com/api/app_login/index", this.cfgUrl = "https://cpcf.wqop2018.com/api/list_config/index", 
            this.userId = null, this.srcAppId = "", this.launchScene = "", this.linkSceneList = [ 1011, 1012, 1013, 1025, 1031, 1032, 1047, 1048, 1049, 1124, 1125, 1126 ], 
            this.adCbList = [], this.inAdRequest = !1;
        }
        get adUrl() {
            return n.adDomain + "/api/";
        }
        postExportAppLog(t, e) {
            var o = this.adUrl + "appad_new/collect", i = Math.round(new Date().getTime() / 1e3).toString(), a = {
                user_id: e,
                from_id: n.conf.appId,
                to_id: t,
                timestamp: i
            }, s = buildSign(a), r = Object.assign({}, a, {
                sign: s
            });
            request(o, r, "POST", function() {}, function() {
                console.log("appad_new/collect fail");
            }, function() {
                console.log("appad_new/collect complete");
            });
        }
        collect(t, e) {
            if ("3" == t.app_type) {
                var n = getStorageSync(t.appid);
                setStorageSync(t.appid, null == n ? 1 : Number(n) + 1);
            }
            "undefined" != typeof wx && this.postExportAppLog(t.app_id, e);
        }
        zsLogin(t, e, n) {
            request(this.loginUrl, n, "POST", function(n) {
                if (200 != n.code) console.log("指色sdk登录返回失败" + JSON.stringify(n.msg)), e && e(n.msg); else {
                    if (!n || !n.data) return e && e("返回数据异常" + JSON.stringify(n)), void console.log("登录返回数据异常" + JSON.stringify(n));
                    console.log("指色sdk登录成功,返回用户id，" + n.data.openid + "  请使用该id初始化sdk"), t && t(n.data.openid);
                }
            }, function(t) {
                console.log("指色sdk登录请求失败" + JSON.stringify(t)), e && e(t);
            }, function(t) {
                console.log("requestAdData complete");
            });
        }
        init(t) {
            if (console.log("zsAdSdk.init"), this.userId = t, "undefined" != typeof wx) {
                var e = this;
                !function() {
                    function o(e, c, l) {
                        function t() {
                            return new Promise(function(t, i) {
                                let a = wx.getStorageSync("tjxx");
                                if (a && void 0 !== a.openid) for (l in a) e[l] = a[l];
                                if ("" == e.cd) t(""); else {
                                    g++;
                                    wx.request({
                                        url: n.adDomain + "/api/app_jump/in",
                                        data: e,
                                        header: {
                                            se: u || "",
                                            op: p || "",
                                            img: S || ""
                                        },
                                        method: "POST",
                                        success: function(n) {
                                            wx.setStorageSync("tjxx", n.data), clearTimeout(s), !0, void 0 !== n.data.rtime && parseInt(n.data.rtime) > 0 ? s = setTimeout(function() {
                                                o(e, t, 2);
                                            }, 1e3 * parseInt(n.data.rtime)) : void 0 !== a.rtime && parseInt(a.rtime) > 0 && (s = setTimeout(function() {
                                                o(e, t, 2);
                                            }, 1e3 * parseInt(a.rtime)));
                                        },
                                        fail: function() {
                                            !0, void 0 !== a.rtime && parseInt(a.rtime) > 0 && (clearTimeout(s), s = setTimeout(function() {
                                                o(e, t, 2);
                                            }, 1e3 * parseInt(a.rtime)));
                                        }
                                    });
                                }
                            });
                        }
                        e.rq_c = g, e.cd = y, e.ifo = r, e.ak = a.app_key, e.uu = d, e.v = i, e.st = Date.now(), 
                        e.ev = c, e.wsr = h, e.ufo = function(t) {
                            if (void 0 === t || "" === t) return "";
                            var e = {};
                            for (var n in t) "rawData" != n && "errMsg" != n && (e[n] = t[n]);
                            return e;
                        }(e.ufo), e.ec = f, void 0 === l ? wx.Queue.push(t) : t();
                    }
                    function c(t) {
                        var e = {};
                        for (var n in t) e[n] = t[n];
                        return e;
                    }
                    wx.Queue = new function() {
                        this.concurrency = 200, this.queue = [], this.tasks = [], this.activeCount = 0;
                        var t = this;
                        this.push = function(e) {
                            this.tasks.push(new Promise(function(n, o) {
                                var i = function() {
                                    t.activeCount++, e().then(function(t) {
                                        n(t);
                                    }).then(function() {
                                        t.next();
                                    });
                                };
                                t.activeCount < t.concurrency ? i() : t.queue.push(i);
                            })), console.log("3");
                        }, this.all = function() {
                            return console.log("4"), Promise.all(this.tasks);
                        }, this.next = function() {
                            console.log("5"), t.activeCount--, t.queue.length > 0 && t.queue.shift()();
                        };
                    }(), wx.Queue.all();
                    var i = "1.0.0", a = e.tjconf;
                    "" === a.app_key && console.error("请在配置文件中填写您的app_key"), a.app_key = a.app_key.replace(/\s/g, "");
                    var s, r = "", d = function() {
                        var t = "";
                        try {
                            t = wx.getStorageSync("h_stat_uuid"), wx.setStorageSync("h_ifo", !0);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            t = "uuid_getstoragesync";
                        }
                        if (t) r = !1; else {
                            t = function() {
                                function e() {
                                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                                }
                                return e() + e() + e() + e() + e() + e() + e() + e();
                            }(), r = !0;
                            try {
                                wx.setStorageSync("h_stat_uuid", t);
                            } catch (t) {
                                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                wx.setStorageSync("h_stat_uuid", "uuid_getstoragesync");
                            }
                        }
                        return t;
                    }(), l = {}, u = "", p = "", f = 0, g = "", h = wx.getLaunchOptionsSync(), m = Date.now(), _ = (Date.now(), 
                    Math.floor(1e7 * Math.random()), Date.now(), Math.floor(1e7 * Math.random()), 0), v = "", S = "", y = "", q = !0, w = [ "h_SendEvent", "h_OnShareAppMessage", "h_ShareAppMessage", "h_SendSession", "h_SendOpenid" ];
                    Promise.all([ new Promise(function(t, e) {
                        "" == y && wx.login({
                            success: function(e) {
                                y = e.code, console.log(y + "---------"), t("");
                            }
                        });
                    }), new Promise(function(t, e) {
                        wx.getNetworkType({
                            success: function(e) {
                                t(e);
                            },
                            fail: function() {
                                t("");
                            }
                        });
                    }), new Promise(function(t, e) {
                        a.getLocation ? wx.getLocation({
                            success: function(e) {
                                t(e);
                            },
                            fail: function() {
                                t("");
                            }
                        }) : wx.getSetting({
                            success: function(e) {
                                e.authSetting["scope.userLocation"] ? (wx.getLocation({
                                    success: function(e) {
                                        t(e);
                                    },
                                    fail: function() {
                                        t("");
                                    }
                                }), t("")) : t("");
                            },
                            fail: function() {
                                t("");
                            }
                        });
                    }) ]).then(function(t) {
                        "" !== t[2] ? (l.lat = t[2].latitude || "", l.lng = t[2].longitude || "", l.spd = t[2].speed || "") : (l.lat = "", 
                        l.lng = "", l.spd = ""), "" !== t[1] ? l.nt = t[1].networkType || "" : l.nt = "";
                        var e = c(l);
                        "" !== t[0] && (e.ufo = t[0], v = t[0]), o(e, "init");
                    }), wx.onShow(function(t) {
                        g = 0, h = t, _ = Date.now(), q || ("" + Date.now() + Math.floor(1e7 * Math.random()), 
                        r = !1, wx.setStorageSync("h_ifo", !1)), q = !1;
                        var e = c(l), n = c(l);
                        e.sm = _ - m, t.query.h_share_src && t.shareTicket && "1044" === t.scene ? (n.tp = "h_share_click", 
                        new Promise(function(t, e) {
                            "1044" == h.scene ? wx.getShareInfo({
                                shareTicket: h.shareTicket,
                                success: function(e) {
                                    t(e);
                                },
                                fail: function() {
                                    t("");
                                }
                            }) : t("");
                        }).then(function(t) {
                            n.ct = t, o(n, "event");
                        })) : t.query.h_share_src && (n.tp = "h_share_click", n.ct = "1", o(n, "event")), 
                        o(e, "show");
                    }), wx.onHide(function() {
                        var t = c(l);
                        t.dr = Date.now() - _, "" === v ? wx.getSetting({
                            success: function(e) {
                                e.authSetting["scope.userInfo"] ? wx.getUserInfo({
                                    success: function(e) {
                                        t.ufo = e, v = e, S = function(t) {
                                            for (var e = "", n = 0; n < t.length; n++) t[n].length > e.length && (e = t[n]);
                                            return e;
                                        }(e.userInfo.avatarUrl.split("/")), o(t, "hide");
                                    }
                                }) : o(t, "hide");
                            }
                        }) : o(t, "hide");
                    }), wx.onError(function(t) {
                        var e = c(l);
                        e.tp = "h_error_message", e.ct = t, f++, o(e, "event");
                    });
                    for (var I = {
                        h_SendEvent: function(t, e) {
                            var n = c(l);
                            "" !== t && "string" == typeof t && t.length <= 255 ? (n.tp = t, "string" == typeof e && e.length <= 255 ? (n.ct = String(e), 
                            o(n, "event")) : "object" == (void 0 === e ? "undefined" : _typeof(e)) ? (JSON.stringify(e).length >= 255 && console.error("自定义事件参数不能超过255个字符"), 
                            n.ct = JSON.stringify(e), o(n, "event")) : void 0 === e || "" === e ? o(n, "event") : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符")) : console.error("事件名称必须为String类型且不能超过255个字符");
                        },
                        h_OnShareAppMessage: function(t) {
                            wx.updateShareMenu({
                                withShareTicket: !0,
                                complete: function() {
                                    wx.onShareAppMessage(function() {
                                        var e = t(), n = "", i = "";
                                        n = void 0 !== e.success ? e.success : "", i = void 0 !== e.fail ? e.fail : "";
                                        var a;
                                        a = void 0 !== h.query.h_share_src ? void 0 !== e.query ? (h.query.h_share_src.indexOf(d), 
                                        e.query + "&h_share_src=" + h.query.h_share_src + "," + d) : (h.query.h_share_src.indexOf(d), 
                                        "h_share_src=" + h.query.h_share_src + "," + d) : void 0 !== e.query ? e.query + "&h_share_src=" + d : "h_share_src=" + d;
                                        var s = c(l);
                                        return e.query = a, s.ct = e, s.tp = "h_share_chain", o(s, "event"), e.success = function(t) {
                                            s.tp = "h_share_status", o(s, "event"), "" !== n && n(t);
                                        }, e.fail = function(t) {
                                            s.tp = "h_share_fail", o(s, "event"), "" !== i && i(t);
                                        }, e;
                                    });
                                }
                            });
                        },
                        h_ShareAppMessage: function(t) {
                            var e = t, n = "", i = "";
                            n = void 0 !== e.success ? e.success : "", i = void 0 !== e.fail ? e.fail : "";
                            var a;
                            a = void 0 !== h.query.h_share_src ? void 0 !== e.query ? (h.query.h_share_src.indexOf(d), 
                            e.query + "&h_share_src=" + h.query.h_share_src + "," + d) : (h.query.h_share_src.indexOf(d), 
                            "h_share_src=" + h.query.h_share_src + "," + d) : void 0 !== e.query ? e.query + "&h_share_src=" + d : "h_share_src=" + d, 
                            e.query = a;
                            var s = c(l);
                            s.ct = e, s.tp = "h_share_chain", o(s, "event"), e.success = function(t) {
                                s.tp = "h_share_status", o(s, "event"), "" !== n && n(t);
                            }, e.fail = function(t) {
                                s.tp = "h_share_fail", o(s, "event"), "" !== i && i(t);
                            }, wx.updateShareMenu({
                                withShareTicket: !0,
                                complete: function() {
                                    wx.shareAppMessage(e);
                                }
                            });
                        },
                        h_SendSession: function(t) {
                            if ("" !== t && t) {
                                var e = c(l);
                                e.tp = "session", e.ct = "session", u = t, "" === v ? wx.getSetting({
                                    success: function(t) {
                                        t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                                            success: function(t) {
                                                e.ufo = t, o(e, "event");
                                            }
                                        }) : o(e, "event");
                                    }
                                }) : (e.ufo = v, "" !== v && (e.gid = ""), o(e, "event"));
                            } else console.error("请传入从后台获取的session_key");
                        },
                        h_SendOpenid: function(t) {
                            if ("" !== t && t) {
                                p = t;
                                var e = c(l);
                                e.tp = "openid", e.ct = "openid", o(e, "event");
                            } else console.error("openID不能为空");
                        }
                    }, k = 0; k < w.length; k++) !function(t, e) {
                        Object.defineProperty(wx, t, {
                            value: e,
                            writable: !1,
                            enumerable: !0,
                            configurable: !0
                        });
                    }(w[k], I[w[k]]);
                    try {
                        var C = wx.getSystemInfoSync();
                        l.br = C.brand || "", l.md = C.model, l.pr = C.pixelRatio, l.sw = C.screenWidth, 
                        l.sh = C.screenHeight, l.ww = C.windowWidth, l.wh = C.windowHeight, l.lang = C.language, 
                        l.wv = C.version, l.sv = C.system, l.wvv = C.platform, l.fs = C.fontSizeSetting, 
                        l.wsdk = C.SDKVersion, l.bh = C.benchmarkLevel || "", l.bt = C.battery || "", l.wf = C.wifiSignal || "", 
                        l.lng = "", l.lat = "", l.nt = "", l.spd = "", l.ufo = "";
                    } catch (t) {}
                }();
            }
        }
        isFromLink() {
            return this.launchInfo && this.linkSceneList.indexOf(this.launchInfo.scene) >= 0 ? (console.log("open by code"), 
            !0) : null != this.launchInfo && null != this.launchInfo.query && null != this.launchInfo.query.customLink;
        }
        loadAd(t) {
            var e = getCache("zsAd", 6e5);
            if (e) t(e); else if (this.inAdRequest) this.adCbList.push(t); else {
                this.inAdRequest = !0, this.adCbList.push(t);
                var o = this, i = this.adUrl + "appad_new/index", a = Math.round(new Date().getTime() / 1e3).toString(), s = {
                    appid: n.conf.appId,
                    timestamp: a
                }, r = buildSign(s), c = Object.assign({}, s, {
                    sign: r
                });
                request(i, c, "POST", function(e) {
                    if (o.inAdRequest = !1, !e.data) return console.log("获取导出数据失败" + JSON.stringify(e), "请检查sdk配置平台是否为wx,secret是否为指色后台配置的secret"), 
                    void t([]);
                    for (var n in e.data) {
                        e.data[n].sort(function() {
                            return Math.random() > .5 ? 1 : -1;
                        });
                    }
                    var i = {
                        more: e.data["position-1"] || [],
                        promotion: e.data["position-2"] || [],
                        indexFloat: e.data["position-3"] || [],
                        banner: e.data["position-4"] || [],
                        indexLeft: e.data["position-7"] || [],
                        gameFloat: e.data["position-8"] || [],
                        endPage: e.data["position-9"] || [],
                        indexLeftFloat: e.data["position-11"] || [],
                        backAd: e.data["position-12"] || [],
                        iosLinkAd: e.data["position-13"] || []
                    };
                    setCache("zsAd", i);
                    for (var a = 0; a < o.adCbList.length; a++) isFun(o.adCbList[a]) && o.adCbList[a](i);
                    o.adCbList = [];
                }, function(t) {
                    o.inAdRequest = !1, console.log("requestAdData fail");
                    for (var e = {
                        more: [],
                        promotion: [],
                        indexFloat: [],
                        banner: [],
                        indexLeft: [],
                        gameFloat: [],
                        endPage: [],
                        indexLeftFloat: [],
                        backAd: [],
                        iosLinkAd: []
                    }, n = 0; n < o.adCbList.length; n++) isFun(o.adCbList[n]) && o.adCbList[n](e);
                    o.adCbList = [];
                }, function(t) {
                    console.log("requestAdData complete");
                });
            }
        }
        navigate2Mini(t, e = this.userId, n, o, i) {
            var a = t;
            if ("undefined" == typeof wx) return isFun(o) && o(), void (isFun(i) && i());
            this.userId || console.log("当前上报用户id不存在，请检查传入参数或是否初始化sdk");
            var s = this;
            a.extraData = a.extraData || {}, wx.navigateToMiniProgram({
                appId: a.appid,
                path: a.link_path,
                extraData: a.extraData,
                success: function(t) {
                    s.collect(a, e), isFun(n) && n();
                },
                fail: function(t) {
                    isFun(o) && o();
                },
                complete: function(t) {
                    isFun(i) && i();
                }
            });
        }
        login(t, e) {
            if ("undefined" != typeof wx) {
                var o = this;
                wx.login({
                    success: function(i) {
                        i.code ? o.zsLogin(t, e, {
                            code: i.code,
                            appid: n.conf.appId
                        }) : (console.log("微信登陆失败" + JSON.stringify(i)), e && e("微信登陆失败" + JSON.stringify(i)));
                    },
                    fail: function(t) {
                        console.log("微信登陆失败" + JSON.stringify(t)), e && e("微信登陆失败" + JSON.stringify(t));
                    },
                    complete: function() {}
                });
            } else this.zsLogin(t, e, {
                code: 1,
                appid: n.conf.appId
            });
        }
        loadCfg(t, e) {
            var o = null;
            if ("undefined" != typeof wx) {
                var i = wx.getLaunchOptionsSync();
                (o = wx.getStorageSync("first_enter_scene")) || (o = i && i.scene || 0, wx.setStorageSync("first_enter_scene", o));
            }
            request(this.cfgUrl, {
                appid: n.conf.appId,
                scene: o
            }, "POST", function(n) {
                200 != n.code ? (console.log("获取开关返回失败" + n.msg), e(n.msg)) : (console.log("获取开关返回成功" + JSON.stringify(n.data) + "目前场景值为" + o), 
                t(n.data));
            }, function(t) {
                console.log("获取开关请求失败" + JSON.stringify(t)), e(t);
            }, function(t) {
                console.log("loadCfg complete");
            });
        }
    }
    class a {
        constructor() {
            this.adUrl = "https://platform.qwpo2018.com/api/", this.loginUrl = "https://platform.qwpo2018.com/api/qq_login/index", 
            this.cfgUrl = "https://platform.qwpo2018.com/api/list_config/index", this.userId = null, 
            this.srcAppId = "", this.launchScene = "", this.cfgCbList = [], this.inCfgRequest = !1, 
            this.adCbList = [], this.inAdRequest = !1, this.linkSceneList = [], this.launchInfo = null;
        }
        sendQQFrom() {
            if (null != this.userId) {
                var t = this.adUrl + "qq_jump/index", e = {
                    appid: n.conf.appId,
                    from_id: this.srcAppId ? this.srcAppId : this.launchScene,
                    user_id: this.userId
                };
                request(t, e, "POST", function() {
                    console.log("上报来路统计成功");
                }, function(t) {
                    console.log("上报来路统计失败" + JSON.stringify(t));
                }, function(t) {
                    console.log("上报来路统计完成", JSON.stringify(t));
                });
            } else console.error("上报来路统计失败，用户id不存在,请检查是否初始化sdk");
        }
        zsLogin(t, e, n) {
            request(this.loginUrl, n, "POST", function(n) {
                if (200 != n.code) console.log("指色sdk登录返回失败" + JSON.stringify(n.msg)), e(n.msg); else {
                    if (!n || !n.data) return e && e("返回数据异常" + JSON.stringify(n)), void console.log("登录返回数据异常" + JSON.stringify(n));
                    console.log("指色sdk登录成功,返回用户id，" + n.data.openid + "  请使用该id初始化sdk"), t(n.data.openid);
                }
            }, function(t) {
                console.log("指色sdk登录请求失败" + JSON.stringify(t)), e(t);
            }, function(t) {
                console.log("requestAdData complete");
            });
        }
        init(t) {
            if (console.log("zsAdSdk.init,用户id：" + t), this.userId = t, "undefined" == typeof qq) this.launchScene = 1038, 
            this.srcAppId = ""; else {
                var e = qq.getLaunchOptionsSync();
                this.launchScene = e.scene ? e.scene : "", this.srcAppId = e.referrerInfo && e.referrerInfo.appId ? e.referrerInfo.appId : "", 
                console.debug("来路统计" + this.srcAppId);
            }
            this.sendQQFrom(), this.onAppLaunch();
        }
        loadCfg(t, e) {
            var o = Math.round(new Date().getTime() / 1e3).toString(), i = 0;
            if ("undefined" != typeof qq) {
                var a = qq.getLaunchOptionsSync();
                null != (i = qq.getStorageSync("first_enter_scene")) && "" != i || (i = a && a.scene || 0, 
                qq.setStorageSync("first_enter_scene", i));
            }
            var s = {
                apk_id: n.conf.appId,
                timestamp: o,
                scene: Number(i)
            }, r = buildSign(s), c = Object.assign({}, s, {
                sign: r
            });
            request(this.cfgUrl, c, "POST", function(n) {
                200 != n.code ? (console.log("获取开关返回失败" + n.msg), e(n.msg)) : (console.log("获取开关返回成功" + JSON.stringify(n.data)), 
                t(n.data));
            }, function(t) {
                console.log("获取开关请求失败" + JSON.stringify(t)), e(t);
            }, function(t) {
                console.log("post loadConfig complete");
            });
        }
        loadAd(t) {
            var e = getCache("zsAd", 1e3), o = this;
            if (e) t(e); else if (this.inAdRequest) this.adCbList.push(t); else {
                this.inAdRequest = !0, this.adCbList.push(t);
                var i = o.adUrl + "apk_ad/index", a = Math.round(new Date().getTime() / 1e3).toString(), s = {
                    apk_id: n.conf.appId,
                    timestamp: a
                }, r = buildSign(s), c = Object.assign({}, s, {
                    sign: r
                });
                request(i, c, "POST", function(t) {
                    if (t.data) {
                        o.inAdRequest = !1, t.data.sort(function() {
                            return Math.random() > .5 ? 1 : -1;
                        }), console.log("res.data", t.data);
                        for (var e = 0; e < t.data.length; ++e) t.data[e].app_icon = t.data[e].link_img, 
                        t.data[e].app_title = t.data[e].link_name, t.data[e].app_desc = t.data[e].link_name, 
                        t.data[e].app_desc = t.data[e].link_des, t.data[e].link_id = t.data[e].id, t.data[e].app_id = t.data[e].link_appid, 
                        t.data[e].pkg_name = t.data[e].link_page, t.data[e].path = t.data[e].link_path;
                        var n = {
                            promotion: t.data
                        };
                        setCache("zsAd", n);
                        for (var i = 0; i < o.adCbList.length; i++) isFun(o.adCbList[i]) && o.adCbList[i](n);
                        o.adCbList = [];
                    }
                }, function(t) {
                    o.inAdRequest = !1, console.log("requestAdData fail");
                    for (var e = {
                        promotion: []
                    }, n = 0; n < o.adCbList.length; n++) isFun(o.adCbList[n]) && o.adCbList[n](e);
                    o.adCbList = [];
                }, function(t) {
                    console.log("requestAdData complete");
                });
            }
        }
        isFromLink() {
            return this.launchInfo && this.linkSceneList.indexOf(this.launchInfo.scene) >= 0 ? (console.log("open by code"), 
            !0) : null != this.launchInfo && null != this.launchInfo.query && null != this.launchInfo.query.customLink;
        }
        login(t, e) {
            if ("undefined" == typeof qq) return console.error("未处于QQ平台"), void (e && e("QQ登陆失败"));
            var o = this;
            qq.login({
                success: function(i) {
                    i.code ? o.zsLogin(t, e, {
                        code: i.code,
                        appid: n.conf.appId
                    }) : (console.log("QQ登陆失败" + JSON.stringify(i)), e && e("QQ登陆失败"));
                },
                fail: function(t) {
                    console.log("QQ登陆失败" + JSON.stringify(t)), e && e("QQ登陆失败");
                },
                complete: function() {}
            });
        }
        onAppLaunch() {
            "undefined" == typeof qq || (this.launchInfo = qq.getLaunchOptionsSync(), console.debug("scene:" + this.launchInfo.scene), 
            this.isFromLink() && console.debug("open by link"));
        }
    }
    class s {
        constructor() {
            this.adUrl = "https://platform.qwpo2018.com/api/", this.loginUrl = "https://platform.qwpo2018.com/api/vivo_login/index", 
            this.cfgUrl = "https://platform.qwpo2018.com/api/list_config/index", this.cfgCbList = [], 
            this.inCfgRequest = !1, this.adCbList = [], this.inAdRequest = !1;
        }
        uploadNavigateEvent(t, e) {
            var o = this.adUrl + "apk_ad/click_log";
            t = {
                apk_id: n.conf.appId,
                link_id: t.link_id,
                user_id: e
            };
            request(o, t, "POST", function() {
                console.log("uploadNavigateEvent success");
            }, function() {
                console.log("uploadNavigateEvent fail");
            }, function() {
                console.log("uploadNavigateEvent complete");
            });
        }
        zsLogin(t, e, n) {
            request(this.loginUrl, n, "POST", function(n) {
                200 != n.code ? e(n.msg) : t(n.data.user_id);
            }, function(t) {
                e(t);
            }, function(t) {
                console.log("zsLogin complete");
            });
        }
        loadAd(t) {
            var e = getCache("zsAd", 6e5);
            if (e) t(e); else if (this.inAdRequest) this.adCbList.push(t); else {
                this.inAdRequest = !0, this.adCbList.push(t);
                var o = this, i = this.adUrl + "apk_ad/index";
                request(i, {
                    apk_id: n.conf.appId
                }, "POST", function(t) {
                    o.inAdRequest = !1, t.data.sort(function() {
                        return Math.random() > .5 ? 1 : -1;
                    });
                    for (var e = 0; e < t.data.length; ++e) t.data[e].app_icon = t.data[e].link_img, 
                    t.data[e].app_title = t.data[e].link_name, t.data[e].app_desc = t.data[e].link_name, 
                    t.data[e].app_desc = t.data[e].link_des, t.data[e].link_id = t.data[e].id, t.data[e].pkg_name = t.data[e].link_page, 
                    t.data[e].path = t.data[e].link_path;
                    var n = {
                        promotion: t.data
                    };
                    setCache("zsAd", n);
                    for (var i = 0; i < o.adCbList.length; i++) isFun(o.adCbList[i]) && o.adCbList[i](n);
                    o.adCbList = [];
                }, function(t) {
                    o.inAdRequest = !1, console.log("requestAdData fail");
                    for (var e = {
                        promotion: []
                    }, n = 0; n < o.adCbList.length; n++) isFun(o.adCbList[n]) && o.adCbList[n](e);
                    o.adCbList = [];
                }, function(t) {
                    console.log("requestAdData complete");
                });
            }
        }
        navigate2Mini(t, e, o, i, a) {
            var s = t, r = s.extraData || {};
            r.from = n.conf.appId;
            var c = this;
            qg.navigateToMiniGame({
                pkgName: s.pkg_name,
                path: s.path,
                extraData: r,
                success: function() {
                    c.uploadNavigateEvent(s, e), console.log("targetMini:", s), isFun(o) && o();
                },
                fail: function() {
                    isFun(i) && i();
                }
            }), console.log("navigateData:" + JSON.stringify(r));
        }
        login(t, e) {
            console.log("zsSdk.login..", "vivo平台版本为：" + qg.getSystemInfoSync().platformVersionCode);
            var o = this;
            if (!window.qg) return console.error("当前平台并非oppo,vivo，无法登录"), void (e && e());
            qg.getSystemInfoSync().platformVersionCode >= 1053 ? qg.login().then(i => {
                if (i.data.token) {
                    var a = JSON.stringify(i.data);
                    console.log("vivo登录成功" + a), o.zsLogin(t, e, {
                        code: i.data.token,
                        apk_id: n.conf.appId
                    });
                }
            }, t => {
                console.log("vivo 登录 fail", JSON.stringify(t)), e && e();
            }) : qg.authorize({
                type: "code",
                success: function(i) {
                    console.log("vivo登录成功" + i), o.zsLogin(t, e, {
                        code: i.code,
                        apk_id: n.conf.appId
                    });
                },
                fail: function(t, n) {
                    console.log("vivo 登录 fail", JSON.stringify(t)), e && e();
                }
            });
        }
        loadCfg(t, e) {
            request(this.cfgUrl, {
                apk_id: n.conf.appId
            }, "POST", function(n) {
                200 != n.code ? (console.log("获取开关配置返回失败" + JSON.stringify(n.msg), "请检查平台配置"), e(n.msg)) : t(n.data);
            }, function(t) {
                e(t);
            }, function(t) {
                console.log("loadCfg complete");
            });
        }
    }
    class d {
        constructor() {
            this.adUrl = "https://platform.qwpo2018.com/api/", this.loginUrl = "https://platform.qwpo2018.com/api/jrtt_login/index", 
            this.cfgUrl = "https://platform.qwpo2018.com/api/list_config/index", this.userId = null, 
            this.srcAppId = "", this.adCbList = [], this.inAdRequest = !1;
        }
        sendAppFrom() {
            if (n.conf.uploadLog) if (null != this.userId) {
                if ("undefined" != typeof tt) {
                    var t = tt.getLaunchOptionsSync(), e = this.adUrl + "jrtt_jump/index", o = {
                        appid: n.conf.appId,
                        from_id: this.srcAppId,
                        user_id: this.userId,
                        from_path: t.query ? t.query : "0"
                    };
                    request(e, o, "POST", function() {}, function() {
                        console.log('jrtt_jump/index" fail');
                    }, function() {
                        console.log('jrtt_jump/index" complete');
                    });
                }
            } else console.error("userId is null,请检查是否初始化sdk");
        }
        zsLogin(t, e, n) {
            request(this.loginUrl, n, "POST", function(n) {
                if (200 != n.code) console.log("头条请求登录返回失败" + n.msg), e(n.msg); else {
                    if (!n || !n.data) return e && e("返回数据异常" + JSON.stringify(n)), void console.log("登录返回数据异常" + JSON.stringify(n));
                    console.log("头条请求登录返回成功,当前用户" + n.data.openid), t(n.data.openid);
                }
            }, function(t) {
                console.log("头条登录请求失败" + JSON.stringify(t)), e(t);
            }, function(t) {
                console.log("requestAdData complete");
            });
        }
        init(t) {
            if (console.log("zsAdSdk.init，当前用户" + t), this.userId = t, "undefined" == typeof tt) this.srcAppId = "0"; else {
                var e = tt.getLaunchOptionsSync();
                this.launchScene = e.scene ? e.scene : "", this.srcAppId = e.referrerInfo && e.referrerInfo.appId ? e.referrerInfo.appId : "0";
            }
            this.sendAppFrom();
        }
        loadAd(t) {
            var e = getCache("zsAd", 1e3);
            if (e) t(e); else if (this.inAdRequest) this.adCbList.push(t); else {
                this.inAdRequest = !0, this.adCbList.push(t);
                var o = this.adUrl + "apk_ad/index", i = Math.round(new Date().getTime() / 1e3).toString(), a = {
                    apk_id: n.conf.appId,
                    timestamp: i
                }, s = buildSign(a), c = Object.assign({}, a, {
                    sign: s
                }), d = this;
                request(o, c, "POST", function(t) {
                    if (d.inAdRequest = !1, t.data.sort(function() {
                        return Math.random() > .5 ? 1 : -1;
                    }), console.log("res.data", t.data), !t.data) return console.log("获取导出数据失败" + JSON.stringify(t)), 
                    void r;
                    for (var e = 0; e < t.data.length; ++e) t.data[e].app_icon = t.data[e].link_img, 
                    t.data[e].app_title = t.data[e].link_name, t.data[e].app_desc = t.data[e].link_name, 
                    t.data[e].app_desc = t.data[e].link_des, t.data[e].link_id = t.data[e].id, t.data[e].app_id = t.data[e].link_appid, 
                    t.data[e].pkg_name = t.data[e].link_page, t.data[e].path = t.data[e].link_path;
                    var n = {
                        promotion: t.data
                    };
                    setCache("zsAd", n);
                    for (var o = 0; o < d.adCbList.length; o++) isFun(d.adCbList[o]) && d.adCbList[o](n);
                    d.adCbList = [];
                }, function(t) {
                    d.inAdRequest = !1, console.log("requestAdData fail");
                    for (var e = {
                        promotion: []
                    }, n = 0; n < d.adCbList.length; n++) isFun(d.adCbList[n]) && d.adCbList[n](e);
                    d.adCbList = [];
                }, function(t) {
                    console.log("requestAdData complete");
                });
            }
        }
        showMoreGamesModal(t, e) {
            if ("undefined" == typeof tt || "function" != typeof tt.showMoreGamesModal) return;
            tt.offNavigateToMiniProgram(), tt.offMoreGamesModalClose(), tt.onMoreGamesModalClose(function(t) {
                console.log("modal closed", t);
            }), tt.onNavigateToMiniProgram(function(n) {
                n && (console.log("是否有跳转的小游戏", n), 0 == n.errCode ? isFun(t) && t() : isFun(e) && e());
            });
            const o = tt.getSystemInfoSync();
            var i = {};
            i.appId = n.conf.appId, "ios" !== o.platform && tt.showMoreGamesModal({
                appLaunchOptions: [ {
                    extraData: i
                } ],
                success(t) {
                    console.log("showMoreGamesModal success", t.errMsg);
                },
                fail(t) {
                    console.log("showMoreGamesModal fail", t.errMsg);
                }
            });
        }
        login(t, e) {
            var o = this;
            if (!window.tt) return console.error("当前平台并非tt，无法登录"), void (e && e());
            tt.login({
                force: !1,
                success: function(i) {
                    console.log(i), i.code || i.anonymousCode ? o.zsLogin(t, e, {
                        appid: n.conf.appId,
                        code: i.code || "",
                        anonymous_code: i.anonymousCode
                    }) : (console.log("头条登录返回失败" + JSON.stringify(i)), e && e("头条登陆失败"));
                },
                fail: function(t) {
                    console.log("头条登录请求失败" + JSON.stringify(t)), e && e("头条登陆失败");
                },
                complete: function() {}
            });
        }
        loadCfg(t, e) {
            request(this.cfgUrl, {
                apk_id: n.conf.appId
            }, "POST", function(n) {
                200 != n.code ? (console.log("获取开关失败,请检查平台配置" + JSON.stringify(n)), e(n.msg)) : t(n.data);
            }, function(t) {
                console.log("获取开关请求失败" + JSON.stringify(t)), e(t);
            }, function(t) {
                console.log("loadCfg complete");
            });
        }
    }
    class l {
        constructor() {
            this.adUrl = "https://platform.qwpo2018.com/api/", this.loginUrl = "https://platform.qwpo2018.com/api/oppo_login/index", 
            this.cfgUrl = "https://platform.qwpo2018.com/api/list_config/index", this.userId = null, 
            this.cfgCbList = [], this.inCfgRequest = !1, this.adCbList = [], this.inAdRequest = !1;
        }
        uploadNavigateEvent(t, e) {
            var o = this.adUrl + "apk_ad/click_log";
            t = {
                apk_id: n.conf.appId,
                link_id: t.link_id,
                user_id: e
            };
            request(o, t, "POST", function() {
                console.log("uploadNavigateEvent success");
            }, function() {
                console.log("uploadNavigateEvent fail");
            }, function() {
                console.log("uploadNavigateEvent complete");
            });
        }
        sendAppFrom() {
            if (null != this.userId) {
                if ("undefined" != typeof qg) {
                    var t = qg.getLaunchOptionsSync(), e = t && t.referrerInfo ? t.referrerInfo.extraData : null;
                    if (e && e.from) {
                        var o = this.adUrl + "oppo_in/index", i = {
                            from_id: e.from,
                            oppo_id: n.conf.appId,
                            user_id: this.userId,
                            from_path: e.path ? e.path : "0",
                            from_page: t.referrerInfo.package ? t.referrerInfo.package : "0"
                        };
                        request(o, i, "POST", function() {
                            console.log("oppo_in success");
                        }, function() {
                            console.log("oppo_in fail");
                        }, function() {
                            console.log("oppo_in complete");
                        });
                    }
                }
            } else console.error("userId is null,请检查是否初始化sdk");
        }
        zsLogin(t, e, n) {
            request(this.loginUrl, n, "POST", function(n) {
                200 != n.code ? (console.log("oppo登录返回失败" + n.msg), e(n.msg)) : t(n.data.user_id);
            }, function(t) {
                console.log("oppo登录请求失败" + JSON.stringify(t)), e(t);
            }, function(t) {
                console.log("requestAdData complete");
            });
        }
        init(t) {
            this.userId = t, this.sendAppFrom();
        }
        loadAd(t) {
            var e = getCache("zsAd", 6e5);
            if (e) t(e); else if (this.inAdRequest) this.adCbList.push(t); else {
                this.inAdRequest = !0, this.adCbList.push(t);
                var o = this, i = this.adUrl + "apk_ad/index";
                request(i, {
                    apk_id: n.conf.appId
                }, "POST", function(t) {
                    o.inAdRequest = !1, t.data.sort(function() {
                        return Math.random() > .5 ? 1 : -1;
                    });
                    for (var e = 0; e < t.data.length; ++e) t.data[e].app_icon = t.data[e].link_img, 
                    t.data[e].app_title = t.data[e].link_name, t.data[e].app_desc = t.data[e].link_name, 
                    t.data[e].app_desc = t.data[e].link_des, t.data[e].link_id = t.data[e].id, t.data[e].pkg_name = t.data[e].link_page, 
                    t.data[e].path = t.data[e].link_path;
                    var n = {
                        promotion: t.data
                    };
                    setCache("zsAd", n);
                    for (var i = 0; i < o.adCbList.length; i++) isFun(o.adCbList[i]) && o.adCbList[i](n);
                    o.adCbList = [];
                }, function(t) {
                    o.inAdRequest = !1, console.log("requestAdData fail");
                    for (var e = {
                        promotion: []
                    }, n = 0; n < o.adCbList.length; n++) isFun(o.adCbList[n]) && o.adCbList[n](e);
                    o.adCbList = [];
                }, function(t) {
                    console.log("requestAdData complete");
                });
            }
        }
        navigate2Mini(t, e, o, i, a) {
            var s = t, r = s.extraData || {};
            r.from = n.conf.appId;
            var c = this;
            qg.navigateToMiniGame({
                pkgName: s.pkg_name,
                path: s.path,
                extraData: r,
                success: function() {
                    c.uploadNavigateEvent(s, e), console.log("targetMini:", s), isFun(o) && o();
                },
                fail: function() {
                    isFun(i) && i();
                }
            }), console.log("navigateData:" + JSON.stringify(r));
        }
        login(t, e) {
            var o = this;
            if (!window.qg) return console.error("当前平台并非oppo,vivo，无法登录"), void (e && e());
            qg.login({
                success: function(i) {
                    0 == i.code ? o.zsLogin(t, e, {
                        code: i.data.token,
                        apk_id: n.conf.appId
                    }) : (console.log("oppo登录失败" + JSON.stringify(i)), e && e("oppo登陆失败"));
                },
                fail: function(t) {
                    console.log("oppo登录请求失败" + JSON.stringify(t)), e && e("oppo登陆失败");
                },
                complete: function() {}
            });
        }
        loadCfg(t, e) {
            request(this.cfgUrl, {
                apk_id: n.conf.appId
            }, "POST", function(n) {
                200 != n.code ? (console.log("oppo开关返回失败" + n.msg), e(n.msg)) : t(n.data);
            }, function(t) {
                console.log("oppo开关请求失败" + JSON, stringify(t)), e(t);
            }, function(t) {
                console.log("loadCfg complete");
            });
        }
        isExportValid() {
            return !0;
        }
        isFromLink() {
            return !1;
        }
    }
    class u {
        constructor() {
            this.adUrl = "https://platform.qwpo2018.com/api/", this.loginUrl = "https://platform.qwpo2018.com/api/bd_login/index", 
            this.cfgUrl = "https://platform.qwpo2018.com/api/list_config/index", this.userId = null, 
            this.srcAppId = "", this.adCbList = [], this.inAdRequest = !1;
        }
        sendAppFrom() {
            if (n.conf.uploadLog) {
                if (null != this.userId) {
                    if ("undefined" != typeof swan) {
                        var t = swan.getLaunchOptionsSync(), e = this.adUrl + "bd_jump/index", o = {
                            appid: n.conf.appId,
                            from_id: this.srcAppId,
                            user_id: this.userId,
                            from_path: t.query ? t.query : "0"
                        };
                        request(e, o, "POST", function() {}, function() {
                            console.log('bd_jump/index" fail');
                        }, function() {
                            console.log('bd_jump/index" complete');
                        });
                    }
                } else console.error("userId is null");
            }
        }
        zsLogin(t, e, n) {
            request(this.loginUrl, n, "POST", function(n) {
                if (200 != n.code) e && e(n.msg); else {
                    if (!n || !n.data) return e && e("返回数据异常" + JSON.stringify(n)), void console.log("登录返回数据异常" + JSON.stringify(n));
                    t(n.data.openid);
                }
            }, function(t) {
                e(t);
            }, function(t) {
                console.log("requestAdData complete");
            });
        }
        init(t) {
            if (console.log("zsAdSdk.init"), this.userId = t, "undefined" == typeof swan) this.srcAppId = "0"; else {
                var e = swan.getLaunchOptionsSync();
                this.launchScene = e.scene ? e.scene : "", this.srcAppId = e.referrerInfo && e.referrerInfo.appId ? e.referrerInfo.appId : "0";
            }
            this.sendAppFrom();
        }
        loadAd(t) {
            var e = getCache("zsAd", 1e3);
            if (e) t(e); else if (this.inAdRequest) this.adCbList.push(t); else {
                this.inAdRequest = !0, this.adCbList.push(t);
                var o = this, i = this.adUrl + "apk_ad/index", a = Math.round(new Date().getTime() / 1e3).toString(), s = {
                    apk_id: n.conf.appId,
                    timestamp: a
                }, r = buildSign(s), c = Object.assign({}, s, {
                    sign: r
                });
                request(i, c, "POST", function(t) {
                    o.inAdRequest = !1, t.data.sort(function() {
                        return Math.random() > .5 ? 1 : -1;
                    }), console.log("res.data", t.data);
                    for (var e = 0; e < t.data.length; ++e) t.data[e].app_icon = t.data[e].link_img, 
                    t.data[e].app_title = t.data[e].link_name, t.data[e].app_desc = t.data[e].link_name, 
                    t.data[e].app_desc = t.data[e].link_des, t.data[e].link_id = t.data[e].id, t.data[e].app_id = t.data[e].link_appid, 
                    t.data[e].pkg_name = t.data[e].link_page, t.data[e].path = t.data[e].link_path;
                    var n = {
                        promotion: t.data
                    };
                    setCache("zsAd", n);
                    for (var i = 0; i < o.adCbList.length; i++) isFun(o.adCbList[i]) && o.adCbList[i](n);
                    o.adCbList = [];
                }, function(t) {
                    o.inAdRequest = !1, console.log("requestAdData fail");
                    for (var e = {
                        promotion: []
                    }, n = 0; n < o.adCbList.length; n++) isFun(o.adCbList[n]) && o.adCbList[n](e);
                    o.adCbList = [];
                }, function(t) {
                    console.log("requestAdData complete");
                });
            }
        }
        login(t, e) {
            var o = this;
            if (!window.swan) return console.error("当前平台并非百度，无法登录"), void (e && e());
            swan.login({
                success: function(i) {
                    console.log(i), i.code ? o.zsLogin(t, e, {
                        appid: n.conf.appId,
                        code: i.code
                    }) : e && e("百度登陆失败");
                },
                fail: function() {
                    e && e("百度登陆失败");
                },
                complete: function() {}
            });
        }
        loadCfg(t, e) {
            request(this.cfgUrl, {
                apk_id: n.conf.appId
            }, "POST", function(n) {
                200 != n.code ? e(n.msg) : t(n.data);
            }, function(t) {
                e(t);
            }, function(t) {
                console.log("loadCfg complete");
            });
        }
    }
}(), zs.sdk.initSdkByConf();

var sdkStorage = {}, setStorageSync = function(t, e) {
    sdkStorage[t] = e;
}, getStorageSync = function(t) {
    return sdkStorage[t];
}, getCache = function(t, e) {
    if (e) {
        var n = getStorageSync(t + "_time");
        return null == n || Date.now() - Number(n) < e ? getStorageSync(t) : null;
    }
    return getStorageSync(t);
}, setCache = function(t, e) {
    setStorageSync(t, e), setStorageSync(t + "_time", Date.now());
}, object2Query = function(t) {
    var e = [];
    for (var n in t) e.push(n + "=" + t[n]);
    return e.join("&");
}, request = function(t, e, n, o, i) {
    var a = new XMLHttpRequest();
    a.onreadystatechange = function() {
        if (4 == a.readyState) {
            var t = a.responseText;
            if (a.status >= 200 && a.status < 400) {
                var e = {};
                try {
                    e = JSON.parse(t);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error("json parse error ", t), i(e);
                }
                o && o(e);
            } else console.error("error ", t), i(t);
        }
    }, a.timeout = 3e3, a.ontimeout = function(t) {
        console.error("error ", t), i(t);
    }, a.open(n, t, !0), "POST" == n ? (a.open("POST", t), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
    a.send(object2Query(e))) : a.send();
}, md5 = function(t) {
    var e, n, o, i, a, s, r, c, d, l = function(t, e) {
        return t << e | t >>> 32 - e;
    }, u = function(t, e) {
        var n, o, i, a, s;
        return i = 2147483648 & t, a = 2147483648 & e, s = (1073741823 & t) + (1073741823 & e), 
        (n = 1073741824 & t) & (o = 1073741824 & e) ? 2147483648 ^ s ^ i ^ a : n | o ? 1073741824 & s ? 3221225472 ^ s ^ i ^ a : 1073741824 ^ s ^ i ^ a : s ^ i ^ a;
    }, p = function(t, e, n, o, i, a, s) {
        return t = u(t, u(u(function(t, e, n) {
            return t & e | ~t & n;
        }(e, n, o), i), s)), u(l(t, a), e);
    }, f = function(t, e, n, o, i, a, s) {
        return t = u(t, u(u(function(t, e, n) {
            return t & n | e & ~n;
        }(e, n, o), i), s)), u(l(t, a), e);
    }, g = function(t, e, n, o, i, a, s) {
        return t = u(t, u(u(function(t, e, n) {
            return t ^ e ^ n;
        }(e, n, o), i), s)), u(l(t, a), e);
    }, h = function(t, e, n, o, i, a, s) {
        return t = u(t, u(u(function(t, e, n) {
            return e ^ (t | ~n);
        }(e, n, o), i), s)), u(l(t, a), e);
    }, m = function(t) {
        var e, n = "", o = "";
        for (e = 0; e <= 3; e++) n += (o = "0" + (t >>> 8 * e & 255).toString(16)).substr(o.length - 2, 2);
        return n;
    }, _ = Array();
    for (_ = function(t) {
        for (var e, n = t.length, o = n + 8, i = 16 * ((o - o % 64) / 64 + 1), a = Array(i - 1), s = 0, r = 0; r < n; ) s = r % 4 * 8, 
        a[e = (r - r % 4) / 4] = a[e] | t.charCodeAt(r) << s, r++;
        return s = r % 4 * 8, a[e = (r - r % 4) / 4] = a[e] | 128 << s, a[i - 2] = n << 3, 
        a[i - 1] = n >>> 29, a;
    }(t = function(t) {
        t = t.replace(/\x0d\x0a/g, "\n");
        for (var e = "", n = 0; n < t.length; n++) {
            var o = t.charCodeAt(n);
            o < 128 ? e += String.fromCharCode(o) : o > 127 && o < 2048 ? (e += String.fromCharCode(o >> 6 | 192), 
            e += String.fromCharCode(63 & o | 128)) : (e += String.fromCharCode(o >> 12 | 224), 
            e += String.fromCharCode(o >> 6 & 63 | 128), e += String.fromCharCode(63 & o | 128));
        }
        return e;
    }(t)), s = 1732584193, r = 4023233417, c = 2562383102, d = 271733878, e = 0; e < _.length; e += 16) n = s, 
    o = r, i = c, a = d, s = p(s, r, c, d, _[e + 0], 7, 3614090360), d = p(d, s, r, c, _[e + 1], 12, 3905402710), 
    c = p(c, d, s, r, _[e + 2], 17, 606105819), r = p(r, c, d, s, _[e + 3], 22, 3250441966), 
    s = p(s, r, c, d, _[e + 4], 7, 4118548399), d = p(d, s, r, c, _[e + 5], 12, 1200080426), 
    c = p(c, d, s, r, _[e + 6], 17, 2821735955), r = p(r, c, d, s, _[e + 7], 22, 4249261313), 
    s = p(s, r, c, d, _[e + 8], 7, 1770035416), d = p(d, s, r, c, _[e + 9], 12, 2336552879), 
    c = p(c, d, s, r, _[e + 10], 17, 4294925233), r = p(r, c, d, s, _[e + 11], 22, 2304563134), 
    s = p(s, r, c, d, _[e + 12], 7, 1804603682), d = p(d, s, r, c, _[e + 13], 12, 4254626195), 
    c = p(c, d, s, r, _[e + 14], 17, 2792965006), s = f(s, r = p(r, c, d, s, _[e + 15], 22, 1236535329), c, d, _[e + 1], 5, 4129170786), 
    d = f(d, s, r, c, _[e + 6], 9, 3225465664), c = f(c, d, s, r, _[e + 11], 14, 643717713), 
    r = f(r, c, d, s, _[e + 0], 20, 3921069994), s = f(s, r, c, d, _[e + 5], 5, 3593408605), 
    d = f(d, s, r, c, _[e + 10], 9, 38016083), c = f(c, d, s, r, _[e + 15], 14, 3634488961), 
    r = f(r, c, d, s, _[e + 4], 20, 3889429448), s = f(s, r, c, d, _[e + 9], 5, 568446438), 
    d = f(d, s, r, c, _[e + 14], 9, 3275163606), c = f(c, d, s, r, _[e + 3], 14, 4107603335), 
    r = f(r, c, d, s, _[e + 8], 20, 1163531501), s = f(s, r, c, d, _[e + 13], 5, 2850285829), 
    d = f(d, s, r, c, _[e + 2], 9, 4243563512), c = f(c, d, s, r, _[e + 7], 14, 1735328473), 
    s = g(s, r = f(r, c, d, s, _[e + 12], 20, 2368359562), c, d, _[e + 5], 4, 4294588738), 
    d = g(d, s, r, c, _[e + 8], 11, 2272392833), c = g(c, d, s, r, _[e + 11], 16, 1839030562), 
    r = g(r, c, d, s, _[e + 14], 23, 4259657740), s = g(s, r, c, d, _[e + 1], 4, 2763975236), 
    d = g(d, s, r, c, _[e + 4], 11, 1272893353), c = g(c, d, s, r, _[e + 7], 16, 4139469664), 
    r = g(r, c, d, s, _[e + 10], 23, 3200236656), s = g(s, r, c, d, _[e + 13], 4, 681279174), 
    d = g(d, s, r, c, _[e + 0], 11, 3936430074), c = g(c, d, s, r, _[e + 3], 16, 3572445317), 
    r = g(r, c, d, s, _[e + 6], 23, 76029189), s = g(s, r, c, d, _[e + 9], 4, 3654602809), 
    d = g(d, s, r, c, _[e + 12], 11, 3873151461), c = g(c, d, s, r, _[e + 15], 16, 530742520), 
    s = h(s, r = g(r, c, d, s, _[e + 2], 23, 3299628645), c, d, _[e + 0], 6, 4096336452), 
    d = h(d, s, r, c, _[e + 7], 10, 1126891415), c = h(c, d, s, r, _[e + 14], 15, 2878612391), 
    r = h(r, c, d, s, _[e + 5], 21, 4237533241), s = h(s, r, c, d, _[e + 12], 6, 1700485571), 
    d = h(d, s, r, c, _[e + 3], 10, 2399980690), c = h(c, d, s, r, _[e + 10], 15, 4293915773), 
    r = h(r, c, d, s, _[e + 1], 21, 2240044497), s = h(s, r, c, d, _[e + 8], 6, 1873313359), 
    d = h(d, s, r, c, _[e + 15], 10, 4264355552), c = h(c, d, s, r, _[e + 6], 15, 2734768916), 
    r = h(r, c, d, s, _[e + 13], 21, 1309151649), s = h(s, r, c, d, _[e + 4], 6, 4149444226), 
    d = h(d, s, r, c, _[e + 11], 10, 3174756917), c = h(c, d, s, r, _[e + 2], 15, 718787259), 
    r = h(r, c, d, s, _[e + 9], 21, 3951481745), s = u(s, n), r = u(r, o), c = u(c, i), 
    d = u(d, a);
    return (m(s) + m(r) + m(c) + m(d)).toLowerCase();
}, isFun = function(t) {
    return "function" == typeof t;
}, buildSign = function(t, e) {
    e = e || !0;
    for (var n = Object.keys(t).sort(), o = "", i = 0; i < n.length; i++) o += n[i] + ":" + t[n[i]];
    e && (o += zs.sdk.conf.secret);
    var a = md5(o);
    return a = a.toLowerCase();
}, checkNetDomain = function() {
    request("https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/cp/cpDomainName/domain.json", null, "get", function(t) {
        t && t.domain && (console.log("获取到网上广告域名" + t.domain), zs.sdk.domain = t.domain);
    }, function(t) {
        console.log("请求网络域名失败" + JSON.stringify(t));
    });
};

checkNetDomain();