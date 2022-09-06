var t, e = require("../../../../../../@babel/runtime/helpers/typeof");

t = function() {
    return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0 !== this ? this : {};
}.call(void 0), function() {
    if (void 0 !== window.tt) {
        var t = function() {}, n = function(t, e) {
            function n() {
                this.constructor = t;
            }
            S(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, 
            new n());
        }, i = function(t, e) {
            var n = r(t, e);
            return t && t.id_tracking && (n[e.id_tracking || "id_tracking"] = r(t.id_tracking, K)), 
            n;
        }, r = function(t, e) {
            var n = {};
            for (var i in t) e[i] ? n[e[i]] = t[i] : n[i] = t[i];
            return n;
        }, o = function(t, e) {
            var n = {};
            if (t) for (var i in t) t[i] && (n[e[i]] = t[i]);
            return n;
        }, s = function() {
            return H;
        }, a = function(t, e, n, r) {
            G.instance().setIdType(b().getIdType()), G.instance().setIdTracking(b().getIdTracking());
            var a = b().getUserId();
            a && t.analytics && (t.analytics.active_user = {
                puid: a,
                provider: b().getProvider()
            });
            var u = E.clone(G.instance().get());
            t.header = E.assign(u, t.header, {
                ts: Date.now(),
                testToken: s(),
                traceId: E.getRandomStr(10) + Date.now() + E.getRandomStr(9)
            });
            var c, f = function(t) {
                return {
                    h: i(t.header, x),
                    a: o(t.analytics, q)
                };
            }(t), p = U(f), d = {
                url: O.ENDPOINT + O.LOG_URL,
                method: "POST",
                data: nt(p),
                success: function(i) {
                    var r = i.code || i.status || i.statusCode;
                    200 === r || 413 === r ? (_().i("数据发送成功: ", t, p), function(t) {
                        t && (G.instance().setItem(O.IMPRINT, t), rt.set(t), rt.save(), _().v("imprint: ", rt.getImpObj()), 
                        rt.getItem("ttn_invalid") && (H = ""));
                    }((i.data || {}).imprint), "function" == typeof e && e(i)) : (_().w("数据发送失败: ", p), 
                    "function" == typeof n && n());
                },
                fail: function(t) {
                    _().w("超时: ", p), "function" == typeof n && n();
                },
                complete: function() {
                    "function" == typeof r && r();
                }
            };
            I.request(E.assign(d, {
                header: {
                    "Content-Type": c = I.getSdkType() + "/json",
                    "Msg-Type": c
                }
            }));
        }, u = function(t) {
            var e = t, n = [];
            this.enqueue = function(t) {
                "number" == typeof e && this.size() >= e && this.dequeue(), n.push(t);
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
        }, c = function(t, n) {
            this.id = t, this.ts = Date.now();
            var i = e(n);
            if ("string" === i && n) this[t] = n; else if ("object" === i) for (var r in n) ({}).hasOwnProperty.call(n, r) && (this[r] = n[r]);
        }, f = function() {
            var t = !1, n = !1, i = 0;
            this.init = function(e) {
                _().v("sdk version: " + O.IMPL_VERSION), t ? _().v("Lib重复实例化") : P().load(function() {
                    _().v("cache初始化成功: ", P().getAll()), b().setUseOpenid && b().setUseOpenid(y().useOpenid()), 
                    b().init(function() {
                        G.instance().init(), _().v("Header初始化成功");
                    }), t = !0, "function" == typeof e && e(), _().tip("SDK集成成功");
                });
            }, this.resume = function(e) {
                var i;
                t && !n && (_().v("showOptions: ", e), n = !0, y().enableVerify() && e && e.query && (i = e.query._ttn, 
                H = i || H), this._resume(e));
            }, this._resume = function(t) {
                ot().load();
                var e = F().resume(t), n = F().getCurrentSessionId();
                C().setSessionId(n), e && ot().add(L, {}, function() {
                    b().setUseOpenid && b().setUseOpenid(y().useOpenid()), y().useOpenid() && y().autoGetOpenid() && !b().getId() ? (_().v("get id async"), 
                    function t(e, n) {
                        b().getId() || e <= 0 || b().getOpenIdAsync(y().appKey(), function(i) {
                            i ? (_().v("获取id成功"), ot().send()) : (_().v("获取openid失败,启动重试,剩余可用次数", e - 1), setTimeout(function() {
                                t(e - 1, n);
                            }, n));
                        });
                    }(10, 3e3)) : (_().v("session auto send"), ot().send());
                });
            }, this.pause = function(e) {
                t && (n = !1, i = 0, F().pause(), y().uploadUserInfo() && st().update(), ot().send(M, {}, function() {
                    ot().save(), P().save(), _().v("cache save success"), "function" == typeof e && e();
                }));
            }, this.setOpenid = function(t) {
                _().v("setOpenId: %s", t), b().setOpenid(t), ot().send();
            }, this.setUnionid = function(t) {
                _().v("setUnionid: %s", t), b().setUnionid(t);
            }, this.setUserid = function(t, e) {
                _().v("setUserid: %s", t, e), b().setUserid(t, e);
            }, this.setUserInfo = function(t) {
                _().v("setUserInfo: %s", t), st().setUserInfo(t);
            }, this.setAnonymousid = function(t) {
                _().v("setAnonymousId: %s", t), b().setAnonymousid(t), ot().send();
            }, this.setAppVersion = function(t) {
                t && "string" != typeof t ? _().w("setAppVersion方法只接受字符串类型参数") : G.instance().setAppVersion(t);
            }, this.setAlipayUserid = function(t) {
                t && "string" != typeof t ? _().w("setAlipayUserid方法只接受字符串类型参数") : (_().v("setAlipayUserid: %s", t), 
                b().setAlipayUserid(t));
            }, this.setDeviceId = function(t) {
                if ("string" == typeof t) return b().setDeviceId(t), t;
            }, this.setSuperProperty = function(t) {
                if (t && "string" != typeof t) _().w("超级属性只支持字符串类型"); else {
                    var e = this;
                    G.instance().getSuperProperty() !== t && (G.instance().setSuperProperty(t), e.pause(function() {
                        e.resume();
                    }));
                }
            }, this.trackEvent = function(n, r) {
                if (t && (_().v("event: ", n, r), function(t, n) {
                    if (!t || "string" != typeof t) return _().e('please check trackEvent id. id should be "string" and not null'), 
                    !1;
                    var i = [ "id", "ts", "du" ], r = {};
                    if (i.forEach(function(t) {
                        r[t] = 1;
                    }), r[t]) return _().e("eventId不能与以下保留字冲突: " + i.join(",")), !1;
                    if (t.length > O.MAX_EVENTID_LENGTH) return _().e("The maximum length of event id shall not exceed " + O.MAX_EVENTID_LENGTH), 
                    !1;
                    if (n && ("object" != e(n) || Array.isArray(n)) && "string" != typeof n) return _().e("please check trackEvent properties. properties should be string or object(not include Array)"), 
                    !1;
                    if ("object" == e(n)) {
                        var o = 0;
                        for (var s in n) if ({}.hasOwnProperty.call(n, s)) {
                            if (s.length > O.MAX_PROPERTY_KEY_LENGTH) return _().e("The maximum length of property key shall not exceed " + O.MAX_PROPERTY_KEY_LENGTH), 
                            !1;
                            if (o >= O.MAX_PROPERTY_KEYS_COUNT) return _().e("The maximum count of properties shall not exceed " + O.MAX_PROPERTY_KEYS_COUNT), 
                            !1;
                            if (r[s]) return _().e("属性中的key不能与以下保留字冲突: " + i.join(",")), !1;
                            o += 1;
                        }
                    }
                    return !0;
                }(n, r))) {
                    var o = new c(n, r);
                    C().addEvent(o);
                    var a = !!s(), u = a ? 0 : O.EVENT_SEND_DEFAULT_INTERVAL, f = Date.now();
                    (function(t, e) {
                        return "number" != typeof i || "number" != typeof e || i <= 0 || t - i > e;
                    })(f, u) && (i = f, ot().send(j, {
                        noCache: a
                    }, function() {}));
                }
            }, this.trackShare = function(e) {
                if (t) try {
                    I.getSdkType().indexOf("game") > -1 ? (e = w().add(e, !0), _().v("shareQuery: ", e)) : (e = w().add(e, !1), 
                    _().v("sharePath: ", e.path));
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    _().v("shareAppMessage: ", t);
                }
                return e;
            }, this.trackPageStart = function(e) {
                t && k().addPageStart(e);
            }, this.trackPageEnd = function(e) {
                t && k().addPageEnd(e);
            }, this.onShareAppMessage = function(t) {
                var e = this;
                I.onShareAppMessage(function() {
                    return e.trackShare(t());
                });
            }, this.shareAppMessage = function(t) {
                this.trackShare(t), I.shareAppMessage(t);
            };
        }, p = function() {}, d = function(t) {
            _().v("开始构建 fetch body"), I.getSystemInfo(function(e) {
                I.getNetworkInfo(function(n) {
                    var i = (n = n || {}).networkType;
                    i = i === dt ? "unknown" : i.toUpperCase(), gt.access = i, function(t, e) {
                        var n = t.brand || "";
                        if (gt.deviceType = "Phone", gt.sdkVersion = pt, gt.appkey = y().appKey(), gt.sdkType = I.getSdkType(), 
                        gt.umid = b().getId(), t) {
                            gt.language = t.language || "", gt.os = t.OS, gt.osVersion = t.OSVersion, gt.deviceName = t.deviceName, 
                            gt.platformVersion = t.platformVersion, gt.platformSdkVersion = t.platformSDKVersion, 
                            gt.deviceBrand = n;
                            var i = t.resolution.split("*");
                            lt.isArray(i) && (gt.resolutionHeight = Number(i[0]), gt.resolutionWidth = Number(i[1]));
                        }
                        !function(t) {
                            t && (gt.installTime = t.install_datetime && Date.parse(t.install_datetime), gt.scene = t.install_scene, 
                            gt.channel = t.install_channel, gt.campaign = t.install_campaign);
                        }(rt.getImpObj()), e && e(gt);
                    }(e, t);
                });
            });
        }, l = function(t) {
            t && lt.each(t, function(t) {
                vt[t.k] = t;
            });
        }, h = function() {
            var t = this;
            this.STORAGE_NAME = null, m.once(m.messageType.CONFIG_LOADED, function(e) {
                _().v("云配初始化开始..."), t.init(e);
            });
        }, g = function(t) {
            var n = {};
            for (var i in t) {
                var r = t[i];
                if ("object" == e(r)) for (var o in r) n[i + "." + o] = r[o]; else n[i] = r;
            }
            return n;
        };
        console.log("初始化tt_umeng");
        var v = "[UMENG] -- ", _ = function() {
            var t = null, e = !1;
            function n() {
                this.setDebug = function(t) {
                    e = t;
                }, this.d = function() {
                    if (e) try {
                        "string" == typeof arguments[0] && (arguments[0] = v + arguments[0]), console.debug.apply(console, arguments);
                    } catch (t) {}
                }, this.i = function() {
                    try {
                        if (e) try {
                            "string" == typeof arguments[0] && (arguments[0] = v + arguments[0]), console.info.apply(console, arguments);
                        } catch (t) {}
                    } catch (t) {}
                }, this.e = function() {
                    if (e) try {
                        "string" == typeof arguments[0] && (arguments[0] = v + arguments[0]), console.error.apply(console, arguments);
                    } catch (t) {}
                }, this.w = function() {
                    if (e) try {
                        "string" == typeof arguments[0] && (arguments[0] = v + arguments[0]), console.warn.apply(console, arguments);
                    } catch (t) {}
                }, this.v = function() {
                    if (e) try {
                        "string" == typeof arguments[0] && (arguments[0] = v + arguments[0]), console.log.apply(console, arguments);
                    } catch (t) {}
                }, this.t = function() {
                    if (e) try {
                        console.table.apply(console, arguments);
                    } catch (t) {}
                }, this.tip = function() {
                    try {
                        "string" == typeof arguments[0] && (arguments[0] = v + arguments[0]), console.log.apply(console, arguments);
                    } catch (t) {}
                }, this.tip_w = function(t) {
                    try {
                        console.log("%c [UMENG] -- " + t, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;");
                    } catch (t) {}
                }, this.err = function() {
                    try {
                        "string" == typeof arguments[0] && (arguments[0] = v + arguments[0]), console.error.apply(console, arguments);
                    } catch (t) {}
                }, this.repeat = function(t) {
                    for (var e = t; e.length < 86; ) e += t;
                    return e;
                };
            }
            return function() {
                return null === t && (t = new n()), t;
            };
        }(), y = function() {
            var t = null;
            function e() {
                var t = {};
                this.useOpenid = function() {
                    return !!t.useOpenid;
                }, this.useSwanid = function() {
                    return !!t.useSwanid;
                }, this.autoGetOpenid = function() {
                    return !!t.autoGetOpenid;
                }, this.appKey = function() {
                    return t.appKey;
                }, this.uploadUserInfo = function() {
                    return t.uploadUserInfo;
                }, this.enableVerify = function() {
                    return t.enableVerify;
                }, this.set = function(e) {
                    t = e;
                }, this.get = function() {
                    return t;
                }, this.setItem = function(e, n) {
                    t[e] = n;
                }, this.getItem = function(e) {
                    return t[e];
                };
            }
            return function() {
                return t || (t = new e()), t;
            };
        }();
        t.prototype = {
            on: function(t, e, n) {
                var i = this.e || (this.e = {});
                return (i[t] || (i[t] = [])).push({
                    fn: e,
                    ctx: n
                }), this;
            },
            once: function(t, e, n) {
                var i = this;
                function r() {
                    i.off(t, r), e.apply(n, arguments);
                }
                return r._ = e, this.on(t, r, n);
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, r = n.length; i < r; i++) n[i].fn.apply(n[i].ctx, e);
                return this;
            },
            off: function(t, e) {
                var n = this.e || (this.e = {}), i = n[t], r = [];
                if (i && e) for (var o = 0, s = i.length; o < s; o++) i[o].fn !== e && i[o].fn._ !== e && r.push(i[o]);
                return r.length ? n[t] = r : delete n[t], this;
            }
        };
        var m = new t();
        m.messageType = {
            CONFIG_LOADED: 0,
            UMA_LIB_INITED: 1
        };
        var S = function(t, e) {
            return (S = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }, I = new (function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this;
            }
            return n(e, t), e.prototype.getSdkType = function() {
                return "ttgamemp";
            }, e;
        }(function() {
            function t() {}
            return t.prototype.setStorage = function(t, e, n) {
                tt.setStorage({
                    key: t,
                    data: e,
                    success: function(t) {
                        "function" == typeof n && n(!0);
                    },
                    fail: function(e) {
                        _().w(t + ": " + e.errMsg), "function" == typeof n && n(!1);
                    }
                });
            }, t.prototype.getStorage = function(t, e) {
                tt.getStorage({
                    key: t,
                    success: function(t) {
                        "function" == typeof e && e(t.data);
                    },
                    fail: function(n) {
                        _().w(t + ": " + n.errMsg), "function" == typeof e && e();
                    }
                });
            }, t.prototype.removeStorage = function(t, e) {
                tt.removeStorage({
                    key: t,
                    success: function() {
                        "function" == typeof e && e(!0);
                    },
                    fail: function() {
                        "function" == typeof e && e(!1);
                    }
                });
            }, t.prototype.getSystemInfo = function(t) {
                tt.getSystemInfo({
                    success: function(e) {
                        e.safeArea = e.safeArea || {};
                        var n = {
                            model: e.model,
                            brand: e.brand,
                            pixelRatio: e.pixelRatio,
                            screenWidth: e.screenWidth,
                            screenHeight: e.screenHeight,
                            fontSizeSetting: e.fontSizeSetting,
                            platform: e.platform,
                            platformVersion: e.version,
                            platformSDKVersion: e.SDKVersion,
                            language: e.language,
                            deviceName: e.model,
                            safeArea: {
                                width: e.safeArea.width,
                                height: e.safeArea.height,
                                top: e.safeArea.top,
                                left: e.safeArea.left,
                                bottom: e.safeArea.bottom,
                                right: e.safeArea.right
                            },
                            statusBarHeight: e.statusBarHeight,
                            host: e.appName
                        }, i = e.system.split(" ");
                        Array.isArray(i) && (n.OS = i[0], n.OSVersion = i[1]);
                        var r = Math.round(e.screenWidth * e.pixelRatio), o = Math.round(e.screenHeight * e.pixelRatio);
                        n.resolution = r > o ? r + "*" + o : o + "*" + r, "function" == typeof t && t(n);
                    },
                    fail: function() {
                        "function" == typeof t && t();
                    }
                });
            }, t.prototype.getDeviceInfo = function(t) {
                "function" == typeof t && t();
            }, t.prototype.checkNetworkAvailable = function(t) {
                tt.getNetworkType({
                    success: function(e) {
                        "function" == typeof t && t(e && "none" !== e.networkType);
                    },
                    fail: function() {
                        "function" == typeof t && t();
                    }
                });
            }, t.prototype.getNetworkInfo = function(t) {
                tt.getNetworkType({
                    success: function(e) {
                        "function" == typeof t && t(e);
                    },
                    fail: function() {
                        "function" == typeof t && t();
                    }
                });
            }, t.prototype.onNetworkStatusChange = function(t) {
                tt.onNetworkStatusChange(function(e) {
                    "function" == typeof t && t("none" !== e.networkType);
                });
            }, t.prototype.request = function(t) {
                var e = (t = t || {}).success, n = t.fail, i = !1, r = null;
                t.success = function(t) {
                    i || (r && clearTimeout(r), "function" == typeof e && e(t));
                }, t.fail = function() {
                    i || (r && clearTimeout(r), "function" == typeof n && n());
                }, tt.request(t), r = setTimeout(function() {
                    r && clearTimeout(r), i = !0, "function" == typeof n && n(i);
                }, t.timeout || 5e3);
            }, t.prototype.getDeviceId = function(t) {
                t("");
            }, t.prototype.getAdvertisingId = function(t) {
                "function" == typeof t && t("");
            }, t.prototype.getSdkType = function() {
                return "ttmp";
            }, t.prototype.getPlatform = function() {
                return "tt";
            }, t.prototype.getUserInfo = function(t) {
                var e = {
                    fail: function() {
                        t && t();
                    },
                    success: function(e) {
                        try {
                            var n = e.userInfo;
                            n && t && t({
                                avatar: n.avatarUrl,
                                nickName: n.nickName,
                                gender: n.gender,
                                country: n.country,
                                province: n.province,
                                city: n.city,
                                language: n.language
                            });
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            t && t();
                        }
                    }
                };
                try {
                    tt.getSetting({
                        success: function(t) {
                            t.authSetting["scope.userInfo"] && tt.getUserInfo(e);
                        },
                        fail: function() {
                            t && t();
                        }
                    });
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    _.e("getUserInfo error", t);
                }
            }, t.prototype.getAppInfoSync = function() {
                return {};
            }, t.prototype.onShareAppMessage = function(t) {
                tt.onShareAppMessage(t);
            }, t.prototype.shareAppMessage = function(t) {
                tt.shareAppMessage(t);
            }, t.prototype.getLaunchOptionsSync = function() {
                var t = null;
                if (t) return t;
                if (!tt.getLaunchOptionsSync) return {};
                try {
                    t = tt.getLaunchOptionsSync();
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    t = null;
                }
                return t || {};
            }, t;
        }()))(), O = {
            SESSION_INTERVAL: 3e4,
            LOG_URL: "/bytedancem_logs",
            GET_OPENID_URL: "/uminiprogram_logs/bytedance/getuut",
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
        }, E = {
            isNumber: function(t) {
                return !Number.isNaN(parseInt(t, 10));
            },
            compareVersion: function(t, e) {
                for (var n = String(t).split("."), i = String(e).split("."), r = 0; r < Math.max(n.length, i.length); r++) {
                    var o = parseInt(n[r] || 0, 10), s = parseInt(i[r] || 0, 10);
                    if (o > s) return 1;
                    if (o < s) return -1;
                }
                return 0;
            },
            getRandomStr: function(t) {
                for (var e = "", n = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], i = 0; i < Number(t); i++) e += n[Math.round(Math.random() * (n.length - 1))];
                return e;
            },
            clone: function(t) {
                return JSON.parse(JSON.stringify(t));
            },
            startsWith: function(t, e) {
                return !(!t || !e || 0 === e.length || e.length > t.length) && t.substr(0, e.length) === e;
            },
            endsWith: function(t, e) {
                return !(!e || 0 === t.length || e.length > t.length) && t.substring(t.length - e.length) === e;
            },
            assign: function(t) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), n = 1; n < arguments.length; n++) {
                    var i = arguments[n];
                    if (i) for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
                }
                return e;
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
            trimStart: function(t, e) {
                if (!t) return "";
                if ("string" == typeof e && e.length) {
                    var n = new RegExp("^" + e + "*");
                    t = t.replace(n, "");
                } else t = t.replace(/^s*/, "");
                return t;
            },
            trimEnd: function(t, e) {
                if (!t) return "";
                var n, i;
                if ("string" == typeof e && e.length) {
                    for (n = new RegExp(e), i = t.length; n.test(t.charAt(i)); ) i -= 1;
                    return t.slice(0, i + 1);
                }
                for (n = /s/, i = t.length - 1; n.test(t.charAt(i)); ) i -= 1;
                return t.slice(0, i + 1);
            },
            isFunction: function(t) {
                return "function" == typeof t;
            }
        }, A = function() {
            function t() {
                this._uuid = "", this._userid = "", this._provider = "", this._idType = "";
            }
            return t.prototype.createUUID = function() {
                return E.getRandomStr(10) + Date.now() + E.getRandomStr(7) + O.UUID_SUFFIX;
            }, t.prototype.initUUID = function(t) {
                var e = this;
                I.getStorage(O.UUID, function(n) {
                    n ? e._uuid = n : (e._uuid = e.createUUID(), I.setStorage(O.UUID, e._uuid)), t && t(n);
                });
            }, t.prototype.initUserid = function() {
                var t = this;
                I.getStorage(O.USERID, function(e) {
                    !t._userid && e && (t._userid = e, _().v("userId is ", e));
                }), I.getStorage(O.PROVIDER, function(e) {
                    !t._provider && e && (t._provider = e, _().v("provider is ", e));
                });
            }, t.prototype.init = function(t) {
                var e = this;
                e.initUUID(function() {
                    e.initUserid(), e.initID(t);
                });
            }, t.prototype.setUserid = function(t, e) {
                !this._userid && t && (this._userid = t, this._provider = e, I.setStorage(O.USERID, t), 
                I.setStorage(O.PROVIDER, e));
            }, t.prototype.getUserId = function() {
                return this._userid;
            }, t.prototype.getProvider = function() {
                return this._provider;
            }, t.prototype.getIdType = function() {
                return this._idType;
            }, t.prototype.getIdTracking = function() {
                var t = {};
                return this._uuid && (t.uuid = this._uuid), this._userid && (t.userid = this._userid), 
                t;
            }, t;
        }();
        !function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._openid = "", e._unionid = "", e._useOpenid = !1, e;
            }
            n(e, t), e.prototype.initID = function(t) {
                var e = this;
                e._idType = e._useOpenid ? "openid" : "uuid", _().v("id type: ", e._idType), I.getStorage(O.UNIONID, function(t) {
                    e._unionid = t;
                }), this._useOpenid ? I.getStorage(O.OPENID, function(n) {
                    e._openid = n, t && t();
                }) : t && t();
            }, e.prototype.setUseOpenid = function(t) {
                this._useOpenid = t;
            }, e.prototype.setOpenid = function(t) {
                !this._openid && t && (this._openid = t, I.setStorage(O.OPENID, t));
            }, e.prototype.setUnionid = function(t) {
                !this._unionid && t && (this._unionid = t, I.setStorage(O.UNIONID, t));
            }, e.prototype.getIdTracking = function() {
                var e = t.prototype.getIdTracking.call(this);
                return this._openid && (e.openid = this._openid), this._unionid && (e.unionid = this._unionid), 
                this._userid && (e.userid = this._userid), e;
            }, e.prototype.getId = function() {
                return this._useOpenid ? this._openid : this._uuid;
            };
        }(A);
        var N, T = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._unionid = "", e._openid = "", e._anonymousid = "", e._useOpenid = !1, 
                e;
            }
            return n(e, t), e.prototype.getOpenIdAsync = function(t, e) {
                var n = this;
                tt.login({
                    force: !1,
                    success: function(i) {
                        i ? I.request({
                            url: O.ENDPOINT + O.GET_OPENID_URL,
                            method: "GET",
                            data: {
                                key: t,
                                code: i.code || "",
                                anonymous_code: i.anonymousCode || ""
                            },
                            success: function(t) {
                                if (_().v("tt request ss ", t, O.ENDPOINT + O.GET_OPENID_URL), t && 200 === t.statusCode && t.data && t.data.data) {
                                    var i = t.data.data;
                                    return n.setOpenid(i.oid), n.setAnonymousid(i.nid), e && e(!0);
                                }
                                e && e();
                            },
                            fail: function(t) {
                                _().v("tt request failed...", t), e && e();
                            }
                        }) : e && e();
                    },
                    fail: function(t) {
                        _().v("tt login failed...", t), e && e();
                    }
                });
            }, e.prototype.initID = function(t) {
                var e = this;
                e._idType = "anonymousid", _().v("id type: ", e._idType), I.getStorage(O.OPENID, function(t) {
                    e._openid = t;
                }), I.getStorage(O.ANONYMOUSID, function(n) {
                    e._anonymousid = n, t && t();
                });
            }, e.prototype.setUseOpenid = function(t) {
                this._useOpenid = t;
            }, e.prototype.setOpenid = function(t) {
                !this._openid && t && (this._openid = t, I.setStorage(O.OPENID, t));
            }, e.prototype.setAnonymousid = function(t) {
                !this._anonymousid && t && (this._anonymousid = t, I.setStorage(O.ANONYMOUSID, t));
            }, e.prototype.getIdTracking = function() {
                var e = t.prototype.getIdTracking.call(this);
                return this._openid && (e.openid = this._openid), this._userid && (e.userid = this._userid), 
                this._anonymousid && (e.anonymousid = this._anonymousid), e;
            }, e.prototype.getId = function() {
                if (this._anonymousid) return this._idType = "anonymousid", this._anonymousid;
            }, e;
        }(A), b = (N = null, function() {
            return N || (N = new T()), N;
        }), k = function() {
            var t = null;
            function e() {
                var t = !1, e = null, n = [];
                this.addPageStart = function(n) {
                    n && !t && (e = {
                        ts: Date.now(),
                        path: n,
                        page_name: n
                    }, t = !0);
                }, this.addPageEnd = function(i) {
                    if (t && i && e && i === e.page_name) {
                        var r = Date.now() - e.ts;
                        e.duration = Math.abs(r), n.push(e), e = null, t = !1;
                    }
                }, this.get = function() {
                    return n;
                }, this.getCurrentPage = function() {
                    return e;
                }, this.clear = function() {
                    n.length = 0;
                };
            }
            return function() {
                return t || (t = new e()), t;
            };
        }(), D = {}, w = function() {
            var t = null, e = [], n = "";
            function i() {
                return {
                    add: function(t, i) {
                        _().v("share origin: %o", t);
                        var r = {
                            title: t && t.title,
                            path: t && t.path && t.path.split("?")[0],
                            _um_sts: Date.now()
                        };
                        r.path && r.path.length > 1 && E.startsWith(r.path, "/") && (r.path = E.trimStart(r.path, "/"));
                        var o = t.path || "", s = b().getId();
                        if (s) {
                            var a = n.split(","), u = (a = a.filter(function(t) {
                                return t.length > 0;
                            })).indexOf(s);
                            u >= 0 && (a = a.slice(0, u)), a.length < 3 && a.push(s);
                            var c = a.join(",");
                            -1 !== o.indexOf("?") ? o += "&_um_ssrc=" + c : o += "?_um_ssrc=" + c;
                            var f = Date.now();
                            if (o += "&_um_sts=" + f, i) {
                                var p = function(t) {
                                    var e = [];
                                    for (var n in t) "_um_ssrc" !== n && "_um_sts" !== n && e.push(n + "=" + t[n]);
                                    return e.join("&");
                                }(D), d = p ? p + "&_um_ssrc=" + c + "&_um_sts=" + f : "_um_ssrc=" + c + "&_um_sts=" + f;
                                t.query = t.query ? t.query + "&_um_ssrc=" + c + "&_um_sts=" + f : d;
                            } else t.path = o;
                            r._um_ssrc = c, r._um_sts = f;
                        }
                        return e.push(r), _().v("share: %o", t), t;
                    },
                    setShareSource: function(t) {
                        n = t;
                    },
                    clear: function() {
                        e.length = 0;
                    },
                    get: function() {
                        return e;
                    }
                };
            }
            return function() {
                return t || (t = new i()), t;
            };
        }(), U = function(t) {
            if (t) try {
                return JSON.stringify(t);
            } catch (t) {}
            return "";
        }, R = function(t) {
            if (t) try {
                return JSON.parse(t);
            } catch (t) {}
            return null;
        }, P = function() {
            var t = null, e = "", n = null, i = !1;
            function r() {
                this.load = function(t) {
                    n ? (I.removeStorage(e), t()) : (e = "um_cache_" + y().appKey(), I.getStorage(e, function(r) {
                        n = R(r) || {}, i = !0, I.removeStorage(e), t();
                    }));
                }, this.save = function() {
                    n && I.setStorage(e, U(n));
                }, this.set = function(t, e) {
                    n && (n[t] = e);
                }, this.get = function(t) {
                    return (n || {})[t];
                }, this.remove = function(t) {
                    n && n[t] && delete n[t];
                }, this.getAll = function() {
                    return n;
                }, this.clear = function() {
                    n = null;
                }, this.has = function(t) {
                    return !!this.get(t);
                }, this.isLoaded = function() {
                    return i;
                };
            }
            return function() {
                return t || (t = new r()), t;
            };
        }(), C = function() {
            var t, e, n = [], i = [];
            function r(t, n) {
                var i = (t = t || {})[e];
                return Array.isArray(i) && i.length ? t[e] = i.concat(n) : t[e] = [].concat(n), 
                t;
            }
            return function() {
                return t || (t = {
                    addEvent: function(t) {
                        e ? (n.unshift(t), n.length > 1 && (function() {
                            if (n.length) {
                                var t = P().get("ekvs");
                                (function(t) {
                                    var e = 0;
                                    for (var n in t) Array.isArray(t[n]) && (e += t[n].length);
                                    return e;
                                })(t) + n.length <= 1e4 && (t = r(t, n), P().set("ekvs", t));
                            }
                        }(), n.length = 0)) : (_().w("session id is null: ", e), i.unshift(t));
                    },
                    setSessionId: function(t) {
                        if (e = t, _().v("setSessionId: ", e), Array.isArray(i) && i.length && e) {
                            for (var n = 0; n < i.length; n++) this.addEvent(i[n]);
                            i.length = 0;
                        }
                    },
                    getEkvs: function() {
                        var t = P().get("ekvs");
                        return n && n.length && (t = r(t, n)), t;
                    },
                    clear: function() {
                        P().remove("ekvs"), n.length = 0;
                    }
                }), t;
            };
        }(), L = "half_session", M = "close_session", j = "ekv", V = [ "access", "access_subtype" ], G = function() {
            var t = null;
            function e() {
                var t = !1, e = {};
                return {
                    init: function() {
                        !function(t) {
                            var n = P().get(O.IMPRINT);
                            n && (e.imprint = n), e.device_type = "Phone", e.sdk_version = O.IMPL_VERSION, e.appkey = y().appKey(), 
                            I.getDeviceInfo(function(t) {
                                e.device_info = t || "";
                            });
                            var i = I.getAppInfoSync();
                            e.appid = i.appId, e.app_env = i.appEnv, e.app_version = i.appVersion, I.getSystemInfo(function(n) {
                                I.getNetworkInfo(function(i) {
                                    var r = function(t, e) {
                                        var n = {};
                                        (t = t || {}).safeArea = t.safeArea || {};
                                        var i = (e = e || {}).networkType;
                                        "none" === i && (i = "unknown");
                                        var r = t.model || "", o = t.platform || "", s = t.brand || "", a = s.toLowerCase();
                                        switch (n.sdk_type = I.getSdkType(), n.platform = I.getPlatform(), n.platform_sdk_version = t.platformSDKVersion, 
                                        n.platform_version = t.platformVersion, n.resolution = t.resolution, n.pixel_ratio = t.pixelRatio, 
                                        n.os = o, n.font_size_setting = t.fontSizeSetting, n.device_model = r, n.device_brand = s, 
                                        n.device_manufacturer = a, n.device_manuid = r, n.device_name = r, n.os_version = t.OSVersion, 
                                        n.language = t.language, n.theme = t.theme, n.benchmark_level = t.benchmarkLevel, 
                                        n.status_bar_height = t.statusBarHeight, n.safe_area_top = t.safeArea.top, n.safe_area_left = t.safeArea.left, 
                                        n.safe_area_right = t.safeArea.right, n.safe_area_bottom = t.safeArea.bottom, n.safe_area_height = t.safeArea.height, 
                                        n.safe_area_width = t.safeArea.width, n.storage = t.storage, n.screen_width = t.screenWidth, 
                                        n.screen_height = t.screenHeight, n.host = t.host, i = i ? i.toLowerCase() : "") {
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
                                    E.assign(e, r), t && t();
                                });
                            });
                        }(function() {
                            t = !0;
                        });
                    },
                    isLoaded: function() {
                        return t;
                    },
                    get: function() {
                        return e;
                    },
                    getRealtimeFields: function() {
                        var t = {};
                        return V.forEach(function(n) {
                            t[n] = e[n];
                        }), t;
                    },
                    setIdTracking: function(t) {
                        this.setItem("id_tracking", t);
                    },
                    setIdType: function(t) {
                        this.setItem("id_type", t);
                    },
                    setAppVersion: function(t) {
                        this.setItem("app_version", t);
                    },
                    setSuperProperty: function(t) {
                        e.sp || (e.sp = {}), e.sp.isv = t;
                    },
                    getSuperProperty: function() {
                        return e && e.sp ? e.sp.isv : "";
                    },
                    setItem: function(t, n) {
                        e[t] = n;
                    },
                    getItem: function(t) {
                        return e[t];
                    }
                };
            }
            return {
                instance: function() {
                    return t || (t = e()), t;
                }
            };
        }(), F = function() {
            var t = null, e = null, n = null;
            return function() {
                return t || (t = {
                    resume: function(t) {
                        var i = !1;
                        n || (n = P().get(O.CURRENT_SESSION));
                        var r = new Date();
                        return e = r.getTime(), !n || !n.end_time || e - n.end_time > O.SESSION_INTERVAL ? (i = !0, 
                        function(t) {
                            try {
                                var e = (n || {}).options || {}, i = E.assign({}, function(t) {
                                    var e = {};
                                    for (var n in t) 0 === n.indexOf("_um_") && (e[n] = t[n]);
                                    return _().v("query: ", t), _().v("_um_params: ", e), e;
                                }(t.query));
                                i.path = t.path || e.path, i.scene = t.scene ? I.getPlatform() + "_" + t.scene : e.scene;
                                var r = t.referrerInfo;
                                r && (i.referrerAppId = r.appId), _().v("session options: ", i);
                                var o = i[O.UM_SSRC];
                                o && w().setShareSource(o);
                                var s = Date.now();
                                n = {
                                    id: E.getRandomStr(10) + s,
                                    start_time: s,
                                    options: i
                                };
                            } catch (t) {
                                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                _().e("生成新session失败: ", t);
                            }
                        }(t), _().v("开始新的session(%s): ", n.id, n)) : _().v("延续上一次session(%s): %s ", n.id, r.toLocaleTimeString(), n), 
                        i;
                    },
                    pause: function() {
                        !function() {
                            if (n) {
                                var t = new Date();
                                n.end_time = t.getTime(), "number" != typeof n.duration && (n.duration = 0), n.duration = n.end_time - e, 
                                P().set(O.CURRENT_SESSION, n), _().v("退出会话(%s): %s ", n.id, t.toLocaleTimeString(), n);
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
                        return E.clone(n);
                    }
                }), t;
            };
        }(), q = {
            sessions: "sn",
            ekvs: "e",
            active_user: "active_user"
        }, x = {
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
        }, K = {
            uuid: "ud",
            unionid: "und",
            openid: "od",
            anonymousid: "nd",
            alipay_id: "ad",
            device_id: "dd",
            userid: "puid"
        }, H = "", Y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", J = function(t) {
            for (var e = {}, n = 0, i = t.length; n < i; n++) e[t.charAt(n)] = n;
            return e;
        }(Y), B = String.fromCharCode, X = function(t) {
            if (t.length < 2) return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? B(192 | e >>> 6) + B(128 | 63 & e) : B(224 | e >>> 12 & 15) + B(128 | e >>> 6 & 63) + B(128 | 63 & e);
            var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
            return B(240 | e >>> 18 & 7) + B(128 | e >>> 12 & 63) + B(128 | e >>> 6 & 63) + B(128 | 63 & e);
        }, W = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, z = function(t) {
            var e = [ 0, 2, 1 ][t.length % 3], n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
            return [ Y.charAt(n >>> 18), Y.charAt(n >>> 12 & 63), e >= 2 ? "=" : Y.charAt(n >>> 6 & 63), e >= 1 ? "=" : Y.charAt(63 & n) ].join("");
        }, Q = function(t) {
            return function(t) {
                return t.replace(W, X);
            }(t).replace(/[\s\S]{1,3}/g, z);
        }, Z = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), $ = function(t) {
            switch (t.length) {
              case 4:
                var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
                return B(55296 + (e >>> 10)) + B(56320 + (1023 & e));

              case 3:
                return B((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));

              default:
                return B((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1));
            }
        }, et = function(t) {
            var e = t.length, n = e % 4, i = (e > 0 ? J[t.charAt(0)] << 18 : 0) | (e > 1 ? J[t.charAt(1)] << 12 : 0) | (e > 2 ? J[t.charAt(2)] << 6 : 0) | (e > 3 ? J[t.charAt(3)] : 0), r = [ B(i >>> 16), B(i >>> 8 & 255), B(255 & i) ];
            return r.length -= [ 0, 0, 2, 1 ][n], r.join("");
        }, nt = function(t, e) {
            return e ? Q(String(t)).replace(/[+\/]/g, function(t) {
                return "+" == t ? "-" : "_";
            }).replace(/=/g, "") : Q(String(t));
        }, it = function(t) {
            return function(t) {
                return function(t) {
                    return t.replace(/[\s\S]{1,4}/g, et);
                }(t).replace(Z, $);
            }(String(t).replace(/[-_]/g, function(t) {
                return "-" == t ? "+" : "/";
            }).replace(/[^A-Za-z0-9\+\/]/g, ""));
        }, rt = new function() {
            var t = "", e = this;
            this.set = function(e) {
                t = e;
            }, this.get = function() {
                return t;
            }, this.getImpObj = function() {
                return R(it(t));
            }, this.getItem = function(t) {
                var n = e.getImpObj();
                return n && n[t] || "";
            }, this.load = function() {
                t = P().get(O.IMPRINT);
            }, this.save = function() {
                t && P().set(O.IMPRINT, t);
            };
        }(), ot = function() {
            var t = null, e = !1, n = [], i = new u(50);
            function r(t, e, n) {
                if (G.instance().isLoaded()) {
                    e = e || {};
                    var o = function(t) {
                        var e = null;
                        switch (t) {
                          case L:
                            e = function() {
                                var t = null, e = F().cloneCurrentSession();
                                return e && (t = {
                                    header: {
                                        st: "1"
                                    },
                                    analytics: {
                                        sessions: [ e ]
                                    }
                                }), t;
                            }();
                            break;

                          case M:
                            e = function() {
                                var t = null, e = {}, n = F().cloneCurrentSession();
                                if (n) {
                                    var i = k().get(), r = w().get();
                                    Array.isArray(i) && i.length && (n.pages = E.clone(i)), Array.isArray(r) && r.length && (n.shares = E.clone(r)), 
                                    k().clear(), w().clear(), e.sessions = [ n ];
                                }
                                var o = C().getEkvs();
                                return o && (e.ekvs = E.clone(o), C().clear()), (e.sessions || e.ekvs) && (t = {
                                    analytics: e
                                }), t;
                            }();
                            break;

                          case j:
                            e = function() {
                                var t = null, e = C().getEkvs();
                                return e && (t = {
                                    analytics: {
                                        ekvs: E.clone(e)
                                    }
                                }, C().clear()), t;
                            }();
                        }
                        return e;
                    }(t);
                    if (o) {
                        var s = G.instance().getRealtimeFields();
                        o.header = E.assign({}, o.header, s), o.noCache = e.noCache, i.enqueue(o);
                    }
                    "function" == typeof n && n();
                } else setTimeout(function() {
                    r(t, e, n);
                }, 100);
            }
            function o(t) {
                b().getId() ? e ? _().i("队列正在发送中") : (e = !0, function t(e) {
                    var r = i.front();
                    r ? a(r, function() {
                        i.dequeue(), t(e);
                    }, function() {
                        var r = i.dequeue();
                        r && !r.noCache && n.push(r), t(e);
                    }) : (n.forEach(function(t) {
                        i.enqueue(t);
                    }), n.length = 0, e());
                }(function() {
                    e = !1, "function" == typeof t && t();
                })) : (_().i("获取id标识失败，暂缓发送"), "function" == typeof t && t());
            }
            function s() {
                this.send = function(t, e, n) {
                    t ? this.add(t, e, function() {
                        o(n);
                    }) : o(n);
                }, this.add = function(t, e, n) {
                    r(t, e, n);
                }, this.load = function() {
                    var t = P().get(O.REQUESTS);
                    t && t.length && t.forEach(function(t) {
                        i.enqueue(t);
                    }), P().remove(O.REQUESTS);
                }, this.save = function() {
                    P().set(O.REQUESTS, E.clone(i.items())), i.clear();
                };
            }
            return function() {
                return t || (t = new s()), t;
            };
        }(), st = function() {
            var t = null, n = null;
            function i() {
                function t(t) {
                    if (t && "object" == e(t)) {
                        var n = P().get(O.USER_INFO);
                        return n && E.deepEqual(t, n) || function(t, e) {
                            var n = y().appKey(), i = I.getSdkType(), r = b().getId(), o = b().getIdType();
                            if (n && i && r && o) {
                                var s = {
                                    ak: y().appKey(),
                                    sdt: I.getSdkType(),
                                    uin: t.nickName,
                                    uia: t.avatar || t.avatarUrl,
                                    uig: t.gender,
                                    uit: t.country,
                                    uip: t.province,
                                    uic: t.city,
                                    uil: t.language,
                                    id: b().getId(),
                                    it: b().getIdType(),
                                    age: t.age,
                                    cln: t.constellation
                                }, a = JSON.stringify(s);
                                a = nt(a), I.request({
                                    url: O.ENDPOINT + O.USERINFO_URL,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: "ui=" + a,
                                    success: function(n) {
                                        _().v("用户信息上传成功: ", t), e && e(n && n.data && 200 === n.data.code);
                                    },
                                    fail: function() {
                                        _().e("用户信息上传失败: ", t), e && e(!1);
                                    }
                                });
                            }
                        }(t, function(e) {
                            e && P().set(O.USER_INFO, t);
                        }), !0;
                    }
                    return !1;
                }
                this.setUserInfo = function(t) {
                    n = t;
                }, this.update = function() {
                    t(n) || I.getUserInfo(function(e) {
                        t(e);
                    });
                };
            }
            return function() {
                return t || (t = new i()), t;
            };
        }(), at = [];
        p.prototype = {
            createMethod: function(t, e, n) {
                try {
                    t[e] = n && n[e] ? function() {
                        return n[e].apply(n, arguments);
                    } : function() {
                        at.push([ e, [].slice.call(arguments) ]);
                    };
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    _().v("create method errror: ", t);
                }
            },
            installApi: function(t, e) {
                try {
                    var n, i, r = "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setAnonymousid,onShareAppMessage,shareAppMessage".split(",");
                    for (n = 0, i = r.length; n < i; n++) this.createMethod(t, r[n], e);
                    if (e) for (n = 0, i = at.length; n < i; n++) {
                        var o = at[n];
                        try {
                            e[o[0]].apply(e, o[1]);
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            _().v("impl[v[0]].apply error: ", o[0], t);
                        }
                    }
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    _().v("install api errror: ", t);
                }
            }
        };
        var ut = [ O.ENDPOINT, O.ENDPOINTB ];
        !function(t) {
            O.ENDPOINTB && setTimeout(function() {
                !function t(e, n) {
                    var i, r;
                    if (0 === e || 1 === e && n ? i = O.ENDPOINT : 2 === e && n ? i = O.ENDPOINTB : n && (i = ut[e]), 
                    e >= ut.length || n) return n && (r = i, O.ENDPOINT = r), n && _().v("命中可用服务", i), 
                    !n && _().tip_w("未命中可用服务"), !1;
                    I.request({
                        url: O.ENDPOINT + "/uminiprogram_logs/ckdh",
                        success: function(n) {
                            200 === (n.code || n.status || n.statusCode) && n.data && 200 === n.data.code ? t(e + 1, !0) : t(e + 1, !1);
                        },
                        fail: function() {
                            t(e + 1, !1);
                        }
                    });
                }(0, !1);
            }, t);
        }(3e3);
        var ct = new p(), ft = {
            _inited: !1,
            _log: _(),
            preinit: function(t) {
                if (t && "object" == e(t)) for (var n in t) O[n] = t[n];
                return O;
            },
            use: function(t, e) {
                return t && E.isFunction(t.install) ? t.install(ft, e) : E.isFunction(t) && t(ft, e), 
                ft;
            },
            messager: m,
            init: function(t) {
                if (this._inited) _().v("已经实例过，请避免重复初始化"); else if (t) if (t.appKey) {
                    "boolean" != typeof t.useOpenid && (t.useOpenid = !0), y().set(t), _().setDebug(t.debug), 
                    this._inited = !0;
                    var e = this;
                    m.emit(m.messageType.CONFIG_LOADED, t);
                    try {
                        var n = new f();
                        _().v("成功创建Lib对象"), n.init(function() {
                            _().v("Lib对象初始化成功"), ct.installApi(e, n), _().v("安装Lib接口成功"), m.emit(m.messageType.UMA_LIB_INITED, t);
                        });
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        _().w("创建Lib对象异常: " + t);
                    }
                } else _().err("请确保传入正确的appkey"); else _().err("请正确设置相关信息！");
            }
        };
        try {
            ct.installApi(ft, null);
        } catch (v) {
            v = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(v);
            _().w("uma赋值异常: ", v);
        }
        var pt = "2.7.1", dt = "none", lt = {}, ht = Array.isArray;
        lt.isArray = ht || function(t) {
            return "[object Array]" === toString.call(t);
        }, lt.isObject = function(t) {
            return t === Object(t) && !lt.isArray(t);
        }, lt.isEmptyObject = function(t) {
            if (lt.isObject(t)) {
                for (var e in t) if (hasOwnProperty.call(t, e)) return !1;
                return !0;
            }
            return !1;
        }, lt.isUndefined = function(t) {
            return void 0 === t;
        }, lt.isString = function(t) {
            return "[object String]" === toString.call(t);
        }, lt.isDate = function(t) {
            return "[object Date]" === toString.call(t);
        }, lt.isNumber = function(t) {
            return "[object Number]" === toString.call(t);
        }, lt.each = function(t, e, n) {
            if (null != t) {
                var i = {}, r = Array.prototype.forEach;
                if (r && t.forEach === r) t.forEach(e, n); else if (t.length === +t.length) {
                    for (var o = 0, s = t.length; o < s; o++) if (o in t && e.call(n, t[o], o, t) === i) return;
                } else for (var a in t) if (hasOwnProperty.call(t, a) && e.call(n, t[a], a, t) === i) return;
            }
        }, lt.buildQuery = function(t, e) {
            var n, i, r = [];
            return void 0 === e && (e = "&"), lt.each(t, function(t, e) {
                n = encodeURIComponent(t.toString()), i = encodeURIComponent(e), r[r.length] = i + "=" + n;
            }), r.join(e);
        }, lt.JSONDecode = function(t) {
            if (t) {
                try {
                    return JSON.parse(t);
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    console.error("JSONDecode error", t);
                }
                return null;
            }
        }, lt.JSONEncode = function(t) {
            try {
                return JSON.stringify(t);
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                console.error("JSONEncode error", t);
            }
        };
        var gt = Object.create(null), vt = Object.create(null), _t = null, yt = !1, mt = {
            minFetchIntervalSeconds: 43200
        };
        h.prototype = {
            setDefaultValues: function(t) {
                yt && lt.isObject(t) && lt.each(t, function(t, e) {
                    vt[e] && vt[e].v || (vt[e] = {
                        v: t
                    });
                });
            },
            getValue: function(t) {
                _().v("从配置项中读取 value, 当前配置为: ", vt), _().v("待读取的 key : ", t);
                try {
                    if (!yt) return;
                    var e = vt[t] || {};
                    return _().v("读取相应配置ing..., 结果为: ", e), lt.isNumber(e.e) && lt.isNumber(e.g) && (_().v("读取到相应配置, 开始数据上报..."), 
                    function(t) {
                        var e = {
                            appkey: y().appKey(),
                            sdkType: I.getSdkType(),
                            expId: t && t.e,
                            groupId: t && t.g,
                            clientTs: Date.now(),
                            key: t && t.k,
                            value: t && t.v,
                            umid: b().getId()
                        };
                        try {
                            I.request({
                                url: "https://pslog.umeng.com/mini_ablog",
                                method: "POST",
                                data: [ e ],
                                success: function(t) {
                                    t && 200 === t.statusCode ? _().v("上传数据成功", e) : _().w("ablog 请求成功, 返回结果异常 ", t);
                                },
                                fail: function(t) {
                                    _().w("ablog 请求数据错误 ", e, t);
                                }
                            });
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            _().w("urequest 调用错误", t);
                        }
                    }(e)), e.v;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    _().w("getValue error, key: ", t);
                }
            },
            active: function(t) {
                try {
                    if (!yt) return;
                    var e, n;
                    t && t.params && (e = t.params), t && t.callback && (n = t.callback), _().v("激活配置项: ", e), 
                    e ? (_().v("本地已缓存的配置项: ", vt), l(e), _().v("合并后的配置项: ", vt), n && n(vt), _().v("active 结束")) : (_().v("配置项为空!! 读取本地配置..."), 
                    I.getStorage(this.STORAGE_NAME, function(t) {
                        t ? (l((t = lt.JSONDecode(t) || {}).params), _().v("当前本地配置项为: ", vt), n && n(vt), 
                        _().v("active 结束")) : _().v("当前本地配置项为空, 退出激活");
                    }));
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    _().w("SDK active 错误", t);
                }
            },
            init: function(t) {
                t.appKey && (_t = t.appKey, this.STORAGE_NAME = "um_remote_config_{{" + _t + "}}"), 
                _t ? yt ? _().w("SDK 已经初始化, 请避免重复初始化") : (yt = !0, this.setOptions(t), this.active()) : _().err("请检查您的小程序 appKey, appKey 不能为空");
            },
            setOptions: function(t) {
                if (lt.isObject(t)) {
                    var e = t.minFetchIntervalSeconds;
                    lt.isNumber(e) && (mt.minFetchIntervalSeconds = Math.max(e, 5));
                }
            },
            fetch: function(t) {
                if (yt && this.STORAGE_NAME) {
                    var e, n;
                    t && t.active && (e = t.active), t && t.callback && (n = t.callback);
                    var i = this;
                    I.getStorage(this.STORAGE_NAME, function(t) {
                        _().v("开始读缓存 data is ", t), (t = lt.JSONDecode(t) || {}).params && t.ts && Date.now() - t.ts < 1e3 * mt.minFetchIntervalSeconds ? (_().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch"), 
                        n && n(t.params)) : d(function(t) {
                            _().v("缓存数据不存在, 构建 fetch body :", t);
                            try {
                                I.request({
                                    url: "https://ucc.umeng.com/v1/mini/fetch",
                                    method: "POST",
                                    data: t,
                                    success: function(t) {
                                        if (t && 200 === t.statusCode && t.data && t.data.cc) {
                                            _().v("fetch 请求成功, 响应数据: ", t.data);
                                            var r = Object.create(null);
                                            lt.each(t.data.cc, function(t) {
                                                r[t.k] = t;
                                            });
                                            var o = {
                                                ts: Date.now(),
                                                params: r
                                            };
                                            _().v("开始缓存 fetch 请求的云配置结果..."), I.setStorage(i.STORAGE_NAME, lt.JSONEncode(o), function(t) {
                                                _().v("缓存云配置成功, 缓存数据为: ", o), _().v("缓存云配置成功, 成功消息为: ", t), _().v("云配拉取数据是否自动激活: ", e), 
                                                t && e && (_().v("激活云配置..."), i.active({
                                                    params: r,
                                                    callback: n
                                                }));
                                            });
                                        } else _().w("fetch 请求成功,返回结果异常 ", t.data), n && n();
                                    },
                                    fail: function(e) {
                                        _().w("fetch请求数据错误 ", t, e), n && n();
                                    }
                                });
                            } catch (t) {
                                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                _().w("urequest调用错误", t);
                            }
                        });
                    });
                }
            }
        };
        var St = {
            install: function(t, e) {
                return t.rc || (t.rc = new h()), t.messager.once(t.messager.messageType.CONFIG_LOADED, function() {
                    t._log.v("plugin rc installed");
                }), t.rc;
            }
        }, It = "_um", Ot = "revenue", Et = "stage", At = "level", Nt = "running", Tt = "end", bt = "init", kt = "set", Dt = [ It, Et, "start" ].join("."), wt = {
            install: function(t, e) {
                t.revenue = function(e) {
                    t.trackEvent([ It, Ot, e.group ].join("."), g(e));
                };
                var n = 0;
                return t.stage = {
                    onStart: function(e) {
                        n = Date.now(), t.trackEvent(Dt, g(e));
                    },
                    onEnd: function(e) {
                        "number" != typeof e._um_sdu && (e._um_sdu = 0 !== n ? Date.now() - n : 0), t.trackEvent([ It, Et, Tt, e.event ].join("."), g(e));
                    },
                    onRunning: function(e) {
                        t.trackEvent([ It, Et, Nt, e.event ].join("."), g(e));
                    }
                }, t.level = {
                    onInitLevel: function(e) {
                        t.trackEvent([ It, At, bt ].join("."), g(e));
                    },
                    onSetLevel: function(e) {
                        t.trackEvent([ It, At, kt ].join("."), g(e));
                    }
                }, t.messager.once(t.messager.messageType.CONFIG_LOADED, function() {
                    t._log.v("plugin game-ext installed");
                }), t;
            }
        };
        tt.onShow(function(t) {
            var e;
            _().v("game onShow: ", t), e = t.query, D = e, ft.resume(t, !0);
        }), tt.onHide(function() {
            _().v("game onHide"), ft.pause();
        });
        var Ut = ft.init;
        ft.init = function(t) {
            t && t.useOpenid && (_().tip_w(_().repeat("!")), _().tip_w("您选择了使用openid进行统计，请确保使用setOpenid回传openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取"), 
            _().tip_w(_().repeat("!"))), Ut.call(ft, t);
        }, ft.use(St), ft.use(wt), tt.uma = ft;
    }
}.call(t);