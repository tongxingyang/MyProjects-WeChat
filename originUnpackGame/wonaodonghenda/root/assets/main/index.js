var _inherits2 = require("../../@babel/runtime/helpers/inherits");

var _createSuper2 = require("../../@babel/runtime/helpers/createSuper");

var _classCallCheck2 = require("../../@babel/runtime/helpers/classCallCheck");

var _createClass2 = require("../../@babel/runtime/helpers/createClass");

window.__require = function e(t, n, o) {
    function i(r, s) {
        if (!n[r]) {
            if (!t[r]) {
                var c = r.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(c, !0);
                    if (a) return a(c, !0);
                    throw new Error("Cannot find module '" + r + "'");
                }
                r = c;
            }
            var d = n[r] = {
                exports: {}
            };
            t[r][0].call(d.exports, function(e) {
                return i(t[r][1][e] || e);
            }, d, d.exports, e, t, n, o);
        }
        return n[r].exports;
    }
    for (var a = "function" == typeof __require && __require, r = 0; r < o.length; r++) {
        i(o[r]);
    }
    return i;
}({
    ADIconItem: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "02cd7XZ225Lm4G/n1KvRWjH", "ADIconItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./AdData"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.start = function() {
                "wx" == o.AdData.platform ? this.node.getChildByName("wx").active = !0 : this.node.getChildByName("zj").active = !0;
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "./AdData": "AdData"
    } ],
    AdComponent: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "7b964Awr3BOAJja6gTL3O5c", "AdComponent"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.AdComponent = void 0;
        var o = e("./AdBase/AndroidBase"), i = e("./AdBase/KSAdBase"), a = e("./AdBase/OppoAdBase"), r = e("./AdBase/TTAdBase"), s = e("./AdBase/VivoAdBase"), c = e("./AdData"), l = function() {
            function e() {}
            return e.onShowRewardedAd = function(e, t, n, l) {
                if (void 0 === n && (n = ""), void 0 === l && (l = ""), "win" == c.AdData.platform || c.AdData.IsPure) return t.call(e, !0), 
                void console.log("Laya.Browser.window.tt == null");
                if ("tt" == c.AdData.platform) window.tt.reportAnalytics("rewardedAd", {
                    pos: n
                }), r.TTADBase.instance.recordPause(), r.TTADBase.instance.showVideoAd(e, t), t && r.TTADBase.instance.recordResume(); else if ("wx" == c.AdData.platform) {
                    if (GA.Info.underCheck) return void t.call(e, !0);
                    GA.rewardOperation({
                        tag: n,
                        byVideo: !0,
                        page: l,
                        result: function result(n) {
                            t.call(e, n.reward);
                        }
                    });
                } else "oppo" == c.AdData.platform ? a.OppoAdBase.onShowRewardedAd(e, t) : "vivo" == c.AdData.platform ? s.VivoAdBase.onShowRewardedAd(e, t) : "Android" == c.AdData.platform ? o.AndroidBase.onShowRewardedAd(e, t) : "ks" == c.AdData.platform && i.KSAdBase.onShowRewardedAd(e, t);
            }, e.onShowBanner = function() {
                if (!c.AdData.IsPure) if ("wx" == c.AdData.platform) {
                    if (GA.Info.underCheck) return;
                    var e = window.wx.getSystemInfoSync(), t = 1450 * e.windowWidth / 750;
                    if (e.windowHeight < t) return;
                    GA.showBanner({
                        adTag: "LobbyUI",
                        style: {
                            width: 300,
                            offsetX: e.windowWidth / 2 - 150,
                            offsetY: 0
                        },
                        fail: function fail() {}
                    });
                } else "oppo" == c.AdData.platform ? a.OppoAdBase.OnShowNativeBannerAd() : "vivo" == c.AdData.platform ? s.VivoAdBase.OnShowViVoNativeBannerAd() : "Android" == c.AdData.platform && o.AndroidBase.onShowBanner();
            }, e.onHideBanner = function() {
                if (!c.AdData.IsPure) if ("wx" == c.AdData.platform) {
                    if (GA.Info.underCheck) return;
                    GA.hideBanner("LobbyUI");
                } else "vivo" == c.AdData.platform ? s.VivoAdBase.onHideBanner() : "oppo" == c.AdData.platform ? a.OppoAdBase.onHideBanner() : "Android" == c.AdData.platform && o.AndroidBase.onHideBannerAd();
            }, e.onShowInterstitialAd = function(e) {
                if (void 0 === e && (e = 0), !c.AdData.IsPure) if ("wx" == c.AdData.platform) {
                    if (GA.Info.underCheck) return;
                    GA.showInterstitialAd();
                } else "vivo" == c.AdData.platform ? s.VivoAdBase.onShowViVoNativeInterAd() : "Android" == c.AdData.platform ? o.AndroidBase.onShowInterAd() : "ks" == c.AdData.platform && i.KSAdBase.onShowInterAd();
            }, e.onShowGridAd = function(e, t) {
                if (void 0 === e && (e = 0), void 0 === t && (t = 0), !c.AdData.IsPure) if ("wx" == c.AdData.platform) {
                    if (GA.Info.underCheck) return;
                    null != this.m_GridAd && this.m_GridAd.destroy();
                    var n = window.wx.getSystemInfoSync();
                    this.m_GridAd = window.wx.createCustomAd({
                        adUnitId: "adunit-d7f1f590f5023157",
                        adIntervals: 30,
                        style: {
                            left: (e + 375) / 750 * n.windowWidth,
                            top: (667 - t) / 1334 * n.windowHeight,
                            fixed: !0
                        }
                    }), this.m_GridAd.show();
                } else "vivo" == c.AdData.platform && s.VivoAdBase.onShowBoxPortalAd();
            }, e.onHideGridAd = function() {
                if ("wx" == c.AdData.platform) {
                    if (GA.Info.underCheck) return;
                    null != this.m_GridAd && this.m_GridAd.destroy();
                } else "vivo" == c.AdData.platform && s.VivoAdBase.onCloseBoxPortalAd();
            }, e.onShowManyGridAd = function(e) {
                if (!c.AdData.IsPure && "wx" == c.AdData.platform) {
                    if (GA.Info.underCheck) return;
                    var t, n = wx.getSystemInfoSync(), o = 1450 * n.windowWidth / 750;
                    if (n.windowHeight < o) return;
                    null != (t = wx.createCustomAd({
                        adUnitId: "adunit-cb024f71d7d402cc",
                        adIntervals: 30,
                        style: {
                            left: n.windowWidth / 2 - 180,
                            top: (667 - e) / 1334 * n.windowHeight,
                            fixed: !1
                        }
                    })) && (null != this.m_ManyGradAd && this.m_ManyGradAd.destroy(), this.m_ManyGradAd = t), 
                    this.m_ManyGradAd.show();
                }
            }, e.onHideManyGridAd = function() {
                if (!c.AdData.IsPure && "wx" == c.AdData.platform) {
                    if (GA.Info.underCheck) return;
                    null != this.m_ManyGradAd && this.m_ManyGradAd.hide();
                }
            }, e.onShowNativeAd = function() {
                c.AdData.IsPure || ("Android" == c.AdData.platform && o.AndroidBase.onShowNativeAd(), 
                "oppo" == c.AdData.platform && a.OppoAdBase.onShowNativeAd());
            }, e.onHideNativeAd = function() {
                c.AdData.IsPure || "Android" == c.AdData.platform && o.AndroidBase.onHideNativeAd();
            }, e.onShowFullVideoAd = function() {
                c.AdData.IsPure || "Android" == c.AdData.platform && o.AndroidBase.onShowFullVideoAd();
            }, e.onShowSplashAd = function() {
                c.AdData.IsPure || "Android" == c.AdData.platform && o.AndroidBase.onShowSplashAd();
            }, e.onSatrtRecord = function() {
                "tt" == c.AdData.platform ? r.TTADBase.instance.recordStart() : "ks" == c.AdData.platform && i.KSAdBase.instance().startRecord();
            }, e.onStopRecord = function(e, t) {
                "tt" == c.AdData.platform ? r.TTADBase.instance.recordStop(e, t) : "ks" == c.AdData.platform && i.KSAdBase.instance().stopRecord();
            }, e.onPuseRecord = function() {
                "tt" == c.AdData.platform && r.TTADBase.instance.recordPause();
            }, e.onShareRecord = function(e, t) {
                "tt" == c.AdData.platform ? r.TTADBase.instance.shareRecord(e, t) : "ks" == c.AdData.platform && i.KSAdBase.instance().shareRecord(e, t);
            }, e.m_ManyGradAd = null, e;
        }();
        n.AdComponent = l, cc._RF.pop();
    }, {
        "./AdBase/AndroidBase": "AndroidBase",
        "./AdBase/KSAdBase": "KSAdBase",
        "./AdBase/OppoAdBase": "OppoAdBase",
        "./AdBase/TTAdBase": "TTAdBase",
        "./AdBase/VivoAdBase": "VivoAdBase",
        "./AdData": "AdData"
    } ],
    AdData: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d96a1rhcltGHIJpZ1RLdglO", "AdData"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.AdData = void 0;
        var o = function() {
            function e() {}
            return e.platform = "wx", e.IsPure = !1, e;
        }();
        n.AdData = o, cc._RF.pop();
    }, {} ],
    AndroidBase: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ff274vlaLJAX74tXdAtz+pZ", "AndroidBase"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.AndroidBase = void 0;
        var o = e("../AdData"), i = function() {
            function e() {}
            return e.onShowBanner = function() {
                o.AdData.platform;
            }, e.onHideBannerAd = function() {}, e.onShowRewardedAd = function() {
                o.AdData.platform;
            }, e.onShowFullVideoAd = function() {
                o.AdData.platform;
            }, e.onShowInterAd = function() {
                o.AdData.platform;
            }, e.onShowNativeAd = function() {
                o.AdData.platform;
            }, e.onHideNativeAd = function() {
                o.AdData.platform;
            }, e.onShowSplashAd = function() {
                o.AdData.platform;
            }, e;
        }();
        n.AndroidBase = i, cc._RF.pop();
    }, {
        "../AdData": "AdData"
    } ],
    BackgroundAdapter: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "88a6dUiJ9JAzbglVy0pANTj", "BackgroundAdapter"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../Managers/GameMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                var e = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height), t = this.node.width * e, n = this.node.height * e;
                this.node.scaleX = Math.max(cc.view.getCanvasSize().width / t, cc.view.getCanvasSize().height / n), 
                o.default.Instance.kuan = Math.max(cc.view.getCanvasSize().width / t, cc.view.getCanvasSize().height / n);
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../Managers/GameMgr": "GameMgr"
    } ],
    BridgeAddItem: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "33762oKp6VG95YhBePOTOhr", "BridgeAddItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("./BridgeLeve"), c = cc._decorator, l = c.ccclass, d = c.property, u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isStatic = !1, t.isDraw = !1, t.canLinkData = [], t.canStay = !1, t.selfGra = null, 
                t.isAdd = !1, t.linkedIndex = 100, t.m_linkIndex = [], t.startX = 0, t.startY = 0, 
                t.checkNode = null, t.RayNode = [], t.colliderNode = null, t;
            }
            var n;
            return __extends(t, e), n = t, t.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), 
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), i.default.Instance.add_event_listenner(o.GConfiguration.BridgeCollider, this, this.check), 
                i.default.Instance.add_event_listenner(o.GConfiguration.BridgeExit, this, this.leave), 
                i.default.Instance.add_event_listenner(o.GConfiguration.BridgeSplce, this, this.changeData), 
                i.default.Instance.add_event_listenner(o.GConfiguration.BridgeHideBtn, this, this.HideNode);
            }, t.prototype.HideNode = function() {
                this.node.active = !1;
            }, t.prototype.changeData = function(e, t) {
                var n = this;
                if (Number(t[1]) >= 10) {
                    if (t[1] + "" != this.node.name.slice(this.node.name.length - 2, this.node.name.length)) return;
                } else if (t[1] + "" != this.node.name.slice(this.node.name.length - 1, this.node.name.length)) return;
                if (this.canLinkData = this.node.parent.getComponent(s.default).cofon[this.node.name], 
                !(this.canLinkData.length <= 0)) {
                    var o = "";
                    4 == t[0].length ? o = t[0].slice(t[0].length - 1, t[0].length) : 5 == t[0].length && (o = t[0].slice(t[0].length - 2, t[0].length)), 
                    this.canLinkData.forEach(function(e) {
                        e == o && n.node.parent.getComponent(s.default).cofon[n.node.name].splice(n.canLinkData.indexOf(e), 1);
                    });
                }
            }, t.prototype.leave = function(e, t) {
                if (this.isDraw) {
                    var n = Number(t.slice(3, t.length));
                    this.linkedIndex == n && null != this.selfGra && (this.selfGra.destroy(), this.selfGra = null, 
                    this.linkedIndex = 100, this.m_linkIndex.length > 0 && this.m_linkIndex.splice(this.m_linkIndex.indexOf(this.linkedIndex)) && this.m_linkIndex.splice(this.m_linkIndex.indexOf(this.linkedIndex, 1)));
                }
            }, t.prototype.check = function(e, t) {
                if (this.isDraw) {
                    this.canLinkData = this.node.parent.getComponent(s.default).cofon[this.node.name];
                    var n = t, o = Number(n.slice(3, n.length));
                    if (n == this.node.name) return;
                    this.canLinkData.length <= 0 && this.showOtherBridge(o, n);
                    for (var i = 0; i < this.canLinkData.length; i++) {
                        var a = this.canLinkData[i];
                        if (a == o) return this.linkedIndex = a, this.m_linkIndex.push(a), void this.showBridge(n);
                        i == this.canLinkData.length - 1 && a != o && this.showOtherBridge(o, n);
                    }
                }
            }, t.prototype.showOtherBridge = function(e, t) {
                if (null == this.selfGra) {
                    if (this.m_linkIndex.length <= 0) return this.linkedIndex = e, this.m_linkIndex.push(e), 
                    void this.showBridge(t);
                    for (var n = 0; n < this.m_linkIndex.length; n++) {
                        var o = this.m_linkIndex[n];
                        if (o == e) return;
                        n == this.m_linkIndex.length - 1 && o != e && (this.linkedIndex = e, this.m_linkIndex.push(e), 
                        this.showBridge(t));
                    }
                }
            }, t.prototype.showBridge = function(e) {
                this.isStatic || this.node.parent.getChildByName(e).getComponent(n).isStatic ? (this.selfGra = r.default.Instance.show_ui("Bridge", "Bridge1", this.node.parent.getChildByName("BridgeParent")), 
                this.selfGra.getComponent(cc.PhysicsCollider).sensor = !0) : this.selfGra = r.default.Instance.show_ui("Bridge", "Bridge2", this.node.parent.getChildByName("BridgeParent")), 
                a.default.Instance.play_effect("wood"), this.selfGra.position = this.node.position;
                var t = this.node.parent.getChildByName(e).position, o = this._calculationDis(this.selfGra.getPosition(), t), i = 180 * Math.atan2(this.selfGra.y - t.y, this.selfGra.x - t.x) / Math.PI;
                this.selfGra.angle = i - 180, this.selfGra.width = o;
                var s = this.selfGra.getComponent(cc.PhysicsBoxCollider);
                s.size.width = o - 38;
                var c = .5 * o;
                s.offset.x = c, s.apply();
            }, t.prototype._calculationDis = function(e, t) {
                return e.sub(t).mag();
            }, t.prototype.onTouchStart = function(e) {
                this.RayNode = [], this.canLinkData = this.node.parent.getComponent(s.default).cofon[this.node.name], 
                this.startX = this.node.convertToNodeSpaceAR(e.getLocation()).x, this.startX = this.node.convertToNodeSpaceAR(e.getLocation()).y, 
                this.isDraw = !0, this.checkNode = r.default.Instance.show_ui("Bridge", "check", this.node.parent), 
                this.checkNode.position = this.node.position;
            }, t.prototype.onTouchMove = function(e) {
                if (this.isDraw) {
                    var t = this.node.parent.convertToNodeSpaceAR(e.getLocation()), n = this._calculationDis(this.checkNode.getPosition(), t), o = 180 * Math.atan2(this.checkNode.y - t.y, this.checkNode.x - t.x) / Math.PI;
                    this.checkNode.width = n;
                    var i = this.checkNode.getComponent(cc.PhysicsBoxCollider);
                    i.size.width = n;
                    var a = n / 2;
                    i.offset.x = a, i.apply(), this.checkNode.angle = o - 180;
                }
            }, t.prototype.onTouchEnd = function() {
                var e = this;
                if (this.RayNode = [], null != this.checkNode && (this.checkNode.destroy(), this.checkNode = null), 
                null != this.selfGra && (this.selfGra = null), this.isDraw = !1, !(this.linkedIndex >= 100)) {
                    this.node.parent.getComponent(s.default).cofon[this.node.name].splice(this.node.parent.getComponent(s.default).cofon[this.node.name].indexOf(this.linkedIndex), 1);
                    var t = [ this.node.name, this.linkedIndex ];
                    console.log(t), i.default.Instance.dispatch_event(o.GConfiguration.BridgeSplce, t), 
                    this.m_linkIndex.length <= 0 || this.node.parent.children.forEach(function(t) {
                        "add" == t.name.slice(0, 3) && t.name != e.node.name && e.m_linkIndex.forEach(function(o) {
                            if (o.toString() == t.name.slice(3, t.name.length) == e.m_linkIndex[0]) {
                                var i = Number(e.node.name.slice(3, e.node.name.length));
                                t.getComponent(n).m_linkIndex.push(i);
                            }
                        });
                    });
                }
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.BridgeCollider, this, this.check), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.BridgeExit, this, this.leave), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.BridgeSplce, this, this.changeData), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.BridgeHideBtn, this, this.HideNode);
            }, t.prototype.rayTest = function(e, t) {
                var n = this;
                this.RayNode = [];
                for (var o = cc.director.getPhysicsManager().rayCast(e, t, cc.RayCastType.All), i = 0; i < o.length; i++) {
                    var a = o[i], r = a.collider;
                    this.RayNode.push(r.node.name), a.point, a.normal, a.fraction;
                }
                this.RayNode.forEach(function(e) {
                    if ("add" == e.slice(0, 3)) return console.log(n.node.name, ">>>>", e), n.colliderNode = e, 
                    void n.check(null, e);
                });
            }, __decorate([ d ], t.prototype, "isStatic", void 0), n = __decorate([ l ], t);
        }(cc.Component);
        n.default = u, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "./BridgeLeve": "BridgeLeve"
    } ],
    BridgeLeve: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e08e5xEX0dGpr1XXnNLdCHV", "BridgeLeve"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("./BridgePlayer"), c = cc._decorator, l = c.ccclass, d = c.property, u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isGet = !1, t.iswin = !0, t.moveTween = null, t.AddIndex = 0, t.tipsFrame = null, 
                t.isStart = !1, t.cofon = {}, t.otherCofin = {}, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.BridgeEnd, this, this.onResult), 
                i.default.Instance.add_event_listenner(o.GConfiguration.BridgeStopMove, this, this.stopMove), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips);
            }, t.prototype.stopMove = function() {
                null != this.moveTween && this.moveTween.stop();
            }, t.prototype.checkWin = function() {}, t.prototype.showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.default.Instance.show_ui("Warp", "WarpTips").getChildByName("node").getChildByName("t_tishi").getChildByName("guohetishi").getComponent(cc.Sprite).spriteFrame = this.tipsFrame;
            }, t.prototype.onResult = function() {
                var e = this;
                this.isGet || (this.isGet = !0, this.iswin ? this.node.getChildByName("player").getComponent(s.default).move() : (this.node.getChildByName("BridgeParent").children.forEach(function(e) {
                    "Bridge1" != e.name && "Bridge2" != e.name || (e.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic);
                }), this.moveTween = cc.tween(this.node.getChildByName("player")).to(5, {
                    x: 240
                }).delay(1).call(function() {
                    e.node.getChildByName("player").getComponent(s.default).selfSpine.setAnimation(0, "stand2", !0);
                }).start()));
            }, t.prototype.startMove = function() {
                var e = this;
                this.isStart || (a.default.Instance.play_effect("BALLOON_peng"), this.isStart = !0, 
                this.node.getChildByName("player").getComponent(sp.Skeleton).setAnimation(0, "baozha", !1), 
                this.scheduleOnce(function() {
                    e.node.getChildByName("player").getComponent(sp.Skeleton).setAnimation(0, "stand2", !0), 
                    e.node.getChildByName("player").getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic, 
                    i.default.Instance.dispatch_event(o.GConfiguration.BridgeHideBtn, "");
                    for (var t = 0; t < e.AddIndex; t++) {
                        var n = "add" + t;
                        if (e.cofon[n].length > 0) return console.log("有未连接", e.cofon), void (e.iswin = !1);
                    }
                }, .2));
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.BridgeEnd, this, this.onResult), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.BridgeStopMove, this, this.stopMove), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips);
            }, __decorate([ d ], t.prototype, "AddIndex", void 0), __decorate([ d(cc.SpriteFrame) ], t.prototype, "tipsFrame", void 0), 
            __decorate([ l ], t);
        }(cc.Component);
        n.default = u, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "./BridgePlayer": "BridgePlayer"
    } ],
    BridgeLv10: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bdf51pxyUtJCr7FLdz4tQTW", "BridgeLv10"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../BridgeLeve"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.cofon = {
                    add0: [ 1, 5, 6 ],
                    add1: [ 0, 2, 5, 6, 7 ],
                    add2: [ 1, 3, 6, 7, 8 ],
                    add3: [ 2, 4, 7, 8, 9 ],
                    add4: [ 3, 8, 9 ],
                    add5: [ 0, 1, 6 ],
                    add6: [ 0, 1, 2, 5, 7 ],
                    add7: [ 1, 2, 3, 6, 8 ],
                    add8: [ 2, 3, 4, 7, 9 ],
                    add9: [ 3, 4, 8 ]
                }, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.node.parent.getComponent(o.default).cofon = this.cofon;
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../BridgeLeve": "BridgeLeve"
    } ],
    BridgeLv1: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c1e83AtU/hKg7AazoH3gVbW", "BridgeLv1"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../BridgeLeve"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.cofon = {
                    add0: [ 1 ],
                    add1: [ 2, 6, 7 ],
                    add2: [ 1, 3, 7 ],
                    add3: [ 2, 4, 8 ],
                    add4: [ 3, 5, 8, 9 ],
                    add5: [ 4 ],
                    add6: [ 1, 7 ],
                    add7: [ 1, 2, 6 ],
                    add8: [ 3, 4, 9 ],
                    add9: [ 8, 4 ]
                }, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.node.parent.getComponent(o.default).cofon = this.cofon;
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../BridgeLeve": "BridgeLeve"
    } ],
    BridgeLv2: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5f960+gLr5OMa+YBMbhOqnX", "BridgeLv2"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../BridgeLeve"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.cofon = {
                    add0: [ 1, 4 ],
                    add1: [ 0, 2, 4, 5 ],
                    add2: [ 1, 3, 5, 6 ],
                    add3: [ 2, 6 ],
                    add4: [ 0, 1, 5 ],
                    add5: [ 1, 2, 4, 6 ],
                    add6: [ 2, 3, 5 ]
                }, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.node.parent.getComponent(o.default).cofon = this.cofon;
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../BridgeLeve": "BridgeLeve"
    } ],
    BridgeLv3: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d5e9fQx3QxAdLuMvL3UT1ZP", "BridgeLv3"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../BridgeLeve"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.cofon = {
                    add0: [ 1, 4 ],
                    add1: [ 0, 2, 4, 5 ],
                    add2: [ 1, 3, 4, 5 ],
                    add3: [ 2, 5 ],
                    add4: [ 0, 1, 2, 5 ],
                    add5: [ 1, 2, 3, 4 ]
                }, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.node.parent.getComponent(o.default).cofon = this.cofon;
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../BridgeLeve": "BridgeLeve"
    } ],
    BridgeLv4: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3cd01qO4/9PkKGulIHzKRGv", "BridgeLv4"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../BridgeLeve"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.cofon = {
                    add0: [ 1, 4 ],
                    add1: [ 0, 2, 4, 5 ],
                    add2: [ 1, 3, 5, 6, 7 ],
                    add3: [ 2, 7 ],
                    add4: [ 0, 1, 5 ],
                    add5: [ 1, 2, 4, 6 ],
                    add6: [ 2, 5, 7 ],
                    add7: [ 2, 3, 6 ]
                }, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.node.parent.getComponent(o.default).cofon = this.cofon;
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../BridgeLeve": "BridgeLeve"
    } ],
    BridgeLv5: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f084aZuDj9NTag/+CRBxCKB", "BridgeLv5"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../BridgeLeve"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.cofon = {
                    add0: [ 1, 4, 5 ],
                    add1: [ 0, 2, 5 ],
                    add2: [ 1, 3, 6 ],
                    add3: [ 2, 6, 7, 8 ],
                    add4: [ 0, 5 ],
                    add5: [ 0, 1, 4 ],
                    add6: [ 2, 3, 7, 8 ],
                    add7: [ 3, 6, 8 ],
                    add8: [ 3, 7, 6 ]
                }, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.node.parent.getComponent(o.default).cofon = this.cofon;
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../BridgeLeve": "BridgeLeve"
    } ],
    BridgeLv6: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a1b37BLLt9JY4fc7051pshw", "BridgeLv6"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../BridgeLeve"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.cofon = {
                    add0: [ 1, 5 ],
                    add1: [ 0, 2, 5, 6 ],
                    add2: [ 1, 3, 6, 7 ],
                    add3: [ 2, 6 ],
                    add4: [ 5 ],
                    add5: [ 0, 1, 4 ],
                    add6: [ 1, 2, 3, 5, 7 ],
                    add7: [ 2, 6 ]
                }, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.node.parent.getComponent(o.default).cofon = this.cofon;
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../BridgeLeve": "BridgeLeve"
    } ],
    BridgeLv7: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "43368hRcZZOR4vpcr9bxUMx", "BridgeLv7"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../BridgeLeve"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.cofon = {
                    add0: [ 1, 5, 6 ],
                    add1: [ 0, 2, 6, 7 ],
                    add2: [ 1, 3, 6, 7, 8 ],
                    add3: [ 2, 4, 7, 8, 9 ],
                    add4: [ 3, 8, 9 ],
                    add5: [ 0, 6 ],
                    add6: [ 0, 1, 2, 5, 7 ],
                    add7: [ 1, 2, 3, 6, 8 ],
                    add8: [ 2, 3, 4, 7, 9 ],
                    add9: [ 3, 4, 8 ]
                }, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.node.parent.getComponent(o.default).cofon = this.cofon;
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../BridgeLeve": "BridgeLeve"
    } ],
    BridgeLv8: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3c83ceyF4JBE589zlk2n7UT", "BridgeLv8"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../BridgeLeve"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.cofon = {
                    add0: [ 1, 5, 6, 9 ],
                    add1: [ 0, 2, 9 ],
                    add2: [ 1, 3, 9, 10 ],
                    add3: [ 2, 4, 10 ],
                    add4: [ 3, 7, 8, 10 ],
                    add5: [ 0, 6, 9 ],
                    add6: [ 0, 5, 7, 9, 10 ],
                    add7: [ 4, 6, 8, 9, 10 ],
                    add8: [ 4, 7, 10 ],
                    add9: [ 0, 1, 2, 5, 6, 7, 10 ],
                    add10: [ 2, 3, 4, 6, 7, 8, 9 ]
                }, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.node.parent.getComponent(o.default).cofon = this.cofon;
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../BridgeLeve": "BridgeLeve"
    } ],
    BridgeLv9: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fd55b4Ax4BFAbfbntZ1vQhS", "BridgeLv9"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../BridgeLeve"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.cofon = {
                    add0: [ 1, 5 ],
                    add1: [ 0, 2, 5, 6 ],
                    add2: [ 1, 3, 5, 6, 7 ],
                    add3: [ 2, 4, 6, 7 ],
                    add4: [ 3, 7 ],
                    add5: [ 0, 1, 2, 6, 8 ],
                    add6: [ 1, 2, 3, 5, 7, 8 ],
                    add7: [ 2, 3, 4, 6, 8 ],
                    add8: [ 5, 6, 7 ]
                }, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.node.parent.getComponent(o.default).cofon = this.cofon;
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../BridgeLeve": "BridgeLeve"
    } ],
    BridgePlayer: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "78a37HS6cxDKKNWJe9P4PCi", "BridgePlayer"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("../../Managers/UserMgr"), c = e("../../Utils/Utils"), l = cc._decorator, d = l.ccclass, u = (l.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isFire = !1, t.selfSpine = null, t.isDie = !1, t.endPos = null, t.rig = null, 
                t.playerTween = null, t.isMove = !1, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.selfSpine = this.node.getComponent(sp.Skeleton), this.endPos = this.node.parent.getChildByName("endPos").position, 
                this.rig = this.node.getComponent(cc.RigidBody);
            }, t.prototype.onCollisionEnter = function(e) {
                if (!this.isFire) {
                    this.isFire = !0;
                    var t;
                    t = "wall" == e.node.name, i.default.Instance.dispatch_event(o.GConfiguration.BridgeEnd, t), 
                    a.default.Instance.play_effect("shaunwalkloop"), this.selfSpine.setAnimation(0, "walk", !0);
                }
                "water" == e.node.name && (this.node.stopAllActions(), this.selfSpine.setAnimation(0, "bieqi", !0), 
                i.default.Instance.dispatch_event(o.GConfiguration.BridgeStopMove, ""), this.isDie || (this.isDie = !0, 
                a.default.Instance.play_effect("cuowu"), c.Utils.showError(this.node), this.scheduleOnce(function() {
                    i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                }, 2))), "rota" == e.node.name && (this.isMove = !0), "zhongdian" == e.node.name && (a.default.Instance.play_effect("Bridgeeat"), 
                this.node.parent.getChildByName("endPos").getChildByName("zhongdian").active = !1), 
                "Die" == e.node.name && (this.node.stopAllActions(), null != this.playerTween && this.playerTween.stop());
            }, t.prototype.move = function() {
                var e = this;
                if (6 == s.UserMgr.instance().userInfo.BridgeLeve || 5 == s.UserMgr.instance().userInfo.BridgeLeve || 7 == s.UserMgr.instance().userInfo.BridgeLeve) this.playerTween = cc.tween(this.node).to(5, {
                    x: this.endPos.x
                }).delay(1).call(function() {
                    e.playerTween.stop(), e.selfSpine.setAnimation(0, "shengli_daqiao", !1), e.scheduleOnce(function() {
                        r.default.Instance.show_ui("Pop", "Success");
                    }, 1.5);
                }).start(); else {
                    var t = [], n = cc.moveTo(5, cc.v2(this.endPos.x, this.endPos.y));
                    t.push(n);
                    var o = cc.callFunc(function() {
                        e.selfSpine.setAnimation(0, "shengli_daqiao", !1), e.scheduleOnce(function() {
                            r.default.Instance.show_ui("Pop", "Success");
                        }, 1.5);
                    });
                    t.push(o), this.node.stopAllActions(), this.node.runAction(cc.sequence(t));
                }
            }, t.prototype.update = function() {
                this.isMove && (this.node.angle = 0);
            }, __decorate([ d ], t);
        }(cc.Component));
        n.default = u, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../../Utils/Utils": "Utils"
    } ],
    CarCheck: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8ce0buzUk5C7YnAHSay5by+", "CarCheck"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("./CarEndItem"), r = e("./CarLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.GameLogic = null, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                this.GameLogic = this.node.parent.getComponent(r.default);
            }, t.prototype.onCollisionEnter = function(e) {
                if ("CarBox" == e.node.name || "wall" == e.node.name) i.default.Instance.dispatch_event(o.GConfiguration.CarDrawErr, ""); else if ("End" == e.node.name) {
                    var t = e.node.getComponent(a.default).Carid;
                    i.default.Instance.dispatch_event(o.GConfiguration.CarDrawSuccess, t);
                }
            }, __decorate([ c ], t);
        }(cc.Component));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "./CarEndItem": "CarEndItem",
        "./CarLeve": "CarLeve"
    } ],
    CarEndItem: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a4d97cMe1FPAIsKXMq5lZm3", "CarEndItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/UIMgr"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.Carid = 1, t.tipText = null, t.colorConfig = {
                    "1index": "#e74a47",
                    "2index": "#3eb584",
                    "3index": "#fcce29",
                    "4index": "#7ae3df"
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                this.node.color = new cc.Color().fromHEX(this.colorConfig[this.Carid + "index"]), 
                this.tipText.color = new cc.Color().fromHEX(this.colorConfig[this.Carid + "index"]);
            }, __decorate([ r ], t.prototype, "Carid", void 0), __decorate([ r(cc.Node) ], t.prototype, "tipText", void 0), 
            __decorate([ a ], t);
        }(o.UICtrl);
        n.default = s, cc._RF.pop();
    }, {
        "../../Managers/UIMgr": "UIMgr"
    } ],
    CarItem: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "848595mLTNB/43GEtBIem2Z", "CarItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/UIMgr"), i = e("./CarLeve"), a = e("../../Config/GConfiguration"), r = e("../../Managers/EventMgr"), s = e("./CarEndItem"), c = e("../../Managers/SoundMgr"), l = cc._decorator, d = l.ccclass, u = l.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.CarId = 0, t.GameLogic = null, t.m_isDraw = !1, t.m_pathArray = [], t.m_linkNumber = 0, 
                t.isCheck = !1, t.m_isDie = !1, t.m_isLink = !1, t.colorConfig = {
                    "1index": "#ef8177",
                    "2index": "#98ed9a",
                    "3index": "#fdf991",
                    "4index": "#92f0ed"
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                cc.macro.ENABLE_WEBGL_ANTIALIAS = !0, this.m_pathNode = o.default.Instance.show_ui("River", "Mask", this.node.parent.getChildByName("allMask")).getComponent(cc.Graphics), 
                this.m_pathNode.lineWidth = 20, this.m_pathNode.strokeColor = new cc.Color().fromHEX(this.colorConfig[this.CarId + "index"]), 
                this.m_pathNode.fillColor = new cc.Color().fromHEX(this.colorConfig[this.CarId + "index"]), 
                this.GameLogic = this.node.parent.getComponent(i.default), this.node.on(cc.Node.EventType.TOUCH_START, this.onStartCheck, this), 
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchOut, this), 
                r.default.Instance.add_event_listenner(a.GConfiguration.CarDrawErr, this, this.onStopDraw), 
                r.default.Instance.add_event_listenner(a.GConfiguration.CarDrawSuccess, this, this.onDrawSuccess), 
                r.default.Instance.add_event_listenner(a.GConfiguration.CarMove, this, this.onMove);
            }, t.prototype.onMove = function() {
                var e = this;
                this.isCheck = !0;
                var t = this._calculationDis(this.node.getPosition(), this.m_pathArray[0]) / 500;
                cc.tween(this.node).to(t, {
                    position: cc.v3(this.m_pathArray[0])
                }).call(function() {
                    if (e.m_pathArray.length > 1) e.m_pathArray.shift(), e.onMove(); else {
                        if (e.m_isDie) return;
                        c.default.Instance.play_effect("CarComplete"), e.isCheck = !1, e.node.angle = 90, 
                        e.node.setPosition(e.m_linkNode.position), r.default.Instance.dispatch_event(a.GConfiguration.CarMoveFinish, ""), 
                        e.m_linkNode.getChildByName("caitiao_ske").active = !0, e.m_linkNode.getChildByName("xingxing_ske").active = !0;
                    }
                }).start();
            }, t.prototype._calculationDis = function(e, t) {
                return e.sub(t).mag();
            }, t.prototype.onDrawSuccess = function(e, t) {
                if (this.m_isDraw && !this.m_isLink) {
                    this.m_isLink = !0, this.m_isDraw = !1, this.node.off(cc.Node.EventType.TOUCH_START, this.onStartCheck, this), 
                    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchOut, this), 
                    t == this.CarId ? this.GameLogic.linkData(!0) : this.GameLogic.linkData(!1);
                    for (var n = 0; n < this.node.parent.getChildByName("EndParent").childrenCount; n++) {
                        var o = this.node.parent.getChildByName("EndParent").children[n];
                        o.getComponent(s.default).Carid == t && (this.m_linkNode = o);
                    }
                }
            }, t.prototype.onStopDraw = function() {
                this.m_isDraw && (this.m_pathArray = [], this.m_pathNode.clear(), this.m_isDraw = !1, 
                this.m_isLink = !1);
            }, t.prototype.onStartCheck = function(e) {
                this.m_pathArray = [], this.m_isDraw = !0;
                var t = this.GameLogic.node.convertToNodeSpaceAR(e.getLocation());
                this.m_pathArray.push(t), this.GameLogic.node.getChildByName("CheckBox").setPosition(t), 
                this.m_pathNode.moveTo(parseInt(t.x), parseInt(t.y)), r.default.Instance.dispatch_event(a.GConfiguration.CleanTips, "");
            }, t.prototype.onTouchMove = function(e) {
                if (this.m_isDraw) {
                    var t = this.GameLogic.node.convertToNodeSpaceAR(e.getLocation());
                    this.GameLogic.node.getChildByName("CheckBox").setPosition(t);
                    var n = this._calculationDis(this.m_pathArray[this.m_pathArray.length - 1], this.GameLogic.node.convertToNodeSpaceAR(e.getLocation()));
                    if (Math.abs(parseInt(t.x) - this.m_pathArray[this.m_pathArray.length - 1].x) < 5 && Math.abs(parseInt(t.y) - this.m_pathArray[this.m_pathArray.length - 1].y) < 5) return void console.log("skip point");
                    n > 7 && this.m_pathArray.push(t), this.m_pathNode.lineTo(parseInt(t.x), parseInt(t.y)), 
                    this.m_pathNode.stroke();
                }
            }, t.prototype.onTouchOut = function() {
                this.m_isDraw && (this.m_isDraw = !1, this.m_pathNode.clear());
            }, t.prototype.setCarRotation = function() {
                var e = 180 * Math.atan2(this.node.y - this.m_pathArray[0].y, this.node.x - this.m_pathArray[0].x) / Math.PI + 90;
                this.node.angle - e < 30 && this.node.angle - e > -30 ? this.m_TargetRotation = this.node.angle : this.m_TargetRotation = e, 
                this.node.angle = this.m_TargetRotation;
            }, t.prototype.onBeginContact = function(e, t, n) {
                "Car" != n.node.name.slice(0, n.node.name.length - 1) && "CarBox" != n.node.name || (cc.Tween.stopAllByTarget(this.node), 
                this.m_isDie = !0, this.m_pathArray = [], r.default.Instance.dispatch_event(a.GConfiguration.CarResult, this.node), 
                "CarBox" == n.node.name && r.default.Instance.dispatch_event(a.GConfiguration.CarResult, n.node), 
                this.node.getComponent(cc.RigidBody).angularVelocity = 200);
            }, t.prototype.update = function() {
                this.m_isDie || this.isCheck && this.setCarRotation();
            }, t.prototype.onDestroy = function() {
                r.default.Instance.remove_event_listenner(a.GConfiguration.CarDrawErr, this, this.onStopDraw), 
                r.default.Instance.remove_event_listenner(a.GConfiguration.CarDrawSuccess, this, this.onDrawSuccess), 
                r.default.Instance.remove_event_listenner(a.GConfiguration.CarMove, this, this.onMove);
            }, __decorate([ u ], t.prototype, "CarId", void 0), __decorate([ d ], t);
        }(o.UICtrl);
        n.default = h, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "./CarEndItem": "CarEndItem",
        "./CarLeve": "CarLeve"
    } ],
    CarLeve: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "53dd1EbI85BpYrL/4gMs7mB", "CarLeve"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("../../Utils/Utils"), c = cc._decorator, l = c.ccclass, d = c.property, u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.CarNumb = 0, t.m_completeNum = 0, t.m_LinkData = [], t.m_StopNum = 0, t.m_islisten = !1, 
                t.ColliderSp = [], t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.CarDrawSuccess, this, this.onDrawSuccess), 
                i.default.Instance.add_event_listenner(o.GConfiguration.CarMoveFinish, this, this.onCheck), 
                i.default.Instance.add_event_listenner(o.GConfiguration.CarResult, this, this.onCarResult), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips), 
                i.default.Instance.add_event_listenner(o.GConfiguration.CleanTips, this, this.cleanTips), 
                a.default.Instance.play_effect("CarStat"), this.initPhysics();
            }, t.prototype.initPhysics = function() {
                var e = new cc.Node();
                e.name = "wall", e.group = "Car";
                var t = function t(e, _t, n, o, i) {
                    var a = e.addComponent(cc.BoxCollider);
                    a.offset.x = _t, a.offset.y = n, a.size.width = o, a.size.height = i;
                };
                t(e, 0, -520, 2e3, 1), t(e, 0, 520, 2e3, 1), e.parent = this.node;
            }, t.prototype.showTips = function() {
                this.view.tips.active = !0;
            }, t.prototype.cleanTips = function() {
                this.node.getChildByName("tips").active && (this.node.getChildByName("tips").opacity = 100);
            }, t.prototype.onCarResult = function(e, t) {
                if (a.default.Instance.stop_effect(), a.default.Instance.play_effect("CarCollider"), 
                this.ColliderSp.push(t), this.m_islisten || (s.Utils.showError(this.node), this.scheduleOnce(function() {
                    i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                }, 1), this.m_islisten = !0), this.ColliderSp != [] && this.ColliderSp.length >= 2) {
                    var n, c, l = this.ColliderSp[0], d = this.ColliderSp[1];
                    n = l.x > d.x ? (l.x - d.x) / 2 + d.x : (d.x - l.x) / 2 + l.x, c = l.y > d.y ? (l.y - d.y) / 2 + d.y : (d.y - l.y) / 2 + l.y, 
                    r.default.Instance.show_ui("Car", "CarColliderDragon", this.node).setPosition(new cc.Vec2(n, c));
                }
            }, t.prototype.onDrawSuccess = function() {
                this.m_completeNum++, this.m_completeNum >= this.CarNumb && (a.default.Instance.play_needStopEffect("carRun"), 
                i.default.Instance.dispatch_event(o.GConfiguration.CarMove, ""));
            }, t.prototype.onCheck = function() {
                if (this.m_StopNum++, this.m_StopNum >= this.CarNumb) {
                    for (var e = 0; e < this.m_LinkData.length; e++) {
                        if (!this.m_LinkData[e]) return s.Utils.showError(this.node), void this.scheduleOnce(function() {
                            i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                        }, 1);
                    }
                    this.scheduleOnce(function() {
                        r.default.Instance.show_ui("Pop", "Success");
                    }, 1);
                }
            }, t.prototype.linkData = function(e) {
                this.m_LinkData.push(e);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.CarDrawSuccess, this, this.onDrawSuccess), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.CarMoveFinish, this, this.onCheck), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.CarResult, this, this.onCarResult), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.CleanTips, this, this.cleanTips);
            }, __decorate([ d ], t.prototype, "CarNumb", void 0), __decorate([ l ], t);
        }(r.UICtrl);
        n.default = u, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    Checkpoint: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f3138SLUddKwrQZbeWdY4Lp", "Checkpoint"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/GameMgr"), r = e("../../Managers/SoundMgr"), s = e("../../Managers/UIMgr"), c = e("../../Managers/UserMgr"), l = e("../Ad/AdComponent"), d = e("../Ad/AdData"), u = e("./Item"), h = cc._decorator, f = h.ccclass, p = h.property, g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.viewList = null, t.energyLabel = null, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.UpdateUserInfo, this, this._updateInfo), 
                this.energyLabel.string = c.UserMgr.instance().userInfo.energy + "";
                var e = new Map();
                e.set(a.GameType.ERASE, 24), e.set(a.GameType.MOVE, 22), e.set(a.GameType.SOLDIER, 21), 
                e.set(a.GameType.ROUND, o.GConfiguration.RounMaxLevel + 1), e.set(a.GameType.Snake, 21), 
                e.set(a.GameType.TOHIT, 21), e.set(a.GameType.RIVER, 14), e.set(a.GameType.Car, 15), 
                e.set(a.GameType.Dialect, 18), e.set(a.GameType.LineSoldier, o.GConfiguration.LineMaxLevel + 1), 
                e.set(a.GameType.Circular, o.GConfiguration.CircularMaxLevel + 1), e.set(a.GameType.Color, o.GConfiguration.ColorMaxLeve + 1), 
                e.set(a.GameType.Near, o.GConfiguration.NearMaxLeve + 1), e.set(a.GameType.Warp, o.GConfiguration.WarpMaxLeve + 1), 
                e.set(a.GameType.Rescue, o.GConfiguration.RescueMaxLeve + 1), e.set(a.GameType.WarpMan, o.GConfiguration.WarpManMaxLeve + 1), 
                e.set(a.GameType.Pig, o.GConfiguration.PigMaxLeve + 1), e.set(a.GameType.Maze, o.GConfiguration.MazeMaxLeve + 1), 
                e.set(a.GameType.Bridge, o.GConfiguration.BridgeMaxLeve + 1);
                for (var t = e.get(a.default.Instance.GameType), n = 1; n < t; n++) {
                    s.default.Instance.show_ui("Pop", "Item", this.viewList).getComponent(u.default).setId(n);
                }
                "tt" == d.AdData.platform && window.tt.reportAnalytics("startGame", {
                    form: "mode"
                }), "wx" == d.AdData.platform ? l.AdComponent.onShowGridAd(200, 600) : "oppo" == d.AdData.platform ? l.AdComponent.onShowBanner() : "vivo" == d.AdData.platform ? l.AdComponent.onShowBanner() : "Android" == d.AdData.platform && (this.node.getChildByName("AndroidEnergy").active = !0);
            }, t.prototype.AndroidAddEaengy = function() {
                l.AdComponent.onShowRewardedAd(this, function() {
                    c.UserMgr.instance().userInfo.energy += 5;
                });
            }, t.prototype.showTips = function() {
                r.default.Instance.play_effect("click1"), s.default.Instance.show_ui("Pop", "Tips");
            }, t.prototype.onBtnClose = function() {
                r.default.Instance.play_effect("click1"), s.default.Instance.show_ui("Scene", "HomeView"), 
                s.default.Instance.remove_ui("Checkpoint");
            }, t.prototype._updateInfo = function() {
                this.energyLabel.string = c.UserMgr.instance().userInfo.energy + "";
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.UpdateUserInfo, this, this._updateInfo), 
                "vivo" != d.AdData.platform && "oppo" != d.AdData.platform || l.AdComponent.onHideBanner();
            }, __decorate([ p(cc.Node) ], t.prototype, "viewList", void 0), __decorate([ p(cc.Label) ], t.prototype, "energyLabel", void 0), 
            __decorate([ f ], t);
        }(s.UICtrl);
        n.default = g, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/GameMgr": "GameMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../Ad/AdComponent": "AdComponent",
        "../Ad/AdData": "AdData",
        "./Item": "Item"
    } ],
    Check: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b3c14GX6+BPX5lvWU4D1Zit", "Check"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = cc._decorator, r = a.ccclass, s = (a.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.mStayCollider = [], t.isCollider = !1, t.waitIndex = 0, t.colliderStr = null, 
                t;
            }
            return __extends(t, e), t.prototype.onBeginContact = function(e, t, n) {
                var a = n.node.name;
                if ("add" == a.slice(0, 3)) {
                    if (0 == this.mStayCollider.length) return i.default.Instance.dispatch_event(o.GConfiguration.BridgeCollider, a), 
                    void this.mStayCollider.push(a);
                    for (var r = 0; r < this.mStayCollider.length; r++) {
                        if (this.mStayCollider[r] == a) return;
                        if (r == this.mStayCollider.length - 1 && this.mStayCollider[r] != a) return i.default.Instance.dispatch_event(o.GConfiguration.BridgeCollider, a), 
                        this.mStayCollider.push(a), void (this.mStayCollider.length >= 2 && (this.isCollider = !0));
                    }
                }
            }, t.prototype.onEndContact = function(e, t, n) {
                var a = n.node.name;
                if ("add" == a.slice(0, 3) && this.isCollider) {
                    if (0 == this.waitIndex) return this.colliderStr = a, void (this.waitIndex += 1);
                    if (this.waitIndex += 1, this.colliderStr != a && (this.waitIndex = 0), this.waitIndex >= this.mStayCollider.length) {
                        this.isCollider = !1;
                        var r = this.mStayCollider[1];
                        this.mStayCollider.splice(1, this.mStayCollider.length - 1), i.default.Instance.dispatch_event(o.GConfiguration.BridgeExit, r), 
                        this.waitIndex = 0;
                    }
                }
            }, __decorate([ r ], t);
        }(cc.Component));
        n.default = s, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr"
    } ],
    CircularAnimalItem: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "51ef1MiUEJDXLUrACR5yuv8", "CircularAnimalItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = cc._decorator, r = a.ccclass, s = (a.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.movePath = [], t.animalId = 0, t.isFirst = !1, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                var e = null;
                this.node.children.forEach(function(t) {
                    e = t;
                }), e.getComponent(dragonBones.ArmatureDisplay).playAnimation("walk", 0), this.onMove(), 
                i.default.Instance.add_event_listenner(o.GConfiguration.CircularDrawErr, this, function() {
                    cc.Tween.stopAll();
                });
            }, t.prototype.onMove = function() {
                var e = this, t = this._calculationDis(this.node.getPosition(), this.movePath[0]) / 500;
                cc.tween(this.node).to(t, {
                    position: cc.v3(this.movePath[0])
                }).call(function() {
                    e.movePath.length > 2 ? (1 == e.node.scaleX ? e.node.x > e.movePath[1].x ? e.node.scaleX = -1 : e.node.scaleX = 1 : e.node.x >= e.movePath[1].x ? e.node.scaleX = -1 : e.node.scaleX = 1, 
                    e.movePath.shift(), e.onMove()) : (e.isFirst && i.default.Instance.dispatch_event(o.GConfiguration.CircularMoveFinish, ""), 
                    e.node.destroy());
                }).start();
            }, t.prototype._calculationDis = function(e, t) {
                return e.sub(t).mag();
            }, t.prototype.onCollisionEnter = function(e) {
                e.node.name != this.node.name && "CheckBox" != e.node.name && "Animal" == e.node.name.slice(0, 6) && i.default.Instance.dispatch_event(o.GConfiguration.CircularDrawErr, "");
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.CircularDrawErr, this, function() {
                    cc.Tween.stopAll();
                });
            }, __decorate([ r ], t);
        }(cc.Component));
        n.default = s, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr"
    } ],
    CircularCheck: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "51fdb7K9QJA7ZzYIw62GKS0", "CircularCheck"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("./CircularEnd"), r = cc._decorator, s = r.ccclass, c = (r.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function(e) {
                if ("End" == e.node.name.slice(0, 3)) if (e.node.getComponent(a.default).isLink) ; else {
                    e.node.getComponent(a.default).isLink = !0;
                    var t = e.node.getComponent(a.default).CircularId;
                    i.default.Instance.dispatch_event(o.GConfiguration.CircularDrawSuccess, t);
                }
            }, __decorate([ s ], t);
        }(cc.Component));
        n.default = c, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "./CircularEnd": "CircularEnd"
    } ],
    CircularEnd: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c36b1IaMqBI8aOsxYQR/34M", "CircularEnd"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = o.property, r = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isLink = !1, t.CircularId = 0, t;
            }
            return __extends(t, e), __decorate([ a ], t.prototype, "CircularId", void 0), __decorate([ i ], t);
        }(cc.Component);
        n.default = r, cc._RF.pop();
    }, {} ],
    CircularItem: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5478frJuxJIMbUH657V8R6f", "CircularItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("./CircularAnimalItem"), s = e("./CircularMgr"), c = cc._decorator, l = c.ccclass, d = c.property, u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.CircularId = 0, t.GameLogic = null, t.isLink = !1, t.isLinkSuccess = !0, 
                t.m_isDraw = !1, t.m_pathArray = [], t.colorConfig = {
                    "1index": "#f6d477",
                    "2index": "#ccb1ef",
                    "3index": "#61b5fa",
                    "4index": "#f2a8a8"
                }, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                cc.macro.ENABLE_WEBGL_ANTIALIAS = !0, this.m_pathNode = a.default.Instance.show_ui("River", "Mask", this.node.parent.getChildByName("allMask")).getComponent(cc.Graphics), 
                this.m_pathNode.lineWidth = 20, this.m_pathNode.strokeColor = new cc.Color().fromHEX(this.colorConfig[this.CircularId + "index"]), 
                this.m_pathNode.fillColor = new cc.Color().fromHEX(this.colorConfig[this.CircularId + "index"]), 
                this.GameLogic = this.node.parent.getComponent(s.default), this.node.on(cc.Node.EventType.TOUCH_START, this.onStartCheck, this), 
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchOut, this), 
                i.default.Instance.add_event_listenner(o.GConfiguration.CircularDrawSuccess, this, this.onMove), 
                i.default.Instance.add_event_listenner(o.GConfiguration.CircularDrawErr, this, this.onStopGame);
            }, t.prototype.onStopGame = function() {
                this.unschedule(this.callback);
            }, t.prototype.callback = function() {
                var e = "Animal" + this.CircularId, t = a.default.Instance.show_ui("Circular", e, this.node.parent);
                t.getComponent(r.default).movePath = __spreadArrays(this.m_pathArray), t.position = this.m_pathArray[0];
            }, t.prototype.onDrawErr = function() {
                this.m_isDraw && (this.m_isDraw = !1, this.m_pathNode.clear());
            }, t.prototype.onMove = function(e, t) {
                var n = this;
                if (this.m_isDraw) {
                    this.m_isDraw = !1, this.isLink = !0, t != this.CircularId && (this.isLinkSuccess = !1), 
                    this.node.off(cc.Node.EventType.TOUCH_START, this.onStartCheck, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), 
                    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchOut, this);
                    var o = "Animal" + this.CircularId;
                    this.scheduleOnce(function() {
                        var e = a.default.Instance.show_ui("Circular", o, n.node.parent);
                        e.getComponent(r.default).movePath = __spreadArrays(n.m_pathArray), e.position = n.m_pathArray[0], 
                        e.getComponent(r.default).isFirst = !0, n.schedule(n.callback, 1);
                    }, 1);
                }
            }, t.prototype.onStartCheck = function(e) {
                this.m_pathArray = [], this.m_isDraw = !0;
                var t = this.GameLogic.node.convertToNodeSpaceAR(e.getLocation());
                this.m_pathArray.push(t), this.GameLogic.node.getChildByName("CheckBox").setPosition(t), 
                this.m_pathNode.moveTo(parseInt(t.x), parseInt(t.y)), i.default.Instance.dispatch_event(o.GConfiguration.CleanTips, "");
            }, t.prototype.onTouchMove = function(e) {
                if (this.m_isDraw) {
                    var t = this.GameLogic.node.convertToNodeSpaceAR(e.getLocation());
                    this.GameLogic.node.getChildByName("CheckBox").setPosition(t);
                    var n = this._calculationDis(this.m_pathArray[this.m_pathArray.length - 1], this.GameLogic.node.convertToNodeSpaceAR(e.getLocation()));
                    if (Math.abs(parseInt(t.x) - this.m_pathArray[this.m_pathArray.length - 1].x) < 5 && Math.abs(parseInt(t.y) - this.m_pathArray[this.m_pathArray.length - 1].y) < 5) return void console.log("skip point");
                    n > 7 && this.m_pathArray.push(t), this.m_pathNode.lineTo(parseInt(t.x), parseInt(t.y)), 
                    this.m_pathNode.stroke();
                }
            }, t.prototype._calculationDis = function(e, t) {
                return e.sub(t).mag();
            }, t.prototype.onTouchOut = function() {
                this.onDrawErr();
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.CircularDrawSuccess, this, this.onMove);
            }, __decorate([ d ], t.prototype, "CircularId", void 0), __decorate([ l ], t);
        }(cc.Component);
        n.default = u, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "./CircularAnimalItem": "CircularAnimalItem",
        "./CircularMgr": "CircularMgr"
    } ],
    CircularMgr: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3d8d24E60hG8KcqouMFJfW+", "CircularMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = e("./CircularItem"), c = cc._decorator, l = c.ccclass, d = c.property, u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isDie = !1, t.isSuccess = !1, t.Circular = [], t.m_isSuccessNum = 0, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                this.node.children.forEach(function(t) {
                    "Animal" == t.name.slice(0, 6) && e.Circular.push(t);
                }), i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips), 
                i.default.Instance.add_event_listenner(o.GConfiguration.CleanTips, this, this.cleanTips), 
                i.default.Instance.add_event_listenner(o.GConfiguration.CircularDrawErr, this, this.onUpdateGame), 
                i.default.Instance.add_event_listenner(o.GConfiguration.CircularMoveFinish, this, this.onCheck);
            }, t.prototype.initPhysics = function() {
                var e = new cc.Node();
                e.name = "wall", e.group = "Cirular";
                var t = function t(e, _t2, n, o, i) {
                    var a = e.addComponent(cc.BoxCollider);
                    a.offset.x = _t2, a.offset.y = n, a.size.width = o, a.size.height = i;
                };
                t(e, 0, -520, 2e3, 1), t(e, 0, 520, 2e3, 1), e.parent = this.node;
            }, t.prototype.showTips = function() {
                this.view.tips.active = !0;
            }, t.prototype.cleanTips = function() {
                this.node.getChildByName("tips").active && (this.node.getChildByName("tips").opacity = 100);
            }, t.prototype.onUpdateGame = function() {
                this.isDie || this.isSuccess || (r.Utils.showError(this.node), this.scheduleOnce(function() {
                    i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                }, 1), this.isDie = !0);
            }, t.prototype.onCheck = function() {
                var e = this;
                this.m_isSuccessNum++, this.m_isSuccessNum >= this.Circular.length && !this.isDie && !this.isSuccess && (this.Circular.forEach(function(t) {
                    t.getComponent(s.default).isLinkSuccess || e.onUpdateGame();
                }), this.scheduleOnce(function() {
                    a.default.Instance.show_ui("Pop", "Success"), e.isSuccess = !0;
                }, 2));
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.CleanTips, this, this.cleanTips), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.CircularDrawErr, this, this.onUpdateGame), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.CircularMoveFinish, this, this.onCheck);
            }, __decorate([ d ], t.prototype, "Circular", void 0), __decorate([ l ], t);
        }(a.UICtrl);
        n.default = u, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils",
        "./CircularItem": "CircularItem"
    } ],
    CleanBase: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d623eHQmuFCA4Qp3LJsAJK/", "CleanBase"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = cc._decorator, r = a.ccclass, s = (a.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.view = {}, t.mask = null, t.lock = !1, t;
            }
            return __extends(t, e), t.prototype.load_all_object = function(e, t) {
                for (var n = 0; n < e.childrenCount; n++) {
                    this.view[t + e.children[n].name] = e.children[n], this.load_all_object(e.children[n], t + e.children[n].name + "/");
                }
            }, t.prototype.onLoad = function() {
                this.view = {}, this.load_all_object(this.node, "");
            }, t.prototype.onEventClean = function(e) {
                var t = this;
                this.mask = this.view.mask.getComponent(cc.Mask), e.on(cc.Node.EventType.TOUCH_START, function(n) {
                    if (!t.lock) {
                        var o = n.touch.getLocation();
                        o = t.mask.node.convertToNodeSpaceAR(o), e.getChildByName("Clean").setPosition(o), 
                        t._addCircle(o);
                    }
                }), e.on(cc.Node.EventType.TOUCH_MOVE, function(n) {
                    if (!t.lock) {
                        var o = n.touch.getLocation();
                        o = t.mask.node.convertToNodeSpaceAR(o), e.getChildByName("Clean").setPosition(o), 
                        t._addCircle(o);
                    }
                }), e.on(cc.Node.EventType.TOUCH_END, function() {
                    if (!t.lock) {
                        var n = t.compute();
                        n.count < 2 && n.noCount < 20 ? (t.lock = !0, i.default.Instance.dispatch_event(o.GConfiguration.Complete, "")) : t.clean(), 
                        t.mask._graphics.clear(), e.getChildByName("Clean").setPosition(cc.v2(-1e3, 0));
                    }
                });
            }, t.prototype.clean = function() {
                for (var e = 0; e < this.view.allow.childrenCount; e++) {
                    this.view.allow.children[e].active = !0;
                }
                for (e = 0; e < this.view.noallow.childrenCount; e++) {
                    this.view.noallow.children[e].active = !0;
                }
            }, t.prototype.compute = function() {
                for (var e = 0, t = 0, n = 0; n < this.view.allow.childrenCount; n++) {
                    this.view.allow.children[n].active && e++;
                }
                for (n = 0; n < this.view.noallow.childrenCount; n++) {
                    this.view.noallow.children[n].active || t++;
                }
                return {
                    count: e,
                    noCount: t
                };
            }, t.prototype.onDestroy = function() {}, t.prototype._addCircle = function(e) {
                this.mask._graphics.lineWidth = 2, this.mask._graphics.strokeColor = cc.color(255, 255, 255), 
                this.mask._graphics.fillColor = cc.color(255, 255, 255), this.mask._graphics.circle(e.x, e.y, 60), 
                this.mask._graphics.fill(), this.mask._graphics.stroke();
            }, __decorate([ r ], t);
        }(cc.Component));
        n.default = s, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr"
    } ],
    Clean: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2c7afXNQqpI5ZlZ7WzFRRVt", "Clean"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function(e) {
                e.node.active = !1;
            }, __decorate([ i ], t);
        }(cc.Component));
        n.default = a, cc._RF.pop();
    }, {} ],
    ColorErase: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "09afdir9wdKkLmJbKA3dbUm", "ColorErase"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = cc._decorator, s = r.ccclass, c = (r.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.view = {}, t.mask = null, t.lock = !1, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                var e = this;
                this.mask = this.node.parent.getChildByName("mask").getComponent(cc.Mask), this.node.on(cc.Node.EventType.TOUCH_START, function(t) {
                    var n = t.touch.getLocation();
                    n = e.mask.node.convertToNodeSpaceAR(n), e._addCircle(n);
                }), this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    var n = t.touch.getLocation();
                    n = e.mask.node.convertToNodeSpaceAR(n), e._addCircle(n);
                }), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
                    e.compute(), e.mask._graphics.clear();
                });
            }, t.prototype._addCircle = function(e) {
                this.mask._graphics.lineWidth = 2, this.mask._graphics.strokeColor = cc.color(255, 255, 255), 
                this.mask._graphics.fillColor = cc.color(255, 255, 255), this.mask._graphics.circle(e.x, e.y, 60), 
                this.mask._graphics.fill(), this.mask._graphics.stroke();
            }, t.prototype.compute = function() {
                i.default.Instance.dispatch_event(o.GConfiguration.ColorErase, ""), this.mask.node.destroy(), 
                this.node.off(cc.Node.EventType.TOUCH_START), this.node.off(cc.Node.EventType.TOUCH_MOVE), 
                this.node.off(cc.Node.EventType.TOUCH_END);
            }, t.prototype.onDestroy = function() {}, __decorate([ s ], t);
        }(a.UICtrl));
        n.default = c, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr"
    } ],
    ColorLeve: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "dd8fe4N8nVEroU0Ifn5lVri", "ColorLeve"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("../../Managers/UserMgr"), c = e("../../Utils/Utils"), l = cc._decorator, d = l.ccclass, u = l.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.ColorBlockNum = 0, t.isErase = !1, t.tipsFrame = null, t.leveData = {}, 
                t.nowBlockColor = {}, t.Colors = {
                    "1Co": "#fe4e3f",
                    "2Co": "#fde32c",
                    "3Co": "#84fa49",
                    "4Co": "#54bcfc",
                    "5Co": "#f749f7",
                    "6Co": "#f9b01f"
                }, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips);
            }, t.prototype.showTips = function() {
                o.GConfiguration.LevelIsTips = !0;
                var e = r.default.Instance.show_ui("Color", "ColorTips", this.node);
                e.getChildByName("node").getChildByName("t_tishi").getChildByName("guohetishi").getComponent(cc.Sprite).spriteFrame = this.tipsFrame;
                var t = e.getChildByName("node").getChildByName("Hand").getComponent(cc.Label);
                4 == s.UserMgr._instance.userInfo.ColorLeve || 9 == s.UserMgr._instance.userInfo.ColorLeve ? t.string = "中间的图形可以拖走" : 5 == s.UserMgr._instance.userInfo.ColorLeve ? t.string = "左侧横线可以擦除" : 6 == s.UserMgr._instance.userInfo.ColorLeve || 10 == s.UserMgr._instance.userInfo.ColorLeve || 11 == s.UserMgr._instance.userInfo.ColorLeve || 14 == s.UserMgr._instance.userInfo.ColorLeve ? t.string = "中间区域可以涂两次颜色" : 12 == s.UserMgr._instance.userInfo.ColorLeve ? t.string = "左边竖条型可以涂两次颜色" : t.string = "";
            }, t.prototype.changeTipsFrame = function() {}, t.prototype.checkNear = function(e, t) {
                var n = this;
                this.scheduleOnce(function() {
                    var e = t, l = t.slice(0, 1), d = t.slice(e.length - 1, e.length);
                    6 == s.UserMgr._instance.userInfo.ColorLeve || 10 == s.UserMgr._instance.userInfo.ColorLeve || 11 == s.UserMgr._instance.userInfo.ColorLeve || 12 == s.UserMgr._instance.userInfo.ColorLeve || 14 == s.UserMgr._instance.userInfo.ColorLeve ? ("4" == l && 0 != n.nowBlockColor[l] && 3 != n.nowBlockColor[l] && 5 != n.nowBlockColor[l] && 6 != n.nowBlockColor[l] && ("1" == n.nowBlockColor[l + "Color"] && "2" == d || "2" == n.nowBlockColor[l + "Color"] && "1" == d ? d = 6 : "1" == n.nowBlockColor[l + "Color"] && "4" == d || "4" == n.nowBlockColor[l + "Color"] && "1" == d ? d = 5 : ("2" == n.nowBlockColor[l + "Color"] && "4" == d || "4" == n.nowBlockColor[l + "Color"] && "2" == d) && (d = 3)), 
                    n.node.getChildByName("Block").children.forEach(function(e) {
                        e.name == l && (e.color = new cc.Color().fromHEX(n.Colors[d + "Co"]), n.nowBlockColor[l + "Color"] = d);
                    }), n.nowBlockColor[l + "Color"] = d) : 5 != s.UserMgr._instance.userInfo.ColorLeve || !n.isErase || "1" != l && "2" != l ? n.node.getChildByName("Block").children.forEach(function(e) {
                        e.name == l && (e.color = new cc.Color().fromHEX(n.Colors[d + "Co"]), n.nowBlockColor[l + "Color"] = d);
                    }) : n.node.getChildByName("Block").children.forEach(function(e) {
                        "1" != e.name && "2" != e.name || (e.color = new cc.Color().fromHEX(n.Colors[d + "Co"]), 
                        n.nowBlockColor[e.name + "Color"] = d);
                    });
                    for (var u = n.leveData[l + "Block"], h = 0; h < u.length; h++) {
                        if (n.nowBlockColor[l + "Color"] == n.nowBlockColor[u[h] + "Color"]) return a.default.Instance.play_effect("cuowu"), 
                        c.Utils.showError(n.node), void n.scheduleOnce(function() {
                            i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                        }, 1);
                        if (h + 1 == u.length) for (var f = 0; f < n.ColorBlockNum; f++) {
                            if (0 == n.nowBlockColor[f + 1 + "Color"]) return;
                            f + 1 == n.ColorBlockNum && n.scheduleOnce(function() {
                                r.default.Instance.show_ui("Pop", "Success");
                            }, 1);
                        }
                    }
                }, .1);
            }, t.prototype.updataEraseColor = function() {
                this.node.getChildByName("Block").children.forEach(function(e) {
                    "1" != e.name && "2" != e.name || (e.color = new cc.Color().fromHEX("#FFFFFF"));
                }), this.isErase = !0;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips);
            }, __decorate([ u ], t.prototype, "ColorBlockNum", void 0), __decorate([ u(cc.SpriteFrame) ], t.prototype, "tipsFrame", void 0), 
            __decorate([ d ], t);
        }(r.UICtrl);
        n.default = h, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../../Utils/Utils": "Utils"
    } ],
    ColorLv10: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a5d085XRfhMMK1P9hcqjzaD", "ColorLv10"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = e("../ColorLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nowColor = "", t.leveData = {
                    "1Block": [ 4 ],
                    "2Block": [ 4 ],
                    "3Block": [ 4 ],
                    "4Block": [ 1, 2, 3, 5 ]
                }, t.nowBlockColor = {
                    "1Color": 0,
                    "2Color": 0,
                    "3Color": 0,
                    "4Color": 0
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, t.prototype.checkNear = function() {
                this.node.parent.getComponent(r.default).leveData = this.leveData, this.node.parent.getComponent(r.default).nowBlockColor = this.nowBlockColor;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorLv11: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fe3b3lpAixCBrCcVE8+Dzeq", "ColorLv11"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = e("../ColorLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nowColor = "", t.leveData = {
                    "1Block": [ 2, 3, 4 ],
                    "2Block": [ 1, 3, 4 ],
                    "3Block": [ 1, 2, 4 ],
                    "4Block": [ 1, 2, 3 ]
                }, t.nowBlockColor = {
                    "1Color": 0,
                    "2Color": 0,
                    "3Color": 0,
                    "4Color": 0
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, t.prototype.checkNear = function() {
                this.node.parent.getComponent(r.default).leveData = this.leveData, this.node.parent.getComponent(r.default).nowBlockColor = this.nowBlockColor;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorLv12: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e44d5RtYLtGv6CFDlXV9ZBq", "ColorLv12"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = e("../ColorLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nowColor = "", t.leveData = {
                    "1Block": [ 2, 4 ],
                    "2Block": [ 1, 4 ],
                    "4Block": [ 1, 2 ]
                }, t.nowBlockColor = {
                    "1Color": 0,
                    "2Color": 0,
                    "4Color": 0
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, t.prototype.checkNear = function() {
                this.node.parent.getComponent(r.default).leveData = this.leveData, this.node.parent.getComponent(r.default).nowBlockColor = this.nowBlockColor;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorLv13: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "446f3DMTkNHdYG8GSmt9F/R", "ColorLv13"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = e("../ColorLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nowColor = "", t.leveData = {
                    "1Block": [ 2, 4, 6 ],
                    "2Block": [ 1, 3, 6 ],
                    "3Block": [ 1, 2 ],
                    "4Block": [ 1, 5, 6 ],
                    "5Block": [ 1, 4 ],
                    "6Block": [ 1, 2, 4 ]
                }, t.nowBlockColor = {
                    "1Color": 0,
                    "2Color": 0,
                    "3Color": 0,
                    "4Color": 0,
                    "5Color": 0,
                    "6Color": 0
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, t.prototype.checkNear = function() {
                this.node.parent.getComponent(r.default).leveData = this.leveData, this.node.parent.getComponent(r.default).nowBlockColor = this.nowBlockColor;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorLv14: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e6d05iwC3JC4LIXOpzzEFWy", "ColorLv14"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = e("../ColorLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nowColor = "", t.leveData = {
                    "1Block": [ 2, 8, 4 ],
                    "2Block": [ 1, 3, 4 ],
                    "3Block": [ 2, 4, 9 ],
                    "4Block": [ 1, 2, 3, 5, 6, 7, 8, 9 ],
                    "5Block": [ 4, 6, 9 ],
                    "6Block": [ 5, 7, 4 ],
                    "7Block": [ 6, 8, 4 ],
                    "8Block": [ 7, 1, 4 ],
                    "9Block": [ 3, 4, 5 ]
                }, t.nowBlockColor = {
                    "1Color": 0,
                    "2Color": 0,
                    "3Color": 0,
                    "4Color": 0,
                    "5Color": 0,
                    "6Color": 0,
                    "7Color": 0,
                    "8Color": 0,
                    "9Color": 0
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, t.prototype.checkNear = function() {
                this.node.parent.getComponent(r.default).leveData = this.leveData, this.node.parent.getComponent(r.default).nowBlockColor = this.nowBlockColor;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorLv1: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "28c34XJ0mlObr2U7heg54g7", "ColorLv1"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = e("../ColorLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nowColor = "", t.leveData = {
                    "1Block": [ 2, 3 ],
                    "2Block": [ 1, 3, 4 ],
                    "3Block": [ 1, 2, 4 ],
                    "4Block": [ 2, 3 ]
                }, t.nowBlockColor = {
                    "1Color": 0,
                    "2Color": 0,
                    "3Color": 0,
                    "4Color": 0
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, t.prototype.checkNear = function() {
                this.node.parent.getComponent(r.default).leveData = this.leveData, this.node.parent.getComponent(r.default).nowBlockColor = this.nowBlockColor;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorLv2: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "10cb0hkYaBJ7KR2mNQfcj/0", "ColorLv2"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = e("../ColorLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nowColor = "", t.leveData = {
                    "1Block": [ 2, 3, 4 ],
                    "2Block": [ 1, 4, 5 ],
                    "3Block": [ 1, 4 ],
                    "4Block": [ 1, 2, 3, 5 ],
                    "5Block": [ 2, 4 ]
                }, t.nowBlockColor = {
                    "1Color": 0,
                    "2Color": 0,
                    "3Color": 0,
                    "4Color": 0,
                    "5Color": 0
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, t.prototype.checkNear = function() {
                this.node.parent.getComponent(r.default).leveData = this.leveData, this.node.parent.getComponent(r.default).nowBlockColor = this.nowBlockColor;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorLv3: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "27ccdG1QMdFZYivpDdBIUL6", "ColorLv3"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = e("../ColorLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nowColor = "", t.leveData = {
                    "1Block": [ 3, 4, 5 ],
                    "2Block": [ 3, 4, 5 ],
                    "3Block": [ 1, 2, 5 ],
                    "4Block": [ 1, 2, 5 ],
                    "5Block": [ 1, 2, 3, 4 ]
                }, t.nowBlockColor = {
                    "1Color": 0,
                    "2Color": 0,
                    "3Color": 0,
                    "4Color": 0,
                    "5Color": 0
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, t.prototype.checkNear = function() {
                this.node.parent.getComponent(r.default).leveData = this.leveData, this.node.parent.getComponent(r.default).nowBlockColor = this.nowBlockColor;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorLv4: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f769eSV2N9FM78D5ae8nATO", "ColorLv4"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = e("../ColorLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nowColor = "", t.leveData = {
                    "1Block": [ 3, 4, 5 ],
                    "2Block": [ 3, 4, 5 ],
                    "3Block": [ 1, 2, 5 ],
                    "4Block": [ 1, 2, 5 ],
                    "5Block": [ 1, 2, 3, 4 ]
                }, t.nowBlockColor = {
                    "1Color": 0,
                    "2Color": 0,
                    "3Color": 0,
                    "4Color": 0,
                    "5Color": 0
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorShift, this, this.shiftNode);
            }, t.prototype.checkNear = function() {
                this.node.parent.getComponent(r.default).leveData = this.leveData, this.node.parent.getComponent(r.default).nowBlockColor = this.nowBlockColor;
            }, t.prototype.shiftNode = function() {
                this.leveData = {
                    "1Block": [ 3, 4 ],
                    "2Block": [ 3, 4 ],
                    "3Block": [ 1, 2 ],
                    "4Block": [ 1, 2 ],
                    "5Block": []
                }, this.nowBlockColor["5Color"] = 1;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorShift, this, this.shiftNode), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorLv5: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0ce22yBdzxL0rZtgrlHK9H9", "ColorLv5"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = e("../ColorLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nowColor = "", t.leveData = {
                    "1Block": [ 2, 3, 4 ],
                    "2Block": [ 1, 3, 4 ],
                    "3Block": [ 1, 2, 4 ],
                    "4Block": [ 1, 2, 3 ]
                }, t.nowBlockColor = {
                    "1Color": 0,
                    "2Color": 0,
                    "3Color": 0,
                    "4Color": 0
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorErase, this, this.onChange);
            }, t.prototype.checkNear = function() {
                this.node.parent.getComponent(r.default).leveData = this.leveData, this.node.parent.getComponent(r.default).nowBlockColor = this.nowBlockColor;
            }, t.prototype.onChange = function() {
                this.leveData = {
                    "1Block": [ 3, 4 ],
                    "2Block": [ 3, 4 ],
                    "3Block": [ 1, 2, 4 ],
                    "4Block": [ 1, 2, 3 ]
                }, this.nowBlockColor["1Color"] = 0, this.nowBlockColor["2Color"] = 0, this.node.parent.getComponent(r.default).updataEraseColor();
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorErase, this, this.onChange);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorLv6: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2755eoXa31EMI0pPq+WrDHT", "ColorLv6"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = e("../ColorLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nowColor = "", t.leveData = {
                    "1Block": [ 2, 3, 4 ],
                    "2Block": [ 1, 3, 4 ],
                    "3Block": [ 1, 2, 4 ],
                    "4Block": [ 1, 2, 3 ]
                }, t.nowBlockColor = {
                    "1Color": 0,
                    "2Color": 0,
                    "3Color": 0,
                    "4Color": 0
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, t.prototype.checkNear = function() {
                this.node.parent.getComponent(r.default).leveData = this.leveData, this.node.parent.getComponent(r.default).nowBlockColor = this.nowBlockColor;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorLv7: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e905bmMErVK+puumBwq8tht", "ColorLv7"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = e("../ColorLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nowColor = "", t.leveData = {
                    "1Block": [ 4 ],
                    "2Block": [ 4 ],
                    "3Block": [ 4 ],
                    "4Block": [ 1, 2, 3 ]
                }, t.nowBlockColor = {
                    "1Color": 0,
                    "2Color": 0,
                    "3Color": 0,
                    "4Color": 0
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, t.prototype.checkNear = function() {
                this.node.parent.getComponent(r.default).leveData = this.leveData, this.node.parent.getComponent(r.default).nowBlockColor = this.nowBlockColor;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorLv8: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d2a21TkU7BJZbnQakiQO9TT", "ColorLv8"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = e("../ColorLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nowColor = "", t.leveData = {
                    "1Block": [ 3, 4 ],
                    "2Block": [ 3, 4 ],
                    "3Block": [ 1, 2 ],
                    "4Block": [ 1, 2 ]
                }, t.nowBlockColor = {
                    "1Color": 0,
                    "2Color": 0,
                    "3Color": 0,
                    "4Color": 0
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, t.prototype.checkNear = function() {
                this.node.parent.getComponent(r.default).leveData = this.leveData, this.node.parent.getComponent(r.default).nowBlockColor = this.nowBlockColor;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorLv9: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "cd9c3PaEzdGwqO3fR0+bWf7", "ColorLv9"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../../../Managers/UIMgr"), r = e("../ColorLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nowColor = "", t.leveData = {
                    "1Block": [ 2, 3, 5 ],
                    "2Block": [ 1, 4, 5 ],
                    "3Block": [ 1, 4, 5 ],
                    "4Block": [ 2, 3, 5 ],
                    "5Block": [ 2, 3, 1, 4 ]
                }, t.nowBlockColor = {
                    "1Color": 0,
                    "2Color": 0,
                    "3Color": 0,
                    "4Color": 0,
                    "5Color": 0
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ColorShift, this, this.shiftNode);
            }, t.prototype.checkNear = function() {
                this.node.parent.getComponent(r.default).leveData = this.leveData, this.node.parent.getComponent(r.default).nowBlockColor = this.nowBlockColor;
            }, t.prototype.shiftNode = function() {
                this.leveData = {
                    "1Block": [ 2, 3 ],
                    "2Block": [ 1, 4 ],
                    "3Block": [ 1, 4 ],
                    "4Block": [ 2, 3 ],
                    "5Block": []
                }, this.nowBlockColor["5Color"] = 1;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorCheck, this, this.checkNear), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.ColorShift, this, this.shiftNode);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../../../Managers/UIMgr": "UIMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorMove: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8c5c6STmFFL35CRbadh0dTR", "ColorMove"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../../../Managers/EventMgr"), a = e("../ColorLeve"), r = cc._decorator, s = r.ccclass, c = (r.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.GameLogic = null, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.GameLogic = this.node.parent.parent.getComponent(a.default), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onColorMove, this), 
                this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchUp, this);
            }, t.prototype.onColorMove = function(e) {
                var t = this.GameLogic.node.convertToNodeSpaceAR(e.getLocation());
                this.node.setPosition(t);
            }, t.prototype.onTouchUp = function() {
                var e = this;
                i.default.Instance.dispatch_event(o.GConfiguration.ColorShift, ""), cc.tween(this.node).to(2, {
                    opacity: 0
                }).call(function() {
                    e.node.destroy();
                }).start();
            }, __decorate([ s ], t);
        }(cc.Component));
        n.default = c, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../../../Managers/EventMgr": "EventMgr",
        "../ColorLeve": "ColorLeve"
    } ],
    ColorStart: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "cdaa8m4WQFBTJ1WZd8gdgv2", "ColorStart"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("./ColorLeve"), r = cc._decorator, s = r.ccclass, c = (r.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.GameLogic = null, t.m_ColloderNodeName = [], t.m_StartPos = null, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.GameLogic = this.node.parent.parent.getComponent(a.default), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onColorMove, this), 
                this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchUp, this), this.m_StartPos = this.node.position;
            }, t.prototype.onColorMove = function(e) {
                var t = this.GameLogic.node.convertToNodeSpaceAR(e.getLocation());
                this.node.setPosition(t);
            }, t.prototype.onTouchUp = function() {
                if (this.m_ColloderNodeName.length > 0) {
                    var e = this.m_ColloderNodeName.slice(this.m_ColloderNodeName.length - 1, this.m_ColloderNodeName.length) + this.node.name;
                    i.default.Instance.dispatch_event(o.GConfiguration.ColorCheck, e);
                }
                this.node.setPosition(this.m_StartPos);
            }, t.prototype.onCollisionStay = function(e) {
                if (this.m_ColloderNodeName.length <= 0) this.m_ColloderNodeName.push(e.name); else for (var t = 0; t < this.m_ColloderNodeName.length; t++) {
                    if (this.m_ColloderNodeName[t] == e.name) return;
                    t == this.m_ColloderNodeName.length - 1 && this.m_ColloderNodeName.push(e.name);
                }
            }, t.prototype.onCollisionExit = function(e) {
                var t = this;
                if (this.m_ColloderNodeName.length > 0) {
                    if (1 == this.m_ColloderNodeName.length) return void (this.m_ColloderNodeName = []);
                    this.m_ColloderNodeName.forEach(function(n) {
                        if (n == e.name) {
                            var o = t.m_ColloderNodeName.indexOf(n);
                            t.m_ColloderNodeName.splice(o, 1);
                        }
                    });
                }
            }, t.prototype.onDestroy = function() {}, __decorate([ s ], t);
        }(cc.Component));
        n.default = c, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "./ColorLeve": "ColorLeve"
    } ],
    ContentAdapter: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6df5aR8JN1CqLp4tZIPs4MR", "ContentAdapter"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                var e = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height), t = this.node.width * e, n = this.node.height * e;
                this.node.width = this.node.width * (cc.view.getCanvasSize().width / t), this.node.height = this.node.height * (cc.view.getCanvasSize().height / n);
            }, __decorate([ i ], t);
        }(cc.Component));
        n.default = a, cc._RF.pop();
    }, {} ],
    CorpseColl: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "38f79J+9/VM/71ehhzkIwk/", "CorpseColl"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = cc._decorator, c = s.ccclass, l = s.property, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.index = 1, t;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
                if ("Corpse" != e.node.group) {
                    a.default.Instance.play_effect("posui"), i.default.Instance.dispatch_event(o.GConfiguration.Corpse, ""), 
                    t.node.active = !1;
                    var n = r.default.Instance.show_ui("ToHit", "Ren" + this.index, t.node.parent);
                    n.setPosition(t.node.getPosition()), n.angle = t.node.angle, n.active = !0, n.children.forEach(function(e) {
                        var t = e.getComponent(cc.RigidBody);
                        t.applyLinearImpulse(cc.v2(400 * Math.random() - 200, 200 * Math.random() + 100), t.getWorldCenter(), !0);
                    });
                }
            }, t.prototype.onBeginContact = function(e, t, n) {
                "PropNode" == n.node.name && a.default.Instance.play_effect("colider");
            }, __decorate([ l ], t.prototype, "index", void 0), __decorate([ c ], t);
        }(cc.Component);
        n.default = d, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr"
    } ],
    DataConfig: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "38e579hq65Pn7xcSsPaZlf8", "DataConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.leftButtomStatPos = n.tiledSize = n.tableData = void 0, n.tableData = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ], 
        n.tiledSize = cc.size(42, 42), n.leftButtomStatPos = cc.v2(-337, -332), cc._RF.pop();
    }, {} ],
    DialectCheck: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bdce7Qtf6xMMqkDj8WgEJ4H", "DialectCheck"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("./DialectLeve"), r = e("./DialectObj"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.GameLogic = null, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                this.GameLogic = this.node.parent.getComponent(a.default);
            }, t.prototype.onCollisionEnter = function(e) {
                if ("Seaweed" == e.node.name || "qiang" == e.node.name) i.default.Instance.dispatch_event(o.GConfiguration.DrawStatus, ""); else {
                    var t = e.node.getComponent(r.default);
                    t.isFrom || t.isEnable || (t.isEnable = !0, this.GameLogic.end = t, i.default.Instance.dispatch_event(o.GConfiguration.DrawOk, ""));
                }
            }, __decorate([ c ], t);
        }(cc.Component));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "./DialectLeve": "DialectLeve",
        "./DialectObj": "DialectObj"
    } ],
    DialectLeve: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a222b+CKNxAna9HF72WiU98", "DialectLeve"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.animalLogic = [], t.from = null, t.end = null, t.isOpen = !1, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.DrawOk, this, this.drawOk), 
                i.default.Instance.add_event_listenner(o.GConfiguration.DrawErr, this, this.moveErr), 
                i.default.Instance.add_event_listenner(o.GConfiguration.DrawCheck, this, this.checkEnd), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips), 
                i.default.Instance.add_event_listenner(o.GConfiguration.CleanTips, this, this.cleanTips), 
                this.initPhysics(), this.node.getChildByName("bg").getChildByName("tip").getComponent(cc.Label).fontSize = 30;
            }, t.prototype.showTips = function() {
                this.view.tips.active = !0;
            }, t.prototype.cleanTips = function() {
                this.node.getChildByName("tips").active && (this.node.getChildByName("tips").opacity = 100);
            }, t.prototype.checkEnd = function() {
                for (var e = !0, t = 0; t < this.animalLogic.length; t++) {
                    var n = this.animalLogic[t];
                    !n.isFrom && n.survival && (e = !1);
                }
                e && (this.isOpen || (this.isOpen = !0, this.scheduleOnce(function() {
                    a.default.Instance.show_ui("Pop", "Success");
                }, 1)));
            }, t.prototype.initPhysics = function() {
                var e = new cc.Node();
                e.name = "qiang", e.group = "River";
                var t = function t(e, _t3, n, o, i) {
                    var a = e.addComponent(cc.BoxCollider);
                    a.offset.x = _t3, a.offset.y = n, a.size.width = o, a.size.height = i;
                };
                t(e, 0, -470, 2e3, 1), t(e, 0, 485, 2e3, 1), e.parent = this.node;
            }, t.prototype.setFrom = function(e) {
                this.from = e;
            }, t.prototype.drawOk = function() {
                this.from && (this.from.drawOk(this.end), this.from = null, this.end = null);
                var e = !0;
                this.animalLogic.forEach(function(t) {
                    t.isEnable || (e = !1);
                }), e && i.default.Instance.dispatch_event(o.GConfiguration.DrawMove, "");
            }, t.prototype.moveErr = function() {
                this.animalLogic.forEach(function(e) {
                    e.err = !0;
                }), r.Utils.showError(this.node), this.scheduleOnce(function() {
                    i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                }, 1);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.DrawOk, this, this.drawOk), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.DrawErr, this, this.moveErr), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.DrawCheck, this, this.checkEnd), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.CleanTips, this, this.cleanTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    DialectObj: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "db36b1Gv1tDrKWFnsw+KSUE", "DialectObj"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("../../Managers/UserMgr"), c = e("./DialectLeve"), l = cc._decorator, d = l.ccclass, u = l.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.Mask = null, t.line_point = [], t.AnimalId = 0, t.isFrom = !1, t.isEnable = !1, 
                t.GameLogic = null, t.trueDraw = !1, t.err = !1, t.target = null, t.survival = !0, 
                t.isFire = !1, t.colorConfig = {
                    "0index": "#ccb1ef",
                    "1index": "#f6d477",
                    "2index": "#61b5fa",
                    "3index": "#f2a8a8"
                }, t;
            }
            var n;
            return __extends(t, e), n = t, t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                this.GameLogic = this.node.parent.getComponent(c.default), this.isFrom && (this.Mask = r.default.Instance.show_ui("Dialect", "Mask", this.node.parent.getChildByName("allMask")).getComponent(cc.Graphics), 
                this.Mask.lineWidth = 20, this.Mask.strokeColor = new cc.Color().fromHEX(this.colorConfig[this.AnimalId + "index"]), 
                this.Mask.fillColor = new cc.Color().fromHEX(this.colorConfig[this.AnimalId + "index"]), 
                i.default.Instance.add_event_listenner(o.GConfiguration.DrawMove, this, this.move)), 
                this.GameLogic.animalLogic.push(this), i.default.Instance.add_event_listenner(o.GConfiguration.DrawStatus, this, this.stopDraw), 
                this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this), 
                this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
            }, t.prototype.stopDraw = function() {
                this.trueDraw = !1, this.GameLogic && (this.GameLogic.from = null);
            }, t.prototype._calculationDis = function(e, t) {
                return e.sub(t).mag();
            }, t.prototype.move = function() {
                var e = this;
                if (!this.err) {
                    var t = this._calculationDis(this.node.getPosition(), this.line_point[0]) / 500;
                    cc.tween(this.node).to(t, {
                        position: cc.v3(this.line_point[0])
                    }).call(function() {
                        e.line_point.length > 1 ? (e.line_point.shift(), e.move()) : e.isFire || (i.default.Instance.dispatch_event(o.GConfiguration.DrawCheck, ""), 
                        e.isFire = !0);
                    }).start();
                }
            }, t.prototype.touch_start = function(e) {
                if (this.isFrom && !this.isEnable) {
                    this.trueDraw = !0, this.GameLogic.setFrom(this);
                    var t = this.GameLogic.node.convertToNodeSpaceAR(e.getLocation());
                    this.GameLogic.node.getChildByName("CheckBox").setPosition(t), this.line_point.push(t), 
                    this.Mask.moveTo(parseInt(t.x), parseInt(t.y)), i.default.Instance.dispatch_event(o.GConfiguration.CleanTips, "");
                }
            }, t.prototype.touch_move = function(e) {
                if (this.isFrom && !this.isEnable) {
                    if (!this.trueDraw) return this.Mask.clear(), void (this.line_point = []);
                    var t = this.GameLogic.node.convertToNodeSpaceAR(e.getLocation());
                    this.GameLogic.node.getChildByName("CheckBox").setPosition(t), Math.abs(parseInt(t.x) - this.line_point[this.line_point.length - 1].x) < 5 && Math.abs(parseInt(t.y) - this.line_point[this.line_point.length - 1].y) < 5 ? console.log("skip point") : (this.line_point.push(cc.v2(t.x, t.y)), 
                    this.Mask.lineTo(parseInt(t.x), parseInt(t.y)), this.Mask.stroke());
                }
            }, t.prototype.touch_end = function() {
                this.GameLogic.node.getChildByName("CheckBox").x = -1e3, this.isFrom && !this.isEnable && (this.isEnable || (this.Mask.clear(), 
                this.line_point = []));
            }, t.prototype.drawOk = function(e) {
                this.isEnable = !0, this.target = e;
            }, t.prototype.onCollisionEnter = function(e) {
                if ("Seaweed" == e.node.name) a.default.Instance.play_effect("colider"), i.default.Instance.dispatch_event(o.GConfiguration.DrawErr, ""); else if ("CheckBox" == e.node.name || "qiang" == e.node.name) ; else {
                    var t = e.node.getComponent(n);
                    if (!this.isFrom) return;
                    if (!t.isFrom && t.AnimalId != this.target.AnimalId) return;
                    var r = !1;
                    this.AnimalId == t.AnimalId && (r = !0), r ? (t.survival = !1, s.UserMgr._instance.userInfo.dialectLeve > 8 ? this.onDialectEnd(e) : this.onAnimalEnd(e)) : this.isFrom && (a.default.Instance.play_effect("colider"), 
                    i.default.Instance.dispatch_event(o.GConfiguration.DrawErr, ""));
                }
            }, t.prototype.onDialectEnd = function(e) {
                this.isFire || (i.default.Instance.dispatch_event(o.GConfiguration.DrawCheck, ""), 
                this.isFire = !0), this.node.active = !1, e.node.getChildByName("tex").active = !1, 
                e.node.getChildByName("suT").active = !0, e.node.getChildByName("xingxing_ske").active = !0;
            }, t.prototype.onAnimalEnd = function(e) {
                2 != this.AnimalId && a.default.Instance.play_effect("eat"), e.node.getChildByName("xingxing_ske").active = !0, 
                this.scheduleOnce(function() {
                    e.node.active = !1;
                }, .5);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.DrawMove, this, this.move), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.DrawStatus, this, this.stopDraw);
            }, __decorate([ u ], t.prototype, "AnimalId", void 0), __decorate([ u ], t.prototype, "isFrom", void 0), 
            n = __decorate([ d ], t);
        }(r.UICtrl);
        n.default = h, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "./DialectLeve": "DialectLeve"
    } ],
    1: [ function() {
        "use strict";
        var e, t, n;
        (function(e) {
            e.BaseAppProxy = /* */ function() {
                function _class() {
                    _classCallCheck2(this, _class);
                }
                _createClass2(_class, [ {
                    key: "signInGoogle",
                    value: function signInGoogle() {
                        console.log("BaseAppProxy signInGoogle");
                    }
                }, {
                    key: "signInGoogleSilently",
                    value: function signInGoogleSilently() {
                        console.log("BaseAppProxy signInGoogleSilently");
                    }
                }, {
                    key: "signOutGoogle",
                    value: function signOutGoogle() {
                        console.log("BaseAppProxy signOutGoogle");
                    }
                }, {
                    key: "saveFile",
                    value: function saveFile(e) {}
                }, {
                    key: "loadSavefile",
                    value: function loadSavefile() {}
                }, {
                    key: "setNonConsumableProduct",
                    value: function setNonConsumableProduct(e) {}
                }, {
                    key: "getProductDetail",
                    value: function getProductDetail(e) {}
                }, {
                    key: "requestPayment",
                    value: function requestPayment(e) {}
                }, {
                    key: "checkPurchase",
                    value: function checkPurchase() {}
                }, {
                    key: "fetchRemoteConfig",
                    value: function fetchRemoteConfig() {}
                }, {
                    key: "confirmPurchase",
                    value: function confirmPurchase(e) {}
                }, {
                    key: "getRemoteConfig",
                    value: function getRemoteConfig() {
                        return new Map();
                    }
                }, {
                    key: "getOrderInfo",
                    value: function getOrderInfo(e) {
                        return "";
                    }
                }, {
                    key: "restoreNonConsumablePurchase",
                    value: function restoreNonConsumablePurchase() {}
                }, {
                    key: "onOfferwallAdCredited",
                    value: function onOfferwallAdCredited(e, t) {}
                }, {
                    key: "onOfferwallAdClosed",
                    value: function onOfferwallAdClosed() {}
                }, {
                    key: "submitScore",
                    value: function submitScore(e, t) {}
                }, {
                    key: "showLeaderboard",
                    value: function showLeaderboard(e) {}
                } ]);
                return _class;
            }();
        })(t || (t = {})), function(e) {
            var t, n, o, i;
            (function(e) {
                e.SaveLog = "https://log.17tcw.com/collect/pushEvents", e.SaveRedirect = "https://game.17tcw.com/xyx/statis/reqSaveRedirect", 
                e.GetNativationConfig = "https://game.17tcw.com/default/redirect/list", e.GameConfig = "https://game.17tcw.com/default/extra/getNewConfigs", 
                e.SaveShare = "https://game.17tcw.com/xyx/statis/reqBeginShare", e.GetShareConfig = "https://game.17tcw.com/xyx/basic/reqFenxiang", 
                e.GetUUID = "https://game.17tcw.com/game/wechat", e.GetRewardConfig = "https://game.17tcw.com/default/game/getShareStrategy", 
                e.GameUrl = "https://game.17tcw.com", e.GetOpenId = "https://game.17tcw.com/default/login/authorize", 
                e.UploadClickShare = "https://game.17tcw.com/default/game/clickShare";
            })(t = e.Urls || (e.Urls = {})), function(e) {
                e.Default = "Default", e.CocosCreator = "CocosCreator", e.LayaAir = "LayaAir";
            }(n = e.EngineType || (e.EngineType = {})), function(e) {
                e.Default = "Default", e.Kuaidianwan = "Kuaidianwan", e.WeChat = "WeChat", e.QQ = "QQ", 
                e.OPPO = "OPPO", e.Vivo = "Vivo", e.BaiDu = "BaiDu", e.XiaoDu = "XiaoDu", e.QuTouTiao = "QuTouTiao", 
                e.QuTouTiaoAndroid = "QuTouTiaoAndroid", e.ByteDance = "ByteDance", e.YueYou = "YueYou", 
                e.KuaiKan = "KuaiKan", e.BaoQu = "BaoQu", e.Android = "Android", e.iOS = "iOS", 
                e.UCMiniGame = "UCMiniGame", e.LianShangMiniGame = "LianShangMiniGame", e.Kwaigame = "Kwaigame", 
                e.M4399MiniGame = "M4399MiniGame", e.Hago = "Hago", e.HuaWeiQuickGame = "HuaWeiQuickGame", 
                e.ZuiYou = "ZuiYou";
            }(o = e.Platform || (e.Platform = {})), function(e) {
                e.None = "", e.AppStore = "AppStore", e.AppStoreWorld = "AppStoreWorld", e.AndroidOfficial = "AndroidOfficial", 
                e.OPPO = "OPPO", e.M4399 = "M4399", e.M233 = "M233", e.HaoYouKuaiBao = "HaoYouKuaiBao", 
                e.BaMenShenQi = "BaMenShenQi", e.YingYongBao = "YingYongBao", e.XiaoMi = "XiaoMi", 
                e.GooglePlay = "GooglePlay", e.HuaweiGlobal = "HuaweiGlobal", e.MomoyuAndroid = "MomoyuAndroid";
            }(i = e.DistributionChannel || (e.DistributionChannel = {}));
        }(n || (n = {})), function(e) {
            e.Info = new (/* */ function() {
                function _class2() {
                    _classCallCheck2(this, _class2);
                    this.debugLog = !1, this.forbidHttpRequest = !1, this.isPreview = !1, this.appId = "", 
                    this.appKey = "", this.platform = e.Platform.Default, this.engine = e.EngineType.Default, 
                    this.distributionChannel = e.DistributionChannel.None, this.channelId = "", this.channelKey = "", 
                    this.UUID = "", this.underCheck = !1, this.resolution = {
                        width: 0,
                        height: 0
                    }, this.sharePath = "", this.nickname = "", this.avatar = "", this.scene = "", this.sceneWithSourceAppId = "", 
                    this.gameInBackground = !1, this.pageList = [], this.shareOption = null, this.shareTimes = 0, 
                    this.shareTime = 0, this.withoutRewardVideoAd = !1, this.version = "1.0.0", this.videoTopics = [], 
                    this.rewardConfigOriginData = new Map(), this.rewardUserData = {
                        time: 0,
                        data: new Map()
                    }, this.shareData = [ {
                        id: "",
                        templateId: "",
                        title: "",
                        url: ""
                    } ], this.shareFailTips = [ "分享失败，请分享到群" ];
                }
                return _class2;
            }())();
        }(n || (n = {})), function(e) {
            function n(n) {
                var o, i, a, r, s, c;
                var l = null;
                switch (n) {
                  case e.Platform.Android:
                    l = t.PROXY;
                    break;

                  case e.Platform.WeChat:
                    l = null !== (o = window.wx) && void 0 !== o ? o : {};
                    break;

                  case e.Platform.QQ:
                    l = null !== (i = window.qq) && void 0 !== i ? i : {};
                    break;

                  case e.Platform.iOS:
                    l = t.PROXY;
                    break;

                  case e.Platform.OPPO:
                  case e.Platform.Vivo:
                    l = null !== (a = window.qg) && void 0 !== a ? a : {};
                    break;

                  case e.Platform.ByteDance:
                    l = null !== (r = window.tt) && void 0 !== r ? r : {};
                    break;

                  case e.Platform.Kwaigame:
                    l = null !== (s = window.ks) && void 0 !== s ? s : {};
                    break;

                  case e.Platform.Kuaidianwan:
                    l = {}, window.GameAssistantWeb ? (console.log("GameAssistantWeb is ok."), GameAssistantWeb.onGameLoaded()) : console.log("GameAssistantWeb is not ok.");
                    break;

                  case e.Platform.Hago:
                    l = null !== (c = window.hg) && void 0 !== c ? c : {};
                }
                e.PA = new e.PAClass(), e.PA.init(l);
            }
            function o(t) {
                var n, o, i, a, s, u, p, g;
                if (e.log("init evn", t), e.Info.debugLog = null !== (n = t.debugLog) && void 0 !== n && n, 
                e.Info.isPreview = t.isPreview, e.Info.appId = t.appId, e.Info.appKey = t.appKey, 
                e.Info.platform = t.platform, e.Info.engine = t.engine, e.Info.channelKey = t.channelKey, 
                e.Info.UUID = t.uuid, e.Info.resolution.width = t.resolution.width ? t.resolution.width : 0, 
                e.Info.resolution.height = t.resolution.height ? t.resolution.height : 0, e.Info.sharePath = t.sharePath, 
                e.Info.withoutRewardVideoAd = !!t.withoutRewardVideoAd, e.Info.version = t.version ? t.version : "1.0.0", 
                !e.isPlatform([ e.Platform.M4399MiniGame, e.Platform.ZuiYou ])) {
                    try {
                        var _t4 = null === (o = e.PA.getSystemInfoSync) || void 0 === o ? void 0 : o.call(e.PA);
                        _t4.windowWidth / _t4.windowHeight > e.Info.resolution.width / e.Info.resolution.height ? e.Info.resolution.width = Math.round(_t4.windowWidth * e.Info.resolution.height / _t4.windowHeight) : e.Info.resolution.height = Math.round(_t4.windowHeight * e.Info.resolution.width / _t4.windowWidth);
                    } catch (v) {
                        v = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(v);
                        console.error(v);
                    }
                    r();
                    try {
                        null === (i = e.PA.setKeepScreenOn) || void 0 === i || i.call(e.PA, {
                            keepScreenOn: !0
                        }), e.PA.onShow(function() {
                            var t, n, o, i, a, r, s, c, u, h, f, p;
                            if (e.Info.gameInBackground = !1, e.Info.lastGameTimeUploadTimestamp = Date.now(), 
                            null === (t = e.PA.setKeepScreenOn) || void 0 === t || t.call(e.PA, {
                                keepScreenOn: !0
                            }), null === (n = e.Info.shareOption) || void 0 === n ? void 0 : n.result) {
                                e.Info.shareTimes++;
                                var _t5 = null !== (a = null === (o = e.Info.rewardConfigOriginData) || void 0 === o ? void 0 : o.get(null === (i = e.Info.shareOption) || void 0 === i ? void 0 : i.tag)) && void 0 !== a ? a : null === (r = e.Info.rewardConfigOriginData) || void 0 === r ? void 0 : r.get("SCORE_STRATEGY");
                                try {
                                    var _n2 = null !== (c = null == _t5 ? void 0 : _t5.shareSuccessRate[Math.min(e.Info.shareTimes - 1, (null === (s = null == _t5 ? void 0 : _t5.shareSuccessRate) || void 0 === s ? void 0 : s.length) - 1)]) && void 0 !== c ? c : 0, _o = Math.random() < _n2 / 100;
                                    if (!_o) {
                                        var _n3 = null !== (h = 1e3 * (null == _t5 ? void 0 : _t5.shareSuccessTime[Math.min(e.Info.shareTimes - 1, (null === (u = null == _t5 ? void 0 : _t5.shareSuccessTime) || void 0 === u ? void 0 : u.length) - 1)])) && void 0 !== h ? h : 5e3;
                                        Date.now() - e.Info.shareTime >= _n3 && _n3 >= 0 && (_o = !0);
                                    }
                                    try {
                                        e.Info.shareOption.result({
                                            reward: _o
                                        });
                                    } catch (g) {}
                                    _o ? (e.Info.shareTimes = 0, e.Info.shareOption = null) : (null === (p = null === (f = e.Info.shareOption) || void 0 === f ? void 0 : f.showFailTip) || void 0 === p || p) && e.PA.showModal({
                                        title: "提示",
                                        content: d(),
                                        showCancel: !0,
                                        cancelText: "返回游戏",
                                        confirmText: "去分享",
                                        success: function success(t) {
                                            t.cancel ? e.Info.shareOption = null : l(e.Info.shareOption);
                                        }
                                    });
                                } catch (v) {}
                            }
                        }), e.PA.onHide(function() {
                            e.Info.gameInBackground = !0, e.Info.openId && h(), f();
                        }), setInterval(function() {
                            e.Info.gameInBackground || h();
                        }, 1e3 * Math.max(null !== (a = t.uploadGameTimeIntervals) && void 0 !== a ? a : 10, 10)), 
                        setInterval(function() {
                            e.Info.pageList.length > 0 && (e.Info.pageList[e.Info.pageList.length - 1].time += 1);
                        }, 1e3), null === (s = e.PA.showShareMenu) || void 0 === s || s.call(e.PA, {
                            menus: [ "shareAppMessage", "shareTimeline" ]
                        }), null === (u = e.PA.onShareMessageToFriend) || void 0 === u || u.call(e.PA, function(e) {
                            console.log("onShareMessageToFriend:", e.success, e.errMsg);
                        });
                        var _n = function _n(t, n) {
                            try {
                                var _o2 = "", _i = {
                                    id: "",
                                    title: "",
                                    url: ""
                                }, _a = {};
                                return "video" == (t = null != t ? t : {
                                    channel: ""
                                }).channel ? (_o2 = "openid=".concat(e.Info.openId, "&tm=").concat(Date.now().toFixed(), "&").concat(e.Info.channelKey, "=10001"), 
                                _a = {
                                    videoTopics: e.Info.videoTopics
                                }, e.sentLog("拍抖音", null, {
                                    "触发点": n
                                })) : (_i = e.Info.shareData[e.rand(0, e.Info.shareData.length - 1)], e.request({
                                    url: e.Urls.SaveShare,
                                    method: "POST",
                                    data: {
                                        Openid: e.Info.openId,
                                        ShareId: _i.id,
                                        ShareTm: Date.now().toFixed()
                                    }
                                }), _o2 = "shareid=".concat(_i.id, "&openid=").concat(e.Info.openId, "&tm=").concat(Date.now().toFixed(), "&").concat(e.Info.sharePath), 
                                e.sentLog("分享", null, {
                                    "触发点": n
                                })), {
                                    title: _i.title,
                                    imageUrl: _i.url,
                                    query: _o2,
                                    extra: _a
                                };
                            } catch (v) {
                                v = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(v);
                                return console.error(v), e.sentLog("分享", null, {
                                    "触发点": n
                                }), {
                                    title: "",
                                    imageUrl: "",
                                    query: "openid=".concat(e.Info.openId, "&tm=").concat(Date.now().toFixed(), "&").concat("video" == (null == t ? void 0 : t.channel) ? e.Info.channelKey + "=10001" : e.Info.sharePath)
                                };
                            }
                        };
                        null === (p = e.PA.onShareAppMessage) || void 0 === p || p.call(e.PA, function(e) {
                            return _n(e, "顶部分享");
                        }), null === (g = e.PA.onShareTimeline) || void 0 === g || g.call(e.PA, function() {
                            return _n(null, "分享朋友圈");
                        });
                    } catch (v) {
                        v = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(v);
                        console.error(v);
                    }
                    c(), e.isPlatform([ e.Platform.Android, e.Platform.iOS ]) || e.request({
                        url: e.Urls.GetShareConfig,
                        data: {
                            Appid: e.Info.appId,
                            Type: 0
                        },
                        method: "POST",
                        success: function success(t) {
                            var n, o;
                            try {
                                if ((null === (o = null === (n = null == t ? void 0 : t.data) || void 0 === n ? void 0 : n.data) || void 0 === o ? void 0 : o.length) >= 0) {
                                    var _n4 = [];
                                    t.data.data.forEach(function(e) {
                                        _n4.push({
                                            id: e.shareid,
                                            title: e.title,
                                            url: e.imageurl
                                        });
                                    }), e.Info.shareData = _n4, e.log("ShareContent", e.Info.shareData);
                                } else e.log("分享内容获取失败:" + JSON.stringify(t));
                            } catch (i) {}
                        }
                    });
                }
            }
            function i(t) {
                e.Info.openId = t, e.PA.setStorageSync("LocalOpenId", e.Info.openId);
            }
            function a(t) {
                e.isPlatform([ e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Android, e.Platform.iOS ]) ? t("") : e.request({
                    url: e.Urls.GetUUID,
                    method: "POST",
                    dataType: "其他",
                    data: {
                        appid: e.Info.appId
                    },
                    success: function success(e) {
                        try {
                            t(e.data);
                        } catch (n) {}
                    },
                    fail: function fail() {
                        e.PA.showModal({
                            title: "提示",
                            content: "网络不稳定，连接服务器失败，请重试",
                            showCancel: !1,
                            confirmText: "重试",
                            success: function success() {
                                a(t);
                            }
                        });
                    }
                });
            }
            function r() {
                var t, n, o, i;
                try {
                    var _r = e.PA.getLaunchOptionsSync();
                    console.log("LaunchOption:".concat(JSON.stringify(_r))), _r.scene ? (e.Info.scene = _r.scene + "", 
                    e.Info.sceneWithSourceAppId = _r.scene + "") : _r.from && e.isPlatform([ e.Platform.Kwaigame ]) && (e.Info.scene = _r.from + "", 
                    e.Info.sceneWithSourceAppId = _r.from + ""), (null === (t = null == _r ? void 0 : _r.query) || void 0 === t ? void 0 : t[e.Info.channelKey]) ? e.Info.channelId = "".concat(e.Info.channelKey, "=").concat(_r.query[e.Info.channelKey]) : e.Info.channelId = null !== (o = null === (n = null == _r ? void 0 : _r.query) || void 0 === n ? void 0 : n.channel) && void 0 !== o ? o : "", 
                    (null == _r ? void 0 : _r.referrerInfo) && (e.Info.sourceAppid = null !== (i = _r.referrerInfo.appId) && void 0 !== i ? i : "", 
                    e.Info.sourceAppid.length > 0 && (e.Info.sceneWithSourceAppId = e.Info.scene + "_" + e.Info.sourceAppid)), 
                    console.log("Launch Scene:".concat(e.Info.scene)), console.log("Launch Channel:".concat(e.Info.channelId)), 
                    console.log("Launch sourceAppid:".concat(e.Info.sourceAppid));
                } catch (a) {
                    a = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(a);
                    console.error(a);
                }
            }
            function s() {
                var t, n;
                try {
                    var _i2 = e.PA.getLaunchOptionsSync();
                    e.Info.isPreview && (_i2 = JSON.parse('{ "query": { "shareid": 1 ,"openid":"testopenid","tm":0} }')), 
                    (null === (t = null == _i2 ? void 0 : _i2.query) || void 0 === t ? void 0 : t.shareid) && e.request({
                        url: e.Urls.UploadClickShare,
                        data: {
                            openid: e.Info.openId,
                            sourceOpenid: _i2.query.openid,
                            shareId: parseInt(_i2.query.shareid),
                            shareTm: null !== (n = _i2.query.tm) && void 0 !== n ? n : 0
                        },
                        method: "POST",
                        success: function success(e) {
                            console.log("UPLOAD click share ", e);
                        }
                    });
                } catch (o) {
                    o = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(o);
                    console.error(o);
                }
            }
            function c() {
                console.log("--------------* GA 基础配置和信息 *--------------"), console.log('Appid is "'.concat(e.Info.appId, '"')), 
                console.log('Platform is "'.concat(e.Info.platform, '"')), console.log('ChannelKey is "'.concat(e.Info.channelKey, '"')), 
                console.log('ChannelID is "'.concat(e.Info.channelId, '"')), console.log("SharePath is ".concat(e.Info.sharePath)), 
                console.log('UUID is "'.concat(e.Info.UUID, '"')), console.log("GameEngine is ".concat(e.Info.engine)), 
                console.log("Design resolution is ".concat(JSON.stringify(e.Info.resolution))), 
                console.log("--------------* GA 使用域名清单 *---------------");
                var t = new Set();
                for (var _n5 in e.Urls) {
                    var _o3 = e.Urls[_n5].split("/"), _i3 = _o3[0] + "//" + _o3[2];
                    t.has(_i3) || (t.add(_i3), console.log(_i3));
                }
                console.log("----------------------------------------------");
            }
            function l(t) {
                var n, o, i, a, r, s, c;
                e.Info.shareOption = t, e.Info.shareTime = Date.now();
                var l = null;
                e.Info.shareData.length > 0 && (l = e.Info.shareData[e.rand(0, e.Info.shareData.length - 1)]), 
                e.Info.isPreview ? (null === (n = e.Info.shareOption) || void 0 === n || n.result({
                    reward: !0
                }), e.Info.shareOption = null) : (e.PA.shareAppMessage({
                    templateId: null !== (o = l.templateId) && void 0 !== o ? o : "",
                    title: null !== (i = l.title) && void 0 !== i ? i : "",
                    imageUrl: null !== (a = l.url) && void 0 !== a ? a : "",
                    query: "shareid=".concat(null !== (r = l.id) && void 0 !== r ? r : 0, "&openid=").concat(e.Info.openId, "&tm=").concat(Date.now().toFixed(), "&").concat(e.Info.sharePath).concat(t.query ? "&" : "").concat(null !== (s = t.query) && void 0 !== s ? s : ""),
                    success: function success() {
                        console.log("分享接口成功回调，暂不开放");
                    },
                    fail: function fail() {
                        var t;
                        null === (t = e.Info.shareOption) || void 0 === t || t.result({
                            reward: !1
                        });
                    }
                }), e.request({
                    url: e.Urls.SaveShare,
                    method: "POST",
                    data: {
                        Openid: e.Info.openId,
                        ShareId: l.id,
                        ShareTm: Date.now().toFixed()
                    }
                }), e.sentLog("分享", null, {
                    "触发点": null !== (c = t.tag) && void 0 !== c ? c : "未知"
                }));
            }
            function d() {
                var t;
                var n = "";
                return (null === (t = null === e.Info || void 0 === e.Info ? void 0 : e.Info.shareFailTips) || void 0 === t ? void 0 : t.length) > 0 ? (n = e.Info.shareFailTips.shift(), 
                e.Info.shareFailTips.push(n)) : n = "分享失败，请分享到新的群", n;
            }
            function u(t, n, o) {
                var a;
                if (e.isPlatform([ e.Platform.Android, e.Platform.OPPO, e.Platform.iOS ])) try {
                    o(n.code, "");
                } catch (r) {} else {
                    var _r2 = "";
                    n.code = null !== (a = n.code) && void 0 !== a ? a : "", Object.getOwnPropertyNames(n).forEach(function(e, t) {
                        _r2 += "".concat(0 == t ? "?" : "&").concat(e, "=").concat(n[e]);
                    }), console.log("GetOpenIdUrl:", e.Urls.GetOpenId + _r2), e.request({
                        url: e.Urls.GetOpenId + _r2,
                        method: "GET",
                        success: function success(a) {
                            var r, s, c, l, d, h, f, p, g, v, m, _, y;
                            if (console.log("GetOpenid:", JSON.stringify(a)), (null === (r = null == a ? void 0 : a.data) || void 0 === r ? void 0 : r.openid) ? e.Info.openId = null === (s = null == a ? void 0 : a.data) || void 0 === s ? void 0 : s.openid : (null === (l = null === (c = a.data) || void 0 === c ? void 0 : c.data) || void 0 === l ? void 0 : l.open_id) ? e.Info.openId = null === (h = null === (d = a.data) || void 0 === d ? void 0 : d.data) || void 0 === h ? void 0 : h.open_id : (null === (f = a.data) || void 0 === f ? void 0 : f.anonymous_openid) ? e.Info.openId = null === (p = a.data) || void 0 === p ? void 0 : p.anonymous_openid : (null === (v = null === (g = null == a ? void 0 : a.data) || void 0 === g ? void 0 : g.data) || void 0 === v ? void 0 : v.openId) && (e.Info.openId = a.data.data.openId), 
                            (null === (_ = null === (m = null == a ? void 0 : a.data) || void 0 === m ? void 0 : m.data) || void 0 === _ ? void 0 : _.nickName) && (e.Info.nickname = a.data.data.nickName), 
                            "" != e.Info.openId) {
                                i(e.Info.openId);
                                try {
                                    o(e.Info.openId, null === (y = a.data) || void 0 === y ? void 0 : y.session_key);
                                } catch (I) {}
                            } else t ? e.PA.showModal({
                                title: "提示",
                                content: "获取登录数据失败(数据异常)，点击重试",
                                showCancel: !1,
                                confirmText: "重试",
                                success: function success() {
                                    u(t, n, o);
                                }
                            }) : o("", "");
                        },
                        fail: function fail() {
                            t ? e.PA.showModal({
                                title: "提示",
                                content: "获取登录数据失败(请求失败)，点击重试",
                                showCancel: !1,
                                confirmText: "重试",
                                success: function success() {
                                    u(t, n, o);
                                }
                            }) : o("", "");
                        }
                    });
                }
            }
            function h() {
                var t = Math.round((Date.now() - e.Info.lastGameTimeUploadTimestamp) / 1e3);
                e.sentLog("onlinetime", t, {
                    scene: e.Info.sceneWithSourceAppId
                }), e.Info.lastGameTimeUploadTimestamp = Date.now();
            }
            function f() {
                try {
                    e.Info.rewardUserData.time = Date.now();
                    var _n6 = {
                        time: 0,
                        data: []
                    };
                    _n6.time = e.Info.rewardUserData.time, e.Info.rewardUserData.data.forEach(function(e, t) {
                        _n6.data.push({
                            tag: t,
                            currIndex: e.currIndex,
                            currCount: e.currCount
                        });
                    }), e.PA.setStorageSync("RewardUserData", JSON.stringify(_n6));
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    console.error(t);
                }
            }
            function p(t) {
                t.forEach(function(t) {
                    e.Info.rewardConfigOriginData.set(t.tag, {
                        rule: t.rule,
                        shareSuccessRate: t.shareRate,
                        shareSuccessTime: t.shareTime
                    });
                }), e.log("RewardConfig ServerData is ", e.Info.rewardConfigOriginData), g();
            }
            function g() {
                try {
                    var _o4 = e.PA.getStorageSync("RewardUserData");
                    if (!_o4 || "" == _o4) throw "loadRewardUserData:本地RewardUserData不存在";
                    try {
                        var _n7 = JSON.parse(_o4);
                        if (!(_n7.time > e.Info.rewardUserData.time && e.isToday(_n7.time))) throw "数据已过期";
                        if (e.Info.rewardUserData.time = _n7.time, e.Info.rewardUserData.data.clear(), _n7.data.length <= 0) throw "数据为空";
                        _n7.data.forEach(function(t) {
                            e.Info.rewardUserData.data.set(t.tag, {
                                currIndex: t.currIndex,
                                currCount: t.currCount
                            });
                        }), e.Info.rewardConfigOriginData.forEach(function(t, n) {
                            e.Info.rewardUserData.data.has(n) || e.Info.rewardUserData.data.set(n, {
                                currIndex: 0,
                                currCount: 0
                            });
                        });
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        throw "loadRewardUserData:本地RewardUserData数据解析失败";
                    }
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    e.log(n), e.Info.rewardUserData.time = Date.now(), e.Info.rewardUserData.data.clear(), 
                    e.Info.rewardConfigOriginData.forEach(function(t, n) {
                        t.rule.length > 0 && e.Info.rewardUserData.data.set(n, {
                            currIndex: 0,
                            currCount: 0
                        });
                    });
                }
                e.log("RewardUserData", e.Info.rewardUserData);
            }
            function v(t) {
                for (var _n8 = 0; _n8 < e.Info.pageList.length; _n8++) {
                    if (e.Info.pageList[_n8].page == t) {
                        var _t6 = e.Info.pageList[_n8];
                        return e.Info.pageList.splice(_n8, 1), _t6;
                    }
                }
                return null;
            }
            window.GA = e, e.PA = null, e.init = function(i) {
                var r, s, c, l, d, u, h;
                e.Info.appId = "wx5cd72abb650c62a5";
                return console.log("GA3 Version:" + e.version + " buildTime:" + e.buildTime), ""==e.Info.appId ? (e.Info.debugLog = null !== (r = i.debugLog) && void 0 !== r && r, 
                e.Info.isPreview = 0, e.Info.engine = i.engine, t.isAPP(i.platform) && (i.platform = t.getPlatform()), 
                e.Info.platform = i.platform, n(i.platform), t.isAPP() && (i.isPreview || (i.appId = null !== (l = null === (c = null === (s = e.PA.getLaunchOptionsSync()) || void 0 === s ? void 0 : s.query) || void 0 === c ? void 0 : c.appId) && void 0 !== l ? l : e.Info.appId), 
                e.Info.distributionChannel = null !== (h = null === (u = null === (d = e.PA.getLaunchOptionsSync()) || void 0 === d ? void 0 : d.query) || void 0 === u ? void 0 : u.distributionChannel) && void 0 !== h ? h : e.Info.distributionChannel), 
                new Promise(function(n) {
                    t.setSplashAdEndListener(function() {
                        o(i), t.isAPP() ? n(null) : (e.isPlatform([ e.Platform.WeChat, e.Platform.ByteDance, e.Platform.OPPO ]) && e.AdTracking.init(), 
                        a(function(t) {
                            e.Info.underCheck = t == e.Info.UUID, e.log("Server UUID : ", t, " UnderCheck:", e.Info.underCheck), 
                            n(null);
                        }));
                    });
                })) : new Promise(function(e, t) {
                    t("GA has been initialization already.");
                });
            }, e.ENABLE_NEXT_VERSION = !1, e.setUserId = function(t) {
                var n;
                e.Info.uid = t, null === (n = null === e.PA || void 0 === e.PA ? void 0 : e.PA.setUserId) || void 0 === n || n.call(e.PA, e.Info.uid.toFixed()), 
                e.request({
                    url: e.Urls.GetRewardConfig,
                    data: {
                        appid: e.Info.appId,
                        userId: e.Info.uid
                    },
                    method: "POST",
                    success: function success(t) {
                        var n;
                        0 == (null === (n = null == t ? void 0 : t.data) || void 0 === n ? void 0 : n.code) ? p(t.data.data) : e.error("load reward config error ", t);
                    }
                });
            }, e.setOpenId = i, e.exit = function() {
                e.PA.exitMiniProgram();
            }, e.rewardOperation = function(t) {
                t.byVideo ? e.Info.withoutRewardVideoAd ? t.result({
                    reward: !0
                }) : e.showVideoAd(t) : l({
                    tag: t.tag,
                    page: t.page,
                    result: function result(n) {
                        (null == n ? void 0 : n.reward) ? (e.Info.rewardUserData.data.has(t.tag) && e.Info.rewardUserData.data.get(t.tag).currCount++, 
                        t.result({
                            reward: !0
                        })) : t.result({
                            reward: !1
                        });
                    }
                });
            }, e.randomShare = l, e.getOpenId = function t(n, o, i) {
                var a;
                var r = function r(t, o) {
                    e.Info.openId = t, e.Info.session_key = o, e.Info.openId && "" != e.Info.openId && (e.sentLogs([ {
                        eventId: "GotOpenId",
                        extraNum: 0,
                        detail: JSON.stringify({
                            channel: e.Info.channelId,
                            version: e.Info.version,
                            appVersion: e.PA.getSystemInfoSync().version
                        })
                    }, {
                        eventId: "LaunchScene",
                        extraNum: 0,
                        detail: JSON.stringify({
                            scene: e.Info.sceneWithSourceAppId
                        })
                    } ]), s()), n(t, o);
                };
                if (e.Info.isPreview) try {
                    e.Info.openId = localStorage.getItem("user_id"), e.Info.openId || (e.Info.openId = "Test".concat(Date.now()).concat((1e8 * Math.random()).toFixed()), 
                    localStorage.setItem("user_id", e.Info.openId)), r(e.Info.openId, "TestSessionKey");
                } catch (c) {
                    c = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(c);
                    console.error(c);
                } else if (e.isPlatform(e.Platform.Kuaidianwan)) GameAssistantWeb.login(function(t, n) {
                    e.Info.openId = n, r(n, "");
                }); else {
                    var _s = null !== (a = e.PA.getStorageSync("LocalOpenId")) && void 0 !== a ? a : "";
                    _s && !i && e.isPlatform([ e.Platform.WeChat ]) ? r(_s, "") : e.isPlatform(e.Platform.M4399MiniGame) ? window.h5api.isLogin() ? window.h5api.login(function(t) {
                        e.Info.uid = parseInt(t.uId), e.Info.nickname = t.userName, r(t.uId, "");
                    }) : r("LocalOpenId", "") : e.isPlatform(e.Platform.ZuiYou) ? e.Info.appKey ? window.__XCgs.call("init")(e.Info.appKey, function(t, n) {
                        t ? console.error(t.message) : (e.Info.openId = n.uid, r(n.uid, ""));
                    }) : console.log("appKey is null") : e.PA.login({
                        force: !1,
                        success: function success(t) {
                            console.log("Platform ".concat(e.Info.platform, " login:").concat(JSON.stringify(t)));
                            var n = e.PA.getSystemInfoSync();
                            if (e.isPlatform(e.Platform.Kwaigame)) r(t.gameUserId, t.gameToken); else {
                                var _i4 = {};
                                e.isPlatform([ e.Platform.ByteDance ]) ? _i4 = {
                                    code: t.code,
                                    anonymous_code: t.anonymousCode
                                } : e.isPlatform([ e.Platform.LianShangMiniGame, e.Platform.Android, e.Platform.iOS ]) ? _i4 = {
                                    code: t.code
                                } : e.isPlatform(e.Platform.OPPO) ? (e.Info.nickname = t.nickName, e.Info.avatar = t.avatar, 
                                e.Info.token = t.token, _i4 = {
                                    code: t.uid
                                }) : e.isPlatform(e.Platform.Vivo) ? (e.Info.token = t.code, _i4 = {
                                    token: t.code
                                }) : e.isPlatform(e.Platform.Hago) ? (console.log("systemInfo:", JSON.stringify(n)), 
                                _i4 = {
                                    code: t.code,
                                    countryCode: n.countryCode
                                }) : _i4 = {
                                    js_code: t.code
                                }, u(o, _i4, r);
                            }
                        },
                        fail: function fail(o) {
                            console.log(o), e.PA.showModal({
                                title: "提示",
                                content: "获取登录数据失败(平台授权失败)，点击重试",
                                showCancel: !1,
                                confirmText: "重试",
                                success: function success() {
                                    t(n);
                                }
                            });
                        }
                    });
                }
            }, e.isNextRewardVideo = function(t) {
                var n = !0;
                try {
                    if (!e.Info.underCheck) {
                        var _o5 = e.Info.rewardConfigOriginData.get(t);
                        (null == _o5 || _o5.rule.length <= 0) && (_o5 = e.Info.rewardConfigOriginData.get("SCORE_STRATEGY"));
                        var _i5 = e.Info.rewardUserData.data.get(t);
                        for (null == _i5 && (_i5 = e.Info.rewardUserData.data.get("SCORE_STRATEGY")); _i5.currCount >= _o5.rule[_i5.currIndex].count; ) {
                            if (_i5.currIndex += 1, _i5.currCount = 0, _i5.currIndex >= _o5.rule.length) {
                                _i5.currIndex = 0, _i5.currCount = 0;
                                break;
                            }
                        }
                        n = "video" == _o5.rule[_i5.currIndex].type;
                    }
                } catch (o) {
                    o = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(o);
                    n = !0;
                }
                return n;
            }, e.loadRewardUserLocalData = g, e.getNavigationList = function(t, n, o) {
                return new Promise(function(i, a) {
                    e.request({
                        url: e.Urls.GetNativationConfig,
                        method: "POST",
                        data: {
                            userId: e.Info.uid,
                            type: t,
                            num: n,
                            excludes: o
                        },
                        success: function success(e) {
                            if (0 == e.data.code) {
                                var _t7 = [];
                                e.data.data.forEach(function(e) {
                                    _t7.push({
                                        id: e.redirectId,
                                        appid: e.appid,
                                        name: e.name,
                                        is_open_code: !1,
                                        path: e.path,
                                        icon: e.icon,
                                        qr_code: ""
                                    });
                                }), i(_t7);
                            } else a(e);
                        },
                        fail: function fail(e) {
                            a(e);
                        }
                    });
                });
            }, e.enterPage = function(t) {
                var n, o;
                e.Info.pageList.push({
                    page: t.page,
                    time: 0
                }), o = {
                    page: t.page,
                    existRedirect: t.existRedirect ? 1 : 0,
                    existVideo: t.existVideo ? 1 : 0,
                    existBanner: t.existBanner ? 1 : 0,
                    openType: null !== (n = t.openType) && void 0 !== n ? n : 0
                }, e.sentLog("EnterPage", void 0, o);
            }, e.closePage = function(t) {
                var n = v(t.page);
                n && e.sentLog("ClosePage", n.time, {
                    page: t.page
                });
            }, e.videoRequestEvent = function(t, n) {
                t || console.error("pageName is empty!");
                var o = [];
                var i;
                n.forEach(function(e) {
                    o.push({
                        eventId: "VideoRequest",
                        detail: JSON.stringify({
                            page: t,
                            type: e
                        })
                    });
                }), i = o, e.sentLogs(i);
            }, e.clickEvent = function(t, n, o, i) {
                if (e.Info.pageList && e.Info.pageList.length > 0) {
                    t || console.error("pageName is empty!");
                    var _a2 = n, _r3 = e.Info.pageList[e.Info.pageList.length - 1], _s2 = !1;
                    _r3.map ? _r3.map.get(o) || (_r3.map.set(o, 1), _s2 = !0) : (_r3.map = new Map(), 
                    _r3.map.set(o, 1), _s2 = !0);
                    var _c = "video" == o ? _a2 : null, _l = "other" != o ? _r3.time : 0, _d = {
                        page: t,
                        eventType: "click",
                        posType: o,
                        pos: _c,
                        isFirstClick: _s2 ? 1 : 0
                    };
                    i && (_d.classify = i), e.sentLog(n, _l, _d);
                }
            }, e.isDefault = function() {
                return e.isPlatform(e.Platform.Default);
            }, e.isWeChat = function() {
                return e.isPlatform(e.Platform.WeChat);
            }, e.isQQ = function() {
                return e.isPlatform(e.Platform.QQ);
            }, e.isOPPO = function() {
                return e.isPlatform(e.Platform.OPPO);
            }, e.isVivo = function() {
                return e.isPlatform(e.Platform.Vivo);
            }, e.isKuaiDianWan = function() {
                return e.isPlatform(e.Platform.Kuaidianwan);
            }, e.isQuTouTiao = function() {
                return e.isPlatform(e.Platform.QuTouTiao);
            }, e.isQuTouTiaoAndroid = function() {
                return e.isPlatform(e.Platform.QuTouTiaoAndroid);
            }, e.isByteDance = function() {
                return e.isPlatform(e.Platform.ByteDance);
            }, e.isYueYou = function() {
                return e.isPlatform(e.Platform.YueYou);
            }, e.isKuaiKan = function() {
                return e.isPlatform(e.Platform.KuaiKan);
            }, e.isBaoQu = function() {
                return e.isPlatform(e.Platform.BaoQu);
            }, e.isAndroid = function() {
                return e.isPlatform(e.Platform.Android);
            }, e.isiOS = function() {
                return e.isPlatform(e.Platform.iOS);
            }, e.isUCMiniGame = function() {
                return e.isPlatform(e.Platform.UCMiniGame);
            }, e.isLianShangMiniGame = function() {
                return e.isPlatform(e.Platform.LianShangMiniGame);
            }, e.isKwaigame = function() {
                return e.isPlatform(e.Platform.Kwaigame);
            }, e.isM4399MiniGame = function() {
                return e.isPlatform(e.Platform.M4399MiniGame);
            }, e.isZuiYou = function() {
                return e.isPlatform(e.Platform.ZuiYou);
            }, e.isNative = function() {
                return e.isPlatform(e.Platform.iOS) || e.isPlatform(e.Platform.Android);
            }, e.isOppoAndroid = function() {
                return e.isPlatform(e.Platform.Android) && e.Info.distributionChannel == e.DistributionChannel.OPPO;
            };
        }(n || (n = {})), function(e) {
            e.PAClass = /* */ function() {
                function _class3() {
                    _classCallCheck2(this, _class3);
                    this.platformObject = null, this.launchOptions = null, this.selfShowToast = null;
                }
                _createClass2(_class3, [ {
                    key: "init",
                    value: function init(e) {
                        null == e && console.log("GA PlatformApi init error: platformObject is null"), this.syncUnsupportMethod(e), 
                        this.platformObject = e;
                    }
                }, {
                    key: "syncUnsupportMethod",
                    value: function syncUnsupportMethod(t) {
                        var _this = this;
                        try {
                            var o = [];
                            if (e.Info.isPreview || e.isPlatform([ e.Platform.Kuaidianwan, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago ])) o.push("getSetting", "showLoading", "hideLoading", "createUserInfoButton", "getUpdateManager", "onTouchEnd", "onTouchStart", "offTouchStart", "offTouchEnd", "setKeepScreenOn", "showShareMenu", "loadSubpackage", "onShareMessageToFriend", "onShareAppMessage", "saveAppToDesktop", "initGameBannerAd", "addColorSign", "addRecentColorSign", "subscribeAppMsg", "onShareTimeline", "vibrateShort", "vibrateLong"); else if (e.isPlatform([ e.Platform.Android, e.Platform.iOS ])) Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(function(e) {
                                null == _this[e] && (_this[e] = function() {
                                    return t[e].apply(t, arguments);
                                });
                            }), Object.getOwnPropertyNames(t).forEach(function(e) {
                                null == _this[e] && "function" == typeof t[e] && (_this[e] = function() {
                                    return t[e].apply(t, arguments);
                                });
                            }); else if (t) {
                                Object.getOwnPropertyNames(t).forEach(function(e) {
                                    try {
                                        null == _this[e] && "function" == typeof t[e] && (_this[e] = t[e]);
                                    } catch (n) {
                                        n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                                        console.error(n);
                                    }
                                }), o.push("showNativeAd", "hideNativeAd");
                                for (var _e in t) {
                                    try {
                                        null == this[_e] && (this[_e] = t[_e]);
                                    } catch (n) {
                                        n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                                        console.error(n);
                                    }
                                }
                            }
                            o.forEach(function(e) {
                                _this[e] = function() {
                                    console.log("Preview 暂不支持".concat(e));
                                };
                            });
                        } catch (n) {
                            n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                            console.error(n);
                        }
                    }
                }, {
                    key: "addUnsupportMethods",
                    value: function addUnsupportMethods(t, n) {
                        var _this2 = this;
                        e.isPlatform(t) && n.forEach(function(e) {
                            _this2[e] = function() {
                                console.log("".concat(t, " 暂不支持").concat(e));
                            };
                        });
                    }
                }, {
                    key: "onShow",
                    value: function onShow(t) {
                        var n, o;
                        e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago ]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? ((null === (n = cc.game) || void 0 === n ? void 0 : n.EVENT_SHOW) && cc.game.on(cc.game.EVENT_SHOW, t), 
                        (null === (o = cc.Game) || void 0 === o ? void 0 : o.EVENT_SHOW) && cc.game.on(cc.Game.EVENT_SHOW, t)) : e.log("laya onShow 暂未实现") : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.onShow(t) : this.platformObject.onShow(t);
                    }
                }, {
                    key: "offShow",
                    value: function offShow(t) {
                        var n, o;
                        e.isPlatform([ e.Platform.Android, e.Platform.iOS ]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? ((null === (n = cc.game) || void 0 === n ? void 0 : n.EVENT_SHOW) && cc.game.off(cc.game.EVENT_SHOW, t), 
                        (null === (o = cc.Game) || void 0 === o ? void 0 : o.EVENT_SHOW) && cc.game.off(cc.Game.EVENT_SHOW, t)) : e.log("laya offShow 暂未实现") : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.offShow(t) : this.platformObject.offShow(t);
                    }
                }, {
                    key: "onHide",
                    value: function onHide(t) {
                        var n, o;
                        e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago ]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? ((null === (n = cc.game) || void 0 === n ? void 0 : n.EVENT_HIDE) && cc.game.on(cc.game.EVENT_HIDE, t), 
                        (null === (o = cc.Game) || void 0 === o ? void 0 : o.EVENT_HIDE) && cc.game.on(cc.Game.EVENT_HIDE, t)) : e.log("laya onhide 暂未实现") : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.onHide(t) : this.platformObject.onHide(t);
                    }
                }, {
                    key: "offHide",
                    value: function offHide(t) {
                        var n, o;
                        e.isPlatform([ e.Platform.Android, e.Platform.iOS ]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? ((null === (n = cc.game) || void 0 === n ? void 0 : n.EVENT_HIDE) && cc.game.off(cc.game.EVENT_HIDE, t), 
                        (null === (o = cc.Game) || void 0 === o ? void 0 : o.EVENT_HIDE) && cc.game.off(cc.Game.EVENT_HIDE, t)) : e.log("laya offHide 暂未实现") : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.offHide(t) : this.platformObject.offHide(t);
                    }
                }, {
                    key: "createCustomAd",
                    value: function createCustomAd(t) {
                        var n, o;
                        if (e.isPlatform([ e.Platform.Vivo ])) {
                            var _e2 = {
                                posId: t.adUnitId,
                                style: {
                                    left: null === (n = t.style) || void 0 === n ? void 0 : n.left,
                                    top: null === (o = t.style) || void 0 === o ? void 0 : o.top
                                }
                            };
                            return this.platformObject.createCustomAd(_e2);
                        }
                        return this.platformObject.createCustomAd(t);
                    }
                }, {
                    key: "getLaunchOptionsSync",
                    value: function getLaunchOptionsSync() {
                        return e.Info.isPreview || e.isPlatform([ e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Kuaidianwan, e.Platform.Hago ]) ? {
                            path: "",
                            query: {},
                            referrerInfo: {
                                appId: "",
                                extraData: {}
                            },
                            scene: 0,
                            shareTicket: ""
                        } : e.isPlatform([ e.Platform.OPPO ]) ? null != this.platformObject.getEnterOptionsSync ? this.platformObject.getEnterOptionsSync() : {
                            path: "",
                            query: {},
                            referrerInfo: {
                                appId: "",
                                extraData: {}
                            },
                            scene: 0,
                            shareTicket: ""
                        } : this.platformObject.getLaunchOptionsSync();
                    }
                }, {
                    key: "getSystemInfoSync",
                    value: function getSystemInfoSync() {
                        return null == e.Info.systemInfo && (e.Info.isPreview || e.isPlatform([ e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Kuaidianwan ]) ? e.Info.systemInfo = {
                            SDKVersion: "",
                            albumAuthorized: !1,
                            benchmarkLevel: 100,
                            bluetoothEnabled: !1,
                            brand: "Browser",
                            cameraAuthorized: !1,
                            fontSizeSetting: 0,
                            language: "zh-cn",
                            locationAuthorized: !1,
                            locationEnabled: !1,
                            microphoneAuthorized: !1,
                            model: "Browser",
                            notificationAlertAuthorized: !1,
                            notificationAuthorized: !1,
                            notificationBadgeAuthorized: !1,
                            notificationSoundAuthorized: !1,
                            pixelRatio: 1,
                            platform: "Browser",
                            screenHeight: e.Info.resolution.height,
                            screenWidth: e.Info.resolution.width,
                            statusBarHeight: 0,
                            system: "iOS",
                            version: "",
                            wifiEnabled: !1,
                            windowHeight: e.Info.resolution.height,
                            windowWidth: e.Info.resolution.width,
                            designPixelRatio: 1,
                            appName: "",
                            safeArea: {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: e.Info.resolution.width,
                                height: e.Info.resolution.height
                            }
                        } : e.Info.systemInfo = this.platformObject.getSystemInfoSync(), e.Info.systemInfo.windowHeight / e.Info.systemInfo.windowWidth < 1.5 ? e.Info.systemInfo.designPixelRatio = e.Info.resolution.height / e.Info.systemInfo.windowHeight : e.Info.systemInfo.designPixelRatio = e.Info.resolution.width / e.Info.systemInfo.windowWidth), 
                        e.Info.systemInfo;
                    }
                }, {
                    key: "exitMiniProgram",
                    value: function exitMiniProgram() {
                        var t;
                        try {
                            (null !== (t = this.platformObject.exitMiniProgram) && void 0 !== t ? t : this.platformObject.exitApplication)();
                        } catch (n) {
                            n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                            e.error(n);
                        }
                    }
                }, {
                    key: "loadSubpackage",
                    value: function loadSubpackage(t) {
                        return this.platformObject && this.platformObject.loadSubpackage ? this.platformObject.loadSubpackage(t) : (e.UnsupportLog("loadSubpackage"), 
                        null);
                    }
                }, {
                    key: "createRewardedVideoAd",
                    value: function createRewardedVideoAd(t) {
                        return e.isPlatform(e.Platform.Vivo) && (t.posId = t.adUnitId), this.platformObject.createRewardedVideoAd(t);
                    }
                }, {
                    key: "createInterstitialAd",
                    value: function createInterstitialAd(t) {
                        return e.isPlatform(e.Platform.OPPO) ? this.platformObject.createInsertAd(t) : e.isPlatform(e.Platform.Vivo) ? (t.posId = t.adUnitId, 
                        this.platformObject.createInterstitialAd(t)) : this.platformObject.createInterstitialAd(t);
                    }
                }, {
                    key: "saveAppToDesktop",
                    value: function saveAppToDesktop(t) {
                        e.isPlatform(e.Platform.QQ) && this.platformObject.saveAppToDesktop(t);
                    }
                }, {
                    key: "addColorSign",
                    value: function addColorSign(t) {
                        e.isPlatform(e.Platform.QQ) && this.platformObject.addColorSign(t);
                    }
                }, {
                    key: "addRecentColorSign",
                    value: function addRecentColorSign(t) {
                        e.isPlatform(e.Platform.QQ) && this.platformObject.addRecentColorSign(t);
                    }
                }, {
                    key: "isColorSignExistSync",
                    value: function isColorSignExistSync() {
                        return !!e.isPlatform(e.Platform.QQ) && this.platformObject.isColorSignExistSync();
                    }
                }, {
                    key: "getLanguage",
                    value: function getLanguage() {
                        return this.platformObject.getLanguage ? this.platformObject.getLanguage() : "zh-CN";
                    }
                }, {
                    key: "initGameBannerAd",
                    value: function initGameBannerAd(t, n) {
                        var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                        var i = arguments.length > 3 ? arguments[3] : undefined;
                        if (e.isPlatform(e.Platform.OPPO)) {
                            var a, r = this.platformObject.getSystemInfoSync().platformVersionCode;
                            return i || (i = {
                                left: 100 / this.getSystemInfoSync().designPixelRatio,
                                top: (e.Info.resolution.height - 200) / this.getSystemInfoSync().designPixelRatio,
                                orientation: "horizontal"
                            }), r >= 1090 && !o && n ? a = this.platformObject.createGameBannerAd({
                                adUnitId: n,
                                style: i
                            }) : r >= 1076 && (a = this.platformObject.createGameBannerAd({
                                adUnitId: t
                            })), a;
                        }
                    }
                }, {
                    key: "showInterstitialAd",
                    value: function showInterstitialAd() {
                        e.isPlatform(e.Platform.Android) ? this.platformObject.showInterstitialAd() : e.isPlatform(e.Platform.iOS) && this.platformObject.showInterstitialAd();
                    }
                }, {
                    key: "setShowToast",
                    value: function setShowToast(e) {
                        this.selfShowToast = e;
                    }
                }, {
                    key: "showToast",
                    value: function showToast(t) {
                        e.Info.isPreview || e.isPlatform([ e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago ]) ? e.log("showToast:", t.title) : this.selfShowToast ? this.selfShowToast(t) : e.isPlatform(e.Platform.Vivo) ? this.platformObject.showToast({
                            message: t.title,
                            duration: t.duration
                        }) : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.showToast(t.title) : this.platformObject.showToast(t);
                    }
                }, {
                    key: "showModal",
                    value: function showModal(t) {
                        var n, o;
                        if (e.Info.isPreview || e.isPlatform([ e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago ])) e.log("showModal:" + t.content), 
                        t.success({
                            confirm: !1 === t.showCancel,
                            cancel: 0 != t.showCancel
                        }); else {
                            if (e.isPlatform(e.Platform.Vivo)) {
                                var _e3 = [];
                                return _e3.push({
                                    text: null !== (n = t.confirmText) && void 0 !== n ? n : "确定",
                                    color: t.confirmColor
                                }), t.showCancel && _e3.push({
                                    text: null !== (o = t.cancelText) && void 0 !== o ? o : "取消",
                                    color: t.cancelColor
                                }), this.platformObject.showDialog({
                                    title: t.title,
                                    message: t.content,
                                    buttons: _e3,
                                    success: function success(e) {
                                        0 == e.index ? t.success({
                                            confirm: !0,
                                            cancel: !1
                                        }) : 1 == e.index ? t.success({
                                            confirm: !1,
                                            cancel: !0
                                        }) : t.success({
                                            confirm: !1,
                                            cancel: !1
                                        });
                                    },
                                    cancel: t.fail,
                                    complete: t.complete
                                });
                            }
                            if (!e.isPlatform(e.Platform.Kuaidianwan)) return this.platformObject.showModal(t);
                            GameAssistantWeb.showModal(t.title, t.content, t.confirmText, t.cancelText, function(e, n) {
                                t.success({
                                    confirm: e,
                                    cancel: n
                                });
                            });
                        }
                    }
                }, {
                    key: "showLoading",
                    value: function showLoading(t) {
                        if (!e.isPlatform(e.Platform.Vivo)) return this.platformObject.showLoading(t);
                        this.platformObject.showLoading({
                            message: t.title,
                            success: t.success,
                            cancel: t.fail,
                            complete: t.complete
                        });
                    }
                }, {
                    key: "getMenuButtonBoundingClientRect",
                    value: function getMenuButtonBoundingClientRect() {
                        var t;
                        return e.isPlatform(e.Platform.OPPO) ? {
                            top: this.getSystemInfoSync().statusBarHeight,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: 0,
                            height: 0
                        } : (null === (t = this.platformObject) || void 0 === t ? void 0 : t.getMenuButtonBoundingClientRect) ? this.platformObject.getMenuButtonBoundingClientRect() : {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: 0,
                            height: 0
                        };
                    }
                }, {
                    key: "shareAppMessage",
                    value: function shareAppMessage(t) {
                        return e.isPlatform(e.Platform.Vivo) ? this.platformObject.share({
                            success: t.success,
                            fail: t.fail,
                            cancel: t.fail
                        }) : (t.extra && (t.extra.hashtag_list && null == t.extra.videoTopics ? t.extra.videoTopics = t.extra.hashtag_list : t.extra.videoTopics && null == t.extra.hashtag_list && (t.extra.hashtag_list = t.extra.videoTopics)), 
                        this.platformObject.shareAppMessage(t));
                    }
                }, {
                    key: "setStorageSync",
                    value: function setStorageSync(t, n) {
                        e.isPlatform(e.Platform.Vivo) ? this.platformObject.setStorageSync({
                            key: t,
                            value: n
                        }) : e.isPlatform(e.Platform.OPPO) ? localStorage.setItem(t, n) : e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago ]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? cc.sys.localStorage.setItem(t, n) : e.isEngine(e.EngineType.LayaAir) && localStorage.setItem(t, n) : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.setStorage(t, n) : this.platformObject.setStorageSync(t, n);
                    }
                }, {
                    key: "setStorage",
                    value: function setStorage(t) {
                        var n;
                        if (e.isPlatform(e.Platform.Vivo)) return this.platformObject.setStorage({
                            key: t.key,
                            value: t.data,
                            success: t.success,
                            fail: t.fail,
                            complete: t.complete
                        });
                        if (e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago ]) || e.Info.isPreview) {
                            if (e.isEngine(e.EngineType.CocosCreator)) {
                                cc.sys.localStorage.setItem(t.key, t.data);
                                try {
                                    t.success();
                                } catch (o) {}
                            } else if (e.isEngine(e.EngineType.LayaAir)) {
                                localStorage.setItem(t.key, t.data);
                                try {
                                    t.success();
                                } catch (i) {}
                            }
                        } else {
                            if (!e.isPlatform(e.Platform.Kuaidianwan)) return this.platformObject.setStorage(t);
                            GameAssistantWeb.setStorage(t.key, t.data), null === (n = t.success) || void 0 === n || n.call(t);
                        }
                    }
                }, {
                    key: "removeStorageSync",
                    value: function removeStorageSync(t) {
                        if (e.isPlatform(e.Platform.Vivo)) return this.platformObject.deleteStorageSync({
                            key: t
                        });
                        if (e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago ]) || e.Info.isPreview) e.isEngine(e.EngineType.CocosCreator) ? cc.sys.localStorage.removeItem(t) : e.isEngine(e.EngineType.LayaAir) && localStorage.removeItem(t); else {
                            if (!e.isPlatform(e.Platform.Kuaidianwan)) return this.platformObject.removeStorageSync(t);
                            GameAssistantWeb.removeStorage(t);
                        }
                    }
                }, {
                    key: "removeStorage",
                    value: function removeStorage(t) {
                        var n;
                        if (e.isPlatform(e.Platform.Vivo)) return this.platformObject.deleteStorage(t);
                        if (e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago ]) || e.Info.isPreview) {
                            if (e.isEngine(e.EngineType.CocosCreator)) {
                                cc.sys.localStorage.removeItem(t.key);
                                try {
                                    t.success();
                                } catch (o) {}
                            } else if (e.isEngine(e.EngineType.LayaAir)) {
                                localStorage.removeItem(t.key);
                                try {
                                    t.success();
                                } catch (i) {}
                            }
                        } else {
                            if (!e.isPlatform(e.Platform.Kuaidianwan)) return this.platformObject.removeStorage(t);
                            GameAssistantWeb.removeStorage(t.key), null === (n = t.success) || void 0 === n || n.call(t);
                        }
                    }
                }, {
                    key: "getStorageSync",
                    value: function getStorageSync(t) {
                        return e.isPlatform(e.Platform.Vivo) ? this.platformObject.getStorageSync({
                            key: t
                        }) : e.isPlatform(e.Platform.OPPO) ? localStorage.getItem(t) : e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago ]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? cc.sys.localStorage.getItem(t) : e.isEngine(e.EngineType.LayaAir) ? localStorage.getItem(t) : void 0 : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.getStorage(t) : e.isPlatform(e.Platform.Hago) ? null : this.platformObject.getStorageSync(t);
                    }
                }, {
                    key: "getStorage",
                    value: function getStorage(t) {
                        var n;
                        if (this.platformObject.getStorage) return this.platformObject.getStorage(t);
                        if (e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.ZuiYou, e.Platform.Hago ]) || e.Info.isPreview) {
                            if (e.isEngine(e.EngineType.CocosCreator)) try {
                                t.success(cc.sys.localStorage.getItem(t.key));
                            } catch (o) {} else if (e.isEngine(e.EngineType.LayaAir)) try {
                                t.success(localStorage.getItem(t.key));
                            } catch (i) {}
                        } else if (e.isPlatform(e.Platform.Kuaidianwan)) null === (n = t.success) || void 0 === n || n.call(t, GameAssistantWeb.getStorage(t.key)); else try {
                            t.success("");
                        } catch (a) {}
                    }
                }, {
                    key: "navigateToMiniProgram",
                    value: function navigateToMiniProgram(e) {
                        var t, n;
                        e.pkgName = null !== (t = e.pkgName) && void 0 !== t ? t : e.appId, (null !== (n = this.platformObject.navigateToMiniGame) && void 0 !== n ? n : this.platformObject.navigateToMiniProgram)(e);
                    }
                }, {
                    key: "getUserInfo",
                    value: function getUserInfo(t) {
                        return e.isPlatform(e.Platform.Vivo) ? this.platformObject.getUserInfo({
                            success: function success(e) {
                                try {
                                    t.success({
                                        userInfo: {
                                            nickName: e.data.nickName,
                                            avatarUrl: e.data.biggerAvatar,
                                            gender: 1 == e.data.gender ? "1" : 2 == e.data.gender ? "2" : "0",
                                            country: "",
                                            province: "",
                                            city: "",
                                            language: "zh_CN"
                                        },
                                        rawData: "",
                                        signature: "",
                                        encryptedData: "",
                                        iv: "",
                                        cloudID: ""
                                    });
                                } catch (n) {
                                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                                    console.error(n);
                                }
                            },
                            fail: t.fail
                        }) : this.platformObject.getUserInfo(t);
                    }
                }, {
                    key: "login",
                    value: function login(t) {
                        return e.isPlatform(e.Platform.Vivo) ? this.platformObject.login({
                            success: function success(e) {
                                try {
                                    t.success({
                                        code: e.data.token
                                    });
                                } catch (n) {
                                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                                    console.error(n);
                                }
                            },
                            fail: t.fail
                        }) : e.isPlatform(e.Platform.QuTouTiao) ? this.platformObject.qttlogin(t) : this.platformObject.login(t);
                    }
                }, {
                    key: "checkIsUserAdvisedToRest",
                    value: function checkIsUserAdvisedToRest(t) {
                        var _this3 = this;
                        e.isPlatform(e.Platform.WeChat) && this.platformObject.checkIsUserAdvisedToRest({
                            todayPlayedTime: t,
                            success: function success(e) {
                                e.result && _this3.showModal({
                                    title: "防沉迷提示",
                                    content: "你今日的游戏在线时长已达上限，或当前时段为未成年登陆限制时间段，您将无法继续游戏。",
                                    showCancel: !1,
                                    confirmText: "退出游戏",
                                    success: function success() {
                                        _this3.exitMiniProgram();
                                    }
                                });
                            }
                        });
                    }
                }, {
                    key: "setOrientation",
                    value: function setOrientation(t) {
                        e.isPlatform(e.Platform.YueYou) && Yzsdk.setOrientation(t);
                    }
                }, {
                    key: "setFullScreen",
                    value: function setFullScreen(t) {
                        e.isPlatform(e.Platform.YueYou) && Yzsdk.setFullScreen(t);
                    }
                }, {
                    key: "initYueYou",
                    value: function initYueYou() {
                        e.isPlatform(e.Platform.YueYou) && Yzsdk.init();
                    }
                }, {
                    key: "getAuthCode",
                    value: function getAuthCode(t, n, o) {
                        e.isPlatform(e.Platform.YueYou) && Yzsdk.getAuthCode(t, n, o);
                    }
                }, {
                    key: "openGameAd",
                    value: function openGameAd(t, n, o, i, a, r) {
                        e.isPlatform(e.Platform.YueYou) && Yzsdk.openGameAd(t, n, o, i, a, r);
                    }
                }, {
                    key: "addViewStateListener",
                    value: function addViewStateListener(t) {
                        e.isPlatform(e.Platform.YueYou) && Yzsdk.addViewStateListener(t);
                    }
                }, {
                    key: "removeViewStateListener",
                    value: function removeViewStateListener() {
                        e.isPlatform(e.Platform.YueYou) && Yzsdk.removeViewStateListener();
                    }
                }, {
                    key: "screenWidth",
                    value: function screenWidth() {
                        return e.isPlatform(e.Platform.YueYou) ? Yzsdk.screenWidth() : 0;
                    }
                }, {
                    key: "screenHeight",
                    value: function screenHeight() {
                        return e.isPlatform(e.Platform.YueYou) ? Yzsdk.screenHeight() : 0;
                    }
                }, {
                    key: "joinVoIPChat",
                    value: function joinVoIPChat(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.joinVoIPChat) ? wx.joinVoIPChat(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.joinVoIPChat) && qg.joinVoIPChat(t);
                    }
                }, {
                    key: "exitVoIPChat",
                    value: function exitVoIPChat(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.exitVoIPChat) ? wx.exitVoIPChat(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.exitVoIPChat) && qg.exitVoIPChat(t);
                    }
                }, {
                    key: "updateVoIPChatMuteConfig",
                    value: function updateVoIPChatMuteConfig(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.updateVoIPChatMuteConfig) ? wx.updateVoIPChatMuteConfig(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.updateVoIPChatMuteConfig) && qg.updateVoIPChatMuteConfig(t);
                    }
                }, {
                    key: "onVoIPChatSpeakersChanged",
                    value: function onVoIPChatSpeakersChanged(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.onVoIPChatSpeakersChanged) ? wx.onVoIPChatSpeakersChanged(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.onVoIPChatSpeakersChanged) && qg.onVoIPChatSpeakersChanged(t);
                    }
                }, {
                    key: "onVoIPChatMembersChanged",
                    value: function onVoIPChatMembersChanged(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.onVoIPChatMembersChanged) ? wx.onVoIPChatMembersChanged(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.onVoIPChatMembersChanged) && qg.onVoIPChatMembersChanged(t);
                    }
                }, {
                    key: "onVoIPChatInterrupted",
                    value: function onVoIPChatInterrupted(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.onVoIPChatInterrupted) ? wx.onVoIPChatInterrupted(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.onVoIPChatInterrupted) && qg.onVoIPChatInterrupted(t);
                    }
                }, {
                    key: "offVoIPChatSpeakersChanged",
                    value: function offVoIPChatSpeakersChanged(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.offVoIPChatSpeakersChanged) ? wx.offVoIPChatSpeakersChanged(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.offVoIPChatSpeakersChanged) && qg.offVoIPChatSpeakersChanged(t);
                    }
                }, {
                    key: "offVoIPChatMembersChanged",
                    value: function offVoIPChatMembersChanged(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.offVoIPChatMembersChanged) ? wx.offVoIPChatMembersChanged(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.offVoIPChatMembersChanged) && qg.offVoIPChatMembersChanged(t);
                    }
                }, {
                    key: "offVoIPChatInterrupted",
                    value: function offVoIPChatInterrupted(t) {
                        e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.offVoIPChatInterrupted) ? wx.offVoIPChatInterrupted(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.offVoIPChatInterrupted) && qg.offVoIPChatInterrupted(t);
                    }
                }, {
                    key: "isRewardVideoAdReady",
                    value: function isRewardVideoAdReady() {
                        return !!e.isPlatform([ e.Platform.iOS, e.Platform.Android ]) && this.platformObject.isRewardVideoAdReady();
                    }
                }, {
                    key: "getDeviceId",
                    value: function getDeviceId(t) {
                        e.Info.isPreview ? t.success({
                            deviceId: "testdeviceId"
                        }) : null != this.platformObject.getDeviceId && this.platformObject.getDeviceId({
                            success: t.success,
                            fail: t.fail
                        });
                    }
                } ]);
                return _class3;
            }();
        }(n || (n = {})), function(e) {
            var t = /* */ function() {
                function t(e) {
                    _classCallCheck2(this, t);
                    this.seed = e, this.seed || 0 == this.seed || (this.seed = new Date().getTime());
                }
                _createClass2(t, [ {
                    key: "value",
                    get: function get() {
                        return this.range(0, 1);
                    }
                }, {
                    key: "range",
                    value: function range(e, _t8) {
                        return e >= _t8 ? e : (this.seed || 0 == this.seed || (this.seed = new Date().getTime()), 
                        _t8 = _t8 || 1, e = e || 0, this.seed = (9301 * this.seed + 49297) % 233280, e + this.seed / 233280 * (_t8 - e));
                    }
                }, {
                    key: "rangeInt",
                    value: function rangeInt(e, _t9) {
                        if (e >= _t9) return e;
                        if (_t9 - e >= 233280) return 0;
                        this.seed || 0 == this.seed || (this.seed = new Date().getTime()), _t9 = _t9 || 1, 
                        e = e || 0, this.seed = (9301 * this.seed + 49297) % 233280;
                        var n = this.seed / 233280;
                        return e + Math.floor(n * (_t9 - e + .9));
                    }
                } ], [ {
                    key: "internalInstance",
                    get: function get() {
                        return null == this._internalInstance && (this._internalInstance = new t()), this._internalInstance;
                    }
                }, {
                    key: "value",
                    get: function get() {
                        return this.internalInstance.range(0, 1);
                    }
                }, {
                    key: "range",
                    value: function range(e, _t10) {
                        return this.internalInstance.range(e, _t10);
                    }
                }, {
                    key: "rangeInt",
                    value: function rangeInt(e, _t11) {
                        return this.internalInstance.rangeInt(e, _t11);
                    }
                } ]);
                return t;
            }();
            t._internalInstance = null, e.Random = t;
        }(n || (n = {})), function(e) {
            function n(t) {
                return t instanceof Array ? t.indexOf(e.Info.platform) >= 0 : e.Info.platform == t;
            }
            function o(t) {
                return t instanceof Array ? t.indexOf(e.Info.distributionChannel) >= 0 : e.Info.distributionChannel == t;
            }
            function i(t) {
                return t instanceof Array ? t.indexOf(e.Info.engine) >= 0 : e.Info.engine == t;
            }
            function a() {
                var _console;
                for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
                    t[_key] = arguments[_key];
                }
                e.Info.debugLog && (i(e.EngineType.LayaAir) && n([ e.Platform.iOS, e.Platform.Android ]) ? console.log("GA:" + t.join(",")) : (_console = console).log.apply(_console, [ "GA:" ].concat(t)));
            }
            function r() {
                var _console2;
                for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    t[_key2] = arguments[_key2];
                }
                i(e.EngineType.LayaAir) && n([ e.Platform.iOS, e.Platform.Android ]) ? console.warn("GA:" + t.join(",")) : (_console2 = console).warn.apply(_console2, [ "GA:" ].concat(t));
            }
            function s(t) {
                if (!n(e.Platform.M4399MiniGame) && !e.Info.forbidHttpRequest) {
                    if (e.PA && e.PA.request && !n([ e.Platform.Vivo, e.Platform.Hago ])) return t.header = {
                        appid: e.Info.appId
                    }, e.PA.request(t);
                    {
                        var _o6 = new XMLHttpRequest();
                        _o6.onreadystatechange = function() {
                            if (4 == _o6.readyState) {
                                var _n9 = _o6.responseText, _i6 = {
                                    data: "",
                                    statusCode: _o6.status,
                                    header: {},
                                    errMsg: _o6.getAllResponseHeaders()
                                };
                                try {
                                    var _t12 = JSON.parse(_n9);
                                    _i6.data = _t12;
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    _i6.data = _o6.responseText;
                                }
                                _o6.status >= 200 && _o6.status < 400 ? "function" == typeof t.success && t.success(_i6) : (r('request fail with url : "'.concat(t.url, '"')), 
                                "function" == typeof t.fail && t.fail(_i6));
                            }
                        }, _o6.onerror = function() {
                            t.fail && t.fail({
                                errMsg: "request onerror"
                            });
                        }, _o6.onabort = function() {
                            t.fail && t.fail({
                                errMsg: "request onabort"
                            });
                        }, void 0 === t.method && (t.method = "GET"), _o6.open(t.method, t.url, !0), n(e.Platform.Hago) ? _o6.setRequestHeader("Content-Type", "application/json;charset=utf-8") : _o6.setRequestHeader("Content-type", "application/json;charset=utf-8"), 
                        _o6.setRequestHeader("appid", e.Info.appId), void 0 === t.data ? _o6.send() : _o6.send(JSON.stringify(t.data));
                    }
                }
            }
            e.isPlatform = n, e.isDistributionChannel = o, e.isEngine = i, e.log = a, e.warn = r, 
            e.error = function() {
                var _console3;
                for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    t[_key3] = arguments[_key3];
                }
                i(e.EngineType.LayaAir) && n([ e.Platform.iOS, e.Platform.Android ]) ? console.error("GA:" + t.join(",")) : (_console3 = console).error.apply(_console3, [ "GA:" ].concat(t));
            }, e.UnsupportLog = function(t) {
                r("当前平台 " + e.Info.platform + " 暂不支持 " + t);
            }, e.request = s;
            var c = new Map();
            function l(i, r) {
                "onlinetime" != i[0].eventId && a("sentLogs:" + JSON.stringify(i)), i.forEach(function(e) {
                    try {
                        var _n10 = null != e.detail && "" != e.detail ? JSON.parse(e.detail) : {};
                        c.forEach(function(e, t) {
                            null == _n10[t] && (_n10[t] = e);
                        }), null != e.extraNum && (_n10.extraNum = e.extraNum), e.detail = JSON.stringify(_n10);
                    } catch (t) {}
                }), (n([ e.Platform.Android ]) || n(e.Platform.iOS)) && i.forEach(function(e) {
                    var n;
                    if ("onlinetime" != e.eventId) try {
                        t.PROXY.sendEvent(e.eventId, null !== (n = e.detail) && void 0 !== n ? n : "{}");
                    } catch (o) {
                        o = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(o);
                        console.error(o);
                    }
                }), o([ e.DistributionChannel.GooglePlay, e.DistributionChannel.AppStoreWorld ]) || e.request({
                    url: e.Urls.SaveLog,
                    data: {
                        appid: e.Info.appId,
                        uuid: e.Info.openId,
                        list: i,
                        channel: e.Info.channelId,
                        device: wx.getSystemInfoSync().model
                    },
                    method: "POST",
                    success: function success() {
                        try {
                            r();
                        } catch (e) {}
                    }
                });
            }
            e.addEventDefaultProperty = function(e) {
                for (var _t13 in e) {
                    c.has(_t13) || c.set(_t13, e[_t13]);
                }
            }, e.sentLogs = l, e.sentLog = function(e, t, n, o) {
                l([ {
                    eventId: e,
                    detail: n ? JSON.stringify(n) : "",
                    extraNum: t || 0
                } ], o);
            }, e.betweenNum = function(e, t, n) {
                return Math.min(n, Math.max(t, e));
            }, e.isiPhoneX = function() {
                var t = e.PA.getSystemInfoSync().model;
                return -1 != t.indexOf("iPhone X") || -1 != t.indexOf("iPhone12") || -1 != t.indexOf("iPhone13");
            }, e.isLongScreen = function() {
                var t = e.PA.getSystemInfoSync();
                return t.windowHeight > t.windowWidth ? t.windowHeight / t.windowWidth > 1.8 : t.windowWidth / t.windowHeight > 1.8;
            }, e.isPad = function() {
                var t = e.PA.getSystemInfoSync();
                return t.windowHeight > t.windowWidth ? t.windowHeight / t.windowWidth < 1.55 : t.windowWidth / t.windowHeight < 1.55;
            }, e.isiPad = function() {
                return -1 != e.PA.getSystemInfoSync().model.indexOf("iPad");
            }, e.isToday = function(e) {
                return Math.floor(e / 864e5) == Math.floor(Date.now() / 864e5);
            }, e.formatNumber = function(e) {
                if (e < 1e4) return e.toFixed();
                if (e < 1e6) return (e / 1e3).toFixed(1) + "K";
                if (e < 1e9) return (e / 1e3 / 1e3).toFixed(1) + "M";
                if (e < 1e12) return (e / 1e3 / 1e3 / 1e3).toFixed(1) + "B";
                if (e < 1e15) return (e / 1e3 / 1e3 / 1e3 / 1e3).toFixed(1) + "T";
                {
                    var _t14 = Math.round(e).toString(), _n11 = _t14.indexOf("e+");
                    if (_n11 > 0) {
                        var _e4 = _t14.substr(_n11 + 2);
                        return _t14.substr(0, 4) + "E" + _e4;
                    }
                    {
                        var _t15 = Math.round(e).toString().length - 1;
                        return (e / Math.pow(10, _t15)).toFixed(1) + "E" + _t15;
                    }
                }
            }, e.formatTime = function(e) {
                var t = Math.floor(e / 3600), n = Math.floor((e - 3600 * t) / 60), o = Math.floor(e % 60), i = "";
                return t > 0 && (i = (t < 10 ? "0" : "") + t.toFixed() + ":"), i + (n < 10 ? "0" : "") + n.toFixed() + ":" + (o < 10 ? "0" : "") + o.toFixed();
            }, e.rand = function(e, t) {
                var n = Math.floor(e + Math.random() * (t - e + 1));
                return n = Math.min(n, t), Math.max(n, e);
            }, e.randFloat = function(e, t) {
                return e + Math.random() * (t - e);
            }, e.saveRedirect = function(t, n, o) {
                var i = {
                    Openid: e.Info.openId,
                    Channel: e.Info.channelId,
                    Appid: e.Info.appId,
                    Type: t,
                    TargetAppid: "",
                    Path: ""
                };
                "string" == typeof n ? (i.TargetAppid = n, i.Path = o) : (i.TargetAppid = n.appid, 
                i.Path = n.path, s({
                    url: e.Urls.SaveRedirect,
                    data: {
                        userId: e.Info.uid,
                        redirectId: n.id
                    },
                    method: "POST",
                    success: function success() {}
                })), s({
                    url: e.Urls.SaveRedirect,
                    data: i,
                    method: "POST",
                    success: function success() {
                        console.log("Navigate to ", i);
                    }
                });
            }, e.loadServerConfig = function() {
                return new Promise(function(t, n) {
                    e.request({
                        url: e.Urls.GameConfig + "?userId=" + e.Info.uid,
                        method: "POST",
                        data: [],
                        success: function success(e) {
                            var o;
                            0 == (null === (o = null == e ? void 0 : e.data) || void 0 === o ? void 0 : o.code) ? t(e.data.data) : n(e.data);
                        },
                        fail: function fail(e) {
                            n(e);
                        }
                    });
                });
            };
        }(n || (n = {})), function(e) {
            e.version = "1.0.118", e.buildTime = "2022-8-10 20:25:41";
        }(n || (n = {})), function(e) {
            var t;
            (function(e) {
                e[e.Invalid = 0] = "Invalid", e[e.Loaded = 1] = "Loaded", e[e.Error = 2] = "Error", 
                e[e.Shown = 3] = "Shown", e[e.Hidden = 4] = "Hidden";
            })(t || (t = {}));
            var n = new (/* */ function() {
                function _class4() {
                    _classCallCheck2(this, _class4);
                    this.initOptions = new Map(), this.showOptions = new Map(), this.ads = new Map(), 
                    this.status = new Map(), this.showCount = new Map(), this.sizes = new Map(), this.tryShowCount = 0;
                }
                _createClass2(_class4, [ {
                    key: "initBannerAd",
                    value: function initBannerAd(n) {
                        var _this4 = this;
                        var o;
                        var i, a = null !== (o = null == (i = Array.isArray(n) ? n[0] : n) ? void 0 : i.adTag) && void 0 !== o ? o : "Banner";
                        this.initOptions.set(a, i), this.status.set(a, t.Invalid);
                        var r, s = e.PA.getSystemInfoSync(), c = 0;
                        c = e.isPlatform([ e.Platform.WeChat ]) ? s.screenWidth > s.screenHeight ? 300 / s.designPixelRatio : s.screenWidth : Math.min(s.screenWidth, s.screenHeight), 
                        r = e.isPlatform([ e.Platform.Vivo ]) ? {
                            posId: i.adId,
                            adIntervals: null == i ? void 0 : i.adIntervals,
                            style: {}
                        } : {
                            adUnitId: "adunit-f2663cfbe1d29fa3",
                            adIntervals: null == i ? void 0 : i.adIntervals,
                            style: {
                                left: 0,
                                top: 0,
                                width: c
                            }
                        };
                        var l = e.PA.createBannerAd(r);
                        this.ads.set(a, l), l.onLoad(function() {
                            _this4.status.set(a, t.Loaded);
                        }), l.onError(function(n) {
                            _this4.status.set(a, t.Error), e.warn("banner onError:", n);
                        }), e.isPlatform([ e.Platform.Vivo ]) || l.onResize(function(e) {
                            _this4.sizes.set(a, {
                                width: e.width,
                                height: e.height
                            }), _this4.updateBannerPosition(a);
                        });
                    }
                }, {
                    key: "tryInitBannerAd",
                    value: function tryInitBannerAd(n) {
                        var _this5 = this;
                        var o, i, a;
                        var r = null !== (o = n.initOption.adTag) && void 0 !== o ? o : "Banner";
                        this.status.set(r, t.Invalid);
                        var s, c = e.PA.getSystemInfoSync(), l = 0;
                        l = e.isPlatform([ e.Platform.WeChat ]) ? c.screenWidth > c.screenHeight ? 300 / c.designPixelRatio : c.screenWidth : Math.min(c.screenWidth, c.screenHeight), 
                        s = e.isPlatform([ e.Platform.Vivo ]) ? {
                            posId: n.initOption.adId,
                            adIntervals: null === (i = n.initOption) || void 0 === i ? void 0 : i.adIntervals,
                            style: {
                                left: 0,
                                top: (e.Info.resolution.height - 100) / e.PA.getSystemInfoSync().designPixelRatio
                            }
                        } : {
                            adUnitId: "adunit-f2663cfbe1d29fa3",
                            adIntervals: null === (a = n.initOption) || void 0 === a ? void 0 : a.adIntervals,
                            style: {
                                left: 0,
                                top: 0,
                                width: l
                            }
                        };
                        var d = e.PA.createBannerAd(s);
                        this.ads.set(r, d), d.onLoad(function() {
                            _this5.status.set(r, t.Loaded), n.success();
                        }), d.onError(function(n) {
                            _this5.status.set(r, t.Error), e.warn("banner onError:", n);
                        }), e.isPlatform([ e.Platform.Vivo ]) || d.onResize(function(e) {
                            _this5.sizes.set(r, {
                                width: e.width,
                                height: e.height
                            }), _this5.updateBannerPosition(r);
                        });
                    }
                }, {
                    key: "updateBannerPosition",
                    value: function updateBannerPosition(t) {
                        var n, o;
                        if (e.isPlatform([ e.Platform.Vivo ])) return;
                        var i = this.showOptions.get(t), a = this.ads.get(t), r = this.sizes.get(t);
                        if (!a || !r) return;
                        var s = e.PA.getSystemInfoSync(), c = 0, l = 0;
                        c = null != (null === (n = null == i ? void 0 : i.style) || void 0 === n ? void 0 : n.offsetX) ? i.style.offsetX : (s.windowWidth - r.width) / 2, 
                        l = null != (null === (o = null == i ? void 0 : i.style) || void 0 === o ? void 0 : o.offsetY) ? s.windowHeight - r.height - i.style.offsetY : s.windowHeight - r.height, 
                        a.style.left = c, a.style.top = l, e.log("update banner position left:".concat(c, " top:").concat(l));
                    }
                }, {
                    key: "showBanner",
                    value: function showBanner(n) {
                        var _this6 = this;
                        var o, i, a, r;
                        this.tryShowCount++;
                        var s = null !== (o = null == n ? void 0 : n.adTag) && void 0 !== o ? o : "Banner", c = this.sizes.get(s), l = wx.getSystemInfoSync();
                        if (this.showOptions.set(s, n), this.ads.has(s)) {
                            var d = this.ads.get(s), u = 0;
                            if (u = (null === (i = null == n ? void 0 : n.style) || void 0 === i ? void 0 : i.width) ? n.style.width : e.isPlatform([ e.Platform.WeChat ]) ? l.screenWidth > l.screenHeight ? 300 / l.designPixelRatio : l.screenWidth : Math.min(l.screenWidth, l.screenHeight), 
                            e.isPlatform([ e.Platform.Vivo ]) || (d.style.width = u), (null == c ? void 0 : c.width) != u && null == (null === (a = null == n ? void 0 : n.style) || void 0 === a ? void 0 : a.offsetX) && null == (null === (r = null == n ? void 0 : n.style) || void 0 === r ? void 0 : r.offsetY) || this.updateBannerPosition(s), 
                            this.status.get(s) == t.Shown) return void (this.tryShowCount = 0);
                            d.show().then(function() {
                                _this6.tryShowCount = 0, _this6.status.set(s, t.Shown);
                            }).catch(function() {
                                try {
                                    _this6.tryShowCount > 1 ? (_this6.tryShowCount = 0, null == n || n.fail()) : _this6.tryInitBannerAd({
                                        initOption: _this6.initOptions.get(s),
                                        success: function success() {
                                            _this6.showBanner(n);
                                        }
                                    });
                                } catch (o) {}
                            });
                        } else this.tryShowCount = 0, e.warn("显示banner失败,广告标签".concat(s, "不存在"));
                    }
                }, {
                    key: "hideBanner",
                    value: function hideBanner(e) {
                        var n;
                        var o = null != e ? e : "Banner";
                        try {
                            if (this.ads.has(o)) {
                                this.showCount.has(o) ? this.showCount.set(o, this.showCount.get(o) + 1) : this.showCount.set(o, 1);
                                var _e5 = this.showCount.get(o), i = this.ads.get(o), a = null === (n = this.initOptions.get(o)) || void 0 === n ? void 0 : n.validTimes;
                                i && (_e5 && a && _e5 >= a ? i.destroy && (this.showCount.delete(o), i.destroy(), 
                                this.status.set(o, t.Invalid), this.initBannerAd(this.initOptions.get(o))) : i.hide && (i.hide(), 
                                this.status.set(o, t.Hidden)));
                            }
                        } catch (i) {
                            i = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(i);
                            i(i);
                        }
                    }
                }, {
                    key: "hideAllBanner",
                    value: function hideAllBanner() {}
                }, {
                    key: "resumeShowBanner",
                    value: function resumeShowBanner() {}
                }, {
                    key: "clearAllBanner",
                    value: function clearAllBanner() {}
                }, {
                    key: "isExistBanner",
                    value: function isExistBanner(e) {
                        return !(!this.ads.has(e) || this.status.get(e) != t.Loaded && this.status.get(e) != t.Shown && this.status.get(e) != t.Hidden);
                    }
                }, {
                    key: "getBannerSize",
                    value: function getBannerSize(e) {
                        var t = null != e ? e : "Banner";
                        return this.sizes.get(t);
                    }
                } ]);
                return _class4;
            }())();
            e.initBannerAd = function(t) {
                e.isPlatform([ e.Platform.Android ]) || null == n || n.initBannerAd(t);
            }, e.showBanner = function(t) {
                var o, i, a, r, s, c, l, d;
                if (e.isPlatform([ e.Platform.Android, e.Platform.iOS ])) {
                    var _n12 = null !== (i = null === (o = null == t ? void 0 : t.style) || void 0 === o ? void 0 : o.offsetX) && void 0 !== i ? i : 0, u = null !== (r = null === (a = null == t ? void 0 : t.style) || void 0 === a ? void 0 : a.offsetY) && void 0 !== r ? r : 0, h = null !== (c = null === (s = null == t ? void 0 : t.style) || void 0 === s ? void 0 : s.width) && void 0 !== c ? c : 0, f = null !== (d = null === (l = null == t ? void 0 : t.style) || void 0 === l ? void 0 : l.height) && void 0 !== d ? d : 0;
                    e.PA.showBanner(_n12, u, h, f);
                } else e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.showBanner() : null == n || n.showBanner(t);
            }, e.hideBanner = function(t) {
                e.isPlatform([ e.Platform.Android, e.Platform.iOS ]) ? e.PA.hideBanner() : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.hideBanner() : null == n || n.hideBanner(t);
            }, e.hideAllBanner = function() {
                e.isPlatform([ e.Platform.Android ]) ? e.PA.hideAllBanner() : e.isPlatform(e.Platform.iOS) || null == n || n.hideAllBanner();
            }, e.resumeShowBanner = function() {
                e.isPlatform([ e.Platform.Android ]) ? e.PA.resumeShowBanner() : e.isPlatform(e.Platform.iOS) || null == n || n.resumeShowBanner();
            }, e.clearAllBanner = function() {
                e.isPlatform([ e.Platform.Android ]) ? e.PA.clearAllBanner() : e.isPlatform(e.Platform.iOS) || null == n || n.clearAllBanner();
            }, e.isExistBanner = function(e) {
                return null == n ? void 0 : n.isExistBanner(e);
            }, e.getBannerSize = function(e) {
                return n.getBannerSize(e);
            };
        }(n || (n = {})), function(e) {
            var t;
            (function(e) {
                e[e.Invalid = 0] = "Invalid", e[e.Loaded = 1] = "Loaded", e[e.Error = 2] = "Error";
            })(t || (t = {}));
            var n = new (/* */ function() {
                function _class5() {
                    _classCallCheck2(this, _class5);
                    this.initOptions = new Map(), this.ads = new Map();
                }
                _createClass2(_class5, [ {
                    key: "init",
                    value: function init(e) {
                        var _this7 = this;
                        e.forEach(function(e) {
                            var n;
                            _this7.initOptions.set(e.adTag, {
                                adTag: e.adTag,
                                adId: e.adId,
                                validTimes: null !== (n = e.validTimes) && void 0 !== n ? n : 1,
                                showTimes: 0,
                                isShow: !1,
                                status: t.Invalid
                            });
                        });
                    }
                }, {
                    key: "setValidTimes",
                    value: function setValidTimes(e, t) {
                        var n = this.initOptions.get(e);
                        n && (n.validTimes = t);
                    }
                }, {
                    key: "createAd",
                    value: function createAd(n) {
                        var o = this.initOptions.get(n.adTag);
                        if (o) {
                            var i = e.PA.createCustomAd({
                                adUnitId: "adunit-66e42c1eab39605c",
                                adIntervals: o.adIntervals,
                                style: n.style
                            });
                            return i && (this.ads.has(o.adTag) && this.remove(o.adTag), this.ads.set(o.adTag, i), 
                            i.onError(function(i) {
                                e.warn("CustomAd error:", i), o.status = t.Error, n.fail && n.fail();
                            }), i.onLoad(function() {
                                e.log("CustomAd onLoad"), o.status = t.Loaded, o.isShow && i.show();
                            }), i.onHide(function() {
                                n.onHide && n.onHide();
                            })), i;
                        }
                        return e.warn("创建CustomAd失败,广告标签".concat(n.adTag, "不存在")), null;
                    }
                }, {
                    key: "show",
                    value: function show(n) {
                        var o = this.initOptions.get(n.adTag);
                        o ? (o.status == t.Error && (e.warn("无效原生模版广告,重新加载."), this.remove(n.adTag)), o.showTimes++, 
                        o.isShow = !0, this.ads.has(n.adTag) ? this.ads.get(n.adTag).show().then(function() {
                            e.log("CustomAd show success.");
                        }).catch(function(t) {
                            e.warn("CustomAd show fail.", t), n.fail && n.fail();
                        }) : e.Info.isPreview || this.createAd(n)) : e.warn("显示CustomAd失败,广告标签".concat(n.adTag, "不存在"));
                    }
                }, {
                    key: "hide",
                    value: function hide(e) {
                        var t = this.initOptions.get(e);
                        t && (t.isShow = !1, t.showTimes >= t.validTimes ? this.remove(e) : this.ads.has(e) && this.ads.get(e).hide());
                    }
                }, {
                    key: "isExistCustomAd",
                    value: function isExistCustomAd(e) {
                        return !(!this.ads.has(e) || this.initOptions.get(e).status != t.Loaded);
                    }
                }, {
                    key: "remove",
                    value: function remove(e) {
                        if (this.ads.has(e)) {
                            this.ads.get(e).destroy(), this.ads.delete(e);
                            var _n13 = this.initOptions.get(e);
                            _n13.status = t.Invalid, _n13.isShow = !1, _n13.showTimes = 0;
                        }
                    }
                } ]);
                return _class5;
            }())();
            e.initCustomAds = function(t) {
                e.Info.isPreview ? e.log("当前平台：" + e.Info.platform + "暂不支持原生模版广告") : n.init(t);
            }, e.setCustomAdValidTimes = function(t, o) {
                e.Info.isPreview || n.setValidTimes(t, o);
            }, e.createCustomAd = function(t) {
                e.Info.isPreview || n.createAd(t);
            }, e.showCustomAd = function(t) {
                e.Info.isPreview || n.show(t);
            }, e.hideCustomAd = function(t) {
                e.Info.isPreview || n.hide(t);
            }, e.isExistCustomAd = function(t) {
                if (!e.Info.isPreview) return n.isExistCustomAd(t);
            }, e.clearCustomAd = function(t) {
                e.Info.isPreview || n.remove(t);
            };
        }(n || (n = {})), function(e) {
            var t = new (/* */ function() {
                function _class6() {
                    _classCallCheck2(this, _class6);
                }
                return _class6;
            }())();
            e.showFullScreenVideoAd = function() {
                e.Info.isPreview || (e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.showFullScreenVideoAd() : e.PA.showFullScreenVideoAd());
            }, e.setFullScreenVideoAdPlayCallback = function(e) {
                t.playCallback = e;
            }, e.invokeFullScreenVideoAdPlayCallback = function(e) {
                var n;
                null === (n = null == t ? void 0 : t.playCallback) || void 0 === n || n.call(t, e);
            };
        }(n || (n = {})), function(e) {
            var t = new (/* */ function() {
                function _class7() {
                    _classCallCheck2(this, _class7);
                }
                _createClass2(_class7, [ {
                    key: "initGameBannerAd",
                    value: function initGameBannerAd(t, n) {
                        e.isPlatform([ e.Platform.Vivo, e.Platform.OPPO ]) && !e.Info.isPreview ? (n || (n = {
                            left: 100 / e.PA.getSystemInfoSync().designPixelRatio,
                            top: (e.Info.resolution.height - 200) / e.PA.getSystemInfoSync().designPixelRatio,
                            orientation: "horizontal"
                        }), e.isOPPO() ? this.gameBannerAd = e.PA.createGameBannerAd({
                            adUnitId: "adunit-f2663cfbe1d29fa3",
                            style: n
                        }) : e.isVivo() && (this.gameBannerAd = e.PA.createBoxBannerAd({
                            posId: t
                        })), this.gameBannerAd.onError(function(t) {
                            e.log("GameBannerAd error:", t);
                        }), this.gameBannerAd.onLoad(function() {
                            e.log("GameBannerAd loaded");
                        })) : e.Info.isPreview || e.log("当前平台：" + e.Info.platform + "暂不支持互推横幅广告");
                    }
                }, {
                    key: "showGameBannerAd",
                    value: function showGameBannerAd() {
                        e.log("try show GameBannerAd"), this.gameBannerAd ? this.gameBannerAd.show().then(function() {
                            console.log("GameBannerAd show success");
                        }).catch(function(e) {
                            console.log("GameBannerAd show fail with:" + e);
                        }) : e.log("GameBannerAd not init");
                    }
                }, {
                    key: "hideGameBannerAd",
                    value: function hideGameBannerAd() {
                        this.gameBannerAd ? (e.log("GameBannerAd hide"), this.gameBannerAd.hide()) : e.log("GameBannerAd not init");
                    }
                } ]);
                return _class7;
            }())();
            e.initGameBannerAd = function(e, n) {
                t.initGameBannerAd(e, n);
            }, e.showGameBannerAd = function() {
                t.showGameBannerAd();
            }, e.hideGameBannerAd = function() {
                t.hideGameBannerAd();
            };
        }(n || (n = {})), function(e) {
            var t = new (/* */ function() {
                function _class8() {
                    _classCallCheck2(this, _class8);
                }
                _createClass2(_class8, [ {
                    key: "initGamePortalAd",
                    value: function initGamePortalAd(t) {
                        e.isPlatform([ e.Platform.Vivo, e.Platform.OPPO ]) && !e.Info.isPreview ? (e.isOPPO() ? this.gamePortalAd = e.PA.createGamePortalAd({
                            adUnitId: t
                        }) : e.isVivo() && (this.gamePortalAd = e.PA.createBoxPortalAd({
                            posId: t
                        })), this.gamePortalAd.onError(function(t) {
                            e.log("GamePortalAd error:", t);
                        }), this.gamePortalAd.onLoad(function() {
                            e.log("GamePortalAd loaded");
                        }), this.gamePortalAd.onClose(function() {
                            console.log("GamePortalAd closed.");
                        })) : e.Info.isPreview || e.log("当前平台：" + e.Info.platform + "暂不支持互推九宫格广告");
                    }
                }, {
                    key: "showGamePortalAd",
                    value: function showGamePortalAd() {
                        var _this8 = this;
                        e.log("try show GamePortalAd"), this.gamePortalAd ? this.gamePortalAd.show().then(function() {
                            console.log("GamePortalAd show success");
                        }).catch(function(e) {
                            console.log("GamePortalAd show fail with:" + e);
                            try {
                                _this8.gamePortalAd.load();
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                console.warn(e);
                            }
                        }) : e.log("GamePortalAd not init");
                    }
                }, {
                    key: "hideGamePortalAd",
                    value: function hideGamePortalAd() {
                        this.gamePortalAd ? (e.log("GamePortalAd hide"), this.gamePortalAd.hide()) : e.log("GamePortalAd not init");
                    }
                } ]);
                return _class8;
            }())();
            e.initGamePortalAd = function(e) {
                t.initGamePortalAd(e);
            }, e.showGamePortalAd = function() {
                t.showGamePortalAd();
            }, e.hideGamePortalAd = function() {
                t.hideGamePortalAd();
            };
        }(n || (n = {})), function(e) {
            var t = new (/* */ function() {
                function _class9() {
                    _classCallCheck2(this, _class9);
                    this.adUnitId = "";
                }
                _createClass2(_class9, [ {
                    key: "initInterstitialAd",
                    value: function initInterstitialAd(e) {
                        this.adUnitId = e;
                    }
                }, {
                    key: "showInterstitialAd",
                    value: function showInterstitialAd() {
                        var t = window.wx.createInterstitialAd({
                            adUnitId: "adunit-20e7c6aa340b3815",
                        });
                        e.isPlatform([ e.Platform.Vivo, e.Platform.Kwaigame ]) ? t.show().then(function() {
                            e.log("InterstitialAd show");
                        }).catch(function(t) {
                            e.log("InterstitialAd fail", JSON.stringify(t));
                        }) : e.isPlatform([ e.Platform.ByteDance ]) ? t.load().then(function() {
                            t.show().then(function() {
                                e.log("InterstitialAd show");
                            });
                        }).catch(function(t) {
                            e.log(t);
                        }) : (t.onError(function(t) {
                            e.log("InterstitialAd error", t);
                        }), t.onLoad(function() {
                            e.log("InterstitialAd onLoad"), t.show().catch(function(t) {
                                e.error("show", t);
                            });
                        }), t.load().catch(function(t) {
                            e.error("InterstitialAd err", t);
                        }));
                    }
                } ]);
                return _class9;
            }())();
            e.initInterstitialAd = function(e) {
                t.initInterstitialAd(e);
            }, e.showInterstitialAd = function() {
                e.Info.isPreview || (e.isPlatform([ e.Platform.iOS, e.Platform.Android ]) ? e.PA.showInterstitialAd() : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.showInterstitialAd() : t.showInterstitialAd());
            };
        }(n || (n = {})), function(e) {
            e.showNativeAd = function(t) {
                e.Info.isPreview || e.isPlatform([ e.Platform.iOS, e.Platform.Android ]) && e.PA.showNativeAd(t);
            }, e.hideNativeAd = function() {
                e.Info.isPreview || e.isPlatform([ e.Platform.iOS, e.Platform.Android ]) && e.PA.hideNativeAd();
            };
        }(n || (n = {})), function(e) {
            e.showOfferWallAd = function() {};
        }(n || (n = {})), function(e) {
            var t;
            (function(e) {
                e[e.Default = 0] = "Default", e[e.Loading = 1] = "Loading", e[e.Loaded = 2] = "Loaded", 
                e[e.Showing = 3] = "Showing", e[e.End = 4] = "End", e[e.Error = 5] = "Error";
            })(t || (t = {}));
            var n = new (/* */ function() {
                function _class10() {
                    _classCallCheck2(this, _class10);
                    this.adIds = [], this.currAdIdIdx = -1, this.ad = null, this.showOption = null, 
                    this.videoPlayTimeStamp = 0, this.status = t.Default, this.closeTip = "看完视频才能获得奖励哦", 
                    this.videoPlayCallbacks = [], this.videoPlayEndCallbacks = [], this.videoCloseCallbacks = [];
                    this.autoShow = null;
                }
                _createClass2(_class10, [ {
                    key: "init",
                    value: function init(e) {
                        this.adIds = e, this.currAdIdIdx = -1, this.initNextAd();
                    }
                }, {
                    key: "setCloseTip",
                    value: function setCloseTip(e) {
                        this.closeTip = e;
                    }
                }, {
                    key: "haveRewardVideo",
                    value: function haveRewardVideo() {
                        return e.isPlatform([ e.Platform.iOS, e.Platform.Android ]) ? e.PA.isRewardVideoAdReady() : this.status == t.Loaded;
                    }
                }, {
                    key: "onLoad",
                    value: function onLoad() {
                        this.status = t.Loaded;
                    }
                }, {
                    key: "onError",
                    value: function onError(n) {
                        var o, i;
                        this.status = t.Error, this.showOption && (e.Info.isPreview || e.sentLog("VideoAdFailed", null, {
                            type: this.showOption.tag,
                            page: null !== (o = this.showOption.page) && void 0 !== o ? o : ""
                        }), window.wx.showToast({
                            title: "抱歉，没有找到视频",
                            icon: "none",
                            mask: !1
                        }), null === (i = this.showOption) || void 0 === i || i.result({
                            errorMsg: JSON.stringify(n),
                            reward: !1,
                            shown: !1
                        })), e.isPlatform([ e.Platform.OPPO, e.Platform.Vivo ]) && this.ad.load(), this.showOption = null;
                    }
                }, {
                    key: "onClose",
                    value: function onClose(n) {
                        var o, i, a;
                        n.isEnded ? (e.Info.rewardUserData.data.has(this.showOption.tag) && e.Info.rewardUserData.data.get(this.showOption.tag).currCount++, 
                        this.videoCloseCallbacks.forEach(function(e) {
                            try {
                                e(n.isEnded);
                            } catch (o) {}
                        }), this.videoPlayEndCallbacks.forEach(function(e) {
                            try {
                                e();
                            } catch (o) {}
                        })) : this.videoCloseCallbacks.forEach(function(e) {
                            try {
                                e(n.isEnded);
                            } catch (o) {}
                        }), this.status = t.End, null === (o = this.showOption) || void 0 === o || o.result({
                            reward: null == n ? void 0 : n.isEnded,
                            shown: !0,
                            ecpm: null !== (i = n.ecpm) && void 0 !== i ? i : 0
                        }), e.Info.isPreview || e.sentLog((null == n ? void 0 : n.isEnded) ? "VideoAdEnded" : "VideoAdClosed", Math.round((Date.now() - this.videoPlayTimeStamp) / 1e3), {
                            type: this.showOption.tag,
                            page: null !== (a = this.showOption.page) && void 0 !== a ? a : ""
                        }), e.isPlatform([ e.Platform.OPPO, e.Platform.Vivo ]) && !e.Info.isPreview && this.ad.load(), 
                        this.showOption = null, this.status = t.End, (null == n ? void 0 : n.isEnded) || this.closeTip && "" != this.closeTip && wx.showToast({
                            title: this.closeTip,
                            mask: !0,
                            icon: "none"
                        });
                    }
                }, {
                    key: "initNextAd",
                    value: function initNextAd() {
                        var _this9 = this;
                        if (1) if (this.currAdIdIdx = (this.currAdIdIdx + 1) % this.adIds.length, 
                        this.status = t.Loading, e.isPlatform(e.Platform.Hago)) {
                            var _t16 = window.wx.createRewardedVideoAd({
                                adUnitId: "adunit-3594010cc6943b4b",
                            });
                            _t16.onClose = function(e) {
                                _this9.onClose(e);
                            }, _t16.onError = function() {
                                e.log("中途关闭广告或者拉取广告失败");
                            }, this.ad = _t16;
                        } else _this9.ad = window.wx.createRewardedVideoAd({
                            adUnitId: "adunit-3594010cc6943b4b"
                        }), _this9.ad.onLoad(function() {
                            _this9.onLoad();
                            _this9.autoShow && _this9.showVideoAd(_this9.autoShow);
                            _this9.autoShow=null;
                        }), _this9.ad.onError(function(e) {
                            _this9.onError(e);
                        }), _this9.ad.onClose(function(e) {
                            _this9.onClose(e);
                        });
                    }
                }, {
                    key: "showVideoAd",
                    value: function showVideoAd(t) {
                        var _this10 = this;
                        var n;
                        this.showOption ? e.log("reward video is showing with " + this.showOption.page + " - " + this.showOption.tag) : (this.videoPlayTimeStamp = Date.now(), 
                        this.showOption = t, e.Info.isPreview || e.sentLog("TryPlayVideoAd", null, {
                            type: this.showOption.tag,
                            page: null !== (n = this.showOption.page) && void 0 !== n ? n : ""
                        }), e.Info.isPreview ? this.onClose({
                            isEnded: !0
                        }) : e.isPlatform(e.Platform.QuTouTiao) ? qttGame.showVideo(function(e) {
                            _this10.onClose({
                                isEnded: 1 == e
                            });
                        }) : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.showRewardVideo(function(e) {
                            _this10.onClose({
                                isEnded: e
                            });
                        }) : e.isPlatform(e.Platform.Android) ? e.PA.showRewardVideoAd(function(t) {
                            var n;
                            e.log("reward video Android show callback:" + JSON.stringify(t)), t.shown ? _this10.onClose({
                                isEnded: t.reward,
                                ecpm: t.ecpm
                            }) : (_this10.showOption && (null === (n = _this10.showOption) || void 0 === n || n.result({
                                errorMsg: JSON.stringify(t),
                                reward: !1,
                                shown: !1
                            })), _this10.showOption = null);
                        }) : e.isPlatform(e.Platform.iOS) ? e.PA.showRewardVideoAd(function(t) {
                            var n;
                            e.log("reward video ios show callback:" + JSON.stringify(t)), t.shown ? _this10.onClose({
                                isEnded: t.reward,
                                ecpm: t.ecpm
                            }) : (_this10.showOption && (null === (n = _this10.showOption) || void 0 === n || n.result({
                                errorMsg: JSON.stringify(t),
                                reward: !1,
                                shown: !1
                            })), _this10.showOption = null);
                        }) : e.isPlatform(e.Platform.M4399MiniGame) ? window.h5api.playAd(function(t) {
                            e.log("code:" + t.code + ",message:" + t.message), 1e4 === t.code ? _this10.videoPlayCallbacks.forEach(function(e) {
                                try {
                                    e();
                                } catch (n) {}
                            }) : 10001 === t.code ? _this10.onClose({
                                isEnded: !0
                            }) : (_this10.showOption = null, _this10.videoCloseCallbacks.forEach(function(e) {
                                try {
                                    e();
                                } catch (n) {}
                            }));
                        }) : e.isPlatform(e.Platform.ZuiYou) ? window.__XCgs.call("playRewardAd")(function(e, t) {
                            if (e) try {
                                _this10.showAdResult(!1, e.message);
                            } catch (n) {} else t && 1 === t.status ? _this10.onClose({
                                isEnded: !0
                            }) : _this10.onClose({
                                isEnded: !1
                            });
                        }) : (null == this.ad ? (this.autoShow=t,this.initNextAd(),this.showOption=null):this.ad.show().then(function() {
                            _this10.videoPlayTimeStamp = Date.now(), _this10.showAdResult(!0, "");
                        }).catch(function(e) {
                            _this10.showAdResult(!1, JSON.stringify(e));
                        })));
                    }
                }, {
                    key: "showAdResult",
                    value: function showAdResult(t, n) {
                        var o;
                        this.showOption && !e.Info.isPreview && e.sentLog(t ? "VideoAdSuccess" : "VideoAdFailed", null, {
                            type: this.showOption.tag,
                            page: null !== (o = this.showOption.page) && void 0 !== o ? o : ""
                        }), t ? this.videoPlayCallbacks.forEach(function(e) {
                            try {
                                e();
                            } catch (o) {}
                        }) : (e.isPlatform([ e.Platform.OPPO, e.Platform.Vivo ]) && this.ad.load(), this.onError({
                            errCode: 1,
                            errMsg: n
                        }));
                    }
                }, {
                    key: "addPlayCallback",
                    value: function addPlayCallback(e) {
                        this.videoPlayCallbacks.push(e);
                    }
                }, {
                    key: "addPlayEndCallback",
                    value: function addPlayEndCallback(e) {
                      this.videoPlayEndCallbacks.push(e);
                    }
                }, {
                    key: "addCloseCallback",
                    value: function addCloseCallback(e) {
                      this.videoCloseCallbacks.push(e);
                    }
                }, {
                    key: "removePlayCallback",
                    value: function removePlayCallback(e) {
                        var t = this.videoPlayCallbacks.indexOf(e);
                        t >= 0 && this.videoPlayCallbacks.splice(t, 1);
                    }
                }, {
                    key: "removePlayEndCallback",
                    value: function removePlayEndCallback(e) {
                        var t = this.videoPlayEndCallbacks.indexOf(e);
                        t >= 0 && this.videoPlayEndCallbacks.splice(t, 1);
                    }
                }, {
                    key: "removeCloseCallback",
                    value: function removeCloseCallback(e) {
                        var t = this.videoCloseCallbacks.indexOf(e);
                        t >= 0 && this.videoCloseCallbacks.splice(t, 1);
                    }
                } ]);
                return _class10;
            }())();
            e.haveRewardVideo = function() {
                return n.haveRewardVideo();
            }, e.showVideoAd = function(e) {
                n.showVideoAd(e);
            }, e.initRewardVideoAd = function(t) {
                e.Info.isPreview || n.init(t);
            }, e.addVideoPlayCallback = function(e) {
                n.addPlayCallback(e);
            }, e.addVideoEndCallback = function(e) {
                n.addPlayEndCallback(e);
            }, e.addVideoCloseCallback = function(e) {
                n.addCloseCallback(e);
            }, e.removeVideoPlayCallback = function(e) {
                n.removePlayCallback(e);
            }, e.removeVideoEndCallback = function(e) {
                n.removePlayEndCallback(e);
            }, e.removeVideoCloseCallback = function(e) {
                n.removeCloseCallback(e);
            }, e.setInterruptPlayTip = function(e) {
                n.setCloseTip(e);
            };
        }(n || (n = {})), function(e) {
            e.showSplashAd = function() {
                var t;
                e.Info.isPreview || e.isPlatform(e.Platform.Kuaidianwan) || null === (t = e.PA.showSplashAd) || void 0 === t || t.call(e.PA);
            };
        }(n || (n = {})), function(e) {
            var t;
            (function(t) {
                var n, o;
                (function(e) {
                    e[e.Active = 0] = "Active", e[e.Register = 1] = "Register", e[e.Pay = 2] = "Pay", 
                    e[e.NextDay = 6] = "NextDay", e[e.KeyAction = 25] = "KeyAction";
                })(n = t.Action || (t.Action = {})), function(e) {
                    e[e.KuaiShou = 1] = "KuaiShou", e[e.SIGMOB = 2] = "SIGMOB", e[e.Ocean = 3] = "Ocean", 
                    e[e.MTG = 4] = "MTG", e[e.OPPO = 8] = "OPPO";
                }(o || (o = {}));
                var i = {
                    clue_token: "",
                    ad_id: "",
                    creative_id: "",
                    ad_platform: 0
                };
                var a = "";
                t.init = function() {
                    var t, n, r, s, c, l, d, u, h, f, p, g, v, m, _, y, I, C, M, L, w, P, U, A, G, S;
                    if (e.isPlatform([ e.Platform.WeChat ])) {
                        var _a3 = e.PA.getLaunchOptionsSync();
                        "kuaishou" == (null !== (n = null === (t = null == _a3 ? void 0 : _a3.query) || void 0 === t ? void 0 : t.ksChannel) && void 0 !== n ? n : "") ? (i.clue_token = null !== (s = null === (r = null == _a3 ? void 0 : _a3.query) || void 0 === r ? void 0 : r.callback) && void 0 !== s ? s : "", 
                        i.ad_id = null !== (l = null === (c = null == _a3 ? void 0 : _a3.query) || void 0 === c ? void 0 : c.ksCampaignId) && void 0 !== l ? l : "", 
                        i.creative_id = null !== (u = null === (d = null == _a3 ? void 0 : _a3.query) || void 0 === d ? void 0 : d.ksCreativeId) && void 0 !== u ? u : "", 
                        i.ad_platform = o.KuaiShou) : (i.clue_token = null !== (f = null === (h = null == _a3 ? void 0 : _a3.query) || void 0 === h ? void 0 : h.clue_token) && void 0 !== f ? f : "", 
                        i.ad_id = null !== (g = null === (p = null == _a3 ? void 0 : _a3.query) || void 0 === p ? void 0 : p.ad_id) && void 0 !== g ? g : "", 
                        i.creative_id = null !== (m = null === (v = null == _a3 ? void 0 : _a3.query) || void 0 === v ? void 0 : v.creative_id) && void 0 !== m ? m : "", 
                        i.ad_platform = o.Ocean), e.addVideoEndCallback(function() {
                            e.request({
                                url: "https://game.17tcw.com/default/user/videoAd",
                                method: "POST",
                                data: {
                                    userId: e.Info.uid,
                                    adType: "RewardVideoAd",
                                    ecpm: 0
                                },
                                success: function success(t) {
                                    e.log("RewardVideoAd: " + JSON.stringify(t));
                                }
                            });
                        });
                    } else if (e.isPlatform([ e.Platform.ByteDance ])) {
                        var _t17 = e.PA.getLaunchOptionsSync();
                        i.clue_token = null !== (y = null === (_ = null == _t17 ? void 0 : _t17.query) || void 0 === _ ? void 0 : _.clickid) && void 0 !== y ? y : "", 
                        i.ad_id = null !== (C = null === (I = null == _t17 ? void 0 : _t17.query) || void 0 === I ? void 0 : I.adid) && void 0 !== C ? C : "", 
                        i.creative_id = null !== (L = null === (M = null == _t17 ? void 0 : _t17.query) || void 0 === M ? void 0 : M.creativeid) && void 0 !== L ? L : "", 
                        i.ad_platform = o.Ocean, e.addVideoEndCallback(function() {
                            e.request({
                                url: "https://game.17tcw.com/default/user/videoAd",
                                method: "POST",
                                data: {
                                    userId: e.Info.uid,
                                    adType: "RewardVideoAd",
                                    ecpm: 0
                                },
                                success: function success(t) {
                                    e.log("RewardVideoAd: " + JSON.stringify(t));
                                }
                            });
                        });
                    } else if (e.isPlatform([ e.Platform.OPPO ])) {
                        var _t18 = e.PA.getLaunchOptionsSync();
                        i.clue_token = null !== (P = null === (w = null == _t18 ? void 0 : _t18.query) || void 0 === w ? void 0 : w.clickid) && void 0 !== P ? P : "", 
                        i.ad_id = null !== (A = null === (U = null == _t18 ? void 0 : _t18.query) || void 0 === U ? void 0 : U.adid) && void 0 !== A ? A : "", 
                        i.creative_id = null !== (S = null === (G = null == _t18 ? void 0 : _t18.query) || void 0 === G ? void 0 : G.creativeid) && void 0 !== S ? S : "", 
                        i.ad_platform = o.OPPO, e.addVideoEndCallback(function() {
                            e.request({
                                url: "https://game.17tcw.com/default/user/videoAd",
                                method: "POST",
                                data: {
                                    userId: e.Info.uid,
                                    adType: "RewardVideoAd",
                                    ecpm: 0
                                },
                                success: function success(t) {
                                    e.log("RewardVideoAd: " + JSON.stringify(t));
                                }
                            });
                        }), e.PA.getDeviceId({
                            success: function success(e) {
                                a = e.deviceId, console.log("deviceId:", a);
                            }
                        });
                    }
                }, t.reportKeyAction = function(t) {
                    var n;
                    e.isPlatform([ e.Platform.OPPO ]) ? "" != a && null != a && e.request({
                        url: "https://game.17tcw.com/default/put/reportWX",
                        method: "POST",
                        data: {
                            uid: e.Info.uid,
                            event_type: t,
                            clueToken: a,
                            ad_platform: i.ad_platform
                        },
                        success: function success(t) {
                            e.log("Report KeyAction: " + JSON.stringify(t));
                        }
                    }) : (null === (n = i.clue_token) || void 0 === n ? void 0 : n.length) > 0 && e.request({
                        url: "https://game.17tcw.com/default/put/reportWX",
                        method: "POST",
                        data: {
                            uid: e.Info.uid,
                            event_type: t,
                            clueToken: i.clue_token,
                            ad_id: i.ad_id,
                            ad_platform: i.ad_platform
                        },
                        success: function success(t) {
                            e.log("Report KeyAction: " + JSON.stringify(t));
                        }
                    });
                }, t.videoAd = function() {};
            })(t = e.AdTracking || (e.AdTracking = {}));
        }(n || (n = {})), function(t) {
            t.AndroidProxy = /* */ function(_t$BaseAppProxy) {
                _inherits2(_class11, _t$BaseAppProxy);
                var _super = _createSuper2(_class11);
                function _class11() {
                    var _this11;
                    _classCallCheck2(this, _class11);
                    _this11 = _super.call(this), _this11.compatibleMethods = [ "onShareMessageToFriend", "showShareMenu", "onShareTimeline", "onShareAppMessage", "getUpdateManager", "onTouchEnd", "onTouchStart", "offTouchStart", "offTouchEnd", "triggerGC" ], 
                    _this11.bridge = null, _this11.isSplashAdEnd = !1, _this11.splashAdEndCallback = null, 
                    _this11.callbacks = new Map(), _this11.times = 0, _this11.offerWallListener = null, 
                    _this11.compatibleMethods.forEach(function(e) {
                        _this11[e] = function() {
                            console.log("Android 暂不支持".concat(e));
                        };
                    });
                    try {
                        _this11.bridge = PlatformClass.createClass("com.kariqu.sdkmanager.JavaScriptProxy");
                    } catch (e) {}
                    return _this11;
                }
                _createClass2(_class11, [ {
                    key: "signInGoogle",
                    value: function signInGoogle() {
                        e.signIn();
                    }
                }, {
                    key: "signInGoogleSilently",
                    value: function signInGoogleSilently() {
                        e.signInSilently();
                    }
                }, {
                    key: "signOutGoogle",
                    value: function signOutGoogle() {
                        e.signOut();
                    }
                }, {
                    key: "saveFile",
                    value: function saveFile(t) {
                        e.saveFile(t);
                    }
                }, {
                    key: "loadSavefile",
                    value: function loadSavefile() {
                        e.loadSavefile();
                    }
                }, {
                    key: "setNonConsumableProduct",
                    value: function setNonConsumableProduct(t) {
                        e.setAcknowledgedSku(t);
                    }
                }, {
                    key: "getProductDetail",
                    value: function getProductDetail(t, o) {
                        n.isDistributionChannel(n.DistributionChannel.GooglePlay) ? e.loadSkuDetail(t, []) : this.native("requestProductInfo", "(Ljava/lang/String;I)V", JSON.stringify(t), null != o ? o : 0);
                    }
                }, {
                    key: "requestPayment",
                    value: function requestPayment(t, o) {
                        n.isDistributionChannel(n.DistributionChannel.GooglePlay) ? e.purchaseSku(t) : this.native("requestPayProduct", "(Ljava/lang/String;I)V", t, null != o ? o : 0);
                    }
                }, {
                    key: "checkPurchase",
                    value: function checkPurchase() {
                        n.isDistributionChannel(n.DistributionChannel.GooglePlay) ? e.checkPurchase() : this.native("checkUnfinishedTransaction", "()V");
                    }
                }, {
                    key: "fetchRemoteConfig",
                    value: function fetchRemoteConfig() {
                        e.syncRemoteConfig();
                    }
                }, {
                    key: "confirmPurchase",
                    value: function confirmPurchase(t) {
                        n.isDistributionChannel(n.DistributionChannel.GooglePlay) ? e.confirmPurchase(t) : this.native("finishTransaction", "(Ljava/lang/String;)V", t);
                    }
                }, {
                    key: "getRemoteConfig",
                    value: function getRemoteConfig() {
                        return e.getRemoteConfig();
                    }
                }, {
                    key: "getOrderInfo",
                    value: function getOrderInfo(t) {
                        return n.isDistributionChannel(n.DistributionChannel.GooglePlay) ? e.getOrderInfo(t) : this.native("getTransactionInfo", "(Ljava/lang/String;)Ljava/lang/String;", t);
                    }
                }, {
                    key: "restoreNonConsumablePurchase",
                    value: function restoreNonConsumablePurchase() {
                        n.isDistributionChannel(n.DistributionChannel.GooglePlay) ? e.recoverAcknowledgedPurchase() : this.native("restoreNonConsumableTransaction", "()V");
                    }
                }, {
                    key: "setUserId",
                    value: function setUserId(e) {
                        this.native("setUserId", "(Ljava/lang/String;)V", e);
                    }
                }, {
                    key: "setSplashAdEnd",
                    value: function setSplashAdEnd() {
                        this.isSplashAdEnd = !0, this.splashAdEndCallback && this.splashAdEndCallback(), 
                        this.splashAdEndCallback = null;
                    }
                }, {
                    key: "afterSplashAd",
                    value: function afterSplashAd(e) {
                        this.isSplashAdEnd ? e() : this.splashAdEndCallback = e;
                    }
                }, {
                    key: "native",
                    value: function native(e, t) {
                        for (var _len4 = arguments.length, n = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
                            n[_key4 - 2] = arguments[_key4];
                        }
                        console.log("call android native " + e + " " + t + " " + n.join(","));
                        try {
                            var _this$bridge, _jsb$reflection;
                            if (this.bridge) return n.forEach(function(e) {
                                "number" == typeof e && (e *= 1);
                            }), (_this$bridge = this.bridge).call.apply(_this$bridge, [ e ].concat(n));
                            if (jsb) return (_jsb$reflection = jsb.reflection).callStaticMethod.apply(_jsb$reflection, [ "com/kariqu/sdkmanager/JavaScriptProxy", e, t ].concat(n));
                        } catch (o) {}
                    }
                }, {
                    key: "callCallback",
                    value: function callCallback(e) {
                        if (this.callbacks.has(e)) try {
                            for (var _len5 = arguments.length, t = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                                t[_key5 - 1] = arguments[_key5];
                            }
                            this.callbacks.get(e).apply(void 0, t);
                        } catch (n) {
                            n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                            console.error(n);
                        } finally {
                            this.callbacks.delete(e);
                        }
                    }
                }, {
                    key: "uuid",
                    value: function uuid() {
                        return this.times++, Date.now() + "-" + this.times;
                    }
                }, {
                    key: "onShow",
                    value: function onShow(e) {}
                }, {
                    key: "offShow",
                    value: function offShow(e) {}
                }, {
                    key: "onHide",
                    value: function onHide(e) {}
                }, {
                    key: "offHide",
                    value: function offHide(e) {}
                }, {
                    key: "getSystemInfoSync",
                    value: function getSystemInfoSync() {
                        return JSON.parse(this.native("getSystemInfoSync", "()Ljava/lang/String;"));
                    }
                }, {
                    key: "getLaunchOptionsSync",
                    value: function getLaunchOptionsSync() {
                        var e = null, t = this.native("getLaunchOptionsSync", "()Ljava/lang/String;");
                        if (t && "" != t) try {
                            e = JSON.parse(t);
                        } catch (o) {
                            o = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(o);
                            console.error(JSON.stringify(o));
                        } else n.log("Android getLaunchOptionsSync error('').");
                        return e;
                    }
                }, {
                    key: "exitMiniProgram",
                    value: function exitMiniProgram() {
                        this.native("exitApplication", "()V");
                    }
                }, {
                    key: "showRewardVideoAd",
                    value: function showRewardVideoAd(e) {
                        var t = "showRewardVideoAd:" + this.uuid();
                        this.callbacks.set(t, e);
                        var n = "showRewardVideoAd:show:" + this.uuid();
                        this.callbacks.set(n, e), this.native("showRewardVideoAd", "(Ljava/lang/String;Ljava/lang/String;)V", n, t);
                    }
                }, {
                    key: "showFullScreenVideoAd",
                    value: function showFullScreenVideoAd() {
                        this.native("showFullScreenVideoAd", "()V");
                    }
                }, {
                    key: "showInterstitialAd",
                    value: function showInterstitialAd() {
                        this.native("showInterstitialAd", "()V");
                    }
                }, {
                    key: "showBanner",
                    value: function showBanner(e, t, n, o) {
                        this.native("showBanner", "(Ljava/lang/String;)V", JSON.stringify({
                            offsetX: null != e ? e : 0,
                            offsetY: null != t ? t : 0,
                            width: null != n ? n : 0,
                            height: null != o ? o : 0
                        }));
                    }
                }, {
                    key: "hideBanner",
                    value: function hideBanner() {
                        this.native("hideBanner", "()V");
                    }
                }, {
                    key: "showNativeAd",
                    value: function showNativeAd(e) {
                        var t, n, o, i;
                        e.offsetX = null !== (t = e.offsetX) && void 0 !== t ? t : 0, e.offsetY = null !== (n = e.offsetY) && void 0 !== n ? n : 0, 
                        e.width = null !== (o = e.width) && void 0 !== o ? o : 0, e.height = null !== (i = e.height) && void 0 !== i ? i : 0, 
                        this.native("showNativeAd", "(Ljava/lang/String;)V", JSON.stringify(e));
                    }
                }, {
                    key: "hideNativeAd",
                    value: function hideNativeAd() {
                        this.native("hideNativeAd", "()V");
                    }
                }, {
                    key: "showOfferWallAd",
                    value: function showOfferWallAd(e) {
                        this.offerWallListener = e, this.native("showOfferWallAd", "()V");
                    }
                }, {
                    key: "onOfferwallAdCredited",
                    value: function onOfferwallAdCredited(e, t) {
                        var n;
                        null === (n = this.offerWallListener) || void 0 === n || n.call(this, e, t);
                    }
                }, {
                    key: "onOfferwallAdClosed",
                    value: function onOfferwallAdClosed() {
                        this.offerWallListener = null;
                    }
                }, {
                    key: "showToast",
                    value: function showToast(e) {
                        this.native("showToast", "(Ljava/lang/String;)V", JSON.stringify(e));
                    }
                }, {
                    key: "getLanguage",
                    value: function getLanguage() {
                        return this.native("getLanguage", "()Ljava/lang/String;");
                    }
                }, {
                    key: "showModal",
                    value: function showModal(e) {
                        var t, n;
                        var o = "showModal:" + this.uuid();
                        this.native("showModal", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e.title, e.content, null !== (t = e.confirmText) && void 0 !== t ? t : "确认", e.showCancel ? null !== (n = e.cancelText) && void 0 !== n ? n : "取消" : "", o), 
                        this.callbacks.set(o, e.success);
                    }
                }, {
                    key: "showLoading",
                    value: function showLoading(e) {
                        this.native("showLoading", "(Ljava/lang/String;)V", e.title);
                    }
                }, {
                    key: "hideLoading",
                    value: function hideLoading(e) {
                        this.native("hideLoading", "()V");
                    }
                }, {
                    key: "showShareMenu",
                    value: function showShareMenu(e) {
                        this.native("showShareMenu", "()V");
                    }
                }, {
                    key: "shareAppMessage",
                    value: function shareAppMessage(e) {
                        this.native("shareAppMessage", "(Ljava/lang/String;)V", JSON.stringify(e));
                    }
                }, {
                    key: "getUserInfo",
                    value: function getUserInfo(e) {}
                }, {
                    key: "getWeChatOpenId",
                    value: function getWeChatOpenId(e) {
                        var _this12 = this;
                        var t = "getWeChatOpenId:" + this.uuid();
                        this.callbacks.set(t, function(n) {
                            var o;
                            e(null !== (o = n.openid) && void 0 !== o ? o : ""), _this12.callbacks.delete(t);
                        }), this.native("getWeChatOpenId", "(Ljava/lang/String;)V", t);
                    }
                }, {
                    key: "login",
                    value: function login(e) {
                        var _this13 = this;
                        var t = "login:success:" + this.uuid();
                        this.callbacks.set(t, e.success);
                        var n = "login:fail:" + this.uuid();
                        this.callbacks.set(n, e.fail);
                        var o = "login:complete:" + this.uuid();
                        this.callbacks.set(o, function() {
                            _this13.callbacks.delete(t), _this13.callbacks.delete(n), _this13.callbacks.delete(o);
                        }), this.native("login", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", t, n, o);
                    }
                }, {
                    key: "setKeepScreenOn",
                    value: function setKeepScreenOn(e) {}
                }, {
                    key: "vibrateShort",
                    value: function vibrateShort(e) {
                        this.native("vibrateShort", "()V");
                    }
                }, {
                    key: "vibrateLong",
                    value: function vibrateLong(e) {
                        this.native("vibrateLong", "()V");
                    }
                }, {
                    key: "setClipboardData",
                    value: function setClipboardData(e) {
                        var t;
                        this.native("setClipboardData", "(Ljava/lang/String;)V", e.data), null === (t = null == e ? void 0 : e.success) || void 0 === t || t.call(e, null);
                    }
                }, {
                    key: "getClipboardData",
                    value: function getClipboardData(e) {
                        try {
                            e.success({
                                data: this.native("getClipboardData", "()Ljava/lang/String;")
                            });
                        } catch (t) {}
                    }
                }, {
                    key: "getBatteryInfo",
                    value: function getBatteryInfo(e) {}
                }, {
                    key: "getBatteryInfoSync",
                    value: function getBatteryInfoSync() {
                        return {
                            level: 0,
                            isCharging: !1
                        };
                    }
                }, {
                    key: "onOceanEngineInit",
                    value: function onOceanEngineInit() {
                        this.native("onOceanEngineInit", "()V");
                    }
                }, {
                    key: "reportKeyAction",
                    value: function reportKeyAction(e) {
                        e ? this.native("reportKeyAction", "(Ljava/lang/String;)V", e) : this.native("reportKeyAction", "()V");
                    }
                }, {
                    key: "onOceanEngineRegister",
                    value: function onOceanEngineRegister(e, t) {
                        this.native("onOceanEngineRegister", "(Ljava/lang/String;Z)V", e, t);
                    }
                }, {
                    key: "onOceanEnginePurchase",
                    value: function onOceanEnginePurchase(e, t) {
                        this.native("onOceanEnginePurchase", "(Ljava/lang/String;Z)V", e, t);
                    }
                }, {
                    key: "jumpLeisureSubject",
                    value: function jumpLeisureSubject() {
                        this.native("jumpLeisureSubject", "()V");
                    }
                }, {
                    key: "exitApplication",
                    value: function exitApplication() {
                        this.native("exitApplication", "()V");
                    }
                }, {
                    key: "isRewardVideoAdReady",
                    value: function isRewardVideoAdReady() {
                        return this.native("isRewardVideoAdReady", "()Z");
                    }
                }, {
                    key: "sendEvent",
                    value: function sendEvent(e, t) {
                        this.native("sendEvent", "(Ljava/lang/String;Ljava/lang/String;)V", e, t);
                    }
                }, {
                    key: "submitScore",
                    value: function submitScore(t, n) {
                        e.submitScore(t, n);
                    }
                }, {
                    key: "showLeaderboard",
                    value: function showLeaderboard(t) {
                        e.showLeaderboard(t);
                    }
                } ]);
                return _class11;
            }(t.BaseAppProxy);
        }(t || (t = {})), function(e) {
            window.AppProxy = e;
            var t = new (/* */ function() {
                function _class12() {
                    _classCallCheck2(this, _class12);
                    this.isAndroid = !1, this.isiOS = !1;
                }
                _createClass2(_class12, [ {
                    key: "check",
                    value: function check(t) {
                        if (null == e.PROXY) {
                            if (null == this.platform) {
                                try {
                                    if (this.platform = jsb.reflection.callStaticMethod("com/kariqu/sdkmanager/JavaScriptProxy", "getPlatform", "()Ljava/lang/String;"), 
                                    !this.platform) throw "";
                                    console.log("Platform : Cocos Creator Android");
                                } catch (o) {
                                    o = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(o);
                                    try {
                                        if (this.platform = jsb.reflection.callStaticMethod("JavaScriptProxy", "getPlatform"), 
                                        !this.platform) throw "";
                                        console.log("Platform : Cocos Creator iOS");
                                    } catch (i) {
                                        i = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(i);
                                        try {
                                            if (this.platform = PlatformClass.createClass("com.kariqu.sdkmanager.JavaScriptProxy").call("getPlatform"), 
                                            !this.platform) throw "";
                                            console.log("Platform : LayaAir Android");
                                        } catch (a) {
                                            a = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(a);
                                            try {
                                                if (this.platform = PlatformClass.createClass("JavaScriptProxy").call("getPlatform"), 
                                                !this.platform) throw "";
                                                console.log("Platform : LayaAir iOS");
                                            } catch (r) {
                                                r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                                                console.log("Platform : null, default " + t), this.platform = null;
                                            }
                                        }
                                    }
                                }
                                null == this.platform && (this.platform = t);
                            }
                            console.log("AppProxy Platform is ".concat(this.platform, " default is ").concat(t)), 
                            this.platform == n.Platform.Android ? (this.isAndroid = !0, e.PROXY = new e.AndroidProxy(), 
                            console.log("AppProxy PROXY init ".concat(null == e.PROXY ? "failed" : "success", " Platform:").concat(this.platform))) : this.platform == n.Platform.iOS && (this.isiOS = !0, 
                            e.PROXY = new e.IOSProxy(), console.log("AppProxy PROXY init ".concat(null == e.PROXY ? "failed" : "success", " Platform:").concat(this.platform)));
                        }
                    }
                }, {
                    key: "isAndroidApp",
                    value: function isAndroidApp() {
                        return this.isAndroid;
                    }
                }, {
                    key: "isiOSApp",
                    value: function isiOSApp() {
                        return this.isiOS;
                    }
                } ]);
                return _class12;
            }())();
            var o, i;
            (function(e) {
                e[e.Consumable = 0] = "Consumable", e[e.NonConsumable = 1] = "NonConsumable", e[e.Subscription = 2] = "Subscription";
            })(o = e.ProductType || (e.ProductType = {})), function(e) {
                e.SIGN_IN = "SIGN_IN", e.SIGN_IN_FAILED = "SIGN_IN_FAILED", e.SIGN_OUT = "SIGN_OUT", 
                e.SAVE_FILE = "SAVE_FILE", e.LOAD_SAVE_FILE = "LOAD_SAVE_FILE", e.REMOTE_CONFIG_SYNC = "REMOTE_CONFIG_SYNC", 
                e.GOT_SKU_DETAIL = "GOT_PRODUCT_DETAIL", e.GOT_PRODUCT_DETAIL = "GOT_PRODUCT_DETAIL", 
                e.PENDING_ORDER = "PENDING_ORDER", e.RECOVER_ACKNOWLEDGED_SKUS = "RESTORE_NONCONSUMABLE_PURCHASE", 
                e.RESTORE_NONCONSUMABLE_PURCHASE = "RESTORE_NONCONSUMABLE_PURCHASE", e.PURCHASE_RESULT = "PURCHASE_RESULT", 
                e.XiaoMiCustomNativeAdClosed = "XiaoMiCustomNativeAdClosed", e.OnLeaderboardDismiss = "OnLeaderboardDismiss";
            }(i = e.ListenerKey || (e.ListenerKey = {}));
            var a = new Map();
            function r(e) {
                return t.check(e), t.isAndroidApp() || t.isiOSApp();
            }
            e.isAPP = r, e.getPlatform = function() {
                return t.isiOSApp() ? n.Platform.iOS : t.isAndroidApp() ? n.Platform.Android : n.Platform.Default;
            };
            var s = null, c = !1;
            function l(e, t) {
                a.set(e, t);
            }
            function d(e) {
                a.delete(e);
            }
            function u(e, t) {
                if (a.has(i.PURCHASE_RESULT)) try {
                    a.get(i.PURCHASE_RESULT)(e, t);
                } catch (n) {}
            }
            e.setSplashAdEndListener = function(e) {
                c || !r() || n.Info.isPreview ? null == e || e() : s = e;
            }, e.afterSplashAd = function() {
                console.log("AppProxy afterSplashAd"), c = !0, null == s || s();
            }, e.registListener = l, e.unregistListener = d, e.onXiaoMiCustomNativeAdClosed = function() {
                if (a.has(i.XiaoMiCustomNativeAdClosed)) try {
                    a.get(i.XiaoMiCustomNativeAdClosed)();
                } catch (e) {}
            }, e.onSignIn = function() {
                if (a.has(i.SIGN_IN)) try {
                    a.get(i.SIGN_IN)();
                } catch (e) {}
            }, e.onSignInFailed = function(e) {
                if (a.has(i.SIGN_IN_FAILED)) try {
                    a.get(i.SIGN_IN_FAILED)(e);
                } catch (t) {}
            }, e.onSignOut = function() {
                if (a.has(i.SIGN_OUT)) try {
                    a.get(i.SIGN_OUT)();
                } catch (e) {}
            }, e.onSaveFile = function(e) {
                if (a.has(i.SAVE_FILE)) try {
                    a.get(i.SAVE_FILE)(e);
                } catch (t) {}
            }, e.onLoadSavefile = function(e, t) {
                if (a.has(i.LOAD_SAVE_FILE)) try {
                    a.get(i.LOAD_SAVE_FILE)(e, t);
                } catch (n) {}
            }, e.onRemoteConfigSynced = function(e) {
                if (a.has(i.REMOTE_CONFIG_SYNC)) try {
                    a.get(i.REMOTE_CONFIG_SYNC)(e);
                } catch (t) {}
            }, e.onPendingOrder = function(e) {
                if (a.has(i.PENDING_ORDER)) try {
                    a.get(i.PENDING_ORDER)(JSON.parse(e));
                } catch (t) {}
            }, e.onPurchaseResult = u, e.onGotSkuDetail = function(e, t) {
                if (a.has(i.GOT_PRODUCT_DETAIL)) try {
                    a.get(i.GOT_PRODUCT_DETAIL)(e, t);
                } catch (n) {}
            }, e.onRestoreNonConsumablePurchase = function(e) {
                if (a.has(i.RESTORE_NONCONSUMABLE_PURCHASE)) try {
                    a.get(i.RESTORE_NONCONSUMABLE_PURCHASE)(JSON.parse(e));
                } catch (t) {}
            }, e.signInGoogle = function() {
                null === e.PROXY || void 0 === e.PROXY || e.PROXY.signInGoogle();
            }, e.signInGoogleSilently = function() {
                null === e.PROXY || void 0 === e.PROXY || e.PROXY.signInGoogleSilently();
            }, e.signOutGoogle = function() {
                null === e.PROXY || void 0 === e.PROXY || e.PROXY.signOutGoogle();
            }, e.saveFile = function(t) {
                null === e.PROXY || void 0 === e.PROXY || e.PROXY.saveFile(t);
            }, e.loadSavefile = function() {
                null === e.PROXY || void 0 === e.PROXY || e.PROXY.loadSavefile();
            }, e.setNonConsumableProduct = function(t) {
                null === e.PROXY || void 0 === e.PROXY || e.PROXY.setNonConsumableProduct(t);
            }, e.getProductDetail = function(t) {
                null === e.PROXY || void 0 === e.PROXY || e.PROXY.getProductDetail(t);
            }, e.requestPayment = function(t) {
                null === e.PROXY || void 0 === e.PROXY || e.PROXY.requestPayment(t), n.Info.isPreview && u(t, !0);
            }, e.checkPurchase = function() {
                null === e.PROXY || void 0 === e.PROXY || e.PROXY.checkPurchase();
            }, e.fetchRemoteConfig = function() {
                null === e.PROXY || void 0 === e.PROXY || e.PROXY.fetchRemoteConfig();
            }, e.confirmPurchase = function(t) {
                null === e.PROXY || void 0 === e.PROXY || e.PROXY.confirmPurchase(t);
            }, e.getRemoteConfig = function() {
                var t;
                return null !== (t = null === e.PROXY || void 0 === e.PROXY ? void 0 : e.PROXY.getRemoteConfig()) && void 0 !== t ? t : new Map();
            }, e.getOrderInfo = function(t) {
                try {
                    return JSON.parse(null === e.PROXY || void 0 === e.PROXY ? void 0 : e.PROXY.getOrderInfo(t));
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return null;
                }
            }, e.restoreNonConsumablePurchase = function() {
                return null === e.PROXY || void 0 === e.PROXY ? void 0 : e.PROXY.restoreNonConsumablePurchase();
            }, e.onOfferwallAdCredited = function(t, n) {
                null === e.PROXY || void 0 === e.PROXY || e.PROXY.onOfferwallAdCredited(t, n);
            }, e.onOfferwallAdClosed = function() {
                null === e.PROXY || void 0 === e.PROXY || e.PROXY.onOfferwallAdClosed();
            }, e.submitScore = function(t, n) {
                null === e.PROXY || void 0 === e.PROXY || e.PROXY.submitScore(t, n);
            }, e.showLeaderboard = function(t, n) {
                l(i.OnLeaderboardDismiss, function() {
                    d(i.OnLeaderboardDismiss), null == n || n();
                }), null === e.PROXY || void 0 === e.PROXY || e.PROXY.showLeaderboard(t);
            }, e.invokeListener = function(e) {
                var t;
                null === (t = a.get(e)) || void 0 === t || t();
            };
        }(t || (t = {})), function(e) {
            window.GoogleService = e;
            var t = null;
            function o(e, n) {
                for (var _len6 = arguments.length, o = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
                    o[_key6 - 2] = arguments[_key6];
                }
                console.log("call android native " + e + " " + n + " " + o.join(","));
                try {
                    var _jsb$reflection2;
                    return (_jsb$reflection2 = jsb.reflection).callStaticMethod.apply(_jsb$reflection2, [ "com/kariqu/googleservice/GSSDK", e, n ].concat(o));
                } catch (i) {
                    i = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(i);
                    var _t19;
                    return null == t && (t = PlatformClass.createClass("com.kariqu.googleservice.GSSDK")), 
                    (_t19 = t).call.apply(_t19, [ e ].concat(o));
                }
            }
            e.signIn = function() {
                o("signIn", "()V");
            }, e.signInSilently = function() {
                o("signInSilently", "()V");
            }, e.signOut = function() {
                o("signOut", "()V");
            }, e.saveFile = function(e) {
                o("saveFile", "(Ljava/lang/String;)V", e);
            }, e.loadSavefile = function() {
                o("loadSavefile", "()V");
            }, e.setAcknowledgedSku = function(e) {
                o("setAcknowledgedSku", "(Ljava/lang/String;)V", JSON.stringify(e));
            }, e.loadSkuDetail = function(e, t) {
                o("loadSkuDetail", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(e), JSON.stringify(t));
            }, e.purchaseSku = function(e) {
                o("purchaseSku", "(Ljava/lang/String;)V", e);
            }, e.checkPurchase = function() {
                o("checkPurchase", "()V");
            }, e.syncRemoteConfig = function() {
                o("syncRemoteConfig", "()V");
            }, e.confirmPurchase = function(e) {
                o("confirmPurchase", "(Ljava/lang/String;)V", e);
            }, e.getRemoteConfig = function() {
                var e = o("getRemoteConfig", "()Ljava/lang/String;");
                n.log("Google RemoteConfig is " + e);
                var t = JSON.parse(e), i = new Map();
                for (var _i7 = 0, _Object$keys = Object.keys(t); _i7 < _Object$keys.length; _i7++) {
                    var _n14 = _Object$keys[_i7];
                    i.set(_n14, t[_n14]);
                }
                return i;
            }, e.getOrderInfo = function(e) {
                return o("getOrderInfo", "(Ljava/lang/String;)Ljava/lang/String;", e);
            }, e.recoverAcknowledgedPurchase = function() {
                return o("recoverAcknowledgedPurchase", "()V");
            }, e.submitScore = function(e, t) {
                o("submitScore", "(Ljava/lang/String;I)V", e, t);
            }, e.showLeaderboard = function(e) {
                o("showLeaderboard", "(Ljava/lang/String;)V", e);
            };
        }(e || (e = {})), function(e) {
            e.IOSProxy = /* */ function(_e$BaseAppProxy) {
                _inherits2(_class13, _e$BaseAppProxy);
                var _super2 = _createSuper2(_class13);
                function _class13() {
                    var _this14;
                    _classCallCheck2(this, _class13);
                    _this14 = _super2.call(this), _this14.compatibleMethods = [ "onShareMessageToFriend", "showShareMenu", "onShareTimeline", "onShareAppMessage", "getUpdateManager", "onTouchEnd", "onTouchStart", "offTouchStart", "offTouchEnd", "triggerGC" ], 
                    _this14.bridge = null, _this14.callbacks = new Map(), _this14.callbackValidTimes = new Map(), 
                    _this14.times = 0, _this14.compatibleMethods.forEach(function(e) {
                        _this14[e] = function() {
                            console.log("iOS 暂不支持".concat(e));
                        };
                    });
                    try {
                        _this14.bridge = PlatformClass.createClass("JavaScriptProxy");
                    } catch (e) {}
                    return _this14;
                }
                _createClass2(_class13, [ {
                    key: "native",
                    value: function native(e) {
                        var o = null, i = null;
                        try {
                            var _jsb$reflection3, _this$bridge2;
                            for (var _len7 = arguments.length, t = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
                                t[_key7 - 1] = arguments[_key7];
                            }
                            n.isEngine(n.EngineType.CocosCreator) && "undefined" != typeof jsb ? o = t ? (_jsb$reflection3 = jsb.reflection).callStaticMethod.apply(_jsb$reflection3, [ "JavaScriptProxy", e ].concat(t)) : jsb.reflection.callStaticMethod("JavaScriptProxy", e) : n.isEngine(n.EngineType.LayaAir) && (o = t ? (_this$bridge2 = this.bridge).call.apply(_this$bridge2, [ e ].concat(t)) : this.bridge.call(e));
                        } catch (a) {
                            a = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(a);
                            i = a;
                        }
                        return i ? (console.log("call ios native ", e, " error."), console.error(i)) : console.log("call ios native ", e, " return:", o), 
                        o;
                    }
                }, {
                    key: "sendEvent",
                    value: function sendEvent(e, t) {
                        this.native("sendEvent:params:", e, null != t ? t : "");
                    }
                }, {
                    key: "callCallback",
                    value: function callCallback(e) {
                        for (var _len8 = arguments.length, t = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
                            t[_key8 - 1] = arguments[_key8];
                        }
                        if (this.callbacks.has(e)) {
                            console.log("ios call jscallback : ", e, JSON.stringify(t));
                            try {
                                this.callbacks.get(e).apply(void 0, t);
                            } catch (n) {
                                n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                                console.error(n);
                            } finally {
                                var _t20 = this.callbackValidTimes.get(e);
                                _t20 > 1 ? this.callbackValidTimes.set(e, _t20 - 1) : (this.callbacks.delete(e), 
                                this.callbackValidTimes.delete(e));
                            }
                        } else console.log("ios call jscallback(not exist): ", e, JSON.stringify(t));
                    }
                }, {
                    key: "addCallback",
                    value: function addCallback(e, t, n) {
                        this.callbacks.set(e, t), this.callbackValidTimes.set(e, n);
                    }
                }, {
                    key: "uuid",
                    value: function uuid() {
                        return this.times++, Date.now() + "-" + this.times;
                    }
                }, {
                    key: "onShow",
                    value: function onShow(e) {}
                }, {
                    key: "offShow",
                    value: function offShow(e) {}
                }, {
                    key: "onHide",
                    value: function onHide(e) {}
                }, {
                    key: "offHide",
                    value: function offHide(e) {}
                }, {
                    key: "getSystemInfoSync",
                    value: function getSystemInfoSync() {
                        var e;
                        return JSON.parse(null !== (e = this.native("getSystemInfoSync")) && void 0 !== e ? e : "{}");
                    }
                }, {
                    key: "getLaunchOptionsSync",
                    value: function getLaunchOptionsSync() {
                        var e;
                        return JSON.parse(null !== (e = this.native("getLaunchOptionsSync")) && void 0 !== e ? e : "{}");
                    }
                }, {
                    key: "exitMiniProgram",
                    value: function exitMiniProgram() {
                        this.native("exitMiniProgram");
                    }
                }, {
                    key: "showRewardVideoAd",
                    value: function showRewardVideoAd(e) {
                        var t = "showRewardVideoAd:show:" + this.uuid();
                        this.addCallback(t, e, 2), this.native("showRewardVideoAd:scene:", t, "");
                    }
                }, {
                    key: "showFullScreenVideoAd",
                    value: function showFullScreenVideoAd() {
                        this.native("showFullScreenVideoAd:", "");
                    }
                }, {
                    key: "showInterstitialAd",
                    value: function showInterstitialAd() {
                        this.native("showInterstitial");
                    }
                }, {
                    key: "showBanner",
                    value: function showBanner(e, t, n, o) {
                        this.native("showBannerAdWithOffsetX:offsetY:width:height:", e, t, n, o);
                    }
                }, {
                    key: "hideBanner",
                    value: function hideBanner() {
                        this.native("hideBannerAd");
                    }
                }, {
                    key: "showNativeAd",
                    value: function showNativeAd(e) {
                        var t, n, o, i;
                        this.native("showNativeAdWithOffsetX:offsetY:width:height:", null !== (t = e.offsetX) && void 0 !== t ? t : 0, null !== (n = e.offsetY) && void 0 !== n ? n : 0, null !== (o = e.width) && void 0 !== o ? o : 0, null !== (i = e.height) && void 0 !== i ? i : 0);
                    }
                }, {
                    key: "hideNativeAd",
                    value: function hideNativeAd() {
                        this.native("hideNativeAd");
                    }
                }, {
                    key: "showToast",
                    value: function showToast(e) {
                        var t;
                        e.duration && e.duration > 100 && (e.duration = e.duration / 1e3), this.native("showToast:duration:", e.title, null !== (t = e.duration) && void 0 !== t ? t : 1.5);
                    }
                }, {
                    key: "showModal",
                    value: function showModal(e) {
                        var t, n;
                        var o = "showModal:" + this.uuid();
                        this.native("showModal:content:cancelText:confirmText:callbackKey:", e.title, e.content, e.showCancel ? null !== (t = e.cancelText) && void 0 !== t ? t : "取消" : "", null !== (n = e.confirmText) && void 0 !== n ? n : "确认", o), 
                        this.addCallback(o, e.success, 1);
                    }
                }, {
                    key: "showLoading",
                    value: function showLoading(e) {
                        var t;
                        this.native("showLoading:mask:", null !== (t = e.title) && void 0 !== t ? t : "", !!e.mask);
                    }
                }, {
                    key: "hideLoading",
                    value: function hideLoading(e) {
                        this.native("hideLoading");
                    }
                }, {
                    key: "showShareMenu",
                    value: function showShareMenu(e) {
                        this.native("showShareMenu");
                    }
                }, {
                    key: "shareAppMessage",
                    value: function shareAppMessage(e) {}
                }, {
                    key: "login",
                    value: function login(e) {
                        var t;
                        var n = this.native("login");
                        null === (t = null == e ? void 0 : e.success) || void 0 === t || t.call(e, {
                            code: n
                        });
                    }
                }, {
                    key: "setUserId",
                    value: function setUserId(e) {
                        this.native("setUserId:", e);
                    }
                }, {
                    key: "setKeepScreenOn",
                    value: function setKeepScreenOn(e) {}
                }, {
                    key: "vibrateShort",
                    value: function vibrateShort(e) {
                        this.native("vibrate:", 15);
                    }
                }, {
                    key: "vibrateLong",
                    value: function vibrateLong(e) {
                        this.native("vibrate:", 400);
                    }
                }, {
                    key: "setClipboardData",
                    value: function setClipboardData(e) {
                        var t, n;
                        this.native("setClipboardData:", null !== (t = e.data) && void 0 !== t ? t : ""), 
                        null === (n = null == e ? void 0 : e.success) || void 0 === n || n.call(e, null);
                    }
                }, {
                    key: "getClipboardData",
                    value: function getClipboardData(e) {
                        try {
                            e.success({
                                data: this.native("getClipboardData")
                            });
                        } catch (t) {}
                    }
                }, {
                    key: "getBatteryInfo",
                    value: function getBatteryInfo(e) {}
                }, {
                    key: "getBatteryInfoSync",
                    value: function getBatteryInfoSync() {
                        return {
                            level: 0,
                            isCharging: !1
                        };
                    }
                }, {
                    key: "onOceanEngineInit",
                    value: function onOceanEngineInit() {
                        this.native("onOceanEngineInit");
                    }
                }, {
                    key: "reportKeyAction",
                    value: function reportKeyAction(e) {
                        e ? this.native("reportKeyAction:", e) : this.native("reportKeyAction");
                    }
                }, {
                    key: "onOceanEngineRegister",
                    value: function onOceanEngineRegister(e, t) {
                        this.native("onOceanEngineRegister:success:", e, t);
                    }
                }, {
                    key: "onOceanEnginePurchase",
                    value: function onOceanEnginePurchase(e, t) {
                        this.native("onOceanEnginePurchase:success:", e, t);
                    }
                }, {
                    key: "getMenuButtonBoundingClientRect",
                    value: function getMenuButtonBoundingClientRect() {
                        return {
                            top: this.native("getTopUnsafeArea"),
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: 0,
                            height: 0
                        };
                    }
                }, {
                    key: "exitApplication",
                    value: function exitApplication() {
                        this.native("exitApplication");
                    }
                }, {
                    key: "isRewardVideoAdReady",
                    value: function isRewardVideoAdReady() {
                        return this.native("isRewardVideoAdReady");
                    }
                }, {
                    key: "getProductDetail",
                    value: function getProductDetail(e) {
                        this.native("getProductsInfo:", JSON.stringify(e));
                    }
                }, {
                    key: "requestPayment",
                    value: function requestPayment(e) {
                        this.native("payProduct:", e);
                    }
                }, {
                    key: "checkPurchase",
                    value: function checkPurchase() {
                        this.native("checkPurchase");
                    }
                }, {
                    key: "confirmPurchase",
                    value: function confirmPurchase(e) {
                        this.native("confirmPurchase:", e);
                    }
                }, {
                    key: "getOrderInfo",
                    value: function getOrderInfo(e) {
                        return this.native("getTransactionInfo:", e);
                    }
                }, {
                    key: "restoreNonConsumablePurchase",
                    value: function restoreNonConsumablePurchase() {
                        this.native("restoreNonConsumablePurchase");
                    }
                }, {
                    key: "fetchRemoteConfig",
                    value: function fetchRemoteConfig() {
                        this.native("fetchRemoteConfig");
                    }
                }, {
                    key: "getRemoteConfig",
                    value: function getRemoteConfig() {
                        var e = this.native("getRemoteConfig"), t = JSON.parse(e), n = new Map();
                        for (var _i8 = 0, _Object$keys2 = Object.keys(t); _i8 < _Object$keys2.length; _i8++) {
                            var o = _Object$keys2[_i8];
                            n.set(o, t[o]);
                        }
                        return n;
                    }
                }, {
                    key: "submitScore",
                    value: function submitScore(e, t) {
                        this.native("submitScore:score:", e, t);
                    }
                }, {
                    key: "showLeaderboard",
                    value: function showLeaderboard(e) {
                        this.native("showLeaderboard:", e);
                    }
                } ]);
                return _class13;
            }(e.BaseAppProxy);
        }(t || (t = {})), function(e) {
            e.PlatformAdapter = /* */ function() {
                function _class14() {
                    _classCallCheck2(this, _class14);
                    this.platform = e.Platform.Default;
                }
                return _class14;
            }();
        }(n || (n = {}));
    }, {} ],
    ErrorNative: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2c3a9YTTxhCcZVgMzaDxxyp", "ErrorNative"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../AdComponent"), i = e("../AdData"), a = cc._decorator, r = a.ccclass, s = (a.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.start = function() {
                "vivo" == i.AdData.platform && o.AdComponent.onShowInterstitialAd(300);
            }, __decorate([ r ], t);
        }(cc.Component));
        n.default = s, cc._RF.pop();
    }, {
        "../AdComponent": "AdComponent",
        "../AdData": "AdData"
    } ],
    EventMgr: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "894b78TzxVCLYl5Cx61MdQ0", "EventMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.events_map = {}, t;
            }
            var n;
            return __extends(t, e), n = t, t.prototype.onLoad = function() {
                null === n.Instance ? n.Instance = this : this.destroy();
            }, t.prototype.add_event_listenner = function(e, t, n) {
                this.events_map[e] || (this.events_map[e] = []), this.events_map[e].push({
                    caller: t,
                    func: n
                });
            }, t.prototype.remove_event_listenner = function(e, t, n) {
                if (this.events_map[e]) {
                    for (var o = this.events_map[e], i = 0; i < o.length; i++) {
                        var a = o[i];
                        if (a.caller == t && a.func == n) {
                            o.splice(i, 1);
                            break;
                        }
                    }
                    o.length <= 0 && (this.events_map[e] = null);
                }
            }, t.prototype.dispatch_event = function(e, t) {
                if (this.events_map[e]) for (var n = this.events_map[e], o = 0; o < n.length; o++) {
                    var i = n[o];
                    i.func.call(i.caller, e, t);
                }
            }, t.Instance = null, n = __decorate([ i ], t);
        }(cc.Component));
        n.default = a, cc._RF.pop();
    }, {} ],
    GConfiguration: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "92013FhEtBC+KthndqfSUNA", "GConfiguration"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.GConfiguration = void 0;
        var o = function() {
            function e() {}
            return e.refershOldVersionKEY = "refershOldVersionKEY", e.UserInfoKey = "USERINFOKEY2", 
            e.UpdateUserInfo = "UPDATAUSERINFO", e.ShowGameTips = "SHOGAMETISPS", e.Complete = "GOMPLETE", 
            e.NextLevel = "NextLevel", e.Corpse = "Corpse", e.LevelIsTips = !1, e.NextNativeAd = 0, 
            e.isDebug = !1, e.isHideMode = [], e.UpdateGame = "UPDATAGAME", e.RMove = "RMove", 
            e.RounMaxLevel = 62, e.DrawStatus = "DRAWSTATUS", e.DrawOk = "DRAWOK", e.DrawMove = "DRAWMOVE", 
            e.DrawErr = "DRAWERR", e.DrawCheck = "DRAWCHECK", e.CarMove = "CarMove", e.CarDrawErr = "CarDrawErr", 
            e.CarDrawSuccess = "CarDrawSuccess", e.CarMoveFinish = "CarMoveFinish", e.CarResult = "CarResult", 
            e.CleanTips = "CleanTips", e.LineMaxLevel = 33, e.LineDrawSuccess = "LineDrawSuccess", 
            e.LineToChangeText = "LineToChangeText", e.LineAttackSuccess = "LineAttackSuccess", 
            e.LineCheckErr = "LineCheckErr", e.LinePoliceStop = "LinePoliceStop", e.CircularMaxLevel = 7, 
            e.CircularDrawSuccess = "CircularDrawSuccess", e.CircularDrawErr = "CircularDrawErr", 
            e.CircularMoveFinish = "CircularMoveFinish", e.ColorCheck = "ColorCheck", e.ColorMaxLeve = 14, 
            e.ColorShift = "ColorShift", e.ColorErase = "ColorErase", e.NearMaxLeve = 14, e.NearCheckNear = "NearCheckNear", 
            e.NearStopOn = "NearStopOn", e.WarpMaxLeve = 30, e.WrapAddDoor = "WrapAddDoor", 
            e.WrapMove = "WrapMove", e.WarpChangeNumber = "WarpChangeNumber", e.WarpAIMoveEnd = "WarpAIMoveEnd", 
            e.changeGroundData = "changeGroundData", e.RescueMaxLeve = 27, e.RescueLinEnd = "RescueLinEnd", 
            e.RescueDie = "RescueDie", e.RescueChangeRig = "RescueChangeRig", e.WarpManMaxLeve = 11, 
            e.ResultGame = "ResultGame", e.NextGame = "NextGame", e.DataRfGame = "DataRfGame", 
            e.PigMaxLeve = 30, e.ChangeSkin = "ChangeSkin", e.MazeMaxLeve = 1, e.MazeDrawBG = "MazeDrawBG", 
            e.BridgeMaxLeve = 10, e.BridgeCollider = "BridgeCollider", e.BridgeExit = "BridgeExit", 
            e.BridgeSplce = "BridgeSplce", e.BridgeHideBtn = "BridgeHideBtn", e.BridgeEnd = "BridgeEnd", 
            e.BridgeStopMove = "BridgeStopMove", e.BridgeCheckWin = "BridgeCheckWin", e;
        }();
        n.GConfiguration = o, cc._RF.pop();
    }, {} ],
    GameApp: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e0219AphpFNxrPsduqh9UWN", "GameApp"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, e("../Managers/ResMgr")), r = e("../Managers/UIMgr"), s = e("../Managers/EventMgr"), c = e("../Managers/SoundMgr"), l = e("../Config/PkgConfiguration"), d = e("./Ad/AdData"), u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.resLoading = null, t;
            }
            var n;
            return __extends(t, e), n = t, t.prototype.onLoad = function() {
                null === n.Instance ? n.Instance = this : this.destroy();
            }, t.prototype.EnterGame = function() {
                this.enterGameScene();
            }, t.prototype.onResLoadProgress = function(e, t) {
                var n = e / t;
                n = (n = n < 0 ? 0 : n) > 1 ? 1 : n, s.default.Instance.dispatch_event("ResLoadProgress", n);
            }, t.prototype.enterGameScene = function() {
                r.default.Instance.clearAll(), null === this.resLoading && (this.resLoading = r.default.Instance.showLoading("ResLoading")), 
                a.default.Instance.preloadResPackage(l.PkgConfiguration.GameResPkg, this.onResLoadProgress.bind(this), function() {
                    this.scheduleOnce(function() {
                        r.default.Instance.clearAll(), this.resLoading = null, c.default.Instance.play_music("bg", !0), 
                        r.default.Instance.show_ui("Scene", "LobbyView"), "tt" == d.AdData.platform && (console.log("字节事件上报"), 
                        window.tt.reportAnalytics("startGame", {
                            form: "loading"
                        }));
                    }, .5);
                }.bind(this));
            }, t.Instance = null, n = __decorate([ i ], t);
        }(cc.Component);
        n.default = u, cc._RF.pop();
    }, {
        "../Config/PkgConfiguration": "PkgConfiguration",
        "../Managers/EventMgr": "EventMgr",
        "../Managers/ResMgr": "ResMgr",
        "../Managers/SoundMgr": "SoundMgr",
        "../Managers/UIMgr": "UIMgr",
        "./Ad/AdData": "AdData"
    } ],
    GameLanch: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2b8d8NFNKdGr7LzuGheHQGA", "GameLanch"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./Game/GameApp"), i = e("./Managers/ResMgr"), a = e("./Managers/EventMgr"), r = e("./Managers/SoundMgr"), s = e("./Managers/UIMgr"), c = e("./Managers/UserMgr"), l = e("./Managers/GameMgr"), d = e("./Game/Ad/AdData");
        e("gameassistant3");
        var u = e("./Config/GConfiguration"), h = e("./Game/Ad/oppo/RenderMgr"), f = cc._decorator, p = f.ccclass, g = (f.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            var n;
            return __extends(t, e), n = t, t.prototype.onLoad = function() {
                var e = this;
                null === n.Instance ? (n.Instance = this, i.default.Instance.init(), this.node.addComponent(a.default), 
                this.node.addComponent(r.default), this.node.addComponent(s.default), this.node.addComponent(o.default), 
                this.node.addComponent(l.default), "oppo" == d.AdData.platform && this.node.addComponent(h.default), 
                this.onInitAd(), cc.macro.ENABLE_MULTI_TOUCH = !1, cc.director.getCollisionManager().enabled = !0, 
                cc.director.getPhysicsManager().enabled = !0, c.UserMgr.instance().Init(function() {
                    console.log("侦探小王子 玩家数据启动成功==>"), -999 == c.UserMgr.instance().userInfo.energy ? "tt" == d.AdData.platform ? e.getUrl("https://demo.xdpvp.com/02/NDGameJson/DyGameGather.json") : "vivo" == d.AdData.platform || "oppo" == d.AdData.platform ? e.getUrl("https://demo.xdpvp.com/02/NDGameJson/OvGameGather.json") : "ks" == d.AdData.platform ? e.getUrl("https://demo.xdpvp.com/02/NDGameJson/ksGameJson.json") : e.getUrl("https://demo.xdpvp.com/02/NDGameJson/GameGather.json") : e.getAddEnergyUrl(), 
                    "win" == d.AdData.platform && (c.UserMgr._instance.userInfo.carMaxLeve = 14, c.UserMgr._instance.userInfo.dialectMaxLeve = 17, 
                    c.UserMgr._instance.userInfo.riverMaxLeve = 13, c.UserMgr._instance.userInfo.roundMaxLeve = u.GConfiguration.RounMaxLevel, 
                    c.UserMgr._instance.userInfo.soldierMaxLeve = 20, c.UserMgr._instance.userInfo.snakeMaxLeve = 20, 
                    c.UserMgr._instance.userInfo.toHitMaxLeve = 20, c.UserMgr._instance.userInfo.eraseMaxLeve = 23, 
                    c.UserMgr._instance.userInfo.moveMaxLeve = 21, c.UserMgr._instance.userInfo.CircularMaxLeve = u.GConfiguration.CircularMaxLevel, 
                    c.UserMgr._instance.userInfo.LineSoldierMaxLeve = u.GConfiguration.LineMaxLevel, 
                    c.UserMgr._instance.userInfo.ColorMaxLeve = u.GConfiguration.ColorMaxLeve, c.UserMgr._instance.userInfo.NearMaxLeve = u.GConfiguration.NearMaxLeve, 
                    c.UserMgr._instance.userInfo.WarpMaxLeve = u.GConfiguration.WarpMaxLeve, c.UserMgr._instance.userInfo.RescueMaxLeve = u.GConfiguration.RescueMaxLeve, 
                    c.UserMgr._instance.userInfo.PigMaxLeve = u.GConfiguration.PigMaxLeve, c.UserMgr._instance.userInfo.MazeMaxLeve = u.GConfiguration.MazeMaxLeve, 
                    c.UserMgr._instance.userInfo.BridgeMaxLeve = u.GConfiguration.BridgeMaxLeve), "win" == d.AdData.platform || "oppo" == d.AdData.platform ? (c.UserMgr._instance.userInfo.carLock = 1, 
                    c.UserMgr._instance.userInfo.roundLock = 1, c.UserMgr._instance.userInfo.riverLock = 1, 
                    c.UserMgr._instance.userInfo.snakeLock = 1, c.UserMgr._instance.userInfo.eraseLock = 1, 
                    c.UserMgr._instance.userInfo.moveLock = 1, c.UserMgr._instance.userInfo.toHitLock = 1, 
                    c.UserMgr._instance.userInfo.soldierLock = 1, c.UserMgr._instance.userInfo.LineLock = 1, 
                    c.UserMgr._instance.userInfo.CircularLock = 1, c.UserMgr._instance.userInfo.ColorLock = 1, 
                    c.UserMgr._instance.userInfo.NearLock = 1, c.UserMgr._instance.userInfo.WarpLock = 1, 
                    c.UserMgr._instance.userInfo.RescueLock = 1, c.UserMgr._instance.userInfo.WarpManLock = 1, 
                    c.UserMgr._instance.userInfo.PigLock = 1, c.UserMgr._instance.userInfo.MazeLock = 1, 
                    c.UserMgr._instance.userInfo.BridgeLock = 1) : "vivo" == d.AdData.platform && (c.UserMgr._instance.userInfo.carLock = 1, 
                    c.UserMgr._instance.userInfo.roundLock = 1, c.UserMgr._instance.userInfo.snakeLock = 1, 
                    c.UserMgr._instance.userInfo.moveLock = 1, c.UserMgr._instance.userInfo.toHitLock = 1, 
                    c.UserMgr._instance.userInfo.LineLock = 1, c.UserMgr._instance.userInfo.ColorLock = 1, 
                    c.UserMgr._instance.userInfo.WarpLock = 1, c.UserMgr._instance.userInfo.WarpManLock = 1, 
                    c.UserMgr._instance.userInfo.MazeLock = 1);
                })) : this.destroy();
            }, t.prototype.getAddEnergyUrl = function() {
                var e = new Date().getTime(), t = "";
                t = "tt" == d.AdData.platform ? "https://demo.xdpvp.com/02/NDGameJson/DyGameGather.json" : "vivo" == d.AdData.platform || "oppo" == d.AdData.platform ? "https://demo.xdpvp.com/02/NDGameJson/OvGameGather.json" : "ks" == d.AdData.platform ? "https://demo.xdpvp.com/02/NDGameJson/ksGameJson.json" : "https://demo.xdpvp.com/02/NDGameJson/GameGather.json", 
                t += "?time=" + e, cc.assetManager.loadRemote(t, function(e, t) {
                    if (e) return console.log("url load err", e), c.UserMgr.instance().userInfo.addEnergy = 5, 
                    void o.default.Instance.EnterGame();
                    var n = t.json;
                    c.UserMgr.instance().userInfo.addEnergy = 5, "tt" == d.AdData.platform && (u.GConfiguration.isHideMode = [ n.HideMode ]), 
                    "oppo" != d.AdData.platform && "ks" != d.AdData.platform || (u.GConfiguration.NextNativeAd = n.AdRadom), 
                    o.default.Instance.EnterGame();
                });
            }, t.prototype.getUrl = function(e) {
                e += "?time=" + new Date().getTime(), cc.assetManager.loadRemote(e, function(e, t) {
                    if (e) return console.log("url load err", e), c.UserMgr.instance().userInfo.energy = 5, 
                    c.UserMgr.instance().userInfo.addEnergy = 5, void o.default.Instance.EnterGame();
                    var n = t.json;
                    c.UserMgr.instance().userInfo.energy = parseInt(n.TiLi), c.UserMgr.instance().userInfo.addEnergy = 5, 
                    o.default.Instance.EnterGame();
                });
            }, t.prototype.sendHttpGet = function(e) {
                var t = new XMLHttpRequest();
                e += "?time=" + new Date().getTime(), t.onreadystatechange = function() {
                    if (4 == t.readyState && t.status >= 200 && t.status < 400) {
                        var e = t.responseText, n = JSON.parse(e);
                        c.UserMgr.instance().userInfo.energy = parseInt(n.TiLi), o.default.Instance.EnterGame();
                    } else c.UserMgr.instance().userInfo.energy = 5, o.default.Instance.EnterGame();
                }, t.open("GET", e, !0), t.send();
            }, t.prototype.onInitAd = function() {
                "wx" == d.AdData.platform && GA.init({
                    isPreview: !1,
                    platform: GA.Platform.WeChat,
                    engine: GA.EngineType.CocosCreator,
                    appId: "wx15761d21aa02b0d8",
                    channelKey: "krq_wndhd",
                    uuid: "93FF6424-9760-4D74-BE2E-726EED818AE3",
                    resolution: {
                        width: 750,
                        height: 1334
                    },
                    sharePath: "krq_wndhd=001"
                }).then(function() {
                    console.log("GA init success."), GA.getOpenId(function() {
                        GA.initRewardVideoAd([ "adunit-3594010cc6943b4b" ]), GA.initInterstitialAd("adunit-20e7c6aa340b3815"), 
                        GA.initBannerAd({
                            adTag: "LobbyUI",
                            adId: "adunit-f2663cfbe1d29fa3",
                            adIntervals: 30,
                            validTimes: null
                        }), GA.request({
                            url: "https://game.17tcw.com/default/login/reqLogin",
                            data: {
                                openid: GA.Info.openId,
                                channel: GA.Info.channelId,
                                scence: GA.Info.scene,
                                nickname: GA.Info.nickname,
                                headicon: GA.Info.avatar
                            },
                            method: "POST",
                            success: function success(e) {
                                console.log(e), GA.setUserId(e.data.data.userId);
                            }
                        });
                    });
                }).catch(function(e) {
                    console.log("GA init failed. " + e);
                });
            }, t.Instance = null, t.isFirstMenu = !1, n = __decorate([ p ], t);
        }(cc.Component));
        n.default = g, cc._RF.pop();
    }, {
        "./Config/GConfiguration": "GConfiguration",
        "./Game/Ad/AdData": "AdData",
        "./Game/Ad/oppo/RenderMgr": "RenderMgr",
        "./Game/GameApp": "GameApp",
        "./Managers/EventMgr": "EventMgr",
        "./Managers/GameMgr": "GameMgr",
        "./Managers/ResMgr": "ResMgr",
        "./Managers/SoundMgr": "SoundMgr",
        "./Managers/UIMgr": "UIMgr",
        "./Managers/UserMgr": "UserMgr",
        gameassistant3: 1
    } ],
    GameLoading_Ctrl: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6721dmrxXBFpL51BmLddfda", "GameLoading_Ctrl"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, __decorate([ i ], t);
        }(e("./../../Managers/UIMgr").UICtrl));
        n.default = a, cc._RF.pop();
    }, {
        "./../../Managers/UIMgr": "UIMgr"
    } ],
    GameMgr: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e9092ARht1G76/xFDxJgf3H", "GameMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.GameType = void 0;
        var o = e("./UserMgr"), i = cc._decorator, a = (i.ccclass, i.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._GameType = null, t.kuan = null, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                null === t.Instance ? t.Instance = this : this.destroy();
            }, Object.defineProperty(t.prototype, "GameType", {
                get: function get() {
                    return this._GameType;
                },
                set: function set(e) {
                    this._GameType = e;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.checkEnergy = function() {
                var e = o.UserMgr.instance().userInfo;
                return e.energy >= 1 && (e.energy--, !0);
            }, t.Instance = null, t;
        }(cc.Component));
        n.default = a, function(e) {
            e[e.ERASE = 0] = "ERASE", e[e.MOVE = 1] = "MOVE", e[e.TOHIT = 2] = "TOHIT", e[e.SOLDIER = 3] = "SOLDIER", 
            e[e.ROUND = 4] = "ROUND", e[e.RIVER = 5] = "RIVER", e[e.Snake = 6] = "Snake", e[e.Car = 7] = "Car", 
            e[e.Dialect = 8] = "Dialect", e[e.LineSoldier = 9] = "LineSoldier", e[e.Circular = 10] = "Circular", 
            e[e.Color = 11] = "Color", e[e.Near = 12] = "Near", e[e.Warp = 13] = "Warp", e[e.Rescue = 14] = "Rescue", 
            e[e.WarpMan = 15] = "WarpMan", e[e.Pig = 16] = "Pig", e[e.Maze = 17] = "Maze", e[e.Bridge = 18] = "Bridge";
        }(n.GameType || (n.GameType = {})), cc._RF.pop();
    }, {
        "./UserMgr": "UserMgr"
    } ],
    GameView: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0592b59xQBC/pIz7qGJACKh", "GameView"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/GameMgr"), r = e("../../Managers/SoundMgr"), s = e("../../Managers/UIMgr"), c = e("../../Managers/UserMgr"), l = e("../Ad/AdComponent"), d = e("../Ad/AdData"), u = e("./Leve"), h = e("../../Managers/ResMgr"), f = e("../../Config/PkgConfiguration"), p = cc._decorator, g = p.ccclass, v = (p.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isMaxleve = !1, t.gameLoading = null, t.isCover = !1, t.isNext = !1, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, this.view["lower/btnTis"].active = !0, this.view["lower/btnShuaXin"].active = !0, 
                a.default.Instance.GameType == a.GameType.TOHIT && (this.view["lower/btnTis"].active = !1, 
                this.view["lower/btnTiaoGuo"].x = 0), this.add_button_listen("lower/btnShuaXin", this, function() {
                    e.isCover || ("wx" == d.AdData.platform && l.AdComponent.onShowInterstitialAd(), 
                    e._startGame());
                }), this.add_button_listen("lower/btnTiaoGuo", this, function() {
                    e.videoNextLevel();
                }), i.default.Instance.add_event_listenner(o.GConfiguration.NextLevel, this, this.nextLevel), 
                i.default.Instance.add_event_listenner(o.GConfiguration.UpdateUserInfo, this, this._updateInfo), 
                i.default.Instance.add_event_listenner(o.GConfiguration.UpdateGame, this, this.updateGame), 
                s.default.Instance.show_ui("Pop", "GameLoading");
                var t = "GamePlayResPkg" + a.default.Instance.GameType;
                h.default.Instance.preloadResPackage(f.PkgConfiguration[t], this.test.bind(this), function() {
                    s.default.Instance.remove_ui("GameLoading"), this._startGame();
                }.bind(this));
            }, t.prototype.updateGame = function() {
                this._startGame();
            }, t.prototype._startGame = function(e) {
                switch (void 0 === e && (e = !1), this.view.view.children.forEach(function(e) {
                    e.destroy(), e.removeFromParent();
                }), a.default.Instance.GameType) {
                  case a.GameType.ERASE:
                    s.default.Instance.show_ui("EraseLv", "Lv_" + c.UserMgr.instance().userInfo.eraseLeve, this.view.view).addComponent(u.default), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.eraseLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.eraseLeve, {
                        mode: "擦除模式"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.eraseLeve, {
                        mode: "擦除模式"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("ccms", {
                        level: c.UserMgr._instance.userInfo.eraseLeve
                    });
                    break;

                  case a.GameType.MOVE:
                    s.default.Instance.show_ui("MoveLv", "Lv_" + c.UserMgr.instance().userInfo.moveLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.moveLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.moveLeve, {
                        mode: "移动模式"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.moveLeve, {
                        mode: "移动模式"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("ydms", {
                        level: c.UserMgr._instance.userInfo.moveLeve
                    });
                    break;

                  case a.GameType.TOHIT:
                    s.default.Instance.show_ui("ToHit", "Lv_" + c.UserMgr.instance().userInfo.toHitLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.toHitLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.toHitLeve, {
                        mode: "烧脑碰撞"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.toHitLeve, {
                        mode: "烧脑碰撞"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("snpz", {
                        level: c.UserMgr._instance.userInfo.toHitLeve
                    });
                    break;

                  case a.GameType.SOLDIER:
                    s.default.Instance.show_ui("Soldier", "Lv_" + c.UserMgr.instance().userInfo.soldierLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.soldierLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.soldierLeve, {
                        mode: "数字小兵"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.soldierLeve, {
                        mode: "数字小兵"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("szxb", {
                        level: c.UserMgr._instance.userInfo.soldierLeve
                    });
                    break;

                  case a.GameType.ROUND:
                    s.default.Instance.show_ui("Round", "Lv_" + c.UserMgr.instance().userInfo.roundLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.roundLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.roundLeve, {
                        mode: "围捕行动"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.roundLeve, {
                        mode: "围捕行动"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("wbxd", {
                        level: c.UserMgr._instance.userInfo.roundLeve
                    });
                    break;

                  case a.GameType.RIVER:
                    s.default.Instance.show_ui("River", "Lv_" + c.UserMgr.instance().userInfo.riverLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.riverLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.riverLeve, {
                        mode: "烧脑过河"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.riverLeve, {
                        mode: "烧脑过河"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("dsgh", {
                        level: c.UserMgr._instance.userInfo.riverLeve
                    });
                    break;

                  case a.GameType.Snake:
                    s.default.Instance.show_ui("Snake", "Lv_" + c.UserMgr.instance().userInfo.snakeLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.snakeLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.snakeLeve, {
                        mode: "移动贪吃蛇"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.snakeLeve, {
                        mode: "移动贪吃蛇"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("ydtcs", {
                        level: c.UserMgr._instance.userInfo.snakeLeve
                    });
                    break;

                  case a.GameType.Car:
                    s.default.Instance.show_ui("Car", "Lv_" + c.UserMgr.instance().userInfo.carLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.carLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.carLeve, {
                        mode: "划线停车"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.carLeve, {
                        mode: "划线停车"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("hxtc", {
                        level: c.UserMgr._instance.userInfo.carLeve
                    });
                    break;

                  case a.GameType.Dialect:
                    s.default.Instance.show_ui("Dialect", "Lv_" + c.UserMgr.instance().userInfo.dialectLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.dialectLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.dialectLeve, {
                        mode: "方言过河"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.dialectLeve, {
                        mode: "方言过河"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("sngh", {
                        level: c.UserMgr._instance.userInfo.dialectLeve
                    });
                    break;

                  case a.GameType.LineSoldier:
                    s.default.Instance.show_ui("LineSoldier", "Lv_" + c.UserMgr.instance().userInfo.LineSoldierLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.LineSoldierLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.LineSoldierLeve, {
                        mode: "画线冲击"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.LineSoldierLeve, {
                        mode: "画线冲击"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("hxcj", {
                        level: c.UserMgr._instance.userInfo.LineSoldierLeve
                    });
                    break;

                  case a.GameType.Circular:
                    s.default.Instance.show_ui("Circular", "Lv_" + c.UserMgr.instance().userInfo.CircularLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.CircularLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.CircularLeve, {
                        mode: "烧脑划线"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.CircularLeve, {
                        mode: "烧脑划线"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("hxcj", {
                        level: c.UserMgr._instance.userInfo.CircularLeve
                    });
                    break;

                  case a.GameType.Color:
                    s.default.Instance.show_ui("Color", "Lv_" + c.UserMgr.instance().userInfo.ColorLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.ColorLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.ColorLeve, {
                        mode: "相邻不同色"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.ColorLeve, {
                        mode: "相邻不同色"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("xlbts", {
                        level: c.UserMgr._instance.userInfo.ColorLeve
                    });
                    break;

                  case a.GameType.Near:
                    s.default.Instance.show_ui("Near", "Lv_" + c.UserMgr.instance().userInfo.NearLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.NearLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.NearLeve, {
                        mode: "烧脑相邻"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.NearLeve, {
                        mode: "烧脑相邻"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("snxl", {
                        level: c.UserMgr._instance.userInfo.NearLeve
                    });
                    break;

                  case a.GameType.Warp:
                    s.default.Instance.show_ui("Warp", "Lv", this.view.view), this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.WarpLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.WarpLeve, {
                        mode: "帮他脱险"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.WarpLeve, {
                        mode: "帮他脱险"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("bttx", {
                        level: c.UserMgr._instance.userInfo.WarpLeve
                    });
                    break;

                  case a.GameType.Rescue:
                    s.default.Instance.show_ui("Rescue", "Lv_" + c.UserMgr.instance().userInfo.RescueLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.RescueLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.RescueLeve, {
                        mode: "画线营救"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.RescueLeve, {
                        mode: "画线营救"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("hxyj", {
                        level: c.UserMgr._instance.userInfo.RescueLeve
                    });
                    break;

                  case a.GameType.WarpMan:
                    s.default.Instance.show_ui("WarpMan", "Lv", this.view.view), this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.WarpManLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.WarpManLeve, {
                        mode: "保护男生"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.WarpManLeve, {
                        mode: "保护男生"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("hxyj", {
                        level: c.UserMgr._instance.userInfo.WarpManLeve
                    });
                    break;

                  case a.GameType.Pig:
                    s.default.Instance.show_ui("Pig", "Lv", this.view.view), this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.PigLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.PigLeve, {
                        mode: "保护猪头"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.PigLeve, {
                        mode: "保护猪头"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("bhzt", {
                        level: c.UserMgr._instance.userInfo.PigLeve
                    });
                    break;

                  case a.GameType.Maze:
                    s.default.Instance.show_ui("Maze", "Lv_" + c.UserMgr.instance().userInfo.MazeLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.MazeLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.MazeLeve, {
                        mode: "迷宫"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.MazeLeve, {
                        mode: "迷宫"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("mg", {
                        level: c.UserMgr._instance.userInfo.MazeLeve
                    });
                    break;

                  case a.GameType.Bridge:
                    s.default.Instance.show_ui("Bridge", "Lv_" + c.UserMgr.instance().userInfo.BridgeLeve, this.view.view), 
                    this.view["top/leveValue"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.BridgeLeve, 
                    "wx" == d.AdData.platform ? (GA.sentLog("PlayGame", c.UserMgr.instance().userInfo.BridgeLeve, {
                        mode: "搭桥过河"
                    }), GA.sentLog("GameStart", c.UserMgr.instance().userInfo.BridgeLeve, {
                        mode: "搭桥过河"
                    })) : "tt" == d.AdData.platform && window.tt.reportAnalytics("dqgh", {
                        level: c.UserMgr._instance.userInfo.BridgeLeve
                    });
                }
                "wx" == d.AdData.platform && (l.AdComponent.onShowBanner(), a.default.Instance.GameType == a.GameType.TOHIT || a.default.Instance.GameType == a.GameType.RIVER || a.default.Instance.GameType == a.GameType.Dialect ? l.AdComponent.onShowGridAd(200, 250) : l.AdComponent.onShowGridAd(200, 450)), 
                this.isMaxleve = this.onCheckIsMaxLeve();
            }, t.prototype.test = function() {}, t.prototype.showTips = function() {
                switch (r.default.Instance.play_effect("click1"), a.default.Instance.GameType) {
                  case a.GameType.MOVE:
                  case a.GameType.WarpMan:
                  case a.GameType.Warp:
                  case a.GameType.Color:
                  case a.GameType.Rescue:
                  case a.GameType.ROUND:
                  case a.GameType.Near:
                  case a.GameType.Pig:
                  case a.GameType.Maze:
                  case a.GameType.Bridge:
                    0 == o.GConfiguration.LevelIsTips ? l.AdComponent.onShowRewardedAd(this, this.onShowTipsVedioSuccess, "提示", "游戏界面") : this.onShowTipsVedioSuccess(!0);
                    break;

                  default:
                    l.AdComponent.onShowRewardedAd(this, this.onShowTipsVedioSuccess, "提示", "游戏界面");
                }
            }, t.prototype.onShowTipsVedioSuccess = function(e) {
                e && i.default.Instance.dispatch_event(o.GConfiguration.ShowGameTips, "");
            }, t.prototype.nextLevel = function() {
                a.default.Instance.checkEnergy() ? this.onNextVedioSuccess(!0) : s.default.Instance.show_ui("Pop", "Tips");
            }, t.prototype.videoNextLevel = function() {
                this.isMaxleve ? this._showMaxLeveTips() : l.AdComponent.onShowRewardedAd(this, this.onNextVedioSuccess, "下一关", "游戏界面");
            }, t.prototype.onNextVedioSuccess = function(e) {
                if (e) {
                    switch (l.AdComponent.onSatrtRecord(), a.default.Instance.GameType) {
                      case a.GameType.ERASE:
                        c.UserMgr.instance().userInfo.eraseLeve++, c.UserMgr.instance().userInfo.eraseLeve > c.UserMgr.instance().userInfo.eraseMaxLeve && (c.UserMgr.instance().userInfo.eraseMaxLeve = c.UserMgr.instance().userInfo.eraseLeve);
                        break;

                      case a.GameType.MOVE:
                        c.UserMgr.instance().userInfo.moveLeve++, c.UserMgr.instance().userInfo.moveLeve > c.UserMgr.instance().userInfo.moveMaxLeve && (c.UserMgr.instance().userInfo.moveMaxLeve = c.UserMgr.instance().userInfo.moveLeve);
                        break;

                      case a.GameType.TOHIT:
                        c.UserMgr.instance().userInfo.toHitLeve++, c.UserMgr.instance().userInfo.toHitLeve > c.UserMgr.instance().userInfo.toHitMaxLeve && (c.UserMgr.instance().userInfo.toHitMaxLeve = c.UserMgr.instance().userInfo.toHitLeve);
                        break;

                      case a.GameType.SOLDIER:
                        c.UserMgr.instance().userInfo.soldierLeve++, c.UserMgr.instance().userInfo.soldierLeve > c.UserMgr.instance().userInfo.soldierMaxLeve && (c.UserMgr.instance().userInfo.soldierMaxLeve = c.UserMgr.instance().userInfo.soldierLeve);
                        break;

                      case a.GameType.ROUND:
                        c.UserMgr.instance().userInfo.roundLeve++, c.UserMgr.instance().userInfo.roundLeve > c.UserMgr.instance().userInfo.roundMaxLeve && (c.UserMgr.instance().userInfo.roundMaxLeve = c.UserMgr.instance().userInfo.roundLeve);
                        break;

                      case a.GameType.RIVER:
                        c.UserMgr.instance().userInfo.riverLeve++, c.UserMgr.instance().userInfo.riverLeve > c.UserMgr.instance().userInfo.riverMaxLeve && (c.UserMgr.instance().userInfo.riverMaxLeve = c.UserMgr.instance().userInfo.riverLeve);
                        break;

                      case a.GameType.Snake:
                        c.UserMgr.instance().userInfo.snakeLeve++, c.UserMgr.instance().userInfo.snakeLeve > c.UserMgr.instance().userInfo.snakeMaxLeve && (c.UserMgr.instance().userInfo.snakeMaxLeve = c.UserMgr.instance().userInfo.snakeLeve);
                        break;

                      case a.GameType.Car:
                        c.UserMgr.instance().userInfo.carLeve++, c.UserMgr.instance().userInfo.carLeve > c.UserMgr.instance().userInfo.carMaxLeve && (c.UserMgr.instance().userInfo.carMaxLeve = c.UserMgr.instance().userInfo.carLeve);
                        break;

                      case a.GameType.Dialect:
                        c.UserMgr.instance().userInfo.dialectLeve++, c.UserMgr.instance().userInfo.dialectLeve > c.UserMgr.instance().userInfo.dialectMaxLeve && (c.UserMgr.instance().userInfo.dialectMaxLeve = c.UserMgr.instance().userInfo.dialectLeve);
                        break;

                      case a.GameType.LineSoldier:
                        c.UserMgr.instance().userInfo.LineSoldierLeve++, c.UserMgr.instance().userInfo.LineSoldierLeve > c.UserMgr.instance().userInfo.LineSoldierMaxLeve && (c.UserMgr.instance().userInfo.LineSoldierMaxLeve = c.UserMgr.instance().userInfo.LineSoldierLeve);
                        break;

                      case a.GameType.Circular:
                        c.UserMgr.instance().userInfo.CircularLeve++, c.UserMgr.instance().userInfo.CircularLeve > c.UserMgr.instance().userInfo.CircularMaxLeve && (c.UserMgr.instance().userInfo.CircularMaxLeve = c.UserMgr.instance().userInfo.CircularLeve);
                        break;

                      case a.GameType.Color:
                        c.UserMgr.instance().userInfo.ColorLeve++, c.UserMgr.instance().userInfo.ColorLeve > c.UserMgr.instance().userInfo.ColorMaxLeve && (c.UserMgr.instance().userInfo.ColorMaxLeve = c.UserMgr.instance().userInfo.ColorLeve);
                        break;

                      case a.GameType.Near:
                        c.UserMgr.instance().userInfo.NearLeve++, c.UserMgr.instance().userInfo.NearLeve > c.UserMgr.instance().userInfo.NearMaxLeve && (c.UserMgr.instance().userInfo.NearMaxLeve = c.UserMgr.instance().userInfo.NearLeve);
                        break;

                      case a.GameType.Warp:
                        c.UserMgr.instance().userInfo.WarpLeve++, c.UserMgr.instance().userInfo.WarpLeve > c.UserMgr.instance().userInfo.WarpMaxLeve && (c.UserMgr.instance().userInfo.WarpMaxLeve = c.UserMgr.instance().userInfo.WarpLeve);
                        break;

                      case a.GameType.Rescue:
                        c.UserMgr.instance().userInfo.RescueLeve++, c.UserMgr.instance().userInfo.RescueLeve > c.UserMgr.instance().userInfo.RescueMaxLeve && (c.UserMgr.instance().userInfo.RescueMaxLeve = c.UserMgr.instance().userInfo.RescueLeve);
                        break;

                      case a.GameType.WarpMan:
                        c.UserMgr.instance().userInfo.WarpManLeve++, c.UserMgr.instance().userInfo.WarpManLeve > c.UserMgr.instance().userInfo.WarpManMaxLeve && (c.UserMgr.instance().userInfo.WarpManMaxLeve = c.UserMgr.instance().userInfo.WarpManLeve);
                        break;

                      case a.GameType.Pig:
                        c.UserMgr.instance().userInfo.PigLeve++, c.UserMgr.instance().userInfo.PigLeve > c.UserMgr.instance().userInfo.PigMaxLeve && (c.UserMgr.instance().userInfo.PigMaxLeve = c.UserMgr.instance().userInfo.PigLeve);
                        break;

                      case a.GameType.Maze:
                        c.UserMgr.instance().userInfo.MazeLeve++, c.UserMgr.instance().userInfo.MazeLeve > c.UserMgr.instance().userInfo.MazeMaxLeve && (c.UserMgr.instance().userInfo.MazeMaxLeve = c.UserMgr.instance().userInfo.MazeLeve);
                        break;

                      case a.GameType.Bridge:
                        c.UserMgr.instance().userInfo.BridgeLeve++, c.UserMgr.instance().userInfo.BridgeLeve > c.UserMgr.instance().userInfo.BridgeMaxLeve && (c.UserMgr.instance().userInfo.BridgeMaxLeve = c.UserMgr.instance().userInfo.BridgeLeve);
                    }
                    a.default.Instance.GameType == a.GameType.ERASE && c.UserMgr.instance().userInfo.eraseMaxLeve >= 24 && c.UserMgr.instance().userInfo.eraseMaxLeve == c.UserMgr.instance().userInfo.eraseLeve && (c.UserMgr.instance().userInfo.eraseMaxLeve = 23, 
                    c.UserMgr.instance().userInfo.eraseLeve = 23, this.onMaxLeveBtnClick()), a.default.Instance.GameType == a.GameType.MOVE && c.UserMgr.instance().userInfo.moveMaxLeve >= 22 && c.UserMgr.instance().userInfo.moveMaxLeve == c.UserMgr.instance().userInfo.moveLeve && (c.UserMgr.instance().userInfo.moveMaxLeve = 21, 
                    c.UserMgr.instance().userInfo.moveLeve = 21, this.onMaxLeveBtnClick()), a.default.Instance.GameType == a.GameType.TOHIT && c.UserMgr.instance().userInfo.toHitMaxLeve >= 21 && c.UserMgr.instance().userInfo.toHitMaxLeve == c.UserMgr.instance().userInfo.toHitLeve && (c.UserMgr.instance().userInfo.toHitMaxLeve = 20, 
                    c.UserMgr.instance().userInfo.toHitLeve = 20, this.onMaxLeveBtnClick()), a.default.Instance.GameType == a.GameType.SOLDIER && c.UserMgr.instance().userInfo.soldierMaxLeve >= 21 && c.UserMgr.instance().userInfo.soldierMaxLeve == c.UserMgr.instance().userInfo.soldierLeve && (c.UserMgr.instance().userInfo.soldierMaxLeve = 20, 
                    c.UserMgr.instance().userInfo.soldierLeve = 20, this.onMaxLeveBtnClick()), a.default.Instance.GameType == a.GameType.ROUND && c.UserMgr.instance().userInfo.roundMaxLeve >= o.GConfiguration.RounMaxLevel + 1 && c.UserMgr.instance().userInfo.roundMaxLeve == c.UserMgr.instance().userInfo.roundLeve && (c.UserMgr.instance().userInfo.roundMaxLeve = o.GConfiguration.RounMaxLevel, 
                    c.UserMgr.instance().userInfo.roundLeve = o.GConfiguration.RounMaxLevel, this.onMaxLeveBtnClick()), 
                    a.default.Instance.GameType == a.GameType.RIVER && c.UserMgr.instance().userInfo.riverMaxLeve >= 14 && c.UserMgr.instance().userInfo.riverMaxLeve == c.UserMgr.instance().userInfo.riverLeve && (c.UserMgr.instance().userInfo.riverMaxLeve = 13, 
                    c.UserMgr.instance().userInfo.riverLeve = 13, this.onMaxLeveBtnClick()), a.default.Instance.GameType == a.GameType.Snake && c.UserMgr.instance().userInfo.snakeMaxLeve >= 21 && c.UserMgr.instance().userInfo.snakeMaxLeve == c.UserMgr.instance().userInfo.snakeLeve && (c.UserMgr.instance().userInfo.snakeMaxLeve = 20, 
                    c.UserMgr.instance().userInfo.snakeLeve = 20, this.onMaxLeveBtnClick()), a.default.Instance.GameType == a.GameType.Car && c.UserMgr.instance().userInfo.carMaxLeve >= 15 && c.UserMgr.instance().userInfo.carMaxLeve == c.UserMgr.instance().userInfo.carLeve && (c.UserMgr.instance().userInfo.carMaxLeve = 14, 
                    c.UserMgr.instance().userInfo.carLeve = 14, this.onMaxLeveBtnClick()), a.default.Instance.GameType == a.GameType.Dialect && c.UserMgr.instance().userInfo.dialectMaxLeve >= 18 && c.UserMgr.instance().userInfo.dialectMaxLeve == c.UserMgr.instance().userInfo.dialectLeve && (c.UserMgr.instance().userInfo.dialectMaxLeve = 17, 
                    c.UserMgr.instance().userInfo.dialectLeve = 17, this.onMaxLeveBtnClick()), a.default.Instance.GameType == a.GameType.LineSoldier && c.UserMgr.instance().userInfo.LineSoldierMaxLeve >= o.GConfiguration.LineMaxLevel + 1 && c.UserMgr.instance().userInfo.LineSoldierMaxLeve == c.UserMgr.instance().userInfo.LineSoldierLeve && (c.UserMgr.instance().userInfo.LineSoldierMaxLeve = o.GConfiguration.LineMaxLevel, 
                    c.UserMgr.instance().userInfo.LineSoldierLeve = o.GConfiguration.LineMaxLevel, this.onMaxLeveBtnClick()), 
                    a.default.Instance.GameType == a.GameType.Circular && c.UserMgr.instance().userInfo.CircularMaxLeve >= o.GConfiguration.CircularMaxLevel + 1 && c.UserMgr.instance().userInfo.CircularMaxLeve == c.UserMgr.instance().userInfo.CircularLeve && (c.UserMgr.instance().userInfo.CircularMaxLeve = o.GConfiguration.CircularMaxLevel, 
                    c.UserMgr.instance().userInfo.CircularLeve = o.GConfiguration.CircularMaxLevel, 
                    this.onMaxLeveBtnClick()), a.default.Instance.GameType == a.GameType.Color && c.UserMgr.instance().userInfo.ColorMaxLeve >= o.GConfiguration.ColorMaxLeve + 1 && c.UserMgr.instance().userInfo.ColorMaxLeve == c.UserMgr.instance().userInfo.ColorLeve && (c.UserMgr.instance().userInfo.ColorMaxLeve = o.GConfiguration.ColorMaxLeve, 
                    c.UserMgr.instance().userInfo.ColorLeve = o.GConfiguration.ColorMaxLeve, this.onMaxLeveBtnClick()), 
                    a.default.Instance.GameType == a.GameType.Near && c.UserMgr.instance().userInfo.NearMaxLeve >= o.GConfiguration.NearMaxLeve + 1 && c.UserMgr.instance().userInfo.NearMaxLeve == c.UserMgr.instance().userInfo.NearLeve && (c.UserMgr.instance().userInfo.NearMaxLeve = o.GConfiguration.NearMaxLeve, 
                    c.UserMgr.instance().userInfo.NearLeve = o.GConfiguration.NearMaxLeve, this.onMaxLeveBtnClick()), 
                    a.default.Instance.GameType == a.GameType.Warp && c.UserMgr.instance().userInfo.WarpMaxLeve >= o.GConfiguration.WarpMaxLeve + 1 && c.UserMgr.instance().userInfo.WarpMaxLeve == c.UserMgr.instance().userInfo.WarpLeve && (c.UserMgr.instance().userInfo.WarpMaxLeve = o.GConfiguration.WarpMaxLeve, 
                    c.UserMgr.instance().userInfo.WarpLeve = o.GConfiguration.WarpMaxLeve, this.onMaxLeveBtnClick()), 
                    a.default.Instance.GameType == a.GameType.Rescue && c.UserMgr.instance().userInfo.RescueMaxLeve >= o.GConfiguration.RescueMaxLeve + 1 && c.UserMgr.instance().userInfo.RescueMaxLeve == c.UserMgr.instance().userInfo.RescueLeve && (c.UserMgr.instance().userInfo.RescueMaxLeve = o.GConfiguration.RescueMaxLeve, 
                    c.UserMgr.instance().userInfo.RescueLeve = o.GConfiguration.RescueMaxLeve, this.onMaxLeveBtnClick()), 
                    a.default.Instance.GameType == a.GameType.WarpMan && c.UserMgr.instance().userInfo.WarpManMaxLeve >= o.GConfiguration.WarpManMaxLeve + 1 && c.UserMgr.instance().userInfo.WarpManMaxLeve == c.UserMgr.instance().userInfo.WarpManLeve && (c.UserMgr.instance().userInfo.WarpManMaxLeve = o.GConfiguration.WarpManMaxLeve, 
                    c.UserMgr.instance().userInfo.WarpManLeve = o.GConfiguration.WarpManMaxLeve, this.onMaxLeveBtnClick()), 
                    a.default.Instance.GameType == a.GameType.Pig && c.UserMgr.instance().userInfo.PigMaxLeve >= o.GConfiguration.PigMaxLeve + 1 && c.UserMgr.instance().userInfo.PigMaxLeve == c.UserMgr.instance().userInfo.PigLeve && (c.UserMgr.instance().userInfo.PigMaxLeve = o.GConfiguration.PigMaxLeve, 
                    c.UserMgr.instance().userInfo.PigLeve = o.GConfiguration.PigMaxLeve, this.onMaxLeveBtnClick()), 
                    a.default.Instance.GameType == a.GameType.Maze && c.UserMgr.instance().userInfo.MazeMaxLeve >= o.GConfiguration.MazeMaxLeve + 1 && c.UserMgr.instance().userInfo.MazeMaxLeve == c.UserMgr.instance().userInfo.MazeLeve && (c.UserMgr.instance().userInfo.MazeMaxLeve = o.GConfiguration.MazeMaxLeve, 
                    c.UserMgr.instance().userInfo.MazeLeve = o.GConfiguration.MazeMaxLeve, this.onMaxLeveBtnClick()), 
                    a.default.Instance.GameType == a.GameType.Bridge && c.UserMgr.instance().userInfo.BridgeMaxLeve >= o.GConfiguration.BridgeMaxLeve + 1 && c.UserMgr.instance().userInfo.BridgeMaxLeve == c.UserMgr.instance().userInfo.BridgeLeve && (c.UserMgr.instance().userInfo.BridgeMaxLeve = o.GConfiguration.BridgeMaxLeve, 
                    c.UserMgr.instance().userInfo.BridgeLeve = o.GConfiguration.BridgeMaxLeve, this.onMaxLeveBtnClick()), 
                    this._startGame();
                }
            }, t.prototype.onCheckIsMaxLeve = function() {
                var e = !1;
                return a.default.Instance.GameType == a.GameType.ERASE && c.UserMgr.instance().userInfo.eraseLeve >= 23 && (e = !0), 
                a.default.Instance.GameType == a.GameType.MOVE && c.UserMgr.instance().userInfo.moveLeve >= 21 && (e = !0), 
                a.default.Instance.GameType == a.GameType.TOHIT && c.UserMgr.instance().userInfo.toHitLeve >= 20 && (e = !0), 
                a.default.Instance.GameType == a.GameType.SOLDIER && c.UserMgr.instance().userInfo.soldierLeve >= 20 && (e = !0), 
                a.default.Instance.GameType == a.GameType.ROUND && c.UserMgr.instance().userInfo.roundLeve >= o.GConfiguration.RounMaxLevel && (e = !0), 
                a.default.Instance.GameType == a.GameType.RIVER && c.UserMgr.instance().userInfo.riverLeve >= 13 && (e = !0), 
                a.default.Instance.GameType == a.GameType.Snake && c.UserMgr.instance().userInfo.snakeLeve >= 20 && (e = !0), 
                a.default.Instance.GameType == a.GameType.Car && c.UserMgr.instance().userInfo.carLeve >= 14 && (e = !0), 
                a.default.Instance.GameType == a.GameType.Dialect && c.UserMgr.instance().userInfo.dialectLeve >= 17 && (e = !0), 
                a.default.Instance.GameType == a.GameType.LineSoldier && c.UserMgr.instance().userInfo.LineSoldierLeve >= o.GConfiguration.LineMaxLevel && (e = !0), 
                a.default.Instance.GameType == a.GameType.Circular && c.UserMgr.instance().userInfo.CircularLeve >= o.GConfiguration.CircularMaxLevel && (e = !0), 
                a.default.Instance.GameType == a.GameType.Color && c.UserMgr.instance().userInfo.ColorLeve >= o.GConfiguration.ColorMaxLeve && (e = !0), 
                a.default.Instance.GameType == a.GameType.Near && c.UserMgr.instance().userInfo.NearLeve >= o.GConfiguration.NearMaxLeve && (e = !0), 
                a.default.Instance.GameType == a.GameType.Warp && c.UserMgr.instance().userInfo.WarpLeve >= o.GConfiguration.WarpMaxLeve && (e = !0), 
                a.default.Instance.GameType == a.GameType.Rescue && c.UserMgr.instance().userInfo.RescueLeve >= o.GConfiguration.RescueMaxLeve && (e = !0), 
                a.default.Instance.GameType == a.GameType.WarpMan && c.UserMgr.instance().userInfo.WarpManLeve >= o.GConfiguration.WarpManMaxLeve && (e = !0), 
                a.default.Instance.GameType == a.GameType.Pig && c.UserMgr.instance().userInfo.PigLeve >= o.GConfiguration.PigMaxLeve && (e = !0), 
                a.default.Instance.GameType == a.GameType.Maze && c.UserMgr.instance().userInfo.MazeLeve >= o.GConfiguration.MazeMaxLeve && (e = !0), 
                a.default.Instance.GameType == a.GameType.Bridge && c.UserMgr.instance().userInfo.BridgeLeve >= o.GConfiguration.BridgeMaxLeve && (e = !0), 
                e;
            }, t.prototype.onMaxLeveBtnClick = function() {
                s.default.Instance.show_ui("Scene", "HomeView"), s.default.Instance.remove_ui("GameView");
            }, t.prototype._showMaxLeveTips = function() {
                var e = this, t = new cc.Node(), n = t.addComponent(cc.Label);
                this.node.addChild(t), t.color = cc.color(0, 0, 0), n.string = "已经是最后一关，无法跳过", cc.tween(t).by(1, {
                    position: cc.v3(0, 400)
                }).call(function() {
                    e.isNext = !1, t.destroy();
                }).start();
            }, t.prototype._updateInfo = function() {
                this.view["top/userInfo/value"].getComponent(cc.Label).string = c.UserMgr.instance().userInfo.energy;
            }, t.prototype.onShowTips = function() {
                r.default.Instance.play_effect("click1"), s.default.Instance.show_ui("Pop", "Tips");
            }, t.prototype.onBtnClose = function() {
                r.default.Instance.play_effect("click1"), s.default.Instance.show_ui("Pop", "Checkpoint"), 
                s.default.Instance.remove_ui("GameView"), l.AdComponent.onStopRecord(this, null), 
                "wx" == d.AdData.platform && l.AdComponent.onShowInterstitialAd();
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.NextLevel, this, this.nextLevel), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.UpdateUserInfo, this, this._updateInfo), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.UpdateGame, this, this.updateGame);
            }, __decorate([ g ], t);
        }(s.UICtrl));
        n.default = v, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Config/PkgConfiguration": "PkgConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/GameMgr": "GameMgr",
        "../../Managers/ResMgr": "ResMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../Ad/AdComponent": "AdComponent",
        "../Ad/AdData": "AdData",
        "./Leve": "Leve"
    } ],
    GraphicsContro: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "950b4fSMMlAgYFwdn+4X+vF", "GraphicsContro"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UserMgr"), r = e("./RescueLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.m_pathArray = [], t.graphics = null, t.rigibodyLogic = null, t.physicsLine = null, 
                t.isMove = !1, t.isFirst = !1, t.posX = 0, t.posY = 0, t.isDraw = !1, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                this.node.width = cc.winSize.width, this.node.height = cc.winSize.height, this.graphics = this.getComponent(cc.Graphics);
            }, t.prototype.start = function() {
                this.node.parent.getComponent(r.default).updateAllPos(), this.posList = this.node.parent.getComponent(r.default).allListPos, 
                this.node.on(cc.Node.EventType.TOUCH_START, this.onStartCheck, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), 
                this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchOut, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchOut, this), 
                this.graphics.strokeColor = new cc.Color().fromHEX("#000000"), this.graphics.fillColor = new cc.Color().fromHEX("#000000"), 
                this.graphics.lineWidth = 18;
            }, t.prototype.offTouch = function() {
                this.node.off(cc.Node.EventType.TOUCH_START, this.onStartCheck, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), 
                this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchOut, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchOut, this);
            }, t.prototype.onStartCheck = function(e) {
                if (!this.isDraw) {
                    this.m_pathArray = [];
                    var t = this.node.convertToNodeSpaceAR(e.getLocation());
                    this.m_pathArray.push(t), this.graphics.moveTo(parseInt(t.x), parseInt(t.y));
                }
            }, t.prototype.onTouchMove = function(e) {
                if (!this.isDraw) {
                    var t = this.node.convertToNodeSpaceAR(e.getLocation()), n = this._calculationDis(this.m_pathArray[this.m_pathArray.length - 1], this.node.convertToNodeSpaceAR(e.getLocation()));
                    if (this.isMove && Math.abs(parseInt(t.x) - this.posX) < 8 && Math.abs(parseInt(t.y) - this.posY) < 8) return void (this.isMove = !1);
                    if (!this.isMove) {
                        if (Math.abs(parseInt(t.x) - this.m_pathArray[this.m_pathArray.length - 1].x) < 2 && Math.abs(parseInt(t.y) - this.m_pathArray[this.m_pathArray.length - 1].y) < 2) return;
                        n > 3 && this.m_pathArray.push(t);
                        for (var o = 0; o < this.posList.length; o++) {
                            var i = [];
                            if ("ji" == this.posList[o].name || "zhu" == this.posList[o].name || "home" == this.posList[o].name || "mu" == this.posList[o].name || "ground" == this.posList[o].name || "suan" == this.posList[o].name) {
                                var a;
                                for (var r in a = this.posList[o].getComponent(cc.PhysicsPolygonCollider).points) {
                                    "ji" == this.posList[o].name ? i.push(cc.v2(a[r].x + this.posList[o].x, a[r].y + this.posList[o].y - this.posList[o].height / 2)) : i.push(cc.v2(a[r].x + this.posList[o].x, a[r].y + this.posList[o].y));
                                }
                                if (cc.Intersection.pointInPolygon(t, i)) return this.m_pathArray.pop(), void (this.isMove || (this.posX = t.x, 
                                this.posY = t.y, this.isMove = !0));
                            }
                        }
                    }
                    this.isMove || (this.graphics.lineTo(parseInt(t.x), parseInt(t.y)), this.graphics.stroke());
                }
            }, t.prototype._calculationDis = function(e, t) {
                var n = 0;
                return e && (n = e.sub(t).mag()), n;
            }, t.prototype.onTouchOut = function() {
                this.isDraw = !0, this.isMove = !0, this.isFirst = !1, this.createRigibody(), this.offTouch(), 
                i.default.Instance.dispatch_event(o.GConfiguration.RescueLinEnd, "");
            }, t.prototype.createRigibody = function() {
                this.rigibodyLogic = this.addComponent(cc.RigidBody), this.rigibodyLogic.enabledContactListener = !0, 
                this.rigibodyLogic.gravityScale = 2, this.rigibodyLogic.bullet = !0, this.physicsLine = this.addComponent("MyPhysicsCollider"), 
                this.physicsLine.lineWidth = 10, this.physicsLine.points = this.m_pathArray, this.physicsLine.friction = .4, 
                this.physicsLine.density = .3, this.physicsLine.apply(), 2 != a.UserMgr._instance.userInfo.RescueLeve && 3 != a.UserMgr._instance.userInfo.RescueLeve && 6 != a.UserMgr._instance.userInfo.RescueLeve && 7 != a.UserMgr._instance.userInfo.RescueLeve && 10 != a.UserMgr._instance.userInfo.RescueLeve && 13 != a.UserMgr._instance.userInfo.RescueLeve && 15 != a.UserMgr._instance.userInfo.RescueLeve && 18 != a.UserMgr._instance.userInfo.RescueLeve && 20 != a.UserMgr._instance.userInfo.RescueLeve && 21 != a.UserMgr._instance.userInfo.RescueLeve && 24 != a.UserMgr._instance.userInfo.RescueLeve && 27 != a.UserMgr._instance.userInfo.RescueLeve || i.default.Instance.dispatch_event(o.GConfiguration.RescueChangeRig, "");
            }, __decorate([ c ], t);
        }(cc.Component));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UserMgr": "UserMgr",
        "./RescueLeve": "RescueLeve"
    } ],
    HomeView: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6b8415TQiFDTINia1eC1tw9", "HomeView"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/GameMgr"), r = e("../../Managers/SoundMgr"), s = e("../../Managers/UIMgr"), c = e("../../Managers/UserMgr"), l = e("../../Utils/Utils"), d = e("../Ad/AdComponent"), u = e("../Ad/AdData"), h = cc._decorator, f = h.ccclass, p = h.property, g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.energyLabel = null, t.timeLabel = null, t.viewList = null, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                this.add_button_listen("btnExit", this, this._onExit), i.default.Instance.add_event_listenner(o.GConfiguration.UpdateUserInfo, this, this._updateInfo), 
                this._updateInfo(), this.HideMode(), this.onSetModeLabel(), "wx" == u.AdData.platform && (GA.sentLog("HomeStartGame"), 
                d.AdComponent.onShowBanner(), d.AdComponent.onShowGridAd(200, 600)), "tt" == u.AdData.platform ? window.tt.reportAnalytics("startGame", {
                    form: "home"
                }) : "oppo" == u.AdData.platform ? d.AdComponent.onShowBanner() : "vivo" == u.AdData.platform && d.AdComponent.onShowBanner(), 
                "tt" != u.AdData.platform && "win" != u.AdData.platform || (this.viewList.getChildByName("cc").active = !1, 
                this.viewList.getChildByName("yd").active = !1, this.viewList.getChildByName("szzz").active = !1, 
                this.viewList.getChildByName("hxtc").active = !1);
            }, t.prototype.HideMode = function() {
                var e = 0;
                if (!(o.GConfiguration.isHideMode.length <= 0) && o.GConfiguration.isHideMode[0].length > 0) {
                    for (var t = function t(_t21) {
                        n.viewList.children.forEach(function(n) {
                            "more" == n.name && (e = n.zIndex), n.name == o.GConfiguration.isHideMode[0][_t21] && (n.active = !1, 
                            n.zIndex = e + 1);
                        });
                    }, n = this, i = 0; i < o.GConfiguration.isHideMode[0].length; i++) {
                        t(i);
                    }
                    var a = "";
                    for (i = 0; i < this.viewList.childrenCount; i++) {
                        if (0 == this.viewList.children[i].zIndex) return a = this.viewList.children[i].name, 
                        void this.onChangeFirstModeLock(a);
                    }
                }
            }, t.prototype.onChangeFirstModeLock = function(e) {
                switch (e) {
                  case "hxtc":
                    c.UserMgr._instance.userInfo.carLock = 1;
                    break;

                  case "wbxd":
                    c.UserMgr._instance.userInfo.roundLock = 1;
                    break;

                  case "szzz":
                    c.UserMgr._instance.userInfo.soldierLock = 1;
                    break;

                  case "snhx":
                    c.UserMgr._instance.userInfo.CircularLock = 1;
                    break;

                  case "tcs":
                    c.UserMgr._instance.userInfo.snakeLock = 1;
                    break;

                  case "dsgh":
                    c.UserMgr._instance.userInfo.riverLock = 1;
                    break;

                  case "snpz":
                    c.UserMgr._instance.userInfo.toHitLock = 1;
                    break;

                  case "cc":
                    c.UserMgr._instance.userInfo.eraseLock = 1;
                    break;

                  case "yd":
                    c.UserMgr._instance.userInfo.moveLock = 1;
                    break;

                  case "xlbts":
                    c.UserMgr._instance.userInfo.ColorLock = 1;
                    break;

                  case "snxl":
                    c.UserMgr._instance.userInfo.NearLock = 1;
                    break;

                  case "bttx":
                    c.UserMgr._instance.userInfo.WarpLock = 1;

                  case "hxyj":
                    c.UserMgr._instance.userInfo.RescueLock = 1;
                    break;

                  case "bhnh":
                    c.UserMgr._instance.userInfo.WarpManLock = 1;

                  case "bhzt":
                    c.UserMgr._instance.userInfo.PigLock = 1;
                    break;

                  case "mg":
                    c.UserMgr._instance.userInfo.MazeLock = 1;
                    break;

                  case "dqgh":
                    c.UserMgr._instance.userInfo.BridgeLock = 1;
                }
            }, t.prototype.onSetModeLabel = function() {
                var e = this.viewList.getChildByName("sngh");
                c.UserMgr.instance().userInfo.dialectMaxLeve >= 17 && (c.UserMgr.instance().userInfo.dialectMaxLeve = 17), 
                e.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.dialectMaxLeve + "";
                var t = this.viewList.getChildByName("snhx");
                c.UserMgr.instance().userInfo.CircularMaxLeve >= o.GConfiguration.CircularMaxLevel && (c.UserMgr.instance().userInfo.CircularMaxLeve = o.GConfiguration.CircularMaxLevel), 
                t.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.CircularMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.CircularLock && (t.getChildByName("AdIcon").active = !1);
                var n = this.viewList.getChildByName("hxcj");
                c.UserMgr.instance().userInfo.LineSoldierMaxLeve >= o.GConfiguration.LineMaxLevel && (c.UserMgr.instance().userInfo.LineSoldierMaxLeve = o.GConfiguration.LineMaxLevel), 
                n.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.LineSoldierMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.LineLock && (n.getChildByName("AdIcon").active = !1);
                var i = this.viewList.getChildByName("hxtc");
                c.UserMgr.instance().userInfo.carMaxLeve >= 14 && (c.UserMgr.instance().userInfo.carMaxLeve = 14), 
                i.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.carMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.carLock && (i.getChildByName("AdIcon").active = !1);
                var a = this.viewList.getChildByName("wbxd");
                c.UserMgr.instance().userInfo.roundMaxLeve >= o.GConfiguration.RounMaxLevel && (c.UserMgr.instance().userInfo.roundMaxLeve = o.GConfiguration.RounMaxLevel), 
                a.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.roundMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.roundLock && (a.getChildByName("AdIcon").active = !1);
                var r = this.viewList.getChildByName("szzz");
                c.UserMgr.instance().userInfo.soldierMaxLeve >= 20 && (c.UserMgr.instance().userInfo.soldierMaxLeve = 20), 
                r.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.soldierMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.soldierLock && (r.getChildByName("AdIcon").active = !1);
                var s = this.viewList.getChildByName("tcs");
                c.UserMgr.instance().userInfo.snakeMaxLeve >= 20 && (c.UserMgr.instance().userInfo.snakeMaxLeve = 20), 
                s.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.snakeMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.snakeLock && (s.getChildByName("AdIcon").active = !1);
                var l = this.viewList.getChildByName("dsgh");
                c.UserMgr.instance().userInfo.riverMaxLeve >= 13 && (c.UserMgr.instance().userInfo.riverMaxLeve = 13), 
                l.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.riverMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.riverLock && (l.getChildByName("AdIcon").active = !1);
                var d = this.viewList.getChildByName("snpz");
                c.UserMgr.instance().userInfo.toHitMaxLeve >= 20 && (c.UserMgr.instance().userInfo.toHitMaxLeve = 20), 
                d.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.toHitMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.toHitLock && (d.getChildByName("AdIcon").active = !1);
                var u = this.viewList.getChildByName("cc");
                c.UserMgr.instance().userInfo.eraseMaxLeve >= 23 && (c.UserMgr.instance().userInfo.eraseMaxLeve = 23), 
                u.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.eraseMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.eraseLock && (u.getChildByName("AdIcon").active = !1);
                var h = this.viewList.getChildByName("yd");
                c.UserMgr.instance().userInfo.moveMaxLeve >= 21 && (c.UserMgr.instance().userInfo.moveMaxLeve = 21), 
                h.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.moveMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.moveLock && (h.getChildByName("AdIcon").active = !1);
                var f = this.viewList.getChildByName("xlbts");
                c.UserMgr.instance().userInfo.ColorMaxLeve >= o.GConfiguration.ColorMaxLeve && (c.UserMgr.instance().userInfo.ColorMaxLeve = o.GConfiguration.ColorMaxLeve), 
                f.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.ColorMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.ColorLock && (f.getChildByName("AdIcon").active = !1);
                var p = this.viewList.getChildByName("snxl");
                c.UserMgr.instance().userInfo.NearMaxLeve >= o.GConfiguration.NearMaxLeve && (c.UserMgr.instance().userInfo.NearMaxLeve = o.GConfiguration.NearMaxLeve), 
                p.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.NearMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.NearLock && (p.getChildByName("AdIcon").active = !1);
                var g = this.viewList.getChildByName("bttx");
                c.UserMgr.instance().userInfo.WarpMaxLeve >= o.GConfiguration.WarpMaxLeve && (c.UserMgr.instance().userInfo.WarpMaxLeve = o.GConfiguration.WarpMaxLeve), 
                g.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.WarpMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.WarpLock && (g.getChildByName("AdIcon").active = !1);
                var v = this.viewList.getChildByName("hxyj");
                c.UserMgr.instance().userInfo.RescueMaxLeve >= o.GConfiguration.RescueMaxLeve && (c.UserMgr.instance().userInfo.RescueMaxLeve = o.GConfiguration.RescueMaxLeve), 
                v.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.RescueMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.RescueLock && (v.getChildByName("AdIcon").active = !1);
                var m = this.viewList.getChildByName("bhnh");
                c.UserMgr.instance().userInfo.WarpManMaxLeve >= o.GConfiguration.WarpManMaxLeve && (c.UserMgr.instance().userInfo.WarpManMaxLeve = o.GConfiguration.WarpManMaxLeve), 
                m.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.WarpManMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.WarpManLock && (m.getChildByName("AdIcon").active = !1);
                var _ = this.viewList.getChildByName("bhzt");
                c.UserMgr.instance().userInfo.PigMaxLeve >= o.GConfiguration.PigMaxLeve && (c.UserMgr.instance().userInfo.PigMaxLeve = o.GConfiguration.PigMaxLeve), 
                _.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.PigMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.PigLock && (_.getChildByName("AdIcon").active = !1);
                var y = this.viewList.getChildByName("mg");
                c.UserMgr.instance().userInfo.MazeMaxLeve >= o.GConfiguration.MazeMaxLeve && (c.UserMgr.instance().userInfo.MazeMaxLeve = o.GConfiguration.MazeMaxLeve), 
                y.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.MazeMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.MazeLock && (y.getChildByName("AdIcon").active = !1);
                var I = this.viewList.getChildByName("dqgh");
                c.UserMgr.instance().userInfo.BridgeMaxLeve >= o.GConfiguration.BridgeMaxLeve && (c.UserMgr.instance().userInfo.BridgeMaxLeve = o.GConfiguration.BridgeMaxLeve), 
                I.getChildByName("nowLeve").getComponent(cc.Label).string = c.UserMgr.instance().userInfo.BridgeMaxLeve + "", 
                1 == c.UserMgr._instance.userInfo.BridgeLock && (I.getChildByName("AdIcon").active = !1);
            }, t.prototype.intoEraseGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.eraseLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.ERASE, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.eraseLock = 1, e.intoEraseGame());
                }, "解锁擦除模式", "模式界面");
            }, t.prototype.intoBridgeGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.BridgeLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.Bridge, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.BridgeLock = 1, e.intoBridgeGame());
                }, "解锁搭桥过河", "模式界面");
            }, t.prototype.intoRescueGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.RescueLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.Rescue, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.RescueLock = 1, e.intoRescueGame());
                }, "解锁画线营救", "模式界面");
            }, t.prototype.intoWarpGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.WarpLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.Warp, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.WarpLock = 1, e.intoWarpGame());
                }, "解锁帮他脱险", "模式界面");
            }, t.prototype.intoWarpManGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.WarpManLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.WarpMan, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.WarpManLock = 1, e.intoWarpManGame());
                }, "解锁保护男孩", "模式界面");
            }, t.prototype.intoCircular = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.CircularLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.Circular, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.CircularLock = 1, e.intoCircular());
                }, "解锁烧脑划线", "模式界面");
            }, t.prototype.intoNear = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.NearLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.Near, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.NearLock = 1, e.intoNear());
                }, "解锁烧脑相邻", "模式界面");
            }, t.prototype.intoDrawingSoldier = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.LineLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.LineSoldier, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.LineLock = 1, e.intoDrawingSoldier());
                }, "解锁划线冲击", "模式界面");
            }, t.prototype.intoMoveGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.moveLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.MOVE, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.moveLock = 1, e.intoMoveGame());
                }, "解锁移动模式", "模式界面");
            }, t.prototype.intoToHitGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.toHitLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.TOHIT, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.toHitLock = 1, e.intoToHitGame());
                }, "解锁碰撞模式", "模式界面");
            }, t.prototype.intoSoldierGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.soldierLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.SOLDIER, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.soldierLock = 1, e.intoSoldierGame());
                }, "解锁数字小兵", "模式界面");
            }, t.prototype.intoRoundierGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.roundLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.ROUND, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.roundLock = 1, e.intoRoundierGame());
                }, "解锁围捕行动", "模式界面");
            }, t.prototype.intoRiverGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.riverLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.RIVER, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.riverLock = 1, e.intoRiverGame());
                }, "解锁斗兽过河", "模式界面");
            }, t.prototype.intoSnakeGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.snakeLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.Snake, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.snakeLock = 1, e.intoSnakeGame());
                }, "解锁贪吃蛇", "模式界面");
            }, t.prototype.intoCarGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.carLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.Car, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.carLock = 1, e.intoCarGame());
                }, "解锁划线停车", "模式界面");
            }, t.prototype.intoColorGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.ColorLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.Color, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.ColorLock = 1, e.intoColorGame());
                }, "解锁相邻不同色", "模式界面");
            }, t.prototype.intoPigGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.PigLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.Pig, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.PigLock = 1, e.intoPigGame());
                }, "解锁保护猪头", "模式界面");
            }, t.prototype.intoMazeGame = function() {
                var e = this;
                c.UserMgr.instance().userInfo.energy <= 0 ? s.default.Instance.show_ui("Pop", "Tips") : 0 != c.UserMgr._instance.userInfo.MazeLock ? (r.default.Instance.play_effect("click1"), 
                a.default.Instance.GameType = a.GameType.Maze, this.onStartGame()) : d.AdComponent.onShowRewardedAd(this, function(t) {
                    t && (c.UserMgr._instance.userInfo.MazeLock = 1, e.intoMazeGame());
                }, "解锁迷宫", "模式界面");
            }, t.prototype.intoDialectGame = function() {
                r.default.Instance.play_effect("click1"), a.default.Instance.GameType = a.GameType.Dialect, 
                this.onStartGame();
            }, t.prototype.showTips = function() {
                r.default.Instance.play_effect("click1"), s.default.Instance.show_ui("Pop", "Tips");
            }, t.prototype._updateInfo = function() {
                this.energyLabel.string = c.UserMgr.instance().userInfo.energy + "";
                var e = c.UserMgr.instance().userInfo;
                if (e.energy < 5) {
                    var t = e.oldEnerTime + 3e5;
                    this.timeLabel.string = l.Utils.timestampToTime(new Date().getTime(), t);
                } else this.timeLabel.string = "";
            }, t.prototype.onStartGame = function() {
                "vivo" == u.AdData.platform && d.AdComponent.onHideGridAd(), a.default.Instance.checkEnergy() ? (d.AdComponent.onSatrtRecord(), 
                s.default.Instance.remove_ui("HomeView"), s.default.Instance.show_ui("Scene", "GameView")) : s.default.Instance.show_ui("Pop", "Tips");
            }, t.prototype._onExit = function() {
                r.default.Instance.play_effect("click1"), s.default.Instance.show_ui("Scene", "LobbyView"), 
                s.default.Instance.remove_ui("HomeView");
            }, t.prototype.onDestroy = function() {
                "oppo" != u.AdData.platform && "vivo" != u.AdData.platform || d.AdComponent.onHideBanner(), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.UpdateUserInfo, this, this._updateInfo);
            }, __decorate([ p(cc.Label) ], t.prototype, "energyLabel", void 0), __decorate([ p(cc.Label) ], t.prototype, "timeLabel", void 0), 
            __decorate([ p(cc.Node) ], t.prototype, "viewList", void 0), __decorate([ f ], t);
        }(s.UICtrl);
        n.default = g, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/GameMgr": "GameMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../../Utils/Utils": "Utils",
        "../Ad/AdComponent": "AdComponent",
        "../Ad/AdData": "AdData"
    } ],
    IconMgr: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ac3f02N+ctKtIdBNa14+AEW", "IconMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../Ad/AdData"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                "wx" == o.AdData.platform ? this.node.getChildByName("wx").active = !0 : this.node.getChildByName("tt").active = !0;
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../Ad/AdData": "AdData"
    } ],
    Item: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8f4d68hazpDDpnKymXcKQl4", "Item"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/GameMgr"), i = e("../../Managers/SoundMgr"), a = e("../../Managers/UIMgr"), r = e("../../Managers/UserMgr"), s = e("../Ad/AdComponent"), c = cc._decorator, l = c.ccclass, d = (c.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.id = 0, t.islock = !1, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.setId = function(e) {
                this.id = e;
                var t = 0;
                switch (this.node.children.forEach(function(e) {
                    e.active = !1;
                }), o.default.Instance.GameType) {
                  case o.GameType.ERASE:
                    t = r.UserMgr.instance().userInfo.eraseMaxLeve;
                    break;

                  case o.GameType.MOVE:
                    t = r.UserMgr.instance().userInfo.moveMaxLeve;
                    break;

                  case o.GameType.TOHIT:
                    t = r.UserMgr.instance().userInfo.toHitMaxLeve;
                    break;

                  case o.GameType.SOLDIER:
                    t = r.UserMgr.instance().userInfo.soldierMaxLeve;
                    break;

                  case o.GameType.ROUND:
                    t = r.UserMgr.instance().userInfo.roundMaxLeve;
                    break;

                  case o.GameType.RIVER:
                    t = r.UserMgr.instance().userInfo.riverMaxLeve;
                    break;

                  case o.GameType.Snake:
                    t = r.UserMgr.instance().userInfo.snakeMaxLeve;
                    break;

                  case o.GameType.Car:
                    t = r.UserMgr.instance().userInfo.carMaxLeve;
                    break;

                  case o.GameType.Dialect:
                    t = r.UserMgr.instance().userInfo.dialectMaxLeve;
                    break;

                  case o.GameType.LineSoldier:
                    t = r.UserMgr.instance().userInfo.LineSoldierMaxLeve;
                    break;

                  case o.GameType.Circular:
                    t = r.UserMgr.instance().userInfo.CircularMaxLeve;
                    break;

                  case o.GameType.Color:
                    t = r.UserMgr.instance().userInfo.ColorMaxLeve;
                    break;

                  case o.GameType.Near:
                    t = r.UserMgr.instance().userInfo.NearMaxLeve;
                    break;

                  case o.GameType.Warp:
                    t = r.UserMgr.instance().userInfo.WarpMaxLeve;
                    break;

                  case o.GameType.Rescue:
                    t = r.UserMgr.instance().userInfo.RescueMaxLeve;
                    break;

                  case o.GameType.WarpMan:
                    t = r.UserMgr.instance().userInfo.WarpManMaxLeve;
                    break;

                  case o.GameType.Pig:
                    t = r.UserMgr.instance().userInfo.PigMaxLeve;
                    break;

                  case o.GameType.Maze:
                    t = r.UserMgr.instance().userInfo.MazeMaxLeve;
                    break;

                  case o.GameType.Bridge:
                    t = r.UserMgr.instance().userInfo.BridgeMaxLeve;
                }
                e > t ? (this.view.img_guanka03.active = !0, this.islock = !0) : e == t ? (this.view.labe.active = !0, 
                this.view.labe.getComponent(cc.Label).string = e) : e < t && (this.view.img_guanka01.active = !0, 
                this.view.labe.active = !0, this.view.labe.getComponent(cc.Label).string = e);
            }, t.prototype.intoGame = function() {
                if (i.default.Instance.play_effect("click1"), !this.islock) if (o.default.Instance.checkEnergy()) {
                    switch (o.default.Instance.GameType) {
                      case o.GameType.ERASE:
                        if (this.id > r.UserMgr.instance().userInfo.eraseMaxLeve) return;
                        r.UserMgr.instance().userInfo.eraseLeve = this.id;
                        break;

                      case o.GameType.MOVE:
                        if (this.id > r.UserMgr.instance().userInfo.moveMaxLeve) return;
                        r.UserMgr.instance().userInfo.moveLeve = this.id;
                        break;

                      case o.GameType.TOHIT:
                        if (this.id > r.UserMgr.instance().userInfo.toHitMaxLeve) return;
                        r.UserMgr.instance().userInfo.toHitLeve = this.id;
                        break;

                      case o.GameType.SOLDIER:
                        if (this.id > r.UserMgr.instance().userInfo.soldierMaxLeve) return;
                        r.UserMgr.instance().userInfo.soldierLeve = this.id;
                        break;

                      case o.GameType.ROUND:
                        if (this.id > r.UserMgr.instance().userInfo.roundMaxLeve) return;
                        r.UserMgr.instance().userInfo.roundLeve = this.id;
                        break;

                      case o.GameType.RIVER:
                        if (this.id > r.UserMgr.instance().userInfo.riverMaxLeve) return;
                        r.UserMgr.instance().userInfo.riverLeve = this.id;
                        break;

                      case o.GameType.Snake:
                        if (this.id > r.UserMgr.instance().userInfo.snakeMaxLeve) return;
                        r.UserMgr.instance().userInfo.snakeLeve = this.id;
                        break;

                      case o.GameType.Car:
                        if (this.id > r.UserMgr.instance().userInfo.carMaxLeve) return;
                        r.UserMgr.instance().userInfo.carLeve = this.id;
                        break;

                      case o.GameType.Dialect:
                        if (this.id > r.UserMgr.instance().userInfo.dialectMaxLeve) return;
                        r.UserMgr.instance().userInfo.dialectLeve = this.id;
                        break;

                      case o.GameType.LineSoldier:
                        if (this.id > r.UserMgr.instance().userInfo.LineSoldierMaxLeve) return;
                        r.UserMgr.instance().userInfo.LineSoldierLeve = this.id;
                        break;

                      case o.GameType.Circular:
                        if (this.id > r.UserMgr.instance().userInfo.CircularMaxLeve) return;
                        r.UserMgr.instance().userInfo.CircularLeve = this.id;
                        break;

                      case o.GameType.Color:
                        if (this.id > r.UserMgr.instance().userInfo.ColorMaxLeve) return;
                        r.UserMgr.instance().userInfo.ColorLeve = this.id;
                        break;

                      case o.GameType.Near:
                        if (this.id > r.UserMgr.instance().userInfo.NearMaxLeve) return;
                        r.UserMgr.instance().userInfo.NearLeve = this.id;
                        break;

                      case o.GameType.Warp:
                        if (this.id > r.UserMgr.instance().userInfo.WarpMaxLeve) return;
                        r.UserMgr.instance().userInfo.WarpLeve = this.id;
                        break;

                      case o.GameType.Rescue:
                        if (this.id > r.UserMgr.instance().userInfo.RescueMaxLeve) return;
                        r.UserMgr.instance().userInfo.RescueLeve = this.id;
                        break;

                      case o.GameType.WarpMan:
                        if (this.id > r.UserMgr.instance().userInfo.WarpManMaxLeve) return;
                        r.UserMgr.instance().userInfo.WarpManLeve = this.id;
                        break;

                      case o.GameType.Pig:
                        if (this.id > r.UserMgr.instance().userInfo.PigMaxLeve) return;
                        r.UserMgr.instance().userInfo.PigLeve = this.id;
                        break;

                      case o.GameType.Maze:
                        if (this.id > r.UserMgr.instance().userInfo.MazeMaxLeve) return;
                        r.UserMgr.instance().userInfo.MazeLeve = this.id;
                        break;

                      case o.GameType.Bridge:
                        if (this.id > r.UserMgr.instance().userInfo.BridgeMaxLeve) return;
                        r.UserMgr.instance().userInfo.BridgeLeve = this.id;
                    }
                    a.default.Instance.remove_ui("Checkpoint"), a.default.Instance.remove_ui("HomeView"), 
                    a.default.Instance.show_ui("Scene", "GameView"), s.AdComponent.onSatrtRecord();
                } else a.default.Instance.show_ui("Pop", "Tips");
            }, __decorate([ l ], t);
        }(a.UICtrl));
        n.default = d, cc._RF.pop();
    }, {
        "../../Managers/GameMgr": "GameMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../Ad/AdComponent": "AdComponent"
    } ],
    JellyTween: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "95a47D0FPdGP48R3Ya1tlRm", "JellyTween"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = o.property, r = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.frequency = 4, t.decay = 2, t.pressScale = .2, t.totalTime = 1, t.interval = 1, 
                t.playOnLoad = !1, t.originalScale = 1, t.tween = null, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.originalScale = this.node.scale, this.playOnLoad && this.play();
            }, t.prototype.play = function(e) {
                var t = this, n = null != e && e > 0 ? e : 1e9, o = .2 * this.totalTime, i = .15 * this.totalTime, a = .65 * this.totalTime, r = this.pressScale / i;
                this.tween = cc.tween(this.node).repeat(n, cc.tween().to(o, {
                    scaleX: this.originalScale + this.pressScale,
                    scaleY: this.originalScale - this.pressScale
                }, {
                    easing: "sineOut"
                }).to(i, {
                    scaleX: this.originalScale,
                    scaleY: this.originalScale
                }).to(a, {
                    scaleX: {
                        value: this.originalScale,
                        progress: function progress(e, n, o, i) {
                            return n - t.getDifference(r, i);
                        }
                    },
                    scaleY: {
                        value: this.originalScale,
                        progress: function progress(e, n, o, i) {
                            return n + t.getDifference(r, i);
                        }
                    }
                }).delay(this.interval)).start();
            }, t.prototype.stop = function() {
                this.tween && this.tween.stop(), this.node.setScale(this.originalScale);
            }, t.prototype.getDifference = function(e, t) {
                var n = this.frequency * Math.PI * 2;
                return e * (Math.sin(t * n) / Math.exp(this.decay * t) / n);
            }, __decorate([ a({
                tooltip: !1
            }) ], t.prototype, "frequency", void 0), __decorate([ a({
                tooltip: !1
            }) ], t.prototype, "decay", void 0), __decorate([ a({
                tooltip: !1
            }) ], t.prototype, "pressScale", void 0), __decorate([ a({
                tooltip: !1
            }) ], t.prototype, "totalTime", void 0), __decorate([ a({
                tooltip: !1
            }) ], t.prototype, "interval", void 0), __decorate([ a({
                tooltip: !1
            }) ], t.prototype, "playOnLoad", void 0), __decorate([ i ], t);
        }(cc.Component);
        n.default = r, cc._RF.pop();
    }, {} ],
    KSAdBase: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6d609PR3E1KKqB8+iGixUs4", "KSAdBase"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.KSAdBase = void 0;
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.mediaRecorder = null, t.videoPath = null, t.recording = !1, t.timer = 0, 
                t;
            }
            var n;
            return __extends(t, e), n = t, t.instance = function() {
                return this._instance || (this._instance = new n()), this._instance;
            }, t.onShowRewardedAd = function(e, t) {
                var n = ks.createRewardedVideoAd({
                    adUnitId: "adunit-3594010cc6943b4b",
                });
                n ? (n.onClose(function(e) {
                    e && e.isEnded ? t && t(!0) : t && t(!1), n.destroy();
                }), n.onError(function(e) {
                    console.log(e.code, e.msg), n.show().then(function(e) {
                        console.log("广告加载成功" + e);
                    }).catch(function(e) {
                        t && t(!1), console.error("广告组件加载出现问题", e);
                    }).destroy();
                }), n.show()) : console.log("创建激励视频组件失败");
            }, t.onShowInterAd = function() {
                console.log("开始加载插屏广告");
                var e = ks.createInterstitialAd({
                    adUnitId: "adunit-20e7c6aa340b3815",
                });
                e ? (e.onClose(function() {
                    e.destroy();
                }), e.onError(function(e) {
                    console.log("插屏加载失败", e.code, e.msg);
                }), e.show()) : console.log("创建插屏广告组件失败");
            }, t.prototype.startRecord = function() {
                var e = this;
                0 != e.timer && (e.timer = 0), e.videoPath = null, this.mediaRecorder = kwaigame.createMediaRecorder(), 
                null != this.mediaRecorder ? (this.mediaRecorder.onStart(function() {
                    e.schedule(e.Timer, 1, 30), console.log("录频开始成功");
                }), this.mediaRecorder.onStop(function(t) {
                    e.unschedule(e.Timer), t && t.videoID ? (e.videoPath = t.videoID, console.log("录屏停止，录制成功")) : console.log("录屏停止，录制失败");
                }), this.mediaRecorder.onError(function(e) {
                    console.log("录频过程中发生错误 " + JSON.stringify(e) + " ");
                }), null != this.mediaRecorder && this.mediaRecorder.start()) : console.log("返回 null 时表示当前 APP 版本不支持录屏");
            }, t.prototype.Timer = function() {
                this.timer >= 30 ? this.stopRecord() : this.timer++;
            }, t.prototype.stopRecord = function() {
                null != this.mediaRecorder && this.mediaRecorder.stop();
            }, t.prototype.shareRecord = function(e, t) {
                if (console.log("分享录屏接口"), null != this.mediaRecorder) {
                    if (null === this.videoPath) return;
                    this.mediaRecorder.publishVideo({
                        video: this.videoPath,
                        callback: function callback(n) {
                            n ? (console.log("发布录屏失败： " + JSON.stringify(n)), t(e, !1)) : (console.log("发布录屏成功"), 
                            t(e, !0));
                        }
                    });
                }
            }, t.bannerAdUnitId = "", t.interstitialUnitId = "2300002875_02", t.ksId = "2300002875_01", 
            t._instance = null, n = __decorate([ i ], t);
        }(cc.Component));
        n.KSAdBase = a, cc._RF.pop();
    }, {} ],
    KSNextVedio: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a01c04DuZxI94qzhVr1Yien", "KSNextVedio"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../AdComponent"), a = e("../AdData"), r = cc._decorator, s = r.ccclass, c = (r.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onClickColse = function() {
                if ("ks" == a.AdData.platform) {
                    var e = Math.floor(10 * Math.random());
                    console.log(e, "随机的数"), console.log(o.GConfiguration.NextNativeAd, "远程的数"), e <= o.GConfiguration.NextNativeAd && i.AdComponent.onShowRewardedAd(this, function() {
                        console.log("<");
                    });
                }
            }, __decorate([ s ], t);
        }(cc.Component));
        n.default = c, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../AdComponent": "AdComponent",
        "../AdData": "AdData"
    } ],
    Leve: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b82d7aPKJ9DkY5tbMOyTccA", "Leve"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Managers/UserMgr"), s = e("../../Utils/Utils"), c = e("./CleanBase"), l = cc._decorator, d = l.ccclass, u = (l.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this), a.default.Instance.show_ui("Pop", "Clean", this.node), 
                e.prototype.onEventClean.call(this, this.node);
            }, t.prototype.start = function() {
                this.view.allow.children.forEach(function(e) {
                    e.opacity = 0;
                }), this.view.noallow.children.forEach(function(e) {
                    e.opacity = 0;
                }), i.default.Instance.add_event_listenner(o.GConfiguration.Complete, this, this._complete), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, t.prototype._complete = function() {
                var e = this, t = r.UserMgr.instance().userInfo.eraseLeve;
                switch (t) {
                  case 1:
                    this.view["mask/img_ji"].active = !1;
                    break;

                  case 2:
                    this.view["mask/img_xiang01"].active = !1;
                    break;

                  case 3:
                    this.view["mask/img_cao01"].active = !1, this.view["mask/img_cao02"].active = !1;
                    break;

                  case 4:
                    this.view["mask/img_niuudn"].active = !1;
                    break;

                  case 5:
                    this.view["mask/img_wuyun02"].active = !1;
                    break;

                  case 6:
                    this.view["mask/img_yezi1"].active = !1;
                    break;

                  case 7:
                    this.view["mask/img_wan"].active = !1;
                    break;

                  case 8:
                    this.view["mask/img_jishi"].active = !1;
                    break;

                  case 9:
                    this.node.getComponent(cc.Animation).play("lv_9"), this.view["mask/img_yanliaoguan_gai1"].active = !1, 
                    this.view["mask/img_yanliaoguan_gai2"].active = !1, this.view["show/img_huang/img_huang_liu"].active = !0, 
                    this.view["show/img_lan/img_lan_shui"].active = !0, cc.tween(this.view["show/img_huang/img_huang_liu"].getComponent(cc.Sprite)).delay(1).to(.6, {
                        fillRange: 1
                    }).start(), cc.tween(this.view["show/img_lan/img_lan_shui"].getComponent(cc.Sprite)).delay(1).to(.6, {
                        fillRange: 1
                    }).call(function() {
                        cc.tween(e.view["show/img_lv"].getComponent(cc.Sprite)).to(1.5, {
                            fillRange: 1
                        }).call(function() {
                            e.scheduleOnce(function() {
                                a.default.Instance.show_ui("Pop", "Success");
                            }, 1);
                        }).start();
                    }).start();
                    break;

                  case 10:
                    this.view["mask/img_yang01"].active = !1, this.view["mask/img_yang02"].active = !1, 
                    this.view["mask/img_yang03"].active = !1;
                    break;

                  case 11:
                    this.view["mask/img_2"].active = !1, this.view["mask/img_jiao1"].active = !1;
                    break;

                  case 12:
                    this.view["mask/img_yitui"].active = !1, this.node.getComponent(cc.Animation).play("lv_12");
                    break;

                  case 13:
                    this.view["mask/img_p02"].active = !1;
                    break;

                  case 14:
                    this.view["mask/img_xian1"].active = !1;
                    break;

                  case 15:
                    this.view["mask/img_taiyang"].active = !1, this.view["mask/img_yun03"].active = !1, 
                    this.view.img_guang.active = !0, this.view.img_guang.getComponent(cc.Animation).play("lv_15");
                    break;

                  case 16:
                    this.view["show/img_huo"].active = !0;
                    break;

                  case 17:
                    this.view["mask/img_bingdu"].active = !1, this.view["mask/img_bingdu05"].active = !1, 
                    this.view["mask/img_bingdu01"].active = !1, this.view["mask/img_bingdu03"].active = !1, 
                    this.view["mask/img_bingdu02"].active = !1, this.view["mask/img_bingdu04"].active = !1;
                    break;

                  case 18:
                    this.view["mask/img_18"].active = !1;
                    break;

                  case 19:
                    this.view["mask/img_wei"].active = !1, this.view["show/img_gongji"].active = !0;
                    break;

                  case 20:
                    this.view["mask/img_yanse02"].active = !1;
                    break;

                  case 21:
                    this.view["mask/img_deng3"].active = !1;
                    break;

                  case 22:
                    this.view["mask/img_shu3"].active = !1, cc.tween(this.view["mask/img_shu1"]).by(.5, {
                        position: cc.v2(0, -630)
                    }).start(), cc.tween(this.view["show/img_shu2"]).by(.5, {
                        position: cc.v2(0, -630)
                    }).call(function() {
                        e.view.img_qingwa1.active = !0;
                    }).start();
                    break;

                  case 23:
                    this.view["mask/img_yun"].active = !1, this.view["show/img_tizi"].active = !0;
                }
                9 != t && this.scheduleOnce(function() {
                    a.default.Instance.show_ui("Pop", "Success");
                }, 1);
            }, t.prototype._showTips = function() {
                switch (r.UserMgr.instance().userInfo.eraseLeve) {
                  case 1:
                    s.Utils.showTips(this.view["mask/img_ji"]);
                    break;

                  case 2:
                    s.Utils.showTips(this.view["mask/img_xiang01"]);
                    break;

                  case 3:
                    s.Utils.showTips(this.view["mask/img_cao01"]), s.Utils.showTips(this.view["mask/img_cao02"]);
                    break;

                  case 4:
                    s.Utils.showTips(this.view["mask/img_niuudn"]);
                    break;

                  case 5:
                    s.Utils.showTips(this.view["mask/img_wuyun02"]);
                    break;

                  case 6:
                    s.Utils.showTips(this.view["mask/img_yezi1"]);
                    break;

                  case 7:
                    s.Utils.showTips(this.view["mask/img_wan"]);
                    break;

                  case 8:
                    s.Utils.showTips(this.view["mask/img_jishi"]);
                    break;

                  case 9:
                    s.Utils.showTips(this.view["mask/img_yanliaoguan_gai1"]), s.Utils.showTips(this.view["mask/img_yanliaoguan_gai2"]);
                    break;

                  case 10:
                    s.Utils.showTips(this.view["mask/img_yang01"]), s.Utils.showTips(this.view["mask/img_yang02"]), 
                    s.Utils.showTips(this.view["mask/img_yang03"]);
                    break;

                  case 11:
                    s.Utils.showTips(this.view["mask/img_2"]), s.Utils.showTips(this.view["mask/img_jiao1"]);
                    break;

                  case 12:
                    s.Utils.showTips(this.view["mask/img_yitui"]);
                    break;

                  case 13:
                    s.Utils.showTips(this.view["mask/img_p02"]);
                    break;

                  case 14:
                    s.Utils.showTips(this.view["mask/img_xian1"]);
                    break;

                  case 15:
                    s.Utils.showTips(this.view["mask/img_taiyang"]);
                    break;

                  case 17:
                    s.Utils.showTips(this.view["mask/img_bingdu"]), s.Utils.showTips(this.view["mask/img_bingdu05"]), 
                    s.Utils.showTips(this.view["mask/img_bingdu01"]), s.Utils.showTips(this.view["mask/img_bingdu03"]), 
                    s.Utils.showTips(this.view["mask/img_bingdu02"]), s.Utils.showTips(this.view["mask/img_bingdu04"]);
                    break;

                  case 18:
                    s.Utils.showTips(this.view["mask/img_18"]);

                  case 19:
                    s.Utils.showTips(this.view["mask/img_wei"]);
                    break;

                  case 20:
                    s.Utils.showTips(this.view["mask/img_yanse02"]);

                  case 21:
                    s.Utils.showTips(this.view["mask/img_deng3"]);
                    break;

                  case 22:
                    s.Utils.showTips(this.view["mask/img_shu3"]);
                    break;

                  case 23:
                    s.Utils.showTips(this.view["mask/img_yun"]);
                }
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.Complete, this, this._complete);
            }, __decorate([ d ], t);
        }(c.default));
        n.default = u, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../../Utils/Utils": "Utils",
        "./CleanBase": "CleanBase"
    } ],
    LineCollBox: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "dfe51W9G/9BJ6Pd+YQ2lpLc", "LineCollBox"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("./LineSoldierLogic"), r = cc._decorator, s = r.ccclass, c = (r.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.GameLogic = null, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.GameLogic = this.node.parent.getComponent(a.default);
            }, t.prototype.onCollisionEnter = function(e) {
                "end" == e.node.name && i.default.Instance.dispatch_event(o.GConfiguration.LineDrawSuccess, "");
            }, __decorate([ s ], t);
        }(cc.Component));
        n.default = c, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "./LineSoldierLogic": "LineSoldierLogic"
    } ],
    LineIncrease: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "12087rm7kJCpoUyTc/Nf3rE", "LineIncrease"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = o.property, r = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.num = 0, t.isCollider = !1, t.arithmetic = "", t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.arithmetic = this.node.children[0].getComponent(cc.Label).string, this.node.children[0].getComponent(cc.Label).string += this.num;
            }, __decorate([ a() ], t.prototype, "num", void 0), __decorate([ i ], t);
        }(cc.Component);
        n.default = r, cc._RF.pop();
    }, {} ],
    LinePoliceText: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "76b0fHs5BhMrrxdxefdCaFP", "LinePoliceText"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("./LineSoldierLogic"), r = cc._decorator, s = r.ccclass, c = (r.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.line_point = [], t;
            }
            return __extends(t, e), t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.LineDrawSuccess, this, this.GO), 
                i.default.Instance.add_event_listenner(o.GConfiguration.LineToChangeText, this, this.changeText);
            }, t.prototype.changeText = function(e, t) {
                var n = Number(this.node.getComponent(cc.Label).string), o = t, i = o.slice(0, 1), a = Number(o.slice(1, o.length));
                switch (i) {
                  case "-":
                    this.node.getComponent(cc.Label).string = n - a + "";
                    break;

                  case "+":
                    this.node.getComponent(cc.Label).string = a + n > 150 ? "150" : a + n + "";
                    break;

                  case "x":
                    this.node.getComponent(cc.Label).string = a * n > 150 ? "150" : a * n + "";
                    break;

                  case "÷":
                    this.node.getComponent(cc.Label).string = Math.floor(n / a) + "";
                }
            }, t.prototype.GO = function() {
                this.line_point = __spreadArrays(this.node.parent.parent.getComponent(a.default).line_point), 
                this.move();
            }, t.prototype.move = function() {
                var e = this, t = this._calculationDis(this.node.getPosition(), cc.v2(this.line_point[0].x - 60, this.line_point[0].y + 60)) / 400;
                cc.tween(this.node).to(t, {
                    position: cc.v3(this.line_point[0].x - 60, this.line_point[0].y + 60)
                }).call(function() {
                    if (e.line_point.length > 1) e.line_point.shift(), e.move(); else {
                        var t = e.node.parent.parent.getChildByName("end");
                        e.node.position = cc.v3(t.x - t.width / 4, t.y + t.height / 2 + 30), e.node.parent.getChildByName("ThiefTex").position = cc.v3(-e.node.x, e.node.y);
                    }
                }).start();
            }, t.prototype._calculationDis = function(e, t) {
                return e.sub(t).mag();
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.LineDrawSuccess, this, this.GO), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.LineToChangeText, this, this.changeText);
            }, __decorate([ s ], t);
        }(cc.Component));
        n.default = c, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "./LineSoldierLogic": "LineSoldierLogic"
    } ],
    LinePolice: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b6f31o1/Q5KUYw/dM86wkiK", "LinePolice"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("../../Managers/UserMgr"), c = e("../../Utils/Utils"), l = e("./LineIncrease"), d = e("./LineSoldierLogic"), u = cc._decorator, h = u.ccclass, f = (u.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.lockColl = !1, t.line_point = [], t.oldColl = [], t.OffsetX = 0, t.OffsetY = 0, 
                t.target = null, t.policeArr = [], t.m_PoliceName = "", t;
            }
            var n;
            return __extends(t, e), n = t, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.LineDrawSuccess, this, this.GO), 
                i.default.Instance.add_event_listenner(o.GConfiguration.LinePoliceStop, this, function() {
                    cc.Tween.stopAll();
                }), s.UserMgr._instance.userInfo.LineSoldierLeve < 16 ? this.m_PoliceName = "police" : s.UserMgr._instance.userInfo.LineSoldierLeve >= 16 && s.UserMgr._instance.userInfo.LineSoldierLeve <= 31 ? this.m_PoliceName = "lang" : s.UserMgr._instance.userInfo.LineSoldierLeve > 31 && (this.m_PoliceName = "police");
            }, t.prototype.GO = function() {
                a.default.Instance.play_effect("LineWalk"), this.line_point = __spreadArrays(this.node.parent.parent.getComponent(d.default).line_point), 
                this.lockColl = !0, this.node.getComponent(dragonBones.ArmatureDisplay).playAnimation("walk", 0), 
                this.move();
            }, t.prototype.move = function() {
                var e = this, t = this._calculationDis(this.node.getPosition(), cc.v2(this.line_point[0].x + this.OffsetX, this.line_point[0].y + this.OffsetY)) / 400;
                this.lockColl ? 1 == this.node.scaleX ? this.node.x > this.line_point[0].x ? this.node.scaleX = -1 : this.node.scaleX = 1 : this.node.x >= this.line_point[0].x ? this.node.scaleX = -1 : this.node.scaleX = 1 : this.node.parent.children.forEach(function(t) {
                    t.name == e.m_PoliceName && t.getComponent(n).lockColl && (e.node.scaleX = t.scaleX);
                }), cc.tween(this.node).to(t, {
                    position: cc.v3(this.line_point[0].x + this.OffsetX, this.line_point[0].y + this.OffsetY)
                }).call(function() {
                    if (e.line_point.length > 1) e.line_point.shift(), e.move(); else {
                        for (var n = e.node.parent.parent.getComponent(d.default).thiefArr, r = 0; r < n.length; r++) {
                            if (null == n[r].target) {
                                n[r].target = e.node, e.target = n[r].node;
                                break;
                            }
                        }
                        if (e.target) {
                            var s = e._calculationDis(e.node.getPosition(), e.target.getPosition()) / 200;
                            cc.tween(e.node).to(s, {
                                position: cc.v3(e.target.getPosition().x - 60, e.target.getPosition().y)
                            }).delay(.5).call(function() {
                                e.lockColl && a.default.Instance.play_effect("LineAttact"), e.node.scaleX = 1, e.node.getComponent(dragonBones.ArmatureDisplay).playAnimation("attack", 1), 
                                e.target.getComponent(dragonBones.ArmatureDisplay).playAnimation("attack", 1), e.node.getChildByName("baozha_zi_ske").active = !0;
                            }).delay(.8).call(function() {
                                e.node.getComponent(dragonBones.ArmatureDisplay).playAnimation("die", 1), e.target.getComponent(dragonBones.ArmatureDisplay).playAnimation("die", 1), 
                                e.scheduleOnce(function() {
                                    e.target.destroy(), e.node.destroy(), i.default.Instance.dispatch_event(o.GConfiguration.LineCheckErr, "");
                                }, .5);
                            }).start();
                        } else {
                            var c = Math.floor(Math.random() * n.length);
                            if (!n[c].node) return;
                            var l = Math.floor(150 * Math.random());
                            cc.tween(e.node).to(t, {
                                position: cc.v3(n[c].node.getPosition().x - l, n[c].node.y)
                            }).delay(.5).call(function() {
                                e.node.getComponent(dragonBones.ArmatureDisplay).playAnimation("attack", 1);
                            }).delay(.8).call(function() {
                                i.default.Instance.dispatch_event(o.GConfiguration.LineAttackSuccess, ""), e.node.getComponent(dragonBones.ArmatureDisplay).playAnimation("win", 1);
                            }).start();
                        }
                    }
                }).start();
            }, t.prototype.setGamePoint = function(e, t, n, o, i) {
                var a = this;
                this.OffsetX = n, this.OffsetY = o, this.line_point = __spreadArrays(e), this.node.setPosition(this.line_point[0].x + this.OffsetX, this.line_point[0].y + this.OffsetY), 
                this.oldColl.push(t), this.node.getComponent(dragonBones.ArmatureDisplay).playAnimation("walk", 0), 
                this.node.zIndex = Math.abs(o);
                var r = .1 * i;
                this.scheduleOnce(function() {
                    a.node.active = !0, a.move();
                }, r);
            }, t.prototype.onCollisionEnter = function(e) {
                if ("increase" == e.node.name && this.checkColl(e.node.name) && !e.node.getComponent(l.default).isCollider) {
                    if ("+" == e.node.getComponent(l.default).arithmetic || "x" == e.node.getComponent(l.default).arithmetic) {
                        var t = 0, s = Number(this.node.parent.getChildByName("policeTex").getComponent(cc.Label).string);
                        t = "+" == e.node.getComponent(l.default).arithmetic ? e.node.getComponent(l.default).num + s > 150 ? 150 - s : e.node.getComponent(l.default).num : e.node.getComponent(l.default).num * s > 150 ? 150 - s : e.node.getComponent(l.default).num * s - s;
                        for (var d = 0; d < t; d++) {
                            var u = 40 * Math.random() * (0 == Math.round(Math.random()) ? -1 : 1), h = 40 * Math.random() * -1, f = r.default.Instance.show_ui("LineSoldier", this.m_PoliceName, this.node.parent), p = f.getComponent(n);
                            f.active = !1, p.setGamePoint(this.line_point, e.node.name, u, h, d), this.policeArr.push(f);
                        }
                    } else if ("-" == e.node.getComponent(l.default).arithmetic || "÷" == e.node.getComponent(l.default).arithmetic) {
                        var g = 0;
                        if ("-" == e.node.getComponent(l.default).arithmetic) g = e.node.getComponent(l.default).num; else {
                            var v = Number(this.node.parent.getChildByName("policeTex").getComponent(cc.Label).string);
                            g = v - Math.floor(v / e.node.getComponent(l.default).num);
                        }
                        if (!(this.policeArr.length >= g)) return a.default.Instance.play_effect("cuowu"), 
                        c.Utils.showError(this.node), this.scheduleOnce(function() {
                            i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                        }, 2), i.default.Instance.dispatch_event(o.GConfiguration.LinePoliceStop, ""), void cc.Tween.stopAll();
                        for (t = g, d = this.policeArr.length - 1; d >= 0; d--) {
                            t > 0 && (this.policeArr[d].destroy(), this.policeArr.pop(), t--);
                        }
                    }
                    i.default.Instance.dispatch_event(o.GConfiguration.LineToChangeText, e.node.getComponent(l.default).arithmetic + e.node.getComponent(l.default).num);
                }
            }, t.prototype.checkColl = function(e) {
                if (!this.lockColl) return !1;
                for (var t = 0; t < this.oldColl.length; t++) {
                    if (this.oldColl[t] == e) return !1;
                }
                return !0;
            }, t.prototype._calculationDis = function(e, t) {
                return e.sub(t).mag();
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.LineDrawSuccess, this, this.GO), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.LinePoliceStop, this, function() {
                    cc.Tween.stopAll();
                });
            }, n = __decorate([ h ], t);
        }(cc.Component));
        n.default = f, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../../Utils/Utils": "Utils",
        "./LineIncrease": "LineIncrease",
        "./LineSoldierLogic": "LineSoldierLogic"
    } ],
    LineSoldierLogic: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fc9d9sdTexE8Y0HGhO+o7EX", "LineSoldierLogic"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("../../Managers/UserMgr"), c = e("../../Utils/Utils"), l = e("./LineThief"), d = cc._decorator, u = d.ccclass, h = (d.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.mask = null, t.from = null, t.end = null, t.line_point = [], t.thiefArr = [], 
                t.isFire = !1, t.isErr = !1, t.isTips = !1, t.m_PolicName = "", t.policeList = [], 
                t.thiefList = [], t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                this.view.bg2_1.width = 2e3, this.view["mask/bg1"].width = 2e3, i.default.Instance.add_event_listenner(o.GConfiguration.LineAttackSuccess, this, this.gameSuccess), 
                i.default.Instance.add_event_listenner(o.GConfiguration.LineCheckErr, this, this.CheckGameErr), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips), 
                this.mask = this.view.mask.getComponent(cc.Mask), this.mask._graphics.lineWidth = 30, 
                this.mask._graphics.strokeColor = cc.color(255, 255, 255), this.mask._graphics.fillColor = cc.color(255, 255, 255), 
                s.UserMgr._instance.userInfo.LineSoldierLeve < 16 ? this.m_PolicName = "police" : s.UserMgr._instance.userInfo.LineSoldierLeve >= 16 && s.UserMgr._instance.userInfo.LineSoldierLeve < 32 ? this.m_PolicName = "lang" : this.m_PolicName = "police", 
                this.initThief();
            }, t.prototype.showTips = function() {
                this.view.tips.active = !0, this.isTips = !0;
            }, t.prototype.CheckGameErr = function() {
                var e = this;
                this.policeList = [], this.thiefList = [], this.view.view.children.forEach(function(t) {
                    t.name == e.m_PolicName && e.policeList.push(t), "thief" == t.name && e.thiefList.push(t);
                }), (this.policeList.length <= 1 && this.thiefList.length > 1 && !this.isErr || this.policeList.length <= 1 && this.policeList.length == this.thiefList.length) && (this.node.getChildByName("view").getChildByName("policeTex").active = !1, 
                a.default.Instance.play_effect("cuowu"), c.Utils.showError(this.node), this.scheduleOnce(function() {
                    i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                }, 2), this.isErr = !0);
            }, t.prototype.gameSuccess = function() {
                this.isFire || (this.node.getChildByName("view").getChildByName("ThiefTex").active = !1, 
                this.scheduleOnce(function() {
                    r.default.Instance.show_ui("Pop", "Success");
                }, 3), this.isFire = !0);
            }, t.prototype.initThief = function() {
                var e = this;
                this.view.view.children.forEach(function(t) {
                    "thief" == t.name && e.thiefArr.push(t.getComponent(l.default));
                });
            }, t.prototype.touch_start = function(e) {
                this.line_point = [], this.isTips && (this.node.getChildByName("tips").opacity = 100);
                var t = this.node.convertToNodeSpaceAR(e.getLocation());
                this.mask._graphics.moveTo(parseInt(t.x), parseInt(t.y)), this.line_point.push(t), 
                this.view.CollBox.setPosition(t);
            }, t.prototype.touch_move = function(e) {
                var t = this.node.convertToNodeSpaceAR(e.getLocation());
                this.view.CollBox.setPosition(t), this.line_point.push(t), this.mask._graphics.lineTo(t.x, t.y), 
                this.mask._graphics.stroke();
            }, t.prototype.touch_end = function() {
                this.mask._graphics.clear(), this.view.CollBox.setPosition(cc.v2(-1e3, -1e3));
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.LineCheckErr, this, this.CheckGameErr), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.LineAttackSuccess, this, this.gameSuccess);
            }, __decorate([ u ], t);
        }(r.UICtrl));
        n.default = h, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../../Utils/Utils": "Utils",
        "./LineThief": "LineThief"
    } ],
    LineThief: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "10d96gj0y9BKo+ms7jjtkTh", "LineThief"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.target = null, t;
            }
            return __extends(t, e), __decorate([ i ], t);
        }(cc.Component));
        n.default = a, cc._RF.pop();
    }, {} ],
    LineTouchMove: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0cc1ei+0ptFqYAJjnil7BAR", "LineTouchMove"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("./LineSoldierLogic"), r = cc._decorator, s = r.ccclass, c = (r.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.GameLogic = null, t.DrawStop = !1, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this), 
                this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this), 
                this.GameLogic = this.node.parent.getComponent(a.default), i.default.Instance.add_event_listenner(o.GConfiguration.LineDrawSuccess, this, this.changeDrawSta);
            }, t.prototype.touch_start = function(e) {
                this.GameLogic.touch_start(e);
            }, t.prototype.touch_move = function(e) {
                this.DrawStop || this.GameLogic.touch_move(e);
            }, t.prototype.touch_end = function() {
                this.DrawStop || this.GameLogic.touch_end();
            }, t.prototype.changeDrawSta = function() {
                this.DrawStop = !0;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.LineDrawSuccess, this, this.changeDrawSta);
            }, __decorate([ s ], t);
        }(cc.Component));
        n.default = c, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "./LineSoldierLogic": "LineSoldierLogic"
    } ],
    LobbyView: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "74919Vv0slB8I6UPGCdA/qL", "LobbyView"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../GameLanch"), a = e("../../Managers/EventMgr"), r = e("../../Managers/GameMgr"), s = e("../../Managers/SoundMgr"), c = e("../../Managers/UIMgr"), l = e("../../Managers/UserMgr"), d = e("../../Utils/Utils"), u = e("../Ad/AdComponent"), h = e("../Ad/AdData"), f = cc._decorator, p = f.ccclass, g = f.property, v = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.energyLabel = null, t.timeLabel = null, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                if (this.add_button_listen("btnGame", this, this._onClick), a.default.Instance.add_event_listenner(o.GConfiguration.UpdateUserInfo, this, this._updateInfo), 
                this._updateInfo(), o.GConfiguration.isDebug) {
                    console.log(o.GConfiguration.isDebug, "========>>>");
                    for (var t = 0; t < 5; t++) {
                        this.scheduleOnce(function() {
                            e._showDebugTips();
                        }, t);
                    }
                }
                "wx" == h.AdData.platform ? (u.AdComponent.onShowBanner(), u.AdComponent.onShowGridAd(200, 200)) : "oppo" == h.AdData.platform ? (this.view.oppo.active = !0, 
                i.default.isFirstMenu || (this.view.PrivacyForm.active = !0, i.default.isFirstMenu = !0)) : "Android" == h.AdData.platform ? (u.AdComponent.onShowBanner(), 
                this.view.AndroidEage.active = !0) : "vivo" == h.AdData.platform && (console.log("展示"), 
                u.AdComponent.onShowGridAd());
            }, t.prototype.showAndroidTips = function() {
                this.view.AndroidTips.active = !0;
            }, t.prototype.closeAndroidTips = function() {
                this.view.AndroidTips.active = !1;
            }, t.prototype.showPrivacy = function() {
                this.view.PrivacyForm.active = !0;
            }, t.prototype.PrivacyYes = function() {
                this.view.PrivacyForm.active = !1;
            }, t.prototype.PrivacyNo = function() {
                cc.game.end();
            }, t.prototype._showDebugTips = function() {
                var e = new cc.Node(), t = e.addComponent(cc.Label);
                this.node.addChild(e), e.color = cc.color(0, 0, 0), t.string = "DEBUG模式已开启线上请注意关闭!!!!", 
                cc.tween(e).by(1, {
                    position: cc.v3(0, 400)
                }).call(function() {
                    e.destroy();
                }).start();
            }, t.prototype.showTips = function() {
                s.default.Instance.play_effect("click1"), c.default.Instance.show_ui("Pop", "Tips");
            }, t.prototype.intoEraseGame = function() {
                s.default.Instance.play_effect("click1"), r.default.Instance.GameType = r.GameType.ERASE, 
                c.default.Instance.show_ui("Pop", "Checkpoint");
            }, t.prototype._onClick = function() {
                s.default.Instance.play_effect("click1"), c.default.Instance.show_ui("Scene", "HomeView"), 
                c.default.Instance.remove_ui("LobbyView");
            }, t.prototype._updateInfo = function() {
                this.energyLabel.string = l.UserMgr.instance().userInfo.energy + "";
                var e = l.UserMgr.instance().userInfo;
                if (e.energy < 5) {
                    var t = e.oldEnerTime + 3e5;
                    this.timeLabel.string = d.Utils.timestampToTime(new Date().getTime(), t);
                } else this.timeLabel.string = "";
            }, t.prototype.onDestroy = function() {
                a.default.Instance.remove_event_listenner(o.GConfiguration.UpdateUserInfo, this, this._updateInfo);
            }, __decorate([ g(cc.Label) ], t.prototype, "energyLabel", void 0), __decorate([ g(cc.Label) ], t.prototype, "timeLabel", void 0), 
            __decorate([ p ], t);
        }(c.UICtrl);
        n.default = v, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../GameLanch": "GameLanch",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/GameMgr": "GameMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../../Utils/Utils": "Utils",
        "../Ad/AdComponent": "AdComponent",
        "../Ad/AdData": "AdData"
    } ],
    ML10Exit: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ba70ePFIrFHYKL0FzxhisFa", "ML10Exit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isActive = !0, t;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
                this.isActive && (this.isActive = !1, "img_62" == e.node.name && (t.node.destroy(), 
                o.default.Instance.dispatch_event("ML10Exit", "")));
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    ML11Exit: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "28988dRTnxCDbAts72wsIET", "ML11Exit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isActive = !0, t;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function() {
                this.isActive && (this.isActive = !1, o.default.Instance.dispatch_event("ML11Exit", ""));
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    ML12Exit: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2c6faWn8GBH27txK4GAR6gm", "ML12Exit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isActive = !0, t;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function() {
                this.isActive && (this.isActive = !1, o.default.Instance.dispatch_event("ML12Exit", ""));
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    ML13Exit: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "db00bc171dEK7uJFUvi6npv", "ML13Exit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isActive = !0, t;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function() {
                this.isActive && (this.isActive = !1, o.default.Instance.dispatch_event("ML13Exit", ""));
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    ML14Exit: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0cdf7YPDzhPdbmFfUcMHloN", "ML14Exit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isActive = !0, t;
            }
            return __extends(t, e), t.prototype.onCollisionExit = function() {
                this.isActive && (this.isActive = !1, o.default.Instance.dispatch_event("ML14Exit", ""));
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    "ML15Exit ": [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "05308u96gRFL44NnIr3jMtm", "ML15Exit "), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isActive = !0, t;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function() {
                this.isActive && (this.isActive = !1, o.default.Instance.dispatch_event("ML15Exit", ""));
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    ML17Exit: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fedea8JSiVN45EiPLTlxu5s", "ML17Exit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isActive = !0, t;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function() {
                this.isActive && (this.isActive = !1, o.default.Instance.dispatch_event("ML17Exit", ""));
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    ML18Exit: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "668838ezBJFPalI5LRcgS3z", "ML18Exit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isActive = !0, t;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function() {
                this.isActive && (this.isActive = !1, o.default.Instance.dispatch_event("ML18Exit", ""));
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    ML19Exit: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "42936mgWL9GE4J6LthVagJq", "ML19Exit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isActive = !0, t;
            }
            return __extends(t, e), t.prototype.onCollisionExit = function() {
                this.isActive && (this.isActive = !1, o.default.Instance.dispatch_event("Lv19Move", ""));
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    ML20Exit: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "92031FQT1ZLHYqBqdajgZEg", "ML20Exit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isActive = !0, t;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function() {
                this.isActive && (this.isActive = !1, o.default.Instance.dispatch_event("ML20Exit", ""));
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    ML21Exit: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3e145lU0cZCqI3OT+9lZb56", "ML21Exit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isActive = !0, t;
            }
            return __extends(t, e), t.prototype.onCollisionExit = function() {
                this.isActive && (this.isActive = !1, o.default.Instance.dispatch_event("ML21Exit", ""));
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    ML3Exit: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "21565UmBgpKYaVftgdZKpsO", "ML3Exit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isActive = !0, t;
            }
            return __extends(t, e), t.prototype.onCollisionExit = function() {
                this.isActive && (this.isActive = !1, o.default.Instance.dispatch_event("Lv3Move", ""));
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    ML5Exit: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "caa0drTwiRE5ZV8QSOcwogR", "ML5Exit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isActive = !0, t;
            }
            return __extends(t, e), t.prototype.onCollisionExit = function() {
                this.isActive && (this.isActive = !1, o.default.Instance.dispatch_event("Lv5Move", ""));
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    ML7Exit: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ded8b+z3TpK7LhycJcsowKx", "ML7Exit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isActive = !0, t;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function() {
                this.isActive && o.default.Instance.dispatch_event("Lv7Move", "");
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    ML8Exit: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a21f3Yx3XVF2agmNe4sIdJf", "ML8Exit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
                e.tag > t.tag ? cc.tween(t.node).to(.3, {
                    scale: 0
                }).call(function() {
                    t.node.active = !1, o.default.Instance.dispatch_event("ML8Exit", "");
                }).start() : cc.tween(t.node).to(.3, {
                    scale: t.node.scale + e.node.scale
                }).start();
            }, __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr"
    } ],
    MLv10: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "26a4czfl9JDz4SXUZsFlx9Z", "MLv10"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.touch.children.forEach(function(t) {
                    t.on(cc.Node.EventType.TOUCH_MOVE, function(n) {
                        var o = n.touch.getLocation();
                        o = e.node.convertToNodeSpaceAR(o), t.setPosition(o);
                    });
                }), this.schedule(this._playPos, 1), i.default.Instance.add_event_listenner("ML10Exit", this, this._answer);
            }, t.prototype._playPos = function() {
                var e = cc.instantiate(this.view.img_60);
                this.node.addChild(e), e.setPosition(this.view.img_60.getPosition()), cc.tween(e).by(.5, {
                    position: cc.v2(0, -400)
                }).to(.3, {
                    scale: 1.1
                }).start();
            }, t.prototype._answer = function() {
                this.unschedule(this._playPos);
                var e = cc.instantiate(this.view.img_57);
                this.node.addChild(e), e.setPosition(this.view.img_57.getPosition()), this.view.img_56.active = !1, 
                e.active = !0, cc.delayTime(1), a.default.Instance.show_ui("Pop", "Success");
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("用伞帮男孩挡住鸟屎!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner("ML10Exit", this, this._answer), i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv11: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f292bc5yZFNGp3U72JLb3Kq", "MLv11"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.img_67.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    var n = t.touch.getLocation();
                    n = e.node.convertToNodeSpaceAR(n), e.view.img_67.setPosition(n);
                }), i.default.Instance.add_event_listenner("ML11Exit", this, this._answer);
            }, t.prototype._answer = function() {
                cc.tween(this.view.img_64).set({
                    active: !0
                }).to(.2, {
                    opacity: 0
                }).to(.2, {
                    opacity: 255
                }).to(.2, {
                    opacity: 0
                }).to(.2, {
                    opacity: 255
                }).to(.2, {
                    opacity: 0
                }).start(), this.view.img_65.active = !1, cc.tween(this.view.img_68).set({
                    active: !0
                }).to(.2, {
                    opacity: 0
                }).to(.2, {
                    opacity: 255
                }).to(.2, {
                    opacity: 0
                }).to(.2, {
                    opacity: 255
                }).delay(.5).call(function() {
                    a.default.Instance.show_ui("Pop", "Success");
                }).start();
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("两个乌云碰撞就会出现闪电打败大魔王!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner("ML11Exit", this, this._answer), i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv12: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5d413M63xxBVqfXeQNwlJ8a", "MLv12"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.img_73.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    if (!e.view.mask.active) {
                        var n = t.touch.getLocation();
                        n = e.node.convertToNodeSpaceAR(n), e.view.img_73.setPosition(n);
                    }
                }), i.default.Instance.add_event_listenner("ML12Exit", this, this._answer);
            }, t.prototype._answer = function() {
                var e = this;
                this.view.mask.active = !0, this.view.img_73.setPosition(10, -215), cc.tween(this.view.img_70).to(1, {
                    position: this.view.img_69.getPosition()
                }).call(function() {
                    cc.tween(e.view.img_69).to(.3, {
                        opacity: 255
                    }).start(), cc.tween(e.view.img_70).to(.3, {
                        opacity: 0
                    }).call(function() {
                        a.default.Instance.show_ui("Pop", "Success");
                    }).start();
                }).start();
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("把气垫床放到小女孩下方!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner("ML12Exit", this, this._answer), i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv13: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1d7d02Wf5RNC6HTHG+cnKoz", "MLv13"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.img_78.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    e.view.img_78.zIndex = 999;
                    var n = t.touch.getLocation();
                    n = e.node.convertToNodeSpaceAR(n), e.view.img_78.setPosition(n);
                }), i.default.Instance.add_event_listenner("ML13Exit", this, this._answer);
            }, t.prototype._answer = function() {
                this.view.img_78.active = !1, this.view.img_daizi.active = !1, this.view.img_79.active = !1, 
                this.view.img_80.active = !1, this.view.img_75.active = !1, cc.tween(this.view.img_81).set({
                    active: !0
                }).by(1, {
                    position: cc.v2(0, -350)
                }).call(function() {
                    a.default.Instance.show_ui("Pop", "Success");
                }).start();
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner("ML13Exit", this, this._answer), i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("疫情出门要带口罩!", this.node);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv14: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ac328WzuvZOq6KpjL2UiCXW", "MLv14"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.img_85.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    var n = t.touch.getLocation();
                    n = e.node.convertToNodeSpaceAR(n), e.view.img_85.setPosition(n);
                }), i.default.Instance.add_event_listenner("ML14Exit", this, this._answer);
            }, t.prototype._answer = function() {
                var e = this;
                cc.tween(this.view.img_86).to(1, {
                    position: cc.v2(this.view.img_85.getPosition())
                }).call(function() {
                    e.view.img_85.active = !1, e.view.img_86.active = !1, a.default.Instance.show_ui("Pop", "Success");
                }).start(), cc.tween(this.view.img_84).by(1, {
                    position: cc.v2(1e3, 0)
                }).start();
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner("ML14Exit", this, this._answer), i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("把目标区拖到学校外!", this.node);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv15: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d5681S0lGtJFoLRuOyjV+M2", "MLv15"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.img_91.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    if (!e.view.mask.active) {
                        var n = t.touch.getLocation();
                        n = e.node.convertToNodeSpaceAR(n), e.view.img_91.setPosition(n.x, e.view.img_91.y);
                    }
                }), i.default.Instance.add_event_listenner("ML15Exit", this, this._answer);
            }, t.prototype._answer = function() {
                this.view.mask.active = !0, this.view.img_93.active = !0, this.view.img_87.active = !1, 
                cc.delayTime(5), a.default.Instance.show_ui("Pop", "Success");
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner("ML15Exit", this, this._answer), i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("向右移动球门!", this.node);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv16: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3ceceOWEkxFlL9oTsIF1Oba", "MLv16"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.img_99.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    if (!e.view.mask.active) {
                        var n = t.getDelta(), o = e.view.img_99.getPosition().add(n);
                        o.x < -259.99 || o.x > 250 ? o.x > 250 && (e.view.img_99.x = 250) : e.view.img_99.x = o.x;
                    }
                }), this.view["img_99/img_95"].on(cc.Node.EventType.TOUCH_START, function() {
                    e._answer();
                }), this.view["img_99/img_94"].on(cc.Node.EventType.TOUCH_START, function() {
                    r.Utils.showError(e.node);
                });
            }, t.prototype._answer = function() {
                this.view["img_99/img_96"].active = !0, this.view.mask.active = !0, this.view.img_98.parent = this.view["img_99/img_96"], 
                cc.tween(this.view.img_98).to(.8, {
                    position: cc.v2(this.view["img_99/img_96"].children[0].getPosition())
                }).call(function() {
                    a.default.Instance.show_ui("Pop", "Success");
                }).start();
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("马路往右移动出现男厕所帮他开门!", this.node);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv17: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "87da420vHtPdLhzw5jTO8G0", "MLv17"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.img_103.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    var n = t.touch.getLocation();
                    n = e.node.convertToNodeSpaceAR(n), e.view.img_103.setPosition(n);
                }), this.view.img_103.on(cc.Node.EventType.TOUCH_END, function() {
                    e.view.img_103.setPosition(-246.086, 2.979);
                }), i.default.Instance.add_event_listenner("ML17Exit", this, this._answer);
            }, t.prototype._answer = function() {
                var e = this;
                this.view.img_103.active = !1, this.view.img_103.active = !1, cc.tween(this.view.img_104).to(.5, {
                    opacity: 0
                }).start(), cc.tween(this.view.img_105).set({
                    active: !0
                }).by(1, {
                    position: cc.v2(0, -200)
                }).call(function() {
                    cc.tween(e.view.img_102).to(.3, {
                        opacity: 255
                    }).call(function() {
                        a.default.Instance.show_ui("Pop", "Success");
                    }).start();
                }).start();
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner("ML17Exit", this, this._answer), i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("把小乌龟拖到小鸡面前!", this.node);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv18: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "353c8zGZRtPU7ATB3mUy75r", "MLv18"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                i.default.Instance.add_event_listenner("ML18Exit", this, this._answer), this.view.img_106.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    if (!e.view.mask.active) {
                        var n = t.touch.getLocation();
                        n = e.node.convertToNodeSpaceAR(n), e.view.img_106.setPosition(n);
                    }
                });
            }, t.prototype._answer = function() {
                var e = this;
                cc.tween(this.view.img_110).set({
                    position: cc.v2(this.view.img_106.getPosition())
                }).to(.4, {
                    opacity: 255
                }).call(function() {
                    e.view.img_111.active = !1, cc.tween(e.view.img_112).to(.3, {
                        opacity: 255
                    }).by(1, {
                        position: cc.v2(-1e3, 0)
                    }).call(function() {
                        a.default.Instance.show_ui("Pop", "Success");
                    }).start(), cc.tween(e.view.img_famuze).to(.3, {
                        opacity: 255
                    }).start();
                }).start();
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("把马蜂窝移动到伐木者的树上!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner("ML18Exit", this, this._answer), i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv19: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "86936jeiitF96ZIY13ESonT", "MLv19"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner("Lv19Move", this, this._answer), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.img_113.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    var n = t.touch.getLocation();
                    n = e.node.convertToNodeSpaceAR(n), e.view.img_113.setPosition(n);
                }), this.view.img_112.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    var n = t.touch.getLocation();
                    n = e.node.convertToNodeSpaceAR(n), e.view.img_112.setPosition(n);
                });
            }, t.prototype._answer = function() {
                cc.tween(this.node).delay(.8).call(function() {
                    a.default.Instance.show_ui("Pop", "Success");
                }).start();
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("分开抢虫的小鸡!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner("Lv19Move", this, this._answer), i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv1: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e07c2D8BCdHs7IjrxeiVO8H", "MLv1"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._num = 0, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.img_2.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    var n = t.touch.getLocation();
                    n = e.node.convertToNodeSpaceAR(n), e.view.img_2.setPosition(n);
                }), this.add_button_listen("btnJia", this, this._set), this.add_button_listen("btnJian", this, this._set), 
                this.add_button_listen("btnOk", this, this._answer);
            }, t.prototype._set = function(e) {
                "btnJia" == e.node.name ? this._num++ : "btnJian" == e.node.name && (this._num = this._num-- <= 0 ? 0 : this._num--), 
                this.view.txt_num.getComponent(cc.Label).string = this._num + "";
            }, t.prototype._answer = function() {
                6 == this._num ? a.default.Instance.show_ui("Pop", "Success") : r.Utils.showError(this.node);
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("移动小汽车就能看到几号停车位了!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv20: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "cd0f0sTfPBP6Z8nOvV8NbF+", "MLv20"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner("ML20Exit", this, this._answer), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.touch.children.forEach(function(t) {
                    t.on(cc.Node.EventType.TOUCH_MOVE, function(n) {
                        var o = n.touch.getLocation();
                        o = e.node.convertToNodeSpaceAR(o), t.setPosition(o);
                    });
                });
            }, t.prototype._answer = function() {
                cc.tween(this.view.img_121).to(.3, {
                    angle: -120
                }).by(1, {
                    position: cc.v2(-1e3, 0)
                }).call(function() {
                    a.default.Instance.show_ui("Pop", "Success");
                }).start();
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("当然是把标题什么放到鳄鱼身上赶走它!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner("ML20Exit", this, this._answer), i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv21: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a7af8bjUBhJc6EcDBD6yVft", "MLv21"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view["MASK/img_chuanglian"].on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    var n = t.getDelta(), o = e.view["MASK/img_chuanglian"].getPosition().add(n);
                    o.y < 25.401 || o.y > 240 ? o.y > 250 && (e.view["MASK/img_chuanglian"].y = 250) : e.view["MASK/img_chuanglian"].y = o.y;
                }), i.default.Instance.add_event_listenner("ML21Exit", this, this._answer);
            }, t.prototype._answer = function() {
                var e = this;
                cc.tween(this.view.img_122.getComponent(cc.Sprite)).to(1, {
                    fillRange: 1
                }).call(function() {
                    e.view.img_125.active = !1;
                }).delay(1).call(function() {
                    a.default.Instance.show_ui("Pop", "Success");
                }).start();
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("拉开窗帘阳光照进来鱼就活过来了!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner("ML21Exit", this, this._answer), i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv2: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "91c5ags8XBDrJMTVlYjlbCe", "MLv2"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.touch.children.forEach(function(t) {
                    t.on(cc.Node.EventType.TOUCH_MOVE, function(n) {
                        var o = n.touch.getLocation();
                        o = e.node.convertToNodeSpaceAR(o), t.setPosition(o);
                    }), t.on(cc.Node.EventType.TOUCH_END, function(t) {
                        e._answer(t);
                    });
                });
            }, t.prototype._answer = function(e) {
                "ok" == e.target.name ? a.default.Instance.show_ui("Pop", "Success") : r.Utils.showError(this.node);
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("移动苹果看看哪个苹果被咬了一口!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv3: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ebac8rLo/ZBI5YFUqaH794B", "MLv3"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.img_15.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    var n = t.touch.getLocation();
                    n = e.node.convertToNodeSpaceAR(n), e.view.img_15.setPosition(n);
                }), i.default.Instance.add_event_listenner("Lv3Move", this, this._answer);
            }, t.prototype._answer = function() {
                var e = this;
                cc.tween(this.view.img_7).by(.8, {
                    position: cc.v2(0, 150)
                }).call(function() {
                    cc.tween(e.view.img_11).to(.8, {
                        opacity: 255
                    }).by(.8, {
                        position: cc.v2(200, 0)
                    }).call(function() {
                        a.default.Instance.show_ui("Pop", "Success");
                    }).start(), cc.tween(e.view.img_10).to(.8, {
                        opacity: 0
                    }).start(), cc.tween(e.view.img_8).to(.8, {
                        opacity: 0
                    }).start(), cc.tween(e.view.img_9).to(.8, {
                        opacity: 255
                    }).start();
                }).start();
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("把餐盖打开小猫咪就在抓老鼠了!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                i.default.Instance.remove_event_listenner("Lv3Move", this, this._answer);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv4: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e9d01P5TE9FYYEYoSydJ3yb", "MLv4"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.touch.children.forEach(function(t) {
                    t.on(cc.Node.EventType.TOUCH_MOVE, function(n) {
                        var o = n.touch.getLocation();
                        o = e.node.convertToNodeSpaceAR(o), t.setPosition(o);
                    }), t.on(cc.Node.EventType.TOUCH_END, function(t) {
                        e._answer(t);
                    });
                });
            }, t.prototype._answer = function(e) {
                var t = this;
                "ok" == e.target.name ? cc.tween(this.view.img_20).call(function() {
                    t.view.img_20.children[0].active = !0;
                }).delay(.2).call(function() {
                    t.view.img_20.children[0].active = !1;
                }).delay(.2).call(function() {
                    t.view.img_20.children[0].active = !0;
                }).delay(.5).by(1, {
                    position: cc.v2(0, 1200)
                }).call(function() {
                    a.default.Instance.show_ui("Pop", "Success");
                }).start() : r.Utils.showError(this.node);
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("火箭当然要用发射器启动了!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv5: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e6f8fRym/xDaq1MpFA1mZwP", "MLv5"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.touch.children.forEach(function(t) {
                    t.on(cc.Node.EventType.TOUCH_MOVE, function(n) {
                        var o = n.touch.getLocation();
                        o = e.node.convertToNodeSpaceAR(o), t.setPosition(o);
                    }), t.on(cc.Node.EventType.TOUCH_END, function(t) {
                        "img_26" != t.target.name && ("img_27" == t.target.name ? t.target.setPosition(84.745, 126.485) : "img_28" == t.target.name && t.target.setPosition(233.252, 127.869), 
                        r.Utils.showError(e.node));
                    });
                }), i.default.Instance.add_event_listenner("Lv5Move", this, this._answer);
            }, t.prototype._answer = function() {
                var e = this;
                this.view["touch/img_26"].active = !1, cc.tween(this.view.img_25).to(1, {
                    position: cc.v2(0, -66),
                    scale: 1,
                    angle: 360
                }).call(function() {
                    cc.tween(e.view.img_24).to(.5, {
                        position: cc.v2(-201.111, 139)
                    }).call(function() {
                        cc.tween(e.view.img_24).to(.8, {
                            opacity: 0
                        }).start(), cc.tween(e.view.img_23).to(.8, {
                            opacity: 255
                        }).start(), cc.tween(e.view.img_21).to(.8, {
                            opacity: 0
                        }).start(), cc.tween(e.view.img_22).to(.8, {
                            opacity: 255
                        }).delay(.5).call(function() {
                            a.default.Instance.show_ui("Pop", "Success");
                        }).start();
                    }).start();
                }).start();
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("左边第一个女的把偷的钱藏在衣服里!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner("Lv5Move", this, this._answer), i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv6: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ccc7eYA7jtFDpGw0pIjr63m", "MLv6"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._num = 0, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.touch.children.forEach(function(t) {
                    t.on(cc.Node.EventType.TOUCH_MOVE, function(n) {
                        var o = n.touch.getLocation();
                        o = e.node.convertToNodeSpaceAR(o), t.setPosition(o);
                    });
                }), this.add_button_listen("btnJia", this, this._set), this.add_button_listen("btnJian", this, this._set), 
                this.add_button_listen("btnOk", this, this._answer);
            }, t.prototype._set = function(e) {
                "btnJia" == e.node.name ? this._num++ : "btnJian" == e.node.name && (this._num = this._num-- <= 0 ? 0 : this._num--), 
                this.view.txt_num.getComponent(cc.Label).string = this._num + "";
            }, t.prototype._answer = function() {
                9 == this._num ? a.default.Instance.show_ui("Pop", "Success") : r.Utils.showError(this.node);
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("白色海龟不算一共9只乌龟!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv7: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3cd09i0zeVAB7YmIGwCs4wQ", "MLv7"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.img_38.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    if (!e.view.mask.active) {
                        var n = t.touch.getLocation();
                        n = e.node.convertToNodeSpaceAR(n), e.view.img_38.setPosition(n);
                    }
                }), i.default.Instance.add_event_listenner("Lv7Move", this, this._answer);
            }, t.prototype._answer = function() {
                this.view.mask.active = !0, this.view.img_38.setPosition(-106, -9), cc.tween(this.view.img_35).to(.8, {
                    opacity: 0
                }).start(), cc.tween(this.view.img_36).to(.2, {
                    opacity: 255
                }).start(), cc.tween(this.view.img_33).to(.8, {
                    opacity: 0
                }).start(), cc.tween(this.view.img_34).to(.8, {
                    opacity: 255
                }).delay(.5).by(.8, {
                    position: cc.v2(500, 0)
                }).call(function() {
                    a.default.Instance.show_ui("Pop", "Success");
                }).start();
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("快把相框里的枪给白衬衫男!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner("Lv7Move", this, this._answer), i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv8: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "87a86Lmc9pCkJE1p5KfFepR", "MLv8"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._num = 0, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.touch.children.forEach(function(t) {
                    t.on(cc.Node.EventType.TOUCH_MOVE, function(n) {
                        var o = n.touch.getLocation();
                        o = e.node.convertToNodeSpaceAR(o), t.setPosition(o);
                    });
                }), i.default.Instance.add_event_listenner("ML8Exit", this, this._answer);
            }, t.prototype._answer = function() {
                var e = 0;
                this.view.touch.children.forEach(function(t) {
                    t.active && e++;
                }), 1 == e && cc.tween(this.view.img_42).to(.8, {
                    opacity: 255
                }).call(function() {
                    a.default.Instance.show_ui("Pop", "Success");
                }).start();
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("把泡泡拖到一起就变成最大的了!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                i.default.Instance.remove_event_listenner("ML8Exit", this, this._answer);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MLv9: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "55a2dUzGUdHsoTNltsHM1o9", "MLv9"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._num = 0, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.view.touch.children.forEach(function(t) {
                    t.on(cc.Node.EventType.TOUCH_MOVE, function(n) {
                        var o = n.touch.getLocation();
                        o = e.node.convertToNodeSpaceAR(o), t.setPosition(o);
                    }), t.on(cc.Node.EventType.TOUCH_END, function(t) {
                        "img_hua" == t.target.name && e._answer();
                    });
                });
            }, t.prototype._answer = function() {
                var e = this, t = [ [ -52.84, -404.342 ], [ 41.353, -402.045 ] ];
                cc.tween(this.view.qian.children[0]).to(1, {
                    position: cc.v2(t[0][0], t[0][1]),
                    scale: .9,
                    angle: 360
                }).start(), cc.tween(this.view.qian.children[1]).to(1, {
                    position: cc.v2(t[1][0], t[1][1]),
                    scale: .9,
                    angle: 360
                }).call(function() {
                    cc.tween(e.view.img_51).to(.8, {
                        opacity: 0
                    }).start(), cc.tween(e.view.img_52).to(.2, {
                        opacity: 255
                    }).call(function() {
                        a.default.Instance.show_ui("Pop", "Success");
                    }).start();
                }).start();
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.Utils.showStrTips("钱放在相框下面!", this.node);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MTips: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3fb99YlKo9P2I2ac/NjA4Xg", "MTips"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Utils/Utils"), i = e("../Ad/AdComponent"), a = e("../Ad/AdData"), r = cc._decorator, s = r.ccclass, c = (r.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.start = function() {
                o.Utils.popWindow(this.node), "wx" == a.AdData.platform && (i.AdComponent.onShowBanner(), 
                i.AdComponent.onShowGridAd(200, 350), i.AdComponent.onShowManyGridAd(587));
            }, t.prototype.setText = function(e) {
                this.node.getChildByName("node").getChildByName("txt").getComponent(cc.Label).string = e;
            }, t.prototype.onBtnClose = function() {
                o.Utils.closeWindow(this.node), "wx" == a.AdData.platform && i.AdComponent.onHideManyGridAd();
            }, __decorate([ s ], t);
        }(cc.Component));
        n.default = c, cc._RF.pop();
    }, {
        "../../Utils/Utils": "Utils",
        "../Ad/AdComponent": "AdComponent",
        "../Ad/AdData": "AdData"
    } ],
    MazeCheckBox: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "40aefbCy9BFq6/uf281DQvm", "MazeCheckBox"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = cc._decorator, s = r.ccclass, c = (r.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isCollider = !1, t.isClliderBG = !1, t.stayNode = null, t;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
                if ("bg" == e.node.name && (this.isClliderBG = !0, !this.isCollider)) {
                    switch (this.isCollider = !0, console.log(t.tag), this.stayNode = a.default.Instance.show_ui("Maze", "stay", this.node.parent), 
                    this.stayNode.position = this.node.position, t.tag) {
                      case 0:
                        this.stayNode.y -= 20;
                        break;

                      case 1:
                        this.stayNode.y += 20;
                        break;

                      case 2:
                        this.stayNode.x -= 20;
                        break;

                      case 3:
                        this.stayNode.x += 20;
                    }
                    i.default.Instance.dispatch_event(o.GConfiguration.MazeDrawBG, !1);
                }
            }, t.prototype.onCollisionStay = function(e) {
                "bg" != e.node.name && ("stay" != e.node.name || this.isClliderBG || (this.isCollider = !1, 
                this.stayNode.destroy(), i.default.Instance.dispatch_event(o.GConfiguration.MazeDrawBG, !0)));
            }, t.prototype.onCollisionExit = function(e) {
                "stay" != e.node.name && "bg" == e.node.name && (this.isClliderBG = !1);
            }, __decorate([ s ], t);
        }(cc.Component));
        n.default = c, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr"
    } ],
    MazeLevel: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "632f3Jxv0BBr7pCXuu6UTCR", "MazeLevel"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/UIMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {}, __decorate([ a ], t);
        }(o.UICtrl));
        n.default = r, cc._RF.pop();
    }, {
        "../../Managers/UIMgr": "UIMgr"
    } ],
    MazePlayer: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c152a/uGvlPr7oiR0FF6Z9x", "MazePlayer"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("../../Utils/Utils"), c = cc._decorator, l = c.ccclass, d = (c.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.m_pathArray = [], t.m_canDraw = !0, t.stayPos = null, t.isWin = !1, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onStartCheck, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), 
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchOut, this), this.m_pathNode = r.default.Instance.show_ui("Maze", "Mask", this.node.parent.getChildByName("allMask")).getComponent(cc.Graphics), 
                i.default.Instance.add_event_listenner(o.GConfiguration.MazeDrawBG, this, this.changeData);
            }, t.prototype.changeData = function(e, t) {
                this.m_canDraw = t;
            }, t.prototype.onStartCheck = function(e) {
                this.m_pathArray = [];
                var t = this.node.parent.convertToNodeSpaceAR(e.getLocation());
                this.m_pathArray.push(t), this.node.parent.getChildByName("CheckBox").setPosition(t), 
                this.m_pathNode.moveTo(parseInt(t.x), parseInt(t.y));
            }, t.prototype.onTouchMove = function(e) {
                var t = this.node.parent.convertToNodeSpaceAR(e.getLocation());
                if (this.node.parent.getChildByName("CheckBox").setPosition(t), this.m_canDraw) {
                    var n = this._calculationDis(this.m_pathArray[this.m_pathArray.length - 1], this.node.convertToNodeSpaceAR(e.getLocation()));
                    if (Math.abs(parseInt(t.x) - this.m_pathArray[this.m_pathArray.length - 1].x) < 5 && Math.abs(parseInt(t.y) - this.m_pathArray[this.m_pathArray.length - 1].y) < 5) return;
                    n > 7 && this.m_pathArray.push(t), this.m_pathNode.lineTo(parseInt(t.x), parseInt(t.y)), 
                    this.m_pathNode.stroke();
                } else this.stayPos = t;
            }, t.prototype.onTouchOut = function() {
                this.onMove();
            }, t.prototype.onMove = function() {
                var e = this, t = this._calculationDis(this.node.getPosition(), this.m_pathArray[0]) / 1e4;
                cc.tween(this.node).to(t, {
                    position: cc.v3(this.m_pathArray[0])
                }).call(function() {
                    e.m_pathArray.length > 1 ? (e.m_pathArray.shift(), e.onMove()) : (console.log("移动结束"), 
                    e.checkEnd());
                }).start();
            }, t.prototype.onCollisionEnter = function(e) {
                "end" == e.node.name && (this.isWin = !0);
            }, t.prototype.checkEnd = function() {
                this.isWin ? this.scheduleOnce(function() {
                    r.default.Instance.show_ui("Pop", "Success");
                }, 1) : (a.default.Instance.play_effect("cuowu"), s.Utils.showError(this.node), 
                this.scheduleOnce(function() {
                    i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                }, 1));
            }, t.prototype._calculationDis = function(e, t) {
                return e.sub(t).mag();
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.MazeDrawBG, this, this.changeData);
            }, __decorate([ l ], t);
        }(cc.Component));
        n.default = d, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    MultiResoultionCompat: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "cf1a7P36CZIx7ccIWen/WbF", "MultiResoultionCompat"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            var n;
            return __extends(t, e), n = t, t.prototype.onLoad = function() {
                cc.view.setDesignResolutionSize(n.DEFAULT_RESOLUTION_WIDTH, n.DEFAULT_RESOLUTION_HEIGHT, cc.ResolutionPolicy.SHOW_ALL);
            }, t.getShowAllModeScale = function() {
                return Math.min(cc.view.getCanvasSize().width / this.DEFAULT_RESOLUTION_WIDTH, cc.view.getCanvasSize().height / this.DEFAULT_RESOLUTION_HEIGHT);
            }, t.getShowAllModeRealHeight = function() {
                return this.DEFAULT_RESOLUTION_HEIGHT * this.getShowAllModeScale();
            }, t.getShowAllModeRealWidth = function() {
                return this.DEFAULT_RESOLUTION_WIDTH * this.getShowAllModeScale();
            }, t.getShowAllModeVerticalBorderHeight = function() {
                return cc.view.getCanvasSize().height - this.getShowAllModeRealHeight();
            }, t.getShowAllModeHorizontalBorderWidth = function() {
                return cc.view.getCanvasSize().width - this.getShowAllModeRealWidth();
            }, t.getShowAllModeNodePositionCloseToBottom = function(e) {
                var t = n.getShowAllModeScale(), o = n.getShowAllModeVerticalBorderHeight() / 2, i = (e.y * t - o) / t;
                return cc.v2(e.x, i);
            }, t.convertNodePosInDesignToNodePosInCanvas = function(e) {
                return e.sub(cc.v2(this.getShowAllModeScale(), this.getShowAllModeScale()));
            }, t.convertNodePosInCanvasToNodePosInDesign = function(e) {
                return e.div(cc.v2(this.getShowAllModeScale(), this.getShowAllModeScale()));
            }, t.convertWidthInDesignToWidthInCanvas = function(e) {
                return e * this.getShowAllModeScale();
            }, t.convertWidthInCanvasToWidthInDesign = function(e) {
                return e / this.getShowAllModeScale();
            }, t.convertHeightInDesignToHeightInCanvas = function(e) {
                return e * this.getShowAllModeScale();
            }, t.convertHeightInCanvasToHeightInDesign = function(e) {
                return e / this.getShowAllModeScale();
            }, t.DEFAULT_RESOLUTION_WIDTH = 750, t.DEFAULT_RESOLUTION_HEIGHT = 1334, n = __decorate([ i ], t);
        }(cc.Component));
        n.default = a, cc._RF.pop();
    }, {} ],
    MyPhysicsCollider: [ function(e, t) {
        "use strict";
        cc._RF.push(t, "eb8b5mKD4ZO6bMSuU/SsUWz", "MyPhysicsCollider");
        var n = cc.Class({
            extends: cc.PhysicsCollider,
            editor: {
                menu: !1,
                requireComponent: cc.RigidBody
            },
            properties: {
                lineWidth: 10,
                points: [ cc.Vec2 ]
            },
            _createShape: function _createShape() {
                for (var e = [], t = this.points, n = (this.offset, 0); n < t.length - 1; n++) {
                    var o = t[n], i = t[n + 1], a = o.sub(i).mag(), r = Math.atan2(i.y - o.y, i.x - o.x) - Math.PI / 2, s = o.add(i).mul(.5), c = new b2.PolygonShape();
                    c && (c.SetAsBox(this.lineWidth / 2 / 32, a / 2 / 32, new b2.Vec2(s.x / 32, s.y / 32), r), 
                    e.push(c));
                }
                return e;
            }
        });
        t.exports = n, cc._RF.pop();
    }, {} ],
    NearCheck: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "53a92CCgWtE07HsLvybFM3M", "NearCheck"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.m_ColloderNodeName = [], t;
            }
            return __extends(t, e), t.prototype.onCollisionEnter = function(e) {
                if (this.m_ColloderNodeName.length <= 0) this.m_ColloderNodeName.push(e.node.name); else for (var t = 0; t < this.m_ColloderNodeName.length; t++) {
                    if (this.m_ColloderNodeName[t] == e.node.name) return;
                    t == this.m_ColloderNodeName.length - 1 && this.m_ColloderNodeName.push(e.node.name);
                }
            }, t.prototype.onCollisionExit = function(e) {
                var t = this;
                if (this.m_ColloderNodeName.length > 0) {
                    if (1 == this.m_ColloderNodeName.length) return void (this.m_ColloderNodeName = []);
                    this.m_ColloderNodeName.forEach(function(n) {
                        if (n == e.node.name) {
                            var o = t.m_ColloderNodeName.indexOf(n);
                            t.m_ColloderNodeName.splice(o, 1);
                        }
                    });
                }
            }, __decorate([ i ], t);
        }(cc.Component));
        n.default = a, cc._RF.pop();
    }, {} ],
    NearGroundItem: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8c9a5PQILlAWofciGSb6Fp4", "NearGroundItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("./NearLeve"), s = cc._decorator, c = s.ccclass, l = s.property, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isEdge = !1, t.addName = "", t.isShow = !1, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.addName = this.node.parent.getComponent(r.default).initData(), this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this), 
                i.default.Instance.add_event_listenner(o.GConfiguration.NearStopOn, this, this.onGameOver);
            }, t.prototype.onGameOver = function() {
                this.node.off(cc.Node.EventType.TOUCH_START, this.onClick, this);
            }, t.prototype.onClick = function() {
                this.isEdge && !this.node.parent.getComponent(r.default).onCheckEage() || this.isShow || (a.default.Instance.show_ui("Near", this.addName, this.node), 
                i.default.Instance.dispatch_event(o.GConfiguration.NearCheckNear, this.node.name), 
                this.isShow = !0);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.NearStopOn, this, this.onGameOver);
            }, __decorate([ l ], t.prototype, "isEdge", void 0), __decorate([ c ], t);
        }(cc.Component);
        n.default = d, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "./NearLeve": "NearLeve"
    } ],
    NearLeve: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "af749WKeLNHur7CDC4oha9w", "NearLeve"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("../../Managers/UserMgr"), c = e("../../Utils/Utils"), l = cc._decorator, d = l.ccclass, u = l.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.label = null, t.edge = [], t.tipsFrame = null, t.nodeName = "", t.isDie = !1, 
                t.isWin = !1, t.config = {
                    "1index": [ 2, 4 ],
                    "2index": [ 1, 3, 5, 10 ],
                    "3index": [ 2, 6 ],
                    "4index": [ 1, 5, 7, 13 ],
                    "5index": [ 2, 4, 6, 8 ],
                    "6index": [ 3, 5, 9, 11 ],
                    "7index": [ 4, 8 ],
                    "8index": [ 5, 7, 9, 12 ],
                    "9index": [ 6, 8 ],
                    "10index": [ 2 ],
                    "11index": [ 6 ],
                    "12index": [ 8 ],
                    "13index": [ 4 ],
                    "14index": [],
                    "15index": [],
                    "16index": [],
                    "17index": [],
                    "18index": [],
                    "19index": [],
                    "20index": []
                }, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                o.GConfiguration.LevelIsTips = !1, this.label = this.node.getChildByName("Number").getComponent(cc.Label), 
                i.default.Instance.add_event_listenner(o.GConfiguration.NearCheckNear, this, this.onCheck), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips), 
                s.UserMgr._instance.userInfo.NearLeve > 7 && (this.config = {
                    "1index": [ 2, 5 ],
                    "2index": [ 1, 3, 6, 18 ],
                    "3index": [ 2, 4, 7 ],
                    "4index": [ 3, 8 ],
                    "5index": [ 1, 9, 6, 19 ],
                    "6index": [ 2, 5, 7, 10 ],
                    "7index": [ 3, 6, 8, 11 ],
                    "8index": [ 4, 7, 12, 17 ],
                    "9index": [ 5, 10, 13 ],
                    "10index": [ 6, 9, 11, 14 ],
                    "11index": [ 7, 10, 12, 15 ],
                    "12index": [ 8, 11, 16 ],
                    "13index": [ 9, 14 ],
                    "14index": [ 10, 13, 15, 20 ],
                    "15index": [ 11, 14, 16 ],
                    "16index": [ 12, 15 ],
                    "17index": [ 8 ],
                    "18index": [ 2 ],
                    "19index": [ 5 ],
                    "20index": [ 14 ]
                });
            }, t.prototype.showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.default.Instance.show_ui("Near", "NearTips").getChildByName("node").getChildByName("t_tishi").getChildByName("guohetishi").getComponent(cc.Sprite).spriteFrame = this.tipsFrame;
            }, t.prototype.onCheckEage = function() {
                var e = !0;
                return this.edge.forEach(function(t) {
                    t.children.length > 0 && (e = !1);
                }), e;
            }, t.prototype.initData = function() {
                return 1 == s.UserMgr._instance.userInfo.NearLeve || 8 == s.UserMgr._instance.userInfo.NearLeve ? this.nodeName = "thief" : 2 == s.UserMgr._instance.userInfo.NearLeve || 9 == s.UserMgr._instance.userInfo.NearLeve ? this.nodeName = "lang" : 3 == s.UserMgr._instance.userInfo.NearLeve || 10 == s.UserMgr._instance.userInfo.NearLeve ? this.nodeName = "yang" : 4 == s.UserMgr._instance.userInfo.NearLeve || 11 == s.UserMgr._instance.userInfo.NearLeve ? this.nodeName = "woman" : 5 == s.UserMgr._instance.userInfo.NearLeve || 12 == s.UserMgr._instance.userInfo.NearLeve ? this.nodeName = "daxiang" : 6 == s.UserMgr._instance.userInfo.NearLeve || 13 == s.UserMgr._instance.userInfo.NearLeve ? this.nodeName = "mao" : 7 != s.UserMgr._instance.userInfo.NearLeve && 14 != s.UserMgr._instance.userInfo.NearLeve || (this.nodeName = "laoshu"), 
                this.nodeName;
            }, t.prototype.onCheck = function(e, t) {
                var n = this;
                if (!this.isDie && !this.isWin) {
                    var s = +this.label.string.slice(this.label.string.length - 1, this.label.string.length);
                    s -= 1, this.label.string = "x " + s, s <= 0 && i.default.Instance.dispatch_event(o.GConfiguration.NearStopOn, "");
                    var l = [], d = !0;
                    if (this.config[t + "index"].forEach(function(e) {
                        n.node.getChildByName(e + "").children.length > 0 && (l.push(n.node.getChildByName(e + "")), 
                        d = !1);
                    }), d) s <= 0 && (this.isWin = !0, this.scheduleOnce(function() {
                        r.default.Instance.show_ui("Pop", "Success");
                    }, 1)); else {
                        this.isDie = !0;
                        var u = this.node.getChildByName(t).position;
                        l.forEach(function(e) {
                            e.getChildByName(n.nodeName).getComponent(dragonBones.ArmatureDisplay).playAnimation("walk", 0);
                            var t = e.getChildByName(n.nodeName);
                            e.getChildByName(n.nodeName).parent = n.node, t.position = e.position, "thief" == n.nodeName || "woman" == n.nodeName ? t.x > u.x && (t.scaleX = 1) : t.x > u.x && (t.scaleX = -1), 
                            cc.tween(t).to(.5, {
                                position: u
                            }).call(function() {
                                a.default.Instance.play_effect("cuowu"), c.Utils.showError(n.node);
                            }).start();
                        }), r.default.Instance.show_ui("Near", "baozha", this.node), this.node.getChildByName("baozha").position = u, 
                        this.scheduleOnce(function() {
                            i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                        }, 2);
                    }
                }
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.NearCheckNear, this, this.onCheck), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips);
            }, __decorate([ u(cc.Node) ], t.prototype, "edge", void 0), __decorate([ u(cc.SpriteFrame) ], t.prototype, "tipsFrame", void 0), 
            __decorate([ d ], t);
        }(r.UICtrl);
        n.default = h, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../../Utils/Utils": "Utils"
    } ],
    NeatStart: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ca256t6BgxDR7poHSE36rrL", "NeatStart"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("./NearCheck"), s = e("./NearGroundItem"), c = e("./NearLeve"), l = cc._decorator, d = l.ccclass, u = (l.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.addName = "", t.m_CheckBox = null, t.GameLogic = null, t.newObj = null, 
                t.startPos = null, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.GameLogic = this.node.parent.getComponent(c.default), this.addName = this.node.parent.getComponent(c.default).initData(), 
                this.m_CheckBox = this.node.parent.getChildByName("cheackBox"), this.startPos = this.m_CheckBox.position, 
                this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), 
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchUp, this);
            }, t.prototype.onClick = function(e) {
                this.newObj = a.default.Instance.show_ui("Near", this.addName, this.node.parent);
                var t = this.GameLogic.node.convertToNodeSpaceAR(e.getLocation());
                this.m_CheckBox.setPosition(t), this.newObj.opacity = 100, this.newObj.setPosition(t);
            }, t.prototype.onTouchMove = function(e) {
                var t = this.GameLogic.node.convertToNodeSpaceAR(e.getLocation());
                this.m_CheckBox.setPosition(t), this.newObj.setPosition(t);
            }, t.prototype.onTouchUp = function() {
                var e = this.m_CheckBox.getComponent(r.default).m_ColloderNodeName;
                if (e.length > 0) {
                    var t = e.slice(e.length - 1, e.length) + "";
                    if (this.node.parent.getChildByName(t).getComponent(s.default).isEdge && !this.node.parent.getComponent(c.default).onCheckEage()) return this.m_CheckBox.setPosition(this.startPos), 
                    this.newObj.destroy(), void (this.newObj = null);
                    this.node.parent.getChildByName(t).children.length <= 0 ? (this.newObj.parent = this.node.parent.getChildByName(t), 
                    this.newObj.position = cc.v3(0, 0, 0), this.newObj.opacity = 255, this.node.parent.getChildByName(t).getComponent(s.default).isShow = !0, 
                    i.default.Instance.dispatch_event(o.GConfiguration.NearCheckNear, t)) : this.newObj.destroy();
                } else this.newObj.destroy();
                this.m_CheckBox.setPosition(this.startPos), this.newObj = null;
            }, __decorate([ d ], t);
        }(cc.Component));
        n.default = u, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "./NearCheck": "NearCheck",
        "./NearGroundItem": "NearGroundItem",
        "./NearLeve": "NearLeve"
    } ],
    ObjWight: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b657ecN7w5ERaAMG7U6fmth", "ObjWight"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                this.node.width = 2e3;
            }, __decorate([ i ], t);
        }(cc.Component));
        n.default = a, cc._RF.pop();
    }, {} ],
    OppoAdBase: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "cf2a99T6HNFwJUXRcHmeinc", "OppoAdBase"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.OppoAdBase = void 0;
        var o = e("../AdData"), i = function() {
            function e() {}
            return e.onShowRewardedAd = function(t, n) {
                var i = this;
                if ("oppo" == o.AdData.platform) {
                    var a = this;
                    e.systemInfo = window.qg.getSystemInfoSync(), this.videoAd = qg.createRewardedVideoAd({
                        adUnitId: "525574"
                    }), this.videoAd.onLoad(function() {
                        console.log("激励视频加载成功"), a.videoAd.show();
                    }), this.videoAd.onError(function(e) {
                        console.log("激励视频加载失败", e);
                    }), this.videoAd.show().catch(function() {
                        i.videoAd.load().then(function() {
                            return i.videoAd.show();
                        }).catch(function(e) {
                            console.log("激励视频 广告显示失败", e);
                        });
                    }), this.videoAd.onClose(function(e) {
                        e && e.isEnded && n.call(t, !0), a.videoAd.destroy(), a.videoAd = null;
                    });
                }
            }, e.OnShowNativeBannerAd = function() {
                if ("oppo" == o.AdData.platform) {
                    e.systemInfo = qg.getSystemInfoSync(), this.onHideBanner();
                    var t = this;
                    window.qg && (this.nativeBannerAd = qg.createCustomAd({
                        adUnitId: "535172",
                        style: {
                            left: .02 * e.systemInfo.windowWidth,
                            top: 1084 / 1334 * e.systemInfo.windowHeight,
                            width: 720
                        }
                    }), this.nativeBannerAd.onLoad(function() {}), this.nativeBannerAd.onError(function(e) {
                        console.log("左图右字加载失败", e), t.onShowBanner();
                    }), this.nativeBannerAd.show().then(function() {
                        console.log("左图右字展示完成");
                    }).catch(function(e) {
                        console.log("左图右字加载失败", e), t.onShowBanner();
                    }));
                }
            }, e.onShowNativeAd = function() {
                o.AdData.platform;
            }, e.onShowBanner = function() {
                "oppo" == o.AdData.platform && (this.onHideBanner(), e.systemInfo = qg.getSystemInfoSync(), 
                console.log("开始创建普通banner"), this.bannerAd = qg.createBannerAd({
                    adUnitId: "525569",
                    style: {
                        top: 1034 / 1334 * e.systemInfo.windowHeight,
                        left: .02 * e.systemInfo.windowWidth,
                        width: 720,
                        height: 300
                    }
                }), this.bannerAd.onLoad(function() {
                    console.log("banner 广告加载成功");
                }), this.bannerAd.onHide(function() {}), this.bannerAd.onError(function(e) {
                    console.log("banner广告加载失败", e);
                }), this.bannerAd.show());
            }, e.onHideBanner = function() {
                null != this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null), null != this.nativeBannerAd && (this.nativeBannerAd.destroy(), 
                this.nativeBannerAd = null);
            }, e.videoAd = null, e.systemInfo = null, e.bannerAd = null, e.nativeAd = null, 
            e.nativeBannerAd = null, e.adList = null, e;
        }();
        n.OppoAdBase = i, cc._RF.pop();
    }, {
        "../AdData": "AdData"
    } ],
    OppoBigNativeAdMgr: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1d9f8Az9zVPXL8dCXoM5NPB", "OppoBigNativeAdMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Config/GConfiguration"), i = e("../AdData"), a = e("./RenderMgr"), r = cc._decorator, s = r.ccclass, c = r.property, l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.img = null, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                var e = this;
                if (this.node.active = !1, "oppo" == i.AdData.platform) {
                    console.log("?????");
                    var t = a.default.Instance.getBigIconAd();
                    t.imgUrlList.length < 1 || t.imgUrlList[0].indexOf(".webp") < 0 ? t ? a.default.Instance.updateBigIconAd() : a.default.Instance.initBigIcon() : (console.log(">>>>>>>>>>>>>"), 
                    cc.assetManager.loadRemote(t.imgUrlList[0], {
                        ext: ".webp"
                    }, function(t, n) {
                        if (!t) {
                            var o = new cc.SpriteFrame(n);
                            e.img.spriteFrame = o, console.log("加载完成"), e.node.active = !0;
                        }
                    }));
                }
            }, t.prototype.onClickAd = function() {
                a.default.Instance.onClickBigIconReport(), this.node.destroy();
            }, t.prototype.onClickColse = function() {
                if ("oppo" == i.AdData.platform) {
                    var e = Math.floor(10 * Math.random());
                    console.log(e, ">>>>>>>>>>>>>>>>>"), e <= o.GConfiguration.NextNativeAd && a.default.Instance.onClickBigIconReport();
                }
                this.node.destroy();
            }, __decorate([ c(cc.Sprite) ], t.prototype, "img", void 0), __decorate([ s ], t);
        }(cc.Component);
        n.default = l, cc._RF.pop();
    }, {
        "../../../Config/GConfiguration": "GConfiguration",
        "../AdData": "AdData",
        "./RenderMgr": "RenderMgr"
    } ],
    OppoGridAdMgr: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3530eaUwDhC8bi6NjkjQcvi", "OppoGridAdMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../AdData"), i = e("./RenderMgr"), a = cc._decorator, r = a.ccclass, s = a.property, c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.img = null, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                var e = this;
                if (this.node.active = !1, "oppo" == o.AdData.platform) {
                    var t = i.default.Instance.getIconAd();
                    t.imgUrlList.length < 1 || t.imgUrlList[0].indexOf(".webp") < 0 ? t ? i.default.Instance.updateIconAd() : i.default.Instance.initIcon() : (console.log(">>>>>>>>>>>>>>"), 
                    cc.assetManager.loadRemote(t.imgUrlList[0], {
                        ext: ".webp"
                    }, function(t, n) {
                        if (!t) {
                            var o = new cc.SpriteFrame(n);
                            e.img.spriteFrame = o, console.log("yese"), e.node.active = !0;
                        }
                    }));
                }
            }, t.prototype.onClickAd = function() {
                i.default.Instance.onClickIconReport(), this.node.destroy();
            }, t.prototype.onClickColse = function() {
                this.node.destroy();
            }, __decorate([ s(cc.Sprite) ], t.prototype, "img", void 0), __decorate([ r ], t);
        }(cc.Component);
        n.default = c, cc._RF.pop();
    }, {
        "../AdData": "AdData",
        "./RenderMgr": "RenderMgr"
    } ],
    PkgConfiguration: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8c66blrSXhEGpdDELtJuNNl", "PkgConfiguration"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.PkgConfiguration = void 0;
        var o = function() {
            function e() {}
            return e.GameResPkg = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/Scene/LobbyView", "UIPrefabs/Scene/GameView", "UIPrefabs/Scene/HomeView", "UIPrefabs/Pop/Success", "UIPrefabs/Pop/Checkpoint", "UIPrefabs/Pop/Item", "UIPrefabs/Pop/Tips", "UIPrefabs/Pop/Clean", "UIPrefabs/Pop/Error", "UIPrefabs/MoveLv/Tips", "UIPrefabs/River/Mask", "UIPrefabs/Pop/GameLoading", "UIPrefabs/Warp/WarpTips", "UIPrefabs/EraseLv/Lv_1", "UIPrefabs/MoveLv/Lv_1", "UIPrefabs/ToHit/Lv_1", "UIPrefabs/Soldier/Lv_1", "UIPrefabs/Round/Lv_1", "UIPrefabs/River/Lv_1", "UIPrefabs/Snake/Lv_1", "UIPrefabs/Car/Lv_1", "UIPrefabs/Dialect/Lv_1", "UIPrefabs/LineSoldier/Lv_1", "UIPrefabs/Circular/Lv_1", "UIPrefabs/Color/Lv_1", "UIPrefabs/Near/Lv_1", "UIPrefabs/Warp/Lv_1", "UIPrefabs/Warp/Door", "UIPrefabs/Rescue/Lv_1", "UIPrefabs/WarpMan/Lv_1", "UIPrefabs/Warp/Lv", "UIPrefabs/WarpMan/Lv" ]
                },
                Sounds: {
                    assetType: cc.AudioClip,
                    urls: [ "bg", "click1", "victory1", "CarComplete", "carRun", "CarStat", "CarCollider", "shengji", "bianzi", "eat", "colider", "cuowu", "posui", "LineAttact", "LineWalk", "snakeeat", "fall1", "HouHou", "move", "tan2", "BALLOON_peng", "Bridgeeat", "shaunwalkloop", "wood" ]
                }
            }, e.GamePlayResPkg0 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/EraseLv/Lv_2", "UIPrefabs/EraseLv/Lv_3", "UIPrefabs/EraseLv/Lv_4", "UIPrefabs/EraseLv/Lv_5", "UIPrefabs/EraseLv/Lv_6", "UIPrefabs/EraseLv/Lv_7", "UIPrefabs/EraseLv/Lv_8", "UIPrefabs/EraseLv/Lv_9", "UIPrefabs/EraseLv/Lv_10", "UIPrefabs/EraseLv/Lv_11", "UIPrefabs/EraseLv/Lv_12", "UIPrefabs/EraseLv/Lv_13", "UIPrefabs/EraseLv/Lv_14", "UIPrefabs/EraseLv/Lv_15", "UIPrefabs/EraseLv/Lv_16", "UIPrefabs/EraseLv/Lv_17", "UIPrefabs/EraseLv/Lv_18", "UIPrefabs/EraseLv/Lv_19", "UIPrefabs/EraseLv/Lv_20", "UIPrefabs/EraseLv/Lv_21", "UIPrefabs/EraseLv/Lv_22", "UIPrefabs/EraseLv/Lv_23" ]
                }
            }, e.GamePlayResPkg1 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/MoveLv/Lv_2", "UIPrefabs/MoveLv/Lv_3", "UIPrefabs/MoveLv/Lv_4", "UIPrefabs/MoveLv/Lv_5", "UIPrefabs/MoveLv/Lv_6", "UIPrefabs/MoveLv/Lv_7", "UIPrefabs/MoveLv/Lv_8", "UIPrefabs/MoveLv/Lv_9", "UIPrefabs/MoveLv/Lv_10", "UIPrefabs/MoveLv/Lv_11", "UIPrefabs/MoveLv/Lv_12", "UIPrefabs/MoveLv/Lv_13", "UIPrefabs/MoveLv/Lv_14", "UIPrefabs/MoveLv/Lv_15", "UIPrefabs/MoveLv/Lv_16", "UIPrefabs/MoveLv/Lv_17", "UIPrefabs/MoveLv/Lv_18", "UIPrefabs/MoveLv/Lv_19", "UIPrefabs/MoveLv/Lv_20", "UIPrefabs/MoveLv/Lv_21" ]
                }
            }, e.GamePlayResPkg2 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/ToHit/Prop", "UIPrefabs/ToHit/Ren1", "UIPrefabs/ToHit/Ren2", "UIPrefabs/ToHit/Ren3", "UIPrefabs/ToHit/PropNode", "UIPrefabs/ToHit/Lv_2", "UIPrefabs/ToHit/Lv_3", "UIPrefabs/ToHit/Lv_4", "UIPrefabs/ToHit/Lv_5", "UIPrefabs/ToHit/Lv_6", "UIPrefabs/ToHit/Lv_7", "UIPrefabs/ToHit/Lv_8", "UIPrefabs/ToHit/Lv_9", "UIPrefabs/ToHit/Lv_10", "UIPrefabs/ToHit/Lv_11", "UIPrefabs/ToHit/Lv_12", "UIPrefabs/ToHit/Lv_13", "UIPrefabs/ToHit/Lv_14", "UIPrefabs/ToHit/Lv_15", "UIPrefabs/ToHit/Lv_16", "UIPrefabs/ToHit/Lv_17", "UIPrefabs/ToHit/Lv_18", "UIPrefabs/ToHit/Lv_19", "UIPrefabs/ToHit/Lv_20" ]
                }
            }, e.GamePlayResPkg3 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/Soldier/Lv_2", "UIPrefabs/Soldier/Lv_3", "UIPrefabs/Soldier/Lv_4", "UIPrefabs/Soldier/Lv_5", "UIPrefabs/Soldier/Lv_6", "UIPrefabs/Soldier/Lv_7", "UIPrefabs/Soldier/Lv_8", "UIPrefabs/Soldier/Lv_9", "UIPrefabs/Soldier/Lv_10", "UIPrefabs/Soldier/Lv_11", "UIPrefabs/Soldier/Lv_12", "UIPrefabs/Soldier/Lv_13", "UIPrefabs/Soldier/Lv_14", "UIPrefabs/Soldier/Lv_15", "UIPrefabs/Soldier/Lv_16", "UIPrefabs/Soldier/Lv_17", "UIPrefabs/Soldier/Lv_18", "UIPrefabs/Soldier/Lv_19", "UIPrefabs/Soldier/Lv_20", "UIPrefabs/Soldier/connect", "UIPrefabs/Soldier/shengji" ]
                }
            }, e.GamePlayResPkg4 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/Round/Lv_2", "UIPrefabs/Round/Lv_3", "UIPrefabs/Round/Lv_4", "UIPrefabs/Round/Lv_5", "UIPrefabs/Round/Lv_6", "UIPrefabs/Round/Lv_7", "UIPrefabs/Round/Lv_8", "UIPrefabs/Round/Lv_9", "UIPrefabs/Round/Lv_10", "UIPrefabs/Round/Lv_11", "UIPrefabs/Round/Lv_12", "UIPrefabs/Round/Lv_13", "UIPrefabs/Round/Lv_14", "UIPrefabs/Round/Lv_15", "UIPrefabs/Round/Lv_16", "UIPrefabs/Round/Lv_17", "UIPrefabs/Round/Lv_18", "UIPrefabs/Round/Lv_19", "UIPrefabs/Round/Lv_20", "UIPrefabs/Round/Lv_21", "UIPrefabs/Round/Lv_22", "UIPrefabs/Round/Lv_23", "UIPrefabs/Round/Lv_24", "UIPrefabs/Round/Lv_25", "UIPrefabs/Round/Lv_26", "UIPrefabs/Round/Lv_27", "UIPrefabs/Round/Lv_28", "UIPrefabs/Round/Lv_29", "UIPrefabs/Round/Lv_30", "UIPrefabs/Round/Lv_31", "UIPrefabs/Round/Lv_32", "UIPrefabs/Round/Lv_33", "UIPrefabs/Round/Lv_34", "UIPrefabs/Round/Lv_35", "UIPrefabs/Round/Lv_36", "UIPrefabs/Round/Lv_37", "UIPrefabs/Round/Lv_38", "UIPrefabs/Round/Lv_39", "UIPrefabs/Round/Lv_40", "UIPrefabs/Round/Lv_41", "UIPrefabs/Round/Lv_42", "UIPrefabs/Round/Lv_43", "UIPrefabs/Round/Lv_44", "UIPrefabs/Round/Lv_45", "UIPrefabs/Round/Lv_46", "UIPrefabs/Round/Lv_47", "UIPrefabs/Round/Lv_48", "UIPrefabs/Round/Lv_49", "UIPrefabs/Round/Lv_50", "UIPrefabs/Round/Lv_51", "UIPrefabs/Round/Lv_52", "UIPrefabs/Round/Lv_53", "UIPrefabs/Round/Lv_54", "UIPrefabs/Round/Lv_55", "UIPrefabs/Round/Lv_56", "UIPrefabs/Round/Lv_57", "UIPrefabs/Round/Lv_58", "UIPrefabs/Round/Lv_59", "UIPrefabs/Round/Lv_60", "UIPrefabs/Round/Lv_61", "UIPrefabs/Round/Lv_62", "UIPrefabs/Round/Death", "UIPrefabs/Round/Whipbrother", "UIPrefabs/Round/lizard", "UIPrefabs/Round/YinDu", "UIPrefabs/Round/woman", "UIPrefabs/Round/womanLead", "UIPrefabs/Round/Thief", "UIPrefabs/Round/police", "UIPrefabs/Round/Yang", "UIPrefabs/Round/Lang" ]
                }
            }, e.GamePlayResPkg5 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/River/Lv_2", "UIPrefabs/River/Lv_3", "UIPrefabs/River/Lv_4", "UIPrefabs/River/Lv_5", "UIPrefabs/River/Lv_6", "UIPrefabs/River/Lv_7", "UIPrefabs/River/Lv_8", "UIPrefabs/River/Lv_9", "UIPrefabs/River/Lv_10", "UIPrefabs/River/Lv_11", "UIPrefabs/River/Lv_12", "UIPrefabs/River/Lv_13", "UIPrefabs/River/RiverErrTips", "UIPrefabs/River/RiverTips" ]
                }
            }, e.GamePlayResPkg6 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/Snake/Lv_2", "UIPrefabs/Snake/Lv_3", "UIPrefabs/Snake/Lv_4", "UIPrefabs/Snake/Lv_5", "UIPrefabs/Snake/Lv_6", "UIPrefabs/Snake/Lv_7", "UIPrefabs/Snake/Lv_8", "UIPrefabs/Snake/Lv_9", "UIPrefabs/Snake/Lv_10", "UIPrefabs/Snake/Lv_11", "UIPrefabs/Snake/Lv_12", "UIPrefabs/Snake/Lv_13", "UIPrefabs/Snake/Lv_14", "UIPrefabs/Snake/Lv_15", "UIPrefabs/Snake/Lv_16", "UIPrefabs/Snake/Lv_17", "UIPrefabs/Snake/Lv_18", "UIPrefabs/Snake/Lv_19", "UIPrefabs/Snake/Lv_20", "UIPrefabs/Snake/Body" ]
                }
            }, e.GamePlayResPkg7 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/Car/Lv_2", "UIPrefabs/Car/Lv_3", "UIPrefabs/Car/Lv_4", "UIPrefabs/Car/Lv_5", "UIPrefabs/Car/Lv_6", "UIPrefabs/Car/Lv_7", "UIPrefabs/Car/Lv_8", "UIPrefabs/Car/Lv_9", "UIPrefabs/Car/Lv_10", "UIPrefabs/Car/Lv_11", "UIPrefabs/Car/Lv_12", "UIPrefabs/Car/Lv_13", "UIPrefabs/Car/Lv_14", "UIPrefabs/Car/CarTips", "UIPrefabs/Car/CarColliderDragon" ]
                }
            }, e.GamePlayResPkg8 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/Dialect/Lv_2", "UIPrefabs/Dialect/Lv_3", "UIPrefabs/Dialect/Lv_4", "UIPrefabs/Dialect/Lv_5", "UIPrefabs/Dialect/Lv_6", "UIPrefabs/Dialect/Lv_7", "UIPrefabs/Dialect/Lv_8", "UIPrefabs/Dialect/Lv_9", "UIPrefabs/Dialect/Lv_10", "UIPrefabs/Dialect/Lv_11", "UIPrefabs/Dialect/Lv_12", "UIPrefabs/Dialect/Lv_13", "UIPrefabs/Dialect/Lv_14", "UIPrefabs/Dialect/Lv_15", "UIPrefabs/Dialect/Lv_16", "UIPrefabs/Dialect/Lv_17", "UIPrefabs/Dialect/Mask", "UIPrefabs/Dialect/Lv_1", "UIPrefabs/Dialect/Lv_2", "UIPrefabs/Dialect/Lv_3", "UIPrefabs/Dialect/Lv_4", "UIPrefabs/Dialect/Lv_5", "UIPrefabs/Dialect/Lv_6", "UIPrefabs/Dialect/Lv_7", "UIPrefabs/Dialect/Lv_8", "UIPrefabs/Dialect/Lv_9", "UIPrefabs/Dialect/Lv_10", "UIPrefabs/Dialect/Lv_11", "UIPrefabs/Dialect/Lv_12", "UIPrefabs/Dialect/Lv_13", "UIPrefabs/Dialect/Lv_14", "UIPrefabs/Dialect/Lv_15", "UIPrefabs/Dialect/Lv_16", "UIPrefabs/Dialect/Lv_17", "UIPrefabs/Dialect/Mask" ]
                }
            }, e.GamePlayResPkg9 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/LineSoldier/Lv_2", "UIPrefabs/LineSoldier/Lv_3", "UIPrefabs/LineSoldier/Lv_4", "UIPrefabs/LineSoldier/Lv_5", "UIPrefabs/LineSoldier/Lv_6", "UIPrefabs/LineSoldier/Lv_7", "UIPrefabs/LineSoldier/Lv_8", "UIPrefabs/LineSoldier/Lv_9", "UIPrefabs/LineSoldier/Lv_10", "UIPrefabs/LineSoldier/Lv_11", "UIPrefabs/LineSoldier/Lv_12", "UIPrefabs/LineSoldier/Lv_13", "UIPrefabs/LineSoldier/Lv_14", "UIPrefabs/LineSoldier/Lv_15", "UIPrefabs/LineSoldier/Lv_16", "UIPrefabs/LineSoldier/Lv_17", "UIPrefabs/LineSoldier/Lv_18", "UIPrefabs/LineSoldier/Lv_19", "UIPrefabs/LineSoldier/Lv_20", "UIPrefabs/LineSoldier/Lv_21", "UIPrefabs/LineSoldier/Lv_22", "UIPrefabs/LineSoldier/Lv_23", "UIPrefabs/LineSoldier/Lv_24", "UIPrefabs/LineSoldier/Lv_25", "UIPrefabs/LineSoldier/Lv_26", "UIPrefabs/LineSoldier/Lv_27", "UIPrefabs/LineSoldier/Lv_28", "UIPrefabs/LineSoldier/Lv_29", "UIPrefabs/LineSoldier/Lv_30", "UIPrefabs/LineSoldier/Lv_31", "UIPrefabs/LineSoldier/Lv_32", "UIPrefabs/LineSoldier/Lv_33", "UIPrefabs/LineSoldier/police", "UIPrefabs/LineSoldier/lang" ]
                }
            }, e.GamePlayResPkg10 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/Circular/Lv_2", "UIPrefabs/Circular/Lv_3", "UIPrefabs/Circular/Lv_4", "UIPrefabs/Circular/Lv_5", "UIPrefabs/Circular/Lv_6", "UIPrefabs/Circular/Lv_7", "UIPrefabs/Circular/Animal1", "UIPrefabs/Circular/Animal2", "UIPrefabs/Circular/Animal3", "UIPrefabs/Circular/Animal4" ]
                }
            }, e.GamePlayResPkg11 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/Color/Lv_2", "UIPrefabs/Color/Lv_3", "UIPrefabs/Color/Lv_4", "UIPrefabs/Color/Lv_5", "UIPrefabs/Color/Lv_6", "UIPrefabs/Color/Lv_7", "UIPrefabs/Color/Lv_8", "UIPrefabs/Color/Lv_9", "UIPrefabs/Color/Lv_10", "UIPrefabs/Color/Lv_11", "UIPrefabs/Color/Lv_12", "UIPrefabs/Color/Lv_13", "UIPrefabs/Color/Lv_14", "UIPrefabs/Color/ColorTips" ]
                }
            }, e.GamePlayResPkg12 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/Near/Lv_2", "UIPrefabs/Near/Lv_3", "UIPrefabs/Near/Lv_4", "UIPrefabs/Near/Lv_5", "UIPrefabs/Near/Lv_6", "UIPrefabs/Near/Lv_7", "UIPrefabs/Near/Lv_8", "UIPrefabs/Near/Lv_9", "UIPrefabs/Near/Lv_10", "UIPrefabs/Near/Lv_11", "UIPrefabs/Near/Lv_12", "UIPrefabs/Near/Lv_13", "UIPrefabs/Near/Lv_14", "UIPrefabs/Near/thief", "UIPrefabs/Near/mao", "UIPrefabs/Near/laoshu", "UIPrefabs/Near/woman", "UIPrefabs/Near/daxiang", "UIPrefabs/Near/lang", "UIPrefabs/Near/yang", "UIPrefabs/Near/NearTips", "UIPrefabs/Near/baozha" ]
                }
            }, e.GamePlayResPkg13 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/Warp/Lv_2", "UIPrefabs/Warp/Lv_3", "UIPrefabs/Warp/Lv_4", "UIPrefabs/Warp/Lv_5", "UIPrefabs/Warp/Lv_6", "UIPrefabs/Warp/Lv_7", "UIPrefabs/Warp/Lv_8", "UIPrefabs/Warp/Lv_9", "UIPrefabs/Warp/Lv_10", "UIPrefabs/Warp/Lv_11", "UIPrefabs/Warp/Lv_12", "UIPrefabs/Warp/Lv_13", "UIPrefabs/Warp/Lv_14", "UIPrefabs/Warp/Lv_15", "UIPrefabs/Warp/Lv_16", "UIPrefabs/Warp/Lv_17", "UIPrefabs/Warp/Lv_18", "UIPrefabs/Warp/Lv_19", "UIPrefabs/Warp/Lv_20", "UIPrefabs/Warp/Lv_21", "UIPrefabs/Warp/Lv_22", "UIPrefabs/Warp/Lv_23", "UIPrefabs/Warp/Lv_24", "UIPrefabs/Warp/Lv_25", "UIPrefabs/Warp/Lv_26", "UIPrefabs/Warp/Lv_27", "UIPrefabs/Warp/Lv_28", "UIPrefabs/Warp/Lv_29", "UIPrefabs/Warp/Lv_30" ]
                }
            }, e.GamePlayResPkg14 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/Rescue/Lv_2", "UIPrefabs/Rescue/Lv_3", "UIPrefabs/Rescue/Lv_4", "UIPrefabs/Rescue/Lv_5", "UIPrefabs/Rescue/Lv_6", "UIPrefabs/Rescue/Lv_7", "UIPrefabs/Rescue/Lv_8", "UIPrefabs/Rescue/Lv_9", "UIPrefabs/Rescue/Lv_10", "UIPrefabs/Rescue/Lv_11", "UIPrefabs/Rescue/Lv_12", "UIPrefabs/Rescue/Lv_13", "UIPrefabs/Rescue/Lv_14", "UIPrefabs/Rescue/Lv_15", "UIPrefabs/Rescue/Lv_16", "UIPrefabs/Rescue/Lv_17", "UIPrefabs/Rescue/Lv_18", "UIPrefabs/Rescue/Lv_19", "UIPrefabs/Rescue/Lv_20", "UIPrefabs/Rescue/Lv_21", "UIPrefabs/Rescue/Lv_22", "UIPrefabs/Rescue/Lv_23", "UIPrefabs/Rescue/Lv_24", "UIPrefabs/Rescue/Lv_25", "UIPrefabs/Rescue/Lv_26", "UIPrefabs/Rescue/Lv_27", "UIPrefabs/Rescue/mifeng", "UIPrefabs/Rescue/weizi", "UIPrefabs/Rescue/hua", "UIPrefabs/Rescue/dao" ]
                }
            }, e.GamePlayResPkg15 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/WarpMan/Lv_2", "UIPrefabs/WarpMan/Lv_3", "UIPrefabs/WarpMan/Lv_4", "UIPrefabs/WarpMan/Lv_5", "UIPrefabs/WarpMan/Lv_6", "UIPrefabs/WarpMan/Lv_7", "UIPrefabs/WarpMan/Lv_8", "UIPrefabs/WarpMan/Lv_9", "UIPrefabs/WarpMan/Lv_10", "UIPrefabs/WarpMan/Lv_11" ]
                }
            }, e.GamePlayResPkg16 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/Pig/Door", "UIPrefabs/Pig/yun", "UIPrefabs/Pig/Lv", "UIPrefabs/Pig/Lv_1", "UIPrefabs/Pig/Lv_2", "UIPrefabs/Pig/Lv_3", "UIPrefabs/Pig/Lv_4", "UIPrefabs/Pig/Lv_5", "UIPrefabs/Pig/Lv_6", "UIPrefabs/Pig/Lv_7", "UIPrefabs/Pig/Lv_8", "UIPrefabs/Pig/Lv_9", "UIPrefabs/Pig/Lv_10", "UIPrefabs/Pig/Lv_11", "UIPrefabs/Pig/Lv_12", "UIPrefabs/Pig/Lv_13", "UIPrefabs/Pig/Lv_14", "UIPrefabs/Pig/Lv_15", "UIPrefabs/Pig/Lv_16", "UIPrefabs/Pig/Lv_17", "UIPrefabs/Pig/Lv_18", "UIPrefabs/Pig/Lv_19", "UIPrefabs/Pig/Lv_20", "UIPrefabs/Pig/Lv_21", "UIPrefabs/Pig/Lv_22", "UIPrefabs/Pig/Lv_23", "UIPrefabs/Pig/Lv_24", "UIPrefabs/Pig/Lv_25", "UIPrefabs/Pig/Lv_26", "UIPrefabs/Pig/Lv_27", "UIPrefabs/Pig/Lv_28", "UIPrefabs/Pig/Lv_29", "UIPrefabs/Pig/Lv_30" ]
                }
            }, e.GamePlayResPkg17 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/Maze/Mask", "UIPrefabs/Maze/stay", "UIPrefabs/Maze/Lv_1" ]
                }
            }, e.GamePlayResPkg18 = {
                GUI: {
                    assetType: cc.Prefab,
                    urls: [ "UIPrefabs/Bridge/Bridge1", "UIPrefabs/Bridge/Bridge2", "UIPrefabs/Bridge/check", "UIPrefabs/Bridge/Lv_1", "UIPrefabs/Bridge/Lv_2", "UIPrefabs/Bridge/Lv_3", "UIPrefabs/Bridge/Lv_4", "UIPrefabs/Bridge/Lv_5", "UIPrefabs/Bridge/Lv_6", "UIPrefabs/Bridge/Lv_7", "UIPrefabs/Bridge/Lv_8", "UIPrefabs/Bridge/Lv_9", "UIPrefabs/Bridge/Lv_10" ]
                }
            }, e;
        }();
        n.PkgConfiguration = o, cc._RF.pop();
    }, {} ],
    Player: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "680ddxZcpJBBKTOB2DNYFY6", "Player"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../Config/GConfiguration"), i = e("../Managers/EventMgr"), a = e("../Managers/GameMgr"), r = e("./aStar"), s = e("./DataConfig"), c = cc._decorator, l = c.ccclass, d = (c.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.playerStartPos = cc.v2(0, 0), t.playerMapPos = cc.v2(0, 0), t.targetPos = cc.v2(0, 0), 
                t.player = null, t.endList = [], t.endIndex = 0, t.STARTPOS = null, t.upSuccess = 1, 
                t.moveSpeend = .2, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.aStar = new r.AStar(), this.player = this.node, this.STARTPOS = this.player.position, 
                this.onInit(), i.default.Instance.add_event_listenner(o.GConfiguration.WrapMove, this, this.startMove);
            }, t.prototype.onInit = function() {
                var e = (this.player.y - -332) / 42, t = (this.player.x - -337) / 42;
                this.playerStartPos = cc.v2(t, e), this.playerMapPos = cc.v2(t, e), this.player.position = cc.v3(this.getNodePosByMapPos(this.playerMapPos.x, this.playerMapPos.y)), 
                a.default.Instance.GameType != a.GameType.Pig ? this.upSuccess = 1 : this.upSuccess = 2;
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.WrapMove, this, this.startMove);
            }, t.prototype.startMove = function(e, t) {
                this.endList = __spreadArrays(t), this.endList.length > 1 ? this.endIndex = Math.floor(Math.random() * this.endList.length) : this.endIndex = 0;
                var n = this.getMapPosByNodePos(t[this.endIndex].x, t[this.endIndex].y);
                n && (this.targetPos = n, this.showPathsAndMove(), this.endList.splice(this.endIndex, 1));
            }, t.prototype.getMapPosByNodePos = function(e, t) {
                if (e = null != e ? e : this.node.x, t = null != t ? t : this.node.y, e > s.leftButtomStatPos.x && e < s.leftButtomStatPos.x + s.tableData[0].length * s.tiledSize.width && t > s.leftButtomStatPos.y && t < s.leftButtomStatPos.y + s.tableData.length * s.tiledSize.height) {
                    var n = Math.floor((e - s.leftButtomStatPos.x) / s.tiledSize.width), o = Math.floor((t - s.leftButtomStatPos.y) / s.tiledSize.height);
                    return cc.v2(n, o);
                }
                return null;
            }, t.prototype.showPathsAndMove = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t, n;
                    return __generator(this, function(a) {
                        switch (a.label) {
                          case 0:
                            return [ 4, this.aStar.findePaths(this.playerMapPos, this.targetPos) ];

                          case 1:
                            return (e = a.sent())[0] ? (t = e[1], this.playerMove(t)) : this.endList.length > 0 ? (this.endList.length > 1 ? this.endIndex = Math.floor(Math.random() * this.endList.length) : this.endIndex = 0, 
                            (n = this.getMapPosByNodePos(this.endList[this.endIndex].x, this.endList[this.endIndex].y)) && (this.targetPos = n, 
                            this.showPathsAndMove(), this.endList.splice(this.endIndex, 1))) : i.default.Instance.dispatch_event(o.GConfiguration.WarpAIMoveEnd, !1), 
                            [ 2 ];
                        }
                    });
                });
            }, t.prototype.playerMove = function(e) {
                var t = this;
                a.default.Instance.GameType != a.GameType.Pig && this.node.getComponent(dragonBones.ArmatureDisplay).playAnimation("walk", 0);
                var n = [];
                e.splice(0, 1);
                var r = Math.floor((this.player.x - -337) / 42);
                r < e[0].x ? this.player.scaleX = -1 : r > e[0].x && (this.player.scaleX = 1);
                var s = cc.moveTo(this.moveSpeend, cc.v2(this.getNodePosByMapPos(e[0].x, e[0].y)));
                n.push(s);
                var c = cc.callFunc(function() {
                    if (e.length > t.upSuccess) t.playerMove(e); else {
                        var n = e[e.length - 1];
                        t.playerMapPos = cc.v2(n), a.default.Instance.GameType != a.GameType.Pig ? ("nvhai_ske copy" == t.node.name || "nvhai_ske" == t.node.name ? t.node.getComponent(dragonBones.ArmatureDisplay).playAnimation("stand2", 1) : t.node.getComponent(dragonBones.ArmatureDisplay).playAnimation("stand", 1), 
                        i.default.Instance.dispatch_event(o.GConfiguration.WarpAIMoveEnd, !0)) : i.default.Instance.dispatch_event(o.GConfiguration.ChangeSkin, t.targetPos);
                    }
                });
                n.push(c), this.player.stopAllActions(), this.player.runAction(cc.sequence(n));
            }, t.prototype.getNodePosByMapPos = function(e, t) {
                e = Math.floor(e), t = Math.floor(t);
                var n = null;
                return -1 == this.player.scaleX ? ("nvhai_ske" == this.node.name && console.log("fanzhuan"), 
                n = cc.v3(s.leftButtomStatPos.x + e * s.tiledSize.width + s.tiledSize.width / 2, s.leftButtomStatPos.y + t * s.tiledSize.height - s.tiledSize.height / 2)) : ("nvhai_ske" == this.node.name && console.log("......"), 
                n = cc.v3(s.leftButtomStatPos.x + e * s.tiledSize.width - s.tiledSize.width / 2, s.leftButtomStatPos.y + t * s.tiledSize.height - s.tiledSize.height / 2)), 
                n;
            }, __decorate([ l ], t);
        }(cc.Component));
        n.default = d, cc._RF.pop();
    }, {
        "../Config/GConfiguration": "GConfiguration",
        "../Managers/EventMgr": "EventMgr",
        "../Managers/GameMgr": "GameMgr",
        "./DataConfig": "DataConfig",
        "./aStar": "aStar"
    } ],
    PropNode: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a36bfjzIENEAqFZ6ya6KIUg", "PropNode"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = o.property, r = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.spr = [], t;
            }
            return __extends(t, e), t.prototype.setPropSprite = function(e) {
                this.node.getComponent(cc.Sprite).spriteFrame = this.spr[e];
            }, __decorate([ a([ cc.SpriteFrame ]) ], t.prototype, "spr", void 0), __decorate([ i ], t);
        }(cc.Component);
        n.default = r, cc._RF.pop();
    }, {} ],
    Prop: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f8369SnbRZM34mha0Jyu4WI", "Prop"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.allNum = null, t.index = 0, t;
            }
            return __extends(t, e), t.prototype.setNum = function(e) {
                this.allNum = e, this.node.children[this.node.childrenCount - 1].active = 4 === e;
            }, t.prototype.setProp = function() {
                this.index++;
            }, t.prototype.getPorp = function() {
                return this.index + 1 > this.allNum ? -1 : (this.node.children[this.index].active = !1, 
                this.index);
            }, __decorate([ i ], t);
        }(cc.Component));
        n.default = a, cc._RF.pop();
    }, {} ],
    RenderMgr: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b7bf5eNgzdGWaRRujXnDwrc", "RenderMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nativeIconAd = null, t.iconData = null, t.bigNativeIconAd = null, t.bigNativeIconData = null, 
                t;
            }
            var n;
            return __extends(t, e), n = t, t.prototype.onLoad = function() {
                null === n.Instance ? n.Instance = this : this.destroy();
            }, t.prototype.start = function() {
                console.log("init>>>>>>>>>"), this.initIcon(), this.initBigIcon();
            }, t.prototype.initBigIcon = function() {
                var e = this;
                console.log("开始加载原生大图广告"), this.bigNativeIconAd = qg.createNativeAd({
                    adUnitId: "542068"
                }), this.bigNativeIconAd.load(), this.bigNativeIconAd.onLoad(function(t) {
                    console.log("原生大图onload>>>>>>>>>>>>>>>"), console.log("iconAd load ok", t.adList), 
                    t.adList && (e.bigNativeIconAd.reportAdShow({
                        adId: t.adList[0].adId
                    }), e.bigNativeIconData = t.adList[0]);
                }), this.bigNativeIconAd.onError(function(e) {
                    console.log("原生大图 load err", e);
                });
            }, t.prototype.updateBigIconAd = function() {
                this.bigNativeIconAd.load();
            }, t.prototype.onClickBigIconReport = function() {
                this.bigNativeIconAd.reportAdClick({
                    adId: this.bigNativeIconData.adId
                }), this.bigNativeIconAd.load();
            }, t.prototype.getBigIconAd = function() {
                return this.bigNativeIconData;
            }, t.prototype.initIcon = function() {
                var e = this;
                console.log("开始加载原生icon广告"), this.nativeIconAd = qg.createNativeAd({
                    adUnitId: "535795"
                }), this.nativeIconAd.load(), this.nativeIconAd.onLoad(function(t) {
                    console.log("iconAd load ok", t.adList), t.adList && (e.nativeIconAd.reportAdShow({
                        adId: t.adList[0].adId
                    }), e.iconData = t.adList[0]);
                }), this.nativeIconAd.onError(function(e) {
                    console.log("iconAd load err", e);
                });
            }, t.prototype.updateIconAd = function() {
                this.nativeIconAd.load();
            }, t.prototype.onClickIconReport = function() {
                this.nativeIconAd.reportAdClick({
                    adId: this.iconData.adId
                }), this.nativeIconAd.load();
            }, t.prototype.getIconAd = function() {
                return console.log(this.iconData, ">>>>>>>>>>>"), this.iconData;
            }, t.Instance = null, n = __decorate([ i ], t);
        }(cc.Component));
        n.default = a, cc._RF.pop();
    }, {} ],
    ResLoading_Ctrl: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "58c72leytpP7KVFKcyD9nce", "ResLoading_Ctrl"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, e("./../../Managers/UIMgr")), r = e("../../Managers/EventMgr"), s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.progressBar = null, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this), this.progressBar = this.view["UIProgress/value"].getComponent(cc.Sprite), 
                this.progressBar.fillRange = 0, r.default.Instance.add_event_listenner("ResLoadProgress", this, this.onProgress);
            }, t.prototype.onProgress = function(e, t) {
                var n = t;
                this.progressBar.fillRange = n;
            }, t.prototype.onDestroy = function() {
                r.default.Instance.remove_event_listenner("ResLoadProgress", this, this.onProgress);
            }, __decorate([ i ], t);
        }(a.UICtrl);
        n.default = s, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr",
        "./../../Managers/UIMgr": "UIMgr"
    } ],
    ResMgr: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f8583YU/v9IxpBQmOdxPiFN", "ResMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = o.property, r = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.abBunds = {}, t.total = 0, t.now = 0, t.progressFunc = null, t.endFunc = null, 
                t.nowAb = 0, t.totalAb = 0, t.resLoading = null, t.gameLoading = null, t;
            }
            var n;
            return __extends(t, e), n = t, t.prototype.init = function() {}, t.prototype.loadAssetsBundle = function(e, t) {
                var n = this;
                cc.assetManager.loadBundle(e, function(o, i) {
                    null !== o ? (console.log("[ResMgr]:Load AssetsBundle Error: " + e), n.abBunds[e] = null) : n.abBunds[e] = i, 
                    t && t();
                });
            }, t.prototype.onLoad = function() {
                null === n.Instance ? n.Instance = this : this.destroy();
            }, t.prototype.loadRes = function(e, t, n) {
                var o = this;
                e.load(t, n, function(e) {
                    o.now++, e && console.log("load Res " + t + " error: " + e), o.progressFunc && o.progressFunc(o.now, o.total), 
                    o.now >= o.total && null !== o.endFunc && o.endFunc();
                });
            }, t.prototype.getAsset = function(e, t) {
                var n = cc.assetManager.getBundle(e);
                return null === n ? (console.log("[error]: " + e + " AssetsBundle not loaded !!!"), 
                null) : n.get(t);
            }, t.prototype.releaseResPackage = function(e) {
                for (var t in e) {
                    for (var n = e[t].urls, o = 0; o < n.length; o++) {
                        var i = cc.assetManager.getBundle(t);
                        null !== i ? cc.assetManager.releaseAsset(i.get(n[o])) : console.log("[error]: " + t + " AssetsBundle not loaded !!!");
                    }
                }
            }, t.prototype.loadAssetsInAssetsBundle = function(e) {
                for (var t in e) {
                    for (var n = e[t].urls, o = e[t].assetType, i = 0; i < n.length; i++) {
                        this.loadRes(this.abBunds[t], n[i], o);
                    }
                }
            }, t.prototype.preloadResPackage = function(e, t, n) {
                var o = this;
                for (var i in this.total = 0, this.now = 0, this.totalAb = 0, this.nowAb = 0, this.progressFunc = t, 
                this.endFunc = n, e) {
                    this.totalAb++, this.total += e[i].urls.length;
                }
                for (var i in e) {
                    this.loadAssetsBundle(i, function() {
                        o.nowAb++, o.nowAb === o.totalAb && o.loadAssetsInAssetsBundle(e);
                    });
                }
            }, t.Instance = null, __decorate([ a(cc.Prefab) ], t.prototype, "resLoading", void 0), 
            n = __decorate([ i ], t);
        }(cc.Component);
        n.default = r, cc._RF.pop();
    }, {} ],
    RescueAnimalItem: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "90b846f6eBICYRBlgSc+Wjk", "RescueAnimalItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Managers/UserMgr"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.colliderIndex = 0, t.selfSpine = null, t.selfRig = null, t.isShowWater = !1, 
                t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.selfSpine = this.node.getComponent(sp.Skeleton), i.default.Instance.add_event_listenner(o.GConfiguration.RescueChangeRig, this, this.onActiveRig), 
                2 != r.UserMgr._instance.userInfo.RescueLeve && 3 != r.UserMgr._instance.userInfo.RescueLeve && 6 != r.UserMgr._instance.userInfo.RescueLeve && 7 != r.UserMgr._instance.userInfo.RescueLeve && 10 != r.UserMgr._instance.userInfo.RescueLeve && 13 != r.UserMgr._instance.userInfo.RescueLeve && 15 != r.UserMgr._instance.userInfo.RescueLeve && 18 != r.UserMgr._instance.userInfo.RescueLeve && 20 != r.UserMgr._instance.userInfo.RescueLeve && 21 != r.UserMgr._instance.userInfo.RescueLeve && 24 != r.UserMgr._instance.userInfo.RescueLeve && 27 != r.UserMgr._instance.userInfo.RescueLeve || (this.selfRig = this.node.getComponent(cc.RigidBody), 
                this.selfRig.type = cc.RigidBodyType.Static);
            }, t.prototype.onActiveRig = function() {
                this.selfRig.type = cc.RigidBodyType.Dynamic;
            }, t.prototype.onBeginContact = function(e, t, n) {
                if ("mifeng" == n.node.name || "weizi" == n.node.name || "dao" == n.node.name) switch (this.colliderIndex += 1, 
                this.colliderIndex) {
                  case 1:
                  case 2:
                    this.selfSpine.setAnimation(0, "fail", !0);
                    break;

                  case 3:
                    this.selfSpine.setAnimation(0, "cry", !0), i.default.Instance.dispatch_event(o.GConfiguration.RescueDie, "");
                    break;

                  default:
                    this.selfSpine.setAnimation(0, "cry", !0);
                }
                if ("water" != n.node.name && "wallDown" != n.node.name || (i.default.Instance.dispatch_event(o.GConfiguration.RescueDie, ""), 
                this.selfSpine.setAnimation(0, "fail", !0)), !this.isShowWater && "water" == n.node.name && (2 == r.UserMgr._instance.userInfo.RescueLeve || 3 == r.UserMgr._instance.userInfo.RescueLeve || 6 == r.UserMgr._instance.userInfo.RescueLeve || 7 == r.UserMgr._instance.userInfo.RescueLeve || 13 == r.UserMgr._instance.userInfo.RescueLeve || 18 == r.UserMgr._instance.userInfo.RescueLeve || 20 == r.UserMgr._instance.userInfo.RescueLeve || 21 == r.UserMgr._instance.userInfo.RescueLeve || 24 == r.UserMgr._instance.userInfo.RescueLeve || 27 == r.UserMgr._instance.userInfo.RescueLeve)) {
                    this.node.parent.getChildByName("zhezhao").active = !0;
                    var s = a.default.Instance.show_ui("Rescue", "hua", this.node.parent.getChildByName("zhezhao"));
                    s.x = this.node.x, this.isShowWater = !0, cc.tween(s).to(1, {
                        opacity: 0
                    }).call(function() {}).start();
                }
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.RescueChangeRig, this, this.onActiveRig);
            }, __decorate([ c ], t);
        }(cc.Component));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr"
    } ],
    RescueFlyItem: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2443cpMEVxPj5tVwMZp2PL/", "RescueFlyItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/EventMgr"), i = e("./RescueLeve"), a = cc._decorator, r = a.ccclass, s = (a.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.posList = [], t.targetPos = null, t.selfTween = null, t.otherAIPos = [], 
                t.startPosY = 0, t.startPosX = 0, t.turn = !1, t.selfSpine = null, t.backTween = null, 
                t.isDIe = !1, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {
                this.selfSpine = this.node.getComponent(dragonBones.ArmatureDisplay), this.initTargetPos(), 
                this.move(this.targetPos, 1.5), "dao" == this.node.name && this.selfSpine.playAnimation("dao", -1);
            }, t.prototype.initTargetPos = function() {
                if (this.otherAIPos = [], this.posList = this.node.parent.getComponent(i.default).targetPos, 
                this.posList.length > 1) {
                    var e = Math.floor(Math.random() * this.posList.length);
                    this.targetPos = this.posList[e];
                } else 1 == this.posList.length && (this.targetPos = this.posList[0]);
                "dao" != this.node.name ? this.targetPos.x > this.node.x ? (this.node.scaleX = -1, 
                this.node.angle = 300) : (this.node.scaleX = 1, this.node.angle = -300) : this.targetPos.x > this.node.x ? this.node.scaleX = -1 : this.node.scaleX = 1;
            }, t.prototype.move = function(e, t) {
                var n = this;
                this.startPosY = this.node.y, this.startPosX = this.node.x, this.selfTween && (this.selfTween = null), 
                this.selfTween = cc.tween(this.node).to(t, {
                    position: e
                }).call(function() {
                    n.turn && (n.turn = !1, n.move(n.targetPos, 1));
                }).start();
            }, t.prototype.onBeginContact = function(e, t, n) {
                var a = this;
                if ("mifeng" != n.node.name && "home" != n.node.name && "wenzi" != n.node.name && "dao" != n.node.name) {
                    "dao" == this.node.name && "suan" == n.node.name && (this.isDIe || (this.selfSpine.playAnimation("posui", 0), 
                    this.isDIe = !0, this.scheduleOnce(function() {
                        o.default.Instance.dispatch_event("addDao", ""), a.node.destroy();
                    }, .5))), this.selfTween && (this.selfTween.stop(), this.selfTween = null), null != this.backTween && (this.backTween.stop(), 
                    this.backTween = null);
                    var r, s, c = Math.floor(100 * Math.random());
                    s = this.startPosX > this.node.x ? c : -c, r = this.startPosY > this.node.y ? c : -c, 
                    this.backTween = cc.tween(this.node).to(.1, {
                        y: this.node.y + r,
                        x: this.node.x + s
                    }).call(function() {
                        a.node.parent.getComponent(i.default).updatePos(), a.initTargetPos();
                        var e = null;
                        if (a.turn) e = a.targetPos, a.turn = !1; else {
                            var t = 50 * Math.floor(7 * Math.random());
                            e = a.node.x > a.targetPos.x ? cc.v3(a.targetPos.x - t, a.targetPos.y + 270, 0) : cc.v3(a.targetPos.x + t, a.targetPos.y + 270, 0), 
                            a.turn = !0;
                        }
                        "ji" != n.node.name && "zhu" != n.node.name && "suan" != n.node.name || (e = a.targetPos), 
                        a.move(e, 1.3), a.backTween = null;
                    }).start();
                }
            }, __decorate([ r ], t);
        }(cc.Component));
        n.default = s, cc._RF.pop();
    }, {
        "../../Managers/EventMgr": "EventMgr",
        "./RescueLeve": "RescueLeve"
    } ],
    RescueLeve: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fb72eArgGVBFb1saQhumqBh", "RescueLeve"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("../../Managers/UserMgr"), c = e("../../Utils/Utils"), l = cc._decorator, d = l.ccclass, u = l.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.timeLabel = null, t.tipsFrame = null, t.targetPos = [], t.allListPos = [], 
                t.isWin = !0, t.isSucess = !1, t.isDie = !1, t.homeList = [], t.uiName = "", t.leveData = {
                    leve1: 8,
                    leve2: 8,
                    leve3: 5,
                    leve4: 8,
                    leve5: 8,
                    leve6: 8,
                    leve7: 5,
                    leve8: 8,
                    leve9: 8,
                    leve10: 8,
                    leve11: 5,
                    leve12: 8,
                    leve13: 8,
                    leve14: 8,
                    leve15: 5,
                    leve16: 8,
                    leve17: 8,
                    leve18: 8,
                    leve19: 8,
                    leve20: 8,
                    leve21: 5,
                    leve22: 8,
                    leve23: 8,
                    leve24: 8,
                    leve25: 5,
                    leve26: 8,
                    leve27: 8
                }, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                o.GConfiguration.LevelIsTips = !1, s.UserMgr._instance.userInfo.RescueLeve <= 4 || s.UserMgr._instance.userInfo.RescueLeve > 8 && s.UserMgr._instance.userInfo.RescueLeve <= 13 ? this.uiName = "mifeng" : s.UserMgr._instance.userInfo.RescueLeve > 4 && s.UserMgr._instance.userInfo.RescueLeve <= 8 || s.UserMgr._instance.userInfo.RescueLeve > 13 && s.UserMgr._instance.userInfo.RescueLeve <= 18 ? this.uiName = "weizi" : s.UserMgr._instance.userInfo.RescueLeve > 18 && (this.uiName = "dao"), 
                i.default.Instance.add_event_listenner(o.GConfiguration.RescueLinEnd, this, this.onCheck), 
                i.default.Instance.add_event_listenner(o.GConfiguration.RescueDie, this, this.onListenDie), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips), 
                i.default.Instance.add_event_listenner("addDao", this, this.addDao), this.updatePos(), 
                this.updateAllPos(), this.homeList = [], this.node.children.forEach(function(t) {
                    "home" == t.name && e.homeList.push(t);
                });
            }, t.prototype.addDao = function() {
                this.isSucess || this.isDie || (r.default.Instance.show_ui("Rescue", this.uiName, this.node).position = this.homeList[0].position);
            }, t.prototype.showTips = function() {
                o.GConfiguration.LevelIsTips = !0, r.default.Instance.show_ui("Warp", "WarpTips").getChildByName("node").getChildByName("t_tishi").getChildByName("guohetishi").getComponent(cc.Sprite).spriteFrame = this.tipsFrame;
            }, t.prototype.onListenDie = function() {
                var e = this;
                this.isDie || this.isSucess || (this.unschedule(this.startTime), this.isWin = !1, 
                this.scheduleOnce(function() {
                    a.default.Instance.play_effect("cuowu"), c.Utils.showError(e.node);
                }, .8), this.scheduleOnce(function() {
                    i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                }, 1.5), this.isDie = !0);
            }, t.prototype.updatePos = function() {
                var e = this;
                this.targetPos = [], this.node.children.forEach(function(t) {
                    "ji" != t.name && "zhu" != t.name && "suan" != t.name || e.targetPos.push(t.position);
                });
            }, t.prototype.updateAllPos = function() {
                var e = this;
                this.allListPos = [], this.node.children.forEach(function(t) {
                    "ji" != t.name && "zhu" != t.name && "home" != t.name && "mu" != t.name && "ground" != t.name && "suan" != t.name || e.allListPos.push(t);
                });
            }, t.prototype.onCheck = function() {
                for (var e = this, t = function t(_t22) {
                    for (var o = 0; o < n.leveData["leve" + s.UserMgr._instance.userInfo.RescueLeve]; o++) {
                        n.scheduleOnce(function() {
                            r.default.Instance.show_ui("Rescue", e.uiName, e.node).position = e.homeList[_t22].position;
                        }, .5 * o);
                    }
                }, n = this, o = 0; o < this.homeList.length; o++) {
                    t(o);
                }
                this.timeLabel.node.active = !0, cc.tween(this.timeLabel.node).repeat(5, cc.tween().to(.5, {
                    scale: 1.3,
                    angle: -10
                }).to(.5, {
                    scale: 1,
                    angle: 0
                }).to(.5, {
                    scale: .8,
                    angle: 10
                }).to(.5, {
                    scale: 1,
                    angle: 0
                }).set({
                    scale: 1,
                    angle: 0
                })).start(), this.schedule(this.startTime, 1);
            }, t.prototype.startTime = function() {
                var e = +this.timeLabel.string;
                if ((e -= 1) <= 0) return this.timeLabel.string = "0", this.checkGameResult(), void this.unschedule(this.startTime);
                this.timeLabel.string = e + "";
            }, t.prototype.checkGameResult = function() {
                this.isSucess || this.isDie || (this.isWin ? (this.scheduleOnce(function() {
                    r.default.Instance.show_ui("Pop", "Success");
                }, 1), this.isSucess = !0) : (a.default.Instance.play_effect("cuowu"), c.Utils.showError(this.node), 
                this.scheduleOnce(function() {
                    i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                }, 1), this.isDie = !0));
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.RescueLinEnd, this, this.onCheck), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.RescueDie, this, this.onListenDie), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips), 
                i.default.Instance.remove_event_listenner("addDao", this, this.addDao);
            }, __decorate([ u(cc.Label) ], t.prototype, "timeLabel", void 0), __decorate([ u(cc.SpriteFrame) ], t.prototype, "tipsFrame", void 0), 
            __decorate([ d ], t);
        }(r.UICtrl);
        n.default = h, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../../Utils/Utils": "Utils"
    } ],
    RiverAnimal: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "16460CmTkJN8aIG2gNqoyzw", "RiverAnimal"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("./RiverLeve"), c = cc._decorator, l = c.ccclass, d = c.property, u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.Mask = null, t.line_point = [], t.AnimalId = 0, t.isFrom = !1, t.isEnable = !1, 
                t.GameLogic = null, t.trueDraw = !1, t.err = !1, t.target = null, t.survival = !0, 
                t.config = {
                    "1index": [ 2, 3 ],
                    "2index": [ 3, 4 ],
                    "3index": [ 4 ],
                    "4index": [ 1 ]
                }, t.colorConfig = {
                    "1index": "#f2a8a8",
                    "2index": "#f6d477",
                    "3index": "#ccb1ef",
                    "4index": "#61b5fa"
                }, t;
            }
            var n;
            return __extends(t, e), n = t, t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                this.GameLogic = this.node.parent.getComponent(s.default), this.isFrom && (this.Mask = r.default.Instance.show_ui("River", "Mask", this.node.parent.getChildByName("allMask")).getComponent(cc.Graphics), 
                this.Mask.lineWidth = 20, this.Mask.strokeColor = new cc.Color().fromHEX(this.colorConfig[this.AnimalId + "index"]), 
                this.Mask.fillColor = new cc.Color().fromHEX(this.colorConfig[this.AnimalId + "index"]), 
                i.default.Instance.add_event_listenner(o.GConfiguration.DrawMove, this, this.move)), 
                this.GameLogic.animalLogic.push(this), i.default.Instance.add_event_listenner(o.GConfiguration.DrawStatus, this, this.stopDraw), 
                this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this), 
                this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
            }, t.prototype.stopDraw = function() {
                this.trueDraw = !1, this.GameLogic && (this.GameLogic.from = null);
            }, t.prototype._calculationDis = function(e, t) {
                return e.sub(t).mag();
            }, t.prototype.move = function() {
                var e = this;
                if (!this.err) {
                    var t = this._calculationDis(this.node.getPosition(), this.line_point[0]) / 500;
                    cc.tween(this.node).to(t, {
                        position: cc.v3(this.line_point[0])
                    }).call(function() {
                        e.line_point.length > 1 ? (e.line_point.shift(), e.move()) : (a.default.Instance.play_effect("eat"), 
                        i.default.Instance.dispatch_event(o.GConfiguration.DrawCheck, ""));
                    }).start();
                }
            }, t.prototype.touch_start = function(e) {
                if (this.isFrom) {
                    if (!this.isEnable) {
                        this.trueDraw = !0, this.GameLogic.setFrom(this);
                        var t = this.GameLogic.node.convertToNodeSpaceAR(e.getLocation());
                        this.GameLogic.node.getChildByName("CheckBox").setPosition(t), this.line_point.push(cc.v2(t.x, t.y)), 
                        this.Mask.moveTo(parseInt(t.x), parseInt(t.y)), i.default.Instance.dispatch_event(o.GConfiguration.CleanTips, "");
                    }
                } else r.default.Instance.show_ui("River", "RiverErrTips", this.node.parent);
            }, t.prototype.touch_move = function(e) {
                if (this.isFrom && !this.isEnable) {
                    if (!this.trueDraw) return this.Mask.clear(), void (this.line_point = []);
                    var t = this.GameLogic.node.convertToNodeSpaceAR(e.getLocation());
                    this.GameLogic.node.getChildByName("CheckBox").setPosition(t), Math.abs(parseInt(t.x) - this.line_point[this.line_point.length - 1].x) < 2 && Math.abs(parseInt(t.y) - this.line_point[this.line_point.length - 1].y) < 2 ? console.log("skip point") : (this.line_point.push(cc.v2(t.x, t.y)), 
                    this.Mask.lineTo(parseInt(t.x), parseInt(t.y)), this.Mask.stroke());
                }
            }, t.prototype.touch_end = function() {
                this.GameLogic.node.getChildByName("CheckBox").x = -1e3, this.isFrom && !this.isEnable && (this.isEnable || (this.Mask.clear(), 
                this.line_point = []));
            }, t.prototype.drawOk = function(e) {
                this.isEnable = !0, this.target = e;
            }, t.prototype.onCollisionEnter = function(e) {
                if ("Seaweed" == e.node.name) a.default.Instance.play_effect("colider"), i.default.Instance.dispatch_event(o.GConfiguration.DrawErr, ""); else if ("CheckBox" == e.node.name || "qiang" == e.node.name) ; else {
                    var t = e.node.getComponent(n);
                    if (!this.isFrom) return;
                    if (!t.isFrom && t.AnimalId != this.target.AnimalId) return;
                    for (var r = !1, s = this.config[this.AnimalId + "index"], c = 0; c < s.length; c++) {
                        if (s[c] == t.AnimalId) {
                            r = !0;
                            break;
                        }
                    }
                    r ? (a.default.Instance.play_effect("eat"), t.survival = !1, this.node.scale = 1.2, 
                    e.node.active = !1) : this.isFrom && (a.default.Instance.play_effect("colider"), 
                    i.default.Instance.dispatch_event(o.GConfiguration.DrawErr, ""));
                }
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.DrawMove, this, this.move), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.DrawStatus, this, this.stopDraw);
            }, __decorate([ d ], t.prototype, "AnimalId", void 0), __decorate([ d ], t.prototype, "isFrom", void 0), 
            n = __decorate([ l ], t);
        }(r.UICtrl);
        n.default = u, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "./RiverLeve": "RiverLeve"
    } ],
    RiverCheck: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "81ac2sFBCdDoLiAcmGAp3lR", "RiverCheck"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("./RiverAnimal"), r = e("./RiverLeve"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.GameLogic = null, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                this.GameLogic = this.node.parent.getComponent(r.default);
            }, t.prototype.onCollisionEnter = function(e) {
                if ("Seaweed" == e.node.name || "qiang" == e.node.name) i.default.Instance.dispatch_event(o.GConfiguration.DrawStatus, ""); else {
                    var t = e.node.getComponent(a.default);
                    t.isFrom || t.isEnable || (t.isEnable = !0, this.GameLogic.end = t, i.default.Instance.dispatch_event(o.GConfiguration.DrawOk, ""));
                }
            }, __decorate([ c ], t);
        }(cc.Component));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "./RiverAnimal": "RiverAnimal",
        "./RiverLeve": "RiverLeve"
    } ],
    RiverErrTips: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "7ff043VZvRKgKvheptq3I+/", "RiverErrTips"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.start = function() {
                var e = this;
                cc.tween(this.node).to(1, {
                    opacity: 0
                }).call(function() {
                    e.node.destroy();
                }).start();
            }, __decorate([ i ], t);
        }(cc.Component));
        n.default = a, cc._RF.pop();
    }, {} ],
    RiverLeve: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c2221agZdJI3qUfqA9zkhBP", "RiverLeve"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.animalLogic = [], t.from = null, t.end = null, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.DrawOk, this, this.drawOk), 
                i.default.Instance.add_event_listenner(o.GConfiguration.DrawErr, this, this.moveErr), 
                i.default.Instance.add_event_listenner(o.GConfiguration.DrawCheck, this, this.checkEnd), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips), 
                i.default.Instance.add_event_listenner(o.GConfiguration.CleanTips, this, this.cleanTips), 
                this.initPhysics();
            }, t.prototype.showTips = function() {
                this.view.tips.active = !0;
            }, t.prototype.cleanTips = function() {
                this.node.getChildByName("tips").active && (this.node.getChildByName("tips").opacity = 100);
            }, t.prototype.checkEnd = function() {
                for (var e = !0, t = 0; t < this.animalLogic.length; t++) {
                    var n = this.animalLogic[t];
                    !n.isFrom && n.survival && (e = !1);
                }
                e && this.scheduleOnce(function() {
                    a.default.Instance.show_ui("Pop", "Success");
                }, 1);
            }, t.prototype.initPhysics = function() {
                var e = new cc.Node();
                e.name = "qiang", e.group = "River";
                var t = function t(e, _t23, n, o, i) {
                    var a = e.addComponent(cc.BoxCollider);
                    a.offset.x = _t23, a.offset.y = n, a.size.width = o, a.size.height = i;
                };
                t(e, 0, -470, 2e3, 1), t(e, 0, 485, 2e3, 1), e.parent = this.node;
            }, t.prototype.setFrom = function(e) {
                this.from = e;
            }, t.prototype.drawOk = function() {
                this.from && (this.from.drawOk(this.end), this.from = null, this.end = null);
                var e = !0;
                this.animalLogic.forEach(function(t) {
                    t.isEnable || (e = !1);
                }), e && i.default.Instance.dispatch_event(o.GConfiguration.DrawMove, "");
            }, t.prototype.moveErr = function() {
                this.animalLogic.forEach(function(e) {
                    e.err = !0;
                }), r.Utils.showError(this.node), this.scheduleOnce(function() {
                    i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                }, 1);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.DrawOk, this, this.drawOk), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.DrawErr, this, this.moveErr), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.DrawCheck, this, this.checkEnd), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.CleanTips, this, this.cleanTips);
            }, __decorate([ c ], t);
        }(a.UICtrl));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils"
    } ],
    RouItem: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "22b13kLmWxKsJUln8r3IABs", "RouItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("../../Managers/UserMgr"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.lock = !1, t.target = null, t.x = 0, t.y = 0, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.click, this);
            }, t.prototype.click = function() {
                this.lock || this.target.deathPos.x == this.x && this.target.deathPos.y == this.y || (this.lock = !0, 
                r.UserMgr.instance().userInfo.roundLeve <= 7 ? a.default.Instance.show_ui("Round", "police", this.node) : r.UserMgr.instance().userInfo.roundLeve > 7 && r.UserMgr.instance().userInfo.roundLeve <= 21 ? a.default.Instance.show_ui("Round", "YinDu", this.node) : r.UserMgr.instance().userInfo.roundLeve > 21 && r.UserMgr.instance().userInfo.roundLeve <= 28 ? a.default.Instance.show_ui("Round", "woman", this.node) : r.UserMgr.instance().userInfo.roundLeve > 28 && r.UserMgr.instance().userInfo.roundLeve <= 48 ? a.default.Instance.show_ui("Round", "Whipbrother", this.node) : r.UserMgr.instance().userInfo.roundLeve > 48 && r.UserMgr.instance().userInfo.roundLeve <= 55 ? a.default.Instance.show_ui("Round", "lizard", this.node) : r.UserMgr.instance().userInfo.roundLeve > 55 && a.default.Instance.show_ui("Round", "Lang", this.node), 
                i.default.Instance.dispatch_event(o.GConfiguration.RMove, ""));
            }, t.prototype.getLattPosition = function() {
                return this.node.getPosition();
            }, t.prototype.setXY = function(e, t, n) {
                this.x = e, this.y = t, this.target = n;
            }, __decorate([ c ], t);
        }(cc.Component));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr"
    } ],
    RounLava: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "79972kP3ipGkLj2Gk11SvBN", "RounLava"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("../../Managers/UserMgr"), c = e("../../Utils/Utils"), l = e("./RouItem"), d = cc._decorator, u = d.ccclass, h = d.property, f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.latticeArr = [], t.deathPos = {
                    x: 0,
                    y: 0,
                    node: null
                }, t.x = 0, t.y = 0, t.isFire = !1, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                o.GConfiguration.LevelIsTips = !1, this.initData(), this.deathPos.x = this.x, this.deathPos.y = this.y, 
                s.UserMgr.instance().userInfo.roundLeve <= 7 ? this.deathPos.node = r.default.Instance.show_ui("Round", "Thief", this.node) : s.UserMgr.instance().userInfo.roundLeve > 7 && s.UserMgr.instance().userInfo.roundLeve <= 21 ? this.deathPos.node = r.default.Instance.show_ui("Round", "lizard", this.node) : s.UserMgr.instance().userInfo.roundLeve > 21 && s.UserMgr.instance().userInfo.roundLeve <= 28 ? this.deathPos.node = r.default.Instance.show_ui("Round", "womanLead", this.node) : s.UserMgr.instance().userInfo.roundLeve > 28 && s.UserMgr.instance().userInfo.roundLeve <= 48 ? this.deathPos.node = r.default.Instance.show_ui("Round", "Death", this.node) : s.UserMgr.instance().userInfo.roundLeve > 48 && s.UserMgr.instance().userInfo.roundLeve <= 55 ? this.deathPos.node = r.default.Instance.show_ui("Round", "YinDu", this.node) : s.UserMgr.instance().userInfo.roundLeve > 55 && (this.deathPos.node = r.default.Instance.show_ui("Round", "Yang", this.node)), 
                this.deathPos.node.setPosition(this.latticeArr[this.deathPos.x][this.deathPos.y].getLattPosition()), 
                i.default.Instance.add_event_listenner(o.GConfiguration.RMove, this, this.controller), 
                i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, t.prototype.initData = function() {
                for (var e = 0; e < this.view.Table.childrenCount; e++) {
                    var t = this.view.Table.children[e];
                    this.latticeArr[e] = [];
                    for (var n = 0; n < t.childrenCount; n++) {
                        this.latticeArr[e][n] = t.children[n].addComponent(l.default), this.latticeArr[e][n].setXY(e, n, this);
                    }
                }
            }, t.prototype.controller = function() {
                if (this.deathPos.x - 1 != -1 && this.deathPos.x + 1 <= this.latticeArr.length - 1 && this.deathPos.y - 1 != -1 && this.deathPos.y + 1 <= this.latticeArr[this.deathPos.x].length - 1) {
                    if (!this.check()) return void this.err();
                    var e = this.deathMove();
                    if (null == e) return void (this.isFire || (this.scheduleOnce(function() {
                        r.default.Instance.show_ui("Pop", "Success");
                    }, .8), this.isFire = !0));
                    this.deathPos.x = e[0], this.deathPos.y = e[1], cc.tween(this.deathPos.node).to(.2, {
                        position: cc.v2(this.latticeArr[this.deathPos.x][this.deathPos.y].getLattPosition())
                    }).start();
                } else if (!this.isFire) {
                    var t = r.default.Instance.show_ui("Pop", "Error");
                    this.scheduleOnce(function() {
                        i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, ""), t.destroy();
                    }, .8), this.isFire = !0;
                }
            }, t.prototype.deathMove = function() {
                var e = [];
                if (this.latticeArr[this.deathPos.x][this.deathPos.y - 1].lock || e.push(this.latticeArr[this.deathPos.x][this.deathPos.y - 1]), 
                this.latticeArr[this.deathPos.x][this.deathPos.y + 1].lock || e.push(this.latticeArr[this.deathPos.x][this.deathPos.y + 1]), 
                this.deathPos.x % 2 == 0 ? (this.latticeArr[this.deathPos.x - 1][this.deathPos.y].lock || e.push(this.latticeArr[this.deathPos.x - 1][this.deathPos.y]), 
                this.latticeArr[this.deathPos.x - 1][this.deathPos.y - 1].lock || e.push(this.latticeArr[this.deathPos.x - 1][this.deathPos.y - 1]), 
                this.latticeArr[this.deathPos.x + 1][this.deathPos.y - 1].lock || e.push(this.latticeArr[this.deathPos.x + 1][this.deathPos.y - 1]), 
                this.latticeArr[this.deathPos.x + 1][this.deathPos.y].lock || e.push(this.latticeArr[this.deathPos.x + 1][this.deathPos.y])) : (this.latticeArr[this.deathPos.x - 1][this.deathPos.y + 1].lock || e.push(this.latticeArr[this.deathPos.x - 1][this.deathPos.y + 1]), 
                this.latticeArr[this.deathPos.x - 1][this.deathPos.y].lock || e.push(this.latticeArr[this.deathPos.x - 1][this.deathPos.y]), 
                this.latticeArr[this.deathPos.x + 1][this.deathPos.y].lock || e.push(this.latticeArr[this.deathPos.x + 1][this.deathPos.y]), 
                this.latticeArr[this.deathPos.x + 1][this.deathPos.y + 1].lock || e.push(this.latticeArr[this.deathPos.x + 1][this.deathPos.y + 1])), 
                e.length < 1) return null;
                var t = Math.round(Math.random() * (e.length - 1));
                return [ e[t].x, e[t].y ];
            }, t.prototype.check = function() {
                if (!this.latticeArr[this.deathPos.x][this.deathPos.y - 1].node.active) return !1;
                if (!this.latticeArr[this.deathPos.x][this.deathPos.y + 1].node.active) return !1;
                if (this.deathPos.x % 2 == 0) {
                    if (!this.latticeArr[this.deathPos.x - 1][this.deathPos.y].node.active) return !1;
                    if (!this.latticeArr[this.deathPos.x - 1][this.deathPos.y - 1].node.active) return !1;
                    if (!this.latticeArr[this.deathPos.x + 1][this.deathPos.y - 1].node.active) return !1;
                    if (!this.latticeArr[this.deathPos.x + 1][this.deathPos.y].node.active) return !1;
                } else {
                    if (!this.latticeArr[this.deathPos.x - 1][this.deathPos.y + 1].node.active) return !1;
                    if (!this.latticeArr[this.deathPos.x - 1][this.deathPos.y].node.active) return !1;
                    if (!this.latticeArr[this.deathPos.x + 1][this.deathPos.y].node.active) return !1;
                    if (!this.latticeArr[this.deathPos.x + 1][this.deathPos.y + 1].node.active) return !1;
                }
                return !0;
            }, t.prototype.err = function() {
                if (!this.isFire) {
                    a.default.Instance.play_effect("cuowu");
                    var e = r.default.Instance.show_ui("Pop", "Error");
                    this.scheduleOnce(function() {
                        i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, ""), e.destroy();
                    }, .8), this.isFire = !0;
                }
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.RMove, this, this.controller), 
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, t.prototype._showTips = function() {
                o.GConfiguration.LevelIsTips = !0, c.Utils.showStrTips("从外围围捕即可!", this.node);
            }, __decorate([ h ], t.prototype, "x", void 0), __decorate([ h ], t.prototype, "y", void 0), 
            __decorate([ u ], t);
        }(r.UICtrl);
        n.default = f, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../../Utils/Utils": "Utils",
        "./RouItem": "RouItem"
    } ],
    SnakeLeve: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "55269HSN8pMA7Jx0ikjtgZ5", "SnakeLeve"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("../../Managers/UserMgr"), c = e("./SnakeMgr"), l = cc._decorator, d = l.ccclass, u = l.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.latticeArr = [], t.SnakeMgr = null, t.fromPos = null, t.targetPosX = 0, 
                t.targetPosY = 0, t.appleX = 0, t.appleY = 0, t.Direction = 0, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                this.initData(), this.initSnake(), i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips), 
                15 == s.UserMgr._instance.userInfo.snakeLeve || 16 == s.UserMgr._instance.userInfo.snakeLeve ? this.Direction = 1 : this.Direction = 2;
            }, t.prototype.showTips = function() {
                this.view.tips.active = !0;
            }, t.prototype.initSnake = function() {
                this.SnakeMgr = this.view.SnakeMgr.getComponent(c.default), this.SnakeMgr.init();
            }, t.prototype.leftMove = function() {
                2 != this.Direction && (a.default.Instance.play_effect("move"), this.SnakeMgr.leftMove(), 
                this.Direction = 1);
            }, t.prototype.rightMove = function() {
                1 != this.Direction && (a.default.Instance.play_effect("move"), this.SnakeMgr.rightMove(), 
                this.Direction = 2);
            }, t.prototype.downMove = function() {
                3 != this.Direction && (a.default.Instance.play_effect("move"), this.SnakeMgr.dowMove(), 
                this.Direction = 4);
            }, t.prototype.upMove = function() {
                4 != this.Direction && (a.default.Instance.play_effect("move"), this.SnakeMgr.upMove(), 
                this.Direction = 3);
            }, t.prototype.direction = function(e, t) {
                Math.abs(e.x - t.x) > Math.abs(e.y - t.y) ? e.x > t.x ? this.SnakeMgr.leftMove() : this.SnakeMgr.rightMove() : e.y > t.y ? this.SnakeMgr.dowMove() : this.SnakeMgr.upMove();
            }, t.prototype._calculationDis = function(e, t) {
                return e.sub(t).mag();
            }, t.prototype.initData = function() {
                for (var e = 0; e < this.view.Table.childrenCount; e++) {
                    var t = this.view.Table.children[e];
                    this.latticeArr[e] = [];
                    for (var n = 0; n < t.childrenCount; n++) {
                        this.latticeArr[e][n] = t.children[n];
                    }
                }
                var o = this.latticeArr[this.targetPosX][this.targetPosY];
                if (o.active = !0, o.opacity = 0, this.view.target.setPosition(o.getPosition().x + 1, o.getPosition().y + 2), 
                -1 != this.appleX) {
                    var i = this.latticeArr[this.appleX][this.appleY];
                    i.active = !0, i.opacity = 0, this.view.apple.setPosition(i.getPosition());
                }
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this.showTips);
            }, __decorate([ u ], t.prototype, "targetPosX", void 0), __decorate([ u ], t.prototype, "targetPosY", void 0), 
            __decorate([ u ], t.prototype, "appleX", void 0), __decorate([ u ], t.prototype, "appleY", void 0), 
            __decorate([ d ], t);
        }(r.UICtrl);
        n.default = h, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "./SnakeMgr": "SnakeMgr"
    } ],
    SnakeMgr: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a35d6+FT2NARr1SgBAiwNfk", "SnakeMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("../../Utils/Utils"), c = e("./SnakeLeve"), l = e("./SnakeNode"), d = cc._decorator, u = d.ccclass, h = d.property, f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.eatPic = null, t.idePic = null, t.GameLogic = null, t.SnakeArr = [], t.isWin = !1, 
                t.isDie = !1, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                this.GameLogic = this.node.parent.getComponent(c.default);
            }, t.prototype.init = function() {
                var e = this;
                this.node.children.forEach(function(t) {
                    var n = t.getComponent(l.default);
                    n.setArr(e.GameLogic.latticeArr), n.move(), e.SnakeArr.push(n);
                });
            }, t.prototype.leftMove = function() {
                this.moveCheck(0, -1), this.SnakeArr[0].node.angle = 0, this.SnakeArr[0].node.scaleX = -1;
            }, t.prototype.rightMove = function() {
                this.moveCheck(0, 1), this.SnakeArr[0].node.angle = 0, this.SnakeArr[0].node.scaleX = 1;
            }, t.prototype.upMove = function() {
                this.moveCheck(1, 0), this.SnakeArr[0].node.angle = 90, this.SnakeArr[0].node.scaleX = 1;
            }, t.prototype.dowMove = function() {
                this.moveCheck(-1, 0), this.SnakeArr[0].node.angle = -90, this.SnakeArr[0].node.scaleX = 1;
            }, t.prototype.moveCheck = function(e, t) {
                var n = this;
                if (this.SnakeArr[0].x + e != this.GameLogic.targetPosX || this.SnakeArr[0].y + t != this.GameLogic.targetPosY) {
                    if (this.SnakeArr[0].x + e == this.GameLogic.appleX && this.SnakeArr[0].y + t == this.GameLogic.appleY) {
                        this.GameLogic.node.getChildByName("apple").active = !1, a.default.Instance.play_effect("snakeeat");
                        var o = r.default.Instance.show_ui("Snake", "Body", this.node).getComponent(l.default), i = this.SnakeArr[this.SnakeArr.length - 1];
                        o.node.setPosition(i.node.getPosition()), this.GameLogic.latticeArr[this.GameLogic.appleX][this.GameLogic.appleY].active = !1, 
                        o.setArr(this.GameLogic.latticeArr), this.SnakeArr.push(o), this.GameLogic.appleX = -1, 
                        this.GameLogic.appleY = -1;
                    }
                    this.SnakeArr[0].x + e != -1 && this.SnakeArr[0].y + t != -1 && this.SnakeArr[0].x + e <= this.GameLogic.latticeArr.length - 1 && this.SnakeArr[0].y + t <= this.GameLogic.latticeArr[this.SnakeArr[0].x + e].length - 1 && !this.GameLogic.latticeArr[this.SnakeArr[0].x + e][this.SnakeArr[0].y + t].active && this.checkBodyPos(this.SnakeArr[0].x + e, this.SnakeArr[0].y + t) && this.move(e, t);
                } else {
                    for (var s = this.node.parent.getChildByName("target").x, c = this.node.parent.getChildByName("target").y, d = (cc.v3(this.SnakeArr[0].x + e, this.SnakeArr[0].y + t), 
                    function(e) {
                        var t = u.SnakeArr[e], o = (t.x, t.y, .5 * e + .5), i = .3 * e + .3;
                        cc.tween(u.SnakeArr[e].node).to(o, {
                            scale: 0
                        }).call(function() {
                            n.SnakeArr[e].node.active = !1;
                        }).start(), cc.tween(u.SnakeArr[e].node).to(i, {
                            x: s,
                            y: c
                        }).call(function() {}).start();
                    }), u = this, h = 0; h < this.SnakeArr.length; h++) {
                        d(h);
                    }
                    this.isWin || (this.isWin = !0, a.default.Instance.play_effect("HouHou"), this.scheduleOnce(function() {
                        r.default.Instance.show_ui("Pop", "Success");
                    }, .5 * (this.SnakeArr.length + 1)));
                }
            }, t.prototype.checkBodyPos = function(e, t) {
                for (var n = 1; n < this.SnakeArr.length; n++) {
                    var o = this.SnakeArr[n];
                    if (o.x == e && o.y == t) return !1;
                }
                return !0;
            }, t.prototype.move = function(e, t) {
                for (var n = 0, o = 0, i = 0; i < this.SnakeArr.length; i++) {
                    var a = this.SnakeArr[i], r = a.x, s = a.y;
                    0 == i ? (a.x += e, a.y += t, a.move()) : (a.x = n, a.y = o, a.move()), n = r, o = s;
                }
                this.SnakeArr[0].x + e == this.GameLogic.appleX && this.SnakeArr[0].y + t == this.GameLogic.appleY ? this.SnakeArr[0].getComponent(cc.Sprite).spriteFrame = this.eatPic : this.SnakeArr[0].getComponent(cc.Sprite).spriteFrame = this.idePic, 
                this.checkDrop();
            }, t.prototype.checkDrop = function() {
                for (var e = 0; e < this.SnakeArr.length; e++) {
                    if ((n = this.SnakeArr[e]).x - 1 == -1) return void (this.isDie || (this.isDie = !0, 
                    cc.tween(this.node).by(1.5, {
                        position: cc.v3(this.node.x, -1e3)
                    }).start(), a.default.Instance.play_effect("tan2"), cc.director.getScheduler().schedule(function() {
                        s.Utils.showError(this.node.parent), a.default.Instance.play_effect("cuowu"), this.scheduleOnce(function() {
                            i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                        }, 1);
                    }, this, 1, 0, 0, !1)));
                    if (this.GameLogic.latticeArr[n.x - 1][n.y].active) return;
                }
                for (var t = 0; t < this.SnakeArr.length; t++) {
                    var n;
                    (n = this.SnakeArr[t]).x -= 1, n.moveDrop();
                }
                this.checkDrop(), a.default.Instance.play_effect("fall1");
            }, __decorate([ h(cc.SpriteFrame) ], t.prototype, "eatPic", void 0), __decorate([ h(cc.SpriteFrame) ], t.prototype, "idePic", void 0), 
            __decorate([ u ], t);
        }(cc.Component);
        n.default = f, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils",
        "./SnakeLeve": "SnakeLeve",
        "./SnakeNode": "SnakeNode"
    } ],
    SnakeNode: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "51888OiumtLh4L7ByadFPde", "SnakeNode"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = o.property, r = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.latticeArr = [], t.x = 0, t.y = 0, t;
            }
            return __extends(t, e), t.prototype.setArr = function(e) {
                this.latticeArr = e;
            }, t.prototype.move = function() {
                this.node.setPosition(this.latticeArr[this.x][this.y].getPosition());
            }, t.prototype.moveDrop = function() {
                cc.tween(this.node).to(.2, {
                    position: cc.v3(this.latticeArr[this.x][this.y].getPosition())
                }).start();
            }, __decorate([ a ], t.prototype, "x", void 0), __decorate([ a ], t.prototype, "y", void 0), 
            __decorate([ i ], t);
        }(cc.Component);
        n.default = r, cc._RF.pop();
    }, {} ],
    SoldierLeve: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c3a155t4o9G5agRFDv71OrF", "SoldierLeve"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("../../Managers/UIMgr"), s = e("../../Utils/Utils"), c = e("./SoldierPlayer"), l = e("./SoldierTable"), d = cc._decorator, u = d.ccclass, h = (d.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.lock = !1, t.nowLine = null, t.from = null, t.target = null, t.speedAr = [], 
                t.fromSpeedAr = [], t.nowPos = null, t.playerDragon = null, t.isSheng = !1, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                var e = this;
                i.default.Instance.add_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips), 
                this.playerDragon = this.view.player.children[0].getComponent(dragonBones.ArmatureDisplay), 
                this.playerDragon.addEventListener(dragonBones.EventObject.COMPLETE, this.OnCallAnimationPlayComplete, this), 
                this.view.bg.width = 2e3, this.nowPos = this.view["Table/TableOne"], this.node.on(cc.Node.EventType.TOUCH_START, function(t) {
                    if (!e.lock) {
                        var n = e.node.convertToNodeSpaceAR(t.getLocation());
                        e.view.tool.setPosition(n);
                    }
                }, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    if (!e.lock) {
                        var n = e.node.convertToNodeSpaceAR(t.getLocation());
                        if (e.view.tool.setPosition(n), null != e.nowLine) {
                            var o = e._calculationDis(e.nowLine.getPosition(), n), i = 180 * Math.atan2(e.nowLine.y - n.y, e.nowLine.x - n.x) / Math.PI;
                            e.nowLine.angle = i - 90, e.nowLine.height = o;
                        }
                    }
                }, this), this.node.on(cc.Node.EventType.TOUCH_END, function() {
                    e.lock || (e.view.tool.x = -1500, e.nowLine && (e.nowLine.destroy(), e.nowLine = null), 
                    e.from = null, e.speedAr.length >= 1 && e._playerMove(), e.target = null);
                }, this), this.view.bg.height = 1040, this.node.getChildByName("txt").getComponent(cc.Label).string = "抓住所有坏人";
            }, t.prototype.OnCallAnimationPlayComplete = function(e) {
                e.type === dragonBones.EventObject.COMPLETE && ("die" === this.playerDragon.animationName ? this.view.player.active = !1 : this._playAnim("stand")), 
                this.view["player/bianzige_ske/shouShang"].active = !1;
            }, t.prototype._playerMove = function() {
                var e = this;
                this.lock = !0, this.nowPos = null;
                var t = this._calculationDis(this.view.player.getPosition(), this.speedAr[0].getPosition()) / 280;
                this.view.player.getPosition().x < this.speedAr[0].getPosition().x ? this.view["player/bianzige_ske"].scaleX = 1 : this.view["player/bianzige_ske"].scaleX = -1, 
                this.fromSpeedAr[0].getChildByName("x").active = !0, this._playAnim("walk"), cc.tween(this.view.player).to(t, {
                    position: cc.v2(this.speedAr[0].getPosition().x - 40, this.speedAr[0].getPosition().y)
                }).call(function() {
                    e.view["player/bianzige_ske"].scaleX = 1, e._playAnim("attack", e.speedAr[0].getChildByName("monster")), 
                    a.default.Instance.play_effect("bianzi");
                }).delay(.5).call(function() {
                    if (e.view.player.getComponent(c.default).monster > e.speedAr[0].getComponent(l.default).monster) {
                        if (e.speedAr[0].getChildByName("monster").getChildByName("shouShang").active = !1, 
                        e.speedAr[0].getChildByName("monster").getComponent(dragonBones.ArmatureDisplay).playAnimation("die", 1), 
                        cc.tween(e.speedAr[0].getChildByName("monster")).delay(.5).call(function() {
                            e.speedAr[0].getChildByName("monster").active = !1, e.speedAr[0].getChildByName("txt").active = !1;
                        }).start(), e.view.player.getComponent(c.default).monster += e.speedAr[0].getComponent(l.default).monster, 
                        e.view.player.getComponent(c.default).init(), e.view.player.getComponent(c.default).monster >= 50 && !e.isSheng) {
                            e.isSheng = !0, a.default.Instance.play_effect("shengji");
                            var t = r.default.Instance.show_ui("Soldier", "shengji", e.view.player);
                            t.getComponent(dragonBones.ArmatureDisplay).playAnimation("shengji", 1), t.y += 50, 
                            cc.tween(e.view.player).to(.3, {
                                scale: 1.4
                            }).to(.2, {
                                scale: 1.3
                            }).start();
                        }
                        e.speedAr[0].getComponent(l.default).monster = 0;
                    } else e.speedAr[0].getChildByName("monster").getChildByName("shouShang").active = !1, 
                    e.speedAr[0].getChildByName("monster").getComponent(dragonBones.ArmatureDisplay).playAnimation("stand", -1), 
                    e._playAnim("die"), a.default.Instance.play_effect("cuowu"), s.Utils.showError(e.node), 
                    e.scheduleOnce(function() {
                        i.default.Instance.dispatch_event(o.GConfiguration.UpdateGame, "");
                    }, 2);
                }).delay(1).to(.3, {
                    position: cc.v2(this.speedAr[0].getPosition())
                }).call(function() {
                    if (1 == e.speedAr.length && (e.nowPos = e.speedAr[0]), e.speedAr.shift(), e.fromSpeedAr.shift(), 
                    e.speedAr.length >= 1) e._playerMove(); else {
                        e.lock = !1;
                        for (var t = 0; t < e.view.Table.childrenCount; t++) {
                            if (e.view.Table.children[t].getComponent(l.default).monster > 0) return;
                        }
                        e.lock = !0, e._playAnim("win"), cc.tween(e.node).delay(1).call(function() {
                            r.default.Instance.show_ui("Pop", "Success");
                        }).start();
                    }
                }).start();
            }, t.prototype._playAnim = function(e, t) {
                this.playerDragon.playAnimation(e, "walk" == e || "stand" == e || "win" == e ? 0 : 1), 
                t && (t.getComponent(dragonBones.ArmatureDisplay).playAnimation("attack", 1), t.getChildByName("shouShang").active = !0, 
                this.view["player/bianzige_ske/shouShang"].active = !0, this.view["player/bianzige_ske/shouShang"].getComponent(dragonBones.ArmatureDisplay).playAnimation("daji", 2));
            }, t.prototype._calculationDis = function(e, t) {
                return e.sub(t).mag();
            }, t.prototype.createLine = function() {
                this.from.getComponent(l.default).trigger = !0;
                var e = r.default.Instance.show_ui("Soldier", "connect", this.view.line);
                e.anchorY = 1, e.setPosition(this.from.getPosition());
                var t = this._calculationDis(this.from.getPosition(), this.target.getPosition()), n = 180 * Math.atan2(this.from.y - this.target.y, this.from.x - this.target.x) / Math.PI;
                e.angle = n - 90, e.height = t;
            }, t.prototype.startDrawLine = function(e) {
                var t = r.default.Instance.show_ui("Soldier", "connect", this.view.line);
                t.anchorY = 1, t.setPosition(e.getPosition()), this.nowLine = t;
            }, t.prototype._showTips = function() {
                cc.tween(this.view.tips).set({
                    active: !0
                }).to(.5, {
                    opacity: 100
                }).to(.5, {
                    opacity: 255
                }).to(.5, {
                    opacity: 100
                }).to(.5, {
                    opacity: 255
                }).start();
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ShowGameTips, this, this._showTips);
            }, __decorate([ u ], t);
        }(r.UICtrl));
        n.default = h, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Utils/Utils": "Utils",
        "./SoldierPlayer": "SoldierPlayer",
        "./SoldierTable": "SoldierTable"
    } ],
    SoldierPlayer: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "42e2djoIb5I1YFI5ZjZvVbY", "SoldierPlayer"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/UIMgr"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.monster = 15, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init();
            }, t.prototype.init = function() {
                this.view.txt.getComponent(cc.Label).string = this.monster;
            }, __decorate([ r ], t.prototype, "monster", void 0), __decorate([ a ], t);
        }(o.UICtrl);
        n.default = s, cc._RF.pop();
    }, {
        "../../Managers/UIMgr": "UIMgr"
    } ],
    SoldierTable: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "129cbSd7dpEAbFvsh+Cnf1e", "SoldierTable"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/UIMgr"), i = e("./SoldierLeve"), a = cc._decorator, r = a.ccclass, s = a.property, c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.monster = 0, t.id = 0, t.trigger = !1, t.Example = null, t;
            }
            var n;
            return __extends(t, e), n = t, t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
            }, t.prototype.start = function() {
                this.Example = this.node.parent.parent.getComponent(i.default), this.monster = this.monster ? this.monster : "", 
                this.view.txt.getComponent(cc.Label).string = this.monster;
            }, t.prototype.onCollisionEnter = function() {
                if (!this.trigger && null != this.Example.nowPos) {
                    if (null == this.Example.from) {
                        if (this.Example.speedAr.length >= 1) this.Example.from = this.node; else {
                            if (this.Example.nowPos.getComponent(n).id != this.id) return;
                            this.Example.from = this.node;
                        }
                        this.Example.startDrawLine(this.node);
                    } else this.Example.from.getComponent(n).id != this.id && (this.Example.target = this.node, 
                    this.Example.speedAr.push(this.node), this.Example.fromSpeedAr.push(this.Example.from), 
                    this.Example.createLine(), this.Example.nowLine && this.Example.nowLine.destroy(), 
                    this.Example.nowLine = null, this.Example.from = this.node, this.Example.target = null, 
                    this.Example.startDrawLine(this.node));
                    cc.tween(this.node).to(.2, {
                        scale: 1.2
                    }).to(.2, {
                        scale: 1
                    }).start();
                }
            }, __decorate([ s ], t.prototype, "monster", void 0), __decorate([ s ], t.prototype, "id", void 0), 
            n = __decorate([ r ], t);
        }(o.UICtrl);
        n.default = c, cc._RF.pop();
    }, {
        "../../Managers/UIMgr": "UIMgr",
        "./SoldierLeve": "SoldierLeve"
    } ],
    SoundMgr: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e56b0Tore9O6pTEg3DgnLQC", "SoundMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ResMgr"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.music_mute = 0, t.effect_mute = 0, t.effect_volume = 1, t.music_volume = 1, 
                t.music_as = null, t.effect_as = [], t.cur_as = 0, t;
            }
            var n;
            return __extends(t, e), n = t, t.prototype.onLoad = function() {
                if (null === n.Instance) {
                    n.Instance = this, this.music_as = this.node.addComponent(cc.AudioSource), this.music_as.volume = this.music_volume, 
                    1 === this.music_mute && (this.music_as.volume = 0);
                    for (var e = 0; e < 8; e++) {
                        var t = this.node.addComponent(cc.AudioSource);
                        this.effect_as.push(t), t.volume = this.effect_volume, 1 === this.effect_mute && (t.volume = 0);
                    }
                    this.cur_as = 0;
                } else this.destroy();
            }, t.prototype.get_music_volume = function() {
                return this.music_volume;
            }, t.prototype.set_music_volume = function(e) {
                this.music_volume = e, this.music_as.volume = e, cc.sys.localStorage.setItem("music_volume", e);
            }, t.prototype.get_music_mute = function() {
                return this.music_mute;
            }, t.prototype.set_music_mute = function(e) {
                var t = e ? 1 : 0;
                this.music_mute != t && (this.music_mute = t, 1 === this.music_mute ? this.music_as.volume = 0 : this.music_as.volume = this.music_volume, 
                cc.sys.localStorage.setItem("music_mute", t));
            }, t.prototype.get_effect_volume = function() {
                return this.effect_volume;
            }, t.prototype.set_effect_volume = function(e) {
                for (var t = 0; t < this.effect_as.length; t++) {
                    this.effect_as[t].volume = e;
                }
                this.effect_volume = e, cc.sys.localStorage.setItem("effect_volume", e);
            }, t.prototype.get_effect_mute = function() {
                return this.effect_mute;
            }, t.prototype.set_effect_mute = function(e) {
                var t = e ? 1 : 0;
                if (this.effect_mute != t) {
                    for (var n = 0; n < this.effect_as.length; n++) {
                        1 === this.effect_mute ? this.effect_as[n].volume = 0 : this.effect_as[n].volume = this.effect_volume;
                    }
                    this.effect_mute = t, cc.sys.localStorage.setItem("effect_mute", t);
                }
            }, t.prototype.play_music = function(e, t) {
                t = !!t, this.music_as.loop = t, this.music_as.clip = o.default.Instance.getAsset("Sounds", e), 
                this.music_as.clip ? this.music_as.play() : cc.error("music audio clip null: ", e);
            }, t.prototype.stop_music = function() {
                this.music_as.stop();
            }, t.prototype.play_effect = function(e) {
                var t = this.effect_as[this.cur_as];
                this.cur_as++, this.cur_as >= 8 && (this.cur_as = 0), t.clip = o.default.Instance.getAsset("Sounds", e), 
                t.clip ? t.play() : cc.error("effect audio clip null: ", e);
            }, t.prototype.play_needStopEffect = function(e) {
                this._waitStopSound = this.effect_as[this.cur_as], this.cur_as++, this.cur_as >= 8 && (this.cur_as = 0), 
                this._waitStopSound.clip = o.default.Instance.getAsset("Sounds", e), this._waitStopSound.clip ? this._waitStopSound.play() : cc.error("effect audio clip null: ", e);
            }, t.prototype.stop_effect = function() {
                this._waitStopSound.stop();
            }, t.Instance = null, n = __decorate([ a ], t);
        }(cc.Component));
        n.default = r, cc._RF.pop();
    }, {
        "./ResMgr": "ResMgr"
    } ],
    Success: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "89c5cTX5KtD6qMb6fZ6awqz", "Success"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/GameMgr"), r = e("../../Managers/SoundMgr"), s = e("../../Managers/UIMgr"), c = e("../../Managers/UserMgr"), l = e("../Ad/AdBase/VivoAdBase"), d = e("../Ad/AdComponent"), u = e("../Ad/AdData"), h = e("./GameView"), f = cc._decorator, p = f.ccclass, g = (f.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.list = [ [ -81.956, 65.681 ], [ 21.146, 147.077 ], [ 116.108, 250.179 ], [ 265.334, 147.077 ], [ -68.391, 217.62 ], [ -35.832, -129.671 ], [ -157.926, -40.135 ], [ 311.46, -48.274 ] ], 
                t.list2 = [ [ -306.797, -116.277 ], [ -205.712, -70.329 ], [ -109.221, -15.191 ], [ 26.326, -6.001 ], [ 47.002, -118.574 ], [ -290.715, -281.689 ], [ -251.66, 62.921 ], [ 95.247, -256.418 ] ], 
                t;
            }
            return __extends(t, e), t.prototype.start = function() {
                var e = this;
                d.AdComponent.onStopRecord(this, null), r.default.Instance.play_effect("victory1");
                var t = cc.find("Canvas/GameView").getComponent(h.default);
                if (t && (t.isMaxleve ? this.node.getChildByName("img_tiaofu").getChildByName("btn_tiaoguo").getChildByName("max").active = !0 : this.node.getChildByName("img_tiaofu").getChildByName("btn_tiaoguo").getChildByName("img_xiayiguan").active = !0), 
                this.scheduleOnce(function() {
                    e.node.getChildByName("img_tiaofu").active = !0;
                }, 1), "tt" == u.AdData.platform || "ks" == u.AdData.platform ? this.node.getChildByName("img_tiaofu").getChildByName("btn_tishi").active = !0 : this.node.getChildByName("img_tiaofu").getChildByName("btn_tishi").active = !1, 
                "wx" == u.AdData.platform) switch (GA.sentLog("GameEnd"), d.AdComponent.onShowBanner(), 
                d.AdComponent.onShowInterstitialAd(), d.AdComponent.onShowGridAd(200, 350), d.AdComponent.onShowManyGridAd(587), 
                a.default.Instance.GameType) {
                  case a.GameType.ERASE:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.eraseLeve, {
                        mode: "擦除模式"
                    });
                    break;

                  case a.GameType.MOVE:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.moveLeve, {
                        mode: "移动模式"
                    });
                    break;

                  case a.GameType.TOHIT:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.toHitLeve, {
                        mode: "烧脑碰撞"
                    });
                    break;

                  case a.GameType.SOLDIER:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.soldierLeve, {
                        mode: "数字小兵"
                    });
                    break;

                  case a.GameType.ROUND:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.roundLeve, {
                        mode: "围捕行动"
                    });
                    break;

                  case a.GameType.RIVER:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.riverLeve, {
                        mode: "烧脑过河"
                    });
                    break;

                  case a.GameType.Snake:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.snakeLeve, {
                        mode: "移动贪吃蛇"
                    });
                    break;

                  case a.GameType.Car:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.carLeve, {
                        mode: "划线停车"
                    });
                    break;

                  case a.GameType.Dialect:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.dialectLeve, {
                        mode: "方言过河"
                    });
                    break;

                  case a.GameType.LineSoldier:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.LineSoldierLeve, {
                        mode: "画线冲击"
                    });
                    break;

                  case a.GameType.Circular:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.CircularLeve, {
                        mode: "烧脑划线"
                    });
                    break;

                  case a.GameType.Color:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.ColorLeve, {
                        mode: "相邻不同色"
                    });
                    break;

                  case a.GameType.Near:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.NearLeve, {
                        mode: "烧脑相邻"
                    });
                    break;

                  case a.GameType.Warp:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.WarpLeve, {
                        mode: "帮他脱险"
                    });
                    break;

                  case a.GameType.Rescue:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.RescueLeve, {
                        mode: "画线营救"
                    });
                    break;

                  case a.GameType.WarpMan:
                    GA.sentLog("GameSuccess", c.UserMgr.instance().userInfo.WarpManLeve, {
                        mode: "保护男生"
                    });
                } else "vivo" == u.AdData.platform ? (d.AdComponent.onShowInterstitialAd(50), this.node.getChildByName("img_tiaofu").getChildByName("btn_fanhui").active = !1) : "oppo" == u.AdData.platform ? (d.AdComponent.onShowBanner(), 
                this.node.getChildByName("img_tiaofu").getChildByName("btn_fanhui").active = !1) : "ks" == u.AdData.platform ? this.scheduleOnce(function() {
                    d.AdComponent.onShowInterstitialAd();
                }, 1) : "Android" == u.AdData.platform && d.AdComponent.onShowNativeAd();
            }, t.prototype.nextLeve = function() {
                r.default.Instance.play_effect("click1"), c.UserMgr.instance().userInfo.energy < 1 ? s.default.Instance.show_ui("Pop", "Tips") : (i.default.Instance.dispatch_event(o.GConfiguration.NextLevel, ""), 
                this.node.destroy());
            }, t.prototype.fanhui = function() {
                r.default.Instance.play_effect("click1"), s.default.Instance.show_ui("Scene", "HomeView"), 
                s.default.Instance.remove_ui("GameView"), this.node.destroy();
            }, t.prototype.getEnergy = function() {
                r.default.Instance.play_effect("click1"), d.AdComponent.onShowRewardedAd(this, this.onGetEnergySuccess, "成功界面获取体力", "结算界面");
            }, t.prototype.onGetEnergySuccess = function(e) {
                e && c.UserMgr.instance().userInfo.energy++;
            }, t.prototype.onBtnClose = function(e) {
                r.default.Instance.play_effect("click1"), d.AdComponent.onShareRecord(this, function() {
                    e.target.active = !1;
                });
            }, t.prototype.onDianZan = function() {
                r.default.Instance.play_effect("click1");
                for (var e = function e(_e6) {
                    var n = cc.instantiate(t.node.getChildByName("img_hong"));
                    t.node.addChild(n), n.setPosition(t.node.getChildByName("img_tiaofu").getChildByName("img_hong").getPosition()), 
                    cc.tween(n).set({
                        active: !0
                    }).to(.4, {
                        position: cc.v3(t.list[_e6][0], t.list[_e6][1])
                    }).to(.5, {
                        scale: .4,
                        opacity: 100
                    }).call(function() {
                        n.destroy();
                    }).start();
                }, t = this, n = 0; n < 8; n++) {
                    e(n);
                }
            }, t.prototype.onDianZanToo = function() {
                r.default.Instance.play_effect("click1");
                for (var e = function e(_e7) {
                    var n = cc.instantiate(t.node.getChildByName("img_dao"));
                    t.node.getChildByName("img_tiaofu").addChild(n), n.setPosition(t.node.getChildByName("img_tiaofu").getChildByName("img_lan").getPosition()), 
                    cc.tween(n).set({
                        active: !0
                    }).to(.4, {
                        position: cc.v3(t.list2[_e7][0], t.list2[_e7][1])
                    }).to(.5, {
                        scale: .4,
                        opacity: 100
                    }).call(function() {
                        n.destroy();
                    }).start();
                }, t = this, n = 0; n < 8; n++) {
                    e(n);
                }
            }, t.prototype.onDestroy = function() {
                d.AdComponent.onHideGridAd(), d.AdComponent.onHideManyGridAd(), "vivo" == u.AdData.platform ? l.VivoAdBase.onCloseInterstitiAd() : "oppo" == u.AdData.platform && d.AdComponent.onHideBanner();
            }, __decorate([ p ], t);
        }(cc.Component));
        n.default = g, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/GameMgr": "GameMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../Ad/AdBase/VivoAdBase": "VivoAdBase",
        "../Ad/AdComponent": "AdComponent",
        "../Ad/AdData": "AdData",
        "./GameView": "GameView"
    } ],
    TTAdBase: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6fc68o4PhNIs4OfziEAKl/k", "TTAdBase"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.TTADBase = void 0;
        var o = e("../AdData"), i = function() {
            function e() {
                this.videocallBackFunc = null, this.videocallBackcallder = null, this._onLoadVideo = null, 
                this._onErrorVideo = null, this.existVideoAd = !1, this.isRecording = !1, this.gameRecordManager = null, 
                this.recordDataexit = !1, this.recordDataurl = "", this.sharevideoTitle = "姐脑洞大大", 
                this.m_videoTopics = [ "抖音小游戏#姐脑洞大大" ], this.isPause = !1;
            }
            return Object.defineProperty(e, "instance", {
                get: function get() {
                    return null == e.minstance && (e.minstance = new e()), e.minstance;
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.showVideoAd = function(e, t) {
                this.videocallBackFunc = t, this.videocallBackcallder = e, this.getVideoAd();
                var n = this._videoAd;
                if (!n) return t.call(e, !1), console.log("return !videoAd"), void console.log("没有可用视频");
                console.log("showVideoAd tt"), n.show().then(function() {
                    console.log("showVideoAd start");
                }).catch(function(n) {
                    (n.errorCode = 50002) ? console.log("没有可用的广告") : console.log("视频显示失败"), t.call(e, !1), 
                    console.log(n);
                });
                var o = function o(i) {
                    console.log("viedoEnd call back");
                    var a = !!(i && i.isEnded || void 0 === i);
                    t.call(e, a), n.offClose(o);
                };
                n.onClose(o);
            }, e.prototype.getVideoAd = function() {
                if (!window.tt.createRewardedVideoAd) return console.log("createRewardedVideoAd tt == false"), 
                void (this.existVideoAd = !1);
                var e = window.tt.createRewardedVideoAd({
                    adUnitId: "8bfe50gnajrkgr87jp"
                });
                e && (e.offLoad(this._onLoadVideo), e.offError(this._onErrorVideo)), e.onLoad(this._onLoadVideo), 
                e.onError(this._onErrorVideo), this._videoAd = e;
            }, e.prototype.recordStart = function() {
                "tt" == o.AdData.platform && (this.isRecording = !0, this.lp());
            }, e.prototype.lp = function() {
                var e = this;
                console.log("录屏开始");
                try {
                    window.tt.getSystemInfo({
                        success: function success(t) {
                            var n = t.screenWidth, o = t.screenHeight;
                            e.gameRecordManager = window.tt.getGameRecorderManager();
                            var i = e.gameRecordManager.getMark(), a = (n - i.markWidth) / 2, r = (o - i.markHeight) / 2;
                            e.gameRecordManager.onStart(function(e) {
                                console.log("录屏开始-------res=" + e);
                            }), e.gameRecordManager.start({
                                duration: 16,
                                isMarkOpen: !0,
                                locLeft: a,
                                locTop: r
                            });
                        }
                    });
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    console.log("获取系统信息失败: ", t);
                }
            }, e.prototype.recordStop = function(e, t) {
                var n = this;
                if ("tt" == o.AdData.platform && 0 != this.isRecording) {
                    this.isRecording = !1;
                    var i = [], a = this;
                    this.gameRecordManager && (this.gameRecordManager.onStop(function(o) {
                        n.gameRecordManager.recordClip({
                            timeRange: [ 15, 0 ],
                            success: function success(e) {
                                i.push(e.index), a.gameRecordManager.stop();
                            }
                        }), console.log("onStop", o.videoPath), n.recordDataexit = !0, n.recordDataurl = o.videoPath, 
                        n.gameRecordManager = null, t && t.call(e, !0);
                    }), console.log("录屏完成了" + this.recordDataurl), this.gameRecordManager.stop());
                }
            }, e.prototype.shareRecord = function(e, t) {
                if ("" == this.recordDataurl) return console.log("this.recordDataurl", this.recordDataurl), 
                void window.tt.showToast({
                    title: "录制失败!请重新录制!"
                });
                if ("tt" == o.AdData.platform) {
                    var n = {
                        videoPath: this.recordDataurl,
                        videoTopics: this.m_videoTopics,
                        hashtag_list: this.m_videoTopics
                    };
                    window.tt.shareAppMessage({
                        channel: "video",
                        title: this.sharevideoTitle,
                        extra: n,
                        success: function success() {
                            console.log("分享视频成功"), t.call(e, !0);
                        },
                        fail: function fail(n) {
                            var o = "";
                            o = n.errMsg, n.errMsg && -1 != o.indexOf("short") && (console.log("push toas vide short"), 
                            window.tt.showToast({
                                title: "录屏时间低于3秒,请重新录制~"
                            })), t.call(e, !1);
                        }
                    });
                }
            }, e.prototype.recordPause = function() {
                "tt" == o.AdData.platform && (this.isRecording && null != this.gameRecordManager ? (this.gameRecordManager.pause(), 
                this.isPause = !0) : console.log("无法暂停录屏"));
            }, e.prototype.recordResume = function() {
                "tt" == o.AdData.platform && (this.isPause && this.gameRecordManager ? (this.gameRecordManager.resume(), 
                this.isPause = !1) : console.log(""));
            }, e;
        }();
        n.TTADBase = i, cc._RF.pop();
    }, {
        "../AdData": "AdData"
    } ],
    TargetRotation: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "70366ZItJdBg4fLB+iLeWQf", "TargetRotation"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.schedule(this.RatationCallbacks, .05);
            }, t.prototype.RatationCallbacks = function() {
                this.node.angle -= 5;
            }, __decorate([ i ], t);
        }(cc.Component));
        n.default = a, cc._RF.pop();
    }, {} ],
    Tips: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "483d7vQonpEV5AXlnpWQ7LU", "Tips"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Managers/SoundMgr"), i = e("../../Managers/UIMgr"), a = e("../../Managers/UserMgr"), r = e("../../Utils/Utils"), s = e("../Ad/AdComponent"), c = e("../Ad/AdData"), l = cc._decorator, d = l.ccclass, u = (l.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this), r.Utils.popWindow(this.node);
            }, t.prototype.start = function() {
                "wx" == c.AdData.platform ? (s.AdComponent.onShowBanner(), s.AdComponent.onShowGridAd(200, 350), 
                s.AdComponent.onShowManyGridAd(587)) : "vivo" == c.AdData.platform ? s.AdComponent.onShowBanner() : "oppo" == c.AdData.platform ? s.AdComponent.onShowBanner() : "ks" == c.AdData.platform ? s.AdComponent.onShowInterstitialAd() : "Android" == c.AdData.platform && (0 == a.UserMgr._instance.userInfo.AndroidFirstEnergy && (this.node.getChildByName("img_kuang").getChildByName("btn_lan").getChildByName("AdIcon").active = !1, 
                this.node.getChildByName("img_kuang").getChildByName("btn_lan").getChildByName("img_mianfeihuode").active = !1, 
                this.node.getChildByName("img_kuang").getChildByName("btn_lan").getChildByName("And").active = !0), 
                s.AdComponent.onShowNativeAd()), this.node.getChildByName("img_kuang").getChildByName("numTex").getComponent(cc.Label).string = "X " + a.UserMgr._instance.userInfo.addEnergy;
            }, t.prototype.add = function() {
                if (o.default.Instance.play_effect("click1"), "Android" == c.AdData.platform && 0 == a.UserMgr._instance.userInfo.AndroidFirstEnergy) return a.UserMgr._instance.userInfo.AndroidFirstEnergy = 1, 
                void this.onAddVedioSuccess(!0);
                s.AdComponent.onShowRewardedAd(this, this.onAddVedioSuccess, "加号获取体力", "提示界面");
            }, t.prototype.onAddVedioSuccess = function(e) {
                e && (a.UserMgr.instance().userInfo.energy += a.UserMgr._instance.userInfo.addEnergy, 
                this.node.destroy());
            }, t.prototype.onBtnClose = function() {
                o.default.Instance.play_effect("click1"), this.node.destroy();
            }, t.prototype.onDestroy = function() {
                s.AdComponent.onHideGridAd(), s.AdComponent.onHideManyGridAd(), "vivo" == c.AdData.platform ? s.AdComponent.onHideBanner() : "oppo" == c.AdData.platform && s.AdComponent.onHideBanner();
            }, __decorate([ d ], t);
        }(i.UICtrl));
        n.default = u, cc._RF.pop();
    }, {
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../../Utils/Utils": "Utils",
        "../Ad/AdComponent": "AdComponent",
        "../Ad/AdData": "AdData"
    } ],
    ToHLv_10: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "31787R41gxEobBb3cpfrSzT", "ToHLv_10"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_11: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3c004px9BRDyryowiRCpyd5", "ToHLv_11"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_12: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3fb17dAJjdMVbCMyjjhGful", "ToHLv_12"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_13: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f36e54Vt29MQ5XTZbuLzpLu", "ToHLv_13"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_14: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "96df8XVHflLzbZ8VwgYWkn/", "ToHLv_14"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_15: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "76e50d5t8NIdrn51F6ctRPi", "ToHLv_15"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_16: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "731d7o0NfRJYr0ndN+G4jjL", "ToHLv_16"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_17: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "62b9fPiJrZML7/WVc+7K1UP", "ToHLv_17"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_18: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1374d/cRYJGzIKSZO9ErYsx", "ToHLv_18"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_19: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "476cac03v5AG7Le9P+oWv5L", "ToHLv_19"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_1: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "64deaC0vtdPpLu/8AQFbqBH", "ToHLv_1"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(3, 1);
            }, __decorate([ a ], t);
        }(o.default));
        n.default = r, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_20: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b7568TUcG1CjrLGbvOdOu3C", "ToHLv_20"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_2: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "33f5amyZcFLB5drO6wOnMS7", "ToHLv_2"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(3, 2);
            }, __decorate([ a ], t);
        }(o.default));
        n.default = r, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_3: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6ad8aP+cmxHdpBvFA957MNQ", "ToHLv_3"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(3, 2);
            }, __decorate([ a ], t);
        }(o.default));
        n.default = r, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_4: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bb24425mg9AwY7pw0T3lSX1", "ToHLv_4"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = (i.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(3, 1);
            }, __decorate([ a ], t);
        }(o.default));
        n.default = r, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_5: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ef6ccxl4QVJoYBUijBDvlwv", "ToHLv_5"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_6: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e9f15jslQJJMoT10jhbTmRh", "ToHLv_6"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_7: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9154aoV9GFAkKZF9s4dLYWz", "ToHLv_7"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_8: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "36476pZ8+ZDMa0WLWloWj5Z", "ToHLv_8"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHLv_9: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ac144MDXXFDLqucN5kBLqR4", "ToHLv_9"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ToHitBase"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.PorpNum = 0, t.Corpse = 0, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.init(this.PorpNum, this.Corpse);
            }, __decorate([ r ], t.prototype, "PorpNum", void 0), __decorate([ r ], t.prototype, "Corpse", void 0), 
            __decorate([ a ], t);
        }(o.default);
        n.default = s, cc._RF.pop();
    }, {
        "./ToHitBase": "ToHitBase"
    } ],
    ToHitBase: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "36d4ahjAolDDYAoAw/XXFoI", "ToHitBase"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("./Prop"), s = e("./PropNode"), c = cc._decorator, l = c.ccclass, d = (c.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.Prop = null, t.lock = !0, t.Cnum = 0, t.nowCnum = 0, t;
            }
            return __extends(t, e), t.prototype.initPhysics = function() {
                var e = this.node.getChildByName("bg").width, t = this.node.getChildByName("bg").height, n = new cc.Node();
                n.group = "Wall", n.addComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
                var o = function o(e, t, n, _o7, i) {
                    var a = e.addComponent(cc.PhysicsBoxCollider);
                    a.offset.x = t, a.offset.y = n + 102, a.size.width = _o7, a.size.height = i;
                    var r = e.addComponent(cc.BoxCollider);
                    r.offset.x = t, r.offset.y = n + 104, r.size.width = _o7, r.size.height = i;
                };
                o(n, 0, -t / 2, e, 1), o(n, 0, t / 2, e, 1), o(n, -e / 2, 0, 1, t), o(n, e / 2, 0, 1, t), 
                n.parent = this.node;
            }, t.prototype.start = function() {
                this.node.getChildByName("bg").getChildByName("dimian").opacity = 77;
            }, t.prototype.setProp = function(e) {
                this.Prop = a.default.Instance.show_ui("ToHit", "Prop", this.node).getComponent(r.default), 
                this.Prop.setNum(e);
            }, t.prototype.init = function(e, t) {
                i.default.Instance.add_event_listenner(o.GConfiguration.Corpse, this, this.Cnum_fun), 
                this.Cnum = t, this.setProp(e), this.initPhysics();
                var n = this.Prop.getPorp();
                this.node.getChildByName("propNode").children[0].getComponent(s.default).setPropSprite(n), 
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this), this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
            }, t.prototype.Cnum_fun = function() {
                this.nowCnum++, this.nowCnum >= this.Cnum && this.scheduleOnce(function() {
                    a.default.Instance.show_ui("Pop", "Success");
                }, 2.5);
            }, t.prototype.touch_move = function(e) {
                var t = e.touch.getLocation();
                t = this.node.convertToNodeSpaceAR(t), this.node.getChildByName("propNode").children[0].setPosition(t.x, this.node.getChildByName("propNode").children[0].y);
            }, t.prototype.touch_end = function() {
                var e = this, t = this.Prop.getPorp();
                if (-1 != t && this.lock) {
                    this.lock = !1, this.node.getChildByName("propNode").children[0].active = !1;
                    var n = a.default.Instance.show_ui("ToHit", "PropNode", this.node);
                    n.getComponent(s.default).setPropSprite(t), n.setPosition(this.node.getChildByName("propNode").children[0].getPosition()), 
                    n.active = !0, this.Prop.setProp(), -1 != (t = this.Prop.getPorp()) ? (this.node.getChildByName("propNode").children[0].getComponent(s.default).setPropSprite(t), 
                    this.scheduleOnce(function() {
                        e.node.getChildByName("propNode").children[0].active = !0, e.lock = !0;
                    }, .8)) : this.node.getChildByName("propNode").children[0].active = !1;
                }
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.Corpse, this, this.Cnum_fun);
            }, __decorate([ l ], t);
        }(cc.Component));
        n.default = d, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr",
        "./Prop": "Prop",
        "./PropNode": "PropNode"
    } ],
    UIAdapter: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5751dyvPmRKwrKFZ/sH+c4l", "UIAdapter"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../Managers/GameMgr"), i = cc._decorator, a = i.ccclass, r = i.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.is = "R", t;
            }
            return __extends(t, e), t.prototype.start = function() {
                console.log(o.default.Instance.kuan), "L" == this.is ? this.node.x = -cc.view.getVisibleSize().width / 2 + (-375 - this.node.x) : this.node.x = cc.view.getVisibleSize().width / 2 - (375 - this.node.x);
            }, t.prototype.check = function() {}, __decorate([ r ], t.prototype, "is", void 0), 
            __decorate([ a ], t);
        }(cc.Component);
        n.default = s, cc._RF.pop();
    }, {
        "../Managers/GameMgr": "GameMgr"
    } ],
    UIMgr: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "98c22AOEztEc7gkdzvbGRrU", "UIMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.UICtrl = void 0;
        var o = e("./ResMgr"), i = cc._decorator, a = (i.ccclass, i.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.view = {}, t;
            }
            return __extends(t, e), t.prototype.load_all_object = function(e, t) {
                for (var n = 0; n < e.childrenCount; n++) {
                    this.view[t + e.children[n].name] = e.children[n], this.load_all_object(e.children[n], t + e.children[n].name + "/");
                }
            }, t.prototype.onLoad = function() {
                this.view = {}, this.load_all_object(this.node, "");
            }, t.prototype.add_button_listen = function(e, t, n) {
                var o = this.view[e];
                o && o.getComponent(cc.Button) && o.on("click", n, t);
            }, t;
        }(cc.Component));
        n.UICtrl = a;
        var r = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.Canvas = null, t.uiMap = {}, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                null === t.Instance ? (t.Instance = this, this.Canvas = this.node.parent) : this.destroy();
            }, t.prototype.showLoading = function(e, t) {
                t || (t = this.Canvas);
                var n = o.default.Instance.resLoading, i = null;
                return n && (i = cc.instantiate(n), t.addChild(i), i.addComponent(e + "_Ctrl")), 
                this.uiMap[e] = i, i;
            }, t.prototype.show_ui = function(e, t, n) {
                n || (n = this.Canvas);
                var i = o.default.Instance.getAsset("GUI", "UIPrefabs/" + e + "/" + t), a = null;
                return i && (a = cc.instantiate(i), n.addChild(a)), this.uiMap[t] = a, a;
            }, t.prototype.remove_ui = function(e) {
                this.uiMap[e] && (this.uiMap[e].destroy(), this.uiMap[e] = null);
            }, t.prototype.clearAll = function() {
                for (var e in this.uiMap) {
                    this.uiMap[e] && (this.uiMap[e].destroy(), this.uiMap[e] = null);
                }
            }, t.Instance = null, t;
        }(cc.Component);
        n.default = r, cc._RF.pop();
    }, {
        "./ResMgr": "ResMgr"
    } ],
    UserMgr: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6330b3Bgv1H26iynanKZMmC", "UserMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.UserMgr = void 0;
        var o = e("../Config/GConfiguration"), i = e("../Game/Ad/AdData"), a = e("./EventMgr"), r = cc._decorator, s = r.ccclass, c = (r.property, 
        function() {
            function e() {
                this.refershOldVersion = !0, this.userInfo = {
                    energy: -999,
                    eraseMaxLeve: 1,
                    eraseLeve: 1,
                    moveMaxLeve: 1,
                    moveLeve: 1,
                    toHitLeve: 1,
                    toHitMaxLeve: 1,
                    soldierLeve: 1,
                    soldierMaxLeve: 1,
                    roundLeve: 1,
                    roundMaxLeve: 1,
                    riverLeve: 1,
                    riverMaxLeve: 1,
                    snakeLeve: 1,
                    snakeMaxLeve: 1,
                    carLeve: 1,
                    carMaxLeve: 1,
                    dialectLeve: 1,
                    dialectMaxLeve: 1,
                    oldEnerTime: 0,
                    addEnergy: 5,
                    carLock: 0,
                    eraseLock: 0,
                    moveLock: 0,
                    toHitLock: 0,
                    soldierLock: 0,
                    roundLock: 0,
                    riverLock: 0,
                    snakeLock: 0,
                    LineSoldierLeve: 1,
                    LineSoldierMaxLeve: 1,
                    LineLock: 0,
                    CircularLeve: 1,
                    CircularMaxLeve: 1,
                    CircularLock: 0,
                    ColorLeve: 1,
                    ColorMaxLeve: 1,
                    ColorLock: 0,
                    NearLeve: 1,
                    NearMaxLeve: 1,
                    NearLock: 0,
                    WarpLeve: 1,
                    WarpMaxLeve: 1,
                    WarpLock: 0,
                    AndroidFirstEnergy: 0,
                    RescueLeve: 1,
                    RescueMaxLeve: 1,
                    RescueLock: 0,
                    WarpManLeve: 1,
                    WarpManMaxLeve: 1,
                    WarpManLock: 0,
                    PigLeve: 1,
                    PigMaxLeve: 1,
                    PigLock: 0,
                    MazeLeve: 1,
                    MazeMaxLeve: 1,
                    MazeLock: 0,
                    BridgeLeve: 1,
                    BridgeMaxLeve: 1,
                    BridgeLock: 0
                };
            }
            var t;
            return t = e, e.instance = function() {
                return this._instance || (this._instance = new t()), this._instance;
            }, e.prototype.refershOldData = function() {}, e.prototype.Init = function(e) {
                var n = t.instance();
                if ("win" == i.AdData.platform || "Android" == i.AdData.platform) {
                    if (cc.sys.isBrowser) if ((r = JSON.parse(cc.sys.localStorage.getItem(o.GConfiguration.UserInfoKey))) && !o.GConfiguration.isDebug) {
                        for (var a in n.userInfo) {
                            this.checkObj(a, r) || (r[a] = n.userInfo[a]);
                        }
                        n.userInfo = r;
                    } else cc.sys.localStorage.setItem(o.GConfiguration.UserInfoKey, JSON.stringify(n.userInfo));
                } else if ("tt" == i.AdData.platform) {
                    if ((r = window.tt.getStorageSync(o.GConfiguration.UserInfoKey)) && !o.GConfiguration.isDebug) {
                        for (var a in n.userInfo) {
                            this.checkObj(a, r) || (r[a] = n.userInfo[a]);
                        }
                        n.userInfo = r;
                    } else window.tt.setStorageSync(o.GConfiguration.UserInfoKey, t.instance().userInfo);
                } else if ("wx" == i.AdData.platform) {
                    if ((r = wx.getStorageSync(o.GConfiguration.UserInfoKey)) && !o.GConfiguration.isDebug) {
                        for (var a in console.log(r, "有"), n.userInfo) {
                            this.checkObj(a, r) || (r[a] = n.userInfo[a]);
                        }
                        n.userInfo = r;
                    } else wx.setStorageSync(o.GConfiguration.UserInfoKey, t.instance().userInfo);
                } else if ("vivo" == i.AdData.platform) {
                    if ((r = qg.getStorageSync({
                        key: o.GConfiguration.UserInfoKey
                    })) && !o.GConfiguration.isDebug) {
                        for (var a in r = JSON.parse(r), n.userInfo) {
                            this.checkObj(a, r) || (r[a] = n.userInfo[a]);
                        }
                        n.userInfo = r;
                    } else qg.setStorageSync({
                        key: o.GConfiguration.UserInfoKey,
                        value: JSON.stringify(n.userInfo)
                    });
                } else if ("oppo" == i.AdData.platform) {
                    var r = void 0;
                    if ((r = localStorage.getItem(o.GConfiguration.UserInfoKey)) && !o.GConfiguration.isDebug) {
                        for (var a in r = JSON.parse(r), n.userInfo) {
                            this.checkObj(a, r) || (r[a] = n.userInfo[a]);
                        }
                        n.userInfo = r;
                    } else localStorage.setItem(o.GConfiguration.UserInfoKey, JSON.stringify(t.instance().userInfo));
                } else if ("ks" == i.AdData.platform) try {
                    if ((r = ks.getStorageSync(o.GConfiguration.UserInfoKey)) && !o.GConfiguration.isDebug) {
                        for (var a in r = JSON.parse(r), n.userInfo) {
                            this.checkObj(a, r) || (r[a] = n.userInfo[a]);
                        }
                        n.userInfo = r;
                    } else ks.setStorageSync(o.GConfiguration.UserInfoKey, t.instance().userInfo);
                } catch (s) {}
                setInterval(n._saveUserStorage, 1e3), e();
            }, e.prototype.checkObj = function(e, t) {
                for (var n in t) {
                    if (n == e) return !0;
                }
                return !1;
            }, e.prototype._saveUserStorage = function() {
                "tt" == i.AdData.platform ? window.tt.setStorageSync(o.GConfiguration.UserInfoKey, t.instance().userInfo) : "win" == i.AdData.platform || "Android" == i.AdData.platform ? cc.sys.localStorage.setItem(o.GConfiguration.UserInfoKey, JSON.stringify(t.instance().userInfo)) : "wx" == i.AdData.platform ? wx.setStorageSync(o.GConfiguration.UserInfoKey, t.instance().userInfo) : "vivo" == i.AdData.platform ? qg.setStorageSync({
                    key: o.GConfiguration.UserInfoKey,
                    value: JSON.stringify(t.instance().userInfo)
                }) : "oppo" == i.AdData.platform ? localStorage.setItem(o.GConfiguration.UserInfoKey, JSON.stringify(t.instance().userInfo)) : "ks" == i.AdData.platform && ks.setStorageSync(o.GConfiguration.UserInfoKey, t.instance().userInfo);
                var e = t.instance().userInfo;
                if (e.energy < 5) {
                    if (e.oldEnerTime > 0) {
                        var n = new Date().getTime(), r = n - e.oldEnerTime;
                        if (r / 1e3 / 60 > 5) {
                            var s = r / 1e3 / 60 / 5;
                            e.energy + s >= 5 ? e.energy = 5 : (e.energy += Math.floor(s), e.oldEnerTime = n - 6e4 * (s - Math.floor(s)));
                        }
                    } else e.oldEnerTime = new Date().getTime();
                } else e.oldEnerTime = 0;
                a.default.Instance.dispatch_event(o.GConfiguration.UpdateUserInfo, "");
            }, e._instance = null, t = __decorate([ s("UserMgr") ], e);
        }());
        n.UserMgr = c, cc._RF.pop();
    }, {
        "../Config/GConfiguration": "GConfiguration",
        "../Game/Ad/AdData": "AdData",
        "./EventMgr": "EventMgr"
    } ],
    Utils: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ecd3dilhX9MD6IxznJK1VnJ", "Utils"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.Utils = void 0;
        var o = e("../Game/Move/MTips"), i = e("../Managers/UIMgr"), a = cc._decorator, r = a.ccclass, s = (a.property, 
        function() {
            function e() {}
            return e.showTips = function(e) {
                cc.tween(e).repeat(10, cc.tween().to(.8, {
                    opacity: 100
                }).to(.8, {
                    opacity: 255
                })).start();
            }, e.showError = function(e) {
                var t = i.default.Instance.show_ui("Pop", "Error", e);
                cc.tween(t).set({
                    scale: 0
                }).to(.3, {
                    scale: 1.2
                }).to(.2, {
                    scale: 1
                }).call(function() {
                    t.destroy();
                }).start();
            }, e.popWindow = function(e) {
                cc.tween(e.children[0]).set({
                    opacity: 1
                }).to(.35, {
                    opacity: 140
                }).start(), cc.tween(e.children[1]).set({
                    scale: 0,
                    opacity: 0
                }).to(.35, {
                    scale: 1,
                    opacity: 255
                }, {
                    easing: cc.easing.elasticOut
                }).start();
            }, e.closeWindow = function(e) {
                cc.tween(e.children[0]).to(.2, {
                    opacity: 0
                }).start(), cc.tween(e.children[1]).to(.3, {
                    scale: 0,
                    opacity: 0
                }, {
                    easing: cc.easing.backIn
                }).call(function() {
                    e.active = !1, e.removeFromParent(), e.destroy();
                }).start();
            }, e.showStrTips = function(e) {
                i.default.Instance.show_ui("MoveLv", "Tips").getComponent(o.default).setText(e);
            }, e.timestampToTime = function(e, t) {
                var n = t - e, o = n % 864e5, i = Math.floor(n / 36e5), a = o % 36e5, r = Math.floor(a / 6e4), s = a % 6e4, c = Math.round(s / 1e3);
                return i <= 0 && r <= 0 && c <= 0 ? "00:00:00" : (i < 10 && (i = "0" + i), r < 10 && (r = "0" + r), 
                c < 10 && (c = "0" + c), r + ":" + c);
            }, e.recSquare = function(e, t, n, o) {
                var i = !1, a = t.x - n, r = t.x + n, s = t.y - o, c = t.y + o;
                return e.x > a && e.x < r && e.y > s && e.y < c && (i = !0), i;
            }, e.wraPosArr = function(e, t) {
                for (var n = [], o = 0; o < t; o++) {
                    for (var i = 298 - 42 * o, a = 0; a < e; a++) {
                        var r = {
                            x: 42 * a - 337,
                            y: i
                        };
                        n.push(r);
                    }
                }
                return n;
            }, e.perPosArr = function(e) {
                this.perArr1 = [], this.perArr1 = e;
            }, e.perArr1 = [], __decorate([ r("Utils") ], e);
        }());
        n.Utils = s, cc._RF.pop();
    }, {
        "../Game/Move/MTips": "MTips",
        "../Managers/UIMgr": "UIMgr"
    } ],
    ViewAadpter: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b5b74Dm++FDRqdtgWoYmYUd", "ViewAadpter"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.start = function() {
                var e = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height), t = this.node.width * e, n = this.node.height * e;
                console.log(Math.max(cc.view.getCanvasSize().width / t, cc.view.getCanvasSize().height / n)), 
                this.node.scale = Math.max(cc.view.getCanvasSize().width / t, cc.view.getCanvasSize().height / n);
            }, __decorate([ i ], t);
        }(cc.Component));
        n.default = a, cc._RF.pop();
    }, {} ],
    VivoAdBase: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5f5c1Cnh/RMI5JidGm6lPzL", "VivoAdBase"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.VivoAdBase = void 0;
        var o = function() {
            function e() {}
            return e.onShowRewardedAd = function(t, n) {
                if (e.systemInfo = window.qg.getSystemInfoSync(), e.systemInfo.platformVersionCode < 1041) console.log("低于最低版本号"); else {
                    var o = window.qg.createRewardedVideoAd({
                        posId: "64393b39dbe94ac1afad263a64ae2cfd"
                    });
                    o.onError(function(e) {
                        console.log("激励视频广告加载失败", e);
                    }), o.onLoad(function(e) {
                        console.log("激励视频广告加载完成-onload触发", JSON.stringify(e)), o.show().then(function() {
                            console.log("激励视频广告展示完成");
                        }).catch(function(e) {
                            console.log("激励视频广告展示失败", JSON.stringify(e));
                        });
                    }), o.onClose(function(e) {
                        console.log("视频广告关闭回调"), e && e.isEnded ? (n.call(t, !0), console.log("正常播放结束，可以下发游戏奖励", e)) : console.log("播放中途退出，不下发游戏奖励");
                    });
                }
            }, e.onShowBanner = function() {
                e.systemInfo = window.qg.getSystemInfoSync(), e.systemInfo.platformVersionCode < 1031 ? console.log("低于最低版本号") : (null != this.bannerAd && this.bannerAd.destroy(), 
                this.bannerAd = window.qg.createBannerAd({
                    posId: "0e53f3272be4411e9523dcc335c4a1fc",
                    adIntervals: 30
                }), this.bannerAd.onError(function(e) {
                    console.log("banner广告加载失败", e);
                }), this.bannerAd.show().then(function() {
                    console.log("banner广告展示完成");
                }).catch(function(e) {
                    console.log("banner广告展示失败", JSON.stringify(e));
                }));
            }, e.onHideBanner = function() {
                null != this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null), null != this.nativeBannerAd && (this.nativeBannerAd.destroy(), 
                this.nativeBannerAd = null);
            }, e.onShowInterstitialAd = function() {
                this.intertitiAd = qg.createInterstitialAd({
                    posId: "c27419c5499d4e6cab1ca7d01e84d129"
                }), this.intertitiAd.onError(function(e) {
                    console.log("插屏广告加载失败", e);
                }), this.intertitiAd.show().then(function() {
                    console.log("插屏广告展示完成");
                }).catch(function(e) {
                    console.log("插屏广告展示失败", JSON.stringify(e));
                });
            }, e.onCloseInterstitiAd = function() {
                null != this.nativeInerAd && (this.nativeInerAd.destroy(), this.nativeInerAd = null), 
                null != this.intertitiAd && (this.intertitiAd.destroy(), this.intertitiAd = null);
            }, e.OnShowViVoNativeBannerAd = function() {
                e.systemInfo = window.qg.getSystemInfoSync(), e.systemInfo.platformVersionCode < 1094 && !window.qg.createNewNativeAd ? this.onShowBanner() : window.qg && (console.log("原生广告字开始展示"), 
                e.bannerAd && (e.bannerAd.hide(), e.bannerAd = null), e.nativeBannerAd && (e.nativeBannerAd.destroy(), 
                e.nativeBannerAd = null), e.nativeBannerAd = window.qg.createCustomAd({
                    posId: "147273b898044d899d2af0d67edd8b3f",
                    style: {}
                }), e.nativeBannerAd.onError(function(t) {
                    console.log("原生广告加载失败", t), e.onShowBanner();
                }), e.nativeBannerAd.show().then(function() {
                    console.log("原生广告展示完成");
                }).catch(function(t) {
                    console.log("原生广告加载失败", t), e.onShowBanner();
                }));
            }, e.onShowViVoNativeInterAd = function(t) {
                var n = this;
                if (void 0 === t && (t = 0), e.systemInfo = window.qg.getSystemInfoSync(), e.systemInfo.platformVersionCode < 1094 && !window.qg.createNewNativeAd) return console.log("无法播放原生模板插屏", "当前版本号", e.systemInfo.platformVersionCode), 
                void this.onShowInterstitialAd();
                e.bannerAd && (e.bannerAd.hide(), e.bannerAd = null), e.nativeInerAd && (e.nativeInerAd.destroy(), 
                e.nativeInerAd = null);
                var o;
                o = 667 - t;
                var i;
                i = 1 == this.nativeIndex ? "ba52204a68164bb2be8aa888892e6076" : "27ea08473f074e73942eb03e0ece87ac", 
                e.nativeInerAd = qg.createCustomAd({
                    posId: i,
                    style: {
                        top: o / 1334 * e.systemInfo.windowHeight
                    }
                }), e.nativeInerAd.onError(function(t) {
                    console.log("原生广告加载失败", t), e.onShowInterstitialAd();
                }), e.nativeInerAd.show().then(function() {
                    console.log("原生广告展示完成"), n.nativeIndex = !n.nativeIndex;
                }).catch(function(t) {
                    console.log("原生广告加载失败", t), e.onShowInterstitialAd();
                });
            }, e.onShowBoxPortalAd = function() {
                console.log("开始创建"), qg.createBoxPortalAd ? (this.boxPortalAd = qg.createBoxPortalAd({
                    posId: "4d95d956a3284717be4115be44914888",
                    image: "",
                    marginTop: 200
                }), this.boxPortalAd.onError(function(e) {
                    console.log("盒子九宫格广告加载失败", e);
                }), this.boxPortalAd.onClose(function() {
                    console.log("close"), this.boxPortalAd.isDestroyed || this.boxPortalAd.show();
                }), this.boxPortalAd.show().then(function() {
                    console.log("show success");
                })) : console.log("暂不支持互推盒子相关 API");
            }, e.onCloseBoxPortalAd = function() {
                null != this.boxPortalAd && (this.boxPortalAd.isDestroyed = !0, this.boxPortalAd.destroy());
            }, e.curRewardedVideoAd = null, e.systemInfo = null, e.bannerAd = null, e.intertitiAd = null, 
            e.nativeBannerAd = null, e.nativeInerAd = null, e.nativeIndex = !0, e.boxPortalAd = null, 
            e;
        }();
        n.VivoAdBase = o, cc._RF.pop();
    }, {} ],
    WarpAIItem: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5698a5NVLZGJZR6N0w2fNRQ", "WarpAIItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.m_GroundList = [], t.m_StartPos = null, t.m_EndPosList = [], t.m_EndPos = null, 
                t.m_MovePath = [], t.isRound = !0, t;
            }
            return __extends(t, e), t.prototype.start = function() {}, t.prototype.ResultGame = function() {}, 
            t.prototype.onGameInit = function() {}, t.prototype.getEndPos = function() {}, t.prototype.onMove = function() {}, 
            t.prototype.onDestroy = function() {}, t.prototype.checkEnd = function() {}, t.prototype.getPath = function() {}, 
            t.prototype.onAIMove = function() {}, t.prototype.getDiePath = function() {}, __decorate([ i ], t);
        }(cc.Component));
        n.default = a, cc._RF.pop();
    }, {} ],
    WarpCheckMgr: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "04c79NIk3tGE58MinnqiFFy", "WarpCheckMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("./WarpLeve"), r = e("../../Utils/Utils"), s = cc._decorator, c = s.ccclass, l = (s.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.GameLogic = null, t.m_CheckBox = null, t.startPos = null, t.transverse = 17, 
                t.vertical = 16, t.boxPosAll = [], t.recordBoxPosAll = [], t.recleng = 21, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.DataRfGame, this, this.initData), 
                this.GameLogic = this.node.parent.parent.getComponent(a.default), this.m_CheckBox = this.node.parent.getChildByName("cheackBox"), 
                this.startPos = this.m_CheckBox.position, this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this), 
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchUp, this), 
                this.initData();
            }, t.prototype.initData = function() {
                this.recordBoxPosAll = [], this.boxPosAll = [], this.recordBoxPosAll = r.Utils.perArr1, 
                this.boxPosAll = r.Utils.wraPosArr(this.transverse, this.vertical);
            }, t.prototype.onClick = function(e) {
                var t = this.GameLogic.node.convertToNodeSpaceAR(e.getLocation());
                this.touchData(t);
            }, t.prototype.onTouchMove = function(e) {
                var t = this.GameLogic.node.convertToNodeSpaceAR(e.getLocation());
                this.touchData(t);
            }, t.prototype.touchData = function(e) {
                for (var t = 0; t < this.boxPosAll.length; t++) {
                    if (r.Utils.recSquare(e, this.boxPosAll[t], this.recleng, this.recleng)) {
                        for (var n = 0; n < this.recordBoxPosAll.length; n++) {
                            if (r.Utils.recSquare(e, this.recordBoxPosAll[n], this.recleng, this.recleng)) return;
                        }
                        return this.recordBoxPosAll.push(this.boxPosAll[t]), r.Utils.perPosArr(this.recordBoxPosAll), 
                        void i.default.Instance.dispatch_event(o.GConfiguration.WrapAddDoor, this.boxPosAll[t]);
                    }
                }
            }, t.prototype.onTouchUp = function() {
                this.m_CheckBox.setPosition(this.startPos);
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.DataRfGame, this, this.initData);
            }, __decorate([ c ], t);
        }(cc.Component));
        n.default = l, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Utils/Utils": "Utils",
        "./WarpLeve": "WarpLeve"
    } ],
    WarpGroundItem: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "31043qARwJMw6g0jRTnDMUA", "WarpGroundItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = e("./WarpLeve"), s = e("../../Managers/SoundMgr"), c = e("../../Managers/GameMgr"), l = cc._decorator, d = l.ccclass, u = l.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isEnble = !1, t.isEnd = !1, t.selfData = [], t.StartEnd = !1, t.StartEnble = !1, 
                t.GameLogic = null, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                this.GameLogic = this.node.parent.getComponent(r.default);
            }, t.prototype.start = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.WrapAddDoor, this, this.onCheckSelf);
            }, t.prototype.onCheckSelf = function(e, t) {
                if (this.GameLogic.doorNumber > 0 && !this.isEnble) {
                    var n = null;
                    (n = c.default.Instance.GameType == c.GameType.Pig ? a.default.Instance.show_ui("Pig", "Door", this.node) : a.default.Instance.show_ui("Warp", "Door", this.node)).x = t.x, 
                    n.y = t.y + 15, s.default.Instance.play_effect("click1"), i.default.Instance.dispatch_event(o.GConfiguration.WarpChangeNumber, t);
                    var r = (t.y - -332) / 42, l = (t.x - -337) / 42;
                    this.selfData = [ r, l ], i.default.Instance.dispatch_event(o.GConfiguration.changeGroundData, this.selfData);
                }
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.WrapAddDoor, this, this.onCheckSelf);
            }, __decorate([ u ], t.prototype, "isEnble", void 0), __decorate([ u ], t.prototype, "isEnd", void 0), 
            __decorate([ d ], t);
        }(cc.Component);
        n.default = h, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/GameMgr": "GameMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "./WarpLeve": "WarpLeve"
    } ],
    WarpLevelData: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d70a6pikIFHX4ajPA1co4CD", "WarpLevelData"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/SoundMgr"), r = e("./WarpLeve"), s = cc._decorator, c = s.ccclass, l = s.property, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.doorNumber = 10, t.AINumber = 1, t.tipsFrame = null, t.enArr = [], t;
            }
            return __extends(t, e), t.prototype.start = function() {
                o.GConfiguration.LevelIsTips = !1, this.node.getChildByName("check").height = 1e3, 
                this.enArr = this.node.parent.getComponent(r.default).GroundEndList;
            }, t.prototype.startMove = function(e) {
                a.default.Instance.play_effect("click1"), i.default.Instance.dispatch_event(o.GConfiguration.WrapMove, this.enArr), 
                e.target.active = !1;
            }, __decorate([ l ], t.prototype, "doorNumber", void 0), __decorate([ l ], t.prototype, "AINumber", void 0), 
            __decorate([ l(cc.SpriteFrame) ], t.prototype, "tipsFrame", void 0), __decorate([ c ], t);
        }(cc.Component);
        n.default = d, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "./WarpLeve": "WarpLeve"
    } ],
    WarpLeve: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b6365iXkFpB1LGrNZKGqRIf", "WarpLeve"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../AStar/Player"), i = e("../../Config/GConfiguration"), a = e("../../Managers/EventMgr"), r = e("../../Managers/GameMgr"), s = e("../../Managers/SoundMgr"), c = e("../../Managers/UIMgr"), l = e("../../Managers/UserMgr"), d = e("../../Utils/Utils"), u = e("./WarpLevelData"), h = e("./WarpPigItem"), f = cc._decorator, p = f.ccclass, g = (f.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.label = null, t.doorNumber = 10, t.StartDoorNumber = 0, t.AINumber = 1, 
                t.tipsFrame = null, t.isWin = !1, t.isDie = !1, t.isSuccess = !1, t.isResult = !1, 
                t.GroundList = [], t.GroundEndList = [], t.checkwinIndex = 0, t.DoorList = [], t.LeveUIName = "", 
                t.Levechilde = null, t.lvlPosArr = [], t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {
                i.GConfiguration.LevelIsTips = !1, a.default.Instance.add_event_listenner(i.GConfiguration.WarpChangeNumber, this, this.onCheck), 
                a.default.Instance.add_event_listenner(i.GConfiguration.WarpAIMoveEnd, this, this.onCheckWin), 
                a.default.Instance.add_event_listenner(i.GConfiguration.ShowGameTips, this, this.showTips), 
                this.NextGame();
            }, t.prototype.NextGame = function() {
                null != this.Levechilde && this.Levechilde.destroy(), r.default.Instance.GameType == r.GameType.Warp ? (this.LeveUIName = "Lv_" + l.UserMgr.instance().userInfo.WarpLeve, 
                this.Levechilde = c.default.Instance.show_ui("Warp", this.LeveUIName, this.node)) : r.default.Instance.GameType == r.GameType.WarpMan ? (this.LeveUIName = "Lv_" + l.UserMgr.instance().userInfo.WarpManLeve, 
                this.Levechilde = c.default.Instance.show_ui("WarpMan", this.LeveUIName, this.node)) : r.default.Instance.GameType == r.GameType.Pig && (this.LeveUIName = "Lv_" + l.UserMgr.instance().userInfo.PigLeve, 
                this.Levechilde = c.default.Instance.show_ui("Pig", this.LeveUIName, this.node), 
                this.Levechilde.children.forEach(function(e) {
                    "zhu" != e.name && "zhu copy" != e.name || e.addComponent(h.default);
                })), this.label = this.Levechilde.getChildByName("Number").getComponent(cc.Label), 
                this.doorNumber = this.Levechilde.getComponent(u.default).doorNumber, this.AINumber = this.Levechilde.getComponent(u.default).AINumber, 
                this.tipsFrame = this.Levechilde.getComponent(u.default).tipsFrame, this.StartDoorNumber = this.doorNumber, 
                this.ResultGame();
            }, t.prototype.setEnd = function() {
                var e = this, t = [];
                this.Levechilde.children.forEach(function(n) {
                    if (r.default.Instance.GameType == r.GameType.Warp) {
                        if ("nvhai_ske" == n.name || "nvhai_ske copy" == n.name) {
                            var o = cc.v2(n.x, n.y);
                            t.push(o), e.GroundEndList.push(o);
                        }
                    } else r.default.Instance.GameType == r.GameType.WarpMan ? "jiefei_ske" != n.name && "jiefei_ske copy" != n.name || (o = cc.v2(n.x, n.y), 
                    t.push(o), e.GroundEndList.push(o)) : r.default.Instance.GameType != r.GameType.Pig || "zhu" != n.name && "zhu copy" != n.name || (o = cc.v2(n.x, n.y), 
                    t.push(o), e.GroundEndList.push(o));
                });
            }, t.prototype.checkStarPos = function() {
                var e = [];
                d.Utils.perPosArr([]), this.Levechilde.children.forEach(function(t) {
                    if (!(r.default.Instance.GameType != r.GameType.Warp && r.default.Instance.GameType != r.GameType.WarpMan && r.default.Instance.GameType != r.GameType.Pig || "nvhai_ske" != t.name && "nvhai_ske copy" != t.name && "jiefei_ske" != t.name && "jiefei_ske copy" != t.name && "wall" != t.name && "wall copy" != t.name && "mifeng copy" != t.name && "mifeng" != t.name && "zhu" != t.name && "zhu copy" != t.name)) if (t.getComponent(o.default)) {
                        var n = t.getComponent(o.default).STARTPOS, i = {
                            x: n.x,
                            y: n.y
                        };
                        e.push(i);
                    } else i = {
                        x: t.x,
                        y: t.y
                    }, e.push(i);
                }), this.lvlPosArr = e, d.Utils.perPosArr(e), a.default.Instance.dispatch_event(i.GConfiguration.DataRfGame, "");
            }, t.prototype.onGameInit = function() {
                var e = this;
                this.Levechilde.getChildByName("btnStart").active = !1, this.scheduleOnce(function() {
                    e.Levechilde.getChildByName("btnStart").active = !0;
                }, 2);
            }, t.prototype.ResultGame = function() {
                this.DoorList = [], this.checkwinIndex = 0, this.GroundList = [], this.GroundEndList = [], 
                this.isDie = !1, this.isWin = !1, this.isSuccess = !1, this.isResult = !1, this.doorNumber = this.StartDoorNumber, 
                this.label.string = "X " + this.doorNumber, this.setEnd(), this.removeDoor(), this.onGameInit();
            }, t.prototype.showTips = function() {
                i.GConfiguration.LevelIsTips = !0, c.default.Instance.show_ui("Warp", "WarpTips").getChildByName("node").getChildByName("t_tishi").getChildByName("guohetishi").getComponent(cc.Sprite).spriteFrame = this.tipsFrame;
            }, t.prototype.onCheckWin = function(e, t) {
                this.checkwinIndex++, this.checkwinIndex >= this.AINumber && !this.isResult && (t || this.isSuccess || (this.scheduleOnce(function() {
                    c.default.Instance.show_ui("Pop", "Success");
                }, 1), this.isSuccess = !0)), !t || this.isResult || this.isSuccess || (s.default.Instance.play_effect("cuowu"), 
                d.Utils.showError(this.node), this.scheduleOnce(function() {
                    a.default.Instance.dispatch_event(i.GConfiguration.UpdateGame, "");
                }, 1), this.isResult = !0);
            }, t.prototype.onCheck = function(e, t) {
                var n = this;
                if (!this.isWin && !this.isDie) {
                    this.doorNumber -= 1, this.label.string = "X" + this.doorNumber;
                    for (var o = 0; o < this.GroundList.length; o++) {
                        this.GroundList[o].x == t.x && this.GroundList[o].y == t.y && this.GroundList.splice(o, 1);
                    }
                    this.DoorList.push(t), this.doorNumber <= 0 && (this.scheduleOnce(function() {
                        a.default.Instance.dispatch_event(i.GConfiguration.WrapMove, n.GroundEndList);
                    }, .1), this.isWin = !0);
                }
            }, t.prototype.removeDoor = function() {
                for (var e = this, t = 0; t < this.node.getChildByName("GroundParent").childrenCount; t++) {
                    null != this.node.getChildByName("GroundParent").children[t] && this.node.getChildByName("GroundParent").children[t].destroy();
                }
                this.scheduleOnce(function() {
                    e.GroundList = [], e.GroundList = d.Utils.wraPosArr(17, 16), e.checkStarPos();
                    for (var t = 0; t < e.Levechilde.childrenCount; t++) {
                        if ("wall" == e.Levechilde.children[t].name || "wall copy" == e.Levechilde.children[t].name) {
                            var n = [ (e.Levechilde.children[t].y - -332) / 42, (e.Levechilde.children[t].x - -337) / 42 ];
                            a.default.Instance.dispatch_event(i.GConfiguration.changeGroundData, n);
                            for (var o = 0; o < e.GroundList.length; o++) {
                                e.GroundList[o].x == e.Levechilde.children[t].x && e.GroundList[o].y == e.Levechilde.children[t].y && e.GroundList.splice(o, 1);
                            }
                        }
                    }
                }, .5);
            }, t.prototype.onDestroy = function() {
                a.default.Instance.remove_event_listenner(i.GConfiguration.WarpChangeNumber, this, this.onCheck), 
                a.default.Instance.remove_event_listenner(i.GConfiguration.WarpAIMoveEnd, this, this.onCheckWin), 
                a.default.Instance.remove_event_listenner(i.GConfiguration.ShowGameTips, this, this.showTips);
            }, __decorate([ p ], t);
        }(c.UICtrl));
        n.default = g, cc._RF.pop();
    }, {
        "../../AStar/Player": "Player",
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/GameMgr": "GameMgr",
        "../../Managers/SoundMgr": "SoundMgr",
        "../../Managers/UIMgr": "UIMgr",
        "../../Managers/UserMgr": "UserMgr",
        "../../Utils/Utils": "Utils",
        "./WarpLevelData": "WarpLevelData",
        "./WarpPigItem": "WarpPigItem"
    } ],
    WarpPigItem: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "68161yAjtVEqZO7XHNrANNd", "WarpPigItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../Config/GConfiguration"), i = e("../../Managers/EventMgr"), a = e("../../Managers/UIMgr"), r = cc._decorator, s = r.ccclass, c = (r.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.selfSpine = null, t.isChange = !1, t;
            }
            return __extends(t, e), t.prototype.start = function() {
                this.selfSpine = this.node.getComponent(sp.Skeleton), i.default.Instance.add_event_listenner(o.GConfiguration.ChangeSkin, this, this.changeDie);
            }, t.prototype.changeDie = function(e, t) {
                var n = this, r = (this.node.y - -332) / 42, s = (this.node.x - -337) / 42;
                if (t.x == s && t.y == r && !this.isChange) {
                    this.isChange = !0;
                    var c = a.default.Instance.show_ui("Pig", "yun", this.node.parent);
                    c.position = this.node.position, this.scheduleOnce(function() {
                        c.destroy(), n.selfSpine.setAnimation(0, "fail", !0), n.scheduleOnce(function() {
                            n.selfSpine.setAnimation(0, "cry", !0), i.default.Instance.dispatch_event(o.GConfiguration.WarpAIMoveEnd, !0);
                        }, .5);
                    }, .8);
                }
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.ChangeSkin, this, this.changeDie);
            }, __decorate([ s ], t);
        }(cc.Component));
        n.default = c, cc._RF.pop();
    }, {
        "../../Config/GConfiguration": "GConfiguration",
        "../../Managers/EventMgr": "EventMgr",
        "../../Managers/UIMgr": "UIMgr"
    } ],
    WrapCheckBox: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3b948NxZqtDea+ndC4nyuLj", "WrapCheckBox"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator, i = o.ccclass, a = (o.property, function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.GameLogic = null, t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {}, __decorate([ i ], t);
        }(cc.Component));
        n.default = a, cc._RF.pop();
    }, {} ],
    aStar: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bf7a00NtJpH977zwXUe+79r", "aStar"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.AStar = n.AStartStep = void 0;
        var o, i = e("./DataConfig");
        (function(e) {
            e[e.FOURTH_DIR = 0] = "FOURTH_DIR", e[e.EIGHT_DIR = 1] = "EIGHT_DIR";
        })(o || (o = {}));
        var a = function() {
            function e(e) {
                this.g = 0, this.h = 0, this.pos = cc.v2(), this.last = null, this.pos = e;
            }
            return Object.defineProperty(e.prototype, "f", {
                get: function get() {
                    return this.g + this.h;
                },
                set: function set(e) {
                    this._f = e;
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.equalTo = function(t) {
                if (t instanceof e) return this.pos.x === t.pos.x && this.pos.y === t.pos.y;
            }, e;
        }();
        n.AStartStep = a;
        var r = function() {
            function e() {
                this._moveDirection = o.FOURTH_DIR, this._isShowProcess = !1, this.findeIndexOfStepList = function(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        if (e.x === t[n].pos.x && e.y === t[n].pos.y) return n;
                    }
                    return -1;
                }, this._openList = [], this._closeList = [];
            }
            return e.prototype.insetStepToOpen = function(e) {
                for (var t = 0; t < this._openList.length && !(e.f <= this._openList[t].f); ++t) {}
                this._openList.splice(t, 0, e);
            }, e.prototype.setIsShowProcess = function(e) {
                this._isShowProcess = e;
            }, e.prototype.changeDeriction = function() {
                this._moveDirection = this._moveDirection === o.EIGHT_DIR ? o.FOURTH_DIR : o.EIGHT_DIR;
            }, e.prototype._costToMoveStep = function(e, t) {
                return e.x !== t.x && e.y !== t.y ? 14 : 10;
            }, e.prototype._getH = function(e, t) {
                return 10 * (Math.abs(e.x - t.x) + Math.abs(e.y - t.y));
            }, e.prototype._getNextCanMovePos = function(e) {
                var t = function t(e, _t24) {
                    0 === i.tableData[e.y][e.x] && _t24.push(e);
                }, n = [], a = cc.v2(e.x - 1, e.y);
                if (a.x >= 0 && (t(a, n), this._moveDirection === o.EIGHT_DIR)) {
                    var r = cc.v2(e.x - 1, e.y + 1);
                    r.y < i.tableData.length && t(r, n);
                    var s = cc.v2(e.x - 1, e.y - 1);
                    s.y >= 0 && t(s, n);
                }
                var c = cc.v2(e.x + 1, e.y);
                if (c.x < i.tableData[0].length && (t(c, n), this._moveDirection === o.EIGHT_DIR)) {
                    var l = cc.v2(e.x + 1, e.y + 1);
                    l.y < i.tableData.length && t(l, n);
                    var d = cc.v2(e.x + 1, e.y - 1);
                    d.y >= 0 && t(d, n);
                }
                var u = cc.v2(e.x, e.y + 1);
                u.y < i.tableData.length && t(u, n);
                var h = cc.v2(e.x, e.y - 1);
                return h.y >= 0 && t(h, n), n;
            }, e.prototype.findePaths = function(e, t) {
                return __awaiter(this, void 0, void 0, function() {
                    var n, o, i, r, s, c, l, d, u, h, f;
                    return __generator(this, function(p) {
                        switch (p.label) {
                          case 0:
                            this._openList = [], this._closeList = [], n = [], o = [], this._openList.push(new a(e)), 
                            i = !1, p.label = 1;

                          case 1:
                            return r = this._openList.shift(), this._closeList.push(r), this._isShowProcess ? [ 4, this.sleep(100) ] : [ 3, 3 ];

                          case 2:
                            p.sent(), this.findPos(r.pos), p.label = 3;

                          case 3:
                            if (r.pos.x === t.x && r.pos.y === t.y) {
                                i = !0;
                                do {
                                    o.unshift(r.pos), r = r.last;
                                } while (null !== r);
                                return [ 3, 5 ];
                            }
                            for (s = this._getNextCanMovePos(r.pos), c = 0; c < s.length; ++c) {
                                l = s[c], -1 == this.findeIndexOfStepList(l, this._closeList) ? (d = new a(l), u = this._costToMoveStep(l, r.pos), 
                                -1 === (h = this.findeIndexOfStepList(l, this._openList)) ? (d.last = r, d.g = r.g + u, 
                                d.h = this._getH(l, t), this.insetStepToOpen(d), n.push([ r.pos.x, r.pos.y ])) : (f = this._openList[h], 
                                r.g + u < f.g && (f.g = r.g + u, f.last = r, this._openList.splice(h, 1), this.insetStepToOpen(f)))) : (s.splice(c, 1), 
                                c--);
                            }
                            p.label = 4;

                          case 4:
                            if (this._openList.length > 0) return [ 3, 1 ];
                            p.label = 5;

                          case 5:
                            return [ 2, [ i, o, n, this._closeList ] ];
                        }
                    });
                });
            }, e.prototype.findPos = function() {}, e.prototype.sleep = function(e) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function() {
                        return [ 2, new Promise(function(t) {
                            setTimeout(t, e);
                        }) ];
                    });
                });
            }, e;
        }();
        n.AStar = r, cc._RF.pop();
    }, {
        "./DataConfig": "DataConfig"
    } ],
    game: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b15c82tfpFDipB5ZkHoVr6L", "game"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.bindShowFindPos = void 0;
        var o = e("../Config/GConfiguration"), i = e("../Managers/EventMgr"), a = e("./aStar"), r = e("./DataConfig"), s = cc._decorator, c = s.ccclass;
        s.property, n.bindShowFindPos = function() {
            return function(e, t, n) {
                var o = n.value;
                return n.value = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        e[t] = arguments[t];
                    }
                    var n = o.apply(this, e);
                    return n;
                }, n;
            };
        };
        var l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.playerMapPos = cc.v2(5, 3), t.isShowProcess = !1, t.count = 0, t._openList = [], 
                t._closeList = [], t;
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                i.default.Instance.add_event_listenner(o.GConfiguration.changeGroundData, this, this.changetData);
            }, t.prototype.start = function() {
                var e = this;
                this.aStar = new a.AStar(), this.initData();
                var t = this.aStar.findPos;
                this.count = 0, this.aStar.findPos = function() {
                    for (var n = [], o = 0; o < arguments.length; o++) {
                        n[o] = arguments[o];
                    }
                    t.call(e, n), e.count++;
                };
            }, t.prototype.changetData = function(e, t) {
                r.tableData[t[0]][t[1]] = 1;
            }, t.prototype.initData = function() {
                for (var e = 0; e < r.tableData.length; e++) {
                    for (var t = 0; t < r.tableData[0].length; t++) {
                        r.tableData[e][t] > 0 && (r.tableData[e][t] = 0);
                    }
                }
            }, t.prototype.onDestroy = function() {
                i.default.Instance.remove_event_listenner(o.GConfiguration.changeGroundData, this, this.changetData);
            }, t.prototype.refreshShowLabel = function() {
                this.count = 0;
            }, t.prototype.changeMoveDriction = function() {
                this.aStar.changeDeriction();
            }, t.prototype.changIsShowpross = function() {
                this.isShowProcess = !this.isShowProcess, this.aStar.setIsShowProcess(this.isShowProcess);
            }, t.prototype.addMapTable = function() {
                if (r.tableData.length < 20) {
                    r.tableData.forEach(function(e) {
                        e.push(0);
                    });
                    var e = new Array(r.tableData[0].length).fill(0);
                    r.tableData.push(e);
                }
                console.log("---tableData.length--", r.tableData.length);
            }, __decorate([ c ], t);
        }(cc.Component);
        n.default = l, cc._RF.pop();
    }, {
        "../Config/GConfiguration": "GConfiguration",
        "../Managers/EventMgr": "EventMgr",
        "./DataConfig": "DataConfig",
        "./aStar": "aStar"
    } ],
    wxTipsAd: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2dc71f2OfVHwY8ctjmLEmcX", "wxTipsAd"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../Managers/UIMgr"), i = e("../AdComponent"), a = e("../AdData"), r = cc._decorator, s = r.ccclass, c = (r.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(t, e), t.prototype.start = function() {}, t.prototype.onDestroy = function() {
                "wx" == a.AdData.platform && (i.AdComponent.onHideBanner(), i.AdComponent.onHideGridAd(), 
                i.AdComponent.onHideManyGridAd());
            }, __decorate([ s ], t);
        }(o.UICtrl));
        n.default = c, cc._RF.pop();
    }, {
        "../../../Managers/UIMgr": "UIMgr",
        "../AdComponent": "AdComponent",
        "../AdData": "AdData"
    } ]
}, {}, [ "DataConfig", "Player", "aStar", "game", "BackgroundAdapter", "ContentAdapter", "MultiResoultionCompat", "UIAdapter", "ViewAadpter", "GConfiguration", "PkgConfiguration", "GameLanch", "ADIconItem", "AndroidBase", "KSAdBase", "OppoAdBase", "TTAdBase", "VivoAdBase", "AdComponent", "AdData", "KSNextVedio", "OppoBigNativeAdMgr", "OppoGridAdMgr", "RenderMgr", "ErrorNative", "wxTipsAd", "BridgeAddItem", "BridgeLeve", "BridgePlayer", "Check", "BridgeLv1", "BridgeLv10", "BridgeLv2", "BridgeLv3", "BridgeLv4", "BridgeLv5", "BridgeLv6", "BridgeLv7", "BridgeLv8", "BridgeLv9", "CarCheck", "CarEndItem", "CarItem", "CarLeve", "CircularAnimalItem", "CircularCheck", "CircularEnd", "CircularItem", "CircularMgr", "ColorLeve", "ColorStart", "ColorErase", "ColorLv1", "ColorLv10", "ColorLv11", "ColorLv12", "ColorLv13", "ColorLv14", "ColorLv2", "ColorLv3", "ColorLv4", "ColorLv5", "ColorLv6", "ColorLv7", "ColorLv8", "ColorLv9", "ColorMove", "DialectCheck", "DialectLeve", "DialectObj", "GameApp", "LineCollBox", "LineIncrease", "LinePolice", "LinePoliceText", "LineSoldierLogic", "LineThief", "LineTouchMove", "MazeCheckBox", "MazeLevel", "MazePlayer", "ML10Exit", "ML11Exit", "ML12Exit", "ML13Exit", "ML14Exit", "ML15Exit ", "ML17Exit", "ML18Exit", "ML19Exit", "ML20Exit", "ML21Exit", "ML3Exit", "ML5Exit", "ML7Exit", "ML8Exit", "MLv1", "MLv10", "MLv11", "MLv12", "MLv13", "MLv14", "MLv15", "MLv16", "MLv17", "MLv18", "MLv19", "MLv2", "MLv20", "MLv21", "MLv3", "MLv4", "MLv5", "MLv6", "MLv7", "MLv8", "MLv9", "MTips", "NearCheck", "NearGroundItem", "NearLeve", "NeatStart", "IconMgr", "GraphicsContro", "MyPhysicsCollider", "RescueAnimalItem", "RescueFlyItem", "RescueLeve", "RiverAnimal", "RiverCheck", "RiverErrTips", "RiverLeve", "RouItem", "RounLava", "SnakeLeve", "SnakeMgr", "SnakeNode", "TargetRotation", "SoldierLeve", "SoldierPlayer", "SoldierTable", "CorpseColl", "Prop", "PropNode", "ToHLv_1", "ToHLv_10", "ToHLv_11", "ToHLv_12", "ToHLv_13", "ToHLv_14", "ToHLv_15", "ToHLv_16", "ToHLv_17", "ToHLv_18", "ToHLv_19", "ToHLv_2", "ToHLv_20", "ToHLv_3", "ToHLv_4", "ToHLv_5", "ToHLv_6", "ToHLv_7", "ToHLv_8", "ToHLv_9", "ToHitBase", "Checkpoint", "Clean", "CleanBase", "GameLoading_Ctrl", "GameView", "HomeView", "Item", "JellyTween", "Leve", "LobbyView", "ResLoading_Ctrl", "Success", "Tips", "WarpAIItem", "WarpCheckMgr", "WarpGroundItem", "WarpLeve", "WarpLevelData", "WarpPigItem", "WrapCheckBox", "EventMgr", "GameMgr", "ResMgr", "SoundMgr", "UIMgr", "UserMgr", "ObjWight", "Utils" ]);