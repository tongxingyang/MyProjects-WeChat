var e, n = require("../@babel/runtime/helpers/interopRequireDefault")(require("../@babel/runtime/regenerator"));

require("project1"), System.register("chunks:///scripts/UIGift.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W, q, Y, K, X, J, Q, Z, $, ee;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _dec9: void 0,
        _dec10: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _descriptor8: void 0,
        _descriptor9: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.Node, g = e.Vec3, 
            f = e.tween, v = e.SpriteFrame, m = e.LabelComponent, y = e.director, B = e.Vec2, 
            C = e.CameraComponent, I = e.Component;
        }, function(e) {
            w = e.CUR_PLATFORM, k = e.PLATFORM_TYPE, b = e.YOUMENG_EVENT, S = e.HINT_INFO, _ = e.MAIDIAN_STEPS, 
            T = e.SOUND_TYPE, U = e.GIFT_AWARD_COUNT;
        }, function(e) {
            N = e.Tools;
        }, function(e) {
            P = e.GameManager;
        }, function(e) {
            D = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "128eeyv5xJKrLGj00OCsfcX", "UIGift", void 0), $ = h.ccclass, ee = h.property, 
            e("UIGift", (A = $("UIGift"), M = ee(d), x = ee(p), R = ee(p), O = ee(p), j = ee(d), 
            L = ee(d), z = ee(p), V = ee(p), H = ee(p), A((F = t((G = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "proValueSpr", F, c(t)), 
                    r(t, "rotateSpr", W, c(t)), r(t, "btnBack", q, c(t)), r(t, "rotateSpr1", Y, c(t)), 
                    r(t, "icon", K, c(t)), r(t, "videoBtn", X, c(t)), r(t, "leftNode", J, c(t)), r(t, "proNode", Q, c(t)), 
                    r(t, "hand", Z, c(t)), t;
                }
                return i(n, I), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        var e = this;
                        this.leftNode.setPosition(-cc.winSize.width / 2, 0, 0), D.instance.UILoad.active = !1, 
                        D.instance.shiPeiUIBackBtn(this.leftNode.getChildByName("backBtn")), P.instance.showNativeAdItem(new g(cc.winSize.width / 2 - 86, -270, 0)), 
                        w == k.WX ? (D.instance.isShowHuTuiIcon2 && N.showWxHuTuiIcon(2), N.showCustomAd()) : this.btnBack.active = !0, 
                        w == k.ANDROID_XiaoMi && (N.showBanner(!0), this.hand.active = this.videoBtn.node.active, 
                        f(this.hand).to(0, {}).call(function() {
                            e.hand.getChildByName("hand0").active = !0, e.hand.getChildByName("hand1").active = !1;
                        }).delay(.35).call(function() {
                            e.hand.getChildByName("hand0").active = !1, e.hand.getChildByName("hand1").active = !0;
                        }).delay(.35).union().repeatForever().start(), f(this.videoBtn.node).to(.5, {
                            scale: new g(1.1, 1.1, 1)
                        }).to(1, {
                            scale: new g(.9, .9, 1)
                        }).union().repeatForever().start()), D.instance.youMenDaDian(b.newGift_appear), 
                        D.instance.tryShowInterAd2();
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.changeVideoCountSpr(), this.showAntModel(5);
                    }
                }, {
                    key: "changeVideoCountSpr",
                    value: function() {
                        var e = U;
                        D.instance.giftVideoCount < D.instance.targetGiftVideoCount - 1 && this.proNode.getChildByName("UIGift_kuang" + D.instance.giftVideoCount) && N.setImage(this.proNode.getChildByName("UIGift_kuang" + D.instance.giftVideoCount).getComponent(d), "resTex/UIGift_kuang2", v);
                        for (var n = 0; n < D.instance.targetGiftVideoCount - 1; n++) N.setImage(this.proNode.getChildByName("UIGift_kuang" + n).getChildByName("icon").getComponent(d), S[e[n].roomType].logoUrl, v), 
                        this.proNode.getChildByName("UIGift_kuang" + n).getComponentInChildren(m).string = "" + e[n].count;
                        for (var t = 0; t < D.instance.giftVideoCount; t++) t < D.instance.targetGiftVideoCount && (this.proNode.getChildByName("UIGift_kuang" + t).getChildByName("lv").active = !1, 
                        this.proNode.getChildByName("UIGift_kuang" + t).getChildByName("msk").active = !0);
                        this.proNode.getChildByName("UIGift_kuang" + D.instance.giftVideoCount) && (this.proNode.getChildByName("UIGift_kuang" + D.instance.giftVideoCount).getChildByName("lv").active = !0), 
                        this.proValueSpr.fillRange = .25 * D.instance.giftVideoCount, this.proValueSpr.fillRange >= 1 && (this.proValueSpr.fillRange = 1);
                    }
                }, {
                    key: "getSkin",
                    value: function() {
                        D.instance.giftVideoCount >= D.instance.targetGiftVideoCount && (y.getScene().emit("hideUIGiftBtn"), 
                        D.instance.unlockSkinId = 5, D.instance.unlockSkinName = "毒液蚂蚁", D.instance.showUI("prefabs/ui/UIUnlockSkin"), 
                        D.instance.UILoad.active = !0, D.instance.isGuideSkinUnlock = 1, y.getScene().emit("GuideSkinUnlock"), 
                        localStorage.setItem("isGuideSkinUnlock", D.instance.isGuideSkinUnlock.toString()), 
                        D.instance.wxReportEvent(_.STEPS_51), this.onBackBtnClick());
                    }
                }, {
                    key: "showAntModel",
                    value: function(e) {
                        P.instance.loaderPlayer(e), N.renderImage(this.icon, new B(596, 280), P.instance.Player.getChildByName("camera").getComponent(C));
                    }
                }, {
                    key: "onVideoBtnClick",
                    value: function(e) {
                        var n = U;
                        N.playSound(T.BTNCLICK), D.instance.youMenDaDian(b.newGift_click);
                        var t = function() {
                            D.instance.giftVideoCount + 1 >= D.instance.targetGiftVideoCount || N.ShowUI("UIHint", null, null, 1, [ n[D.instance.giftVideoCount].roomType ], [ n[D.instance.giftVideoCount].count ]), 
                            D.instance.giftVideoCount++, localStorage.setItem("giftVideoCount", D.instance.giftVideoCount.toString()), 
                            this.changeVideoCountSpr(), D.instance.giftVideoCount + 1 >= D.instance.targetGiftVideoCount && this.getSkin(), 
                            D.instance.wxReportEvent(_.STEPS_50), D.instance.youMenDaDian(b.newGift_complete);
                        }.bind(this);
                        D.instance.shufenVideoID = 16 + D.instance.giftVideoCount, D.instance.watchVideo("", t);
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        N.playSound(T.BTNCLICK), D.instance.videoCounterTimeGo(), this.node.removeFromParent(), 
                        this.node.destroy(), N.cleanUnuseRes(), N.hideCustomAd(), N.showBanner(!1), D.instance.wxInterAdCount++, 
                        y.getScene().emit("SHOW_WX_INTERAD"), y.getScene().emit("Vivo_showBanner"), y.getScene().emit("MainNativeBannerOPPO", !0), 
                        y.getScene().emit("DestroyNativeItem"), D.instance.onShowBannerType(!0), y.getScene().emit("ShowNativeAdItem", new g(cc.winSize.width / 2 - 358, 200, 0));
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        this.rotateSpr.eulerAngles = this.rotateSpr.eulerAngles.add(new g(0, 0, 1)), this.rotateSpr1.eulerAngles = this.rotateSpr1.eulerAngles.add(new g(0, 0, 1));
                    }
                } ]), n;
            }()).prototype, "proValueSpr", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), W = t(G.prototype, "rotateSpr", [ x ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), q = t(G.prototype, "btnBack", [ R ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Y = t(G.prototype, "rotateSpr1", [ O ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), K = t(G.prototype, "icon", [ j ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), X = t(G.prototype, "videoBtn", [ L ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), J = t(G.prototype, "leftNode", [ z ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Q = t(G.prototype, "proNode", [ V ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Z = t(G.prototype, "hand", [ H ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), E = G)) || E)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIGuide.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./ShufenManager.js", "./Tools.js", "./DataManager.js" ], function(e, t) {
    var i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            i = e.applyDecoratedDescriptor, o = e.inherits, a = e.classCallCheck, s = e.possibleConstructorReturn, 
            r = e.getPrototypeOf, c = e.initializerDefineProperty, u = e.assertThisInitialized, 
            l = e.createClass, h = e.asyncToGenerator;
        }, function(e) {
            d = e.cclegacy, p = e._decorator, g = e.Node, f = e.Vec2, v = e.director, m = e.Vec3, 
            y = e.LabelComponent, B = e.tween, C = e.Component, I = e.AudioClip;
        }, function(e) {
            w = e.TIP_NEW_WORD, k = e.GUIDE_STEPS_DESC_NEW, b = e.GUIDE_STEPS_DESC, S = e.GUIDE_STEPS_SOUND;
        }, function(e) {
            _ = e.default;
        }, function(e) {
            T = e.Tools;
        }, function(e) {
            U = e.default;
        } ],
        execute: function() {
            d._RF.push({}, "93ceaIH0+hKCrJjImGhOY1d", "UIGuide", void 0), V = p.ccclass, H = p.property, 
            e("UIGuide", (N = V("UIGuide"), P = H(g), D = H(g), A = H(g), M = H(g), N((O = i((R = function(e) {
                function t() {
                    var e, n;
                    a(this, t);
                    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
                    return n = s(this, (e = r(t)).call.apply(e, [ this ].concat(o))), c(n, "msk", O, u(n)), 
                    c(n, "bg", j, u(n)), c(n, "hand", L, u(n)), c(n, "touch", z, u(n)), n.targetPos = new f(), 
                    n.handPos = new f(), n.handPara = 0, n._audioSourceComponent = null, n;
                }
                var i, d;
                return o(t, C), l(t, [ {
                    key: "onLoad",
                    value: function() {
                        v.getScene().on("CLOSE_GUIDE_UI", this.guideCallBack, this);
                    }
                }, {
                    key: "start",
                    value: function() {}
                }, {
                    key: "playGuideStepsSound",
                    value: (d = h(n.default.mark(function e(t) {
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                S[t].desc && (T._GuideAudioSourceComponent && (T._GuideAudioSourceComponent.stop(), 
                                T._GuideAudioSourceComponent = null), T.GuideStepPlaySound(S[t].desc));

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    })), function(e) {
                        return d.apply(this, arguments);
                    })
                }, {
                    key: "init",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new m(0, 0, 0), n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                        this.msk.setWorldPosition(e), this.msk.setContentSize(1e3, 1e3);
                        var a = null;
                        5 == o ? _.reportGuide("2", 1) : 6 == o ? _.reportGuide("2", 2) : 12 == o ? _.reportGuide("10", 1) : 13 == o && _.reportGuide("11", 1), 
                        o > 1e3 ? a = w[k[o - 1001].desc].desc : (this.playGuideStepsSound(o), a = b[o].desc), 
                        this.bg.getChildByName("descT").getComponent(y).string = a, this.hand.setWorldPosition(e), 
                        this.hand.active = n, this.msk.active = i, this.bg.active = t;
                        var s = 0;
                        1 == U.instance.guideSteps || 3 == U.instance.guideSteps || 4 == U.instance.guideSteps || 20 == U.instance.guideSteps || 5 == U.instance.guideSteps || 19 == U.instance.guideSteps ? this.hand.eulerAngles = new m(0, 0, 50) : this.hand.eulerAngles = new m(0, 0, 0), 
                        22 == U.instance.guideSteps ? (this.targetPos = new f(e.x + 200, e.y), this.handPos = new f(e.x + this.hand.width / 2 - 200, e.y - this.hand.height / 2), 
                        s = 500) : 7 == U.instance.guideSteps ? (s = 230, this.targetPos = new f(e.x - this.hand.width / 2, e.y), 
                        this.handPos = new f(e.x + this.hand.width, e.y - this.hand.height / 2)) : 11 == U.instance.guideSteps ? (this.targetPos = new f(0, 0), 
                        this.handPos = new f(e.x, e.y), s = 80) : (this.targetPos = new f(0, 0), this.handPos = new f(e.x, e.y), 
                        s = 200);
                        var r = new m(0, 0, 0);
                        r = 1 == U.instance.guideSteps ? new m(e.x + this.bg.width / 2 + 20, e.y + s / 2 + 70, 0) : 2.1 == U.instance.guideSteps ? new m(e.x + this.bg.width / 2 - 50, e.y + s / 2 + 70, 0) : 7 == U.instance.guideSteps ? new m(e.x + 70, e.y + s / 2 + 70, 0) : 20 == U.instance.guideSteps ? new m(e.x + 120, e.y + s / 2 + 70, 0) : 24 == U.instance.guideSteps || 29 == U.instance.guideSteps ? new m(e.x + this.bg.width / 2 + 60, e.y + s / 2 + 70, 0) : 27 == U.instance.guideSteps ? new m(e.x - 150, e.y + s / 2 + 70, 0) : 30 == U.instance.guideSteps || 43 == U.instance.guideSteps ? new m(e.x + 120, e.y + s / 2 + 70, 0) : new m(e.x, e.y + s / 2 + 70, 0), 
                        this.bg.setWorldPosition(r), B(this.msk).to(.2, {
                            width: s,
                            height: s
                        }).call(function() {}).start();
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e = 0;
                        0 == this.targetPos.y ? (this.handPara += .05, this.hand.eulerAngles.z > 0 ? (e = Math.abs(50 * Math.sin(this.handPara)) + 100, 
                        this.hand.setWorldPosition(this.handPos.x + e, this.handPos.y, 0)) : (e = Math.abs(70 * Math.sin(this.handPara)) + 50, 
                        this.hand.setWorldPosition(this.handPos.x + e, this.handPos.y - e, 0))) : (this.handPara += .03, 
                        this.handPara >= Math.PI / 2 && (this.handPara = 0), e = Math.abs(Math.sin(this.handPara) * f.distance(this.handPos, this.targetPos)), 
                        22 == U.instance.guideSteps ? this.hand.setWorldPosition(this.handPos.x + e, this.handPos.y, 0) : 7 == U.instance.guideSteps ? this.hand.setWorldPosition(this.handPos.x - e, this.handPos.y, 0) : this.hand.setWorldPosition(this.handPos.x + e, this.handPos.y + e, 0));
                    }
                }, {
                    key: "guideCallBack",
                    value: function() {
                        this.node.removeFromParent(), this.node.destroy();
                    }
                }, {
                    key: "playSound",
                    value: (i = h(n.default.mark(function e(t) {
                        var i;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (1 != U.instance.soundOpen) {
                                    e.next = 6;
                                    break;
                                }
                                return t = "sounds/" + t + ".mp3", e.next = 4, T.loadRes(t, I);

                              case 4:
                                i = e.sent, this._audioSourceComponent.clip = i, this._audioSourceComponent.clip.play();

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    })), function(e) {
                        return i.apply(this, arguments);
                    })
                } ]), t;
            }()).prototype, "msk", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), j = i(R.prototype, "bg", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), L = i(R.prototype, "hand", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), z = i(R.prototype, "touch", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), x = R)) || x)), d._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIHelpMe.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./ShufenManager.js", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.LabelComponent, g = e.SpriteComponent, 
            f = e.SpriteFrame, v = e.director, m = e.tween, y = e.Vec3, B = e.Component;
        }, function(e) {
            C = e.YOUMENG_EVENT, I = e.CUR_PLATFORM, w = e.PLATFORM_TYPE, k = e.SOUND_TYPE, 
            b = e.YOUEMNG_EVENT_ENUM;
        }, function(e) {
            S = e.default;
        }, function(e) {
            _ = e.Tools;
        }, function(e) {
            T = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "3e5fccigNhEjpS9f34BZ7Nx", "UIHelpMe", void 0), H = h.ccclass, E = h.property, 
            e("UIHelpMe", (U = H("UIHelpMe"), N = E(d), P = E(p), D = E(g), A = E(d), M = E(d), 
            U((O = t((R = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "btnBack", O, c(t)), 
                    r(t, "timeT", j, c(t)), r(t, "icon", L, c(t)), r(t, "hand", z, c(t)), r(t, "videoBtn", V, c(t)), 
                    t;
                }
                return i(n, B), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        var e = this;
                        T.instance.UILoad.active = !1, _.setImage(this.icon, "resTex/UIShop_bug" + T.instance.UIHelpBugID, f), 
                        v.getScene().on("DesCurShowUI", this.onBackBtnClick, this), T.instance.youMenDaDian(C.helpBugs_appear), 
                        S.reportCustom("4"), _.showBanner(!0), I == w.ANDROID_XiaoMi && (this.hand.active = this.videoBtn.active, 
                        m(this.hand).to(0, {}).call(function() {
                            e.hand.getChildByName("hand0").active = !0, e.hand.getChildByName("hand1").active = !1;
                        }).delay(.35).call(function() {
                            e.hand.getChildByName("hand0").active = !1, e.hand.getChildByName("hand1").active = !0;
                        }).delay(.35).union().repeatForever().start(), m(this.videoBtn).to(.5, {
                            scale: new y(1.1, 1.1, 1)
                        }).to(1, {
                            scale: new y(.9, .9, 1)
                        }).union().repeatForever().start()), I == w.WX ? _.showCustomAd() : this.btnBack.active = !0, 
                        T.instance.tryShowInterAd2();
                    }
                }, {
                    key: "onVideoBtnClick",
                    value: function() {
                        if (_.playSound(k.BTNCLICK), T.instance.nestRoomConfig.roomInfo[6].level <= 0) return T.instance.UIHintUnlockBtnType = 1, 
                        T.instance.UIHintUnlockType = 2, T.instance.UIHintUnlockIconT = "昆虫小屋", T.instance.UIHintUnlockDescT = "建造昆虫小屋后可以收容或者捕获昆虫，组建自己的昆虫军队", 
                        T.instance.UIHintUnlockIconUrl = "resTex/UIBuild_logo7", T.instance.UIHintUnlockBtnUrl = "resTex/UIHintUnlock_btn3", 
                        T.instance.UILoad.active = !0, void T.instance.showUI("prefabs/ui/UIHintUnlock");
                        for (var e = [], n = 0; n < T.instance.nestRoomConfig.bugIDs.length; n++) {
                            var t = T.instance.nestRoomConfig.bugIDs[n].id;
                            t > 1 && !T.instance.isSolderAnt(t) && e.push(t);
                        }
                        if (e.length >= T.instance.bagInfo.length) return T.instance.UIHintUnlockBtnType = 1, 
                        T.instance.UIHintUnlockType = 3, T.instance.UIHintUnlockIconT = "解锁空位", T.instance.UIHintUnlockDescT = "昆虫军队已经满啦，请先开启更多栏位", 
                        T.instance.UIHintUnlockIconUrl = "resTex/UISoldierAnt_lock2", T.instance.UIHintUnlockBtnUrl = "resTex/UIHintUnlock_btn4", 
                        T.instance.UILoad.active = !0, void T.instance.showUI("prefabs/ui/UIHintUnlock");
                        T.instance.youMengVideoClick = b.helpMe, T.instance.youMenDaDian(C.helpBugs_click), 
                        T.instance.isGetHelpBug = !0;
                        var i = function() {
                            T.instance.isGetHelpBug = !1, v.getScene().emit("UIHelpGetBug"), T.instance.UIHelpShowTime = 0, 
                            this.onBackBtnClick(), T.instance.youMenDaDian(C.helpBugs_complete);
                        }.bind(this);
                        T.instance.shufenVideoID = 29, T.instance.watchVideo("", i);
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        _.playSound(k.BTNCLICK), T.instance.isShowUIHelpMe = !1, v.getScene().emit("showHelpMeOpenDis"), 
                        this.node.removeFromParent(), this.node.destroy(), _.cleanUnuseRes(), _.hideCustomAd(), 
                        _.showBanner(!1), T.instance.wxInterAdCount++, v.getScene().emit("SHOW_WX_INTERAD"), 
                        v.getScene().emit("Vivo_showBanner"), v.getScene().emit("MainNativeBannerOPPO", !0), 
                        v.getScene().emit("DestroyNativeItem"), T.instance.onShowBannerType(!0), v.getScene().emit("ShowNativeAdItem", new y(cc.winSize.width / 2 - 358, 200, 0));
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        var n, t, i = Math.floor(T.instance.UIHelpShowTime / 60), o = Math.floor(T.instance.UIHelpShowTime - 60 * i);
                        n = i < 10 ? "0" + i + ":" : i + ":", t = o < 10 ? "0" + o : o + "", this.timeT.string = n + t;
                    }
                } ]), n;
            }()).prototype, "btnBack", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), j = t(R.prototype, "timeT", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), L = t(R.prototype, "icon", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), z = t(R.prototype, "hand", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), V = t(R.prototype, "videoBtn", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), x = R)) || x)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIHint.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.LabelComponent, g = e.SpriteComponent, 
            f = e.SpriteFrame, v = e.Component;
        }, function(e) {
            m = e.CUR_PLATFORM, y = e.PLATFORM_TYPE, B = e.HINT_INFO, C = e.SOUND_TYPE, I = e.MUSHROOM_ROOM_INFO, 
            w = e.YOUMENG_EVENT, k = e.LEAF_ROOM_INFO, b = e.NUT_ROOM_INFO, S = e.PART_ROOM_INFO;
        }, function(e) {
            _ = e.Tools;
        }, function(e) {
            T = e.GameManager;
        }, function(e) {
            U = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "01464p9BEdEpoVwTBV2/m3J", "UIHint", void 0), x = h.ccclass, R = h.property, 
            e("UIHint", (N = x("UIHint"), P = R(d), N((M = t((A = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "itemArray", M, c(t)), 
                    t.index = [], t.awardCount = [], t.showCount = 0, t;
                }
                return i(n, v), u(n, [ {
                    key: "start",
                    value: function() {
                        T.instance.btnJumpOpen(this.node.getChildByName("getBtn"), -110, -110), m == y.OPPO ? U.instance.isShowOppoBanner : m == y.VIVO ? _.showBanner(!0) : m == y.QQ ? _.showBanner(!0) : m == y.WX ? this.scheduleOnce(function() {}, .5) : m == y.HW ? _.showBanner(!0) : m == y.iOS ? _.showBanner(!0) : m == y.ANDROID_TAP ? _.showBanner(!0) : m == y.ANDROID_HW && _.showBanner(!0);
                    }
                }, {
                    key: "init",
                    value: function(e, n, t) {
                        for (var i = 0; i < e; i++) {
                            var o = this.itemArray[i], a = o.getChildByName("countT").getComponent(p);
                            o.active = !0, this.index = n, this.awardCount = t, _.setImage(o.getChildByName("spr").getComponent(g), B[n[i]].logoUrl, f), 
                            a.string = "+" + t[i], 1 == e ? o.setPosition(0, 140, 0) : 2 == e ? 0 == i ? o.setPosition(-120, 140, 0) : o.setPosition(120, 140, 0) : 3 == e ? o.setPosition(180 * i - 180, 140, 0) : 4 == e && o.setPosition(160 * i - 240, 140, 0);
                        }
                        this.showCount = e;
                    }
                }, {
                    key: "onGetBtnClick",
                    value: function(e) {
                        var n = this;
                        _.playSound(C.BTNCLICK), e.target.position.y < -110 || (this.node.active = !1, this.returnRewardType(), 
                        _.showBanner(!1), T.instance.desNativeBanner(), this.scheduleOnce(function() {
                            U.instance.videoCounterTimeGo(), n.node.removeFromParent(), n.node.destroy(), _.cleanUnuseRes();
                        }, 2));
                    }
                }, {
                    key: "returnRewardType",
                    value: function() {
                        for (var e = 0; e < this.showCount; e++) {
                            var n = this.awardCount[e], t = this.index[e];
                            switch (t) {
                              case 0:
                                -1 != U.instance.curMode.indexOf("PVE") && U.instance.getFoodAni("mushroomPro", "mushroomSpr", "resTex/UIMain_mogu", this.itemArray[0], this.node.parent, this, 3), 
                                U.instance.updateFoodsCount(n, t, 0, I), U.instance.youMenDaDian(w.getagaric);
                                break;

                              case 1:
                                -1 != U.instance.curMode.indexOf("PVE") && U.instance.getFoodAni("leafPro", "leafSpr", "resTex/UIMain_yezi", this.itemArray[1], this.node.parent, this, 3), 
                                U.instance.updateFoodsCount(n, t, 1, k), U.instance.youMenDaDian(w.getLeaf);
                                break;

                              case 2:
                                -1 != U.instance.curMode.indexOf("PVE") && U.instance.getFoodAni("nutPro", "nutSpr", "resTex/UIMain_jianguo", this.itemArray[2], this.node.parent, this, 3), 
                                U.instance.updateFoodsCount(n, t, 2, b), U.instance.youMenDaDian(w.getnut);
                                break;

                              case 3:
                                -1 != U.instance.curMode.indexOf("PVE") && U.instance.getFoodAni("partPro", "partSpr", "resTex/UIMain_rou", this.itemArray[3], this.node.parent, this, 3), 
                                U.instance.updateFoodsCount(n, t, 5, S), U.instance.youMenDaDian(w.getInsect_part);
                                break;

                              case 4:
                                -1 != U.instance.curMode.indexOf("PVE") && U.instance.awardTypeAni(5, this.itemArray[0], this.node.parent, this), 
                                U.instance.awardTypeCount(5, n), U.instance.youMenDaDian(w.getGem);
                                break;

                              case 5:
                                -1 != U.instance.curMode.indexOf("PVE") && U.instance.awardTypeAni(6, this.itemArray[0], this.node.parent, this), 
                                U.instance.awardTypeCount(6, n), U.instance.youMenDaDian(w.getflower);
                            }
                        }
                    }
                } ]), n;
            }()).prototype, "itemArray", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), D = A)) || D)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIHintBug.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.Node, g = e.SpriteFrame, 
            f = e.Vec3, v = e.Component;
        }, function(e) {
            m = e.CUR_PLATFORM, y = e.PLATFORM_TYPE, B = e.SOUND_TYPE;
        }, function(e) {
            C = e.Tools;
        }, function(e) {
            I = e.GameManager;
        }, function(e) {
            w = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "54f61ujpNFHgrWio2MbmEIy", "UIHintBug", void 0), P = h.ccclass, D = h.property, 
            e("UIHintBug", (k = P("UIHintBug"), b = D(d), S = D(p), k((U = t((T = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "logo", U, c(t)), 
                    r(t, "rotateSpr", N, c(t)), t;
                }
                return i(n, v), u(n, [ {
                    key: "start",
                    value: function() {
                        m == y.OPPO ? w.instance.isShowOppoBanner : m == y.VIVO ? C.showBanner(!0) : m == y.QQ ? C.showBanner(!0) : m == y.WX ? this.scheduleOnce(function() {}, .5) : m == y.HW ? C.showBanner(!0) : m == y.iOS ? C.showBanner(!0) : m == y.ANDROID_TAP ? C.showBanner(!0) : m == y.ANDROID_HW && C.showBanner(!0);
                    }
                }, {
                    key: "init",
                    value: function(e) {
                        C.setImage(this.logo, "resTex/UIShop_bug" + e, g);
                    }
                }, {
                    key: "onGetBtnClick",
                    value: function(e) {
                        C.playSound(B.BTNCLICK), this.node.removeFromParent(), this.node.destroy(), C.cleanUnuseRes(), 
                        C.showBanner(!1), I.instance.desNativeBanner();
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.rotateSpr.eulerAngles = this.rotateSpr.eulerAngles.add(new f(0, 0, 1));
                    }
                } ]), n;
            }()).prototype, "logo", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), N = t(T.prototype, "rotateSpr", [ S ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), _ = T)) || _)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIHintUnlock.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.LabelComponent, p = e.SpriteComponent, g = e.Node, 
            f = e.tween, v = e.Vec3, m = e.SpriteFrame, y = e.director, B = e.Component;
        }, function(e) {
            C = e.CUR_PLATFORM, I = e.PLATFORM_TYPE, w = e.YOUMENG_EVENT, k = e.SOUND_TYPE, 
            b = e.YOUEMNG_EVENT_ENUM;
        }, function(e) {
            S = e.Tools;
        }, function(e) {
            _ = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "dd0351pRZRG77NxqOYuimbo", "UIHintUnlock", void 0), E = h.ccclass, 
            G = h.property, e("UIHintUnlock", (T = E("UIHintUnlock"), U = G(d), N = G(d), P = G(p), 
            D = G(p), A = G(g), M = G(g), T((O = t((R = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "iconT", O, c(t)), 
                    r(t, "descT", j, c(t)), r(t, "icon", L, c(t)), r(t, "btn", z, c(t)), r(t, "leftNode", V, c(t)), 
                    r(t, "hand", H, c(t)), t;
                }
                return i(n, B), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        var e = this;
                        C == I.TT && (this.leftNode.active = !1, this.node.getChildByName("backBtn").active = !0), 
                        C == I.ANDROID_XiaoMi && (S.showBanner(!0), this.hand.active = this.btn.node.active, 
                        f(this.hand).to(0, {}).call(function() {
                            e.hand.getChildByName("hand0").active = !0, e.hand.getChildByName("hand1").active = !1;
                        }).delay(.35).call(function() {
                            e.hand.getChildByName("hand0").active = !1, e.hand.getChildByName("hand1").active = !0;
                        }).delay(.35).union().repeatForever().start(), f(this.btn.node).to(.5, {
                            scale: new v(1.1, 1.1, 1)
                        }).to(1, {
                            scale: new v(.9, .9, 1)
                        }).union().repeatForever().start()), this.leftNode.setPosition(-cc.winSize.width / 2, 0, 0), 
                        _.instance.shiPeiUIBackBtn(this.leftNode.getChildByName("backBtn")), _.instance.UILoad.active = !1, 
                        this.iconT.string = _.instance.UIHintUnlockIconT, this.descT.string = _.instance.UIHintUnlockDescT, 
                        S.setImage(this.icon, "" + _.instance.UIHintUnlockIconUrl, m), S.setImage(this.btn, "" + _.instance.UIHintUnlockBtnUrl, m), 
                        C == I.OPPO ? _.instance.isShowOppoBanner : C == I.VIVO && S.showBanner(!0), C == I.iOS && _.instance.guideSteps > 30 ? (1 == S.getRandomInt(1, 2) && window.NativeCtrl.showInsertitiald(), 
                        S.showBanner(!0)) : C == I.QQ ? S.showBanner(!0) : C == I.WX ? _.instance.wxBannerWuChuOpen || this.scheduleOnce(function() {
                            S.showBanner(!0);
                        }, .5) : C == I.HW ? S.showBanner(!0) : C == I.ANDROID_TAP ? S.showBanner(!0) : C == I.ANDROID_HW ? S.showBanner(!0) : C == I.WX && S.showBanner(!0), 
                        -1 != _.instance.UIHintUnlockIconT.indexOf("召唤超级昆虫") ? this.icon.node.setScale(.9, .9, .9) : this.icon.node.setScale(2, 2, 2), 
                        -1 != _.instance.UIHintUnlockIconT.indexOf("召唤超级昆虫") && _.instance.youMenDaDian(w.tipsBuyBug_appear);
                    }
                }, {
                    key: "onBtnClick",
                    value: function() {
                        if (S.playSound(k.BTNCLICK), 0 == _.instance.UIHintUnlockBtnType) {
                            -1 != _.instance.UIHintUnlockIconT.indexOf("召唤超级昆虫") && (_.instance.youMengVideoClick = b.hintUnlock_bug, 
                            _.instance.youMenDaDian(w.tipsBuyBug_click)), -1 != _.instance.UIHintUnlockIconT.indexOf("解锁空位") && (_.instance.youMengVideoClick = b.junDui, 
                            _.instance.youMenDaDian(w.checkUnlock_click));
                            var e = function() {
                                y.getScene().emit("LookVideoUnlock"), this.onBackBtnClick();
                            }.bind(this);
                            _.instance.shufenVideoID = 35, _.instance.watchVideo("", e), console.log("提示框看视频");
                        } else {
                            switch (_.instance.UIHintUnlockType) {
                              case 0:
                                y.getScene().emit("ResBtnJump");
                                break;

                              case 1:
                                y.getScene().emit("JinHuaBtnJump");
                                break;

                              case 2:
                                y.getScene().emit("XiaoWuBtnJump"), y.getScene().emit("DesCurShowUI");
                                break;

                              case 3:
                                y.getScene().emit("SoldierAntBtnJump"), y.getScene().emit("DesCurShowUI");
                                break;

                              case 4:
                                y.getScene().emit("QueenAntBtnJump"), y.getScene().emit("DesCurShowUI");
                                break;

                              case 5:
                                y.getScene().emit("MushRoomBtnJump"), y.getScene().emit("DesCurShowUI");
                            }
                            console.log("提示框看跳转"), this.onBackBtnClick();
                        }
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        S.playSound(k.BTNCLICK), this.node.removeFromParent(), this.node.destroy(), S.showBanner(!1), 
                        S.cleanUnuseRes(), y.getScene().emit("Vivo_showBanner"), y.getScene().emit("MainNativeBannerOPPO", !0), 
                        y.getScene().emit("DestroyNativeItem"), y.getScene().emit("ShowNativeAdItem", new v(cc.winSize.width / 2 - 358, 200, 0));
                    }
                } ]), n;
            }()).prototype, "iconT", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), j = t(R.prototype, "descT", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), L = t(R.prototype, "icon", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), z = t(R.prototype, "btn", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), V = t(R.prototype, "leftNode", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), H = t(R.prototype, "hand", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), x = R)) || x)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIHuTuiItem.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.LabelComponent, g = e.Component;
        }, function(e) {
            f = e.CUR_PLATFORM, v = e.PLATFORM_TYPE;
        }, function(e) {
            m = e.Tools;
        } ],
        execute: function() {
            l._RF.push({}, "4509aVcjrVK4ZPcfpD40N6u", "UIHuTuiItem", void 0), S = h.ccclass, 
            _ = h.property, e("UIHuTuiItem", (y = S("UIHuTuiItem"), B = _(d), C = _(p), y((k = t((w = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "icon", k, c(t)), 
                    r(t, "nameT", b, c(t)), t.myData = null, t;
                }
                return i(n, g), u(n, [ {
                    key: "refreshItem",
                    value: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (this.myData = e, this.node.getChildByName("logo1").active = n, f == v.WX) {
                            var t = "";
                            -1 != (t = this.myData.iconUrl).indexOf("png") ? m.setImage(this.icon, t, "png") : m.setImage(this.icon, t, "jpg");
                        }
                        e.txt.length > 5 ? this.nameT.string = e.txt.slice(0, 5) + "...." : this.nameT.string = e.txt;
                    }
                }, {
                    key: "onIconClick",
                    value: function() {
                        m.NavigateToGame(this.myData, null, null);
                    }
                } ]), n;
            }()).prototype, "icon", [ B ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), b = t(w.prototype, "nameT", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), I = w)) || I)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIHuTui.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Hts.js", "./Tools.js", "./DataManager.js", "./UIHuTuiItem.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.tween, g = e.Vec3, f = e.loader, 
            v = e.Prefab, m = e.instantiate, y = e.ScrollViewComponent, B = e.Component;
        }, function(e) {
            C = e.SOUND_TYPE;
        }, function(e) {
            I = e.hts;
        }, function(e) {
            w = e.Tools;
        }, function(e) {
            k = e.default;
        }, function(e) {
            b = e.UIHuTuiItem;
        } ],
        execute: function() {
            l._RF.push({}, "3aa16DARwhIu65Yz6zmJ+rX", "UIHuTui", void 0), x = h.ccclass, R = h.property, 
            e("UIHuTui", (S = x("UIHuTui"), _ = R(d), T = R(d), U = R(d), S((D = t((P = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "backBtn", D, c(t)), 
                    r(t, "content", A, c(t)), r(t, "bg", M, c(t)), t.items = [], t;
                }
                return i(n, B), u(n, [ {
                    key: "start",
                    value: function() {
                        this.schedule(this.createHuTuiItem, 1), this.createHuTuiItem(), this.bg.setPosition(cc.winSize.width / 2, 0, 0), 
                        this.init();
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        p(this.bg).to(.3, {
                            position: new g(cc.winSize.width / 2 - 462, 0, 0)
                        }).call(function() {
                            e.backBtn.active = !0;
                        }).start();
                    }
                }, {
                    key: "createHuTuiItem",
                    value: function() {
                        var e = this;
                        k.instance.isInitHuTuiSdk && (this.unschedule(this.createHuTuiItem), I.getBox("6013e811eaf49a4c5f0247b5", function(n, t) {
                            console.log("互推数据：", t);
                            var i = 0;
                            f.loadRes("prefabs/ui/UIHuTuiItem", v, function(n, o) {
                                for (var a = 0; a < t.length; a++) {
                                    var s = t[a], r = m(o), c = r.getComponent(b), u = a % 3 * 146 - 146, l = 180 * -parseInt((a / 3).toString()) - 96;
                                    i = l, e.content.addChild(r), c.node.setPosition(u, l, 0);
                                    for (var h = 0; h < s.length; h++) {
                                        var d = s[h];
                                        c.refreshItem(d, -1 != d.mark.indexOf("热门"));
                                    }
                                    e.items.push(c.node);
                                }
                                e.content.height = Math.abs(i) + 133.5 - 40, e.content.parent.parent.getComponent(y).scrollToBottom(8, !1), 
                                e.schedule(e.itemEffect, 8);
                            });
                        }));
                    }
                }, {
                    key: "itemEffect",
                    value: function() {
                        this.content.parent.parent.getComponent(y).scrollToTop(0, !1), this.content.parent.parent.getComponent(y).scrollToBottom(8, !1);
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        w.playSound(C.BTNCLICK), this.node.removeFromParent(), this.node.destroy(), w.cleanUnuseRes();
                    }
                } ]), n;
            }()).prototype, "backBtn", [ _ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), A = t(P.prototype, "content", [ T ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), M = t(P.prototype, "bg", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), N = P)) || N)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIHuTuiIcon.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.LabelComponent, g = e.Node, 
            f = e.tween, v = e.Vec3, m = e.Component;
        }, function(e) {
            y = e.Tools;
        }, function(e) {
            B = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "220e7f+s25NTKMA7qbg9+f3", "UIHuTuiIcon", void 0), N = h.ccclass, 
            P = h.property, e("UIHuTuiIcon", (C = N("UIHuTuiIcon"), I = P(d), w = P(p), k = P(g), 
            C((_ = t((S = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "icon", _, c(t)), 
                    r(t, "nameT", T, c(t)), r(t, "logo", U, c(t)), t.index = 0, t.data = null, t;
                }
                return i(n, m), u(n, [ {
                    key: "start",
                    value: function() {
                        this.init(), B.instance.wxHuTuiIcon = this.node;
                    }
                }, {
                    key: "setPos",
                    value: function(e) {
                        this.node.setPosition(e);
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        console.log("互推init"), hzzxsdk.getRewardedAdList(!1, 0, 0).then(function(n) {
                            e.data = n, e.index = y.getRandomInt(0, n.length - 1), console.log("获取激励视频广告列表:", n), 
                            e.refreshItem(), setInterval(function() {
                                e.refreshItem();
                            }, 3e3);
                        });
                    }
                }, {
                    key: "refreshItem",
                    value: function() {
                        var e = this;
                        this.node.active = !0;
                        var n = this.data[this.index];
                        n.title.length > 6 ? this.nameT.string = n.title.slice(0, 5) + "...." : this.nameT.string = n.title, 
                        -1 != n.icon.indexOf("png") ? y.setImage(this.icon, n.icon, "png") : y.setImage(this.icon, n.icon, "jpg"), 
                        f(this.node).to(.1, {
                            eulerAngles: new v(0, 0, 35)
                        }).call(function() {
                            f(e.node).to(.1, {
                                eulerAngles: new v(0, 0, -35)
                            }).call(function() {
                                f(e.node).to(.1, {
                                    eulerAngles: new v(0, 0, 15)
                                }).call(function() {
                                    f(e.node).to(.1, {
                                        eulerAngles: new v(0, 0, -20)
                                    }).call(function() {
                                        f(e.node).to(.1, {
                                            eulerAngles: new v(0, 0, 0)
                                        }).call(function() {}).start();
                                    }).start();
                                }).start();
                            }).start();
                        }).start(), this.index++, this.index > this.data.length - 1 && (this.index = 0);
                    }
                }, {
                    key: "onIconClick",
                    value: function() {
                        var e = 0;
                        this.index > 0 ? e = this.index - 1 : 0 == this.index && (e = this.data.length - 1), 
                        hzzxsdk.clickAndNavigate(this.data[e]).then(function(e) {
                            console.log("跳转是否成功 = ", e.navigateTo), console.log("是否是第一次点击 = ", e.isFristClick);
                        });
                    }
                }, {
                    key: "hideNode",
                    value: function() {
                        this.node.active = !1;
                    }
                } ]), n;
            }()).prototype, "icon", [ I ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), T = t(S.prototype, "nameT", [ w ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), U = t(S.prototype, "logo", [ k ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), b = S)) || b)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIHwHint.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h;
    return e({
        _dec: void 0,
        _class: void 0
    }), {
        setters: [ function(e) {
            t = e.inherits, i = e.createClass, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf;
        }, function(e) {
            r = e.cclegacy, c = e._decorator, u = e.Component;
        } ],
        execute: function() {
            r._RF.push({}, "30506tYt8pGPbdS3rECcL2m", "UIHwHint", void 0), h = c.ccclass, c.property, 
            e("UIHwHint", h("UIHwHint")(l = function(e) {
                function n() {
                    return o(this, n), a(this, s(n).apply(this, arguments));
                }
                return t(n, u), i(n, [ {
                    key: "onLoad",
                    value: function() {}
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        hbs.exitApplication({
                            success: function() {
                                console.log("exitApplication success");
                            },
                            fail: function() {
                                console.log("exitApplication fail");
                            },
                            complete: function() {
                                console.log("exitApplication complete");
                            }
                        });
                    }
                } ]), n;
            }()) || l), r._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIKongTou.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W, q, Y, K, X, J, Q, Z, $, ee, ne, te, ie, oe, ae;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _dec9: void 0,
        _dec10: void 0,
        _dec11: void 0,
        _dec12: void 0,
        _dec13: void 0,
        _dec14: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _descriptor8: void 0,
        _descriptor9: void 0,
        _descriptor10: void 0,
        _descriptor11: void 0,
        _descriptor12: void 0,
        _descriptor13: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.SpriteComponent, g = e.LabelComponent, 
            f = e.tween, v = e.Vec3, m = e.SpriteFrame, y = e.director, B = e.Component;
        }, function(e) {
            C = e.CUR_PLATFORM, I = e.PLATFORM_TYPE, w = e.MAIDIAN_STEPS, k = e.SOUND_TYPE, 
            b = e.YOUMENG_EVENT, S = e.YOUEMNG_EVENT_ENUM;
        }, function(e) {
            _ = e.Tools;
        }, function(e) {
            T = e.GameManager;
        }, function(e) {
            U = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "8400c6/uHNGELxVvfXATNze", "UIKongTou", void 0), oe = h.ccclass, 
            ae = h.property, e("UIKongTou", (N = oe("UIKongTou"), P = ae(d), D = ae(d), A = ae(p), 
            M = ae(g), x = ae(g), R = ae(d), O = ae(d), j = ae(p), L = ae(d), z = ae(d), V = ae(d), 
            H = ae(d), E = ae(d), N((W = t((F = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "noBtn", W, c(t)), 
                    r(t, "videoBtn", q, c(t)), r(t, "icon", Y, c(t)), r(t, "descT", K, c(t)), r(t, "countT", X, c(t)), 
                    r(t, "rotateSpr", J, c(t)), r(t, "backBtn", Q, c(t)), r(t, "proValueSpr", Z, c(t)), 
                    r(t, "pageCom", $, c(t)), r(t, "page_qq", ee, c(t)), r(t, "pageBG", ne, c(t)), r(t, "backBtnQQ", te, c(t)), 
                    r(t, "hand", ie, c(t)), t.rand_qq = 0, t.wxWuChuBackBtnOpen = !1, t;
                }
                return i(n, B), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        var e = this;
                        T.instance.randomKongTouInfo(), C == I.TT && (this.backBtn.active = !0, this.noBtn.active = !1), 
                        C == I.ANDROID_XiaoMi && (_.showBanner(!0), this.hand.active = !0, f(this.hand).to(0, {}).call(function() {
                            e.hand.getChildByName("hand0").active = !0, e.hand.getChildByName("hand1").active = !1;
                        }).delay(.35).call(function() {
                            e.hand.getChildByName("hand0").active = !1, e.hand.getChildByName("hand1").active = !0;
                        }).delay(.35).union().repeatForever().start(), f(this.videoBtn).to(.5, {
                            scale: new v(1.1, 1.1, 1)
                        }).to(1, {
                            scale: new v(.9, .9, 1)
                        }).union().repeatForever().start()), C == I.QQ ? (U.instance.qqBannerWuChuOpen ? (this.rand_qq = _.getRandomInt(1, 10), 
                        U.instance.qqWuChuConfig && this.rand_qq <= U.instance.qqWuChuConfig.KONGTOU_RAND ? (this.page_qq.active = !1, 
                        this.pageCom.active = !0, this.pageBG.setPosition(0, 0, 0)) : (this.pageCom.active = !1, 
                        this.page_qq.active = !0, this.pageBG.setPosition(0, -70, 0))) : (this.pageCom.active = !0, 
                        this.pageBG.setPosition(0, 0, 0)), U.instance.qqWuChuConfig && this.scheduleOnce(function() {
                            e.backBtnQQ.active = !0;
                        }, U.instance.qqWuChuConfig.KONGTOU_BACK_TIME)) : C == I.iOS && U.instance.guideSteps > 30 ? (window.NativeCtrl.showInsertitiald(), 
                        _.showBanner(!0)) : C == I.WX ? (_.showCustomAd(), U.instance.isShowHuTuiIcon2 && _.showWxHuTuiIcon(2)) : C == I.TT && _.showBanner(!0), 
                        U.instance.tryShowInterAd2();
                    }
                }, {
                    key: "start",
                    value: function() {
                        C == I.OPPO ? (U.instance.isShowOppoBanner, T.instance.showNativeAdItem(new v(cc.winSize.width / 2 - 86, -270, 0))) : C == I.VIVO ? _.showBanner(!0) : C == I.QQ && U.instance.qqWuChuConfig ? (U.instance.qqBannerWuChuOpen || this.rand_qq <= U.instance.qqWuChuConfig.KONGTOU_RAND) && (this.pageCom.active || _.showBanner(!0)) : C == I.WX ? U.instance.wxBannerWuChuOpen || _.showBanner(!0) : C == I.HW ? _.showBanner(!0) : C == I.ANDROID_TAP ? _.showBanner(!0) : C == I.ANDROID_HW && _.showBanner(!0), 
                        U.instance.UILoad.active = !1, this.init(), this.schedule(this.qqSubProValue, .05);
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this.changeIcon(U.instance.kongTouConfigIndex);
                        _.setImage(this.icon, e, m), this.kongTouYouMengEvent(), this.descT.string = U.instance.kongTouConfig[U.instance.kongTouConfigIndex].desc, 
                        this.countT.string = "+" + U.instance.kongTouAwardCount;
                    }
                }, {
                    key: "qqSubProValue",
                    value: function() {
                        this.page_qq.active && this.proValueSpr.fillRange > 0 && (this.proValueSpr.fillRange -= .01);
                    }
                }, {
                    key: "onVideoBtnClick",
                    value: function() {
                        this.kongTouClickYouMengEvent();
                        var e = this, n = function() {
                            U.instance.isUpdateKongTouInfo = !0, y.getScene().emit("HideKongTouBtn"), U.instance.kongTouShowCount--, 
                            localStorage.setItem("kongTouShowCount", U.instance.kongTouShowCount.toString()), 
                            console.log("空投资源奖励：", U.instance.kongTouConfigIndex + 1), U.instance.awardTypeCount(U.instance.kongTouConfigIndex + 1, U.instance.kongTouAwardCount), 
                            U.instance.awardTypeAni(U.instance.kongTouConfigIndex + 1, e.videoBtn, e.node.parent, e), 
                            e.node.setPosition(0, 2999, 0), _.showBanner(!1), T.instance.desNativeBanner(), 
                            U.instance.wxReportEvent(w.STEPS_46), e.kongTouCompleteYouMengEvent(), e.scheduleOnce(function() {
                                e.onNoBtnClick();
                            }, 1);
                        }.bind(this);
                        U.instance.shufenVideoID = 33, U.instance.watchVideo("", n);
                    }
                }, {
                    key: "onQQWuChuBtnClick",
                    value: function() {
                        var e = this;
                        _.playSound(k.BTNCLICK), this.proValueSpr.fillRange += .1, this.proValueSpr.fillRange >= .7 && (_.showBanner(!0), 
                        U.instance.isUpdateKongTouInfo = !0, y.getScene().emit("HideKongTouBtn"), U.instance.kongTouShowCount--, 
                        localStorage.setItem("kongTouShowCount", U.instance.kongTouShowCount.toString()), 
                        console.log("空投资源奖励：", U.instance.kongTouConfigIndex + 1), U.instance.awardTypeCount(U.instance.kongTouConfigIndex + 1, U.instance.kongTouAwardCount), 
                        U.instance.awardTypeAni(U.instance.kongTouConfigIndex + 1, this.page_qq.getChildByName("icon"), this.node.parent, this), 
                        this.node.setPosition(0, 2999, 0), T.instance.desNativeBanner(), U.instance.wxReportEvent(w.STEPS_46), 
                        this.scheduleOnce(function() {
                            e.onNoBtnClick();
                        }, 1));
                    }
                }, {
                    key: "onNoBtnClick",
                    value: function() {
                        if (_.playSound(k.BTNCLICK), C == I.QQ) {
                            if (U.instance.qqWuChuConfig && 1 == U.instance.qqWuChuConfig.VIDEO_OPEN && U.instance.qqBannerWuChuOpen) {
                                var e = function() {}.bind(this);
                                U.instance.watchVideo("", e);
                            }
                        } else C != I.WX || this.wxWuChuBackBtnOpen || U.instance.wxMaiLiangWuChuData && U.instance.wuchuOpen;
                        U.instance.videoCounterTimeGo(), this.node.removeFromParent(), this.node.destroy(), 
                        _.cleanUnuseRes(), _.hideCustomAd(), _.showBanner(!1), T.instance.desNativeBanner(), 
                        U.instance.wxInterAdCount++, y.getScene().emit("SHOW_WX_INTERAD"), y.getScene().emit("Vivo_showBanner"), 
                        y.getScene().emit("MainNativeBannerOPPO", !0), y.getScene().emit("DestroyNativeItem"), 
                        U.instance.onShowBannerType(!0), y.getScene().emit("ShowNativeAdItem", new v(cc.winSize.width / 2 - 358, 200, 0)), 
                        U.instance.isUpdateKongTouInfo = !0, U.instance.isShowUIKongTou = !1, y.getScene().emit("HideKongTouBtn");
                    }
                }, {
                    key: "changeIcon",
                    value: function(e) {
                        switch (e) {
                          case 0:
                            return "resTex/UIResLogo_1";

                          case 1:
                            return "resTex/UIResLogo_2";

                          case 2:
                            return "resTex/UIResLogo_3";

                          case 3:
                            return "resTex/UIResLogo_4";

                          case 4:
                            return "resTex/UIResLogo_5";

                          case 5:
                            return "resTex/UIResLogo_6";
                        }
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.rotateSpr.eulerAngles = this.rotateSpr.eulerAngles.add(new v(0, 0, 1));
                    }
                }, {
                    key: "kongTouYouMengEvent",
                    value: function() {
                        switch (U.instance.kongTouConfigIndex) {
                          case 0:
                            U.instance.youMenDaDian(b.kongtou_agaric_appear);
                            break;

                          case 1:
                            U.instance.youMenDaDian(b.kongtou_leaf_appear);
                            break;

                          case 2:
                            U.instance.youMenDaDian(b.kongtou_nut_appear);
                            break;

                          case 3:
                            U.instance.youMenDaDian(b.kongtou_insect_part_appear);
                            break;

                          case 4:
                            U.instance.youMenDaDian(b.kongtou_gem_appear);
                            break;

                          case 5:
                            U.instance.youMenDaDian(b.kongtou_flower_appear);
                        }
                    }
                }, {
                    key: "kongTouClickYouMengEvent",
                    value: function() {
                        switch (U.instance.kongTouConfigIndex) {
                          case 0:
                            U.instance.youMengVideoClick = S.kongTou_mushroom, U.instance.youMenDaDian(b.kongtou_agaric_click);
                            break;

                          case 1:
                            U.instance.youMengVideoClick = S.kongTou_leaf, U.instance.youMenDaDian(b.kongtou_leaf_click);
                            break;

                          case 2:
                            U.instance.youMengVideoClick = S.kongTou_nut, U.instance.youMenDaDian(b.kongtou_nut_click);
                            break;

                          case 3:
                            U.instance.youMengVideoClick = S.kongTou_part, U.instance.youMenDaDian(b.kongtou_insect_part_click);
                            break;

                          case 4:
                            U.instance.youMengVideoClick = S.kongTou_jewel, U.instance.youMenDaDian(b.kongtou_gem_click);
                            break;

                          case 5:
                            U.instance.youMengVideoClick = S.kongTou_flower, U.instance.youMenDaDian(b.kongtou_flower_click);
                        }
                    }
                }, {
                    key: "kongTouCompleteYouMengEvent",
                    value: function() {
                        switch (U.instance.kongTouConfigIndex) {
                          case 0:
                            U.instance.youMenDaDian(b.kongtou_agaric_complete);
                            break;

                          case 1:
                            U.instance.youMenDaDian(b.kongtou_leaf_complete);
                            break;

                          case 2:
                            U.instance.youMenDaDian(b.kongtou_nut_complete);
                            break;

                          case 3:
                            U.instance.youMenDaDian(b.kongtou_insect_part_complete);
                            break;

                          case 4:
                            U.instance.youMenDaDian(b.kongtou_gem_complete);
                            break;

                          case 5:
                            U.instance.youMenDaDian(b.kongtou_flower_complete);
                        }
                    }
                } ]), n;
            }()).prototype, "noBtn", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), q = t(F.prototype, "videoBtn", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Y = t(F.prototype, "icon", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), K = t(F.prototype, "descT", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), X = t(F.prototype, "countT", [ x ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), J = t(F.prototype, "rotateSpr", [ R ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Q = t(F.prototype, "backBtn", [ O ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Z = t(F.prototype, "proValueSpr", [ j ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), $ = t(F.prototype, "pageCom", [ L ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ee = t(F.prototype, "page_qq", [ z ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ne = t(F.prototype, "pageBG", [ V ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), te = t(F.prototype, "backBtnQQ", [ H ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ie = t(F.prototype, "hand", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), G = F)) || G)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UILaborDay.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, t) {
    var i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            i = e.applyDecoratedDescriptor, o = e.inherits, a = e.classCallCheck, s = e.possibleConstructorReturn, 
            r = e.getPrototypeOf, c = e.initializerDefineProperty, u = e.assertThisInitialized, 
            l = e.createClass, h = e.asyncToGenerator;
        }, function(e) {
            d = e.cclegacy, p = e._decorator, g = e.Node, f = e.SpriteComponent, v = e.CameraComponent, 
            m = e.Vec3, y = e.Vec2, B = e.SpriteFrame, C = e.director, I = e.Component, w = e.Prefab, 
            k = e.instantiate;
        }, function(e) {
            b = e.SOUND_TYPE;
        }, function(e) {
            S = e.Tools;
        }, function(e) {
            _ = e.GameManager;
        }, function(e) {
            T = e.default;
        } ],
        execute: function() {
            d._RF.push({}, "599e7KyBJBIX4BkT6QAbDR9", "UILaborDay", void 0), H = p.ccclass, 
            E = p.property, e("UILaborDay", (U = H("UILaborDay"), N = E(g), P = E(g), D = E(f), 
            A = E(g), M = E(g), U((O = i((R = function(e) {
                function t() {
                    var e, n;
                    a(this, t);
                    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
                    return n = s(this, (e = r(t)).call.apply(e, [ this ].concat(o))), c(n, "msk", O, u(n)), 
                    c(n, "getBtn", j, u(n)), c(n, "skinIcon", L, u(n)), c(n, "flowerItems", z, u(n)), 
                    c(n, "leftNode", V, u(n)), n.flowerCount = 0, n;
                }
                var i;
                return o(t, I), l(t, [ {
                    key: "onLoad",
                    value: function() {
                        T.instance.UILoad.active = !1, this.leftNode.setPosition(-cc.winSize.width / 2, 0, 0), 
                        T.instance.shiPeiUIBackBtn(this.leftNode.getChildByName("backBtn"));
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.init();
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.changeFlowerItem(), this.showAntModel();
                    }
                }, {
                    key: "showAntModel",
                    value: function() {
                        _.instance.Player.getChildByName("camera").getComponent(v).fov = 88, _.instance.loaderPlayer(6, new m(0, -20, 16)), 
                        S.renderImage(this.skinIcon, new y(657, 485), _.instance.Player.getChildByName("camera").getComponent(v)), 
                        this.loaderEffect();
                    }
                }, {
                    key: "loaderEffect",
                    value: (i = h(n.default.mark(function e() {
                        var t, i;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, S.loadRes("prefabs/node/51_Effect", w);

                              case 2:
                                t = e.sent, (i = k(t)).name = "effect", _.instance.Player.addChild(i), _.instance.Player.getChildByName("ant_shadow").setRotationFromEuler(0, -20, 16), 
                                i.setPosition(0, 0, 0), i.setRotationFromEuler(0, 82, 0);

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    })), function() {
                        return i.apply(this, arguments);
                    })
                }, {
                    key: "changeFlowerItem",
                    value: function() {
                        for (var e = new Date().valueOf(), n = 0; n < T.instance.flowerInfos.length; n++) {
                            var t = T.instance.flowerInfos[n], i = this.flowerItems[t.index];
                            i.active = !0, e >= t.time ? (this.flowerCount++, S.setImage(i.getComponent(f), "resTex/UILaborDay_flower_" + t.id, B)) : S.setImage(i.getComponent(f), "resTex/UILaborDay_flower", B);
                        }
                        this.flowerCount >= 6 && (this.getBtn.getComponent(f).grayscale = !1);
                    }
                }, {
                    key: "onGetBtnClick",
                    value: function() {
                        S.playSound(b.BTNCLICK), this.flowerCount < 6 ? S.ShowTip("拥有6朵花后领取") : 1 != T.instance.laborDayGetSkinType ? (T.instance.unlockSkinId = 6, 
                        T.instance.unlockSkinName = "红花蚂蚁", T.instance.showUI("prefabs/ui/UIUnlockSkin"), 
                        this.onBackBtnClick(), T.instance.laborDayGetSkinType = 1, localStorage.setItem("laborDayGetSkinType", T.instance.laborDayGetSkinType.toString()), 
                        C.getScene().emit("HideUILaborDay")) : S.ShowTip("奖励已领取");
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        S.playSound(b.BTNCLICK), T.instance.videoCounterTimeGo(), _.instance.Player.getChildByName("camera").getComponent(v).fov = 45, 
                        _.instance.Player.getChildByName("ant_shadow").setRotationFromEuler(0, 0, 0);
                        var e = _.instance.Player.getChildByName("effect");
                        e.removeFromParent(), e.destroy(), this.node.removeFromParent(), this.node.destroy(), 
                        S.cleanUnuseRes(), T.instance.wxInterAdCount++, C.getScene().emit("SHOW_WX_INTERAD"), 
                        C.getScene().emit("Vivo_showBanner"), C.getScene().emit("MainNativeBannerOPPO", !0), 
                        C.getScene().emit("DestroyNativeItem"), T.instance.onShowBannerType(!0), C.getScene().emit("ShowNativeAdItem", new m(cc.winSize.width / 2 - 358, 200, 0));
                    }
                } ]), t;
            }()).prototype, "msk", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), j = i(R.prototype, "getBtn", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), L = i(R.prototype, "skinIcon", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), z = i(R.prototype, "flowerItems", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), V = i(R.prototype, "leftNode", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), x = R)) || x)), d._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UILimitAward.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.LabelComponent, g = e.Node, 
            f = e.SpriteFrame, v = e.director, m = e.Component;
        }, function(e) {
            y = e.CUR_PLATFORM, B = e.PLATFORM_TYPE, C = e.LIMIT_AWARD_COUNT, I = e.SOUND_TYPE;
        }, function(e) {
            w = e.Tools;
        }, function(e) {
            k = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "442c8Bz4ZZOfI6ajPttQFYm", "UILimitAward", void 0), j = h.ccclass, 
            L = h.property, e("UILimitAward", (b = j("UILimitAward"), S = L(d), _ = L(d), T = L(p), 
            U = L(g), N = L(g), b((A = t((D = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "logo", A, c(t)), 
                    r(t, "countSpr", M, c(t)), r(t, "countT", x, c(t)), r(t, "logoSpr", R, c(t)), t.randIndex = 0, 
                    r(t, "leftNode", O, c(t)), t;
                }
                return i(n, m), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        y == B.TT && (this.leftNode.setPosition(-cc.winSize.width / 2, 0, 0), k.instance.shiPeiUIBackBtn(this.leftNode.getChildByName("backBtn")), 
                        this.leftNode.active = !0, this.node.getChildByName("backBtn").active = !1);
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.init();
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.randIndex = w.getRandomInt(1, 5), w.setImage(this.logo, "resTex/UIResLogo_" + this.randIndex, f), 
                        w.setImage(this.countSpr, "resTex/UIShop_" + k.instance.getUILimitAwardCount, f), 
                        this.countT.string = "+" + C[this.randIndex].count;
                    }
                }, {
                    key: "videoBtnClick",
                    value: function() {
                        if (w.playSound(I.BTNCLICK), !(k.instance.getUILimitAwardCount <= 0)) {
                            var e = function() {
                                var e = this;
                                k.instance.getUILimitAwardCount--, localStorage.setItem("getUILimitAwardCount", k.instance.getUILimitAwardCount.toString()), 
                                this.countT.string = "+" + C[this.randIndex].count, k.instance.awardTypeCount(this.randIndex, C[this.randIndex].count), 
                                k.instance.awardTypeAni(this.randIndex, this.logoSpr, this.node.parent, this), this.node.active = !1, 
                                this.scheduleOnce(function() {
                                    e.backBtnClick();
                                }, 1);
                            }.bind(this);
                            k.instance.watchVideo("", e);
                        }
                    }
                }, {
                    key: "backBtnClick",
                    value: function() {
                        w.playSound(I.BTNCLICK), k.instance.videoCounterTimeGo(), this.node.removeFromParent(), 
                        this.node.destroy(), w.cleanUnuseRes(), v.getScene().emit("Vivo_showBanner");
                    }
                } ]), n;
            }()).prototype, "logo", [ S ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), M = t(D.prototype, "countSpr", [ _ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), x = t(D.prototype, "countT", [ T ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), R = t(D.prototype, "logoSpr", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), O = t(D.prototype, "leftNode", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), P = D)) || P)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIMain.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./ShufenManager.js", "./Tools.js", "./GameManager.js", "./DataManager.js", "./UILookVideo.js" ], function(e, t) {
    var i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W, q, Y, K, X, J, Q, Z, $, ee, ne, te, ie, oe, ae, se, re, ce, ue, le, he, de, pe, ge, fe, ve, me, ye, Be, Ce, Ie, we, ke, be, Se, _e, Te, Ue, Ne, Pe, De, Ae, Me, xe, Re, Oe, je, Le, ze, Ve, He, Ee, Ge, Fe, We, qe, Ye, Ke, Xe, Je, Qe, Ze, $e, en, nn, tn, on, an, sn, rn, cn, un, ln, hn, dn, pn, gn, fn, vn, mn, yn, Bn, Cn, In, wn, kn, bn, Sn, _n, Tn, Un, Nn, Pn, Dn, An, Mn, xn, Rn, On, jn, Ln, zn, Vn, Hn, En, Gn, Fn, Wn, qn, Yn, Kn, Xn;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _dec9: void 0,
        _dec10: void 0,
        _dec11: void 0,
        _dec12: void 0,
        _dec13: void 0,
        _dec14: void 0,
        _dec15: void 0,
        _dec16: void 0,
        _dec17: void 0,
        _dec18: void 0,
        _dec19: void 0,
        _dec20: void 0,
        _dec21: void 0,
        _dec22: void 0,
        _dec23: void 0,
        _dec24: void 0,
        _dec25: void 0,
        _dec26: void 0,
        _dec27: void 0,
        _dec28: void 0,
        _dec29: void 0,
        _dec30: void 0,
        _dec31: void 0,
        _dec32: void 0,
        _dec33: void 0,
        _dec34: void 0,
        _dec35: void 0,
        _dec36: void 0,
        _dec37: void 0,
        _dec38: void 0,
        _dec39: void 0,
        _dec40: void 0,
        _dec41: void 0,
        _dec42: void 0,
        _dec43: void 0,
        _dec44: void 0,
        _dec45: void 0,
        _dec46: void 0,
        _dec47: void 0,
        _dec48: void 0,
        _dec49: void 0,
        _dec50: void 0,
        _dec51: void 0,
        _dec52: void 0,
        _dec53: void 0,
        _dec54: void 0,
        _dec55: void 0,
        _dec56: void 0,
        _dec57: void 0,
        _dec58: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _descriptor8: void 0,
        _descriptor9: void 0,
        _descriptor10: void 0,
        _descriptor11: void 0,
        _descriptor12: void 0,
        _descriptor13: void 0,
        _descriptor14: void 0,
        _descriptor15: void 0,
        _descriptor16: void 0,
        _descriptor17: void 0,
        _descriptor18: void 0,
        _descriptor19: void 0,
        _descriptor20: void 0,
        _descriptor21: void 0,
        _descriptor22: void 0,
        _descriptor23: void 0,
        _descriptor24: void 0,
        _descriptor25: void 0,
        _descriptor26: void 0,
        _descriptor27: void 0,
        _descriptor28: void 0,
        _descriptor29: void 0,
        _descriptor30: void 0,
        _descriptor31: void 0,
        _descriptor32: void 0,
        _descriptor33: void 0,
        _descriptor34: void 0,
        _descriptor35: void 0,
        _descriptor36: void 0,
        _descriptor37: void 0,
        _descriptor38: void 0,
        _descriptor39: void 0,
        _descriptor40: void 0,
        _descriptor41: void 0,
        _descriptor42: void 0,
        _descriptor43: void 0,
        _descriptor44: void 0,
        _descriptor45: void 0,
        _descriptor46: void 0,
        _descriptor47: void 0,
        _descriptor48: void 0,
        _descriptor49: void 0,
        _descriptor50: void 0,
        _descriptor51: void 0,
        _descriptor52: void 0,
        _descriptor53: void 0,
        _descriptor54: void 0,
        _descriptor55: void 0,
        _descriptor56: void 0,
        _descriptor57: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            i = e.applyDecoratedDescriptor, o = e.inherits, a = e.classCallCheck, s = e.possibleConstructorReturn, 
            r = e.getPrototypeOf, c = e.initializerDefineProperty, u = e.assertThisInitialized, 
            l = e.createClass, h = e.asyncToGenerator;
        }, function(e) {
            d = e.cclegacy, p = e._decorator, g = e.Node, f = e.LabelComponent, v = e.Vec3, 
            m = e.director, y = e.tween, B = e.SpriteComponent, C = e.loader, I = e.Prefab, 
            w = e.SpriteFrame, k = e.Component;
        }, function(e) {
            b = e.CUR_PLATFORM, S = e.PLATFORM_TYPE, _ = e.GUIDE_STEPS, T = e.MUSHROOM_ROOM_INFO, 
            U = e.QUEENANT_ROOM_INFO, N = e.MAIDIAN_STEPS, P = e.YOUMENG_EVENT, D = e.SOUND_TYPE, 
            A = e.YOUEMNG_EVENT_ENUM;
        }, function(e) {
            M = e.default;
        }, function(e) {
            x = e.Tools;
        }, function(e) {
            R = e.GameManager;
        }, function(e) {
            O = e.default;
        }, function(e) {
            j = e.UILookVideo;
        } ],
        execute: function() {
            d._RF.push({}, "b689ah1YlBPHa7KY0XsyrWC", "UIMain", void 0), Kn = p.ccclass, Xn = p.property, 
            e("UIMain", (L = Kn("UIMain"), z = Xn(g), V = Xn(g), H = Xn(g), E = Xn(g), G = Xn(g), 
            F = Xn(g), W = Xn(g), q = Xn(g), Y = Xn(g), K = Xn(g), X = Xn(g), J = Xn(g), Q = Xn(g), 
            Z = Xn(g), $ = Xn(g), ee = Xn(g), ne = Xn(g), te = Xn(g), ie = Xn(g), oe = Xn(g), 
            ae = Xn(g), se = Xn(g), re = Xn(g), ce = Xn(g), ue = Xn(g), le = Xn(g), he = Xn(g), 
            de = Xn(g), pe = Xn(g), ge = Xn(g), fe = Xn(g), ve = Xn(g), me = Xn(g), ye = Xn(g), 
            Be = Xn(g), Ce = Xn(g), Ie = Xn(g), we = Xn(g), ke = Xn(g), be = Xn(g), Se = Xn(g), 
            _e = Xn(g), Te = Xn(g), Ue = Xn(g), Ne = Xn(g), Pe = Xn(f), De = Xn(f), Ae = Xn(f), 
            Me = Xn(g), xe = Xn(g), Re = Xn(g), Oe = Xn(f), je = Xn(g), Le = Xn(g), ze = Xn(f), 
            Ve = Xn(g), He = Xn(g), L((Fe = i((Ge = function(e) {
                function t() {
                    var e, n;
                    a(this, t);
                    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
                    return n = s(this, (e = r(t)).call.apply(e, [ this ].concat(o))), c(n, "PVPBtn", Fe, u(n)), 
                    c(n, "armsAntBtn", We, u(n)), c(n, "clubBtn", qe, u(n)), c(n, "workAntBtn", Ye, u(n)), 
                    c(n, "buildBtn", Ke, u(n)), c(n, "blindBox", Xe, u(n)), c(n, "antMemberBtn", Je, u(n)), 
                    c(n, "mangHeBtn", Qe, u(n)), c(n, "antMemberBg", Ze, u(n)), c(n, "shopBtn", $e, u(n)), 
                    c(n, "taskBtn", en, u(n)), c(n, "setBtn", nn, u(n)), c(n, "explainBtn", tn, u(n)), 
                    c(n, "skinBtn", on, u(n)), c(n, "signBtn", an, u(n)), c(n, "giftBtn", sn, u(n)), 
                    c(n, "hutuiIcon", rn, u(n)), c(n, "superAntBtn", cn, u(n)), c(n, "helpMeBtn", un, u(n)), 
                    c(n, "helpMeBtnClickNode", ln, u(n)), c(n, "zhuanPanBtn", hn, u(n)), c(n, "kongTouBtn", dn, u(n)), 
                    c(n, "laborDayBtn", pn, u(n)), c(n, "kongTouModel", gn, u(n)), c(n, "kongTouNode", fn, u(n)), 
                    c(n, "kongTouStartPoint", vn, u(n)), c(n, "kongTouEndPoint", mn, u(n)), c(n, "antShadow", yn, u(n)), 
                    c(n, "followBtn", Bn, u(n)), c(n, "dissolveBtn", Cn, u(n)), c(n, "wxMoreGame", In, u(n)), 
                    c(n, "moreGameBtn", wn, u(n)), c(n, "qq_moreGameBtn", kn, u(n)), c(n, "qq_rankingBtn", bn, u(n)), 
                    c(n, "qq_dingYueBtn", Sn, u(n)), c(n, "qq_caiQianBtn", _n, u(n)), c(n, "boxBtn", Tn, u(n)), 
                    c(n, "handNode", Un, u(n)), c(n, "UIMainTask", Nn, u(n)), c(n, "evolveBtn", Pn, u(n)), 
                    c(n, "leftBoxOpen", Dn, u(n)), c(n, "leftBoxClose", An, u(n)), c(n, "leftNode", Mn, u(n)), 
                    c(n, "rightNode", xn, u(n)), c(n, "buttomNode", Rn, u(n)), c(n, "allAntCountT", On, u(n)), 
                    c(n, "workAntCountT", jn, u(n)), c(n, "armsAntCountT", Ln, u(n)), n.isAntMemberBgShow = !1, 
                    c(n, "UILoadSpr", zn, u(n)), c(n, "TTLuZhiBtn", Vn, u(n)), c(n, "TTAwardSpr", Hn, u(n)), 
                    c(n, "TTTimeT", En, u(n)), c(n, "addDesktopBtn", Gn, u(n)), c(n, "speedRunBtn", Fn, u(n)), 
                    c(n, "helpMeTimeT", Wn, u(n)), n.fbDoorUI = null, c(n, "workAntBtnHintSpr", qn, u(n)), 
                    n.curKongTouPos = new v(0, 0, 0), n.btnFB = null, n.btnFollowGuideNode = null, c(n, "UIHuTui", Yn, u(n)), 
                    n.giftBtnPos = null, n.moreGamePos = null, n.showUICaiDanCount = 0, n.leftBoxIsMove = !1, 
                    n.boxOpenTime = 0, n.kongTouUpdateTime = 0, n._leftBoxTimer = 0, n._leftAntTimer = 0, 
                    n;
                }
                var i, d;
                return o(t, k), l(t, [ {
                    key: "onLoad",
                    value: function() {
                        cc.winSize.height / cc.winSize.width > 2 ? (this.leftNode.setPosition(-cc.winSize.width / 2, cc.winSize.height / 2 - 50, 0), 
                        this.rightNode.setPosition(cc.winSize.width / 2, cc.winSize.height / 2 - 50, 0)) : (this.leftNode.setPosition(-cc.winSize.width / 2, cc.winSize.height / 2, 0), 
                        this.rightNode.setPosition(cc.winSize.width / 2, cc.winSize.height / 2, 0)), this.giftBtnPos = this.giftBtn.position.clone(), 
                        null == O.instance.helpMeY && (O.instance.helpMeY = this.helpMeBtn.getWorldPosition().y, 
                        console.log("DataManager.instance.helpMeY", O.instance.helpMeY, cc.winSize.height)), 
                        O.instance.isAntMemberBgShow = this.isAntMemberBgShow, this.btnFB = this.rightNode.getChildByName("BtnFB"), 
                        this.btnFollowGuideNode = this.followBtn.getChildByName("guide"), this.schedule(this.updateBtnFB, .5);
                    }
                }, {
                    key: "start",
                    value: function() {
                        var e = this;
                        if (b == S.WEB && (O.instance.isUpdateKongTouInfo = !0), b == S.VIVO || b == S.OPPO || b == S.MEIZU ? this.buttomNode.setPosition(cc.winSize.width / 2 - 320, -cc.winSize.height / 2, 0) : this.buttomNode.setPosition(0, -cc.winSize.height / 2, 0), 
                        O.instance.nodeShiPei(this.leftNode), this.updateBoxBtnShow(), this.showUIBugBoxWX(), 
                        this.showUICaiDanWX(), this.showUIBoxQQ(), this.onLoadUIView(), this.setButtomPos(), 
                        m.getScene().on("roomUnlock", this.roomUnlock, this), m.getScene().on(_.STEPS_1, this.guideStep1, this), 
                        m.getScene().on(_.STEPS_6, this.guideStep6, this), m.getScene().on(_.STEPS_20, this.guideStep20, this), 
                        m.getScene().on(_.STEPS_24, this.guideStep24, this), m.getScene().on(_.STEPS_27, this.guideStep27, this), 
                        m.getScene().on(_.STEPS_29, this.guideStep29, this), m.getScene().on(_.STEPS_31, this.guideStep31, this), 
                        m.getScene().on(_.STEPS_41, this.guideStep41, this), m.getScene().on(_.STEPS_46, this.guideStep41, this), 
                        m.getScene().on("clickScene", this.onClickScene, this), m.getScene().on("initGuide", this.initGuideSteps, this), 
                        m.getScene().on("ShowBoxBtn", this.updateBoxBtnShow, this), m.getScene().on("ShowKongTouBtn", this.kongTouBtnAni, this), 
                        m.getScene().on("SHOW_FB_UI", this.onShowFBUI, this), m.getScene().on("SHOW_FOLLOW_GUIDE_UI", this.onShowFollowGuideUI, this), 
                        m.getScene().on("JinHuaBtnJump", this.onJumpUIView, this), m.getScene().on("XiaoWuBtnJump", this.onJumpUIView1, this), 
                        m.getScene().on("SoldierAntBtnJump", this.SoldierAntBtnJump, this), m.getScene().on("HIDE_GONGNENGLAN", this.onLeftBox, this), 
                        m.getScene().on("SHOW_WX_INTERAD", this.wxShowInterAD, this), 1 == O.instance.isGuideSkinUnlock && (this.giftBtn.active = !1, 
                        this.unschedule(this.giftGuangAni), this.unschedule(this.giftXingXingAni), this.unschedule(this.giftBtnAni)), 
                        this.updateAntCout(), this.schedule(this.updateAntCout, 2), this.schedule(this.guideSprAni, 1), 
                        m.getScene().on("showHongDian", this.updateHongDianShow, this), m.getScene().on("hideHongDian", this.updateHongDianHide, this), 
                        this.schedule(function() {
                            e.updateBulidHongDian(), e.leftBoxOpen.getChildByName("spr").active && R.instance.hongDianAni(e.leftBoxOpen.getChildByName("spr")), 
                            e.shopBtn.getChildByName("spr").active && R.instance.hongDianAni(e.shopBtn.getChildByName("spr")), 
                            e.taskBtn.getChildByName("spr").active && R.instance.hongDianAni(e.taskBtn.getChildByName("spr")), 
                            e.buildBtn.getChildByName("spr").active && R.instance.hongDianAni(e.buildBtn.getChildByName("spr")), 
                            e.signBtn.getChildByName("spr").active && R.instance.hongDianAni(e.signBtn.getChildByName("spr")), 
                            e.zhuanPanBtn.getChildByName("spr").active && R.instance.hongDianAni(e.zhuanPanBtn.getChildByName("spr")), 
                            e.blindBox.getChildByName("spr").active && R.instance.hongDianAni(e.blindBox.getChildByName("spr")), 
                            R.instance.updateTaskHongDianHide(), e.updateBuildHongDianHide();
                        }, 1.5), (O.instance.UIShopGetJewelType > 0 || O.instance.UIShopGetHonrType) && m.getScene().emit("showHongDian", 1), 
                        0 == O.instance.signConfigJson.SINGTYPE ? 0 == O.instance.isGetSignAward && m.getScene().emit("showHongDian", 4) : 0 == O.instance.isGetSignAward_7 && m.getScene().emit("showHongDian", 4), 
                        (new Date().getTime() - O.instance.blindBoxLastOpenTime >= 288e5 || O.instance.blindBoxCount > 0) && m.getScene().emit("showHongDian", 6), 
                        O.instance.zhuanPanMianFeiCount > 0 && m.getScene().emit("showHongDian", 5), this.mangHeXingXingAni(), 
                        this.schedule(this.mangHeXingXingAni, 1), this.giftSprAniEffect(), 1 == O.instance.isGuideSkinUnlock ? this.guideSkinUnlock() : O.instance.guideSteps < 30 && (this.giftBtn.active = !1), 
                        28 == O.instance.guideSteps && (O.instance.guideSteps = 29), m.getScene().on("GuideSkinUnlock", this.guideSkinUnlock, this), 
                        m.getScene().on("ShowNativeAdItem", R.instance.showNativeAdItem, this), R.instance.showNativeAdItem(new v(cc.winSize.width / 2 - 358, 200, 0)), 
                        this.kongTouBtn.active = !1, this.kongTouNode.active = !1, O.instance.guideSteps > 30 && (this.speedRunBtn.active = !0, 
                        this.UIMainTask.active = !0, this.superAntBtn.active = !0, b == S.OPPO && this.showOppoNativeBanner()), 
                        m.getScene().on("HideKongTouBtn", this.hideKongTouBtn, this), this.schedule(this.kongTouAni, 1.6), 
                        m.getScene().on("Vivo_showBanner", this.vivoshowBanner, this), b == S.WX && x.createGameClub(this.clubBtn.getWorldPosition()), 
                        b == S.VIVO || b == S.MEIZU) this.schedule(this.updateVivoBanner, 45); else if (b == S.OPPO) {
                            var n = 20;
                            Math.floor(O.instance.oppoMaiLiangWuChuData.data.p2) && (n = Math.floor(O.instance.oppoMaiLiangWuChuData.data.p2)), 
                            this.schedule(this.showOppoNativeBanner, n);
                        }
                        if (b != S.TT && b != S.KS || (O.instance.guideSteps > 30 && (this.TTLuZhiBtn.active = !0), 
                        m.getScene().on("TTStartLuZhi", function() {
                            var n = e.TTLuZhiBtn.getChildByName("luzhiSpr");
                            n.active = !n.active, e.TTTimeT.node.active = !e.TTTimeT.node.active, O.instance.TTIsStartLuZhi ? e.schedule(e.TTLuZhiTime, 1) : (O.instance.TTTime = 0, 
                            e.TTTimeT.string = "00:00", e.unschedule(e.TTLuZhiTime));
                        }, this), m.getScene().on("TTEndLuZhi", function() {
                            e.TTLuZhiBtn.getChildByName("luzhiSpr").active = !0, e.TTTimeT.node.active = !1, 
                            O.instance.TTTime = 0, e.TTTimeT.string = "00:00", e.unschedule(e.TTLuZhiTime);
                        }, this)), b == S.MEIZU) {
                            var t = function() {
                                O.instance.guideSteps > 30 && (window.bannerAd.createBanner(), this.unschedule(t));
                            }.bind(this);
                            this.schedule(t, .5);
                        }
                        if (b == S.QQ) {
                            this.qq_rankingBtn.active = !0;
                            var i = this;
                            qq.getSystemInfo({
                                success: function(e) {
                                    "qq" == e.AppPlatform ? (qq.isColorSignExistSync() || (i.qq_caiQianBtn.active = !0), 
                                    i.qq_dingYueBtn.active = !0, i.qq_moreGameBtn.active = !0) : (i.qq_caiQianBtn.active = !1, 
                                    i.qq_dingYueBtn.active = !1, i.qq_moreGameBtn.active = !1), console.log("手Q渠道对应平台信息res：", e.AppPlatform);
                                }
                            }), m.getScene().on("QQStartUpdateBanner", function() {
                                var n = 20;
                                O.instance.qqWuChuConfig && O.instance.qqWuChuConfig.BANNERUPDATE_TIME > 10 && (n = O.instance.qqWuChuConfig.BANNERUPDATE_TIME), 
                                "number" == typeof n ? e.schedule(e.updateQQBanner, n) : e.schedule(e.updateQQBanner, 20);
                            }, this), this.QQMoreGameBtnAni(), this.schedule(this.QQMoreGameBtnAni, 1.6);
                        }
                        b == S.ANDROID_XiaoMi && y(this.speedRunBtn).to(.5, {
                            scale: new v(1.1, 1.1, 1)
                        }).to(1, {
                            scale: new v(.9, .9, 1)
                        }).union().repeatForever().start(), this.schedule(this.shopBtnAni, 1.5), this.schedule(this.skinBtnAni, 1), 
                        O.instance.updateRankData(), 0 == O.instance.laborDayGetSkinType ? this.schedule(this.laborDayBtnAni, 1) : this.laborDayBtn.active = !1, 
                        m.getScene().on("HideUILaborDay", function() {
                            e.laborDayBtn.active = !1, e.unschedule(e.laborDayBtnAni);
                        }, this), this.wxShowChaPingSchedule(), this.schedule(this.showUIShenMiLiBao, 1), 
                        this.changeSpeedBtnType();
                    }
                }, {
                    key: "wxShowInterAD",
                    value: function() {
                        b == S.WX && O.instance.guideSteps > 30 && (O.instance.wxInterAdCount, O.instance.wxShowInterAdCount);
                    }
                }, {
                    key: "setButtomPos",
                    value: function() {
                        cc.winSize.height / cc.winSize.width > 2 ? (this.buttomNode.getChildByName("bg0").active = !1, 
                        this.buttomNode.getChildByName("bg1").active = !0, this.buildBtn.setPosition(new v(-301, 272, 0)), 
                        this.workAntBtn.setPosition(new v(-151, 272, 0)), this.armsAntBtn.setPosition(new v(-1, 272, 0)), 
                        this.PVPBtn.setPosition(new v(149, 272, 0)), this.evolveBtn.setPosition(new v(299, 272, 0)), 
                        this.handNode.setPosition(new v(-5, 439, 0)), this.followBtn.setPosition(new v(305, 574, 0)), 
                        this.speedRunBtn.setPosition(new v(305, 439, 0)), this.dissolveBtn.setPosition(new v(305, 574, 0)), 
                        this.UIMainTask.setPosition(new v(-224, 440, 0))) : (this.buttomNode.getChildByName("bg0").active = !0, 
                        this.buttomNode.getChildByName("bg1").active = !1, this.buildBtn.setPosition(new v(-301, 70, 0)), 
                        this.workAntBtn.setPosition(new v(-151, 70, 0)), this.armsAntBtn.setPosition(new v(-1, 70, 0)), 
                        this.PVPBtn.setPosition(new v(149, 70, 0)), this.evolveBtn.setPosition(new v(299, 70, 0)), 
                        this.handNode.setPosition(new v(-5, 237, 0)), this.followBtn.setPosition(new v(305, 376, 0)), 
                        this.speedRunBtn.setPosition(new v(305, 234, 0)), this.dissolveBtn.setPosition(new v(305, 376, 0)), 
                        this.UIMainTask.setPosition(new v(-224, 254, 0)));
                    }
                }, {
                    key: "onHuTuiGame",
                    value: function() {
                        O.instance.UILoad.active = !0, O.instance.showUI("prefabs/ui/UIWXHuTui");
                    }
                }, {
                    key: "onJumpUIView",
                    value: function() {
                        O.instance.jumpBuildPage = 4, O.instance.showUI("prefabs/ui/UIBuild");
                    }
                }, {
                    key: "onJumpUIView1",
                    value: function() {
                        O.instance.jumpBuildPage = 6, O.instance.showUI("prefabs/ui/UIBuild");
                    }
                }, {
                    key: "SoldierAntBtnJump",
                    value: function() {
                        O.instance.showUI("prefabs/ui/UISoldierAnt");
                    }
                }, {
                    key: "showUIShenMiLiBao",
                    value: function() {
                        O.instance.UIShenMiLiBaoShowCount <= 0 || O.instance.wxMaiLiangWuChuData && O.instance.guideSteps > 30 && b == S.WX && 42 != O.instance.guideSteps && 47 != O.instance.guideSteps && 1 == Math.floor(O.instance.wxMaiLiangWuChuData.data.p31) && O.instance.videoCounterTime > Math.floor(O.instance.wxMaiLiangWuChuData.data.p30) && !O.instance.isShowUIShenMiLiBao && (O.instance.isShowUICaiDan || O.instance.isShowUIBugBox ? O.instance.videoCounterTime = Math.floor(O.instance.wxMaiLiangWuChuData.data.p30) - 10 : (O.instance.UIShenMiLiBaoShowCount > 0 && O.instance.UIShenMiLiBaoShowCount--, 
                        localStorage.setItem("UIShenMiLiBaoShowCount", O.instance.UIShenMiLiBaoShowCount.toString()), 
                        O.instance.showUI("prefabs/ui/UIShenMiLiBao")));
                    }
                }, {
                    key: "wxShowChaPingSchedule",
                    value: function() {
                        O.instance.guideSteps > 30 && b == S.WX && O.instance.wxMaiLiangWuChuData && O.instance.wuchuOpen;
                    }
                }, {
                    key: "laborDayBtnAni",
                    value: function() {
                        var e = this.laborDayBtn.getChildByName("ani1").getComponent(B), n = this.laborDayBtn.getChildByName("ani2").getComponent(B), t = this.laborDayBtn.getChildByName("ani3").getComponent(B);
                        R.instance.sprShowEffect(e, 255, 0), this.scheduleOnce(function() {
                            R.instance.sprShowEffect(n, 255, 0);
                        }, .3), this.scheduleOnce(function() {
                            R.instance.sprShowEffect(t, 255, 0);
                        }, .6);
                    }
                }, {
                    key: "superAntBtnAni",
                    value: function() {
                        var e = this.superAntBtn.getChildByName("ani1").getComponent(B), n = this.superAntBtn.getChildByName("ani2").getComponent(B), t = this.superAntBtn.getChildByName("ani3").getComponent(B);
                        R.instance.sprShowEffect(e, 255, 0), this.scheduleOnce(function() {
                            R.instance.sprShowEffect(n, 255, 0);
                        }, .3), this.scheduleOnce(function() {
                            R.instance.sprShowEffect(t, 255, 0);
                        }, .6);
                    }
                }, {
                    key: "kongTouBtnAni",
                    value: function() {
                        var e = this.kongTouStartPoint.position, n = new v(0, 0, 0);
                        n = this.kongTouEndPoint.position, this.antShadow.setPosition(e), y(this.antShadow).to(6, {
                            position: n
                        }).start();
                        var t = this.antShadow.getChildByName("antSpr"), i = y(t).to(1, {
                            position: new v(0, -60)
                        }), o = y(t).to(.5, {
                            position: new v(0, 20)
                        }), a = y(t).to(.5, {
                            position: new v(0, -20)
                        }), s = y(t).to(.5, {
                            position: new v(0, 20)
                        }), r = y(t).to(.5, {
                            position: new v(0, -20)
                        }), c = y(t).to(.5, {
                            position: new v(0, 30)
                        }), u = y(t).to(.5, {
                            position: new v(0, -20)
                        }), l = y(t).to(.5, {
                            position: new v(0, 40)
                        });
                        y(t).sequence(i, o, a, s, r, c, u, l).repeat(3).start(), this.kongTouAntWingAni();
                    }
                }, {
                    key: "kongTouAntWingAni",
                    value: function() {
                        var e = 0, n = this.antShadow.getChildByName("antSpr").getChildByName("wingSpr1"), t = this.antShadow.getChildByName("antSpr").getChildByName("wingSpr2"), i = this.antShadow.getChildByName("antSpr").getChildByName("wingSpr3"), o = function() {
                            switch (++e) {
                              case 0:
                                n.active = !0, t.active = !1, i.active = !1;
                                break;

                              case 1:
                                t.active = !0, n.active = !1, i.active = !1;
                                break;

                              case 2:
                                i.active = !0, n.active = !1, t.active = !1;
                            }
                            2 == e && (e = 0);
                        }.bind(this);
                        this.schedule(o, .03);
                    }
                }, {
                    key: "shopBtnAni",
                    value: function() {
                        var e = this.shopBtn.getChildByName("bg").getComponent(B);
                        R.instance.sprShowEffect(e, 255, 0);
                    }
                }, {
                    key: "skinBtnAni",
                    value: function() {
                        var e = this.skinBtn.getChildByName("bg1").getComponent(B), n = this.skinBtn.getChildByName("bg2").getComponent(B);
                        R.instance.sprShowEffect(e, 255, 0), this.scheduleOnce(function() {
                            R.instance.sprShowEffect(n, 255, 0);
                        }, .5);
                    }
                }, {
                    key: "changeSpeedBtnType",
                    value: function() {
                        var e = this.speedRunBtn.getChildByName("pro").getComponent(B), n = this.speedRunBtn.getChildByName("lock1"), t = this.speedRunBtn.getChildByName("lock2"), i = this.speedRunBtn.getChildByName("videoSpr");
                        0 == O.instance.speedRunBtnUnlockType ? (n.active = !0, t.active = !1) : 1 == O.instance.speedRunBtnUnlockType ? (e.fillRange = 1, 
                        t.active = !0, n.active = !1, i.active = !0) : 2 == O.instance.speedRunBtnUnlockType && (e.fillRange = 0, 
                        t.active = !1, n.active = !1, i.active = !1);
                    }
                }, {
                    key: "updateBoxBtnShow",
                    value: function() {
                        b == S.QQ ? this.curKongTouPos = new v(214, -912, 0) : (S.WX, this.curKongTouPos = new v(214, -912, 0));
                    }
                }, {
                    key: "showUICaiDanWX",
                    value: function() {}
                }, {
                    key: "showUIBugBoxWX",
                    value: function() {}
                }, {
                    key: "showUIBoxQQ",
                    value: function() {
                        O.instance.guideSteps > 30 && b == S.QQ && (O.instance.qqBannerWuChuOpen ? O.instance.qqWuChuConfig && 1 == O.instance.qqWuChuConfig.BOX_OPEN && (R.instance.getTimeQQ() || O.instance.showBoxCountQQ < 2 && (O.instance.showBoxCountQQ++, 
                        localStorage.setItem("showBoxCountQQ", O.instance.showBoxCountQQ.toString()), O.instance.showUI("prefabs/ui/UIBox"))) : O.instance.qqWuChuConfig && 1 == O.instance.qqWuChuConfig.BOX_OPEN && O.instance.showBoxCountQQ < 2 && (O.instance.showBoxCountQQ++, 
                        localStorage.setItem("showBoxCountQQ", O.instance.showBoxCountQQ.toString()), O.instance.showUI("prefabs/ui/UIBox")));
                    }
                }, {
                    key: "boxBtnAni",
                    value: function() {
                        var e = this;
                        this.boxBtn.active && y(this.boxBtn).to(.1, {
                            eulerAngles: new v(0, 0, 25)
                        }).call(function() {
                            y(e.boxBtn).to(.1, {
                                eulerAngles: new v(0, 0, -25)
                            }).call(function() {
                                y(e.boxBtn).to(.1, {
                                    eulerAngles: new v(0, 0, 5)
                                }).call(function() {
                                    y(e.boxBtn).to(.1, {
                                        eulerAngles: new v(0, 0, -10)
                                    }).call(function() {
                                        y(e.boxBtn).to(.1, {
                                            eulerAngles: new v(0, 0, 0)
                                        }).call(function() {}).start();
                                    }).start();
                                }).start();
                            }).start();
                        }).start();
                    }
                }, {
                    key: "guideSprAni",
                    value: function() {
                        R.instance && R.instance.guideSprAni(), this.helpMeBtn.active && R.instance.sprHuXiEffect(this.helpMeBtn.getChildByName("icon"), 1.1, .9), 
                        this.superAntBtnAni();
                    }
                }, {
                    key: "refreshLeftCount",
                    value: function() {
                        var e = 0;
                        e += O.instance.nestRoomConfig.antWork0[0], e += O.instance.nestRoomConfig.antWork0[1], 
                        e += O.instance.nestRoomConfig.antWork0[2], e += O.instance.nestRoomConfig.antWork0[3], 
                        e += O.instance.nestRoomConfig.antWork0[4];
                        var n = R.instance.getAntsAICountByTeam(0, 0);
                        return x.clampf(n - e, 0, n);
                    }
                }, {
                    key: "QQMoreGameBtnAni",
                    value: function() {
                        var e = this;
                        this.qq_moreGameBtn.active && (y(this.qq_moreGameBtn).to(.1, {
                            eulerAngles: new v(0, 0, 35)
                        }).call(function() {
                            y(e.qq_moreGameBtn).to(.1, {
                                eulerAngles: new v(0, 0, -35)
                            }).call(function() {
                                y(e.qq_moreGameBtn).to(.1, {
                                    eulerAngles: new v(0, 0, 15)
                                }).call(function() {
                                    y(e.qq_moreGameBtn).to(.1, {
                                        eulerAngles: new v(0, 0, -20)
                                    }).call(function() {
                                        y(e.qq_moreGameBtn).to(.1, {
                                            eulerAngles: new v(0, 0, 0)
                                        }).call(function() {}).start();
                                    }).start();
                                }).start();
                            }).start();
                        }).start(), R.instance.hongDianAni(this.qq_moreGameBtn.getChildByName("spr")));
                    }
                }, {
                    key: "TTLuZhiTime",
                    value: function() {
                        O.instance.TTTime++, this.TTTimeT.string = x.timestampToTime1(O.instance.TTTime), 
                        300 == O.instance.TTTime && (m.getScene().emit("TTEndLuZhi"), x.ShowUI("UITTLuZhi", null, null, 2));
                    }
                }, {
                    key: "vivoshowBanner",
                    value: function() {
                        b != S.VIVO && b != S.MEIZU || x.showBanner_vivoMain(!0);
                    }
                }, {
                    key: "updateVivoBanner",
                    value: function() {
                        b == S.VIVO && (null != x.vivoMainBanner && (x.vivoMainBanner.destroy(), x.vivoMainBanner = null), 
                        x.vivoMainBanner = x.createBanner("54105809ac40426285ce579b3f393099", x.vivoMainBanner, x.isShowBanner_vivoMain, !0));
                    }
                }, {
                    key: "updateQQBanner",
                    value: function() {
                        b == S.QQ && (null != x.wxBanner && (x.wxBanner.destroy(), x.wxBanner = null), this.scheduleOnce(function() {
                            var e = x.getRandomInt(0, 3);
                            x.wxBanner = x.createBanner([ "7fbe9806204440573d1e7a9b25982cae", "d8d93b3bb35e36f8eb68f617849f8435", "de469d039644add237a33b99c0090c3d", "1734d9f3dca40e237e58bb15c97dc228" ][e], x.wxBanner, x.isShowBanner);
                        }, 1));
                    }
                }, {
                    key: "showOppoNativeBanner",
                    value: function() {
                        b == S.OPPO && O.instance.isShowOppoNativeAd && (m.getScene().emit("DestroyNativeBanner"), 
                        O.instance.oppoMaiLiangWuChuData && 1 == Math.floor(O.instance.oppoMaiLiangWuChuData.data.p1) && this.scheduleOnce(function() {
                            O.instance.showUI("prefabs/ui/UINativeBanner_main"), console.log("oppo平台显示原生banner");
                        }, 10));
                    }
                }, {
                    key: "hideKongTouBtn",
                    value: function() {
                        this.kongTouBtn.active = !1, this.kongTouModel.active = !1, this.kongTouNode.active = !1, 
                        this.kongTouUpdateTime = 0, this.antShadow.getChildByName("antSpr").getChildByName("kongTouSpr").active = !0, 
                        this.kongTouBtn.setPosition(new v(214, -191, 0)), R.instance.kongTouNode.setPosition(R.instance.kongTouNode.position.x, 10, R.instance.kongTouNode.position.z);
                    }
                }, {
                    key: "onkongTouNodeClick",
                    value: function() {
                        O.instance.isClickKongTou3D && (O.instance.showUI("prefabs/ui/UIKongTou"), O.instance.videoCounterTimeGo());
                    }
                }, {
                    key: "onHelpMeBtnClick",
                    value: function() {
                        O.instance.isShowUIHelpMe || (O.instance.isShowUIHelpMe = !0, O.instance.showUI("prefabs/ui/UIHelpMe"));
                    }
                }, {
                    key: "kongTouAni",
                    value: function() {
                        var e = this;
                        O.instance.kongTouShowCount > 0 ? (y(this.kongTouBtn.getChildByName("spr").getComponent(B).color).to(.8, {
                            a: 100
                        }).to(.8, {
                            a: 255
                        }).start(), y(this.kongTouBtn).to(.1, {
                            eulerAngles: new v(0, 0, 35)
                        }).call(function() {
                            y(e.kongTouBtn).to(.1, {
                                eulerAngles: new v(0, 0, -35)
                            }).call(function() {
                                y(e.kongTouBtn).to(.1, {
                                    eulerAngles: new v(0, 0, 15)
                                }).call(function() {
                                    y(e.kongTouBtn).to(.1, {
                                        eulerAngles: new v(0, 0, -20)
                                    }).call(function() {
                                        y(e.kongTouBtn).to(.1, {
                                            eulerAngles: new v(0, 0, 0)
                                        }).call(function() {}).start();
                                    }).start();
                                }).start();
                            }).start();
                        }).start()) : this.unschedule(this.kongTouAni);
                    }
                }, {
                    key: "onLoadUIView",
                    value: function() {
                        C.loadRes("prefabs/ui/UIBuild", I, function() {}, function() {}), O.instance.UILoad = this.UILoadSpr.parent;
                    }
                }, {
                    key: "onLeftBox",
                    value: function(e) {
                        var n = this, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        O.instance.boxOpenTime = 0, O.instance.guideSteps < 30 || this.leftBoxIsMove || (this.leftBoxIsMove = !0, 
                        1 == t ? (this.leftBoxOpen.setPosition(78, -633, 0), y(this.helpMeBtn).to(.1, {
                            position: new v(78, this.helpMeBtn.position.y, 0)
                        }).start(), y(this.blindBox).to(.1, {
                            position: new v(78, this.blindBox.position.y, 0)
                        }).start(), y(this.giftBtn).to(.1, {
                            position: new v(78, this.giftBtn.position.y, 0)
                        }).start(), this.kongTouBtn.active && y(this.kongTouBtn).to(.1, {
                            position: new v(78, this.kongTouBtn.position.y, 0)
                        }).start(), y(this.leftBoxClose).to(.1, {
                            position: new v(78, -633, 0)
                        }).start(), y(this.shopBtn).to(.1, {
                            position: new v(-78, this.shopBtn.position.y, 0)
                        }).start(), y(this.taskBtn).to(.1, {
                            position: new v(-78, this.taskBtn.position.y, 0)
                        }).start(), y(this.zhuanPanBtn).to(.1, {
                            position: new v(-78, this.zhuanPanBtn.position.y, 0)
                        }).start(), y(this.superAntBtn).to(.1, {
                            position: new v(-78, this.superAntBtn.position.y, 0)
                        }).start(), y(this.skinBtn).to(.1, {
                            position: new v(-78, this.skinBtn.position.y, 0)
                        }).call(function() {
                            n.leftBoxClose.active = !1, n.leftBoxOpen.active = !0, n.leftBoxIsMove = !1;
                        }).start()) : 0 == t && (this.leftBoxOpen.setPosition(214, -633, 0), y(this.helpMeBtn).to(.1, {
                            position: new v(214, this.helpMeBtn.position.y, 0)
                        }).start(), y(this.blindBox).to(.1, {
                            position: new v(214, this.blindBox.position.y, 0)
                        }).start(), y(this.giftBtn).to(.1, {
                            position: new v(214, this.giftBtn.position.y, 0)
                        }).start(), this.kongTouBtn.active && y(this.kongTouBtn).to(.1, {
                            position: new v(214, this.kongTouBtn.position.y, 0)
                        }).start(), y(this.leftBoxClose).to(.1, {
                            position: new v(214, -633, 0)
                        }).start(), y(this.shopBtn).to(.1, {
                            position: new v(78, this.shopBtn.position.y, 0)
                        }).start(), y(this.taskBtn).to(.1, {
                            position: new v(78, this.taskBtn.position.y, 0)
                        }).start(), y(this.zhuanPanBtn).to(.1, {
                            position: new v(78, this.zhuanPanBtn.position.y, 0)
                        }).start(), y(this.superAntBtn).to(.1, {
                            position: new v(78, this.superAntBtn.position.y, 0)
                        }).start(), y(this.skinBtn).to(.1, {
                            position: new v(78, this.skinBtn.position.y, 0)
                        }).call(function() {
                            n.leftBoxClose.active = !0, n.leftBoxOpen.active = !1, n.leftBoxIsMove = !1;
                        }).start()));
                    }
                }, {
                    key: "guideSkinUnlock",
                    value: function() {
                        this.giftBtn.active = !1, this.unschedule(this.giftGuangAni), this.unschedule(this.giftXingXingAni), 
                        this.unschedule(this.giftBtnAni), b == S.WX && (this.superAntBtn.setPosition(this.giftBtn.position.x, this.superAntBtn.position.y, 0), 
                        O.instance.wxCreateCustomAd());
                    }
                }, {
                    key: "updateHongDianShow",
                    value: function(e) {
                        1 != e || this.shopBtn.getChildByName("spr").active ? 2 != e || this.taskBtn.getChildByName("spr").active ? 3 != e || this.buildBtn.getChildByName("spr").active ? 4 != e || this.signBtn.getChildByName("spr").active ? 5 != e || this.zhuanPanBtn.getChildByName("spr").active ? 6 == e && this.blindBox.getChildByName("spr").active && (this.blindBox.getChildByName("spr").active = !0) : (this.zhuanPanBtn.getChildByName("spr").active = !0, 
                        this.leftBoxOpen.getChildByName("spr").active = !0) : this.signBtn.getChildByName("spr").active = !0 : this.buildBtn.getChildByName("spr").active = !0 : (this.taskBtn.getChildByName("spr").active = !0, 
                        this.leftBoxOpen.getChildByName("spr").active = !0) : (this.shopBtn.getChildByName("spr").active = !0, 
                        this.leftBoxOpen.getChildByName("spr").active = !0);
                    }
                }, {
                    key: "updateHongDianHide",
                    value: function(e) {
                        1 == e ? this.shopBtn.getChildByName("spr").active = !1 : 2 == e ? this.taskBtn.getChildByName("spr").active = !1 : 3 == e ? this.buildBtn.getChildByName("spr").active = !1 : 4 == e ? this.signBtn.getChildByName("spr").active = !1 : 5 == e && (this.zhuanPanBtn.getChildByName("spr").active = !1), 
                        this.shopBtn.getChildByName("spr").active || this.taskBtn.getChildByName("spr").active || this.zhuanPanBtn.getChildByName("spr").active || (this.leftBoxOpen.getChildByName("spr").active = !1);
                    }
                }, {
                    key: "updateBulidHongDian",
                    value: function() {
                        O.instance.blindBoxCount > 0 || new Date().getTime() - O.instance.blindBoxLastOpenTime >= 288e5 ? this.blindBox.getChildByName("spr").active = !0 : this.blindBox.getChildByName("spr").active = !1;
                    }
                }, {
                    key: "updateBuildHongDianHide",
                    value: function() {
                        for (var e = 0; e < 7; e++) {
                            if (2 == O.instance.nestRoomConfig.roomInfo[e].buildType || -1 == O.instance.nestRoomConfig.roomInfo[e].buildType) return void m.getScene().emit("showHongDian", 3);
                            if (R.instance.updateBuildHongDian(e)) return void m.getScene().emit("showHongDian", 3);
                        }
                        m.getScene().emit("hideHongDian", 3);
                    }
                }, {
                    key: "updateAntCout",
                    value: function() {
                        for (var e = 0, n = 0, t = 0; t < O.instance.nestRoomConfig.bugIDs.length; t++) {
                            var i = O.instance.nestRoomConfig.bugIDs[t].id;
                            0 == i ? e++ : O.instance.isSolderAnt(i) && n++;
                        }
                        var o = O.instance.nestRoomConfig.roomInfo[0].level;
                        o = x.clampf(o, 1, 999);
                        var a = T[o - 1].unlockAntNum, s = O.instance.nestRoomConfig.roomInfo[3].level;
                        s = x.clampf(s, 1, 999);
                        var r = U[s - 1].unlockAntNum, c = 2 + n + e;
                        this.allAntCountT.string = "" + c, this.workAntCountT.string = e + "/" + a, this.armsAntCountT.string = n + "/" + r;
                    }
                }, {
                    key: "giftSprAniEffect",
                    value: function() {
                        this.giftGuangAni(), this.schedule(this.giftGuangAni, 2), this.giftXingXingAni(), 
                        this.schedule(this.giftXingXingAni, 1), this.giftBtnAni(), this.schedule(this.giftBtnAni, 1.6);
                    }
                }, {
                    key: "giftBtnAni",
                    value: function() {
                        var e = this;
                        y(this.giftBtn).to(.1, {
                            eulerAngles: new v(0, 0, 35)
                        }).call(function() {
                            y(e.giftBtn).to(.1, {
                                eulerAngles: new v(0, 0, -35)
                            }).call(function() {
                                y(e.giftBtn).to(.1, {
                                    eulerAngles: new v(0, 0, 15)
                                }).call(function() {
                                    y(e.giftBtn).to(.1, {
                                        eulerAngles: new v(0, 0, -20)
                                    }).call(function() {
                                        y(e.giftBtn).to(.1, {
                                            eulerAngles: new v(0, 0, 0)
                                        }).call(function() {}).start();
                                    }).start();
                                }).start();
                            }).start();
                        }).start();
                    }
                }, {
                    key: "mangHeXingXingAni",
                    value: function() {
                        for (var e = this, n = function(n) {
                            var t = e.mangHeBtn.getChildByName("item" + n), i = 0, o = 0, a = 0;
                            1 == n ? (i = .5, o = 1, a = .4) : 2 == n ? (i = .3, o = .7, a = .3) : 3 == n ? (i = .7, 
                            o = 1.3, a = .5) : (i = .1, o = .35, a = .35), y(t).to(a, {
                                scale: new v(i, i, i)
                            }).call(function() {
                                y(t).to(a, {
                                    scale: new v(o, o, o)
                                }).start();
                            }).start();
                        }, t = 1; t <= 4; t++) n(t);
                    }
                }, {
                    key: "giftGuangAni",
                    value: function() {
                        var e = this.giftBtn.getChildByName("Mask").getChildByName("spr");
                        y(e).to(.7, {
                            position: new v(50, -30, 0)
                        }).call(function() {
                            e.setPosition(-50, 30, 0);
                        }).start();
                    }
                }, {
                    key: "giftXingXingAni",
                    value: function() {
                        for (var e = this, n = function(n) {
                            var t = e.giftBtn.getChildByName("item" + n), i = 0, o = 0, a = 0;
                            1 == n ? (i = .5, o = 1.1, a = .4) : 2 == n ? (i = .4, o = .9, a = .3) : (i = .7, 
                            o = 1.3, a = .5), y(t).to(a, {
                                scale: new v(i, i, i)
                            }).call(function() {
                                y(t).to(a, {
                                    scale: new v(o, o, o)
                                }).start();
                            }).start();
                        }, t = 1; t <= 3; t++) n(t);
                    }
                }, {
                    key: "initGuideSteps",
                    value: function() {
                        if (1 == O.instance.guideSteps && x.ShowUI("UIGuide", null, null, this.buildBtn.worldPosition, !0, !0, !0, 1), 
                        4 == O.instance.guideSteps && O.instance.showUI("prefabs/ui/UIBuild"), 5 == O.instance.guideSteps && (O.instance.showUI("prefabs/ui/UIUnlock"), 
                        O.instance.UILoad.active = !0, O.instance.wxReportEvent(N.STEPS_7)), 6 == O.instance.guideSteps && this.guideStep6(), 
                        7 == O.instance.guideSteps) {
                            R.instance.guideSpr.active = !0, R.instance.guideDescT.active = !0;
                            var e = R.instance.getHome(0);
                            R.instance.updateArrowsPos(e.roomMarksNode[0]), e.node.getChildByName("jianTou").active = !0, 
                            x.ShowUI("UIGuide", null, null, R.instance.canvasNode.getChildByName("joyPos").worldPosition, !0, !0, !0, 5), 
                            R.instance.canvasNode.getChildByName("joyBG").active = !0;
                        }
                        if (9 == O.instance.guideSteps && this.onClickScene(), 15 == O.instance.guideSteps) {
                            var n = R.instance.getHome(0);
                            n.mushroomRoom.children[0].active || m.getScene().emit("countAdd", 0, 1), R.instance.guideSpr.active = !0, 
                            R.instance.guideDescT.active = !0, R.instance.guideDescT.getComponent(f).string = "靠近拾取", 
                            R.instance.updateArrowsPos(n.mushroomRoom.children[0]);
                        }
                        19 == O.instance.guideSteps && (M.reportGuide("8", 2), O.instance.newUnlockViewInfoIndex = 7, 
                        O.instance.showUI("prefabs/ui/UIUnlock"), O.instance.UILoad.active = !0, O.instance.wxReportEvent(N.STEPS_3), 
                        O.instance.wxReportEvent(N.STEPS_12)), 20 == O.instance.guideSteps && this.guideStep20(), 
                        22 == O.instance.guideSteps && O.instance.showUI("prefabs/ui/UIWorkAnt"), 24 == O.instance.guideSteps && this.guideStep24(), 
                        25 == O.instance.guideSteps && O.instance.showUI("prefabs/ui/UITask"), 27 == O.instance.guideSteps && this.guideStep27(), 
                        29 == O.instance.guideSteps && this.guideStep29(), 41 == O.instance.guideSteps && this.guideStep41(), 
                        46 == O.instance.guideSteps && this.guideStep41();
                    }
                }, {
                    key: "onClickScene",
                    value: function() {
                        if (9 == O.instance.guideSteps) {
                            M.reportGuide("3", 1), m.getScene().emit("CLOSE_GUIDE_UI"), O.instance.guideSteps = 10, 
                            R.instance.clickSceneBtn.active = !1, R.instance.guideSpr.active = !0, R.instance.guideDescT.active = !0, 
                            R.instance.guideDescT.getComponent(f).string = "带回树叶";
                            var e = R.instance.getHome(0);
                            R.instance.updateArrowsPos(e.doorIn), e.node.getChildByName("jianTou").active = !1, 
                            O.instance.wxReportEvent(N.STEPS_10), O.instance.youMenDaDian(P.guide_12);
                        }
                    }
                }, {
                    key: "guideStep1",
                    value: function() {
                        x.ShowUI("UIGuide", null, null, this.buildBtn.worldPosition, !0, !0, !0, 1), localStorage.setItem("guideSteps", O.instance.guideSteps.toString());
                    }
                }, {
                    key: "guideStep6",
                    value: function() {
                        var e = this;
                        O.instance.wxReportEvent(N.STEPS_2), R.instance.mskBtn.active = !0, R.instance.guideSpr.active = !0, 
                        R.instance.guideDescT.active = !0, R.instance.guideDescT.getComponent(f).string = "蘑菇加工间", 
                        R.instance.sprShowEffect(R.instance.guideSpr.getComponent(B), 255, 0), R.instance.sprShowEffect(R.instance.guideDescT.getComponent(f), 255, 0);
                        var n = R.instance.getHome(0);
                        R.instance.updateArrowsPos(n.roomMarksNode[0]), n.node.getChildByName("jianTou").active = !0, 
                        this.scheduleOnce(function() {
                            R.instance.sprShowEffect(R.instance.guideSpr.getComponent(B), 255, 0), R.instance.sprShowEffect(R.instance.guideDescT.getComponent(f), 255, 0), 
                            e.scheduleOnce(function() {
                                O.instance.guideSteps = 7, x.ShowUI("UIGuide", null, null, R.instance.canvasNode.getChildByName("joyPos").worldPosition, !0, !0, !0, 5), 
                                R.instance.mskBtn.active = !1, R.instance.canvasNode.getChildByName("joyBG").active = !0, 
                                localStorage.setItem("guideSteps", O.instance.guideSteps.toString());
                            }, 1);
                        }, 1.1);
                    }
                }, {
                    key: "guideStep20",
                    value: function() {
                        M.reportGuide("9", 1), x.ShowUI("UIGuide", null, null, this.workAntBtn.worldPosition, !0, !0, !0, 7);
                    }
                }, {
                    key: "guideStep24",
                    value: function() {
                        x.ShowUI("UIGuide", null, null, this.taskBtn.worldPosition, !0, !0, !0, 9);
                    }
                }, {
                    key: "guideStep27",
                    value: function() {
                        x.ShowUI("UIGuide", null, null, this.explainBtn.worldPosition, !0, !0, !0, 10);
                    }
                }, {
                    key: "guideStep29",
                    value: function() {
                        x.ShowUI("UIGuide", null, null, this.shopBtn.worldPosition, !0, !0, !0, 11);
                    }
                }, {
                    key: "guideStep31",
                    value: function() {
                        if (31 == O.instance.guideSteps) {
                            if (O.instance.guideSteps = 40, localStorage.setItem("guideSteps", O.instance.guideSteps.toString()), 
                            O.instance.wxMaiLiangWuChuData && O.instance.wuchuOpen && S.WX, this.giftBtn.active = !0, 
                            this.speedRunBtn.active = !0, this.superAntBtn.active = !0, R.instance.getLaborDayTime() && O.instance.guideSteps > 30 ? (console.log("当前在劳动节活动内"), 
                            this.laborDayBtn.active = !0, this.schedule(this.laborDayBtnAni, 1)) : console.log("劳动节活动结束"), 
                            this.showUIBugBoxWX(), this.kongTouNode.active = !0, O.instance.isUpdateKongTouInfo = !0, 
                            this.UIMainTask.active = !0, b == S.iOS && window.NativeCtrl.ShowBanner(), b == S.TT || b == S.KS) this.TTLuZhiBtn.active = !0; else if (b == S.WX) return;
                            b == S.OPPO ? (m.getScene().emit("MainNativeBannerOPPO", !0), O.instance.oppoMaiLiangWuChuData && 1 == Math.floor(O.instance.oppoMaiLiangWuChuData.data.p1) && this.scheduleOnce(function() {
                                O.instance.showUI("prefabs/ui/UINativeBanner_main"), console.log("oppo平台显示原生banner");
                            }, 10)) : b == S.VIVO && x.showBanner_vivoMain(!0);
                        }
                    }
                }, {
                    key: "guideStep41",
                    value: function() {
                        var e = null, n = 0;
                        if (41 == O.instance.guideSteps ? (n = 41, e = this.armsAntBtn) : 46 == O.instance.guideSteps && (n = 46, 
                        e = this.PVPBtn), e) {
                            var t = new v(e.position.x, e.position.y, 0);
                            this.handNode.setPosition(t), this.handNode.active = !0;
                            var i = 0, o = function() {
                                var e;
                                O.instance.guideSteps == n ? (i += .05, e = Math.abs(80 * Math.sin(i)) + 100, this.handNode.setPosition(t.x, t.y + e, 0)) : this.unschedule(o);
                            }.bind(this);
                            this.schedule(o, .01);
                        }
                    }
                }, {
                    key: "setHelpBugID",
                    value: function(e) {
                        O.instance.UIHelpBugID = e, m.getScene().emit("CHANGE_HELP_BUG_ID");
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        var n = this;
                        if (O.instance.guideSteps > 30 && (this.leftBoxOpen.active ? this._leftBoxTimer = 0 : this._leftBoxTimer += e, 
                        this._leftBoxTimer >= 10 && (this._leftBoxTimer = 0, this.onLeftBox(null, 1))), 
                        O.instance.guideSteps > 30 && (this.isAntMemberBgShow ? this._leftAntTimer += e : this._leftAntTimer = 0, 
                        this._leftAntTimer >= 10 && this.isAntMemberBgShow && (this._leftAntTimer = 0, this.updateAntMemberInfo())), 
                        O.instance.guideSteps > 30 && (O.instance.UIHelpTime += e, O.instance.UIHelpTime >= O.instance.UIHelpUpdateTime && !O.instance.isGetHelpBug)) if (this.helpMeBtn.active) {
                            O.instance.UIHelpShowTime -= e, O.instance.UIHelpShowTime <= 0 && (this.helpMeBtn.active = !1, 
                            O.instance.UIHelpTime = 0, O.instance.UIHelpShowTime = 180, this.setHelpBugID(-1));
                            var t, i, o = Math.floor(O.instance.UIHelpShowTime / 60), a = Math.floor(O.instance.UIHelpShowTime - 60 * o);
                            t = o < 10 ? "0" + o + ":" : o + ":", i = a < 10 ? "0" + a : a + "", this.helpMeTimeT.string = t + i;
                        } else {
                            var s = [ 2, 5, 8, 11, 14, 17, 20, 23, 26, 29 ], r = x.getRandomInt(0, s.length - 1);
                            if (O.instance.UIHelpBugNextID == s[r]) return;
                            this.helpMeBtn.active = !0, O.instance.UIHelpBugNextID = s[r], x.setImage(this.helpMeBtn.getChildByName("icon").getComponent(B), "resTex/UIHelpMe_btnIcon" + (r + 1), w), 
                            this.setHelpBugID(s[r]);
                        }
                        R.instance.helpBug ? (this.helpMeBtnClickNode.active || (this.helpMeBtnClickNode.active = !0), 
                        this.helpMeBtnClickNode.setPosition(R.instance.helpBugLogo1.position)) : this.helpMeBtnClickNode.active && (this.helpMeBtnClickNode.active = !1);
                        var c = R.instance.getHome(0);
                        if (c && R.instance.curPlayer ? (this.followBtn.active = !c.isArmyTogether && !R.instance.curPlayer.isHome, 
                        this.dissolveBtn.active = !this.followBtn.active && !R.instance.curPlayer.isHome) : (this.followBtn.active = !1, 
                        this.dissolveBtn.active = !1), this.UILoadSpr.parent.active && (this.UILoadSpr.eulerAngles = this.UILoadSpr.eulerAngles.add(new v(0, 0, -10))), 
                        this.kongTouUpdateTime += e, O.instance.kongTouTimeConfig && (b == S.WEB ? this.kongTouUpdateTime > 7 && O.instance.isUpdateKongTouInfo && (O.instance.isUpdateKongTouInfo = !1, 
                        m.getScene().emit("StartShowKongTou"), this.kongTouNode.active = !0) : this.kongTouUpdateTime > parseInt(O.instance.kongTouTimeConfig.time) && O.instance.isUpdateKongTouInfo && O.instance.kongTouShowCount > 0 && (O.instance.isUpdateKongTouInfo = !1, 
                        m.getScene().emit("StartShowKongTou"), this.kongTouNode.active = !0)), v.distance(this.antShadow.worldPosition, this.kongTouBtn.worldPosition) < 150 && !this.kongTouBtn.active && (this.kongTouBtn.active = !0, 
                        this.antShadow.getChildByName("antSpr").getChildByName("kongTouSpr").active = !1, 
                        y(this.kongTouBtn).to(3, {
                            position: this.curKongTouPos
                        }).call(function() {
                            O.instance.isClickKongTou2D = !0, n.leftBoxClose.active ? y(n.kongTouBtn).to(.1, {
                                position: new v(214, n.kongTouBtn.position.y, 0)
                            }).start() : y(n.kongTouBtn).to(.1, {
                                position: new v(78, n.kongTouBtn.position.y, 0)
                            }).start();
                        }).start()), this.kongTouModel.active) {
                            var u = R.instance.getScreenPos(this.kongTouModel);
                            this.kongTouNode.setPosition(new v(u.x, u.y + 30, 0));
                        }
                        O.instance.TTAwardCount <= 0 && this.TTAwardSpr.active && (this.TTAwardSpr.active = !1);
                        var l = this.refreshLeftCount();
                        l > 0 ? (this.workAntBtnHintSpr.active = !0, this.workAntBtnHintSpr.getChildByName("countT").getComponent(f).string = Math.floor(l).toString()) : this.workAntBtnHintSpr.active = !1, 
                        R.instance.curPlayer && (O.instance.nestRoomConfig.roomInfo[0].count >= 16 && 40 == O.instance.guideSteps && 0 == R.instance.curPlayer.team ? (O.instance.guideSteps = 41, 
                        localStorage.setItem("guideSteps", O.instance.guideSteps.toString()), this.scheduleOnce(function() {
                            m.getScene().emit(_.STEPS_41);
                        }, 1.5)) : O.instance.nestRoomConfig.roomInfo[0].count < 16 && 41 == O.instance.guideSteps && 0 == R.instance.curPlayer.team && (O.instance.guideSteps = 40, 
                        localStorage.setItem("guideSteps", O.instance.guideSteps.toString()), this.handNode.active = !1)), 
                        O.instance.boxOpenTime < 10 ? O.instance.boxOpenTime += e : m.getScene().emit("HIDE_GONGNENGLAN", null, 1);
                    }
                }, {
                    key: "roomUnlock",
                    value: function() {
                        O.instance.showUI("prefabs/ui/UIUnlock"), O.instance.UILoad.active = !0;
                    }
                }, {
                    key: "clearMem",
                    value: function() {
                        localStorage.clear(), x.ShowTip("清理完成\n请重启游戏");
                    }
                }, {
                    key: "updateAntMemberInfo",
                    value: function() {
                        var e = this;
                        this.isAntMemberBgShow = !this.isAntMemberBgShow, this.isAntMemberBgShow ? x.hideCustomAd(!1) : x.showCustomAd(), 
                        O.instance.isAntMemberBgShow = this.isAntMemberBgShow, this.antMemberBg.active = this.isAntMemberBgShow, 
                        this.isAntMemberBgShow ? (this.mangHeBtn.active = !this.isAntMemberBgShow, x.wxGameClubBtn && (this.isAntMemberBgShow ? x.wxGameClubBtn.hide() : x.wxGameClubBtn.show())) : this.scheduleOnce(function() {
                            e.mangHeBtn.active = !e.isAntMemberBgShow, x.wxGameClubBtn && (e.isAntMemberBgShow ? x.wxGameClubBtn.hide() : x.wxGameClubBtn.show());
                        }, .2), b == S.QQ && (this.qq_dingYueBtn.active = !this.antMemberBg.active);
                        var n = this.antMemberBtn.getChildByName("Mask"), t = this.isAntMemberBgShow ? 480 : 178, i = n.getChildByName("btn"), o = this.isAntMemberBgShow ? 450 : 150;
                        i.setPosition(o, 0, 0), i.active = !1;
                        var a = n.getChildByName("xian"), s = this.isAntMemberBgShow ? 540 : 120;
                        a.setPosition(s, 0, 0), a.active = !1;
                        var r = n.getChildByName("sprBg"), c = this.isAntMemberBgShow ? 363 : 73;
                        y(this.antMemberBtn).to(.2, {
                            width: t
                        }).call(function() {
                            i.active = !0, a.active = !0;
                        }).start(), y(r).to(.2, {
                            width: c
                        }).start(), y(n).to(.2, {
                            width: t
                        }).start(), this.isAntMemberBgShow ? x.setImage(i.getComponent(B), "resTex/UIAntMember_zuo", w) : x.setImage(i.getComponent(B), "resTex/UIAntMember_you", w);
                    }
                }, {
                    key: "onBtnBlindbox",
                    value: function() {
                        O.instance.guideSteps < 30 ? x.ShowTip("引导中") : (O.instance.UILoad.active = !0, 
                        O.instance.showUI("prefabs/ui/UIBlindBox"));
                    }
                }, {
                    key: "onUiHandler",
                    value: (d = h(n.default.mark(function e(t) {
                        var i, o, a, s, r, c, u, l, h, d, p, g, f;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                x.playSound(D.BTNCLICK), i = this, e.t0 = (O.instance.videoCounterTimeGo(), t.target), 
                                e.next = e.t0 === this.qq_rankingBtn ? 5 : e.t0 === this.qq_dingYueBtn ? 9 : e.t0 === this.qq_caiQianBtn ? 13 : e.t0 === this.qq_moreGameBtn ? 17 : e.t0 === this.moreGameBtn ? 21 : e.t0 === this.boxBtn ? 22 : e.t0 === this.antMemberBtn ? 25 : e.t0 === this.laborDayBtn ? 29 : e.t0 === this.shopBtn ? 33 : e.t0 === this.taskBtn ? 37 : e.t0 === this.PVPBtn ? 41 : e.t0 === this.evolveBtn ? 45 : e.t0 === this.armsAntBtn ? 51 : e.t0 === this.workAntBtn ? 55 : e.t0 === this.buildBtn ? 59 : e.t0 === this.setBtn ? 63 : e.t0 === this.explainBtn ? 67 : e.t0 === this.skinBtn ? 71 : e.t0 === this.signBtn ? 75 : e.t0 === this.giftBtn ? 79 : e.t0 === this.superAntBtn ? 83 : e.t0 === this.helpMeBtn ? 87 : e.t0 === this.speedRunBtn ? 91 : e.t0 === this.zhuanPanBtn ? 111 : e.t0 === this.kongTouBtn ? 115 : e.t0 === this.TTLuZhiBtn ? 121 : e.t0 === this.addDesktopBtn ? 123 : e.t0 === this.followBtn ? 124 : e.t0 === this.dissolveBtn ? 138 : e.t0 === this.wxMoreGame ? 141 : 142;
                                break;

                              case 5:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 7;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 7:
                                return O.instance.UILoad.active = !0, x.showBanner_vivoMain(!1), O.instance.onShowBannerType(!1), 
                                O.instance.showUI("prefabs/ui/UIRank"), e.abrupt("break", 143);

                              case 9:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 11;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 11:
                                return qq.subscribeAppMsg({
                                    tmplIds: [ "60f2db909c85c0eb33b18a9c4fa0db0f" ],
                                    subscribe: !0,
                                    success: function(e) {
                                        console.log("----订阅成功subscribeAppMsg----success", e), x.ShowTip("订阅成功"), O.instance.reportSubscribeAppMsg();
                                    },
                                    fail: function(e) {
                                        console.log("----订阅失败subscribeAppMsg----fail", e);
                                    }
                                }), e.abrupt("break", 143);

                              case 13:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 15;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 15:
                                return qq.addColorSign({
                                    success: function(e) {
                                        console.log("添加彩签成功 success: ", e), i.qq_caiQianBtn.active = !1;
                                    },
                                    fail: function(e) {
                                        console.log("addRecentColorSign fail: ", e);
                                    },
                                    complete: function(e) {
                                        console.log("addRecentColorSign complete: ", e);
                                    }
                                }), e.abrupt("break", 143);

                              case 17:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 19;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 19:
                                return x.showAppBoxQQ(), e.abrupt("break", 143);

                              case 21:
                                return e.abrupt("break", 143);

                              case 22:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 24;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 24:
                                return e.abrupt("break", 143);

                              case 25:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 27;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 27:
                                return O.instance.UILoad.active = !1, this.updateAntMemberInfo(), e.abrupt("break", 143);

                              case 29:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 31;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 31:
                                return O.instance.UILoad.active = !0, O.instance.showUI("prefabs/ui/UILaborDay"), 
                                x.showBanner_vivoMain(!1), O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 33:
                                if (!(29 != O.instance.guideSteps && O.instance.guideSteps < 30)) {
                                    e.next = 35;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 35:
                                return 29 == O.instance.guideSteps && (O.instance.guideSteps = 30, m.getScene().emit("REFRESH_DESTOP_BTN"), 
                                m.getScene().emit("CLOSE_GUIDE_UI"), O.instance.youMenDaDian(P.guide_28)), O.instance.UILoad.active = !0, 
                                b == S.iOS && window.NativeCtrl.HideBanner(), O.instance.showUI("prefabs/ui/UIShop"), 
                                x.showBanner_vivoMain(!1), O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 37:
                                if (!(24 != O.instance.guideSteps && O.instance.guideSteps < 30)) {
                                    e.next = 39;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 39:
                                return O.instance.wxReportEvent(N.STEPS_16), 24 == O.instance.guideSteps && (O.instance.guideSteps = 25, 
                                m.getScene().emit("CLOSE_GUIDE_UI"), O.instance.youMenDaDian(P.guide_25)), O.instance.isOpenDayTaskView = !1, 
                                O.instance.UILoad.active = !0, O.instance.showUI("prefabs/ui/UITask"), x.showBanner_vivoMain(!1), 
                                O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 41:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 43;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 43:
                                return O.instance.wxReportEvent(N.STEPS_47), O.instance.UILoad.active = !0, O.instance.showUI("prefabs/ui/UIPVP"), 
                                46 == O.instance.guideSteps && (O.instance.guideSteps = 47, this.handNode.active = !1), 
                                x.showBanner_vivoMain(!1), O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 45:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 47;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 47:
                                if (!(O.instance.nestRoomConfig.roomInfo[4].level <= 0)) {
                                    e.next = 49;
                                    break;
                                }
                                return e.abrupt("return", (O.instance.UIHintUnlockBtnType = 1, O.instance.UIHintUnlockType = 1, 
                                O.instance.UIHintUnlockIconT = "进化实验室", O.instance.UIHintUnlockDescT = "需要建造进化实验室，完成后可进化兵蚁", 
                                O.instance.UIHintUnlockIconUrl = "resTex/UIBuild_logo5", O.instance.UIHintUnlockBtnUrl = "resTex/UIHintUnlock_btn3", 
                                O.instance.UILoad.active = !0, void O.instance.showUI("prefabs/ui/UIHintUnlock")));

                              case 49:
                                return O.instance.UILoad.active = !0, O.instance.showUI("prefabs/ui/UIEvolve"), 
                                x.showBanner_vivoMain(!1), O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 51:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 53;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 53:
                                return O.instance.UILoad.active = !0, 41 == O.instance.guideSteps && (O.instance.guideSteps = 42, 
                                this.handNode.active = !1, O.instance.youMenDaDian(P.guide_31)), O.instance.showUI("prefabs/ui/UISoldierAnt"), 
                                x.showBanner_vivoMain(!1), O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 55:
                                if (!(20 != O.instance.guideSteps && O.instance.guideSteps < 30)) {
                                    e.next = 57;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 57:
                                return O.instance.wxReportEvent(N.STEPS_13), O.instance.UILoad.active = !0, 20 == O.instance.guideSteps && (O.instance.guideSteps = 21, 
                                m.getScene().emit("CLOSE_GUIDE_UI"), O.instance.youMenDaDian(P.guide_22)), O.instance.showUI("prefabs/ui/UIWorkAnt"), 
                                x.showBanner_vivoMain(!1), O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 59:
                                if (!(1 != O.instance.guideSteps && O.instance.guideSteps < 30)) {
                                    e.next = 61;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 61:
                                return O.instance.jumpBuildPage = 0, O.instance.UILoad.active = !0, 1 == O.instance.guideSteps && (O.instance.guideSteps = 2, 
                                m.getScene().emit("CLOSE_GUIDE_UI"), b == S.QQ && wx.mmmsdk.regchar("0", "0", "0", "0"), 
                                O.instance.youMenDaDian(P.guide_1)), O.instance.showUI("prefabs/ui/UIBuild"), x.showBanner_vivoMain(!1), 
                                O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 63:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 65;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 65:
                                return O.instance.UILoad.active = !0, O.instance.showUI("prefabs/ui/UISet"), x.showBanner_vivoMain(!1), 
                                O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 67:
                                if (!(27 != O.instance.guideSteps && O.instance.guideSteps < 30)) {
                                    e.next = 69;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 69:
                                return O.instance.wxReportEvent(N.STEPS_17), O.instance.UILoad.active = !0, 27 == O.instance.guideSteps && (O.instance.guideSteps = 28, 
                                m.getScene().emit("CLOSE_GUIDE_UI"), O.instance.youMenDaDian(P.guide_26)), O.instance.showUI("prefabs/ui/UIExplain"), 
                                x.showBanner_vivoMain(!1), O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 71:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 73;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 73:
                                return O.instance.UILoad.active = !0, O.instance.showUI("prefabs/ui/UISkin"), x.showBanner_vivoMain(!1), 
                                O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 75:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 77;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 77:
                                return O.instance.UILoad.active = !0, 0 == O.instance.signConfigJson.SINGTYPE ? O.instance.showUI("prefabs/ui/UISign") : O.instance.showUI("prefabs/ui/UISevenSign"), 
                                x.showBanner_vivoMain(!1), O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 79:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 81;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 81:
                                return O.instance.wxReportEvent(N.STEPS_49), O.instance.UILoad.active = !0, O.instance.showUI("prefabs/ui/UIGift"), 
                                x.showBanner_vivoMain(!1), O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 83:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 85;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 85:
                                return O.instance.UILoad.active = !0, O.instance.showUI("prefabs/ui/UISuperAnt"), 
                                x.showBanner_vivoMain(!1), O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 87:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 89;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 89:
                                return O.instance.UILoad.active = !0, O.instance.showUI("prefabs/ui/UIHelpMe"), 
                                x.showBanner_vivoMain(!1), O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 91:
                                if (o = this.speedRunBtn.getChildByName("pro").getComponent(B), a = this.speedRunBtn.getChildByName("lock1"), 
                                s = this.speedRunBtn.getChildByName("lock2"), r = this.speedRunBtn.getChildByName("videoSpr"), 
                                2 == O.instance.speedRunBtnUnlockType && (s.active = !1, a.active = !1, r.active = !1), 
                                !O.instance.isClickSpeedRunBtn) {
                                    e.next = 94;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("技能冷却中"));

                              case 94:
                                if (O.instance.isClickSpeedRunBtn = !0, m.getScene().emit("ClickSpeedRunBtn"), 1 != O.instance.speedRunBtnUnlockType) {
                                    e.next = 107;
                                    break;
                                }
                                if (O.instance.youMengVideoClick = A.speedRun, O.instance.youMenDaDian(P.speedUnlock_click), 
                                c = function() {
                                    o.fillRange = 0, s.active = !1, a.active = !1, r.active = !1, O.instance.speedRunBtnUnlockType = 2, 
                                    localStorage.setItem("speedRunBtnUnlockType", O.instance.speedRunBtnUnlockType.toString()), 
                                    O.instance.isClickSpeedRunBtn = !1, O.instance.youMenDaDian(P.speedUnlock_complete);
                                }.bind(this), b != S.TT && b != S.WEB) {
                                    e.next = 104;
                                    break;
                                }
                                return O.instance.UILookVideoDesc = "是否观看视频解锁加速跑功能?", e.next = 101, O.instance.showUI("prefabs/ui/UILookVideo");

                              case 101:
                                e.sent.getComponent(j).initYesCallBack(15, function() {
                                    c();
                                }), e.next = 106;
                                break;

                              case 104:
                                u = function() {
                                    c();
                                }.bind(this), O.instance.shufenVideoID = 15, O.instance.watchVideo("", u);

                              case 106:
                                return e.abrupt("return");

                              case 107:
                                return M.reportCustom("1"), o.fillRange = 1, l = function() {
                                    o.fillRange -= 1 / (10 * O.instance.sppedRunTime), o.fillRange <= 0 && (o.fillRange = 0, 
                                    1 == O.instance.speedRunBtnUnlockType && (o.fillRange = 1, s.active = !0, a.active = !1, 
                                    r.active = !0), this.unschedule(l), O.instance.isClickSpeedRunBtn = !1);
                                }.bind(this), this.schedule(l, .1), m.getScene().emit("SPEED_UP_ANT"), 0 == O.instance.speedRunBtnUnlockType && (a.active = !0, 
                                s.active = !1, O.instance.speedRunBtnUnlockType = 1, localStorage.setItem("speedRunBtnUnlockType", O.instance.speedRunBtnUnlockType.toString()), 
                                O.instance.youMenDaDian(P.speedUnlock_appear)), e.abrupt("break", 143);

                              case 111:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 113;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 113:
                                return O.instance.UILoad.active = !0, O.instance.showUI("prefabs/ui/UIZhuanPan"), 
                                b == S.iOS && window.NativeCtrl.HideBanner(), x.showBanner_vivoMain(!1), O.instance.onShowBannerType(!1), 
                                m.getScene().emit("MainNativeBannerOPPO", !1), m.getScene().emit("DestroyNativeItem"), 
                                e.abrupt("break", 143);

                              case 115:
                                if (O.instance.isClickKongTou2D) {
                                    e.next = 117;
                                    break;
                                }
                                return e.abrupt("return");

                              case 117:
                                if (!(O.instance.guideSteps < 30)) {
                                    e.next = 119;
                                    break;
                                }
                                return e.abrupt("return", void x.ShowTip("引导中"));

                              case 119:
                                return O.instance.wxReportEvent(N.STEPS_45), O.instance.UILoad.active = !0, O.instance.showUI("prefabs/ui/UIKongTou"), 
                                x.showBanner_vivoMain(!1), O.instance.onShowBannerType(!1), m.getScene().emit("MainNativeBannerOPPO", !1), 
                                m.getScene().emit("DestroyNativeItem"), e.abrupt("break", 143);

                              case 121:
                                return O.instance.TTIsStartLuZhi ? (O.instance.TTIsStartLuZhi = !1, O.instance.TTTime < 5 ? x.ShowTip("录制时间不低于5秒") : x.ShowUI("UITTLuZhi", null, null, 2), 
                                m.getScene().emit("TTEndLuZhi")) : x.ShowUI("UITTLuZhi", null, null, 1), e.abrupt("break", 143);

                              case 123:
                                return e.abrupt("break", 143);

                              case 124:
                                if (1001 == O.instance.newGuideStep && (O.instance.youMenDaDian(P.triggerGuide_1), 
                                O.instance.newGuideStep = 0, O.instance.newGuideIDs.push(1001), localStorage.setItem("newGuideIDs", O.instance.newGuideIDs.join(",")), 
                                m.getScene().emit("SHOW_FOLLOW_GUIDE_UI", !1), (h = R.instance.getHome(0)) && !h.isStartedRq && (O.instance.rqTimer = 0)), 
                                O.instance.UILoad.active = !1, !(d = R.instance.getHome(0))) {
                                    e.next = 137;
                                    break;
                                }
                                p = 0;

                              case 129:
                                if (!(p < R.instance.ants.length)) {
                                    e.next = 136;
                                    break;
                                }
                                if (!((g = R.instance.ants[p]).id > 0) || g.isDead || 0 != g.team) {
                                    e.next = 133;
                                    break;
                                }
                                return e.abrupt("return", void (d.isArmyTogether = !0));

                              case 133:
                                p++, e.next = 129;
                                break;

                              case 136:
                                x.ShowTip("没有可跟随部队");

                              case 137:
                                return e.abrupt("break", 143);

                              case 138:
                                O.instance.UILoad.active = !1, (f = R.instance.getHome(0)) && (f.isArmyTogether = !1);

                              case 141:
                                return e.abrupt("break", 143);

                              case 142:
                                console.error("界面target错误", t);

                              case 143:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    })), function(e) {
                        return d.apply(this, arguments);
                    })
                }, {
                    key: "updateBtnFB",
                    value: function() {
                        O.instance.guideSteps < 30 ? this.btnFB.active = !1 : new Date().valueOf() >= O.instance.fbInfo[0].time || O.instance.fbInfo[1];
                    }
                }, {
                    key: "onBtnFBClick",
                    value: function() {
                        if (x.playSound(D.BTNCLICK), O.instance.videoCounterTimeGo(), O.instance.isFbUnlockByLV(1)) if (O.instance.guideSteps < 30) x.ShowTip("引导中"); else {
                            var e = [], n = new Date().valueOf(), t = O.instance.fbInfo[0], i = O.instance.fbInfo[1];
                            n >= t.time && e.push(1), n >= i.time && e.push(2), m.getScene().emit("UIMAP_SHOW", e);
                        } else x.ShowTip("蚁后房间3级后解锁");
                    }
                }, {
                    key: "onShowFBUI",
                    value: (i = h(n.default.mark(function e(t, i) {
                        var o;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!t) {
                                    e.next = 8;
                                    break;
                                }
                                return O.instance.UILoad.active = !0, e.next = 4, x.ShowUI("UIFBDoor", null, null, i);

                              case 4:
                                o = e.sent, this.fbDoorUI = o.node, e.next = 9;
                                break;

                              case 8:
                                this.fbDoorUI && (this.fbDoorUI.removeFromParent(), this.fbDoorUI.destroy(), x.cleanUnuseRes());

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    })), function(e, n) {
                        return i.apply(this, arguments);
                    })
                }, {
                    key: "onShowFollowGuideUI",
                    value: function(e) {
                        if (this.btnFollowGuideNode.active = e, e) {
                            var n = this.btnFollowGuideNode.getChildByName("hand"), t = 0;
                            this.schedule(function e() {
                                t += .05, this.btnFollowGuideNode.active ? n.setPosition(30 * Math.sin(t) + 17, 30 * -Math.sin(t) - 17, 0) : this.unschedule(e);
                            }, 1 / 60);
                        }
                    }
                } ]), t;
            }()).prototype, "PVPBtn", [ z ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), We = i(Ge.prototype, "armsAntBtn", [ V ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), qe = i(Ge.prototype, "clubBtn", [ H ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ye = i(Ge.prototype, "workAntBtn", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ke = i(Ge.prototype, "buildBtn", [ G ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Xe = i(Ge.prototype, "blindBox", [ F ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Je = i(Ge.prototype, "antMemberBtn", [ W ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Qe = i(Ge.prototype, "mangHeBtn", [ q ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ze = i(Ge.prototype, "antMemberBg", [ Y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), $e = i(Ge.prototype, "shopBtn", [ K ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), en = i(Ge.prototype, "taskBtn", [ X ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), nn = i(Ge.prototype, "setBtn", [ J ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), tn = i(Ge.prototype, "explainBtn", [ Q ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), on = i(Ge.prototype, "skinBtn", [ Z ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), an = i(Ge.prototype, "signBtn", [ $ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), sn = i(Ge.prototype, "giftBtn", [ ee ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), rn = i(Ge.prototype, "hutuiIcon", [ ne ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), cn = i(Ge.prototype, "superAntBtn", [ te ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), un = i(Ge.prototype, "helpMeBtn", [ ie ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ln = i(Ge.prototype, "helpMeBtnClickNode", [ oe ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), hn = i(Ge.prototype, "zhuanPanBtn", [ ae ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), dn = i(Ge.prototype, "kongTouBtn", [ se ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), pn = i(Ge.prototype, "laborDayBtn", [ re ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), gn = i(Ge.prototype, "kongTouModel", [ ce ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), fn = i(Ge.prototype, "kongTouNode", [ ue ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), vn = i(Ge.prototype, "kongTouStartPoint", [ le ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), mn = i(Ge.prototype, "kongTouEndPoint", [ he ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), yn = i(Ge.prototype, "antShadow", [ de ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Bn = i(Ge.prototype, "followBtn", [ pe ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Cn = i(Ge.prototype, "dissolveBtn", [ ge ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), In = i(Ge.prototype, "wxMoreGame", [ fe ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), wn = i(Ge.prototype, "moreGameBtn", [ ve ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), kn = i(Ge.prototype, "qq_moreGameBtn", [ me ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), bn = i(Ge.prototype, "qq_rankingBtn", [ ye ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Sn = i(Ge.prototype, "qq_dingYueBtn", [ Be ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), _n = i(Ge.prototype, "qq_caiQianBtn", [ Ce ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Tn = i(Ge.prototype, "boxBtn", [ Ie ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Un = i(Ge.prototype, "handNode", [ we ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Nn = i(Ge.prototype, "UIMainTask", [ ke ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Pn = i(Ge.prototype, "evolveBtn", [ be ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Dn = i(Ge.prototype, "leftBoxOpen", [ Se ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), An = i(Ge.prototype, "leftBoxClose", [ _e ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Mn = i(Ge.prototype, "leftNode", [ Te ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), xn = i(Ge.prototype, "rightNode", [ Ue ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Rn = i(Ge.prototype, "buttomNode", [ Ne ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), On = i(Ge.prototype, "allAntCountT", [ Pe ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), jn = i(Ge.prototype, "workAntCountT", [ De ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ln = i(Ge.prototype, "armsAntCountT", [ Ae ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), zn = i(Ge.prototype, "UILoadSpr", [ Me ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Vn = i(Ge.prototype, "TTLuZhiBtn", [ xe ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Hn = i(Ge.prototype, "TTAwardSpr", [ Re ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), En = i(Ge.prototype, "TTTimeT", [ Oe ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Gn = i(Ge.prototype, "addDesktopBtn", [ je ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Fn = i(Ge.prototype, "speedRunBtn", [ Le ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Wn = i(Ge.prototype, "helpMeTimeT", [ ze ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), qn = i(Ge.prototype, "workAntBtnHintSpr", [ Ve ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Yn = i(Ge.prototype, "UIHuTui", [ He ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ee = Ge)) || Ee)), d._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIMainTask.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.SpriteComponent, g = e.LabelComponent, 
            f = e.director, v = e.SpriteFrame, m = e.Component;
        }, function(e) {
            y = e.CUR_PLATFORM, B = e.PLATFORM_TYPE, C = e.GAMETASK_DESC, I = e.EVERYDAY_DESC;
        }, function(e) {
            w = e.Tools;
        }, function(e) {
            k = e.GameManager;
        }, function(e) {
            b = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "b0d02pRGGBNAJkgChMRsSG/", "UIMainTask", void 0), E = h.ccclass, 
            G = h.property, e("UIMainTask", (S = E("UIMainTask"), _ = G(d), T = G(p), U = G(p), 
            N = G(d), P = G(g), D = G(g), A = G(g), S((R = t((x = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "bg", R, c(t)), 
                    r(t, "icon", O, c(t)), r(t, "iconBg", j, c(t)), r(t, "proValue", L, c(t)), r(t, "countT", z, c(t)), 
                    r(t, "descT", V, c(t)), r(t, "proValueT", H, c(t)), t.taskInfoIndex = -1, t;
                }
                return i(n, m), u(n, [ {
                    key: "start",
                    value: function() {
                        this.initGameTask(), f.getScene().on("UpdateGameTask", this.initGameTask, this), 
                        f.getScene().on("UpdateDayTask", this.initDayTask, this), this.schedule(this.bgAni, 1), 
                        2 == b.instance.gameTaskOverType && (y == B.TT || 12 == b.instance.everyDayConfig.length && b.instance.everyDayConfig.splice(b.instance.everyDayConfig.length - 1, 1), 
                        this.initDayTask());
                    }
                }, {
                    key: "initGameTask",
                    value: function() {
                        if (2 != b.instance.gameTaskOverType) {
                            var e = b.instance.gameTaskConfig[0];
                            if (0 != e.getType) {
                                var n = k.instance.changeIcon(e.rewardType);
                                w.setImage(this.icon, n, v), w.setImage(this.proValue.getComponent(p), "resTex/UIMainTask_pro" + e.getType, v), 
                                w.setImage(this.iconBg, "resTex/UIMainTask_spr" + (e.getType - 1), v), 1 == e.getType ? this.bg.active = !1 : this.bg.active = !0, 
                                this.proValueT.string = e.curOkCount + "/" + e.needNum, this.countT.string = "" + e.rewardNum;
                                var t = 187 / e.needNum * e.curOkCount;
                                this.proValue.width = t, this.proValue.width = t >= 187 ? 187 : t;
                                for (var i = 0; i < C.length; i++) {
                                    var o = C[i];
                                    o.id == e.id && (this.descT.string = o.desc);
                                }
                            }
                            for (var a = !0, s = 0; s < b.instance.gameTaskConfig.length; s++) {
                                for (var r = 0; r < b.instance.gameTaskConfig.length; r++) if (b.instance.gameTaskConfig[r].id == s + 1) {
                                    this.taskInfoIndex = r;
                                    break;
                                }
                                if (0 != b.instance.gameTaskConfig[this.taskInfoIndex].getType) {
                                    a = !0;
                                    break;
                                }
                                a = !1;
                            }
                            a || (b.instance.gameTaskOverType = 2, localStorage.setItem("gameTaskOverType", b.instance.gameTaskOverType.toString()));
                        }
                    }
                }, {
                    key: "initDayTask",
                    value: function() {
                        if (2 == b.instance.gameTaskOverType) {
                            for (var e = !0, n = 0; n < b.instance.everyDayConfig.length; n++) {
                                for (var t = 0; t < b.instance.everyDayConfig.length; t++) if (b.instance.everyDayConfig[t].id == n + 1) {
                                    this.taskInfoIndex = t;
                                    break;
                                }
                                var i = b.instance.everyDayConfig[this.taskInfoIndex];
                                if (0 != i.getType) {
                                    var o = k.instance.changeIcon(i.rewardType);
                                    w.setImage(this.icon, o, v), w.setImage(this.proValue.getComponent(p), "resTex/UIMainTask_pro" + i.getType, v), 
                                    w.setImage(this.iconBg, "resTex/UIMainTask_spr" + (i.getType - 1), v), 1 == i.getType ? this.bg.active = !1 : this.bg.active = !0, 
                                    this.proValueT.string = i.curOkCount + "/" + i.needNum, this.countT.string = "" + i.rewardNum;
                                    var a = 187 / i.needNum * i.curOkCount;
                                    this.proValue.width = a, this.proValue.width = a >= 187 ? 187 : a;
                                    for (var s = 0; s < I.length; s++) {
                                        var r = I[s];
                                        r.id == i.id && (this.descT.string = r.desc);
                                    }
                                    e = !0;
                                    break;
                                }
                                e = !1;
                            }
                            this.node.active = e;
                        }
                    }
                }, {
                    key: "bgAni",
                    value: function() {
                        this.bg.active && k.instance.sprShowEffect(this.bg.getComponent(p), 255, 100);
                    }
                }, {
                    key: "onNodeClick",
                    value: function() {
                        b.instance.guideSteps < 30 ? w.ShowTip("引导中") : (b.instance.UILoad.active = !0, 
                        1 == b.instance.gameTaskOverType ? b.instance.showUI("prefabs/ui/UIGameTask") : (b.instance.isOpenDayTaskView = !0, 
                        b.instance.showUI("prefabs/ui/UITask")));
                    }
                } ]), n;
            }()).prototype, "bg", [ _ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), O = t(x.prototype, "icon", [ T ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), j = t(x.prototype, "iconBg", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), L = t(x.prototype, "proValue", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), z = t(x.prototype, "countT", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), V = t(x.prototype, "descT", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), H = t(x.prototype, "proValueT", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), M = x)) || M)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIMap.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./PvpGameManager.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W, q, Y, K, X, J, Q;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _dec9: void 0,
        _dec10: void 0,
        _dec11: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _descriptor8: void 0,
        _descriptor9: void 0,
        _descriptor10: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.MaskComponent, g = e.LabelComponent, 
            f = e.Vec3, v = e.director, m = e.UITransformComponent, y = e.SpriteComponent, B = e.SpriteFrame, 
            C = e.tween, I = e.Component;
        }, function(e) {
            w = e.FLOWER_POS_ARR;
        }, function(e) {
            k = e.Tools;
        }, function(e) {
            b = e.PvpGameManager;
        }, function(e) {
            S = e.GameManager;
        }, function(e) {
            _ = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "0b06b6s9GNPLKRAo6P1F/eB", "UIMap", void 0), J = h.ccclass, Q = h.property, 
            e("UIMap", (T = J("UIMap"), U = Q(d), N = Q(p), P = Q(d), D = Q(d), A = Q(d), M = Q(d), 
            x = Q(d), R = Q(d), O = Q(d), j = Q(g), T((V = t((z = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return (t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u)))).out = new f(), 
                    r(t, "cover", V, c(t)), r(t, "mask", H, c(t)), r(t, "bg", E, c(t)), r(t, "mapBG", G, c(t)), 
                    r(t, "roomBG", F, c(t)), r(t, "roomBian", W, c(t)), t.btnClose = null, r(t, "self", q, c(t)), 
                    r(t, "others", Y, c(t)), t.isMiniMode = !0, t.ant0Arr = [], t.ant1Arr = [], r(t, "rooms", K, c(t)), 
                    r(t, "roomLvs", X, c(t)), t.isSetBugIcon = !1, t.isShowOutDoor = !1, t;
                }
                return i(n, I), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        this.btnClose = this.node.getChildByName("backBtn"), v.getScene().on("BUG_CREATE", this.refreshMapIcon, this), 
                        v.getScene().on("UIMAP_SHOW", this.showMap, this), this.ui = this.node.getComponent(m);
                        for (var e = 0; e < 30; e++) {
                            var n = this.mask.node.getChildByName("ant" + e), t = this.mask.node.getChildByName("ant_red" + e);
                            this.ant0Arr.push(n), this.ant1Arr.push(t);
                        }
                        this.fb1ActNode = this.others[10].getChildByName("act"), this.fb2ActNode = this.others[11].getChildByName("act");
                        var i = this.others[17].getChildByName("act");
                        i.active = !0, this.tweenHighLigh(i);
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.mgr = S.instance, "PVP" == _.instance.curMode && (this.mgr = b.instance), this.schedule(this.updateOthers), 
                        this.schedule(this.refreshUI);
                    }
                }, {
                    key: "refreshMapIcon",
                    value: function() {
                        for (var e = 0; e < _.instance.gameBugsInfo.length; e++) {
                            var n = _.instance.gameBugsInfo[e];
                            if (n.isHave) {
                                var t = this.others[5 + e].getComponent(y);
                                k.setImage(t, "resTex/UIShop_bug" + n.id, B), this.others[5 + e].setScale(.3, .3, .3);
                            }
                        }
                    }
                }, {
                    key: "updateOthers",
                    value: function() {
                        if (this.mgr.curPlayer && (!this.mgr.curPlayer.isHome || this.isShowOutDoor)) {
                            this.bg.active = !this.isMiniMode, this.cover.active = this.isMiniMode;
                            var e = new f();
                            if (this.mgr.foodNodeArray.length >= 3) {
                                var n = this.getMapPos(this.mgr.foodNodeArray[0].worldPosition);
                                this.others[0].setPosition(n.x, -n.y, 0), n = this.getMapPos(this.mgr.foodNodeArray[1].worldPosition), 
                                this.others[1].setPosition(n.x, -n.y, 0), n = this.getMapPos(this.mgr.foodNodeArray[2].worldPosition), 
                                this.others[2].setPosition(n.x, -n.y, 0);
                                var t = this.mgr.getHome(0);
                                t ? (n = this.getMapPos(t.doorOut.worldPosition), this.others[3].setPosition(n.x, -n.y, 0)) : this.others[3].setPosition(-2e4, 0, 0);
                                var i = this.mgr.getHome(1);
                                i ? (n = this.getMapPos(i.doorOut.worldPosition), this.others[4].setPosition(n.x, -n.y, 0)) : this.others[4].setPosition(-2e4, 0, 0);
                            }
                            if (this.others[5].setPosition(-2e4, 0, 0), this.others[6].setPosition(-2e4, 0, 0), 
                            this.others[7].setPosition(-2e4, 0, 0), this.others[8].setPosition(-2e4, 0, 0), 
                            this.others[9].setPosition(-2e4, 0, 0), this.isSetBugIcon || (this.isSetBugIcon = !0, 
                            this.refreshMapIcon()), "PVE" == _.instance.curMode) {
                                for (var o = 0; o < 5; o++) {
                                    var a = _.instance.flowerOutInfos[o];
                                    if (a) if (w[a.index]) {
                                        var s = this.getMapPos(new f(w[a.index][0], 0, w[a.index][1]));
                                        this.others[12 + o].setPosition(s.x, -s.y, 0);
                                    } else this.others[12 + o].setPosition(-2e4, 0, 0); else this.others[12 + o].setPosition(-2e4, 0, 0);
                                }
                                if (this.mgr.curCaiDanPre && this.mgr.curCaiDanPre.parent && this.mgr.curCaiDanPre.active) {
                                    var r = this.getMapPos(this.mgr.curCaiDanPre.worldPosition);
                                    this.others[17].setPosition(r.x, -r.y, 0);
                                } else this.others[17].setPosition(-2e4, 0, 0);
                            }
                            for (var c = 0; c < _.instance.gameBugsInfo.length; c++) {
                                var u = _.instance.gameBugsInfo[c];
                                if (u.isHave) {
                                    var l = this.mgr.getAntBySid(u.sid);
                                    l ? (e = this.getMapPos(l.node.worldPosition), this.others[5 + c].setPosition(e.x, -e.y, 0)) : this.others[5 + c].setPosition(-2e4, 0, 0);
                                } else this.others[5 + c].setPosition(-2e4, 0, 0);
                            }
                        }
                    }
                }, {
                    key: "refreshUI",
                    value: function() {
                        if (this.ui.priority = this.isMiniMode ? 0 : 10, this.mgr.curPlayer) if (!this.mgr.curPlayer.isHome && -1 == this.mgr.curPlayer.curRoomID || this.isShowOutDoor) if (this.roomBG.active = !1, 
                        this.mapBG.active = !0, this.roomBian.active = this.roomBG.active, this.bg.active = !this.isMiniMode, 
                        this.cover.active = this.isMiniMode, this.isMiniMode) {
                            if (console.log(), this.mask.node.width = 168, this.mask.node.height = 168, "PVE" == _.instance.curMode) {
                                var e = S.instance.canvasNode.getChildByName("UIMain").getChildByName("Right").worldPosition.y;
                                cc.winSize.height / cc.winSize.width > 2 ? this.node.setPosition(cc.winSize.width / 2 - 107, e / 2 - 190, 0) : this.node.setPosition(cc.winSize.width / 2 - 107, e / 2 - 170, 0);
                            } else this.node.setPosition(cc.winSize.width / 2 - 107, cc.winSize.height / 2 - 290, 0);
                            this.btnClose.active = !1, this.self.setPosition(0, 0, 0), this.self.setRotationFromEuler(0, 0, this.mgr.curPlayer.node.eulerAngles.y);
                            var n = this.getMapPos(this.mgr.curPlayer.node.worldPosition);
                            this.mapBG.setPosition(-n.x, n.y, n.z), this.mgr.foodNodeArray.length > 0 && (n = this.getMapPos(this.mgr.foodNodeArray[0].worldPosition), 
                            this.others[0].setPosition(n.x, -n.y, 0), n = this.getMapPos(this.mgr.foodNodeArray[1].worldPosition), 
                            this.others[1].setPosition(n.x, -n.y, 0), n = this.getMapPos(this.mgr.foodNodeArray[2].worldPosition), 
                            this.others[2].setPosition(n.x, -n.y, 0));
                            for (var t = this.mgr.ants.filter(function(e) {
                                return 0 == e.team && e.isAI;
                            }), i = this.mgr.ants.filter(function(e) {
                                return 1 == e.team && e.isAI;
                            }), o = 0; o < 30; o++) t[o] ? (n = this.getMapPos(t[o].node.worldPosition), this.ant0Arr[o].setPosition(n.x + this.mapBG.position.x, -n.y + this.mapBG.position.y, 0)) : this.ant0Arr[o].setPosition(-2e4, 0, 0);
                            for (var a = 0; a < 30; a++) i[a] ? (n = this.getMapPos(i[a].node.worldPosition), 
                            this.ant1Arr[a].setPosition(n.x + this.mapBG.position.x, -n.y + this.mapBG.position.y, 0)) : this.ant1Arr[a].setPosition(-2e4, 0, 0);
                        } else {
                            this.mask.node.width = cc.winSize.width, this.mask.node.height = cc.winSize.height, 
                            this.node.setPosition(0, 0, 0), this.btnClose.active = !0;
                            var s = this.getMapPos(this.mgr.curPlayer.node.worldPosition);
                            this.self.setPosition(s.x, -s.y, 0), this.self.setRotationFromEuler(0, 0, this.mgr.curPlayer.node.eulerAngles.y), 
                            this.mapBG.setPosition(0, 0, 0), this.mgr.foodNodeArray.length > 0 && (s = this.getMapPos(this.mgr.foodNodeArray[0].worldPosition), 
                            this.others[0].setPosition(s.x, -s.y, 0), s = this.getMapPos(this.mgr.foodNodeArray[1].worldPosition), 
                            this.others[1].setPosition(s.x, -s.y, 0), s = this.getMapPos(this.mgr.foodNodeArray[2].worldPosition), 
                            this.others[2].setPosition(s.x, -s.y, 0));
                            for (var r = this.mgr.ants.filter(function(e) {
                                return 0 == e.team && e.isAI;
                            }), c = this.mgr.ants.filter(function(e) {
                                return 1 == e.team && e.isAI;
                            }), u = 0; u < 30; u++) r[u] ? (s = this.getMapPos(r[u].node.worldPosition), this.ant0Arr[u].setPosition(s.x, -s.y, 0)) : this.ant0Arr[u].setPosition(-2e4, 0, 0);
                            for (var l = 0; l < 30; l++) c[l] ? (s = this.getMapPos(c[l].node.worldPosition), 
                            this.ant1Arr[l].setPosition(s.x, -s.y, 0)) : this.ant1Arr[l].setPosition(-2e4, 0, 0);
                        } else {
                            this.roomBG.active = !0, this.mapBG.active = !1, this.roomBian.active = this.roomBG.active, 
                            this.bg.active = !this.isMiniMode, this.cover.active = this.isMiniMode;
                            var h = 0, d = 0;
                            if (1 == this.mgr.curPlayer.curRoomID) {
                                h = 32, d = 199;
                                for (var p = this.mgr.getHome(1), g = 0; g < 7; g++) this.rooms[g].active = p.roomConfig.roomInfo[g].level > 0, 
                                this.roomLvs[g].string = "Lv." + Math.floor(p.roomConfig.roomInfo[g].level);
                            } else for (var f = 0; f < 7; f++) this.rooms[f].active = _.instance.nestRoomConfig.roomInfo[f].level > 0, 
                            this.roomLvs[f].string = "Lv." + Math.floor(_.instance.nestRoomConfig.roomInfo[f].level);
                            if (this.isMiniMode) {
                                if (this.mask.node.width = 168, this.mask.node.height = 168, "PVE" == _.instance.curMode) {
                                    var v = S.instance.canvasNode.getChildByName("UIMain").getChildByName("Right").worldPosition.y;
                                    cc.winSize.height / cc.winSize.width > 2 ? this.node.setPosition(cc.winSize.width / 2 - 107, v / 2 - 190, 0) : this.node.setPosition(cc.winSize.width / 2 - 107, v / 2 - 170, 0);
                                } else this.node.setPosition(cc.winSize.width / 2 - 107, cc.winSize.height / 2 - 290, 0);
                                this.btnClose.active = !1, this.self.setPosition(0, 0, 0), this.self.setRotationFromEuler(0, 0, this.mgr.curPlayer.node.eulerAngles.y), 
                                this.out.x = this.mgr.curPlayer.node.worldPosition.x + 15 - h, this.out.y = 0, this.out.z = this.mgr.curPlayer.node.worldPosition.z - 500 + d;
                                var m = this.getRoomPos(this.out);
                                this.roomBG.setPosition(-m.x, m.y, m.z);
                                for (var y = this.mgr.ants.filter(function(e) {
                                    return 0 == e.team && e.isAI;
                                }), B = this.mgr.ants.filter(function(e) {
                                    return 1 == e.team && e.isAI;
                                }), C = 0; C < 30; C++) if (y[C]) {
                                    this.out.x = y[C].node.worldPosition.x + 15 - h, this.out.y = 0, this.out.z = y[C].node.worldPosition.z - 500 + d;
                                    var I = this.getRoomPos(this.out);
                                    this.ant0Arr[C].setPosition(I.x + this.roomBG.position.x, -I.y + this.roomBG.position.y, 0);
                                } else this.ant0Arr[C].setPosition(-2e4, 0, 0);
                                for (var w = 0; w < 30; w++) if (B[w]) {
                                    this.out.x = B[w].node.worldPosition.x + 15 - h, this.out.y = 0, this.out.z = B[w].node.worldPosition.z - 500 + d;
                                    var k = this.getRoomPos(this.out);
                                    this.ant1Arr[w].setPosition(k.x + this.roomBG.position.x, -k.y + this.roomBG.position.y, 0);
                                } else this.ant1Arr[w].setPosition(-2e4, 0, 0);
                            } else {
                                this.mask.node.width = cc.winSize.width, this.mask.node.height = cc.winSize.height, 
                                this.node.setPosition(0, 0, 0), this.btnClose.active = !0, this.out.x = this.mgr.curPlayer.node.worldPosition.x + 15 - h, 
                                this.out.y = 0, this.out.z = this.mgr.curPlayer.node.worldPosition.z - 500 + d;
                                var b = this.getRoomPos(this.out);
                                this.self.setPosition(b.x, -b.y, 0), this.self.setRotationFromEuler(0, 0, this.mgr.curPlayer.node.eulerAngles.y), 
                                this.roomBG.setPosition(3, -70, 0);
                                for (var T = this.mgr.ants.filter(function(e) {
                                    return 0 == e.team && e.isAI;
                                }), U = this.mgr.ants.filter(function(e) {
                                    return 1 == e.team && e.isAI;
                                }), N = 0; N < 30; N++) if (T[N]) {
                                    this.out.x = T[N].node.worldPosition.x + 15 - h, this.out.y = 0, this.out.z = T[N].node.worldPosition.z - 500 + d;
                                    var P = this.getRoomPos(this.out);
                                    this.ant0Arr[N].setPosition(P.x + this.roomBG.position.x, -P.y + this.roomBG.position.y, 0);
                                } else this.ant0Arr[N].setPosition(-2e4, 0, 0);
                                for (var D = 0; D < 30; D++) if (U[D]) {
                                    this.out.x = U[D].node.worldPosition.x + 15 - h, this.out.y = 0, this.out.z = U[D].node.worldPosition.z - 500 + d;
                                    var A = this.getRoomPos(this.out);
                                    this.ant1Arr[D].setPosition(A.x + this.roomBG.position.x, -A.y + this.roomBG.position.y, 0);
                                } else this.ant1Arr[D].setPosition(-2e4, 0, 0);
                            }
                        } else this.node.setPosition(-2e4, 0, 0);
                    }
                }, {
                    key: "getMapPos",
                    value: function(e) {
                        return this.out.x = e.x / 110 * this.mapBG.width / 2 + 44, this.out.y = e.z / 130 * this.mapBG.height / 2 - 20, 
                        this.out.z = 0, this.out;
                    }
                }, {
                    key: "getRoomPos",
                    value: function(e) {
                        return this.out.x = e.x / 22 * this.roomBG.width / 2, this.out.y = e.z / 28 * this.roomBG.height / 2, 
                        this.out.z = 0, this.out;
                    }
                }, {
                    key: "showMap",
                    value: function(e) {
                        this.isMiniMode && _.instance.guideSteps > 30 && (this.isMiniMode = !1, k.showBanner_vivoMain(!1), 
                        v.getScene().emit("MainNativeBannerOPPO", !1), v.getScene().emit("DestroyNativeItem"), 
                        S.instance.showNativeAdItem(new f(cc.winSize.width / 2 - 86, -270, 0)), this.isShowOutDoor = e.length > 0, 
                        this.fb1ActNode.active = e.indexOf(1) > -1, this.fb2ActNode.active = e.indexOf(2) > -1, 
                        this.fb1ActNode.active && this.tweenHighLigh(this.fb1ActNode), this.fb2ActNode.active && this.tweenHighLigh(this.fb2ActNode));
                    }
                }, {
                    key: "tweenHighLigh",
                    value: function(e) {
                        C(e).stop();
                        var n = C(e).to(.5, {
                            scale: new f(1.2, 1.2, 1)
                        }), t = C(e).to(.5, {
                            scale: new f(1, 1, 1)
                        });
                        C(e).sequence(n, t).repeatForever().start();
                    }
                }, {
                    key: "onBtnOpenClick",
                    value: function() {
                        this.showMap([]), k.showBanner_vivoMain(!1), v.getScene().emit("MainNativeBannerOPPO", !1), 
                        v.getScene().emit("DestroyNativeItem");
                    }
                }, {
                    key: "onBtnCloseClick",
                    value: function() {
                        this.isMiniMode || (this.isShowOutDoor = !1, this.isMiniMode = !0, v.getScene().emit("Vivo_showBanner"), 
                        v.getScene().emit("MainNativeBannerOPPO", !0), v.getScene().emit("DestroyNativeItem"), 
                        v.getScene().emit("ShowNativeAdItem", new f(cc.winSize.width / 2 - 358, 200, 0)));
                    }
                } ]), n;
            }()).prototype, "cover", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), H = t(z.prototype, "mask", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), E = t(z.prototype, "bg", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), G = t(z.prototype, "mapBG", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), F = t(z.prototype, "roomBG", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), W = t(z.prototype, "roomBian", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), q = t(z.prototype, "self", [ x ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Y = t(z.prototype, "others", [ R ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), K = t(z.prototype, "rooms", [ O ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), X = t(z.prototype, "roomLvs", [ j ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), L = z)) || L)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UINativeAD.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.Node, g = e.LabelComponent, 
            f = e.SpriteFrame, v = e.Vec3, m = e.Component;
        }, function(e) {
            y = e.Tools;
        }, function(e) {
            B = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "d99d2uoNX5ERJJ0IHgDR73d", "UINativeAD", void 0), j = h.ccclass, 
            L = h.property, e("UINativeAD", (C = j("UINativeAD"), I = L(d), w = L(p), k = L(p), 
            b = L(d), S = L(d), _ = L(p), T = L(g), C((P = t((N = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "icon", P, c(t)), 
                    r(t, "rotateSpr", D, c(t)), r(t, "backBtn", A, c(t)), r(t, "logo", M, c(t)), r(t, "getBtn", x, c(t)), 
                    r(t, "BG", R, c(t)), r(t, "countT", O, c(t)), t.randAwardType = 0, t.randAwardCount = 0, 
                    t;
                }
                return i(n, m), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        B.instance.nativeAdObj && y.setImage(this.icon, B.instance.nativeAdObj.main, "png"), 
                        this.randAwardType = y.getRandomInt(1, 4), this.randAwardCount = y.getRandomInt(2, 5), 
                        y.setImage(this.logo, "resTex/UIResLogo_" + this.randAwardType, f), this.countT.string = "+" + this.randAwardCount;
                        var e = B.instance.oppoNativeOpen;
                        this.backBtn.setScale(e.SCALE, e.SCALE, e.SCALE);
                    }
                }, {
                    key: "onIconClick",
                    value: function() {
                        y.reportAdClickAd();
                    }
                }, {
                    key: "onGetBtnAwardClick",
                    value: function() {
                        var e = this;
                        B.instance.awardTypeCount(this.randAwardType, this.randAwardCount), B.instance.awardTypeAni(this.randAwardType, this.logo.node, this.node, this), 
                        this.getBtn.grayscale = !0, this.scheduleOnce(function() {
                            e.onBackBtn();
                        }, 1);
                    }
                }, {
                    key: "onBackBtn",
                    value: function() {
                        this.node.removeFromParent(), this.node.destroy(), y.cleanUnuseRes();
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.rotateSpr.eulerAngles = this.rotateSpr.eulerAngles.add(new v(0, 0, 1));
                    }
                } ]), n;
            }()).prototype, "icon", [ I ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), D = t(N.prototype, "rotateSpr", [ w ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), A = t(N.prototype, "backBtn", [ k ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), M = t(N.prototype, "logo", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), x = t(N.prototype, "getBtn", [ S ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), R = t(N.prototype, "BG", [ _ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), O = t(N.prototype, "countT", [ T ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), U = N)) || U)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UINativeAdItem.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.director, g = e.Component;
        }, function(e) {
            f = e.Tools;
        }, function(e) {
            v = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "e1abcdXodtGza9YkUcRMoIk", "UINativeAdItem", void 0), w = h.ccclass, 
            k = h.property, e("UINativeAdItem", (m = w("UINativeAdItem"), y = k(d), m((I = t((C = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "icon", I, c(t)), 
                    t;
                }
                return i(n, g), u(n, [ {
                    key: "init",
                    value: function(e) {
                        this.node.setPosition(e), this.showNativeAdIcon();
                        var n = function() {
                            this.node.removeFromParent(), this.node.destroy(), f.cleanUnuseRes();
                        }.bind(this);
                        p.getScene().on("DestroyNativeItem", n, this);
                    }
                }, {
                    key: "showNativeAdIcon",
                    value: function() {
                        v.instance.nativeAdItemObj && f.setImage(this.icon, v.instance.nativeAdItemObj.icon, "png");
                    }
                }, {
                    key: "onIconClick",
                    value: function() {
                        f.reportAdClickItem();
                    }
                } ]), n;
            }()).prototype, "icon", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), B = C)) || B)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UINativeBanner.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.Component;
        }, function(e) {
            g = e.Tools;
        }, function(e) {
            f = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "f9589WV1lxLUbuxfRbWbk3t", "UINativeBanner", void 0), I = h.ccclass, 
            w = h.property, e("UINativeBanner", (v = I("UINativeBanner"), m = w(d), v((C = t((B = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "icon", C, c(t)), 
                    t;
                }
                return i(n, p), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        if (f.instance.isShowOppoNativeAd) {
                            f.instance.UINativeBannerNode = this.node;
                            var e = this.node.getChildByName("bg");
                            e.setPosition(0, -cc.winSize.height / 2 + e.height / 2, 0), f.instance.isShowOppoBanner ? this.onDes() : f.instance.nativeAdBannerObj && (e.active = !0, 
                            g.setImage(this.icon, f.instance.nativeAdBannerObj.main, "png"));
                        } else this.onDes();
                    }
                }, {
                    key: "onIconClick",
                    value: function() {
                        g.reportAdClickBanner();
                    }
                }, {
                    key: "onDes",
                    value: function() {
                        this.node.removeAllChildren(), this.node.destroy(), f.instance.UINativeBannerNode = null;
                    }
                } ]), n;
            }()).prototype, "icon", [ m ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), y = B)) || y)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UINativeBanner_main.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Tools.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.Node, g = e.director, 
            f = e.Component;
        }, function(e) {
            v = e.Tools;
        } ],
        execute: function() {
            l._RF.push({}, "36bdbS7jF1NGKBl4J4RMoJV", "UINativeBanner_main", void 0), b = h.ccclass, 
            S = h.property, e("UINativeBannerMain", (m = b("UINativeBannerMain"), y = S(d), 
            B = S(p), m((w = t((I = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "icon", w, c(t)), 
                    r(t, "Bg", k, c(t)), t;
                }
                return i(n, f), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        this.init(), g.getScene().on("MainNativeBannerOPPO", this.showOrHideBg, this), g.getScene().on("DestroyNativeBanner", this.onBackBtnClick, this);
                    }
                }, {
                    key: "showOrHideBg",
                    value: function(e) {
                        this.Bg.active = e;
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        v.createNativeAd("290302", function(n) {
                            n && (e.Bg.active = !0, -1 != n.main.indexOf("png") ? v.setImage(e.icon, n.main, "png") : v.setImage(e.icon, n.main, "jpg"));
                        }, function(e) {}, 4);
                    }
                }, {
                    key: "onIconClick",
                    value: function() {
                        v.reportAdClickMainBanner();
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        this.node.removeAllChildren(), this.node.destroy();
                    }
                } ]), n;
            }()).prototype, "icon", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), k = t(I.prototype, "Bg", [ B ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), C = I)) || C)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UINativeBanner_mainHW.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Tools.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.Node, g = e.director, 
            f = e.Component;
        }, function(e) {
            v = e.Tools;
        } ],
        execute: function() {
            l._RF.push({}, "5a05c3alUZCCbjrDZLyuy8R", "UINativeBanner_mainHW", void 0), b = h.ccclass, 
            S = h.property, e("UINativeBannerMainHW", (m = b("UINativeBannerMainHW"), y = S(d), 
            B = S(p), m((w = t((I = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "icon", w, c(t)), 
                    r(t, "Bg", k, c(t)), t;
                }
                return i(n, f), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        this.init(), g.getScene().on("MainNativeBannerOPPO", this.showOrHideBg, this), g.getScene().on("DestroyNativeBannerHW", this.onBackBtnClick, this);
                    }
                }, {
                    key: "showOrHideBg",
                    value: function(e) {
                        this.Bg.active = e;
                    }
                }, {
                    key: "init",
                    value: function() {
                        v.bannerData && (v.bannerAD.reportAdShow({
                            adId: v.bannerData.adId
                        }), v.setImage(this.icon, v.bannerData.imgUrlList[0], "png"));
                    }
                }, {
                    key: "onIconClick",
                    value: function() {
                        v.reportAdClickMainBanner();
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        this.node.removeAllChildren(), this.node.destroy();
                    }
                } ]), n;
            }()).prototype, "icon", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), k = t(I.prototype, "Bg", [ B ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), C = I)) || C)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UINativeHW.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.Node, g = e.LabelComponent, 
            f = e.Component;
        }, function(e) {
            v = e.Tools;
        }, function(e) {
            m = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "86507xVBcBBVbeZzVy4MAsq", "UINativeHW", void 0), T = h.ccclass, 
            U = h.property, e("UINativeHW", (y = T("UINativeHW"), B = U(d), C = U(p), I = U(g), 
            y((b = t((k = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "icon", b, c(t)), 
                    r(t, "backBtn", S, c(t)), r(t, "titleT", _, c(t)), t;
                }
                return i(n, f), u(n, [ {
                    key: "start",
                    value: function() {
                        this.init(), m.instance.UIHWNativeAdNode = this.node;
                    }
                }, {
                    key: "init",
                    value: function() {
                        v.bannerData && (-1 != v.bannerData.imgUrlList[0].indexOf("png") ? v.setImage(this.icon, v.bannerData.imgUrlList[0], "png") : v.setImage(this.icon, v.bannerData.imgUrlList[0], "jpg"), 
                        this.titleT.string = v.bannerData.title);
                        var e = m.instance.hwNativeAdWuChu.SCALE;
                        this.backBtn.setScale(e, e, e);
                    }
                }, {
                    key: "onIconClick",
                    value: function() {
                        v.bannerData && (v.bannerAD.reportAdClick({
                            adId: v.bannerData.adId
                        }), this.onDes());
                    }
                }, {
                    key: "onDes",
                    value: function() {
                        this.node.removeAllChildren(), this.node.destroy(), m.instance.UIHWNativeAdNode = null;
                    }
                } ]), n;
            }()).prototype, "icon", [ B ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), S = t(k.prototype, "backBtn", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), _ = t(k.prototype, "titleT", [ I ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), w = k)) || w)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UINativeVivo.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.Node, g = e.LabelComponent, 
            f = e.tween, v = e.Vec3, m = e.Component;
        }, function(e) {
            y = e.Tools;
        }, function(e) {
            B = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "d0272GQqb5GzL0A2nPJxGpT", "UINativeVivo", void 0), M = h.ccclass, 
            x = h.property, e("UINativeVivo", (C = M("UINativeVivo"), I = x(d), w = x(p), k = x(p), 
            b = x(p), S = x(g), C((U = t((T = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "icon", U, c(t)), 
                    r(t, "backBtn", N, c(t)), r(t, "lookBtn", P, c(t)), r(t, "spr", D, c(t)), r(t, "descT", A, c(t)), 
                    t.nativeAd = null, t.nativeImage = null, t.nativeAdId = null, t;
                }
                return i(n, m), u(n, [ {
                    key: "start",
                    value: function() {
                        this.init();
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        if (B.instance.nativeAdObj && (this.nativeAd = B.instance.nativeAdObj.nativeAd, 
                        this.nativeImage = B.instance.nativeAdObj.main ? B.instance.nativeAdObj.main : B.instance.nativeAdObj.icon, 
                        this.nativeAdId = B.instance.nativeAdObj.adId, this.descT.string = B.instance.nativeAdObj.desc, 
                        console.log("descVIVO", this.nativeAd), this.schedule(function() {
                            f(e.lookBtn).to(.5, {
                                scale: new v(.8, .8, .8)
                            }).call(function() {
                                f(e.lookBtn).to(.5, {
                                    scale: new v(1.1, 1.1, 1.1)
                                }).start();
                            }).start();
                        }, 1), B.instance.nativeAdObj.main || (this.icon.node.width = this.icon.node.height), 
                        this.nativeAd.reportAdShow({
                            adId: this.nativeAdId
                        })), this.nativeAd && this.nativeImage && this.nativeAdId) {
                            y.confirmEnding(this.nativeImage, "png") ? y.setImage(this.icon, this.nativeImage, "png") : y.setImage(this.icon, this.nativeImage, "jpg");
                            var n = B.instance.vivoWuChuConfig.SCALE;
                            this.backBtn.setScale(n, n, n);
                        } else this.onBackBtnClick();
                    }
                }, {
                    key: "onLookBtnClick",
                    value: function() {
                        this.nativeAd && this.nativeAdId && this.nativeAd.reportAdClick({
                            adId: this.nativeAdId
                        });
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        this.node.removeFromParent(), this.node.destroy(), y.cleanUnuseRes();
                    }
                } ]), n;
            }()).prototype, "icon", [ I ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), N = t(T.prototype, "backBtn", [ w ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), P = t(T.prototype, "lookBtn", [ k ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), D = t(T.prototype, "spr", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), A = t(T.prototype, "descT", [ S ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), _ = T)) || _)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIOppoYinSi.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.Vec3, g = e.game, f = e.director, 
            v = e.Component;
        }, function(e) {
            m = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "c891eO9zdNNIoPkNhpKVSCY", "UIOppoYinSi", void 0), k = h.ccclass, 
            b = h.property, e("UIOppoYinSi", (y = k("UIOppoYinSi"), B = b(d), y((w = t((I = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "UIOppoYinSiZhengCe", w, c(t)), 
                    t;
                }
                return i(n, v), u(n, [ {
                    key: "start",
                    value: function() {
                        window.UIOppoYinSi = this, this.node.parent.getChildByName("logoBg").getChildByName("logobottom").position = new p(0, -cc.winSize.height / 2 * .74, 0), 
                        1 == m.instance.isShowOppoYinSi && this.onYesBtnClick();
                    }
                }, {
                    key: "onYinSiBtnClick",
                    value: function() {
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showYs", "()V");
                    }
                }, {
                    key: "onBtnFuWu",
                    value: function() {
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showYs1", "()V");
                    }
                }, {
                    key: "onNoBtnClick",
                    value: function() {
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "onExit", "()V"), 
                        g.end();
                    }
                }, {
                    key: "onYesBtnClick",
                    value: function() {
                        this.node.active = !1, m.instance.isShowOppoYinSi = 1, localStorage.setItem("isShowOppoYinSi", m.instance.isShowOppoYinSi.toString()), 
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "toLogin", "()V"), 
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "requestPermission", "()V");
                    }
                }, {
                    key: "onLoadScene",
                    value: function() {
                        this.scheduleOnce(function() {
                            f.loadScene("GameScene");
                        }, 1.5);
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        this.UIOppoYinSiZhengCe.active = !1;
                    }
                } ]), n;
            }()).prototype, "UIOppoYinSiZhengCe", [ B ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), C = I)) || C)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIPVP.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W, q, Y, K, X, J, Q, Z, $, ee, ne, te, ie, oe, ae, se, re, ce, ue, le, he, de, pe, ge, fe, ve;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _dec9: void 0,
        _dec10: void 0,
        _dec11: void 0,
        _dec12: void 0,
        _dec13: void 0,
        _dec14: void 0,
        _dec15: void 0,
        _dec16: void 0,
        _dec17: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _descriptor8: void 0,
        _descriptor9: void 0,
        _descriptor10: void 0,
        _descriptor11: void 0,
        _descriptor12: void 0,
        _descriptor13: void 0,
        _descriptor14: void 0,
        _descriptor15: void 0,
        _descriptor16: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.SpriteComponent, g = e.LabelComponent, 
            f = e.Font, v = e.SliderComponent, m = e.Vec3, y = e.director, B = e.SpriteFrame, 
            C = e.Color, I = e.Component;
        }, function(e) {
            w = e.CUR_PLATFORM, k = e.PLATFORM_TYPE, b = e.YOUMENG_EVENT, S = e.BUG_BAG_PRICE, 
            _ = e.QUEENANT_ROOM_INFO, T = e.SOUND_TYPE, U = e.PVP_INFO, N = e.YOUEMNG_EVENT_ENUM, 
            P = e.MAIDIAN_STEPS;
        }, function(e) {
            D = e.Tools;
        }, function(e) {
            A = e.GameManager;
        }, function(e) {
            M = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "253cchNhwNO5Z++sH8X/6kA", "UIPVP", void 0), fe = h.ccclass, ve = h.property, 
            e("UIPVP", (x = fe("UIPVP"), R = ve(d), O = ve(d), j = ve(d), L = ve(p), z = ve(p), 
            V = ve(p), H = ve(p), E = ve(g), G = ve(g), F = ve(g), W = ve(d), q = ve(d), Y = ve(f), 
            K = ve(f), X = ve(d), J = ve(v), x(($ = t((Z = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "pageBtnArray", $, c(t)), 
                    r(t, "pageViewArray", ee, c(t)), r(t, "itemArray", ne, c(t)), r(t, "firstPageBtn", te, c(t)), 
                    r(t, "upPageBtn", ie, c(t)), r(t, "nextPageBtn", oe, c(t)), r(t, "endPageBtn", ae, c(t)), 
                    r(t, "pageNumT", se, c(t)), r(t, "antLvT", re, c(t)), r(t, "antNumT", ce, c(t)), 
                    r(t, "antSprBg", ue, c(t)), r(t, "TTShareBtn", le, c(t)), r(t, "chineseFont", he, c(t)), 
                    r(t, "numberFont", de, c(t)), r(t, "leftNode", pe, c(t)), r(t, "sliders", ge, c(t)), 
                    t.sliderBars = [], t.sliderCountLabels = [], t.weights = [ 0, 0, 0 ], t.antMax = 0, 
                    t.rankingPageNum = 1, t.curMyRanking = 0, t.curRankingConfig = {
                        id: [],
                        cup: [],
                        power: []
                    }, t.bugBagVideoSp = [], t.bugBagDiamondIcon = [], t.bugBagLabel = [], t.bugBagIcon = [], 
                    t;
                }
                return i(n, I), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        this.leftNode.setPosition(-cc.winSize.width / 2, 0, 0), M.instance.UILoad.active = !1, 
                        M.instance.shiPeiUIBackBtn(this.leftNode.getChildByName("backBtn")), this.initBag(), 
                        this.initFightInfo(), A.instance.showNativeAdItem(new m(cc.winSize.width / 2 - 86, -270, 0)), 
                        this.TTShareBtn.active = !1, w == k.TT ? (this.TTShareBtn.active = !0, D.showBanner(!0)) : w == k.WX && M.instance.guideSteps > 30 && D.showBanner(!0), 
                        M.instance.youMenDaDian(b.worldChallenge_come), w == k.ANDROID_XiaoMi && D.showBanner(!0), 
                        M.instance.tryShowInterAd2();
                    }
                }, {
                    key: "initBag",
                    value: function() {
                        for (var e = 1; e <= 12; e++) {
                            var n = this.pageViewArray[1].getChildByName("package" + e), t = n.getChildByName("vedioSpr"), i = n.getChildByName("jewelSpr"), o = this.pageViewArray[1].getChildByName("packageT" + e).getComponent(g), a = n.getChildByName("icon").getComponent(p);
                            this.bugBagVideoSp.push(t), this.bugBagDiamondIcon.push(i), this.bugBagLabel.push(o.node), 
                            this.bugBagIcon.push(a), o.string = S[e - 1].toString(), n.on("touch-end", this.onTouchBagClick, this);
                        }
                        this.refreshBag();
                    }
                }, {
                    key: "onTouchBagClick",
                    value: function(e) {
                        var n = e.target.name, t = parseInt(n.split("package")[1]) - 1;
                        if (M.instance.bagInfo.length > t) ; else {
                            var i = function() {
                                M.instance.bagInfo.push(1), localStorage.setItem("bagInfo", M.instance.bagInfo.join(",")), 
                                this.refreshBag(), D.ShowTip("购买背包成功");
                            }.bind(this);
                            t == M.instance.bagInfo.length ? M.instance.jewelNum >= S[t] ? (M.instance.jewelNum -= S[t], 
                            localStorage.setItem("jewelNum", M.instance.jewelNum.toString()), y.getScene().emit("UpdateFoodShow"), 
                            M.instance.youMenDaDian(b.useGem), i()) : D.ShowTip("宝石不足") : D.ShowTip("请先购买前面的格子");
                        }
                    }
                }, {
                    key: "refreshBag",
                    value: function() {
                        for (var e = [], n = 0; n < M.instance.nestRoomConfig.bugIDs.length; n++) {
                            var t = M.instance.nestRoomConfig.bugIDs[n].id;
                            t > 1 && !M.instance.isSolderAnt(t) && e.push(t);
                        }
                        for (var i = 0; i < 12; i++) e[i] ? (this.bugBagIcon[i].node.active = !0, D.setImage(this.bugBagIcon[i], "resTex/UIShop_bug" + e[i], B), 
                        this.bugBagVideoSp[i].active = !1, this.bugBagDiamondIcon[i].active = !1, this.bugBagLabel[i].active = !1) : M.instance.bagInfo.length > i ? (this.bugBagIcon[i].node.active = !1, 
                        this.bugBagVideoSp[i].active = !1, this.bugBagDiamondIcon[i].active = !1, this.bugBagLabel[i].active = !1) : (this.bugBagIcon[i].node.active = !1, 
                        this.bugBagVideoSp[i].active = !1, this.bugBagDiamondIcon[i].active = !0, this.bugBagLabel[i].active = !0);
                    }
                }, {
                    key: "start",
                    value: function() {
                        47 == M.instance.guideSteps && (M.instance.guideSteps = 48, D.ShowUI("UIGuide", null, null, this.pageViewArray[0].getChildByName("startBtn").worldPosition, !0, !0, !0, 14)), 
                        this.antMax = A.instance.getAntsAICountByTeam(0, 1);
                        var e = M.instance.nestRoomConfig.roomInfo[3].level;
                        e = D.clampf(e, 1, 999);
                        var n = _[e - 1].unlockAntNum;
                        this.antNumT.string = this.antMax + "/" + n, this.antLvT.string = "Lv." + e, this.weights[0] = M.instance.pvpDefenseConfig[0], 
                        this.weights[1] = M.instance.pvpDefenseConfig[1], this.weights[2] = M.instance.pvpDefenseConfig[2];
                        for (var t = 0; t < this.sliders.length; t++) {
                            var i = this.sliders[t], o = i.node.getChildByName("countT").getComponent(g), a = i.node.getChildByName("Bar").getComponent(p);
                            this.sliderBars.push(a), this.sliderCountLabels.push(o), i.handle.node.on("touch-end", this.touchEnd, this), 
                            i.handle.node.on("touch-cancel", this.touchEnd, this), this.antMax > 0 ? this.antMax > 15 ? i.progress = this.weights[t] / 15 : i.progress = this.weights[t] / this.antMax : i.progress = 0, 
                            o.string = this.weights[t].toString();
                        }
                        for (var s = 0; s < this.weights.length; s++) this.handleBarSlide(this.sliders[s], s.toString());
                        this.refreshLeftCount(), M.instance.updateRankingConfigInfo(), this.updateRaningInfo();
                    }
                }, {
                    key: "updateRaningInfo",
                    value: function() {
                        this.curRankingConfig.id.push(0), this.curRankingConfig.cup.push(M.instance.cupCount);
                        var e = M.instance.getCurPower(M.instance.nestRoomConfig);
                        this.curRankingConfig.power.push(e);
                        for (var n = 0; n < M.instance.rankingConfig.id.length; n++) this.curRankingConfig.id.push(M.instance.rankingConfig.id[n]), 
                        this.curRankingConfig.cup.push(M.instance.rankingConfig.cup[n]), this.curRankingConfig.power.push(M.instance.rankingConfig.power[n]);
                        this.curRankingConfig = M.instance.sortRankingInfo(this.curRankingConfig);
                        for (var t = 0; t < this.curRankingConfig.id.length; t++) {
                            var i = this.curRankingConfig.id[t];
                            if (this.curRankingConfig.cup[t], 0 == i) {
                                M.instance.cupCount > this.curRankingConfig.cup[this.curRankingConfig.cup.length - 1] ? this.curMyRanking = t + 1 : this.curMyRanking = 0;
                                break;
                            }
                        }
                    }
                }, {
                    key: "onFightBtnClick",
                    value: function() {
                        D.playSound(T.BTNCLICK), this.pageViewShowOrHide(0), this.changeSprColor(0), this.initFightInfo();
                    }
                }, {
                    key: "initFightInfo",
                    value: function() {
                        var e = this.pageViewArray[0].getChildByName("levelLab").getComponent(g);
                        this.pageViewArray[0].getChildByName("cupCountT").getComponent(g).string = "" + M.instance.cupCount;
                        var n = M.instance.getStep(M.instance.cupCount);
                        e.string = U[n].name;
                        var t = this.pageViewArray[0].getChildByName("countSpr").getComponent(p);
                        if (D.setImage(t, "resTex/UIShop_" + M.instance.pvpFightCount, B), M.instance.pvpFightCount <= 0) {
                            var i = this.pageViewArray[0].getChildByName("startBtn").getComponent(p);
                            D.setImage(i, "resTex/UIPVP_btn3", B);
                        }
                    }
                }, {
                    key: "onDefenseBtnClick",
                    value: function() {
                        D.playSound(T.BTNCLICK), this.pageViewShowOrHide(1), this.changeSprColor(1);
                    }
                }, {
                    key: "onRankingBtnClick",
                    value: function() {
                        D.playSound(T.BTNCLICK), this.pageViewShowOrHide(2), this.changeSprColor(2), this.updateRankingInfo(), 
                        this.updateMyRankingInfo();
                    }
                }, {
                    key: "onLayoutBtnClick",
                    value: function() {
                        M.instance.pvpDefenseConfig = this.weights, localStorage.setItem("pvpDefenseConfig", JSON.stringify(M.instance.pvpDefenseConfig));
                    }
                }, {
                    key: "onChongZhiBtnClick",
                    value: function() {
                        for (var e = 0; e < this.sliders.length; e++) {
                            var n = this.sliders[e], t = this.sliderCountLabels[e];
                            n.node.getChildByName("Bar").getComponent(p).fillRange = 0, n.progress = 0, t.string = "0", 
                            this.weights[e] = 0, this.updateAntSprShow(0, e);
                        }
                    }
                }, {
                    key: "updateAntSprShow",
                    value: function(e, n) {
                        for (var t = 0; t < 15; t++) this.antSprBg.getChildByName("item" + (n + 1) + "_" + (t + 1)).active = !1;
                        if (e > 0) for (var i = 0; i < e; i++) this.antSprBg.getChildByName("item" + (n + 1) + "_" + (i + 1)).active = !0; else for (var o = 0; o < 15; o++) this.antSprBg.getChildByName("item" + (n + 1) + "_" + (o + 1)).active = !1;
                    }
                }, {
                    key: "touchEnd",
                    value: function() {
                        for (var e = 0; e < this.sliderCountLabels.length; e++) {
                            var n = this.sliderCountLabels[e].string, t = parseInt(n);
                            this.weights[e] = t;
                        }
                    }
                }, {
                    key: "handleBarSlide",
                    value: function(e, n) {
                        var t = parseInt(n);
                        if (0 == this.antMax) e.node.getChildByName("Hand").setPosition(new m(-80.5, 0, 0)), 
                        e.progress = 0, this.sliderCountLabels[t].string = "0"; else {
                            var i = this.getLeftCount(t), o = 0;
                            (o = this.antMax > 15 ? Math.ceil(15 * e.progress) : Math.ceil(e.progress * this.antMax)) > i && (o = i), 
                            this.antMax > 15 ? e.progress = o / 15 : e.progress = o / this.antMax, this.sliderCountLabels[t].string = "" + o, 
                            this.sliderBars[t].fillRange = e.progress, this.updateAntSprShow(o, t);
                        }
                    }
                }, {
                    key: "getLeftCount",
                    value: function(e) {
                        for (var n = 0, t = 0; t < this.weights.length; t++) t != e && (n += this.weights[t]);
                        return this.antMax - n;
                    }
                }, {
                    key: "refreshLeftCount",
                    value: function() {
                        for (var e = 0; e < A.instance.ants.length; e++) {
                            var n = A.instance.ants[e];
                            n.isAI && -1 == n.aiController.newWorkType && 0 == n.team && M.instance.isSolderAnt(n.id);
                        }
                    }
                }, {
                    key: "changeSprColor",
                    value: function(e) {
                        for (var n = 0; n < this.pageBtnArray.length; n++) {
                            this.pageBtnArray[n].getComponent(p).color = e == n ? new C(255, 255, 255, 255) : new C(210, 152, 100, 255);
                        }
                    }
                }, {
                    key: "updateMyRankingInfo",
                    value: function() {
                        var e = this.node.getChildByName("rankingView").getChildByName("myItem"), n = e.getChildByName("rankingT").getComponent(g), t = e.getChildByName("lvT").getComponent(g), i = e.getChildByName("fightingT").getComponent(g), o = e.getChildByName("trophyT").getComponent(g), a = e.getChildByName("nameT").getComponent(g);
                        console.log("curMyRanking", this.curMyRanking), this.curMyRanking > 0 ? (n.string = "" + this.curMyRanking, 
                        n.font = this.numberFont, n.fontSize = 40, n.node.setPosition(-250.607, 0, 0)) : (n.string = "未上榜", 
                        n.font = this.chineseFont, n.fontSize = 22, n.node.setPosition(-250.607, 0, 0)), 
                        a.string = "你";
                        var s = M.instance.getCurPower(M.instance.nestRoomConfig);
                        i.string = "" + s, o.string = "" + M.instance.cupCount;
                        var r = M.instance.getStep(M.instance.cupCount);
                        t.string = U[r].name;
                    }
                }, {
                    key: "updateRankingInfo",
                    value: function() {
                        for (var e = 10 * this.rankingPageNum, n = e - 10; n < e; n++) {
                            var t = this.curRankingConfig.id[n], i = this.curRankingConfig.cup[n], o = this.curRankingConfig.power[n], a = this.itemArray[n % 10];
                            a.getChildByName("rankingT").getComponent(g).string = "" + (n + 1);
                            var s = a.getChildByName("lvT").getComponent(g), r = M.instance.getStep(i);
                            s.string = U[r].name;
                            var c = a.getChildByName("fightingT").getComponent(g);
                            c.string = "" + o;
                            var u = a.getChildByName("trophyT").getComponent(g);
                            u.string = "" + i;
                            var l = a.getChildByName("nameT").getComponent(g);
                            if (0 == t) {
                                l.string = "你";
                                var h = M.instance.getCurPower(M.instance.nestRoomConfig);
                                c.string = "" + h, u.string = "" + M.instance.cupCount, D.setImage(a.getComponent(p), "resTex/UIPVP_myBg", B);
                            } else D.setImage(a.getComponent(p), "resTex/UIPVP_blackBg", B);
                            for (var d = 0; d < 100; d++) {
                                var f = M.instance.rankingJsonConfig[d];
                                if (t == f.id) {
                                    f.name.length > 4 ? l.string = f.name.slice(0, 4) + "..." : l.string = f.name;
                                    break;
                                }
                            }
                        }
                    }
                }, {
                    key: "onFirstPageBtnClick",
                    value: function(e) {
                        D.playSound(T.BTNCLICK), this.rankingPageNum > 1 ? (this.rankingPageNum = 1, D.setImage(this.firstPageBtn, "resTex/UIPVP_firstPageBtn1", B), 
                        D.setImage(this.upPageBtn, "resTex/UIPVP_upPageBtn1", B), D.setImage(this.endPageBtn, "resTex/UIPVP_endPageBtn", B), 
                        D.setImage(this.nextPageBtn, "resTex/UIPVP_nextPageBtn", B), this.updateRankingInfo()) : D.ShowTip("已至首页"), 
                        this.pageNumT.string = this.rankingPageNum + "/10";
                    }
                }, {
                    key: "onUpPageBtnClick",
                    value: function(e) {
                        D.playSound(T.BTNCLICK), this.rankingPageNum > 1 ? (this.rankingPageNum--, this.rankingPageNum <= 1 ? (D.setImage(this.firstPageBtn, "resTex/UIPVP_firstPageBtn1", B), 
                        D.setImage(this.upPageBtn, "resTex/UIPVP_upPageBtn1", B)) : (D.setImage(this.endPageBtn, "resTex/UIPVP_endPageBtn", B), 
                        D.setImage(this.nextPageBtn, "resTex/UIPVP_nextPageBtn", B)), this.updateRankingInfo()) : D.ShowTip("已至首页"), 
                        this.pageNumT.string = this.rankingPageNum + "/10";
                    }
                }, {
                    key: "onNextPageBtnClick",
                    value: function(e) {
                        D.playSound(T.BTNCLICK), this.rankingPageNum < 10 ? (this.rankingPageNum++, this.rankingPageNum >= 10 ? (D.setImage(this.endPageBtn, "resTex/UIPVP_endPageBtn1", B), 
                        D.setImage(this.nextPageBtn, "resTex/UIPVP_nextPageBtn1", B)) : (D.setImage(this.firstPageBtn, "resTex/UIPVP_firstPageBtn", B), 
                        D.setImage(this.upPageBtn, "resTex/UIPVP_upPageBtn", B)), this.updateRankingInfo()) : D.ShowTip("已至尾页"), 
                        this.pageNumT.string = this.rankingPageNum + "/10";
                    }
                }, {
                    key: "onEndPageBtnClick",
                    value: function(e) {
                        D.playSound(T.BTNCLICK), this.rankingPageNum < 10 ? (this.rankingPageNum = 10, D.setImage(this.firstPageBtn, "resTex/UIPVP_firstPageBtn", B), 
                        D.setImage(this.upPageBtn, "resTex/UIPVP_upPageBtn", B), D.setImage(this.endPageBtn, "resTex/UIPVP_endPageBtn1", B), 
                        D.setImage(this.nextPageBtn, "resTex/UIPVP_nextPageBtn1", B), this.updateRankingInfo()) : D.ShowTip("已至尾页"), 
                        this.pageNumT.string = this.rankingPageNum + "/10";
                    }
                }, {
                    key: "pageViewShowOrHide",
                    value: function(e) {
                        for (var n = 0; n < this.pageViewArray.length; n++) {
                            this.pageViewArray[n].active = e == n;
                        }
                    }
                }, {
                    key: "onStartBtnClick",
                    value: function() {
                        if (48 == M.instance.guideSteps && (M.instance.guideSteps = 999, y.getScene().emit("CLOSE_GUIDE_UI"), 
                        localStorage.setItem("guideSteps", M.instance.guideSteps.toString())), M.instance.pvpFightCount <= 0) {
                            M.instance.youMengVideoClick = N.pvp_get5, M.instance.youMenDaDian(b.PVP_get5);
                            var e = function() {
                                M.instance.pvpFightCount = 5, localStorage.setItem("pvpFightCount", M.instance.pvpFightCount.toString());
                                var e = this.pageViewArray[0].getChildByName("countSpr").getComponent(p);
                                D.setImage(e, "resTex/UIShop_" + M.instance.pvpFightCount, B);
                                var n = this.pageViewArray[0].getChildByName("startBtn").getComponent(p);
                                D.setImage(n, "resTex/UIPVP_btn1", B), M.instance.youMenDaDian(b.PVP_get5_complete);
                            }.bind(this);
                            M.instance.watchVideo("", e);
                        } else {
                            for (var n = !1, t = 0; t < A.instance.ants.length; t++) {
                                var i = A.instance.ants[t];
                                if (0 == i.team && i.id > 0) {
                                    n = !0;
                                    break;
                                }
                            }
                            if (n) {
                                if (M.instance.curMode = "PVP", M.instance.pvpEnemyInfo = M.instance.matchPvpPlayer(), 
                                M.instance.pvpEnemyRoomConfig = M.instance.randomEnemyRoomConfigByPower(M.instance.pvpEnemyInfo.power), 
                                console.log("我的战力", M.instance.getCurPower(M.instance.nestRoomConfig)), console.log("随机PVP对手信息", M.instance.pvpEnemyInfo), 
                                console.log("随机pvp对手巢穴信息", M.instance.pvpEnemyRoomConfig), M.instance.wxReportEvent(P.STEPS_48), 
                                y.loadScene("PvpScene"), D.showBanner(!1), M.instance.pvpFightCount > 0) {
                                    M.instance.pvpFightCount--, localStorage.setItem("pvpFightCount", M.instance.pvpFightCount.toString());
                                    var o = this.pageViewArray[0].getChildByName("countSpr").getComponent(p);
                                    D.setImage(o, "resTex/UIShop_" + M.instance.pvpFightCount, B);
                                }
                                if (M.instance.pvpFightCount <= 0) {
                                    var a = this.pageViewArray[0].getChildByName("startBtn").getComponent(p);
                                    D.setImage(a, "resTex/UIPVP_btn3", B);
                                }
                                M.instance.youMenDaDian(b.PVP_in);
                            } else D.ShowTip("没有可出战单位");
                        }
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        D.playSound(T.BTNCLICK), M.instance.videoCounterTimeGo(), this.node.removeFromParent(), 
                        this.node.destroy(), D.cleanUnuseRes(), D.showBanner(!1), M.instance.wxInterAdCount++, 
                        y.getScene().emit("SHOW_WX_INTERAD"), y.getScene().emit("Vivo_showBanner"), y.getScene().emit("MainNativeBannerOPPO", !0), 
                        y.getScene().emit("DestroyNativeItem"), M.instance.onShowBannerType(!0), y.getScene().emit("ShowNativeAdItem", new m(cc.winSize.width / 2 - 358, 200, 0));
                    }
                }, {
                    key: "myItemShare",
                    value: function() {
                        w == k.TT && D.TTShare();
                    }
                } ]), n;
            }()).prototype, "pageBtnArray", [ R ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), ee = t(Z.prototype, "pageViewArray", [ O ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), ne = t(Z.prototype, "itemArray", [ j ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), te = t(Z.prototype, "firstPageBtn", [ L ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ie = t(Z.prototype, "upPageBtn", [ z ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), oe = t(Z.prototype, "nextPageBtn", [ V ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ae = t(Z.prototype, "endPageBtn", [ H ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), se = t(Z.prototype, "pageNumT", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), re = t(Z.prototype, "antLvT", [ G ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ce = t(Z.prototype, "antNumT", [ F ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ue = t(Z.prototype, "antSprBg", [ W ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), le = t(Z.prototype, "TTShareBtn", [ q ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), he = t(Z.prototype, "chineseFont", [ Y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), de = t(Z.prototype, "numberFont", [ K ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), pe = t(Z.prototype, "leftNode", [ X ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ge = t(Z.prototype, "sliders", [ J ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Q = Z)) || Q)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIPVPFight.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./PvpGameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _dec9: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _descriptor8: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.LabelComponent, g = e.director, 
            f = e.Component;
        }, function(e) {
            v = e.PVP_TIME, m = e.CUR_PLATFORM, y = e.PLATFORM_TYPE;
        }, function(e) {
            B = e.Tools;
        }, function(e) {
            C = e.PvpGameManager;
        }, function(e) {
            I = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "15917XFiz5F3pssE8H0It14", "UIPVPFight", void 0), H = h.ccclass, 
            E = h.property, e("UIPVPFight", (w = H("UIPVPFight"), k = E(d), b = E(d), S = E(d), 
            _ = E(p), T = E(p), U = E(p), N = E(p), P = E(p), w((M = t((A = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "leftNode", M, c(t)), 
                    r(t, "topNode", x, c(t)), r(t, "rightNode", R, c(t)), r(t, "player1LeftCount", O, c(t)), 
                    r(t, "player2LeftCount", j, c(t)), r(t, "timeLabel", L, c(t)), r(t, "enemyNameT", z, c(t)), 
                    r(t, "foodLabel", V, c(t)), t.leftTime = 180, t;
                }
                return i(n, f), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        this.leftTime = v, this.topNode.setPosition(0, cc.winSize.height / 2, 0), this.leftNode.setPosition(-cc.winSize.width / 2, 0, 0), 
                        this.rightNode.setPosition(cc.winSize.width / 2, 0, 0), I.instance.nodeShiPei(this.leftNode), 
                        B.showBanner(!0), this.updateUI(), this.schedule(this.updateUI, .2), this.updateTime(), 
                        this.schedule(this.updateTime, 1), m != y.TT && m != y.KS || (I.instance.TTPVPTime = 0, 
                        0 != I.instance.shareVideoIndex[0] && (this.schedule(this.TTPVPLuZhiTime, 1), B.TTRecorderVideo(), 
                        g.getScene().on("TTStopRecord", this.TTStopRecord, this))), this.enemyNameT.string = I.instance.pvpEnemyNameT;
                    }
                }, {
                    key: "TTStopRecord",
                    value: function() {
                        m != y.TT && m != y.KS || (this.unschedule(this.TTPVPLuZhiTime), B.TTStopRecord());
                    }
                }, {
                    key: "TTPVPLuZhiTime",
                    value: function() {
                        I.instance.TTPVPTime++, console.log("PVP界面录制时间:", I.instance.TTPVPTime);
                    }
                }, {
                    key: "onSetBtnClick",
                    value: function() {
                        I.instance.showUI("prefabs/ui/UISet");
                    }
                }, {
                    key: "onBtnTouXiangClick",
                    value: function() {
                        C.instance.showPvpGameOver(!1), m != y.TT && m != y.KS || (console.log("PVP界面录制结束：", I.instance.TTPVPTime), 
                        this.unschedule(this.TTPVPLuZhiTime), B.TTStopRecord());
                    }
                }, {
                    key: "updateUI",
                    value: function() {
                        for (var e = 0; e < this.foodLabel.length; e++) this.foodLabel[e].string = C.instance.reward[e] + "/" + C.instance.foodMax[e];
                        this.player1LeftCount.string = "" + I.instance.nestRoomConfig.bugIDs.length;
                        var n = C.instance.getHome(1);
                        n && (n.antQueen && !n.antQueen.isDead ? this.player2LeftCount.string = "" + Math.floor(I.instance.pvpEnemyRoomConfig.bugIDs.length + 1) : this.player2LeftCount.string = "" + Math.floor(I.instance.pvpEnemyRoomConfig.bugIDs.length));
                    }
                }, {
                    key: "updateTime",
                    value: function() {
                        this.leftTime = B.clampf(this.leftTime - 1, 0, v), this.timeLabel.string = Math.floor(this.leftTime).toString(), 
                        C.instance.isGameOver || this.leftTime <= 0 && C.instance.showPvpGameOver(!1);
                    }
                }, {
                    key: "onDestroy",
                    value: function() {
                        B.showBanner(!1);
                    }
                } ]), n;
            }()).prototype, "leftNode", [ k ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), x = t(A.prototype, "topNode", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), R = t(A.prototype, "rightNode", [ S ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), O = t(A.prototype, "player1LeftCount", [ _ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), j = t(A.prototype, "player2LeftCount", [ T ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), L = t(A.prototype, "timeLabel", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), z = t(A.prototype, "enemyNameT", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), V = t(A.prototype, "foodLabel", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), D = A)) || D)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIRank.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.SubContextView, g = e.director, 
            f = e.Component;
        }, function(e) {
            v = e.Tools;
        }, function(e) {
            m = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "a99656RFopPyYI26r5TjipV", "UIRank", void 0), S = h.ccclass, _ = h.property, 
            e("UIRank", (y = S("UIRank"), B = _(d), C = _(p), y((k = t((w = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "leftNode", k, c(t)), 
                    r(t, "subContextView", b, c(t)), t;
                }
                return i(n, f), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        this.leftNode.setPosition(-cc.winSize.width / 2, 0, 0), m.instance.UILoad.active = !1, 
                        m.instance.shiPeiUIBackBtn(this.leftNode.getChildByName("backBtn")), this.showRank(!0);
                    }
                }, {
                    key: "showRank",
                    value: function(e) {
                        if (e) {
                            var n = wx.getOpenDataContext();
                            n && n.postMessage({
                                type: "FriendRank"
                            });
                        }
                    }
                }, {
                    key: "onBtnCloseClick",
                    value: function() {
                        this.showRank(!1), this.node.removeFromParent(), this.node.destroy(), v.cleanUnuseRes(), 
                        g.getScene().emit("Vivo_showBanner");
                    }
                }, {
                    key: "onBtnPreClick",
                    value: function() {
                        var e = wx.getOpenDataContext();
                        e && e.postMessage({
                            type: "Paging",
                            value: -1
                        });
                    }
                }, {
                    key: "onBtnNextClick",
                    value: function() {
                        var e = wx.getOpenDataContext();
                        e && e.postMessage({
                            type: "Paging",
                            value: 1
                        });
                    }
                }, {
                    key: "onBtnShareClick",
                    value: function() {}
                } ]), n;
            }()).prototype, "leftNode", [ B ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), b = t(w.prototype, "subContextView", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), I = w)) || I)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIResLacking.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W, q, Y, K, X, J, Q;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _dec9: void 0,
        _dec10: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _descriptor8: void 0,
        _descriptor9: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.LabelComponent, p = e.SpriteComponent, g = e.Node, 
            f = e.tween, v = e.Vec3, m = e.SpriteFrame, y = e.Component;
        }, function(e) {
            B = e.CUR_PLATFORM, C = e.PLATFORM_TYPE, I = e.YOUMENG_EVENT, w = e.RES_AWARD_COUNT, 
            k = e.SOUND_TYPE, b = e.YOUEMNG_EVENT_ENUM, S = e.MAIDIAN_STEPS;
        }, function(e) {
            _ = e.Tools;
        }, function(e) {
            T = e.GameManager;
        }, function(e) {
            U = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "e4598JSEkdIvJmnvIeHZl+T", "UIResLacking", void 0), J = h.ccclass, 
            Q = h.property, e("UIResLacking", (N = J("UIResLacking"), P = Q(d), D = Q(p), A = Q(p), 
            M = Q(d), x = Q(g), R = Q(g), O = Q(g), j = Q(g), L = Q(g), N((H = t((V = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "descT", H, c(t)), 
                    r(t, "logo", E, c(t)), r(t, "countSpr", G, c(t)), r(t, "countT", F, c(t)), r(t, "logoSpr", W, c(t)), 
                    r(t, "rotateBg", q, c(t)), r(t, "backBtn", Y, c(t)), r(t, "videoBtn", K, c(t)), 
                    r(t, "hand", X, c(t)), t.wxWuChuBackBtnOpen = !1, t;
                }
                return i(n, y), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        var e = this;
                        B == C.TT && (this.backBtn.active = !0, this.node.getChildByName("backBtn").active = !1), 
                        U.instance.youMenDaDian(I.adGetResource_appear), B == C.ANDROID_XiaoMi && (this.hand.active = this.videoBtn.active, 
                        f(this.hand).to(0, {}).call(function() {
                            e.hand.getChildByName("hand0").active = !0, e.hand.getChildByName("hand1").active = !1;
                        }).delay(.35).call(function() {
                            e.hand.getChildByName("hand0").active = !1, e.hand.getChildByName("hand1").active = !0;
                        }).delay(.35).union().repeatForever().start(), f(this.videoBtn).to(.5, {
                            scale: new v(1.1, 1.1, 1)
                        }).to(1, {
                            scale: new v(.9, .9, 1)
                        }).union().repeatForever().start()), U.instance.tryShowInterAd2();
                    }
                }, {
                    key: "start",
                    value: function() {
                        U.instance.UILoad.active = !1, this.init();
                    }
                }, {
                    key: "init",
                    value: function() {
                        _.setImage(this.logo, "resTex/UIResLogo_" + U.instance.UIResLackingLogoIndex, m), 
                        this.countT.string = "+" + w[U.instance.UIResLackingLogoIndex].count, this.descT.string = w[U.instance.UIResLackingLogoIndex].desc, 
                        B == C.OPPO ? U.instance.isShowOppoBanner : B == C.VIVO && _.showBanner(!0), B == C.iOS && U.instance.guideSteps > 30 ? (1 == _.getRandomInt(1, 2) && window.NativeCtrl.showInsertitiald(), 
                        _.showBanner(!0)) : B == C.QQ ? _.showBanner(!0) : B == C.WX ? U.instance.wxBannerWuChuOpen || this.scheduleOnce(function() {}, .5) : B == C.HW ? _.showBanner(!0) : B == C.ANDROID_TAP ? _.showBanner(!0) : B == C.ANDROID_HW && _.showBanner(!0);
                    }
                }, {
                    key: "videoBtnClick",
                    value: function() {
                        _.playSound(k.BTNCLICK), U.instance.youMengVideoClick = b.resLacking, U.instance.youMenDaDian(I.adGetResource_click);
                        var e = function() {
                            var e = this;
                            U.instance.wxReportEvent(S.STEPS_25), U.instance.getUIResLackingCount--, this.countT.string = "+" + w[U.instance.UIResLackingLogoIndex].count, 
                            localStorage.setItem("getUIResLackingCount", U.instance.getUIResLackingCount.toString()), 
                            _.ShowUI("UIHint", null, null, 1, [ U.instance.UIResLackingLogoIndex - 1 ], [ w[U.instance.UIResLackingLogoIndex].count ]), 
                            this.node.active = !1, _.showBanner(!1), T.instance.desNativeBanner(), U.instance.youMenDaDian(I.adGetResource_complete), 
                            this.scheduleOnce(function() {
                                e.backBtnClick();
                            }, 1);
                        }.bind(this);
                        U.instance.shufenVideoID = 35, U.instance.watchVideo("", e);
                    }
                }, {
                    key: "backBtnClick",
                    value: function() {
                        if (_.playSound(k.BTNCLICK), B != C.WX || this.wxWuChuBackBtnOpen) {
                            if (B == C.QQ && U.instance.qqWuChuConfig && 1 == U.instance.qqWuChuConfig.VIDEO_OPEN && U.instance.qqBannerWuChuOpen) {
                                var e = function() {}.bind(this);
                                U.instance.watchVideo("", e);
                            }
                        } else U.instance.wxMaiLiangWuChuData && U.instance.wuchuOpen;
                        this.node.removeFromParent(), this.node.destroy(), _.cleanUnuseRes(), _.showBanner(!1), 
                        T.instance.desNativeBanner();
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.rotateBg.eulerAngles = this.rotateBg.eulerAngles.add(new v(0, 0, 1));
                    }
                } ]), n;
            }()).prototype, "descT", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), E = t(V.prototype, "logo", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), G = t(V.prototype, "countSpr", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), F = t(V.prototype, "countT", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), W = t(V.prototype, "logoSpr", [ x ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), q = t(V.prototype, "rotateBg", [ R ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Y = t(V.prototype, "backBtn", [ O ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), K = t(V.prototype, "videoBtn", [ j ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), X = t(V.prototype, "hand", [ L ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), z = V)) || z)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIRongHe.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.SpriteComponent, g = e.SpriteFrame, 
            f = e.tween, v = e.Vec3, m = e.Component;
        }, function(e) {
            y = e.SOUND_TYPE;
        }, function(e) {
            B = e.Tools;
        }, function(e) {
            C = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "bc5eaeRZe1A4ITg9A4wHAig", "UIRongHe", void 0), A = h.ccclass, M = h.property, 
            e("UIRongHe", (I = A("UIRongHe"), w = M(d), k = M(d), b = M(d), S = M(d), I((U = t((T = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "icon1", U, c(t)), 
                    r(t, "icon2", N, c(t)), r(t, "itemArray", P, c(t)), t.BG = null, r(t, "rotateBg", D, c(t)), 
                    t.isAni = !1, t;
                }
                return i(n, m), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        C.instance.UILoad.active = !1, this.initItemInfo(), this.BG = this.node.getChildByName("BG");
                    }
                }, {
                    key: "initItemInfo",
                    value: function() {
                        for (var e = 0; e < this.itemArray.length; e++) {
                            var n = C.instance.selectRongHeBugsInfo[0], t = this.itemArray[e].getChildByName("icon").getComponent(p);
                            B.setImage(t, "resTex/UIShop_bug" + n.id, g);
                            var i = 0, o = 0;
                            e == this.itemArray.length - 1 ? (i = n.star + 1, o = -86) : (i = n.star, o = -42), 
                            0 == i && t.node.setPosition(0, 0, 0);
                            for (var a = 0; a < i; a++) {
                                var s = this.itemArray[e].getChildByName("star" + a);
                                s.active = !0, 1 == i ? s.setPosition(0, o, 0) : 2 == i ? s.setPosition(40 * a - 20, o, 0) : 3 == i ? s.setPosition(40 * a - 40, o, 0) : 4 == i ? s.setPosition(40 * a - 60, o, 0) : 5 == i && s.setPosition(35 * a - 70, o, 0);
                            }
                        }
                        B.setImage(this.icon1.getComponent(p), "resTex/UIShop_bug" + C.instance.selectRongHeBugsInfo[0].id, g), 
                        B.setImage(this.icon2.getComponent(p), "resTex/UIShop_bug" + C.instance.selectRongHeBugsInfo[0].id, g);
                    }
                }, {
                    key: "iconAniEffect",
                    value: function(e) {
                        var n = this, t = f(e).to(.1, {
                            eulerAngles: new v(0, 0, 30)
                        }), i = f(e).to(.1, {
                            eulerAngles: new v(0, 0, 0)
                        }), o = f(e).to(.1, {
                            eulerAngles: new v(0, 0, -30)
                        }), a = f(e).to(.1, {
                            eulerAngles: new v(0, 0, 0)
                        });
                        f(e).sequence(t, i, o, a).repeat(999).start(), this.scheduleOnce(function() {
                            f(e).to(.7, {
                                position: new v(0, 0, 0)
                            }, {
                                easing: "backInOut"
                            }).call(function() {
                                n.isAni = !0;
                            }).start();
                        }, .5);
                    }
                }, {
                    key: "onRongHeBtnClick",
                    value: function() {
                        B.playSound(y.BTNCLICK), this.BG.active = !1, this.icon1.active = !0, this.icon2.active = !0, 
                        this.iconAniEffect(this.icon1), this.iconAniEffect(this.icon2);
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        B.playSound(y.BTNCLICK), this.destroyMain();
                    }
                }, {
                    key: "destroyMain",
                    value: function() {
                        this.node.removeFromParent(), this.node.destroy(), B.cleanUnuseRes();
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        var n = this;
                        this.isAni && (this.isAni = !1, this.rotateBg.active = !0, f(this.rotateBg).to(.5, {
                            scale: new v(10, 10, 10)
                        }).call(function() {
                            C.instance.UILoad.active = !0, C.instance.showUI("prefabs/ui/UIRongHeHint"), n.destroyMain();
                        }).start()), this.rotateBg.eulerAngles = this.rotateBg.eulerAngles.add(new v(0, 0, -1));
                    }
                } ]), n;
            }()).prototype, "icon1", [ w ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), N = t(T.prototype, "icon2", [ k ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), P = t(T.prototype, "itemArray", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), D = t(T.prototype, "rotateBg", [ S ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), _ = T)) || _)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIRongHeHint.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.SpriteComponent, g = e.SpriteFrame, 
            f = e.director, v = e.Vec3, m = e.Component;
        }, function(e) {
            y = e.SOUND_TYPE;
        }, function(e) {
            B = e.Tools;
        }, function(e) {
            C = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "5f88dZ7relAdJx7KBeXEZOw", "UIRongHeHint", void 0), U = h.ccclass, 
            N = h.property, e("UIRongHeHint", (I = U("UIRongHeHint"), w = N(d), k = N(p), I((_ = t((S = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "rotateBg", _, c(t)), 
                    r(t, "icon", T, c(t)), t.BG = null, t.sid = -1, t.deleteSid = -1, t;
                }
                return i(n, m), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        C.instance.UILoad.active = !1, this.BG = this.node.getChildByName("BG"), this.init();
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = C.instance.selectRongHeBugsInfo[0];
                        console.log(C.instance.selectRongHeBugsInfo), B.setImage(this.icon, "resTex/UIShop_bug" + e.id, g);
                        for (var n = e.star + 1, t = 0; t < n; t++) {
                            var i = this.BG.getChildByName("star" + t);
                            i.active = !0, 1 == n ? i.setPosition(0, -123, 0) : 2 == n ? i.setPosition(40 * t - 20, -123, 0) : 3 == n ? i.setPosition(40 * t - 40, -123, 0) : 4 == n ? i.setPosition(40 * t - 60, -123, 0) : 5 == n && i.setPosition(40 * t - 80, -123, 0);
                        }
                        for (var o = 0; o < C.instance.nestRoomConfig.bugIDs.length; o++) {
                            var a = C.instance.nestRoomConfig.bugIDs[o];
                            C.instance.selectRongHeBugsInfo[0].sid == a.sid && (a.star++, this.sid = a.sid);
                        }
                        for (var s = 0; s < C.instance.nestRoomConfig.bugIDs.length; s++) {
                            var r = C.instance.nestRoomConfig.bugIDs[s];
                            C.instance.selectRongHeBugsInfo[1].sid == r.sid && (this.deleteSid = r.sid, C.instance.nestRoomConfig.bugIDs.splice(s, 1));
                        }
                        localStorage.setItem("nestRoomConfig", JSON.stringify(C.instance.nestRoomConfig)), 
                        f.getScene().emit("DELETE_BUG", this.deleteSid);
                    }
                }, {
                    key: "onBtnClick",
                    value: function() {
                        B.playSound(y.BTNCLICK), f.getScene().emit("REFRESH_SOLDIERUI"), f.getScene().emit("ON_STAR_CHANGE", this.sid), 
                        C.instance.selectRongHeBugsInfo = [], this.node.removeFromParent(), this.node.destroy();
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        this.rotateBg.eulerAngles = this.rotateBg.eulerAngles.add(new v(0, 0, -1));
                    }
                } ]), n;
            }()).prototype, "rotateBg", [ w ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), T = t(S.prototype, "icon", [ k ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), b = S)) || b)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UISet.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.Vec3, g = e.SpriteComponent, 
            f = e.SpriteFrame, v = e.director, m = e.Component;
        }, function(e) {
            y = e.CUR_PLATFORM, B = e.PLATFORM_TYPE, C = e.SOUND_TYPE;
        }, function(e) {
            I = e.Tools;
        }, function(e) {
            w = e.GameManager;
        }, function(e) {
            k = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "cd160QNINBKf5fs+tvhXwKB", "UISet", void 0), j = h.ccclass, L = h.property, 
            e("UISet", (b = j("UISet"), S = L(d), _ = L(d), T = L(d), U = L(d), N = L(d), b((A = t((D = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "musicBtn", A, c(t)), 
                    r(t, "soundBtn", M, c(t)), r(t, "shakeBtn", x, c(t)), r(t, "qualityBtn", R, c(t)), 
                    r(t, "leftNode", O, c(t)), t;
                }
                return i(n, m), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        y == B.ANDROID_XiaoMi && I.showBanner(!0), y != B.ANDROID_OPPO && y != B.ANDROID_VIVO || (this.node.getChildByName("ovLabel").active = !0), 
                        this.leftNode.setPosition(-cc.winSize.width / 2, 0, 0), k.instance.shiPeiUIBackBtn(this.leftNode.getChildByName("backBtn")), 
                        k.instance.UILoad.active = !1, y == B.QQ ? I.showBanner(!0) : y == B.OPPO ? (k.instance.isShowOppoBanner, 
                        w.instance.showNativeAdItem(new p(cc.winSize.width / 2 - 86, -270, 0))) : y == B.VIVO ? (I.showBanner(!0), 
                        I.showBanner_vivoMain(!0)) : y == B.WX ? (k.instance.guideSteps, I.showBanner(!0)) : y == B.HW ? I.showBanner(!0) : y == B.iOS ? I.showBanner(!0) : y == B.ANDROID_TAP ? I.showBanner(!0) : y == B.ANDROID_HW ? I.showBanner(!0) : y == B.TT && I.showBanner(!0), 
                        k.instance.tryShowInterAd2();
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.init();
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = "", n = "", t = "", i = new p(0, 1, 0), o = new p(0, 0, 0);
                        0 == k.instance.musicOpen ? (e = "关", n = "resTex/UISet_colseBg", t = "resTex/UISet_guan", 
                        i.x = -25, o.x = 40) : (e = "开", n = "resTex/UISet_openBg", t = "resTex/UISet_kai", 
                        i.x = 25, o.x = -40), this.commonFunc(this.musicBtn, e, n, i, o, t), 0 == k.instance.soundOpen ? (e = "关", 
                        t = "resTex/UISet_guan", n = "resTex/UISet_colseBg", i.x = -25, o.x = 40) : (e = "开", 
                        t = "resTex/UISet_kai", n = "resTex/UISet_openBg", i.x = 25, o.x = -40), this.commonFunc(this.soundBtn, e, n, i, o, t), 
                        0 == k.instance.shakeOpen ? (e = "关", n = "resTex/UISet_colseBg", t = "resTex/UISet_guan", 
                        i.x = -25, o.x = 40) : (e = "开", t = "resTex/UISet_kai", n = "resTex/UISet_openBg", 
                        i.x = 25, o.x = -40), this.commonFunc(this.shakeBtn, e, n, i, o, t), 0 == k.instance.qualityOpen ? (e = "低", 
                        t = "resTex/UISet_di", n = "resTex/UISet_colseBg", i.x = -25, o.x = 40) : (e = "高", 
                        t = "resTex/UISet_gao", n = "resTex/UISet_openBg", i.x = 25, o.x = -40), this.commonFunc(this.qualityBtn, e, n, i, o, t);
                    }
                }, {
                    key: "musicBtnClick",
                    value: function() {
                        I.playSound(C.BTNCLICK), k.instance.musicOpen = 1 == k.instance.musicOpen ? 0 : 1;
                        var e = "", n = "", t = "", i = new p(0, 1, 0), o = new p(0, 0, 0);
                        0 == k.instance.musicOpen ? (e = "关", n = "resTex/UISet_colseBg", t = "resTex/UISet_guan", 
                        i.x = -25, o.x = 40, I.stopMusic()) : (e = "开", n = "resTex/UISet_openBg", t = "resTex/UISet_kai", 
                        i.x = 25, o.x = -40, w.instance.curPlayer && w.instance.curPlayer.isHome ? I.playBGMusic(C.ROOM_BGM) : I.playBGMusic(C.WORLD_BGM)), 
                        this.commonFunc(this.musicBtn, e, n, i, o, t), localStorage.setItem("musicOpen", k.instance.musicOpen.toString());
                    }
                }, {
                    key: "soundBtnClick",
                    value: function() {
                        I.playSound(C.BTNCLICK), k.instance.soundOpen = 1 == k.instance.soundOpen ? 0 : 1;
                        var e = "", n = "", t = "", i = new p(0, 1, 0), o = new p(0, 0, 0);
                        0 == k.instance.soundOpen ? (e = "关", n = "resTex/UISet_colseBg", t = "resTex/UISet_guan", 
                        i.x = -25, o.x = 40) : (e = "开", n = "resTex/UISet_openBg", t = "resTex/UISet_kai", 
                        i.x = 25, o.x = -40), this.commonFunc(this.soundBtn, e, n, i, o, t), localStorage.setItem("soundOpen", k.instance.soundOpen.toString());
                    }
                }, {
                    key: "shakeBtnClick",
                    value: function() {
                        I.playSound(C.BTNCLICK), k.instance.shakeOpen = 1 == k.instance.shakeOpen ? 0 : 1;
                        var e = "", n = "", t = "", i = new p(0, 1, 0), o = new p(0, 0, 0);
                        0 == k.instance.shakeOpen ? (e = "关", n = "resTex/UISet_guan", t = "resTex/UISet_colseBg", 
                        i.x = -25, o.x = 40) : (e = "开", n = "resTex/UISet_kai", t = "resTex/UISet_openBg", 
                        i.x = 25, o.x = -40), this.commonFunc(this.shakeBtn, e, t, i, o, n), localStorage.setItem("shakeOpen", k.instance.shakeOpen.toString());
                    }
                }, {
                    key: "qualityBtnClick",
                    value: function() {
                        I.playSound(C.BTNCLICK), k.instance.qualityOpen = 1 == k.instance.qualityOpen ? 0 : 1;
                        var e = "", n = "", t = "", i = new p(0, 1, 0), o = new p(0, 0, 0);
                        0 == k.instance.qualityOpen ? (e = "低", n = "resTex/UISet_colseBg", t = "resTex/UISet_di", 
                        i.x = -25, o.x = 40) : (e = "高", t = "resTex/UISet_gao", n = "resTex/UISet_openBg", 
                        i.x = 25, o.x = -40), this.commonFunc(this.qualityBtn, e, n, i, o, t), localStorage.setItem("qualityOpen", k.instance.qualityOpen.toString());
                    }
                }, {
                    key: "commonFunc",
                    value: function(e, n, t, i, o, a) {
                        var s = e;
                        I.setImage(s.getChildByName("spr").getComponent(g), a, f), s.getChildByName("spr").setPosition(o), 
                        s.getChildByName("typeT").setPosition(i), I.setImage(s.getComponent(g), t, f);
                    }
                }, {
                    key: "backBtnClick",
                    value: function() {
                        I.playSound(C.BTNCLICK), k.instance.videoCounterTimeGo(), this.node.removeFromParent(), 
                        this.node.destroy(), I.cleanUnuseRes(), I.showBanner(!1), k.instance.wxInterAdCount++, 
                        v.getScene().emit("SHOW_WX_INTERAD"), w.instance.desNativeBanner(), v.getScene().emit("Vivo_showBanner"), 
                        v.getScene().emit("MainNativeBannerOPPO", !0), v.getScene().emit("DestroyNativeItem"), 
                        k.instance.onShowBannerType(!0), v.getScene().emit("ShowNativeAdItem", new p(cc.winSize.width / 2 - 358, 200, 0));
                    }
                } ]), n;
            }()).prototype, "musicBtn", [ S ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), M = t(D.prototype, "soundBtn", [ _ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), x = t(D.prototype, "shakeBtn", [ T ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), R = t(D.prototype, "qualityBtn", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), O = t(D.prototype, "leftNode", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), P = D)) || P)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UISevenSign.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./ShufenManager.js", "./Tools.js", "./GameManager.js", "./DataManager.js", "./UILookVideo.js" ], function(e, t) {
    var i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W, q, Y, K, X, J, Q, Z, $, ee, ne, te, ie, oe, ae, se, re, ce, ue, le, he, de, pe;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _dec9: void 0,
        _dec10: void 0,
        _dec11: void 0,
        _dec12: void 0,
        _dec13: void 0,
        _dec14: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _descriptor8: void 0,
        _descriptor9: void 0,
        _descriptor10: void 0,
        _descriptor11: void 0,
        _descriptor12: void 0,
        _descriptor13: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            i = e.applyDecoratedDescriptor, o = e.inherits, a = e.classCallCheck, s = e.possibleConstructorReturn, 
            r = e.getPrototypeOf, c = e.initializerDefineProperty, u = e.assertThisInitialized, 
            l = e.createClass, h = e.asyncToGenerator;
        }, function(e) {
            d = e.cclegacy, p = e._decorator, g = e.Node, f = e.Font, v = e.SpriteComponent, 
            m = e.Vec3, y = e.tween, B = e.Vec2, C = e.CameraComponent, I = e.LabelComponent, 
            w = e.director, k = e.Component;
        }, function(e) {
            b = e.CUR_PLATFORM, S = e.PLATFORM_TYPE, _ = e.SIGN_GET_TYPE, T = e.SIGN_REWARD_TYPE, 
            U = e.YOUMENG_EVENT, N = e.SOUND_TYPE, P = e.SUPERANT_UNLOCK_TYPE, D = e.YOUEMNG_EVENT_ENUM;
        }, function(e) {
            A = e.default;
        }, function(e) {
            M = e.Tools;
        }, function(e) {
            x = e.GameManager;
        }, function(e) {
            R = e.default;
        }, function(e) {
            O = e.UILookVideo;
        } ],
        execute: function() {
            d._RF.push({}, "08cdd0qbyFAIbidcRA++igJ", "UISevenSign", void 0), de = p.ccclass, 
            pe = p.property, e("UISevenSign", (j = de("UISevenSign"), L = pe(g), z = pe(g), 
            V = pe(g), H = pe(g), E = pe(g), G = pe(g), F = pe(g), W = pe(f), q = pe(v), Y = pe(g), 
            K = pe(g), X = pe(g), J = pe(g), j(($ = i((Z = function(e) {
                function t() {
                    var e, n;
                    a(this, t);
                    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
                    return n = s(this, (e = r(t)).call.apply(e, [ this ].concat(o))), c(n, "getBtn", $, u(n)), 
                    c(n, "videoBtn", ee, u(n)), c(n, "videoGetBtn", ne, u(n)), c(n, "getSpr", te, u(n)), 
                    c(n, "selectSpr", ie, u(n)), c(n, "leftNode", oe, u(n)), c(n, "itemsArray", ae, u(n)), 
                    c(n, "numberFont", se, u(n)), c(n, "icon", re, u(n)), c(n, "rotateBg", ce, u(n)), 
                    c(n, "btnVideo", ue, u(n)), c(n, "hand", le, u(n)), c(n, "hand1", he, u(n)), n.isShowDouble = !0, 
                    n.tw2 = null, n.tw3 = null, n;
                }
                var i, d;
                return o(t, k), l(t, [ {
                    key: "onLoad",
                    value: function() {
                        this.isShowDouble = b != S.TT, this.videoBtn.active = this.isShowDouble, this.isShowDouble || this.getBtn.setPosition(0, this.getBtn.position.y, 0), 
                        R.instance.UILoad.active = !1, x.instance.showNativeAdItem(new m(cc.winSize.width / 2 - 86, -270, 0)), 
                        R.instance.tryShowInterAd2();
                    }
                }, {
                    key: "start",
                    value: function() {
                        var e = this;
                        A.reportCustom("2"), this.initItemInfo(), R.instance.signWheelCount_7 <= 1 && this.showAntModel(4), 
                        b == S.WX && M.showBanner(!0), b == S.TT && M.showBanner(!0), b == S.ANDROID_XiaoMi && (M.showBanner(!0), 
                        this.hand.active = this.videoBtn.active, y(this.hand).to(0, {}).call(function() {
                            e.hand.getChildByName("hand0").active = !0, e.hand.getChildByName("hand1").active = !1;
                        }).delay(.35).call(function() {
                            e.hand.getChildByName("hand0").active = !1, e.hand.getChildByName("hand1").active = !0;
                        }).delay(.35).union().repeatForever().start(), y(this.btnVideo).to(.5, {
                            scale: new m(1.1, 1.1, 1)
                        }).to(1, {
                            scale: new m(.9, .9, 1)
                        }).union().repeatForever().start());
                    }
                }, {
                    key: "showAntModel",
                    value: function(e) {
                        x.instance.loaderPlayer(e), M.renderImage(this.icon, new B(388, 300), x.instance.Player.getChildByName("camera").getComponent(C));
                    }
                }, {
                    key: "initItemInfo",
                    value: function() {
                        var e = new Date().getDate();
                        0 != R.instance.curDay_7 && R.instance.curDay_7 != e ? R.instance.signDayCount_7 >= 6 ? (R.instance.signDayCount_7 = 0, 
                        localStorage.setItem("signDayCount_7", R.instance.signDayCount_7.toString()), R.instance.signWheelCount_7++, 
                        localStorage.setItem("signWheelCount_7", R.instance.signWheelCount_7.toString()), 
                        R.instance.curDay_7 = e, localStorage.setItem("curDay_7", R.instance.curDay_7.toString()), 
                        this.initConfigInfo()) : R.instance.signDayCount_7 < 6 && (R.instance.signDayCount_7++, 
                        localStorage.setItem("signDayCount_7", R.instance.signDayCount_7.toString()), R.instance.curDay_7 = e, 
                        localStorage.setItem("curDay_7", R.instance.curDay_7.toString())) : 0 == R.instance.curDay_7 && (localStorage.setItem("signDayCount_7", R.instance.signDayCount_7.toString()), 
                        R.instance.curDay_7 = e, localStorage.setItem("curDay_7", R.instance.curDay_7.toString()));
                        for (var n = 0; n < this.itemsArray.length; n++) {
                            var t = R.instance.signConfig_7[n], i = this.itemsArray[n], o = i.getChildByName("countT").getComponent(I);
                            R.instance.signWheelCount_7 <= 1 ? n < this.itemsArray.length - 1 && (o.string = "+" + t.rewardNum) : (o.string = "+" + t.rewardNum, 
                            n >= this.itemsArray.length - 1 && (o.node.setPosition(o.node.position.x, o.node.position.y + 10, o.node.position.z), 
                            o.font = this.numberFont, i.getChildByName("logo").active = !0, i.getChildByName("icon").active = !1)), 
                            t.getType == _.yesGet ? i.getChildByName("msk").active = !0 : i.getChildByName("msk").active = !1, 
                            R.instance.signDayCount_7 != n && 0 == t.isGet && (i.getChildByName("msk").active = !0);
                        }
                        this.updateBtnType(), this.updateSelectPos();
                    }
                }, {
                    key: "initConfigInfo",
                    value: function() {
                        if (0 == R.instance.signDayCount_7 && R.instance.signWheelCount_7 > 1) {
                            for (var e = 0; e < R.instance.signConfig_7.length; e++) {
                                var n = R.instance.signConfig_7[e];
                                n.getType = _.get, n.isGet = 1, e >= R.instance.signConfig_7.length - 1 && (n.rewardType = T.jewel, 
                                n.rewardNum = 50);
                            }
                            localStorage.setItem("signConfig_7", JSON.stringify(R.instance.signConfig_7));
                        }
                    }
                }, {
                    key: "updateSelectPos",
                    value: function() {
                        var e = this.itemsArray[R.instance.signDayCount_7];
                        R.instance.signConfig_7[R.instance.signDayCount_7].getType, _.yesGet, R.instance.signDayCount_7 < 6 ? (this.selectSpr.width = 212, 
                        this.selectSpr.height = 225, this.selectSpr.setPosition(e.position.x, e.position.y, 0)) : (this.selectSpr.width = 620, 
                        this.selectSpr.height = 223, this.selectSpr.setPosition(e.position.x, e.position.y, 0));
                    }
                }, {
                    key: "itemBgAni",
                    value: function() {
                        var e = R.instance.signConfig_7[R.instance.signDayCount_7], n = this.itemsArray[R.instance.signDayCount_7];
                        e.getType != _.yesGet ? (x.instance.sprHuXiEffect(n, 1.05, .9), x.instance.sprHuXiEffect(this.selectSpr, 1.05, .9)) : (this.unschedule(this.itemBgAni), 
                        x.instance.sprHuXiEffect(n, 1, 1), x.instance.sprHuXiEffect(this.selectSpr, 1, 1));
                    }
                }, {
                    key: "onItemClick",
                    value: function(e, n) {}
                }, {
                    key: "updateItemInfo",
                    value: function() {
                        this.itemsArray[R.instance.signDayCount_7].getChildByName("msk").active = !0, w.getScene().emit("hideHongDian", 4);
                    }
                }, {
                    key: "updateBtnType",
                    value: function() {
                        var e = this, n = R.instance.signConfig_7[R.instance.signDayCount_7], t = this.itemsArray[R.instance.signDayCount_7];
                        R.instance.signWheelCount_7 <= 1 && R.instance.signDayCount_7 >= 6 ? (this.getBtn.setPosition(0, this.getBtn.position.y, 0), 
                        R.instance.signDayCount_7 >= 6 && (t.getChildByName("spr").active = !0, t.getChildByName("rotateBg").setPosition(150, 0, 0)), 
                        n.getType == _.get ? (this.getBtn.active = !0, this.videoBtn.active = !1, this.videoGetBtn.active = !1, 
                        this.getSpr.active = !1, this.changeVideoSprType(t, !1)) : n.getType == _.video ? (this.getBtn.active = !1, 
                        this.videoBtn.active = !1, this.videoGetBtn.active = !0, this.getSpr.active = !1, 
                        this.changeVideoSprType(t, !0), R.instance.youMenDaDian(U.signAgain_appear)) : (this.getBtn.active = !1, 
                        this.videoBtn.active = !1, this.videoGetBtn.active = !1, this.getSpr.active = !0, 
                        this.changeVideoSprType(t, !1))) : (R.instance.signDayCount_7 < 6 || R.instance.signWheelCount_7 > 1) && (R.instance.signDayCount_7 >= 6 && (t.getChildByName("spr").active = !0, 
                        t.getChildByName("rotateBg").setPosition(0, 0, 0)), n.getType == _.get ? (this.getBtn.active = !0, 
                        this.videoBtn.active = this.isShowDouble, this.videoGetBtn.active = !1, this.getSpr.active = !1, 
                        this.changeVideoSprType(t, !1)) : n.getType == _.video ? (this.getBtn.active = !1, 
                        this.videoBtn.active = !1, this.videoGetBtn.active = !0, this.getSpr.active = !1, 
                        this.changeVideoSprType(t, !0), R.instance.youMenDaDian(U.signAgain_appear)) : (this.getBtn.active = !1, 
                        this.videoBtn.active = !1, this.videoGetBtn.active = !1, this.getSpr.active = !0, 
                        this.changeVideoSprType(t, !1))), b == S.ANDROID_XiaoMi && this.videoGetBtn.active && (this.tw2 && this.tw2.stop(), 
                        this.tw3 && this.tw3.stop(), this.hand.active = !1, this.hand1.active = this.videoGetBtn.active, 
                        this.tw3 = y(this.hand1).to(0, {}).call(function() {
                            e.hand1.getChildByName("hand0").active = !0, e.hand1.getChildByName("hand1").active = !1;
                        }).delay(.35).call(function() {
                            e.hand1.getChildByName("hand0").active = !1, e.hand1.getChildByName("hand1").active = !0;
                        }).delay(.35).union().repeatForever().start(), this.tw2 = y(this.videoGetBtn).to(.5, {
                            scale: new m(1.1, 1.1, 1)
                        }).to(1, {
                            scale: new m(.9, .9, 1)
                        }).union().repeatForever().start());
                    }
                }, {
                    key: "changeVideoSprType",
                    value: function(e, n) {}
                }, {
                    key: "onGetBtnClick",
                    value: function() {
                        M.playSound(N.BTNCLICK);
                        var e = R.instance.signConfig_7[R.instance.signDayCount_7];
                        R.instance.signDayCount_7 >= 6 && R.instance.signWheelCount_7 <= 1 ? (e.getType = _.yesGet, 
                        this.updateItemInfo(), A.reportCustom("5"), R.instance.unlockSkinId = 4, R.instance.unlockSkinName = "飞行蚂蚁", 
                        R.instance.showUI("prefabs/ui/UIUnlockSkin"), R.instance.UILoad.active = !0, R.instance.isSignSkinUnlock = 1, 
                        localStorage.setItem("isSignSkinUnlock", R.instance.isSignSkinUnlock.toString())) : (R.instance.signDayCount_7 < 6 || R.instance.signWheelCount_7 > 1) && (e.getType = _.video, 
                        this.getAward(e.rewardType, e.rewardNum)), this.localCurDay(), e.isGet = 0, R.instance.youMenDaDian(U.signCommon), 
                        this.updateBtnType(), localStorage.setItem("signConfig_7", JSON.stringify(R.instance.signConfig_7));
                    }
                }, {
                    key: "onVideoBtnClick",
                    value: (d = h(n.default.mark(function e() {
                        var t;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                M.playSound(N.BTNCLICK), R.instance.youMengVideoClick = D.sign, R.instance.youMenDaDian(U.signDouble_click), 
                                t = function() {
                                    !function() {
                                        var e = R.instance.signConfig_7[R.instance.signDayCount_7];
                                        e.getType = _.yesGet, e.isGet = 0, this.getAward(e.rewardType, 2 * e.rewardNum), 
                                        this.updateItemInfo(), this.updateBtnType(), localStorage.setItem("signConfig_7", JSON.stringify(R.instance.signConfig_7)), 
                                        this.localCurDay(), R.instance.youMenDaDian(U.signDouble_complete);
                                    }();
                                }.bind(this), R.instance.shufenVideoID = 27, R.instance.watchVideo("", t);

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    })), function() {
                        return d.apply(this, arguments);
                    })
                }, {
                    key: "onVideoGetBtnClick",
                    value: (i = h(n.default.mark(function e() {
                        var t, i;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (M.playSound(N.BTNCLICK), R.instance.youMengVideoClick = D.signAgain, R.instance.youMenDaDian(U.signAgain_click), 
                                this.hand.active = !1, t = function() {
                                    this.updateItemInfo();
                                    var e = R.instance.signConfig_7[R.instance.signDayCount_7];
                                    e.getType = _.yesGet, e.isGet = 0, this.getAward(e.rewardType, e.rewardNum), this.updateBtnType(), 
                                    localStorage.setItem("signConfig_7", JSON.stringify(R.instance.signConfig_7)), this.localCurDay(), 
                                    R.instance.youMenDaDian(U.signAgain_complete);
                                }.bind(this), b != S.TT && b != S.WEB) {
                                    e.next = 9;
                                    break;
                                }
                                return R.instance.UILookVideoDesc = "是否观看视频再领一次奖励?", e.next = 6, R.instance.showUI("prefabs/ui/UILookVideo");

                              case 6:
                                e.sent.getComponent(O).initYesCallBack(28, function() {
                                    t();
                                }), e.next = 11;
                                break;

                              case 9:
                                i = function() {
                                    t();
                                }.bind(this), R.instance.shufenVideoID = 28, R.instance.watchVideo("", i);

                              case 11:
                                this.hand.active = !1;

                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    })), function() {
                        return i.apply(this, arguments);
                    })
                }, {
                    key: "localCurDay",
                    value: function() {
                        R.instance.isGetSignAward_7 = 1, localStorage.setItem("isGetSignAward_7", R.instance.isGetSignAward_7.toString());
                    }
                }, {
                    key: "getAward",
                    value: function(e, n) {
                        switch (e) {
                          case T.jewel:
                            M.ShowUI("UIHint", null, null, 1, [ 4 ], [ n ]);
                            break;

                          case T.part:
                            M.ShowUI("UIHint", null, null, 1, [ 3 ], [ n ]);
                            break;

                          case T.medal:
                            M.ShowUI("UIHint", null, null, 1, [ 5 ], [ n ]);
                            break;

                          case T.mush:
                            M.ShowUI("UIHint", null, null, 1, [ 0 ], [ n ]);
                        }
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        M.playSound(N.BTNCLICK);
                        for (var e = !1, n = 0; n < R.instance.superAntInfo.length; n++) if (R.instance.superAntInfo[n].unlockType == P.yongYou) {
                            e = !0;
                            break;
                        }
                        R.instance.isShowUISuperAntOpen || (R.instance.isShowUISuperAntOpen = !0, e || (R.instance.UILoad.active = !0, 
                        R.instance.showUI("prefabs/ui/UISuperAnt"))), this.node.removeFromParent(), this.node.destroy(), 
                        M.cleanUnuseRes(), M.showBanner(!1), R.instance.wxInterAdCount++, w.getScene().emit("SHOW_WX_INTERAD"), 
                        w.getScene().emit("Vivo_showBanner"), w.getScene().emit("MainNativeBannerOPPO", !0), 
                        w.getScene().emit("DestroyNativeItem"), R.instance.onShowBannerType(!0), w.getScene().emit("ShowNativeAdItem", new m(cc.winSize.width / 2 - 358, 200, 0));
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.rotateBg.eulerAngles = this.rotateBg.eulerAngles.add(new m(0, 0, 1));
                    }
                } ]), t;
            }()).prototype, "getBtn", [ L ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ee = i(Z.prototype, "videoBtn", [ z ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ne = i(Z.prototype, "videoGetBtn", [ V ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), te = i(Z.prototype, "getSpr", [ H ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ie = i(Z.prototype, "selectSpr", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), oe = i(Z.prototype, "leftNode", [ G ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ae = i(Z.prototype, "itemsArray", [ F ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), se = i(Z.prototype, "numberFont", [ W ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), re = i(Z.prototype, "icon", [ q ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ce = i(Z.prototype, "rotateBg", [ Y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ue = i(Z.prototype, "btnVideo", [ K ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), le = i(Z.prototype, "hand", [ X ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), he = i(Z.prototype, "hand1", [ J ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Q = Z)) || Q)), d._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIShareVideo.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./PvpGameManager.js", "./FBGameManager.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.LabelComponent, g = e.Node, 
            f = e.CameraComponent, v = e.Vec2, m = e.SpriteFrame, y = e.Vec3, B = e.Component;
        }, function(e) {
            C = e.SOUND_TYPE, I = e.HINT_INFO;
        }, function(e) {
            w = e.Tools;
        }, function(e) {
            k = e.PvpGameManager;
        }, function(e) {
            b = e.FBGameManager;
        }, function(e) {
            S = e.GameManager;
        }, function(e) {
            _ = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "077bfIPMQVMV72i7zjqbfcx", "UIShareVideo", void 0), V = h.ccclass, 
            H = h.property, e("UIShareVideo", (T = V("UIShareVideo"), U = H(d), N = H(d), P = H(p), 
            D = H(p), A = H(g), T((R = t((x = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "screenIcon", R, c(t)), 
                    r(t, "logo", O, c(t)), r(t, "countT", j, c(t)), r(t, "namelabel", L, c(t)), r(t, "rotateBg", z, c(t)), 
                    t.randIndex = 0, t.count = 15, t;
                }
                return i(n, B), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        this.mgr = S.instance, "PVP" == _.instance.curMode ? this.mgr = k.instance : "FB" == _.instance.curMode && (this.mgr = b.instance), 
                        this.randIndex = w.getRandomInt(0, 5), _.instance.curShareVideoIndex >= 0 && (_.instance.shareVideoIndex[_.instance.curShareVideoIndex] = 1, 
                        localStorage.setItem("shareVideoIndex", _.instance.shareVideoIndex.join(",")), _.instance.curShareVideoIndex = -1);
                    }
                }, {
                    key: "start",
                    value: function() {
                        _.instance.UILoad.active = !1, this.refreshUI();
                        var e = this.mgr.cameraNode.getComponent(f);
                        w.renderImage(this.screenIcon, new v(this.screenIcon.node.width, this.screenIcon.node.height), e);
                    }
                }, {
                    key: "onVideoBtnClick",
                    value: function() {
                        w.playSound(C.BTNCLICK);
                        var e = function() {
                            w.ShowTip("分享视频成功"), this.shareSuccess(), this.closeMine();
                        }.bind(this);
                        w.TTShareRecordVideo(e);
                    }
                }, {
                    key: "shareSuccess",
                    value: function() {
                        var e = _.instance.skinConfig[2];
                        0 == _.instance.shareVideoTimes && 1 == e.isUnlock ? (e.isUnlock = 0, _.instance.selectSkinIndex = 2, 
                        S.instance.changePlayerFace(), localStorage.setItem("skinConfig", JSON.stringify(_.instance.skinConfig))) : w.ShowUI("UIHint", null, null, 1, [ this.randIndex ], [ this.count ]), 
                        _.instance.shareVideoTimes += 1, localStorage.setItem("shareVideoTimes", _.instance.shareVideoTimes.toString());
                    }
                }, {
                    key: "refreshUI",
                    value: function() {
                        var e = _.instance.skinConfig[2];
                        0 == _.instance.shareVideoTimes && 1 == e.isUnlock ? (this.logo.sizeMode = d.SizeMode.TRIMMED, 
                        w.setImage(this.logo, "resTex/UISkin_icon2", m), this.countT.string = "", this.namelabel.string = "盔甲蚂蚁") : (this.logo.sizeMode = d.SizeMode.CUSTOM, 
                        w.setImage(this.logo, I[this.randIndex].logoUrl, m), this.countT.string = "+" + Math.floor(this.count), 
                        this.logo.node.width = 80, this.logo.node.height = 80);
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        w.playSound(C.BTNCLICK), this.closeMine();
                    }
                }, {
                    key: "closeMine",
                    value: function() {
                        this.node.destroy(), this.node.removeFromParent(), S.instance.cameraNode.getComponent(f).targetTexture = null, 
                        w.cleanUnuseRes();
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.rotateBg.eulerAngles = this.rotateBg.eulerAngles.add(new y(0, 0, 1));
                    }
                } ]), n;
            }()).prototype, "screenIcon", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), O = t(x.prototype, "logo", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), j = t(x.prototype, "countT", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), L = t(x.prototype, "namelabel", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), z = t(x.prototype, "rotateBg", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), M = x)) || M)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIShenMiLiBao.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.LabelComponent, g = e.director, 
            f = e.Vec3, v = e.Component;
        }, function(e) {
            m = e.YOUMENG_EVENT, y = e.SOUND_TYPE, B = e.YOUEMNG_EVENT_ENUM;
        }, function(e) {
            C = e.Tools;
        }, function(e) {
            I = e.GameManager;
        }, function(e) {
            w = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "2347dafnqpCO5lkh4PTou47", "UIShenMiLiBao", void 0), V = h.ccclass, 
            H = h.property, e("UIShenMiLiBao", (k = V("UIShenMiLiBao"), b = H(d), S = H(d), 
            _ = H(p), T = H(p), U = H(d), N = H(d), P = H(d), k((M = t((A = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "rotateBg1", M, c(t)), 
                    r(t, "rotateBg2", x, c(t)), r(t, "descT", R, c(t)), r(t, "descT1", O, c(t)), r(t, "videoBtn", j, c(t)), 
                    r(t, "backBtn", L, c(t)), r(t, "leftNode", z, c(t)), t;
                }
                return i(n, v), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        var e = this;
                        if (this.leftNode.setPosition(-cc.winSize.width / 2, 0, 0), w.instance.shiPeiUIBackBtn(this.leftNode.getChildByName("backBtn")), 
                        w.instance.isShowUIShenMiLiBao = !0, this.descTAni(), C.showBanner(!1), this.schedule(this.descTAni, 1), 
                        g.getScene().on("LookVideo", this.onVideoBtnClick, this), g.getScene().on("closeUI", this.onBack, this), 
                        w.instance.wxMaiLiangWuChuData) {
                            var n = Math.floor(w.instance.wxMaiLiangWuChuData.data.p33);
                            this.scheduleOnce(function() {
                                e.backBtn.active = !0;
                            }, n);
                            var t = Math.floor(w.instance.wxMaiLiangWuChuData.data.p35);
                            this.scheduleOnce(function() {
                                e.videoBtn.getChildByName("videoSpr").active = !0;
                            }, t);
                        } else this.backBtn.active = !0;
                        w.instance.youMenDaDian(m.supriseBox_appear);
                    }
                }, {
                    key: "descTAni",
                    value: function() {
                        I.instance.sprHuXiEffect(this.videoBtn, 1.1, .9), this.descT1.node.active && I.instance.sprHuXiEffect(this.descT1.node, 1.05, .9);
                    }
                }, {
                    key: "onVideoBtnClick",
                    value: function() {
                        C.playSound(y.BTNCLICK), w.instance.shenMiLiBaoVideoClickCount > 1 && (this.descT.node.active = !1, 
                        this.descT1.node.active = !0), w.instance.youMengVideoClick = B.shenMi, w.instance.youMenDaDian(m.supriseBox_click);
                        var e = function() {
                            C.ShowUI("UIHint", null, null, 4, [ 0, 1, 2, 3 ], [ 10, 10, 10, 10 ]), C.ShowUI("UIHint", null, null, 1, [ 4 ], [ 20 ]), 
                            w.instance.isShowUIShenMiLiBao = !1, w.instance.youMenDaDian(m.supriseBox_complete), 
                            this.onBack();
                        }.bind(this);
                        w.instance.watchVideo("", e);
                    }
                }, {
                    key: "onBack",
                    value: function() {
                        C.playSound(y.BTNCLICK), w.instance.shenMiLiBaoVideoClickCount >= 2 && C.ShowTip("完整观看视频才可以获得奖励"), 
                        this.node.destroy(), this.node.removeFromParent(), w.instance.videoCounterTime = 0, 
                        w.instance.isShowUIShenMiLiBao = !1;
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        this.rotateBg1.eulerAngles = this.rotateBg1.eulerAngles.add(new f(0, 0, 1)), this.rotateBg2.eulerAngles = this.rotateBg2.eulerAngles.add(new f(0, 0, 1));
                    }
                } ]), n;
            }()).prototype, "rotateBg1", [ b ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), x = t(A.prototype, "rotateBg2", [ S ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), R = t(A.prototype, "descT", [ _ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), O = t(A.prototype, "descT1", [ T ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), j = t(A.prototype, "videoBtn", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), L = t(A.prototype, "backBtn", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), z = t(A.prototype, "leftNode", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), D = A)) || D)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UISign.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W, q, Y, K, X, J, Q;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _dec9: void 0,
        _dec10: void 0,
        _dec11: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _descriptor8: void 0,
        _descriptor9: void 0,
        _descriptor10: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.Font, g = e.SpriteComponent, 
            f = e.Vec3, v = e.Vec2, m = e.CameraComponent, y = e.LabelComponent, B = e.director, 
            C = e.Component;
        }, function(e) {
            I = e.SIGN_GET_TYPE, w = e.SIGN_REWARD_TYPE, k = e.SOUND_TYPE;
        }, function(e) {
            b = e.Tools;
        }, function(e) {
            S = e.GameManager;
        }, function(e) {
            _ = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "b5505P4+QlMGIA6qbmuhA1L", "UISign", void 0), J = h.ccclass, Q = h.property, 
            e("UISign", (T = J("UISign"), U = Q(d), N = Q(d), P = Q(d), D = Q(d), A = Q(d), 
            M = Q(d), x = Q(d), R = Q(p), O = Q(g), j = Q(d), T((V = t((z = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "getBtn", V, c(t)), 
                    r(t, "videoBtn", H, c(t)), r(t, "videoGetBtn", E, c(t)), r(t, "getSpr", G, c(t)), 
                    r(t, "selectSpr", F, c(t)), r(t, "leftNode", W, c(t)), r(t, "itemsArray", q, c(t)), 
                    r(t, "numberFont", Y, c(t)), r(t, "icon", K, c(t)), r(t, "rotateBg", X, c(t)), t;
                }
                return i(n, C), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        this.leftNode.setPosition(-cc.winSize.width / 2, 0, 0), _.instance.UILoad.active = !1, 
                        _.instance.shiPeiUIBackBtn(this.leftNode.getChildByName("backBtn")), S.instance.showNativeAdItem(new f(cc.winSize.width / 2 - 86, -270, 0)), 
                        _.instance.tryShowInterAd2();
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.initItemInfo(), _.instance.signWheelCount <= 1 && this.showAntModel(4);
                    }
                }, {
                    key: "showAntModel",
                    value: function(e) {
                        S.instance.loaderPlayer(e), b.renderImage(this.icon, new v(388, 300), S.instance.Player.getChildByName("camera").getComponent(m));
                    }
                }, {
                    key: "initItemInfo",
                    value: function() {
                        var e = new Date().getDate();
                        0 != _.instance.curDay && _.instance.curDay != e ? _.instance.signDayCount >= 4 ? (_.instance.signDayCount = 0, 
                        localStorage.setItem("signDayCount", _.instance.signDayCount.toString()), _.instance.signWheelCount++, 
                        localStorage.setItem("signWheelCount", _.instance.signWheelCount.toString()), _.instance.curDay = e, 
                        localStorage.setItem("curDay", _.instance.curDay.toString()), this.initConfigInfo()) : _.instance.signDayCount < 4 && (_.instance.signDayCount++, 
                        localStorage.setItem("signDayCount", _.instance.signDayCount.toString()), _.instance.curDay = e, 
                        localStorage.setItem("curDay", _.instance.curDay.toString())) : 0 == _.instance.curDay && (localStorage.setItem("signDayCount", _.instance.signDayCount.toString()), 
                        _.instance.curDay = e, localStorage.setItem("curDay", _.instance.curDay.toString()));
                        for (var n = 0; n < this.itemsArray.length; n++) {
                            var t = _.instance.signConfig[n], i = this.itemsArray[n], o = i.getChildByName("countT").getComponent(y);
                            _.instance.signWheelCount <= 1 ? n < this.itemsArray.length - 1 && (o.string = "+" + t.rewardNum) : (o.string = "+" + t.rewardNum, 
                            n >= this.itemsArray.length - 1 && (o.node.setPosition(o.node.position.x, o.node.position.y + 10, o.node.position.z), 
                            o.font = this.numberFont, i.getChildByName("logo").active = !0, i.getChildByName("icon").active = !1)), 
                            t.getType == I.yesGet ? (i.getChildByName("msk").active = !0, i.getChildByName("getSpr").active = !0) : (i.getChildByName("msk").active = !1, 
                            i.getChildByName("getSpr").active = !1), _.instance.signDayCount != n && 0 == t.isGet && (i.getChildByName("msk").active = !0, 
                            i.getChildByName("getSpr").active = !0);
                        }
                        this.updateBtnType(), this.updateSelectPos();
                    }
                }, {
                    key: "initConfigInfo",
                    value: function() {
                        if (0 == _.instance.signDayCount && _.instance.signWheelCount > 1) {
                            for (var e = 0; e < _.instance.signConfig.length; e++) {
                                var n = _.instance.signConfig[e];
                                n.getType = I.get, n.isGet = 1, e >= _.instance.signConfig.length - 1 && (n.rewardType = w.jewel, 
                                n.rewardNum = 50);
                            }
                            localStorage.setItem("signConfig", JSON.stringify(_.instance.signConfig));
                        }
                    }
                }, {
                    key: "updateSelectPos",
                    value: function() {
                        var e = this.itemsArray[_.instance.signDayCount];
                        _.instance.signConfig[_.instance.signDayCount].getType != I.yesGet && this.schedule(this.itemBgAni, 1), 
                        _.instance.signDayCount < 4 ? (this.selectSpr.width = 249, this.selectSpr.height = 195, 
                        this.selectSpr.setPosition(e.position.x, e.position.y, 0)) : (this.selectSpr.width = 401, 
                        this.selectSpr.height = 388, this.selectSpr.setPosition(e.position.x + .5, e.position.y + 1.5, 0));
                    }
                }, {
                    key: "itemBgAni",
                    value: function() {
                        var e = _.instance.signConfig[_.instance.signDayCount], n = this.itemsArray[_.instance.signDayCount];
                        e.getType != I.yesGet ? (S.instance.sprHuXiEffect(n, 1.05, .9), S.instance.sprHuXiEffect(this.selectSpr, 1.05, .9)) : (this.unschedule(this.itemBgAni), 
                        S.instance.sprHuXiEffect(n, 1, 1), S.instance.sprHuXiEffect(this.selectSpr, 1, 1));
                    }
                }, {
                    key: "onItemClick",
                    value: function(e, n) {
                        if (parseInt(n) == _.instance.signDayCount) {
                            var t = _.instance.signConfig[_.instance.signDayCount];
                            t.getType == I.get ? this.onGetBtnClick() : t.getType == I.video && this.onVideoGetBtnClick();
                        }
                    }
                }, {
                    key: "updateItemInfo",
                    value: function() {
                        var e = this.itemsArray[_.instance.signDayCount];
                        e.getChildByName("msk").active = !0, e.getChildByName("getSpr").active = !0, B.getScene().emit("hideHongDian", 4);
                    }
                }, {
                    key: "updateBtnType",
                    value: function() {
                        var e = _.instance.signConfig[_.instance.signDayCount], n = this.itemsArray[_.instance.signDayCount];
                        _.instance.signWheelCount <= 1 && _.instance.signDayCount >= 4 ? (this.getBtn.setPosition(0, this.getBtn.position.y, 0), 
                        e.getType == I.get ? (this.getBtn.active = !0, this.videoBtn.active = !1, this.videoGetBtn.active = !1, 
                        this.getSpr.active = !1, this.changeVideoSprType(n, !1)) : e.getType == I.video ? (this.getBtn.active = !1, 
                        this.videoBtn.active = !1, this.videoGetBtn.active = !0, this.getSpr.active = !1, 
                        this.changeVideoSprType(n, !0)) : (this.getBtn.active = !1, this.videoBtn.active = !1, 
                        this.videoGetBtn.active = !1, this.getSpr.active = !0, this.changeVideoSprType(n, !1))) : (_.instance.signDayCount < 4 || _.instance.signWheelCount > 1) && (e.getType == I.get ? (this.getBtn.active = !0, 
                        this.videoBtn.active = !0, this.videoGetBtn.active = !1, this.getSpr.active = !1, 
                        this.changeVideoSprType(n, !1)) : e.getType == I.video ? (this.getBtn.active = !1, 
                        this.videoBtn.active = !1, this.videoGetBtn.active = !0, this.getSpr.active = !1, 
                        this.changeVideoSprType(n, !0)) : (this.getBtn.active = !1, this.videoBtn.active = !1, 
                        this.videoGetBtn.active = !1, this.getSpr.active = !0, this.changeVideoSprType(n, !1)));
                    }
                }, {
                    key: "changeVideoSprType",
                    value: function(e, n) {
                        e.getChildByName("videoMsk").active = n, e.getChildByName("videoSpr").active = n;
                    }
                }, {
                    key: "onGetBtnClick",
                    value: function() {
                        b.playSound(k.BTNCLICK);
                        var e = _.instance.signConfig[_.instance.signDayCount];
                        _.instance.signDayCount >= 4 && _.instance.signWheelCount <= 1 ? (e.getType = I.yesGet, 
                        this.updateItemInfo(), this.localCurDay(), _.instance.unlockSkinId = 4, _.instance.unlockSkinName = "飞行蚂蚁", 
                        _.instance.showUI("prefabs/ui/UIUnlockSkin"), _.instance.UILoad.active = !0, _.instance.isSignSkinUnlock = 1, 
                        localStorage.setItem("isSignSkinUnlock", _.instance.isSignSkinUnlock.toString())) : (_.instance.signDayCount < 4 || _.instance.signWheelCount > 1) && (e.getType = I.video, 
                        this.getAward(e.rewardType, e.rewardNum)), e.isGet = 0, this.updateBtnType(), localStorage.setItem("signConfig", JSON.stringify(_.instance.signConfig));
                    }
                }, {
                    key: "onVideoBtnClick",
                    value: function() {
                        b.playSound(k.BTNCLICK);
                        var e = function() {
                            var e = _.instance.signConfig[_.instance.signDayCount];
                            e.getType = I.yesGet, e.isGet = 0, this.getAward(e.rewardType, 2 * e.rewardNum), 
                            this.updateItemInfo(), this.updateBtnType(), localStorage.setItem("signConfig", JSON.stringify(_.instance.signConfig)), 
                            this.localCurDay();
                        }.bind(this);
                        _.instance.watchVideo("", e);
                    }
                }, {
                    key: "onVideoGetBtnClick",
                    value: function() {
                        b.playSound(k.BTNCLICK);
                        var e = function() {
                            this.updateItemInfo();
                            var e = _.instance.signConfig[_.instance.signDayCount];
                            e.getType = I.yesGet, e.isGet = 0, this.getAward(e.rewardType, e.rewardNum), this.updateBtnType(), 
                            localStorage.setItem("signConfig", JSON.stringify(_.instance.signConfig)), this.localCurDay();
                        }.bind(this);
                        _.instance.watchVideo("", e);
                    }
                }, {
                    key: "localCurDay",
                    value: function() {
                        _.instance.isGetSignAward = 1, localStorage.setItem("isGetSignAward", _.instance.isGetSignAward.toString());
                    }
                }, {
                    key: "getAward",
                    value: function(e, n) {
                        switch (e) {
                          case w.jewel:
                            b.ShowUI("UIHint", null, null, 1, [ 4 ], [ n ]);
                            break;

                          case w.part:
                            b.ShowUI("UIHint", null, null, 1, [ 3 ], [ n ]);
                            break;

                          case w.medal:
                            b.ShowUI("UIHint", null, null, 1, [ 5 ], [ n ]);
                        }
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        b.playSound(k.BTNCLICK), _.instance.videoCounterTimeGo(), this.node.removeFromParent(), 
                        this.node.destroy(), b.cleanUnuseRes(), _.instance.wxInterAdCount++, B.getScene().emit("SHOW_WX_INTERAD"), 
                        B.getScene().emit("Vivo_showBanner"), B.getScene().emit("MainNativeBannerOPPO", !0), 
                        B.getScene().emit("DestroyNativeItem"), _.instance.onShowBannerType(!0), B.getScene().emit("ShowNativeAdItem", new f(cc.winSize.width / 2 - 358, 200, 0));
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.rotateBg.eulerAngles = this.rotateBg.eulerAngles.add(new f(0, 0, 1));
                    }
                } ]), n;
            }()).prototype, "getBtn", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), H = t(z.prototype, "videoBtn", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), E = t(z.prototype, "videoGetBtn", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), G = t(z.prototype, "getSpr", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), F = t(z.prototype, "selectSpr", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), W = t(z.prototype, "leftNode", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), q = t(z.prototype, "itemsArray", [ x ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Y = t(z.prototype, "numberFont", [ R ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), K = t(z.prototype, "icon", [ O ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), X = t(z.prototype, "rotateBg", [ j ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), L = z)) || L)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UISoldierAnt.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./ShufenManager.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W, q, Y, K, X, J, Q, Z, $, ee, ne, te, ie, oe, ae, se, re, ce, ue, le, he, de, pe, ge, fe, ve;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _dec9: void 0,
        _dec10: void 0,
        _dec11: void 0,
        _dec12: void 0,
        _dec13: void 0,
        _dec14: void 0,
        _dec15: void 0,
        _dec16: void 0,
        _dec17: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _descriptor8: void 0,
        _descriptor9: void 0,
        _descriptor10: void 0,
        _descriptor11: void 0,
        _descriptor12: void 0,
        _descriptor13: void 0,
        _descriptor14: void 0,
        _descriptor15: void 0,
        _descriptor16: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.LabelComponent, p = e.Node, g = e.SpriteComponent, 
            f = e.tween, v = e.director, m = e.Vec3, y = e.SpriteFrame, B = e.Component;
        }, function(e) {
            C = e.CUR_PLATFORM, I = e.PLATFORM_TYPE, w = e.YOUMENG_EVENT, k = e.BUG_BAG_PRICE, 
            b = e.YOUEMNG_EVENT_ENUM, S = e.SOUND_TYPE, _ = e.ANT_SOLDIER_PRICES, T = e.QUEENANT_ROOM_INFO, 
            U = e.MAIDIAN_STEPS, N = e.UNLOCK_ANT_LIMIT;
        }, function(e) {
            P = e.default;
        }, function(e) {
            D = e.Tools;
        }, function(e) {
            A = e.GameManager;
        }, function(e) {
            M = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "265ebaycbpD9YNOX+6+7k17", "UISoldierAnt", void 0), fe = h.ccclass, 
            ve = h.property, e("UISoldierAnt", (x = fe("UISoldierAnt"), R = ve(d), O = ve(d), 
            j = ve(p), L = ve(p), z = ve(p), V = ve(p), H = ve(p), E = ve(p), G = ve(p), F = ve(g), 
            W = ve(p), q = ve(p), Y = ve(p), K = ve(p), X = ve(p), J = ve(p), x(($ = t((Z = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "antLvLabel", $, c(t)), 
                    r(t, "antCountLabel", ee, c(t)), r(t, "tipBtnNode", ne, c(t)), r(t, "AntBtnNode", te, c(t)), 
                    r(t, "unlockBtnNode", ie, c(t)), r(t, "autHatchBtnNode", oe, c(t)), r(t, "hatchBtnNode", ae, c(t)), 
                    r(t, "hatchBtnVideoNode", se, c(t)), r(t, "hatchBtnLabelNode", re, c(t)), r(t, "hatchBtnBar", ce, c(t)), 
                    r(t, "hatchBtnCover", ue, c(t)), r(t, "unlockBG", le, c(t)), r(t, "hand", he, c(t)), 
                    r(t, "backBtn", de, c(t)), r(t, "rongHeBtn", pe, c(t)), r(t, "hintBg", ge, c(t)), 
                    t.bugBaglockSp = [], t.bugBagVideoSp = [], t.bugBagDiamondIcon = [], t.bugBagLabel = [], 
                    t.bugBagIcon = [], t.isBugVideoShow = !1, t.isDrop = !1, t.isRongHe = !1, t.showSelectCount = 0, 
                    t.selectID = -1, t.selectSID = -1, t.selectStar = -1, t.bugBagSelectSp = [], t.isHatchAniming = !1, 
                    t.curChooseIndex = 0, t.autHatchBtnSprite = null, t.wxShowBannerCount = 0, t.tween1 = null, 
                    t.tween2 = null, t.rotateTimer = 0, t.clickBackBtnCount = 0, t;
                }
                return i(n, B), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        var e = this;
                        if (M.instance.curChooseIndex = 0, this.autHatchBtnSprite = this.autHatchBtnNode.getComponent(g), 
                        this.node.getChildByName("bottom").setPosition(0, -cc.winSize.height / 2, 0), C == I.ANDROID_XiaoMi && D.showBanner(!0), 
                        M.instance.guideSteps > 30 && C == I.ANDROID_XiaoMi && (M.instance.tryShowInterAd2(), 
                        this.hand.active = this.hatchBtnVideoNode.active, this.tween2 = f(this.hand).to(0, {}).call(function() {
                            e.hand.getChildByName("hand0").active = !0, e.hand.getChildByName("hand1").active = !1;
                        }).delay(.35).call(function() {
                            e.hand.getChildByName("hand0").active = !1, e.hand.getChildByName("hand1").active = !0;
                        }).delay(.35).union().repeatForever().start()), 42 != M.instance.guideSteps && (this.showNativeAd(), 
                        C == I.iOS && M.instance.guideSteps > 30 && 1 == D.getRandomInt(1, 2) && window.NativeCtrl.showInsertitiald(), 
                        C == I.HW && M.instance.guideSteps > 30)) {
                            var n = M.instance.hwNativeAdWuChu, t = D.getRandomInt(1, 10), i = n.SOLDIERANT_TIME;
                            t <= n.SOLDIERANT_RAND && (D.showHwBanner(!1), this.scheduleOnce(function() {
                                M.instance.showUI("prefabs/ui/UINative_HW");
                            }, i));
                        }
                        if (v.getScene().on("LookVideoUnlock", this.soldLookVideo, this), v.getScene().on("QueenAntBtnJump", this.QueenAntBtnJump, this), 
                        v.getScene().on("DesCurShowUI", this.backBtnClick, this), v.getScene().on("handleChoose", this.handleChoose, this), 
                        v.getScene().on("REFRESH_SOLDIERUI", this.refreshBag, this), v.getScene().on("DELETE_BUG", this.deleteBug, this), 
                        M.instance.UILoad.active = !1, this.isBugVideoShow = Math.random() < .3, this.isBugVideoShow && M.instance.youMenDaDian(w.checkUnlock_appear), 
                        v.getScene().on("REFRESH_BAG", this.refreshBag, this), this.refreshUI(), this.schedule(this.refreshUI, .5), 
                        this.initBag(), M.instance.nestRoomConfig.roomInfo[0].count >= 15 && 42 == M.instance.guideSteps ? (M.instance.guideSteps = 43, 
                        D.ShowUI("UIGuide", null, null, this.node.getChildByName("hatchBtn").worldPosition, !0, !0, !0, 13)) : M.instance.nestRoomConfig.roomInfo[0].count < 15 && 42 == M.instance.guideSteps && (M.instance.guideSteps = 40, 
                        localStorage.setItem("guideSteps", M.instance.guideSteps.toString())), C == I.QQ && M.instance.guideSteps > 30 ? D.cacheInsertAd("d0c35318325b05f137fba6952c2a87ce") : C == I.TT && M.instance.guideSteps > 30 || (C == I.WX && M.instance.guideSteps > 30 ? M.instance.wxMaiLiangWuChuData && M.instance.wuchuOpen : C == I.MEIZU && M.instance.guideSteps > 30 && window.chapad.showChap()), 
                        M.instance.youMenDaDian(w.bingyiAdFuhua_appear), this.handleChoose(M.instance.curChooseIndex), 
                        this.unlockAntCrown(), this.schedule(function() {
                            e.bugBaglockSp[0].parent.getChildByName("unlockT").active && A.instance.sprHuXiEffect(e.bugBaglockSp[0].parent.getChildByName("unlockT"), 1.05, .9);
                        }, 1), this.updateBg(), C == I.WX) if (M.instance.wxMaiLiangWuChuData) {
                            M.instance.wxWuChuBackBtnCount++, M.instance.wxOneWuChuBackBtnCount++;
                            var o = M.instance.wxMaiLiangWuChuData.data.p3.split(","), a = Math.floor(o[0]);
                            this.scheduleOnce(function() {
                                e.backBtn.active = !0;
                            }, a);
                        } else this.backBtn.active = !0; else this.backBtn.active = !0;
                    }
                }, {
                    key: "updateBg",
                    value: function() {
                        this && this.node && f(this.unlockBG.getComponent(g).color).to(.5, {
                            a: 0
                        }).to(.5, {
                            a: 255
                        }).union().repeatForever().start();
                    }
                }, {
                    key: "wxWuChu",
                    value: function() {
                        var e = this;
                        if (C == I.WX) if (M.instance.wxMaiLiangWuChuData && this.clickBackBtnCount <= 0 && 1 == M.instance.wxWuChuBaiMingDanType) {
                            var n = M.instance.wxMaiLiangWuChuData.data.p3.split(","), t = Math.floor(n[1]), i = Math.floor(n[2]), o = Math.floor(n[3]), a = Math.floor(n[4]);
                            0 == o ? D.getRandomInt(1, 100) <= i && this.scheduleOnce(function() {
                                D.showBanner(!0);
                                var n = M.instance.wxMaiLiangWuChuData.data.p10.split(","), t = Math.floor(n[0]), i = Math.floor(n[1]), o = 0, s = 0;
                                e.schedule(function() {
                                    if (++o >= t) {
                                        if (o == t) return void D.showBanner(!1);
                                        ++s >= i && e.wxShowBannerCount < a && (D.showBanner(!0), o = 0, s = 0, e.wxShowBannerCount++);
                                    }
                                }, 1);
                            }, t) : this.backBtn.active = !0;
                        } else this.backBtn.active = !0;
                    }
                }, {
                    key: "showNativeAd",
                    value: function() {
                        if (M.instance.isShowOppoNativeAd && M.instance.guideSteps > 30 && C == I.OPPO) {
                            var e = M.instance.oppoNativeOpen, n = D.getRandomInt(1, e.SOLDIERANT_RAND), t = e.SOLDIERANT_TIME;
                            1 == n ? this.scheduleOnce(function() {
                                M.instance.showUI("prefabs/ui/UINativeAD");
                            }, t) : A.instance.showNativeAdItem(new m(cc.winSize.width / 2 - 86, -270, 0));
                        } else if (M.instance.guideSteps > 30 && C == I.VIVO) {
                            var i = M.instance.vivoWuChuConfig;
                            D.getRandomInt(1, 10) <= i.SOLDIERANT_RAND && M.instance.showUI("prefabs/ui/UINative_Vivo");
                        } else M.instance.guideSteps > 30 && C == I.ANDROID_TAP ? (D.getRandomInt(1, 10) <= 5 && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/MyApplication", "showInteractionAd", "()V"), 
                        console.log("tap穿山甲兵蚁界面展示插屏~~~~~~~~~")) : M.instance.guideSteps > 30 && C == I.ANDROID_HW && (D.getRandomInt(1, 10) <= 4 && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInterstitialAd", "(Ljava/lang/String;)V", ""), 
                        console.log("hw建造界面展示插屏~~~~~~~~~"));
                    }
                }, {
                    key: "soldLookVideo",
                    value: function() {
                        this.isBugVideoShow = !1, M.instance.bagInfo.push(1), localStorage.setItem("bagInfo", M.instance.bagInfo.join(",")), 
                        this.refreshBag(), M.instance.youMenDaDian(w.checkUnlock_complete);
                    }
                }, {
                    key: "QueenAntBtnJump",
                    value: function() {
                        M.instance.jumpBuildPage = 3, M.instance.showUI("prefabs/ui/UIBuild");
                    }
                }, {
                    key: "initBag",
                    value: function() {
                        for (var e = 1; e <= 12; e++) {
                            var n = this.node.getChildByName("package" + e), t = n.getChildByName("vedioSpr"), i = n.getChildByName("jewelSpr"), o = n.getChildByName("lock"), a = n.getChildByName("Label").getComponent(d), s = n.getChildByName("icon").getComponent(g), r = n.getChildByName("select");
                            this.bugBaglockSp.push(o), this.bugBagVideoSp.push(t), this.bugBagDiamondIcon.push(i), 
                            this.bugBagLabel.push(a.node), this.bugBagIcon.push(s), this.bugBagSelectSp.push(r), 
                            a.string = k[e - 1].toString(), n.on("touch-end", this.onTouchBagClick, this);
                        }
                        this.refreshBag();
                    }
                }, {
                    key: "onTouchBagClick",
                    value: function(e) {
                        var n = e.target.name, t = parseInt(n.split("package")[1]) - 1;
                        if (M.instance.bagInfo.length > t) {
                            if (this.isDrop) {
                                this.isDrop = !0;
                                for (var i = [], o = 0; o < M.instance.nestRoomConfig.bugIDs.length; o++) {
                                    var a = M.instance.nestRoomConfig.bugIDs[o];
                                    a.id > 1 && !M.instance.isSolderAnt(a.id) && i.push(a);
                                }
                                var s = i[t];
                                if (s) {
                                    for (var r = 0; r < M.instance.nestRoomConfig.bugIDs.length; r++) {
                                        var c = M.instance.nestRoomConfig.bugIDs[r];
                                        if (s.sid == c.sid) {
                                            M.instance.nestRoomConfig.bugIDs.splice(r, 1);
                                            break;
                                        }
                                    }
                                    localStorage.setItem("nestRoomConfig", JSON.stringify(M.instance.nestRoomConfig)), 
                                    this.deleteBug(s.sid);
                                }
                                return void this.refreshBag();
                            }
                            if (0 == t && M.instance.nestRoomConfig.roomInfo[6].level <= 0 && (console.log("点击第一个格子"), 
                            M.instance.UIHintUnlockBtnType = 1, M.instance.UIHintUnlockType = 2, M.instance.UIHintUnlockIconT = "昆虫小屋", 
                            M.instance.UIHintUnlockDescT = "建造昆虫小屋后可以收容或者捕获昆虫，组建自己的昆虫军队", M.instance.UIHintUnlockIconUrl = "resTex/UIBuild_logo7", 
                            M.instance.UIHintUnlockBtnUrl = "resTex/UIHintUnlock_btn3", M.instance.UILoad.active = !0, 
                            M.instance.showUI("prefabs/ui/UIHintUnlock")), this.isRongHe) {
                                for (var u = [], l = 0; l < M.instance.nestRoomConfig.bugIDs.length; l++) {
                                    var h = M.instance.nestRoomConfig.bugIDs[l];
                                    h.id > 1 && !M.instance.isSolderAnt(h.id) && u.push(h);
                                }
                                var d = u[t], p = this.bugBagSelectSp[t];
                                if (d && this.showSelectCount < 2) {
                                    if (this.selectSID == d.sid) return p.active = !1, this.selectID = -1, this.selectSID = -1, 
                                    this.selectStar = -1, this.showSelectCount = 0, void (M.instance.selectRongHeBugsInfo = []);
                                    -1 == this.selectID && (this.selectID = d.id, this.selectSID = d.sid), -1 == this.selectStar && (this.selectStar = d.star), 
                                    this.selectID == d.id && d.star < 5 && d.star == this.selectStar ? (M.instance.selectRongHeBugsInfo.push(d), 
                                    p.active = !0, this.showSelectCount++, 2 == this.showSelectCount && (M.instance.UILoad.active = !0, 
                                    M.instance.showUI("prefabs/ui/UIRongHe"), this.onRongHeBtnClick(), this.refreshBag())) : this.selectID != d.id ? D.ShowTip("不能合成：昆虫种类不同") : d.star >= 5 ? (D.ShowTip("该昆虫已是最大星级"), 
                                    this.selectID = -1, this.selectSID = -1, this.selectStar = -1) : d.star != this.selectStar && D.ShowTip("不能合成：昆虫星级不同"), 
                                    console.log(M.instance.selectRongHeBugsInfo);
                                }
                            }
                        } else {
                            if (M.instance.nestRoomConfig.roomInfo[6].level <= 0) return M.instance.UIHintUnlockBtnType = 1, 
                            M.instance.UIHintUnlockType = 2, M.instance.UIHintUnlockIconT = "昆虫小屋", M.instance.UIHintUnlockDescT = "建造昆虫小屋后可以收容或者捕获昆虫，组建自己的昆虫军队", 
                            M.instance.UIHintUnlockIconUrl = "resTex/UIBuild_logo7", M.instance.UIHintUnlockBtnUrl = "resTex/UIHintUnlock_btn3", 
                            M.instance.UILoad.active = !0, void M.instance.showUI("prefabs/ui/UIHintUnlock");
                            M.instance.youMengVideoClick = b.junDui, M.instance.youMenDaDian(w.checkUnlock_click);
                            var g = function() {
                                this.isBugVideoShow = !1, M.instance.bagInfo.push(1), localStorage.setItem("bagInfo", M.instance.bagInfo.join(",")), 
                                this.refreshBag(), D.ShowTip("购买背包成功");
                            }.bind(this);
                            t == M.instance.bagInfo.length ? this.isBugVideoShow ? (M.instance.shufenVideoID = 11, 
                            M.instance.watchVideo("", g)) : M.instance.jewelNum >= k[t] ? (M.instance.jewelNum -= k[t], 
                            localStorage.setItem("jewelNum", M.instance.jewelNum.toString()), M.instance.youMenDaDian(w.useGem), 
                            v.getScene().emit("UpdateFoodShow"), g()) : M.instance.nestRoomConfig.roomInfo[6].level <= 0 ? (M.instance.UIHintUnlockBtnType = 1, 
                            M.instance.UIHintUnlockType = 2, M.instance.UIHintUnlockIconT = "昆虫小屋", M.instance.UIHintUnlockDescT = "建造昆虫小屋后可以收容或者捕获昆虫，组建自己的昆虫军队", 
                            M.instance.UIHintUnlockIconUrl = "resTex/UIBuild_logo7", M.instance.UIHintUnlockBtnUrl = "resTex/UIHintUnlock_btn3", 
                            M.instance.UILoad.active = !0, M.instance.showUI("prefabs/ui/UIHintUnlock")) : (M.instance.UIHintUnlockBtnType = 0, 
                            M.instance.UIHintUnlockType = 5, M.instance.UIHintUnlockIconT = "解锁空位", M.instance.UIHintUnlockDescT = "资源不足，观看视频可直接解锁更多栏位", 
                            M.instance.UIHintUnlockIconUrl = "resTex/UISoldierAnt_lock2", M.instance.UIHintUnlockBtnUrl = "resTex/UIHintUnlock_btn2", 
                            M.instance.UILoad.active = !0, M.instance.showUI("prefabs/ui/UIHintUnlock")) : D.ShowTip("请先购买前面的格子");
                        }
                        var f = M.instance.nestRoomConfig.bugIDs[t];
                        if (f && 2 == f.state) {
                            var m = function() {
                                this.bugBagIcon[t].node.parent.getChildByName("mskNode").active = !1, this.rebornBug(f.sid);
                            }.bind(this);
                            M.instance.watchVideo("", m);
                        }
                    }
                }, {
                    key: "onRongHeBtnClick",
                    value: function() {
                        D.playSound(S.BTNCLICK), this.isDrop || (this.isRongHe = !this.isRongHe, this.initRongHeInfo());
                    }
                }, {
                    key: "initRongHeInfo",
                    value: function() {
                        var e = this.rongHeBtn.getChildByName("rongHe").getComponent(g), n = this.isRongHe ? 1 : 0;
                        if (D.setImage(e, "resTex/UISoldierAnt_rongHe" + n, y), this.isRongHe) M.instance.selectRongHeBugsInfo = [], 
                        this.hintBg.active = !0, this.schedule(this.hintBgAni, 2); else {
                            for (var t = 0; t < this.bugBagSelectSp.length; t++) this.bugBagSelectSp[t].active = !1;
                            this.selectID = -1, this.selectSID = -1, this.selectStar = -1, this.showSelectCount = 0, 
                            this.hintBg.active = !1, this.unschedule(this.hintBgAni);
                        }
                    }
                }, {
                    key: "hintBgAni",
                    value: function() {
                        this.hintBg.active && f(this.hintBg.getComponent(g).color).to(1, {
                            a: 80
                        }).to(1, {
                            a: 255
                        }).start();
                    }
                }, {
                    key: "onChooseClick",
                    value: function(e, n) {
                        if (console.log(n), 43 != M.instance.guideSteps) {
                            var t = parseInt(n);
                            this.handleChoose(t), 0 == t ? this.autHatchBtnNode.active && M.instance.youMenDaDian(w.bingyiAdFuhua_appear) : 1 == t ? this.autHatchBtnNode.active && (M.instance.youMenDaDian(w.bingyiAdFuhua_appear), 
                            M.instance.youMenDaDian(w.huoyiUnlock_appear)) : 2 == t ? this.autHatchBtnNode.active && (M.instance.youMenDaDian(w.bingyiAdFuhua_appear), 
                            M.instance.youMenDaDian(w.duyiUnlock_appear)) : 3 == t && this.autHatchBtnNode.active && (M.instance.youMenDaDian(w.bingyiAdFuhua_appear), 
                            M.instance.youMenDaDian(w.yiwangUnlock_appear));
                        }
                    }
                }, {
                    key: "handleChoose",
                    value: function(e) {
                        M.instance.curChooseIndex = e, 0 == M.instance.curChooseIndex ? (this.tipBtnNode.active = !1, 
                        this.AntBtnNode.active = this.tipBtnNode.active, this.unlockBtnNode.active = !1, 
                        this.hatchBtnNode.active = !0, this.autHatchBtnNode.active = !0) : 1 == M.instance.curChooseIndex ? (this.tipBtnNode.active = !1, 
                        this.AntBtnNode.active = !1, this.unlockBtnNode.active = !M.instance.isUnlockFireAnt, 
                        this.unlockBG.active = !M.instance.isUnlockFireAnt, this.unlockBG.active, this.hatchBtnNode.active = !this.unlockBtnNode.active, 
                        this.autHatchBtnNode.active = !this.unlockBtnNode.active, this.unlockBtnNode.getChildByName("Count").getComponent(d).string = M.instance.antFireVideoTimes + "/" + M.instance.antFireTargetVideoTimes) : 2 == M.instance.curChooseIndex ? (this.tipBtnNode.active = !1, 
                        this.AntBtnNode.active = !1, this.unlockBtnNode.active = !M.instance.isUnlockPosionAnt, 
                        this.unlockBG.active = !M.instance.isUnlockFireAnt, this.unlockBG.active, this.hatchBtnNode.active = !this.unlockBtnNode.active, 
                        this.autHatchBtnNode.active = !this.unlockBtnNode.active, this.unlockBtnNode.getChildByName("Count").getComponent(d).string = M.instance.antPosionVideoTimes + "/" + M.instance.antPosionTargetVideoTimes) : 3 == M.instance.curChooseIndex && (this.tipBtnNode.active = !1, 
                        this.AntBtnNode.active = this.tipBtnNode.active, this.unlockBtnNode.active = !M.instance.isUnlockAntCrown, 
                        this.unlockBG.active = !M.instance.isUnlockFireAnt, this.unlockBG.active, this.hatchBtnNode.active = !this.unlockBtnNode.active, 
                        this.autHatchBtnNode.active = !this.unlockBtnNode.active, this.unlockBtnNode.getChildByName("Count").getComponent(d).string = M.instance.antCrownVideoTimes + "/" + M.instance.antCrownTargetVideoTimes), 
                        this.refreshToggleUI(), this.handleChooseVideoBtn();
                    }
                }, {
                    key: "handleChooseVideoBtn",
                    value: function() {
                        var e = !0;
                        if (0 == M.instance.curChooseIndex) {
                            var n = _[0][0];
                            M.instance.nestRoomConfig.roomInfo[0].count < n.count && (e = !1);
                        } else if (1 == M.instance.curChooseIndex) {
                            var t = _[1][0], i = _[1][1];
                            M.instance.nestRoomConfig.roomInfo[0].count < t.count && (e = !1), M.instance.nestRoomConfig.roomInfo[5].count < i.count && (e = !1);
                        } else if (2 == M.instance.curChooseIndex) {
                            var o = _[2][0], a = _[2][1];
                            M.instance.nestRoomConfig.roomInfo[0].count < o.count && (e = !1), M.instance.honrNum < a.count && (e = !1);
                        } else if (3 == M.instance.curChooseIndex) {
                            var s = _[3][0], r = _[3][1];
                            M.instance.nestRoomConfig.roomInfo[5].count < s.count && (e = !1), M.instance.honrNum < r.count && (e = !1);
                        }
                        if (this.unschedule(this.delayShowHatchVideoBtn.bind(this)), e) this.hatchBtnLabelNode.position = new m(0, 0, 0), 
                        this.hatchBtnVideoNode.active = !1, this.hand.active = !1; else {
                            var c = 0;
                            C == I.WX && M.instance.wxMaiLiangWuChuData && M.instance.wxMaiLiangWuChuData.data && M.instance.wuchuOpen && -1 != M.instance.wxMaiLiangWuChuData.data.p18.indexOf("yes") && (c = M.instance.wxMaiLiangWuChuData.data.p14 || 0), 
                            this.scheduleOnce(this.delayShowHatchVideoBtn.bind(this), c);
                        }
                    }
                }, {
                    key: "delayShowHatchVideoBtn",
                    value: function() {
                        var e = this;
                        this.hatchBtnLabelNode.position = new m(20, 0, 0), this.hatchBtnVideoNode.active = !0, 
                        C == I.ANDROID_XiaoMi && (this.hand.active = !0, this.tween2 && (this.tween2.stop(), 
                        this.tween2 = null), this.tween2 = f(this.hand).to(0, {}).call(function() {
                            e.hand.getChildByName("hand0").active = !0, e.hand.getChildByName("hand1").active = !1;
                        }).delay(.35).call(function() {
                            e.hand.getChildByName("hand0").active = !1, e.hand.getChildByName("hand1").active = !0;
                        }).delay(.35).union().repeatForever().start(), this.tween1 && this.tween1.stop(), 
                        this.hatchBtnVideoNode.parent.scale = new m(1, 1, 1), this.tween1 = f(this.hatchBtnVideoNode.parent).to(.5, {
                            scale: new m(1.1, 1.1, 1)
                        }).to(1, {
                            scale: new m(.9, .9, 1)
                        }).union().repeatForever().start());
                    }
                }, {
                    key: "refreshToggleUI",
                    value: function() {
                        for (var e = this.node.getChildByName("ToggleGroup"), n = 0; n < 4; n++) {
                            var t = e.getChildByName("Toggle" + (n + 1));
                            0 == n || (1 == n ? (this.node.getChildByName("ToggleGroup").getChildByName("Toggle2").getChildByName("food0").getChildByName("count").getComponent(d).string = _[1][0].count.toString(), 
                            this.node.getChildByName("ToggleGroup").getChildByName("Toggle2").getChildByName("food1").getChildByName("count").getComponent(d).string = _[1][1].count.toString(), 
                            t && M.instance.isUnlockFireAnt && (t.getChildByName("high").active = !0, t.getChildByName("food0").active = !0, 
                            t.getChildByName("food1").active = !0, t.getChildByName("lock").active = !1)) : 2 == n ? (this.node.getChildByName("ToggleGroup").getChildByName("Toggle3").getChildByName("food0").getChildByName("count").getComponent(d).string = _[2][0].count.toString(), 
                            this.node.getChildByName("ToggleGroup").getChildByName("Toggle3").getChildByName("food1").getChildByName("count").getComponent(d).string = _[2][1].count.toString(), 
                            t && M.instance.isUnlockPosionAnt && (t.getChildByName("high").active = !0, t.getChildByName("food0").active = !0, 
                            t.getChildByName("food1").active = !0, t.getChildByName("lock").active = !1)) : 3 == n && (this.node.getChildByName("ToggleGroup").getChildByName("Toggle4").getChildByName("food0").getChildByName("count").getComponent(d).string = _[3][0].count.toString(), 
                            this.node.getChildByName("ToggleGroup").getChildByName("Toggle4").getChildByName("food1").getChildByName("count").getComponent(d).string = _[3][1].count.toString(), 
                            t && M.instance.isUnlockAntCrown && (t.getChildByName("high").active = !0, t.getChildByName("food0").active = !0, 
                            t.getChildByName("food1").active = !0, t.getChildByName("lock").active = !1)));
                        }
                    }
                }, {
                    key: "refreshBag",
                    value: function() {
                        for (var e = [], n = 0; n < M.instance.nestRoomConfig.bugIDs.length; n++) {
                            var t = M.instance.nestRoomConfig.bugIDs[n];
                            t.id > 1 && !M.instance.isSolderAnt(t.id) && e.push(t);
                        }
                        for (var i = 0; i < 12; i++) if (e[i]) {
                            this.bugBagIcon[i].node.active = !0, D.setImage(this.bugBagIcon[i], "resTex/UIShop_bug" + e[i].id, y), 
                            this.bugBagVideoSp[i].active = !1, this.bugBaglockSp[i].active = !1, this.bugBagDiamondIcon[i].active = !1, 
                            this.bugBagLabel[i].active = !1, 2 == e[i].state ? this.bugBagIcon[i].node.parent.getChildByName("mskNode").active = !0 : this.bugBagIcon[i].node.parent.getChildByName("mskNode").active = !1;
                            for (var o = 0; o < 5; o++) this.bugBagIcon[i].node.parent.getChildByName("star" + o).active = !1, 
                            this.bugBagIcon[i].node.parent.getChildByName("starBg").active = !1;
                            for (var a = 0; a < e[i].star; a++) {
                                var s = this.bugBagIcon[i].node.parent.getChildByName("star" + a);
                                e[i].star > 0 && (s.active = !0, this.bugBagIcon[i].node.parent.getChildByName("starBg").active = !0), 
                                1 == e[i].star ? s.setPosition(0, -26, 0) : 2 == e[i].star ? s.setPosition(20 * a - 10, -26, 0) : 3 == e[i].star ? s.setPosition(20 * a - 20, -26, 0) : 4 == e[i].star ? s.setPosition(20 * a - 30, -26, 0) : 5 == e[i].star && s.setPosition(20 * a - 40, -26, 0);
                            }
                        } else if (M.instance.bagInfo.length > i) {
                            0 == i && (M.instance.nestRoomConfig.roomInfo[6].level <= 0 ? (this.bugBaglockSp[i].active = !0, 
                            this.bugBaglockSp[i].parent.getChildByName("unlockT").active = !0) : this.bugBaglockSp[i].active = !1), 
                            this.bugBagIcon[i].node.active = !1, this.bugBagVideoSp[i].active = !1, this.bugBaglockSp[i].active = !1, 
                            this.bugBagDiamondIcon[i].active = !1, this.bugBagLabel[i].active = !1;
                            for (var r = 0; r < 5; r++) {
                                var c = this.bugBagIcon[i].node.parent.getChildByName("star" + r);
                                this.bugBagIcon[i].node.active || (c.active = !1, this.bugBagIcon[i].node.parent.getChildByName("starBg").active = !1);
                            }
                            this.bugBagIcon[i].node.parent.getChildByName("mskNode").active = !1;
                        } else this.bugBagIcon[i].node.active = !1, this.bugBaglockSp[i].active = !0, i == M.instance.bagInfo.length && this.isBugVideoShow ? (this.bugBagVideoSp[i].active = !0, 
                        this.bugBagDiamondIcon[i].active = !1, this.bugBagLabel[i].active = !1) : (this.bugBagVideoSp[i].active = !1, 
                        this.bugBagDiamondIcon[i].active = !0, this.bugBagLabel[i].active = !0);
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        if (!(e > 1)) {
                            if (this.hatchBtnVideoNode.active && this.hatchBtnNode.active || (this.hand.active = !1), 
                            this.unlockBG.active = this.unlockBtnNode.active, this.isDrop || this.isRongHe) {
                                this.rotateTimer += 6 * e;
                                for (var n = 0; n < M.instance.bagInfo.length; n++) this.bugBagVideoSp[n].parent.setRotationFromEuler(0, 0, 7 * Math.sin(this.rotateTimer));
                            } else for (var t = 0; t < M.instance.bagInfo.length; t++) this.bugBagVideoSp[t].parent.setRotationFromEuler(0, 0, 0);
                            M.instance.isAutoSolider ? this.isHatchAniming ? (this.hatchBtnCover.active = !0, 
                            this.hatchBtnBar.fillRange = D.clampf(this.hatchBtnBar.fillRange + e / 3, 0, 1), 
                            this.hatchBtnBar.fillRange >= 1 && (this.hatchBtnBar.fillRange = 0)) : this.isHatchAniming = !0 : this.isHatchAniming && (this.hatchBtnCover.active = !0, 
                            this.hatchBtnBar.fillRange = D.clampf(this.hatchBtnBar.fillRange + e / 3, 0, 1), 
                            this.hatchBtnBar.fillRange >= 1 && (this.isHatchAniming = !1, this.hatchBtnBar.fillRange = 0, 
                            this.hatchBtnCover.active = !1, this.handleChooseVideoBtn())), this.autHatchBtnSprite && (this.autHatchBtnSprite.grayscale = M.instance.isAutoSolider && M.instance.autoSoliderIndex == M.instance.curChooseIndex);
                        }
                    }
                }, {
                    key: "refreshUI",
                    value: function() {
                        for (var e = 0, n = 0; n < M.instance.nestRoomConfig.bugIDs.length; n++) {
                            var t = M.instance.nestRoomConfig.bugIDs[n].id;
                            M.instance.isSolderAnt(t) && e++;
                        }
                        var i = M.instance.nestRoomConfig.roomInfo[3].level;
                        i = D.clampf(i, 1, 999);
                        var o = T[i - 1].unlockAntNum;
                        this.antCountLabel.string = Math.floor(e) + "/" + o;
                        var a = M.instance.nestRoomConfig.roomInfo[3].level;
                        a = D.clampf(a, 1, 999);
                        var s = T[a - 1].unlockNum;
                        this.antLvLabel.string = "" + Math.floor(s);
                    }
                }, {
                    key: "btnHatchClick",
                    value: function() {
                        if (D.playSound(S.BTNCLICK), 43 == M.instance.guideSteps && (v.getScene().emit("CLOSE_GUIDE_UI"), 
                        P.reportGuide("11", 2), M.instance.guideSteps = 44, M.instance.newUnlockViewInfoIndex = 8, 
                        M.instance.showUI("prefabs/ui/UIUnlock"), M.instance.UILoad.active = !0, localStorage.setItem("guideSteps", M.instance.guideSteps.toString()), 
                        M.instance.wxReportEvent(U.STEPS_18), M.instance.youMenDaDian(w.guide_32)), M.instance.isAutoSolider) D.ShowTip("自动孵化中"); else if (!this.isHatchAniming) {
                            var e = M.instance.nestRoomConfig.roomInfo[3].level;
                            e = D.clampf(e, 1, 999);
                            for (var n = T[e - 1].unlockAntNum, t = 0, i = 0; i < M.instance.nestRoomConfig.bugIDs.length; i++) M.instance.isSolderAnt(M.instance.nestRoomConfig.bugIDs[i].id) && t++;
                            if (t >= n) return M.instance.UIHintUnlockBtnType = 1, M.instance.UIHintUnlockType = 4, 
                            M.instance.UIHintUnlockIconT = "蚁后房间", M.instance.UIHintUnlockDescT = "兵蚁数量已达上限，升级蚁后房间可以提高兵蚁数量", 
                            M.instance.UIHintUnlockIconUrl = "resTex/UIBuild_logo4", M.instance.UIHintUnlockBtnUrl = "resTex/UIHintUnlock_btn1", 
                            M.instance.UILoad.active = !0, void M.instance.showUI("prefabs/ui/UIHintUnlock");
                            if (0 == M.instance.curChooseIndex) {
                                var o = _[0][0];
                                if (M.instance.nestRoomConfig.roomInfo[0].count < o.count) {
                                    M.instance.youMengVideoClick = b.bingYi, M.instance.youMenDaDian(w.bingyiAdFuhua_click);
                                    var a = function() {
                                        M.instance.nestRoomConfig.eggIds.push(1), this.hatchSuccess(), M.instance.youMenDaDian(w.bingyiAdFuhua_complete);
                                    }.bind(this);
                                    return M.instance.shufenVideoID = 10, void M.instance.watchVideo("", a);
                                }
                                M.instance.nestRoomConfig.roomInfo[0].count -= o.count, M.instance.youMenDaDian(w.useagaric), 
                                M.instance.nestRoomConfig.eggIds.push(1);
                            } else if (1 == M.instance.curChooseIndex) {
                                var s = _[1][0], r = _[1][1];
                                if (M.instance.nestRoomConfig.roomInfo[0].count < s.count) {
                                    M.instance.youMengVideoClick = b.huoYi, M.instance.youMenDaDian(w.huoyiUnlock_click);
                                    var c = function() {
                                        M.instance.nestRoomConfig.eggIds.push(101), this.hatchSuccess(), M.instance.youMenDaDian(w.huoyiUnlock_complete);
                                    }.bind(this);
                                    return void M.instance.watchVideo("", c);
                                }
                                if (M.instance.nestRoomConfig.roomInfo[5].count < r.count) {
                                    M.instance.youMengVideoClick = b.huoYi, M.instance.youMenDaDian(w.huoyiUnlock_click);
                                    var u = function() {
                                        M.instance.nestRoomConfig.eggIds.push(101), this.hatchSuccess(), M.instance.youMenDaDian(w.huoyiUnlock_complete);
                                    }.bind(this);
                                    return void M.instance.watchVideo("", u);
                                }
                                M.instance.nestRoomConfig.roomInfo[0].count -= s.count, M.instance.youMenDaDian(w.useagaric), 
                                M.instance.nestRoomConfig.roomInfo[5].count -= r.count, M.instance.youMenDaDian(w.useInsect_part), 
                                M.instance.nestRoomConfig.eggIds.push(101);
                            } else if (2 == M.instance.curChooseIndex) {
                                var l = _[2][0], h = _[2][1];
                                if (M.instance.nestRoomConfig.roomInfo[0].count < l.count) {
                                    M.instance.youMengVideoClick = b.duYi, M.instance.youMenDaDian(w.duyiUnlock_click);
                                    var d = function() {
                                        M.instance.nestRoomConfig.eggIds.push(102), this.hatchSuccess(), M.instance.youMenDaDian(w.duyiUnlock_complete);
                                    }.bind(this);
                                    return void M.instance.watchVideo("", d);
                                }
                                if (M.instance.honrNum < h.count) {
                                    M.instance.youMengVideoClick = b.duYi, M.instance.youMenDaDian(w.duyiUnlock_click);
                                    var p = function() {
                                        M.instance.nestRoomConfig.eggIds.push(102), this.hatchSuccess(), M.instance.youMenDaDian(w.duyiUnlock_complete);
                                    }.bind(this);
                                    return void M.instance.watchVideo("", p);
                                }
                                M.instance.nestRoomConfig.roomInfo[0].count -= l.count, M.instance.youMenDaDian(w.useagaric), 
                                M.instance.honrNum -= h.count, M.instance.youMenDaDian(w.useflower), M.instance.nestRoomConfig.eggIds.push(102);
                            } else if (3 == M.instance.curChooseIndex) {
                                var g = _[3][0], f = _[3][1];
                                if (M.instance.nestRoomConfig.roomInfo[5].count < g.count) {
                                    M.instance.youMengVideoClick = b.yiWang, M.instance.youMenDaDian(w.yiwangUnlock_click);
                                    var m = function() {
                                        M.instance.nestRoomConfig.eggIds.push(103), this.hatchSuccess(), M.instance.youMenDaDian(w.yiwangUnlock_complete);
                                    }.bind(this);
                                    return void M.instance.watchVideo("", m);
                                }
                                if (M.instance.honrNum < f.count) {
                                    M.instance.youMengVideoClick = b.yiWang, M.instance.youMenDaDian(w.yiwangUnlock_click);
                                    var y = function() {
                                        M.instance.nestRoomConfig.eggIds.push(103), this.hatchSuccess(), M.instance.youMenDaDian(w.yiwangUnlock_complete);
                                    }.bind(this);
                                    return void M.instance.watchVideo("", y);
                                }
                                M.instance.nestRoomConfig.roomInfo[5].count -= g.count, M.instance.youMenDaDian(w.useInsect_part), 
                                M.instance.honrNum -= f.count, M.instance.youMenDaDian(w.useflower), M.instance.nestRoomConfig.eggIds.push(103);
                            }
                            this.hatchSuccess();
                        }
                    }
                }, {
                    key: "hatchSuccess",
                    value: function() {
                        this.isHatchAniming = !0, localStorage.setItem("nestRoomConfig", JSON.stringify(M.instance.nestRoomConfig)), 
                        v.getScene().emit("UpdateFoodShow"), M.instance.updateGameTaskPro(11), M.instance.updateTaskPro(8), 
                        M.instance.updateDayTaskPro(7);
                    }
                }, {
                    key: "btnAutoHatchClick",
                    value: function() {
                        if (D.playSound(S.BTNCLICK), M.instance.isAutoSolider) M.instance.isAutoSolider = !1, 
                        this.isHatchAniming = !1, this.hatchBtnBar.fillRange = 0, this.hatchBtnCover.active = !1, 
                        this.handleChooseVideoBtn(); else {
                            var e = M.instance.nestRoomConfig.roomInfo[3].level;
                            e = D.clampf(e, 1, 999);
                            for (var n = T[e - 1].unlockAntNum, t = 0, i = 0; i < M.instance.nestRoomConfig.bugIDs.length; i++) M.instance.isSolderAnt(M.instance.nestRoomConfig.bugIDs[i].id) && t++;
                            if (t >= n) return D.ShowTip("兵蚁已达上限"), void (M.instance.isAutoSolider = !1);
                            if (0 == M.instance.curChooseIndex) {
                                var o = _[0][0];
                                if (M.instance.nestRoomConfig.roomInfo[0].count < o.count) return M.instance.isAutoSolider = !1, 
                                M.instance.UIResLackingLogoIndex = 1, M.instance.showUI("prefabs/ui/UIResLacking"), 
                                M.instance.UILoad.active = !0, void (C == I.HW && this.destroyMine());
                            } else if (1 == M.instance.curChooseIndex) {
                                var a = _[1][0], s = _[1][1];
                                if (M.instance.nestRoomConfig.roomInfo[0].count < a.count) return M.instance.UIResLackingLogoIndex = 1, 
                                M.instance.showUI("prefabs/ui/UIResLacking"), M.instance.UILoad.active = !0, void (C == I.HW && this.destroyMine());
                                if (M.instance.nestRoomConfig.roomInfo[5].count < s.count) return M.instance.UIResLackingLogoIndex = 4, 
                                M.instance.showUI("prefabs/ui/UIResLacking"), M.instance.UILoad.active = !0, void (C == I.HW && this.destroyMine());
                            } else if (2 == M.instance.curChooseIndex) {
                                var r = _[2][0], c = _[2][1];
                                if (M.instance.nestRoomConfig.roomInfo[0].count < r.count) return M.instance.UIResLackingLogoIndex = 1, 
                                M.instance.showUI("prefabs/ui/UIResLacking"), M.instance.UILoad.active = !0, void (C == I.HW && this.destroyMine());
                                if (M.instance.honrNum < c.count) return M.instance.UIResLackingLogoIndex = 6, M.instance.showUI("prefabs/ui/UIResLacking"), 
                                M.instance.UILoad.active = !0, void (C == I.HW && this.destroyMine());
                            } else if (3 == M.instance.curChooseIndex) {
                                var u = _[3][0], l = _[3][1];
                                if (M.instance.nestRoomConfig.roomInfo[5].count < u.count) return M.instance.UIResLackingLogoIndex = 4, 
                                M.instance.showUI("prefabs/ui/UIResLacking"), M.instance.UILoad.active = !0, void (C == I.HW && this.destroyMine());
                                if (M.instance.honrNum < l.count) return M.instance.UIResLackingLogoIndex = 6, M.instance.showUI("prefabs/ui/UIResLacking"), 
                                M.instance.UILoad.active = !0, void (C == I.HW && this.destroyMine());
                            }
                            M.instance.isAutoSolider = !0, M.instance.autoSoliderIndex = M.instance.curChooseIndex;
                        }
                    }
                }, {
                    key: "btnFollowClick",
                    value: function() {
                        D.playSound(S.BTNCLICK), A.instance.getHome(0).isArmyTogether = !0, D.ShowTip("兵蚁已跟随出战"), 
                        M.instance.onShowBannerType(!0), this.node.removeFromParent(), this.node.destroy(), 
                        D.cleanUnuseRes();
                    }
                }, {
                    key: "staBtnClick",
                    value: function() {
                        D.playSound(S.BTNCLICK), M.instance.showUI("prefabs/ui/UIFight");
                    }
                }, {
                    key: "backBtnClick",
                    value: function() {
                        D.playSound(S.BTNCLICK), this.destroyMine();
                    }
                }, {
                    key: "destroyMine",
                    value: function() {
                        if (this.wxWuChu(), this.clickBackBtnCount++, C == I.WX && M.instance.guideSteps > 30 && 1 == M.instance.wxWuChuBaiMingDanType) {
                            if (M.instance.wxOneWuChuBackBtnCount == M.instance.getWuChuP12Info(1)) {
                                if (this.clickBackBtnCount <= M.instance.getWuChuP12Info(0)) return;
                                M.instance.wxWuChuBackBtnCount = 0;
                            }
                            if (D.getRandomInt(1, 100) <= M.instance.getWuChuP12Info(3) && M.instance.wxWuChuBackBtnCount >= M.instance.getWuChuP12Info(2)) {
                                if (this.clickBackBtnCount <= M.instance.getWuChuP12Info(0)) return;
                                M.instance.wxWuChuBackBtnCount = 0;
                            }
                        }
                        this.node.removeFromParent(), this.node.destroy(), D.showBanner(!1), D.cleanUnuseRes(), 
                        M.instance.wxInterAdCount++, v.getScene().emit("SHOW_WX_INTERAD"), v.getScene().emit("Vivo_showBanner"), 
                        v.getScene().emit("MainNativeBannerOPPO", !0), v.getScene().emit("DestroyNativeItem"), 
                        M.instance.onShowBannerType(!0), v.getScene().emit("ShowNativeAdItem", new m(cc.winSize.width / 2 - 358, 200, 0));
                    }
                }, {
                    key: "disBtnClick",
                    value: function() {
                        D.playSound(S.BTNCLICK), this.isRongHe || (0 != M.instance.bagInfo.length ? (this.isDrop = !this.isDrop, 
                        this.isDrop && D.ShowTip("请选择要丢弃的昆虫")) : D.ShowTip("没有可丢弃的昆虫"));
                    }
                }, {
                    key: "rebornBug",
                    value: function(e) {
                        for (var n = 0; n < M.instance.nestRoomConfig.bugIDs.length; n++) {
                            var t = M.instance.nestRoomConfig.bugIDs[n];
                            if (t.sid == e && 1 != t.state) {
                                t.state = 1;
                                var i = A.instance.getHome(0);
                                return i && i.createAnAnt(t.id, t.sid, t.star), void localStorage.setItem("nestRoomConfig", JSON.stringify(M.instance.nestRoomConfig));
                            }
                        }
                    }
                }, {
                    key: "deleteBug",
                    value: function(e) {
                        for (var n = 0; n < A.instance.ants.length; n++) if (A.instance.ants[n].sid == e) {
                            var t = A.instance.ants.splice(n, 1)[0];
                            t.node.removeFromParent(), t.node.destroy();
                            break;
                        }
                    }
                }, {
                    key: "onBtnJumpAntClick",
                    value: function() {
                        if (D.playSound(S.BTNCLICK), 1 == M.instance.curChooseIndex || 2 == M.instance.curChooseIndex) {
                            var e = [ M.instance.curChooseIndex ];
                            v.getScene().emit("UIMAP_SHOW", e);
                        }
                        this.destroyMine();
                    }
                }, {
                    key: "onBtnAntCrownVideoClick",
                    value: function() {
                        D.playSound(S.BTNCLICK), M.instance.UILoad.active = !0, M.instance.showUI("prefabs/ui/UISuperSoldierAnt");
                    }
                }, {
                    key: "onBtnAntVideoClick",
                    value: function() {
                        if (1 == M.instance.curChooseIndex) {
                            var e = function() {
                                if (M.instance.antFireVideoTimes += 1, localStorage.setItem("antFireVideoTimes", M.instance.antFireVideoTimes.toString()), 
                                this.AntBtnNode.getChildByName("Count").getComponent(d).string = M.instance.antFireVideoTimes + "/" + +M.instance.antFireTargetVideoTimes, 
                                M.instance.antFireVideoTimes < M.instance.antFireTargetVideoTimes) {
                                    var e = D.getRandomInt(0, 5);
                                    D.ShowUI("UIHint", null, null, 1, [ e ], [ 5 ]);
                                }
                                M.instance.antFireVideoTimes >= M.instance.antFireTargetVideoTimes && !M.instance.isUnlockFireAnt && (M.instance.unlockAntFireProgress = N[0], 
                                localStorage.setItem("unlockAntFireProgress", M.instance.unlockAntFireProgress.toString()), 
                                M.instance.isUnlockFireAnt = !0, localStorage.setItem("isUnlockFireAnt", "1"), M.instance.newUnlockViewInfoIndex = 9, 
                                M.instance.showUI("prefabs/ui/UIUnlock"), M.instance.UILoad.active = !0, this.handleChoose(M.instance.curChooseIndex));
                            }.bind(this);
                            M.instance.watchVideo("", e);
                        } else if (2 == M.instance.curChooseIndex) {
                            var n = function() {
                                if (M.instance.antPosionVideoTimes += 1, localStorage.setItem("antPosionVideoTimes", M.instance.antPosionVideoTimes.toString()), 
                                this.AntBtnNode.getChildByName("Count").getComponent(d).string = M.instance.antPosionVideoTimes + "/" + +M.instance.antPosionTargetVideoTimes, 
                                M.instance.antPosionVideoTimes < M.instance.antPosionTargetVideoTimes) {
                                    var e = D.getRandomInt(0, 5);
                                    D.ShowUI("UIHint", null, null, 1, [ e ], [ 5 ]);
                                }
                                M.instance.antPosionVideoTimes >= M.instance.antPosionTargetVideoTimes && !M.instance.isUnlockPosionAnt && (M.instance.unlockAntPosionProgress += N[1], 
                                localStorage.setItem("unlockAntPosionProgress", M.instance.unlockAntPosionProgress.toString()), 
                                M.instance.isUnlockPosionAnt = !0, localStorage.setItem("isUnlockPosionAnt", "1"), 
                                M.instance.newUnlockViewInfoIndex = 10, M.instance.showUI("prefabs/ui/UIUnlock"), 
                                M.instance.UILoad.active = !0, this.handleChoose(M.instance.curChooseIndex));
                            }.bind(this);
                            M.instance.watchVideo("", n);
                        }
                    }
                }, {
                    key: "unlockAntCrown",
                    value: function() {
                        M.instance.antCrownVideoTimes >= M.instance.antCrownTargetVideoTimes && !M.instance.isUnlockAntCrown ? (M.instance.isUnlockAntCrown = !0, 
                        localStorage.setItem("isUnlockAntCrown", "1"), M.instance.newUnlockViewInfoIndex = 11, 
                        M.instance.showUI("prefabs/ui/UIUnlock"), M.instance.UILoad.active = !0) : M.instance.antFireVideoTimes >= M.instance.antFireTargetVideoTimes && !M.instance.isUnlockFireAnt ? (M.instance.isUnlockFireAnt = !0, 
                        localStorage.setItem("isUnlockFireAnt", "1"), M.instance.newUnlockViewInfoIndex = 9, 
                        M.instance.showUI("prefabs/ui/UIUnlock"), M.instance.UILoad.active = !0) : M.instance.antPosionVideoTimes >= M.instance.antPosionTargetVideoTimes && !M.instance.isUnlockPosionAnt && (M.instance.isUnlockPosionAnt = !0, 
                        localStorage.setItem("isUnlockPosionAnt", "1"), M.instance.newUnlockViewInfoIndex = 10, 
                        M.instance.showUI("prefabs/ui/UIUnlock"), M.instance.UILoad.active = !0), this.handleChoose(M.instance.curChooseIndex);
                    }
                } ]), n;
            }()).prototype, "antLvLabel", [ R ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ee = t(Z.prototype, "antCountLabel", [ O ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ne = t(Z.prototype, "tipBtnNode", [ j ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), te = t(Z.prototype, "AntBtnNode", [ L ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ie = t(Z.prototype, "unlockBtnNode", [ z ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), oe = t(Z.prototype, "autHatchBtnNode", [ V ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ae = t(Z.prototype, "hatchBtnNode", [ H ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), se = t(Z.prototype, "hatchBtnVideoNode", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), re = t(Z.prototype, "hatchBtnLabelNode", [ G ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ce = t(Z.prototype, "hatchBtnBar", [ F ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ue = t(Z.prototype, "hatchBtnCover", [ W ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), le = t(Z.prototype, "unlockBG", [ q ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), he = t(Z.prototype, "hand", [ Y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), de = t(Z.prototype, "backBtn", [ K ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), pe = t(Z.prototype, "rongHeBtn", [ X ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ge = t(Z.prototype, "hintBg", [ J ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Q = Z)) || Q)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UISuperAnt.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./ShufenManager.js", "./Tools.js", "./DataManager.js", "./UILookVideo.js" ], function(e, t) {
    var i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            i = e.applyDecoratedDescriptor, o = e.inherits, a = e.classCallCheck, s = e.possibleConstructorReturn, 
            r = e.getPrototypeOf, c = e.initializerDefineProperty, u = e.assertThisInitialized, 
            l = e.createClass, h = e.asyncToGenerator;
        }, function(e) {
            d = e.cclegacy, p = e._decorator, g = e.Node, f = e.SpriteComponent, v = e.SpriteFrame, 
            m = e.director, y = e.LabelComponent, B = e.Vec3, C = e.Component;
        }, function(e) {
            I = e.YOUMENG_EVENT, w = e.CUR_PLATFORM, k = e.PLATFORM_TYPE, b = e.SUPERANT_UNLOCK_TYPE, 
            S = e.YOUEMNG_EVENT_ENUM, _ = e.SOUND_TYPE;
        }, function(e) {
            T = e.default;
        }, function(e) {
            U = e.Tools;
        }, function(e) {
            N = e.default;
        }, function(e) {
            P = e.UILookVideo;
        } ],
        execute: function() {
            d._RF.push({}, "cdd56R7aqdM+J1d0AB+G9eB", "UISuperAnt", void 0), E = p.ccclass, 
            G = p.property, e("UISuperAnt", (D = E("UISuperAnt"), A = G(g), M = G(g), x = G(g), 
            R = G(g), D((L = i((j = function(e) {
                function t() {
                    var e, n;
                    a(this, t);
                    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
                    return n = s(this, (e = r(t)).call.apply(e, [ this ].concat(o))), c(n, "topNode", L, u(n)), 
                    c(n, "bottomNode", z, u(n)), c(n, "items", V, u(n)), c(n, "hand", H, u(n)), n;
                }
                var i;
                return o(t, C), l(t, [ {
                    key: "onLoad",
                    value: function() {
                        for (var e = 0; e < this.items.length; e++) {
                            var n = e + 1;
                            U.setImage(this.items[e].getChildByName("icon").getComponent(f), "resTex/UISuperAnt_icon" + n, v);
                        }
                        U.setImage(this.topNode.getChildByName("bg1").getComponent(f), "resTex/UISuperAnt_bg4", v), 
                        U.setImage(this.topNode.getChildByName("bg2").getComponent(f), "resTex/UISuperAnt_bg4", v), 
                        U.setImage(this.bottomNode.getChildByName("bg1").getComponent(f), "resTex/UISuperAnt_bg5", v), 
                        U.setImage(this.bottomNode.getChildByName("bg2").getComponent(f), "resTex/UISuperAnt_bg5", v), 
                        this.topNode.setPosition(0, cc.winSize.height / 2, 0), this.bottomNode.setPosition(0, -cc.winSize.height / 2, 0), 
                        N.instance.UILoad.active = !1, m.getScene().on("MushRoomBtnJump", this.MushRoomBtnJump, this), 
                        m.getScene().on("DesCurShowUI", this.onBackBtnClick, this), this.init(), T.reportCustom("3"), 
                        N.instance.youMenDaDian(I.superAntsUI_appear), w == k.WX && U.showBanner(!0), w == k.TT && U.showBanner(!0), 
                        w == k.ANDROID_XiaoMi && U.showBanner(!0), N.instance.tryShowInterAd2();
                    }
                }, {
                    key: "init",
                    value: function() {
                        for (var e = 0; e < this.items.length; e++) this.refreshUI(e);
                    }
                }, {
                    key: "MushRoomBtnJump",
                    value: function() {
                        N.instance.jumpBuildPage = 0, N.instance.showUI("prefabs/ui/UIBuild");
                    }
                }, {
                    key: "onItemClick",
                    value: (i = h(n.default.mark(function e(t, i) {
                        var o, a, s, r, c, u;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                for (U.playSound(_.BTNCLICK), o = parseInt(i), a = 0; a < this.items.length; a++) this.items[a].getChildByName("selectSpr").active = o == a;
                                if ((s = N.instance.superAntInfo[o]).unlockType != b.video) {
                                    e.next = 17;
                                    break;
                                }
                                if (this.superAntYouMengEvent(o, 0), r = function() {
                                    s.curVideoCount++, s.curVideoCount >= s.tarVideoCount && (s.unlockType = b.get);
                                    var e = U.getRandomInt(0, 5);
                                    U.ShowUI("UIHint", null, null, 1, [ e ], [ 5 ]), this.refreshUI(o), this.superAntYouMengEvent(o, 1);
                                }.bind(this), c = 21 + Number(i), w != k.TT && w != k.WEB) {
                                    e.next = 13;
                                    break;
                                }
                                return N.instance.UILookVideoDesc = "是否观看视频加快工蚁收集?", e.next = 10, N.instance.showUI("prefabs/ui/UILookVideo");

                              case 10:
                                e.sent.getComponent(P).initYesCallBack(c, function() {
                                    r();
                                }), e.next = 15;
                                break;

                              case 13:
                                u = function() {
                                    r();
                                }.bind(this), N.instance.shufenVideoID = c, N.instance.watchVideo("", u);

                              case 15:
                                e.next = 18;
                                break;

                              case 17:
                                s.unlockType == b.get && (N.instance.antLimitShangXian() ? (s.unlockType = b.yongYou, 
                                m.getScene().emit("BUY_WOKER_BY_SKINID", o + 1), this.superAntYouMengEvent(o, 2), 
                                N.instance.updateGameTaskPro(2)) : (N.instance.UIHintUnlockBtnType = 1, N.instance.UIHintUnlockType = 5, 
                                N.instance.UIHintUnlockIconT = "蘑菇加工间", N.instance.UIHintUnlockDescT = "工蚁数量已达上限，升级蘑菇加工间可以提高工蚁数量", 
                                N.instance.UIHintUnlockIconUrl = "resTex/UIBuild_logo1", N.instance.UIHintUnlockBtnUrl = "resTex/UIHintUnlock_btn1", 
                                N.instance.UILoad.active = !0, N.instance.showUI("prefabs/ui/UIHintUnlock")));

                              case 18:
                                this.refreshUI(o);

                              case 19:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    })), function(e, n) {
                        return i.apply(this, arguments);
                    })
                }, {
                    key: "refreshUI",
                    value: function(e) {
                        var n = this.items[e], t = N.instance.superAntInfo[e];
                        t.unlockType == b.video ? (n.getChildByName("videoSpr").active = !0, n.getChildByName("videoSpr").getChildByName("curLookVideoCountT").getComponent(y).string = "" + t.curVideoCount, 
                        n.getChildByName("videoSpr").getChildByName("tarLookVideoCountT").getComponent(y).string = "/" + t.tarVideoCount, 
                        n.getChildByName("yongYouSpr").active = !1, n.getChildByName("msk").active = !1, 
                        n.getChildByName("getSpr").active = !1) : t.unlockType == b.get ? (n.getChildByName("getSpr").active = !0, 
                        n.getChildByName("videoSpr").active = !1, n.getChildByName("yongYouSpr").active = !1, 
                        n.getChildByName("msk").active = !1) : t.unlockType == b.yongYou && (n.getChildByName("yongYouSpr").active = !0, 
                        n.getChildByName("msk").active = !0, n.getChildByName("getSpr").active = !1, n.getChildByName("videoSpr").active = !1), 
                        localStorage.setItem("superAntInfo", JSON.stringify(N.instance.superAntInfo));
                    }
                }, {
                    key: "superAntYouMengEvent",
                    value: function(e, n) {
                        switch (e) {
                          case 0:
                            0 == n ? (N.instance.youMengVideoClick = S.superAnt1, N.instance.youMenDaDian(I.superAnts1_click)) : 1 == n ? N.instance.youMenDaDian(I.superAnts1_complete) : N.instance.youMenDaDian(I.superAnts1_get);
                            break;

                          case 1:
                            0 == n ? (N.instance.youMengVideoClick = S.superAnt2, N.instance.youMenDaDian(I.superAnts2_click)) : 1 == n ? N.instance.youMenDaDian(I.superAnts2_complete) : N.instance.youMenDaDian(I.superAnts2_get);
                            break;

                          case 2:
                            0 == n ? (N.instance.youMengVideoClick = S.superAnt3, N.instance.youMenDaDian(I.superAnts3_click)) : 1 == n ? N.instance.youMenDaDian(I.superAnts3_complete) : N.instance.youMenDaDian(I.superAnts3_get);
                            break;

                          case 3:
                            0 == n ? (N.instance.youMengVideoClick = S.superAnt4, N.instance.youMenDaDian(I.superAnts4_click)) : 1 == n ? N.instance.youMenDaDian(I.superAnts4_complete) : N.instance.youMenDaDian(I.superAnts4_get);
                            break;

                          case 4:
                            0 == n ? (N.instance.youMengVideoClick = S.superAnt5, N.instance.youMenDaDian(I.superAnts5_click)) : 1 == n ? N.instance.youMenDaDian(I.superAnts5_complete) : N.instance.youMenDaDian(I.superAnts5_get);
                            break;

                          case 5:
                            0 == n ? (N.instance.youMengVideoClick = S.superAnt6, N.instance.youMenDaDian(I.superAnts6_click)) : 1 == n ? N.instance.youMenDaDian(I.superAnts6_complete) : N.instance.youMenDaDian(I.superAnts6_get);
                        }
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        U.playSound(_.BTNCLICK), this.node.removeFromParent(), this.node.destroy(), U.cleanUnuseRes(), 
                        U.showBanner(!1), N.instance.wxInterAdCount++, m.getScene().emit("SHOW_WX_INTERAD"), 
                        m.getScene().emit("Vivo_showBanner"), m.getScene().emit("MainNativeBannerOPPO", !0), 
                        m.getScene().emit("DestroyNativeItem"), N.instance.onShowBannerType(!0), m.getScene().emit("ShowNativeAdItem", new B(cc.winSize.width / 2 - 358, 200, 0));
                    }
                } ]), t;
            }()).prototype, "topNode", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), z = i(j.prototype, "bottomNode", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), V = i(j.prototype, "items", [ x ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), H = i(j.prototype, "hand", [ R ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), O = j)) || O)), d._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UISuperSoldierAnt.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W, q, Y, K, X, J, Q, Z, $, ee, ne, te, ie, oe, ae, se;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _dec9: void 0,
        _dec10: void 0,
        _dec11: void 0,
        _dec12: void 0,
        _dec13: void 0,
        _dec14: void 0,
        _dec15: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _descriptor8: void 0,
        _descriptor9: void 0,
        _descriptor10: void 0,
        _descriptor11: void 0,
        _descriptor12: void 0,
        _descriptor13: void 0,
        _descriptor14: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.Node, g = e.LabelComponent, 
            f = e.tween, v = e.Vec3, m = e.SpriteFrame, y = e.Vec2, B = e.CameraComponent, C = e.director, 
            I = e.Component;
        }, function(e) {
            w = e.CUR_PLATFORM, k = e.PLATFORM_TYPE, b = e.SOUND_TYPE;
        }, function(e) {
            S = e.Tools;
        }, function(e) {
            _ = e.GameManager;
        }, function(e) {
            T = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "cb714U4LLROlo9s5uveujWb", "UISuperSoldierAnt", void 0), ae = h.ccclass, 
            se = h.property, e("UISuperSoldierAnt", (U = ae("UISuperSoldierAnt"), N = se(d), 
            P = se(p), D = se(p), A = se(p), M = se(g), x = se(g), R = se(g), O = se(g), j = se(p), 
            L = se(p), z = se(p), V = se(p), H = se(d), E = se(p), U((W = t((F = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "icon", W, c(t)), 
                    r(t, "item1", q, c(t)), r(t, "item2", Y, c(t)), r(t, "item3", K, c(t)), r(t, "labGongJi", X, c(t)), 
                    r(t, "labXue", J, c(t)), r(t, "title", Q, c(t)), r(t, "labTip", Z, c(t)), r(t, "r1", $, c(t)), 
                    r(t, "r2", ee, c(t)), r(t, "lv", ne, c(t)), r(t, "pro", te, c(t)), r(t, "pro1", ie, c(t)), 
                    r(t, "hand", oe, c(t)), t;
                }
                return i(n, I), u(n, [ {
                    key: "start",
                    value: function() {
                        var e = this;
                        this.init(), T.instance.UILoad.active = !1, w == k.ANDROID_XiaoMi && (f(this.node.getChildByName("bg").getChildByName("btnVideo")).to(.5, {
                            scale: new v(1.1, 1.1, 1)
                        }).to(1, {
                            scale: new v(.9, .9, 1)
                        }).union().repeatForever().start(), this.hand.active = !0, f(this.hand).to(0, {}).call(function() {
                            e.hand.getChildByName("hand0").active = !0, e.hand.getChildByName("hand1").active = !1;
                        }).delay(.35).call(function() {
                            e.hand.getChildByName("hand0").active = !1, e.hand.getChildByName("hand1").active = !0;
                        }).delay(.35).union().repeatForever().start());
                    }
                }, {
                    key: "init",
                    value: function() {
                        if (1 == T.instance.curChooseIndex) {
                            for (var e = 1; e < 6; e++) this.node.getChildByName("bg").getChildByName("star" + e).active = !0, 
                            this.node.getChildByName("bg").getChildByName("star" + e).position = new v(this.node.getChildByName("bg").getChildByName("star" + e).position.x + 53, 181.994, 0);
                            this.title.string = "火蚁", this.labTip.string = "火蚁的攻击能使敌人持续的掉血！", this.item1.active = !1, 
                            this.item2.active = !1, this.item3.position = new v(0, -326.916, 0), this.pro.active = !1, 
                            this.labGongJi.string = T.instance.getAntDataByID(101).att.toString(), this.labXue.string = T.instance.getAntDataByID(101).blood.toString(), 
                            this.lv.position = this.item3.position, S.setImage(this.item3.getChildByName("icon").getComponent(d), "resTex/UILogo_10", m), 
                            _.instance.loaderPlayer(102, new v(0, 210, 0), !0, .53), S.renderImage(this.icon, new y(750, 320), _.instance.Player.getChildByName("camera").getComponent(B));
                        } else if (2 == T.instance.curChooseIndex) {
                            for (var n = 1; n < 7; n++) this.node.getChildByName("bg").getChildByName("star" + n).active = !0, 
                            this.node.getChildByName("bg").getChildByName("star" + n).position = new v(this.node.getChildByName("bg").getChildByName("star" + n).position.x + 25, 181.994, 0);
                            this.item1.position = new v(-120, -326.916, 0), this.item3.position = new v(120, -326.916, 0), 
                            this.pro.scale = new v(.5, 1, 1), S.setImage(this.item3.getChildByName("icon").getComponent(d), "resTex/UILogo_11", m), 
                            this.title.string = "毒蚁", this.labTip.string = "毒蚁能在原处发射毒液攻击敌人!", this.labGongJi.string = T.instance.getAntDataByID(102).att.toString(), 
                            this.item2.active = !1, this.labXue.string = T.instance.getAntDataByID(102).blood.toString(), 
                            0 == T.instance.antPosionVideoTimes ? (this.lv.position = this.item1.position, this.pro1.fillRange = 0) : 1 == T.instance.antPosionVideoTimes && (this.lv.position = this.item3.position, 
                            this.pro1.fillRange = 1), _.instance.loaderPlayer(103, new v(0, 210, 0), !0, .53), 
                            S.renderImage(this.icon, new y(750, 320), _.instance.Player.getChildByName("camera").getComponent(B));
                        } else if (3 == T.instance.curChooseIndex) {
                            for (var t = 1; t < 8; t++) this.node.getChildByName("bg").getChildByName("star" + t).active = !0;
                            _.instance.loaderPlayer(104, new v(0, 210, 0), !0, .5), S.renderImage(this.icon, new y(750, 320), _.instance.Player.getChildByName("camera").getComponent(B)), 
                            S.setImage(this.item3.getChildByName("icon").getComponent(d), "resTex/UILogo_12", m), 
                            this.title.string = "蚁王", this.labTip.string = "蚁王体型巨大可以减少敌人伤害！", this.labGongJi.string = T.instance.getAntDataByID(103).att.toString(), 
                            this.labXue.string = T.instance.getAntDataByID(103).blood.toString(), 0 == T.instance.antCrownVideoTimes ? (this.lv.position = this.item1.position, 
                            this.pro1.fillRange = 0) : 1 == T.instance.antCrownVideoTimes ? (this.lv.position = this.item2.position, 
                            this.pro1.fillRange = .5) : 2 == T.instance.antCrownVideoTimes && (this.lv.position = this.item3.position, 
                            this.pro1.fillRange = 1);
                        }
                    }
                }, {
                    key: "onVideoBtn",
                    value: function() {
                        var e = function() {
                            1 == T.instance.curChooseIndex ? (T.instance.antFireVideoTimes += 1, T.instance.antFireVideoTimes, 
                            T.instance.antFireTargetVideoTimes) : 2 == T.instance.curChooseIndex ? (T.instance.antPosionVideoTimes += 1, 
                            T.instance.antPosionVideoTimes < T.instance.antPosionTargetVideoTimes && (console.log(T.instance.antPosionVideoTimes, T.instance.antPosionTargetVideoTimes), 
                            S.ShowUI("UIHint", null, null, 1, [ 4 ], [ 10 ]))) : 3 == T.instance.curChooseIndex && (T.instance.antCrownVideoTimes += 1, 
                            T.instance.antCrownVideoTimes < T.instance.antCrownTargetVideoTimes && (console.log(T.instance.antCrownVideoTimes, T.instance.antCrownTargetVideoTimes), 
                            1 == T.instance.antCrownVideoTimes ? S.ShowUI("UIHint", null, null, 1, [ 4 ], [ 10 ]) : S.ShowUI("UIHint", null, null, 1, [ 1 ], [ 10 ]))), 
                            localStorage.setItem("antFireVideoTimes", T.instance.antFireVideoTimes.toString()), 
                            localStorage.setItem("antPosionVideoTimes", T.instance.antPosionVideoTimes.toString()), 
                            localStorage.setItem("antCrownVideoTimes", T.instance.antCrownVideoTimes.toString()), 
                            this.unlockAntCrown();
                        }.bind(this);
                        T.instance.watchVideo("", e);
                    }
                }, {
                    key: "unlockAntCrown",
                    value: function() {
                        return T.instance.antCrownVideoTimes >= T.instance.antCrownTargetVideoTimes && !T.instance.isUnlockAntCrown ? (this.node.removeFromParent(), 
                        this.node.destroy(), T.instance.isUnlockAntCrown = !0, localStorage.setItem("isUnlockAntCrown", "1"), 
                        T.instance.newUnlockViewInfoIndex = 11, T.instance.showUI("prefabs/ui/UIUnlock"), 
                        T.instance.UILoad.active = !0, void C.getScene().emit("handleChoose", T.instance.curChooseIndex)) : T.instance.antFireVideoTimes >= T.instance.antFireTargetVideoTimes && !T.instance.isUnlockFireAnt ? (this.node.removeFromParent(), 
                        this.node.destroy(), T.instance.isUnlockFireAnt = !0, localStorage.setItem("isUnlockFireAnt", "1"), 
                        T.instance.newUnlockViewInfoIndex = 9, T.instance.showUI("prefabs/ui/UIUnlock"), 
                        T.instance.UILoad.active = !0, void C.getScene().emit("handleChoose", T.instance.curChooseIndex)) : T.instance.antPosionVideoTimes >= T.instance.antPosionTargetVideoTimes && !T.instance.isUnlockPosionAnt ? (this.node.removeFromParent(), 
                        this.node.destroy(), T.instance.isUnlockPosionAnt = !0, localStorage.setItem("isUnlockPosionAnt", "1"), 
                        T.instance.newUnlockViewInfoIndex = 10, T.instance.showUI("prefabs/ui/UIUnlock"), 
                        T.instance.UILoad.active = !0, void C.getScene().emit("handleChoose", T.instance.curChooseIndex)) : void this.init();
                    }
                }, {
                    key: "onClose",
                    value: function() {
                        S.playSound(b.BTNCLICK), C.getScene().emit("handleChoose", T.instance.curChooseIndex), 
                        this.node.removeFromParent(), this.node.destroy();
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        this.r1.eulerAngles = this.r1.eulerAngles.add(new v(0, 0, 1)), this.r2.eulerAngles = this.r2.eulerAngles.add(new v(0, 0, 1));
                    }
                } ]), n;
            }()).prototype, "icon", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), q = t(F.prototype, "item1", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Y = t(F.prototype, "item2", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), K = t(F.prototype, "item3", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), X = t(F.prototype, "labGongJi", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), J = t(F.prototype, "labXue", [ x ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Q = t(F.prototype, "title", [ R ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Z = t(F.prototype, "labTip", [ O ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), $ = t(F.prototype, "r1", [ j ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ee = t(F.prototype, "r2", [ L ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ne = t(F.prototype, "lv", [ z ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), te = t(F.prototype, "pro", [ V ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ie = t(F.prototype, "pro1", [ H ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), oe = t(F.prototype, "hand", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), G = F)) || G)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UITTLuZhi.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _dec9: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _descriptor8: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.SpriteComponent, g = e.LabelComponent, 
            f = e.SpriteFrame, v = e.director, m = e.Component;
        }, function(e) {
            y = e.MUSHROOM_ROOM_INFO, B = e.LEAF_ROOM_INFO, C = e.NUT_ROOM_INFO, I = e.PART_ROOM_INFO, 
            w = e.SOUND_TYPE;
        }, function(e) {
            k = e.Tools;
        }, function(e) {
            b = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "c9db6jadOdBKKhqgGdlCvKX", "UITTLuZhi", void 0), F = h.ccclass, W = h.property, 
            e("UITTLuZhi", (S = F("UITTLuZhi"), _ = W(d), T = W(p), U = W(p), N = W(p), P = W(g), 
            D = W(p), A = W(d), M = W(d), S((O = t((R = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "awardSpr", O, c(t)), 
                    r(t, "skinIcon", j, c(t)), r(t, "awardIcon", L, c(t)), r(t, "awardCountIcon", z, c(t)), 
                    r(t, "awardCountT", V, c(t)), r(t, "luZhiBtn", H, c(t)), r(t, "awardCountBg", E, c(t)), 
                    r(t, "shareSpr", G, c(t)), t.luZhiType = 1, t;
                }
                return i(n, m), u(n, [ {
                    key: "start",
                    value: function() {}
                }, {
                    key: "init",
                    value: function(e) {
                        if (this.luZhiType = e, 1 == e) this.randomAwardInfo(); else {
                            k.setImage(this.luZhiBtn, "resTex/UITT_shareBtn", f), this.awardCountT.string = "" + b.instance.TTAwardCountConfig;
                            var n = this.changeIcon(b.instance.TTAwardIndex);
                            k.setImage(this.awardIcon, n, f), k.TTStopRecord();
                        }
                        b.instance.TTAwardCount <= 0 ? (this.awardCountBg.active = !1, this.shareSpr.active = !1, 
                        this.awardSpr.active = !1) : k.setImage(this.awardCountIcon, "resTex/UIShop_" + b.instance.TTAwardCount, f);
                    }
                }, {
                    key: "randomAwardInfo",
                    value: function() {
                        for (var e = y[k.clampf(b.instance.nestRoomConfig.roomInfo[0].level - 1, 0, 999)], n = B[k.clampf(b.instance.nestRoomConfig.roomInfo[1].level - 1, 0, 999)], t = C[k.clampf(b.instance.nestRoomConfig.roomInfo[2].level - 1, 0, 999)], i = I[k.clampf(b.instance.nestRoomConfig.roomInfo[5].level - 1, 0, 999)], o = [], a = 0; a < b.instance.TTAwardConfig.length; a++) for (var s = b.instance.TTAwardConfig[a], r = 0; !(!(r < s.random) || 0 == s.id && (b.instance.nestRoomConfig.roomInfo[0].level <= 0 || b.instance.nestRoomConfig.roomInfo[0].count >= e.unlockNum) || 1 == s.id && (b.instance.nestRoomConfig.roomInfo[1].level <= 0 || b.instance.nestRoomConfig.roomInfo[1].count >= n.unlockNum) || 2 == s.id && (b.instance.nestRoomConfig.roomInfo[2].level <= 0 || b.instance.nestRoomConfig.roomInfo[2].count >= t.unlockNum) || 3 == s.id && (b.instance.nestRoomConfig.roomInfo[5].level <= 0 || b.instance.nestRoomConfig.roomInfo[5].count >= i.unlockNum)); r++) {
                            var c = {
                                id: s.id,
                                random: s.random
                            };
                            o.push(c);
                        }
                        for (var u = k.getRandomInt(0, o.length - 1), l = 0; l < b.instance.TTAwardConfig.length; l++) if (b.instance.TTAwardConfig[l].id == o[u].id) {
                            b.instance.TTAwardIndex = l;
                            break;
                        }
                        var h = b.instance.TTAwardConfig[b.instance.TTAwardIndex].min, d = b.instance.TTAwardConfig[b.instance.TTAwardIndex].max, p = k.getRandomInt(h, d);
                        b.instance.TTAwardCountConfig = parseInt(p.toString()), localStorage.setItem("TTAwardCountConfig", b.instance.TTAwardCountConfig.toString()), 
                        this.awardCountT.string = "" + b.instance.TTAwardCountConfig;
                        var g = this.changeIcon(b.instance.TTAwardIndex);
                        k.setImage(this.awardIcon, g, f), console.log("随机数组：", o, b.instance.TTAwardIndex, b.instance.TTAwardCountConfig);
                    }
                }, {
                    key: "changeIcon",
                    value: function(e) {
                        switch (e) {
                          case 0:
                            return "resTex/UIMain_mogu";

                          case 1:
                            return "resTex/UIMain_yezi";

                          case 2:
                            return "resTex/UIMain_jianguo";

                          case 3:
                            return "resTex/UIMain_rou";

                          case 4:
                            return "resTex/UIMain_jewelSpr";

                          case 5:
                            return "resTex/UIPVP_spr4";
                        }
                    }
                }, {
                    key: "onLuZhiBtnClick",
                    value: function() {
                        if (k.playSound(w.BTNCLICK), 1 == this.luZhiType) b.instance.TTIsStartLuZhi = !0, 
                        v.getScene().emit("TTStartLuZhi"), k.TTRecorderVideo(), this.onBackBtnClick(); else {
                            v.getScene().emit("TTEndLuZhi");
                            var e = function() {
                                b.instance.TTAwardCount > 0 && (k.ShowUI("UIHint", null, null, 1, [ b.instance.TTAwardIndex ], [ b.instance.TTAwardCountConfig ]), 
                                b.instance.TTAwardCount--, k.setImage(this.awardCountIcon, "resTex/UIShop_" + b.instance.TTAwardCount, f), 
                                localStorage.setItem("TTAwardCount", b.instance.TTAwardCount.toString())), this.onBackBtnClick(), 
                                b.instance.updateDayTaskPro(12);
                            }.bind(this);
                            k.TTShareRecordVideo(e);
                        }
                    }
                }, {
                    key: "getShareAward",
                    value: function() {}
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        k.playSound(w.BTNCLICK), this.node.removeFromParent(), this.node.destroy(), k.cleanUnuseRes();
                    }
                } ]), n;
            }()).prototype, "awardSpr", [ _ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), j = t(R.prototype, "skinIcon", [ T ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), L = t(R.prototype, "awardIcon", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), z = t(R.prototype, "awardCountIcon", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), V = t(R.prototype, "awardCountT", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), H = t(R.prototype, "luZhiBtn", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), E = t(R.prototype, "awardCountBg", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), G = t(R.prototype, "shareSpr", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), x = R)) || x)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UITask.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W, q, Y, K, X, J, Q, Z;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.Vec3, g = e.MaskComponent, f = e.SpriteComponent, 
            v = e.Color, m = e.director, y = e.instantiate, B = e.ButtonComponent, C = e.LabelComponent, 
            I = e.SpriteFrame, w = e.tween, k = e.Component;
        }, function(e) {
            b = e.CUR_PLATFORM, S = e.PLATFORM_TYPE, _ = e.TASK_OK_TYPE, T = e.SOUND_TYPE, U = e.GUIDE_STEPS, 
            N = e.ACHIEVEMENT_DESC, P = e.ACHIEVEMENT_GOTOBUILDPAGE, D = e.MAIDIAN_STEPS, A = e.YOUEMNG_EVENT_ENUM, 
            M = e.YOUMENG_EVENT, x = e.EVERYDAY_DESC;
        }, function(e) {
            R = e.Tools;
        }, function(e) {
            O = e.GameManager;
        }, function(e) {
            j = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "f4f8edn3F9NToxRsIF+sSyc", "UITask", void 0), Q = h.ccclass, Z = h.property, 
            e("UITask", (L = Q("UITask"), z = Z(d), V = Z(d), H = Z(d), E = Z(d), G = Z(d), 
            L((q = t((W = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "backBtn", q, c(t)), 
                    r(t, "achievementBtn", Y, c(t)), r(t, "everydayBtn", K, c(t)), r(t, "taskNode", X, c(t)), 
                    r(t, "leftNode", J, c(t)), t.wxShowBannerCount = 0, t.clickBackBtnCount = 0, t.tw2 = [], 
                    t.tw1 = [], t;
                }
                return i(n, k), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        this.node.getChildByName("bottom").setPosition(0, -cc.winSize.height / 2, 0), this.leftNode.setPosition(-cc.winSize.width / 2, 0, 0), 
                        j.instance.UILoad.active = !1, j.instance.shiPeiUIBackBtn(this.leftNode.getChildByName("backBtn")), 
                        O.instance.showNativeAdItem(new p(cc.winSize.width / 2 - 86, -270, 0));
                    }
                }, {
                    key: "start",
                    value: function() {
                        var e = this;
                        if (b == S.TT || 12 == j.instance.everyDayConfig.length && j.instance.everyDayConfig.splice(j.instance.everyDayConfig.length - 1, 1), 
                        this.achievementPageData(), this.taskNode.parent.parent.getComponent(g).inverted = !1, 
                        25 == j.instance.guideSteps && (j.instance.guideSteps = 26), j.instance.isOpenDayTaskView && this.everydayBtnClick(), 
                        this.achievementPageHongDianShow(), this.everydayPageHongDianShow(), this.hongDianAni(), 
                        this.schedule(this.hongDianAni, 1.5), b == S.QQ && j.instance.guideSteps > 30 && R.getRandomInt(1, 10) <= j.instance.qqWuChuConfig.APPBOX_OPEN && j.instance.qqWuChuConfig && j.instance.qqBannerWuChuOpen && R.showAppBoxQQ(), 
                        b == S.WX && j.instance.guideSteps > 30) if (j.instance.wxMaiLiangWuChuData) {
                            j.instance.wxWuChuBackBtnCount++, j.instance.wxOneWuChuBackBtnCount++;
                            var n = j.instance.wxMaiLiangWuChuData.data.p8.split(","), t = Math.floor(n[0]);
                            this.scheduleOnce(function() {
                                e.backBtn.active = !0;
                            }, t);
                        } else this.backBtn.active = !0; else this.backBtn.active = !0;
                        b == S.WX ? j.instance.isShowHuTuiIcon1 ? j.instance.wxHuTuiIcon && R.showWxHuTuiIcon(2) : j.instance.wxHuTuiIcon && (j.instance.wxHuTuiIcon.active = !1) : j.instance.guideSteps > 30 && b == S.ANDROID_XiaoMi && (j.instance.tryShowInterAd2(), 
                        R.showBanner(!0)), b == S.TT && R.showBanner(!0), b == S.ANDROID_XiaoMi && R.showBanner(!0);
                    }
                }, {
                    key: "wxWuChu",
                    value: function() {
                        var e = this;
                        if (b == S.WX && j.instance.guideSteps > 30) if (j.instance.wxMaiLiangWuChuData && this.clickBackBtnCount <= 0 && 1 == j.instance.wxWuChuBaiMingDanType) {
                            var n = j.instance.wxMaiLiangWuChuData.data.p8.split(","), t = Math.floor(n[1]), i = Math.floor(n[2]), o = Math.floor(n[3]), a = Math.floor(n[4]);
                            0 == o ? R.getRandomInt(1, 100) <= i && this.scheduleOnce(function() {
                                R.showBanner(!0);
                                var n = j.instance.wxMaiLiangWuChuData.data.p10.split(","), t = Math.floor(n[0]), i = Math.floor(n[1]), o = 0, s = 0;
                                e.schedule(function() {
                                    if (++o >= t) {
                                        if (o == t) return void R.showBanner(!1);
                                        ++s >= i && e.wxShowBannerCount < a && (R.showBanner(!0), o = 0, s = 0, e.wxShowBannerCount++);
                                    }
                                }, 1);
                            }, t) : this.backBtn.active = !0;
                        } else this.backBtn.active = !0;
                    }
                }, {
                    key: "hongDianAni",
                    value: function() {
                        this.achievementBtn.getChildByName("spr").active && O.instance.hongDianAni(this.achievementBtn.getChildByName("spr")), 
                        this.everydayBtn.getChildByName("spr").active && O.instance.hongDianAni(this.everydayBtn.getChildByName("spr"));
                    }
                }, {
                    key: "achievementPageHongDianShow",
                    value: function() {
                        for (var e = 0; e < j.instance.achievementConfig.length; e++) if (j.instance.achievementConfig[e].getType == _.mayGet) return void (this.achievementBtn.getChildByName("spr").active = !0);
                        this.achievementBtn.getChildByName("spr").active = !1;
                    }
                }, {
                    key: "everydayPageHongDianShow",
                    value: function() {
                        for (var e = 0; e < j.instance.everyDayConfig.length; e++) if (j.instance.everyDayConfig[e].getType == _.mayGet) return void (this.everydayBtn.getChildByName("spr").active = !0);
                        this.everydayBtn.getChildByName("spr").active = !1;
                    }
                }, {
                    key: "achievementBtnClick",
                    value: function() {
                        R.playSound(T.BTNCLICK), this.everydayBtn.getComponent(f).color = new v(210, 152, 100, 255), 
                        this.achievementBtn.getComponent(f).color = new v(255, 255, 255, 255), this.achievementPageData();
                    }
                }, {
                    key: "everydayBtnClick",
                    value: function() {
                        R.playSound(T.BTNCLICK), this.achievementBtn.getComponent(f).color = new v(210, 152, 100, 255), 
                        this.everydayBtn.getComponent(f).color = new v(255, 255, 255, 255), this.everydayPageData();
                    }
                }, {
                    key: "backBtnClick",
                    value: function() {
                        if (R.playSound(T.BTNCLICK), this.wxWuChu(), this.clickBackBtnCount++, b == S.WX && j.instance.guideSteps > 30 && 1 == j.instance.wxWuChuBaiMingDanType) {
                            if (j.instance.wxOneWuChuBackBtnCount == j.instance.getWuChuP12Info(1)) {
                                if (this.clickBackBtnCount <= j.instance.getWuChuP12Info(0)) return;
                                j.instance.wxWuChuBackBtnCount = 0;
                            }
                            if (R.getRandomInt(1, 100) <= j.instance.getWuChuP12Info(3) && j.instance.wxWuChuBackBtnCount >= j.instance.getWuChuP12Info(2)) {
                                if (this.clickBackBtnCount <= j.instance.getWuChuP12Info(0)) return;
                                j.instance.wxWuChuBackBtnCount = 0;
                            }
                        }
                        this.node.removeFromParent(), this.node.destroy(), R.cleanUnuseRes(), 26 == j.instance.guideSteps && (j.instance.guideSteps = 27, 
                        m.getScene().emit(U.STEPS_27), localStorage.setItem("guideSteps", j.instance.guideSteps.toString())), 
                        R.showBanner(!1), j.instance.wxInterAdCount++, m.getScene().emit("SHOW_WX_INTERAD"), 
                        m.getScene().emit("Vivo_showBanner"), m.getScene().emit("MainNativeBannerOPPO", !0), 
                        m.getScene().emit("DestroyNativeItem"), j.instance.onShowBannerType(!0), m.getScene().emit("ShowNativeAdItem", new p(cc.winSize.width / 2 - 358, 200, 0));
                    }
                }, {
                    key: "achievementPageData",
                    value: function() {
                        for (var e = 1; e < this.taskNode.parent.children.length; e++) {
                            var n = this.taskNode.parent.children[e];
                            n.removeFromParent(), n.destroy(), e--;
                        }
                        if (this.taskNode.active = !0, this.tw1.length > 0) for (var t = 0; t < this.tw1.length; t++) this.tw1[t] && (this.tw1[t].stop(), 
                        this.tw1.splice(t, 1), t--);
                        for (var i = 0; i < j.instance.achievementConfig.length; i++) {
                            var o = j.instance.achievementConfig[i], a = y(this.taskNode);
                            this.taskNode.parent.addChild(a), a.setPosition(0, -120 * i, 0), this.taskNode.parent.height = Math.abs(a.position.y) + 120;
                            for (var s = a.getChildByName("iconBg").getChildByName("icon"), r = a.getChildByName("iconBg").getChildByName("countT"), c = a.getChildByName("btn"), u = a.getChildByName("getBtn").getComponent(B), l = a.getChildByName("videoBtn").getComponent(B), h = a.getChildByName("getBtn").getComponent(f), d = a.getChildByName("proValueSpr"), g = a.getChildByName("proValueT"), v = a.getChildByName("descT").getComponent(C), m = 0; m < N.length; m++) {
                                var k = N[m];
                                k.id == o.id && (v.string = k.desc);
                            }
                            if (0 == o.getType) {
                                g.getComponent(C).string = o.curOkCount + "/" + o.needNum[o.curOkPhase - 1], d.width = 296 / o.needNum[o.curOkPhase - 1] * o.curOkCount;
                                var _ = O.instance.changeIcon(o.rewardType[o.curOkPhase - 1]);
                                R.setImage(s.getComponent(f), _, I), r.getComponent(C).string = "" + o.rewardNum[o.curOkPhase - 1];
                            } else {
                                g.getComponent(C).string = o.curOkCount + "/" + o.needNum[o.curOkPhase], d.width = 296 / o.needNum[o.curOkPhase] * o.curOkCount;
                                var T = O.instance.changeIcon(o.rewardType[o.curOkPhase]);
                                R.setImage(s.getComponent(f), T, I), r.getComponent(C).string = "" + o.rewardNum[o.curOkPhase];
                            }
                            d.width = d.width > 296 ? 296 : d.width, 0 == o.getType || 2 == o.getType ? R.setImage(d.getComponent(f), "resTex/UITask_pro", I) : R.setImage(d.getComponent(f), "resTex/UITask_pro1", I);
                            var U = this.changeBtnUrl(o.getType);
                            if (2 == o.getType ? (u.node.active = !0, l.node.active = !0, c.active = !1) : (c.active = !0, 
                            u.node.active = !1, l.node.active = !1, R.setImage(c.getComponent(f), U, I)), l.node.active && b == S.ANDROID_XiaoMi) {
                                var P = w(l.node).to(.5, {
                                    scale: new p(1.1, 1.1, 1)
                                }).to(1, {
                                    scale: new p(.9, .9, 1)
                                }).union().repeatForever().start();
                                this.tw1.push(P);
                            }
                            R.addClickEvent(this.node, c.getComponent(B), "achievementGetAwardClick", "UITask", "" + i), 
                            R.addClickEvent(this.node, u, "onAchievementAwardGetBtnClick", "UITask", "" + i), 
                            R.addClickEvent(this.node, l, "onAchievementAwardVideoBtnClick", "UITask", "" + i), 
                            b == S.WX && (l.node.active = !1, R.setImage(h, "resTex/UITask_btn2", I), u.node.setPosition(205, u.node.position.y, 0));
                        }
                        this.taskNode.active = !1, this.achievementPageHongDianShow();
                    }
                }, {
                    key: "everydayPageData",
                    value: function() {
                        for (var e = this, n = 1; n < this.taskNode.parent.children.length; n++) {
                            var t = this.taskNode.parent.children[n];
                            t.removeFromParent(), t.destroy(), n--;
                        }
                        if (this.tw2.length > 0) for (var i = 0; i < this.tw2.length; i++) this.tw2[i] && (this.tw2[i].stop(), 
                        this.tw2.splice(i, 1), i--);
                        this.taskNode.active = !0;
                        for (var o = function(n) {
                            var t = j.instance.everyDayConfig[n], i = y(e.taskNode);
                            e.scheduleOnce(function() {
                                e.taskNode.parent.addChild(i), i.setPosition(0, -120 * n, 0), e.taskNode.parent.height = Math.abs(i.position.y) + 120;
                            }, .05);
                            for (var o = i.getChildByName("iconBg").getChildByName("icon"), a = i.getChildByName("iconBg").getChildByName("countT"), s = i.getChildByName("btn"), r = i.getChildByName("getBtn").getComponent(B), c = i.getChildByName("getBtn").getComponent(f), u = i.getChildByName("videoBtn").getComponent(B), l = i.getChildByName("proValueSpr"), h = i.getChildByName("proValueT"), d = i.getChildByName("descT").getComponent(C), g = 0; g < x.length; g++) {
                                var v = x[g];
                                v.id == t.id && (d.string = v.desc);
                            }
                            h.getComponent(C).string = t.curOkCount + "/" + t.needNum, a.getComponent(C).string = "" + t.rewardNum;
                            var m = O.instance.changeIcon(t.rewardType);
                            R.setImage(o.getComponent(f), m, I), l.width = 296 / t.needNum * t.curOkCount, l.width = l.width > 296 ? 296 : l.width, 
                            0 == t.getType || 2 == t.getType ? R.setImage(l.getComponent(f), "resTex/UITask_pro", I) : R.setImage(l.getComponent(f), "resTex/UITask_pro1", I);
                            var k = e.changeBtnUrl(t.getType);
                            if (2 == t.getType ? (r.node.active = !0, u.node.active = !0, s.active = !1) : (s.active = !0, 
                            r.node.active = !1, u.node.active = !1, R.setImage(s.getComponent(f), k, I)), u.node.active && b == S.ANDROID_XiaoMi) {
                                var _ = w(u.node).to(.5, {
                                    scale: new p(1.1, 1.1, 1)
                                }).to(1, {
                                    scale: new p(.9, .9, 1)
                                }).union().repeatForever().start();
                                e.tw2.push(_);
                            }
                            b == S.WX && (u.node.active = !1, R.setImage(c, "resTex/UITask_btn2", I), r.node.setPosition(205, r.node.position.y, 0)), 
                            R.addClickEvent(e.node, s.getComponent(B), "everyDayGetAwardClick", "UITask", "" + n), 
                            R.addClickEvent(e.node, r, "onEveryDayGetBtnAwardClick", "UITask", "" + n), R.addClickEvent(e.node, u, "onEveryDayVideoBtnAwardClick", "UITask", "" + n);
                        }, a = 0; a < j.instance.everyDayConfig.length; a++) o(a);
                        this.taskNode.active = !1, this.everydayPageHongDianShow();
                    }
                }, {
                    key: "achievementGetAwardClick",
                    value: function(e, n) {
                        R.playSound(T.BTNCLICK);
                        var t = parseInt(n), i = j.instance.achievementConfig[t];
                        if (0 != i.getType) {
                            if (1 == i.getType) {
                                if (j.instance.guideSteps < 30) return void R.ShowTip("引导中");
                                if (2 == i.goToWhere || 5 == i.goToWhere) this.backBtnClick(); else {
                                    this.backBtnClick();
                                    var o = this.openUIView(i.goToWhere);
                                    i.goToWhere > 0 && j.instance.showUI(o);
                                }
                                1 == i.goToWhere && (j.instance.jumpBuildPage = j.instance.getGoToBuildPageIndex(P, i.id));
                            }
                        } else R.ShowTip("任务已完成");
                    }
                }, {
                    key: "onAchievementAwardGetBtnClick",
                    value: function(e, n) {
                        R.playSound(T.BTNCLICK);
                        var t = parseInt(n), i = e.target.parent, o = j.instance.achievementConfig[t], a = i.getChildByName("iconBg").getChildByName("icon"), s = i.getChildByName("btn"), r = i.getChildByName("getBtn"), c = i.getChildByName("videoBtn"), u = i.getChildByName("proValueSpr"), l = i.getChildByName("proValueT");
                        if (2 == o.getType) {
                            o.curOkCount >= o.needNum[o.curOkPhase] && (o.curOkPhase += 1, o.curOkPhase >= o.needNum.length ? (o.getType = _.completed, 
                            j.instance.awardTypeAni(o.rewardType[o.curOkPhase - 1], a, this.node, this), j.instance.awardTypeCount(o.rewardType[o.curOkPhase - 1], o.rewardNum[o.curOkPhase - 1])) : (o.curOkCount >= o.needNum[o.curOkPhase] ? o.getType = _.mayGet : o.getType = _.undone, 
                            j.instance.awardTypeAni(o.rewardType[o.curOkPhase - 1], a, this.node, this), j.instance.awardTypeCount(o.rewardType[o.curOkPhase - 1], o.rewardNum[o.curOkPhase - 1])), 
                            j.instance.taskVideo()), 0 == o.getType ? (l.getComponent(C).string = o.curOkCount + "/" + o.needNum[o.curOkPhase - 1], 
                            u.width = 296 / o.needNum[o.curOkPhase - 1] * o.curOkCount) : (l.getComponent(C).string = o.curOkCount + "/" + o.needNum[o.curOkPhase], 
                            u.width = 296 / o.needNum[o.curOkPhase] * o.curOkCount), 0 == o.getType || 2 == o.getType ? R.setImage(u.getComponent(f), "resTex/UITask_pro", I) : R.setImage(u.getComponent(f), "resTex/UITask_pro1", I);
                            var h = this.changeBtnUrl(o.getType);
                            2 == o.getType ? (r.active = !0, c.active = !0, s.active = !1) : (s.active = !0, 
                            r.active = !1, c.active = !1, R.setImage(s.getComponent(f), h, I)), j.instance.changeConfigInfo(j.instance.achievementConfig), 
                            this.achievementPageData(), localStorage.setItem("achievementConfig", JSON.stringify(j.instance.achievementConfig)), 
                            j.instance.wxReportEvent(D.STEPS_32), this.achievementYouMengEvent(o);
                        }
                    }
                }, {
                    key: "onAchievementAwardVideoBtnClick",
                    value: function(e, n) {
                        R.playSound(T.BTNCLICK), j.instance.youMengVideoClick = A.task, j.instance.youMenDaDian(M.taskDouble_click);
                        var t = function() {
                            j.instance.wxReportEvent(D.STEPS_32);
                            var t = parseInt(n), i = e.target.parent, o = j.instance.achievementConfig[t], a = i.getChildByName("iconBg").getChildByName("icon"), s = i.getChildByName("btn"), r = i.getChildByName("getBtn"), c = i.getChildByName("videoBtn"), u = i.getChildByName("proValueSpr"), l = i.getChildByName("proValueT");
                            if (2 == o.getType) {
                                o.curOkCount >= o.needNum[o.curOkPhase] && (o.curOkPhase += 1, o.curOkPhase >= o.needNum.length ? (o.getType = _.completed, 
                                j.instance.awardTypeAni(o.rewardType[o.curOkPhase - 1], a, this.node, this), j.instance.awardTypeCount(o.rewardType[o.curOkPhase - 1], 2 * o.rewardNum[o.curOkPhase - 1])) : (o.curOkCount >= o.needNum[o.curOkPhase] ? o.getType = _.mayGet : o.getType = _.undone, 
                                j.instance.awardTypeAni(o.rewardType[o.curOkPhase - 1], a, this.node, this), j.instance.awardTypeCount(o.rewardType[o.curOkPhase - 1], 2 * o.rewardNum[o.curOkPhase - 1]))), 
                                0 == o.getType ? (l.getComponent(C).string = o.curOkCount + "/" + o.needNum[o.curOkPhase - 1], 
                                u.width = 296 / o.needNum[o.curOkPhase - 1] * o.curOkCount) : (l.getComponent(C).string = o.curOkCount + "/" + o.needNum[o.curOkPhase], 
                                u.width = 296 / o.needNum[o.curOkPhase] * o.curOkCount), 0 == o.getType || 2 == o.getType ? R.setImage(u.getComponent(f), "resTex/UITask_pro", I) : R.setImage(u.getComponent(f), "resTex/UITask_pro1", I);
                                var h = this.changeBtnUrl(o.getType);
                                2 == o.getType ? (r.active = !0, c.active = !0, s.active = !1) : (s.active = !0, 
                                r.active = !1, c.active = !1, R.setImage(s.getComponent(f), h, I)), j.instance.changeConfigInfo(j.instance.achievementConfig), 
                                this.achievementPageData(), localStorage.setItem("achievementConfig", JSON.stringify(j.instance.achievementConfig)), 
                                this.achievementYouMengEvent(o), j.instance.youMenDaDian(M.taskDouble_complete);
                            }
                        }.bind(this);
                        j.instance.watchVideo("", t);
                    }
                }, {
                    key: "everyDayGetAwardClick",
                    value: function(e, n) {
                        R.playSound(T.BTNCLICK);
                        var t = parseInt(n), i = j.instance.everyDayConfig[t];
                        if (0 != i.getType) {
                            if (1 == i.getType) {
                                if (j.instance.guideSteps < 30) return void R.ShowTip("引导中");
                                if (0 == i.goToWhere || 1 == i.goToWhere || 2 == i.goToWhere) this.backBtnClick(); else {
                                    this.backBtnClick();
                                    var o = this.openUIView(i.goToWhere);
                                    i.goToWhere > 0 && j.instance.showUI(o);
                                }
                            }
                        } else R.ShowTip("任务已完成");
                    }
                }, {
                    key: "onEveryDayGetBtnAwardClick",
                    value: function(e, n) {
                        R.playSound(T.BTNCLICK);
                        var t = parseInt(n), i = e.target.parent, o = j.instance.everyDayConfig[t], a = i.getChildByName("iconBg").getChildByName("icon"), s = i.getChildByName("btn"), r = i.getChildByName("getBtn"), c = i.getChildByName("videoBtn"), u = i.getChildByName("proValueSpr"), l = i.getChildByName("proValueT");
                        if (2 == o.getType) {
                            o.curOkCount >= o.needNum ? (o.getType = _.completed, j.instance.awardTypeAni(o.rewardType, a, this.node, this), 
                            j.instance.awardTypeCount(o.rewardType, o.rewardNum), j.instance.taskVideo()) : (o.getType = _.undone, 
                            o.curOkCount = 0), l.getComponent(C).string = o.curOkCount + "/" + o.needNum, u.width = 296 / o.needNum * o.curOkCount, 
                            0 == o.getType || 2 == o.getType ? R.setImage(u.getComponent(f), "resTex/UITask_pro", I) : R.setImage(u.getComponent(f), "resTex/UITask_pro1", I);
                            var h = this.changeBtnUrl(o.getType);
                            2 == o.getType ? (r.active = !0, c.active = !0, s.active = !1) : (s.active = !0, 
                            r.active = !1, c.active = !1, R.setImage(s.getComponent(f), h, I)), j.instance.changeConfigInfo(j.instance.everyDayConfig), 
                            this.everydayPageData(), localStorage.setItem("everyDayConfig", JSON.stringify(j.instance.everyDayConfig)), 
                            m.getScene().emit("UpdateDayTask"), this.everyDayYouMengEvent(o);
                        }
                    }
                }, {
                    key: "onEveryDayVideoBtnAwardClick",
                    value: function(e, n) {
                        R.playSound(T.BTNCLICK), j.instance.youMengVideoClick = A.task, j.instance.youMenDaDian(M.taskDouble_click);
                        var t = function() {
                            var t = parseInt(n), i = e.target.parent, o = j.instance.everyDayConfig[t], a = i.getChildByName("iconBg").getChildByName("icon"), s = i.getChildByName("btn"), r = i.getChildByName("getBtn"), c = i.getChildByName("videoBtn"), u = i.getChildByName("proValueSpr"), l = i.getChildByName("proValueT");
                            if (2 == o.getType) {
                                o.curOkCount >= o.needNum ? (o.getType = _.completed, j.instance.awardTypeAni(o.rewardType, a, this.node, this), 
                                j.instance.awardTypeCount(o.rewardType, 2 * o.rewardNum)) : (o.getType = _.undone, 
                                o.curOkCount = 0), l.getComponent(C).string = o.curOkCount + "/" + o.needNum, u.width = 296 / o.needNum * o.curOkCount, 
                                0 == o.getType || 2 == o.getType ? R.setImage(u.getComponent(f), "resTex/UITask_pro", I) : R.setImage(u.getComponent(f), "resTex/UITask_pro1", I);
                                var h = this.changeBtnUrl(o.getType);
                                2 == o.getType ? (r.active = !0, c.active = !0, s.active = !1) : (s.active = !0, 
                                r.active = !1, c.active = !1, R.setImage(s.getComponent(f), h, I)), j.instance.changeConfigInfo(j.instance.everyDayConfig), 
                                this.everydayPageData(), localStorage.setItem("everyDayConfig", JSON.stringify(j.instance.everyDayConfig)), 
                                m.getScene().emit("UpdateDayTask"), this.everyDayYouMengEvent(o), j.instance.youMenDaDian(M.taskDouble_complete);
                            }
                        }.bind(this);
                        j.instance.watchVideo("", t);
                    }
                }, {
                    key: "changeBtnUrl",
                    value: function(e) {
                        var n = "";
                        switch (e) {
                          case 1:
                            n = "resTex/UITask_btn3";
                            break;

                          case 2:
                            n = "resTex/UITask_btn2";
                            break;

                          case 0:
                            n = "resTex/UITask_btn1";
                        }
                        return n;
                    }
                }, {
                    key: "openUIView",
                    value: function(e) {
                        switch (e) {
                          case 0:
                            return this.backBtnClick(), "";

                          case 1:
                            return "prefabs/ui/UIBuild";

                          case 2:
                            return "prefabs/ui/UIWorkAnt";

                          case 3:
                            return "prefabs/ui/UISoldierAnt";

                          case 4:
                            return "prefabs/ui/UIPVP";

                          case 5:
                            return "prefabs/ui/UIShop";
                        }
                    }
                }, {
                    key: "everyDayYouMengEvent",
                    value: function(e) {
                        switch (e.id) {
                          case 1:
                            j.instance.youMenDaDian(M.daily_1_complete);
                            break;

                          case 2:
                            j.instance.youMenDaDian(M.daily_2_complete);
                            break;

                          case 3:
                            j.instance.youMenDaDian(M.daily_3_complete);
                            break;

                          case 4:
                            j.instance.youMenDaDian(M.daily_4_complete);
                            break;

                          case 5:
                            j.instance.youMenDaDian(M.daily_5_complete);
                            break;

                          case 6:
                            j.instance.youMenDaDian(M.daily_6_complete);
                            break;

                          case 7:
                            j.instance.youMenDaDian(M.daily_7_complete);
                            break;

                          case 8:
                            j.instance.youMenDaDian(M.daily_8_complete);
                            break;

                          case 9:
                            j.instance.youMenDaDian(M.daily_9_complete);
                            break;

                          case 10:
                            j.instance.youMenDaDian(M.daily_10_complete);
                            break;

                          case 11:
                            j.instance.youMenDaDian(M.daily_11_complete);
                            break;

                          case 12:
                            j.instance.youMenDaDian(M.daily_12_complete);
                        }
                    }
                }, {
                    key: "achievementYouMengEvent",
                    value: function(e) {
                        switch (e.id) {
                          case 1:
                            j.instance.youMenDaDian(M.achieve_1_complete, "建造【蘑菇加工间】", e.curOkPhase, 1);
                            break;

                          case 2:
                            j.instance.youMenDaDian(M.achieve_2_complete, "带回树叶进行加工", e.curOkPhase, 1);
                            break;

                          case 3:
                            j.instance.youMenDaDian(M.achieve_3_complete, "喂食蚁后孵化工蚁", e.curOkPhase, 1);
                            break;

                          case 4:
                            j.instance.youMenDaDian(M.achieve_4_complete, "建造【树叶储藏间】", e.curOkPhase, 1);
                            break;

                          case 5:
                            j.instance.youMenDaDian(M.achieve_5_complete, "升级【蘑菇加工间】", e.curOkPhase, 1);
                            break;

                          case 6:
                            j.instance.youMenDaDian(M.achieve_6_complete, "建造【椰子储藏间】", e.curOkPhase, 1);
                            break;

                          case 7:
                            j.instance.youMenDaDian(M.achieve_7_complete, "升级【蚁后房间】", e.curOkPhase, 1);
                            break;

                          case 8:
                            j.instance.youMenDaDian(M.achieve_8_complete, "孵化兵蚁", e.curOkPhase, 1);
                            break;

                          case 9:
                            j.instance.youMenDaDian(M.achieve_9_complete, "击败红蚁", e.curOkPhase, 1);
                            break;

                          case 10:
                            j.instance.youMenDaDian(M.achieve_10_complete, "击败巨大昆虫", e.curOkPhase, 1);
                            break;

                          case 11:
                            j.instance.youMenDaDian(M.achieve_11_complete, "建造【昆虫零件储藏间】", e.curOkPhase, 1);
                            break;

                          case 12:
                            j.instance.youMenDaDian(M.achieve_12_complete, "收集昆虫零件", e.curOkPhase, 1);
                            break;

                          case 13:
                            j.instance.youMenDaDian(M.achieve_13_complete, "升级【树叶储藏间】", e.curOkPhase, 1);
                            break;

                          case 14:
                            j.instance.youMenDaDian(M.achieve_14_complete, "建造【进化实验室】", e.curOkPhase, 1);
                            break;

                          case 15:
                            j.instance.youMenDaDian(M.achieve_15_complete, "赢得世界挑战", e.curOkPhase, 1);
                            break;

                          case 16:
                            j.instance.youMenDaDian(M.achieve_16_complete, "收集小红花", e.curOkPhase, 1);
                            break;

                          case 17:
                            j.instance.youMenDaDian(M.achieve_17_complete, "建造【昆虫小屋】", e.curOkPhase, 1);
                            break;

                          case 18:
                            j.instance.youMenDaDian(M.achieve_18_complete, "攻陷红蚁巢穴", e.curOkPhase, 1);
                            break;

                          case 19:
                            j.instance.youMenDaDian(M.achieve_19_complete, "升级【椰子储藏间】", e.curOkPhase, 1);
                            break;

                          case 20:
                            j.instance.youMenDaDian(M.achieve_20_complete, "俘获巨大昆虫", e.curOkPhase, 1);
                            break;

                          case 21:
                            j.instance.youMenDaDian(M.achieve_21_complete, "升级【昆虫零件储藏间】", e.curOkPhase, 1);
                            break;

                          case 22:
                            j.instance.youMenDaDian(M.achieve_22_complete, "升级【进化实验室】", e.curOkPhase, 1);
                            break;

                          case 23:
                            j.instance.youMenDaDian(M.achieve_23_complete, "升级【昆虫小屋】", e.curOkPhase, 1);
                        }
                    }
                } ]), n;
            }()).prototype, "backBtn", [ z ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Y = t(W.prototype, "achievementBtn", [ V ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), K = t(W.prototype, "everydayBtn", [ H ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), X = t(W.prototype, "taskNode", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), J = t(W.prototype, "leftNode", [ G ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), F = W)) || F)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UITipNew.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.LabelComponent, g = e.SpriteComponent, 
            f = e.tween, v = e.Component;
        }, function(e) {
            m = e.ENEMY_REBORN_COUNT, y = e.TIP_NEW_WORD;
        }, function(e) {
            B = e.Tools;
        }, function(e) {
            C = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "73d09eU2OVOd6b3r4D5EkEQ", "UITipNew", void 0), _ = h.ccclass, T = h.property, 
            e("UITipNew", (I = _("UITipNew"), w = T(d), I((S = t((b = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "offsetNode", S, c(t)), 
                    t;
                }
                return i(n, v), u(n, [ {
                    key: "init",
                    value: function(e) {
                        var n = y[e];
                        if (n) if (12 == e) {
                            var t = this.offsetNode.getChildByName("BG2");
                            t.getChildByName("warn_floor_1").active = !0, t.active = !0;
                            var i = t.getChildByName("Label").getComponent(p);
                            if ((C.instance.enemyRoomConfig.deadTimes || 0) < m) {
                                var o = Date.now(), a = C.instance.enemyRoomConfig.rebornTime || 0, s = Math.floor((a - o) / 1e3), r = B.timestampToTime1(s);
                                i.string = "红蚁将在" + r + "后重新到来";
                            } else i.string = "红蚁将在明日重新到来";
                            this.tweenBG(t);
                        } else if (13 == e) {
                            var c = this.offsetNode.getChildByName("BG2");
                            c.getChildByName("warn_floor_1").active = !0, c.active = !0, c.getChildByName("Label").getComponent(p).string = y[14].desc, 
                            this.tweenBG(c);
                        } else if (e < 5 || e >= 10) {
                            var u = this.offsetNode.getChildByName("BG2");
                            u.getChildByName("warn_floor_1").active = !0, u.active = !0, u.getChildByName("Label").getComponent(p).string = n.desc, 
                            this.tweenBG(u);
                        } else if (e >= 5 && e < 10) {
                            var l = this.offsetNode.getChildByName("BG1");
                            6 == e ? l.getChildByName("warn_floor_6").active = !0 : 9 == e ? l.getChildByName("warn_floor_9").active = !0 : l.getChildByName("warn_floor").active = !0, 
                            l.active = !0, l.getChildByName("Label").getComponent(p).string = n.desc, this.tweenBG(l);
                        } else {
                            var h = this.offsetNode.getChildByName("BG2");
                            h.getChildByName("warn_floor_2").active = !0, h.active = !0, h.getChildByName("Label").getComponent(p).string = n.desc, 
                            this.tweenBG(h);
                        } else console.error("未配置 TIP_NEW_WORD id:", e), this.destroyMine();
                    }
                }, {
                    key: "tweenBG",
                    value: function(e) {
                        var n = e.getComponent(g), t = f(n.color).delay(.5), i = f(n.color).to(.5, {
                            a: 80
                        }), o = f(n.color).to(.5, {
                            a: 255
                        }), a = f(n.color).to(.5, {
                            a: 80
                        }), s = f(n.color).to(.5, {
                            a: 255
                        }), r = f(n.color).delay(1);
                        f(n.color).sequence(t, i, o, a, s, r).call(this.destroyMine.bind(this)).start();
                    }
                }, {
                    key: "destroyMine",
                    value: function() {
                        this && this.node && this.node.parent && (this.node.removeFromParent(), this.node.destroy(), 
                        B.cleanUnuseRes());
                    }
                } ]), n;
            }()).prototype, "offsetNode", [ w ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), k = b)) || k)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UITop.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.Node, g = e.LabelComponent, 
            f = e.director, v = e.tween, m = e.Vec3, y = e.Component;
        }, function(e) {
            B = e.CUR_PLATFORM, C = e.PLATFORM_TYPE, I = e.MUSHROOM_ROOM_INFO, w = e.LEAF_ROOM_INFO, 
            k = e.NUT_ROOM_INFO, b = e.PART_ROOM_INFO, S = e.SOUND_TYPE;
        }, function(e) {
            _ = e.Tools;
        }, function(e) {
            T = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "1dad5a/C9pLtIhy28TKZell", "UITop", void 0), G = h.ccclass, F = h.property, 
            e("UITop", (U = G("UITop"), N = F(d), P = F(p), D = F(g), A = F(p), M = F(p), x = F(p), 
            U((j = t((O = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "barArr", j, c(t)), 
                    r(t, "warningArr", L, c(t)), r(t, "labelArr", z, c(t)), r(t, "topNode", V, c(t)), 
                    t.indexArr = [ 0, 5, 2, 1 ], t.oldNums = [], t.isUpdateRightNow = !0, r(t, "adddestopNode", H, c(t)), 
                    r(t, "adddestopHandNode", E, c(t)), t.adddestopTipTimer = 0, t;
                }
                return i(n, y), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        var e = this;
                        cc.winSize.height / cc.winSize.width > 2 ? this.topNode.setPosition(-cc.winSize.width / 2, cc.winSize.height / 2 - 50, 0) : this.topNode.setPosition(-cc.winSize.width / 2, cc.winSize.height / 2, 0), 
                        f.getScene().on("UpdateShowTopUI", function() {
                            e.isUpdateRightNow = !0;
                        }, this), f.getScene().on("ResBtnJump", this.onJumpUIView, this), f.getScene().on("REFRESH_DESTOP_BTN", this.onRefreshDestopBtn, this), 
                        this.onRefreshDestopBtn();
                    }
                }, {
                    key: "onRefreshDestopBtn",
                    value: function() {
                        T.instance.guideSteps < 30 || (T.instance.isTTCanShowDestop ? this.schedule(this.updateShowAdddestopTip, 120) : this.unschedule(this.updateShowAdddestopTip));
                    }
                }, {
                    key: "updateShowAdddestopTip",
                    value: function() {
                        if (B == C.TT) {
                            this.adddestopNode.active = !0;
                            var e = function() {
                                this.adddestopNode.active = !1;
                            }.bind(this);
                            this.scheduleOnce(e, 10);
                        }
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        B == C.TT && (T.instance.guideSteps >= 41 && T.instance.guideSteps < 44 && this.adddestopNode.active && (this.adddestopNode.active = !1), 
                        this.adddestopTipTimer += 2 * e, this.adddestopHandNode.setPosition(30 * -Math.sin(this.adddestopTipTimer), 30 * Math.sin(this.adddestopTipTimer), 0));
                    }
                }, {
                    key: "initOld",
                    value: function() {
                        for (var e = 0; e < 6; e++) if (e < 4) {
                            var n = T.instance.nestRoomConfig.roomInfo[this.indexArr[e]].count;
                            this.oldNums[e] = n;
                        } else 4 == e ? this.oldNums[e] = T.instance.jewelNum : 5 == e && (this.oldNums[e] = T.instance.honrNum);
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.initOld(), this.schedule(this.updateWarningShow, .2), this.schedule(this.warningSchedule, 3), 
                        this.updateFoodShow(), this.schedule(this.updateFoodShow, .1);
                    }
                }, {
                    key: "warningSchedule",
                    value: function() {
                        this.warningArr[0].active && this.warningAni(this.warningArr[0]), this.warningArr[1].active && this.warningAni(this.warningArr[1]), 
                        this.warningArr[2].active && this.warningAni(this.warningArr[2]), this.warningArr[3].active && this.warningAni(this.warningArr[3]);
                    }
                }, {
                    key: "warningAni",
                    value: function(e) {
                        v(e).to(.1, {
                            eulerAngles: new m(0, 0, 18)
                        }).call(function() {
                            v(e).to(.1, {
                                eulerAngles: new m(0, 0, -12)
                            }).call(function() {
                                v(e).to(.1, {
                                    eulerAngles: new m(0, 0, 7)
                                }).call(function() {
                                    v(e).to(.1, {
                                        eulerAngles: new m(0, 0, -10)
                                    }).call(function() {
                                        v(e).to(.1, {
                                            eulerAngles: new m(0, 0, 0)
                                        }).call(function() {}).start();
                                    }).start();
                                }).start();
                            }).start();
                        }).start();
                    }
                }, {
                    key: "updateWarningShow",
                    value: function() {
                        var e = I[_.clampf(T.instance.nestRoomConfig.roomInfo[0].level - 1, 0, 999)], n = w[_.clampf(T.instance.nestRoomConfig.roomInfo[1].level - 1, 0, 999)], t = k[_.clampf(T.instance.nestRoomConfig.roomInfo[2].level - 1, 0, 999)], i = b[_.clampf(T.instance.nestRoomConfig.roomInfo[5].level - 1, 0, 999)];
                        0 == T.instance.nestRoomConfig.roomInfo[5].level ? T.instance.nestRoomConfig.roomInfo[5].count > 0 ? this.warningArr[1].active = !0 : this.warningArr[1].active = !1 : T.instance.nestRoomConfig.roomInfo[5].count >= i.unlockNum ? this.warningArr[1].active = !0 : this.warningArr[1].active = !1, 
                        0 == T.instance.nestRoomConfig.roomInfo[2].level ? T.instance.nestRoomConfig.roomInfo[2].count > 0 ? this.warningArr[2].active = !0 : this.warningArr[2].active = !1 : T.instance.nestRoomConfig.roomInfo[2].count >= t.unlockNum ? this.warningArr[2].active = !0 : this.warningArr[2].active = !1, 
                        0 == T.instance.nestRoomConfig.roomInfo[1].level ? T.instance.nestRoomConfig.roomInfo[1].count > 0 ? this.warningArr[3].active = !0 : this.warningArr[3].active = !1 : T.instance.nestRoomConfig.roomInfo[1].count >= n.unlockNum ? this.warningArr[3].active = !0 : this.warningArr[3].active = !1, 
                        0 == T.instance.nestRoomConfig.roomInfo[0].level ? T.instance.nestRoomConfig.roomInfo[0].count > 0 ? this.warningArr[0].active = !0 : this.warningArr[0].active = !1 : T.instance.nestRoomConfig.roomInfo[0].count >= e.unlockNum ? this.warningArr[0].active = !0 : this.warningArr[0].active = !1;
                    }
                }, {
                    key: "resUpdateAni",
                    value: function(e, n, t, i) {}
                }, {
                    key: "updateFoodShow",
                    value: function() {
                        var e = [];
                        e.push(I[_.clampf(T.instance.nestRoomConfig.roomInfo[this.indexArr[0]].level - 1, 0, 999)]), 
                        e.push(b[_.clampf(T.instance.nestRoomConfig.roomInfo[this.indexArr[1]].level - 1, 0, 999)]), 
                        e.push(k[_.clampf(T.instance.nestRoomConfig.roomInfo[this.indexArr[2]].level - 1, 0, 999)]), 
                        e.push(w[_.clampf(T.instance.nestRoomConfig.roomInfo[this.indexArr[3]].level - 1, 0, 999)]);
                        for (var n = 0; n < 6; n++) if (n < 4) {
                            var t = e[n].unlockNum, i = T.instance.nestRoomConfig.roomInfo[this.indexArr[n]].count;
                            if (i != this.oldNums[n] || this.isUpdateRightNow) {
                                var o = Math.abs(i - this.oldNums[n]) > 10 ? 2 : 1;
                                this.oldNums[n] = i > this.oldNums[n] ? this.oldNums[n] + o : this.oldNums[n] - o, 
                                this.isUpdateRightNow && (this.oldNums[n] = i), 0 == T.instance.nestRoomConfig.roomInfo[this.indexArr[n]].level ? (this.labelArr[n].string = Math.floor(this.oldNums[n]) + "/0", 
                                this.barArr[n].fillRange = this.oldNums[n] > 0 ? 1 : 0) : (this.labelArr[n].string = Math.floor(this.oldNums[n]) + "/" + t, 
                                this.barArr[n].fillRange = 0 == t ? 0 : _.clampf(this.oldNums[n] / t, 0, 1));
                            }
                        } else if (4 == n) {
                            var a = T.instance.jewelNum;
                            if (a != this.oldNums[n] || this.isUpdateRightNow) {
                                var s = Math.abs(a - this.oldNums[n]) > 10 ? 2 : 1;
                                this.oldNums[n] = a > this.oldNums[n] ? this.oldNums[n] + s : this.oldNums[n] - s, 
                                this.isUpdateRightNow && (this.oldNums[n] = a), this.labelArr[n].string = Math.floor(this.oldNums[n]).toString();
                            }
                        } else if (5 == n) {
                            var r = T.instance.honrNum;
                            if (r != this.oldNums[n] || this.isUpdateRightNow) {
                                var c = Math.abs(r - this.oldNums[n]) > 10 ? 2 : 1;
                                this.oldNums[n] = r > this.oldNums[n] ? this.oldNums[n] + c : this.oldNums[n] - c, 
                                this.isUpdateRightNow && (this.oldNums[n] = r), this.labelArr[n].string = Math.floor(this.oldNums[n]).toString();
                            }
                        }
                        this.isUpdateRightNow = !1;
                    }
                }, {
                    key: "onJewelBtnClick",
                    value: function() {
                        _.playSound(S.BTNCLICK), T.instance.guideSteps < 30 ? _.ShowTip("引导中") : (f.getScene().emit("DestroyNativeItem"), 
                        T.instance.UIResLackingLogoIndex = 5, T.instance.showUI("prefabs/ui/UIResLacking"), 
                        T.instance.UILoad.active = !0);
                    }
                }, {
                    key: "onHonrBtnClick",
                    value: function() {
                        _.playSound(S.BTNCLICK), T.instance.guideSteps < 30 ? _.ShowTip("引导中") : (f.getScene().emit("DestroyNativeItem"), 
                        T.instance.UIResLackingLogoIndex = 6, T.instance.showUI("prefabs/ui/UIResLacking"), 
                        T.instance.UILoad.active = !0);
                    }
                }, {
                    key: "onMushroomBtnClick",
                    value: function() {
                        if (_.playSound(S.BTNCLICK), T.instance.guideSteps < 30) _.ShowTip("引导中"); else {
                            var e = I[_.clampf(T.instance.nestRoomConfig.roomInfo[0].level - 1, 0, 999)];
                            T.instance.nestRoomConfig.roomInfo[0].level <= 0 ? T.instance.nestRoomConfig.roomInfo[0].count <= 0 ? (f.getScene().emit("DestroyNativeItem"), 
                            T.instance.UIResLackingLogoIndex = 1, T.instance.showUI("prefabs/ui/UIResLacking"), 
                            T.instance.UILoad.active = !0) : this.jumpUIView(1) : T.instance.nestRoomConfig.roomInfo[0].count < e.unlockNum ? (f.getScene().emit("DestroyNativeItem"), 
                            T.instance.UIResLackingLogoIndex = 1, T.instance.showUI("prefabs/ui/UIResLacking"), 
                            T.instance.UILoad.active = !0) : this.jumpUIView(1);
                        }
                    }
                }, {
                    key: "onLeafBtnClick",
                    value: function() {
                        if (_.playSound(S.BTNCLICK), T.instance.guideSteps < 30) _.ShowTip("引导中"); else {
                            var e = w[_.clampf(T.instance.nestRoomConfig.roomInfo[1].level - 1, 0, 999)];
                            T.instance.nestRoomConfig.roomInfo[1].level <= 0 ? T.instance.nestRoomConfig.roomInfo[1].count <= 0 ? (f.getScene().emit("DestroyNativeItem"), 
                            T.instance.UIResLackingLogoIndex = 2, T.instance.showUI("prefabs/ui/UIResLacking"), 
                            T.instance.UILoad.active = !0) : this.jumpUIView(2) : T.instance.nestRoomConfig.roomInfo[1].count < e.unlockNum ? (f.getScene().emit("DestroyNativeItem"), 
                            T.instance.UIResLackingLogoIndex = 2, T.instance.showUI("prefabs/ui/UIResLacking"), 
                            T.instance.UILoad.active = !0) : this.jumpUIView(2);
                        }
                    }
                }, {
                    key: "onNutBtnClick",
                    value: function() {
                        if (_.playSound(S.BTNCLICK), T.instance.guideSteps < 30) _.ShowTip("引导中"); else {
                            var e = k[_.clampf(T.instance.nestRoomConfig.roomInfo[2].level - 1, 0, 999)];
                            T.instance.nestRoomConfig.roomInfo[2].level <= 0 ? T.instance.nestRoomConfig.roomInfo[2].count <= 0 ? (f.getScene().emit("DestroyNativeItem"), 
                            T.instance.UIResLackingLogoIndex = 3, T.instance.showUI("prefabs/ui/UIResLacking"), 
                            T.instance.UILoad.active = !0) : this.jumpUIView(3) : T.instance.nestRoomConfig.roomInfo[2].count < e.unlockNum ? (f.getScene().emit("DestroyNativeItem"), 
                            T.instance.UIResLackingLogoIndex = 3, T.instance.showUI("prefabs/ui/UIResLacking"), 
                            T.instance.UILoad.active = !0) : this.jumpUIView(3);
                        }
                    }
                }, {
                    key: "onPartBtnClick",
                    value: function() {
                        if (_.playSound(S.BTNCLICK), T.instance.guideSteps < 30) _.ShowTip("引导中"); else {
                            var e = b[_.clampf(T.instance.nestRoomConfig.roomInfo[5].level - 1, 0, 999)];
                            T.instance.nestRoomConfig.roomInfo[5].level <= 0 ? T.instance.nestRoomConfig.roomInfo[5].count <= 0 ? (f.getScene().emit("DestroyNativeItem"), 
                            T.instance.UIResLackingLogoIndex = 4, T.instance.showUI("prefabs/ui/UIResLacking"), 
                            T.instance.UILoad.active = !0) : this.jumpUIView(6) : T.instance.nestRoomConfig.roomInfo[5].count < e.unlockNum ? (f.getScene().emit("DestroyNativeItem"), 
                            T.instance.UIResLackingLogoIndex = 4, T.instance.showUI("prefabs/ui/UIResLacking"), 
                            T.instance.UILoad.active = !0) : this.jumpUIView(6);
                        }
                    }
                }, {
                    key: "jumpUIView",
                    value: function(e) {
                        switch (T.instance.jumpBuildPage = e - 1, T.instance.UIHintUnlockBtnType = 1, T.instance.UIHintUnlockType = 0, 
                        T.instance.UIHintUnlockIconUrl = "resTex/UIBuild_logo" + e, T.instance.UIHintUnlockBtnUrl = "resTex/UIHintUnlock_btn1", 
                        T.instance.UIHintUnlockDescT = "资源已满，建造或升级储藏间增加储量上限", e) {
                          case 1:
                            T.instance.UIHintUnlockIconT = "蘑菇加工间";
                            break;

                          case 2:
                            T.instance.UIHintUnlockIconT = "树叶储藏间";
                            break;

                          case 3:
                            T.instance.UIHintUnlockIconT = "椰子储藏间";
                            break;

                          case 6:
                            T.instance.UIHintUnlockIconT = "昆虫零件储藏间";
                        }
                        T.instance.UILoad.active = !0, T.instance.showUI("prefabs/ui/UIHintUnlock");
                    }
                }, {
                    key: "onJumpUIView",
                    value: function() {
                        T.instance.showUI("prefabs/ui/UIBuild");
                    }
                } ]), n;
            }()).prototype, "barArr", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), L = t(O.prototype, "warningArr", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), z = t(O.prototype, "labelArr", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), V = t(O.prototype, "topNode", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), H = t(O.prototype, "adddestopNode", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), E = t(O.prototype, "adddestopHandNode", [ x ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), R = O)) || R)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIUnlock.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./CameraFollow.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.LabelComponent, g = e.SpriteComponent, 
            f = e.SpriteFrame, v = e.Vec3, m = e.director, y = e.Component;
        }, function(e) {
            B = e.SOUND_TYPE, C = e.CUR_PLATFORM, I = e.PLATFORM_TYPE, w = e.GUIDE_STEPS, k = e.MAIDIAN_STEPS, 
            b = e.YOUMENG_EVENT;
        }, function(e) {
            S = e.Tools;
        }, function(e) {
            _ = e.CameraFollow;
        }, function(e) {
            T = e.GameManager;
        }, function(e) {
            U = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "a3fb80wOTVLFJ6fLv6wT98r", "UIUnlock", void 0), V = h.ccclass, H = h.property, 
            e("UIUnlock", (N = V("UIUnlock"), P = H(d), D = H(d), A = H(p), M = H(g), N((O = t((R = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "rotateBg", O, c(t)), 
                    r(t, "videoBtn", j, c(t)), r(t, "descT", L, c(t)), r(t, "logo", z, c(t)), t;
                }
                return i(n, y), u(n, [ {
                    key: "start",
                    value: function() {
                        U.instance.UILoad.active = !1, S.setImage(this.logo, "resTex/UILogo_" + (U.instance.newUnlockViewInfoIndex + 1), f), 
                        this.descT.string = U.instance.newUnlockViewInfo[U.instance.newUnlockViewInfoIndex].desc, 
                        5 != U.instance.guideSteps && 19 != U.instance.guideSteps && 44 != U.instance.guideSteps || (S.ShowUI("UIGuide", null, null, this.videoBtn.worldPosition, !0, !1, !1), 
                        this.videoBtn.getChildByName("labelT").setPosition(new v(-55, -10, 0)), this.videoBtn.getChildByName("countT").setPosition(new v(-30, 0, 0)), 
                        this.videoBtn.getChildByName("jewelSpr").setPosition(new v(56, 0, 0))), S.playSound(B.UP_LV), 
                        T.instance.btnJumpOpen(this.videoBtn, -110, -110), C == I.OPPO ? U.instance.isShowOppoBanner : C == I.VIVO ? S.showBanner(!0) : C == I.QQ ? S.showBanner(!0) : C == I.WX ? this.scheduleOnce(function() {}, .5) : C == I.HW ? S.showBanner(!0) : C == I.iOS ? S.showBanner(!0) : C == I.ANDROID_TAP ? S.showBanner(!0) : C == I.ANDROID_HW && S.showBanner(!0);
                    }
                }, {
                    key: "videoBtnClick",
                    value: function(e) {
                        var n = this;
                        S.playSound(B.BTNCLICK), e.target.position.y < -110 || (5 == U.instance.guideSteps && (m.getScene().emit("CLOSE_GUIDE_UI"), 
                        U.instance.guideSteps = 6, m.getScene().emit(w.STEPS_6), localStorage.setItem("guideSteps", U.instance.guideSteps.toString()), 
                        U.instance.wxReportEvent(k.STEPS_7), U.instance.youMenDaDian(b.guide_9)), 19 == U.instance.guideSteps && (m.getScene().emit("CLOSE_GUIDE_UI"), 
                        U.instance.guideSteps = 20, m.getScene().emit(w.STEPS_20), localStorage.setItem("guideSteps", U.instance.guideSteps.toString()), 
                        U.instance.youMenDaDian(b.guide_21)), 44 == U.instance.guideSteps && (m.getScene().emit("CLOSE_GUIDE_UI"), 
                        U.instance.guideSteps = 45, localStorage.setItem("guideSteps", U.instance.guideSteps.toString()), 
                        U.instance.youMenDaDian(b.guide_33), console.log("解锁兵蚁")), "PVE" == U.instance.curMode ? (U.instance.awardTypeAni(5, this.videoBtn, this.node.parent, this), 
                        U.instance.updateJewelNum(U.instance.newUnlockViewInfo[U.instance.newUnlockViewInfoIndex].jewelNum), 
                        C == I.WX && U.instance.wxMaiLiangWuChuData && U.instance.wuchuOpen, console.log("解锁的建造界面：", U.instance.newUnlockViewInfoIndex), 
                        this.node.active = !1, T.instance.cameraNode.getComponent(_).setTarget(T.instance.curPlayer.node), 
                        T.instance.refreshRoomUnlockInfo(0, U.instance.nestRoomConfig), S.showBanner(!1), 
                        T.instance.desNativeBanner(), this.scheduleOnce(function() {
                            n.node.removeFromParent(), n.node.destroy(), S.cleanUnuseRes(), 0 == U.instance.UIAntEvolutionIsShow && 45 == U.instance.guideSteps && (U.instance.UILoad.active = !0, 
                            U.instance.showUI("prefabs/ui/UIAntEvolution"));
                        }, 1.5)) : (console.log("关闭"), U.instance.updateJewelNum(U.instance.newUnlockViewInfo[U.instance.newUnlockViewInfoIndex].jewelNum), 
                        S.showBanner(!1), T.instance.desNativeBanner(), this.node.removeFromParent(), this.node.destroy(), 
                        S.cleanUnuseRes(), U.instance.videoCounterTimeGo()));
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        this.rotateBg.eulerAngles = this.rotateBg.eulerAngles.add(new v(0, 0, 1));
                    }
                } ]), n;
            }()).prototype, "rotateBg", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), j = t(R.prototype, "videoBtn", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), L = t(R.prototype, "descT", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), z = t(R.prototype, "logo", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), x = R)) || x)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIUnlockSkin.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.LabelComponent, g = e.SpriteComponent, 
            f = e.Vec2, v = e.CameraComponent, m = e.director, y = e.Vec3, B = e.Component;
        }, function(e) {
            C = e.CUR_PLATFORM, I = e.PLATFORM_TYPE, w = e.SOUND_TYPE;
        }, function(e) {
            k = e.Tools;
        }, function(e) {
            b = e.GameManager;
        }, function(e) {
            S = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "911d9ukM/hKoZ6mN8TP+6DI", "UIUnlockSkin", void 0), j = h.ccclass, 
            L = h.property, e("UIUnlockSkin", (_ = j("UIUnlockSkin"), T = L(d), U = L(d), N = L(p), 
            P = L(g), _((M = t((A = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "rotateBg", M, c(t)), 
                    r(t, "videoBtn", x, c(t)), r(t, "descT", R, c(t)), r(t, "icon", O, c(t)), t;
                }
                return i(n, B), u(n, [ {
                    key: "start",
                    value: function() {
                        S.instance.UILoad.active = !1, this.init();
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.descT.string = S.instance.unlockSkinName, this.showAntModel(S.instance.unlockSkinId), 
                        b.instance.btnJumpOpen(this.videoBtn, -130, -130), C == I.OPPO ? S.instance.isShowOppoBanner : C == I.VIVO ? k.showBanner(!0) : C == I.QQ ? k.showBanner(!0) : C == I.WX ? this.scheduleOnce(function() {}, .5) : C == I.HW ? k.showBanner(!0) : C == I.iOS ? k.showBanner(!0) : C == I.ANDROID_TAP ? k.showBanner(!0) : C == I.ANDROID_HW && k.showBanner(!0);
                    }
                }, {
                    key: "showAntModel",
                    value: function(e) {
                        b.instance.loaderPlayer(e), k.renderImage(this.icon, new f(596, 280), b.instance.Player.getChildByName("camera").getComponent(v));
                    }
                }, {
                    key: "videoBtnClick",
                    value: function(e) {
                        var n = this;
                        k.playSound(w.BTNCLICK), e.target.position.y < -130 || (S.instance.getJewelAni(this.videoBtn, this.node.parent, this, "jewelPro", "jewelSpr", "UIMain_jewelSpr"), 
                        S.instance.updateJewelNum(S.instance.newUnlockViewInfo[S.instance.newUnlockViewInfoIndex].jewelNum), 
                        this.node.active = !1, k.showBanner(!1), b.instance.desNativeBanner(), m.getScene().emit("ShowNativeAdItem"), 
                        this.scheduleOnce(function() {
                            n.backBtnClick();
                        }, 1));
                    }
                }, {
                    key: "backBtnClick",
                    value: function() {
                        k.playSound(w.BTNCLICK), this.node.removeFromParent(), this.node.destroy(), k.cleanUnuseRes(), 
                        S.instance.videoCounterTimeGo();
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        this.rotateBg.eulerAngles = this.rotateBg.eulerAngles.add(new y(0, 0, 1));
                    }
                } ]), n;
            }()).prototype, "rotateBg", [ T ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), x = t(A.prototype, "videoBtn", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), R = t(A.prototype, "descT", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), O = t(A.prototype, "icon", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), D = A)) || D)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIWXHuTui.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./DataManager.js" ], function(e, t) {
    var i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            i = e.applyDecoratedDescriptor, o = e.inherits, a = e.classCallCheck, s = e.possibleConstructorReturn, 
            r = e.getPrototypeOf, c = e.initializerDefineProperty, u = e.assertThisInitialized, 
            l = e.createClass, h = e.asyncToGenerator;
        }, function(e) {
            d = e.cclegacy, p = e._decorator, g = e.SpriteComponent, f = e.Node, v = e.tween, 
            m = e.UITransformComponent, y = e.Component, B = e.instantiate, C = e.Vec3, I = e.LabelComponent, 
            w = e.Size;
        }, function(e) {
            k = e.SOUND_TYPE;
        }, function(e) {
            b = e.Tools;
        }, function(e) {
            S = e.default;
        } ],
        execute: function() {
            d._RF.push({}, "60eeb4iXl1J/7g4GKj7aoBn", "UIWXHuTui", void 0), z = p.ccclass, V = p.property, 
            e("UIWXHuTui", (_ = z("UIWXHuTui"), T = V(g), U = V(g), N = V(g), P = V(f), D = V(f), 
            _((x = i((M = function(e) {
                function t() {
                    var e, n;
                    a(this, t);
                    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
                    return n = s(this, (e = r(t)).call.apply(e, [ this ].concat(o))), c(n, "banner1", x, u(n)), 
                    c(n, "banner2", R, u(n)), c(n, "banner3", O, u(n)), c(n, "content", j, u(n)), c(n, "iconNode", L, u(n)), 
                    n.bannerIndex1 = 0, n.bannerIndex2 = 0, n.bannerIndex3 = 0, n.data = null, n.iconIndex = 0, 
                    n.iconArr = [], n.tweenBanner = null, n.isIconInit = !1, n.direction = 0, n.isStop = !1, 
                    n.setTimeIndex = -1, n;
                }
                var i;
                return o(t, y), l(t, [ {
                    key: "start",
                    value: function() {
                        var e = this;
                        S.instance.minBannerData == [] || S.instance.maxBannerData == [] ? hzzxsdk.getBannerAdList(!1, 0, 0).then(function(n) {
                            if (S.instance.wxHuTuiAdList = n, n) {
                                for (var t = 0; t < n.length; t++) "Midbanner" == n[t].description ? S.instance.minBannerData.push(n[t]) : "Maxbanner" == n[t].description && S.instance.maxBannerData.push(n[t]);
                                e.init();
                            } else e.init();
                        }) : this.init();
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        if (S.instance.UILoad.active = !1, hzzxsdk.getRewardedAdList(!1, 0, 0).then(function(n) {
                            e.data = n, e.iconIndex = b.getRandomInt(0, n.length - 1), console.log("获取激励视频广告列表:", n), 
                            e.initIcon();
                        }), S.instance.minBannerData) {
                            for (var n = [], t = 0; t < S.instance.minBannerData.length; t++) n.push(S.instance.minBannerData[t]);
                            this.bannerIndex2 = b.getRandomInt(0, n.length - 1), n.splice(this.bannerIndex2, 1);
                            for (var i = b.getRandomInt(0, n.length - 1), o = 0; o < S.instance.minBannerData.length; o++) if (n[i] == S.instance.minBannerData[o]) {
                                this.bannerIndex3 = o;
                                break;
                            }
                            -1 != S.instance.minBannerData[this.bannerIndex2].banner.indexOf("png") ? b.setImage(this.banner2, S.instance.minBannerData[this.bannerIndex2].banner, "png") : b.setImage(this.banner2, S.instance.minBannerData[this.bannerIndex2].banner, "jpg"), 
                            -1 != S.instance.minBannerData[this.bannerIndex3].banner.indexOf("png") ? b.setImage(this.banner3, S.instance.minBannerData[this.bannerIndex3].banner, "png") : b.setImage(this.banner3, S.instance.minBannerData[this.bannerIndex3].banner, "jpg"), 
                            this.bannerIndex1 = b.getRandomInt(0, S.instance.maxBannerData.length - 1), -1 != S.instance.maxBannerData[this.bannerIndex1].banner.indexOf("png") ? b.setImage(this.banner1, S.instance.maxBannerData[this.bannerIndex1].banner, "png") : b.setImage(this.banner1, S.instance.maxBannerData[this.bannerIndex1].banner, "jpg"), 
                            this.setTween();
                        }
                        this.content.parent.parent.on(cc.SystemEventType.TOUCH_START, this.onScrollView, this), 
                        this.content.parent.parent.on(cc.SystemEventType.TOUCH_MOVE, this.onScrollView, this), 
                        this.content.parent.parent.on(cc.SystemEventType.TOUCH_END, this.onEnd, this), this.content.parent.parent.on(cc.SystemEventType.TOUCH_CANCEL, this.onEnd, this);
                    }
                }, {
                    key: "setTween",
                    value: function() {
                        var e = this;
                        this.tweenBanner && (this.tweenBanner.stop(), this.tweenBanner = null), this.tweenBanner = v(this.banner1).delay(3).call(function() {
                            e.onBtnJianTou(null, 1);
                        }).start();
                    }
                }, {
                    key: "initIcon",
                    value: (i = h(n.default.mark(function e() {
                        var t, i, o;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                for (t = 0; t < this.data.length; t++) i = B(this.iconNode), (o = new C(0, 0, 0)).x = t % 3 * 220 - 220, 
                                o.y = -240 * Math.floor(t / 3) - 120, -1 != this.data[t].icon.indexOf("png") ? b.setImage(i.getComponent(g), this.data[t].icon, "png") : b.setImage(i.getComponent(g), this.data[t].icon, "jpg"), 
                                this.data[t].title.length > 6 ? i.getComponentInChildren(I).string = this.data[t].title.slice(0, 5) + "...." : i.getComponentInChildren(I).string = this.data[t].title, 
                                this.content.addChild(i), i.setPosition(o), i.active = !0, this.iconArr.push(i);
                                this.content.getComponent(m).contentSize = new w(680, 250 * Math.ceil(this.data.length / 3)), 
                                this.content.getComponent(m).contentSize.height, this.isIconInit = !0;

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    })), function() {
                        return i.apply(this, arguments);
                    })
                }, {
                    key: "onScrollView",
                    value: function() {
                        this.isStop = !0;
                    }
                }, {
                    key: "onEnd",
                    value: function() {
                        this.isStop = !1;
                    }
                }, {
                    key: "update",
                    value: function() {
                        if (this.isIconInit && 0 == this.isStop) {
                            if (0 == this.direction) {
                                var e = this.content.position.clone();
                                this.content.setPosition(e.x, e.y + .5, e.z);
                            } else if (1 == this.direction) {
                                var n = this.content.position.clone();
                                this.content.setPosition(n.x, n.y - .5, n.z);
                            }
                            this.content.position.y >= this.content.getComponent(m).contentSize.height - 305 ? this.direction = 1 : this.content.position.y <= 305 && (this.direction = 0);
                        }
                    }
                }, {
                    key: "onBtnJianTou",
                    value: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        e && b.playSound(k.BTNCLICK), 0 == n ? (this.bannerIndex1--, this.bannerIndex1 < 0 && (this.bannerIndex1 = S.instance.maxBannerData.length - 1), 
                        -1 != S.instance.maxBannerData[this.bannerIndex1].banner.indexOf("png") ? b.setImage(this.banner1, S.instance.maxBannerData[this.bannerIndex1].banner, "png") : b.setImage(this.banner1, S.instance.maxBannerData[this.bannerIndex1].banner, "jpg")) : (this.bannerIndex1++, 
                        this.bannerIndex1 > S.instance.maxBannerData.length - 1 && (this.bannerIndex1 = 0), 
                        -1 != S.instance.maxBannerData[this.bannerIndex1].banner.indexOf("png") ? b.setImage(this.banner1, S.instance.maxBannerData[this.bannerIndex1].banner, "png") : b.setImage(this.banner1, S.instance.maxBannerData[this.bannerIndex1].banner, "jpg")), 
                        this.setTween();
                    }
                }, {
                    key: "onBannerAd",
                    value: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        0 == n ? hzzxsdk.clickAndNavigate(S.instance.maxBannerData[this.bannerIndex1]).then(function(e) {
                            console.log("跳转是否成功 = ", e.navigateTo), console.log("是否是第一次点击 = ", e.isFristClick);
                        }) : 1 == n ? hzzxsdk.clickAndNavigate(S.instance.minBannerData[this.bannerIndex2]).then(function(e) {
                            console.log("跳转是否成功 = ", e.navigateTo), console.log("是否是第一次点击 = ", e.isFristClick);
                        }) : 2 == n && hzzxsdk.clickAndNavigate(S.instance.minBannerData[this.bannerIndex3]).then(function(e) {
                            console.log("跳转是否成功 = ", e.navigateTo), console.log("是否是第一次点击 = ", e.isFristClick);
                        });
                    }
                }, {
                    key: "onIconAd",
                    value: function(e) {
                        for (var n = e.target, t = 0; t < this.iconArr.length; t++) if (n == this.iconArr[t]) {
                            hzzxsdk.clickAndNavigate(this.data[t]).then(function(e) {
                                console.log("跳转是否成功 = ", e.navigateTo), console.log("是否是第一次点击 = ", e.isFristClick);
                            });
                            break;
                        }
                    }
                }, {
                    key: "onBack",
                    value: function() {
                        b.playSound(k.BTNCLICK), this.node.removeFromParent(), this.node.destroy();
                    }
                } ]), t;
            }()).prototype, "banner1", [ T ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), R = i(M.prototype, "banner2", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), O = i(M.prototype, "banner3", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), j = i(M.prototype, "content", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), L = i(M.prototype, "iconNode", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), A = M)) || A)), d._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIWXShare.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.director, g = e.Component;
        }, function(e) {
            f = e.CUR_PLATFORM, v = e.PLATFORM_TYPE, m = e.SOUND_TYPE;
        }, function(e) {
            y = e.Tools;
        }, function(e) {
            B = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "b69cfowKfZNZofo0yhyoLpE", "UIWXShare", void 0), S = h.ccclass, _ = h.property, 
            e("UIWXShare", (C = S("UIWXShare"), I = _(d), C((b = t((k = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "close", b, c(t)), 
                    t;
                }
                return i(n, g), u(n, [ {
                    key: "start",
                    value: function() {
                        var e = this;
                        if (B.instance.UILoad.active = !1, p.getScene().emit("HIDE_BUGBOX"), f == v.WX) {
                            var n = .5 * Math.random() + 1.5;
                            this.scheduleOnce(function() {
                                e.close.active = !0;
                            }, n);
                        } else this.close.active = !0;
                    }
                }, {
                    key: "onShare",
                    value: function() {
                        var e = this;
                        f == v.WX ? (B.instance.blindBoxCount = 1, localStorage.setItem("blindBoxCount", B.instance.blindBoxCount.toString()), 
                        wx.shareAppMessage({
                            title: "我已击败螃蟹王,一起来挑战吧",
                            imageUrl: "https://kcmnq.jinkezhexin.top/AntPortrait/share1.png"
                        }), this.scheduleOnce(function() {
                            e.node.removeFromParent(), e.node.destroy(), p.getScene().emit("SHOW_BULIND_BOX");
                        }, .5)) : (B.instance.blindBoxCount = 1, localStorage.setItem("blindBoxCount", B.instance.blindBoxCount.toString()), 
                        p.getScene().emit("SHOW_BULIND_BOX"), this.node.removeFromParent(), this.node.destroy());
                    }
                }, {
                    key: "onBack",
                    value: function() {
                        y.playSound(m.BTNCLICK), p.getScene().emit("SHOW_BULIND_BOX"), this.node.removeFromParent(), 
                        this.node.destroy();
                    }
                } ]), n;
            }()).prototype, "close", [ I ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), w = k)) || w)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIWorkAnt.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./ShufenManager.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W, q, Y, K;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.LabelComponent, p = e.SliderComponent, g = e.Node, 
            f = e.Vec3, v = e.SpriteComponent, m = e.director, y = e.Color, B = e.Component;
        }, function(e) {
            C = e.CUR_PLATFORM, I = e.PLATFORM_TYPE, w = e.MAIDIAN_STEPS, k = e.YOUMENG_EVENT, 
            b = e.SOUND_TYPE, S = e.GUIDE_STEPS;
        }, function(e) {
            _ = e.default;
        }, function(e) {
            T = e.Tools;
        }, function(e) {
            U = e.GameManager;
        }, function(e) {
            N = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "6092bG8YrNARaDEh48JRx3W", "UIWorkAnt", void 0), Y = h.ccclass, K = h.property, 
            e("UIWorkAnt", (P = Y("UIWorkAnt"), D = K(d), A = K(d), M = K(p), x = K(g), R = K(g), 
            O = K(g), j = K(g), P((V = t((z = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "idleAntLabel", V, c(t)), 
                    r(t, "workAntLabel", H, c(t)), r(t, "sliders", E, c(t)), r(t, "backBtn", G, c(t)), 
                    t.sliderBars = [], t.sliderCountLabels = [], t.antMax = 0, t.weights = [ 0, 0, 0, 0, 0 ], 
                    t.antQueenFeedMax = 1, r(t, "addBtnArr", F, c(t)), r(t, "subBtnArr", W, c(t)), r(t, "hand", q, c(t)), 
                    t.wxShowBannerCount = 0, t.clickBackBtnCount = 0, t;
                }
                return i(n, B), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        var e = this;
                        if (this.node.getChildByName("bottom").setPosition(0, -cc.winSize.height / 2, 0), 
                        this.showNativeAd(), N.instance.UILoad.active = !1, C == I.iOS && N.instance.guideSteps > 30 && 1 == T.getRandomInt(1, 2) && window.NativeCtrl.showInsertitiald(), 
                        C == I.QQ && N.instance.guideSteps > 30 ? T.cacheInsertAd("d0c35318325b05f137fba6952c2a87ce") : C == I.TT && N.instance.guideSteps > 30 || C == I.MEIZU && N.instance.guideSteps > 30 && window.chapad.showChap(), 
                        C == I.HW && N.instance.guideSteps > 30) {
                            var n = N.instance.hwNativeAdWuChu, t = T.getRandomInt(1, 10), i = n.WORKANT_TIME;
                            t <= n.WORKANT_RAND && (T.showHwBanner(!1), this.scheduleOnce(function() {
                                N.instance.showUI("prefabs/ui/UINative_HW");
                            }, i));
                        }
                        if (C == I.WX && N.instance.guideSteps > 30) if (N.instance.wxMaiLiangWuChuData) {
                            N.instance.wxWuChuBackBtnCount++, N.instance.wxOneWuChuBackBtnCount++;
                            var o = N.instance.wxMaiLiangWuChuData.data.p5.split(","), a = Math.floor(o[0]);
                            this.scheduleOnce(function() {
                                e.backBtn.active = !0;
                            }, a);
                        } else this.backBtn.active = !0; else this.backBtn.active = !0;
                        C == I.TT && N.instance.guideSteps > 30 && T.showBanner(!0), C == I.ANDROID_XiaoMi && T.showBanner(!0);
                    }
                }, {
                    key: "wxWuChu",
                    value: function() {
                        var e = this;
                        if (C == I.WX && N.instance.guideSteps > 30) if (N.instance.wxMaiLiangWuChuData && this.clickBackBtnCount <= 0 && 1 == N.instance.wxWuChuBaiMingDanType) {
                            var n = N.instance.wxMaiLiangWuChuData.data.p5.split(","), t = Math.floor(n[1]), i = Math.floor(n[2]), o = Math.floor(n[3]), a = Math.floor(n[4]);
                            0 == o ? T.getRandomInt(1, 100) <= i && this.scheduleOnce(function() {
                                T.showBanner(!0);
                                var n = N.instance.wxMaiLiangWuChuData.data.p10.split(","), t = Math.floor(n[0]), i = Math.floor(n[1]), o = 0, s = 0;
                                e.schedule(function() {
                                    if (++o >= t) {
                                        if (o == t) return void T.showBanner(!1);
                                        ++s >= i && e.wxShowBannerCount < a && (T.showBanner(!0), o = 0, s = 0, e.wxShowBannerCount++);
                                    }
                                }, 1);
                            }, t) : this.backBtn.active = !0;
                        } else this.backBtn.active = !0;
                    }
                }, {
                    key: "showNativeAd",
                    value: function() {
                        if (N.instance.isShowOppoNativeAd && N.instance.guideSteps > 30 && C == I.OPPO) {
                            var e = N.instance.oppoNativeOpen, n = T.getRandomInt(1, e.WORKANT_RAND), t = e.WORKANT_TIME;
                            1 == n ? this.scheduleOnce(function() {
                                N.instance.showUI("prefabs/ui/UINativeAD");
                            }, t) : U.instance.showNativeAdItem(new f(cc.winSize.width / 2 - 86, -270, 0));
                        } else if (N.instance.guideSteps > 30 && C == I.VIVO) {
                            var i = N.instance.vivoWuChuConfig;
                            T.getRandomInt(1, 10) <= i.WORKANT_RAND && N.instance.showUI("prefabs/ui/UINative_Vivo");
                        } else N.instance.guideSteps > 30 && C == I.ANDROID_TAP ? (T.getRandomInt(1, 10) <= 5 && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/MyApplication", "showInteractionAd", "()V"), 
                        console.log("tap穿山甲工蚁界面展示插屏~~~~~~~~~")) : N.instance.guideSteps > 30 && C == I.ANDROID_HW ? (T.getRandomInt(1, 10) <= 4 && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInterstitialAd", "(Ljava/lang/String;)V", ""), 
                        console.log("hw建造界面展示插屏~~~~~~~~~")) : N.instance.guideSteps > 30 && C == I.ANDROID_XiaoMi && N.instance.tryShowInterAd2();
                    }
                }, {
                    key: "start",
                    value: function() {
                        for (var e = 0; e < N.instance.nestRoomConfig.bugIDs.length; e++) 0 == N.instance.nestRoomConfig.bugIDs[e].id && this.antMax++;
                        this.weights[0] = N.instance.nestRoomConfig.antWork0[0], this.weights[1] = N.instance.nestRoomConfig.antWork0[1], 
                        this.weights[2] = N.instance.nestRoomConfig.antWork0[2], this.weights[3] = N.instance.nestRoomConfig.antWork0[3], 
                        this.weights[4] = N.instance.nestRoomConfig.antWork0[4];
                        for (var n = 0; n < this.sliders.length; n++) {
                            var t = this.sliders[n], i = t.node.getChildByName("count").getComponent(d), o = t.node.getChildByName("Bar").getComponent(v);
                            this.sliderBars.push(o), this.sliderCountLabels.push(i), t.handle.node.on("touch-end", this.touchEnd, this), 
                            t.handle.node.on("touch-cancel", this.touchEnd, this), 0 == this.antMax ? t.progress = 0 : (t.progress = T.clampf(this.weights[n] / this.antMax, 0, 1), 
                            2 == n && (t.progress = T.clampf(this.weights[n] / this.antQueenFeedMax, 0, 1))), 
                            i.string = this.weights[n].toString();
                        }
                        for (var a = 0; a < 5; a++) this.handleBarSlide(this.sliders[a], "" + a);
                        this.refreshUI(), this.schedule(this.refreshUI, 1), this.refreshLeftCount(), 21 == N.instance.guideSteps && (T.ShowUI("UIGuide", null, null, this.sliderBars[1].node.worldPosition, !0, !0, !0, 8), 
                        N.instance.guideSteps = 22);
                    }
                }, {
                    key: "touchEnd",
                    value: function() {
                        for (var e = 0; e < this.sliderCountLabels.length; e++) {
                            var n = this.sliderCountLabels[e].string, t = parseInt(n);
                            this.weights[e] = t;
                        }
                        if (this.weights[0] > 0 && N.instance.updateGameTaskPro(5), this.weights[3] > 0 && N.instance.updateGameTaskPro(8), 
                        this.weights[4] > 0 && N.instance.updateGameTaskPro(13), this.refreshUI(), 22 == N.instance.guideSteps) {
                            if (1 != this.weights[1]) return;
                            N.instance.guideSteps = 23, _.reportGuide("9", 2), T.ShowUI("UIGuide", null, null, this.node.getChildByName("startBtn").worldPosition, !0, !1, !0), 
                            m.getScene().emit("CLOSE_GUIDE_UI"), N.instance.wxReportEvent(w.STEPS_14), N.instance.youMenDaDian(k.guide_23);
                        }
                    }
                }, {
                    key: "refreshUI",
                    value: function() {
                        this.workAntLabel.string = this.antMax.toString();
                        for (var e = 0; e < 5; e++) {
                            var n = this.getLeftCount(e) > 0 || this.weights[e] > 0;
                            0 == e && 0 == N.instance.nestRoomConfig.roomInfo[1].level ? n = !1 : 1 == e && 0 == N.instance.nestRoomConfig.roomInfo[0].level ? n = !1 : 2 == e && 0 == N.instance.nestRoomConfig.roomInfo[0].level ? n = !1 : 3 == e && 0 == N.instance.nestRoomConfig.roomInfo[2].level ? n = !1 : 4 == e && 0 == N.instance.nestRoomConfig.roomInfo[5].level && (n = !1), 
                            this.setCanSlide(e, n);
                        }
                    }
                }, {
                    key: "refreshLeftCount",
                    value: function() {
                        var e = 0;
                        e += this.weights[0], e += this.weights[1], e += this.weights[2], e += this.weights[3], 
                        e += this.weights[4];
                        var n = T.clampf(this.antMax - e, 0, this.antMax);
                        this.idleAntLabel.string = Math.floor(n).toString();
                    }
                }, {
                    key: "setCanSlide",
                    value: function(e, n) {
                        this.sliders[e].enabled = n, this.addBtnArr[e].getComponent(v).grayscale = !n, this.subBtnArr[e].getComponent(v).grayscale = !n, 
                        this.sliders[e].handle.color = n ? new y(255, 255, 255, 255) : new y(116, 71, 59, 255);
                    }
                }, {
                    key: "handleBarSlide",
                    value: function(e, n) {
                        var t, i = parseInt(n);
                        if (22 == N.instance.guideSteps && 2 == i) return e.progress = 0, void T.ShowTip("引导中");
                        if (0 == (t = 2 == i ? this.antQueenFeedMax : this.antMax)) e.progress = 0, this.sliderCountLabels[i].string = "0"; else {
                            var o = this.getLeftCount(i), a = Math.ceil(e.progress * t);
                            a > o && (a = o), e.progress = T.clampf(a / t, 0, 1), this.sliderCountLabels[i].string = "" + a;
                        }
                        this.sliderBars[i].fillRange = e.progress, this.refreshUI();
                    }
                }, {
                    key: "getLeftCount",
                    value: function(e) {
                        for (var n = 0, t = 0; t < this.weights.length; t++) t != e && (n += this.weights[t]);
                        return this.antMax - n;
                    }
                }, {
                    key: "onAddCountBtnClick",
                    value: function(e, n) {
                        var t = parseInt(n);
                        if (!e.target.getComponent(v).grayscale) {
                            this.subBtnArr[t];
                            var i;
                            if (0 == (i = 2 == t ? this.antQueenFeedMax : this.antMax)) this.sliders[t].progress = 0, 
                            this.sliderCountLabels[t].string = "0"; else {
                                var o = this.getLeftCount(t), a = Math.ceil(this.sliders[t].progress * i);
                                a >= o ? a = o : 2 == t ? a = 1 : a++, this.sliders[t].progress = T.clampf(a / i, 0, 1), 
                                this.sliderCountLabels[t].string = "" + a;
                            }
                            1 == t && 22 == N.instance.guideSteps && (N.instance.guideSteps = 23, T.ShowUI("UIGuide", null, null, this.node.getChildByName("startBtn").worldPosition, !0, !1, !0), 
                            m.getScene().emit("CLOSE_GUIDE_UI"), N.instance.wxReportEvent(w.STEPS_14), N.instance.youMenDaDian(k.guide_23)), 
                            this.sliderBars[t].fillRange = this.sliders[t].progress, this.refreshUI();
                            for (var s = 0; s < this.sliderCountLabels.length; s++) {
                                var r = this.sliderCountLabels[s].string, c = parseInt(r);
                                this.weights[s] = c;
                            }
                        }
                    }
                }, {
                    key: "onSubCountBtnClick",
                    value: function(e, n) {
                        var t = parseInt(n), i = e.target;
                        if (!i.getComponent(v).grayscale) {
                            var o, a = this.addBtnArr[t];
                            if (0 == (o = 2 == t ? this.antQueenFeedMax : this.antMax)) this.sliders[t].progress = 0, 
                            this.sliderCountLabels[t].string = "0"; else {
                                this.getLeftCount(t);
                                var s = Math.ceil(this.sliders[t].progress * o);
                                s <= 0 ? (s = 0, i.getComponent(v).grayscale = !0) : --s <= 0 ? i.getComponent(v).grayscale = !0 : a.getComponent(v).grayscale = !1, 
                                this.sliders[t].progress = T.clampf(s / o, 0, 1), this.sliderCountLabels[t].string = "" + s;
                            }
                            this.sliderBars[t].fillRange = this.sliders[t].progress, this.refreshUI();
                            for (var r = 0; r < this.sliderCountLabels.length; r++) {
                                var c = this.sliderCountLabels[r].string, u = parseInt(c);
                                this.weights[r] = u;
                            }
                        }
                    }
                }, {
                    key: "btnStartWorkClick",
                    value: function() {
                        T.playSound(b.BTNCLICK), N.instance.videoCounterTimeGo();
                        for (var e = [], n = 0; n < this.weights.length; n++) for (var t = this.weights[n], i = 0; i < t; i++) e.push(n);
                        for (var o = [], a = 0; a < U.instance.ants.length; a++) {
                            var s = U.instance.ants[a];
                            if (s && 0 == s.team && !s.isDead && 0 == s.id) {
                                var r = e.splice(0, 1)[0];
                                "number" == typeof r ? (o.push(r), s.aiController.newWorkType = r) : s.aiController.newWorkType = -1;
                            }
                        }
                        this.weights = [ 0, 0, 0, 0, 0 ];
                        for (var c = 0; c < o.length; c++) this.weights[o[c]]++;
                        N.instance.nestRoomConfig.antWork0 = this.weights, localStorage.setItem("nestRoomConfig", JSON.stringify(N.instance.nestRoomConfig)), 
                        T.showBanner(!1), N.instance.onShowBannerType(!0), this.node.removeFromParent(), 
                        this.node.destroy(), T.cleanUnuseRes(), 23 == N.instance.guideSteps && (N.instance.guideSteps = 24, 
                        m.getScene().emit("CLOSE_GUIDE_UI"), m.getScene().emit(S.STEPS_24), localStorage.setItem("guideSteps", N.instance.guideSteps.toString()), 
                        N.instance.wxReportEvent(w.STEPS_15), N.instance.youMenDaDian(k.guide_24));
                    }
                }, {
                    key: "backBtnClick",
                    value: function() {
                        if (N.instance.guideSteps < 24) T.ShowTip("引导中"); else {
                            if (T.showBanner(!1), T.playSound(b.BTNCLICK), this.wxWuChu(), this.clickBackBtnCount++, 
                            C == I.WX && N.instance.guideSteps > 30 && 1 == N.instance.wxWuChuBaiMingDanType) {
                                if (N.instance.wxOneWuChuBackBtnCount == N.instance.getWuChuP12Info(1)) {
                                    if (this.clickBackBtnCount <= N.instance.getWuChuP12Info(0)) return;
                                    N.instance.wxWuChuBackBtnCount = 0;
                                }
                                if (T.getRandomInt(1, 100) <= N.instance.getWuChuP12Info(3) && N.instance.wxWuChuBackBtnCount >= N.instance.getWuChuP12Info(2)) {
                                    if (this.clickBackBtnCount <= N.instance.getWuChuP12Info(0)) return;
                                    N.instance.wxWuChuBackBtnCount = 0;
                                }
                            }
                            N.instance.videoCounterTimeGo(), this.node.removeFromParent(), this.node.destroy(), 
                            T.cleanUnuseRes(), N.instance.wxInterAdCount++, m.getScene().emit("SHOW_WX_INTERAD"), 
                            m.getScene().emit("Vivo_showBanner"), m.getScene().emit("MainNativeBannerOPPO", !0), 
                            m.getScene().emit("DestroyNativeItem"), N.instance.onShowBannerType(!0), m.getScene().emit("ShowNativeAdItem", new f(cc.winSize.width / 2 - 358, 200, 0));
                        }
                    }
                } ]), n;
            }()).prototype, "idleAntLabel", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), H = t(z.prototype, "workAntLabel", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), E = t(z.prototype, "sliders", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), G = t(z.prototype, "backBtn", [ x ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), F = t(z.prototype, "addBtnArr", [ R ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), W = t(z.prototype, "subBtnArr", [ O ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), q = t(z.prototype, "hand", [ j ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), L = z)) || L)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIZhuanPan.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W, q, Y, K, X, J, Q, Z, $, ee, ne, te, ie, oe, ae, se, re, ce, ue, le, he, de, pe, ge, fe, ve, me;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _dec9: void 0,
        _dec10: void 0,
        _dec11: void 0,
        _dec12: void 0,
        _dec13: void 0,
        _dec14: void 0,
        _dec15: void 0,
        _dec16: void 0,
        _dec17: void 0,
        _dec18: void 0,
        _dec19: void 0,
        _dec20: void 0,
        _dec21: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _descriptor8: void 0,
        _descriptor9: void 0,
        _descriptor10: void 0,
        _descriptor11: void 0,
        _descriptor12: void 0,
        _descriptor13: void 0,
        _descriptor14: void 0,
        _descriptor15: void 0,
        _descriptor16: void 0,
        _descriptor17: void 0,
        _descriptor18: void 0,
        _descriptor19: void 0,
        _descriptor20: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.Node, p = e.LabelComponent, g = e.SpriteComponent, 
            f = e.tween, v = e.Vec3, m = e.director, y = e.Component;
        }, function(e) {
            B = e.CUR_PLATFORM, C = e.PLATFORM_TYPE, I = e.YOUMENG_EVENT, w = e.SOUND_TYPE, 
            k = e.YOUEMNG_EVENT_ENUM;
        }, function(e) {
            b = e.Tools;
        }, function(e) {
            S = e.GameManager;
        }, function(e) {
            _ = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "79947Zqjn5MsL30Q+/hyJ9i", "UIZhuanPan", void 0), ve = h.ccclass, 
            me = h.property, e("UIZhuanPan", (T = ve("UIZhuanPan"), U = me(d), N = me(d), P = me(p), 
            D = me(g), A = me(d), M = me(d), x = me(d), R = me(d), O = me(d), j = me(d), L = me(g), 
            z = me(p), V = me(g), H = me(p), E = me(p), G = me(d), F = me(d), W = me(d), q = me(d), 
            Y = me(d), T((J = t((X = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "rotateBg", J, c(t)), 
                    r(t, "itemNodeArray", Q, c(t)), r(t, "timeT", Z, c(t)), r(t, "rewardProValue", $, c(t)), 
                    r(t, "boxNodeArray", ee, c(t)), r(t, "boxItemNodeArray", ne, c(t)), r(t, "box4", te, c(t)), 
                    r(t, "boxItem4", ie, c(t)), r(t, "videoBtn", oe, c(t)), r(t, "zhuanPanBg", ae, c(t)), 
                    r(t, "jewelBg", se, c(t)), r(t, "rotateCountT", re, c(t)), r(t, "jewelProValue", ce, c(t)), 
                    r(t, "numT", ue, c(t)), r(t, "jewelCountT", le, c(t)), r(t, "jewelRotate", he, c(t)), 
                    r(t, "proRotate", de, c(t)), r(t, "backBtn", pe, c(t)), r(t, "leftNode", ge, c(t)), 
                    r(t, "hand", fe, c(t)), t.zhuanPanWeightArr = [ {
                        id: 0,
                        percent: 1
                    }, {
                        id: 1,
                        percent: 15
                    }, {
                        id: 2,
                        percent: 20
                    }, {
                        id: 3,
                        percent: 20
                    }, {
                        id: 4,
                        percent: 20
                    }, {
                        id: 5,
                        percent: 15
                    } ], t.getZhuanPanRewardInfo = {
                        id: 0,
                        percent: 0
                    }, t.isRolling = !1, t.isBack = !1, t.toRotate = 0, t.wxShowBannerCount = 0, t.schedule_1 = null, 
                    t.schedule_2 = null, t.schedule_3 = null, t.clickBackBtnCount = 0, t;
                }
                return i(n, y), u(n, [ {
                    key: "onLoad",
                    value: function() {
                        var e = this;
                        if (this.node.getChildByName("bottom").setPosition(0, -cc.winSize.height / 2, 0), 
                        _.instance.UILoad.active = !1, this.leftNode.setPosition(-cc.winSize.width / 2, 0, 0), 
                        _.instance.shiPeiUIBackBtn(this.leftNode.getChildByName("backBtn")), B == C.ANDROID_XiaoMi && (f(this.videoBtn).to(.5, {
                            scale: new v(1.1, 1.1, 1)
                        }).to(1, {
                            scale: new v(.9, .9, 1)
                        }).union().repeatForever().start(), this.hand.active = !0, this.schedule(this.updateGuideDoubleClipHand, .35), 
                        cc.winSize.height / cc.winSize.width >= 2 && b.showBanner(!0)), B == C.WX && _.instance.guideSteps > 30) if (_.instance.wxMaiLiangWuChuData) {
                            _.instance.wxWuChuBackBtnCount++, _.instance.wxOneWuChuBackBtnCount++;
                            var n = _.instance.wxMaiLiangWuChuData.data.p6.split(","), t = Math.floor(n[0]);
                            this.scheduleOnce(function() {
                                e.backBtn.active = !0;
                            }, t);
                        } else this.backBtn.active = !0; else this.backBtn.active = !0;
                    }
                }, {
                    key: "wxWuChu",
                    value: function() {
                        var e = this;
                        if (B == C.WX && _.instance.guideSteps > 30) if (_.instance.wxMaiLiangWuChuData && this.clickBackBtnCount <= 0 && 1 == _.instance.wxWuChuBaiMingDanType) {
                            var n = _.instance.wxMaiLiangWuChuData.data.p6.split(","), t = Math.floor(n[1]), i = Math.floor(n[2]), o = Math.floor(n[3]), a = Math.floor(n[4]);
                            0 == o ? b.getRandomInt(1, 100) <= i && this.scheduleOnce(function() {
                                b.showBanner(!0);
                                var n = _.instance.wxMaiLiangWuChuData.data.p10.split(","), t = Math.floor(n[0]), i = Math.floor(n[1]), o = 0, s = 0;
                                e.schedule(function() {
                                    if (++o >= t) {
                                        if (o == t) return void b.showBanner(!1);
                                        ++s >= i && e.wxShowBannerCount < a && (b.showBanner(!0), o = 0, s = 0, e.wxShowBannerCount++);
                                    }
                                }, 1);
                            }, t) : this.backBtn.active = !0;
                        } else this.backBtn.active = !0;
                    }
                }, {
                    key: "updateGuideDoubleClipHand",
                    value: function() {
                        var e = this.hand.getChildByName("hand0"), n = this.hand.getChildByName("hand1");
                        e.active = !e.active, n.active = !n.active;
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.init(), _.instance.tryShowInterAd2();
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.clickLuckDrawCount(), this.rewardProValue.fillRange = .05 * _.instance.zhuanPanBoxCount, 
                        this.rotateCountT.string = _.instance.zhuanPanBoxCount.toString(), this.updateJewelLabel(), 
                        _.instance.zhuanPanMianFeiCount > 0 || (_.instance.youMenDaDian(I.adLucky_appear), 
                        this.showVideoSpr()), 0 == _.instance.zhuanPanSkinUnlock && (this.zhuanPanBg.getChildByName("item1").getChildByName("skinIcon").active = !1, 
                        this.zhuanPanBg.getChildByName("item1").getChildByName("jewelIcon").active = !0, 
                        this.box4.getChildByName("skinIcon").active = !1, this.box4.getChildByName("jewelIcon").active = !0);
                    }
                }, {
                    key: "clickLuckDrawCount",
                    value: function() {
                        _.instance.zhuanPanBoxCount >= 5 && !this.boxNodeArray[0].getChildByName("boxSpr").active && (0 == _.instance.zhuanPanBoxGetType[0].getType ? (this.boxNodeArray[0].getChildByName("boxSpr").active = !0, 
                        this.boxBgAni(this.boxNodeArray[0], 1)) : this.boxNodeArray[0].getChildByName("boxMsk").active = !0), 
                        _.instance.zhuanPanBoxCount >= 10 && !this.boxNodeArray[1].getChildByName("boxSpr").active && (0 == _.instance.zhuanPanBoxGetType[1].getType ? (this.boxNodeArray[1].getChildByName("boxSpr").active = !0, 
                        this.boxBgAni(this.boxNodeArray[1], 2)) : this.boxNodeArray[1].getChildByName("boxMsk").active = !0), 
                        _.instance.zhuanPanBoxCount >= 15 && !this.boxNodeArray[2].getChildByName("boxSpr").active && (0 == _.instance.zhuanPanBoxGetType[2].getType ? (this.boxNodeArray[2].getChildByName("boxSpr").active = !0, 
                        this.boxBgAni(this.boxNodeArray[2], 3)) : this.boxNodeArray[2].getChildByName("boxMsk").active = !0), 
                        _.instance.zhuanPanBoxCount >= 20 && !this.box4.getChildByName("boxSpr").active && 0 == _.instance.zhuanPanBoxGetType[3].getType && (this.box4.getChildByName("boxSpr").active = !0, 
                        this.schedule(this.box4BgAni, 2)), 3 == _.instance.zhuanPanJewelCount && (this.jewelBg.node.active = !0, 
                        this.schedule(this.jewelBgAni, 2));
                    }
                }, {
                    key: "box4BgAni",
                    value: function() {
                        S.instance.sprShowEffect(this.box4.getChildByName("boxSpr").getComponent(g), 255, 0);
                    }
                }, {
                    key: "boxBgAni",
                    value: function(e, n) {
                        var t = function() {
                            f(e).to(.1, {
                                eulerAngles: new v(0, 0, 35)
                            }).call(function() {
                                f(e).to(.1, {
                                    eulerAngles: new v(0, 0, -35)
                                }).call(function() {
                                    f(e).to(.1, {
                                        eulerAngles: new v(0, 0, 15)
                                    }).call(function() {
                                        f(e).to(.1, {
                                            eulerAngles: new v(0, 0, -20)
                                        }).call(function() {
                                            f(e).to(.1, {
                                                eulerAngles: new v(0, 0, 0)
                                            }).call(function() {}).start();
                                        }).start();
                                    }).start();
                                }).start();
                            }).start();
                        }.bind(this);
                        1 == n ? (this.schedule_1 = t, this.schedule_1()) : 2 == n ? (this.schedule_2 = t, 
                        this.schedule_2()) : 3 == n && (this.schedule_3 = t, this.schedule_3()), this.schedule(t, 2);
                    }
                }, {
                    key: "onBoxClick",
                    value: function(e, n) {
                        b.playSound(w.BTNCLICK);
                        for (var t = parseInt(n), i = 0; i < this.boxItemNodeArray.length; i++) {
                            var o = this.boxItemNodeArray[i];
                            o.getChildByName("rewardBg").active = t == i && !o.getChildByName("rewardBg").active;
                        }
                        switch (t) {
                          case 0:
                            if (_.instance.zhuanPanBoxCount < 5) return void b.ShowTip("抽奖累计次数不足");
                            0 == _.instance.zhuanPanBoxGetType[t].getType ? (b.ShowUI("UIHint", null, null, 1, [ 0 ], [ 20 ]), 
                            this.boxNodeArray[t].getChildByName("boxMsk").active = !0, this.boxNodeArray[t].getChildByName("boxSpr").active = !1, 
                            this.unschedule(this.schedule_1), _.instance.zhuanPanBoxGetType[t].getType = 1) : b.ShowTip("奖励已领取");
                            break;

                          case 1:
                            if (_.instance.zhuanPanBoxCount < 10) return void b.ShowTip("抽奖累计次数不足");
                            0 == _.instance.zhuanPanBoxGetType[t].getType ? (b.ShowUI("UIHint", null, null, 1, [ 4 ], [ 30 ]), 
                            this.boxNodeArray[t].getChildByName("boxMsk").active = !0, this.boxNodeArray[t].getChildByName("boxSpr").active = !1, 
                            this.unschedule(this.schedule_2), _.instance.zhuanPanBoxGetType[t].getType = 1) : b.ShowTip("奖励已领取");
                            break;

                          case 2:
                            if (_.instance.zhuanPanBoxCount < 15) return void b.ShowTip("抽奖累计次数不足");
                            0 == _.instance.zhuanPanBoxGetType[t].getType ? (b.ShowUI("UIHint", null, null, 1, [ 5 ], [ 50 ]), 
                            this.boxNodeArray[t].getChildByName("boxMsk").active = !0, this.boxNodeArray[t].getChildByName("boxSpr").active = !1, 
                            this.unschedule(this.schedule_3), _.instance.zhuanPanBoxGetType[t].getType = 1) : b.ShowTip("奖励已领取");
                        }
                        localStorage.setItem("zhuanPanBoxGetType", JSON.stringify(_.instance.zhuanPanBoxGetType));
                    }
                }, {
                    key: "onBox4Click",
                    value: function() {
                        b.playSound(w.BTNCLICK), _.instance.zhuanPanBoxCount < 20 ? b.ShowTip("抽奖累计次数不足") : 0 == _.instance.zhuanPanSkinUnlock ? 0 == _.instance.zhuanPanBoxGetType[3].getType ? (b.ShowUI("UIHint", null, null, 1, [ 4 ], [ 100 ]), 
                        this.unschedule(this.box4BgAni), this.box4.getChildByName("boxSpr").active = !1, 
                        _.instance.zhuanPanBoxGetType[3].getType = 1, localStorage.setItem("zhuanPanBoxGetType", JSON.stringify(_.instance.zhuanPanBoxGetType))) : b.ShowTip("奖励已领取") : (_.instance.unlockSkinId = 3, 
                        _.instance.unlockSkinName = "巨腿蚂蚁", _.instance.showUI("prefabs/ui/UIUnlockSkin"), 
                        _.instance.skinConfig[3].isUnlock = 0, _.instance.zhuanPanSkinUnlock = 0, localStorage.setItem("zhuanPanSkinUnlock", _.instance.zhuanPanSkinUnlock.toString()), 
                        localStorage.setItem("skinConfig", JSON.stringify(_.instance.skinConfig)), this.zhuanPanBg.getChildByName("item1").getChildByName("skinIcon").active = !1, 
                        this.zhuanPanBg.getChildByName("item1").getChildByName("jewelIcon").active = !0, 
                        this.box4.getChildByName("skinIcon").active = !1, this.box4.getChildByName("jewelIcon").active = !0, 
                        this.unschedule(this.box4BgAni), this.box4.getChildByName("boxSpr").active = !0, 
                        _.instance.zhuanPanBoxGetType[3].getType = 1, localStorage.setItem("zhuanPanBoxGetType", JSON.stringify(_.instance.zhuanPanBoxGetType)));
                    }
                }, {
                    key: "onJewelClick",
                    value: function() {
                        b.playSound(w.BTNCLICK), _.instance.zhuanPanJewelCount < 3 && 0 == _.instance.zhuanPanRewardJewelCount ? b.ShowTip("抽奖累计次数不足") : (this.jewelBg.node.active = !1, 
                        b.ShowUI("UIHint", null, null, 1, [ 4 ], [ 50 * _.instance.zhuanPanRewardJewelCount ]), 
                        _.instance.zhuanPanRewardJewelCount = 0, this.jewelCountT.string = "", localStorage.setItem("zhuanPanRewardJewelCount", _.instance.zhuanPanRewardJewelCount.toString()), 
                        _.instance.zhuanPanJewelCount = _.instance.zhuanPanJewelCount % 3, localStorage.setItem("zhuanPanJewelCount", _.instance.zhuanPanJewelCount.toString()), 
                        this.updateJewelLabel());
                    }
                }, {
                    key: "jewelBgAni",
                    value: function() {
                        S.instance.sprShowEffect(this.jewelBg, 255, 0);
                    }
                }, {
                    key: "onVideoBtnClikc",
                    value: function() {
                        if (b.playSound(w.BTNCLICK), _.instance.zhuanPanMianFeiCount >= 1) this.startLuckDraw(this), 
                        this.showVideoSpr(), _.instance.youMenDaDian(I.luckyFree); else {
                            _.instance.youMengVideoClick = k.zhuanPan, _.instance.youMenDaDian(I.adLucky_click);
                            var e = this, n = function() {
                                this.startLuckDraw(e), _.instance.youMenDaDian(I.adLucky_complete);
                            }.bind(this);
                            _.instance.shufenVideoID = 32, _.instance.watchVideo("", n);
                        }
                    }
                }, {
                    key: "onStartBtnClick",
                    value: function() {
                        if (b.playSound(w.BTNCLICK), _.instance.zhuanPanMianFeiCount >= 1) this.startLuckDraw(this), 
                        this.showVideoSpr(); else {
                            var e = this, n = function() {
                                this.startLuckDraw(e);
                            }.bind(this);
                            _.instance.watchVideo("", n);
                        }
                    }
                }, {
                    key: "startLuckDraw",
                    value: function(e) {
                        if (!this.isRolling && !this.isBack) {
                            _.instance.zhuanPanMianFeiCount > 0 && (_.instance.zhuanPanMianFeiCount--, localStorage.setItem("zhuanPanMianFeiCount", _.instance.zhuanPanMianFeiCount.toString()), 
                            m.getScene().emit("hideHongDian", 5)), _.instance.zhuanPanBoxCount++, localStorage.setItem("zhuanPanBoxCount", _.instance.zhuanPanBoxCount.toString()), 
                            this.rewardProValue.fillRange = .05 * _.instance.zhuanPanBoxCount, this.rotateCountT.string = _.instance.zhuanPanBoxCount.toString(), 
                            _.instance.zhuanPanJewelCount++;
                            var n = parseInt((_.instance.zhuanPanJewelCount / 3).toString());
                            _.instance.zhuanPanRewardJewelCount = n, _.instance.zhuanPanRewardJewelCount > 0 && (this.jewelCountT.string = "+" + parseInt((50 * _.instance.zhuanPanRewardJewelCount).toString())), 
                            this.updateJewelLabel(), localStorage.setItem("zhuanPanRewardJewelCount", _.instance.zhuanPanRewardJewelCount.toString()), 
                            localStorage.setItem("zhuanPanJewelCount", _.instance.zhuanPanJewelCount.toString()), 
                            this.clickLuckDrawCount(), this.isRolling = !0, this.isBack = !0, this.zhuanPanBg.eulerAngles = new v(0, 0, 0);
                            for (var t = b.weight_rand(this.zhuanPanWeightArr), i = 0, o = 0; o < this.zhuanPanWeightArr.length; o++) {
                                var a = this.zhuanPanWeightArr[o];
                                if (a.id == t.id) {
                                    i = o, this.getZhuanPanRewardInfo = a;
                                    break;
                                }
                            }
                            this.toRotate = -(2880 + 60 * i);
                        }
                    }
                }, {
                    key: "updateJewelLabel",
                    value: function() {
                        _.instance.zhuanPanJewelCount % 3 == 0 ? 0 == _.instance.zhuanPanJewelCount ? (this.jewelProValue.fillRange = 1 / 3 * _.instance.zhuanPanJewelCount, 
                        this.numT.string = _.instance.zhuanPanJewelCount + "/3") : (this.jewelProValue.fillRange = 1, 
                        this.numT.string = "3/3") : (this.jewelProValue.fillRange = 1 / 3 * (_.instance.zhuanPanJewelCount - parseInt((3 * _.instance.zhuanPanRewardJewelCount).toString())), 
                        this.numT.string = _.instance.zhuanPanJewelCount - parseInt((3 * _.instance.zhuanPanRewardJewelCount).toString()) + "/3");
                    }
                }, {
                    key: "rewardType",
                    value: function() {
                        switch (this.getZhuanPanRewardInfo.id) {
                          case 0:
                            0 == _.instance.zhuanPanSkinUnlock ? b.ShowUI("UIHint", null, null, 1, [ 4 ], [ 100 ]) : (_.instance.unlockSkinId = 3, 
                            _.instance.unlockSkinName = "巨腿蚂蚁", _.instance.showUI("prefabs/ui/UIUnlockSkin"), 
                            _.instance.skinConfig[3].isUnlock = 0, _.instance.zhuanPanSkinUnlock = 0, localStorage.setItem("zhuanPanSkinUnlock", _.instance.zhuanPanSkinUnlock.toString()), 
                            localStorage.setItem("skinConfig", JSON.stringify(_.instance.skinConfig)), this.zhuanPanBg.getChildByName("item1").getChildByName("skinIcon").active = !1, 
                            this.zhuanPanBg.getChildByName("item1").getChildByName("jewelIcon").active = !0, 
                            this.box4.getChildByName("skinIcon").active = !1, this.box4.getChildByName("jewelIcon").active = !0);
                            break;

                          case 1:
                            b.ShowUI("UIHint", null, null, 1, [ 2 ], [ this.getZhuanPanRewardInfo.percent ]);
                            break;

                          case 2:
                            b.ShowUI("UIHint", null, null, 1, [ 0 ], [ this.getZhuanPanRewardInfo.percent ]);
                            break;

                          case 3:
                            b.ShowUI("UIHint", null, null, 1, [ 5 ], [ this.getZhuanPanRewardInfo.percent ]);
                            break;

                          case 4:
                            b.ShowUI("UIHint", null, null, 1, [ 3 ], [ this.getZhuanPanRewardInfo.percent ]);
                            break;

                          case 5:
                            b.ShowUI("UIHint", null, null, 1, [ 1 ], [ this.getZhuanPanRewardInfo.percent ]);
                        }
                    }
                }, {
                    key: "onBackBtnClick",
                    value: function() {
                        if (b.playSound(w.BTNCLICK), this.wxWuChu(), this.clickBackBtnCount++, B == C.WX && _.instance.guideSteps > 30 && 1 == _.instance.wxWuChuBaiMingDanType) {
                            if (_.instance.wxOneWuChuBackBtnCount == _.instance.getWuChuP12Info(1)) {
                                if (this.clickBackBtnCount <= _.instance.getWuChuP12Info(0)) return;
                                _.instance.wxWuChuBackBtnCount = 0;
                            }
                            if (b.getRandomInt(1, 100) <= _.instance.getWuChuP12Info(3) && _.instance.wxWuChuBackBtnCount >= _.instance.getWuChuP12Info(2)) {
                                if (this.clickBackBtnCount <= _.instance.getWuChuP12Info(0)) return;
                                _.instance.wxWuChuBackBtnCount = 0;
                            }
                        }
                        this.isBack || (_.instance.videoCounterTimeGo(), this.node.removeFromParent(), this.node.destroy(), 
                        b.cleanUnuseRes(), _.instance.wxInterAdCount++, m.getScene().emit("SHOW_WX_INTERAD"), 
                        m.getScene().emit("Vivo_showBanner"), m.getScene().emit("MainNativeBannerOPPO", !0), 
                        m.getScene().emit("DestroyNativeItem"), _.instance.onShowBannerType(!0), m.getScene().emit("ShowNativeAdItem", new v(cc.winSize.width / 2 - 358, 200, 0)));
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        var n = this;
                        this.isRolling && (this.zhuanPanBg.eulerAngles.z <= this.toRotate ? (this.isRolling = !1, 
                        this.zhuanPanBg.eulerAngles = new v(0, 0, this.zhuanPanBg.eulerAngles.z % 360), 
                        this.scheduleOnce(function() {
                            n.rewardType(), n.isBack = !1;
                        }, .5)) : this.zhuanPanBg.eulerAngles = this.zhuanPanBg.eulerAngles.add(new v(0, 0, -20))), 
                        this.rotateBg.eulerAngles = this.rotateBg.eulerAngles.add(new v(0, 0, -1));
                        var t, i, o, a = new Date(), s = 23 - a.getHours(), r = 60 - a.getMinutes(), c = 60 - a.getSeconds();
                        t = s < 10 ? "0" + s : "" + s, i = r < 10 ? ":0" + r : ":" + r, o = c < 10 ? ":0" + c : ":" + c, 
                        _.instance.zhuanPanUpdateTime > 0 ? this.timeT.string = _.instance.zhuanPanUpdateTime + "天" + t + i + o : this.timeT.string = t + i + o;
                    }
                }, {
                    key: "showVideoSpr",
                    value: function() {
                        if (B == C.QQ) _.instance.qqBannerWuChuOpen ? 0 == _.instance.qqWuChuConfig.ZHUANPAN_OPEN && (this.videoBtn.getChildByName("video").active = !0, 
                        this.videoBtn.getChildByName("mianfei").setPosition(30, 0, 0)) : S.instance.getTimeQQ() ? (this.videoBtn.getChildByName("video").active = !0, 
                        this.videoBtn.getChildByName("mianfei").setPosition(30, 0, 0)) : 0 == _.instance.qqWuChuConfig.ZHUANPAN_OPEN && (this.videoBtn.getChildByName("video").active = !0, 
                        this.videoBtn.getChildByName("mianfei").setPosition(30, 0, 0)); else if (B == C.WX) {
                            if (_.instance.zhuanPanBoxCount > 0) if (_.instance.wxMaiLiangWuChuData && _.instance.wuchuOpen && -1 != _.instance.wxMaiLiangWuChuData.data.p18.indexOf("yes")) {
                                var e = _.instance.wxMaiLiangWuChuData.data.p13;
                                this.videoBtn.getChildByName("video").active = !1, this.videoBtn.getChildByName("mianfei").setPosition(0, 0, 0);
                                var n = function() {
                                    this.videoBtn.getChildByName("video").active = !0, this.videoBtn.getChildByName("mianfei").setPosition(30, 0, 0);
                                }.bind(this);
                                this.scheduleOnce(n, e);
                            } else this.videoBtn.getChildByName("video").active = !0, this.videoBtn.getChildByName("mianfei").setPosition(30, 0, 0);
                        } else this.videoBtn.getChildByName("video").active = !0, this.videoBtn.getChildByName("mianfei").setPosition(30, 0, 0);
                    }
                } ]), n;
            }()).prototype, "rotateBg", [ U ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Q = t(X.prototype, "itemNodeArray", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Z = t(X.prototype, "timeT", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), $ = t(X.prototype, "rewardProValue", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ee = t(X.prototype, "boxNodeArray", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), ne = t(X.prototype, "boxItemNodeArray", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), te = t(X.prototype, "box4", [ x ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ie = t(X.prototype, "boxItem4", [ R ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), oe = t(X.prototype, "videoBtn", [ O ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ae = t(X.prototype, "zhuanPanBg", [ j ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), se = t(X.prototype, "jewelBg", [ L ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), re = t(X.prototype, "rotateCountT", [ z ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ce = t(X.prototype, "jewelProValue", [ V ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ue = t(X.prototype, "numT", [ H ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), le = t(X.prototype, "jewelCountT", [ E ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), he = t(X.prototype, "jewelRotate", [ G ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), de = t(X.prototype, "proRotate", [ F ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), pe = t(X.prototype, "backBtn", [ W ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ge = t(X.prototype, "leftNode", [ q ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), fe = t(X.prototype, "hand", [ Y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), K = X)) || K)), l._RF.pop();
        }
    };
}), System.register("chunks:///scripts/UIAntEvolution.js", [ "../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Tools.js", "./GameManager.js", "./DataManager.js" ], function(e, n) {
    var t, i, o, a, s, r, c, u, l, h, d, p, g, f, v, m, y, B, C, I, w, k, b, S, _, T, U, N, P, D, A, M, x, R, O, j, L, z, V, H, E, G, F, W, q, Y, K, X, J, Q, Z;
    return e({
        _dec: void 0,
        _dec2: void 0,
        _dec3: void 0,
        _dec4: void 0,
        _dec5: void 0,
        _dec6: void 0,
        _dec7: void 0,
        _dec8: void 0,
        _dec9: void 0,
        _dec10: void 0,
        _class: void 0,
        _class2: void 0,
        _descriptor: void 0,
        _descriptor2: void 0,
        _descriptor3: void 0,
        _descriptor4: void 0,
        _descriptor5: void 0,
        _descriptor6: void 0,
        _descriptor7: void 0,
        _descriptor8: void 0,
        _descriptor9: void 0,
        _temp: void 0
    }), {
        setters: [ function(e) {
            t = e.applyDecoratedDescriptor, i = e.inherits, o = e.classCallCheck, a = e.possibleConstructorReturn, 
            s = e.getPrototypeOf, r = e.initializerDefineProperty, c = e.assertThisInitialized, 
            u = e.createClass;
        }, function(e) {
            l = e.cclegacy, h = e._decorator, d = e.SpriteComponent, p = e.Node, g = e.LabelComponent, 
            f = e.UIOpacityComponent, v = e.tween, m = e.Vec3, y = e.Vec2, B = e.CameraComponent, 
            C = e.Component, I = e.director;
        }, function(e) {
            w = e.YOUMENG_EVENT, k = e.CUR_PLATFORM, b = e.PLATFORM_TYPE, S = e.YOUEMNG_EVENT_ENUM, 
            _ = e.SOUND_TYPE;
        }, function(e) {
            T = e.Tools;
        }, function(e) {
            U = e.GameManager;
        }, function(e) {
            N = e.default;
        } ],
        execute: function() {
            l._RF.push({}, "ea5e0ay1y1F4b6TLn3ct6Zi", "UIAntEvolution", void 0), Q = h.ccclass, 
            Z = h.property, e("UIAntEvolution", (P = Q("UIAntEvolution"), D = Z(d), A = Z(p), 
            M = Z(g), x = Z(g), R = Z(f), O = Z(p), j = Z(p), L = Z(p), z = Z(p), P((E = t((H = function(e) {
                function n() {
                    var e, t;
                    o(this, n);
                    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
                    return t = a(this, (e = s(n)).call.apply(e, [ this ].concat(u))), r(t, "icon", E, c(t)), 
                    r(t, "shengjiNode", G, c(t)), r(t, "labFight", F, c(t)), r(t, "labName", W, c(t)), 
                    r(t, "lignt", q, c(t)), r(t, "star", Y, c(t)), r(t, "btnBack", K, c(t)), r(t, "videoBtn", X, c(t)), 
                    r(t, "hand", J, c(t)), t.isUp = !1, t.isLight = !1, t;
                }
                return i(n, C), u(n, [ {
                    key: "start",
                    value: function() {
                        this.init(), N.instance.youMenDaDian(w.antEvolutionUI_appear), N.instance.UIAntEvolutionIsShow = 1, 
                        localStorage.setItem("UIAntEvolutionIsShow", N.instance.UIAntEvolutionIsShow.toString()), 
                        k == b.ANDROID_XiaoMi ? (v(this.node.getChildByName("btnVideo")).to(.5, {
                            scale: new m(1.1, 1.1, 1)
                        }).to(1, {
                            scale: new m(.9, .9, 1)
                        }).union().repeatForever().start(), this.hand.active = !0, this.schedule(this.updateGuideDoubleClipHand, .35)) : k == b.WX && N.instance.wxMaiLiangWuChuData && 1 == N.instance.wxWuChuBaiMingDanType && 1 == Math.floor(N.instance.wxMaiLiangWuChuData.data.p16) && (this.btnBack.setPosition(new m(0, -440, 0)), 
                        this.videoBtn.setPosition(new m(0, -287, 0)), this.btnBack.active = !1, this.videoBtn.getChildByName("videoSpr").active = !1, 
                        this.videoBtn.getChildByName("spr").setPosition(new m(0, 0, 0)));
                    }
                }, {
                    key: "updateGuideDoubleClipHand",
                    value: function() {
                        var e = this.hand.getChildByName("hand0"), n = this.hand.getChildByName("hand1");
                        e.active = !e.active, n.active = !n.active;
                    }
                }, {
                    key: "init",
                    value: function() {
                        console.log("UIAntEvolution"), U.instance.loaderPlayer(102, new m(0, 210, 0), !0), 
                        T.renderImage(this.icon, new y(530, 210), U.instance.Player.getChildByName("camera").getComponent(B)), 
                        N.instance.UILoad.active = !1;
                    }
                }, {
                    key: "onBtnVideo",
                    value: function() {
                        var e = this;
                        N.instance.youMengVideoClick = S.antEvolution, N.instance.youMenDaDian(w.antEvolutionUI_click), 
                        k == b.WX && N.instance.wxMaiLiangWuChuData && 1 == N.instance.wxWuChuBaiMingDanType && 1 == Math.floor(N.instance.wxMaiLiangWuChuData.data.p16) && this.scheduleOnce(function() {
                            e.btnBack.active = !0, e.videoBtn.getChildByName("videoSpr").active = !0, e.videoBtn.getChildByName("spr").setPosition(new m(33, 0, 0));
                        }, 3), N.instance.shufenVideoID = 38, N.instance.watchVideo("", function() {
                            N.instance.youMenDaDian(w.antEvolutionUI_complete);
                            for (var n = 0; n < U.instance.ants.length; n++) if (0 == U.instance.ants[n].team && 1 == U.instance.ants[n].id) {
                                U.instance.ants[n].dead(), console.log("杀死所有自己一只的兵蚁");
                                break;
                            }
                            N.instance.nestRoomConfig.eggIds.push(101), localStorage.setItem("nestRoomConfig", JSON.stringify(N.instance.nestRoomConfig)), 
                            I.getScene().emit("UpdateFoodShow"), N.instance.updateGameTaskPro(11), N.instance.updateTaskPro(8), 
                            N.instance.updateDayTaskPro(7), N.instance.youMenDaDian(w.huoyiUnlock_complete), 
                            e.onBack();
                        });
                    }
                }, {
                    key: "onBack",
                    value: function() {
                        T.playSound(_.BTNCLICK), this.node.removeFromParent(), this.node.destroy();
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.isLight ? (this.lignt.opacity++, this.lignt.opacity >= 255 && (this.isLight = !1)) : (this.lignt.opacity--, 
                        this.lignt.opacity <= 102 && (this.isLight = !0)), this.isUp ? (this.shengjiNode.setPosition(0, this.shengjiNode.position.y + 1.2, 0), 
                        this.shengjiNode.position.y >= 67 && (this.isUp = !1)) : (this.shengjiNode.setPosition(0, this.shengjiNode.position.y - 1.2, 0), 
                        this.shengjiNode.position.y <= 30 && (this.isUp = !0));
                    }
                } ]), n;
            }()).prototype, "icon", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), G = t(H.prototype, "shengjiNode", [ A ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), F = t(H.prototype, "labFight", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), W = t(H.prototype, "labName", [ x ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), q = t(H.prototype, "lignt", [ R ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Y = t(H.prototype, "star", [ O ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), K = t(H.prototype, "btnBack", [ j ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), X = t(H.prototype, "videoBtn", [ L ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), J = t(H.prototype, "hand", [ z ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), V = H)) || V)), l._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/prerequisite-imports:main", [ "../scripts/Config.js", "../scripts/htSdk.js", "../scripts/Hts.js", "../scripts/UITip.js", "../scripts/ShufenManager.js", "../scripts/Tools.js", "../scripts/CameraFollow.js", "../scripts/BloodBar.js", "../scripts/AntQueen.js", "../scripts/AIController.js", "../scripts/EnvHome.js", "../scripts/ResCleaner.js", "../scripts/UIPVPAccount.js", "../scripts/PvpGameManager.js", "../scripts/UIFBAccount.js", "../scripts/UIFrogAccount.js", "../scripts/FBGameManager.js", "../scripts/FlowerOut.js", "../scripts/Flower.js", "../scripts/Bullet.js", "../scripts/UILoading.js", "../scripts/Ant.js", "../scripts/GameManager.js", "../scripts/Kds.js", "../scripts/DataManager.js", "../scripts/UIBugBox.js", "../scripts/UILookVideo.js", "../scripts/UIShop.js", "../scripts/UISkin.js", "../libs/hzzxsdk.min.js", "../scripts/EvolutionDead.js", "../scripts/FBDoor.js", "../scripts/GameControl.js", "../scripts/HWLoadScene.js", "../scripts/HWYinSiXieYi.js", "../scripts/HuXi.js", "../scripts/IOSCtrl.js", "../scripts/IOSStart.js", "../scripts/JoyStick.js", "../scripts/MapCollision.js", "../scripts/MapShowHide.js", "../scripts/MzSdk.js", "../scripts/NativeCtrl.js", "../scripts/Start.js", "../scripts/TreeFBDoor.js", "../scripts/TreeFBTip.js", "../scripts/UIBlindBox.js", "../scripts/UIBox.js", "../scripts/UIBuild.js", "../scripts/UICaiDan.js", "../scripts/UIEvolve.js", "../scripts/UIEvolveInfo.js", "../scripts/UIExplain.js", "../scripts/UIFBDoor.js", "../scripts/UIFBFight.js", "../scripts/UIFBReborn.js", "../scripts/UIFBTransDoor.js", "../scripts/UIFight.js", "../scripts/UIFlowerTime.js", "../scripts/UIFrogDoor.js", "../scripts/UIFuHuo.js", "../scripts/UIGameTask.js", "../scripts/UIGift.js", "../scripts/UIGuide.js", "../scripts/UIHelpMe.js", "../scripts/UIHint.js", "../scripts/UIHintBug.js", "../scripts/UIHintUnlock.js", "../scripts/UIHuTuiItem.js", "../scripts/UIHuTui.js", "../scripts/UIHuTuiIcon.js", "../scripts/UIHwHint.js", "../scripts/UIKongTou.js", "../scripts/UILaborDay.js", "../scripts/UILimitAward.js", "../scripts/UIMain.js", "../scripts/UIMainTask.js", "../scripts/UIMap.js", "../scripts/UINativeAD.js", "../scripts/UINativeAdItem.js", "../scripts/UINativeBanner.js", "../scripts/UINativeBanner_main.js", "../scripts/UINativeBanner_mainHW.js", "../scripts/UINativeHW.js", "../scripts/UINativeVivo.js", "../scripts/UIOppoYinSi.js", "../scripts/UIPVP.js", "../scripts/UIPVPFight.js", "../scripts/UIRank.js", "../scripts/UIResLacking.js", "../scripts/UIRongHe.js", "../scripts/UIRongHeHint.js", "../scripts/UISet.js", "../scripts/UISevenSign.js", "../scripts/UIShareVideo.js", "../scripts/UIShenMiLiBao.js", "../scripts/UISign.js", "../scripts/UISoldierAnt.js", "../scripts/UISuperAnt.js", "../scripts/UISuperSoldierAnt.js", "../scripts/UITTLuZhi.js", "../scripts/UITask.js", "../scripts/UITipNew.js", "../scripts/UITop.js", "../scripts/UIUnlock.js", "../scripts/UIUnlockSkin.js", "../scripts/UIWXHuTui.js", "../scripts/UIWXShare.js", "../scripts/UIWorkAnt.js", "../scripts/UIZhuanPan.js", "../scripts/UIAntEvolution.js" ], function(e, n) {
    return {
        setters: [ function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {}, function(e) {} ],
        execute: function() {}
    };
}), (e = function(e, n) {
    System.register(e, [ n ], function(e, n) {
        var t;
        return {
            setters: [ function(e) {
                t = e;
            } ],
            execute: function() {
                e(t);
            }
        };
    });
})("project:///assets/scripts/Config.js", "chunks:///scripts/Config.js"), e("project:///assets/scripts/htSdk.js", "chunks:///scripts/htSdk.js"), 
e("project:///assets/scripts/Hts.js", "chunks:///scripts/Hts.js"), e("project:///assets/scripts/UITip.js", "chunks:///scripts/UITip.js"), 
e("project:///assets/scripts/ShufenManager.js", "chunks:///scripts/ShufenManager.js"), 
e("project:///assets/scripts/Tools.js", "chunks:///scripts/Tools.js"), e("project:///assets/scripts/CameraFollow.js", "chunks:///scripts/CameraFollow.js"), 
e("project:///assets/scripts/BloodBar.js", "chunks:///scripts/BloodBar.js"), e("project:///assets/scripts/AntQueen.js", "chunks:///scripts/AntQueen.js"), 
e("project:///assets/scripts/AIController.js", "chunks:///scripts/AIController.js"), 
e("project:///assets/scripts/EnvHome.js", "chunks:///scripts/EnvHome.js"), e("project:///assets/scripts/ResCleaner.js", "chunks:///scripts/ResCleaner.js"), 
e("project:///assets/scripts/UIPVPAccount.js", "chunks:///scripts/UIPVPAccount.js"), 
e("project:///assets/scripts/PvpGameManager.js", "chunks:///scripts/PvpGameManager.js"), 
e("project:///assets/scripts/UIFBAccount.js", "chunks:///scripts/UIFBAccount.js"), 
e("project:///assets/scripts/UIFrogAccount.js", "chunks:///scripts/UIFrogAccount.js"), 
e("project:///assets/scripts/FBGameManager.js", "chunks:///scripts/FBGameManager.js"), 
e("project:///assets/scripts/FlowerOut.js", "chunks:///scripts/FlowerOut.js"), e("project:///assets/scripts/Flower.js", "chunks:///scripts/Flower.js"), 
e("project:///assets/scripts/Bullet.js", "chunks:///scripts/Bullet.js"), e("project:///assets/scripts/UILoading.js", "chunks:///scripts/UILoading.js"), 
e("project:///assets/scripts/Ant.js", "chunks:///scripts/Ant.js"), e("project:///assets/scripts/GameManager.js", "chunks:///scripts/GameManager.js"), 
e("project:///assets/scripts/Kds.js", "chunks:///scripts/Kds.js"), e("project:///assets/scripts/DataManager.js", "chunks:///scripts/DataManager.js"), 
e("project:///assets/scripts/UIBugBox.js", "chunks:///scripts/UIBugBox.js"), e("project:///assets/scripts/UILookVideo.js", "chunks:///scripts/UILookVideo.js"), 
e("project:///assets/scripts/UIShop.js", "chunks:///scripts/UIShop.js"), e("project:///assets/scripts/UISkin.js", "chunks:///scripts/UISkin.js"), 
e("project:///assets/libs/hzzxsdk.min.js", "chunks:///libs/hzzxsdk.min.js"), e("project:///assets/scripts/EvolutionDead.js", "chunks:///scripts/EvolutionDead.js"), 
e("project:///assets/scripts/FBDoor.js", "chunks:///scripts/FBDoor.js"), e("project:///assets/scripts/GameControl.js", "chunks:///scripts/GameControl.js"), 
e("project:///assets/scripts/HWLoadScene.js", "chunks:///scripts/HWLoadScene.js"), 
e("project:///assets/scripts/HWYinSiXieYi.js", "chunks:///scripts/HWYinSiXieYi.js"), 
e("project:///assets/scripts/HuXi.js", "chunks:///scripts/HuXi.js"), e("project:///assets/scripts/IOSCtrl.js", "chunks:///scripts/IOSCtrl.js"), 
e("project:///assets/scripts/IOSStart.js", "chunks:///scripts/IOSStart.js"), e("project:///assets/scripts/JoyStick.js", "chunks:///scripts/JoyStick.js"), 
e("project:///assets/scripts/MapCollision.js", "chunks:///scripts/MapCollision.js"), 
e("project:///assets/scripts/MapShowHide.js", "chunks:///scripts/MapShowHide.js"), 
e("project:///assets/scripts/MzSdk.js", "chunks:///scripts/MzSdk.js"), e("project:///assets/scripts/NativeCtrl.js", "chunks:///scripts/NativeCtrl.js"), 
e("project:///assets/scripts/Start.js", "chunks:///scripts/Start.js"), e("project:///assets/scripts/TreeFBDoor.js", "chunks:///scripts/TreeFBDoor.js"), 
e("project:///assets/scripts/TreeFBTip.js", "chunks:///scripts/TreeFBTip.js"), e("project:///assets/scripts/UIBlindBox.js", "chunks:///scripts/UIBlindBox.js"), 
e("project:///assets/scripts/UIBox.js", "chunks:///scripts/UIBox.js"), e("project:///assets/scripts/UIBuild.js", "chunks:///scripts/UIBuild.js"), 
e("project:///assets/scripts/UICaiDan.js", "chunks:///scripts/UICaiDan.js"), e("project:///assets/scripts/UIEvolve.js", "chunks:///scripts/UIEvolve.js"), 
e("project:///assets/scripts/UIEvolveInfo.js", "chunks:///scripts/UIEvolveInfo.js"), 
e("project:///assets/scripts/UIExplain.js", "chunks:///scripts/UIExplain.js"), e("project:///assets/scripts/UIFBDoor.js", "chunks:///scripts/UIFBDoor.js"), 
e("project:///assets/scripts/UIFBFight.js", "chunks:///scripts/UIFBFight.js"), e("project:///assets/scripts/UIFBReborn.js", "chunks:///scripts/UIFBReborn.js"), 
e("project:///assets/scripts/UIFBTransDoor.js", "chunks:///scripts/UIFBTransDoor.js"), 
e("project:///assets/scripts/UIFight.js", "chunks:///scripts/UIFight.js"), e("project:///assets/scripts/UIFlowerTime.js", "chunks:///scripts/UIFlowerTime.js"), 
e("project:///assets/scripts/UIFrogDoor.js", "chunks:///scripts/UIFrogDoor.js"), 
e("project:///assets/scripts/UIFuHuo.js", "chunks:///scripts/UIFuHuo.js"), e("project:///assets/scripts/UIGameTask.js", "chunks:///scripts/UIGameTask.js"), 
e("project:///assets/scripts/UIGift.js", "chunks:///scripts/UIGift.js"), e("project:///assets/scripts/UIGuide.js", "chunks:///scripts/UIGuide.js"), 
e("project:///assets/scripts/UIHelpMe.js", "chunks:///scripts/UIHelpMe.js"), e("project:///assets/scripts/UIHint.js", "chunks:///scripts/UIHint.js"), 
e("project:///assets/scripts/UIHintBug.js", "chunks:///scripts/UIHintBug.js"), e("project:///assets/scripts/UIHintUnlock.js", "chunks:///scripts/UIHintUnlock.js"), 
e("project:///assets/scripts/UIHuTuiItem.js", "chunks:///scripts/UIHuTuiItem.js"), 
e("project:///assets/scripts/UIHuTui.js", "chunks:///scripts/UIHuTui.js"), e("project:///assets/scripts/UIHuTuiIcon.js", "chunks:///scripts/UIHuTuiIcon.js"), 
e("project:///assets/scripts/UIHwHint.js", "chunks:///scripts/UIHwHint.js"), e("project:///assets/scripts/UIKongTou.js", "chunks:///scripts/UIKongTou.js"), 
e("project:///assets/scripts/UILaborDay.js", "chunks:///scripts/UILaborDay.js"), 
e("project:///assets/scripts/UILimitAward.js", "chunks:///scripts/UILimitAward.js"), 
e("project:///assets/scripts/UIMain.js", "chunks:///scripts/UIMain.js"), e("project:///assets/scripts/UIMainTask.js", "chunks:///scripts/UIMainTask.js"), 
e("project:///assets/scripts/UIMap.js", "chunks:///scripts/UIMap.js"), e("project:///assets/scripts/UINativeAD.js", "chunks:///scripts/UINativeAD.js"), 
e("project:///assets/scripts/UINativeAdItem.js", "chunks:///scripts/UINativeAdItem.js"), 
e("project:///assets/scripts/UINativeBanner.js", "chunks:///scripts/UINativeBanner.js"), 
e("project:///assets/scripts/UINativeBanner_main.js", "chunks:///scripts/UINativeBanner_main.js"), 
e("project:///assets/scripts/UINativeBanner_mainHW.js", "chunks:///scripts/UINativeBanner_mainHW.js"), 
e("project:///assets/scripts/UINativeHW.js", "chunks:///scripts/UINativeHW.js"), 
e("project:///assets/scripts/UINativeVivo.js", "chunks:///scripts/UINativeVivo.js"), 
e("project:///assets/scripts/UIOppoYinSi.js", "chunks:///scripts/UIOppoYinSi.js"), 
e("project:///assets/scripts/UIPVP.js", "chunks:///scripts/UIPVP.js"), e("project:///assets/scripts/UIPVPFight.js", "chunks:///scripts/UIPVPFight.js"), 
e("project:///assets/scripts/UIRank.js", "chunks:///scripts/UIRank.js"), e("project:///assets/scripts/UIResLacking.js", "chunks:///scripts/UIResLacking.js"), 
e("project:///assets/scripts/UIRongHe.js", "chunks:///scripts/UIRongHe.js"), e("project:///assets/scripts/UIRongHeHint.js", "chunks:///scripts/UIRongHeHint.js"), 
e("project:///assets/scripts/UISet.js", "chunks:///scripts/UISet.js"), e("project:///assets/scripts/UISevenSign.js", "chunks:///scripts/UISevenSign.js"), 
e("project:///assets/scripts/UIShareVideo.js", "chunks:///scripts/UIShareVideo.js"), 
e("project:///assets/scripts/UIShenMiLiBao.js", "chunks:///scripts/UIShenMiLiBao.js"), 
e("project:///assets/scripts/UISign.js", "chunks:///scripts/UISign.js"), e("project:///assets/scripts/UISoldierAnt.js", "chunks:///scripts/UISoldierAnt.js"), 
e("project:///assets/scripts/UISuperAnt.js", "chunks:///scripts/UISuperAnt.js"), 
e("project:///assets/scripts/UISuperSoldierAnt.js", "chunks:///scripts/UISuperSoldierAnt.js"), 
e("project:///assets/scripts/UITTLuZhi.js", "chunks:///scripts/UITTLuZhi.js"), e("project:///assets/scripts/UITask.js", "chunks:///scripts/UITask.js"), 
e("project:///assets/scripts/UITipNew.js", "chunks:///scripts/UITipNew.js"), e("project:///assets/scripts/UITop.js", "chunks:///scripts/UITop.js"), 
e("project:///assets/scripts/UIUnlock.js", "chunks:///scripts/UIUnlock.js"), e("project:///assets/scripts/UIUnlockSkin.js", "chunks:///scripts/UIUnlockSkin.js"), 
e("project:///assets/scripts/UIWXHuTui.js", "chunks:///scripts/UIWXHuTui.js"), e("project:///assets/scripts/UIWXShare.js", "chunks:///scripts/UIWXShare.js"), 
e("project:///assets/scripts/UIWorkAnt.js", "chunks:///scripts/UIWorkAnt.js"), e("project:///assets/scripts/UIZhuanPan.js", "chunks:///scripts/UIZhuanPan.js"), 
e("project:///assets/scripts/UIAntEvolution.js", "chunks:///scripts/UIAntEvolution.js"), 
e("virtual:///prerequisite-imports:main", "chunks:///_virtual/prerequisite-imports:main");