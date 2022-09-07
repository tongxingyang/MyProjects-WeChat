System.register("chunks:///_virtual/WarCarMgr.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts" ], function(t) {
    "use strict";
    var n, r, e, i, o, a, s, u;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, r = t.defineProperty, e = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, o = t._decorator, a = t.Animation, s = t.Component;
        }, function(t) {
            u = t.Constants;
        } ],
        execute: function() {
            var c;
            i._RF.push({}, "00572Whd/pDzojg63BHFPQb", "WarCarMgr", void 0);
            var p = o.ccclass;
            t("WarCarMgr", p("WarCarMgr")(c = function(t) {
                function i() {
                    for (var n, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                    return n = t.call.apply(t, [ this ].concat(o)) || this, r(e(n), "_upgradeAnim", null), 
                    n;
                }
                n(i, t);
                var o = i.prototype;
                return o.onLoad = function() {
                    this._upgradeAnim = this.getComponent(a), this._registerEvent(!0);
                }, o._registerEvent = function(t) {
                    var n = t ? "on" : "off";
                    rd.Event[n](u.EVENT_TYPE.PLAY_UPGRADE_ANIM, this._playUpgradeAnim, this);
                }, o._playUpgradeAnim = function() {
                    this._upgradeAnim.play(), rd.Audio.playSound(u.AUDIO_SOURCE_TYPE.UPGRADE_PARTS);
                }, o.onDestroy = function() {
                    this._registerEvent(!1);
                }, i;
            }(s)) || c);
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/FadeMask.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var e, a, i, s, n, c, o;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, a = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy, n = t._decorator, c = t.UIOpacity, o = t.Component;
        } ],
        execute: function() {
            var r;
            s._RF.push({}, "01cf8VlQ5RDoZqPf0UiuOjW", "FadeMask", void 0);
            var d, _ = n.ccclass;
            !function(t) {
                t[t.IDLE = 0] = "IDLE", t[t.FADE_IN = 1] = "FADE_IN", t[t.FADE_OUT = 2] = "FADE_OUT";
            }(d || (d = {}));
            t("FadeMask", _("FadeMask")(r = function(t) {
                function s() {
                    for (var e, s = arguments.length, n = new Array(s), c = 0; c < s; c++) n[c] = arguments[c];
                    return e = t.call.apply(t, [ this ].concat(n)) || this, a(i(e), "_maskOpa", null), 
                    a(i(e), "_totalFadeTime", 0), a(i(e), "_fadeState", d.IDLE), a(i(e), "_fadeResolve", null), 
                    a(i(e), "_curFadeTime", 0), e;
                }
                e(s, t);
                var n = s.prototype;
                return n.onLoad = function() {
                    this._maskOpa = this.addComponent(c), this.node.active = !1;
                }, n.fadeIn = function(t) {
                    return this._setFadeStart(t, !0);
                }, n.fadeOut = function(t) {
                    return this._setFadeStart(t, !1);
                }, n._setFadeStart = function(t, e) {
                    var a = this;
                    return this._totalFadeTime = t, this._curFadeTime = 0, this._fadeState = e ? d.FADE_IN : d.FADE_OUT, 
                    this.node.active = !0, new Promise(function(t) {
                        return a._fadeResolve = t;
                    });
                }, n._setMaskOpacity = function(t) {
                    this._maskOpa.opacity = 255 * t;
                }, n._setFadeFinished = function(t) {
                    this._fadeState = d.IDLE, this._setMaskOpacity(t ? 1 : 0), this._fadeResolve();
                }, n.update = function(t) {
                    if (this._fadeState !== d.IDLE) {
                        this._curFadeTime += t;
                        var e = this._curFadeTime / this._totalFadeTime;
                        switch (this._fadeState) {
                          case d.FADE_IN:
                            e < 1 ? this._setMaskOpacity(e) : this._setFadeFinished(!0);
                            break;

                          case d.FADE_OUT:
                            e < 1 ? this._setMaskOpacity(1 - e) : (this._setFadeFinished(!1), this.node.active = !1);
                        }
                    }
                }, s;
            }(o)) || r);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ButtonComponent.ts", [ "cc", "./Log.ts" ], function() {
    "use strict";
    var t, e, n, o;
    return {
        setters: [ function(o) {
            t = o.cclegacy, e = o.ButtonComponent, n = o.EventHandler;
        }, function(t) {
            o = t.Log;
        } ],
        execute: function() {
            t._RF.push({}, "02dd3dUwZNIpZHN1sN+8tfO", "ButtonComponent", void 0), window.LastClickTime = 0;
            e.prototype._onTouchEnded = function(t) {
                var i = t.currentTarget.getComponent(e), c = new Date().getTime(), r = c - window.LastClickTime;
                r < 150 || !i._interactable || !i.enabledInHierarchy ? r < 150 && o.debug(e.prototype.name, "按钮点击过快，间隔时间毫秒 ====== " + r) : (rd.Audio.playSound("click"), 
                window.LastClickTime = c, i._pressed && (n.emitEvents(i.clickEvents, t), i.node.emit(e.EventType.CLICK, i)), 
                i._pressed = !1, i._updateState(), t && (t.propagationStopped = !0));
            }, t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/Bomb.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts" ], function(t) {
    "use strict";
    var o, e, r, n, i, s, l, a, c, u;
    return {
        setters: [ function(t) {
            o = t.inheritsLoose, e = t.defineProperty, r = t.assertThisInitialized;
        }, function(t) {
            n = t.cclegacy, i = t._decorator, s = t.SphereCollider, l = t.tween, a = t.isValid, 
            c = t.Component;
        }, function(t) {
            u = t.Constants;
        } ],
        execute: function() {
            var d;
            n._RF.push({}, "03d1cAqpPdHxKD6lv6lNV5w", "Bomb", void 0);
            var p = i.ccclass;
            t("Bomb", p("Bomb")(d = function(t) {
                function n() {
                    for (var o, n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s];
                    return o = t.call.apply(t, [ this ].concat(i)) || this, e(r(o), "_colliderComp", null), 
                    o;
                }
                o(n, t);
                var i = n.prototype;
                return i.onLoad = function() {
                    this._colliderComp = this.getComponent(s);
                }, i.start = function() {
                    g.App.ColliderData.setSawOrBombCollider(this.node), this._registerEvent(!0);
                }, i.setBombSize = function(t) {
                    var o = this;
                    this._colliderComp.radius = 0, l(this._colliderComp).to(.37, {
                        radius: t
                    }, {
                        easing: "quartOut"
                    }).call(function() {
                        rd.Pool.putNode(o.node);
                    }).start();
                }, i._registerEvent = function(t) {
                    var o = t ? "on" : "off";
                    this._colliderComp[o]("onTriggerEnter", this._onBombTriggerEnter, this);
                }, i._onBombTriggerEnter = function(t) {
                    if (a(t.otherCollider)) {
                        var o = t.otherCollider.node;
                        o.name.startsWith(u.COLLIDER_NAME.ZOMBIE) && o.parent && rd.Event.emit(u.EVENT_TYPE.KILL_ZOMBIE, o, !1, !0);
                    }
                }, i.onDestroy = function() {
                    this._registerEvent(!1);
                }, n;
            }(c)) || d);
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/AgentMgr.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./SingletonBase.ts" ], function(t) {
    "use strict";
    var e, n, a, i, r, s, _, o, c;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, a = t.assertThisInitialized, i = t.createForOfIteratorHelperLoose, 
            r = t.createClass;
        }, function(t) {
            s = t.cclegacy, _ = t._decorator, o = t.v3;
        }, function(t) {
            c = t.SingletonBase;
        } ],
        execute: function() {
            var h;
            s._RF.push({}, "045dfzxMV5GwYboX+2Aij79", "AgentMgr", void 0);
            var u = _.ccclass, d = o();
            t("AgentMgr", u("AgentMgr")(h = function(t) {
                function s() {
                    for (var e, i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
                    return e = t.call.apply(t, [ this ].concat(r)) || this, n(a(e), "_agentMap", new Map()), 
                    n(a(e), "_agentCnt", 0), n(a(e), "_areaArr", []), n(a(e), "_obstacleArr", []), e;
                }
                e(s, t);
                var _ = s.prototype;
                return _.addAgent = function(t, e) {
                    this._agentMap.set(t, e);
                }, _.getAgent = function(t) {
                    return this._agentMap.get(t);
                }, _.deleteAgent = function(t) {
                    this._agentMap.delete(t);
                }, _.addAreaRange = function(t, e, n) {
                    var a = {
                        centerPos: t,
                        widthX: e,
                        widthZ: n
                    };
                    this._areaArr.push(a);
                }, _.addObstacle = function(t, e, n) {
                    void 0 === e && (e = 1), void 0 === n && (n = 1);
                    var a = {
                        centerPos: t,
                        widthX: e,
                        widthZ: n
                    };
                    this._obstacleArr.push(a);
                }, _.getNextPos = function(t, e, n) {
                    void 0 === n && (n = !0);
                    var a = this.getAgent(t).worldPos;
                    return d.set(a.x + e.x, 0, a.z + e.z), this._isRoutePass(t, d, n) ? d : (d.z = a.z, 
                    this._isRoutePass(t, d, n) ? d : (d.set(a.x, 0, a.z + e.z), this._isRoutePass(t, d, n) ? d : a));
                }, _._isRoutePass = function(t, e, n) {
                    for (var a, r = this.getAgent(t), s = !1, _ = i(this._areaArr); !(a = _()).done; ) {
                        var o = a.value;
                        if (this._isContainsRect(o.centerPos, o.widthX, o.widthZ, e, r.widthX, r.widthZ)) {
                            s = !0;
                            break;
                        }
                    }
                    if (!s && (s = this._checkAreaIntersects(t, e)), !s) return !1;
                    for (var c, h = i(this._obstacleArr); !(c = h()).done; ) {
                        var u = c.value;
                        if (this._isRectIntersects(u.centerPos, u.widthX, u.widthZ, e, r.widthX, r.widthZ)) return !1;
                    }
                    for (var d, g = i(this._agentMap.values()); !(d = g()).done; ) {
                        var l = d.value;
                        if (l !== r && (!n || l.isStatic) && this._isRectIntersects(l.worldPos, l.widthX, l.widthZ, e, r.widthX, r.widthZ)) return !1;
                    }
                    return !0;
                }, _._checkAreaIntersects = function(t, e) {
                    for (var n, a = this.getAgent(t), r = 0, s = i(this._areaArr); !(n = s()).done; ) {
                        var _ = n.value;
                        if (this._isHalfContainsRect(_.centerPos, _.widthX, _.widthZ, e, a.widthX, a.widthZ) && ++r >= 2) return !0;
                    }
                    return !1;
                }, _.clearMapArea = function() {
                    this._areaArr.splice(1);
                }, _.clearAll = function() {
                    this._agentCnt = 0, this._agentMap.clear(), this._obstacleArr = [], this._areaArr = [];
                }, _._isContainsRect = function(t, e, n, a, i, r) {
                    var s = this._getRectData(t, e, n, a, i, r), _ = s.a_min_x, o = s.a_min_z, c = s.b_min_x, h = s.b_min_z;
                    return _ <= c && o <= h && _ + e >= c + i && o + n >= h + r;
                }, _._isHalfContainsRect = function(t, e, n, a, i, r) {
                    var s = this._getRectData(t, e, n, a, i, r), _ = s.a_min_x, o = s.a_max_x, c = s.a_min_z, h = s.a_max_z, u = s.b_min_x, d = s.b_max_x, g = s.b_min_z, l = s.b_max_z;
                    return _ <= u && o >= d && c <= l && h >= g || _ <= d && o >= u && c <= g && h >= l;
                }, _._isRectIntersects = function(t, e, n, a, i, r) {
                    var s = this._getRectData(t, e, n, a, i, r), _ = s.a_min_x, o = s.a_max_x, c = s.a_min_z, h = s.a_max_z, u = s.b_min_x, d = s.b_max_x, g = s.b_min_z, l = s.b_max_z;
                    return _ <= d && o >= u && c <= l && h >= g;
                }, _._getRectData = function(t, e, n, a, i, r) {
                    var s = .5 * e, _ = .5 * n, o = .5 * i, c = .5 * r;
                    return {
                        a_min_x: t.x - s,
                        a_max_x: t.x + s,
                        a_min_z: t.z - _,
                        a_max_z: t.z + _,
                        b_min_x: a.x - o,
                        b_max_x: a.x + o,
                        b_min_z: a.z - c,
                        b_max_z: a.z + c
                    };
                }, r(s, [ {
                    key: "agentCnt",
                    get: function() {
                        return this._agentCnt;
                    },
                    set: function(t) {
                        this._agentCnt = t;
                    }
                } ]), s;
            }(c)) || h);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/TaskManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(e) {
    "use strict";
    var t, i, r;
    return {
        setters: [ function(e) {
            t = e.defineProperty;
        }, function(e) {
            i = e.cclegacy, r = e.director;
        } ],
        execute: function() {
            i._RF.push({}, "04ad07vJpNINq6Ynu1aUDxW", "TaskManager", void 0);
            var s = e("TaskManager", function() {
                function e() {
                    e.timeTaskArr = [];
                }
                return e.update2 = function(e) {
                    if (this.tempDelTimeArr.length > 0) for (var t = this.tempDelTimeArr.length - 1; t >= 0; t--) this.removeElement(this.timeTaskArr, this.tempDelTimeArr[t]), 
                    this.removeElement(this.tempDelTimeArr, this.tempDelTimeArr[t]);
                    for (var i = this.timeTaskArr.length - 1; i >= 0; i--) this.timeTaskArr[i].isPause || (this.timeTaskArr[i].curTime += e), 
                    this.timeTaskArr[i].curTime >= this.timeTaskArr[i].destTime && (this.timeTaskArr[i].callback(), 
                    this.removeElement(this.timeTaskArr, this.timeTaskArr[i]));
                }, e.removeElement = function(e, t) {
                    var i = e.indexOf(t);
                    i >= 0 && e.splice(i, 1);
                }, e.addTimeTask = function(e, t, i) {
                    void 0 === i && (i = -1);
                    var s = .001 * r.getCurrentTime(), n = new a();
                    n.init(e, t, t + s, s, i), this.timeTaskArr.push(n);
                }, e.pauseTaskByID = function(e) {
                    for (var t = 0; t < this.timeTaskArr.length; t++) if (this.timeTaskArr[t].taskID == e) {
                        this.timeTaskArr[t].isPause = !0;
                        break;
                    }
                }, e.pauseAllTask = function() {
                    for (var e = 0; e < this.timeTaskArr.length; e++) this.timeTaskArr[e].isPause = !0;
                }, e.continueAllTask = function() {
                    for (var e = 0; e < this.timeTaskArr.length; e++) this.timeTaskArr[e].isPause = !1;
                }, e.deleteTimeTaskByID = function(e) {
                    for (var t = 0; t < this.timeTaskArr.length; t++) if (this.timeTaskArr[t].taskID == e) {
                        this.tempDelTimeArr.push(this.timeTaskArr[t]);
                        break;
                    }
                }, e.deleteAllTimeTask = function() {
                    this.timeTaskArr = [], this.tempDelTimeArr = [];
                }, e;
            }());
            t(s, "timeTaskArr", new Array()), t(s, "tempDelTimeArr", new Array());
            var a = function() {
                function e() {
                    t(this, "taskID", -1), t(this, "callback", null), t(this, "delay", 0), t(this, "destTime", 0), 
                    t(this, "curTime", 0), t(this, "isPause", !1);
                }
                return e.prototype.init = function(e, t, i, r, s) {
                    void 0 === s && (s = -1), this.callback = e, this.taskID = s, this.delay = t, this.destTime = i, 
                    this.curTime = r;
                }, e;
            }();
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/FadeInOutMgr.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./FadeMask.ts", "./SingletonBase.ts", "./ConstantCommon.ts" ], function(n) {
    "use strict";
    var t, e, a, o, i, r, s, u, d, c, f;
    return {
        setters: [ function(n) {
            t = n.inheritsLoose, e = n.defineProperty, a = n.assertThisInitialized, o = n.asyncToGenerator;
        }, function(n) {
            i = n.cclegacy, r = n._decorator, s = n.instantiate, u = n.game;
        }, function(n) {
            d = n.FadeMask;
        }, function(n) {
            c = n.SingletonBase;
        }, function(n) {
            f = n.ConstantCommon;
        } ],
        execute: function() {
            var l;
            i._RF.push({}, "05633VKFvVLuqoGRa50XfL8", "FadeInOutMgr", void 0);
            var v = r.ccclass;
            n("FadeInOutMgr", v("FadeInOutMgr")(l = function(n) {
                function i() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r];
                    return t = n.call.apply(n, [ this ].concat(i)) || this, e(a(t), "_fadeMask", null), 
                    t;
                }
                t(i, n);
                var r = i.prototype;
                return r.init = function() {
                    var n = o(function*() {
                        var n = yield rd.Asset.loadPrefab("ui/module/fadeMask", f.BUNDLE_NAME.PREFAB), t = s(n);
                        this._fadeMask = t.addComponent(d), u.addPersistRootNode(t);
                    });
                    return function() {
                        return n.apply(this, arguments);
                    };
                }(), r.fadeIn = function() {
                    var n = o(function*(n) {
                        var t;
                        void 0 === n && (n = 1), yield null === (t = this._fadeMask) || void 0 === t ? void 0 : t.fadeIn(n);
                    });
                    return function(t) {
                        return n.apply(this, arguments);
                    };
                }(), r.fadeOut = function() {
                    var n = o(function*(n) {
                        var t;
                        void 0 === n && (n = 1), yield null === (t = this._fadeMask) || void 0 === t ? void 0 : t.fadeOut(n);
                    });
                    return function(t) {
                        return n.apply(this, arguments);
                    };
                }(), i;
            }(c)) || l);
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/AdsManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./SingletonBase.ts", "./ConstantCommon.ts", "./RDCommand.ts", "./RDPlatformParam.ts", "./RDPlatformType.ts", "./ADMainPush.ts", "./ADBannerList.ts", "./ADDrawer.ts", "./NativeAds.ts", "./ADWxScreen.ts", "./ADDoubleScreen.ts", "./ADGameOver.ts", "./RDStatisticsManager.ts" ], function(t) {
    "use strict";
    var n, e, a, o, i, r, s, d, A, l, u, c, D, f, m, h, _, C, v, P, N, O, p, S, M;
    return {
        setters: [ function(t) {
            n = t.defineProperty, e = t.inheritsLoose, a = t.assertThisInitialized;
        }, function(t) {
            o = t.cclegacy, i = t.sys, r = t.find, s = t.Canvas, d = t.instantiate, A = t.v3;
        }, function(t) {
            l = t.Log;
        }, function(t) {
            u = t.SingletonBase;
        }, function(t) {
            c = t.ConstantCommon;
        }, function(t) {
            D = t.RDCommand;
        }, function(t) {
            f = t.RDPlatformParam;
        }, function(t) {
            m = t.RDPlatformType;
        }, function(t) {
            h = t.ADMainPush, _ = t.PUSH_TYPE;
        }, function(t) {
            C = t.ADBannerList;
        }, function(t) {
            v = t.ADDrawer;
        }, function(t) {
            P = t.default, N = t.NativeType;
        }, function(t) {
            O = t.ADWxScreen;
        }, function(t) {
            p = t.ADDoubleScreen;
        }, function(t) {
            S = t.ADGameOver;
        }, function(t) {
            M = t.CustomEventID;
        } ],
        execute: function() {
            o._RF.push({}, "062fd6yeF5Bz4Ms0dHdr7VD", "AdsManager", void 0);
            var T = function(t) {
                function o() {
                    for (var e, o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, n(a(e), "_interval", null), 
                    n(a(e), "_mainPush", []), n(a(e), "bannerList", []), n(a(e), "drawList", []), n(a(e), "_canvasComp", null), 
                    n(a(e), "_isShowVideoing", !1), n(a(e), "startGameTime", new Date().getTime()), 
                    e;
                }
                e(o, t);
                var u = o.prototype;
                return u.init = function() {
                    l.debug(o.TAG, "[AdsManager] Init");
                }, u.isMatrixAdOpen = function() {
                    return f.ADPARAM[rd.Platform.platformType].matrixAdOpen;
                }, u.showRewardAd = function(t, n) {
                    var e = this;
                    l.debug(this.constructor.name, "开始播放奖励广告"), this._isShowVideoing ? l.debug(this.constructor.name, "激励视频播放中") : ((i.isNative || rd.Platform.platformType === m.VIVOGame || rd.Platform.platformType === m.XMGame) && rd.Audio.pauseMusic(), 
                    this._isShowVideoing = !0, rd.Platform.sendData(D.CMD_SHOW_REWARD_VIDEO_AD, {
                        success: function(a) {
                            e._isShowVideoing = !1, l.debug(e.constructor.name, "激励视频广告播放成功"), (i.isNative || rd.Platform.platformType === m.VIVOGame || rd.Platform.platformType === m.XMGame) && rd.App.isInHomePage && rd.Audio.resumeMusic(), 
                            !e._canvasComp && (e._canvasComp = r("Canvas").getComponent(s)), e._canvasComp ? e._canvasComp.scheduleOnce(function() {
                                t.success(a), rd.Stats.customEvent(M.custom_ad_video, {
                                    triggeringMode: n
                                });
                            }, .1) : setTimeout(function() {
                                t.success(a), rd.Stats.customEvent(M.custom_ad_video, {
                                    triggeringMode: n
                                });
                            }, 100);
                        },
                        fail: function(n) {
                            e._isShowVideoing = !1, t.fail(), (i.isNative || rd.Platform.platformType === m.VIVOGame || rd.Platform.platformType === m.XMGame) && rd.App.isInHomePage && rd.Audio.resumeMusic();
                        }
                    }));
                }, u.showBannerAd = function(t) {
                    void 0 === t && (t = {}), rd.Platform.sendData(D.CMD_SHOW_BANNER_AD, t);
                }, u.hideBannerAd = function(t) {
                    void 0 === t && (t = !1), rd.Platform.sendData(D.CMD_HIDE_BANNER_AD, t);
                }, u.showCustomAdBannerBottom = function(t) {
                    rd.Platform.sendData(D.CMD_SHOW_CUSTOMAD_BANNER_AD, {
                        index: c.POSITION_TYPE.BOTTOM,
                        isShow: !0,
                        parent: t
                    });
                }, u.hideCustomAdBannerBottom = function() {
                    rd.Platform.sendData(D.CMD_SHOW_CUSTOMAD_BANNER_AD, {
                        index: c.POSITION_TYPE.BOTTOM,
                        isShow: !1,
                        parent: parent
                    });
                }, u.showCustomAdVBannerLEFT = function(t) {
                    rd.Platform.sendData(D.CMD_SHOW_CUSTOMAD_VBANNER_AD, {
                        index: c.POSITION_V_TYPE.LEFT,
                        isShow: !0,
                        parent: t
                    });
                }, u.hideCustomAdVBannerLEFT = function() {
                    rd.Platform.sendData(D.CMD_SHOW_CUSTOMAD_VBANNER_AD, {
                        index: c.POSITION_V_TYPE.LEFT,
                        isShow: !1
                    });
                }, u.showCustomAdVBannerRIGHT = function(t) {
                    rd.Platform.sendData(D.CMD_SHOW_CUSTOMAD_VBANNER_AD, {
                        index: c.POSITION_V_TYPE.RIGHT,
                        isShow: !0,
                        parent: t
                    });
                }, u.hideCustomAdVBannerRIGHT = function() {
                    rd.Platform.sendData(D.CMD_SHOW_CUSTOMAD_VBANNER_AD, {
                        index: c.POSITION_V_TYPE.RIGHT,
                        isShow: !1
                    });
                }, u.showCustomAdBannerTop = function(t) {
                    rd.Platform.sendData(D.CMD_SHOW_CUSTOMAD_BANNER_AD, {
                        index: c.POSITION_TYPE.TOP,
                        isShow: !0,
                        parent: t
                    });
                }, u.hideCustomAdBannerTop = function() {
                    rd.Platform.sendData(D.CMD_SHOW_CUSTOMAD_BANNER_AD, {
                        index: c.POSITION_TYPE.TOP,
                        isShow: !1
                    });
                }, u.showCustomAdIcon = function(t) {
                    rd.Platform.sendData(D.CMD_SHOW_CUSTOMAD_ICON_AD, {
                        isShow: !0,
                        parent: t
                    });
                }, u.hideCustomAdIcon = function() {
                    rd.Platform.sendData(D.CMD_SHOW_CUSTOMAD_ICON_AD, {
                        isShow: !1
                    });
                }, u.showCustomAdHot = function(t) {
                    l.log(this.constructor.name, "显示showCustomAdHot"), rd.Platform.sendData(D.CMD_SHOW_CUSTOMAD_HOT_AD, {
                        isShow: !0,
                        parent: t
                    });
                }, u.hideCustomAdHot = function() {
                    l.log(this.constructor.name, "hideCustomAdHot"), rd.Platform.sendData(D.CMD_SHOW_CUSTOMAD_HOT_AD, {
                        isShow: !1
                    });
                }, u.showCustomAdScene = function(t, n) {
                    rd.Platform.sendData(D.CMD_SHOW_CUSTOMAD_SCENE_AD, {
                        isShow: !0,
                        parent: t,
                        callback: n
                    });
                }, u.hideCustomAdScene = function() {
                    console.log("显示hideCustomAdScene"), rd.Platform.sendData(D.CMD_SHOW_CUSTOMAD_SCENE_AD, {
                        isShow: !1
                    });
                }, u.showGameBannerAd = function() {
                    rd.Platform.sendData(D.CMD_SHOW_BANNER_OFFICE_AD, null);
                }, u.hideGameBannerAd = function() {
                    rd.Platform.sendData(D.CMD_HIDE_BANNER_OFFICE_AD, null);
                }, u.showGamePortalAd = function() {
                    rd.Platform.sendData(D.CMD_SHOW_OFFICE_PORTAL_AD, null);
                }, u.hideGamePortalAd = function() {
                    rd.Platform.sendData(D.CMD_HIDE_OFFICE_PORTAL_AD, null);
                }, u.showInterstitialAd = function(t) {
                    var n, e, a, o;
                    if (void 0 === t && (t = {}), rd.Option.onlyVideo || f.ISDEBUG) return null === (a = (o = t).callback) || void 0 === a || a.call(o), 
                    !1;
                    var i, r, s = rd.Option.getNativeIntertital(t.type), d = rd.Utils.random(1, 100);
                    return !rd.Platform.isBtnFadeIn() && 1 != t.type || d > s ? (null === (i = (r = t).callback) || void 0 === i || i.call(r), 
                    !1) : (rd.Platform.sendData(D.CMD_SHOW_INTERSTITIAL_VIDEO_AD, t), null === (n = (e = t).callback) || void 0 === n || n.call(e), 
                    !0);
                }, u.showNativeAd = function(t, n, e, a) {
                    var o = this;
                    return void 0 === n && (n = null), void 0 === e && (e = ""), void 0 === a && (a = 1), 
                    this.hideNativeAd(t, "nativeADPrefab"), !(rd.Option.onlyVideo || !rd.Platform.getNativeAdSize()) && (rd.Platform.sdk.getGamePortBanner() || rd.Asset.loadPrefab("adUI/nativeADPrefab", c.BUNDLE_NAME.ATOM).then(function(i) {
                        var r = d(i);
                        t.addChild(r);
                        var s = r.getComponent(P);
                        s.setPopupName(e), s.setNativeType(a), r.name = "nativeADPrefab", l.debug(o.constructor.name, "原生广告"), 
                        n && n(s);
                    }), !0);
                }, u.showNativeIconAd = function(t, n, e) {
                    var a = this;
                    return void 0 === n && (n = null), void 0 === e && (e = ""), !(rd.Option.onlyVideo || !f.ADPARAM[rd.Platform.platformType.toString()].native_id || f.ADPARAM[rd.Platform.platformType.toString()].native_id.length <= 0) && (this.hideNativeAd(t, "nativeIconADPrefab"), 
                    rd.Asset.loadPrefab("adUI/nativeADPrefab", c.BUNDLE_NAME.ATOM).then(function(o) {
                        var i = d(o);
                        t.addChild(i);
                        var r = i.getComponent(P);
                        r.setNativeType(N.NATIVE_ICON), r.setPopupName(e), i.name = "nativeIconADPrefab", 
                        l.debug(a.constructor.name, "原生广告ICON"), n && n(r);
                    }), !0);
                }, u.showNativeInterstitial = function(t, n, e) {
                    return rd.Option.onlyVideo || t.getChildByName("nativeInterstitialADPrefab") ? (l.debug(this.constructor.name, "原生广告存在, 无法重新创建"), 
                    !0) : (rd.Asset.loadPrefab("adUI/nativeADPrefab", c.BUNDLE_NAME.ATOM).then(function(a) {
                        var o = d(a);
                        t.addChild(o);
                        var i = o.getComponent(P);
                        i.setPopupName("原生插屏"), i.setCloseCallback(n), i.setNativeType(N.NATIVE_INTERSTITIAL), 
                        o.name = "nativeInterstitialADPrefab", e && e(i);
                    }), !0);
                }, u.showNativeSplash = function(t, n, e, a) {
                    return void 0 === a && (a = "原生开屏"), rd.Option.onlyVideo || t.getChildByName("nativeSplashADPrefab") || !rd.Platform.getNativeAdSize() || f.ISDEBUG ? (l.debug(this.constructor.name, "原生广告存在, 无法重新创建"), 
                    null == n || n(), !0) : (rd.Asset.loadPrefab("adUI/nativeADPrefab", c.BUNDLE_NAME.ATOM).then(function(o) {
                        var i = d(o);
                        t.addChild(i);
                        var r = i.getComponent(P);
                        r.setPopupName(a), r.setCloseCallback(n), r.setNativeType(N.NATIVE_SPLASH), i.name = "nativeSplashADPrefab", 
                        e && e(r);
                    }), !0);
                }, u.showNativeBannerAd = function(t, n, e) {
                    var a = this;
                    return rd.Option.onlyVideo || !rd.Platform.getNativeAdSize() || (l.debug(this.constructor.name, "showNativeBannerAd"), 
                    this.hideNativeAd(t, "nativeBannerADPrefab"), rd.Asset.loadPrefab("adUI/nativeADPrefab", c.BUNDLE_NAME.ATOM).then(function(o) {
                        var i = d(o);
                        t.addChild(i);
                        var r = i.getComponent(P);
                        r.setCloseCallback(n), r.setNativeType(N.NATIVE_BANNER), i.name = "nativeBannerADPrefab", 
                        l.debug(a.constructor.name, "原生Banner广告"), e && e(r);
                    })), !1;
                }, u.hideNativeAd = function(t, n) {
                    t && t.getChildByName(n) && (l.debug(this.constructor.name, "原生广告存在, 删除"), t.removeChild(t.getChildByName(n)));
                }, u.createNative = function(t) {
                    rd.Platform.sendData(D.CMD_CREATE_NATIVE_AD, t);
                }, u.onNativeClick = function(t) {
                    rd.Platform.sendData(D.CMD_ClICK_NATIVE_AD, t);
                }, u.showMainPush = function(t, n, e) {
                    var a = this;
                    this.isMatrixAdOpen() && rd.Asset.loadPrefab("adUI/ADMainPush", c.BUNDLE_NAME.ATOM).then(function(e) {
                        var o = d(e);
                        t.addChild(o);
                        var i = o.getComponent(h);
                        i.setPosition(n), i.type = _.PUSH_SINGLE, i.setScale(1.5), a._mainPush.push(i);
                    });
                }, u.updateMainPush = function() {
                    var t = this;
                    l.debug(this.constructor.name, "更新主推"), rd.GameList.getPushGameByNet(function(n) {
                        var e = rd.Utils.random(0, n.length);
                        t._mainPush.length <= 0 || t._mainPush.forEach(function(a) {
                            a.node && a.node.parent.active && (l.debug(t.constructor.name, "======"), e >= n.length && (e = 0), 
                            a.freash(n[e]), a.setScale(1.5), e += 1);
                        });
                    });
                }, u.hideMainPush = function() {
                    this.isMatrixAdOpen() && (this._mainPush.forEach(function(t) {
                        t.node.destroy();
                    }), this._mainPush = [], clearTimeout(this._interval), this._interval = null);
                }, u.showADDraw = function(t, n) {
                    var e = this;
                    this.isMatrixAdOpen() && rd.Asset.loadPrefab("adUI/ADDrawer", c.BUNDLE_NAME.ATOM).then(function(a) {
                        var o = d(a);
                        t.addChild(o);
                        var i = o.getComponent(v);
                        i.setPositionY(n), e.drawList.push(i);
                    });
                }, u.hideADDraw = function() {
                    this.isMatrixAdOpen() && (this.drawList.forEach(function(t) {
                        t.node.destroy();
                    }), this.drawList = []);
                }, u.showADBannerList = function(t, n) {
                    var e = this;
                    this.isMatrixAdOpen() && rd.Asset.loadPrefab("adUI/ADBannerList", c.BUNDLE_NAME.ATOM).then(function(a) {
                        var o = d(a);
                        (t || r("Canvas")).addChild(o);
                        var i = o.getComponent(C);
                        i.setPosition(n), e.bannerList.push(i);
                    });
                }, u.hideADBannerList = function() {
                    this.isMatrixAdOpen() && (this.bannerList.forEach(function(t) {
                        t.node.destroy();
                    }), this.bannerList = []);
                }, u.showAdDialog = function(t) {
                    this.isMatrixAdOpen() && rd.Asset.loadPrefab("adUI/ADDialog", c.BUNDLE_NAME.ATOM).then(function(n) {
                        var e = d(n);
                        t.addChild(e);
                    });
                }, u.showAdScreen = function(t) {
                    void 0 === t && (t = null), rd.UI.showDialog("", null, t);
                }, u.showAdWxScreen = function() {
                    if (this.isMatrixAdOpen()) {
                        var t = r("Canvas").getChildByName("ADWXScreen");
                        r("Canvas").getChildByName("ADWXScreen") ? (t.active = !0, t.getComponent(O).setCloseCallback(null)) : rd.Asset.loadPrefab("adUI/ADWXScreen", c.BUNDLE_NAME.ATOM).then(function(t) {
                            var n = d(t);
                            n.name = "ADWXScreen", r("Canvas").addChild(n);
                            n.getComponent(O);
                            n.setPosition(A(0, 0, 0));
                        });
                    }
                }, u.showAdBombDialog = function(t) {
                    void 0 === t && (t = null), rd.UI.showDialog(c.UI_DIALOG_NAME.ADBOMBGAME, null, t);
                }, u.showAdDoubleDialog = function(t) {
                    if (void 0 === t && (t = null), this.isMatrixAdOpen()) {
                        var n = r("Canvas").getChildByName("ADDoubleScreen");
                        n ? (n.active = !0, n.getComponent(p).setCloseCallback(t)) : rd.Asset.loadPrefab("adUI/ADDoubleScreen", c.BUNDLE_NAME.ATOM).then(function(n) {
                            var e = d(n);
                            e.name = "ADDoubleScreen", r("Canvas").addChild(e);
                            var a = e.getComponent(p);
                            e.setPosition(A(0, 0, 0)), a.setCloseCallback(t);
                        });
                    } else t && t();
                }, u.showGameOverDialog = function(t, n) {
                    if (this.isMatrixAdOpen()) {
                        var e = r("Canvas").getChildByName("ADGameOver");
                        e ? (e.active = !0, e.getComponent(S).setGameResult(t, n)) : rd.Asset.loadPrefab("adUI/ADGameOver", c.BUNDLE_NAME.ATOM).then(function(e) {
                            var a = d(e);
                            a.name = "ADGameOver", r("Canvas").addChild(a);
                            var o = a.getComponent(S);
                            a.setPosition(A(0, 0, 0)), o.setGameResult(t, n);
                        });
                    } else n && n();
                }, o;
            }(u);
            n(T, "TAG", "AdsManager"), void 0 === window.rd && (window.rd = {});
            var g = t("default", T.getInstance());
            window.rd.Ads = g, o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDOppoMiniPlatform.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./RDPlatformParam.ts", "./RDPlatformType.ts", "./RDPlatform.ts", "./BannerAdOppo.ts", "./VideoAdOppo.ts", "./IntertitalAdOppo.ts", "./NativeAdOppo.ts" ], function(t) {
    "use strict";
    var n, e, o, i, a, s, r, c, u, h, d, l, m;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, e = t.defineProperty, o = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy;
        }, function(t) {
            a = t.Log;
        }, function(t) {
            s = t.ConstantCommon;
        }, function(t) {
            r = t.RDPlatformParam;
        }, function(t) {
            c = t.RDPlatformType;
        }, function(t) {
            u = t.RDPlatform;
        }, function(t) {
            h = t.BannerAdOppo;
        }, function(t) {
            d = t.VideoAdOppo;
        }, function(t) {
            l = t.IntertitalAdOppo;
        }, function(t) {
            m = t.NativeAdOppo;
        } ],
        execute: function() {
            i._RF.push({}, "083earze3xImZko8ytizPBv", "RDOppoMiniPlatform", void 0);
            t("RDOppoMiniPlatform", function(t) {
                function i(n) {
                    var i;
                    return i = t.call(this, n) || this, e(o(i), "startTime", new Date().getTime()), 
                    i;
                }
                n(i, t);
                var u = i.prototype;
                return u.initAD = function() {
                    var n = this;
                    t.prototype.initAD.call(this), setTimeout(function() {
                        var t = r.ADPARAM[c.OPPOGame.toString()].game_banner_id;
                        n._api.getSystemInfoSync().platformVersionCode >= 1076 ? (n._gameBannerADInstance = n._api.createGameBannerAd({
                            adUnitId: t
                        }), n._gameBannerADInstance && n._gameBannerADInstance.load && (a.debug(n.constructor.name, "oppo横幅广告初始化"), 
                        n._gameBannerADInstance.load().then(function() {
                            a.debug(this.constructor.name, "oppo横幅广告加载成功");
                        }).catch(function(t) {
                            a.debug(this.constructor.name, "oppo横幅广告加载失败:" + t.errCode + "," + t.errMsg);
                        }))) : a.debug(n.constructor.name, "快应用平台版本号低于1076，暂不支持互推盒子相关 API");
                    }, 5);
                }, u.onShow = function() {
                    console.error("OPPOSDK game enter foreground");
                }, u.onHide = function() {
                    console.log("OPPOSDK game enter background");
                }, u.initBanner = function() {
                    for (var t = r.ADPARAM[this.type.toString()].banner_preload_count || 1, n = 0; n < t; n++) {
                        console.log("创建=================banner");
                        var e = r.ADPARAM[this.type.toString()].banner_id, o = new h({
                            adUnitId: e,
                            adIntervals: 60
                        });
                        this._bannerADInstances.push(o);
                    }
                }, u.initVideo = function() {
                    var t = r.ADPARAM[this.type.toString()].video_id;
                    this._videoBoxInstance = new d({
                        adUnitId: "adunit-48a5d8e1ce82b9d9"
                    });
                }, u.initIntertitalAd = function() {
                    var t = r.ADPARAM[this.type.toString()].interstital_id;
                    this._interstitialAdInstance = new l({
                        adUnitId: "adunit-6610afa34f8f7843"
                    });
                }, u.initCustomAd = function() {}, u.initNative = function() {
                  this._nativeID = ["adunit-4ed759ac5bcc73ea","adunit-3231ae5992c2a0c4"];
                    for (var n = 0; n < this._nativeID.length; n++) {
                        var e = new m({
                            adUnitId: this._nativeID[n],
                            adIntervals: rd.Option.nativeFreashTime,
                            adDelay: rd.Option.delayShow + n * rd.Option.nativeDurition
                        });
                        this._nativeADInstanceList.push(e);
                    }
                    t.prototype.initNative.call(this);
                }, u.shareAppMessage = function(t) {}, u._showToast = function(t) {
                    this._api.showToast({
                        title: t,
                        icon: "none",
                        image: "",
                        mask: !1,
                        duration: 2e3,
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, u._gotoMiniGameByAppid = function(t) {
                    a.debug(this.constructor.name, "跳转小游戏" + t.packName), this._api.navigateToMiniGame({
                        pkgName: t.packName,
                        success: function() {
                            a.debug(this.constructor.name, "跳转成功");
                        },
                        fail: function(t) {
                            a.debug(this.constructor.name, JSON.stringify(t));
                        },
                        complete: function() {}
                    });
                }, u._vibrateShort = function(t) {
                    void 0 === t && (t = 50), 100 != t ? this.vibrate(t) : this.vibrateStrong();
                }, u.vibrateStrong = function() {
                    this._api.vibrateLong({
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, u.vibrate = function(t) {
                    new Date().getTime() - this._lastShakeTime < 100 || (this._lastShakeTime = new Date().getTime(), 
                    this._api.vibrateShort({
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    }));
                }, u._showSysBanner = function() {
                    var t = new Date().getTime();
                    if (!rd.Option.regionEnable && t - this.startTime < rd.Option.delayShow) a.debug(this.constructor.name, "oppo前面60s不能出现banner条广告"); else {
                        var n = r.ADPARAM[this.type.toString()].banner_preload_count || 1;
                        this._bannerShowIndex >= n && (this._bannerShowIndex = 0), a.debug(this.constructor.name, "调用banner" + this._bannerADInstances.length + " ==== " + this._bannerShowIndex), 
                        this._bannerADInstance && this._bannerADInstance.hide(), this._bannerADInstance = null;
                        var e = this._bannerADInstances[this._bannerShowIndex];
                        e.show({
                            success: function() {},
                            fail: function() {}
                        }), this._bannerADInstance = e, this._bannerShowIndex += 1;
                    }
                }, u._showGameBannerAd = function(t) {
                    if (a.debug(this.constructor.name, "oppo横幅广告显示"), !this._gameBannerADInstance) {
                        a.debug(this.constructor.name, "创建oppo横幅广告");
                        var n = r.ADPARAM[c.OPPOGame.toString()].game_banner_id;
                        this._api.getSystemInfoSync().platformVersionCode >= 1076 ? (this._gameBannerADInstance = this._api.createGameBannerAd({
                            adUnitId: n
                        }), this._gameBannerADInstance && this._gameBannerADInstance.load && this._gameBannerADInstance.load().then(function() {
                            a.debug(this.constructor.name, "oppo横幅广告加载成功");
                        }).catch(function(t) {
                            a.debug(this.constructor.name, "oppo横幅广告加载失败:" + t.errCode + "," + t.errMsg);
                        })) : a.debug(this.constructor.name, "快应用平台版本号低于1076，暂不支持互推盒子相关 API");
                    }
                    this._gameBannerADInstance && this._gameBannerADInstance.show().then(function() {
                        a.debug(this.constructor.name, "oppo横幅广告 显示成功");
                    }).catch(function(t) {
                        a.debug(this.constructor.name, "oppo横幅广告 显示失败:" + t.errCode + "," + t.errMsg);
                    });
                }, u._hideGameBannerAd = function(t) {
                    this._gameBannerADInstance && this._gameBannerADInstance.hide().then(function() {
                        a.debug(this.constructor.name, "隐藏oppo横幅广告 成功");
                    }).catch(function(t) {
                        a.debug(this.constructor.name, "隐藏oppo横幅广告 失败:" + t.errCode + "," + t.errMsg);
                    });
                }, u._showGamePortalAd = function(t) {
                    var n = this;
                    if (a.debug(this.constructor.name, "_showGamePortalAd"), this._gamePortalADInstance = null, 
                    this._isShowGamePortalAd = !0, !this._gamePortalADInstance) {
                        var e = r.ADPARAM[c.OPPOGame.toString()].game_portal_id;
                        this._api.getSystemInfoSync().platformVersionCode >= 1076 ? (this._gamePortalADInstance = this._api.createGamePortalAd({
                            adUnitId: e
                        }), this._gamePortalADInstance.load(), this._gamePortalADInstance.onLoad(function() {
                            a.debug(this.constructor.name, "互推盒子九宫格广告加载成功"), this._gamePortalADInstance.show().then(function() {
                                a.debug(this.constructor.name, "互推盒子九宫格广告展示 成功"), rd.Event.emit(s.EVENT_TYPE.NATIVE_AD_HIDE);
                            }).catch(function(t) {
                                a.debug(this.constructor.name, "互推盒子九宫格广告展示 失败" + t.errCode + "," + t.errMsg);
                            });
                        }.bind(this)), this._gamePortalADInstance.onError(function(t) {
                            a.debug(n.constructor.name, "互推盒子九宫格广告 错误" + JSON.stringify(t)), n._isShowGamePortalAd = !1;
                        }), this._gamePortalADInstance.onClose(function() {
                            a.debug(n.constructor.name, "互推盒子九宫格广告关闭"), n._isShowGamePortalAd = !1, rd.Event.emit(s.EVENT_TYPE.NATIVE_AD_SHOW);
                        })) : a.debug(this.constructor.name, "快应用平台版本号低于1076，暂不支持互推盒子相关 API");
                    }
                }, u._hideGamePortalAd = function(t) {
                    this._gamePortalADInstance && (this._gamePortalADInstance.destroy().then(function() {
                        a.debug(this.constructor.name, "destroy success");
                    }).catch(function(t) {
                        a.debug(this.constructor.name, "destroy fail with:" + t.errCode + "," + t.errMsg);
                    }), this._gamePortalADInstance = null);
                }, u._showVideo = function(t) {
                    this.isReviewed() ? this._rewardCaback && this._rewardCaback.success(null) : (a.debug(this.constructor.name, "准备激励广告 展示开始"), 
                    this._videoBoxInstance.show(this._rewardCaback));
                }, u._showIntertitalAd = function(t) {
                    a.debug(this.constructor.name, "准备插屏 展示开始", rd.Option.isShowOppoIntertital), this.isReviewed() || rd.Option.onlyVideo || !rd.Option.isShowOppoIntertital || (rd.Option.regionEnable ? rd.PushCtrl.showNatvieInterstitialAd() : this._interstitialAdInstance.show());
                }, u._createNativeAd = function(t) {
                    if (this.isReviewed() || rd.Option.onlyVideo) return a.debug(this.constructor.name, "审核中====="), 
                    null == t ? void 0 : t.fail();
                    if (!this.natvieAds) return a.debug(this.constructor.name, "原生广告没有数据, 稍后重试"), null == t ? void 0 : t.fail();
                    var n = this._getNative();
                    a.debug(this.constructor.name, "获取原生广告", n._config.adUnitId), null == t || t.success(n);
                }, u._createShortcutInstalled = function(t) {
                    var n = this;
                    this._api.hasShortcutInstalled({
                        success: function(t) {
                            console.log(n.constructor.name, "判断图标未存在时，创建图标" + JSON.stringify(t)), n._hasShortcutInstalled = t;
                        },
                        fail: function(t) {},
                        complete: function() {}
                    });
                }, u._installShortcut = function(t) {
                    var n = this;
                    console.log("_installShortcut"), this._api.installShortcut({
                        success: function() {
                            var t;
                            n._hasShortcutInstalled = !1, null === (t = n._shortCutInstalledCaback) || void 0 === t || t.success(null), 
                            console.log("_installShortcut_success");
                        },
                        fail: function(t) {
                            var e;
                            console.log("_installShortcut_fail", JSON.stringify(t)), null === (e = n._shortCutInstalledCaback) || void 0 === e || e.fail(), 
                            -3 === t.code ? n._showToast("添加桌面失败") : -1 === t.code ? n._showToast("桌面图标已存在") : n._showToast("添加桌面失败");
                        },
                        complete: function() {}
                    });
                }, u._login = function(n) {
                    var e = this;
                    setTimeout(function() {
                        e._api.login({
                            success: function(o) {
                                var i = "用户信息:" + JSON.stringify(o.data);
                                console.log(e.constructor.name, i), n.nickName = o.data.nickName, n.headId = o.data.avatar, 
                                t.prototype._login.call(e, n);
                            },
                            fail: function(t) {
                                a.debug(e.constructor.name, JSON.stringify(t));
                            }
                        });
                    }, .1);
                }, u.isShowNativeAd = function(t) {
                    return !0;
                }, u.canBaking = function() {
                    return !(this._api.getSystemInfoSync().platformVersionCode < 1092);
                }, u.exitGame = function() {
                    this._api.exitApplication({});
                }, i;
            }(u));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/BannerAdHw.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./BannerAdBase.ts" ], function(n) {
    "use strict";
    var t, i, s, e, o, a;
    return {
        setters: [ function(n) {
            t = n.inheritsLoose, i = n.defineProperty, s = n.assertThisInitialized;
        }, function(n) {
            e = n.cclegacy;
        }, function(n) {
            o = n.Log;
        }, function(n) {
            a = n.BannerAdBase;
        } ],
        execute: function() {
            e._RF.push({}, "08b1bo70SZO/aHPNChcBUUT", "BannerAdHw", void 0);
            n("BannerAdHw", function(n) {
                function e(t) {
                    var e;
                    return e = n.call(this, t) || this, i(s(e), "_showCallback", void 0), e._platName = "qg", 
                    e.create(), e;
                }
                t(e, n);
                var a = e.prototype;
                return a.create = function(n) {
                    var t, i, s, e, a = this;
                    console.log("调用create", n, this._platName, JSON.stringify(this._config)), this._adInstance = window[this._platName].createBannerAd({
                        adUnitId: this._config.adUnitId,
                        adIntervals: 30 | this._config.adIntervals,
                        style: this._config.style
                    }), o.debug(this.constructor.name, "创建：", this._config, this._adInstance), null === (t = this._adInstance) || void 0 === t || t.onLoad(function() {
                        var n;
                        o.debug(a.constructor.name, "系统banner加载成功", a._config.adUnitId), a.isShow = !0, 
                        null === (n = a._showCallback) || void 0 === n || n.success(), a._showCallback = null;
                    }), null === (i = this._adInstance) || void 0 === i || i.onError(function(n) {
                        var t;
                        o.debug(a.constructor.name, "系统banner错误", a._config.adUnitId, JSON.stringify(n)), 
                        a.isShow = !1, null === (t = a._showCallback) || void 0 === t || t.fail(), a._showCallback = null;
                    }), null === (s = this._adInstance) || void 0 === s || s.onResize(function(n) {
                        o.debug(a.constructor.name, JSON.stringify(n)), a._adInstance.style.top = a._config.systemInfo.windowHeight - n.height - (rd.Utils.isIphoneX() ? 20 : 0), 
                        a._adInstance.style.left = (a._config.systemInfo.windowWidth - n.width) / 2;
                    }), null === (e = this._adInstance) || void 0 === e || e.onClose(function(n) {
                        o.debug(a.constructor.name, "系统banner关闭", a._config.adUnitId);
                    });
                }, a.show = function(n) {
                    var t;
                    this._showCallback = n, null === (t = this._adInstance) || void 0 === t || t.show();
                }, e;
            }(a));
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/GunData.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./SingletonBase.ts" ], function(e) {
    "use strict";
    var t, n, a, i, u, r, s;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, n = e.createClass, a = e.defineProperty, i = e.assertThisInitialized;
        }, function(e) {
            u = e.cclegacy;
        }, function(e) {
            r = e.Constants;
        }, function(e) {
            s = e.SingletonBase;
        } ],
        execute: function() {
            u._RF.push({}, "0a901mD62dN+oL3nVGEQrSw", "GunData", void 0);
            var c = [ 200, 300, 600, 1500, 2e3 ], o = [ 300, 600, 1500, 2e3 ];
            e("GunData", function(e) {
                function u() {
                    for (var t, n = arguments.length, u = new Array(n), r = 0; r < n; r++) u[r] = arguments[r];
                    return t = e.call.apply(e, [ this ].concat(u)) || this, a(i(t), "_fireCDTime", 0), 
                    a(i(t), "_damage", 0), t;
                }
                t(u, e);
                var s = u.prototype;
                return s.upgradeLevel = function() {
                    var e = g.App.Account.getGunData();
                    e.level >= 5 || (e.level += 1, g.App.Account.setGunData(e), this._updateFireCDTime(), 
                    rd.Event.emit(r.EVENT_TYPE.UPGRADE_GUN_LV));
                }, s.upgradeDamage = function() {
                    var e = g.App.Account.getGunData();
                    e.damageLv >= 5 || (e.damageLv += 1, g.App.Account.setGunData(e), this._updateDamage(), 
                    rd.Event.emit(r.EVENT_TYPE.UPGRADE_GUN_DMG), rd.Event.emit(r.EVENT_TYPE.PLAY_UPGRADE_ANIM));
                }, s._updateFireCDTime = function() {
                    this._fireCDTime = r.GUN_BASE_CD_TIME - (this.level - 1) * r.GUN_LEVEL_DEC_TIME;
                }, s._updateDamage = function() {}, n(u, [ {
                    key: "level",
                    get: function() {
                        return g.App.Account.getGunData().level;
                    }
                }, {
                    key: "damageLv",
                    get: function() {
                        return g.App.Account.getGunData().damageLv;
                    }
                }, {
                    key: "fireCDTime",
                    get: function() {
                        return 0 === this._fireCDTime && this._updateFireCDTime(), this._fireCDTime;
                    }
                }, {
                    key: "damage",
                    get: function() {
                        return 0 === this._damage && this._updateDamage(), this._damage;
                    }
                }, {
                    key: "nextLvAmt",
                    get: function() {
                        return c[this.level];
                    }
                }, {
                    key: "nextDmgAmt",
                    get: function() {
                        return o[this.damageLv - 1];
                    }
                }, {
                    key: "isMaxLv",
                    get: function() {
                        return this.level >= 5;
                    }
                }, {
                    key: "isMaxDmgLv",
                    get: function() {
                        return this.damageLv >= 5;
                    }
                } ]), u;
            }(s));
            u._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/UIConstant.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var n, e;
    return {
        setters: [ function(t) {
            n = t.defineProperty;
        }, function(t) {
            e = t.cclegacy;
        } ],
        execute: function() {
            var o, u, r, c;
            e._RF.push({}, "0aa91EoAD1C56hrXtnopgpM", "UIConstant", void 0);
            var E = t("default", function() {});
            n(E, "UI_PREFAB_DEFAULT_URL", "prefab/ui/"), n(E, "STATUS", (u = o = function() {}, 
            n(o, "LOADING", 1), n(o, "PUT", 1), n(o, "DESTROY", 1), n(o, "EXISTENCE", 1), u)), 
            n(E, "ZINDEX", (c = r = function() {}, n(r, "SCENE", 20), n(r, "PANEL", 80), n(r, "UI", 100), 
            n(r, "DIALOG", 200), n(r, "TIPS", 300), n(r, "GUIDE", 400), n(r, "NOTICE", 500), 
            n(r, "LOADING", 600), n(r, "PUT_EVENT", 1e3), c)), e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/GameControl.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./MapMgr.ts" ], function(t) {
    "use strict";
    var e, a, i, n, o, E, r, _, s;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, a = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            n = t.cclegacy, o = t._decorator, E = t.Camera, r = t.Component;
        }, function(t) {
            _ = t.Constants;
        }, function(t) {
            s = t.MapMgr;
        } ],
        execute: function() {
            var m;
            n._RF.push({}, "0ab8aa2wglBn6tkL3SB0EUO", "GameControl", void 0);
            var A = o.ccclass, d = _.GAME_STATE, T = _.GAME_MODE;
            t("GameControl", A("GameControl")(m = function(t) {
                function n() {
                    for (var e, n = arguments.length, o = new Array(n), E = 0; E < n; E++) o[E] = arguments[E];
                    return e = t.call.apply(t, [ this ].concat(o)) || this, a(i(e), "_mapMgr", null), 
                    a(i(e), "_gameDuration", 0), a(i(e), "_readyTime", 0), a(i(e), "_startTime", 0), 
                    a(i(e), "_reviveTime", 0), e;
                }
                e(n, t);
                var o = n.prototype;
                return o.start = function() {
                    this._mapMgr = rd.Utils.getNodeByName(this.node, "mapMgr").addComponent(s), g.App.GameData.mainCamera = rd.Utils.getNodeComponent(this.node, "mainCamera", E), 
                    this._gameInit(), this._initCustomEvent();
                }, o._gameInit = function() {
                    this._initData(), this.schedule(this._timeSchedule, 1), rd.UI.showDialog(_.UI_DIALOG_NAME.COMMON), 
                    rd.UI.showDialog(_.UI_DIALOG_NAME.GAME), rd.Audio.playMusicByUrl(_.AUDIO_SOURCE_TYPE.BGM, !0, !1), 
                    rd.UI.popDialogUIMgr.popDialogUI(_.UI_DIALOG_NAME.LOADING);
                }, o._initData = function() {
                    this._readyTime = 0, this._reviveTime = 0, g.App.GameData.gameState = d.READY, g.App.GameScore.init();
                }, o._timeSchedule = function() {
                    this._gameDuration++, this._gameDuration % rd.Option.gamePropDur != 0 || !rd.Option.regionEnable || rd.UI.isDialogOnShow(_.UI_DIALOG_NAME.MONEY) || rd.UI.isDialogOnShow(_.UI_DIALOG_NAME.TURNTABLE) || rd.UI.isDialogOnShow(_.UI_DIALOG_NAME.SIGN_IN) || rd.UI.isDialogOnShow(_.UI_DIALOG_NAME.SETTING) || rd.UI.isDialogOnShow(_.UI_DIALOG_NAME.WORLD) || rd.UI.isDialogOnShow(_.UI_DIALOG_NAME.WEAPON) || rd.UI.isDialogOnShow(_.UI_DIALOG_NAME.GARAGE) || rd.UI.showDialog(_.UI_DIALOG_NAME.MONEY, "游戏内");
                }, o._initCustomEvent = function() {
                    rd.Event.on(_.EVENT_TYPE.QUICK_START, this._gameQuickStart, this), rd.Event.on(_.EVENT_TYPE.ENTER_GAME, this._enterGameScene, this), 
                    rd.Event.on(_.EVENT_TYPE.GAME_START, this._gameStart, this), rd.Event.on(_.EVENT_TYPE.GAME_PAUSE, this._gamePause, this), 
                    rd.Event.on(_.EVENT_TYPE.GAME_CONTINUE, this._gameContinue, this), rd.Event.on(_.EVENT_TYPE.GAME_WIN, this._gameWin, this), 
                    rd.Event.on(_.EVENT_TYPE.GAME_FINISH, this._gameFinish, this), rd.Event.on(_.EVENT_TYPE.GAME_RESULT, this._gameResult, this), 
                    rd.Event.on(_.EVENT_TYPE.GAME_OVER, this._gameOver, this), rd.Event.on(_.EVENT_TYPE.GAME_REVIVE, this._gameRevive, this), 
                    rd.Event.on(_.EVENT_TYPE.RESTART, this._enterGameScene.bind(this, !0), this), rd.Event.on(_.EVENT_TYPE.BACK_TO_HOME, this._backToHome, this), 
                    rd.Event.on(_.EVENT_TYPE.CLEAR_GAME_DATA, this._initData, this), rd.Event.on(_.EVENT_TYPE.CLEAR_STORAGE, this._clearLocalData, this);
                }, o._gameQuickStart = function(t, e) {
                    void 0 === e && (e = T.NORMAL), g.App.GameData.gameMode = e, this._setStartGameData(), 
                    rd.Event.emit(_.EVENT_TYPE.ENTER_GAME);
                }, o._setStartGameData = function() {
                    rd.Audio.stopMusic(), rd.UI.hideDialog(_.UI_DIALOG_NAME.COMMON), rd.UI.hideDialog(_.UI_DIALOG_NAME.MAIN);
                }, o._enterGameScene = function(t) {
                    void 0 === t && (t = !1), this._initData(), _.RCMD_UI_ARRAY.forEach(function(t) {
                        return rd.UI.hideDialog(t);
                    }), rd.App.playTimes += 1, this._setStartTime(), rd.Event.emit(_.EVENT_TYPE.FINISH_LOADING), 
                    rd.Stats.customEvent(t ? "restart" : "enterGame", {
                        gameMode: g.App.GameData.gameMode
                    });
                }, o._setStartTime = function() {
                    this._startTime = new Date().getTime();
                }, o._gameStart = function() {
                    g.App.GameData.gameState = d.START, rd.Social.startRecordVideo(300);
                }, o._gamePause = function() {
                    g.App.GameData.gameState = d.PAUSE, rd.Audio.pauseMusic();
                }, o._gameContinue = function() {
                    rd.Event.emit(_.EVENT_TYPE.GAME_START);
                }, o._gameWin = function() {
                    g.App.GameData.gameState = d.VICTORY, this.scheduleOnce(function() {
                        rd.Event.emit(_.EVENT_TYPE.GAME_RESULT);
                    }, 1), rd.Social.pauseRecordVideo(), rd.Stats.customEvent("gameWin", {
                        gameMode: g.App.GameData.gameMode,
                        gameTime: Math.round(.001 * (new Date().getTime() - this._startTime))
                    });
                }, o._gameFinish = function() {
                    g.App.GameData.gameState = d.FINISH;
                }, o._gameResult = function() {}, o._gameOver = function() {
                    g.App.GameData.gameState !== d.GAME_OVER && (g.App.GameData.gameState = d.GAME_OVER, 
                    rd.Audio.pauseMusic(), rd.App.setPhoneVibrate(!0), this.scheduleOnce(function() {
                        g.App.GameData.gameMode !== T.TUTORIAL ? rd.Event.emit(_.EVENT_TYPE.GAME_RESULT) : rd.Event.emit(_.EVENT_TYPE.GAME_REVIVE, !0);
                    }, 2), rd.Social.pauseRecordVideo(), rd.Stats.customEvent("gameOver", {
                        gameMode: g.App.GameData.gameMode,
                        gameTime: Math.round(.001 * (new Date().getTime() - (0 === this._reviveTime ? this._startTime : this._reviveTime)))
                    }));
                }, o._gameRevive = function(t) {
                    void 0 === t && (t = !1), t || (this._readyTime = 0, this._reviveTime = new Date().getTime());
                }, o._gameRestart = function() {
                    this._initData(), this._setStartTime(), this._mapMgr.clearMapData(), rd.App.playTimes += 1;
                }, o._backToHome = function() {
                    rd.UI.hideDialog(_.UI_DIALOG_NAME.GAME_RESULT), rd.Event.emit(_.EVENT_TYPE.CLEAR_GAME_DATA), 
                    rd.UI.showDialog(_.UI_DIALOG_NAME.LOADING, null, !0);
                }, o._clearGameData = function() {
                    this._mapMgr.clearMapData(), g.App.GameData.gameState = d.IN_HOME_PAGE, rd.Audio.stopMusic();
                }, o._clearLocalData = function() {
                    g.App.Account.clear();
                }, o.onDestroy = function() {
                    rd.Audio.releaseAudioClip(), rd.Stats.customEvent("quitGame", {
                        gameDuration: this._gameDuration
                    }), rd.Stats.logout();
                }, n;
            }(r)) || m);
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/Utils.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./SingletonBase.ts" ], function(t) {
    "use strict";
    var e, n, r, i, o, a, u, s, g;
    return {
        setters: [ function(t) {
            e = t.defineProperty, n = t.inheritsLoose;
        }, function(t) {
            r = t.cclegacy, i = t.screen, o = t.Button, a = t.EventHandler, u = t.math;
        }, function(t) {
            s = t.Log;
        }, function(t) {
            g = t.SingletonBase;
        } ],
        execute: function() {
            r._RF.push({}, "0bff3bUxhdCJrEoZGTVmgyd", "Utils", void 0);
            var c = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                n(e, t);
                var r = e.prototype;
                return r.random = function(t, e) {
                    return Math.floor(Math.random() * (e - t + 1)) + t;
                }, r.isLuck = function(t) {
                    var e = 100 * t;
                    return this.random(1, 1e4) <= e;
                }, r.getRandFromArr = function(t, e, n) {
                    if (void 0 === n && (n = !1), !(t instanceof Array)) return [];
                    var r = t.length, i = [];
                    for (e = r < e ? r : e; i.length < e; ) {
                        var o = t[this.random(0, r - 1)];
                        o && (n ? i.indexOf(o) < 0 && i.push(o) : i.push(o));
                    }
                    return i;
                }, r.parseTime = function(t, e) {
                    if (0 === arguments.length) return null;
                    var n, r = e || "{y}-{m}-{d} {h}:{i}:{s}";
                    "object" == typeof t ? n = t : ("string" == typeof t && /^[0-9]+$/.test(t) && (t = parseInt(t)), 
                    "number" == typeof t && 10 === t.toString().length && (t *= 1e3), n = new Date(t));
                    var i = {
                        y: n.getFullYear(),
                        m: n.getMonth() + 1,
                        d: n.getDate(),
                        h: n.getHours(),
                        i: n.getMinutes(),
                        s: n.getSeconds(),
                        a: n.getDay()
                    }, o = r.replace(/{([ymdhisa])+}/g, function(t, e) {
                        var n = i[e];
                        return "a" === e ? [ "日", "一", "二", "三", "四", "五", "六" ][n] : n.toString().padStart(2, "0");
                    });
                    return o;
                }, r.isNextDay = function(t, e) {
                    var n = this.getDateStruct(t), r = this.getDateStruct(e);
                    return n.y > r.y || n.m > r.m || n.d > r.d;
                }, r.isSameDay = function(t, e) {
                    return new Date(t).setHours(0, 0, 0, 0) === new Date(e).setHours(0, 0, 0, 0);
                }, r.isSameWeek = function(t, e) {
                    var n = new Date(t).setHours(0, 0, 0, 0), r = new Date(e).setHours(0, 0, 0, 0), i = 864e5, o = Math.floor(n / i), a = Math.floor(r / i);
                    return Math.floor((o + 4) / 7) === Math.floor((a + 4) / 7);
                }, r.getDateStruct = function(t) {
                    "number" == typeof t && 10 === t.toString().length && (t *= 1e3);
                    var e = new Date(t);
                    return {
                        y: e.getFullYear(),
                        m: e.getMonth() + 1,
                        d: e.getDate(),
                        h: e.getHours(),
                        i: e.getMinutes(),
                        s: e.getSeconds(),
                        a: e.getDay()
                    };
                }, r.CompareDate = function(t, e, n) {
                    var r = new Date(t.replace(/-/g, "/")), i = new Date(e.replace(/-/g, "/"));
                    return ">" === n ? r > i : ">=" === n ? r >= i : "==" === n && (r.getDate() === i.getDate() && r.getMonth() === i.getMonth() && r.getFullYear() === i.getFullYear());
                }, r.formatTime = function(t, e) {
                    t = 10 === ("" + t).length ? 1e3 * parseInt(t) : +t;
                    var n = new Date(t).getTime(), r = (Date.now() - n) / 1e3;
                    return r < 30 ? "刚刚" : r < 3600 ? Math.ceil(r / 60) + "分钟前" : r < 86400 ? Math.ceil(r / 3600) + "小时前" : r < 172800 ? "1天前" : e ? this.parseTime(t, e) : "";
                }, r.paramSecond = function(t) {
                    return t ? Math.ceil(new Date(t).getTime() / 1e3) : 0;
                }, r.isIphoneX = function() {
                    var t = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && 3 === window.devicePixelRatio && 375 === window.screen.width && 812 === window.screen.height, e = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && 3 === window.devicePixelRatio && 414 === window.screen.width && 896 === window.screen.height, n = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && 2 === window.devicePixelRatio && 414 === window.screen.width && 896 === window.screen.height;
                    return s.debug(this.constructor.name, "当前机型为isIphoneX:" + t + "isIPhoneXSMax:" + e + "isIPhoneXR:" + n), 
                    t || e || n;
                }, r.isMiniScreen = function() {
                    var t = i.windowSize;
                    return t.height / t.width <= 1.8;
                }, r.getUUID = function() {
                    for (var t = [], e = "0123456789abcdef", n = 0; n < 36; n++) t[n] = e.substr(Math.floor(16 * Math.random()), 1);
                    return t[14] = "4", t[19] = e.substr(3 & t[19] | 8, 1), t[8] = t[13] = t[18] = t[23] = "-", 
                    t.join("");
                }, r.isEmpty = function(t) {
                    return !t || t.length <= 0;
                }, r.IsUrl = function(t) {
                    if (!t) return !1;
                    return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(t);
                }, r.IsImage = function(t) {
                    if (!t) return !1;
                    var e = new RegExp(/\.(png|jpg|gif|jpeg)$/);
                    return !("" !== t && !e.test(t));
                }, r.urlToImage = function(t) {
                    return this.IsImage(t) || (t += "?a=a.png"), t;
                }, r.getNodeByName = function(t, e) {
                    if (!t) return null;
                    if (t.name === e) return t;
                    for (var n = t.children, r = 0, i = n.length; r < i; r++) {
                        var o = this.getNodeByName(n[r], e);
                        if (null !== o) return o;
                    }
                    return null;
                }, r.getParentByName = function(t, e) {
                    if (!t) return null;
                    var n = t.parent;
                    return n && n.name === e ? n : this.getParentByName(n, e);
                }, r.getNodeComponent = function(t, e, n) {
                    var r = this.getNodeByName(t, e);
                    return r ? r.getComponent(n) : null;
                }, r.getParentComponent = function(t, e, n) {
                    var r = this.getParentByName(t, e);
                    return r ? r.getComponent(n) : null;
                }, r.getRandomNumber = function(t, e) {
                    return Math.random() * (e - t) + t;
                }, r.getRandomInteger = function(t, e) {
                    return Math.floor(Math.random() * (e - t + 1) + t);
                }, r.isReachProbability = function(t) {
                    return Math.random() < t;
                }, r.getDecimalDigits = function(t, e) {
                    return void 0 === e && (e = 3), parseFloat(t.toFixed(e));
                }, r.prefixInteger = function(t, e) {
                    return (Array(e).join("0") + t).slice(-e);
                }, r.keepNumberPlaces = function(t, e) {
                    void 0 === e && (e = 2);
                    var n = Math.pow(10, e), r = (Math.round(t * n) / n).toString();
                    if (r.indexOf(".") < 0) {
                        r += ".";
                        for (var i = 0; i < e; i++) r += "0";
                    }
                    return r;
                }, r.getDelimiterString = function(t) {
                    return t.toString().replace(/(?=(\B\d{3})+$)/g, ",");
                }, r.conversFixFloat = function(t, e) {
                    return void 0 === e && (e = 3), parseFloat(t.toFixed(e));
                }, r.getLimitDigitString = function(t, e) {
                    return void 0 === e && (e = 4), t.length > e ? t.substring(0, e) + "..." : t;
                }, r.getArrayByColor = function(t, e) {
                    return e[0] = t.r, e[1] = t.g, e[2] = t.b, e[3] = t.a, e;
                }, r.getTimeStruct = function(t, e) {
                    var n = Math.floor(t / 36e5), r = Math.floor((t - 36e5 * n) / 6e4), i = Math.floor((t - (36e5 * n + 6e4 * r)) / 1e3), o = "";
                    if (1 === e) o = this.getTimeDigitTxt(i); else if (2 === e) o = this.getTimeDigitTxt(r) + ":" + this.getTimeDigitTxt(i); else if (3 === e) {
                        o = "" + (n > 0 ? this.getTimeDigitTxt(n) + ":" : "") + this.getTimeDigitTxt(r) + ":" + this.getTimeDigitTxt(i);
                    }
                    return o;
                }, r.getTimeDigitTxt = function(t) {
                    return t < 10 ? this.prefixInteger(t, 2) : t.toString();
                }, r.registerButtonEvent = function(t, e, n, r, i) {
                    var a = this.getNodeByName(t, e);
                    return null == a || a.on(o.EventType.CLICK, n, r, i), a;
                }, r.getEventHandler = function(t, e, n, r) {
                    if (void 0 === n && (n = null), void 0 === r && (r = ""), t.isValid) {
                        t.compName = t.compName || t.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, "");
                        var i = new a();
                        return i.target = n || t.node, i.component = t.compName, i.handler = e, i.customEventData = r, 
                        i;
                    }
                }, r.jumpTo_v3 = function(t, e) {
                    return {
                        value: t,
                        progress: this._jumpTo_progress(3, e)
                    };
                }, r.jumpTo_v2 = function(t, e) {
                    return {
                        value: t,
                        progress: this._jumpTo_progress(2, e)
                    };
                }, r._jumpTo_progress = function(t, e) {
                    var n = t, r = Math.sqrt(e);
                    return function(i, o, a, s) {
                        n >= t ? n = 1 : n++;
                        var g = u.lerp(i, o, s);
                        if (2 === n) {
                            var c = Math.abs(1 - 2 * s);
                            g += e - Math.pow(r * c, 2);
                        }
                        return g;
                    };
                }, e;
            }(g);
            e(c, "TAG", "Utils"), void 0 === window.rd && (window.rd = {});
            var l = t("default", c.getInstance());
            window.rd.Utils = l, r._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/VehicleMgr.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts" ], function(e) {
    "use strict";
    var t, n, i, o, r, c, s, l, a;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, n = e.defineProperty, i = e.assertThisInitialized;
        }, function(e) {
            o = e.cclegacy, r = e._decorator, c = e.instantiate, s = e.Component;
        }, function(e) {
            l = e.Constants;
        }, function(e) {
            a = e.ConstantCommon;
        } ],
        execute: function() {
            var h;
            o._RF.push({}, "0cdcafzOXlDE5DNk8Jc1o6/", "VehicleMgr", void 0);
            var _ = r.ccclass;
            e("VehicleMgr", _("VehicleMgr")(h = function(e) {
                function o() {
                    for (var t, o = arguments.length, r = new Array(o), c = 0; c < o; c++) r[c] = arguments[c];
                    return t = e.call.apply(e, [ this ].concat(r)) || this, n(i(t), "_vehicleNode", null), 
                    t;
                }
                t(o, e);
                var r = o.prototype;
                return r.start = function() {
                    this._loadVehicle(), this._registerEvent(!0);
                }, r._loadVehicle = function() {
                    var e = this, t = g.App.VehicleData.level;
                    rd.Asset.loadPrefab("warCar/vehicle/vehicleLv" + t, a.BUNDLE_NAME.PREFAB).then(function(t) {
                        e._vehicleNode && (e._vehicleNode.destroy(), rd.Event.emit(l.EVENT_TYPE.PLAY_UPGRADE_ANIM)), 
                        e._vehicleNode = c(t), e.node.addChild(e._vehicleNode), rd.Event.emit(l.EVENT_TYPE.UPDATE_STICKMAN);
                    });
                }, r._registerEvent = function(e) {
                    var t = e ? "on" : "off";
                    rd.Event[t](l.EVENT_TYPE.UPGRADE_VEHICLE_LV, this._loadVehicle, this);
                }, r.onDestroy = function() {
                    this._registerEvent(!1);
                }, o;
            }(s)) || h);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/AccountData.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./constant-user.ts", "./IDataModel.ts" ], function(e) {
    "use strict";
    var t, n, a, i, s, u;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, n = e.createClass;
        }, function(e) {
            a = e.cclegacy;
        }, function(e) {
            i = e.Constants;
        }, function(e) {
            s = e.ACCOUNT;
        }, function(e) {
            u = e.IDataModel;
        } ],
        execute: function() {
            a._RF.push({}, "0db7e3XfEFB8bf940SIePwQ", "AccountData", void 0);
            e("AccountModel", function(e) {
                function a() {
                    return e.call(this, "MyWarCar") || this;
                }
                t(a, e);
                var u = a.prototype;
                return u.initData = function() {
                    this.saveValueByKey(s.MONEY, 0), this.saveValueByKey(s.FIRST_GAME, 1);
                }, u.saveValueByKey = function(e, t) {
                    this.Set(e, t), this.Save();
                }, u.getValueByKey = function(e, t) {
                    return this.Query(e, t);
                }, u.nextLevel = function() {
                    var e = this.getValueByKey(s.STAGE, 1);
                    e += 1, this.saveValueByKey(s.STAGE, e);
                }, u.setMoneyNoEvent = function(e) {
                    if (this.gameMoney !== e) {
                        var t = Math.max(0, e);
                        this.saveValueByKey(s.MONEY, t);
                    }
                }, u.getAchievement = function(e) {
                    return this._getLocalData(s.ACHIEVEMENT, e) || {
                        count: 0
                    };
                }, u.setAchievement = function(e, t) {
                    this._setLocalData(s.ACHIEVEMENT, e, t);
                }, u.getVehicleData = function() {
                    return JSON.parse(this.getValueByKey(s.VEHICLE_DATA)) || {
                        level: 1,
                        speedLv: 1
                    };
                }, u.setVehicleData = function(e) {
                    this.saveValueByKey(s.VEHICLE_DATA, JSON.stringify(e));
                }, u.getFuelData = function() {
                    return JSON.parse(this.getValueByKey(s.FUEL_DATA)) || {
                        level: 1,
                        speedLv: 1
                    };
                }, u.setFuelData = function(e) {
                    this.saveValueByKey(s.FUEL_DATA, JSON.stringify(e));
                }, u.getSawData = function() {
                    return JSON.parse(this.getValueByKey(s.SAW_DATA)) || {
                        level: 1,
                        damageLv: 1
                    };
                }, u.setSawData = function(e) {
                    this.saveValueByKey(s.SAW_DATA, JSON.stringify(e));
                }, u.getGunData = function() {
                    return JSON.parse(this.getValueByKey(s.GUN_DATA)) || {
                        level: 0,
                        damageLv: 1
                    };
                }, u.setGunData = function(e) {
                    this.saveValueByKey(s.GUN_DATA, JSON.stringify(e));
                }, u.getRocketData = function() {
                    return JSON.parse(this.getValueByKey(s.ROCKET_DATA)) || {
                        level: 0,
                        damageLv: 1
                    };
                }, u.setRocketData = function(e) {
                    this.saveValueByKey(s.ROCKET_DATA, JSON.stringify(e));
                }, u.getMapData = function(e) {
                    return this._getLocalData(s.MAP_DATA, e) || {
                        isUnlock: !1
                    };
                }, u.setMapData = function(e, t) {
                    this._setLocalData(s.MAP_DATA, e, t);
                }, u._getReveData = function(e) {
                    var t = this.getValueByKey(e);
                    return t || (t = JSON.stringify({
                        count: 0,
                        time: 0
                    }), this.saveValueByKey(e, t)), JSON.parse(t);
                }, u._getLocalData = function(e, t) {
                    var n = this.getValueByKey(e);
                    return n || (n = JSON.stringify({}), this.saveValueByKey(e, n)), JSON.parse(n)[t];
                }, u._setLocalData = function(e, t, n) {
                    var a = JSON.parse(this.getValueByKey(e));
                    a[t] = n, this.saveValueByKey(e, JSON.stringify(a));
                }, n(a, [ {
                    key: "level",
                    get: function() {
                        return this.getValueByKey(s.STAGE, 1);
                    },
                    set: function(e) {
                        this.saveValueByKey(s.STAGE, e);
                    }
                }, {
                    key: "gameMoney",
                    get: function() {
                        return this.getValueByKey(s.MONEY, 0);
                    },
                    set: function(e) {
                        this.setMoneyNoEvent(e), rd.Event.emit(i.EVENT_TYPE.UPDATE_MOENY);
                    }
                }, {
                    key: "signInfo",
                    get: function() {
                        var e = this.getValueByKey(s.SIGN_IN);
                        e ? JSON.parse(e).version || (e = JSON.stringify({
                            count: 0,
                            time: 0,
                            version: 1
                        }), this.saveValueByKey(s.SIGN_IN, e)) : (e = JSON.stringify({
                            count: 0,
                            time: 0
                        }), this.saveValueByKey(s.SIGN_IN, e));
                        return JSON.parse(e);
                    },
                    set: function(e) {
                        this.saveValueByKey(s.SIGN_IN, JSON.stringify(e));
                    }
                }, {
                    key: "turntableInfo",
                    get: function() {
                        return this._getReveData(s.TURNTABLE);
                    },
                    set: function(e) {
                        this.saveValueByKey(s.TURNTABLE, JSON.stringify(e));
                    }
                }, {
                    key: "settingInfo",
                    get: function() {
                        var e = this.getValueByKey(s.SETTING);
                        return e ? JSON.parse(e) : {
                            musicVolume: 1,
                            soundVolume: 1,
                            isVibrate: !0
                        };
                    },
                    set: function(e) {
                        this.saveValueByKey(s.SETTING, JSON.stringify(e));
                    }
                }, {
                    key: "isFirstGame",
                    get: function() {
                        return 1 === this.getValueByKey(s.FIRST_GAME);
                    },
                    set: function(e) {
                        this.saveValueByKey(s.FIRST_GAME, e ? 1 : 0);
                    }
                }, {
                    key: "loginDays",
                    get: function() {
                        return this._getReveData(s.LOGIN_DAYS);
                    },
                    set: function(e) {
                        this.saveValueByKey(s.LOGIN_DAYS, JSON.stringify(e));
                    }
                }, {
                    key: "isFirstEnterGame",
                    get: function() {
                        var e;
                        return 1 === (null !== (e = this.getValueByKey(s.FIRST_ENTER_GAME)) && void 0 !== e ? e : 1);
                    },
                    set: function(e) {
                        this.saveValueByKey(s.FIRST_ENTER_GAME, e ? 1 : 0);
                    }
                }, {
                    key: "isRecvMoney",
                    get: function() {
                        return 1 === this.getValueByKey(s.FREE_MONEY);
                    },
                    set: function(e) {
                        this.saveValueByKey(s.FREE_MONEY, e ? 1 : 0);
                    }
                }, {
                    key: "isShowMoveTutorial",
                    get: function() {
                        var e;
                        return 1 === (null !== (e = this.getValueByKey(s.SHOW_MOVE_TUTORIAL)) && void 0 !== e ? e : 1);
                    },
                    set: function(e) {
                        this.saveValueByKey(s.SHOW_MOVE_TUTORIAL, e ? 1 : 0);
                    }
                }, {
                    key: "tutorialStep",
                    get: function() {
                        var e;
                        return null !== (e = this.getValueByKey(s.TUTORIAL_STEP)) && void 0 !== e ? e : 0;
                    },
                    set: function(e) {
                        this.saveValueByKey(s.TUTORIAL_STEP, e);
                    }
                }, {
                    key: "backCityData",
                    get: function() {
                        var e = this.getValueByKey(s.BACK_CITY_DATA);
                        return e ? JSON.parse(e) : {
                            isFree: !0,
                            isVideo: !1
                        };
                    },
                    set: function(e) {
                        this.saveValueByKey(s.BACK_CITY_DATA, JSON.stringify(e));
                    }
                }, {
                    key: "curMapLv",
                    get: function() {
                        var e;
                        return null !== (e = this.getValueByKey(s.CURRENT_MAP_LV)) && void 0 !== e ? e : 1;
                    },
                    set: function(e) {
                        this.saveValueByKey(s.CURRENT_MAP_LV, e);
                    }
                } ]), a;
            }(u));
            a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/IntertitalAdWx.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./IntertitalAdBase.ts" ], function(t) {
    "use strict";
    var n, i, o, e, a, s, c;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, i = t.defineProperty, o = t.assertThisInitialized;
        }, function(t) {
            e = t.cclegacy;
        }, function(t) {
            a = t.Log;
        }, function(t) {
            s = t.ConstantCommon;
        }, function(t) {
            c = t.IntertitalAdBase;
        } ],
        execute: function() {
            e._RF.push({}, "0dd93jyNwhODJsY7ac5TlZl", "IntertitalAdWx", void 0);
            t("IntertitalAdWx", function(t) {
                function e(n) {
                    var e;
                    return e = t.call(this, n) || this, i(o(e), "_callback", null), e._platName = "wx", 
                    e.create(), e;
                }
                n(e, t);
                var c = e.prototype;
                return c.create = function(t) {
                    var n, i, o, e, c, l, r, u = this;
                    this._adInstance = null === (n = window[this._platName]) || void 0 === n ? void 0 : n.createInterstitialAd({
                        adUnitId: "adunit-6610afa34f8f7843"
                    }), a.debug(this.constructor.name, "创建 系统插屏"), null === (i = this._adInstance) || void 0 === i || null === (o = i.onLoad) || void 0 === o || o.call(i, function() {
                        var t;
                        (a.debug(u.constructor.name, "系统插屏 加载成功"), u._callback) && (null === (t = u._adInstance) || void 0 === t || t.show(), 
                        u.isShow = !0, rd.Event.emit(s.EVENT_TYPE.ADS_INTERSTITIALAD, "success"));
                    }), null === (e = this._adInstance) || void 0 === e || null === (c = e.onError) || void 0 === c || c.call(e, function(t) {
                        a.debug(u.constructor.name, "系统插屏 错误", JSON.stringify(t)), u.isShow = !1;
                    }), null === (l = this._adInstance) || void 0 === l || null === (r = l.onClose) || void 0 === r || r.call(l, function() {
                        rd.Event.emit(s.EVENT_TYPE.ADS_INTERSTITIALAD, "fail"), a.debug(u.constructor.name, "系统插屏 关闭"), 
                        u.isShow = !1;
                    });
                }, c.show = function(t) {
                    var n = this;
                    this._callback = t, this._adInstance.show().catch(function(t) {
                        a.debug(n.constructor.name, "系统插屏失败" + t);
                    });
                }, e;
            }(c));
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/NodePool.ts", [ "cc" ], function() {
    "use strict";
    var o, t;
    return {
        setters: [ function(e) {
            o = e.cclegacy, t = e.NodePool;
        } ],
        execute: function() {
            o._RF.push({}, "0fa5dbm5m1GbIh/q6S+m9+4", "NodePool", void 0), t.prototype.get = function() {
                var o = this._pool.length - 1;
                if (o < 0) return null;
                var t, e = this._pool[o];
                this._pool.length = o;
                for (var l = this.poolHandlerComp ? e.getComponent(this.poolHandlerComp) : null, n = arguments.length, r = new Array(n), u = 0; u < n; u++) r[u] = arguments[u];
                return null == l || null === (t = l.reuse) || void 0 === t || t.call.apply(t, [ l ].concat(r)), 
                e;
            }, o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDIOSPlatform.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./RDPlatformParam.ts", "./RDPlatformType.ts", "./RDPlatform.ts" ], function(t) {
    "use strict";
    var e, o, n, i, r, s;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            o = t.cclegacy;
        }, function(t) {
            n = t.Log;
        }, function(t) {
            i = t.RDPlatformParam;
        }, function(t) {
            r = t.RDPlatformType;
        }, function(t) {
            s = t.RDPlatform;
        } ],
        execute: function() {
            o._RF.push({}, "0ff50Lje9dLdK+7LvU0J7C6", "RDIOSPlatform", void 0);
            t("RDIOSPlatform", function(t) {
                function o() {
                    return t.apply(this, arguments) || this;
                }
                e(o, t);
                var s = o.prototype;
                return s.initAD = function() {
                    this._hasShortcutInstalled = !0;
                }, s._showBannerAd = function(t) {
                    if (!this.isReviewed()) {
                        n.debug(this.constructor.name, "ios show Banner");
                        var e = i.ADPARAM[r.Ios.toString()].banner_id, o = window.jsb.reflection.callStaticMethod("AdManager", "showBannerAd:", e);
                        n.debug(this.constructor.name, "ios return" + o);
                    }
                }, s._hideBannerAd = function(t) {
                    n.debug(this.constructor.name, "ios hide Banner"), window.jsb.reflection.callStaticMethod("AdManager", "hideBannerAd", "");
                }, s._showVideo = function(t) {
                    if (this.isReviewed()) this._rewardCaback && this._rewardCaback.success(null); else {
                        n.debug(this.constructor.name, "ios show video");
                        var e = i.ADPARAM[r.Ios.toString()].video_id;
                        window.jsb.reflection.callStaticMethod("AdManager", "showVideoAd:", e);
                    }
                }, s._showIntertitalAd = function(t) {
                    if (!this.isReviewed()) {
                        n.debug(this.constructor.name, "ios show video");
                        var e = i.ADPARAM[r.Ios.toString()].interstital_id;
                        window.jsb.reflection.callStaticMethod("AdManager", "showFullScreenAd:", e);
                    }
                }, s._vibrateShort = function(t) {
                    window.jsb.reflection.callStaticMethod("AdManager", "shake");
                }, o;
            }(s));
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/OptionsManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./SingletonBase.ts", "./RDPlatformType.ts" ], function(e) {
    "use strict";
    var t, n, i, r, a, o, g, y;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, n = e.defineProperty, i = e.assertThisInitialized, r = e.createClass;
        }, function(e) {
            a = e.cclegacy;
        }, function(e) {
            o = e.Log;
        }, function(e) {
            g = e.SingletonBase;
        }, function(e) {
            y = e.RDPlatformType;
        } ],
        execute: function() {
            a._RF.push({}, "10f47ZUDfFAmKdBovm+SezF", "OptionsManager", void 0);
            var f = function(e) {
                function a() {
                    for (var t, r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                    return t = e.call.apply(e, [ this ].concat(a)) || this, n(i(t), "configData", {
                        regionEnable: !1
                    }), n(i(t), "platNameConfig", null), n(i(t), "_urlCallback", null), t;
                }
                t(a, e);
                var g = a.prototype;
                return g.init = function(e) {
                    this._urlCallback = e, this.initLWsdk();
                }, g.initLWsdk = function() {
                    var e = this, t = "https://xcyyby.tiequangame.com/option/" + ("version_" + rd.Platform.HeyGameParam.configName) + ".json?" + new Date().getTime();
                    rd.Http.loadUrl(t, function(n) {
                        if (n) {
                            o.debug("开始", t), e.configData = JSON.parse(n), e.configData.regionEnable = !1, 
                            e.platNameConfig = rd.Platform.getSdkConfig(e.configData), o.debug(e.constructor.name, "配置", JSON.stringify(e.platNameConfig));
                            var i = rd.Platform.getPlatformAreaCode(), r = rd.Platform.HeyGameParam.appid;
                            t = "https://gamecenter.hey-games.com/gamecenter/cfg/version?appid=" + r + "&" + i, 
                            rd.Http.loadUrl(t, function(n) {
                                if (n) {
                                    var i = JSON.parse(n);
                                    e.configData.regionEnable = !!i.data && (1 === i.data.switch && 1 === i.data.tickSwProtErrOnoff), 
                                    o.debug(e.constructor.name, "配置", JSON.stringify(i), e.configData.regionEnable, t), 
                                    e.getWxConfig();
                                } else {
                                    var r;
                                    null === (r = e._urlCallback) || void 0 === r || r.call(e);
                                }
                            });
                        } else {
                            var a;
                            null === (a = e._urlCallback) || void 0 === a || a.call(e);
                        }
                    });
                }, g.getWxConfig = function() {
                    var e = this;
                    if (rd.Platform.platformType == y.WeixinMinGame || rd.Platform.platformType == y.None) {
                        var t = rd.Platform.getPlatformAreaCode(), n = "https://gamecenter.hey-games.com/gamecenter/cfg/selfdef?appid=" + rd.Platform.HeyGameParam.appid + "&" + t;
                        rd.Http.loadUrl(n, function(t) {
                            var i;
                            if (t) {
                                var r = JSON.parse(t).data || [];
                                e.platNameConfig || (e.platNameConfig = {});
                                for (var a = 0; a < r.length; a++) {
                                    var g = r[a];
                                    e.platNameConfig[g.keyName] = Number(g.keyValue);
                                }
                                o.log("配置文件3", n, JSON.stringify(r));
                            }
                            null === (i = e._urlCallback) || void 0 === i || i.call(e);
                        });
                    } else {
                        var i;
                        null === (i = this._urlCallback) || void 0 === i || i.call(this);
                    }
                }, g.getConfigByKey = function(e, t) {
                    return this.platNameConfig && null != this.platNameConfig[e] && null != this.platNameConfig[e] ? this.platNameConfig[e] : t;
                }, g.getNativeIntertital = function(e) {
                    return this.getConfigByKey("nativeIntertital_" + e, 0);
                }, g.getNativeIntertitalDelay = function(e) {
                    return this.getConfigByKey("nativeIntertitalDelay_" + e, 0);
                }, g.getRewardVideoPercent = function(e) {
                    return this.getConfigByKey("gameRewardVideoPercent_" + e, 0);
                }, g.getGameEndLevel = function(e) {
                    return this.getConfigByKey("gameEnd_" + e, 1);
                }, g.getGameEndReceive = function(e) {
                    return this.getConfigByKey("resultReceive_" + e, 1);
                }, g.getGameStartLevel = function(e) {
                    return this.getConfigByKey("gameStart_" + e, 1);
                }, r(a, [ {
                    key: "config",
                    get: function() {
                        return this.configData;
                    }
                }, {
                    key: "regionEnable",
                    get: function() {
                        return this.config.regionEnable;
                    }
                }, {
                    key: "onlyVideo",
                    get: function() {
                        return this.getConfigByKey("onlyVideo", !1);
                    }
                }, {
                    key: "isShowOppoIntertital",
                    get: function() {
                        return this.getConfigByKey("isShowOppoIntertital", !1);
                    }
                }, {
                    key: "gradeOpen",
                    get: function() {
                        return this.getConfigByKey("gradeOpen", !1);
                    }
                }, {
                    key: "isTryLookAd",
                    get: function() {
                        return this.regionEnable && this.getConfigByKey("isTryLookAd", !1);
                    }
                }, {
                    key: "delayShow",
                    get: function() {
                        return this.regionEnable ? this.getConfigByKey("delayShow", 6e4) : 6e4;
                    }
                }, {
                    key: "nativeFreashTime",
                    get: function() {
                        return this.getConfigByKey("nativeFreashTime", 9e4);
                    }
                }, {
                    key: "nativeDurition",
                    get: function() {
                        return this.getConfigByKey("nativeDurition", 3e3);
                    }
                }, {
                    key: "nativeFreash",
                    get: function() {
                        return 1e3 * this.getConfigByKey("nativeFreash", 35);
                    }
                }, {
                    key: "nativeSwitch",
                    get: function() {
                        return this.getConfigByKey("native_switch", !1);
                    }
                }, {
                    key: "nativeSplashSwitch",
                    get: function() {
                        return this.getConfigByKey("native_splash_switch", !1);
                    }
                }, {
                    key: "twoClickRand",
                    get: function() {
                        return this.getConfigByKey("twoClickRand", 0);
                    }
                }, {
                    key: "addNative",
                    get: function() {
                        return this.getConfigByKey("addNative", 0);
                    }
                }, {
                    key: "nativeReport",
                    get: function() {
                        return this.getConfigByKey("native_report", 100);
                    }
                }, {
                    key: "bannerInterval",
                    get: function() {
                        return this.getConfigByKey("bannerInterval", 3e3);
                    }
                }, {
                    key: "autoShowDialogUICount",
                    get: function() {
                        return this.getConfigByKey("autoShowDialogUICount", 2);
                    }
                }, {
                    key: "showBoxOpen",
                    get: function() {
                        return this.getConfigByKey("showBoxOpen", !1);
                    }
                }, {
                    key: "nativeCenterAdOpen",
                    get: function() {
                        return this.getConfigByKey("nativeCenterAdOpen", !0);
                    }
                }, {
                    key: "fadeInDelay",
                    get: function() {
                        return this.getConfigByKey("fade_in_delay", 500);
                    }
                }, {
                    key: "loadingDelay",
                    get: function() {
                        return this.getConfigByKey("loadingDelay", 2e3) / 1e3;
                    }
                }, {
                    key: "gamePropDur",
                    get: function() {
                        return this.getConfigByKey("gamePropDur", 3e5) / 1e3;
                    }
                }, {
                    key: "ageShow",
                    get: function() {
                        return this.getConfigByKey("ageShow", !1);
                    }
                }, {
                    key: "backGameSplash",
                    get: function() {
                        return this.getConfigByKey("backGameSplash", !1);
                    }
                }, {
                    key: "virtualShowDelay",
                    get: function() {
                        return this.getConfigByKey("virtualShowDelay", 2e4) / 1e3;
                    }
                }, {
                    key: "systemInsertSwitch",
                    get: function() {
                        return this.getConfigByKey("systemInsertSwitch", !1);
                    }
                }, {
                    key: "systemInsertToNativeInsertNumber",
                    get: function() {
                        return this.getConfigByKey("systemInsertToNativeInsertNumber", 0);
                    }
                }, {
                    key: "systemInsertDelayTime",
                    get: function() {
                        return this.getConfigByKey("systemInsertDelayTime", 0);
                    }
                }, {
                    key: "systemWXSwitch",
                    get: function() {
                        return this.regionEnable && rd.Platform.sdk.isGameToGame();
                    }
                }, {
                    key: "gameSplashInterval",
                    get: function() {
                        return this.getConfigByKey("gameSplashInterval", 1);
                    }
                }, {
                    key: "showVideoSwitch",
                    get: function() {
                        return this.getConfigByKey("showVideoSwitch", 0);
                    }
                }, {
                    key: "gameSplashSwitch",
                    get: function() {
                        return this.getConfigByKey("GameSplashSwitch", 0);
                    }
                }, {
                    key: "rewardedVideoSwitch",
                    get: function() {
                        return this.getConfigByKey("rewardedVideoSwitch", 0);
                    }
                }, {
                    key: "rewardedVideoInterval",
                    get: function() {
                        return this.getConfigByKey("rewardedvideoInterval", 0);
                    }
                }, {
                    key: "videoPlayConfirmProbability",
                    get: function() {
                        return this.getConfigByKey("videoPlayConfirmProbability", 0);
                    }
                } ]), a;
            }(g);
            void 0 === window.rd && (window.rd = {});
            var l = e("default", f.getInstance());
            window.rd.Option = l, a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/LookAtAdButton.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var e, r, o, n, i, a, u, p, s;
    return {
        setters: [ function(t) {
            e = t.applyDecoratedDescriptor, r = t.inheritsLoose, o = t.initializerDefineProperty, 
            n = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, a = t._decorator, u = t.SpriteFrame, p = t.Sprite, s = t.Component;
        } ],
        execute: function() {
            var l, c, m, y, F, d, h;
            i._RF.push({}, "1116bGyi31EiJgIuCGk0L//", "LookAtAdButton", void 0);
            var f = a.ccclass, A = a.property;
            t("LookAtAdButton", (l = f("LookAtAdButton"), c = A({
                type: u,
                tooltip: "开启状态"
            }), m = A({
                type: u,
                tooltip: "关闭状态"
            }), l((d = e((F = function(t) {
                function e() {
                    for (var e, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, o(n(e), "tryFrame", d, n(e)), 
                    o(n(e), "noneFrame", h, n(e)), e;
                }
                return r(e, t), e.prototype.onLoad = function() {
                    this.tryFrame || (this.tryFrame = rd.SptFrame.getSpriteFrameByName("Button_Try")), 
                    this.noneFrame || (this.noneFrame = rd.SptFrame.getSpriteFrameByName("Button_LookAds"));
                    var t = rd.Option.isTryLookAd;
                    this.node.getComponent(p).spriteFrame = t ? this.tryFrame : this.noneFrame;
                }, e;
            }(s)).prototype, "tryFrame", [ c ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), h = e(F.prototype, "noneFrame", [ m ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), y = F)) || y));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ADGameOver.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./ADMainPush.ts" ], function(t) {
    "use strict";
    var n, e, i, o, s, a, r, l, c, u, h, d, m, p, B, g;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, e = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            o = t.cclegacy, s = t._decorator, a = t.ButtonComponent, r = t.SpriteComponent, 
            l = t.v3, c = t.view, u = t.tween, h = t.instantiate, d = t.loader, m = t.SpriteFrame, 
            p = t.Component;
        }, function(t) {
            B = t.ConstantCommon;
        }, function(t) {
            g = t.ADMainPush;
        } ],
        execute: function() {
            var f;
            o._RF.push({}, "14a8aqN2OJKgJDAMA+JTHrw", "ADGameOver", void 0);
            var A = s.ccclass;
            s.property, t("ADGameOver", A("ADGameOver")(f = function(t) {
                function o() {
                    for (var n, o = arguments.length, s = new Array(o), a = 0; a < o; a++) s[a] = arguments[a];
                    return n = t.call.apply(t, [ this ].concat(s)) || this, e(i(n), "continueBtn", null), 
                    e(i(n), "titleBg", null), e(i(n), "title", null), e(i(n), "bottomContent", null), 
                    e(i(n), "result", !1), e(i(n), "callback", null), e(i(n), "isBanner", !1), n;
                }
                n(o, t);
                var s = o.prototype;
                return s.onLoad = function() {
                    this.continueBtn = rd.Utils.getNodeByName(this.node, "continueBtn").getComponent(a), 
                    this.continueBtn.node.on("click", this.onBackGame, this), this.titleBg = rd.Utils.getNodeByName(this.node, "top").getComponent(r), 
                    this.title = rd.Utils.getNodeByName(this.node, "title").getComponent(r), this.bottomContent = rd.Utils.getNodeByName(this.node, "center");
                }, s.onEnable = function() {
                    this.initBottomView(), this.isBanner = rd.Platform.bannerIsShow(), rd.Ads.hideBannerAd(), 
                    this.continueBtn.node.position = l(this.continueBtn.node.position.x, -c.getVisibleSize().height / 2 + 50, 0), 
                    this.continueBtn.interactable = !0, this.scheduleOnce(function() {
                        rd.Ads.showBannerAd();
                    }.bind(this), 1), this.scheduleOnce(function() {
                        var t = this;
                        u(this.continueBtn.node).to(.5, {
                            position: l(this.continueBtn.node.position.x, -c.getVisibleSize().height / 2 + 300, 0)
                        }).call(function() {
                            t.continueBtn.interactable = !0;
                        }).start();
                    }, 1), this.scheduleOnce(function() {
                        rd.PushCtrl.showMainPush(!1);
                    }, .5);
                }, s.onDisable = function() {
                    this.isBanner ? rd.Ads.showBannerAd() : rd.Ads.hideBannerAd(), rd.PushCtrl.showMainPush(!0), 
                    this.bottomContent.children.forEach(function(t) {
                        t.active = !1, t.eulerAngles = l(0, 0, 0);
                    });
                }, s.initBottomView = function() {}, s.createItem = function(t, n, e, i, o) {
                    var s = t.children[o];
                    if (s) {
                        s.active = !0;
                        var a = s.getComponent(g);
                        a.freash(n), a.setScale(e), s.setPosition(l(-c.getVisibleSize().width / 2 - 20, i.y, 0)), 
                        u(s).to(.5, {
                            position: i,
                            eulerAngles: l(0, 0, 360)
                        }, {
                            easing: "sineIn"
                        }).start();
                    } else rd.Asset.loadPrefab("adUI/ADMainPush", B.BUNDLE_NAME.ATOM).then(function(o) {
                        var s = h(o);
                        t.addChild(s), s.setPosition(l(-c.getVisibleSize().width / 2 - 20, i.y, 0));
                        var a = s.getComponent(g);
                        a.freash(n), a.setScale(e), u(s).to(.5, {
                            position: i,
                            eulerAngles: l(0, 0, 360)
                        }, {
                            easing: "sineIn"
                        }).start();
                    });
                }, s.setGameResult = function(t, n) {
                    var e = this;
                    this.result = t, this.callback = n;
                    var i = this.result ? "xiayiguan" : "jixuyouxi", o = this.result ? "shengli" : "shibai", s = this.result ? "shenglidi" : "shibaidi";
                    i = "adUI/ui/" + i + "/spriteFrame", o = "adUI/ui/" + o + "/spriteFrame", s = "adUI/ui/" + s + "/spriteFrame", 
                    d.loadRes(i, m, null, function(t, n) {
                        t ? console.warn(t) : e.continueBtn && (e.continueBtn.node.getComponent(r).spriteFrame = n);
                    }), d.loadRes(o, m, null, function(t, n) {
                        t ? console.warn(t) : e.title && (e.title.spriteFrame = n);
                    }), d.loadRes(s, m, null, function(t, n) {
                        t ? console.warn(t) : e.titleBg && (e.titleBg.spriteFrame = n);
                    });
                }, s.onBackGame = function() {
                    this.callback && this.callback(), this.node.active = !1;
                }, o;
            }(p)) || f);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RocketData.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./SingletonBase.ts" ], function(t) {
    "use strict";
    var e, n, a, i, c, u, o;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.createClass, a = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            c = t.cclegacy;
        }, function(t) {
            u = t.Constants;
        }, function(t) {
            o = t.SingletonBase;
        } ],
        execute: function() {
            c._RF.push({}, "1b2cbmuAYFPDbt1PtgmiWht", "RocketData", void 0);
            var r = [ 200, 300, 600, 1500, 2e3 ], s = [ 300, 600, 1500, 2e3 ];
            t("RocketData", function(t) {
                function c() {
                    for (var e, n = arguments.length, c = new Array(n), u = 0; u < n; u++) c[u] = arguments[u];
                    return e = t.call.apply(t, [ this ].concat(c)) || this, a(i(e), "_launchCDTime", 0), 
                    a(i(e), "_damage", 0), e;
                }
                e(c, t);
                var o = c.prototype;
                return o.upgradeLevel = function() {
                    var t = g.App.Account.getRocketData();
                    t.level >= 5 || (t.level += 1, g.App.Account.setRocketData(t), this._updateLaunchCDTime(), 
                    rd.Event.emit(u.EVENT_TYPE.UPGRADE_ROCKET_LV));
                }, o.upgradeDamage = function() {
                    var t = g.App.Account.getRocketData();
                    t.damageLv >= 5 || (t.damageLv += 1, g.App.Account.setRocketData(t), this._updateDamage(), 
                    rd.Event.emit(u.EVENT_TYPE.UPGRADE_ROCKET_DMG), rd.Event.emit(u.EVENT_TYPE.PLAY_UPGRADE_ANIM));
                }, o._updateLaunchCDTime = function() {
                    this._launchCDTime = u.ROCKET_BASE_CD_TIME - (this.level - 1) * u.ROCKET_LEVEL_DEC_TIME;
                }, o._updateDamage = function() {}, n(c, [ {
                    key: "level",
                    get: function() {
                        return g.App.Account.getRocketData().level;
                    }
                }, {
                    key: "damageLv",
                    get: function() {
                        return g.App.Account.getRocketData().damageLv;
                    }
                }, {
                    key: "launchCDTime",
                    get: function() {
                        return 0 === this._launchCDTime && this._updateLaunchCDTime(), this._launchCDTime;
                    }
                }, {
                    key: "damage",
                    get: function() {
                        return 0 === this._damage && this._updateDamage(), this._damage;
                    }
                }, {
                    key: "nextLvAmt",
                    get: function() {
                        return r[this.level];
                    }
                }, {
                    key: "nextDmgAmt",
                    get: function() {
                        return s[this.damageLv - 1];
                    }
                }, {
                    key: "isMaxLv",
                    get: function() {
                        return this.level >= 5;
                    }
                }, {
                    key: "isMaxDmgLv",
                    get: function() {
                        return this.damageLv >= 5;
                    }
                } ]), c;
            }(o));
            c._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/AgentUnit.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var i, n, e, r, s, o, c;
    return {
        setters: [ function(t) {
            i = t.inheritsLoose, n = t.defineProperty, e = t.assertThisInitialized, r = t.createClass;
        }, function(t) {
            s = t.cclegacy, o = t._decorator, c = t.Component;
        } ],
        execute: function() {
            var d;
            s._RF.push({}, "1e1dd5DPrdCWLfGLGE54YIe", "AgentUnit", void 0);
            var a = o.ccclass;
            t("AgentUnit", a("AgentUnit")(d = function(t) {
                function s() {
                    for (var i, r = arguments.length, s = new Array(r), o = 0; o < r; o++) s[o] = arguments[o];
                    return i = t.call.apply(t, [ this ].concat(s)) || this, n(e(i), "_agentId", 0), 
                    n(e(i), "_widthX", 0), n(e(i), "_widthZ", 0), n(e(i), "_rangeDist", 0), n(e(i), "_isStatic", !1), 
                    i;
                }
                i(s, t);
                var o = s.prototype;
                return o.init = function(t, i, n) {
                    void 0 === t && (t = 1), void 0 === i && (i = 1), void 0 === n && (n = !1), this._agentId = ++g.App.AgentMgr.agentCnt, 
                    this._widthX = t, this._widthZ = i, this._isStatic = n, g.App.AgentMgr.addAgent(this._agentId, this);
                }, o.updateWidth = function(t, i) {
                    this._widthX = t, this._widthZ = i;
                }, r(s, [ {
                    key: "id",
                    get: function() {
                        return this._agentId;
                    }
                }, {
                    key: "worldPos",
                    get: function() {
                        return this.node.worldPosition;
                    }
                }, {
                    key: "widthX",
                    get: function() {
                        return this._widthX;
                    }
                }, {
                    key: "widthZ",
                    get: function() {
                        return this._widthZ;
                    }
                }, {
                    key: "rangeDist",
                    get: function() {
                        return this._rangeDist;
                    }
                }, {
                    key: "isStatic",
                    get: function() {
                        return this._isStatic;
                    }
                } ]), s;
            }(c)) || d);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/MoneyStack.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./SingletonBase.ts" ], function(t) {
    "use strict";
    var n, e, i, s, o, r;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, e = t.createClass, i = t.defineProperty, s = t.assertThisInitialized;
        }, function(t) {
            o = t.cclegacy;
        }, function(t) {
            r = t.SingletonBase;
        } ],
        execute: function() {
            o._RF.push({}, "1ef082OqVBIeZiz2WRgC338", "MoneyStack", void 0);
            var a = [ 2, 3, 3, 4, 6, 6, 9 ];
            t("MoneyStack", function(t) {
                function o() {
                    for (var n, e = arguments.length, o = new Array(e), r = 0; r < e; r++) o[r] = arguments[r];
                    return n = t.call.apply(t, [ this ].concat(o)) || this, i(s(n), "_moneyCnt", 0), 
                    i(s(n), "_spawnCnt", 0), n;
                }
                return n(o, t), e(o, [ {
                    key: "moneyCnt",
                    get: function() {
                        return this._moneyCnt;
                    },
                    set: function(t) {
                        this._moneyCnt = t;
                    }
                }, {
                    key: "spawnCnt",
                    get: function() {
                        return this._spawnCnt;
                    },
                    set: function(t) {
                        this._spawnCnt = t, 0 === this._spawnCnt && (this._moneyCnt = 0);
                    }
                }, {
                    key: "isCanCollect",
                    get: function() {
                        return this.maxMoneyCnt > this._moneyCnt;
                    }
                }, {
                    key: "maxSingleStackCnt",
                    get: function() {
                        return 30 + 4 * (g.App.VehicleData.level - 1);
                    }
                }, {
                    key: "maxMoneyCnt",
                    get: function() {
                        return this.maxSingleStackCnt * a[g.App.VehicleData.level - 1];
                    }
                }, {
                    key: "intervalHeight",
                    get: function() {
                        return .26;
                    }
                } ]), o;
            }(r));
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/MapData.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./SingletonBase.ts" ], function(t) {
    "use strict";
    var n, e, a, i, o, c;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, e = t.createClass, a = t.defineProperty;
        }, function(t) {
            i = t.cclegacy;
        }, function(t) {
            o = t.Constants;
        }, function(t) {
            c = t.SingletonBase;
        } ],
        execute: function() {
            i._RF.push({}, "1f58cpbVVRHnJpCLSxwjxlw", "MapData", void 0);
            t("MapDataMgr", function(t) {
                function a() {
                    return t.apply(this, arguments) || this;
                }
                n(a, t);
                var i = a.prototype;
                return i.initLocalData = function() {
                    this.unlockMap(1, !0);
                }, i.getLocalData = function(t) {
                    return g.App.Account.getMapData(t);
                }, i.setLocalData = function(t, n) {
                    g.App.Account.setMapData(t, n);
                }, i.unlockMap = function(t, n) {
                    void 0 === n && (n = !1);
                    var e = this.getLocalData(t);
                    e.isUnlock || (e.isUnlock = !0, this.setLocalData(t, e), n || (rd.Stats.onSetLevel(t.toString(), "解锁地图" + t), 
                    rd.UI.hideDialog(o.UI_DIALOG_NAME.WORD_TIPS), rd.UI.showDialog(o.UI_DIALOG_NAME.WORD_TIPS, o.WORD_TIPS_TYPE.UNLOCK_MAP)));
                }, e(a, [ {
                    key: "curMapLv",
                    get: function() {
                        return g.App.Account.curMapLv;
                    },
                    set: function(t) {
                        g.App.Account.curMapLv = t, rd.Event.emit(o.EVENT_TYPE.UPDATE_MAP, t);
                    }
                }, {
                    key: "maxLv",
                    get: function() {
                        return 10;
                    }
                } ]), a;
            }(c)), t("MapData", function() {
                function t() {
                    a(this, "_index", 0), a(this, "_level", 0), a(this, "_name", "");
                }
                return t.prototype.initData = function(t, n) {
                    this._index = t, this._level = n.level, this._name = n.name;
                }, e(t, [ {
                    key: "index",
                    get: function() {
                        return this._index;
                    }
                }, {
                    key: "level",
                    get: function() {
                        return this._level;
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this._name;
                    }
                }, {
                    key: "frameName",
                    get: function() {
                        return "Map_Image_0" + this._level;
                    }
                } ]), t;
            }());
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/BannerAdWx.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./BannerAdBase.ts" ], function(n) {
    "use strict";
    var e, t, r;
    return {
        setters: [ function(n) {
            e = n.inheritsLoose;
        }, function(n) {
            t = n.cclegacy;
        }, function(n) {
            r = n.BannerAdBase;
        } ],
        execute: function() {
            t._RF.push({}, "21b49gcE/VEYbukLpZKs2+W", "BannerAdWx", void 0);
            n("BannerAdWx", function(n) {
                function t(e) {
                    var t;
                    return (t = n.call(this, e) || this)._platName = "wx", t;
                }
                return e(t, n), t;
            }(r));
            t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ZombieMgr.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts", "./RectBounds.ts", "./QuadTree.ts", "./Zombie.ts", "./ZombieObject.ts" ], function(e) {
    "use strict";
    var t, o, i, n, r, s, a, _, m, c, d, l, u, b;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, o = e.defineProperty, i = e.assertThisInitialized, n = e.createForOfIteratorHelperLoose, 
            r = e.asyncToGenerator;
        }, function(e) {
            s = e.cclegacy, a = e._decorator, _ = e.Component;
        }, function(e) {
            m = e.Constants;
        }, function(e) {
            c = e.ConstantCommon;
        }, function(e) {
            d = e.RectBounds;
        }, function(e) {
            l = e.QuadTree;
        }, function(e) {
            u = e.Zombie;
        }, function(e) {
            b = e.ZombieObject;
        } ],
        execute: function() {
            var h;
            s._RF.push({}, "22dc49vbUtKKpqITam2watG", "ZombieMgr", void 0);
            var f = a.ccclass;
            e("ZombieMgr", f("ZombieMgr")(h = function(e) {
                function s() {
                    for (var t, n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                    return t = e.call.apply(e, [ this ].concat(r)) || this, o(i(t), "_zombieCnt", 0), 
                    o(i(t), "_mapNode", null), o(i(t), "_rangeArea", null), o(i(t), "_zombiePfb", null), 
                    o(i(t), "_zombieBossPfb", null), o(i(t), "_zombieObjArr", []), o(i(t), "_mapZombie", new Map()), 
                    o(i(t), "_curBossCnt", 0), o(i(t), "_spawnBossRatio", 0), o(i(t), "_isSectionHasBoss", !1), 
                    t;
                }
                t(s, e);
                var a = s.prototype;
                return a.start = function() {
                    this._rangeArea = new l(new d()), this._registerEvent(!0);
                }, a.init = function() {
                    var e = r(function*(e, t) {
                        this._zombieCnt = 0, this._mapNode = e;
                        var o = t.worldPosition, i = t.scale;
                        this._rangeArea.bounds.init(o.x, o.z, i.x, i.z), this._zombiePfb = yield rd.Asset.loadPrefab("game/zombie", c.BUNDLE_NAME.PREFAB), 
                        this._zombieBossPfb = yield rd.Asset.loadPrefab("game/zombieBoss", c.BUNDLE_NAME.PREFAB), 
                        yield this._framingLoad(this._getZombieGenerator()), this.schedule(this._setRandomRotation, 3.2), 
                        g.App.GameScore.totalZombieCnt = this._zombieCnt;
                    });
                    return function(t, o) {
                        return e.apply(this, arguments);
                    };
                }(), a.reset = function() {
                    this._getZombieGenerator().return("reset"), this.unscheduleAllCallbacks(), this._rangeArea.clear(), 
                    this._zombieObjArr = [];
                    for (var e, t = n(this._mapZombie.values()); !(e = t()).done; ) {
                        var o = e.value;
                        rd.Pool.putNode(o.node);
                    }
                    this._mapZombie.clear();
                }, a.getGroundSectionData = function(e) {
                    var t = e.name, o = t.indexOf("x");
                    return {
                        sectionRow: parseInt(t.slice(t.indexOf("-") + 1, o)),
                        sectionCol: parseInt(t.slice(o + 1))
                    };
                }, a._registerEvent = function(e) {
                    var t = e ? "on" : "off";
                    rd.Event[t](m.EVENT_TYPE.UPDATE_VIEW_TREE, this._updateViewZombie, this), rd.Event[t](m.EVENT_TYPE.KILL_ZOMBIE, this._killZombie, this);
                }, a._updateViewZombie = function() {
                    var e = this, t = this._rangeArea.retrieve(g.App.GameData.camViewObj);
                    if (!(t.length <= 0)) {
                        this._zombieObjArr.filter(function(e) {
                            return -1 === t.indexOf(e);
                        }).forEach(function(t) {
                            var o = t.id, i = e._mapZombie.get(o).node;
                            e._mapZombie.delete(o), rd.Pool.putNode(i);
                        });
                        for (var o = t.filter(function(t) {
                            return -1 === e._zombieObjArr.indexOf(t);
                        }), i = 0, n = o.length; i < n; i++) {
                            var r = o[i], s = rd.Pool.getNode(r.isBoss ? this._zombieBossPfb : this._zombiePfb, this.node, r.level);
                            this._mapZombie.set(r.id, s.getComponent(u)), s.setPosition(r.bounds.centerX, 0, r.bounds.centerZ);
                        }
                        this._zombieObjArr = t;
                    }
                }, a._killZombie = function(e, t, o) {
                    void 0 === t && (t = !1), void 0 === o && (o = !1), g.App.GameScore.killZombieCnt += 1;
                    for (var i, r = e.getComponent(u), s = 0, a = n(this._mapZombie.entries()); !(i = a()).done; ) {
                        var _ = i.value, c = _[0];
                        if (_[1] === r) {
                            s = c, this._mapZombie.delete(c);
                            break;
                        }
                    }
                    var d = this._zombieObjArr.findIndex(function(e) {
                        return e.id === s;
                    }), l = this._zombieObjArr.splice(d, 1)[0];
                    this._rangeArea.delete(l);
                    var b = r.isBoss;
                    rd.Event.emit(m.EVENT_TYPE.CREATE_MONEY, r.worldPos), rd.Event.emit(b ? m.EVENT_TYPE.PLAY_BOSS_BOOM : m.EVENT_TYPE.PLAY_ZOMBIE_BOOM, r.worldPos, r.level), 
                    rd.Pool.putNode(e), !o && rd.Audio.playSound(b ? m.AUDIO_SOURCE_TYPE.ZOMBIE_BOSS_BOOM : "" + m.AUDIO_SOURCE_TYPE.ZOMBIE_BOOM + (t ? 2 : 1), b ? 3 : 1);
                }, a._getZombieGenerator = function*() {
                    for (var e = this._mapNode.children, t = Math.floor(2.5), o = Math.floor(2.5), i = 0, n = e.length; i < n; i++) {
                        var r = g.App.MapDataMgr.curMapLv + i;
                        this._curBossCnt = 0, this._spawnBossRatio = .003;
                        for (var s = e[i], a = s.children, _ = 0, m = a.length; _ < m; _++) for (var c = a[_], d = c.position, l = this.getGroundSectionData(c), u = l.sectionRow, b = l.sectionCol, h = .5 * (u - 1), f = .5 * (b - 1), v = 0; v < u; v++) {
                            if (this._isSectionHasBoss = !1, v >= u - 2) for (var p = 0; p < 2; p++) if (this._curBossCnt === p && v === u + this._curBossCnt - 2) {
                                this._spawnBossRatio = 1;
                                break;
                            }
                            for (var E = 0; E < b; E++) for (var P = 0; P < 5; P++) for (var B = 0; B < 5; B++) {
                                var O = rd.Utils.getRandomNumber(-1, 1), A = d.x + 13.825 * (E - f) - 2.75 * (B - o) + O, Z = rd.Utils.getRandomNumber(-1, 1), C = d.z - 10.485 * (v - h) - 2.05 * (P - t) + Z;
                                yield this._createZombies(s, r, A, C);
                            }
                        }
                    }
                }, a._createZombies = function(e, t, o, i) {
                    if (rd.Utils.isReachProbability(.925)) {
                        var n = !1;
                        !this._isSectionHasBoss && this._curBossCnt < 3 && rd.Utils.isReachProbability(this._spawnBossRatio) && (n = !0, 
                        this._curBossCnt++, this._isSectionHasBoss = !0);
                        var r = rd.Pool.getNode(n ? this._zombieBossPfb : this._zombiePfb, e, t);
                        r.setPosition(o, -m.MAP_HEIGHT_OFFSET, i);
                        var s = r.worldPosition, a = n ? 5 : 2.4, _ = new b(++this._zombieCnt, new d(s.x, s.z, a, a), t, n);
                        this._rangeArea.insert(_), this._zombieCnt <= 320 ? (this._zombieObjArr.push(_), 
                        this._mapZombie.set(_.id, r.getComponent(u))) : rd.Pool.putNode(r);
                    }
                }, a._framingLoad = function(e, t) {
                    var o = this;
                    return void 0 === t && (t = 5), new Promise(function(i) {
                        !function n() {
                            for (var r = new Date().getTime(), s = e.next(); ;s = e.next()) {
                                if (null === s || s.done) return void i();
                                if (new Date().getTime() - r > t) return void o.scheduleOnce(n.bind(o));
                            }
                        }();
                    });
                }, a._setRandomRotation = function() {
                    for (var e, t = n(this._mapZombie.values()); !(e = t()).done; ) {
                        var o = e.value;
                        rd.Utils.isReachProbability(.5) && o.setRandomRotation();
                    }
                }, a.onDestroy = function() {
                    this._registerEvent(!1);
                }, s;
            }(_)) || h);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDPlatform.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./RDCommand.ts", "./RDPlatformParam.ts", "./RDPlatformType.ts" ], function(t) {
    "use strict";
    var e, n, a, i, s, o, r, c, d, h;
    return {
        setters: [ function(t) {
            e = t.createClass, n = t.defineProperty;
        }, function(t) {
            a = t.cclegacy, i = t.sys, s = t.game;
        }, function(t) {
            o = t.Log;
        }, function(t) {
            r = t.ConstantCommon;
        }, function(t) {
            c = t.RDCommand;
        }, function(t) {
            d = t.RDPlatformParam;
        }, function(t) {
            h = t.RDPlatformType;
        } ],
        execute: function() {
            a._RF.push({}, "242b8KJz+9IxZK3n7lM/mye", "RDPlatform", void 0);
            var u = t("RDPlatform", function() {
                function t(e) {
                    var a, i;
                    n(this, "_systemInfo", {}), n(this, "_api", void 0), n(this, "_platParam", void 0), 
                    n(this, "type", h.None), n(this, "typeName", "qg"), n(this, "_subpackageArr", []), 
                    n(this, "_loadedSubpackageCnt", 0), n(this, "_bannerADInstance", null), n(this, "_bannerADInstances", []), 
                    n(this, "_bannerShowIndex", 0), n(this, "_gameBannerADInstance", null), n(this, "_gamePortalADInstance", null), 
                    n(this, "_isShowGamePortalAd", !1), n(this, "_customAdIcon", []), n(this, "_customAdHot", void 0), 
                    n(this, "_customAdScene", void 0), n(this, "_customAdBanner", []), n(this, "_customAdVBanner", []), 
                    n(this, "_videoBoxInstance", null), n(this, "_nativeID", []), n(this, "_nativeADInstances", new Map()), 
                    n(this, "_nativeAdParam", []), n(this, "_nativeLastTime", {}), n(this, "_nativeADInstanceList", []), 
                    n(this, "_customAdBannerInstance", null), n(this, "_customAdInterstitialAdInstance", null), 
                    n(this, "_rewardCaback", null), n(this, "_interstitialAdInstance", null), n(this, "_nativeAdCaback", null), 
                    n(this, "_nativeInterval", null), n(this, "_hasShortcutInstalled", !1), n(this, "_shortCutInstalledCaback", null), 
                    n(this, "_concent", void 0), n(this, "_unPackgeTimes", 0), n(this, "_nativeIdCurrent", 0), 
                    n(this, "_lastShakeTime", 0), n(this, "_closeAdTimes", 0), n(this, "_lastCloseAdTime", 0), 
                    n(this, "_intervalTime", void 0), n(this, "upLoadUrl", t.domain + "/game/data/reporter"), 
                    n(this, "loginUrl", t.domain + "/game/login"), n(this, "_userInf", void 0), n(this, "_scene", 0), 
                    n(this, "_onHideAt", 0), n(this, "_isShareing", !1), n(this, "_isFirstShare", !0), 
                    n(this, "_shareCallback", null), n(this, "_headInf", void 0), this.type = e, this._platParam = d.ADPARAM[this.type.toString()], 
                    this._subpackageArr = this._platParam.subpackageNames, this._nativeID = this._platParam.native_id, 
                    this._headInf = {
                        appid: d.ADPARAM.heyGame.appid,
                        secret: d.ADPARAM.heyGame.secret,
                        platId: Number(this.getPlatId()),
                        configName: d.ADPARAM.heyGame.configName,
                        authorName: d.ADPARAM.heyGame.authorName,
                        authorCode: d.ADPARAM.heyGame.authorCode
                    }, this.typeName = this._platParam.name, this._api = window[this.typeName], this._systemInfo = null === (a = this._api) || void 0 === a ? void 0 : a.getSystemInfoSync(), 
                    (null === (i = this._api) || void 0 === i ? void 0 : i.getProvider) && console.log("快游戏平台", this._api.getProvider(), JSON.stringify(this._systemInfo)), 
                    this._systemInfo || (this._systemInfo = {}, this._systemInfo.brand = "dssdfdsafdsafd", 
                    this._systemInfo.model = "dssdfdsafdsafd"), o.debug(this.constructor.name, this._subpackageArr, JSON.stringify(this._nativeID ? this._nativeID : []));
                }
                var a = t.prototype;
                return a.init = function(t) {
                    var e = this;
                    this._login({
                        success: function() {
                            console.log("登录完成"), null == t || t(), e._createShortcutInstalled(null), e.initAD();
                        }
                    });
                }, a.initAD = function() {
                    var t, e, n = this;
                    i.isNative || (this.initBanner(), this.initVideo(), this.initIntertitalAd(), this.initCustomAd(), 
                    !rd.Option.onlyVideo && this.initNative(), null === (t = this._api) || void 0 === t || t.onShow(function() {
                        n.onShow();
                    }), null === (e = this._api) || void 0 === e || e.onHide(function() {
                        n.onHide();
                    }));
                }, a.onShow = function() {}, a.onHide = function() {}, a.initBanner = function() {}, 
                a.initVideo = function() {}, a.initIntertitalAd = function() {}, a.initCustomAd = function() {}, 
                a.initNative = function() {
                    this._checkNative();
                }, a._checkNative = function() {
                    var t = this;
                    this._intervalTime = setInterval(function() {
                        if (t.natvieAds()) return rd.Event.emit(r.EVENT_TYPE.SHOW_NATIVE_AD), void clearInterval(t._intervalTime);
                    }, 4e3);
                }, a.doubleAdClicks = function(t) {
                    if (rd.Option.regionEnable && rd.Option.nativeSwitch) {
                        var e = Math.min(rd.Option.addNative, 2), n = rd.Option.twoClickRand, a = rd.Utils.random(1, 100);
                        o.debug(this.constructor.name, "多点概率", n, a);
                        var i = 0;
                        if (a < n) {
                            o.debug(this.constructor.name, "原生广告多(" + this._nativeADInstanceList.length + ")");
                            for (var s = 0; s < this._nativeADInstanceList.length; s++) {
                                var r = this._nativeADInstanceList[s];
                                if (o.debug(this.constructor.name, "原生广告list", r.nativeId, JSON.stringify(r.getAdData)), 
                                t != r.nativeId && r.getAdData() && (o.debug(this.constructor.name, "添加原生广告点击(" + r.nativeId + ")"), 
                                r.reportAdClick("原生点击"), ++i >= e)) return;
                            }
                        }
                    } else o.debug(this.constructor.name, "关闭无多点");
                }, a.sendData = function(t, e) {
                    try {
                        this._concent = e, t === c.CMD_SHOW_REWARD_VIDEO_AD ? this._rewardCaback = e : t == c.CMD_CREATE_NATIVE_AD ? this._nativeAdCaback = e.callback : t == c.CMD_ADDSHORTCUT && (this._shortCutInstalledCaback = e), 
                        this.sendDataToPlatform(t, e);
                    } catch (t) {}
                }, a.sendDataToPlatform = function(t, e) {
                    try {
                        switch (t) {
                          case c.CMD_SHOW_REWARD_VIDEO_AD:
                            this._showVideo(e);
                            break;

                          case c.CMD_SHOW_BANNER_AD:
                            this._showBannerAd(e);
                            break;

                          case c.CMD_HIDE_BANNER_AD:
                            this._hideBannerAd(e);
                            break;

                          case c.CMD_SHOW_INTERSTITIAL_VIDEO_AD:
                            this._showIntertitalAd(e);
                            break;

                          case c.CMD_SHAKE:
                            this._vibrateShort(e);
                            break;

                          case c.CMD_TOAST:
                            this._showToast(e);
                            break;

                          case c.CMD_RECORDVIDEO:
                            this._startRecordScreen(e);
                            break;

                          case c.CMD_STOPRECORDVIDEO:
                            this._pauseRecordScreen(e);
                            break;

                          case c.CMD_SHAREVIDEO:
                            this._shareVido(e);
                            break;

                          case c.CMD_TO_MINIPROGRAM:
                            this._gotoMiniGameByAppid(e);
                            break;

                          case c.CMD_CREATE_NATIVE_AD:
                            this._createNativeAd(e);
                            break;

                          case c.CMD_ClICK_NATIVE_AD:
                            this._nativeAdClick(e);
                            break;

                          case c.CMD_DESTROY_NATIVE_AD:
                            this._destoryNativeAd(e);
                            break;

                          case c.CMD_ADDSHORTCUT:
                            console.log("添加桌面"), this._installShortcut(e);
                            break;

                          case c.CMD_SDK_INIT:
                            this._initSdk(e);
                            break;

                          case c.CMD_SDK_LOGIN:
                            this._login(e);
                            break;

                          case c.CMD_SDK_LOGOUT:
                            this._logOut(e);
                            break;

                          case c.CMD_SDK_SYSDATA:
                            this._sysData(e);
                            break;

                          case c.CMD_SDK_EXIT:
                            this._exitGame(e);
                            break;

                          case c.CMD_SDK_PAY:
                            this._pay(e);
                            break;

                          case c.CMD_SHOW_BANNER_OFFICE_AD:
                            this._showGameBannerAd(e);
                            break;

                          case c.CMD_HIDE_BANNER_OFFICE_AD:
                            this._hideGameBannerAd(e);
                            break;

                          case c.CMD_SHOW_OFFICE_PORTAL_AD:
                            console.log("更多游戏"), this._showGamePortalAd(e);
                            break;

                          case c.CMD_HIDE_OFFICE_PORTAL_AD:
                            this._hideGamePortalAd(e);
                            break;

                          case c.CMD_SDK_PRIVACY_POLICY:
                            this.openPrivacyPolicy();
                            break;

                          case c.CMD_SHOW_CUSTOMAD_ICON_AD:
                            this._showNativeIconAd(e);
                            break;

                          case c.CMD_SHOW_CUSTOMAD_HOT_AD:
                            this._showNativeHotAd(e);
                            break;

                          case c.CMD_SHOW_CUSTOMAD_BANNER_AD:
                            this._showCustomAdBanner(e);
                            break;

                          case c.CMD_SHOW_CUSTOMAD_VBANNER_AD:
                            this._showCustomAdVBanner(e);
                            break;

                          case c.CMD_SHOW_CUSTOMAD_SCENE_AD:
                            this._showCustomSceneAd(e);
                            break;

                          case c.CMD_SDK_AGE:
                            this.openAgeDialog();
                        }
                    } catch (t) {}
                }, a.isReviewed = function() {
                    return d.ADPARAM[this.type.toString()].isReviewed;
                }, a.loadStorageData = function(t, e, n) {
                    var a = t[0], i = localStorage.getItem(a), s = i ? JSON.parse(i) : {};
                    null == e || e(s);
                }, a.flushStorageData = function(t, e) {
                    localStorage.setItem(t.key, JSON.stringify(t.data));
                }, a.LoadSubpackageTask = function(t, e, n) {
                    var a = this;
                    if (this._unPackgeTimes = 0, null == this._subpackageArr || 0 === this._subpackageArr.length) return o.debug(this.constructor.name, "无需分包"), 
                    void (e && e(100));
                    this._loadedSubpackageCnt = 0;
                    var i = this._subpackageArr[this._loadedSubpackageCnt];
                    !function s(r) {
                        var c = a._api.loadSubpackage({
                            name: r,
                            success: function(t) {
                                console.log("LoadSubpackageTask1222"), a._loadedSubpackageCnt >= a._subpackageArr.length - 1 ? e && e(t) : (a._unPackgeTimes = 0, 
                                a._loadedSubpackageCnt += 1, i = a._subpackageArr[a._loadedSubpackageCnt], s(i));
                            },
                            fail: function(t) {
                                o.debug(a.constructor.name, "分包失败"), n && n(t), a._showToast("分包失败,请重启游戏");
                            }
                        }), d = Math.ceil(100 / a._subpackageArr.length);
                        c.onProgressUpdate(function(e) {
                            var n = a._loadedSubpackageCnt * d + e.progress / 100 * d;
                            o.debug(a.constructor.name, "下载进度", n), t && t({
                                progress: n
                            });
                        });
                    }(i);
                }, a._showVideo = function(t) {}, a.sendVideoReward = function(t) {
                    this._rewardCaback && ("success" === t ? this._rewardCaback.success(null) : this._rewardCaback.fail());
                }, a._showSysBanner = function() {}, a._showBannerAd = function(t) {
                    this.isReviewed() || rd.Option.onlyVideo ? o.debug(this.constructor.name, "审核中=====") : rd.Platform.getNativeAdSize() && rd.PushCtrl ? rd.PushCtrl.showNativeBanner() : this._bannerADInstance && this._bannerADInstance.isShow || this._showSysBanner();
                }, a._hideBannerAd = function(t) {
                    var e, n, a;
                    if (t) return null === (e = this._bannerADInstance) || void 0 === e || e.hide(), 
                    void o.debug(this.constructor.name, "隐藏系统banner广告");
                    (rd.PushCtrl && (rd.PushCtrl.hideNativeBanner(), o.debug(this.constructor.name, "隐藏原生banner广告")), 
                    this._bannerADInstance) && (null === (n = this._bannerADInstance) || void 0 === n || n.hide(), 
                    o.debug(this.constructor.name, "隐藏系统banner广告"));
                    this._customAdBannerInstance && (null === (a = this._customAdBannerInstance) || void 0 === a || a.hide(), 
                    o.debug(this.constructor.name, "隐藏原生模板banner广告"));
                }, a._showGameBannerAd = function(t) {}, a._hideGameBannerAd = function(t) {}, a._showGamePortalAd = function(t) {}, 
                a._hideGamePortalAd = function(t) {}, a.bannerAdIsShow = function(t) {
                    return !!this._bannerADInstance && this._bannerADInstance.isShow;
                }, a._showIntertitalAd = function(t) {
                    var e;
                    this._interstitialAdInstance && (null === (e = this._interstitialAdInstance) || void 0 === e || e.destroy(), 
                    this._interstitialAdInstance = null);
                }, a._showTemplateNative = function(t) {}, a._createNativeAd = function(t) {}, a._getNative = function() {
                    for (var t = [], e = 0; e < this._nativeADInstanceList.length; e++) {
                        this._nativeADInstanceList[e].getAdData() && t.push(e);
                    }
                    return t.length > 0 ? this._nativeADInstanceList[rd.Utils.random(0, t.length - 1)] : null;
                }, a._reportAdShow = function(t) {}, a._nativeAdClick = function(t) {}, a._destoryNativeAd = function(t) {}, 
                a._showNativeIconAd = function(t) {}, a._showNativeHotAd = function(t) {}, a._showCustomAdBanner = function(t) {}, 
                a._showCustomAdVBanner = function(t) {}, a._showCustomSceneAd = function(t) {}, 
                a._vibrateShort = function(t) {}, a._showToast = function(t) {}, a._createShortcutInstalled = function(t) {}, 
                a._installShortcut = function(t) {}, a._gotoMiniGameByAppid = function(t) {}, a._startRecordScreen = function(t) {}, 
                a._pauseRecordScreen = function(t) {}, a._shareVido = function(t) {}, a.HasShortcutInstalled = function() {
                    return this._hasShortcutInstalled;
                }, a.startGameEvent = function(t) {}, a.endGameEvent = function(t) {}, a.openPrivacyPolicy = function() {
                    rd.UI.showDialog("adUI/privacyPolicy", !0, null);
                }, a.openAgeDialog = function() {}, a._initSdk = function(t) {
                    t && t.success(), o.debug(this.constructor.name, "初始化成功");
                }, a.loginGame = function() {
                    var t, e;
                    console.log("base loginGame");
                    var n = rd.GameDataModel.userInfo;
                    if (n.headId = n.headId ? n.headId : this._userInf.headId, n.nickName = n.nickName ? n.nickName : this._userInf.nickName, 
                    rd.GameDataModel.userInfo = n, -1 !== d.GAMEID) {
                        var a = {
                            gameId: d.GAMEID.toString(),
                            nickName: rd.GameDataModel.userInfo.nickName,
                            headUrl: rd.GameDataModel.userInfo.headId,
                            headBox: rd.GameDataModel.userInfo.headFrameId,
                            userId: rd.GameDataModel.userInfo.userId
                        };
                        rd.Http.post("tiequan/game/login", a, function(t) {
                            o.debug("self_登录成功");
                        });
                    }
                    o.debug("登录成功", rd.GameDataModel.userInfo.userId, this._systemInfo.brand, this._systemInfo.model), 
                    this._loginHeyGame(rd.GameDataModel.userInfo.userId, null === (t = this._systemInfo) || void 0 === t ? void 0 : t.brand, null === (e = this._systemInfo) || void 0 === e ? void 0 : e.model);
                }, a._login = function(t) {
                    var e;
                    this._userInf = {
                        nickName: t.nickName ? t.nickName : "",
                        headId: t.headId ? t.headId : ""
                    }, null == t || null === (e = t.success) || void 0 === e || e.call(t);
                }, a._logOut = function(t) {}, a._sysData = function(t) {}, a._exitGame = function(t) {}, 
                a._pay = function(t) {}, a.setScore = function(t) {}, a.getGamePortBanner = function() {
                    return this._isShowGamePortalAd;
                }, a.isBtnFadeIn = function(t) {
                    return void 0 === t && (t = !0), t ? rd.Option.regionEnable && rd.Option.nativeSwitch : rd.Option.nativeSwitch;
                }, a.getAndroidPlatName = function() {
                    return "";
                }, a.getSystemInfo = function() {
                    return this._systemInfo ? this._systemInfo : {};
                }, a.getVersionName = function() {
                    return this._platParam.version_name ? this._platParam.version_name : "1.0.0";
                }, a.getPlatId = function() {
                    return this._platParam.plat_id ? this._platParam.plat_id : "1011";
                }, a.updateUserInf = function(t) {
                    var e = t.split("|");
                    this._userInf.nickName = e[0], this._userInf.headId = e[1], this.loginGame();
                }, a.isShowNativeAd = function(t) {
                    return !1;
                }, a.isMoreGameBtn = function() {
                    return d.ADPARAM[this.type].game_portal_id;
                }, a.isShareGameBtn = function() {
                    return !1;
                }, a.isShowContact = function() {
                    return !1;
                }, a.isShowPrivacy = function() {
                    return !0;
                }, a.isShowNativeSplash = function() {
                    return this.isShowNativeAd() && rd.Option.nativeSplashSwitch && rd.Option.regionEnable;
                }, a.addCloseAd = function() {
                    this._closeAdTimes++, this._lastCloseAdTime = new Date().getTime();
                }, a.canBaking = function() {
                    return !0;
                }, a.exitGame = function() {
                    s.end();
                }, a.natvieAds = function() {
                    for (var t = 0; t < this._nativeADInstanceList.length; t++) {
                        if (this._nativeADInstanceList[t].getAdData()) return !0;
                    }
                    return !1;
                }, a.getGameBannerAD = function() {
                    return this._gameBannerADInstance;
                }, a.isGameToGame = function() {
                    return 1037 === this._scene || 1095 == this._scene;
                }, a.shareReport = function(t) {
                    var e = [ this._headInf.appid, Number(this.getPlatId()), rd.GameDataModel.userInfo.uid, "result", t ];
                    this.upExportDatas(e, "aqman_share");
                }, a.exportClick = function(t, e) {
                    var n = [ this._headInf.appid, Number(this.getPlatId()), rd.GameDataModel.userInfo.uid, t, 1, e ];
                    this.upExportDatas(n, "aqman_buy");
                }, a.exportNavigate = function(t, e) {
                    var n = [ this._headInf.appid, Number(this.getPlatId()), rd.GameDataModel.userInfo.uid, t, 2, e ];
                    this.upExportDatas(n, "aqman_buy");
                }, a.upExportDatas = function(t, e) {
                    if (this.type != h.None) if (0 !== rd.GameDataModel.userInfo.userId.length) {
                        var n = [];
                        if (n.push(t.toString()), 0 !== n.length) {
                            var a = {
                                header: this._headInf,
                                body: {
                                    itype: e,
                                    datas: n
                                }
                            };
                            console.log("upExportDatas=" + JSON.stringify(a)), rd.Http.request(this.upLoadUrl, JSON.stringify(a), "POST").then(function(t) {
                                0 !== t.code ? console.log("upExportDatas fail=" + JSON.stringify(t)) : console.log("upExportDatas success=" + JSON.stringify(t));
                            }, function(t) {
                                console.log("upExportDatas error:" + JSON.stringify(t));
                            });
                        } else console.log("upExportDatas datas=" + JSON.stringify(n));
                    } else console.log("upExportDatas登录失败");
                }, a._loginHeyGame = function(t, e, n) {
                    if (this.type != h.None) {
                        var a = {
                            itype: "aqman_login",
                            openid: t,
                            brand: e,
                            model: n
                        }, i = {
                            header: {
                                appid: this._headInf.appid,
                                platid: Number(this.getPlatId()),
                                secret: this._headInf.secret
                            },
                            body: a
                        };
                        rd.Http.request(this.loginUrl, JSON.stringify(i), "POST").then(function(t) {
                            if (0 == t.code) {
                                o.debug("heyGameLogin=" + JSON.stringify(t));
                                var e = rd.GameDataModel.userInfo;
                                e.uid = t.data.uid, rd.GameDataModel.userInfo = e;
                            }
                        });
                    }
                }, e(t, [ {
                    key: "closeAdTimes",
                    get: function() {
                        return this._closeAdTimes;
                    }
                }, {
                    key: "HeyGameParam",
                    get: function() {
                        return this._headInf;
                    }
                } ]), t;
            }());
            n(u, "TAG", "RDPlatform"), n(u, "domain", "https://gameserver.hey-games.com"), a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/PolygenMask.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(o) {
    "use strict";
    var t, s, i, n, e, p, a, r;
    return {
        setters: [ function(o) {
            t = o.inheritsLoose, s = o.defineProperty, i = o.assertThisInitialized;
        }, function(o) {
            n = o.cclegacy, e = o._decorator, p = o.Mask, a = o.PolygonCollider2D, r = o.Component;
        } ],
        execute: function() {
            var l;
            n._RF.push({}, "25eb58+uihD1L9xgaCt7QhA", "PolygenMask", void 0);
            var c = e.ccclass, h = e.requireComponent, m = e.executeInEditMode;
            o("PolygenMask", c("PolygenMask")(l = h(p)(l = h(a)(l = m(l = function(o) {
                function n() {
                    for (var t, n = arguments.length, e = new Array(n), p = 0; p < n; p++) e[p] = arguments[p];
                    return t = o.call.apply(o, [ this ].concat(e)) || this, s(i(t), "_maskComp", null), 
                    s(i(t), "_polygonComp", null), t;
                }
                t(n, o);
                var e = n.prototype;
                return e.onLoad = function() {
                    var o = this;
                    if (this._maskComp = this.getComponent(p), this._polygonComp = this.getComponent(a), 
                    this._maskComp.type === p.Type.GRAPHICS_STENCIL) {
                        var t = this._polygonComp.points;
                        Object.defineProperty(this._polygonComp, "points", {
                            get: function() {
                                return t;
                            },
                            set: function(s) {
                                t = s, o._updateMask();
                            }
                        });
                    }
                }, e.start = function() {
                    this._updateMask();
                }, e._updateMask = function() {
                    if (this.isValid && this._maskComp.type === p.Type.GRAPHICS_STENCIL) {
                        var o = this._polygonComp.points[0];
                        this._maskComp.graphics.clear(), this._maskComp.graphics.moveTo(o.x, o.y);
                        for (var t = 1; t < this._polygonComp.points.length; t++) {
                            var s = this._polygonComp.points[t];
                            this._maskComp.graphics.lineTo(s.x, s.y);
                        }
                        this._maskComp.graphics.close(), this._maskComp.graphics.stroke(), this._maskComp.graphics.fill();
                    }
                }, n;
            }(r)) || l) || l) || l) || l);
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/PoolManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./SingletonBase.ts" ], function(t) {
    "use strict";
    var e, n, o, i, a, r, s, l;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, o = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, a = t.Node, r = t.NodePool, s = t.instantiate;
        }, function(t) {
            l = t.SingletonBase;
        } ],
        execute: function() {
            i._RF.push({}, "25ffcccPfRHlpz5V4R1wWaW", "PoolManager", void 0);
            var c = function(t) {
                function i() {
                    for (var e, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(a)) || this, n(o(e), "_poolDict", {}), 
                    e;
                }
                e(i, t);
                var l = i.prototype;
                return l.getNode = function(t, e) {
                    void 0 === e && (e = null);
                    for (var n, o = t instanceof a ? t.name : t.data.name, i = "" + o.substr(0, 1).toUpperCase() + o.substr(1), s = arguments.length, l = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++) l[c - 2] = arguments[c];
                    if (this._poolDict.hasOwnProperty(o)) {
                        var p = this._poolDict[o];
                        n = p.size() > 0 ? p.get.apply(p, l) : this._getInstantiateNode(t, e, i, l);
                    } else this._poolDict[o] = new r(i), n = this._getInstantiateNode(t, e, i, l);
                    return e && n.setParent(e), n;
                }, l.putNode = function(t) {
                    if (t) {
                        var e, n = t.name;
                        this._poolDict.hasOwnProperty(n) ? e = this._poolDict[n] : (e = new r(), this._poolDict[n] = e), 
                        e.put(t);
                    }
                }, l.clearPool = function(t) {
                    var e = "string" == typeof t ? t : t.data.name;
                    this._poolDict.hasOwnProperty(e) && this._poolDict[e].clear();
                }, l._getInstantiateNode = function(t, e, n, o) {
                    var i, a = s(t);
                    null == e || e.addChild(a);
                    var r = a.getComponent(n);
                    return null == r || null === (i = r.reuse) || void 0 === i || i.call.apply(i, [ r ].concat(o)), 
                    a;
                }, i;
            }(l);
            void 0 === window.rd && (window.rd = {});
            var p = t("default", c.getInstance());
            window.rd.Pool = p, i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDKGPlatform.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./RDPlatformParam.ts", "./RDPlatformType.ts", "./RDPlatform.ts" ], function(t) {
    "use strict";
    var i, n, e, a, o, r, s, c;
    return {
        setters: [ function(t) {
            i = t.inheritsLoose, n = t.defineProperty, e = t.assertThisInitialized;
        }, function(t) {
            a = t.cclegacy;
        }, function(t) {
            o = t.Log;
        }, function(t) {
            r = t.RDPlatformParam;
        }, function(t) {
            s = t.RDPlatformType;
        }, function(t) {
            c = t.RDPlatform;
        } ],
        execute: function() {
            a._RF.push({}, "27108/V6zRBXaqUTS4A17N3", "RDKGPlatform", void 0);
            t("RDKGPlatform", function(t) {
                function a(i) {
                    var a;
                    return a = t.call(this, i) || this, n(e(a), "vibrateInterval", null), a;
                }
                i(a, t);
                var c = a.prototype;
                return c.initAD = function() {
                    this._hasShortcutInstalled = !0, this._login(null);
                }, c._showToast = function(t) {
                    window.MiniApp.showToast({
                        title: t,
                        icon: "none",
                        image: "",
                        mask: !1,
                        duration: 2e3,
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, c._vibrateShort = function(t) {
                    void 0 === t && (t = 50), 100 != t ? this.startVibrate(t) : this.startPeristentVibrate(100, .01);
                }, c.startVibrate = function(t) {
                    navigator.vibrate(t);
                }, c.stopVibrate = function() {
                    this.vibrateInterval && clearInterval(this.vibrateInterval), navigator.vibrate(0);
                }, c.startPeristentVibrate = function(t, i) {
                    this.vibrateInterval = setInterval(function() {
                        this.startVibrate(t);
                    }, i);
                }, c._showBannerAd = function(t) {
                    this.isReviewed() && o.debug(this.constructor.name, "审核中=====");
                }, c._showVideo = function(t) {
                    var i = this;
                    !this.isReviewed() && window.MiniGame ? (o.debug(this.constructor.name, "点击开始激励视频播放"), 
                    this._videoBoxInstance = window.MiniGame.createRewardVideoAd(), this._videoBoxInstance.onLoad(function() {
                        o.debug(i.constructor.name, "激励视频加载成功"), rd.UI.showTipMessage("激励视频加载成功"), i._videoBoxInstance.show();
                    }), this._videoBoxInstance.onVideoStart(function() {
                        o.debug(this.constructor.name, "激励视频 开始播放");
                    }), this._videoBoxInstance.onClose(function(t) {
                        t.isReward ? (o.debug(i.constructor.name, "激励视频广告完成，发放奖励"), rd.UI.showTipMessage("激励视频广告完成，发放奖励"), 
                        i._rewardCaback && i._rewardCaback.fail(), i._rewardCaback.success(null)) : (i._rewardCaback && i._rewardCaback.fail(), 
                        o.debug(i.constructor.name, "激励视频广告取消关闭，不发放奖励"));
                    }), this._videoBoxInstance.onError(function(t) {
                        o.debug(this.constructor.name, JSON.stringify(t));
                    })) : this._rewardCaback.success(null);
                }, c._showIntertitalAd = function(t) {
                    this.isReviewed();
                }, c._login = function(t) {
                    var i = r.ADPARAM[s.KG.toString()].appid;
                    setTimeout(function() {
                        window.MiniGame && window.MiniGame.userLogin && window.MiniGame.userLogin({
                            appid: i,
                            loginType: 1,
                            success: function(t) {
                                o.debug(this.constructor.name, "用户信息:" + JSON.stringify(t.userData)), rd.UI.showTipMessage("用户信息" + JSON.stringify(t.userData));
                                t.userData.userName, t.userData.avatarUrl, t.userData.userId;
                            },
                            fail: function(t) {}
                        });
                    }, .1);
                }, c.setScore = function(t) {
                    window.MiniGame && window.MiniGame.gameResultReport(t);
                }, a;
            }(c));
            a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/BannerAdOppo.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./BannerAdBase.ts" ], function(n) {
    "use strict";
    var e, t, r;
    return {
        setters: [ function(n) {
            e = n.inheritsLoose;
        }, function(n) {
            t = n.cclegacy;
        }, function(n) {
            r = n.BannerAdBase;
        } ],
        execute: function() {
            t._RF.push({}, "2a59fBqkr5OwrpAxFHjbasR", "BannerAdOppo", void 0);
            n("BannerAdOppo", function(n) {
                function t(e) {
                    var t;
                    return (t = n.call(this, e) || this)._platName = "qg", t;
                }
                return e(t, n), t;
            }(r));
            t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ICannonScene.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(n) {
    "use strict";
    var e, t, r, i, o, s, c, a, u;
    return {
        setters: [ function(n) {
            e = n.defineProperty, t = n.inheritsLoose, r = n.assertThisInitialized, i = n.createClass;
        }, function(n) {
            o = n.cclegacy, s = n._decorator, c = n.PhysicsSystem, a = n.Vec3, u = n.Component;
        } ],
        execute: function() {
            var l, d, h;
            o._RF.push({}, "2bb7cJqPINP0p5bPjArwxrQ", "ICannonScene", void 0);
            var p = s.ccclass, y = s.executionOrder;
            n("ICannonScene", p("ICannonScene")(l = y(-1)((h = d = function(n) {
                function o() {
                    for (var t, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                    return t = n.call.apply(n, [ this ].concat(o)) || this, e(r(t), "_world", void 0), 
                    t;
                }
                return t(o, n), o.prototype.start = function() {
                    o._inst = this;
                    var n = c.instance.physicsWorld;
                    this._world = n._world, c.instance.gravity = new a(0, -2, 0);
                }, i(o, [ {
                    key: "world",
                    get: function() {
                        return this._world;
                    }
                } ], [ {
                    key: "inst",
                    get: function() {
                        return this._inst;
                    }
                } ]), o;
            }(u), e(d, "TAG", "CannonScene"), e(d, "_inst", null), l = h)) || l) || l);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/AssetsUtils.ts", [ "cc" ], function(e) {
    "use strict";
    var t;
    return {
        setters: [ function(e) {
            t = e.cclegacy;
        } ],
        execute: function() {
            t._RF.push({}, "2bd2bl3T49C7J9DcnnpKtDH", "AssetsUtils", void 0);
            e("default", function() {
                function e() {}
                return e.getUuidArray = function(e) {
                    return cc.loader._assetTables.assets.getUuidArray(e);
                }, e.getDependsRecursively = function(e) {
                    return cc.loader.getDependsRecursively(e);
                }, e.getReferenceKey = function(e) {
                    return cc.loader._getReferenceKey(e);
                }, e;
            }());
            t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDAudioCocos.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./RDAudioBase.ts" ], function(i) {
    "use strict";
    var u, s, t, o, n, c, e, r, l, d;
    return {
        setters: [ function(i) {
            u = i.inheritsLoose, s = i.defineProperty, t = i.assertThisInitialized;
        }, function(i) {
            o = i.cclegacy, n = i.AudioSource, c = i.assetManager, e = i.resources;
        }, function(i) {
            r = i.Log;
        }, function(i) {
            l = i.ConstantCommon;
        }, function(i) {
            d = i.RDAudioBase;
        } ],
        execute: function() {
            o._RF.push({}, "2cd2buWottKxoc3Qy7Ibfg4", "RDAudioCocos", void 0);
            i("RDAudioCocos", function(i) {
                function o(u, o) {
                    var n;
                    return n = i.call(this, u, o) || this, s(t(n), "_soundAudioArr", []), n;
                }
                u(o, i);
                var d = o.prototype;
                return d._init = function() {
                    this._musicAudio = this._audioPersistNode.addComponent(n);
                }, d.playMusicByUrl = function(i, u, s, t, o, n, c) {
                    var e = this;
                    void 0 === u && (u = !0), void 0 === s && (s = 1), void 0 === t && (t = 0);
                    var r = o ? "" + o + i : "music/" + i, l = this._clipDict[i];
                    return this._musicAudio.clip !== l && this._musicAudio.stop(), l ? this._playMusicClip(s, t, l, c) : this.loadMusicClip(r, i, function(i) {
                        e._playMusicClip(s, t, i, c);
                    }, u), !l;
                }, d.loadMusicClipByUrl = function(i, u, s) {
                    var t;
                    void 0 === u && (u = null);
                    var o, n = "music/" + i;
                    this._clipDict[i] ? null === (o = u) || void 0 === o || o.success() : this.loadMusicClip(n, i, null === (t = u) || void 0 === t ? void 0 : t.success);
                }, d.setMusicVolume = function(i) {
                    void 0 === i && (i = 1), this._musicAudio && (this._musicVolume = i, this._musicAudio.volume = i);
                }, d.resumeMusic = function(i) {
                    void 0 === i && (i = 0), this._musicAudio && (r.log("定点恢复歌曲", i, this._musicAudio), 
                    this._musicAudio.volume = this._musicVolume, this._musicAudio.currentTime = i, this._musicAudio.play());
                }, d.pauseMusic = function(i) {
                    var u;
                    this._musicAudio && (r.log("暂停音乐", this.getMusicCurrentTime()), this._musicAudio.currentTime = i, 
                    null === (u = this._musicAudio) || void 0 === u || u.pause());
                }, d.stopMusic = function() {
                    var i;
                    this._musicAudio && (r.log("停止音乐", this.getMusicCurrentTime()), null === (i = this._musicAudio) || void 0 === i || i.stop());
                }, d.getMusicDuration = function() {
                    return this._musicAudio ? this._musicAudio.duration : 0;
                }, d.getMusicLeftTime = function() {
                    return this.getMusicDuration() - this.getMusicCurrentTime();
                }, d.getMusicCurrentTime = function() {
                    return this._musicAudio ? this._musicAudio.currentTime : 0;
                }, d.isMusicPlaying = function() {
                    return this._musicAudio.playing;
                }, d.getMusiceName = function() {
                    return this._musicAudio ? this._musicAudio.name : "";
                }, d.releaseAudioClip = function() {
                    for (var i = 0, u = Object.keys(this._clipDict); i < u.length; i++) {
                        var s = u[i], t = this._clipDict[s];
                        c.releaseAsset(t);
                    }
                }, d._playMusicClip = function(u, s, t, o) {
                    this._musicAudio.clip = t, this._musicAudio.volume = this._musicVolume = u, this._musicAudio.currentTime = s, 
                    this._musicAudio.loop = !!o, this._musicAudio.play(), i.prototype._playMusicClip.call(this, null, null, t, o);
                }, d.loadMusicClip = function(i, u, s, t) {
                    var o = this;
                    void 0 === s && (s = null), void 0 === t && (t = !1);
                    var n = e.getInfoWithPath(i) ? l.BUNDLE_NAME.RESOURCES : l.BUNDLE_NAME.AUDIO;
                    this._loadAudioClip(i, u, n, function(i) {
                        var t;
                        o._clipDict[u] = i, null === (t = s) || void 0 === t || t(i);
                    }, t);
                }, d.playSound = function(i, u, s, t) {
                    var o = this;
                    if (void 0 === u && (u = 1), void 0 === t && (t = !1), 0 !== (u *= rd.GameDataModel.musicVolume)) {
                        var n = "" + (s || "sound/") + i, c = this._clipDict[i];
                        c ? this._playSoundClip(u, t, c) : this.loadMusicClip(n, i, function(i) {
                            o._playSoundClip(u, t, i);
                        });
                    }
                }, d.stopSound = function(i) {
                    var u = this._clipDict[i];
                    if (u) for (var s = 0; s < this._soundAudioArr.length; ++s) {
                        var t = this._soundAudioArr[s];
                        if (t.clip === u && t.playing) {
                            t.stop();
                            break;
                        }
                    }
                }, d._getSoundAudioSource = function() {
                    for (var i = null, u = 0; u < this._soundAudioArr.length; ++u) {
                        var s = this._soundAudioArr[u];
                        if (!s.playing) {
                            i = s;
                            break;
                        }
                    }
                    return i || (i = this._audioPersistNode.addComponent(n), this._soundAudioArr.push(i)), 
                    i;
                }, d._playSoundClip = function(i, u, s) {
                    var t = this._getSoundAudioSource();
                    t.clip = s, t.volume = i, t.currentTime = 0, t.playOneShot(s);
                }, o;
            }(d));
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/MoneyMgr.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts", "./RectBounds.ts", "./QuadTree.ts", "./QuadTreeObject.ts" ], function(e) {
    "use strict";
    var t, n, r, o, i, s, a, u, c, _, d, l, f, h, y;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, n = e.defineProperty, r = e.assertThisInitialized, o = e.createForOfIteratorHelperLoose, 
            i = e.asyncToGenerator;
        }, function(e) {
            s = e.cclegacy, a = e._decorator, u = e.v3, c = e.Component, _ = e.Vec3;
        }, function(e) {
            d = e.Constants;
        }, function(e) {
            l = e.ConstantCommon;
        }, function(e) {
            f = e.RectBounds;
        }, function(e) {
            h = e.QuadTree;
        }, function(e) {
            y = e.QuadTreeObject;
        } ],
        execute: function() {
            var m;
            s._RF.push({}, "2e0d9ImjilD9pYZN3guh6tU", "MoneyMgr", void 0);
            var p = a.ccclass, v = u(), E = u(-2.3, .12);
            e("MoneyMgr", p("MoneyMgr")(m = function(e) {
                function s() {
                    for (var t, o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
                    return t = e.call.apply(e, [ this ].concat(i)) || this, n(r(t), "_moneyCnt", 0), 
                    n(r(t), "_rangeArea", null), n(r(t), "_moneyPfb", null), n(r(t), "_moneyObjArr", []), 
                    n(r(t), "_mapMoney", new Map()), t;
                }
                t(s, e);
                var a = s.prototype;
                return a.start = function() {
                    this._rangeArea = new h(new f()), this._registerEvent(!0);
                }, a.init = function(e) {
                    this._moneyCnt = 0;
                    var t = e.worldPosition, n = e.scale;
                    this._rangeArea.bounds.init(t.x, t.z, n.x, n.z);
                }, a.reset = function() {
                    this._rangeArea.clear(), this._moneyObjArr = [];
                    for (var e, t = o(this._mapMoney.values()); !(e = t()).done; ) {
                        var n = e.value;
                        rd.Pool.putNode(n);
                    }
                    this._mapMoney.clear();
                }, a._registerEvent = function(e) {
                    var t = e ? "on" : "off";
                    rd.Event[t](d.EVENT_TYPE.UPDATE_VIEW_TREE, this._updateViewMoney, this), rd.Event[t](d.EVENT_TYPE.CREATE_MONEY, this._createMoney, this), 
                    rd.Event[t](d.EVENT_TYPE.CREATE_MONEY_STACK, this._recycleMoney, this);
                }, a._updateViewMoney = function() {
                    var e = this, t = this._rangeArea.retrieve(g.App.GameData.camViewObj);
                    if (!(t.length <= 0)) {
                        this._moneyObjArr.filter(function(e) {
                            return -1 === t.indexOf(e);
                        }).forEach(function(t) {
                            var n = t.id, r = e._mapMoney.get(n);
                            e._mapMoney.delete(n), rd.Pool.putNode(r);
                        });
                        for (var n = t.filter(function(t) {
                            return -1 === e._moneyObjArr.indexOf(t);
                        }), r = 0, o = n.length; r < o; r++) {
                            var i = n[r], s = rd.Pool.getNode(this._moneyPfb, this.node, !1);
                            this._mapMoney.set(i.id, s), s.setPosition(i.bounds.centerX, 0, i.bounds.centerZ), 
                            s.setRotation(i.rotation);
                        }
                        this._moneyObjArr = t;
                    }
                }, a._createMoney = function() {
                    var e = i(function*(e) {
                        var t = yield rd.Asset.loadPrefab("game/gameMoney", l.BUNDLE_NAME.PREFAB);
                        !this._moneyPfb && (this._moneyPfb = t);
                        var n = rd.Pool.getNode(t, this.node);
                        n.setWorldPosition(e.x, 0, e.z);
                        var r = rd.Utils.getRandomInteger(0, 360);
                        n.setRotationFromEuler(0, r, 0), _.transformRTS(v, E, n.rotation, n.worldPosition, _.ONE);
                        var o = new f(v.x, v.z, 1, .6), i = new y(++this._moneyCnt, o, n.rotation);
                        this._moneyObjArr.push(i), this._mapMoney.set(i.id, n), this._rangeArea.insert(i);
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(), a._recycleMoney = function(e) {
                    for (var t, n = 0, r = o(this._mapMoney.entries()); !(t = r()).done; ) {
                        var i = t.value, s = i[0];
                        if (i[1] === e) {
                            n = s, this._mapMoney.delete(s);
                            break;
                        }
                    }
                    var a = this._moneyObjArr.findIndex(function(e) {
                        return e.id === n;
                    }), u = this._moneyObjArr.splice(a, 1)[0];
                    this._rangeArea.delete(u), rd.Pool.putNode(e);
                }, a.onDestroy = function() {
                    this._registerEvent(!1);
                }, s;
            }(c)) || m);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/CalculateUV.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var e, s, a, i, l, r, n, o;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, s = t.defineProperty, a = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, l = t._decorator, r = t.v4, n = t.Sprite, o = t.Component;
        } ],
        execute: function() {
            var u;
            i._RF.push({}, "2e563rqaYZKy5lINp9ZQzKK", "CalculateUV", void 0);
            var c = l.ccclass, p = l.menu, f = l.requireComponent, _ = l.disallowMultiple, d = r();
            t("CalculateUV", c("CalculateUV")(u = f(n)(u = _(!0)(u = p("Utils/CalculateUV")(u = function(t) {
                function i() {
                    for (var e, i = arguments.length, l = new Array(i), r = 0; r < i; r++) l[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(l)) || this, s(a(e), "_sprite", null), 
                    s(a(e), "_mtlPass", null), s(a(e), "_offsetHandle", 0), s(a(e), "_rotatedHandle", 0), 
                    e;
                }
                e(i, t);
                var l = i.prototype;
                return l.start = function() {
                    this._sprite = this.getComponent(n), this._mtlPass = this._sprite.customMaterial.passes[0], 
                    this._offsetHandle = this._mtlPass.getHandle("uvOffset"), this._rotatedHandle = this._mtlPass.getHandle("uvRotated");
                }, l.update = function() {
                    var t = this._sprite.spriteFrame;
                    if (t) {
                        var e = t.uv[0], s = t.uv[6], a = t.uv[5], i = t.uv[3], l = d.set(e, a, s, i), r = t.rotated ? 1 : 0;
                        this._mtlPass.setUniform(this._offsetHandle, l), this._mtlPass.setUniform(this._rotatedHandle, r);
                    }
                }, i;
            }(o)) || u) || u) || u) || u);
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ColliderData.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./SingletonBase.ts" ], function(t) {
    "use strict";
    var e, n, o, E;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy, o = t.Collider;
        }, function(t) {
            E = t.SingletonBase;
        } ],
        execute: function() {
            var r;
            t("COLLIDER_GROUP", void 0), n._RF.push({}, "2ec7cbdjI9IpqjVyjZuQcKo", "ColliderData", void 0), 
            function(t) {
                t[t.DEFAULT = 1] = "DEFAULT", t[t.PLAYER = 2] = "PLAYER", t[t.ZOMBIE = 4] = "ZOMBIE", 
                t[t.SAW_OR_BOMB = 8] = "SAW_OR_BOMB", t[t.MONEY = 16] = "MONEY", t[t.MONEY_DETECT = 32] = "MONEY_DETECT", 
                t[t.FRONT_DETECT = 64] = "FRONT_DETECT", t[t.BUILDING_ZONE = 128] = "BUILDING_ZONE", 
                t[t.GUN_DETECT = 256] = "GUN_DETECT", t[t.ROCKET_DETECT = 512] = "ROCKET_DETECT", 
                t[t.WALL = 1024] = "WALL";
            }(r || (r = t("COLLIDER_GROUP", {})));
            t("ColliderData", function(t) {
                function n() {
                    return t.apply(this, arguments) || this;
                }
                e(n, t);
                var E = n.prototype;
                return E.setPlayerCollider = function(t) {
                    var e = t.getComponent(o);
                    e.setGroup(r.PLAYER), e.setMask(r.WALL);
                }, E.setZombieCollider = function(t) {
                    var e = t.getComponent(o);
                    e.setGroup(r.ZOMBIE), e.setMask(r.SAW_OR_BOMB + r.GUN_DETECT);
                }, E.setSawOrBombCollider = function(t) {
                    var e = t.getComponent(o);
                    return e.setGroup(r.SAW_OR_BOMB), e.setMask(r.ZOMBIE), e;
                }, E.setFrontDetect = function(t) {
                    var e = t.getComponent(o);
                    return e.setGroup(r.FRONT_DETECT), e.setMask(r.BUILDING_ZONE), e;
                }, E.setMoneyDetect = function(t) {
                    var e = t.getComponent(o);
                    return e.setGroup(r.MONEY_DETECT), e.setMask(r.MONEY), e;
                }, E.setGameMoney = function(t) {
                    t.setGroup(r.MONEY), t.setMask(r.MONEY_DETECT);
                }, E.setBuildingZone = function(t) {
                    var e = t.getComponent(o);
                    e.setGroup(r.BUILDING_ZONE), e.setMask(r.FRONT_DETECT);
                }, E.setGunDetect = function(t) {
                    var e = t.getComponent(o);
                    return e.setGroup(r.GUN_DETECT), e.setMask(r.ZOMBIE), e;
                }, E.setRocketDetect = function(t) {
                    var e = t.getComponent(o);
                    return e.setGroup(r.ROCKET_DETECT), e.setMask(r.ZOMBIE), e;
                }, E.setWallCollider = function(t) {
                    var e = t.getComponent(o);
                    e.setGroup(r.WALL), e.setMask(r.PLAYER);
                }, n;
            }(E));
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/cleanRenderer.ts", [ "cc" ], function(e) {
    "use strict";
    var r;
    return {
        setters: [ function(e) {
            r = e.cclegacy;
        } ],
        execute: function() {
            e("cleanRenderer", function(e) {
                return e = e.toLowerCase().replace(/^angle ?\((.+)\)*$/, "$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g, "");
            }), r._RF.push({}, "2ffd2Y7MXFG0bZ6DP6RcFnp", "cleanRenderer", void 0), r._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/CameraFollow.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var o, e, r, i, n, s, a;
    return {
        setters: [ function(t) {
            o = t.inheritsLoose, e = t.defineProperty, r = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, n = t._decorator, s = t.Vec3, a = t.Component;
        } ],
        execute: function() {
            var l;
            i._RF.push({}, "30dd0h9Bm1DDoUXv2swd1I/", "CameraFollow", void 0);
            var c = n.ccclass;
            t("CameraFollow", c("CameraFollow")(l = function(t) {
                function i() {
                    for (var o, i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s];
                    return o = t.call.apply(t, [ this ].concat(n)) || this, e(r(o), "_target", null), 
                    o;
                }
                o(i, t);
                var n = i.prototype;
                return n.setFollowTarget = function(t) {
                    this._target = t;
                }, n.lateUpdate = function() {
                    this._target && !s.strictEquals(this.node.position, this._target.worldPosition) && this.node.setPosition(this._target.worldPosition);
                }, i;
            }(a)) || l);
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/IntertitalAdHw.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./IntertitalAdBase.ts" ], function(t) {
    "use strict";
    var e, n, r;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy;
        }, function(t) {
            r = t.IntertitalAdBase;
        } ],
        execute: function() {
            n._RF.push({}, "31f40Mse75LL4a6PXbexBf9", "IntertitalAdHw", void 0);
            t("IntertitalAdHw", function(t) {
                function n(e) {
                    var n;
                    return (n = t.call(this, e) || this)._platName = "qg", n.create(), n;
                }
                return e(n, t), n;
            }(r));
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ADDrawer.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./ADMainPush.ts" ], function(t) {
    "use strict";
    var i, n, e, o, s, a, h, r, d, c, l, u;
    return {
        setters: [ function(t) {
            i = t.inheritsLoose, n = t.defineProperty, e = t.assertThisInitialized;
        }, function(t) {
            o = t.cclegacy, s = t._decorator, a = t.v3, h = t.view, r = t.tween, d = t.instantiate, 
            c = t.Component;
        }, function(t) {
            l = t.ConstantCommon;
        }, function(t) {
            u = t.ADMainPush;
        } ],
        execute: function() {
            var g;
            o._RF.push({}, "335e353lUtKWp5WdCS4ytSQ", "ADDrawer", void 0);
            var m = s.ccclass;
            t("ADDrawer", m("ADDrawer")(g = function(t) {
                function o() {
                    for (var i, o = arguments.length, s = new Array(o), a = 0; a < o; a++) s[a] = arguments[a];
                    return i = t.call.apply(t, [ this ].concat(s)) || this, n(e(i), "_red", null), n(e(i), "_aniBtn", null), 
                    n(e(i), "_content", null), n(e(i), "_isShow", !1), n(e(i), "_revice", !1), i;
                }
                i(o, t);
                var s = o.prototype;
                return s.onLoad = function() {
                    this._red = this.node.getChildByName("gameList").getChildByName("aniBtn").getChildByName("red"), 
                    this._aniBtn = this.node.getChildByName("gameList").getChildByName("aniBtn"), this._content = this.node.getChildByName("gameList").getChildByName("view").getChildByName("content"), 
                    this._aniBtn.on("click", this.animationShow, this), this.node.setPosition(a(-225 - h.getVisibleSize().width / 2, 0, 0));
                }, s.animationShow = function() {
                    var t = this;
                    this._isShow ? this.animationHide() : (this._isShow = !0, r(this.node).to(.5, {
                        position: a(-h.getVisibleSize().width / 2 + 175, this.node.getPosition().y, 0)
                    }).call(function() {
                        t._red.active = !1, t.show();
                    }).start(), this._revice = rd.Platform.bannerIsShow(), rd.Ads.hideBannerAd());
                }, s.animationHide = function() {
                    var t = this;
                    this._isShow = !1, r(this.node).to(.5, {
                        position: a(-225 - h.getVisibleSize().width / 2, this.node.getPosition().y, 0)
                    }).call(function() {
                        return t._red.active = !0;
                    }).start();
                }, s.setPositionY = function(t) {
                    this.node.setPosition(a(this.node.getPosition().x, t, this.node.getPosition().z));
                }, s.show = function() {
                    this._content.children.length;
                }, s.createItem = function(t) {
                    var i = this;
                    rd.Asset.loadPrefab("adUI/ADMainPush", l.BUNDLE_NAME.ATOM).then(function(n) {
                        var e = d(n);
                        i._content.addChild(e), e.getComponent(u).freash(t);
                    });
                }, o;
            }(c)) || g);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/GarageUI.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts", "./RDStatisticsManager.ts", "./UIGBase.ts", "./GarageItem.ts" ], function(t) {
    "use strict";
    var e, n, o, a, r, s, i, d, I, c, u;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, o = t.assertThisInitialized;
        }, function(t) {
            a = t.cclegacy, r = t._decorator, s = t.instantiate;
        }, function(t) {
            i = t.Constants;
        }, function(t) {
            d = t.ConstantCommon;
        }, function(t) {
            I = t.CustomEventID;
        }, function(t) {
            c = t.UIGBase;
        }, function(t) {
            u = t.GarageItem;
        } ],
        execute: function() {
            var _;
            a._RF.push({}, "33b6aCE0DtMu5ij1Wt67k62", "GarageUI", void 0);
            var A = r.ccclass;
            t("GarageUI", A("GarageUI")(_ = function(t) {
                function a() {
                    for (var e, a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
                    return e = t.call.apply(t, [ this ].concat(r)) || this, n(o(e), "_closeBtnNode", null), 
                    n(o(e), "_garageItemArr", []), e;
                }
                e(a, t);
                var r = a.prototype;
                return r.onLoad = function() {
                    this._closeBtnNode = rd.Utils.registerButtonEvent(this.node, "closeBtn", this._onCloseButton, this), 
                    this._createGarageItem(), this.initBgOpacity(), this.initAdData(), this.setOppoLookAdBtn(this.node), 
                    this.zIndex = i.UI_DIALOG_Z_INDEX.CENTER;
                }, r.show = function(e) {
                    this._garageItemArr.forEach(function(t) {
                        return t.updateWarCarItem();
                    }), this.playFadeInAnim([ this._closeBtnNode ]), this.setShowAdData(!0, d.INTERSTITIALAD_POSITION.POSITION_SECOND), 
                    t.prototype.show.call(this), rd.Event.emit(i.EVENT_TYPE.UPDATE_CAMERA_ATTR, !0), 
                    rd.Event.emit(i.EVENT_TYPE.SET_PREVIEW_ATTR, !0, e), rd.Ads.showCustomAdVBannerLEFT(rd.UI.getDialogByName(i.UI_DIALOG_NAME.SIGN_IN)), 
                    rd.Ads.showCustomAdVBannerRIGHT(rd.UI.getDialogByName(i.UI_DIALOG_NAME.SIGN_IN)), 
                    rd.Ads.showCustomAdBannerTop(rd.UI.getDialogByName(i.UI_DIALOG_NAME.SIGN_IN));
                }, r.hide = function() {
                    t.prototype.hide.call(this), rd.Event.emit(i.EVENT_TYPE.UPDATE_CAMERA_ATTR), rd.Event.emit(i.EVENT_TYPE.SET_PREVIEW_ATTR), 
                    rd.Ads.hideCustomAdVBannerLEFT(), rd.Ads.hideCustomAdVBannerRIGHT(), rd.Ads.hideCustomAdBannerTop();
                }, r.getUIName = function() {
                    return i.UI_DIALOG_CHINESE_NAME.GARAGE;
                }, r._createGarageItem = function() {
                    var t = rd.Utils.getNodeByName(this.node, "garagePanel"), e = rd.Utils.getNodeByName(t, "garageItem");
                    e.removeFromParent();
                    for (var n = 0; n < 2; n++) {
                        var o = 0 === n ? e : s(e);
                        o.parent = t;
                        var a = o.getComponent(u);
                        a.init(n), this._garageItemArr.push(a);
                    }
                }, r._onCloseButton = function() {
                    rd.UI.hideDialog(i.UI_DIALOG_NAME.GARAGE), rd.Stats.customEvent(I.custom_button_click, {
                        curDialog: this.getUIName(),
                        btnType: "关闭"
                    });
                }, a;
            }(c)) || _);
            a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/PlayerMgr.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./Player.ts" ], function(t) {
    "use strict";
    var e, n, r, a, o, i, s, l, c, u;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, r = t.assertThisInitialized, a = t.asyncToGenerator;
        }, function(t) {
            o = t.cclegacy, i = t._decorator, s = t.Component, l = t.instantiate;
        }, function(t) {
            c = t.ConstantCommon;
        }, function(t) {
            u = t.Player;
        } ],
        execute: function() {
            var p;
            o._RF.push({}, "34d86jtoINGjIKt2hPpDqnF", "PlayerMgr", void 0);
            var y = i.ccclass;
            t("PlayerMgr", y("PlayerMgr")(p = function(t) {
                function o() {
                    for (var e, a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                    return e = t.call.apply(t, [ this ].concat(o)) || this, n(r(e), "_player", null), 
                    e;
                }
                e(o, t);
                var i = o.prototype;
                return i.createPlayer = function() {
                    var t = a(function*() {
                        var t = yield rd.Asset.loadPrefab("game/player", c.BUNDLE_NAME.PREFAB), e = l(t);
                        this.node.addChild(e), this._player = e.addComponent(u), rd.Utils.getNodeByName(this.node.parent, "cameraMgr").parent = e;
                    });
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.init = function() {
                    this._player.init();
                }, o;
            }(s)) || p);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/UIManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./SingletonBase.ts", "./ConstantCommon.ts" ], function(t) {
    "use strict";
    var i, e, o, n, a, r, s, l, c, d, g, u, h, p, f, _, v, D;
    return {
        setters: [ function(t) {
            i = t.defineProperty, e = t.inheritsLoose, o = t.assertThisInitialized, n = t.createClass;
        }, function(t) {
            a = t.cclegacy, r = t.Node, s = t.director, l = t.game, c = t.instantiate, d = t.find, 
            g = t.resources, u = t.v3, h = t.tween, p = t.UIOpacity, f = t.Button;
        }, function(t) {
            _ = t.Log;
        }, function(t) {
            v = t.SingletonBase;
        }, function(t) {
            D = t.ConstantCommon;
        } ],
        execute: function() {
            a._RF.push({}, "371afETqF5I2YNZxrfWBeDo", "UIManager", void 0);
            t("popDialogUI", function() {
                function t() {
                    i(this, "_firstDeskTips", !0), i(this, "_currentDialgUIIndex", -1), i(this, "_showDialgUICount", 0), 
                    i(this, "_gameBackShowDialogUICount", 0), i(this, "uiPopCount", {}), i(this, "uiPopList", {}), 
                    i(this, "_enterUI", ""), i(this, "RCMD_UI_ARRAY", []), i(this, "UI_NONE_BANNER_ARRAY", []);
                }
                var e = t.prototype;
                return e.popDialogUI = function(t) {}, e.hideDialog = function() {}, t;
            }());
            var y = function(t) {
                function a() {
                    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(a)) || this, i(o(e), "_dialogDict", new Map()), 
                    i(o(e), "_isPlayingAnim", !1), i(o(e), "_persistRootNode", void 0), i(o(e), "_popDialog", void 0), 
                    e;
                }
                e(a, t);
                var v = a.prototype;
                return v.init = function() {
                    this._persistRootNode || (this._persistRootNode = new r("audioPersistNode"), s.getScene().addChild(this._persistRootNode), 
                    l.addPersistRootNode(this._persistRootNode));
                }, v.createAdLayer = function() {
                    rd.Asset.loadPrefab("adUI/adLayer", D.BUNDLE_NAME.ATOM).then(function(t) {
                        var i = c(t);
                        d("Canvas").addChild(i);
                    });
                }, v.showDialog = function(t) {
                    for (var i = this, e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) o[n - 1] = arguments[n];
                    if (this._dialogDict.has(t)) {
                        var a = this._dialogDict.get(t);
                        this._handleDialog(a, o);
                    } else {
                        var r = -1 === t.indexOf("/") ? "prefab/ui/" + t : t, s = D.BUNDLE_NAME.RESOURCES;
                        g.getInfoWithPath(r) ? (s = D.BUNDLE_NAME.RESOURCES, this.showDialogByBundle(t, r, s, o)) : rd.Bundle.loadBundle(D.BUNDLE_NAME.ATOM).then(function(e) {
                            e.getInfoWithPath(r) ? (s = D.BUNDLE_NAME.ATOM, r = -1 === t.indexOf("/") ? "adUI/" + t : r) : (s = D.BUNDLE_NAME.PREFAB, 
                            r = -1 === t.indexOf("/") ? "ui/" + t : r), i.showDialogByBundle(t, r, s, o);
                        }).catch(function() {
                            s = D.BUNDLE_NAME.PREFAB, r = -1 === t.indexOf("/") ? "ui/" + t : r, i.showDialogByBundle(t, r, s, o);
                        });
                    }
                }, v.showDialogByBundle = function(t, i, e, o) {
                    var n = this;
                    void 0 === e && (e = D.BUNDLE_NAME.PREFAB), rd.Asset.loadPrefab(i, e).then(function(i) {
                        if (n._dialogDict.has(t)) console.warn(t + " dialog prefab repeated loaded!!!"); else if (rd.App.isInHomePage || !n.popDialogUIMgr || !n.popDialogUIMgr.RCMD_UI_ARRAY.includes(t)) {
                            var e = c(i);
                            n._dialogDict.set(t, e), n._handleDialog(e, o);
                        }
                    });
                }, v._handleDialog = function(t, i) {
                    var e = d("Canvas"), o = t.name, n = rd.Utils.getNodeByName(e, o);
                    if (n) return this._dialogDict.set(o, n), void (D.UI_DIALOG_NAME.TOAST.endsWith(o) ? this._executeScriptCb(t, i) : _.debug(this.constructor.name, o + " dialog already in show!"));
                    t.parent = e, this._sortDialogs(t), this._executeScriptCb(t, i);
                }, v._sortDialogs = function(t) {
                    var i = this, e = t.parent, o = e.children;
                    o.length <= 1 || (o.sort(function(t, e) {
                        var o = i._getDialogZIndex(t) - i._getDialogZIndex(e);
                        return 0 === o ? t.getSiblingIndex() - e.getSiblingIndex() : o;
                    }), e._updateSiblingIndex());
                }, v._getDialogZIndex = function(t) {
                    var i = 0;
                    if ("adLayer" !== t.name && "nativeSplashADPrefab" !== t.name && "privacyPolicy" !== t.name) {
                        var e, o = this._getDialogScript(t);
                        i = o && null !== (e = o.zIndex) && void 0 !== e ? e : 0;
                    } else i = 99999;
                    return i;
                }, v._getDialogScript = function(t) {
                    var i = t.name, e = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
                    return t.getComponent(e);
                }, v._executeScriptCb = function(t, i) {
                    var e, o = this._getDialogScript(t);
                    o ? null === (e = o.show) || void 0 === e || e.apply(o, i) : console.warn(t.name + " dialog don't have " + o + " component!!!");
                }, v.hideDialog = function(t) {
                    var i = this;
                    if (this._dialogDict.has(t)) {
                        for (var e = this._dialogDict.get(t), o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) n[a - 1] = arguments[a];
                        if (e.parent) {
                            var r;
                            e.removeFromParent();
                            var s = this._getDialogScript(e);
                            null == s || null === (r = s.hide) || void 0 === r || r.apply(s, n);
                        }
                        this.popDialogUIMgr && n[0] && this.popDialogUIMgr.popDialogUI(null), setTimeout(function() {
                            i.updateCheckShowBanner();
                        }, 1e3);
                    } else _.debug(this.constructor.name, t + " dialog don't in show!");
                }, v.getDialogByName = function(t) {
                    return this._dialogDict.get(t);
                }, v.isDialogShowed = function(t) {
                    var i = this._dialogDict.get(t);
                    return !!i && !!i.parent;
                }, v.updateCheckShowBanner = function() {
                    var t;
                    if (rd.UI.popDialogUIMgr) {
                        for (var i = 0; i < rd.UI.popDialogUIMgr.UI_NONE_BANNER_ARRAY.length; i++) if (rd.UI.isDialogOnShow(rd.UI.popDialogUIMgr.UI_NONE_BANNER_ARRAY[i])) return;
                        rd.Ads.showBannerAd({
                            uiName: "游戏底部",
                            nativeType: 1
                        }), null === (t = this.popDialogUIMgr) || void 0 === t || t.hideDialog();
                    }
                }, v.destroyDialog = function(t) {
                    this._dialogDict.has(t) ? (this._dialogDict.get(t).destroy(), this._dialogDict.delete(t)) : _.debug(this.constructor.name, t + " dialog don't exist!");
                }, v.isDialogOnShow = function(t) {
                    var i = this._dialogDict.get(t);
                    return !!i && !!i.parent;
                }, v.isDialogsOnShow = function(t) {
                    void 0 === t && (t = []);
                    for (var i = !1, e = 0; e < t.length; e++) {
                        var o = t[e];
                        if (this.isDialogOnShow(o)) {
                            i = !0;
                            break;
                        }
                    }
                    return i;
                }, v.showTipMessage = function(t) {
                    this.showDialog(D.UI_DIALOG_NAME.TOAST, t);
                }, v.playScaleInAnim = function(t, i, e) {
                    var o = this;
                    void 0 === i && (i = null), void 0 === e && (e = .08);
                    for (var n = function(n, a) {
                        var r = t[n], s = o._getOpacityComp(r);
                        s.opacity = 0;
                        var l = r.getComponent(f), c = l && l.interactable;
                        l && (l.interactable = !1), h(r).delay(e * n).call(function() {
                            s.opacity = 255, l && (l.interactable = c);
                        }).then(o.getZoomTween(r.scale)).call(function() {
                            var t;
                            n === a - 1 && (null === (t = i) || void 0 === t || t());
                        }).start();
                    }, a = 0, r = t.length; a < r; a++) n(a, r);
                }, v.getZoomTween = function(t) {
                    return void 0 === t && (t = u(1, 1, 1)), h().to(0, {
                        scale: u(.75, .75, 1).multiply(t)
                    }).to(.25, {
                        scale: u(1.08, 1.08, 1).multiply(t)
                    }, {
                        easing: "sineOut"
                    }).to(.05, {
                        scale: u(1, 1, 1).multiply(t)
                    }, {
                        easing: "sineIn"
                    });
                }, v.playFadeInTween = function(t, i) {
                    void 0 === i && (i = .5), t.active = !0;
                    var e = this._getOpacityComp(t);
                    return e.opacity = 0, h(e).to(i, {
                        opacity: 255
                    }).start();
                }, v.isUIAnimPlaying = function() {
                    return this._isPlayingAnim;
                }, v.playScaleOutAnim = function(t, i, e, o) {
                    var n = this;
                    void 0 === i && (i = null), void 0 === e && (e = null), void 0 === o && (o = .05), 
                    this._isPlayingAnim = !0;
                    for (var a = function(a, r) {
                        var s = t[a], l = s.scale.clone();
                        h(s).delay(o * a).then(n.getScaleOutTween(s.scale)).call(function() {
                            n.playScaleFadeOutTween(s, l, a === r - 1, e);
                        }).delay(.25).call(function() {
                            var t;
                            a === r - 1 && (null === (t = i) || void 0 === t || t(), n._isPlayingAnim = !1);
                        }).start();
                    }, r = 0, s = t.length; r < s; r++) a(r, s);
                }, v.getScaleOutTween = function(t) {
                    return void 0 === t && (t = u(1, 1, 1)), h().to(.1, {
                        scale: u(1.1, 1.1, 1).multiply(t)
                    }, {
                        easing: "sineIn"
                    });
                }, v.playScaleFadeOutTween = function(t, i, e, o, n) {
                    void 0 === n && (n = .2), h(t).to(n, {
                        scale: u(.8, .8, 1).multiply(i)
                    }, {
                        easing: "sineOut"
                    }).to(0, {
                        scale: u(1, 1, 1)
                    }).start();
                    var a = this._getOpacityComp(t);
                    if (h(a).to(n, {
                        opacity: 0
                    }).start(), e && (null == o ? void 0 : o.active)) {
                        var r = this._getOpacityComp(o);
                        h(r).to(n, {
                            opacity: 0
                        }).start();
                    }
                }, v._getOpacityComp = function(t) {
                    return t.getComponent(p) || t.addComponent(p);
                }, n(a, [ {
                    key: "persistRootNode",
                    get: function() {
                        return this._persistRootNode;
                    },
                    set: function(t) {
                        this._persistRootNode = t;
                    }
                }, {
                    key: "popDialogUIMgr",
                    get: function() {
                        return this._popDialog;
                    },
                    set: function(t) {
                        this._popDialog = t;
                    }
                } ]), a;
            }(v);
            void 0 === window.rd && (window.rd = {});
            var I = t("default", y.getInstance());
            window.rd.UI = I, a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/VideoAdOppo.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./VideoAdBase.ts" ], function(e) {
    "use strict";
    var t, o, i;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose;
        }, function(e) {
            o = e.cclegacy;
        }, function(e) {
            i = e.VideoAdBase;
        } ],
        execute: function() {
            o._RF.push({}, "38edcvBybxDRq7dQ8Ld9dFz", "VideoAdOppo", void 0);
            e("VideoAdOppo", function(e) {
                function o(t) {
                    var o;
                    return (o = e.call(this, t) || this)._platName = "qg", o.create(), o;
                }
                return t(o, e), o;
            }(i));
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ICannonRigidBody.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ICannonSharedBody.ts" ], function(o) {
    "use strict";
    var n, e, d, t, r, i, s, a, y;
    return {
        setters: [ function(o) {
            n = o.defineProperty, e = o.inheritsLoose, d = o.assertThisInitialized, t = o.createClass;
        }, function(o) {
            r = o.cclegacy, i = o._decorator, s = o.RigidBodyComponent, a = o.Component;
        }, function(o) {
            y = o.ICannonSharedBody;
        } ],
        execute: function() {
            var c, h, u;
            r._RF.push({}, "3a0278egWNLmLz0RJRWsVN3", "ICannonRigidBody", void 0);
            var l = i.ccclass;
            o("ICannonRigidBody", l("ICannonRigidBody")((u = h = function(o) {
                function r() {
                    for (var e, t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                    return e = o.call.apply(o, [ this ].concat(r)) || this, n(d(e), "_body", void 0), 
                    n(d(e), "_sharedBody", void 0), e;
                }
                return e(r, o), r.prototype.onLoad = function() {
                    var o = this.getComponent(s);
                    this._body = o._body;
                    var n = this._body._sharedBody;
                    this._sharedBody = new y(), this._sharedBody.body = n.body;
                    n.shapes;
                    this._sharedBody.world = n.wrappedWorld._world;
                }, t(r, [ {
                    key: "sharedBody",
                    get: function() {
                        return this._sharedBody;
                    }
                }, {
                    key: "body",
                    get: function() {
                        return this._sharedBody.body;
                    }
                } ]), r;
            }(a), n(h, "TAG", "ICannonRigidBody"), c = u)) || c);
            r._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ADWxScreen.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./RDCommand.ts" ], function(t) {
    "use strict";
    var n, e, o, i, s, a, r, h, c, l, d, m, u, g, C, p, f;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, e = t.defineProperty, o = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, s = t._decorator, a = t.ButtonComponent, r = t.v3, h = t.instantiate, 
            c = t.UITransformComponent, l = t.Size, d = t.LabelComponent, m = t.loader, u = t.SpriteFrame, 
            g = t.SpriteComponent, C = t.Component;
        }, function(t) {
            p = t.Log;
        }, function(t) {
            f = t.RDCommand;
        } ],
        execute: function() {
            var B;
            i._RF.push({}, "3a0d9EQ+Z9Kd7A3KEAQ+m2T", "ADWxScreen", void 0);
            var b = s.ccclass;
            s.property, t("ADWxScreen", b("ADWxScreen")(B = function(t) {
                function i() {
                    for (var n, i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                    return n = t.call.apply(t, [ this ].concat(s)) || this, e(o(n), "backBtn", null), 
                    e(o(n), "topBtn", null), e(o(n), "bottomContent", null), e(o(n), "game", null), 
                    e(o(n), "dot", null), e(o(n), "_move", !1), e(o(n), "count", 1), e(o(n), "isBanner", !1), 
                    e(o(n), "isPYX", !1), e(o(n), "clickContent", null), e(o(n), "callback", null), 
                    n;
                }
                n(i, t);
                var s = i.prototype;
                return s.start = function() {
                    this.backBtn = this.node.getChildByName("backGame").getComponent(a), this.backBtn.node.on("click", this.onBackGame, this), 
                    this.game = this.node.getChildByName("game"), this.game.parent = null, this.dot = this.node.getChildByName("topBtn").getChildByName("dot"), 
                    this.topBtn = this.node.getChildByName("topBtn"), this.bottomContent = rd.Utils.getNodeByName(this.node, "content");
                }, s.onEnable = function() {
                    this.initTop(), this.initBottomView(), this.scheduleOnce(function() {
                        this.isBanner = rd.Platform.bannerIsShow(), rd.Ads.hideBannerAd();
                    }.bind(this), .5), this.isPYX = rd.PushCtrl.showJPYXBtn(!1), rd.PushCtrl.showMainPush(!1);
                }, s.onDisable = function() {
                    this.isBanner ? rd.Ads.showBannerAd() : rd.Ads.hideBannerAd(), rd.PushCtrl.showJPYXBtn(this.isPYX), 
                    rd.PushCtrl.showMainPush(!0);
                }, s.initTop = function() {
                    this.topBtn.removeAllChildren();
                    for (var t = rd.GameList.gameList, n = Math.min(t.length, 8), e = 0; e < n; e++) {
                        var o = t[e], i = r(e % 4 * 160 - 263.89, -93.025 - 130 * Math.floor(e / 4), 0);
                        7 === e ? (i.y -= 2, this.dot.setPosition(i)) : this.createItem(this.topBtn, o, i);
                    }
                }, s.initBottomView = function() {
                    this.bottomContent.removeAllChildren(), this.count = 1;
                    for (var t = rd.GameList.gameList, n = t.length, e = 0; e < n; e++) {
                        var o = t[e];
                        this.createItem(this.bottomContent, o);
                    }
                }, s.createItem = function(t, n, e) {
                    void 0 === e && (e = null);
                    var o = h(this.game), i = o.getChildByName("gameMask").getChildByName("icon").getComponent(a);
                    if (i.node.content = n, i.node.on("click", this.onJumpGame, this), t.addChild(o), 
                    e) o.setPosition(e); else {
                        var s = o.getComponent(c).contentSize, r = new l(this.bottomContent.getComponent(c).contentSize.width, this.bottomContent.getComponent(c).contentSize.height);
                        1 === this.count && (r.height = 0), this.count += 1, this.count % 4 == 0 && this.bottomContent.getComponent(c).setContentSize(new l(r.width, r.height + s.height));
                    }
                    var C = o.getChildByName("gameName").getComponent(d), f = "adUI/ui/" + n.url + "/spriteFrame";
                    n.icon ? (f = n.icon, C && (C.string = n.name), m.load(f, function(t, n) {
                        t && p.debug(this.constructor.name, "下载错误=========" + t);
                    }.bind(this)), m.load(f, function(t, n) {
                        t && p.debug(this.constructor.name, "下载错误=========" + t);
                    }.bind(this))) : m.loadRes(f, u, null, function(t, e) {
                        t ? console.warn(t) : (i && (i.node.getComponent(g).spriteFrame = e), C && (C.string = n.name));
                    });
                }, s.onBackGame = function() {
                    this.node.destroy();
                }, s.onContinueGame = function() {
                    var t = rd.GameList.getRandGameConfig();
                    rd.Platform.sendData(f.CMD_TO_MINIPROGRAM, t);
                }, s.onJumpGame = function(t) {
                    var n = t.node.content;
                    p.debug(this.constructor.name, "调整====" + JSON.stringify(n)), rd.Platform.sendData(f.CMD_TO_MINIPROGRAM, n);
                }, s.setCloseCallback = function(t) {
                    this.callback = t;
                }, i;
            }(C)) || B);
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/GameDataModel.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./IDataModel.ts" ], function(e) {
    "use strict";
    var t, n, a, i, s;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, n = e.createClass;
        }, function(e) {
            a = e.cclegacy;
        }, function(e) {
            i = e.ConstantCommon;
        }, function(e) {
            s = e.IDataModel;
        } ],
        execute: function() {
            a._RF.push({}, "3a8ffqWeT5Lt7l47ji6fvEF", "GameDataModel", void 0);
            var u = function(e) {
                function a() {
                    return e.call(this, "GameDataModel") || this;
                }
                t(a, e);
                var s = a.prototype;
                return s.initData = function() {
                    this.saveValueByKey(i.GAME_DATA_MODEL.GAMETIME, 0), this.saveValueByKey(i.GAME_DATA_MODEL.MUSIC, 1), 
                    this.saveValueByKey(i.GAME_DATA_MODEL.SOUND, 1), this.saveValueByKey(i.GAME_DATA_MODEL.VIBRATE, 1), 
                    this.saveValueByKey(i.GAME_DATA_MODEL.VIBRATE, 1), this.saveValueByKey(i.GAME_DATA_MODEL.USER_INFO, JSON.stringify({
                        nickName: "",
                        headFrameId: "",
                        headId: "",
                        userId: rd.Utils.getUUID(),
                        uid: ""
                    }));
                }, s.saveValueByKey = function(e, t) {
                    this.Set(e, t), this.Save();
                }, s.getValueByKey = function(e, t) {
                    return this.Query(e, t);
                }, n(a, [ {
                    key: "playTimes",
                    get: function() {
                        return this.getValueByKey(i.GAME_DATA_MODEL.GAMETIME, 1);
                    },
                    set: function(e) {
                        this.saveValueByKey(i.GAME_DATA_MODEL.GAMETIME, e);
                    }
                }, {
                    key: "musicVolume",
                    get: function() {
                        return this.getValueByKey(i.GAME_DATA_MODEL.MUSIC, 1);
                    },
                    set: function(e) {
                        this.saveValueByKey(i.GAME_DATA_MODEL.MUSIC, e);
                    }
                }, {
                    key: "soundVolume",
                    get: function() {
                        return this.getValueByKey(i.GAME_DATA_MODEL.SOUND, 1);
                    },
                    set: function(e) {
                        this.saveValueByKey(i.GAME_DATA_MODEL.SOUND, e);
                    }
                }, {
                    key: "isVibrate",
                    get: function() {
                        return 1 === this.getValueByKey(i.GAME_DATA_MODEL.VIBRATE, 1);
                    },
                    set: function(e) {
                        this.saveValueByKey(i.GAME_DATA_MODEL.VIBRATE, e ? 1 : 0);
                    }
                }, {
                    key: "lastLoginTime",
                    get: function() {
                        return this.getValueByKey(i.GAME_DATA_MODEL.LAST_LOGIN_TIME, 0);
                    },
                    set: function(e) {
                        this.saveValueByKey(i.GAME_DATA_MODEL.LAST_LOGIN_TIME, e);
                    }
                }, {
                    key: "isPrivacyAgree",
                    get: function() {
                        return 1 === this.getValueByKey(i.GAME_DATA_MODEL.PRIVACY_AGREE, 0);
                    },
                    set: function(e) {
                        this.saveValueByKey(i.GAME_DATA_MODEL.PRIVACY_AGREE, e ? 1 : 0);
                    }
                }, {
                    key: "userInfo",
                    get: function() {
                        var e = this.getValueByKey(i.GAME_DATA_MODEL.USER_INFO);
                        return e ? e = JSON.parse(e) : (e = {
                            nickName: "",
                            headFrameId: "",
                            headId: "",
                            userId: rd.Utils.getUUID(),
                            uid: ""
                        }, this.userInfo = e), e;
                    },
                    set: function(e) {
                        this.saveValueByKey(i.GAME_DATA_MODEL.USER_INFO, JSON.stringify(e)), rd.Event.emit(i.EVENT_TYPE.UPDATE_USER_INFO);
                    }
                } ]), a;
            }(s);
            void 0 === window.rd && (window.rd = {});
            var A = e("default", u.getInstance());
            window.rd.GameDataModel = A, a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/MoneyFly.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts" ], function(o) {
    "use strict";
    var t, n, e, r, i, a, s, l, c, d, u, y, p;
    return {
        setters: [ function(o) {
            t = o.applyDecoratedDescriptor, n = o.inheritsLoose, e = o.initializerDefineProperty, 
            r = o.assertThisInitialized;
        }, function(o) {
            i = o.cclegacy, a = o._decorator, s = o.Prefab, l = o.instantiate, c = o.v3, d = o.Component, 
            u = o.Animation, y = o.tween;
        }, function(o) {
            p = o.Constants;
        } ],
        execute: function() {
            var f, P, m, h, v;
            i._RF.push({}, "3ad78hS5ZpFwasWs+ptfsMB", "MoneyFly", void 0);
            var M = a.ccclass, g = a.property;
            o("MoneyFly", (f = M("MoneyFly"), P = g({
                type: s
            }), f((v = t((h = function(o) {
                function t() {
                    for (var t, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return t = o.call.apply(o, [ this ].concat(i)) || this, e(r(t), "moneyPrefab", v, r(t)), 
                    t;
                }
                n(t, o);
                var i = t.prototype;
                return i.createMoney = function() {
                    for (var o = 0; o < 25; o++) {
                        var t = l(this.moneyPrefab);
                        rd.Pool.putNode(t);
                    }
                }, i.playAnimation = function(o, t, n) {
                    var e = this, r = o.getWorldPosition(), i = t.getWorldPosition(), a = rd.Utils.getRandomInteger(5, 10) + 20, s = this._getCirclePoints(r, a).map(function(o) {
                        var t = rd.Pool.getNode(e.moneyPrefab, e.node);
                        return t.setWorldPosition(r), {
                            moneyNode: t,
                            midPos: o,
                            endPos: i,
                            distance: o.clone().subtract(i).length()
                        };
                    });
                    s.sort(function(o, t) {
                        return o.distance - t.distance;
                    }), this._playMoneyFlyAnim(s, n);
                }, i._playMoneyFlyAnim = function(o, t) {
                    for (var n = this, e = function(e, r) {
                        var i = o[e], a = i.moneyNode.getComponent(u);
                        null == a || a.play(), y(i.moneyNode).to(.3, {
                            worldPosition: i.midPos
                        }).delay(.01 * e).to(.5, {
                            worldPosition: i.endPos
                        }).call(function() {
                            null == a || a.stop(), rd.Pool.putNode(i.moneyNode), 0 === e ? rd.Event.emit(p.EVENT_TYPE.MONEY_SCALE_ANIM) : e === r - 1 && (n.node.active = !1, 
                            t && rd.Event.emit(p.EVENT_TYPE.MONEY_FLY_END));
                        }).start();
                    }, r = 0, i = o.length; r < i; r++) e(r, i);
                }, i._getCirclePoints = function(o, t, n, e) {
                    void 0 === n && (n = 180), void 0 === e && (e = 100);
                    for (var r = [], i = Math.PI / 180 * Math.round(360 / t), a = 0; a < t; a++) {
                        var s = o.x + n * Math.sin(i * a), l = o.y + n * Math.cos(i * a);
                        r.push(c(s + Math.random() * e, l + Math.random() * e, 0));
                    }
                    return r;
                }, i.onDestroy = function() {
                    rd.Pool.clearPool(this.moneyPrefab);
                }, t;
            }(d)).prototype, "moneyPrefab", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), m = h)) || m));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDHuaWeiMiniPlatform.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./RDPlatformParam.ts", "./RDPlatformType.ts", "./RDPlatform.ts", "./BannerAdHw.ts", "./IntertitalAdHw.ts", "./VideoAdHw.ts", "./NativeAdHw.ts" ], function(t) {
    "use strict";
    var n, e, i, a, o, s, r, c, u, l, h, d, f, g, _;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, e = t.get, i = t.getPrototypeOf, a = t.defineProperty, o = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy;
        }, function(t) {
            r = t.Log;
        }, function(t) {
            c = t.ConstantCommon;
        }, function(t) {
            u = t.RDPlatformParam;
        }, function(t) {
            l = t.RDPlatformType;
        }, function(t) {
            h = t.RDPlatform;
        }, function(t) {
            d = t.BannerAdHw;
        }, function(t) {
            f = t.IntertitalAdHw;
        }, function(t) {
            g = t.VideoAdHw;
        }, function(t) {
            _ = t.NativeAdHw;
        } ],
        execute: function() {
            s._RF.push({}, "3b8c76e7zRE9JxD/OUl0xGD", "RDHuaWeiMiniPlatform", void 0);
            t("RDHuaWeiMiniPlatform", function(t) {
                function s(n) {
                    var e;
                    return e = t.call(this, n) || this, a(o(e), "_currentNativeIndex", 0), e;
                }
                n(s, t);
                var h = s.prototype;
                return h.onShow = function() {
                    console.error("HuaWeiSDK game enter foreground"), rd.Event.emit(c.EVENT_TYPE.PLAT_ON_SHOW);
                }, h.onHide = function() {
                    console.log("HuaWeiSDK game enter background");
                }, h.initBanner = function() {
                    for (var t = u.ADPARAM[this.type.toString()].banner_preload_count || 1, n = 0; n < t; n++) {
                        var e = {
                            left: 0,
                            top: this._systemInfo.safeArea.height - 57,
                            width: 360,
                            height: 57
                        }, i = u.ADPARAM[this.type.toString()].banner_id, a = new d({
                            adUnitId: i,
                            style: e,
                            adIntervals: 60
                        });
                        this._bannerADInstances.push(a);
                    }
                }, h.initVideo = function() {
                    var t = u.ADPARAM[this.type.toString()].video_id;
                    this._videoBoxInstance = new g({
                        adUnitId: "adunit-48a5d8e1ce82b9d9"
                    });
                }, h.initIntertitalAd = function() {
                    var t = u.ADPARAM[this.type.toString()].interstital_id;
                    this._interstitialAdInstance = new f({
                        adUnitId: "adunit-6610afa34f8f7843"
                    });
                }, h.initCustomAd = function() {}, h.initNative = function() {
                  this._nativeID = ["adunit-4ed759ac5bcc73ea","adunit-3231ae5992c2a0c4"];
                    for (var n = 0; n < this._nativeID.length; n++) {
                        var e = new _({
                            adUnitId: this._nativeID[n],
                            adIntervals: rd.Option.nativeFreashTime,
                            adDelay: n * rd.Option.nativeDurition
                        });
                        this._nativeADInstanceList.push(e);
                    }
                    t.prototype.initNative.call(this);
                }, h._createNativeAd = function(t) {
                    var n = this;
                    if (this.isReviewed() || rd.Option.onlyVideo) return r.debug(this.constructor.name, "审核中====="), 
                    null == t ? void 0 : t.fail();
                    if (rd.Option.regionEnable) {
                        if (!this.natvieAds) return r.debug(this.constructor.name, "原生广告没有数据, 稍后重试"), null == t ? void 0 : t.fail();
                        var e = this._getNative();
                        r.debug(this.constructor.name, "获取原生广告", e._config.adUnitId), null == t || t.success(e);
                    } else r.debug(this.constructor.name, "原生广告222222222", this._currentNativeIndex, this._nativeADInstanceList.length), 
                    this._nativeADInstanceList[this._currentNativeIndex].show({
                        success: function() {
                            null == t || t.success(n._nativeADInstanceList[0]);
                        },
                        fail: function() {
                            null == t || t.fail();
                        }
                    }), this._currentNativeIndex++, this._currentNativeIndex = this._currentNativeIndex >= this._nativeADInstanceList.length ? 0 : this._currentNativeIndex;
                }, h.LoadSubpackageTask = function(t, n, e) {
                    var i = this;
                    if (this._unPackgeTimes = 0, null == this._subpackageArr || 0 === this._subpackageArr.length) return r.debug(this.constructor.name, "无需分包"), 
                    void (n && n(100));
                    this._loadedSubpackageCnt = 0;
                    var a = this._subpackageArr[this._loadedSubpackageCnt];
                    !function o(s) {
                        var c = i._api.loadSubpackage({
                            subpackage: s,
                            success: function(t) {
                                i._loadedSubpackageCnt >= i._subpackageArr.length - 1 ? n && n(t) : (i._unPackgeTimes = 0, 
                                i._loadedSubpackageCnt += 1, a = i._subpackageArr[i._loadedSubpackageCnt], o(a));
                            },
                            fail: function(t) {
                                r.debug(i.constructor.name, "分包失败", JSON.stringify(t)), e && e(t), i._showToast("分包失败,请重启游戏");
                            }
                        }), u = Math.ceil(100 / i._subpackageArr.length);
                        c.onprogress(function(n) {
                            var e = i._loadedSubpackageCnt * u + n.progress / 100 * u;
                            r.debug(i.constructor.name, "下载进度", e), t && t({
                                progress: e
                            });
                        });
                    }(a);
                }, h.shareAppMessage = function(t) {}, h._showToast = function(t) {
                    window.qg.showToast({
                        title: t,
                        icon: "none",
                        image: "",
                        mask: !1,
                        duration: 2e3,
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, h._gotoMiniGameByAppid = function(t) {
                    r.debug(this.constructor.name, "跳转小游戏" + t.packName), this._api.navigateToMiniGame({
                        pkgName: t.packName,
                        success: function() {
                            r.debug(this.constructor.name, "跳转成功");
                        },
                        fail: function(t) {
                            r.debug(this.constructor.name, JSON.stringify(t));
                        },
                        complete: function() {}
                    });
                }, h._vibrateShort = function(t) {
                    void 0 === t && (t = 50), 100 != t ? this.vibrate(t) : this.vibrateStrong();
                }, h.vibrateStrong = function() {
                    this._api.vibrateLong({
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, h.vibrate = function(t) {
                    new Date().getTime() - this._lastShakeTime < 100 || (this._lastShakeTime = new Date().getTime(), 
                    this._api.vibrateShort({
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    }));
                }, h._showBannerAd = function(t) {
                    if (this.isReviewed()) r.debug(this.constructor.name, "审核中====="); else {
                        var n = u.ADPARAM[l.HUAWEI.toString()].banner_preload_count || 1;
                        this._bannerShowIndex >= n && (this._bannerShowIndex = 0), r.debug(this.constructor.name, "调用banner" + this._bannerADInstances.length + " ==== " + this._bannerShowIndex), 
                        this._bannerADInstance && this._bannerADInstance.hide(), this._bannerADInstance = null;
                        var e = this._bannerADInstances[this._bannerShowIndex];
                        e.show({
                            success: function() {},
                            fail: function() {}
                        }), this._bannerADInstance = e, this._bannerShowIndex += 1;
                    }
                }, h._showVideo = function(t) {
                    this.isReviewed() ? this._rewardCaback && this._rewardCaback.success(null) : (r.debug(this.constructor.name, "准备激励广告 展示开始"), 
                    this._videoBoxInstance.show(this._rewardCaback));
                }, h._showIntertitalAd = function(t) {
                    this.isReviewed() || (1 === t.type ? this._interstitialAdInstance.show() : rd.PushCtrl.showNatvieInterstitialAd());
                }, h._createShortcutInstalled = function(t) {
                    var n = this;
                    this._api.hasShortcutInstalled({
                        success: function(t) {
                            r.debug(n.constructor.name, "判断图标未存在时，创建图标" + JSON.stringify(t)), n._hasShortcutInstalled = t;
                        },
                        fail: function(t) {},
                        complete: function() {}
                    });
                }, h._installShortcut = function(t) {
                    var n = this;
                    r.debug(this.constructor.name, "各个平台处理"), this._api.installShortcut({
                        success: function() {
                            r.debug(n.constructor.name, "各个平台处理==="), n._hasShortcutInstalled = !1, n._shortCutInstalledCaback && n._shortCutInstalledCaback.success(null);
                        },
                        fail: function(t) {
                            r.debug(n.constructor.name, "各个平台处理1111111==="), n._shortCutInstalledCaback && n._shortCutInstalledCaback.fail();
                        },
                        complete: function() {}
                    });
                }, h._login = function(n) {
                    var a, o = this, s = u.ADPARAM[this.type.toString()].appid;
                    this._api.gameLoginWithReal ? this._api.gameLoginWithReal({
                        forceLogin: 1,
                        appid: s,
                        success: function(e) {
                            n.nickName = e.displayName, console.error("登录成功"), t.prototype._login.call(o, n);
                        },
                        fail: function(e, i) {
                            console.log("华为登录失败 game login with real fail:" + e + ", code:" + i), 7004 == i || 2012 == i || -1 == i ? (console.log("华为 玩家取消登录，返回游戏界面让玩家重新登录。"), 
                            o._relogin(n)) : 7021 == i ? (console.log("华为 The player has canceled identity verification. Forbid the player from entering the game."), 
                            o.exitGame()) : t.prototype._login.call(o, n);
                        }
                    }) : this._api.gameLogin(a = {
                        forceLogin: 1,
                        appid: s,
                        success: function(e) {
                            console.error("登录成功" + e.playerId), n.nickName = e.displayName, t.prototype._login.call(o, n);
                        },
                        fail: function(t, o) {
                            7004 == o || 2012 == o ? (console.log("华为 玩家取消登录，返回游戏界面让玩家重新登录。"), this._relogin(n)) : e(i(a), "_login", this).call(this, n), 
                            console.log("华为 on gameLogin fail: " + t + "," + o);
                        },
                        complete: function() {
                            console.log("on gameLogin: complete");
                        }
                    });
                }, h._relogin = function(t) {
                    var n = this;
                    rd.UI.showDialog(c.UI_DIALOG_NAME.DIALOGUI, {
                        content: "需要登录才能进入游戏",
                        callback: {
                            success: function() {
                                n._login(t);
                            },
                            fail: function() {
                                n.exitGame();
                            }
                        }
                    });
                }, h.isShowNativeAd = function(t) {
                    return !0;
                }, h.natvieAds = function() {
                    return !rd.Option.regionEnable || t.prototype.natvieAds.call(this);
                }, s;
            }(h));
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/IntertitalAdVivo.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./IntertitalAdBase.ts" ], function(t) {
    "use strict";
    var e, i, n;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            i = t.cclegacy;
        }, function(t) {
            n = t.IntertitalAdBase;
        } ],
        execute: function() {
            i._RF.push({}, "3ca40GqxjdJhYkzR6gdbX22", "IntertitalAdVivo", void 0);
            t("IntertitalAdVivo", function(t) {
                function i(e) {
                    var i;
                    return (i = t.call(this, e) || this)._platName = "qg", i;
                }
                return e(i, t), i.prototype.show = function() {
                    this.destroy(), this.create(), this.load();
                }, i;
            }(n));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/WeaponItem.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./WarCarItem.ts" ], function(t) {
    "use strict";
    var a, e, p, n, i, r, s;
    return {
        setters: [ function(t) {
            a = t.defineProperty, e = t.inheritsLoose, p = t.assertThisInitialized;
        }, function(t) {
            n = t.cclegacy, i = t._decorator;
        }, function(t) {
            r = t.Constants;
        }, function(t) {
            s = t.WarCarItem;
        } ],
        execute: function() {
            var m, o, u;
            n._RF.push({}, "3e234zRyg5ENpmhsyINCMfS", "WeaponItem", void 0);
            var c, A = i.ccclass;
            !function(t) {
                t[t.SAW = 0] = "SAW", t[t.GUN = 1] = "GUN", t[t.ROCKET = 2] = "ROCKET";
            }(c || (c = {}));
            t("WeaponItem", A("WeaponItem")((u = o = function(t) {
                function n() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(p(e), "_weaponType", null), 
                    e;
                }
                e(n, t);
                var i = n.prototype;
                return i.init = function(a, e) {
                    switch (void 0 === a && (a = this.itemIdx), void 0 === e && (e = this._weaponType), 
                    t.prototype.init.call(this, a), this._weaponType = e, this.updateWarCarItem(), e) {
                      case c.SAW:
                        this.frameSpt.spriteFrame = rd.SptFrame.getSpriteFrameByName("Weapon_Image_Frame" + (a + 1)), 
                        this.iconSpt.spriteFrame = rd.SptFrame.getSpriteFrameByName("Weapon_Image_SawIcon" + (a + 1));
                        break;

                      case c.GUN:
                        var p = g.App.GunData.level > 0;
                        this.frameSpt.spriteFrame = rd.SptFrame.getSpriteFrameByName("Weapon_Image_Frame" + (p ? 0 === a ? 4 : 2 : 3)), 
                        this.iconSpt.spriteFrame = rd.SptFrame.getSpriteFrameByName("Weapon_Image_GunIcon" + (p ? a + 2 : 1));
                    }
                }, i.updateWarCarItem = function() {
                    switch (this._weaponType) {
                      case c.SAW:
                        this._updateSawItem();
                        break;

                      case c.GUN:
                        this._updateGunItem();
                    }
                }, i.getUIName = function() {
                    return r.UI_DIALOG_CHINESE_NAME.WEAPON;
                }, i.onUnlockButton = function() {
                    var t = 0;
                    switch (this._weaponType) {
                      case c.SAW:
                        t = 0 === this.itemIdx ? g.App.SawData.nextLvAmt : g.App.SawData.nextDmgAmt;
                        break;

                      case c.GUN:
                        t = 0 === this.itemIdx ? g.App.GunData.nextLvAmt : g.App.GunData.nextDmgAmt;
                    }
                    this.unlockWarCar(t);
                }, i.upgradeWarCar = function() {
                    var t = !0;
                    switch (this._weaponType) {
                      case c.SAW:
                        0 === this.itemIdx ? g.App.SawData.upgradeLevel() : g.App.SawData.upgradeDamage();
                        break;

                      case c.GUN:
                        0 === this.itemIdx ? (0 === g.App.GunData.level && (t = !1), g.App.GunData.upgradeLevel()) : g.App.GunData.upgradeDamage();
                    }
                    rd.Event.emit(t ? r.EVENT_TYPE.UPDATE_CAR_ITEM : r.EVENT_TYPE.UPDATE_CAR_PANEL);
                }, i._updateSawItem = function() {
                    var t = this.itemIdx;
                    this.levelNode.active = !0, this.levelLbl.string = (0 === t ? g.App.SawData.level : g.App.SawData.damageLv).toString();
                    var a = 0 === t ? g.App.SawData.nextLvAmt : g.App.SawData.nextDmgAmt, e = 0 === t ? g.App.SawData.isMaxLv : g.App.SawData.isMaxDmgLv;
                    this.updateUnlockBtn(a, e);
                }, i._updateGunItem = function() {
                    var t = this.itemIdx, a = g.App.GunData.level > 0;
                    this.levelNode.active = a, a && (this.levelLbl.string = (0 === t ? g.App.GunData.level : g.App.GunData.damageLv).toString());
                    var e = 0 === t ? g.App.GunData.nextLvAmt : g.App.GunData.nextDmgAmt, p = 0 === t ? g.App.GunData.isMaxLv : g.App.GunData.isMaxDmgLv;
                    this.updateUnlockBtn(e, p);
                }, n;
            }(s), a(o, "WEAPON_TYPE", c), m = u)) || m);
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ConstantCommon.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(I) {
    "use strict";
    var E, T;
    return {
        setters: [ function(I) {
            E = I.defineProperty;
        }, function(I) {
            T = I.cclegacy;
        } ],
        execute: function() {
            var O, _, A, N, S, n, o, e, i;
            T._RF.push({}, "3e3b89/elBOzrQundhN7a16", "ConstantCommon", void 0), function(I) {
                I.NATIVE_AD_SHOW = "native_ad_show", I.NATIVE_AD_HIDE = "native_ad_hide", I.SHOW_NATIVE_AD = "showNativeAd", 
                I.GAME_CONTINUE = "gameContinue_off", I.ADS_INTERSTITIALAD = "ads_interstitialad", 
                I.PLAT_ON_SHOW = "plat_on_show", I.LOAD_AUDIO_FFT = "loadAudioFFT", I.UPDATE_AUD_MUSIC = "updateAuditionMusic", 
                I.MAP_LOAD_FINISH = "mapLoadFinish", I.UPDATE_USER_INFO = "updateUserInfo", I.GOLD_ANIM = "goldAnim";
            }(O || (O = {})), function(I) {
                I.USER_UID = "uid", I.USER_ID = "userId", I.USER_NAME = "userName", I.USER_HEADE = "userHead";
            }(_ || (_ = {})), function(I) {
                I.TOAST = "adUI/toastUI", I.DIALOGUI = "dialogUI", I.ADBOMBGAME = "adUI/ADBombGame", 
                I.CLICKBOXUI = "adUI/clickBoxUI", I.CLICKVIDEOBOXUI = "adUI/clickVideoBoxUI", I.VIDEOTIPDIALOG = "adUI/VideoTipDialog";
            }(A || (A = {})), function(I) {
                I[I.DEFAULT = 0] = "DEFAULT", I[I.MAIN = 5] = "MAIN", I[I.CENTER = 10] = "CENTER", 
                I[I.COMMON = 100] = "COMMON", I[I.POPUP = 200] = "POPUP", I[I.CONFIRM = 500] = "CONFIRM", 
                I[I.LOADING = 1e3] = "LOADING", I[I.PROMPT = 2e3] = "PROMPT", I[I.TOAST = 9999] = "TOAST", 
                I[I.TOP = 1e5] = "TOP";
            }(N || (N = {})), function(I) {
                I[I.NONE = 0] = "NONE", I[I.IN_HOME_PAGE = 1] = "IN_HOME_PAGE", I[I.READY = 2] = "READY", 
                I[I.READY_START = 3] = "READY_START", I[I.START = 4] = "START", I[I.PAUSE = 5] = "PAUSE", 
                I[I.VICTORY = 6] = "VICTORY", I[I.GAME_OVER = 7] = "GAME_OVER", I[I.RESULT = 8] = "RESULT", 
                I[I.FINISH = 9] = "FINISH", I[I.ENDLESS_TRANSIT = 10] = "ENDLESS_TRANSIT";
            }(S || (S = {})), function(I) {
                I[I.BOTTOM = 0] = "BOTTOM", I[I.TOP = 1] = "TOP", I[I.CENTER = 2] = "CENTER";
            }(n || (n = {})), function(I) {
                I[I.LEFT = 0] = "LEFT", I[I.RIGHT = 1] = "RIGHT", I[I.CENTER = 2] = "CENTER";
            }(o || (o = {})), function(I) {
                I[I.POSITION_NONE = -1] = "POSITION_NONE", I[I.POSITION_SECOND = 0] = "POSITION_SECOND", 
                I[I.POSITION_GAME_END = 1] = "POSITION_GAME_END", I[I.POSITION_GAME_START = 2] = "POSITION_GAME_START", 
                I[I.POSITION_3 = 3] = "POSITION_3", I[I.POSITION_4 = 4] = "POSITION_4", I[I.POSITION_5 = 5] = "POSITION_5";
            }(e || (e = {})), function(I) {
                I.RESOURCES = "resources", I.PREFAB = "prefab", I.TEXTURE = "texture", I.AUDIO = "audio", 
                I.ATOM = "atom";
            }(i || (i = {}));
            var t = function() {};
            E(t, "MUSIC", "music"), E(t, "SOUND", "sound"), E(t, "GAMETIME", "gametime"), E(t, "PRIVACY_AGREE", "privacy_agree"), 
            E(t, "USER_INFO", "userInfo"), E(t, "VIBRATE", "isVibrate"), E(t, "LAST_LOGIN_TIME", "lastLoginTime");
            var R = I("ConstantCommon", function() {});
            E(R, "EVENT_TYPE", O), E(R, "USER_KEY", _), E(R, "GAME_STATE", S), E(R, "POSITION_TYPE", n), 
            E(R, "POSITION_V_TYPE", o), E(R, "UI_DIALOG_NAME", A), E(R, "UI_DIALOG_Z_INDEX", N), 
            E(R, "INTERSTITIALAD_POSITION", e), E(R, "BUNDLE_NAME", i), E(R, "GAME_DATA_MODEL", t), 
            E(R, "IS_DEBUG", !1), T._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/popDialogUIManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts", "./RDCommand.ts", "./UIManager.ts" ], function(I) {
    "use strict";
    var t, A, i, n, o, _, e, s, r;
    return {
        setters: [ function(I) {
            t = I.inheritsLoose, A = I.defineProperty, i = I.assertThisInitialized;
        }, function(I) {
            n = I.cclegacy, o = I.macro;
        }, function(I) {
            _ = I.Constants;
        }, function(I) {
            e = I.ConstantCommon;
        }, function(I) {
            s = I.RDCommand;
        }, function(I) {
            r = I.popDialogUI;
        } ],
        execute: function() {
            n._RF.push({}, "3ecf6EmIi9JBq9npEjQ3K8h", "popDialogUIManager", void 0);
            I("popDialogUIManager", function(I) {
                function n() {
                    var t;
                    return t = I.call(this) || this, A(i(t), "_popInter", !1), rd.Option.systemWXSwitch && rd.Option.rewardedVideoInterval ? (t.uiPopList[_.UI_DIALOG_NAME.LOADING] = [ e.UI_DIALOG_NAME.ADBOMBGAME, e.UI_DIALOG_NAME.CLICKVIDEOBOXUI, _.UI_DIALOG_NAME.SIGN_IN, e.UI_DIALOG_NAME.ADBOMBGAME, e.UI_DIALOG_NAME.CLICKBOXUI ], 
                    t.uiPopCount[_.UI_DIALOG_NAME.LOADING] = 5) : (t.uiPopList[_.UI_DIALOG_NAME.LOADING] = [ _.UI_DIALOG_NAME.SIGN_IN, _.UI_DIALOG_NAME.TURNTABLE ], 
                    t.uiPopCount[_.UI_DIALOG_NAME.LOADING] = 2), t.uiPopList[_.UI_DIALOG_NAME.MAIN] = [ e.UI_DIALOG_NAME.ADBOMBGAME, e.UI_DIALOG_NAME.CLICKBOXUI ], 
                    t.uiPopCount[_.UI_DIALOG_NAME.MAIN] = 2, t.RCMD_UI_ARRAY = [], t.UI_NONE_BANNER_ARRAY = [ _.UI_DIALOG_NAME.SIGN_IN, _.UI_DIALOG_NAME.TURNTABLE, _.UI_DIALOG_NAME.SETTING, _.UI_DIALOG_NAME.MONEY, _.UI_DIALOG_NAME.WORLD, _.UI_DIALOG_NAME.WEAPON, _.UI_DIALOG_NAME.GARAGE, e.UI_DIALOG_NAME.ADBOMBGAME, e.UI_DIALOG_NAME.CLICKBOXUI, e.UI_DIALOG_NAME.CLICKVIDEOBOXUI ], 
                    t;
                }
                t(n, I);
                var r = n.prototype;
                return r.hideDialog = function() {
                    rd.Ads.showCustomAdVBannerRIGHT(rd.UI.getDialogByName(_.UI_DIALOG_NAME.GAME)), rd.Ads.showCustomAdBannerTop(rd.UI.getDialogByName(_.UI_DIALOG_NAME.GAME));
                }, r.popDialogUI = function(I) {
                    var t = this;
                    if (I || this._enterUI) {
                        I && I === _.UI_DIALOG_NAME.GAME && this._enterUI === _.UI_DIALOG_NAME.GAME && (this._currentDialgUIIndex = this._showDialgUICount = -1), 
                        !I && (I = this._enterUI), this._enterUI != I && (this._currentDialgUIIndex = this._showDialgUICount = -1), 
                        this._currentDialgUIIndex++, this._enterUI = I;
                        var A = this.uiPopList[this._enterUI];
                        if (this._showDialgUICount >= this.uiPopCount[this._enterUI] - 1 || this._currentDialgUIIndex >= A.length) {
                            if (this._enterUI = "", I === _.UI_DIALOG_NAME.GAME && this._firstDeskTips && !rd.Platform.HasShortcutInstalled()) this._firstDeskTips = !1, 
                            console.log("提示添加桌面"), rd.Platform.sendData(s.CMD_ADDSHORTCUT, null), rd.Ads.showCustomAdVBannerRIGHT(rd.UI.getDialogByName(_.UI_DIALOG_NAME.GAME)), 
                            rd.Ads.showCustomAdBannerTop(rd.UI.getDialogByName(_.UI_DIALOG_NAME.GAME)); else if (I == _.UI_DIALOG_NAME.LOADING) {
                                rd.Option.rewardedVideoSwitch && rd.Option.systemWXSwitch && setTimeout(function() {
                                    t.popDialogUI(_.UI_DIALOG_NAME.MAIN);
                                }, 33e4);
                                var i = rd.Option.getConfigByKey("isAutoShowVideoChest", 0);
                                rd.Option.systemWXSwitch && i && rd.PushCtrl.schedule(function() {
                                    rd.UI.showDialog(e.UI_DIALOG_NAME.CLICKVIDEOBOXUI);
                                }, 100, o.REPEAT_FOREVER, i), rd.Option.systemWXSwitch && rd.Option.getConfigByKey("isChangeAddCoinBtnPos", 0) && rd.PushCtrl.schedule(function() {
                                    t._popInter = !t._popInter, t._popInter ? rd.Ads.showInterstitialAd({
                                        type: e.INTERSTITIALAD_POSITION.POSITION_SECOND
                                    }) : rd.Ads.showCustomAdScene(rd.PushCtrl.node, {
                                        fail: function() {},
                                        success: function() {},
                                        close: function() {}
                                    });
                                }, 30, o.REPEAT_FOREVER, 30);
                            }
                            rd.Ads.showInterstitialAd({
                                type: e.INTERSTITIALAD_POSITION.POSITION_GAME_START
                            });
                        } else {
                            var n = A[this._currentDialgUIIndex], r = g.App.Account.signInfo.count < _.TOTAl_SIGN_IN_DAYS && rd.Utils.isNextDay(new Date().getTime(), g.App.Account.signInfo.time);
                            n !== _.UI_DIALOG_NAME.SIGN_IN || r ? (n != e.UI_DIALOG_NAME.ADBOMBGAME && n != e.UI_DIALOG_NAME.CLICKVIDEOBOXUI && n != e.UI_DIALOG_NAME.CLICKBOXUI && this._showDialgUICount++, 
                            rd.UI.showDialog(A[this._currentDialgUIIndex], null)) : this.popDialogUI(null);
                        }
                    }
                }, n;
            }(r));
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/Queue.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var n, i, e;
    return {
        setters: [ function(t) {
            n = t.createClass, i = t.defineProperty;
        }, function(t) {
            e = t.cclegacy;
        } ],
        execute: function() {
            e._RF.push({}, "401e4UeveZD/onC2XtDOmxM", "Queue", void 0);
            t("default", function() {
                function t(t, n) {
                    i(this, "fn", void 0), i(this, "arg", void 0), i(this, "_isCancel", void 0), i(this, "_isRun", !1), 
                    this.fn = t, this.arg = n;
                }
                var e = t.prototype;
                return e.cancel = function() {
                    this._isCancel = !0;
                }, e.run = function() {
                    if (this._isRun = !0, !this._isCancel) return this.fn.apply(null, this.arg);
                }, n(t, [ {
                    key: "isRun",
                    get: function() {
                        return this._isRun;
                    }
                } ]), t;
            }());
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/MoneyUI.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts", "./RDStatisticsManager.ts", "./UIGBase.ts" ], function(t) {
    "use strict";
    var o, n, e, s, i, c, d, a, r, u;
    return {
        setters: [ function(t) {
            o = t.inheritsLoose, n = t.defineProperty, e = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy, i = t._decorator;
        }, function(t) {
            c = t.Constants;
        }, function(t) {
            d = t.ConstantCommon;
        }, function(t) {
            a = t.CustomEventID, r = t.EventResult;
        }, function(t) {
            u = t.UIGBase;
        } ],
        execute: function() {
            var h;
            s._RF.push({}, "46696DoxSBF6LylSUMjF309", "MoneyUI", void 0);
            var l = i.ccclass;
            t("MoneyUI", l("MoneyUI")(h = function(t) {
                function s() {
                    for (var o, s = arguments.length, i = new Array(s), c = 0; c < s; c++) i[c] = arguments[c];
                    return o = t.call.apply(t, [ this ].concat(i)) || this, n(e(o), "_closeBtnNode", null), 
                    n(e(o), "_videoRecvBtn", null), n(e(o), "_source", ""), n(e(o), "_btnNode", null), 
                    n(e(o), "_btnVNode", null), n(e(o), "_showCnt", -1), o;
                }
                o(s, t);
                var i = s.prototype;
                return i.onLoad = function() {
                    t.prototype.onLoad.call(this), this._btnNode = rd.Utils.getNodeByName(this.node, "btnNode"), 
                    this._btnVNode = rd.Utils.getNodeByName(this.node, "btnV"), this._videoRecvBtn = rd.Utils.registerButtonEvent(this._btnNode, "videoRecvBtn", this._onVideoRecvButton, this), 
                    this._closeBtnNode = rd.Utils.registerButtonEvent(this.node, "closeBtn", this._onCloseButton, this), 
                    this.initAdData(), this.setOppoLookAdBtn(this.node), this.zIndex = c.UI_DIALOG_Z_INDEX.POPUP;
                }, i.show = function() {
                    this._source = (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : "", 
                    this.interactiveLocation(this._btnNode), this._showCnt++, rd.Option.getConfigByKey("oneKeyFishValue", 0) && this._showCnt % 2 == 0 && this.interactiveLocation(this._btnVNode), 
                    this.playScaleInAnim([ this.centerUI ], [ this._closeBtnNode, this._videoRecvBtn ]), 
                    this.setShowAdData(!0, d.INTERSTITIALAD_POSITION.POSITION_SECOND), t.prototype.show.call(this), 
                    rd.Ads.showCustomAdVBannerLEFT(rd.UI.getDialogByName(c.UI_DIALOG_NAME.SIGN_IN)), 
                    rd.Ads.showCustomAdVBannerRIGHT(rd.UI.getDialogByName(c.UI_DIALOG_NAME.SIGN_IN)), 
                    rd.Ads.showCustomAdBannerTop(rd.UI.getDialogByName(c.UI_DIALOG_NAME.SIGN_IN));
                }, i.hide = function() {
                    t.prototype.hide.call(this), rd.Ads.hideCustomAdVBannerLEFT(), rd.Ads.hideCustomAdVBannerRIGHT(), 
                    rd.Ads.hideCustomAdBannerTop();
                }, i.getUIName = function() {
                    return "免费钻石" + this._source;
                }, i._onVideoRecvButton = function() {
                    var t = this, o = {
                        curDialog: this.getUIName(),
                        btnType: "视频广告",
                        gameMoney: g.App.Account.gameMoney
                    };
                    rd.Stats.customEvent(a.custom_button_click, o, r.onStarted), this.showRewardAd({
                        success: function() {
                            t._closeDialog(), rd.Event.emit(c.EVENT_TYPE.MONEY_FLY_ANIM, c.VIDEO_RECV_MONEY_COUNT), 
                            rd.Stats.customEvent(a.custom_button_click, o);
                        },
                        fail: function() {
                            rd.Stats.customEvent(a.custom_button_click, o, r.onFailed);
                        }
                    });
                }, i._closeDialog = function() {
                    this.playScaleOutAnim([ this.centerUI ], function() {
                        rd.UI.hideDialog(c.UI_DIALOG_NAME.MONEY);
                    });
                }, i._onCloseButton = function() {
                    rd.UI.isUIAnimPlaying() || (this._closeDialog(), rd.Stats.customEvent(a.custom_button_click, {
                        curDialog: this.getUIName(),
                        btnType: "关闭"
                    }));
                }, s;
            }(u)) || h);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ZombieBoss.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Zombie.ts" ], function(e) {
    "use strict";
    var s, o, t, i, n;
    return {
        setters: [ function(e) {
            s = e.inheritsLoose, o = e.createClass;
        }, function(e) {
            t = e.cclegacy, i = e._decorator;
        }, function(e) {
            n = e.Zombie;
        } ],
        execute: function() {
            var r;
            t._RF.push({}, "4b8f2XLmjxK8LoKHSHFlole", "ZombieBoss", void 0);
            var c = i.ccclass;
            e("ZombieBoss", c("ZombieBoss")(r = function(e) {
                function t() {
                    return e.apply(this, arguments) || this;
                }
                return s(t, e), o(t, [ {
                    key: "isBoss",
                    get: function() {
                        return !0;
                    }
                } ]), t;
            }(n)) || r);
            t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/AdBase.ts", [ "cc" ], function() {
    "use strict";
    var t;
    return {
        setters: [ function(e) {
            t = e.cclegacy;
        } ],
        execute: function() {
            t._RF.push({}, "4be6ar36LNKtZplvGqutugP", "AdBase", void 0), t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/CustomAdBase.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts" ], function(n) {
    "use strict";
    var t, i, o, s, e;
    return {
        setters: [ function(n) {
            t = n.createClass, i = n.defineProperty;
        }, function(n) {
            o = n.cclegacy;
        }, function(n) {
            s = n.Log;
        }, function(n) {
            e = n.ConstantCommon;
        } ],
        execute: function() {
            o._RF.push({}, "4c891bPZ3JAd6iDs4DR8Muv", "CustomAdBase", void 0);
            var a = e.POSITION_TYPE;
            n("CustomAdBase", function() {
                function n(n) {
                    i(this, "_platName", void 0), i(this, "_config", void 0), i(this, "_adInstance", void 0), 
                    i(this, "_parentNode", void 0), i(this, "_isShow", !1), i(this, "_positionType", 0), 
                    this._config = n;
                }
                var o = n.prototype;
                return o.setConfig = function(n) {
                    this._config = n;
                }, o.create = function(n) {
                    var t, i, o, c, d, u, r, l, h = this;
                    window[this._platName] && window[this._platName].createCustomAd && (this._adInstance && this.destroy(), 
                    this._adInstance = window[this._platName].createCustomAd({
                        adUnitId: "",
                        posId: this._config.adUnitId,
                        adIntervals: 30 | this._config.adIntervals,
                        style: this._config.style
                    }), s.debug(this.constructor.name, "创建  原生模板广告：", this._config, !!this._adInstance), 
                    null === (t = this._adInstance) || void 0 === t || null === (i = t.onLoad) || void 0 === i || i.call(t, function() {
                        var t;
                        s.debug(h.constructor.name, "加载原生" + (h.positionType === a.CENTER ? "插屏" : "banner") + " 模板广告成功", h._config.adUnitId), 
                        null === (t = n) || void 0 === t || t.success(), n = null;
                    }), s.debug(this.constructor.name, "onClose"), null === (o = this._adInstance) || void 0 === o || null === (c = o.onClose) || void 0 === c || c.call(o, function() {
                        var n;
                        (s.debug(h.constructor.name, "关闭原生" + (h.positionType === a.CENTER ? "插屏" : "banner") + " 模板广告", h._config.adUnitId), 
                        h._positionType === a.CENTER) && (rd.Event.emit(e.EVENT_TYPE.GAME_CONTINUE, !1), 
                        null === (n = rd.PushCtrl) || void 0 === n || n.showBgMask(!1));
                        h.destroy(), h._isShow = !1;
                    }), s.debug(this.constructor.name, "onError"), null === (d = this._adInstance) || void 0 === d || null === (u = d.onError) || void 0 === u || u.call(d, function(t) {
                        var i;
                        s.debug(h.constructor.name, "原生模板广告错误", h._config.adUnitId, t), h._adInstance = null, 
                        null === (i = n) || void 0 === i || i.fail(), n = null;
                    }), s.debug(this.constructor.name, "onHide"), null === (r = this._adInstance) || void 0 === r || null === (l = r.onHide) || void 0 === l || l.call(r, function() {
                        s.debug(h.constructor.name, "原生模板广告隐藏", h._config.adUnitId), h._isShow = !1;
                    }));
                }, o.load = function() {
                    throw new Error("Method not implemented.");
                }, o.show = function(n) {
                    var t = this;
                    s.debug(this.constructor.name, "调用原生" + (this.positionType === a.CENTER ? "插屏" : "banner") + " 模板广告", this._config.adUnitId), 
                    this.create({
                        success: function() {
                            var i;
                            null === (i = t._adInstance) || void 0 === i || i.show().then(function() {
                                var i;
                                (t._isShow = !0, s.debug(t.constructor.name, "原生模板广告显示", t._config.adUnitId), t._positionType === a.BOTTOM && rd.Event.emit("menuUp"), 
                                t._positionType === a.CENTER) && (rd.Event.emit(e.EVENT_TYPE.GAME_CONTINUE, !0), 
                                null === (i = rd.PushCtrl) || void 0 === i || i.showBgMask(!0));
                                null == n || n.success();
                            }).catch(function(i) {
                                s.debug(t.constructor.name, "显示错误", t._config.adUnitId, i), null == n || n.fail();
                            });
                        },
                        fail: function() {
                            s.debug(t.constructor.name, "显示加载错误", t._config.adUnitId), null == n || n.fail();
                        }
                    });
                }, o.hide = function() {
                    var n, t;
                    s.debug(this.constructor.name, "隐藏原生" + (this.positionType === a.CENTER ? "插屏" : "banner") + " 模板广告", this._config.adUnitId), 
                    null === (n = this._adInstance) || void 0 === n || null === (t = n.hide) || void 0 === t || t.call(n), 
                    this._isShow = !1;
                }, o.destroy = function() {
                    var n, t;
                    null === (n = this._adInstance) || void 0 === n || null === (t = n.destroy) || void 0 === t || t.call(n), 
                    this._adInstance = null;
                }, t(n, [ {
                    key: "positionType",
                    get: function() {
                        return this._positionType;
                    },
                    set: function(n) {
                        this._positionType = n;
                    }
                }, {
                    key: "isShow",
                    get: function() {
                        return this._isShow;
                    },
                    set: function(n) {
                        this._isShow = n;
                    }
                }, {
                    key: "parentNode",
                    get: function() {
                        return this._parentNode;
                    },
                    set: function(n) {
                        this._parentNode = n;
                    }
                } ]), n;
            }());
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/NavLine.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var e, s, i, n, a, o, r, l, c, h, u;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, s = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            n = t.cclegacy, a = t._decorator, o = t.v3, r = t.v4, l = t.MeshRenderer, c = t.Vec3, 
            h = t.math, u = t.Component;
        } ],
        execute: function() {
            var _;
            n._RF.push({}, "4c90fL8iDlFbJLsece6zW42", "NavLine", void 0);
            var d = a.ccclass, f = o(), v = r();
            t("NavLine", d("NavLine")(_ = function(t) {
                function n() {
                    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(a)) || this, s(i(e), "_mtlPass", null), 
                    s(i(e), "_offsetHandle", 0), s(i(e), "_lineDensity", 0), s(i(e), "_curTime", 0), 
                    s(i(e), "_targetPos", o()), s(i(e), "_lastPos", o()), e;
                }
                e(n, t);
                var a = n.prototype;
                return a.onLoad = function() {
                    var t = this.node.getChildByName("model");
                    this._lineDensity = 1 / t.scale.y;
                    var e = t.getComponent(l).material;
                    this._mtlPass = e.passes[0], this._offsetHandle = this._mtlPass.getHandle("tilingOffset");
                }, a.init = function(t) {
                    this._curTime = 0, this._targetPos.set(t), this._updateNavLine(!0);
                }, a._updateNavLine = function(t) {
                    if (void 0 === t && (t = !1), t || !this._lastPos.equals(this.node.worldPosition)) {
                        this._lastPos.set(this.node.worldPosition);
                        var e = c.distance(this._targetPos, this._lastPos);
                        c.subtract(f, this._targetPos, this._lastPos).normalize(), this.node.setWorldRotationFromEuler(0, h.toDegree(Math.atan2(-f.z, f.x)), 0), 
                        this.node.setScale(e, 1, 1), this._mtlPass.setUniform(this._offsetHandle, v.set(1, e * this._lineDensity));
                    }
                }, a.update = function(t) {
                    this._curTime += t, this._curTime >= .016 && (this._curTime = 0, this._updateNavLine());
                }, n;
            }(u)) || _);
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/WeaponUI.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts", "./RDStatisticsManager.ts", "./UIGBase.ts", "./WeaponItem.ts" ], function(e) {
    "use strict";
    var t, n, o, s, a, i, r, l, _, d, c, h;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, n = e.defineProperty, o = e.assertThisInitialized;
        }, function(e) {
            s = e.cclegacy, a = e._decorator, i = e.ToggleContainer, r = e.Toggle;
        }, function(e) {
            l = e.Constants;
        }, function(e) {
            _ = e.ConstantCommon;
        }, function(e) {
            d = e.CustomEventID;
        }, function(e) {
            c = e.UIGBase;
        }, function(e) {
            h = e.WeaponItem;
        } ],
        execute: function() {
            var u;
            s._RF.push({}, "4db3fAv6FlMIaVGirJystoU", "WeaponUI", void 0);
            var I, E = a.ccclass;
            !function(e) {
                e.SAW = "sawTog", e.GUN = "gunTog";
            }(I || (I = {}));
            e("WeaponUI", E("WeaponUI")(u = function(e) {
                function s() {
                    for (var t, s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];
                    return t = e.call.apply(e, [ this ].concat(a)) || this, n(o(t), "_sawToggle", null), 
                    n(o(t), "_weaponPanel", null), n(o(t), "_weaponItem", null), n(o(t), "_closeBtnNode", null), 
                    n(o(t), "_curToggle", null), t;
                }
                t(s, e);
                var a = s.prototype;
                return a.onLoad = function() {
                    var e = rd.Utils.getNodeComponent(this.node, "toggleGroup", i);
                    e.checkEvents.push(rd.Utils.getEventHandler(this, "_onWeaponToggle")), this._sawToggle = rd.Utils.getNodeComponent(e.node, "sawTog", r), 
                    this._weaponPanel = rd.Utils.getNodeByName(this.node, "weaponPanel"), this._weaponItem = rd.Utils.getNodeByName(this._weaponPanel, "weaponItem"), 
                    this._closeBtnNode = rd.Utils.registerButtonEvent(this.node, "closeBtn", this._onCloseButton, this), 
                    this._recycleWeaponItem(), this.initAdData(), this.setOppoLookAdBtn(this.node), 
                    this.zIndex = l.UI_DIALOG_Z_INDEX.CENTER;
                }, a.show = function(t) {
                    this._sawToggle.isChecked ? this._onWeaponToggle(this._sawToggle) : this._sawToggle.setIsCheckedWithoutNotify(!0), 
                    this._registerEvent(!0), this.playFadeInAnim([ this._closeBtnNode ]), this.setShowAdData(!0, _.INTERSTITIALAD_POSITION.POSITION_SECOND), 
                    e.prototype.show.call(this), rd.Event.emit(l.EVENT_TYPE.UPDATE_CAMERA_ATTR, !0), 
                    rd.Event.emit(l.EVENT_TYPE.SET_PREVIEW_ATTR, !0, t), rd.Ads.showCustomAdVBannerLEFT(rd.UI.getDialogByName(l.UI_DIALOG_NAME.SIGN_IN)), 
                    rd.Ads.showCustomAdVBannerRIGHT(rd.UI.getDialogByName(l.UI_DIALOG_NAME.SIGN_IN)), 
                    rd.Ads.showCustomAdBannerTop(rd.UI.getDialogByName(l.UI_DIALOG_NAME.SIGN_IN));
                }, a.hide = function() {
                    this._curToggle = null, this._registerEvent(!1), e.prototype.hide.call(this), rd.Event.emit(l.EVENT_TYPE.UPDATE_CAMERA_ATTR), 
                    rd.Event.emit(l.EVENT_TYPE.SET_PREVIEW_ATTR), rd.Ads.hideCustomAdVBannerLEFT(), 
                    rd.Ads.hideCustomAdVBannerRIGHT(), rd.Ads.hideCustomAdBannerTop();
                }, a.getUIName = function() {
                    return l.UI_DIALOG_CHINESE_NAME.WEAPON;
                }, a._recycleWeaponItem = function() {
                    for (var e = this._weaponPanel.children, t = e.length - 1; t >= 0; t--) rd.Pool.putNode(e[t]);
                }, a._registerEvent = function(e) {
                    var t = e ? "on" : "off";
                    rd.Event[t](l.EVENT_TYPE.UPDATE_CAR_PANEL, this._updateWeaponPanel, this);
                }, a._updateWeaponPanel = function() {
                    switch (this._recycleWeaponItem(), this._curToggle.node.name) {
                      case I.SAW:
                        for (var e = 0; e < 2; e++) this._createWeaponItem(e, h.WEAPON_TYPE.SAW);
                        break;

                      case I.GUN:
                        for (var t = 0, n = g.App.GunData.level > 0 ? 2 : 1; t < n; t++) this._createWeaponItem(t, h.WEAPON_TYPE.GUN);
                    }
                }, a._onWeaponToggle = function(e) {
                    this._curToggle !== e && (this._curToggle = e, this._updateWeaponPanel());
                }, a._createWeaponItem = function(e, t) {
                    rd.Pool.getNode(this._weaponItem, this._weaponPanel).getComponent(h).init(e, t);
                }, a._onCloseButton = function() {
                    rd.UI.hideDialog(l.UI_DIALOG_NAME.WEAPON), rd.Stats.customEvent(d.custom_button_click, {
                        curDialog: this.getUIName(),
                        btnType: "关闭"
                    });
                }, s;
            }(c)) || u);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/GameScore.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./SingletonBase.ts" ], function(t) {
    "use strict";
    var e, n, i, o, a, r, s;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.createClass, i = t.defineProperty, o = t.assertThisInitialized;
        }, function(t) {
            a = t.cclegacy;
        }, function(t) {
            r = t.Constants;
        }, function(t) {
            s = t.SingletonBase;
        } ],
        execute: function() {
            a._RF.push({}, "4eb6cICFr5D77aqFxpRQdMj", "GameScore", void 0);
            var l = r.UNLOCK_MAP_PERCENT;
            t("GameScore", function(t) {
                function a() {
                    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(a)) || this, i(o(e), "_totalZombieCnt", 0), 
                    i(o(e), "_killZombieCnt", 0), e;
                }
                return e(a, t), a.prototype.init = function() {
                    this._totalZombieCnt = 1e3 * g.App.MapDataMgr.curMapLv, this._killZombieCnt = 0;
                }, n(a, [ {
                    key: "totalZombieCnt",
                    get: function() {
                        return this._totalZombieCnt;
                    },
                    set: function(t) {
                        this._totalZombieCnt = t;
                    }
                }, {
                    key: "killZombieCnt",
                    get: function() {
                        return this._killZombieCnt;
                    },
                    set: function(t) {
                        this._killZombieCnt = t, rd.Event.emit(r.EVENT_TYPE.UPDATE_SCORE);
                        var e = g.App.MapDataMgr.curMapLv + 1;
                        this._totalZombieCnt && !g.App.MapDataMgr.getLocalData(e).isUnlock && e <= g.App.MapDataMgr.maxLv && this._killZombieCnt / this._totalZombieCnt >= l && (g.App.MapDataMgr.unlockMap(e), 
                        rd.Event.emit(r.EVENT_TYPE.SHOW_TUTORIAL_GUIDE, r.TUTORIAL_STEP_TYPE.WORLD));
                    }
                } ]), a;
            }(s));
            a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/Benchmark.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./cleanRenderer.ts", "./deviceInfo.ts", "./getLevenshteinDistance.ts", "./getGPUVersion.ts", "./error.ts", "./deobfuscateAppleGPU.ts" ], function(e) {
    "use strict";
    var n, r, t, i, o, u, a, c, s, l;
    return {
        setters: [ function(e) {
            n = e.asyncToGenerator, r = e.createForOfIteratorHelperLoose;
        }, function(e) {
            t = e.cclegacy, i = e.director;
        }, function(e) {
            o = e.cleanRenderer;
        }, function(e) {
            u = e.deviceInfo;
        }, function(e) {
            a = e.getLevenshteinDistance;
        }, function(e) {
            c = e.getGPUVersion;
        }, function(e) {
            s = e.OutdatedBenchmarksError;
        }, function(e) {
            l = e.deobfuscateAppleGPU;
        } ],
        execute: function() {
            t._RF.push({}, "52d58ypTzhDX57r0yYh7uob", "Benchmark", void 0);
            var d = e("isSSR", "undefined" == typeof window);
            e("getGPUTier", function() {
                var e = n(function*(e) {
                    var t = void 0 === e ? {} : e, f = t.mobileTiers, v = void 0 === f ? [ 18, 25, 40, 55, 75 ] : f, p = t.desktopTiers, h = void 0 === p ? [ 20, 40, 45, 50, 60 ] : p, m = t.override, g = void 0 === m ? {} : m, b = t.benchmarksURL, y = void 0 === b ? "https://unpkg.com/detect-gpu@4.0.25/dist/benchmarks" : b;
                    if (!d) {
                        var k, w = {}, P = g.isIpad, U = void 0 === P ? !!(null == u ? void 0 : u.isIpad) : P, _ = g.isMobile, A = void 0 === _ ? !!(null == u ? void 0 : u.isMobile) : _, G = g.screenSize, L = void 0 === G ? window.screen : G, M = g.loadBenchmarks, R = void 0 === M ? function() {
                            var e = n(function*(e) {
                                var r = null;
                                if (yield rd.Asset.loadJsonAsset("GPUBenchmarks/" + e.slice(0, -5)).then(function(e) {
                                    r = e.json;
                                }).catch(n(function*() {
                                    r = yield fetch(y + "/" + e).then(function(e) {
                                        return e.json();
                                    });
                                })), parseInt(r.shift().split(".")[0], 10) < 4) throw new s("Detect GPU benchmark data is out of date. Please update to version 4x");
                                return r;
                            });
                            return function(n) {
                                return e.apply(this, arguments);
                            };
                        }() : M, B = g.renderer, I = function() {
                            var e = n(function*(e) {
                                var n, t = function(e) {
                                    for (var n = 0, r = A ? [ "adreno", "apple", "mali-t", "mali", "nvidia", "powervr" ] : [ "intel", "apple", "amd", "radeon", "nvidia", "geforce" ]; n < r.length; n++) {
                                        var t = r[n];
                                        if (e.includes(t)) return t;
                                    }
                                }(e);
                                if (t) {
                                    var i, o = (A ? "m" : "d") + "-" + t + (U ? "-ipad" : "") + ".json", u = w[o] = null !== (n = w[o]) && void 0 !== n ? n : R(o);
                                    try {
                                        i = yield u;
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        if (e instanceof s) throw e;
                                        return null;
                                    }
                                    var l = c(e), d = i.filter(function(e) {
                                        return e[1] === l;
                                    });
                                    d.length || (d = i.filter(function(n) {
                                        return n[0].includes(e);
                                    }));
                                    var f = d.length;
                                    if (0 === f) return null;
                                    for (var v, p, h = f > 1 ? d.map(function(n) {
                                        return [ n, a(e, n[0]) ];
                                    }).sort(function(e, n) {
                                        return e[1] - n[1];
                                    })[0][0] : d[0], m = h[0], g = h[3], b = Number.MAX_VALUE, y = window.devicePixelRatio, k = L.width * y * L.height * y, P = r(g); !(p = P()).done; ) {
                                        var _ = p.value, G = _[0] * _[1], M = Math.abs(k - G);
                                        M < b && (b = M, v = _);
                                    }
                                    if (v) {
                                        var B = v;
                                        return [ b, B[2], m, B[3] ];
                                    }
                                }
                            });
                            return function(n) {
                                return e.apply(this, arguments);
                            };
                        }(), D = function(e, n, r, t) {
                            return {
                                device: t,
                                fps: r,
                                gpu: n,
                                isMobile: A,
                                tier: e
                            };
                        }, S = "";
                        if (B) k = [ B = o(B) ]; else {
                            var T = i.root.pipeline.pipelineSceneData;
                            if (!(B = T._device._renderer)) return null;
                            if (S = B, "apple gpu" == (B = o(B))) {
                                var V = T._device._context;
                                k = l(V, B, A);
                            } else k = [ B ];
                        }
                        var j = (yield Promise.all(k.map(I))).filter(function(e) {
                            return null != e;
                        }).sort(function(e, n) {
                            var r = e[0], t = void 0 === r ? Number.MAX_VALUE : r, i = e[1], o = n[0], u = void 0 === o ? Number.MAX_VALUE : o, a = n[1];
                            return t === u ? i - a : t - u;
                        });
                        if (!j.length) return D(null, B + " (" + S + ")");
                        var x = j[0], E = x[1], X = x[2], F = x[3];
                        if (-1 === E) return null;
                        for (var N = A ? v : h, z = 0, H = 0; H < N.length; H++) E >= N[H] && (z = H);
                        return D(z, X, E, F);
                    }
                });
                return function(n) {
                    return e.apply(this, arguments);
                };
            }());
            t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/constant-user.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var e, a;
    return {
        setters: [ function(t) {
            e = t.defineProperty;
        }, function(t) {
            a = t.cclegacy;
        } ],
        execute: function() {
            a._RF.push({}, "546c1JR3XpIhYqDVQ9ShRKw", "constant-user", void 0);
            var n = function() {};
            e(n, "MUSIC", "music"), e(n, "SOUND", "sound"), e(n, "STAGE", "stage"), e(n, "MONEY", "money"), 
            e(n, "SIGN_IN", "signIn"), e(n, "TURNTABLE", "turntable"), e(n, "ACHIEVEMENT", "achievement"), 
            e(n, "SETTING", "setting"), e(n, "FIRST_GAME", "firstGame"), e(n, "LOGIN_DAYS", "loginDays"), 
            e(n, "FIRST_ENTER_GAME", "firstEnterGame"), e(n, "FREE_MONEY", "freeMoney"), e(n, "SHOW_MOVE_TUTORIAL", "showMoveTutorial"), 
            e(n, "TUTORIAL_STEP", "tutorialStep"), e(n, "BACK_CITY_DATA", "backCityData"), e(n, "VEHICLE_DATA", "vehicleData"), 
            e(n, "FUEL_DATA", "fuelData"), e(n, "SAW_DATA", "sawData"), e(n, "GUN_DATA", "gunData"), 
            e(n, "ROCKET_DATA", "rocketData"), e(n, "MAP_DATA", "mapData"), e(n, "CURRENT_MAP_LV", "currentMapLevel");
            t("ACCOUNT", n);
            a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/IntertitalAdBase.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts" ], function(n) {
    "use strict";
    var t, i, o, s, e;
    return {
        setters: [ function(n) {
            t = n.createClass, i = n.defineProperty;
        }, function(n) {
            o = n.cclegacy;
        }, function(n) {
            s = n.Log;
        }, function(n) {
            e = n.ConstantCommon;
        } ],
        execute: function() {
            o._RF.push({}, "5636fW2XIxBZ7rXzr8BXEJE", "IntertitalAdBase", void 0);
            n("IntertitalAdBase", function() {
                function n(n) {
                    i(this, "_platName", void 0), i(this, "_config", void 0), i(this, "_adInstance", null), 
                    i(this, "_isShow", !1), this._config = n;
                }
                var o = n.prototype;
                return o.create = function(n) {
                    var t, i, o, a, l, c, u, d = this;
                    this._adInstance = null === (t = window[this._platName]) || void 0 === t ? void 0 : t.createInterstitialAd({
                        adUnitId: "adunit-6610afa34f8f7843"
                    }), s.debug(this.constructor.name, "创建 系统插屏"), null === (i = this._adInstance) || void 0 === i || null === (o = i.onLoad) || void 0 === o || o.call(i, function() {
                        var n;
                        s.debug(d.constructor.name, "系统插屏 加载成功"), null === (n = d._adInstance) || void 0 === n || n.show(), 
                        d.isShow = !0, rd.Event.emit(e.EVENT_TYPE.ADS_INTERSTITIALAD, "success");
                    }), null === (a = this._adInstance) || void 0 === a || null === (l = a.onError) || void 0 === l || l.call(a, function(n) {
                        s.debug(d.constructor.name, "系统插屏 错误", JSON.stringify(n)), d.isShow = !1;
                    }), null === (c = this._adInstance) || void 0 === c || null === (u = c.onClose) || void 0 === u || u.call(c, function() {
                        rd.Event.emit(e.EVENT_TYPE.ADS_INTERSTITIALAD, "fail"), s.debug(d.constructor.name, "系统插屏 关闭"), 
                        d.isShow = !1;
                    });
                }, o.load = function() {
                    var n, t;
                    null === (n = this._adInstance) || void 0 === n || null === (t = n.load) || void 0 === t || t.call(n);
                }, o.show = function(n) {
                    this.load();
                }, o.hide = function() {}, o.destroy = function() {
                    var n, t;
                    null === (n = this._adInstance) || void 0 === n || null === (t = n.destroy) || void 0 === t || t.call(n), 
                    this._adInstance = null;
                }, t(n, [ {
                    key: "isShow",
                    get: function() {
                        return this._isShow;
                    },
                    set: function(n) {
                        this._isShow = n;
                    }
                } ]), n;
            }());
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/StackMoney.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts" ], function(t) {
    "use strict";
    var o, e, i, s, n, r, c, a, u;
    return {
        setters: [ function(t) {
            o = t.inheritsLoose, e = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy, n = t._decorator, r = t.v3, c = t.Vec3, a = t.Component;
        }, function(t) {
            u = t.Constants;
        } ],
        execute: function() {
            var l;
            s._RF.push({}, "580f9kC2HBFToHrnmZcZvnK", "StackMoney", void 0);
            var _ = n.ccclass, d = r();
            t("StackMoney", _("StackMoney")(l = function(t) {
                function s() {
                    for (var o, s = arguments.length, n = new Array(s), c = 0; c < s; c++) n[c] = arguments[c];
                    return o = t.call.apply(t, [ this ].concat(n)) || this, e(i(o), "_targetPos", null), 
                    e(i(o), "_startSpd", r()), e(i(o), "_curTime", 1), o;
                }
                o(s, t);
                var n = s.prototype;
                return n.playProjectileAnim = function(t) {
                    this._targetPos = t.worldPosition;
                    var o = this.node.worldPosition;
                    this._startSpd.x = (this._targetPos.x - o.x) / 1, this._startSpd.z = (this._targetPos.z - o.z) / 1, 
                    this._startSpd.y = 15, this._curTime = 0, rd.Audio.playSound(u.AUDIO_SOURCE_TYPE.COLLECT_MONEY);
                }, n._updateProjectilePos = function(t) {
                    this._curTime >= 1 || (this._curTime += t, this._startSpd.y += -30 * t, d.set(this._startSpd), 
                    d.multiplyScalar(t), c.add(d, this.node.worldPosition, d), this.node.setWorldPosition(d), 
                    this._collectMoney());
                }, n._collectMoney = function() {
                    this._curTime < 1 || (rd.Pool.putNode(this.node), rd.Event.emit(u.EVENT_TYPE.PLAY_MONEY_IN_BANK, this._targetPos));
                }, n.update = function(t) {
                    this._updateProjectilePos(t);
                }, n.onDisable = function() {
                    this.node.setScale(1, 1, 1);
                }, s;
            }(a)) || l);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/Joystick.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var i, e, o, n, s, r, c, h, u, l, a, _, d, p;
    return {
        setters: [ function(t) {
            i = t.applyDecoratedDescriptor, e = t.inheritsLoose, o = t.initializerDefineProperty, 
            n = t.assertThisInitialized, s = t.defineProperty;
        }, function(t) {
            r = t.cclegacy, c = t._decorator, h = t.v3, u = t.Enum, l = t.UITransform, a = t.input, 
            _ = t.Input, d = t.Node, p = t.Component;
        } ],
        execute: function() {
            var y, v, T, b, g, f, E;
            r._RF.push({}, "593d6DQb+ROs62M63XFvy86", "Joystick", void 0);
            var N, D = c.ccclass, O = c.property, I = h();
            !function(t) {
                t[t.FOLLOW = 0] = "FOLLOW", t[t.FIXED = 1] = "FIXED";
            }(N || (N = {}));
            t("Joystick", (y = D("Joystick"), v = O({
                displayName: "Visible"
            }), T = O({
                type: u(N),
                displayName: "Type"
            }), y((f = i((g = function(t) {
                function i() {
                    for (var i, e = arguments.length, r = new Array(e), c = 0; c < e; c++) r[c] = arguments[c];
                    return i = t.call.apply(t, [ this ].concat(r)) || this, o(n(i), "isVisible", f, n(i)), 
                    o(n(i), "stickType", E, n(i)), s(n(i), "_bgNode", null), s(n(i), "_centerNode", null), 
                    s(n(i), "_radius", 0), s(n(i), "_touchID", null), i;
                }
                e(i, t);
                var r = i.prototype;
                return r.onLoad = function() {
                    this._bgNode = this.node.children[0], this._bgNode ? (this._centerNode = this._bgNode.children[0], 
                    this._radius = .5 * this._bgNode.getComponent(l).width, this._bgNode.active = this.isVisible && this.stickType === N.FIXED, 
                    this._registerEvent(!0)) : console.error("joystick bgNode is null!");
                }, r._registerEvent = function(t) {
                    var i = t ? "on" : "off";
                    a[i](_.EventType.TOUCH_START, this._onTouchStart, this), a[i](_.EventType.TOUCH_MOVE, this._onTouchMove, this), 
                    a[i](_.EventType.TOUCH_END, this._onTouchEnd, this), a[i](_.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
                }, r._onTouchStart = function(t) {
                    if (null === this._touchID) {
                        this._touchID = t.getID();
                        var i = t.getUILocation();
                        this.stickType === N.FOLLOW && (this._bgNode.setWorldPosition(i.x, i.y, 0), this.isVisible && (this._bgNode.active = !0, 
                        this._centerNode.setPosition(0, 0, 0)));
                    }
                }, r._onTouchMove = function(t) {
                    if (this._touchID === t.getID()) {
                        var i = t.getUILocation();
                        I.set(i.x, i.y);
                        var e = I.subtract(this._bgNode.worldPosition);
                        if (this.isVisible) {
                            var o = this._radius < e.length() ? e.normalize().multiplyScalar(this._radius) : e;
                            this._centerNode.setPosition(o);
                        }
                        rd.Event.emit(d.EventType.TOUCH_MOVE, e.normalize());
                    }
                }, r._onTouchEnd = function(t) {
                    this._touchID === t.getID() && (this._touchID = null, rd.Event.emit(d.EventType.TOUCH_END), 
                    this.isVisible && (this._centerNode.setPosition(0, 0, 0), this.stickType === N.FOLLOW && (this._bgNode.active = !1)));
                }, r.onDestroy = function() {
                    this._registerEvent(!1);
                }, i;
            }(p)).prototype, "isVisible", [ v ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), E = i(g.prototype, "stickType", [ T ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return N.FOLLOW;
                }
            }), b = g)) || b));
            r._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/WordTipsUI.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./UIGBase.ts" ], function(t) {
    "use strict";
    var n, o, i, e, r, s, a, c, p;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, o = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            e = t.cclegacy, r = t._decorator, s = t.Sprite, a = t.Animation;
        }, function(t) {
            c = t.Constants;
        }, function(t) {
            p = t.UIGBase;
        } ],
        execute: function() {
            var d;
            e._RF.push({}, "5afdcSYT8BAeYfRVxPB0oHa", "WordTipsUI", void 0);
            var _ = r.ccclass, u = c.WORD_TIPS_TYPE;
            t("WordTipsUI", _("WordTipsUI")(d = function(t) {
                function e() {
                    for (var n, e = arguments.length, r = new Array(e), s = 0; s < e; s++) r[s] = arguments[s];
                    return n = t.call.apply(t, [ this ].concat(r)) || this, o(i(n), "_wordSpt", null), 
                    o(i(n), "_wordAnim", null), n;
                }
                n(e, t);
                var r = e.prototype;
                return r.onLoad = function() {
                    this._wordSpt = rd.Utils.getNodeComponent(this.node, "word", s), this._wordAnim = this._wordSpt.getComponent(a), 
                    this.zIndex = c.UI_DIALOG_Z_INDEX.PROMPT;
                }, r.show = function(t) {
                    var n = "";
                    switch (t) {
                      case u.STORAGE_BANK:
                        n = "Tips_Image_StorageBank";
                        break;

                      case u.UNLOCK_MAP:
                        n = "Tips_Image_UnlockMap";
                    }
                    this._wordSpt.spriteFrame = rd.SptFrame.getSpriteFrameByName(n), this._playWordAnim();
                }, r._playWordAnim = function() {
                    this._wordAnim.play(), this._wordAnim.once(a.EventType.FINISHED, function() {
                        rd.UI.hideDialog(c.UI_DIALOG_NAME.WORD_TIPS);
                    });
                }, e;
            }(p)) || d);
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/GarageItem.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./WarCarItem.ts" ], function(e) {
    "use strict";
    var t, a, r, i, n, p;
    return {
        setters: [ function(e) {
            t = e.defineProperty, a = e.inheritsLoose;
        }, function(e) {
            r = e.cclegacy, i = e._decorator;
        }, function(e) {
            n = e.Constants;
        }, function(e) {
            p = e.WarCarItem;
        } ],
        execute: function() {
            var c, s, o;
            r._RF.push({}, "5c727TAlzxLlZMQ1Evyt5mu", "GarageItem", void 0);
            var l, u = i.ccclass;
            !function(e) {
                e[e.VEHICLE = 0] = "VEHICLE", e[e.FUEL = 1] = "FUEL";
            }(l || (l = {}));
            e("GarageItem", u("GarageItem")((o = s = function(e) {
                function t() {
                    return e.apply(this, arguments) || this;
                }
                a(t, e);
                var r = t.prototype;
                return r.init = function(t) {
                    e.prototype.init.call(this, t), this.updateWarCarItem(), 0 !== t && (this.frameSpt.spriteFrame = rd.SptFrame.getSpriteFrameByName("Garage_Image_Frame2"), 
                    this.iconSpt.spriteFrame = rd.SptFrame.getSpriteFrameByName("Garage_Image_VehicleIcon2"));
                }, r.updateWarCarItem = function() {
                    var e = this.itemIdx;
                    this.levelNode.active = !0, this.levelLbl.string = (0 === e ? g.App.VehicleData.level : g.App.VehicleData.speedLv).toString();
                    var t = 0 === e ? g.App.VehicleData.nextLvAmt : g.App.VehicleData.nextSpdAmt, a = 0 === e ? g.App.VehicleData.isMaxLv : g.App.VehicleData.isMaxSpdLv;
                    this.updateUnlockBtn(t, a);
                }, r.getUIName = function() {
                    return n.UI_DIALOG_CHINESE_NAME.GARAGE;
                }, r.upgradeWarCar = function() {
                    0 === this.itemIdx ? g.App.VehicleData.upgradeLevel() : g.App.VehicleData.upgradeSpeed(), 
                    rd.Event.emit(n.EVENT_TYPE.UPDATE_CAR_ITEM);
                }, r.onUnlockButton = function() {
                    var e = 0 === this.itemIdx ? g.App.VehicleData.nextLvAmt : g.App.VehicleData.nextSpdAmt;
                    this.unlockWarCar(e);
                }, t;
            }(p), t(s, "GARAGE_TYPE", l), c = o)) || c);
            r._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/Log.ts", [ "cc" ], function(t) {
    "use strict";
    var n;
    return {
        setters: [ function(t) {
            n = t.cclegacy;
        } ],
        execute: function() {
            n._RF.push({}, "5c7adO5hChD5IgKJZfGLmWx", "Log", void 0);
            t("Log", function() {
                function t() {}
                return t.log = function() {
                    for (var n = arguments.length, r = new Array(n), e = 0; e < n; e++) r[e] = arguments[e];
                    t.debug.apply(t, [ "Default" ].concat(r));
                }, t.debug = function(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) r[e - 1] = arguments[e];
                }, t.warn = function(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) r[e - 1] = arguments[e];
                }, t.error = function(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) r[e - 1] = arguments[e];
                }, t.getDateString = function() {
                    var t = new Date(), n = t.getHours().toString(), r = "";
                    return r += (1 == n.length ? "0" + n : n) + ":", r += (1 == (n = t.getMinutes().toString()).length ? "0" + n : n) + ":", 
                    r += (1 == (n = t.getSeconds().toString()).length ? "0" + n : n) + ":", 1 == (n = t.getMilliseconds().toString()).length && (n = "00" + n), 
                    2 == n.length && (n = "0" + n), r += n, r = "[" + (r += "=>" + t.getTime()) + "]";
                }, t.stack = function(t) {
                    void 0 === t && (t = 2);
                    var n = new Error().stack.split("\n");
                    n.shift();
                    var r = [];
                    n.forEach(function(t) {
                        var n, e = (t = t.substring(7)).split(" ");
                        e.length < 2 ? r.push(e[0]) : r.push(((n = {})[e[0]] = e[1], n));
                    });
                    var e = [];
                    if (t < r.length - 1) for (var o in r[t]) e.push(o);
                    var i = e[0].split(".");
                    return i[0] + ".js->" + i[1] + ":";
                }, t;
            }());
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ListView.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ListViewItem.ts" ], function(t) {
    "use strict";
    var e, i, o, n, s, a, l, r, _, c, h, d, p, u, m, g, f, v, y, S, T, I, C, z;
    return {
        setters: [ function(t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, o = t.initializerDefineProperty, 
            n = t.assertThisInitialized, s = t.defineProperty, a = t.createClass;
        }, function(t) {
            l = t.cclegacy, r = t._decorator, _ = t.ScrollView, c = t.Enum, h = t.Node, d = t.Prefab, 
            p = t.EventHandler, u = t.isValid, m = t.Layout, g = t.instantiate, f = t.v3, v = t.UITransform, 
            y = t.Widget, S = t.v2, T = t.tween, I = t.Event, C = t.Component;
        }, function(t) {
            z = t.ListViewItem;
        } ],
        execute: function() {
            var w, D, b, E, L, P, G, O, R, N, A, k, B, V, M, x, H, U, F, X, Y, Z, W, j, q, J, K, Q, $, tt, et, it, ot, nt, st, at, lt, rt, _t, ct, ht;
            l._RF.push({}, "5d920DCOqBJkJ+rOkkRzcyb", "ListView", void 0);
            var dt, pt, ut, mt = r.ccclass, gt = r.property, ft = r.menu, vt = r.disallowMultiple, yt = r.requireComponent, St = r.executionOrder;
            !function(t) {
                t[t.NODE = 0] = "NODE", t[t.PREFAB = 1] = "PREFAB";
            }(dt || (dt = {})), function(t) {
                t[t.NORMAL = 0] = "NORMAL", t[t.ADHERING = 1] = "ADHERING", t[t.PAGE = 2] = "PAGE";
            }(pt || (pt = {})), function(t) {
                t[t.NONE = 0] = "NONE", t[t.SINGLE = 1] = "SINGLE", t[t.MULT = 2] = "MULT";
            }(ut || (ut = {}));
            t("ListView", (w = mt("ListView"), D = ft("Utils/ListView"), b = vt(), E = yt(_), 
            L = St(-5e3), P = gt({
                type: c(dt),
                displayOrder: 0,
                tooltip: "模板项类型"
            }), G = gt({
                type: h,
                visible: function() {
                    return this.templateType == dt.NODE;
                },
                displayOrder: 1,
                tooltip: "节点模板项"
            }), O = gt({
                type: d,
                visible: function() {
                    return this.templateType == dt.PREFAB;
                },
                displayOrder: 2,
                tooltip: "预制模板项"
            }), R = gt({
                type: c(pt),
                displayOrder: 3,
                tooltip: "列表滑动模式"
            }), N = gt({
                range: [ 0, 1, .1 ],
                slide: !0,
                visible: function() {
                    return this._slideMode === pt.PAGE;
                },
                displayOrder: 4,
                tooltip: "翻页距离"
            }), A = gt({
                type: p,
                visible: function() {
                    return this._slideMode === pt.PAGE;
                },
                displayOrder: 5,
                tooltip: "页面改变事件"
            }), k = gt({
                displayOrder: 6,
                tooltip: "是否为虚拟列表（动态列表）"
            }), B = gt({
                visible: function() {
                    var t = this.slideMode === pt.NORMAL;
                    return t || (this.cyclic = !1), t;
                },
                displayOrder: 7,
                tooltip: "是否为循环列表"
            }), V = gt({
                visible: function() {
                    return this.virtual;
                },
                displayOrder: 8,
                tooltip: "Item数量不足以填满Content时，是否居中显示Item（不支持Grid布局）"
            }), M = gt({
                visible: function() {
                    var t = this.virtual && !this.lackCenter;
                    return t || (this.lackSlide = !1), t;
                },
                displayOrder: 9,
                tooltip: "Item数量不足以填满Content时，是否可滑动"
            }), x = gt({
                range: [ 0, 6, 1 ],
                slide: !0,
                displayOrder: 10,
                tooltip: "刷新频率（值越大刷新频率越低、性能越高）"
            }), H = gt({
                range: [ 0, 12, 1 ],
                slide: !0,
                displayOrder: 11,
                tooltip: "逐帧渲染时，每帧渲染的Item数量（小于等于零时关闭逐帧渲染）"
            }), U = gt({
                type: p,
                displayOrder: 12,
                tooltip: "渲染事件（渲染器）"
            }), F = gt({
                type: c(ut),
                displayOrder: 13,
                tooltip: "选择类型"
            }), X = gt({
                visible: function() {
                    return this.selectedType === ut.SINGLE;
                },
                displayOrder: 14,
                tooltip: "是否重复响应单选事件"
            }), Y = gt({
                type: p,
                visible: function() {
                    return this.selectedType > ut.NONE;
                },
                displayOrder: 15,
                tooltip: "触发选择事件"
            }), Z = gt({
                serializable: !1
            }), w(W = D(W = b(W = E(W = L((q = e((j = function(t) {
                function e() {
                    for (var e, i = arguments.length, a = new Array(i), l = 0; l < i; l++) a[l] = arguments[l];
                    return e = t.call.apply(t, [ this ].concat(a)) || this, o(n(e), "templateType", q, n(e)), 
                    o(n(e), "nodeItem", J, n(e)), o(n(e), "prefabItem", K, n(e)), o(n(e), "_slideMode", Q, n(e)), 
                    o(n(e), "pageDistance", $, n(e)), o(n(e), "pageChangeEvt", tt, n(e)), o(n(e), "_virtual", et, n(e)), 
                    o(n(e), "cyclic", it, n(e)), o(n(e), "lackCenter", ot, n(e)), o(n(e), "lackSlide", nt, n(e)), 
                    o(n(e), "_updateRate", st, n(e)), o(n(e), "frameRenderCount", at, n(e)), o(n(e), "renderEvent", lt, n(e)), 
                    o(n(e), "selectedType", rt, n(e)), o(n(e), "repeatSingleEvent", _t, n(e)), o(n(e), "selectedEvent", ct, n(e)), 
                    s(n(e), "_forceUpdate", !1), s(n(e), "_align", void 0), s(n(e), "_horizontalDir", void 0), 
                    s(n(e), "_verticalDir", void 0), s(n(e), "_startAxis", void 0), s(n(e), "_alignCalcType", void 0), 
                    s(n(e), "_content", void 0), s(n(e), "_firstListId", void 0), s(n(e), "_displayItemCnt", void 0), 
                    s(n(e), "_updateDone", !0), s(n(e), "_updateCounter", void 0), s(n(e), "_actualItemCnt", 0), 
                    s(n(e), "_cyclicCnt", void 0), s(n(e), "_cyclicPos1", void 0), s(n(e), "_cyclicPos2", void 0), 
                    s(n(e), "_cyclicAllItemSize", void 0), s(n(e), "_cycilcAllItemSizeNoEdge", void 0), 
                    s(n(e), "_inited", !1), s(n(e), "_scrollView", void 0), s(n(e), "_layout", void 0), 
                    s(n(e), "_resizeMode", void 0), s(n(e), "_topGap", void 0), s(n(e), "_rightGap", void 0), 
                    s(n(e), "_bottomGap", void 0), s(n(e), "_leftGap", void 0), s(n(e), "_columnGap", void 0), 
                    s(n(e), "_lineGap", void 0), s(n(e), "_colLineNum", void 0), s(n(e), "_lastDisplayData", void 0), 
                    s(n(e), "_displayData", void 0), s(n(e), "_itemTmp", void 0), s(n(e), "_needUpdateWidget", !1), 
                    s(n(e), "_itemSize", void 0), s(n(e), "_sizeType", void 0), s(n(e), "_customSize", void 0), 
                    s(n(e), "_frameCount", void 0), s(n(e), "_aniDelRuning", !1), s(n(e), "_aniDelCB", void 0), 
                    s(n(e), "_aniDelItem", void 0), s(n(e), "_aniDelBeforePos", void 0), s(n(e), "_aniDelBeforeScale", void 0), 
                    s(n(e), "_viewTop", void 0), s(n(e), "_viewRight", void 0), s(n(e), "_viewBottom", void 0), 
                    s(n(e), "_viewLeft", void 0), s(n(e), "_doneAfterUpdate", !1), s(n(e), "_elasticTop", void 0), 
                    s(n(e), "_elasticRight", void 0), s(n(e), "_elasticBottom", void 0), s(n(e), "_elasticLeft", void 0), 
                    s(n(e), "_adhering", !1), s(n(e), "_adheringBarrier", !1), s(n(e), "_nearestListId", void 0), 
                    s(n(e), "_curPageNum", 0), s(n(e), "_beganPos", void 0), s(n(e), "_scrollPos", void 0), 
                    s(n(e), "curScrollIsTouch", void 0), s(n(e), "_scrollToListId", void 0), s(n(e), "_scrollToEndTime", void 0), 
                    s(n(e), "_scrollToSo", void 0), s(n(e), "_lack", void 0), s(n(e), "_allItemSize", void 0), 
                    s(n(e), "_allItemSizeNoEdge", void 0), s(n(e), "_scrollItem", void 0), o(n(e), "_itemCnt", ht, n(e)), 
                    s(n(e), "_curSelectedId", -1), s(n(e), "_lastSelectedId", -1), s(n(e), "_multSelected", []), 
                    e;
                }
                i(e, t);
                var l = e.prototype;
                return l.onLoad = function() {
                    this._init();
                }, l.onEnable = function() {
                    this._registerEvent(), this._init(), this._aniDelRuning && (this._aniDelRuning = !1, 
                    this._aniDelItem && (this._aniDelBeforePos && (this._aniDelItem.position = this._aniDelBeforePos, 
                    delete this._aniDelBeforePos), this._aniDelBeforeScale && (this._aniDelItem.scale = this._aniDelBeforeScale, 
                    delete this._aniDelBeforeScale), delete this._aniDelItem), this._aniDelCB && (this._aniDelCB(), 
                    delete this._aniDelCB));
                }, l.onDisable = function() {
                    this._unregisterEvent();
                }, l.onDestroy = function() {
                    var t, e, i = this;
                    u(i._itemTmp) && (null === (t = rd.Pool) || void 0 === t || t.putNode(i._itemTmp)), 
                    u(i.nodeItem) && (null === (e = rd.Pool) || void 0 === e || e.putNode(i.nodeItem));
                }, l.reset = function() {
                    this._customSize = null, this._resizeContent();
                }, l.resetListView = function() {
                    this._customSize = null, this._resizeContent();
                }, l._registerEvent = function() {
                    var t = this;
                    t.node.on(h.EventType.TOUCH_START, t._onTouchStart, t, !0), t.node.on(h.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0), 
                    t.node.on(h.EventType.SIZE_CHANGED, t._onSizeChanged, t), t.node.on(_.EventType.TOUCH_UP, t._onTouchUp, t), 
                    t.node.on(_.EventType.SCROLL_BEGAN, t._onScrollBegan, t, !0), t.node.on(_.EventType.SCROLLING, t._onScrolling, t), 
                    t.node.on(_.EventType.SCROLL_ENDED, t._onScrollEnded, t);
                }, l._unregisterEvent = function() {
                    var t = this;
                    t.node.off(h.EventType.TOUCH_START, t._onTouchStart, t, !0), t.node.off(h.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0), 
                    t.node.off(h.EventType.SIZE_CHANGED, t._onSizeChanged, t), t.node.off(_.EventType.TOUCH_UP, t._onTouchUp, t), 
                    t.node.off(_.EventType.SCROLL_BEGAN, t._onScrollBegan, t), t.node.off(_.EventType.SCROLLING, t._onScrolling, t), 
                    t.node.off(_.EventType.SCROLL_ENDED, t._onScrollEnded, t);
                }, l._init = function() {
                    var t = this;
                    if (!t._inited) if (t._scrollView = t.node.getComponent(_), t._content = t._scrollView.content, 
                    t._content) {
                        switch (t._layout = t._content.getComponent(m), t._align = t._layout.type, t._resizeMode = t._layout.resizeMode, 
                        t._startAxis = t._layout.startAxis, t._topGap = t._layout.paddingTop, t._rightGap = t._layout.paddingRight, 
                        t._bottomGap = t._layout.paddingBottom, t._leftGap = t._layout.paddingLeft, t._columnGap = t._layout.spacingX, 
                        t._lineGap = t._layout.spacingY, t._colLineNum, t._verticalDir = t._layout.verticalDirection, 
                        t._horizontalDir = t._layout.horizontalDirection, t.setTemplateItem(g(t.templateType == dt.PREFAB ? t.prefabItem : t.nodeItem)), 
                        t._slideMode != pt.ADHERING && t._slideMode != pt.PAGE || (t._scrollView.inertia = !1, 
                        t._scrollView._onMouseWheel = function() {}), t.virtual || (t.lackCenter = !1), 
                        t._lastDisplayData = [], t._displayData = [], t._forceUpdate = !1, t._updateCounter = 0, 
                        t._updateDone = !0, t._curPageNum = 0, t.cyclic && (t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t), 
                        t._scrollView._startBounceBackIfNeeded = function() {
                            return !1;
                        }), t._align) {
                          case m.Type.HORIZONTAL:
                            switch (t._horizontalDir) {
                              case m.HorizontalDirection.LEFT_TO_RIGHT:
                                t._alignCalcType = 1;
                                break;

                              case m.HorizontalDirection.RIGHT_TO_LEFT:
                                t._alignCalcType = 2;
                            }
                            break;

                          case m.Type.VERTICAL:
                            switch (t._verticalDir) {
                              case m.VerticalDirection.TOP_TO_BOTTOM:
                                t._alignCalcType = 3;
                                break;

                              case m.VerticalDirection.BOTTOM_TO_TOP:
                                t._alignCalcType = 4;
                            }
                            break;

                          case m.Type.GRID:
                            switch (t._startAxis) {
                              case m.AxisDirection.HORIZONTAL:
                                switch (t._verticalDir) {
                                  case m.VerticalDirection.TOP_TO_BOTTOM:
                                    t._alignCalcType = 3;
                                    break;

                                  case m.VerticalDirection.BOTTOM_TO_TOP:
                                    t._alignCalcType = 4;
                                }
                                break;

                              case m.AxisDirection.VERTICAL:
                                switch (t._horizontalDir) {
                                  case m.HorizontalDirection.LEFT_TO_RIGHT:
                                    t._alignCalcType = 1;
                                    break;

                                  case m.HorizontalDirection.RIGHT_TO_LEFT:
                                    t._alignCalcType = 2;
                                }
                            }
                        }
                        t._content.removeAllChildren(), t._inited = !0;
                    } else console.error(t.node.name + "'s ScrollView unset content!");
                }, l._processAutoScrolling = function(t) {
                    var e = 1e-4, i = f(), o = this._scrollView, n = o._isNecessaryAutoScrollBrake(), s = n ? .05 : 1;
                    o._autoScrollAccumulatedTime += t * (1 / s);
                    var a, l = Math.min(1, o._autoScrollAccumulatedTime / o._autoScrollTotalTime);
                    o._autoScrollAttenuate && (a = l, l = (a -= 1) * a * a * a * a + 1);
                    var r = o._autoScrollTargetDelta.clone();
                    r.multiplyScalar(l);
                    var c = o._autoScrollStartPosition.clone();
                    c.add(r);
                    var h = Math.abs(l - 1) <= e;
                    if (Math.abs(l - 1) <= o.getScrollEndedEventTiming() && !o._isScrollEndedWithThresholdEventFired && (o._dispatchEvent(_.EventType.SCROLL_ENG_WITH_THRESHOLD), 
                    o._isScrollEndedWithThresholdEventFired = !0), o.elastic) {
                        var d = c.clone();
                        d.subtract(o._autoScrollBrakingStartPosition), n && d.multiplyScalar(s), c.set(o._autoScrollBrakingStartPosition), 
                        c.add(d);
                    } else {
                        var p = c.clone();
                        p.subtract(o._getContentPosition());
                        var u = o._getHowMuchOutOfBoundary(p);
                        u.equals(i, e) || (c.add(u), h = !0);
                    }
                    h && (o._autoScrolling = !1);
                    var m = c.clone();
                    m.subtract(o._getContentPosition()), o._clampDelta(m), o._moveContent(m, h), o._dispatchEvent(_.EventType.SCROLLING), 
                    o._autoScrolling || (o._isBouncing = !1, o._scrolling = !1, o._dispatchEvent(_.EventType.SCROLL_ENDED));
                }, l.setTemplateItem = function(t) {
                    if (t) {
                        var e = this;
                        if (e._itemTmp) {
                            if (t.name === e._itemTmp.name) return;
                            for (var i = this._content.children, o = i.length - 1; o >= 0; o--) {
                                var n = i[o], s = n.listItem;
                                this.selectedType === ut.SINGLE && s.isSelected && (s.isSelected = !1), rd.Pool.putNode(n);
                            }
                        }
                        e._itemTmp = t, e._resizeMode == m.ResizeMode.CHILDREN ? e._itemSize = e._layout.cellSize : e._itemSize = t.getComponent(v).contentSize;
                        var a = t.getComponent(z), l = !1;
                        switch (a || (l = !0), l && (e.selectedType = ut.NONE), (a = t.getComponent(y)) && a.enabled && (e._needUpdateWidget = !0), 
                        e.selectedType == ut.MULT && (e._multSelected = []), e._align) {
                          case m.Type.HORIZONTAL:
                            e._colLineNum = 1, e._sizeType = !1;
                            break;

                          case m.Type.VERTICAL:
                            e._colLineNum = 1, e._sizeType = !0;
                            break;

                          case m.Type.GRID:
                            switch (e._startAxis) {
                              case m.AxisDirection.HORIZONTAL:
                                var r = e._content.getComponent(v).width - e._leftGap - e._rightGap;
                                e._colLineNum = Math.floor((r + e._columnGap) / (e._itemSize.width + e._columnGap)), 
                                e._sizeType = !0;
                                break;

                              case m.AxisDirection.VERTICAL:
                                var _ = e._content.getComponent(v).height - e._topGap - e._bottomGap;
                                e._colLineNum = Math.floor((_ + e._lineGap) / (e._itemSize.height + e._lineGap)), 
                                e._sizeType = !1;
                            }
                        }
                    }
                }, l._checkInited = function(t) {
                    return void 0 === t && (t = !0), !!this._inited || (t && console.error("List initialization not completed!"), 
                    !1);
                }, l._getItemById = function(t) {
                    if (this._content) for (var e = this._content.children, i = e.length - 1; i >= 0; i--) {
                        var o = e[i];
                        if (o.getComponent(z).itemId === t) return o;
                    }
                    return null;
                }, l._resizeContent = function() {
                    var t, e = this;
                    switch (e._align) {
                      case m.Type.HORIZONTAL:
                        if (e._customSize) {
                            var i = e._getFixedSize(null);
                            t = e._leftGap + i.val + e._itemSize.width * (e._itemCnt - i.count) + e._columnGap * (e._itemCnt - 1) + e._rightGap;
                        } else t = e._leftGap + e._itemSize.width * e._itemCnt + e._columnGap * (e._itemCnt - 1) + e._rightGap;
                        break;

                      case m.Type.VERTICAL:
                        if (e._customSize) {
                            var o = e._getFixedSize(null);
                            t = e._topGap + o.val + e._itemSize.height * (e._itemCnt - o.count) + e._lineGap * (e._itemCnt - 1) + e._bottomGap;
                        } else t = e._topGap + e._itemSize.height * e._itemCnt + e._lineGap * (e._itemCnt - 1) + e._bottomGap;
                        break;

                      case m.Type.GRID:
                        switch (e.lackCenter && (e.lackCenter = !1), e._startAxis) {
                          case m.AxisDirection.HORIZONTAL:
                            var n = Math.ceil(e._itemCnt / e._colLineNum);
                            t = e._topGap + e._itemSize.height * n + e._lineGap * (n - 1) + e._bottomGap;
                            break;

                          case m.AxisDirection.VERTICAL:
                            var s = Math.ceil(e._itemCnt / e._colLineNum);
                            t = e._leftGap + e._itemSize.width * s + e._columnGap * (s - 1) + e._rightGap;
                        }
                    }
                    var a = e._content.getComponent(m);
                    if (a && (a.enabled = !1), e._allItemSize = t, e._allItemSizeNoEdge = e._allItemSize - (e._sizeType ? e._topGap + e._bottomGap : e._leftGap + e._rightGap), 
                    e.cyclic) {
                        var l = e._sizeType ? e.getComponent(v).height : e.getComponent(v).width;
                        e._cyclicPos1 = 0, l -= e._cyclicPos1, e._cyclicCnt = Math.ceil(l / e._allItemSizeNoEdge) + 1;
                        var r = e._sizeType ? e._lineGap : e._columnGap;
                        e._cyclicPos2 = e._cyclicPos1 + e._allItemSizeNoEdge + r, e._cyclicAllItemSize = e._allItemSize + e._allItemSizeNoEdge * (e._cyclicCnt - 1) + r * (e._cyclicCnt - 1), 
                        e._cycilcAllItemSizeNoEdge = e._allItemSizeNoEdge * e._cyclicCnt, e._cycilcAllItemSizeNoEdge += r * (e._cyclicCnt - 1);
                    }
                    e._lack = !e.cyclic && e._allItemSize < (e._sizeType ? e.getComponent(v).height : e.getComponent(v).width);
                    var _ = e._lack && e.lackCenter || !e.lackSlide ? .1 : 0, c = e._lack ? (e._sizeType ? e.getComponent(v).height : e.getComponent(v).width) - _ : e.cyclic ? e._cyclicAllItemSize : e._allItemSize;
                    c < 0 && (c = 0), e._sizeType ? e._content.getComponent(v).height = c : e._content.getComponent(v).width = c;
                }, l._onScrolling = function(t) {
                    if (void 0 === t && (t = null), null == this._frameCount && (this._frameCount = this._updateRate), 
                    !this._forceUpdate && t && "scroll-ended" != t.type && this._frameCount > 0) this._frameCount--; else if (this._frameCount = this._updateRate, 
                    !this._aniDelRuning) {
                        if (this.cyclic) {
                            var e = this._content.getPosition();
                            e = this._sizeType ? e.y : e.x;
                            var i = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap), o = this._sizeType ? S(0, i) : S(i, 0);
                            switch (this._alignCalcType) {
                              case 1:
                                if (e > -this._cyclicPos1) {
                                    var n = this._content.position;
                                    this._content.setPosition(-this._cyclicPos2, n.y, n.z), this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.subtract(o));
                                } else if (e < -this._cyclicPos2) {
                                    var s = this._content.position;
                                    this._content.setPosition(-this._cyclicPos1, s.y, s.z), this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(o));
                                }
                                break;

                              case 2:
                                if (e < this._cyclicPos1) {
                                    var a = this._content.position;
                                    this._content.setPosition(this._cyclicPos2, a.y, a.z), this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(o));
                                } else if (e > this._cyclicPos2) {
                                    var l = this._content.position;
                                    this._content.setPosition(this._cyclicPos1, l.y, l.z), this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.subtract(o));
                                }
                                break;

                              case 3:
                                if (e < this._cyclicPos1) {
                                    var r = this._content.position;
                                    this._content.setPosition(r.x, this._cyclicPos2, r.z), this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(o));
                                } else if (e > this._cyclicPos2) {
                                    var _ = this._content.position;
                                    this._content.setPosition(_.x, this._cyclicPos1, _.z), this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.subtract(o));
                                }
                                break;

                              case 4:
                                if (e > -this._cyclicPos1) {
                                    var c = this._content.position;
                                    this._content.setPosition(c.x, -this._cyclicPos2, c.z), this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.subtract(o));
                                } else if (e < -this._cyclicPos2) {
                                    var h = this._content.position;
                                    this._content.setPosition(h.x, -this._cyclicPos1, h.z), this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(o));
                                }
                            }
                        }
                        var d, p, u, g;
                        if (this._calcViewPos(), this._sizeType ? (d = this._viewTop, u = this._viewBottom) : (p = this._viewRight, 
                        g = this._viewLeft), this._virtual) {
                            var f;
                            this._displayData = [];
                            var v = 0, y = this._itemCnt - 1;
                            if (this._customSize) for (var T = !1; v <= y && !T; v++) switch (f = this._calcItemPos(v), 
                            this._align) {
                              case m.Type.HORIZONTAL:
                                f.right >= g && f.left <= p ? this._displayData.push(f) : 0 != v && this._displayData.length > 0 && (T = !0);
                                break;

                              case m.Type.VERTICAL:
                                f.bottom <= d && f.top >= u ? this._displayData.push(f) : 0 != v && this._displayData.length > 0 && (T = !0);
                                break;

                              case m.Type.GRID:
                                switch (this._startAxis) {
                                  case m.AxisDirection.HORIZONTAL:
                                    f.bottom <= d && f.top >= u ? this._displayData.push(f) : 0 != v && this._displayData.length > 0 && (T = !0);
                                    break;

                                  case m.AxisDirection.VERTICAL:
                                    f.right >= g && f.left <= p ? this._displayData.push(f) : 0 != v && this._displayData.length > 0 && (T = !0);
                                }
                            } else {
                                var I = this._itemSize.width + this._columnGap, C = this._itemSize.height + this._lineGap;
                                switch (this._alignCalcType) {
                                  case 1:
                                    v = (g - this._leftGap) / I, y = (p - this._leftGap) / I;
                                    break;

                                  case 2:
                                    v = (-p - this._rightGap) / I, y = (-g - this._rightGap) / I;
                                    break;

                                  case 3:
                                    v = (-d - this._topGap) / C, y = (-u - this._topGap) / C;
                                    break;

                                  case 4:
                                    v = (u - this._bottomGap) / C, y = (d - this._bottomGap) / C;
                                }
                                for (v = Math.floor(v) * this._colLineNum, y = Math.ceil(y) * this._colLineNum, 
                                v < 0 && (v = 0), --y >= this._itemCnt && (y = this._itemCnt - 1); v <= y; v++) this._displayData.push(this._calcItemPos(v));
                            }
                            if (this._deleteRedundantItem(), this._displayData.length <= 0 || !this._itemCnt) return void (this._lastDisplayData = []);
                            this._firstListId = this._displayData[0].id, this._displayItemCnt = this._displayData.length;
                            var z = this._lastDisplayData.length, w = this._displayItemCnt != z;
                            if (w && (this.frameRenderCount > 0 && this._lastDisplayData.sort(function(t, e) {
                                return t - e;
                            }), w = this._firstListId != this._lastDisplayData[0] || this._displayData[this._displayItemCnt - 1].id != this._lastDisplayData[z - 1]), 
                            this._forceUpdate || w) if (this.frameRenderCount > 0) this._itemCnt > 0 ? (this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = !0, 
                            this._updateDone = !1) : (this._updateCounter = 0, this._updateDone = !0); else {
                                this._lastDisplayData = [];
                                for (var D = 0; D < this._displayItemCnt; D++) this._createOrUpdateItem(this._displayData[D]);
                                this._forceUpdate = !1;
                            }
                            this._calcNearestItem();
                        }
                    }
                }, l._calcViewPos = function() {
                    var t = this._content.getPosition();
                    switch (this._alignCalcType) {
                      case 1:
                        this._elasticLeft = t.x > 0 ? t.x : 0, this._viewLeft = (t.x < 0 ? -t.x : 0) - this._elasticLeft, 
                        this._viewRight = this._viewLeft + this.getComponent(v).width, this._elasticRight = this._viewRight > this._content.getComponent(v).width ? Math.abs(this._viewRight - this._content.getComponent(v).width) : 0, 
                        this._viewRight += this._elasticRight;
                        break;

                      case 2:
                        this._elasticRight = t.x < 0 ? -t.x : 0, this._viewRight = (t.x > 0 ? -t.x : 0) + this._elasticRight, 
                        this._viewLeft = this._viewRight - this.getComponent(v).width, this._elasticLeft = this._viewLeft < -this._content.getComponent(v).width ? Math.abs(this._viewLeft + this._content.getComponent(v).width) : 0, 
                        this._viewLeft -= this._elasticLeft;
                        break;

                      case 3:
                        this._elasticTop = t.y < 0 ? Math.abs(t.y) : 0, this._viewTop = (t.y > 0 ? -t.y : 0) + this._elasticTop, 
                        this._viewBottom = this._viewTop - this.getComponent(v).height, this._elasticBottom = this._viewBottom < -this._content.getComponent(v).height ? Math.abs(this._viewBottom + this._content.getComponent(v).height) : 0, 
                        this._viewBottom += this._elasticBottom;
                        break;

                      case 4:
                        this._elasticBottom = t.y > 0 ? Math.abs(t.y) : 0, this._viewBottom = (t.y < 0 ? -t.y : 0) - this._elasticBottom, 
                        this._viewTop = this._viewBottom + this.getComponent(v).height, this._elasticTop = this._viewTop > this._content.getComponent(v).height ? Math.abs(this._viewTop - this._content.getComponent(v).height) : 0, 
                        this._viewTop -= this._elasticTop;
                    }
                }, l._calcItemPos = function(t) {
                    var e, i, o, n, s, a, l, r;
                    switch (this._align) {
                      case m.Type.HORIZONTAL:
                        switch (this._horizontalDir) {
                          case m.HorizontalDirection.LEFT_TO_RIGHT:
                            if (this._customSize) {
                                var _ = this._getFixedSize(t);
                                s = this._leftGap + (this._itemSize.width + this._columnGap) * (t - _.count) + (_.val + this._columnGap * _.count);
                                var c = this._customSize[t];
                                e = c > 0 ? c : this._itemSize.width;
                            } else s = this._leftGap + (this._itemSize.width + this._columnGap) * t, e = this._itemSize.width;
                            if (this.lackCenter) s -= this._leftGap, s += this._content.getComponent(v).width / 2 - this._allItemSizeNoEdge / 2;
                            return {
                                id: t,
                                left: s,
                                right: a = s + e,
                                x: s + this._itemTmp.getComponent(v).anchorX * e,
                                y: this._itemTmp.y
                            };

                          case m.HorizontalDirection.RIGHT_TO_LEFT:
                            if (this._customSize) {
                                var h = this._getFixedSize(t);
                                a = -this._rightGap - (this._itemSize.width + this._columnGap) * (t - h.count) - (h.val + this._columnGap * h.count);
                                var d = this._customSize[t];
                                e = d > 0 ? d : this._itemSize.width;
                            } else a = -this._rightGap - (this._itemSize.width + this._columnGap) * t, e = this._itemSize.width;
                            if (this.lackCenter) a += this._rightGap, a -= this._content.getComponent(v).width / 2 - this._allItemSizeNoEdge / 2;
                            return {
                                id: t,
                                right: a,
                                left: s = a - e,
                                x: s + this._itemTmp.getComponent(v).anchorX * e,
                                y: this._itemTmp.y
                            };
                        }
                        break;

                      case m.Type.VERTICAL:
                        switch (this._verticalDir) {
                          case m.VerticalDirection.TOP_TO_BOTTOM:
                            if (this._customSize) {
                                var p = this._getFixedSize(t);
                                o = -this._topGap - (this._itemSize.height + this._lineGap) * (t - p.count) - (p.val + this._lineGap * p.count);
                                var u = this._customSize[t];
                                i = u > 0 ? u : this._itemSize.height;
                            } else o = -this._topGap - (this._itemSize.height + this._lineGap) * t, i = this._itemSize.height;
                            if (this.lackCenter) o += this._topGap, o -= this._content.getComponent(v).height / 2 - this._allItemSizeNoEdge / 2;
                            return {
                                id: t,
                                top: o,
                                bottom: n = o - i,
                                x: this._itemTmp.position.x,
                                y: n + this._itemTmp.getComponent(v).anchorY * i
                            };

                          case m.VerticalDirection.BOTTOM_TO_TOP:
                            if (this._customSize) {
                                var g = this._getFixedSize(t);
                                n = this._bottomGap + (this._itemSize.height + this._lineGap) * (t - g.count) + (g.val + this._lineGap * g.count);
                                var f = this._customSize[t];
                                i = f > 0 ? f : this._itemSize.height;
                            } else n = this._bottomGap + (this._itemSize.height + this._lineGap) * t, i = this._itemSize.height;
                            if (this.lackCenter) n -= this._bottomGap, n += this._content.getComponent(v).height / 2 - this._allItemSizeNoEdge / 2;
                            return {
                                id: t,
                                top: o = n + i,
                                bottom: n,
                                x: this._itemTmp.x,
                                y: n + this._itemTmp.getComponent(v).anchorY * i
                            };
                        }

                      case m.Type.GRID:
                        var y = Math.floor(t / this._colLineNum);
                        switch (this._startAxis) {
                          case m.AxisDirection.HORIZONTAL:
                            switch (this._verticalDir) {
                              case m.VerticalDirection.TOP_TO_BOTTOM:
                                r = (n = (o = -this._topGap - (this._itemSize.height + this._lineGap) * y) - this._itemSize.height) + this._itemTmp.getComponent(v).anchorY * this._itemSize.height;
                                break;

                              case m.VerticalDirection.BOTTOM_TO_TOP:
                                o = (n = this._bottomGap + (this._itemSize.height + this._lineGap) * y) + this._itemSize.height, 
                                r = n + this._itemTmp.getComponent(v).anchorY * this._itemSize.height;
                            }
                            switch (l = this._leftGap + t % this._colLineNum * (this._itemSize.width + this._columnGap), 
                            this._horizontalDir) {
                              case m.HorizontalDirection.LEFT_TO_RIGHT:
                                l += this._itemTmp.getComponent(v).anchorX * this._itemSize.width, l -= this._content.getComponent(v).anchorX * this._content.getComponent(v).width;
                                break;

                              case m.HorizontalDirection.RIGHT_TO_LEFT:
                                l += (1 - this._itemTmp.getComponent(v).anchorX) * this._itemSize.width, l -= (1 - this._content.getComponent(v).anchorX) * this._content.getComponent(v).width, 
                                l *= -1;
                            }
                            return {
                                id: t,
                                top: o,
                                bottom: n,
                                x: l,
                                y: r
                            };

                          case m.AxisDirection.VERTICAL:
                            switch (this._horizontalDir) {
                              case m.HorizontalDirection.LEFT_TO_RIGHT:
                                a = (s = this._leftGap + (this._itemSize.width + this._columnGap) * y) + this._itemSize.width, 
                                l = s + this._itemTmp.getComponent(v).anchorX * this._itemSize.width, l -= this._content.getComponent(v).anchorX * this._content.getComponent(v).width;
                                break;

                              case m.HorizontalDirection.RIGHT_TO_LEFT:
                                l = (s = (a = -this._rightGap - (this._itemSize.width + this._columnGap) * y) - this._itemSize.width) + this._itemTmp.getComponent(v).anchorX * this._itemSize.width, 
                                l += (1 - this._content.getComponent(v).anchorX) * this._content.getComponent(v).width;
                            }
                            switch (r = -this._topGap - t % this._colLineNum * (this._itemSize.height + this._lineGap), 
                            this._verticalDir) {
                              case m.VerticalDirection.TOP_TO_BOTTOM:
                                r -= (1 - this._itemTmp.getComponent(v).anchorY) * this._itemSize.height, r += (1 - this._content.getComponent(v).anchorY) * this._content.getComponent(v).height;
                                break;

                              case m.VerticalDirection.BOTTOM_TO_TOP:
                                r -= this._itemTmp.getComponent(v).anchorY * this._itemSize.height, r += this._content.getComponent(v).anchorY * this._content.getComponent(v).height, 
                                r *= -1;
                            }
                            return {
                                id: t,
                                left: s,
                                right: a,
                                x: l,
                                y: r
                            };
                        }
                    }
                }, l._calcExistItemPos = function(t) {
                    var e = this.getItemByListId(t);
                    if (!e) return null;
                    var i = {
                        id: t,
                        x: e.x,
                        y: e.y
                    };
                    return this._sizeType ? (i.top = e.y + e.height * (1 - e.anchorY), i.bottom = e.y - e.height * e.anchorY) : (i.left = e.x - e.width * e.anchorX, 
                    i.right = e.x + e.width * (1 - e.anchorX)), i;
                }, l.getItemPos = function(t) {
                    return this._virtual || this.frameRenderCount ? this._calcItemPos(t) : this._calcExistItemPos(t);
                }, l._getFixedSize = function(t) {
                    if (!this._customSize) return null;
                    null == t && (t = this._itemCnt);
                    var e = 0, i = 0;
                    for (var o in this._customSize) parseInt(o) < t && (e += this._customSize[o], i++);
                    return {
                        val: e,
                        count: i
                    };
                }, l._onScrollBegan = function() {
                    this._beganPos = this._sizeType ? this._viewTop : this._viewLeft;
                }, l._onScrollEnded = function() {
                    var t = this;
                    if (t.curScrollIsTouch = !1, null != t._scrollToListId) {
                        var e = t.getItemByListId(t._scrollToListId);
                        t._scrollToListId = null, e && T(e).to(.1, {
                            scale: 1.06
                        }).to(.1, {
                            scale: 1
                        }).start();
                    }
                    t._onScrolling(), t._slideMode != pt.ADHERING || t._adhering ? t._slideMode == pt.PAGE && (null != t._beganPos && t.curScrollIsTouch ? this._pageAdhere() : t.adhere()) : t.adhere();
                }, l._onTouchStart = function(t, e) {
                    if (!this._scrollView._hasNestedViewGroup(t, e) && (this.curScrollIsTouch = !0, 
                    !(t.eventPhase === I.AT_TARGET && t.target === this.node))) {
                        for (var i = t.target; null == i._listId && i.parent; ) i = i.parent;
                        this._scrollItem = null != i._listId ? i : t.target;
                    }
                }, l._onTouchUp = function() {
                    var t = this;
                    t._scrollPos = null, t._slideMode == pt.ADHERING ? (this._adhering && (this._adheringBarrier = !0), 
                    t.adhere()) : t._slideMode == pt.PAGE && (null != t._beganPos ? this._pageAdhere() : t.adhere()), 
                    this._scrollItem = null;
                }, l._onTouchCancelled = function(t, e) {
                    var i = this;
                    i._scrollView._hasNestedViewGroup(t, e) || t.simulate || (i._scrollPos = null, i._slideMode == pt.ADHERING ? (i._adhering && (i._adheringBarrier = !0), 
                    i.adhere()) : i._slideMode == pt.PAGE && (null != i._beganPos ? i._pageAdhere() : i.adhere()), 
                    this._scrollItem = null);
                }, l._onSizeChanged = function() {
                    this._checkInited(!1) && this._onScrolling();
                }, l.itemAdaptive = function(t) {
                    var e = t.getComponent(v);
                    if (!this._sizeType && e.width !== this._itemSize.width || this._sizeType && e.height !== this._itemSize.height) {
                        this._customSize || (this._customSize = {});
                        var i = this._sizeType ? e.height : e.width;
                        this._customSize[t._listId] !== i && (this._customSize[t._listId] = i, this._resizeContent(), 
                        this.updateAll(), null != this._scrollToListId && (this._scrollPos = null, this.unschedule(this._scrollToSo), 
                        this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3))));
                    }
                }, l._pageAdhere = function() {
                    var t = this;
                    if (t.cyclic || !(t._elasticTop > 0 || t._elasticRight > 0 || t._elasticBottom > 0 || t._elasticLeft > 0)) {
                        var e = t._sizeType ? t._viewTop : t._viewLeft, i = (t._sizeType ? t.getComponent(v).height : t.getComponent(v).width) * t.pageDistance;
                        if (Math.abs(t._beganPos - e) > i) {
                            var o = .5;
                            switch (t._alignCalcType) {
                              case 1:
                              case 4:
                                t._beganPos > e ? t.prePage(o) : t.nextPage(o);
                                break;

                              case 2:
                              case 3:
                                t._beganPos < e ? t.prePage(o) : t.nextPage(o);
                            }
                        } else t._elasticTop <= 0 && t._elasticRight <= 0 && t._elasticBottom <= 0 && t._elasticLeft <= 0 && t.adhere();
                        t._beganPos = null;
                    }
                }, l.adhere = function() {
                    var t = this;
                    if (t._checkInited() && !(t._elasticTop > 0 || t._elasticRight > 0 || t._elasticBottom > 0 || t._elasticLeft > 0)) {
                        t._adhering = !0, t._calcNearestItem();
                        var e = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.getComponent(v).height : t.getComponent(v).width);
                        t.scrollTo(t._nearestListId, .7, e);
                    }
                }, l._createOrUpdateItem = function(t) {
                    var e = this.getItemByListId(t.id);
                    if (e) this._forceUpdate && this.renderEvent && (e.setPosition(f(t.x, t.y, 0)), 
                    this._resetItemSize(e)); else {
                        if (e = rd.Pool.getNode(this._itemTmp), u(e) || (e = g(this._itemTmp)), e._listId != t.id && (e._listId = t.id, 
                        e.getComponent(v).setContentSize(this._itemSize)), e.setPosition(f(t.x, t.y, 0)), 
                        this._resetItemSize(e), this._content.addChild(e), this._needUpdateWidget) {
                            var i = e.getComponent(y);
                            null == i || i.updateAlignment();
                        }
                        e.setSiblingIndex(this._content.children.length - 1);
                        var o = e.getComponent(z);
                        e.listItem = o, o && (o.itemId = t.id, o.setListViewComp(this), o.registerEvent());
                    }
                    this._resetItemSize(e), this.renderEvent && p.emitEvents([ this.renderEvent ], e, t.id % this._actualItemCnt), 
                    this._updateListItem(e.listItem), this._lastDisplayData.indexOf(t.id) < 0 && this._lastDisplayData.push(t.id);
                }, l._createOrUpdateItemNonVirtual = function(t) {
                    var e, i = this._content.children[t];
                    i ? this._forceUpdate && this.renderEvent && (i._listId = t, e && (e.itemId = t)) : ((i = g(this._itemTmp))._listId = t, 
                    this._content.addChild(i), e = i.getComponent(z), i.listItem = e, e && (e.itemId = t, 
                    e.setListViewComp(this), e.registerEvent())), this.renderEvent && p.emitEvents([ this.renderEvent ], i, t % this._actualItemCnt), 
                    this._updateListItem(e), this._lastDisplayData.indexOf(t) < 0 && this._lastDisplayData.push(t);
                }, l._updateListItem = function(t) {
                    if (t && this.selectedType > ut.NONE) {
                        var e = t.node;
                        switch (this.selectedType) {
                          case ut.SINGLE:
                            t.isSelected = this.selectedId == e._listId;
                            break;

                          case ut.MULT:
                            t.isSelected = this._multSelected.indexOf(e._listId) >= 0;
                        }
                    }
                }, l._resetItemSize = function(t) {}, l._updateItemPos = function(t) {
                    var e = isNaN(t) ? t : this.getItemByListId(t), i = this.getItemPos(e._listId);
                    e.setPosition(i.x, i.y);
                }, l.setMultSelected = function(t, e) {
                    var i = this;
                    if (i._checkInited()) {
                        var o, n;
                        if (Array.isArray(t) || (t = [ t ]), null == e) i._multSelected = t; else if (e) for (var s = t.length - 1; s >= 0; s--) o = t[s], 
                        (n = i._multSelected.indexOf(o)) < 0 && i._multSelected.push(o); else for (var a = t.length - 1; a >= 0; a--) o = t[a], 
                        (n = i._multSelected.indexOf(o)) >= 0 && i._multSelected.splice(n, 1);
                        i._forceUpdate = !0, i._onScrolling();
                    }
                }, l.getMultSelected = function() {
                    return this._multSelected;
                }, l.hasMultSelected = function(t) {
                    return this._multSelected && this._multSelected.indexOf(t) >= 0;
                }, l.updateItem = function(t) {
                    if (this._checkInited()) {
                        Array.isArray(t) || (t = [ t ]);
                        for (var e = 0, i = t.length; e < i; e++) {
                            var o = t[e], n = this.getItemByListId(o);
                            n && p.emitEvents([ this.renderEvent ], n, o % this._actualItemCnt);
                        }
                    }
                }, l.updateAll = function() {
                    this._checkInited() && (this.itemCnt = this._itemCnt);
                }, l.getItemByListId = function(t) {
                    if (this._content) for (var e = this._content.children.length - 1; e >= 0; e--) {
                        var i = this._content.children[e];
                        if (i._listId == t) return i;
                    }
                }, l._getOutsideItem = function() {
                    for (var t, e = [], i = this._content.children.length - 1; i >= 0; i--) t = this._content.children[i], 
                    this._displayData.find(function(e) {
                        return e.id == t._listId;
                    }) || e.push(t);
                    return e;
                }, l._deleteRedundantItem = function() {
                    if (this._virtual) for (var t = this._getOutsideItem(), e = t.length - 1; e >= 0; e--) {
                        var i = t[e];
                        if (!this._scrollItem || i._listId != this._scrollItem._listId) {
                            i.isCached = !0, rd.Pool.putNode(i);
                            for (var o = this._lastDisplayData.length - 1; o >= 0; o--) if (this._lastDisplayData[o] == i._listId) {
                                this._lastDisplayData.splice(o, 1);
                                break;
                            }
                        }
                    } else for (;this._content.children.length > this._itemCnt; ) this.deleteSingleItem(this._content.children[this._content.children.length - 1]);
                }, l.deleteSingleItem = function(t) {
                    t.removeFromParent(), t.destroy && t.destroy(), t = null;
                }, l.aniDelItem = function(t, e, i) {
                    var o = this;
                    if (!o._checkInited() || o.cyclic || !o._virtual) return console.error("This function is not allowed to be called!");
                    if (!e) return console.error("CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!");
                    if (o._aniDelRuning) return console.warn("Please wait for the current deletion to finish!");
                    var n, s = o.getItemByListId(t);
                    if (s) {
                        n = s.getComponent(z), o._aniDelRuning = !0, o._aniDelCB = e, o._aniDelItem = s, 
                        o._aniDelBeforePos = s.position, o._aniDelBeforeScale = s.scale;
                        var a = o._displayData[o._displayData.length - 1].id, l = n.isSelected;
                        n.showAnimation(i, function() {
                            var i;
                            if (a < o._itemCnt - 2 && (i = a + 1), null != i) {
                                var n = o._calcItemPos(i);
                                o._displayData.push(n), o._virtual ? o._createOrUpdateItem(n) : o._createOrUpdateItemNonVirtual(i);
                            } else o._itemCnt--;
                            if (o.selectedType == ut.SINGLE) l ? o._curSelectedId = -1 : o._curSelectedId - 1 >= 0 && o._curSelectedId--; else if (o.selectedType == ut.MULT && o._multSelected.length) {
                                var r = o._multSelected.indexOf(t);
                                r >= 0 && o._multSelected.splice(r, 1);
                                for (var _ = o._multSelected.length - 1; _ >= 0; _--) {
                                    o._multSelected[_] >= t && o._multSelected[_]--;
                                }
                            }
                            if (o._customSize) {
                                o._customSize[t] && delete o._customSize[t];
                                var c, h = {};
                                for (var d in o._customSize) {
                                    c = o._customSize[d];
                                    var p = parseInt(d);
                                    h[p - (p >= t ? 1 : 0)] = c;
                                }
                                o._customSize = h;
                            }
                            for (var u, m, g = null != i ? i : a; g >= t + 1; g--) if (s = o.getItemByListId(g)) {
                                var v = o._calcItemPos(g - 1);
                                u = T(s).to(.2333, {
                                    position: f(v.x, v.y, 0)
                                }), g <= t + 1 && (m = !0, u.call(function() {
                                    o._aniDelRuning = !1, e(t), delete o._aniDelCB;
                                })), u.start();
                            }
                            m || (o._aniDelRuning = !1, e(t), o._aniDelCB = null);
                        }, !0);
                    } else e(t);
                }, l.scrollTo = function(t, e, i, o) {
                    void 0 === e && (e = 0), void 0 === i && (i = null), void 0 === o && (o = !1);
                    var n = this;
                    if (n._checkInited(!1)) {
                        (null == e || e < 0) && (e = 0), t < 0 ? t = 0 : t >= n._itemCnt && (t = n._itemCnt - 1), 
                        !n._virtual && n._layout && n._layout.enabled && n._layout.updateLayout();
                        var s, a, l = n.getItemPos(t);
                        if (!l) return console.error("pos is null", t);
                        switch (n._alignCalcType) {
                          case 1:
                            s = l.left, s -= null != i ? n.getComponent(v).width * i : n._leftGap, l = S(s, 0);
                            break;

                          case 2:
                            s = l.right - n.getComponent(v).width, s += null != i ? n.getComponent(v).width * i : n._rightGap, 
                            l = S(s + n._content.getComponent(v).width, 0);
                            break;

                          case 3:
                            a = l.top, a += null != i ? n.getComponent(v).height * i : n._topGap, l = S(0, -a);
                            break;

                          case 4:
                            a = l.bottom + n.getComponent(v).height, a -= null != i ? n.getComponent(v).height * i : n._bottomGap, 
                            l = S(0, -a + n._content.getComponent(v).height);
                        }
                        var r = n._content.getPosition();
                        r = Math.abs(n._sizeType ? r.y : r.x);
                        var _ = n._sizeType ? l.y : l.x;
                        Math.abs((null != n._scrollPos ? n._scrollPos : r) - _) > .5 && (n._scrollView.scrollToOffset(l, e), 
                        n._scrollToListId = t, n._scrollToEndTime = new Date().getTime() / 1e3 + e, n._scrollToSo = n.scheduleOnce(function() {
                            if (n._adheringBarrier || (n._adhering = n._adheringBarrier = !1), n._scrollPos = n._scrollToListId = n._scrollToEndTime = n._scrollToSo = null, 
                            o) {
                                var e = n.getItemByListId(t);
                                e && T(e).to(.1, {
                                    scale: f(1.05, 1.05, 1.05)
                                }).to(.1, {
                                    scale: f(1, 1, 1)
                                }).union().repeat(2).start();
                            }
                        }, e + .1), e <= 0 && n._onScrolling());
                    }
                }, l._calcNearestItem = function() {
                    var t, e, i, o, n, s, a = this;
                    a._nearestListId = null, a._virtual && a._calcViewPos(), i = a._viewTop, o = a._viewRight, 
                    n = a._viewBottom, s = a._viewLeft;
                    for (var l = !1, r = 0; r < a._content.children.length && !l; r += a._colLineNum) if (t = a._virtual ? a._displayData[r] : a._calcExistItemPos(r)) switch (e = a._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2, 
                    a._alignCalcType) {
                      case 1:
                        t.right >= s && (a._nearestListId = t.id, s > e && (a._nearestListId += a._colLineNum), 
                        l = !0);
                        break;

                      case 2:
                        t.left <= o && (a._nearestListId = t.id, o < e && (a._nearestListId += a._colLineNum), 
                        l = !0);
                        break;

                      case 3:
                        t.bottom <= i && (a._nearestListId = t.id, i < e && (a._nearestListId += a._colLineNum), 
                        l = !0);
                        break;

                      case 4:
                        t.top >= n && (a._nearestListId = t.id, n > e && (a._nearestListId += a._colLineNum), 
                        l = !0);
                    }
                    if ((t = a._virtual ? a._displayData[a._displayItemCnt - 1] : a._calcExistItemPos(a._itemCnt - 1)) && t.id == a._itemCnt - 1) switch (e = a._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2, 
                    a._alignCalcType) {
                      case 1:
                        o > e && (a._nearestListId = t.id);
                        break;

                      case 2:
                        s < e && (a._nearestListId = t.id);
                        break;

                      case 3:
                        n < e && (a._nearestListId = t.id);
                        break;

                      case 4:
                        i > e && (a._nearestListId = t.id);
                    }
                }, l.prePage = function(t) {
                    void 0 === t && (t = .5), this._checkInited() && this.skipPage(this._curPageNum - 1, t);
                }, l.nextPage = function(t) {
                    void 0 === t && (t = .5), this._checkInited() && this.skipPage(this._curPageNum + 1, t);
                }, l.skipPage = function(t, e) {
                    var i = this;
                    if (i._checkInited()) return i._slideMode != pt.PAGE ? console.error("This function is not allowed to be called, Must SlideMode = PAGE!") : void (t < 0 || t >= i._itemCnt || i._curPageNum != t && (i._curPageNum = t, 
                    i.pageChangeEvt && p.emitEvents([ i.pageChangeEvt ], t), i.scrollTo(t, e)));
                }, l.calcCustomSize = function(t) {
                    var e = this;
                    if (e._checkInited()) {
                        if (!e._itemTmp) return console.error("Unset template item!");
                        if (!e.renderEvent) return console.error("Unset Render-Event!");
                        e._customSize = {};
                        var i = g(e._itemTmp);
                        e._content.addChild(i);
                        for (var o = 0; o < t; o++) p.emitEvents([ e.renderEvent ], i, o), i.height == e._itemSize.height && i.width == e._itemSize.width || (e._customSize[o] = e._sizeType ? i.height : i.width);
                        return Object.keys(e._customSize).length || (e._customSize = null), i.removeFromParent(), 
                        i.destroy && i.destroy(), e._customSize;
                    }
                }, l.update = function() {
                    if (!(this.frameRenderCount <= 0 || this._updateDone)) if (this._virtual) {
                        for (var t = this._updateCounter + this.frameRenderCount > this._displayItemCnt ? this._displayItemCnt : this._updateCounter + this.frameRenderCount, e = this._updateCounter; e < t; e++) {
                            var i = this._displayData[e];
                            i && this._createOrUpdateItem(i);
                        }
                        this._updateCounter >= this._displayItemCnt - 1 ? this._doneAfterUpdate ? (this._updateCounter = 0, 
                        this._updateDone = !1, this._doneAfterUpdate = !1) : (this._updateDone = !0, this._deleteRedundantItem(), 
                        this._forceUpdate = !1, this._calcNearestItem(), this.slideMode == pt.PAGE && (this._curPageNum = this._nearestListId)) : this._updateCounter += this.frameRenderCount;
                    } else if (this._updateCounter < this._itemCnt) {
                        for (var o = this._updateCounter + this.frameRenderCount > this._itemCnt ? this._itemCnt : this._updateCounter + this.frameRenderCount, n = this._updateCounter; n < o; n++) this._createOrUpdateItemNonVirtual(n);
                        this._updateCounter += this.frameRenderCount;
                    } else this._updateDone = !0, this._calcNearestItem(), this.slideMode == pt.PAGE && (this._curPageNum = this._nearestListId);
                }, a(e, [ {
                    key: "slideMode",
                    get: function() {
                        return this._slideMode;
                    },
                    set: function(t) {
                        this._slideMode = t;
                    }
                }, {
                    key: "virtual",
                    get: function() {
                        return this._virtual;
                    },
                    set: function(t) {
                        this._virtual = t, 0 !== this._itemCnt && this._onScrolling();
                    }
                }, {
                    key: "updateRate",
                    get: function() {
                        return this._updateRate;
                    },
                    set: function(t) {
                        t >= 0 && t <= 6 && (this._updateRate = t);
                    }
                }, {
                    key: "itemCnt",
                    get: function() {
                        return this._actualItemCnt;
                    },
                    set: function(t) {
                        if (this._checkInited(!1)) if (null == t || t < 0) console.error("item Count set wrong: ", t); else if (this._actualItemCnt = this._itemCnt = t, 
                        this._forceUpdate = !0, this._virtual) this._resizeContent(), this.cyclic && (this._itemCnt = this._cyclicCnt * this._itemCnt), 
                        this._onScrolling(), this.frameRenderCount || this.slideMode !== pt.PAGE || (this._curPageNum = this._nearestListId); else {
                            this.cyclic && (this._resizeContent(), this._itemCnt = this._cyclicCnt * this._itemCnt);
                            var e = this._content.getComponent(m);
                            if (e && (e.enabled = !0), this._deleteRedundantItem(), this._firstListId = 0, this.frameRenderCount > 0) {
                                for (var i = this.frameRenderCount > this._itemCnt ? this._itemCnt : this.frameRenderCount, o = 0; o < i; o++) this._createOrUpdateItemNonVirtual(o);
                                this.frameRenderCount < this._itemCnt && (this._updateCounter = this.frameRenderCount, 
                                this._updateDone = !1);
                            } else {
                                for (var n = 0; n < this._itemCnt; n++) this._createOrUpdateItemNonVirtual(n);
                                this._displayItemCnt = this._itemCnt;
                            }
                        }
                    }
                }, {
                    key: "selectedId",
                    get: function() {
                        return this._curSelectedId;
                    },
                    set: function(t) {
                        var e = this._getItemById(t);
                        switch (this.selectedType) {
                          case ut.SINGLE:
                            if (!this.repeatSingleEvent && t === this._curSelectedId) return;
                            if (this._curSelectedId >= 0 && (this._lastSelectedId = this._curSelectedId), this._curSelectedId = t, 
                            e) e.getComponent(z).isSelected = !0;
                            if (this._lastSelectedId >= 0 && this._lastSelectedId !== this._curSelectedId) {
                                var i = this._getItemById(this._lastSelectedId);
                                i && (i.getComponent(z).isSelected = !1);
                            }
                            this.selectedEvent.target && this.selectedEvent.handler && p.emitEvents([ this.selectedEvent ], e, t % this._actualItemCnt, this._lastSelectedId < 0 ? -1 : this._lastSelectedId % this._actualItemCnt);
                            break;

                          case ut.MULT:
                            if (!e) return;
                            var o = e.getComponent(z);
                            this._curSelectedId >= 0 && (this._lastSelectedId = this._curSelectedId), this._curSelectedId = t;
                            var n = !o.isSelected;
                            o.isSelected = n;
                            var s = this._multSelected.indexOf(t);
                            n && s < 0 ? this._multSelected.push(t) : !n && s >= 0 && this._multSelected.splice(s, 1), 
                            this.selectedEvent && p.emitEvents([ this.selectedEvent ], e, t % this._actualItemCnt, this._lastSelectedId < 0 ? -1 : this._lastSelectedId % this._actualItemCnt, n);
                        }
                    }
                } ]), e;
            }(C)).prototype, "templateType", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return dt.NODE;
                }
            }), J = e(j.prototype, "nodeItem", [ G ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), K = e(j.prototype, "prefabItem", [ O ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Q = e(j.prototype, "_slideMode", [ gt ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return pt.NORMAL;
                }
            }), e(j.prototype, "slideMode", [ R ], Object.getOwnPropertyDescriptor(j.prototype, "slideMode"), j.prototype), 
            $ = e(j.prototype, "pageDistance", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .3;
                }
            }), tt = e(j.prototype, "pageChangeEvt", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new p();
                }
            }), et = e(j.prototype, "_virtual", [ gt ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), e(j.prototype, "virtual", [ k ], Object.getOwnPropertyDescriptor(j.prototype, "virtual"), j.prototype), 
            it = e(j.prototype, "cyclic", [ B ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), ot = e(j.prototype, "lackCenter", [ V ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), nt = e(j.prototype, "lackSlide", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), st = e(j.prototype, "_updateRate", [ gt ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), e(j.prototype, "updateRate", [ x ], Object.getOwnPropertyDescriptor(j.prototype, "updateRate"), j.prototype), 
            at = e(j.prototype, "frameRenderCount", [ H ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), lt = e(j.prototype, "renderEvent", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new p();
                }
            }), rt = e(j.prototype, "selectedType", [ F ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ut.NONE;
                }
            }), _t = e(j.prototype, "repeatSingleEvent", [ X ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), ct = e(j.prototype, "selectedEvent", [ Y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new p();
                }
            }), ht = e(j.prototype, "_itemCnt", [ Z ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), W = j)) || W) || W) || W) || W) || W));
            l._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/deobfuscateAppleGPU.ts", [ "cc", "./deviceInfo.ts", "./webgl-constants.ts" ], function(e) {
    "use strict";
    var a, r, t, n, i, c, o, u, v, f, d;
    return {
        setters: [ function(e) {
            a = e.cclegacy;
        }, function(e) {
            r = e.deviceInfo;
        }, function(e) {
            t = e.GL_VERTEX_SHADER, n = e.GL_FRAGMENT_SHADER, i = e.GL_ARRAY_BUFFER, c = e.GL_STATIC_DRAW, 
            o = e.GL_FLOAT, u = e.GL_COLOR_BUFFER_BIT, v = e.GL_TRIANGLES, f = e.GL_RGBA, d = e.GL_UNSIGNED_BYTE;
        } ],
        execute: function() {
            e("deobfuscateAppleGPU", function(e, a, l) {
                if (!l) return [ a ];
                var s, h = function(e) {
                    var a = "\n    precision highp float;\n    attribute vec3 aPosition;\n    varying float vvv;\n    void main() {\n      vvv = 0.31622776601683794;\n      gl_Position = vec4(aPosition, 1.0);\n    }\n  ", r = "\n    precision highp float;\n    varying float vvv;\n    void main() {\n      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;\n      enc = fract(enc);\n      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\n      gl_FragColor = enc;\n    }\n  ", l = e.createShader(t), s = e.createShader(n), h = e.createProgram();
                    if (!(s && l && h)) return;
                    e.shaderSource(l, a), e.shaderSource(s, r), e.compileShader(l), e.compileShader(s), 
                    e.attachShader(h, l), e.attachShader(h, s), e.linkProgram(h), e.detachShader(h, l), 
                    e.detachShader(h, s), e.deleteShader(l), e.deleteShader(s), e.useProgram(h);
                    var p = e.createBuffer();
                    e.bindBuffer(i, p), e.bufferData(i, new Float32Array([ -1, -1, 0, 3, -1, 0, -1, 3, 0 ]), c);
                    var _ = e.getAttribLocation(h, "aPosition");
                    e.vertexAttribPointer(_, 3, o, !1, 0, 0), e.enableVertexAttribArray(_), e.clearColor(1, 1, 1, 1), 
                    e.clear(u), e.viewport(0, 0, 1, 1), e.drawArrays(v, 0, 3);
                    var A = new Uint8Array(4);
                    return e.readPixels(0, 0, 1, 1, f, d, A), e.deleteProgram(h), e.deleteBuffer(p), 
                    A.join("");
                }(e), p = "801621810", _ = "8016218135", A = "80162181161", G = (null == r ? void 0 : r.isIpad) ? [ [ "a7", A, 12 ], [ "a8", _, 15 ], [ "a8x", _, 15 ], [ "a9", _, 15 ], [ "a9x", _, 15 ], [ "a10", _, 15 ], [ "a10x", _, 15 ], [ "a12", p, 15 ], [ "a12x", p, 15 ], [ "a12z", p, 15 ], [ "a14", p, 15 ], [ "m1", p, 15 ] ] : [ [ "a7", A, 12 ], [ "a8", _, 12 ], [ "a9", _, 15 ], [ "a10", _, 15 ], [ "a11", p, 15 ], [ "a12", p, 15 ], [ "a13", p, 15 ], [ "a14", p, 15 ] ];
                "80162181255" === h ? s = G.filter(function(e) {
                    return e[2] >= 14;
                }) : (s = G.filter(function(e) {
                    return e[1] === h;
                })).length || (s = G);
                return s.map(function(e) {
                    return "apple " + e[0] + " gpu";
                });
            }), a._RF.push({}, "5dbefuGBrhBG6ei+eJttDav", "deobfuscateAppleGPU", void 0), a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/AchievementData.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./SingletonBase.ts" ], function(t) {
    "use strict";
    var e, n, c;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy;
        }, function(t) {
            c = t.SingletonBase;
        } ],
        execute: function() {
            n._RF.push({}, "5dd9f/e/kBB3IICotOwZxmJ", "AchievementData", void 0);
            t("AchievementDataMgr", function(t) {
                function n() {
                    return t.apply(this, arguments) || this;
                }
                return e(n, t), n.prototype.addStatsCnt = function(t, e) {
                    void 0 === e && (e = 1);
                    var n = g.App.Account.getAchievement(t);
                    n.count += e, g.App.Account.setAchievement(t, n);
                }, n;
            }(c));
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ICannonBoxShape.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(n) {
    "use strict";
    var o, e, t, r, i, a, s;
    return {
        setters: [ function(n) {
            o = n.inheritsLoose, e = n.defineProperty, t = n.assertThisInitialized;
        }, function(n) {
            r = n.cclegacy, i = n._decorator, a = n.BoxColliderComponent, s = n.Component;
        } ],
        execute: function() {
            var c;
            r._RF.push({}, "5e8f9AA6zhKNY5/k1P5m4it", "ICannonBoxShape", void 0);
            var l = i.ccclass;
            n("ICannonBoxShape", l("ICannonBoxShape")(c = function(n) {
                function r() {
                    for (var o, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                    return o = n.call.apply(n, [ this ].concat(i)) || this, e(t(o), "_boxColliderComponent", null), 
                    o;
                }
                return o(r, n), r.prototype.start = function() {
                    this._boxColliderComponent = this.getComponent(a);
                }, r;
            }(s)) || c);
            r._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/CustomAdWx.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./CustomAdBase.ts" ], function(n) {
    "use strict";
    var t, o, i, s, c;
    return {
        setters: [ function(n) {
            t = n.inheritsLoose;
        }, function(n) {
            o = n.cclegacy;
        }, function(n) {
            i = n.Log;
        }, function(n) {
            s = n.ConstantCommon;
        }, function(n) {
            c = n.CustomAdBase;
        } ],
        execute: function() {
            o._RF.push({}, "609833TtJdFPr84zUn+I8oL", "CustomAdWx", void 0);
            n("CustomAdWx", function(n) {
                function o() {
                    return n.apply(this, arguments) || this;
                }
                t(o, n);
                var c = o.prototype;
                return c.create = function(n) {
                    var t = this;
                    this._adInstance && this.destory(), this._adInstance = window.wx.createCustomAd({
                        adUnitId: "",
                        adIntervals: 30 | this._config.adIntervals,
                        style: this._config.style
                    }), i.debug(this.constructor.name, "创建：", this._config), this._adInstance.onLoad(function() {
                        var o;
                        i.debug(t.constructor.name, '原生模板广告加载成功(${createCallback? "自动刷新":""})', t._config.adUnitId), 
                        null === (o = n) || void 0 === o || o(), n = null;
                    }), this._adInstance.onClose(function() {
                        i.debug(t.constructor.name, "原生模板广告关闭", t._config.adUnitId), t.isShow = !1, t._adInstance = null;
                    }), this._adInstance.onError(function(o) {
                        var s;
                        i.debug(t.constructor.name, "原生模板广告错误(" + (n ? "自动刷新" : "") + ")", t._config.adUnitId, o), 
                        t.isShow = !1, null === (s = n) || void 0 === s || s(), n = null;
                    }), this._adInstance.onHide(function() {
                        i.debug(t.constructor.name, "原生模板广告隐藏成功", t._config.adUnitId), t.isShow = !1;
                    });
                }, c.show = function() {
                    var n = this, t = function() {
                        var t;
                        null === (t = n._adInstance) || void 0 === t || t.show().then(function() {
                            n.isShow = !0, i.debug(n.constructor.name, "原生模板广告显示成功", n._config.adUnitId), n._positionType === s.POSITION_TYPE.BOTTOM && rd.Event.emit("menuUp");
                        }).catch(function(t) {
                            i.debug(n.constructor.name, "原生模板广告显示错误", n._config.adUnitId, t);
                        });
                    };
                    i.debug(this.constructor.name, "原生模板广告创建实例化", this._config.adUnitId), this._adInstance ? t() : this.create(t.bind(this));
                }, c.hide = function() {
                    var n, t;
                    this.isShow && (i.debug(this.constructor.name, "原生模板广告隐藏", this._config.adUnitId), 
                    null === (n = this._adInstance) || void 0 === n || null === (t = n.hide) || void 0 === t || t.call(n));
                }, c.destory = function() {
                    var n, t;
                    null === (n = this._adInstance) || void 0 === n || null === (t = n.destory) || void 0 === t || t.call(n), 
                    this._adInstance = null;
                }, o;
            }(c));
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ADDialog.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./ADMainPush.ts" ], function(t) {
    "use strict";
    var n, o, e, i, s, a, h, c, r, l, m, u, d, g;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, o = t.defineProperty, e = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, s = t._decorator, a = t.ButtonComponent, h = t.macro, c = t.UITransformComponent, 
            r = t.v3, l = t.LayoutComponent, m = t.instantiate, u = t.Component;
        }, function(t) {
            d = t.ConstantCommon;
        }, function(t) {
            g = t.ADMainPush;
        } ],
        execute: function() {
            var C;
            i._RF.push({}, "60986NYQGdNQb/ag37/Aa2R", "ADDialog", void 0);
            var f = s.ccclass;
            s.property, t("ADDialog", f("ADDialog")(C = function(t) {
                function i() {
                    for (var n, i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                    return n = t.call.apply(t, [ this ].concat(s)) || this, o(e(n), "backBtn", null), 
                    o(e(n), "bottomContent", null), o(e(n), "_move", 1), o(e(n), "count", 1), o(e(n), "dataList", []), 
                    o(e(n), "adMainPrefabs", null), o(e(n), "scrollView", null), n;
                }
                n(i, t);
                var s = i.prototype;
                return s.start = function() {
                    this.backBtn = this.node.getChildByName("backBtn").getComponent(a), this.backBtn.node.on("click", this.onBackGame, this), 
                    this.bottomContent = rd.Utils.getNodeByName(this.node, "content"), this.scrollView = rd.Utils.getNodeByName(this.node, "ScrollView"), 
                    this.initBottomView();
                }, s.onEnable = function() {
                    this.schedule(this.scrolling, 1 / 60, h.REPEAT_FOREVER, 1);
                }, s.onDisable = function() {
                    this.unschedule(this.scrolling);
                }, s.scrolling = function() {
                    1 === this._move && this.bottomContent.getPosition().y >= this.bottomContent.getComponent(c).height - this.scrollView.getComponent(c).height / 2 && (this._move = -1), 
                    -1 === this._move && this.bottomContent.getPosition().y <= this.scrollView.getComponent(c).height / 2 && (this._move = 1), 
                    this.bottomContent.setPosition(r(this.bottomContent.getPosition().x, this.bottomContent.getPosition().y + this._move, 0));
                }, s.initBottomView = function() {
                    this.count = 0;
                    this.createItem(this.bottomContent, 1.5), this.bottomContent.getComponent(l).spacingX = (this.bottomContent.getComponent(c).width - 441 - 20) / 2, 
                    this.bottomContent.getComponent(c).setContentSize(this.bottomContent.getComponent(c).width, 198.5 * Math.ceil(this.dataList.length / 3) + 10);
                }, s.createItem = function(t, n) {
                    var o = this;
                    if (!(this.count >= this.dataList.length)) {
                        var e = t.children[this.count], i = this.dataList[this.count];
                        if (e) {
                            var s = e.getComponent(g);
                            s.freash(i), s.setScale(n), this.count += 1, this.createItem(t, n);
                        } else this.adMainPrefabs ? this.createAdMain(t, n, i, this.adMainPrefabs) : rd.Asset.loadPrefab("adUI/ADMainPush", d.BUNDLE_NAME.ATOM).then(function(e) {
                            o.adMainPrefabs = e, o.createAdMain(t, n, i, o.adMainPrefabs);
                        });
                    }
                }, s.createAdMain = function(t, n, o, e) {
                    var i = m(e);
                    t.addChild(i);
                    var s = i.getComponent(g);
                    s.freash(o), s.setScale(n), this.count += 1, this.createItem(t, n);
                }, s.onBackGame = function() {
                    this.node.destroy();
                }, i;
            }(u)) || C);
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/BezierTween.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(e) {
    "use strict";
    var t, r, n, i, o;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, r = e.assertThisInitialized;
        }, function(e) {
            n = e.cclegacy, i = e.bezier, o = e.Tween;
        } ],
        execute: function() {
            e("bezierTween", function(e) {
                return new u(e);
            }), n._RF.push({}, "60de7prUqtFYp4qBW2gOc2E", "BezierTween", void 0);
            var u = function(e) {
                function n(t) {
                    var n;
                    return n = e.call(this) || this, e.prototype.target.call(r(n), t), n;
                }
                t(n, e);
                var o = n.prototype;
                return o.bezierTo = function(e, t, r, n, o) {
                    var u = 0;
                    return (o = o || Object.create(null)).progress = function(e, n, o, c) {
                        var s = 0 === u ? "x" : 1 === u ? "y" : "z";
                        return o = i(e, t[s], r[s], n, c), u = ++u < 3 ? u : 0, o;
                    }, this.to(e, n, o);
                }, o.projectile = function(e, t, r, n) {
                    var o = 0;
                    return (n = n || Object.create(null)).progress = function(e, r, n, u) {
                        return n = 1 === o ? i(e, t, t, r, u) : e + (r - e) * u, o = ++o < 3 ? o : 0, n;
                    }, this.to(e, r, n);
                }, n;
            }(o);
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/DragonBonesAttachUtil.ts", [ "cc" ], function() {
    "use strict";
    var t, a, e;
    return {
        setters: [ function(r) {
            t = r.cclegacy, a = r.Mat4, e = r.dragonBones;
        } ],
        execute: function() {
            t._RF.push({}, "6306eykdMpJSKKkJLQjAdJ7", "DragonBonesAttachUtil", void 0);
            var r = new a();
            e && (e.AttachUtil.prototype._syncAttachedNode = function() {
                if (this._inited) {
                    this._armatureNode.worldMatrix;
                    var t = null, a = this._armatureDisplay.isAnimationCached();
                    if (!a || !this._armatureDisplay || (t = this._armatureDisplay._curFrame && this._armatureDisplay._curFrame.boneInfos)) for (var e, i, s, n = this._armatureDisplay.sockets, o = this._armatureDisplay.socketNodes, c = this._armature.getBones(), l = n.length - 1; l >= 0; l--) {
                        var u = n[l], m = u.target;
                        if (m) if (m.isValid) {
                            var h = a ? t[u.boneIndex] : c[u.boneIndex];
                            h && (e = m, i = h.globalTransformMatrix, s = void 0, (s = r).m00 = i.a, s.m01 = i.b, 
                            s.m04 = -i.c, s.m05 = -i.d, s.m12 = i.tx, s.m13 = i.ty, e.matrix = r);
                        } else o.delete(u.path), n.splice(l, 1);
                    }
                }
            }), t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/WarCarItem.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./RDStatisticsManager.ts", "./UIGBase.ts" ], function(t) {
    "use strict";
    var e, n, o, i, s, r, a, l, c, p, d, u, m, h;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, o = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, s = t._decorator, r = t.Sprite, a = t.Label, l = t.Animation, c = t.Button, 
            p = t.UIOpacity;
        }, function(t) {
            d = t.Constants;
        }, function(t) {
            u = t.CustomEventID, m = t.EventResult;
        }, function(t) {
            h = t.UIGBase;
        } ],
        execute: function() {
            var v;
            i._RF.push({}, "65459n/2TpKmKUp47KAU74m", "WarCarItem", void 0);
            var y = s.ccclass;
            t("WarCarItem", y("WarCarItem")(v = function(t) {
                function i() {
                    for (var e, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(s)) || this, n(o(e), "frameSpt", null), 
                    n(o(e), "levelNode", null), n(o(e), "levelLbl", null), n(o(e), "iconSpt", null), 
                    n(o(e), "upgradeAnim", null), n(o(e), "unlockBtnSpt", null), n(o(e), "moneyNode", null), 
                    n(o(e), "moneyLbl", null), n(o(e), "tipsWordSpt", null), n(o(e), "itemIdx", 0), 
                    e;
                }
                e(i, t);
                var s = i.prototype;
                return s.onLoad = function() {
                    this.frameSpt = this.getComponent(r), this.levelNode = rd.Utils.getNodeByName(this.node, "level"), 
                    this.levelLbl = rd.Utils.getNodeComponent(this.levelNode, "levelLbl", a), this.iconSpt = rd.Utils.getNodeComponent(this.node, "icon", r), 
                    this.upgradeAnim = rd.Utils.getNodeComponent(this.node, "upgrade", l);
                    var t = rd.Utils.registerButtonEvent(this.node, "unlockBtn", this.onUnlockButton, this);
                    this.unlockBtnSpt = t.getComponent(r), this.moneyNode = rd.Utils.getNodeByName(t, "moneyNode"), 
                    this.moneyLbl = rd.Utils.getNodeComponent(this.moneyNode, "moneyLbl", a), this.tipsWordSpt = rd.Utils.getNodeByName(t, "tipsWord");
                }, s.onEnable = function() {
                    this._registerEvent(!0);
                }, s.init = function(t) {
                    void 0 === t && (t = this.itemIdx), this.itemIdx = t;
                }, s.updateUnlockBtn = function(t, e) {
                    var n = g.App.Account.gameMoney >= t, o = n && !e;
                    this.upgradeAnim.node.active = o, o && this.upgradeAnim.play(), this.unlockBtnSpt.spriteFrame = rd.SptFrame.getSpriteFrameByName("Common_Button_Frame" + (e ? 3 : n ? 1 : 2));
                    var i = this.unlockBtnSpt.getComponent(c);
                    if (i.interactable !== !e && (i.interactable = !e), this.tipsWordSpt.active = !(this.moneyNode.active = o), 
                    this.moneyNode.active && (this.moneyLbl.string = t.toString()), this.tipsWordSpt.active) if (this.tipsWordSpt.getChildByName("videoTxt").getComponent(r).spriteFrame = rd.SptFrame.getSpriteFrameByName("Weapon_Button_" + (e ? "MaxLv" : "Video")), 
                    e) this.tipsWordSpt.getChildByName("videoIcon").active = !1; else {
                        var s = !rd.Option.systemWXSwitch || rd.Option.systemWXSwitch && !rd.Option.gameSplashInterval;
                        this.tipsWordSpt.getChildByName("videoIcon").getComponent(p).opacity = s ? 255 : 80;
                    }
                }, s.unlockWarCar = function(t) {
                    var e = this, n = {
                        curDialog: this.getUIName(),
                        gameMoney: g.App.Account.gameMoney
                    };
                    g.App.Account.gameMoney >= t ? (n.btnType = "钞票解锁", g.App.Account.gameMoney -= t, 
                    this.upgradeWarCar(), rd.Stats.customEvent(u.custom_button_click, n)) : (n.btnType = "视频广告", 
                    rd.Stats.customEvent(u.custom_button_click, n, m.onStarted), this.showRewardAd({
                        success: function() {
                            e.upgradeWarCar(), rd.Stats.customEvent(u.custom_button_click, n);
                        },
                        fail: function() {
                            rd.Stats.customEvent(u.custom_button_click, n, m.onFailed);
                        }
                    }));
                }, s._registerEvent = function(t) {
                    var e = t ? "on" : "off";
                    rd.Event[e](d.EVENT_TYPE.UPDATE_CAR_ITEM, this.updateWarCarItem, this);
                }, s.onDisable = function() {
                    this._registerEvent(!1);
                }, i;
            }(h)) || v);
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/CsvManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./SingletonBase.ts" ], function(e) {
    "use strict";
    var t, r, n, i, s;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, r = e.defineProperty, n = e.assertThisInitialized;
        }, function(e) {
            i = e.cclegacy;
        }, function(e) {
            s = e.SingletonBase;
        } ],
        execute: function() {
            i._RF.push({}, "65ff7+DmWdH+r+zjMrJ3FXo", "CsvManager", void 0);
            var u = [ ",", ";", "\t", "|", "^" ], a = [ "\r\n", "\r", "\n" ], o = function(e, t, r, n) {
                return r instanceof Array ? "number" === r[t] ? Number(n[t]) : "boolean" === r[t] ? "true" === n[t] || "t" === n[t] || "1" === n[t] : n[t] : isNaN(Number(e)) ? "false" == e || "true" == e || "t" == e || "f" == e ? "true" === n[t] || "t" === n[t] || "1" === n[t] : n[t] : Number(n[t]);
            }, l = {
                STANDARD_DECODE_OPTS: {
                    skip: 0,
                    limit: !1,
                    header: !1,
                    cast: !1,
                    comment: ""
                },
                STANDARD_ENCODE_OPTS: {
                    delimiter: u[0],
                    newline: a[0],
                    skip: 0,
                    limit: !1,
                    header: !1
                },
                quoteMark: '"',
                doubleQuoteMark: '""',
                quoteRegex: /"/g,
                assign: function() {
                    for (var e = Array.prototype.slice.call(arguments), t = e[0], r = e.slice(1), n = 0, i = r.length; n < i; n++) for (var s in r[n]) t[s] = r[n][s];
                    return t;
                },
                map: function(e, t) {
                    for (var r = [], n = 0, i = e.length; n < i; n++) r[n] = t(e[n], n);
                    return r;
                },
                getType: function(e) {
                    return Object.prototype.toString.call(e).slice(8, -1);
                },
                getLimit: function(e, t) {
                    return !1 === e ? t : e;
                },
                buildObjectConstructor: function(e, t, r) {
                    return function(n) {
                        var i = new Object(), s = function(e, t) {
                            return i[e] = t;
                        };
                        return r ? e.forEach(function(e, i) {
                            s(e, o(t[i], i, r, n));
                        }) : e.forEach(function(e, r) {
                            s(e, o(t[r], r, null, n));
                        }), i;
                    };
                },
                buildArrayConstructor: function(e, t, r) {
                    return function(n) {
                        var i = new Array(t.length), s = function(e, t) {
                            return i[e] = t;
                        };
                        return r ? e.forEach(function(e, i) {
                            s(e, o(t[i], i, r, n));
                        }) : e.forEach(function(e, r) {
                            s(e, o(t[r], r, null, n));
                        }), i;
                    };
                },
                frequency: function(e, t, r) {
                    void 0 === r && (r = !1);
                    for (var n = 0, i = 0, s = this.getLimit(r, e.length); i < s && -1 !== (i = e.indexOf(t, i)); ) i += 1, 
                    n++;
                    return n;
                },
                mostFrequent: function(e, t, r) {
                    for (var n, i = t.length - 1; i >= 0; i--) this.frequency(e, t[i], r) > 0 && (n = t[i]);
                    return n || t[0];
                },
                unsafeParse: function(e, t, r) {
                    var n, i, s = e.split(t.newline);
                    function u(e) {
                        var r = e.shift();
                        if (r.indexOf('"') >= 0) {
                            for (var n = 0, i = 0, s = 0; e.length > 0 && (-1 !== (n = r.indexOf('"', i)) || s % 2 != 0); ) -1 !== n ? (i = n + 1, 
                            s++) : r = r + t.newline + e.shift();
                            var u, a = [], o = 0, l = 0, c = 0, h = r.length;
                            for (var f in r) if (r.hasOwnProperty(f)) {
                                var d = parseInt(f), v = r[f];
                                0 === d && '"' === v && (o++, l = 1), '"' === v && (o++, r[d - 1] === t.delimiter && l === d && l++), 
                                '"' === v && o % 2 == 0 && (r[d + 1] !== t.delimiter && d + 1 !== h || (c = d, u = r.substring(l, c), 
                                a.push(u), c = l = c + 2)), v === t.delimiter && o % 2 == 0 && ((c = d) > l ? (u = r.substring(l, c), 
                                a.push(u), c = l = c + 1) : c === l && (a.push(""), c = l = c + 1));
                            }
                            return (c = h) >= l && (u = r.substring(l, c), a.push(u)), a;
                        }
                        return r.split(t.delimiter);
                    }
                    for (t.skip > 0 && s.splice(t.skip), t.header ? (!0 === t.header ? (t.comment = u(s), 
                    t.cast = u(s), n = u(s)) : "Array" === this.getType(t.header) && (n = t.header), 
                    i = this.buildObjectConstructor(n, s[0].split(t.delimiter), t.cast)) : i = this.buildArrayConstructor(n, s[0].split(t.delimiter), t.cast); s.length > 0; ) {
                        var a = u(s);
                        a.length > 1 && r(i(a), n[0]);
                    }
                    return !0;
                },
                safeParse: function(e, t, r) {
                    t.delimiter;
                    var n = t.newline, i = e.split(n);
                    return t.skip > 0 && i.splice(t.skip), !0;
                },
                encodeCells: function(e, t, r) {
                    for (var n = e.slice(0), i = 0, s = n.length; i < s; i++) -1 !== n[i].indexOf(this.quoteMark) && (n[i] = n[i].replace(this.quoteRegex, this.doubleQuoteMark)), 
                    -1 === n[i].indexOf(t) && -1 === n[i].indexOf(r) || (n[i] = this.quoteMark + n[i] + this.quoteMark);
                    return n.join(t);
                },
                encodeArrays: function(e, t, r) {
                    var n = t.delimiter, i = t.newline;
                    t.header && "Array" === this.getType(t.header) && r(this.encodeCells(t.header, n, i));
                    for (var s = 0, u = this.getLimit(t.limit, e.length); s < u; s++) r(this.encodeCells(e[s], n, i));
                    return !0;
                },
                encodeObjects: function(e, t, r) {
                    var n, i, s = t.delimiter, u = t.newline;
                    for (var a in n = [], i = [], e[0]) n.push(a), i.push(e[0][a]);
                    !0 === t.header ? r(this.encodeCells(n, s, u)) : "Array" === this.getType(t.header) && r(this.encodeCells(t.header, s, u)), 
                    r(this.encodeCells(i, s));
                    for (var o = 1, l = this.getLimit(t.limit, e.length); o < l; o++) {
                        i = [];
                        for (var c = 0, h = n.length; c < h; c++) i.push(e[o][n[c]]);
                        r(this.encodeCells(i, s, u));
                    }
                    return !0;
                },
                parse: function(e, t, r) {
                    var n;
                    if ("Function" === this.getType(t) ? (r = t, t = {}) : "Function" !== this.getType(r) ? r = (n = []).push.bind(n) : n = [], 
                    t = this.assign({}, this.STANDARD_DECODE_OPTS, t), this.opts = t, !t.delimiter || !t.newline) {
                        var i = Math.min(48, Math.floor(e.length / 20), e.length);
                        t.delimiter = t.delimiter || this.mostFrequent(e, u, i), t.newline = t.newline || this.mostFrequent(e, a, i);
                    }
                    return this.unsafeParse(e, t, r) && (!(n.length > 0) || n);
                },
                encode: function(e, t, r) {
                    var n;
                    return "Function" === this.getType(t) ? (r = t, t = {}) : "Function" !== this.getType(r) && (r = (n = []).push.bind(n)), 
                    (t = this.assign({}, this.STANDARD_ENCODE_OPTS, t)).skip > 0 && (e = e.slice(t.skip)), 
                    ("Array" === this.getType(e[0]) ? this.encodeArrays : this.encodeObjects)(e, t, r) && (!(n.length > 0) || n.join(t.newline));
                }
            }, c = function(e) {
                function i() {
                    for (var t, i = arguments.length, s = new Array(i), u = 0; u < i; u++) s[u] = arguments[u];
                    return t = e.call.apply(e, [ this ].concat(s)) || this, r(n(t), "csvTables", {}), 
                    r(n(t), "csvTableForArr", {}), r(n(t), "tableCast", {}), r(n(t), "tableComment", {}), 
                    t;
                }
                t(i, e);
                var s = i.prototype;
                return s.addTable = function(e, t, r) {
                    if (!this.csvTables[e] || r) {
                        var n = {}, i = [];
                        l.parse(t, {
                            header: !0
                        }, function(e, t) {
                            n[e[t]] = e, i.push(e);
                        }), this.tableCast[e] = l.opts.cast, this.tableComment[e] = l.opts.comment, this.csvTables[e] = n, 
                        this.csvTableForArr[e] = i;
                    }
                }, s.getTableArr = function(e) {
                    return this.csvTableForArr[e];
                }, s.getTable = function(e) {
                    return this.csvTables[e];
                }, s.queryOne = function(e, t, r) {
                    var n = this.getTable(e);
                    if (!n) return null;
                    if (!t) return n[r];
                    for (var i in n) if (n.hasOwnProperty(i) && n[i][t] === r) return n[i];
                }, s.queryByID = function(e, t) {
                    return this.queryOne(e, null, t);
                }, s.queryAll = function(e, t, r) {
                    var n = this.getTable(e);
                    if (!n || !t) return null;
                    var i = {};
                    for (var s in n) n.hasOwnProperty(s) && n[s][t] === r && (i[s] = n[s]);
                    return i;
                }, s.queryIn = function(e, t, r) {
                    var n = this.getTable(e);
                    if (!n || !t) return null;
                    for (var i = {}, s = Object.keys(n), u = s.length, a = 0; a < u; a++) {
                        var o = n[s[a]];
                        r.indexOf(o[t]) > -1 && (i[s[a]] = o);
                    }
                    return i;
                }, s.queryByCondition = function(e, t) {
                    if (t.constructor !== Object) return null;
                    var r = this.getTable(e);
                    if (!r) return null;
                    for (var n = {}, i = Object.keys(r), s = i.length, u = Object.keys(t), a = u.length, o = 0; o < s; o++) {
                        for (var l = r[i[o]], c = !0, h = 0; h < a; h++) {
                            var f = u[h];
                            c = c && t[f] === l[f] && !n[i[o]];
                        }
                        c && (n[i[o]] = l);
                    }
                    return n;
                }, s.queryOneByCondition = function(e, t) {
                    if (t.constructor !== Object) return null;
                    var r = this.getTable(e);
                    if (!r) return null;
                    var n = Object.keys(t), i = n.length;
                    for (var s in r) {
                        for (var u = r[s], a = !0, o = 0; o < i; o++) {
                            var l = n[o];
                            a = a && t[l] === u[l];
                        }
                        if (a) return u;
                    }
                    return null;
                }, s.loadTable = function(e, t) {
                    var r = this;
                    void 0 === t && (t = null);
                    var n, i = this._getCsvName(e);
                    this.getTable(i) ? null === (n = t) || void 0 === n || n() : rd.Asset.loadTextAsset(e).then(function(e) {
                        var n;
                        r.addTable(e.name, e.text), null === (n = t) || void 0 === n || n();
                    });
                }, s._getCsvName = function(e) {
                    var t = e, r = e.lastIndexOf("/");
                    return -1 !== r && (t = e.slice(r + 1)), t;
                }, i;
            }(s);
            void 0 === window.rd && (window.rd = {});
            var h = e("default", c.getInstance());
            window.rd.Csv = h, i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/MapLvItem.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./RDStatisticsManager.ts", "./UIGBase.ts" ], function(t) {
    "use strict";
    var e, n, i, a, r, s, o, p, c, m, u;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, i = t.assertThisInitialized, a = t.asyncToGenerator;
        }, function(t) {
            r = t.cclegacy, s = t._decorator, o = t.Sprite, p = t.Button;
        }, function(t) {
            c = t.Constants;
        }, function(t) {
            m = t.CustomEventID;
        }, function(t) {
            u = t.UIGBase;
        } ],
        execute: function() {
            var _;
            r._RF.push({}, "66a43NrMPJFo4DL8pO4ONEm", "MapLvItem", void 0);
            var h = s.ccclass;
            t("MapLvItem", h("MapLvItem")(_ = function(t) {
                function r() {
                    for (var e, a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
                    return e = t.call.apply(t, [ this ].concat(r)) || this, n(i(e), "_itemSpt", null), 
                    n(i(e), "_itemBtn", null), n(i(e), "_wordSpt", null), n(i(e), "_signSpt", null), 
                    n(i(e), "_mapLv", 0), e;
                }
                e(r, t);
                var s = r.prototype;
                return s.onLoad = function() {
                    this._itemSpt = this.getComponent(o), this._itemBtn = this.getComponent(p), this._wordSpt = rd.Utils.getNodeComponent(this.node, "word", o), 
                    this._signSpt = rd.Utils.getNodeComponent(this.node, "sign", o), this._itemBtn.node.on(p.EventType.CLICK, this._onMapLvButton, this);
                }, s.init = function(t) {
                    this._mapLv = t + 1, this.updateData();
                }, s.updateData = function() {
                    var t = g.App.MapDataMgr.curMapLv === this._mapLv, e = g.App.MapDataMgr.getLocalData(this._mapLv).isUnlock;
                    if (this._signSpt.node.active = t || !e, this._itemBtn.interactable !== e && (this._itemBtn.interactable = e), 
                    this._signSpt.node.active && (this._signSpt.node.setPosition(t ? -54 : -57, t ? 28 : 39), 
                    this._signSpt.spriteFrame = rd.SptFrame.getSpriteFrameByName("World_Image_Sign" + (t ? 1 : 2))), 
                    1 !== this._mapLv) {
                        this._itemSpt.spriteFrame = rd.SptFrame.getSpriteFrameByName("World_Image_Board" + (e ? 1 : 2));
                        var n = rd.SptFrame.getSpriteFrameByName("World_Image_" + (e ? "Unlock" : "Lock") + "Word" + this._mapLv, !0);
                        n && (this._wordSpt.spriteFrame = n);
                    }
                }, s.getUIName = function() {
                    return c.UI_DIALOG_CHINESE_NAME.WORLD;
                }, s._onMapLvButton = function() {
                    var t = a(function*() {
                        g.App.MapDataMgr.curMapLv !== this._mapLv && (rd.UI.hideDialog(c.UI_DIALOG_NAME.WORLD), 
                        yield g.App.FadeInOutMgr.fadeIn(.6), g.App.MapDataMgr.curMapLv = this._mapLv, rd.Stats.customEvent(m.custom_button_click, {
                            curDialog: this.getUIName(),
                            btnType: "切换地图",
                            mapLv: this._mapLv
                        }));
                    });
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), r;
            }(u)) || _);
            r._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/NativeAdPc.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./NativeAdBase.ts" ], function(t) {
    "use strict";
    var e, i, a, c;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            i = t.cclegacy;
        }, function(t) {
            a = t.Log;
        }, function(t) {
            c = t.NativeAdBase;
        } ],
        execute: function() {
            i._RF.push({}, "676ebTaJ79FrawKUEov1+NH", "NativeAdPc", void 0);
            t("NativeAdPc", function(t) {
                function i(e) {
                    var i;
                    return (i = t.call(this, e) || this)._platName = "pc", i.create(), i;
                }
                e(i, t);
                var c = i.prototype;
                return c._fun = function() {
                    rd.Option.regionEnable && t.prototype._fun.call(this);
                }, c.load = function() {
                    var t;
                    a.debug(this.constructor.name, "原生广告加载开始", this._config.adUnitId), this._adItemData = {
                        icon: "http://sf6-be-pack.pglstatp-toutiao.com/img/ad-app-package/086d40fd460f53d2e5903493b1e4a84b~100x100.image",
                        imgUrlList: [ "http://lf6-sf-be-pack-sign.pglstatp-toutiao.com/ad.union.api/8e237dfcd6ce7e60983f5dde063585c7?x-expires=1942070400&x-signature=15t1ahgwfFGFsGaGlkesUS2de2E%3D" ],
                        title: "测试广告",
                        desc: "腾讯广告",
                        source: "腾讯广告"
                    }, this._showCallback || (a.debug(this.constructor.name, "原生广告加载成功更新使用的界面: ", this._config.adUnitId, this._showCallback), 
                    rd.Event.emit("clickNative", this._config.adUnitId)), null === (t = this._showCallback) || void 0 === t || t.success();
                }, i;
            }(c));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDStatisticsManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./SingletonBase.ts", "./RDCommand.ts", "./RDPlatformParam.ts" ], function(e) {
    "use strict";
    var t, n, a, i, o, s, c, m, _;
    return {
        setters: [ function(e) {
            t = e.defineProperty, n = e.inheritsLoose, a = e.assertThisInitialized;
        }, function(e) {
            i = e.cclegacy, o = e.sys;
        }, function(e) {
            s = e.Log;
        }, function(e) {
            c = e.SingletonBase;
        }, function(e) {
            m = e.RDCommand;
        }, function(e) {
            _ = e.RDPlatformParam;
        } ],
        execute: function() {
            var r, u, v, l, d;
            e({
                CustomEventID: void 0,
                EventID: void 0,
                EventResult: void 0,
                ResultID: void 0,
                StageEventType: void 0
            }), i._RF.push({}, "67887ivPnxLi4NT6U/GW4bL", "RDStatisticsManager", void 0), function(e) {
                e.onStarted = "onStarted", e.onSuccess = "onSuccess", e.onFailed = "onFailed", e.onCancelled = "onCancelled";
            }(r || (r = e("EventResult", {}))), function(e) {
                e.TOOLS = "tools", e.AWARD = "award";
            }(u || (u = e("StageEventType", {}))), function(e) {
                e[e.eventID_11 = 11] = "eventID_11", e[e.eventID_12 = 12] = "eventID_12", e[e.eventID_13 = 13] = "eventID_13", 
                e[e.eventID_14 = 14] = "eventID_14", e[e.eventID_15 = 15] = "eventID_15", e[e.eventID_16 = 16] = "eventID_16", 
                e[e.eventID_17 = 17] = "eventID_17", e[e.eventID_18 = 18] = "eventID_18", e[e.eventID_19 = 19] = "eventID_19", 
                e[e.eventID_20 = 20] = "eventID_20", e[e.eventID_201 = 201] = "eventID_201", e[e.eventID_202 = 202] = "eventID_202", 
                e[e.eventID_203 = 203] = "eventID_203", e[e.eventID_204 = 204] = "eventID_204", 
                e[e.eventID_205 = 205] = "eventID_205", e[e.eventID_206 = 206] = "eventID_206", 
                e[e.eventID_207 = 207] = "eventID_207", e[e.eventID_208 = 208] = "eventID_208", 
                e[e.eventID_209 = 209] = "eventID_209", e[e.eventID_210 = 210] = "eventID_210", 
                e[e.eventID_211 = 211] = "eventID_211";
            }(v || (v = e("EventID", {}))), function(e) {
                e.custom_user_subpackages = "custom_user_subpackages", e.custom_churn_load = "custom_churn_load", 
                e.custom_churn_privacy = "custom_churn_privacy", e.custom_churn_native_splash = "custom_churn_native_splash", 
                e.custom_ad_video = "custom_ad_video", e.custom_ad_native = "custom_ad_native", 
                e.custom_ad_native_show_report = "custom_ad_native_show_report", e.custom_open_view = "custom_open_view", 
                e.custom_button_click = "custom_button_click", e.custom_newyearpack_get = "custom_newyearpack_get", 
                e.custom_newyearpack_sign = "custom_newyearpack_sign", e.custom_start_game = "custom_start_game", 
                e.custom_new_sign = "custom_new_sign", e.custom_stage_enter = "custom_stage_enter", 
                e.custom_stage_success = "custom_stage_success", e.custom_stage_fail = "custom_stage_fail", 
                e.custom_game_revive = "custom_game_revive", e.custom_game_revive_times = "custom_game_revive_times", 
                e.custom_game_boss = "custom_game_boss";
            }(l || (l = e("CustomEventID", {}))), function(e) {
                e.SUCCESS = "0", e.FAIL = "1", e.NO = "2";
            }(d || (d = e("ResultID", {})));
            var g = function(e) {
                function i() {
                    for (var n, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                    return n = e.call.apply(e, [ this ].concat(o)) || this, t(a(n), "isUmaInit", !1), 
                    t(a(n), "_platformName", ""), n;
                }
                n(i, e);
                var c = i.prototype;
                return c.init = function() {
                    var e = _.ADPARAM[rd.Platform.platformType];
                    if (window[e.name] && window[e.name].uma) {
                        var t = _.ADPARAM.uma;
                        window[e.name].uma.init({
                            appKey: e.umeng_appKey,
                            useOpenid: !1,
                            debug: t.debug
                        }), this.isUmaInit = !0;
                    }
                }, c.login = function(e) {
                    void 0 === e && (e = r.onStarted);
                    var t = {
                        channel: rd.Platform.getPlatformName(),
                        eventResult: e
                    };
                    o.isNative && (o.platform === o.Platform.IOS ? window.jsb.reflection.callStaticMethod("TDManager", "login:", JSON.stringify(t)) : window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "JsToJava", "(Ljava/lang/String;)V", JSON.stringify(t)));
                }, c.customEvent = function(e, t, n, a) {
                    if (void 0 === n && (n = r.onSuccess), o.isNative) {
                        var i = {
                            type: m.CMD_DATA_STATISTICS,
                            eventId: e,
                            info: t,
                            eventResult: n,
                            result: a
                        };
                        o.platform === o.Platform.IOS ? window.jsb.reflection.callStaticMethod("TDManager", "statistics:", JSON.stringify(i)) : window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "JsToJava", "(Ljava/lang/String;)V", JSON.stringify(i));
                    } else {
                        var s = _.ADPARAM[rd.Platform.platformType].name;
                        window[s] && window[s].uma && (!this.isUmaInit && this.init(), window[s].uma.trackEvent(e, t));
                    }
                }, c.logout = function() {
                    o.isNative && (o.platform === o.Platform.IOS || window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "JsToJava", "(Ljava/lang/String;)V", JSON.stringify({})));
                }, c.stageStart = function(e, t) {
                    this.customEvent(l.custom_stage_enter, {
                        stageName: t
                    }), s.debug(this.constructor.name, "关卡开始" + e + t);
                    var n = _.ADPARAM[rd.Platform.platformType].name;
                    window[n] && window[n].uma && (!this.isUmaInit && this.init(), window[n].uma.stage.onStart({
                        stageId: e,
                        stageName: t
                    }));
                }, c.stageEnd = function(e, t, n) {
                    void 0 === n && (n = r.onSuccess), this.customEvent(n === r.onSuccess ? l.custom_stage_success : l.custom_stage_fail, {
                        stageName: t
                    });
                    var a = _.ADPARAM[rd.Platform.platformType].name;
                    window[a] && window[a].uma && (!this.isUmaInit && this.init(), window[a].uma.stage.onEnd({
                        stageId: e,
                        stageName: t,
                        event: n === r.onSuccess ? "complete" : "fail"
                    }));
                }, c.stageRunning = function(e, t, n, a) {
                    void 0 === n && (n = u.TOOLS);
                    var i = _.ADPARAM[rd.Platform.platformType].name;
                    window[i] && window[i].uma && (!this.isUmaInit && this.init(), window[i].uma.stage.onRunning({
                        stageId: e,
                        stageName: t,
                        event: n === u.TOOLS ? "tools" : "award",
                        params: a
                    }));
                }, c.onInitLevel = function(e, t) {
                    var n = _.ADPARAM[rd.Platform.platformType].name;
                    window[n] && window[n].uma && (!this.isUmaInit && this.init(), window[n].uma.level.onInitLevel({
                        levelId: e,
                        levelName: t
                    }));
                }, c.onSetLevel = function(e, t) {
                    var n = _.ADPARAM[rd.Platform.platformType].name;
                    window[n] && window[n].uma && (!this.isUmaInit && this.init(), window[n].uma.level.onSetLevel({
                        levelId: e,
                        levelName: t
                    }));
                }, c.revenue = function(e, t, n) {
                    var a = _.ADPARAM[rd.Platform.platformType].name;
                    window[a] && window[a].uma && (!this.isUmaInit && this.init(), window[a].uma.revenue({
                        group: "default",
                        money: e,
                        name: t,
                        desc: n
                    }));
                }, i;
            }(c);
            t(g, "TAG", "RDStatisticsManager"), t(g, "PAGE_COUNT", 100), void 0 === window.rd && (window.rd = {});
            var w = e("default", g.getInstance());
            window.rd.Stats = w, i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/VideoAdPc.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./VideoAdBase.ts" ], function(e) {
    "use strict";
    var t, c, i;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose;
        }, function(e) {
            c = e.cclegacy;
        }, function(e) {
            i = e.VideoAdBase;
        } ],
        execute: function() {
            c._RF.push({}, "6a30cXR8ftJfKJCyfdqkuh+", "VideoAdPc", void 0);
            e("VideoAdPc", function(e) {
                function c(t) {
                    var c;
                    return (c = e.call(this, t) || this)._platName = "pc", c.create(), c;
                }
                return t(c, e), c;
            }(i));
            c._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/BannerAdTt.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./BannerAdBase.ts" ], function(n) {
    "use strict";
    var t, e, r;
    return {
        setters: [ function(n) {
            t = n.inheritsLoose;
        }, function(n) {
            e = n.cclegacy;
        }, function(n) {
            r = n.BannerAdBase;
        } ],
        execute: function() {
            e._RF.push({}, "6aa91lIyDxKzoJbOH2qO83O", "BannerAdTt", void 0);
            n("BannerAdTt", function(n) {
                function e(t) {
                    var e;
                    return (e = n.call(this, t) || this)._platName = "tt", e;
                }
                return t(e, n), e;
            }(r));
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/VideoSelect.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(e) {
    "use strict";
    var t, i, o, n, c, s, r;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, i = e.defineProperty, o = e.assertThisInitialized;
        }, function(e) {
            n = e.cclegacy, c = e._decorator, s = e.Toggle, r = e.Component;
        } ],
        execute: function() {
            var h;
            n._RF.push({}, "6ab09Sb9hxHRqbp/qtMKqMu", "VideoSelect", void 0);
            var l = c.ccclass;
            e("VideoSelect", l("VideoSelect")(h = function(e) {
                function n() {
                    for (var t, n = arguments.length, c = new Array(n), s = 0; s < n; s++) c[s] = arguments[s];
                    return t = e.call.apply(e, [ this ].concat(c)) || this, i(o(t), "_toggle", void 0), 
                    t;
                }
                t(n, e);
                var c = n.prototype;
                return c.onLoad = function() {
                    this._toggle = this.node.getComponent(s);
                }, c.init = function() {
                    var e = rd.Utils.isLuck(rd.Option.showVideoSwitch);
                    this.node.active = rd.Option.systemWXSwitch && e, this.setIsCheck(!0);
                }, c.setIsCheck = function(e) {
                    this._toggle.isChecked = e;
                }, c.getIsChecked = function() {
                    return this._toggle.isChecked && this.node.active;
                }, n;
            }(r)) || h);
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/AssetsHelper.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Dictionary.ts", "./AssetsPackageDefine.ts", "./JsonManager.ts" ], function(e) {
    "use strict";
    var t, n, s, i, c, a;
    return {
        setters: [ function(e) {
            t = e.defineProperty;
        }, function(e) {
            n = e.cclegacy, s = e.sys;
        }, function(e) {
            i = e.Dictionary;
        }, function(e) {
            c = e.default;
        }, function(e) {
            a = e.default;
        } ],
        execute: function() {
            n._RF.push({}, "6c6c41XXHlBnoNltVO7ajyY", "AssetsHelper", void 0);
            var o = e("AssetsHelper", function() {
                function e() {}
                return e.init = function() {
                    e.Language = s.language;
                    var t = [];
                    a.getInstance().concatJosnPathList(t), e._assetDic.set(c.INIT_RES, t);
                }, e.initGame = function() {}, e.isChinese = function() {
                    return !0;
                }, e.getSceneAssets = function(e) {
                    return this._assetDic.containsKey(e) ? this._assetDic.get(e) : null;
                }, e;
            }());
            t(o, "Language", void 0), t(o, "COMMON_ATLAS", "res/atlas/common"), t(o, "COMMON_PREFABS_TOASTMESSAGE", "prefab/common/toastMessage"), 
            t(o, "_assetDic", new i()), n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/AudioDownLoader.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(n) {
    "use strict";
    var e, t, o;
    return {
        setters: [ function(n) {
            e = n.defineProperty;
        }, function(n) {
            t = n.cclegacy, o = n.sys;
        } ],
        execute: function() {
            t._RF.push({}, "6cb2539LfBAErtrDJ1NVX4u", "AudioDownLoader", void 0);
            var l = function() {
                function n() {}
                return n.getInstance = function() {
                    return null == n.singleInstance && (n.singleInstance = new n()), n.singleInstance;
                }, n.prototype.downloadAudio = function(n, e) {
                    if (/^https/.test(n.url)) {
                        var t = n.url.lastIndexOf("/"), l = n.url.substr(t + 1), s = new window.jsb.Downloader(), r = window.jsb.fileUtils.getWritablePath() + l;
                        console.log("下载地址==", r), o.isNative && (r = o.platform === o.Platform.IOS ? window.jsb.reflection.callStaticMethod("AudioManager", "getStoragePath", "") + l : window.jsb.reflection.callStaticMethod("com/rdgame/app_base/audio/AudioManager", "getStoragePath", "(Ljava/lang/String;)Ljava/lang/String;", "test") + l, 
                        console.log("原生下载地址==", r)), window.jsb.fileUtils.isFileExist(r) ? (console.log("已经下载了====" + r), 
                        n.url = r, n.rawUrl = r, n.name = l, e && e(null, n)) : (console.log("下载开始====" + n.url), 
                        s.createDownloadFileTask(n.url, r), console.log("下载开始====" + r), s.setOnFileTaskSuccess(function(t) {
                            console.log("下载成功" + JSON.stringify(t)), n.rawUrl = r, n.name = l, e(null, n);
                        }), s.setOnTaskError(function(n) {
                            console.log("下载失败" + JSON.stringify(n));
                        }));
                    } else e("path is error", null);
                }, n;
            }();
            e(l, "singleInstance", null);
            n("AudioDMgr", l.getInstance());
            t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/VideoTipDialog.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./UIBase.ts" ], function(t) {
    "use strict";
    var i, n, o, e, s, r, a;
    return {
        setters: [ function(t) {
            i = t.inheritsLoose, n = t.defineProperty, o = t.assertThisInitialized;
        }, function(t) {
            e = t.cclegacy, s = t._decorator;
        }, function(t) {
            r = t.ConstantCommon;
        }, function(t) {
            a = t.UIBase;
        } ],
        execute: function() {
            var l;
            e._RF.push({}, "6dfadPr5SRNUYAqMvhi0/nB", "VideoTipDialog", void 0);
            var c = s.ccclass;
            s.property, t("VideoTipDialog", c("VideoTipDialog")(l = function(t) {
                function e() {
                    for (var i, e = arguments.length, s = new Array(e), r = 0; r < e; r++) s[r] = arguments[r];
                    return i = t.call.apply(t, [ this ].concat(s)) || this, n(o(i), "cancelBtn", null), 
                    n(o(i), "okBtn", null), n(o(i), "_callback", null), n(o(i), "_clickTimes", 0), n(o(i), "_showBanner", !1), 
                    i;
                }
                i(e, t);
                var s = e.prototype;
                return s.onLoad = function() {
                    this.cancelBtn = rd.Utils.registerButtonEvent(this.node, "closeBtn", this._onClose, this), 
                    this.okBtn = rd.Utils.registerButtonEvent(this.node, "okBtn", this._onVideo, this), 
                    this.zIndex = r.UI_DIALOG_Z_INDEX.TOP;
                }, s.getUIName = function() {
                    return "微信激励视频提示";
                }, s.show = function(t) {
                    if (this._callback = t, console.log("激励视频广告", rd.Option.regionEnable, rd.Platform.sdk.isGameToGame(), rd.Option.gameSplashSwitch), 
                    !rd.Option.systemWXSwitch || !rd.Option.gameSplashSwitch) return this._callback(!1), 
                    void rd.UI.hideDialog(r.UI_DIALOG_NAME.VIDEOTIPDIALOG);
                }, s._onClose = function() {
                    this._callback(!1), rd.UI.hideDialog(r.UI_DIALOG_NAME.VIDEOTIPDIALOG);
                }, s._onVideo = function() {
                    this._callback(!0), rd.UI.hideDialog(r.UI_DIALOG_NAME.VIDEOTIPDIALOG);
                }, e;
            }(a)) || l);
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/GameUI.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./RDStatisticsManager.ts", "./UIGBase.ts" ], function(t) {
    "use strict";
    var n, i, e, o, a, s, r, u, c, l, _, p, h, d;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, i = t.defineProperty, e = t.assertThisInitialized, o = t.asyncToGenerator;
        }, function(t) {
            a = t.cclegacy, s = t._decorator, r = t.Sprite, u = t.Node, c = t.Tween, l = t.tween;
        }, function(t) {
            _ = t.Constants;
        }, function(t) {
            p = t.CustomEventID, h = t.EventResult;
        }, function(t) {
            d = t.UIGBase;
        } ],
        execute: function() {
            var B;
            a._RF.push({}, "6ed85rprbNO6IS/UEtXVFk5", "GameUI", void 0);
            var v = s.ccclass;
            t("GameUI", v("GameUI")(B = function(t) {
                function a() {
                    for (var n, o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                    return n = t.call.apply(t, [ this ].concat(a)) || this, i(e(n), "_tutorialOpa", null), 
                    i(e(n), "_desktopBtnNode", null), i(e(n), "_backCityBtnSpt", null), n;
                }
                n(a, t);
                var s = a.prototype;
                return s.onLoad = function() {
                    var t = this.node.getChildByName("top"), n = t.getChildByName("leftPanel");
                    rd.Utils.registerButtonEvent(n, "signBtn", this._onSignInButton, this), rd.Utils.registerButtonEvent(n, "turntableBtn", this._onTurntableButton, this), 
                    this._setOppoMoreGameBtn(), this._setDesktopButton(), this._setShareButton();
                    var i = t.getChildByName("rightPanel");
                    rd.Utils.registerButtonEvent(i, "settingBtn", this._onSettingButton, this);
                    var e = rd.Utils.registerButtonEvent(i, "backCityBtn", this._onBackCityButton, this);
                    this._backCityBtnSpt = e.getComponent(r);
                    var o = this.node.getChildByName("tutorial");
                    this._tutorialOpa = this.getOpacityComponent(o), this._tutorialOpa.opacity = g.App.Account.isShowMoveTutorial ? 255 : 0, 
                    this._initBackCityBtn(), this.adaptUIPanel(t);
                }, s.show = function() {
                    this._registerEvent(!0), rd.GameDataModel.playTimes += 1;
                }, s.hide = function() {
                    var t, n;
                    this._registerEvent(!1), null === (t = rd.Ads) || void 0 === t || t.hideBannerAd(), 
                    null === (n = rd.PushCtrl) || void 0 === n || n.setGamePlaying(!1);
                }, s.getUIName = function() {
                    return "游戏界面";
                }, s._initBackCityBtn = function(t) {
                    void 0 === t && (t = !1);
                    var n = this._backCityBtnSpt.node, i = g.App.Account.backCityData;
                    if (n.active = t || !i.isFree, !t && n.active) {
                        this._backCityBtnSpt.spriteFrame = rd.SptFrame.getSpriteFrameByName("Game_Button_BackCity" + (i.isVideo ? 3 : 2), !0);
                        var e = rd.Utils.getNodeByName(n, "finger");
                        null == e || e.destroy();
                    }
                }, s._registerEvent = function(t) {
                    var n = t ? "on" : "off";
                    rd.Event[n](u.EventType.TOUCH_MOVE, this._hideTutorial, this), rd.Event[n](_.EVENT_TYPE.SHOW_BACK_CITY_BTN, this._showBackCityBtn, this);
                }, s._hideTutorial = function() {
                    this._playTutorialAnim(!1);
                }, s._playTutorialAnim = function(t) {
                    if (rd.Event.off(u.EventType.TOUCH_MOVE, this._hideTutorial, this), g.App.Account.isShowMoveTutorial) {
                        !t && (g.App.Account.isShowMoveTutorial = !1), c.stopAllByTarget(this._tutorialOpa);
                        var n = t ? 255 : 0, i = t ? "cubicOut" : "cubicIn";
                        l(this._tutorialOpa).to(.25, {
                            opacity: n
                        }, {
                            easing: i
                        }).start();
                    }
                }, s._showBackCityBtn = function() {
                    this._initBackCityBtn(!0);
                }, s._onSignInButton = function() {
                    rd.UI.showDialog(_.UI_DIALOG_NAME.SIGN_IN, !0);
                }, s._onTurntableButton = function() {
                    rd.UI.showDialog(_.UI_DIALOG_NAME.TURNTABLE, !0);
                }, s._onSettingButton = function() {
                    rd.UI.showDialog(_.UI_DIALOG_NAME.SETTING);
                }, s._onBackCityButton = function() {
                    var t = this, n = g.App.Account.backCityData;
                    if (n.isFree) this._setBackCityData(!1), this._backToGameHub(); else if (n.isVideo) this._backToGameHub(); else {
                        var i = {
                            curDialog: this.getUIName(),
                            btnType: "视频广告"
                        };
                        rd.Stats.customEvent(p.custom_button_click, i, h.onStarted), this.showRewardAd({
                            success: function() {
                                t._setBackCityData(!0), t._backToGameHub(), rd.Stats.customEvent(p.custom_button_click, i);
                            },
                            fail: function() {
                                rd.Stats.customEvent(p.custom_button_click, i, h.onFailed);
                            }
                        });
                    }
                }, s._setBackCityData = function(t) {
                    var n = g.App.Account.backCityData;
                    t ? n.isVideo = !0 : n.isFree = !1, g.App.Account.backCityData = n, this._initBackCityBtn();
                }, s._backToGameHub = function() {
                    var t = o(function*() {
                        yield g.App.FadeInOutMgr.fadeIn(.75), rd.Event.emit(_.EVENT_TYPE.BACK_TO_GAME_HUB), 
                        this.scheduleOnce(function() {
                            g.App.FadeInOutMgr.fadeOut(.75);
                        }, .5), rd.Stats.customEvent(p.custom_open_view, {
                            btnType: "快速回城"
                        });
                    });
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), s._onMoreGameButton = function() {
                    rd.Ads.showGamePortalAd(), rd.Stats.customEvent(p.custom_open_view, {
                        btnType: "更多游戏"
                    });
                }, s._onNewDayButton = function() {
                    var t = g.App.Account.signInfo, n = new Date().getTime() - 864e5;
                    t.time = n, g.App.Account.signInfo = t;
                    var i = g.App.Account.turntableInfo;
                    i.time = n, g.App.Account.turntableInfo = i;
                }, s._onClearStorageButton = function() {
                    rd.Event.emit(_.EVENT_TYPE.CLEAR_STORAGE);
                }, a;
            }(d)) || B);
            a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ICannonSharedBody.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(n) {
    "use strict";
    var t, o, e;
    return {
        setters: [ function(n) {
            t = n.createClass, o = n.defineProperty;
        }, function(n) {
            e = n.cclegacy;
        } ],
        execute: function() {
            e._RF.push({}, "6fc00/W3hVOu6AMdcXlInUt", "ICannonSharedBody", void 0);
            n("ICannonSharedBody", function() {
                function n() {
                    o(this, "_body", void 0), o(this, "_world", void 0);
                }
                return t(n, [ {
                    key: "body",
                    get: function() {
                        return this._body;
                    },
                    set: function(n) {
                        this._body = n;
                    }
                }, {
                    key: "world",
                    get: function() {
                        return this._world;
                    },
                    set: function(n) {
                        this._world = n;
                    }
                } ]), n;
            }());
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ADMainPush.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./RDCommand.ts" ], function(e) {
    "use strict";
    var t, n, i, a, o, s, g, m, h, r, l, d, c, u, C, f, N;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, n = e.defineProperty, i = e.assertThisInitialized, a = e.createClass;
        }, function(e) {
            o = e.cclegacy, s = e._decorator, g = e.Size, m = e.LabelComponent, h = e.tween, 
            r = e.v3, l = e.Sprite, d = e.SpriteFrame, c = e.SpriteComponent, u = e.UITransformComponent, 
            C = e.UITransform, f = e.Component;
        }, function(e) {
            N = e.RDCommand;
        } ],
        execute: function() {
            var S;
            e("PUSH_TYPE", void 0), o._RF.push({}, "7123dNBm59LooYL/1yy38HG", "ADMainPush", void 0);
            var p, y = s.ccclass;
            !function(e) {
                e[e.PUSH_SINGLE = 4] = "PUSH_SINGLE", e[e.PUSH_Hor_BANNER = 5] = "PUSH_Hor_BANNER", 
                e[e.PUSH_VER_BANNER = 6] = "PUSH_VER_BANNER", e[e.PUSH_PORTALAD = 7] = "PUSH_PORTALAD";
            }(p || (p = e("PUSH_TYPE", {})));
            e("ADMainPush", y("ADMainPush")(S = function(e) {
                function o() {
                    for (var t, a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s];
                    return t = e.call.apply(e, [ this ].concat(o)) || this, n(i(t), "gameConfig", null), 
                    n(i(t), "gameIcon", null), n(i(t), "gameName", null), n(i(t), "pushType", p.PUSH_SINGLE), 
                    n(i(t), "_loadImage", !1), n(i(t), "initSize", new g(98, 119)), n(i(t), "initIconSize", new g(85, 85)), 
                    t;
                }
                t(o, e);
                var s = o.prototype;
                return s.onLoad = function() {
                    this.node.getChildByName("bg").active = !1, this.node.getChildByName("red").active = !1, 
                    this.gameName = this.node.getChildByName("gameName").getComponent(m), this.gameName.string = "", 
                    this.gameIcon = this.node.getChildByName("iconNode").getChildByName("icon"), rd.Utils.registerButtonEvent(this.node, "bg", this.toGame, this), 
                    this.setScale(1.2);
                    this.node.parent.parent.parent.parent.active = false;
                }, s.toGame = function() {
                    var e = this.gameConfig;
                    e.type = this.pushType, rd.Platform.sendData(N.CMD_TO_MINIPROGRAM, e), rd.Platform.sendData(N.CMD_DATA_STATISTICS, {
                        event: !0,
                        ad_type: N.STATISTICS_GAME_ICON_SHARE
                    });
                }, s.setPosition = function(e) {
                    this.node.setPosition(e);
                }, s.shake2D = function(e) {
                    var t = 30;
                    h(e).delay(1.5).by(.1, {
                        eulerAngles: r(0, 0, t)
                    }, {
                        easing: "sineOut"
                    }).by(.05, {
                        eulerAngles: r(0, 0, -30)
                    }, {
                        easing: "sineIn"
                    }).by(.1, {
                        eulerAngles: r(0, 0, -30)
                    }, {
                        easing: "sineOut"
                    }).by(.05, {
                        eulerAngles: r(0, 0, t)
                    }, {
                        easing: "sineIn"
                    }).by(.1, {
                        eulerAngles: r(0, 0, 15)
                    }, {
                        easing: "sineOut"
                    }).by(.05, {
                        eulerAngles: r(0, 0, -15)
                    }, {
                        easing: "sineIn"
                    }).by(.1, {
                        eulerAngles: r(0, 0, -15)
                    }, {
                        easing: "sineOut"
                    }).by(.05, {
                        eulerAngles: r(0, 0, 15)
                    }, {
                        easing: "sineIn"
                    }).union().repeatForever().start();
                }, s.freash = function(e) {
                    var t = this;
                    if (void 0 === e && (e = null), this.node.active && (!this.gameConfig || this._loadImage || this.gameConfig != e) && (this.gameConfig = e || rd.GameList.getRandGameConfig(), 
                    this.gameConfig && (this.gameConfig.url || this.gameConfig.icon))) {
                        this.gameConfig.name = this.gameConfig.name.substr(0, Math.min(this.gameConfig.name.length, 6));
                        var n = "adUI/ui/icon/" + this.gameConfig.url + "/spriteFrame";
                        this.gameConfig.icon ? (n = this.gameConfig.icon, this.gameName && (this.gameName.string = this.gameConfig.name), 
                        this._loadImage = !1, rd.Asset.loadImage(n, !0).then(function(e) {
                            t.node.getChildByName("bg").active = !0, t.node.getChildByName("red").active = !0, 
                            t.gameIcon && (t.gameIcon.getComponent(l).spriteFrame = d.createWithImage(e.image)), 
                            t._loadImage = !0;
                        })) : (this.gameName && (this.gameName.string = this.gameConfig.name), this._loadImage = !1, 
                        rd.Asset.loadTexture(n).then(function(e) {
                            t.node.getChildByName("bg").active = !0, t.node.getChildByName("red").active = !0, 
                            t.gameIcon.getComponent(c).spriteFrame = d.createWithImage(e.image), t._loadImage = !0;
                        }));
                    }
                }, s.setScale = function(e) {
                    e && (this.node.getComponent(u).setContentSize(this.initSize.width * e, this.initSize.height * e), 
                    this.node.getChildByName("gameName").getComponent(m).fontSize = 15 * e, this.node.getChildByName("gameName").getComponent(m).lineHeight = 15 * e, 
                    this.node.getChildByName("iconNode").getComponent(u).setContentSize(this.initIconSize.width * e, this.initIconSize.height * e));
                }, s.setAnchorPoint = function(e) {
                    this.node.getComponent(C).anchorPoint = e;
                }, a(o, [ {
                    key: "type",
                    set: function(e) {
                        this.pushType = e, p.PUSH_SINGLE;
                    }
                } ]), o;
            }(f)) || S);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/AppManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./AgentMgr.ts", "./FadeInOutMgr.ts", "./GunData.ts", "./ColliderData.ts", "./AccountData.ts", "./RocketData.ts", "./MoneyStack.ts", "./MapData.ts", "./popDialogUIManager.ts", "./GameScore.ts", "./Benchmark.ts", "./AchievementData.ts", "./GameData.ts", "./VehicleData.ts", "./FuelData.ts", "./SawData.ts", "./CustomMark.ts" ], function(t) {
    "use strict";
    var n, e, a, i, c, r, o, u, g, s, f, l, D, p, y, d, m, M, k, I, v;
    return {
        setters: [ function(t) {
            n = t.createClass, e = t.asyncToGenerator;
        }, function(t) {
            a = t.cclegacy, i = t.game;
        }, function(t) {
            c = t.AgentMgr;
        }, function(t) {
            r = t.FadeInOutMgr;
        }, function(t) {
            o = t.GunData;
        }, function(t) {
            u = t.ColliderData;
        }, function(t) {
            g = t.AccountModel;
        }, function(t) {
            s = t.RocketData;
        }, function(t) {
            f = t.MoneyStack;
        }, function(t) {
            l = t.MapDataMgr;
        }, function(t) {
            D = t.popDialogUIManager;
        }, function(t) {
            p = t.GameScore;
        }, function(t) {
            y = t.getGPUTier;
        }, function(t) {
            d = t.AchievementDataMgr;
        }, function(t) {
            m = t.GameData;
        }, function(t) {
            M = t.VehicleData;
        }, function(t) {
            k = t.FuelData;
        }, function(t) {
            I = t.SawData;
        }, function(t) {
            v = t.CustomMark;
        } ],
        execute: function() {
            a._RF.push({}, "713f1qi+69IcbZgSvd7raTv", "AppManager", void 0);
            var A = function() {
                function t() {}
                var a = t.prototype;
                return a.initPlatfom = function(t) {
                    void 0 === t && (t = !1), rd.Platform.initPlatfom(), rd.Audio.init(rd.Platform.platformType, t);
                }, a.init = function(t) {
                    var n = this;
                    rd.App.init(function() {
                        n._initGameTier(), n.FadeInOutMgr.init(), null == t || t();
                    });
                }, a._initGameTier = function() {
                    var t = e(function*() {
                        var t = yield y();
                        t && (t.tier = null == t.tier ? v.getDeviceTier() : t.tier, console.log("GPULEVEL", t.tier), 
                        t.tier < 1 && (i.frameRate = 30));
                    });
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), a.initLocalData = function() {
                    rd.App.initLocalData(), this.Account.init();
                    var t = this.Account, n = t.loginDays, e = new Date().getTime();
                    rd.Utils.isSameDay(e, n.time) || (n.count += 1, n.time = e, t.loginDays = n), rd.UI.popDialogUIMgr = new D();
                }, n(t, [ {
                    key: "GameData",
                    get: function() {
                        return m.getInstance();
                    }
                }, {
                    key: "FadeInOutMgr",
                    get: function() {
                        return r.getInstance();
                    }
                }, {
                    key: "AgentMgr",
                    get: function() {
                        return c.getInstance();
                    }
                }, {
                    key: "Account",
                    get: function() {
                        return g.getInstance();
                    }
                }, {
                    key: "Achievement",
                    get: function() {
                        return d.getInstance();
                    }
                }, {
                    key: "ColliderData",
                    get: function() {
                        return u.getInstance();
                    }
                }, {
                    key: "VehicleData",
                    get: function() {
                        return M.getInstance();
                    }
                }, {
                    key: "FuelData",
                    get: function() {
                        return k.getInstance();
                    }
                }, {
                    key: "SawData",
                    get: function() {
                        return I.getInstance();
                    }
                }, {
                    key: "GunData",
                    get: function() {
                        return o.getInstance();
                    }
                }, {
                    key: "RocketData",
                    get: function() {
                        return s.getInstance();
                    }
                }, {
                    key: "MapDataMgr",
                    get: function() {
                        return l.getInstance();
                    }
                }, {
                    key: "GameScore",
                    get: function() {
                        return p.getInstance();
                    }
                }, {
                    key: "MoneyStack",
                    get: function() {
                        return f.getInstance();
                    }
                } ]), t;
            }();
            void 0 === window.g && (window.g = {});
            var G = t("default", new A());
            window.g.App = G, a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/QuadTree.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./RectBounds.ts" ], function(t) {
    "use strict";
    var e, r, s, i;
    return {
        setters: [ function(t) {
            e = t.createClass, r = t.defineProperty;
        }, function(t) {
            s = t.cclegacy;
        }, function(t) {
            i = t.RectBounds;
        } ],
        execute: function() {
            s._RF.push({}, "71f1b0EM7lER5Rocluh7YPF", "QuadTree", void 0);
            t("QuadTree", function() {
                function t(t, e, s, i) {
                    void 0 === e && (e = 10), void 0 === s && (s = 5), void 0 === i && (i = 0), r(this, "_bounds", null), 
                    r(this, "_maxObjs", 0), r(this, "_maxLv", 0), r(this, "_level", 0), r(this, "_objectArr", []), 
                    r(this, "_subQuadTreeArr", []), this._bounds = t, this._maxObjs = e, this._maxLv = s, 
                    this._level = i;
                }
                var s = t.prototype;
                return s.insert = function(t) {
                    if (this._subQuadTreeArr.length > 0) for (var e = this.getQuadrants(t), r = 0, s = e.length; r < s; r++) this._subQuadTreeArr[e[r]].insert(t); else if (this._objectArr.push(t), 
                    this._objectArr.length > this._maxObjs && this._level < this._maxLv) {
                        this._subQuadTreeArr.length <= 0 && this.split();
                        for (var i = 0, n = this._objectArr.length; i < n; i++) for (var u = this._objectArr[i], h = this.getQuadrants(u), a = 0; a < h.length; a++) this._subQuadTreeArr[h[a]].insert(u);
                        this._objectArr = [];
                    }
                }, s.getQuadrants = function(t) {
                    var e = [], r = this._bounds.centerX, s = this._bounds.centerZ, i = t.bounds, n = i.minX < r, u = i.maxX > r, h = i.maxZ > s, a = i.minZ < s;
                    return u && h && e.push(0), n && h && e.push(1), n && a && e.push(2), u && a && e.push(3), 
                    e;
                }, s.split = function() {
                    var e = this._level + 1, r = this._bounds.centerX, s = this._bounds.centerZ, n = .5 * this._bounds.widthX, u = .5 * this._bounds.widthZ, h = .5 * n, a = .5 * u;
                    this._subQuadTreeArr[0] = new t(new i(r + h, s + a, n, u), this._maxObjs, this._maxLv, e), 
                    this._subQuadTreeArr[1] = new t(new i(r - h, s + a, n, u), this._maxObjs, this._maxLv, e), 
                    this._subQuadTreeArr[2] = new t(new i(r - h, s - a, n, u), this._maxObjs, this._maxLv, e), 
                    this._subQuadTreeArr[3] = new t(new i(r + h, s - a, n, u), this._maxObjs, this._maxLv, e);
                }, s.retrieve = function(t) {
                    var e = this._objectArr;
                    if (this._subQuadTreeArr.length > 0) for (var r = this.getQuadrants(t), s = 0, i = r.length; s < i; s++) e = e.concat(this._subQuadTreeArr[r[s]].retrieve(t));
                    return e = e.filter(function(t, r) {
                        return e.indexOf(t) >= r;
                    });
                }, s.delete = function(t) {
                    if (this._subQuadTreeArr.length > 0) for (var e = this.getQuadrants(t), r = 0, s = e.length; r < s; r++) this._subQuadTreeArr[e[r]].delete(t); else {
                        var i = this._objectArr.indexOf(t);
                        i >= 0 && this._objectArr.splice(i, 1);
                    }
                }, s.clear = function() {
                    this._objectArr = [];
                    for (var t = this._subQuadTreeArr.length, e = 0, r = t; e < r; e++) t > 0 && this._subQuadTreeArr[e].clear();
                    this._subQuadTreeArr = [];
                }, e(t, [ {
                    key: "bounds",
                    get: function() {
                        return this._bounds;
                    }
                } ]), t;
            }());
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/VideoAdHw.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./VideoAdBase.ts" ], function(e) {
    "use strict";
    var t, i, n;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose;
        }, function(e) {
            i = e.cclegacy;
        }, function(e) {
            n = e.VideoAdBase;
        } ],
        execute: function() {
            i._RF.push({}, "72395PUNXdAv5WzSwtomM4d", "VideoAdHw", void 0);
            e("VideoAdHw", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, t) || this)._platName = "qg", i.create(), i;
                }
                return t(i, e), i;
            }(n));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/DirectoryAsset.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(e) {
    "use strict";
    var t, r, n, c, s;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, r = e.createClass, n = e.defineProperty, c = e.assertThisInitialized;
        }, function(e) {
            s = e.cclegacy;
        } ],
        execute: function() {
            var i;
            s._RF.push({}, "725356k66hLUK2c5VArklVN", "DirectoryAsset", void 0);
            var o = cc._decorator, u = o.ccclass;
            o.property, e("default", u("DirectoryAsset")(i = function(e) {
                function s() {
                    for (var t, r = arguments.length, s = new Array(r), i = 0; i < r; i++) s[i] = arguments[i];
                    return t = e.call.apply(e, [ this ].concat(s)) || this, n(c(t), "_type", void 0), 
                    t;
                }
                t(s, e), s.create = function(e) {
                    var t = new s();
                    return t.setType(e), t;
                }, s.getType = function(e) {
                    return e instanceof s ? e.getType() : null;
                }, s.is = function(e) {
                    return e === s || e instanceof s;
                };
                var i = s.prototype;
                return i.getType = function() {
                    return this._type;
                }, i.setType = function(e) {
                    this._type = e;
                }, r(s, [ {
                    key: "name",
                    get: function() {
                        return s.name;
                    }
                } ]), s;
            }(cc.Asset)) || i);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDVIVOMiniPlatform.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./RDPlatformParam.ts", "./RDPlatformType.ts", "./RDPlatform.ts", "./IntertitalAdVivo.ts", "./BannerAdVivo.ts", "./VideoAdVivo.ts", "./CustomAdVivo.ts" ], function(t) {
    "use strict";
    var n, i, e, s, o, a, r, c, h, u, l;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose;
        }, function(t) {
            i = t.cclegacy;
        }, function(t) {
            e = t.Log;
        }, function(t) {
            s = t.ConstantCommon;
        }, function(t) {
            o = t.RDPlatformParam;
        }, function(t) {
            a = t.RDPlatformType;
        }, function(t) {
            r = t.RDPlatform;
        }, function(t) {
            c = t.IntertitalAdVivo;
        }, function(t) {
            h = t.BannerAdVivo;
        }, function(t) {
            u = t.VideoAdVivo;
        }, function(t) {
            l = t.CustomAdVivo;
        } ],
        execute: function() {
            i._RF.push({}, "73ac7Xvz95OkK0IzPLn1hP/", "RDVIVOMiniPlatform", void 0);
            t("RDVIVOMiniPlatform", function(t) {
                function i(n) {
                    return t.call(this, n) || this;
                }
                n(i, t);
                var r = i.prototype;
                return r.initAD = function() {
                    this._showGamePortalAd(null), this._hasShortcutInstalled = !0, t.prototype.initAD.call(this);
                }, r.createBanner = function() {
                    var t = o.ADPARAM[a.VIVOGame.toString()].banner_id;
                    return new h({
                        adUnitId: t
                    });
                }, r.initBanner = function() {
                    for (var t = o.ADPARAM[this.type.toString()].banner_preload_count || 1, n = 0; n < t; n++) {
                        var i = o.ADPARAM[this.type.toString()].banner_id, e = new h({
                            adUnitId: i,
                            style: {},
                            adIntervals: 60
                        });
                        this._bannerADInstances.push(e);
                    }
                }, r.initVideo = function() {
                    var t = o.ADPARAM[this.type.toString()].video_id;
                    this._videoBoxInstance = new u({
                        adUnitId: "adunit-48a5d8e1ce82b9d9"
                    });
                }, r.initIntertitalAd = function() {
                    var t = o.ADPARAM[this.type.toString()].interstital_id;
                    this._interstitialAdInstance = new c({
                        adUnitId: "adunit-6610afa34f8f7843"
                    });
                }, r.initCustomAd = function() {
                    this._customAdBannerInstance = new l({
                        style: {},
                        adUnitId: ""
                    }), this._customAdBannerInstance.positionType = s.POSITION_TYPE.BOTTOM, this._customAdInterstitialAdInstance = new l({
                        style: {},
                        adUnitId: ""
                    }), this._customAdInterstitialAdInstance.positionType = s.POSITION_TYPE.CENTER;
                }, r.initNative = function() {}, r.shareAppMessage = function(t) {}, r._showToast = function(t) {
                    this._api.showToast({
                        message: t
                    });
                }, r._gotoMiniGameByAppid = function(t) {
                    this._api.navigateToMiniProgram({
                        appId: t.packName,
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, r._vibrateShort = function(t) {
                    void 0 === t && (t = 50), 100 != t ? this.vibrate(t) : this.vibrateStrong();
                }, r.vibrateStrong = function() {
                    this._api.vibrateLong({
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, r.vibrate = function(t) {
                    new Date().getTime() - this._lastShakeTime < 100 || (this._lastShakeTime = new Date().getTime(), 
                    this._api.vibrateShort({
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    }));
                }, r._showSysBanner = function() {
                    if (!this._bannerADInstance || !this._bannerADInstance.isShow) {
                        var t = o.ADPARAM[a.VIVOGame.toString()].banner_preload_count || 1;
                        this._bannerShowIndex >= t && (this._bannerShowIndex = 0), e.debug(this.constructor.name, "调用banner" + this._bannerADInstances.length + " ==== " + this._bannerShowIndex), 
                        this._bannerADInstance && this._bannerADInstance.hide(), this._bannerADInstance = null;
                        var n = this._bannerADInstances[this._bannerShowIndex];
                        n.show({
                            success: function() {},
                            fail: function() {}
                        }), this._bannerADInstance = n, this._bannerShowIndex += 1;
                    }
                }, r._showBannerAd = function(t) {
                    var n = this;
                    if (this.isReviewed() || rd.Option.onlyVideo) e.debug(this.constructor.name, "审核中====="); else if (rd.Platform.getNativeAdSize() && rd.PushCtrl) console.log("显示原生banner"), 
                    rd.PushCtrl.showNativeBanner(); else {
                        var i, s;
                        if (console.log("显示模板in", !!this._customAdInterstitialAdInstance), console.log("显示模板in", null === (i = this._customAdInterstitialAdInstance) || void 0 === i ? void 0 : i.isShow), 
                        this._customAdInterstitialAdInstance && this._customAdInterstitialAdInstance.isShow) return;
                        if (console.log("显示模板banner", !!this._customAdBannerInstance), console.log("显示模板banner", null === (s = this._customAdBannerInstance) || void 0 === s ? void 0 : s.isShow), 
                        !this._customAdBannerInstance || !this._customAdBannerInstance.isShow) {
                            var a = o.ADPARAM[this.type.toString()].custom_banner_id, r = rd.Utils.random(0, a.length - 1);
                            this._customAdBannerInstance.setConfig({
                                style: {},
                                adUnitId: a[r]
                            }), this._customAdBannerInstance.show({
                                success: function() {
                                    n._hideBannerAd(!0);
                                },
                                fail: function() {
                                    n._showSysBanner();
                                }
                            });
                        }
                    }
                }, r._showGameBannerAd = function(t) {
                    if (e.debug(this.constructor.name, "vivo横幅广告显示"), !this._gameBannerADInstance) {
                        e.debug(this.constructor.name, "创建oppo横幅广告");
                        var n = o.ADPARAM[a.VIVOGame.toString()].game_banner_id;
                        this._api.createBoxBannerAd ? (this._gameBannerADInstance = this._api.createBoxBannerAd({
                            posId: n
                        }), this._gameBannerADInstance.onError(function(t) {
                            e.debug(this.constructor.name, "盒子横幅广告加载失败", JSON.stringify(t));
                        })) : e.debug(this.constructor.name, "暂不支持互推盒子相关 API");
                    }
                    this._gameBannerADInstance && this._gameBannerADInstance.show().then(function() {
                        e.debug(this.constructor.name, "vivo横幅广告 显示成功"), setTimeout(function() {
                            rd.Event.emit("menuUp");
                        }, .1);
                    }).catch(function(t) {
                        e.debug(this.constructor.name, "vivo横幅广告 显示失败:" + t.errCode + "," + t.errMsg);
                    });
                }, r._hideGameBannerAd = function(t) {
                    e.debug(this.constructor.name, "vivo横幅广告隐藏"), null != this._gameBannerADInstance && (this._gameBannerADInstance.destroy(), 
                    this._gameBannerADInstance = null);
                }, r._showGamePortalAd = function(t) {
                    var n = this;
                    if (this._gamePortalADInstance = null, this._isShowGamePortalAd = !0, !this._gamePortalADInstance) {
                        var i = o.ADPARAM[a.VIVOGame.toString()].game_portal_id;
                        this._api.createBoxPortalAd ? (console.log(this.constructor.name, "_showGamePortalAd_" + i), 
                        this._gamePortalADInstance = this._api.createBoxPortalAd({
                            posId: i,
                            marginTop: this._systemInfo.screenHeight / 2
                        }), this._gamePortalADInstance.onError(function(t) {
                            console.log(n.constructor.name, "互推盒子九宫格广告 错误" + JSON.stringify(t)), n._isShowGamePortalAd = !1;
                        }), this._gamePortalADInstance.onClose(function() {
                            console.log(n.constructor.name, "互推盒子九宫格广告关闭"), n._isShowGamePortalAd = !1, n._gamePortalADInstance.isDestroyed || n._gamePortalADInstance.show();
                        }), this._gamePortalADInstance.onShow(function(t) {
                            n._hideBannerAd(null);
                        }), this._gamePortalADInstance.show().then(function() {}).catch(function(t) {
                            console.log("show fail with:" + t.errCode + "," + t.errMsg);
                        })) : console.log(this.constructor.name, "快应用平台版本号低于1076，暂不支持互推盒子相关 API");
                    }
                }, r._hideGamePortalAd = function(t) {
                    this._gamePortalADInstance && (this._gamePortalADInstance.isDestroyed = !0, this._gamePortalADInstance.destroy(), 
                    this._gamePortalADInstance = null);
                }, r._showVideo = function(t) {
                    this.isReviewed() ? this._rewardCaback && this._rewardCaback.success(null) : (e.debug(this.constructor.name, "准备激励广告 展示开始"), 
                    this._videoBoxInstance.show(this._rewardCaback));
                }, r._showIntertitalAd = function(t) {
                    var n = this;
                    if (!this.isReviewed()) {
                        var i = o.ADPARAM[this.type.toString()].custom_intersitial_id, e = rd.Utils.random(0, i.length - 1);
                        this._customAdInterstitialAdInstance.setConfig({
                            adUnitId: i[e],
                            style: {
                                top: this._systemInfo.screenHeight / 2 - 150,
                                left: 0
                            }
                        }), this._customAdInterstitialAdInstance.show({
                            success: function() {},
                            fail: function() {
                                n._interstitialAdInstance.show();
                            }
                        });
                    }
                }, r._createNativeAd = function(t) {
                    if (this.isReviewed() || rd.Option.onlyVideo) return e.debug(this.constructor.name, "审核中====="), 
                    null == t ? void 0 : t.fail();
                    if (!this.natvieAds) return e.debug(this.constructor.name, "原生广告没有数据, 稍后重试"), null == t ? void 0 : t.fail();
                    var n = this._getNative();
                    e.debug(this.constructor.name, "获取原生广告", n._config.adUnitId), null == t || t.success(n);
                }, r._createShortcutInstalled = function(t) {
                    var n = this;
                    this._api.hasShortcutInstalled({
                        success: function(t) {
                            e.debug(n.constructor.name, "判断图标未存在时，创建图标" + t), n._hasShortcutInstalled = t;
                        },
                        fail: function() {}
                    });
                }, r._installShortcut = function(t) {
                    var n = this;
                    e.debug(this.constructor.name, "各个平台处理"), this._api.installShortcut({
                        success: function() {
                            e.debug(n.constructor.name, "各个平台处理==="), n._hasShortcutInstalled = !1, n._shortCutInstalledCaback && n._shortCutInstalledCaback.success(null);
                        },
                        fail: function(t) {
                            e.debug(this.constructor.name, "各个平台处理1111111==="), this._shortCutInstalledCaback && this._shortCutInstalledCaback.fail();
                        },
                        complete: function() {}
                    });
                }, r._login = function(n) {
                    var i = this;
                    this._systemInfo.platformVersionCode >= 1063 ? this._api.getUserInfo().then(function(s) {
                        if (s.data) {
                            var o = "用户信息:" + JSON.stringify(s.data);
                            e.debug(i.constructor.name, o), n.nickName = s.data.nickName, n.headId = s.data.biggerAvatar;
                        }
                        t.prototype._login.call(i, n);
                    }, function(s) {
                        e.debug(i.constructor.name, "获取用户信息失败" + JSON.stringify(s)), t.prototype._login.call(i, n);
                    }) : t.prototype._login.call(this, n);
                }, r.isShowNativeAd = function(t) {
                    return !1;
                }, r.isShowPrivacy = function() {
                    return !this.isBtnFadeIn();
                }, r.isMoreGameBtn = function() {
                    return !1;
                }, r.exitGame = function() {
                    this._api.exitApplication({});
                }, i;
            }(r));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/BannerAdPc.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./BannerAdBase.ts" ], function(n) {
    "use strict";
    var e, t, r, o, c, s;
    return {
        setters: [ function(n) {
            e = n.inheritsLoose, t = n.defineProperty, r = n.assertThisInitialized;
        }, function(n) {
            o = n.cclegacy;
        }, function(n) {
            c = n.Log;
        }, function(n) {
            s = n.BannerAdBase;
        } ],
        execute: function() {
            o._RF.push({}, "73b36fmxwNHmbOoCpgNmJBa", "BannerAdPc", void 0);
            n("BannerAdPc", function(n) {
                function o(e) {
                    var o;
                    return o = n.call(this, e) || this, t(r(o), "_showCallback", void 0), o._platName = "pc", 
                    o.create(), o;
                }
                e(o, n);
                var s = o.prototype;
                return s.create = function(n) {
                    c.debug(this.constructor.name, "bannerAd 创建");
                }, s.show = function(n) {
                    c.debug(this.constructor.name, "bannerAd 显示成功");
                }, s.hide = function() {
                    c.debug(this.constructor.name, "bannerAd 隐藏成功");
                }, s.destroy = function() {
                    c.debug(this.constructor.name, "bannerAd 删除成功");
                }, o;
            }(s));
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDCoralPlatform.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./RDPlatform.ts" ], function(t) {
    "use strict";
    var a, c, n, i, s, o;
    return {
        setters: [ function(t) {
            a = t.inheritsLoose, c = t.defineProperty, n = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy;
        }, function(t) {
            s = t.Log;
        }, function(t) {
            o = t.RDPlatform;
        } ],
        execute: function() {
            i._RF.push({}, "767cdw3GdtE370tKAFVgvPA", "RDCoralPlatform", void 0);
            t("RDCoralPlatform", function(t) {
                function i(a) {
                    var i;
                    return i = t.call(this, a) || this, c(n(i), "vibrateInterval", null), i;
                }
                a(i, t);
                var o = i.prototype;
                return o.initAD = function() {
                    var t, a, c, n = "//h5.gametoom.com/interface/coralH5GameSdk.js";
                    s.debug(this.constructor.name, "H5 SDK接入全局只需运行一次"), t = document, a = t.getElementsByTagName("head")[0], 
                    (c = t.createElement("script")).async = !0, c.src = n, a && a.insertBefore(c, a.firstChild);
                }, o._initSdk = function(t) {
                    s.debug(this.constructor.name, "初始化参数" + JSON.stringify(t.data));
                    var a = this;
                    window.CoralH5GameSdk.setLogoutCallback({
                        success: function(t) {
                            s.debug(this.constructor.name, "sdk登出成功, 可以跳转到游戏登录界面" + JSON.stringify(t)), a._login({
                                data: {},
                                callback: {
                                    success: function() {},
                                    fail: function() {}
                                }
                            });
                        },
                        fail: function(t) {
                            s.debug(this.constructor.name, "sdk登出回调" + JSON.stringify(t));
                        }
                    }), window.CoralH5GameSdk.initCoral(t.data, {
                        success: function(a) {
                            t.callback && t.callback.success(null), s.debug(this.constructor.name, "返回" + JSON.stringify(a));
                        },
                        fail: function(a) {
                            t.callback && t.callback.fail();
                        }
                    });
                }, o._login = function(t) {
                    s.debug(this.constructor.name, "登录参数" + JSON.stringify(t.data)), window.CoralH5GameSdk.login({
                        success: function(a) {
                            t.callback && t.callback.success(null), s.debug(this.constructor.name, "返回" + JSON.stringify(a));
                        },
                        fail: function(a) {
                            t.callback && t.callback.fail();
                        }
                    });
                }, o._logOut = function(t) {
                    s.debug(this.constructor.name, "登出参数" + JSON.stringify(t.data)), window.CoralH5GameSdk.logout();
                }, o._sysData = function(t) {
                    s.debug(this.constructor.name, "数据参数" + JSON.stringify(t.data)), window.CoralH5GameSdk.syncData(t.data, {
                        success: function(a) {
                            t.callback && t.callback.success(null), s.debug(this.constructor.name, "返回" + JSON.stringify(a));
                        },
                        fail: function(a) {
                            t.callback && t.callback.fail();
                        }
                    });
                }, o._exitGame = function(t) {
                    s.debug(this.constructor.name, "退出参数" + JSON.stringify(t.data)), window.CoralH5GameSdk.exit(t.data, {
                        success: function(a) {
                            t.callback && t.callback.success(null), s.debug(this.constructor.name, "返回" + JSON.stringify(a));
                        },
                        fail: function(a) {
                            t.callback && t.callback.fail();
                        }
                    });
                }, o._pay = function(t) {
                    s.debug(this.constructor.name, "支付参数" + JSON.stringify(t.data)), window.CoralH5GameSdk.pay(t.data, {
                        success: function(a) {
                            t.callback && t.callback.success(null), s.debug(this.constructor.name, "返回" + JSON.stringify(a));
                        },
                        fail: function(a) {
                            t.callback && t.callback.fail();
                        }
                    });
                }, i;
            }(o));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/VideoAdWx.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./VideoAdBase.ts" ], function(n) {
    "use strict";
    var i, t, o, s, a, e, r;
    return {
        setters: [ function(n) {
            i = n.inheritsLoose, t = n.defineProperty, o = n.assertThisInitialized;
        }, function(n) {
            s = n.cclegacy;
        }, function(n) {
            a = n.Log;
        }, function(n) {
            e = n.ConstantCommon;
        }, function(n) {
            r = n.VideoAdBase;
        } ],
        execute: function() {
            s._RF.push({}, "7682anmmg1P7rYVLNQEpBhy", "VideoAdWx", void 0);
            n("VideoAdWx", function(n) {
                function s(i) {
                    var s;
                    return s = n.call(this, i) || this, t(o(s), "_isFirst", !0), s._platName = "wx", 
                    s.create(), s;
                }
                i(s, n);
                var r = s.prototype;
                return r.create = function(n) {
                    var i, t, o, s, r, c, d, u = this;
                    a.debug("创建 激励视频"), this._adInstance = null === (i = window[this._platName]) || void 0 === i ? void 0 : i.createRewardedVideoAd({
                        adUnitId: "adunit-48a5d8e1ce82b9d9",
                        posId: this._config.adUnitId,
                        success: function(n) {
                            a.debug(u.constructor.name, "激励视频 创建成功", u._config.adUnitId);
                        },
                        fail: function(n, i) {
                            a.debug(u.constructor.name, "激励视频 创建失败: " + n + "," + i);
                        },
                        complete: function() {
                            a.debug(u.constructor.name, "激励视频 创建完成");
                        }
                    }), a.debug(this.constructor.name, "创建 激励视频1"), null === (t = this._adInstance) || void 0 === t || null === (o = t.onLoad) || void 0 === o || o.call(t, function() {
                        a.debug(u.constructor.name, "激励视频 加载成功"), !u._isShow && u._rewardCaback && (u._adInstance.show(), 
                        a.debug(u.constructor.name, "激励视频加载成功 开始播放")), u._isShow = !0;
                    }), null === (s = this._adInstance) || void 0 === s || null === (r = s.onError) || void 0 === r || r.call(s, function(n) {
                        var i;
                        a.debug(u.constructor.name, "激励视频 错误", JSON.stringify(n)), rd.UI.showTipMessage("暂无广告,广告加载中..."), 
                        null === (i = u._rewardCaback) || void 0 === i || i.fail(), u._isShow = !1;
                    }), null === (c = this._adInstance) || void 0 === c || null === (d = c.onClose) || void 0 === d || d.call(c, function(n) {
                        var i, t;
                        n && n.isEnded || void 0 === n ? (a.debug(u.constructor.name, "正常播放结束，可以下发游戏奖励"), 
                        null === (i = u._rewardCaback) || void 0 === i || i.success(null), u._rewardCaback = null, 
                        u._isShow = !1, u._isFirst = !0) : (console.log("是否第一次播放广告", u._isFirst), u._isFirst ? (u._isFirst = !1, 
                        rd.UI.showDialog(e.UI_DIALOG_NAME.VIDEOTIPDIALOG, function(n) {
                            var i;
                            n ? u.show(u._rewardCaback) : (a.debug(u.constructor.name, "播放中途退出，不下发游戏奖励"), null === (i = u._rewardCaback) || void 0 === i || i.fail(), 
                            u._rewardCaback = null, u._isShow = !1, u._isFirst = !0);
                        })) : (a.debug(u.constructor.name, "播放中途退出，不下发游戏奖励"), null === (t = u._rewardCaback) || void 0 === t || t.fail(), 
                        u._rewardCaback = null, u._isShow = !1, u._isFirst = !0));
                    });
                }, r.show = function(n) {
                    var i = this;
                    this._rewardCaback = n, a.debug(this.constructor.name, "显示激励视频", this._isFirst, JSON.stringify(this._config.adUnitId)), 
                    this._adInstance.load().then(function() {
                        i._adInstance.show(), i._isShow = !0;
                    });
                }, r.showAgain = function() {}, s;
            }(r));
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/NativeAdOppo.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./NativeAdBase.ts" ], function(t) {
    "use strict";
    var e, i, n;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            i = t.cclegacy;
        }, function(t) {
            n = t.NativeAdBase;
        } ],
        execute: function() {
            i._RF.push({}, "77b50MNlHJIUqvqDl5dZe5G", "NativeAdOppo", void 0);
            t("NativeAdOppo", function(t) {
                function i(e) {
                    var i;
                    return (i = t.call(this, e) || this)._platName = "qg", i.create(), i;
                }
                return e(i, t), i;
            }(n));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/NativeAdBase.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./RDStatisticsManager.ts" ], function(t) {
    "use strict";
    var a, i, n, d, o, e, s;
    return {
        setters: [ function(t) {
            a = t.createClass, i = t.defineProperty;
        }, function(t) {
            n = t.cclegacy, d = t.director, o = t.macro;
        }, function(t) {
            e = t.Log;
        }, function(t) {
            s = t.CustomEventID;
        } ],
        execute: function() {
            n._RF.push({}, "79b9biOr2BIs7DI8bciuhx4", "NativeAdBase", void 0);
            t("NativeAdBase", function() {
                function t(t) {
                    i(this, "_platName", void 0), i(this, "_config", void 0), i(this, "_adInstance", void 0), 
                    i(this, "_isShow", void 0), i(this, "_adItemData", null), i(this, "_showCallback", void 0), 
                    this._config = t;
                }
                var n = t.prototype;
                return n._fun = function() {
                    var t = this, a = Math.max(this._config.adDelay ? this._config.adDelay : 0, 100) / 1e3, i = (this._config.adIntervals ? this._config.adIntervals : 4e4) / 1e3;
                    e.debug(this.constructor.name, "原生广告初始化", a, i, this._config.adUnitId), d.getScheduler().schedule(function() {
                        t.load();
                    }, rd.UI.persistRootNode, i, o.REPEAT_FOREVER, a, !1);
                }, n.create = function(t) {
                    var a, i, n, d, o, s = this;
                    this._adInstance = null === (a = window[this._platName]) || void 0 === a ? void 0 : a.createNativeAd({
                        adUnitId: this._config.adUnitId,
                        posId: this._config.adUnitId,
                        success: function(t) {
                            e.debug(s.constructor.name, "创建原生广告实例成功", s._config.adUnitId);
                        },
                        fail: function(t, a) {
                            e.debug(s.constructor.name, "创建原生广告实例失败", JSON.stringify(t), s._config.adUnitId);
                        },
                        complete: function() {
                            e.debug(s.constructor.name, "创建原生广告实例完成");
                        }
                    }), null === (i = this._adInstance) || void 0 === i || null === (n = i.onLoad) || void 0 === n || n.call(i, function(t) {
                        var a, i;
                        (e.debug(s.constructor.name, "原生广告加载成功: " + JSON.stringify(t), s._config.adUnitId), 
                        t.adList.length > 0) ? (s._adItemData = t.adList[0], s.reportAdShow(), s._showCallback || (e.debug(s.constructor.name, "原生广告加载成功更新使用的界面: ", s._config.adUnitId, s._showCallback), 
                        rd.Event.emit("clickNative", s._config.adUnitId)), null === (a = s._showCallback) || void 0 === a || a.success()) : (e.debug(s.constructor.name, "原生广告加载失败 没有数据"), 
                        s._adItemData = null, null === (i = s._showCallback) || void 0 === i || i.fail(), 
                        s._showCallback || rd.Event.emit("clickNative", s._config.adUnitId));
                    }), null === (d = this._adInstance) || void 0 === d || null === (o = d.onError) || void 0 === o || o.call(d, function(t) {
                        var a;
                        e.debug(s.constructor.name, "原生广告加载失败:" + JSON.stringify(t), s._config.adUnitId), 
                        s._adItemData = null, null === (a = s._showCallback) || void 0 === a || a.fail(), 
                        s._showCallback || rd.Event.emit("clickNative", s._config.adUnitId);
                    });
                    var c = Math.max(this._config.adDelay ? this._config.adDelay : 0, 1e3);
                    e.debug(this.constructor.name, "原生广告初始化", c, this._config.adIntervals, this._config.adUnitId), 
                    this._fun();
                }, n.load = function() {
                    var t, a;
                    e.debug(this.constructor.name, "原生广告加载开始", this._config.adUnitId, !!this._adInstance), 
                    this._adInstance && (null === (t = (a = this._adInstance).load) || void 0 === t || t.call(a));
                }, n.show = function(t) {
                    this._showCallback = t, e.debug(this.constructor.name, "原生广告展示2: ", this._config.adUnitId, this._showCallback), 
                    this.load();
                }, n.hide = function() {}, n.destroy = function() {
                    var t;
                    null === (t = this._adInstance) || void 0 === t || t.destroy(), this._adInstance = null;
                }, n.getAdData = function() {
                    return this._adItemData;
                }, n.reportAdShow = function() {
                    if (this._adItemData) {
                        var t, a = rd.Utils.random(0, 100), i = rd.Option.nativeReport;
                        if (e.debug(this.constructor.name, "原生广告上报_" + this._adItemData.adId, a <= i ? "曝光上报成功" : "曝光上报失败"), 
                        a <= i) null === (t = this._adInstance) || void 0 === t || t.reportAdShow({
                            adId: this._adItemData.adId
                        }), rd.Stats.customEvent(s.custom_ad_native_show_report, {
                            adUnitId: this.nativeId
                        });
                    }
                }, n.reportAdClick = function(t) {
                    var a;
                    this._adItemData && (e.debug(this.constructor.name, "原生广告点击上报", this.nativeId, this._adItemData.adId), 
                    null === (a = this._adInstance) || void 0 === a || a.reportAdClick({
                        adId: this._adItemData.adId
                    }), this.load(), rd.Stats.customEvent(s.custom_ad_native, {
                        currentWindow: t,
                        adUnitId: this.nativeId
                    }));
                }, a(t, [ {
                    key: "nativeId",
                    get: function() {
                        return this._config.adUnitId;
                    }
                } ]), t;
            }());
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/TurntableUI.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts", "./RDStatisticsManager.ts", "./UIGBase.ts" ], function(t) {
    "use strict";
    var e, n, i, a, s, r, o, u, l, c, d, _, h;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            a = t.cclegacy, s = t._decorator, r = t.v3, o = t.Label, u = t.tween;
        }, function(t) {
            l = t.Constants;
        }, function(t) {
            c = t.ConstantCommon;
        }, function(t) {
            d = t.CustomEventID, _ = t.EventResult;
        }, function(t) {
            h = t.UIGBase;
        } ],
        execute: function() {
            var A;
            a._RF.push({}, "7a918tQOwhAPJWOgBAOovr/", "TurntableUI", void 0);
            var I = s.ccclass, m = l.AWARD_TYPE, N = l.DAILY_TURN_FREE_COUNT, w = r(), y = [ {
                type: m.MONEY,
                money: 100,
                ratio: 10,
                angleZ: 0
            }, {
                type: m.MONEY,
                money: 50,
                ratio: 20,
                angleZ: 315
            }, {
                type: m.MONEY,
                money: 300,
                ratio: 5,
                angleZ: 270
            }, {
                type: m.ONCE_MORE,
                money: 0,
                ratio: 15,
                angleZ: 225
            }, {
                type: m.MONEY,
                money: 100,
                ratio: 10,
                angleZ: 180
            }, {
                type: m.MONEY,
                money: 50,
                ratio: 20,
                angleZ: 135
            }, {
                type: m.MONEY,
                money: 300,
                ratio: 5,
                angleZ: 90
            }, {
                type: m.ONCE_MORE,
                money: 0,
                ratio: 15,
                angleZ: 45
            } ], p = "免费机会已用完，观看视频可免费抽奖哦！", D = "正在抽奖中...", E = "正在抽奖中，不能退出哦！";
            t("TurntableUI", I("TurntableUI")(A = function(t) {
                function a() {
                    for (var e, a = arguments.length, s = new Array(a), r = 0; r < a; r++) s[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(s)) || this, n(i(e), "_awardPanel", null), 
                    n(i(e), "_arrowNode", null), n(i(e), "_freeDrawLbl", null), n(i(e), "_closeBtnNode", null), 
                    n(i(e), "_curSurplusCnt", 0), n(i(e), "_isPlayingAnim", !1), e;
                }
                e(a, t);
                var s = a.prototype;
                return s.onLoad = function() {
                    this._awardPanel = rd.Utils.getNodeByName(this.node, "awardPanel"), this._arrowNode = rd.Utils.getNodeByName(this.node, "arrowNode");
                    var t = rd.Utils.getNodeByName(this.node, "btnNode"), e = rd.Utils.registerButtonEvent(t, "freeDrawBtn", this._onFreeDrawButton, this);
                    this._freeDrawLbl = rd.Utils.getNodeComponent(e, "freeDrawLbl", o), rd.Utils.registerButtonEvent(t, "videoDrawBtn", this._onVideoDrawButton, this), 
                    this._closeBtnNode = rd.Utils.registerButtonEvent(this.node, "closeBtn", this._onCloseButton, this), 
                    this.initBgOpacity(), this.initAdData(), this.zIndex = l.UI_DIALOG_Z_INDEX.CENTER;
                }, s.show = function() {
                    this._awardPanel.setRotation(0, 0, 0, 1), this._initFreeDrawCnt(), this.playScaleInAnim([ this.centerUI ], [ this._closeBtnNode ]), 
                    this.setShowAdData(!0, (arguments.length <= 0 ? void 0 : arguments[0]) ? c.INTERSTITIALAD_POSITION.POSITION_SECOND : c.INTERSTITIALAD_POSITION.POSITION_NONE), 
                    t.prototype.show.call(this), rd.Ads.showCustomAdVBannerLEFT(rd.UI.getDialogByName(l.UI_DIALOG_NAME.SIGN_IN)), 
                    rd.Ads.showCustomAdVBannerRIGHT(rd.UI.getDialogByName(l.UI_DIALOG_NAME.SIGN_IN)), 
                    rd.Ads.showCustomAdBannerTop(rd.UI.getDialogByName(l.UI_DIALOG_NAME.SIGN_IN));
                }, s.hide = function() {
                    t.prototype.hide.call(this), rd.Ads.hideCustomAdVBannerLEFT(), rd.Ads.hideCustomAdVBannerRIGHT(), 
                    rd.Ads.hideCustomAdBannerTop();
                }, s.getUIName = function() {
                    return "幸运转盘";
                }, s._initFreeDrawCnt = function() {
                    var t = g.App.Account.turntableInfo, e = rd.Utils.isNextDay(new Date().getTime(), t.time);
                    this._curSurplusCnt = N - (e ? 0 : t.count), this._setFreeDrawLabel();
                }, s._setFreeDrawLabel = function() {
                    this._freeDrawLbl.string = this._curSurplusCnt + "/" + N;
                }, s._onFreeDrawButton = function() {
                    if (!rd.UI.isUIAnimPlaying() && !this._isTurntablePlaying(D)) if (this._videoSelect.getIsChecked()) this._onVideoDrawButton(); else {
                        var t = {
                            curDialog: this.getUIName(),
                            btnType: "免费抽奖"
                        };
                        if (rd.Stats.customEvent(d.custom_button_click, t, _.onStarted), this._curSurplusCnt <= 0) return rd.UI.showTipMessage(p), 
                        void rd.Stats.customEvent(d.custom_button_click, t, _.onFailed, "免费抽奖次数不足");
                        this._curSurplusCnt -= 1, this._setFreeDrawLabel(), this._setLocalData(), this._setAwardData(), 
                        rd.Stats.customEvent(d.custom_button_click, t);
                    }
                }, s._isTurntablePlaying = function(t) {
                    return this._isPlayingAnim && rd.UI.showTipMessage(t), this._isPlayingAnim;
                }, s._setLocalData = function() {
                    var t = g.App.Account.turntableInfo;
                    t.count = N - this._curSurplusCnt, t.time = new Date().getTime(), g.App.Account.turntableInfo = t;
                }, s._setAwardData = function() {
                    var t = this._getAwardIndex(), e = y[t];
                    switch (e.type) {
                      case m.MONEY:
                        var n = g.App.Account.gameMoney + e.money;
                        g.App.Account.setMoneyNoEvent(n);
                        break;

                      case m.ONCE_MORE:
                        this._curSurplusCnt += 1, this._setLocalData();
                    }
                    this._playTurntableAnim(t);
                }, s._playTurntableAnim = function(t) {
                    var e = this;
                    this._isPlayingAnim = !0;
                    var n = this._awardPanel.eulerAngles.z % 360 + 360 + y[t].angleZ + rd.Utils.getRandomInteger(-18, 18);
                    w.set(0, 0, -1440 - n), u(this._awardPanel).by(5, {
                        eulerAngles: w
                    }, {
                        easing: "sineInOut"
                    }).call(function() {
                        e._isPlayingAnim = !1, e._updateAwardDisplay(t);
                    }).start(), u(this._arrowNode).then(this._getArrowRotateTween(.075, -5, 2.5, 4)).then(this._getArrowRotateTween(.1, -8, 8, 15)).then(this._getArrowRotateTween(.175, -4, 6, 2)).then(this._getArrowRotateTween(.175, -2, 5, 2)).start();
                }, s._getAwardIndex = function() {
                    for (var t = rd.Utils.getRandomInteger(1, 100), e = 0, n = 0, i = y.length; n < i; n++) if (t <= (e += y[n].ratio)) return n;
                    return 0;
                }, s._updateAwardDisplay = function(t) {
                    switch (y[t].type) {
                      case m.MONEY:
                        rd.Event.emit(l.EVENT_TYPE.MONEY_FLY_ANIM);
                        break;

                      case m.ONCE_MORE:
                        this._setFreeDrawLabel();
                    }
                }, s._getArrowRotateTween = function(t, e, n, i) {
                    return u().by(t, {
                        eulerAngles: r(0, 0, e)
                    }).by(t, {
                        eulerAngles: r(0, 0, n)
                    }).union().repeat(i);
                }, s._onVideoDrawButton = function() {
                    var t = this;
                    if (!rd.UI.isUIAnimPlaying()) {
                        var e = {
                            curDialog: this.getUIName(),
                            btnType: "视频广告"
                        };
                        rd.Stats.customEvent(d.custom_button_click, e, _.onStarted), this.showRewardAd({
                            success: function() {
                                t._isTurntablePlaying(D) || (t._setAwardData(), rd.Stats.customEvent(d.custom_button_click, e));
                            },
                            fail: function() {
                                rd.Stats.customEvent(d.custom_button_click, e, _.onFailed);
                            }
                        });
                    }
                }, s._onCloseButton = function() {
                    rd.UI.isUIAnimPlaying() || this._isTurntablePlaying(E) || (this._videoSelect.getIsChecked() ? this._onVideoDrawButton() : (this.playScaleOutAnim([ this.centerUI ], function() {
                        rd.UI.hideDialog(l.UI_DIALOG_NAME.TURNTABLE, !0);
                    }), rd.Stats.customEvent(d.custom_button_click, {
                        curDialog: this.getUIName(),
                        btnType: "关闭"
                    })));
                }, a;
            }(h)) || A);
            a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/getLevenshteinDistance.ts", [ "cc" ], function(e) {
    "use strict";
    var t;
    return {
        setters: [ function(e) {
            t = e.cclegacy;
        } ],
        execute: function() {
            e("getLevenshteinDistance", function(e, t) {
                if (e === t) return 0;
                var c = e;
                e.length > t.length && (e = t, t = c);
                var a = e.length, i = t.length;
                for (;a > 0 && e.charCodeAt(~-a) === t.charCodeAt(~-i); ) a--, i--;
                var o, h = 0;
                for (;h < a && e.charCodeAt(h) === t.charCodeAt(h); ) h++;
                if (i -= h, 0 === (a -= h)) return i;
                var s, u, f = 0, v = 0, g = 0;
                for (;v < a; ) n[v] = e.charCodeAt(h + v), r[v] = ++v;
                for (;g < i; ) for (o = t.charCodeAt(h + g), s = g++, f = g, v = 0; v < a; v++) u = o === n[v] ? s : s + 1, 
                s = r[v], f = r[v] = s > f ? u > f ? f + 1 : u : u > s ? s + 1 : u;
                return f;
            }), t._RF.push({}, "7bab0/pZ/1GrZtbYO/HPzli", "getLevenshteinDistance", void 0);
            var r = [], n = [];
            t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDLeaderboardEntity.ts", [ "cc" ], function() {
    "use strict";
    var t;
    return {
        setters: [ function(e) {
            t = e.cclegacy;
        } ],
        execute: function() {
            t._RF.push({}, "7c1dbsnUrhCbrriLnikmKCi", "RDLeaderboardEntity", void 0), t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/BannerAdVivo.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./BannerAdBase.ts" ], function(n) {
    "use strict";
    var e, t, r;
    return {
        setters: [ function(n) {
            e = n.inheritsLoose;
        }, function(n) {
            t = n.cclegacy;
        }, function(n) {
            r = n.BannerAdBase;
        } ],
        execute: function() {
            t._RF.push({}, "7d635sL8I5ChpQK9pbwTo2R", "BannerAdVivo", void 0);
            n("BannerAdVivo", function(n) {
                function t(e) {
                    var t;
                    return (t = n.call(this, e) || this)._platName = "qg", t;
                }
                return e(t, n), t;
            }(r));
            t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDPCPlatform.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./RDPlatformParam.ts", "./RDPlatform.ts", "./NativeAdPc.ts", "./VideoAdPc.ts", "./BannerAdPc.ts" ], function(t) {
    "use strict";
    var n, i, e, s, a, r, o, c, u, d;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, i = t.defineProperty, e = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy;
        }, function(t) {
            a = t.Log;
        }, function(t) {
            r = t.RDPlatformParam;
        }, function(t) {
            o = t.RDPlatform;
        }, function(t) {
            c = t.NativeAdPc;
        }, function(t) {
            u = t.VideoAdPc;
        }, function(t) {
            d = t.BannerAdPc;
        } ],
        execute: function() {
            s._RF.push({}, "7e754VRiLRAmoZCR7CKA3ek", "RDPCPlatform", void 0);
            t("RDPCPlatform", function(t) {
                function s() {
                    for (var n, s = arguments.length, a = new Array(s), r = 0; r < s; r++) a[r] = arguments[r];
                    return n = t.call.apply(t, [ this ].concat(a)) || this, i(e(n), "_currentNativeIndex", 0), 
                    n;
                }
                n(s, t);
                var o = s.prototype;
                return o._showVideo = function(t) {
                    t && t.success(null);
                }, o.initBanner = function() {
                    for (var t = r.ADPARAM[this.type.toString()].banner_preload_count || 1, n = 0; n < t; n++) {
                        var i = r.ADPARAM[this.type.toString()].banner_id, e = new d({
                            adUnitId: i,
                            style: {
                                left: 0,
                                top: 0,
                                width: 360,
                                height: 57
                            },
                            adIntervals: 60
                        });
                        this._bannerADInstances.push(e);
                    }
                }, o.initVideo = function() {
                    var t = r.ADPARAM[this.type.toString()].video_id;
                    this._videoBoxInstance = new u({
                        adUnitId: "adunit-48a5d8e1ce82b9d9"
                    });
                }, o.initIntertitalAd = function() {}, o.initCustomAd = function() {}, o.initNative = function() {
                    for (var n = 0; n < this._nativeID.length; n++) {
                        var i = new c({
                            adUnitId: "adunit-6610afa34f8f7843",
                            adIntervals: rd.Option.nativeFreashTime,
                            adDelay: n * rd.Option.nativeDurition
                        });
                        this._nativeADInstanceList.push(i);
                    }
                    t.prototype.initNative.call(this);
                }, o._createNativeAd = function(t) {
                    var n = this;
                    if (this.isReviewed() || rd.Option.onlyVideo) return a.debug(this.constructor.name, "审核中====="), 
                    null == t ? void 0 : t.fail();
                    if (rd.Option.regionEnable) {
                        if (!this.natvieAds) return a.debug(this.constructor.name, "原生广告没有数据, 稍后重试"), null == t ? void 0 : t.fail();
                        var i = this._getNative();
                        a.debug(this.constructor.name, "获取原生广告", i._config.adUnitId), null == t || t.success(i);
                    } else a.debug(this.constructor.name, "原生广告222222222", this._currentNativeIndex, this._nativeADInstanceList.length), 
                    this._nativeADInstanceList[this._currentNativeIndex].show({
                        success: function() {
                            null == t || t.success(n._nativeADInstanceList[0]);
                        },
                        fail: function() {
                            null == t || t.fail();
                        }
                    }), this._currentNativeIndex++, this._currentNativeIndex = this._currentNativeIndex >= this._nativeADInstanceList.length ? 0 : this._currentNativeIndex;
                }, o._destoryNativeAd = function(t) {
                    a.debug(this.constructor.name, "销毁这个原生广告前列表", JSON.stringify(t), JSON.stringify(this._nativeADInstances.keys()));
                    for (var n = 0; n < this._nativeAdParam.length; n++) {
                        if (this._nativeAdParam[n].nativeId == t.name) {
                            this._nativeAdParam.splice(n, 1);
                            break;
                        }
                    }
                    this._nativeADInstances.has(t.name) && (this._nativeADInstances.delete(t.name), 
                    a.debug(this.constructor.name, "销毁这个原生广告后列表", JSON.stringify(this._nativeADInstances.keys())));
                }, o._showIntertitalAd = function(t) {
                    this.isReviewed() || rd.PushCtrl.showNatvieInterstitialAd({
                        type: t.type
                    });
                }, o._showGameBannerAd = function(t) {
                    a.debug(this.constructor.name, "pc横幅广告显示");
                }, o._hideGameBannerAd = function(t) {
                    a.debug(this.constructor.name, "pc横幅广告隐藏");
                }, o._login = function(n) {
                    n.headId = "https://ocs-cn-north1.heytapcs.com/titans-usercenter-avatar-bucket-cn/339/189/502/205981933.jpg?20201217161821?v=1608193101000", 
                    t.prototype._login.call(this, n);
                }, o.isShowNativeAd = function(t) {
                    return void 0 === t && (t = !1), !t || this.isBtnFadeIn(!0);
                }, o.isMoreGameBtn = function() {
                    return !0;
                }, o._showGamePortalAd = function() {
                    a.debug(this.constructor.name, "更多游戏");
                }, o.HasShortcutInstalled = function() {
                    return !1;
                }, o.natvieAds = function() {
                    return !rd.Option.regionEnable || t.prototype.natvieAds.call(this);
                }, o.isShowContact = function() {
                    return !0;
                }, o.isShowPrivacy = function() {
                    return !1;
                }, s;
            }(o));
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ZombieBoom.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts" ], function(t) {
    "use strict";
    var o, r, n, e, i, c, s, a;
    return {
        setters: [ function(t) {
            o = t.inheritsLoose, r = t.defineProperty, n = t.assertThisInitialized;
        }, function(t) {
            e = t.cclegacy, i = t._decorator, c = t.ParticleSystem, s = t.Component;
        }, function(t) {
            a = t.Constants;
        } ],
        execute: function() {
            var u;
            e._RF.push({}, "7f53bRXP81Lar61uomArvt1", "ZombieBoom", void 0);
            var l = i.ccclass;
            t("ZombieBoom", l("ZombieBoom")(u = function(t) {
                function e() {
                    for (var o, e = arguments.length, i = new Array(e), c = 0; c < e; c++) i[c] = arguments[c];
                    return o = t.call.apply(t, [ this ].concat(i)) || this, r(n(o), "_particleArr", null), 
                    o;
                }
                o(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    this._particleArr = this.getComponentsInChildren(c);
                }, i.init = function(t) {
                    var o = a.ZOMBIE_LEVEL_COLOR_ARRAY[t - 1];
                    this._particleArr.forEach(function(t) {
                        return t.startColor.color = o;
                    });
                }, e;
            }(s)) || u);
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDPlatformParam.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(e) {
    "use strict";
    var a, i;
    return {
        setters: [ function(e) {
            a = e.defineProperty;
        }, function(e) {
            i = e.cclegacy;
        } ],
        execute: function() {
            i._RF.push({}, "80e82EvpzpAaKD0RwGDQf+7", "RDPlatformParam", void 0);
            var d = e("RDPlatformParam", function() {});
            a(d, "GAMEID", -1), a(d, "ISDEBUG", !1), a(d, "ADPARAM", {
                "-1": {
                    name: "none",
                    gameId: "10015",
                    matrixAdOpen: !1,
                    native_id: [ "123456", "123457", "123458" ],
                    add_native_id: [ "348075", "348074", "348073" ],
                    eventId: {
                        101: "1001501",
                        102: "1001502",
                        103: "1001503",
                        104: "1001504",
                        105: "1001505"
                    },
                    plat_id: "1003",
                    version_name: "1.0.1"
                },
                1: {
                    name: "wx",
                    umeng_appKey: "62a2f62b05844627b5aa73f7",
                    appid: "wxe9dfa84bba6d8bce",
                    banner_id: "adunit-d08847fc801ac306",
                    video_id: "adunit-5ea8617707482f19",
                    interstital_id: "adunit-52ff9b4faac333d8",
                    isReviewed: !1,
                    share_text: [ "我的战车升级到王者级别了，快来挑战吧！" ],
                    share_image_url: [ "https://mmocgame.qpic.cn/wechatgame/UCdOczQHiaLefuGjO1USTALsuHnY6yeDhTlB6g36stiagjZIJRicLQdnWoXmDuBWfMu/0", "https://mmocgame.qpic.cn/wechatgame/UCdOczQHiaLfIcQK3iaqER9Hmn94EX9Qia89wN93HVibRPTDlIGFgiboMUQ1vvuR9Tia42/0" ],
                    share_image_id: [ "PGiEASmrQXa5l581Yf2UbQ==", "Y5SNgQY8R5y5ZaYlO2IuZg==" ],
                    matrixAdOpen: !0,
                    banner_preload_count: 3,
                    subpackageNames: [ "texture", "audio", "atom", "prefab" ],
                    game_banner_id: "",
                    game_portal_id: "adbomb",
                    native_icon: [ "adunit-f4fbba05d571a594", "adunit-287f0ed591728dd1" ],
                    native_hot: "adunit-d2f241896ded14be",
                    custom_scene: "adunit-3c31c4c4db25a8b6",
                    custom_banner_id: [ "adunit-a79820809c294a86", "adunit-80af2b6dba1dd73b" ],
                    custom_banner_offy: [ 45, 110 ],
                    custom_v_banner_id: [ "adunit-c9276ef7d693de22", "adunit-ce35004a82e5e836" ],
                    custom_v_banner_offy: [ 150, 200 ],
                    plat_id: "1003",
                    version_name: "1.0.2"
                },
                2: {
                    name: "tt",
                    umeng_appKey: "62a2f67988ccdf4b7e9096a0",
                    appid: "ttb5fcc3412ac75e18",
                    banner_id: "2djiq0xevt11j7mhfc",
                    video_id: "kb2hdij7kh4d98o94g",
                    interstital_id: "203a00fe9i79hdfk01",
                    share_text: [ "", "" ],
                    share_image_url: [],
                    share_image_id: [],
                    matrixAdOpen: !1,
                    plat_id: "1020",
                    version_name: "1.0.0"
                },
                3: {
                    name: "qg",
                    umeng_appKey: "62a2f82105844627b5aa773e",
                    appid: "105567657",
                    banner_id: "edb81298b50546adbdbfcc93695b334e",
                    video_id: "c5f0889808ab42a884b60600d0ce9d44",
                    interstital_id: "cc919629987245e39963b2724533b68e",
                    native_id: [],
                    custom_banner_id: [ "89cd9a599e5745c185c0728021709508", "a0ac5c39197640c484a14b0598a26b56" ],
                    custom_intersitial_id: [ "74ca49b752ed447d996e4500e1113f16", "742cf9a74b214037ba84e4e9902a3e44", "80e80a1bd7a7496d814594587fcbca90" ],
                    share_text: [ "", "" ],
                    subpackageNames: [ "usr_audio", "usr_prefab", "usr_texture" ],
                    game_banner_id: "b64e31775464460881f123ead896ca5c",
                    game_portal_id: "a3aa143ac252417a84b772db4ab5aacf",
                    share_image_url: [],
                    share_image_id: [],
                    matrixAdOpen: !1,
                    plat_id: "1026",
                    version_name: "1.0.0"
                },
                4: {
                    name: "qg",
                    umeng_appKey: "62a2f6a005844627b5aa753e",
                    appid: "30827005",
                    banner_id: "544427",
                    video_id: "544431",
                    interstital_id: "290083",
                    native_id: [ "544434", "544436", "544454", "544461" ],
                    isReviewed: !1,
                    share_text: [ "", "" ],
                    share_image_url: [],
                    share_image_id: [],
                    matrixAdOpen: !0,
                    subpackageNames: [ "usr_audio", "usr_prefab", "usr_texture" ],
                    game_banner_id: "544462",
                    game_portal_id: "544463",
                    banner_preload_count: 1,
                    oppo_music: !1,
                    plat_id: "1011",
                    version_name: "1.0.0"
                },
                5: {
                    name: "yhl",
                    appid: "1110573079",
                    banner_id: "",
                    video_id: "2001110950164206",
                    interstital_id: "",
                    share_text: [ "", "" ],
                    share_image_url: [],
                    share_image_id: [],
                    matrixAdOpen: !1,
                    subpackageNames: [],
                    isReviewed: !1
                },
                6: {
                    name: "sh",
                    appid: "1110573079",
                    banner_id: "",
                    video_id: "2001110950164206",
                    interstital_id: "",
                    share_text: [ "", "" ],
                    share_image_url: [],
                    share_image_id: [],
                    matrixAdOpen: !1,
                    subpackageNames: [],
                    isReviewed: !1
                },
                7: {
                    name: "android",
                    appid: "1537358826",
                    banner_id: "945573456",
                    video_id: "945573458",
                    interstital_id: "945573461",
                    share_text: [ "", "" ],
                    share_image_url: [],
                    share_image_id: [],
                    matrixAdOpen: !1,
                    game_portal_id: "android",
                    subpackageNames: [],
                    isReviewed: !1,
                    platformName: "office"
                },
                8: {
                    name: "ios",
                    appid: "1537358826",
                    banner_id: "945994355",
                    video_id: "945994334",
                    interstital_id: "945994348",
                    share_text: [ "", "" ],
                    share_image_url: [],
                    share_image_id: [],
                    matrixAdOpen: !1,
                    subpackageNames: [],
                    isReviewed: !1
                },
                9: {
                    name: "kg",
                    appid: "1769",
                    banner_id: "",
                    video_id: "",
                    interstital_id: "",
                    share_text: [ "", "" ],
                    share_image_url: [],
                    share_image_id: [],
                    matrixAdOpen: !1,
                    subpackageNames: [],
                    isReviewed: !1
                },
                11: {
                    name: "qg",
                    umeng_appKey: "629f529b05844627b5a4c424",
                    appid: "1769",
                    banner_id: "12345",
                    video_id: "12345",
                    interstital_id: "12345",
                    share_text: [ "", "" ],
                    share_image_url: [],
                    share_image_id: [],
                    matrixAdOpen: !1,
                    subpackageNames: [ "sub1", "music" ],
                    isReviewed: !1,
                    banner_preload_count: 3
                },
                12: {
                    name: "4399",
                    appid: "",
                    banner_id: "",
                    video_id: "",
                    interstital_id: "",
                    share_text: [ "", "" ],
                    share_image_url: [],
                    share_image_id: [],
                    matrixAdOpen: !1,
                    subpackageNames: [],
                    isReviewed: !1
                },
                13: {
                    name: "qg",
                    umeng_appKey: "62a2f84605844627b5aa7895",
                    appid: "105667671",
                    banner_id: "testw6vs28auh3",
                    video_id: "e7hm5vx799",
                    interstital_id: "testb4znbuh3n2",
                    native_id: [ "u7m3hc4gvm" ],
                    isReviewed: !1,
                    share_text: [ "", "" ],
                    share_image_url: [],
                    share_image_id: [],
                    matrixAdOpen: !1,
                    subpackageNames: [ "sub1", "music" ],
                    banner_preload_count: 1,
                    plat_id: "1107",
                    version_name: "1.0.0"
                },
                cocosAnalytics: {
                    appID: "613620973",
                    secret: "31ea5c6b0aa8b85822863fc429142713",
                    version: "1.0.0"
                },
                uma: {
                    appKey: "6183ca8ce014255fcb6b6773",
                    debug: !1
                },
                heyGame: {
                    configName: "mszc",
                    appid: 3828,
                    secret: "7f68dcca14f4ed33236e4a94820eef73",
                    authorName: "厦门凯斌信息科技有限公司",
                    authorCode: "2022SRE020665"
                }
            }), i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ArcProgressBar.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var e, r, i, o, n, s, p, a, c, u, l, g;
    return {
        setters: [ function(t) {
            e = t.applyDecoratedDescriptor, r = t.inheritsLoose, i = t.initializerDefineProperty, 
            o = t.assertThisInitialized, n = t.defineProperty, s = t.createClass;
        }, function(t) {
            p = t.cclegacy, a = t._decorator, c = t.Graphics, u = t.Color, l = t.tween, g = t.Component;
        } ],
        execute: function() {
            var _, h, y, f, d, w, b, C, P, k, D, O, A, m, B, R, T, z, j, v, S, W, F, L, E;
            p._RF.push({}, "81858trFINH75uO7DMT1J2L", "ArcProgressBar", void 0);
            var I = a.ccclass, M = a.property, H = a.menu, U = a.requireComponent, x = a.executeInEditMode;
            t("ArcProgressBar", (_ = I("ArcProgressBar"), h = H("Utils/ArcProgressBar"), y = U(c), 
            f = M({
                tooltip: "半径"
            }), d = M({
                tooltip: "顺时针方向"
            }), w = M({
                tooltip: "开始角度 (基于 y 轴)"
            }), b = M({
                tooltip: "范围 (角度)"
            }), C = M({
                tooltip: "线宽"
            }), P = M({
                range: [ 0, 1 ],
                step: .01,
                tooltip: "进度 (0 ~ 1)"
            }), k = M({
                type: c.LineCap,
                tooltip: "线帽"
            }), D = M({
                tooltip: "是否画出背景"
            }), O = M({
                type: u,
                tooltip: "背景颜色"
            }), A = M({
                type: u,
                tooltip: "进度颜色"
            }), _(m = h(m = y(m = x((R = e((B = function(t) {
                function e() {
                    for (var e, r = arguments.length, s = new Array(r), p = 0; p < r; p++) s[p] = arguments[p];
                    return e = t.call.apply(t, [ this ].concat(s)) || this, i(o(e), "_radius", R, o(e)), 
                    i(o(e), "_clockwise", T, o(e)), i(o(e), "_startAngle", z, o(e)), i(o(e), "_range", j, o(e)), 
                    i(o(e), "_lineWidth", v, o(e)), i(o(e), "_progress", S, o(e)), i(o(e), "_lineCap", W, o(e)), 
                    i(o(e), "_isDrawBg", F, o(e)), i(o(e), "_bgColor", L, o(e)), i(o(e), "_progressColor", E, o(e)), 
                    n(o(e), "_graphics", null), n(o(e), "_curStartAng", 0), n(o(e), "_curStartRad", 0), 
                    n(o(e), "_curEndRad", 0), n(o(e), "_tweenFunc", null), n(o(e), "_arcTween", null), 
                    e;
                }
                r(e, t);
                var p = e.prototype;
                return p.onLoad = function() {
                    this._init();
                }, p.resetInEditor = function() {
                    this._init();
                }, p.play = function(t, e, r, i) {
                    var o = this;
                    return new Promise(function(n) {
                        o.stop(), o._tweenFunc = n, o._arcTween = l(o).to(t, {
                            progress: e
                        }, {
                            easing: r,
                            onUpdate: i
                        }).call(function() {
                            o._arcTween = null, o._tweenFunc = null;
                        }).call(n).start();
                    });
                }, p.stop = function() {
                    this._arcTween && (this._arcTween.stop(), this._arcTween = null), this._tweenFunc && (this._tweenFunc(), 
                    this._tweenFunc = null);
                }, p._init = function() {
                    this._graphics || (this._graphics = this.getComponent(c)), this._updateProperties();
                }, p._updateProperties = function() {
                    this._graphics.lineWidth = this._lineWidth, this._graphics.lineCap = this._lineCap, 
                    this._curStartAng = this._startAngle + 90, this._curStartRad = this._angleToRadians(this._curStartAng);
                    var t = this._curStartAng + (this._clockwise ? -this._range : this._range);
                    this._curEndRad = this._angleToRadians(t), this._updateProgress(this._progress);
                }, p._updateProgress = function(t) {
                    t < 0 ? t = 0 : t > 1 && (t = 1), this._progress = t;
                    var e = this._graphics;
                    e.clear(), this.isDrawBg && (e.strokeColor = this._bgColor, e.arc(0, 0, this._radius, this._curStartRad, this._curEndRad, !this._clockwise), 
                    e.stroke());
                    var r = this._clockwise ? -this._range : this._range, i = this._curStartAng + r * t, o = this._angleToRadians(i);
                    e.strokeColor = this._progressColor, e.arc(0, 0, this._radius, this._curStartRad, o, !this._clockwise), 
                    e.stroke();
                }, p._angleToRadians = function(t) {
                    return Math.PI / 180 * t;
                }, s(e, [ {
                    key: "radius",
                    get: function() {
                        return this._radius;
                    },
                    set: function(t) {
                        this._radius = t, this._updateProperties();
                    }
                }, {
                    key: "clockwise",
                    get: function() {
                        return this._clockwise;
                    },
                    set: function(t) {
                        this._clockwise = t, this._updateProperties();
                    }
                }, {
                    key: "startAngle",
                    get: function() {
                        return this._startAngle;
                    },
                    set: function(t) {
                        this._startAngle = t, this._updateProperties();
                    }
                }, {
                    key: "range",
                    get: function() {
                        return this._range;
                    },
                    set: function(t) {
                        this._range = t, this._updateProperties();
                    }
                }, {
                    key: "lineWidth",
                    get: function() {
                        return this._lineWidth;
                    },
                    set: function(t) {
                        this._lineWidth = t, this._updateProperties();
                    }
                }, {
                    key: "progress",
                    get: function() {
                        return this._progress;
                    },
                    set: function(t) {
                        this._updateProgress(t);
                    }
                }, {
                    key: "lineCap",
                    get: function() {
                        return this._lineCap;
                    },
                    set: function(t) {
                        this._lineCap = t, this._updateProperties();
                    }
                }, {
                    key: "isDrawBg",
                    get: function() {
                        return this._isDrawBg;
                    },
                    set: function(t) {
                        this._isDrawBg = t, this._updateProperties();
                    }
                }, {
                    key: "bgColor",
                    get: function() {
                        return this._bgColor;
                    },
                    set: function(t) {
                        this._bgColor = t, this._isDrawBg && this._updateProperties();
                    }
                }, {
                    key: "progressColor",
                    get: function() {
                        return this._progressColor;
                    },
                    set: function(t) {
                        this._progressColor = t, this._updateProperties();
                    }
                } ]), e;
            }(g)).prototype, "_radius", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 100;
                }
            }), e(B.prototype, "radius", [ f ], Object.getOwnPropertyDescriptor(B.prototype, "radius"), B.prototype), 
            T = e(B.prototype, "_clockwise", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), e(B.prototype, "clockwise", [ d ], Object.getOwnPropertyDescriptor(B.prototype, "clockwise"), B.prototype), 
            z = e(B.prototype, "_startAngle", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 90;
                }
            }), e(B.prototype, "startAngle", [ w ], Object.getOwnPropertyDescriptor(B.prototype, "startAngle"), B.prototype), 
            j = e(B.prototype, "_range", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 180;
                }
            }), e(B.prototype, "range", [ b ], Object.getOwnPropertyDescriptor(B.prototype, "range"), B.prototype), 
            v = e(B.prototype, "_lineWidth", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 20;
                }
            }), e(B.prototype, "lineWidth", [ C ], Object.getOwnPropertyDescriptor(B.prototype, "lineWidth"), B.prototype), 
            S = e(B.prototype, "_progress", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), e(B.prototype, "progress", [ P ], Object.getOwnPropertyDescriptor(B.prototype, "progress"), B.prototype), 
            W = e(B.prototype, "_lineCap", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return c.LineCap.ROUND;
                }
            }), e(B.prototype, "lineCap", [ k ], Object.getOwnPropertyDescriptor(B.prototype, "lineCap"), B.prototype), 
            F = e(B.prototype, "_isDrawBg", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), e(B.prototype, "isDrawBg", [ D ], Object.getOwnPropertyDescriptor(B.prototype, "isDrawBg"), B.prototype), 
            L = e(B.prototype, "_bgColor", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return u.BLACK.clone();
                }
            }), e(B.prototype, "bgColor", [ O ], Object.getOwnPropertyDescriptor(B.prototype, "bgColor"), B.prototype), 
            E = e(B.prototype, "_progressColor", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return u.WHITE.clone();
                }
            }), e(B.prototype, "progressColor", [ A ], Object.getOwnPropertyDescriptor(B.prototype, "progressColor"), B.prototype), 
            m = B)) || m) || m) || m) || m));
            p._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/webgl-constants.ts", [ "cc" ], function(_) {
    "use strict";
    var t;
    return {
        setters: [ function(_) {
            t = _.cclegacy;
        } ],
        execute: function() {
            t._RF.push({}, "81d3eAMeQVPcLR+w/4t6mf0", "webgl-constants", void 0);
            _("GL_VERTEX_SHADER", 35633), _("GL_UNSIGNED_BYTE", 5121), _("GL_TRIANGLES", 4), 
            _("GL_STATIC_DRAW", 35044), _("GL_RGBA", 6408), _("GL_FRAGMENT_SHADER", 35632), 
            _("GL_FLOAT", 5126), _("GL_ARRAY_BUFFER", 34962), _("GL_COLOR_BUFFER_BIT", 16384), 
            _("GL_POINTS", 0);
            t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/GunMgr.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts", "./Bullet.ts" ], function(t) {
    "use strict";
    var e, n, i, o, r, s, l, u, a, _, h, d, v, f, c, P, C, E, p;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            o = t.cclegacy, r = t._decorator, s = t.v3, l = t.quat, u = t.MeshRenderer, a = t.instantiate, 
            _ = t.isValid, h = t.Vec3, d = t.math, v = t.Quat, f = t.Tween, c = t.tween, P = t.Component;
        }, function(t) {
            C = t.Constants;
        }, function(t) {
            E = t.ConstantCommon;
        }, function(t) {
            p = t.Bullet;
        } ],
        execute: function() {
            var N;
            o._RF.push({}, "81f5ezikHtCXI8NXr33wkNQ", "GunMgr", void 0);
            var T = r.ccclass, m = s(), D = l();
            t("GunMgr", T("GunMgr")(N = function(t) {
                function o() {
                    for (var e, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return e = t.call.apply(t, [ this ].concat(r)) || this, n(i(e), "_gunCtrlNode", null), 
                    n(i(e), "_bulletMtl", null), n(i(e), "_gunCollider", null), n(i(e), "_gunPivot", null), 
                    n(i(e), "_gunNode", null), n(i(e), "_firePoint", null), n(i(e), "_fireCDTime", 0), 
                    e;
                }
                e(o, t);
                var r = o.prototype;
                return r.start = function() {
                    this._gunCtrlNode = this.node.getChildByName("gunCtrl"), this._bulletMtl = this._gunCtrlNode.getComponent(u).sharedMaterial, 
                    this._gunCollider = g.App.ColliderData.setGunDetect(this._gunCtrlNode), this._gunPivot = this._gunCtrlNode.getChildByName("pivot"), 
                    this._loadGun(!0), this._setBulletTex(), this._registerEvent(!0);
                }, r._loadGun = function(t) {
                    var e = this;
                    void 0 === t && (t = !1);
                    var n = g.App.GunData.level;
                    this._gunCtrlNode.active = n > 0, this._gunCtrlNode.active && rd.Asset.loadPrefab("warCar/gun/gunLv" + n, E.BUNDLE_NAME.PREFAB).then(function(n) {
                        var i;
                        null === (i = e._gunNode) || void 0 === i || i.destroy(), e._gunNode = a(n), e._firePoint = e._gunNode.getChildByName("firePoint"), 
                        e._gunPivot.addChild(e._gunNode), !t && rd.Event.emit(C.EVENT_TYPE.PLAY_UPGRADE_ANIM);
                    });
                }, r._setBulletTex = function() {
                    var t = this;
                    g.App.GunData.level <= 0 || rd.Asset.loadTexture("bullet/bulletLv" + g.App.GunData.damageLv, "texture").then(function(e) {
                        t._bulletMtl.setProperty("mainTexture", e);
                    });
                }, r._registerEvent = function(t) {
                    var e = t ? "on" : "off";
                    rd.Event[e](C.EVENT_TYPE.UPDATE_GUN_POS, this._updateGunPos, this), rd.Event[e](C.EVENT_TYPE.UPGRADE_GUN_LV, this._loadGun, this), 
                    rd.Event[e](C.EVENT_TYPE.UPGRADE_GUN_DMG, this._setBulletTex, this), this._gunCollider[e]("onTriggerEnter", this._onGunDetectTrigger, this), 
                    this._gunCollider[e]("onTriggerStay", this._onGunDetectTrigger, this);
                }, r._updateGunPos = function(t) {
                    this._gunCtrlNode.setPosition(t.position);
                }, r._onGunDetectTrigger = function(t) {
                    if (!(this._fireCDTime > 0) && this._firePoint && _(t.otherCollider)) {
                        this._fireCDTime = g.App.GunData.fireCDTime;
                        var e = t.otherCollider.node;
                        if (e.name.startsWith(C.COLLIDER_NAME.ZOMBIE) && e.parent) {
                            h.subtract(m, e.worldPosition, this._gunPivot.worldPosition);
                            var n = d.toDegree(Math.asin((-m.y - C.ZOMBIE_HEIGHT_OFFSET) / m.length())), i = d.toDegree(Math.atan2(-m.z, m.x)) + 90;
                            v.fromEuler(D, n, i, this._gunPivot.eulerAngles.z), f.stopAllByTarget(this._gunPivot), 
                            c(this._gunPivot).to(.15 * this._fireCDTime, {
                                worldRotation: D
                            }, {
                                easing: "sineOut"
                            }).call(this._generateBullet.bind(this, e)).start();
                        }
                    }
                }, r._generateBullet = function(t) {
                    var e = this;
                    rd.Asset.loadPrefab("game/bullet", E.BUNDLE_NAME.PREFAB).then(function(n) {
                        if (t.parent) {
                            var i = rd.Pool.getNode(n, g.App.GameData.mapNode);
                            i.setWorldPosition(e._firePoint.worldPosition), i.setWorldRotation(e._firePoint.worldRotation), 
                            (i.getComponent(p) || i.addComponent(p)).moveTarget = t;
                        }
                    });
                }, r._resetPivotPos = function(t) {
                    if (0 !== this._gunPivot.eulerAngles.x || 0 !== this._gunPivot.eulerAngles.y) {
                        var e = this._gunPivot.eulerAngles, n = 500 * t, i = n * (e.x < 0 ? 1 : -1), o = n * (e.y > 0 && e.y > 180 || e.y < 0 && e.y > -180 ? 1 : -1), r = e.x + i, s = e.y + o;
                        r = Math.abs(r) > Math.abs(i) ? r : 0, s = Math.abs(s % 360) > Math.abs(o) ? s : 0, 
                        this._gunPivot.setRotationFromEuler(r, s, e.z);
                    }
                }, r.update = function(t) {
                    this._fireCDTime <= 0 ? this._resetPivotPos(t) : this._fireCDTime -= t;
                }, r.onDestroy = function() {
                    this._registerEvent(!1);
                }, o;
            }(P)) || N);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/Zombie.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts" ], function(t) {
    "use strict";
    var e, n, o, i, s, r, a, c, l, u;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, o = t.assertThisInitialized, i = t.createClass;
        }, function(t) {
            s = t.cclegacy, r = t._decorator, a = t.v3, c = t.MeshRenderer, l = t.Component;
        }, function(t) {
            u = t.Constants;
        } ],
        execute: function() {
            var h;
            s._RF.push({}, "832cfSw34RLX4ZQOkAZrpUS", "Zombie", void 0);
            var d = r.ccclass, _ = u.ZOMBIE_LEVEL_COLOR_ARRAY, f = [];
            t("Zombie", d("Zombie")(h = function(t) {
                function s() {
                    for (var e, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(s)) || this, n(o(e), "_entityMesh", null), 
                    n(o(e), "_zombieLv", 0), n(o(e), "_rotateAngY", 0), n(o(e), "_worldPos", a()), e;
                }
                e(s, t);
                var r = s.prototype;
                return r.onLoad = function() {
                    this._entityMesh = rd.Utils.getNodeComponent(this.node, "entity", c);
                }, r.start = function() {
                    g.App.ColliderData.setZombieCollider(this.node);
                }, r.reuse = function(t) {
                    this._zombieLv = t;
                    var e = _.length, n = t < e ? _[t - 1] : _[e - 1];
                    rd.Utils.getArrayByColor(n, f), this._entityMesh.setInstancedAttribute("a_instanced_color", f), 
                    this.setRandomRotation();
                }, r.setRandomRotation = function() {
                    this.node.parent && (this._rotateAngY = rd.Utils.getRandomInteger(-360, 360));
                }, r.update = function(t) {
                    if (0 !== this._rotateAngY) {
                        var e = 100 * t;
                        e *= this._rotateAngY < 0 ? -1 : 1, this.node.setRotationFromEuler(0, this.node.eulerAngles.y + e, 0), 
                        this._rotateAngY -= e, Math.abs(this._rotateAngY) < Math.abs(e) && (this._rotateAngY = 0);
                    }
                }, i(s, [ {
                    key: "level",
                    get: function() {
                        return this._zombieLv;
                    }
                }, {
                    key: "worldPos",
                    get: function() {
                        return this._worldPos.set(this.node.worldPosition);
                    }
                }, {
                    key: "isBoss",
                    get: function() {
                        return !1;
                    }
                } ]), s;
            }(l)) || h);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDBundleManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./SingletonBase.ts", "./ConstantCommon.ts" ], function(e) {
    "use strict";
    var n, t, o, r, u;
    return {
        setters: [ function(e) {
            n = e.inheritsLoose;
        }, function(e) {
            t = e.cclegacy, o = e.assetManager;
        }, function(e) {
            r = e.SingletonBase;
        }, function(e) {
            u = e.ConstantCommon;
        } ],
        execute: function() {
            t._RF.push({}, "8356dOx36FEAYm09Zl6hmME", "RDBundleManager", void 0);
            var l = function(e) {
                function t() {
                    return e.apply(this, arguments) || this;
                }
                n(t, e);
                var r = t.prototype;
                return r.loadBundle = function(e) {
                    var n = o.getBundle(e);
                    return n ? Promise.resolve(n) : new Promise(function(n, t) {
                        o.loadBundle(e, function(e, o) {
                            if (e) return console.error("加载Bundle出错"), void t(e);
                            n(o);
                        });
                    });
                }, r.releaseRes = function(e, n) {
                    void 0 === n && (n = u.BUNDLE_NAME.RESOURCES);
                    var t = o.getBundle(n);
                    null == t || t.release(e);
                }, r.releaseDirRes = function(e, n) {
                    void 0 === n && (n = u.BUNDLE_NAME.RESOURCES);
                    var t = o.getBundle(n), r = null == t ? void 0 : t.getDirWithPath(e);
                    null == r || r.forEach(function(e) {
                        null == t || t.release(e.path);
                    });
                }, r.removeBundle = function(e, n) {
                    void 0 === n && (n = !1);
                    var t = o.getBundle(e);
                    t && (n && t.releaseAll(), o.removeBundle(t));
                }, t;
            }(r);
            void 0 === window.rd && (window.rd = {});
            var i = e("default", l.getInstance());
            window.rd.Bundle = i, t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/getGPUVersion.ts", [ "cc" ], function(e) {
    "use strict";
    var t;
    return {
        setters: [ function(e) {
            t = e.cclegacy;
        } ],
        execute: function() {
            e("getGPUVersion", function(e) {
                var t, n = (e = e.replace(/\([^)]+\)/, "")).match(/\d+/) || e.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);
                return null !== (t = null == n ? void 0 : n.join("").replace(/\W|amd/g, "")) && void 0 !== t ? t : "";
            }), t._RF.push({}, "83921mQsaZJ+o3yGvj9BWos", "getGPUVersion", void 0), t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/QuadTreeObject.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var e, n, i, u;
    return {
        setters: [ function(t) {
            e = t.createClass, n = t.defineProperty;
        }, function(t) {
            i = t.cclegacy, u = t.quat;
        } ],
        execute: function() {
            i._RF.push({}, "873c59ahHxPeoS+aP0JjRe6", "QuadTreeObject", void 0);
            t("QuadTreeObject", function() {
                function t(t, e, i) {
                    n(this, "_id", 0), n(this, "_bounds", null), n(this, "_rotation", u()), this._id = t, 
                    this._bounds = e, this._rotation.set(i);
                }
                return e(t, [ {
                    key: "id",
                    get: function() {
                        return this._id;
                    }
                }, {
                    key: "bounds",
                    get: function() {
                        return this._bounds;
                    }
                }, {
                    key: "rotation",
                    get: function() {
                        return this._rotation;
                    }
                } ]), t;
            }());
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/Constants.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(E) {
    "use strict";
    var _, A, e;
    return {
        setters: [ function(E) {
            _ = E.defineProperty;
        }, function(E) {
            A = E.cclegacy, e = E.color;
        } ],
        execute: function() {
            var O, T, a, I, N, R, M, o, n, t;
            A._RF.push({}, "87fd2z0CvlLbZBkckGBGfI0", "Constants", void 0), function(E) {
                E.LOADING = "loadingUI", E.GAME = "gameUI", E.MAIN = "mainUI", E.COMMON = "commonUI", 
                E.GAME_VICTORY = "gameVictoryUI", E.GAME_RESULT = "resultUI", E.GAME_OVER = "gameOverUI", 
                E.REVIVE = "reviveUI", E.TOAST = "toastUI", E.MONEY = "moneyUI", E.SIGN_IN = "signInUI", 
                E.TURNTABLE = "turntableUI", E.SETTING = "settingUI", E.WEAPON = "weaponUI", E.GARAGE = "garageUI", 
                E.WORLD = "worldUI", E.WORD_TIPS = "wordTipsUI", E.CONFIRM = "confirmUI", E.SHARE_VIDEO = "shareVideoUI", 
                E.SHARE_HOT = "shareHotUI";
            }(O || (O = {})), function(E) {
                E.WEAPON = "武器库", E.GARAGE = "车库", E.WORLD = "世界地图";
            }(T || (T = {})), function(E) {
                E[E.DEFAULT = 0] = "DEFAULT", E[E.MAIN = 5] = "MAIN", E[E.CENTER = 10] = "CENTER", 
                E[E.COMMON = 100] = "COMMON", E[E.POPUP = 200] = "POPUP", E[E.CONFIRM = 500] = "CONFIRM", 
                E[E.LOADING = 1e3] = "LOADING", E[E.PROMPT = 2e3] = "PROMPT", E[E.TOAST = 9999] = "TOAST";
            }(a || (a = {})), function(E) {
                E.QUICK_START = "quickStart", E.ENTER_GAME = "enterGame", E.GAME_START = "gameStart", 
                E.GAME_PAUSE = "gamePause", E.GAME_CONTINUE = "gameContinue", E.GAME_WIN = "gameWin", 
                E.GAME_FINISH = "gameFinish", E.GAME_RESULT = "gameResult", E.GAME_OVER = "gameOver", 
                E.GAME_REVIVE = "gameRevive", E.RESTART = "gameRestart", E.BACK_TO_HOME = "backToHome", 
                E.CLEAR_GAME_DATA = "clearGameData", E.CLEAR_STORAGE = "clearLocalStorage", E.SHOW_NATIVE_AD = "showNativeAd", 
                E.SHOW_BANNER_AD = "showBannerAd", E.FINISH_LOADING = "finishLoading", E.UPDATE_CAR_PANEL = "updateWarCarPanel", 
                E.UPDATE_CAR_ITEM = "updateWarCarItem", E.UPDATE_LIST_ITEM = "updateListItem", E.UPDATE_CAMERA_ATTR = "updateCameraAttr", 
                E.UPDATE_CAMERA_VIEW = "updateCameraView", E.UPDATE_VIEW_TREE = "updateViewQuadTree", 
                E.UPDATE_MAP = "updateMap", E.PLAY_VEHICLE_ANIM = "playVehicleAnim", E.PLAY_GATE_ANIM = "playGateAnim", 
                E.UPDATE_SCORE = "updateScore", E.UPDATE_MOENY = "updateMoney", E.KILL_ZOMBIE = "killZombie", 
                E.CREATE_MONEY = "createMoney", E.CREATE_MONEY_STACK = "createMoneyStack", E.CREATE_BOMB = "createBomb", 
                E.PLAY_MONEY_STASH = "playMoneyStashAnim", E.SET_PREVIEW_ATTR = "setPreviewAttr", 
                E.SHOW_TUTORIAL_GUIDE = "showTutorialGuide", E.SHOW_BACK_CITY_BTN = "showBackCityBtn", 
                E.BACK_TO_GAME_HUB = "backToGameHub", E.PLAY_SCORE_EFX = "playScoreEfx", E.PLAY_ZOMBIE_BOOM = "playZombieBoomEfx", 
                E.PLAY_BOSS_BOOM = "playZombieBossBoomEfx", E.PLAY_COLLECT_MONEY = "playCollectMoneyEfx", 
                E.PLAY_MONEY_IN_BANK = "playMoneyInBankEfx", E.UPDATE_STICKMAN = "updateStickman", 
                E.UPDATE_SAW_POS = "updateSawPos", E.UPDATE_GUN_POS = "updateGunPos", E.UPDATE_ROCKET_POS = "updateRocketPos", 
                E.UPGRADE_VEHICLE_LV = "upgradeVehicleLv", E.UPGRADE_VEHICLE_SPD = "upgradeVehicleSpd", 
                E.UPGRADE_SAW_LV = "upgradeSawLv", E.UPGRADE_SAW_DMG = "upgradeSawDamage", E.UPGRADE_GUN_LV = "upgradeGunLv", 
                E.UPGRADE_GUN_DMG = "upgradeGunDamage", E.UPGRADE_ROCKET_LV = "upgradeRocketLv", 
                E.UPGRADE_ROCKET_DMG = "upgradeRocketDamage", E.PLAY_UPGRADE_ANIM = "playUpgradeAnim", 
                E.MONEY_FLY_ANIM = "moneyFlyAnim", E.MONEY_SCALE_ANIM = "moneyScaleAnim", E.MONEY_FLY_END = "moneyFlyEnd";
            }(I || (I = {})), function(E) {
                E[E.NONE = 0] = "NONE", E[E.IN_HOME_PAGE = 1] = "IN_HOME_PAGE", E[E.READY = 2] = "READY", 
                E[E.START = 3] = "START", E[E.PAUSE = 4] = "PAUSE", E[E.VICTORY = 5] = "VICTORY", 
                E[E.GAME_OVER = 6] = "GAME_OVER", E[E.RESULT = 7] = "RESULT", E[E.FINISH = 8] = "FINISH";
            }(N || (N = {})), function(E) {
                E[E.NONE = 0] = "NONE", E[E.TUTORIAL = 1] = "TUTORIAL", E[E.NORMAL = 2] = "NORMAL";
            }(R || (R = {})), function(E) {
                E.BGM = "zombieBGM", E.CLICK = "click", E.CLOSE = "close", E.COLLECTION1 = "collection1", 
                E.COLLECTION2 = "collection2", E.ZOMBIE_BOOM = "zombieBoom", E.ZOMBIE_BOSS_BOOM = "zombieBossBoom", 
                E.COLLECT_MONEY = "collectMoney", E.UPGRADE_PARTS = "upgradeParts";
            }(M || (M = {})), function(E) {
                E.ZOMBIE = "zombie", E.MONEY = "money", E.GATE = "gate", E.BANK_ZONE = "bankZone", 
                E.WEAPON_ZONE = "weaponZone", E.WORLD_ZONE = "worldZone", E.GARAGE_ZONE = "garageZone";
            }(o || (o = {})), function(E) {
                E[E.MONEY = 0] = "MONEY", E[E.ONCE_MORE = 1] = "ONCE_MORE";
            }(n || (n = {})), function(E) {
                E[E.STORAGE_BANK = 0] = "STORAGE_BANK", E[E.UNLOCK_MAP = 1] = "UNLOCK_MAP";
            }(t || (t = {}));
            var L, C = [ e("#FFF7C8"), e("#FFDAB0"), e("#FFA8BE"), e("#B9FFA0"), e("#FAAAFF"), e("#FFB1C0"), e("#CBD8DF"), e("#D7B7FD"), e("#FFF687"), e("#D2FF90"), e("#C898FD"), e("#5167A6"), e("#58B37D"), e("#D5AEA2") ], S = [ e("#42f57b"), e("#ff9d00"), e("#3bffad"), e("#ff5721"), e("#64645B"), e("#5059ff"), e("#25FF17"), e("#fdfff4"), e("#af0fff"), e("#16e1ff"), e("#B7FF13"), e("#ff778d"), e("#ffdd00"), e("#8640ff") ];
            !function(E) {
                E[E.GATE = 0] = "GATE", E[E.BANK = 1] = "BANK", E[E.WORLD = 2] = "WORLD";
            }(L || (L = {}));
            var U;
            !function(E) {
                E[E.ALL = 0] = "ALL", E[E.SONG = 1] = "SONG";
            }(U || (U = {}));
            var P = E("Constants", function() {});
            _(P, "UI_DIALOG_NAME", O), _(P, "UI_DIALOG_CHINESE_NAME", T), _(P, "UI_DIALOG_Z_INDEX", a), 
            _(P, "EVENT_TYPE", I), _(P, "GAME_STATE", N), _(P, "GAME_MODE", R), _(P, "AUDIO_SOURCE_TYPE", M), 
            _(P, "COLLIDER_NAME", o), _(P, "AWARD_TYPE", n), _(P, "WORD_TIPS_TYPE", t), _(P, "MAP_LEVEL_COLOR_ARRAY", C), 
            _(P, "ZOMBIE_LEVEL_COLOR_ARRAY", S), _(P, "TUTORIAL_STEP_TYPE", L), _(P, "RCMD_UI_ARRAY", []), 
            _(P, "RANK_TYPE", U), _(P, "IS_DEBUG", !1), _(P, "GAME_MONEY_UNIT", 1), _(P, "REVIVE_MONEY_COUNT", 50), 
            _(P, "MAP_HEIGHT_OFFSET", -6.88), _(P, "ZOMBIE_HEIGHT_OFFSET", 1.35), _(P, "UNLOCK_MAP_PERCENT", .8), 
            _(P, "VEHICLE_BASE_MOVE_SPEED", 7.5), _(P, "VEHICLE_LEVEL_ADD_SPEED", 1), _(P, "GUN_BASE_CD_TIME", 1), 
            _(P, "GUN_LEVEL_DEC_TIME", .1), _(P, "ROCKET_BASE_CD_TIME", 3), _(P, "ROCKET_LEVEL_DEC_TIME", .2), 
            _(P, "VIDEO_RECV_MONEY_COUNT", 500), _(P, "SHARE_MONEY_COUNT", 1e3), _(P, "TOTAl_SIGN_IN_DAYS", 7), 
            _(P, "DAILY_TURN_FREE_COUNT", 3), A._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDAudioVivo.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./RDAudioBase.ts" ], function(i) {
    "use strict";
    var u, o, s, t, n;
    return {
        setters: [ function(i) {
            u = i.inheritsLoose;
        }, function(i) {
            o = i.cclegacy;
        }, function(i) {
            s = i.Log;
        }, function(i) {
            t = i.ConstantCommon;
        }, function(i) {
            n = i.RDAudioBase;
        } ],
        execute: function() {
            o._RF.push({}, "88b80eyF7xBdIylFFwIjY6F", "RDAudioVivo", void 0);
            i("RDAudioVivo", function(i) {
                function o(u, o) {
                    return i.call(this, u, o) || this;
                }
                u(o, i);
                var n = o.prototype;
                return n.playMusicByUrl = function(i, u, o, s, n, c) {
                    var l = this;
                    void 0 === u && (u = !0), void 0 === o && (o = 1), void 0 === s && (s = 0);
                    var e = n ? "" + n + i : "music/" + i, d = u ? t.BUNDLE_NAME.RESOURCES : t.BUNDLE_NAME.AUDIO, r = this._clipDict[i];
                    return this._musicAudio && this._musicAudio.name !== i && this._musicAudio.stop(), 
                    r ? this._playMusicClip(o, s, r) : this.loadMusicClip(e, i, d, function(i) {
                        l._playMusicClip(o, s, i);
                    }), !r;
                }, n.loadMusicClipByUrl = function(i, u, o) {
                    var s;
                    void 0 === u && (u = null), void 0 === o && (o = !0);
                    var n, c = o ? t.BUNDLE_NAME.RESOURCES : t.BUNDLE_NAME.AUDIO, l = "music/" + i;
                    this._clipDict[i] ? null === (n = u) || void 0 === n || n.success() : this.loadMusicClip(l, i, c, null === (s = u) || void 0 === s ? void 0 : s.success);
                }, n.setMusicVolume = function(i) {
                    void 0 === i && (i = 1), this._musicAudio && (this._musicVolume = i, this._musicAudio.volume = i);
                }, n.resumeMusic = function(i) {
                    var u, o;
                    void 0 === i && (i = 0), s.log("定点恢复歌曲", i, this._musicAudio), null === (u = this._musicAudio) || void 0 === u || u.seek(i), 
                    null === (o = this._musicAudio) || void 0 === o || o.play();
                }, n.pauseMusic = function(i) {
                    var u;
                    s.log("暂停音乐", this.getMusicCurrentTime()), null === (u = this._musicAudio) || void 0 === u || u.pause();
                }, n.stopMusic = function() {
                    var i;
                    console.log("停止音乐", this.getMusicCurrentTime()), null === (i = this._musicAudio) || void 0 === i || i.stop();
                }, n.getMusicDuration = function() {
                    return this._musicAudio ? this._musicAudio.duration : 0;
                }, n.getMusicLeftTime = function() {
                    return this.getMusicDuration() - this.getMusicCurrentTime();
                }, n.getMusicCurrentTime = function() {
                    return this._musicAudio ? this._musicAudio.currentTime : 0;
                }, n.isMusicPlaying = function() {
                    return this._musicAudio && !this._musicAudio.paused;
                }, n.getMusiceName = function() {
                    return this._musicAudio ? this._musicAudio.name : "";
                }, n._playMusicClip = function(u, o, t, n) {
                    var c = this;
                    s.log("vivo _playMusicClip", t), this._musicVolume = u, this._musicAudio = t, this._musicAudio.loop = !!n, 
                    this._musicAudio.volume = u, this._musicAudio.play(), this._musicAudio.loop && setTimeout(function() {
                        c._musicAudio.paused && c._musicAudio.play();
                    }, 100), s.log("播放结束", t), i.prototype._playMusicClip.call(this, null, null, t, n);
                }, n.loadMusicClip = function(i, u, o, s) {
                    var n = this;
                    void 0 === o && (o = t.BUNDLE_NAME.RESOURCES), void 0 === s && (s = null), this._loadAudioClip(i, u, o, function(i) {
                        var o, t = window.qg.createInnerAudioContext();
                        t.src = i.nativeUrl, t.name = u, n._clipDict[u] = t, null === (o = s) || void 0 === o || o(t);
                    });
                }, n.playSound = function(i, u, o, s) {
                    var n = this;
                    void 0 === u && (u = 1), void 0 === s && (s = !1);
                    var c = "" + (o || "sound/") + i, l = this._clipDict[i];
                    l ? this._playSoundClip(u, s, l) : this.loadMusicClip(c, i, t.BUNDLE_NAME.AUDIO, function(i) {
                        n._playSoundClip(u, s, i);
                    });
                }, n.stopSound = function(i) {
                    var u = this._clipDict[i];
                    null == u || u.stop();
                }, n._playSoundClip = function(i, u, o) {
                    o.loop = u, o.volume = i, o.play(), o.onEnded(function() {
                        o.stop();
                    });
                }, o;
            }(n));
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/Player.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts", "./ColliderData.ts", "./AgentUnit.ts", "./NavLine.ts", "./GameMoney.ts" ], function(t) {
    "use strict";
    var e, i, n, o, s, r, a, l, _, h, c, d, A, E, p, u, y, m, v, T, D, N, C, f, P;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, i = t.defineProperty, n = t.assertThisInitialized, o = t.createClass;
        }, function(t) {
            s = t.cclegacy, r = t._decorator, a = t.v3, l = t.color, _ = t.Color, h = t.geometry, 
            c = t.SkeletalAnimation, d = t.MeshRenderer, A = t.Node, E = t.Tween, p = t.tween, 
            u = t.isValid, y = t.math, m = t.PhysicsSystem, v = t.Component;
        }, function(t) {
            T = t.Constants;
        }, function(t) {
            D = t.ConstantCommon;
        }, function(t) {
            N = t.COLLIDER_GROUP;
        }, function(t) {
            C = t.AgentUnit;
        }, function(t) {
            f = t.NavLine;
        }, function(t) {
            P = t.GameMoney;
        } ],
        execute: function() {
            var M;
            s._RF.push({}, "8caadAjj7tEKIVbrgedkCgt", "Player", void 0);
            var L, I = r.ccclass, S = T.COLLIDER_NAME, k = T.TUTORIAL_STEP_TYPE, O = a(0, 45, 0), G = l("#FF6C00"), U = [ 3, 5, 6, 6, 6, 5, 6 ], R = [ a(0, 0, -22), a(-11, 0, -8), a(-9.4, 0, 10.73) ], w = a();
            !function(t) {
                t.IDLE = "idle", t.WALK = "walk", t.DRIVE = "drive";
            }(L || (L = {}));
            t("Player", I("Player")(M = function(t) {
                function s() {
                    for (var e, o = arguments.length, s = new Array(o), r = 0; r < o; r++) s[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(s)) || this, i(n(e), "_agentUnit", null), 
                    i(n(e), "_stickmanSkeAnim", null), i(n(e), "_entity", null), i(n(e), "_moneyMtl", null), 
                    i(n(e), "_frontCollider", null), i(n(e), "_moneyCollider", null), i(n(e), "_navLineNode", null), 
                    i(n(e), "_curGuideStep", -1), i(n(e), "_moveDir", a()), i(n(e), "_isPreview", !1), 
                    i(n(e), "_moneyColor", _.WHITE.clone()), i(n(e), "_dirRay", new h.Ray()), e;
                }
                e(s, t);
                var r = s.prototype;
                return r.start = function() {
                    this._agentUnit = this.node.addComponent(C), this._stickmanSkeAnim = rd.Utils.getNodeComponent(this.node, "stickman", c), 
                    this._entity = this.node.getChildByName("entity"), this._moneyMtl = this._entity.getComponent(d).sharedMaterial;
                    var t = this._entity.getChildByName("frontDetect");
                    this._frontCollider = g.App.ColliderData.setFrontDetect(t);
                    var e = this._entity.getChildByName("moneyDetect");
                    this._moneyCollider = g.App.ColliderData.setMoneyDetect(e);
                    var i = U[g.App.VehicleData.level - 1];
                    this._agentUnit.init(i, i), this._showTutorialGuide(k.GATE), this._registerEvent(!0), 
                    g.App.GameData.playerNode = this.node;
                }, r.init = function() {}, r._registerEvent = function(t) {
                    var e = t ? "on" : "off";
                    rd.Event[e](A.EventType.TOUCH_MOVE, this._startMove, this), rd.Event[e](A.EventType.TOUCH_END, this._stopMove, this), 
                    rd.Event[e](T.EVENT_TYPE.UPDATE_STICKMAN, this._updateStickman, this), rd.Event[e](T.EVENT_TYPE.SET_PREVIEW_ATTR, this._setPreviewAttr, this), 
                    rd.Event[e](T.EVENT_TYPE.SHOW_TUTORIAL_GUIDE, this._showTutorialGuide, this), rd.Event[e](T.EVENT_TYPE.BACK_TO_GAME_HUB, this._backToGameHub, this), 
                    this._frontCollider[e]("onTriggerEnter", this._onFrontDetectTriggerEnter, this), 
                    this._frontCollider[e]("onTriggerExit", this._onFrontDetectTriggerExit, this), this._moneyCollider[e]("onTriggerEnter", this._onMoneyDetectTriggerEnter, this);
                }, r._startMove = function(t) {
                    this._isPreview || (this._moveDir.set(t), 1 !== g.App.VehicleData.level || this._stickmanSkeAnim.getState(L.WALK).isPlaying || this._stickmanSkeAnim.play(L.WALK));
                }, r._stopMove = function() {
                    this._moveDir.set(), 1 === g.App.VehicleData.level && this._stickmanSkeAnim.play(L.IDLE);
                }, r._updateStickman = function() {
                    var t = this._entity.getChildByName("stickmanPos").children[g.App.VehicleData.level - 1];
                    this._stickmanSkeAnim.node.setPosition(t.position), this._stickmanSkeAnim.play(1 === g.App.VehicleData.level ? L.IDLE : L.DRIVE);
                    var e = U[g.App.VehicleData.level - 1];
                    this._agentUnit.updateWidth(e, e);
                }, r._setPreviewAttr = function(t, e) {
                    void 0 === t && (t = !1), void 0 === e && (e = null), this._isPreview = t, E.stopAllByTarget(this.node), 
                    E.stopAllByTarget(this._entity), t && e && (p(this.node).to(1, {
                        worldPosition: e.worldPosition
                    }, {
                        easing: "cubicOut"
                    }).start(), p(this._entity).to(1, {
                        eulerAngles: O
                    }, {
                        easing: "cubicOut"
                    }).start(), rd.Event.emit(A.EventType.TOUCH_END));
                }, r._showTutorialGuide = function(t) {
                    g.App.Account.tutorialStep <= t && this._createNavLine(t);
                }, r._createNavLine = function(t) {
                    var e = this;
                    this._curGuideStep = t, rd.Asset.loadPrefab("game/navLine", D.BUNDLE_NAME.PREFAB).then(function(i) {
                        e._recycleNavLine(t), e._navLineNode = rd.Pool.getNode(i, e.node), e._navLineNode.getComponent(f).init(R[t]);
                    });
                }, r._recycleNavLine = function(t) {
                    this._navLineNode && (this._curGuideStep === t && (rd.Pool.putNode(this._navLineNode), 
                    this._navLineNode = null), g.App.Account.tutorialStep === t && (g.App.Account.tutorialStep += 1));
                }, r._backToGameHub = function() {
                    this.node.setPosition(0, 0, 0), this._entity.setRotationFromEuler(0, 180, 0);
                }, r._onFrontDetectTriggerEnter = function(t) {
                    if (u(t.otherCollider)) {
                        var e = t.otherCollider.node;
                        switch (e.name) {
                          case S.GATE:
                            this._recycleNavLine(k.GATE), rd.Event.emit(T.EVENT_TYPE.PLAY_GATE_ANIM, this.node.worldPosition, !0);
                            break;

                          case S.BANK_ZONE:
                            g.App.GameData.isMoneyStash = !0, this._recycleNavLine(k.BANK), this._setMoneyMtlAnim(!1), 
                            g.App.GameData.inBankTimes++, g.App.GameData.inBankTimes % 2 == 0 && rd.Option.systemWXSwitch && rd.UI.showDialog(T.UI_DIALOG_NAME.MONEY);
                            break;

                          case S.WEAPON_ZONE:
                            !this._isShowWordTips() && rd.UI.showDialog(T.UI_DIALOG_NAME.WEAPON, e);
                            break;

                          case S.WORLD_ZONE:
                            this._recycleNavLine(k.WORLD), rd.UI.showDialog(T.UI_DIALOG_NAME.WORLD, e);
                            break;

                          case S.GARAGE_ZONE:
                            !this._isShowWordTips() && rd.UI.showDialog(T.UI_DIALOG_NAME.GARAGE, e);
                        }
                    }
                }, r._setMoneyMtlAnim = function(t) {
                    E.stopAllByTarget(this._moneyColor);
                    var e = this._moneyMtl.passes[0], i = e.getHandle("mainColor");
                    if (t) {
                        var n = _.WHITE, o = function(t) {
                            e.setUniform(i, t);
                        };
                        p(this._moneyColor).to(.75, {
                            r: G.r,
                            g: G.g,
                            b: G.b
                        }, {
                            easing: "sineOut",
                            onUpdate: o
                        }).to(.75, {
                            r: n.r,
                            g: n.g,
                            b: n.b
                        }, {
                            easing: "sineIn",
                            onUpdate: o
                        }).union().repeatForever().start(), g.App.Account.backCityData.isFree && rd.Event.emit(T.EVENT_TYPE.SHOW_BACK_CITY_BTN);
                    } else e.setUniform(i, _.WHITE);
                }, r._isShowWordTips = function() {
                    return g.App.MoneyStack.moneyCnt > 0 && (rd.UI.hideDialog(T.UI_DIALOG_NAME.WORD_TIPS), 
                    rd.UI.showDialog(T.UI_DIALOG_NAME.WORD_TIPS, T.WORD_TIPS_TYPE.STORAGE_BANK), !0);
                }, r._onFrontDetectTriggerExit = function(t) {
                    if (u(t.otherCollider)) switch (t.otherCollider.node.name) {
                      case S.GATE:
                        rd.Event.emit(T.EVENT_TYPE.PLAY_GATE_ANIM, this.node.worldPosition);
                        break;

                      case S.BANK_ZONE:
                        g.App.GameData.isMoneyStash = !1, this._setMoneyDetect();
                    }
                }, r._setMoneyDetect = function() {
                    this._moneyCollider.enabled = g.App.MoneyStack.moneyCnt < g.App.MoneyStack.maxMoneyCnt;
                }, r._onMoneyDetectTriggerEnter = function(t) {
                    if (u(t.otherCollider)) {
                        var e = t.otherCollider.node;
                        e.name === S.MONEY && g.App.MoneyStack.isCanCollect && (e.parent.getComponent(P).moveTarget = this.node, 
                        g.App.MoneyStack.moneyCnt += 1, this._setMoneyDetect(), 20 === g.App.MoneyStack.moneyCnt && this._showTutorialGuide(k.BANK), 
                        this._moneyCollider.enabled || (this._setMoneyMtlAnim(!0), g.App.Account.tutorialStep > k.BANK && this._createNavLine(k.GATE)));
                    }
                }, r._updateData = function(t) {
                    this._moveDir.lengthSqr() > 0 && this._setPosAndRotation(g.App.VehicleData.speed * t);
                }, r._setPosAndRotation = function(t) {
                    var e = this._moveDir;
                    w.set(e.x * t, 0, -e.y * t);
                    var i = g.App.AgentMgr.getNextPos(this._agentUnit.id, w);
                    this.node.setWorldPosition(i), rd.Event.emit(T.EVENT_TYPE.UPDATE_CAMERA_VIEW, i);
                    var n = y.toDegree(Math.atan2(e.y, e.x)) + 90, o = n - this._entity.eulerAngles.y;
                    this._entity.setRotationFromEuler(this._entity.eulerAngles.x, n, 0), rd.Event.emit(T.EVENT_TYPE.PLAY_VEHICLE_ANIM, o);
                }, r._checkPosition = function() {
                    for (var t = this.node.worldPosition, e = 0; e < 2; e++) {
                        var i = 0 === e ? this._moveDir.x : 0, n = 0 === e ? 0 : -this._moveDir.y;
                        h.Ray.set(this._dirRay, t.x, 0, t.z, i, 0, n), m.instance.raycastClosest(this._dirRay, N.WALL) && m.instance.raycastClosestResult.distance < U[g.App.VehicleData.level - 1] && (0 === e ? w.x = 0 : w.z = 0);
                    }
                }, r.update = function(t) {
                    this._updateData(t);
                }, r.onDestroy = function() {
                    this._registerEvent(!1);
                }, o(s, [ {
                    key: "worldPos",
                    get: function() {
                        return this.node.worldPosition;
                    }
                }, {
                    key: "moveDir",
                    get: function() {
                        return this._moveDir;
                    }
                } ]), s;
            }(v)) || M);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/QuadTreeNode.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./RectBounds.ts" ], function(e) {
    "use strict";
    var n, t, o, s, u, r, i, c;
    return {
        setters: [ function(e) {
            n = e.inheritsLoose, t = e.defineProperty, o = e.assertThisInitialized, s = e.createClass;
        }, function(e) {
            u = e.cclegacy, r = e._decorator, i = e.Component;
        }, function(e) {
            c = e.RectBounds;
        } ],
        execute: function() {
            var d;
            u._RF.push({}, "8f358wUYspG46nM7BcsKhnh", "QuadTreeNode", void 0);
            var a = r.ccclass;
            e("QuadTreeNode", a("QuadTreeNode")(d = function(e) {
                function u() {
                    for (var n, s = arguments.length, u = new Array(s), r = 0; r < s; r++) u[r] = arguments[r];
                    return n = e.call.apply(e, [ this ].concat(u)) || this, t(o(n), "_bounds", null), 
                    n;
                }
                n(u, e);
                var r = u.prototype;
                return r.onEnable = function() {
                    this.updateBounds();
                }, r.updateBounds = function() {
                    var e = this.node.worldPosition, n = this.node.scale;
                    this._bounds ? this._bounds.init(e.x, e.z, n.x, n.z) : this._bounds = new c(e.x, e.z, n.x, n.z);
                }, s(u, [ {
                    key: "bounds",
                    get: function() {
                        return this._bounds;
                    }
                } ]), u;
            }(i)) || d);
            u._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDTencentGDTPlatform.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./RDPlatformParam.ts", "./RDPlatformType.ts", "./RDPlatform.ts" ], function(t) {
    "use strict";
    var e, n, a, i, r, o, c, s;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, a = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy;
        }, function(t) {
            r = t.Log;
        }, function(t) {
            o = t.RDPlatformParam;
        }, function(t) {
            c = t.RDPlatformType;
        }, function(t) {
            s = t.RDPlatform;
        } ],
        execute: function() {
            i._RF.push({}, "8f8877aEVhKQ7GXyvDB2UQu", "RDTencentGDTPlatform", void 0);
            t("RDTencentGDTPlatform", function(t) {
                function i(e) {
                    var i;
                    return i = t.call(this, e) || this, n(a(i), "vibrateInterval", null), i;
                }
                e(i, t);
                var s = i.prototype;
                return s.initAD = function() {
                    window.TencentGDT = window.TencentGDT || [];
                    var t, e, n, a = this, i = o.ADPARAM[c.TencentGTD7377.toString()].video_id, s = o.ADPARAM[c.TencentGTD7377.toString()].appid;
                    r.debug(this.constructor.name, "开始创建广告位==="), window.TencentGDT.push({
                        placement_id: i,
                        app_id: s,
                        type: "rewardVideo",
                        onComplete: function(t) {
                            r.debug(this.constructor.name, "开始创建广告位===" + JSON.stringify(t)), 0 == t.code ? a._videoBoxInstance = new window.TencentGDT.NATIVE.rewardVideoAd(function(t) {
                                var e = JSON.parse(t);
                                r.debug(this.constructor.name, "成功回调2222222333   " + JSON.stringify(e)), 0 == e.code ? (r.debug(this.constructor.name, "成功回调1" + e.data.action), 
                                "onReward" == e.data.action ? a._rewardCaback && a._rewardCaback.success(null) : "onADClose" == e.data.action ? (r.debug(this.constructor.name, "激励视频关闭"), 
                                a._rewardCaback && a._rewardCaback.fail()) : "onADLoad" == e.data.action ? (r.debug(this.constructor.name, "加载视频成功"), 
                                a._videoBoxInstance && a._videoBoxInstance.showAd()) : "onError" == e.data.action && (r.debug(this.constructor.name, "加载广告失败"), 
                                a._rewardCaback && a._rewardCaback.fail())) : a._rewardCaback && a._rewardCaback.fail();
                            }) : r.debug(this.constructor.name, "失败");
                        }
                    }), t = document, e = t.getElementsByTagName("head")[0], (n = t.createElement("script")).async = !0, 
                    n.src = "//qzs.qq.com/qzone/biz/res/i.js", e && e.insertBefore(n, e.firstChild);
                }, s._vibrateShort = function(t) {
                    void 0 === t && (t = 50), 100 != t ? this.startVibrate(t) : this.startPeristentVibrate(100, .01);
                }, s.startVibrate = function(t) {
                    navigator.vibrate(t);
                }, s.stopVibrate = function() {
                    this.vibrateInterval && clearInterval(this.vibrateInterval), navigator.vibrate(0);
                }, s.startPeristentVibrate = function(t, e) {
                    this.vibrateInterval = setInterval(function() {
                        this.startVibrate(t);
                    }, e);
                }, s._showBannerAd = function(t) {
                    if (this.isReviewed()) r.debug(this.constructor.name, "审核中====="); else {
                        var e = o.ADPARAM[c.TencentGTD7377.toString()].banner_id, n = o.ADPARAM[c.TencentGTD7377.toString()].appid;
                        window.TencentGDT.push({
                            placement_id: e,
                            app_id: n,
                            type: "native",
                            display_type: "banner",
                            carousel: 6e3,
                            containerid: "banner_2_0",
                            onComplete: function(t) {
                                0 == t.ret ? r.debug(this.constructor.name, "广告播放成功") : r.debug(this.constructor.name, "广告播放失败");
                            }
                        });
                    }
                }, s._showVideo = function(t) {
                    this.isReviewed() ? this._rewardCaback.success(null) : (r.debug(this.constructor.name, "点击开始激励视频播放"), 
                    this._videoBoxInstance.loadAd());
                }, s._showIntertitalAd = function(t) {
                    if (!this.isReviewed()) {
                        var e = o.ADPARAM[c.TencentGTD7377.toString()].interstital_id, n = o.ADPARAM[c.TencentGTD7377.toString()].appid;
                        window.TencentGDT.push({
                            placement_id: e,
                            app_id: n,
                            type: "native",
                            display_type: "interstitial",
                            count: 1,
                            onComplete: function(t) {
                                t && 0 === t.ret ? window.TencentGDT.NATIVE.renderAd(t.data[0]) : r.debug(this.constructor.name, t.ret);
                            }
                        });
                    }
                }, i;
            }(s));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/VideoAdBase.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts" ], function(n) {
    "use strict";
    var t, o, i, e;
    return {
        setters: [ function(n) {
            t = n.createClass, o = n.defineProperty;
        }, function(n) {
            i = n.cclegacy;
        }, function(n) {
            e = n.Log;
        } ],
        execute: function() {
            i._RF.push({}, "90dddw16qBMDIY8hGHeHen2", "VideoAdBase", void 0);
            n("VideoAdBase", function() {
                function n(n) {
                    o(this, "_platName", void 0), o(this, "_config", void 0), o(this, "_adInstance", null), 
                    o(this, "_isShow", !1), o(this, "_rewardCaback", void 0), this._config = n;
                }
                var i = n.prototype;
                return i.create = function(n) {
                    var t, o, i, a, s, d, c, r = this;
                    e.debug("创建 激励视频"), this._adInstance = null === (t = window[this._platName]) || void 0 === t ? void 0 : t.createRewardedVideoAd({
                        adUnitId: "adunit-48a5d8e1ce82b9d9",
                        posId: this._config.adUnitId,
                        success: function(n) {
                            e.debug(r.constructor.name, "激励视频 创建成功", r._config.adUnitId);
                        },
                        fail: function(n, t) {
                            e.debug(r.constructor.name, "激励视频 创建失败: " + n + "," + t);
                        },
                        complete: function() {
                            e.debug(r.constructor.name, "激励视频 创建完成");
                        }
                    }), e.debug(this.constructor.name, "创建 激励视频1"), null === (o = this._adInstance) || void 0 === o || null === (i = o.onLoad) || void 0 === i || i.call(o, function() {
                        e.debug(r.constructor.name, "激励视频 加载成功"), !r._isShow && r._rewardCaback && (r._adInstance.show(), 
                        e.debug(r.constructor.name, "激励视频加载成功 开始播放")), r._isShow = !0;
                    }), null === (a = this._adInstance) || void 0 === a || null === (s = a.onError) || void 0 === s || s.call(a, function(n) {
                        var t;
                        e.debug(r.constructor.name, "激励视频 错误", JSON.stringify(n)), rd.UI.showTipMessage("暂无广告,广告加载中..."), 
                        null === (t = r._rewardCaback) || void 0 === t || t.fail(), r._isShow = !1;
                    }), null === (d = this._adInstance) || void 0 === d || null === (c = d.onClose) || void 0 === c || c.call(d, function(n) {
                        var t, o;
                        n && n.isEnded || void 0 === n ? (e.debug(r.constructor.name, "正常播放结束，可以下发游戏奖励"), 
                        null === (t = r._rewardCaback) || void 0 === t || t.success(null)) : (e.debug(r.constructor.name, "播放中途退出，不下发游戏奖励"), 
                        null === (o = r._rewardCaback) || void 0 === o || o.fail());
                        r._rewardCaback = null, r._isShow = !1;
                    });
                }, i.load = function() {
                    throw new Error("Method not implemented.");
                }, i.show = function(n) {
                    var t, o;
                    e.debug(this.constructor.name, "base显示激励视频", JSON.stringify(this._config.adUnitId)), 
                    this._rewardCaback = n, null === (t = (o = this._adInstance).load) || void 0 === t || t.call(o);
                }, i.hide = function() {}, i.destroy = function() {
                    var n, t;
                    null === (n = this._adInstance) || void 0 === n || null === (t = n.destroy) || void 0 === t || t.call(n), 
                    this._adInstance = null;
                }, t(n, [ {
                    key: "isShow",
                    get: function() {
                        return this._isShow;
                    },
                    set: function(n) {
                        this._isShow = n;
                    }
                } ]), n;
            }());
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/GameMoney.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts" ], function(e) {
    "use strict";
    var o, t, n, i, s, a, l, r, d, m, c, _, u;
    return {
        setters: [ function(e) {
            o = e.inheritsLoose, t = e.defineProperty, n = e.assertThisInitialized, i = e.createClass;
        }, function(e) {
            s = e.cclegacy, a = e._decorator, l = e.v3, r = e.Animation, d = e.Collider, m = e.Vec3, 
            c = e.Node, _ = e.Component;
        }, function(e) {
            u = e.Constants;
        } ],
        execute: function() {
            var h;
            s._RF.push({}, "93a26OXj69M+7/SMZnac9Iv", "GameMoney", void 0);
            var p = a.ccclass, y = l(), v = l();
            e("GameMoney", p("GameMoney")(h = function(e) {
                function s() {
                    for (var o, i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                    return o = e.call.apply(e, [ this ].concat(s)) || this, t(n(o), "_moneyAnim", null), 
                    t(n(o), "_moneyNode", null), t(n(o), "_colliderComp", null), t(n(o), "_moveTarget", null), 
                    t(n(o), "_moveSpd", 0), o;
                }
                o(s, e);
                var a = s.prototype;
                return a.onLoad = function() {
                    this._moneyAnim = this.getComponent(r), this._moneyNode = this.node.getChildByName("money"), 
                    this._colliderComp = this._moneyNode.getComponent(d), y.set(this._moneyNode.position);
                }, a.start = function() {
                    g.App.ColliderData.setGameMoney(this._colliderComp);
                }, a.reuse = function(e) {
                    var o = this;
                    void 0 === e && (e = !0), this._colliderComp.enabled = !e, e && (this._moneyAnim.play(), 
                    this._moneyAnim.once(r.EventType.FINISHED, function() {
                        o._colliderComp.enabled = !0;
                    }));
                }, a._updateMovePos = function(e) {
                    this._moveTarget && (m.subtract(v, this._moveTarget.worldPosition, this._moneyNode.worldPosition), 
                    this._moveSpd < 1 && (this._moveSpd += 2.5 * e, this._moveSpd > 1 && (this._moveSpd = 1)), 
                    v.multiplyScalar(this._moveSpd), this._moneyNode.translate(v, c.NodeSpace.WORLD), 
                    this._collectMoney());
                }, a._collectMoney = function() {
                    var e = this._moveTarget.worldPosition;
                    m.squaredDistance(e, this._moneyNode.worldPosition) > 3.5 || (this._moveTarget = null, 
                    this._moveSpd = 0, rd.Event.emit(u.EVENT_TYPE.CREATE_MONEY_STACK, this.node), rd.Event.emit(u.EVENT_TYPE.PLAY_COLLECT_MONEY, e), 
                    rd.Audio.playSound(u.AUDIO_SOURCE_TYPE.COLLECT_MONEY, .5));
                }, a.update = function(e) {
                    this._updateMovePos(e);
                }, a.onDisable = function() {
                    this._moneyNode.setPosition(y);
                }, i(s, [ {
                    key: "moveTarget",
                    set: function(e) {
                        this._moveTarget = e, this._colliderComp.enabled = !1;
                    }
                } ]), s;
            }(_)) || h);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDXMMiniPlatform.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./RDPlatformParam.ts", "./RDPlatformType.ts", "./RDPlatform.ts" ], function(t) {
    "use strict";
    var n, e, i, a, o, s;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose;
        }, function(t) {
            e = t.cclegacy;
        }, function(t) {
            i = t.Log;
        }, function(t) {
            a = t.RDPlatformParam;
        }, function(t) {
            o = t.RDPlatformType;
        }, function(t) {
            s = t.RDPlatform;
        } ],
        execute: function() {
            e._RF.push({}, "948dbaY6AJBj4L5oi246QP1", "RDXMMiniPlatform", void 0);
            t("RDXMMiniPlatform", function(t) {
                function e(n) {
                    return t.call(this, n) || this;
                }
                n(e, t);
                var s = e.prototype;
                return s.initAD = function() {
                    var n = this;
                    t.prototype.initAD.call(this);
                    var e = a.ADPARAM[o.XMGame.toString()].video_id;
                    this._videoBoxInstance = this._api.createRewardedVideoAd({
                        adUnitId: "adunit-48a5d8e1ce82b9d9"
                    }), this._videoBoxInstance.load(), this._videoBoxInstance.onLoad(function() {
                        i.debug(n.constructor.name, "视频广告加载成功");
                    }), this._videoBoxInstance.onError(function(t) {
                        n._showToast("暂时没有视频了，请稍后再试"), i.debug(n.constructor.name, "videoAd.onError,errMsg", JSON.stringify(t)), 
                        n._rewardCaback && n._rewardCaback.fail();
                    }), this._videoBoxInstance.onClose(function(t) {
                        i.debug(n.constructor.name, "玩家有操作", JSON.stringify(t)), t && t.isEnded || void 0 === t ? (i.debug(n.constructor.name, "正常播放结束，可以下发游戏奖励"), 
                        n._rewardCaback && n._rewardCaback.success(null)) : n._rewardCaback && (i.debug(n.constructor.name, "播放中途退出，不下发游戏奖励"), 
                        n._rewardCaback.fail()), n._rewardCaback = null;
                    });
                    for (var s = a.ADPARAM[o.XMGame.toString()].banner_preload_count || 3, r = 0; r < s; r++) {
                        var c = this.createBanner();
                        this._bannerADInstances.push(c);
                    }
                }, s.initInterval = function() {}, s.createBanner = function() {
                    var t = a.ADPARAM[o.XMGame.toString()].banner_id;
                    return i.debug(this.constructor.name, "广告bannerID====" + t), this._api.createBannerAd({
                        adUnitId: t
                    });
                }, s.shareAppMessage = function(t) {}, s._showToast = function(t) {
                    this._api.showToast({
                        title: t,
                        icon: "none",
                        image: "",
                        mask: !1,
                        duration: 2e3,
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, s._gotoMiniGameByAppid = function(t) {
                    i.debug(this.constructor.name, "跳转小游戏" + t.packName), this._api.navigateToMiniGame({
                        pkgName: t.packName,
                        success: function() {
                            i.debug(this.constructor.name, "跳转成功");
                        },
                        fail: function(t) {
                            i.debug(this.constructor.name, JSON.stringify(t));
                        },
                        complete: function() {}
                    });
                }, s._vibrateShort = function(t) {
                    void 0 === t && (t = 50), 100 != t ? this.vibrate(t) : this.vibrateStrong();
                }, s.vibrateStrong = function() {
                    this._api.vibrateLong({
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, s.vibrate = function(t) {
                    var n = t / 15, e = 0, i = setInterval(function() {
                        this._api.vibrateShort({
                            success: function() {},
                            fail: function() {},
                            complete: function() {}
                        }), ++e > n && (clearTimeout(i), i = null);
                    }, 15);
                }, s._showBannerAd = function(t) {
                    if (this.isReviewed()) i.debug(this.constructor.name, "审核中====="); else {
                        this._showToast("显示banner"), i.debug(this.constructor.name, "调用banner" + this._bannerADInstances.length + " ==== " + this._bannerShowIndex);
                        var n = a.ADPARAM[o.OPPOGame.toString()].banner_preload_count || 1;
                        this._bannerShowIndex >= n && (this._bannerShowIndex = 0), i.debug(this.constructor.name, "调用banner" + this._bannerADInstances.length + " ==== " + this._bannerShowIndex), 
                        this._bannerADInstance && this._bannerADInstance.hide(), this._bannerADInstance = null;
                        var e = this._bannerADInstances[this._bannerShowIndex];
                        e ? (i.debug(this.constructor.name, "调用banner"), e.show(), this._bannerADInstance = e) : i.debug(this.constructor.name, "banner 广告显示失败"), 
                        this._bannerShowIndex += 1;
                    }
                }, s._showVideo = function(t) {
                    this.isReviewed() ? this._rewardCaback && this._rewardCaback.success(null) : (i.debug(this.constructor.name, "准备激励广告 展示开始"), 
                    this._videoBoxInstance.show());
                }, s._showIntertitalAd = function(t) {
                    this.isReviewed() || this._interstitialAdInstance.show();
                }, s._createShortcutInstalled = function(t) {
                    if (this._api.getProvider()) {
                        var n = this;
                        this._api.getShortcut().hasInstalled({
                            success: function(t) {
                                i.debug(this.constructor.name, "判断图标未存在时，创建图标" + JSON.stringify(t)), n._hasShortcutInstalled = t;
                            },
                            fail: function(t) {},
                            complete: function() {}
                        });
                    }
                }, s._installShortcut = function(t) {
                    i.debug(this.constructor.name, "各个平台处理");
                    var n = this;
                    this._api.getShortcut().install({
                        success: function() {
                            i.debug(this.constructor.name, "各个平台处理==="), n._hasShortcutInstalled = !1, n._shortCutInstalledCaback && n._shortCutInstalledCaback.success(null);
                        },
                        fail: function(t) {
                            i.debug(this.constructor.name, "各个平台处理1111111==="), n._shortCutInstalledCaback && n._shortCutInstalledCaback.fail();
                        },
                        complete: function() {}
                    });
                }, s._login = function(n) {
                    t.prototype._login.call(this, n);
                }, e;
            }(s));
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/SingletonBase.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(n) {
    "use strict";
    var t, e;
    return {
        setters: [ function(n) {
            t = n.construct;
        }, function(n) {
            e = n.cclegacy;
        } ],
        execute: function() {
            e._RF.push({}, "95625H0cslDu5hNxqDbAauE", "SingletonBase", void 0);
            n("SingletonBase", function() {
                function n() {}
                return n.getInstance = function() {
                    for (var n = this, e = arguments.length, c = new Array(e), s = 0; s < e; s++) c[s] = arguments[s];
                    return n._instance || (n._instance = t(n, c));
                }, n;
            }());
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDSocialManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./SingletonBase.ts", "./RDCommand.ts", "./RDPlatformType.ts" ], function(n) {
    "use strict";
    var t, a, r, e, o, i, s, u;
    return {
        setters: [ function(n) {
            t = n.defineProperty, a = n.inheritsLoose, r = n.assertThisInitialized;
        }, function(n) {
            e = n.cclegacy;
        }, function(n) {
            o = n.Log;
        }, function(n) {
            i = n.SingletonBase;
        }, function(n) {
            s = n.RDCommand;
        }, function(n) {
            u = n.RDPlatformType;
        } ],
        execute: function() {
            e._RF.push({}, "96328mDz9lKDaIgwWZ1uvWO", "RDSocialManager", void 0);
            var c = function(n) {
                function e() {
                    for (var a, e = arguments.length, o = new Array(e), i = 0; i < e; i++) o[i] = arguments[i];
                    return a = n.call.apply(n, [ this ].concat(o)) || this, t(r(a), "lastRank", 0), 
                    t(r(a), "currentRank", 0), a;
                }
                a(e, n);
                var i = e.prototype;
                return i.init = function() {
                    o.debug(e.TAG, "[RDSocialManager] Init"), this.updateRankInfo();
                }, i.setLastRank = function(n) {
                    n > 0 && (this.lastRank = n);
                }, i.setCurrentRank = function(n) {
                    n > 0 && (this.currentRank = n);
                }, i.getRankUp = function() {
                    return this.lastRank <= 0 ? this.currentRank : this.lastRank - this.currentRank;
                }, i.getCurrentRank = function() {
                    return this.currentRank;
                }, i.updateRankInfo = function() {
                    rd.Platform.sendData(s.CMD_GET_RANK, null);
                }, i.share = function(n) {
                    rd.Platform.sendData(s.CMD_SHARE, n);
                }, i.isShowVideo = function() {
                    return rd.Platform.platformType == u.TTMinGame;
                }, i.startRecordVideo = function(n) {
                    rd.Platform.sendData(s.CMD_RECORDVIDEO, n);
                }, i.pauseRecordVideo = function() {
                    rd.Platform.sendData(s.CMD_STOPRECORDVIDEO, null);
                }, i.shareVideo = function(n) {
                    rd.Platform.sendData(s.CMD_SHAREVIDEO, n);
                }, e;
            }(i);
            t(c, "TAG", "RDSocialManager"), t(c, "PAGE_COUNT", 100), void 0 === window.rd && (window.rd = {});
            var l = n("default", c.getInstance());
            window.rd.Social = l, e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/IntertitalAdOppo.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./IntertitalAdBase.ts" ], function(t) {
    "use strict";
    var e, n, i;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy;
        }, function(t) {
            i = t.IntertitalAdBase;
        } ],
        execute: function() {
            n._RF.push({}, "97959Ec24hJJZXinvlRgYiB", "IntertitalAdOppo", void 0);
            t("IntertitalAdOppo", function(t) {
                function n(e) {
                    var n;
                    return (n = t.call(this, e) || this)._platName = "qg", n.create(), n;
                }
                return e(n, t), n;
            }(i));
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/WorldUI.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts", "./RDStatisticsManager.ts", "./UIGBase.ts", "./MapLvItem.ts" ], function(t) {
    "use strict";
    var e, n, o, s, i, r, a, d, I, c, l, u;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, o = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy, i = t._decorator, r = t.ScrollView, a = t.instantiate;
        }, function(t) {
            d = t.Constants;
        }, function(t) {
            I = t.ConstantCommon;
        }, function(t) {
            c = t.CustomEventID;
        }, function(t) {
            l = t.UIGBase;
        }, function(t) {
            u = t.MapLvItem;
        } ],
        execute: function() {
            var h;
            s._RF.push({}, "97b66rhZIdKPZ1wV2eqcDRs", "WorldUI", void 0);
            var m = i.ccclass;
            t("WorldUI", m("WorldUI")(h = function(t) {
                function s() {
                    for (var e, s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, n(o(e), "_closeBtnNode", null), 
                    n(o(e), "_mapLvItemArr", []), e;
                }
                e(s, t);
                var i = s.prototype;
                return i.onLoad = function() {
                    rd.Utils.getNodeComponent(this.node, "mapScrollView", r).scrollToBottom(), this._closeBtnNode = rd.Utils.registerButtonEvent(this.node, "closeBtn", this._onCloseButton, this), 
                    this._createMapLvItem(), this.initBgOpacity(), this.initAdData(), this.setOppoLookAdBtn(this.node), 
                    this.zIndex = d.UI_DIALOG_Z_INDEX.POPUP;
                }, i.show = function(e) {
                    this._mapLvItemArr.forEach(function(t) {
                        return t.updateData();
                    }), this.playScaleInAnim([ this.centerUI ], [ this._closeBtnNode ]), this.setShowAdData(!0, I.INTERSTITIALAD_POSITION.POSITION_SECOND), 
                    t.prototype.show.call(this), rd.Event.emit(d.EVENT_TYPE.SET_PREVIEW_ATTR, !0, e), 
                    rd.Ads.showCustomAdVBannerLEFT(rd.UI.getDialogByName(d.UI_DIALOG_NAME.SIGN_IN)), 
                    rd.Ads.showCustomAdVBannerRIGHT(rd.UI.getDialogByName(d.UI_DIALOG_NAME.SIGN_IN)), 
                    rd.Ads.showCustomAdBannerTop(rd.UI.getDialogByName(d.UI_DIALOG_NAME.SIGN_IN));
                }, i.hide = function() {
                    t.prototype.hide.call(this), rd.Event.emit(d.EVENT_TYPE.SET_PREVIEW_ATTR), rd.Ads.hideCustomAdVBannerLEFT(), 
                    rd.Ads.hideCustomAdVBannerRIGHT(), rd.Ads.hideCustomAdBannerTop();
                }, i.getUIName = function() {
                    return d.UI_DIALOG_CHINESE_NAME.WORLD;
                }, i._createMapLvItem = function() {
                    var t = rd.Utils.getNodeByName(this.node, "mapLvPanel"), e = rd.Utils.getNodeByName(t, "mapLvItem"), n = t.children;
                    e.removeFromParent();
                    for (var o = 0, s = n.length; o < s; o++) {
                        var i = 0 === o ? e : a(e);
                        i.parent = n[o];
                        var r = i.getComponent(u);
                        r.init(o), this._mapLvItemArr.push(r);
                    }
                }, i._onCloseButton = function() {
                    rd.UI.isUIAnimPlaying() || (this.playScaleOutAnim([ this.centerUI ], function() {
                        rd.UI.hideDialog(d.UI_DIALOG_NAME.WORLD);
                    }), rd.Stats.customEvent(c.custom_button_click, {
                        curDialog: this.getUIName(),
                        btnType: "关闭"
                    }));
                }, s;
            }(l)) || h);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/PushControl.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./RDCommand.ts", "./ADMainPush.ts" ], function(t) {
    "use strict";
    var i, n, s, e, a, h, o, r, d, c, u, l, _;
    return {
        setters: [ function(t) {
            i = t.inheritsLoose, n = t.defineProperty, s = t.assertThisInitialized;
        }, function(t) {
            e = t.cclegacy, a = t._decorator, h = t.ButtonComponent, o = t.v3, r = t.macro, 
            d = t.Component;
        }, function(t) {
            c = t.Log;
        }, function(t) {
            u = t.ConstantCommon;
        }, function(t) {
            l = t.RDCommand;
        }, function(t) {
            _ = t.ADMainPush;
        } ],
        execute: function() {
            var v;
            e._RF.push({}, "9881bsORXlB3rDVA9EYaABp", "PushControl", void 0);
            var B = a.ccclass;
            t("PushControl", B("PushControl")(v = function(t) {
                function e() {
                    for (var i, e = arguments.length, a = new Array(e), h = 0; h < e; h++) a[h] = arguments[h];
                    return i = t.call.apply(t, [ this ].concat(a)) || this, n(s(i), "_mainPush", []), 
                    n(s(i), "_oldMainPush", []), n(s(i), "_bannerList", null), n(s(i), "_drawList", null), 
                    n(s(i), "addIcon", null), n(s(i), "wxBtn", null), n(s(i), "_adBanner", null), n(s(i), "_adBannerScript", null), 
                    n(s(i), "_interstitialNativeAd", null), n(s(i), "_interstitialScript", null), n(s(i), "_isGamePlaying", !1), 
                    n(s(i), "_splashNativeAd", null), n(s(i), "_bannerListCreate", !1), n(s(i), "_drawCreate", !1), 
                    n(s(i), "_bgMask", null), i;
                }
                i(e, t);
                var a = e.prototype;
                return a.start = function() {
                    var t = this;
                    window.rd.PushCtrl = this, this.node.setSiblingIndex(u.UI_DIALOG_Z_INDEX.TOAST), 
                    this._mainPush.push(this.node.getChildByName("mainPush1")), this._mainPush.push(this.node.getChildByName("mainPush2")), 
                    this._mainPush.push(this.node.getChildByName("mainPush3")), this._mainPush.push(this.node.getChildByName("mainPush4")), 
                    this._bannerList = this.node.getChildByName("bannerList"), this._drawList = this.node.getChildByName("drawList"), 
                    this._adBanner = this.node.getChildByName("nativeBanner"), this._adBanner.active = !1, 
                    this._bgMask = this.node.getChildByName("bgMask"), this._bgMask.active = !1, this._interstitialNativeAd = this.node.getChildByName("nativeInterstitial"), 
                    this._interstitialNativeAd.active = !1, this._splashNativeAd = this.node.getChildByName("splash"), 
                    this.addIcon = this.node.getChildByName("addIcon").getComponent(h), this.addIcon.node.on("click", this.onAddClick, this), 
                    this.addIcon.node.active = !1, this.wxBtn = this.node.getChildByName("wxBtn").getComponent(h), 
                    this.wxBtn.node.on("click", this.onOpenAdScreen, this), this.showJPYXBtn(!1), rd.Event.on("showBannerListByPos", this.showBannerListByPos, this), 
                    this.scheduleOnce(function() {
                        for (var t = 0; t < this._mainPush.length; t++) {
                            var i = this._mainPush[t];
                            rd.Ads.showMainPush(i, o(0, 0, 0), 8e3), i.active = !1;
                        }
                    }.bind(this), .1), this.scheduleOnce(function() {
                        t.showDrawListByNode(), t.showBannerListByNode(), t.showMainPushByNodes();
                    }, .2), rd.Option.regionEnable && this.schedule(rd.UI.updateCheckShowBanner, 30, r.REPEAT_FOREVER, 60);
                }, a.showBgMask = function(t) {
                    void 0 === t && (t = !1), this._bgMask.active = t;
                }, a.onDestroy = function() {
                    rd.Event.off("showBannerListByPos", this.showBannerListByPos, this);
                }, a.refreshSingleMainPush = function(t) {
                    void 0 === t && (t = null);
                    var i = this._mainPush[0];
                    t ? i.active || (i.setWorldPosition(t.getWorldPosition()), i.active = !0, this.scheduleOnce(function() {
                        rd.Ads.updateMainPush();
                    }, .1)) : i.active = !1;
                }, a.showMainPushByNodes = function(t) {
                    void 0 === t && (t = []);
                    for (var i = 0; i < this._mainPush.length; i++) {
                        this._mainPush[i].active = !1;
                    }
                    for (var n = 0; n < t.length; n++) {
                        this._mainPush[n].active = !0;
                        var s = this._mainPush[n].getChildByName("ADMainPush");
                        s && s.getComponent(_).freash();
                        var e = t[n];
                        this._mainPush[n] && this._mainPush[n].setWorldPosition(e.getWorldPosition());
                    }
                }, a.showMainPush = function(t) {
                    if (t) {
                        for (var i = 0; i < this._oldMainPush.length; i++) {
                            this._oldMainPush[i].active = !0;
                        }
                        this._oldMainPush = [];
                    } else for (var n = 0; n < this._mainPush.length; n++) this._mainPush[n].active && (this._mainPush[n].active = !1, 
                    this._oldMainPush.push(this._mainPush[n]));
                }, a.showBannerListByNode = function(t) {
                    void 0 === t && (t = null), t ? (this._bannerList.active = !0, this._bannerListCreate || (rd.Ads.showADBannerList(this._bannerList, o(0, 0, 0)), 
                    this._bannerListCreate = !0), this._bannerList.setPosition(t.getPosition())) : this._bannerList.active = !1;
                }, a.showBannerListByPos = function(t) {
                    void 0 === t && (t = null), t ? (this._bannerList.active = !0, this._bannerListCreate || (rd.Ads.showADBannerList(this._bannerList, o(0, 0, 0)), 
                    this._bannerListCreate = !0), t || this._bannerList.setPosition(o(0, t, 0))) : this._bannerList.active = !1;
                }, a.showDrawListByNode = function(t) {
                    void 0 === t && (t = null), t ? (this._drawList.active = !0, this._drawCreate || (this._drawCreate = !0, 
                    rd.Ads.showADDraw(this._drawList, 0)), this._drawList.setPosition(o(0, t.getPosition().y, 0))) : this._drawList.active = !1;
                }, a.showShutIcon = function(t) {
                    void 0 === t && (t = null), rd.Platform.HasShortcutInstalled() && (t = null), t ? (this.addIcon.node.active = !0, 
                    this.addIcon.node.setWorldPosition(t.getWorldPosition())) : this.addIcon.node.active = !1;
                }, a.showJPYXBtn = function(t) {
                    void 0 === t && (t = !0);
                    var i = this.wxBtn.node.active;
                    return this.wxBtn.node.active = t, i;
                }, a.onAddClick = function() {
                    var t = this;
                    rd.Platform.sendData(l.CMD_ADDSHORTCUT, {
                        success: function() {
                            t.showShutIcon();
                        },
                        fail: function() {}
                    });
                }, a.onOpenAdScreen = function() {
                    rd.Ads.showAdScreen();
                }, a.showNativeBanner = function() {
                    var t = this;
                    this._adBannerScript && this._adBanner.children.length > 0 ? this._adBanner.active && this._adBannerScript.isVisible() || (c.debug(this.constructor.name, "重新显示banner"), 
                    this._adBanner.active = !0, this._adBannerScript.reTry()) : (this._adBanner.active = !0, 
                    c.debug(this.constructor.name, "Push創建展示原生banner1"), rd.Ads.showNativeBannerAd(this._adBanner, function() {
                        t._adBanner.active = !1;
                    }, function(i) {
                        t._adBannerScript = i, t._adBannerScript.setPopupName("原生banner");
                    }));
                }, a.hideNativeBanner = function() {
                    this._adBanner.children.length > 0 && (this._adBanner.active = !1);
                }, a.isShowNativeBanner = function() {
                    return this._adBanner.active && this._adBannerScript;
                }, a.showNatvieInterstitialAd = function(t) {
                    var i = this;
                    void 0 === t && (t = {}), c.debug(this.constructor.name, "Push創建展示原生插屏广告", !!this._interstitialScript), 
                    this._interstitialNativeAd.active = !0, this._interstitialScript ? this._interstitialScript.reTry() : rd.Ads.showNativeInterstitial(this._interstitialNativeAd, function() {
                        i._interstitialNativeAd.active = !1;
                    }, function(n) {
                        i._interstitialScript = n, i._interstitialScript.setCloseType(t.type);
                    });
                }, a.hideNatvieInterstitialAd = function() {
                    this._interstitialNativeAd.children.length > 0 && (this._interstitialNativeAd.active = !1);
                }, a.setGamePlaying = function(t) {
                    var i = this;
                    this._isGamePlaying !== t && (this._isGamePlaying = t, this.scheduleOnce(function() {
                        var n;
                        null === (n = i._adBannerScript) || void 0 === n || n.setGamePlaying(t);
                    }, this._adBannerScript ? .1 : 1));
                }, e;
            }(d)) || v);
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/GameListManger.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./SingletonBase.ts" ], function(t) {
    "use strict";
    var e, a, i, n, r, o, s;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, a = t.defineProperty, i = t.assertThisInitialized, n = t.createClass;
        }, function(t) {
            r = t.cclegacy;
        }, function(t) {
            o = t.Log;
        }, function(t) {
            s = t.SingletonBase;
        } ],
        execute: function() {
            r._RF.push({}, "994cfXyCvJOwYLWKogiLKil", "GameListManger", void 0);
            var g = function(t) {
                function r() {
                    for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return e = t.call.apply(t, [ this ].concat(r)) || this, a(i(e), "_gameListData", []), 
                    e;
                }
                e(r, t);
                var s = r.prototype;
                return s.init = function() {
                    var t = this, e = rd.Platform.getPlatformAreaCode(), a = "https://gamecenter.hey-games.com/gamecenter/cfg/export?appid=" + rd.Platform.HeyGameParam.appid + '&" + ' + e;
                    rd.Http.loadUrl(a, function(e) {
                        if (e) {
                            for (var a = JSON.parse(e).data || [], i = 0; i < a.length; i++) {
                                var n = a[i], r = {
                                    id: n.id,
                                    icon: n.icon,
                                    name: n.title,
                                    appid: n.redrectAppid
                                };
                                t._gameListData.push(r);
                            }
                            o.log("pushGame", t._gameListData);
                        }
                    });
                }, s.getGameListData = function() {
                    return this._gameListData;
                }, s.getStageDataByStageID = function(t) {
                    return this.getGameListData()[t];
                }, s.getRandGameConfig = function() {
                    var t = this.getGameListData(), e = t.length, a = t[Math.floor(Math.random() * (e + 1))] || {};
                    return a || (a = t[0]), a;
                }, s.getPushGameByNet = function(t) {
                    o.log("动态获取====");
                }, n(r, [ {
                    key: "gameList",
                    get: function() {
                        return this.getGameListData();
                    }
                } ]), r;
            }(s);
            void 0 === window.rd && (window.rd = {});
            var c = t("default", g.getInstance());
            window.rd.GameList = c, r._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/VirtualButton.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./RDPlatformType.ts" ], function(t) {
    "use strict";
    var n, i, e, r, o, a, s, l, u, c, d, p;
    return {
        setters: [ function(t) {
            n = t.applyDecoratedDescriptor, i = t.inheritsLoose, e = t.initializerDefineProperty, 
            r = t.assertThisInitialized;
        }, function(t) {
            o = t.cclegacy, a = t._decorator, s = t.SpriteFrame, l = t.Button, u = t.sys, c = t.Sprite, 
            d = t.Component;
        }, function(t) {
            p = t.RDPlatformType;
        } ],
        execute: function() {
            var h, f, v, m, y;
            o._RF.push({}, "9c783ELmhRLfbTwGjUzncrf", "VirtualButton", void 0);
            var B = a.ccclass, g = a.property;
            t("VirtualButton", (h = B("VirtualButton"), f = g({
                type: [ s ]
            }), h((y = n((m = function(t) {
                function n() {
                    for (var n, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                    return n = t.call.apply(t, [ this ].concat(o)) || this, e(r(n), "virtualBtns", y, r(n)), 
                    n;
                }
                i(n, t);
                var o = n.prototype;
                return o.onLoad = function() {
                    var t;
                    !this.node.getComponent(l) && this.node.addComponent(l), rd.Utils.registerButtonEvent, 
                    null === (t = this.node) || void 0 === t || t.on(l.EventType.CLICK, this._onClickBtn, this), 
                    this.node.active = rd.Option.regionEnable && rd.Platform.platformType != p.WeixinMinGame;
                }, o._onClickBtn = function() {
                    var t = this;
                    rd.Platform.isShowNativeAd() ? u.isNative ? rd.Ads.onNativeClick(null) : rd.Platform.doubleAdClicks(null) : rd.Ads.showRewardAd({
                        success: function() {},
                        fail: function() {}
                    }, "虚拟按钮"), this.node.active = !1, this.scheduleOnce(function() {
                        t._freashSpr();
                    }, rd.Option.virtualShowDelay);
                }, o._freashSpr = function() {
                    this.node.active = !0, this.virtualBtns.length <= 0 || (this.node.getComponent(c).spriteFrame = this.virtualBtns[rd.Utils.random(0, this.virtualBtns.length - 1)]);
                }, n;
            }(d)).prototype, "virtualBtns", [ f ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), v = m)) || v));
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/UIGBase.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./UIBase.ts" ], function(e) {
    "use strict";
    var t, s, c, n;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose;
        }, function(e) {
            s = e.cclegacy, c = e._decorator;
        }, function(e) {
            n = e.UIBase;
        } ],
        execute: function() {
            var r;
            s._RF.push({}, "9e645cAtWpGCZmSaqZcxykJ", "UIGBase", void 0);
            var u = c.ccclass;
            e("UIGBase", u("UIGBase")(r = function(e) {
                function s() {
                    return e.apply(this, arguments) || this;
                }
                return t(s, e), s;
            }(n)) || r);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDAudioBase.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts" ], function(i) {
    "use strict";
    var t, n, u, e;
    return {
        setters: [ function(i) {
            t = i.defineProperty;
        }, function(i) {
            n = i.cclegacy;
        }, function(i) {
            u = i.Log;
        }, function(i) {
            e = i.ConstantCommon;
        } ],
        execute: function() {
            n._RF.push({}, "9f3f43K7X1OOb8wlIyGm3EK", "RDAudioBase", void 0);
            i("RDAudioBase", function() {
                function i(i, n) {
                    t(this, "_audioPersistNode", null), t(this, "_currentPlatType", void 0), t(this, "_musicAudio", null), 
                    t(this, "_musicVolume", 0), t(this, "_clipDict", Object.create(null)), this._currentPlatType = i, 
                    this._audioPersistNode = n, this._init();
                }
                var n = i.prototype;
                return n._init = function() {}, n.getPlatType = function() {
                    return this._currentPlatType;
                }, n.playMusicByUrl = function(i, t, n, u, e, o, s) {
                    return !0;
                }, n.loadMusicClipByUrl = function(i, t, n) {}, n._loadAudioClip = function(i, t, n, e, o) {
                    void 0 === n && (n = "resources"), void 0 === e && (e = null), i = "resources" === n ? "audio/" + i : i, 
                    rd.Asset.loadAudioClip(i, !1, n).then(function(i) {
                        var t;
                        u.log("加载音频片段", i), null === (t = e) || void 0 === t || t(i);
                    });
                }, n.setMusicVolume = function(i) {}, n.pauseMusic = function(i) {}, n.stopMusic = function() {}, 
                n.resumeMusic = function(i) {}, n.getMusicDuration = function() {
                    return 0;
                }, n.getMusicLeftTime = function() {
                    return 0;
                }, n.getMusicCurrentTime = function() {
                    return 0;
                }, n.isMusicPlaying = function() {
                    return !1;
                }, n.getMusiceName = function() {
                    return "当前无歌曲";
                }, n.releaseAudioClip = function() {}, n._playMusicClip = function(i, t, n, u) {
                    this.updateAudMusic(n.name);
                }, n.updateAudMusic = function(i) {
                    rd.App.isLoadingMusic && (rd.App.isLoadingMusic = !1, rd.Event.emit(e.EVENT_TYPE.UPDATE_AUD_MUSIC)), 
                    u.log("播放格子", i), rd.Event.emit(e.EVENT_TYPE.LOAD_AUDIO_FFT, i);
                }, n.playSound = function(i, t, n, u) {}, n.stopSound = function(i) {}, i;
            }());
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/Encode.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(e) {
    "use strict";
    var t, n;
    return {
        setters: [ function(e) {
            t = e.defineProperty;
        }, function(e) {
            n = e.cclegacy;
        } ],
        execute: function() {
            n._RF.push({}, "9f6cazC8a1BBJrcjToPRiZ5", "Encode", void 0);
            var r = function() {
                function e() {}
                var t = e.prototype;
                return t.to = function(e) {
                    return e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;") : "";
                }, t.from = function(e) {
                    return e ? e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#39;/g, "'").replace(/&quot;/g, '"') : "";
                }, e;
            }(), c = function() {
                function e() {}
                var t = e.prototype;
                return t.to = function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t[n] = ("00" + e.charCodeAt(n).toString(16)).slice(-4);
                    return "\\u" + t.join("\\u");
                }, t.from = function(e) {
                    return unescape(e.replace(/\\/g, "%"));
                }, e;
            }(), o = function() {
                function e() {}
                var t = e.prototype;
                return t.to = function(e) {}, t.from = function(e) {}, e;
            }(), u = e("default", function() {});
            t(u, "base64", o), t(u, "html", r), t(u, "unicode", c), n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/NativeAds.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts" ], function(t) {
    "use strict";
    var i, e, a, n, s, o, c, h, r, l, d, N, I, u, _, T;
    return {
        setters: [ function(t) {
            i = t.inheritsLoose, e = t.defineProperty, a = t.assertThisInitialized;
        }, function(t) {
            n = t.cclegacy, s = t._decorator, o = t.LabelComponent, c = t.SpriteComponent, h = t.ButtonComponent, 
            r = t.Label, l = t.v3, d = t.UITransform, N = t.Animation, I = t.SpriteFrame, u = t.Component;
        }, function(t) {
            _ = t.Log;
        }, function(t) {
            T = t.ConstantCommon;
        } ],
        execute: function() {
            var p;
            t("NativeType", void 0), n._RF.push({}, "9fec7n+GY9HbZU0NeFbblFV", "NativeAds", void 0);
            var v, A = s.ccclass;
            !function(t) {
                t[t.NATIVE_IMAGE = 1] = "NATIVE_IMAGE", t[t.NATIVE_INTERSTITIAL = 2] = "NATIVE_INTERSTITIAL", 
                t[t.NATIVE_BANNER = 3] = "NATIVE_BANNER", t[t.NATIVE_IMAGEN_BIG = 4] = "NATIVE_IMAGEN_BIG", 
                t[t.NATIVE_SPLASH = 5] = "NATIVE_SPLASH", t[t.NATIVE_ICON = 6] = "NATIVE_ICON", 
                t[t.NATIVE_PNG = 7] = "NATIVE_PNG", t[t.NATIVE_PNG_BOX = 8] = "NATIVE_PNG_BOX";
            }(v || (v = t("NativeType", {})));
            t("default", A("NativeAds")(p = function(t) {
                function n() {
                    for (var i, n = arguments.length, s = new Array(n), o = 0; o < n; o++) s[o] = arguments[o];
                    return i = t.call.apply(t, [ this ].concat(s)) || this, e(a(i), "bac", null), e(a(i), "currentBac", null), 
                    e(a(i), "nativeInstance", null), e(a(i), "adData", null), e(a(i), "adTitle", null), 
                    e(a(i), "adImg", null), e(a(i), "adLogo", null), e(a(i), "adDesc", null), e(a(i), "adBtn", null), 
                    e(a(i), "adBtnTxt", null), e(a(i), "adIcon", null), e(a(i), "adClose", null), e(a(i), "closeBack", null), 
                    e(a(i), "skipBtn", null), e(a(i), "skipTips", null), e(a(i), "_type", v.NATIVE_IMAGE), 
                    e(a(i), "_closeType", -1), e(a(i), "_loadTimes", 0), e(a(i), "_popupName", ""), 
                    e(a(i), "_closeShowBanner", !0), e(a(i), "_isGamePlaying", !1), e(a(i), "_nativeBannerInterval", null), 
                    e(a(i), "startTime", new Date().getTime()), e(a(i), "_splashDelayTime", 2), e(a(i), "_splashSkipTime", 5), 
                    i;
                }
                i(n, t);
                var s = n.prototype;
                return s.start = function() {
                    var t = this;
                    !this._nativeBannerInterval && this._type != v.NATIVE_BANNER && this._type != v.NATIVE_SPLASH && this._type != v.NATIVE_INTERSTITIAL && rd.Platform.isBtnFadeIn() && (this._nativeBannerInterval = setInterval(function() {
                        t.isVisible() || (t.showNativeVisuble(!0), rd.Ads.hideBannerAd(!0));
                    }, rd.Option.nativeFreash));
                }, s.onLoad = function() {
                    rd.Event.on("clickNative", this.clickNative, this);
                }, s.clickNative = function(t) {
                    var i;
                    this.nativeInstance && (this._type !== v.NATIVE_BANNER || this.isVisible()) && t === (null === (i = this.nativeInstance) || void 0 === i ? void 0 : i.nativeId) && (_.debug(this.constructor.name, this._popupName + "_广告刷新(" + this.nativeInstance.nativeId + ")", t), 
                    this.reTry());
                }, s.initView = function() {
                    var t = this;
                    this.currentBac || (this.bac = this.node.getChildByName("bac"), this.bac.getChildByName("bg1").active = !1, 
                    this.bac.getChildByName("bg2").active = !1, this.bac.getChildByName("bg3").active = !1, 
                    this.bac.getChildByName("bg4").active = !1, this.bac.getChildByName("bg5").active = !1, 
                    this.bac.getChildByName("bg6").active = !1, this.bac.getChildByName("bg7").active = !1, 
                    this.bac.getChildByName("bg8").active = !1, this.currentBac = this.bac.getChildByName("bg" + this._type), 
                    this.currentBac.on("click", function() {
                        t.onNativeAdClick();
                    }, this), this.adTitle = rd.Utils.getNodeByName(this.currentBac, "adTitle").getComponent(o), 
                    this.adTitle.string = "", this.adDesc = rd.Utils.getNodeByName(this.currentBac, "adDesc").getComponent(o), 
                    this.adDesc.string = "", this.adImg = rd.Utils.getNodeByName(this.currentBac, "adImg").getComponent(c), 
                    this.adImg.node.on("click", function() {
                        t.onNativeAdClick();
                    }, this), this.adBtn = rd.Utils.getNodeByName(this.currentBac, "adBtn").getComponent(h), 
                    this.adBtnTxt = rd.Utils.getNodeByName(this.currentBac, "adBtnTxt").getComponent(r), 
                    this.adBtn.node.on("click", function() {
                        t.onNativeAdClick();
                    }, this), this.adIcon = rd.Utils.getNodeByName(this.currentBac, "adIcon").getComponent(c), 
                    this.adIcon.node.active = !1, this.adLogo = rd.Utils.getNodeByName(this.currentBac, "adLogo").getComponent(c), 
                    this.adClose = rd.Utils.getNodeByName(this.currentBac, "btnClose").getComponent(h), 
                    this.adClose.node.on("click", this.onClose, this), this._type === v.NATIVE_BANNER ? this.currentBac.setPosition(l(0, -this.node.getParent().getComponent(d).height / 2, 0)) : this._type == v.NATIVE_SPLASH ? (this._splashSkipTime = 5, 
                    this.skipBtn = rd.Utils.getNodeByName(this.currentBac, "skip"), this.skipBtn.on("click", function() {
                        t.onClose();
                    }, this), this.skipTips = rd.Utils.getNodeComponent(this.currentBac, "tips", r), 
                    this.skipBtn.active = !1, this.scheduleOnce(function() {
                        t.startSkip();
                    }, this._splashDelayTime)) : this._type != v.NATIVE_ICON && this._type != v.NATIVE_PNG && this._type != v.NATIVE_PNG_BOX || (this.adBtn.node.active = !1));
                }, s.onEnable = function() {
                    this._registerEvent(!0);
                }, s.onDisable = function() {
                    this._registerEvent(!1), _.debug(this.constructor.name, "原生广告关闭======"), rd.Event.off("clickNative", this.clickNative, this), 
                    this._closeShowBanner && rd.Ads.hideBannerAd(!0), this._nativeBannerInterval && clearInterval(this._nativeBannerInterval);
                }, s._registerEvent = function(t) {
                    var i = t ? "on" : "off";
                    rd.Event[i](T.EVENT_TYPE.NATIVE_AD_SHOW, this.showNative, this), rd.Event[i](T.EVENT_TYPE.NATIVE_AD_HIDE, this.hideNative, this), 
                    rd.Event[i](T.EVENT_TYPE.PLAT_ON_SHOW, this.reportNativeShow, this);
                }, s.showNative = function() {
                    this.showNativeVisuble();
                }, s.hideNative = function() {
                    this.showNativeVisuble(!1);
                }, s.reportNativeShow = function() {
                    this.bac.active && this.currentBac && this.currentBac.active && this.nativeInstance && this.nativeInstance.getAdData() && (console.log("广告进入前台上报"), 
                    this.nativeInstance.reportAdShow());
                }, s.onDestroy = function() {
                    _.debug(this.constructor.name, "销毁广告关闭======");
                }, s.startSkip = function() {
                    var t = this;
                    this.skipBtn.active = !0, this.skipTips.string = "跳过 " + this._splashSkipTime + "s", 
                    this.schedule(function() {
                        t._splashSkipTime--, t.skipTips.string = "跳过 " + t._splashSkipTime + "s", 0 === t._splashSkipTime && (t.unscheduleAllCallbacks(), 
                        t.closeBack());
                    }, 1);
                }, s.reTry = function() {
                    _.debug(this.constructor.name, "原生广告界面开始刷新", this.nativeInstance.nativeId), this.setNativeType(this._type);
                }, s.setPopupName = function(t) {
                    this._popupName = t;
                }, s.setCloseCallback = function(t) {
                    this.closeBack = t;
                }, s.setCloseType = function(t) {
                    this._closeType = t;
                }, s.setNativeType = function(t) {
                    var i = this;
                    this._type = t, this.initView();
                    var e = function() {
                        var t;
                        if (_.debug(i.constructor.name, "原生广告获取广告参数失败", i._popupName), i.showNativeVisuble(!1), 
                        i._type === v.NATIVE_INTERSTITIAL) rd.Event.emit(T.EVENT_TYPE.ADS_INTERSTITIALAD, "fail"), 
                        null === (t = i.closeBack) || void 0 === t || t.call(i); else if (i._type === v.NATIVE_SPLASH) {
                            var e;
                            null === (e = i.closeBack) || void 0 === e || e.call(i);
                        } else i._type != v.NATIVE_PNG && i._type != v.NATIVE_ICON && i._type != v.NATIVE_PNG_BOX && rd.Ads.showBannerAd();
                    };
                    rd.Ads.createNative({
                        success: function(t) {
                            i.nativeInstance = t, i.adData = i.nativeInstance.getAdData(), i.adData ? (_.debug(i.constructor.name, "原生广告获取广告参数成功", i.nativeInstance.nativeId, i._popupName), 
                            i.showAd()) : e();
                        },
                        fail: function() {
                            e();
                        }
                    });
                }, s.showAd = function() {
                    var t, i = this;
                    (_.debug(this.constructor.name, "开始展示原生广告", this.nativeInstance.nativeId, this._popupName), 
                    rd.Ads.hideBannerAd(!0), this.showNativeVisuble(!0), this.currentBac.active = !0, 
                    this.adTitle.string = "", this.adDesc.string = "", this._type != v.NATIVE_ICON && this._type != v.NATIVE_PNG) && (this.adTitle.string = rd.Utils.getLimitDigitString(this.adData.title, 13), 
                    this.adDesc.string = rd.Utils.getLimitDigitString(this.adData.desc ? this.adData.desc : this.adData.source ? this.adData.source : this.adData.title, 20), 
                    rd.Option.regionEnable && (null === (t = this.adBtn.node.getComponent(N)) || void 0 === t || t.play("scaleAni")));
                    this.adBtnTxt.string = this.adData.clickBtnTxt ? this.adData.clickBtnTxt : "点击查看", 
                    this._type != v.NATIVE_IMAGE && this._type != v.NATIVE_IMAGEN_BIG && this._type != v.NATIVE_PNG && this._type != v.NATIVE_PNG_BOX || rd.Event.emit("menuUp", this._popupName), 
                    this._type === v.NATIVE_INTERSTITIAL && rd.Event.emit(T.EVENT_TYPE.ADS_INTERSTITIALAD, "success");
                    var e = this.adData.icon ? this.adData.icon : this.adData.iconUrlList ? this.adData.iconUrlList[0] : "";
                    this._type != v.NATIVE_BANNER && this._type != v.NATIVE_ICON && (this.adIcon.node.active = !1, 
                    e && rd.Asset.loadImage(e, !0).then(function(t) {
                        _.log("广告图片加载时间adIcon======", e), i.adIcon.node.active = !0, i.adIcon.spriteFrame = I.createWithImage(t.image);
                    })), this.adImg.node.active = !0, this.startTime = new Date().getTime();
                    var a = this.adData.imgUrlList && this.adData.imgUrlList.length > 0 ? this.adData.imgUrlList[0] : e;
                    a && rd.Asset.loadImage(a, !0).then(function(t) {
                        _.log("广告图片加载时间adImg======", new Date().getTime() - i.startTime, a), i.adImg && (i._loadTimes = 0, 
                        i.adImg.node.active = !0, i.adImg.spriteFrame = I.createWithImage(t.image));
                    });
                }, s.onNativeAdClick = function() {
                    var t;
                    return this.nativeInstance && this.nativeInstance.getAdData() ? (this.nativeInstance.reportAdClick(this._popupName), 
                    this._type != v.NATIVE_SPLASH && rd.Platform.doubleAdClicks(null === (t = this.nativeInstance) || void 0 === t ? void 0 : t.nativeId), 
                    this.reTry(), !0) : (_.debug(this.constructor.name, "暂无广告="), rd.UI.showTipMessage("暂无广告"), 
                    this.showNativeVisuble(!1), !1);
                }, s.onClose = function() {
                    var t;
                    this._type === v.NATIVE_INTERSTITIAL && rd.Event.emit(T.EVENT_TYPE.ADS_INTERSTITIALAD, "fail"), 
                    this._type != v.NATIVE_INTERSTITIAL && this._type != v.NATIVE_SPLASH && rd.Platform.addCloseAdd(), 
                    this.showNativeVisuble(!1), null === (t = this.closeBack) || void 0 === t || t.call(this);
                }, s.showNativeVisuble = function(t) {
                    void 0 === t && (t = !0), this.bac && (this.bac.active = t);
                }, s.isVisible = function() {
                    return this.bac && this.bac.active && this.currentBac.active;
                }, s.setGamePlaying = function(t) {
                    _.debug(this.constructor.name, "游戏玩法状态===" + t), this._isGamePlaying = t;
                }, s.getGamePlaying = function() {
                    return this._isGamePlaying;
                }, n;
            }(u)) || p);
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ClickBoxUI.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./UIBase.ts" ], function(t) {
    "use strict";
    var i, e, s, n, r, o, c, a, l, h;
    return {
        setters: [ function(t) {
            i = t.inheritsLoose, e = t.defineProperty, s = t.assertThisInitialized;
        }, function(t) {
            n = t.cclegacy, r = t._decorator, o = t.v3, c = t.view, a = t.ProgressBar;
        }, function(t) {
            l = t.ConstantCommon;
        }, function(t) {
            h = t.UIBase;
        } ],
        execute: function() {
            var d;
            n._RF.push({}, "a05f1bapK9EjaVgeEZoBqss", "ClickBoxUI", void 0);
            var u = r.ccclass;
            t("ClickBoxUI", u("ClickBoxUI")(d = function(t) {
                function n() {
                    for (var i, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return i = t.call.apply(t, [ this ].concat(r)) || this, e(s(i), "_callback", null), 
                    e(s(i), "_clickTime", 0), e(s(i), "_progress", void 0), e(s(i), "_startTime", void 0), 
                    i;
                }
                i(n, t);
                var r = n.prototype;
                return r._registerEvent = function(t) {
                    var i = t ? "on" : "off";
                    rd.Event[i](l.EVENT_TYPE.PLAT_ON_SHOW, this._onShow, this);
                }, r.onLoad = function() {
                    this.centerUI = rd.Utils.getNodeByName(this.node, "centerUI"), rd.Utils.registerButtonEvent(this.centerUI, "click", this._onStartButton, this).setPosition(o(0, -c.getVisibleSize().height / 2 + 100, 0)), 
                    this._progress = rd.Utils.getNodeComponent(this.centerUI, "progressBar", a), this.initBgOpacity(), 
                    this.zIndex = l.UI_DIALOG_Z_INDEX.POPUP;
                }, r.show = function(t) {
                    var i, e = this;
                    if (this._callback = t, this._progress.progress = 0, !rd.Option.systemWXSwitch) return null === (i = this._callback) || void 0 === i || i.call(this), 
                    void rd.UI.hideDialog(l.UI_DIALOG_NAME.CLICKBOXUI, !0);
                    rd.Ads.hideBannerAd(), this.playScaleInAnim([ this.centerUI ]), rd.Stats.customEvent("showDialog", {
                        curDialog: this.getUIName()
                    }), rd.Ads.hideCustomAdBannerTop(), rd.Ads.showCustomAdIcon(this.node), rd.Event.emit(l.EVENT_TYPE.GAME_CONTINUE, !0), 
                    this.scheduleOnce(function() {
                        e._playScaleOutAnim();
                    }, 8), this._registerEvent(!0);
                }, r.hide = function() {
                    this._progress.progress = 0, this._clickTime = 0, t.prototype.hide.call(this), rd.Ads.hideCustomAdIcon(), 
                    this._registerEvent(!1);
                }, r.getUIName = function() {
                    return "点击宝箱";
                }, r._onStartButton = function() {
                    rd.UI.isUIAnimPlaying() || (this._clickTime++, 1 === this._clickTime && (this._startTime = new Date().getTime(), 
                    this.scheduleOnce(function() {
                        rd.Ads.showBannerAd();
                    }, 1)), this._progress.progress = (new Date().getTime() - this._startTime) / 3e3, 
                    this._progress.progress >= 1 && (rd.Event.emit(l.EVENT_TYPE.GOLD_ANIM, 1e3), this._playScaleOutAnim()));
                }, r._playScaleOutAnim = function() {
                    var t = this;
                    this.playScaleOutAnim([ this.centerUI ], function() {
                        var i;
                        null === (i = t._callback) || void 0 === i || i.call(t), rd.UI.hideDialog(l.UI_DIALOG_NAME.CLICKBOXUI, !0);
                    });
                }, r._onShow = function() {
                    this._playScaleOutAnim();
                }, n;
            }(h)) || d);
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ICannonSphereShape.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts" ], function(e) {
    "use strict";
    var n, t, o, r, p, a, c;
    return {
        setters: [ function(e) {
            n = e.defineProperty, t = e.inheritsLoose;
        }, function(e) {
            o = e.cclegacy, r = e._decorator, p = e.SphereColliderComponent, a = e.Component;
        }, function(e) {
            c = e.Log;
        } ],
        execute: function() {
            var i, s, u;
            o._RF.push({}, "a1664YWOeBI8rZKkx85U/gh", "ICannonSphereShape", void 0);
            var h = r.ccclass;
            e("ICannonSphereShape", h("ICannonSphereShape")((u = s = function(e) {
                function n() {
                    return e.apply(this, arguments) || this;
                }
                return t(n, e), n.prototype.start = function() {
                    var e = this.getComponent(p);
                    c.debug(n.TAG, e);
                }, n;
            }(a), n(s, "TAG", "ICannonSphereShape"), i = u)) || i);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDWeiXinMiniPlatform.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./RDPlatformParam.ts", "./RDPlatformType.ts", "./RDPlatform.ts", "./IntertitalAdWx.ts", "./BannerAdWx.ts", "./CustomAdWx.ts", "./VideoAdWx.ts" ], function(t) {
    "use strict";
    var n, e, i, s, o, a, r, h, c, d, u, l, _;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, e = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy;
        }, function(t) {
            o = t.Log;
        }, function(t) {
            a = t.ConstantCommon;
        }, function(t) {
            r = t.RDPlatformParam;
        }, function(t) {
            h = t.RDPlatformType;
        }, function(t) {
            c = t.RDPlatform;
        }, function(t) {
            d = t.IntertitalAdWx;
        }, function(t) {
            u = t.BannerAdWx;
        }, function(t) {
            l = t.CustomAdWx;
        }, function(t) {
            _ = t.VideoAdWx;
        } ],
        execute: function() {
            s._RF.push({}, "a1826ASomVDtJO2GaF2Ghzf", "RDWeiXinMiniPlatform", void 0);
            t("RDWeiXinMiniPlatform", function(t) {
                function s(n) {
                    var s;
                    return s = t.call(this, n) || this, e(i(s), "openId", void 0), s._hasShortcutInstalled = !0, 
                    s;
                }
                n(s, t);
                var c = s.prototype;
                return c.initBanner = function() {
                    for (var t = r.ADPARAM[this.type.toString()].banner_preload_count || 1, n = 0; n < t; n++) {
                        var e = {
                            left: 0,
                            top: this._systemInfo.safeArea.height - 57,
                            width: 300,
                            height: 57
                        }, i = r.ADPARAM[this.type.toString()].banner_id, s = new u({
                            adUnitId: i,
                            style: e,
                            adIntervals: 60
                        });
                        this._bannerADInstances.push(s);
                    }
                }, c.initVideo = function() {
                    var t = r.ADPARAM[this.type.toString()].video_id;
                    this._videoBoxInstance = new _({
                        adUnitId: "adunit-48a5d8e1ce82b9d9"
                    });
                }, c.initIntertitalAd = function() {
                    var t = r.ADPARAM[this.type.toString()].interstital_id;
                    this._interstitialAdInstance = new d({
                        adUnitId: "adunit-6610afa34f8f7843"
                    });
                }, c.initCustomAd = function() {
                    var t = this;
                    this._createIconNativeTemple(), this._createHotNativeTemple(), this._createCustomAdBanner(), 
                    this._createCustomAdVBanner(), this._createCustomSceneTemple(), this.loadStorageData([ "scene" ], function(n) {
                        if (console.log("值", n), n && n.scene) t._scene = n.scene, console.log("当前场景值", t._scene); else {
                            var e = window.wx.getLaunchOptionsSync();
                            console.log("当前场景值", e, e.scene), e && (t.flushStorageData({
                                key: "scene",
                                data: {
                                    scene: e.scene
                                }
                            }, function() {}), t._scene = e.scene);
                        }
                    }, null);
                }, c._createIconNativeTemple = function() {
                    var t = r.ADPARAM[h.WeixinMinGame.toString()].native_icon;
                    console.log("_createIconNativeTemple", t.length);
                    for (var n = 0; n < t.length; n++) {
                        var e = new l({
                            adUnitId: "",
                            style: {
                                left: n ? 5 : this._systemInfo.windowWidth - 75,
                                top: 150,
                                width: 375,
                                fixed: !0
                            }
                        });
                        this._customAdIcon.push(e);
                    }
                }, c._showNativeIconAd = function(t) {
                    if (!(this._customAdIcon.length < 2) && rd.Option.regionEnable) for (var n = 0; n < 2; n++) {
                        var e = this._customAdIcon[n];
                        t.isShow ? (e.parentNode = t.parent, e.show(t.style)) : e.hide();
                    }
                }, c._createHotNativeTemple = function() {
                    var t = r.ADPARAM[h.WeixinMinGame.toString()].native_hot, n = this._systemInfo.windowWidth > this._systemInfo.windowHeight ? this._systemInfo.windowHeight / 720 : this._systemInfo.windowWidth / 720;
                    this._customAdHot = new l({
                        adUnitId: t,
                        style: {
                            left: (this._systemInfo.windowWidth - 720 * n) / 2,
                            top: (this._systemInfo.windowHeight - 525 * n) / 2 - 120,
                            width: 500,
                            fixed: !0
                        }
                    });
                }, c._showNativeHotAd = function(t) {
                    this._customAdHot && (t.isShow ? (this._customAdHot.parentNode = t.parent, this._customAdHot.show()) : this._customAdHot.hide());
                }, c._createCustomSceneTemple = function() {
                    var t = r.ADPARAM[h.WeixinMinGame.toString()].custom_scene, n = this._systemInfo.windowWidth > this._systemInfo.windowHeight ? this._systemInfo.windowHeight / 720 : this._systemInfo.windowWidth / 720;
                    this._customAdScene = new l({
                        adUnitId: t,
                        style: {
                            left: (this._systemInfo.windowWidth - 720 * n) / 2,
                            top: this._systemInfo.windowHeight / 2 - 180,
                            width: 500,
                            fixed: !0
                        }
                    });
                }, c._showCustomSceneAd = function(t) {
                    this._customAdScene && (t.isShow ? (this._customAdScene.parentNode = t.parent, this._customAdScene.show(t.callback)) : this._customAdScene.hide());
                }, c._createCustomAdBanner = function() {
                    for (var t = r.ADPARAM[h.WeixinMinGame.toString()].custom_banner_id, n = r.ADPARAM[this.type.toString()].custom_banner_offy, e = -1 === n[0] ? 0 : n[0], i = -1 === n[1] ? 0 : n[1], s = 0; s < t.length; s++) {
                        var o = s ? rd.Utils.isMiniScreen() ? e : e + 35 : this._systemInfo.windowHeight + i, a = new l({
                            adUnitId: t[s],
                            style: {
                                left: this._systemInfo.windowWidth / 2 - 180,
                                top: o,
                                width: 375,
                                fixed: !0
                            }
                        });
                        this._customAdBanner.push(a);
                    }
                }, c._showCustomAdBanner = function(t) {
                    if (!(this._customAdBanner.length < 2) && rd.Option.regionEnable) {
                        var n = this._customAdBanner[t.index];
                        t.isShow ? (n.parentNode = t.parent, n.show(t.style)) : n.hide();
                    }
                }, c._createCustomAdVBanner = function() {
                    for (var t = r.ADPARAM[this.type.toString()].custom_v_banner_id, n = r.ADPARAM[this.type.toString()].custom_v_banner_offy, e = 0; e < t.length; e++) {
                        var i = -1 === n[e] ? 100 : rd.Utils.isMiniScreen() ? n[e] : n[e] + 80, s = e ? this._systemInfo.windowWidth - 75 : 5, o = new l({
                            adUnitId: t[e],
                            style: {
                                left: s,
                                top: i,
                                width: 375,
                                fixed: !0
                            }
                        });
                        this._customAdVBanner.push(o);
                    }
                }, c._showCustomAdVBanner = function(t) {
                    if (!(this._customAdBanner.length < 2) && rd.Option.regionEnable) {
                        var n = this._customAdVBanner[t.index];
                        o.debug("wx", "_showCustomAdVBanner", t, t.index, n._config.adUnitId), t.isShow ? (n.parentNode = t.parent, 
                        n.show(t.style)) : n.hide();
                    }
                }, c.onShow = function() {
                    this._checkShareSuccess(), rd.Event.emit(a.EVENT_TYPE.PLAT_ON_SHOW);
                }, c.onHide = function() {
                    this._onHideAt = new Date().getTime();
                }, c.initNative = function() {
                    t.prototype.initNative.call(this);
                }, c.showShareMenu = function(t) {
                    t ? window.wx.showShareMenu({
                        withShareTicket: !0,
                        menus: [ "shareAppMessage", "shareTimeline" ]
                    }) : window.wx.hideShareMenu({
                        menus: [ "shareAppMessage", "shareTimeline" ]
                    });
                }, c._shareVido = function(t) {
                    var n = r.ADPARAM[h.WeixinMinGame.toString()].share_text, e = Math.floor(Math.random() * n.length), i = n[e] ? n[e] : "", s = r.ADPARAM[h.WeixinMinGame.toString()].share_image_url, o = s[e] ? s[e] : "", a = r.ADPARAM[h.WeixinMinGame.toString()].share_image_id, c = a[e] ? a[e] : "";
                    window.wx.shareAppMessage({
                        title: i,
                        imageUrl: o,
                        imageUrlId: c
                    }), this._isShareing = !0;
                }, c._checkShareSuccess = function() {
                    if (this._isShareing) {
                        var t;
                        if (this._isShareing = !1, new Date().getTime() - this._onHideAt < 3e3) return console.log("分享失败1"), 
                        this._showToast("分享失败"), void this.shareReport(1);
                        if (this._isFirstShare) return console.log("分享失败2"), this._showToast("分享失败"), this._isFirstShare = !1, 
                        void this.shareReport(1);
                        if (rd.Utils.isLuck(70)) console.log("分享成功2"), this._showToast("分享成功"), null === (t = this._shareCallback) || void 0 === t || t.success(""), 
                        this.shareReport(0);
                    }
                }, c.shareAppMessage = function(t) {
                    this._api.shareAppMessage({
                        title: "转发标题"
                    });
                }, c._showToast = function(t) {
                    this._api.showToast({
                        title: t,
                        icon: "none",
                        image: "",
                        mask: !1,
                        duration: 2e3,
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, c._gotoMiniGameByAppid = function(t) {
                    var n = this;
                    console.log("开始跳转", t), this.exportClick(t.type, t.id), window.wx.navigateToMiniProgram({
                        appId: t.appid,
                        success: function(e) {
                            n.exportNavigate(t.type, t.id), console.log("跳转成功");
                        },
                        fail: function(t) {
                            console.log("跳转失败", t);
                        }
                    });
                }, c._vibrateShort = function(t) {
                    void 0 === t && (t = 50), 100 != t ? this.vibrate(t) : this.vibrateStrong();
                }, c.vibrateStrong = function() {
                    this._api.vibrateLong({
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, c.vibrate = function(t) {
                    new Date().getTime() - this._lastShakeTime < 100 || (this._lastShakeTime = new Date().getTime(), 
                    this._api.vibrateShort({
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    }));
                }, c._showBannerAd = function(t) {
                    if (this.isReviewed()) o.debug(this.constructor.name, "审核中====="); else {
                        o.debug(this.constructor.name, "调用banner" + this._bannerADInstances.length + " ==== " + this._bannerShowIndex);
                        var n = r.ADPARAM[h.OPPOGame.toString()].banner_preload_count || 1;
                        this._bannerShowIndex >= n && (this._bannerShowIndex = 0), o.debug(this.constructor.name, "调用banner" + this._bannerADInstances.length + " ==== " + this._bannerShowIndex), 
                        this._bannerADInstance && this._bannerADInstance.hide(), this._bannerADInstance = null, 
                        this._bannerADInstance = this._bannerADInstances[this._bannerShowIndex], this._bannerADInstance.show({
                            success: function() {},
                            fail: function() {}
                        }), this._bannerShowIndex += 1;
                    }
                }, c._showVideo = function(t) {
                    this.isReviewed() ? this._rewardCaback.success(null) : this._videoBoxInstance.show(this._rewardCaback);
                }, c._showIntertitalAd = function(t) {
                    this.isReviewed() || this._interstitialAdInstance.show(function() {});
                }, c._onshareAppMessage = function() {
                    var t = r.ADPARAM[h.WeixinMinGame.toString()].share_text, n = Math.floor(Math.random() * t.length), e = t[n] ? t[n] : "", i = r.ADPARAM[h.WeixinMinGame.toString()].share_image_url, s = i[n] ? i[n] : "", o = r.ADPARAM[h.WeixinMinGame.toString()].share_image_id, a = o[n] ? o[n] : "";
                    window.wx.onShareAppMessage(function(t) {
                        return {
                            title: e,
                            imageUrl: s,
                            imageUrlId: a
                        };
                    }), window.wx.onShareTimeline(function() {
                        return {
                            title: e,
                            imageUrl: s,
                            imageUrlId: a,
                            query: "a=1&b=2"
                        };
                    });
                }, c._showGamePortalAd = function(t) {
                    rd.UI.showDialog(a.UI_DIALOG_NAME.ADBOMBGAME);
                }, c._login = function(n) {
                    var e = this;
                    window.wx.login({
                        success: function(i) {
                            var s = "用户信息:" + JSON.stringify(i.data);
                            o.log(s), t.prototype._login.call(e, n);
                        },
                        fail: function(t) {
                            o.log(JSON.stringify(t));
                        }
                    });
                }, c.isMoreGameBtn = function() {
                    return rd.Option.regionEnable;
                }, c.isShareGameBtn = function() {
                    return !0;
                }, c.isShowPrivacy = function() {
                    return !1;
                }, s;
            }(c));
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/Dictionary.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(e) {
    "use strict";
    var t, n, i;
    return {
        setters: [ function(e) {
            t = e.createClass, n = e.defineProperty;
        }, function(e) {
            i = e.cclegacy;
        } ],
        execute: function() {
            i._RF.push({}, "a31fbJ9bs5K5piA/9F445Gx", "Dictionary", void 0);
            e("Dictionary", function() {
                function e() {
                    n(this, "m_keys", []), n(this, "m_values", []);
                }
                var i = e.prototype;
                return i.indexOfKey = function(e) {
                    return this.m_keys.indexOf(e);
                }, i.indexOfValue = function(e) {
                    return this.m_values.indexOf(e);
                }, i.getKeyByValue = function(e) {
                    return this.m_keys[this.indexOfValue(e)];
                }, i.add = function(e, t) {
                    var n = this.indexOfKey(e);
                    n >= 0 ? this.m_values[n] = t : (this.m_keys.push(e), this.m_values.push(t));
                }, i.get = function(e) {
                    var t = this.indexOfKey(e);
                    return t >= 0 ? this.m_values[t] : null;
                }, i.set = function(e, t) {
                    var n = this.indexOfKey(e);
                    n >= 0 ? this.m_values[n] = t : this.add(e, t);
                }, i.remove = function(e) {
                    var t = this.indexOfKey(e);
                    return t >= 0 ? (this.m_keys.splice(t, 1), this.m_values.splice(t, 1)[0]) : null;
                }, i.containsKey = function(e) {
                    return this.indexOfKey(e) >= 0;
                }, i.clear = function() {
                    this.m_keys.length = 0, this.m_values.length = 0;
                }, i.setLength = function(e) {
                    this.m_keys.length = e, this.m_values.length = e;
                }, i.getRandomData = function() {
                    var e = Math.random() * this.keys.length << 0;
                    return this.m_values[e];
                }, t(e, [ {
                    key: "length",
                    get: function() {
                        return this.m_keys.length;
                    }
                }, {
                    key: "values",
                    get: function() {
                        return this.m_values.concat();
                    }
                }, {
                    key: "keys",
                    get: function() {
                        return this.m_keys.concat();
                    }
                } ]), e;
            }());
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/SignInUI.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts", "./RDStatisticsManager.ts", "./UIGBase.ts" ], function(t) {
    "use strict";
    var e, n, i, s, o, a, r, c, d, I, u, _, l, m;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy, o = t._decorator, a = t.instantiate, r = t.Sprite, c = t.UITransform, 
            d = t.Label;
        }, function(t) {
            I = t.Constants;
        }, function(t) {
            u = t.ConstantCommon;
        }, function(t) {
            _ = t.EventResult, l = t.CustomEventID;
        }, function(t) {
            m = t.UIGBase;
        } ],
        execute: function() {
            var h;
            s._RF.push({}, "a4da7PX8BVFXZyEQsPaKxud", "SignInUI", void 0);
            var N = o.ccclass, S = I.TOTAl_SIGN_IN_DAYS, p = [ 100, 300, 500, 700, 900, 1100, 1500 ];
            t("SignInUI", N("SignInUI")(h = function(t) {
                function s() {
                    for (var e, s = arguments.length, o = new Array(s), a = 0; a < s; a++) o[a] = arguments[a];
                    return e = t.call.apply(t, [ this ].concat(o)) || this, n(i(e), "_closeBtnNode", null), 
                    n(i(e), "_signItemArr", []), n(i(e), "_isCanSignIn", !1), e;
                }
                e(s, t);
                var o = s.prototype;
                return o.onLoad = function() {
                    var t = rd.Utils.getNodeByName(this.node, "btnNode");
                    rd.Utils.registerButtonEvent(t, "receiveBtn", this._onReceiveButton, this), rd.Utils.registerButtonEvent(t, "videoRecvBtn", this._onVideoRecvButton, this), 
                    this._closeBtnNode = rd.Utils.registerButtonEvent(this.node, "closeBtn", this._onCloseButton, this), 
                    this._createSignItem(), this.initBgOpacity(), this.initAdData(), this.zIndex = I.UI_DIALOG_Z_INDEX.CENTER;
                }, o.show = function() {
                    var e = this;
                    this._isCanSignIn = rd.Utils.isNextDay(new Date().getTime(), g.App.Account.signInfo.time), 
                    this._signItemArr.forEach(function(t, n) {
                        return e._updateSignItem(n);
                    }), this.playScaleInAnim([ this.centerUI ], [ this._closeBtnNode ]), this.setShowAdData(!0, (arguments.length <= 0 ? void 0 : arguments[0]) ? u.INTERSTITIALAD_POSITION.POSITION_SECOND : u.INTERSTITIALAD_POSITION.POSITION_NONE), 
                    t.prototype.show.call(this), console.log("关闭按钮位置", this._closeBtnNode.getWorldPosition()), 
                    rd.Ads.showCustomAdVBannerLEFT(rd.UI.getDialogByName(I.UI_DIALOG_NAME.SIGN_IN)), 
                    rd.Ads.showCustomAdVBannerRIGHT(rd.UI.getDialogByName(I.UI_DIALOG_NAME.SIGN_IN)), 
                    rd.Ads.showCustomAdBannerTop(rd.UI.getDialogByName(I.UI_DIALOG_NAME.SIGN_IN));
                }, o.hide = function() {
                    t.prototype.hide.call(this), rd.Ads.hideCustomAdVBannerLEFT(), rd.Ads.hideCustomAdVBannerRIGHT(), 
                    rd.Ads.hideCustomAdBannerTop();
                }, o.getUIName = function() {
                    return "每日签到";
                }, o._createSignItem = function() {
                    for (var t = rd.Utils.getNodeByName(this.node, "signInPanel"), e = rd.Utils.getNodeByName(t, "signItem"), n = 0, i = S; n < i; n++) {
                        var s = 0 === n ? e : a(e);
                        s.parent = t, this._signItemArr.push(s), this._setSignItemData(n);
                    }
                }, o._setSignItemData = function(t) {
                    var e = this._signItemArr[t];
                    0 !== t && (rd.Utils.getNodeComponent(e, "day", r).spriteFrame = rd.SptFrame.getSpriteFrameByName("Sign_Image_Day" + (t + 1), !0));
                    if (t === S - 1) {
                        e.getComponent(r).spriteFrame = rd.SptFrame.getSpriteFrameByName("Sign_Image_Frame2", !0);
                        var n = rd.Utils.getNodeComponent(e, "award", r);
                        n.node.setPosition(0, 6), n.spriteFrame = rd.SptFrame.getSpriteFrameByName("Sign_Image_Money2", !0);
                        var i = e.getComponent(c).width;
                        rd.Utils.getNodeComponent(e, "dayTips", c).width = i + 22, rd.Utils.getNodeComponent(e, "signedIn", c).width = i;
                    }
                    rd.Utils.getNodeComponent(e, "awardLbl", d).string = "*" + p[t];
                }, o._updateSignItem = function(t) {
                    var e = this._signItemArr[t], n = rd.Utils.getNodeByName(e, "dayTips"), i = g.App.Account.signInfo.count % S;
                    n.active = t === i - (this._isCanSignIn ? 0 : 1 - (0 === i ? S : 0));
                    var s = rd.Utils.getNodeByName(e, "signedIn"), o = rd.Utils.getNodeByName(e, "awardLbl"), a = 0 === i ? !this._isCanSignIn : i > t;
                    o.active = !(s.active = a);
                }, o._onReceiveButton = function() {
                    if (this._videoSelect.getIsChecked()) this._onVideoRecvButton(); else {
                        this._receiveSignAward();
                        var t = {
                            curDialog: this.getUIName(),
                            btnType: "领取",
                            signDays: g.App.Account.signInfo.count
                        }, e = this._isCanSignIn ? _.onSuccess : _.onFailed;
                        rd.Stats.customEvent(l.custom_button_click, t, e, this._isCanSignIn ? "" : "今日已签到");
                    }
                }, o._receiveSignAward = function(t) {
                    if (void 0 === t && (t = 1), this._isCanSignIn) {
                        var e = g.App.Account.signInfo, n = e.count % S;
                        this._updateSignItem(n), this._isCanSignIn = !1, e.count += 1, e.time = new Date().getTime(), 
                        g.App.Account.signInfo = e, rd.Event.emit(I.EVENT_TYPE.MONEY_FLY_ANIM, p[n] * t), 
                        this._closeDialog();
                    } else rd.UI.showTipMessage("今日已签到！");
                }, o._closeDialog = function() {
                    this.playScaleOutAnim([ this.centerUI ], function() {
                        rd.UI.hideDialog(I.UI_DIALOG_NAME.SIGN_IN, !0);
                    });
                }, o._onVideoRecvButton = function() {
                    var t = this, e = {
                        curDialog: this.getUIName(),
                        btnType: "视频广告",
                        signDays: g.App.Account.signInfo.count
                    };
                    if (!this._isCanSignIn) return rd.UI.showTipMessage("今日已签到！"), void rd.Stats.customEvent(l.custom_button_click, e, _.onFailed, "今日已签到");
                    rd.Stats.customEvent(l.custom_button_click, e, _.onStarted), this.showRewardAd({
                        success: function() {
                            t._receiveSignAward(3), rd.Stats.customEvent(l.custom_button_click, e);
                        },
                        fail: function() {
                            rd.Stats.customEvent(l.custom_button_click, e, _.onFailed);
                        }
                    });
                }, o._onCloseButton = function() {
                    rd.UI.isUIAnimPlaying() || (this._videoSelect.getIsChecked() ? this._onVideoRecvButton() : (this._closeDialog(), 
                    rd.Stats.customEvent(l.custom_button_click, {
                        curDialog: this.getUIName(),
                        btnType: "关闭"
                    })));
                }, s;
            }(m)) || h);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDTTMiniPlatform.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./RDPlatformParam.ts", "./RDPlatformType.ts", "./RDPlatform.ts", "./BannerAdTt.ts", "./VideoAdTt.ts" ], function(t) {
    "use strict";
    var e, n, i, s, o, r, a, c, u, h;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy;
        }, function(t) {
            o = t.Log;
        }, function(t) {
            r = t.RDPlatformParam;
        }, function(t) {
            a = t.RDPlatformType;
        }, function(t) {
            c = t.RDPlatform;
        }, function(t) {
            u = t.BannerAdTt;
        }, function(t) {
            h = t.VideoAdTt;
        } ],
        execute: function() {
            s._RF.push({}, "a500egMaWZL37HYBpErASHX", "RDTTMiniPlatform", void 0);
            t("RDTTMiniPlatform", function(t) {
                function s(e) {
                    var s;
                    return s = t.call(this, e) || this, n(i(s), "_recorder", null), n(i(s), "_videoPath", null), 
                    s;
                }
                e(s, t);
                var c = s.prototype;
                return c.initAD = function() {
                    t.prototype.initAD.call(this), this._hasShortcutInstalled = !0;
                    var e = r.ADPARAM[a.TTMinGame.toString()].video_id;
                    this._videoBoxInstance = new h({
                        adUnitId: "adunit-48a5d8e1ce82b9d9"
                    });
                    var n = r.ADPARAM[a.TTMinGame.toString()].banner_id, i = {
                        width: 200,
                        top: this._systemInfo.windowWidth - 112.5
                    };
                    this._bannerADInstance = new u({
                        adUnitId: n,
                        style: i
                    }), this.showShareMenu(!0), this._onshareAppMessage();
                }, c.showShareMenu = function(t) {
                    t ? this._api.showShareMenu({
                        withShareTicket: !1,
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    }) : this._api.hideShareMenu({
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, c.shareAppMessage = function(t) {}, c._showToast = function(t) {
                    this._api.showToast({
                        title: t,
                        icon: "none",
                        image: "",
                        mask: !1,
                        duration: 2e3,
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, c._gotoMiniGameByAppid = function(t) {
                    this._api.navigateToMiniProgram({
                        appId: t.appid,
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, c._vibrateShort = function(t) {
                    void 0 === t && (t = 50), 100 != t ? this.vibrate(t) : this.vibrateStrong();
                }, c.vibrateStrong = function() {
                    this._api.vibrateLong({
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, c.vibrate = function(t) {
                    new Date().getTime() - this._lastShakeTime < 100 || (this._lastShakeTime = new Date().getTime(), 
                    this._api.vibrateShort({
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    }));
                }, c._showBannerAd = function(t) {
                    this.isReviewed() ? o.debug(this.constructor.name, "审核中=====") : this._bannerADInstance.show({
                        success: function() {},
                        fail: function() {}
                    });
                }, c._showVideo = function(t) {
                    this.isReviewed() ? this._rewardCaback.success(null) : this._videoBoxInstance.show(this._rewardCaback);
                }, c._showIntertitalAd = function(t) {
                    if (!this.isReviewed()) {
                        o.debug("tt开始插屏广告");
                        var e = t.type;
                        1 == e ? this.isBtnFadeIn(!0) ? this.startGameEvent(t.levelId) : this.showInter() : 2 == e ? this.isBtnFadeIn(!0) && this.endGameEvent(t.levelId) : this.isBtnFadeIn(!0) && this.showInter();
                    }
                }, c.showInter = function() {
                    this._interstitialAdInstance.show();
                }, c._onshareAppMessage = function() {
                    this._api.onShareAppMessage(function(t) {
                        var e = r.ADPARAM[a.TTMinGame.toString()].share_text, n = Math.floor(Math.random() * e.length), i = e[n] ? e[n] : "", s = r.ADPARAM[a.TTMinGame.toString()].share_image_url, o = s[n] ? s[n] : "", c = r.ADPARAM[a.TTMinGame.toString()].share_image_id;
                        return {
                            title: i,
                            imageUrl: o,
                            imageUrlId: c[n] ? c[n] : ""
                        };
                    });
                }, c._startRecordScreen = function(t) {
                    var e = this;
                    if (o.debug(this.constructor.name, "startRecordScreen", t), this._recorder) o.debug(this.constructor.name, "已经开始录屏了"); else {
                        this._pauseRecordScreen(null), this._recorder = this._api.getGameRecorderManager();
                        var n = this;
                        this._recorder && (this._recorder.onStart(function(t) {
                            o.debug(e.constructor.name, "开始录屏");
                        }), this._recorder.start({
                            duration: t || 15
                        }), this._recorder.onStop(function(t) {
                            o.debug(e.constructor.name, "录屏结束"), n._videoPath = t.videoPath, o.debug(e.constructor.name, n._videoPath);
                        }), this._recorder.onError(function(t) {
                            o.debug(e.constructor.name, "录屏失败 " + t);
                        }));
                    }
                }, c._pauseRecordScreen = function(t) {
                    this._recorder && (this._recorder.stop(), this._recorder = null);
                }, c._shareVido = function(t) {
                    if (o.debug(this.constructor.name, "分享视频尝试", this._videoPath), !this._videoPath) return !1;
                    var e = this;
                    return !!this._api.shareAppMessage && (this._api.shareAppMessage({
                        channel: "video",
                        title: "",
                        imageUrl: "",
                        query: "",
                        extra: {
                            videoPath: this._videoPath,
                            videoTopics: []
                        },
                        success: function() {
                            o.debug(this.constructor.name, "分享视频成功"), t && t.success(null);
                        },
                        fail: function(t) {
                            o.debug(this.constructor.name, "分享视频失败", t), -1 != t.errMsg.search("shareAppMessage:fail") && e._showToast("录屏时长小于三秒，无法分享");
                        }
                    }), !0);
                }, c.isShowPrivacy = function() {
                    return !1;
                }, c.startGameEvent = function(t) {
                    var e = rd.Utils.random(1, 100), n = rd.Option.getRewardVideoPercent(2);
                    o.debug(this.constructor.name, "startGameEvent", e, n), e <= n ? rd.Ads.showRewardAd({
                        success: function() {},
                        fail: function() {}
                    }, "开始游戏") : this.showInter();
                }, c.endGameEvent = function(t) {
                    var e = rd.Utils.random(1, 100), n = rd.Option.getRewardVideoPercent(1);
                    o.debug(this.constructor.name, "endGameEvent", e, n), e <= n ? rd.Ads.showRewardAd({
                        success: function() {},
                        fail: function() {}
                    }, "结算游戏") : this.showInter();
                }, s;
            }(c));
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDAudioAndroid.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./RDAudioCocos.ts", "./AudioDownLoader.ts" ], function(i) {
    "use strict";
    var t, a, e, o, r, n;
    return {
        setters: [ function(i) {
            t = i.inheritsLoose;
        }, function(i) {
            a = i.cclegacy, e = i.sys;
        }, function(i) {
            o = i.Log;
        }, function(i) {
            r = i.RDAudioCocos;
        }, function(i) {
            n = i.AudioDMgr;
        } ],
        execute: function() {
            a._RF.push({}, "a717aj2d3BPqIafLaOfxrD9", "RDAudioAndroid", void 0);
            i("RDAudioAndroid", function(i) {
                function a(t, a) {
                    return i.call(this, t, a) || this;
                }
                t(a, i);
                var r = a.prototype;
                return r.playMusicByUrl = function(t, a, r, u, s, c, l) {
                    var d = this;
                    if (void 0 === a && (a = !0), void 0 === r && (r = 1), void 0 === u && (u = 0), 
                    o.debug(this.constructor.name, "当前播放歌曲", t, a, s), !a || !e.isNative) return e.isNative && (e.platform === e.Platform.IOS ? window.jsb.reflection.callStaticMethod("AudioManager", "stopByFileName:", "") : window.jsb.reflection.callStaticMethod("com/rdgame/app_base/audio/AudioManager", "stopByFileName", "(Ljava/lang/String;)V", "")), 
                    c && c.success(), i.prototype.playMusicByUrl.call(this, t, a, r, u, s, c, l);
                    this._musicAudio && this._musicAudio.stop(), this._musicAudio = null;
                    var m = "https://xcyyby.tiequangame.com/music_jz101/" + t + ".mp3";
                    o.debug(this.constructor.name, "下载歌曲开始" + m);
                    var g = {
                        url: m,
                        rawUrl: "",
                        name: ""
                    };
                    return n.downloadAudio(g, function(i, a) {
                        var n = {
                            fileName: t,
                            volume: r,
                            startTime: u
                        };
                        d._musicVolume = r, d._musicAudio || (e.platform === e.Platform.IOS ? window.jsb.reflection.callStaticMethod("AudioManager", "playByFileName:", JSON.stringify(n)) : window.jsb.reflection.callStaticMethod("com/rdgame/app_base/audio/AudioManager", "playByFileName", "(Ljava/lang/String;)V", JSON.stringify(n)), 
                        o.debug(d.constructor.name, "下载成功 开始加载" + a.rawUrl), setTimeout(function() {
                            d.updateAudMusic(t);
                        }, 100));
                    }), !0;
                }, r.loadMusicClipByUrl = function(t, a, r) {
                    var u = this;
                    if (void 0 === a && (a = null), void 0 === r && (r = !0), r && e.isNative) {
                        var s = "https://xcyyby.tiequangame.com/music_jz101/" + t + ".mp3";
                        o.debug(this.constructor.name, "loadMusicClipByUrl下载歌曲开始" + s);
                        var c = {
                            url: s,
                            rawUrl: "",
                            name: ""
                        };
                        n.downloadAudio(c, function(i, r) {
                            var n;
                            o.debug(u.constructor.name, "下载成功 开始加载" + r.rawUrl), e.platform === e.Platform.IOS ? window.jsb.reflection.callStaticMethod("AudioManager", "loadByPath:", t) : window.jsb.reflection.callStaticMethod("com/rdgame/app_base/audio/AudioManager", "loadByPath", "(Ljava/lang/String;)V", t), 
                            null === (n = a) || void 0 === n || n.success(null);
                        });
                    } else i.prototype.loadMusicClipByUrl.call(this, t, a);
                }, r.setMusicVolume = function(t) {
                    void 0 === t && (t = 1), i.prototype.setMusicVolume.call(this, t), e.isNative && (t = Math.floor(100 * t), 
                    o.debug(this.constructor.name, "设置音量=", t.toString()), e.platform === e.Platform.IOS ? window.jsb.reflection.callStaticMethod("AudioManager", "setVolume:", "") : window.jsb.reflection.callStaticMethod("com/rdgame/app_base/audio/AudioManager", "setVolume", "(Ljava/lang/String;)V", t.toString()));
                }, r.pauseMusic = function(t) {
                    e.isNative && (o.debug(this.constructor.name, "setMusicSpecifiedTimeAndPause暂停音乐="), 
                    e.platform === e.Platform.IOS ? (o.debug(this.constructor.name, "1setMusicSpecifiedTimeAndPause暂停音乐="), 
                    window.jsb.reflection.callStaticMethod("AudioManager", "pauseByFileName:", "")) : window.jsb.reflection.callStaticMethod("com/rdgame/app_base/audio/AudioManager", "pauseByFileName", "(Ljava/lang/String;)V", "")), 
                    i.prototype.pauseMusic.call(this, t);
                }, r.resumeMusic = function(t) {
                    if (e.isNative && !this._musicAudio) {
                        var a = {
                            startTime: t,
                            volume: this._musicVolume
                        };
                        o.debug(this.constructor.name, "resumeMusic恢复音乐=", JSON.stringify(a)), e.platform === e.Platform.IOS ? window.jsb.reflection.callStaticMethod("AudioManager", "resumeByFileName:", JSON.stringify(a)) : window.jsb.reflection.callStaticMethod("com/rdgame/app_base/audio/AudioManager", "resumeByFileName", "(Ljava/lang/String;)V", JSON.stringify(a));
                    }
                    i.prototype.resumeMusic.call(this, t);
                }, r.stopMusic = function() {
                    e.isNative && (o.debug(this.constructor.name, "stopMusic 停止音乐="), e.platform === e.Platform.IOS ? window.jsb.reflection.callStaticMethod("AudioManager", "stopByFileName:", "") : window.jsb.reflection.callStaticMethod("com/rdgame/app_base/audio/AudioManager", "stopByFileName", "(Ljava/lang/String;)V", "")), 
                    i.prototype.stopMusic.call(this);
                }, r.getMusicCurrentTime = function() {
                    if (this._musicAudio) return i.prototype.getMusicCurrentTime.call(this);
                    if (e.isNative && e.platform !== e.Platform.IOS) {
                        var t = window.jsb.reflection.callStaticMethod("com/rdgame/app_base/audio/AudioManager", "getCurrentTime", "(Ljava/lang/String;)Ljava/lang/String;", "");
                        return Number(t) / 1e3;
                    }
                    return 0;
                }, r.getMusicDuration = function() {
                    if (this._musicAudio) return i.prototype.getMusicDuration.call(this);
                    if (e.isNative && e.platform !== e.Platform.IOS) {
                        var t = window.jsb.reflection.callStaticMethod("com/rdgame/app_base/audio/AudioManager", "getDuration", "(Ljava/lang/String;)Ljava/lang/String;", "");
                        return Number(t) / 1e3;
                    }
                    return 0;
                }, a;
            }(r));
            a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/PrivacyPolicy.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./RDStatisticsManager.ts", "./UIBase.ts" ], function(t) {
    "use strict";
    var i, e, n, s, o, r, c, a, h;
    return {
        setters: [ function(t) {
            i = t.inheritsLoose, e = t.defineProperty, n = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy, o = t._decorator, r = t.Label;
        }, function(t) {
            c = t.ConstantCommon;
        }, function(t) {
            a = t.CustomEventID;
        }, function(t) {
            h = t.UIBase;
        } ],
        execute: function() {
            var d;
            s._RF.push({}, "a9ba6IGh3RL17Qdo8U1Atbm", "PrivacyPolicy", void 0);
            var l = o.ccclass;
            t("PrivacyPolicy", l("PrivacyPolicy")(d = function(t) {
                function s() {
                    for (var i, s = arguments.length, o = new Array(s), r = 0; r < s; r++) o[r] = arguments[r];
                    return i = t.call.apply(t, [ this ].concat(o)) || this, e(n(i), "_privacy_dialog", void 0), 
                    e(n(i), "_privacy_content", void 0), e(n(i), "_callback", void 0), e(n(i), "_text", void 0), 
                    e(n(i), "_showContent", !1), e(n(i), "_texts", []), e(n(i), "_currentIndex", 0), 
                    e(n(i), "_next", void 0), e(n(i), "_back", void 0), i;
                }
                i(s, t);
                var o = s.prototype;
                return o.onLoad = function() {
                    this._privacy_dialog = rd.Utils.getNodeByName(this.node, "centerUI"), this._privacy_dialog.active = !1, 
                    this._privacy_content = rd.Utils.getNodeByName(this.node, "centerUI1"), this._privacy_content.active = !1, 
                    this._text = rd.Utils.getNodeComponent(this.node, "text", r), rd.Utils.registerButtonEvent(this.node, "sureContentBtn", this.sureContentBtn, this), 
                    rd.Utils.registerButtonEvent(this.node, "sureBtn", this.sureBtn, this), rd.Utils.registerButtonEvent(this.node, "exitGameBtn", this.exitGameBtn, this), 
                    rd.Utils.registerButtonEvent(this.node, "continue", this.exitGameBtn, this), this._back = rd.Utils.registerButtonEvent(this.node, "back", this.back, this), 
                    this._next = rd.Utils.registerButtonEvent(this.node, "next", this.next, this), rd.Utils.registerButtonEvent(this.node, "title1", this.onUserProtocolClicked, this), 
                    this.zIndex = c.UI_DIALOG_Z_INDEX.TOAST;
                }, o.show = function() {
                    this._showContent = arguments.length <= 0 ? void 0 : arguments[0], this._callback = arguments.length <= 1 ? void 0 : arguments[1], 
                    this._privacy_dialog.active = !this._showContent, this._privacy_content.active = this._showContent, 
                    this.playScaleInAnim([ rd.Utils.getNodeByName(this.node, "uiNode"), this._privacy_content ]), 
                    this._showContent && this.loadText();
                }, o.next = function() {
                    this._currentIndex++, this._currentIndex = Math.min(this._currentIndex, this._texts.length - 1), 
                    this._text.string = this._texts[this._currentIndex];
                }, o.back = function() {
                    this._currentIndex--, this._currentIndex = Math.max(this._currentIndex, 0), this._text.string = this._texts[this._currentIndex];
                }, o.getUIName = function() {
                    return "隐私政策";
                }, o.onUserProtocolClicked = function() {
                    this._privacy_dialog.active = !1, this._privacy_content.active = !0, rd.UI.playScaleInAnim([ this._privacy_content ], function() {}), 
                    this.loadText();
                }, o.loadText = function() {
                    var t = this;
                    rd.Asset.loadTextAsset("adUI/privacy/privacy", c.BUNDLE_NAME.ATOM).then(function(i) {
                        t._texts = [];
                        for (var e = 1; e <= 35; e++) {
                            var n = i.text.slice(i.text.length / 35 * (e - 1), i.text.length / 35 * e);
                            t._texts.push(n);
                        }
                        t._text.string = t._texts[0];
                    });
                }, o.sureContentBtn = function() {
                    var t = this;
                    this._showContent ? this.playScaleOutAnim([ rd.Utils.getNodeByName(this.node, "uiNode") ], function() {
                        rd.UI.hideDialog("adUI/privacyPolicy");
                    }) : (this._privacy_dialog.active = !0, rd.UI.playScaleOutAnim([ this._privacy_content ], function() {
                        t._privacy_content.active = !1;
                    }));
                }, o.sureBtn = function() {
                    var t = this;
                    this.playScaleOutAnim([ rd.Utils.getNodeByName(this.node, "uiNode") ], function() {
                        var i;
                        rd.UI.hideDialog("adUI/privacyPolicy"), rd.GameDataModel.isPrivacyAgree = !0, null === (i = t._callback) || void 0 === i || i.call(t), 
                        rd.Stats.customEvent(a.custom_churn_privacy, {
                            steps: "同意隐私协议"
                        });
                    });
                }, o.exitGameBtn = function() {
                    rd.Stats.customEvent(a.custom_churn_privacy, {
                        steps: "拒绝隐私协议"
                    }), rd.Platform.exitGame();
                }, s;
            }(h)) || d);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ListViewItem.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(e) {
    "use strict";
    var t, i, n, s, o, r, l, a, c, p, u, d, m, h, f;
    return {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, 
            s = e.assertThisInitialized, o = e.defineProperty, r = e.createClass;
        }, function(e) {
            l = e.cclegacy, a = e._decorator, c = e.Enum, p = e.Sprite, u = e.SpriteFrame, d = e.Button, 
            m = e.Node, h = e.UITransform, f = e.Component;
        } ],
        execute: function() {
            var _, C, S, y, v, I, b, g, w, E, T, V, z, L;
            l._RF.push({}, "ab0begfektNrrTh9j/QXi8S", "ListViewItem", void 0);
            var N, O = a.ccclass, F = a.property, D = a.menu, G = a.disallowMultiple, H = a.executionOrder;
            !function(e) {
                e[e.NONE = 0] = "NONE", e[e.TOGGLE = 1] = "TOGGLE", e[e.SWITCH = 2] = "SWITCH";
            }(N || (N = {}));
            e("ListViewItem", (_ = O("ListViewItem"), C = D("Utils/ListViewItem"), S = G(), 
            y = H(-5001), v = F({
                type: c(N),
                displayOrder: 0,
                tooltip: "选择模式"
            }), I = F({
                type: p,
                visible: function() {
                    return this.selectedMode > N.NONE;
                },
                displayOrder: 1,
                tooltip: "选择精灵"
            }), b = F({
                type: u,
                visible: function() {
                    return this.selectedMode === N.SWITCH;
                },
                displayOrder: 2,
                tooltip: "选中精灵帧"
            }), g = F({
                displayOrder: 3,
                tooltip: "自适应尺寸"
            }), _(w = C(w = S(w = y((T = t((E = function(e) {
                function t() {
                    for (var t, i = arguments.length, r = new Array(i), l = 0; l < i; l++) r[l] = arguments[l];
                    return t = e.call.apply(e, [ this ].concat(r)) || this, n(s(t), "selectedMode", T, s(t)), 
                    n(s(t), "selectSprite", V, s(t)), n(s(t), "selectedFrame", z, s(t)), n(s(t), "adaptiveSize", L, s(t)), 
                    o(s(t), "_isSelected", !1), o(s(t), "_itemId", -1), o(s(t), "_btnComp", null), o(s(t), "_unselectedFrame", null), 
                    o(s(t), "_listViewComp", null), o(s(t), "_customItemComp", null), o(s(t), "_isRegisterEvt", !1), 
                    t;
                }
                i(t, e);
                var l = t.prototype;
                return l.onLoad = function() {
                    this._btnComp = this.getComponent(d);
                    var e = this.node.name;
                    this._customItemComp = this.node.getComponent("" + e.substr(0, 1).toUpperCase() + e.substr(1)), 
                    this.selectedMode === N.SWITCH && this.selectSprite && (this._unselectedFrame = this.selectSprite.spriteFrame);
                }, l.getBtnComponent = function() {
                    return this._btnComp;
                }, l.setListViewComp = function(e) {
                    this._listViewComp = e;
                }, l.registerEvent = function() {
                    this._isRegisterEvt || (this._isRegisterEvt = !0, this._btnComp && this._listViewComp.selectedType, 
                    this.adaptiveSize && this.node.on(m.EventType.SIZE_CHANGED, this._onSizeChange, this));
                }, l.onItemButton = function() {
                    this._listViewComp.selectedId = this._itemId;
                }, l.showAnimation = function(e, t, i) {
                    var n, s = this;
                    this.node.getComponent(h);
                    (t || i) && n.call(function() {
                        if (i) {
                            s._listViewComp.deleteSingleItem(s.node);
                            for (var e = s._listViewComp._displayData, n = e.length - 1; n >= 0; n--) if (e[n].id == s._itemId) {
                                e.splice(n, 1);
                                break;
                            }
                        }
                        t();
                    }), n.start();
                }, l._onSizeChange = function() {
                    this._listViewComp.itemAdaptive(this.node);
                }, l.onDestroy = function() {
                    this.node.off(m.EventType.SIZE_CHANGED, this._onSizeChange, this);
                }, r(t, [ {
                    key: "isSelected",
                    get: function() {
                        return this._isSelected;
                    },
                    set: function(e) {
                        var t;
                        if (this._isSelected = e, this.selectSprite) switch (this.selectedMode) {
                          case N.TOGGLE:
                            this.selectSprite.node.active = e;
                            break;

                          case N.SWITCH:
                            this.selectSprite.spriteFrame = e ? this.selectedFrame : this._unselectedFrame;
                            var i = this._customItemComp;
                            null == i || null === (t = i.updateData) || void 0 === t || t.call(i);
                        }
                    }
                }, {
                    key: "itemId",
                    get: function() {
                        return this._itemId;
                    },
                    set: function(e) {
                        this._itemId = e;
                    }
                } ]), t;
            }(f)).prototype, "selectedMode", [ v ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return N.NONE;
                }
            }), V = t(E.prototype, "selectSprite", [ I ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), z = t(E.prototype, "selectedFrame", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), L = t(E.prototype, "adaptiveSize", [ g ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), w = E)) || w) || w) || w) || w));
            l._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/TextureManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(e) {
    "use strict";
    var t, n;
    return {
        setters: [ function(e) {
            t = e.defineProperty;
        }, function(e) {
            n = e.cclegacy;
        } ],
        execute: function() {
            n._RF.push({}, "ab49fOVMk9Ki42CbjpD5VGg", "TextureManager", void 0);
            var r = e("TextureManager", function() {
                function e() {}
                return e.getInstance = function() {
                    return this._instance;
                }, e.prototype.getTextureByName = function(e) {
                    var t = rd.Asset.getAsset(e);
                    return t || null;
                }, e;
            }());
            t(r, "_instance", new r()), n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/GameEvents.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(e) {
    "use strict";
    var t, n;
    return {
        setters: [ function(e) {
            t = e.defineProperty;
        }, function(e) {
            n = e.cclegacy;
        } ],
        execute: function() {
            n._RF.push({}, "ab916zlqBtLpaCmt/rWhsWo", "GameEvents", void 0);
            var O = e("GameEvents", function() {});
            t(O, "UPDATE_COIN", "UPDATE_COIN"), t(O, "COIN_NOTENOUGH", "COIN_NOTENOUGH"), t(O, "UPDATE_POWER", "UPDATE_COIN"), 
            t(O, "POWER_NOTENOUGH", "COIN_NOTENOUGH"), n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/SawMgr.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts" ], function(t) {
    "use strict";
    var a, s, e, r, o, n, i, l, d, _, w;
    return {
        setters: [ function(t) {
            a = t.inheritsLoose, s = t.defineProperty, e = t.assertThisInitialized, r = t.asyncToGenerator;
        }, function(t) {
            o = t.cclegacy, n = t._decorator, i = t.MeshRenderer, l = t.Component, d = t.instantiate;
        }, function(t) {
            _ = t.Constants;
        }, function(t) {
            w = t.ConstantCommon;
        } ],
        execute: function() {
            var h;
            o._RF.push({}, "abac2lqhIhE6Y3V4inAEFWm", "SawMgr", void 0);
            var u = n.ccclass;
            t("SawMgr", u("SawMgr")(h = function(t) {
                function o() {
                    for (var a, r = arguments.length, o = new Array(r), n = 0; n < r; n++) o[n] = arguments[n];
                    return a = t.call.apply(t, [ this ].concat(o)) || this, s(e(a), "_sawCtrlNode", null), 
                    s(e(a), "_sawMtl", null), s(e(a), "_sawNode", null), s(e(a), "_sawbladeArr", []), 
                    s(e(a), "_sawRigNode", null), a;
                }
                a(o, t);
                var n = o.prototype;
                return n.start = function() {
                    this._sawCtrlNode = this.node.getChildByName("sawCtrl"), this._sawMtl = this._sawCtrlNode.getComponent(i).sharedMaterial, 
                    this._loadSaw(), this._setSawLvColor(), this._registerEvent(!0);
                }, n._loadSaw = function() {
                    var t = r(function*() {
                        var t = this, a = g.App.SawData.level, s = yield rd.Asset.loadPrefab("warCar/saw/sawLv" + a, w.BUNDLE_NAME.PREFAB);
                        this._sawNode && (this._sawNode.destroy(), rd.Event.emit(_.EVENT_TYPE.PLAY_UPGRADE_ANIM)), 
                        this._sawNode = d(s), this._sawCtrlNode.addChild(this._sawNode);
                        var e = yield rd.Asset.loadPrefab("warCar/saw/sawblade", w.BUNDLE_NAME.PREFAB);
                        if (this._sawbladeArr.forEach(function(t) {
                            return rd.Pool.putNode(t);
                        }), this._sawbladeArr.length = 0, this._sawNode.children.forEach(function(a) {
                            return t._sawbladeArr.push(rd.Pool.getNode(e, a));
                        }), 1 !== a) {
                            var r = yield rd.Asset.loadPrefab("warCar/saw/sawRig", w.BUNDLE_NAME.PREFAB);
                            rd.Pool.putNode(this._sawRigNode), this._sawRigNode = rd.Pool.getNode(r, this._sawNode);
                        }
                    });
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), n._setSawLvColor = function() {
                    var t = g.App.SawData.getSawColor();
                    this._sawMtl.setProperty("mainColor", t);
                }, n._registerEvent = function(t) {
                    var a = t ? "on" : "off";
                    rd.Event[a](_.EVENT_TYPE.UPDATE_SAW_POS, this._updateSawPos, this), rd.Event[a](_.EVENT_TYPE.UPGRADE_SAW_LV, this._loadSaw, this), 
                    rd.Event[a](_.EVENT_TYPE.UPGRADE_SAW_DMG, this._setSawLvColor, this);
                }, n._updateSawPos = function(t) {
                    this._sawCtrlNode.setPosition(t.position);
                }, n.onDestroy = function() {
                    this._registerEvent(!1);
                }, o;
            }(l)) || h);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/QueueManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Queue.ts" ], function(e) {
    "use strict";
    var t, n, s, u;
    return {
        setters: [ function(e) {
            t = e.defineProperty, n = e.asyncToGenerator;
        }, function(e) {
            s = e.cclegacy;
        }, function(e) {
            u = e.default;
        } ],
        execute: function() {
            s._RF.push({}, "abe0ceMvZ9Nh7NH4bg0l26R", "QueueManager", void 0);
            var i = e("default", function() {
                function e() {
                    t(this, "_queueList", []), t(this, "_isRun", !1), t(this, "_isDestroy", !1);
                }
                e.getInstance = function() {
                    return this.getQueueManagerInstance("default");
                }, e.getQueueManagerInstance = function(t) {
                    return this._instances.has(t) || this._instances.set(t, new e()), this._instances.get(t);
                }, e.destroyQueueManagerInstance = function(e) {
                    this._instances.has(e) && (this._instances.get(e).destroy(), this._instances.delete(e));
                };
                var s = e.prototype;
                return s.get = function(e) {
                    return this._queueList[e];
                }, s.indexOf = function(e) {
                    return this._queueList.indexOf(e);
                }, s.push = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
                    var i = new u(e, n), r = this._queueList.push(i);
                    return this._run(), r;
                }, s._run = function() {
                    var e = n(function*() {
                        this._isRun || this._isDestroy || !this._queueList[0] || (this._isRun = !0, yield this._queueList[0].run(), 
                        this._queueList.splice(0, 1), this._isRun = !1, this._run());
                    });
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(), s.destroy = function() {
                    this._queueList = null;
                }, e;
            }());
            t(i, "_instances", new Map()), s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/NativeAdHw.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./NativeAdBase.ts" ], function(t) {
    "use strict";
    var e, n, i;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy;
        }, function(t) {
            i = t.NativeAdBase;
        } ],
        execute: function() {
            n._RF.push({}, "aee61zy8SJGs7ipbwNfG8EN", "NativeAdHw", void 0);
            t("NativeAdHw", function(t) {
                function n(e) {
                    var n;
                    return (n = t.call(this, e) || this)._platName = "qg", n.create(), n;
                }
                return e(n, t), n.prototype._fun = function() {
                    rd.Option.regionEnable && t.prototype._fun.call(this);
                }, n;
            }(i));
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ADBannerList.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./ADMainPush.ts" ], function(t) {
    "use strict";
    var n, e, i, o, s, r, h, a, c, l, d, u, _, m, g;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, e = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            o = t.cclegacy, s = t._decorator, r = t.UITransformComponent, h = t.view, a = t.macro, 
            c = t.v3, l = t.instantiate, d = t.v2, u = t.Component;
        }, function(t) {
            _ = t.ConstantCommon;
        }, function(t) {
            m = t.ADMainPush, g = t.PUSH_TYPE;
        } ],
        execute: function() {
            var f;
            o._RF.push({}, "aef01t/+4BGL7Cnkct2EXhF", "ADBannerList", void 0);
            var p = s.ccclass;
            t("ADBannerList", p("ADBannerList")(f = function(t) {
                function o() {
                    for (var n, o = arguments.length, s = new Array(o), r = 0; r < o; r++) s[r] = arguments[r];
                    return n = t.call.apply(t, [ this ].concat(s)) || this, e(i(n), "_content", null), 
                    e(i(n), "_index", 0), e(i(n), "_move", -1), e(i(n), "_dataList", null), e(i(n), "scrollView", null), 
                    n;
                }
                n(o, t);
                var s = o.prototype;
                return s.onLoad = function() {
                    this.node.getComponent(r).setContentSize(h.getVisibleSize().width, this.node.getComponent(r).height), 
                    this._content = rd.Utils.getNodeByName(this.node, "content"), this.scrollView = rd.Utils.getNodeByName(this.node, "gameList"), 
                    this._dataList = rd.GameList.gameList, this.show();
                }, s.onEnable = function() {
                    this._dataList.length <= 7 || this.schedule(this.scrolling, 1 / 60, a.REPEAT_FOREVER, 1);
                }, s.onDisable = function() {
                    this.unschedule(this.scrolling);
                }, s.scrolling = function() {
                    -1 === this._move && this._content.getPosition().x <= -this.scrollView.getComponent(r).width / 2 - (this._content.getComponent(r).width - this.scrollView.getComponent(r).width) && (this._move = 1), 
                    1 === this._move && this._content.getPosition().x >= -this.scrollView.getComponent(r).width / 2 && (this._move = -1), 
                    this._content.setPosition(c(this._content.getPosition().x + this._move, this._content.getPosition().y, 0));
                }, s.show = function() {
                    var t = this;
                    if (rd.Option.regionEnable && rd.Option.videoPlayConfirmProbability) {
                        if (this._content.children.length > 0) return;
                        this._dataList.forEach(function(n) {
                            t.createItem(n);
                        });
                    } else this.node.removeFromParent();
                }, s.createItem = function(t) {
                    var n = this;
                    rd.Asset.loadPrefab("adUI/ADMainPush", _.BUNDLE_NAME.ATOM).then(function(e) {
                        var i = l(e);
                        n._content.addChild(i), n._content.getComponent(r).width = i.getComponent(r).width * (.5 + n._index) + 10 * (n._index + 1) + .6 * i.getComponent(r).width;
                        var o = i.getComponent(m);
                        o.setAnchorPoint(d(.5, .5)), o.type = g.PUSH_VER_BANNER, o.freash(t), n._index = n._index + 1;
                    });
                }, s.setPosition = function(t) {
                    this.node.setPosition(t);
                }, o;
            }(u)) || f);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/SawData.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./SingletonBase.ts" ], function(t) {
    "use strict";
    var e, a, n, r, i, u, f, c;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, a = t.createClass, n = t.defineProperty, r = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, u = t.color;
        }, function(t) {
            f = t.Constants;
        }, function(t) {
            c = t.SingletonBase;
        } ],
        execute: function() {
            i._RF.push({}, "af1aepPgfdCfouV8CRDWhPj", "SawData", void 0);
            var o = [ u("#ffffff"), u("#ff4d59"), u("#12cfff"), u("#83ff13"), u("#9921ff"), u("#3c3c38"), u("#3939ff"), u("#ff7701"), u("#ffe701"), u("#ff00fe") ], s = [ 100, 500, 1500, 2e3 ], l = [ 100, 250, 500, 750, 1e3, 1500, 1800, 2200, 2600 ];
            t("SawData", function(t) {
                function i() {
                    for (var e, a = arguments.length, i = new Array(a), u = 0; u < a; u++) i[u] = arguments[u];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, n(r(e), "_damage", 0), e;
                }
                e(i, t);
                var u = i.prototype;
                return u.getSawColor = function() {
                    return o[this.damageLv - 1];
                }, u.upgradeLevel = function() {
                    var t = g.App.Account.getSawData();
                    t.level >= 5 || (t.level += 1, g.App.Account.setSawData(t), rd.Event.emit(f.EVENT_TYPE.UPGRADE_SAW_LV));
                }, u.upgradeDamage = function() {
                    var t = g.App.Account.getSawData();
                    t.damageLv >= 10 || (t.damageLv += 1, g.App.Account.setSawData(t), rd.Event.emit(f.EVENT_TYPE.UPGRADE_SAW_DMG), 
                    this._updateDamage(), rd.Event.emit(f.EVENT_TYPE.PLAY_UPGRADE_ANIM));
                }, u._updateDamage = function() {}, a(i, [ {
                    key: "level",
                    get: function() {
                        return g.App.Account.getSawData().level;
                    }
                }, {
                    key: "damageLv",
                    get: function() {
                        return g.App.Account.getSawData().damageLv;
                    }
                }, {
                    key: "damage",
                    get: function() {
                        return 0 === this._damage && this._updateDamage(), this._damage;
                    }
                }, {
                    key: "nextLvAmt",
                    get: function() {
                        return s[this.level - 1];
                    }
                }, {
                    key: "nextDmgAmt",
                    get: function() {
                        return l[this.damageLv - 1];
                    }
                }, {
                    key: "isMaxLv",
                    get: function() {
                        return this.level >= 5;
                    }
                }, {
                    key: "isMaxDmgLv",
                    get: function() {
                        return this.damageLv >= 10;
                    }
                } ]), i;
            }(c));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ADBombGame.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./UIBase.ts" ], function(n) {
    "use strict";
    var t, e, i, s, o, a, c, r;
    return {
        setters: [ function(n) {
            t = n.inheritsLoose, e = n.defineProperty, i = n.assertThisInitialized;
        }, function(n) {
            s = n.cclegacy, o = n._decorator, a = n.Button;
        }, function(n) {
            c = n.ConstantCommon;
        }, function(n) {
            r = n.UIBase;
        } ],
        execute: function() {
            var h;
            s._RF.push({}, "b2d6duErcdAg6Yhxhnx6vLY", "ADBombGame", void 0);
            var d = o.ccclass;
            o.property, n("ADBombGame", d("ADBombGame")(h = function(n) {
                function s() {
                    for (var t, s = arguments.length, o = new Array(s), a = 0; a < s; a++) o[a] = arguments[a];
                    return t = n.call.apply(n, [ this ].concat(o)) || this, e(i(t), "backBtn", null), 
                    e(i(t), "_callback", null), e(i(t), "_clickTimes", 0), e(i(t), "_showBanner", !1), 
                    t;
                }
                t(s, n);
                var o = s.prototype;
                return o.onLoad = function() {
                    this.backBtn = rd.Utils.getNodeComponent(this.node, "backGame", a), this.backBtn.node.on("click", this.onBackGame, this), 
                    this.initAdData(!1), this.zIndex = c.UI_DIALOG_Z_INDEX.TOP;
                }, o.getUIName = function() {
                    return "热玩";
                }, o.show = function(n) {
                    var t, e = this;
                    if (rd.Ads.hideBannerAd(), this.backBtn.node.active = !1, this._clickTimes = 0, 
                    this._showBanner = !1, this._callback = n, !rd.Option.systemWXSwitch) return null === (t = this._callback) || void 0 === t || t.call(this), 
                    void rd.UI.hideDialog(c.UI_DIALOG_NAME.ADBOMBGAME, !0);
                    rd.Ads.showCustomAdHot(this.node), rd.Ads.hideCustomAdBannerTop(), this.scheduleOnce(function() {
                        e.backBtn.node.active = !0, e.showBanner();
                    }, 3);
                }, o.showBanner = function() {
                    var n = this;
                    this._showBanner ? rd.Ads.hideBannerAd() : rd.Ads.showBannerAd(), this._showBanner = !this._showBanner, 
                    this.scheduleOnce(function() {
                        n.showBanner();
                    }, 1.5);
                }, o.hide = function() {
                    this.unscheduleAllCallbacks(), rd.Ads.hideBannerAd(), rd.Ads.hideCustomAdHot();
                }, o.onBackGame = function() {
                    var n;
                    this._clickTimes++, 1 !== this._clickTimes && (null === (n = this._callback) || void 0 === n || n.call(this), 
                    rd.UI.hideDialog(c.UI_DIALOG_NAME.ADBOMBGAME, !0));
                }, s;
            }(r)) || h);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/UIBase.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./RDCommand.ts", "./RDPlatformType.ts", "./NativeAds.ts", "./RDStatisticsManager.ts", "./VideoSelect.ts" ], function(t) {
    "use strict";
    var e, i, o, n, s, a, d, r, h, p, c, l, v, u, f, m, A, I, _, g, N, T, y, B, O, U;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, i = t.defineProperty, o = t.assertThisInitialized, n = t.createClass;
        }, function(t) {
            s = t.cclegacy, a = t._decorator, d = t.v3, r = t.Tween, h = t.UITransform, p = t.view, 
            c = t.Button, l = t.Layout, v = t.sys, u = t.tween, f = t.UIOpacity, m = t.Widget, 
            A = t.Sprite, I = t.Component;
        }, function(t) {
            _ = t.Log;
        }, function(t) {
            g = t.ConstantCommon;
        }, function(t) {
            N = t.RDCommand;
        }, function(t) {
            T = t.RDPlatformType;
        }, function(t) {
            y = t.NativeType;
        }, function(t) {
            B = t.CustomEventID, O = t.EventResult;
        }, function(t) {
            U = t.VideoSelect;
        } ],
        execute: function() {
            var S;
            s._RF.push({}, "b2e2cPRSnBOQpd+A1BWAkNM", "UIBase", void 0);
            var C = a.ccclass, P = 480;
            t("UIBase", C("UIBase")(S = function(t) {
                function s() {
                    for (var e, n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                    return e = t.call.apply(t, [ this ].concat(s)) || this, i(o(e), "centerUI", null), 
                    i(o(e), "oppoNativeAd", null), i(o(e), "closeBtn", null), i(o(e), "_zIndex", 0), 
                    i(o(e), "_bgOpaComp", null), i(o(e), "_nativeAdScript", null), i(o(e), "_adHeight", 0), 
                    i(o(e), "oppoAdInitPos", d()), i(o(e), "_fadeInNode", []), i(o(e), "_oppoAdIsBottom", !0), 
                    i(o(e), "_lookNativeAd", null), i(o(e), "_aniNodeScales", []), i(o(e), "_videoSelect", void 0), 
                    e;
                }
                e(s, t);
                var a = s.prototype;
                return a.onLoad = function() {
                    this.initBgOpacity();
                }, a.getUIName = function() {
                    return "";
                }, a.show = function() {
                    this._videoSelect && this._videoSelect.init(), rd.Stats.customEvent(B.custom_open_view, {
                        curDialog: this.getUIName()
                    });
                }, a.hide = function() {
                    this._registerAdEvent(!1), rd.Ads.hideBannerAd(), this.centerUI && r.stopAllByTarget(this.centerUI), 
                    this.oppoNativeAd && (r.stopAllByTarget(this.oppoNativeAd), this.oppoNativeAd.setPosition(this.oppoAdInitPos));
                }, a.initBgOpacity = function(t, e) {
                    void 0 === t && (t = this.node), void 0 === e && (e = "bg"), this._videoSelect = rd.Utils.getNodeComponent(this.node, "videoSelect", U);
                    var i = rd.Utils.getNodeByName(t, e);
                    i && (this._bgOpaComp = this.getOpacityComponent(i));
                }, a.initAdData = function(t, e, i, o) {
                    if (void 0 === t && (t = !0), void 0 === e && (e = this.node), void 0 === i && (i = 0), 
                    void 0 === o && (o = null), this._oppoAdIsBottom = t, this.initOppoNativeAd(e, o), 
                    this.centerUI = rd.Utils.getNodeByName(e, "centerUI"), this.centerUI) {
                        var n = this.centerUI.getComponent(h).contentSize.height;
                        this._adHeight = p.getVisibleSize().height - this._getTopOffsetHeight() - n - i, 
                        this._adHeight = Math.min(this._adHeight, P);
                    } else this.oppoNativeAd && (this._adHeight = Math.min(this.oppoNativeAd.getComponent(h).height, P));
                    this._oppoAdIsBottom && rd.Platform.isShowNativeAd() && (this.oppoNativeAd.getComponent(h).height = this._adHeight);
                }, a.initOppoNativeAd = function(t, e) {
                    if (void 0 === t && (t = this.node), void 0 === e && (e = null), this.oppoNativeAd = rd.Utils.getNodeByName(t, "nativeAd"), 
                    rd.Platform.isShowNativeAd()) {
                        var i, o = rd.Utils.getNodeByName(t, "nativeAdBtn");
                        o && (rd.Platform.isBtnFadeIn() && o.on(c.EventType.CLICK, this._onLookOppoAdButton, this), 
                        o.active = !0), this.oppoNativeAd.active = !0, null === (i = e) || void 0 === i || i();
                    }
                    this.oppoNativeAd && this.oppoAdInitPos.set(this.oppoNativeAd.position);
                }, a.setOppoLookAdBtn = function(t, e, i) {
                    var o;
                    (void 0 === t && (t = this.node), void 0 === e && (e = "lookAdBtn"), void 0 === i && (i = !0), 
                    this._lookNativeAd = rd.Utils.getNodeByName(t, e), this._lookNativeAd) && (this._lookNativeAd.active = rd.Platform.isShowNativeAd(!0), 
                    this._lookNativeAd.active && (i && !this._lookNativeAd.getComponent("LookAtAdButton") && this._lookNativeAd.addComponent("LookAtAdButton"), 
                    this._lookNativeAd.on(c.EventType.CLICK, this._onLookOppoAdButton, this), null === (o = t.getComponent(l)) || void 0 === o || o.updateLayout()));
                    return this._lookNativeAd;
                }, a.setShowAdData = function(t, e) {
                    void 0 === t && (t = !0), void 0 === e && (e = g.INTERSTITIALAD_POSITION.POSITION_NONE), 
                    this._oppoAdIsBottom && this.centerUI && this.centerUI.setPosition(0, 0, 0), this.oppoNativeAd && (this.oppoNativeAd.active = !1), 
                    this._registerAdEvent(!0), t && this.showAdvertisement(e);
                }, a.showAdvertisement = function(t) {
                    var e = this;
                    if (void 0 === t && (t = g.INTERSTITIALAD_POSITION.POSITION_NONE), this.oppoNativeAd) {
                        this.oppoNativeAd.active = !1, _.debug(this.constructor.name, "可用空间=====", this._adHeight, this.getUIName()), 
                        rd.Ads.hideBannerAd();
                        var i = this._adHeight >= (v.isNative ? P : 300) ? y.NATIVE_IMAGEN_BIG : y.NATIVE_IMAGE;
                        if (!rd.Ads.showNativeAd(this.oppoNativeAd, function(i) {
                            e._nativeAdScript = i, -1 !== t && e.showInterstitialAd({
                                type: t
                            });
                        }, this.getUIName(), i)) {
                            var o = {
                                uiName: this.getUIName()
                            };
                            this._adHeight >= P && (o.nativeType = 2), rd.Platform.platformType === T.VIVOGame ? rd.Option.regionEnable ? -1 !== t && this.showInterstitialAd({
                                type: t
                            }) : rd.Ads.showBannerAd(o) : (rd.Ads.showBannerAd(o), -1 !== t && this.showInterstitialAd({
                                type: t
                            }));
                        }
                    }
                }, a.playScaleInAnim = function(t, e, i) {
                    var o = this;
                    if (void 0 === e && (e = []), this._aniNodeScales.length <= 0) t.forEach(function(t) {
                        o._aniNodeScales.push(d(t.scale.x, t.scale.y, t.scale.z));
                    }); else {
                        for (var n = 0; n < this._aniNodeScales.length; n++) {
                            var s = this._aniNodeScales[n];
                            t[n].scale = s;
                        }
                        this._bgOpaComp && (this._bgOpaComp.opacity = 255);
                    }
                    e.length > 0 && (rd.Platform.isBtnFadeIn() ? e.forEach(function(t) {
                        t.active = !1, t.setScale(1, 1, 1);
                    }) : e.forEach(function(e) {
                        t.push(e);
                    })), rd.UI.playScaleInAnim(t, this.playFadeInAnim.bind(this, e), i);
                }, a.playFadeInAnim = function(t) {
                    if (void 0 === t && (t = []), t.length > 0 && rd.Platform.isBtnFadeIn() && t.forEach(function(t) {
                        t.active = !1, t.setScale(1, 1, 1);
                    }), t.length > 0) {
                        var e = rd.Platform.isBtnFadeIn();
                        this._fadeInNode = t, e && this.scheduleOnce(this._playFadeInTween, rd.Option.fadeInDelay / 1e3);
                    }
                }, a.playScaleOutAnim = function(t, e, i) {
                    var o, n = this;
                    this._fadeInNode.length < 0 && (this.unschedule(this._playFadeInTween), this._fadeInNode.forEach(function(t) {
                        r.stopAllByTarget(n.getOpacityComponent(t));
                    }));
                    var s = null === (o = this._bgOpaComp) || void 0 === o ? void 0 : o.node;
                    rd.UI.playScaleOutAnim(t, function() {
                        null == e || e(), n._bgOpaComp && (n._bgOpaComp.opacity = 255);
                    }, s, i);
                }, a.showRewardAd = function(t) {
                    rd.Ads.showRewardAd({
                        success: function(e) {
                            t.success(e);
                        },
                        fail: function() {
                            t.fail();
                        }
                    }, this.getUIName());
                }, a.showInterstitialAd = function(t) {
                    var e = rd.Option.getNativeIntertitalDelay(t.type) / 1e3;
                    this.scheduleOnce(function() {
                        rd.Ads.showInterstitialAd(t);
                    }, e);
                }, a._registerAdEvent = function(t) {
                    if (rd.Platform.isShowNativeAd()) {
                        var e = t ? "on" : "off";
                        rd.Event[e]("menuUp", this._setCenterUIUp, this), rd.Event[e]("menuDown", this._setCenterUIDown, this);
                    }
                }, a._setCenterUIUp = function() {
                    var t = this;
                    if (rd.Event.off("menuUp", this._setCenterUIUp, this), this._oppoAdIsBottom && this.centerUI) {
                        var e = p.getVisibleSize().height, i = this.oppoNativeAd.worldPosition, o = -e / 2 + i.y + this._adHeight + (e - this._getTopOffsetHeight() - this._adHeight - i.y) / 2;
                        1 === this.centerUI.getComponent(h).anchorPoint.y && (o += this.centerUI.getComponent(h).height / 2), 
                        u(this.centerUI).delay(.2).to(.2, {
                            position: d(0, o, 0)
                        }).call(function() {
                            var e = t.oppoNativeAd.worldPosition.clone();
                            e.y = 0, t.oppoNativeAd.setWorldPosition(e.x, -1e3, e.z), t.oppoNativeAd.active = !0, 
                            u(t.oppoNativeAd).to(.15, {
                                worldPosition: e
                            }).start();
                        }).start();
                    } else this.oppoNativeAd.active = rd.Platform.getNativeAdSize();
                }, a._setCenterUIDown = function() {
                    rd.Event.off("menuDown", this._setCenterUIUp, this), this._oppoAdIsBottom && this.centerUI && u(this.centerUI).delay(.1).to(.1, {
                        position: d(0, 0, 0)
                    }).start();
                }, a._onLookOppoAdButton = function() {
                    var t = {
                        curDialog: this.getUIName(),
                        btnType: "查看广告"
                    };
                    v.isNative ? rd.Ads.onNativeClick(null) : this._nativeAdScript ? (this._nativeAdScript.onNativeAdClick(), 
                    rd.Stats.customEvent(B.custom_button_click, t)) : (rd.UI.showTipMessage("暂无广告"), 
                    rd.Stats.customEvent(B.custom_button_click, t, O.onFailed, "暂无广告"));
                }, a.getOpacityComponent = function(t) {
                    return t.getComponent(f) || t.addComponent(f);
                }, a.adaptUIPanel = function(t, e) {
                    (void 0 === e && (e = 54), rd.Utils.isMiniScreen()) && (t.getComponent(m).top -= e);
                }, a.setTTPlatformImage = function(t, e) {
                    rd.Platform.platformType === T.TTMinGame && (t.getComponent(A).spriteFrame = rd.SptFrame.getSpriteFrameByName(e, !0));
                }, a.adaptDisplayNode = function(t, e, i) {
                    var o = !rd.Utils.isMiniScreen();
                    if (i && o || !i && !o) {
                        var n = t.getComponent(m);
                        n && (n.top = e);
                    }
                }, a._getTopOffsetHeight = function() {
                    return rd.Utils.isMiniScreen() ? 125 : 200;
                }, a._playFadeInTween = function() {
                    this._fadeInNode.length > 0 && this._fadeInNode.forEach(function(t) {
                        rd.UI.playFadeInTween(t);
                    });
                }, a._setOppoMoreGameBtn = function(t) {
                    void 0 === t && (t = "moreGame");
                    var e = rd.Utils.registerButtonEvent(this.node, t, function() {
                        rd.Ads.showGamePortalAd();
                    });
                    e.active = rd.Platform.isMoreGameBtn(), v.isNative && (e.getComponent(A).spriteFrame = rd.SptFrame.getSpriteFrameByName("moreGameApp"));
                }, a._setDesktopButton = function(t) {
                    void 0 === t && (t = "desktopBtn"), rd.Utils.registerButtonEvent(this.node, t, function() {
                        rd.Platform.sendData(N.CMD_ADDSHORTCUT, null);
                    }).active = !rd.Platform.HasShortcutInstalled();
                }, a._setShareButton = function(t) {
                    void 0 === t && (t = "shareGameBtn"), rd.Utils.registerButtonEvent(this.node, t, function() {
                        rd.Social.shareVideo(null);
                    }).active = rd.Platform.isShareGameBtn();
                }, a.setCloseButton = function(t, e) {
                    void 0 === e && (e = "closeBtn"), this.closeBtn = rd.Utils.registerButtonEvent(this.node, e, t, this);
                }, a.interactiveLocation = function(t) {
                    var e = t.getComponent(l);
                    e && rd.Option.regionEnable && (e.type === l.Type.HORIZONTAL ? e.horizontalDirection = e.horizontalDirection === l.HorizontalDirection.LEFT_TO_RIGHT ? l.HorizontalDirection.RIGHT_TO_LEFT : l.HorizontalDirection.LEFT_TO_RIGHT : e.type === l.Type.VERTICAL && (e.verticalDirection = e.verticalDirection === l.VerticalDirection.BOTTOM_TO_TOP ? l.VerticalDirection.TOP_TO_BOTTOM : l.VerticalDirection.BOTTOM_TO_TOP));
                }, n(s, [ {
                    key: "zIndex",
                    get: function() {
                        return this._zIndex;
                    },
                    set: function(t) {
                        this._zIndex = t;
                    }
                } ]), s;
            }(I)) || S);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/IntertitalAdTt.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./IntertitalAdBase.ts" ], function(t) {
    "use strict";
    var e, n, r;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy;
        }, function(t) {
            r = t.IntertitalAdBase;
        } ],
        execute: function() {
            n._RF.push({}, "b364fa7PeRDzZ68ymF/z5US", "IntertitalAdTt", void 0);
            t("IntertitalAdTt", function(t) {
                function n(e) {
                    var n;
                    return (n = t.call(this, e) || this)._platName = "tt", n.create(), n;
                }
                return e(n, t), n;
            }(r));
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/JsonManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Dictionary.ts" ], function(t) {
    "use strict";
    var s, n, a, i;
    return {
        setters: [ function(t) {
            s = t.defineProperty;
        }, function(t) {
            n = t.cclegacy, a = t.JsonAsset;
        }, function(t) {
            i = t.Dictionary;
        } ],
        execute: function() {
            n._RF.push({}, "b574fI4ichO4JjBmhYDOj7n", "JsonManager", void 0);
            var e = t("default", function() {
                function t() {
                    s(this, "_josnPathList", [ "res/res_json/stage" ]), s(this, "_staticData", new i());
                }
                t.getInstance = function() {
                    return null == t.singleInstance && (t.singleInstance = new t()), t.singleInstance;
                };
                var n = t.prototype;
                return n.concatJosnPathList = function(t) {
                    for (var s in this._josnPathList) if (this._josnPathList.hasOwnProperty(s)) {
                        var n = {
                            filePath: this._josnPathList[s],
                            type: a,
                            isAutoRelease: !1
                        };
                        t.push(n);
                    }
                }, n.initJsonData = function() {
                    for (var t = 0; t < this._josnPathList.length; t++) {
                        var s = this._josnPathList[t], n = rd.Asset.getAsset(s);
                        this._staticData[s] = n.json, this.dealWithSpecialData(name);
                    }
                }, n.getJsonDataBy = function(t) {
                    if (this._staticData.get(t)) return this._staticData.get(t);
                    var s = rd.Asset.getAsset(t);
                    return this._staticData[t] = s.json, this.dealWithSpecialData(t), this._staticData[t];
                }, n.getJosnPathList = function() {
                    return this._josnPathList;
                }, n.dealWithSpecialData = function(t) {}, t;
            }());
            s(e, "singleInstance", null), n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/GameData.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./SingletonBase.ts" ], function(t) {
    "use strict";
    var e, n, a, o, s, i;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, a = t.assertThisInitialized;
        }, function(t) {
            o = t.cclegacy;
        }, function(t) {
            s = t.Constants;
        }, function(t) {
            i = t.SingletonBase;
        } ],
        execute: function() {
            o._RF.push({}, "b775foZZGtLsYco53Qtyd0l", "GameData", void 0);
            t("GameData", function(t) {
                function o() {
                    for (var e, o = arguments.length, s = new Array(o), i = 0; i < o; i++) s[i] = arguments[i];
                    return e = t.call.apply(t, [ this ].concat(s)) || this, n(a(e), "mainCamera", null), 
                    n(a(e), "mapNode", null), n(a(e), "playerNode", null), n(a(e), "camViewObj", null), 
                    n(a(e), "gameState", 0), n(a(e), "gameMode", 0), n(a(e), "isMoneyStash", !1), n(a(e), "isCanShowAd", !1), 
                    n(a(e), "inBankTimes", 0), e;
                }
                return e(o, t), o.prototype.isInHomePage = function() {
                    return o.getInstance().gameState === s.GAME_STATE.IN_HOME_PAGE;
                }, o;
            }(i));
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/HttpManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./SingletonBase.ts" ], function(t) {
    "use strict";
    var e, r, s, n, a, o, u, i;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, r = t.defineProperty, s = t.assertThisInitialized;
        }, function(t) {
            n = t.cclegacy, a = t.loader, o = t.sys;
        }, function(t) {
            u = t.Log;
        }, function(t) {
            i = t.SingletonBase;
        } ],
        execute: function() {
            n._RF.push({}, "b87ffPg6eRCj7FiiwusZLyw", "HttpManager", void 0);
            var c = function(t) {
                function n() {
                    for (var e, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                    return e = t.call.apply(t, [ this ].concat(a)) || this, r(s(e), "defaultUrl", "http://124.70.160.248:8101/"), 
                    e;
                }
                e(n, t);
                var i = n.prototype;
                return i.get = function(t, e, r, s) {
                    var n = a.getXMLHttpRequest();
                    n.timeout = 5e3;
                    var i = t + e;
                    return r && (i = i + "?" + r), u.debug(this.constructor.name, "url:" + i), n.open("GET", i, !0), 
                    o.isNative && (n.setRequestHeader("Accept", "text/html"), n.setRequestHeader("Accept-Charset", "utf-8"), 
                    n.setRequestHeader("Accept-Encoding", "gzip,deflate")), n.onreadystatechange = function() {
                        if (4 === n.readyState && n.status >= 200 && n.status < 300) {
                            u.debug(this.constructor.name, "http res(" + n.responseText.length + "):" + n.responseText);
                            try {
                                var t = n.responseText;
                                return void (s && s(null, t));
                            } catch (t) {
                                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                s(t, null);
                            }
                        } else s(n.readyState + ":" + n.status, null);
                    }, n.send(), n;
                }, i.post = function(t, e, r, s) {
                    void 0 === e && (e = {});
                    var n = a.getXMLHttpRequest(), o = JSON.stringify(e);
                    t = (s || this.defaultUrl) + t, n.open("POST", t, !0), n.setRequestHeader("Content-Type", "application/json"), 
                    n.onreadystatechange = function() {
                        if (4 === n.readyState) {
                            var t = n.responseText;
                            if (n.status >= 200 && n.status < 300) try {
                                if (0 === (t = JSON.parse(t)).code) return void (r && r(t.data || t));
                                u.debug(this.constructor.name, "返回错误", t.code, t.message);
                            } catch (t) {
                                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                u.debug(this.constructor.name, "请求错误", t);
                            } else u.debug(this.constructor.name, "请求错误", n.status);
                        }
                    };
                    try {
                        n.send(o);
                    } catch (t) {}
                }, i.download = function(t, e, r, s) {
                    var n = a.getXMLHttpRequest();
                    n.timeout = 5e3;
                    var u = t + e;
                    return r && (u = u + "?" + r), n.responseType = "arraybuffer", n.open("GET", u, !0), 
                    o.isNative && (n.setRequestHeader("Accept", "text/html"), n.setRequestHeader("Accept-Charset", "utf-8"), 
                    n.setRequestHeader("Accept-Encoding", "gzip,deflate")), n.onreadystatechange = function() {
                        if (4 === n.readyState && n.status >= 200 && n.status < 300) {
                            for (var t = n.response, e = new DataView(t), r = new Uint8Array(t.byteLength), a = 0; a < r.length; a++) r[a] = e.getUint8(a);
                            s(null, r);
                        } else s(n.readyState + ":" + n.status, null);
                    }, n.send(), n;
                }, i.request = function(t, e, r) {
                    return new Promise(function(s, n) {
                        var a = new XMLHttpRequest();
                        if (console.log("http request init"), a.timeout = 5e3, a.open(r, t, !0), a.withCredentials = !0, 
                        a.ontimeout = function(t) {
                            console.log("request error:" + JSON.stringify(t)), n(Error("Network Error"));
                        }, a.onerror = function() {
                            n(Error("Network Error"));
                        }, a.onreadystatechange = function() {
                            console.log("request readyState=" + a.readyState + ";status=" + a.status);
                            var t = a.responseText;
                            if (4 === a.readyState) if (a.status >= 200 && a.status < 300 || 304 == a.status) {
                                var e = {};
                                try {
                                    e = JSON.parse(t), s(e);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    console.log("request json parse error:" + t), n(Error(a.statusText));
                                }
                            } else n(Error(a.statusText));
                        }, "POST" === r) {
                            a.setRequestHeader("Content-Type", "application/json");
                            try {
                                void 0 === e && (e = null), a.send(e);
                            } catch (t) {
                                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                console.log("request error:" + JSON.stringify(t)), n(Error("Network Error"));
                            }
                        } else a.send();
                    });
                }, i.loadUrl = function(t, e) {
                    var r = new XMLHttpRequest();
                    r.responseType = "text", r.onreadystatechange = function() {
                        console.log("loadUrl request readyState=" + r.readyState + ";status=" + r.status), 
                        4 === r.readyState && (console.log("=========onreadystatechange", r.status), r.status >= 200 && r.status < 300 || 304 == r.status ? e(r.response) : e(null));
                    }, r.open("GET", t, !0), r.send();
                }, n;
            }(i);
            void 0 === window.rd && (window.rd = {});
            var l = t("default", c.getInstance());
            window.rd.Http = l, n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDPlatformManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./RDCommand.ts", "./RDPlatformParam.ts", "./RDPlatformType.ts", "./RDOppoMiniPlatform.ts", "./RDIOSPlatform.ts", "./RDKGPlatform.ts", "./RDHuaWeiMiniPlatform.ts", "./RDVIVOMiniPlatform.ts", "./RDCoralPlatform.ts", "./RDPCPlatform.ts", "./RDTencentGDTPlatform.ts", "./RDXMMiniPlatform.ts", "./RDWeiXinMiniPlatform.ts", "./RDTTMiniPlatform.ts", "./RDAndroidPlatform.ts", "./RD4399Platform.ts" ], function(t) {
    "use strict";
    var e, a, n, i, r, o, s, f, d, l, m, c, u, h, P, k, D, p, I, _, A, R;
    return {
        setters: [ function(t) {
            e = t.defineProperty, a = t.createClass;
        }, function(t) {
            n = t.cclegacy, i = t.sys;
        }, function(t) {
            r = t.Log;
        }, function(t) {
            o = t.ConstantCommon;
        }, function(t) {
            s = t.RDCommand;
        }, function(t) {
            f = t.RDPlatformParam;
        }, function(t) {
            d = t.RDPlatformType;
        }, function(t) {
            l = t.RDOppoMiniPlatform;
        }, function(t) {
            m = t.RDIOSPlatform;
        }, function(t) {
            c = t.RDKGPlatform;
        }, function(t) {
            u = t.RDHuaWeiMiniPlatform;
        }, function(t) {
            h = t.RDVIVOMiniPlatform;
        }, function(t) {
            P = t.RDCoralPlatform;
        }, function(t) {
            k = t.RDPCPlatform;
        }, function(t) {
            D = t.RDTencentGDTPlatform;
        }, function(t) {
            p = t.RDXMMiniPlatform;
        }, function(t) {
            I = t.RDWeiXinMiniPlatform;
        }, function(t) {
            _ = t.RDTTMiniPlatform;
        }, function(t) {
            A = t.RDAndroidPlatform;
        }, function(t) {
            R = t.RD4399Platform;
        } ],
        execute: function() {
            n._RF.push({}, "b9a3agNhlVOkJRCKmqq3CAE", "RDPlatformManager", void 0);
            var g = function() {
                function t() {
                    e(this, "_type", d.None), e(this, "rdPlatform", null);
                }
                t.getInstance = function() {
                    return this._instance;
                };
                var n = t.prototype;
                return n.getPlatformName = function() {
                    var t = "";
                    switch (this._type) {
                      case d.None:
                        t = "PC";
                        break;

                      case d.WeixinMinGame:
                        t = "WeChatMiniGame";
                        break;

                      case d.TTMinGame:
                        t = "byteDance";
                        break;

                      case d.VIVOGame:
                        t = "VIVO";
                        break;

                      case d.OPPOGame:
                        t = "OPPO";
                        break;

                      case d.OPPOMusicGame:
                        t = "OPPOMusicGame";
                        break;

                      case d.CoralGame:
                        t = "CoralGame";
                        break;

                      case d.Ios:
                        t = "IOS";
                        break;

                      case d.XMGame:
                        t = "XM";
                        break;

                      case d.Android:
                        t = "android";
                        break;

                      case d.KG:
                        t = "kG";
                        break;

                      case d.Game4399:
                        t = "4399";
                        break;

                      case d.HUAWEI:
                        t = "HUAWEI";
                        break;

                      default:
                        t = "undefined";
                    }
                    return t;
                }, n.getSdkConfig = function(t) {
                    var e = this.getPlatformName();
                    return "android" === e ? t[e][this.getAndroidPlatName()] : t[e];
                }, n.getPlatformAreaCode = function() {
                    return "version=" + this.getVersionName() + "&platid=" + this.getPlatId();
                }, n.initPlatfom = function(t) {
                    switch (void 0 === t && (t = void 0), void 0 === t && (t = i.platform === i.Platform.BYTEDANCE_MINI_GAME ? d.TTMinGame : i.platform === i.Platform.WECHAT_GAME ? d.WeixinMinGame : i.platform === i.Platform.OPPO_MINI_GAME ? d.OPPOGame : i.platform === i.Platform.VIVO_MINI_GAME ? d.VIVOGame : i.platform === i.Platform.XIAOMI_QUICK_GAME ? d.XMGame : i.platform === i.Platform.HUAWEI_QUICK_GAME ? d.HUAWEI : i.platform === i.Platform.ANDROID ? d.Android : i.platform === i.Platform.IOS ? d.Ios : d.None), 
                    this._type = t, console.log("初始平台=" + this.getPlatformName()), this._type) {
                      case d.None:
                        this.rdPlatform = new k(this._type);
                        break;

                      case d.WeixinMinGame:
                        this.rdPlatform = new I(this._type);
                        break;

                      case d.TTMinGame:
                        this.rdPlatform = new _(this._type);
                        break;

                      case d.VIVOGame:
                        this.rdPlatform = new h(this._type);
                        break;

                      case d.OPPOGame:
                        this.rdPlatform = new l(this._type);
                        break;

                      case d.TencentGTD7377:
                        this.rdPlatform = new D(this._type);
                        break;

                      case d.CoralGame:
                        this.rdPlatform = new P(this._type);
                        break;

                      case d.Android:
                        this.rdPlatform = new A(this._type);
                        break;

                      case d.Ios:
                        this.rdPlatform = new m(this._type);
                        break;

                      case d.KG:
                        this.rdPlatform = new c(this._type);
                        break;

                      case d.XMGame:
                        this.rdPlatform = new p(this._type);
                        break;

                      case d.Game4399:
                        this.rdPlatform = new R(this._type);
                        break;

                      case d.HUAWEI:
                        this.rdPlatform = new u(this._type);
                        break;

                      case d.Facebook:
                      case d.Web:
                        break;

                      default:
                        this.rdPlatform = new k(this._type);
                    }
                }, n.init = function(t) {
                    this.sdk && this.sdk.init(t);
                }, n.sendData = function(t, e) {
                    var a;
                    null === (a = this.sdk) || void 0 === a || a.sendData(t, e);
                }, n.loadStorageData = function(t, e, a) {
                    this.sdk && this.sdk.loadStorageData(t, e, a);
                }, n.flushStorageData = function(t, e) {
                    this.sdk.flushStorageData(t, e);
                }, n.LoadSubpackageTask = function(t, e, a) {
                    this.sdk.LoadSubpackageTask(t, e, a);
                }, n.HasShortcutInstalled = function() {
                    return this.sdk.HasShortcutInstalled();
                }, n.doubleAdClicks = function(t) {
                    this.sdk.doubleAdClicks(t);
                }, n.bannerIsShow = function() {
                    return this.sdk.bannerAdIsShow(null);
                }, n.sendVideoReward = function(t) {
                    this.sdk.sendVideoReward(t);
                }, n.showAgeDialog = function() {
                    this.sendData(s.CMD_SDK_AGE, null);
                }, n.saveScrore = function(t) {
                    this.sdk.setScore(t);
                }, n.exitGame = function() {
                    this.sdk.exitGame();
                }, n.isShowNativeAd = function(t) {
                    var e;
                    return void 0 === t && (t = !1), null === (e = this.sdk) || void 0 === e ? void 0 : e.isShowNativeAd(t);
                }, n.isBtnFadeIn = function(t) {
                    return void 0 === t && (t = !0), this.sdk.isBtnFadeIn(t);
                }, n.isMoreGameBtn = function() {
                    return this.sdk.isMoreGameBtn();
                }, n.isShareGameBtn = function() {
                    return this.sdk.isShareGameBtn();
                }, n.isShowPrivacy = function() {
                    return this.sdk.isShowPrivacy();
                }, n.isShowContact = function() {
                    return this.sdk.isShowContact();
                }, n.isShowNativeSplash = function() {
                    return this.sdk.isShowNativeSplash();
                }, n.getNativeAdSize = function() {
                    return this.sdk.natvieAds();
                }, n.isReviewed = function() {
                    return this.sdk.isReviewed();
                }, n.canBaking = function() {
                    return this.sdk.canBaking();
                }, n.addCloseAdd = function() {
                    this.sdk.addCloseAd();
                }, n.updateUserInf = function(t) {
                    this.sdk.updateUserInf(t);
                }, n.getAndroidPlatName = function() {
                    return this.sdk.getAndroidPlatName();
                }, n.getVersionName = function() {
                    return this.sdk.getVersionName();
                }, n.getPlatId = function() {
                    return this.sdk.getPlatId();
                }, n.getSystemInfo = function() {
                    return this.sdk.getSystemInfo();
                }, n.getNativeIdByIndex = function(t) {
                    return f.ADPARAM[this.platformType].native_id ? f.ADPARAM[this.platformType].native_id[t] : null;
                }, n.nativeCallBack = function(t) {
                    r.debug(this.constructor.name, "native回调数据" + JSON.stringify(t)), t.type === s.CMD_SHOW_REWARD_VIDEO_AD.toString() ? rd.Platform.sendVideoReward(t.result) : t.type === s.CMD_SHOW_INTERSTITIAL_VIDEO_AD.toString() ? rd.Event.emit(o.EVENT_TYPE.ADS_INTERSTITIALAD, t.result) : t.type === s.CMD_CREATE_NATIVE_AD.toString() ? rd.Event.emit("success" === t.result ? "menuUp" : "menuDown") : t.type === s.CMD_SDK_LOGIN.toString() && rd.Platform.updateUserInf(t.result);
                }, a(t, [ {
                    key: "platformType",
                    get: function() {
                        return this._type;
                    }
                }, {
                    key: "HeyGameParam",
                    get: function() {
                        return this.sdk.HeyGameParam;
                    }
                }, {
                    key: "sdk",
                    get: function() {
                        return this.rdPlatform;
                    }
                } ]), t;
            }();
            e(g, "_instance", new g()), void 0 === window.rd && (window.rd = {});
            var M = t("default", g.getInstance());
            window.rd.Platform = M, window.callNative = rd.Platform, n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RocketMgr.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts" ], function(t) {
    "use strict";
    var e, o, r, n, i, c, s, a, l;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, o = t.defineProperty, r = t.assertThisInitialized;
        }, function(t) {
            n = t.cclegacy, i = t._decorator, c = t.instantiate, s = t.Component;
        }, function(t) {
            a = t.Constants;
        }, function(t) {
            l = t.ConstantCommon;
        } ],
        execute: function() {
            var _;
            n._RF.push({}, "bc7faz0Nm9FB6KJeFdgXuM5", "RocketMgr", void 0);
            var d = i.ccclass;
            t("RocketMgr", d("RocketMgr")(_ = function(t) {
                function n() {
                    for (var e, n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, o(r(e), "_rocketCtrlNode", null), 
                    o(r(e), "_rocketPivot", null), o(r(e), "_rocketNode", null), e;
                }
                e(n, t);
                var i = n.prototype;
                return i.start = function() {
                    this._rocketCtrlNode = this.node.getChildByName("rocketCtrl"), this._rocketPivot = this._rocketCtrlNode.getChildByName("pivot"), 
                    this._loadRocket(!0), this._registerEvent(!0);
                }, i._loadRocket = function(t) {
                    var e = this;
                    void 0 === t && (t = !1);
                    var o = g.App.RocketData.level;
                    this._rocketCtrlNode.active = o > 0, this._rocketCtrlNode.active && rd.Asset.loadPrefab("warCar/rocket/rocketLv" + o, l.BUNDLE_NAME.PREFAB).then(function(o) {
                        var r;
                        null === (r = e._rocketNode) || void 0 === r || r.destroy(), e._rocketNode = c(o), 
                        e._rocketPivot.addChild(e._rocketNode), !t && rd.Event.emit(a.EVENT_TYPE.PLAY_UPGRADE_ANIM);
                    });
                }, i._registerEvent = function(t) {
                    var e = t ? "on" : "off";
                    rd.Event[e](a.EVENT_TYPE.UPDATE_ROCKET_POS, this._updateRocketPos, this), rd.Event[e](a.EVENT_TYPE.UPGRADE_ROCKET_LV, this._loadRocket, this);
                }, i._updateRocketPos = function(t) {
                    this._rocketCtrlNode.setPosition(t.position);
                }, i.onDestroy = function() {
                    this._registerEvent(!1);
                }, n;
            }(s)) || _);
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RectBounds.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var i, e, n;
    return {
        setters: [ function(t) {
            i = t.createClass, e = t.defineProperty;
        }, function(t) {
            n = t.cclegacy;
        } ],
        execute: function() {
            n._RF.push({}, "bd347fbtKBHyq5FPesWuksW", "RectBounds", void 0);
            t("RectBounds", function() {
                function t(t, i, n, s) {
                    void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), 
                    e(this, "_centerX", 0), e(this, "_centerZ", 0), e(this, "_widthX", 0), e(this, "_widthZ", 0), 
                    e(this, "_minX", 0), e(this, "_maxX", 0), e(this, "_minZ", 0), e(this, "_maxZ", 0), 
                    e(this, "_halfWidX", 0), e(this, "_halfWidZ", 0), this.init(t, i, n, s);
                }
                var n = t.prototype;
                return n.init = function(t, i, e, n) {
                    this._centerX = t, this._centerZ = i, this._widthX = e, this._widthZ = n, this._halfWidX = .5 * this._widthX, 
                    this._halfWidZ = .5 * this._widthZ, this._setRectBounds();
                }, n.updatePos = function(t, i) {
                    this._centerX = t, this._centerZ = i, this._setRectBounds();
                }, n._setRectBounds = function() {
                    this._minX = this._centerX - this._halfWidX, this._maxX = this._centerX + this._halfWidX, 
                    this._minZ = this._centerZ - this._halfWidZ, this._maxZ = this._centerZ + this._halfWidZ;
                }, i(t, [ {
                    key: "centerX",
                    get: function() {
                        return this._centerX;
                    }
                }, {
                    key: "centerZ",
                    get: function() {
                        return this._centerZ;
                    }
                }, {
                    key: "widthX",
                    get: function() {
                        return this._widthX;
                    }
                }, {
                    key: "widthZ",
                    get: function() {
                        return this._widthZ;
                    }
                }, {
                    key: "minX",
                    get: function() {
                        return this._minX;
                    }
                }, {
                    key: "maxX",
                    get: function() {
                        return this._maxX;
                    }
                }, {
                    key: "minZ",
                    get: function() {
                        return this._minZ;
                    }
                }, {
                    key: "maxZ",
                    get: function() {
                        return this._maxZ;
                    }
                }, {
                    key: "halfWidX",
                    get: function() {
                        return this._halfWidX;
                    }
                }, {
                    key: "halfWidZ",
                    get: function() {
                        return this._halfWidZ;
                    }
                } ]), t;
            }());
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDCommand.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(_) {
    "use strict";
    var D, S;
    return {
        setters: [ function(_) {
            D = _.defineProperty;
        }, function(_) {
            S = _.cclegacy;
        } ],
        execute: function() {
            S._RF.push({}, "bd917/8pFhLlKHEZFb2hlpe", "RDCommand", void 0);
            var C = _("RDCommand", function() {});
            D(C, "CMD_SHOW_REWARD_VIDEO_AD", 10001), D(C, "CMD_SHOW_INTERSTITIAL_VIDEO_AD", 10002), 
            D(C, "CMD_SHOW_STARTSCENE", 10020), D(C, "CMD_SHOW_BANNER_AD", 10003), D(C, "CMD_HIDE_BANNER_AD", 10102), 
            D(C, "CMD_SHAKE", 10004), D(C, "CMD_TOAST", 10005), D(C, "CMD_TO_MINIPROGRAM", 10009), 
            D(C, "CMD_SHAREVIDEO", 10006), D(C, "CMD_RECORDVIDEO", 10007), D(C, "CMD_STOPRECORDVIDEO", 10008), 
            D(C, "CMD_DATA_STATISTICS", 10010), D(C, "CMD_CREATE_NATIVE_AD", 10011), D(C, "CMD_ClICK_NATIVE_AD", 10012), 
            D(C, "CMD_DESTROY_NATIVE_AD", 10013), D(C, "CMD_DESTROY_BANNERISSHOW", 10014), D(C, "CMD_ADDSHORTCUT", 10015), 
            D(C, "CMD_SHOW_BANNER_OFFICE_AD", 10016), D(C, "CMD_HIDE_BANNER_OFFICE_AD", 10017), 
            D(C, "CMD_SHOW_OFFICE_PORTAL_AD", 10018), D(C, "CMD_HIDE_OFFICE_PORTAL_AD", 10019), 
            D(C, "CMD_GAME_START_EVENT", 10020), D(C, "CMD_GAME_END_EVENT", 10021), D(C, "CMD_GAME_FINISH_VIDEO", 10022), 
            D(C, "CMD_SHOW_CUSTOMAD_ICON_AD", 10023), D(C, "CMD_SHOW_CUSTOMAD_HOT_AD", 10024), 
            D(C, "CMD_SHOW_CUSTOMAD_BANNER_AD", 10025), D(C, "CMD_SHOW_CUSTOMAD_VBANNER_AD", 10026), 
            D(C, "CMD_SHOW_CUSTOMAD_SCENE_AD", 10027), D(C, "RESPONSE_CMD_SHOW_REWARD_VIDEO_AD", 20001), 
            D(C, "CMD_SHARE", 30001), D(C, "CMD_GET_RANK", 30002), D(C, "CMD_FINISH_CHALLENGE", 30003), 
            D(C, "FIELD_RESULT", "result"), D(C, "RESULT_FAIL", 0), D(C, "RESULT_OK", 1), D(C, "CMD_SDK_INIT", 1e4), 
            D(C, "CMD_SDK_LOGIN", 60001), D(C, "CMD_SDK_LOGOUT", 60002), D(C, "CMD_SDK_SYSDATA", 60003), 
            D(C, "CMD_SDK_EXIT", 60004), D(C, "CMD_SDK_PAY", 60005), D(C, "CMD_SDK_PRIVACY_POLICY", 60006), 
            D(C, "CMD_SDK_AGE", 60007), D(C, "CMD_DATA_TKIOS_STATISTICS", 7e4), D(C, "STATISTICS_LOGIN", "loading"), 
            D(C, "STATISTICS_CLICK_VIDEO", "video_click"), D(C, "STATISTICS_COMPLETE_VIDEO", "watch"), 
            D(C, "STATISTICS_FAIL_VIDEO", "video_error"), D(C, "STATISTICS_SHARE", "share"), 
            D(C, "STATISTICS_SHOW_BANNER", "banner_exposure"), D(C, "STATISTICS_CLICK_BANNER", "banner"), 
            D(C, "STATISTICS_GAME_ICON_SHARE", "icon_click"), D(C, "STATISTICS_SHOW_SCREEN", "screen_exposure"), 
            S._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/AssetsPackageDefine.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(e) {
    "use strict";
    var t, s;
    return {
        setters: [ function(e) {
            t = e.defineProperty;
        }, function(e) {
            s = e.cclegacy;
        } ],
        execute: function() {
            s._RF.push({}, "be23eK/6YVOQIGkwucxNmNn", "AssetsPackageDefine", void 0);
            var n = e("default", function() {});
            t(n, "TOAST_MESSAGE_LAYER", "totas_message_layer"), t(n, "INIT_RES", "init_res"), 
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ADScreen.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./RDCommand.ts", "./ADMainPush.ts" ], function(t) {
    "use strict";
    var n, e, i, o, s, h, a, c, r, l, d, u, m, C, g, p;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, e = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            o = t.cclegacy, s = t._decorator, h = t.ButtonComponent, a = t.UITransformComponent, 
            c = t.v3, r = t.view, l = t.LayoutComponent, d = t.Size, u = t.instantiate, m = t.Component;
        }, function(t) {
            C = t.ConstantCommon;
        }, function(t) {
            g = t.RDCommand;
        }, function(t) {
            p = t.ADMainPush;
        } ],
        execute: function() {
            var f;
            o._RF.push({}, "c25dbCeIARLW66KiCNeLxMK", "ADScreen", void 0);
            var b = s.ccclass;
            s.property, t("ADScreen", b("ADScreen")(f = function(t) {
                function o() {
                    for (var n, o = arguments.length, s = new Array(o), h = 0; h < o; h++) s[h] = arguments[h];
                    return n = t.call.apply(t, [ this ].concat(s)) || this, e(i(n), "continueBtn", null), 
                    e(i(n), "randBtn", null), e(i(n), "topBtn", null), e(i(n), "bottomContent", null), 
                    e(i(n), "_move", [ 1, 1 ]), e(i(n), "count", 1), e(i(n), "topCont", 0), e(i(n), "dataList", []), 
                    e(i(n), "isBanner", !1), e(i(n), "isPYX", !1), e(i(n), "callback", null), e(i(n), "adMainPrefabs", null), 
                    e(i(n), "scrollView", null), n;
                }
                n(o, t);
                var s = o.prototype;
                return s.onLoad = function() {
                    this.continueBtn = this.node.getChildByName("contionBtn").getComponent(h), this.continueBtn.node.on("click", this.onContinueGame, this), 
                    this.randBtn = rd.Utils.getNodeByName(this.node, "randBtn").getComponent(h), this.randBtn.node.on("click", this.onRandGame, this), 
                    this.scrollView = rd.Utils.getNodeByName(this.node, "ScrollView");
                }, s.onEnable = function() {
                    this.isBanner = rd.Platform.bannerIsShow(), this.isBanner && rd.Ads.hideBannerAd(), 
                    this.continueBtn.node.active = !0, this.scheduleOnce(function() {
                        rd.Ads.showBannerAd();
                    }, 1), this.scheduleOnce(function() {
                        rd.Ads.hideBannerAd();
                    }, 3), this.topBtn = rd.Utils.getNodeByName(this.node, "contentTop"), this.bottomContent = rd.Utils.getNodeByName(this.node, "content"), 
                    this.scheduleOnce(function() {
                        this.initTop();
                    }, .01), this.scheduleOnce(function() {
                        this.isPYX = rd.PushCtrl.showJPYXBtn(!1), rd.PushCtrl.showMainPush(!1);
                    }, .5), this.schedule(this.scrolling, 1 / 60, 1e6, 1);
                }, s.onDisable = function() {
                    rd.PushCtrl.showJPYXBtn(this.isPYX), rd.PushCtrl.showMainPush(!0), this.unschedule(this.scrolling);
                }, s.scrolling = function() {
                    1 === this._move[0] && this.bottomContent.getPosition().y >= this.bottomContent.getComponent(a).contentSize.height - this.scrollView.getComponent(a).contentSize.height / 2 && (this._move[0] = -1), 
                    -1 === this._move[0] && this.bottomContent.getPosition().y <= this.scrollView.getComponent(a).contentSize.height / 2 && (this._move[0] = 1), 
                    this.bottomContent.setPosition(c(this.bottomContent.getPosition().x, this.bottomContent.getPosition().y + this._move[0], 0));
                }, s.setCloseCallback = function(t) {
                    this.callback = t;
                }, s.initTop = function() {
                    this.count = 0, this.topBtn.getComponent(a).setContentSize(r.getVisibleSize().width, this.topBtn.getComponent(a).contentSize.height), 
                    this.topCont = Math.min(Math.floor((r.getVisibleSize().width - 40) / 108), this.dataList.length), 
                    this.topBtn.getComponent(l).spacingX = (r.getVisibleSize().width - 40 - 98 * this.topCont) / (this.topCont - 1), 
                    this.createItem(this.topBtn, 1);
                }, s.initBottomView = function() {
                    this.count = 0;
                    this.dataList.length;
                    var t = (r.getVisibleSize().width - 20 - 100) / 2 / 98;
                    this.createItem(this.bottomContent, t), this.bottomContent.getComponent(l).spacingX = 20, 
                    this.bottomContent.getComponent(l).paddingLeft = 50, this.bottomContent.getComponent(l).paddingRight = 50, 
                    this.bottomContent.getComponent(a).setContentSize(new d(r.getVisibleSize().width, (119 * t + 30) * Math.ceil(this.dataList.length / 2) + 10));
                }, s.createItem = function(t, n) {
                    var e = this;
                    if ("contentTop" === t.name) {
                        if (this.count >= this.topCont) return void this.initBottomView();
                    } else if (this.count >= this.dataList.length) return;
                    var i = t.children[this.count], o = this.dataList[this.count];
                    if (i) {
                        var s = i.getComponent(p);
                        s.freash(o), s.setScale(n), this.count += 1, this.scheduleOnce(function() {
                            e.createItem(t, n);
                        }, 0);
                    } else this.adMainPrefabs ? this.createAdMain(t, n, o, this.adMainPrefabs) : rd.Asset.loadPrefab("adUI/ADMainPush", C.BUNDLE_NAME.ATOM).then(function(i) {
                        e.adMainPrefabs = i, e.createAdMain(t, n, o, e.adMainPrefabs);
                    });
                }, s.createAdMain = function(t, n, e, i) {
                    var o = u(i);
                    t.addChild(o);
                    var s = o.getComponent(p);
                    s.freash(e), s.setScale(n), this.count += 1, this.createItem(t, n);
                }, s.onContinueGame = function() {
                    this.node.active = !1, this.callback && this.callback();
                }, s.onRandGame = function() {
                    var t = Math.floor(Math.random() * (this.dataList.length - 0 + 1)) + 0, n = this.dataList[t];
                    n && rd.Platform.sendData(g.CMD_TO_MINIPROGRAM, n);
                }, o;
            }(m)) || f);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RD4399Platform.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./RDPlatform.ts" ], function(t) {
    "use strict";
    var e, i, n, a, r, o;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, i = t.defineProperty, n = t.assertThisInitialized;
        }, function(t) {
            a = t.cclegacy;
        }, function(t) {
            r = t.Log;
        }, function(t) {
            o = t.RDPlatform;
        } ],
        execute: function() {
            a._RF.push({}, "c3699HtiQJELam+dkohGaEw", "RD4399Platform", void 0);
            t("RD4399Platform", function(t) {
                function a(e) {
                    var a;
                    return a = t.call(this, e) || this, i(n(a), "vibrateInterval", null), a;
                }
                e(a, t);
                var o = a.prototype;
                return o.initAD = function() {
                    var t, e, i, n = this;
                    this._hasShortcutInstalled = !0, t = document, e = t.getElementsByTagName("head")[0], 
                    (i = t.createElement("script")).async = !0, i.src = "//h.api.4399.com/h5mini-2.0/h5api-interface.php", 
                    e && e.insertBefore(i, e.firstChild), setTimeout(function() {
                        n._login(null);
                    }, 1);
                }, o._vibrateShort = function(t) {
                    void 0 === t && (t = 50), 100 != t ? this.startVibrate(t) : this.startPeristentVibrate(100, .01);
                }, o.startVibrate = function(t) {
                    navigator.vibrate(t);
                }, o.stopVibrate = function() {
                    this.vibrateInterval && clearInterval(this.vibrateInterval), navigator.vibrate(0);
                }, o.startPeristentVibrate = function(t, e) {
                    this.vibrateInterval = setInterval(function() {
                        this.startVibrate(t);
                    }, e);
                }, o._showBannerAd = function(t) {
                    this.isReviewed() && r.debug(this.constructor.name, "审核中=====");
                }, o._showVideo = function(t) {
                    var e = this;
                    if (this.isReviewed()) this._rewardCaback.success(null); else {
                        var i = function(t) {
                            r.debug(e.constructor.name, "代码:" + t.code + ",消息:" + t.message), 1e4 === t.code ? r.debug(e.constructor.name, "开始播放") : 10001 === t.code ? (r.debug(e.constructor.name, "播放结束"), 
                            e._rewardCaback.success(null)) : (r.debug(e.constructor.name, "广告异常"), e._rewardCaback.fail());
                        };
                        r.debug(this.constructor.name, "调用4399激励视频广告"), window.h5api.canPlayAd(function(t) {
                            r.debug(e.constructor.name, "是否可播放广告", t.canPlayAd, "剩余次数", t.remain), !t.canPlayAd || t.remain <= 0 ? (rd.UI.showTipMessage("今日广告次数已用完，明日继续"), 
                            e._rewardCaback.fail()) : window.h5api.playAd(i);
                        });
                    }
                }, o._login = function(t) {
                    window.h5api && window.h5api.login && window.h5api.login(function(t) {
                        var e = window.h5api.getUserAvatar(t.uId), i = t.userName + "|" + e;
                        console.log("登录成功" + i + JSON.stringify(t)), this.updateUserInf(i);
                    });
                }, o._showIntertitalAd = function(t) {
                    this.isReviewed();
                }, a;
            }(o));
            a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/error.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var r, e, o, i;
    return {
        setters: [ function(t) {
            r = t.inheritsLoose, e = t.assertThisInitialized, o = t.wrapNativeSuper;
        }, function(t) {
            i = t.cclegacy;
        } ],
        execute: function() {
            i._RF.push({}, "c3e54NPlPtB2Lg45ymKU20k", "error", void 0);
            t("OutdatedBenchmarksError", function(t) {
                function o(r) {
                    var i;
                    return i = t.call(this, r) || this, Object.setPrototypeOf(e(i), (this instanceof o ? this.constructor : void 0).prototype), 
                    i;
                }
                return r(o, t), o;
            }(o(Error)));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/CommonUI.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./UIGBase.ts", "./MoneyFly.ts" ], function(t) {
    "use strict";
    var e, n, o, s, i, r, a, l, _, c, y, h;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, o = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy, i = t._decorator, r = t.v3, a = t.ProgressBar, l = t.Label, _ = t.tween;
        }, function(t) {
            c = t.Constants;
        }, function(t) {
            y = t.UIGBase;
        }, function(t) {
            h = t.MoneyFly;
        } ],
        execute: function() {
            var p;
            s._RF.push({}, "c44fdptGVRKoqK5MMQQ7KiC", "CommonUI", void 0);
            var d = i.ccclass, m = r(1.2, 1.2, 1), u = r(1, 1, 1);
            t("CommonUI", d("CommonUI")(p = function(t) {
                function s() {
                    for (var e, s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, n(o(e), "_stageProgress", null), 
                    n(o(e), "_percentLbl", null), n(o(e), "_moneyImg", null), n(o(e), "_moneyLbl", null), 
                    n(o(e), "_moneyFlyComp", null), e;
                }
                e(s, t);
                var i = s.prototype;
                return i.onLoad = function() {
                    var t = this.node.getChildByName("top");
                    this._stageProgress = rd.Utils.getNodeComponent(t, "stageProgress", a), this._percentLbl = rd.Utils.getNodeComponent(this._stageProgress.node, "percentLbl", l);
                    var e = t.getChildByName("moneyPanel");
                    this._moneyImg = rd.Utils.getNodeByName(e, "money"), this._moneyLbl = rd.Utils.getNodeComponent(e, "moneyLbl", l), 
                    rd.Utils.registerButtonEvent(e, "addBtn", this._onAddMoneyButton, this), this.adaptUIPanel(t), 
                    this._moneyFlyComp = this.node.getChildByName("moneyFly").getComponent(h), this._moneyFlyComp.createMoney(), 
                    this.zIndex = c.UI_DIALOG_Z_INDEX.COMMON;
                }, i.show = function() {
                    this._initData(), this._updateMoney(), this._registerEvent(!0);
                }, i.hide = function() {
                    this._registerEvent(!1);
                }, i._initData = function() {
                    this._stageProgress.progress = 0, this._percentLbl.string = "0%";
                }, i._updateMoney = function() {
                    this._moneyLbl.string = g.App.Account.gameMoney.toString();
                }, i._registerEvent = function(t) {
                    var e = t ? "on" : "off";
                    rd.Event[e](c.EVENT_TYPE.UPDATE_SCORE, this._updateStagePercent, this), rd.Event[e](c.EVENT_TYPE.UPDATE_MOENY, this._updateMoney, this), 
                    rd.Event[e](c.EVENT_TYPE.MONEY_FLY_ANIM, this._playMoneyFlyAnim, this), rd.Event[e](c.EVENT_TYPE.MONEY_SCALE_ANIM, this._playMoneyScaleAnim, this), 
                    rd.Event[e](c.EVENT_TYPE.CLEAR_GAME_DATA, this._initData, this);
                }, i._updateStagePercent = function() {
                    var t = g.App.GameScore.killZombieCnt / g.App.GameScore.totalZombieCnt;
                    if (t > this._stageProgress.progress) {
                        this._stageProgress.progress = t;
                        var e = Math.floor(100 * t);
                        e > parseInt(this._percentLbl.string.slice(0, -1)) && (this._percentLbl.string = e + "%");
                    }
                }, i._onAddMoneyButton = function() {
                    rd.UI.showDialog(c.UI_DIALOG_NAME.MONEY, "主界面");
                }, i._playMoneyFlyAnim = function(t, e) {
                    void 0 === t && (t = 0), void 0 === e && (e = !1), this._moneyFlyComp.node.active = !0, 
                    this._moneyFlyComp.playAnimation(this.node, this._moneyImg, e), g.App.Account.setMoneyNoEvent(g.App.Account.gameMoney + t), 
                    rd.Audio.playSound(c.AUDIO_SOURCE_TYPE.COLLECTION1);
                }, i._playMoneyScaleAnim = function() {
                    _(this._moneyImg).to(.1, {
                        scale: m
                    }).to(.1, {
                        scale: u
                    }).union().repeat(3).start(), this.scheduleOnce(this._updateMoney, .2), rd.Audio.playSound(c.AUDIO_SOURCE_TYPE.COLLECTION2);
                }, s;
            }(y)) || p);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDAudioManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./SingletonBase.ts", "./RDPlatformType.ts", "./RDAudioCocos.ts", "./RDAudioVivo.ts", "./RDAudioAndroid.ts", "./RDAudioWechat.ts" ], function(i) {
    "use strict";
    var t, e, u, o, n, s, r, d, c, a, l, h, A;
    return {
        setters: [ function(i) {
            t = i.inheritsLoose, e = i.defineProperty, u = i.assertThisInitialized;
        }, function(i) {
            o = i.cclegacy, n = i.Node, s = i.director, r = i.game;
        }, function(i) {
            d = i.SingletonBase;
        }, function(i) {
            c = i.RDPlatformType;
        }, function(i) {
            a = i.RDAudioCocos;
        }, function(i) {
            l = i.RDAudioVivo;
        }, function(i) {
            h = i.RDAudioAndroid;
        }, function(i) {
            A = i.RDAudioWechat;
        } ],
        execute: function() {
            o._RF.push({}, "c4821l6tFBIzp4YqlEe/RFh", "RDAudioManager", void 0);
            var f = function(i) {
                function o() {
                    for (var t, o = arguments.length, n = new Array(o), s = 0; s < o; s++) n[s] = arguments[s];
                    return t = i.call.apply(i, [ this ].concat(n)) || this, e(u(t), "_currentAudio", void 0), 
                    e(u(t), "_audioPersistNode", null), t;
                }
                t(o, i);
                var d = o.prototype;
                return d.init = function(i, t) {
                    switch (void 0 === t && (t = !1), this._audioPersistNode = new n("audioPersistNode"), 
                    s.getScene().addChild(this._audioPersistNode), r.addPersistRootNode(this._audioPersistNode), 
                    i) {
                      case c.WeixinMinGame:
                        this._currentAudio = t ? new a(i, this._audioPersistNode) : new A(i, this._audioPersistNode);
                        break;

                      case c.VIVOGame:
                        this._currentAudio = t ? new a(i, this._audioPersistNode) : new l(i, this._audioPersistNode);
                        break;

                      case c.Android:
                        this._currentAudio = new h(i, this._audioPersistNode);

                      default:
                        this._currentAudio = new a(i, this._audioPersistNode);
                    }
                }, d.playMusicByUrl = function(i, t, e, u, o, n, s) {
                    if (void 0 === e && (e = !0), void 0 === u && (u = 1), void 0 === o && (o = 0), 
                    !rd.Ads._isShowVideoing) return u *= rd.GameDataModel.musicVolume, this._currentAudio.playMusicByUrl(i, e, u, o, n, s, t);
                }, d.loadMusicClipByUrl = function(i, t, e) {
                    void 0 === t && (t = null), void 0 === e && (e = !0), this._currentAudio.loadMusicClipByUrl(i, t, e);
                }, d.pauseMusic = function(i) {
                    var t;
                    void 0 === i && (i = 0), null === (t = this._currentAudio) || void 0 === t || t.pauseMusic(i);
                }, d.resumeMusic = function(i) {
                    var t;
                    void 0 === i && (i = 0), null === (t = this._currentAudio) || void 0 === t || t.resumeMusic(i);
                }, d.setMusicVolume = function(i) {
                    void 0 === i && (i = 1), i *= rd.GameDataModel.musicVolume, this._currentAudio.setMusicVolume(i);
                }, d.stopMusic = function() {
                    this._currentAudio.stopMusic();
                }, d.getMusicDuration = function() {
                    return this._currentAudio.getMusicDuration();
                }, d.getMusicLeftTime = function() {
                    return this._currentAudio.getMusicLeftTime();
                }, d.getMusicCurrentTime = function() {
                    return this._currentAudio.getMusicCurrentTime();
                }, d.isMusicPlaying = function() {
                    return this._currentAudio.isMusicPlaying();
                }, d.getMusiceName = function() {
                    return this._currentAudio.getMusiceName();
                }, d.playSound = function(i, t, e, u) {
                    var o;
                    void 0 === t && (t = 1), void 0 === u && (u = !1), t *= rd.GameDataModel.musicVolume, 
                    null === (o = this._currentAudio) || void 0 === o || o.playSound(i, t, e, u);
                }, d.stopSound = function(i) {
                    var t;
                    null === (t = this._currentAudio) || void 0 === t || t.stopSound(i);
                }, d.releaseAudioClip = function() {
                    this._currentAudio.releaseAudioClip();
                }, o;
            }(d);
            void 0 === window.rd && (window.rd = {});
            var _ = i("default", f.getInstance());
            window.rd.Audio = _, o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/FuelData.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./SingletonBase.ts" ], function(e) {
    "use strict";
    var t, n, u, s, a, r;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, n = e.createClass, u = e.defineProperty, s = e.assertThisInitialized;
        }, function(e) {
            a = e.cclegacy;
        }, function(e) {
            r = e.SingletonBase;
        } ],
        execute: function() {
            a._RF.push({}, "c509fuxX85K3K+k6He4NQln", "FuelData", void 0);
            var i = [ 200, 500, 1200, 1500 ], p = [ 200, 500, 1200, 1500 ];
            e("FuelData", function(e) {
                function a() {
                    for (var t, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                    return t = e.call.apply(e, [ this ].concat(a)) || this, u(s(t), "_speed", 0), t;
                }
                t(a, e);
                var r = a.prototype;
                return r.upgradeLevel = function() {
                    var e = g.App.Account.getFuelData();
                    e.level >= 5 || (e.level += 1, g.App.Account.setFuelData(e));
                }, r.upgradeSpeed = function() {
                    var e = g.App.Account.getFuelData();
                    e.speedLv >= 5 || (e.speedLv += 1, g.App.Account.setFuelData(e), this._updateSpeed());
                }, r._updateSpeed = function() {}, n(a, [ {
                    key: "level",
                    get: function() {
                        return g.App.Account.getFuelData().level;
                    }
                }, {
                    key: "speedLv",
                    get: function() {
                        return g.App.Account.getFuelData().speedLv;
                    }
                }, {
                    key: "speed",
                    get: function() {
                        return 0 === this._speed && this._updateSpeed(), this._speed;
                    }
                }, {
                    key: "nextLvAmt",
                    get: function() {
                        return i[this.level - 1];
                    }
                }, {
                    key: "nextSpdAmt",
                    get: function() {
                        return p[this.speedLv - 1];
                    }
                }, {
                    key: "isMaxLv",
                    get: function() {
                        return this.level >= 5;
                    }
                }, {
                    key: "isMaxSpdLv",
                    get: function() {
                        return this.speedLv >= 5;
                    }
                } ]), a;
            }(r));
            a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/moreClick.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var r, e, o, c;
    return {
        setters: [ function(t) {
            r = t.inheritsLoose;
        }, function(t) {
            e = t.cclegacy, o = t._decorator, c = t.Component;
        } ],
        execute: function() {
            var n;
            e._RF.push({}, "c535a0NBg1CDKIKLjJAv/34", "moreClick", void 0);
            var i = o.ccclass;
            o.property, t("moreClick", i("moreClick")(n = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return r(e, t), e.prototype.start = function() {}, e;
            }(c)) || n);
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ZombieObject.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./QuadTreeObject.ts" ], function(e) {
    "use strict";
    var t, s, i, n, r, c;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, s = e.createClass, i = e.defineProperty, n = e.assertThisInitialized;
        }, function(e) {
            r = e.cclegacy;
        }, function(e) {
            c = e.QuadTreeObject;
        } ],
        execute: function() {
            r._RF.push({}, "c5d55rIAYZHe7udW6ZRxUHM", "ZombieObject", void 0);
            e("ZombieObject", function(e) {
                function r(t, s, r, c) {
                    var o;
                    return void 0 === c && (c = !1), o = e.call(this, t, s) || this, i(n(o), "_level", 0), 
                    i(n(o), "_isBoss", !1), o._level = r, o._isBoss = c, o;
                }
                return t(r, e), s(r, [ {
                    key: "level",
                    get: function() {
                        return this._level;
                    }
                }, {
                    key: "isBoss",
                    get: function() {
                        return this._isBoss;
                    }
                } ]), r;
            }(c));
            r._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/NativeAdVivo.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./NativeAdBase.ts" ], function(t) {
    "use strict";
    var n, i, a, o;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose;
        }, function(t) {
            i = t.cclegacy;
        }, function(t) {
            a = t.Log;
        }, function(t) {
            o = t.NativeAdBase;
        } ],
        execute: function() {
            i._RF.push({}, "c89f14dzo5D15DJOiuWNMX5", "NativeAdVivo", void 0);
            t("NativeAdVivo", function(t) {
                function i(n) {
                    var i;
                    return (i = t.call(this, n) || this)._platName = "qg", i._fun(), i;
                }
                n(i, t);
                var o = i.prototype;
                return o.create = function(t) {
                    var n, i, o, c = this;
                    this._adInstance = null === (n = window[this._platName]) || void 0 === n ? void 0 : n.createNativeAd({
                        adUnitId: this._config.adUnitId,
                        posId: this._config.adUnitId,
                        success: function(t) {
                            a.debug(c.constructor.name, "创建原生广告实例成功", c._config.adUnitId);
                        },
                        fail: function(t, n) {
                            a.debug(c.constructor.name, "创建原生广告实例失败", JSON.stringify(t), c._config.adUnitId);
                        },
                        complete: function() {
                            a.debug(c.constructor.name, "创建原生广告实例完成");
                        }
                    }), null === (i = this._adInstance) || void 0 === i || i.onLoad(function(t) {
                        var n, i;
                        (a.debug(c.constructor.name, "原生广告加载成功: " + JSON.stringify(t), c._config.adUnitId), 
                        t.adList.length > 0) ? (c._adItemData = t.adList[0], c.reportAdShow(), rd.Event.emit("clickNative", c._config.adUnitId), 
                        null === (n = c._showCallback) || void 0 === n || n.success()) : null === (i = c._showCallback) || void 0 === i || i.fail();
                    }), null === (o = this._adInstance) || void 0 === o || o.onError(function(t) {
                        var n;
                        a.debug(c.constructor.name, "原生广告加载失败:" + JSON.stringify(t), c._config.adUnitId), 
                        c._adItemData = null, null === (n = c._showCallback) || void 0 === n || n.fail();
                    });
                    var e = Math.max(0 | this._config.adDelay, 1e3);
                    a.debug(this.constructor.name, "原生广告初始化", e, this._config.adIntervals, this._config.adUnitId);
                }, o.load = function() {
                    a.debug(this.constructor.name, "原生广告加载开始", this._config.adUnitId, this._adInstance), 
                    this._adInstance || this.create(), this._adInstance.load();
                }, i;
            }(o));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/CustomAdVivo.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./CustomAdBase.ts" ], function(t) {
    "use strict";
    var s, u, o;
    return {
        setters: [ function(t) {
            s = t.inheritsLoose;
        }, function(t) {
            u = t.cclegacy;
        }, function(t) {
            o = t.CustomAdBase;
        } ],
        execute: function() {
            u._RF.push({}, "c8c821gHJpIIIuZhMXRIjX4", "CustomAdVivo", void 0);
            t("CustomAdVivo", function(t) {
                function u(s) {
                    var u;
                    return (u = t.call(this, s) || this)._platName = "qg", u;
                }
                return s(u, t), u;
            }(o));
            u._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/EventManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./SingletonBase.ts" ], function(e) {
    "use strict";
    var t, n, r, a, i;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, n = e.defineProperty, r = e.assertThisInitialized;
        }, function(e) {
            a = e.cclegacy;
        }, function(e) {
            i = e.SingletonBase;
        } ],
        execute: function() {
            a._RF.push({}, "cb017L9HfhM2Yn0g89heQ3A", "EventManager", void 0);
            var l = function(e) {
                function a() {
                    for (var t, a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l];
                    return t = e.call.apply(e, [ this ].concat(i)) || this, n(r(t), "_evtHandle", {}), 
                    t;
                }
                t(a, e);
                var i = a.prototype;
                return i.on = function(e, t, n, r) {
                    void 0 === r && (r = 0);
                    var a = this._evtHandle[e];
                    if (a) for (var i = 0, l = a.length; i < l; i++) {
                        var o = a[i];
                        if (o.callback === t && o.target === n) return void console.warn(e + " event is already register!!!");
                    } else a = this._evtHandle[e] = [];
                    a.push({
                        callback: t,
                        target: n,
                        delay: r
                    });
                }, i.emit = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var a = this._evtHandle[e];
                    if (a && !(a.length <= 0)) for (var i = function(e, t) {
                        var r = a[e];
                        if (r) {
                            var i = function() {
                                r.callback.apply(r.target, n);
                            }, l = r.delay;
                            l <= 0 ? i() : setTimeout(i, 1e3 * l);
                        }
                    }, l = 0, o = a.length; l < o; l++) i(l);
                }, i.off = function(e, t, n) {
                    var r = this._evtHandle[e];
                    if (r && !(r.length <= 0)) for (var a = 0, i = r.length; a < i; a++) {
                        var l = r[a];
                        if (l.callback === t && l.target === n) {
                            r.splice(a, 1);
                            break;
                        }
                    }
                }, a;
            }(i);
            void 0 === window.rd && (window.rd = {});
            var o = e("default", l.getInstance());
            window.rd.Event = o, a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ADDoubleScreen.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./ADMainPush.ts" ], function(t) {
    "use strict";
    var n, e, i, o, s, a, h, c, r, l, u, d, m, C, b, f;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, e = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            o = t.cclegacy, s = t._decorator, a = t.ButtonComponent, h = t.v3, c = t.view, r = t.tween, 
            l = t.macro, u = t.UITransformComponent, d = t.LayoutComponent, m = t.instantiate, 
            C = t.Component;
        }, function(t) {
            b = t.ConstantCommon;
        }, function(t) {
            f = t.ADMainPush;
        } ],
        execute: function() {
            var g;
            o._RF.push({}, "cd3e2WY1+JDA57camDyZa3t", "ADDoubleScreen", void 0);
            var p = s.ccclass;
            s.property, t("ADDoubleScreen", p("ADDoubleScreen")(g = function(t) {
                function o() {
                    for (var n, o = arguments.length, s = new Array(o), a = 0; a < o; a++) s[a] = arguments[a];
                    return n = t.call.apply(t, [ this ].concat(s)) || this, e(i(n), "continueBtn", null), 
                    e(i(n), "bottomContent", null), e(i(n), "_move", [ 1, 1 ]), e(i(n), "count", 1), 
                    e(i(n), "dataList", []), e(i(n), "isBanner", !1), e(i(n), "isPYX", !1), e(i(n), "callback", null), 
                    e(i(n), "adMainPrefabs", null), e(i(n), "scrollView", null), n;
                }
                n(o, t);
                var s = o.prototype;
                return s.onLoad = function() {
                    this.continueBtn = this.node.getChildByName("contionBtn").getComponent(a), this.continueBtn.node.on("click", this.onContinueGame, this), 
                    this.bottomContent = rd.Utils.getNodeByName(this.node, "content"), this.scrollView = rd.Utils.getNodeByName(this.node, "ScrollView");
                }, s.onEnable = function() {
                    this.isBanner = rd.Platform.bannerIsShow(), this.continueBtn.node.position = h(this.continueBtn.node.position.x, -c.getVisibleSize().height / 2 + 80, 0), 
                    rd.Ads.hideBannerAd(), this.continueBtn.interactable = !1, this.scheduleOnce(function() {
                        rd.Ads.showBannerAd();
                    }.bind(this), 3), this.scheduleOnce(function() {
                        var t = this;
                        r(this.continueBtn.node).to(.5, {
                            position: h(this.continueBtn.node.position.x, -335, 0)
                        }).call(function() {
                            t.continueBtn.interactable = !0;
                        }).start();
                    }, 3), this.scheduleOnce(function() {
                        this.isPYX = rd.PushCtrl.showJPYXBtn(!1), rd.PushCtrl.showMainPush(!1);
                    }, .05), this.initBottomView(), this.schedule(this.scrolling, 1 / 60, l.REPEAT_FOREVER, 1);
                }, s.onDisable = function() {
                    this.isBanner ? rd.Ads.showBannerAd() : rd.Ads.hideBannerAd(), rd.PushCtrl.showJPYXBtn(this.isPYX), 
                    rd.PushCtrl.showMainPush(!0), this.unschedule(this.scrolling);
                }, s.scrolling = function() {
                    1 === this._move[0] && this.bottomContent.getPosition().y >= this.bottomContent.getComponent(u).height - this.scrollView.getComponent(u).height / 2 && (this._move[0] = -1), 
                    -1 === this._move[0] && this.bottomContent.getPosition().y <= this.scrollView.getComponent(u).height / 2 && (this._move[0] = 1), 
                    this.bottomContent.setPosition(h(this.bottomContent.getPosition().x, this.bottomContent.getPosition().y + this._move[0], 0));
                }, s.initBottomView = function() {
                    this.count = 0;
                    var t = (c.getVisibleSize().width - 20 - 100) / 2 / 98;
                    this.createItem(this.bottomContent, t), this.bottomContent.getComponent(d).spacingX = 20, 
                    this.bottomContent.getComponent(d).paddingLeft = 50, this.bottomContent.getComponent(d).paddingRight = 50, 
                    this.bottomContent.getComponent(u).setContentSize(c.getVisibleSize().width, (119 * t + 30) * Math.ceil(this.dataList.length / 2) + 10);
                }, s.createItem = function(t, n) {
                    var e = this;
                    if (void 0 === n && (n = 1), !(this.count >= this.dataList.length)) {
                        var i = t.children[this.count], o = this.dataList[this.count];
                        if (i) {
                            var s = i.getComponent(f);
                            s.freash(o), s.setScale(n), this.count += 1, this.createItem(t, n);
                        } else this.adMainPrefabs ? this.createAdMain(t, n, o, this.adMainPrefabs) : rd.Asset.loadPrefab("adUI/ADMainPush", b.BUNDLE_NAME.ATOM).then(function(i) {
                            e.adMainPrefabs = i, e.createAdMain(t, n, o, e.adMainPrefabs);
                        });
                    }
                }, s.createAdMain = function(t, n, e, i) {
                    var o = m(i);
                    t.addChild(o);
                    var s = o.getComponent(f);
                    s.freash(e), s.setScale(n), this.count += 1, this.createItem(t, n);
                }, s.setCloseCallback = function(t) {
                    this.callback = t;
                }, s.onContinueGame = function() {
                    this.callback && this.callback(), this.node.active = !1;
                }, o;
            }(C)) || g);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/deviceInfo.ts", [ "cc" ], function(i) {
    "use strict";
    var e;
    return {
        setters: [ function(i) {
            e = i.cclegacy;
        } ],
        execute: function() {
            e._RF.push({}, "d01423PdyNCDo4f8cQAG+mt", "deviceInfo", void 0);
            var t, n, o, a, s, c;
            i("deviceInfo", (t = window.navigator, n = t.userAgent, o = t.platform, a = t.maxTouchPoints, 
            s = /(iphone|ipod|ipad)/i.test(n), {
                isIpad: c = "iPad" === o || "MacIntel" === o && a > 0 && !window.MSStream,
                isMobile: /android/i.test(n) || s || c,
                isSafari12: /Version\/12.+Safari/.test(n)
            }));
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/CameraMgr.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./RectBounds.ts", "./QuadTreeObject.ts" ], function(t) {
    "use strict";
    var e, n, s, i, a, o, r, c, u, _, d, E;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, s = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, a = t._decorator, o = t.v3, r = t.Tween, c = t.tween, u = t.Component;
        }, function(t) {
            _ = t.Constants;
        }, function(t) {
            d = t.RectBounds;
        }, function(t) {
            E = t.QuadTreeObject;
        } ],
        execute: function() {
            var f;
            i._RF.push({}, "d18fcM9l6pLoocKxlZFu4AU", "CameraMgr", void 0);
            var A = a.ccclass, h = o(0, 10.8, 18.5), p = o(-42, 0, 0);
            t("CameraMgr", A("CameraMgr")(f = function(t) {
                function i() {
                    for (var e, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(a)) || this, n(s(e), "_camInitPos", o()), 
                    n(s(e), "_camInitAng", o()), n(s(e), "_viewOffsetPos", o()), e;
                }
                e(i, t);
                var a = i.prototype;
                return a.onLoad = function() {
                    this._camInitPos.set(this.node.position), this._camInitAng.set(this.node.eulerAngles), 
                    g.App.GameData.camViewObj = new E(0, new d(0, -10, 32, 54));
                    var t = g.App.GameData.camViewObj.bounds;
                    this._viewOffsetPos.set(t.centerX, 0, t.centerZ), this._registerEvent(!0);
                }, a._registerEvent = function(t) {
                    var e = t ? "on" : "off";
                    rd.Event[e](_.EVENT_TYPE.UPDATE_CAMERA_VIEW, this._updateCameraView, this), rd.Event[e](_.EVENT_TYPE.UPDATE_CAMERA_ATTR, this._updateCameraAttr, this);
                }, a._updateCameraView = function(t) {
                    g.App.GameData.camViewObj.bounds.updatePos(t.x + this._viewOffsetPos.x, t.z + this._viewOffsetPos.z), 
                    rd.Event.emit(_.EVENT_TYPE.UPDATE_VIEW_TREE);
                }, a._updateCameraAttr = function(t) {
                    void 0 === t && (t = !1), r.stopAllByTarget(this.node);
                    var e = 1 * (t ? 1 : .75), n = t ? h : this._camInitPos, s = t ? p : this._camInitAng, i = t ? "cubicOut" : "sineIn";
                    c(this.node).to(e, {
                        position: n,
                        eulerAngles: s
                    }, {
                        easing: i
                    }).start(), t ? rd.UI.hideDialog(_.UI_DIALOG_NAME.GAME) : rd.UI.showDialog(_.UI_DIALOG_NAME.GAME);
                }, a.onDestroy = function() {
                    this._registerEvent(!1);
                }, i;
            }(u)) || f);
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/VehicleData.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./SingletonBase.ts" ], function(e) {
    "use strict";
    var t, n, i, s, c, a, r;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, n = e.createClass, i = e.defineProperty, s = e.assertThisInitialized;
        }, function(e) {
            c = e.cclegacy;
        }, function(e) {
            a = e.Constants;
        }, function(e) {
            r = e.SingletonBase;
        } ],
        execute: function() {
            c._RF.push({}, "d23ae6Sj/JE/bA5Vd9iOqMt", "VehicleData", void 0);
            var u = [ 200, 500, 1200, 1500, 2e3, 2500 ], p = [ 200, 500, 1200, 1500, 2e3, 2500 ];
            e("VehicleData", function(e) {
                function c() {
                    for (var t, n = arguments.length, c = new Array(n), a = 0; a < n; a++) c[a] = arguments[a];
                    return t = e.call.apply(e, [ this ].concat(c)) || this, i(s(t), "_speed", 0), t;
                }
                t(c, e);
                var r = c.prototype;
                return r.upgradeLevel = function() {
                    var e = g.App.Account.getVehicleData();
                    e.level >= 7 || (e.level += 1, g.App.Account.setVehicleData(e), rd.Event.emit(a.EVENT_TYPE.UPGRADE_VEHICLE_LV));
                }, r.upgradeSpeed = function() {
                    var e = g.App.Account.getVehicleData();
                    e.speedLv >= 7 || (e.speedLv += 1, g.App.Account.setVehicleData(e), this._updateSpeed(), 
                    rd.Event.emit(a.EVENT_TYPE.UPGRADE_VEHICLE_SPD));
                }, r._updateSpeed = function() {
                    this._speed = a.VEHICLE_BASE_MOVE_SPEED + (this.speedLv - 1) * a.VEHICLE_LEVEL_ADD_SPEED;
                }, n(c, [ {
                    key: "level",
                    get: function() {
                        return g.App.Account.getVehicleData().level;
                    }
                }, {
                    key: "speedLv",
                    get: function() {
                        return g.App.Account.getVehicleData().speedLv;
                    }
                }, {
                    key: "speed",
                    get: function() {
                        return 0 === this._speed && this._updateSpeed(), this._speed;
                    }
                }, {
                    key: "nextLvAmt",
                    get: function() {
                        return u[this.level - 1];
                    }
                }, {
                    key: "nextSpdAmt",
                    get: function() {
                        return p[this.speedLv - 1];
                    }
                }, {
                    key: "isMaxLv",
                    get: function() {
                        return this.level >= 7;
                    }
                }, {
                    key: "isMaxSpdLv",
                    get: function() {
                        return this.speedLv >= 7;
                    }
                } ]), c;
            }(r));
            c._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ADBannerVList.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./ADMainPush.ts" ], function(t) {
    "use strict";
    var n, o, e, i, s, r, l, c, a, h, u, d;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, o = t.defineProperty, e = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, s = t._decorator, r = t.ScrollView, l = t.instantiate, c = t.v2, 
            a = t.Component;
        }, function(t) {
            h = t.ConstantCommon;
        }, function(t) {
            u = t.ADMainPush, d = t.PUSH_TYPE;
        } ],
        execute: function() {
            var m;
            i._RF.push({}, "d2c64iDPRJNgZ0KWdXFqtxf", "ADBannerVList", void 0);
            var f = s.ccclass;
            t("ADBannerVList", f("ADBannerVList")(m = function(t) {
                function i() {
                    for (var n, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                    return n = t.call.apply(t, [ this ].concat(s)) || this, o(e(n), "_content", null), 
                    o(e(n), "_index", 0), o(e(n), "_move", 1), o(e(n), "_dataList", null), o(e(n), "scrollView", null), 
                    n;
                }
                n(i, t);
                var s = i.prototype;
                return s.onLoad = function() {
                    this._content = rd.Utils.getNodeByName(this.node, "content"), this.scrollView = rd.Utils.getNodeByName(this.node, "gameList"), 
                    this._dataList = rd.GameList.gameList;
                }, s.onEnable = function() {
                    this.show(), this.scrolling();
                }, s.onDisable = function() {}, s.scrolling = function() {
                    var t = this;
                    1 === this._move ? this.scrollView.getComponent(r).scrollToBottom(6, !1) : this.scrollView.getComponent(r).scrollToTop(6, !1), 
                    this.scheduleOnce(function() {
                        1 === t._move ? t.scrollView.getComponent(r).scrollToBottom(0, !1) : t.scrollView.getComponent(r).scrollToTop(0, !1), 
                        t._move = -t._move, t.scrolling();
                    }, 10);
                }, s.show = function() {
                    var t = this;
                    rd.Option.regionEnable && rd.Option.videoPlayConfirmProbability ? (this._content.removeAllChildren(), 
                    this._dataList.forEach(function(n) {
                        t.createItem(n);
                    })) : this.node.removeFromParent();
                }, s.createItem = function(t) {
                    var n = this;
                    rd.Asset.loadPrefab("adUI/ADMainPush", h.BUNDLE_NAME.ATOM).then(function(o) {
                        var e = l(o);
                        n._content.addChild(e);
                        var i = e.getComponent(u);
                        i.setAnchorPoint(c(.5, 1)), i.type = d.PUSH_VER_BANNER, i.freash(t), n._index = n._index + 1;
                    });
                }, s.setPosition = function(t) {
                    this.node.setPosition(t);
                }, i;
            }(a)) || m);
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/GameHub.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./StackMoney.ts" ], function(t) {
    "use strict";
    var e, n, i, a, o, s, r, l, d, h, _, c, u;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, i = t.assertThisInitialized, a = t.createClass;
        }, function(t) {
            o = t.cclegacy, s = t._decorator, r = t.color, l = t.MeshRenderer, d = t.Animation, 
            h = t.AnimationClip, _ = t.Component;
        }, function(t) {
            c = t.Constants;
        }, function(t) {
            u = t.StackMoney;
        } ],
        execute: function() {
            var m;
            o._RF.push({}, "d3be38VJWpDM7Ig2M6l2ZDJ", "GameHub", void 0);
            var p, A = s.ccclass, y = [ r("#0EAA41"), r("#5B11AE"), r("#048AD3"), r("#FB6E17") ], N = [ r("#A4FF88"), r("#CC93F8"), r("#96C8F0"), r("#FFC37B") ], C = [];
            !function(t) {
                t.OPEN_OUT = "gateOpenOut", t.OPEN_IN = "gateOpenIn";
            }(p || (p = {}));
            t("GameHub", A("GameHub")(m = function(t) {
                function o() {
                    for (var e, a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s];
                    return e = t.call.apply(t, [ this ].concat(o)) || this, n(i(e), "_groundMesh", null), 
                    n(i(e), "_gateAnim", null), n(i(e), "_stashNode", null), n(i(e), "_gateAnimName", ""), 
                    e;
                }
                e(o, t);
                var s = o.prototype;
                return s.onLoad = function() {
                    var t = this.node.getChildByName("ground");
                    this._groundMesh = t.getComponent(l), this._gateAnim = t.getChildByName("gate").getComponent(d), 
                    this._stashNode = rd.Utils.getNodeByName(t, "stashPos");
                    var e = t.scale;
                    g.App.AgentMgr.addAreaRange(t.worldPosition, e.x, e.z);
                }, s.start = function() {
                    this._groundMesh.setInstancedAttribute("a_instanced_tilingOffset", [ 4, 4 ]), g.App.ColliderData.setBuildingZone(this._gateAnim.node);
                    for (var t = [ "bank", "weapon", "world", "garage" ], e = 0, n = t.length; e < n; e++) {
                        var i = t[e], a = this._groundMesh.node.getChildByName(i + "Building").getChildByName(i + "Zone");
                        this._initZoneData(a, e);
                    }
                    this._initWallCollider(), this._registerEvent(!0);
                }, s.init = function() {
                    var t = c.MAP_LEVEL_COLOR_ARRAY[g.App.MapDataMgr.curMapLv - 1];
                    rd.Utils.getArrayByColor(t, C), this._groundMesh.setInstancedAttribute("a_instanced_color", C);
                }, s._initZoneData = function(t, e) {
                    t.getComponent(l).material.setProperty("mainColor", y[e]), rd.Utils.getNodeComponent(t, "innerZone", l).material.setProperty("mainColor", N[e]), 
                    g.App.ColliderData.setBuildingZone(t);
                }, s._initWallCollider = function() {
                    for (var t = this.node.getChildByName("obstacleRoot").children, e = 0, n = t.length; e < n; e++) {
                        var i = t[e], a = i.scale;
                        g.App.AgentMgr.addObstacle(i.worldPosition, a.x, a.z);
                    }
                }, s._registerEvent = function(t) {
                    var e = t ? "on" : "off";
                    rd.Event[e](c.EVENT_TYPE.PLAY_GATE_ANIM, this._playGateAnim, this), rd.Event[e](c.EVENT_TYPE.PLAY_MONEY_STASH, this._playMoneyStashAnim, this);
                }, s._playGateAnim = function(t, e) {
                    void 0 === e && (e = !1), e && (this._gateAnimName = t.z >= this._gateAnim.node.worldPosition.z ? p.OPEN_OUT : p.OPEN_IN), 
                    this._gateAnim.getState(this._gateAnimName).wrapMode = e ? h.WrapMode.Normal : h.WrapMode.Reverse, 
                    this._gateAnim.play(this._gateAnimName);
                }, s._playMoneyStashAnim = function(t) {
                    t.setParent(this._stashNode, !0), t.getComponent(u).playProjectileAnim(this._stashNode);
                }, s.onDestroy = function() {
                    this._registerEvent(!1);
                }, a(o, [ {
                    key: "gateNode",
                    get: function() {
                        return this.node.getChildByName("gate");
                    }
                } ]), o;
            }(_)) || m);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/SettingUI.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts", "./RDCommand.ts", "./RDStatisticsManager.ts", "./UIGBase.ts" ], function(t) {
    "use strict";
    var e, o, n, i, s, r, a, d, u, c, l, g, h, m;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, o = t.defineProperty, n = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, s = t._decorator, r = t.ToggleContainer, a = t.Toggle, d = t.Label, 
            u = t.profiler;
        }, function(t) {
            c = t.Constants;
        }, function(t) {
            l = t.ConstantCommon;
        }, function(t) {
            g = t.RDCommand;
        }, function(t) {
            h = t.CustomEventID;
        }, function(t) {
            m = t.UIGBase;
        } ],
        execute: function() {
            var _;
            i._RF.push({}, "d415dxX3v9N24VF7nIlYTHu", "SettingUI", void 0);
            var I, p = s.ccclass;
            !function(t) {
                t.OPEN = "openToggle", t.CLOSE = "closeToggle";
            }(I || (I = {}));
            t("SettingUI", p("SettingUI")(_ = function(t) {
                function i() {
                    for (var e, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(s)) || this, o(n(e), "_curSoundTog", null), 
                    o(n(e), "_curVibrateTog", null), o(n(e), "_closeBtnNode", null), e;
                }
                e(i, t);
                var s = i.prototype;
                return s.onLoad = function() {
                    var t = rd.Utils.getNodeComponent(this.node, "soundToggleGroup", r);
                    t.checkEvents.push(rd.Utils.getEventHandler(this, "_onSoundToggle")), this._curSoundTog = rd.Utils.getNodeComponent(t.node, I.OPEN, a);
                    var e = rd.GameDataModel.musicVolume ? I.OPEN : I.CLOSE;
                    rd.Utils.getNodeComponent(t.node, e, a).setIsCheckedWithoutNotify(!0);
                    var o = rd.Utils.getNodeComponent(this.node, "vibrateToggleGroup", r);
                    o.checkEvents.push(rd.Utils.getEventHandler(this, "_onVibrateToggle")), this._curVibrateTog = rd.Utils.getNodeComponent(o.node, I.OPEN, a);
                    var n = rd.GameDataModel.isVibrate ? I.OPEN : I.CLOSE;
                    rd.Utils.getNodeComponent(o.node, n, a).setIsCheckedWithoutNotify(!0), rd.Utils.registerButtonEvent(this.node, "agreementBtn", this._onAgreementButton, this).active = rd.Platform.isShowPrivacy();
                    var i = rd.Utils.getNodeComponent(this.node, "serviceLbl", d);
                    i.string = "客服QQ：1823958302", i.node.active = rd.Platform.isShowContact(), this._closeBtnNode = rd.Utils.registerButtonEvent(this.node, "closeBtn", this._onCloseButton, this), 
                    this.initBgOpacity(), this.initAdData(), this.setOppoLookAdBtn(this.node), this.zIndex = c.UI_DIALOG_Z_INDEX.POPUP;
                }, s.show = function() {
                    this.playScaleInAnim([ this.centerUI ], [ this._closeBtnNode ]), this.setShowAdData(!0, l.INTERSTITIALAD_POSITION.POSITION_SECOND);
                    for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++) o[n] = arguments[n];
                    t.prototype.show.call(this, o), rd.Ads.hideCustomAdVBannerLEFT(), rd.Ads.hideCustomAdVBannerRIGHT(), 
                    rd.Ads.hideCustomAdBannerTop(), rd.Ads.hideCustomAdBannerBottom();
                }, s.getUIName = function() {
                    return "设置";
                }, s._onSoundToggle = function(t) {
                    if (this._curSoundTog !== t) {
                        this._curSoundTog = t;
                        var e = t.node.name === I.OPEN;
                        !!rd.GameDataModel.musicVolume !== e && (rd.GameDataModel.musicVolume = e ? 1 : 0, 
                        rd.Audio.setMusicVolume(e ? 1 : 0), rd.Stats.customEvent(h.custom_button_click, {
                            curDialog: this.getUIName(),
                            btnType: "音效",
                            isOpenSound: e.toString()
                        }));
                    }
                }, s._onVibrateToggle = function(t) {
                    if (this._curVibrateTog !== t) {
                        this._curVibrateTog = t;
                        var e = t.node.name === I.OPEN;
                        rd.GameDataModel.isVibrate !== e && (rd.GameDataModel.isVibrate = e, rd.Stats.customEvent(h.custom_button_click, {
                            curDialog: this.getUIName(),
                            btnType: "震动",
                            isVibrate: e.toString()
                        }), c.IS_DEBUG && (e ? u.showStats() : u.hideStats()));
                    }
                }, s._onAgreementButton = function() {
                    rd.Platform.sendData(g.CMD_SDK_PRIVACY_POLICY, {});
                }, s._onCloseButton = function() {
                    rd.UI.isUIAnimPlaying() || (this.playScaleOutAnim([ this.centerUI ], function() {
                        rd.UI.hideDialog(c.UI_DIALOG_NAME.SETTING);
                    }), rd.Stats.customEvent(h.custom_button_click, {
                        curDialog: this.getUIName(),
                        btnType: "关闭"
                    }));
                }, i;
            }(m)) || _);
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/Base64.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./SingletonBase.ts" ], function(r) {
    "use strict";
    var e, t, n, a, o;
    return {
        setters: [ function(r) {
            e = r.inheritsLoose, t = r.defineProperty, n = r.assertThisInitialized;
        }, function(r) {
            a = r.cclegacy;
        }, function(r) {
            o = r.SingletonBase;
        } ],
        execute: function() {
            a._RF.push({}, "d6a02LenypBs4TFb2VIAbF3", "Base64", void 0);
            var h = function(r) {
                function a() {
                    for (var e, a = arguments.length, o = new Array(a), h = 0; h < a; h++) o[h] = arguments[h];
                    return e = r.call.apply(r, [ this ].concat(o)) || this, t(n(e), "base64Hash", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="), 
                    e;
                }
                e(a, r);
                var o = a.prototype;
                return o.encrypt = function(r) {
                    for (var e = "", t = this._base64Encode(r), n = t.length % 2 == 0 ? 7 : 6, a = 0; a < (t.length - n + 1) / 2; a++) e += t[2 * a + 1], 
                    e += t[2 * a];
                    return e += t.slice(t.length - n + 1);
                }, o.decrypt = function(r) {
                    for (var e = "", t = r.length % 2 == 0 ? 7 : 6, n = 0; n < r.length - t; n += 2) e += r[n + 1], 
                    e += r[n];
                    return e += r.slice(r.length - t + 1), e = this._base64Decode(e);
                }, o._base64Encode = function(r) {
                    var e, t, n, a, o, h, i, s = "", c = 0;
                    for (r = this._utf8Encode(r); c < r.length; ) a = (e = r.charCodeAt(c++)) >> 2, 
                    o = (3 & e) << 4 | (t = r.charCodeAt(c++)) >> 4, h = (15 & t) << 2 | (n = r.charCodeAt(c++)) >> 6, 
                    i = 63 & n, isNaN(t) ? h = i = 64 : isNaN(n) && (i = 64), s = s + this.base64Hash.charAt(a) + this.base64Hash.charAt(o) + this.base64Hash.charAt(h) + this.base64Hash.charAt(i);
                    return s;
                }, o._base64Decode = function(r) {
                    var e, t, n, a, o, h, i = "", s = 0;
                    for (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, ""); s < r.length; ) e = this.base64Hash.indexOf(r.charAt(s++)) << 2 | (a = this.base64Hash.indexOf(r.charAt(s++))) >> 4, 
                    t = (15 & a) << 4 | (o = this.base64Hash.indexOf(r.charAt(s++))) >> 2, n = (3 & o) << 6 | (h = this.base64Hash.indexOf(r.charAt(s++))), 
                    i += String.fromCharCode(e), 64 !== o && (i += String.fromCharCode(t)), 64 !== h && (i += String.fromCharCode(n));
                    return i = this._utf8Decode(i);
                }, o._utf8Encode = function(r) {
                    r = r.replace(/\r\n/g, "\n");
                    for (var e = "", t = 0; t < r.length; t++) {
                        var n = r.charCodeAt(t);
                        n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192), 
                        e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), 
                        e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128));
                    }
                    return e;
                }, o._utf8Decode = function(r) {
                    for (var e = "", t = 0, n = 0, a = 0, o = 0; t < r.length; ) (n = r.charCodeAt(t)) < 128 ? (e += String.fromCharCode(n), 
                    t++) : n > 191 && n < 224 ? (a = r.charCodeAt(t + 1), e += String.fromCharCode((31 & n) << 6 | 63 & a), 
                    t += 2) : (a = r.charCodeAt(t + 1), o = r.charCodeAt(t + 2), e += String.fromCharCode((15 & n) << 12 | (63 & a) << 6 | 63 & o), 
                    t += 3);
                    return e;
                }, a;
            }(o);
            void 0 === window.rd && (window.rd = {});
            var i = r("default", h.getInstance());
            window.rd.Base64 = i, a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/SpriteFrameManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(e) {
    "use strict";
    var t, r;
    return {
        setters: [ function(e) {
            t = e.defineProperty;
        }, function(e) {
            r = e.cclegacy;
        } ],
        execute: function() {
            r._RF.push({}, "d70f6pFS6VG76FEuP7Bu/tW", "SpriteFrameManager", void 0);
            var n = function() {
                function e() {}
                e.getInstance = function() {
                    return this._instance;
                };
                var t = e.prototype;
                return t.getSpriteFrame = function(e, t) {
                    var r = rd.Asset.getAsset(e);
                    return r ? r.getSpriteFrame(t) : null;
                }, t.getSpriteFrameByName = function(e, t) {
                    void 0 === t && (t = !1);
                    var r = rd.Asset.getAsset(e);
                    return t && rd.Asset.removeAsset(e), r || null;
                }, t.getTextureByName = function(e) {
                    var t = this.getSpriteFrameByName(e);
                    return t ? t.texture : null;
                }, e;
            }();
            t(n, "_instance", new n()), void 0 === window.rd && (window.rd = {});
            var i = e("default", n.getInstance());
            window.rd.SptFrame = i, r._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/BannerAdBase.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts" ], function(n) {
    "use strict";
    var t, i, o, e;
    return {
        setters: [ function(n) {
            t = n.createClass, i = n.defineProperty;
        }, function(n) {
            o = n.cclegacy;
        }, function(n) {
            e = n.Log;
        } ],
        execute: function() {
            o._RF.push({}, "d79bffiRHRJeIIORgrPHjMR", "BannerAdBase", void 0);
            n("BannerAdBase", function() {
                function n(n) {
                    i(this, "_platName", void 0), i(this, "_config", void 0), i(this, "_adInstance", null), 
                    i(this, "_isShow", !1), this._config = n;
                }
                var o = n.prototype;
                return o.create = function(n) {
                    var t, i, o, s, a, c, d, l, r, u, h = this;
                    console.log("调用create", this._platName, JSON.stringify(this._config)), this._adInstance = window[this._platName].createBannerAd({
                        adUnitId: this._config.adUnitId,
                        posId: this._config.adUnitId,
                        adIntervals: 60 | this._config.adIntervals,
                        style: this._config.style
                    }), null === (t = this._adInstance) || void 0 === t || null === (i = t.onLoad) || void 0 === i || i.call(t, function() {
                        var t;
                        e.debug(h.constructor.name, "系统banner加载成功", h._config.adUnitId), null === (t = n) || void 0 === t || t(), 
                        n = null;
                    }), null === (o = this._adInstance) || void 0 === o || null === (s = o.onError) || void 0 === s || s.call(o, function(n) {
                        e.debug(h.constructor.name, "系统banner错误", h._config.adUnitId, JSON.stringify(n));
                    }), null === (a = this._adInstance) || void 0 === a || null === (c = a.onHide) || void 0 === c || c.call(a, function() {
                        e.debug(this.constructor.name, "系统bannery隐藏成功", this._config.adUnitId);
                    }), null === (d = this._adInstance) || void 0 === d || null === (l = d.onResize) || void 0 === l || l.call(d, function(n) {
                        h._adInstance.style && (h._adInstance.style.top = rd.Platform.getSystemInfo().windowHeight - n.height - (rd.Utils.isIphoneX() ? 20 : 0), 
                        h._adInstance.style.left = (rd.Platform.getSystemInfo().windowWidth - n.width) / 2);
                    }), null === (r = this._adInstance) || void 0 === r || null === (u = r.onClose) || void 0 === u || u.call(r, function(n) {
                        e.debug(h.constructor.name, "系统banner关闭", h._config.adUnitId);
                    });
                }, o.load = function() {
                    throw new Error("Method not implemented.");
                }, o.show = function(n) {
                    var t = this, i = function() {
                        var i;
                        e.log("系统banner显示", t._config.adUnitId), null === (i = t._adInstance) || void 0 === i || i.show().then(function() {
                            t._isShow = !0, e.debug(t.constructor.name, "系统banner显示成功", t._config.adUnitId, t._isShow), 
                            null == n || n.success(), rd.Event.emit("menuUp");
                        }).catch(function(i) {
                            e.debug(t.constructor.name, "系统banner显示失败"), null == n || n.fail();
                        });
                    };
                    this._adInstance ? i() : this.create(i.bind(this));
                }, o.hide = function() {
                    var n, t;
                    null === (n = this._adInstance) || void 0 === n || null === (t = n.hide) || void 0 === t || t.call(n), 
                    this._isShow = !1;
                }, o.destroy = function() {
                    var n, t;
                    null === (n = this._adInstance) || void 0 === n || null === (t = n.destroy) || void 0 === t || t.call(n), 
                    this._adInstance = null;
                }, t(n, [ {
                    key: "isShow",
                    get: function() {
                        return console.log("isShow", this._isShow), this._isShow;
                    },
                    set: function(n) {
                        this._isShow = n;
                    }
                } ]), n;
            }());
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/IDataModel.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./SingletonBase.ts" ], function(t) {
    "use strict";
    var a, e, o, n, i, r;
    return {
        setters: [ function(t) {
            a = t.inheritsLoose, e = t.defineProperty, o = t.assertThisInitialized;
        }, function(t) {
            n = t.cclegacy;
        }, function(t) {
            i = t.Log;
        }, function(t) {
            r = t.SingletonBase;
        } ],
        execute: function() {
            n._RF.push({}, "d96e9vwNCtA/46Abw/GaPP6", "IDataModel", void 0);
            var s = t("IDataModel", function(t) {
                function n(a) {
                    var n;
                    return void 0 === a && (a = "default"), n = t.call(this) || this, e(o(n), "modelName", "default"), 
                    e(o(n), "_dLocalData", {}), n.modelName = a, n;
                }
                a(n, t);
                var r = n.prototype;
                return r.init = function() {
                    this.LoadStorage();
                }, r.clear = function() {
                    this._dLocalData = {}, this.initData(), this.Save();
                }, r.getMessageListeners = function() {
                    return {};
                }, r.sendProtocolMsg = function(t) {}, r.LoadStorage = function() {
                    var t = this;
                    rd.Platform.loadStorageData([ rd.Base64.encrypt("model_" + this.modelName) ], function(a) {
                        "{}" === JSON.stringify(a) ? (t._dLocalData = {}, t.initData(), t.Save()) : t._dLocalData = JSON.parse(rd.Base64.decrypt(a)), 
                        i.debug(n.TAG, "init 数据获取 model_" + t.modelName), i.debug(n.TAG, JSON.stringify(t._dLocalData));
                    }, function(t) {});
                }, r.initData = function() {}, r.Query = function(t, a) {
                    return void 0 === a && (a = null), null != this._dLocalData[t] ? this._dLocalData[t] : a;
                }, r.Set = function(t, a) {
                    return (!this._dLocalData[t] || this._dLocalData[t] != a) && (this._dLocalData[t] = a, 
                    !0);
                }, r.Save = function() {
                    try {
                        var t = rd.Base64.encrypt("model_" + this.modelName), a = rd.Base64.encrypt(JSON.stringify(this._dLocalData));
                        rd.Platform.flushStorageData({
                            key: t,
                            data: a
                        }, function() {}), i.debug(n.TAG, "数据保存model_" + this.modelName);
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        i.error("IDataModel", "err = ??", t);
                    }
                }, n;
            }(r));
            e(s, "TAG", "IDataModel"), n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDAsset.ts", [ "cc" ], function() {
    "use strict";
    var t;
    return {
        setters: [ function(e) {
            t = e.cclegacy;
        } ],
        execute: function() {
            t._RF.push({}, "daab5BTBtxJUqEhlicE4SAT", "RDAsset", void 0), t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/TTButton.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./RDPlatformType.ts" ], function(t) {
    "use strict";
    var e, r, n, o, i, a, l, p, u, c;
    return {
        setters: [ function(t) {
            e = t.applyDecoratedDescriptor, r = t.inheritsLoose, n = t.initializerDefineProperty, 
            o = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, a = t._decorator, l = t.SpriteFrame, p = t.Sprite, u = t.Component;
        }, function(t) {
            c = t.RDPlatformType;
        } ],
        execute: function() {
            var s, f, m, y, T, d, h;
            i._RF.push({}, "dcbe2oVXCpEeLrd1PVxYfLV", "TTButton", void 0);
            var F = a.ccclass, b = a.property;
            t("TTButton", (s = F("TTButton"), f = b({
                type: l,
                tooltip: "字节按钮"
            }), m = b({
                type: l,
                tooltip: "非字节按钮"
            }), s((d = e((T = function(t) {
                function e() {
                    for (var e, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, n(o(e), "ttFrame", d, o(e)), 
                    n(o(e), "noneFrame", h, o(e)), e;
                }
                return r(e, t), e.prototype.onLoad = function() {
                    this.node.getComponent(p).spriteFrame = rd.Platform.platformType === c.TTMinGame ? this.ttFrame : this.noneFrame;
                }, e;
            }(u)).prototype, "ttFrame", [ f ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), h = e(T.prototype, "noneFrame", [ m ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), y = T)) || y));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/CircleMask.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var e, i, r, s, a, n, o, p, u, c, h, d;
    return {
        setters: [ function(t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, r = t.initializerDefineProperty, 
            s = t.assertThisInitialized, a = t.defineProperty, n = t.createClass;
        }, function(t) {
            o = t.cclegacy, p = t._decorator, u = t.MaskComponent, c = t.game, h = t.Game, d = t.Component;
        } ],
        execute: function() {
            var l, _, m, k, C, f, y, g, M;
            o._RF.push({}, "de139nmbV9A07AQcXko0Oz7", "CircleMask", void 0);
            var v = p.ccclass, w = p.property, b = p.menu, D = p.executeInEditMode, E = p.disallowMultiple, R = p.requireComponent;
            t("CircleMask", (l = v(), _ = D(!0), m = E(!0), k = R(u), C = b("自定义组件/CircleMask"), 
            f = w({
                tooltip: "圆角半径：\n0-1之间为最小边长比例值\n>1为具体像素值"
            }), l(y = _(y = m(y = k(y = C((M = e((g = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
                    return e = t.call.apply(t, [ this ].concat(n)) || this, r(s(e), "_radius", M, s(e)), 
                    a(s(e), "_maskComp", null), e;
                }
                i(e, t);
                var o = e.prototype;
                return o.onEnable = function() {
                    this._maskComp = this.getComponent(u), this.updateMask();
                }, o.updateMask = function() {
                    var t = this._radius >= 0 ? this._radius : 0;
                    t < 1 && (t = Math.min(this.node.width, this.node.height) * t), this._maskComp.radius = t, 
                    this._maskComp.onDraw = this._onDraw.bind(this._maskComp), this._maskComp._updateGraphics = this._updateGraphics.bind(this._maskComp), 
                    this._maskComp.type = u.Type.RECT;
                }, o._onDraw = function(t) {
                    t.clear(!1);
                    var e = this.node, i = e.width, r = e.height, s = -i * e.anchorX, a = -r * e.anchorY;
                    t.roundRect(s, a, i, r, this.radius || 0), c.renderType === h.RENDER_TYPE_CANVAS ? t.stroke() : t.fill();
                }, o._updateGraphics = function() {
                    var t = this._graphics;
                    t && this.onDraw(t);
                }, n(e, [ {
                    key: "radius",
                    get: function() {
                        return this._radius;
                    },
                    set: function(t) {
                        this._radius !== t && (this._radius = t, this.updateMask());
                    }
                } ]), e;
            }(d)).prototype, "_radius", [ w ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 50;
                }
            }), e(g.prototype, "radius", [ f ], Object.getOwnPropertyDescriptor(g.prototype, "radius"), g.prototype), 
            y = g)) || y) || y) || y) || y) || y));
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/CustomMark.ts", [ "cc" ], function(t) {
    "use strict";
    var e, i, n, r, o;
    return {
        setters: [ function(t) {
            e = t.cclegacy, i = t.sys, n = t.screen, r = t.view, o = t.ResolutionPolicy;
        } ],
        execute: function() {
            var u;
            e._RF.push({}, "df1fawNUeJGT43U1EwzYNHi", "CustomMark", void 0), function(t) {
                t[t.VERY_LOW = 0] = "VERY_LOW", t[t.LOW = 1] = "LOW", t[t.MEDIUM = 2] = "MEDIUM", 
                t[t.HIGH = 3] = "HIGH", t[t.VERY_HIGH = 4] = "VERY_HIGH";
            }(u || (u = {}));
            t("CustomMark", function() {
                function t() {}
                return t.getDeviceTier = function() {
                    if (!i.isMobile) return u.MEDIUM;
                    var t = n.windowSize, e = r.getResolutionPolicy()._contentStrategy === o.ContentStrategy.FIXED_WIDTH;
                    if (console.log("view size width:" + t.width, "height:" + t.height), i.platform === i.Platform.IOS) {
                        var c = e ? t.width : t.height;
                        return c >= 1280 ? u.VERY_HIGH : c >= 1160 ? u.HIGH : c >= 890 ? u.MEDIUM : c >= 800 ? u.LOW : u.VERY_LOW;
                    }
                    var s = e ? t.width : t.height, H = e ? t.height : t.width;
                    return s >= 1400 && H > 3200 ? u.VERY_HIGH : s >= 1070 && H > 2300 ? u.HIGH : s >= 1070 && H > 2260 && H <= 2300 ? u.MEDIUM : s >= 1070 ? u.LOW : u.VERY_LOW;
                }, t;
            }());
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RichText.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var c, e, n, i, o, r;
    return {
        setters: [ function(t) {
            c = t.inheritsLoose, e = t.defineProperty, n = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, o = t._decorator, r = t.Component;
        } ],
        execute: function() {
            var a;
            i._RF.push({}, "e1d778LPgNIhI56Azx77De2", "RichText", void 0);
            var l = o.ccclass;
            t("RichText", l("RichText")(a = function(t) {
                function i() {
                    for (var c, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return c = t.call.apply(t, [ this ].concat(o)) || this, e(n(c), "_callback", void 0), 
                    c;
                }
                c(i, t);
                var o = i.prototype;
                return o.onLoad = function() {}, o.setCallback = function(t) {
                    this._callback = t;
                }, o.onUserProtocolClicked = function() {
                    var t;
                    null === (t = this._callback) || void 0 === t || t.call(this);
                }, i;
            }(r)) || a);
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/GuideTips.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(e) {
    "use strict";
    var i, t, a, s, n, o, r, l, h, d, u, c;
    return {
        setters: [ function(e) {
            i = e.inheritsLoose, t = e.defineProperty, a = e.assertThisInitialized, s = e.createClass;
        }, function(e) {
            n = e.cclegacy, o = e._decorator, r = e.v3, l = e.view, h = e.UITransform, d = e.Vec3, 
            u = e.math, c = e.Component;
        } ],
        execute: function() {
            var _;
            n._RF.push({}, "e4adbITeQ1DMqAOlnpG+mXG", "GuideTips", void 0);
            var m = o.ccclass, p = r();
            e("GuideTips", m("GuideTips")(_ = function(e) {
                function n() {
                    for (var i, s = arguments.length, n = new Array(s), o = 0; o < s; o++) n[o] = arguments[o];
                    return i = e.call.apply(e, [ this ].concat(n)) || this, t(a(i), "_guidePanel", null), 
                    t(a(i), "_arrowNode", null), t(a(i), "_mainCamera", null), t(a(i), "_targetNode", null), 
                    t(a(i), "_visibleSize", null), t(a(i), "_lastPos", r()), i;
                }
                i(n, e);
                var o = n.prototype;
                return o.onLoad = function() {
                    this._guidePanel = this.node.getChildByName("guidePanel"), this._arrowNode = this._guidePanel.getChildByName("arrowNode"), 
                    this._guidePanel.active = !1, this._initVisibleSize();
                }, o._initVisibleSize = function() {
                    this._visibleSize = l.getVisibleSize(), this._visibleSize.height -= 300;
                    var e = this._guidePanel.getComponent(h);
                    this._visibleSize.width -= e.width, this._visibleSize.height -= e.height;
                }, o.lateUpdate = function() {
                    var e = this._targetNode.worldPosition, i = g.App.MoneyStack;
                    if (!this._targetNode || g.App.GameData.playerNode.worldPosition.z >= e.z || i.moneyCnt < i.maxMoneyCnt) this._guidePanel.active = !1; else {
                        var t = this._mainCamera.worldToScreen(e);
                        if (!(d.squaredDistance(this._lastPos, t) < 1)) {
                            this._lastPos.set(t);
                            var a = this._mainCamera.camera;
                            t.x > 0 && t.x < a.width && t.y > 0 && t.y < a.height && t.z > 0 ? this._guidePanel.active = !1 : (this._guidePanel.active = !0, 
                            this._mainCamera.convertToUINode(e, this.node.parent, p), this._setGuideAttribute());
                        }
                    }
                }, o._setGuideAttribute = function() {
                    var e = .5 * this._visibleSize.width, i = .5 * this._visibleSize.height;
                    p.x = u.clamp(p.x, -e, e), p.y = u.clamp(p.y, -i, i), this.node.setPosition(p), 
                    this._arrowNode.setRotationFromEuler(0, 0, u.toDegree(Math.atan2(p.y, p.x)));
                }, s(n, [ {
                    key: "mainCamera",
                    set: function(e) {
                        this._mainCamera = e;
                    }
                }, {
                    key: "targetNode",
                    set: function(e) {
                        this._targetNode = e;
                    }
                } ]), n;
            }(c)) || _);
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/VideoAdTt.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./VideoAdBase.ts" ], function(t) {
    "use strict";
    var e, i, n;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            i = t.cclegacy;
        }, function(t) {
            n = t.VideoAdBase;
        } ],
        execute: function() {
            i._RF.push({}, "e52caMXy05LiY0B+LwxFYNr", "VideoAdTt", void 0);
            t("VideoAdTt", function(t) {
                function i(e) {
                    var i;
                    return (i = t.call(this, e) || this)._platName = "tt", i.create(), i;
                }
                return e(i, t), i;
            }(n));
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/VideoAdVivo.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./VideoAdBase.ts" ], function(i) {
    "use strict";
    var t, s, e, n, o, r;
    return {
        setters: [ function(i) {
            t = i.inheritsLoose, s = i.defineProperty, e = i.assertThisInitialized;
        }, function(i) {
            n = i.cclegacy;
        }, function(i) {
            o = i.Log;
        }, function(i) {
            r = i.VideoAdBase;
        } ],
        execute: function() {
            n._RF.push({}, "e5f93vL6XxDk50LdeOYdCq0", "VideoAdVivo", void 0);
            i("VideoAdVivo", function(i) {
                function n(t) {
                    var n;
                    return n = i.call(this, t) || this, s(e(n), "_isFirst", !0), n._platName = "qg", 
                    n.create(), n;
                }
                return t(n, i), n.prototype.show = function(i) {
                    this._rewardCaback = i, o.debug(this.constructor.name, "显示激励视频", this._isFirst, JSON.stringify(this._config.adUnitId)), 
                    this._isFirst ? this._adInstance.show() : this._adInstance.load(), this._isFirst = !1;
                }, n;
            }(r));
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/MapMgr.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./Bomb.ts", "./ConstantCommon.ts", "./PlayerMgr.ts", "./ZombieMgr.ts", "./MoneyMgr.ts", "./CameraMgr.ts", "./GameHub.ts", "./GuideTips.ts" ], function(e) {
    "use strict";
    var t, a, n, r, o, i, d, s, _, l, u, c, M, p, E, m, A, h, f, v, N;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, a = e.defineProperty, n = e.assertThisInitialized, r = e.asyncToGenerator;
        }, function(e) {
            o = e.cclegacy, i = e._decorator, d = e.Node, s = e.Vec3, _ = e.instantiate, l = e.MeshRenderer, 
            u = e.find, c = e.Component;
        }, function(e) {
            M = e.Constants;
        }, function(e) {
            p = e.Bomb;
        }, function(e) {
            E = e.ConstantCommon;
        }, function(e) {
            m = e.PlayerMgr;
        }, function(e) {
            A = e.ZombieMgr;
        }, function(e) {
            h = e.MoneyMgr;
        }, function(e) {
            f = e.CameraMgr;
        }, function(e) {
            v = e.GameHub;
        }, function(e) {
            N = e.GuideTips;
        } ],
        execute: function() {
            var P;
            o._RF.push({}, "e72cb1DzjhAD5EsFeAqWEWQ", "MapMgr", void 0);
            var T = i.ccclass, y = M.MAP_LEVEL_COLOR_ARRAY, C = [];
            e("MapMgr", T("MapMgr")(P = function(e) {
                function o() {
                    for (var t, r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                    return t = e.call.apply(e, [ this ].concat(o)) || this, a(n(t), "_playerMgr", null), 
                    a(n(t), "_zombieMgr", null), a(n(t), "_moneyMgr", null), a(n(t), "_cameraMgr", null), 
                    a(n(t), "_gameHub", null), a(n(t), "_curMapNode", null), t;
                }
                t(o, e);
                var i = o.prototype;
                return i.start = function() {
                    var e = new d("playerMgr");
                    this._playerMgr = e.addComponent(m), this.node.addChild(e);
                    var t = new d("zombieMgr");
                    this._zombieMgr = t.addComponent(A), this.node.addChild(t);
                    var a = new d("moneyMgr");
                    this._moneyMgr = a.addComponent(h), this.node.addChild(a);
                    var n = this.node.getChildByName("cameraMgr");
                    this._cameraMgr = n.addComponent(f), this._preloadData(), this._loadGameData(), 
                    this._registerEvent(!0), g.App.GameData.mapNode = this.node, g.App.MapDataMgr.initLocalData();
                }, i.clearMapData = function() {}, i._preloadData = function() {
                    for (var e = new s(0, 0, 100), t = 0; t < 20; t++) rd.Event.emit(M.EVENT_TYPE.PLAY_ZOMBIE_BOOM, e, 1);
                    for (var a = 0; a < 5; a++) rd.Event.emit(M.EVENT_TYPE.PLAY_COLLECT_MONEY, e);
                    for (var n = 0; n < 3; n++) rd.Event.emit(M.EVENT_TYPE.PLAY_MONEY_IN_BANK, e);
                    rd.Event.emit(M.EVENT_TYPE.PLAY_BOSS_BOOM, e);
                }, i._loadGameData = function() {
                    var e = r(function*() {
                        yield this._playerMgr.createPlayer(), yield this._loadGameHub(), this._loadMap(g.App.MapDataMgr.curMapLv, !0), 
                        this._loadWaterPlane();
                    });
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(), i._registerEvent = function(e) {
                    var t = e ? "on" : "off";
                    rd.Event[t](M.EVENT_TYPE.UPDATE_MAP, this._loadMap, this), rd.Event[t](M.EVENT_TYPE.CREATE_BOMB, this._createBomb, this);
                }, i._loadMap = function(e, t) {
                    var a = this;
                    void 0 === t && (t = !1), rd.Asset.loadPrefab("map/level" + e, E.BUNDLE_NAME.PREFAB).then(function(e) {
                        a._recycleMap(), a._curMapNode = _(e), a._curMapNode.setPosition(0, M.MAP_HEIGHT_OFFSET, 0), 
                        a._curMapNode.parent = a.node, a._playerMgr.init(), a._gameHub.init();
                        var n = a._curMapNode.getChildByName("map"), r = a._curMapNode.getChildByName("range");
                        a._zombieMgr.init(n, r), a._moneyMgr.init(r), a._initMapData(n), a._initBridgeArea(), 
                        rd.Event.emit(M.EVENT_TYPE.BACK_TO_GAME_HUB), rd.Event.emit(E.EVENT_TYPE.MAP_LOAD_FINISH), 
                        t ? g.App.FadeInOutMgr.fadeOut(1.5) : a.scheduleOnce(function() {
                            g.App.FadeInOutMgr.fadeOut();
                        }, 1);
                        var o = rd.Option.getNativeIntertitalDelay(E.INTERSTITIALAD_POSITION.POSITION_GAME_START) / 1e3;
                        a.scheduleOnce(function() {
                            !t && rd.Ads.showInterstitialAd({
                                type: E.INTERSTITIALAD_POSITION.POSITION_GAME_START
                            });
                        }, o);
                    });
                }, i._recycleMap = function() {
                    this._curMapNode && (this._zombieMgr.reset(), this._moneyMgr.reset(), this._curMapNode.destroy(), 
                    this._curMapNode = null, g.App.AgentMgr.clearMapArea(), rd.Event.emit(M.EVENT_TYPE.CLEAR_GAME_DATA));
                }, i._initMapData = function(e) {
                    for (var t = e.children, a = 0, n = t.length; a < n; a++) {
                        var r = g.App.MapDataMgr.curMapLv + a;
                        rd.Utils.getArrayByColor(y[r - 1], C);
                        for (var o = t[a], i = o.children, d = 0, s = i.length; d < s; d++) {
                            var _ = i[d], u = _.getComponent(l);
                            u.setInstancedAttribute("a_instanced_color", C);
                            var c = this._zombieMgr.getGroundSectionData(_), M = c.sectionRow, p = c.sectionCol;
                            u.setInstancedAttribute("a_instanced_tilingOffset", [ p, M ]);
                            var E = _.scale, m = o.eulerAngles.y, A = 0 === m ? E.x : E.z, h = 0 === m ? E.z : E.x;
                            g.App.AgentMgr.addAreaRange(_.worldPosition, A, h);
                        }
                    }
                }, i._initBridgeArea = function() {
                    var e = this._curMapNode.getChildByName("bridgeRoot");
                    if (e) for (var t = e.children, a = 0, n = t.length; a < n; a++) {
                        var r = t[a], o = r.eulerAngles.y, i = 0 === o ? 12.8 : 10.3, d = 0 === o ? 10.3 : 12.8;
                        g.App.AgentMgr.addAreaRange(r.worldPosition, i, d);
                    }
                }, i._createBomb = function(e, t) {
                    var a = this;
                    rd.Asset.loadPrefab("game/bomb", E.BUNDLE_NAME.PREFAB).then(function(n) {
                        var r = rd.Pool.getNode(n, a.node);
                        r.setWorldPosition(e.x, 0, e.z), r.getComponent(p).setBombSize(t);
                    });
                }, i._loadGameHub = function() {
                    var e = r(function*() {
                        var e = yield rd.Asset.loadPrefab("game/gameHub", E.BUNDLE_NAME.PREFAB), t = _(e);
                        t.setPosition(0, M.MAP_HEIGHT_OFFSET, 0), t.setRotationFromEuler(0, 180, 0), this._gameHub = t.addComponent(v), 
                        this.node.addChild(t);
                    });
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(), i._loadWaterPlane = function() {
                    var e = this;
                    rd.Asset.loadPrefab("game/waterPlane", E.BUNDLE_NAME.PREFAB).then(function(t) {
                        var a = _(t);
                        e.node.addChild(a);
                    });
                }, i._loadGameHubGuide = function() {
                    var e = this;
                    rd.Asset.loadPrefab("ui/module/gameHubGuide", E.BUNDLE_NAME.PREFAB).then(function(t) {
                        var a = _(t), n = a.addComponent(N);
                        n.mainCamera = g.App.GameData.mainCamera, n.targetNode = e._gameHub.gateNode, u("Canvas").addChild(a);
                    });
                }, i.onDestroy = function() {
                    this._registerEvent(!1);
                }, o;
            }(c)) || P);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ToastUI.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./UIBase.ts" ], function(t) {
    "use strict";
    var n, o, i, e, s, a, c, l, p, r, u;
    return {
        setters: [ function(t) {
            n = t.inheritsLoose, o = t.defineProperty, i = t.assertThisInitialized;
        }, function(t) {
            e = t.cclegacy, s = t._decorator, a = t.v3, c = t.Label, l = t.Tween, p = t.tween;
        }, function(t) {
            r = t.ConstantCommon;
        }, function(t) {
            u = t.UIBase;
        } ],
        execute: function() {
            var h;
            e._RF.push({}, "e8d04xwZ/pPboLApeU95TX/", "ToastUI", void 0);
            var d = s.ccclass, _ = a(1, 1, 1);
            t("ToastUI", d("ToastUI")(h = function(t) {
                function e() {
                    for (var n, e = arguments.length, s = new Array(e), a = 0; a < e; a++) s[a] = arguments[a];
                    return n = t.call.apply(t, [ this ].concat(s)) || this, o(i(n), "_opacityComp", null), 
                    o(i(n), "_tipLbl", null), n;
                }
                n(e, t);
                var s = e.prototype;
                return s.onLoad = function() {
                    this._opacityComp = this.getOpacityComponent(this.node), this._tipLbl = rd.Utils.getNodeComponent(this.node, "tipLbl", c), 
                    this.zIndex = r.UI_DIALOG_Z_INDEX.TOAST;
                }, s.show = function(t) {
                    this.node.setScale(.75, .75, 1), this._opacityComp.opacity = 255, this._tipLbl.string = t, 
                    l.stopAllByTarget(this.node), l.stopAllByTarget(this._opacityComp), this._playScaleAnim();
                }, s.hide = function() {}, s._playScaleAnim = function() {
                    p(this.node).to(.05, {
                        scale: _
                    }, {
                        easing: "sineIn"
                    }).delay(1).call(this._playFadeOutAnim.bind(this)).start();
                }, s._playFadeOutAnim = function() {
                    p(this._opacityComp).to(.5, {
                        opacity: 0
                    }).call(function() {
                        rd.UI.hideDialog(r.UI_DIALOG_NAME.TOAST);
                    }).start();
                }, e;
            }(u)) || h);
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDAssetManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./Dictionary.ts" ], function(e) {
    "use strict";
    var t, n, r, i, s, o, a, u, c, d, l, f, h, A, v;
    return {
        setters: [ function(e) {
            t = e.defineProperty, n = e.asyncToGenerator;
        }, function(e) {
            r = e.cclegacy, i = e.assetManager, s = e.resources, o = e.Prefab, a = e.SpriteFrame, 
            u = e.Texture2D, c = e.JsonAsset, d = e.TextAsset, l = e.TextureCube, f = e.AudioClip;
        }, function(e) {
            h = e.Log;
        }, function(e) {
            A = e.ConstantCommon;
        }, function(e) {
            v = e.Dictionary;
        } ],
        execute: function() {
            r._RF.push({}, "eb7eeSkQ29IiKmroLwWLCgw", "RDAssetManager", void 0);
            var _ = function() {
                function e() {
                    t(this, "_cacheAssetDic", new v()), t(this, "_cacheBundleDic", new v()), t(this, "_loadingResInfo", Object.create(null));
                }
                e.getInstance = function() {
                    return this._instance;
                };
                var r = e.prototype;
                return r.loadResDirOrArray = function(e, t, n, r, i) {
                    var o = this, a = Array.isArray(e) ? "load" : "loadDir", u = 0;
                    h.log("loadResDirOrArray=========");
                    var c = function(n) {
                        n[a](e, t, function(e, t, n) {
                            if (i) {
                                var r = e / t;
                                i(u = r > u ? r : u, n);
                            }
                        }, function(e, t) {
                            e ? console.warn(JSON.stringify(e)) : (t.forEach(function(e) {
                                return o.addAsset(e.name ? e.name : e.data.name, e, n);
                            }), null == r || r(t));
                        });
                    };
                    n ? rd.Bundle.loadBundle(n).then(function(e) {
                        c(e);
                    }).catch(function() {
                        c(s);
                    }) : c(s);
                }, r.loadPrefab = function() {
                    var e = n(function*(e, t) {
                        void 0 === t && (t = A.BUNDLE_NAME.RESOURCES);
                        var n = yield rd.Bundle.loadBundle(t);
                        return this._loadAsset(n, e, o);
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                }(), r.loadSpriteFrame = function() {
                    var e = n(function*(e, t) {
                        void 0 === t && (t = A.BUNDLE_NAME.RESOURCES);
                        var n = yield rd.Bundle.loadBundle(t);
                        return this._loadAsset(n, e + "/spriteFrame", a);
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                }(), r.loadImage = function() {
                    var e = n(function*(e, t, n) {
                        void 0 === t && (t = !1), void 0 === n && (n = A.BUNDLE_NAME.RESOURCES);
                        var r = yield rd.Bundle.loadBundle(n);
                        return this._loadAsset(r, e, u, function(e) {
                            var t = new u();
                            return t.image = e, t;
                        }, t);
                    });
                    return function(t, n, r) {
                        return e.apply(this, arguments);
                    };
                }(), r.loadTexture = function() {
                    var e = n(function*(e, t) {
                        void 0 === t && (t = A.BUNDLE_NAME.RESOURCES);
                        var n = yield rd.Bundle.loadBundle(t);
                        return this._loadAsset(n, e + "/texture", u);
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                }(), r.loadJsonAsset = function() {
                    var e = n(function*(e, t) {
                        void 0 === t && (t = A.BUNDLE_NAME.RESOURCES);
                        var n = yield rd.Bundle.loadBundle(t);
                        return this._loadAsset(n, e, c);
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                }(), r.loadTextAsset = function() {
                    var e = n(function*(e, t) {
                        void 0 === t && (t = A.BUNDLE_NAME.RESOURCES);
                        var n = yield rd.Bundle.loadBundle(t);
                        return this._loadAsset(n, e, d);
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                }(), r.loadSkybox = function() {
                    var e = n(function*(e, t) {
                        void 0 === t && (t = A.BUNDLE_NAME.RESOURCES);
                        var n = yield rd.Bundle.loadBundle(t);
                        return this._loadAsset(n, e + "/textureCube", l);
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                }(), r.loadAudioClip = function() {
                    var e = n(function*(e, t, n) {
                        void 0 === t && (t = !1), void 0 === n && (n = A.BUNDLE_NAME.RESOURCES);
                        var r = yield rd.Bundle.loadBundle(n);
                        return this._loadAsset(r, e, f, null, t);
                    });
                    return function(t, n, r) {
                        return e.apply(this, arguments);
                    };
                }(), r._loadAsset = function(e, t, n, r, s) {
                    var o = this;
                    void 0 === s && (s = !1);
                    var a = this.getAsset(t);
                    if (a) return Promise.resolve(a);
                    if (this._loadingResInfo[t]) return this._loadingResInfo[t];
                    var u = new Promise(function(a, u) {
                        var c = function(i, s) {
                            if (i) return console.error("加载" + n.name + "出错", JSON.stringify(i)), void u(i);
                            r && (s = r(s)), o.addAsset(t, s, e), a(s), delete o._loadingResInfo[t];
                        };
                        if (s) {
                            var d = ".png";
                            "Texture2D" === n.name ? d = ".png" : "AudioClip" === n.name && (d = ".mp3"), i.loadRemote(t, {
                                ext: d
                            }, c);
                        } else e.load(t, n, c);
                    });
                    return this._loadingResInfo[t] = u;
                }, r.getAsset = function(e) {
                    return this._cacheAssetDic.get(e);
                }, r.hasAsset = function(e) {
                    return this._cacheAssetDic.containsKey(e);
                }, r.addAsset = function(e, t, n) {
                    t && t.isValid ? (t.addRef(), this._cacheAssetDic.set(e, t), this._cacheBundleDic.set(e, n)) : console.error("添加资源失败, 资源不可用:" + e);
                }, r.releaseAsset = function(e, t) {
                    var n, r = this.getAsset(e);
                    r && (r.decRef(), delete this._cacheAssetDic[e], 0 === r.refCount && (null === (n = this._cacheBundleDic.get(e)) || void 0 === n || n.release(e, t)));
                }, r.removeAsset = function(e) {
                    this._cacheAssetDic.containsKey(e) && (this._cacheAssetDic.get(e).decRef(!1), this._cacheAssetDic.remove(e));
                }, r.clearCache = function() {
                    for (var e = 0, t = this._cacheAssetDic.length; e < t; e++) {
                        var n = this._cacheAssetDic[e];
                        i.releaseAsset(n), n.destroy();
                    }
                    this._cacheAssetDic.clear();
                }, e;
            }();
            t(_, "TAG", "BenzAssetManager"), t(_, "MAX_RETRY_COUNT", 3), t(_, "_instance", new _()), 
            void 0 === window.rd && (window.rd = {});
            var E = e("default", _.getInstance());
            window.rd.Asset = E, r._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/Loading.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./ConstantCommon.ts", "./RDCommand.ts", "./RDPlatformParam.ts", "./RDStatisticsManager.ts", "./UIGBase.ts" ], function(o) {
    "use strict";
    var t, a, e, s, r, i, n, d, c, u, l, h, _, f, m, p, v, P, A, D, S;
    return {
        setters: [ function(o) {
            t = o.defineProperty, a = o.inheritsLoose, e = o.assertThisInitialized;
        }, function(o) {
            s = o.cclegacy, r = o._decorator, i = o.ProgressBar, n = o.Label, d = o.game, c = o.sys, 
            u = o.SpriteFrame, l = o.Prefab, h = o.AudioClip, _ = o.TextAsset, f = o.director, 
            m = o.find;
        }, function(o) {
            p = o.Log;
        }, function(o) {
            v = o.ConstantCommon;
        }, function(o) {
            P = o.RDCommand;
        }, function(o) {
            A = o.RDPlatformParam;
        }, function(o) {
            D = o.CustomEventID;
        }, function(o) {
            S = o.UIGBase;
        } ],
        execute: function() {
            var y, b, N;
            s._RF.push({}, "ebfd3du0FFGdqzrhH0vnMwN", "Loading", void 0);
            var L = r.ccclass;
            o("Loading", L("Loading")((N = b = function(o) {
                function s() {
                    for (var a, s = arguments.length, r = new Array(s), i = 0; i < s; i++) r[i] = arguments[i];
                    return a = o.call.apply(o, [ this ].concat(r)) || this, t(e(a), "_age", void 0), 
                    t(e(a), "_authorInf", void 0), t(e(a), "_loadProgress", null), t(e(a), "_subpackageProgress", .7), 
                    t(e(a), "_startTime", 0), a;
                }
                a(s, o);
                var r = s.prototype;
                return r.onLoad = function() {
                    this._loadProgress = rd.Utils.getNodeComponent(this.node, "progress", i), g.App.initPlatfom(!0), 
                    this._age = rd.Utils.registerButtonEvent(this.node, "age", this.showAgeDialog, this), 
                    this._age.active = !1, this._authorInf = rd.Utils.getNodeComponent(this.node, "authorInf", n);
                    this._authorInf.node.active = false;
                }, r.start = function() {
                    this._startTime = new Date().getTime(), this._loadSubpackage(), d.addPersistRootNode(this.node), 
                    rd.Event.on(v.EVENT_TYPE.MAP_LOAD_FINISH, this._removeLoadingNode, this);
                }, r._loadSubpackage = function() {
                    var o = this;
                    p.log("分包开始=="), rd.Platform.LoadSubpackageTask(function(t) {
                        var a = t.progress / 100 * o._subpackageProgress;
                        o._loadProgress.progress = a < .3 ? .3 : a, p.debug(s.TAG, "分包加载中..." + t.progress);
                    }, function() {
                        p.log(s.TAG, "分包加载成功!"), o._loadProgress.progress = o._subpackageProgress, rd.Stats.customEvent(D.custom_user_subpackages, {
                            steps: "分包成功"
                        }), g.App.init(function() {
                            o._age.active = rd.Option.ageShow, o._authorInf.string = "著作权人:" + rd.Platform.HeyGameParam.authorName + "  著作登记号:" + rd.Platform.HeyGameParam.authorCode,
                            o.showPrivacyDialog();
                        });
                    }, function(o) {
                        rd.Stats.customEvent(D.custom_user_subpackages, {
                            steps: "分包失败"
                        }), p.debug(s.TAG, "分包加载失败!" + JSON.stringify(o));
                    });
                }, r.showPrivacyDialog = function() {
                    var o = this;
                    p.log(s.TAG, "是否已经同意隐私政策!", rd.Platform.isShowPrivacy()), c.isNative || rd.GameDataModel.isPrivacyAgree || !rd.Platform.isShowPrivacy() ? this._loadResource() : rd.UI.showDialog("adUI/privacyPolicy", !1, function() {
                        o._loadResource();
                    });
                }, r.showAgeDialog = function() {
                    console.log("适龄提醒"), rd.Platform.showAgeDialog();
                }, r._loadResource = function() {
                    this._loadSpriteFrame();
                }, r._loadSpriteFrame = function() {
                    var o = this;
                    rd.Asset.loadResDirOrArray("spriteFrame/", u, "texture", function() {
                        o._loadPrefabResource();
                    }, function(t) {
                        var a = o._subpackageProgress;
                        o._loadProgress.progress = a + t * (1 - a) / 2;
                    });
                }, r._loadPrefabResource = function() {
                    var o = this;
                    this._subpackageProgress = this._loadProgress.progress;
                    rd.Asset.loadResDirOrArray([], l, null, function() {
                        o._loadAudioClip();
                    }, function(t) {
                        var a = o._subpackageProgress, e = a + t * (1 - a);
                        e <= .99 && (o._loadProgress.progress = e);
                    });
                }, r._loadAudioClip = function() {
                    rd.Asset.loadResDirOrArray("sound/", h, v.BUNDLE_NAME.AUDIO, this._loadTextData.bind(this));
                }, r._loadTextData = function() {
                    var o = this;
                    rd.Asset.loadResDirOrArray("data/", _, null, function(t) {
                        t.forEach(function(o) {
                            return rd.Csv.addTable(o.name, o.text);
                        }), o._loadProgress.progress = 1, o.showSplash();
                    });
                }, r._gotoGame = function() {
                    g.App.initLocalData(), rd.Platform.sendData(P.CMD_SDK_LOGIN, {
                        gameId: A.GAMEID,
                        nickName: "",
                        headUrl: "",
                        headBox: ""
                    }), f.loadScene("game", function(o, t) {
                        rd.App.addAdLayer();
                    });
                }, r.showSplash = function() {
                    var o = this, t = new Date().getTime() - this._startTime, a = Math.max(rd.Option.loadingDelay - t / 1e3, 0);
                    console.log("加载花费时间_" + t + "_毫秒_" + a), this.scheduleOnce(function() {
                        if (rd.Platform.isShowNativeSplash()) {
                            var t = m("Canvas");
                            rd.Stats.customEvent(D.custom_churn_native_splash, {
                                steps: "开启原生开屏"
                            }), rd.Ads.showNativeSplash(t, function() {
                                rd.Ads.hideNativeAd(t, "nativeSplashADPrefab"), rd.Stats.customEvent(D.custom_churn_native_splash, {
                                    steps: "正常原生开屏"
                                }), o._gotoGame();
                            }, null);
                        } else o._gotoGame();
                    }, a);
                }, r._removeLoadingNode = function() {
                    d.removePersistRootNode(this.node), this.node.destroy(), rd.Event.off(v.EVENT_TYPE.MAP_LOAD_FINISH, this._removeLoadingNode, this);
                }, s;
            }(S), t(b, "TAG", "Loading"), y = N)) || y);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/AppBase.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./SingletonBase.ts", "./RDCommand.ts", "./RDPlatformParam.ts" ], function(e) {
    "use strict";
    var t, n, i, a, o, r, s, u, d;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, n = e.defineProperty, i = e.assertThisInitialized, a = e.createClass;
        }, function(e) {
            o = e.cclegacy;
        }, function(e) {
            r = e.Log;
        }, function(e) {
            s = e.SingletonBase;
        }, function(e) {
            u = e.RDCommand;
        }, function(e) {
            d = e.RDPlatformParam;
        } ],
        execute: function() {
            o._RF.push({}, "ecf36OrpHdB1JsR7aKOXO2m", "AppBase", void 0);
            var c = function(e) {
                function o() {
                    for (var t, a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [ this ].concat(o)) || this, n(i(t), "_isInHomePage", !0), 
                    n(i(t), "isLoadingMusic", !1), t;
                }
                t(o, e);
                var s = o.prototype;
                return s.init = function(e) {
                    rd.UI.init(), rd.Option.init(function() {
                        rd.Platform.init(function() {
                            rd.GameDataModel.init(), rd.GameList.init(), null == e || e();
                        });
                    });
                }, s.initLocalData = function() {
                    rd.Platform.sdk.loginGame();
                }, s.addAdLayer = function() {
                    rd.UI.createAdLayer();
                }, s.setPhoneVibrate = function(e) {
                    void 0 === e && (e = !1), rd.GameDataModel.isVibrate && rd.Platform.sendData(u.CMD_SHAKE, e ? 100 : null);
                }, a(o, [ {
                    key: "playTimes",
                    get: function() {
                        return rd.GameDataModel.playTimes;
                    },
                    set: function(e) {
                        rd.GameDataModel.playTimes = e;
                    }
                }, {
                    key: "isInHomePage",
                    get: function() {
                        return r.log("AppBase isInHomePage", "游戏中", this._isInHomePage), this._isInHomePage;
                    },
                    set: function(e) {
                        this._isInHomePage = e;
                    }
                }, {
                    key: "GameId",
                    get: function() {
                        return d.GAMEID;
                    }
                }, {
                    key: "authorInf",
                    get: function() {
                        return "";
                        return "著作权人:" + d.ADPARAM.heyGame.authorName + "  著作登记号:" + d.ADPARAM.heyGame.authorCode;
                    }
                } ]), o;
            }(s);
            void 0 === window.rd && (window.rd = {});
            var l = e("default", c.getInstance());
            window.rd.App = l, o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/Bullet.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts" ], function(t) {
    "use strict";
    var e, o, s, i, r, n, a, l, c, u, h;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, o = t.defineProperty, s = t.assertThisInitialized, i = t.createClass;
        }, function(t) {
            r = t.cclegacy, n = t._decorator, a = t.v3, l = t.Vec3, c = t.Node, u = t.Component;
        }, function(t) {
            h = t.Constants;
        } ],
        execute: function() {
            var _;
            r._RF.push({}, "f0ddcXBEiRIAJWfQUjxkGPx", "Bullet", void 0);
            var d = n.ccclass, p = a();
            t("Bullet", d("Bullet")(_ = function(t) {
                function r() {
                    for (var e, i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                    return e = t.call.apply(t, [ this ].concat(r)) || this, o(s(e), "_moveTarget", null), 
                    o(s(e), "_targetWPos", a()), e;
                }
                e(r, t);
                var n = r.prototype;
                return n._updateBulletPos = function(t) {
                    if (this._moveTarget) {
                        if (this._moveTarget.parent) {
                            var e = this._moveTarget.worldPosition;
                            this._targetWPos.set(e.x, e.y + h.ZOMBIE_HEIGHT_OFFSET, e.z);
                        }
                        l.subtract(p, this._targetWPos, this.node.worldPosition), p.multiplyScalar(15 * t), 
                        this.node.translate(p, c.NodeSpace.WORLD), this._checkZombieDist();
                    }
                }, n._checkZombieDist = function() {
                    l.squaredDistance(this._targetWPos, this.node.worldPosition) > 1 || (this._moveTarget.parent && rd.Event.emit(h.EVENT_TYPE.KILL_ZOMBIE, this._moveTarget, !0), 
                    rd.Pool.putNode(this.node), this._moveTarget = null);
                }, n.update = function(t) {
                    this._updateBulletPos(t);
                }, i(r, [ {
                    key: "moveTarget",
                    set: function(t) {
                        this._moveTarget = t;
                    }
                } ]), r;
            }(u)) || _);
            r._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDAudioWechat.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./RDAudioBase.ts" ], function(t) {
    "use strict";
    var e, u, i;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            u = t.cclegacy;
        }, function(t) {
            i = t.RDAudioBase;
        } ],
        execute: function() {
            u._RF.push({}, "f31937hzKFPlLS3BlAQtOtM", "RDAudioWechat", void 0);
            t("RDAudioWechat", function(t) {
                function u(e, u) {
                    return t.call(this, e, u) || this;
                }
                return e(u, t), u;
            }(i));
            u._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/ClickVideoBoxUI.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./ConstantCommon.ts", "./UIBase.ts" ], function(t) {
    "use strict";
    var i, s, e, o, r, c, n, l, a;
    return {
        setters: [ function(t) {
            i = t.inheritsLoose, s = t.defineProperty, e = t.assertThisInitialized;
        }, function(t) {
            o = t.cclegacy, r = t._decorator, c = t.ProgressBar, n = t.macro;
        }, function(t) {
            l = t.ConstantCommon;
        }, function(t) {
            a = t.UIBase;
        } ],
        execute: function() {
            var h;
            o._RF.push({}, "f7151/sPJRFFKKE/k644Ul3", "ClickVideoBoxUI", void 0);
            var _ = r.ccclass;
            t("ClickVideoBoxUI", _("ClickVideoBoxUI")(h = function(t) {
                function o() {
                    for (var i, o = arguments.length, r = new Array(o), c = 0; c < o; c++) r[c] = arguments[c];
                    return i = t.call.apply(t, [ this ].concat(r)) || this, s(e(i), "_callback", null), 
                    s(e(i), "_clickTime", 0), s(e(i), "_progress", void 0), s(e(i), "_closeBtn", void 0), 
                    s(e(i), "_startTime", void 0), s(e(i), "_click", void 0), s(e(i), "_click1", void 0), 
                    i;
                }
                i(o, t);
                var r = o.prototype;
                return r.onLoad = function() {
                    this.centerUI = rd.Utils.getNodeByName(this.node, "centerUI"), this._click = rd.Utils.registerButtonEvent(this.centerUI, "click", this._onStartButton, this), 
                    this._click1 = rd.Utils.registerButtonEvent(this.centerUI, "click2", this._onVideoButton, this), 
                    this._progress = rd.Utils.getNodeComponent(this.centerUI, "progressBar", c), this.initBgOpacity(), 
                    this.zIndex = l.UI_DIALOG_Z_INDEX.POPUP, this._closeBtn = rd.Utils.registerButtonEvent(this.centerUI, "closeBtn", this._onClose, this), 
                    this._closeBtn.active = !1;
                }, r.show = function(t) {
                    var i;
                    if (this._callback = t, this._progress.progress = 0, !rd.Option.systemWXSwitch) return null === (i = this._callback) || void 0 === i || i.call(this), 
                    void rd.UI.hideDialog(l.UI_DIALOG_NAME.CLICKVIDEOBOXUI, !0);
                    rd.Stats.customEvent("showDialog", {
                        curDialog: this.getUIName()
                    }), this.scheduleOnce(function() {
                        rd.Ads.hideCustomAdBannerTop(), rd.Ads.hideCustomAdIcon(), rd.Ads.hideBannerAd();
                    }, 1), rd.Event.emit(l.EVENT_TYPE.GAME_CONTINUE, !0), this._closeBtn.active = !1, 
                    this._click1.active = !1, this._click.active = !0, this.schedule(this._updateProgress, .5, n.REPEAT_FOREVER, .1);
                }, r.hide = function() {
                    this._progress.progress = 0, this._clickTime = 0, t.prototype.hide.call(this), this.unschedule(this._updateProgress);
                }, r.getUIName = function() {
                    return "点击宝箱";
                }, r._updateProgress = function() {
                    this._progress.progress <= 0 || (this._progress.progress = Math.max(this._progress.progress - .02, 0));
                }, r._onStartButton = function() {
                    rd.UI.isUIAnimPlaying() || (this._clickTime++, this._progress.progress += .1, this._progress.progress >= .5 && (this._closeBtn.active = !0, 
                    this._click1.active = !0, this._click.active = !1));
                }, r._onVideoButton = function() {
                    var t = this;
                    rd.UI.isUIAnimPlaying() || (this._clickTime++, this._progress.progress += .1, this._progress.progress >= .5 && (this._closeBtn.active = !0, 
                    this.showRewardAd({
                        success: function() {
                            var i;
                            t._progress.progress = 0, t._click1.active = !1, t._click.active = !0, null === (i = t._callback) || void 0 === i || i.call(t), 
                            rd.UI.hideDialog(l.UI_DIALOG_NAME.CLICKVIDEOBOXUI, !0), rd.Event.emit(l.EVENT_TYPE.GOLD_ANIM, 1e3);
                        },
                        fail: function() {
                            t._click1.active = !1, t._click.active = !0;
                        }
                    })));
                }, r._onClose = function() {
                    this._playScaleOutAnim();
                }, r._playScaleOutAnim = function() {
                    var t;
                    this._progress.progress = 0, null === (t = this._callback) || void 0 === t || t.call(this), 
                    rd.UI.hideDialog(l.UI_DIALOG_NAME.CLICKVIDEOBOXUI, !0);
                }, o;
            }(a)) || h);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDAndroidPlatform.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./RDCommand.ts", "./RDPlatformParam.ts", "./RDPlatformType.ts", "./RDPlatform.ts" ], function(a) {
    "use strict";
    var t, i, n, e, o, r, s, d, c;
    return {
        setters: [ function(a) {
            t = a.inheritsLoose, i = a.defineProperty, n = a.assertThisInitialized;
        }, function(a) {
            e = a.cclegacy;
        }, function(a) {
            o = a.Log;
        }, function(a) {
            r = a.RDCommand;
        }, function(a) {
            s = a.RDPlatformParam;
        }, function(a) {
            d = a.RDPlatformType;
        }, function(a) {
            c = a.RDPlatform;
        } ],
        execute: function() {
            e._RF.push({}, "f8f38JAT55B9JKBXxL6Pija", "RDAndroidPlatform", void 0);
            a("RDAndroidPlatform", function(a) {
                function e(t) {
                    var e;
                    return e = a.call(this, t) || this, i(n(e), "platformName", "4399"), i(n(e), "android_platName", "office"), 
                    i(n(e), "android_versionName", "1.0.0"), i(n(e), "android_platId", "1050"), e.platformName = s.ADPARAM[d.Android.toString()].platformName, 
                    e.android_platName = window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "getPlatName", "(Ljava/lang/String;)Ljava/lang/String;", "test"), 
                    e.android_versionName = window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "getVersionName", "(Ljava/lang/String;)Ljava/lang/String;", "test"), 
                    e.android_platId = window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "getPlatId", "(Ljava/lang/String;)Ljava/lang/String;", "test"), 
                    e;
                }
                t(e, a);
                var c = e.prototype;
                return c.initAD = function() {
                    this._hasShortcutInstalled = !0;
                }, c.isReviewed = function() {
                    var a = window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "getDeviceId", "(Ljava/lang/String;)Ljava/lang/String;", "test");
                    if ((o.debug(this.constructor.name, "设备id", a), rd.Option.config && rd.Option.config.android && rd.Option.config.android.deviceIds) && -1 != rd.Option.config.android.deviceIds.indexOf(a)) return !0;
                    return !1;
                }, c._showBannerAd = function(a) {
                    if (!this.isReviewed()) {
                        o.debug(this.constructor.name, "Android show Banner");
                        var t = {
                            type: r.CMD_SHOW_BANNER_AD,
                            platformName: this.platformName,
                            config: rd.Option.config,
                            nativeType: a.nativeType ? a.nativeType : 1,
                            uiName: a.uiName
                        };
                        window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "JsToJava", "(Ljava/lang/String;)V", JSON.stringify(t));
                    }
                }, c._hideBannerAd = function(a) {
                    if (!this.isReviewed()) {
                        o.debug(this.constructor.name, "Android hide Banner");
                        var t = {
                            type: r.CMD_HIDE_BANNER_AD,
                            platformName: this.platformName
                        };
                        window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "JsToJava", "(Ljava/lang/String;)V", JSON.stringify(t));
                    }
                }, c._showVideo = function(a) {
                    if (this.isReviewed()) this._rewardCaback && this._rewardCaback.success(null); else {
                        o.debug(this.constructor.name, "Android show video");
                        var t = s.ADPARAM[d.Android.toString()].video_id, i = {
                            type: r.CMD_SHOW_REWARD_VIDEO_AD,
                            videoId: t,
                            platformName: this.platformName,
                            config: rd.Option.config
                        };
                        window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "JsToJava", "(Ljava/lang/String;)V", JSON.stringify(i));
                    }
                }, c._showIntertitalAd = function(a) {
                    if (this.isReviewed()) return !1;
                    o.debug(this.constructor.name, "Android show video");
                    var t = {
                        type: r.CMD_SHOW_INTERSTITIAL_VIDEO_AD,
                        platformName: this.platformName,
                        config: rd.Option.config,
                        param: a
                    };
                    window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "JsToJava", "(Ljava/lang/String;)V", JSON.stringify(t));
                }, c._nativeAdClick = function(a) {
                    var t = {
                        type: r.CMD_ClICK_NATIVE_AD,
                        platformName: this.platformName,
                        param: a
                    };
                    window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "JsToJava", "(Ljava/lang/String;)V", JSON.stringify(t));
                }, c._vibrateShort = function(a) {
                    var t = {
                        type: r.CMD_SHAKE,
                        platformName: this.platformName
                    };
                    window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "JsToJava", "(Ljava/lang/String;)V", JSON.stringify(t));
                }, c._showGamePortalAd = function(a) {
                    o.debug(this.constructor.name, "_showGamePortalAd");
                    var t = {
                        type: r.CMD_SHOW_OFFICE_PORTAL_AD,
                        platformName: this.platformName
                    };
                    window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "JsToJava", "(Ljava/lang/String;)V", JSON.stringify(t));
                }, c.getAndroidPlatName = function() {
                    return o.debug(this.constructor.name, "当前安卓平台", this.android_platName), this.android_platName;
                }, c.getVersionName = function() {
                    return this.android_versionName;
                }, c._login = function(t) {
                    console.log("_login", JSON.stringify(t)), a.prototype._login.call(this, t);
                }, c.isShowNativeAd = function(a) {
                    void 0 === a && (a = !1);
                    var t = window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "isShowNativeAd", "(Ljava/lang/String;)Ljava/lang/String;", a ? "0" : "1");
                    return "0" === t;
                }, c.isMoreGameBtn = function() {
                    var a = window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "isMoreGameBtn", "(Ljava/lang/String;)Ljava/lang/String;", "test");
                    return o.debug(this.constructor.name, "更多游戏按钮", a), "0" === a;
                }, c.openPrivacyPolicy = function() {
                    var a = {
                        type: r.CMD_SDK_PRIVACY_POLICY
                    };
                    window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "JsToJava", "(Ljava/lang/String;)V", JSON.stringify(a));
                }, c.openAgeDialog = function() {
                    var a = {
                        type: r.CMD_SDK_AGE
                    };
                    window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "JsToJava", "(Ljava/lang/String;)V", JSON.stringify(a));
                }, c.isShowPrivacy = function() {
                    var a = window.jsb.reflection.callStaticMethod("com/rdgame/app_base/jni/JsbApi", "showPrivacy", "(Ljava/lang/String;)Ljava/lang/String;", "test");
                    return o.debug(this.constructor.name, "是否显示隐私政策", a), "0" === a;
                }, c.isShowContact = function() {
                    return "oppo_android" === this.getAndroidPlatName();
                }, c.isShowNativeSplash = function() {
                    return !1;
                }, c.getPlatId = function() {
                    return this.android_platId;
                }, e;
            }(c));
            e._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDAdsEntity.ts", [ "cc" ], function() {
    "use strict";
    var t;
    return {
        setters: [ function(n) {
            t = n.cclegacy;
        } ],
        execute: function() {
            t._RF.push({}, "fa264C/JrBAD40ykL9wnnCE", "RDAdsEntity", void 0), t._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/RDPlatformType.ts", [ "cc" ], function(e) {
    "use strict";
    var a;
    return {
        setters: [ function(e) {
            a = e.cclegacy;
        } ],
        execute: function() {
            var n;
            e("RDPlatformType", void 0), a._RF.push({}, "fa3fdfANi1BPo3fvdAqM+Vn", "RDPlatformType", void 0), 
            function(e) {
                e[e.None = -1] = "None", e[e.WeixinMinGame = 1] = "WeixinMinGame", e[e.TTMinGame = 2] = "TTMinGame", 
                e[e.VIVOGame = 3] = "VIVOGame", e[e.OPPOGame = 4] = "OPPOGame", e[e.TencentGTD7377 = 5] = "TencentGTD7377", 
                e[e.CoralGame = 6] = "CoralGame", e[e.Android = 7] = "Android", e[e.Ios = 8] = "Ios", 
                e[e.KG = 9] = "KG", e[e.OPPOMusicGame = 10] = "OPPOMusicGame", e[e.XMGame = 11] = "XMGame", 
                e[e.Game4399 = 12] = "Game4399", e[e.HUAWEI = 13] = "HUAWEI", e[e.Facebook = 14] = "Facebook", 
                e[e.Web = 15] = "Web";
            }(n || (n = e("RDPlatformType", {}))), a._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/VehicleEntity.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts" ], function(e) {
    "use strict";
    var t, n, i, s, o, a, r, h, l, c, _, d, m, p;
    return {
        setters: [ function(e) {
            t = e.inheritsLoose, n = e.defineProperty, i = e.assertThisInitialized, s = e.asyncToGenerator;
        }, function(e) {
            o = e.cclegacy, a = e._decorator, r = e.MeshRenderer, h = e.Animation, l = e.instantiate, 
            c = e.Node, _ = e.math, d = e.Component;
        }, function(e) {
            m = e.Constants;
        }, function(e) {
            p = e.ConstantCommon;
        } ],
        execute: function() {
            var u;
            o._RF.push({}, "fa473CkHxZDjIUr+r9glXUd", "VehicleEntity", void 0);
            var y = a.ccclass;
            e("VehicleEntity", y("VehicleEntity")(u = function(e) {
                function o() {
                    for (var t, s = arguments.length, o = new Array(s), a = 0; a < s; a++) o[a] = arguments[a];
                    return t = e.call.apply(e, [ this ].concat(o)) || this, n(i(t), "_modelMesh", null), 
                    n(i(t), "_basketMesh", null), n(i(t), "_wheelsAnim", null), n(i(t), "_frontWheelsArr", []), 
                    n(i(t), "_moneyStack", null), n(i(t), "_vehicleLv", 0), n(i(t), "_moneyStashTime", 0), 
                    t;
                }
                t(o, e);
                var a = o.prototype;
                return a.start = function() {
                    var e = rd.Utils.getNodeByName(this.node, "model");
                    this._modelMesh = e.getComponent(r);
                    var t = e.getChildByName("basket");
                    t && (this._basketMesh = t.getComponent(r)), this._wheelsAnim = rd.Utils.getNodeComponent(this.node, "wheels", h);
                    var n = rd.Utils.getNodeByName(this._wheelsAnim.node, "leftFront"), i = rd.Utils.getNodeByName(this._wheelsAnim.node, "rightFront");
                    this._frontWheelsArr.push(n, i), this._moneyStack = this.node.getChildByName("moneyStack"), 
                    this._vehicleLv = parseInt(this.node.name.slice("vehicleLv".length)), this._updateTexture(!0), 
                    this._initWeaponPos(), this._initTireMark(), this._registerEvent(!0);
                }, a.setWheelsAnim = function(e) {
                    var t = e ? "play" : "stop";
                    this._wheelsAnim[t]();
                }, a._updateTexture = function() {
                    var e = s(function*(e) {
                        if (void 0 === e && (e = !1), this._vehicleLv === g.App.VehicleData.level) {
                            var t = g.App.VehicleData.speedLv, n = yield rd.Asset.loadTexture("vehicle/level" + g.App.VehicleData.level + "/speed" + t, "texture");
                            if (this._modelMesh && this._modelMesh.material.setProperty("mainTexture", n), this._basketMesh) {
                                var i = yield rd.Asset.loadTexture("vehicle/basket/speed" + t, "texture");
                                this._basketMesh && this._basketMesh.material.setProperty("mainTexture", i);
                            }
                            !e && rd.Event.emit(m.EVENT_TYPE.PLAY_UPGRADE_ANIM);
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(), a._initWeaponPos = function() {
                    var e = this.node.getChildByName("sawPos"), t = this.node.getChildByName("gunPos");
                    rd.Event.emit(m.EVENT_TYPE.UPDATE_SAW_POS, e), rd.Event.emit(m.EVENT_TYPE.UPDATE_GUN_POS, t);
                }, a._initTireMark = function() {
                    var e = rd.Utils.getNodeByName(this.node, "wheels"), t = rd.Utils.getNodeByName(e, "mark");
                    rd.Utils.getNodeByName(e, "rightBack").addChild(l(t));
                }, a._registerEvent = function(e) {
                    var t = e ? "on" : "off";
                    rd.Event[t](m.EVENT_TYPE.PLAY_VEHICLE_ANIM, this._playVehicleAnim, this), rd.Event[t](m.EVENT_TYPE.CREATE_MONEY_STACK, this._createMoneyStack, this), 
                    rd.Event[t](m.EVENT_TYPE.UPGRADE_VEHICLE_SPD, this._updateTexture, this), rd.Event[t](m.EVENT_TYPE.BACK_TO_GAME_HUB, this._resetWheels, this), 
                    rd.Event[t](c.EventType.TOUCH_END, this._stopWheelsAnim, this);
                }, a._playVehicleAnim = function(e) {
                    e *= 5, e = _.clamp(e, -18, 18), this._frontWheelsArr.forEach(function(t) {
                        return t.setRotationFromEuler(0, e, 0);
                    }), this._wheelsAnim.getState("vehicleWheels").isPlaying || this._wheelsAnim.play();
                }, a._createMoneyStack = function() {
                    var e = this;
                    rd.Asset.loadPrefab("game/stackMoney", p.BUNDLE_NAME.PREFAB).then(function(t) {
                        var n = e._getStackData(), i = n.stackIdx, s = n.heightIdx, o = rd.Pool.getNode(t, e._moneyStack.children[i]);
                        o.setPosition(0, g.App.MoneyStack.intervalHeight * s, 0), o.setRotationFromEuler(0, 0, 0), 
                        g.App.MoneyStack.spawnCnt += 1;
                    });
                }, a._resetWheels = function() {
                    this._frontWheelsArr.forEach(function(e) {
                        return e.setRotationFromEuler(0, 0, 0);
                    });
                }, a._getStackData = function() {
                    var e = g.App.MoneyStack, t = e.maxSingleStackCnt, n = e.spawnCnt;
                    return {
                        stackIdx: Math.floor(n / t),
                        heightIdx: n % t
                    };
                }, a._stopWheelsAnim = function() {
                    this._wheelsAnim.stop();
                }, a._playMoneyStashAnim = function(e) {
                    !g.App.GameData.isMoneyStash || g.App.MoneyStack.moneyCnt <= 0 || g.App.MoneyStack.spawnCnt <= 0 ? this._moneyStashTime = 0 : (this._moneyStashTime <= 0 && (this._moneyStashTime = .025, 
                    this._reduceMoneyStack()), this._moneyStashTime -= e);
                }, a._reduceMoneyStack = function() {
                    var e;
                    g.App.MoneyStack.moneyCnt -= 1, g.App.MoneyStack.spawnCnt -= 1, g.App.Account.gameMoney += 1;
                    var t = this._getStackData(), n = t.stackIdx, i = t.heightIdx, s = null === (e = this._moneyStack.children[n]) || void 0 === e ? void 0 : e.children[i];
                    s && rd.Event.emit(m.EVENT_TYPE.PLAY_MONEY_STASH, s);
                }, a.update = function(e) {
                    this._playMoneyStashAnim(e);
                }, a.onDestroy = function() {
                    this._registerEvent(!1);
                }, o;
            }(d)) || u);
            o._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/EffectManager.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./ConstantCommon.ts", "./ZombieBoom.ts" ], function(n) {
    "use strict";
    var o, t, e, i, s, a, r, c, f, E, l;
    return {
        setters: [ function(n) {
            o = n.inheritsLoose, t = n.defineProperty, e = n.assertThisInitialized, i = n.asyncToGenerator;
        }, function(n) {
            s = n.cclegacy, a = n._decorator, r = n.Component, c = n.ParticleUtils;
        }, function(n) {
            f = n.Constants;
        }, function(n) {
            E = n.ConstantCommon;
        }, function(n) {
            l = n.ZombieBoom;
        } ],
        execute: function() {
            var _;
            s._RF.push({}, "fa4b4mq2Q1KGqcooWXTV5Ip", "EffectManager", void 0);
            var u = a.ccclass;
            n("EffectManager", u("EffectManager")(_ = function(n) {
                function s() {
                    for (var o, i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                    return o = n.call.apply(n, [ this ].concat(s)) || this, t(e(o), "_moneyInBankCDTime", 0), 
                    o;
                }
                o(s, n);
                var a = s.prototype;
                return a.onLoad = function() {
                    this._registerEvent(!0);
                }, a._registerEvent = function(n) {
                    var o = n ? "on" : "off";
                    rd.Event[o](f.EVENT_TYPE.PLAY_ZOMBIE_BOOM, this._playZombieBoomEfx, this), rd.Event[o](f.EVENT_TYPE.PLAY_BOSS_BOOM, this._playZombieBossBoomEfx, this), 
                    rd.Event[o](f.EVENT_TYPE.PLAY_COLLECT_MONEY, this._playCollectMoneyEfx, this), rd.Event[o](f.EVENT_TYPE.PLAY_MONEY_IN_BANK, this._playMoneyInBankEfx, this);
                }, a._playZombieBoomEfx = function(n, o) {
                    this._loadEffect("zombieBoom", n, function(n) {
                        (n.getComponent(l) || n.addComponent(l)).init(o);
                    }, this.node, 1.05);
                }, a._playZombieBossBoomEfx = function(n) {
                    this._loadEffect("zombieBossBoom", n, function() {
                        rd.Event.emit(f.EVENT_TYPE.CREATE_BOMB, n, 8);
                    });
                }, a._playCollectMoneyEfx = function(n) {
                    this._loadEffect("collectMoney", n);
                }, a._playMoneyInBankEfx = function(n) {
                    this._moneyInBankCDTime > 0 || (this._moneyInBankCDTime = .15, this._loadEffect("moneyInBank", n));
                }, a._loadEffect = function() {
                    var n = i(function*(n, o, t, e, i) {
                        var s;
                        void 0 === t && (t = null), void 0 === e && (e = this.node), void 0 === i && (i = 1.5);
                        var a = yield rd.Asset.loadPrefab("effect/" + n, E.BUNDLE_NAME.PREFAB), r = rd.Pool.getNode(a, e);
                        r.setWorldPosition(o), null === (s = t) || void 0 === s || s(r), c.play(r), this.scheduleOnce(function() {
                            rd.Pool.putNode(r);
                        }, i);
                    });
                    return function(o, t, e, i, s) {
                        return n.apply(this, arguments);
                    };
                }(), a.update = function(n) {
                    this._moneyInBankCDTime > 0 && (this._moneyInBankCDTime -= n);
                }, a.onDestroy = function() {
                    this._registerEvent(!1);
                }, s;
            }(r)) || _);
            s._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/moveRand.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    "use strict";
    var i, e, o, n, s, r, d;
    return {
        setters: [ function(t) {
            i = t.inheritsLoose, e = t.defineProperty, o = t.assertThisInitialized;
        }, function(t) {
            n = t.cclegacy, s = t._decorator, r = t.view, d = t.Component;
        } ],
        execute: function() {
            var a;
            n._RF.push({}, "fbd191WFUZFoauAoNjFY1Xc", "moveRand", void 0);
            var l = s.ccclass;
            s.property, t("MoveRand", l("MoveRand")(a = function(t) {
                function n() {
                    for (var i, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
                    return i = t.call.apply(t, [ this ].concat(s)) || this, e(o(i), "_normalx", 1), 
                    e(o(i), "_normaly", -1), e(o(i), "_vx", 1), e(o(i), "_vy", 1), e(o(i), "_num", 0), 
                    e(o(i), "_delay", 0), i;
                }
                return i(n, t), n.prototype.update = function(t) {
                    this.node.setPosition(this.node.getPosition().x + this._vx, this.node.getPosition().y + this._vy, 0), 
                    this._delay += t, this._delay < .1 || (this._delay = 0, this.node.getWorldPosition().x >= r.getVisibleSize().width - 100 && (this._vx = -rd.Utils.random(10, 20) / 10), 
                    this.node.getWorldPosition().x <= 100 && (this._vx = rd.Utils.random(10, 20) / 10), 
                    this.node.getWorldPosition().y >= r.getVisibleSize().height - 100 && (this._vy = -rd.Utils.random(10, 20) / 10), 
                    this.node.getWorldPosition().y <= .6 * r.getVisibleSize().height && (this._vy = rd.Utils.random(10, 20) / 10));
                }, n;
            }(d)) || a);
            n._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/SawEntity.ts", [ "./_rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts" ], function(t) {
    "use strict";
    var e, n, r, i, o, s, a, c;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose, n = t.defineProperty, r = t.assertThisInitialized;
        }, function(t) {
            i = t.cclegacy, o = t._decorator, s = t.isValid, a = t.Component;
        }, function(t) {
            c = t.Constants;
        } ],
        execute: function() {
            var l;
            i._RF.push({}, "ffb684c4cdPbYJ5VDbdILVe", "SawEntity", void 0);
            var u = o.ccclass;
            t("SawEntity", u("SawEntity")(l = function(t) {
                function i() {
                    for (var e, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                    return e = t.call.apply(t, [ this ].concat(o)) || this, n(r(e), "_colliderComp", null), 
                    e;
                }
                e(i, t);
                var o = i.prototype;
                return o.start = function() {
                    this._colliderComp = g.App.ColliderData.setSawOrBombCollider(this.node), this._registerEvent(!0);
                }, o._registerEvent = function(t) {
                    var e = t ? "on" : "off";
                    this._colliderComp[e]("onTriggerEnter", this._onSawTriggerEnter, this);
                }, o._onSawTriggerEnter = function(t) {
                    if (s(t.otherCollider)) {
                        var e = t.otherCollider.node;
                        e.name.startsWith(c.COLLIDER_NAME.ZOMBIE) && e.parent && rd.Event.emit(c.EVENT_TYPE.KILL_ZOMBIE, e);
                    }
                }, o.onDestroy = function() {
                    this._registerEvent(!1);
                }, i;
            }(a)) || l);
            i._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/main", [ "./Constants.ts", "./WarCarMgr.ts", "./FadeMask.ts", "./Log.ts", "./ButtonComponent.ts", "./Bomb.ts", "./SingletonBase.ts", "./AgentMgr.ts", "./TaskManager.ts", "./ConstantCommon.ts", "./FadeInOutMgr.ts", "./RDCommand.ts", "./RDPlatformParam.ts", "./RDPlatformType.ts", "./ADMainPush.ts", "./ADBannerList.ts", "./ADDrawer.ts", "./NativeAds.ts", "./ADWxScreen.ts", "./ADDoubleScreen.ts", "./ADGameOver.ts", "./RDStatisticsManager.ts", "./AdsManager.ts", "./RDPlatform.ts", "./BannerAdBase.ts", "./BannerAdOppo.ts", "./VideoAdBase.ts", "./VideoAdOppo.ts", "./IntertitalAdBase.ts", "./IntertitalAdOppo.ts", "./NativeAdBase.ts", "./NativeAdOppo.ts", "./RDOppoMiniPlatform.ts", "./BannerAdHw.ts", "./GunData.ts", "./UIConstant.ts", "./ColliderData.ts", "./AgentUnit.ts", "./NavLine.ts", "./GameMoney.ts", "./Player.ts", "./PlayerMgr.ts", "./RectBounds.ts", "./QuadTree.ts", "./Zombie.ts", "./QuadTreeObject.ts", "./ZombieObject.ts", "./ZombieMgr.ts", "./MoneyMgr.ts", "./CameraMgr.ts", "./StackMoney.ts", "./GameHub.ts", "./GuideTips.ts", "./MapMgr.ts", "./GameControl.ts", "./Utils.ts", "./VehicleMgr.ts", "./constant-user.ts", "./IDataModel.ts", "./AccountData.ts", "./IntertitalAdWx.ts", "./NodePool.ts", "./RDIOSPlatform.ts", "./OptionsManager.ts", "./LookAtAdButton.ts", "./RocketData.ts", "./MoneyStack.ts", "./MapData.ts", "./BannerAdWx.ts", "./PolygenMask.ts", "./PoolManager.ts", "./RDKGPlatform.ts", "./ICannonScene.ts", "./AssetsUtils.ts", "./RDAudioBase.ts", "./RDAudioCocos.ts", "./CalculateUV.ts", "./cleanRenderer.ts", "./CameraFollow.ts", "./IntertitalAdHw.ts", "./VideoSelect.ts", "./UIBase.ts", "./UIGBase.ts", "./WarCarItem.ts", "./GarageItem.ts", "./GarageUI.ts", "./UIManager.ts", "./ICannonSharedBody.ts", "./ICannonRigidBody.ts", "./GameDataModel.ts", "./MoneyFly.ts", "./VideoAdHw.ts", "./NativeAdHw.ts", "./RDHuaWeiMiniPlatform.ts", "./IntertitalAdVivo.ts", "./WeaponItem.ts", "./popDialogUIManager.ts", "./Queue.ts", "./MoneyUI.ts", "./ZombieBoss.ts", "./AdBase.ts", "./CustomAdBase.ts", "./WeaponUI.ts", "./GameScore.ts", "./deviceInfo.ts", "./getLevenshteinDistance.ts", "./getGPUVersion.ts", "./error.ts", "./webgl-constants.ts", "./deobfuscateAppleGPU.ts", "./Benchmark.ts", "./Joystick.ts", "./WordTipsUI.ts", "./ListViewItem.ts", "./ListView.ts", "./AchievementData.ts", "./ICannonBoxShape.ts", "./CustomAdWx.ts", "./ADDialog.ts", "./BezierTween.ts", "./DragonBonesAttachUtil.ts", "./CsvManager.ts", "./MapLvItem.ts", "./NativeAdPc.ts", "./VideoAdPc.ts", "./BannerAdTt.ts", "./Dictionary.ts", "./AssetsPackageDefine.ts", "./JsonManager.ts", "./AssetsHelper.ts", "./AudioDownLoader.ts", "./VideoTipDialog.ts", "./GameUI.ts", "./GameData.ts", "./VehicleData.ts", "./FuelData.ts", "./SawData.ts", "./CustomMark.ts", "./AppManager.ts", "./DirectoryAsset.ts", "./BannerAdVivo.ts", "./VideoAdVivo.ts", "./CustomAdVivo.ts", "./RDVIVOMiniPlatform.ts", "./BannerAdPc.ts", "./RDCoralPlatform.ts", "./VideoAdWx.ts", "./TurntableUI.ts", "./RDLeaderboardEntity.ts", "./RDPCPlatform.ts", "./ZombieBoom.ts", "./ArcProgressBar.ts", "./Bullet.ts", "./GunMgr.ts", "./RDBundleManager.ts", "./RDAudioVivo.ts", "./QuadTreeNode.ts", "./RDTencentGDTPlatform.ts", "./RDXMMiniPlatform.ts", "./RDSocialManager.ts", "./WorldUI.ts", "./PushControl.ts", "./GameListManger.ts", "./VirtualButton.ts", "./Encode.ts", "./ClickBoxUI.ts", "./ICannonSphereShape.ts", "./RDWeiXinMiniPlatform.ts", "./SignInUI.ts", "./VideoAdTt.ts", "./RDTTMiniPlatform.ts", "./RDAudioAndroid.ts", "./PrivacyPolicy.ts", "./TextureManager.ts", "./GameEvents.ts", "./SawMgr.ts", "./QueueManager.ts", "./ADBombGame.ts", "./IntertitalAdTt.ts", "./HttpManager.ts", "./RDAndroidPlatform.ts", "./RD4399Platform.ts", "./RDPlatformManager.ts", "./RocketMgr.ts", "./ADScreen.ts", "./CommonUI.ts", "./RDAudioWechat.ts", "./RDAudioManager.ts", "./moreClick.ts", "./NativeAdVivo.ts", "./EventManager.ts", "./ADBannerVList.ts", "./SettingUI.ts", "./Base64.ts", "./SpriteFrameManager.ts", "./RDAsset.ts", "./TTButton.ts", "./CircleMask.ts", "./RichText.ts", "./ToastUI.ts", "./RDAssetManager.ts", "./Loading.ts", "./AppBase.ts", "./ClickVideoBoxUI.ts", "./RDAdsEntity.ts", "./VehicleEntity.ts", "./EffectManager.ts", "./moveRand.ts", "./SawEntity.ts" ], function() {
    "use strict";
    return {
        setters: [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
        execute: function() {}
    };
});

(function(r) {
    r("virtual:///prerequisite-imports/main", "chunks:///_virtual/main");
})(function(mid, cid) {
    System.register(mid, [ cid ], function(_export, _context) {
        return {
            setters: [ function(_m) {
                var _exportObj = {};
                for (var _key in _m) {
                    if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
                }
                _export(_exportObj);
            } ],
            execute: function() {}
        };
    });
});