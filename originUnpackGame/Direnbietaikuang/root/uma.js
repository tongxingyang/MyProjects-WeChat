var e = require("@babel/runtime/helpers/typeof"), t = "[UMENG] -- ", n = function() {
    var e = null, n = !1;
    function r() {
        this.setDebug = function(e) {
            n = e;
        }, this.d = function() {
            if (n) try {
                "string" == typeof arguments[0] && (arguments[0] = t + arguments[0]), console.debug.apply(console, arguments);
            } catch (e) {}
        }, this.i = function() {
            try {
                if (n) try {
                    "string" == typeof arguments[0] && (arguments[0] = t + arguments[0]), console.info.apply(console, arguments);
                } catch (e) {}
            } catch (e) {}
        }, this.e = function() {
            if (n) try {
                "string" == typeof arguments[0] && (arguments[0] = t + arguments[0]), console.error.apply(console, arguments);
            } catch (e) {}
        }, this.w = function() {
            if (n) try {
                "string" == typeof arguments[0] && (arguments[0] = t + arguments[0]), console.warn.apply(console, arguments);
            } catch (e) {}
        }, this.v = function() {
            if (n) try {
                "string" == typeof arguments[0] && (arguments[0] = t + arguments[0]), console.log.apply(console, arguments);
            } catch (e) {}
        }, this.t = function() {
            if (n) try {
                console.table.apply(console, arguments);
            } catch (e) {}
        }, this.tip = function() {
            try {
                "string" == typeof arguments[0] && (arguments[0] = t + arguments[0]), console.log.apply(console, arguments);
            } catch (e) {}
        }, this.tip_w = function(e) {
            try {
                console.log("%c [UMENG] -- " + e, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;");
            } catch (e) {}
        }, this.err = function() {
            try {
                "string" == typeof arguments[0] && (arguments[0] = t + arguments[0]), console.error.apply(console, arguments);
            } catch (e) {}
        }, this.repeat = function(e) {
            for (var t = e; t.length < 86; ) t += e;
            return t;
        };
    }
    return function() {
        return null === e && (e = new r()), e;
    };
}(), r = function() {
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

function i() {}

i.prototype = {
    on: function(e, t, n) {
        var r = this.e || (this.e = {});
        return (r[e] || (r[e] = [])).push({
            fn: t,
            ctx: n
        }), this;
    },
    once: function(e, t, n) {
        var r = this;
        function i() {
            r.off(e, i), t.apply(n, arguments);
        }
        return i._ = t, this.on(e, i, n);
    },
    emit: function(e) {
        for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, t);
        return this;
    },
    off: function(e, t) {
        var n = this.e || (this.e = {}), r = n[e], i = [];
        if (r && t) for (var o = 0, s = r.length; o < s; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
        return i.length ? n[e] = i : delete n[e], this;
    }
};

var o = new i();

o.messageType = {
    CONFIG_LOADED: 0,
    UMA_LIB_INITED: 1
};

var s = function(e, t) {
    return (s = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    })(e, t);
};

function a(e, t) {
    function n() {
        this.constructor = e;
    }
    s(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
    new n());
}

var u, c = new (function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return a(t, e), t.prototype.getSdkType = function() {
        return "wxgamemp";
    }, t.prototype.getUserInfo = function(e) {
        var t = {
            fail: function() {
                e && e();
            },
            success: function(t) {
                if (t && t.userInfo) {
                    var n = t.userInfo;
                    e && e({
                        avatar: n.avatarUrl,
                        nickName: n.nickName,
                        gender: n.gender,
                        country: n.country,
                        province: n.province,
                        city: n.city,
                        language: n.language
                    });
                }
            }
        };
        try {
            wx.getSetting({
                success: function(e) {
                    e.authSetting["scope.userInfo"] && wx.getUserInfo(t);
                },
                fail: function() {
                    e();
                }
            });
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            n.e("getUserInfo error", e);
        }
    }, t;
}(function() {
    function e() {}
    return e.prototype.setStorage = function(e, t, n) {
        wx.setStorage({
            key: e,
            data: t,
            success: function() {
                "function" == typeof n && n(!0);
            },
            fail: function() {
                "function" == typeof n && n(!1);
            }
        });
    }, e.prototype.getStorage = function(e, t) {
        wx.getStorage({
            key: e,
            success: function(e) {
                "function" == typeof t && t(e.data);
            },
            fail: function(r) {
                n().w(e + ": " + r.errMsg), "function" == typeof t && t();
            }
        });
    }, e.prototype.removeStorage = function(e, t) {
        wx.removeStorage({
            key: e,
            success: function() {
                "function" == typeof t && t(!0);
            },
            fail: function() {
                "function" == typeof t && t(!1);
            }
        });
    }, e.prototype.getSystemInfo = function(e) {
        wx.getSystemInfo({
            success: function(t) {
                t.safeArea = t.safeArea || {};
                var n = "";
                t.host && "string" == typeof t.host.env && (n = t.host.env);
                var r = {
                    model: t.model,
                    brand: t.brand,
                    pixelRatio: t.pixelRatio,
                    screenWidth: t.screenWidth,
                    screenHeight: t.screenHeight,
                    fontSizeSetting: t.fontSizeSetting,
                    platform: t.platform,
                    platformVersion: t.version,
                    platformSDKVersion: t.SDKVersion,
                    language: t.language,
                    deviceName: t.model,
                    OSVersion: t.system,
                    resolution: "",
                    theme: t.theme,
                    benchmarkLevel: t.benchmarkLevel,
                    safeArea: {
                        width: t.safeArea.width,
                        height: t.safeArea.height,
                        top: t.safeArea.top,
                        left: t.safeArea.left,
                        bottom: t.safeArea.bottom,
                        right: t.safeArea.right
                    },
                    statusBarHeight: t.statusBarHeight,
                    host: n
                }, i = t.system.split(" ");
                Array.isArray(i) && (r.OS = i[0]);
                var o = Math.round(t.screenWidth * t.pixelRatio), s = Math.round(t.screenHeight * t.pixelRatio);
                r.resolution = o > s ? o + "*" + s : s + "*" + o, "function" == typeof e && e(r);
            },
            fail: function() {
                "function" == typeof e && e();
            }
        });
    }, e.prototype.getDeviceInfo = function(e) {
        "function" == typeof e && e("");
    }, e.prototype.checkNetworkAvailable = function(e) {
        wx.getNetworkType({
            success: function(t) {
                "function" == typeof e && e(t && "none" !== t.networkType);
            },
            fail: function() {
                "function" == typeof e && e(!1);
            }
        });
    }, e.prototype.getNetworkInfo = function(e) {
        wx.getNetworkType({
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
    }, e.prototype.getDeviceId = function(e) {
        e("");
    }, e.prototype.getAdvertisingId = function(e) {
        "function" == typeof e && e("");
    }, e.prototype.onNetworkStatusChange = function(e) {
        wx.onNetworkStatusChange(function(t) {
            "function" == typeof e && e(t.isConnected);
        });
    }, e.prototype.request = function(e) {
        var t = e.success, n = e.fail, r = !1, i = null;
        e.success = function(e) {
            r || (i && clearTimeout(i), "function" == typeof t && t(e));
        }, e.fail = function() {
            r || (i && clearTimeout(i), "function" == typeof n && n(!1));
        }, wx.request(e), i = setTimeout(function() {
            i && clearTimeout(i), r = !0, "function" == typeof n && n(r);
        }, e.timeout || 5e3);
    }, e.prototype.getSdkType = function() {
        return "wxmp";
    }, e.prototype.getPlatform = function() {
        return "wx";
    }, e.prototype.getUserInfo = function(e) {
        e();
    }, e.prototype.getAppInfoSync = function() {
        if (wx.getAccountInfoSync) {
            var e = wx.getAccountInfoSync(), t = e && e.miniProgram ? e.miniProgram : {};
            return {
                appId: t.appId,
                appEnv: t.envVersion,
                appVersion: t.version
            };
        }
        return {};
    }, e.prototype.onShareAppMessage = function(e) {
        wx.onShareAppMessage(e);
    }, e.prototype.shareAppMessage = function(e) {
        wx.shareAppMessage(e);
    }, e.prototype.getLaunchOptionsSync = function() {
        var e = null;
        if (e) return e;
        if (!wx.getLaunchOptionsSync) return {};
        try {
            e = wx.getLaunchOptionsSync();
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            e = null;
        }
        return e || {};
    }, e;
}()))(), f = {
    SESSION_INTERVAL: 3e4,
    LOG_URL: "/wxm_logs",
    GET_OPENID_URL: "/uminiprogram_logs/wx/getuut",
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
    IMPL_VERSION: "2.7.5",
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
}, p = function(e) {
    for (var t = "", n = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], r = 0; r < Number(e); r++) t += n[Math.round(Math.random() * (n.length - 1))];
    return t;
}, d = function(e) {
    return JSON.parse(JSON.stringify(e));
}, l = function(e, t) {
    return !(!e || !t || 0 === t.length || t.length > e.length) && e.substr(0, t.length) === t;
}, h = function(e) {
    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
    for (var t = Object(e), n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        if (r) for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
}, g = function t(n, r) {
    if (n === r) return !0;
    if (n && "object" == e(n) && r && "object" == e(r)) {
        if (Object.keys(n).length !== Object.keys(r).length) return !1;
        for (var i in n) {
            if (Object.prototype.hasOwnProperty.call(r, i)) return !1;
            if (!t(n[i], r[i])) return !1;
        }
        return !0;
    }
    return !1;
}, v = function(e, t) {
    if (!e) return "";
    if ("string" == typeof t && t.length) {
        var n = new RegExp("^" + t + "*");
        e = e.replace(n, "");
    } else e = e.replace(/^s*/, "");
    return e;
}, _ = function(e) {
    return "function" == typeof e;
}, y = function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return a(t, e), t.prototype.getOpenIdAsync = function(e, t) {
        var r = this;
        wx.login({
            success: function(i) {
                i.code ? c.request({
                    url: f.ENDPOINT + f.GET_OPENID_URL,
                    method: "GET",
                    data: {
                        key: e,
                        code: i.code
                    },
                    success: function(e) {
                        if (e && 200 === e.statusCode && e.data && e.data.data) {
                            var n = e.data.data;
                            return r.setOpenid(n.oid), r.setUnionid(n.uid), t && t(!0);
                        }
                        t && t();
                    },
                    fail: function(e) {
                        n().v("wx request failed...", e), t && t();
                    }
                }) : t && t();
            },
            fail: function() {
                t && t();
            }
        });
    }, t;
}(function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t._openid = "", t._unionid = "", t._useOpenid = !1, t;
    }
    return a(t, e), t.prototype.initID = function(e) {
        var t = this;
        t._idType = t._useOpenid ? "openid" : "uuid", n().v("id type: ", t._idType), c.getStorage(f.UNIONID, function(e) {
            t._unionid = e;
        }), this._useOpenid ? c.getStorage(f.OPENID, function(n) {
            t._openid = n, e && e();
        }) : e && e();
    }, t.prototype.setUseOpenid = function(e) {
        this._useOpenid = e;
    }, t.prototype.setOpenid = function(e) {
        !this._openid && e && (this._openid = e, c.setStorage(f.OPENID, e));
    }, t.prototype.setUnionid = function(e) {
        !this._unionid && e && (this._unionid = e, c.setStorage(f.UNIONID, e));
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
        return p(10) + Date.now() + p(7) + f.UUID_SUFFIX;
    }, e.prototype.initUUID = function(e) {
        var t = this;
        c.getStorage(f.UUID, function(n) {
            n ? t._uuid = n : (t._uuid = t.createUUID(), c.setStorage(f.UUID, t._uuid)), e && e(n);
        });
    }, e.prototype.initUserid = function() {
        var e = this;
        c.getStorage(f.USERID, function(t) {
            !e._userid && t && (e._userid = t, n().v("userId is ", t));
        }), c.getStorage(f.PROVIDER, function(t) {
            !e._provider && t && (e._provider = t, n().v("provider is ", t));
        });
    }, e.prototype.init = function(e) {
        var t = this;
        t.initUUID(function() {
            t.initUserid(), t.initID(e);
        });
    }, e.prototype.setUserid = function(e, t) {
        !this._userid && e && (this._userid = e, this._provider = t, c.setStorage(f.USERID, e), 
        c.setStorage(f.PROVIDER, t));
    }, e.prototype.removeUserid = function() {
        this._userid = void 0, this._provider = void 0, c.removeStorageSync(f.USERID), c.removeStorageSync(f.PROVIDER);
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
}())), m = (u = null, function() {
    return u || (u = new y()), u;
}), S = function() {
    var e = null;
    function t() {
        var e = !1, t = null, n = [];
        this.addPageStart = function(n) {
            n && !e && (t = {
                ts: Date.now(),
                path: n,
                page_name: n
            }, e = !0);
        }, this.addPageEnd = function(r) {
            if (e && r && t && r === t.page_name) {
                var i = Date.now() - t.ts;
                t.duration = Math.abs(i), n.push(t), t = null, e = !1;
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
}(), I = {}, E = function() {
    var e = null, t = [], r = "";
    function i() {
        return {
            add: function(e, i) {
                n().v("share origin: %o", e);
                var o = {
                    title: e && e.title,
                    path: e && e.path && e.path.split("?")[0],
                    _um_sts: Date.now()
                };
                o.path && o.path.length > 1 && l(o.path, "/") && (o.path = v(o.path, "/"));
                var s = e.path || "", a = m().getId();
                if (a) {
                    var u = r.split(","), c = (u = u.filter(function(e) {
                        return e.length > 0;
                    })).indexOf(a);
                    c >= 0 && (u = u.slice(0, c)), u.length < 3 && u.push(a);
                    var f = u.join(",");
                    -1 !== s.indexOf("?") ? s += "&_um_ssrc=" + f : s += "?_um_ssrc=" + f;
                    var p = Date.now();
                    if (s += "&_um_sts=" + p, i) {
                        var d = function(e) {
                            var t = [];
                            for (var n in e) "_um_ssrc" !== n && "_um_sts" !== n && t.push(n + "=" + e[n]);
                            return t.join("&");
                        }(I), h = d ? d + "&_um_ssrc=" + f + "&_um_sts=" + p : "_um_ssrc=" + f + "&_um_sts=" + p;
                        e.query = e.query ? e.query + "&_um_ssrc=" + f + "&_um_sts=" + p : h;
                    } else e.path = s;
                    o._um_ssrc = f, o._um_sts = p;
                }
                return t.push(o), n().v("share: %o", e), e;
            },
            setShareSource: function(e) {
                r = e;
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
}(), O = function(e) {
    if (e) try {
        return JSON.stringify(e);
    } catch (e) {}
    return "";
}, A = function(e) {
    if (e) try {
        return JSON.parse(e);
    } catch (e) {}
    return null;
}, N = function() {
    var e = null, t = "", n = null, i = !1;
    function o() {
        this.load = function(e) {
            n ? (c.removeStorage(t), e()) : (t = "um_cache_" + r().appKey(), c.getStorage(t, function(r) {
                n = A(r) || {}, i = !0, c.removeStorage(t), e();
            }));
        }, this.save = function() {
            n && c.setStorage(t, O(n));
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
        return e || (e = new o()), e;
    };
}(), T = function() {
    var e, t, r = [], i = [];
    function o(e, n) {
        var r = (e = e || {})[t];
        return Array.isArray(r) && r.length ? e[t] = r.concat(n) : e[t] = [].concat(n), 
        e;
    }
    return function() {
        return e || (e = {
            addEvent: function(e) {
                t ? (r.unshift(e), r.length > 1 && (!function() {
                    if (r.length) {
                        var e = N().get("ekvs");
                        (function(e) {
                            var t = 0;
                            for (var n in e) Array.isArray(e[n]) && (t += e[n].length);
                            return t;
                        })(e) + r.length <= 1e4 && (e = o(e, r), N().set("ekvs", e));
                    }
                }(), r.length = 0)) : (n().w("session id is null: ", t), i.unshift(e));
            },
            setSessionId: function(e) {
                if (t = e, n().v("setSessionId: ", t), Array.isArray(i) && i.length && t) {
                    for (var r = 0; r < i.length; r++) this.addEvent(i[r]);
                    i.length = 0;
                }
            },
            getEkvs: function() {
                var e = N().get("ekvs");
                return r && r.length && (e = o(e, r)), e;
            },
            clear: function() {
                N().remove("ekvs"), r.length = 0;
            }
        }), e;
    };
}(), w = "half_session", k = "close_session", b = [ "access", "access_subtype" ], D = function() {
    var e = null;
    function t() {
        var e = !1, t = {};
        return {
            init: function() {
                !function(e) {
                    var n = N().get(f.IMPRINT);
                    n && (t.imprint = n), t.device_type = "Phone", t.sdk_version = f.IMPL_VERSION, t.appkey = r().appKey(), 
                    c.getDeviceInfo(function(e) {
                        t.device_info = e || "";
                    });
                    var i = c.getAppInfoSync();
                    t.appid = i.appId, t.app_env = i.appEnv, t.app_version = i.appVersion, c.getSystemInfo(function(n) {
                        c.getNetworkInfo(function(r) {
                            var i = function(e, t) {
                                var n = {};
                                (e = e || {}).safeArea = e.safeArea || {};
                                var r = (t = t || {}).networkType;
                                "none" === r && (r = "unknown");
                                var i = e.model || "", o = e.platform || "", s = e.brand || "", a = s.toLowerCase();
                                switch (n.sdk_type = c.getSdkType(), n.platform = c.getPlatform(), n.platform_sdk_version = e.platformSDKVersion, 
                                n.platform_version = e.platformVersion, n.resolution = e.resolution, n.pixel_ratio = e.pixelRatio, 
                                n.os = o, n.font_size_setting = e.fontSizeSetting, n.device_model = i, n.device_brand = s, 
                                n.device_manufacturer = a, n.device_manuid = i, n.device_name = i, n.os_version = e.OSVersion, 
                                n.language = e.language, n.theme = e.theme, n.benchmark_level = e.benchmarkLevel, 
                                n.status_bar_height = e.statusBarHeight, n.safe_area_top = e.safeArea.top, n.safe_area_left = e.safeArea.left, 
                                n.safe_area_right = e.safeArea.right, n.safe_area_bottom = e.safeArea.bottom, n.safe_area_height = e.safeArea.height, 
                                n.safe_area_width = e.safeArea.width, n.storage = e.storage, n.screen_width = e.screenWidth, 
                                n.screen_height = e.screenHeight, n.host = e.host, r = r ? r.toLowerCase() : "") {
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
                                    n.access = r, delete n.access_subtype;
                                }
                                return n;
                            }(n, r);
                            h(t, i), e && e();
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
                return b.forEach(function(n) {
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
}(), U = function() {
    var e = null, t = null, r = null;
    return function() {
        return e || (e = {
            resume: function(e) {
                var i = !1;
                r || (r = N().get(f.CURRENT_SESSION));
                var o = new Date();
                return t = o.getTime(), !r || !r.end_time || t - r.end_time > f.SESSION_INTERVAL ? (i = !0, 
                function(e) {
                    try {
                        var t = (r || {}).options || {}, i = h({}, function(e) {
                            var t = {};
                            for (var r in e) 0 === r.indexOf("_um_") && (t[r] = e[r]);
                            return n().v("query: ", e), n().v("_um_params: ", t), t;
                        }(e.query));
                        i.path = e.path || t.path, "gaode" !== c.getPlatform() && (i.scene = e.scene ? c.getPlatform() + "_" + e.scene : t.scene);
                        var o = e.referrerInfo;
                        o && (i.referrerAppId = o.appId), n().v("session options: ", i);
                        var s = i[f.UM_SSRC];
                        s && E().setShareSource(s);
                        var a = Date.now();
                        r = {
                            id: p(10) + a,
                            start_time: a,
                            options: i
                        };
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        n().e("生成新session失败: ", e);
                    }
                }(e), n().v("开始新的session(%s): ", r.id, r)) : n().v("延续上一次session(%s): %s ", r.id, o.toLocaleTimeString(), r), 
                i;
            },
            pause: function() {
                !function() {
                    if (r) {
                        var e = new Date();
                        r.end_time = e.getTime(), "number" != typeof r.duration && (r.duration = 0), r.duration = r.end_time - t, 
                        N().set(f.CURRENT_SESSION, r), n().v("退出会话(%s): %s ", r.id, e.toLocaleTimeString(), r);
                    }
                }();
            },
            getCurrentSessionId: function() {
                return (r || {}).id;
            },
            getCurrentSession: function() {
                return r;
            },
            cloneCurrentSession: function() {
                return d(r);
            }
        }), e;
    };
}();

var R = {
    sessions: "sn",
    ekvs: "e",
    active_user: "active_user"
}, P = {
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
}, L = {
    uuid: "ud",
    unionid: "und",
    openid: "od",
    anonymousid: "nd",
    alipay_id: "ad",
    device_id: "dd",
    userid: "puid"
};

function C(e, t) {
    var n = x(e, t);
    return e && e.id_tracking && (n[t.id_tracking || "id_tracking"] = x(e.id_tracking, L)), 
    n;
}

function x(e, t) {
    var n = {};
    for (var r in e) t[r] ? n[t[r]] = e[r] : n[r] = e[r];
    return n;
}

function M(e, t) {
    var n = {};
    if (e) for (var r in e) e[r] && (n[t[r]] = e[r]);
    return n;
}

var V = "";

function j() {
    return V;
}

var G = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", F = function(e) {
    for (var t = {}, n = 0, r = e.length; n < r; n++) t[e.charAt(n)] = n;
    return t;
}(G), q = String.fromCharCode, K = function(e) {
    if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? q(192 | t >>> 6) + q(128 | 63 & t) : q(224 | t >>> 12 & 15) + q(128 | t >>> 6 & 63) + q(128 | 63 & t);
    var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
    return q(240 | t >>> 18 & 7) + q(128 | t >>> 12 & 63) + q(128 | t >>> 6 & 63) + q(128 | 63 & t);
}, H = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, Y = function(e) {
    var t = [ 0, 2, 1 ][e.length % 3], n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
    return [ G.charAt(n >>> 18), G.charAt(n >>> 12 & 63), t >= 2 ? "=" : G.charAt(n >>> 6 & 63), t >= 1 ? "=" : G.charAt(63 & n) ].join("");
}, J = function(e) {
    return function(e) {
        return e.replace(H, K);
    }(e).replace(/[\s\S]{1,3}/g, Y);
}, B = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), X = function(e) {
    switch (e.length) {
      case 4:
        var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
        return q(55296 + (t >>> 10)) + q(56320 + (1023 & t));

      case 3:
        return q((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

      default:
        return q((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
    }
}, z = function(e) {
    var t = e.length, n = t % 4, r = (t > 0 ? F[e.charAt(0)] << 18 : 0) | (t > 1 ? F[e.charAt(1)] << 12 : 0) | (t > 2 ? F[e.charAt(2)] << 6 : 0) | (t > 3 ? F[e.charAt(3)] : 0), i = [ q(r >>> 16), q(r >>> 8 & 255), q(255 & r) ];
    return i.length -= [ 0, 0, 2, 1 ][n], i.join("");
}, Q = function(e) {
    return function(e) {
        return function(e) {
            return e.replace(/[\s\S]{1,4}/g, z);
        }(e).replace(B, X);
    }(String(e).replace(/[-_]/g, function(e) {
        return "-" == e ? "+" : "/";
    }).replace(/[^A-Za-z0-9\+\/]/g, ""));
}, W = new function() {
    var e = "", t = this;
    this.set = function(t) {
        e = t;
    }, this.get = function() {
        return e;
    }, this.getImpObj = function() {
        return A(Q(e));
    }, this.getItem = function(e) {
        var n = t.getImpObj();
        return n && n[e] || "";
    }, this.load = function() {
        e = N().get(f.IMPRINT);
    }, this.save = function() {
        e && N().set(f.IMPRINT, e);
    };
}();

function Z(e, t, r, i) {
    D.instance().setIdType(m().getIdType()), D.instance().setIdTracking(m().getIdTracking());
    var o = m().getUserId();
    o && e.analytics && (e.analytics.active_user = {
        puid: o,
        provider: m().getProvider()
    });
    var s = d(D.instance().get());
    e.header = h(s, e.header, {
        ts: Date.now(),
        testToken: j(),
        traceId: p(10) + Date.now() + p(9)
    });
    var a = function(e) {
        return {
            h: C(e.header, P),
            a: M(e.analytics, R)
        };
    }(e), u = O(a), l = {
        url: f.ENDPOINT + f.LOG_URL,
        method: "POST",
        data: a,
        success: function(i) {
            var o = i.code || i.status || i.statusCode;
            200 === o || 413 === o ? (n().i("数据发送成功: ", e, u), function(e) {
                e && (D.instance().setItem(f.IMPRINT, e), W.set(e), W.save(), n().v("imprint: ", W.getImpObj()), 
                W.getItem("ttn_invalid") && (V = ""));
            }((i.data || {}).imprint), "function" == typeof t && t(i)) : (n().w("数据发送失败: ", u), 
            "function" == typeof r && r());
        },
        fail: function(e) {
            n().w("超时: ", u), "function" == typeof r && r();
        },
        complete: function() {
            "function" == typeof i && i();
        }
    };
    c.request(h(l, {
        header: {
            "Msg-Type": c.getSdkType() + "/json",
            "disable-base64": "Y"
        }
    }));
}

function $(e) {
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
}

var ee = function() {
    var e = null, t = !1, r = [], i = new $(50);
    function o(e, t, n) {
        if (D.instance().isLoaded()) {
            t = t || {};
            var r = function(e) {
                var t = null;
                switch (e) {
                  case w:
                    t = function() {
                        var e = null, t = U().cloneCurrentSession();
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

                  case k:
                    t = function() {
                        var e = null, t = {}, n = U().cloneCurrentSession();
                        if (n) {
                            var r = S().get(), i = E().get();
                            Array.isArray(r) && r.length && (n.pages = d(r)), Array.isArray(i) && i.length && (n.shares = d(i)), 
                            S().clear(), E().clear(), t.sessions = [ n ];
                        }
                        var o = T().getEkvs();
                        return o && (t.ekvs = d(o), T().clear()), (t.sessions || t.ekvs) && (e = {
                            analytics: t
                        }), e;
                    }();
                    break;

                  case "ekv":
                    t = function() {
                        var e = null, t = T().getEkvs();
                        return t && (e = {
                            analytics: {
                                ekvs: d(t)
                            }
                        }, T().clear()), e;
                    }();
                }
                return t;
            }(e);
            if (r) {
                var s = D.instance().getRealtimeFields();
                r.header = h({}, r.header, s), r.noCache = t.noCache, i.enqueue(r);
            }
            "function" == typeof n && n();
        } else setTimeout(function() {
            o(e, t, n);
        }, 100);
    }
    function s(e) {
        m().getId() ? t ? n().i("队列正在发送中") : (t = !0, function e(t) {
            var n = i.front();
            n ? Z(n, function() {
                i.dequeue(), e(t);
            }, function() {
                var n = i.dequeue();
                n && !n.noCache && r.push(n), e(t);
            }) : (r.forEach(function(e) {
                i.enqueue(e);
            }), r.length = 0, t());
        }(function() {
            t = !1, "function" == typeof e && e();
        })) : (n().i("获取id标识失败，暂缓发送"), "function" == typeof e && e());
    }
    function a() {
        this.send = function(e, t, n) {
            e ? this.add(e, t, function() {
                s(n);
            }) : s(n);
        }, this.add = function(e, t, n) {
            o(e, t, n);
        }, this.load = function() {
            var e = N().get(f.REQUESTS);
            e && e.length && e.forEach(function(e) {
                i.enqueue(e);
            }), N().remove(f.REQUESTS);
        }, this.save = function() {
            N().set(f.REQUESTS, d(i.items())), i.clear();
        };
    }
    return function() {
        return e || (e = new a()), e;
    };
}(), te = function() {
    var t = null, i = null;
    function o() {
        function t(t) {
            if (t && "object" == e(t)) {
                var i = N().get(f.USER_INFO);
                return i && g(t, i) || function(e, t) {
                    var i = r().appKey(), o = c.getSdkType(), s = m().getId(), a = m().getIdType();
                    if (i && o && s && a) {
                        var u = {
                            ak: r().appKey(),
                            sdt: c.getSdkType(),
                            uin: e.nickName,
                            uia: e.avatar || e.avatarUrl,
                            uig: e.gender,
                            uit: e.country,
                            uip: e.province,
                            uic: e.city,
                            uil: e.language,
                            id: m().getId(),
                            it: m().getIdType(),
                            age: e.age,
                            cln: e.constellation
                        }, p = JSON.stringify(u);
                        p = function(e, t) {
                            return t ? J(String(e)).replace(/[+\/]/g, function(e) {
                                return "+" == e ? "-" : "_";
                            }).replace(/=/g, "") : J(String(e));
                        }(p), c.request({
                            url: f.ENDPOINT + f.USERINFO_URL,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: "ui=" + p,
                            success: function(r) {
                                n().v("用户信息上传成功: ", e), t && t(r && r.data && 200 === r.data.code);
                            },
                            fail: function() {
                                n().e("用户信息上传失败: ", e), t && t(!1);
                            }
                        });
                    }
                }(t, function(e) {
                    e && N().set(f.USER_INFO, t);
                }), !0;
            }
            return !1;
        }
        this.setUserInfo = function(e) {
            i = e;
        }, this.update = function() {
            t(i) || c.getUserInfo(function(e) {
                t(e);
            });
        };
    }
    return function() {
        return t || (t = new o()), t;
    };
}();

function ne(t, n) {
    this.id = t, this.ts = Date.now();
    var r = e(n);
    if ("string" === r && n) this[t] = n; else if ("object" === r) for (var i in n) ({}).hasOwnProperty.call(n, i) && (this[i] = n[i]);
}

function re() {
    var t = !1, i = !1, o = 0;
    this.init = function(e) {
        n().v("sdk version: " + f.IMPL_VERSION), t ? n().v("Lib重复实例化") : N().load(function() {
            n().v("cache初始化成功: ", N().getAll()), m().setUseOpenid && m().setUseOpenid(r().useOpenid()), 
            m().init(function() {
                D.instance().init(), n().v("Header初始化成功");
            }), t = !0, "function" == typeof e && e(), n().tip("SDK集成成功");
        });
    }, this.resume = function(e) {
        var o;
        t && !i && (n().v("showOptions: ", e), i = !0, r().enableVerify() && e && e.query && (o = e.query._ttn, 
        V = o || V), this._resume(e));
    }, this._resume = function(e) {
        ee().load();
        var t = U().resume(e), i = U().getCurrentSessionId();
        T().setSessionId(i), t && ee().add(w, {}, function() {
            m().setUseOpenid && m().setUseOpenid(r().useOpenid()), r().useOpenid() && r().autoGetOpenid() && !m().getId() ? (n().v("get id async"), 
            function e(t, i) {
                m().getId() || t <= 0 || m().getOpenIdAsync(r().appKey(), function(r) {
                    r ? (n().v("获取id成功"), ee().send()) : (n().v("获取openid失败,启动重试,剩余可用次数", t - 1), setTimeout(function() {
                        e(t - 1, i);
                    }, i));
                });
            }(10, 3e3)) : (n().v("session auto send"), ee().send());
        });
    }, this.pause = function(e) {
        t && (i = !1, o = 0, U().pause(), r().uploadUserInfo() && te().update(), ee().send(k, {}, function() {
            ee().save(), N().save(), n().v("cache save success"), "function" == typeof e && e();
        }));
    }, this.setOpenid = function(e) {
        n().v("setOpenId: %s", e), m().setOpenid(e), ee().send();
    }, this.setUnionid = function(e) {
        n().v("setUnionid: %s", e), m().setUnionid(e);
    }, this.setUserid = function(e, t) {
        n().v("setUserid: %s", e, t), m().setUserid(e, t);
    }, this.removeUserid = function() {
        n().v("removeUserid"), m().removeUserid();
    }, this.setUserInfo = function(e) {
        n().v("setUserInfo: %s", e), te().setUserInfo(e);
    }, this.setAnonymousid = function(e) {
        n().v("setAnonymousId: %s", e), m().setAnonymousid(e), ee().send();
    }, this.setAppVersion = function(e) {
        e && "string" != typeof e ? n().w("setAppVersion方法只接受字符串类型参数") : D.instance().setAppVersion(e);
    }, this.setAlipayUserid = function(e) {
        e && "string" != typeof e ? n().w("setAlipayUserid方法只接受字符串类型参数") : (n().v("setAlipayUserid: %s", e), 
        m().setAlipayUserid(e));
    }, this.setDeviceId = function(e) {
        if ("string" == typeof e) return m().setDeviceId(e), e;
    }, this.setSuperProperty = function(e) {
        if (e && "string" != typeof e) n().w("超级属性只支持字符串类型"); else {
            var t = this;
            D.instance().getSuperProperty() !== e && (D.instance().setSuperProperty(e), t.pause(function() {
                t.resume();
            }));
        }
    }, this.trackEvent = function(r, i) {
        if (t && (n().v("event: ", r, i), function(t, r) {
            if (!t || "string" != typeof t) return n().e('please check trackEvent id. id should be "string" and not null'), 
            !1;
            var i = [ "id", "ts", "du" ], o = {};
            if (i.forEach(function(e) {
                o[e] = 1;
            }), o[t]) return n().e("eventId不能与以下保留字冲突: " + i.join(",")), !1;
            if (t.length > f.MAX_EVENTID_LENGTH) return n().e("The maximum length of event id shall not exceed " + f.MAX_EVENTID_LENGTH), 
            !1;
            if (r && ("object" != e(r) || Array.isArray(r)) && "string" != typeof r) return n().e("please check trackEvent properties. properties should be string or object(not include Array)"), 
            !1;
            if ("object" == e(r)) {
                var s = 0;
                for (var a in r) if ({}.hasOwnProperty.call(r, a)) {
                    if (a.length > f.MAX_PROPERTY_KEY_LENGTH) return n().e("The maximum length of property key shall not exceed " + f.MAX_PROPERTY_KEY_LENGTH), 
                    !1;
                    if (s >= f.MAX_PROPERTY_KEYS_COUNT) return n().e("The maximum count of properties shall not exceed " + f.MAX_PROPERTY_KEYS_COUNT), 
                    !1;
                    if (o[a]) return n().e("属性中的key不能与以下保留字冲突: " + i.join(",")), !1;
                    s += 1;
                }
            }
            return !0;
        }(r, i))) {
            var s = new ne(r, i);
            T().addEvent(s);
            var a = !!j(), u = a ? 0 : f.EVENT_SEND_DEFAULT_INTERVAL, c = Date.now();
            (function(e, t) {
                return "number" != typeof o || "number" != typeof t || o <= 0 || e - o > t;
            })(c, u) && (o = c, ee().send("ekv", {
                noCache: a
            }, function() {}));
        }
    }, this.trackShare = function(e) {
        if (t) try {
            c.getSdkType().indexOf("game") > -1 ? (e = E().add(e, !0), n().v("shareQuery: ", e)) : (e = E().add(e, !1), 
            n().v("sharePath: ", e.path));
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            n().v("shareAppMessage: ", e);
        }
        return e;
    }, this.trackPageStart = function(e) {
        t && S().addPageStart(e);
    }, this.trackPageEnd = function(e) {
        t && S().addPageEnd(e);
    }, this.onShareAppMessage = function(e) {
        var t = this;
        c.onShareAppMessage(function() {
            return t.trackShare(e());
        });
    }, this.shareAppMessage = function(e) {
        this.trackShare(e), c.shareAppMessage(e);
    };
}

var ie = [];

function oe() {}

oe.prototype = {
    createMethod: function(e, t, r) {
        try {
            e[t] = r && r[t] ? function() {
                return r[t].apply(r, arguments);
            } : function() {
                ie.push([ t, [].slice.call(arguments) ]);
            };
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            n().v("create method errror: ", e);
        }
    },
    installApi: function(e, t) {
        try {
            var r, i, o = "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setUnionid,onShareAppMessage,shareAppMessage".split(",");
            for (r = 0, i = o.length; r < i; r++) this.createMethod(e, o[r], t);
            if (t) for (r = 0, i = ie.length; r < i; r++) {
                var s = ie[r];
                try {
                    t[s[0]].apply(t, s[1]);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    n().v("impl[v[0]].apply error: ", s[0], e);
                }
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            n().v("install api errror: ", e);
        }
    }
};

var se = [ f.ENDPOINT, f.ENDPOINTB ];

var ae = function(e) {
    f.ENDPOINTB && setTimeout(function() {
        !function e(t, r) {
            var i, o;
            if (0 === t || 1 === t && r ? i = f.ENDPOINT : 2 === t && r ? i = f.ENDPOINTB : r && (i = se[t]), 
            t >= se.length || r) return r && (o = i, f.ENDPOINT = o), r && n().v("命中可用服务", i), 
            !r && n().tip_w("未命中可用服务"), !1;
            c.request({
                url: f.ENDPOINT + "/uminiprogram_logs/ckdh",
                success: function(n) {
                    200 === (n.code || n.status || n.statusCode) && n.data && 200 === n.data.code ? e(t + 1, !0) : e(t + 1, !1);
                },
                fail: function() {
                    e(t + 1, !1);
                }
            });
        }(0, !1);
    }, e);
}, ue = new oe(), ce = {
    _inited: !1,
    _log: n(),
    preinit: function(t) {
        if (t && "object" == e(t)) for (var n in t) f[n] = t[n];
        return f;
    },
    use: function(e, t) {
        return e && _(e.install) ? e.install(ce, t) : _(e) && e(ce, t), ce;
    },
    messager: o,
    init: function(e) {
        if (this._inited) n().v("已经实例过，请避免重复初始化"); else if (e) if (e.appKey) {
            "boolean" != typeof e.useOpenid && (e.useOpenid = !0), r().set(e), n().setDebug(e.debug), 
            this._inited = !0;
            var t = this;
            o.emit(o.messageType.CONFIG_LOADED, e);
            try {
                var i = new re();
                n().v("成功创建Lib对象"), i.init(function() {
                    n().v("Lib对象初始化成功"), ue.installApi(t, i), n().v("安装Lib接口成功"), o.emit(o.messageType.UMA_LIB_INITED, e);
                }), ae(3e3);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                n().w("创建Lib对象异常: " + e);
            }
        } else n().err("请确保传入正确的appkey"); else n().err("请正确设置相关信息！");
    }
};

try {
    ue.installApi(ce, null);
} catch (t) {
    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
    n().w("uma赋值异常: ", t);
}

var fe = {}, pe = Array.isArray;

fe.isArray = pe || function(e) {
    return "[object Array]" === toString.call(e);
}, fe.isObject = function(e) {
    return e === Object(e) && !fe.isArray(e);
}, fe.isEmptyObject = function(e) {
    if (fe.isObject(e)) {
        for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
        return !0;
    }
    return !1;
}, fe.isUndefined = function(e) {
    return void 0 === e;
}, fe.isString = function(e) {
    return "[object String]" === toString.call(e);
}, fe.isDate = function(e) {
    return "[object Date]" === toString.call(e);
}, fe.isNumber = function(e) {
    return "[object Number]" === toString.call(e);
}, fe.each = function(e, t, n) {
    if (null != e) {
        var r = {}, i = Array.prototype.forEach;
        if (i && e.forEach === i) e.forEach(t, n); else if (e.length === +e.length) {
            for (var o = 0, s = e.length; o < s; o++) if (o in e && t.call(n, e[o], o, e) === r) return;
        } else for (var a in e) if (hasOwnProperty.call(e, a) && t.call(n, e[a], a, e) === r) return;
    }
}, fe.buildQuery = function(e, t) {
    var n, r, i = [];
    return void 0 === t && (t = "&"), fe.each(e, function(e, t) {
        n = encodeURIComponent(e.toString()), r = encodeURIComponent(t), i[i.length] = r + "=" + n;
    }), i.join(t);
}, fe.JSONDecode = function(e) {
    if (e) {
        try {
            return JSON.parse(e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.error("JSONDecode error", e);
        }
        return null;
    }
}, fe.JSONEncode = function(e) {
    try {
        return JSON.stringify(e);
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        console.error("JSONEncode error", e);
    }
};

var de = Object.create(null);

function le(e) {
    n().v("开始构建 fetch body"), c.getSystemInfo(function(t) {
        c.getNetworkInfo(function(n) {
            var i = (n = n || {}).networkType;
            i = "none" === i ? "unknown" : i.toUpperCase(), de.access = i, function(e, t) {
                var n = e.brand || "";
                if (de.deviceType = "Phone", de.sdkVersion = "2.7.5", de.appkey = r().appKey(), 
                de.sdkType = c.getSdkType(), de.umid = m().getId(), e) {
                    de.language = e.language || "", de.os = e.OS, de.osVersion = e.OSVersion, de.deviceName = e.deviceName, 
                    de.platformVersion = e.platformVersion, de.platformSdkVersion = e.platformSDKVersion, 
                    de.deviceBrand = n;
                    var i = e.resolution.split("*");
                    fe.isArray(i) && (de.resolutionHeight = Number(i[0]), de.resolutionWidth = Number(i[1]));
                }
                !function(e) {
                    e && (de.installTime = e.install_datetime && Date.parse(e.install_datetime), de.scene = e.install_scene, 
                    de.channel = e.install_channel, de.campaign = e.install_campaign);
                }(W.getImpObj()), t && t(de);
            }(t, e);
        });
    });
}

var he = Object.create(null), ge = null, ve = !1, _e = {
    minFetchIntervalSeconds: 43200
};

function ye(e) {
    e && fe.each(e, function(e) {
        he[e.k] = e;
    });
}

function me() {
    var e = this;
    this.STORAGE_NAME = null, o.once(o.messageType.CONFIG_LOADED, function(t) {
        n().v("云配初始化开始..."), e.init(t);
    });
}

me.prototype = {
    setDefaultValues: function(e) {
        ve && fe.isObject(e) && fe.each(e, function(e, t) {
            he[t] && he[t].v || (he[t] = {
                v: e
            });
        });
    },
    getValue: function(e) {
        n().v("从配置项中读取 value, 当前配置为: ", he), n().v("待读取的 key : ", e);
        try {
            if (!ve) return;
            var t = he[e] || {};
            return n().v("读取相应配置ing..., 结果为: ", t), fe.isNumber(t.e) && fe.isNumber(t.g) && (n().v("读取到相应配置, 开始数据上报..."), 
            function(e) {
                var t = {
                    appkey: r().appKey(),
                    sdkType: c.getSdkType(),
                    expId: e && e.e,
                    groupId: e && e.g,
                    clientTs: Date.now(),
                    key: e && e.k,
                    value: e && e.v,
                    umid: m().getId()
                };
                try {
                    c.request({
                        url: "https://pslog.umeng.com/mini_ablog",
                        method: "POST",
                        data: [ t ],
                        success: function(e) {
                            e && 200 === e.statusCode ? n().v("上传数据成功", t) : n().w("ablog 请求成功, 返回结果异常 ", e);
                        },
                        fail: function(e) {
                            n().w("ablog 请求数据错误 ", t, e);
                        }
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    n().w("urequest 调用错误", e);
                }
            }(t)), t.v;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            n().w("getValue error, key: ", e);
        }
    },
    active: function(e) {
        try {
            if (!ve) return;
            var t, r;
            e && e.params && (t = e.params), e && e.callback && (r = e.callback), n().v("激活配置项: ", t), 
            t ? (n().v("本地已缓存的配置项: ", he), ye(t), n().v("合并后的配置项: ", he), r && r(he), n().v("active 结束")) : (n().v("配置项为空!! 读取本地配置..."), 
            c.getStorage(this.STORAGE_NAME, function(e) {
                e ? (ye((e = fe.JSONDecode(e) || {}).params), n().v("当前本地配置项为: ", he), r && r(he), 
                n().v("active 结束")) : n().v("当前本地配置项为空, 退出激活");
            }));
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            n().w("SDK active 错误", e);
        }
    },
    init: function(e) {
        e.appKey && (ge = e.appKey, this.STORAGE_NAME = "um_remote_config_{{" + ge + "}}"), 
        ge ? ve ? n().w("SDK 已经初始化, 请避免重复初始化") : (ve = !0, this.setOptions(e), this.active()) : n().err("请检查您的小程序 appKey, appKey 不能为空");
    },
    setOptions: function(e) {
        if (fe.isObject(e)) {
            var t = e.minFetchIntervalSeconds;
            fe.isNumber(t) && (_e.minFetchIntervalSeconds = Math.max(t, 5));
        }
    },
    fetch: function(e) {
        if (ve && this.STORAGE_NAME) {
            var t, r;
            e && e.active && (t = e.active), e && e.callback && (r = e.callback);
            var i = this;
            c.getStorage(this.STORAGE_NAME, function(e) {
                n().v("开始读缓存 data is ", e), (e = fe.JSONDecode(e) || {}).params && e.ts && Date.now() - e.ts < 1e3 * _e.minFetchIntervalSeconds ? (n().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch"), 
                r && r(e.params)) : le(function(e) {
                    n().v("缓存数据不存在, 构建 fetch body :", e);
                    try {
                        c.request({
                            url: "https://ucc.umeng.com/v1/mini/fetch",
                            method: "POST",
                            data: e,
                            success: function(e) {
                                if (e && 200 === e.statusCode && e.data && e.data.cc) {
                                    n().v("fetch 请求成功, 响应数据: ", e.data);
                                    var o = Object.create(null);
                                    fe.each(e.data.cc, function(e) {
                                        o[e.k] = e;
                                    });
                                    var s = {
                                        ts: Date.now(),
                                        params: o
                                    };
                                    n().v("开始缓存 fetch 请求的云配置结果..."), c.setStorage(i.STORAGE_NAME, fe.JSONEncode(s), function(e) {
                                        n().v("缓存云配置成功, 缓存数据为: ", s), n().v("缓存云配置成功, 成功消息为: ", e), n().v("云配拉取数据是否自动激活: ", t), 
                                        e && t && (n().v("激活云配置..."), i.active({
                                            params: o,
                                            callback: r
                                        }));
                                    });
                                } else n().w("fetch 请求成功,返回结果异常 ", e.data), r && r();
                            },
                            fail: function(t) {
                                n().w("fetch请求数据错误 ", e, t), r && r();
                            }
                        });
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        n().w("urequest调用错误", e);
                    }
                });
            });
        }
    }
};

var Se = {
    install: function(e, t) {
        return e.rc || (e.rc = new me()), e.messager.once(e.messager.messageType.CONFIG_LOADED, function() {
            e._log.v("plugin rc installed");
        }), e.rc;
    }
}, Ie = "_um", Ee = "revenue", Oe = "stage", Ae = "level", Ne = "running", Te = "end", we = "init", ke = "set", be = [ Ie, Oe, "start" ].join(".");

function De(t) {
    var n = {};
    for (var r in t) {
        var i = t[r];
        if ("object" == e(i)) for (var o in i) n[r + "." + o] = i[o]; else n[r] = i;
    }
    return n;
}

var Ue = {
    install: function(e, t) {
        e.revenue = function(t) {
            e.trackEvent([ Ie, Ee, t.group ].join("."), De(t));
        };
        var n = 0;
        return e.stage = {
            onStart: function(t) {
                n = Date.now(), e.trackEvent(be, De(t));
            },
            onEnd: function(t) {
                "number" != typeof t._um_sdu && (t._um_sdu = 0 !== n ? Date.now() - n : 0), e.trackEvent([ Ie, Oe, Te, t.event ].join("."), De(t));
            },
            onRunning: function(t) {
                e.trackEvent([ Ie, Oe, Ne, t.event ].join("."), De(t));
            }
        }, e.level = {
            onInitLevel: function(t) {
                e.trackEvent([ Ie, Ae, we ].join("."), De(t));
            },
            onSetLevel: function(t) {
                e.trackEvent([ Ie, Ae, ke ].join("."), De(t));
            }
        }, e.messager.once(e.messager.messageType.CONFIG_LOADED, function() {
            e._log.v("plugin game-ext installed");
        }), e;
    }
};

wx.onShow(function(e) {
    var t;
    n().v("game onShow: ", e), t = e.query, I = t, ce.resume(e, !0);
}), wx.onHide(function() {
    n().v("game onHide"), ce.pause();
});

var Re = ce.init;

ce.init = function(e) {
    e && e.useOpenid && (n().tip_w(n().repeat("!")), n().tip_w("您选择了使用openid进行统计，请确保使用setOpenid回传openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取"), 
    n().tip_w(n().repeat("!"))), Re.call(ce, e);
}, ce.use(Se), ce.use(Ue), wx.uma = ce, module.exports = ce;