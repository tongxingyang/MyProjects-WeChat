var n = require("../../../@babel/runtime/helpers/classCallCheck"), t = require("../../../@babel/runtime/helpers/createClass");

!function(e) {
    var o = e;
    (function() {
        o.zs = o.zs || {}, function(e) {
            var f = function() {
                function e() {
                    n(this, e);
                }
                return t(e, null, [ {
                    key: "initSdkByConf",
                    value: function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.conf.channel = n.channel ? n.channel : e.conf.channel, e.conf.appId = n.appId ? n.appId : e.conf.appId, 
                        e.conf.secret = n.secret ? n.secret : e.conf.secret, this.Instance = this.getInstance(e.conf.channel);
                    }
                }, {
                    key: "init",
                    value: function(n) {
                        this.Instance ? this.Instance.init ? (n || console.error("SDK初始化未传入用户唯一标识"), this.Instance.init(n)) : console.error("该平台不支持该接口") : console.error("SDK未初始化");
                    }
                }, {
                    key: "login",
                    value: function(n, t) {
                        this.Instance && this.Instance.login && this.Instance.login(n, t);
                    }
                }, {
                    key: "loadAd",
                    value: function(n) {
                        this.Instance && this.Instance.loadAd && this.Instance.loadAd(n);
                    }
                }, {
                    key: "loadCfg",
                    value: function(n, t) {
                        this.Instance && this.Instance.loadCfg && this.Instance.loadCfg(n, t);
                    }
                }, {
                    key: "navigate2Mini",
                    value: function(n, t, e, o, i) {
                        this.Instance && this.Instance.navigate2Mini && this.Instance.navigate2Mini(n, t, e, o, i);
                    }
                }, {
                    key: "uploadNavigateEvent",
                    value: function(n, t) {
                        this.Instance && this.Instance.uploadNavigateEvent && this.Instance.uploadNavigateEvent(data, openid);
                    }
                }, {
                    key: "showMoreGamesModal",
                    value: function(n, t) {
                        this.Instance && this.Instance.showMoreGamesModal && this.Instance.showMoreGamesModal(n, t);
                    }
                }, {
                    key: "isFromLink",
                    value: function() {
                        return this.Instance && this.Instance.isFromLink && this.Instance.isFromLink();
                    }
                }, {
                    key: "getInstance",
                    value: function(n) {
                        switch (n) {
                          case "wx":
                            return new p();

                          case "oppo":
                            return new m();

                          case "vivo":
                            return new g();

                          case "tt":
                            return new v();

                          case "qq":
                            return new h();

                          case "baidu":
                            return new _();

                          default:
                            console.error("暂不支持" + n + "平台");
                        }
                    }
                } ]), e;
            }();
            e.sdk = f, f.Instance = null, f.conf = {
                appId: "wx8b4ef83c690accb5",
                secret: "vwIItxqTNMgbRMW8",
                uploadLog: "true",
                channel: "wx"
            }, f.adDomain = "https://zsad.zxmn2018.com", f.adDomainList = [ "https://zsad.zxmn2018.com", "https://ad.ali-yun.wang", "https://zsad.zaml2018.com" ];
            var p = function() {
                function e() {
                    n(this, e), this.tjconf = {
                        app_key: f.conf.appId,
                        getLocation: !1
                    }, this.loginUrl = "https://cpcf.wqop2018.com/api/app_login/index", this.cfgUrl = "https://cpcf.wqop2018.com/api/list_config/index", 
                    this.userId = null, this.srcAppId = "", this.launchScene = "", this.linkSceneList = [ 1011, 1012, 1013, 1025, 1031, 1032, 1047, 1048, 1049, 1124, 1125, 1126 ], 
                    this.adCbList = [], this.inAdRequest = !1;
                }
                return t(e, [ {
                    key: "adUrl",
                    get: function() {
                        return f.adDomain + "/api/";
                    }
                }, {
                    key: "postExportAppLog",
                    value: function(n, t) {
                        var e = this.adUrl + "appad_new/collect", o = Math.round(new Date().getTime() / 1e3).toString(), i = {
                            user_id: t,
                            from_id: f.conf.appId,
                            to_id: n,
                            timestamp: o
                        }, a = u(i), s = Object.assign({}, i, {
                            sign: a
                        });
                        d(e, s, "POST", function() {}, function() {
                            console.log("appad_new/collect fail");
                        }, function() {
                            console.log("appad_new/collect complete");
                        });
                    }
                }, {
                    key: "collect",
                    value: function(n, t) {
                        if ("3" == n.app_type) {
                            var e = a(n.appid);
                            i(n.appid, null == e ? 1 : Number(e) + 1);
                        }
                        "undefined" != typeof wx && this.postExportAppLog(n.app_id, t);
                    }
                }, {
                    key: "zsLogin",
                    value: function(n, t, e) {
                        d(this.loginUrl, e, "POST", function(e) {
                            if (200 != e.code) console.log("指色sdk登录返回失败" + JSON.stringify(e.msg)), t && t(e.msg); else {
                                if (!e || !e.data) return t && t("返回数据异常" + JSON.stringify(e)), void console.log("登录返回数据异常" + JSON.stringify(e));
                                console.log("指色sdk登录成功,返回用户id，" + e.data.openid + "  请使用该id初始化sdk"), n && n(e.data.openid);
                            }
                        }, function(n) {
                            console.log("指色sdk登录请求失败" + JSON.stringify(n)), t && t(n);
                        }, function(n) {
                            console.log("requestAdData complete");
                        });
                    }
                }, {
                    key: "init",
                    value: function(n) {
                        if (console.log("zsAdSdk.init"), this.userId = n, "undefined" != typeof wx) {
                            var t = this;
                            !function() {
                                function n(t, e, c) {
                                    function g() {
                                        return new Promise(function(e, o) {
                                            var i = wx.getStorageSync("tjxx");
                                            if (i && void 0 !== i.openid) for (c in i) t[c] = i[c];
                                            if ("" == t.cd) e(""); else {
                                                p++;
                                                wx.request({
                                                    url: f.adDomain + "/api/app_jump/in",
                                                    data: t,
                                                    header: {
                                                        se: d || "",
                                                        op: l || "",
                                                        img: _ || ""
                                                    },
                                                    method: "POST",
                                                    success: function(o) {
                                                        wx.setStorageSync("tjxx", o.data), clearTimeout(a), !0, void 0 !== o.data.rtime && parseInt(o.data.rtime) > 0 ? a = setTimeout(function() {
                                                            n(t, e, 2);
                                                        }, 1e3 * parseInt(o.data.rtime)) : void 0 !== i.rtime && parseInt(i.rtime) > 0 && (a = setTimeout(function() {
                                                            n(t, e, 2);
                                                        }, 1e3 * parseInt(i.rtime)));
                                                    },
                                                    fail: function() {
                                                        !0, void 0 !== i.rtime && parseInt(i.rtime) > 0 && (clearTimeout(a), a = setTimeout(function() {
                                                            n(t, e, 2);
                                                        }, 1e3 * parseInt(i.rtime)));
                                                    }
                                                });
                                            }
                                        });
                                    }
                                    t.rq_c = p, t.cd = y, t.ifo = s, t.ak = i.app_key, t.uu = r, t.v = o, t.st = Date.now(), 
                                    t.ev = e, t.wsr = h, t.ufo = function(n) {
                                        if (void 0 === n || "" === n) return "";
                                        var t = {};
                                        for (var e in n) "rawData" != e && "errMsg" != e && (t[e] = n[e]);
                                        return t;
                                    }(t.ufo), t.ec = u, void 0 === c ? wx.Queue.push(g) : g();
                                }
                                function e(n) {
                                    var t = {};
                                    for (var e in n) t[e] = n[e];
                                    return t;
                                }
                                wx.Queue = new function() {
                                    this.concurrency = 200, this.queue = [], this.tasks = [], this.activeCount = 0;
                                    var n = this;
                                    this.push = function(t) {
                                        this.tasks.push(new Promise(function(e, o) {
                                            var i = function() {
                                                n.activeCount++, t().then(function(n) {
                                                    e(n);
                                                }).then(function() {
                                                    n.next();
                                                });
                                            };
                                            n.activeCount < n.concurrency ? i() : n.queue.push(i);
                                        })), console.log("3");
                                    }, this.all = function() {
                                        return console.log("4"), Promise.all(this.tasks);
                                    }, this.next = function() {
                                        console.log("5"), n.activeCount--, n.queue.length > 0 && n.queue.shift()();
                                    };
                                }(), wx.Queue.all();
                                var o = "1.0.0", i = t.tjconf;
                                "" === i.app_key && console.error("请在配置文件中填写您的app_key"), i.app_key = i.app_key.replace(/\s/g, "");
                                var a, s = "", r = function() {
                                    var n = "";
                                    try {
                                        n = wx.getStorageSync("h_stat_uuid"), wx.setStorageSync("h_ifo", !0);
                                    } catch (t) {
                                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                        n = "uuid_getstoragesync";
                                    }
                                    if (n) s = !1; else {
                                        n = function() {
                                            function n() {
                                                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                                            }
                                            return n() + n() + n() + n() + n() + n() + n() + n();
                                        }(), s = !0;
                                        try {
                                            wx.setStorageSync("h_stat_uuid", n);
                                        } catch (n) {
                                            n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                                            wx.setStorageSync("h_stat_uuid", "uuid_getstoragesync");
                                        }
                                    }
                                    return n;
                                }(), c = {}, d = "", l = "", u = 0, p = "", h = wx.getLaunchOptionsSync(), g = Date.now(), v = (Date.now(), 
                                Math.floor(1e7 * Math.random()), Date.now(), Math.floor(1e7 * Math.random()), 0), m = "", _ = "", y = "", k = !0, S = [ "h_SendEvent", "h_OnShareAppMessage", "h_ShareAppMessage", "h_SendSession", "h_SendOpenid" ];
                                Promise.all([ new Promise(function(n, t) {
                                    "" == y && wx.login({
                                        success: function(t) {
                                            y = t.code, console.log(y + "---------"), n("");
                                        }
                                    });
                                }), new Promise(function(n, t) {
                                    wx.getNetworkType({
                                        success: function(t) {
                                            n(t);
                                        },
                                        fail: function() {
                                            n("");
                                        }
                                    });
                                }), new Promise(function(n, t) {
                                    i.getLocation ? wx.getLocation({
                                        success: function(t) {
                                            n(t);
                                        },
                                        fail: function() {
                                            n("");
                                        }
                                    }) : wx.getSetting({
                                        success: function(t) {
                                            t.authSetting["scope.userLocation"] ? (wx.getLocation({
                                                success: function(t) {
                                                    n(t);
                                                },
                                                fail: function() {
                                                    n("");
                                                }
                                            }), n("")) : n("");
                                        },
                                        fail: function() {
                                            n("");
                                        }
                                    });
                                }) ]).then(function(t) {
                                    "" !== t[2] ? (c.lat = t[2].latitude || "", c.lng = t[2].longitude || "", c.spd = t[2].speed || "") : (c.lat = "", 
                                    c.lng = "", c.spd = ""), "" !== t[1] ? c.nt = t[1].networkType || "" : c.nt = "";
                                    var o = e(c);
                                    "" !== t[0] && (o.ufo = t[0], m = t[0]), n(o, "init");
                                }), wx.onShow(function(t) {
                                    p = 0, h = t, v = Date.now(), k || ("" + Date.now() + Math.floor(1e7 * Math.random()), 
                                    s = !1, wx.setStorageSync("h_ifo", !1)), k = !1;
                                    var o = e(c), i = e(c);
                                    o.sm = v - g, t.query.h_share_src && t.shareTicket && "1044" === t.scene ? (i.tp = "h_share_click", 
                                    new Promise(function(n, t) {
                                        "1044" == h.scene ? wx.getShareInfo({
                                            shareTicket: h.shareTicket,
                                            success: function(t) {
                                                n(t);
                                            },
                                            fail: function() {
                                                n("");
                                            }
                                        }) : n("");
                                    }).then(function(t) {
                                        i.ct = t, n(i, "event");
                                    })) : t.query.h_share_src && (i.tp = "h_share_click", i.ct = "1", n(i, "event")), 
                                    n(o, "show");
                                }), wx.onHide(function() {
                                    var t = e(c);
                                    t.dr = Date.now() - v, "" === m ? wx.getSetting({
                                        success: function(e) {
                                            e.authSetting["scope.userInfo"] ? wx.getUserInfo({
                                                success: function(e) {
                                                    t.ufo = e, m = e, _ = function(n) {
                                                        for (var t = "", e = 0; e < n.length; e++) n[e].length > t.length && (t = n[e]);
                                                        return t;
                                                    }(e.userInfo.avatarUrl.split("/")), n(t, "hide");
                                                }
                                            }) : n(t, "hide");
                                        }
                                    }) : n(t, "hide");
                                }), wx.onError(function(t) {
                                    var o = e(c);
                                    o.tp = "h_error_message", o.ct = t, u++, n(o, "event");
                                });
                                for (var I = {
                                    h_SendEvent: function(t, o) {
                                        var i = e(c);
                                        "" !== t && "string" == typeof t && t.length <= 255 ? (i.tp = t, "string" == typeof o && o.length <= 255 ? (i.ct = String(o), 
                                        n(i, "event")) : "object" == (void 0 === o ? "undefined" : _typeof(o)) ? (JSON.stringify(o).length >= 255 && console.error("自定义事件参数不能超过255个字符"), 
                                        i.ct = JSON.stringify(o), n(i, "event")) : void 0 === o || "" === o ? n(i, "event") : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符")) : console.error("事件名称必须为String类型且不能超过255个字符");
                                    },
                                    h_OnShareAppMessage: function(t) {
                                        wx.updateShareMenu({
                                            withShareTicket: !0,
                                            complete: function() {
                                                wx.onShareAppMessage(function() {
                                                    var o = t(), i = "", a = "";
                                                    i = void 0 !== o.success ? o.success : "", a = void 0 !== o.fail ? o.fail : "";
                                                    var s;
                                                    s = void 0 !== h.query.h_share_src ? void 0 !== o.query ? (h.query.h_share_src.indexOf(r), 
                                                    o.query + "&h_share_src=" + h.query.h_share_src + "," + r) : (h.query.h_share_src.indexOf(r), 
                                                    "h_share_src=" + h.query.h_share_src + "," + r) : void 0 !== o.query ? o.query + "&h_share_src=" + r : "h_share_src=" + r;
                                                    var d = e(c);
                                                    return o.query = s, d.ct = o, d.tp = "h_share_chain", n(d, "event"), o.success = function(t) {
                                                        d.tp = "h_share_status", n(d, "event"), "" !== i && i(t);
                                                    }, o.fail = function(t) {
                                                        d.tp = "h_share_fail", n(d, "event"), "" !== a && a(t);
                                                    }, o;
                                                });
                                            }
                                        });
                                    },
                                    h_ShareAppMessage: function(t) {
                                        var o = t, i = "", a = "";
                                        i = void 0 !== o.success ? o.success : "", a = void 0 !== o.fail ? o.fail : "";
                                        var s;
                                        s = void 0 !== h.query.h_share_src ? void 0 !== o.query ? (h.query.h_share_src.indexOf(r), 
                                        o.query + "&h_share_src=" + h.query.h_share_src + "," + r) : (h.query.h_share_src.indexOf(r), 
                                        "h_share_src=" + h.query.h_share_src + "," + r) : void 0 !== o.query ? o.query + "&h_share_src=" + r : "h_share_src=" + r, 
                                        o.query = s;
                                        var d = e(c);
                                        d.ct = o, d.tp = "h_share_chain", n(d, "event"), o.success = function(t) {
                                            d.tp = "h_share_status", n(d, "event"), "" !== i && i(t);
                                        }, o.fail = function(t) {
                                            d.tp = "h_share_fail", n(d, "event"), "" !== a && a(t);
                                        }, wx.updateShareMenu({
                                            withShareTicket: !0,
                                            complete: function() {
                                                wx.shareAppMessage(o);
                                            }
                                        });
                                    },
                                    h_SendSession: function(t) {
                                        if ("" !== t && t) {
                                            var o = e(c);
                                            o.tp = "session", o.ct = "session", d = t, "" === m ? wx.getSetting({
                                                success: function(t) {
                                                    t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                                                        success: function(t) {
                                                            o.ufo = t, n(o, "event");
                                                        }
                                                    }) : n(o, "event");
                                                }
                                            }) : (o.ufo = m, "" !== m && (o.gid = ""), n(o, "event"));
                                        } else console.error("请传入从后台获取的session_key");
                                    },
                                    h_SendOpenid: function(t) {
                                        if ("" !== t && t) {
                                            l = t;
                                            var o = e(c);
                                            o.tp = "openid", o.ct = "openid", n(o, "event");
                                        } else console.error("openID不能为空");
                                    }
                                }, q = 0; q < S.length; q++) !function(n, t) {
                                    Object.defineProperty(wx, n, {
                                        value: t,
                                        writable: !1,
                                        enumerable: !0,
                                        configurable: !0
                                    });
                                }(S[q], I[S[q]]);
                                try {
                                    var w = wx.getSystemInfoSync();
                                    c.br = w.brand || "", c.md = w.model, c.pr = w.pixelRatio, c.sw = w.screenWidth, 
                                    c.sh = w.screenHeight, c.ww = w.windowWidth, c.wh = w.windowHeight, c.lang = w.language, 
                                    c.wv = w.version, c.sv = w.system, c.wvv = w.platform, c.fs = w.fontSizeSetting, 
                                    c.wsdk = w.SDKVersion, c.bh = w.benchmarkLevel || "", c.bt = w.battery || "", c.wf = w.wifiSignal || "", 
                                    c.lng = "", c.lat = "", c.nt = "", c.spd = "", c.ufo = "";
                                } catch (n) {}
                            }();
                        }
                    }
                }, {
                    key: "isFromLink",
                    value: function() {
                        return this.launchInfo && this.linkSceneList.indexOf(this.launchInfo.scene) >= 0 ? (console.log("open by code"), 
                        !0) : null != this.launchInfo && null != this.launchInfo.query && null != this.launchInfo.query.customLink;
                    }
                }, {
                    key: "loadAd",
                    value: function(n) {
                        var t = s("zsAd", 6e5);
                        if (t) n(t); else if (this.inAdRequest) this.adCbList.push(n); else {
                            this.inAdRequest = !0, this.adCbList.push(n);
                            var e = this, o = this.adUrl + "appad_new/index", i = Math.round(new Date().getTime() / 1e3).toString(), a = {
                                appid: f.conf.appId,
                                timestamp: i
                            }, r = u(a), p = Object.assign({}, a, {
                                sign: r
                            });
                            d(o, p, "POST", function(t) {
                                if (e.inAdRequest = !1, !t.data) return console.log("获取导出数据失败" + JSON.stringify(t), "请检查sdk配置平台是否为wx,secret是否为指色后台配置的secret"), 
                                void n([]);
                                for (var o in t.data) {
                                    t.data[o].sort(function() {
                                        return Math.random() > .5 ? 1 : -1;
                                    });
                                }
                                var i = {
                                    more: t.data["position-1"] || [],
                                    promotion: t.data["position-2"] || [],
                                    indexFloat: t.data["position-3"] || [],
                                    banner: t.data["position-4"] || [],
                                    indexLeft: t.data["position-7"] || [],
                                    gameFloat: t.data["position-8"] || [],
                                    endPage: t.data["position-9"] || [],
                                    indexLeftFloat: t.data["position-11"] || [],
                                    backAd: t.data["position-12"] || [],
                                    iosLinkAd: t.data["position-13"] || []
                                };
                                c("zsAd", i);
                                for (var a = 0; a < e.adCbList.length; a++) l(e.adCbList[a]) && e.adCbList[a](i);
                                e.adCbList = [];
                            }, function(n) {
                                e.inAdRequest = !1, console.log("requestAdData fail");
                                for (var t = {
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
                                }, o = 0; o < e.adCbList.length; o++) l(e.adCbList[o]) && e.adCbList[o](t);
                                e.adCbList = [];
                            }, function(n) {
                                console.log("requestAdData complete");
                            });
                        }
                    }
                }, {
                    key: "navigate2Mini",
                    value: function(n) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.userId, e = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, a = n;
                        if ("undefined" == typeof wx) return l(o) && o(), void (l(i) && i());
                        this.userId || console.log("当前上报用户id不存在，请检查传入参数或是否初始化sdk");
                        var s = this;
                        a.extraData = a.extraData || {}, wx.navigateToMiniProgram({
                            appId: a.appid,
                            path: a.link_path,
                            extraData: a.extraData,
                            success: function(n) {
                                s.collect(a, t), l(e) && e();
                            },
                            fail: function(n) {
                                l(o) && o();
                            },
                            complete: function(n) {
                                l(i) && i();
                            }
                        });
                    }
                }, {
                    key: "login",
                    value: function(n, t) {
                        if ("undefined" != typeof wx) {
                            var e = this;
                            wx.login({
                                success: function(o) {
                                    o.code ? e.zsLogin(n, t, {
                                        code: o.code,
                                        appid: f.conf.appId
                                    }) : (console.log("微信登陆失败" + JSON.stringify(o)), t && t("微信登陆失败" + JSON.stringify(o)));
                                },
                                fail: function(n) {
                                    console.log("微信登陆失败" + JSON.stringify(n)), t && t("微信登陆失败" + JSON.stringify(n));
                                },
                                complete: function() {}
                            });
                        } else this.zsLogin(n, t, {
                            code: 1,
                            appid: f.conf.appId
                        });
                    }
                }, {
                    key: "loadCfg",
                    value: function(n, t) {
                        var e = null;
                        if ("undefined" != typeof wx) {
                            var o = wx.getLaunchOptionsSync();
                            (e = wx.getStorageSync("first_enter_scene")) || (e = o && o.scene || 0, wx.setStorageSync("first_enter_scene", e));
                        }
                        d(this.cfgUrl, {
                            appid: f.conf.appId,
                            scene: e
                        }, "POST", function(o) {
                            200 != o.code ? (console.log("获取开关返回失败" + o.msg), t(o.msg)) : (console.log("获取开关返回成功" + JSON.stringify(o.data) + "目前场景值为" + e), 
                            n(o.data));
                        }, function(n) {
                            console.log("获取开关请求失败" + JSON.stringify(n)), t(n);
                        }, function(n) {
                            console.log("loadCfg complete");
                        });
                    }
                } ]), e;
            }(), h = function() {
                function e() {
                    n(this, e), this.adUrl = "https://platform.qwpo2018.com/api/", this.loginUrl = "https://platform.qwpo2018.com/api/qq_login/index", 
                    this.cfgUrl = "https://platform.qwpo2018.com/api/list_config/index", this.userId = null, 
                    this.srcAppId = "", this.launchScene = "", this.cfgCbList = [], this.inCfgRequest = !1, 
                    this.adCbList = [], this.inAdRequest = !1, this.linkSceneList = [], this.launchInfo = null;
                }
                return t(e, [ {
                    key: "sendQQFrom",
                    value: function() {
                        if (null != this.userId) {
                            var n = this.adUrl + "qq_jump/index", t = {
                                appid: f.conf.appId,
                                from_id: this.srcAppId ? this.srcAppId : this.launchScene,
                                user_id: this.userId
                            };
                            d(n, t, "POST", function() {
                                console.log("上报来路统计成功");
                            }, function(n) {
                                console.log("上报来路统计失败" + JSON.stringify(n));
                            }, function(n) {
                                console.log("上报来路统计完成", JSON.stringify(n));
                            });
                        } else console.error("上报来路统计失败，用户id不存在,请检查是否初始化sdk");
                    }
                }, {
                    key: "zsLogin",
                    value: function(n, t, e) {
                        d(this.loginUrl, e, "POST", function(e) {
                            if (200 != e.code) console.log("指色sdk登录返回失败" + JSON.stringify(e.msg)), t(e.msg); else {
                                if (!e || !e.data) return t && t("返回数据异常" + JSON.stringify(e)), void console.log("登录返回数据异常" + JSON.stringify(e));
                                console.log("指色sdk登录成功,返回用户id，" + e.data.openid + "  请使用该id初始化sdk"), n(e.data.openid);
                            }
                        }, function(n) {
                            console.log("指色sdk登录请求失败" + JSON.stringify(n)), t(n);
                        }, function(n) {
                            console.log("requestAdData complete");
                        });
                    }
                }, {
                    key: "init",
                    value: function(n) {
                        if (console.log("zsAdSdk.init,用户id：" + n), this.userId = n, "undefined" == typeof qq) this.launchScene = 1038, 
                        this.srcAppId = ""; else {
                            var t = qq.getLaunchOptionsSync();
                            this.launchScene = t.scene ? t.scene : "", this.srcAppId = t.referrerInfo && t.referrerInfo.appId ? t.referrerInfo.appId : "", 
                            console.debug("来路统计" + this.srcAppId);
                        }
                        this.sendQQFrom(), this.onAppLaunch();
                    }
                }, {
                    key: "loadCfg",
                    value: function(n, t) {
                        var e = Math.round(new Date().getTime() / 1e3).toString(), o = 0;
                        if ("undefined" != typeof qq) {
                            var i = qq.getLaunchOptionsSync();
                            null != (o = qq.getStorageSync("first_enter_scene")) && "" != o || (o = i && i.scene || 0, 
                            qq.setStorageSync("first_enter_scene", o));
                        }
                        var a = {
                            apk_id: f.conf.appId,
                            timestamp: e,
                            scene: Number(o)
                        }, s = u(a), r = Object.assign({}, a, {
                            sign: s
                        });
                        d(this.cfgUrl, r, "POST", function(e) {
                            200 != e.code ? (console.log("获取开关返回失败" + e.msg), t(e.msg)) : (console.log("获取开关返回成功" + JSON.stringify(e.data)), 
                            n(e.data));
                        }, function(n) {
                            console.log("获取开关请求失败" + JSON.stringify(n)), t(n);
                        }, function(n) {
                            console.log("post loadConfig complete");
                        });
                    }
                }, {
                    key: "loadAd",
                    value: function(n) {
                        var t = s("zsAd", 1e3), e = this;
                        if (t) n(t); else if (this.inAdRequest) this.adCbList.push(n); else {
                            this.inAdRequest = !0, this.adCbList.push(n);
                            var o = e.adUrl + "apk_ad/index", i = Math.round(new Date().getTime() / 1e3).toString(), a = {
                                apk_id: f.conf.appId,
                                timestamp: i
                            }, r = u(a), p = Object.assign({}, a, {
                                sign: r
                            });
                            d(o, p, "POST", function(n) {
                                if (n.data) {
                                    e.inAdRequest = !1, n.data.sort(function() {
                                        return Math.random() > .5 ? 1 : -1;
                                    }), console.log("res.data", n.data);
                                    for (var t = 0; t < n.data.length; ++t) n.data[t].app_icon = n.data[t].link_img, 
                                    n.data[t].app_title = n.data[t].link_name, n.data[t].app_desc = n.data[t].link_name, 
                                    n.data[t].app_desc = n.data[t].link_des, n.data[t].link_id = n.data[t].id, n.data[t].app_id = n.data[t].link_appid, 
                                    n.data[t].pkg_name = n.data[t].link_page, n.data[t].path = n.data[t].link_path;
                                    var o = {
                                        promotion: n.data
                                    };
                                    c("zsAd", o);
                                    for (var i = 0; i < e.adCbList.length; i++) l(e.adCbList[i]) && e.adCbList[i](o);
                                    e.adCbList = [];
                                }
                            }, function(n) {
                                e.inAdRequest = !1, console.log("requestAdData fail");
                                for (var t = {
                                    promotion: []
                                }, o = 0; o < e.adCbList.length; o++) l(e.adCbList[o]) && e.adCbList[o](t);
                                e.adCbList = [];
                            }, function(n) {
                                console.log("requestAdData complete");
                            });
                        }
                    }
                }, {
                    key: "isFromLink",
                    value: function() {
                        return this.launchInfo && this.linkSceneList.indexOf(this.launchInfo.scene) >= 0 ? (console.log("open by code"), 
                        !0) : null != this.launchInfo && null != this.launchInfo.query && null != this.launchInfo.query.customLink;
                    }
                }, {
                    key: "login",
                    value: function(n, t) {
                        if ("undefined" == typeof qq) return console.error("未处于QQ平台"), void (t && t("QQ登陆失败"));
                        var e = this;
                        qq.login({
                            success: function(o) {
                                o.code ? e.zsLogin(n, t, {
                                    code: o.code,
                                    appid: f.conf.appId
                                }) : (console.log("QQ登陆失败" + JSON.stringify(o)), t && t("QQ登陆失败"));
                            },
                            fail: function(n) {
                                console.log("QQ登陆失败" + JSON.stringify(n)), t && t("QQ登陆失败");
                            },
                            complete: function() {}
                        });
                    }
                }, {
                    key: "onAppLaunch",
                    value: function() {
                        "undefined" == typeof qq || (this.launchInfo = qq.getLaunchOptionsSync(), console.debug("scene:" + this.launchInfo.scene), 
                        this.isFromLink() && console.debug("open by link"));
                    }
                } ]), e;
            }(), g = function() {
                function e() {
                    n(this, e), this.adUrl = "https://platform.qwpo2018.com/api/", this.loginUrl = "https://platform.qwpo2018.com/api/vivo_login/index", 
                    this.cfgUrl = "https://platform.qwpo2018.com/api/list_config/index", this.cfgCbList = [], 
                    this.inCfgRequest = !1, this.adCbList = [], this.inAdRequest = !1;
                }
                return t(e, [ {
                    key: "uploadNavigateEvent",
                    value: function(n, t) {
                        var e = this.adUrl + "apk_ad/click_log";
                        n = {
                            apk_id: f.conf.appId,
                            link_id: n.link_id,
                            user_id: t
                        };
                        d(e, n, "POST", function() {
                            console.log("uploadNavigateEvent success");
                        }, function() {
                            console.log("uploadNavigateEvent fail");
                        }, function() {
                            console.log("uploadNavigateEvent complete");
                        });
                    }
                }, {
                    key: "zsLogin",
                    value: function(n, t, e) {
                        d(this.loginUrl, e, "POST", function(e) {
                            200 != e.code ? t(e.msg) : n(e.data.user_id);
                        }, function(n) {
                            t(n);
                        }, function(n) {
                            console.log("zsLogin complete");
                        });
                    }
                }, {
                    key: "loadAd",
                    value: function(n) {
                        var t = s("zsAd", 6e5);
                        if (t) n(t); else if (this.inAdRequest) this.adCbList.push(n); else {
                            this.inAdRequest = !0, this.adCbList.push(n);
                            var e = this, o = this.adUrl + "apk_ad/index";
                            d(o, {
                                apk_id: f.conf.appId
                            }, "POST", function(n) {
                                e.inAdRequest = !1, n.data.sort(function() {
                                    return Math.random() > .5 ? 1 : -1;
                                });
                                for (var t = 0; t < n.data.length; ++t) n.data[t].app_icon = n.data[t].link_img, 
                                n.data[t].app_title = n.data[t].link_name, n.data[t].app_desc = n.data[t].link_name, 
                                n.data[t].app_desc = n.data[t].link_des, n.data[t].link_id = n.data[t].id, n.data[t].pkg_name = n.data[t].link_page, 
                                n.data[t].path = n.data[t].link_path;
                                var o = {
                                    promotion: n.data
                                };
                                c("zsAd", o);
                                for (var i = 0; i < e.adCbList.length; i++) l(e.adCbList[i]) && e.adCbList[i](o);
                                e.adCbList = [];
                            }, function(n) {
                                e.inAdRequest = !1, console.log("requestAdData fail");
                                for (var t = {
                                    promotion: []
                                }, o = 0; o < e.adCbList.length; o++) l(e.adCbList[o]) && e.adCbList[o](t);
                                e.adCbList = [];
                            }, function(n) {
                                console.log("requestAdData complete");
                            });
                        }
                    }
                }, {
                    key: "navigate2Mini",
                    value: function(n, t, e, o, i) {
                        var a = n, s = a.extraData || {};
                        s.from = f.conf.appId;
                        var r = this;
                        qg.navigateToMiniGame({
                            pkgName: a.pkg_name,
                            path: a.path,
                            extraData: s,
                            success: function() {
                                r.uploadNavigateEvent(a, t), console.log("targetMini:", a), l(e) && e();
                            },
                            fail: function() {
                                l(o) && o();
                            }
                        }), console.log("navigateData:" + JSON.stringify(s));
                    }
                }, {
                    key: "login",
                    value: function(n, t) {
                        console.log("zsSdk.login..", "vivo平台版本为：" + qg.getSystemInfoSync().platformVersionCode);
                        var e = this;
                        if (!o.qg) return console.error("当前平台并非oppo,vivo，无法登录"), void (t && t());
                        qg.getSystemInfoSync().platformVersionCode >= 1053 ? qg.login().then(function(o) {
                            if (o.data.token) {
                                var i = JSON.stringify(o.data);
                                console.log("vivo登录成功" + i), e.zsLogin(n, t, {
                                    code: o.data.token,
                                    apk_id: f.conf.appId
                                });
                            }
                        }, function(n) {
                            console.log("vivo 登录 fail", JSON.stringify(n)), t && t();
                        }) : qg.authorize({
                            type: "code",
                            success: function(o) {
                                console.log("vivo登录成功" + o), e.zsLogin(n, t, {
                                    code: o.code,
                                    apk_id: f.conf.appId
                                });
                            },
                            fail: function(n, e) {
                                console.log("vivo 登录 fail", JSON.stringify(n)), t && t();
                            }
                        });
                    }
                }, {
                    key: "loadCfg",
                    value: function(n, t) {
                        d(this.cfgUrl, {
                            apk_id: f.conf.appId
                        }, "POST", function(e) {
                            200 != e.code ? (console.log("获取开关配置返回失败" + JSON.stringify(e.msg), "请检查平台配置"), t(e.msg)) : n(e.data);
                        }, function(n) {
                            t(n);
                        }, function(n) {
                            console.log("loadCfg complete");
                        });
                    }
                } ]), e;
            }(), v = function() {
                function e() {
                    n(this, e), this.adUrl = "https://platform.qwpo2018.com/api/", this.loginUrl = "https://platform.qwpo2018.com/api/jrtt_login/index", 
                    this.cfgUrl = "https://platform.qwpo2018.com/api/list_config/index", this.userId = null, 
                    this.srcAppId = "", this.adCbList = [], this.inAdRequest = !1;
                }
                return t(e, [ {
                    key: "sendAppFrom",
                    value: function() {
                        if (f.conf.uploadLog) if (null != this.userId) {
                            if ("undefined" != typeof tt) {
                                var n = tt.getLaunchOptionsSync(), t = this.adUrl + "jrtt_jump/index", e = {
                                    appid: f.conf.appId,
                                    from_id: this.srcAppId,
                                    user_id: this.userId,
                                    from_path: n.query ? n.query : "0"
                                };
                                d(t, e, "POST", function() {}, function() {
                                    console.log('jrtt_jump/index" fail');
                                }, function() {
                                    console.log('jrtt_jump/index" complete');
                                });
                            }
                        } else console.error("userId is null,请检查是否初始化sdk");
                    }
                }, {
                    key: "zsLogin",
                    value: function(n, t, e) {
                        d(this.loginUrl, e, "POST", function(e) {
                            if (200 != e.code) console.log("头条请求登录返回失败" + e.msg), t(e.msg); else {
                                if (!e || !e.data) return t && t("返回数据异常" + JSON.stringify(e)), void console.log("登录返回数据异常" + JSON.stringify(e));
                                console.log("头条请求登录返回成功,当前用户" + e.data.openid), n(e.data.openid);
                            }
                        }, function(n) {
                            console.log("头条登录请求失败" + JSON.stringify(n)), t(n);
                        }, function(n) {
                            console.log("requestAdData complete");
                        });
                    }
                }, {
                    key: "init",
                    value: function(n) {
                        if (console.log("zsAdSdk.init，当前用户" + n), this.userId = n, "undefined" == typeof tt) this.srcAppId = "0"; else {
                            var t = tt.getLaunchOptionsSync();
                            this.launchScene = t.scene ? t.scene : "", this.srcAppId = t.referrerInfo && t.referrerInfo.appId ? t.referrerInfo.appId : "0";
                        }
                        this.sendAppFrom();
                    }
                }, {
                    key: "loadAd",
                    value: function(n) {
                        var t = s("zsAd", 1e3);
                        if (t) n(t); else if (this.inAdRequest) this.adCbList.push(n); else {
                            this.inAdRequest = !0, this.adCbList.push(n);
                            var e = this.adUrl + "apk_ad/index", o = Math.round(new Date().getTime() / 1e3).toString(), i = {
                                apk_id: f.conf.appId,
                                timestamp: o
                            }, a = u(i), p = Object.assign({}, i, {
                                sign: a
                            }), h = this;
                            d(e, p, "POST", function(n) {
                                if (h.inAdRequest = !1, n.data.sort(function() {
                                    return Math.random() > .5 ? 1 : -1;
                                }), console.log("res.data", n.data), !n.data) return console.log("获取导出数据失败" + JSON.stringify(n)), 
                                void r;
                                for (var t = 0; t < n.data.length; ++t) n.data[t].app_icon = n.data[t].link_img, 
                                n.data[t].app_title = n.data[t].link_name, n.data[t].app_desc = n.data[t].link_name, 
                                n.data[t].app_desc = n.data[t].link_des, n.data[t].link_id = n.data[t].id, n.data[t].app_id = n.data[t].link_appid, 
                                n.data[t].pkg_name = n.data[t].link_page, n.data[t].path = n.data[t].link_path;
                                var e = {
                                    promotion: n.data
                                };
                                c("zsAd", e);
                                for (var o = 0; o < h.adCbList.length; o++) l(h.adCbList[o]) && h.adCbList[o](e);
                                h.adCbList = [];
                            }, function(n) {
                                h.inAdRequest = !1, console.log("requestAdData fail");
                                for (var t = {
                                    promotion: []
                                }, e = 0; e < h.adCbList.length; e++) l(h.adCbList[e]) && h.adCbList[e](t);
                                h.adCbList = [];
                            }, function(n) {
                                console.log("requestAdData complete");
                            });
                        }
                    }
                }, {
                    key: "showMoreGamesModal",
                    value: function(n, t) {
                        if ("undefined" != typeof tt && "function" == typeof tt.showMoreGamesModal) {
                            tt.offNavigateToMiniProgram(), tt.offMoreGamesModalClose(), tt.onMoreGamesModalClose(function(n) {
                                console.log("modal closed", n);
                            }), tt.onNavigateToMiniProgram(function(e) {
                                e && (console.log("是否有跳转的小游戏", e), 0 == e.errCode ? l(n) && n() : l(t) && t());
                            });
                            var e = tt.getSystemInfoSync(), o = {};
                            o.appId = f.conf.appId, "ios" !== e.platform && tt.showMoreGamesModal({
                                appLaunchOptions: [ {
                                    extraData: o
                                } ],
                                success: function(n) {
                                    console.log("showMoreGamesModal success", n.errMsg);
                                },
                                fail: function(n) {
                                    console.log("showMoreGamesModal fail", n.errMsg);
                                }
                            });
                        }
                    }
                }, {
                    key: "login",
                    value: function(n, t) {
                        var e = this;
                        if (!o.tt) return console.error("当前平台并非tt，无法登录"), void (t && t());
                        tt.login({
                            force: !1,
                            success: function(o) {
                                console.log(o), o.code || o.anonymousCode ? e.zsLogin(n, t, {
                                    appid: f.conf.appId,
                                    code: o.code || "",
                                    anonymous_code: o.anonymousCode
                                }) : (console.log("头条登录返回失败" + JSON.stringify(o)), t && t("头条登陆失败"));
                            },
                            fail: function(n) {
                                console.log("头条登录请求失败" + JSON.stringify(n)), t && t("头条登陆失败");
                            },
                            complete: function() {}
                        });
                    }
                }, {
                    key: "loadCfg",
                    value: function(n, t) {
                        d(this.cfgUrl, {
                            apk_id: f.conf.appId
                        }, "POST", function(e) {
                            200 != e.code ? (console.log("获取开关失败,请检查平台配置" + JSON.stringify(e)), t(e.msg)) : n(e.data);
                        }, function(n) {
                            console.log("获取开关请求失败" + JSON.stringify(n)), t(n);
                        }, function(n) {
                            console.log("loadCfg complete");
                        });
                    }
                } ]), e;
            }(), m = function() {
                function e() {
                    n(this, e), this.adUrl = "https://platform.qwpo2018.com/api/", this.loginUrl = "https://platform.qwpo2018.com/api/oppo_login/index", 
                    this.cfgUrl = "https://platform.qwpo2018.com/api/list_config/index", this.userId = null, 
                    this.cfgCbList = [], this.inCfgRequest = !1, this.adCbList = [], this.inAdRequest = !1;
                }
                return t(e, [ {
                    key: "uploadNavigateEvent",
                    value: function(n, t) {
                        var e = this.adUrl + "apk_ad/click_log";
                        n = {
                            apk_id: f.conf.appId,
                            link_id: n.link_id,
                            user_id: t
                        };
                        d(e, n, "POST", function() {
                            console.log("uploadNavigateEvent success");
                        }, function() {
                            console.log("uploadNavigateEvent fail");
                        }, function() {
                            console.log("uploadNavigateEvent complete");
                        });
                    }
                }, {
                    key: "sendAppFrom",
                    value: function() {
                        if (null != this.userId) {
                            if ("undefined" != typeof qg) {
                                var n = qg.getLaunchOptionsSync(), t = n && n.referrerInfo ? n.referrerInfo.extraData : null;
                                if (t && t.from) {
                                    var e = this.adUrl + "oppo_in/index", o = {
                                        from_id: t.from,
                                        oppo_id: f.conf.appId,
                                        user_id: this.userId,
                                        from_path: t.path ? t.path : "0",
                                        from_page: n.referrerInfo.package ? n.referrerInfo.package : "0"
                                    };
                                    d(e, o, "POST", function() {
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
                }, {
                    key: "zsLogin",
                    value: function(n, t, e) {
                        d(this.loginUrl, e, "POST", function(e) {
                            200 != e.code ? (console.log("oppo登录返回失败" + e.msg), t(e.msg)) : n(e.data.user_id);
                        }, function(n) {
                            console.log("oppo登录请求失败" + JSON.stringify(n)), t(n);
                        }, function(n) {
                            console.log("requestAdData complete");
                        });
                    }
                }, {
                    key: "init",
                    value: function(n) {
                        this.userId = n, this.sendAppFrom();
                    }
                }, {
                    key: "loadAd",
                    value: function(n) {
                        var t = s("zsAd", 6e5);
                        if (t) n(t); else if (this.inAdRequest) this.adCbList.push(n); else {
                            this.inAdRequest = !0, this.adCbList.push(n);
                            var e = this, o = this.adUrl + "apk_ad/index";
                            d(o, {
                                apk_id: f.conf.appId
                            }, "POST", function(n) {
                                e.inAdRequest = !1, n.data.sort(function() {
                                    return Math.random() > .5 ? 1 : -1;
                                });
                                for (var t = 0; t < n.data.length; ++t) n.data[t].app_icon = n.data[t].link_img, 
                                n.data[t].app_title = n.data[t].link_name, n.data[t].app_desc = n.data[t].link_name, 
                                n.data[t].app_desc = n.data[t].link_des, n.data[t].link_id = n.data[t].id, n.data[t].pkg_name = n.data[t].link_page, 
                                n.data[t].path = n.data[t].link_path;
                                var o = {
                                    promotion: n.data
                                };
                                c("zsAd", o);
                                for (var i = 0; i < e.adCbList.length; i++) l(e.adCbList[i]) && e.adCbList[i](o);
                                e.adCbList = [];
                            }, function(n) {
                                e.inAdRequest = !1, console.log("requestAdData fail");
                                for (var t = {
                                    promotion: []
                                }, o = 0; o < e.adCbList.length; o++) l(e.adCbList[o]) && e.adCbList[o](t);
                                e.adCbList = [];
                            }, function(n) {
                                console.log("requestAdData complete");
                            });
                        }
                    }
                }, {
                    key: "navigate2Mini",
                    value: function(n, t, e, o, i) {
                        var a = n, s = a.extraData || {};
                        s.from = f.conf.appId;
                        var r = this;
                        qg.navigateToMiniGame({
                            pkgName: a.pkg_name,
                            path: a.path,
                            extraData: s,
                            success: function() {
                                r.uploadNavigateEvent(a, t), console.log("targetMini:", a), l(e) && e();
                            },
                            fail: function() {
                                l(o) && o();
                            }
                        }), console.log("navigateData:" + JSON.stringify(s));
                    }
                }, {
                    key: "login",
                    value: function(n, t) {
                        var e = this;
                        if (!o.qg) return console.error("当前平台并非oppo,vivo，无法登录"), void (t && t());
                        qg.login({
                            success: function(o) {
                                0 == o.code ? e.zsLogin(n, t, {
                                    code: o.data.token,
                                    apk_id: f.conf.appId
                                }) : (console.log("oppo登录失败" + JSON.stringify(o)), t && t("oppo登陆失败"));
                            },
                            fail: function(n) {
                                console.log("oppo登录请求失败" + JSON.stringify(n)), t && t("oppo登陆失败");
                            },
                            complete: function() {}
                        });
                    }
                }, {
                    key: "loadCfg",
                    value: function(n, t) {
                        d(this.cfgUrl, {
                            apk_id: f.conf.appId
                        }, "POST", function(e) {
                            200 != e.code ? (console.log("oppo开关返回失败" + e.msg), t(e.msg)) : n(e.data);
                        }, function(n) {
                            console.log("oppo开关请求失败" + JSON, stringify(n)), t(n);
                        }, function(n) {
                            console.log("loadCfg complete");
                        });
                    }
                }, {
                    key: "isExportValid",
                    value: function() {
                        return !0;
                    }
                }, {
                    key: "isFromLink",
                    value: function() {
                        return !1;
                    }
                } ]), e;
            }(), _ = function() {
                function e() {
                    n(this, e), this.adUrl = "https://platform.qwpo2018.com/api/", this.loginUrl = "https://platform.qwpo2018.com/api/bd_login/index", 
                    this.cfgUrl = "https://platform.qwpo2018.com/api/list_config/index", this.userId = null, 
                    this.srcAppId = "", this.adCbList = [], this.inAdRequest = !1;
                }
                return t(e, [ {
                    key: "sendAppFrom",
                    value: function() {
                        if (f.conf.uploadLog) {
                            if (null != this.userId) {
                                if ("undefined" != typeof swan) {
                                    var n = swan.getLaunchOptionsSync(), t = this.adUrl + "bd_jump/index", e = {
                                        appid: f.conf.appId,
                                        from_id: this.srcAppId,
                                        user_id: this.userId,
                                        from_path: n.query ? n.query : "0"
                                    };
                                    d(t, e, "POST", function() {}, function() {
                                        console.log('bd_jump/index" fail');
                                    }, function() {
                                        console.log('bd_jump/index" complete');
                                    });
                                }
                            } else console.error("userId is null");
                        }
                    }
                }, {
                    key: "zsLogin",
                    value: function(n, t, e) {
                        d(this.loginUrl, e, "POST", function(e) {
                            if (200 != e.code) t && t(e.msg); else {
                                if (!e || !e.data) return t && t("返回数据异常" + JSON.stringify(e)), void console.log("登录返回数据异常" + JSON.stringify(e));
                                n(e.data.openid);
                            }
                        }, function(n) {
                            t(n);
                        }, function(n) {
                            console.log("requestAdData complete");
                        });
                    }
                }, {
                    key: "init",
                    value: function(n) {
                        if (console.log("zsAdSdk.init"), this.userId = n, "undefined" == typeof swan) this.srcAppId = "0"; else {
                            var t = swan.getLaunchOptionsSync();
                            this.launchScene = t.scene ? t.scene : "", this.srcAppId = t.referrerInfo && t.referrerInfo.appId ? t.referrerInfo.appId : "0";
                        }
                        this.sendAppFrom();
                    }
                }, {
                    key: "loadAd",
                    value: function(n) {
                        var t = s("zsAd", 1e3);
                        if (t) n(t); else if (this.inAdRequest) this.adCbList.push(n); else {
                            this.inAdRequest = !0, this.adCbList.push(n);
                            var e = this, o = this.adUrl + "apk_ad/index", i = Math.round(new Date().getTime() / 1e3).toString(), a = {
                                apk_id: f.conf.appId,
                                timestamp: i
                            }, r = u(a), p = Object.assign({}, a, {
                                sign: r
                            });
                            d(o, p, "POST", function(n) {
                                e.inAdRequest = !1, n.data.sort(function() {
                                    return Math.random() > .5 ? 1 : -1;
                                }), console.log("res.data", n.data);
                                for (var t = 0; t < n.data.length; ++t) n.data[t].app_icon = n.data[t].link_img, 
                                n.data[t].app_title = n.data[t].link_name, n.data[t].app_desc = n.data[t].link_name, 
                                n.data[t].app_desc = n.data[t].link_des, n.data[t].link_id = n.data[t].id, n.data[t].app_id = n.data[t].link_appid, 
                                n.data[t].pkg_name = n.data[t].link_page, n.data[t].path = n.data[t].link_path;
                                var o = {
                                    promotion: n.data
                                };
                                c("zsAd", o);
                                for (var i = 0; i < e.adCbList.length; i++) l(e.adCbList[i]) && e.adCbList[i](o);
                                e.adCbList = [];
                            }, function(n) {
                                e.inAdRequest = !1, console.log("requestAdData fail");
                                for (var t = {
                                    promotion: []
                                }, o = 0; o < e.adCbList.length; o++) l(e.adCbList[o]) && e.adCbList[o](t);
                                e.adCbList = [];
                            }, function(n) {
                                console.log("requestAdData complete");
                            });
                        }
                    }
                }, {
                    key: "login",
                    value: function(n, t) {
                        var e = this;
                        if (!o.swan) return console.error("当前平台并非百度，无法登录"), void (t && t());
                        swan.login({
                            success: function(o) {
                                console.log(o), o.code ? e.zsLogin(n, t, {
                                    appid: f.conf.appId,
                                    code: o.code
                                }) : t && t("百度登陆失败");
                            },
                            fail: function() {
                                t && t("百度登陆失败");
                            },
                            complete: function() {}
                        });
                    }
                }, {
                    key: "loadCfg",
                    value: function(n, t) {
                        d(this.cfgUrl, {
                            apk_id: f.conf.appId
                        }, "POST", function(e) {
                            200 != e.code ? t(e.msg) : n(e.data);
                        }, function(n) {
                            t(n);
                        }, function(n) {
                            console.log("loadCfg complete");
                        });
                    }
                } ]), e;
            }();
        }(o.zs = o.zs || {}), zs.sdk.initSdkByConf();
        var e = {}, i = function(n, t) {
            e[n] = t;
        }, a = function(n) {
            return e[n];
        }, s = function(n, t) {
            if (t) {
                var e = a(n + "_time");
                return null == e || Date.now() - Number(e) < t ? a(n) : null;
            }
            return a(n);
        }, c = function(n, t) {
            i(n, t), i(n + "_time", Date.now());
        }, d = function(n, t, e, o, i) {
            var a = new XMLHttpRequest();
            a.onreadystatechange = function() {
                if (4 == a.readyState) {
                    var n = a.responseText;
                    if (a.status >= 200 && a.status < 400) {
                        var t = {};
                        try {
                            t = JSON.parse(n);
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            console.error("json parse error ", n), i(t);
                        }
                        o && o(t);
                    } else console.error("error ", n), i(n);
                }
            }, a.timeout = 3e3, a.ontimeout = function(n) {
                console.error("error ", n), i(n);
            }, a.open(e, n, !0), "POST" == e ? (a.open("POST", n), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
            a.send(function(n) {
                var t = [];
                for (var e in n) t.push(e + "=" + n[e]);
                return t.join("&");
            }(t))) : a.send();
        }, l = function(n) {
            return "function" == typeof n;
        }, u = function(n, t) {
            t = t || !0;
            for (var e = Object.keys(n).sort(), o = "", i = 0; i < e.length; i++) o += e[i] + ":" + n[e[i]];
            t && (o += zs.sdk.conf.secret);
            var a = function(n) {
                var t, e, o, i, a, s, r, c, d, l = function(n, t) {
                    return n << t | n >>> 32 - t;
                }, u = function(n, t) {
                    var e, o, i, a, s;
                    return i = 2147483648 & n, a = 2147483648 & t, s = (1073741823 & n) + (1073741823 & t), 
                    (e = 1073741824 & n) & (o = 1073741824 & t) ? 2147483648 ^ s ^ i ^ a : e | o ? 1073741824 & s ? 3221225472 ^ s ^ i ^ a : 1073741824 ^ s ^ i ^ a : s ^ i ^ a;
                }, f = function(n, t, e, o, i, a, s) {
                    return n = u(n, u(u(function(n, t, e) {
                        return n & t | ~n & e;
                    }(t, e, o), i), s)), u(l(n, a), t);
                }, p = function(n, t, e, o, i, a, s) {
                    return n = u(n, u(u(function(n, t, e) {
                        return n & e | t & ~e;
                    }(t, e, o), i), s)), u(l(n, a), t);
                }, h = function(n, t, e, o, i, a, s) {
                    return n = u(n, u(u(function(n, t, e) {
                        return n ^ t ^ e;
                    }(t, e, o), i), s)), u(l(n, a), t);
                }, g = function(n, t, e, o, i, a, s) {
                    return n = u(n, u(u(function(n, t, e) {
                        return t ^ (n | ~e);
                    }(t, e, o), i), s)), u(l(n, a), t);
                }, v = function(n) {
                    var t, e = "", o = "";
                    for (t = 0; t <= 3; t++) e += (o = "0" + (n >>> 8 * t & 255).toString(16)).substr(o.length - 2, 2);
                    return e;
                }, m = Array();
                for (m = function(n) {
                    for (var t, e = n.length, o = e + 8, i = 16 * ((o - o % 64) / 64 + 1), a = Array(i - 1), s = 0, r = 0; r < e; ) s = r % 4 * 8, 
                    a[t = (r - r % 4) / 4] = a[t] | n.charCodeAt(r) << s, r++;
                    return s = r % 4 * 8, a[t = (r - r % 4) / 4] = a[t] | 128 << s, a[i - 2] = e << 3, 
                    a[i - 1] = e >>> 29, a;
                }(n = function(n) {
                    n = n.replace(/\x0d\x0a/g, "\n");
                    for (var t = "", e = 0; e < n.length; e++) {
                        var o = n.charCodeAt(e);
                        o < 128 ? t += String.fromCharCode(o) : o > 127 && o < 2048 ? (t += String.fromCharCode(o >> 6 | 192), 
                        t += String.fromCharCode(63 & o | 128)) : (t += String.fromCharCode(o >> 12 | 224), 
                        t += String.fromCharCode(o >> 6 & 63 | 128), t += String.fromCharCode(63 & o | 128));
                    }
                    return t;
                }(n)), s = 1732584193, r = 4023233417, c = 2562383102, d = 271733878, t = 0; t < m.length; t += 16) e = s, 
                o = r, i = c, a = d, s = f(s, r, c, d, m[t + 0], 7, 3614090360), d = f(d, s, r, c, m[t + 1], 12, 3905402710), 
                c = f(c, d, s, r, m[t + 2], 17, 606105819), r = f(r, c, d, s, m[t + 3], 22, 3250441966), 
                s = f(s, r, c, d, m[t + 4], 7, 4118548399), d = f(d, s, r, c, m[t + 5], 12, 1200080426), 
                c = f(c, d, s, r, m[t + 6], 17, 2821735955), r = f(r, c, d, s, m[t + 7], 22, 4249261313), 
                s = f(s, r, c, d, m[t + 8], 7, 1770035416), d = f(d, s, r, c, m[t + 9], 12, 2336552879), 
                c = f(c, d, s, r, m[t + 10], 17, 4294925233), r = f(r, c, d, s, m[t + 11], 22, 2304563134), 
                s = f(s, r, c, d, m[t + 12], 7, 1804603682), d = f(d, s, r, c, m[t + 13], 12, 4254626195), 
                c = f(c, d, s, r, m[t + 14], 17, 2792965006), s = p(s, r = f(r, c, d, s, m[t + 15], 22, 1236535329), c, d, m[t + 1], 5, 4129170786), 
                d = p(d, s, r, c, m[t + 6], 9, 3225465664), c = p(c, d, s, r, m[t + 11], 14, 643717713), 
                r = p(r, c, d, s, m[t + 0], 20, 3921069994), s = p(s, r, c, d, m[t + 5], 5, 3593408605), 
                d = p(d, s, r, c, m[t + 10], 9, 38016083), c = p(c, d, s, r, m[t + 15], 14, 3634488961), 
                r = p(r, c, d, s, m[t + 4], 20, 3889429448), s = p(s, r, c, d, m[t + 9], 5, 568446438), 
                d = p(d, s, r, c, m[t + 14], 9, 3275163606), c = p(c, d, s, r, m[t + 3], 14, 4107603335), 
                r = p(r, c, d, s, m[t + 8], 20, 1163531501), s = p(s, r, c, d, m[t + 13], 5, 2850285829), 
                d = p(d, s, r, c, m[t + 2], 9, 4243563512), c = p(c, d, s, r, m[t + 7], 14, 1735328473), 
                s = h(s, r = p(r, c, d, s, m[t + 12], 20, 2368359562), c, d, m[t + 5], 4, 4294588738), 
                d = h(d, s, r, c, m[t + 8], 11, 2272392833), c = h(c, d, s, r, m[t + 11], 16, 1839030562), 
                r = h(r, c, d, s, m[t + 14], 23, 4259657740), s = h(s, r, c, d, m[t + 1], 4, 2763975236), 
                d = h(d, s, r, c, m[t + 4], 11, 1272893353), c = h(c, d, s, r, m[t + 7], 16, 4139469664), 
                r = h(r, c, d, s, m[t + 10], 23, 3200236656), s = h(s, r, c, d, m[t + 13], 4, 681279174), 
                d = h(d, s, r, c, m[t + 0], 11, 3936430074), c = h(c, d, s, r, m[t + 3], 16, 3572445317), 
                r = h(r, c, d, s, m[t + 6], 23, 76029189), s = h(s, r, c, d, m[t + 9], 4, 3654602809), 
                d = h(d, s, r, c, m[t + 12], 11, 3873151461), c = h(c, d, s, r, m[t + 15], 16, 530742520), 
                s = g(s, r = h(r, c, d, s, m[t + 2], 23, 3299628645), c, d, m[t + 0], 6, 4096336452), 
                d = g(d, s, r, c, m[t + 7], 10, 1126891415), c = g(c, d, s, r, m[t + 14], 15, 2878612391), 
                r = g(r, c, d, s, m[t + 5], 21, 4237533241), s = g(s, r, c, d, m[t + 12], 6, 1700485571), 
                d = g(d, s, r, c, m[t + 3], 10, 2399980690), c = g(c, d, s, r, m[t + 10], 15, 4293915773), 
                r = g(r, c, d, s, m[t + 1], 21, 2240044497), s = g(s, r, c, d, m[t + 8], 6, 1873313359), 
                d = g(d, s, r, c, m[t + 15], 10, 4264355552), c = g(c, d, s, r, m[t + 6], 15, 2734768916), 
                r = g(r, c, d, s, m[t + 13], 21, 1309151649), s = g(s, r, c, d, m[t + 4], 6, 4149444226), 
                d = g(d, s, r, c, m[t + 11], 10, 3174756917), c = g(c, d, s, r, m[t + 2], 15, 718787259), 
                r = g(r, c, d, s, m[t + 9], 21, 3951481745), s = u(s, e), r = u(r, o), c = u(c, i), 
                d = u(d, a);
                return (v(s) + v(r) + v(c) + v(d)).toLowerCase();
            }(o);
            return a = a.toLowerCase();
        };
        d("https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/cp/cpDomainName/domain.json", null, "get", function(n) {
            n && n.domain && (console.log("获取到网上广告域名" + n.domain), zs.sdk.domain = n.domain);
        }, function(n) {
            console.log("请求网络域名失败" + JSON.stringify(n));
        });
    }).call(e);
}(function() {
    return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0 !== this ? this : {};
}.call(void 0));