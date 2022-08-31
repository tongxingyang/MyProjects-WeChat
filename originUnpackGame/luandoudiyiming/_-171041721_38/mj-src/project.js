var _typeof2 = require("../@babel/runtime/helpers/typeof");

window.__require = function e(t, n, o) {
    function i(r, s) {
        if (!n[r]) {
            if (!t[r]) {
                var l = r.split("/");
                if (l = l[l.length - 1], !t[l]) {
                    var c = "function" == typeof __require && __require;
                    if (!s && c) return c(l, !0);
                    if (a) return a(l, !0);
                    throw new Error("Cannot find module '" + r + "'");
                }
                r = l;
            }
            var u = n[r] = {
                exports: {}
            };
            t[r][0].call(u.exports, function(e) {
                return i(t[r][1][e] || e);
            }, u, u.exports, e, t, n, o);
        }
        return n[r].exports;
    }
    for (var a = "function" == typeof __require && __require, r = 0; r < o.length; r++) {
        i(o[r]);
    }
    return i;
}({
    AppConfig: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "09e36M5R29Km5tNPZbmdQls", "AppConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return Object.defineProperty(e, "GAME_NAME", {
                get: function get() {
                    return "插针模拟器";
                },
                enumerable: !0,
                configurable: !0
            }), e.IS_DEBUG = !1, e.IS_DEV = !1, e.appVersion = null, e.APP_ID = "wx4dbfbaa74199c91c", 
            e.APP_SERVER_HOST = "https://game-api.feigo.fun", e.APP_VERSION = "1.0.0.5", e.navigateToMiniProgramAppIdList = [], 
            e;
        }();
        n.AppConfig = o, o.APP_VERSION = window.APP_VERSION || o.APP_VERSION, window.IS_DEV = o.IS_DEV, 
        window.APP_VERSION = o.APP_VERSION, window.GAME_NAME = o.GAME_NAME, window.APP_ID = o.APP_ID;
        try {
            console.log("client-version:", o.APP_VERSION);
        } catch (e) {}
        cc._RF.pop();
    }, {} ],
    BallPre: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d6b2ahBdGhDNrprI28vCoJd", "BallPre");
        var o = this && this.__extends || function() {
            var _e = function e(t, n) {
                return (_e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.BallPre = void 0;
        var a = e("../../../../Framework/Core/Manager/FLGameManager"), r = cc._decorator, s = r.ccclass, l = r.property, c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.numDisplay = null, t;
            }
            return o(t, e), t.prototype.onAddEvents = function() {}, t.prototype.onRemoveEvents = function() {}, 
            t.prototype.onStart = function() {}, t.prototype.onDestroyed = function() {}, t.prototype.onCollisionEnter = function(e, t) {
                t.node.stopAllActions(), a.FLGameManager.gameState = a.EGameState.GAME_OVER;
            }, t.prototype.setData = function(e) {}, i([ l({
                type: cc.Label,
                tooltip: "数字显示"
            }) ], t.prototype, "numDisplay", void 0), t = i([ s ], t);
        }(FLBehavior);
        n.BallPre = c, cc._RF.pop();
    }, {
        "../../../../Framework/Core/Manager/FLGameManager": "FLGameManager"
    } ],
    CrazyPanel: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "253567aKkZCJbhp+96XWgXk", "CrazyPanel");
        var o = this && this.__extends || function() {
            var _e2 = function e(t, n) {
                return (_e2 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e2(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        }, a = this && this.__awaiter || function(e, t, n, o) {
            function i(e) {
                return e instanceof n ? e : new n(function(t) {
                    t(e);
                });
            }
            return new (n || (n = Promise))(function(n, a) {
                function r(e) {
                    try {
                        l(o.next(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function s(e) {
                    try {
                        l(o.throw(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : i(e.value).then(r, s);
                }
                l((o = o.apply(e, t || [])).next());
            });
        }, r = this && this.__generator || function(e, t) {
            var n, o, i, a, r = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this;
            }), a;
            function s(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;r; ) {
                    try {
                        if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
                        0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                        switch (o = 0, i && (a = [ 2 & a[0], i.value ]), a[0]) {
                          case 0:
                          case 1:
                            i = a;
                            break;

                          case 4:
                            return r.label++, {
                                value: a[1],
                                done: !1
                            };

                          case 5:
                            r.label++, o = a[1], a = [ 0 ];
                            continue;

                          case 7:
                            a = r.ops.pop(), r.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = r.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                r = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                r.label = a[1];
                                break;
                            }
                            if (6 === a[0] && r.label < i[1]) {
                                r.label = i[1], i = a;
                                break;
                            }
                            if (i && r.label < i[2]) {
                                r.label = i[2], r.ops.push(a);
                                break;
                            }
                            i[2] && r.ops.pop(), r.trys.pop();
                            continue;
                        }
                        a = t.call(e, r);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a = [ 6, e ], o = 0;
                    } finally {
                        n = i = 0;
                    }
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.CrazyPanel = void 0;
        var s = e("../../../../Config/GameConfig"), l = e("../../../../Config/GameDataCenter"), c = e("../../../../Framework/Core/Base/FLAnalysis"), u = e("../../../../Framework/Core/Manager/FLGameManager"), d = e("../../../../Framework/Platform/AD/FLPlatformBannerAd"), p = e("../../../../Framework/Platform/AD/FLPlatformRewardVideoAd"), f = e("../../../../Framework/UI/UIManager/FLUIManager"), h = e("../../../../Framework/UI/UIManager/FLUIManagerMachine"), m = cc._decorator, g = m.ccclass, _ = m.property, y = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.shootNode = null, t.shootBall = null, t.bar = null, t.centerBall = null, 
                t.btn = null, t._isClick = !1, t._isFinish = !1, t.rand = .6, t._showCount = 1, 
                t._type = 0, t;
            }
            return o(t, e), t.prototype.onEnabled = function() {
                c.FLAnalysis.sendNormalEvent("进入误触页"), this._isFinish = !1, this.rand = (4 + 2 * Math.random()) / 10, 
                this._showCount = window.serverConfig.TBS_BANNER_SHOW_COUNT || 1, cc.view.getVisibleSize().height / cc.view.getVisibleSize().width >= 2 && ("ios" == fl.adapter.getSystemInfoSync().platform ? this.btn.y -= 60 : this.btn.y -= s.GameConfig.serverConfig.BTN_OFFSET), 
                this._type = Math.random();
            }, t.prototype.onDisabled = function() {}, t.prototype.onAddEvents = function() {
                cc.systemEvent.on("WECHAT_MINI_GAME_SHOW", this.onWechatMiniGameHide, this);
            }, t.prototype.onRemoveEvents = function() {
                cc.systemEvent.off("WECHAT_MINI_GAME_SHOW", this.onWechatMiniGameHide, this);
            }, t.prototype.onStart = function() {}, t.prototype.onUpdate = function(e) {
                this._isFinish || (this.bar.progress > 0 && (this.bar.progress -= .004), this.centerBall.scale < 1 ? this.centerBall.scale += .004 : this.centerBall.scale = 1);
            }, t.prototype.onDestroyed = function() {}, t.prototype.onClicked = function(e, t) {
                var n = this;
                if (this.ballAct(), this.bar.progress += s.GameConfig.serverConfig.SWITCH_CRY_AD_REDUCE, 
                this._type <= s.GameConfig.serverConfig.SWITCH_CRY_AD_TYPE) this.bar.progress > this.rand && (this.node.getComponent(d.FLPlatformBannerAd).show(), 
                0 == --this._showCount ? this.onPanelJump() : this.scheduleOnce(function() {
                    n.rand -= .1 + Math.random() / 10, n.node.getComponent(d.FLPlatformBannerAd).hide();
                }, 2)); else {
                    if (this.bar.progress < s.GameConfig.serverConfig.SWITCH_CRY_AD_RATIO) return;
                    if (this._isClick) return;
                    this._isClick = !0, this.node.getComponent(p.FLPlatformRewardVideoAd).showRewardVideoAd();
                }
            }, t.prototype.onVideoCallBack = function(e) {
                this.onPanelJump();
            }, t.prototype.ballAct = function() {
                var e = this, t = cc.instantiate(this.shootBall);
                t.parent = this.shootNode, t.setPosition(0, -290), cc.tween(t).to(.05, {
                    position: cc.v3(0, 80)
                }).call(function() {
                    t.destroy(), e._isFinish || (e.centerBall.scale -= .12);
                }).start();
            }, t.prototype.onPanelJump = function() {
                this._isFinish || (this._isFinish = !0, this.scheduleOnce(function() {
                    f.FLUIManager.close("ui/Crazy/panel/CrazyPanel", !0), "HOME" == h.FLUIManagerMachine.instance.getCurrentStateName() ? h.FLUIManagerMachine.instance.onTransition("btnGameStart") : 3 != s.GameConfig.serverConfig.SWITCH_SHOW_CRY1_PAGE && l.GameDataCenter.afterResultCry && l.GameDataCenter.gameType != u.EGameType.TYPE_ENDLESS ? (l.GameDataCenter.afterResultCry = !1, 
                    u.FLGameManager.gameState = u.EGameState.GAME_RESET) : f.FLUIManager.open("ui/Result/panel/ResultPanel");
                }, s.GameConfig.serverConfig.CRY_JUMP_TIME));
            }, t.prototype.onWechatMiniGameHide = function() {
                return a(this, void 0, void 0, function() {
                    return r(this, function(e) {
                        return this.onPanelJump(), [ 2 ];
                    });
                });
            }, i([ _({
                type: cc.Node,
                tooltip: "发射点"
            }) ], t.prototype, "shootNode", void 0), i([ _({
                type: cc.Node,
                tooltip: "发射球"
            }) ], t.prototype, "shootBall", void 0), i([ _({
                type: cc.ProgressBar,
                tooltip: "进度条"
            }) ], t.prototype, "bar", void 0), i([ _({
                type: cc.Node,
                tooltip: "中心球"
            }) ], t.prototype, "centerBall", void 0), i([ _({
                type: cc.Node,
                tooltip: "按钮"
            }) ], t.prototype, "btn", void 0), t = i([ g ], t);
        }(FLUIPanel);
        n.CrazyPanel = y, cc._RF.pop();
    }, {
        "../../../../Config/GameConfig": "GameConfig",
        "../../../../Config/GameDataCenter": "GameDataCenter",
        "../../../../Framework/Core/Base/FLAnalysis": "FLAnalysis",
        "../../../../Framework/Core/Manager/FLGameManager": "FLGameManager",
        "../../../../Framework/Platform/AD/FLPlatformBannerAd": "FLPlatformBannerAd",
        "../../../../Framework/Platform/AD/FLPlatformRewardVideoAd": "FLPlatformRewardVideoAd",
        "../../../../Framework/UI/UIManager/FLUIManager": "FLUIManager",
        "../../../../Framework/UI/UIManager/FLUIManagerMachine": "FLUIManagerMachine"
    } ],
    EReviewSwitch: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "dc976BUkp9ElqFuDdj9uGYK", "EReviewSwitch");
        var o = this && this.__extends || function() {
            var _e3 = function e(t, n) {
                return (_e3 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e3(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.EReviewSwitch = void 0;
        var a = cc._decorator, r = a.ccclass, s = (a.property, a.disallowMultiple), l = a.menu, c = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return o(t, e), t.prototype.onAddEvents = function() {}, t.prototype.onRemoveEvents = function() {}, 
            t.prototype.onStart = function() {
                1 !== window.reviewSwitch && 0 === window.eReviewSwitch ? this.node.active = !0 : this.node.active = !1, 
                this.registerEvent("update_server_config", this.onUpdateServerConfig3, this);
            }, t.prototype.onUpdateServerConfig3 = function() {
                1 !== window.reviewSwitch && 0 === window.eReviewSwitch ? this.node.active = !0 : this.node.active = !1;
            }, t.prototype.onDestroyed = function() {}, t.isShowRecommend = function() {
                return 1 != window.serverConfig.reviewSwitch && 0 === window.eReviewSwitch;
            }, t = i([ r, s, l("添加风领组件/平台/EReviewSwitch (广点通卖量屏蔽)") ], t);
        }(FLBehavior);
        n.EReviewSwitch = c, cc._RF.pop();
    }, {} ],
    EndlessConfig: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5d9edv7hjZKr6XZRrQ4DzE2", "EndlessConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.EndlessConfig = void 0;
        var o = function() {
            function e() {}
            return e.mess = [ {
                id: 1,
                obsNum: 0,
                obsBallAngle: "",
                bulletNum: 8,
                speed: 1,
                dir: 1
            }, {
                id: 2,
                obsNum: 1,
                obsBallAngle: "",
                bulletNum: 8,
                speed: 1,
                dir: 1
            }, {
                id: 3,
                obsNum: 2,
                obsBallAngle: "0",
                bulletNum: 8,
                speed: 1,
                dir: 1
            }, {
                id: 4,
                obsNum: 2,
                obsBallAngle: "0,85",
                bulletNum: 9,
                speed: 1,
                dir: 1
            }, {
                id: 5,
                obsNum: 2,
                obsBallAngle: "0,180",
                bulletNum: 10,
                speed: 1,
                dir: 1
            }, {
                id: 6,
                obsNum: 4,
                obsBallAngle: "0,120",
                bulletNum: 10,
                speed: 1,
                dir: 1
            }, {
                id: 7,
                obsNum: 3,
                obsBallAngle: "0,100,200",
                bulletNum: 10,
                speed: 1,
                dir: 1
            }, {
                id: 8,
                obsNum: 3,
                obsBallAngle: "0,90,180",
                bulletNum: 10,
                speed: 1,
                dir: 1
            }, {
                id: 9,
                obsNum: 3,
                obsBallAngle: "0,30,95,186",
                bulletNum: 10,
                speed: 1,
                dir: 1
            }, {
                id: 10,
                obsNum: 3,
                obsBallAngle: "0,35,90",
                bulletNum: 10,
                speed: 1,
                dir: 1
            }, {
                id: 11,
                obsNum: 4,
                obsBallAngle: "0,35,85,180",
                bulletNum: 13,
                speed: 1,
                dir: -1
            }, {
                id: 12,
                obsNum: 5,
                obsBallAngle: "0,30,60,90,120,180",
                bulletNum: 13,
                speed: 1,
                dir: -1
            }, {
                id: 13,
                obsNum: 4,
                obsBallAngle: "0,30,90,165",
                bulletNum: 13,
                speed: 1,
                dir: -1
            }, {
                id: 14,
                obsNum: 4,
                obsBallAngle: "0,55,110,165,220",
                bulletNum: 13,
                speed: 1,
                dir: -1
            }, {
                id: 15,
                obsNum: 4,
                obsBallAngle: "0,45,60,135",
                bulletNum: 13,
                speed: 1,
                dir: -1
            }, {
                id: 16,
                obsNum: 4,
                obsBallAngle: "0,90,180,225",
                bulletNum: 13,
                speed: 1,
                dir: -1
            }, {
                id: 17,
                obsNum: 4,
                obsBallAngle: "0,25,75,110",
                bulletNum: 13,
                speed: 1,
                dir: -1
            }, {
                id: 18,
                obsNum: 4,
                obsBallAngle: "0,45,65,95",
                bulletNum: 13,
                speed: 1,
                dir: -1
            }, {
                id: 19,
                obsNum: 4,
                obsBallAngle: "0,70,195,270",
                bulletNum: 13,
                speed: 1,
                dir: -1
            }, {
                id: 20,
                obsNum: 4,
                obsBallAngle: "0,90,185,270",
                bulletNum: 13,
                speed: 1,
                dir: -1
            }, {
                id: 21,
                obsNum: 4,
                obsBallAngle: "0,90,210,270",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 22,
                obsNum: 4,
                obsBallAngle: "0,110,145,195",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 23,
                obsNum: 4,
                obsBallAngle: "40,65,145,320",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 24,
                obsNum: 4,
                obsBallAngle: "35100125340",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 25,
                obsNum: 4,
                obsBallAngle: "0,55,125,335",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 26,
                obsNum: 4,
                obsBallAngle: "20,70,125,275",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 27,
                obsNum: 4,
                obsBallAngle: "5,115,170,200",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 28,
                obsNum: 4,
                obsBallAngle: "5,100,140,325",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 29,
                obsNum: 4,
                obsBallAngle: "10,75,165,290",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 30,
                obsNum: 4,
                obsBallAngle: "10,60,175,295",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 31,
                obsNum: 4,
                obsBallAngle: "40,120,140,310",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 32,
                obsNum: 4,
                obsBallAngle: "25,65,160,345",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 33,
                obsNum: 4,
                obsBallAngle: "15,60,125,215",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 34,
                obsNum: 4,
                obsBallAngle: "10,65,165,290",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 35,
                obsNum: 4,
                obsBallAngle: "5,65,175,280",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 36,
                obsNum: 4,
                obsBallAngle: "0,95,175,195",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 37,
                obsNum: 4,
                obsBallAngle: "5,85,125,280",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 38,
                obsNum: 4,
                obsBallAngle: "45,120,160,190",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 39,
                obsNum: 4,
                obsBallAngle: "10,55,135,250",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 40,
                obsNum: 4,
                obsBallAngle: "15,110,135,340",
                bulletNum: 13,
                speed: 1.5,
                dir: 0
            }, {
                id: 41,
                obsNum: 4,
                obsBallAngle: "30,70,170,250",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 42,
                obsNum: 4,
                obsBallAngle: "10,90,160,275",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 43,
                obsNum: 4,
                obsBallAngle: "25,75,140,230",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 44,
                obsNum: 4,
                obsBallAngle: "35,65,155,225",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 45,
                obsNum: 4,
                obsBallAngle: "25,55,180,245",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 46,
                obsNum: 4,
                obsBallAngle: "10,115,175,355",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 47,
                obsNum: 4,
                obsBallAngle: "30,90,125,325",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 48,
                obsNum: 4,
                obsBallAngle: "40,85,150,235",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 49,
                obsNum: 4,
                obsBallAngle: "5,50,125,265",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 50,
                obsNum: 4,
                obsBallAngle: "10,100,125,215",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 51,
                obsNum: 5,
                obsBallAngle: "45,90,200,255,320",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 52,
                obsNum: 5,
                obsBallAngle: "30,95,135,280,320",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 53,
                obsNum: 5,
                obsBallAngle: "15,115,165,255,310",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 54,
                obsNum: 5,
                obsBallAngle: "25,115,215,285,340",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 55,
                obsNum: 5,
                obsBallAngle: "35,70,220,235,305",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 56,
                obsNum: 5,
                obsBallAngle: "40,75,175,290,310",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 57,
                obsNum: 5,
                obsBallAngle: "5,85,175,260,335",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 58,
                obsNum: 5,
                obsBallAngle: "25,120,215,235,350",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 59,
                obsNum: 5,
                obsBallAngle: "5,55,175,280,310",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 60,
                obsNum: 5,
                obsBallAngle: "20,95,230,240,315",
                bulletNum: 13,
                speed: 2,
                dir: 0
            }, {
                id: 61,
                obsNum: 5,
                obsBallAngle: "25,50,160,240,340",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 62,
                obsNum: 5,
                obsBallAngle: "10,120,220,280,355",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 63,
                obsNum: 5,
                obsBallAngle: "30,80,225,255,325",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 64,
                obsNum: 5,
                obsBallAngle: "5,105,180,270,310",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 65,
                obsNum: 5,
                obsBallAngle: "35,90,170,240,330",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 66,
                obsNum: 5,
                obsBallAngle: "5,70,185,285,330",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 67,
                obsNum: 5,
                obsBallAngle: "10,75,205,240,325",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 68,
                obsNum: 5,
                obsBallAngle: "20,80,150,255,340",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 69,
                obsNum: 5,
                obsBallAngle: "10,55,225,290,315",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 70,
                obsNum: 5,
                obsBallAngle: "5,115,230,265,335",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 71,
                obsNum: 5,
                obsBallAngle: "45,110,160,265,315",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 72,
                obsNum: 5,
                obsBallAngle: "30,60,225,280,295",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 73,
                obsNum: 5,
                obsBallAngle: "10,120,205,235,295",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 74,
                obsNum: 5,
                obsBallAngle: "40,75,170,240,315",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 75,
                obsNum: 5,
                obsBallAngle: "5,55,125,275,340",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 76,
                obsNum: 5,
                obsBallAngle: "10,75,170,280,320",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 77,
                obsNum: 5,
                obsBallAngle: "15,85,145,285,325",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 78,
                obsNum: 5,
                obsBallAngle: "25,95,155,265,320",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 79,
                obsNum: 5,
                obsBallAngle: "5,115,200,245,350",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 80,
                obsNum: 5,
                obsBallAngle: "25,65,155,255,305",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 81,
                obsNum: 5,
                obsBallAngle: "15,85,195,275,355",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 82,
                obsNum: 5,
                obsBallAngle: "25,85,125,240,300",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 83,
                obsNum: 5,
                obsBallAngle: "40,110,135,280,325",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 84,
                obsNum: 5,
                obsBallAngle: "25,100,160,240,325",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 85,
                obsNum: 5,
                obsBallAngle: "5,80,170,280,350",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 86,
                obsNum: 5,
                obsBallAngle: "5,110,220,265,335",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 87,
                obsNum: 5,
                obsBallAngle: "0,120,150,275,310",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 88,
                obsNum: 5,
                obsBallAngle: "25,60,135,275,315",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 89,
                obsNum: 5,
                obsBallAngle: "10,70,170,265,320",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 90,
                obsNum: 5,
                obsBallAngle: "25,75,155,290,315",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 91,
                obsNum: 5,
                obsBallAngle: "40,100,140,260,335",
                bulletNum: 13,
                speed: 3,
                dir: 0
            }, {
                id: 92,
                obsNum: 5,
                obsBallAngle: "15,105,190,245,335",
                bulletNum: 13,
                speed: 3,
                dir: 0
            }, {
                id: 93,
                obsNum: 5,
                obsBallAngle: "40,70,170,235,325",
                bulletNum: 13,
                speed: 3,
                dir: 0
            }, {
                id: 94,
                obsNum: 5,
                obsBallAngle: "0,100,135,285,335",
                bulletNum: 13,
                speed: 3,
                dir: 0
            }, {
                id: 95,
                obsNum: 5,
                obsBallAngle: "5,60,150,245,355",
                bulletNum: 13,
                speed: 3,
                dir: 0
            }, {
                id: 96,
                obsNum: 5,
                obsBallAngle: "0,105,135,270,310",
                bulletNum: 13,
                speed: 3,
                dir: 0
            }, {
                id: 97,
                obsNum: 5,
                obsBallAngle: "30,120,195,255,295",
                bulletNum: 13,
                speed: 3,
                dir: 0
            }, {
                id: 98,
                obsNum: 5,
                obsBallAngle: "25,95,165,240,345",
                bulletNum: 13,
                speed: 3,
                dir: 0
            }, {
                id: 99,
                obsNum: 5,
                obsBallAngle: "20,85,155,275,350",
                bulletNum: 13,
                speed: 3,
                dir: 0
            }, {
                id: 100,
                obsNum: 5,
                obsBallAngle: "0,110,145,285,305",
                bulletNum: 13,
                speed: 3,
                dir: 0
            } ], e;
        }();
        n.EndlessConfig = o, cc._RF.pop();
    }, {} ],
    FLAnalysis: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1bb0aTOZX1CoJrDVUWMdyCF", "FLAnalysis");
        var o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++) {
                    for (var i in t = arguments[n]) {
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    }
                }
                return e;
            }).apply(this, arguments);
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), window.userData = window.userData || {};
        var i = Math.floor(Date.now() / 1e3), a = function() {
            function e() {}
            return e.sendNormalEvent = function(t, n) {
                if (void 0 === n && (n = ""), "string" == typeof n || "number" == typeof n || "boolean" == typeof n) {
                    var o = {};
                    o[t] = n, e.aldSendEvent(t, o);
                } else e.aldSendEvent(t, n);
            }, e.sendUserEvent = function(t, n) {
                void 0 === n && (n = "");
                var i = {};
                "string" == typeof n || "number" == typeof n || "boolean" == typeof n ? (i[t] = n, 
                e.aldSendEvent(t, i)) : e.aldSendEvent(t, o({}, i, n));
            }, e.aldSendEvent = function(t, n) {
                if (void 0 === n && (n = {}), e.isSendEvent) try {
                    n = o({
                        first: window.userData.first ? 1 : 0,
                        todayReg: window.userData.isTodayReg ? 1 : 0,
                        shareId: window.userData.share_id,
                        etag: window.userData.etag,
                        hours: new Date().getHours(),
                        runTime: Math.floor(Date.now() / 1e3) - i,
                        version: window.APP_VERSION
                    }, n), wx.aldSendEvent(t, n), wx.event({
                        id: t,
                        label: t,
                        params: n
                    }), e.isDebug && console.log("统计:", t, n);
                } catch (o) {
                    o = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(o);
                    e.isDebug && console.log("统计异常:", t, n, o);
                }
            }, e.sendStageStartEvent = function(t, n) {
                if (void 0 === n && (n = !1), e.checkGameLevel = t, e.isSendEvent) {
                    window.GameDataCenter && window.GameDataCenter.isTodayReg && (n = !0);
                    var o = {
                        stageId: "" + (t = n ? t : 1e4 + t),
                        stageName: "关卡_第" + t + "关"
                    };
                    window.GameDataCenter && (o.userId = window.GameDataCenter.userTag);
                    try {
                        wx.aldStage.onStart(o), e.isDebug && console.log("关卡统计:", o);
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        e.isDebug && console.log("关卡统计异常:", "关卡开始统计", o, t);
                    }
                }
            }, e.sendStageEndEvent = function(t, n, o) {
                if (void 0 === o && (o = !1), e.checkGameLevel !== t) throw "关卡结束统计错误：在关卡开始ID为" + e.checkGameLevel + "的关卡发送了结束ID为" + t + "的统计！";
                if (e.isSendEvent) {
                    window.GameDataCenter && window.GameDataCenter.isTodayReg && (o = !0);
                    var i = {
                        stageId: "" + (t = o ? t : 1e4 + t),
                        stageName: "关卡_第" + t + "关",
                        event: n ? "complete" : "fail"
                    };
                    window.GameDataCenter && (i.userId = window.GameDataCenter.userTag);
                    try {
                        wx.aldStage.onEnd(i), e.isDebug && console.log("关卡统计:", i);
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        e.isDebug && console.log("关卡统计异常:", "关卡结束统计", i, t);
                    }
                }
            }, Object.defineProperty(e, "isSendEvent", {
                get: function get() {
                    return !(window.serverConfig && 1 !== window.serverConfig.SWITCH_SEND_ANALYSIS || !fl.adapter.isMiniGameWX || !wx.aldSendEvent);
                },
                enumerable: !0,
                configurable: !0
            }), e.isDebug = !1, e.checkGameLevel = 0, e;
        }();
        n.FLAnalysis = a;
        try {
            setTimeout(function() {
                cc && cc.systemEvent && cc.systemEvent.on && cc.systemEvent.on("WECHAT_MINI_GAME_CLOSE", function(e) {
                    var t = "launch";
                    window.uiQueue && (t = window.uiQueue[window.uiQueue.length - 1]);
                    var n = window.GameDataCenter ? window.GameDataCenter.gameLevel : 0;
                    a.sendUserEvent("关闭游戏-胶囊菜单", {
                        scene_name: t || "unknown",
                        level: n
                    });
                }, a);
            }, 100);
        } catch (e) {}
        window.FLAnalysis = a, cc._RF.pop();
    }, {} ],
    FLArray: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d885c7SyYlENabplZuUIqHa", "FLArray"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLArray = void 0;
        var o = function() {
            function e() {}
            return e.checkInArray = function(e, t) {
                return -1 !== t.indexOf(e);
            }, e.shuffle = function(e) {
                for (var t = e.length - 1; t >= 0; t--) {
                    var n = Math.floor(Math.random() * (t + 1)), o = e[n];
                    e[n] = e[t], e[t] = o;
                }
                return e;
            }, e.randomNumber = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1) + e);
            }, e.arrayRandomValue = function(t) {
                return t[e.randomNumber(0, t.length - 1)];
            }, e;
        }();
        n.FLArray = o, window.FLArray = o, cc._RF.pop();
    }, {} ],
    FLAutoScrollView: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8e6e5qD/05NfYeILeGh7SXJ", "FLAutoScrollView");
        var o = this && this.__extends || function() {
            var _e4 = function e(t, n) {
                return (_e4 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e4(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLAutoScrollView = void 0;
        var a = cc._decorator, r = a.ccclass, s = a.property, l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isRecommendList = !1, t.scrollView = null, t.scrollRatio = 10, t.scrollInterval = 1, 
                t.eventNames = [], t.nextScrollEventType = null, t.isEnterNextScroll = !1, t;
            }
            return o(t, e), t.prototype.onEnabled = function() {
                this.scrollList();
            }, t.prototype.onAddEvents = function() {
                var e = this;
                this.isRecommendList && this.registerEvent("INITED_RECOMMEND_LIST", this.scrollList, this), 
                this.eventNames.map(function(t) {
                    e.registerEvent(t, e.scrollList, e);
                });
                var t = new cc.Component.EventHandler();
                t.target = this.node, t.component = "FLAutoScrollView", t.handler = "onScrollCallback", 
                this.scrollView.scrollEvents.push(t);
            }, t.prototype.onRemoveEvents = function() {}, t.prototype.onStart = function() {}, 
            t.prototype.onDestroyed = function() {}, t.prototype.onScrollCallback = function(e, t) {
                var n = this;
                if (t !== cc.ScrollView.EventType.SCROLLING) switch (t) {
                  case cc.ScrollView.EventType.AUTOSCROLL_ENDED_WITH_THRESHOLD:
                    this.isEnterNextScroll = !1;
                    break;

                  case cc.ScrollView.EventType.BOUNCE_RIGHT:
                    this.scheduleOnce(function() {
                        n.scrollView.scrollToLeft(n.scrollRatio, !1), n.nextScrollEventType = cc.ScrollView.EventType.BOUNCE_LEFT;
                    }, this.scrollInterval), this.isEnterNextScroll = !0;
                    break;

                  case cc.ScrollView.EventType.BOUNCE_LEFT:
                    this.scheduleOnce(function() {
                        n.scrollView.scrollToRight(n.scrollRatio, !1), n.nextScrollEventType = cc.ScrollView.EventType.BOUNCE_RIGHT;
                    }, this.scrollInterval), this.isEnterNextScroll = !0;
                    break;

                  case cc.ScrollView.EventType.BOUNCE_BOTTOM:
                    this.scheduleOnce(function() {
                        n.scrollView.scrollToTop(n.scrollRatio, !1), n.nextScrollEventType = cc.ScrollView.EventType.BOUNCE_TOP;
                    }, this.scrollInterval), this.isEnterNextScroll = !0;
                    break;

                  case cc.ScrollView.EventType.BOUNCE_TOP:
                    this.scheduleOnce(function() {
                        n.scrollView.scrollToBottom(n.scrollRatio, !1), n.nextScrollEventType = cc.ScrollView.EventType.BOUNCE_BOTTOM;
                    }, this.scrollInterval), this.isEnterNextScroll = !0;
                    break;

                  case cc.ScrollView.EventType.SCROLL_ENDED:
                    this.isEnterNextScroll || this.onScrollCallback(e, this.nextScrollEventType);
                }
            }, t.prototype.scrollList = function() {
                var e = this;
                this.scrollView && (this.isEnterNextScroll = !0, this.nextScrollEventType = null, 
                this.scrollView.horizontal ? (this.scrollView.scrollToLeft(0), this.scheduleOnce(function() {
                    e.scrollView.scrollToRight(e.scrollRatio, !1), e.nextScrollEventType = cc.ScrollView.EventType.BOUNCE_RIGHT;
                }, this.scrollInterval)) : (this.scrollView.scrollToTop(0), this.scheduleOnce(function() {
                    e.scrollView.scrollToBottom(e.scrollRatio, !1), e.nextScrollEventType = cc.ScrollView.EventType.BOUNCE_BOTTOM;
                }, this.scrollInterval)));
            }, i([ s({
                tooltip: "是否是卖量列表"
            }) ], t.prototype, "isRecommendList", void 0), i([ s({
                type: cc.ScrollView,
                tooltip: "滚动视图"
            }) ], t.prototype, "scrollView", void 0), i([ s({
                tooltip: "滚动时间系数"
            }) ], t.prototype, "scrollRatio", void 0), i([ s({
                tooltip: "滚动间隔时间",
                min: 0
            }) ], t.prototype, "scrollInterval", void 0), i([ s({
                tooltip: "可触发开始滚动的事件值"
            }) ], t.prototype, "eventNames", void 0), t = i([ r ], t);
        }(FLBehavior);
        n.FLAutoScrollView = l, cc._RF.pop();
    }, {} ],
    FLDateTime: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "74f74NRt8dNGqPECC3G4t0U", "FLDateTime"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLDateTime = void 0;
        var o = function() {
            function e() {}
            return e.getTimeStamp = function(e) {
                return e ? new Date().getTime() : Math.floor(new Date().getTime() / 1e3);
            }, e.isToday = function(e, t) {
                void 0 === t && (t = !1);
                var n = new Date(e * (t ? 1 : 1e3)), o = new Date();
                return n.getDate() === o.getDate() && n.getMonth() === o.getMonth() && n.getFullYear() === o.getFullYear();
            }, e.convertToDate = function(e, t) {
                return e = Math.floor(e), t || (e *= 1e3), new Date(e);
            }, e.getWeekOfYear = function(e) {
                var t = e ? new Date(e) : new Date(), n = new Date(t.getFullYear(), 0, 1), o = n.getDay(), i = 1;
                0 !== o && (i = 7 - o + 1), n = new Date(t.getFullYear(), 0, 1 + i);
                var a = Math.ceil((t.valueOf() - n.valueOf()) / 864e5);
                return Math.ceil(a / 7) + 1;
            }, e.getInervalSecond = function(e, t) {
                var n = t.getTime() - e.getTime();
                return parseInt((n / 1e3).toString());
            }, e.getInervalHour = function(e, t) {
                var n = t.getTime() - e.getTime();
                return n < 0 ? 0 : Math.floor(n / 1e3 / 3600);
            }, e.getInervalDay = function(e, t) {
                var n = t.getTime() - e.getTime();
                return Math.floor(n / 864e5);
            }, e;
        }();
        n.FLDateTime = o, window.FLDateTime = o, cc._RF.pop();
    }, {} ],
    FLDevice: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fc233ZwkyhOIKFz8403619l", "FLDevice"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLDevice = void 0;
        var o = function() {
            function e() {}
            return e.enableKeepScreenOn = function(e) {
                fl.adapter.setKeepScreenOn && fl.adapter.setKeepScreenOn({
                    keepScreenOn: e
                });
            }, e.vibrateShort = function(t) {
                e.isEnableVibrate && fl.adapter.vibrateShort({
                    success: function success(e) {
                        t && t(void 0, e);
                    },
                    fail: function fail(e) {
                        t && t(e, void 0);
                    }
                });
            }, e.vibrateLong = function(t) {
                e.isEnableVibrate && fl.adapter.vibrateLong({
                    success: function success(e) {
                        t && t(void 0, e);
                    },
                    fail: function fail(e) {
                        t && t(e, void 0);
                    }
                });
            }, e.enableVibrate = function(t) {
                e.isEnableVibrate = t;
            }, e.showToast = function(e, t, n) {
                void 0 === t && (t = 1.5), void 0 === n && (n = "none"), t *= 1e3, fl.adapter.showToast({
                    title: e,
                    duration: t,
                    icon: n
                });
            }, e.isEnableVibrate = !0, e;
        }();
        n.FLDevice = o, window.FLDevice = o, cc._RF.pop();
    }, {} ],
    FLGameManager: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d7816dd+1NBX4kZsEwjWB5q", "FLGameManager");
        var o = this && this.__extends || function() {
            var _e5 = function e(t, n) {
                return (_e5 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e5(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLGameManager = n.EGameType = n.EGameState = void 0;
        var a, r = e("../../../Config/GameConfig"), s = e("../../../Config/UIManagerConfig"), l = e("../../Platform/AD/FLPlatformNativeAd"), c = e("../../UI/UIManager/FLUIManagerMachine"), u = e("../Base/FLDevice");
        (function(e) {
            e[e.GAME_IDEL = 0] = "GAME_IDEL", e[e.GAME_START = 1] = "GAME_START", e[e.GAME_WIN = 2] = "GAME_WIN", 
            e[e.GAME_OVER = 3] = "GAME_OVER", e[e.GAME_REVIVE = 4] = "GAME_REVIVE", e[e.GAME_RESET = 5] = "GAME_RESET";
        })(a = n.EGameState || (n.EGameState = {})), function(e) {
            e[e.TYPE_LEVEL = 0] = "TYPE_LEVEL", e[e.TYPE_ENDLESS = 1] = "TYPE_ENDLESS";
        }(n.EGameType || (n.EGameType = {}));
        var d = cc._decorator, p = d.ccclass, f = (d.property, d.disallowMultiple), h = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            var n;
            return o(t, e), n = t, Object.defineProperty(t, "gameState", {
                get: function get() {
                    return n._gameState;
                },
                set: function set(e) {
                    switch (n._gameState = e, e) {
                      case a.GAME_START:
                        cc.systemEvent.emit("GAME_START");
                        break;

                      case a.GAME_WIN:
                        cc.systemEvent.emit("GAME_WIN");
                        break;

                      case a.GAME_OVER:
                        cc.systemEvent.emit("GAME_OVER");
                        break;

                      case a.GAME_REVIVE:
                        cc.systemEvent.emit("GAME_REVIVE");
                        break;

                      case a.GAME_RESET:
                        cc.systemEvent.emit("GAME_RESET");
                    }
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.onAddEvents = function() {
                this.registerEvent("RECOMMEND_ICON_CANCELLED", this.onRecommendIconCancelled, this), 
                cc.systemEvent.on("update_server_config", this.checkNativeAD, this);
            }, t.prototype.onRemoveEvents = function() {}, t.prototype.onStart = function() {
                cc.director.getCollisionManager().enabled = !0, this.initUIManagerMachine();
                try {
                    this.initMiniGame(), u.FLDevice.enableKeepScreenOn(!0);
                } catch (e) {}
            }, t.prototype.onDestroyed = function() {}, t.prototype.initUIManagerMachine = function() {
                var e = s.UIManagerConfig[fl.platform] || s.UIManagerConfig.DEFAULT;
                c.FLUIManagerMachine.instance.initMachine(e);
            }, t.prototype.initMiniGame = function() {
                n.setShareAppMessage("听说只有百分之一的人能通过这关，你敢尝试一下么?", "wx-assets/share/share_1.jpg"), 
                n.enableShareMenu(!0), cc.log("系统信息：", cc.sys);
                try {
                    n.loadSubpackage("icons");
                } catch (e) {}
            }, t.prototype.onRecommendIconCancelled = function() {
                c.FLUIManagerMachine.instance.onTransition("recommendIconCancelled");
            }, t.setShareAppMessage = function(e, t, n) {
                fl.adapter.onShareAppMessage(function() {
                    return {
                        title: e,
                        imageUrl: t,
                        query: n
                    };
                });
            }, t.enableShareMenu = function(e) {
                e ? fl.adapter.showShareMenu({
                    withShareTicket: !0,
                    success: function success(e) {},
                    fail: function fail(e) {},
                    complete: function complete(e) {}
                }) : fl.adapter.hideShareMenu({
                    success: function success(e) {},
                    fail: function fail(e) {},
                    complete: function complete(e) {}
                });
            }, t.exitGame = function() {
                fl.adapter.isMiniGameWX && wx && wx.exitMiniProgram && wx.exitMiniProgram({
                    success: function success(e) {},
                    fail: function fail(e) {},
                    complete: function complete(e) {}
                });
            }, t.loadSubpackage = function(e, t) {
                fl.adapter.loadSubpackage({
                    name: e,
                    success: function success() {
                        t && t(void 0, {
                            name: e,
                            msg: "load subpackage successed."
                        });
                    },
                    fail: function fail() {
                        t && t({
                            name: e,
                            msg: "load subpackage failed."
                        });
                    },
                    complete: function complete() {}
                });
            }, t.prototype.checkNativeAD = function() {
                var e = this;
                3 != r.GameConfig.serverConfig.SWITCH_NATIVE_AD && cc.view.getVisibleSize().height / cc.view.getVisibleSize().width >= 2 && this.scheduleOnce(function() {
                    e.node.getComponent(l.FLPlatformNativeAd).show();
                }, 1);
            }, t.EEventName = {
                GAME_START: "GAME_START",
                GAME_WIN: "GAME_WIN",
                GAME_OVER: "GAME_OVER",
                GAME_REVIVE: "GAME_REVIVE",
                GAME_RESET: "GAME_RESET"
            }, t._gameState = null, t = n = i([ p, f ], t);
        }(FLBehavior);
        n.FLGameManager = h, cc._RF.pop();
    }, {
        "../../../Config/GameConfig": "GameConfig",
        "../../../Config/UIManagerConfig": "UIManagerConfig",
        "../../Platform/AD/FLPlatformNativeAd": "FLPlatformNativeAd",
        "../../UI/UIManager/FLUIManagerMachine": "FLUIManagerMachine",
        "../Base/FLDevice": "FLDevice"
    } ],
    FLNetHTTPAsync: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "aada9Dy7/RNBL/Jp6knR1Ml", "FLNetHTTPAsync"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.EHttpReadyState = n.FLNetHTTPAsync = void 0;
        var o, i = function() {
            function e() {}
            return e.get = function(t, n) {
                return new Promise(function(o, i) {
                    e.sendRequerst("GET", t, {}, n, function(e, t) {
                        return e ? i(e) : o(t);
                    });
                });
            }, e.post = function(t, n, o) {
                return new Promise(function(i, a) {
                    e.sendRequerst("POST", t, n, o, function(e, t) {
                        return e ? a(e) : i(t);
                    });
                });
            }, e.put = function(t, n, o) {
                return new Promise(function(i, a) {
                    e.sendRequerst("PUT", t, n, o, function(e, t) {
                        return e ? a(e) : i(t);
                    });
                });
            }, e.delete = function(t, n, o) {
                return new Promise(function(i, a) {
                    e.sendRequerst("DELETE", t, n, o, function(e, t) {
                        return e ? a(e) : i(t);
                    });
                });
            }, e.sendRequerst = function(t, n, i, a, r) {
                var s = new XMLHttpRequest();
                if (s.onreadystatechange = function() {
                    if (s.readyState === o.DONE) if (s.status >= 200 && s.status < 400) {
                        var t = void 0;
                        try {
                            t = JSON.parse(s.responseText);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            return r(e, void 0);
                        }
                        r(void 0, t || s.responseText);
                    } else r(s.responseText ? JSON.parse(s.responseText) : s, void 0), s.status > 499 && e.sendWarning(n, s.responseText);
                }, s.open(t, n, !0), s.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
                s.setRequestHeader("client-os", cc.sys.os), window.userData && s.setRequestHeader("x-access-token", window.userData.token || ""), 
                s.setRequestHeader("client-ver", window.APP_VERSION), s.setRequestHeader("appid", window.APP_ID), 
                a) for (var l in a) {
                    "Content-Type" === l || "client-os" === l || "client-ver" === l || "x-access-token" === l || s.setRequestHeader(l, a[l]);
                }
                try {
                    "GET" === t ? s.send() : s.send(JSON.stringify(i));
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    cc.error(e);
                }
            }, e.sendWarning = function(t, n) {
                var o = window.FLStore;
                if (o) {
                    if (o.getTodayValue(window.APP_ID + "_gameBad", 0)) return;
                    o.setTodayValue(window.APP_ID + "_gameBad", 1);
                }
                try {
                    e.post("https://warning.feigo.fun/api/warning/game-bad", {
                        name: window.GAME_NAME,
                        appid: window.APP_ID,
                        url: t,
                        msg: n
                    });
                } catch (e) {}
            }, e;
        }();
        n.FLNetHTTPAsync = i, window.FLNetHTTPAsync = i, function(e) {
            e[e.UNSENT = 0] = "UNSENT", e[e.OPENED = 1] = "OPENED", e[e.HEADERS_RECEIVED = 2] = "HEADERS_RECEIVED", 
            e[e.LOADING = 3] = "LOADING", e[e.DONE = 4] = "DONE";
        }(o = n.EHttpReadyState || (n.EHttpReadyState = {})), cc._RF.pop();
    }, {} ],
    FLPlatformBannerAd: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "79e88xVlghBZKynvFmzgFUm", "FLPlatformBannerAd");
        var o = this && this.__extends || function() {
            var _e6 = function e(t, n) {
                return (_e6 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        t.hasOwnProperty(n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e6(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__assign || function() {
            return (i = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++) {
                    for (var i in t = arguments[n]) {
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    }
                }
                return e;
            }).apply(this, arguments);
        }, a = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        }, r = this && this.__awaiter || function(e, t, n, o) {
            return new (n || (n = Promise))(function(i, a) {
                function r(e) {
                    try {
                        l(o.next(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function s(e) {
                    try {
                        l(o.throw(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function l(e) {
                    e.done ? i(e.value) : new n(function(t) {
                        t(e.value);
                    }).then(r, s);
                }
                l((o = o.apply(e, t || [])).next());
            });
        }, s = this && this.__generator || function(e, t) {
            var n, o, i, a, r = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this;
            }), a;
            function s(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;r; ) {
                    try {
                        if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
                        0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                        switch (o = 0, i && (a = [ 2 & a[0], i.value ]), a[0]) {
                          case 0:
                          case 1:
                            i = a;
                            break;

                          case 4:
                            return r.label++, {
                                value: a[1],
                                done: !1
                            };

                          case 5:
                            r.label++, o = a[1], a = [ 0 ];
                            continue;

                          case 7:
                            a = r.ops.pop(), r.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = r.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                r = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                r.label = a[1];
                                break;
                            }
                            if (6 === a[0] && r.label < i[1]) {
                                r.label = i[1], i = a;
                                break;
                            }
                            if (i && r.label < i[2]) {
                                r.label = i[2], r.ops.push(a);
                                break;
                            }
                            i[2] && r.ops.pop(), r.trys.pop();
                            continue;
                        }
                        a = t.call(e, r);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a = [ 6, e ], o = 0;
                    } finally {
                        n = i = 0;
                    }
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l, c = e("../../Core/Base/FLStore"), u = e("../../Core/Network/FLNetHTTPAsync"), d = e("../../../Config/AppConfig"), p = e("../../../Config/GameConfig");
        (function(e) {
            e[e.NONE = 0] = "NONE", e[e.LANDSCAPE = 1] = "LANDSCAPE", e[e.LANDSCAPE_CENTER = 2] = "LANDSCAPE_CENTER";
        })(l || (l = {}));
        var f = cc._decorator, h = f.ccclass, m = f.property, g = f.menu, _ = (f.help, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dynamicId = !0, t.adUnitId = "", t.adConfigKey = "", t.resident = !1, t.showOnStart = !0, 
                t.isTouchByMistake = !1, t.isAutoUpdate = !1, t.isQuickUpdate = !1, t.positionTag = "", 
                t.styleType = l.NONE, t.width = 300, t.top = 0, t.left = 0, t.isSpecial = !1, t._bannerOffset = 50, 
                t.loadCount = 0, t.loadErrorCount = 0, t.autoUpdateTimeCache = 0, t.updateBannerInterval = 60, 
                t.loadBannerMaxCount = 20, t.quickUpdateCount = 0, t;
            }
            var n;
            return o(t, e), n = t, t.prototype.onEnabled = function() {
                var e = this;
                try {
                    this.updateBannerInterval = window.serverConfig ? window.serverConfig.BANNER_UPDATE_INTERVAL : 60, 
                    this.loadBannerMaxCount = window.serverConfig ? window.serverConfig.BANNER_LOAD_MAX : 20;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    this.updateBannerInterval = 60, this.loadBannerMaxCount = 20;
                }
                "" === this.positionTag && (this.positionTag = this.adConfigKey.trim()), n.hideAllBannerAd(), 
                this.scheduleOnce(function() {
                    e.createBanner(), e.showOnStart && e.show();
                }, .05);
            }, t.prototype.onDisabled = function() {
                this.hide(), n.hideAllBannerAd(), cc.systemEvent.emit(n.EEventName.SHOW_RESIDENT_BANNER_AD, {
                    adUnitId: this.adUnitId,
                    adConfigKey: this.adConfigKey,
                    positionTag: this.positionTag
                });
            }, t.prototype.onAddEvents = function() {
                this.registerEvent("update_ad_config", this.createBanner, this), this.registerEvent("WECHAT_MINI_GAME_TOUCH_BANNER_AD", this.onTouchBannerAd, this), 
                this.resident && this.registerEvent(n.EEventName.SHOW_RESIDENT_BANNER_AD, this.onShowResidentBannerAd, this);
            }, t.prototype.onUpdate = function(e) {
                if (!this.isAutoUpdate || n.loadSuccCount > this.loadBannerMaxCount) this.update = function() {}; else if (this.autoUpdateTimeCache += e, 
                !(this.autoUpdateTimeCache < 1 || p.GameConfig.serverConfig.reviewSwitch)) {
                    this.autoUpdateTimeCache -= 1;
                    try {
                        var t = n.banners[this.adUnitId];
                        t && t.view && t.view.show && t.isShow && (t.showTime += 1, (this.updateBannerInterval < t.showTime || this.checkQuickUpdate(t)) && this.updateBanner());
                    } catch (e) {}
                }
            }, t.prototype.onTouchBannerAd = function(e) {
                var t = this.adUnitId;
                if (n.banners[t].isShow) {
                    if (n.loadSuccCount < this.loadBannerMaxCount) {
                        this.destroyBanner();
                        try {
                            this.createBanner(), this.show();
                        } catch (e) {}
                    }
                    var o = Math.floor(Date.now() / 1e3);
                    window.FLAnalysis && window.FLAnalysis.sendUserEvent("点击banner成功", {
                        adId: t,
                        posTag: this.positionTag,
                        loadCount: this.loadCount,
                        adType: e ? e.adType : "未知广告"
                    });
                    try {
                        u.FLNetHTTPAsync.post(d.AppConfig.APP_SERVER_HOST + "/api/user/banner-click-log", {
                            banner_id: t,
                            runtime: fl.getRunTime(),
                            clienttime: o
                        }, {
                            "x-access-token": window.userData ? window.userData.token : "",
                            "client-ver": window.APP_VERSION
                        });
                    } catch (e) {}
                }
            }, t.prototype.onShowResidentBannerAd = function(e) {
                this.node.active && this.node.activeInHierarchy && this.enabled && ("" !== e.adConfigKey && e.adConfigKey === this.adConfigKey || "" !== e.positionTag && e.positionTag === this.positionTag || this.createBanner(!0));
            }, t.prototype.initBannerId = function() {
                if (this.isTouchByMistake) {
                    var e = [], t = void 0;
                    for (var o in n.banners) {
                        (t = n.banners[o]) && t.isLoaded && e.push(t.adUnitId || o);
                    }
                    if (e[0]) return void (this.adUnitId = e[Math.floor(Math.random() * e.length)]);
                }
                var i = window.adBannerConfigs;
                this.dynamicId && i && i[0] ? this.adUnitId = i[Math.floor(Math.random() * i.length)] : "" !== this.adConfigKey.trim() && window.adConfigs && (this.adUnitId = window.adConfigs[this.adConfigKey] || this.adUnitId);
            }, t.prototype.createBanner = function(e) {
                if (void 0 === e && (e = !1), this.hide(), this.initBannerId(), this.adUnitId && "" !== this.adUnitId) {
                    var t = this.adUnitId, o = n.banners[t];
                    if (o && o.view && o.view.show) return this.bindADViewEvents(o.view, o, t, e), this.isSpecial && (o.view.style.top = n.getBannerTop() - this._bannerOffset), 
                    void (e && (o.view.show(), o.isShow = !0));
                    var i = cc.view.getFrameSize(), a = i.width, r = 0, s = n.getBannerTop();
                    switch (this.styleType) {
                      case l.LANDSCAPE:
                        a = this.width, r = n.getBannerLeft(this.left), s = this.top * i.height / (cc.view.getVisibleSize().height / 2);
                        break;

                      case l.LANDSCAPE_CENTER:
                        a = this.width, r = (cc.view.getFrameSize().width - this.width) / 2, s = this.top * i.height / (cc.view.getVisibleSize().height / 2);
                    }
                    this.isSpecial && (s = n.getBannerTop() - this._bannerOffset);
                    var c = fl.adapter.createBannerAd({
                        adUnitId: t,
                        style: {
                            left: r,
                            top: s,
                            width: a
                        }
                    });
                    try {
                        this.updateBannerInterval = window.serverConfig ? window.serverConfig.BANNER_UPDATE_INTERVAL : 180, 
                        this.loadBannerMaxCount = window.serverConfig ? window.serverConfig.BANNER_LOAD_MAX : 20;
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        this.updateBannerInterval = 60, this.loadBannerMaxCount = 20;
                    }
                    if (o = {
                        view: c,
                        adUnitId: t,
                        showTime: 0
                    }, n.banners[t] = o, ++this.loadCount, this.bindADViewEvents(c, o, t, e), e) {
                        o.view.show(), o.isShow = !0;
                        try {
                            window.FLAnalysis && window.FLAnalysis.sendUserEvent("显示banner", {
                                adId: this.adUnitId,
                                posTag: this.positionTag
                            });
                        } catch (e) {}
                    }
                }
            }, t.prototype.bindADViewEvents = function(e, t, o, a) {
                var r = this;
                e.onLoad(function() {
                    t && (t.isLoaded = !0), cc.systemEvent.emit(n.EEventName.LOAD_SUCCESSED_BANNER_AD, {
                        adKey: r.adConfigKey,
                        adId: r.adUnitId,
                        posTag: r.positionTag,
                        loadCount: r.loadCount
                    }), window.FLAnalysis && window.FLAnalysis.sendUserEvent("加载banner成功", {
                        adKey: r.adConfigKey,
                        adId: r.adUnitId,
                        posTag: r.positionTag,
                        loadCount: r.loadCount
                    }), n.loadSuccCount += 1;
                }), e.onError(function(s) {
                    if (t && (t.isLoaded = !1), ++r.loadErrorCount, r.loadErrorCount > 5) window.FLAnalysis && window.FLAnalysis.sendUserEvent("加载banner失败", i({
                        adKey: r.adConfigKey,
                        adId: r.adUnitId,
                        posTag: r.positionTag,
                        loadErrCount: r.loadErrorCount
                    }, s)); else {
                        window.FLAnalysis && window.FLAnalysis.sendUserEvent("加载banner错误", i({
                            adKey: r.adConfigKey,
                            adId: r.adUnitId,
                            posTag: r.positionTag,
                            loadErrCount: r.loadErrorCount
                        }, s));
                        try {
                            e.hide(), e.offLoad(), e.offError(), e.destroy();
                        } catch (e) {}
                        try {
                            n.banners[o] = void 0, r && r.scheduleOnce(r.createBanner.bind(r, a), .3);
                        } catch (e) {}
                        r.onErrorVideoAd(s);
                    }
                });
            }, t.prototype.updateBanner = function() {
                ++this.quickUpdateCount, this.destroyBanner();
                try {
                    this.createBanner(), this.show();
                } catch (e) {}
            }, t.prototype.checkQuickUpdate = function(e) {
                return !(!this.isQuickUpdate || p.GameConfig.serverConfig.QUICK_UPDATE_BANNER_INTERVAL > e.showTime) && !(this.quickUpdateCount > p.GameConfig.serverConfig.QUICK_UPDATE_BANNER_COUNT) && 3 !== p.GameConfig.serverConfig.SWITCH_QUICK_UPDATE_BANNER && 0 !== p.GameConfig.serverConfig.SWITCH_QUICK_UPDATE_BANNER;
            }, t.prototype.show = function() {
                this.isSpecial && n.banners[this.adUnitId] && (n.banners[this.adUnitId].view.style.top = n.getBannerTop() - this._bannerOffset);
                var e = n.banners[this.adUnitId];
                if (!e || !e.view || !e.view.show) return this.createBanner(!0);
                e.view.show(), e.isShow = !0;
                try {
                    window.FLAnalysis && window.FLAnalysis.sendUserEvent("显示banner", {
                        adId: this.adUnitId,
                        posTag: this.positionTag
                    });
                } catch (e) {}
            }, t.prototype.hide = function() {
                this.isSpecial && n.banners[this.adUnitId] && (n.banners[this.adUnitId].view.style.top = n.getBannerTop()), 
                this.unscheduleAllCallbacks();
                try {
                    var e = n.banners[this.adUnitId];
                    e && e.view && (e.view.hide(), e.isShow = !1, e.view.offLoad(), e.view.offError());
                } catch (e) {}
            }, t.prototype.destroyBanner = function() {
                this.unscheduleAllCallbacks();
                var e = this.adUnitId;
                try {
                    var t = n.banners[e];
                    t && t.view && (t.view.hide(), t.view.offLoad(), t.view.offError(), t.view.destroy());
                } catch (e) {}
                return n.banners[e] = void 0, e;
            }, t.hideAllBannerAd = function() {
                var e;
                for (var t in n.banners) {
                    (e = n.banners[t]) && e.view && e.view.hide ? (e.view.hide(), e.isShow = !1) : n.banners[t] = void 0;
                }
            }, t.getBannerTop = function() {
                var e = cc.view.getVisibleSize(), t = e.height - 255;
                return e.height / e.width >= 2 && (t = e.height - 305), t *= cc.view.getFrameSize().width / e.width;
            }, t.getBannerLeft = function(e) {
                void 0 === e && (e = 0);
                var t = cc.view.getVisibleSize(), n = 0;
                return t.width / t.height >= 2 && (n = 40), e + (n *= cc.view.getFrameSize().width / t.width);
            }, t.prototype.onErrorVideoAd = function(e) {
                switch (e.errCode) {
                  case 1e3:
                    "后端接口调用失败，暂时无法观看";
                    break;

                  case 1001:
                    "参数错误，暂时无法观看";
                    break;

                  case 1002:
                    "广告单元无效，暂时无法观看";
                    break;

                  case 1003:
                    "内部错误，暂时无法观看";
                    break;

                  case 1004:
                    "无合适的广告，暂时无法观看";
                    break;

                  case 1005:
                    "广告组件审核中，暂时无法观看";
                    break;

                  case 1006:
                    "广告组件被驳回，暂时无法观看";
                    break;

                  case 1007:
                    "广告组件被封禁，暂时无法观看";
                    break;

                  case 1008:
                    "广告单元已关闭，暂时无法观看";
                    break;

                  default:
                    "遇到未知错误，暂时无法观看";
                }
                try {
                    this.sendWarning(e.errCode);
                } catch (e) {}
            }, t.prototype.sendWarning = function(e) {
                return void 0 === e && (e = "-1000"), r(this, void 0, void 0, function() {
                    var t, n;
                    return s(this, function(o) {
                        switch (o.label) {
                          case 0:
                            if (t = 0, n = c.FLStore.getTodayValue("BannerSendWaring", 0)) return [ 2 ];
                            switch (e = e.toString()) {
                              case "1002":
                              case "1005":
                              case "1006":
                              case "1007":
                              case "1008":
                                t = 1;
                            }
                            if (1 !== t || 0 !== n) return [ 3, 4 ];
                            c.FLStore.setTodayValue("BannerSendWaring", 1), o.label = 1;

                          case 1:
                            return o.trys.push([ 1, 3, , 4 ]), [ 4, u.FLNetHTTPAsync.post("https://warning.feigo.fun/api/warning/flow-main", {
                                name: d.AppConfig.GAME_NAME,
                                appid: d.AppConfig.APP_ID,
                                code: e
                            }) ];

                          case 2:
                            return o.sent(), [ 3, 4 ];

                          case 3:
                            return o.sent(), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, t.EEventName = {
                HIDE_ALL_BANNER_AD: "HIDE_ALL_BANNER_AD",
                SHOW_RESIDENT_BANNER_AD: "SHOW_RESIDENT_BANNER_AD",
                LOAD_SUCCESSED_BANNER_AD: "LOAD_SUCCESSED_BANNER_AD"
            }, t.banners = {}, t.loadSuccCount = 0, a([ m({
                tooltip: "是否动态广告ID，动态广告id会从window.adBannerConfigs里面随机一个广告ID使用"
            }) ], t.prototype, "dynamicId", void 0), a([ m({
                tooltip: "Banner广告单元ID，由微信官方提供",
                visible: function visible() {
                    return !this.dynamicId;
                }
            }) ], t.prototype, "adUnitId", void 0), a([ m({
                tooltip: "广告单元ID预埋Key，用于从服务端获取的配置中读取广告单元，服务端获取广告配置后要设置到FLWechatGameBannerAd组件的adConfig属性上。该配置会覆盖默认的adUnitId属性",
                visible: function visible() {
                    return !this.dynamicId;
                }
            }) ], t.prototype, "adConfigKey", void 0), a([ m({
                tooltip: "是否驻留，驻留的Banner会在其它广告被移除时自动显示"
            }) ], t.prototype, "resident", void 0), a([ m({
                tooltip: "是否在组件运行时自动显示"
            }) ], t.prototype, "showOnStart", void 0), a([ m({
                tooltip: "是否属于误触类型"
            }) ], t.prototype, "isTouchByMistake", void 0), a([ m({
                tooltip: "是否自动刷新"
            }) ], t.prototype, "isAutoUpdate", void 0), a([ m({
                tooltip: "是否快速刷新",
                visible: function visible() {
                    return this.isAutoUpdate;
                }
            }) ], t.prototype, "isQuickUpdate", void 0), a([ m({
                tooltip: "广告位置标记，用于统计"
            }) ], t.prototype, "positionTag", void 0), a([ m({
                type: cc.Enum(l),
                tooltip: "是否横屏"
            }) ], t.prototype, "styleType", void 0), a([ m({
                tooltip: "Banner广告的宽度（广告高度会根据宽度进行缩放适配）",
                visible: function visible() {
                    return this.styleType === l.LANDSCAPE || this.styleType === l.LANDSCAPE_CENTER;
                }
            }) ], t.prototype, "width", void 0), a([ m({
                tooltip: "Banner广告的位置Top",
                visible: function visible() {
                    return this.styleType === l.LANDSCAPE || this.styleType === l.LANDSCAPE_CENTER;
                }
            }) ], t.prototype, "top", void 0), a([ m({
                tooltip: "Banner广告的位置Left",
                visible: function visible() {
                    return this.styleType === l.LANDSCAPE;
                }
            }) ], t.prototype, "left", void 0), a([ m({
                tooltip: "是否是特殊误触页"
            }) ], t.prototype, "isSpecial", void 0), t = n = a([ h, g("添加风领组件/平台/广告/FLPlatformRewardVideoAd (Banner广告)") ], t);
        }(FLBehavior));
        n.FLPlatformBannerAd = _, cc._RF.pop();
    }, {
        "../../../Config/AppConfig": "AppConfig",
        "../../../Config/GameConfig": "GameConfig",
        "../../Core/Base/FLStore": "FLStore",
        "../../Core/Network/FLNetHTTPAsync": "FLNetHTTPAsync"
    } ],
    FLPlatformInterstitialAd: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d0f1d8Eo9ZML7zZUmq+fc8W", "FLPlatformInterstitialAd");
        var o = this && this.__extends || function() {
            var _e7 = function e(t, n) {
                return (_e7 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e7(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__assign || function() {
            return (i = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++) {
                    for (var i in t = arguments[n]) {
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    }
                }
                return e;
            }).apply(this, arguments);
        }, a = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLPlatformInterstitialAd = void 0;
        var r = cc._decorator, s = r.ccclass, l = r.property, c = r.menu, u = r.help, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dynamicId = !1, t.adUnitId = "", t.adConfigKey = "", t.showOnStart = !1, 
                t.positionTag = "", t.closeCallbacks = [], t;
            }
            var n;
            return o(t, e), n = t, t.prototype.onEnabled = function() {
                "" === this.positionTag && (this.positionTag = this.adConfigKey.trim()), this.createAd(), 
                this.showOnStart && this.show();
            }, t.prototype.onDisabled = function() {
                var e = n.interstitials[this.adUnitId];
                e && e.view && this.unbindADViewEvents(e.view);
            }, t.prototype.initInterstitialId = function() {
                var e = window.adInterstitialConfigs;
                this.dynamicId && e && e[0] ? this.adUnitId = e[Math.floor(Math.random() * e.length)] : "" !== this.adConfigKey.trim() && window.adConfigs && (this.adUnitId = window.adConfigs[this.adConfigKey] || this.adUnitId);
            }, t.prototype.createAd = function(e) {
                if (void 0 === e && (e = !1), this.initInterstitialId(), this.adUnitId && "" !== this.adUnitId) {
                    var t = this.adUnitId, o = n.interstitials[t];
                    if (o && o.view && o.view.show) return this.bindADViewEvents(o.view, t), void (e && o.view.show());
                    try {
                        var a = fl.adapter.createInterstitialAd({
                            adUnitId: t
                        });
                        o = {
                            view: a,
                            adUnitId: t
                        }, n.interstitials[t] = o, ++n.loadCount, this.bindADViewEvents(a, t), e && (o.view.show(), 
                        o.isShow = !0);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        var r = i({
                            msg: "插屏广告创建失败",
                            adConfigKey: this.adConfigKey,
                            adUnitId: this.adUnitId,
                            positionTag: this.positionTag
                        }, e);
                        window.FLAnalysis && window.FLAnalysis.sendUserEvent("插屏广告创建失败", r), this.closeCallbacks.map(function(e) {
                            e.emit([ r ]);
                        });
                    }
                }
            }, t.prototype.bindADViewEvents = function(e, t) {
                var o = this;
                this.onLoadBind = function() {
                    cc.systemEvent.emit(n.EEventName.LOAD_SUCCESSED_INTERSTITIAL_AD, {
                        adKey: o.adConfigKey,
                        adId: o.adUnitId,
                        posTag: o.positionTag
                    }), n.loadSuccCount += 1, window.FLAnalysis && window.FLAnalysis.sendUserEvent("加载插屏广告成功", {
                        adKey: o.adConfigKey,
                        adId: o.adUnitId,
                        posTag: o.positionTag,
                        loadSuccCount: n.loadSuccCount,
                        loadCount: n.loadCount
                    });
                }, e.onLoad(this.onLoadBind), this.onErrorBind = function(a) {
                    window.FLAnalysis && window.FLAnalysis.sendUserEvent("加载插屏广告失败", i({
                        adKey: o.adConfigKey,
                        adId: o.adUnitId,
                        posTag: o.positionTag,
                        loadCount: n.loadCount
                    }, a)), o.unbindADViewEvents(e), n.interstitials[t] = void 0;
                }, e.onError(this.onErrorBind), this.onCloseBind = function(e) {
                    var t = i({
                        msg: "插屏广告关闭了",
                        adConfigKey: o.adConfigKey,
                        adUnitId: o.adUnitId,
                        positionTag: o.positionTag
                    }, e);
                    window.FLAnalysis && window.FLAnalysis.sendUserEvent("插屏广告关闭了", t), o.closeCallbacks.map(function(e) {
                        e.emit([ void 0, t ]);
                    });
                }, e.onClose(this.onCloseBind);
            }, t.prototype.unbindADViewEvents = function(e) {
                try {
                    this.onLoadBind && e.offLoad(this.onLoadBind), this.onErrorBind && e.offError(this.onErrorBind), 
                    this.onCloseBind && e.offClose(this.onCloseBind);
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    e.offLoad(), e.offError(), e.offClose();
                }
            }, t.prototype.show = function() {
                window.FLAnalysis && window.FLAnalysis.sendUserEvent("显示插屏广告", {
                    adKey: this.adConfigKey,
                    adId: this.adUnitId,
                    posTag: this.positionTag,
                    loadCount: n.loadCount
                });
                var e = n.interstitials[this.adUnitId];
                if (!e || !e.view || !e.view.show) return this.createAd(!0);
                e.view.show();
            }, t.EEventName = {
                LOAD_SUCCESSED_INTERSTITIAL_AD: "LOAD_SUCCESSED_INTERSTITIAL_AD"
            }, t.interstitials = {}, t.loadSuccCount = 0, t.loadCount = 0, a([ l({
                tooltip: "是否动态广告ID，动态广告id会从window.adInterstitialConfigs里面随机一个广告ID使用"
            }) ], t.prototype, "dynamicId", void 0), a([ l({
                tooltip: "广告单元ID，由微信官方提供",
                visible: function visible() {
                    return !this.dynamicId;
                }
            }) ], t.prototype, "adUnitId", void 0), a([ l({
                tooltip: "广告单元ID预埋Key，用于从服务端获取的配置中读取广告单元，服务端获取广告配置后要设置到FLPlatformInterstitialAd组件的adConfig属性上。该配置会覆盖默认的adUnitId属性",
                visible: function visible() {
                    return !this.dynamicId;
                }
            }) ], t.prototype, "adConfigKey", void 0), a([ l({
                tooltip: "是否在组件运行时自动显示"
            }) ], t.prototype, "showOnStart", void 0), a([ l({
                tooltip: "广告位置标记，用于统计"
            }) ], t.prototype, "positionTag", void 0), a([ l({
                type: [ cc.Component.EventHandler ],
                tooltip: "插屏关闭的回调。回调函数包含两个参数，第一个参数是error错误信息，第二个参数是result显示成功的信息"
            }) ], t.prototype, "closeCallbacks", void 0), t = n = a([ s, c("添加风领组件/平台/广告/FLPlatformInterstitialAd (插屏广告)"), u("https://showdoc.feigo.fun/web/#/1?page_id=132") ], t);
        }(FLBehavior);
        n.FLPlatformInterstitialAd = d, cc._RF.pop();
    }, {} ],
    FLPlatformLogin: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4519eibduVO7ohcLYsDBbRG", "FLPlatformLogin");
        var o = this && this.__extends || function() {
            var _e8 = function e(t, n) {
                return (_e8 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e8(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        }, a = this && this.__awaiter || function(e, t, n, o) {
            function i(e) {
                return e instanceof n ? e : new n(function(t) {
                    t(e);
                });
            }
            return new (n || (n = Promise))(function(n, a) {
                function r(e) {
                    try {
                        l(o.next(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function s(e) {
                    try {
                        l(o.throw(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : i(e.value).then(r, s);
                }
                l((o = o.apply(e, t || [])).next());
            });
        }, r = this && this.__generator || function(e, t) {
            var n, o, i, a, r = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this;
            }), a;
            function s(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;r; ) {
                    try {
                        if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
                        0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                        switch (o = 0, i && (a = [ 2 & a[0], i.value ]), a[0]) {
                          case 0:
                          case 1:
                            i = a;
                            break;

                          case 4:
                            return r.label++, {
                                value: a[1],
                                done: !1
                            };

                          case 5:
                            r.label++, o = a[1], a = [ 0 ];
                            continue;

                          case 7:
                            a = r.ops.pop(), r.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = r.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                r = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                r.label = a[1];
                                break;
                            }
                            if (6 === a[0] && r.label < i[1]) {
                                r.label = i[1], i = a;
                                break;
                            }
                            if (i && r.label < i[2]) {
                                r.label = i[2], r.ops.push(a);
                                break;
                            }
                            i[2] && r.ops.pop(), r.trys.pop();
                            continue;
                        }
                        a = t.call(e, r);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a = [ 6, e ], o = 0;
                    } finally {
                        n = i = 0;
                    }
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLPlatformLogin = void 0;
        var s = e("../../../Config/GameDataCenter"), l = e("../../../Config/AppConfig"), c = e("../../Core/Network/FLNetHTTPAsync"), u = e("../../Core/Base/FLDateTime"), d = e("../../Core/Base/FLStore"), p = e("../../Core/Base/FLAnalysis"), f = cc._decorator, h = f.ccclass, m = f.property, g = f.menu, _ = f.help, y = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.loginCallback = [], t;
            }
            var n;
            return o(t, e), n = t, t.prototype.onAddEvents = function() {
                n.isLogined || (fl.adapter.offShow(n.onGameResume), fl.adapter.onShow(n.onGameResume));
            }, t.prototype.onLoadConfig = function() {
                if (!n.isLogined) {
                    var e = fl.adapter.getLaunchOptionsSync();
                    n.launchOptions = e;
                }
            }, t.prototype.onLoaded = function() {
                n.isLogined || n.login(this);
            }, t.onGameResume = function(e) {
                e && (n.launchOptions = e);
            }, t.login = function(e) {
                fl.adapter.login({
                    success: function success(t) {
                        fl.log("login-code:", t), n.loginCode = t.code, n.loginByCode(t.code, e);
                    },
                    fail: function fail(t) {
                        if (fl.adapter.isMiniGameVIVO) {
                            fl.log("vivo未授权用户登录采用OpenId进行登录。");
                            var o = d.FLStore.get("openId", "");
                            return n.loginByOpenId(o, e);
                        }
                        try {
                            e && e.loginCallback && e.loginCallback.map(function(e) {
                                return e.emit([ t ]);
                            });
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            cc.error("获取Code失败 fail error", e);
                        }
                        try {
                            setTimeout(function() {
                                n.login(e);
                            }, 100);
                        } catch (e) {}
                        cc.error("获取Code失败", t);
                    }
                });
            }, t.loginByCode = function(e, t) {
                return a(this, void 0, void 0, function() {
                    var o, i, a, s, u, d, f, h, m, g;
                    return r(this, function(r) {
                        switch (r.label) {
                          case 0:
                            o = "", i = "", a = "", s = "", n.launchOptions && n.launchOptions.query && (n.launchOptions.query.etag && (o = n.launchOptions.query.etag), 
                            n.launchOptions.query.gdt_vid && (i = n.launchOptions.query.gdt_vid), n.launchOptions.query.weixinadinfo && (a = n.launchOptions.query.weixinadinfo.split(".")[0]), 
                            n.launchOptions.query.channelType || !n.launchOptions.query.gdt_vid && n.launchOptions.referrerInfo && n.launchOptions.referrerInfo.appId && (o = n.launchOptions.referrerInfo.appId, 
                            s = n.launchOptions.referrerInfo.appId)), u = "", n.launchOptions.query && n.launchOptions.referrerInfo && (d = n.launchOptions.query.etag || "null", 
                            f = n.launchOptions.referrerInfo.appId || "null", u = f, p.FLAnalysis.sendUserEvent("来源统计_" + d, {
                                appid: f
                            })), r.label = 1;

                          case 1:
                            return r.trys.push([ 1, 3, , 4 ]), h = {
                                gdt_vid: i,
                                aid: a,
                                code: e,
                                etag: o,
                                source_tag: s,
                                source_etag: u,
                                invite_tag: n.launchOptions.query.invite_tag,
                                share_id: n.launchOptions.query.share_id,
                                type: n.launchOptions.query.type,
                                scene: n.launchOptions.scene
                            }, fl.log("login params:", h), [ 4, c.FLNetHTTPAsync.post(l.AppConfig.APP_SERVER_HOST + "/api/code-login", h) ];

                          case 2:
                            return m = r.sent(), n.onLoginSuccessed(m, t), [ 3, 4 ];

                          case 3:
                            if (g = r.sent(), t) try {
                                t.loginCallback.map(function(e) {
                                    return e.emit([ g ]);
                                });
                            } catch (e) {}
                            return fl.log("登录失败：", g), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, t.loginByOpenId = function(e, t) {
                return a(this, void 0, void 0, function() {
                    var o, i, a, s;
                    return r(this, function(r) {
                        switch (r.label) {
                          case 0:
                            o = "", cc.sys.platform === cc.sys.OPPO_GAME && n.launchOptions && (o = n.launchOptions.referrerInfo ? n.launchOptions.referrerInfo.package : ""), 
                            n.launchOptions && n.launchOptions.query || (n.launchOptions = n.launchOptions || {}, 
                            n.launchOptions.query = n.launchOptions.query || {}), r.label = 1;

                          case 1:
                            return r.trys.push([ 1, 3, , 4 ]), i = {
                                openId: e,
                                pkgName: l.AppConfig.PACKAGE_NAME,
                                etag: o
                            }, console.log("login params:", i), [ 4, c.FLNetHTTPAsync.post(l.AppConfig.APP_SERVER_HOST + "/api/code-login", i) ];

                          case 2:
                            return a = r.sent(), console.log("openId login succ:", a), n.onLoginSuccessed(a, t), 
                            [ 3, 4 ];

                          case 3:
                            if (s = r.sent(), t) try {
                                t.loginCallback.map(function(e) {
                                    return e.emit([ s ]);
                                });
                            } catch (e) {}
                            return console.log("登录失败：", s), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, t.onLoginSuccessed = function(e, t) {
                if (fl.log("code login succ:", e), s.GameDataCenter.nickname = e.nickname || e.nickName || "", 
                s.GameDataCenter.avatar = e.avatar || e.avatarUrl || "", s.GameDataCenter.gender = e.gender || 0, 
                s.GameDataCenter.openId = e.openid || "", s.GameDataCenter.unionId = e.unionid || "", 
                s.GameDataCenter.userId = e.user_id || "", s.GameDataCenter.userTag = e.user_tag || "", 
                s.GameDataCenter.token = e.token || "", s.GameDataCenter.etag = e.etag || e.channel || "", 
                s.GameDataCenter.euid = e.euid || "", s.GameDataCenter.channelAldTag = e.channel || "", 
                s.GameDataCenter.first = e.first || e.is_first || 0, s.GameDataCenter.regtime = e.regtime || 0, 
                s.GameDataCenter.isTodayReg = u.FLDateTime.isToday(e.regtime), s.GameDataCenter.abTestTag = e.abTest || e.ab_test || 0, 
                s.GameDataCenter.shareId = n.launchOptions.query.share_id, d.FLStore.get("first_" + s.GameDataCenter.userTag, 0) || window.userData.first || window.FLAnalysis && window.FLAnalysis.sendUserEvent("游戏被删除后再次促活", {
                    appId: l.AppConfig.APP_ID,
                    scene: n.launchOptions.scene
                }), d.FLStore.set("first_" + s.GameDataCenter.userTag, 1), d.FLStore.set("openId", e.openid), 
                t) try {
                    t.loginCallback.map(function(t) {
                        return t.emit([ void 0, e ]);
                    });
                } catch (e) {}
                n.isLogined = !0, cc.systemEvent.emit("LOGIN_SUCCESSED");
            }, t.EEventName = {
                LOGIN_SUCCESSED: "LOGIN_SUCCESSED"
            }, t.isLogined = !1, t.launchOptions = {}, t.loginCode = null, i([ m({
                type: [ cc.Component.EventHandler ],
                tooltip: "登录回调。回调函数有两个参数，第一个参数err是登录失败的错误消息，第二个参数res是登录成功的返回信息"
            }) ], t.prototype, "loginCallback", void 0), t = n = i([ h, g("添加风领组件/平台/基础组件/FLPlatformLogin (登录)"), _("https://showdoc.feigo.fun/web/#/1?page_id=131") ], t);
        }(FLBehavior);
        n.FLPlatformLogin = y, cc._RF.pop();
    }, {
        "../../../Config/AppConfig": "AppConfig",
        "../../../Config/GameDataCenter": "GameDataCenter",
        "../../Core/Base/FLAnalysis": "FLAnalysis",
        "../../Core/Base/FLDateTime": "FLDateTime",
        "../../Core/Base/FLStore": "FLStore",
        "../../Core/Network/FLNetHTTPAsync": "FLNetHTTPAsync"
    } ],
    FLPlatformNativeAd: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "023deEsd31CEJjLi13d5tYl", "FLPlatformNativeAd");
        var o = this && this.__extends || function() {
            var _e9 = function e(t, n) {
                return (_e9 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e9(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__assign || function() {
            return (i = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++) {
                    for (var i in t = arguments[n]) {
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    }
                }
                return e;
            }).apply(this, arguments);
        }, a = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        }, r = this && this.__awaiter || function(e, t, n, o) {
            function i(e) {
                return e instanceof n ? e : new n(function(t) {
                    t(e);
                });
            }
            return new (n || (n = Promise))(function(n, a) {
                function r(e) {
                    try {
                        l(o.next(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function s(e) {
                    try {
                        l(o.throw(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : i(e.value).then(r, s);
                }
                l((o = o.apply(e, t || [])).next());
            });
        }, s = this && this.__generator || function(e, t) {
            var n, o, i, a, r = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this;
            }), a;
            function s(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;r; ) {
                    try {
                        if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
                        0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                        switch (o = 0, i && (a = [ 2 & a[0], i.value ]), a[0]) {
                          case 0:
                          case 1:
                            i = a;
                            break;

                          case 4:
                            return r.label++, {
                                value: a[1],
                                done: !1
                            };

                          case 5:
                            r.label++, o = a[1], a = [ 0 ];
                            continue;

                          case 7:
                            a = r.ops.pop(), r.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = r.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                r = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                r.label = a[1];
                                break;
                            }
                            if (6 === a[0] && r.label < i[1]) {
                                r.label = i[1], i = a;
                                break;
                            }
                            if (i && r.label < i[2]) {
                                r.label = i[2], r.ops.push(a);
                                break;
                            }
                            i[2] && r.ops.pop(), r.trys.pop();
                            continue;
                        }
                        a = t.call(e, r);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a = [ 6, e ], o = 0;
                    } finally {
                        n = i = 0;
                    }
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLPlatformNativeAd = void 0;
        var l, c = e("../../Core/Base/FLStore"), u = e("../../Core/Network/FLNetHTTPAsync"), d = e("../../../Config/AppConfig"), p = e("../../../Config/GameConfig");
        (function(e) {
            e[e.NONE = 0] = "NONE", e[e.LANDSCAPE = 1] = "LANDSCAPE", e[e.LANDSCAPE_CENTER = 2] = "LANDSCAPE_CENTER";
        })(l || (l = {}));
        var f = cc._decorator, h = f.ccclass, m = f.property, g = f.menu, _ = (f.help, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dynamicId = !1, t.adUnitId = "", t.adConfigKey = "", t.showOnStart = !0, 
                t.isTouchByMistake = !1, t.isAutoUpdate = !1, t.positionTag = "", t.alignRight = !1, 
                t.top = 0, t.left = 0, t.loadCount = 0, t.loadErrorCount = 0, t.autoUpdateTimeCache = 0, 
                t.updateNativeInterval = 60, t.loadNativeMaxCount = 20, t.quickUpdateCount = 0, 
                t;
            }
            var n;
            return o(t, e), n = t, t.prototype.onEnabled = function() {
                var e = this;
                try {
                    this.updateNativeInterval = window.serverConfig ? window.serverConfig.NATIVE_AD_UPDATE_INTERVAL : 60, 
                    this.loadNativeMaxCount = window.serverConfig ? window.serverConfig.NATIVE_AD_LOAD_MAX : 20;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    this.updateNativeInterval = 60, this.loadNativeMaxCount = 20;
                }
                "" === this.positionTag && (this.positionTag = this.adConfigKey.trim()), this.scheduleOnce(function() {
                    e.createNativeAd(), e.showOnStart && e.show();
                }, .05);
            }, t.prototype.onDisabled = function() {
                this.hide(), n.hideAllNativeAd();
            }, t.prototype.onAddEvents = function() {
                this.registerEvent("update_ad_config", this.updateAdConfig, this), this.registerEvent("WECHAT_MINI_GAME_HIDE", this.onTouchNativeAd, this);
            }, t.prototype.onUpdate = function(e) {
                if (!this.isAutoUpdate || n.loadSuccCount > this.loadNativeMaxCount) this.update = function() {}; else if (this.autoUpdateTimeCache += e, 
                !(this.autoUpdateTimeCache < 1 || p.GameConfig.serverConfig.reviewSwitch)) {
                    this.autoUpdateTimeCache -= 1;
                    try {
                        var t = n.nativeAds[this.adUnitId];
                        t && t.view && t.view.show && t.isShow && (t.showTime += 1, this.updateNativeInterval < t.showTime && this.updateNativeAd());
                    } catch (e) {}
                }
            }, t.prototype.onTouchNativeAd = function(e) {
                var t = this.adUnitId;
                if (n.nativeAds[t].isShow) {
                    if (n.loadSuccCount < this.loadNativeMaxCount) {
                        this.destroyNativeAd();
                        try {
                            this.createNativeAd(), this.show();
                        } catch (e) {}
                    }
                    var o = Math.floor(Date.now() / 1e3);
                    window.FLAnalysis && window.FLAnalysis.sendUserEvent("点击原生广告成功", {
                        adId: t,
                        posTag: this.positionTag,
                        loadCount: this.loadCount,
                        adType: e ? e.adType : "未知广告"
                    });
                    try {
                        u.FLNetHTTPAsync.post(d.AppConfig.APP_SERVER_HOST + "/api/user/banner-click-log", {
                            banner_id: t,
                            runtime: fl.getRunTime(),
                            clienttime: o
                        }, {
                            "x-access-token": window.userData ? window.userData.token : "",
                            "client-ver": window.APP_VERSION
                        });
                    } catch (e) {}
                }
            }, t.prototype.updateAdConfig = function() {
                return r(this, void 0, void 0, function() {
                    return s(this, function(e) {
                        return this.createNativeAd(this.showOnStart), [ 2 ];
                    });
                });
            }, t.prototype.initNativeAdId = function() {
                if (this.isTouchByMistake) {
                    var e = [], t = void 0;
                    for (var o in n.nativeAds) {
                        (t = n.nativeAds[o]) && t.isLoaded && e.push(t.adUnitId || o);
                    }
                    e[0] && (this.adUnitId = e[Math.floor(Math.random() * e.length)]);
                }
                var i = window.adNativeConfigs;
                this.dynamicId && i && i[0] ? this.adUnitId = i[Math.floor(Math.random() * i.length)] : "" !== this.adConfigKey.trim() && window.adConfigs && (this.adUnitId = window.adConfigs[this.adConfigKey] || this.adUnitId);
            }, t.prototype.createNativeAd = function(e) {
                if (void 0 === e && (e = !1), this.hide(), this.initNativeAdId(), this.adUnitId && "" !== this.adUnitId) {
                    var t = this.adUnitId, o = n.nativeAds[t];
                    if (o && o.view && o.view.show) return this.bindADViewEvents(o.view, o, t, e), void (e && (o.view.show(), 
                    o.isShow = !0));
                    var i = cc.view.getFrameSize().width, a = this.left, r = this.top;
                    this.alignRight && (a = i - a);
                    var s = cc.view.getFrameSize().width;
                    cc.view.getFrameSize().height;
                    a = .5 * s - 180;
                    var l = wx.createCustomAd({
                        adUnitId: t,
                        style: {
                            left: a,
                            top: r
                        }
                    });
                    try {
                        this.updateNativeInterval = window.serverConfig ? window.serverConfig.NATIVE_AD_UPDATE_INTERVAL : 180, 
                        this.loadNativeMaxCount = window.serverConfig ? window.serverConfig.NATIVE_AD_LOAD_MAX : 20;
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        this.updateNativeInterval = 60, this.loadNativeMaxCount = 20;
                    }
                    if (o = {
                        view: l,
                        adUnitId: t,
                        showTime: 0
                    }, n.nativeAds[t] = o, ++this.loadCount, this.bindADViewEvents(l, o, t, e), e) {
                        o.view.show(), o.isShow = !0;
                        try {
                            window.FLAnalysis && window.FLAnalysis.sendUserEvent("显示原生广告", {
                                adId: this.adUnitId,
                                posTag: this.positionTag
                            });
                        } catch (e) {}
                    }
                }
            }, t.prototype.bindADViewEvents = function(e, t, o, a) {
                var r = this;
                e.onLoad(function() {
                    t && (t.isLoaded = !0), window.FLAnalysis && window.FLAnalysis.sendUserEvent("加载原生广告成功", {
                        adKey: r.adConfigKey,
                        adId: r.adUnitId,
                        posTag: r.positionTag,
                        loadCount: r.loadCount
                    }), n.loadSuccCount += 1;
                }), e.onError(function(s) {
                    if (t && (t.isLoaded = !1), ++r.loadErrorCount, r.loadErrorCount > 5) window.FLAnalysis && window.FLAnalysis.sendUserEvent("加载原生广告失败", i({
                        adKey: r.adConfigKey,
                        adId: r.adUnitId,
                        posTag: r.positionTag,
                        loadErrCount: r.loadErrorCount
                    }, s)); else {
                        window.FLAnalysis && window.FLAnalysis.sendUserEvent("加载原生广告错误", i({
                            adKey: r.adConfigKey,
                            adId: r.adUnitId,
                            posTag: r.positionTag,
                            loadErrCount: r.loadErrorCount
                        }, s));
                        try {
                            e.hide(), e.offLoad(), e.offError(), e.destroy();
                        } catch (e) {}
                        try {
                            n.nativeAds[o] = void 0, r && r.scheduleOnce(r.createNativeAd.bind(r, a), .3);
                        } catch (e) {}
                        r.onErrorNativeAd(s);
                    }
                });
            }, t.prototype.updateNativeAd = function() {
                ++this.quickUpdateCount, this.destroyNativeAd();
                try {
                    this.createNativeAd(), this.show();
                } catch (e) {}
            }, t.prototype.checkQuickUpdate = function(e) {
                return !(p.GameConfig.serverConfig.QUICK_UPDATE_BANNER_INTERVAL > e.showTime) && !(this.quickUpdateCount > p.GameConfig.serverConfig.QUICK_UPDATE_BANNER_COUNT) && 3 !== p.GameConfig.serverConfig.SWITCH_QUICK_UPDATE_BANNER && 0 !== p.GameConfig.serverConfig.SWITCH_QUICK_UPDATE_BANNER;
            }, t.prototype.show = function() {
                var e = n.nativeAds[this.adUnitId];
                if (!e || !e.view || !e.view.show) return this.createNativeAd(!0);
                e.view.show(), e.isShow = !0;
                try {
                    window.FLAnalysis && window.FLAnalysis.sendUserEvent("显示原生广告", {
                        adId: this.adUnitId,
                        posTag: this.positionTag
                    });
                } catch (e) {}
            }, t.prototype.hide = function() {
                this.unscheduleAllCallbacks();
                try {
                    var e = n.nativeAds[this.adUnitId];
                    e && e.view && (e.view.hide(), e.isShow = !1, e.view.offLoad(), e.view.offError());
                } catch (e) {}
            }, t.prototype.destroyNativeAd = function() {
                this.unscheduleAllCallbacks();
                var e = this.adUnitId;
                try {
                    var t = n.nativeAds[e];
                    t && t.view && (t.view.hide(), t.view.offLoad(), t.view.offError(), t.view.destroy());
                } catch (e) {}
                return n.nativeAds[e] = void 0, e;
            }, t.hideAllNativeAd = function() {
                var e;
                for (var t in n.nativeAds) {
                    (e = n.nativeAds[t]) && e.view && e.view.hide ? (e.view.hide(), e.isShow = !1) : n.nativeAds[t] = void 0;
                }
            }, t.getNativeAdTop = function() {
                var e = cc.view.getVisibleSize(), t = e.height - 255;
                return e.height / e.width >= 2 && (t = e.height - 305), t *= cc.view.getFrameSize().width / e.width;
            }, t.getNativeAdLeft = function(e) {
                void 0 === e && (e = 0);
                var t = cc.view.getVisibleSize(), n = 0;
                return t.width / t.height >= 2 && (n = 40), e + (n *= cc.view.getFrameSize().width / t.width);
            }, t.prototype.onErrorNativeAd = function(e) {
                switch (e.errCode) {
                  case 1e3:
                    "后端接口调用失败，暂时无法观看";
                    break;

                  case 1001:
                    "参数错误，暂时无法观看";
                    break;

                  case 1002:
                    "广告单元无效，暂时无法观看";
                    break;

                  case 1003:
                    "内部错误，暂时无法观看";
                    break;

                  case 1004:
                    "无合适的广告，暂时无法观看";
                    break;

                  case 1005:
                    "广告组件审核中，暂时无法观看";
                    break;

                  case 1006:
                    "广告组件被驳回，暂时无法观看";
                    break;

                  case 1007:
                    "广告组件被封禁，暂时无法观看";
                    break;

                  case 1008:
                    "广告单元已关闭，暂时无法观看";
                    break;

                  default:
                    "遇到未知错误，暂时无法观看";
                }
                try {
                    this.sendWarning(e.errCode);
                } catch (e) {}
            }, t.prototype.sendWarning = function(e) {
                return void 0 === e && (e = "-1000"), r(this, void 0, void 0, function() {
                    var t, n;
                    return s(this, function(o) {
                        switch (o.label) {
                          case 0:
                            if (t = 0, n = c.FLStore.getTodayValue("NativeSendWaring", 0)) return [ 2 ];
                            switch (e = e.toString()) {
                              case "1002":
                              case "1005":
                              case "1006":
                              case "1007":
                                t = 1;
                            }
                            if (1 !== t || 0 !== n) return [ 3, 4 ];
                            c.FLStore.setTodayValue("BannerSendWaring", 1), o.label = 1;

                          case 1:
                            return o.trys.push([ 1, 3, , 4 ]), [ 4, u.FLNetHTTPAsync.post("https://warning.feigo.fun/api/warning/flow-main", {
                                name: d.AppConfig.GAME_NAME,
                                appid: d.AppConfig.APP_ID,
                                code: e
                            }) ];

                          case 2:
                            return o.sent(), [ 3, 4 ];

                          case 3:
                            return o.sent(), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, t.prototype.checkWidget = function() {
                cc.view.getVisibleSize().height / cc.view.getVisibleSize().width >= 2 && (fl.platform == fl.EPlatformType.MINI_GAME_OPPO ? this.top = 675 : fl.platform == fl.EPlatformType.MINI_GAME_VIVO && (this.top = 630), 
                "HUAWEI" == fl.adapter.getSystemInfoSync().brand && (this.top = 670));
            }, t.nativeAds = {}, t.loadSuccCount = 0, a([ m({
                tooltip: "是否动态广告ID，动态广告id会从window.adNativeConfigs里面随机一个广告ID使用"
            }) ], t.prototype, "dynamicId", void 0), a([ m({
                tooltip: "Native广告单元ID，由微信官方提供",
                visible: function visible() {
                    return !this.dynamicId;
                }
            }) ], t.prototype, "adUnitId", void 0), a([ m({
                tooltip: "广告单元ID预埋Key，用于从服务端获取的配置中读取广告单元，服务端获取广告配置后要设置到FLPlatformNativeAd组件的adConfig属性上。该配置会覆盖默认的adUnitId属性",
                visible: function visible() {
                    return !this.dynamicId;
                }
            }) ], t.prototype, "adConfigKey", void 0), a([ m({
                tooltip: "是否在组件运行时自动显示"
            }) ], t.prototype, "showOnStart", void 0), a([ m({
                tooltip: "是否属于误触类型"
            }) ], t.prototype, "isTouchByMistake", void 0), a([ m({
                tooltip: "是否自动刷新"
            }) ], t.prototype, "isAutoUpdate", void 0), a([ m({
                tooltip: "广告位置标记，用于统计"
            }) ], t.prototype, "positionTag", void 0), a([ m({
                tooltip: "原生广告右对齐"
            }) ], t.prototype, "alignRight", void 0), a([ m({
                tooltip: "原生广告的位置Top"
            }) ], t.prototype, "top", void 0), a([ m({
                tooltip: "原生广告的位置Left"
            }) ], t.prototype, "left", void 0), t = n = a([ h, g("添加风领组件/平台/广告/FLPlatformNativeAd (原生广告)") ], t);
        }(FLBehavior));
        n.FLPlatformNativeAd = _, cc._RF.pop();
    }, {
        "../../../Config/AppConfig": "AppConfig",
        "../../../Config/GameConfig": "GameConfig",
        "../../Core/Base/FLStore": "FLStore",
        "../../Core/Network/FLNetHTTPAsync": "FLNetHTTPAsync"
    } ],
    FLPlatformRecommendDatas: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "481f5zuvFVLJpHtMconaNiq", "FLPlatformRecommendDatas");
        var o = this && this.__extends || function() {
            var _e10 = function e(t, n) {
                return (_e10 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e10(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        }, a = this && this.__awaiter || function(e, t, n, o) {
            function i(e) {
                return e instanceof n ? e : new n(function(t) {
                    t(e);
                });
            }
            return new (n || (n = Promise))(function(n, a) {
                function r(e) {
                    try {
                        l(o.next(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function s(e) {
                    try {
                        l(o.throw(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : i(e.value).then(r, s);
                }
                l((o = o.apply(e, t || [])).next());
            });
        }, r = this && this.__generator || function(e, t) {
            var n, o, i, a, r = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this;
            }), a;
            function s(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;r; ) {
                    try {
                        if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
                        0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                        switch (o = 0, i && (a = [ 2 & a[0], i.value ]), a[0]) {
                          case 0:
                          case 1:
                            i = a;
                            break;

                          case 4:
                            return r.label++, {
                                value: a[1],
                                done: !1
                            };

                          case 5:
                            r.label++, o = a[1], a = [ 0 ];
                            continue;

                          case 7:
                            a = r.ops.pop(), r.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = r.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                r = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                r.label = a[1];
                                break;
                            }
                            if (6 === a[0] && r.label < i[1]) {
                                r.label = i[1], i = a;
                                break;
                            }
                            if (i && r.label < i[2]) {
                                r.label = i[2], r.ops.push(a);
                                break;
                            }
                            i[2] && r.ops.pop(), r.trys.pop();
                            continue;
                        }
                        a = t.call(e, r);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a = [ 6, e ], o = 0;
                    } finally {
                        n = i = 0;
                    }
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLPlatformRecommendDatas = void 0;
        var s, l = e("../../../Config/AppConfig"), c = e("../../Core/Network/FLNetHTTPAsync"), u = e("./FLPlatformRecommendIcon");
        (function(e) {
            e[e.DEFAULT = 0] = "DEFAULT", e[e.POS_1 = 1] = "POS_1", e[e.POS_2 = 2] = "POS_2", 
            e[e.POS_3 = 3] = "POS_3", e[e.POS_4 = 4] = "POS_4", e[e.POS_5 = 5] = "POS_5";
        })(s || (s = {}));
        var d = cc._decorator, p = d.ccclass, f = d.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.recommendPositionTag = s.DEFAULT, t.items = [], t.itemPrefab = null, t.itemsPanel = null, 
                t.isRandom = !1, t.isLoopPlay = !1, t.loopTimeKey = "", t._loopIndex = 0, t;
            }
            return o(t, e), t.prototype.onAddEvents = function() {}, t.prototype.onRemoveEvents = function() {}, 
            t.prototype.onStart = function() {
                window.recommendDatas || (window.recommendDatas = {});
                var e = window.recommendDatas[this.recommendPositionTag];
                e ? this.initItems(e) : this.getDataFromServer();
            }, t.prototype.onDestroyed = function() {}, t.prototype.getDataFromServer = function() {
                return a(this, void 0, void 0, function() {
                    var e;
                    return r(this, function(t) {
                        switch (t.label) {
                          case 0:
                            return t.trys.push([ 0, 2, , 3 ]), [ 4, c.FLNetHTTPAsync.post(l.AppConfig.APP_SERVER_HOST + "/api/channel/config", {
                                locaiton: this.recommendPositionTag || 1,
                                appids: []
                            }, {
                                "client-ver": l.AppConfig.APP_VERSION
                            }) ];

                          case 1:
                            return e = t.sent(), window.recommendDatas[this.recommendPositionTag] = e, this.initItems(e), 
                            [ 3, 3 ];

                          case 2:
                            return t.sent(), [ 3, 3 ];

                          case 3:
                            return [ 2 ];
                        }
                    });
                });
            }, t.prototype.initItems = function(e) {
                var t = this;
                if (this.items && this.items.length > 0) e[0] ? (this.items.map(function(t, n) {
                    e[n] && t.setData(e[n]);
                }), this.itemsPanel && !this.itemsPanel.active && (this.itemsPanel.active = !0)) : this.itemsPanel && (this.itemsPanel.active = !1); else if (this.itemsPanel && this.itemPrefab) {
                    var n, o;
                    this.items = [], e.map(function(e) {
                        (n = cc.instantiate(t.itemPrefab)).parent = t.itemsPanel, (o = n.getComponent(u.FLPlatformRecommendIcon)) && o.setData(e), 
                        t.items.push(o);
                    });
                }
                this.onRandomAlert(), this.isLoopPlay && (this._loopIndex = this.items.length, this.schedule(this.onLoopPlay, window.serverConfig[this.loopTimeKey] || 3));
            }, t.prototype.onLoopPlay = function() {
                var e = this;
                this.items.map(function(t, n) {
                    e._loopIndex++, e._loopIndex >= window.recommendDatas[e.recommendPositionTag].length && (e._loopIndex = 0), 
                    window.recommendDatas[e.recommendPositionTag][e._loopIndex] && t.setData(window.recommendDatas[e.recommendPositionTag][e._loopIndex]);
                });
            }, t.prototype.onRandomAlert = function() {
                return a(this, void 0, void 0, function() {
                    var e;
                    return r(this, function(t) {
                        return !this.isRandom || null === this.items.length || window.serverConfig.reviewSwitch || 3 === window.serverConfig.SWITCH_GAME_BOX_RANDOM ? [ 2 ] : (e = this.items[this.randomNumber(0, this.items.length - 1)], 
                        this.itemsPanel.children, e && e.onRandomPlay(), [ 2 ]);
                    });
                });
            }, t.prototype.randomNumber = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1) + e);
            }, i([ f({
                type: cc.Enum(s),
                tooltip: "互推位标识"
            }) ], t.prototype, "recommendPositionTag", void 0), i([ f({
                type: [ u.FLPlatformRecommendIcon ],
                tooltip: "互推图标广告组件"
            }) ], t.prototype, "items", void 0), i([ f({
                type: cc.Prefab,
                tooltip: "卖量图标的预制体"
            }) ], t.prototype, "itemPrefab", void 0), i([ f({
                type: cc.Node,
                tooltip: "卖量图标父容器"
            }) ], t.prototype, "itemsPanel", void 0), i([ f({
                tooltip: "是否开启随机弹窗."
            }) ], t.prototype, "isRandom", void 0), i([ f({
                tooltip: "是否开启轮播."
            }) ], t.prototype, "isLoopPlay", void 0), i([ f({
                tooltip: "轮播间隔时间开关.",
                visible: function visible() {
                    return this.isLoopPlay;
                }
            }) ], t.prototype, "loopTimeKey", void 0), t = i([ p ], t);
        }(FLBehavior);
        n.FLPlatformRecommendDatas = h, cc._RF.pop();
    }, {
        "../../../Config/AppConfig": "AppConfig",
        "../../Core/Network/FLNetHTTPAsync": "FLNetHTTPAsync",
        "./FLPlatformRecommendIcon": "FLPlatformRecommendIcon"
    } ],
    FLPlatformRecommendIcon: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ec0d3rpyQZPqLTGtP/z37f8", "FLPlatformRecommendIcon");
        var o = this && this.__extends || function() {
            var _e11 = function e(t, n) {
                return (_e11 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e11(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        }, a = this && this.__awaiter || function(e, t, n, o) {
            function i(e) {
                return e instanceof n ? e : new n(function(t) {
                    t(e);
                });
            }
            return new (n || (n = Promise))(function(n, a) {
                function r(e) {
                    try {
                        l(o.next(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function s(e) {
                    try {
                        l(o.throw(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : i(e.value).then(r, s);
                }
                l((o = o.apply(e, t || [])).next());
            });
        }, r = this && this.__generator || function(e, t) {
            var n, o, i, a, r = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this;
            }), a;
            function s(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;r; ) {
                    try {
                        if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
                        0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                        switch (o = 0, i && (a = [ 2 & a[0], i.value ]), a[0]) {
                          case 0:
                          case 1:
                            i = a;
                            break;

                          case 4:
                            return r.label++, {
                                value: a[1],
                                done: !1
                            };

                          case 5:
                            r.label++, o = a[1], a = [ 0 ];
                            continue;

                          case 7:
                            a = r.ops.pop(), r.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = r.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                r = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                r.label = a[1];
                                break;
                            }
                            if (6 === a[0] && r.label < i[1]) {
                                r.label = i[1], i = a;
                                break;
                            }
                            if (i && r.label < i[2]) {
                                r.label = i[2], r.ops.push(a);
                                break;
                            }
                            i[2] && r.ops.pop(), r.trys.pop();
                            continue;
                        }
                        a = t.call(e, r);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a = [ 6, e ], o = 0;
                    } finally {
                        n = i = 0;
                    }
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLPlatformRecommendIcon = void 0;
        var s = e("../../../Config/AppConfig"), l = e("../../../Config/GameDataCenter"), c = e("../../Core/Network/FLNetHTTPAsync"), u = e("../../UI/UIManager/FLUIManager"), d = cc._decorator, p = d.ccclass, f = d.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.icon = null, t.labName = null, t.positionTag = "", t.isBindTouchEvent = !0, 
                t.data = null, t;
            }
            var n;
            return o(t, e), n = t, t.prototype.onAddEvents = function() {
                this.isBindTouchEvent && this.node.on(cc.Node.EventType.TOUCH_START, this.onClicked, this);
            }, t.prototype.onRemoveEvents = function() {}, t.prototype.onStart = function() {}, 
            t.prototype.onDestroyed = function() {}, t.prototype.onClicked = function() {
                var e = this;
                if (!this.data) return cc.systemEvent.emit("RECOMMEND_ICON_CANCELLED"), console.log("卖量图标数据为空");
                var t = this.data.id || this.data.appid;
                try {
                    n.navigateToMiniProgram(this.data.appid || this.data.pkgName, this.data.path, this.data.extraData, function(n, o) {
                        if (n) {
                            if (l.GameDataCenter.isJumpBox || l.GameDataCenter.onGameBox) return;
                            return l.GameDataCenter.isJumpBox = !0, u.FLUIManager.open("ui/GameBox/panel/WXGameBoxPanel"), 
                            console.log("取消");
                        }
                        e.statistics(t);
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error(e);
                }
            }, t.prototype.setData = function(e) {
                this.data = e, this.positionTag = e.positionTag || this.positionTag || "", this.labName && (this.labName.string = e.name), 
                this.icon && (1 === this.data.logo_status ? this.displayIconServer() : this.displayIconLocal());
            }, t.prototype.displayIconLocal = function() {
                var e = this;
                cc.resources.load(this.data.logo, cc.SpriteFrame, function(t, n) {
                    if (t) return e.displayIconServer();
                    e.icon.spriteFrame = n, e.icon.node.width = e.icon.node.width, e.icon.node.height = e.icon.node.height;
                });
            }, t.prototype.displayIconServer = function() {
                var e = this;
                n.loadRemoteCacheFile({
                    url: this.data.logo,
                    type: "png"
                }, function(t, n) {
                    !t && e && e.icon && (e.icon.spriteFrame = new cc.SpriteFrame(n), e.icon.node.width = e.icon.node.width, 
                    e.icon.node.height = e.icon.node.height);
                });
            }, t.loadRemoteCacheFile = function(e, t, o) {
                if (void 0 === o && (o = !1), !fl.adapter.isMiniGameWX) return cc.assetManager.loadRemote(e.url, {
                    type: e.type
                }, function(e, n) {
                    t && t(e, n);
                });
                if (!o && window.localImages) {
                    var i = n.getFileName(e.url), a = i.fileName, r = i.extName;
                    if (a && -1 !== window.localImages.indexOf(a)) return cc.assetManager.loadRemote("icons/" + a + "." + r, function(o, i) {
                        if (o) return n.loadRemoteCacheFile(e, t, !0);
                        t(o, i);
                    });
                }
                try {
                    var s = wx.getFileSystemManager(), l = window.FLStore.get("cacheImg_" + e.url, null);
                    if (l) try {
                        return s.accessSync(l), e.url = l, cc.assetManager.loadRemote(e.url, {
                            type: e.type
                        }, function(e, n) {
                            t && t(e, n);
                        });
                    } catch (e) {}
                    wx.downloadFile({
                        url: e.url,
                        success: function success(n) {
                            if (200 === n.statusCode) {
                                var o = e.url.split("/"), i = wx.env.USER_DATA_PATH + "/" + o[o.length - 1];
                                s.saveFileSync(n.tempFilePath, i), window.FLStore.set("cacheImg_" + e.url, i), e.url = i, 
                                cc.assetManager.loadRemote(e.url, {
                                    type: e.type
                                }, function(e, n) {
                                    t && t(e, n);
                                });
                            }
                        },
                        fail: function fail(n) {
                            cc.assetManager.loadRemote(e.url, {
                                type: e.type
                            }, function(e, n) {
                                t && t(e, n);
                            });
                        }
                    });
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return cc.assetManager.loadRemote(e.url, {
                        type: e.type
                    }, function(e, n) {
                        t && t(e, n);
                    });
                }
            }, t.getFileName = function(e) {
                var t = "", n = e.split("/").pop();
                if (n) {
                    var o = n.split(".");
                    n = o[0], t = o[1];
                }
                return {
                    fileName: n,
                    extName: t
                };
            }, t.navigateToMiniProgram = function(e, t, n, o) {
                void 0 === t && (t = ""), void 0 === n && (n = {}), fl.adapter.navigateToMiniProgram({
                    appId: e,
                    pkgName: e,
                    path: t,
                    extraData: n,
                    success: function success(e) {
                        return o && o(void 0, e);
                    },
                    fail: function fail(e) {
                        return o && o(e, void 0);
                    }
                });
            }, t.prototype.statistics = function(e) {
                return a(this, void 0, void 0, function() {
                    return r(this, function(t) {
                        try {
                            c.FLNetHTTPAsync.post(s.AppConfig.APP_SERVER_HOST + "/api/channel/channel-statistics", {
                                channel_id: e || this.data.id || this.data.appid,
                                location: 3
                            }, {
                                "x-access-token": window.userData ? window.userData.token : "",
                                "client-ver": s.AppConfig.APP_VERSION
                            });
                        } catch (e) {}
                        return window.FLAnalysis && window.FLAnalysis.sendUserEvent("卖量_" + this.positionTag), 
                        [ 2 ];
                    });
                });
            }, t.prototype.onRandomPlay = function() {
                return a(this, void 0, void 0, function() {
                    var e = this;
                    return r(this, function(t) {
                        this.data.id || this.data.appid || this.data.pkgName;
                        try {
                            n.navigateToMiniProgram(this.data.appid || this.data.pkgName, this.data.path, this.data.extraData, function(t, n) {
                                if (t) return console.log("取消");
                                e.statistics(null);
                            });
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            console.error(e);
                        }
                        return [ 2 ];
                    });
                });
            }, i([ f({
                type: cc.Sprite,
                tooltip: "图标"
            }) ], t.prototype, "icon", void 0), i([ f({
                type: cc.Label,
                tooltip: "名称"
            }) ], t.prototype, "labName", void 0), i([ f({
                tooltip: "位置标识"
            }) ], t.prototype, "positionTag", void 0), i([ f({
                tooltip: "是否自动绑定Touch事件"
            }) ], t.prototype, "isBindTouchEvent", void 0), t = n = i([ p ], t);
        }(FLBehavior);
        n.FLPlatformRecommendIcon = h, cc._RF.pop();
    }, {
        "../../../Config/AppConfig": "AppConfig",
        "../../../Config/GameDataCenter": "GameDataCenter",
        "../../Core/Network/FLNetHTTPAsync": "FLNetHTTPAsync",
        "../../UI/UIManager/FLUIManager": "FLUIManager"
    } ],
    FLPlatformRewardVideoAd: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e1b63F0E8pBRrbq05KJdveC", "FLPlatformRewardVideoAd");
        var o = this && this.__extends || function() {
            var _e12 = function e(t, n) {
                return (_e12 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e12(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__assign || function() {
            return (i = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++) {
                    for (var i in t = arguments[n]) {
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    }
                }
                return e;
            }).apply(this, arguments);
        }, a = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        }, r = this && this.__awaiter || function(e, t, n, o) {
            function i(e) {
                return e instanceof n ? e : new n(function(t) {
                    t(e);
                });
            }
            return new (n || (n = Promise))(function(n, a) {
                function r(e) {
                    try {
                        l(o.next(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function s(e) {
                    try {
                        l(o.throw(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : i(e.value).then(r, s);
                }
                l((o = o.apply(e, t || [])).next());
            });
        }, s = this && this.__generator || function(e, t) {
            var n, o, i, a, r = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this;
            }), a;
            function s(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;r; ) {
                    try {
                        if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
                        0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                        switch (o = 0, i && (a = [ 2 & a[0], i.value ]), a[0]) {
                          case 0:
                          case 1:
                            i = a;
                            break;

                          case 4:
                            return r.label++, {
                                value: a[1],
                                done: !1
                            };

                          case 5:
                            r.label++, o = a[1], a = [ 0 ];
                            continue;

                          case 7:
                            a = r.ops.pop(), r.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = r.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                r = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                r.label = a[1];
                                break;
                            }
                            if (6 === a[0] && r.label < i[1]) {
                                r.label = i[1], i = a;
                                break;
                            }
                            if (i && r.label < i[2]) {
                                r.label = i[2], r.ops.push(a);
                                break;
                            }
                            i[2] && r.ops.pop(), r.trys.pop();
                            continue;
                        }
                        a = t.call(e, r);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a = [ 6, e ], o = 0;
                    } finally {
                        n = i = 0;
                    }
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLPlatformRewardVideoAd = void 0;
        var l, c = e("../../Core/Base/FLStore"), u = e("../../../Config/AppConfig"), d = e("../../../Config/GameDataCenter"), p = e("../../Core/Network/FLNetHTTPAsync");
        (function(e) {
            e[e.PLAY_SUCCESSED = 1] = "PLAY_SUCCESSED", e[e.PLAY_FAILED = 2] = "PLAY_FAILED", 
            e[e.LOAD_FAILED = 3] = "LOAD_FAILED";
        })(l || (l = {}));
        var f = cc._decorator, h = f.ccclass, m = f.property, g = f.menu, _ = f.help, y = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.adUnitId = "", t.adConfigKey = "", t.adVideoPlayTag = "", t.debugVideoAd = !1, 
                t.debugVideoAdResult = l.PLAY_SUCCESSED, t.closeCallbacks = [], t.showOtherEvents = !1, 
                t.showCallbacks = [], t.loadCallbacks = [], t.errorCallbacks = [], t._onLoadVideoAdBind = null, 
                t._onCloseVideoAdBind = null, t._onErrorVideoAdBind = null, t;
            }
            var n;
            return o(t, e), n = t, t.prototype.recreateRewardedVideoAd = function(e) {
                n.videoAd || (this.adConfigKey = this.adConfigKey.trim(), this.adConfigKey.length > 0 && (this.adUnitId = e[this.adConfigKey] || this.adUnitId), 
                this.createRewardedVideoAd(this.adUnitId));
            }, t.prototype.createRewardedVideoAd = function(e) {
                fl.adapter.createRewardedVideoAd && e && 0 !== e.length && (n.videoAd && n.currentAdUnitId === e || (n.videoAd = fl.adapter.createRewardedVideoAd({
                    adUnitId: e
                }), n.currentAdUnitId = e), n.videoAd && this.offVideoCallbackEvents());
            }, t.prototype.showRewardVideoAd = function() {
                var e = this;
                return this.debugVideoAd ? (this.debugVideoAdResult === l.PLAY_SUCCESSED ? this.closeCallbacks.map(function(e) {
                    return e.emit([ void 0, {
                        msg: "视频调试模拟播放成功"
                    } ]);
                }) : this.debugVideoAdResult === l.PLAY_FAILED ? this.closeCallbacks.map(function(e) {
                    return e.emit([ {
                        msg: "视频调试模拟您关闭了视频"
                    } ]);
                }) : this.closeCallbacks.map(function(e) {
                    return e.emit([ {
                        msg: "视频调试模拟加载视频失败"
                    } ]);
                }), console.warn("激励视频广告开启了调试模式模拟结果回调，发布时必须关闭")) : c.FLStore.getTodayValue(u.AppConfig.APP_ID + "_" + d.GameDataCenter.userTag + "_playVideoCount", 0) >= (window.PLAY_VIDEO_MAX || 20) ? this.closeCallbacks.map(function(e) {
                    return e.emit([ {
                        msg: "今日视频次数已用完"
                    } ]);
                }) : n.videoAd ? (this.offVideoCallbackEvents(), this.onVideoCallbackEvents(), void n.videoAd.show().then(function(t) {
                    e.showCallbacks.map(function(t) {
                        return t.emit([ void 0, {
                            msg: "视频显示成功",
                            adVideoPlayTag: e.adVideoPlayTag
                        } ]);
                    });
                }).catch(function(t) {
                    n.videoAd.load().then(function() {
                        n.videoAd.show().then(function() {
                            e.showCallbacks.map(function(t) {
                                return t.emit([ void 0, {
                                    msg: "视频显示成功",
                                    adVideoPlayTag: e.adVideoPlayTag
                                } ]);
                            });
                        }).catch(function(t) {
                            e.closeCallbacks.map(function(n) {
                                return n.emit([ i(i({}, t), {
                                    msg: "视频广告看光了，请稍后再试",
                                    adVideoPlayTag: e.adVideoPlayTag
                                }) ]);
                            });
                        });
                    }).catch(function(t) {
                        e.closeCallbacks.map(function(n) {
                            return n.emit([ i(i({}, t), {
                                msg: "视频广告看光了，请稍后再试",
                                adVideoPlayTag: e.adVideoPlayTag
                            }) ]);
                        });
                    });
                })) : this.closeCallbacks.map(function(e) {
                    return e.emit([ {
                        msg: "视频广告看光了，请稍后再试"
                    } ]);
                });
            }, t.prototype.onEnabled = function() {
                cc.systemEvent.on("update_ad_config", this.recreateRewardedVideoAd, this), this.adUnitId = this.adUnitId.trim(), 
                this.adConfigKey = this.adConfigKey.trim(), window.adConfigs && this.adConfigKey.length > 0 && (this.adUnitId = window.adConfigs[this.adConfigKey] || this.adUnitId), 
                this.createRewardedVideoAd(this.adUnitId);
            }, t.prototype.onDisabled = function() {
                cc.systemEvent.off("update_ad_config", this.recreateRewardedVideoAd, this), n.videoAd && this.offVideoCallbackEvents();
            }, t.prototype.onVideoCallbackEvents = function() {
                this._onLoadVideoAdBind || (this._onLoadVideoAdBind = this.onLoadVideoAd.bind(this)), 
                this._onCloseVideoAdBind || (this._onCloseVideoAdBind = this.onCloseVideoAd.bind(this)), 
                this._onErrorVideoAdBind || (this._onErrorVideoAdBind = this.onErrorVideoAd.bind(this)), 
                n.videoAd.onLoad(this._onLoadVideoAdBind), n.videoAd.onClose(this._onCloseVideoAdBind), 
                n.videoAd.onError(this._onErrorVideoAdBind);
            }, t.prototype.offVideoCallbackEvents = function() {
                try {
                    this._onLoadVideoAdBind && n.videoAd.offLoad(this._onLoadVideoAdBind), this._onCloseVideoAdBind && n.videoAd.offClose(this._onCloseVideoAdBind), 
                    this._onErrorVideoAdBind && n.videoAd.offError(this._onErrorVideoAdBind);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error("注销激励式视频广告事件失败", e);
                }
            }, t.prototype.onLoadVideoAd = function(e) {
                var t = this;
                this.loadCallbacks.map(function(e) {
                    return e.emit([ void 0, {
                        msg: "视频加载成功",
                        adVideoPlayTag: t.adVideoPlayTag
                    } ]);
                });
            }, t.prototype.onCloseVideoAd = function(e) {
                var t = this;
                if (e && e.isEnded || void 0 === e) {
                    this.closeCallbacks.map(function(n) {
                        return n.emit([ void 0, i(i({}, e), {
                            adVideoPlayTag: t.adVideoPlayTag
                        }) ]);
                    });
                    var n = c.FLStore.getTodayValue(u.AppConfig.APP_ID + "_" + d.GameDataCenter.userTag + "_playVideoCount", 0);
                    c.FLStore.setTodayValue(u.AppConfig.APP_ID + "_" + d.GameDataCenter.userTag + "_playVideoCount", n + 1), 
                    this.sendWatchVideo();
                } else this.closeCallbacks.map(function(n) {
                    return n.emit([ i(i({}, e), {
                        msg: "完整看完视频才有奖励哦!",
                        adVideoPlayTag: t.adVideoPlayTag
                    }) ]);
                });
            }, t.prototype.onErrorVideoAd = function(e) {
                var t, n = this;
                switch (e.errCode) {
                  case 1e3:
                    t = "后端接口调用失败，暂时无法观看";
                    break;

                  case 1001:
                    t = "参数错误，暂时无法观看";
                    break;

                  case 1002:
                    t = "广告单元无效，暂时无法观看";
                    break;

                  case 1003:
                    t = "内部错误，暂时无法观看";
                    break;

                  case 1004:
                    t = "无合适的广告，暂时无法观看";
                    break;

                  case 1005:
                    t = "广告组件审核中，暂时无法观看";
                    break;

                  case 1006:
                    t = "广告组件被驳回，暂时无法观看";
                    break;

                  case 1007:
                    t = "广告组件被封禁，暂时无法观看";
                    break;

                  case 1008:
                    t = "广告单元已关闭，暂时无法观看";
                    break;

                  default:
                    t = "遇到未知错误，暂时无法观看";
                }
                this.errorCallbacks.map(function(o) {
                    return o.emit([ i(i({}, e), {
                        msg: t,
                        adVideoPlayTag: n.adVideoPlayTag
                    }) ]);
                });
                try {
                    this.sendWarning(e.errCode);
                } catch (e) {}
            }, t.prototype.sendWarning = function(e) {
                return void 0 === e && (e = "-1000"), r(this, void 0, void 0, function() {
                    var t, n;
                    return s(this, function(o) {
                        switch (o.label) {
                          case 0:
                            if (t = 0, n = c.FLStore.getTodayValue("RewardSendWaring", 0)) return [ 2 ];
                            switch (e = e.toString()) {
                              case "1002":
                              case "1005":
                              case "1006":
                              case "1007":
                                t = 1;
                            }
                            if (1 !== t || 0 !== n) return [ 3, 4 ];
                            c.FLStore.setTodayValue("RewardSendWaring", 1), o.label = 1;

                          case 1:
                            return o.trys.push([ 1, 3, , 4 ]), [ 4, p.FLNetHTTPAsync.post("https://warning.feigo.fun/api/warning/flow-main", {
                                name: u.AppConfig.GAME_NAME,
                                appid: u.AppConfig.APP_ID,
                                code: e
                            }) ];

                          case 2:
                            return o.sent(), [ 3, 4 ];

                          case 3:
                            return o.sent(), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, t.prototype.sendWatchVideo = function() {
                if (window.isTodayReg && d.GameDataCenter.etag) try {
                    p.FLNetHTTPAsync.get(u.AppConfig.APP_SERVER_HOST + "/api/user/watch-video-log/" + d.GameDataCenter.etag, {
                        "x-access-token": d.GameDataCenter.token,
                        "client-ver": u.AppConfig.APP_VERSION,
                        "client-os": cc.sys.os
                    });
                } catch (e) {}
            }, t.getPlayVideoCount = function() {
                return c.FLStore.getTodayValue(u.AppConfig.APP_ID + "_" + d.GameDataCenter.userTag + "_playVideoCount", 0);
            }, t.getPlayVideoCountTotal = function() {
                return window.PLAY_VIDEO_MAX || 20;
            }, t.getHaveVideoCount = function() {
                return (window.PLAY_VIDEO_MAX || 20) - c.FLStore.getTodayValue(u.AppConfig.APP_ID + "_" + d.GameDataCenter.userTag + "_playVideoCount", 0);
            }, t.videoAd = null, t.currentAdUnitId = "", a([ m({
                tooltip: "视频广告单元ID，由微信官方提供"
            }) ], t.prototype, "adUnitId", void 0), a([ m({
                tooltip: "广告单元ID预埋Key，用于从服务端获取的配置中读取广告单元，服务端获取广告配置后要设置到FLPlatformRewardVideoAd组件的adConfig属性上。该配置会覆盖默认的adUnitId属性"
            }) ], t.prototype, "adConfigKey", void 0), a([ m({
                tooltip: "播放标识，用于播放状态回调事件的识别"
            }) ], t.prototype, "adVideoPlayTag", void 0), a([ m({
                tooltip: "是否开启调试，调试用于在没有视频广告的时候验证回调逻辑是否正确"
            }) ], t.prototype, "debugVideoAd", void 0), a([ m({
                type: cc.Enum(l),
                tooltip: "调试结果设置。PLAY_SUCCESSED:播放成功, PLAY_FAILED:玩家中途关闭视频, LOAD_FAILED:视频加载失败",
                visible: function visible() {
                    return this.debugVideoAd;
                }
            }) ], t.prototype, "debugVideoAdResult", void 0), a([ m({
                type: [ cc.Component.EventHandler ],
                tooltip: "视频关闭的回调。回调函数包含两个参数，第一个参数是error错误信息，第二个参数是result播放成功的信息"
            }) ], t.prototype, "closeCallbacks", void 0), a([ m({
                tooltip: "显示其它事件"
            }) ], t.prototype, "showOtherEvents", void 0), a([ m({
                type: [ cc.Component.EventHandler ],
                visible: function visible() {
                    return this.showOtherEvents;
                },
                tooltip: "视频拉起成功的回调。回调函数包含两个参数，第一个参数是error错误信息，第二个参数是result显示成功的信息"
            }) ], t.prototype, "showCallbacks", void 0), a([ m({
                type: [ cc.Component.EventHandler ],
                visible: function visible() {
                    return this.showOtherEvents;
                },
                tooltip: "视频加载成功的回调。回调函数包含两个参数，第一个参数是error错误信息，第二个参数是result显示成功的信息"
            }) ], t.prototype, "loadCallbacks", void 0), a([ m({
                type: [ cc.Component.EventHandler ],
                visible: function visible() {
                    return this.showOtherEvents;
                },
                tooltip: "视频发生错误的回调。回调函数包含一个error参数，error带有详细的错误信息"
            }) ], t.prototype, "errorCallbacks", void 0), t = n = a([ h, g("添加风领组件/平台/广告/FLPlatformRewardVideoAd (激励视频广告)"), _("https://showdoc.feigo.fun/web/#/1?page_id=135") ], t);
        }(FLBehavior);
        n.FLPlatformRewardVideoAd = y, cc._RF.pop();
    }, {
        "../../../Config/AppConfig": "AppConfig",
        "../../../Config/GameDataCenter": "GameDataCenter",
        "../../Core/Base/FLStore": "FLStore",
        "../../Core/Network/FLNetHTTPAsync": "FLNetHTTPAsync"
    } ],
    FLPlatformServerConfig: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a79ecarK9tIJrhn4N/snP5k", "FLPlatformServerConfig");
        var o = this && this.__extends || function() {
            var _e13 = function e(t, n) {
                return (_e13 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e13(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__assign || function() {
            return (i = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++) {
                    for (var i in t = arguments[n]) {
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    }
                }
                return e;
            }).apply(this, arguments);
        }, a = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        }, r = this && this.__awaiter || function(e, t, n, o) {
            function i(e) {
                return e instanceof n ? e : new n(function(t) {
                    t(e);
                });
            }
            return new (n || (n = Promise))(function(n, a) {
                function r(e) {
                    try {
                        l(o.next(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function s(e) {
                    try {
                        l(o.throw(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : i(e.value).then(r, s);
                }
                l((o = o.apply(e, t || [])).next());
            });
        }, s = this && this.__generator || function(e, t) {
            var n, o, i, a, r = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this;
            }), a;
            function s(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;r; ) {
                    try {
                        if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
                        0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                        switch (o = 0, i && (a = [ 2 & a[0], i.value ]), a[0]) {
                          case 0:
                          case 1:
                            i = a;
                            break;

                          case 4:
                            return r.label++, {
                                value: a[1],
                                done: !1
                            };

                          case 5:
                            r.label++, o = a[1], a = [ 0 ];
                            continue;

                          case 7:
                            a = r.ops.pop(), r.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = r.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                r = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                r.label = a[1];
                                break;
                            }
                            if (6 === a[0] && r.label < i[1]) {
                                r.label = i[1], i = a;
                                break;
                            }
                            if (i && r.label < i[2]) {
                                r.label = i[2], r.ops.push(a);
                                break;
                            }
                            i[2] && r.ops.pop(), r.trys.pop();
                            continue;
                        }
                        a = t.call(e, r);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a = [ 6, e ], o = 0;
                    } finally {
                        n = i = 0;
                    }
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLPlatformServerConfig = void 0;
        var l = e("../../../Config/AppConfig"), c = e("../../../Config/GameConfig"), u = e("../../Core/Network/FLNetHTTPAsync"), d = e("../../../Config/GameDataCenter"), p = cc._decorator, f = p.ccclass, h = p.property, m = p.menu, g = p.help, _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isUpdateDatas = !1, t.isUpdateOnLoad = !1, t;
            }
            var n;
            return o(t, e), n = t, t.prototype.onAddEvents = function() {
                this.registerEvent("LOGIN_SUCCESSED", this.onLoginSuccessed, this, !0);
            }, t.prototype.onLoaded = function() {
                this.isUpdateOnLoad && this.getDataFromServer();
            }, t.prototype.onLoginSuccessed = function(e, t) {
                e || this.getDataFromServer();
            }, t.prototype.getDataFromServer = function() {
                return r(this, void 0, void 0, function() {
                    return s(this, function(e) {
                        switch (e.label) {
                          case 0:
                            return n.isUpdatedDatas && !this.isUpdateDatas ? [ 2, console.log("已经刷新过数据，且不再获取刷新", n.isUpdatedDatas, this.isUpdateDatas) ] : [ 4, this.getServerConfigsFromServer() ];

                          case 1:
                            return e.sent(), [ 4, this.getAdConfigsFromServer() ];

                          case 2:
                            return e.sent(), n.isUpdatedDatas = n.isUpdatedServerConfigs && n.isUpdatedAdConfigs, 
                            l.AppConfig.IS_DEV && console.log(c.GameConfig.serverConfig), [ 2 ];
                        }
                    });
                });
            }, t.prototype.getServerConfigsFromServer = function() {
                return r(this, void 0, void 0, function() {
                    var e, t, o, a;
                    return s(this, function(r) {
                        switch (r.label) {
                          case 0:
                            if (n.isUpdatedServerConfigs) return [ 2 ];
                            r.label = 1;

                          case 1:
                            return r.trys.push([ 1, 3, , 4 ]), e = fl.adapter.getLaunchOptionsSync(), [ 4, u.FLNetHTTPAsync.get(l.AppConfig.APP_SERVER_HOST + "/api/config/config", {
                                "x-access-token": d.GameDataCenter.token,
                                "client-ver": l.AppConfig.APP_VERSION,
                                "client-os": cc.sys.os,
                                scene: e.scene,
                                is_first: window.userData.first || 0
                            }) ];

                          case 2:
                            return t = r.sent(), this.checkConfigKey(t, "SWITCH_SEND_ANALYSIS"), c.GameConfig.serverConfig = i(i({}, c.GameConfig.serverConfig), t), 
                            c.GameConfig.serverConfig.reviewSwitch = t.reviewSwitch || 0, window.serverConfig = c.GameConfig.serverConfig, 
                            window.PLAY_VIDEO_MAX = t.PLAY_VIDEO_MAX || 20, window.flForceUpdateVersion = !!t.flForceUpdateVersion || !1, 
                            window.flForceUpdateVersion && fl.checkUpdateVersion(), t.isDebug && cc.debug.setDisplayStats(!0), 
                            n.isUpdatedServerConfigs = !0, cc.systemEvent.emit("update_server_config", c.GameConfig.serverConfig.reviewSwitch), 
                            t.reviewSwitch && this.compareVersion(l.AppConfig.APP_VERSION, t.proVersion) > 0 && 1030 != (o = fl.adapter.getLaunchOptionsSync()).scene && window.FLAnalysis && window.FLAnalysis.sendUserEvent("进入审核版本", {
                                scene: o.scene,
                                userTag: d.GameDataCenter.userTag
                            }), "release" != window.__wxConfig.envVersion && (window.serverConfig.SWITCH_SEND_ANALYSIS = 0), 
                            [ 3, 4 ];

                          case 3:
                            return a = r.sent(), fl.log("update server config error", a), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, t.prototype.getAdConfigsFromServer = function() {
                return r(this, void 0, void 0, function() {
                    var e, t, o, i, a, r;
                    return s(this, function(s) {
                        switch (s.label) {
                          case 0:
                            if (n.isUpdatedAdConfigs) return [ 2 ];
                            s.label = 1;

                          case 1:
                            return s.trys.push([ 1, 3, , 4 ]), [ 4, u.FLNetHTTPAsync.get(l.AppConfig.APP_SERVER_HOST + "/api/config/banner-value", {
                                "x-access-token": d.GameDataCenter.token,
                                "client-ver": l.AppConfig.APP_VERSION,
                                "client-os": cc.sys.os
                            }) ];

                          case 2:
                            return e = s.sent(), t = [], o = [], i = [], a = {}, e.map(function(e) {
                                switch (c.GameConfig.serverConfig[e.key] = e.value, a[e.key] = e.value, e.type) {
                                  case 1:
                                    t.push(e.value);
                                    break;

                                  case 2:
                                    o.push(e.value);
                                    break;

                                  case 3:
                                    i.push(e.value);
                                }
                            }), window.adBannerConfigs = t, window.adVideoConfigs = o, window.adInterstitialConfigs = i, 
                            window.adConfigs = a, cc.systemEvent.emit("update_ad_config", a), n.isUpdatedAdConfigs = !0, 
                            [ 3, 4 ];

                          case 3:
                            return r = s.sent(), fl.log("update ad config error", r), [ 3, 4 ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, t.prototype.checkConfigKey = function(e, t) {
                var n = fl.isEmpty(e[t]);
                if (n) throw "配置表中不存在名为'" + t + "'的配置，请检查！";
                return !n;
            }, t.EEventName = {
                UPDATE_AD_CONFIG: "update_ad_config",
                UPDATE_SERVER_CONFIG: "update_server_config"
            }, t.isUpdatedDatas = !1, t.isUpdatedAdConfigs = !1, t.isUpdatedServerConfigs = !1, 
            a([ h({
                tooltip: "是否每次刷新"
            }) ], t.prototype, "isUpdateDatas", void 0), a([ h({
                tooltip: "是否立即刷新配置"
            }) ], t.prototype, "isUpdateOnLoad", void 0), t = n = a([ f, m("添加风领组件/平台/基础组件/FLPlatformServerConfig (获取服务端游戏和广告Id配置)"), g("https://showdoc.feigo.fun/web/#/1?page_id=133") ], t);
        }(FLBehavior);
        n.FLPlatformServerConfig = _, cc._RF.pop();
    }, {
        "../../../Config/AppConfig": "AppConfig",
        "../../../Config/GameConfig": "GameConfig",
        "../../../Config/GameDataCenter": "GameDataCenter",
        "../../Core/Network/FLNetHTTPAsync": "FLNetHTTPAsync"
    } ],
    FLPlatformShare: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "58eb5S7h0dMrIp6AwwLxrGM", "FLPlatformShare");
        var o = this && this.__extends || function() {
            var _e14 = function e(t, n) {
                return (_e14 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        t.hasOwnProperty(n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e14(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__assign || function() {
            return (i = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++) {
                    for (var i in t = arguments[n]) {
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    }
                }
                return e;
            }).apply(this, arguments);
        }, a = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        }, r = this && this.__awaiter || function(e, t, n, o) {
            return new (n || (n = Promise))(function(i, a) {
                function r(e) {
                    try {
                        l(o.next(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function s(e) {
                    try {
                        l(o.throw(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function l(e) {
                    e.done ? i(e.value) : new n(function(t) {
                        t(e.value);
                    }).then(r, s);
                }
                l((o = o.apply(e, t || [])).next());
            });
        }, s = this && this.__generator || function(e, t) {
            var n, o, i, a, r = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this;
            }), a;
            function s(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;r; ) {
                    try {
                        if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
                        0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                        switch (o = 0, i && (a = [ 2 & a[0], i.value ]), a[0]) {
                          case 0:
                          case 1:
                            i = a;
                            break;

                          case 4:
                            return r.label++, {
                                value: a[1],
                                done: !1
                            };

                          case 5:
                            r.label++, o = a[1], a = [ 0 ];
                            continue;

                          case 7:
                            a = r.ops.pop(), r.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = r.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                r = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                r.label = a[1];
                                break;
                            }
                            if (6 === a[0] && r.label < i[1]) {
                                r.label = i[1], i = a;
                                break;
                            }
                            if (i && r.label < i[2]) {
                                r.label = i[2], r.ops.push(a);
                                break;
                            }
                            i[2] && r.ops.pop(), r.trys.pop();
                            continue;
                        }
                        a = t.call(e, r);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a = [ 6, e ], o = 0;
                    } finally {
                        n = i = 0;
                    }
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l, c, u = e("../../Core/Base/FLStore"), d = e("../../Core/Network/FLNetHTTPAsync"), p = e("../../../Config/AppConfig"), f = e("../../../Config/GameDataCenter"), h = e("../../../Config/GameConfig");
        (function(e) {
            e[e.STATIC = 0] = "STATIC", e[e.SERVER = 1] = "SERVER";
        })(l || (l = {})), function(e) {
            e[e.DEFAULT = 0] = "DEFAULT", e[e.ARTICLE = 1] = "ARTICLE", e[e.VIDEO = 2] = "VIDEO", 
            e[e.TOKEN = 3] = "TOKEN";
        }(c || (c = {}));
        var m = cc._decorator, g = m.ccclass, _ = m.property, y = m.menu, v = m.help, b = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isCumulativeShareCount = !0, t.shareParamsSource = l.SERVER, t.title = "", 
                t.imgUrl = "", t.query = "", t.routePath = "/api/config/share-config", t.positionTag = "", 
                t.shareType = 99, t.channel = c.DEFAULT, t.shareCallbacks = [], t;
            }
            var n;
            return o(t, e), n = t, t.prototype.onLoad = function() {
                cc.systemEvent.on("LOGIN_SUCCESSED", this.initShareParams, this);
                try {
                    this.initShareParams();
                } catch (e) {}
            }, t.prototype.onDestroy = function() {
                cc.systemEvent.off("LOGIN_SUCCESSED", this.initShareParams, this);
            }, t.prototype.initShareParams = function() {
                this.shareParamsSource === l.SERVER && "" === n.shareTitle.trim() && this.getShareParamsFromServer();
            }, t.prototype.getShareParamsFromServer = function() {
                return r(this, void 0, void 0, function() {
                    var e;
                    return s(this, function(t) {
                        switch (t.label) {
                          case 0:
                            return t.trys.push([ 0, 2, , 3 ]), [ 4, d.FLNetHTTPAsync.get("" + p.AppConfig.APP_SERVER_HOST + this.routePath, {
                                "x-access-token": f.GameDataCenter.token,
                                "client-ver": p.AppConfig.APP_VERSION
                            }) ];

                          case 1:
                            return e = t.sent(), n.shareId = e.share_id, n.shareTitle = e.share_title, n.shareImgUrl = e.share_img, 
                            1 !== e.logo_status && e.client_logo && "" !== e.client_logo && (n.shareImgUrl = e.client_logo), 
                            fl.adapter.onShareAppMessage(function() {
                                return {
                                    title: n.shareTitle,
                                    imageUrl: n.shareImgUrl,
                                    query: n.shareQuery
                                };
                            }), null !== e.activity_id && void 0 !== e.activity_id && cc.sys.platform === cc.sys.WECHAT_GAME && fl.adapter.updateShareMenu({
                                isUpdatableMessage: !0,
                                activityId: e.activity_id,
                                templateInfo: {
                                    parameterList: [ {
                                        name: "member_count",
                                        value: "" + (e.member_count || 3124123)
                                    }, {
                                        name: "room_limit",
                                        value: "" + (e.room_limit || 4312412)
                                    } ]
                                }
                            }), [ 3, 3 ];

                          case 2:
                            return t.sent(), [ 3, 3 ];

                          case 3:
                            return [ 2 ];
                        }
                    });
                });
            }, t.prototype.share = function(e) {
                var t, o, i = this, a = window.serverConfig || {
                    SHARE_MAX: 30
                };
                if (this.isCumulativeShareCount && u.FLStore.getTodayValue("todayShareCount", 0) >= a.SHARE_MAX) return fl.showToast("今日分享次数已达上限", 1.5);
                "" !== n.shareTitle && (t = n.shareTitle || this.title), "" !== n.shareImgUrl && (o = n.shareImgUrl || this.imgUrl), 
                e || "" === n.shareQuery || (e = n.shareQuery), "" !== n.shareId && (e = e + "&share_id=" + n.shareId), 
                void 0 !== this.shareType && null !== this.shareType && (e = e + "&type=" + this.shareType), 
                e = e + "&share_tag=" + this.positionTag + "&invite_tag=" + f.GameDataCenter.userTag;
                var r = !1, s = this.getTimeStamp(), l = n.shareId;
                this.onShareResume = function() {
                    if (cc.systemEvent.off(cc.game.EVENT_SHOW, i.onShareResume, i), 1 === h.GameConfig.serverConfig.shareModel) return console.log("进入cancel模式"), 
                    void setTimeout(function() {
                        return r ? console.log("随机分享被取消概率30%", r, h.GameConfig.serverConfig.shareModel) : (console.log("随机分享成功概率70%", r, h.GameConfig.serverConfig.shareModel), 
                        i.shareSuccessed(t, o, e));
                    }, 100);
                    i.getTimeStamp() - s > (h.GameConfig.serverConfig.shareSuccessDelayTime || n.shareSuccessDelayTime) ? (window.FLAnalysis && window.FLAnalysis.sendUserEvent("分享成功", {
                        posTag: i.positionTag,
                        share_id: l
                    }), i.shareSuccessed(t, o, e)) : (window.FLAnalysis && window.FLAnalysis.sendUserEvent("分享失败", {
                        posTag: i.positionTag,
                        share_id: l
                    }), i.shareFailed(t, o, e));
                }, cc.systemEvent.on(cc.game.EVENT_SHOW, this.onShareResume, this), window.FLAnalysis && window.FLAnalysis.sendUserEvent("拉起分享", {
                    posTag: this.positionTag,
                    share_id: n.shareId
                }), n.shareAppMessage(t, o, !0, e, function(n, a) {
                    if (0 !== h.GameConfig.serverConfig.shareModel) return n ? (r = !0, i.shareFailed(t, o, e)) : void i.shareSuccessed(t, o, e);
                    r = !1;
                });
            }, t.prototype.shareSuccessed = function(e, t, n) {
                if (this.shareCallbacks.map(function(o) {
                    return o.emit([ void 0, {
                        msg: "操作成功",
                        title: e,
                        img: t,
                        query: n
                    } ]);
                }), this.isCumulativeShareCount) {
                    var o = u.FLStore.getTodayValue("todayShareCount", 0);
                    u.FLStore.setTodayValue("todayShareCount", o + 1);
                }
                this.getShareParamsFromServer();
            }, t.prototype.shareFailed = function(e, t, n) {
                this.shareCallbacks.map(function(o) {
                    return o.emit([ {
                        msg: "请分享到不同的群里",
                        title: e,
                        img: t,
                        query: n
                    } ]);
                });
            }, t.shareAppMessage = function(e, t, n, o, a, r) {
                void 0 === r && (r = c.DEFAULT);
                try {
                    if (fl.adapter.isMiniGameWX && fl.adapter.aldShareAppMessage) return fl.adapter.aldShareAppMessage({
                        imageUrl: t,
                        title: e,
                        query: o,
                        ald_desc: ""
                    });
                } catch (e) {}
                var s = {
                    title: e,
                    imageUrl: t,
                    query: o,
                    withShareTicket: n,
                    success: function success(e) {
                        a && a(void 0, e);
                    },
                    fail: function fail(e) {
                        a && a(e, void 0);
                    },
                    complete: function complete(e) {},
                    cancel: function cancel(e) {
                        console.log("fl cancelled"), a && a(i({}, e, {
                            msg: "请分享给其它群"
                        }), void 0);
                        try {
                            window.FLAnalysis && window.FLAnalysis.sendUserEvent("分享-取消", fl.adapter.getSystemInfoSync().model);
                        } catch (e) {}
                    }
                };
                if (fl.adapter.isMiniGameTT) {
                    switch (r) {
                      case c.DEFAULT:
                        s.channel = "";
                        break;

                      case c.ARTICLE:
                        s.channel = "article";
                        break;

                      case c.TOKEN:
                        s.channel = "token";
                        break;

                      case c.VIDEO:
                        s.channel = "video";
                    }
                    s.desc = e, s.title = void 0;
                }
                fl.adapter.shareAppMessage(s);
            }, t.getHaveShareCount = function() {
                var e = (window.serverConfig || {
                    SHARE_MAX: 30
                }).SHARE_MAX - u.FLStore.getTodayValue("todayShareCount", 0);
                return e < 0 ? 0 : e;
            }, t.prototype.onShareResume = function(e) {}, t.prototype.getTimeStamp = function(e) {
                return e ? new Date().getTime() : Math.floor(new Date().getTime() / 1e3);
            }, t.shareSuccessDelayTime = 3.2, t.shareId = "", t.shareTitle = "", t.shareImgUrl = "", 
            t.shareQuery = "", a([ _({
                tooltip: "是否累计分享今日次数"
            }) ], t.prototype, "isCumulativeShareCount", void 0), a([ _({
                type: cc.Enum(l),
                tooltip: "分享参数来源: STATIC:组件绑定, SERVER:从服务端获取"
            }) ], t.prototype, "shareParamsSource", void 0), a([ _({
                visible: function visible() {
                    return this.shareParamsSource === l.STATIC;
                },
                tooltip: "分享文案"
            }) ], t.prototype, "title", void 0), a([ _({
                visible: function visible() {
                    return this.shareParamsSource === l.STATIC;
                },
                tooltip: "分享图URL"
            }) ], t.prototype, "imgUrl", void 0), a([ _({
                visible: function visible() {
                    return this.shareParamsSource === l.STATIC;
                },
                tooltip: "分享query参数"
            }) ], t.prototype, "query", void 0), a([ _({
                visible: function visible() {
                    return this.shareParamsSource === l.SERVER;
                },
                tooltip: "服务端获取分享参数的接口路由，不包含服务器主机地址"
            }) ], t.prototype, "routePath", void 0), a([ _({
                tooltip: "分享标记，用于客户端标识是哪个地方拉起分享的"
            }) ], t.prototype, "positionTag", void 0), a([ _({
                tooltip: "分享标记，用于服务端标识是哪个地方拉起分享的(25:助力分享，99:其它)"
            }) ], t.prototype, "shareType", void 0), a([ _({
                type: cc.Enum(c),
                tooltip: "字节小游戏的转发内容类型"
            }) ], t.prototype, "channel", void 0), a([ _({
                type: [ cc.Component.EventHandler ],
                tooltip: "分享回调。回调函数包含两个参数，第一个参数是error错误信息，第二个参数是result显示成功的信息"
            }) ], t.prototype, "shareCallbacks", void 0), t = n = a([ g, y("添加风领组件/平台/基础组件/FLPlatformShare (分享)"), v("https://showdoc.feigo.fun/web/#/1?page_id=134") ], t);
        }(FLBehavior);
        n.FLPlatformShare = b, cc._RF.pop();
    }, {
        "../../../Config/AppConfig": "AppConfig",
        "../../../Config/GameConfig": "GameConfig",
        "../../../Config/GameDataCenter": "GameDataCenter",
        "../../Core/Base/FLStore": "FLStore",
        "../../Core/Network/FLNetHTTPAsync": "FLNetHTTPAsync"
    } ],
    FLRandom: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e0575EycdRC5YzIr+MssBmD", "FLRandom"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLRandom = void 0;
        var o = function() {
            function e() {}
            return e.randomNumber = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1) + e);
            }, e.randomBool = function() {
                var t = 0;
                return e.randomNumber(1, 10) >= 5 && (t = 1), !!t;
            }, e.arrayRandomValue = function(t) {
                return t[e.randomNumber(0, t.length - 1)];
            }, e;
        }();
        n.FLRandom = o, window.FLRandom = o, Math.seed = Date.now(), Math.random = function() {
            return Math.seed = (9301 * Math.seed + 49297) % 233280, Math.seed / 233280;
        }, cc._RF.pop();
    }, {} ],
    FLStore: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "411b1xvlFBAm75kHPomzMOH", "FLStore"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLStore = void 0;
        var o = function() {
            function e() {}
            return e.set = function(t, n) {
                if (window.subGameName && -1 === t.indexOf(window.subGameName) && "coin" !== t && "diamond" !== t && "strength" !== t && "enabledMusic" !== t && "enabledEffect" !== t && "flstoreKeys" !== t && (t = window.subGameName + "_" + t), 
                e.storeCacheDatas[t] === n) {
                    var o = _typeof2(n);
                    if ("number" === o || "string" === o || "boolean" === o) return;
                }
                e.enabledStoreCache && (e.storeCacheDatas[t] = n);
                var i = {
                    type: _typeof2(n),
                    value: n
                };
                if (i = JSON.stringify(i), "flstoreKeys" !== t) {
                    var a = e.flstoreKeys || e.get("flstoreKeys", {});
                    e.flstoreKeys = a, a[t] || (a[t] = 1, e.set("flstoreKeys", a));
                }
                try {
                    e.enabledStoreCache && cc.sys.platform === cc.sys.WECHAT_GAME && "flstoreKeys" !== t ? wx.setStorage({
                        key: t,
                        data: i
                    }) : cc.sys.localStorage.setItem(t, i);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    cc.sys.platform === cc.sys.WECHAT_GAME && wx.setStorage({
                        key: t,
                        data: i
                    });
                }
            }, e.setTodayValue = function(t, n) {
                var o = new Date(), i = o.getFullYear() + "_" + o.getMonth() + "_" + o.getDay();
                return e.set(t + "_" + i, n);
            }, e.get = function(t, n) {
                window.subGameName && -1 === t.indexOf(window.subGameName) && "coin" !== t && "diamond" !== t && "strength" !== t && "enabledMusic" !== t && "enabledEffect" !== t && "flstoreKeys" !== t && (t = window.subGameName + "_" + t);
                var o = e.storeCacheDatas[t];
                if (void 0 !== o && null !== o) return o;
                if (!(o = cc.sys.localStorage.getItem(t))) return e.enabledStoreCache && e.set(t, n), 
                n;
                var i = JSON.parse(o);
                return void 0 === i.value || null === i.value ? (e.enabledStoreCache && e.set(t, n), 
                n) : (e.enabledStoreCache && e.set(t, i.value), i.value);
            }, e.getTodayValue = function(t, n) {
                var o = new Date(), i = o.getFullYear() + "_" + o.getMonth() + "_" + o.getDay();
                return e.get(t + "_" + i, n);
            }, e.getTimeIntervalValue = function(t, n, o) {
                try {
                    var i = Math.floor(Date.now() / 1e3), a = Math.floor(i / n);
                    return e.get(t + "_" + a, o);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    cc.log("FLStore.getTimeIntervalValue() : interval 不能为0！");
                }
            }, e.setTimeIntervalValue = function(t, n, o) {
                try {
                    var i = Math.floor(Date.now() / 1e3), a = Math.floor(i / n);
                    return e.set(t + "_" + a, o);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    cc.log("FLStore.getTimeIntervalValue() : interval 不能为0！");
                }
            }, e.enabledStoreCache = !0, e.storeCacheDatas = {}, e.flstoreKeys = null, e;
        }();
        n.FLStore = o;
        try {
            window.FLStore = o;
        } catch (e) {}
        cc._RF.pop();
    }, {} ],
    FLUIManagerMachine: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "86528DWHF9PUJZJGWPhY3V5", "FLUIManagerMachine"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./FLUIManager"), i = function() {
            function e() {
                this.isDebug = !1, this.states = {}, this.events = {}, this.currentStateName = null, 
                this.isInited = !1, this.closeToDestroy = [];
            }
            return Object.defineProperty(e, "instance", {
                get: function get() {
                    return e._instance || (e._instance = new e()), e._instance;
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initMachine = function(e) {
                var t = this, n = e.uiNames, i = e.trans, a = e.init;
                for (var r in n) {
                    this.addState(r, {
                        uiName: n[r]
                    });
                }
                this.closeToDestroy = e.closeToDestroy || this.closeToDestroy, (i[window.uiPattern] || i[0] || i).map(function(e) {
                    t.addTransition(e.b, e.i, e.a);
                }), this.currentStateName = a, o.FLUIManager.open(n[a]), this.isInited = !0, this.isDebug && console.log("init UIManager to", a);
            }, e.prototype.addState = function(e, t) {
                this.states[e] && cc.warn("[状态机]状态机中已经存在名为“" + e + "”的状态。"), this.states[e] = t, 
                this.states[e].stateName = e, this.events[e] = {};
            }, e.prototype.removeState = function(e) {
                this.states[e] = void 0, this.events[e] = void 0;
            }, e.prototype.addTransition = function(e, t, n) {
                if (!this.events[e]) throw "[状态机]状态机中不存在名为“" + e + "”的状态，请先添加状态。";
                this.events[e][t] && fl.warn("[状态机]状态“" + e + "”已经存在一个名为" + t + "的转换关系。"), this.events[e][t] = n;
            }, e.prototype.onTransition = function(e, t) {
                var n = this;
                if (!this.currentStateName || !this.isInited) throw "[状态机]请调用initMachine()方法初始化状态机对象。";
                var i = this.events[this.currentStateName][e];
                if (i) {
                    var a = this.states[this.currentStateName], r = this.states[i];
                    return this.isDebug && console.log("Transition:", e, "from:", a.stateName, "to:", r.stateName), 
                    t && t.transType ? (t.callbackLoad = function() {
                        o.FLUIManager.close(a.uiName, -1 !== n.closeToDestroy.indexOf(a.uiName)), n.currentStateName = i;
                    }, o.FLUIManager.openTrans(r.uiName, t)) : (o.FLUIManager.close(a.uiName, -1 !== this.closeToDestroy.indexOf(a.uiName)), 
                    this.currentStateName = i, o.FLUIManager.open(r.uiName)), !0;
                }
                return fl.warn("[状态机]非法的状态转换，在“" + this.currentStateName + "”状态下无法响应“" + e + "”操作。"), 
                !1;
            }, e.prototype.getStates = function() {
                return this.states;
            }, e.prototype.getTransitions = function() {
                return this.events;
            }, e.prototype.getCurrentStateName = function() {
                return this.currentStateName;
            }, e._instance = null, e;
        }();
        n.FLUIManagerMachine = i, window.FLUIManagerMachine = i, cc._RF.pop();
    }, {
        "./FLUIManager": "FLUIManager"
    } ],
    FLUIManager: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "95d91erg69DwpjIO23nrNpM", "FLUIManager");
        var o = this && this.__awaiter || function(e, t, n, o) {
            return new (n || (n = Promise))(function(i, a) {
                function r(e) {
                    try {
                        l(o.next(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function s(e) {
                    try {
                        l(o.throw(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a(e);
                    }
                }
                function l(e) {
                    e.done ? i(e.value) : new n(function(t) {
                        t(e.value);
                    }).then(r, s);
                }
                l((o = o.apply(e, t || [])).next());
            });
        }, i = this && this.__generator || function(e, t) {
            var n, o, i, a, r = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this;
            }), a;
            function s(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;r; ) {
                    try {
                        if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
                        0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                        switch (o = 0, i && (a = [ 2 & a[0], i.value ]), a[0]) {
                          case 0:
                          case 1:
                            i = a;
                            break;

                          case 4:
                            return r.label++, {
                                value: a[1],
                                done: !1
                            };

                          case 5:
                            r.label++, o = a[1], a = [ 0 ];
                            continue;

                          case 7:
                            a = r.ops.pop(), r.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = r.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                r = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                r.label = a[1];
                                break;
                            }
                            if (6 === a[0] && r.label < i[1]) {
                                r.label = i[1], i = a;
                                break;
                            }
                            if (i && r.label < i[2]) {
                                r.label = i[2], r.ops.push(a);
                                break;
                            }
                            i[2] && r.ops.pop(), r.trys.pop();
                            continue;
                        }
                        a = t.call(e, r);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a = [ 6, e ], o = 0;
                    } finally {
                        n = i = 0;
                    }
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function e() {}
            return e.registerUI = function(t, n) {
                void 0 === n && (n = void 0), n = n || t.name, e.instances[n] = t;
            }, e.open = function(t, n) {
                return o(this, void 0, void 0, function() {
                    var o, a, r, s, l, c;
                    return i(this, function(i) {
                        switch (i.label) {
                          case 0:
                            if (!t || "" === t) return [ 2 ];
                            if ("string" == typeof t && (t = t.replace("ui/", "")), o = t, a = t.split("/"), 
                            t = a[a.length - 1], e.opening[o]) return [ 2 ];
                            e.opening[o] = !0, i.label = 1;

                          case 1:
                            return i.trys.push([ 1, 6, , 7 ]), "FLoadingMaskPanel" === t || "loading/FLoadingMaskPanel" === t ? [ 3, 3 ] : [ 4, e.open("loading/FLoadingMaskPanel") ];

                          case 2:
                            i.sent(), i.label = 3;

                          case 3:
                            return (r = e.instances[t]) && r.getComponent && r._components ? (r.active = !0, 
                            e.reshow(r, t), e.opening[o] = void 0, "FLoadingMaskPanel" !== t && e.close("FLoadingMaskPanel"), 
                            cc.systemEvent.emit(e.EEventName.OPEN_UI, {
                                uiName: t,
                                uiPath: o,
                                node: r
                            }), n && n(void 0, r), [ 2, r ]) : (l = e.assets[t]) ? [ 3, 5 ] : [ 4, e.loadRes("ui/" + o, cc.Prefab) ];

                          case 4:
                            l = i.sent(), i.label = 5;

                          case 5:
                            return s = l, e.assets[t] = s, r = cc.instantiate(s), e.reshow(r, t), e.instances[t] = r, 
                            e.opening[o] = void 0, "FLoadingMaskPanel" !== t && e.close("FLoadingMaskPanel"), 
                            cc.systemEvent.emit(e.EEventName.OPEN_UI, {
                                uiName: t,
                                uiPath: o,
                                node: r
                            }), n && n(void 0, r), [ 2, r ];

                          case 6:
                            return c = i.sent(), e.opening[o] = void 0, "FLoadingMaskPanel" !== t && e.close("FLoadingMaskPanel"), 
                            n ? n(c) : console.error(c), [ 3, 7 ];

                          case 7:
                            return [ 2 ];
                        }
                    });
                });
            }, e.openTrans = function(t, n) {
                return o(this, void 0, void 0, function() {
                    var o;
                    return i(this, function(i) {
                        switch (i.label) {
                          case 0:
                            return o = "loading/FLoading" + n.transType + "Panel", n.uiName = t, e.transitionInfo = n, 
                            [ 4, e.open(o) ];

                          case 1:
                            return i.sent(), [ 2 ];
                        }
                    });
                });
            }, e.close = function(t, n) {
                var o;
                if (void 0 === n && (n = !1), "string" == typeof t && (t = t.replace("ui/", "")), 
                "string" == typeof t) {
                    var i = t.split("/");
                    t = i[i.length - 1], o = e.instances[t];
                } else t = (o = t).name;
                if (!o) return null;
                if (o.active = !1, o.parent = null, n && (e.instances[t] = void 0, o.destroy()), 
                window.uiQueue) {
                    var a = window.uiQueue.lastIndexOf(t);
                    -1 != a && window.uiQueue.splice(a, 1);
                }
                return cc.systemEvent.emit(e.EEventName.CLOSE_UI, {
                    uiName: t
                }), n ? null : o;
            }, e.openOnQueue = function(t, n) {
                return o(this, void 0, void 0, function() {
                    return i(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return e.queueUiName ? [ 2, e.queue.push({
                                uiName: t,
                                callback: n
                            }) ] : (e.queueUiName = t, [ 4, e.open(t, n) ]);

                          case 1:
                            return [ 2, o.sent() ];
                        }
                    });
                });
            }, e.closeOnQueue = function(t, n) {
                return void 0 === n && (n = !1), o(this, void 0, void 0, function() {
                    var o;
                    return i(this, function(i) {
                        switch (i.label) {
                          case 0:
                            return e.close(t, n), e.queueUiName = null, (o = e.queue.splice(0, 1)[0]) ? (e.queueUiName = o.uiName, 
                            [ 4, e.open(o.uiName, o.callback) ]) : [ 3, 2 ];

                          case 1:
                            i.sent(), i.label = 2;

                          case 2:
                            return [ 2 ];
                        }
                    });
                });
            }, e.loadBundle = function(t) {
                return new Promise(function(n, o) {
                    var i = e.getBundleName(t);
                    cc.assetManager.loadBundle(i.bundleName, function(e, t) {
                        if (e) return o(e);
                        t.load(i.assetPath, function(t, i) {
                            if (e) return o(t);
                            n(i);
                        });
                    });
                });
            }, e.getBundleName = function(e) {
                var t = "base", n = e, o = e.split("/");
                return "ui" == o[0] && (t = o[1], n = e.replace("ui/" + o[1] + "/", "")), {
                    bundleName: t,
                    assetPath: n
                };
            }, e.getPlatformBundleName = function() {
                var e = null;
                switch (fl.platform) {
                  case fl.EPlatformType.MINI_GAME_OPPO:
                    e = "mini_game_oppo";
                    break;

                  case fl.EPlatformType.MINI_GAME_VIVO:
                    e = "mini_game_vivo";
                    break;

                  case fl.EPlatformType.MINI_GAME_QQ:
                    e = "mini_game_qq";
                    break;

                  case fl.EPlatformType.MINI_GAME_TT:
                    e = "mini_game_tt";
                    break;

                  case fl.EPlatformType.MINI_GAME_WX:
                    e = "mini_game_wx";
                }
                return e;
            }, e.loadRes = function(e, t) {
                return new Promise(function(n, o) {
                    cc.loader.loadRes(e, t, function(e, t) {
                        return e ? o(e) : n(t);
                    });
                });
            }, e.loadResPanel = function(t, n) {
                return void 0 === n && (n = cc.Prefab), o(this, void 0, Promise, function() {
                    var o, a, r, s;
                    return i(this, function(i) {
                        switch (i.label) {
                          case 0:
                            return o = t, a = t.split("/"), t = a[a.length - 1], e.assets[t] ? [ 2, e.assets[t] ] : (r = e.assets, 
                            s = t, [ 4, e.loadRes("ui/" + o, n) ]);

                          case 1:
                            return r[s] = i.sent(), [ 2, e.assets[t] ];
                        }
                    });
                });
            }, e.reshow = function(t, n) {
                var o, i = t.getComponent(n);
                i && i.parentUIName && "" !== i.parentUIName.trim() && (o = e.instances[i.parentUIName.trim()]), 
                t.parent = o || cc.director.getScene().getChildByName("Canvas"), t.zIndex = Number(i.zIndex) || 0, 
                window.uiQueue || (window.uiQueue = []), window.uiQueue.push(n);
            }, e.getUI = function(t) {
                return e.instances[t];
            }, e.EZIndex = {
                NORMAL: 100,
                WIDGET: 5e3,
                WINDOW: 1e4,
                DIALOG: 15e3,
                TIP: cc.macro.MAX_ZINDEX - 1e3,
                MAX: cc.macro.MAX_ZINDEX - 100
            }, e.EEventName = {
                OPEN_UI: "OPEN_UI",
                CLOSE_UI: "CLOSE_UI"
            }, e.transitionInfo = null, e.instances = {}, e.assets = {}, e.queue = [], e.queueUiName = null, 
            e.opening = {}, e;
        }();
        n.FLUIManager = a;
        try {
            window.FLUIManager = a;
        } catch (e) {}
        cc._RF.pop();
    }, {} ],
    FLWidget: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6f4636mGNlLpbTq4faYSwna", "FLWidget");
        var o = this && this.__extends || function() {
            var _e15 = function e(t, n) {
                return (_e15 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e15(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator, r = a.ccclass, s = a.inspector, l = a.disallowMultiple, c = a.executeInEditMode, u = a.menu, d = a.help, p = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.offsetTop = 50, t.offsetBottom = 50, t.offsetLeft = 50, t.offsetRight = 50, 
                t.newTop = 0, t.newBottom = 0, t.newLeft = 0, t.newRight = 0, t;
            }
            return o(t, e), t.prototype.start = function() {
                this.checkOffset(), this.alignMode = cc.Widget.AlignMode.ALWAYS;
                var e = cc.view.getCanvasSize(), t = e.width, n = e.height;
                n / t >= 2 ? (this.top = this.isAlignTop ? this.newTop : this.top, this.bottom = this.isAlignBottom ? this.newBottom : this.bottom) : t / n >= 2 && (this.left = this.isAlignLeft ? this.newLeft : this.left, 
                this.right = this.isAlignRight ? this.newRight : this.right);
            }, t.prototype.updateAlignmentBottomOffset = function(e) {
                this.checkOffset(), this.bottom = e;
                var t = cc.view.getCanvasSize(), n = t.width, o = t.height;
                this.bottom = o / n >= 2 && this.isAlignBottom ? this.newBottom : e, this.updateAlignment();
            }, t.prototype.checkOffset = function() {
                this.newTop = this.top + this.offsetTop, this.newBottom = this.bottom + this.offsetBottom, 
                this.newLeft = this.left + this.offsetLeft, this.newRight = this.right + this.offsetRight;
            }, t = i([ r, l, c, s("packages://inspector/inspectors/comps/ccwidget.js"), u("添加风领组件/UI组件/FLWidget (对齐挂件-只支持px单位)"), d("https://showdoc.feigo.fun/web/#/1?page_id=20") ], t);
        }(cc.Widget);
        n.default = p, cc._RF.pop();
    }, {} ],
    FLoadingMaskPanel: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c8243Bczz5LJLY5UKvrQSim", "FLoadingMaskPanel");
        var o = this && this.__extends || function() {
            var _e16 = function e(t, n) {
                return (_e16 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e16(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FLoadingMaskPanel = void 0;
        var a = cc._decorator, r = a.ccclass, s = (a.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return o(t, e), t.prototype.onEnabled = function() {}, t.prototype.onDisabled = function() {}, 
            t.prototype.onAddEvents = function() {}, t.prototype.onRemoveEvents = function() {}, 
            t.prototype.onStart = function() {}, t.prototype.onDestroyed = function() {}, t = i([ r ], t);
        }(FLUIPanel));
        n.FLoadingMaskPanel = s, cc._RF.pop();
    }, {} ],
    GameConfig: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "94697Cf2RtBZ5QPMYa85mt1", "GameConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.GameConfig = void 0;
        var o = function() {
            function e() {}
            return e.isShowTouchByMistake = function(t) {
                return !window.reviewSwitch && !e.serverConfig.reviewSwitch && 3 !== e.serverConfig["TBS_SWITCH_" + t] && (window["TBS_COUNT_" + t] = window["TBS_COUNT_" + t] || 0, 
                !(window["TBS_COUNT_" + t] >= e.serverConfig["TBS_MAX_" + t]) && (window.gameCount = window.gameCount || 0, 
                e.serverConfig["TBS_INTERVAL_" + t] < 0 && (e.serverConfig["TBS_INTERVAL_" + t] = 0), 
                (window.gameCount - e.serverConfig["TBS_OFFSET_" + t]) % (e.serverConfig["TBS_INTERVAL_" + t] + 1) == 0 && (++window["TBS_COUNT_" + t], 
                !0)));
            }, e.serverConfig = {
                proVersion: "0.0.0.0",
                shareSwitch: 1,
                reviewSwitch: 1,
                hideOnSystem: "none",
                isEnabledWXSceneHide: 1,
                PLAY_VIDEO_MAX: 15,
                shareModel: 0,
                SHARE_MAX: 30,
                shareSuccessDelayTime: 2.6,
                mjSuccToChageSwitch: 1,
                BANNER_LOAD_MAX: 15,
                BANNER_UPDATE_INTERVAL: 10,
                SWITCH_QUICK_UPDATE_BANNER: 15,
                QUICK_UPDATE_BANNER_COUNT: 15,
                QUICK_UPDATE_BANNER_INTERVAL: 15,
                SWITCH_SEND_ANALYSIS: 1,
                SWITCH_XXXXXXXXXXX: 3,
                SWITCH_STRENGTH: 3,
                SWITCH_REVIVE: 3,
                SWITCH_SHOW_INTERSTITIAL_AD: 3,
                UI_SWITCH_XXXXXXXXX: 1,
                AD_VIDEO_XXXXXXXXXXX: "",
                AD_VIDEO_STRENGTH: "",
                AD_BANNER_XXXXXXXXXXX: "",
                STRENGTH_MAX: 15,
                ADD_STRENGTH_INTERVAL: 300,
                TBS_SWITCH_CRY: 3,
                SWITCH_SHOW_CRY1_PAGE: 3,
                SWITCH_SHOW_CRY2_PAGE: 3,
                TBS_INTERVAL_CRY: 0,
                TBS_MAX_CRY: 3,
                TBS_OFFSET_CRY: 1,
                TBS_SWITCH_JUMP: 3,
                TBS_INTERVAL_JUMP: 0,
                TBS_MAX_JUMP: 3,
                TBS_OFFSET_JUMP: 1,
                TBS_BUTTON_DELAY_JUMP: 1.8,
                TBS_AD_SHOW_DELAY_JUMP: .8,
                SWITCH_GAME_BOX_RANDOM: 3,
                ICON_LOOP_TIME: 3,
                SWITCH_SHOW_HOME_RECOMMEND: 3,
                PANEL_SHOW_TIME: .5,
                SWITCH_GAME_START_VIDEO: 3,
                SWITCH_GAME_START2_VIDEO: 3,
                SWITCH_GAME_START3_VIDEO: 3,
                SWITCH_GAME_START4_VIDEO: 3,
                SWITCH_NATIVE_AD: 3,
                insertAD_show_time: 10,
                BTN_OFFSET: 170,
                SWITCH_CRY_AD_TYPE: 1,
                TBS_BANNER_SHOW_COUNT: 1,
                CRY_JUMP_TIME: 1.5,
                SWITCH_CRY_AD_REDUCE: .15,
                SWITCH_CRY_AD_RATIO: .8,
                SWITCH_GAME_BOX_PANEL: 3,
                SWITCH_GAME_BOX2_PANEL: 3,
                BTN_SHOW_TIME: 2.5,
                QQ_APP_BOX_SHITCH: 3,
                QQ_APP_BOX_INTERVAL: 0,
                QQ_APP_BOX_HIDE_SHITCH: 4,
                BOX_VIDEO_SWITCH: 4,
                BOX_CLOSE_SWITCH: 3,
                BOX_CLOSE_DELAY: 4,
                FORCE_SHARE_VIDEO_SWITCH: 3,
                FORCE_SHARE_VIDEO_INTERVAL: 2,
                templateId: "gjo9ri2b2kd3kguuh6",
                SHARE_CLOSE_SWITCH: 3,
                SHARE_CLOSE_DELAY: 4,
                SKIN_SHOW_INTERVAL: 1,
                SKIN_CLOSE_SWITCH: 3,
                SKIN_CLOSE_DELAY: 4,
                SKIN_BG_SWITCH: 3,
                SWITCH_CLOSEP_OPUP_TIME: 0,
                SWITCH_CLOSEP_OPUP_GAME1: 1,
                SWITCH_CLOSEP_OPUP_INTERVALGAME: 0,
                SWITCH_OPUP_JUMP_VIDEO: 3,
                SWITCH_CLOSEP_OPUP: 3,
                SWITCH_CLOSEP_OPUP_INVALID: 0,
                SWITCH_CLOSEP_OPUP_INVALID1: 1,
                SWITCH_CLOSEP_OPUP_INTERVALINVALID: 0,
                SWITCH_TIPS_OPUP_TIME: 0
            }, e;
        }();
        n.GameConfig = o, window.serverConfig = o.serverConfig, cc._RF.pop();
    }, {} ],
    GameDataCenter: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "016d0ah+FdCPZqODg10WTek", "GameDataCenter"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.GameDataCenter = void 0;
        var o = e("../Framework/Core/Base/FLStore"), i = function() {
            function e() {}
            return Object.defineProperty(e, "nickname", {
                get: function get() {
                    return e._nickname;
                },
                set: function set(t) {
                    e._nickname = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_NICKNAME, e._nickname);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "avatar", {
                get: function get() {
                    return e._avatar;
                },
                set: function set(t) {
                    e._avatar = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_AVATAR, e._avatar);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "gender", {
                get: function get() {
                    return e._gender;
                },
                set: function set(t) {
                    e._gender = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_GENDER, e._gender);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "openId", {
                get: function get() {
                    return e._openId;
                },
                set: function set(t) {
                    e._openId = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_OPENID, e._openId);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "unionId", {
                get: function get() {
                    return e._unionId;
                },
                set: function set(t) {
                    e._unionId = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_UNIONID, e._unionId);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "userId", {
                get: function get() {
                    return e._userId;
                },
                set: function set(t) {
                    e._userId = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_USERID, e._userId);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "userTag", {
                get: function get() {
                    return e._userTag;
                },
                set: function set(t) {
                    e._userTag = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_USERTAG, e._userTag);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "token", {
                get: function get() {
                    return e._token;
                },
                set: function set(t) {
                    e._token = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_TOKEN, e._token);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "etag", {
                get: function get() {
                    return e._etag;
                },
                set: function set(t) {
                    e._etag = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_ETAG, e._etag);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "euid", {
                get: function get() {
                    return e._euid;
                },
                set: function set(t) {
                    e._euid = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_EUID, e._euid);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "coin", {
                get: function get() {
                    return e._coin;
                },
                set: function set(t) {
                    e._coin = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_COIN, e._coin);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "power", {
                get: function get() {
                    return e._power;
                },
                set: function set(t) {
                    e._power = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_POWER, e._power);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "skinId", {
                get: function get() {
                    return e._skinId;
                },
                set: function set(t) {
                    e._skinId = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_SKINID, e._skinId);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "roleLevel", {
                get: function get() {
                    return e._roleLevel;
                },
                set: function set(t) {
                    e._roleLevel = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_ROLE_LEVEL, e._roleLevel);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "gameLevel", {
                get: function get() {
                    return e._gameLevel = o.FLStore.get("GAME_LEVEL", 1), e._gameLevel;
                },
                set: function set(t) {
                    e._gameLevel = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_GAME_LEVEL, e._gameLevel), 
                    o.FLStore.set("GAME_LEVEL", e._gameLevel);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "gameCount", {
                get: function get() {
                    return e._gameCount;
                },
                set: function set(t) {
                    e._gameCount = t, cc.systemEvent.emit(e.EEventName.UPDATE_DATA_GAME_COUNT, e._gameCount);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "firstLogin", {
                get: function get() {
                    return null == e._firstLogin && (e._firstLogin = o.FLStore.getTodayValue("FIRST_LOGIN", !1)), 
                    e._firstLogin;
                },
                set: function set(t) {
                    e._firstLogin = t, o.FLStore.setTodayValue("FIRST_LOGIN", e._firstLogin);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "heartCount", {
                get: function get() {
                    return null == e._heartCount && (e._heartCount = o.FLStore.get("HEART_COUNT", 0)), 
                    e._heartCount;
                },
                set: function set(t) {
                    e._heartCount = t, o.FLStore.set("HEART_COUNT", e._heartCount), cc.systemEvent.emit("UPDATE_DATA_HEART");
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "endless_highest_score", {
                get: function get() {
                    return null == e._endless_highest_score && (e._endless_highest_score = o.FLStore.get("ENDLESS_HIGHEST_SCORE", 0)), 
                    e._endless_highest_score;
                },
                set: function set(t) {
                    e._endless_highest_score = t, o.FLStore.set("ENDLESS_HIGHEST_SCORE", e._endless_highest_score);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "video_pull", {
                get: function get() {
                    return null == e._video_pull && (e._video_pull = o.FLStore.get("VIDEO_PULL", 0)), 
                    e._video_pull;
                },
                set: function set(t) {
                    e._video_pull = t, o.FLStore.set("VIDEO_PULL", e._video_pull);
                },
                enumerable: !1,
                configurable: !0
            }), e.EEventName = {
                UPDATE_DATA_NICKNAME: "e10001",
                UPDATE_DATA_AVATAR: "e10002",
                UPDATE_DATA_GENDER: "e10003",
                UPDATE_DATA_OPENID: "e10004",
                UPDATE_DATA_UNIONID: "e10005",
                UPDATE_DATA_USERID: "e10007",
                UPDATE_DATA_USERTAG: "e10006",
                UPDATE_DATA_TOKEN: "e10008",
                UPDATE_DATA_ETAG: "e10009",
                UPDATE_DATA_EUID: "e10010",
                UPDATE_DATA_POWER: "UPDATE_DATA_POWER",
                UPDATE_DATA_COIN: "UPDATE_DATA_COIN",
                UPDATE_DATA_SKINID: "UPDATE_DATA_SKINID",
                UPDATE_DATA_ROLE_LEVEL: "UPDATE_DATA_ROLE_LEVEL",
                UPDATE_DATA_GAME_LEVEL: "UPDATE_DATA_GAME_LEVEL",
                UPDATE_DATA_GAME_COUNT: "UPDATE_DATA_GAME_COUNT",
                UPDATE_DATA_HEART: "UPDATE_DATA_HEART"
            }, e._nickname = "", e._avatar = "", e._gender = 0, e._openId = "", e._unionId = "", 
            e._userId = "", e._userTag = "", e._token = "", e._etag = "", e._euid = "", e.channelAldTag = "", 
            e.first = 0, e.regtime = 0, e.isTodayReg = !1, e.abTestTag = 0, e.shareId = -1, 
            e.trySkinId = null, e.showTrySkinPanel = !1, e._coin = 0, e._skinId = 0, e._roleLevel = 0, 
            e._gameLevel = 0, e._gameCount = 0, e._power = 0, e._firstLogin = null, e.isJumpBox = !1, 
            e.onGameBox = !1, e.gameType = 0, e.ballColorArr = [], e.overBall = null, e._heartCount = null, 
            e.ballColors = [ cc.color(33, 173, 244), cc.color(255, 216, 32), cc.color(246, 110, 56), cc.color(137, 94, 224), cc.color(255, 148, 181), cc.color(57, 220, 114), cc.color(215, 80, 205), cc.color(232, 68, 68) ], 
            e.lastBallColor = null, e.shootBallColors = [], e.endlessLevel = 1, e._endless_highest_score = null, 
            e.afterResultCry = !1, e._video_pull = null, e.isPullInsert = !1, e.result_btn_type = 0, 
            e;
        }();
        n.GameDataCenter = i, window.GameDataCenter = window.userData = i, cc._RF.pop();
    }, {
        "../Framework/Core/Base/FLStore": "FLStore"
    } ],
    GamePanel: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8384fooF9NGzpM71p8Iffxn", "GamePanel");
        var o = this && this.__extends || function() {
            var _e17 = function e(t, n) {
                return (_e17 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e17(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.GamePanel = void 0;
        var a = e("../../../../Config/EndlessConfig"), r = e("../../../../Config/GameConfig"), s = e("../../../../Config/GameDataCenter"), l = e("../../../../Config/LevelConfig"), c = e("../../../../Framework/Core/Base/FLAnalysis"), u = e("../../../../Framework/Core/Base/FLArray"), d = e("../../../../Framework/Core/Manager/FLGameManager"), p = e("../../../../Framework/UI/UIManager/FLUIManager"), f = e("../Script/GetHeart"), h = cc._decorator, m = h.ccclass, g = h.property, _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.levelDisplay = null, t.bulletBall = null, t.shootNode = null, t.ballPre = null, 
                t.centerBall = null, t.centerDisplay = null, t.shootClip = null, t.errorClip = null, 
                t.GetHeart = null, t._tempBalls = [], t._bulletBalls = [], t._centerBallSpeed = 0, 
                t._centerBallDir = 0, t._remainderBall = 0, t._levelData = null, t._timeCount = 0, 
                t._pullInsert = !1, t;
            }
            return o(t, e), t.prototype.onEnabled = function() {
                c.FLAnalysis.sendNormalEvent("进入首页"), this.init();
            }, t.prototype.onDisabled = function() {
                s.GameDataCenter.endlessLevel = 1;
            }, t.prototype.onAddEvents = function() {
                cc.systemEvent.on(d.FLGameManager.EEventName.GAME_WIN, this.onGameStateEvent, this), 
                cc.systemEvent.on(d.FLGameManager.EEventName.GAME_OVER, this.onGameStateEvent, this), 
                cc.systemEvent.on(d.FLGameManager.EEventName.GAME_REVIVE, this.onReviveEvent, this), 
                cc.systemEvent.on(d.FLGameManager.EEventName.GAME_RESET, this.onResetEvent, this);
            }, t.prototype.onRemoveEvents = function() {
                cc.systemEvent.off(d.FLGameManager.EEventName.GAME_WIN, this.onGameStateEvent, this), 
                cc.systemEvent.off(d.FLGameManager.EEventName.GAME_OVER, this.onGameStateEvent, this), 
                cc.systemEvent.off(d.FLGameManager.EEventName.GAME_REVIVE, this.onReviveEvent, this), 
                cc.systemEvent.off(d.FLGameManager.EEventName.GAME_RESET, this.onResetEvent, this);
            }, t.prototype.onStart = function() {}, t.prototype.onLateUpdate = function(e) {
                d.FLGameManager.gameState != d.EGameState.GAME_OVER && (this.centerBall.angle += this._centerBallDir * this._centerBallSpeed, 
                this._timeCount++, this._timeCount % (60 * r.GameConfig.serverConfig.insertAD_show_time) == 0 && this.pullInsertAd());
            }, t.prototype.onDestroyed = function() {}, t.prototype.onTouchStart = function(e) {
                var t = this;
                if (this._timeCount = 0, s.GameDataCenter.isPullInsert = !1, d.FLGameManager.gameState == d.EGameState.GAME_START && this._bulletBalls.length > 0) {
                    cc.audioEngine.play(this.shootClip, !1, 1);
                    var n = this._bulletBalls.shift(), o = n.parent.convertToWorldSpaceAR(n.getPosition());
                    s.GameDataCenter.lastBallColor = n.color;
                    var i = cc.instantiate(this.ballPre);
                    i.getComponentInChildren(cc.Label).string = n.getComponentInChildren(cc.Label).string, 
                    i.parent = this.centerBall.parent, i.position = this.centerBall.parent.convertToNodeSpaceAR(o), 
                    this._tempBalls.push(i), s.GameDataCenter.overBall = i, i.getChildByName("circle").color = s.GameDataCenter.lastBallColor, 
                    n.destroy();
                    var a = this.centerBall.height / 2 - 2, r = cc.v2(0, this.centerBall.y - a);
                    i.runAction(cc.sequence(cc.moveTo(.05, r).easing(cc.easeSineOut()), cc.callFunc(function() {
                        t.centerDisplay.string = "" + --t._remainderBall, t._tempBalls.shift(), i.parent = t.centerBall;
                        var e = t.centerBall.angle;
                        e = e % 360 + 180;
                        var n = cc.misc.degreesToRadians(e), o = a * Math.sin(n), r = a * Math.cos(n);
                        i.x = o, i.y = r, i.angle = 180 - e, s.GameDataCenter.gameType == d.EGameType.TYPE_ENDLESS && cc.systemEvent.emit("ENDLESS_SCORE");
                    }))), this.scheduleOnce(this.checkPass, .05);
                }
            }, t.prototype.onInsertCallBack = function(e) {
                this.scheduleOnce(this.pullInsertAd, r.GameConfig.serverConfig.insertAD_show_time);
            }, t.prototype.init = function() {
                switch (d.FLGameManager.gameState = d.EGameState.GAME_START, s.GameDataCenter.ballColorArr = [], 
                this._centerBallDir = -1, s.GameDataCenter.shootBallColors = [], s.GameDataCenter.gameType) {
                  case d.EGameType.TYPE_ENDLESS:
                    this.loadLevel(s.GameDataCenter.endlessLevel - 1, s.GameDataCenter.gameType), this.node.getChildByName("endlessLab").active = !0;
                    break;

                  case d.EGameType.TYPE_LEVEL:
                    this.loadLevel(s.GameDataCenter.gameLevel - 1, s.GameDataCenter.gameType);
                }
                this.scheduleOnce(this.pullInsertAd, r.GameConfig.serverConfig.insertAD_show_time);
            }, t.prototype.loadCenterBall = function(e) {
                this.centerBall.destroyAllChildren();
                var t = this.centerBall.width / 2 - 2, n = 360 / e, o = [], i = [];
                0 != this._levelData.obsBallAngle.length && (i = this._levelData.obsBallAngle.split(","));
                for (var a = 0; a < i.length; a++) {
                    o.push(parseInt(i[a]));
                }
                for (a = 0; a < e; a++) {
                    var r = cc.instantiate(this.ballPre), s = 0;
                    s = 0 != this._levelData.obsBallAngle.length ? cc.misc.degreesToRadians(o[a]) : cc.misc.degreesToRadians(a * n);
                    var l = t * Math.sin(s), c = t * Math.cos(s);
                    r.x = l, r.y = c, r.parent = this.centerBall, 0 != this._levelData.obsBallAngle.length ? r.angle = 180 - o[a] : r.angle = 180 - a * n, 
                    r.getChildByName("numLabel").active = !1, r.removeComponent("BallPre");
                }
            }, t.prototype.loadLevel = function(e, t) {
                switch (this.levelDisplay.string = "关卡" + (e + 1), t) {
                  case d.EGameType.TYPE_LEVEL:
                    this._levelData = l.LevelConfig.mess[e];
                    break;

                  case d.EGameType.TYPE_ENDLESS:
                    this._levelData = a.EndlessConfig.mess[e];
                }
                this._centerBallDir = 0 == this._levelData.dir ? Math.random() < .5 ? 1 : -1 : this._levelData.dir, 
                this._centerBallSpeed = this._levelData.speed, this._remainderBall = this._levelData.bulletNum, 
                this.centerDisplay.string = "" + this._remainderBall;
                for (var n = 0, o = this._tempBalls; n < o.length; n++) {
                    o[n].destroy();
                }
                for (var i = 0, r = this._bulletBalls; i < r.length; i++) {
                    r[i].destroy();
                }
                this._tempBalls = [], this._bulletBalls = [];
                for (var s = 0; s < this._levelData.bulletNum; s++) {
                    var c = cc.instantiate(this.bulletBall);
                    c.parent = this.shootNode, this._bulletBalls.push(c), c.getChildByName("numDisplay").getComponent(cc.Label).string = "" + (this._levelData.bulletNum - s), 
                    this.randomColor(c);
                }
                this.loadCenterBall(this._levelData.obsNum);
            }, t.prototype.checkPass = function() {
                0 == this._bulletBalls.length && d.FLGameManager.gameState == d.EGameState.GAME_START && (d.FLGameManager.gameState = d.EGameState.GAME_WIN);
            }, t.prototype.onGameStateEvent = function() {
                var e = this;
                if (d.FLGameManager.gameState == d.EGameState.GAME_WIN) {
                    var t = this._centerBallSpeed;
                    this._centerBallSpeed = 4.5, this.scheduleOnce(function() {
                        e._centerBallSpeed = t;
                    }, 2), this.centerBallScale(), this.scheduleOnce(function() {
                        s.GameDataCenter.gameType, d.EGameType.TYPE_LEVEL, p.FLUIManager.open("ui/Result/panel/ResultPanel");
                    }, 1.5);
                } else d.FLGameManager.gameState == d.EGameState.GAME_OVER && (cc.audioEngine.play(this.errorClip, !1, 1), 
                this._centerBallSpeed = 0, this.centerBallScale(), this.scheduleOnce(function() {
                    p.FLUIManager.open("ui/Revive/panel/RevivePanel");
                }, 1.5));
            }, t.prototype.centerBallScale = function() {
                cc.tween(this.centerBall.parent).to(.35, {
                    scale: 1.3
                }).to(.35, {
                    scale: 1
                }).start();
            }, t.prototype.onReviveEvent = function() {
                var e = cc.instantiate(this.bulletBall);
                e.parent = this.shootNode, this._bulletBalls.push(e), e.color = s.GameDataCenter.lastBallColor;
                for (var t = 0; t < this._bulletBalls.length; t++) {
                    this._bulletBalls[t].getComponentInChildren(cc.Label).string = "" + (this._bulletBalls.length - t), 
                    this._bulletBalls[t].color = s.GameDataCenter.shootBallColors[t + s.GameDataCenter.shootBallColors.length - this._bulletBalls.length];
                }
                s.GameDataCenter.overBall.destroy(), d.FLGameManager.gameState = d.EGameState.GAME_START, 
                this._centerBallSpeed = this._levelData.speed, this._remainderBall++, this.centerDisplay.string = "" + this._remainderBall;
            }, t.prototype.onResetEvent = function() {
                this.init();
            }, t.prototype.randomColor = function(e) {
                var t = u.FLArray.arrayRandomValue(s.GameDataCenter.ballColors);
                e.color = t, s.GameDataCenter.shootBallColors.push(t);
            }, t.prototype.pullInsertAd = function() {
                d.FLGameManager.gameState != d.EGameState.GAME_WIN && d.FLGameManager.gameState != d.EGameState.GAME_OVER && (s.GameDataCenter.isPullInsert || (s.GameDataCenter.isPullInsert = !0));
            }, i([ g({
                type: cc.Label,
                tooltip: "关卡显示"
            }) ], t.prototype, "levelDisplay", void 0), i([ g({
                type: cc.Node,
                tooltip: "发射球"
            }) ], t.prototype, "bulletBall", void 0), i([ g({
                type: cc.Node,
                tooltip: "发射点"
            }) ], t.prototype, "shootNode", void 0), i([ g({
                type: cc.Prefab,
                tooltip: "发射后的球预置体"
            }) ], t.prototype, "ballPre", void 0), i([ g({
                type: cc.Node,
                tooltip: "中心球"
            }) ], t.prototype, "centerBall", void 0), i([ g({
                type: cc.Label,
                tooltip: "剩余球的数量显示"
            }) ], t.prototype, "centerDisplay", void 0), i([ g({
                type: cc.AudioClip,
                tooltip: "发射音效"
            }) ], t.prototype, "shootClip", void 0), i([ g({
                type: cc.AudioClip,
                tooltip: "失败音效"
            }) ], t.prototype, "errorClip", void 0), i([ g({
                type: f.GetHeart,
                tooltip: "爱心消耗、获取组件"
            }) ], t.prototype, "GetHeart", void 0), t = i([ m ], t);
        }(FLUIPanel);
        n.GamePanel = _, cc._RF.pop();
    }, {
        "../../../../Config/EndlessConfig": "EndlessConfig",
        "../../../../Config/GameConfig": "GameConfig",
        "../../../../Config/GameDataCenter": "GameDataCenter",
        "../../../../Config/LevelConfig": "LevelConfig",
        "../../../../Framework/Core/Base/FLAnalysis": "FLAnalysis",
        "../../../../Framework/Core/Base/FLArray": "FLArray",
        "../../../../Framework/Core/Manager/FLGameManager": "FLGameManager",
        "../../../../Framework/UI/UIManager/FLUIManager": "FLUIManager",
        "../Script/GetHeart": "GetHeart"
    } ],
    GetHeart: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2cdb2J+xChA15SHUdtWJ1mC", "GetHeart");
        var o = this && this.__extends || function() {
            var _e18 = function e(t, n) {
                return (_e18 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e18(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.GetHeart = void 0;
        var a = e("../../../../Config/GameDataCenter"), r = e("../../../../Framework/Core/Base/FLAnalysis"), s = e("../../../../Framework/Core/Manager/FLGameManager"), l = e("../../../../Framework/Platform/AD/FLPlatformRewardVideoAd"), c = cc._decorator, u = c.ccclass, d = c.property, p = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.heartDisplay = null, t.heartDialog = null, t.useHeartDisplay = null, t._isClick = !1, 
                t;
            }
            return o(t, e), t.prototype.onEnabled = function() {
                this.heartDisplay.string = "" + a.GameDataCenter.heartCount, this.heartDialog.active = !1;
            }, t.prototype.onAddEvents = function() {
                cc.systemEvent.on("UPDATE_DATA_HEART", this.onUpdateHeart, this);
            }, t.prototype.onRemoveEvents = function() {
                cc.systemEvent.off("UPDATE_DATA_HEART", this.onUpdateHeart, this);
            }, t.prototype.onStart = function() {}, t.prototype.onDestroyed = function() {}, 
            t.prototype.onFreshClicked = function() {
                r.FLAnalysis.sendNormalEvent("UI点击_游戏页_刷新按钮"), a.GameDataCenter.heartCount > 0 ? (this.useHeartTipAni(), 
                a.GameDataCenter.heartCount--, cc.systemEvent.emit("GAME_HEART_UPDATE"), s.FLGameManager.gameState = s.EGameState.GAME_RESET) : this.heartDialog.active = !0;
            }, t.prototype.onDialogClicked = function() {
                this.heartDialog.active = !0, r.FLAnalysis.sendNormalEvent("UI点击_游戏页_爱心按钮");
            }, t.prototype.onCloseClicked = function() {
                this.heartDialog.active = !1, this._isClick = !1, r.FLAnalysis.sendNormalEvent("UI点击_获得爱心弹窗_关闭按钮");
            }, t.prototype.onVideoPlay = function() {
                this._isClick || (this._isClick = !0, window.wx ? this.node.getComponent(l.FLPlatformRewardVideoAd).showRewardVideoAd() : this.onGetRewardLogic());
            }, t.prototype.onVideoCallBack = function(e) {
                this._isClick = !1, e ? r.FLAnalysis.sendNormalEvent("视频关闭_免费获取_游戏页") : (r.FLAnalysis.sendNormalEvent("视频成功_免费获取_游戏页"), 
                this.onGetRewardLogic());
            }, t.prototype.onVideoError = function() {
                this._isClick = !1, r.FLAnalysis.sendNormalEvent("视频错误_免费获取_游戏页");
            }, t.prototype.onGetRewardLogic = function() {
                this._isClick = !1, a.GameDataCenter.heartCount++;
            }, t.prototype.onUpdateHeart = function() {
                this.heartDisplay.string = "" + a.GameDataCenter.heartCount;
            }, t.prototype.useHeartTipAni = function() {
                var e = this.useHeartDisplay.node.parent, t = cc.instantiate(e);
                t.parent = e.parent, t.setPosition(e.position), cc.tween(t).by(.8, {
                    y: 300
                }).delay(.1).call(function() {
                    t.destroy();
                }).start();
            }, t.EEventName = {
                GAME_HEART_UPDATE: "GAME_HEART_UPDATE"
            }, i([ d({
                type: cc.Label,
                tooltip: "爱心数量显示"
            }) ], t.prototype, "heartDisplay", void 0), i([ d({
                type: cc.Node,
                tooltip: "爱心数量显示"
            }) ], t.prototype, "heartDialog", void 0), i([ d({
                type: cc.Label,
                tooltip: "消耗爱心数量显示"
            }) ], t.prototype, "useHeartDisplay", void 0), t = i([ u ], t);
        }(FLBehavior);
        n.GetHeart = p, cc._RF.pop();
    }, {
        "../../../../Config/GameDataCenter": "GameDataCenter",
        "../../../../Framework/Core/Base/FLAnalysis": "FLAnalysis",
        "../../../../Framework/Core/Manager/FLGameManager": "FLGameManager",
        "../../../../Framework/Platform/AD/FLPlatformRewardVideoAd": "FLPlatformRewardVideoAd"
    } ],
    HeartDialog: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "295e1sJCVVG96DmyaJHeoDP", "HeartDialog");
        var o = this && this.__extends || function() {
            var _e19 = function e(t, n) {
                return (_e19 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e19(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.HeartDialog = void 0;
        var a = e("../../../../Config/GameConfig"), r = cc._decorator, s = r.ccclass, l = r.property, c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.light = null, t.clsoeBtn = null, t;
            }
            return o(t, e), t.prototype.onEnabled = function() {
                var e = this;
                this.scheduleOnce(function() {
                    e.clsoeBtn.active = !0;
                }, a.GameConfig.serverConfig.BTN_SHOW_TIME), this.lightRotate();
            }, t.prototype.onDisabled = function() {
                this.clsoeBtn.active = !1;
            }, t.prototype.onAddEvents = function() {}, t.prototype.onRemoveEvents = function() {}, 
            t.prototype.onStart = function() {}, t.prototype.onDestroyed = function() {}, t.prototype.lightRotate = function() {
                var e = this;
                cc.tween(this.light).repeatForever(cc.tween().to(3, {
                    angle: 360
                }).call(function() {
                    e.light.angle = 0;
                })).start();
            }, i([ l({
                type: cc.Node,
                tooltip: "炫光"
            }) ], t.prototype, "light", void 0), i([ l({
                type: cc.Node,
                tooltip: "关闭按钮"
            }) ], t.prototype, "clsoeBtn", void 0), t = i([ s ], t);
        }(FLBehavior);
        n.HeartDialog = c, cc._RF.pop();
    }, {
        "../../../../Config/GameConfig": "GameConfig"
    } ],
    HomePanel: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c58d6+kny9E2Z6Zg2m0Pdv5", "HomePanel");
        var o = this && this.__extends || function() {
            var _e20 = function e(t, n) {
                return (_e20 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e20(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.HomePanel = void 0;
        var a = e("../../../../Config/GameConfig"), r = e("../../../../Config/GameDataCenter"), s = e("../../../../Framework/Core/Base/FLAnalysis"), l = e("../../../../Framework/Core/Manager/FLGameManager"), c = e("../../../../Framework/Platform/AD/FLPlatformRewardVideoAd"), u = e("../../../../Framework/UI/UIManager/FLUIManager"), d = e("../../../../Framework/UI/UIManager/FLUIManagerMachine"), p = e("../../../../Script/SoundManager"), f = cc._decorator, h = f.ccclass, m = f.property, g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.loginBoxPre = null, t;
            }
            return o(t, e), t.prototype.onEnabled = function() {
                s.FLAnalysis.sendNormalEvent("进入首页");
            }, t.prototype.onDisabled = function() {}, t.prototype.onAddEvents = function() {
                cc.systemEvent.on("update_server_config", this.checkMutual, this);
            }, t.prototype.onRemoveEvents = function() {
                cc.systemEvent.off("update_server_config", this.checkMutual, this);
            }, t.prototype.onStart = function() {
                this.checkMutual(), this.loadLoginBox();
            }, t.prototype.onDestroyed = function() {}, t.prototype.onClicked = function(e, t) {
                var n = parseInt(t);
                switch (r.GameDataCenter.gameType = n, p.SoundManager.instance.playBtnClick(), 3 != a.GameConfig.serverConfig.SWITCH_GAME_START2_VIDEO && (this.node.getComponent(c.FLPlatformRewardVideoAd).showRewardVideoAd(), 
                r.GameDataCenter.video_pull++, s.FLAnalysis.sendNormalEvent("激励视频强拉次数", {
                    video_pull: r.GameDataCenter.video_pull
                })), n) {
                  case l.EGameType.TYPE_ENDLESS:
                    s.FLAnalysis.sendNormalEvent("UI点击_首页_无尽模式按钮");
                    break;

                  case l.EGameType.TYPE_LEVEL:
                    s.FLAnalysis.sendNormalEvent("UI点击_首页_闯关按钮");
                }
                3 == a.GameConfig.serverConfig.SWITCH_SHOW_CRY1_PAGE ? d.FLUIManagerMachine.instance.onTransition("btnGameStart") : u.FLUIManager.open("ui/Crazy/panel/CrazyPanel");
            }, t.prototype.checkMutual = function() {
                3 != a.GameConfig.serverConfig.SWITCH_SHOW_HOME_RECOMMEND && (this.node.getChildByName("WXHomePanel").active = !0), 
                3 != a.GameConfig.serverConfig.SWITCH_GAME_START_VIDEO && this.node.getComponent(c.FLPlatformRewardVideoAd).showRewardVideoAd();
            }, t.prototype.loadLoginBox = function() {
                r.GameDataCenter.firstLogin || (r.GameDataCenter.firstLogin = !0, cc.instantiate(this.loginBoxPre).parent = this.node);
            }, i([ m({
                type: cc.Prefab,
                tooltip: "每日登入奖励宝箱"
            }) ], t.prototype, "loginBoxPre", void 0), t = i([ h ], t);
        }(FLUIPanel);
        n.HomePanel = g, cc._RF.pop();
    }, {
        "../../../../Config/GameConfig": "GameConfig",
        "../../../../Config/GameDataCenter": "GameDataCenter",
        "../../../../Framework/Core/Base/FLAnalysis": "FLAnalysis",
        "../../../../Framework/Core/Manager/FLGameManager": "FLGameManager",
        "../../../../Framework/Platform/AD/FLPlatformRewardVideoAd": "FLPlatformRewardVideoAd",
        "../../../../Framework/UI/UIManager/FLUIManager": "FLUIManager",
        "../../../../Framework/UI/UIManager/FLUIManagerMachine": "FLUIManagerMachine",
        "../../../../Script/SoundManager": "SoundManager"
    } ],
    LevelConfig: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ba1f6PFe99J9rwNcEIlDnvq", "LevelConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.LevelConfig = void 0;
        var o = function() {
            function e() {}
            return e.mess = [ {
                id: 1,
                obsNum: 0,
                obsBallAngle: "",
                bulletNum: 8,
                speed: 1,
                dir: 1
            }, {
                id: 2,
                obsNum: 1,
                obsBallAngle: "0",
                bulletNum: 8,
                speed: 1,
                dir: 1
            }, {
                id: 3,
                obsNum: 2,
                obsBallAngle: "0,180",
                bulletNum: 9,
                speed: 1,
                dir: 1
            }, {
                id: 4,
                obsNum: 2,
                obsBallAngle: "0,90",
                bulletNum: 9,
                speed: 1,
                dir: 1
            }, {
                id: 5,
                obsNum: 2,
                obsBallAngle: "0,125",
                bulletNum: 9,
                speed: 1,
                dir: 1
            }, {
                id: 6,
                obsNum: 3,
                obsBallAngle: "0,120,240",
                bulletNum: 10,
                speed: 1,
                dir: 1
            }, {
                id: 7,
                obsNum: 3,
                obsBallAngle: "0,100,200",
                bulletNum: 10,
                speed: 1,
                dir: 1
            }, {
                id: 8,
                obsNum: 3,
                obsBallAngle: "0,90,180",
                bulletNum: 10,
                speed: 1,
                dir: 1
            }, {
                id: 9,
                obsNum: 3,
                obsBallAngle: "0,45,90",
                bulletNum: 10,
                speed: 1,
                dir: 1
            }, {
                id: 10,
                obsNum: 3,
                obsBallAngle: "0,90,240",
                bulletNum: 10,
                speed: 1,
                dir: 1
            }, {
                id: 11,
                obsNum: 3,
                obsBallAngle: "0,45,120",
                bulletNum: 11,
                speed: 1.5,
                dir: -1
            }, {
                id: 12,
                obsNum: 3,
                obsBallAngle: "0,30,180",
                bulletNum: 11,
                speed: 1.5,
                dir: -1
            }, {
                id: 13,
                obsNum: 3,
                obsBallAngle: "0,30,270",
                bulletNum: 11,
                speed: 1.5,
                dir: -1
            }, {
                id: 14,
                obsNum: 3,
                obsBallAngle: "0,30,90",
                bulletNum: 11,
                speed: 1.5,
                dir: -1
            }, {
                id: 15,
                obsNum: 3,
                obsBallAngle: "0,45,60",
                bulletNum: 11,
                speed: 1.5,
                dir: -1
            }, {
                id: 16,
                obsNum: 3,
                obsBallAngle: "0,45,90",
                bulletNum: 12,
                speed: 1.5,
                dir: -1
            }, {
                id: 17,
                obsNum: 3,
                obsBallAngle: "0,45,150",
                bulletNum: 12,
                speed: 1.5,
                dir: -1
            }, {
                id: 18,
                obsNum: 3,
                obsBallAngle: "0,45,180",
                bulletNum: 12,
                speed: 1.5,
                dir: -1
            }, {
                id: 19,
                obsNum: 3,
                obsBallAngle: "0,45,270",
                bulletNum: 12,
                speed: 1.5,
                dir: -1
            }, {
                id: 20,
                obsNum: 3,
                obsBallAngle: "0,90,270",
                bulletNum: 12,
                speed: 1.5,
                dir: -1
            }, {
                id: 21,
                obsNum: 4,
                obsBallAngle: "0,90,180,270",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 22,
                obsNum: 4,
                obsBallAngle: "0,110,145,195",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 23,
                obsNum: 4,
                obsBallAngle: "40,65,145,320",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 24,
                obsNum: 4,
                obsBallAngle: "35,100,125,340",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 25,
                obsNum: 4,
                obsBallAngle: "0,55,125,335",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 26,
                obsNum: 4,
                obsBallAngle: "20,70,125,275",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 27,
                obsNum: 4,
                obsBallAngle: "5,115,170,200",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 28,
                obsNum: 4,
                obsBallAngle: "5,100,140,325",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 29,
                obsNum: 4,
                obsBallAngle: "10,75,165,290",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 30,
                obsNum: 4,
                obsBallAngle: "10,60,175,295",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 31,
                obsNum: 4,
                obsBallAngle: "40,120,140,310",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 32,
                obsNum: 4,
                obsBallAngle: "25,65,160,345",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 33,
                obsNum: 4,
                obsBallAngle: "15,60,125,215",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 34,
                obsNum: 4,
                obsBallAngle: "10,65,165,290",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 35,
                obsNum: 4,
                obsBallAngle: "5,65,175,280",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 36,
                obsNum: 4,
                obsBallAngle: "0,95,175,195",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 37,
                obsNum: 4,
                obsBallAngle: "5,85,125,280",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 38,
                obsNum: 4,
                obsBallAngle: "45,120,160,190",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 39,
                obsNum: 4,
                obsBallAngle: "10,55,135,250",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 40,
                obsNum: 4,
                obsBallAngle: "15,110,135,340",
                bulletNum: 12,
                speed: 2,
                dir: 0
            }, {
                id: 41,
                obsNum: 4,
                obsBallAngle: "30,70,170,250",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 42,
                obsNum: 4,
                obsBallAngle: "10,90,160,275",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 43,
                obsNum: 4,
                obsBallAngle: "25,75,140,230",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 44,
                obsNum: 4,
                obsBallAngle: "35,65,155,225",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 45,
                obsNum: 4,
                obsBallAngle: "25,55,180,245",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 46,
                obsNum: 4,
                obsBallAngle: "10,115,175,355",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 47,
                obsNum: 4,
                obsBallAngle: "30,90,125,325",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 48,
                obsNum: 4,
                obsBallAngle: "40,85,150,235",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 49,
                obsNum: 4,
                obsBallAngle: "5,50,125,265",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 50,
                obsNum: 4,
                obsBallAngle: "10,100,125,215",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 51,
                obsNum: 5,
                obsBallAngle: "45,90,200,255,320",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 52,
                obsNum: 5,
                obsBallAngle: "30,95,135,280,320",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 53,
                obsNum: 5,
                obsBallAngle: "15,115,165,255,310",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 54,
                obsNum: 5,
                obsBallAngle: "25,115,215,285,340",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 55,
                obsNum: 5,
                obsBallAngle: "35,70,220,235,305",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 56,
                obsNum: 5,
                obsBallAngle: "40,75,175,290,310",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 57,
                obsNum: 5,
                obsBallAngle: "5,85,175,260,335",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 58,
                obsNum: 5,
                obsBallAngle: "25,120,215,235,350",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 59,
                obsNum: 5,
                obsBallAngle: "5,55,175,280,310",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 60,
                obsNum: 5,
                obsBallAngle: "20,95,230,240,315",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 61,
                obsNum: 5,
                obsBallAngle: "25,50,160,240,340",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 62,
                obsNum: 5,
                obsBallAngle: "10,120,220,280,355",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 63,
                obsNum: 5,
                obsBallAngle: "30,80,225,255,325",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 64,
                obsNum: 5,
                obsBallAngle: "5,105,180,270,310",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 65,
                obsNum: 5,
                obsBallAngle: "35,90,170,240,330",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 66,
                obsNum: 5,
                obsBallAngle: "5,70,185,285,330",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 67,
                obsNum: 5,
                obsBallAngle: "10,75,205,240,325",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 68,
                obsNum: 5,
                obsBallAngle: "20,80,150,255,340",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 69,
                obsNum: 5,
                obsBallAngle: "10,55,225,290,315",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 70,
                obsNum: 5,
                obsBallAngle: "5,115,230,265,335",
                bulletNum: 13,
                speed: 2.5,
                dir: 0
            }, {
                id: 71,
                obsNum: 5,
                obsBallAngle: "45,110,160,265,315",
                bulletNum: 14,
                speed: 2.5,
                dir: 0
            }, {
                id: 72,
                obsNum: 5,
                obsBallAngle: "30,60,225,280,295",
                bulletNum: 14,
                speed: 2.5,
                dir: 0
            }, {
                id: 73,
                obsNum: 5,
                obsBallAngle: "10,120,205,235,295",
                bulletNum: 14,
                speed: 2.5,
                dir: 0
            }, {
                id: 74,
                obsNum: 5,
                obsBallAngle: "40,75,170,240,315",
                bulletNum: 14,
                speed: 2.5,
                dir: 0
            }, {
                id: 75,
                obsNum: 5,
                obsBallAngle: "5,55,125,275,340",
                bulletNum: 14,
                speed: 2.5,
                dir: 0
            }, {
                id: 76,
                obsNum: 5,
                obsBallAngle: "10,75,170,280,320",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 77,
                obsNum: 5,
                obsBallAngle: "15,85,145,285,325",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 78,
                obsNum: 5,
                obsBallAngle: "25,95,155,265,320",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 79,
                obsNum: 5,
                obsBallAngle: "5,115,200,245,350",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 80,
                obsNum: 5,
                obsBallAngle: "25,65,155,255,305",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 81,
                obsNum: 5,
                obsBallAngle: "15,85,195,275,355",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 82,
                obsNum: 5,
                obsBallAngle: "25,85,125,240,300",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 83,
                obsNum: 5,
                obsBallAngle: "40,110,135,280,325",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 84,
                obsNum: 5,
                obsBallAngle: "25,100,160,240,325",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 85,
                obsNum: 5,
                obsBallAngle: "5,80,170,280,350",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 86,
                obsNum: 5,
                obsBallAngle: "5,110,220,265,335",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 87,
                obsNum: 5,
                obsBallAngle: "0,120,150,275,310",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 88,
                obsNum: 5,
                obsBallAngle: "25,60,135,275,315",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 89,
                obsNum: 5,
                obsBallAngle: "10,70,170,265,320",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 90,
                obsNum: 5,
                obsBallAngle: "25,75,155,290,315",
                bulletNum: 14,
                speed: 3,
                dir: 0
            }, {
                id: 91,
                obsNum: 5,
                obsBallAngle: "40,100,140,260,335",
                bulletNum: 15,
                speed: 3,
                dir: 0
            }, {
                id: 92,
                obsNum: 5,
                obsBallAngle: "15,105,190,245,335",
                bulletNum: 15,
                speed: 3,
                dir: 0
            }, {
                id: 93,
                obsNum: 5,
                obsBallAngle: "40,70,170,235,325",
                bulletNum: 15,
                speed: 3,
                dir: 0
            }, {
                id: 94,
                obsNum: 5,
                obsBallAngle: "0,100,135,285,335",
                bulletNum: 15,
                speed: 3,
                dir: 0
            }, {
                id: 95,
                obsNum: 5,
                obsBallAngle: "5,60,150,245,355",
                bulletNum: 15,
                speed: 3,
                dir: 0
            }, {
                id: 96,
                obsNum: 5,
                obsBallAngle: "0,105,135,270,310",
                bulletNum: 15,
                speed: 3,
                dir: 0
            }, {
                id: 97,
                obsNum: 5,
                obsBallAngle: "30,120,195,255,295",
                bulletNum: 15,
                speed: 3,
                dir: 0
            }, {
                id: 98,
                obsNum: 5,
                obsBallAngle: "25,95,165,240,345",
                bulletNum: 15,
                speed: 3,
                dir: 0
            }, {
                id: 99,
                obsNum: 5,
                obsBallAngle: "20,85,155,275,350",
                bulletNum: 15,
                speed: 3,
                dir: 0
            }, {
                id: 100,
                obsNum: 5,
                obsBallAngle: "0,110,145,285,305",
                bulletNum: 15,
                speed: 3,
                dir: 0
            } ], e;
        }();
        n.LevelConfig = o, cc._RF.pop();
    }, {} ],
    LoginPanel: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e9f554/5m9GnoH9yUBTOH1Q", "LoginPanel");
        var o = this && this.__extends || function() {
            var _e21 = function e(t, n) {
                return (_e21 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e21(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.LoginPanel = void 0;
        var a = e("../../../../Config/GameDataCenter"), r = e("../../../../Framework/Core/Base/FLAnalysis"), s = cc._decorator, l = s.ccclass, c = s.property, u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.light = null, t._isClick = !1, t;
            }
            return o(t, e), t.prototype.onAddEvents = function() {}, t.prototype.onRemoveEvents = function() {}, 
            t.prototype.onStart = function() {
                var e = this;
                cc.tween(this.light).repeatForever(cc.tween().to(3, {
                    angle: 360
                }).call(function() {
                    e.light.angle = 0;
                })).start();
            }, t.prototype.onDestroyed = function() {}, t.prototype.onCloseCilcked = function() {
                r.FLAnalysis.sendNormalEvent("UI点击_每日登入奖励页_放弃领取按钮"), this.node.destroy();
            }, t.prototype.onVideoPlay = function() {
                this._isClick || (this._isClick = !0, r.FLAnalysis.sendNormalEvent("UI点击_每日登入奖励页_三倍领取按钮"), 
                window.wx, this.onRewardLogic());
            }, t.prototype.onVideoCallBack = function(e) {
                this._isClick = !1, e ? r.FLAnalysis.sendNormalEvent("视频关闭_三倍领取_每日登入奖励页") : (r.FLAnalysis.sendNormalEvent("视频成功_三倍领取_每日登入奖励页"), 
                this.onRewardLogic());
            }, t.prototype.onVideoError = function() {
                r.FLAnalysis.sendNormalEvent("视频错误_三倍领取_每日登入奖励页"), this._isClick = !1;
            }, t.prototype.onRewardLogic = function() {
                a.GameDataCenter.heartCount += 3, this.node.destroy();
            }, i([ c({
                type: cc.Node,
                tooltip: "炫光"
            }) ], t.prototype, "light", void 0), t = i([ l ], t);
        }(FLBehavior);
        n.LoginPanel = u, cc._RF.pop();
    }, {
        "../../../../Config/GameDataCenter": "GameDataCenter",
        "../../../../Framework/Core/Base/FLAnalysis": "FLAnalysis"
    } ],
    ResultPanel: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "413f0G3/cdDPKbablbsAbWy", "ResultPanel");
        var o = this && this.__extends || function() {
            var _e22 = function e(t, n) {
                return (_e22 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e22(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.ResultPanel = void 0;
        var a = e("../../../../Config/EndlessConfig"), r = e("../../../../Config/GameConfig"), s = e("../../../../Config/GameDataCenter"), l = e("../../../../Framework/Core/Base/FLAnalysis"), c = e("../../../../Framework/Core/Base/FLRandom"), u = e("../../../../Framework/Core/Manager/FLGameManager"), d = e("../../../../Framework/Platform/AD/FLPlatformBannerAd"), p = e("../../../../Framework/Platform/AD/FLPlatformInterstitialAd"), f = e("../../../../Framework/Platform/AD/FLPlatformRewardVideoAd"), h = e("../../../../Framework/UI/UIManager/FLUIManager"), m = e("../../../../Framework/UI/UIManager/FLUIManagerMachine"), g = e("../../../../Script/SoundManager"), _ = cc._decorator, y = _.ccclass, v = _.property, b = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.winPanel = null, t.overPanel = null, t.levelDisplay = null, t.propsDisplay = null, 
                t.passLevelDisplay = null, t.nextPropTip = null, t.getPropTip = null, t.winClip = null, 
                t.overClip = null, t._isClick = !1, t;
            }
            return o(t, e), t.prototype.onEnabled = function() {
                var e = this;
                l.FLAnalysis.sendNormalEvent("进入结算页"), this.showPropsMess(), this.checkPanel(), 
                s.GameDataCenter.afterResultCry = !0, this.showInsertAD(), d.FLPlatformBannerAd.hideAllBannerAd(), 
                this.scheduleOnce(function() {
                    d.FLPlatformBannerAd.hideAllBannerAd(), e.showBanner();
                }, .1);
            }, t.prototype.onDisabled = function() {}, t.prototype.onAddEvents = function() {}, 
            t.prototype.onRemoveEvents = function() {}, t.prototype.onStart = function() {
                this.btnWidget();
            }, t.prototype.onDestroyed = function() {}, t.prototype.onBackClicked = function() {
                l.FLAnalysis.sendNormalEvent("UI点击_首页_返回首页按钮"), g.SoundManager.instance.playBtnClick(), 
                h.FLUIManager.close("ui/Result/panel/ResultPanel"), m.FLUIManagerMachine.instance.onTransition("btnBack");
            }, t.prototype.onChallengeClicked = function(e, t) {
                s.GameDataCenter.result_btn_type = parseInt(t), l.FLAnalysis.sendNormalEvent("UI点击_首页_下一关按钮"), 
                g.SoundManager.instance.playBtnClick(), s.GameDataCenter.gameType == u.EGameType.TYPE_LEVEL ? 3 != r.GameConfig.serverConfig.SWITCH_GAME_START3_VIDEO && (this.node.getComponent(f.FLPlatformRewardVideoAd).showRewardVideoAd(), 
                s.GameDataCenter.video_pull++, l.FLAnalysis.sendNormalEvent("激励视频强拉次数", {
                    video_pull: s.GameDataCenter.video_pull
                })) : s.GameDataCenter.gameType == u.EGameType.TYPE_ENDLESS && 3 != r.GameConfig.serverConfig.SWITCH_GAME_START4_VIDEO && (this.node.getComponent(f.FLPlatformRewardVideoAd).showRewardVideoAd(), 
                s.GameDataCenter.video_pull++, l.FLAnalysis.sendNormalEvent("激励视频强拉次数", {
                    video_pull: s.GameDataCenter.video_pull
                })), h.FLUIManager.close("ui/Result/panel/ResultPanel"), s.GameDataCenter.gameType == u.EGameType.TYPE_ENDLESS && u.FLGameManager.gameState == u.EGameState.GAME_OVER && (s.GameDataCenter.endlessLevel = 1), 
                3 != r.GameConfig.serverConfig.SWITCH_SHOW_CRY1_PAGE && s.GameDataCenter.gameType == u.EGameType.TYPE_LEVEL ? h.FLUIManager.open("ui/Crazy/panel/CrazyPanel") : 3 != r.GameConfig.serverConfig.SWITCH_SHOW_CRY1_PAGE && s.GameDataCenter.gameType == u.EGameType.TYPE_ENDLESS && 1 == s.GameDataCenter.result_btn_type ? m.FLUIManagerMachine.instance.onTransition("btnBack") : u.FLGameManager.gameState = u.EGameState.GAME_RESET;
            }, t.prototype.onVideoPlay = function() {
                this._isClick || (this._isClick = !0, l.FLAnalysis.sendNormalEvent("UI点击_首页_送复活道具按钮"), 
                g.SoundManager.instance.playBtnClick(), window.wx, s.GameDataCenter.heartCount++, 
                this._isClick = !1);
            }, t.prototype.onVideoCallBack = function(e) {
                this._isClick = !1, e ? l.FLAnalysis.sendNormalEvent("视频关闭_送复活道具_结算页") : (l.FLAnalysis.sendNormalEvent("视频成功_送复活道具_结算页"), 
                s.GameDataCenter.heartCount++);
            }, t.prototype.onVideoError = function() {
                l.FLAnalysis.sendNormalEvent("视频错误_送复活道具_结算页"), this._isClick = !1;
            }, t.prototype.checkPanel = function() {
                var e = this.node.getChildByName("WXResultPanel").children[0];
                if (u.FLGameManager.gameState == u.EGameState.GAME_WIN) {
                    switch (this.winPanel.active = !0, this.overPanel.active = !1, cc.audioEngine.play(this.winClip, !1, 1), 
                    s.GameDataCenter.gameType) {
                      case u.EGameType.TYPE_LEVEL:
                        s.GameDataCenter.gameLevel < 100 ? s.GameDataCenter.gameLevel++ : s.GameDataCenter.gameLevel = 70;
                        break;

                      case u.EGameType.TYPE_ENDLESS:
                        s.GameDataCenter.endlessLevel < 100 ? s.GameDataCenter.endlessLevel++ : s.GameDataCenter.endlessLevel = c.FLRandom.randomNumber(0, a.EndlessConfig.mess.length);
                    }
                    e.y = 73, s.GameDataCenter.gameType == u.EGameType.TYPE_ENDLESS && (this.winPanel.getChildByName("getPropMgrTip").active = !1);
                } else u.FLGameManager.gameState == u.EGameState.GAME_OVER && (this.winPanel.active = !1, 
                this.overPanel.active = !0, this.passLevelDisplay.string = "" + (s.GameDataCenter.gameLevel - 1), 
                cc.audioEngine.play(this.overClip, !1, 1), e.y = 53);
            }, t.prototype.showPropsMess = function() {
                if (s.GameDataCenter.gameLevel <= 10) 10 == s.GameDataCenter.gameLevel ? (this.nextPropTip.active = !1, 
                this.getPropTip.active = !0, this.getPropTip.getChildByName("Label_2").getComponent(cc.Label).string = "+6", 
                s.GameDataCenter.heartCount += 6) : (this.nextPropTip.active = !0, this.getPropTip.active = !1, 
                this.levelDisplay.string = "再过" + (10 - s.GameDataCenter.gameLevel) + "关，即可获得", 
                this.propsDisplay.string = "+6"); else if (s.GameDataCenter.gameLevel <= 100 && s.GameDataCenter.gameLevel > 10) {
                    var e = s.GameDataCenter.gameLevel % 5;
                    0 == e ? (this.nextPropTip.active = !1, this.getPropTip.active = !0, this.getPropTip.getChildByName("Label_2").getComponent(cc.Label).string = "+3", 
                    s.GameDataCenter.heartCount += 3) : (this.nextPropTip.active = !0, this.getPropTip.active = !1, 
                    this.levelDisplay.string = "再过" + (5 - e) + "关，即可获得", this.propsDisplay.string = "+3");
                }
            }, t.prototype.showInsertAD = function() {
                var e = this;
                1 !== window.eReviewSwitch && this.scheduleOnce(function() {
                    e.node.getComponent(p.FLPlatformInterstitialAd).show();
                }, r.GameConfig.serverConfig.PANEL_SHOW_TIME);
            }, t.prototype.btnWidget = function() {
                cc.view.getVisibleSize().height, cc.view.getVisibleSize().width;
            }, t.prototype.showBanner = function() {
                var e = this;
                cc.view.getVisibleSize().height / cc.view.getVisibleSize().width >= 2 && (this.node.getComponent(d.FLPlatformBannerAd).show(), 
                this.scheduleOnce(function() {
                    e.node.getComponent(d.FLPlatformBannerAd).show();
                }, .1));
            }, i([ v({
                type: cc.Node,
                tooltip: "胜利页"
            }) ], t.prototype, "winPanel", void 0), i([ v({
                type: cc.Node,
                tooltip: "失败页"
            }) ], t.prototype, "overPanel", void 0), i([ v({
                type: cc.Label,
                tooltip: "获取道具剩余的关卡数提示"
            }) ], t.prototype, "levelDisplay", void 0), i([ v({
                type: cc.Label,
                tooltip: "获得爱心数量提示"
            }) ], t.prototype, "propsDisplay", void 0), i([ v({
                type: cc.Label,
                tooltip: "已过关卡数显示"
            }) ], t.prototype, "passLevelDisplay", void 0), i([ v({
                type: cc.Node,
                tooltip: "距离下次获得爱心道具的提示"
            }) ], t.prototype, "nextPropTip", void 0), i([ v({
                type: cc.Node,
                tooltip: "获得爱心道具的提示"
            }) ], t.prototype, "getPropTip", void 0), i([ v({
                type: cc.AudioClip,
                tooltip: "胜利音效"
            }) ], t.prototype, "winClip", void 0), i([ v({
                type: cc.AudioClip,
                tooltip: "失败音效"
            }) ], t.prototype, "overClip", void 0), t = i([ y ], t);
        }(FLUIPanel);
        n.ResultPanel = b, cc._RF.pop();
    }, {
        "../../../../Config/EndlessConfig": "EndlessConfig",
        "../../../../Config/GameConfig": "GameConfig",
        "../../../../Config/GameDataCenter": "GameDataCenter",
        "../../../../Framework/Core/Base/FLAnalysis": "FLAnalysis",
        "../../../../Framework/Core/Base/FLRandom": "FLRandom",
        "../../../../Framework/Core/Manager/FLGameManager": "FLGameManager",
        "../../../../Framework/Platform/AD/FLPlatformBannerAd": "FLPlatformBannerAd",
        "../../../../Framework/Platform/AD/FLPlatformInterstitialAd": "FLPlatformInterstitialAd",
        "../../../../Framework/Platform/AD/FLPlatformRewardVideoAd": "FLPlatformRewardVideoAd",
        "../../../../Framework/UI/UIManager/FLUIManager": "FLUIManager",
        "../../../../Framework/UI/UIManager/FLUIManagerMachine": "FLUIManagerMachine",
        "../../../../Script/SoundManager": "SoundManager"
    } ],
    RevivePanel: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0a780tnE7ZM3JhsZAVcd7Cy", "RevivePanel");
        var o = this && this.__extends || function() {
            var _e23 = function e(t, n) {
                return (_e23 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e23(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.RevivePanel = void 0;
        var a = e("../../../../Config/GameDataCenter"), r = e("../../../../Framework/Core/Base/FLAnalysis"), s = e("../../../../Framework/Core/Manager/FLGameManager"), l = e("../../../../Framework/UI/UIManager/FLUIManager"), c = e("../../../../Script/SoundManager"), u = cc._decorator, d = u.ccclass, p = u.property, f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.tipDialog = null, t._isClick = !1, t;
            }
            return o(t, e), t.prototype.onEnabled = function() {
                r.FLAnalysis.sendNormalEvent("进入首页");
            }, t.prototype.onDisabled = function() {}, t.prototype.onAddEvents = function() {}, 
            t.prototype.onRemoveEvents = function() {}, t.prototype.onStart = function() {}, 
            t.prototype.onDestroyed = function() {}, t.prototype.onVideoClicked = function() {
                this._isClick || (this._isClick = !0, c.SoundManager.instance.playBtnClick(), r.FLAnalysis.sendNormalEvent("UI点击_复活页_视频复活按钮"), 
                window.wx, this.onReviveLogic());
            }, t.prototype.onJumpClicked = function() {
                c.SoundManager.instance.playBtnClick(), r.FLAnalysis.sendNormalEvent("UI点击_复活页_跳过按钮"), 
                l.FLUIManager.close("ui/Revive/panel/RevivePanel", !0), l.FLUIManager.open("ui/Result/panel/ResultPanel");
            }, t.prototype.onReviveClicked = function() {
                c.SoundManager.instance.playBtnClick(), r.FLAnalysis.sendNormalEvent("UI点击_复活页_道具复活按钮"), 
                a.GameDataCenter.heartCount > 0 ? (a.GameDataCenter.heartCount--, s.FLGameManager.gameState = s.EGameState.GAME_REVIVE, 
                l.FLUIManager.close("ui/Revive/panel/RevivePanel")) : this.tipDialog.active = !0;
            }, t.prototype.onCloseClick = function() {
                c.SoundManager.instance.playBtnClick(), this.tipDialog.active = !1;
            }, t.prototype.onVidoCallBack = function(e) {
                this._isClick = !1, e ? r.FLAnalysis.sendNormalEvent("视频关闭_免费复活_复活页") : (r.FLAnalysis.sendNormalEvent("视频成功_免费复活_复活页"), 
                this.onReviveLogic());
            }, t.prototype.onReviveLogic = function() {
                this._isClick = !1, l.FLUIManager.close("ui/Revive/panel/RevivePanel"), s.FLGameManager.gameState = s.EGameState.GAME_REVIVE;
            }, t.prototype.onVideoError = function() {
                r.FLAnalysis.sendNormalEvent("视频错误_免费复活_复活页"), this._isClick = !1, l.FLUIManager.close("ui/Revive/panel/RevivePanel"), 
                s.FLGameManager.gameState = s.EGameState.GAME_REVIVE;
            }, i([ p({
                type: cc.Node,
                tooltip: "道具不足提示弹窗"
            }) ], t.prototype, "tipDialog", void 0), t = i([ d ], t);
        }(FLUIPanel);
        n.RevivePanel = f, cc._RF.pop();
    }, {
        "../../../../Config/GameDataCenter": "GameDataCenter",
        "../../../../Framework/Core/Base/FLAnalysis": "FLAnalysis",
        "../../../../Framework/Core/Manager/FLGameManager": "FLGameManager",
        "../../../../Framework/UI/UIManager/FLUIManager": "FLUIManager",
        "../../../../Script/SoundManager": "SoundManager"
    } ],
    Score: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0937188T1dIH5NIhHQB9zHz", "Score");
        var o = this && this.__extends || function() {
            var _e24 = function e(t, n) {
                return (_e24 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e24(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.Score = void 0;
        var a = e("../../../../Config/GameDataCenter"), r = e("../../../../Framework/Core/Manager/FLGameManager"), s = cc._decorator, l = s.ccclass, c = s.property, u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.highestScoreDisplay = null, t.curScoreDisplay = null, t.curScore = 0, t;
            }
            return o(t, e), t.prototype.onAddEvents = function() {
                cc.systemEvent.on(r.FLGameManager.EEventName.GAME_RESET, this.resetCurScoreEvent, this), 
                cc.systemEvent.on(r.FLGameManager.EEventName.GAME_REVIVE, this.onScoreReduce, this), 
                cc.systemEvent.on("ENDLESS_SCORE", this.onUpdateScoreEvnet, this);
            }, t.prototype.onRemoveEvents = function() {
                cc.systemEvent.off(r.FLGameManager.EEventName.GAME_RESET, this.resetCurScoreEvent, this), 
                cc.systemEvent.off(r.FLGameManager.EEventName.GAME_REVIVE, this.onScoreReduce, this), 
                cc.systemEvent.off("ENDLESS_SCORE", this.onUpdateScoreEvnet, this);
            }, t.prototype.onStart = function() {
                this.highestScoreDisplay.string = "历史最高分数:" + a.GameDataCenter.endless_highest_score, 
                this.curScoreDisplay.string = "当前分数:" + this.curScore;
            }, t.prototype.onDestroyed = function() {}, t.prototype.onUpdateScoreEvnet = function() {
                this.curScore++, this.curScoreDisplay.string = "当前分数:" + this.curScore, this.curScore > a.GameDataCenter.endless_highest_score && (a.GameDataCenter.endless_highest_score = this.curScore, 
                this.highestScoreDisplay.string = "历史最高分数:" + a.GameDataCenter.endless_highest_score);
            }, t.prototype.resetCurScoreEvent = function() {
                a.GameDataCenter.gameType == r.EGameType.TYPE_ENDLESS && 0 == a.GameDataCenter.result_btn_type || (this.curScore = 0, 
                this.curScoreDisplay.string = "当前分数:" + this.curScore);
            }, t.prototype.onScoreReduce = function() {
                this.curScore--, this.curScore + 1 > a.GameDataCenter.endless_highest_score && (a.GameDataCenter.endless_highest_score = this.curScore, 
                this.highestScoreDisplay.string = "历史最高分数:" + a.GameDataCenter.endless_highest_score), 
                this.curScoreDisplay.string = "当前分数:" + this.curScore;
            }, t.EEventName = {
                ENDLESS_SCORE: "ENDLESS_SCORE"
            }, i([ c({
                type: cc.Label,
                tooltip: "最高分数显示"
            }) ], t.prototype, "highestScoreDisplay", void 0), i([ c({
                type: cc.Label,
                tooltip: "当前分数显示"
            }) ], t.prototype, "curScoreDisplay", void 0), t = i([ l ], t);
        }(FLBehavior);
        n.Score = u, cc._RF.pop();
    }, {
        "../../../../Config/GameDataCenter": "GameDataCenter",
        "../../../../Framework/Core/Manager/FLGameManager": "FLGameManager"
    } ],
    SoundManager: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8a23dZZXHZBVZ5XOpbkVNVI", "SoundManager");
        var o = this && this.__extends || function() {
            var _e25 = function e(t, n) {
                return (_e25 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e25(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.SoundManager = void 0;
        var a = cc._decorator, r = a.ccclass, s = a.property, l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.bgm = null, t.btnClick = null, t._bgmId = null, t;
            }
            var n;
            return o(t, e), n = t, t.prototype.onAddEvents = function() {}, t.prototype.onRemoveEvents = function() {}, 
            t.prototype.onStart = function() {
                n.instance = this, this.playBgm();
            }, t.prototype.onDestroyed = function() {}, t.prototype.playBgm = function() {
                this._bgmId = cc.audioEngine.play(this.bgm, !0, 1);
            }, t.prototype.stopBgm = function() {
                cc.audioEngine.stop(this._bgmId);
            }, t.prototype.replayBgm = function() {
                null != this._bgmId && (this.stopBgm(), this.playBgm());
            }, t.prototype.playBtnClick = function() {
                cc.audioEngine.play(this.btnClick, !1, 1);
            }, t.instance = null, i([ s({
                type: cc.AudioClip,
                tooltip: "首页背景音效"
            }) ], t.prototype, "bgm", void 0), i([ s({
                type: cc.AudioClip,
                tooltip: "按钮点击音效"
            }) ], t.prototype, "btnClick", void 0), t = n = i([ r ], t);
        }(FLBehavior);
        n.SoundManager = l, cc._RF.pop();
    }, {} ],
    UIManagerConfig: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "418bdgwpM1DXLVPSDD77b3K", "UIManagerConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.UIManagerConfig = void 0;
        var o = {
            uiNames: {
                HOME: "Home/panel/HomePanel",
                GAME_UI: "Game/panel/GamePanel",
                RESULT: "Result/panel/ResultPanel",
                CRAZY_CLICK: "Crazy/panel/CrazyPanel",
                REVIVE: "Revive/panel/RevivePanel",
                GAME_BOX_ONE: "GameBox/panel/WXGameBoxPanel",
                GAME_BOX_TWO: "GameBox/panel/WXGameBoxPanel2",
                GAME_BOX_HOME: "platform/mini_game_wx/WXGameBoxPanel",
                GAME_BOX_GAME: "platform/mini_game_wx/WXGameBoxPanel",
                GAME_BOX_RESULT: "platform/mini_game_wx/WXGameBoxPanel",
                GAME_LIST_HOME: "platform/mini_game_wx/WXGameListPanel",
                GAME_LIST_GAME: "platform/mini_game_wx/WXGameListPanel",
                GAME_LIST_RESULT: "platform/mini_game_wx/WXGameListPanel"
            },
            closeToDestroy: [ "Game/panel/GamePanel" ],
            trans: [ [ {
                b: "HOME",
                i: "btnGameStart",
                a: "GAME_UI"
            }, {
                b: "HOME",
                i: "btnGameBox",
                a: "GAME_BOX_HOME"
            }, {
                b: "HOME",
                i: "btnGameList",
                a: "GAME_LIST_HOME"
            }, {
                b: "HOME",
                i: "recommendIconCancelled",
                a: "GAME_BOX_HOME"
            }, {
                b: "HOME",
                i: "homeToCrazy",
                a: "CRAZY_CLICK"
            }, {
                b: "GAME_UI",
                i: "btnBack",
                a: "HOME"
            }, {
                b: "GAME_UI",
                i: "btnGameList",
                a: "GAME_LIST_GAME"
            }, {
                b: "GAME_UI",
                i: "gameEndToResult",
                a: "RESULT"
            }, {
                b: "GAME_UI",
                i: "gameEndToGameBox",
                a: "GAME_BOX_GAME"
            }, {
                b: "RESULT",
                i: "btnContinue",
                a: "GAME_UI"
            }, {
                b: "RESULT",
                i: "btnBack",
                a: "HOME"
            }, {
                b: "RESULT",
                i: "btnGameList",
                a: "GAME_LIST_RESULT"
            }, {
                b: "RESULT",
                i: "recommendIconCancelled",
                a: "GAME_BOX_RESULT"
            }, {
                b: "GAME_BOX_HOME",
                i: "btnClose",
                a: "HOME"
            }, {
                b: "GAME_BOX_GAME",
                i: "btnClose",
                a: "RESULT"
            }, {
                b: "GAME_BOX_GAME",
                i: "btnCloseToCrazyClick",
                a: "CRAZY_CLICK"
            }, {
                b: "GAME_BOX_RESULT",
                i: "btnClose",
                a: "RESULT"
            }, {
                b: "GAME_LIST_HOME",
                i: "btnBack",
                a: "HOME"
            }, {
                b: "GAME_LIST_GAME",
                i: "btnBack",
                a: "GAME_UI"
            }, {
                b: "GAME_LIST_RESULT",
                i: "btnBack",
                a: "RESULT"
            }, {
                b: "CRAZY_CLICK",
                i: "CLOSE",
                a: "RESULT"
            }, {
                b: "CRAZY_CLICK",
                i: "crazyToGame",
                a: "GAME_UI"
            }, {
                b: "HOME",
                i: "reviewSwitch",
                a: "GAME_UI"
            }, {
                b: "GAME_UI",
                i: "reviewSwitch",
                a: "RESULT"
            }, {
                b: "GAME_UI",
                i: "reviewSwitchBack",
                a: "HOME"
            }, {
                b: "RESULT",
                i: "reviewSwitchContinue",
                a: "GAME_UI"
            }, {
                b: "RESULT",
                i: "reviewSwitchBack",
                a: "HOME"
            } ], [ {
                b: "HOME",
                i: "btnGameStart",
                a: "CRAZY_CLICK"
            }, {
                b: "HOME",
                i: "btnGameBox",
                a: "GAME_BOX_HOME"
            }, {
                b: "HOME",
                i: "btnGameList",
                a: "GAME_LIST_HOME"
            }, {
                b: "HOME",
                i: "recommendIconCancelled",
                a: "GAME_BOX_HOME"
            }, {
                b: "CRAZY_CLICK",
                i: "CLOSE",
                a: "GAME_UI"
            }, {
                b: "GAME_UI",
                i: "btnBack",
                a: "HOME"
            }, {
                b: "GAME_UI",
                i: "btnGameList",
                a: "GAME_LIST_GAME"
            }, {
                b: "GAME_UI",
                i: "gameEndToResult",
                a: "RESULT"
            }, {
                b: "GAME_UI",
                i: "gameEndToGameBox",
                a: "GAME_BOX_GAME"
            }, {
                b: "RESULT",
                i: "btnContinue",
                a: "GAME_UI"
            }, {
                b: "RESULT",
                i: "btnBack",
                a: "HOME"
            }, {
                b: "RESULT",
                i: "btnGameList",
                a: "GAME_LIST_RESULT"
            }, {
                b: "RESULT",
                i: "recommendIconCancelled",
                a: "GAME_BOX_RESULT"
            }, {
                b: "GAME_BOX_HOME",
                i: "btnClose",
                a: "HOME"
            }, {
                b: "GAME_BOX_GAME",
                i: "btnClose",
                a: "RESULT"
            }, {
                b: "GAME_BOX_GAME",
                i: "btnCloseToCrazyClick",
                a: "RESULT"
            }, {
                b: "GAME_BOX_RESULT",
                i: "btnClose",
                a: "RESULT"
            }, {
                b: "GAME_LIST_HOME",
                i: "btnBack",
                a: "HOME"
            }, {
                b: "GAME_LIST_GAME",
                i: "btnBack",
                a: "GAME_UI"
            }, {
                b: "GAME_LIST_RESULT",
                i: "btnBack",
                a: "RESULT"
            }, {
                b: "HOME",
                i: "reviewSwitch",
                a: "GAME_UI"
            }, {
                b: "GAME_UI",
                i: "reviewSwitch",
                a: "RESULT"
            }, {
                b: "GAME_UI",
                i: "reviewSwitchBack",
                a: "HOME"
            }, {
                b: "RESULT",
                i: "reviewSwitchContinue",
                a: "GAME_UI"
            }, {
                b: "RESULT",
                i: "reviewSwitchBack",
                a: "HOME"
            } ], [ {
                b: "HOME",
                i: "btnGameStart",
                a: "GAME_UI"
            }, {
                b: "HOME",
                i: "btnGameBox",
                a: "GAME_BOX_HOME"
            }, {
                b: "HOME",
                i: "btnGameList",
                a: "GAME_LIST_HOME"
            }, {
                b: "HOME",
                i: "recommendIconCancelled",
                a: "GAME_BOX_HOME"
            }, {
                b: "GAME_UI",
                i: "btnBack",
                a: "HOME"
            }, {
                b: "GAME_UI",
                i: "btnGameList",
                a: "GAME_LIST_GAME"
            }, {
                b: "GAME_UI",
                i: "gameEndToResult",
                a: "RESULT"
            }, {
                b: "GAME_UI",
                i: "gameEndToCrazyClick",
                a: "CRAZY_CLICK"
            }, {
                b: "GAME_UI",
                i: "gameEndToGameBox",
                a: "GAME_BOX_GAME"
            }, {
                b: "RESULT",
                i: "btnContinue",
                a: "GAME_UI"
            }, {
                b: "RESULT",
                i: "btnBack",
                a: "HOME"
            }, {
                b: "RESULT",
                i: "btnGameList",
                a: "GAME_LIST_RESULT"
            }, {
                b: "RESULT",
                i: "recommendIconCancelled",
                a: "GAME_BOX_RESULT"
            }, {
                b: "GAME_BOX_HOME",
                i: "btnClose",
                a: "HOME"
            }, {
                b: "GAME_BOX_GAME",
                i: "btnClose",
                a: "RESULT"
            }, {
                b: "GAME_BOX_RESULT",
                i: "btnClose",
                a: "RESULT"
            }, {
                b: "GAME_LIST_HOME",
                i: "btnBack",
                a: "HOME"
            }, {
                b: "GAME_LIST_GAME",
                i: "btnBack",
                a: "GAME_UI"
            }, {
                b: "GAME_LIST_RESULT",
                i: "btnBack",
                a: "RESULT"
            }, {
                b: "CRAZY_CLICK",
                i: "CLOSE",
                a: "RESULT"
            }, {
                b: "HOME",
                i: "reviewSwitch",
                a: "GAME_UI"
            }, {
                b: "GAME_UI",
                i: "reviewSwitch",
                a: "RESULT"
            }, {
                b: "GAME_UI",
                i: "reviewSwitchBack",
                a: "HOME"
            }, {
                b: "RESULT",
                i: "reviewSwitchContinue",
                a: "GAME_UI"
            }, {
                b: "RESULT",
                i: "reviewSwitchBack",
                a: "HOME"
            } ] ],
            init: "HOME"
        };
        n.UIManagerConfig = {
            DEFAULT: o,
            MINI_GAME_WX: o,
            MINI_GAME_TT: {
                uiNames: {
                    HOME: "base/HomePanel",
                    SKIN_TRY: "common/trySkinPanel/MultiCommonTrySkinPanel",
                    GAME_UI: "base/GameUIPanel",
                    BOX_REWEAD: "common/boxPanel/BoxPanel",
                    RESULT: "base/ResultPanel",
                    CRAZY_CLICK: "base/TBSCrazyClickPanel",
                    SHARE_RECODER: "platform/mini_game_tt/TTGameRecordSharePanel"
                },
                closeToDestroy: [],
                trans: [ [ {
                    b: "HOME",
                    i: "btnGameStart",
                    a: "SKIN_TRY"
                }, {
                    b: "SKIN_TRY",
                    i: "CLOSE",
                    a: "GAME_UI"
                }, {
                    b: "GAME_UI",
                    i: "btnBack",
                    a: "HOME"
                }, {
                    b: "GAME_UI",
                    i: "gameEndToCrazyClick",
                    a: "CRAZY_CLICK"
                }, {
                    b: "GAME_UI",
                    i: "gameEndToResult",
                    a: "SHARE_RECODER"
                }, {
                    b: "GAME_UI",
                    i: "gameEndToBoxPanel",
                    a: "SHARE_RECODER"
                }, {
                    b: "SHARE_RECODER",
                    i: "CLOSE",
                    a: "BOX_REWEAD"
                }, {
                    b: "BOX_REWEAD",
                    i: "CLOSE",
                    a: "CRAZY_CLICK"
                }, {
                    b: "CRAZY_CLICK",
                    i: "CLOSE",
                    a: "RESULT"
                }, {
                    b: "RESULT",
                    i: "btnContinue",
                    a: "SKIN_TRY"
                }, {
                    b: "RESULT",
                    i: "btnBack",
                    a: "HOME"
                }, {
                    b: "HOME",
                    i: "reviewSwitch",
                    a: "GAME_UI"
                }, {
                    b: "GAME_UI",
                    i: "reviewSwitch",
                    a: "RESULT"
                }, {
                    b: "RESULT",
                    i: "reviewSwitchContinue",
                    a: "GAME_UI"
                }, {
                    b: "RESULT",
                    i: "reviewSwitchBack",
                    a: "HOME"
                } ] ],
                init: "HOME"
            },
            MINI_GAME_QQ: {
                uiNames: {
                    HOME_CRAZY: "base/HomePanel",
                    HOME_HIT: "base/HomePanel",
                    GAME_UI_CRAZY: "base/GameUIPanel",
                    GAME_UI_HIT: "base/GameUIPanel",
                    RESULT_CRAZY: "base/ResultPanel",
                    RESULT_HIT: "base/ResultPanel",
                    CRAZY_CLICK_ENTER: "base/TBSCrazyClickPanel",
                    CRAZY_CLICK_EXIT: "base/TBSCrazyClickPanel",
                    HIT_HOLE_ENTER: "platform/mini_game_qq/HitHolePanel",
                    HIT_HOLE_EXIT: "platform/mini_game_qq/HitHolePanel"
                },
                closeToDestroy: [ "platform/mini_game_qq/HitHolePanel" ],
                trans: [ [ {
                    b: "HOME_CRAZY",
                    i: "btnGameStart",
                    a: "CRAZY_CLICK_ENTER"
                }, {
                    b: "HOME_HIT",
                    i: "btnGameStart",
                    a: "HIT_HOLE_ENTER"
                }, {
                    b: "CRAZY_CLICK_ENTER",
                    i: "CLOSE",
                    a: "GAME_UI_CRAZY"
                }, {
                    b: "CRAZY_CLICK_EXIT",
                    i: "CLOSE",
                    a: "RESULT_CRAZY"
                }, {
                    b: "HIT_HOLE_ENTER",
                    i: "CLOSE",
                    a: "GAME_UI_HIT"
                }, {
                    b: "HIT_HOLE_EXIT",
                    i: "CLOSE",
                    a: "RESULT_HIT"
                }, {
                    b: "GAME_UI_CRAZY",
                    i: "btnBack",
                    a: "HOME_HIT"
                }, {
                    b: "GAME_UI_HIT",
                    i: "btnBack",
                    a: "HOME_CRAZY"
                }, {
                    b: "GAME_UI_CRAZY",
                    i: "gameEndToResult",
                    a: "HIT_HOLE_EXIT"
                }, {
                    b: "GAME_UI_HIT",
                    i: "gameEndToResult",
                    a: "CRAZY_CLICK_EXIT"
                }, {
                    b: "GAME_UI_CRAZY",
                    i: "gameEndToResult",
                    a: "HIT_HOLE_EXIT"
                }, {
                    b: "GAME_UI_HIT",
                    i: "gameEndToResult",
                    a: "CRAZY_CLICK_EXIT"
                }, {
                    b: "RESULT_CRAZY",
                    i: "btnContinue",
                    a: "CRAZY_CLICK_ENTER"
                }, {
                    b: "RESULT_HIT",
                    i: "btnContinue",
                    a: "HIT_HOLE_ENTER"
                }, {
                    b: "RESULT_CRAZY",
                    i: "btnBack",
                    a: "HOME_CRAZY"
                }, {
                    b: "RESULT_HIT",
                    i: "btnBack",
                    a: "HOME_HIT"
                }, {
                    b: "HOME_CRAZY",
                    i: "reviewSwitch",
                    a: "GAME_UI_CRAZY"
                }, {
                    b: "GAME_UI_CRAZY",
                    i: "reviewSwitch",
                    a: "RESULT_CRAZY"
                }, {
                    b: "GAME_UI_CRAZY",
                    i: "reviewSwitchBack",
                    a: "HOME_CRAZY"
                }, {
                    b: "RESULT_CRAZY",
                    i: "reviewSwitchContinue",
                    a: "GAME_UI_CRAZY"
                }, {
                    b: "RESULT_CRAZY",
                    i: "reviewSwitchBack",
                    a: "HOME_CRAZY"
                } ] ],
                init: "HOME_CRAZY"
            },
            MINI_GAME_OPPO: {
                uiNames: {
                    HOME: "base/HomePanel",
                    SKIN_TRY: "common/trySkinPanel/MultiCommonTrySkinPanel",
                    GAME_UI: "base/GameUIPanel",
                    MYSTERIOUS_BOX: "platform/mini_game_oppo/OPPOMysteriousBoxPanel",
                    RESULT: "base/ResultPanel"
                },
                closeToDestroy: [],
                trans: [ [ {
                    b: "HOME",
                    i: "btnGameStart",
                    a: "SKIN_TRY"
                }, {
                    b: "SKIN_TRY",
                    i: "CLOSE",
                    a: "GAME_UI"
                }, {
                    b: "GAME_UI",
                    i: "btnBack",
                    a: "HOME"
                }, {
                    b: "GAME_UI",
                    i: "gameEndToCrazyClick",
                    a: "MYSTERIOUS_BOX"
                }, {
                    b: "GAME_UI",
                    i: "gameEndToResult",
                    a: "RESULT"
                }, {
                    b: "GAME_UI",
                    i: "gameEndToGameBox",
                    a: "MYSTERIOUS_BOX"
                }, {
                    b: "MYSTERIOUS_BOX",
                    i: "CLOSE",
                    a: "RESULT"
                }, {
                    b: "RESULT",
                    i: "btnContinue",
                    a: "SKIN_TRY"
                }, {
                    b: "RESULT",
                    i: "btnBack",
                    a: "HOME"
                }, {
                    b: "HOME",
                    i: "reviewSwitch",
                    a: "GAME_UI"
                }, {
                    b: "GAME_UI",
                    i: "reviewSwitch",
                    a: "RESULT"
                }, {
                    b: "RESULT",
                    i: "reviewSwitchContinue",
                    a: "GAME_UI"
                }, {
                    b: "RESULT",
                    i: "reviewSwitchBack",
                    a: "HOME"
                } ] ],
                init: "HOME"
            },
            H5: o
        }, cc._RF.pop();
    }, {} ],
    WXGameBoxPanel2: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "233ccy08xBMSrT1INFOiXJp", "WXGameBoxPanel2");
        var o = this && this.__extends || function() {
            var _e26 = function e(t, n) {
                return (_e26 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e26(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.WXGameBoxPanel2 = void 0;
        var a = e("../../../../Config/GameConfig"), r = e("../../../../Config/GameDataCenter"), s = e("../../../../Framework/Core/Base/FLAnalysis"), l = e("../../../../Framework/Platform/AD/FLPlatformBannerAd"), c = e("../../../../Framework/UI/UIManager/FLUIManager"), u = cc._decorator, d = u.ccclass, p = u.property, f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.scrollView = null, t.banner = null, t._clickType = 0, t;
            }
            return o(t, e), t.prototype.onEnabled = function() {
                this.banner.hide(), s.FLAnalysis.sendNormalEvent("进入微信盒子页2"), r.GameDataCenter.onGameBox = !0;
            }, t.prototype.onDisabled = function() {}, t.prototype.onAddEvents = function() {}, 
            t.prototype.onRemoveEvents = function() {}, t.prototype.onStart = function() {}, 
            t.prototype.onDestroyed = function() {}, t.prototype.onClickedClose = function(e, t) {
                s.FLAnalysis.sendNormalEvent("UI点击_游戏盒子页2_继续游戏"), r.GameDataCenter.onGameBox = !1, 
                c.FLUIManager.close("ui/GameBox/panel/WXGameBoxPanel2"), 3 != a.GameConfig.serverConfig.SWITCH_SHOW_CRY2_PAGE ? c.FLUIManager.open("ui/Crazy/panel/CrazyPanel") : c.FLUIManager.open("ui/Result/panel/ResultPanel");
            }, t.onCloseCallback = null, i([ p({
                type: cc.ScrollView,
                tooltip: "滚动视图."
            }) ], t.prototype, "scrollView", void 0), i([ p({
                type: l.FLPlatformBannerAd,
                tooltip: "banner广告."
            }) ], t.prototype, "banner", void 0), t = i([ d ], t);
        }(FLUIPanel);
        n.WXGameBoxPanel2 = f, cc._RF.pop();
    }, {
        "../../../../Config/GameConfig": "GameConfig",
        "../../../../Config/GameDataCenter": "GameDataCenter",
        "../../../../Framework/Core/Base/FLAnalysis": "FLAnalysis",
        "../../../../Framework/Platform/AD/FLPlatformBannerAd": "FLPlatformBannerAd",
        "../../../../Framework/UI/UIManager/FLUIManager": "FLUIManager"
    } ],
    WXGameBoxPanel: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6ef8c8DoL5Gz6qB4BkGD441", "WXGameBoxPanel");
        var o = this && this.__extends || function() {
            var _e27 = function e(t, n) {
                return (_e27 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e27(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.WXGameBoxPanel = void 0;
        var a = e("../../../../Config/GameConfig"), r = e("../../../../Config/GameDataCenter"), s = e("../../../../Framework/Core/Base/FLAnalysis"), l = e("../../../../Framework/Platform/AD/FLPlatformBannerAd"), c = e("../../../../Framework/UI/UIManager/FLUIManager"), u = cc._decorator, d = u.ccclass, p = u.property, f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.scrollView = null, t.banner = null, t._clickType = 0, t;
            }
            return o(t, e), t.prototype.onEnabled = function() {
                this.banner.hide(), s.FLAnalysis.sendNormalEvent("进入微信盒子页"), r.GameDataCenter.onGameBox = !0;
            }, t.prototype.onDisabled = function() {}, t.prototype.onAddEvents = function() {}, 
            t.prototype.onRemoveEvents = function() {}, t.prototype.onStart = function() {}, 
            t.prototype.onDestroyed = function() {}, t.prototype.onClickedClose = function(e, t) {
                s.FLAnalysis.sendNormalEvent("UI点击_游戏盒子页_继续游戏"), c.FLUIManager.close("ui/GameBox/panel/WXGameBoxPanel"), 
                r.GameDataCenter.onGameBox = !1, r.GameDataCenter.isJumpBox ? r.GameDataCenter.isJumpBox = !1 : 3 != a.GameConfig.serverConfig.SWITCH_GAME_BOX2_PANEL && 0 === window.eReviewSwitch ? c.FLUIManager.open("ui/GameBox/panel/WXGameBoxPanel2") : 3 != a.GameConfig.serverConfig.SWITCH_SHOW_CRY2_PAGE ? c.FLUIManager.open("ui/Crazy/panel/CrazyPanel") : c.FLUIManager.open("ui/Result/panel/ResultPanel");
            }, t.onCloseCallback = null, i([ p({
                type: cc.ScrollView,
                tooltip: "滚动视图."
            }) ], t.prototype, "scrollView", void 0), i([ p({
                type: l.FLPlatformBannerAd,
                tooltip: "banner广告."
            }) ], t.prototype, "banner", void 0), t = i([ d ], t);
        }(FLUIPanel);
        n.WXGameBoxPanel = f, cc._RF.pop();
    }, {
        "../../../../Config/GameConfig": "GameConfig",
        "../../../../Config/GameDataCenter": "GameDataCenter",
        "../../../../Framework/Core/Base/FLAnalysis": "FLAnalysis",
        "../../../../Framework/Platform/AD/FLPlatformBannerAd": "FLPlatformBannerAd",
        "../../../../Framework/UI/UIManager/FLUIManager": "FLUIManager"
    } ],
    WXHomePanel: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ad695S3WRZK5Iez7WDd15gp", "WXHomePanel");
        var o = this && this.__extends || function() {
            var _e28 = function e(t, n) {
                return (_e28 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e28(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.WXHomePanel = void 0;
        var a = cc._decorator, r = a.ccclass, s = a.property, l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.iconsPanel = null, t.delayTime = 0, t.precisionPush = null, t.hotGame = null, 
                t._videoTag = null, t;
            }
            return o(t, e), t.prototype.onEnabled = function() {}, t.prototype.onDisabled = function() {}, 
            t.prototype.onAddEvents = function() {}, t.prototype.onRemoveEvents = function() {}, 
            t.prototype.onStart = function() {}, t.prototype.onDestroyed = function() {}, i([ s({
                type: cc.Node,
                tooltip: "卖量节点"
            }) ], t.prototype, "iconsPanel", void 0), i([ s({
                tooltip: "延迟时间"
            }) ], t.prototype, "delayTime", void 0), i([ s({
                type: cc.Node,
                tooltip: "猜你喜欢"
            }) ], t.prototype, "precisionPush", void 0), i([ s({
                type: cc.Node,
                tooltip: "精品热推"
            }) ], t.prototype, "hotGame", void 0), t = i([ r ], t);
        }(FLUIPanel);
        n.WXHomePanel = l, cc._RF.pop();
    }, {} ],
    WXResultPanel: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "93e5eP7yBxGg5kATiq8ewSP", "WXResultPanel");
        var o = this && this.__extends || function() {
            var _e29 = function e(t, n) {
                return (_e29 = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) {
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }
                })(t, n);
            };
            return function(t, n) {
                function o() {
                    this.constructor = t;
                }
                _e29(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                new o());
            };
        }(), i = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) {
                (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            }
            return a > 3 && r && Object.defineProperty(t, n, r), r;
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.WXResultPanel = void 0;
        var a = e("../../../../Framework/Core/Base/FLAnalysis"), r = e("../../../../Framework/UI/UIManager/FLUIManagerMachine"), s = cc._decorator, l = s.ccclass, c = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return o(t, e), t.prototype.onEnabled = function() {}, t.prototype.onDisabled = function() {}, 
            t.prototype.onAddEvents = function() {}, t.prototype.onRemoveEvents = function() {}, 
            t.prototype.onStart = function() {}, t.prototype.onDestroyed = function() {}, t.prototype.onClickedGameList = function(e, t) {
                r.FLUIManagerMachine.instance.onTransition("btnGameList"), a.FLAnalysis.sendUserEvent("UI点击_结算页_退出按钮");
            }, t = i([ l ], t);
        }(FLUIPanel));
        n.WXResultPanel = c, cc._RF.pop();
    }, {
        "../../../../Framework/Core/Base/FLAnalysis": "FLAnalysis",
        "../../../../Framework/UI/UIManager/FLUIManagerMachine": "FLUIManagerMachine"
    } ],
    "platform-adapter-native": [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c10889FbMtBNLpLgYBNWPiS", "platform-adapter-native");
        var o = function() {
            function e() {
                this.style = {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    realWidth: 0,
                    realHeight: 0
                }, fl.log("创建Native平台banner广告");
            }
            var t = e.prototype;
            return t.show = function() {}, t.hide = function() {}, t.destroy = function() {}, 
            t.onResize = function(e) {}, t.offResize = function(e) {}, t.onLoad = function(e) {}, 
            t.offLoad = function(e) {}, t.onError = function(e) {}, t.offError = function(e) {}, 
            e;
        }(), i = function() {
            function e() {
                fl.log("创建Native平台激励式视频广告");
            }
            var t = e.prototype;
            return t.load = function() {}, t.show = function() {}, t.destroy = function() {}, 
            t.onLoad = function(e) {}, t.offLoad = function(e) {}, t.onError = function(e) {}, 
            t.offError = function(e) {}, t.onClose = function(e) {}, t.offClose = function(e) {}, 
            e;
        }(), a = function() {
            function e() {
                fl.log("创建Native平台插屏广告");
            }
            var t = e.prototype;
            return t.load = function() {}, t.show = function() {}, t.destroy = function() {}, 
            t.onLoad = function(e) {}, t.offLoad = function(e) {}, t.onError = function(e) {}, 
            t.offError = function(e) {}, t.onClose = function(e) {}, t.offClose = function(e) {}, 
            e;
        }(), r = function() {
            function e() {
                fl.log("创建Native平台原生广告");
            }
            var t = e.prototype;
            return t.load = function() {}, t.show = function() {}, t.destroy = function() {}, 
            t.onLoad = function(e) {}, t.offLoad = function(e) {}, t.onError = function(e) {}, 
            t.offError = function(e) {}, t.onClose = function(e) {}, t.offClose = function(e) {}, 
            t.reportAdShow = function(e) {}, t.reportAdClick = function(e) {}, e;
        }(), s = function() {
            function e() {
                fl.log("创建Native平台盒子广告");
            }
            var t = e.prototype;
            return t.load = function() {}, t.show = function() {}, t.destroy = function() {}, 
            t.onError = function(e) {}, t.offError = function(e) {}, t.onClose = function(e) {}, 
            t.offClose = function(e) {}, e;
        }();
        window.fl = window.fl || {}, fl.adapter = fl.adapter || {}, fl.adapter.isNative && (console.log("fl.framework ===>>>", "适配原生APP平台"), 
        window.postMessageToTSGame = function(e) {
            fl.log("native call TS function:", e);
        }, fl.adapter.onShow = function(e) {
            return fl.log("调用Native平台的onShow函数。");
        }, fl.adapter.offShow = function(e) {
            return fl.log("调用Native平台的offShow函数。");
        }, fl.adapter.onHide = function(e) {
            return fl.log("调用Native平台的onHide函数。");
        }, fl.adapter.offHide = function(e) {
            return fl.log("调用Native平台的offHide函数。");
        }, fl.adapter.updateApp = function() {
            return fl.log("调用Native平台的updateApp函数。");
        }, fl.adapter.getLaunchOptionsSync = function() {
            return fl.log("调用Native平台的getLaunchOptionsSync函数。");
        }, fl.adapter.navigateToMiniProgram = fl.adapter.navigateToMiniProgram || function() {
            return fl.log("调用Native平台的navigateToMiniProgram函数。");
        }, fl.adapter.setKeepScreenOn = function() {
            return fl.log("调用Native平台的setKeepScreenOn函数。");
        }, fl.adapter.createBannerAd = function(e) {
            return new o();
        }, fl.adapter.createRewardedVideoAd = function(e) {
            return new i();
        }, fl.adapter.createInterstitialAd = function(e) {
            return new a(e);
        }, fl.adapter.createNativeAd = function(e) {
            return new r(e);
        }, fl.adapter.createAppBox = function(e) {
            return new s(e);
        }, fl.adapter.updateShareMenu = function(e) {
            return fl.log("调用Native平台的updateShareMenu函数。");
        }, fl.adapter.showShareMenu = function(e) {
            return fl.log("调用Native平台的showShareMenu函数。");
        }, fl.adapter.shareAppMessage = function(e) {
            return fl.log("调用Native平台的shareAppMessage函数。");
        }, fl.adapter.onShareAppMessage = function(e) {
            return fl.log("调用Native平台的onShareAppMessage函数。");
        }, fl.adapter.getShareInfo = function(e) {
            return fl.log("调用Native平台的getShareInfo函数。");
        }, fl.adapter.login = function() {
            return fl.log("调用Native平台的login函数。");
        }, fl.adapter.checkSession = function() {
            return fl.log("调用Native平台的checkSession函数。");
        }, fl.adapter.authorize = function() {
            return fl.log("调用Native平台的authorize函数。");
        }, fl.adapter.getSystemInfoSync = function() {
            return fl.log("调用Native平台的getSystemInfoSync函数。");
        }, fl.adapter.getSystemInfo = function() {
            return fl.log("调用Native平台的getSystemInfo函数。");
        }, fl.adapter.getBatteryInfoSync = function() {
            return fl.log("调用Native平台的getBatteryInfoSync函数。");
        }, fl.adapter.getNetworkType = function() {
            return fl.log("调用Native平台的getNetworkType函数。");
        }, fl.adapter.onNetworkStatusChange = function() {
            return fl.log("调用Native平台的onNetworkStatusChange函数。");
        }, fl.adapter.vibrateShort = function() {
            return fl.log("调用Native平台的vibrateShort函数。");
        }, fl.adapter.vibrateLong = function() {
            return fl.log("调用Native平台的vibrateLong函数。");
        }, fl.adapter.showToast = function() {
            return fl.log("调用Native平台的showToast函数。");
        }, fl.adapter.showModal = function() {
            return fl.log("调用Native平台的showModal函数。");
        }, fl.adapter.getMenuButtonBoundingClientRect = function() {
            return fl.log("调用Native平台的getMenuButtonBoundingClientRect函数。");
        }, fl.adapter.getGameRecorderManager = function() {
            return fl.log("调用Native平台的getGameRecorderManager函数。");
        }, fl.adapter.setClipboardData = function() {
            return fl.log("调用Native平台的setClipboardData函数。");
        }, fl.adapter.getClipboardData = function() {
            return fl.log("调用Native平台的getClipboardData函数。");
        }, fl.adapter.createBlockAd = function() {
            return fl.log("调用Native平台的createBlockAd函数。");
        }, fl.adapter.hideShareMenu = function() {
            return fl.log("调用Native平台的hideShareMenu函数。");
        }, fl.adapter.offShareAppMessage = function() {
            return fl.log("调用Native平台的offShareAppMessage函数。");
        }, fl.adapter.setStorageSync = function() {
            return fl.log("调用Native平台的setStorageSync函数。");
        }, fl.adapter.setStorage = function() {
            return fl.log("调用Native平台的setStorage函数。");
        }, fl.adapter.getStorageSync = function() {
            return fl.log("调用Native平台的getStorageSync函数。");
        }, fl.adapter.getStorage = function() {
            return fl.log("调用Native平台的getStorage函数。");
        }, fl.adapter.removeStorageSync = function() {
            return fl.log("调用Native平台的removeStorageSync函数。");
        }, fl.adapter.removeStorage = function() {
            return fl.log("调用Native平台的removeStorage函数。");
        }, fl.adapter.clearStorageSync = function() {
            return fl.log("调用Native平台的clearStorageSync函数。");
        }, fl.adapter.clearStorage = function() {
            return fl.log("调用Native平台的clearStorage函数。");
        }, fl.adapter.loadSubpackage = function() {
            return fl.log("调用Native平台的loadSubpackage函数。");
        }, fl.adapter.getUpdateManager = function() {
            return fl.log("调用Native平台的getUpdateManager函数。");
        }, fl.adapter.onMoreGamesModalClose = function() {
            return fl.log("调用Native平台的onMoreGamesModalClose函数。");
        }, fl.adapter.onNavigateToMiniProgram = function() {
            return fl.log("调用Native平台的onNavigateToMiniProgram函数。");
        }, fl.adapter.setEnableDebug = function() {
            return fl.log("调用Native平台的setEnableDebug函数。");
        }, fl.adapter.hasShortcutInstalled = function() {
            return fl.log("调用Native平台的hasShortcutInstalled函数。");
        }, fl.adapter.installShortcut = function() {
            return fl.log("调用Native平台的installShortcut函数。");
        }), cc._RF.pop();
    }, {} ]
}, {}, [ "AppConfig", "EndlessConfig", "GameConfig", "GameDataCenter", "LevelConfig", "UIManagerConfig", "FLAnalysis", "FLArray", "FLDateTime", "FLDevice", "FLRandom", "FLStore", "FLGameManager", "FLNetHTTPAsync", "FLPlatformBannerAd", "FLPlatformInterstitialAd", "FLPlatformNativeAd", "FLPlatformRewardVideoAd", "FLPlatformLogin", "FLPlatformServerConfig", "FLPlatformShare", "EReviewSwitch", "FLAutoScrollView", "FLPlatformRecommendDatas", "FLPlatformRecommendIcon", "FLWidget", "FLUIManager", "FLUIManagerMachine", "SoundManager", "CrazyPanel", "BallPre", "GetHeart", "HeartDialog", "Score", "GamePanel", "WXGameBoxPanel", "WXGameBoxPanel2", "LoginPanel", "HomePanel", "WXHomePanel", "WXResultPanel", "ResultPanel", "RevivePanel", "FLoadingMaskPanel", "platform-adapter-native" ]);