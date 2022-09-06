var e, t = require("../../../../../../@babel/runtime/helpers/typeof");

e = function() {
    return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0 !== this ? this : {};
}.call(void 0), function() {
    if (void 0 !== window.wx) {
        var e = function() {
            this.setDebug = function(e) {
                N = e;
            }, this.d = function() {
                if (N) try {
                    "string" == typeof arguments[0] && (arguments[0] = R + arguments[0]), console.debug.apply(console, arguments);
                } catch (e) {}
            }, this.i = function() {
                try {
                    if (N) try {
                        "string" == typeof arguments[0] && (arguments[0] = R + arguments[0]), console.info.apply(console, arguments);
                    } catch (e) {}
                } catch (e) {}
            }, this.e = function() {
                if (N) try {
                    "string" == typeof arguments[0] && (arguments[0] = R + arguments[0]), console.error.apply(console, arguments);
                } catch (e) {}
            }, this.w = function() {
                if (N) try {
                    "string" == typeof arguments[0] && (arguments[0] = R + arguments[0]), console.warn.apply(console, arguments);
                } catch (e) {}
            }, this.v = function() {
                if (N) try {
                    "string" == typeof arguments[0] && (arguments[0] = R + arguments[0]), console.log.apply(console, arguments);
                } catch (e) {}
            }, this.t = function() {
                if (N) try {
                    console.table.apply(console, arguments);
                } catch (e) {}
            }, this.tip = function() {
                try {
                    "string" == typeof arguments[0] && (arguments[0] = R + arguments[0]), console.log.apply(console, arguments);
                } catch (e) {}
            }, this.tip_w = function(e) {
                try {
                    console.log("%c " + R + e, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;");
                } catch (e) {}
            }, this.err = function() {
                try {
                    "string" == typeof arguments[0] && (arguments[0] = R + arguments[0]), console.error.apply(console, arguments);
                } catch (e) {}
            };
        }, n = function(e, t) {
            function n() {
                this.constructor = e;
            }
            U(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
            new n());
        }, i = function() {
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
        }, r = function() {
            this.load = function(e) {
                q ? (D.removeStorage(F), e()) : (F = "um_cache_" + C().appKey(), D.getStorage(F, function(t) {
                    q = Y.parse(t) || {}, H = !0, D.removeStorage(F), e();
                }));
            }, this.save = function() {
                q && D.setStorage(F, Y.stringify(q));
            }, this.set = function(e, t) {
                q && (q[e] = t);
            }, this.get = function(e) {
                return (q || {})[e];
            }, this.remove = function(e) {
                q && q[e] && delete q[e];
            }, this.getAll = function() {
                return q;
            }, this.clear = function() {
                q = null;
            }, this.has = function(e) {
                return !!this.get(e);
            }, this.isLoaded = function() {
                return H;
            };
        }, o = function(e) {
            if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? X(192 | t >>> 6) + X(128 | 63 & t) : X(224 | t >>> 12 & 15) + X(128 | t >>> 6 & 63) + X(128 | 63 & t);
            var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
            return X(240 | t >>> 18 & 7) + X(128 | t >>> 12 & 63) + X(128 | t >>> 6 & 63) + X(128 | 63 & t);
        }, s = function(e) {
            var t = [ 0, 2, 1 ][e.length % 3];
            return e = e.charCodeAt(0) << 16 | (1 < e.length ? e.charCodeAt(1) : 0) << 8 | (2 < e.length ? e.charCodeAt(2) : 0), 
            [ J.charAt(e >>> 18), J.charAt(e >>> 12 & 63), 2 <= t ? "=" : J.charAt(e >>> 6 & 63), 1 <= t ? "=" : J.charAt(63 & e) ].join("");
        }, a = function(e) {
            return e.replace(z, o).replace(/[\s\S]{1,3}/g, s);
        }, u = function(e) {
            switch (e.length) {
              case 4:
                var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                return X(55296 + (t >>> 10)) + X(56320 + (1023 & t));

              case 3:
                return X((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

              default:
                return X((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
            }
        }, c = function(e) {
            var t = e.length, n = t % 4;
            return e = (0 < t ? B[e.charAt(0)] << 18 : 0) | (1 < t ? B[e.charAt(1)] << 12 : 0) | (2 < t ? B[e.charAt(2)] << 6 : 0) | (3 < t ? B[e.charAt(3)] : 0), 
            (e = [ X(e >>> 16), X(e >>> 8 & 255), X(255 & e) ]).length -= [ 0, 0, 2, 1 ][n], 
            e.join("");
        }, f = function() {
            this.listeners = {}, this.maxListener = 2;
        }, p = function(e) {
            e && j.each(e, function(e) {
                ie[e.k] = e;
            });
        }, d = function() {
            var e = this;
            this.STORAGE_NAME = null, te.on(ne, function(t) {
                b().v("云配初始化开始..."), e.init(t);
            });
        }, l = function() {
            var e = !1, t = null, n = [];
            this.addPageStart = function(n) {
                n && !e && (t = {
                    ts: Date.now(),
                    path: n,
                    page_name: n
                }, e = !0);
            }, this.addPageEnd = function(i) {
                e && i && t && i === t.page_name && (i = Date.now() - t.ts, t.duration = Math.abs(i), 
                n.push(t), t = null, e = !1);
            }, this.get = function() {
                return n;
            }, this.getCurrentPage = function() {
                return t;
            }, this.clear = function() {
                n.length = 0;
            };
        }, h = function() {
            return {
                add: function(e, t) {
                    b().v("share origin: %o", e);
                    var n = {
                        title: e && e.title,
                        path: e && e.path && e.path.split("?")[0],
                        _um_sts: Date.now()
                    };
                    n.path && 1 < n.path.length && P.startsWith(n.path, "/") && (n.path = P.trimStart(n.path, "/"));
                    var i = e.path || "", r = M().getId();
                    if (r) {
                        var o = fe.split(","), s = (o = o.filter(function(e) {
                            return 0 < e.length;
                        })).indexOf(r);
                        0 <= s && (o = o.slice(0, s)), o.length < 3 && o.push(r), r = o.join(","), -1 !== i.indexOf("?") ? i += "&_um_ssrc=" + r : i += "?_um_ssrc=" + r, 
                        i += "&_um_sts=" + (o = Date.now()), t ? (t = (t = function(e) {
                            var t, n = [];
                            for (t in e) "_um_ssrc" !== t && "_um_sts" !== t && n.push(t + "=" + e[t]);
                            return n.join("&");
                        }(Ae)) ? t + "&_um_ssrc=" + r + "&_um_sts=" + o : "_um_ssrc=" + r + "&_um_sts=" + o, 
                        e.query = e.query ? e.query + "&_um_ssrc=" + r + "&_um_sts=" + o : t) : e.path = i, 
                        n._um_ssrc = r, n._um_sts = o;
                    }
                    return ce.push(n), b().v("share: %o", e), e;
                },
                setShareSource: function(e) {
                    fe = e;
                },
                clear: function() {
                    ce.length = 0;
                },
                get: function() {
                    return ce;
                }
            };
        }, g = function(e, t) {
            var n = (e = e || {})[de];
            return Array.isArray(n) && n.length ? e[de] = n.concat(t) : e[de] = [].concat(t), 
            e;
        }, y = function() {
            var e = !1, t = {};
            return {
                init: function() {
                    !function(e) {
                        var n = W().get(L.IMPRINT);
                        n && (t.imprint = n), t.device_type = "Phone", t.sdk_version = L.IMPL_VERSION, t.appkey = C().appKey(), 
                        D.getDeviceInfo(function(e) {
                            t.device_info = e || "";
                        }), n = D.getAppInfoSync(), t.appid = n.appId, t.app_env = n.appEnv, t.app_version = n.appVersion, 
                        D.getSystemInfo(function(n) {
                            D.getNetworkInfo(function(i) {
                                i = function(e, t) {
                                    var n = {}, i = (t = t || {}).networkType;
                                    "none" === i && (i = "unknown");
                                    var r = e.model || "", o = e.platform || "", s = e.brand || "";
                                    switch (t = s.toLowerCase(), n.sdk_type = D.getSdkType(), n.platform = D.getPlatform(), 
                                    n.platform_sdk_version = e.platformSDKVersion, n.platform_version = e.platformVersion, 
                                    n.resolution = e.resolution, n.pixel_ratio = e.pixelRatio, n.os = o, n.font_size_setting = e.fontSizeSetting, 
                                    n.device_model = r, n.device_brand = s, n.device_manufacturer = t, n.device_manuid = r, 
                                    n.device_name = r, n.os_version = e.OSVersion, n.language = e.language, i = i ? i.toLowerCase() : "") {
                                      case De:
                                        n.access_subtype = "LTE", n.access = "4G";
                                        break;

                                      case Ue:
                                        n.access_subtype = "CDMA", n.access = "3G";
                                        break;

                                      case be:
                                        n.access_subtype = "GRPS", n.access = "2G";
                                        break;

                                      default:
                                        n.access = i, delete n.access_subtype;
                                    }
                                    return n;
                                }(n, i), P.assign(t, i), function(e) {
                                    var n = [];
                                    n.push({
                                        name: "设备型号",
                                        value: t.device_model
                                    }), n.push({
                                        name: "设备生产商",
                                        value: t.device_brand
                                    }), n.push({
                                        name: "os版本号",
                                        value: t.os_version
                                    }), n.push({
                                        name: "网络类型",
                                        value: t.access
                                    }), n.push({
                                        name: "运营商",
                                        value: t.access_subtype
                                    }), n.push({
                                        name: "分辨率",
                                        value: t.resolution
                                    }), n.push({
                                        name: "pixelRatio",
                                        value: t.pixel_ratio
                                    });
                                    for (var i = "", r = 0; r < n.length; r++) {
                                        var o = n[r];
                                        i += o.name + ": " + o.value + "; ";
                                    }
                                    b().v("调试辅助信息: ", i);
                                }(), e && e();
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
                    return Pe.forEach(function(n) {
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
        }, v = function(e, t) {
            var n, i = {};
            for (n in e) t[n] ? i[t[n]] = e[n] : i[n] = e[n];
            return i;
        }, _ = function(e, t, n, i) {
            xe.instance().setIdType(M().getIdType()), xe.instance().setIdTracking(M().getIdTracking()), 
            (r = M().getUserId()) && e.analytics && (e.analytics.active_user = {
                puid: r,
                provider: M().getProvider()
            }), r = P.clone(xe.instance().get()), e.header = P.assign(r, e.header, {
                ts: Date.now(),
                testToken: Ke,
                traceId: P.getRandomStr(10) + Date.now() + P.getRandomStr(9)
            });
            var r = function(e) {
                return {
                    h: function(e, t) {
                        var n = v(e, t);
                        return e && e.id_tracking && (n[t.id_tracking || "id_tracking"] = v(e.id_tracking, je)), 
                        n;
                    }(e.header, Ve),
                    a: function(e, t) {
                        var n = {};
                        if (e) for (var i in e) e[i] && (n[t[i]] = e[i]);
                        return n;
                    }(e.analytics, Ce)
                };
            }(e), o = Y.stringify(r);
            r = {
                url: L.LOG_URL,
                method: "POST",
                data: Z.encode(o),
                success: function(i) {
                    var r = i.code || i.status || i.statusCode;
                    200 === r || 413 === r ? (b().i("数据发送成功: ", e, o), function(e) {
                        e && (xe.instance().setItem(L.IMPRINT, e), $.set(e), $.save(), b().v("imprint: ", $.getImpObj()), 
                        $.getItem("ttn_invalid") && (Ke = ""));
                    }((i.data || {}).imprint), "function" == typeof t && t(i)) : (b().w("数据发送失败: ", o), 
                    "function" == typeof n && n());
                },
                fail: function(e) {
                    b().w("超时: ", o), "function" == typeof n && n();
                },
                complete: function() {
                    "function" == typeof i && i();
                }
            }, D.request(P.assign(r, {
                header: {
                    "Content-Type": r = D.getSdkType() + "/json",
                    "Msg-Type": r
                }
            }));
        }, m = function(e) {
            M().getId() ? Se ? b().i("队列正在发送中") : (Se = !0, function e(t) {
                var n = Ee.front();
                n ? _(n, function() {
                    Ee.dequeue(), e(t);
                }, function() {
                    var n = Ee.dequeue();
                    n && !n.noCache && Ie.push(n), e(t);
                }) : (Ie.forEach(function(e) {
                    Ee.enqueue(e);
                }), Ie.length = 0, t());
            }(function() {
                Se = !1, "function" == typeof e && e();
            })) : (b().i("获取id标识失败，暂缓发送"), "function" == typeof e && e());
        }, S = function() {
            this.send = function(e, t, n) {
                e ? this.add(e, t, function() {
                    m(n);
                }) : m(n);
            }, this.add = function(e, t, n) {
                !function e(t, n, i) {
                    if (xe.instance().isLoaded()) {
                        n = n || {};
                        var r = function(e) {
                            var t = null;
                            switch (e) {
                              case Le.HALF_SESSION:
                                t = function() {
                                    var e = null, t = Me().cloneCurrentSession();
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

                              case Le.CLOSE_SESSION:
                                t = function() {
                                    var e = null, t = {}, n = Me().cloneCurrentSession();
                                    if (n) {
                                        var i = we().get(), r = Ne().get();
                                        Array.isArray(i) && i.length && (n.pages = P.clone(i)), Array.isArray(r) && r.length && (n.shares = P.clone(r)), 
                                        we().clear(), Ne().clear(), t.sessions = [ n ];
                                    }
                                    return (n = Re().getEkvs()) && (t.ekvs = P.clone(n), Re().clear()), (t.sessions || t.ekvs) && (e = {
                                        analytics: t
                                    }), e;
                                }();
                                break;

                              case Le.EKV:
                                t = function() {
                                    var e = null, t = Re().getEkvs();
                                    return t && (e = {
                                        analytics: {
                                            ekvs: P.clone(t)
                                        }
                                    }, Re().clear()), e;
                                }();
                            }
                            return t;
                        }(t);
                        if (r) {
                            var o = xe.instance().getRealtimeFields();
                            r.header = P.assign({}, r.header, o), r.noCache = n.noCache, Ee.enqueue(r);
                        }
                        "function" == typeof i && i();
                    } else setTimeout(function() {
                        e(t, n, i);
                    }, 100);
                }(e, t, n);
            }, this.load = function() {
                var e = W().get(L.REQUESTS);
                e && e.length && e.forEach(function(e) {
                    Ee.enqueue(e);
                }), W().remove(L.REQUESTS);
            }, this.save = function() {
                W().set(L.REQUESTS, P.clone(Ee.items())), Ee.clear();
            };
        }, I = function() {
            this.update = function() {
                D.getUserInfo(function(e) {
                    if (e) {
                        var t = W().get(L.USER_INFO);
                        t && P.deepEqual(e, t) || function(e, t) {
                            var n = C().appKey(), i = D.getSdkType(), r = M().getId(), o = M().getIdType();
                            n && i && r && o && (o = {
                                ak: C().appKey(),
                                sdt: D.getSdkType(),
                                uin: e.nickName,
                                uia: e.avatar,
                                uig: e.gender,
                                uit: e.country,
                                uip: e.province,
                                uic: e.city,
                                uil: e.language,
                                id: M().getId(),
                                it: M().getIdType()
                            }, o = JSON.stringify(o), o = Z.encode(o), D.request({
                                url: L.USERINFO_URL,
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                data: "ui=" + o,
                                success: function(n) {
                                    b().v("用户信息上传成功: ", e), t && t(n && n.data && 200 === n.data.code);
                                },
                                fail: function() {
                                    b().e("用户信息上传失败: ", e), t && t(!1);
                                }
                            }));
                        }(e, function(t) {
                            t && W().set(L.USER_INFO, e);
                        });
                    }
                });
            };
        }, E = function(e, n) {
            this.id = e, this.ts = Date.now();
            var i = t(n);
            if ("string" == i && n) this[e] = n; else if ("object" == i) for (var r in n) !{}.hasOwnProperty.call(n, r) || (this[r] = n[r]);
        }, O = function() {
            var e = !1, n = !1, i = 0;
            this.init = function(t) {
                b().v("sdk version: " + L.IMPL_VERSION), e ? b().v("Lib重复实例化") : W().load(function() {
                    b().v("cache初始化成功: ", W().getAll()), M().setUseOpenid && M().setUseOpenid(C().useOpenid()), 
                    M().init(function() {
                        xe.instance().init(), b().v("Header初始化成功");
                    }), e = !0, "function" == typeof t && t(), b().tip("SDK集成成功");
                });
            }, this.resume = function(t) {
                var i;
                e && !n && (b().v("showOptions: ", t), n = !0, C().enableVerify() && t && t.query && (i = t.query._ttn, 
                Ke = i || Ke), this._resume(t));
            }, this._resume = function(e) {
                Ge().load();
                var t = Me().resume(e);
                e = Me().getCurrentSessionId(), Re().setSessionId(e), t && Ge().add(Le.HALF_SESSION, {}, function() {
                    M().setUseOpenid && M().setUseOpenid(C().useOpenid()), C().useOpenid() && C().autoGetOpenid() && !M().getId() ? (b().v("get id async"), 
                    function e(t, n) {
                        M().getId() || t <= 0 || M().getOpenIdAsync(C().appKey(), function(i) {
                            i ? (b().v("获取id成功"), Ge().send()) : (b().v("获取openid失败,启动重试,剩余可用次数", t - 1), setTimeout(function() {
                                e(t - 1, n);
                            }, n));
                        });
                    }(10, 3e3)) : (b().v("session auto send"), Ge().send());
                });
            }, this.pause = function(t) {
                e && (n = !1, i = 0, Me().pause(), C().uploadUserInfo() && Fe().update(), Ge().send(Le.CLOSE_SESSION, {}, function() {
                    Ge().save(), W().save(), b().v("cache save success"), "function" == typeof t && t();
                }));
            }, this.setOpenid = function(e) {
                b().v("setOpenId: %s", e), M().setOpenid(e), Ge().send();
            }, this.setUnionid = function(e) {
                b().v("setUnionid: %s", e), M().setUnionid(e);
            }, this.setUserid = function(e, t) {
                b().v("setUserid: %s", e, t), M().setUserid(e, t);
            }, this.setAnonymousid = function(e) {
                b().v("setAnonymousId: %s", e), M().setAnonymousid(e), Ge().send();
            }, this.setAppVersion = function(e) {
                e && "string" != typeof e ? b().w("setAppVersion方法只接受字符串类型参数") : xe.instance().setAppVersion(e);
            }, this.setAlipayUserid = function(e) {
                e && "string" != typeof e ? b().w("setAlipayUserid方法只接受字符串类型参数") : (b().v("setAlipayUserid: %s", e), 
                M().setAlipayUserid(e));
            }, this.setSuperProperty = function(e) {
                if (e && "string" != typeof e) b().w("超级属性只支持字符串类型"); else {
                    var t = this;
                    xe.instance().getSuperProperty() !== e && (xe.instance().setSuperProperty(e), t.pause(function() {
                        t.resume();
                    }));
                }
            }, this.trackEvent = function(n, r) {
                if (e && (b().v("event: ", n, r), function(e, n) {
                    if (e && "string" == typeof e) {
                        var i = [ "id", "ts", "du" ], r = {};
                        if (i.forEach(function(e) {
                            r[e] = 1;
                        }), r[e]) b().e("eventId不能与以下保留字冲突: " + i.join(",")); else if (e.length > L.MAX_EVENTID_LENGTH) b().e("The maximum length of event id shall not exceed " + L.MAX_EVENTID_LENGTH); else {
                            if (!n || "object" == t(n) && !Array.isArray(n) || "string" == typeof n) {
                                if ("object" == t(n)) {
                                    var o, s = 0;
                                    for (o in n) if ({}.hasOwnProperty.call(n, o)) {
                                        if (o.length > L.MAX_PROPERTY_KEY_LENGTH) return void b().e("The maximum length of property key shall not exceed " + L.MAX_PROPERTY_KEY_LENGTH);
                                        if (s >= L.MAX_PROPERTY_KEYS_COUNT) return void b().e("The maximum count of properties shall not exceed " + L.MAX_PROPERTY_KEYS_COUNT);
                                        if (r[o]) return void b().e("属性中的key不能与以下保留字冲突: " + i.join(","));
                                        s += 1;
                                    }
                                }
                                return 1;
                            }
                            b().e("please check trackEvent properties. properties should be string or object(not include Array)");
                        }
                    } else b().e('please check trackEvent id. id should be "string" and not null');
                }(n, r))) {
                    var o = new E(n, r);
                    Re().addEvent(o);
                    var s = !!Ke;
                    n = s ? 0 : L.EVENT_SEND_DEFAULT_INTERVAL, o = r = Date.now(), n = n, ("number" != typeof i || "number" != typeof n || i <= 0 || n < o - i) && (i = r, 
                    Ge().send(Le.EKV, {
                        noCache: s
                    }, function() {}));
                }
            }, this.trackShare = function(t) {
                if (e) {
                    try {
                        -1 < D.getSdkType().indexOf("game") ? (t = Ne().add(t, !0), b().v("shareQuery: ", t)) : (t = Ne().add(t, !1), 
                        b().v("sharePath: ", t.path));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        b().v("shareAppMessage: ", t);
                    }
                    return t;
                }
            }, this.trackPageStart = function(t) {
                e && we().addPageStart(t);
            }, this.trackPageEnd = function(t) {
                e && we().addPageEnd(t);
            }, this.onShareAppMessage = function(e) {
                var t = this;
                D.onShareAppMessage(function() {
                    return t.trackShare(e());
                });
            }, this.shareAppMessage = function(e) {
                this.trackShare(e), D.shareAppMessage(e);
            };
        }, w = function() {};
        console.log("初始化wx_umeng");
        var A, N, T, k, R = "[UMENG] -- ", b = (A = null, N = !1, function() {
            return null === A && (A = new e()), A;
        }), U = function(e, t) {
            return (U = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }, D = new (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return n(t, e), t.prototype.getSdkType = function() {
                return "wxgamemp";
            }, t.prototype.getPlatform = function() {
                return "wx";
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
                    fail: function(n) {
                        b().w(e + ": " + n.errMsg), "function" == typeof t && t();
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
                        var n = {
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
                            resolution: ""
                        }, i = t.system.split(" ");
                        Array.isArray(i) && (n.OS = i[0]), i = Math.round(t.screenWidth * t.pixelRatio), 
                        t = Math.round(t.screenHeight * t.pixelRatio), n.resolution = t < i ? i + "*" + t : t + "*" + i, 
                        "function" == typeof e && e(n);
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
                var t = e.success, n = e.fail, i = !1, r = null;
                e.success = function(e) {
                    i || (r && clearTimeout(r), "function" == typeof t && t(e));
                }, e.fail = function() {
                    i || (r && clearTimeout(r), "function" == typeof n && n(!1));
                }, wx.request(e), r = setTimeout(function() {
                    r && clearTimeout(r), i = !0, "function" == typeof n && n(i);
                }, e.timeout || 5e3);
            }, e.prototype.getSdkType = function() {
                return "wxmp";
            }, e.prototype.getPlatform = function() {
                return "wx";
            }, e.prototype.connectSocket = function(e) {
                wx.connectSocket(e);
            }, e.prototype.closeSocket = function(e) {
                wx.closeSocket(e);
            }, e.prototype.sendSocketMessage = function(e) {
                wx.sendSocketMessage(e);
            }, e.prototype.onSocketOpen = function(e) {
                wx.onSocketOpen(e);
            }, e.prototype.onSocketClose = function(e) {
                wx.onSocketClose(e);
            }, e.prototype.onSocketMessage = function(e) {
                wx.onSocketMessage(e);
            }, e.prototype.onSocketError = function(e) {
                wx.onSocketError(e);
            }, e.prototype.getClipboard = function(e) {
                try {
                    wx.getClipboardData({
                        success: function(t) {
                            "function" == typeof e && e(t.data);
                        },
                        fail: function() {
                            "function" == typeof e && e("");
                        }
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    b.e("读取clipboard发生错误", e);
                }
            }, e.prototype.showModal = function(e) {
                try {
                    wx.showModal(e);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    b.e("展示Modal时发生错误", e);
                }
            }, e.prototype.showToast = function(e) {
                try {
                    wx.showToast(e);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    b.e("showToast error", e);
                }
            }, e.prototype.getUserInfo = function(e) {
                var t = {
                    fail: function() {
                        e && e();
                    },
                    success: function(t) {
                        t && t.userInfo && (t = t.userInfo, e && e({
                            avatar: t.avatarUrl,
                            nickName: t.nickName,
                            gender: t.gender,
                            country: t.country,
                            province: t.province,
                            city: t.city,
                            language: t.language
                        }));
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
                    b.e("getUserInfo error", e);
                }
            }, e.prototype.getAppInfoSync = function() {
                var e;
                return wx.getAccountInfoSync ? {
                    appId: (e = (e = wx.getAccountInfoSync()) && e.miniProgram ? e.miniProgram : {}).appId,
                    appEnv: e.envVersion,
                    appVersion: e.version
                } : {};
            }, e.prototype.onShareAppMessage = function(e) {
                wx.onShareAppMessage(e);
            }, e.prototype.shareAppMessage = function(e) {
                wx.shareAppMessage(e);
            }, e;
        }()))(), L = {
            SESSION_INTERVAL: 3e4,
            LOG_URL: "https://umini.shujupie.com/wxm_logs",
            GET_OPENID_URL: "https://umini.shujupie.com/uminiprogram_logs/wx/getuut",
            USERINFO_URL: "https://umini.shujupie.com/uminiprogram_logs/comm/uif",
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
            IMPL_VERSION: "2.4.11",
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
            IS_ALIYUN: !1,
            ALIYUN_URL: "serverless.huoban.youmeng.network.forward"
        }, P = {
            isNumber: function(e) {
                return !Number.isNaN(parseInt(e, 10));
            },
            compareVersion: function(e, t) {
                for (var n = String(e).split("."), i = String(t).split("."), r = 0; r < Math.max(n.length, i.length); r++) {
                    var o = parseInt(n[r] || 0, 10), s = parseInt(i[r] || 0, 10);
                    if (s < o) return 1;
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
            deepEqual: function e(n, i) {
                if (n === i) return !0;
                if (n && "object" == t(n) && i && "object" == t(i)) {
                    if (Object.keys(n).length !== Object.keys(i).length) return !1;
                    for (var r in n) {
                        if (Object.prototype.hasOwnProperty.call(i, r)) return !1;
                        if (!e(n[r], i[r])) return !1;
                    }
                    return !0;
                }
                return !1;
            },
            trimStart: function(e, t) {
                return e ? ("string" == typeof t && t.length ? (t = new RegExp("^" + t + "*"), e = e.replace(t, "")) : e = e.replace(/^s*/, ""), 
                e) : "";
            },
            trimEnd: function(e, t) {
                if (!e) return "";
                var n, i;
                if ("string" == typeof t && t.length) {
                    for (n = new RegExp(t), i = e.length; n.test(e.charAt(i)); ) --i;
                    return e.slice(0, i + 1);
                }
                for (n = /s/, i = e.length - 1; n.test(e.charAt(i)); ) --i;
                return e.slice(0, i + 1);
            }
        }, x = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return n(t, e), t.prototype.getOpenIdAsync = function(e, t) {
                var n = this;
                wx.login({
                    success: function(i) {
                        i.code ? D.request({
                            url: L.GET_OPENID_URL,
                            method: "GET",
                            data: {
                                key: e,
                                code: i.code
                            },
                            success: function(e) {
                                if (e && 200 === e.statusCode && e.data && e.data.data) return e = e.data.data, 
                                n.setOpenid(e.oid), n.setUnionid(e.uid), t && t(!0);
                                t && t();
                            },
                            fail: function(e) {
                                b().v("wx request failed...", e), t && t();
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
            return n(t, e), t.prototype.initID = function(e) {
                var t = this;
                t._idType = t._useOpenid ? "openid" : "uuid", b().v("id type: ", t._idType), D.getStorage(L.UNIONID, function(e) {
                    t._unionid = e;
                }), this._useOpenid ? D.getStorage(L.OPENID, function(n) {
                    t._openid = n, e && e();
                }) : e && e();
            }, t.prototype.setUseOpenid = function(e) {
                this._useOpenid = e;
            }, t.prototype.setOpenid = function(e) {
                !this._openid && e && (this._openid = e, D.setStorage(L.OPENID, e));
            }, t.prototype.setUnionid = function(e) {
                !this._unionid && e && (this._unionid = e, D.setStorage(L.UNIONID, e));
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
                return P.getRandomStr(10) + Date.now() + P.getRandomStr(7) + L.UUID_SUFFIX;
            }, e.prototype.initUUID = function(e) {
                var t = this;
                D.getStorage(L.UUID, function(n) {
                    n ? t._uuid = n : (t._uuid = t.createUUID(), D.setStorage(L.UUID, t._uuid)), e && e(n);
                });
            }, e.prototype.initUserid = function() {
                var e = this;
                D.getStorage(L.USERID, function(t) {
                    !e._userid && t && (e._userid = t, b().v("userId is ", t));
                }), D.getStorage(L.PROVIDER, function(t) {
                    !e._provider && t && (e._provider = t, b().v("provider is ", t));
                });
            }, e.prototype.init = function(e) {
                var t = this;
                t.initUUID(function() {
                    t.initUserid(), t.initID(e);
                });
            }, e.prototype.setUserid = function(e, t) {
                !this._userid && e && (this._userid = e, this._provider = t, D.setStorage(L.USERID, e), 
                D.setStorage(L.PROVIDER, t));
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
        }())), M = function() {
            return T = T || new x();
        }, C = (k = T = null, function() {
            return k = k || new i();
        }), V = {
            FETCH_URL: "https://ucc.umeng.com/v1/mini/fetch",
            ABLOG_URL: "https://pslog.umeng.com/mini_ablog",
            SDK_VERSION: "2.4.11",
            MOBILE_NETWORK_NONE: "none",
            MOBILE_NETWORK_2G: "2g",
            MOBILE_NETWORK_3G: "3g",
            MOBILE_NETWORK_4G: "4g",
            MOBILE_NETWORK_5G: "5g",
            MOBILE_NETWORK_WIFI: "wifi",
            IMPRINT: "imprint"
        }, j = {}, K = Array.isArray;
        j.isArray = K || function(e) {
            return "[object Array]" === toString.call(e);
        }, j.isObject = function(e) {
            return e === Object(e) && !j.isArray(e);
        }, j.isEmptyObject = function(e) {
            if (j.isObject(e)) {
                for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
                return !0;
            }
            return !1;
        }, j.isUndefined = function(e) {
            return void 0 === e;
        }, j.isString = function(e) {
            return "[object String]" === toString.call(e);
        }, j.isDate = function(e) {
            return "[object Date]" === toString.call(e);
        }, j.isNumber = function(e) {
            return "[object Number]" === toString.call(e);
        }, j.each = function(e, t, n) {
            if (null != e) {
                var i = {}, r = Array.prototype.forEach;
                if (r && e.forEach === r) e.forEach(t, n); else if (e.length === +e.length) {
                    for (var o = 0, s = e.length; o < s; o++) if (o in e && t.call(n, e[o], o, e) === i) return;
                } else for (var a in e) if (hasOwnProperty.call(e, a) && t.call(n, e[a], a, e) === i) return;
            }
        }, j.buildQuery = function(e, t) {
            var n, i, r = [];
            return void 0 === t && (t = "&"), j.each(e, function(e, t) {
                n = encodeURIComponent(e.toString()), i = encodeURIComponent(t), r[r.length] = i + "=" + n;
            }), r.join(t);
        }, j.JSONDecode = function(e) {
            if (e) {
                try {
                    return JSON.parse(e);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error("JSONDecode error", e);
                }
                return null;
            }
        }, j.JSONEncode = function(e) {
            try {
                return JSON.stringify(e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                console.error("JSONEncode error", e);
            }
        };
        var G, F, q, H, Y = {
            stringify: function(e) {
                if (e) try {
                    return JSON.stringify(e);
                } catch (e) {}
                return "";
            },
            parse: function(e) {
                if (e) try {
                    return JSON.parse(e);
                } catch (e) {}
                return null;
            },
            parseToArray: function(e) {
                if (e) try {
                    return JSON.parse(e);
                } catch (e) {}
                return [];
            }
        }, W = (F = "", q = G = null, H = !1, function() {
            return G = G || new r();
        }), J = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", B = function(e) {
            for (var t = {}, n = 0, i = e.length; n < i; n++) t[e.charAt(n)] = n;
            return t;
        }(J), X = String.fromCharCode, z = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, Q = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), Z = {
            encode: function(e, t) {
                return t ? a(String(e)).replace(/[+\/]/g, function(e) {
                    return "+" == e ? "-" : "_";
                }).replace(/=/g, "") : a(String(e));
            },
            decode: function(e) {
                return function(e) {
                    return e.replace(/[\s\S]{1,4}/g, c).replace(Q, u);
                }(String(e).replace(/[-_]/g, function(e) {
                    return "-" == e ? "+" : "/";
                }).replace(/[^A-Za-z0-9\+\/]/g, ""));
            }
        }, $ = new function() {
            var e = "", t = this;
            this.set = function(t) {
                e = t;
            }, this.get = function() {
                return e;
            }, this.getImpObj = function() {
                return Y.parse(Z.decode(e));
            }, this.getItem = function(e) {
                var n = t.getImpObj();
                return n && n[e] || "";
            }, this.load = function() {
                e = W().get(L.IMPRINT);
            }, this.save = function() {
                e && W().set(L.IMPRINT, e);
            };
        }(), ee = Object.create(null);
        f.prototype.addListener = f.prototype.on = function(e, t) {
            var n = this.listeners;
            n[e] && n[e].length >= this.maxListener ? console.error("监听器的最大数量是%d,您已超出限制", this.maxListener) : n[e] instanceof Array ? -1 === n[e].indexOf(t) && n[e].push(t) : n[e] = [].concat(t);
        }, f.prototype.emit = function(e) {
            var t = Array.prototype.slice.call(arguments);
            t.shift();
            var n = this.listeners;
            n[e] instanceof Array && n[e].forEach(function(e) {
                e.apply(null, t);
            });
        }, f.prototype.listeners = function(e) {
            return this.listeners[e];
        }, f.prototype.setMaxListeners = function(e) {
            this.maxListener = e;
        }, f.prototype.removeListener = function(e, t) {
            var n = this.listeners;
            0 <= (t = (n[e] || []).indexOf(t)) && n[e].splice(t, 1);
        }, f.prototype.removeAllListener = function(e) {
            this.listeners[e] = [];
        }, f.prototype.once = function(e, t) {
            var n = this;
            this.on(e, function i() {
                var r = Array.prototype.slice.call(arguments);
                t.apply(null, r), n.removeListener(e, i);
            });
        };
        var te = new f(), ne = 0, ie = Object.create(null), re = null, oe = !1, se = {
            minFetchIntervalSeconds: 43200
        };
        d.prototype = {
            setDefaultValues: function(e) {
                oe && j.isObject(e) && j.each(e, function(e, t) {
                    ie[t] && ie[t].v || (ie[t] = {
                        v: e
                    });
                });
            },
            getValue: function(e) {
                b().v("从配置项中读取 value, 当前配置为: ", ie), b().v("待读取的 key : ", e);
                try {
                    if (!oe) return;
                    var t = ie[e] || {};
                    return b().v("读取相应配置ing..., 结果为: ", t), j.isNumber(t.e) && j.isNumber(t.g) && (b().v("读取到相应配置, 开始数据上报..."), 
                    function(e) {
                        var t = {
                            appkey: C().appKey(),
                            sdkType: D.getSdkType(),
                            expId: e && e.e,
                            groupId: e && e.g,
                            clientTs: Date.now(),
                            key: e && e.k,
                            value: e && e.v,
                            umid: M().getId()
                        };
                        try {
                            D.request({
                                url: V.ABLOG_URL,
                                method: "POST",
                                data: [ t ],
                                success: function(e) {
                                    e && 200 === e.statusCode ? b().v("上传数据成功", t) : b().w("ablog 请求成功, 返回结果异常 ", e);
                                },
                                fail: function(e) {
                                    b().w("ablog 请求数据错误 ", t, e);
                                }
                            });
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            b().w("urequest 调用错误", e);
                        }
                    }(t)), t.v;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    b().w("getValue error, key: ", e);
                }
            },
            active: function(e) {
                try {
                    if (!oe) return;
                    var t, n;
                    e && e.params && (t = e.params), e && e.callback && (n = e.callback), b().v("激活配置项: ", t), 
                    t ? (b().v("本地已缓存的配置项: ", ie), p(t), b().v("合并后的配置项: ", ie), n && n(ie), b().v("active 结束")) : (b().v("配置项为空!! 读取本地配置..."), 
                    D.getStorage(this.STORAGE_NAME, function(e) {
                        e ? (p((e = j.JSONDecode(e) || {}).params), b().v("当前本地配置项为: ", ie), n && n(ie), 
                        b().v("active 结束")) : b().v("当前本地配置项为空, 退出激活");
                    }));
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    b().w("SDK active 错误", e);
                }
            },
            init: function(e) {
                e.appKey && (re = e.appKey, this.STORAGE_NAME = "um_remote_config_{{" + re + "}}"), 
                re ? oe ? b().w("SDK 已经初始化, 请避免重复初始化") : (oe = !0, this.setOptions(e), this.active()) : b().err("请检查您的小程序 appKey, appKey 不能为空");
            },
            setOptions: function(e) {
                j.isObject(e) && (e = e.minFetchIntervalSeconds, j.isNumber(e) && (se.minFetchIntervalSeconds = Math.max(e, 5)));
            },
            fetch: function(e) {
                if (oe && this.STORAGE_NAME) {
                    var t, n;
                    e && e.active && (t = e.active), e && e.callback && (n = e.callback);
                    var i = this;
                    D.getStorage(this.STORAGE_NAME, function(e) {
                        b().v("开始读缓存 data is ", e), (e = j.JSONDecode(e) || {}).params && e.ts && Date.now() - e.ts < 1e3 * se.minFetchIntervalSeconds ? (b().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch"), 
                        n && n(e.params)) : function(e) {
                            b().v("开始构建 fetch body"), D.getSystemInfo(function(t) {
                                D.getNetworkInfo(function(n) {
                                    n = (n = (n = n || {}).networkType) === V.MOBILE_NETWORK_NONE ? "unknown" : n.toUpperCase(), 
                                    ee.access = n, function(e, t) {
                                        var n = e.brand || "";
                                        ee.deviceType = "Phone", ee.sdkVersion = V.SDK_VERSION, ee.appkey = C().appKey(), 
                                        ee.sdkType = D.getSdkType(), ee.umid = M().getId(), e && (ee.language = e.language || "", 
                                        ee.os = e.OS, ee.osVersion = e.OSVersion, ee.deviceName = e.deviceName, ee.platformVersion = e.platformVersion, 
                                        ee.platformSdkVersion = e.platformSDKVersion, ee.deviceBrand = n, e = e.resolution.split("*"), 
                                        j.isArray(e) && (ee.resolutionHeight = Number(e[0]), ee.resolutionWidth = Number(e[1]))), 
                                        function(e) {
                                            e && (ee.installTime = e.install_datetime && Date.parse(e.install_datetime), ee.scene = e.install_scene, 
                                            ee.channel = e.install_channel, ee.campaign = e.install_campaign);
                                        }($.getImpObj()), t && t(ee);
                                    }(t, e);
                                });
                            });
                        }(function(e) {
                            b().v("缓存数据不存在, 构建 fetch body :", e);
                            try {
                                D.request({
                                    url: V.FETCH_URL,
                                    method: "POST",
                                    data: e,
                                    success: function(e) {
                                        if (e && 200 === e.statusCode && e.data && e.data.cc) {
                                            b().v("fetch 请求成功, 响应数据: ", e.data);
                                            var r = Object.create(null);
                                            j.each(e.data.cc, function(e) {
                                                r[e.k] = e;
                                            });
                                            var o = {
                                                ts: Date.now(),
                                                params: r
                                            };
                                            b().v("开始缓存 fetch 请求的云配置结果..."), D.setStorage(i.STORAGE_NAME, j.JSONEncode(o), function(e) {
                                                b().v("缓存云配置成功, 缓存数据为: ", o), b().v("缓存云配置成功, 成功消息为: ", e), b().v("云配拉取数据是否自动激活: ", t), 
                                                e && t && (b().v("激活云配置..."), i.active({
                                                    params: r,
                                                    callback: n
                                                }));
                                            });
                                        } else b().w("fetch 请求成功,返回结果异常 ", e.data), n && n();
                                    },
                                    fail: function(t) {
                                        b().w("fetch请求数据错误 ", e, t), n && n();
                                    }
                                });
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                b().w("urequest调用错误", e);
                            }
                        });
                    });
                }
            }
        };
        var ae, ue, ce, fe, pe, de, le, he, ge, ye, ve, _e, me, Se, Ie, Ee, Oe, we = function() {
            return ae = ae || new l();
        }, Ae = {}, Ne = (ce = [], function() {
            return ue = ue || new h();
        }), Te = "ekvs", ke = 1e4, Re = (le = [], function() {
            return pe = pe || {
                addEvent: function(e) {
                    de ? (le.unshift(e), 1 < le.length && (function() {
                        if (le.length) {
                            var e = W().get(Te);
                            (function(e) {
                                var t, n = 0;
                                for (t in e) Array.isArray(e[t]) && (n += e[t].length);
                                return n;
                            })(e) + le.length <= ke && (e = g(e, le), W().set(Te, e));
                        }
                    }(), le.length = 0)) : (b().w("session id is null: ", de), he.unshift(e));
                },
                setSessionId: function(e) {
                    if (de = e, b().v("setSessionId: ", de), Array.isArray(he) && he.length && de) {
                        for (var t = 0; t < he.length; t++) this.addEvent(he[t]);
                        he.length = 0;
                    }
                },
                getEkvs: function() {
                    var e = W().get(Te);
                    return le && le.length && (e = g(e, le)), e;
                },
                clear: function() {
                    W().remove(Te), le.length = 0;
                }
            };
        }), be = "2g", Ue = "3g", De = "4g", Le = {
            HALF_SESSION: "half_session",
            CLOSE_SESSION: "close_session",
            EKV: "ekv",
            ENTER_PAGE: "enter_page",
            LEAVE_PAGE: "leave_page"
        }, Pe = [ "access", "access_subtype" ], xe = {
            instance: function() {
                return ge = ge || y();
            }
        }, Me = function() {
            return ye = ye || {
                resume: function(e) {
                    var t = !1;
                    _e = _e || W().get(L.CURRENT_SESSION);
                    var n = new Date();
                    return ve = n.getTime(), !_e || !_e.end_time || ve - _e.end_time > L.SESSION_INTERVAL ? (t = !0, 
                    function(e) {
                        try {
                            var t = (_e || {}).options || {}, n = P.assign({}, function(e) {
                                var t, n = {};
                                for (t in e) 0 === t.indexOf("_um_") && (n[t] = e[t]);
                                return b().v("query: ", e), b().v("_um_params: ", n), n;
                            }(e.query));
                            n.path = e.path || t.path, n.scene = e.scene ? D.getPlatform() + "_" + e.scene : t.scene, 
                            (t = e.referrerInfo) && (n.referrerAppId = t.appId), b().v("session options: ", n), 
                            (t = n[L.UM_SSRC]) && Ne().setShareSource(t), t = Date.now(), _e = {
                                id: P.getRandomStr(10) + t,
                                start_time: t,
                                options: n
                            };
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            b().e("生成新session失败: ", e);
                        }
                    }(e), b().v("开始新的session(%s): ", _e.id, _e)) : b().v("延续上一次session(%s): %s ", _e.id, n.toLocaleTimeString(), _e), 
                    t;
                },
                pause: function() {
                    !function() {
                        if (_e) {
                            var e = new Date();
                            _e.end_time = e.getTime(), "number" != typeof _e.duration && (_e.duration = 0), 
                            _e.duration = _e.end_time - ve, W().set(L.CURRENT_SESSION, _e), b().v("退出会话(%s): %s ", _e.id, e.toLocaleTimeString(), _e);
                        }
                    }();
                },
                getCurrentSessionId: function() {
                    return (_e || {}).id;
                },
                getCurrentSession: function() {
                    return _e;
                },
                cloneCurrentSession: function() {
                    return P.clone(_e);
                }
            };
        }, Ce = {
            sessions: "sn",
            ekvs: "e",
            active_user: "active_user"
        }, Ve = {
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
            testToken: "ttn"
        }, je = {
            uuid: "ud",
            unionid: "und",
            openid: "od",
            anonymousid: "nd",
            alipay_id: "ad",
            device_id: "dd",
            userid: "puid"
        }, Ke = fe = "", Ge = (me = _e = ve = ye = ge = ue = ae = null, Se = !(he = []), 
        Ie = [], Ee = new function(e) {
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
        }(50), function() {
            return me = me || new S();
        }), Fe = (Oe = null, function() {
            return Oe = Oe || new I();
        }), qe = [];
        w.prototype = {
            createMethod: function(e, t, n) {
                try {
                    e[t] = n && n[t] ? function() {
                        return n[t].apply(n, arguments);
                    } : function() {
                        qe.push([ t, [].slice.call(arguments) ]);
                    };
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    b().v("create method errror: ", e);
                }
            },
            installApi: function(e, t) {
                try {
                    for (var n = "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setUnionid,onShareAppMessage,shareAppMessage".split(","), i = 0, r = n.length; i < r; i++) this.createMethod(e, n[i], t);
                    if (t) for (i = 0, r = qe.length; i < r; i++) {
                        var o = qe[i];
                        try {
                            t[o[0]].apply(t, o[1]);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            b().v("impl[v[0]].apply error: ", o[0], e);
                        }
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    b().v("install api errror: ", e);
                }
            }
        };
        var He = [ "https://umini.shujupie.com", "https://ulogs.umeng.com" ], Ye = 0;
        !function(e) {
            setTimeout(function() {
                !function e(t, n) {
                    t >= He.length || n ? (n && function() {
                        var e = "https://umini.shujupie.com";
                        L.LOG_URL = L.LOG_URL.replace(e, He[Ye]), L.GET_OPENID_URL = L.GET_OPENID_URL.replace(e, He[Ye]), 
                        L.USERINFO_URL = L.USERINFO_URL.replace(e, He[Ye]);
                    }(), n && b().v("命中可用服务", He[Ye]), n || b().tip_w("未命中可用服务")) : D.request({
                        url: He[t] + "/uminiprogram_logs/ckdh",
                        success: function(n) {
                            200 === (n.code || n.status || n.statusCode) && n.data && 200 === n.data.code ? e((Ye = t) + 1, !0) : e(t + 1, !1);
                        },
                        fail: function() {
                            e(t + 1, !1);
                        }
                    });
                }(0, !1);
            }, e);
        }(3e3);
        var We = new w(), Je = {
            _inited: !1,
            init: function(e) {
                if (this._inited) b().v("已经实例过，请避免重复初始化"); else if (e) if (e.appKey) {
                    "boolean" != typeof e.useOpenid && (e.useOpenid = !0), C().set(e), b().setDebug(e.debug), 
                    this._inited = !0;
                    var t = this;
                    te.emit(ne, e);
                    try {
                        var n = new O();
                        b().v("成功创建Lib对象"), n.init(function() {
                            b().v("Lib对象初始化成功"), We.installApi(t, n), b().v("安装Lib接口成功"), te.emit(1, e);
                        });
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        b().w("创建Lib对象异常: " + e);
                    }
                } else b().err("请确保传入正确的appkey"); else b().err("请正确设置相关信息！");
            }
        };
        try {
            We.installApi(Je, null);
        } catch (A) {
            A = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(A);
            b().w("uma赋值异常: ", A);
        }
        wx.onShow(function(e) {
            var t;
            b().v("game onShow: ", e), t = e.query, Ae = t, Je.resume(e, !0);
        }), wx.onHide(function() {
            b().v("game onHide"), Je.pause();
        });
        var Be = Je.init;
        Je.init = function(e) {
            e && e.useOpenid && (b().tip_w("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"), 
            b().tip_w("您选择了使用openid进行统计，请确保使用setOpenid回传openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取"), 
            b().tip_w("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")), 
            Be.call(Je, e);
        }, K = new d(), function(e, n, i) {
            if ("object" == t(e)) {
                if (n.length) e.rc = i; else for (var r in i) if ({}.hasOwnProperty.call(i, r)) {
                    if (e[r]) return void b().v("方法已定义，无法注入此插件方法: ", r);
                    i[r] && (e[r] = function() {
                        i[r](arguments);
                    });
                }
            } else b().v("插件安装失败，宿主对象不能为空");
        }(Je, "rc", K), wx.uma = Je;
    }
}.call(e);