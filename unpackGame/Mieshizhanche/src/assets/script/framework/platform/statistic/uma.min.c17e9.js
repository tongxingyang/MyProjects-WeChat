var e = require("../../../../../../@babel/runtime/helpers/typeof");

!function(t) {
    var n = t;
    (function() {
        if (console.log("初始化umeng"), void 0 !== n.qg) {
            var t = function() {}, i = function() {
                return qg;
            }, r = function(e, t) {
                function n() {
                    this.constructor = e;
                }
                N(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
                new n());
            }, o = function(e, t) {
                var n = s(e, t);
                return e && e.id_tracking && (n[t.id_tracking || "id_tracking"] = s(e.id_tracking, X)), 
                n;
            }, s = function(e, t) {
                var n = {};
                for (var i in e) t[i] ? n[t[i]] = e[i] : n[i] = e[i];
                return n;
            }, a = function(e, t) {
                var n = {};
                if (e) for (var i in e) e[i] && (n[t[i]] = e[i]);
                return n;
            }, u = function() {
                return B;
            }, c = function(e, t, n, i) {
                H.instance().setIdType(R().getIdType()), H.instance().setIdTracking(R().getIdTracking());
                var r = R().getUserId();
                r && e.analytics && (e.analytics.active_user = {
                    puid: r,
                    provider: R().getProvider()
                });
                var s = b.clone(H.instance().get());
                e.header = b.assign(s, e.header, {
                    ts: Date.now(),
                    testToken: u(),
                    traceId: b.getRandomStr(10) + Date.now() + b.getRandomStr(9)
                });
                var c = function(e) {
                    return {
                        h: o(e.header, J),
                        a: a(e.analytics, Y)
                    };
                }(e), f = L(c), p = {
                    url: A.ENDPOINT + A.LOG_URL,
                    method: "POST",
                    data: oe(f),
                    success: function(i) {
                        var r = i.code || i.status || i.statusCode;
                        200 === r || 413 === r ? (m().i("数据发送成功: ", e, f), function(e) {
                            e && (H.instance().setItem(A.IMPRINT, e), ae.set(e), ae.save(), m().v("imprint: ", ae.getImpObj()), 
                            ae.getItem("ttn_invalid") && (B = ""));
                        }((i.data || {}).imprint), "function" == typeof t && t(i)) : (m().w("数据发送失败: ", f), 
                        "function" == typeof n && n());
                    },
                    fail: function(e) {
                        m().w("超时: ", f), "function" == typeof n && n();
                    },
                    complete: function() {
                        "function" == typeof i && i();
                    }
                };
                T.request(b.assign(p, {
                    header: {
                        "content-type": "text/plain",
                        "Msg-Type": T.getSdkType() + "/json"
                    }
                }));
            }, f = function(e) {
                var t = e, n = [];
                this.enqueue = function(e) {
                    "number" == typeof t && this.size() >= t && this.dequeue(), n.push(e);
                }, this.dequeue = function() {
                    return n.shift();
                }, this.front = function() {
                    return n[0];
                }, this.isEmpty = function() {
                    return 0 === n.length;
                }, this.clear = function() {
                    n.length = 0;
                }, this.size = function() {
                    return n.length;
                }, this.items = function() {
                    return n;
                }, this.print = function() {
                    console.log(n.toString());
                };
            }, p = function(t, n) {
                this.id = t, this.ts = Date.now();
                var i = e(n);
                if ("string" === i && n) this[t] = n; else if ("object" === i) for (var r in n) ({}).hasOwnProperty.call(n, r) && (this[r] = n[r]);
            }, l = function() {
                var t = !1, n = !1, i = 0;
                this.init = function(e) {
                    m().v("sdk version: " + A.IMPL_VERSION), t ? m().v("Lib重复实例化") : j().load(function() {
                        m().v("cache初始化成功: ", j().getAll()), R().setUseOpenid && R().setUseOpenid(S().useOpenid()), 
                        R().init(function() {
                            H.instance().init(), m().v("Header初始化成功");
                        }), t = !0, "function" == typeof e && e(), m().tip("SDK集成成功");
                    });
                }, this.resume = function(e) {
                    var i;
                    t && !n && (m().v("showOptions: ", e), n = !0, S().enableVerify() && e && e.query && (i = e.query._ttn, 
                    B = i || B), this._resume(e));
                }, this._resume = function(e) {
                    ue().load();
                    var t = K().resume(e), n = K().getCurrentSessionId();
                    V().setSessionId(n), t && ue().add(q, {}, function() {
                        R().setUseOpenid && R().setUseOpenid(S().useOpenid()), S().useOpenid() && S().autoGetOpenid() && !R().getId() ? (m().v("get id async"), 
                        function e(t, n) {
                            R().getId() || t <= 0 || R().getOpenIdAsync(S().appKey(), function(i) {
                                i ? (m().v("获取id成功"), ue().send()) : (m().v("获取openid失败,启动重试,剩余可用次数", t - 1), setTimeout(function() {
                                    e(t - 1, n);
                                }, n));
                            });
                        }(10, 3e3)) : (m().v("session auto send"), ue().send());
                    });
                }, this.pause = function(e) {
                    t && (n = !1, i = 0, K().pause(), S().uploadUserInfo() && ce().update(), ue().send(x, {}, function() {
                        ue().save(), j().save(), m().v("cache save success"), "function" == typeof e && e();
                    }));
                }, this.setOpenid = function(e) {
                    m().v("setOpenId: %s", e), R().setOpenid(e), ue().send();
                }, this.setUnionid = function(e) {
                    m().v("setUnionid: %s", e), R().setUnionid(e);
                }, this.setUserid = function(e, t) {
                    m().v("setUserid: %s", e, t), R().setUserid(e, t);
                }, this.setUserInfo = function(e) {
                    m().v("setUserInfo: %s", e), ce().setUserInfo(e);
                }, this.setAnonymousid = function(e) {
                    m().v("setAnonymousId: %s", e), R().setAnonymousid(e), ue().send();
                }, this.setAppVersion = function(e) {
                    e && "string" != typeof e ? m().w("setAppVersion方法只接受字符串类型参数") : H.instance().setAppVersion(e);
                }, this.setAlipayUserid = function(e) {
                    e && "string" != typeof e ? m().w("setAlipayUserid方法只接受字符串类型参数") : (m().v("setAlipayUserid: %s", e), 
                    R().setAlipayUserid(e));
                }, this.setDeviceId = function(e) {
                    if ("string" == typeof e) return R().setDeviceId(e), e;
                }, this.setSuperProperty = function(e) {
                    if (e && "string" != typeof e) m().w("超级属性只支持字符串类型"); else {
                        var t = this;
                        H.instance().getSuperProperty() !== e && (H.instance().setSuperProperty(e), t.pause(function() {
                            t.resume();
                        }));
                    }
                }, this.trackEvent = function(n, r) {
                    if (t && (m().v("event: ", n, r), function(t, n) {
                        if (!t || "string" != typeof t) return m().e('please check trackEvent id. id should be "string" and not null'), 
                        !1;
                        var i = [ "id", "ts", "du" ], r = {};
                        if (i.forEach(function(e) {
                            r[e] = 1;
                        }), r[t]) return m().e("eventId不能与以下保留字冲突: " + i.join(",")), !1;
                        if (t.length > A.MAX_EVENTID_LENGTH) return m().e("The maximum length of event id shall not exceed " + A.MAX_EVENTID_LENGTH), 
                        !1;
                        if (n && ("object" != e(n) || Array.isArray(n)) && "string" != typeof n) return m().e("please check trackEvent properties. properties should be string or object(not include Array)"), 
                        !1;
                        if ("object" == e(n)) {
                            var o = 0;
                            for (var s in n) if ({}.hasOwnProperty.call(n, s)) {
                                if (s.length > A.MAX_PROPERTY_KEY_LENGTH) return m().e("The maximum length of property key shall not exceed " + A.MAX_PROPERTY_KEY_LENGTH), 
                                !1;
                                if (o >= A.MAX_PROPERTY_KEYS_COUNT) return m().e("The maximum count of properties shall not exceed " + A.MAX_PROPERTY_KEYS_COUNT), 
                                !1;
                                if (r[s]) return m().e("属性中的key不能与以下保留字冲突: " + i.join(",")), !1;
                                o += 1;
                            }
                        }
                        return !0;
                    }(n, r))) {
                        var o = new p(n, r);
                        V().addEvent(o);
                        var s = !!u(), a = s ? 0 : A.EVENT_SEND_DEFAULT_INTERVAL, c = Date.now();
                        (function(e, t) {
                            return "number" != typeof i || "number" != typeof t || i <= 0 || e - i > t;
                        })(c, a) && (i = c, ue().send(G, {
                            noCache: s
                        }, function() {}));
                    }
                }, this.trackShare = function(e) {
                    if (t) try {
                        T.getSdkType().indexOf("game") > -1 ? (e = C().add(e, !0), m().v("shareQuery: ", e)) : (e = C().add(e, !1), 
                        m().v("sharePath: ", e.path));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        m().v("shareAppMessage: ", e);
                    }
                    return e;
                }, this.trackPageStart = function(e) {
                    t && U().addPageStart(e);
                }, this.trackPageEnd = function(e) {
                    t && U().addPageEnd(e);
                }, this.onShareAppMessage = function(e) {
                    var t = this;
                    T.onShareAppMessage(function() {
                        return t.trackShare(e());
                    });
                }, this.shareAppMessage = function(e) {
                    this.trackShare(e), T.shareAppMessage(e);
                };
            }, d = function() {}, h = function(e) {
                m().v("开始构建 fetch body"), T.getSystemInfo(function(t) {
                    T.getNetworkInfo(function(n) {
                        var i = (n = n || {}).networkType;
                        i = i === ge ? "unknown" : i.toUpperCase(), ye.access = i, function(e, t) {
                            var n = e.brand || "";
                            if (ye.deviceType = "Phone", ye.sdkVersion = he, ye.appkey = S().appKey(), ye.sdkType = T.getSdkType(), 
                            ye.umid = R().getId(), e) {
                                ye.language = e.language || "", ye.os = e.OS, ye.osVersion = e.OSVersion, ye.deviceName = e.deviceName, 
                                ye.platformVersion = e.platformVersion, ye.platformSdkVersion = e.platformSDKVersion, 
                                ye.deviceBrand = n;
                                var i = e.resolution.split("*");
                                ve.isArray(i) && (ye.resolutionHeight = Number(i[0]), ye.resolutionWidth = Number(i[1]));
                            }
                            !function(e) {
                                e && (ye.installTime = e.install_datetime && Date.parse(e.install_datetime), ye.scene = e.install_scene, 
                                ye.channel = e.install_channel, ye.campaign = e.install_campaign);
                            }(ae.getImpObj()), t && t(ye);
                        }(t, e);
                    });
                });
            }, g = function(e) {
                e && ve.each(e, function(e) {
                    me[e.k] = e;
                });
            }, v = function() {
                var e = this;
                this.STORAGE_NAME = null, I.once(I.messageType.CONFIG_LOADED, function(t) {
                    m().v("云配初始化开始..."), e.init(t);
                });
            }, _ = function(t) {
                var n = {};
                for (var i in t) {
                    var r = t[i];
                    if ("object" == e(r)) for (var o in r) n[i + "." + o] = r[o]; else n[i] = r;
                }
                return n;
            }, y = "[UMENG] -- ", m = function() {
                var e = null, t = !1;
                function n() {
                    this.setDebug = function(e) {
                        t = e;
                    }, this.d = function() {
                        if (t) try {
                            "string" == typeof arguments[0] && (arguments[0] = y + arguments[0]), console.log.apply(console, arguments);
                        } catch (e) {}
                    }, this.i = function() {
                        try {
                            if (t) try {
                                "string" == typeof arguments[0] && (arguments[0] = y + arguments[0]), console.log.apply(console, arguments);
                            } catch (e) {}
                        } catch (e) {}
                    }, this.e = function() {
                        if (t) try {
                            "string" == typeof arguments[0] && (arguments[0] = y + arguments[0]), console.log.apply(console, arguments);
                        } catch (e) {}
                    }, this.w = function() {
                        if (t) try {
                            "string" == typeof arguments[0] && (arguments[0] = y + arguments[0]), console.log.apply(console, arguments);
                        } catch (e) {}
                    }, this.v = function() {
                        if (t) try {
                            "string" == typeof arguments[0] && (arguments[0] = y + arguments[0]), console.log.apply(console, arguments);
                        } catch (e) {}
                    }, this.t = function() {
                        if (t) try {
                            console.log.apply(console, arguments);
                        } catch (e) {}
                    }, this.tip = function() {
                        try {
                            "string" == typeof arguments[0] && (arguments[0] = y + arguments[0]), console.log.apply(console, arguments);
                        } catch (e) {}
                    }, this.tip_w = function(e) {
                        try {
                            console.log("%c [UMENG] -- " + e, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;");
                        } catch (e) {}
                    }, this.err = function() {
                        try {
                            "string" == typeof arguments[0] && (arguments[0] = y + arguments[0]), console.log.apply(console, arguments);
                        } catch (e) {}
                    }, this.repeat = function(e) {
                        for (var t = e; t.length < 86; ) t += e;
                        return t;
                    };
                }
                return function() {
                    return null === e && (e = new n()), e;
                };
            }(), S = function() {
                var e = null;
                function t() {
                    var e = {};
                    this.useOpenid = function() {
                        return !!e.useOpenid;
                    }, this.useSwanid = function() {
                        return !!e.useSwanid;
                    }, this.autoGetOpenid = function() {
                        return !!e.autoGetOpenid;
                    }, this.appKey = function() {
                        return e.appKey;
                    }, this.uploadUserInfo = function() {
                        return e.uploadUserInfo;
                    }, this.enableVerify = function() {
                        return e.enableVerify;
                    }, this.set = function(t) {
                        e = t;
                    }, this.get = function() {
                        return e;
                    }, this.setItem = function(t, n) {
                        e[t] = n;
                    }, this.getItem = function(t) {
                        return e[t];
                    };
                }
                return function() {
                    return e || (e = new t()), e;
                };
            }();
            t.prototype = {
                on: function(e, t, n) {
                    var i = this.e || (this.e = {});
                    return (i[e] || (i[e] = [])).push({
                        fn: t,
                        ctx: n
                    }), this;
                },
                once: function(e, t, n) {
                    var i = this;
                    function r() {
                        i.off(e, r), t.apply(n, arguments);
                    }
                    return r._ = t, this.on(e, r, n);
                },
                emit: function(e) {
                    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, r = n.length; i < r; i++) n[i].fn.apply(n[i].ctx, t);
                    return this;
                },
                off: function(e, t) {
                    var n = this.e || (this.e = {}), i = n[e], r = [];
                    if (i && t) for (var o = 0, s = i.length; o < s; o++) i[o].fn !== t && i[o].fn._ !== t && r.push(i[o]);
                    return r.length ? n[e] = r : delete n[e], this;
                }
            };
            var I = new t();
            I.messageType = {
                CONFIG_LOADED: 0,
                UMA_LIB_INITED: 1
            };
            var O, E = i(), T = new (function() {
                function t() {}
                return t.prototype.setStorage = function(e, t, n) {
                    E.setStorage ? E.setStorage({
                        key: e,
                        value: t,
                        success: function() {
                            "function" == typeof n && n(!0);
                        },
                        fail: function() {
                            "function" == typeof n && n(!1);
                        }
                    }) : (localStorage.setItem(e, t), "function" == typeof n && n(!0));
                }, t.prototype.getStorage = function(e, t) {
                    if (E.getStorage) E.getStorage({
                        key: e,
                        success: function(e) {
                            "function" == typeof t && t(e);
                        },
                        fail: function(n, i) {
                            m().w(e + "code = : " + i), "function" == typeof t && t();
                        }
                    }); else if (localStorage) {
                        var n = localStorage.getItem(e);
                        "function" == typeof t && t(n);
                    }
                }, t.prototype.removeStorage = function(e, t) {
                    E.deleteStorage ? E.deleteStorage({
                        key: e,
                        success: function() {
                            "function" == typeof t && t(!0);
                        },
                        fail: function() {
                            "function" == typeof t && t(!1);
                        }
                    }) : localStorage && (localStorage.removeItem(e), "function" == typeof t && t(!0));
                }, t.prototype.getSystemInfo = function(e) {
                    E.getSystemInfo({
                        success: function(t) {
                            var n = {
                                model: t.model,
                                brand: t.brand,
                                screenWidth: t.screenWidth,
                                screenHeight: t.screenHeight,
                                platform: t.osType,
                                pixelRatio: t.pixelRatio,
                                platformVersion: t.platformVersionCode,
                                language: t.language,
                                deviceName: t.model,
                                OSVersion: t.osVersionName,
                                resolution: "",
                                statusBarHeight: t.statusBarHeight
                            };
                            if (t.system) {
                                var i = t.system.split(" ");
                                Array.isArray(i) && (!n.platform && (n.platform = i[0]), !n.OSVersion && (n.OSVersion = i[1]));
                            }
                            var r = Math.round(t.screenWidth * t.pixelRatio), o = Math.round(t.screenHeight * t.pixelRatio);
                            n.resolution = r > o ? r + "*" + o : o + "*" + r, "function" == typeof e && e(n);
                        },
                        fail: function() {
                            "function" == typeof e && e();
                        }
                    });
                }, t.prototype.getDeviceInfo = function(e) {
                    "function" == typeof e && e("");
                }, t.prototype.getNetworkInfo = function(e) {
                    E.getNetworkType({
                        success: function(t) {
                            "function" == typeof e && e({
                                networkAvailable: "none" !== t.networkType,
                                networkType: t.networkType
                            });
                        },
                        fail: function() {
                            "function" == typeof e && e();
                        }
                    });
                }, t.prototype.request = function(t) {
                    var n = t.success, i = t.fail, r = !1, o = null;
                    t.success = function(e) {
                        r || (o && clearTimeout(o), "function" == typeof n && n(e));
                    }, t.fail = function() {
                        r || (o && clearTimeout(o), "function" == typeof i && i(!1));
                    }, E.request ? E.request(t) : XMLHttpRequest && function(t, n) {
                        void 0 === n && (n = !0), (t = t || {}).method = t.method || "GET", t.url = t.url || "", 
                        t.success = t.success || function() {}, t.fail = t.fail || function() {};
                        var i, r, o = new XMLHttpRequest(), s = [];
                        if ("object" == e(t.data)) {
                            for (var a in t.data) s.push(a + "=" + encodeURIComponent(t.data[a]));
                            i = JSON.stringify(t.data || {}), r = s.join("&");
                        } else "string" == typeof t.data && (i = t.data, r = t.data);
                        if ("POST" === t.method ? o.open(t.method, t.url, n) : o.open(t.method, t.url + "?" + r || "", n), 
                        t.header && "object" == e(t.header)) {
                            for (var u in t.header) o.setRequestHeader(u, t.header[u]);
                            t.header["content-type"] || t.header["Content-Type"] || o.setRequestHeader("content-type", "text/plain");
                        }
                        n && (o.timeout = t.timeout || 3e4), o.onreadystatechange = function() {
                            if (4 == o.readyState && 200 == o.status) {
                                var e = {};
                                try {
                                    e = JSON.parse(o.responseText);
                                } catch (e) {}
                                t.success({
                                    data: e,
                                    status: o.status
                                });
                            } else 4 == o.readyState && t.fail({
                                data: null,
                                status: o.status
                            });
                        }, "POST" === t.method ? o.send(i || "") : o.send();
                    }(t, !0), o = setTimeout(function() {
                        o && clearTimeout(o), r = !0, "function" == typeof i && i(r);
                    }, t.timeout || 3e4);
                }, t.prototype.getSdkType = function() {
                    return this.getPlatform() + "mp";
                }, t.prototype.getPlatform = function() {
                    return "quickgame";
                }, t.prototype.getUserInfo = function(e) {
                    e && e();
                }, t.prototype.getAppInfoSync = function() {
                    return {};
                }, t.prototype.onShareAppMessage = function(e) {}, t.prototype.shareAppMessage = function(e) {}, 
                t.prototype.getContext = function() {
                    return i();
                }, t.prototype.getLaunchOptionsSync = function() {
                    var e = null;
                    if (e) return e;
                    if (!E.getLaunchOptionsSync) return {};
                    try {
                        e = E.getLaunchOptionsSync();
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        e = null;
                    }
                    return e || {};
                }, t;
            }())(), N = function(e, t) {
                return (N = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(e, t);
            }, A = {
                SESSION_INTERVAL: 3e4,
                LOG_URL: "/quickgamem_logs",
                GET_OPENID_URL: "",
                USERINFO_URL: "/uminiprogram_logs/comm/uif",
                ENDPOINT: "https://umini.shujupie.com",
                ENDPOINTB: "https://ulogs.umeng.com",
                DEVICE_INFO_KEY: "device_info",
                ADVERTISING_ID: "mobile_ad_id",
                ANDROID_ID: "android_id",
                CURRENT_SESSION: "current_session",
                SESSION_PAUSE_TIME: "session_pause_time",
                EVENT_SEND_DEFAULT_INTERVAL: 15e3,
                EVENT_LAST_SEND_TIME: "last_send_time",
                MAX_EVENTID_LENGTH: 128,
                MAX_PROPERTY_KEY_LENGTH: 256,
                MAX_PROPERTY_KEYS_COUNT: 100,
                REPORT_POLICY: "report_policy",
                REPORT_INTERVAL_TIME: "report_interval_time",
                REPORT_POLICY_START_SEND: "1",
                REPORT_POLICY_INTERVAL: "6",
                IMPRINT: "imprint",
                SEED_VERSION: "1.0.0",
                IMPL_VERSION: "2.7.1",
                ALIPAY_AVAILABLE_VERSION: "10.1.52",
                SHARE_PATH: "um_share_path",
                SHARES: "shares",
                REQUESTS: "requests",
                UUID: "um_uuid",
                UUID_SUFFIX: "ud",
                OPENID: "um_od",
                UNIONID: "um_unid",
                ALIPAYID: "um_alipayid",
                USERID: "um_userid",
                PROVIDER: "um_provider",
                SWANID: "um_swanid",
                ANONYMOUSID: "um_anonymousid",
                LAUNCH_OPTIONS: "LAUNCH_OPTIONS",
                UM_SSRC: "_um_ssrc",
                USER_INFO: "user_info",
                IS_ALIYUN: !1
            }, b = {
                isNumber: function(e) {
                    return !Number.isNaN(parseInt(e, 10));
                },
                compareVersion: function(e, t) {
                    for (var n = String(e).split("."), i = String(t).split("."), r = 0; r < Math.max(n.length, i.length); r++) {
                        var o = parseInt(n[r] || 0, 10), s = parseInt(i[r] || 0, 10);
                        if (o > s) return 1;
                        if (o < s) return -1;
                    }
                    return 0;
                },
                getRandomStr: function(e) {
                    for (var t = "", n = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], i = 0; i < Number(e); i++) t += n[Math.round(Math.random() * (n.length - 1))];
                    return t;
                },
                clone: function(e) {
                    return JSON.parse(JSON.stringify(e));
                },
                startsWith: function(e, t) {
                    return !(!e || !t || 0 === t.length || t.length > e.length) && e.substr(0, t.length) === t;
                },
                endsWith: function(e, t) {
                    return !(!t || 0 === e.length || t.length > e.length) && e.substring(e.length - t.length) === t;
                },
                assign: function(e) {
                    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                    for (var t = Object(e), n = 1; n < arguments.length; n++) {
                        var i = arguments[n];
                        if (i) for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
                    }
                    return t;
                },
                deepEqual: function t(n, i) {
                    if (n === i) return !0;
                    if (n && "object" == e(n) && i && "object" == e(i)) {
                        if (Object.keys(n).length !== Object.keys(i).length) return !1;
                        for (var r in n) {
                            if (Object.prototype.hasOwnProperty.call(i, r)) return !1;
                            if (!t(n[r], i[r])) return !1;
                        }
                        return !0;
                    }
                    return !1;
                },
                trimStart: function(e, t) {
                    if (!e) return "";
                    if ("string" == typeof t && t.length) {
                        var n = new RegExp("^" + t + "*");
                        e = e.replace(n, "");
                    } else e = e.replace(/^s*/, "");
                    return e;
                },
                trimEnd: function(e, t) {
                    if (!e) return "";
                    var n, i;
                    if ("string" == typeof t && t.length) {
                        for (n = new RegExp(t), i = e.length; n.test(e.charAt(i)); ) i -= 1;
                        return e.slice(0, i + 1);
                    }
                    for (n = /s/, i = e.length - 1; n.test(e.charAt(i)); ) i -= 1;
                    return e.slice(0, i + 1);
                },
                isFunction: function(e) {
                    return "function" == typeof e;
                }
            }, k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._openid = "", t._unionid = "", t._useOpenid = !1, t;
                }
                return r(t, e), t.prototype.initID = function(e) {
                    var t = this;
                    t._idType = t._useOpenid ? "openid" : "uuid", m().v("id type: ", t._idType), T.getStorage(A.UNIONID, function(e) {
                        t._unionid = e;
                    }), this._useOpenid ? T.getStorage(A.OPENID, function(n) {
                        t._openid = n, e && e();
                    }) : e && e();
                }, t.prototype.setUseOpenid = function(e) {
                    this._useOpenid = e;
                }, t.prototype.setOpenid = function(e) {
                    !this._openid && e && (this._openid = e, T.setStorage(A.OPENID, e));
                }, t.prototype.setUnionid = function(e) {
                    !this._unionid && e && (this._unionid = e, T.setStorage(A.UNIONID, e));
                }, t.prototype.getIdTracking = function() {
                    var t = e.prototype.getIdTracking.call(this);
                    return this._openid && (t.openid = this._openid), this._unionid && (t.unionid = this._unionid), 
                    this._userid && (t.userid = this._userid), t;
                }, t.prototype.getId = function() {
                    return this._useOpenid ? this._openid : this._uuid;
                }, t;
            }(function() {
                function e() {
                    this._uuid = "", this._userid = "", this._provider = "", this._idType = "";
                }
                return e.prototype.createUUID = function() {
                    return b.getRandomStr(10) + Date.now() + b.getRandomStr(7) + A.UUID_SUFFIX;
                }, e.prototype.initUUID = function(e) {
                    var t = this;
                    T.getStorage(A.UUID, function(n) {
                        n ? t._uuid = n : (t._uuid = t.createUUID(), T.setStorage(A.UUID, t._uuid)), e && e(n);
                    });
                }, e.prototype.initUserid = function() {
                    var e = this;
                    T.getStorage(A.USERID, function(t) {
                        !e._userid && t && (e._userid = t, m().v("userId is ", t));
                    }), T.getStorage(A.PROVIDER, function(t) {
                        !e._provider && t && (e._provider = t, m().v("provider is ", t));
                    });
                }, e.prototype.init = function(e) {
                    var t = this;
                    t.initUUID(function() {
                        t.initUserid(), t.initID(e);
                    });
                }, e.prototype.setUserid = function(e, t) {
                    !this._userid && e && (this._userid = e, this._provider = t, T.setStorage(A.USERID, e), 
                    T.setStorage(A.PROVIDER, t));
                }, e.prototype.getUserId = function() {
                    return this._userid;
                }, e.prototype.getProvider = function() {
                    return this._provider;
                }, e.prototype.getIdType = function() {
                    return this._idType;
                }, e.prototype.getIdTracking = function() {
                    var e = {};
                    return this._uuid && (e.uuid = this._uuid), this._userid && (e.userid = this._userid), 
                    e;
                }, e;
            }()), w = i(), D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this;
                }
                return r(t, e), t.prototype.getOpenIdAsync = function(e, t) {
                    var n = this;
                    w.login({
                        success: function(i) {
                            i.code ? T.request({
                                url: A.ENDPOINT + A.GET_OPENID_URL,
                                method: "GET",
                                data: {
                                    key: e,
                                    code: i.code
                                },
                                success: function(e) {
                                    if (e && 200 === e.statusCode && e.data && e.data.data) {
                                        var i = e.data.data;
                                        return n.setOpenid(i.oid), n.setUnionid(i.uid), t && t(!0);
                                    }
                                    t && t();
                                },
                                fail: function(e) {
                                    m().v("wx request failed...", e), t && t();
                                }
                            }) : t && t();
                        },
                        fail: function() {
                            t && t();
                        }
                    });
                }, t;
            }(k), R = (O = null, function() {
                return O || (O = new D()), O;
            }), U = function() {
                var e = null;
                function t() {
                    var e = !1, t = null, n = [];
                    this.addPageStart = function(n) {
                        n && !e && (t = {
                            ts: Date.now(),
                            path: n,
                            page_name: n
                        }, e = !0);
                    }, this.addPageEnd = function(i) {
                        if (e && i && t && i === t.page_name) {
                            var r = Date.now() - t.ts;
                            t.duration = Math.abs(r), n.push(t), t = null, e = !1;
                        }
                    }, this.get = function() {
                        return n;
                    }, this.getCurrentPage = function() {
                        return t;
                    }, this.clear = function() {
                        n.length = 0;
                    };
                }
                return function() {
                    return e || (e = new t()), e;
                };
            }(), P = {}, C = function() {
                var e = null, t = [], n = "";
                function i() {
                    return {
                        add: function(e, i) {
                            m().v("share origin: %o", e);
                            var r = {
                                title: e && e.title,
                                path: e && e.path && e.path.split("?")[0],
                                _um_sts: Date.now()
                            };
                            r.path && r.path.length > 1 && b.startsWith(r.path, "/") && (r.path = b.trimStart(r.path, "/"));
                            var o = e.path || "", s = R().getId();
                            if (s) {
                                var a = n.split(","), u = (a = a.filter(function(e) {
                                    return e.length > 0;
                                })).indexOf(s);
                                u >= 0 && (a = a.slice(0, u)), a.length < 3 && a.push(s);
                                var c = a.join(",");
                                -1 !== o.indexOf("?") ? o += "&_um_ssrc=" + c : o += "?_um_ssrc=" + c;
                                var f = Date.now();
                                if (o += "&_um_sts=" + f, i) {
                                    var p = function(e) {
                                        var t = [];
                                        for (var n in e) "_um_ssrc" !== n && "_um_sts" !== n && t.push(n + "=" + e[n]);
                                        return t.join("&");
                                    }(P), l = p ? p + "&_um_ssrc=" + c + "&_um_sts=" + f : "_um_ssrc=" + c + "&_um_sts=" + f;
                                    e.query = e.query ? e.query + "&_um_ssrc=" + c + "&_um_sts=" + f : l;
                                } else e.path = o;
                                r._um_ssrc = c, r._um_sts = f;
                            }
                            return t.push(r), m().v("share: %o", e), e;
                        },
                        setShareSource: function(e) {
                            n = e;
                        },
                        clear: function() {
                            t.length = 0;
                        },
                        get: function() {
                            return t;
                        }
                    };
                }
                return function() {
                    return e || (e = new i()), e;
                };
            }(), L = function(e) {
                if (e) try {
                    return JSON.stringify(e);
                } catch (e) {}
                return "";
            }, M = function(e) {
                if (e) try {
                    return JSON.parse(e);
                } catch (e) {}
                return null;
            }, j = function() {
                var e = null, t = "", n = null, i = !1;
                function r() {
                    this.load = function(e) {
                        n ? (T.removeStorage(t), e()) : (t = "um_cache_" + S().appKey(), T.getStorage(t, function(r) {
                            n = M(r) || {}, i = !0, T.removeStorage(t), e();
                        }));
                    }, this.save = function() {
                        n && T.setStorage(t, L(n));
                    }, this.set = function(e, t) {
                        n && (n[e] = t);
                    }, this.get = function(e) {
                        return (n || {})[e];
                    }, this.remove = function(e) {
                        n && n[e] && delete n[e];
                    }, this.getAll = function() {
                        return n;
                    }, this.clear = function() {
                        n = null;
                    }, this.has = function(e) {
                        return !!this.get(e);
                    }, this.isLoaded = function() {
                        return i;
                    };
                }
                return function() {
                    return e || (e = new r()), e;
                };
            }(), V = function() {
                var e, t, n = [], i = [];
                function r(e, n) {
                    var i = (e = e || {})[t];
                    return Array.isArray(i) && i.length ? e[t] = i.concat(n) : e[t] = [].concat(n), 
                    e;
                }
                return function() {
                    return e || (e = {
                        addEvent: function(e) {
                            t ? (n.unshift(e), n.length > 1 && (!function() {
                                if (n.length) {
                                    var e = j().get("ekvs");
                                    (function(e) {
                                        var t = 0;
                                        for (var n in e) Array.isArray(e[n]) && (t += e[n].length);
                                        return t;
                                    })(e) + n.length <= 1e4 && (e = r(e, n), j().set("ekvs", e));
                                }
                            }(), n.length = 0)) : (m().w("session id is null: ", t), i.unshift(e));
                        },
                        setSessionId: function(e) {
                            if (t = e, m().v("setSessionId: ", t), Array.isArray(i) && i.length && t) {
                                for (var n = 0; n < i.length; n++) this.addEvent(i[n]);
                                i.length = 0;
                            }
                        },
                        getEkvs: function() {
                            var e = j().get("ekvs");
                            return n && n.length && (e = r(e, n)), e;
                        },
                        clear: function() {
                            j().remove("ekvs"), n.length = 0;
                        }
                    }), e;
                };
            }(), q = "half_session", x = "close_session", G = "ekv", F = [ "access", "access_subtype" ], H = function() {
                var e = null;
                function t() {
                    var e = !1, t = {};
                    return {
                        init: function() {
                            !function(e) {
                                var n = j().get(A.IMPRINT);
                                n && (t.imprint = n), t.device_type = "Phone", t.sdk_version = A.IMPL_VERSION, t.appkey = S().appKey(), 
                                T.getDeviceInfo(function(e) {
                                    t.device_info = e || "";
                                });
                                var i = T.getAppInfoSync();
                                t.appid = i.appId, t.app_env = i.appEnv, t.app_version = i.appVersion, T.getSystemInfo(function(n) {
                                    T.getNetworkInfo(function(i) {
                                        var r = function(e, t) {
                                            var n = {};
                                            (e = e || {}).safeArea = e.safeArea || {};
                                            var i = (t = t || {}).networkType;
                                            "none" === i && (i = "unknown");
                                            var r = e.model || "", o = e.platform || "", s = e.brand || "", a = s.toLowerCase();
                                            switch (n.sdk_type = T.getSdkType(), n.platform = T.getPlatform(), n.platform_sdk_version = e.platformSDKVersion, 
                                            n.platform_version = e.platformVersion, n.resolution = e.resolution, n.pixel_ratio = e.pixelRatio, 
                                            n.os = o, n.font_size_setting = e.fontSizeSetting, n.device_model = r, n.device_brand = s, 
                                            n.device_manufacturer = a, n.device_manuid = r, n.device_name = r, n.os_version = e.OSVersion, 
                                            n.language = e.language, n.theme = e.theme, n.benchmark_level = e.benchmarkLevel, 
                                            n.status_bar_height = e.statusBarHeight, n.safe_area_top = e.safeArea.top, n.safe_area_left = e.safeArea.left, 
                                            n.safe_area_right = e.safeArea.right, n.safe_area_bottom = e.safeArea.bottom, n.safe_area_height = e.safeArea.height, 
                                            n.safe_area_width = e.safeArea.width, n.storage = e.storage, n.screen_width = e.screenWidth, 
                                            n.screen_height = e.screenHeight, n.host = e.host, i = i ? i.toLowerCase() : "") {
                                              case "4g":
                                                n.access_subtype = "LTE", n.access = "4G";
                                                break;

                                              case "3g":
                                                n.access_subtype = "CDMA", n.access = "3G";
                                                break;

                                              case "2g":
                                                n.access_subtype = "GRPS", n.access = "2G";
                                                break;

                                              default:
                                                n.access = i, delete n.access_subtype;
                                            }
                                            return n;
                                        }(n, i);
                                        b.assign(t, r), e && e();
                                    });
                                });
                            }(function() {
                                e = !0;
                            });
                        },
                        isLoaded: function() {
                            return e;
                        },
                        get: function() {
                            return t;
                        },
                        getRealtimeFields: function() {
                            var e = {};
                            return F.forEach(function(n) {
                                e[n] = t[n];
                            }), e;
                        },
                        setIdTracking: function(e) {
                            this.setItem("id_tracking", e);
                        },
                        setIdType: function(e) {
                            this.setItem("id_type", e);
                        },
                        setAppVersion: function(e) {
                            this.setItem("app_version", e);
                        },
                        setSuperProperty: function(e) {
                            t.sp || (t.sp = {}), t.sp.isv = e;
                        },
                        getSuperProperty: function() {
                            return t && t.sp ? t.sp.isv : "";
                        },
                        setItem: function(e, n) {
                            t[e] = n;
                        },
                        getItem: function(e) {
                            return t[e];
                        }
                    };
                }
                return {
                    instance: function() {
                        return e || (e = t()), e;
                    }
                };
            }(), K = function() {
                var e = null, t = null, n = null;
                return function() {
                    return e || (e = {
                        resume: function(e) {
                            var i = !1;
                            n || (n = j().get(A.CURRENT_SESSION));
                            var r = new Date();
                            return t = r.getTime(), !n || !n.end_time || t - n.end_time > A.SESSION_INTERVAL ? (i = !0, 
                            function(e) {
                                try {
                                    var t = (n || {}).options || {}, i = b.assign({}, function(e) {
                                        var t = {};
                                        for (var n in e) 0 === n.indexOf("_um_") && (t[n] = e[n]);
                                        return m().v("query: ", e), m().v("_um_params: ", t), t;
                                    }(e.query));
                                    i.path = e.path || t.path, i.scene = e.scene ? T.getPlatform() + "_" + e.scene : t.scene;
                                    var r = e.referrerInfo;
                                    r && (i.referrerAppId = r.appId), m().v("session options: ", i);
                                    var o = i[A.UM_SSRC];
                                    o && C().setShareSource(o);
                                    var s = Date.now();
                                    n = {
                                        id: b.getRandomStr(10) + s,
                                        start_time: s,
                                        options: i
                                    };
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    m().e("生成新session失败: ", e);
                                }
                            }(e), m().v("开始新的session(%s): ", n.id, n)) : m().v("延续上一次session(%s): %s ", n.id, r.toLocaleTimeString(), n), 
                            i;
                        },
                        pause: function() {
                            !function() {
                                if (n) {
                                    var e = new Date();
                                    n.end_time = e.getTime(), "number" != typeof n.duration && (n.duration = 0), n.duration = n.end_time - t, 
                                    j().set(A.CURRENT_SESSION, n), m().v("退出会话(%s): %s ", n.id, e.toLocaleTimeString(), n);
                                }
                            }();
                        },
                        getCurrentSessionId: function() {
                            return (n || {}).id;
                        },
                        getCurrentSession: function() {
                            return n;
                        },
                        cloneCurrentSession: function() {
                            return b.clone(n);
                        }
                    }), e;
                };
            }(), Y = {
                sessions: "sn",
                ekvs: "e",
                active_user: "active_user"
            }, J = {
                sdk_type: "sdt",
                access: "ac",
                access_subtype: "acs",
                device_model: "dm",
                language: "lang",
                device_type: "dt",
                device_manufacturer: "dmf",
                device_name: "dn",
                platform_version: "pv",
                id_type: "it",
                font_size_setting: "fss",
                os_version: "ov",
                device_manuid: "did",
                platform_sdk_version: "psv",
                device_brand: "db",
                appkey: "ak",
                _id: "id",
                id_tracking: "itr",
                imprint: "imp",
                sdk_version: "sv",
                resolution: "rl",
                testToken: "ttn",
                theme: "t5",
                benchmark_level: "bml",
                screen_width: "sw",
                screen_height: "sh",
                status_bar_height: "sbh",
                safe_area_top: "sat",
                safe_area_left: "sal",
                safe_area_right: "sar",
                safe_area_bottom: "sab",
                safe_area_height: "sah",
                safe_area_width: "saw",
                pixel_ratio: "pr",
                storage: "s7",
                host: "hs"
            }, X = {
                uuid: "ud",
                unionid: "und",
                openid: "od",
                anonymousid: "nd",
                alipay_id: "ad",
                device_id: "dd",
                userid: "puid"
            }, B = "", W = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", z = function(e) {
                for (var t = {}, n = 0, i = e.length; n < i; n++) t[e.charAt(n)] = n;
                return t;
            }(W), Q = String.fromCharCode, Z = function(e) {
                if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? Q(192 | t >>> 6) + Q(128 | 63 & t) : Q(224 | t >>> 12 & 15) + Q(128 | t >>> 6 & 63) + Q(128 | 63 & t);
                var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                return Q(240 | t >>> 18 & 7) + Q(128 | t >>> 12 & 63) + Q(128 | t >>> 6 & 63) + Q(128 | 63 & t);
            }, $ = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, ee = function(e) {
                var t = [ 0, 2, 1 ][e.length % 3], n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
                return [ W.charAt(n >>> 18), W.charAt(n >>> 12 & 63), t >= 2 ? "=" : W.charAt(n >>> 6 & 63), t >= 1 ? "=" : W.charAt(63 & n) ].join("");
            }, te = function(e) {
                return function(e) {
                    return e.replace($, Z);
                }(e).replace(/[\s\S]{1,3}/g, ee);
            }, ne = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), ie = function(e) {
                switch (e.length) {
                  case 4:
                    var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                    return Q(55296 + (t >>> 10)) + Q(56320 + (1023 & t));

                  case 3:
                    return Q((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

                  default:
                    return Q((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
                }
            }, re = function(e) {
                var t = e.length, n = t % 4, i = (t > 0 ? z[e.charAt(0)] << 18 : 0) | (t > 1 ? z[e.charAt(1)] << 12 : 0) | (t > 2 ? z[e.charAt(2)] << 6 : 0) | (t > 3 ? z[e.charAt(3)] : 0), r = [ Q(i >>> 16), Q(i >>> 8 & 255), Q(255 & i) ];
                return r.length -= [ 0, 0, 2, 1 ][n], r.join("");
            }, oe = function(e, t) {
                return t ? te(String(e)).replace(/[+\/]/g, function(e) {
                    return "+" == e ? "-" : "_";
                }).replace(/=/g, "") : te(String(e));
            }, se = function(e) {
                return function(e) {
                    return function(e) {
                        return e.replace(/[\s\S]{1,4}/g, re);
                    }(e).replace(ne, ie);
                }(String(e).replace(/[-_]/g, function(e) {
                    return "-" == e ? "+" : "/";
                }).replace(/[^A-Za-z0-9\+\/]/g, ""));
            }, ae = new function() {
                var e = "", t = this;
                this.set = function(t) {
                    e = t;
                }, this.get = function() {
                    return e;
                }, this.getImpObj = function() {
                    return M(se(e));
                }, this.getItem = function(e) {
                    var n = t.getImpObj();
                    return n && n[e] || "";
                }, this.load = function() {
                    e = j().get(A.IMPRINT);
                }, this.save = function() {
                    e && j().set(A.IMPRINT, e);
                };
            }(), ue = function() {
                var e = null, t = !1, n = [], i = new f(50);
                function r(e, t, n) {
                    if (H.instance().isLoaded()) {
                        t = t || {};
                        var o = function(e) {
                            var t = null;
                            switch (e) {
                              case q:
                                t = function() {
                                    var e = null, t = K().cloneCurrentSession();
                                    return t && (e = {
                                        header: {
                                            st: "1"
                                        },
                                        analytics: {
                                            sessions: [ t ]
                                        }
                                    }), e;
                                }();
                                break;

                              case x:
                                t = function() {
                                    var e = null, t = {}, n = K().cloneCurrentSession();
                                    if (n) {
                                        var i = U().get(), r = C().get();
                                        Array.isArray(i) && i.length && (n.pages = b.clone(i)), Array.isArray(r) && r.length && (n.shares = b.clone(r)), 
                                        U().clear(), C().clear(), t.sessions = [ n ];
                                    }
                                    var o = V().getEkvs();
                                    return o && (t.ekvs = b.clone(o), V().clear()), (t.sessions || t.ekvs) && (e = {
                                        analytics: t
                                    }), e;
                                }();
                                break;

                              case G:
                                t = function() {
                                    var e = null, t = V().getEkvs();
                                    return t && (e = {
                                        analytics: {
                                            ekvs: b.clone(t)
                                        }
                                    }, V().clear()), e;
                                }();
                            }
                            return t;
                        }(e);
                        if (o) {
                            var s = H.instance().getRealtimeFields();
                            o.header = b.assign({}, o.header, s), o.noCache = t.noCache, i.enqueue(o);
                        }
                        "function" == typeof n && n();
                    } else setTimeout(function() {
                        r(e, t, n);
                    }, 100);
                }
                function o(e) {
                    R().getId() ? t ? m().i("队列正在发送中") : (t = !0, function e(t) {
                        var r = i.front();
                        r ? c(r, function() {
                            i.dequeue(), e(t);
                        }, function() {
                            var r = i.dequeue();
                            r && !r.noCache && n.push(r), e(t);
                        }) : (n.forEach(function(e) {
                            i.enqueue(e);
                        }), n.length = 0, t());
                    }(function() {
                        t = !1, "function" == typeof e && e();
                    })) : (m().i("获取id标识失败，暂缓发送"), "function" == typeof e && e());
                }
                function s() {
                    this.send = function(e, t, n) {
                        e ? this.add(e, t, function() {
                            o(n);
                        }) : o(n);
                    }, this.add = function(e, t, n) {
                        r(e, t, n);
                    }, this.load = function() {
                        var e = j().get(A.REQUESTS);
                        e && e.length && e.forEach(function(e) {
                            i.enqueue(e);
                        }), j().remove(A.REQUESTS);
                    }, this.save = function() {
                        j().set(A.REQUESTS, b.clone(i.items())), i.clear();
                    };
                }
                return function() {
                    return e || (e = new s()), e;
                };
            }(), ce = function() {
                var t = null, n = null;
                function i() {
                    function t(t) {
                        if (t && "object" == e(t)) {
                            var n = j().get(A.USER_INFO);
                            return n && b.deepEqual(t, n) || function(e, t) {
                                var n = S().appKey(), i = T.getSdkType(), r = R().getId(), o = R().getIdType();
                                if (n && i && r && o) {
                                    var s = {
                                        ak: S().appKey(),
                                        sdt: T.getSdkType(),
                                        uin: e.nickName,
                                        uia: e.avatar || e.avatarUrl,
                                        uig: e.gender,
                                        uit: e.country,
                                        uip: e.province,
                                        uic: e.city,
                                        uil: e.language,
                                        id: R().getId(),
                                        it: R().getIdType(),
                                        age: e.age,
                                        cln: e.constellation
                                    }, a = JSON.stringify(s);
                                    a = oe(a), T.request({
                                        url: A.ENDPOINT + A.USERINFO_URL,
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        data: "ui=" + a,
                                        success: function(n) {
                                            m().v("用户信息上传成功: ", e), t && t(n && n.data && 200 === n.data.code);
                                        },
                                        fail: function() {
                                            m().e("用户信息上传失败: ", e), t && t(!1);
                                        }
                                    });
                                }
                            }(t, function(e) {
                                e && j().set(A.USER_INFO, t);
                            }), !0;
                        }
                        return !1;
                    }
                    this.setUserInfo = function(e) {
                        n = e;
                    }, this.update = function() {
                        t(n) || T.getUserInfo(function(e) {
                            t(e);
                        });
                    };
                }
                return function() {
                    return t || (t = new i()), t;
                };
            }(), fe = [];
            d.prototype = {
                createMethod: function(e, t, n) {
                    try {
                        e[t] = n && n[t] ? function() {
                            return n[t].apply(n, arguments);
                        } : function() {
                            fe.push([ t, [].slice.call(arguments) ]);
                        };
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        m().v("create method errror: ", e);
                    }
                },
                installApi: function(e, t) {
                    try {
                        var n, i, r = "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setUnionid,onShareAppMessage,shareAppMessage,setUserInfo".split(",");
                        for (n = 0, i = r.length; n < i; n++) this.createMethod(e, r[n], t);
                        if (t) for (n = 0, i = fe.length; n < i; n++) {
                            var o = fe[n];
                            try {
                                t[o[0]].apply(t, o[1]);
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                m().v("impl[v[0]].apply error: ", o[0], e);
                            }
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        m().v("install api errror: ", e);
                    }
                }
            };
            var pe = [ A.ENDPOINT, A.ENDPOINTB ];
            !function(e) {
                A.ENDPOINTB && setTimeout(function() {
                    !function e(t, n) {
                        var i, r;
                        if (0 === t || 1 === t && n ? i = A.ENDPOINT : 2 === t && n ? i = A.ENDPOINTB : n && (i = pe[t]), 
                        t >= pe.length || n) return n && (r = i, A.ENDPOINT = r), n && m().v("命中可用服务", i), 
                        !n && m().tip_w("未命中可用服务"), !1;
                        T.request({
                            url: A.ENDPOINT + "/uminiprogram_logs/ckdh",
                            success: function(n) {
                                200 === (n.code || n.status || n.statusCode) && n.data && 200 === n.data.code ? e(t + 1, !0) : e(t + 1, !1);
                            },
                            fail: function() {
                                e(t + 1, !1);
                            }
                        });
                    }(0, !1);
                }, e);
            }(3e3);
            var le = new d(), de = {
                _inited: !1,
                _log: m(),
                preinit: function(t) {
                    if (t && "object" == e(t)) for (var n in t) A[n] = t[n];
                    return A;
                },
                use: function(e, t) {
                    return e && b.isFunction(e.install) ? e.install(de, t) : b.isFunction(e) && e(de, t), 
                    de;
                },
                messager: I,
                init: function(e) {
                    if (this._inited) m().v("已经实例过，请避免重复初始化"); else if (e) if (e.appKey) {
                        "boolean" != typeof e.useOpenid && (e.useOpenid = !0), S().set(e), m().setDebug(e.debug), 
                        this._inited = !0;
                        var t = this;
                        I.emit(I.messageType.CONFIG_LOADED, e);
                        try {
                            var n = new l();
                            m().v("成功创建Lib对象"), n.init(function() {
                                m().v("Lib对象初始化成功"), le.installApi(t, n), m().v("安装Lib接口成功"), I.emit(I.messageType.UMA_LIB_INITED, e);
                            });
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            m().w("创建Lib对象异常: " + e);
                        }
                    } else m().err("请确保传入正确的appkey"); else m().err("请正确设置相关信息！");
                }
            };
            try {
                le.installApi(de, null);
            } catch (y) {
                y = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(y);
                m().w("uma赋值异常: ", y);
            }
            var he = "2.7.1", ge = "none", ve = {}, _e = Array.isArray;
            ve.isArray = _e || function(e) {
                return "[object Array]" === toString.call(e);
            }, ve.isObject = function(e) {
                return e === Object(e) && !ve.isArray(e);
            }, ve.isEmptyObject = function(e) {
                if (ve.isObject(e)) {
                    for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
                    return !0;
                }
                return !1;
            }, ve.isUndefined = function(e) {
                return void 0 === e;
            }, ve.isString = function(e) {
                return "[object String]" === toString.call(e);
            }, ve.isDate = function(e) {
                return "[object Date]" === toString.call(e);
            }, ve.isNumber = function(e) {
                return "[object Number]" === toString.call(e);
            }, ve.each = function(e, t, n) {
                if (null != e) {
                    var i = {}, r = Array.prototype.forEach;
                    if (r && e.forEach === r) e.forEach(t, n); else if (e.length === +e.length) {
                        for (var o = 0, s = e.length; o < s; o++) if (o in e && t.call(n, e[o], o, e) === i) return;
                    } else for (var a in e) if (hasOwnProperty.call(e, a) && t.call(n, e[a], a, e) === i) return;
                }
            }, ve.buildQuery = function(e, t) {
                var n, i, r = [];
                return void 0 === t && (t = "&"), ve.each(e, function(e, t) {
                    n = encodeURIComponent(e.toString()), i = encodeURIComponent(t), r[r.length] = i + "=" + n;
                }), r.join(t);
            }, ve.JSONDecode = function(e) {
                if (e) {
                    try {
                        return JSON.parse(e);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.error("JSONDecode error", e);
                    }
                    return null;
                }
            }, ve.JSONEncode = function(e) {
                try {
                    return JSON.stringify(e);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error("JSONEncode error", e);
                }
            };
            var ye = Object.create(null), me = Object.create(null), Se = null, Ie = !1, Oe = {
                minFetchIntervalSeconds: 43200
            };
            v.prototype = {
                setDefaultValues: function(e) {
                    Ie && ve.isObject(e) && ve.each(e, function(e, t) {
                        me[t] && me[t].v || (me[t] = {
                            v: e
                        });
                    });
                },
                getValue: function(e) {
                    m().v("从配置项中读取 value, 当前配置为: ", me), m().v("待读取的 key : ", e);
                    try {
                        if (!Ie) return;
                        var t = me[e] || {};
                        return m().v("读取相应配置ing..., 结果为: ", t), ve.isNumber(t.e) && ve.isNumber(t.g) && (m().v("读取到相应配置, 开始数据上报..."), 
                        function(e) {
                            var t = {
                                appkey: S().appKey(),
                                sdkType: T.getSdkType(),
                                expId: e && e.e,
                                groupId: e && e.g,
                                clientTs: Date.now(),
                                key: e && e.k,
                                value: e && e.v,
                                umid: R().getId()
                            };
                            try {
                                T.request({
                                    url: "https://pslog.umeng.com/mini_ablog",
                                    method: "POST",
                                    data: [ t ],
                                    success: function(e) {
                                        e && 200 === e.statusCode ? m().v("上传数据成功", t) : m().w("ablog 请求成功, 返回结果异常 ", e);
                                    },
                                    fail: function(e) {
                                        m().w("ablog 请求数据错误 ", t, e);
                                    }
                                });
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                m().w("urequest 调用错误", e);
                            }
                        }(t)), t.v;
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        m().w("getValue error, key: ", e);
                    }
                },
                active: function(e) {
                    try {
                        if (!Ie) return;
                        var t, n;
                        e && e.params && (t = e.params), e && e.callback && (n = e.callback), m().v("激活配置项: ", t), 
                        t ? (m().v("本地已缓存的配置项: ", me), g(t), m().v("合并后的配置项: ", me), n && n(me), m().v("active 结束")) : (m().v("配置项为空!! 读取本地配置..."), 
                        T.getStorage(this.STORAGE_NAME, function(e) {
                            e ? (g((e = ve.JSONDecode(e) || {}).params), m().v("当前本地配置项为: ", me), n && n(me), 
                            m().v("active 结束")) : m().v("当前本地配置项为空, 退出激活");
                        }));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        m().w("SDK active 错误", e);
                    }
                },
                init: function(e) {
                    e.appKey && (Se = e.appKey, this.STORAGE_NAME = "um_remote_config_{{" + Se + "}}"), 
                    Se ? Ie ? m().w("SDK 已经初始化, 请避免重复初始化") : (Ie = !0, this.setOptions(e), this.active()) : m().err("请检查您的小程序 appKey, appKey 不能为空");
                },
                setOptions: function(e) {
                    if (ve.isObject(e)) {
                        var t = e.minFetchIntervalSeconds;
                        ve.isNumber(t) && (Oe.minFetchIntervalSeconds = Math.max(t, 5));
                    }
                },
                fetch: function(e) {
                    if (Ie && this.STORAGE_NAME) {
                        var t, n;
                        e && e.active && (t = e.active), e && e.callback && (n = e.callback);
                        var i = this;
                        T.getStorage(this.STORAGE_NAME, function(e) {
                            m().v("开始读缓存 data is ", e), (e = ve.JSONDecode(e) || {}).params && e.ts && Date.now() - e.ts < 1e3 * Oe.minFetchIntervalSeconds ? (m().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch"), 
                            n && n(e.params)) : h(function(e) {
                                m().v("缓存数据不存在, 构建 fetch body :", e);
                                try {
                                    T.request({
                                        url: "https://ucc.umeng.com/v1/mini/fetch",
                                        method: "POST",
                                        data: e,
                                        success: function(e) {
                                            if (e && 200 === e.statusCode && e.data && e.data.cc) {
                                                m().v("fetch 请求成功, 响应数据: ", e.data);
                                                var r = Object.create(null);
                                                ve.each(e.data.cc, function(e) {
                                                    r[e.k] = e;
                                                });
                                                var o = {
                                                    ts: Date.now(),
                                                    params: r
                                                };
                                                m().v("开始缓存 fetch 请求的云配置结果..."), T.setStorage(i.STORAGE_NAME, ve.JSONEncode(o), function(e) {
                                                    m().v("缓存云配置成功, 缓存数据为: ", o), m().v("缓存云配置成功, 成功消息为: ", e), m().v("云配拉取数据是否自动激活: ", t), 
                                                    e && t && (m().v("激活云配置..."), i.active({
                                                        params: r,
                                                        callback: n
                                                    }));
                                                });
                                            } else m().w("fetch 请求成功,返回结果异常 ", e.data), n && n();
                                        },
                                        fail: function(t) {
                                            m().w("fetch请求数据错误 ", e, t), n && n();
                                        }
                                    });
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    m().w("urequest调用错误", e);
                                }
                            });
                        });
                    }
                }
            };
            var Ee = {
                install: function(e, t) {
                    return e.rc || (e.rc = new v()), e.messager.once(e.messager.messageType.CONFIG_LOADED, function() {
                        e._log.v("plugin rc installed");
                    }), e.rc;
                }
            }, Te = "_um", Ne = "revenue", Ae = "stage", be = "level", ke = "running", we = "end", De = "init", Re = "set", Ue = [ Te, Ae, "start" ].join("."), Pe = {
                install: function(e, t) {
                    e.revenue = function(t) {
                        e.trackEvent([ Te, Ne, t.group ].join("."), _(t));
                    };
                    var n = 0;
                    return e.stage = {
                        onStart: function(t) {
                            n = Date.now(), e.trackEvent(Ue, _(t));
                        },
                        onEnd: function(t) {
                            "number" != typeof t._um_sdu && (t._um_sdu = 0 !== n ? Date.now() - n : 0), e.trackEvent([ Te, Ae, we, t.event ].join("."), _(t));
                        },
                        onRunning: function(t) {
                            e.trackEvent([ Te, Ae, ke, t.event ].join("."), _(t));
                        }
                    }, e.level = {
                        onInitLevel: function(t) {
                            e.trackEvent([ Te, be, De ].join("."), _(t));
                        },
                        onSetLevel: function(t) {
                            e.trackEvent([ Te, be, Re ].join("."), _(t));
                        }
                    }, e.messager.once(e.messager.messageType.CONFIG_LOADED, function() {
                        e._log.v("plugin game-ext installed");
                    }), e;
                }
            }, Ce = T.getContext();
            Ce.onShow(function(e) {
                var t;
                m().v("game onShow: ", e), t = e.query, P = t, de.resume(e, !0);
            }), Ce.onHide(function() {
                m().v("game onHide"), de.pause();
            });
            var Le = de.init;
            de.init = function(e) {
                e && e.useOpenid && (m().tip_w(m().repeat("!")), m().tip_w("您选择了使用openid进行统计，请确保使用setOpenid回传openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取"), 
                m().tip_w(m().repeat("!"))), de.resume({}), Le.call(de, e);
            }, de.use(Ee), de.use(Pe), Ce.uma = de;
        }
    }).call(t);
}(function() {
    return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0 !== this ? this : {};
}.call(void 0));