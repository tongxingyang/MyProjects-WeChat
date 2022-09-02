var t = require("../@babel/runtime/helpers/get"), e = require("../@babel/runtime/helpers/getPrototypeOf"), i = require("../@babel/runtime/helpers/assertThisInitialized"), a = require("../@babel/runtime/helpers/inherits"), n = require("../@babel/runtime/helpers/createSuper"), s = require("../@babel/runtime/helpers/classCallCheck"), o = require("../@babel/runtime/helpers/createClass");

!function() {
    var r = function() {
        function t() {
            s(this, t);
        }
        return o(t, null, [ {
            key: "loadSprite3D",
            value: function(e, i, a) {
                var n = t.map.get(e);
                if (null != n) {
                    var s = n.clone();
                    i && i.runWith(s);
                } else Laya.Scene3D.load(e, Laya.Handler.create(null, function(n) {
                    if (a) t.map.set(e, n), console.log(e + "runwith1"), i && i.runWith(null), console.log(e + "runwith2"); else {
                        var s = n.clone();
                        t.map.set(e, n), i && i.runWith(s);
                    }
                }));
            }
        } ]), t;
    }();
    r.map = new Map();
    var h, l = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.call(this)).root = null, t.fraction = 0, t.level = 0, 
            t.inedex = 0, t.moveindex = 0, t.moveroot = !1, t.root = t.owner, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.root = this.owner;
            }
        }, {
            key: "position",
            get: function() {
                return this.root.transform.position;
            },
            set: function(t) {
                this.root.transform.position = t;
            }
        } ]), i;
    }(Laya.Script3D);
    !function(t) {
        t.SubPkgUrl = "subPack/", t.AIData = [ {
            id: 1,
            Growth: 1,
            relive: 3
        }, {
            id: 2,
            Growth: 1.04,
            relive: 3
        }, {
            id: 3,
            Growth: 1.08,
            relive: 3
        }, {
            id: 4,
            Growth: 1.12,
            relive: 3
        }, {
            id: 5,
            Growth: 1.16,
            relive: 3
        }, {
            id: 6,
            Growth: 1.2,
            relive: 4
        }, {
            id: 7,
            Growth: 1.24,
            relive: 4
        }, {
            id: 8,
            Growth: 1.28,
            relive: 4
        }, {
            id: 9,
            Growth: 1.32,
            relive: 4
        }, {
            id: 10,
            Growth: 1.36,
            relive: 4
        }, {
            id: 11,
            Growth: 1.4,
            relive: 5
        }, {
            id: 12,
            Growth: 1.44,
            relive: 5
        }, {
            id: 13,
            Growth: 1.48,
            relive: 5
        }, {
            id: 14,
            Growth: 1.52,
            relive: 5
        }, {
            id: 15,
            Growth: 1.56,
            relive: 5
        }, {
            id: 16,
            Growth: 1.6,
            relive: 5
        }, {
            id: 17,
            Growth: 1.64,
            relive: 5
        }, {
            id: 18,
            Growth: 1.68,
            relive: 5
        }, {
            id: 19,
            Growth: 1.72,
            relive: 5
        }, {
            id: 20,
            Growth: 1.76,
            relive: 5
        } ];
    }(h || (h = {}));
    var d = function() {
        function t() {
            s(this, t), this.switch = !0, this.music = !0;
        }
        return o(t, [ {
            key: "playbtn",
            value: function() {
                G.vibrateShort(), GA.Info.isPreview || this.switch && Laya.SoundManager.playSound(h.SubPkgUrl + "audio/btn.mp3");
            }
        }, {
            key: "playcoins",
            value: function() {
                G.vibrateShort(), GA.Info.isPreview || this.switch && Laya.SoundManager.playSound(h.SubPkgUrl + "audio/coins.mp3");
            }
        }, {
            key: "playeat",
            value: function() {
                GA.Info.isPreview || this.switch && Laya.SoundManager.playSound(h.SubPkgUrl + "audio/eat.mp3");
            }
        }, {
            key: "playreward",
            value: function() {
                GA.Info.isPreview || this.switch && Laya.SoundManager.playSound(h.SubPkgUrl + "audio/reward.mp3");
            }
        }, {
            key: "playfirstblood",
            value: function() {
                GA.Info.isPreview || this.switch && Laya.SoundManager.playSound(h.SubPkgUrl + "audio/firstblood.mp3");
            }
        }, {
            key: "playdoublekill",
            value: function() {
                GA.Info.isPreview || this.switch && Laya.SoundManager.playSound(h.SubPkgUrl + "audio/doublekill.mp3");
            }
        }, {
            key: "playtriblekill",
            value: function() {
                GA.Info.isPreview || this.switch && Laya.SoundManager.playSound(h.SubPkgUrl + "audio/triblekill.mp3");
            }
        }, {
            key: "playquadrakill",
            value: function() {
                GA.Info.isPreview || this.switch && Laya.SoundManager.playSound(h.SubPkgUrl + "audio/quadrakill.mp3");
            }
        }, {
            key: "playpentakill",
            value: function() {
                GA.Info.isPreview || this.switch && Laya.SoundManager.playSound(h.SubPkgUrl + "audio/pentakill.mp3");
            }
        }, {
            key: "playlegendary",
            value: function() {
                GA.Info.isPreview || this.switch && Laya.SoundManager.playSound(h.SubPkgUrl + "audio/legendary.mp3");
            }
        }, {
            key: "playleveup",
            value: function() {
                GA.Info.isPreview || this.switch && Laya.timer.once(500, this, function() {
                    Laya.SoundManager.playSound(h.SubPkgUrl + "audio/leveup.mp3");
                });
            }
        }, {
            key: "playimpact",
            value: function() {
                GA.Info.isPreview || this.switch && Laya.SoundManager.playSound(h.SubPkgUrl + "audio/impact.mp3");
            }
        }, {
            key: "playlose",
            value: function() {
                GA.Info.isPreview || this.switch && Laya.SoundManager.playSound(h.SubPkgUrl + "audio/lose.mp3");
            }
        }, {
            key: "playvictory",
            value: function() {
                GA.Info.isPreview || this.switch && Laya.SoundManager.playSound(h.SubPkgUrl + "audio/victory.mp3");
            }
        } ], [ {
            key: "getInstance",
            value: function() {
                return this.instance || (this.instance = new t()), this.instance;
            }
        } ]), t;
    }(), c = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).root = null, t.closebtn = null, t.unlockskin_id = 0, 
            t.skin_bg = null, t.pifu = [], t.pos = new Laya.Vector3(310, 500, 0), t._translate = new Laya.Vector3(0, 0, 0), 
            t.sprite3D = null, t.showBase = !0, t.boxs = [], r.instance = i(t), t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.root = this.owner, this.root.width = Laya.stage.width, this.root.height = Laya.stage.height;
            }
        }, {
            key: "onshowSausageMan",
            value: function() {}
        }, {
            key: "showsprite3d",
            value: function(t, e) {
                var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                this.root || (this.root = this.owner, this.root.width = Laya.stage.width, this.root.height = Laya.stage.height), 
                this.showBase = i, this.rand = t, A.instance.viewport1.width = 1, this.boxs = [], 
                this.sprite3d && this.sprite3d.destroy(!0), t < 8 ? (this.sprite3d = L.instance.createSprite3D("Default_1"), 
                Util.changeMaterial(this.sprite3d.getChildAt(0), "subPack/skin/" + L.instance.jichuskin[t] + ".png")) : this.sprite3d = L.instance.createSprite3D(L.instance.skin_[t - 8].name + 1), 
                a && (this.sprite3d.transform.localScale = new Laya.Vector3(.8, .8, .8)), this.pos.x = e.x, 
                this.pos.y = e.y, A.instance.camera1.convertScreenCoordToOrthographicCoord(this.pos, this._translate), 
                this.sprite3d.transform.position = this._translate, A.instance.scene.addChild(this.sprite3d);
                for (var n = 0; n < 3; n++) this.addbox(t, n, a);
                this.root.visible = !0, A.instance.camera1.normalizedViewport = A.instance.viewport1;
            }
        }, {
            key: "changepos",
            value: function(t) {
                this.pos.x = t.x, this.pos.y = t.y, A.instance.camera1.convertScreenCoordToOrthographicCoord(this.pos, this._translate), 
                this.sprite3d.transform.position = this._translate;
            }
        }, {
            key: "addbox",
            value: function(t, e) {
                var i, a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (t >= 8) {
                    var n = L.instance.skin_[t - 8];
                    i = L.instance.createSprite3D(n.name + (this.boxs.length % (n.num - 1) + 2));
                } else i = L.instance.createSprite3D("Default_2"), Util.changeMaterial(i.getChildAt(0), "subPack/skin/" + L.instance.jichuskin[t] + ".png");
                if (a ? (i.transform.localScale = new Laya.Vector3(.8, .8, .8), i.transform.localPositionZ = 1 + .65 * e) : i.transform.localPositionZ = 1 + .8 * e, 
                this.boxs.push(i), this.sprite3d.addChild(i), 2 == e && this.showBase) {
                    var s = L.instance.createSprite3D("pifuzhanshi_Alpha");
                    Util.SetEffectRenderModeByRootName(s), i.addChild(s), Util.PlayEffect(s);
                    var o = L.instance.createSprite3D("Base");
                    o.transform.localPositionZ = 1.2, i.addChild(o), o.transform.position = this._translate, 
                    o.transform.localPositionZ = 1.2, o.transform.rotationEuler = new Laya.Vector3(-90, 0, 0), 
                    s.transform.localPositionZ = 1, s.transform.rotationEuler = new Laya.Vector3(270, 0, 0);
                }
            }
        }, {
            key: "showthree",
            value: function() {
                A.instance.scene.active = !0, A.instance.viewport1.width = 1, A.instance.camera1.normalizedViewport = A.instance.viewport1, 
                this.root.visible = !0;
            }
        }, {
            key: "closethree",
            value: function() {
                A.instance.scene.active = !1, A.instance.viewport1.width = 0, A.instance.camera1.normalizedViewport = A.instance.viewport1, 
                this.root.visible = !1;
            }
        } ]), r;
    }(Laya.Script);
    c.instance = null;
    var m = function() {
        function t() {
            s(this, t);
        }
        return o(t, null, [ {
            key: "getPaltName",
            value: function() {
                return G.isOPPO() || G.isVivo() || GA.isOppoAndroid() ? "oppo" : G.isKwaigame() ? "kwaigame" : "public";
            }
        }, {
            key: "showView",
            value: function(t) {
                var e = "prefab/" + this.getPaltName() + "/" + t + ".prefab";
                this.loadViewByUrl(e, function(t) {
                    Laya.stage.addChild(t), t.show();
                });
            }
        }, {
            key: "showpublicView",
            value: function(t) {
                var e = "prefab/public/" + t + ".prefab";
                this.loadViewByUrl(e, function(t) {
                    Laya.stage.addChild(t), t.show();
                });
            }
        }, {
            key: "loadViewByUrl",
            value: function(t, e) {
                Laya.loader.load(t, Laya.Handler.create(this, function(t) {
                    if (t) {
                        var i = new Laya.Prefab();
                        i.json = t, t.json && (i.json = t.json);
                        var a = i.create();
                        e(a);
                    }
                }), null, Laya.Loader.JSON);
            }
        }, {
            key: "showUnlockSkinById",
            value: function(t) {}
        }, {
            key: "showEndViewByIsWin",
            value: function(t) {}
        }, {
            key: "showSignview",
            value: function() {
                var t = this;
                if (this.signView) 1 != this.signView && this.signView.show(); else {
                    this.signView = 1;
                    this.loadViewByUrl("prefab/public/signView.prefab", function(e) {
                        t.signView = e, Laya.stage.addChild(e), e.show(), t.hidesign || (t.signView.hide(), 
                        t.hidesign = !0);
                    });
                }
            }
        }, {
            key: "hidesignView",
            value: function() {
                this.signView && (1 != this.signView ? this.signView.hide() : this.hidesign = !1);
            }
        }, {
            key: "showknapsackView",
            value: function() {
                var t = this;
                if (this.knapsackView) 1 != this.knapsackView && this.knapsackView.show(); else {
                    this.knapsackView = 1;
                    this.loadViewByUrl("prefab/public/knapsackView.prefab", function(e) {
                        t.knapsackView = e, Laya.stage.addChild(e), e.show(), t.hideknapsack || (t.knapsackView.hide(), 
                        t.hideknapsack = !0);
                    });
                }
            }
        }, {
            key: "hideknapsackView",
            value: function() {
                this.knapsackView && (1 != this.knapsackView ? this.knapsackView.hide() : this.hideknapsack = !1);
            }
        }, {
            key: "showStartView",
            value: function(t) {
                var e = this;
                if (1 != A.instance.RegimentWar) if (this.StartView) 1 != this.StartView && (this.StartView.onshow(t), 
                this.StartView.show()); else {
                    this.StartView = 1;
                    this.loadViewByUrl("prefab/public/startView.prefab", function(i) {
                        e.StartView = i, Laya.stage.addChild(i), i.onshow(t), i.show(), e.hidestart || (e.StartView.hide(), 
                        e.hidestart = !0);
                    });
                } else t();
            }
        }, {
            key: "hideStartView",
            value: function() {
                this.StartView && (1 != this.StartView ? this.StartView.hide() : this.hidestart = !1);
            }
        }, {
            key: "showtimegetrewardView",
            value: function(t, e) {
                var i = this, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                if (this.timegetrewardView) 1 != this.timegetrewardView && (this.timegetrewardView.onshow(t, e, a), 
                this.timegetrewardView.show()); else {
                    this.timegetrewardView = 1;
                    var n = "prefab/public/timegetrewardView.prefab";
                    this.loadViewByUrl(n, function(n) {
                        i.timegetrewardView = n, Laya.stage.addChild(n), n.onshow(t, e, a), n.show(), i.hidetimegetreward || (i.timegetrewardView.hide(), 
                        i.hidetimegetreward = !0);
                    });
                }
            }
        }, {
            key: "showporptimegetrewardView",
            value: function(t) {
                var e = this;
                if (this.timegetrewardView) 1 != this.timegetrewardView && (this.timegetrewardView.showprop(t), 
                this.timegetrewardView.show()); else {
                    this.timegetrewardView = 1;
                    this.loadViewByUrl("prefab/public/timegetrewardView.prefab", function(i) {
                        e.timegetrewardView = i, Laya.stage.addChild(i), i.showprop(t), i.show(), e.hidetimegetreward || (e.timegetrewardView.hide(), 
                        e.hidetimegetreward = !0);
                    });
                }
            }
        }, {
            key: "hidetimegetrewardView",
            value: function() {
                this.timegetrewardView && (1 != this.timegetrewardView ? this.timegetrewardView.hide() : this.hidetimegetreward = !1);
            }
        }, {
            key: "showgetRewardView",
            value: function(t, e) {
                var i = this, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                if (A.instance.showreward = !0, this.getRewardView) 1 != this.getRewardView && (this.getRewardView.onshow(t, e, a), 
                this.getRewardView.show()); else {
                    this.getRewardView = 1;
                    var n = "prefab/public/getrewardView.prefab";
                    this.loadViewByUrl(n, function(n) {
                        i.getRewardView = n, Laya.stage.addChild(n), n.onshow(t, e, a), n.show(), i.hidegetReward || (i.getRewardView.hide(), 
                        i.hidegetReward = !0);
                    });
                }
            }
        }, {
            key: "hidegetRewardView",
            value: function() {
                this.getRewardView && (1 != this.getRewardView ? this.getRewardView.hide() : this.hidegetReward = !1);
            }
        }, {
            key: "showScrollGameList",
            value: function() {
                var t = this;
                if (G.isWeChat()) if (1 == GD.playgameconfig.Conductance) if (this.scrollGameList) 1 != this.scrollGameList && this.scrollGameList.show(); else {
                    this.scrollGameList = 1;
                    this.loadViewByUrl("prefab/public/ADListView.prefab", function(e) {
                        t.scrollGameList = e, Laya.stage.addChild(e), e.show(), t.hideScrollGame || (t.scrollGameList.hide(), 
                        t.hideScrollGame = !0);
                    });
                } else G.showBanner();
            }
        }, {
            key: "hideScrollGameList",
            value: function() {
                1 == GD.playgameconfig.Conductance ? this.scrollGameList && (1 != this.scrollGameList ? this.scrollGameList.hide() : this.hideScrollGame = !1) : G.closeBannerWithTimes(3);
            }
        }, {
            key: "showLRADList",
            value: function() {
                var t = this;
                if (G.isWeChat()) if (1 == GD.playgameconfig.Conductance) if (this.lRADList) 1 != this.lRADList && this.lRADList.show(); else {
                    this.lRADList = 1;
                    this.loadViewByUrl("prefab/public/LRADList.prefab", function(e) {
                        t.lRADList = e, Laya.stage.addChild(e), e.show();
                    });
                } else G.showCustomAdByTag("top-right");
            }
        }, {
            key: "hideLRADList",
            value: function() {
                1 == GD.playgameconfig.Conductance ? this.lRADList && this.lRADList.hide() : G.hideCustomAdByTag("top-right");
            }
        } ]), t;
    }();
    m.hidesign = !0, m.hideknapsack = !0, m.hidestart = !0, m.hidetimegetreward = !0, 
    m.hidegetReward = !0, m.hideScrollGame = !0;
    var u = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).root = null, t.content = null, 
            t.box_bg = null, t.uid = null, t.closebtn = null, t.headname = null, t.length = null, 
            t.time = null, t.must = null, t.num = null, t.head = null, t.musicbtn = null, t.shockbtn = null, 
            t.toUrl = null, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.root = this.owner, this.root.width = Laya.stage.width, this.root.height = Laya.stage.height, 
                i.instance = this, this.content = this.root.getChildByName("content"), this.content.pos(this.root.width / 2, this.root.height / 2), 
                this.box_bg = this.content.getChildAt(0), this.headname = this.box_bg.getChildByName("head").getChildAt(0), 
                this.uid = this.box_bg.getChildByName("uid"), this.closebtn = this.box_bg.getChildByName("closebtn"), 
                this.time = this.box_bg.getChildByName("time"), this.must = this.box_bg.getChildByName("must"), 
                this.num = this.box_bg.getChildByName("num"), this.length = this.box_bg.getChildByName("length"), 
                this.head = this.box_bg.getChildByName("head"), this.musicbtn = this.box_bg.getChildByName("musicbtn"), 
                this.shockbtn = this.box_bg.getChildByName("shockbtn"), this.toUrl = this.box_bg.getChildByName("toUrl"), 
                this.uid.text = GD.playgameconfig.edition, this.shockbtn.on(Laya.Event.CLICK, this, this.onshockbtn), 
                this.musicbtn.on(Laya.Event.CLICK, this, this.onsoundbtn), this.closebtn.on(Laya.Event.CLICK, this, this.onhide), 
                G.shock ? this.shockbtn.skin = "gamepad/data/on.png" : this.shockbtn.skin = "gamepad/data/off.png", 
                (G.isOPPO() || G.isVivo()) && (this.toUrl.visible = !0), this.toUrl.on(Laya.Event.CLICK, this, function() {
                    m.showView("PrivacyView");
                });
            }
        }, {
            key: "onfuture",
            value: function() {
                d.getInstance().playbtn(), G.showToast("暂未开放，敬请期待。");
            }
        }, {
            key: "onsoundbtn",
            value: function() {
                d.getInstance().switch ? (d.getInstance().switch = !1, Laya.SoundManager.stopMusic(), 
                this.musicbtn.skin = "gamepad/data/off.png") : (d.getInstance().switch = !0, this.musicbtn.skin = "gamepad/data/on.png", 
                d.getInstance().switch && (GA.Info.isPreview || Laya.SoundManager.playMusic(h.SubPkgUrl + "audio/bgm_world.mp3", 0)), 
                d.getInstance().playbtn());
            }
        }, {
            key: "onshockbtn",
            value: function() {
                d.getInstance().playbtn(), G.shock ? (G.shock = !1, this.shockbtn.skin = "gamepad/data/off.png") : (G.shock = !0, 
                this.shockbtn.skin = "gamepad/data/on.png");
            }
        }, {
            key: "onshow",
            value: function() {
                G.hideCustomAdByTag("one"), this.must.text = GameData.maxmust + "", this.time.text = A.instance.GetTime(GameData.maxtime), 
                this.num.text = GameData.maxnum + "", this.length.text = GameData.maxlength + "", 
                this.root.visible = !0, this.head.skin = GameData.avatar, c.instance.closethree(), 
                this.head.getChildAt(0).text = "  " + GameData.nickname, m.showLRADList(), G.showCustomAdByTag("top-left");
            }
        }, {
            key: "onhide",
            value: function() {
                d.getInstance().playbtn(), m.hideLRADList(), G.hideCustomAdByTag("top-left"), G.showCustomAdByTag("one"), 
                c.instance.showthree(), this.root.visible = !1;
            }
        } ]), i;
    }(Laya.Script);
    u.instance = null;
    var g, y = Laya.Scene, v = Laya.ClassUtils.regClass;
    !function(i) {
        !function(i) {
            var r = function(i) {
                a(h, i);
                var r = n(h);
                function h() {
                    return s(this, h), r.call(this);
                }
                return o(h, [ {
                    key: "createChildren",
                    value: function() {
                        t(e(h.prototype), "createChildren", this).call(this), this.loadScene("scene/GameScene");
                    }
                } ]), h;
            }(y);
            i.GameSceneUI = r, v("ui.scene.GameSceneUI", r);
            var h = function(i) {
                a(h, i);
                var r = n(h);
                function h() {
                    return s(this, h), r.call(this);
                }
                return o(h, [ {
                    key: "createChildren",
                    value: function() {
                        t(e(h.prototype), "createChildren", this).call(this), this.loadScene("scene/LoadScene");
                    }
                } ]), h;
            }(y);
            i.LoadSceneUI = h, v("ui.scene.LoadSceneUI", h);
            var l = function(i) {
                a(h, i);
                var r = n(h);
                function h() {
                    return s(this, h), r.call(this);
                }
                return o(h, [ {
                    key: "createChildren",
                    value: function() {
                        t(e(h.prototype), "createChildren", this).call(this), this.loadScene("scene/indexView");
                    }
                } ]), h;
            }(y);
            i.indexViewUI = l, v("ui.scene.indexViewUI", l);
            var d = function(i) {
                a(h, i);
                var r = n(h);
                function h() {
                    return s(this, h), r.call(this);
                }
                return o(h, [ {
                    key: "createChildren",
                    value: function() {
                        t(e(h.prototype), "createChildren", this).call(this), this.loadScene("scene/resultView");
                    }
                } ]), h;
            }(y);
            i.resultViewUI = d, v("ui.scene.resultViewUI", d);
        }(i.scene || (i.scene = {}));
    }(g || (g = {}));
    var p = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).root = null, t.backhome = null, t.listView = null, 
            t.indexshop = null, t.closebtn = null, t.skinname = null, t.level = null, t.pro = null, 
            t.protext = null, t.coin = null, t.skintype = null, t.title = null, t.uptitle = null, 
            t.upcoin = null, t.unlocktitle = null, t.use = null, t.up = null, t.black = null, 
            t.dialogDetail = null, t.right = null, t.left = null, t.start1 = null, t.start2 = null, 
            t.start3 = null, t.start4 = null, t.start5 = null, t.sprice = 0, t.lock = !0, t.index = 0, 
            t.unlockvideo = !1, t.pos = new Laya.Vector2(), t.trayvideo = !0, r.instance = i(t), 
            t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.root = this.owner, this.root.width = Laya.stage.width, this.root.height = Laya.stage.height, 
                this.backhome = this.root.getChildByName("backhome"), this.listView = this.root.getChildByName("listView"), 
                this.listView.renderHandler = new Laya.Handler(this, this.updateItem), this.listView.vScrollBarSkin = "", 
                this.listView.elasticEnabled = !0, this.listView.selectEnable = !0, this.listView.array = GD.skinconfig, 
                this.listView.repeatX = 4, this.listView.repeatY = 6, G.isWidthScreen() && (this.listView.scaleX = 1.2, 
                this.listView.scaleY = 1.2, this.listView.height = 500), this.backhome.on(Laya.Event.CLICK, this, this.onhide), 
                this.indexshop = this.root.getChildByName("indexshop"), this.dialogDetail = this.indexshop.getChildByName("dialogDetail"), 
                this.dialogDetail.width = Laya.stage.width, this.dialogDetail.height = Laya.stage.height;
                var t = this.dialogDetail.getChildByName("details");
                this.closebtn = t.getChildByName("closebtn"), this.skinname = t.getChildByName("skinname"), 
                this.level = this.skinname.getChildByName("level").getChildAt(0), this.pro = t.getChildByName("pro"), 
                this.protext = this.pro.getChildByName("pronum"), this.coin = t.getChildByName("cut").getChildAt(0), 
                this.skintype = t.getChildByName("skintype").getChildByName("skintype"), this.title = t.getChildByName("title"), 
                this.uptitle = t.getChildByName("uptitle"), this.unlocktitle = t.getChildByName("unlocktitle"), 
                this.use = t.getChildByName("use"), this.up = t.getChildByName("up"), this.upcoin = this.up.getChildAt(0), 
                this.black = t.getChildByName("black"), this.right = t.getChildByName("right"), 
                this.left = t.getChildByName("left"), this.indexshop.visible = !1, this.start1 = t.getChildByName("star1"), 
                this.start2 = t.getChildByName("star2"), this.start3 = t.getChildByName("star3"), 
                this.start4 = t.getChildByName("star4"), this.start5 = t.getChildByName("star5"), 
                this.closebtn.on(Laya.Event.CLICK, this, this.onclosedetail), this.right.on(Laya.Event.CLICK, this, this.onright), 
                this.left.on(Laya.Event.CLICK, this, this.onleft), this.use.on(Laya.Event.CLICK, this, this.onUse), 
                this.up.on(Laya.Event.CLICK, this, this.onUp), -1 == GameData.unlockskin.indexOf(GameData.useskin) && (A.instance.tryskin = !0);
            }
        }, {
            key: "onUse",
            value: function() {
                d.getInstance().playbtn(), GameData.useskin != GD.skinconfig[this.index].skinnum && (A.instance.tryskin = !1, 
                GameData.useskin = GD.skinconfig[this.index].skinnum, this.use.skin = "gamepad/index/shop/detail/useing.png", 
                this.listView.array = GD.skinconfig, this.onclosedetail());
            }
        }, {
            key: "onUp",
            value: function() {
                var t = this;
                d.getInstance().playbtn();
                var e = GD.skinconfig[this.index];
                if (G.pushEvent("升级按钮"), this.lock) 1 == e.type ? G.rewardOperation("视频解锁", this.unlockvideo, function() {
                    A.instance.showAddCoinmj1(5, GameData.maxTodyVideo), t.unlockskin();
                }) : 2 == e.type ? G.rewardOperation("分享解锁", !1, function() {
                    A.instance.showAddCoinmj1(5, GameData.maxTodyVideo), t.unlockskin();
                }) : 3 == e.type ? e.price > GameData.Diamonds ? (G.showToast("钻石不足"), GameData.diamond_num < GD.FreeRewardconfig.diamond_num && f.instance.onshow(!1, GD.FreeRewardconfig.diamond)) : (GameData.Diamonds -= e.price, 
                C.instance.updateCoin(), this.unlockskin()) : 4 == e.type ? e.price > GameData.golds ? (G.showToast("金币不足"), 
                f.instance.onshow(!0, GD.FreeRewardconfig.coin)) : (GameData.golds -= e.price, C.instance.updateCoin(), 
                this.unlockskin()) : 5 == e.type ? GameData.detailNum[GD.skinconfig[this.index].id] >= this.sprice ? (GameData.detailNum[GD.skinconfig[this.index].id] -= this.sprice, 
                this.unlockskin()) : A.instance.tryskin && null != GameData.trayskin[GD.skinconfig[this.index].skinnum] && 1 == GameData.trayskin[GD.skinconfig[this.index].skinnum] ? (A.instance.tryskin = !0, 
                GameData.useskin != GD.skinconfig[this.index].skinnum && (A.instance.oldskin = GameData.useskin, 
                A.instance.tryskin = !0, GameData.trayskin[GD.skinconfig[this.index].skinnum] = !0, 
                GameData.useskin = GD.skinconfig[this.index].skinnum, this.listView.array = GD.skinconfig, 
                this.onclosedetail())) : G.rewardOperation("视频试用", this.trayvideo, function() {
                    t.trayskin();
                }) : 6 == e.type ? (m.showSignview(), G.showToast("签到解锁")) : G.showToast("敬请期待"); else if (GameData.skinlevel[GD.skinconfig[this.index].skinnum] < 9) if (5 == e.type) {
                    var i = GameData.detailNum[GD.skinconfig[this.index].id];
                    i >= this.sprice ? (i -= this.sprice, GameData.detailNum[GD.skinconfig[this.index].id] = i, 
                    GameData.skinlevel[GD.skinconfig[this.index].skinnum]++, this.showlevel(this.index), 
                    G.showToast("升级成功"), d.getInstance().playleveup(), C.instance.skin_up.visible = !1, 
                    GameData.upload(), this.listView.array = GD.skinconfig) : G.showToast("碎片不足");
                } else GameData.Diamonds >= this.sprice ? (GameData.Diamonds -= this.sprice, C.instance.updateCoin(), 
                GameData.skinlevel[GD.skinconfig[this.index].skinnum]++, this.showlevel(this.index), 
                G.showToast("升级成功"), d.getInstance().playleveup(), C.instance.skin_up.visible = !1, 
                GameData.upload(), this.listView.array = GD.skinconfig) : (GameData.diamond_num < GD.FreeRewardconfig.diamond_num && f.instance.onshow(!1, GD.FreeRewardconfig.diamond), 
                G.showToast("钻石不足")); else G.showToast("已达到最高等级");
            }
        }, {
            key: "uplistArray",
            value: function() {
                this.listView && (this.listView.array = GD.skinconfig);
            }
        }, {
            key: "trayskin",
            value: function() {
                A.instance.showAddCoinmj1(5, GameData.maxTodyVideo), A.instance.oldskin = GameData.useskin, 
                A.instance.tryskin = !0, GameData.trayskin[GD.skinconfig[this.index].skinnum] = !0, 
                GameData.useskin = GD.skinconfig[this.index].skinnum, this.listView.array = GD.skinconfig, 
                this.onclosedetail();
            }
        }, {
            key: "onleft",
            value: function() {
                d.getInstance().playbtn(), this.dialogDetail.close(), this.index--, this.showdetail(this.index);
            }
        }, {
            key: "onright",
            value: function() {
                d.getInstance().playbtn(), this.dialogDetail.close(), this.index <= 1 && (this.right.visible = !1), 
                this.index++, this.showdetail(this.index);
            }
        }, {
            key: "showlevel",
            value: function(t) {
                var e = !1, i = 0, a = 0, n = 0, s = GD.skinconfig[t].Additional - 1;
                this.uptitle.visible = !0, null == GameData.skinlevel[GD.skinconfig[t].skinnum] && (GameData.skinlevel[GD.skinconfig[t].skinnum] = 0);
                var o = !0;
                switch (-1 == GameData.unlockskin.indexOf(GD.skinconfig[t].skinnum) && (this.upcoin.text = GD.skinconfig[t].price + "", 
                this.level.text = "未解锁", o = !1), GameData.skinlevel[GD.skinconfig[t].skinnum]) {
                  case 0:
                    this.level.text = "等级1", i = GD.snakeLevel[s].level2, a = GD.snakeLevel[s].level, 
                    n = GD.snakePrice[s].level2, o && (this.upcoin.text = n + "");
                    break;

                  case 1:
                    this.level.text = "等级2", i = GD.snakeLevel[s].level3, a = GD.snakeLevel[s].level2, 
                    n = GD.snakePrice[s].level3, o && (this.upcoin.text = n + "");
                    break;

                  case 2:
                    this.level.text = "等级3", i = GD.snakeLevel[s].level4, a = GD.snakeLevel[s].level3, 
                    n = GD.snakePrice[s].level4, o && (this.upcoin.text = n + "");
                    break;

                  case 3:
                    this.level.text = "等级3", i = GD.snakeLevel[s].level5, a = GD.snakeLevel[s].level4, 
                    n = GD.snakePrice[s].level5, o && (this.upcoin.text = n + "");
                    break;

                  case 4:
                    this.level.text = "等级5", i = GD.snakeLevel[s].level6, a = GD.snakeLevel[s].level5, 
                    n = GD.snakePrice[s].level6, o && (this.upcoin.text = n + "");
                    break;

                  case 5:
                    this.level.text = "等级6", i = GD.snakeLevel[s].level7, a = GD.snakeLevel[s].level6, 
                    n = GD.snakePrice[s].level7, o && (this.upcoin.text = n + "");
                    break;

                  case 6:
                    this.level.text = "等级7", i = GD.snakeLevel[s].level8, a = GD.snakeLevel[s].level7, 
                    n = GD.snakePrice[s].level8, o && (this.upcoin.text = n + "");
                    break;

                  case 7:
                    this.level.text = "等级8", i = GD.snakeLevel[s].level9, a = GD.snakeLevel[s].level8, 
                    n = GD.snakePrice[s].level9, o && (this.upcoin.text = n + "");
                    break;

                  case 8:
                    this.level.text = "等级9", i = GD.snakeLevel[s].level10, a = GD.snakeLevel[s].level9, 
                    n = GD.snakePrice[s].level10, o && (this.upcoin.text = n + "");
                    break;

                  case 9:
                    this.level.text = "等级10", i = GD.snakeLevel[s].level10, a = GD.snakeLevel[s].level10, 
                    this.upcoin.text = "max", this.uptitle.visible = !1, e = !0;
                }
                o || (this.level.text = "未解锁"), i < 1 ? (this.title.text = GD.gettitle(GD.snakeLevel[s].title) + "+" + Math.floor(100 * a) + "%", 
                this.uptitle.text = "升级后" + GD.gettitle(GD.snakeLevel[s].title) + "+" + Math.floor(100 * i) + "%") : 3 == GD.snakeLevel[s].title || 4 == GD.snakeLevel[s].title ? (this.title.text = GD.gettitle(GD.snakeLevel[s].title) + "+" + a + "s", 
                this.uptitle.text = "升级后" + GD.gettitle(GD.snakeLevel[s].title) + "+" + i + "s") : (this.title.text = GD.gettitle(GD.snakeLevel[s].title) + "+" + a, 
                this.uptitle.text = "升级后" + GD.gettitle(GD.snakeLevel[s].title) + "+" + i), 1 == GD.skinconfig[this.index].start ? (this.start1.visible = !0, 
                this.start2.visible = !1, this.start3.visible = !1, this.start4.visible = !1, this.start5.visible = !1) : 2 == GD.skinconfig[this.index].start ? (this.start1.visible = !0, 
                this.start2.visible = !0, this.start3.visible = !1, this.start4.visible = !1, this.start5.visible = !1) : 3 == GD.skinconfig[this.index].start ? (this.start1.visible = !0, 
                this.start2.visible = !0, this.start3.visible = !0, this.start4.visible = !1, this.start5.visible = !1) : 4 == GD.skinconfig[this.index].start ? (this.start1.visible = !0, 
                this.start2.visible = !0, this.start3.visible = !0, this.start4.visible = !0, this.start5.visible = !1) : 5 == GD.skinconfig[this.index].start && (this.start1.visible = !0, 
                this.start2.visible = !0, this.start3.visible = !0, this.start4.visible = !0, this.start5.visible = !0), 
                5 == GD.skinconfig[t].type ? this.coin.skin = "gamepad/index/shop/fragments.png" : this.coin.skin = "gamepad/index/Diamonds.png", 
                this.skintype.skin = "gamepad/index/shop/detail/" + GD.snakeLevel[s].title + ".png", 
                e ? (this.pro.value = 1, this.protext.text = "MAX") : o ? (this.sprice = n, 5 == GD.skinconfig[t].type ? (n <= GameData.detailNum[GD.skinconfig[t].id] ? this.pro.value = 1 : this.pro.value = GameData.detailNum[GD.skinconfig[t].id] / n, 
                this.protext.text = GameData.detailNum[GD.skinconfig[t].id] + "/" + n) : 9 == GD.skinconfig[t].type ? (this.pro.value = 0, 
                this.protext.text = "0/" + n) : (n <= GameData.Diamonds ? this.pro.value = 1 : this.pro.value = GameData.Diamonds / n, 
                this.protext.text = GameData.Diamonds + "/" + n)) : 5 == GD.skinconfig[t].type ? (GameData.detailNum[GD.skinconfig[t].id] || (GameData.detailNum[GD.skinconfig[t].id] = 0), 
                this.sprice = GD.skinconfig[t].price, GD.skinconfig[t].price < GameData.detailNum[GD.skinconfig[t].id] ? this.pro.value = 1 : this.pro.value = GameData.detailNum[GD.skinconfig[t].id] / GD.skinconfig[t].price, 
                this.protext.text = GameData.detailNum[GD.skinconfig[t].id] + "/" + GD.skinconfig[t].price) : 9 == GD.skinconfig[t].type ? (this.sprice = GD.skinconfig[t].price, 
                this.pro.value = 0, this.protext.text = "0/" + GD.skinconfig[t].price) : 1 == GD.skinconfig[t].type || 6 == GD.skinconfig[t].type ? (this.sprice = n, 
                n <= GameData.Diamonds ? this.pro.value = 1 : this.pro.value = GameData.Diamonds / n, 
                this.protext.text = GameData.Diamonds + "/" + n) : (this.sprice = GD.skinconfig[t].price, 
                GD.skinconfig[t].price <= GameData.Diamonds ? this.pro.value = 1 : this.pro.value = GameData.Diamonds / GD.skinconfig[t].price, 
                this.protext.text = GameData.Diamonds + "/" + GD.skinconfig[t].price);
            }
        }, {
            key: "showdetail",
            value: function(t) {
                var e = this;
                this.left.visible = !(t <= 0), t >= GD.skinconfig.length - 1 ? this.right.visible = !1 : this.right.visible = !0, 
                this.index = t, this.skinname.text = GD.skinconfig[t].name, this.level.text = GD.snakePrice[t] + "", 
                this.showlevel(t), this.up.visible = !0, -1 == GameData.unlockskin.indexOf(GD.skinconfig[t].skinnum) ? (this.lock = !0, 
                this.unlocktitle.visible = !0, this.use.visible = !1, 1 == GD.skinconfig[t].type ? (this.unlocktitle.text = "获取途径:视频解锁", 
                this.upcoin.visible = !1, this.unlockvideo ? this.up.skin = "gamepad/index/shop/detail/watchlock.png" : this.up.skin = "gamepad/index/shop/detail/sharelock.png") : 2 == GD.skinconfig[t].type ? (this.unlocktitle.text = "获取途径:分享解锁", 
                this.upcoin.visible = !1, this.up.skin = "gamepad/index/shop/detail/sharelock.png") : 3 == GD.skinconfig[t].type ? (this.unlocktitle.text = "获取途径:消耗钻石", 
                this.upcoin.visible = !0, this.up.skin = "gamepad/index/shop/detail/unlock.png") : 5 == GD.skinconfig[t].type ? (this.unlocktitle.text = "获取途径:碎片合成", 
                this.upcoin.visible = !1, GameData.detailNum[GD.skinconfig[this.index].id] >= this.sprice ? this.up.skin = "gamepad/index/shop/detail/fragmentlock.png" : null != GameData.trayskin[GD.skinconfig[t].skinnum] && 1 == GameData.trayskin[GD.skinconfig[t].skinnum] ? (A.instance.tryskin = !0, 
                GameData.useskin != GD.skinconfig[t].skinnum ? this.up.skin = "gamepad/index/shop/detail/use.png" : this.up.skin = "gamepad/index/shop/detail/trying.png") : GameData.useskin == GD.skinconfig[t].skinnum && A.instance.tryskin ? this.up.skin = "gamepad/index/shop/detail/trying.png" : this.trayvideo ? this.up.skin = "gamepad/index/shop/detail/try.png" : this.up.skin = "gamepad/index/shop/detail/sharetry.png") : 6 == GD.skinconfig[t].type ? (this.unlocktitle.text = "获取途径:签到解锁", 
                this.upcoin.visible = !1, this.up.skin = "gamepad/index/shop/gettry.png") : 9 == GD.skinconfig[t].type && (this.unlocktitle.text = "获取途径:邀请解锁", 
                this.upcoin.visible = !1, this.up.visible = !1)) : (this.lock = !1, this.coin.visible = this.pro.visible = !0, 
                this.use.visible = !0, this.upcoin.visible = !0, GameData.useskin == GD.skinconfig[t].skinnum ? this.use.skin = "gamepad/index/shop/detail/useing.png" : this.use.skin = "gamepad/index/shop/detail/use.png", 
                5 == GD.skinconfig[t].type ? this.up.skin = "gamepad/index/shop/detail/fragmentup.png" : this.up.skin = "gamepad/index/shop/detail/uplevel.png", 
                this.unlocktitle.visible = !1), this.dialogDetail.show(!1, !0), Laya.timer.once(200, this, function() {
                    e.pos.setValue(370 + Laya.stage.width / 2 - 640, 300 + Laya.stage.height / 2 - 360), 
                    c.instance.showthree(), c.instance.showsprite3d(GD.skinconfig[e.index].skinnum, e.pos, !1);
                }), this.dialogDetail.zOrder = -1, this.indexshop.visible = !0;
            }
        }, {
            key: "onclosedetail",
            value: function() {
                d.getInstance().playbtn(), this.indexshop.visible = !1, c.instance.closethree(), 
                this.dialogDetail.close();
            }
        }, {
            key: "updateItem",
            value: function(t, e) {
                t.updateItem(e, GD.skinconfig[e]);
            }
        }, {
            key: "onSelect",
            value: function(t) {
                this.showdetail(t);
            }
        }, {
            key: "unlockskin",
            value: function() {
                d.getInstance().playreward(), GameData.unlockskin.push(GD.skinconfig[this.index].skinnum), 
                GameData.useskin = GD.skinconfig[this.index].skinnum, G.pushEvents([ {
                    eventId: "解锁皮肤",
                    detail: {
                        skin: GD.skinconfig[this.index].skinnum
                    }
                } ]), C.instance.rewardDkin(this.index), GameData.upload();
                for (var t = [], e = [], i = 0; i < GD.skinconfig.length; i++) -1 != GameData.unlockskin.indexOf(GD.skinconfig[i].skinnum) ? t.push(GD.skinconfig[i]) : e.push(GD.skinconfig[i]);
                GD.skinconfig = t.concat(e), this.listView.array = GD.skinconfig, C.instance.updatespeed(), 
                this.onclosedetail();
            }
        }, {
            key: "onshow",
            value: function() {
                A.getInstance().button && A.getInstance().button.hide(), GA.isNextRewardVideo("视频解锁") && GA.haveRewardVideo() || !G.isWeChat() ? this.unlockvideo = !0 : this.unlockvideo = !1, 
                GA.isNextRewardVideo("视频试用") && GA.haveRewardVideo() || !G.isWeChat() ? this.trayvideo = !0 : this.trayvideo = !1, 
                this.root.visible = !0, C.instance.closethree = !0, this.listView.array = GD.skinconfig, 
                G.hideCustomAdByTag("one"), c.instance.closethree();
            }
        }, {
            key: "onhide",
            value: function() {
                A.getInstance().button && A.getInstance().button.show(), d.getInstance().playbtn(), 
                this.root.visible = !1, G.showCustomAdByTag("one"), C.instance.closethree = !1, 
                this.pos.setValue(338.5 + Laya.stage.width / 2 - 640, 315.5 + Laya.stage.height / 2 - 460), 
                c.instance.showthree(), c.instance.showsprite3d(GameData.useskin, this.pos);
            }
        } ]), r;
    }(Laya.Script);
    p.instance = null;
    var f = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).root = null, t.content = null, t.reward = null, 
            t.coin = null, t.rewardnum = null, t.title = null, t.closebtn = null, t.have = null, 
            t.dialogDetail = null, t.ys = null, t.closeys = null, t.setAD = null, t.ofcoin = !1, 
            t.num = 0, t.coinnum = 0, t.havereward = !1, t.showthreed = !1, t.havevideo = !1, 
            r.instance = i(t), t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.root = this.owner, this.root.width = Laya.stage.width, this.root.height = Laya.stage.height, 
                this.dialogDetail = this.root.getChildAt(0), this.dialogDetail.width = Laya.stage.width, 
                this.dialogDetail.height = Laya.stage.height, this.content = this.dialogDetail.getChildByName("content"), 
                this.content.pos(this.root.width / 2, this.root.height / 2), this.reward = this.content.getChildByName("reward"), 
                this.coin = this.content.getChildByName("coin"), this.have = this.content.getChildByName("have"), 
                this.setAD = this.content.getChildByName("setAD"), this.closebtn = this.content.getChildByName("closebtn"), 
                this.title = this.content.getChildByName("title"), this.ys = this.content.getChildByName("ys"), 
                this.closeys = this.ys.getChildByName("closeys"), this.rewardnum = this.content.getChildByName("connum"), 
                this.closebtn.on(Laya.Event.CLICK, this, this.onclosebtn), this.have.on(Laya.Event.CLICK, this, this.onhave), 
                this.closeys.on(Laya.Event.CLICK, this, this.oncloseys), this.ys.on(Laya.Event.CLICK, this, this.clickAD), 
                this.setAD.on(Laya.Event.CLICK, this, this.clickAD);
            }
        }, {
            key: "oncloseys",
            value: function(t) {
                t.stopPropagation(), this.ys.visible = !1, this.setAD.visible = !1, this.have.centerX = 0;
            }
        }, {
            key: "clickAD",
            value: function() {
                var t = this;
                G.pushEvent("用户点击1比1oppo原生广告"), G.nativeAdReportAdClick(), G.nativeAdRefresh(Laya.Handler.create(this, function(e) {
                    e && (t.ys.skin = e);
                }));
            }
        }, {
            key: "onshow",
            value: function(t, e) {
                var i = this, a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                this.havereward = a, this.ofcoin = t, this.num = e, this.coinnum = n, A.instance.scene.active ? this.showthreed = !0 : this.showthreed = !1, 
                t ? (this.title.skin = "gamepad/reward/freeCoin.png", this.reward.getChildByName("reward").getChildAt(0).skin = "gamepad/getreward/coin.png") : (this.title.skin = "gamepad/reward/freeDiamonds.png", 
                this.reward.getChildByName("reward").getChildAt(0).skin = "gamepad/getreward/dimonds.png"), 
                this.reward.x = 403;
                var s = G.getNativeAdImgUrl();
                G.isOPPO() && s ? (this.reward.x = 280, this.ys.x = 533, this.ys.skin = s, this.ys.visible = !0, 
                this.setAD.visible = !0, this.have.centerX = -120, GD.stateClick(A.instance.gameTime) && Laya.timer.once(1500, this, function() {
                    i.clickAD(), GameData.dayAudoClickADCount++, GameData.upload();
                })) : (this.have.centerX = 0, this.setAD.visible = !1, this.ys.visible = !1), 0 != n ? (this.reward.x = 280, 
                this.coin.visible = !0, this.coin.getChildAt(1).text = "x" + n, G.isOPPO() && s && (this.reward.x = 196, 
                this.coin.x = 411, this.ys.x = 626)) : this.coin.visible = !1, a ? (this.closebtn.visible = !1, 
                this.title.skin = "gamepad/reward/reward.png", this.have.skin = "gamepad/reward/have.png", 
                this.rewardnum.visible = !1) : (this.rewardnum.visible = !0, this.rewardnum.text = t ? "今日剩余次数:" + (GD.FreeRewardconfig.coin_num - GameData.coin_num) + "/" + GD.FreeRewardconfig.coin_num : "今日剩余次数:" + (GD.FreeRewardconfig.diamond_num - GameData.diamond_num) + "/" + GD.FreeRewardconfig.diamond_num, 
                this.closebtn.visible = !0, GA.haveRewardVideo() && GA.isNextRewardVideo("增加金币或钻石") || !G.isWeChat() ? (this.havevideo = !0, 
                this.have.skin = "gamepad/reward/have_video.png") : (this.havevideo = !1, this.have.skin = "gamepad/reward/have_share.png")), 
                this.reward.getChildAt(1).text = "x" + e, this.dialogDetail.show(!1), this.root.visible = !0, 
                G.isOPPO() ? G.showoppobanner() : (G.showBanner(), G.hideCustomAdByTag("one"), m.showLRADList(), 
                G.showCustomAdByTag("top-left")), c.instance.closethree();
            }
        }, {
            key: "onclosebtn",
            value: function() {
                d.getInstance().playbtn(), this.onhide();
            }
        }, {
            key: "onhide",
            value: function() {
                this.havereward || this.showthreed && (p.instance.root.visible || G.showCustomAdByTag("one"), 
                c.instance.showthree()), this.dialogDetail.close(), G.isWeChat() ? (m.hideLRADList(), 
                G.hideCustomAdByTag("top-left"), G.closeBannerWithTimes(1)) : G.isOPPO() && G.hideoppobanner(), 
                this.root.visible = !1;
            }
        }, {
            key: "rewardcoin",
            value: function() {
                this.havereward ? this.ofcoin ? (GameData.golds += this.num, G.showToast("恭喜获得金币x" + this.num)) : (GameData.Diamonds += this.num, 
                G.showToast("恭喜获得钻石x" + this.num), 0 != this.coinnum && (GameData.golds += this.coinnum, 
                G.showToast("恭喜获得金币x" + this.coinnum))) : this.ofcoin ? (GameData.golds += this.num, 
                GameData.coin_num++, G.showToast("恭喜获得金币x" + this.num)) : (GameData.Diamonds += this.num, 
                GameData.diamond_num++, G.showToast("恭喜获得钻石x" + this.num)), GameData.upload(), C.instance.updateCoin(), 
                C.instance.updatespeed(), this.onhide();
            }
        }, {
            key: "onhave",
            value: function() {
                var t = this;
                d.getInstance().playbtn(), this.havereward ? this.rewardcoin() : G.rewardOperation("增加金币或钻石", this.havevideo, function() {
                    t.rewardcoin(), A.instance.showAddCoinmj1(5, GameData.maxTodyVideo);
                });
            }
        } ]), r;
    }(Laya.Script);
    f.instance = null;
    var k = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).root = null, t.backhome = null, t.listView = null, 
            t.content = null, t.progre = null, t.Distance = 0, t.changelist = !1, t.changevideolist = !1, 
            t.value = 0, t.havevideo = !0, r.instance = i(t), t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.root = this.owner, this.root.width = Laya.stage.width, this.root.height = Laya.stage.height, 
                this.backhome = this.root.getChildByName("backhome"), this.progre = this.root.getChildByName("progre"), 
                this.champion = this.root.getChildByName("champion"), this.listView = this.root.getChildByName("listView"), 
                this.championlabel = this.champion.getChildAt(0), this.listView.renderHandler = new Laya.Handler(this, this.updateItem), 
                this.listView.hScrollBarSkin = "", this.listView.elasticEnabled = !0, this.listView.selectEnable = !0, 
                this.listView.scrollBar.changeHandler = new Laya.Handler(this, this.onScrollBarChange);
                var t = this.showindex();
                GameData.championrewardindex = t, this.listView.array = GD.champion, this.listView.repeatX = GD.champion.length, 
                this.listView.repeatY = 1, this.Distance = 225, this.listView.scrollBar.max = 225 * (this.listView.repeatX + 1) - Laya.stage.width, 
                this.progre.width = 225 * (this.listView.repeatX + 1), this.backhome.on(Laya.Event.CLICK, this, this.onbackhome);
            }
        }, {
            key: "onbackhome",
            value: function() {
                this.onhide();
            }
        }, {
            key: "onScrollBarChange",
            value: function(t) {
                this.listView.scrollBar.max = 225 * (this.listView.repeatX + 1) - Laya.stage.width, 
                this.progre.x = -t / this.listView.scrollBar.max * this.Distance * (this.listView.repeatX + 1 - Laya.stage.width / 225) + 50, 
                A.instance.progreX = this.progre.x, this.champion.x = this.progre.value * this.progre.width - 25 + this.progre.x;
            }
        }, {
            key: "updateItem",
            value: function(t, e) {
                0 == e && (A.instance.showchampin = -1), t.updateItem(e, this.havevideo);
            }
        }, {
            key: "showindex",
            value: function() {
                for (var t = 0, e = 0; e < GD.champion.length; e++) GameData.championscore >= GD.champion[e].num && t++;
                return t;
            }
        }, {
            key: "onshow",
            value: function() {
                this.root.visible = !0;
                var t = this.showindex();
                A.getInstance().button && A.getInstance().button.hide(), GA.haveRewardVideo() && GA.isNextRewardVideo("冠军之路视频获得") || !G.isWeChat() ? this.havevideo = !0 : this.havevideo = !1, 
                G.hideCustomAdByTag("one"), GameData.championrewardindex = t, this.championlabel.text = GameData.championscore + "", 
                this.progre.value = t > 0 ? 225 / this.progre.width * ((GameData.championscore - GD.champion[t - 1].num) / GD.champion[t].num + t) : 225 / this.progre.width * (GameData.championscore / GD.champion[0].num + t), 
                c.instance.closethree(), this.champion.x = this.progre.value * this.progre.width - 25 + this.progre.x, 
                this.listView.array = GD.champion;
            }
        }, {
            key: "onhide",
            value: function() {
                A.getInstance().button && A.getInstance().button.show(), G.showCustomAdByTag("one"), 
                c.instance.showthree(), this.root.visible = !1;
            }
        } ]), r;
    }(Laya.Script);
    k.instance = null;
    var w = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).root = null, t.task1 = null, t.tasktype = null, 
            t.title_bg = null, t.title_bg_title = null, t.explain = null, t.coin = null, t.diamond = null, 
            t.light = null, t.Complete = null, t.index = 0, r.instance = i(t), t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.root = this.owner, this.root.width = Laya.stage.width, this.root.height = Laya.stage.height, 
                this.task1 = this.root.getChildByName("task1"), this.tasktype = this.task1.getChildByName("tasktype"), 
                this.title_bg = this.task1.getChildByName("title_bg"), this.title_bg_title = this.title_bg.getChildAt(0), 
                this.explain = this.task1.getChildByName("explain"), this.coin = this.task1.getChildByName("coin"), 
                this.diamond = this.task1.getChildByName("diamond"), this.light = this.root.getChildByName("light"), 
                this.Complete = this.task1.getChildByName("Complete"), this.owner.on(Laya.Event.CLICK, this, this.onhide), 
                this.parseComplete("noxunhuan", this.light, 0, 222, !1), this.parseComplete("xunhuan", this.light, 0, 222, !0), 
                this.parsewancheng(), this.Complete.visible = !1;
            }
        }, {
            key: "onshow",
            value: function(t) {
                var e = this;
                this.index = t;
                var i = GD.taskconfig[GameData.task[t].num];
                6 == i.type ? (this.tasktype.skin = G.iconskin, this.tasktype.width = 120, this.tasktype.height = 120) : this.tasktype.skin = "gamepad/task/" + (i.type + 1) + ".png", 
                this.title_bg_title.text = i.title, this.explain.text = i.text, 0 != i.coin && 0 != i.diamonds ? (this.diamond.visible = !0, 
                this.coin.centerX = -50, this.diamond.centerX = 50, this.coin.visible = !0, this.coin.getChildAt(2).text = i.coin + "", 
                this.diamond.getChildAt(2).text = i.diamonds + "") : 0 != i.coin ? (this.diamond.visible = !1, 
                this.coin.centerX = 0, this.coin.getChildAt(2).text = i.coin + "") : (this.coin.visible = !1, 
                this.diamond.centerX = 0, this.diamond.getChildAt(2).text = i.diamonds + ""), m.showLRADList(), 
                d.getInstance().playreward(), G.showCustomAdByTag("top-left"), G.hideCustomAdByTag("one"), 
                c.instance.closethree(), this.root.visible = !0, this.wancheng && (this.wancheng.visible = !1, 
                Laya.timer.once(300, this, function() {
                    e.wancheng.visible = !0, e.wancheng.play(0, !1);
                })), G.pushEvents([ {
                    eventId: "完成任务",
                    detail: {
                        task: GameData.task[t].num
                    }
                } ]);
            }
        }, {
            key: "parsewancheng",
            value: function() {
                var t = this, e = new Laya.Templet();
                e.on(Laya.Event.COMPLETE, this, function() {
                    t.wancheng = e.buildArmature(0), t.wancheng.pos(156, 257), t.task1.addChild(t.wancheng), 
                    t.wancheng.play(0, !1), t.wancheng.visible = !1, t.wancheng.player.on(Laya.Event.STOPPED, null, function() {
                        console.log("STOPPED");
                    });
                }), e.loadAni("gamepad/skeleton/wancheng/skeleton.sk");
            }
        }, {
            key: "parseComplete",
            value: function(t, e, i, a, n) {
                var s = new Laya.Templet();
                s.on(Laya.Event.COMPLETE, this, function() {
                    var t = s.buildArmature(0);
                    t.pos(e.width / 2 - i, e.height - a), e.addChild(t), n ? t.play(0, !0) : t.play(0, !1), 
                    t.player.on(Laya.Event.STOPPED, null, function() {
                        console.log("STOPPED");
                    });
                }), s.loadAni("gamepad/skeleton/" + t + "/skeleton.sk");
            }
        }, {
            key: "onhide",
            value: function() {
                var t = this;
                d.getInstance().playbtn();
                var e = GD.taskconfig[GameData.task[this.index].num];
                GameData.task[this.index].receive = !0, m.hideLRADList(), G.hideCustomAdByTag("top-left"), 
                Laya.timer.once(500, this, function() {
                    G.showCustomAdByTag("one"), c.instance.showthree(), t.root.visible = !1;
                }), Laya.timer.once(1e3, this, function() {
                    e.coin > 0 && (GameData.golds += e.coin), e.diamonds > 0 && (GameData.Diamonds += e.diamonds), 
                    GameData.upload(), C.instance.updateCoin(), C.instance.updatespeed();
                }), C.instance.addreward(this.coin.visible, this.diamond.visible);
            }
        } ]), r;
    }(Laya.Script);
    w.instance = null;
    var D = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).root = null, t.closeBtn = null, t.bg = null, 
            t.listView = null, t.ratelistview = null, t.daylistview = null, t.rate = null, t.tip = null, 
            t.taizi = null, t.tai = null, t.title = null, t.ratearray = [], t.haveday = 0, r.instance = i(t), 
            t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                if (!this.root) {
                    this.root = this.owner, this.root.width = Laya.stage.width, this.root.height = Laya.stage.height, 
                    this.bg = this.root.getChildByName("bg"), this.closeBtn = this.bg.getChildByName("closebtn"), 
                    this.tip = this.bg.getChildByName("tip"), this.listView = this.bg.getChildByName("listView"), 
                    this.rate = this.bg.getChildByName("rate"), this.taizi = this.bg.getChildByName("tai"), 
                    this.tai = this.taizi.getChildAt(0), this.title = this.bg.getChildByName("title"), 
                    this.daylistview = this.rate.getChildByName("daylistview"), this.ratelistview = this.rate.getChildByName("listview"), 
                    G.isWidthScreen() ? (this.rate.right = 100, this.listView.right = 106, this.tip.right = 610) : (this.rate.right = 30, 
                    this.listView.right = 36, this.tip.right = 540, this.taizi.x = 51, this.title.x = 42, 
                    this.closeBtn.x = 84), this.listView.renderHandler = new Laya.Handler(this, this.updateItem), 
                    this.closeBtn.on(Laya.Event.CLICK, this, this.onhide), this.ratelistview.renderHandler = new Laya.Handler(this, this.rateupdateItem), 
                    this.daylistview.renderHandler = new Laya.Handler(this, this.dayupdateItem);
                    for (var t = 0; t < 35; t++) this.ratearray[t] = t;
                    this.ratelistview.array = this.ratearray, this.listView.array = [ 0, 0, 0, 0 ], 
                    this.daylistview.array = [ 0, 0, 0, 0, 0, 0, 0 ], this.listView.vScrollBarSkin = "", 
                    this.listView.elasticEnabled = !0;
                }
            }
        }, {
            key: "dayupdateItem",
            value: function(t, e) {
                t.updateItem(e);
            }
        }, {
            key: "rateupdateItem",
            value: function(t, e) {
                t.updateItem(e + 1, this.haveday);
            }
        }, {
            key: "updateItem",
            value: function(t, e) {
                t.updateItem(GameData.flashSaleday, e);
            }
        }, {
            key: "selectActivity",
            value: function() {
                for (var t = !0, e = 0; e < GameData.todaytask.length; e++) 0 == GameData.todaytask[e] && (t = !1);
                t && 0 == GameData.ActivityCompletion[GameData.flashSaleday] && (GameData.ActivityCompletion[GameData.flashSaleday] = 1, 
                GameData.upload());
            }
        }, {
            key: "onshow",
            value: function() {
                this.root || this.onAwake(), this.root.visible = !0, c.instance.closethree(), G.hideCustomAdByTag("one"), 
                m.hideLRADList(), G.hideCustomAdByTag("top-left");
                for (var t = 0, e = 0; e < GameData.todaytask.length; e++) 0 != GameData.todaytask[e] && t++;
                this.haveday = t, this.ratelistview.array = this.ratearray, this.listView.array = [ 0, 0, 0, 0 ], 
                this.daylistview.array = [ 0, 0, 0, 0, 0, 0, 0 ], this.selectActivity();
            }
        }, {
            key: "hideview",
            value: function() {
                this.root.visible = !1;
            }
        }, {
            key: "changearray",
            value: function() {
                for (var t = 0, e = 0; e < GameData.todaytask.length; e++) 0 != GameData.todaytask[e] && t++;
                this.haveday = t, this.ratelistview.array = this.ratearray, this.listView.array = [ 0, 0, 0, 0 ], 
                this.daylistview.array = [ 0, 0, 0, 0, 0, 0, 0 ], this.selectActivity();
            }
        }, {
            key: "showshop",
            value: function() {
                this.onhide(), C.instance.showShopView(), p.instance.listView.scrollBar.value = 306 * Math.floor(8.5), 
                p.instance.showdetail(34);
            }
        }, {
            key: "onhide",
            value: function() {
                C.instance.getred(), c.instance.showthree(), I.instance.changeplay(), d.getInstance().playbtn(), 
                this.root.visible = !1, m.hideLRADList(), G.hideCustomAdByTag("top-left"), G.showCustomAdByTag("one"), 
                GameData.istoday && GameData.flashSaleday < 6 && 2 == GameData.ActivityCompletion[GameData.flashSaleday] && 2 == GameData.todaytask[0] && 2 == GameData.todaytask[1] && 2 == GameData.todaytask[2] && 2 == GameData.todaytask[3] && (GameData.flashSale = [ 0, 0, 0, 0, 0, 0, 0, 0 ], 
                GameData.todaytask = [ 0, 0, 0, 0 ], GameData.flashSaleday++, GameData.istoday = !1), 
                GameData.upload();
            }
        } ]), r;
    }(Laya.Script);
    D.instance = null;
    var b = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).root = null, t.backhome = null, t.listView = null, 
            t.content = null, t.task1 = null, t.task2 = null, t.task3 = null, t.task4 = null, 
            t.task5 = null, r.instance = i(t), t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.root = this.owner, this.root.width = Laya.stage.width, this.root.height = Laya.stage.height, 
                this.backhome = this.root.getChildByName("backhome"), this.listView = this.root.getChildByName("listView"), 
                this.content = this.root.getChildByName("content"), this.content.pos(this.root.width / 2, this.root.height / 2), 
                this.backhome.on(Laya.Event.CLICK, this, this.onhide), this.task1 = this.content.getChildByName("task1"), 
                this.task2 = this.content.getChildByName("task2"), this.task3 = this.content.getChildByName("task3"), 
                this.task4 = this.content.getChildByName("task4"), this.task5 = this.content.getChildByName("task5"), 
                this.showtask(this.task1, GameData.task[0]), this.showtask(this.task2, GameData.task[1]), 
                this.showtask(this.task3, GameData.task[2]), this.showtask(this.task4, GameData.task[3]), 
                this.showtask(this.task5, GameData.task[4]);
            }
        }, {
            key: "parseComplete",
            value: function(t) {
                var e = new Laya.Templet();
                e.on(Laya.Event.COMPLETE, this, function() {
                    var i = e.buildArmature(0);
                    i.scale(.85, .85), i.pos(35, 35), t.addChild(i), i.play(0, !0), i.player.on(Laya.Event.STOPPED, null, function() {
                        console.log("STOPPED");
                    });
                }), e.loadAni("gamepad/light/skeleton.sk");
            }
        }, {
            key: "updatespend",
            value: function() {
                this.speed(this.task1, GameData.task[0]), this.speed(this.task2, GameData.task[1]), 
                this.speed(this.task3, GameData.task[2]), this.speed(this.task4, GameData.task[3]), 
                this.speed(this.task5, GameData.task[4]);
            }
        }, {
            key: "speed",
            value: function(t, e) {
                if (!t.disabled) {
                    var i = GD.taskconfig[e.num], a = t.getChildByName("progarss"), n = a.getChildByName("schedule");
                    if (e.receive) return n.text = "完成", t.getChildByName("Complete").visible = !0, 
                    a.value = 1, void (t.disabled = !0);
                    var s = this.showtypeofpro(e);
                    s >= i.target ? (n.text = "完成", t.getChildByName("Complete").visible = !0, a.value = 1) : (a.value = s / i.target, 
                    n.text = s + "/" + i.target);
                }
            }
        }, {
            key: "showtypeofpro",
            value: function(t) {
                var e = 0;
                switch (t.num) {
                  case 0:
                    e = GameData.endlessnum;
                    break;

                  case 1:
                    e = GameData.maxTodylength;
                    break;

                  case 2:
                    e = GameData.maxTodymust;
                    break;

                  case 3:
                    e = GameData.maxTodyeatStarts;
                    break;

                  case 4:
                    e = GameData.maxTodyeatlevel;
                    break;

                  case 5:
                    e = GameData.maxTodyVideo;
                    break;

                  case 6:
                    e = GameData.navigateTogame;
                }
                return e;
            }
        }, {
            key: "showtask",
            value: function(t, e) {
                var i = this, a = GD.taskconfig[e.num], n = t.getChildByName("tasktype");
                6 == a.type ? (n.skin = G.iconskin, n.width = 120, n.height = 120) : n.skin = "gamepad/task/" + (a.type + 1) + ".png", 
                t.getChildByName("title_bg").getChildAt(0).text = a.title;
                var s = t.getChildByName("progarss"), o = s.getChildByName("schedule"), r = this.showtypeofpro(e);
                r >= a.target || e.receive ? (o.text = "完成", t.getChildByName("Complete").visible = !0, 
                s.value = 1) : (s.value = r / a.target, o.text = r + "/" + a.target), t.getChildByName("explain").text = a.text;
                var h = t.getChildByName("coin"), l = t.getChildByName("diamond");
                0 != a.coin && 0 != a.diamonds ? (l.visible = !0, h.visible = !0, h.getChildAt(2).text = a.coin + "", 
                l.getChildAt(2).text = a.diamonds + "") : 0 != a.coin ? (l.visible = !1, h.centerX = 0, 
                h.getChildAt(2).text = a.coin + "") : (h.visible = !1, l.centerX = 0, l.getChildAt(2).text = a.diamonds + ""), 
                e.receive && (t.getChildByName("Complete").visible = !0, h.getChildByName("hook").visible = !0, 
                l.getChildByName("hook").visible = !0, t.disabled = !0), t.on(Laya.Event.CLICK, this, function(n) {
                    d.getInstance().playbtn(), i.showtypeofpro(e) >= a.target ? (t.getChildByName("Complete").visible = !0, 
                    h.getChildByName("hook").visible = !0, l.getChildByName("hook").visible = !0, t.disabled = !0, 
                    e.receive = !0, i.ontask(a), G.pushEvents([ {
                        eventId: "完成任务",
                        detail: {
                            task: e.num
                        }
                    } ])) : 6 == a.type && C.instance.ondrawer(n);
                });
            }
        }, {
            key: "ontask",
            value: function(t) {
                0 != t.coin && 0 != t.diamonds ? f.instance.onshow(!1, t.diamonds, !0, t.coin) : 0 != t.coin ? f.instance.onshow(!0, t.coin, !0) : f.instance.onshow(!1, t.diamonds, !0);
            }
        }, {
            key: "onshow",
            value: function() {
                A.getInstance().button && A.getInstance().button.hide(), this.root.visible = !0, 
                G.hideCustomAdByTag("one"), this.updatespend(), c.instance.closethree();
            }
        }, {
            key: "onhide",
            value: function() {
                A.getInstance().button && A.getInstance().button.show(), d.getInstance().playbtn(), 
                this.root.visible = !1, G.showCustomAdByTag("one"), c.instance.showthree();
            }
        } ]), r;
    }(Laya.Script);
    b.instance = null;
    var x = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).root = null, t.bg_box = null, t.longth = null, 
            t.longth_level = null, t.longth_add = null, t.longth_up = null, t.Growth = null, 
            t.Growth_level = null, t.Growth_add = null, t.Growth_up = null, t.MagnetTime = null, 
            t.MagnetTime_level = null, t.MagnetTime_add = null, t.MagnetTime_up = null, t.up = null, 
            t.level = null, t.closeBtn = null, t.content = null, t.matching = null, t.listView = null, 
            t.match = null, t.stopmatching = null, t.peopleskin = null, t.peopleskin1 = null, 
            t.peopleskin2 = null, t.upvideo = !1, t.cancelmatching = !1, t.matchsuccess = !1, 
            t.matchcount = 0, t.matchnum = 0, r.instance = i(t), t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.root = this.owner, this.root.width = Laya.stage.width, this.root.height = Laya.stage.height, 
                this.content = this.root.getChildByName("content"), this.content.pos(this.root.width / 2, this.root.height / 2), 
                this.bg_box = this.content.getChildByName("bg_box"), this.closeBtn = this.bg_box.getChildByName("closeBtn"), 
                this.longth = this.bg_box.getChildByName("longth"), this.longth_level = this.longth.getChildByName("level"), 
                this.longth_add = this.longth.getChildByName("add"), this.longth_up = this.longth.getChildByName("up"), 
                this.Growth = this.bg_box.getChildByName("Growth"), this.Growth_level = this.Growth.getChildByName("level"), 
                this.Growth_add = this.Growth.getChildByName("add"), this.Growth_up = this.Growth.getChildByName("up"), 
                this.MagnetTime = this.bg_box.getChildByName("MagnetTime"), this.MagnetTime_level = this.MagnetTime.getChildByName("level"), 
                this.MagnetTime_add = this.MagnetTime.getChildByName("add"), this.MagnetTime_up = this.MagnetTime.getChildByName("up"), 
                this.matching = this.root.getChildByName("matching"), this.match = this.matching.getChildByName("match"), 
                this.stopmatching = this.matching.getChildByName("stopmatching"), this.peopleskin = this.matching.getChildByName("peopleskin"), 
                this.peopleskin1 = this.matching.getChildByName("peopleskin1"), this.peopleskin2 = this.matching.getChildByName("peopleskin2"), 
                this.up = this.bg_box.getChildByName("up"), this.level = this.bg_box.getChildByName("level"), 
                this.closeBtn.on(Laya.Event.CLICK, this, this.onhide), this.up.on(Laya.Event.CLICK, this, this.onup), 
                this.root.zOrder = 999999;
            }
        }, {
            key: "showuplevel",
            value: function() {
                if (this.content.visible = !0, this.matching.visible = !1, GameData.num < GD.upconfig.length - 1) {
                    switch (GD.upconfig[GameData.num].content) {
                      case 0:
                        this.longth_add.text = "+" + GD.upconfig[GameData.num].numerical, this.longth_add.visible = !0, 
                        this.longth_up.visible = !0, this.Growth_add.visible = !1, this.Growth_up.visible = !1, 
                        this.MagnetTime_add.visible = !1, this.MagnetTime_up.visible = !1;
                        break;

                      case 1:
                        this.Growth_add.text = "+" + (100 * GD.upconfig[GameData.num].numerical).toFixed() + "%", 
                        this.Growth_add.visible = !0, this.Growth_up.visible = !0, this.longth_add.visible = !1, 
                        this.longth_up.visible = !1, this.MagnetTime_add.visible = !1, this.MagnetTime_up.visible = !1;
                        break;

                      case 2:
                        this.MagnetTime_add.text = "+" + GD.upconfig[GameData.num].numerical, this.MagnetTime_add.visible = !0, 
                        this.MagnetTime_up.visible = !0, this.Growth_add.visible = !1, this.Growth_up.visible = !1, 
                        this.longth_add.visible = !1, this.longth_up.visible = !1;
                    }
                    this.longth_level.text = "+" + GameData.addlongth, this.Growth_level.text = "+" + (100 * GameData.addGrowth).toFixed() + "%", 
                    this.MagnetTime_level.text = "+" + GameData.addMagnetTime + "s", 1 == GD.upconfig[GameData.num].mode ? (this.up.getChildAt(0).visible = !1, 
                    GA.haveRewardVideo() && GA.isNextRewardVideo("升级页面视频升级") || !G.isWeChat() ? (this.upvideo = !0, 
                    this.up.skin = "gamepad/index/video_up.png") : (this.upvideo = !1, this.up.skin = "gamepad/index/share_up.png")) : (this.up.skin = "gamepad/index/coin_up.png", 
                    this.up.getChildAt(0).visible = !0, this.up.getChildAt(0).text = GD.upconfig[GameData.num].price + ""), 
                    this.level.text = "角色等级" + GD.upconfig[GameData.num].level;
                } else this.Growth_up.visible = !1, this.longth_up.visible = !1, this.Growth_add.visible = !0, 
                this.longth_add.visible = !0, this.MagnetTime_add.visible = !0, this.Growth_add.text = "已满级", 
                this.longth_add.text = "已满级", this.MagnetTime_add.text = "已满级", this.MagnetTime_up.visible = !1, 
                this.longth_level.text = "+" + GameData.addlongth, this.Growth_level.text = "+" + (100 * GameData.addGrowth).toFixed() + "%", 
                this.MagnetTime_level.text = "+" + GameData.addMagnetTime + "s", this.up.visible = !1;
            }
        }, {
            key: "onup",
            value: function() {
                var t = this;
                d.getInstance().playbtn(), d.getInstance().playleveup(), GameData.num < GD.upconfig.length - 1 && (0 == GD.upconfig[GameData.num].mode ? GameData.golds > GD.upconfig[GameData.num].price ? (GameData.golds -= GD.upconfig[GameData.num].price, 
                this.uplevel(), C.instance.updateCoin()) : (GameData.coin_num < GD.FreeRewardconfig.coin_num && C.instance.onCoins(), 
                G.showToast("金币不足")) : G.rewardOperation("升级页面视频升级", this.upvideo, function() {
                    A.instance.showAddCoinmj1(5, GameData.maxTodyVideo), t.uplevel();
                }));
            }
        }, {
            key: "uplevel",
            value: function() {
                switch (GD.upconfig[GameData.num].content) {
                  case 0:
                    GameData.addlongth += Math.floor(GD.upconfig[GameData.num].numerical), GameData.addlongth = Math.floor(GameData.addlongth);
                    break;

                  case 1:
                    GameData.addGrowth = Math.floor(100 * GameData.addGrowth + Math.floor(100 * GD.upconfig[GameData.num].numerical)) / 100;
                    break;

                  case 2:
                    GameData.addMagnetTime = Math.floor(10 * GameData.addMagnetTime + Math.floor(10 * GD.upconfig[GameData.num].numerical)) / 10;
                }
                GameData.maxTodyeatlevel++, GameData.num++, this.showuplevel(), C.instance.updatespeed(), 
                A.instance.showAddCoinmj1(4, GameData.maxTodyeatlevel);
            }
        }, {
            key: "showmatching",
            value: function() {
                c.instance.closethree(), this.content.visible = !1, this.matching.visible = !0, 
                this.root.visible = !0, this.peopleskin1.skin = this.peopleskin2.skin = "gamepad/index/matching/head.png", 
                "" == GA.Info.avatar ? this.peopleskin.skin = "gamepad/index/head.png" : this.peopleskin.skin = GA.Info.avatar, 
                this.match.text = "匹配中", this.stopmatching.skin = "gamepad/index/matching/title.png", 
                this.matchcount = 0, this.matchnum = 0, this.cancelmatching = !1, this.matchtext("匹配中");
            }
        }, {
            key: "closematching",
            value: function() {
                this.matchsuccess || (G.pushEvent("取消匹配"), c.instance.showthree(), this.cancelmatching = !0, 
                d.getInstance().playbtn(), this.root.visible = !1, m.hideLRADList(), G.hideCustomAdByTag("top-left"), 
                G.showCustomAdByTag("one"));
            }
        }, {
            key: "matchtext",
            value: function(t) {
                var e = this;
                this.cancelmatching || (this.matchsuccess ? (this.match.text = "匹配成功", this.stopmatching.skin = "gamepad/index/matching/title.png", 
                Laya.timer.once(500, this, function() {
                    C.instance.playRegimentWar();
                })) : Laya.timer.once(300, this, function() {
                    -1 == e.matchcount ? e.match.text = t : 0 == e.matchcount ? e.match.text = t + "." : 1 == e.matchcount ? e.match.text = t + ".." : 2 == e.matchcount && (e.match.text = t + "...", 
                    0 == e.matchnum ? e.peopleskin1.skin = L.instance.usetrobots[MyMath.rand(0, L.instance.usetrobots.length - 1)].icon : 1 == e.matchnum && (e.peopleskin2.skin = L.instance.usetrobots[MyMath.rand(0, L.instance.usetrobots.length - 1)].icon, 
                    e.matchsuccess = !0), e.matchnum++, e.matchcount = -2), e.matchcount++, e.matchtext(t);
                }));
            }
        }, {
            key: "matchinggame",
            value: function() {
                var t = this;
                Laya.timer.once(500, this, function() {
                    t.match.text = "匹配中.", Laya.timer.once(500, t, function() {
                        t.match.text = "匹配中..", Laya.timer.once(500, t, function() {
                            t.match.text = "匹配中...";
                        });
                    });
                });
            }
        }, {
            key: "onshow",
            value: function() {
                this.root.visible = !0, this.showuplevel(), c.instance.closethree(), G.hideCustomAdByTag("one"), 
                m.showLRADList(), G.showCustomAdByTag("top-left");
            }
        }, {
            key: "onhide",
            value: function() {
                c.instance.showthree(), GameData.upload(), I.instance.changeplay(), d.getInstance().playbtn(), 
                this.root.visible = !1, m.hideLRADList(), G.hideCustomAdByTag("top-left"), G.showCustomAdByTag("one");
            }
        } ]), r;
    }(Laya.Script);
    x.instance = null;
    var C = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).root = null, t.Diamonds = null, t.coins = null, 
            t.head_frame = null, t.head = null, t.task_coins = null, t.task_diamonds = null, 
            t.Leaderboard = null, t.sign = null, t.draw = null, t.moreGame = null, t.invite = null, 
            t.watchVideo = null, t.endless = null, t.newendless = null, t.newcrazy = null, t.RegimentWar = null, 
            t.TimeLimit = null, t.BreakThrough = null, t.Character = null, t.knapsack = null, 
            t.skins = null, t.shadow = null, t.level_up = null, t.skin_up = null, t.content = null, 
            t.flashsale = null, t.rotatoSnake = null, t.openBlindbox = !1, t.click = !1, t.data = [], 
            t.type = 100, t.showdrawer = !1, t.m_TouchBegan = !1, t.m_StartPoint = ex.v2(), 
            t.m_EndPoint = ex.v2(), t.m_MoveDirection = ex.v2(), t.movetochange = !1, t.mMoved = !1, 
            t.mLastPointX = 0, t.closethree = !1, t.countdown = 0, t.coinRenwu = !1, t.diamondRenwu = !1, 
            t.taskdiamonds_Renwu = null, t.taskcoins_Renwu = null, t.taskdiamond = -1, t.fragments = [ 19, 20, 21, 22, 26, 27, 28, 29, 30, 31, 32, 34 ], 
            t.threeDpos = new Laya.Vector2(), t.Grid = null, t.closeindexthree = !1, r.instance = i(t), 
            t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                var t = this;
                if (this.width = Laya.stage.width, this.height = Laya.stage.height, this.root = this.indexView, 
                this.root.width = Laya.stage.width, this.root.height = Laya.stage.height, this.content = this.root.getChildByName("content"), 
                this.content.pos(this.root.width / 2, this.root.height / 2), this.endless = this.content.getChildByName("endless"), 
                G.isOPPO() && (this.endless.skin = "gamepad/index/endless1.png", this.endless.skewX = -1), 
                this.newcrazy = this.content.getChildByName("newcrazy"), this.newendless = this.content.getChildByName("newendless"), 
                G.isLowEndDevice() || GA.Info.underCheck) this.endless.visible = !0, this.newcrazy.visible = !1, 
                this.newendless.visible = !1; else {
                    this.endless.visible = !1, this.newcrazy.visible = !0, this.newendless.visible = !0;
                    var e = new Laya.SpineTemplet(Laya.SpineVersion.v3_7);
                    e.loadAni("gamepad/skeleton/new/new.json"), e.on(Laya.Event.COMPLETE, this, function() {
                        t.newsk = e.buildArmature(), t.newcrazy.addChild(t.newsk), t.newsk.play(0, !0), 
                        t.newsk.x = 52, t.newsk.y = 72;
                    });
                }
                this.coins = this.root.parent.getChildByName("coins"), this.Diamonds = this.root.parent.getChildByName("Diamonds"), 
                this.coins.x = 838 + this.root.width / 2 - 640, this.Diamonds.x = 1078 + this.root.width / 2 - 640, 
                this.coins.y = 48 + this.root.height / 2 - 360, this.Diamonds.y = 46 + this.root.height / 2 - 360, 
                this.RegimentWar = this.content.getChildByName("RegimentWar"), this.Character = this.content.getChildByName("Character"), 
                this.BreakThrough = this.content.getChildByName("BreakThrough"), this.TimeLimit = this.content.getChildByName("TimeLimit"), 
                this.skins = this.content.getChildByName("skins"), this.knapsack = this.content.getChildByName("knapsack"), 
                this.invite = this.root.getChildByName("invite"), this.draw = this.root.getChildByName("draw"), 
                this.sign = this.root.getChildByName("sign"), this.Leaderboard = this.root.getChildByName("Leaderboard"), 
                G.isWeChat() ? this.Leaderboard.visible = !0 : this.Leaderboard.visible = !1, this.Leaderboard.left = 200, 
                this.Leaderboard.visible = 0,
                this.Leaderboard.y = 182, this.flashsale = this.root.getChildByName("flashsale"), 
                this.flashsale.visible = !1, this.moreGame = this.root.getChildByName("moreGame"), 
                this.watchVideo = this.content.getChildByName("watchVideo"), this.task_coins = this.root.getChildByName("task_coins"), 
                this.task_diamonds = this.root.getChildByName("task_diamonds"), this.level_up = this.content.getChildByName("level_up"), 
                this.skin_up = this.content.getChildByName("skin_up"), this.head_frame = this.root.getChildByName("head_frame"), 
                this.head = this.head_frame.getChildByName("head"), this.head_frame.getChildByName("uid").text = GD.levelconfig[GameData.Segment].levelname, 
                this.shadow = this.content.getChildByName("shadow"), this.taskcoins_title = this.task_coins.getChildByName("task_titel"), 
                this.taskcoins_bar = this.task_coins.getChildByName("task_bar"), this.taskcoins_coin = this.task_coins.getChildByName("coin").getChildByName("coin"), 
                this.taskdiamond_title = this.task_diamonds.getChildByName("task_titel"), this.taskdiamond_bar = this.task_diamonds.getChildByName("task_bar"), 
                this.taskdiamond_num = this.taskdiamond_bar.getChildByName("task_num"), this.taskdiamond_coin = this.task_diamonds.getChildByName("coin").getChildByName("coin"), 
                this.rotatoSnake = this.content.getChildByName("rotatoSnake"), this.Blindbox = this.root.getChildByName("Blindbox"), 
                this.Blindbox.x = 120, this.Blindbox.y = 272, this.Clock = this.Blindbox.getChildByName("Clock"), 
                this.Clocktime = this.Clock.getChildByName("time"), this.head_frame.getChildByName("title_name").text = "我", 
                this.moreGame.y = G.offsetY, this.moreGame.x = Laya.stage.width - 200, this.Blindbox.on(Laya.Event.CLICK, this, this.onBlindBox), 
                this.Character.on(Laya.Event.CLICK, this, this.showupView), this.endless.on(Laya.Event.CLICK, this, this.onendlessGame), 
                this.newendless.on(Laya.Event.CLICK, this, this.onendlessGame), this.newcrazy.on(Laya.Event.CLICK, this, this.onnewcrazy), 
                this.RegimentWar.on(Laya.Event.CLICK, this, this.onwar), this.BreakThrough.on(Laya.Event.CLICK, this, function() {
                    G.pushEvent("闯关"), t.onfuture();
                }), this.TimeLimit.on(Laya.Event.CLICK, this, this.onTimeLimitgame), this.skins.on(Laya.Event.CLICK, this, this.showShopView), 
                this.knapsack.on(Laya.Event.CLICK, this, function() {
                    G.pushEvent("背包"), m.showknapsackView();
                }), this.invite.on(Laya.Event.CLICK, this, function() {
                    G.pushEvent("邀请有礼"), m.showpublicView("InviteView");
                }), G.isWeChat() ? this.invite.visible = !0 : this.invite.visible = !1, this.invite.getChildByName("red").visible = !0, 
                this.draw.visible = !0, this.draw.on(Laya.Event.CLICK, this, function() {
                    G.pushEvent("抽奖"), m.showpublicView("luckView");
                }), this.sign.on(Laya.Event.CLICK, this, function() {
                    G.pushEvent("签到"), d.getInstance().playbtn(), m.showSignview();
                }), this.Leaderboard.on(Laya.Event.CLICK, this, function() {
                    G.pushEvent("排行榜"), d.getInstance().playbtn(), m.showpublicView("rankView");
                }), this.flashsale.on(Laya.Event.CLICK, this, function() {
                    G.pushEvent("限时活动"), t.onclickbtn(), d.getInstance().playbtn(), D.instance.onshow();
                }), this.watchVideo.on(Laya.Event.CLICK, this, this.uplongth), this.Diamonds.on(Laya.Event.CLICK, this, this.onDiamonds), 
                this.coins.on(Laya.Event.CLICK, this, this.onCoins), this.head_frame.on(Laya.Event.CLICK, this, this.showdataview), 
                this.task_coins.on(Laya.Event.CLICK, this, this.ontask_coins), this.task_diamonds.on(Laya.Event.CLICK, this, this.ontask_diamonds), 
                this.getskin.on(Laya.Event.CLICK, this, this.onclosegetskin), this.getskin.width = Laya.stage.width, 
                this.getskin.height = Laya.stage.height;
                var i = this.drawer.getChildAt(0).getChildByName("listView");
                0 == GD.playgameconfig.moregame ? (i.spaceX = 20, i.spaceY = 20, i.repeatX = 4, 
                i.repeatY = 3, i.x = 22, A.getInstance().drawarray = L.instance.getRandomArrayElements([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ], 6)) : (i.getChildAt(0).scale(.8, .8), 
                i.repeatX = 5, i.repeatY = 4, i.spaceX = 15, i.spaceY = 15, i.x = 30, A.getInstance().drawarray = L.instance.getRandomArrayElements([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ], 10)), 
                this.drawer.on(Laya.Event.CLICK, this, this.ondrawer), this.draw.visible = !0, this.Blindbox.visible = !0, 
                this.drawer.visible = 0,
                this.moreGame.visible = !1, this.updateCoin(), d.getInstance().switch && (GA.Info.isPreview || Laya.SoundManager.playMusic(h.SubPkgUrl + "audio/bgm_world.mp3", 0)), 
                TimeLine.tween(this.watchVideo).to(1e3, {
                    scaleX: 1.2,
                    scaleY: 1.2
                }).to(1e3, {
                    scaleX: 1,
                    scaleY: 1
                }).delay(1e3).start(!0);
                var a = GA.isToday(Number(GameData.lastSaveTime));
                if (a) 0 == GameData.selectsignday && (GameData.selectsignday = 1), GameData.task.length < 1 && this.randtask(), 
                GameData.istoday && GameData.flashSaleday < 6 && 2 == GameData.ActivityCompletion[GameData.flashSaleday] && 2 == GameData.todaytask[0] && 2 == GameData.todaytask[1] && 2 == GameData.todaytask[2] && 2 == GameData.todaytask[3] && (GameData.flashSale = [ 0, 0, 0, 0, 0, 0, 0, 0 ], 
                GameData.todaytask = [ 0, 0, 0, 0 ], GameData.flashSaleday++, GameData.istoday = !1); else {
                    if (GameData.Logindays++, GameData.score = 0, GameData.addreward = 0, GameData.coin_num = 0, 
                    GameData.diamond_num = 0, GameData.endlessnum = 0, GameData.TimeLimitnum = 0, GameData.maxTodylength = 0, 
                    GameData.maxTodymust = 0, GameData.maxTodyeatStarts = 0, GameData.maxTodyeatlevel = 0, 
                    GameData.maxTodyVideo = 0, GameData.navigateTogame = 0, GameData.warReward = 0, 
                    GameData.endlessReward = 0, GameData.TimeLimitReward = 0, GameData.Todaymaxnum = 0, 
                    GameData.sharenum = 0, GameData.BlindboxNum = 0, GameData.Receiveluckarray = [ 0, 0, 0, 0, 0, 0 ], 
                    GameData.luckindex = 0, GameData.flashSaleday < 6 && (2 == GameData.ActivityCompletion[GameData.flashSaleday] ? (GameData.flashSale = [ 0, 0, 0, 0, 0, 0, 0, 0 ], 
                    GameData.todaytask = [ 0, 0, 0, 0 ], GameData.flashSaleday++) : GameData.istoday = !0), 
                    GameData.flashSaleday > 6 && (GameData.flashSaleday = 6), GameData.firstflash = !0, 
                    GameData.endlessnumReceive = 0, GameData.TimeLimitReceive = 0, GameData.TimeLimitscore = 0, 
                    GameData.endlessscore = 0, GameData.Crazyscore = 0, GameData.CrazynumReceive = 0, 
                    GameData.selectsignday == GameData.signday && GameData.selectsignday++, GameData.noinfo = !0, 
                    GameData.daytime = Date.now(), GameData.luckarray.length > 2) {
                        var n = L.instance.getRandomArrayElements(GD.grand, 2), s = L.instance.getRandomArrayElements(GD.plain, 4);
                        -1 == GameData.unlockskin.indexOf(GD.grand[8].id - 1) && n[0].id != GD.grand[8].id && n.splice(1, 1, GD.grand[8]), 
                        GameData.luckarray = n.concat(s), GameData.luckarray.sort(function(t, e) {
                            return Math.random() - .5;
                        });
                        for (var o = 0; o < GameData.luckarray.length; o++) GameData.luckarray[o].number = o;
                    }
                    this.randtask();
                }
                if (GameData.luckarray.length <= 1) {
                    var r = L.instance.getRandomArrayElements(GD.grand, 2), l = L.instance.getRandomArrayElements(GD.plain, 4);
                    -1 == GameData.unlockskin.indexOf(GD.grand[8].id - 1) && r[0].id != GD.grand[8].id && r.splice(1, 1, GD.grand[8]), 
                    GameData.luckarray = r.concat(l), GameData.luckarray.sort(function(t, e) {
                        return Math.random() - .5;
                    });
                    for (var u = 0; u < GameData.luckarray.length; u++) GameData.luckarray[u].number = u;
                }
                for (var g = 0; g < GD.timelimitedreward[GameData.flashSaleday].task.length; g++) GameData.todaytasknum[g] = GD.timelimitedreward[GameData.flashSaleday].task[g][0] - 1;
                for (var y = !1, v = 0; v < GameData.todaytask.length; v++) 1 == GameData.todaytask[v] && (y = !0);
                GameData.luckindex >= 6 ? this.draw.getChildByName("red").visible = !1 : this.draw.getChildByName("red").visible = !0, 
                this.flashsale.getChildByName("red").visible = !!y, -1 == GameData.unlockskin.indexOf(GameData.useskin) && (A.getInstance().tryskin = !0), 
                A.getInstance().rand = GameData.useskin, this.threeDpos.setValue(338.5 + Laya.stage.width / 2 - 640, 315.5 + Laya.stage.height / 2 - 460), 
                c.instance.showsprite3d(GameData.useskin, this.threeDpos), Laya.Scene.open("scene/GameScene.scene", !1), 
                this.onshow(), A.getInstance().firstindex && (A.getInstance().setFriends(), A.getInstance().firstindex = !1, 
                G.isOPPO() && (G.shock = !1), (G.isOPPO() || G.isVivo()) && (GameData.isNewPlayer || a && !GA.Info.underCheck || m.showView("PrivacyTipView"))), 
                c.instance.showthree(), this.updatetask_coins(), this.updatetask_diamonds();
                var p = new Laya.Templet();
                p.on(Laya.Event.COMPLETE, this, function() {
                    t.taskcoins_Renwu = p.buildArmature(0), t.taskcoins_Renwu.pos(t.task_coins.width / 2 - 0, t.task_coins.height - 60), 
                    t.task_coins.addChild(t.taskcoins_Renwu), t.taskcoins_Renwu.play(0, !0), t.taskcoins_Renwu.player.on(Laya.Event.STOPPED, null, function() {
                        console.log("STOPPED");
                    }), t.taskcoins_Renwu.visible = !1, t.havecoinRenwu(t.coinRenwu);
                }), p.loadAni("gamepad/skeleton/renwu/skeleton.sk");
                var f = new Laya.Templet();
                f.on(Laya.Event.COMPLETE, this, function() {
                    t.taskdiamonds_Renwu = f.buildArmature(0), t.taskdiamonds_Renwu.pos(t.task_diamonds.width / 2 - 0, t.task_diamonds.height - 60), 
                    t.task_diamonds.addChild(t.taskdiamonds_Renwu), t.taskdiamonds_Renwu.play(0, !0), 
                    t.taskdiamonds_Renwu.player.on(Laya.Event.STOPPED, null, function() {
                        console.log("STOPPED");
                    }), t.havediamondRenwu(t.diamondRenwu);
                }), f.loadAni("gamepad/skeleton/renwu/skeleton.sk"), this.parseComplete("uplevel", this.level_up, 0, 0), 
                this.parseComplete("uplevel", this.skin_up, 0, 0), this.parseComplete("sign", this.sign, -8, 40), 
                this.skin_up.visible = !1, this.rotatoSnake.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), 
                this.rotatoSnake.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), this.rotatoSnake.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp), 
                this.rotatoSnake.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.rotatoSnake.on(Laya.Event.CLICK, this, this.showShopView), 
                Laya.timer.frameLoop(1, this, this.onUpdate), GA.getNavigationList(this.type, 20, []).then(function(e) {
                    t.data = e, t.updateWithData();
                }).catch(function(t) {
                    console.warn(t);
                }), Laya.stage.on(Laya.Event.CLICK, this, function(e) {
                    t.showdrawer && (e.stopPropagation(), t.ondrawer(e));
                }), !GameData.isNewPlayer && A.getInstance().startgame && (A.getInstance().startgame = !1, 
                GameData.signday != GameData.selectsignday && (null == I.instance ? m.showSignview() : I.instance.playgame || m.showSignview()));
                var k = this.sign.getChildByName("red");
                k.zOrder = 9999, GameData.signday != GameData.selectsignday ? k.visible = !0 : k.visible = !1, 
                G.getinvite(), GameData.upload();
            }
        }, {
            key: "onBlindBox",
            value: function() {
                GameData.BlindboxNum < GD.playgameconfig.Clocknum ? this.openBlindbox ? (G.pushEvent("打开盲盒"), 
                m.showgetRewardView(4, MyMath.rand(200, 400), MyMath.rand(40, 80)), GameData.BlindboxNum++, 
                this.openBlindbox = !1, A.getInstance().ClockTime = 0, GameData.upload()) : G.showToast("时间未到") : G.showToast("今日盲盒次数已用尽");
            }
        }, {
            key: "onClockTime",
            value: function() {
                GameData.BlindboxNum < GD.playgameconfig.Clocknum ? this.openBlindbox || (0 == GameData.BlindboxNum ? (this.Clock.visible = !1, 
                this.openBlindbox = !0, this.Blindbox.getChildByName("red").visible = !0) : (this.Clocktime.text = A.getInstance().GetminuteTime(60 * GD.playgameconfig.Clock - A.getInstance().ClockTime), 
                60 * GD.playgameconfig.Clock - A.getInstance().ClockTime <= 0 ? (this.Clock.visible = !1, 
                this.openBlindbox = !0, this.Blindbox.getChildByName("red").visible = !0) : (this.Clock.visible = !0, 
                this.Blindbox.getChildByName("red").visible = !1))) : (this.Clock.visible = !0, 
                this.Blindbox.getChildByName("red").visible = !1, Laya.timer.clear(this, this.onClockTime));
            }
        }, {
            key: "onBlindbox",
            value: function() {
                this.openBlindbox || (GameData.BlindboxNum < 10 ? G.showToast("资源加载中,稍后再试。") : G.showToast("今日次数以用尽，请明天再来"));
            }
        }, {
            key: "onwar",
            value: function() {
                A.instance.plane ? (G.pushEvent("团战"), this.click || (this.onclickbtn(), G.isOPPO() ? G.showoppobanner() : G.showBanner(), 
                x.instance.showmatching())) : G.showToast("资源加载中,稍后再试。");
            }
        }, {
            key: "playRegimentWar",
            value: function() {
                A.instance.RegimentWar = !0, A.instance.TimeLimit = !1, A.instance.CrazyMode = !1, 
                GameData.RegimentWarnum++, GameData.upRegimentWarnum = !0, G.isOPPO() ? G.hideoppobanner() : G.closeBannerWithTimes(1), 
                this.playgame();
            }
        }, {
            key: "onclickbtn",
            value: function() {
                var t = this;
                this.click || (this.click = !0, Laya.timer.once(800, this, function() {
                    t.click = !1;
                }));
            }
        }, {
            key: "ondrawer",
            value: function(t) {
                if (t.stopPropagation(), !this.click) if (this.onclickbtn(), d.getInstance().playbtn(), 
                G.isOPPO()) OppoADM.showGamePortalAd(); else if (1 == GD.playgameconfig.matrix) if (this.drawer.getChildAt(0).visible = !1, 
                this.showdrawer) this.showdrawer = !1, G.hideCustomAdByTag("top"), this.drawer.skin = "gamepad/index/drawer.png", 
                G.pushEvent("关闭抽屉"), Laya.Tween.to(this.drawer, {
                    right: -1
                }, 500); else {
                    this.showdrawer = !0;
                    var e = G.showCustomAdByTag("top");
                    this.drawer.skin = "gamepad/index/drawer_close.png", e ? Laya.Tween.to(this.drawer, {
                        right: GA.Info.resolution.width / Laya.stage.width * 376
                    }, 500) : (this.drawer.getChildAt(0).visible = !0, Laya.Tween.to(this.drawer, {
                        right: 649
                    }, 500)), G.pushEvent("打开抽屉");
                } else this.showdrawer ? (this.showdrawer = !1, this.drawer.skin = "gamepad/index/drawer.png", 
                G.pushEvent("关闭抽屉"), Laya.Tween.to(this.drawer, {
                    right: -1
                }, 500)) : (this.showdrawer = !0, this.drawer.skin = "gamepad/index/drawer_close.png", 
                Laya.Tween.to(this.drawer, {
                    right: 649
                }, 500), G.pushEvent("打开抽屉"));
            }
        }, {
            key: "updateItem",
            value: function(t, e) {
                t.updateItem(this.data[e], this.type, this.pageName, e);
            }
        }, {
            key: "updateWithData",
            value: function() {
                var t = this.drawer.getChildAt(0).getChildByName("listView");
                t.selectEnable = !0, t.renderHandler = new Laya.Handler(this, this.updateItem), 
                t.array = this.data;
            }
        }, {
            key: "onMouseDown",
            value: function() {
                var t = Laya.stage.mouseX, e = Laya.stage.mouseY;
                this.touchStart(t, e), this.m_TouchBegan = !0;
            }
        }, {
            key: "onMouseMove",
            value: function() {
                if (this.m_TouchBegan) {
                    var t = Laya.stage.mouseX, e = Laya.stage.mouseY;
                    this.touchMove(t, e);
                }
            }
        }, {
            key: "onMouseUp",
            value: function() {
                this.m_TouchBegan && (this.m_EndPoint.x = 0, this.m_EndPoint.y = 0, this.m_StartPoint.x = 0, 
                this.m_StartPoint.y = 0, this.touchEnd()), this.m_TouchBegan = !1;
            }
        }, {
            key: "touchStart",
            value: function(t, e) {
                t < Laya.stage.width / 2 && (this.m_TouchBegan = !0, this.mMoved = !1, this.m_StartPoint.x = t, 
                this.m_StartPoint.y = e, this.mLastPointX = t);
            }
        }, {
            key: "touchMove",
            value: function(t, e) {
                if (this.m_TouchBegan) {
                    var i = .5 * -(t - this.mLastPointX);
                    c.instance.sprite3d.transform.rotate(ex.v3temp(0, 0, i), !0, !1), this.mLastPointX = t, 
                    ex.pDistance(this.m_StartPoint, ex.v2temp(t, e)) >= 10 && (this.mMoved = !0);
                }
            }
        }, {
            key: "touchEnd",
            value: function() {
                this.m_TouchBegan && !this.mMoved && (Laya.stage.mouseX, Laya.stage.mouseY, Laya.stage.width, 
                Laya.stage.height), this.m_TouchBegan = !1;
            }
        }, {
            key: "onUpdate",
            value: function() {
                var t = Laya.timer.delta / 1e3;
                if (this.countdown >= 3 ? (this.countdown = 0, this.updatespeed(!0)) : this.countdown += t, 
                !this.closethree && ex.isValidTimerDelta() && !this.m_TouchBegan) {
                    var e = 20 * t;
                    c.instance.sprite3d.transform.rotate(ex.v3temp(0, 0, e), !1, !1);
                }
            }
        }, {
            key: "havecoinRenwu",
            value: function(t) {
                this.coinRenwu = t, this.taskcoins_Renwu && (this.taskcoins_Renwu.visible = !t);
            }
        }, {
            key: "havediamondRenwu",
            value: function(t) {
                this.diamondRenwu = t, this.taskdiamonds_Renwu && (this.taskdiamonds_Renwu.visible = !t);
            }
        }, {
            key: "testTask",
            value: function() {
                for (var t = -1, e = 0; e < GameData.task.length; e++) if (0 == GameData.task[e].receive && e != this.taskdiamond) {
                    var i = GD.taskconfig[GameData.task[e].num];
                    this.showtypeofpro(GameData.task[e]) >= i.target && (t = e);
                }
                return t;
            }
        }, {
            key: "updatespeed",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this.task_diamonds.visible) {
                    var e = this.testTask();
                    if (-1 == e) {
                        if (-1 == this.taskdiamond) return void (this.task_diamonds.visible = !1);
                        var i = GD.taskconfig[GameData.task[this.taskdiamond].num], a = this.showtypeofpro(GameData.task[this.taskdiamond]);
                        if (GameData.task[this.taskdiamond].receive) {
                            var n = this.getotherTask();
                            if (-1 == n) return void (this.task_diamonds.visible = !1);
                            this.taskdiamond = n, this.Flipimage();
                        } else if (t && a < i.target) {
                            var s = this.getotherTask();
                            -1 != s && (this.taskdiamond = s, this.Flipimage());
                        }
                        i = GD.taskconfig[GameData.task[this.taskdiamond].num], this.taskdiamond_title.text = i.text, 
                        i.diamonds > 0 ? this.taskdiamond_coin.skin = "gamepad/index/have_Diamonds.png" : this.taskdiamond_coin.skin = "gamepad/index/have_coins.png", 
                        (a = this.showtypeofpro(GameData.task[this.taskdiamond])) >= i.target ? (this.taskdiamond_num.text = "完成", 
                        this.task_diamonds.getChildByName("red").visible = !0, this.havediamondRenwu(!1), 
                        this.taskdiamond_bar.value = 1, this.taskdiamond_num.fontSize = 22) : (this.taskdiamond_bar.value = a / i.target, 
                        this.havediamondRenwu(!0), this.task_diamonds.getChildByName("red").visible = !1, 
                        this.taskdiamond_num.fontSize = 12, this.taskdiamond_num.text = a + "/" + i.target), 
                        this.imagetoFlip(), this.taskdiamond_num.centerX = 0;
                    } else {
                        this.taskdiamond = e, this.taskdiamond_num.text = "完成", this.taskdiamond_bar.value = 1, 
                        this.taskdiamond_num.fontSize = 22, this.taskdiamond_num.centerX = 0, this.task_diamonds.getChildByName("red").visible = !0, 
                        this.havediamondRenwu(!1);
                        var o = GD.taskconfig[GameData.task[this.taskdiamond].num];
                        this.taskdiamond_title.text = o.text, o.diamonds > 0 ? this.taskdiamond_coin.skin = "gamepad/index/have_Diamonds.png" : this.taskdiamond_coin.skin = "gamepad/index/have_coins.png";
                    }
                }
            }
        }, {
            key: "getotherTask",
            value: function() {
                for (var t = -1, e = 0; e < GameData.task.length; e++) GameData.task[e].receive || this.taskdiamond == e || (t = e);
                return t;
            }
        }, {
            key: "Flipimage",
            value: function() {
                Laya.Tween.to(this.taskdiamond_title, {
                    scaleX: 0
                }, 500), Laya.Tween.to(this.taskdiamond_bar, {
                    scaleX: 0
                }, 500), Laya.Tween.to(this.taskdiamond_num, {
                    scaleX: 0
                }, 500), Laya.Tween.to(this.taskdiamond_coin, {
                    scaleX: 0
                }, 500);
            }
        }, {
            key: "imagetoFlip",
            value: function() {
                var t = this;
                Laya.timer.once(500, this, function() {
                    Laya.Tween.to(t.taskdiamond_title, {
                        scaleX: 1
                    }, 500), Laya.Tween.to(t.taskdiamond_bar, {
                        scaleX: 1
                    }, 500), Laya.Tween.to(t.taskdiamond_num, {
                        scaleX: 1
                    }, 500), Laya.Tween.to(t.taskdiamond_coin, {
                        scaleX: 1
                    }, 500);
                });
            }
        }, {
            key: "parseComplete",
            value: function(t, e, i, a) {
                var n = new Laya.Templet();
                n.on(Laya.Event.COMPLETE, this, function() {
                    var t = n.buildArmature(0);
                    t.pos(e.width / 2 - i, e.height - a), e.addChild(t), t.play(0, !0), t.player.on(Laya.Event.STOPPED, null, function() {
                        console.log("STOPPED");
                    });
                }), n.loadAni("gamepad/skeleton/" + t + "/skeleton.sk");
            }
        }, {
            key: "parselightComplete",
            value: function(t) {
                var e = new Laya.Templet();
                e.on(Laya.Event.COMPLETE, this, function() {
                    var i = e.buildArmature(0);
                    i.pos(t.x, t.y), Laya.stage.addChild(i), i.play(0, !0), i.player.on(Laya.Event.STOPPED, null, function() {
                        console.log("STOPPED");
                    });
                }), e.loadAni("gamepad/light/skeleton.sk");
            }
        }, {
            key: "updatetask_coins",
            value: function() {
                var t = !0, e = (this.testTask(), -1);
                this.taskcoins_title.text = GameData.championscore + "";
                for (var i = 0; i < GD.champion.length; i++) GD.champion[i].num > GameData.championscore && t && (t = !1, 
                e = i);
                if (-1 == e) this.taskcoins_bar.value = 1, this.taskcoins_coin.skin = ""; else {
                    var a = GD.champion[e];
                    this.taskcoins_bar.value = GameData.championscore / a.num, 2 == a.ordinarytype ? this.taskcoins_coin.skin = "gamepad/index/knapsack/" + this.fragments[a.ordinaryid - 1] + ".png" : 0 == a.ordinarytype && (0 == a.ordinaryid ? this.taskcoins_coin.skin = "gamepad/ChampionRoad/coin.png" : this.taskcoins_coin.skin = "gamepad/ChampionRoad/dimonds.png");
                }
            }
        }, {
            key: "updatetask_diamonds",
            value: function() {
                var t = !0, e = this.testTask();
                if (-1 == e) for (var i = 0; i < GameData.task.length; i++) GameData.task[i].receive || this.taskdiamond == i || (this.taskdiamond = i, 
                t = !1); else this.taskdiamond = e;
                if (-1 != this.taskdiamond) {
                    t && GameData.task[this.taskdiamond].receive && (this.task_diamonds.visible = !1);
                    var a = GD.taskconfig[GameData.task[this.taskdiamond].num], n = this.showtypeofpro(GameData.task[this.taskdiamond]);
                    this.taskdiamond_title.text = a.text, n >= a.target ? (this.taskdiamond_num.text = "完成", 
                    this.taskdiamond_num.fontSize = 22, this.taskdiamond_bar.value = 1, this.havediamondRenwu(!1)) : (this.taskdiamond_bar.value = n / a.target, 
                    this.havediamondRenwu(!0), this.taskdiamond_num.fontSize = 12, this.taskdiamond_num.text = n + "/" + a.target, 
                    this.taskdiamond_num.fontSize = 12), this.taskdiamond_num.centerX = 0, a.diamonds > 0 ? this.taskdiamond_coin.skin = "gamepad/index/have_Diamonds.png" : this.taskdiamond_coin.skin = "gamepad/index/have_coins.png";
                } else this.task_diamonds.visible = !1;
            }
        }, {
            key: "showtypeofpro",
            value: function(t) {
                var e = 0;
                switch (t.num) {
                  case 0:
                    e = GameData.endlessnum;
                    break;

                  case 1:
                    e = GameData.maxTodylength;
                    break;

                  case 2:
                    e = GameData.maxTodymust;
                    break;

                  case 3:
                    e = GameData.maxTodyeatStarts;
                    break;

                  case 4:
                    e = GameData.maxTodyeatlevel;
                    break;

                  case 5:
                    e = GameData.maxTodyVideo;
                    break;

                  case 6:
                    e = GameData.navigateTogame;
                }
                return e;
            }
        }, {
            key: "randtask",
            value: function() {
                for (var t = 0, e = 0; e < GD.taskconfig.length; e++) t += GD.taskconfig[e].weight;
                Math.random();
                for (var i = GD.taskconfig.concat(), a = [], n = 0; n < 5; n++) for (var s = Math.random(), o = 0, r = !1, h = 0; h < i.length; h++) (o += i[h].weight) / t >= s && !r && (r = !0, 
                t -= i[h].weight, a.push(i.splice(h, 1)[0]));
                console.log("taskarray====", a), GameData.task = [], a.forEach(function(t) {
                    var e = {
                        num: t.num - 1,
                        target: 0,
                        receive: !1
                    };
                    GameData.task.push(e);
                }), console.log(" GameData.task", GameData.task);
            }
        }, {
            key: "ontask_coins",
            value: function() {
                this.click || (this.onclickbtn(), d.getInstance().playbtn(), G.pushEvent("冠军之路"), 
                k.instance.onshow());
            }
        }, {
            key: "ontask_diamonds",
            value: function(t) {
                if (!this.click) {
                    d.getInstance().playbtn();
                    var e = GD.taskconfig[GameData.task[this.taskdiamond].num];
                    this.showtypeofpro(GameData.task[this.taskdiamond]) >= e.target ? (w.instance.onshow(this.taskdiamond), 
                    this.onclickbtn()) : (this.showtaskView(), this.onclickbtn(), 6 == e.type && r.instance.ondrawer(t));
                }
            }
        }, {
            key: "addreward",
            value: function(t, e) {
                t && (this.rewardCoin.visible = !0, this.movecoin(e)), e && (this.rewardDimond.visible = !0, 
                this.moveDimond(t));
            }
        }, {
            key: "movecoin",
            value: function(t) {
                for (var e = this, i = function(i) {
                    Laya.timer.once(100 * i, e, function() {
                        e.rewardCoin.getChildAt(i).visible = !0, e.loopcoin(e.rewardCoin.getChildAt(i), t);
                    });
                }, a = 0; a < 6; a++) i(a);
            }
        }, {
            key: "loopcoin",
            value: function(t, e) {
                var i = this.coins.x - 413 - 85 - 95 - Laya.stage.width / 2 + 640 - 60, a = this.coins.y - 469, n = t.x;
                e && (n += 50);
                var s = t.y, o = [], r = new Laya.Point(n, s), h = new Laya.Point(n + 600 * (Math.random() - .5), s + 600 * (Math.random() - .5)), l = new Laya.Point(i, a);
                o.push(r), o.push(h), o.push(l);
                var c = this.CreateBezierPoints(o, 60), m = 0;
                Laya.timer.frameLoop(1, this, function e() {
                    if (m > c.length - 1) return d.getInstance().playcoins(), t.visible = !1, t.x = n, 
                    t.y = s, void Laya.timer.clear(this, e);
                    t.pos(c[m].x, c[m].y), m++;
                });
            }
        }, {
            key: "rewardDkin",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.closeindexthree = e, this.unlockname.text = "- " + GD.skinconfig[t].name + " -", 
                this.unlockskin.skin = "gamepad/index/shop/skin/" + GD.skinconfig[t].skin, this.unlockskin.width = 500, 
                this.unlockskin.height = 500, this.getskin.zOrder = 99999, this.getskin.show(!1, !0), 
                this.parseCompletelight("noxunhuan", this.unlocklight, 0, 222, !1), this.parseCompletelight("xunhuan", this.unlocklight, 0, 222, !0), 
                this.getskin.visible = !0;
            }
        }, {
            key: "parseCompletelight",
            value: function(t, e, i, a, n) {
                var s = new Laya.Templet();
                s.on(Laya.Event.COMPLETE, this, function() {
                    var t = s.buildArmature(0);
                    t.pos(e.width / 2 - i, e.height - a), e.addChild(t), n ? t.play(0, !0) : t.play(0, !1), 
                    t.player.on(Laya.Event.STOPPED, null, function() {
                        console.log("STOPPED");
                    });
                }), s.loadAni("gamepad/skeleton/" + t + "/skeleton.sk");
            }
        }, {
            key: "onclosegetskin",
            value: function() {
                this.getskin.close(), this.getskin.visible = !1, this.closeindexthree || p.instance.root.visible || c.instance.showthree();
            }
        }, {
            key: "moveDimond",
            value: function(t) {
                for (var e = this, i = function(i) {
                    Laya.timer.once(100 * i, e, function() {
                        e.rewardDimond.getChildAt(i).visible = !0, e.loopDimond(e.rewardDimond.getChildAt(i), t);
                    });
                }, a = 0; a < 6; a++) i(a);
            }
        }, {
            key: "loopDimond",
            value: function(t, e) {
                var i = this.Diamonds.x - 413 - 85 - 100 - 95 - Laya.stage.width / 2 + 640 - 60, a = this.Diamonds.y - 469, n = t.x;
                e && (n -= 50);
                var s = t.y, o = [], r = new Laya.Point(n, s), h = new Laya.Point(n + 600 * (Math.random() - .5), s + 600 * (Math.random() - .5)), l = new Laya.Point(i, a);
                o.push(r), o.push(h), o.push(l);
                var c = this.CreateBezierPoints(o, 60), m = 0;
                Laya.timer.frameLoop(1, this, function e() {
                    if (m > c.length - 1) return d.getInstance().playcoins(), t.visible = !1, t.x = n, 
                    t.y = s, void Laya.timer.clear(this, e);
                    t.pos(c[m].x, c[m].y), m++;
                });
            }
        }, {
            key: "CreateBezierPoints",
            value: function(t, e) {
                for (var i = [], a = 0; a < e; a++) {
                    var n = this.MultiPointBezier(t, a / e);
                    i.push(n);
                }
                return i;
            }
        }, {
            key: "MultiPointBezier",
            value: function(t, e) {
                for (var i = t.length, a = 0, n = 0, s = 0; s < i; s++) {
                    var o = t[s];
                    a += o.x * Math.pow(1 - e, i - 1 - s) * Math.pow(e, s) * this.erxiangshi(i - 1, s), 
                    n += o.y * Math.pow(1 - e, i - 1 - s) * Math.pow(e, s) * this.erxiangshi(i - 1, s);
                }
                return {
                    x: a,
                    y: n
                };
            }
        }, {
            key: "erxiangshi",
            value: function(t, e) {
                for (var i = 1, a = 1; e > 0; ) i *= t, a *= e, t--, e--;
                return i / a;
            }
        }, {
            key: "showtaskView",
            value: function() {
                b.instance.onshow();
            }
        }, {
            key: "onDiamonds",
            value: function() {
                this.click || (this.onclickbtn(), d.getInstance().playbtn(), GameData.diamond_num < GD.FreeRewardconfig.diamond_num ? f.instance.onshow(!1, GD.FreeRewardconfig.diamond) : G.showToast("今日次数用尽，请明日再来。"));
            }
        }, {
            key: "onCoins",
            value: function() {
                this.click || (this.onclickbtn(), d.getInstance().playbtn(), GameData.coin_num < GD.FreeRewardconfig.coin_num ? f.instance.onshow(!0, GD.FreeRewardconfig.coin) : G.showToast("今日次数用尽，请明日再来。"));
            }
        }, {
            key: "showdataview",
            value: function() {
                d.getInstance().playbtn(), "" == GameData.nickname && G.isWeChat() ? GA.PA.getUserInfo({
                    withCredentials: !1,
                    lang: "zh_CN",
                    success: function(t) {
                        console.log("success"), GA.Info.nickname = t.userInfo.nickName, GA.Info.avatar = t.userInfo.avatarUrl, 
                        GameData.nickname = GA.Info.nickname, GameData.avatar = GA.Info.avatar, GameData.upload(), 
                        u.instance.onshow();
                    },
                    fail: function() {
                        console.log("fail"), A.instance.button && A.instance.button.show();
                    }
                }) : u.instance.onshow();
            }
        }, {
            key: "updateCoin",
            value: function() {
                GameData.golds = Math.floor(GameData.golds), GameData.Diamonds = Math.floor(GameData.Diamonds), 
                this.coins.getChildAt(0).text = GameData.golds + "", this.Diamonds.getChildAt(0).text = GameData.Diamonds + "", 
                p.instance.uplistArray(), this.testLevelUp();
            }
        }, {
            key: "uplongth",
            value: function() {
                var t = this;
                this.click || (this.onclickbtn(), d.getInstance().playbtn(), G.isWeChat() ? GA.isNextRewardVideo("开局长度+500") ? G.rewardOperation("开局长度+500", GA.haveRewardVideo(), function() {
                    A.getInstance().addlonger = !0, A.instance.TimeLimit = !1, A.instance.RegimentWar = !1, 
                    G.pushEvent("无尽模式"), GameData.endlessnum++, GameData.upendlessnum = !0, t.playgame(), 
                    A.instance.showAddCoinmj1(5, GameData.maxTodyVideo);
                }) : G.rewardOperation("开局长度+500", !1, function() {
                    A.getInstance().addlonger = !0, A.instance.TimeLimit = !1, A.instance.RegimentWar = !1, 
                    G.pushEvent("无尽模式"), GameData.endlessnum++, GameData.upendlessnum = !0, t.playgame(), 
                    A.instance.showAddCoinmj1(5, GameData.maxTodyVideo);
                }) : G.rewardOperation("开局长度+500", !0, function() {
                    A.getInstance().addlonger = !0, A.instance.TimeLimit = !1, A.instance.RegimentWar = !1, 
                    G.pushEvent("无尽模式"), GameData.endlessnum++, GameData.upendlessnum = !0, t.playgame(), 
                    A.instance.showAddCoinmj1(5, GameData.maxTodyVideo);
                }));
            }
        }, {
            key: "onfuture",
            value: function() {
                d.getInstance().playbtn(), G.showToast("暂未开放，敬请期待。");
            }
        }, {
            key: "onshow",
            value: function() {
                A.instance.showinfo = !0, Laya.timer.loop(1e3, this, this.onClockTime), m.hideScrollGameList(), 
                A.instance.showreward || G.isWeChat() && G.showCustomAdByTag("one"), this.getred(), 
                this.updateCoin(), G.isWeChat() && !GA.Info.isPreview && A.getInstance().userinfo(), 
                this.root.visible = !0;
            }
        }, {
            key: "getred",
            value: function() {
                if (r.instance) {
                    for (var t = !1, e = 0; e < GameData.todaytask.length; e++) 1 == GameData.todaytask[e] && (t = !0);
                    this.flashsale.getChildByName("red").visible = !!t;
                }
            }
        }, {
            key: "testSkinUp",
            value: function() {
                this.skin_up.visible = !1;
            }
        }, {
            key: "testLevelUp",
            value: function() {
                GameData.num >= GD.upconfig.length ? this.level_up.visible = !1 : 0 == GD.upconfig[GameData.num].mode ? GameData.golds > GD.upconfig[GameData.num].price ? this.level_up.visible = !0 : this.level_up.visible = !1 : this.level_up.visible = !0;
            }
        }, {
            key: "onhide",
            value: function() {
                Laya.timer.clear(this, this.onClockTime), A.instance.button && (console.log("删除button　2222222222222222"), 
                A.instance.button.destroy(), A.instance.button = null), Laya.timer.clear(this, this.onUpdate), 
                this.root.visible = !1;
            }
        }, {
            key: "showShopView",
            value: function() {
                this.click || (this.onclickbtn(), d.getInstance().playbtn(), G.pushEvent("皮肤"), 
                p.instance.onshow());
            }
        }, {
            key: "showupView",
            value: function() {
                this.onclickbtn(), d.getInstance().playbtn(), G.pushEvent("角色"), x.instance.onshow();
            }
        }, {
            key: "onTimeLimitgame",
            value: function() {
                this.click || (this.onclickbtn(), A.instance.TimeLimit = !0, A.instance.RegimentWar = !1, 
                A.instance.CrazyMode = !1, GameData.TimeLimitnum++, G.pushEvent("限时模式"), this.playgame());
            }
        }, {
            key: "onendlessGame",
            value: function() {
                this.click || (this.onclickbtn(), A.instance.TimeLimit = !1, A.instance.RegimentWar = !1, 
                A.instance.CrazyMode = !1, G.pushEvent("无尽模式"), GameData.endlessnum++, GameData.upendlessnum = !0, 
                this.playgame());
            }
        }, {
            key: "onnewcrazy",
            value: function() {
                this.click || (this.onclickbtn(), A.instance.TimeLimit = !1, A.instance.RegimentWar = !1, 
                A.instance.CrazyMode = !0, G.pushEvent("疯狂模式"), this.playgame());
            }
        }, {
            key: "playgame",
            value: function() {
                var t = this;
                if (null != I.instance) if (A.instance.plane && A.instance.canplaygame && null != I.instance.playgame) if (null != L.instance) if (L.instance.usetrobots.length < 2) G.showToast("资源加载中,稍后再试。"); else {
                    if (A.instance.CrazyMode) {
                        if (A.instance.FoodMagnets.length < 4) for (var e = 0; e < 3; e++) A.instance.addMagnet(), 
                        A.instance.addShield();
                    } else if (A.instance.FoodMagnets.length >= 4) {
                        for (var i = A.instance.FoodMagnets.splice(2, A.instance.FoodMagnets.length - 1), a = A.instance.FoodShield.splice(2, A.instance.FoodShield.length - 1), n = 0; n < i.length; n++) L.instance.recoverySprite3D(i[n]);
                        for (var s = 0; s < a.length; s++) L.instance.recoverySprite3D(a[s]);
                    }
                    1 == GD.playgameconfig.showstartgame ? m.showStartView(function() {
                        c.instance.sprite3d.removeSelf(), G.hideCustomAdByTag("one"), G.startgame = !1, 
                        t.onhide(), Laya.Scene.close("scene/indexView.scene"), GameData.maxnum++, GameData.Todaymaxnum++, 
                        G.pushEvents([ {
                            eventId: "HomeStartGame"
                        }, {
                            eventId: "PlayGame"
                        }, {
                            eventId: "GameMaxnum",
                            extraNum: GameData.maxnum
                        }, {
                            eventId: "当前使用皮肤",
                            detail: {
                                skin: GameData.useskin
                            }
                        } ]), c.instance.closethree(), d.getInstance().playbtn(), I.instance.showgameview(), 
                        G.isWeChat() && !GA.Info.isPreview && GA.PA.triggerGC();
                    }) : (c.instance.sprite3d.removeSelf(), G.hideCustomAdByTag("one"), G.startgame = !1, 
                    this.onhide(), Laya.Scene.close("scene/indexView.scene"), GameData.maxnum++, GameData.Todaymaxnum++, 
                    G.pushEvents([ {
                        eventId: "HomeStartGame"
                    }, {
                        eventId: "PlayGame"
                    }, {
                        eventId: "GameMaxnum",
                        extraNum: GameData.maxnum
                    }, {
                        eventId: "当前使用皮肤",
                        detail: {
                            skin: GameData.useskin
                        }
                    } ]), c.instance.closethree(), d.getInstance().playbtn(), I.instance.showgameview(), 
                    G.isWeChat() && !GA.Info.isPreview && GA.PA.triggerGC());
                } else G.showToast("资源加载中,稍后再试。"); else G.showToast("资源加载中,稍后再试。"); else G.showToast("资源加载中,稍后再试。");
            }
        } ]), r;
    }(g.scene.indexViewUI);
    C.instance = null;
    var A = function() {
        function t() {
            s(this, t), this.showporp = 2, this.dumpling = !1, this.tangyuan = !1, this.showchampin = -1, 
            this.firstindex = !0, this.startgame = !0, this.tryskin = !1, this.oldskin = 0, 
            this.showreward = !1, this.attribute = 0, this.skintype = 1, this.addlonger = !1, 
            this.resultLonger = !1, this.progreX = 0, this.existencetime = 0, this.relivenum = 0, 
            this.rewardnum = 0, this.aibox = [], this.showinfo = !0, this.selectindedx = -1, 
            this.rand = 0, this.maxx = 30, this.maxy = 30, this.survivalTime = 0, this.drawarray = [], 
            this.camera1 = null, this.scene = null, this.viewport1 = null, this.ranking = 0, 
            this.score = 0, this.mustAI = 0, this.CrazyMode = !1, this.TimeLimit = !1, this.RegimentWar = !1, 
            this.warcontribution = "", this.warranks = 0, this.rankname = [ "不屈黑铁", "倔强青铜", "英勇白银", "荣耀黄金", "闪耀铂金", "永恒钻石", "至尊星耀", "顶级大师", "最强王者", "月光霸主", "至尊王者", "天下无敌" ], 
            this.bgcolor = [ "#411812", "#2c340d", "#331232" ], this.Beans = [], this.Beanspos = [], 
            this.FoodStarts = [], this.FoodRamdStarts = [], this.FoodMagnets = [], this.FoodRamdMagnets = [], 
            this.FoodShield = [], this.FoodRamdShield = [], this.warrank = {
                ranks: 1,
                myrank: 1,
                devote: 20
            }, this.color = 1, this.canplaygame = !1, this.starmaxx = 30, this.starmaxy = 30, 
            this.gameTime = 0, this.ClockTime = 0, this.wayList = [], this.Tangyuanpostion = [], 
            this.foodpostion = [], this.overpos = ex.v3(140, .3, 140), this.Food_Dot_color = [ "BlackishGreen", "Brown", "Yellow", "Green", "Blue" ], 
            this.showtip = !1, this.index = 0;
        }
        return o(t, [ {
            key: "userinfo",
            value: function() {
                G.isWeChat() && (this.button || ("" == GameData.nickname ? wx.getSetting({
                    success: function(e) {
                        console.log("====" + e.authSetting["scope.userInfo"]), e.authSetting["scope.userInfo"] ? "" == GameData.nickname ? wx.getUserInfo({
                            success: function(t) {
                                var e = t.userInfo, i = e.nickName, a = e.avatarUrl;
                                GameData.nickname = i, GameData.avatar = a, GA.Info.nickname = i, GA.Info.avatar = a, 
                                C.instance.head_frame.getChildByName("title_name").text = GameData.nickname, C.instance.head.skin = GameData.avatar, 
                                GameData.upload();
                            }
                        }) : (C.instance.head_frame.getChildByName("title_name").text = GameData.nickname, 
                        C.instance.head.skin = GameData.avatar) : (t.instance.button = wx.createUserInfoButton({
                            type: "text",
                            text: "",
                            style: {
                                top: 0,
                                left: 0,
                                width: 200,
                                height: 60,
                                color: "#00000000",
                                textAlign: "center",
                                fontSize: 1,
                                borderRadius: 0,
                                backgroundColor: "#00000000",
                                borderColor: "",
                                borderWidth: 0,
                                lineHeight: 0
                            }
                        }), t.instance.button.onTap(function(e) {
                            console.log("UserInfoButton onTap:", e), e.userInfo ? (GameData.nickname = e.userInfo.nickName, 
                            GameData.avatar = e.userInfo.avatarUrl, GA.Info.nickname = e.userInfo.nickName, 
                            GA.Info.avatar = e.userInfo.avatarUrl, t.instance.showinfo && (C.instance.head_frame.getChildByName("title_name").text = GA.Info.nickname, 
                            C.instance.head.skin = GA.Info.avatar, u.instance.onshow()), GameData.upload()) : (console.log("未授权"), 
                            console.log("gameManager.instance.showinfo", t.instance.showinfo), t.instance.showinfo || t.instance.button.destroy());
                        }), console.log("fail"), t.instance.button && t.instance.button.show()), console.log("=======>", e.authSetting);
                    },
                    fail: function(e) {
                        console.log("fail", e), t.instance.button = wx.createUserInfoButton({
                            type: "text",
                            text: "",
                            style: {
                                top: 0,
                                left: 0,
                                width: 200,
                                height: 60,
                                color: "#00000000",
                                textAlign: "center",
                                fontSize: 1,
                                borderRadius: 0,
                                backgroundColor: "#00000000",
                                borderColor: "",
                                borderWidth: 0,
                                lineHeight: 0
                            }
                        }), t.instance.button.onTap(function(e) {
                            console.log("UserInfoButton onTap:", e), e.userInfo ? (GA.Info.nickname = e.userInfo.nickName, 
                            GA.Info.avatar = e.userInfo.avatarUrl, t.instance.showinfo && (C.instance.head_frame.getChildByName("title_name").text = GA.Info.nickname, 
                            C.instance.head.skin = GA.Info.avatar, u.instance.onshow()), GameData.upload()) : (console.log("未授权"), 
                            console.log("gameManager.instance.showinfo", t.instance.showinfo), t.instance.showinfo || t.instance.button.destroy());
                        }), console.log("fail"), t.instance.button && t.instance.button.show();
                    }
                }) : (C.instance.head_frame.getChildByName("title_name").text = GameData.nickname, 
                C.instance.head.skin = GameData.avatar)));
            }
        }, {
            key: "haveshow",
            value: function(t) {
                var e = I.instance.play.root.transform.position;
                return t.x > e.x - this.maxx && t.x < e.x + this.maxx && t.z < e.z + this.maxy && t.z > e.z - this.maxy;
            }
        }, {
            key: "showdistent",
            value: function(t, e, i) {
                return t.x > i.x - e && t.x < i.x + e && t.z < i.z + e && t.z > i.z - e;
            }
        }, {
            key: "pDistance",
            value: function(t, e, i, a, n) {
                return t > i - n && t < i + n && e < a + n && e > a - n;
            }
        }, {
            key: "onshowSausageMan",
            value: function() {
                this.scene = new Laya.Scene3D(), t.instance.scene.zOrder = 9999, Laya.stage.addChild(this.scene), 
                this.camera1 = new Laya.Camera(0, .1, 100), this.scene.addChild(this.camera1), this.camera1.transform.rotate(new Laya.Vector3(-100, 0, 0), !1, !1), 
                this.camera1.transform.translate(new Laya.Vector3(5, -10, 1)), this.camera1.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY, 
                this.camera1.orthographic = !0, this.viewport1 = this.camera1.normalizedViewport, 
                this.camera1.orthographicVerticalSize = 10;
                var e = new Laya.DirectionLight();
                e.shadowMode = Laya.ShadowMode.None, e.color = new Laya.Vector3(1, 244 / 255, 214 / 255), 
                e.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0)), this.scene.addChild(e);
                var i = new Laya.DirectionLight();
                i.shadowMode = Laya.ShadowMode.None, i.color = new Laya.Vector3(1, 244 / 255, 214 / 255), 
                i.transform.worldMatrix.setForward(new Laya.Vector3(0, -1, -1)), this.scene.addChild(i), 
                e.diffuseColor = new Laya.Vector3(.3, .3, .3), i.diffuseColor = new Laya.Vector3(.3, .3, .3), 
                this.scene.ambientColor = new Laya.Vector3(.8, .8, .8), this.camera1.normalizedViewport.width = 0, 
                this.scene.active = !1;
            }
        }, {
            key: "createGameScene",
            value: function() {
                var e = this;
                t.instance.newScene = Laya.stage.addChild(new Laya.Scene3D()), t.instance.newScene.zOrder = -2, 
                t.instance.camera = t.instance.newScene.addChild(new Laya.Camera(0, .1, 100)), t.instance.camera.transform.translate(new Laya.Vector3(0, 15, 0)), 
                t.instance.camera.transform.localRotationEuler = new Laya.Vector3(-90, -0, 0), t.instance.camera.clearColor = Util.hexToColor4F(this.bgcolor[MyMath.rand(0, 2)]);
                var i = ex.v3();
                i = this.ScreenToWorld(ex.v3(0, 0, 25)), t.getInstance().starmaxx = Math.abs(Math.round(i.x)) + 1, 
                t.getInstance().starmaxy = Math.abs(Math.round(i.y)) + 1, t.getInstance().maxx = Math.abs(Math.round(i.x)) + 1, 
                t.getInstance().maxy = Math.abs(Math.round(i.y)) + 1;
                var a = t.instance.newScene.addChild(new Laya.DirectionLight());
                a.color = new Laya.Vector3(1, 244 / 255, 214 / 255), a.transform.worldMatrix.setForward(new Laya.Vector3(0, -1, -1)), 
                a.diffuseColor = new Laya.Vector3(.3, .3, .3), Laya.Browser.onAndroid ? (a.shadowMode = Laya.ShadowMode.SoftLow, 
                a.shadowResolution = 1024, a.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades, 
                a.shadowDistance = 20, a.shadowNearPlane = 1, a.shadowDepthBias = 1) : G.isLowEndDevice() || (a.shadowMode = Laya.ShadowMode.SoftLow, 
                a.shadowResolution = 1024, a.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades, 
                a.shadowDistance = 20, a.shadowNearPlane = 1, a.shadowDepthBias = 1), a.transform.rotationEuler = ex.v3(-150, 120, 0), 
                t.instance.newScene.ambientColor = new Laya.Vector3(.8, .8, .8), this.color = MyMath.rand(1, 2), 
                r.loadSprite3D("subPack/LayaScene/Conventional/Scenes1.lh", Laya.Handler.create(this, function(i) {
                    e.plane = i, e.canplaygame = !0, t.instance.newScene.addChild(i), Laya.Browser.onAndroid && (i.getChildAt(0).meshRenderer.receiveShadow = !0), 
                    console.log("初始颜色", e.color), Util.changeMaterial(i.getChildAt(0), "subPack/skin/Ground" + e.color + ".png");
                }));
                var n = 1e3;
                G.isLowEndDevice() && (n = 500);
                for (var s = 0; s < n; s++) this.addBean();
                for (var o = 0; o < 3; o++) this.addStars(), this.addMagnet(), this.addShield();
                for (var h = 0; h < 4; h++) this.createbox(h);
                Laya.timer.loop(1e3, this, function() {
                    e.gameTime += 1, e.ClockTime += 1;
                });
            }
        }, {
            key: "GetTime",
            value: function(e) {
                var i, a, n, s = e, o = Math.floor(s / 60), r = Math.floor(o / 60);
                return i = (s = Math.floor(s % 60)) < 10 ? "0" + s : s, a = (o %= 60) < 10 ? "0" + o : o, 
                n = (r %= 24) < 10 ? "0" + r : r, t.instance.TimeLimit ? a + ":" + i : n + ":" + a + ":" + i;
            }
        }, {
            key: "GetminuteTime",
            value: function(t) {
                var e = t, i = Math.floor(e / 60);
                return ((i %= 60) < 10 ? "0" + i : i) + ":" + ((e = Math.floor(e % 60)) < 10 ? "0" + e : e);
            }
        }, {
            key: "setboxpostion",
            value: function(t, e) {
                this.wayList[t].transform.localScaleX = 1, 0 == t ? .5 == e ? (this.wayList[t].transform.localScaleX = .5, 
                this.wayList[t].transform.position = MyMath.v3(0, 0, 40)) : this.wayList[t].transform.position = MyMath.v3(0, 0, 80.5) : 1 == t ? .5 == e ? (this.wayList[t].transform.localScaleX = .5, 
                this.wayList[t].transform.position = MyMath.v3(0, 0, -40)) : this.wayList[t].transform.position = MyMath.v3(0, 0, -80.5) : 2 == t ? (this.wayList[t].transform.localRotationEulerY = 90, 
                .5 == e ? (this.wayList[t].transform.localScaleX = .5, this.wayList[t].transform.position = MyMath.v3(40, 0, 0)) : this.wayList[t].transform.position = MyMath.v3(80.5, 0, 0)) : 3 == t && (this.wayList[t].transform.localRotationEulerY = 90, 
                .5 == e ? (this.wayList[t].transform.localScaleX = .5, this.wayList[t].transform.position = MyMath.v3(-40, 0, 0)) : this.wayList[t].transform.position = MyMath.v3(-80.5, 0, 0));
            }
        }, {
            key: "createbox",
            value: function(e) {
                var i = new Laya.BlinnPhongMaterial();
                i.albedoColor = Util.hexToColor4F("#ff0400");
                var a = this.newScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(162, 1, 1)));
                this.wayList.push(a), a.meshRenderer.material = i, this.setboxpostion(e, 1), t.instance.newScene.addChild(a);
            }
        }, {
            key: "addShield",
            value: function() {
                var e = L.instance.createSprite3D("Food_Shield");
                t.instance.newScene.addChild(e), e.transform.localScale = MyMath.v3(1.2, 1.2, 1.2), 
                this.FoodShield.push(e), t.instance.RegimentWar ? (e.transform.position = MyMath.v3(MyMath.randFloat(-38, 38), .3, MyMath.randFloat(-38, 38)), 
                this.FoodRamdShield.push(ex.v2(MyMath.randFloat(-38, 38), MyMath.randFloat(-38, 38)))) : (e.transform.position = MyMath.v3(MyMath.randFloat(-80, 80), .3, MyMath.randFloat(-80, 80)), 
                this.FoodRamdShield.push(ex.v2(MyMath.randFloat(-80, 80), MyMath.randFloat(-80, 80))));
            }
        }, {
            key: "addStars",
            value: function() {
                var e = L.instance.createSprite3D("Food_Stars");
                t.instance.newScene.addChild(e), e.transform.localScale = MyMath.v3(1.2, 1.2, 1.2), 
                this.FoodStarts.push(e), t.instance.RegimentWar ? (e.transform.position = MyMath.v3(MyMath.randFloat(-38, 38), .3, MyMath.randFloat(-38, 38)), 
                this.FoodRamdStarts.push(ex.v2(MyMath.randFloat(-38, 38), MyMath.randFloat(-38, 38)))) : (e.transform.position = MyMath.v3(MyMath.randFloat(-80, 80), .3, MyMath.randFloat(-80, 80)), 
                this.FoodRamdStarts.push(ex.v2(MyMath.randFloat(-80, 80), MyMath.randFloat(-80, 80))));
            }
        }, {
            key: "addMagnet",
            value: function() {
                var e = L.instance.createSprite3D("Food_Magnet");
                t.instance.newScene.addChild(e), this.FoodMagnets.push(e), t.instance.RegimentWar ? (e.transform.position = MyMath.v3(MyMath.randFloat(-38, 38), .3, MyMath.randFloat(-38, 38)), 
                this.FoodRamdMagnets.push(ex.v2(MyMath.randFloat(-38, 38), MyMath.randFloat(-38, 38)))) : (e.transform.position = MyMath.v3(MyMath.randFloat(-80, 80), .3, MyMath.randFloat(-80, 80)), 
                this.FoodRamdMagnets.push(ex.v2(MyMath.randFloat(-80, 80), MyMath.randFloat(-80, 80))));
            }
        }, {
            key: "moveShield",
            value: function() {
                if (t.instance.TimeLimit || t.instance.RegimentWar) for (var e = 0; e < this.FoodShield.length; e++) if (null != this.FoodRamdShield[e]) {
                    this.FoodShield[e].active = !0;
                    var i = this.FoodShield[e].transform.position.x, a = this.FoodShield[e].transform.position.z;
                    Math.round(i) >= Math.round(this.FoodRamdShield[e].x) - 2 && Math.round(i) <= Math.round(this.FoodRamdShield[e].x) + 2 && Math.round(a) >= Math.round(this.FoodRamdShield[e].y - 2) && Math.round(a) <= Math.round(this.FoodRamdShield[e].y + 2) && (t.instance.RegimentWar ? this.FoodRamdShield[e] = ex.v2(MyMath.randFloat(-38, 38), MyMath.randFloat(-38, 38)) : this.FoodRamdShield[e] = ex.v2(MyMath.randFloat(-78, 78), MyMath.randFloat(-78, 78)));
                    var n = MyMath.CalculateAngleV3(ex.v3(this.FoodRamdShield[e].x, 0, -this.FoodRamdShield[e].y), ex.v3(i, 0, -a));
                    (n += 90) > 180 && n > -90 && (n -= 360), n > 0 ? n -= 180 : n < 0 && (n += 180);
                    var s = this.FoodShield[e].transform.localRotationEuler.clone();
                    this.FoodShield[e].transform.localRotationEuler = e % 2 == 0 ? ex.v3(s.x + MyMath.rand(0, -.2), s.y + MyMath.rand(0, .1), s.z + MyMath.rand(0, -.2)) : ex.v3(s.x + MyMath.rand(0, .2), s.y + MyMath.rand(0, .2), s.z + MyMath.rand(0, .2));
                    var o = n;
                    o *= Math.PI / 180;
                    var r = .068 * Math.sin(o) + i, h = .068 * Math.cos(o) + a;
                    Math.abs(h) >= 79 && (h = a), Math.abs(r) >= 79 && (r = i), this.FoodShield[e].transform.position = ex.v3(r, .3, h);
                } else this.FoodShield[e].active = !1; else for (var l = 0; l < this.FoodShield.length; l++) this.FoodShield[l].active = !1;
            }
        }, {
            key: "moveMagnets",
            value: function() {
                for (var e = 0; e < this.FoodMagnets.length; e++) if (null != this.FoodRamdMagnets[e]) {
                    this.FoodMagnets[e].active = !0;
                    var i = this.FoodMagnets[e].transform.position.x, a = this.FoodMagnets[e].transform.position.z;
                    Math.round(i) >= Math.round(this.FoodRamdMagnets[e].x) - 2 && Math.round(i) <= Math.round(this.FoodRamdMagnets[e].x) + 2 && Math.round(a) >= Math.round(this.FoodRamdMagnets[e].y - 2) && Math.round(a) <= Math.round(this.FoodRamdMagnets[e].y + 2) && (t.instance.RegimentWar ? this.FoodRamdMagnets[e] = ex.v2(MyMath.randFloat(-38, 38), MyMath.randFloat(-38, 38)) : this.FoodRamdMagnets[e] = ex.v2(MyMath.randFloat(-78, 78), MyMath.randFloat(-78, 78)));
                    var n = MyMath.CalculateAngleV3(ex.v3(this.FoodRamdMagnets[e].x, 0, -this.FoodRamdMagnets[e].y), ex.v3(i, 0, -a));
                    (n += 90) > 180 && n > -90 && (n -= 360), n > 0 ? n -= 180 : n < 0 && (n += 180);
                    var s = this.FoodMagnets[e].transform.localRotationEuler.clone();
                    this.FoodMagnets[e].transform.localRotationEuler = e % 2 == 0 ? ex.v3(s.x + MyMath.rand(0, -.2), s.y + MyMath.rand(0, .1), s.z + MyMath.rand(0, -.2)) : ex.v3(s.x + MyMath.rand(0, .2), s.y + MyMath.rand(0, .2), s.z + MyMath.rand(0, .2));
                    var o = n;
                    o *= Math.PI / 180;
                    var r = .068 * Math.sin(o) + i, h = .068 * Math.cos(o) + a;
                    Math.abs(h) >= 79 && (h = a), Math.abs(r) >= 79 && (r = i), this.FoodMagnets[e].transform.position = ex.v3(r, .3, h);
                } else this.FoodMagnets[e].active = !1;
            }
        }, {
            key: "moveStars",
            value: function() {
                for (var e = 0; e < this.FoodStarts.length; e++) if (null != this.FoodRamdStarts[e] && this.FoodStarts[e].active) {
                    var i = this.FoodStarts[e].transform.position.x, a = this.FoodStarts[e].transform.position.z;
                    Math.round(i) >= Math.round(this.FoodRamdStarts[e].x) - 2 && Math.round(i) <= Math.round(this.FoodRamdStarts[e].x) + 2 && Math.round(a) >= Math.round(this.FoodRamdStarts[e].y - 2) && Math.round(a) <= Math.round(this.FoodRamdStarts[e].y + 2) && (t.instance.RegimentWar ? this.FoodRamdStarts[e] = ex.v2(MyMath.randFloat(-38, 38), MyMath.randFloat(-38, 38)) : this.FoodRamdStarts[e] = ex.v2(MyMath.randFloat(-78, 78), MyMath.randFloat(-78, 78)));
                    var n = MyMath.CalculateAngleV3(ex.v3(this.FoodRamdStarts[e].x, 0, -this.FoodRamdStarts[e].y), ex.v3(i, 0, -a));
                    (n += 90) > 180 && n > -90 && (n -= 360), n > 0 ? n -= 180 : n < 0 && (n += 180);
                    var s = this.FoodStarts[e].transform.localRotationEuler.clone();
                    this.FoodStarts[e].transform.localRotationEuler = ex.v3(s.x + MyMath.rand(0, 5), s.y + MyMath.rand(0, 5), s.z + MyMath.rand(0, 5));
                    var o = n;
                    o *= Math.PI / 180;
                    var r = .068 * Math.sin(o) + i, h = .068 * Math.cos(o) + a;
                    Math.abs(h) >= 79 && (h = a), Math.abs(r) >= 79 && (r = i), this.FoodStarts[e].transform.position = ex.v3(r, .3, h);
                }
            }
        }, {
            key: "addBean",
            value: function() {
                var e = 0, i = 0, a = MyMath.randFloat(0, 1), n = MyMath.randFloat(0, 1), s = MyMath.randFloat(0, 1), o = MyMath.randFloat(70, 79.5), r = MyMath.randFloat(-79.5, 79.5);
                a > .9 ? n ? s > .5 ? (e = o, i = r) : (e = -o, i = r) : s > .5 ? (i = o, e = r) : (i = -o, 
                e = r) : (e = MyMath.randFloat(-79.5, 79.5), i = MyMath.randFloat(-79.5, 79.5));
                var h = L.instance.createSprite3D("Food_Dot_" + this.Food_Dot_color[MyMath.rand(0, 4)]);
                t.instance.newScene.addChild(h), h.transform.localScale = ex.v3(1.2, 1.2, 1.2), 
                Laya.Browser.onAndroid && (h.getChildAt(0).meshRenderer.castShadow = !1, h.getChildAt(0).meshRenderer.receiveShadow = !1);
                var d = h.transform, c = d.position;
                c.setValue(e, 0, i), d.position = c, h.name = "Bean";
                var m = h.addComponent(l);
                t.instance.newScene.addChild(m.root), m.level = 0, this.Beans.push(m), this.Beanspos.push(h.transform.position.clone());
            }
        }, {
            key: "ScreenToWorld",
            value: function(e) {
                var i = e.z, a = .5 * t.instance.camera.fieldOfView * Math.PI / 180, n = i * Math.tan(a), s = n * t.instance.camera.aspectRatio, o = new Laya.Vector3(), r = t.instance.camera.transform, h = new Laya.Vector3();
                r.getRight(h);
                var l = new Laya.Vector3(h.x * s, h.y * s, h.z * s);
                Laya.Vector3.subtract(r.position, l, o);
                var d = new Laya.Vector3();
                r.getUp(d);
                var c = new Laya.Vector3(d.x * n, d.y * n, d.z * n);
                Laya.Vector3.subtract(o, c, o);
                var m = new Laya.Vector3();
                r.getForward(m);
                var u = new Laya.Vector3(-m.x * i, -m.y * i, -m.z * i);
                Laya.Vector3.add(o, u, o);
                var g = new Laya.Vector3();
                g.x = s / Laya.stage.width * e.x * 2, g.y = n / Laya.stage.height * e.y * 2, g.z = 0;
                var y = new Laya.Vector3();
                return o = this.InverseTransformPoint(r, o), Laya.Vector3.add(o, g, y), this.TransformPoint(r, y);
            }
        }, {
            key: "InverseTransformPoint",
            value: function(t, e) {
                var i = new Laya.Vector3();
                t.getRight(i);
                var a = new Laya.Vector3();
                t.getUp(a);
                var n = new Laya.Vector3();
                t.getForward(n);
                var s = new Laya.Vector3(-n.x, -n.y, -n.z), o = this.ProjectDistance(e, t.position, i), r = this.ProjectDistance(e, t.position, a), h = this.ProjectDistance(e, t.position, s);
                return new Laya.Vector3(o, r, h);
            }
        }, {
            key: "ProjectDistance",
            value: function(t, e, i) {
                var a = new Laya.Vector3();
                Laya.Vector3.subtract(t, e, a);
                var n = this.Angle(a, i) * Math.PI / 180;
                return Laya.Vector3.distance(t, e) * Math.cos(n);
            }
        }, {
            key: "Angle",
            value: function(t, e) {
                var i = (t.x * e.x + t.y * e.y + t.z * e.z) / (Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z) * Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z));
                return 180 * Math.acos(i) / Math.PI;
            }
        }, {
            key: "TransformPoint",
            value: function(t, e) {
                var i = new Laya.Vector3();
                return Laya.Vector3.transformQuat(e, t.rotation, i), Laya.Vector3.add(i, t.position, i), 
                i;
            }
        }, {
            key: "showAddCoinmj1",
            value: function(e, i) {
                for (var a = -1, n = 0; n < GameData.task.length; n++) GameData.task[n].num == e && (a = n);
                if (5 == e && t.instance.showtimetask(5), -1 != a && !GameData.task[a].receive) {
                    var s = GD.taskconfig[GameData.task[a].num];
                    if (!(i > s.target)) {
                        6 == e && 0 == i && G.showToast("试玩时间不足30s");
                        var o = "gamepad/task/" + (s.type + 1) + ".png";
                        6 == s.type && (o = G.iconskin), this.showtasktip(o, i, s.target, s.title, s.text);
                    }
                }
            }
        }, {
            key: "showtimetask",
            value: function(t) {
                var e = this, i = GameData.todaytasknum.indexOf(t);
                if (-1 != i) {
                    var a = GD.timelimitedreward[GameData.flashSaleday].task[i][1], n = GameData.flashSale[t];
                    if (a <= n && 0 == GameData.todaytask[t]) {
                        GameData.todaytask[t] = 1;
                        for (var s = !0, o = 0; o < GameData.todaytask.length; o++) 0 == GameData.todaytask[o] && (s = !1);
                        s && 0 == GameData.ActivityCompletion[GameData.flashSaleday] && (GameData.ActivityCompletion[GameData.flashSaleday] = 1, 
                        GameData.upload());
                    }
                    if (!(a < n)) {
                        var r = "";
                        switch (t) {
                          case 0:
                            r = "参与" + a + "次无尽模式";
                            break;

                          case 1:
                            r = "参与" + a + "次限时模式";
                            break;

                          case 2:
                            r = "参与" + a + "次团战模式";
                            break;

                          case 3:
                            r = "团战模式获胜" + a + "次";
                            break;

                          case 4:
                            r = "击败" + a + "名玩家";
                            break;

                          case 5:
                            r = "观看" + a + "次视频";
                            break;

                          case 6:
                            r = "收集" + a + "个饺子";
                            break;

                          case 7:
                            r = "收集" + a + "个汤圆";
                        }
                        Laya.timer.once(100, this, function() {
                            e.showtasktip("", n, a, "限时活动", r);
                        });
                    }
                }
            }
        }, {
            key: "showtasktip",
            value: function(t, e, i, a, n) {
                var s = this, o = Laya.Pool.getItemByClass("image_tips", Laya.Label);
                o.width = 945, o.height = 68, o.centerX = 0, o.top = 0, o.visible = !0;
                var r = new Laya.Image("gamepad/index/task/title_bg.png");
                o.addChild(r), r.scaleX = .7, r.scaleY = .7, r.centerX = 0, r.anchorX = .5, r.anchorY = .5, 
                r.y = 34;
                var h = new Laya.Image(t);
                h.width = 60, h.height = 60, h.x = 19, h.y = 4, r.addChild(h);
                var l = new Laya.ProgressBar("gamepad/index/task/progressbar.png");
                l.x = 713, l.y = 20, l.value = e / i;
                var d = new Laya.Label(a + ":  " + n);
                d.color = "#78757B", d.bold = !0, d.fontSize = 33, d.x = 101, d.y = 17.5, r.addChild(d);
                var c = new Laya.Label();
                c.bold = !0, c.anchorX = .5, c.anchorY = .5, c.fontSize = 25, c.centerX = 0, c.color = "#ffffff", 
                c.y = 13, c.text = e + "/" + i, l.addChild(c), r.addChild(l), o.alpha = 0, o.zOrder = 9999999, 
                Laya.stage.addChild(o), this.showtip ? Laya.Tween.to(o, {
                    top: 100,
                    alpha: 1
                }, 500, null, new Laya.Handler(this, function() {
                    Laya.timer.once(2e3, s, function() {
                        o.visible = !1, s.showtip = !1;
                    });
                })) : (this.showtip = !0, Laya.Tween.to(o, {
                    top: 30,
                    alpha: 1
                }, 500, null, new Laya.Handler(this, function() {
                    Laya.timer.once(2e3, s, function() {
                        o.visible = !1, s.showtip = !1;
                    });
                })));
            }
        }, {
            key: "addfragments",
            value: function(e, i) {
                var a = this;
                this.index = i;
                var n, s, o = null;
                n = 1039 + Laya.stage.width / 2 - 640 + 94, s = 685 + Laya.stage.height / 2 - 360 - 28, 
                (o = Laya.Pool.getItemByClass("knapsack", Laya.Image)).skin = "gamepad/index/knapsack.png", 
                o.visible = !0, o.x = n, o.y = Laya.stage.height, Laya.Tween.to(o, {
                    y: s,
                    sacleX: 1.2,
                    sacleY: 1.2
                }, 500, null, new Laya.Handler(this, function() {
                    Laya.Tween.to(o, {
                        y: Laya.stage.height,
                        sacleX: 1,
                        sacleY: 1
                    }, 500, null, new Laya.Handler(a, function() {
                        o.visible = !1, o.destroy(), o = null;
                    }), 1e3);
                })), o.zOrder = 999, Laya.stage.addChild(o), GD.fragmentArray.forEach(function(t) {
                    null == GameData.detailNum[t.id] && (GameData.detailNum[t.id] = 0), t.num = GameData.detailNum[t.id];
                }), C.instance && C.instance.getred();
                for (var r = 0; r < 6; r++) Laya.timer.once(100 * r, this, function() {
                    var n = Laya.Pool.getItemByClass("addfragments" + i, Laya.Image);
                    n.visible = !0, n.skin = "gamepad/index/knapsack/" + i + ".png", n.width = 50, n.height = 50, 
                    n.x = e.x + 5 * (Math.random() - .5) + t.instance.progreX - 60, n.y = e.y + 5 * (Math.random() - .5) - 5, 
                    n.visible = !0, n.zOrder = 999, Laya.stage.addChild(n), a.loopcoin(n, 2);
                });
            }
        }, {
            key: "addcoin",
            value: function(e) {
                for (var i = this, a = 0; a < 6; a++) Laya.timer.once(100 * a, this, function() {
                    var a = Laya.Pool.getItemByClass("coins", Laya.Image);
                    a.skin = "gamepad/index/coin.png", a.x = e.x + 5 * (Math.random() - .5) + t.instance.progreX - 60, 
                    a.y = e.y + 5 * (Math.random() - .5) - 5, a.visible = !0, a.zOrder = 999, Laya.stage.addChild(a), 
                    i.loopcoin(a, 0);
                });
            }
        }, {
            key: "adddimonds",
            value: function(e) {
                for (var i = this, a = 0; a < 6; a++) Laya.timer.once(100 * a, this, function() {
                    var a = Laya.Pool.getItemByClass("dimonds", Laya.Image);
                    a.skin = "gamepad/index/Diamonds.png", a.x = e.x + 5 * (Math.random() - .5) + t.instance.progreX - 60, 
                    a.y = e.y + 5 * (Math.random() - .5) - 5, a.visible = !0, a.zOrder = 999, Laya.stage.addChild(a), 
                    i.loopcoin(a, 1);
                });
            }
        }, {
            key: "loopcoin",
            value: function(t, e) {
                var i = 838 + Laya.stage.width / 2 - 640 - 100, a = 48 + Laya.stage.height / 2 - 360 - 25, n = t.x;
                0 == e || (1 == e ? (i = 1078 + Laya.stage.width / 2 - 640 - 100, a = 46 + Laya.stage.height / 2 - 360 - 25) : (i = 1039 + Laya.stage.width / 2 - 640 + 94, 
                a = 685 + Laya.stage.height / 2 - 360 - 28));
                var s = t.y, o = [], r = new Laya.Point(n, s), h = new Laya.Point(n + 600 * (Math.random() - .5), s + 600 * (Math.random() - .5)), l = new Laya.Point(i, a);
                o.push(r), o.push(h), o.push(l);
                var c = this.CreateBezierPoints(o, 60), m = 0;
                Laya.timer.frameLoop(1, this, function e() {
                    if (m > c.length - 1) return d.getInstance().playcoins(), t.visible = !1, t.x = n, 
                    t.y = s, t.destroy(), void Laya.timer.clear(this, e);
                    t.pos(c[m].x, c[m].y), m++;
                });
            }
        }, {
            key: "CreateBezierPoints",
            value: function(t, e) {
                for (var i = [], a = 0; a < e; a++) {
                    var n = this.MultiPointBezier(t, a / e);
                    i.push(n);
                }
                return i;
            }
        }, {
            key: "MultiPointBezier",
            value: function(t, e) {
                for (var i = t.length, a = 0, n = 0, s = 0; s < i; s++) {
                    var o = t[s];
                    a += o.x * Math.pow(1 - e, i - 1 - s) * Math.pow(e, s) * this.erxiangshi(i - 1, s), 
                    n += o.y * Math.pow(1 - e, i - 1 - s) * Math.pow(e, s) * this.erxiangshi(i - 1, s);
                }
                return {
                    x: a,
                    y: n
                };
            }
        }, {
            key: "erxiangshi",
            value: function(t, e) {
                for (var i = 1, a = 1; e > 0; ) i *= t, a *= e, t--, e--;
                return i / a;
            }
        }, {
            key: "addkillmove",
            value: function(t, e) {
                var i = this;
                if (this.kill) this.killtell.skin = "gamepad/kill/" + t + ".png", this.ainame.text = e, 
                Laya.Tween.clearAll(this.kill); else {
                    this.kill = new Laya.Image(), this.kill.width = 200, this.kill.height = 50;
                    var a = new Laya.Image("gamepad/kill/red.png");
                    this.kill.addChild(a), a.centerX = 200, a.centerY = 0, this.ainame = new Laya.Label(e), 
                    this.ainame.bold = !0, this.ainame.fontSize = 28, this.ainame.color = "#ffffff", 
                    this.ainame.align = "center", this.ainame.width = 102, this.ainame.height = 29, 
                    this.ainame.centerX = 0, this.ainame.centerY = 0, this.ainame.overflow = "hidden", 
                    a.addChild(this.ainame);
                    var n = new Laya.Image("gamepad/kill/blue.png");
                    this.kill.addChild(n);
                    var s = new Laya.Label("我");
                    s.bold = !0, s.fontSize = 28, s.color = "#ffffff", s.align = "center", s.width = 102, 
                    s.height = 29, s.centerX = 0, s.centerY = 0, n.addChild(s), n.centerX = -200, n.centerY = 0;
                    var o = new Laya.Image("gamepad/kill/centent.png");
                    this.kill.addChild(o), o.centerX = 0, o.centerY = 0, this.killtell = new Laya.Image("gamepad/kill/" + t + ".png"), 
                    this.kill.addChild(this.killtell), this.killtell.centerX = 0, this.killtell.centerY = 0, 
                    Laya.stage.addChild(this.kill), this.kill.centerX = 0, this.kill.top = 90;
                }
                1 == t ? d.getInstance().playfirstblood() : 2 == t ? d.getInstance().playdoublekill() : 3 == t ? d.getInstance().playtriblekill() : 4 == t ? d.getInstance().playquadrakill() : 5 == t ? d.getInstance().playpentakill() : d.getInstance().playlegendary(), 
                this.kill.alpha = 0, this.kill.scaleX = 1, this.kill.scaleY = 1, Laya.Tween.to(this.kill, {
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 1e3, null, new Laya.Handler(this, function() {
                    Laya.Tween.to(i.kill, {
                        alpha: 0
                    }, 1e3, null, new Laya.Handler(i, function() {}));
                }));
            }
        }, {
            key: "getposindexX",
            value: function(t) {
                for (var e = 0, i = 0; i < 6; i++) if (t > 30 * i - 80 && t < 30 * (i + 1) - 80) {
                    e = i;
                    break;
                }
                return e;
            }
        }, {
            key: "getposindexY",
            value: function(t) {
                for (var e = 0, i = 0; i < 7; i++) if (t > 25 * i - 80 && t <= 25 * (i + 1) - 80) {
                    e = i;
                    break;
                }
                return e;
            }
        }, {
            key: "weightFragment",
            value: function() {
                for (var t = Math.random(), e = 0, i = 0; i < GD.fragmentconfig.length; i++) if (t <= (e += GD.fragmentconfig[i].weight) / GD.fragment_weights) return i;
            }
        }, {
            key: "setFriends",
            value: function() {
                if (G.isWeChat() && !GA.Info.isPreview) {
                    var t = new Array(), e = {
                        wxgame: {}
                    };
                    e.wxgame.value1 = GameData.Endlessmaxlength, e.wxgame.update_time = Laya.Browser.now();
                    var i = {
                        wxgame: {}
                    };
                    i.wxgame.value1 = GameData.championscore, i.wxgame.update_time = Laya.Browser.now();
                    var a = {
                        wxgame: {}
                    };
                    a.wxgame.value1 = GameData.TimeLimitmaxlength, a.wxgame.update_time = Laya.Browser.now();
                    var n = {
                        wxgame: {}
                    };
                    n.wxgame.value1 = GameData.Crazynummaxlength, n.wxgame.update_time = Laya.Browser.now(), 
                    t.push({
                        key: "endless",
                        value: JSON.stringify(e),
                        update_time: Laya.Browser.now()
                    }, {
                        key: "war",
                        value: JSON.stringify(i),
                        update_time: Laya.Browser.now()
                    }, {
                        key: "TimeLimit",
                        value: JSON.stringify(a),
                        update_time: Laya.Browser.now()
                    }, {
                        key: "Crazy",
                        value: JSON.stringify(n),
                        update_time: Laya.Browser.now()
                    }), wx.setUserCloudStorage({
                        KVDataList: t,
                        success: function(t) {
                            console.log("success:  " + t);
                        },
                        fail: function(t) {
                            console.log("fail:  " + t);
                        }
                    });
                }
            }
        } ], [ {
            key: "getInstance",
            value: function() {
                return this.instance || (this.instance = new t(), this.instance.onshowSausageMan(), 
                this.instance.createGameScene()), this.instance;
            }
        } ]), t;
    }(), L = function() {
        function t() {
            s(this, t), this.bulletSprite3DList = null, this.uavBulletSprite3DList = null, this.poolSprite3DList = [], 
            this.color = [ "Food_Dot_BlackishGreen", "Food_Dot_Blue", "Food_Dot_Brown", "Food_Dot_Green", "Food_Dot_Yellow" ], 
            this.prop = [ "Food_Magnet", "Food_Stars", "Food_Shield" ], this.foods = [ "Food_Burger", "Food_Cola", "Food_Donut", "Food_Drumsticks", "Food_FrenchFries", "Food_HotDog", "Food_Icecream" ], 
            this.timefood = [ "Food_Dumpling", "Food_Tangyuan" ], this.lollipop = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], 
            this.skinname = [ "Skin_Egg", "Skin_Farmer", "Skin_Mantis", "Skin_Mohjong", "Skin_Monkey", "Skin_Ooctopus", "Skin_Panada", "Skin_Pikachu", "Skin_Rabbit", "Skin_Shark", "Skin_Spaceman", "Skin_Tiger", "Skin_Poker", "Skin_Shrimp", "Skin_TweakCube", "Skin_ChristmasTree", "Skin_SantaClaus", "Skin_Snowman", "Skin_Moose", "Skin_RedEnvelope", "Skin_SonGoku", "Skin_BlackWarrior", "Skin_Mammon", "Skin_Toque", "Skin_TigerCubs", "Skin_Denim", "Skin_MengHu", "Skin_BDD" ], 
            this.jichuskin = [ "Snake_Blue", "Snake_Cyan", "Snake_Green", "Snake_Orange", "Snake_Pink", "Snake_Purple", "Snake_Red", "Snake_Yellow" ], 
            this.skin_ = [ {
                name: "Skin_Egg_",
                num: 3
            }, {
                name: "Skin_Farmer_",
                num: 3
            }, {
                name: "Skin_Mantis_",
                num: 3
            }, {
                name: "Skin_Mohjong_",
                num: 5
            }, {
                name: "Skin_Monkey_",
                num: 3
            }, {
                name: "Skin_Ooctopus_",
                num: 3
            }, {
                name: "Skin_Panada_",
                num: 3
            }, {
                name: "Skin_Pikachu_",
                num: 3
            }, {
                name: "Skin_Rabbit_",
                num: 3
            }, {
                name: "Skin_Shark_",
                num: 3
            }, {
                name: "Skin_Spaceman_",
                num: 3
            }, {
                name: "Skin_Tiger_",
                num: 3
            }, {
                name: "Skin_Poker_",
                num: 5
            }, {
                name: "Skin_Shrimp_",
                num: 2
            }, {
                name: "Skin_TweakCube_",
                num: 5
            }, {
                name: "Skin_ChristmasTree_",
                num: 3
            }, {
                name: "Skin_SantaClaus_",
                num: 3
            }, {
                name: "Skin_Snowman_",
                num: 3
            }, {
                name: "Skin_Moose_",
                num: 3
            }, {
                name: "Skin_RedEnvelope_",
                num: 2
            }, {
                name: "Skin_SonGoku_",
                num: 2
            }, {
                name: "Skin_BlackWarrior_",
                num: 3
            }, {
                name: "Skin_Mammon_",
                num: 3
            }, {
                name: "Skin_Toque_",
                num: 3
            }, {
                name: "Skin_TigerCubs_",
                num: 3
            }, {
                name: "Skin_Denim_",
                num: 3
            }, {
                name: "Skin_MengHu_",
                num: 3
            }, {
                name: "Skin_BDD_",
                num: 3
            } ], this.hidetime = 0, this.showtime = 0, this.sprite3dPool = [], this.obotdatas = [], 
            this.usetrobots = [];
        }
        return o(t, [ {
            key: "showgame",
            value: function(e) {
                console.log("query=========>", e.query), console.log("res=========>", e), G.gonavigate && (G.gonavigate = !1, 
                (Date.now() - t.instance.hidetime) / 1e3 >= 30 && (GameData.navigateTogame = 1, 
                C.instance && C.instance.updatespeed()), A.instance.showAddCoinmj1(6, GameData.navigateTogame));
            }
        }, {
            key: "hidegame",
            value: function() {
                G.gonavigate && (t.instance.hidetime = Date.now(), console.log("hidetime=========>", t.instance.hidetime));
            }
        }, {
            key: "initSprite3Ds",
            value: function() {
                var t = this;
                GA.PA.onShow(this.showgame), GA.PA.onHide(this.hidegame), r.loadSprite3D("subPack/LayaScene_Snake_Default_1/Conventional/Snake_Default_1.lh", Laya.Handler.create(this, function(e) {
                    t.poolSprite3DList.push({
                        sprite3D: e,
                        url: "Default_1"
                    });
                })), r.loadSprite3D("subPack/LayaScene_Snake_Default_2/Conventional/Snake_Default_2.lh", Laya.Handler.create(this, function(e) {
                    t.poolSprite3DList.push({
                        sprite3D: e,
                        url: "Default_2"
                    });
                }));
                for (var e = function(e) {
                    r.loadSprite3D("subPack/food/Conventional/" + t.foods[e] + ".lh", Laya.Handler.create(t, function(i) {
                        t.poolSprite3DList.push({
                            sprite3D: i,
                            url: t.foods[e]
                        });
                    }));
                }, i = 0; i < this.foods.length; i++) e(i);
                for (var a = function(e) {
                    r.loadSprite3D("subPack/LayaScene_Lollipop/Conventional/Food_Lollipop" + t.lollipop[e] + ".lh", Laya.Handler.create(t, function(i) {
                        t.poolSprite3DList.push({
                            sprite3D: i,
                            url: "Lollipop" + t.lollipop[e]
                        });
                    }));
                }, n = 0; n < this.lollipop.length; n++) a(n);
                for (var s = function(e) {
                    r.loadSprite3D("subPack/food/Conventional/" + t.prop[e] + ".lh", Laya.Handler.create(t, function(i) {
                        t.poolSprite3DList.push({
                            sprite3D: i,
                            url: t.prop[e]
                        });
                    }));
                }, o = 0; o < this.prop.length; o++) s(o);
                for (var h = function(e) {
                    r.loadSprite3D("subPack/time/Conventional/" + t.timefood[e] + ".lh", Laya.Handler.create(t, function(i) {
                        t.poolSprite3DList.push({
                            sprite3D: i,
                            url: t.timefood[e]
                        });
                    }));
                }, l = 0; l < this.timefood.length; l++) h(l);
                for (var d = function(e) {
                    r.loadSprite3D("subPack/food/Conventional/" + t.color[e] + ".lh", Laya.Handler.create(t, function(i) {
                        t.poolSprite3DList.push({
                            sprite3D: i,
                            url: t.color[e]
                        });
                    }));
                }, c = 0; c < this.color.length; c++) d(c);
                r.loadSprite3D("subPack/Ef/LayaScene_Base/Conventional/Base.lh", Laya.Handler.create(this, function(e) {
                    t.poolSprite3DList.push({
                        sprite3D: e,
                        url: "Base"
                    });
                })), r.loadSprite3D("subPack/Ef/LayaScene_Ef_JinQianHu/Conventional/Ef_JinQianHu.lh", Laya.Handler.create(this, function(e) {
                    t.poolSprite3DList.push({
                        sprite3D: e,
                        url: "Ef_JinQianHu"
                    });
                })), r.loadSprite3D("subPack/Ef/LayaScene_Ef_PiFuzhanshi/Conventional/Ef_PiFuzhanshi.lh", Laya.Handler.create(this, function(e) {
                    t.poolSprite3DList.push({
                        sprite3D: e,
                        url: "pifuzhanshi_Alpha"
                    });
                })), r.loadSprite3D("subPack/Ef/LayaScene_Ef_WuDi/Conventional/Ef_WuDi.lh", Laya.Handler.create(this, function(e) {
                    t.poolSprite3DList.push({
                        sprite3D: e,
                        url: "Ef_WuDi"
                    });
                })), r.loadSprite3D("subPack/Ef/LayaScene_Ef_XiTieShi/Conventional/Ef_XiTieShi.lh", Laya.Handler.create(this, function(e) {
                    t.poolSprite3DList.push({
                        sprite3D: e,
                        url: "xitieshi_Alpha"
                    });
                })), r.loadSprite3D("subPack/Ef/LayaScene_Ef_JiaSu/Conventional/Ef_JiaSu.lh", Laya.Handler.create(this, function(e) {
                    t.poolSprite3DList.push({
                        sprite3D: e,
                        url: "jiasu_Add"
                    });
                }));
                for (var m = function(e) {
                    for (var i = function(i) {
                        r.loadSprite3D("subPack/LayaScene_Skin/Conventional/" + t.skin_[e].name + i + ".lh", Laya.Handler.create(t, function(a) {
                            t.poolSprite3DList.push({
                                sprite3D: a,
                                url: t.skin_[e].name + i
                            });
                        }));
                    }, a = 1; a <= t.skin_[e].num; a++) i(a);
                }, u = 0; u < this.skin_.length; u++) m(u);
                r.loadSprite3D("subPack/LayaScene_Skin/Conventional/Skin_Shrimp_3.lh", Laya.Handler.create(this, function(e) {
                    t.poolSprite3DList.push({
                        sprite3D: e,
                        url: "Skin_Shrimp_3"
                    });
                })), this.poolSprite3DList.forEach(function(t) {
                    Util.SetEffectRenderModeByRootName(t.sprite3D);
                });
            }
        }, {
            key: "createSprite3D",
            value: function(t) {
                var e = this.getPoolSprite3D(t);
                return e ? e.active = !0 : (e = this.getSprite3D(t), (e = Laya.Sprite3D.instantiate(e))._setCreateURL(t)), 
                e;
            }
        }, {
            key: "getSprite3D",
            value: function(t) {
                for (var e = 0; e < this.poolSprite3DList.length; e++) if (this.poolSprite3DList[e].url.indexOf(t) >= 0) return this.poolSprite3DList[e].sprite3D;
                return console.warn("未获取到对象池节点"), this.poolSprite3DList[0].sprite3D;
            }
        }, {
            key: "getPoolSprite3D",
            value: function(t) {
                for (var e = 0; e < this.sprite3dPool.length; e++) if (this.sprite3dPool[e].url.indexOf(t) >= 0) {
                    var i = this.sprite3dPool[e];
                    return this.sprite3dPool.splice(e, 1), i;
                }
                return null;
            }
        }, {
            key: "recoverySprite3D",
            value: function(t) {
                t.active = !1, t.removeSelf(), this.sprite3dPool.push(t);
            }
        }, {
            key: "clear",
            value: function() {
                console.log("clear bullet pool"), this.sprite3dPool.forEach(function(t) {
                    t.destroy();
                }), this.sprite3dPool = [], this.bulletSprite3DList.forEach(function(t) {
                    t.sprite3D.destroy();
                }), this.uavBulletSprite3DList.forEach(function(t) {
                    t.sprite3D.destroy();
                }), this.poolSprite3DList.forEach(function(t) {
                    t.sprite3D.destroy();
                });
            }
        }, {
            key: "getRobots",
            value: function(t) {
                var e = this;
                GA.request({
                    url: G.getSomeRobots,
                    data: {
                        limit: t
                    },
                    method: "POST",
                    success: function(t) {
                        console.log("getRobotsres:", t), e.obotdatas = t.data.data, e.usetrobots = e.getRandomArrayElements(e.obotdatas, 13);
                    }
                });
            }
        }, {
            key: "changename",
            value: function(t) {
                var e = this;
                this.oldobotdatas = this.obotdatas.filter(function(t) {
                    return !e.usetrobots.some(function(e) {
                        return e === t;
                    });
                });
                var i = this.oldobotdatas[MyMath.rand(0, this.oldobotdatas.length - 1)];
                -1 == this.usetrobots.indexOf(i) ? this.usetrobots[t] = i : this.changename(t);
            }
        }, {
            key: "getrandomArray",
            value: function(t) {
                var e = t.count();
                return t.length, e.sort(function(t, e) {
                    return Math.random() - .5;
                }), e.slice(0, 2);
            }
        }, {
            key: "getRandomArrayElements",
            value: function(t, e) {
                for (var i, a, n = t.slice(0), s = t.length, o = s - e; s-- > o; ) i = n[a = Math.floor((s + 1) * Math.random())], 
                n[a] = n[s], n[s] = i;
                return n.slice(o);
            }
        } ], [ {
            key: "instance",
            get: function() {
                return null == t._instance && (t._instance = new t()), t._instance;
            }
        } ]), t;
    }();
    L._instance = null;
    var S = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.call(this)).root = null, t.movepos = [], t.moveRotation = [], 
            t.oldmovepos = [], t.oldmoveRotation = [], t.fraction = 0, t.level = 0, t.inedex = 0, 
            t.moveindex = 0, t.moveroot = !1, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.root = this.owner;
            }
        }, {
            key: "showcanCollideWith",
            value: function(t) {}
        }, {
            key: "position",
            get: function() {
                if (this.root.transform) return this.root.transform.position;
                this.root;
            },
            set: function(t) {
                this.root.transform.position = t;
            }
        } ]), i;
    }(Laya.Script3D), M = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).roots = null, t.index = 0, t.skinindex = 0, 
            t.identifier = 0, t.Growth = 1, t.MagnetTime = 10, t.Avoidance = .4, t.relive = 3, 
            t.InitialLength = 100, t.Acceleration_frq = 40, t.titlePos = ex.v2(0, 0), t.Norevolt = !1, 
            t.xiawei = null, t.xiaweiPos = new Laya.Vector3(), t.jiasus = [], t.movepos = [], 
            t.turnangel = !1, t.moveTime = 0, t.timeRotation = [], t.oldtimeRotation = [], t.timeposition = [], 
            t.oldtimeposition = [], t.tobrickDirs = [], t.eattime = 0, t.changeEat = !1, t.die = !1, 
            t.rootpos = [], t.Invincible = !1, t.fraction = 0, t.Grade = 1, t.firstGrade = 1, 
            t.dttimes = 0, t.Acelerateing = !1, t.mastmovetime = 6, t.speed = 2, t.moveup = !1, 
            t.movedown = !1, t.distant = 3, t.multiple = 1, t.oldmastmovetime = 6, t.outpos = ex.v3(0, 0, 0), 
            t.addpos = ex.v3(0, 0, 0), t.chapos = ex.v3(0, 0, 0), t.outRotation = 0, t.xitieshiTime = -1, 
            t.target = !1, t.maxbrickDirs = 1e4, t.attack = !1, t.move = !1, t.eat = !1, t.randmovepos = ex.v3(0, 0, 0), 
            t.movejudge = 0, t.runflee = !1, t.beanpos = [], t.out = new Laya.Vector3(), t.speedz = .01, 
            t.speedy = .01, t.speedx = .01, t.movespeed = .2, t.backupsAi = !1, t.oldlocalScale = 1, 
            t.oldrelive = 0, t.oldGrade = 0, t.oldfraction = 0, t.oldrootpos = [], t.oldboxs = [], 
            t.Lollipoppos = [], t.boxsdistance = [], t.swerve = !0, t.boxs = [], t.angle = 0, 
            t.movetochange = !1, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.roots = this.owner, this.playEf_WuDi(), this.playxitieshi(), this.addjingqian();
            }
        }, {
            key: "addcollisionGroup",
            value: function() {}
        }, {
            key: "addjingqian",
            value: function() {}
        }, {
            key: "setguangyu",
            value: function() {}
        }, {
            key: "showEf_WuDi",
            value: function() {
                this.Ef_WuDi ? (this.Ef_WuDi.active = !0, Util.PlayEffect(this.Ef_WuDi)) : (this.Ef_WuDi = L.instance.createSprite3D("Ef_WuDi"), 
                this.roots.addChild(this.Ef_WuDi), this.Ef_WuDi.active = !0, Util.SetEffectRenderModeByRootName(this.Ef_WuDi), 
                Util.PlayEffect(this.Ef_WuDi));
            }
        }, {
            key: "playEf_WuDi",
            value: function() {
                this.Ef_WuDi ? this.Ef_WuDi.active = !1 : (this.Ef_WuDi = L.instance.createSprite3D("Ef_WuDi"), 
                this.roots.addChild(this.Ef_WuDi), this.Ef_WuDi.getChildAt(0).particleSystem.startSizeConstant = 15, 
                this.Ef_WuDi.getChildAt(0).particleSystem.startSizeConstantMax = 15, this.Ef_WuDi.active = !1, 
                Util.SetEffectRenderModeByRootName(this.Ef_WuDi));
            }
        }, {
            key: "addXiawei",
            value: function() {
                this.xiawei = L.instance.createSprite3D("Skin_Shrimp_3");
                var t = this.xiawei.transform;
                A.instance.newScene.addChild(this.xiawei), t.position = ex.v3(this.roots.transform.position.x - 1, this.roots.transform.position.y, this.roots.transform.position.z);
                var e;
                e = GD.Battleconfig.length > this.Grade ? GD.Battleconfig[this.Grade].scale : GD.Battleconfig[GD.Battleconfig.length - 1].scale, 
                GD.Battleconfig[this.Grade].scale > 1 && (this.xiawei.transform.localScale = ex.v3(e, e, e));
            }
        }, {
            key: "showAIname",
            value: function() {
                L.instance.usetrobots.length > 1 && this.showAddCoinmj1(L.instance.usetrobots[this.index - 1].nickname);
            }
        }, {
            key: "playxitieshi",
            value: function() {
                this.xitieshi_Alpha ? this.xitieshi_Alpha.active = !1 : (this.xitieshi_Alpha = L.instance.createSprite3D("xitieshi_Alpha"), 
                this.roots.addChild(this.xitieshi_Alpha), this.xitieshi_Alpha.active = !1, Util.SetEffectRenderModeByRootName(this.xitieshi_Alpha));
            }
        }, {
            key: "playjiasu_Add",
            value: function() {
                var t = this;
                if (this.jiasu_Add) {
                    if (this.jiasu_Add.active && this.jiasus) for (var e = 0; e < this.jiasus.length; e++) this.jiasus[e] && this.jiasus[e].parent.active && this.jiasus[e].numChildren >= 1 && (this.jiasus[e].active = !0, 
                    this.jiasus[e].getChildAt(0).particleSystem.startSizeConstant = 4 * this.multiple, 
                    this.jiasus[e].getChildAt(0).particleSystem.startSizeConstantMax = 4 * this.multiple, 
                    Util.PlayEffect(this.jiasus[e]));
                    this.jiasu_Add.getChildAt(0).particleSystem.startSizeConstant = 4 * this.multiple, 
                    this.jiasu_Add.getChildAt(0).particleSystem.startSizeConstantMax = 4 * this.multiple, 
                    Util.PlayEffect(this.jiasu_Add);
                } else {
                    this.jiasu_Add = L.instance.createSprite3D("jiasu_Add"), this.jiasu_Add.transform.localPositionY = .5, 
                    this.boxs[1].root.addChild(this.jiasu_Add), Util.SetEffectRenderModeByRootName(this.jiasu_Add), 
                    this.jiasu_Add.transform.rotationEuler = ex.v3(0, 180, 0), this.jiasu_Add.active = !1, 
                    Util.PlayEffect(this.jiasu_Add);
                    var i = L.instance.createSprite3D("jiasu_Add");
                    i.transform.localPositionY = .5, this.boxs[2].root.addChild(i), Util.SetEffectRenderModeByRootName(i), 
                    i.transform.rotationEuler = ex.v3(0, 180, 0), i.active = !1, Util.PlayEffect(i), 
                    this.jiasus[0] = i;
                }
                Laya.timer.once(500, this, function() {
                    t.playjiasu_Add();
                });
            }
        }, {
            key: "position",
            get: function() {
                return this.roots.transform.position;
            },
            set: function(t) {
                this.roots.transform.position = t;
            }
        }, {
            key: "changepos",
            value: function(t) {
                for (var e = 0; e < this.boxs.length; e++) t >= this.boxs[e].movepos.length || this.boxs[e].movepos.length > 1 && (this.boxs[e].position = this.boxs[e].movepos[t], 
                this.boxs[e].owner.transform.localRotationEulerY = this.boxs[e].moveRotation[t]);
                if (21 == this.skinindex) {
                    var i = this.boxs[this.boxs.length - 1].root.transform.localRotationEulerY + 180;
                    i *= Math.PI / 180;
                    var a = Math.round(.5 * Math.sin(i) * this.multiple * 100) / 100, n = Math.round(.4 * Math.cos(i) * this.multiple * 100) / 100;
                    this.xiaweiPos.x = this.boxs[this.boxs.length - 1].root.transform.position.x + a, 
                    this.xiaweiPos.y = this.boxs[this.boxs.length - 1].root.transform.position.y, this.xiaweiPos.z = this.boxs[this.boxs.length - 1].root.transform.position.z + n, 
                    this.xiawei.transform.position = this.xiaweiPos, this.xiawei.transform.localRotationEulerY = this.boxs[this.boxs.length - 1].root.transform.localRotationEulerY + 180;
                } else this.xiawei && (this.xiawei.active = !1);
            }
        }, {
            key: "setpos",
            value: function(t, e) {
                for (var i = this.boxs.length - 1; i >= 0; i--) 0 == i ? (this.boxs[i].movepos = t.concat(), 
                this.boxs[i].moveRotation = e.concat()) : (this.boxs[i].movepos = this.boxs[i - 1].movepos.concat(), 
                this.boxs[i].moveRotation = this.boxs[i - 1].moveRotation.concat());
            }
        }, {
            key: "updateAImove",
            value: function() {
                var t = this, e = Laya.timer.delta / 1e3;
                if (e > .16 && (e = .16), !this.die) {
                    if (this.xitieshiTime > 0 ? (this.xitieshiTime -= 1e3 * e, this.distant = 8 * ((this.multiple - 1) / 2 + 1), 
                    this.xitieshi_Alpha.active = !0) : (this.distant = 3 * ((this.multiple - 1) / 2 + 1), 
                    this.xitieshi_Alpha.active = !1), e = .017, this.Acelerateing ? (this.dttimes -= e, 
                    this.dttimes < 0 && (this.Acelerateing = !1, this.dttimes = 0)) : (this.dttimes += e, 
                    this.dttimes >= this.Acceleration_frq && (A.instance.RegimentWar ? this.dttimes >= this.Acceleration_frq + 50 && (this.dttimes = MyMath.rand(2, 5), 
                    this.Acelerateing = !0) : (this.dttimes = MyMath.rand(5, 20), this.Acelerateing = !0))), 
                    this.Acelerateing ? (this.speed < 4 * this.multiple ? this.speed += .1 : this.speed = 4 * this.multiple, 
                    this.speed >= 4 * this.multiple ? this.mastmovetime = 3 : this.speed >= 3 * this.multiple ? this.mastmovetime = 4 : this.speed >= 2.5 * this.multiple ? this.mastmovetime = 5 : this.mastmovetime = 6) : (this.speed > 2 * this.multiple ? this.speed -= .1 : this.speed = 2 * this.multiple, 
                    this.speed >= 4 * this.multiple ? this.mastmovetime = 3 : this.speed >= 3 * this.multiple ? this.mastmovetime = 4 : this.speed >= 2.5 * this.multiple ? this.mastmovetime = 5 : this.mastmovetime = 6), 
                    this.moveTime < this.mastmovetime) {
                        if (this.moveTime++, this.timeRotation[this.moveTime] = this.roots.transform.localRotationEulerY, 
                        this.timeposition[this.moveTime] = this.roots.transform.position.clone(), this.moveTime > 1) {
                            Laya.Vector3.subtract(this.timeposition[this.moveTime], this.timeposition[1], this.outpos), 
                            Laya.Vector3.scale(this.outpos, 1 / (this.moveTime - 1), this.outpos);
                            for (var i = 1; i <= this.moveTime; i++) Laya.Vector3.scale(this.outpos, i - 1, this.chapos), 
                            Laya.Vector3.add(this.timeposition[1], this.chapos, this.addpos), this.timeposition[i] = this.addpos.clone();
                        }
                        if (this.mastmovetime != this.oldmastmovetime) {
                            for (var a = this.boxs.length - 1; a >= 0; a--) if (this.boxs[a].movepos.length > 1) {
                                Laya.Vector3.subtract(this.boxs[a].movepos[this.oldmastmovetime], this.boxs[a].movepos[1], this.outpos), 
                                Laya.Vector3.scale(this.outpos, 1 / (this.mastmovetime - 1), this.outpos), this.outRotation = (this.boxs[a].moveRotation[this.oldmastmovetime] - this.boxs[a].moveRotation[1]) / this.mastmovetime;
                                for (var n = 1; n <= this.mastmovetime; n++) Laya.Vector3.scale(this.outpos, n - 1, this.chapos), 
                                Laya.Vector3.add(this.boxs[a].movepos[1], this.chapos, this.addpos), this.boxs[a].movepos[n] = this.addpos.clone(), 
                                this.boxs[a].moveRotation[n] = this.boxs[a].moveRotation[1] + this.outRotation * (n - 1);
                            }
                            this.oldmastmovetime = this.mastmovetime;
                        }
                        this.changepos(this.moveTime), this.moveTime >= this.mastmovetime && !this.moveup && (this.moveTime = 0, 
                        this.oldtimeRotation = this.timeRotation.concat(), this.oldtimeposition = this.timeposition.concat(), 
                        this.setpos(this.oldtimeposition, this.oldtimeRotation));
                    } else this.moveTime++, this.timeRotation[this.moveTime] = this.roots.transform.localRotationEulerY, 
                    this.moveup = !1, this.timeposition[this.moveTime] = this.roots.transform.position.clone(), 
                    this.changepos(this.moveTime), this.moveTime = 0, this.oldtimeRotation = this.timeRotation.concat(), 
                    this.oldtimeposition = this.timeposition.concat(), this.setpos(this.oldtimeposition, this.oldtimeRotation);
                    this.eattime++;
                    var s = 4 * this.speed * e, o = this.roots.transform.position.x, r = this.roots.transform.position.z;
                    if (this.movejudge % 200 == 0) {
                        var h = Math.random();
                        A.instance.RegimentWar ? h <= .5 ? (this.eat = !0, this.attack = !1, this.move = !1) : h <= .55 ? (this.eat = !1, 
                        this.attack = !0, this.move = !1) : (this.eat = !1, this.attack = !1, this.move = !0, 
                        this.randmovepos = MyMath.v3temp_2(36 * (2 * Math.random() - 1), 0, 36 * (2 * Math.random() - 1))) : h <= .4 ? (this.eat = !0, 
                        this.attack = !1, this.move = !1) : h <= .6 ? (this.eat = !1, this.attack = !0, 
                        this.move = !1) : (this.eat = !1, this.attack = !1, this.move = !0, this.randmovepos = MyMath.v3temp_2(76 * (2 * Math.random() - 1), 0, 76 * (2 * Math.random() - 1)));
                    }
                    if (this.runflee || (A.instance.RegimentWar ? (Math.abs(o) >= 30 || Math.abs(r) >= 30) && (this.movejudge = 200, 
                    this.eat = !1, this.attack = !1, this.move = !0, this.randmovepos = MyMath.v3temp_2(10 * (2 * Math.random() - 1), 0, 10 * (2 * Math.random() - 1)), 
                    this.runflee = !0, this.turnangel = !1, this.target = !1, Laya.timer.once(500, this, function() {
                        t.runflee = !1;
                    })) : (Math.abs(o) >= 70 || Math.abs(r) >= 70) && (this.movejudge = 200, this.eat = !1, 
                    this.attack = !1, this.move = !0, this.randmovepos = MyMath.v3temp_2(50 * (2 * Math.random() - 1), 0, 50 * (2 * Math.random() - 1)), 
                    this.runflee = !0, this.turnangel = !1, this.target = !1, Laya.timer.once(500, this, function() {
                        t.runflee = !1;
                    }))), this.movejudge++, this.eat) {
                        if (this.turnangel || this.target) this.movetochange && this.aichangeDirection(this.angle); else if (this.brickDir) {
                            var l = MyMath.CalculateAngleV3(ex.v3(this.brickDir.x, 0, -this.brickDir.z), ex.v3(o, 0, -r));
                            (l += 90) > 180 && l > -90 && (l -= 360), l > 0 ? l -= 180 : l < 0 && (l += 180), 
                            this.aichangeDirection(l);
                        }
                    } else if (this.attack) {
                        var d = I.instance.play.root.transform.position.clone();
                        if (!this.turnangel && !this.target) {
                            var c = ex.v3(d.x + 5 * (4 * Math.random() - 2), d.y, d.z + 5 * (4 * Math.random() - 2)), m = MyMath.CalculateAngleV3(ex.v3(c.x, 0, -c.z), ex.v3(o, 0, -r));
                            (m += 90) > 180 && m > -90 && (m -= 360), m > 0 ? m -= 180 : m < 0 && (m += 180), 
                            this.aichangeDirection(m);
                        }
                    } else if (this.move && !this.turnangel && !this.target) {
                        var u = MyMath.CalculateAngleV3(ex.v3(this.randmovepos.x, 0, -this.randmovepos.z), ex.v3(o, 0, -r));
                        (u += 90) > 180 && u > -90 && (u -= 360), u > 0 ? u -= 180 : u < 0 && (u += 180), 
                        this.aichangeDirection(u);
                    }
                    var g = this.roots.transform.localRotationEulerY;
                    g *= Math.PI / 180;
                    var y = Math.sin(g) * s + o, v = Math.cos(g) * s + r;
                    if (A.instance.RegimentWar) {
                        if ((Math.abs(v) >= 40 || Math.abs(y) >= 40) && !this.die) return console.log("撞墙死"), 
                        void this.showdie();
                    } else if ((Math.abs(v) >= 80 || Math.abs(y) >= 80) && !this.die) return console.log("撞墙死"), 
                    void this.showdie();
                    if (this.roots.transform.position = ex.v3(y, this.roots.transform.position.y, v), 
                    I.instance.playspos[this.index] = this.roots.transform.position.clone(), I.instance.playdistant[this.index] = this.distant, 
                    this.rootpos[0] = ex.v2(this.roots.transform.position.x, this.roots.transform.position.z), 
                    !this.die) {
                        for (var p = 0; p < this.boxs.length; p++) this.boxs[p].position && (this.rootpos[p + 1] = ex.v2(this.boxs[p].position.x, this.boxs[p].position.z));
                        if (!this.die) {
                            for (var f = 0; f < A.instance.FoodStarts.length; f++) if (null != A.instance.FoodRamdStarts[f] && A.getInstance().showdistent(this.roots.transform.position, this.distant, A.instance.FoodStarts[f].transform.position) && A.instance.FoodStarts[f].active) return A.instance.FoodRamdStarts[f], 
                            void this.moveprop(f, 1);
                            if (A.instance.TimeLimit || A.instance.RegimentWar) for (var k = 0; k < A.instance.FoodShield.length; k++) null != A.instance.FoodRamdShield[k] && A.getInstance().showdistent(this.roots.transform.position, this.distant + .2, A.instance.FoodShield[k].transform.position) && A.instance.FoodShield[k].active && (A.instance.FoodRamdShield[k] = null, 
                            this.moveprop(k, 4));
                            for (var w = 0; w < A.instance.FoodMagnets.length; w++) if (null != A.instance.FoodRamdMagnets[w]) {
                                if (A.getInstance().showdistent(this.roots.transform.position, this.distant, A.instance.FoodMagnets[w].transform.position) && A.instance.FoodMagnets[w].active) return A.instance.FoodRamdMagnets[w] = null, 
                                void this.moveprop(w, 3);
                            } else A.instance.FoodMagnets[w].active = !1;
                            Util.WorldToScreen2(A.instance.camera, this.roots.transform.position, this.titlePos), 
                            this.label_addCoin && (this.titlePos.x > Laya.stage.width || this.titlePos.y > Laya.stage.height || this.titlePos.x < 0 || this.titlePos.y < 0 ? this.label_addCoin.visible = !1 : (this.label_addCoin.visible = !0, 
                            this.label_addCoin.x = this.titlePos.x, this.label_addCoin.y = this.titlePos.y, 
                            this.label_addCoin.rotation = 0));
                        }
                    }
                }
            }
        }, {
            key: "showAddCoinmj1",
            value: function(t) {
                this.label_addCoin ? this.label_addCoin.text = t : (this.label_addCoin = Laya.Pool.getItemByClass("label_tips", Laya.Label), 
                this.label_addCoin.width = 384, this.label_addCoin.height = 105, this.label_addCoin.text = t, 
                this.label_addCoin.align = "center", this.label_addCoin.valign = "middle", this.label_addCoin.wordWrap = !0, 
                this.label_addCoin.bold = !0, this.label_addCoin.anchorX = .5, this.label_addCoin.anchorY = 1, 
                this.label_addCoin.fontSize = 30, this.label_addCoin.stroke = 4, this.label_addCoin.strokeColor = "#000000", 
                this.label_addCoin.color = "#ffffff", this.label_addCoin.visible = !0, this.label_addCoin.zOrder = -1, 
                Laya.stage.addChild(this.label_addCoin));
            }
        }, {
            key: "moveFoodStarts",
            value: function() {}
        }, {
            key: "moveprop",
            value: function(t, e) {
                var i, a = this;
                if (3 == e ? (i = A.instance.FoodMagnets[t], A.instance.FoodRamdMagnets[t] = null) : 4 == e ? (i = A.instance.FoodShield[t], 
                A.instance.FoodRamdShield[t] = null) : (i = A.instance.FoodStarts[t], A.instance.FoodRamdStarts[t] = null), 
                I.instance.Acelerateing || this.xitieshi_Alpha.active || 2 == e || A.getInstance().pDistance(i.transform.position.x, i.transform.position.z, this.roots.transform.position.x, this.roots.transform.position.z, 2.5) ? this.movespeed = Math.round(.8 * this.multiple * 10) / 10 : this.movespeed = Math.round(.4 * this.multiple * 10) / 10, 
                this.out = MyMath.v3(0, 0, 0), Laya.Vector3.subtract(i.transform.position, this.roots.transform.position, this.out), 
                this.out.x > this.movespeed ? this.speedx = -this.movespeed : this.out.x < -this.movespeed ? this.speedx = this.movespeed : this.speedx = -this.out.x, 
                this.out.y > this.movespeed ? this.speedy = -this.movespeed : this.out.y < this.movespeed ? this.speedy = this.movespeed : this.speedy = -this.out.y, 
                this.out.z > this.movespeed ? this.speedz = -this.movespeed : this.out.z < -this.movespeed ? this.speedz = this.movespeed : this.speedz = -this.out.z, 
                i.transform.localRotationEuler = MyMath.v3(0, 0, 0), i.transform.translate(MyMath.v3(this.speedx, this.speedy, this.speedz)), 
                Math.abs(this.out.x) <= this.movespeed && Math.abs(this.out.y) <= this.movespeed && Math.abs(this.out.z) <= this.movespeed || this.die) if (i.active = !1, 
                3 == e) Laya.timer.once(1e4, this, function() {
                    A.instance.RegimentWar ? (A.instance.FoodMagnets[t].transform.position = ex.v3(MyMath.randFloat(-38, 38), 0, MyMath.randFloat(-38, 38)), 
                    A.instance.FoodRamdMagnets[t] = ex.v2(MyMath.randFloat(-38, 38), MyMath.randFloat(-38, 38))) : (A.instance.FoodMagnets[t].transform.position = ex.v3(MyMath.randFloat(-80, 80), 0, MyMath.randFloat(-80, 80)), 
                    A.instance.FoodRamdMagnets[t] = ex.v2(MyMath.randFloat(-80, 80), MyMath.randFloat(-80, 80))), 
                    i.active = !0;
                }), G.vibrateShort(), this.xitieshiTime > 0 ? this.xitieshiTime += 1e4 + this.MagnetTime : this.xitieshiTime = 1e4 + this.MagnetTime; else if (4 == e) Laya.timer.once(1e4, this, function() {
                    A.instance.RegimentWar ? (A.instance.FoodShield[t].transform.position = ex.v3(MyMath.randFloat(-38, 38), 0, MyMath.randFloat(-38, 38)), 
                    A.instance.FoodRamdShield[t] = ex.v2(MyMath.randFloat(-38, 38), MyMath.randFloat(-38, 38))) : (A.instance.FoodShield[t].transform.position = ex.v3(MyMath.randFloat(-80, 80), 0, MyMath.randFloat(-80, 80)), 
                    A.instance.FoodRamdShield[t] = ex.v2(MyMath.randFloat(-80, 80), MyMath.randFloat(-80, 80))), 
                    i.active = !0;
                }), G.vibrateShort(), this.Invincible = !0, this.showEf_WuDi(), this.Ef_WuDi.active = !0, 
                Laya.timer.clear(this, this.invin), 4 == A.instance.skintype ? Laya.timer.once(5e3 + 1e3 * A.instance.attribute, this, this.invin) : Laya.timer.once(5e3, this, this.invin); else {
                    i.active = !0, this.fraction += MyMath.rand(30, 75), A.instance.RegimentWar ? (A.instance.FoodStarts[t].transform.position = ex.v3(MyMath.randFloat(-38, 38), 0, MyMath.randFloat(-38, 38)), 
                    A.instance.FoodRamdStarts[t] = MyMath.v2temp1(MyMath.randFloat(-38, 38), MyMath.randFloat(-38, 38))) : (A.instance.FoodStarts[t].transform.position = ex.v3(MyMath.randFloat(-80, 80), 0, MyMath.randFloat(-80, 80)), 
                    A.instance.FoodRamdStarts[t] = MyMath.v2temp1(MyMath.randFloat(-80, 80), MyMath.randFloat(-80, 80)));
                    var n = 100 * Math.pow(GD.Battleconfig[1].numa, this.Grade) + (this.Grade - 1) * GD.Battleconfig[1].numb;
                    I.instance.scoreArray[this.index].score = Math.round((this.fraction - GD.Battleconfig[1].numd) / (this.Grade + GD.Battleconfig[1].numc) + 100), 
                    (n - 100) * (this.Grade + 1 + GD.Battleconfig[1].numc) + GD.Battleconfig[1].numd <= this.fraction && (this.Grade++, 
                    I.instance.scoreArray[this.index].score = Math.round((this.fraction - GD.Battleconfig[1].numd) / (this.Grade + GD.Battleconfig[1].numc) + 100), 
                    this.addBoxs(), GD.Battleconfig[this.Grade].scale > 1 && (this.multiple = GD.Battleconfig[this.Grade].scale, 
                    this.roots.transform.localScale.x != this.multiple && (this.multiple = GD.Battleconfig[this.Grade].scale, 
                    this.boxs.forEach(function(t) {
                        t.root.transform.localScale = MyMath.v3(a.multiple, a.multiple, a.multiple);
                    }), 21 == this.skinindex && (this.xiawei.transform.localScale = MyMath.v3(this.multiple, this.multiple, this.multiple)), 
                    this.roots.transform.localScale = MyMath.v3(this.multiple, this.multiple, this.multiple))));
                } else Laya.timer.once(10, this, function() {
                    a.moveprop(t, e);
                });
            }
        }, {
            key: "invin",
            value: function() {
                this.Invincible = !1, this.Ef_WuDi.active = !1;
            }
        }, {
            key: "movetoroot",
            value: function(t, e) {
                var i = this, a = t.root;
                if (this.target = !1, this.eattime = 0, this.die) {
                    if (t.moveroot = !1, 2 == e) {
                        t.moveroot = !0;
                        var n = A.instance.Beans.indexOf(t);
                        A.instance.Beans.splice(n, 1), A.instance.Beanspos.splice(n, 1), L.instance.recoverySprite3D(a);
                    } else 3 == e ? (t.active = !1, t.moveroot = !0, a.transform.position = I.instance.changepos(), 
                    Laya.timer.once(1e4, this, function() {
                        t.active = !0, t.moveroot = !1;
                    }), Laya.timer.once(500, this, function() {
                        t.active = !0;
                    })) : a.transform.position = I.instance.changepos();
                    if (1 == e) {
                        var s = A.instance.Beans.indexOf(t);
                        A.instance.Beanspos[s] = a.transform.position.clone();
                    }
                } else if (this.Acelerateing || this.xitieshi_Alpha.active || 2 == e || A.getInstance().pDistance(a.transform.position.x, a.transform.position.z, this.roots.transform.position.x, this.roots.transform.position.z, 2.5) ? this.movespeed = Math.round(.8 * this.multiple * 10) / 10 : this.movespeed = Math.round(.4 * this.multiple * 10) / 10, 
                this.out = ex.v3(0, 0, 0), Laya.Vector3.subtract(a.transform.position, this.roots.transform.position, this.out), 
                this.out.x > this.movespeed ? this.speedx = -this.movespeed : this.out.x < -this.movespeed ? this.speedx = this.movespeed : this.speedx = -this.out.x, 
                this.out.y > this.movespeed ? this.speedy = -this.movespeed : this.out.y < this.movespeed ? this.speedy = this.movespeed : this.speedy = -this.out.y, 
                this.out.z > this.movespeed ? this.speedz = -this.movespeed : this.out.z < -this.movespeed ? this.speedz = this.movespeed : this.speedz = -this.out.z, 
                a.transform.localRotationEuler = MyMath.v3(0, 0, 0), a.transform.translate(MyMath.v3(this.speedx, this.speedy, this.speedz)), 
                Math.abs(this.out.x) <= this.movespeed && Math.abs(this.out.y) <= this.movespeed && Math.abs(this.out.z) <= this.movespeed || this.die) {
                    if (0 == e) {
                        t.moveroot = !1;
                        var o = A.instance.Beans.indexOf(t);
                        A.instance.Beanspos[o] = a.transform.position.clone(), a.transform.position = I.instance.changepos();
                    } else if (2 == e) {
                        t.moveroot = !0;
                        var r = A.instance.Beans.indexOf(t);
                        A.instance.Beans.splice(r, 1), A.instance.Beanspos.splice(r, 1), L.instance.recoverySprite3D(a);
                    } else 3 == e ? (t.moveroot = !0, t.active = !1, a.transform.position = I.instance.changepos()) : (t.moveroot = !1, 
                    a.transform.position = I.instance.changepos());
                    if (3 == e) Laya.timer.once(1e3 * this.MagnetTime, this, function() {
                        t.active = !0, t.moveroot = !1;
                    }), 8 == this.distant || (this.xitieshi_Alpha.active = !0, this.distant = 8, Laya.timer.once(1e3 * this.MagnetTime, this, function() {
                        i.distant = 3, i.xitieshi_Alpha.active = !1;
                    })); else {
                        0 == e ? this.fraction += MyMath.rand(10, 25) * this.Growth : 1 == e ? this.fraction += MyMath.rand(30, 75) * this.Growth : 2 == e && (this.fraction += MyMath.rand(100, 200) * this.Growth);
                        var h = 100 * Math.pow(GD.Battleconfig[1].numa, this.Grade) + (this.Grade - 1) * GD.Battleconfig[1].numb;
                        I.instance.scoreArray[this.index].score = Math.round((this.fraction - GD.Battleconfig[1].numd) / (this.Grade + GD.Battleconfig[1].numc) + 100), 
                        (h - 100) * (this.Grade + 1 + GD.Battleconfig[1].numc) + GD.Battleconfig[1].numd <= this.fraction && (this.Grade++, 
                        I.instance.scoreArray[this.index].score = Math.round((this.fraction - GD.Battleconfig[1].numd) / (this.Grade + GD.Battleconfig[1].numc) + 100), 
                        this.addBoxs(), GD.Battleconfig.length > this.Grade ? GD.Battleconfig[this.Grade].scale > 1 && (this.multiple = GD.Battleconfig[this.Grade].scale, 
                        this.roots.transform.localScale.x != this.multiple && (34 == this.skinindex && this.setguangyu(), 
                        this.multiple = GD.Battleconfig[this.Grade].scale, this.boxs.forEach(function(t) {
                            t.root.transform.localScale = ex.v3(i.multiple, i.multiple, i.multiple);
                        }), 21 == this.skinindex && (this.xiawei.transform.localScale = ex.v3(this.multiple, this.multiple, this.multiple)), 
                        this.roots.transform.localScale = ex.v3(this.multiple, this.multiple, this.multiple))) : (this.multiple = GD.Battleconfig[GD.Battleconfig.length - 1].scale, 
                        this.roots.transform.localScale.x != this.multiple && (34 == this.skinindex && this.setguangyu(), 
                        this.boxs.forEach(function(t) {
                            t.root.transform.localScale = MyMath.v3(i.multiple, i.multiple, i.multiple);
                        }), 21 == this.skinindex && (this.xiawei.transform.localScale = MyMath.v3(this.multiple, this.multiple, this.multiple)), 
                        this.roots.transform.localScale = MyMath.v3(this.multiple, this.multiple, this.multiple))));
                    }
                } else Laya.timer.once(10, this, function() {
                    i.movetoroot(t, e);
                });
            }
        }, {
            key: "randompos",
            value: function(t) {
                return A.instance.RegimentWar ? t += t < 0 ? 16 + 20 * Math.random() : -16 - 20 * Math.random() : t < 0 ? t += 20 + 55 * Math.random() : t > 0 && (t += -20 - 55 * Math.random()), 
                t;
            }
        }, {
            key: "onDestroy",
            value: function() {
                this.label_addCoin.removeSelf();
            }
        }, {
            key: "showdie",
            value: function() {
                var t = this;
                this.die = !0, this.roots.active = !1;
                var e, i = this.roots.transform.position.x, a = this.roots.transform.position.z;
                i = this.randompos(i), a = this.randompos(a), this.Lollipoppos = [], this.Lollipoppos = this.rootpos.concat(), 
                this.boxs.forEach(function(t) {
                    (e = t.root.transform.position.clone()).x = Math.round(100 * t.root.transform.position.x) / 100, 
                    e.y = 0, e.z = Math.round(100 * t.root.transform.position.z) / 100, t.position = ex.v3(i, 0, a), 
                    t.movepos = [], t.moveRotation = [], t.root.active = !1;
                });
                var n = !0;
                if (this.Lollipoppos.forEach(function(t) {
                    if (n = !0, A.instance.RegimentWar ? (Math.abs(t.x) >= 39.5 || Math.abs(t.y) >= 39.5) && (n = !1) : (Math.abs(t.x) >= 79.5 || Math.abs(t.y) >= 79.5) && (n = !1), 
                    n) {
                        var e;
                        (e = Math.random() > .5 ? L.instance.createSprite3D("Lollipop" + L.instance.lollipop[MyMath.rand(0, 8)]) : L.instance.createSprite3D(L.instance.foods[MyMath.rand(0, 6)])).getChildAt(0).meshRenderer.castShadow = !1, 
                        e.getChildAt(0).meshRenderer.receiveShadow = !1, A.instance.newScene.addChild(e), 
                        e.transform.rotationEuler = ex.v3(0, MyMath.rand(0, 360), 0), e.transform.localScale = ex.v3(5, 5, 5);
                        var i, a = e.transform, s = a.position.clone();
                        s.setValue(t.x, 0, t.y), a.position = s, e.name = "Bean", e.getComponent(l) ? (i = e.getComponent(l)).moveroot = !1 : i = e.addComponent(l), 
                        A.instance.Beanspos.push(e.transform.position.clone()), A.instance.Beans.push(i), 
                        i.level = 2;
                    }
                }), this.timeRotation = [], this.oldtimeRotation = [], this.timeposition = [], this.oldtimeposition = [], 
                this.moveTime = 0, this.roots.transform.position = ex.v3(i, 0, a), this.label_addCoin.visible = !1, 
                A.instance.RegimentWar) {
                    for (var s = this.boxs.length - 1; s > 0; s--) s > this.firstGrade + 2 && (this.boxs[s].root.active = !1, 
                    this.boxs.splice(s, 1), this.rootpos.splice(s + 1, 1));
                    this.relive = 5, this.Grade = this.firstGrade, this.multiple = GD.Battleconfig[this.Grade].scale, 
                    this.fraction = (100 * this.Growth - 100) * (20 + this.firstGrade), this.boxs.forEach(function(e) {
                        e.root.transform.localScale = ex.v3(t.multiple, t.multiple, t.multiple);
                    }), this.roots.transform.localScale = ex.v3(this.multiple, this.multiple, this.multiple), 
                    I.instance.scoreArray[this.index].score = Math.round((this.fraction - GD.Battleconfig[1].numd) / (this.Grade + GD.Battleconfig[1].numc) + 100), 
                    this.boxs.forEach(function(e) {
                        e.root.transform.localScale = ex.v3(t.multiple, t.multiple, t.multiple);
                    });
                } else if (this.relive >= 1) this.relive--, this.createNewAi(), console.log("ai死亡可复活"); else {
                    for (var o = h.AIData[this.index], r = 0, d = this.boxs.length - 1; d > 0; d--) d > this.firstGrade + 2 && (2 == this.boxs[d].root.numChildren && (r = this.jiasus.indexOf(this.boxs[d].root.getChildAt(1)), 
                    this.jiasus.splice(r, 1)), this.boxs[d].root.removeSelf(), this.boxs[d].root.destroy(!0), 
                    this.boxs.splice(d, 1), this.rootpos.splice(d + 1, 1));
                    this.relive = o.relive, this.Grade = this.firstGrade, this.multiple = GD.Battleconfig[this.Grade].scale, 
                    this.fraction = (100 * this.Growth - 100) * (20 + this.firstGrade), this.boxs.forEach(function(t) {
                        t.root.transform.localScale = ex.v3(1, 1, 1);
                    }), this.roots.transform.localScale = ex.v3(1, 1, 1), L.instance.changename(this.index - 1), 
                    I.instance.scoreArray[this.index].score = Math.round((this.fraction - GD.Battleconfig[1].numd) / (this.Grade + GD.Battleconfig[1].numc) + 100);
                }
                Laya.timer.once(1e3, this, function() {
                    t.label_addCoin.visible = !0, t.die = !1, t.roots.active = !0, t.Invincible = !0, 
                    t.Ef_WuDi.active = !0, t.target = !1, t.showEf_WuDi(), t.showAddCoinmj1(L.instance.usetrobots[t.index - 1].nickname), 
                    I.instance.scoreArray[t.index].name = L.instance.usetrobots[t.index - 1].nickname, 
                    Laya.timer.once(5e3, t, function() {
                        t.Invincible = !1, t.Ef_WuDi.active = !1;
                    }), t.boxs.forEach(function(e) {
                        e.root.transform.position = t.roots.transform.position.clone(), e.root.active = !0;
                    });
                });
            }
        }, {
            key: "createNewAi",
            value: function() {
                var t = this;
                if (this.backupsAi) this.boxs = [], this.rootpos = [], this.rootpos = this.oldrootpos.concat(), 
                this.boxs = this.oldboxs.concat(), L.instance.usetrobots[this.index - 1] = this.oldusetrobots, 
                this.backupsAi = !1, this.Grade = this.oldGrade, this.relive = this.oldrelive, this.multiple = this.oldmultiple, 
                this.fraction = this.oldfraction, this.roots.transform.localScale = ex.v3(this.multiple, this.multiple, this.multiple), 
                I.instance.scoreArray[this.index].score = Math.round((this.fraction - GD.Battleconfig[1].numd) / (this.Grade + GD.Battleconfig[1].numc) + 100), 
                this.boxs.forEach(function(e) {
                    e.root.transform.localScale = ex.v3(t.multiple, t.multiple, t.multiple);
                }); else {
                    this.backupsAi = !0, this.oldrootpos = this.rootpos.concat(), this.oldboxs = this.boxs.concat(), 
                    this.oldusetrobots = L.instance.usetrobots[this.index - 1], this.oldGrade = this.Grade, 
                    this.oldfraction = this.fraction, this.oldrelive = this.relive, this.oldmultiple = this.multiple, 
                    h.AIData[this.index];
                    for (var e = this.boxs.length - 1; e > 0; e--) e > this.firstGrade + 2 && (this.boxs[e].root.active = !1, 
                    this.boxs.splice(e, 1), this.rootpos.splice(e + 1, 1));
                    this.relive = 5, this.Grade = this.firstGrade, this.multiple = GD.Battleconfig[this.Grade].scale, 
                    this.fraction = (100 * this.Growth - 100) * (20 + this.firstGrade), this.boxs.forEach(function(e) {
                        e.root.transform.localScale = ex.v3(t.multiple, t.multiple, t.multiple);
                    }), this.roots.transform.localScale = ex.v3(this.multiple, this.multiple, this.multiple), 
                    L.instance.changename(this.index - 1), I.instance.scoreArray[this.index].score = Math.round((this.fraction - GD.Battleconfig[1].numd) / (this.Grade + GD.Battleconfig[1].numc) + 100);
                }
            }
        }, {
            key: "flee",
            value: function(t, e, i, a) {
                for (var n = this, s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = 0; o < t.length; o++) if (A.getInstance().pDistance(t[o].x, t[o].y, e, i, 2 * a + this.multiple / 2)) {
                    if (A.getInstance().pDistance(t[o].x, t[o].y, e, i, .4 * a + this.multiple / 2) && !this.Invincible && !this.die) return s && (GameData.maxTodymust++, 
                    GameData.upmaxTodymust = !0, I.instance.mustAI++, I.instance.killAi++, GameData.flashSale[4]++, 
                    I.instance.killAi <= 6 ? L.instance.usetrobots[this.index - 1] && A.instance.addkillmove(I.instance.killAi, L.instance.usetrobots[this.index - 1].nickname) : L.instance.usetrobots[this.index - 1] && A.instance.addkillmove(6, L.instance.usetrobots[this.index - 1].nickname)), 
                    void this.showdie();
                    if (s && this.Norevolt && I.instance.mustAI < 8) ; else if (this.swerve) if (!this.die && !this.turnangel || Math.random() < this.Avoidance && s) {
                        var r = MyMath.CalculateAngleV3(ex.v3(t[o].x, 0, -t[o].y), ex.v3(e, 0, -i));
                        this.turnangel = !0, (r += 90) > 180 && r > -90 && (r -= 360), this.eat = !0, this.attack = !1, 
                        this.move = !1, this.aichangeDirection(r), Laya.timer.once(500, this, function() {
                            n.turnangel = !1;
                        });
                    } else this.swerve = !1, s ? Laya.timer.once(200, this, function() {
                        n.swerve = !0;
                    }) : Laya.timer.once(100, this, function() {
                        n.swerve = !0;
                    });
                }
            }
        }, {
            key: "addBoxs",
            value: function() {
                var t;
                if (this.skinindex >= 8) {
                    var e = L.instance.skin_[this.skinindex - 8];
                    t = L.instance.createSprite3D(e.name + (this.boxs.length % (e.num - 1) + 2));
                } else t = L.instance.createSprite3D("Default_2"), Util.changeMaterial(t.getChildAt(0), "subPack/skin/" + L.instance.jichuskin[this.skinindex] + ".png");
                var i = t.transform;
                t.getChildAt(0).transform.rotationEuler = ex.v3(0, 180, 0), A.instance.newScene.addChild(t), 
                this.boxs.length > 1 ? i.position = this.boxs[this.boxs.length - 1].position.clone() : i.position = this.roots.transform.position.clone();
                var a;
                a = GD.Battleconfig.length > this.Grade ? GD.Battleconfig[this.Grade].scale : GD.Battleconfig[GD.Battleconfig.length - 1].scale, 
                GD.Battleconfig[this.Grade].scale > 1 && (t.transform.localScale = ex.v3(a, a, a));
                var n = t.addComponent(S);
                if (this.boxs.push(n), n.inedex = this.index, this.boxs.length > 4 && (this.boxs.length % 4 == 1 || this.boxs.length % 4 == 2)) {
                    var s = L.instance.createSprite3D("jiasu_Add");
                    this.jiasus.push(s), s.transform.localPositionY = .5, s.active = !1, Util.SetEffectRenderModeByRootName(s), 
                    s.transform.rotationEuler = ex.v3(0, 180, 0), n.root.addChild(s);
                }
            }
        }, {
            key: "reverseRotation",
            value: function() {
                var t = this;
                this.turnangel = !0, Laya.timer.once(500, this, function() {
                    t.turnangel = !1;
                });
            }
        }, {
            key: "aichangeDirection",
            value: function(t) {
                this.angle = t;
                var e, i = t, a = 0;
                e = this.roots.transform.localRotationEulerY <= 0 ? 360 + this.roots.transform.localRotationEulerY : this.roots.transform.localRotationEulerY, 
                i < 0 && (i = 360 + i), a = i, Math.abs(i - e) > 180 ? e < i ? i - e > 8 && (a = e - 8) : i - e < -8 && (a = e + 8) : e < i ? i - e > 8 && (a = e + 8) : i - e < -8 && (a = e - 8), 
                a > 270 && (a -= 360), Math.round(a) != Math.round(i) ? this.movetochange = !0 : this.movetochange = !1, 
                this.roots.transform.localRotationEulerY = a;
            }
        } ]), i;
    }(Laya.Script3D), B = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).root = null, t.skinindex = 0, 
            t.SuperArmorTime = 0, t.xiawei = null, t.xiaweiPos = new Laya.Vector3(), t.jiasus = [], 
            t.Invincible = !1, t.boxs = [], t.CameraendPos = new Laya.Vector3(0, 20, 0), t.playerPos = ex.v3(), 
            t.toPos = ex.v3(), t.rootpos = [], t.moveTime = 0, t.localRotationEulerY = 0, t.timeRotation = [], 
            t.oldtimeRotation = [], t.timeposition = [], t.oldtimeposition = [], t.mastmovetime = 6, 
            t.speed = 2, t.fraction = 0, t.Grade = 1, t.distant = 3, t.die = !1, t.multiple = 1, 
            t.oldmastmovetime = 6, t.outpos = ex.v3(0, 0, 0), t.addpos = ex.v3(0, 0, 0), t.chapos = ex.v3(0, 0, 0), 
            t.outRotation = 0, t.titlePos = ex.v2(0, 0), t.Growthrate = 0, t.xitieshiTime = -1, 
            t.addtime = 0, t.Lollipoppos = [], t.boxsdistance = [], t.out = new Laya.Vector3(), 
            t.speedz = .01, t.speedy = .01, t.speedx = .01, t.movespeed = .2, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.root = this.owner, this.playxitieshi(), this.showAddCoinmj1("我"), this.playEf_WuDi(), 
                this.addjingqian();
            }
        }, {
            key: "addjingqian",
            value: function() {}
        }, {
            key: "setguangyu",
            value: function() {}
        }, {
            key: "addXiawei",
            value: function() {
                this.xiawei = L.instance.createSprite3D("Skin_Shrimp_3");
                var t = this.xiawei.transform;
                if (A.instance.newScene.addChild(this.xiawei), t.position = ex.v3(this.root.transform.position.x - 1, this.root.transform.position.y, this.root.transform.position.z), 
                this.Grade >= 50) {
                    var e = .02 * (this.Grade - 50) + 1.02;
                    this.xiawei.transform.localScale = ex.v3(e, e, e);
                }
            }
        }, {
            key: "showEf_WuDi",
            value: function() {
                this.Ef_WuDi ? (this.Ef_WuDi.active = !0, Util.PlayEffect(this.Ef_WuDi)) : (this.Ef_WuDi = L.instance.createSprite3D("Ef_WuDi"), 
                this.root.addChild(this.Ef_WuDi), this.Ef_WuDi.active = !0, Util.SetEffectRenderModeByRootName(this.Ef_WuDi), 
                Util.PlayEffect(this.Ef_WuDi));
            }
        }, {
            key: "playEf_WuDi",
            value: function() {
                this.Ef_WuDi ? this.Ef_WuDi.active = !1 : (this.Ef_WuDi = L.instance.createSprite3D("Ef_WuDi"), 
                this.root.addChild(this.Ef_WuDi), this.Ef_WuDi.getChildAt(0).particleSystem.startSizeConstant = 15, 
                this.Ef_WuDi.getChildAt(0).particleSystem.startSizeConstantMax = 15, this.Ef_WuDi.active = !1, 
                Util.SetEffectRenderModeByRootName(this.Ef_WuDi));
            }
        }, {
            key: "playxitieshi",
            value: function() {
                this.xitieshi_Alpha ? this.xitieshi_Alpha.active = !1 : (this.xitieshi_Alpha = L.instance.createSprite3D("xitieshi_Alpha"), 
                this.root.addChild(this.xitieshi_Alpha), this.xitieshi_Alpha.active = !1, Util.SetEffectRenderModeByRootName(this.xitieshi_Alpha));
            }
        }, {
            key: "playjiasu_Add",
            value: function() {
                var t = this;
                if (this.jiasu_Add) {
                    if (this.jiasu_Add.active) for (var e = 0; e < this.jiasus.length; e++) this.jiasus[e].parent.active && (this.jiasus[e].active = !0, 
                    this.jiasus[e].getChildAt(0).particleSystem.startSizeConstant = 4 * this.multiple, 
                    this.jiasus[e].getChildAt(0).particleSystem.startSizeConstantMax = 4 * this.multiple, 
                    Util.PlayEffect(this.jiasus[e]));
                    this.jiasu_Add.getChildAt(0).particleSystem.startSizeConstant = 4 * this.multiple, 
                    this.jiasu_Add.getChildAt(0).particleSystem.startSizeConstantMax = 4 * this.multiple, 
                    Util.PlayEffect(this.jiasu_Add);
                } else {
                    this.jiasu_Add = L.instance.createSprite3D("jiasu_Add"), this.jiasu_Add.transform.localPositionY = .5, 
                    this.boxs[1].root.addChild(this.jiasu_Add), Util.SetEffectRenderModeByRootName(this.jiasu_Add), 
                    this.jiasu_Add.transform.rotationEuler = ex.v3(0, 180, 0), this.jiasu_Add.active = !1, 
                    Util.PlayEffect(this.jiasu_Add);
                    var i = L.instance.createSprite3D("jiasu_Add");
                    i.transform.localPositionY = .5, this.boxs[2].root.addChild(i), Util.SetEffectRenderModeByRootName(i), 
                    i.transform.rotationEuler = ex.v3(0, 180, 0), i.active = !1, Util.PlayEffect(i), 
                    this.jiasus.push(i);
                }
                Laya.timer.once(500, this, function() {
                    t.playjiasu_Add();
                });
            }
        }, {
            key: "changepos",
            value: function(t) {
                for (var e = 0; e < this.boxs.length; e++) t >= this.boxs[e].movepos.length || this.boxs[e].movepos.length > 1 && (this.boxs[e].position = this.boxs[e].movepos[t], 
                this.boxs[e].owner.transform.localRotationEulerY = this.boxs[e].moveRotation[t]);
                if (21 == this.skinindex) {
                    var i = this.boxs[this.boxs.length - 1].root.transform.localRotationEulerY + 180;
                    i *= Math.PI / 180;
                    var a = Math.round(.5 * Math.sin(i) * this.multiple * 100) / 100, n = Math.round(.4 * Math.cos(i) * this.multiple * 100) / 100;
                    this.xiaweiPos.x = this.boxs[this.boxs.length - 1].root.transform.position.x + a, 
                    this.xiaweiPos.y = this.boxs[this.boxs.length - 1].root.transform.position.y, this.xiaweiPos.z = this.boxs[this.boxs.length - 1].root.transform.position.z + n, 
                    this.xiawei.transform.position = this.xiaweiPos, this.xiawei.transform.localRotationEulerY = this.boxs[this.boxs.length - 1].root.transform.localRotationEulerY + 180;
                }
            }
        }, {
            key: "setpos",
            value: function(t, e) {
                for (var i = this.boxs.length - 1; i >= 0; i--) 0 == i ? (this.boxs[i].movepos = t.concat(), 
                this.boxs[i].moveRotation = e.concat()) : (this.boxs[i].movepos = this.boxs[i - 1].movepos.concat(), 
                this.boxs[i].moveRotation = this.boxs[i - 1].moveRotation.concat());
            }
        }, {
            key: "GetTime",
            value: function(t) {
                var e, i, a, n = t, s = Math.floor(n / 60), o = Math.floor(s / 60);
                return e = (n = Math.floor(n % 60)) < 10 ? "0" + n : n, i = (s %= 60) < 10 ? "0" + s : s, 
                a = (o %= 24) < 10 ? "0" + o : o, A.instance.TimeLimit ? i + ":" + e : a + ":" + i + ":" + e;
            }
        }, {
            key: "updatepos",
            value: function() {
                var t = Laya.timer.delta / 1e3;
                if (!this.die && 0 != I.instance.gamestage) {
                    if (2 == I.instance.gamestage ? I.instance.gamestage = 1 : this.addtime = A.instance.survivalTime + t, 
                    A.instance.TimeLimit) {
                        if (A.instance.survivalTime >= 179.84) return this.die = !0, I.instance.playgame = !1, 
                        I.instance.clearGame(), A.instance.existencetime = 180, void Laya.Scene.open("scene/resultView.scene");
                        Math.floor(A.instance.survivalTime) < Math.floor(this.addtime) ? (A.instance.survivalTime = this.addtime, 
                        I.instance.survival.text = "" + this.GetTime(180 - A.instance.survivalTime)) : A.instance.survivalTime = this.addtime;
                    } else Math.floor(A.instance.survivalTime) < Math.floor(this.addtime) ? (A.instance.survivalTime = this.addtime, 
                    I.instance.survival.text = "存活: " + this.GetTime(A.instance.survivalTime)) : A.instance.survivalTime = this.addtime;
                    if (7 == A.instance.skintype ? A.instance.survivalTime > 180 && (this.Growthrate = Math.floor(A.instance.survivalTime / 180) * A.instance.attribute) : this.Growthrate = 0, 
                    this.xitieshiTime > 0 ? (this.xitieshiTime -= 1e3 * t, this.distant = 8 * ((this.multiple - 1) / 2 + 1), 
                    this.xitieshi_Alpha.active = !0) : (this.distant = 3 * ((this.multiple - 1) / 2 + 1), 
                    this.xitieshi_Alpha.active = !1), this.SuperArmorTime > 0 ? (this.SuperArmorTime -= 1e3 * t, 
                    this.Invincible = !0, this.showEf_WuDi(), this.Ef_WuDi.active = !0) : this.invin(), 
                    t > .16 && (t = .16), I.instance.Acelerateing) this.jiasu_Add.active = !0, this.speed < 4 * this.multiple ? this.speed += .1 : this.speed = 4 * this.multiple, 
                    this.speed >= 4 * this.multiple ? this.mastmovetime = 3 : this.speed >= 3 * this.multiple ? this.mastmovetime = 4 : this.speed >= 2.5 * this.multiple ? this.mastmovetime = 5 : this.mastmovetime = 6; else {
                        this.jiasu_Add && (this.jiasu_Add.active = !1);
                        for (var e = 0; e < this.jiasus.length; e++) this.jiasus[e].active = !1;
                        this.speed > 2 * this.multiple ? this.speed -= .1 : this.speed = 2 * this.multiple, 
                        this.speed >= 4 * this.multiple ? this.mastmovetime = 3 : this.speed >= 3 * this.multiple ? this.mastmovetime = 4 : this.speed >= 2.5 * this.multiple ? this.mastmovetime = 5 : this.mastmovetime = 6;
                    }
                    if (t = .017, this.root.transform.position.cloneTo(this.playerPos), Laya.Vector3.add(this.CameraendPos, this.playerPos, this.toPos), 
                    A.instance.camera.transform.localPositionY = 15 * ((this.multiple - 1) / 4 + 1), 
                    I.instance.watchmultiple = ((this.multiple - 1) / 2 + 1) * ((this.multiple - 1) / 2 + 1), 
                    this.multiple - 1 > 0 && (A.getInstance().maxx = A.getInstance().starmaxx + 4 * (this.multiple - 1), 
                    A.getInstance().maxy = A.getInstance().starmaxy + 4 * (this.multiple - 1)), A.instance.camera.transform.localPositionX = Laya.MathUtil.lerp(A.instance.camera.transform.localPositionX, this.toPos.x, 8 * t), 
                    A.instance.camera.transform.localPositionY = Laya.MathUtil.lerp(A.instance.camera.transform.localPositionY, this.toPos.y, 2 * t), 
                    A.instance.camera.transform.localPositionZ = Laya.MathUtil.lerp(A.instance.camera.transform.localPositionZ, this.toPos.z, 8 * t), 
                    this.moveTime < this.mastmovetime) {
                        if (this.moveTime++, this.timeRotation[this.moveTime] = this.root.transform.localRotationEulerY, 
                        this.timeposition[this.moveTime] = this.root.transform.position.clone(), this.moveTime > 1) {
                            Laya.Vector3.subtract(this.timeposition[this.moveTime], this.timeposition[1], this.outpos), 
                            Laya.Vector3.scale(this.outpos, 1 / (this.moveTime - 1), this.outpos);
                            for (var i = 1; i <= this.moveTime; i++) Laya.Vector3.scale(this.outpos, i - 1, this.chapos), 
                            Laya.Vector3.add(this.timeposition[1], this.chapos, this.addpos), this.timeposition[i] = this.addpos.clone();
                        }
                        if (this.mastmovetime != this.oldmastmovetime) {
                            for (var a = this.boxs.length - 1; a >= 0; a--) if (this.boxs[a].movepos.length > 1) {
                                Laya.Vector3.subtract(this.boxs[a].movepos[this.oldmastmovetime], this.boxs[a].movepos[1], this.outpos), 
                                Laya.Vector3.scale(this.outpos, 1 / (this.mastmovetime - 1), this.outpos), this.outRotation = (this.boxs[a].moveRotation[this.oldmastmovetime] - this.boxs[a].moveRotation[1]) / this.mastmovetime;
                                for (var n = 1; n <= this.mastmovetime; n++) Laya.Vector3.scale(this.outpos, n - 1, this.chapos), 
                                Laya.Vector3.add(this.boxs[a].movepos[1], this.chapos, this.addpos), this.boxs[a].movepos[n] = this.addpos.clone(), 
                                this.boxs[a].moveRotation[n] = this.boxs[a].moveRotation[1] + this.outRotation * (n - 1);
                            }
                            this.oldmastmovetime = this.mastmovetime;
                        }
                        this.changepos(this.moveTime), this.moveTime >= this.mastmovetime && (this.moveTime = 0, 
                        this.oldtimeRotation = this.timeRotation.concat(), this.oldtimeposition = this.timeposition.concat(), 
                        this.setpos(this.oldtimeposition, this.oldtimeRotation));
                    } else this.moveTime++, this.timeRotation[this.moveTime] = this.root.transform.localRotationEulerY, 
                    this.timeposition[this.moveTime] = this.root.transform.position.clone(), this.changepos(this.moveTime), 
                    this.moveTime = 0, this.oldtimeRotation = this.timeRotation.concat(), this.oldtimeposition = this.timeposition.concat(), 
                    this.setpos(this.oldtimeposition, this.oldtimeRotation);
                    var s = 4 * this.speed * t, o = this.root.transform.localRotationEulerY;
                    o *= Math.PI / 180;
                    var r = this.root.transform.position.x, h = this.root.transform.position.z, l = Math.sin(o) * s + r, d = Math.cos(o) * s + h;
                    if (A.instance.RegimentWar && (Math.abs(d) >= 40 || Math.abs(l) >= 40)) return I.instance.causeOfDeath = "墙", 
                    void this.ondie();
                    if (Math.abs(d) >= 80 || Math.abs(l) >= 80) this.ondie(); else {
                        var c = this.root.transform.position;
                        c.x = l, c.z = d, this.root.transform.position = c, I.instance.playspos[0] = this.root.transform.position.clone(), 
                        I.instance.playdistant[0] = this.distant, this.rootpos[0] = ex.v2(this.root.transform.position.x, this.root.transform.position.z);
                        for (var m = 0; m < this.boxs.length; m++) this.rootpos[m + 1] = ex.v2(this.boxs[m].position.x, this.boxs[m].position.z);
                        if (!this.die) {
                            for (var u = 0; u < A.instance.FoodStarts.length; u++) null != A.instance.FoodRamdStarts[u] && A.getInstance().showdistent(this.root.transform.position, this.distant + .2, A.instance.FoodStarts[u].transform.position) && A.instance.FoodStarts[u].active && (A.instance.FoodRamdMagnets[u] = null, 
                            this.moveprop(u, 1));
                            if (A.instance.TimeLimit || A.instance.RegimentWar) for (var g = 0; g < A.instance.FoodShield.length; g++) null != A.instance.FoodRamdShield[g] && A.getInstance().showdistent(this.root.transform.position, this.distant + .2, A.instance.FoodShield[g].transform.position) && A.instance.FoodShield[g].active && (A.instance.FoodRamdShield[g] = null, 
                            this.moveprop(g, 4));
                            for (var y = 0; y < A.instance.FoodMagnets.length; y++) null != A.instance.FoodRamdMagnets[y] ? A.getInstance().showdistent(this.root.transform.position, this.distant + .2, A.instance.FoodMagnets[y].transform.position) && A.instance.FoodMagnets[y].active && (A.instance.FoodRamdMagnets[y] = null, 
                            this.moveprop(y, 3)) : A.instance.FoodMagnets[y].active = !1;
                            Util.WorldToScreen2(A.instance.camera, this.root.transform.position, this.titlePos), 
                            this.label_addCoin && (this.label_addCoin.x = this.titlePos.x, this.label_addCoin.y = this.titlePos.y, 
                            this.label_addCoin.rotation = 0);
                        }
                    }
                }
            }
        }, {
            key: "showAddCoinmj1",
            value: function(t) {
                this.label_addCoin = Laya.Pool.getItemByClass("label_tips", Laya.Label), this.label_addCoin.width = 384, 
                this.label_addCoin.height = 105, this.label_addCoin.text = "我", this.label_addCoin.align = "center", 
                this.label_addCoin.valign = "middle", this.label_addCoin.wordWrap = !0, this.label_addCoin.bold = !0, 
                this.label_addCoin.anchorX = .5, this.label_addCoin.anchorY = 1, this.label_addCoin.fontSize = 30, 
                this.label_addCoin.stroke = 4, this.label_addCoin.strokeColor = "#000000", this.label_addCoin.color = "#ffffff", 
                this.label_addCoin.visible = !0, this.label_addCoin.zOrder = -1, Laya.stage.addChild(this.label_addCoin);
            }
        }, {
            key: "onDestroy",
            value: function() {
                this.label_addCoin.removeSelf();
            }
        }, {
            key: "flee",
            value: function(t, e, i, a, n) {
                var s = this;
                t.forEach(function(t) {
                    if (A.getInstance().pDistance(t.x, t.y, e, i, 2 * a + s.multiple / 2) && A.getInstance().pDistance(t.x, t.y, e, i, .4 * a + s.multiple / 2) && !s.Invincible && !s.die) return I.instance.causeOfDeath = n, 
                    void s.ondie();
                });
            }
        }, {
            key: "ondie",
            value: function() {
                var t = this;
                this.die = !0, this.root.active = !1;
                var e = this.root.transform.position.x, i = this.root.transform.position.z;
                e = this.randompos(e), i = this.randompos(i), Math.floor(A.instance.survivalTime) > GameData.maxtime && (GameData.maxtime = Math.floor(A.instance.survivalTime)), 
                I.instance.mustAI > GameData.maxmust && (GameData.maxmust = I.instance.mustAI), 
                I.instance.scoreArray[0].score > GameData.maxTodylength && (GameData.maxTodylength = I.instance.scoreArray[0].score, 
                GameData.upmaxTodylength = !0), A.instance.TimeLimit ? I.instance.scoreArray[0].score > GameData.TimeLimitmaxlength && (GameData.TimeLimitmaxlength = I.instance.scoreArray[0].score) : A.instance.RegimentWar || (A.instance.CrazyMode ? I.instance.scoreArray[0].score > GameData.Crazynummaxlength && (GameData.Crazynummaxlength = I.instance.scoreArray[0].score) : I.instance.scoreArray[0].score > GameData.Endlessmaxlength && (GameData.Endlessmaxlength = I.instance.scoreArray[0].score)), 
                I.instance.scoreArray[0].score > GameData.maxlength && (GameData.maxlength = I.instance.scoreArray[0].score), 
                this.Lollipoppos = [], this.Lollipoppos = this.rootpos.concat(), this.boxs.forEach(function(t) {
                    var a = t.position.clone();
                    a.x = e, a.z = i, t.position = a, t.movepos = [], t.moveRotation = [], t.root.active = !1;
                });
                var a = !0;
                this.Lollipoppos.forEach(function(t) {
                    if (a = !0, A.instance.RegimentWar ? (Math.abs(t.x) >= 39.5 || Math.abs(t.y) >= 39.5) && (a = !1) : (Math.abs(t.x) >= 79.5 || Math.abs(t.y) >= 79.5) && (a = !1), 
                    a) {
                        var e;
                        (e = Math.random() > .5 ? L.instance.createSprite3D("Lollipop" + L.instance.lollipop[MyMath.rand(0, 8)]) : L.instance.createSprite3D(L.instance.foods[MyMath.rand(0, 6)])).getChildAt(0).meshRenderer.castShadow = !1, 
                        e.getChildAt(0).meshRenderer.receiveShadow = !1, A.instance.newScene.addChild(e);
                        var i = e.transform.rotationEuler;
                        i.x = 0, i.y = MyMath.rand(0, 360), i.z = 0, e.transform.rotationEuler = i, e.transform.localScale = ex.v3(5, 5, 5);
                        var n = e.transform, s = n.position;
                        s.setValue(t.x, 0, t.y), n.position = s, e.name = "Bean", A.instance.Beanspos.push(e.transform.position.clone());
                        var o = e.addComponent(l);
                        A.instance.Beans.push(o), o.level = 2;
                    }
                }), this.timeRotation = [], this.oldtimeRotation = [], this.timeposition = [], this.oldtimeposition = [], 
                this.moveTime = 0, I.instance.killAi = 0, G.vibrateLong(), d.getInstance().playimpact(), 
                d.getInstance().playlose(), this.root.transform.rotationEuler = ex.v3(0, MyMath.rand(0, 360), 0), 
                A.instance.RegimentWar ? I.instance.showwarrelive(new Laya.Handler(this, function() {
                    t.showInvincible(e, i);
                }), new Laya.Handler(this, function() {
                    t.creatnewbox(e, i);
                })) : (A.instance.existencetime = A.instance.survivalTime, I.instance.showrelive(new Laya.Handler(this, function() {
                    t.showInvincible(e, i);
                })));
            }
        }, {
            key: "randompos",
            value: function(t) {
                return A.instance.RegimentWar ? t += t < 0 ? 16 + 20 * Math.random() : -16 - 20 * Math.random() : t < 0 ? t += 20 + 55 * Math.random() : t > 0 && (t += -20 - 55 * Math.random()), 
                t;
            }
        }, {
            key: "creatnewbox",
            value: function() {
                for (var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = this.boxs.length - 1; a > 0; a--) a > 3 && (this.boxs[a].root.active = !1, 
                this.boxs.splice(a, 1), this.rootpos.splice(a + 1, 1));
                this.Grade = 3, this.multiple = GD.Battleconfig[this.Grade].scale, this.fraction = 0, 
                this.boxs.forEach(function(e) {
                    e.root.transform.localScale = ex.v3(t.multiple, t.multiple, t.multiple);
                }), I.instance.scoreArray[0].score = 100, this.Invincible = !0, this.showEf_WuDi(), 
                this.Ef_WuDi.active = !0, this.die = !1, this.root.transform.position = ex.v3(e, 0, i), 
                this.root.transform.localScale = ex.v3(this.multiple, this.multiple, this.multiple), 
                this.root.active = !0, this.SuperArmorTime < 0 && (this.SuperArmorTime = 0), 4 == A.instance.skintype ? this.SuperArmorTime += 5e3 + 1e3 * A.instance.attribute : this.SuperArmorTime += 5e3, 
                A.instance.CrazyMode && (this.SuperArmorTime += 1e4), this.boxs.forEach(function(t) {
                    t.root.active = !0;
                });
            }
        }, {
            key: "showInvincible",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                G.startgame || (this.Invincible = !0, this.showEf_WuDi(), this.Ef_WuDi.active = !0, 
                this.die = !1, this.root.transform.position = ex.v3(t, 0, e), this.root.active = !0, 
                A.instance.RegimentWar && (I.instance.playgame = !0), this.SuperArmorTime < 0 && (this.SuperArmorTime = 0), 
                4 == A.instance.skintype ? this.SuperArmorTime += 5e3 + 1e3 * A.instance.attribute : this.SuperArmorTime += 5e3, 
                A.instance.CrazyMode && (this.SuperArmorTime += 1e4), this.boxs.forEach(function(t) {
                    t.root.active = !0;
                }));
            }
        }, {
            key: "invin",
            value: function() {
                this.Invincible = !1, this.Ef_WuDi.active = !1;
            }
        }, {
            key: "moveprop",
            value: function(t, e) {
                var i, a = this;
                if (3 == e ? (i = A.instance.FoodMagnets[t], A.instance.FoodRamdMagnets[t] = null) : 4 == e ? (i = A.instance.FoodShield[t], 
                A.instance.FoodRamdShield[t] = null) : (i = A.instance.FoodStarts[t], A.instance.FoodRamdStarts[t] = null), 
                I.instance.Acelerateing || this.xitieshi_Alpha.active || 2 == e || A.getInstance().pDistance(i.transform.position.x, i.transform.position.z, this.root.transform.position.x, this.root.transform.position.z, 2.5) ? this.movespeed = Math.round(.8 * this.multiple * 10) / 10 : this.movespeed = Math.round(.4 * this.multiple * 10) / 10, 
                this.out = MyMath.v3(0, 0, 0), Laya.Vector3.subtract(i.transform.position, this.root.transform.position, this.out), 
                this.out.x > this.movespeed ? this.speedx = -this.movespeed : this.out.x < -this.movespeed ? this.speedx = this.movespeed : this.speedx = -this.out.x, 
                this.out.y > this.movespeed ? this.speedy = -this.movespeed : this.out.y < this.movespeed ? this.speedy = this.movespeed : this.speedy = -this.out.y, 
                this.out.z > this.movespeed ? this.speedz = -this.movespeed : this.out.z < -this.movespeed ? this.speedz = this.movespeed : this.speedz = -this.out.z, 
                i.transform.localRotationEuler = MyMath.v3(0, 0, 0), i.transform.translate(MyMath.v3(this.speedx, this.speedy, this.speedz)), 
                Math.abs(this.out.x) <= this.movespeed && Math.abs(this.out.y) <= this.movespeed && Math.abs(this.out.z) <= this.movespeed || this.die) if (i.active = !1, 
                3 == e) d.getInstance().playeat(), Laya.timer.once(1e4, this, function() {
                    A.instance.RegimentWar ? (A.instance.FoodMagnets[t].transform.position = ex.v3(MyMath.randFloat(-38, 38), .3, MyMath.randFloat(-38, 38)), 
                    A.instance.FoodRamdMagnets[t] = ex.v2(MyMath.randFloat(-38, 38), MyMath.randFloat(-38, 38))) : (A.instance.FoodMagnets[t].transform.position = ex.v3(MyMath.randFloat(-80, 80), .3, MyMath.randFloat(-80, 80)), 
                    A.instance.FoodRamdMagnets[t] = ex.v2(MyMath.randFloat(-80, 80), MyMath.randFloat(-80, 80))), 
                    i.active = !0;
                }), G.vibrateShort(), 3 == A.instance.skintype ? this.xitieshiTime > 0 ? this.xitieshiTime += 1e4 + GameData.addMagnetTime + 1e3 * A.instance.attribute : this.xitieshiTime = 1e4 + GameData.addMagnetTime + 1e3 * A.instance.attribute : this.xitieshiTime > 0 ? this.xitieshiTime += 1e4 + GameData.addMagnetTime : this.xitieshiTime = 1e4 + GameData.addMagnetTime, 
                A.instance.CrazyMode && (this.xitieshiTime += 2e4); else if (4 == e) d.getInstance().playeat(), 
                Laya.timer.once(1e4, this, function() {
                    A.instance.RegimentWar ? (A.instance.FoodShield[t].transform.position = ex.v3(MyMath.randFloat(-38, 38), .3, MyMath.randFloat(-38, 38)), 
                    A.instance.FoodRamdShield[t] = ex.v2(MyMath.randFloat(-38, 38), MyMath.randFloat(-38, 38))) : (A.instance.FoodShield[t].transform.position = ex.v3(MyMath.randFloat(-80, 80), .3, MyMath.randFloat(-80, 80)), 
                    A.instance.FoodRamdShield[t] = ex.v2(MyMath.randFloat(-80, 80), MyMath.randFloat(-80, 80))), 
                    i.active = !0;
                }), G.vibrateShort(), this.Invincible = !0, this.SuperArmorTime < 0 && (this.SuperArmorTime = 0), 
                4 == A.instance.skintype ? this.SuperArmorTime += 5e3 + 1e3 * A.instance.attribute : this.SuperArmorTime += 5e3, 
                A.instance.CrazyMode && (this.SuperArmorTime += 1e4), this.Ef_WuDi.active = !0; else {
                    d.getInstance().playeat(), 5 == A.instance.skintype ? this.fraction += MyMath.rand(30, 75) * (GameData.addGrowth + 1 + A.instance.attribute) : this.fraction += MyMath.rand(30, 75) * (GameData.addGrowth + 1 + this.Growthrate), 
                    G.vibrateShort(), GameData.maxTodyeatStarts++, GameData.upmaxTodyeatStarts = !0, 
                    A.instance.RegimentWar ? (A.instance.FoodStarts[t].transform.position = ex.v3(MyMath.randFloat(-38, 38), .3, MyMath.randFloat(-38, 38)), 
                    A.instance.FoodRamdStarts[t] = MyMath.v2temp1(MyMath.randFloat(-38, 38), MyMath.randFloat(-38, 38))) : (A.instance.FoodStarts[t].transform.position = ex.v3(MyMath.randFloat(-80, 80), .3, MyMath.randFloat(-80, 80)), 
                    A.instance.FoodRamdStarts[t] = MyMath.v2temp1(MyMath.randFloat(-80, 80), MyMath.randFloat(-80, 80))), 
                    i.active = !0;
                    var n = 100 * Math.pow(GD.Battleconfig[1].numa, this.Grade) + (this.Grade - 1) * GD.Battleconfig[1].numb;
                    I.instance.scoreArray[0].score = Math.round((this.fraction - GD.Battleconfig[1].numd) / (this.Grade + GD.Battleconfig[1].numc) + 100), 
                    (n - 100) * (this.Grade + 1 + GD.Battleconfig[1].numc) + GD.Battleconfig[1].numd <= this.fraction && (this.Grade++, 
                    this.Grade > GD.Battleconfig.length - 1 && (this.Grade = GD.Battleconfig.length - 1), 
                    I.instance.scoreArray[0].score = Math.round((this.fraction - GD.Battleconfig[1].numd) / (this.Grade + GD.Battleconfig[1].numc) + 100), 
                    I.instance.play.addBoxs(), GD.Battleconfig[this.Grade].scale > 1 && (this.multiple = GD.Battleconfig[this.Grade].scale, 
                    this.root.transform.localScale.x != this.multiple && (this.multiple = GD.Battleconfig[this.Grade].scale, 
                    34 == GameData.useskin && this.setguangyu(), this.boxs.forEach(function(t) {
                        t.root.transform.localScale = ex.v3(a.multiple, a.multiple, a.multiple);
                    }), 21 == this.skinindex && (this.xiawei.transform.localScale = ex.v3(this.multiple, this.multiple, this.multiple)), 
                    this.root.transform.localScale = ex.v3(this.multiple, this.multiple, this.multiple))));
                } else Laya.timer.once(10, this, function() {
                    a.moveprop(t, e);
                });
            }
        }, {
            key: "movetoroot",
            value: function(t, e) {
                var i = this, a = t.root;
                if (I.instance.Acelerateing || this.xitieshi_Alpha.active || 2 == e || A.getInstance().pDistance(a.transform.position.x, a.transform.position.z, this.root.transform.position.x, this.root.transform.position.z, 2.5) ? this.movespeed = Math.round(.8 * this.multiple * 10) / 10 : this.movespeed = Math.round(.4 * this.multiple * 10) / 10, 
                this.out = MyMath.v3(0, 0, 0), Laya.Vector3.subtract(a.transform.position, this.root.transform.position, this.out), 
                this.out.x > this.movespeed ? this.speedx = -this.movespeed : this.out.x < -this.movespeed ? this.speedx = this.movespeed : this.speedx = -this.out.x, 
                this.out.y > this.movespeed ? this.speedy = -this.movespeed : this.out.y < this.movespeed ? this.speedy = this.movespeed : this.speedy = -this.out.y, 
                this.out.z > this.movespeed ? this.speedz = -this.movespeed : this.out.z < -this.movespeed ? this.speedz = this.movespeed : this.speedz = -this.out.z, 
                a.transform.localRotationEuler = MyMath.v3(0, 0, 0), a.transform.translate(MyMath.v3(this.speedx, this.speedy, this.speedz)), 
                Math.abs(this.out.x) <= this.movespeed && Math.abs(this.out.y) <= this.movespeed && Math.abs(this.out.z) <= this.movespeed || this.die) {
                    if (0 == e) t.moveroot = !1, a.transform.position = I.instance.changepos(), A.instance.Beanspos[A.instance.Beans.indexOf(t)] = a.transform.position.clone(); else if (2 == e) {
                        t.moveroot = !0;
                        var n = A.instance.Beans.indexOf(t);
                        A.instance.Beans.splice(n, 1), A.instance.Beanspos.splice(n, 1), L.instance.recoverySprite3D(a);
                    } else 3 == e ? (t.active = !1, t.moveroot = !0, a.transform.position = I.instance.changepos()) : (t.moveroot = !1, 
                    a.transform.position = I.instance.changepos());
                    if (3 == e && Laya.timer.once(1e4, this, function() {
                        t.active = !0, t.moveroot = !1;
                    }), 3 != e || this.xitieshi_Alpha.active) {
                        var s = 0;
                        2 == A.instance.skintype ? 0 == e ? s = MyMath.rand(10, 25) * (GameData.addGrowth + A.instance.attribute + 1) : 1 == e ? (d.getInstance().playeat(), 
                        s = MyMath.rand(30, 75) * (GameData.addGrowth + A.instance.attribute + 1), G.vibrateShort()) : 2 == e && (d.getInstance().playeat(), 
                        s = MyMath.rand(100, 200) * (GameData.addGrowth + A.instance.attribute + 1), G.vibrateShort()) : 0 == e ? s = MyMath.rand(10, 25) * (GameData.addGrowth + 1 + this.Growthrate) : 1 == e ? (d.getInstance().playeat(), 
                        s = MyMath.rand(30, 75) * (GameData.addGrowth + 1 + this.Growthrate), G.vibrateShort()) : 2 == e && (d.getInstance().playeat(), 
                        s = 6 == A.instance.skintype ? MyMath.rand(100, 200) * (GameData.addGrowth + 1 + A.instance.attribute) : MyMath.rand(100, 200) * (GameData.addGrowth + 1 + this.Growthrate), 
                        G.vibrateShort()), A.instance.CrazyMode && (this.fraction += s / 2), this.fraction += s;
                        var o = 100 * Math.pow(GD.Battleconfig[1].numa, this.Grade) + (this.Grade - 1) * GD.Battleconfig[1].numb;
                        I.instance.scoreArray[0].score = Math.round((this.fraction - GD.Battleconfig[1].numd) / (this.Grade + GD.Battleconfig[1].numc) + 100), 
                        (o - 100) * (this.Grade + 1 + GD.Battleconfig[1].numc) + GD.Battleconfig[1].numd <= this.fraction && (this.Grade++, 
                        I.instance.scoreArray[0].score = Math.round((this.fraction - GD.Battleconfig[1].numd) / (this.Grade + GD.Battleconfig[1].numc) + 100), 
                        I.instance.play.addBoxs(), GD.Battleconfig.length > this.Grade ? GD.Battleconfig[this.Grade].scale > 1 && (this.multiple = GD.Battleconfig[this.Grade].scale, 
                        this.root.transform.localScale.x != this.multiple && (this.multiple = GD.Battleconfig[this.Grade].scale, 
                        this.boxs.forEach(function(t) {
                            t.root.transform.localScale = ex.v3(i.multiple, i.multiple, i.multiple);
                        }), 21 == this.skinindex && (this.xiawei.transform.localScale = ex.v3(this.multiple, this.multiple, this.multiple)), 
                        this.root.transform.localScale = ex.v3(this.multiple, this.multiple, this.multiple))) : (this.multiple = GD.Battleconfig[GD.Battleconfig.length - 1].scale, 
                        this.root.transform.localScale.x != this.multiple && (this.boxs.forEach(function(t) {
                            t.root.transform.localScale = ex.v3(i.multiple, i.multiple, i.multiple);
                        }), 21 == this.skinindex && (this.xiawei.transform.localScale = ex.v3(this.multiple, this.multiple, this.multiple)), 
                        this.root.transform.localScale = ex.v3(this.multiple, this.multiple, this.multiple))));
                    } else 8 == this.distant || (this.distant = 8, this.xitieshi_Alpha.active = !0, 
                    Laya.timer.once(1e4 + GameData.addMagnetTime, this, function() {
                        i.xitieshi_Alpha.active = !1, i.distant = 3;
                    }));
                } else Laya.timer.once(10, this, function() {
                    i.movetoroot(t, e);
                });
            }
        }, {
            key: "addBoxs",
            value: function() {
                var t;
                if (this.skinindex >= 8) {
                    var e = L.instance.skin_[this.skinindex - 8];
                    t = L.instance.createSprite3D(e.name + (this.boxs.length % (e.num - 1) + 2));
                } else t = L.instance.createSprite3D("Default_2"), Util.changeMaterial(t.getChildAt(0), "subPack/skin/" + L.instance.jichuskin[GameData.useskin] + ".png");
                t.getChildAt(0).transform.rotationEuler = ex.v3(0, 180, 0);
                var i = t.transform;
                if (A.instance.newScene.addChild(t), this.boxs.length > 1 ? i.position = this.boxs[this.boxs.length - 1].position.clone() : i.position = this.root.transform.position.clone(), 
                this.Grade >= 50) {
                    var a = .02 * (this.Grade - 50) + 1.02;
                    t.transform.localScale = ex.v3(a, a, a);
                }
                var n = t.addComponent(S);
                if (n.showcanCollideWith(Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER), 
                this.boxs.push(n), this.boxs.length > 4 && (this.boxs.length % 4 == 1 || this.boxs.length % 4 == 2)) {
                    var s = L.instance.createSprite3D("jiasu_Add");
                    this.jiasus.push(s), s.transform.localPositionY = .5, s.active = !1, Util.SetEffectRenderModeByRootName(s), 
                    s.transform.rotationEuler = ex.v3(0, 180, 0), n.root.addChild(s);
                }
            }
        } ]), i;
    }(Laya.Script3D), _ = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).root = null, t.countDown = null, t.relive = null, 
            t.warbackhome = null, t.closerelive = null, t.tell = null, t.length = null, t.diamond = null, 
            t.content = null, t.backfun = null, t.relivecount = 0, t.relivefun = null, t.havevideo = !1, 
            t.clickvideo = !1, t.distence = 1, t.count = 5, t.playvideo = !1, r.instance = i(t), 
            t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.root = this.owner, this.root.width = Laya.stage.width, this.root.height = Laya.stage.height, 
                this.content = this.root.getChildByName("content"), this.warcontent = this.root.getChildByName("warcontent"), 
                this.content.pos(this.root.width / 2, this.root.height / 2), this.warcontent.pos(this.root.width / 2, this.root.height / 2), 
                this.countDown = this.content.getChildByName("countDown"), this.tell = this.content.getChildByName("tell"), 
                this.length = this.tell.getChildByName("length"), this.diamond = this.tell.getChildByName("diamond"), 
                this.relive = this.content.getChildByName("relive"), this.closerelive = this.content.getChildByName("closerelive"), 
                this.relive_war = this.warcontent.getChildByName("relive_war"), this.relive_long = this.warcontent.getChildByName("relive_long"), 
                this.warbackhome = this.warcontent.getChildByName("backhome"), this.longe = this.warcontent.getChildByName("longe"), 
                this.title = this.warcontent.getChildByName("title"), this.ys = this.root.getChildByName("ys"), 
                this.closeys = this.ys.getChildByName("closeys"), this.relive.on(Laya.Event.CLICK, this, this.onrelive), 
                this.closerelive.on(Laya.Event.CLICK, this, this.oncloserelive), this.relive_long.on(Laya.Event.CLICK, this, this.onrelive_long), 
                this.relive_war.on(Laya.Event.CLICK, this, this.onrelive_war), this.warbackhome.on(Laya.Event.CLICK, this, this.onbackhome_war), 
                this.closeys.on(Laya.Event.CLICK, this, this.oncloseys), this.ys.on(Laya.Event.CLICK, this, this.clickAD);
            }
        }, {
            key: "oncloseys",
            value: function(t) {
                t.stopPropagation(), this.ys.visible = !1;
            }
        }, {
            key: "clickAD",
            value: function() {
                var t = this;
                G.pushEvent("用户点击1比1oppo原生广告"), G.nativeAdReportAdClick(), G.nativeAdRefresh(Laya.Handler.create(this, function(e) {
                    e && (t.ys.skin = e);
                }));
            }
        }, {
            key: "onbackhome_war",
            value: function() {
                d.getInstance().playbtn(), GameData.useskin = GameData.olduseskin;
                var t, e = GameData.Segment, i = 0;
                t = GameData.championscore - e <= 0 ? -GameData.championscore : -(e + 1 + 20), GameData.Segment > 1 && (i = -1), 
                G.pushEvents([ {
                    eventId: "团战模式返回首页",
                    detail: {
                        gameTime: Math.round(A.instance.survivalTime / 1e3)
                    }
                } ]), GameData.championscore += t, GameData.minSegment >= 0 ? GameData.Segment < 39 && (GameData.minSegment + i > GD.levelconfig[GameData.Segment].levelnum ? (GameData.Segment++, 
                GameData.minSegment = GameData.minSegment + i, GameData.minSegment = GameData.minSegment - GD.levelconfig[GameData.Segment].levelnum, 
                console.log("GameData.minSegment====升级后的星星===>", GameData.minSegment)) : GameData.minSegment = GameData.minSegment + i) : (GameData.minSegment = GameData.minSegment + i, 
                GameData.Segment--, GameData.minSegment = GameData.minSegment + GD.levelconfig[GameData.Segment].levelnum, 
                console.log("GameData.minSegment====掉段后的星星===>", GameData.minSegment)), I.instance.playgame = !1, 
                G.startgame = !0, I.instance.clearGame(), e > 0 && G.showToast("中途退出游戏，奖杯数减少" + e), 
                Laya.Scene.open("scene/indexView.scene"), this.onhide();
            }
        }, {
            key: "onshow",
            value: function(t) {
                var isShowBanner = true;
                var e = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this.clickvideo = !1, GameInfo.getCheatCount("复活") > 0 && 1 == GD.playgameconfig.gameinfo && G.uploadCheatShow("复活");
                var a = OppoADM.getNativeAdImgUrl();
                if (G.isOPPO() && a ? (this.ys.skin = a, this.ys.visible = !0, GD.stateClick(A.instance.gameTime) && Laya.timer.once(1500, this, function() {
                    e.clickAD(), GameData.dayAudoClickADCount++, GameData.upload();
                })) : this.ys.visible = !1, A.instance.RegimentWar) this.ys.visible ? (this.longe.y = 120, 
                this.title.y = 80, this.relive_war.y = 600, this.relive_long.y = 600, this.warbackhome.y = 650) : (this.longe.y = 240, 
                this.title.y = 158, this.relive_war.y = 415, this.relive_long.y = 415, this.warbackhome.y = 465), 
                this.warcontent.visible = !0, this.content.visible = !1, this.backfun = t, this.relivefun = i, 
                this.longe.changeText("长度：" + I.instance.scoreArray[0].score), this.title.text = I.instance.causeOfDeath, window.showEnd(),isShowBanner = false,
                this.root.visible = !0, GA.haveRewardVideo() && GA.isNextRewardVideo("团战复活按钮") || !G.isWeChat() ? this.havevideo = !0 : this.havevideo = !1; else {
                    if (this.warcontent.visible = !1, this.content.visible = !0, this.relivecount >= GD.playgameconfig.relive) return I.instance.playgame = !1, 
                    G.startgame = !0, I.instance.clearGame(), Laya.Scene.open("scene/resultView.scene"),
                    void this.onhide();
                    this.closerelive.visible = !1, Laya.timer.once(1e3 * GD.playgameconfig.relivetimeClose, this, function() {
                        e.closerelive.visible = !0;
                    }), this.relivecount++, A.instance.TimeLimit ? this.distence = GameData.TimeLimitReceive : A.instance.CrazyMode ? this.distence = GameData.CrazynumReceive : this.distence = GameData.endlessnumReceive, 
                    this.showlengthtell(), this.backfun = t, this.count = 5, this.playvideo = !1, G.isWeChat() && this.playcount_down(), 
                    this.root.visible = !0, GA.haveRewardVideo() && GA.isNextRewardVideo("复活按钮") || !G.isWeChat() ? (this.havevideo = !0, 
                    this.relive.skin = "gamepad/result/relive.png") : (this.havevideo = !1, this.relive.skin = "gamepad/result/relive_share.png"), 
                    G.isOPPO() ? (a ? (this.closerelive.y = 88, this.relive.y = 580, this.tell.y = 602) : (this.relive.y = 380, 
                    this.tell.y = 403), this.countDown.visible = !1) : this.countDown.visible = !0;
                }
                if(isShowBanner){
                    G.isOPPO() ? this.ys.visible ? G.hideoppobanner() : G.showoppobanner() : 0 == GD.playgameconfig.relivebanner ? (A.instance.relivenum++, 
                        A.instance.relivenum % 2 == 0 ? (G.showBanner(), m.showLRADList(), G.reliveshowCustomAdByTag("top-left")) : (G.closeBannerWithTimes(3), 
                        m.showScrollGameList())) : 1 == GD.playgameconfig.relivebanner ? (G.showBanner(), 
                        m.showLRADList(), G.reliveshowCustomAdByTag("top-left")) : (G.closeBannerWithTimes(3), 
                        m.showScrollGameList());
                }
                
            }
        }, {
            key: "showlengthtell",
            value: function() {
                var t = 0;
                if (A.instance.TimeLimit) if (this.distence <= GD.timereward.length - 1) {
                    if (this.tell.visible = !0, I.instance.scoreArray[0].score + GameData.TimeLimitscore >= GD.timereward[this.distence].speed) return this.distence++, 
                    void this.showlengthtell();
                    for (var e = 0, i = t = GD.timereward[this.distence].speed - I.instance.scoreArray[0].score - GameData.TimeLimitscore; i >= 1; ) i /= 10, 
                    e++;
                    this.length.width = 15 * e + 15, this.tell.width = 229 + 15 * e, this.length.text = t + "", 
                    0 == GD.timereward[this.distence].type ? this.diamond.text = "金币x" + GD.timereward[this.distence].num : this.diamond.text = "钻石x" + GD.timereward[this.distence].num;
                } else this.tell.visible = !1; else if (A.instance.CrazyMode) if (this.distence <= GD.endlessreward.length - 1) {
                    if (this.tell.visible = !0, I.instance.scoreArray[0].score + GameData.Crazyscore >= GD.endlessreward[this.distence].speed) return this.distence++, 
                    void this.showlengthtell();
                    for (var a = 0, n = t = GD.endlessreward[this.distence].speed - I.instance.scoreArray[0].score - GameData.Crazyscore; n >= 1; ) n /= 10, 
                    a++;
                    this.length.width = 15 * a + 15, this.tell.width = 229 + 15 * a, this.length.text = t + "", 
                    0 == GD.endlessreward[this.distence].type ? this.diamond.text = "金币x" + 2 * GD.endlessreward[this.distence].num : this.diamond.text = "钻石x" + 2 * GD.endlessreward[this.distence].num;
                } else this.tell.visible = !1; else if (this.distence <= GD.endlessreward.length - 1) {
                    if (this.tell.visible = !0, I.instance.scoreArray[0].score + GameData.endlessscore >= GD.endlessreward[this.distence].speed) return this.distence++, 
                    void this.showlengthtell();
                    for (var s = 0, o = t = GD.endlessreward[this.distence].speed - I.instance.scoreArray[0].score - GameData.endlessscore; o >= 1; ) o /= 10, 
                    s++;
                    this.length.width = 15 * s + 15, this.tell.width = 229 + 15 * s, this.length.text = t + "", 
                    0 == GD.endlessreward[this.distence].type ? this.diamond.text = "金币x" + GD.endlessreward[this.distence].num : this.diamond.text = "钻石x" + GD.endlessreward[this.distence].num;
                } else this.tell.visible = !1;
            }
        }, {
            key: "playcount_down",
            value: function() {
                var t = this;
                this.playvideo || (this.count <= 0 ? this.closereliveView() : (this.countDown.skin = "gamepad/result/" + this.count + ".png", 
                Laya.timer.once(1e3, this, function() {
                    I.instance.playgame && (t.count--, t.playcount_down());
                })));
            }
        }, {
            key: "closereliveView",
            value: function() {
                var t = this;
                GameInfo.clicknoinfotime(), !this.clickvideo && GameInfo.getCheatCount("复活") > 0 && 1 == GD.playgameconfig.gameinfo && !GA.Info.underCheck && !GameData.noinfo ? (this.clickvideo = !0, 
                this.playvideo = !0, GameInfo.closeadtime(), G.rewardOperation("复活按钮", this.havevideo, function() {
                    t.backfun && t.backfun.run(), A.instance.showAddCoinmj1(5, GameData.maxTodyVideo), 
                    t.onhide();
                }, function() {
                    t.playvideo = !1, t.playcount_down();
                })) : (G.closeBannerWithTimes(1), I.instance.playgame = !1, G.startgame = !0, I.instance.clearGame(), 
                this.onhide(), Laya.Scene.open("scene/resultView.scene"));
            }
        }, {
            key: "oncloserelive",
            value: function() {
                d.getInstance().playbtn(), this.closereliveView();
            }
        }, {
            key: "onhide",
            value: function() {
                G.isWeChat() && (G.hideCustomAdByTag("top-left"), m.hideLRADList(), m.hideScrollGameList(), 
                G.closeBannerWithTimes(3)), G.isOPPO() && G.hideoppobanner(), this.root.visible = !1;
            }
        }, {
            key: "onrelive_war",
            value: function() {
                var t = this;
                G.startgame ? G.showToast("战斗已结束！") : (GameInfo.clicknoinfotime(), !this.clickvideo && GameInfo.getCheatCount("复活") > 0 && 1 == GD.playgameconfig.gameinfo && !GA.Info.underCheck && !GameData.noinfo ? (I.instance.playgame = !1, 
                GameInfo.closeadtime(), G.rewardOperation("团战复活按钮", this.havevideo, function() {
                    G.startgame ? G.showToast("战斗已结束！") : (t.backfun && t.backfun.run(), A.instance.showAddCoinmj1(5, GameData.maxTodyVideo), 
                    t.onhide());
                }, function() {
                    I.instance.playgame = !0;
                })) : (G.pushEvent("团战直接复活"), this.relivefun && this.relivefun.run(), this.onhide()));
            }
        }, {
            key: "onrelive_long",
            value: function() {
                var t = this;
                G.startgame ? G.showToast("战斗已结束！") : (I.instance.playgame = !1, this.havevideo ? G.rewardOperation("团战复活按钮", this.havevideo, function() {
                    G.startgame ? G.showToast("战斗已结束！") : (t.backfun && t.backfun.run(), A.instance.showAddCoinmj1(5, GameData.maxTodyVideo), 
                    t.onhide());
                }, function() {
                    I.instance.playgame = !0;
                }) : G.rewardOperation("团战复活按钮", this.havevideo, function() {
                    G.startgame || (t.backfun && t.backfun.run(), A.instance.showAddCoinmj1(5, GameData.maxTodyVideo), 
                    t.onhide());
                }, function() {
                    I.instance.playgame = !0;
                }));
            }
        }, {
            key: "onrelive",
            value: function() {
                var t = this;
                this.playvideo = !0, d.getInstance().playbtn(), this.havevideo ? G.rewardOperation("复活按钮", this.havevideo, function() {
                    t.backfun && t.backfun.run(), A.instance.showAddCoinmj1(5, GameData.maxTodyVideo), 
                    t.onhide();
                }, function() {
                    t.playvideo = !1, t.playcount_down();
                }) : G.rewardOperation("复活按钮", this.havevideo, function() {
                    t.backfun && t.backfun.run(), A.instance.showAddCoinmj1(5, GameData.maxTodyVideo), 
                    t.onhide();
                }, function() {});
            }
        } ]), r;
    }(Laya.Script);
    _.instance = null;
    var I = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).Acelerateing = !1, t.playgame = !1, 
            t.watchmultiple = 1, t.mustAI = 0, t.killAi = 0, t.useSkin = [], t.haveSkin = [], 
            t.availableSkin = [], t.playspos = [], t.playdistant = [], t.gamestage = 1, t.wargamecount = 0, 
            t.TimeLimitgamecount = 0, t.gamecount = 0, t.aicount = 11, t.color = 1, t.rand = 0, 
            t.rankArray = [], t.scoreArray = [], t.skin1 = 0, t.skin2 = 0, t.skin3 = 0, t.arrayskins = [ 0, 2, 6, 7 ], 
            t.maxRand = 0, t.oldAIboxs = [], t.AIboxs = [], t.Food_Dot_color = [ "BlackishGreen", "Brown", "Yellow", "Green", "Blue" ], 
            t.ramdpos = ex.v3(), t.play = null, t.AIbox = null, t.AIrigidBody = null, t.AIbox1 = null, 
            t.boxBRigid = null, t.m_TouchBegan = !1, t.m_StartPoint = ex.v2(), t.m_EndPoint = ex.v2(), 
            t.m_MoveDirection = ex.v2(), t.tempVec2 = ex.v2(), t.movetochange = !1, t.warscort = 300, 
            t.warfirst = 300, t.warscore = 300, t.warthree = 300, t.count = 0, t.teamscoreArray = [], 
            t.causeOfDeath = "", t.velocity = ex.v3(), t.endingnum = 3, t.maxT = 2, t.curIndex = 0, 
            t.brickDir = [], t.aidiantce = [], t.distant = 100, t.bean = null, t.moveTime = 0, 
            t.localRotationEulerY = 0, t.lastpos = ex.v3(), t.oldlocalRotationEuler = ex.v3(), 
            t.oldboxslocalRotationEuler = ex.v3(), t.CameraendPos = new Laya.Vector3(0, 20, 0), 
            t.playerPos = ex.v3(), t.toPos = ex.v3(), t.rootpos = [], t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                i.instance = this, this.width = Laya.stage.width, this.height = Laya.stage.height, 
                this.rank.y = G.offsetY, this.acenterNode.x = (Laya.stage.width - this.acenterNode.width) / 2, 
                this.acenterNode.y = (Laya.stage.height - this.acenterNode.height) / 2, this.longth.x = this.must.x = 64 - (Laya.stage.width - this.acenterNode.width) / 2, 
                this.survival.x = 190 - (Laya.stage.width - this.acenterNode.width) / 2, this.visible = !1, 
                this.acelerate.on(Laya.Event.MOUSE_DOWN, this, this.onMouseAcelerate), this.acelerate.on(Laya.Event.MOUSE_UP, this, this.onMouseUpAcelerate), 
                this.acelerate.on(Laya.Event.MOUSE_OUT, this, this.onMouseUpAcelerate), this.movegamepad.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), 
                this.movegamepad.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), this.movegamepad.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), 
                this.movegamepad.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp), GA.PA.onShow(this.onshow), 
                GA.PA.onHide(this.onhide);
            }
        }, {
            key: "onhide",
            value: function() {
                i.instance && 1 == i.instance.gamestage && (i.instance.gamestage = 0);
            }
        }, {
            key: "onshow",
            value: function() {
                i.instance && (0 == i.instance.gamestage && (i.instance.gamestage = 1), d.getInstance().switch && (GA.Info.isPreview || (i.instance.playgame ? Laya.SoundManager.playMusic(h.SubPkgUrl + "audio/bgm_ingame.mp3", 0) : Laya.SoundManager.playMusic(h.SubPkgUrl + "audio/bgm_world.mp3", 0))));
            }
        }, {
            key: "resetSprite3d",
            value: function(t) {
                t.transform.position = MyMath.v3(0, 0, 0), t.transform.localScale = MyMath.v3(0, 0, 0), 
                t.transform.rotationEuler = MyMath.v3(0, 0, 0), t.removeChildAt(2), t.removeChildAt(1);
            }
        }, {
            key: "clearGame",
            value: function() {
                if (Laya.timer.clear(this, this.onUpdate), A.instance.newScene) {
                    this.play.label_addCoin && this.play.label_addCoin.removeSelf();
                    var t, e = this.play.root;
                    this.play.xiawei && (this.play.xiawei.removeSelf(), this.play.xiawei.destroy(!0)), 
                    this.play.boxs.forEach(function(t) {
                        t.root.removeSelf(), t.root.destroy(!0), t.destroy();
                    }), this.play.destroy(), this.play = null, this.resetSprite3d(e), e.active = !0, 
                    e.destroy(!0);
                    for (var a = i.instance.AIboxs.length - 1; a > 0; a--) t = i.instance.AIboxs[a].roots, 
                    i.instance.AIboxs[a].xiawei && (i.instance.AIboxs[a].xiawei.removeSelf(), i.instance.AIboxs[a].xiawei.destroy(!0)), 
                    i.instance.AIboxs[a].boxs.forEach(function(t) {
                        t.root.removeSelf(), t.root.destroy(!0), t.destroy();
                    }), i.instance.AIboxs[a] && (i.instance.AIboxs[a].label_addCoin && i.instance.AIboxs[a].label_addCoin.removeSelf(), 
                    i.instance.AIboxs[a].destroy(), i.instance.AIboxs.splice(a, 1)), t.destroy(!0), 
                    t.active = !0;
                    A.instance.Beans.forEach(function(t) {
                        t.moveroot = !1;
                    });
                }
            }
        }, {
            key: "chnagemovepos",
            value: function(t) {
                for (var e = 0; e < t.length; e++) A.instance.RegimentWar ? t[e] = MyMath.v2temp1(MyMath.randFloat(-38, 38), MyMath.randFloat(-38, 38)).clone() : t[e] = MyMath.v2temp1(MyMath.randFloat(-78, 78), MyMath.randFloat(-78, 78)).clone();
            }
        }, {
            key: "chnagepos",
            value: function(t) {
                for (var e = 0; e < t.length; e++) t[e].active = !0, A.instance.RegimentWar ? (t[e].transform.position.x = MyMath.randFloat(-38, 38), 
                t[e].transform.position.y = .3, t[e].transform.position.z = MyMath.randFloat(-38, 38)) : (t[e].transform.position.x = MyMath.randFloat(-78, 78), 
                t[e].transform.position.y = .3, t[e].transform.position.y = MyMath.randFloat(-78, 78));
            }
        }, {
            key: "loadgame",
            value: function() {
                if (Laya.SoundManager.playMusic(h.SubPkgUrl + "audio/bgm_ingame.mp3", 0), A.instance.showinfo = !1, 
                this.useSkin = [], this.haveSkin = [], this.availableSkin = [], this.rankArray = [], 
                this.scoreArray = [], this.AIboxs = [], this.maxRand = 0, this.chnagepos(A.instance.FoodStarts), 
                this.chnagemovepos(A.instance.FoodRamdStarts), this.chnagepos(A.instance.FoodMagnets), 
                this.chnagemovepos(A.instance.FoodRamdMagnets), this.chnagepos(A.instance.FoodShield), 
                this.chnagemovepos(A.instance.FoodRamdShield), A.instance.RegimentWar) {
                    for (var t = 0; t < A.instance.Tangyuanpostion.length; t++) A.instance.Tangyuanpostion[t] = null;
                    for (var e = 0; e < A.instance.foodpostion.length; e++) A.instance.foodpostion[e] = null;
                } else this.chnagemovepos(A.instance.Tangyuanpostion), this.chnagemovepos(A.instance.foodpostion);
                if (A.instance.RegimentWar) {
                    GameData.flashSale[2]++, i.instance.survival.scaleX = 1, i.instance.survival.scaleY = 1, 
                    this.survival.x = 190 - (Laya.stage.width - this.acenterNode.width) / 2, i.instance.survival.y = 137, 
                    i.instance.survival.width = 252, i.instance.survival.text = "存活: 00:00:00", A.instance.plane.transform.localScaleX = .5, 
                    A.instance.plane.transform.localScaleY = .5, A.instance.plane.transform.localScaleZ = .5;
                    for (var a = 0; a < A.instance.wayList.length; a++) A.instance.setboxpostion(a, .5);
                    for (var n = A.instance.Beans.length - 1; n >= 0; n--) {
                        var s = A.instance.Beans[n];
                        2 == s.level ? (A.instance.Beans.splice(n, 1), A.instance.Beanspos.splice(n, 1), 
                        L.instance.recoverySprite3D(s.root)) : (Math.abs(s.root.transform.position.x) >= 39.5 || Math.abs(s.root.transform.position.z) >= 39.5) && (s.root.transform.position = i.instance.changepos(), 
                        A.instance.Beanspos[n] = s.root.transform.position.clone());
                    }
                } else if (A.instance.TimeLimit) {
                    GameData.flashSale[1]++, i.instance.survival.x = 640, i.instance.survival.y = G.offsetY - GA.PA.getMenuButtonBoundingClientRect().height, 
                    i.instance.survival.width = 85, i.instance.survival.scaleX = 1.2, i.instance.survival.scaleY = 1.2, 
                    i.instance.survival.text = "03:00", A.instance.plane.transform.localScaleX = 1, 
                    A.instance.plane.transform.localScaleY = 1, A.instance.plane.transform.localScaleZ = 1;
                    for (var o = 0; o < A.instance.wayList.length; o++) A.instance.setboxpostion(o, 1);
                    for (var r = A.instance.Beans.length - 1; r >= 0; r--) {
                        var l = A.instance.Beans[r];
                        2 == l.level ? (A.instance.Beans.splice(r, 1), A.instance.Beanspos.splice(r, 1), 
                        L.instance.recoverySprite3D(l.root)) : (Math.abs(l.root.transform.position.x) >= 39.5 || Math.abs(l.root.transform.position.z) >= 39.5) && (l.root.transform.position = i.instance.changepos(), 
                        A.instance.Beanspos[r] = l.root.transform.position.clone());
                    }
                } else {
                    GameData.flashSale[0]++;
                    for (var d = A.instance.Beans.length - 1; d >= 0; d--) {
                        var c = A.instance.Beans[d];
                        2 == c.level && (A.instance.Beans.splice(d, 1), A.instance.Beanspos.splice(d, 1), 
                        L.instance.recoverySprite3D(c.root));
                    }
                    i.instance.survival.scaleX = 1, i.instance.survival.scaleY = 1, this.survival.x = 190 - (Laya.stage.width - this.acenterNode.width) / 2, 
                    i.instance.survival.y = 137, i.instance.survival.width = 252, i.instance.survival.text = "存活: 00:00:00", 
                    A.instance.plane.transform.localScaleX = 1, A.instance.plane.transform.localScaleY = 1, 
                    A.instance.plane.transform.localScaleZ = 1;
                    for (var m = 0; m < A.instance.wayList.length; m++) A.instance.setboxpostion(m, 1);
                }
                for (var u = 0; u < L.instance.skin_.length + 8; u++) GA.Info.underCheck ? 35 != u && this.haveSkin.push(u) : this.haveSkin.push(u);
                var g;
                A.instance.plane && (A.instance.color = MyMath.rand(1, 2), Util.changeMaterial(A.instance.plane.getChildAt(0), "subPack/skin/Ground" + A.instance.color + ".png")), 
                this.color = A.instance.color, 1 == A.instance.color || 3 == A.instance.color || 4 == A.instance.color || 5 == A.instance.color ? (this.raction.color = this.call.color = "#ffffff", 
                this.must.color = this.survival.color = this.longth.color = "#ffffff", this.RankingList.color = "#ffffff") : (this.raction.color = this.call.color = this.RankingList.color = "#575d64", 
                this.must.color = this.survival.color = this.longth.color = "#575d64"), A.instance.RegimentWar && (this.arrayskins = [ 0, 2, 6, 7 ], 
                this.arrayskins.sort(function(t, e) {
                    return Math.random() - .5;
                }), GameData.olduseskin = GameData.useskin, -1 != this.arrayskins.indexOf(GameData.useskin) ? GameData.useskin = this.arrayskins.splice(this.arrayskins.indexOf(GameData.useskin), 1)[0] : GameData.useskin = this.arrayskins.splice(3, 1)[0], 
                this.wartitle.getChildAt(0).text = "目标:队伍总长度达到" + GD.playgameconfig.Summation, this.wartitle.getChildAt(0).color = "#ffffff"), 
                GameData.useskin > 7 ? g = L.instance.createSprite3D(L.instance.skin_[GameData.useskin - 8].name + 1) : (g = L.instance.createSprite3D("Default_1"), 
                Util.changeMaterial(g.getChildAt(0), "subPack/skin/" + L.instance.jichuskin[GameData.useskin] + ".png")), 
                Laya.Browser.onAndroid && (g.getChildAt(0).meshRenderer.castShadow = !0, g.getChildAt(0).meshRenderer.receiveShadow = !0), 
                g.getChildAt(0).transform.rotationEuler = ex.v3(0, 180, 0), g.getChildAt(0).transform.localPosition = ex.v3(0, .2, 0), 
                A.instance.newScene.addChild(g);
                var y = g.addComponent(B);
                this.play = y, y.skinindex = GameData.useskin;
                var v = 0;
                GD.skinconfig.forEach(function(t) {
                    t.skinnum == GameData.useskin && (v = t.Additional - 1);
                });
                var p, f = 0;
                switch (GameData.skinlevel[v] + 1) {
                  case 1:
                    f = GD.snakeLevel[v].level;
                    break;

                  case 2:
                    f = GD.snakeLevel[v].level2;
                    break;

                  case 3:
                    f = GD.snakeLevel[v].level3;
                    break;

                  case 4:
                    f = GD.snakeLevel[v].level4;
                    break;

                  case 5:
                    f = GD.snakeLevel[v].level5;
                    break;

                  case 6:
                    f = GD.snakeLevel[v].level6;
                    break;

                  case 7:
                    f = GD.snakeLevel[v].level7;
                    break;

                  case 8:
                    f = GD.snakeLevel[v].level8;
                    break;

                  case 9:
                    f = GD.snakeLevel[v].level9;
                    break;

                  case 10:
                    f = GD.snakeLevel[v].level10;
                }
                p = GD.snakeLevel[v].title, A.instance.attribute = f, A.instance.skintype = p, 21 == y.skinindex && y.addXiawei(), 
                this.useSkin[0] = y.skinindex, y.addBoxs(), y.addBoxs(), y.addBoxs(), y.Grade = 1, 
                A.instance.RegimentWar ? (y.fraction = 0, this.scoreArray[0] = {
                    id: 0,
                    score: 100,
                    name: "我",
                    fraction: 100,
                    Grade: y.Grade
                }) : this.scoreArray[0] = {
                    id: 0,
                    score: 100 + GameData.addlongth,
                    name: "我",
                    fraction: 100,
                    Grade: y.Grade
                }, this.addboxsforplay(y), y.playjiasu_Add();
                var k = 11;
                this.aicount = 11, G.isLowEndDevice() && (k = 8, this.aicount = 8);
                var w = 0;
                A.instance.TimeLimit ? (w = 0 == GameData.Logindays || GameData.isNewPlayer ? GD.playgameconfig.timelimitplaygame[0] > this.gamecount ? GD.playgameconfig.timelimitplaygame[1] : GD.playgameconfig.timelimitplaygame[0] + 1 > this.gamecount && GD.playgameconfig.timelimitplaygame.length - 1 > 1 ? GD.playgameconfig.timelimitplaygame[2] : GD.playgameconfig.timelimitplaygame[0] + 2 > this.gamecount && GD.playgameconfig.timelimitplaygame.length - 2 > 2 ? GD.playgameconfig.timelimitplaygame[3] : GD.playgameconfig.timelimitplaygame[GD.playgameconfig.timelimitplaygame.length - 1] : GD.playgameconfig.oldtimelimitplay[0] > this.gamecount ? GD.playgameconfig.oldtimelimitplay[1] : GD.playgameconfig.oldtimelimitplay[0] + 1 > this.gamecount && GD.playgameconfig.oldtimelimitplay.length - 1 > 1 ? GD.playgameconfig.oldtimelimitplay[2] : GD.playgameconfig.oldtimelimitplay[0] + 2 > this.gamecount && GD.playgameconfig.oldtimelimitplay.length - 2 > 2 ? GD.playgameconfig.oldtimelimitplay[3] : GD.playgameconfig.oldtimelimitplay[GD.playgameconfig.oldtimelimitplay.length - 1], 
                this.TimeLimitgamecount++) : A.instance.RegimentWar ? (w = GD.playgameconfig.warnewplaygame[0] > this.gamecount ? GD.playgameconfig.warnewplaygame[1] : GD.playgameconfig.warnewplaygame[0] + 1 > this.gamecount && GD.playgameconfig.warnewplaygame.length - 1 > 1 ? GD.playgameconfig.warnewplaygame[2] : GD.playgameconfig.warnewplaygame[0] + 2 > this.gamecount && GD.playgameconfig.warnewplaygame.length - 2 > 2 ? GD.playgameconfig.warnewplaygame[3] : GD.playgameconfig.warnewplaygame[GD.playgameconfig.warnewplaygame.length - 1], 
                this.wargamecount++) : (0 == GameData.Logindays || GameData.isNewPlayer ? w = GD.playgameconfig.newplaygame[0] > this.gamecount ? GD.playgameconfig.newplaygame[1] : GD.playgameconfig.newplaygame[0] + 1 > this.gamecount && GD.playgameconfig.newplaygame.length - 1 > 1 ? GD.playgameconfig.newplaygame[2] : GD.playgameconfig.newplaygame[0] + 2 > this.gamecount && GD.playgameconfig.newplaygame.length - 2 > 2 ? GD.playgameconfig.newplaygame[3] : GD.playgameconfig.newplaygame[GD.playgameconfig.newplaygame.length - 1] : 1 == GameData.Logindays ? w = GD.playgameconfig.secendplay[0] > this.gamecount ? GD.playgameconfig.secendplay[1] : GD.playgameconfig.secendplay[0] + 1 > this.gamecount && GD.playgameconfig.secendplay.length - 1 > 1 ? GD.playgameconfig.secendplay[2] : GD.playgameconfig.secendplay[0] + 2 > this.gamecount && GD.playgameconfig.secendplay.length - 2 > 2 ? GD.playgameconfig.secendplay[3] : GD.playgameconfig.secendplay[GD.playgameconfig.secendplay.length - 1] : GameData.Logindays >= 2 && (w = GD.playgameconfig.oldplay[0] > this.gamecount ? GD.playgameconfig.oldplay[1] : GD.playgameconfig.oldplay[0] + 1 > this.gamecount && GD.playgameconfig.oldplay.length - 1 > 1 ? GD.playgameconfig.oldplay[2] : GD.playgameconfig.oldplay[0] + 2 > this.gamecount && GD.playgameconfig.oldplay.length - 2 > 2 ? GD.playgameconfig.oldplay[3] : GD.playgameconfig.oldplay[GD.playgameconfig.oldplay.length - 1]), 
                this.gamecount++);
                for (var D = 0; D < k; D++) this.RandManSkin(), Math.random() > .5 && w > 0 ? (w--, 
                this.addaibox(D + 1, !0)) : this.addaibox(D + 1);
                this.rankArray = this.scoreArray.concat(), this.rankArray.sort(function(t, e) {
                    return e.score - t.score;
                }), this.showrank(), A.instance.survivalTime = 0, Laya.timer.frameLoop(1, this, this.onUpdate), 
                i.instance.playgame = !0;
            }
        }, {
            key: "changeOfarray",
            value: function(t) {
                t.forEach(function(t) {
                    A.instance.RegimentWar ? MyMath.v2temp1(MyMath.randFloat(-38, 38), MyMath.randFloat(-38, 38)) : MyMath.v2temp1(MyMath.randFloat(-78, 78), MyMath.randFloat(-78, 78));
                });
            }
        }, {
            key: "changeOfarraypos",
            value: function(t) {
                t.forEach(function(t) {
                    t.active = !0, A.instance.RegimentWar ? t.transform.position = MyMath.v3(MyMath.randFloat(-38, 38), .3, MyMath.randFloat(-38, 38)) : t.transform.position = MyMath.v3(MyMath.randFloat(-78, 78), .3, MyMath.randFloat(-78, 78));
                });
            }
        }, {
            key: "showrank",
            value: function() {
                for (var t = "", e = "", i = 0; i < this.rankArray.length; i++) i <= 8 && (e += i <= 2 ? "     " + this.rankArray[i].name + "\n" : i + "   " + this.rankArray[i].name + "\n", 
                t += this.rankArray[i].score + "\n");
                this.raction.text = t, this.call.text = e;
            }
        }, {
            key: "changeplay",
            value: function() {
                var t = this.play;
                this.addboxsforplay(t);
            }
        }, {
            key: "addboxsforplay",
            value: function(t) {
                if (!A.instance.RegimentWar && t) {
                    var e = GameData.addlongth + 100;
                    if (A.getInstance().addlonger && (e = GameData.addlongth + 600), A.getInstance().resultLonger && (e = GameData.addlongth + 900), 
                    1 == A.instance.skintype && (e += A.instance.attribute), A.instance.CrazyMode && (e *= 2, 
                    A.getInstance().addlonger ? e -= 500 : A.getInstance().resultLonger && (e -= 800)), 
                    1 == t.Grade) if (e >= 105) {
                        t.Grade = t.Grade + 1, t.addBoxs(), this.addboxsforplay(t);
                        var i;
                        i = GD.Battleconfig.length > t.Grade ? GD.Battleconfig[t.Grade].scale : GD.Battleconfig[GD.Battleconfig.length - 1].scale, 
                        GD.Battleconfig[t.Grade].scale > 1 && (t.root.transform.localScale = ex.v3(i, i, i));
                    } else {
                        var a;
                        (a = GD.Battleconfig.length > t.Grade ? GD.Battleconfig[t.Grade].scale : GD.Battleconfig[GD.Battleconfig.length - 1].scale) > 1 && t.boxs.forEach(function(t) {
                            t.root.transform.localScale = ex.v3(a, a, a);
                        }), t.multiple = a, this.getfraction(t, e);
                    } else if (e >= 100 * Math.pow(GD.Battleconfig[1].numa, t.Grade - 1) + (t.Grade - 2) * GD.Battleconfig[1].numb) t.Grade = t.Grade + 1, 
                    t.addBoxs(), this.addboxsforplay(t); else {
                        var n;
                        n = GD.Battleconfig.length > t.Grade ? GD.Battleconfig[t.Grade].scale : GD.Battleconfig[GD.Battleconfig.length - 1].scale, 
                        t.multiple = n, n > 1 && t.boxs.forEach(function(t) {
                            t.root.transform.localScale = ex.v3(n, n, n);
                        }), this.getfraction(t, e);
                    }
                }
            }
        }, {
            key: "getfraction",
            value: function(t, e) {
                if (t.Grade >= 2) {
                    var i = e;
                    t.fraction = (i - 100) * (t.Grade + GD.Battleconfig[1].numc) + GD.Battleconfig[1].numd, 
                    this.scoreArray[0] = {
                        id: 0,
                        score: i,
                        name: "我",
                        fraction: t.fraction,
                        Grade: t.Grade
                    };
                } else 1 == A.instance.skintype ? (t.fraction = 110 * A.instance.attribute / 5, 
                this.scoreArray[0] = {
                    id: 0,
                    score: 100 + A.instance.attribute,
                    name: "我",
                    fraction: t.fraction,
                    Grade: t.Grade
                }) : (t.fraction = 0, this.scoreArray[0] = {
                    id: 0,
                    score: 100,
                    name: "我",
                    fraction: t.fraction,
                    Grade: t.Grade
                });
            }
        }, {
            key: "showgameview",
            value: function() {
                this.loadgame(), this.mustAI = 0, this.killAi = 0, this.acenterNode.visible = !0, 
                A.instance.RegimentWar ? (this.warfirst = this.warscore = this.warthree = this.warscort = 300, 
                this.showwarranks(0, this.warscort, this.getmaskindex(300)), this.showwarranks(2, this.warfirst, this.getmaskindex(300)), 
                this.showwarranks(6, this.warscore, this.getmaskindex(300)), this.showwarranks(7, this.warthree, this.getmaskindex(300))) : this.rank.visible = !0, 
                this.play.showInvincible(), this.visible = !0, Laya.timer.once(200, this, function() {
                    A.getInstance().button && (console.log("删除butto11111111========"), A.getInstance().button.hide(), 
                    A.getInstance().button.destroy(), A.instance.button = null), G.hideCustomAdByTag("one"), 
                    m.hideScrollGameList();
                });
            }
        }, {
            key: "showrelive",
            value: function(t) {
                _.instance.onshow(t);
            }
        }, {
            key: "showwarrelive",
            value: function(t, e) {
                _.instance.onshow(t, e);
            }
        }, {
            key: "onMouseAcelerate",
            value: function() {
                this.Acelerateing = !0, this.acelerate.getChildAt(0).visible = !0;
            }
        }, {
            key: "onMouseUpAcelerate",
            value: function() {
                this.Acelerateing = !1, this.acelerate.getChildAt(0).visible = !1;
            }
        }, {
            key: "RandManSkin",
            value: function() {
                var t = this;
                this.availableSkin = this.haveSkin.filter(function(e) {
                    return !t.useSkin.some(function(t) {
                        return t === e;
                    });
                });
                var e = MyMath.rand(0, this.availableSkin.length - 1);
                this.useSkin.push(this.availableSkin[e]);
            }
        }, {
            key: "addaibox",
            value: function(t) {
                var e, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.useSkin[t];
                A.instance.RegimentWar ? t < 3 ? (n = GameData.useskin, GameData.useskin > 7 ? e = L.instance.createSprite3D(L.instance.skin_[GameData.useskin - 8].name + 1) : (e = L.instance.createSprite3D("Default_1"), 
                Util.changeMaterial(e.getChildAt(0), "subPack/skin/" + L.instance.jichuskin[GameData.useskin] + ".png"))) : (t < 6 ? n = this.arrayskins[0] : t < 9 ? n = this.arrayskins[1] : t < 12 && (n = this.arrayskins[2]), 
                console.log("skinindex========", n), n >= 8 ? e = L.instance.createSprite3D(L.instance.skin_[n - 8].name + 1) : (e = L.instance.createSprite3D("Default_1"), 
                Util.changeMaterial(e.getChildAt(0), "subPack/skin/" + L.instance.jichuskin[n] + ".png"))) : n >= 8 ? e = L.instance.createSprite3D(L.instance.skin_[n - 8].name + 1) : (e = L.instance.createSprite3D("Default_1"), 
                Util.changeMaterial(e.getChildAt(0), "subPack/skin/" + L.instance.jichuskin[n] + ".png")), 
                e.getChildAt(0).transform.rotationEuler = ex.v3(0, 180, 0), e.getChildAt(0).transform.localPosition = ex.v3(0, .2, 0), 
                A.instance.newScene.addChild(e);
                var s, o = e.addComponent(M);
                o.skinindex = n, 21 == o.skinindex && o.addXiawei(), o.index = t, o.showAIname(), 
                o.addcollisionGroup(), this.randomPos(e.transform), o.roots.transform.localRotationEulerY = 360 * Math.random(), 
                s = t <= 3 ? GD.AIconfig[MyMath.rand(1, 4)] : t > 3 && t < 6 ? GD.AIconfig[MyMath.rand(5, 10)] : GD.AIconfig[MyMath.rand(11, 20)], 
                o.identifier = s.id, o.Growth = s.Growth, o.MagnetTime = s.MagnetTime, o.Avoidance = s.Avoidance, 
                a && (o.Norevolt = !0), A.instance.RegimentWar && (o.Avoidance = 1 * Math.random() / 3 + .66), 
                A.instance.RegimentWar && t < 3 && GameData.championscore < 300 && (o.Avoidance = 1), 
                o.InitialLength = s.InitialLength, o.relive = s.relive, o.Acceleration_frq = s.Acceleration_frq, 
                o.addBoxs(), o.addBoxs(), o.addBoxs(), t > this.aicount ? (o.die = !0, this.addAIboxs(o), 
                o.boxs.forEach(function(t) {
                    t.root.active = !1;
                }), o.roots.active = !1) : Math.random() > .7 && this.maxRand < 4 ? (this.maxRand++, 
                o.firstGrade = o.Grade, this.addAIboxs(o, !0)) : this.addAIboxs(o), o.playjiasu_Add(), 
                i.instance.AIboxs[o.index] = o;
            }
        }, {
            key: "addAIboxs",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (A.instance.RegimentWar) this.aigetfraction(t); else if (e && !A.instance.TimeLimit) if (1 == t.Grade) if (t.InitialLength + 100 * MyMath.rand(10, 15) >= 105) t.Grade = t.Grade + 1, 
                t.addBoxs(), this.addAIboxs(t, !0); else {
                    var i = 1;
                    (i = GD.Battleconfig.length > t.Grade ? GD.Battleconfig[t.Grade].scale : GD.Battleconfig[GD.Battleconfig.length - 1].scale) > 1 && t.boxs.forEach(function(t) {
                        t.root.transform.localScale = ex.v3(i, i, i);
                    }), t.roots.transform.localScale = ex.v3(i, i, i), t.multiple = i, this.aigetfraction(t);
                } else {
                    var a = 100 * Math.pow(GD.Battleconfig[1].numa, t.Grade - 1) + (t.Grade - 2) * GD.Battleconfig[1].numb;
                    if (t.InitialLength + 100 * MyMath.rand(10, 15) >= a) t.Grade = t.Grade + 1, t.addBoxs(), 
                    this.addAIboxs(t, !0); else {
                        var n = 1;
                        (n = GD.Battleconfig.length > t.Grade ? GD.Battleconfig[t.Grade].scale : GD.Battleconfig[GD.Battleconfig.length - 1].scale) > 1 && t.boxs.forEach(function(t) {
                            t.root.transform.localScale = ex.v3(n, n, n);
                        }), t.roots.transform.localScale = ex.v3(n, n, n), t.multiple = n, this.aigetfraction(t);
                    }
                } else if (1 == t.Grade) if (t.InitialLength >= 105) t.Grade = t.Grade + 1, t.addBoxs(), 
                this.addAIboxs(t); else {
                    var s = 1;
                    s = GD.Battleconfig.length > t.Grade ? GD.Battleconfig[t.Grade].scale : GD.Battleconfig[GD.Battleconfig.length - 1].scale, 
                    GD.Battleconfig[t.Grade].scale > 1 && (t.roots.transform.localScale = ex.v3(s, s, s), 
                    t.boxs.forEach(function(t) {
                        t.root.transform.localScale = ex.v3(s, s, s);
                    })), t.multiple = s, this.aigetfraction(t);
                } else {
                    var o = 100 * Math.pow(GD.Battleconfig[1].numa, t.Grade - 1) + (t.Grade - 2) * GD.Battleconfig[1].numb;
                    if (t.InitialLength >= o) t.Grade = t.Grade + 1, t.addBoxs(), this.addAIboxs(t); else {
                        var r = 1;
                        r = GD.Battleconfig.length > t.Grade ? GD.Battleconfig[t.Grade].scale : GD.Battleconfig[GD.Battleconfig.length - 1].scale, 
                        GD.Battleconfig[t.Grade].scale > 1 && (t.roots.transform.localScale = ex.v3(r, r, r), 
                        t.boxs.forEach(function(t) {
                            t.root.transform.localScale = ex.v3(r, r, r);
                        })), t.multiple = r, this.aigetfraction(t);
                    }
                }
            }
        }, {
            key: "aigetfraction",
            value: function(t) {
                if (t.Grade >= 2) {
                    var e = Math.round(100 * Math.pow(GD.Battleconfig[1].numa, t.Grade - 1) + (t.Grade - 2) * GD.Battleconfig[1].numb);
                    t.fraction = (e - 100) * (t.Grade + GD.Battleconfig[1].numc) + GD.Battleconfig[1].numd, 
                    this.scoreArray[t.index] = {
                        id: t.index,
                        score: e,
                        name: L.instance.usetrobots[t.index - 1].nickname,
                        fraction: t.fraction,
                        Grade: t.Grade
                    };
                } else t.fraction = 100, this.scoreArray[t.index] = {
                    id: t.index,
                    score: 100,
                    name: L.instance.usetrobots[t.index - 1].nickname,
                    fraction: t.fraction,
                    Grade: t.Grade
                };
            }
        }, {
            key: "randomPos",
            value: function(t) {
                var e = 0, i = 0;
                A.instance.RegimentWar ? (e = Math.random() > .5 ? 16 + 20 * Math.random() : -16 - 20 * Math.random(), 
                i = Math.random() > .5 ? 16 + 20 * Math.random() : -16 - 20 * Math.random()) : (e = Math.random() > .5 ? 40 * Math.random() : 40 * -Math.random(), 
                i = Math.random() > .5 ? 40 * Math.random() : 40 * -Math.random()), t.position = ex.v3(e, 0, i);
            }
        }, {
            key: "changepos",
            value: function() {
                var t = 0, e = 0, i = MyMath.randFloat(0, 1), a = MyMath.randFloat(0, 1), n = MyMath.randFloat(0, 1), s = 0, o = 0;
                return A.instance.RegimentWar ? (s = MyMath.randFloat(30, 39.5), o = MyMath.randFloat(-39.5, 39.5)) : (s = MyMath.randFloat(70, 79.5), 
                o = MyMath.randFloat(-79.5, 79.5)), i > .9 ? a > .5 ? n > .5 ? (t = s, e = o) : (t = -s, 
                e = o) : n > .5 ? (e = s, t = o) : (e = -s, t = o) : A.instance.RegimentWar ? (t = MyMath.randFloat(-39.5, 39.5), 
                e = MyMath.randFloat(-39.5, 39.5)) : (t = MyMath.randFloat(-79.5, 79.5), e = MyMath.randFloat(-79.5, 79.5)), 
                this.ramdpos.x = t, this.ramdpos.z = e, this.ramdpos;
            }
        }, {
            key: "onMouseDown",
            value: function() {
                this.m_StartPoint.x = Laya.stage.mouseX, this.m_StartPoint.y = Laya.stage.mouseY, 
                this.m_TouchBegan = !0;
            }
        }, {
            key: "onMouseMove",
            value: function() {
                this.m_TouchBegan && (Date.now(), this.m_EndPoint.x = Laya.stage.mouseX, this.m_EndPoint.y = Laya.stage.mouseY, 
                this.setGamepadControlPosition(Laya.stage.mouseX, Laya.stage.mouseY), ex.pDistance(this.m_StartPoint, this.m_EndPoint) >= 20 && (ex.pSub(this.m_EndPoint, this.m_StartPoint, this.m_MoveDirection), 
                this.changeDirection(this.m_MoveDirection)));
            }
        }, {
            key: "onfuwei",
            value: function() {}
        }, {
            key: "setGamepadControlPosition",
            value: function(t, e) {
                this.tempVec2.x = t, this.tempVec2.y = e;
                var i = this.gamepad.width / 2 / 2;
                ex.pDistance(this.m_StartPoint, this.tempVec2) <= i ? this.gamepadControl.pos(this.tempVec2.x - this.m_StartPoint.x + 100, this.tempVec2.y - this.m_StartPoint.y + 100) : (ex.pNormalize(ex.pSub(this.tempVec2, this.m_StartPoint, this.tempVec2)), 
                ex.pMult(this.tempVec2, i, this.tempVec2), this.gamepadControl.pos(this.tempVec2.x + 50 + i, this.tempVec2.y + 50 + i, !0));
            }
        }, {
            key: "changeDirection",
            value: function(t) {
                this.direction = t;
                var e = -(ex.pToAngle(t) + Math.PI / 2), i = ex.convertToRotate(e) + 180, a = 0;
                this.play && (a = this.geteulerY(i, 0, a, this.play.root.transform.localRotationEulerY), 
                Math.round(a) != Math.round(i) ? this.movetochange = !0 : this.movetochange = !1, 
                this.play.root.transform.localRotationEulerY = a);
            }
        }, {
            key: "geteulerY",
            value: function(t, e, i, a) {
                return e = this.play.root.transform.localRotationEulerY <= 0 ? 360 + a : a, t < 0 && (t = 360 + t), 
                i = t, Math.abs(t - e) > 180 ? e < t ? t - e > 15 && (i = e - 15) : t - e < -15 && (i = e + 15) : e < t ? t - e > 15 && (i = e + 15) : t - e < -15 && (i = e - 15), 
                i > 270 && (i -= 360), i;
            }
        }, {
            key: "onUpdate",
            value: function() {
                var t = this;
                if (this.playgame) {
                    var e = this.play;
                    if (e.updatepos(), this.playgame && !e.root.destroyed) {
                        var a = e.root.transform.position.clone();
                        null == a && console.log("位置获取失败");
                        var n = A.instance.getposindexX(a.x), s = A.instance.getposindexY(a.z);
                        A.instance.RegimentWar && (this.warscort = 0, this.warfirst = 0, this.warscore = 0, 
                        this.warthree = 0);
                        for (var o = 0, r = 0, h = 0; h < this.AIboxs.length; h++) if (this.AIboxs[h]) {
                            this.AIboxs[h].updateAImove(), A.instance.RegimentWar && (this.AIboxs[h].index < 3 ? this.warscort += this.scoreArray[this.AIboxs[h].index].score : this.AIboxs[h].index < 6 ? this.warfirst += this.scoreArray[this.AIboxs[h].index].score : this.AIboxs[h].index < 9 ? this.warscore += this.scoreArray[this.AIboxs[h].index].score : this.AIboxs[h].index < 12 && (this.warthree += this.scoreArray[this.AIboxs[h].index].score));
                            var l = this.AIboxs[h];
                            if (l && l.rootpos.length > 0 && !l.Invincible && !l.die && (o = A.instance.getposindexX(l.rootpos[0].x), 
                            r = A.instance.getposindexX(l.rootpos[0].y), Math.abs(o - n) <= 1 && Math.abs(r - s) <= 1)) for (var d = 0; d < i.instance.AIboxs.length; d++) if (d != l.index) if (0 == d) {
                                var c = !1;
                                if ((!A.instance.RegimentWar || A.instance.RegimentWar && l.skinindex != GameData.useskin) && i.instance.play && !i.instance.play.Invincible && !i.instance.play.die && i.instance.play.rootpos && i.instance.play.rootpos.length > 0) for (var m = 0; m < l.rootpos.length; m++) c || l.rootpos[m] && !i.instance.play.die && A.getInstance().pDistance(l.rootpos[m].x, l.rootpos[m].y, i.instance.play.rootpos[0].x, i.instance.play.rootpos[0].y, .4 * l.multiple + i.instance.play.multiple / 2) && (i.instance.causeOfDeath = i.instance.scoreArray[l.index].name, 
                                i.instance.play.ondie(), c = !0);
                            } else !function() {
                                var e = t.AIboxs[d];
                                if (e) {
                                    var i = !1;
                                    if ((!A.instance.RegimentWar || A.instance.RegimentWar && l.skinindex != e.skinindex) && !e.Invincible && !e.die && e.rootpos.length > 0) for (var a = 0; a < l.rootpos.length; a++) if (!i && l.rootpos[a] && !e.Invincible && !e.die && A.getInstance().pDistance(l.rootpos[a].x, l.rootpos[a].y, e.rootpos[0].x, e.rootpos[0].y, 2 * l.multiple + e.multiple / 2) && (A.getInstance().pDistance(l.rootpos[a].x, l.rootpos[a].y, e.rootpos[0].x, e.rootpos[0].y, .4 * l.multiple + e.multiple / 2) && (i = !0, 
                                    e.showdie()), e.swerve)) if (!e.die && !e.turnangel || Math.random() < e.Avoidance) {
                                        var n = MyMath.CalculateAngleV3(ex.v3(l.rootpos[a].x, 0, -l.rootpos[a].y), ex.v3(e.rootpos[0].x, 0, -e.rootpos[0].y));
                                        e.turnangel = !0, (n += 90) > 180 && n > -90 && (n -= 360), e.eat = !0, e.attack = !1, 
                                        e.move = !1, e.aichangeDirection(n), Laya.timer.once(500, t, function() {
                                            e.turnangel = !1;
                                        });
                                    } else e.swerve = !1, Laya.timer.once(100, t, function() {
                                        e.swerve = !0;
                                    });
                                }
                            }();
                        } else if (0 == h) {
                            var u = !1;
                            if (i.instance.play && !i.instance.play.Invincible && !i.instance.play.die && i.instance.play.rootpos && i.instance.play.rootpos.length > 0) for (var g = function(e) {
                                var a = t.AIboxs[e];
                                if (a && (!A.instance.RegimentWar || A.instance.RegimentWar && GameData.useskin != a.skinindex) && !a.Invincible && !a.die && a.rootpos.length > 0) for (var n = 0; n < i.instance.play.rootpos.length; n++) if (!u && i.instance.play.rootpos[n] && !a.die && !a.Invincible && A.getInstance().pDistance(i.instance.play.rootpos[n].x, i.instance.play.rootpos[n].y, a.rootpos[0].x, a.rootpos[0].y, 2 * i.instance.play.multiple + a.multiple / 2)) if (A.getInstance().pDistance(i.instance.play.rootpos[n].x, i.instance.play.rootpos[n].y, a.rootpos[0].x, a.rootpos[0].y, .4 * i.instance.play.multiple + a.multiple / 2) && (GameData.maxTodymust++, 
                                GameData.upmaxTodymust = !0, i.instance.mustAI++, i.instance.killAi++, GameData.flashSale[4]++, 
                                i.instance.killAi <= 6 ? L.instance.usetrobots[a.index - 1] && A.instance.addkillmove(i.instance.killAi, L.instance.usetrobots[a.index - 1].nickname) : L.instance.usetrobots[a.index - 1] && A.instance.addkillmove(6, L.instance.usetrobots[a.index - 1].nickname), 
                                a.showdie(), u = !0), a.Norevolt && i.instance.mustAI < 8 || GameData.Todaymaxnum < 5 && e > 4 || GameData.Todaymaxnum >= 5 && e > 2) ; else if (a.swerve) if (!a.die && !a.turnangel || Math.random() < a.Avoidance) {
                                    var s = MyMath.CalculateAngleV3(ex.v3(i.instance.play.rootpos[n].x, 0, -i.instance.play.rootpos[n].y), ex.v3(a.rootpos[0].x, 0, -a.rootpos[0].y));
                                    a.turnangel = !0, (s += 90) > 180 && s > -90 && (s -= 360), a.eat = !0, a.attack = !1, 
                                    a.move = !1, a.aichangeDirection(s), Laya.timer.once(500, t, function() {
                                        a.turnangel = !1;
                                    });
                                } else a.swerve = !1, Laya.timer.once(200, t, function() {
                                    a.swerve = !0;
                                });
                            }, y = 0; y < i.instance.AIboxs.length; y++) g(y);
                        }
                        if (this.count % 2 == 0 && (A.instance.moveStars(), A.instance.moveMagnets(), A.instance.moveShield()), 
                        this.eatBeans(), this.count % 100 == 0) {
                            this.must.changeText("击败: " + this.mustAI), this.longth.changeText("长度: " + this.scoreArray[0].score), 
                            this.rankArray = this.scoreArray.concat(), this.rankArray.sort(function(t, e) {
                                return e.score - t.score;
                            }), A.instance.RegimentWar || this.showrank();
                            var v = this.rankArray.indexOf(this.scoreArray[0]) + 1;
                            if (A.instance.RegimentWar || (v >= 10 ? this.mycall.changeText(v + " 我") : this.mycall.changeText(v + "   我"), 
                            this.myraction.changeText(this.scoreArray[0].score + "")), A.instance.ranking = v, 
                            A.instance.score = this.scoreArray[0].score, A.instance.mustAI = this.mustAI, A.instance.RegimentWar) {
                                if (this.rank.visible = !1, this.war.visible = !0, this.warscort += this.scoreArray[0].score, 
                                this.teamscoreArray[0] = {
                                    num: 0,
                                    score: this.warscort
                                }, this.teamscoreArray[1] = {
                                    num: 1,
                                    score: this.warfirst
                                }, this.teamscoreArray[2] = {
                                    num: 2,
                                    score: this.warscore
                                }, this.teamscoreArray[3] = {
                                    num: 3,
                                    score: this.warthree
                                }, this.teamscoreArray.sort(function(t, e) {
                                    return e.score - t.score;
                                }), this.showwarranks(GameData.useskin, this.warscort, this.getmaskindex(0)), this.showwarranks(this.arrayskins[0], this.warfirst, this.getmaskindex(1)), 
                                this.showwarranks(this.arrayskins[1], this.warscore, this.getmaskindex(2)), this.showwarranks(this.arrayskins[2], this.warthree, this.getmaskindex(3)), 
                                GD.playgameconfig.Summation < this.warscort || GD.playgameconfig.Summation < this.warfirst || GD.playgameconfig.Summation < this.warscore || GD.playgameconfig.Summation < this.warthree) {
                                    for (var p = 0; p < this.teamscoreArray.length; p++) 0 == this.teamscoreArray[p].num && (A.instance.warranks = p + 1, 
                                    A.instance.warcontribution = (this.scoreArray[0].score / this.warscort * 100).toFixed(1) + "%");
                                    i.instance.playgame = !1, G.startgame = !0, this.endGame.visible = !0, this.endingnum = 3, 
                                    this.showending(), Laya.timer.once(800, this, function() {
                                        i.instance.clearGame(), Laya.Scene.open("scene/resultView.scene");
                                    });
                                }
                            } else this.war.visible = !1;
                        }
                        G.isLowEndDevice, e.xitieshiTime > 0 ? (this.downcitie.visible = !0, A.instance.CrazyMode ? e.xitieshiTime < 3e4 ? (this.citie.graphics.clear(), 
                        this.citie.graphics.drawPie(35, 35, 70, e.xitieshiTime / 3e4 * 360 - 90, 270, "#ffffff")) : this.citie.graphics.clear() : e.xitieshiTime < 1e4 ? (this.citie.graphics.clear(), 
                        this.citie.graphics.drawPie(35, 35, 70, e.xitieshiTime / 1e4 * 360 - 90, 270, "#ffffff")) : this.citie.graphics.clear()) : this.downcitie.visible = !1, 
                        e.SuperArmorTime > 0 ? (this.SuperArmor.visible = !0, A.instance.CrazyMode ? e.SuperArmorTime < 15e3 ? (this.SuperArmorcitie.graphics.clear(), 
                        this.SuperArmorcitie.graphics.drawPie(35, 35, 70, e.SuperArmorTime / 15e3 * 360 - 90, 270, "#ffffff")) : this.SuperArmorcitie.graphics.clear() : e.SuperArmorTime < 5e3 ? (this.SuperArmorcitie.graphics.clear(), 
                        this.SuperArmorcitie.graphics.drawPie(35, 35, 70, e.SuperArmorTime / 5e3 * 360 - 90, 270, "#ffffff")) : this.SuperArmorcitie.graphics.clear()) : this.SuperArmor.visible = !1, 
                        this.count++;
                    }
                }
            }
        }, {
            key: "showending",
            value: function() {
                var t = this;
                Laya.timer.once(500, this, function() {
                    3 == t.endingnum ? t.ending.text = "正在结算中." : 2 == t.endingnum ? t.ending.text = "正在结算中.." : 1 == t.endingnum ? t.ending.text = "正在结算中..." : t.ending.text = "正在结算中", 
                    t.endingnum--, t.endingnum > 0 && t.showending();
                });
            }
        }, {
            key: "getmaskindex",
            value: function(t) {
                for (var e = 3, i = 0; i < this.teamscoreArray.length; i++) this.teamscoreArray[i].num == t && (e = i);
                return e;
            }
        }, {
            key: "showwarranks",
            value: function(t, e, i) {
                0 == t ? (this.bluescore.text = e + "", this.bluemask.width = e / GD.playgameconfig.Summation * 148, 
                this.blue.y = 20.5 + 30 * i) : 2 == t ? (this.greenscore.text = e + "", this.greenmask.width = e / GD.playgameconfig.Summation * 148, 
                this.green.y = 20.5 + 30 * i) : 6 == t ? (this.redscore.text = e + "", this.redmask.width = e / GD.playgameconfig.Summation * 148, 
                this.red.y = 20.5 + 30 * i) : 7 == t && (this.yellowscore.text = e + "", this.yellowmask.width = e / GD.playgameconfig.Summation * 148, 
                this.yellow.y = 20.5 + 30 * i);
            }
        }, {
            key: "eatBeans",
            value: function() {
                var t = Date.now(), e = A.getInstance();
                for (this.aidiantce = [], this.brickDir = []; Date.now() - t < this.maxT; ) {
                    if (this.bean = A.instance.Beans[this.curIndex], !this.playgame) return;
                    if (!this.bean) {
                        this.curIndex = 0;
                        break;
                    }
                    if (this.curIndex++, !this.bean.moveroot && this.bean.root) {
                        if (null == this.bean.position) break;
                        if (!i.instance.play) break;
                        e.haveshow(this.bean.position) ? this.bean.root.active = !0 : this.bean.root.active = !1;
                        for (var a = 0; a < this.playspos.length; a++) this.bean.moveroot || (0 != a || i.instance.play.die ? i.instance.playspos[a] && (this.distant = MyMath.pDistance(this.bean.position.x, this.bean.position.z, i.instance.playspos[a].x, i.instance.playspos[a].z), 
                        i.instance.AIboxs[a] && (i.instance.AIboxs[a].turnangel || i.instance.AIboxs[a].target || (this.aidiantce[a] ? this.aidiantce[a] > this.distant && (this.aidiantce[a] = this.distant, 
                        this.brickDir[a] = this.bean.position.clone()) : this.aidiantce[a] = this.distant)), 
                        this.distant < i.instance.playdistant[a] + .2 && i.instance.AIboxs[a] && (i.instance.AIboxs[a].die || (this.bean.moveroot = !0, 
                        i.instance.AIboxs[a].movetoroot(this.bean, this.bean.level)))) : e.showdistent(i.instance.playspos[a], i.instance.playdistant[a] + .2, this.bean.position) && (this.bean.moveroot = !0, 
                        i.instance.play.movetoroot(this.bean, this.bean.level)));
                    }
                }
                for (var n = 0; n < this.brickDir.length; n++) i.instance.AIboxs[n] && (i.instance.AIboxs[n].turnangel || i.instance.AIboxs[n].target || this.brickDir[n] && (i.instance.AIboxs[n].target = !0, 
                i.instance.AIboxs[n].brickDir = this.brickDir[n].clone()));
            }
        }, {
            key: "onMouseUp",
            value: function() {
                this.m_TouchBegan && (this.m_EndPoint.x = 0, this.m_EndPoint.y = 0, this.m_StartPoint.x = 0, 
                this.m_StartPoint.y = 0, this.setGamepadControlPosition(this.m_EndPoint.x, this.m_EndPoint.y)), 
                this.m_TouchBegan = !1;
            }
        } ]), i;
    }(g.scene.GameSceneUI), T = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).delayTime = 0, t.minScale = 0, 
            t.startscaleX = 1, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.monkeyBox = this, this.startscaleX = this.scaleX, this.monkeyBox.frameOnce(2, this, this.onLoaded);
            }
        }, {
            key: "owner",
            set: function(t) {
                this.monkeyBox = t, this.monkeyBox.frameOnce(2, this, this.onLoaded);
            }
        }, {
            key: "onLoaded",
            value: function() {
                this.on(Laya.Event.MOUSE_DOWN, this, this.scaleSmall), this.on(Laya.Event.MOUSE_UP, this, this.scaleBig), 
                this.on(Laya.Event.MOUSE_OUT, this, this.scaleBig);
            }
        }, {
            key: "scaleSmall",
            value: function() {
                Laya.Tween.to(this, {
                    scaleX: .8 * this.startscaleX,
                    scaleY: .8 * this.startscaleX
                }, 200);
            }
        }, {
            key: "scaleBig",
            value: function() {
                Laya.Tween.to(this, {
                    scaleX: this.startscaleX,
                    scaleY: this.startscaleX
                }, 200);
            }
        } ]), i;
    }(Laya.Image), P = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).progressValue = 0, t.subProgressValue = 0, 
            t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                var t = this;
                this.width = Laya.stage.width, this.height = Laya.stage.height, this.background.width = Laya.stage.width, 
                this.background.height = Laya.stage.height, this.progressBar.value = 0, this.setProgressBar(), 
                this.startTimer(), G.init(function() {
                    G.login(function() {
                        GA.AdTracking.reportKeyAction(GA.AdTracking.Action.Active), L.instance.getRobots(30), 
                        GA.getNavigationList(100, 20, []).then(function(t) {
                            G.iconskin = t[MyMath.rand(0, t.length - 1)].icon;
                        }).catch(function(t) {
                            console.warn(t);
                        }), t.loadNewGameConfig(function() {
                            G.loadSubpackage("subPack", function() {
                                GA.Info.shareFailTips = [ "该群已经分享过了,请换个群", "分享失败,请分享至大于30人的群", "分享失败,请分享到其它群" ], 
                                t.progressValue = .99, t.setProgressBar(), L.instance.initSprite3Ds(), new Laya.Templet().loadAni("gamepad/skeleton/Rewardinvite/skeleton.sk"), 
                                t.startGame(), GA.AdTracking.reportKeyAction(GA.AdTracking.Action.Register), G.isWeChat() && !GA.Info.isPreview && Laya.loader.load([ "res/atlas/rank.atlas" ], Laya.Handler.create(t, function() {
                                    Laya.MiniAdpter.sendAtlasToOpenDataContext("res/atlas/rank.atlas");
                                }));
                            });
                        });
                    });
                });
            }
        }, {
            key: "startTimer",
            value: function() {
                var t = this;
                Laya.timer.loop(30, this, function() {
                    t.progressValue += .004, t.progressValue > .99 && (t.progressValue = .99), t.setProgressBar();
                });
            }
        }, {
            key: "setProgressBar",
            value: function() {
                var t = this.progressValue;
                this.progressBar.value > t && (t = this.progressBar.value), this.progressBar.value = t, 
                this.progressBarLabel.text = Math.floor(100 * t) + "%";
            }
        }, {
            key: "startGame",
            value: function() {
                Laya.timer.clearAll(this), Laya.Scene.close("scene/LoadScene.scene"), Laya.Scene.open("scene/indexView.scene"), 
                (G.isOPPO() || G.isVivo()) && GameData.isNewPlayer && m.showView("PrivacyTipView");
            }
        }, {
            key: "onDestroy",
            value: function() {
                console.log("LoadUI onDestroy"), this.clearRes("bin/load");
            }
        }, {
            key: "loadNewGameConfig",
            value: function(t) {
                GA.request({
                    url: G.requestUrl + "extra/getNewConfigs",
                    data: [],
                    success: function(e) {
                        200 == e.statusCode && (GD.initData(e), console.log("res======getnewconfig", e), 
                        t && t());
                    }
                });
            }
        }, {
            key: "clearRes",
            value: function(t) {
                Object.keys(Laya.Loader.loadedMap).forEach(function(e) {
                    if (e.indexOf(t) >= 0) {
                        var i = Laya.loader.getRes(e);
                        i && (i.destroy && i.destroy(), Laya.loader.clearRes(e));
                    }
                });
            }
        } ]), i;
    }(g.scene.LoadSceneUI), R = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.call(this)).useing = null, t.ofskin = null, t.lock = null, 
            t.cut = null, t.cutchild = null, t.have = null, t.pricenum = null, t.call = null, 
            t.pro = null, t.level = null, t.overflow = null, t.start1 = null, t.start2 = null, 
            t.start3 = null, t.start4 = null, t.start5 = null, t.level_up = null, t.newskin = null, 
            t.tryskin = null, t.index = 0, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.have = this.getChildByName("have"), this.useing = this.getChildByName("useing"), 
                this.ofskin = this.getChildByName("ofskin"), this.lock = this.getChildByName("lock"), 
                this.start1 = this.getChildByName("star1"), this.start2 = this.getChildByName("star2"), 
                this.start3 = this.getChildByName("star3"), this.start4 = this.getChildByName("star4"), 
                this.start5 = this.getChildByName("star5"), this.cut = this.getChildByName("cut"), 
                this.cutchild = this.cut.getChildAt(0), this.level = this.getChildByName("level"), 
                this.call = this.getChildByName("call"), this.pro = this.getChildByName("pro"), 
                this.pricenum = this.getChildByName("pricenum"), this.overflow = this.getChildByName("overflow"), 
                this.level_up = this.getChildByName("level_up"), this.tryskin = this.getChildByName("tryskin"), 
                this.newskin = this.getChildByName("newskin"), this.parseComplete("uplevel", this.level_up, 0, 0);
            }
        }, {
            key: "parseComplete",
            value: function(t, e, i, a) {
                var n = new Laya.Templet();
                n.on(Laya.Event.COMPLETE, this, function() {
                    var t = n.buildArmature(0);
                    t.pos(e.width / 2 - i, e.height - a), e.addChild(t), t.play(0, !0), t.player.on(Laya.Event.STOPPED, null, function() {
                        console.log("STOPPED");
                    });
                }), n.loadAni("gamepad/skeleton/" + t + "/skeleton.sk");
            }
        }, {
            key: "showlevel",
            value: function(t) {
                var e = !1, i = 0, a = GD.skinconfig[t].Additional - 1;
                switch (null == GameData.skinlevel[GD.skinconfig[t].skinnum] && (GameData.skinlevel[GD.skinconfig[t].skinnum] = 0), 
                GameData.skinlevel[GD.skinconfig[t].skinnum]) {
                  case 0:
                    this.level.text = "等级1", i = GD.snakePrice[a].level2;
                    break;

                  case 1:
                    this.level.text = "等级2", i = GD.snakePrice[a].level3;
                    break;

                  case 2:
                    this.level.text = "等级3", i = GD.snakePrice[a].level4;
                    break;

                  case 3:
                    this.level.text = "等级3", i = GD.snakePrice[a].level5;
                    break;

                  case 4:
                    this.level.text = "等级5", i = GD.snakePrice[a].level6;
                    break;

                  case 5:
                    this.level.text = "等级6", i = GD.snakePrice[a].level7;
                    break;

                  case 6:
                    this.level.text = "等级7", i = GD.snakePrice[a].level8;
                    break;

                  case 7:
                    this.level.text = "等级8", i = GD.snakePrice[a].level9;
                    break;

                  case 8:
                    this.level.text = "等级9", i = GD.snakePrice[a].level10;
                    break;

                  default:
                    GameData.skinlevel[GD.skinconfig[t].skinnum] > 9 ? (GameData.skinlevel[GD.skinconfig[t].skinnum] = 0, 
                    this.level.text = "等级1", i = GD.snakePrice[a].level2) : (this.level.text = "等级10", 
                    e = !0);
                }
                if (e) this.overflow.visible = !0, this.pricenum.text = "MAX"; else if (5 == this.array.type) {
                    var n = GameData.detailNum[GD.skinconfig[this.index].id];
                    i <= n ? (C.instance.skin_up.visible = !0, this.overflow.visible = !0, this.level_up.visible = !0) : (this.level_up.visible = !1, 
                    this.overflow.visible = !1, this.pro.value = n / i), this.pricenum.text = n + "/" + i;
                } else 9 == this.array.type ? (this.level_up.visible = !1, this.overflow.visible = !1, 
                this.pro.value = 0, this.pricenum.text = "0/" + i) : (i <= GameData.Diamonds ? (C.instance.skin_up.visible = !0, 
                this.overflow.visible = !0, this.level_up.visible = !0) : (this.level_up.visible = !1, 
                this.overflow.visible = !1, this.pro.value = GameData.Diamonds / i), this.pricenum.text = GameData.Diamonds + "/" + i);
            }
        }, {
            key: "updateItem",
            value: function(t, e) {
                t > GD.skinconfig.length ? this.visible = !1 : (this.array = e, this.index = t, 
                this.pricenum.centerX = 0, this.pro.value = 0, this.pro.visible = !0, this.cut.visible = !0, 
                this.overflow.visible = !1, this.useing.visible = !0, this.call.text = e.name, -1 != GameData.unlockskin.indexOf(GD.skinconfig[this.index].skinnum) ? (this.lock.visible = !1, 
                this.pro.visible = !0, this.cut.visible = !0, this.pricenum.color = "#ffffff", 5 != e.type ? this.cutchild.skin = "gamepad/index/Diamonds.png" : this.cutchild.skin = "gamepad/index/shop/fragments.png", 
                this.showlevel(t)) : (this.lock.visible = !0, this.level_up.visible = !1, this.level.text = "未解锁", 
                3 == e.type ? (this.cutchild.skin = "gamepad/index/Diamonds.png", this.pricenum.text = GameData.Diamonds + "/" + e.price, 
                this.pro.value = GameData.Diamonds / e.price, e.price <= GameData.Diamonds && (this.overflow.visible = !0)) : 4 == e.type ? (this.cutchild.skin = "gamepad/index/coin.png", 
                this.pricenum.text = e.price, this.pro.value = GameData.golds / e.price) : 1 == e.type ? (this.pricenum.color = "#000000", 
                this.pro.visible = !1, this.cut.visible = !1, this.pricenum.text = "视频解锁", this.overflow.visible = !1) : 2 == e.type ? (this.pricenum.color = "#000000", 
                this.pro.visible = !1, this.cut.visible = !1, this.pricenum.text = "分享解锁") : 6 == e.type ? (this.pricenum.color = "#000000", 
                this.pro.visible = !1, this.cut.visible = !1, this.pricenum.text = "签到解锁") : 9 == e.type ? (this.pricenum.color = "#000000", 
                this.pro.visible = !1, this.cut.visible = !1, this.pricenum.text = "邀请解锁", this.overflow.visible = !1) : (null == GameData.detailNum[GD.skinconfig[this.index].id] && (GameData.detailNum[GD.skinconfig[this.index].id] = 0), 
                GameData.detailNum[GD.skinconfig[this.index].id] > e.price && (this.overflow.visible = !0), 
                this.pro.value = GameData.detailNum[GD.skinconfig[this.index].id] / e.price, this.pro.visible = !0, 
                this.cutchild.skin = "gamepad/index/shop/fragment.png", this.pricenum.text = "碎片解锁", 
                this.pricenum.color = "#ffffff")), this.start1.visible = !1, this.start2.visible = !1, 
                this.start3.visible = !1, this.start4.visible = !1, this.start5.visible = !1, GameData.useskin == e.skinnum ? (A.instance.tryskin ? (this.lock.visible = !1, 
                this.tryskin.visible = !0) : this.tryskin.visible = !1, this.useing.visible = !0) : (this.tryskin.visible = !1, 
                this.useing.visible = !1), this.ofskin.skin = "gamepad/index/shop/ofskin/" + e.skin, 
                0 == GameData.newSkin_SantaClaus && 23 == GD.skinconfig[this.index].skinnum || 0 == GameData.newSkin_ChristmasTree && 24 == GD.skinconfig[this.index].skinnum ? this.newskin.visible = !0 : this.newskin.visible = !1, 
                this.on(Laya.Event.CLICK, this, this.onClick));
            }
        }, {
            key: "onClick",
            value: function(t) {
                t.stopPropagation(), d.getInstance().playbtn(), 0 == GameData.newSkin_SantaClaus && 23 == GD.skinconfig[this.index].skinnum ? GameData.newSkin_SantaClaus = 1 : 0 == GameData.newSkin_ChristmasTree && 24 == GD.skinconfig[this.index].skinnum && (GameData.newSkin_ChristmasTree = 1), 
                p.instance.showdetail(this.index);
            }
        } ]), i;
    }(Laya.Box), N = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).fragments = [ 19, 20, 21, 22, 26, 27, 28, 29, 30, 31, 32, 34 ], 
            t.ordinarytype = 0, t.unlock = !1, t.index = 0, t.havevideo = !1, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.ordinary = this.getChildByName("ordinary"), this.ordinary_select = this.ordinary.getChildByName("select"), 
                this.ordinary_reward = this.ordinary.getChildByName("reward"), this.ordinary_rewardnum = this.ordinary.getChildByName("rewardnum"), 
                this.ordinary_receive = this.getChildByName("ordinary_receive"), this.speed = this.getChildByName("speed"), 
                this.down = this.getChildByName("down"), this.senior = this.getChildByName("senior"), 
                this.senior_reward = this.senior.getChildByName("reward"), this.senior_rewardnum = this.senior.getChildByName("rewardnum"), 
                this.senior_select = this.senior.getChildByName("select"), this.senior_video = this.senior.getChildByName("video"), 
                this.send = this.senior.getChildByName("send"), this.senior_receive = this.getChildByName("senior_receive");
            }
        }, {
            key: "updateItem",
            value: function(t, e) {
                if (this.havevideo = e, t > GD.champion.length - 1) this.visible = !1; else if (null != this.ordinary_receive) {
                    this.index = t, this.ordinary_receive.visible = !1, this.senior_receive.visible = !1, 
                    this.updateroad();
                    var i = GD.champion[t];
                    2 == i.ordinarytype ? (this.ordinary_reward.skin = "gamepad/index/knapsack/" + this.fragments[GD.champion[t].ordinaryid - 1] + ".png", 
                    this.ordinary_rewardnum.text = "碎片x" + i.ordinarynum) : 0 == i.ordinarytype && (0 == i.ordinaryid ? (this.ordinary_reward.skin = "gamepad/ChampionRoad/coin.png", 
                    this.ordinary_rewardnum.text = "金币x" + i.ordinarynum) : (this.ordinary_reward.skin = "gamepad/ChampionRoad/dimonds.png", 
                    this.ordinary_rewardnum.text = "钻石x" + i.ordinarynum)), 2 == i.seniortype ? (this.senior_reward.skin = "gamepad/index/knapsack/" + this.fragments[GD.champion[t].seniorid - 1] + ".png", 
                    this.senior_rewardnum.text = "碎片x" + i.seniornum) : 0 == i.seniortype && (0 == i.seniorid ? (this.senior_reward.skin = "gamepad/ChampionRoad/coin.png", 
                    this.senior_rewardnum.text = "金币x" + i.seniornum) : (this.senior_reward.skin = "gamepad/ChampionRoad/dimonds.png", 
                    this.senior_rewardnum.text = "钻石x" + i.seniornum)), this.havevideo ? this.senior_video.skin = "gamepad/ChampionRoad/video.png" : this.senior_video.skin = "gamepad/ChampionRoad/share.png", 
                    this.speed.text = i.num + "", this.ordinary.on(Laya.Event.CLICK, this, this.onClickordinary), 
                    this.senior.on(Laya.Event.CLICK, this, this.onClicksenior);
                }
            }
        }, {
            key: "onClicksenior",
            value: function() {
                var t = this;
                GameData.championrewardindex >= this.index + 1 ? 0 == GameData.championrewardarray[this.index + 1] || 1 == GameData.championrewardarray[this.index + 1] ? G.rewardOperation("冠军之路视频获得", this.havevideo, function() {
                    var e = new Laya.Vector2(225 * t.index + 275, 436), i = GD.champion[t.index];
                    2 == i.seniortype ? (null == GameData.detailNum[t.fragments[i.ordinaryid - 1]] && (GameData.detailNum[t.fragments[i.ordinaryid - 1]] = 0), 
                    GameData.detailNum[t.fragments[i.ordinaryid - 1]] += i.seniornum, G.showToast("恭喜获得碎片x" + i.seniornum), 
                    A.instance.addfragments(e, t.fragments[GD.champion[i.ordinaryid - 1].seniorid - 1])) : 0 == i.seniortype && (0 == i.seniorid ? (GameData.golds += i.seniornum, 
                    G.showToast("恭喜获得金币x" + i.seniornum), A.instance.addcoin(e)) : (GameData.Diamonds += i.seniornum, 
                    G.showToast("恭喜获得钻石x" + i.seniornum), A.instance.adddimonds(e))), t.xiaochu(1);
                }) : G.showToast("该奖励已领取") : G.showToast("获得更多奖杯才能解锁该奖励");
            }
        }, {
            key: "xiaochu",
            value: function(t) {
                A.instance.showchampin--, A.instance.showchampin >= 0 ? C.instance.task_coins.getChildByName("red").visible = !0 : C.instance.task_coins.getChildByName("red").visible = !1, 
                null == GameData.championrewardarray[this.index + 1] && (GameData.championrewardarray[this.index + 1] = 0), 
                0 == GameData.championrewardarray[this.index + 1] ? GameData.championrewardarray[this.index + 1] = 0 == t ? 1 : 2 : (1 == GameData.championrewardarray[this.index + 1] || 2 == GameData.championrewardarray[this.index + 1]) && (GameData.championrewardarray[this.index + 1] = 3), 
                this.updateroad(), Laya.timer.once(1e3, this, function() {
                    GameData.upload(), C.instance.updateCoin();
                });
            }
        }, {
            key: "updateroad",
            value: function() {
                GameData.championrewardindex >= this.index + 1 ? (this.down.skin = "gamepad/ChampionRoad/up.png", 
                this.speed.color = "#a43200", this.speed.strokeColor = "#a43200", this.unlock = !0, 
                null == GameData.championrewardarray[this.index + 1] && (GameData.championrewardarray[this.index + 1] = 0), 
                0 == GameData.championrewardarray[this.index + 1] ? (this.ordinary_select.visible = !0, 
                this.senior_select.visible = !0, this.ordinary_rewardnum.color = "#a43200", this.senior_rewardnum.color = "#a43200", 
                this.ordinary_receive.visible = !1, this.senior_receive.visible = !1, A.instance.showchampin++) : 1 == GameData.championrewardarray[this.index + 1] ? (this.ordinary_select.visible = !1, 
                this.senior_select.visible = !0, this.ordinary_rewardnum.color = "#40689b", this.senior_rewardnum.color = "#a43200", 
                this.senior_receive.visible = !1, this.ordinary_receive.visible = !0, A.instance.showchampin++) : 2 == GameData.championrewardarray[this.index + 1] ? (this.ordinary_select.visible = !0, 
                this.senior_select.visible = !1, this.ordinary_rewardnum.color = "#a43200", this.senior_rewardnum.color = "#40689b", 
                this.senior_receive.visible = !0, this.ordinary_receive.visible = !1, A.instance.showchampin++) : (this.ordinary_select.visible = !1, 
                this.senior_select.visible = !1, this.ordinary_rewardnum.color = "#40689b", this.senior_rewardnum.color = "#40689b", 
                this.senior_receive.visible = !0, this.ordinary_receive.visible = !0), A.instance.showchampin >= 0 ? C.instance.task_coins.getChildByName("red").visible = !0 : C.instance.task_coins.getChildByName("red").visible = !1) : (this.down.skin = "gamepad/ChampionRoad/down.png", 
                this.ordinary_select.visible = !1, this.senior_select.visible = !1, this.senior_receive.visible = !1, 
                this.ordinary_receive.visible = !1, this.ordinary_rewardnum.color = "#40689b", this.senior_rewardnum.color = "#40689b");
            }
        }, {
            key: "onClickordinary",
            value: function() {
                if (GameData.championrewardindex >= this.index + 1) if (0 == GameData.championrewardarray[this.index + 1] || 2 == GameData.championrewardarray[this.index + 1]) {
                    var t = GD.champion[this.index], e = new Laya.Vector2(225 * this.index + 275, 220);
                    2 == t.ordinarytype ? (null == GameData.detailNum[this.fragments[t.ordinaryid - 1]] && (GameData.detailNum[this.fragments[t.ordinaryid - 1]] = 0), 
                    GameData.detailNum[this.fragments[t.ordinaryid - 1]] += t.ordinarynum, A.instance.addfragments(e, this.fragments[GD.champion[t.ordinaryid - 1].seniorid - 1]), 
                    G.showToast("恭喜获得碎片x" + t.ordinarynum)) : 0 == t.ordinarytype && (0 == t.ordinaryid ? (GameData.golds += t.ordinarynum, 
                    G.showToast("恭喜获得金币x" + t.ordinarynum), A.instance.addcoin(e)) : (GameData.Diamonds += t.ordinarynum, 
                    G.showToast("恭喜获得钻石x" + t.ordinarynum), A.instance.adddimonds(e))), this.xiaochu(0);
                } else G.showToast("该奖励已领取"); else G.showToast("获得更多奖杯才能解锁该奖励");
            }
        } ]), i;
    }(Laya.Box), E = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).getreward = 0, t.index = 0, t.array = [], 
            t.day = 0, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.reward = this.getChildByName("reward"), this.rewardnum = this.reward.getChildByName("rewardnum"), 
                this.type = this.reward.getChildByName("type"), this.title = this.getChildByName("title"), 
                this.rate = this.getChildByName("rate"), this.getbtn = this.getChildByName("getbtn"), 
                this.getbtn.on(Laya.Event.CLICK, this, this.onClick);
            }
        }, {
            key: "updateItem",
            value: function(t, e) {
                this.index = e, this.day = t;
                var i = GD.timelimitedreward[t].task[e];
                this.array = i;
                var a = i[0] - 1, n = i[1], s = "", o = i[2];
                0 == o ? 0 == i[3] ? this.type.skin = "gamepad/index/have_coins.png" : this.type.skin = "gamepad/index/have_Diamonds.png" : 2 == o ? this.type.skin = "gamepad/index/knapsack/" + GD.fragmentconfig[i[3] - 1].id + ".png" : 3 == o && (1 == i[3] ? this.type.skin = "gamepad/time/tiantian.png" : this.type.skin = "gamepad/time/tiger.png"), 
                this.rewardnum.text = i[4] + "";
                var r = GameData.flashSale[a];
                switch (a) {
                  case 0:
                    s = "参与" + n + "次无尽模式";
                    break;

                  case 1:
                    s = "参与" + n + "次限时模式";
                    break;

                  case 2:
                    s = "参与" + n + "次团战模式";
                    break;

                  case 3:
                    s = "团战模式获胜" + n + "次";
                    break;

                  case 4:
                    s = "击败" + n + "名玩家";
                    break;

                  case 5:
                    s = "观看" + n + "次视频";
                    break;

                  case 6:
                    s = "收集" + n + "个饺子";
                    break;

                  case 7:
                    s = "收集" + n + "个汤圆";
                }
                this.title.text = s, this.rate.text = r > n ? n + "/" + n : r + "/" + n, this.getreward = 0, 
                n <= r ? 2 == GameData.todaytask[e] ? (this.getreward = 2, this.getbtn.skin = "gamepad/time/reward.png") : (GameData.todaytask[e] = 1, 
                this.getreward = 1, this.getbtn.skin = "gamepad/time/get.png") : this.getbtn.skin = "gamepad/time/to.png";
            }
        }, {
            key: "onClick",
            value: function(t) {
                d.getInstance().playbtn();
                var e = this.array[0] - 1;
                if (1 == this.getreward) {
                    var i = this.array[2], a = this.array[3];
                    2 == i ? m.showtimegetrewardView(3, this.array[4], GD.fragmentconfig[a - 1].id) : 0 == i ? 0 == a ? m.showtimegetrewardView(0, this.array[4]) : m.showtimegetrewardView(1, this.array[4]) : 3 == i && (1 == this.array[3] ? m.showtimegetrewardView(4, this.array[4]) : m.showtimegetrewardView(5, this.array[4])), 
                    GameData.todaytask[this.index] = 2, G.pushEvents([ {
                        eventId: "限时活动普通奖励",
                        detail: {
                            day: this.day + "_" + this.index
                        }
                    } ]), D.instance.changearray();
                } else if (0 == this.getreward) switch (D.instance.onhide(), e) {
                  case 0:
                    C.instance.onendlessGame();
                    break;

                  case 1:
                    C.instance.onTimeLimitgame();
                    break;

                  case 2:
                  case 3:
                    C.instance.onwar();
                    break;

                  case 5:
                    G.hideCustomAdByTag("one"), Math.random() > .5 ? C.instance.onDiamonds() : C.instance.onCoins();
                    break;

                  case 6:
                  case 7:
                    C.instance.onendlessGame();
                }
            }
        } ]), i;
    }(Laya.Box), V = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).getreward = 0, t.array = [], t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.nored = this.getChildByName("nored"), this.num = this.getChildByName("num"), 
                this.red = this.getChildByName("red");
            }
        }, {
            key: "updateItem",
            value: function(t, e) {
                t % 5 == 0 ? (this.red.visible = !1, this.num.visible = !0, this.nored.visible = !1, 
                this.num.text = t / 5 + "") : 5 * GameData.flashSaleday >= t || t <= 5 * GameData.flashSaleday + e ? (this.red.visible = !0, 
                this.num.visible = !1, this.nored.visible = !1) : (this.red.visible = !1, this.num.visible = !1, 
                this.nored.visible = !0);
            }
        } ]), i;
    }(Laya.Box), O = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).getreward = 0, t.index = 0, t.array = [], 
            t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.btn = this.getChildByName("btn"), this.rewardnum = this.btn.getChildByName("rewardnum"), 
                this.wancheng = this.getChildAt(1), this.type = this.btn.getChildByName("type"), 
                this.have = this.btn.getChildAt(1), this.pao = this.btn.getChildAt(0), this.btn.on(Laya.Event.CLICK, this, this.onClick);
            }
        }, {
            key: "updateItem",
            value: function(t) {
                this.index = t, this.array = GD.timelimitedreward[t].reward;
                var e = GD.timelimitedreward[t].reward[0], i = GD.timelimitedreward[t].reward[1], a = GD.timelimitedreward[t].reward[2];
                this.rewardnum.text = a + "", 0 == e ? this.type.skin = 0 == i ? "gamepad/index/have_coins.png" : "gamepad/index/have_Diamonds.png" : 2 == e ? this.type.skin = "gamepad/index/knapsack/" + GD.fragmentconfig[i - 1].id + ".png" : 3 == e && (this.type.skin = 1 == i ? "gamepad/time/tiantian.png" : "gamepad/time/tiger.png"), 
                this.btn.alpha = 1, Laya.Tween.clearAll(this.pao), this.wancheng.visible = !1, 1 == GameData.ActivityCompletion[t] ? (this.getreward = 1, 
                this.have.visible = !0, this.playani()) : 0 == GameData.ActivityCompletion[t] ? (this.getreward = 0, 
                this.have.visible = !1) : 2 == GameData.ActivityCompletion[t] && (this.getreward = 2, 
                this.have.visible = !1, this.btn.alpha = .5, this.wancheng.visible = !0);
            }
        }, {
            key: "playani",
            value: function() {
                var t = this;
                Laya.Tween.to(this.pao, {
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 1e3, null, new Laya.Handler(this, function() {
                    Laya.Tween.to(t.pao, {
                        scaleX: 1,
                        scaleY: 1
                    }, 1e3, null, new Laya.Handler(t, function() {
                        t.playani();
                    }));
                }));
            }
        }, {
            key: "onClick",
            value: function(t) {
                if (d.getInstance().playbtn(), 1 == this.getreward) {
                    var e = this.array[0], i = this.array[1];
                    2 == e ? m.showtimegetrewardView(3, this.array[2], GD.fragmentconfig[i - 1].id) : 0 == e ? 0 == i ? m.showtimegetrewardView(0, this.array[2]) : m.showtimegetrewardView(1, this.array[2]) : 3 == e && (1 == this.array[1] ? m.showtimegetrewardView(4, this.array[2]) : m.showtimegetrewardView(5, this.array[2])), 
                    G.pushEvents([ {
                        eventId: "限时活动最终奖励",
                        detail: {
                            day: this.index
                        }
                    } ]), GameData.ActivityCompletion[this.index] = 2, D.instance.changearray();
                } else this.index > GameData.flashSaleday ? 0 == this.getreward && G.showToast("活动未开始，请明天再来") : this.index == GameData.flashSaleday && 0 == this.getreward && G.showToast("完成今日所有任务后领取");
            }
        } ]), i;
    }(Laya.Box), F = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).type = 0, t.info = null, t;
        }
        return o(i, [ {
            key: "updateItem",
            value: function(t, e, i, a) {
                this.pageName = i;
                var n = this.getChildByName("ad").getChildByName("adImg");
                n && (this.game_button = n, n.on(Laya.Event.CLICK, this, this.onClick)), this.info = t, 
                this.type = e, t && t.icon && "" != t.icon && this.game_button && (this.game_button.skin = t.icon);
                var s = this.getChildByName("red"), o = A.getInstance().drawarray.indexOf(a);
                if (-1 != o) {
                    s.visible = !0;
                    var r;
                    r = 0 == GD.playgameconfig.moregame ? 3 : 5, s.skin = o >= r ? "gamepad/lock/9.png" : "gamepad/lock/10.png";
                } else s.visible = !1;
            }
        }, {
            key: "onClick",
            value: function(t) {
                t.stopPropagation();
                var e = this.type;
                G.navigateToMiniProgram(e, this.info, this.pageName);
            }
        } ]), i;
    }(Laya.Box), z = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).root = null, t.share = null, t.backhome = null, 
            t.bg_box = null, t.fraction = null, t.beat_num = null, t.again = null, t.againBubble = null, 
            t.next = null, t.times = null, t.ranking = null, t.coin = null, t.dimonds = null, 
            t.titlereward = null, t.differlong = null, t.rewardnum = null, t.longtitle = null, 
            t.box = null, t.ys = null, t.closeys = null, t.stargame = null, t.content = null, 
            t.rewardcoin = 0, t.rewarddimonds = 0, t.TimeLimitReceive = 0, t.endlessnumReceive = 0, 
            t.CrazynumReceive = 0, t.startime = 500, t.endani = !1, t.tohomeNumber = 0, r.instance = i(t), 
            t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                window.showEnd();
                this.width = Laya.stage.width, this.height = Laya.stage.height, this.root = this.resultView, 
                this.root.width = Laya.stage.width, this.root.height = Laya.stage.height, this.content = this.root.getChildByName("content"), 
                this.content.pos(this.root.width / 2, this.root.height / 2), this.warcontent = this.root.getChildByName("warcontent"), 
                this.warcontent.pos(this.root.width / 2, this.root.height / 2), this.box = this.content.getChildByName("box"), 
                this.ranks = this.warcontent.getChildByName("ranks"), this.trophy = this.warcontent.getChildByName("trophy"), 
                this.trophyadd = this.warcontent.getChildByName("trophyadd"), this.trophybg = this.warcontent.getChildByName("trophybg"), 
                this.trophynum = this.trophybg.getChildByName("trophynum"), this.Segment = this.warcontent.getChildByName("Segment"), 
                this.Segmenttitle = this.Segment.getChildByName("Segmenttitle"), this.starnums = this.warcontent.getChildByName("starnums"), 
                this.star1 = this.warcontent.getChildByName("star1"), this.star2 = this.warcontent.getChildByName("star2"), 
                this.star3 = this.warcontent.getChildByName("star3"), this.star4 = this.warcontent.getChildByName("star4"), 
                this.star5 = this.warcontent.getChildByName("star5"), this.TeamRanking = this.warcontent.getChildByName("TeamRanking"), 
                this.myRanking = this.warcontent.getChildByName("myRanking"), this.devote = this.warcontent.getChildByName("devote"), 
                this.mvp = this.warcontent.getChildByName("mvp"), this.wardimonds = this.warcontent.getChildByName("wardimonds"), 
                this.warcoin = this.warcontent.getChildByName("warcoin"), this.wartitle = this.warcontent.getChildByName("wartitle"), 
                this.nextwar = this.warcontent.getChildByName("nextwar"), this.backhome = this.root.getChildByName("backhome"), 
                this.bg_box = this.warcontent.getChildByName("bg_box"), this.bg_box.width = Laya.stage.width, 
                this.again = this.content.getChildByName("again"), this.againBubble = this.again.getChildByName("againBubble"), 
                this.againBubble.anchorX = .5, this.againBubble.anchorY = .5, this.againBubble.x = 213, 
                this.againBubble.y = -11, this.stargame = this.content.getChildByName("stargame"), 
                this.fraction = this.box.getChildByName("fraction"), this.beat_num = this.box.getChildByName("beat_num"), 
                this.ranking = this.box.getChildByName("ranking"), this.times = this.box.getChildByName("times"), 
                this.longtitle = this.box.getChildByName("longtitle"), this.next = this.content.getChildByName("next"), 
                this.nextwar.fontSize = 28, this.next.fontSize = 28, this.coin = this.box.getChildByName("coin"), 
                this.dimonds = this.box.getChildByName("dimonds"), this.titlereward = this.box.getChildByName("titlereward"), 
                this.differlong = this.titlereward.getChildByName("differlong"), this.rewardnum = this.titlereward.getChildByName("rewardnum"), 
                this.share = this.titlereward.getChildByName("share"), this.ys = this.root.getChildByName("ys"), 
                this.closeys = this.ys.getChildByName("closeys"), this.again.on(Laya.Event.CLICK, this, this.playVideoAgain), 
                this.backhome.on(Laya.Event.CLICK, this, this.onhide), this.resultView.on(Laya.Event.CLICK, this, this.onhideresultView), 
                this.share.on(Laya.Event.CLICK, this, this.onshare), this.closeys.on(Laya.Event.CLICK, this, this.oncloseys), 
                this.ys.on(Laya.Event.CLICK, this, this.clickAD), this.stargame.on(Laya.Event.CLICK, this, this.playagain), 
                this.ys.centerX = 353, TimeLine.tween(this.againBubble).to(1e3, {
                    scaleX: 1.2,
                    scaleY: 1.2
                }).to(1e3, {
                    scaleX: 1,
                    scaleY: 1
                }).delay(1e3).start(!0), G.isOPPO() && (this.share.visible = !1, this.nextwar.fontSize = 30, 
                this.next.fontSize = 30), this.onshow();
            }
        }, {
            key: "oncloseys",
            value: function(t) {
                t.stopPropagation(), this.ys.visible = !1, this.again.centerX = 0, this.stargame.visible = !1;
            }
        }, {
            key: "clickAD",
            value: function() {
                var t = this;
                G.pushEvent("用户点击1比1oppo原生广告"), G.nativeAdReportAdClick(), G.nativeAdRefresh(Laya.Handler.create(this, function(e) {
                    e && (t.ys.skin = e);
                }));
            }
        }, {
            key: "onshare",
            value: function() {
                G.isOPPO() ? this.clickAD() : G.rewardOperation("结算分享", !1, function() {
                    G.showToast("分享成功");
                });
            }
        }, {
            key: "playVideoAgain",
            value: function() {
                this.againBubble.visible ? GA.isNextRewardVideo("结算页长度+500") ? G.rewardOperation("结算页长度+500", GA.haveRewardVideo(), function() {
                    G.isWeChat() && !GA.Info.isPreview && G.closeBannerWithTimes(1), G.pushEvent("结算再玩一次"), 
                    m.hideLRADList(), G.hideCustomAdByTag("top-left"), A.getInstance().resultLonger = !0, 
                    d.getInstance().playbtn(), Laya.Scene.close("scene/resultView.scene"), Laya.Scene.open("scene/indexView.scene", !1), 
                    A.instance.TimeLimit ? C.instance.onTimeLimitgame() : A.instance.CrazyMode ? C.instance.onnewcrazy() : C.instance.onendlessGame(), 
                    A.instance.showAddCoinmj1(5, GameData.maxTodyVideo);
                }) : G.rewardOperation("结算页长度+500", !1, function() {
                    G.isWeChat() && !GA.Info.isPreview && G.closeBannerWithTimes(1), G.pushEvent("结算再玩一次"), 
                    m.hideLRADList(), G.hideCustomAdByTag("top-left"), A.getInstance().resultLonger = !0, 
                    d.getInstance().playbtn(), Laya.Scene.close("scene/resultView.scene"), Laya.Scene.open("scene/indexView.scene", !1), 
                    A.instance.TimeLimit ? C.instance.onTimeLimitgame() : A.instance.CrazyMode ? C.instance.onnewcrazy() : C.instance.onendlessGame(), 
                    A.instance.showAddCoinmj1(5, GameData.maxTodyVideo);
                }) : this.playagain();
            }
        }, {
            key: "playagain",
            value: function() {
                G.isWeChat() && !GA.Info.isPreview && G.closeBannerWithTimes(1), G.pushEvent("结算再玩一次"), 
                m.hideLRADList(), G.hideCustomAdByTag("top-left"), d.getInstance().playbtn(), Laya.Scene.close("scene/resultView.scene"), 
                Laya.Scene.open("scene/indexView.scene", !1), this.root.visible = !1, A.instance.TimeLimit ? C.instance.onTimeLimitgame() : A.instance.CrazyMode ? C.instance.onnewcrazy() : C.instance.onendlessGame();
            }
        }, {
            key: "onshow",
            value: function() {
                var t = this;
                d.getInstance().switch && (GA.Info.isPreview || Laya.SoundManager.playMusic(h.SubPkgUrl + "audio/bgm_world.mp3", 0)), 
                this.rewardcoin = 0, this.rewarddimonds = 0, this.TimeLimitReceive = 0, this.endlessnumReceive = 0, 
                this.CrazynumReceive = 0, G.pushEvents([ {
                    eventId: "GameEnd"
                }, {
                    eventId: "GameFailed",
                    detail: {
                        gameTime: Math.round(A.instance.survivalTime / 1e3)
                    }
                } ]), A.getInstance().addlonger = !1, A.getInstance().resultLonger = !1, m.hideScrollGameList();
                var e = G.getNativeAdImgUrl();
                if (G.isOPPO() && e ? (this.ys.skin = e, this.ys.visible = !0, this.ys.centerX = 353, 
                GD.stateClick(A.instance.gameTime) && Laya.timer.once(1500, this, function() {
                    t.clickAD(), GameData.dayAudoClickADCount++, GameData.upload();
                })) : this.ys.visible = !1, A.instance.RegimentWar) this.content.visible = !1, this.star5.visible = !1, 
                this.star4.visible = !1, this.star3.visible = !1, this.star2.visible = !1, this.star1.visible = !1, 
                this.warcontent.visible = !0, this.backhome.visible = !1, GameData.useskin = GameData.olduseskin, 
                G.isOPPO() && e && this.ys.visible ? (this.warcontent.pos(this.root.width / 2 - 140, this.root.height / 2), 
                this.bg_box.centerX = 140, this.warcontent.getChildAt(1).centerX = 170, this.nextwar.centerX = 140) : (this.bg_box.centerX = 0, 
                this.warcontent.getChildAt(1).centerX = 30, this.nextwar.centerX = 0), this.showwarani(); else {
                    G.isOPPO() && e && this.ys.visible ? (this.box.x = 100, this.ys.centerX = 245) : this.box.x = 235, 
                    A.instance.tryskin && (GameData.trayskin[GameData.useskin] = !1, GameData.useskin == A.instance.oldskin ? GameData.useskin = 1 : GameData.useskin = A.instance.oldskin, 
                    A.instance.tryskin = !1), this.content.visible = !0, this.warcontent.visible = !1, 
                    this.fraction.text = A.instance.score + "", this.beat_num.text = A.instance.mustAI + "", 
                    A.instance.mustAI > 0 && A.instance.showtimetask(4), this.times.text = A.instance.GetTime(A.instance.existencetime), 
                    this.ranking.text = A.instance.ranking + "";
                    var i = 0, a = 0, n = 0, s = 0, o = 0;
                    if (A.instance.dumpling && (A.instance.dumpling = !1, A.instance.showtimetask(6)), 
                    A.instance.tangyuan && (A.instance.tangyuan = !1, A.instance.showtimetask(7)), A.instance.TimeLimit) {
                        this.again.centerX = 0, this.againBubble.visible = !1, this.stargame.visible = !1, 
                        A.instance.showtimetask(1), GameData.TimeLimitscore += A.instance.score, i = GameData.TimeLimitscore;
                        for (var r = 0; r < GD.timereward.length; r++) i > GD.timereward[r].speed && r + 1 > GameData.TimeLimitReceive ? (this.TimeLimitReceive = r + 1, 
                        0 == GD.timereward[r].type ? this.rewardcoin += GD.timereward[r].num : this.rewarddimonds += GD.timereward[r].num) : i < GD.timereward[r].speed && 0 == n && (n = GD.timereward[r].speed, 
                        a = GD.timereward[r].speed - i, 0 == GD.timereward[r].type ? s = GD.timereward[r].num : o = GD.timereward[r].num);
                    } else if (A.instance.CrazyMode) {
                        this.again.centerX = 0, this.againBubble.visible = !1, this.stargame.visible = !1, 
                        GameData.Crazyscore += A.instance.score, i = GameData.Crazyscore;
                        for (var l = 0; l < GD.endlessreward.length; l++) i > GD.endlessreward[l].speed && l + 1 > GameData.CrazynumReceive ? (this.CrazynumReceive = l + 1, 
                        0 == GD.endlessreward[l].type ? this.rewardcoin += GD.endlessreward[l].num : this.rewarddimonds += GD.endlessreward[l].num) : i < GD.endlessreward[l].speed && 0 == n && (n = GD.endlessreward[l].speed, 
                        a = GD.endlessreward[l].speed - i, 0 == GD.timereward[l].type ? s = GD.timereward[l].num : o = GD.timereward[l].num);
                    } else {
                        A.instance.showtimetask(2), A.instance.mustAI > 0 && A.instance.showtimetask(4), 
                        GameData.endlessscore += A.instance.score, i = GameData.endlessscore;
                        for (var c = 0; c < GD.endlessreward.length; c++) i > GD.endlessreward[c].speed && c + 1 > GameData.endlessnumReceive ? (this.endlessnumReceive = c + 1, 
                        0 == GD.endlessreward[c].type ? this.rewardcoin += 2 * GD.endlessreward[c].num : this.rewarddimonds += 2 * GD.endlessreward[c].num) : i < GD.endlessreward[c].speed && 0 == n && (n = GD.endlessreward[c].speed, 
                        a = GD.endlessreward[c].speed - i, 0 == GD.timereward[c].type ? s = 2 * GD.timereward[c].num : o = 2 * GD.timereward[c].num);
                    }
                    this.titlereward.x = 209, this.longtitle.text = 0 == n ? "累计长度达到：" + i + "  （每天00：00重置）" : "累计长度达到：" + i + "/" + n + "  （每天00：00重置）";
                    for (var u = 0, g = a; g >= 1; ) g /= 10, u++;
                    this.differlong.width = 10 * u + 10, this.titlereward.width = 10 * u + 190, 2 == u && (this.titlereward.width = 210), 
                    this.differlong.text = a + "", 0 == s && 0 == o && (this.titlereward.visible = !1), 
                    0 == o ? this.rewardnum.text = "金币*" + s : 0 == s ? this.rewardnum.text = "钻石*" + o : 0 != o && 0 != s ? this.rewardnum.text = "钻石*" + o + "、金币*" + s : this.titlereward.visible = !1, 
                    this.coin.visible = !0, this.dimonds.visible = !0, this.coin.getChildAt(0).text = this.rewardcoin + "", 
                    this.dimonds.getChildAt(0).text = this.rewarddimonds + "", 0 == this.rewardcoin ? 0 != this.rewarddimonds ? (this.dimonds.x = 31, 
                    this.titlereward.x = 109, this.coin.visible = !1) : (this.titlereward.x = 109, this.dimonds.visible = !1) : (this.coin.visible = !0, 
                    this.dimonds.x = 125, this.titlereward.x = 209, 0 == this.rewarddimonds ? (this.titlereward.x = 109, 
                    this.dimonds.visible = !1) : this.dimonds.visible = !0), 0 == this.rewardcoin && 0 == this.rewarddimonds ? (s > 0 ? (this.coin.visible = !0, 
                    this.coin.getChildAt(0).text = s + "") : this.coin.visible = !1, o > 0 ? (this.dimonds.visible = !0, 
                    this.dimonds.getChildAt(0).text = o + "", 0 == s ? (this.dimonds.x = 31, this.titlereward.x = 109) : (this.titlereward.x = 209, 
                    this.dimonds.x = 125)) : (this.dimonds.visible = !1, this.titlereward.x = 109), 
                    G.isWeChat() && (this.againBubble.visible = !0, GA.isNextRewardVideo("结算页长度+500") && GA.haveRewardVideo() ? this.again.skin = "gamepad/result/again_video.png" : this.again.skin = "gamepad/result/again_share.png", 
                    this.again.centerX = 0, this.stargame.visible = !1, Laya.timer.once(1e3 * GD.playgameconfig.endlatetime, this, function() {
                        t.again.centerX = 130, t.stargame.visible = !0;
                    })), this.next.visible = !1, this.again.visible = !0, G.isOPPO() && (this.againBubble.visible = !1, 
                    this.stargame.visible = !0, this.stargame.skin = "gamepad/result/setAD.png", this.stargame.width = 233, 
                    this.stargame.height = 86, e && this.ys.visible ? this.again.centerX = 130 : (this.stargame.visible = !1, 
                    this.again.centerX = 0))) : (this.backhome.visible = !1, this.next.visible = !0, 
                    this.stargame.visible = !1, this.again.visible = !1);
                }
                GameData.upmaxTodymust && (A.instance.showAddCoinmj1(2, GameData.maxTodymust), GameData.upmaxTodymust = !1), 
                GameData.upmaxTodylength && (GameData.upmaxTodylength = !1, A.instance.showAddCoinmj1(1, GameData.maxTodylength)), 
                GameData.upmaxTodyeatStarts && (GameData.upmaxTodyeatStarts = !1, A.instance.showAddCoinmj1(3, GameData.maxTodyeatStarts)), 
                GameData.upendlessnum && (A.instance.showAddCoinmj1(0, GameData.endlessnum), GameData.upendlessnum = !1), 
                GameData.upload(), G.isWeChat() && !GA.Info.isPreview && (m.showLRADList(), G.showCustomAdByTag("top-left"), 
                G.closeBannerWithTimes(3), GA.PA.triggerGC());
            }
        }, {
            key: "showmaxran",
            value: function(t) {
                var e = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.star1.getChildAt(0).visible = !1, this.star2.getChildAt(0).visible = !1, this.star3.getChildAt(0).visible = !1, 
                this.star4.getChildAt(0).visible = !1, this.star5.getChildAt(0).visible = !1, this.star5.visible = !0, 
                this.star4.visible = !1, this.star3.visible = !1, this.star2.visible = !1, this.star1.visible = !1, 
                this.starnums.text = "x" + t, this.star5.x = 740, Laya.timer.once(this.startime, this, function() {
                    e.starnums.visible = !0, e.addstarani(e.star5), i >= 0 ? e.starnums.text = "x" + (t + i) : t + i < 0 ? (e.star5.visible = !0, 
                    e.star4.visible = !0, e.star3.visible = !0, e.star2.visible = !0, e.star1.visible = !0, 
                    e.star5.x = 600, e.star4.x = 635, e.star3.x = 670, e.star2.x = 705, e.star1.x = 740, 
                    e.star1.getChildAt(0).visible = !0, e.star2.getChildAt(0).visible = !0, e.star3.getChildAt(0).visible = !0, 
                    e.star4.getChildAt(0).visible = !0, e.star5.getChildAt(0).visible = !0, Laya.timer.once(e.startime, e, function() {
                        e.star1.getChildAt(0).visible = !1;
                    })) : e.starnums.text = "x" + (t + i);
                });
            }
        }, {
            key: "showstar",
            value: function(t, e) {
                var i = this, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                Laya.timer.once(this.startime, this, function() {
                    i.star1.getChildAt(0).visible = !1, i.star2.getChildAt(0).visible = !1, i.star3.getChildAt(0).visible = !1, 
                    i.star4.getChildAt(0).visible = !1, i.star5.getChildAt(0).visible = !1, 3 == t ? (i.star5.visible = !0, 
                    i.star4.visible = !0, i.star3.visible = !0, i.star5.x = 670, i.star4.x = 705, i.star3.x = 740) : (i.star5.visible = !0, 
                    i.star4.visible = !0, i.star3.visible = !0, i.star2.visible = !0, i.star1.visible = !0, 
                    i.star5.x = 600, i.star4.x = 635, i.star3.x = 670, i.star2.x = 705, i.star1.x = 740), 
                    0 == e ? 1 == a ? i.addstarani(i.star5) : 2 == a ? (i.addstarani(i.star5), Laya.timer.once(i.startime, i, function() {
                        i.addstarani(i.star4);
                    })) : -1 == a && (i.star1.getChildAt(0).visible = !0, i.star2.getChildAt(0).visible = !0, 
                    i.star3.getChildAt(0).visible = !0, i.star4.getChildAt(0).visible = !0, i.star5.getChildAt(0).visible = !0, 
                    Laya.timer.once(i.startime, i, function() {
                        i.star1.getChildAt(0).visible = !1;
                    })) : 1 == e ? 1 == a ? (i.addstarani(i.star4), i.star5.getChildAt(0).visible = !0) : 2 == a ? (i.addstarani(i.star4), 
                    i.star5.getChildAt(0).visible = !0, Laya.timer.once(i.startime, i, function() {
                        i.addstarani(i.star3);
                    })) : 0 == a && (i.star5.getChildAt(0).visible = !0) : 2 == e ? 1 == a ? (i.addstarani(i.star3), 
                    i.star4.getChildAt(0).visible = !0, i.star5.getChildAt(0).visible = !0) : 2 == a ? (5 == t && (i.star4.getChildAt(0).visible = !0, 
                    i.star5.getChildAt(0).visible = !0), i.addstarani(i.star3), Laya.timer.once(i.startime, i, function() {
                        5 == t ? i.addstarani(i.star2) : 5 == GD.levelconfig[GameData.Segment].levelnum ? i.showstar(5, 0, 1) : 3 == GD.levelconfig[GameData.Segment].levelnum && i.showstar(3, 0, 1);
                    })) : 0 == a ? (i.star4.getChildAt(0).visible = !0, i.star5.getChildAt(0).visible = !0) : -1 == a && (i.star5.getChildAt(0).visible = !0) : 3 == e ? 1 == a ? (i.star3.getChildAt(0).visible = !0, 
                    i.star4.getChildAt(0).visible = !0, i.star5.getChildAt(0).visible = !0, 3 == t ? (i.addstarani(i.star4), 
                    Laya.timer.once(i.startime, i, function() {
                        3 == GD.levelconfig[GameData.Segment].levelnum ? i.showstar(3, 0, 1) : 5 == GD.levelconfig[GameData.Segment].levelnum && i.showstar(5, 0, 1);
                    })) : i.addstarani(i.star2)) : 2 == a ? (i.star3.getChildAt(0).visible = !0, i.star4.getChildAt(0).visible = !0, 
                    i.star5.getChildAt(0).visible = !0, i.addstarani(i.star2), Laya.timer.once(i.startime, i, function() {
                        i.addstarani(i.star1);
                    }), 3 == t && Laya.timer.once(i.startime, i, function() {
                        3 == GD.levelconfig[GameData.Segment].levelnum ? i.showstar(3, 0, 2) : 5 == GD.levelconfig[GameData.Segment].levelnum && i.showstar(5, 0, 2);
                    })) : 0 == a ? (i.star3.getChildAt(0).visible = !0, i.star4.getChildAt(0).visible = !0, 
                    i.star5.getChildAt(0).visible = !0) : -1 == a ? (i.star4.getChildAt(0).visible = !0, 
                    i.star5.getChildAt(0).visible = !0) : -2 == a && (i.star4.getChildAt(0).visible = !0, 
                    Laya.timer.once(i.startime, i, function() {
                        i.star4.getChildAt(0).visible = !1;
                    }), i.star5.getChildAt(0).visible = !0) : 4 == e ? 1 == a ? (i.star2.getChildAt(0).visible = !0, 
                    i.star3.getChildAt(0).visible = !0, i.star4.getChildAt(0).visible = !0, i.star5.getChildAt(0).visible = !0, 
                    i.addstarani(i.star1)) : 2 == a ? (i.addstarani(i.star1), i.star2.getChildAt(0).visible = !0, 
                    i.star3.getChildAt(0).visible = !0, i.star4.getChildAt(0).visible = !0, i.star5.getChildAt(0).visible = !0, 
                    Laya.timer.once(i.startime, i, function() {
                        5 == GD.levelconfig[GameData.Segment].levelnum ? i.showstar(5, 0, 1) : (i.starnums.visible = !0, 
                        i.star5.visible = !0, i.star4.visible = !1, i.star3.visible = !1, i.star2.visible = !1, 
                        i.star1.visible = !1, i.starnums.text = "x" + GameData.minSegment, i.star5.x = 740, 
                        i.addstarani(i.star5));
                    })) : 0 == a ? (i.star2.getChildAt(0).visible = !0, i.star3.getChildAt(0).visible = !0, 
                    i.star4.getChildAt(0).visible = !0, i.star5.getChildAt(0).visible = !0) : -1 == a ? (i.star3.getChildAt(0).visible = !0, 
                    i.star4.getChildAt(0).visible = !0, i.star5.getChildAt(0).visible = !0) : -2 == a && (i.star3.getChildAt(0).visible = !0, 
                    Laya.timer.once(i.startime, i, function() {
                        i.star3.getChildAt(0).visible = !1;
                    }), i.star4.getChildAt(0).visible = !0, i.star5.getChildAt(0).visible = !0) : 1 == a ? Laya.timer.once(i.startime, i, function() {
                        5 == GD.levelconfig[GameData.Segment].levelnum ? i.showstar(5, 0, 1) : (i.starnums.visible = !0, 
                        i.star5.visible = !0, i.star4.visible = !1, i.star3.visible = !1, i.star2.visible = !1, 
                        i.star1.visible = !1, i.starnums.text = "x" + GameData.minSegment, i.star5.x = 740, 
                        i.addstarani(i.star5));
                    }) : 2 == a ? Laya.timer.once(i.startime, i, function() {
                        5 == GD.levelconfig[GameData.Segment].levelnum ? i.showstar(5, 0, 2) : (i.starnums.visible = !0, 
                        i.star5.visible = !0, i.star4.visible = !1, i.star3.visible = !1, i.star2.visible = !1, 
                        i.star1.visible = !1, i.starnums.text = "x" + GameData.minSegment, i.star5.x = 740, 
                        i.addstarani(i.star5));
                    }) : 0 == a ? (i.star1.getChildAt(0).visible = !0, i.star2.getChildAt(0).visible = !0, 
                    i.star3.getChildAt(0).visible = !0, i.star4.getChildAt(0).visible = !0, i.star5.getChildAt(0).visible = !0) : -1 == a ? (i.star2.getChildAt(0).visible = !0, 
                    i.star3.getChildAt(0).visible = !0, i.star4.getChildAt(0).visible = !0, i.star5.getChildAt(0).visible = !0) : -2 == a && (i.star2.getChildAt(0).visible = !0, 
                    Laya.timer.once(i.startime, i, function() {
                        i.star2.getChildAt(0).visible = !1;
                    }), i.star3.getChildAt(0).visible = !0, i.star4.getChildAt(0).visible = !0, i.star5.getChildAt(0).visible = !0);
                });
            }
        }, {
            key: "showwarani",
            value: function() {
                var t = this;
                this.trophybg.x = 459, this.trophy.x = 397.5, this.trophyadd.x = 459, this.trophyadd.alpha = 1, 
                this.wartitle.alpha = 0, this.Segment.visible = !1, this.star1.visible = !1, this.star2.visible = !1, 
                this.star3.visible = !1, this.star4.visible = !1, this.star5.visible = !1, this.starnums.visible = !1, 
                this.warcoin.visible = !1, this.wardimonds.visible = !1, this.TeamRanking.alpha = 0, 
                this.myRanking.alpha = 0, this.mvp.alpha = 0, this.devote.alpha = 0, this.nextwar.alpha = 0, 
                this.trophynum.text = GameData.championscore + "";
                var e = GameData.Segment, i = 0, a = 0;
                A.instance.showtimetask(2), 1 == A.instance.warranks ? (GameData.flashSale[3]++, 
                A.instance.showtimetask(3), this.ranks.skin = "gamepad/result/war/first.png", i = e + 1 + 20, 
                this.trophyadd.text = "+" + (e + 20), a = 2, this.rewardcoin = 50, this.rewarddimonds = 10, 
                this.TeamRanking.text = "1") : 2 == A.instance.warranks ? (this.ranks.skin = "gamepad/result/war/second.png", 
                i = e + 1, this.trophyadd.text = "+" + e, a = 1, this.rewardcoin = 20, this.rewarddimonds = 5, 
                this.TeamRanking.text = "2") : 3 == A.instance.warranks ? (this.ranks.skin = "gamepad/result/war/third.png", 
                this.trophyadd.text = "+0", this.rewardcoin = 10, this.TeamRanking.text = "3") : (this.ranks.skin = "gamepad/result/war/fourth.png", 
                this.TeamRanking.text = "4", GameData.championscore - e <= 0 ? (this.trophyadd.text = "-" + GameData.championscore, 
                i = -GameData.championscore) : (this.trophyadd.text = "-" + (e + 1 + 20), i = -(e + 1 + 20)), 
                GameData.Segment > 1 && (a = -1), this.rewardcoin = 5), G.pushEvents([ {
                    eventId: "团战模式用时",
                    detail: {
                        gameTime: Math.round(A.instance.survivalTime / 1e3)
                    }
                } ]), this.ranks.x = 438, this.trophyadd.visible = !1, Laya.timer.once(this.startime, this, function() {
                    t.trophyadd.visible = !0, GameData.championscore += i, t.trophynum.text = GameData.championscore + "", 
                    Laya.Tween.to(t.trophyadd, {
                        x: 222
                    }, t.startime), Laya.Tween.to(t.ranks, {
                        x: 201
                    }, t.startime), Laya.Tween.to(t.trophy, {
                        x: 160
                    }, t.startime), Laya.Tween.to(t.trophybg, {
                        x: 222
                    }, t.startime, null, new Laya.Handler(t, function() {
                        t.Segment.skin = "gamepad/result/war/" + GD.levelconfig[GameData.Segment].icon + ".png", 
                        t.Segmenttitle.text = "  " + GD.levelconfig[GameData.Segment].levelname, t.Segment.visible = !0, 
                        3 == GD.levelconfig[GameData.Segment].levelnum ? t.showstar(3, GameData.minSegment) : 5 == GD.levelconfig[GameData.Segment].levelnum ? t.showstar(5, GameData.minSegment) : (t.starnums.visible = !0, 
                        t.star5.visible = !0, t.starnums.text = "x" + GameData.minSegment, t.star5.x = 740, 
                        t.star5.getChildAt(0).visible = !0), console.log("GameData.minSegment====未增加前的星星===>", GameData.minSegment), 
                        Laya.timer.once(t.startime, t, function() {
                            GameData.minSegment >= 0 && !(0 == GameData.minSegment && a < 0) ? GameData.Segment < 39 ? GameData.minSegment + a > GD.levelconfig[GameData.Segment].levelnum ? (3 == GD.levelconfig[GameData.Segment].levelnum ? t.showstar(3, GameData.minSegment, a) : 5 == GD.levelconfig[GameData.Segment].levelnum && t.showstar(5, GameData.minSegment, a), 
                            GameData.Segment++, GameData.minSegment = GameData.minSegment + a, GameData.minSegment = GameData.minSegment - GD.levelconfig[GameData.Segment].levelnum, 
                            console.log("GameData.minSegment====升级后的星星===>", GameData.minSegment), Laya.timer.once(t.startime, t, function() {
                                t.Segment.skin = "gamepad/result/war/" + GD.levelconfig[GameData.Segment].icon + ".png", 
                                t.Segmenttitle.text = "  " + GD.levelconfig[GameData.Segment].levelname, t.showrankingani(e);
                            })) : (3 == GD.levelconfig[GameData.Segment].levelnum ? t.showstar(3, GameData.minSegment, a) : 5 == GD.levelconfig[GameData.Segment].levelnum && t.showstar(5, GameData.minSegment, a), 
                            GameData.minSegment = GameData.minSegment + a, t.showrankingani(e)) : (t.showmaxran(GameData.minSegment, a), 
                            GameData.minSegment = GameData.minSegment + a, GameData.minSegment < 0 && (GameData.Segment--, 
                            GameData.minSegment = GameData.minSegment + GD.levelconfig[GameData.Segment].levelnum, 
                            t.showstar(5, GameData.minSegment)), Laya.timer.once(t.startime, t, function() {
                                t.Segment.skin = "gamepad/result/war/" + GD.levelconfig[GameData.Segment].icon + ".png", 
                                t.Segmenttitle.text = "  " + GD.levelconfig[GameData.Segment].levelname, t.showrankingani(e);
                            })) : (3 == GD.levelconfig[GameData.Segment].levelnum ? t.showstar(3, GameData.minSegment, -1) : 5 == GD.levelconfig[GameData.Segment].levelnum && t.showstar(5, GameData.minSegment, -1), 
                            GameData.minSegment = GameData.minSegment + a, GameData.Segment--, GameData.minSegment = GameData.minSegment + GD.levelconfig[GameData.Segment].levelnum, 
                            console.log("GameData.minSegment====掉段后的星星===>", GameData.minSegment), Laya.timer.once(t.startime, t, function() {
                                3 == GD.levelconfig[GameData.Segment].levelnum ? t.showstar(3, GameData.minSegment) : 5 == GD.levelconfig[GameData.Segment].levelnum && t.showstar(5, GameData.minSegment), 
                                t.Segment.skin = "gamepad/result/war/" + GD.levelconfig[GameData.Segment].icon + ".png", 
                                t.Segmenttitle.text = "  " + GD.levelconfig[GameData.Segment].levelname, t.showrankingani(e);
                            }));
                        });
                    }));
                });
            }
        }, {
            key: "showrankingani",
            value: function(t) {
                var e = this;
                Laya.timer.once(this.startime, this, function() {
                    e.endani = !0, e.warcoin.visible = !0, e.wardimonds.visible = !0, 0 == e.rewarddimonds && (e.wardimonds.visible = !1), 
                    1 == A.instance.ranking ? (e.mvp.visible = !0, e.rewardcoin = t + 20 + e.rewardcoin) : e.mvp.visible = !1, 
                    0 == e.rewarddimonds && 0 != e.rewardcoin ? e.warcoin.x = 697 : e.warcoin.x = 600, 
                    e.warcoin.getChildAt(0).text = e.rewardcoin + "", e.wardimonds.getChildAt(0).text = e.rewarddimonds + "", 
                    e.myRanking.text = A.instance.ranking + "", e.devote.text = A.instance.warcontribution, 
                    Laya.Tween.to(e.wartitle, {
                        alpha: 1
                    }, e.startime), Laya.Tween.to(e.TeamRanking, {
                        alpha: 1
                    }, e.startime), Laya.Tween.to(e.myRanking, {
                        alpha: 1
                    }, e.startime), Laya.Tween.to(e.mvp, {
                        alpha: 1
                    }, e.startime), Laya.Tween.to(e.devote, {
                        alpha: 1
                    }, e.startime), Laya.Tween.to(e.nextwar, {
                        alpha: 1
                    }, e.startime);
                }), G.pushEvents([ {
                    eventId: "段位",
                    detail: {
                        Segment: GameData.Segment
                    }
                } ]);
            }
        }, {
            key: "showcoinani",
            value: function() {
                this.warcoin.scaleX = 0, this.wardimonds.scaleX = 0, Laya.Tween.to(this.warcoin, {
                    scaleX: 1
                }, this.startime), Laya.Tween.to(this.wardimonds, {
                    scaleX: 1
                }, this.startime);
            }
        }, {
            key: "addstarani",
            value: function(t) {
                var e = t.getChildAt(0);
                e.visible = !0, e.x = -40, e.y = -80, Laya.Tween.to(e, {
                    x: 13,
                    y: 13
                }, 500);
            }
        }, {
            key: "onhideresultView",
            value: function() {
                A.instance.RegimentWar ? this.endani && this.onhide() : this.next.visible && this.onhide();
            }
        }, {
            key: "onhide",
            value: function() {
                if (G.isWeChat() && !GA.Info.isPreview && (G.closeBannerWithTimes(1), m.hideLRADList(), 
                G.hideCustomAdByTag("top-left")), A.instance.setFriends(), 0 != this.TimeLimitReceive ? GameData.TimeLimitReceive = this.TimeLimitReceive : 0 != this.endlessnumReceive ? GameData.endlessnumReceive = this.endlessnumReceive : 0 != this.CrazynumReceive && (GameData.CrazynumReceive = this.CrazynumReceive), 
                d.getInstance().playbtn(), Laya.Scene.close("scene/resultView.scene"), Laya.Scene.open("scene/indexView.scene", !1), 
                0 != this.rewardcoin ? 0 != this.rewarddimonds ? m.showgetRewardView(2, this.rewardcoin, this.rewarddimonds) : m.showgetRewardView(0, this.rewardcoin) : 0 != this.rewarddimonds && m.showgetRewardView(1, this.rewarddimonds), 
                (G.isOPPO() || G.isVivo()) && 0 != GD.OPPORogueConfig.tohomefreq && !GA.Info.underCheck) {
                    this.tohomeNumber++;
                    var t = this.tohomeNumber % (2 * GD.OPPORogueConfig.tohomefreq + 2);
                    1 == t ? (G.isVivo() && G.showInterstitialAd(), OppoADM.showGamePortalAd()) : t == 2 + GD.OPPORogueConfig.tohomefreq && OppoADM.addDes();
                }
                this.root.visible = !1;
            }
        } ]), r;
    }(g.scene.resultViewUI);
    z.instance = null;
    var W = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).leftBtnX = 100, t.rightBtnX = 385, 
            t.centerBtnX = 242, t.showBanner = !1, t.lastGetItemTime = 15, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                var t = this;
                this.width = Laya.stage.width, this.height = Laya.stage.height, this.bg = this.getChildByName("bg"), 
                this.closeBtn = this.getChildByName("closeBtn"), this.centerSpan = this.getChildByName("centerSpan"), 
                this.bg && (this.bg.width = Laya.stage.width, this.bg.height = Laya.stage.height, 
                this.bg.alpha = .8), this.closeBtn && (G.isOPPO() || G.isVivo() || GA.isOppoAndroid() ? this.closeBtn.y = Laya.stage.height - 450 : this.closeBtn.y = Laya.stage.height - 270, 
                this.closeBtn.clickHandler = Laya.Handler.create(this, function() {
                    t.hide();
                })), this.centerSpan && (G.isOPPO() || G.isVivo() || GA.isOppoAndroid() ? this.centerSpan.y = (Laya.stage.height - 450) / 2 : this.centerSpan.y = Laya.stage.height / 2);
            }
        }, {
            key: "hide",
            value: function() {
                this.removeSelf(), this.destroy(), G.isWeChat() && GA.hideBanner();
            }
        }, {
            key: "show",
            value: function() {}
        }, {
            key: "hideOppoAD",
            value: function() {
                this.lookAdBtn.visible = !1, this.getItemBtn && (this.getItemBtn.x = this.centerBtnX);
            }
        }, {
            key: "onGetItemTimeOnve",
            value: function() {}
        } ]), i;
    }(Laya.Sprite), U = function(i) {
        a(h, i);
        var r = n(h);
        function h() {
            return s(this, h), r.apply(this, arguments);
        }
        return o(h, [ {
            key: "onAwake",
            value: function() {
                var i = this;
                t(e(h.prototype), "onAwake", this).call(this), this.zOrder = 99999999999, this.closeGameBtn = this.centerSpan.getChildByName("closeGameBtn"), 
                this.toGameBtn = this.centerSpan.getChildByName("toGameBtn"), this.toPrivacyBtn = this.centerSpan.getChildByName("toPrivacyBtn"), 
                this.closeGameBtn.clickHandler = Laya.Handler.create(this, function() {
                    qg.exitApplication({});
                }), this.toGameBtn.clickHandler = Laya.Handler.create(this, function() {
                    i.hide();
                }), this.toPrivacyBtn.clickHandler = Laya.Handler.create(this, function() {
                    m.showView("PrivacyView");
                }, null, !1);
            }
        }, {
            key: "hide",
            value: function() {
                t(e(h.prototype), "hide", this).call(this), Util.clearRes("OPPOPrivacy");
            }
        } ]), h;
    }(W), X = function(i) {
        a(h, i);
        var r = n(h);
        function h() {
            return s(this, h), r.apply(this, arguments);
        }
        return o(h, [ {
            key: "onAwake",
            value: function() {
                var i = this;
                t(e(h.prototype), "onAwake", this).call(this), this.zOrder = 99999999999, this.mainPanel = this.getChildByName("mainPanel"), 
                this.closePageBtn = this.getChildByName("closePageBtn"), this.mainPanel.hScrollBarSkin = "", 
                this.mainPanel.vScrollBarSkin = "", this.mainPanel.y = G.offsetY, this.mainPanel.height = Laya.stage.height - G.offsetY, 
                this.closePageBtn.clickHandler = Laya.Handler.create(this, function() {
                    i.hide();
                });
            }
        }, {
            key: "hide",
            value: function() {
                this.destroy();
            }
        } ]), h;
    }(W), j = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).type = 261, t.data = [], t.scrolltime = 0, 
            t.moveDistance = 0, t.direction = 0, t.moveTime = 0, t.moving = !1, t.m_TouchBegan = !1, 
            t.lastScrollBarValue = 0, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.y = Laya.stage.height - 200, this.zOrder = 99, this.x = (Laya.stage.width - 1280) / 2;
                var t = this.getChildByName("ListView");
                t && (this.m_list = t, this.m_list.repeatX = Math.ceil(this.m_list.width / this.m_list.height)), 
                this.loadData();
            }
        }, {
            key: "showWithType",
            value: function(t) {
                this.type = t, this.loadData();
            }
        }, {
            key: "show",
            value: function() {
                this.visible = !0;
            }
        }, {
            key: "hide",
            value: function() {
                this.visible = !1;
            }
        }, {
            key: "loadData",
            value: function() {
                var t = this;
                GA.getNavigationList(this.type, 20, []).then(function(e) {
                    t.data = e, t.updateWithData();
                }).catch(function(t) {
                    console.warn(t);
                });
            }
        }, {
            key: "updateWithData",
            value: function() {
                if (this.m_list && !this.destroyed) {
                    this.m_list.selectEnable = !0, this.m_list.hScrollBarSkin = "", this.m_list.renderHandler = new Laya.Handler(this, this.updateItem), 
                    this.m_list.scrollBar.changeHandler = new Laya.Handler(this, this.onScrollBarChange), 
                    this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), 
                    this.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), this.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut1), 
                    this.m_list.array = this.data;
                    var t = this.m_list.scrollBar.max;
                    console.log(t), this.moveDistance = this.m_list.spaceX + this.m_list.getCell(0).width, 
                    this.data.length > this.m_list.repeatX && Laya.timer.frameLoop(1, this, this.update);
                }
            }
        }, {
            key: "onSelectIndex",
            value: function(t) {}
        }, {
            key: "updateItem",
            value: function(t, e) {
                t.updateItem(this.data[e], this.type, this.pageName);
            }
        }, {
            key: "update",
            value: function() {
                if (this.scrolltime += Laya.timer.delta, this.scrolltime >= 2e3) {
                    this.scrolltime = 0;
                    var t = this.m_list.scrollBar.value;
                    t < 1 ? this.direction = 1 : this.m_list.scrollBar.max - t < 1 && (this.direction = -1);
                    var e = this.direction * this.moveDistance + t;
                    e = Math.round(e / this.moveDistance) * this.moveDistance, Laya.timer.frameLoop(1, this, this.updatePos, [ e ]), 
                    this.moving = !0;
                }
            }
        }, {
            key: "updatePos",
            value: function(t) {
                if (this.moveTime += Laya.timer.delta, this.moveTime > 500) {
                    if (this.clearUpdatePos(), !this.m_TouchBegan) {
                        var e = this.m_list.scrollBar;
                        this.m_list.scrollBar.setScroll(e.min, e.max, t);
                    }
                } else if (!this.m_TouchBegan) {
                    var i = this.direction * this.moveDistance / 500 * Laya.timer.delta, a = this.m_list.scrollBar;
                    this.m_list.scrollBar.setScroll(a.min, a.max, a.value + i);
                }
            }
        }, {
            key: "clearUpdatePos",
            value: function() {
                this.moving && (this.moving = !1, this.moveTime = 0, Laya.timer.clear(this, this.updatePos));
            }
        }, {
            key: "onMouseDown",
            value: function(t) {
                t.stopPropagation(), this.scrolltime = 0, this.clearUpdatePos(), this.m_TouchBegan = !0;
            }
        }, {
            key: "onMouseMove",
            value: function() {
                this.scrolltime = 0, this.clearUpdatePos();
            }
        }, {
            key: "onMouseUp",
            value: function() {
                this.m_TouchBegan = !1;
            }
        }, {
            key: "onMouseOut1",
            value: function() {
                this.m_TouchBegan && (this.m_TouchBegan = !1);
            }
        }, {
            key: "onScrollBarChange",
            value: function(t) {
                t == this.lastScrollBarValue && this.m_list.scrollBar.stopScroll(), this.lastScrollBarValue = t;
            }
        } ]), i;
    }(W), H = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).type = 0, t.info = null, t;
        }
        return o(i, [ {
            key: "updateItem",
            value: function(t, e, i) {
                this.pageName = i;
                var a = this.getChildByName("gameButton");
                a && (this.game_button = a, a.clickHandler = new Laya.Handler(this, this.onClick)), 
                this.info = t, this.type = e, t && t.icon && "" != t.icon && this.game_button && (this.game_button.skin = t.icon);
            }
        }, {
            key: "onClick",
            value: function() {
                var t = this.type;
                G.navigateToMiniProgram(t, this.info, this.pageName);
            }
        } ]), i;
    }(Laya.Box), K = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).array = [], t.luckarray = [], t.weight = 0, 
            r.instance = i(t), t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.zOrder = 80, this.width = Laya.stage.width, this.height = Laya.stage.height, 
                this.bgbox = this.getChildByName("bgbox"), this.finger = this.bgbox.getChildByName("finger"), 
                this.listView = this.bgbox.getChildByName("listView"), this.invite = this.bgbox.getChildByName("invite"), 
                this.closebtn = this.bgbox.getChildByName("closebtn"), this.sharenum = this.bgbox.getChildByName("bolder").getChildByName("sharenum"), 
                this.listView.array = GD.invitationconfig, this.listView.renderHandler = new Laya.Handler(this, this.updateItem), 
                this.closebtn.on(Laya.Event.CLICK, this, this.onclosebtn), this.invite.on(Laya.Event.CLICK, this, this.onshare), 
                this.listView.vScrollBarSkin = "", this.listView.elasticEnabled = !0, this.listView.selectEnable = !0, 
                this.sharenum.text = "今日分享次数：" + GameData.sharenum, this.finger.visible = !0, this.playfinger(), 
                GD.InviteeList.length >= 1 && (this.finger.visible = !1);
            }
        }, {
            key: "playfinger",
            value: function() {
                var t = this;
                this.finger.visible && (this.finger.rotation = -10, Laya.Tween.to(this.finger, {
                    rotation: 10
                }, 400, null, new Laya.Handler(this, function() {
                    Laya.Tween.to(t.finger, {
                        rotation: -10
                    }, 800, null, new Laya.Handler(t, function() {
                        t.playfinger();
                    }));
                })));
            }
        }, {
            key: "onshare",
            value: function() {
                var t = this;
                d.getInstance().playbtn(), G.rewardOperation("邀请分享", !1, function() {
                    t.addsharereward(), G.showToast("分享成功");
                });
            }
        }, {
            key: "onclosebtn",
            value: function() {
                d.getInstance().playbtn(), this.hide();
            }
        }, {
            key: "addsharereward",
            value: function() {
                if (GameData.sharenum < 3) {
                    GameData.golds += 50;
                    var t = new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2 - 371 + 371 - 71);
                    A.instance.addcoin(t), C.instance.updateCoin();
                }
                this.finger.visible = !1, GameData.sharenum++, this.sharenum.text = "今日分享次数：" + GameData.sharenum, 
                GameData.upload();
            }
        }, {
            key: "updateItem",
            value: function(t, e) {
                t.updateItem(GD.invitationconfig[e], e);
            }
        }, {
            key: "show",
            value: function() {
                this.visible = !0, G.hideCustomAdByTag("one"), m.showLRADList(), G.showCustomAdByTag("top-left"), 
                A.getInstance().button && A.getInstance().button.hide(), A.instance.scene.active && c.instance.closethree();
            }
        }, {
            key: "hide",
            value: function() {
                A.getInstance().button && A.getInstance().button.show(), p.instance.root.visible || (G.showCustomAdByTag("one"), 
                c.instance.showthree()), m.hideLRADList(), G.hideCustomAdByTag("top-left"), this.visible = !1;
            }
        } ]), r;
    }(W), Y = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.call(this)).addreward = !0, t.Rewardinvite = null, t.share = !0, 
            t.index = -1, t.friendskin = [ "Skin_BDD", "Skin_Mammon", "Skin_Poker", "Skin_Farmer", "Skin_MengHu", "Skin_TweakCube", "Skin_SonGoku", "Skin_Spaceman", "Skin_Tiger" ], 
            t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.friend = this.getChildByName("friend"), this.rewardnum = this.getChildByName("rewardnum"), 
                this.num = this.getChildByName("num"), this.reward = this.getChildByName("reward"), 
                this.rewardmask = this.reward.getChildAt(0), this.rewardtrue = this.getChildByName("rewardtrue"), 
                this.rewardsk = this.getChildByName("rewardsk"), this.friend.width = 80, this.friend.height = 80, 
                this.friend.pos(346, 2), this.friend.on(Laya.Event.CLICK, this, this.onshare), this.on(Laya.Event.CLICK, this, this.onGetreward);
            }
        }, {
            key: "addRewardinvite",
            value: function() {
                var t = this;
                if (this.addreward || null == this.Rewardinvite) {
                    this.addreward = !1;
                    var e = new Laya.Templet();
                    e.on(Laya.Event.COMPLETE, this, function() {
                        t.Rewardinvite = e.buildArmature(0), t.Rewardinvite.pos(35, 35), t.rewardsk.addChild(t.Rewardinvite), 
                        t.Rewardinvite.zOrder = -1, t.Rewardinvite.play(0, !0), GameData.shareArray[t.index] ? 1 != GameData.shareArray[t.index] ? t.Rewardinvite.visible = !1 : t.Rewardinvite.visible = !0 : t.Rewardinvite.visible = !1, 
                        t.Rewardinvite.player.on(Laya.Event.STOPPED, null, function() {
                            console.log("STOPPED");
                        });
                    }), e.loadAni("gamepad/skeleton/Rewardinvite/skeleton.sk");
                } else GameData.shareArray[this.index] ? 1 != GameData.shareArray[this.index] ? this.Rewardinvite.visible = !1 : this.Rewardinvite.visible = !0 : this.Rewardinvite.visible = !1;
            }
        }, {
            key: "onshare",
            value: function() {
                this.share && (d.getInstance().playbtn(), G.rewardOperation("邀请分享", !1, function() {
                    K.instance.addsharereward(), G.showToast("分享成功");
                }));
            }
        }, {
            key: "onGetreward",
            value: function() {
                if (1 == GameData.shareArray[this.index]) {
                    d.getInstance().playbtn(), this.rewardmask.visible = !0, this.rewardtrue.visible = !0, 
                    G.pushEvents([ {
                        eventId: "邀请有礼奖励",
                        detail: {
                            skin: this.index
                        }
                    } ]);
                    var t = new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2 - 371 + 371 - 71);
                    if (0 == this.invitaarray.type) 0 == this.invitaarray.id ? (GameData.golds += this.invitaarray.num, 
                    A.instance.addcoin(t)) : 1 == this.invitaarray.id && (GameData.Diamonds += this.invitaarray.num, 
                    A.instance.adddimonds(t)), C.instance.updateCoin(); else if (1 == this.invitaarray.type) {
                        d.getInstance().playreward(), GameData.unlockskin.push(this.invitaarray.id - 1), 
                        GameData.useskin = this.invitaarray.id - 1, G.pushEvents([ {
                            eventId: "解锁皮肤",
                            detail: {
                                skin: this.invitaarray.id - 1
                            }
                        } ]);
                        for (var e = 0, i = 0; i < GD.skinconfig.length; i++) GD.skinconfig[i].skinnum == this.invitaarray.id - 1 && (e = i);
                        C.instance.rewardDkin(e, !0);
                        for (var a = [], n = [], s = 0; s < GD.skinconfig.length; s++) -1 != GameData.unlockskin.indexOf(GD.skinconfig[s].skinnum) ? a.push(GD.skinconfig[s]) : n.push(GD.skinconfig[s]);
                        GD.skinconfig = a.concat(n), C.instance.updatespeed();
                    } else 3 == this.invitaarray.type && (1 == this.invitaarray.id ? m.showtimegetrewardView(4, this.invitaarray.num, 6) : m.showtimegetrewardView(5, this.invitaarray.num, 6));
                    GameData.shareArray[this.index] = 2, GameData.upload(), K.instance.listView.array = GD.invitationconfig;
                }
            }
        }, {
            key: "updateItem",
            value: function(t, e) {
                10 == e && console.log("10000000"), e < 100 && (this.index = e, GD.InviteeList[e] ? GameData.shareArray[e] ? 0 == GameData.shareArray[e] && (GameData.shareArray[e] = 1) : GameData.shareArray[e] = 1 : GameData.shareArray[e] = 0, 
                this.invitaarray = t, this.num.text = e + 1 + "", this.reward.width = 70, this.reward.x = 89, 
                this.reward.height = 70, this.rewardmask.visible = !1, this.rewardtrue.visible = !1, 
                GameData.shareArray[e] ? 1 == GameData.shareArray[e] ? (this.friend.skin = "gamepad/index/shop/ofskin/" + this.friendskin[e % this.friendskin.length] + ".png", 
                this.share = !1, this.Rewardinvite && (this.Rewardinvite.visible = !0), console.log("this.index", this.index)) : 2 == GameData.shareArray[e] ? (this.friend.skin = "gamepad/index/shop/ofskin/" + this.friendskin[e % this.friendskin.length] + ".png", 
                this.rewardmask.visible = !0, this.rewardtrue.visible = !0, this.share = !1, this.Rewardinvite && (this.Rewardinvite.visible = !1)) : (this.Rewardinvite && (this.Rewardinvite.visible = !1), 
                this.rewardmask.visible = !1, this.rewardtrue.visible = !1, this.friend.skin = "gamepad/Invite/friend.png") : (this.rewardmask.visible = !1, 
                this.rewardtrue.visible = !1, this.friend.skin = "gamepad/Invite/friend.png"), 0 == t.type ? 0 == t.id ? (this.reward.skin = "gamepad/result/coin.png", 
                this.rewardnum.text = "金币x" + t.num) : 1 == t.id && (this.reward.skin = "gamepad/result/diamond.png", 
                this.rewardnum.text = "宝石x" + t.num) : 1 == t.type ? (this.reward.skin = "gamepad/Invite/skin.png", 
                this.rewardnum.text = "牛仔x1") : 3 == t.type && (this.reward.x = 94, this.reward.width = 60, 
                this.reward.height = 70, 1 == t.id ? (this.rewardnum.text = "甜甜礼包x1", this.reward.skin = "gamepad/time/tiantian.png") : (this.rewardnum.text = "虎年大礼包x1", 
                this.reward.skin = "gamepad/time/tiger.png")), this.addRewardinvite());
            }
        } ]), i;
    }(Laya.Box), q = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).type = 59, t.data = [], t.scrolltime = 0, 
            t.moveDistance = 0, t.direction = 0, t.moveTime = 0, t.moving = !1, t.m_TouchBegan = !1, 
            t.lastScrollBarValue = 0, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                G.isWidthScreen() ? this.x = Laya.stage.width - 200 - 130 : this.x = Laya.stage.width - 100 - 130, 
                this.y = (Laya.stage.height - 600) / 2;
                var t = this.getChildByName("ListView");
                t && (this.m_list = t), this.loadData(), this.zOrder = 99998;
            }
        }, {
            key: "showWithType",
            value: function(t) {
                this.type = t, this.loadData();
            }
        }, {
            key: "show",
            value: function() {
                this.visible = !0;
            }
        }, {
            key: "hide",
            value: function() {
                this.visible = !1;
            }
        }, {
            key: "loadData",
            value: function() {
                var t = this;
                GA.getNavigationList(this.type, 10, []).then(function(e) {
                    t.data = e, t.m_list.repeatY = t.data.length, t.updateWithData();
                }).catch(function(t) {
                    console.warn(t);
                });
            }
        }, {
            key: "updateWithData",
            value: function() {
                if (this.m_list && !this.destroyed) {
                    this.m_list.selectEnable = !0, this.m_list.vScrollBarSkin = "", this.m_list.renderHandler = new Laya.Handler(this, this.updateItem), 
                    this.m_list.scrollBar.changeHandler = new Laya.Handler(this, this.onScrollBarChange), 
                    this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), 
                    this.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), this.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut1), 
                    this.m_list.array = this.data;
                    var t = this.m_list.scrollBar.max;
                    console.log(t), this.moveDistance = this.m_list.spaceY + this.m_list.getCell(0).height, 
                    this.m_list.scrollBar.max = this.moveDistance * this.m_list.repeatY - (Laya.stage.height / this.moveDistance - 1) * this.moveDistance, 
                    this.data.length > Laya.stage.height / this.moveDistance && Laya.timer.frameLoop(1, this, this.update);
                }
            }
        }, {
            key: "onSelectIndex",
            value: function(t) {}
        }, {
            key: "updateItem",
            value: function(t, e) {
                t.updateItem(this.data[e], this.type, this.pageName);
            }
        }, {
            key: "update",
            value: function() {
                if (this.scrolltime += Laya.timer.delta, this.scrolltime >= 2e3) {
                    this.scrolltime = 0;
                    var t = this.m_list.scrollBar.value;
                    t < 1 ? this.direction = 1 : this.m_list.scrollBar.max - t < 1 && (this.direction = -1);
                    var e = this.direction * this.moveDistance + t;
                    e = Math.round(e / this.moveDistance) * this.moveDistance, Laya.timer.frameLoop(1, this, this.updatePos, [ e ]), 
                    this.moving = !0;
                }
            }
        }, {
            key: "updatePos",
            value: function(t) {
                if (this.moveTime += Laya.timer.delta, this.moveTime > 500) {
                    if (this.clearUpdatePos(), !this.m_TouchBegan) {
                        var e = this.m_list.scrollBar;
                        this.m_list.scrollBar.setScroll(e.min, e.max, t);
                    }
                } else if (!this.m_TouchBegan) {
                    var i = this.direction * this.moveDistance / 500 * Laya.timer.delta, a = this.m_list.scrollBar;
                    this.m_list.scrollBar.setScroll(a.min, a.max, a.value + i);
                }
            }
        }, {
            key: "clearUpdatePos",
            value: function() {
                this.moving && (this.moving = !1, this.moveTime = 0, Laya.timer.clear(this, this.updatePos));
            }
        }, {
            key: "onMouseDown",
            value: function(t) {
                t.stopPropagation(), this.scrolltime = 0, this.clearUpdatePos(), this.m_TouchBegan = !0;
            }
        }, {
            key: "onMouseMove",
            value: function() {
                this.scrolltime = 0, this.clearUpdatePos();
            }
        }, {
            key: "onMouseUp",
            value: function() {
                this.m_TouchBegan = !1;
            }
        }, {
            key: "onMouseOut1",
            value: function() {
                this.m_TouchBegan && (this.m_TouchBegan = !1);
            }
        }, {
            key: "onScrollBarChange",
            value: function(t) {
                t == this.lastScrollBarValue && this.m_list.scrollBar.stopScroll(), this.lastScrollBarValue = t;
            }
        } ]), i;
    }(Laya.Sprite), J = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).bgbox = null, t.coin = null, t.dimonds = null, 
            t.fragment = null, t.fragment1 = null, t.true = null, t.showvideo = null, t.receive = null, 
            t.ys = null, t.closeys = null, t.setAD = null, t.clickvideo = !1, t.ofcoin = 0, 
            t.num = 0, t.shownum = 4, t.dimondsnum = 0, t.sendfragments = [ 19, 20, 21, 22, 26, 27, 28, 29, 30, 31, 32, 34, 35 ], 
            t.fragmentskin = 19, t.fragment1skin = 19, t.closereward = !1, t.havevideo = !0, 
            r.instance = i(t), t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.width = Laya.stage.width, this.height = Laya.stage.height, this.bgbox = this.getChildByName("bgbox"), 
                this.coin = this.bgbox.getChildByName("coin"), this.dimonds = this.bgbox.getChildByName("dimonds"), 
                this.fragment = this.bgbox.getChildByName("fragment"), this.fragment1 = this.bgbox.getChildByName("fragment1"), 
                this.showvideo = this.bgbox.getChildByName("showvideo"), this.true = this.showvideo.getChildByName("clicktrue").getChildAt(0), 
                this.receive = this.bgbox.getChildByName("receive"), this.setAD = this.bgbox.getChildByName("setAD"), 
                this.ys = this.bgbox.getChildByName("ys"), this.closeys = this.ys.getChildByName("closeys"), 
                this.showvideo.width = 309, this.showvideo.y = 346, this.showvideo.getChildAt(0).text = "观看完整视频 解锁全新皮肤！", 
                this.showvideo.on(Laya.Event.CLICK, this, this.onshowvideo), this.receive.on(Laya.Event.CLICK, this, this.onhave), 
                this.closeys.on(Laya.Event.CLICK, this, this.oncloseys), this.ys.on(Laya.Event.CLICK, this, this.clickAD), 
                this.setAD.on(Laya.Event.CLICK, this, this.clickAD);
            }
        }, {
            key: "oncloseys",
            value: function(t) {
                t.stopPropagation(), this.ys.visible = !1, this.setAD.visible = !1, this.receive.centerX = 0;
            }
        }, {
            key: "clickAD",
            value: function() {
                var t = this;
                G.pushEvent("用户点击1比1oppo原生广告"), G.nativeAdReportAdClick(), G.nativeAdRefresh(Laya.Handler.create(this, function(e) {
                    e && (t.ys.skin = e);
                }));
            }
        }, {
            key: "playvideo",
            value: function() {
                var t = this;
                G.rewardOperation("恭喜获得页面视频", this.havevideo, function() {
                    var e, i;
                    4 != t.ofcoin ? A.instance.RegimentWar ? (GameData.warReward++, G.pushEvents([ {
                        eventId: "高级奖励",
                        detail: {
                            id: 0
                        }
                    } ])) : A.instance.TimeLimit ? (GameData.TimeLimitReward++, G.pushEvents([ {
                        eventId: "高级奖励",
                        detail: {
                            id: 1
                        }
                    } ])) : (GameData.endlessReward++, G.pushEvents([ {
                        eventId: "高级奖励",
                        detail: {
                            id: 2
                        }
                    } ])) : G.pushEvent("盲盒高级奖励"), 0 == t.ofcoin ? (GameData.golds += t.num, C.instance.addreward(!0, !1), 
                    e = new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2 - 371 + 371 - 71), 
                    i = new Laya.Vector2(Laya.stage.width / 2 + 200, Laya.stage.height / 2 - 371 + 371 - 71), 
                    A.instance.addfragments(e, t.fragmentskin), A.instance.addfragments(i, t.fragment1skin)) : 1 == t.ofcoin ? (GameData.Diamonds += t.num, 
                    C.instance.addreward(!1, !0), e = new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2 - 371 + 371 - 71), 
                    i = new Laya.Vector2(Laya.stage.width / 2 + 200, Laya.stage.height / 2 - 371 + 371 - 71), 
                    A.instance.addfragments(e, t.fragmentskin), A.instance.addfragments(i, t.fragment1skin)) : 2 == t.ofcoin || 4 == t.ofcoin ? (GameData.golds += t.num, 
                    GameData.Diamonds += t.dimondsnum, C.instance.addreward(!0, !0), e = new Laya.Vector2(Laya.stage.width / 2 + 100, Laya.stage.height / 2 - 371 + 371 - 71), 
                    i = new Laya.Vector2(Laya.stage.width / 2 + 300, Laya.stage.height / 2 - 371 + 371 - 71), 
                    A.instance.addfragments(e, t.fragmentskin), A.instance.addfragments(i, t.fragment1skin)) : 3 == t.ofcoin && (GameData.championrewardarray[t.dimondsnum] += t.num), 
                    GameData.detailNum[t.fragmentskin] += GD.playgameconfig.warfragment, GameData.detailNum[t.fragment1skin] += GD.playgameconfig.warfragment1, 
                    console.log("额外碎片1", t.fragment1skin), console.log("额外碎片", t.fragmentskin), Laya.timer.once(1e3, t, function() {
                        C.instance.updateCoin();
                    }), GameData.upload(), t.onhide();
                });
            }
        }, {
            key: "onhave",
            value: function() {
                GameInfo.clicknoinfotime(), d.getInstance().playbtn(), this.true.visible && !this.closereward ? this.playvideo() : !this.clickvideo && GameInfo.getCheatCount("恭喜获得") > 0 && 1 == GD.playgameconfig.gameinfo && !GA.Info.underCheck && !GameData.noinfo ? (this.clickvideo = !0, 
                GameInfo.closeadtime(), this.playvideo()) : (4 != this.ofcoin ? A.instance.RegimentWar ? G.pushEvents([ {
                    eventId: "普通奖励",
                    detail: {
                        id: 0
                    }
                } ]) : A.instance.TimeLimit ? G.pushEvents([ {
                    eventId: "普通奖励",
                    detail: {
                        id: 1
                    }
                } ]) : G.pushEvents([ {
                    eventId: "普通奖励",
                    detail: {
                        id: 2
                    }
                } ]) : G.pushEvent("盲盒普通奖励"), 0 == this.ofcoin ? (GameData.golds += this.num, C.instance.addreward(!0, !1)) : 1 == this.ofcoin ? (GameData.Diamonds += this.num, 
                C.instance.addreward(!1, !0)) : 2 == this.ofcoin || 4 == this.ofcoin ? (GameData.golds += this.num, 
                GameData.Diamonds += this.dimondsnum, C.instance.addreward(!0, !0)) : 3 == this.ofcoin && (GameData.championrewardarray[this.dimondsnum] += this.num, 
                G.showToast("恭喜获得碎片x" + this.num)), Laya.timer.once(1e3, this, function() {
                    C.instance.updateCoin();
                }), GameData.upload(), this.onhide());
            }
        }, {
            key: "onshowvideo",
            value: function() {
                d.getInstance().playbtn(), this.true.visible ? (0 == this.ofcoin || 1 == this.ofcoin || 3 == this.ofcoin ? this.ys.visible ? (this.ys.centerX = 100, 
                this.coin.centerX = -100) : this.coin.centerX = 0 : 2 != this.ofcoin && 4 != this.ofcoin || (this.ys.visible ? (this.ys.centerX = 200, 
                this.coin.centerX = -200, this.dimonds.centerX = 0) : (this.coin.centerX = -100, 
                this.dimonds.centerX = 100)), this.fragment.visible = !1, this.fragment1.visible = !1, 
                this.true.visible = !1) : (this.fragment.visible = !0, this.fragment1.visible = !0, 
                0 == this.ofcoin || 1 == this.ofcoin || 3 == this.ofcoin ? this.ys.visible ? (this.ys.centerX = 300, 
                this.coin.centerX = -300, this.fragment.centerX = -100, this.fragment1.centerX = 100) : (this.coin.centerX = -200, 
                this.fragment.centerX = 0, this.fragment1.centerX = 200) : 2 != this.ofcoin && 4 != this.ofcoin || (this.ys.visible ? (this.dimonds.centerX = -200, 
                this.coin.centerX = -400, this.fragment.centerX = 0, this.fragment1.centerX = 200, 
                this.ys.centerX = 400) : (this.coin.centerX = -300, this.dimonds.centerX = -100, 
                this.fragment.centerX = 100, this.fragment1.centerX = 300)), this.true.visible = !0);
            }
        }, {
            key: "onshow",
            value: function(t, e) {
                var i = this, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                GameInfo.getCheatCount("恭喜获得") > 0 && 1 == GD.playgameconfig.gameinfo && G.uploadCheatShow("恭喜获得"), 
                GA.haveRewardVideo() && GA.isNextRewardVideo("恭喜获得页面视频") || !G.isWeChat() ? this.havevideo = !0 : this.havevideo = !1, 
                this.clickvideo = !1, this.ofcoin = t, this.num = e;
                var n = this.coin.getChildByName("rewardskin");
                this.dimonds.visible = !1;
                var s = this.dimonds.getChildByName("rewardskin"), o = this.fragment.getChildByName("rewardskin"), r = this.fragment1.getChildByName("rewardskin");
                this.true.visible = !0, G.isOPPO() && (this.true.visible = !1), this.fragment.visible = !0, 
                this.fragment1.visible = !0, o.width = 81, o.height = 76, o.x = 20.5, o.y = 17.5, 
                r.width = 81, r.height = 76, r.x = 20.5, r.y = 17.5, 0 == t ? (n.skin = "gamepad/getreward/coin.png", 
                this.coin.getChildByName("num").text = e) : 1 == t ? (n.skin = "gamepad/getreward/dimonds.png", 
                this.coin.getChildByName("num").text = e) : 2 == t || 4 == t ? (this.dimondsnum = a, 
                n.skin = "gamepad/getreward/coin.png", this.coin.getChildByName("num").text = e, 
                this.dimonds.visible = !0, s.skin = "gamepad/getreward/dimonds.png", this.dimonds.getChildByName("num").text = a + "") : 3 == t && (this.dimondsnum = a, 
                n.skin = "gamepad/index/knapsack/" + a + ".png", this.coin.getChildByName("num").text = e), 
                this.closereward = !1, this.showvideo.visible = !0, A.instance.RegimentWar ? GD.playgameconfig.warReward <= GameData.warReward && (this.closereward = !0) : A.instance.TimeLimit ? GD.playgameconfig.TimeLimitReward <= GameData.TimeLimitReward && (this.closereward = !0) : GD.playgameconfig.endlessReward <= GameData.endlessReward && (this.closereward = !0), 
                4 == t && (this.closereward = !1), this.closereward && (this.showvideo.visible = !1, 
                this.fragment.visible = !1, this.fragment1.visible = !1), this.sortreward(), this.fragmentskin = this.sendfragments[A.instance.weightFragment()], 
                this.fragment1skin = this.sendfragments[A.instance.weightFragment()], o.skin = "gamepad/index/knapsack/" + this.fragmentskin + ".png", 
                r.skin = "gamepad/index/knapsack/" + this.fragment1skin + ".png", this.fragment.getChildByName("num").text = GD.playgameconfig.warfragment + "", 
                this.fragment1.getChildByName("num").text = GD.playgameconfig.warfragment1 + "", 
                G.isOPPO() ? G.showoppobanner() : 0 == GD.playgameconfig.rewardbanner ? (A.instance.rewardnum++, 
                A.instance.rewardnum % 2 == 1 ? (G.showBanner(), m.showLRADList(), G.showCustomAdByTag("top-left")) : (G.closeBannerWithTimes(3), 
                m.showScrollGameList())) : 1 == GD.playgameconfig.rewardbanner ? (G.showBanner(), 
                m.showLRADList(), G.showCustomAdByTag("top-left")) : (G.closeBannerWithTimes(3), 
                m.showScrollGameList()), G.hideCustomAdByTag("down");
                var h = G.getNativeAdImgUrl();
                G.isOPPO() && h ? (2 == this.ofcoin || 4 == this.ofcoin ? (this.dimonds.centerX = 0, 
                this.coin.centerX = -200, this.ys.centerX = 200) : (this.ys.centerX = 100, this.coin.centerX = -100), 
                this.fragment.visible = !1, this.fragment1.visible = !1, this.ys.skin = h, this.ys.visible = !0, 
                this.setAD.visible = !0, this.receive.centerX = -120, GD.stateClick(A.instance.gameTime) && Laya.timer.once(1500, this, function() {
                    i.clickAD(), GameData.dayAudoClickADCount++, GameData.upload();
                })) : (G.isOPPO() ? (2 == this.ofcoin || 4 == this.ofcoin ? (this.coin.centerX = 100, 
                this.dimonds.centerX = -100) : this.coin.centerX = 0, this.fragment.visible = !1, 
                this.fragment1.visible = !1) : 2 == this.ofcoin || 4 == this.ofcoin ? (this.coin.centerX = -300, 
                this.dimonds.centerX = -100, this.fragment.centerX = 100, this.fragment1.centerX = 300) : (this.coin.centerX = -200, 
                this.fragment.centerX = 0, this.fragment1.centerX = 200), this.ys.visible = !1, 
                this.setAD.visible = !1, this.receive.centerX = 0), Laya.timer.once(100, this, function() {
                    A.instance.showreward && G.hideCustomAdByTag("one");
                });
            }
        }, {
            key: "sortreward",
            value: function() {
                0 == this.ofcoin || 1 == this.ofcoin ? this.closereward ? this.coin.centerX = 0 : (this.coin.centerX = -200, 
                this.fragment.centerX = 0, this.fragment1.centerX = 200) : 2 == this.ofcoin || 4 == this.ofcoin ? this.closereward ? (this.coin.centerX = -100, 
                this.dimonds.centerX = 100) : (this.coin.centerX = -300, this.dimonds.centerX = -100, 
                this.fragment.centerX = 100, this.fragment1.centerX = 300) : 3 == this.ofcoin && (this.closereward ? (this.coin.centerX = -100, 
                this.dimonds.centerX = 100) : (this.coin.centerX = -200, this.fragment.centerX = 0, 
                this.fragment1.centerX = 200));
            }
        }, {
            key: "onhide",
            value: function() {
                m.hidegetRewardView();
            }
        }, {
            key: "show",
            value: function() {
                c.instance.closethree(), this.visible = !0;
            }
        }, {
            key: "hide",
            value: function() {
                G.isWeChat() ? (G.hideCustomAdByTag("top-left"), m.hideLRADList(), m.hideScrollGameList(), 
                G.closeBannerWithTimes(3), p.instance.root.visible || G.showCustomAdByTag("one")) : G.isOPPO() && G.hideoppobanner(), 
                A.instance.showreward = !1, c.instance.showthree(), this.visible = !1;
            }
        } ]), r;
    }(W);
    J.instance = null;
    var Z = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).array = [], t.showshoping = !1, t.selectnum = -1, 
            t.index = 0, r.instance = i(t), t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.zOrder = 99, this.width = Laya.stage.width, this.height = Laya.stage.height, 
                this.box_bg = this.getChildByName("box_bg"), this.backhome = this.getChildByName("backhome"), 
                this.backhome.on(Laya.Event.CLICK, this, this.closesign), this.details = this.getChildByName("details"), 
                this.detailsname = this.details.getChildByName("detailsname"), this.detailstype = this.details.getChildByName("detailstype"), 
                this.detailsskin = this.details.getChildByName("detailsskin"), this.detailsnum = this.details.getChildByName("detailsnum"), 
                this.detailsintroduce = this.details.getChildByName("detailsintroduce"), this.detailsuse = this.details.getChildByName("detailsuse");
                var t = this.getChildByName("leftrange");
                this.all = t.getChildByName("all"), this.fragment = t.getChildByName("fragment"), 
                this.prop = t.getChildByName("prop"), this.listView = this.getChildByName("listView"), 
                this.listView.renderHandler = new Laya.Handler(this, this.updateItem), this.listView.vScrollBarSkin = "", 
                this.listView.elasticEnabled = !0, this.listView.selectEnable = !0, GameData.propArray, 
                this.listView.array = GD.fragmentArray, GD.fragmentArray.forEach(function(t) {
                    null == GameData.detailNum[t.id] && (GameData.detailNum[t.id] = 0), t.num = GameData.detailNum[t.id];
                }), GD.fragmentArray.sort(function(t, e) {
                    return e.num - t.num;
                }), this.listView.repeatX = 4, this.array = GD.fragmentArray, this.listView.spaceY = -40, 
                G.isWidthScreen() && (this.listView.repeatX = 5, this.listView.width = 1145, this.box_bg.width = 1143), 
                this.getChildAt(0), Laya.stage.on(Laya.Event.CLICK, this, this.closedetails), this.all.on(Laya.Event.CLICK, this, this.clickAllbtn), 
                this.fragment.on(Laya.Event.CLICK, this, this.showfragment), this.prop.on(Laya.Event.CLICK, this, this.showprop), 
                this.detailsuse.on(Laya.Event.CLICK, this, this.showdetailsuse);
            }
        }, {
            key: "showdetailsuse",
            value: function() {
                this.showshoping = !0;
                var t = this.array[this.selectnum];
                if (t.id < 99) {
                    this.closesign(), C.instance.showShopView();
                    for (var e = 0, i = 0; i < GD.skinconfig.length; i++) GD.fragmentArray[this.selectnum].id == GD.skinconfig[i].id && (e = i);
                    p.instance.listView.scrollBar.value = 306 * Math.floor(e / 4), p.instance.showdetail(e);
                } else this.closesign(), 99 == t.id ? m.showporptimegetrewardView(0) : m.showporptimegetrewardView(1);
            }
        }, {
            key: "whitetitle",
            value: function() {
                this.all.skin = "gamepad/index/knapsack/all.png", this.fragment.skin = "gamepad/index/knapsack/chip.png", 
                this.prop.skin = "gamepad/index/knapsack/prop.png";
            }
        }, {
            key: "clickAllbtn",
            value: function() {
                d.getInstance().playbtn(), this.showAll();
            }
        }, {
            key: "showAll",
            value: function() {
                A.instance.showporp = 2, this.whitetitle(), this.all.skin = "gamepad/index/knapsack/selectall.png";
                var t = GD.fragmentArray;
                (t = t.concat(GameData.propArray)).sort(function(t, e) {
                    return e.num - t.num;
                }), this.array = t, this.listView.array = t;
            }
        }, {
            key: "showfragment",
            value: function() {
                d.getInstance().playbtn(), A.instance.showporp = 0, this.whitetitle(), this.fragment.skin = "gamepad/index/knapsack/selectchip.png", 
                GD.fragmentArray.sort(function(t, e) {
                    return e.num - t.num;
                }), this.listView.array = GD.fragmentArray, this.array = GD.fragmentArray;
            }
        }, {
            key: "showprop",
            value: function() {
                d.getInstance().playbtn(), A.instance.showporp = 1, this.whitetitle(), this.prop.skin = "gamepad/index/knapsack/selectprop.png", 
                GameData.propArray.sort(function(t, e) {
                    return e.num - t.num;
                }), this.listView.array = GameData.propArray, this.array = GameData.propArray;
            }
        }, {
            key: "closedetails",
            value: function() {
                this.details.visible = !1;
            }
        }, {
            key: "updateItem",
            value: function(t, e) {
                t.updateItem(e);
            }
        }, {
            key: "onSelect",
            value: function(t) {
                if (this.details.visible = !0, this.selectnum = t, G.isWidthScreen()) switch (t % 5) {
                  case 0:
                    this.details.x = 561;
                    break;

                  case 1:
                    this.details.x = 784;
                    break;

                  case 2:
                    this.details.x = 1006;
                    break;

                  case 3:
                    this.details.x = 675;
                    break;

                  case 4:
                    this.details.x = 897;
                } else switch (t % 4) {
                  case 0:
                    this.details.x = 561;
                    break;

                  case 1:
                    this.details.x = 784;
                    break;

                  case 2:
                    this.details.x = 453;
                    break;

                  case 3:
                    this.details.x = 675;
                }
                this.array[t].id >= 99 ? (this.detailsskin.width = 127, this.detailsskin.height = 127, 
                99 == this.array[t].id ? this.detailsskin.skin = "gamepad/time/tiantian.png" : 100 == this.array[t].id && (this.detailsskin.skin = "gamepad/time/tiger.png"), 
                this.detailsname.text = this.array[t].name + "(道具)", this.detailsnum.text = this.array[t].num + "", 
                this.detailsintroduce.text = "打开后可获得大量金币、钻石和皮肤碎片\n获取方式：每日抽奖、邀请有礼奖励等") : (this.detailsskin.width = 151, 
                this.detailsskin.height = 151, this.detailsskin.skin = "gamepad/index/knapsack/" + this.array[t].id + ".png", 
                this.detailsname.text = this.array[t].name + "(碎片)", this.detailsnum.text = GameData.detailNum[this.array[t].id] + "", 
                this.detailsintroduce.text = "使用效果：合成与升级(" + this.array[t].name + ")皮肤\n获取方式：冠军之路、邀请有礼等");
            }
        }, {
            key: "closesign",
            value: function() {
                d.getInstance().playbtn(), m.hideknapsackView();
            }
        }, {
            key: "show",
            value: function() {
                this.showshoping = !1, A.getInstance().button && A.getInstance().button.hide(), 
                this.showAll(), c.instance.closethree(), this.visible = !0, G.hideCustomAdByTag("one");
            }
        }, {
            key: "hide",
            value: function() {
                A.getInstance().button && A.getInstance().button.show(), p.instance.root.visible || this.showshoping || (G.showCustomAdByTag("one"), 
                c.instance.showthree()), this.visible = !1;
            }
        } ]), r;
    }(W), Q = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).index = 0, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.fragment = this.getChildByName("fragment"), this.select = this.getChildByName("select"), 
                this.fragmentskin = this.fragment.getChildByName("fragmentskin"), this.fragmentname = this.fragment.getChildByName("fragmentname"), 
                this.fragmentnum = this.fragment.getChildByName("fragmentnum"), this.newskin = this.fragment.getChildByName("newskin");
            }
        }, {
            key: "updateItem",
            value: function(t) {
                var e = Z.instance.array;
                this.newskin.visible = !1, this.index = t, e[t].id >= 99 ? (e[t].num > 0 ? (this.newskin.visible = !0, 
                this.visible = !0) : this.visible = !1, this.fragmentnum.text = e[t].num + "") : (null == GameData.detailNum[e[t].id] && (GameData.detailNum[e[t].id] = 0), 
                0 == GameData.detailNum[e[t].id] ? this.visible = !1 : this.visible = !0, this.fragmentnum.text = GameData.detailNum[e[t].id] + ""), 
                this.fragmentname.text = e[t].name, 99 == e[t].id ? this.fragmentskin.skin = "gamepad/time/tiantian.png" : 100 == e[t].id ? this.fragmentskin.skin = "gamepad/time/tiger.png" : this.fragmentskin.skin = "gamepad/index/knapsack/" + e[t].id + ".png", 
                Z.instance.selectnum == t ? this.select.visible = !0 : this.select.visible = !1, 
                this.on(Laya.Event.CLICK, this, this.onClick);
            }
        }, {
            key: "showporo",
            value: function(t) {
                this.visible = !1;
            }
        }, {
            key: "onClick",
            value: function(t) {
                t.stopPropagation(), d.getInstance().playbtn(), Z.instance.onSelect(this.index);
            }
        } ]), i;
    }(Laya.Box), $ = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).array = [], t.doluck = !1, t.selectaninum = 2, 
            t.selectindedx = -1, t.suijicishu = 10, t.luckarray = [], t.weight = 0, r.instance = i(t), 
            t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.zOrder = 99, this.width = Laya.stage.width, this.height = Laya.stage.height, 
                this.bgbox = this.getChildByName("bgbox"), this.Lotterybox = this.bgbox.getChildByName("Lotterybox"), 
                this.listView = this.Lotterybox.getChildByName("listview"), this.drawbtn = this.Lotterybox.getChildByName("drawbtn"), 
                this.closebtn = this.bgbox.getChildByName("closebtn"), this.luckydraw = this.Lotterybox.getChildByName("luckydraw"), 
                this.luckydraw.text = "今日抽奖次数：" + GameData.luckindex + "/6", this.listView.array = GameData.luckarray, 
                this.listView.renderHandler = new Laya.Handler(this, this.updateItem), GameData.luckindex >= 2 && (this.drawbtn.skin = "gamepad/draw/video.png"), 
                this.drawbtn.on(Laya.Event.CLICK, this, this.playDraw), this.closebtn.on(Laya.Event.CLICK, this, this.onclosebtn);
            }
        }, {
            key: "onclosebtn",
            value: function() {
                d.getInstance().playbtn(), this.hide();
            }
        }, {
            key: "playDraw",
            value: function() {
                var t = this;
                d.getInstance().playbtn(), this.doluck || (GameData.luckindex >= 6 ? G.showToast("今日次数已用尽，请明日再来") : GameData.luckindex >= 2 ? G.rewardOperation("看视频抽奖", !0, function() {
                    t.drawLuck();
                }) : (G.pushEvent("免费抽奖"), this.drawLuck()));
            }
        }, {
            key: "drawLuck",
            value: function() {
                var t = this;
                this.doluck = !0;
                var e = 0, i = 0;
                this.luckarray.forEach(function(t) {
                    e += t.weight;
                });
                for (var a, n = Math.ceil(Math.random() * e), s = 0, o = 0; o < this.luckarray.length; o++) {
                    if (a = s + this.luckarray[o].weight, n > s && n <= a) {
                        i = o;
                        break;
                    }
                    s = a;
                }
                this.suijicishu = 10, this.selectindedx = -1, this.selectaninum = 3, this.drawani(function() {
                    t.showselectani(t.luckarray[i].number, function() {
                        t.doluck = !1, t.weight -= t.luckarray[i].weight, GameData.Receiveluckarray[t.luckarray[i].number] = 1, 
                        GameData.luckindex++;
                        var e = t.luckarray.splice(i, 1);
                        t.luckydraw.text = "今日抽奖次数：" + GameData.luckindex + "/6", GameData.luckindex >= 2 && (t.drawbtn.skin = "gamepad/draw/video.png"), 
                        t.listView.array = GameData.luckarray;
                        var a = new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2 - 371 + 371 - 71);
                        if (0 == e[0].type) 0 == e[0].id ? (GameData.golds += e[0].num, A.instance.addcoin(a)) : (GameData.Diamonds += e[0].num, 
                        A.instance.adddimonds(a)), C.instance.updateCoin(); else if (1 == e[0].type) if (-1 == GameData.unlockskin.indexOf(e[0].id - 1)) {
                            d.getInstance().playreward(), GameData.unlockskin.push(e[0].id - 1), GameData.useskin = e[0].id - 1, 
                            G.pushEvents([ {
                                eventId: "解锁皮肤",
                                detail: {
                                    skin: e[0].id - 1
                                }
                            } ]);
                            for (var n = 0, s = 0; s < GD.skinconfig.length; s++) GD.skinconfig[s].skinnum == e[0].id - 1 && (n = s);
                            C.instance.rewardDkin(n, !0), GameData.upload();
                            for (var o = [], r = [], h = 0; h < GD.skinconfig.length; h++) -1 != GameData.unlockskin.indexOf(GD.skinconfig[h].skinnum) ? o.push(GD.skinconfig[h]) : r.push(GD.skinconfig[h]);
                            GD.skinconfig = o.concat(r), t.listView.array = GD.skinconfig, C.instance.updatespeed();
                        } else {
                            for (var l = 0, c = 0; c < GD.fragmentconfig.length; c++) GD.fragmentconfig[c].id == e[0].id - 1 && (l = c);
                            var u = GD.fragmentconfig[l].id;
                            GameData.detailNum[u] += 100, A.instance.addfragments(a, u);
                        } else if (2 == e[0].type) {
                            var g = GD.fragmentconfig[e[0].id - 1].id;
                            GameData.detailNum[g] += e[0].num, A.instance.addfragments(a, g);
                        } else 3 == e[0].type && (1 == e[0].id ? m.showtimegetrewardView(4, e[0].num, 6) : m.showtimegetrewardView(5, e[0].num, 6));
                        GameData.upload();
                    });
                });
            }
        }, {
            key: "showselectani",
            value: function(t, e) {
                var i = this;
                this.selectindedx = -1, this.listView.array = GameData.luckarray, Laya.timer.once(200, this, function() {
                    i.selectindedx = t, i.listView.array = GameData.luckarray, i.selectaninum--, i.selectaninum >= 0 ? Laya.timer.once(200, i, function() {
                        i.showselectani(t, e);
                    }) : e && e();
                });
            }
        }, {
            key: "drawani",
            value: function(t) {
                var e = this, i = this.luckarray.concat();
                i.length >= 2 && this.suijicishu >= 0 ? (this.selectindedx = i[Math.floor(Math.random() * i.length)].number, 
                this.listView.array = GameData.luckarray, Laya.timer.once(300, this, function() {
                    e.suijicishu--, e.drawani(t);
                })) : t && t();
            }
        }, {
            key: "updateItem",
            value: function(t, e) {
                t.updateItem(GameData.luckarray[e], e);
            }
        }, {
            key: "show",
            value: function() {
                this.luckarray = [];
                for (var t = 0; t < GameData.luckarray.length; t++) 0 == GameData.Receiveluckarray[t] && (this.luckarray.push(GameData.luckarray[t]), 
                this.weight += GameData.luckarray[t].weight);
                this.visible = !0, G.hideCustomAdByTag("one"), m.showLRADList(), G.showCustomAdByTag("top-left"), 
                A.getInstance().button && A.getInstance().button.hide(), A.instance.scene.active && c.instance.closethree();
            }
        }, {
            key: "hide",
            value: function() {
                A.getInstance().button && A.getInstance().button.show(), p.instance.root.visible || (G.showCustomAdByTag("one"), 
                c.instance.showthree()), GameData.luckindex >= 6 && (C.instance.draw.getChildByName("red").visible = !1), 
                m.hideLRADList(), G.hideCustomAdByTag("top-left"), this.visible = !1;
            }
        } ]), r;
    }(W), tt = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).getreward = 0, t.index = 0, t.array = [], 
            t.day = 0, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.rewardskin = this.getChildByName("rewardskin"), this.quantity = this.getChildByName("quantity"), 
                this.rewardname = this.getChildByName("rewardname"), this.select = this.getChildByName("select"), 
                this.select.visible = !1, this.big = this.getChildByName("big"), this.luckmask = this.getChildByName("luckmask"), 
                this.lucktrue = this.getChildByName("lucktrue");
            }
        }, {
            key: "updateItem",
            value: function(t, e) {
                if (1 == GameData.Receiveluckarray[e] ? (this.luckmask.visible = !0, this.lucktrue.visible = !0) : (this.luckmask.visible = !1, 
                this.lucktrue.visible = !1), $.instance.selectindedx == e ? this.select.visible = !0 : this.select.visible = !1, 
                this.quantity.text = "x" + t.num, 0 == t.type) this.rewardskin.width = 83, this.rewardskin.height = 72, 
                0 == t.id ? (this.rewardskin.skin = "gamepad/getreward/coin.png", this.rewardname.text = "金币") : (this.rewardskin.skin = "gamepad/getreward/dimonds.png", 
                this.rewardname.text = "钻石"); else if (1 == t.type) {
                    this.rewardskin.width = 88, this.rewardskin.height = 90;
                    for (var i = 0, a = 0; a < GD.skinconfig.length; a++) GD.skinconfig[a].num == t.id && (i = a);
                    this.rewardname.text = GD.skinconfig[i].name, this.rewardskin.skin = "gamepad/index/shop/ofskin/" + GD.skinconfig[i].skin;
                } else 2 == t.type ? (this.rewardskin.width = 81, this.rewardskin.height = 76, this.rewardname.text = GD.fragmentconfig[t.id - 1].name + "(碎片)", 
                this.rewardskin.skin = "gamepad/index/knapsack/" + GD.fragmentconfig[t.id - 1].id + ".png") : 3 == t.type && (this.rewardskin.width = 74, 
                this.rewardskin.height = 85, 1 == t.id ? (this.rewardname.text = "甜甜礼包", this.rewardskin.skin = "gamepad/time/tiantian.png") : (this.rewardname.text = "虎年大礼包", 
                this.rewardskin.skin = "gamepad/time/tiger.png"));
                1 == t.attribute ? this.big.visible = !0 : this.big.visible = !1;
            }
        } ]), i;
    }(Laya.Box), et = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).array = [], t.rankarray = [ 0, 1, 2 ], t.luckarray = [], 
            t.weight = 0, r.instance = i(t), t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.zOrder = 99999999, this.width = Laya.stage.width, this.height = Laya.stage.height, 
                G.isWeChat() && (this.blackbg = this.getChildByName("blackbg"), this.rankbg = this.getChildByName("rankbg"), 
                this.listView = this.rankbg.getChildByName("listview"), this.left = this.rankbg.getChildByName("left"), 
                this.right = this.rankbg.getChildByName("right"), this.friend = this.rankbg.getChildByName("friend"), 
                this.world = this.rankbg.getChildByName("world"), this.title = this.rankbg.getChildByName("title"), 
                this.rankbolder = this.title.getChildByName("rankbolder"), this.bottom = this.rankbg.getChildByName("bottom"), 
                this.myrank = this.rankbg.getChildByName("myrank"), this.myskin = this.rankbg.getChildByName("myskin"), 
                this.pattern = this.title.getChildByName("pattern"), this.scendrank = this.rankbolder.getChildByName("scendrank"), 
                this.otherrank = this.rankbolder.getChildByName("otherrank"), this.myranknum = this.rankbg.getChildByName("myranknum"), 
                this.myname = this.rankbg.getChildByName("myname"), this.myscore = this.rankbg.getChildByName("myscore"), 
                this.friendrank = this.getChildByName("friendrank"), this.listView.array = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], 
                this.listView.renderHandler = new Laya.Handler(this, this.updateItem), this.listView.vScrollBarSkin = "", 
                this.listView.elasticEnabled = !0, this.listView.scrollBar.max = 1e3, this.blackbg.on(Laya.Event.CLICK, this, this.hide), 
                this.listView.visible = !1, this.friendrank.postMsg({
                    type: "openid",
                    myopenid: GA.Info.openId,
                    LowEndDevice: G.isLowEndDevice()
                }), this.pattern.on(Laya.Event.CLICK, this, this.showselectrank), this.otherrank.on(Laya.Event.CLICK, this, this.showotherrank), 
                this.scendrank.on(Laya.Event.CLICK, this, this.showscendrank), this.rankbolder.visible = !1, 
                this.bottom.visible = !1, this.title.visible = !1);
            }
        }, {
            key: "showotherrank",
            value: function() {
                var t = this.rankarray.concat(), e = t[1], i = t[0];
                this.rankarray[0] = e, this.rankarray[1] = i, this.rankbolder.visible = !1, this.showpattem();
            }
        }, {
            key: "showscendrank",
            value: function() {
                var t = this.rankarray.concat(), e = t[2], i = t[0];
                this.rankarray[0] = e, this.rankarray[2] = i, this.rankbolder.visible = !1, this.showpattem();
            }
        }, {
            key: "showselectrank",
            value: function() {
                this.rankbolder.visible ? this.rankbolder.visible = !1 : this.rankbolder.visible = !0;
            }
        }, {
            key: "drawLuck",
            value: function() {}
        }, {
            key: "updateItem",
            value: function(t, e) {}
        }, {
            key: "showpattem",
            value: function() {
                for (var t = 0; t < 3; t++) 0 == this.rankarray[t] ? 0 == t ? (this.pattern.text = "无尽模式", 
                this.friendrank.postMsg({
                    type: "endless"
                })) : 1 == t ? (this.pattern.text = "限时模式", this.friendrank.postMsg({
                    type: "TimeLimit"
                })) : 2 == t && (this.pattern.text = "团战模式", this.friendrank.postMsg({
                    type: "war"
                })) : 1 == this.rankarray[t] ? 0 == t ? this.otherrank.text = "无尽模式" : 1 == t ? this.otherrank.text = "限时模式" : 2 == t && (this.otherrank.text = "团战模式") : 2 == this.rankarray[t] && (0 == t ? this.scendrank.text = "无尽模式" : 1 == t ? this.scendrank.text = "限时模式" : 2 == t && (this.scendrank.text = "团战模式"));
            }
        }, {
            key: "show",
            value: function() {
                this.luckarray = [];
                for (var t = 0; t < GameData.luckarray.length; t++) 0 == GameData.Receiveluckarray[t] && (this.luckarray.push(GameData.luckarray[t]), 
                this.weight += GameData.luckarray[t].weight);
                this.visible = !0, this.rankbolder.visible = !1, this.friendrank.postMsg({
                    type: "start"
                }), G.hideCustomAdByTag("one");
            }
        }, {
            key: "hide",
            value: function() {
                A.getInstance().button && A.getInstance().button.show(), p.instance.root.visible || (G.showCustomAdByTag("one"), 
                c.instance.showthree()), this.visible = !1, this.destroy(), wx.triggerGC();
            }
        } ]), r;
    }(W), it = function(t) {
        a(i, t);
        var e = n(i);
        function i() {
            var t;
            return s(this, i), (t = e.apply(this, arguments)).content = null, t.signrewardskin = !1, 
            t.useskipos = new Laya.Vector2(), t.type = 0, t.rewardnum = 0, t.rewardid = 0, t.showflash = !1, 
            t.shothreed = !1, t.havevideo = !0, t;
        }
        return o(i, [ {
            key: "onAwake",
            value: function() {
                this.zOrder = 99, this.dialogview = this.getChildByName("dialogview"), this.dialogview.width = this.width = Laya.stage.width, 
                this.dialogview.height = this.height = Laya.stage.height, this.content = this.dialogview.getChildByName("content"), 
                this.content.pos(this.width / 2, this.height / 2), this.box = this.content.getChildByName("box"), 
                this.closebtn = this.content.getChildByName("closebtn"), this.rewardskin = this.box.getChildByName("light").getChildByName("rewardskin"), 
                this.receivebtn = this.content.getChildByName("receivebtn"), this.closebtn.on(Laya.Event.CLICK, this, this.closesign), 
                this.receivebtn.on(Laya.Event.CLICK, this, this.onReceivebtn);
                for (var t = 1; t < 8; t++) this.changeDay(t);
            }
        }, {
            key: "reward",
            value: function() {
                if (1 == this.type) {
                    var t;
                    d.getInstance().playreward();
                    for (var e = 0, i = 0; i < GD.skinconfig.length; i++) GD.skinconfig[i].num == this.config[GameData.signday % 7].id && (t = GD.skinconfig[i], 
                    e = i);
                    if (-1 != GameData.unlockskin.indexOf(GD.skinconfig[e].skinnum)) if (5 == GD.skinconfig[e].type) {
                        var a = new Laya.Vector2(Laya.stage.width / 2 + 100, Laya.stage.height / 2);
                        A.instance.addfragments(a, GD.skinconfig[e].id - 1), GameData.detailNum[GD.skinconfig[e].id - 1] += GD.skinconfig[e].price / 2;
                    } else GameData.Diamonds += GD.skinconfig[e].price / 2, C.instance.addreward(!1, !0), 
                    Laya.timer.once(1e3, this, function() {
                        C.instance && (C.instance.updateCoin(), C.instance.updatespeed());
                    }); else {
                        this.signrewardskin = !0, GameData.unlockskin.push(t.skinnum), GameData.useskin = t.skinnum, 
                        G.pushEvents([ {
                            eventId: "解锁皮肤",
                            detail: {
                                skin: t.skinnum
                            }
                        } ]), C.instance.rewardDkin(e);
                        for (var n = [], s = [], o = 0; o < GD.skinconfig.length; o++) -1 != GameData.unlockskin.indexOf(GD.skinconfig[o].skinnum) ? n.push(GD.skinconfig[o]) : s.push(GD.skinconfig[o]);
                        GD.skinconfig = n.concat(s), this.useskipos.setValue(338.5 + Laya.stage.width / 2 - 640, 315.5 + Laya.stage.height / 2 - 460), 
                        c.instance.showsprite3d(GameData.useskin, this.useskipos);
                    }
                } else if (0 == this.type) 1 == this.rewardid ? (GameData.Diamonds += this.rewardnum, 
                C.instance.addreward(!1, !0), Laya.timer.once(1e3, this, function() {
                    C.instance && (C.instance.updateCoin(), C.instance.updatespeed());
                })) : (GameData.golds += this.rewardnum, C.instance.addreward(!0, !1), Laya.timer.once(1e3, this, function() {
                    C.instance && (C.instance.updateCoin(), C.instance.updatespeed());
                })); else if (2 == this.type) {
                    var r = new Laya.Vector2(Laya.stage.width / 2 + 100, Laya.stage.height / 2);
                    A.instance.addfragments(r, this.config[GameData.signday % 7].id - 1), GameData.detailNum[this.config[GameData.signday % 7].id - 1] += this.config[GameData.signday % 7].number;
                } else this.type;
                GameData.signday++;
                for (var h = 1; h < 8; h++) this.changeDay(h);
                C.instance && (C.instance.sign.getChildByName("red").visible = !1), m.hidesignView(), 
                GameData.upload(), this.receivebtn.visible = !1;
            }
        }, {
            key: "onReceivebtn",
            value: function() {
                var t = this;
                GameData.selectsignday != GameData.signday ? G.rewardOperation("领取签到奖励", this.havevideo, function() {
                    t.reward();
                }) : G.pushEvent("今日已领取完毕，请明日再来解锁。");
            }
        }, {
            key: "changeDay",
            value: function(t) {
                var e = this.box.getChildByName("day" + t), i = e.getChildByName("have"), a = e.getChildByName("blackmask"), n = e.getChildByName("today"), s = e.getChildByName("skinnum"), o = e.getChildByName("skinname");
                GameData.selectsignday <= 7 ? (this.gesignreward(t, o, s, GD.firstsignconfig), this.config = GD.firstsignconfig) : GameData.selectsignday <= 14 ? (this.gesignreward(t, o, s, GD.loopsecondsign), 
                this.config = GD.loopsecondsign) : (this.gesignreward(t, o, s, GD.loopsignconfig), 
                this.config = GD.loopsignconfig), GameData.selectsignday % 7 == t ? (GameData.signday != GameData.selectsignday ? (a.visible = !1, 
                i.visible = !1) : (a.visible = !0, i.visible = !0), n.visible = !0, this.type = this.config[t - 1].type, 
                this.rewardnum = this.config[t - 1].number, this.rewardid = this.config[t - 1].id) : (GameData.signday % 7 > t - 1 ? (a.visible = !0, 
                i.visible = !0) : (a.visible = !1, i.visible = !1), GameData.signday % 7 == 0 && GameData.signday == GameData.selectsignday && (a.visible = !0, 
                i.visible = !0), n.visible = !1), 7 == t && GameData.selectsignday % 7 == 0 && (GameData.signday != GameData.selectsignday ? (a.visible = !1, 
                i.visible = !1) : (a.visible = !0, i.visible = !0), n.visible = !0, this.type = this.config[t - 1].type, 
                this.rewardnum = this.config[t - 1].number, this.rewardid = this.config[t - 1].id), 
                GameData.signday == GameData.selectsignday && (this.receivebtn.visible = !1);
            }
        }, {
            key: "gesignreward",
            value: function(t, e, i, a) {
                if (1 == a[t - 1].type) for (var n = 0; n < GD.skinconfig.length; n++) GD.skinconfig[n].num == a[t - 1].id && (i.skin = "gamepad/index/shop/skin/" + GD.skinconfig[n].skin, 
                e.text = GD.skinconfig[n].name, i.x = -23.5, i.y = 17.5, i.width = 167, i.height = 174, 
                -1 != GameData.unlockskin.indexOf(GD.skinconfig[n].skinnum) ? 5 == GD.skinconfig[n].type ? ((GameData.selectsignday % 7 == t || 7 == t && GameData.selectsignday % 7 == 0) && (this.rewardskin.skin = "gamepad/index/knapsack/" + (a[t - 1].id - 1) + ".png", 
                this.rewardskin.width = 200, this.rewardskin.height = 200, this.rewardskin.bottom = 30), 
                i.skin = "gamepad/index/knapsack/" + (a[t - 1].id - 1) + ".png", e.text = GD.skinconfig[n].name, 
                i.x = 20, i.y = 42, i.width = 80, i.height = 80) : ((GameData.selectsignday % 7 == t || 7 == t && GameData.selectsignday % 7 == 0) && (this.rewardskin.skin = "gamepad/index/sign/diamonds.png", 
                this.rewardskin.width = 160, this.rewardskin.height = 275, this.rewardskin.bottom = 0), 
                i.skin = "gamepad/index/sign/diamonds.png", e.text = "x" + GD.skinconfig[n].price / 2, 
                i.x = 28, i.y = 38, i.width = 64, i.height = 110) : (GameData.selectsignday % 7 == t || 7 == t && GameData.selectsignday % 7 == 0) && (this.rewardskin.skin = "gamepad/index/shop/skin/" + GD.skinconfig[n].skin, 
                this.rewardskin.width = 300, this.rewardskin.height = 300, this.rewardskin.bottom = 0)); else if (0 == a[t - 1].type) 1 == a[t - 1].id && (i.skin = "gamepad/index/sign/diamonds.png", 
                e.text = "x" + a[t - 1].number, i.x = 28, i.y = 38, i.width = 64, i.height = 110, 
                (GameData.selectsignday % 7 == t || 7 == t && GameData.selectsignday % 7 == 0) && (this.rewardskin.skin = "gamepad/index/sign/diamonds.png", 
                this.rewardskin.width = 160, this.rewardskin.height = 275, this.rewardskin.bottom = 0)); else if (2 == a[t - 1].type) for (var s = 0; s < GD.skinconfig.length; s++) GD.skinconfig[s].num == a[t - 1].id && (i.skin = "gamepad/index/knapsack/" + (a[t - 1].id - 1) + ".png", 
                e.text = GD.skinconfig[s].name, i.x = 20, i.y = 42, i.width = 80, i.height = 80, 
                (GameData.selectsignday % 7 == t || 7 == t && GameData.selectsignday % 7 == 0) && (this.rewardskin.skin = "gamepad/index/knapsack/" + (a[t - 1].id - 1) + ".png", 
                this.rewardskin.width = 200, this.rewardskin.height = 200, this.rewardskin.bottom = 30)); else a[t - 1].type;
            }
        }, {
            key: "closesign",
            value: function() {
                d.getInstance().playbtn(), this.showflash = !1, GameData.firstflash && GameData.ActivityCompletion[6], 
                m.hidesignView();
            }
        }, {
            key: "show",
            value: function() {
                A.getInstance().button && A.getInstance().button.hide(), GA.haveRewardVideo() && GA.isNextRewardVideo("领取签到奖励") || !G.isWeChat() ? (this.havevideo = !0, 
                this.receivebtn.skin = "gamepad/index/sign/get_video.png") : (this.havevideo = !1, 
                this.receivebtn.skin = "gamepad/index/sign/get_share.png"), A.instance.scene.active && (this.shothreed = !0, 
                c.instance.closethree()), G.hideCustomAdByTag("one"), this.dialogview.show(!1), 
                this.visible = !0, this.content.visible = !0;
            }
        }, {
            key: "hide",
            value: function() {
                this.visible = !1, this.content.visible = !1, this.dialogview.close(), this.showflash || this.showindex();
            }
        }, {
            key: "showindex",
            value: function() {
                this.signrewardskin || (p.instance.root.visible || G.showCustomAdByTag("one"), this.shothreed && c.instance.showthree(), 
                A.getInstance().button && A.getInstance().button.show());
            }
        } ]), i;
    }(W), at = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).bgbox = null, t.tryfirst = null, t.tryfirst_tryskin = null, 
            t.tryfirst_usebtn = null, t.tryfirst_title = null, t.trysecond = null, t.trysecond_tryskin = null, 
            t.trysecond_usebtn = null, t.trysecond_title = null, t.trythree = null, t.trythree_tryskin = null, 
            t.trythree_usebtn = null, t.trythree_title = null, t.closebtn = null, t.startgame = null, 
            t.change = null, t.clickvideo = !1, t.ofcoin = 0, t.num = 0, t.shownum = 4, t.dimondsnum = 0, 
            t.sendfragments = [ 19, 20, 21, 22, 26, 27, 28, 29, 30, 31, 32, 34, 35 ], t.fragmentskin = 19, 
            t.fragment1skin = 19, t.closereward = !1, t.ramberSkin = [], t.simpleskin = [], 
            t.videoofOne = !1, t.havevidoe = !1, t.bddskin = [], r.instance = i(t), t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.width = Laya.stage.width, this.height = Laya.stage.height, this.bgbox = this.getChildByName("bgbox"), 
                this.tryfirst = this.bgbox.getChildByName("tryfirst"), this.trysecond = this.bgbox.getChildByName("trysecond"), 
                this.trythree = this.bgbox.getChildByName("trythree"), this.tryfirst_tryskin = this.tryfirst.getChildByName("tryskin"), 
                this.tryfirst_usebtn = this.tryfirst.getChildByName("usebtn"), this.tryfirst_title = this.tryfirst.getChildByName("title").getChildAt(0), 
                this.trysecond_tryskin = this.trysecond.getChildByName("tryskin"), this.trysecond_usebtn = this.trysecond.getChildByName("usebtn"), 
                this.trysecond_title = this.trysecond.getChildByName("title").getChildAt(0), this.trythree_tryskin = this.trythree.getChildByName("tryskin"), 
                this.trythree_usebtn = this.trythree.getChildByName("usebtn"), this.trythree_title = this.trythree.getChildByName("title").getChildAt(0), 
                this.closebtn = this.bgbox.getChildByName("closebtn"), this.startgame = this.bgbox.getChildByName("startgame"), 
                this.change = this.bgbox.getChildByName("change"), this.tryfirst.on(Laya.Event.CLICK, this, this.playtryofFirst), 
                this.trysecond.on(Laya.Event.CLICK, this, this.playtryofSecond), this.trythree.on(Laya.Event.CLICK, this, this.playtryofThree), 
                this.closebtn.visible = !1, this.closebtn.on(Laya.Event.CLICK, this, this.closetry), 
                this.startgame.on(Laya.Event.CLICK, this, this.closetry), this.change.on(Laya.Event.CLICK, this, this.changeskin);
            }
        }, {
            key: "closetry",
            value: function() {
                d.getInstance().playbtn(), this.onhide(), this.callback();
            }
        }, {
            key: "changeskin",
            value: function() {
                var t = this;
                d.getInstance().playbtn(), GA.haveRewardVideo() || (this.change.skin = "gamepad/start/sharechange.png"), 
                G.rewardOperation("换一批", this.havevidoe, function() {
                    t.ramberSkin = [], t.simpleskin = [];
                    for (var e = 0; e < GD.skinconfig.length; e++) 35 == GD.skinconfig[e].skinnum && (t.bddskin[0] = GD.skinconfig[e]), 
                    34 == GD.skinconfig[e].skinnum && (t.bddskin[1] = GD.skinconfig[e]), -1 == GameData.unlockskin.indexOf(GD.skinconfig[e].skinnum) && GD.skinconfig[e].skinnum >= 8 && GD.skinconfig[e].start > 3 && t.ramberSkin.push(GD.skinconfig[e]);
                    for (var i = 0; i < GD.skinconfig.length; i++) GameData.useskin != GD.skinconfig[i].skinnum && GD.skinconfig[i].skinnum >= 8 && GD.skinconfig[i].start <= 3 && t.simpleskin.push(GD.skinconfig[i]);
                    t.getskin();
                });
            }
        }, {
            key: "playtryofFirst",
            value: function() {
                var t = this;
                d.getInstance().playbtn(), this.videoofOne || 1 == GD.playgameconfig.starVideo ? (GA.haveRewardVideo() || (this.tryfirst_usebtn.skin = "gamepad/start/shareuse.png"), 
                G.rewardOperation("开局视频试用点1", this.havevidoe, function() {
                    A.instance.oldskin = GameData.useskin, A.instance.tryskin = !0, GameData.useskin = t.ramberSkin[0].skinnum, 
                    G.pushEvents([ {
                        eventId: "开局试用皮肤",
                        detail: {
                            skin: GameData.useskin
                        }
                    } ]), t.onhide(), t.callback();
                })) : (A.instance.oldskin = GameData.useskin, A.instance.tryskin = !0, GameData.useskin = this.ramberSkin[0].skinnum, 
                G.pushEvents([ {
                    eventId: "开局免费试用皮肤",
                    detail: {
                        skin: GameData.useskin
                    }
                } ]), this.onhide(), this.callback());
            }
        }, {
            key: "playtryofSecond",
            value: function() {
                var t = this;
                d.getInstance().playbtn(), GA.haveRewardVideo() || (this.trysecond_usebtn.skin = "gamepad/start/share.png"), 
                G.rewardOperation("开局视频试用点2", this.havevidoe, function() {
                    A.instance.oldskin = GameData.useskin, A.instance.tryskin = !0, GameData.useskin = t.ramberSkin[1].skinnum, 
                    G.pushEvents([ {
                        eventId: "开局试用皮肤",
                        detail: {
                            skin: GameData.useskin
                        }
                    } ]), t.onhide(), t.callback();
                });
            }
        }, {
            key: "playtryofThree",
            value: function() {
                var t = this;
                d.getInstance().playbtn(), this.videoofOne && 0 == GD.playgameconfig.starVideo ? (A.instance.oldskin = GameData.useskin, 
                A.instance.tryskin = !0, GameData.useskin = this.ramberSkin[2].skinnum, G.pushEvents([ {
                    eventId: "开局免费试用皮肤",
                    detail: {
                        skin: GameData.useskin
                    }
                } ]), this.onhide(), this.callback()) : (GA.haveRewardVideo() || (this.trythree_usebtn.skin = "gamepad/start/shareuse.png"), 
                G.rewardOperation("开局视频试用点3", this.havevidoe, function() {
                    A.instance.oldskin = GameData.useskin, A.instance.tryskin = !0, GameData.useskin = t.ramberSkin[2].skinnum, 
                    G.pushEvents([ {
                        eventId: "开局试用皮肤",
                        detail: {
                            skin: GameData.useskin
                        }
                    } ]), t.onhide(), t.callback();
                }));
            }
        }, {
            key: "getskin",
            value: function() {
                var t = Math.random();
                console.log("rand=======>◊", t), t < .8 && 35 != this.ramberSkin[0].skinnum && 35 != this.ramberSkin[1].skinnum && 35 != this.ramberSkin[2].skinnum && -1 == GameData.unlockskin.indexOf(35) && !GA.Info.underCheck ? this.ramberSkin[1] = this.bddskin[0] : 34 != this.ramberSkin[0].skinnum && 34 != this.ramberSkin[1].skinnum && 34 != this.ramberSkin[2].skinnum && -1 == GameData.unlockskin.indexOf(34) && (this.ramberSkin[1] = this.bddskin[1]), 
                GA.isNextRewardVideo("开局视频试用") || !G.isWeChat() ? this.havevidoe = !0 : this.havevidoe = !1, 
                this.havevidoe || !G.isWeChat() ? this.change.skin = "gamepad/start/videochange.png" : this.change.skin = "gamepad/start/sharechange.png", 
                Math.random() > .5 ? (this.videoofOne = !0, this.ramberSkin[2] = this.simpleskin[MyMath.rand(0, this.simpleskin.length - 1)], 
                this.havevidoe ? this.tryfirst_usebtn.skin = "gamepad/start/videouse.png" : this.tryfirst_usebtn.skin = "gamepad/start/shareuse.png", 
                0 == GD.playgameconfig.starVideo ? this.trythree_usebtn.skin = "gamepad/start/use.png" : this.havevidoe ? this.trythree_usebtn.skin = "gamepad/start/videouse.png" : this.trythree_usebtn.skin = "gamepad/start/shareuse.png") : (this.videoofOne = !1, 
                this.ramberSkin[0] = this.simpleskin[MyMath.rand(0, this.simpleskin.length - 1)], 
                0 == GD.playgameconfig.starVideo ? this.tryfirst_usebtn.skin = "gamepad/start/use.png" : this.havevidoe ? this.tryfirst_usebtn.skin = "gamepad/start/videouse.png" : this.tryfirst_usebtn.skin = "gamepad/start/shareuse.png", 
                this.havevidoe ? this.trythree_usebtn.skin = "gamepad/start/videouse.png" : this.trythree_usebtn.skin = "gamepad/start/shareuse.png"), 
                this.havevidoe ? this.trysecond_usebtn.skin = "gamepad/start/video.png" : this.trysecond_usebtn.skin = "gamepad/start/share.png";
                var e = this.ramberSkin[0].Additional - 1, i = this.ramberSkin[1].Additional - 1, a = this.ramberSkin[2].Additional - 1;
                this.tryfirst_tryskin.skin = "gamepad/index/shop/skin/" + this.ramberSkin[0].skin, 
                GD.snakeLevel[e].level < 1 ? this.tryfirst_title.text = GD.gettitle(GD.snakeLevel[e].title) + "+" + 100 * GD.snakeLevel[e].level + "%" : this.tryfirst_title.text = GD.gettitle(GD.snakeLevel[e].title) + "+" + GD.snakeLevel[e].level, 
                GD.snakeLevel[i].level < 1 ? this.trysecond_title.text = GD.gettitle(GD.snakeLevel[i].title) + "+" + 100 * GD.snakeLevel[i].level + "%" : this.trysecond_title.text = GD.gettitle(GD.snakeLevel[i].title) + "+" + GD.snakeLevel[i].level, 
                GD.snakeLevel[a].level < 1 ? this.trythree_title.text = GD.gettitle(GD.snakeLevel[a].title) + "+" + 100 * GD.snakeLevel[a].level + "%" : this.trythree_title.text = GD.gettitle(GD.snakeLevel[a].title) + "+" + GD.snakeLevel[a].level, 
                this.trysecond_tryskin.skin = "gamepad/index/shop/skin/" + this.ramberSkin[1].skin, 
                this.trythree_tryskin.skin = "gamepad/index/shop/skin/" + this.ramberSkin[2].skin;
            }
        }, {
            key: "onshow",
            value: function(t) {
                var e = this;
                this.ramberSkin = [], this.simpleskin = [];
                for (var i = 0; i < GD.skinconfig.length; i++) 35 == GD.skinconfig[i].skinnum && (this.bddskin[0] = GD.skinconfig[i]), 
                34 == GD.skinconfig[i].skinnum && (this.bddskin[1] = GD.skinconfig[i]), -1 == GameData.unlockskin.indexOf(GD.skinconfig[i].skinnum) && GD.skinconfig[i].skinnum >= 8 && GD.skinconfig[i].start > 3 && this.ramberSkin.push(GD.skinconfig[i]);
                for (var a = 0; a < GD.skinconfig.length; a++) GameData.useskin != GD.skinconfig[a].skinnum && GD.skinconfig[a].skinnum >= 8 && GD.skinconfig[a].start <= 3 && this.simpleskin.push(GD.skinconfig[a]);
                if (Math.random() > .5 ? (this.startgame.centerX = 100, this.change.centerX = -100) : (this.startgame.centerX = -100, 
                this.change.centerX = 100), this.ramberSkin.length < 3) return t(), void Laya.timer.once(10, this, function() {
                    e.onhide();
                });
                this.callback = t, this.ramberSkin = L.instance.getRandomArrayElements(this.ramberSkin, 3), 
                this.getskin(), G.isOPPO() ? G.showoppobanner() : (G.showBanner(), Laya.timer.once(100, this, function() {
                    G.hideCustomAdByTag("one");
                }), G.hideCustomAdByTag("one"));
            }
        }, {
            key: "onhide",
            value: function() {
                m.hideStartView();
            }
        }, {
            key: "show",
            value: function() {
                c.instance.closethree(), this.visible = !0;
            }
        }, {
            key: "hide",
            value: function() {
                G.isOPPO() ? G.hideoppobanner() : G.closeBannerWithTimes(3), this.visible = !1;
            }
        } ]), r;
    }(W);
    at.instance = null;
    var nt = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).bgbox = null, t.coin = null, t.use = null, 
            t.receive = null, t.dimond = null, t.fragment = null, t.ys = null, t.closeys = null, 
            t.clickvideo = !1, t.prop = 0, t.id = 0, t.proparray = [], t.tiger = !1, t.ofcoin = 0, 
            t.num = 0, t.shownum = 4, t.dimondsnum = 0, r.instance = i(t), t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.width = Laya.stage.width, this.height = Laya.stage.height, this.bgbox = this.getChildByName("bgbox"), 
                this.coin = this.bgbox.getChildByName("coin"), this.dimond = this.bgbox.getChildByName("dimond"), 
                this.fragment = this.bgbox.getChildByName("fragment"), this.use = this.bgbox.getChildByName("use"), 
                this.receive = this.bgbox.getChildByName("receive"), this.ys = this.bgbox.getChildByName("ys"), 
                this.closeys = this.ys.getChildByName("closeys"), this.receive.on(Laya.Event.CLICK, this, this.onhave), 
                this.use.on(Laya.Event.CLICK, this, this.onuse), this.closeys.on(Laya.Event.CLICK, this, this.oncloseys), 
                this.ys.on(Laya.Event.CLICK, this, this.clickAD), this.zOrder = 99;
            }
        }, {
            key: "oncloseys",
            value: function(t) {
                t.stopPropagation(), this.ys.visible = !1;
            }
        }, {
            key: "clickAD",
            value: function() {
                var t = this;
                G.pushEvent("用户点击1比1oppo原生广告"), G.nativeAdReportAdClick(), G.nativeAdRefresh(Laya.Handler.create(this, function(e) {
                    e && (t.ys.skin = e);
                }));
            }
        }, {
            key: "playvideo",
            value: function() {
                var t;
                0 == this.ofcoin ? (GameData.golds += this.num, C.instance.addreward(!0, !1)) : 1 == this.ofcoin ? (GameData.Diamonds += this.num, 
                C.instance.addreward(!1, !0)) : 2 == this.ofcoin ? (GameData.golds += this.num, 
                GameData.Diamonds += this.dimondsnum, C.instance.addreward(!0, !0)) : 3 == this.ofcoin ? (null == GameData.detailNum[this.dimondsnum] && (GameData.detailNum[this.dimondsnum] = 0), 
                GameData.detailNum[this.dimondsnum] += this.num, t = new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2 - 371 + 371 - 71), 
                A.instance.addfragments(t, this.dimondsnum)) : 4 == this.ofcoin ? 99 == GameData.propArray[0].id ? GameData.propArray[0].num += this.num : 99 == GameData.propArray[1].id && (GameData.propArray[1].num += this.num) : 5 == this.ofcoin && (100 == GameData.propArray[1].id ? GameData.propArray[1].num += this.num : 100 == GameData.propArray[0].id && (GameData.propArray[0].num += this.num)), 
                Laya.timer.once(1e3, this, function() {
                    C.instance.updateCoin();
                }), GameData.upload(), this.onhide();
            }
        }, {
            key: "onhave",
            value: function() {
                GameInfo.clicknoinfotime(), d.getInstance().playbtn(), -1 != this.prop ? this.openProp() : this.playvideo();
            }
        }, {
            key: "onuse",
            value: function() {
                d.getInstance().playbtn(), D.instance && D.instance.onhide(), $.instance && $.instance.hide(), 
                K.instance && K.instance.hide(), this.playvideo(), m.showknapsackView();
            }
        }, {
            key: "openProp",
            value: function() {
                GameData.golds += this.proparray[0], GameData.Diamonds += this.proparray[1], C.instance.addreward(!0, !0), 
                null == GameData.detailNum[this.id] && (GameData.detailNum[this.id] = 0), GameData.detailNum[this.id] += this.proparray[2];
                var t = new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2 + 285);
                A.instance.addfragments(t, this.id), Laya.timer.once(1e3, this, function() {
                    C.instance.updateCoin();
                }), 0 == this.prop ? (G.pushEvent("开启甜甜礼包"), 99 == GameData.propArray[0].id ? GameData.propArray[0].num-- : GameData.propArray[1].num--) : (G.pushEvent("开启虎年大礼包"), 
                G.pushEvents([ {
                    eventId: "开局试用皮肤",
                    detail: {
                        skin: GameData.useskin
                    }
                } ]), 100 == GameData.propArray[1].id ? GameData.propArray[1].num-- : GameData.propArray[0].num--), 
                GameData.upload(), this.onhide(), A.getInstance().button && A.getInstance().button.show(), 
                p.instance.root.visible || (G.showCustomAdByTag("one"), c.instance.showthree());
            }
        }, {
            key: "showprop",
            value: function(t) {
                var e = this;
                this.prop = t, this.dimond.visible = !0, this.fragment.visible = !0, this.coin.getChildByName("rewardskin").skin = "gamepad/getreward/coin.png", 
                this.id = GD.fragmentconfig[A.instance.weightFragment()].id, this.fragment.getChildByName("rewardskin").skin = "gamepad/index/knapsack/" + this.id + ".png", 
                this.receive.centerX = 0, this.use.visible = !1, 0 == t ? (this.tiger = !1, this.proparray[0] = MyMath.rand(500, 1e3), 
                this.proparray[1] = MyMath.rand(100, 200), this.proparray[2] = MyMath.rand(20, 50), 
                this.coin.getChildByName("num").text = "x" + this.proparray[0], this.dimond.getChildByName("num").text = "x" + this.proparray[1], 
                this.fragment.getChildByName("num").text = "x" + this.proparray[2]) : (this.tiger = !0, 
                this.proparray[0] = MyMath.rand(2e3, 4e3), this.proparray[1] = MyMath.rand(400, 800), 
                this.proparray[2] = MyMath.rand(80, 200), this.coin.getChildByName("num").text = "x" + this.proparray[0], 
                this.dimond.getChildByName("num").text = "x" + this.proparray[1], this.fragment.getChildByName("num").text = "x" + this.proparray[2]);
                var i = G.getNativeAdImgUrl();
                G.isOPPO() && i ? (this.dimond.centerX = -318, this.coin.centerX = -104, this.fragment.centerX = 104, 
                this.ys.centerX = 318, this.ys.skin = i, this.ys.visible = !0, GD.stateClick(A.instance.gameTime) && Laya.timer.once(1500, this, function() {
                    e.clickAD(), GameData.dayAudoClickADCount++, GameData.upload();
                })) : (this.ys.visible = !1, this.dimond.centerX = -225, this.coin.centerX = 0, 
                this.fragment.centerX = 225), this.showbanner();
            }
        }, {
            key: "showbanner",
            value: function() {
                G.isOPPO() ? G.showoppobanner() : 0 == GD.playgameconfig.rewardbanner ? (A.instance.rewardnum++, 
                A.instance.rewardnum % 2 == 1 ? (G.showBanner(), m.showLRADList(), G.showCustomAdByTag("top-left")) : (G.closeBannerWithTimes(3), 
                m.showScrollGameList())) : 1 == GD.playgameconfig.rewardbanner ? (G.showBanner(), 
                m.showLRADList(), G.showCustomAdByTag("top-left")) : (G.closeBannerWithTimes(3), 
                m.showScrollGameList()), G.hideCustomAdByTag("down"), Laya.timer.once(100, this, function() {
                    A.instance.showreward && G.hideCustomAdByTag("one");
                });
            }
        }, {
            key: "onshow",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                this.prop = -1, this.dimond.visible = !1, this.fragment.visible = !1, this.clickvideo = !1, 
                this.ofcoin = t, this.num = e;
                var a = this.coin.getChildByName("rewardskin");
                this.receive.centerX = 0, this.use.visible = !1, a.pos(20.5, 17.5), 0 == t ? (a.skin = "gamepad/getreward/coin.png", 
                this.coin.getChildByName("num").text = e, a.width = 81, a.height = 76) : 1 == t ? (a.skin = "gamepad/getreward/dimonds.png", 
                this.coin.getChildByName("num").text = e, a.width = 83, a.height = 72) : 2 == t ? (this.dimondsnum = i, 
                a.skin = "gamepad/getreward/coin.png", this.coin.getChildByName("num").text = e, 
                a.width = 83, a.height = 72) : 3 == t ? (this.dimondsnum = i, a.skin = "gamepad/index/knapsack/" + i + ".png", 
                a.width = 81, a.height = 76, this.coin.getChildByName("num").text = e) : (this.receive.centerX = -120, 
                this.use.visible = !0, a.pos(36, 13), 4 == t ? (a.skin = "gamepad/time/tiantian.png", 
                a.width = 74, a.height = 85, this.coin.getChildByName("num").text = e) : 5 == t && (a.skin = "gamepad/time/tiger.png", 
                a.width = 74, a.height = 85, this.coin.getChildByName("num").text = e)), this.showbanner();
            }
        }, {
            key: "onhide",
            value: function() {
                m.hidetimegetrewardView();
            }
        }, {
            key: "show",
            value: function() {
                c.instance.closethree(), this.visible = !0;
            }
        }, {
            key: "hide",
            value: function() {
                G.isWeChat() ? (G.hideCustomAdByTag("top-left"), m.hideLRADList(), m.hideScrollGameList(), 
                G.closeBannerWithTimes(3)) : G.isOPPO() && G.hideoppobanner(), this.visible = !1;
            }
        } ]), r;
    }(W);
    nt.instance = null;
    var st = function(t) {
        a(r, t);
        var e = n(r);
        function r() {
            var t;
            return s(this, r), (t = e.call(this)).root = null, r.instance = i(t), t;
        }
        return o(r, [ {
            key: "onAwake",
            value: function() {
                this.root = this.owner, this.head = this.root.getChildAt(0), this.pro = this.root.getChildByName("pro"), 
                this.pronum = this.pro.getChildByName("pronum"), this.title = this.root.getChildByName("title");
            }
        }, {
            key: "showtips",
            value: function() {
                this.root.visible = !0;
            }
        } ]), r;
    }(Laya.Script);
    st.instance = null;
    var ot, rt, ht, lt = function() {
        function t() {
            s(this, t);
        }
        return o(t, null, [ {
            key: "init",
            value: function() {
                var t = Laya.ClassUtils.regClass;
                t("script/GameUI.ts", I), t("common/ScaleButtonScript.ts", T), t("script/reliveView.ts", _), 
                t("load/LoadUI.ts", P), t("script/indexView.ts", C), t("script/ShopItem.ts", R), 
                t("script/shopView.ts", p), t("script/ChampionRoadItem.ts", N), t("script/ChampionRoadView.ts", k), 
                t("script/flashSaleItem.ts", E), t("script/rateflashSaleItem.ts", V), t("script/daySaleItem.ts", O), 
                t("script/flashSaleView.ts", D), t("script/showthreeD.ts", c), t("script/taskView.ts", b), 
                t("script/DrawerGameItem.ts", F), t("script/upView.ts", x), t("script/dataView.ts", u), 
                t("script/CompleteView.ts", w), t("script/addfreeView.ts", f), t("script/resultView.ts", z), 
                t("script/PrivacyTipView.ts", U), t("script/PrivacyView.ts", X), t("script/ScrollGameList.ts", j), 
                t("script/ScrollGameItem.ts", H), t("script/inviteView.ts", K), t("script/inviteItem.ts", Y), 
                t("script/LRADList.ts", q), t("script/getRewardView.ts", J), t("script/knapsackView.ts", Z), 
                t("script/knapsackItem.ts", Q), t("script/luckView.ts", $), t("script/luckItem.ts", tt), 
                t("script/rankView.ts", et), t("script/signView.ts", it), t("script/startView.ts", at), 
                t("script/timegetrewardView.ts", nt), t("script/taskTipView.ts", st);
            }
        } ]), t;
    }();
    lt.width = 1280, lt.height = 720, lt.scaleMode = "fixedheight", lt.screenMode = "horizontal", 
    lt.alignV = "top", lt.alignH = "left", lt.startScene = "scene/resultView.scene", 
    lt.sceneRoot = "", lt.debug = !1, lt.stat = !1, lt.physicsDebug = !1, lt.exportSceneToJson = !0, 
    lt.init(), function(t) {
        !function(t) {
            t.WHITE = n(1, 1, 1, 1), t.BLACK = n(0, 0, 0, 1), t.RED = n(1, 0, 0, 1), t.BLUE = n(0, 0, 1, 1), 
            t.GREEN = n(0, 1, 0, 1), t.YELLOW = n(1, 235 / 255, 4 / 255, 1), t.ORANGE = n(1, 127 / 255, 0, 1), 
            t.MAGENTA = n(1, 0, 1, 1), t.CYAN = n(0, 1, 1, 1);
        }(t.Color4F || (t.Color4F = {})), t.hexToColor = function(t) {
            t = t.replace(/^#?/, "0x");
            var e = parseInt(t), i = e >> 16 & 255, a = e >> 8 & 255, n = 255 & e;
            return new Laya.Vector3(i / 255, a / 255, n / 255);
        }, t.isValidTimerDelta = function() {
            return Laya.timer.delta < 1e3;
        }, t.hexToColor4F = function(t) {
            t = t.replace(/^#?/, "0x");
            var e = parseInt(t);
            if (e > 16777215) {
                var i = e >> 24 & 255, a = e >> 16 & 255, n = e >> 8 & 255, s = 255 & e;
                return new Laya.Vector4(i / 255, a / 255, n / 255, s / 255);
            }
            return i = e >> 16 & 255, a = e >> 8 & 255, n = 255 & e, new Laya.Vector4(i / 255, a / 255, n / 255, 1);
        };
        var e = function() {
            function t(e, i, a) {
                s(this, t), this.long = e, this.width = i, this.height = a;
            }
            return o(t, null, [ {
                key: "size",
                value: function(e, i, a) {
                    return new t(e, i, a);
                }
            } ]), t;
        }();
        t.Size3D = e, t.v2 = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return new Laya.Vector2(t, e);
        };
        var i = t.v2(0, 0);
        t.v2temp = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return i.x = t, i.y = e, i;
        }, t.v3 = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return new Laya.Vector3(t, e, i);
        };
        var a = t.v3(0, 0, 0);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            return new Laya.Vector4(t, e, i, a);
        }
        t.v3temp = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return a.x = t, a.y = e, a.z = i, a;
        }, t.v3Zero = function(t) {
            return t.x = t.y = t.z = 0, t;
        }, t.v4 = n, t.pAdd = function(e, i, a) {
            if (!a) return t.v2(e.x + i.x, e.y + i.y);
            a.x = e.x + i.x, a.y = e.y + i.y;
        }, t.pSub = function(e, i, a) {
            return a ? (a.x = e.x - i.x, a.y = e.y - i.y, a) : t.v2(e.x - i.x, e.y - i.y);
        }, t.pMult = function(e, i, a) {
            if (!a) return t.v2(e.x * i, e.y * i);
            a.x = e.x * i, a.y = e.y * i;
        }, t.pLength = function(e) {
            return Math.sqrt(t.pLengthSQ(e));
        }, t.pLengthSQ = function(e) {
            return t.pDot(e, e);
        }, t.pDot = function(t, e) {
            return t.x * e.x + t.y * e.y;
        }, t.pDistance = function(e, a) {
            return t.pSub(e, a, i), t.pLength(i);
        }, t.pForAngle = function(e, i) {
            return i ? (i.x = Math.cos(e), i.y = Math.sin(e), i) : t.v2(Math.cos(e), Math.sin(e));
        }, t.pToAngle = function(t) {
            return Math.atan2(t.y, t.x);
        }, t.pNormalize = function(t) {
            var e = t.x * t.x + t.y * t.y;
            return 1 == e ? t : (e = Math.sqrt(e)) < 2e-37 ? void 0 : (e = 1 / e, t.x *= e, 
            t.y *= e, t);
        }, t.pAddv3 = function(t, e, i) {
            return Laya.Vector3.add(t, e, i), i;
        }, t.subtractv3 = function(t, e, i) {
            return Laya.Vector3.subtract(t, e, i), i;
        }, t.pMultv3 = function(e, i, a) {
            return a ? (a.x = e.x * i, a.y = e.y * i, a.z = e.z * i, a) : t.v3(e.x * i, e.y * i, e.z * i);
        }, t.scalev3 = function(e, i) {
            var a = t.v3(0, 0, 0);
            return Laya.Vector3.scale(e, i, a), a;
        }, t.convertToRotate = function(t) {
            return 180 / Math.PI * t;
        }, t.convertToRadian = function(t) {
            return Math.PI / 180 * t;
        }, t.rand = function(t, e) {
            var i = Math.floor(t + Math.random() * (e - t + 1));
            return i = Math.min(i, e), Math.max(i, t);
        }, t.randFloat = function(t, e) {
            return t + Math.random() * (e - t);
        }, t.formatNumber = function(t, e) {
            for (var i = ""; e > 0; ) t < Math.pow(10, e - 1) && (i += "0"), e--;
            return t > 0 ? i + t : i;
        }, t.formatSecondToMinute = function(t) {
            var e = Math.floor(t / 60), i = Math.floor(t % 60);
            return this.formatNumber(e, 2) + ":" + this.formatNumber(i, 2);
        }, t.shuffle = function(t) {
            for (var e = t.length; e; ) {
                var i = Math.floor(Math.random() * e--), a = [ t[e], t[i] ];
                t[i] = a[0], t[e] = a[1];
            }
        };
    }(ot || (ot = {})), window.ex = ot, function(t) {
        t.isCollisionWithRect = function(t, e, i, a, n, s, o, r) {
            return e -= a / 2, s -= a / 2, !((t -= i / 2) >= (n -= o / 2) && t >= n + o || t <= n && t + i <= n || e >= s && e >= s + r || e <= s && e + a <= s);
        }, t.v3Zero = function(t) {
            t.x = 0, t.y = 0, t.z = 0;
        }, t.v2 = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return new Laya.Vector2(t, e);
        }, t.v2temp1 = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return this.tempPosV2_1.x = t, this.tempPosV2_1.y = e, this.tempPosV2_1;
        }, t.v2temp2 = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return this.tempPosV2_2.x = t, this.tempPosV2_2.y = e, this.tempPosV2_2;
        }, t.v2temp3 = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return this.tempPosV2_3.x = t, this.tempPosV2_3.y = e, this.tempPosV2_3;
        }, t.rotatV2 = function(t, e, i) {
            if (0 == e) return i.x = t.x, i.y = t.y, i;
            var a = this.convertToRadian(e), n = t.x * Math.cos(a) - t.y * Math.sin(a), s = t.x * Math.sin(a) + t.y * Math.cos(a);
            return i.x = n, i.y = s, i;
        }, t.v3temp = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return this.tempPosV3.x = t, this.tempPosV3.y = e, this.tempPosV3.z = i, this.tempPosV3;
        }, t.v3 = function() {
            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = arguments.length > 3 ? arguments[3] : void 0;
            return n && (t = this.tempPosV3Map.get(n)), t || (t = new Laya.Vector3(), n && this.tempPosV3Map.set(n, t)), 
            t.x = e, t.y = i, t.z = a, t;
        }, t.getV3 = function(t) {
            return this.tempPosV3Map.get(t);
        }, t.v3temp_2 = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return this.tempPosV3_2.x = t, this.tempPosV3_2.y = e, this.tempPosV3_2.z = i, this.tempPosV3_2;
        }, t.v3ToZero = function(t) {
            return t.x = t.y = t.z = 0, t;
        }, t.v4 = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            return new Laya.Vector4(t, e, i, a);
        }, t.pAdd = function(t, e, i) {
            if (!i) return this.v2(t.x + e.x, t.y + e.y);
            i.x = t.x + e.x, i.y = t.y + e.y;
        }, t.pSub = function(t, e, i) {
            return i ? (i.x = t.x - e.x, i.y = t.y - e.y, i) : this.v2(t.x - e.x, t.y - e.y);
        }, t.pMult = function(t, e, i) {
            if (!i) return this.v2(t.x * e, t.y * e);
            i.x = t.x * e, i.y = t.y * e;
        }, t.pLength = function(t) {
            return Math.sqrt(this.pLengthSQ(t));
        }, t.pLengthSQ = function(t) {
            return Laya.Vector2.dot(t, t);
        }, t.pDistaSQ = function(e, i, a, n) {
            return t.tempPosV2_1.x = e - a, t.tempPosV2_1.y = i - n, Laya.Vector2.dot(t.tempPosV2_1, t.tempPosV2_1);
        }, t.pDistance = function(e, i, a, n) {
            return t.tempPosV2_1.x = e - a, t.tempPosV2_1.y = i - n, this.pLength(this.tempPosV2_1);
        }, t.pMultv3 = function(t, e, i) {
            return (i = i || this.v3()).x = t.x * e, i.y = t.y * e, i.z = t.z * e, i;
        }, t.convertToRotate = function(t) {
            return 180 / Math.PI * t;
        }, t.convertToRadian = function(t) {
            return Math.PI / 180 * t;
        }, t.rand = function(t, e) {
            var i = Math.floor(t + Math.random() * (e - t + 1));
            return i = Math.min(i, e), Math.max(i, t);
        }, t.randFloat = function(t, e) {
            return t + Math.random() * (e - t);
        }, t.CalculateAngle = function(t, e) {
            return Math.atan2(e.y - t.y, e.x - t.x) * (180 / Math.PI);
        }, t.CalculateAngleV3 = function(t, e) {
            return Math.atan2(e.z - t.z, e.x - t.x) * (180 / Math.PI);
        }, t.Reflect = function(e, i, a) {
            Laya.Vector3.normalize(i, i);
            var n = t.pMultv3(i, 2 * Laya.Vector3.dot(e, i));
            return Laya.Vector3.subtract(e, n, a), a;
        }, t.checDayEqual = function(t, e) {
            return t.getFullYear() == e.getFullYear() && t.getMonth() == e.getMonth() && t.getDate() == e.getDate();
        }, t.randFun = function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e.length > 0 && e[this.rand(0, e.length - 1)]();
        }, t.isPosInRotationRect = function(t, e) {
            var i = e.width / 2, a = e.height / 2, n = e.angle, s = e.position, o = t.x, r = t.y, h = -n * (Math.PI / 180), l = s.x + (o - s.x) * Math.cos(h) - (r - s.y) * Math.sin(h), d = s.y + (o - s.x) * Math.sin(h) + (r - s.y) * Math.cos(h);
            return l > s.x - i && l < s.x + i && d > s.y - a && d < s.y + a;
        }, t.segmentsIntr = function(t, e) {
            var i = t.a, a = t.b, n = e.a, s = e.b, o = (i.x - n.x) * (a.y - n.y) - (i.y - n.y) * (a.x - n.x), r = (i.x - s.x) * (a.y - s.y) - (i.y - s.y) * (a.x - s.x);
            if (o * r >= 0) return !1;
            var h = (n.x - i.x) * (s.y - i.y) - (n.y - i.y) * (s.x - i.x);
            if (h * (h + o - r) >= 0) return !1;
            var l = h / (r - o), d = l * (a.x - i.x), c = l * (a.y - i.y);
            return {
                x: i.x + d,
                y: i.y + c
            };
        }, t.tempPosV2_1 = t.v2(0, 0), t.tempPosV2_2 = t.v2(0, 0), t.tempPosV2_3 = t.v2(0, 0), 
        t.tempPosV3 = t.v3(0, 0, 0), t.tempPosV3_2 = t.v3(0, 0, 0), t.tempPosV4 = t.v4(0, 0, 0, 0), 
        t.tempPosV3Map = new Map(), t.ZeroV3 = t.v3(), t.formatNumber = function(t) {
            return t < Math.pow(10, 8) ? this.wan(t) : t < Math.pow(10, 16) ? this.wan(t / Math.pow(10, 8)) + "亿" : t < Math.pow(10, 24) ? this.wan(t / Math.pow(10, 16)) + "兆" : t < Math.pow(10, 32) ? this.wan(t / Math.pow(10, 24)) + "京" : t < Math.pow(10, 40) ? this.wan(t / Math.pow(10, 32)) + "垓" : t < Math.pow(10, 48) ? this.wan(t / Math.pow(10, 40)) + "秭" : t < Math.pow(10, 56) ? this.wan(t / Math.pow(10, 48)) + "穰" : t < Math.pow(10, 64) ? this.wan(t / Math.pow(10, 56)) + "沟" : t < Math.pow(10, 72) ? this.wan(t / Math.pow(10, 64)) + "涧" : t < Math.pow(10, 80) ? this.wan(t / Math.pow(10, 72)) + "正" : t < Math.pow(10, 88) ? this.wan(t / Math.pow(10, 80)) + "载" : t < Math.pow(10, 96) ? this.wan(t / Math.pow(10, 88)) + "极" : "无穷大";
        }, t.wan = function(t) {
            if (t < Math.pow(10, 4)) {
                if (parseInt(t.toString()) == parseFloat(t.toString())) return t + "";
                var e = t.toFixed(1);
                return parseInt(e) == parseFloat(e) ? t.toFixed(0) : e;
            }
            var i = (t / Math.pow(10, 4)).toFixed(1);
            return parseInt(i) == parseFloat(i) ? (t / Math.pow(10, 4)).toFixed(0) + "万" : i + "万";
        };
    }(rt || (rt = {})), window.MyMath = rt, function(t) {
        t.findChild = function(t, e) {
            return t.name == e ? t : this._findChild(t._children, e);
        }, t._findChild = function(t, e) {
            for (var i = [], a = 0; a < t.length; a++) {
                var n = t[a];
                if (n.name == e) return n;
                n.numChildren && (i = i.concat(n._children));
            }
            return i.length ? this._findChild(i, e) : null;
        }, t.Draw3DTestLine = function(t, e, i) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Laya.Color.RED, n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Laya.Color.RED;
            t.addChild(new Laya.PixelLineSprite3D()).addLine(e, i, a, n);
        }, t.changeoneMaterial = function(t, e) {
            var i = this;
            Laya.Texture2D.load(e, Laya.Handler.create(this, function(e) {
                var a = new Laya.BlinnPhongMaterial();
                a.albedoTexture = e, a.alphaTest = !0, a.albedoIntensity = 1.2, a.specularColor = new Laya.Vector4(0, 0, 0, 0), 
                a.shininess = 1, t instanceof Laya.MeshSprite3D ? t.meshRenderer.material = a : t instanceof Laya.SkinnedMeshSprite3D ? t.skinnedMeshRenderer.material = a : i.changeMaterials(t, a);
            }));
        };
        var e = new Map();
        t.changeMaterial = function(t, i) {
            var a = this, n = e.get(i);
            n ? t instanceof Laya.MeshSprite3D ? t.meshRenderer.material = n : t instanceof Laya.SkinnedMeshSprite3D && (t.skinnedMeshRenderer.material = n) : Laya.Texture2D.load(i, Laya.Handler.create(this, function(n) {
                var s = new Laya.BlinnPhongMaterial();
                s.albedoTexture = n, s.alphaTest = !0, s.albedoIntensity = 1.2, s.specularColor = new Laya.Vector4(0, 0, 0, 0), 
                s.shininess = 1, t instanceof Laya.MeshSprite3D ? t.meshRenderer.material = s : t instanceof Laya.SkinnedMeshSprite3D ? t.skinnedMeshRenderer.material = s : a.changeMaterials(t, s), 
                e.set(i, s);
            }));
        }, t.changeMaterials = function(t, e) {
            if (t instanceof Laya.MeshSprite3D) t.meshRenderer.material = e; else if (t instanceof Laya.SkinnedMeshSprite3D) t.skinnedMeshRenderer.material = e; else if (t.numChildren >= 1) for (var i = 0; i < t.numChildren; i++) this.changeMaterials(t.getChildAt(i), e);
        }, t.OpenEffectAlphaTest = function(t) {
            t instanceof Laya.ShuriKenParticle3D && (t.name.indexOf("GoldCoinBlast") >= 0 || t.name.indexOf("Clouds") >= 0 || t.name.indexOf("Money") >= 0 ? t.particleRenderer.material.renderMode = Laya.ShurikenParticleMaterial.RENDERMODE_ALPHABLENDED : t.particleRenderer.material.renderMode = Laya.ShurikenParticleMaterial.RENDERMODE_ADDTIVE);
            for (var e = 0; e < t.numChildren; e++) this.OpenEffectAlphaTest(t.getChildAt(e));
        }, t.SetEffectRenderModeByRootName = function(t) {
            t instanceof Laya.ShuriKenParticle3D && (t.name.indexOf("Alpha") >= 0 ? t.particleRenderer.material.renderMode = Laya.ShurikenParticleMaterial.RENDERMODE_ALPHABLENDED : t.name.indexOf("moxing") >= 0 || (t.particleRenderer.material.renderMode = Laya.ShurikenParticleMaterial.RENDERMODE_ADDTIVE));
            for (var e = 0; e < t.numChildren; e++) this.SetEffectRenderModeByRootName(t.getChildAt(e));
        }, t.OpenEffect_ALPHABLENDED = function(t) {
            t instanceof Laya.ShuriKenParticle3D && (t.particleRenderer.material.renderMode = Laya.ShurikenParticleMaterial.RENDERMODE_ALPHABLENDED);
            for (var e = 0; e < t.numChildren; e++) this.OpenEffect_ALPHABLENDED(t.getChildAt(e));
        }, t.SetSprite3DColor = function(t, e) {
            t instanceof Laya.MeshSprite3D && (t.meshRenderer.material.albedoColor = e);
            for (var i = 0; i < t.numChildren; i++) this.SetSprite3DColor(t.getChildAt(i), e);
        }, t.SetSprite3DskinnedMeshRendererColor = function(t, e) {
            t instanceof Laya.SkinnedMeshSprite3D && (t.skinnedMeshRenderer.material.albedoColor = e);
            for (var i = 0; i < t.numChildren; i++) this.SetSprite3DskinnedMeshRendererColor(t.getChildAt(i), e);
        }, t.PlayEffect = function(t) {
            t instanceof Laya.ShuriKenParticle3D && t.particleSystem.play();
            for (var e = 0; e < t.numChildren; e++) this.PlayEffect(t.getChildAt(e));
        }, t.SetEffectColor = function(t, e) {
            t instanceof Laya.ShuriKenParticle3D && (t.particleSystem.startColorConstant = e);
            for (var i = 0; i < t.numChildren; i++) this.SetEffectColor(t.getChildAt(i), e);
        }, t.StopPlayEffect = function(t) {
            t instanceof Laya.ShuriKenParticle3D && t.particleSystem.stop();
            for (var e = 0; e < t.numChildren; e++) this.PlayEffect(t.getChildAt(e));
        }, t.clearRes = function(t) {
            Object.keys(Laya.Loader.loadedMap).forEach(function(e) {
                if (e.indexOf(t) >= 0) {
                    var i = Laya.loader.getRes(e);
                    i && i.destroy && i.destroy(), Laya.loader.clearRes(e);
                }
            });
        }, t.OpenSpriteAlpha = function(t) {
            var e = t.meshRenderer;
            if (e) {
                var i = e.material;
                i && (i.renderMode = Laya.PBRRenderMode.Fade);
            }
            for (var a = 0; a < t.numChildren; a++) this.OpenSpriteAlpha(t.getChildAt(a));
        }, t.OpenTrailMaterialAlpha = function(t) {
            var e = t.trailRenderer;
            if (e) {
                var i = e.material;
                i && (i.renderMode = Laya.TrailMaterial.RENDERMODE_ALPHABLENDED);
            }
            for (var a = 0; a < t.numChildren; a++) this.OpenTrailMaterialAlpha(t.getChildAt(a));
        }, t.GetSkinnedMeshSprite3D = function(t) {
            if (t instanceof Laya.SkinnedMeshSprite3D) return t;
            for (var e = 0; e < t.numChildren; e++) {
                var i = this.GetSkinnedMeshSprite3D(t.getChildAt(e));
                if (i instanceof Laya.SkinnedMeshSprite3D) return i;
            }
            return null;
        }, t.WorldToScreen2 = function(t, e, i) {
            return t.viewport.project(e, t.projectionViewMatrix, MyMath.tempPosV4), i.x = MyMath.tempPosV4.x / Laya.stage.clientScaleX, 
            i.y = MyMath.tempPosV4.y / Laya.stage.clientScaleY, i;
        }, t.InverseTransformPoint = function(t, e) {
            var i = new Laya.Vector3();
            t.getRight(i);
            var a = new Laya.Vector3();
            t.getUp(a);
            var n = new Laya.Vector3();
            t.getForward(n);
            var s = new Laya.Vector3(-n.x, -n.y, -n.z), o = this.ProjectDistance(e, t.position, i), r = this.ProjectDistance(e, t.position, a), h = this.ProjectDistance(e, t.position, s);
            return new Laya.Vector3(o, r, h);
        }, t.ProjectDistance = function(t, e, i) {
            var a = new Laya.Vector3();
            Laya.Vector3.subtract(t, e, a);
            var n = this.Angle2(a, i) * Math.PI / 180;
            return Laya.Vector3.distance(t, e) * Math.cos(n);
        }, t.Angle2 = function(t, e) {
            var i = (t.x * e.x + t.y * e.y + t.z * e.z) / (Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z) * Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z));
            return i < -1 && (i = -1), i > 1 && (i = 1), 180 * Math.acos(i) / Math.PI;
        }, t.getSpriteWorldPos = function(t, e) {
            e.x = 0, e.y = 0;
            var i = t;
            do {
                e.x += i.x, e.y += i.y, e.x -= i.pivotX, e.y -= i.pivotY, i = i.parent;
            } while (i);
            return e;
        }, t.hexToColor4F = function(t) {
            t = t.replace(/^#?/, "0x");
            var e = parseInt(t);
            if (e > 16777215) {
                var i = e >> 24 & 255, a = e >> 16 & 255, n = e >> 8 & 255, s = 255 & e;
                return new Laya.Vector4(i / 255, a / 255, n / 255, s / 255);
            }
            return i = e >> 16 & 255, a = e >> 8 & 255, n = 255 & e, new Laya.Vector4(i / 255, a / 255, n / 255, 1);
        };
    }(ht || (ht = {})), window.Util = ht;
    var dt = new (function() {
        function t() {
            s(this, t), this.iosAppid = "", this.androidAppid = "", this.nativeUUID = "", this.channelKey = "krq_tttcs", 
            this.requestUrl = "https://game.17tcw.com/default/", this.AppName = "甜甜贪吃蛇", this.getSomeRobots = "https://game.17tcw.com/game/extra/getSomeRobots2", 
            this.lowPhoneNames = [ "iPhone 7", "iPhone 6", "iPhone 5" ], this.testOpenid = "TestOpenId70", 
            this.shareVideMouldId = "2300001718", this.city = "", this.closead = !1, this.haveBanner = !1, 
            this.showBannerTimes = 0, this.bannerRefInterval = 30, this.customAds = new Map(), 
            this.gamePortalAdIsLoad = !1, this.nativeAdImgUrl = null, this.nativeAdShowTimes = 0, 
            this.nativeAdReportAdShowInterval = 1, this.nowReportAdShow = !1, this.iconskin = "", 
            this.shock = !0, this.adUnitId = "", this.startgame = !0, this.createtoperror = !1, 
            this.bannerHeight = 0, this.closebanner = !0, this.gonavigate = !1;
        }
        return o(t, [ {
            key: "init",
            value: function(t) {
                var e, i, a = this;
                window.GPC || (Laya.Browser.onAndroid ? (e = GA.Platform.Android, i = this.androidAppid) : Laya.Browser.onIOS && (e = GA.Platform.iOS, 
                i = this.iosAppid), window.GPC = {
                    appid: i,
                    isPreview: !1,
                    uuid: this.nativeUUID,
                    platform: e
                });
                GA.init({
                    isPreview: GPC.isPreview,
                    platform: GPC.platform,
                    engine: GA.EngineType.LayaAir,
                    appId: GPC.appid,
                    channelKey: this.channelKey,
                    uuid: GPC.uuid,
                    resolution: {
                        width: 720,
                        height: 1280
                    },
                    sharePath: this.channelKey + "=001",
                    debugLog: !0
                }).then(function() {
                    if (dt.isWeChat()) {
                        if (!GA.Info.isPreview) {
                            GA.initRewardVideoAd([ "adunit-b795e6c572144121" ]), a.initCustomAD(), a.loadBanner("adunit-344dc73662fd61b3"), 
                            a.initInterstitialAd("adunit-45e0c16f41ba7215");
                            var e = Laya.stage.width / GA.PA.getSystemInfoSync().designPixelRatio;
                            a.addCustomAd("adunit-84f170c3c8d7ebd1", "top", e, 0);
                        }
                    } else if (dt.isOPPO()) {
                        GA.initRewardVideoAd([ "467038" ]), a.getCity(), GA.Info.isPreview || GA.initBannerAd({
                            adId: "467035"
                        }), OppoADM.initGamePortalAd("467039"), console.log("GA.PA.getSystemInfoSync()", GA.PA.getSystemInfoSync());
                        var i = 1220 / GA.PA.getSystemInfoSync().designPixelRatio + GA.PA.getMenuButtonBoundingClientRect().bottom;
                        console.log("height", i), OppoADM.initGameBannerAd(), GA.Info.isPreview || GA.Info.underCheck || (OppoADM.initNativeAd("467036"), 
                        dt.initNativeAd("467037"));
                    } else dt.isVivo() && (GA.initRewardVideoAd([ "43295c2bf0df433fb7ecf4662b240bbf" ]), 
                    a.getCity(), GA.Info.isPreview || GA.initBannerAd({
                        adId: "5e7e69c90b1e470aa9355ad50535d313"
                    }), console.log("GA.PA.getSystemInfoSync()", GA.PA.getSystemInfoSync()), a.initInterstitialAd("7036a12f7d6d4ae5a6d508ea68f87125"), 
                    GA.Info.isPreview || GA.Info.underCheck || OppoADM.initNativeAd("d4db4aff8abd4ea0a2ef5f6a3c7b3c60"));
                    GA.Info.isPreview ? (a.setOpenId(a.testOpenid), t && t()) : GA.getOpenId(function(e, i) {
                        t && t();
                    });
                }).catch(function(t) {
                    console.log("GA init failed. " + t);
                });
            }
        }, {
            key: "initInterstitialAd",
            value: function(t) {
                this.adUnitId = t;
            }
        }, {
            key: "showInterstitialAd",
            value: function() {
                var t = GA.PA.createInterstitialAd({
                    adUnitId: "adunit-53806a18aee41796"
                });
                GA.isPlatform([ GA.Platform.Vivo, GA.Platform.Kwaigame ]) ? t.show().then(function() {
                    GA.log("InterstitialAd show");
                }).catch(function(t) {
                    GA.PA.showToast({
                        title: "插屏加载失败",
                        icon: "none"
                    }), GA.log("InterstitialAd fail", JSON.stringify(t));
                }) : GA.isPlatform([ GA.Platform.ByteDance ]) ? t.load().then(function() {
                    t.show().then(function() {
                        GA.log("InterstitialAd show");
                    });
                }).catch(function(t) {
                    GA.log(t);
                }) : (t.onError(function(t) {
                    GA.log("InterstitialAd error", t);
                }), t.onLoad(function() {
                    GA.log("InterstitialAd onLoad"), t.show().catch(function(t) {
                        GA.error("show", t);
                    });
                }), t.load().catch(function(t) {
                    GA.error("InterstitialAd err", t);
                }));
            }
        }, {
            key: "isLongScreen",
            value: function() {
                return Laya.stage.height / Laya.stage.width > 1.9;
            }
        }, {
            key: "isWidthScreen",
            value: function() {
                return Laya.stage.width / Laya.stage.height > 1.9;
            }
        }, {
            key: "setOpenId",
            value: function(t) {
                GA.Info.openId = t;
            }
        }, {
            key: "initCustomAD",
            value: function() {
                var t = GA.PA.getSystemInfoSync(), e = 1220 / GA.PA.getSystemInfoSync().designPixelRatio + GA.PA.getMenuButtonBoundingClientRect().bottom;
                GA.PA.getMenuButtonBoundingClientRect().bottom, console.log("info", t), console.log("height", e), 
                console.log("info.screenHeight", t.screenHeight), this.addCustomAd("adunit-1614d74e2389c922", "top-left", 100, 0), 
                this.addCustomAd("adunit-bceaf0ad970566f1", "top-right", t.screenWidth - 170, 0), 
                this.addCustomAd("adunit-b1825b19dbabe33a", "down", t.screenWidth / 2 - 180, t.screenHeight - 90), 
                this.addCustomAd("adunit-ba6e669bbf5da1d9", "one", t.screenWidth / 2 - 100, 0);
            }
        }, {
            key: "showCustomAdByTag",
            value: function(t) {
                var e = this.customAds.get(t);
                return !!e && (this.startgame && e.show(), !0);
            }
        }, {
            key: "reliveshowCustomAdByTag",
            value: function(t) {
                var e = this.customAds.get(t);
                return !!e && (e.show(), !0);
            }
        }, {
            key: "hideCustomAdByTag",
            value: function(t) {
                var e = this, i = this.customAds.get(t);
                i ? i.hide() : Laya.timer.once(300, this, function() {
                    (i = e.customAds.get(t)) && i.hide();
                });
            }
        }, {
            key: "login",
            value: function(t) {
                var e = "";
                if (dt.isWeChat()) {
                    var i = GA.PA.getLaunchOptionsSync();
                    console.log("options========", i), i.query.openid && (e = i.query.openid);
                }
                "" != e ? GA.request({
                    url: this.requestUrl + "login/reqLogin",
                    data: {
                        openid: GA.Info.openId,
                        channel: GA.Info.channelId,
                        scence: GA.Info.scene,
                        nickname: GA.Info.nickname,
                        headicon: GA.Info.avatar,
                        shareType: "invite",
                        sourceOpenid: e
                    },
                    method: "POST",
                    success: function(e) {
                        console.log("res:=======　", e), console.log("openId:", GA.Info.openId), 0 == e.data.code && (GA.setUserId(e.data.data.userId), 
                        console.log("userId:", GA.Info.uid), GameData.initWithData(e.data.data.data), dt.uploadCheatScore("login"), 
                        t());
                    }
                }) : GA.request({
                    url: this.requestUrl + "login/reqLogin",
                    data: {
                        openid: GA.Info.openId,
                        channel: GA.Info.channelId,
                        scence: GA.Info.scene,
                        nickname: GA.Info.nickname,
                        headicon: GA.Info.avatar
                    },
                    method: "POST",
                    success: function(e) {
                        console.log("openId:", GA.Info.openId), 1 && (GA.setUserId(""), 
                        console.log("userId:", GA.Info.uid), GameData.initWithData(e.data.data.data), dt.uploadCheatScore("login"), 
                        t());
                    }
                });
            }
        }, {
            key: "vibrateShort",
            value: function() {
                dt.shock && (GA.Info.isPreview || GA.PA.vibrateShort({}));
            }
        }, {
            key: "vibrateLong",
            value: function() {
                dt.shock && (GA.Info.isPreview || GA.PA.vibrateLong({}));
            }
        }, {
            key: "addCustomAd",
            value: function(t, e, i, a) {
                var n = this;
                console.log("designPixelRatio", GA.PA.getSystemInfoSync().designPixelRatio);
                var s, o = a, r = i;
                s = "top" == e ? GA.PA.createCustomAd({
                    adUnitId: "adunit-6ad40a6802dc6683",
                    style: {
                        left: r,
                        top: o,
                        width: 360
                    }
                }) : GA.PA.createCustomAd({
                    adUnitId: "adunit-6ad40a6802dc6683",
                    style: {
                        left: r,
                        top: o
                    }
                }), console.log("customAd", o), this.customAds.set(e, s), s.onError(function(t) {
                    "top" == e && (n.createtoperror = !0), console.error(t), n.customAds.delete(e);
                });
            }
        }, {
            key: "getCity",
            value: function() {
                var t = this;
                GA.request({
                    url: this.requestUrl + "/ip/getCity",
                    method: "POST",
                    success: function(e) {
                        var i = e.data.data.cityName;
                        t.city = i;
                    }
                });
            }
        }, {
            key: "addDes",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = arguments.length > 1 ? arguments[1] : void 0;
                GA.PA.hasShortcutInstalled({
                    success: function(i) {
                        0 == i ? GA.PA.installShortcut({
                            success: function() {
                                e && e(), GA.PA.showToast({
                                    title: "图标创建成功",
                                    icon: "none"
                                });
                            },
                            fail: function() {
                                e && e();
                            },
                            complete: function() {}
                        }) : t && GA.PA.showToast({
                            title: "图标已存在!",
                            icon: "none"
                        });
                    },
                    fail: function(t) {},
                    complete: function() {}
                });
            }
        }, {
            key: "loadBanner",
            value: function(t, e) {
                var i = this;
                var barr = ["adunit-65b83c0023ab152a","adunit-e57422c57fa815a4","adunit-b16ec1e314a0ffb5","adunit-e9a20e9cdc4fc41e","adunit-f9f3250d583334c9"];
                if (this.bannerId = t, e && (this.bannerRefInterval = e), dt.isWeChat() && !GA.Info.isPreview) {
                    this.haveBanner = !0, this.bannerAD && this.bannerAD.destroy();
                    var a = GA.PA.getSystemInfoSync(), n = a.screenWidth / 2, s = 1, o = a.screenWidth < a.screenHeight ? a.screenWidth : 300;
                    dt.isIPad() && o > 300 && (s = .8), console.log("scale", s), console.log("top", a.screenHeight - 100), 
                    console.log("width", a.screenWidth * s), this.bannerAD = GA.PA.createBannerAd({
                        adUnitId: barr[Math.floor(Math.random()*5)],
                        adIntervals: this.bannerRefInterval,
                        style: {
                            left: n,
                            top: a.screenHeight - 100,
                            width: a.screenWidth * s,
                            height: 100
                        }
                    }), this.bannerAD.onResize(function(t) {
                        try {
                            console.log("res.height=" + t.height), i.bannerAD.style.height = t.height, i.bannerHeight = t.height, 
                            i.refreshBannerPos();
                        } catch (t) {}
                    }), this.bannerAD.onLoad(function(t) {
                        console.log("banner重新加载=========="), i.closebanner && (console.log("banner重置关闭=========="), 
                        Laya.timer.once(300, i, function() {
                            i.bannerAD.hide();
                        }));
                    }), this.bannerAD.onError(function(t) {
                        console.error(t), i.haveBanner = !1;
                    });
                }
            }
        }, {
            key: "refreshBannerPos",
            value: function() {
                if (this.bannerAD) {
                    var t = GA.PA.getSystemInfoSync(), e = 1, i = t.screenWidth < t.screenHeight ? t.screenWidth : 300;
                    GA.isPlatform([ GA.Platform.OPPO, GA.Platform.Vivo ]) ? e = 1 : dt.isWeChat() && i > 300 && dt.isIPad() && (e = .8);
                    try {
                        var a = (t.screenWidth - i * e) / 2;
                        dt.isByteDance() && t.screenWidth > t.screenHeight && (a = 0);
                        var n = this.bannerAD.style;
                        n.left = a, n.width = i * e, n.height && (n.top = t.screenHeight - n.height), this.bannerAD.style = n, 
                        console.log("banner   ", n);
                    } catch (t) {}
                }
            }
        }, {
            key: "showBanner",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this.bannerAD) {
                    if (this.closebanner = !1, console.log("有closebanner false=========="), this.haveBanner) {
                        console.log("有banner显示==========");
                        var e = GA.PA.getSystemInfoSync();
                        return this.bannerAD.style.width = t ? .8 * e.screenWidth : e.screenWidth, this.showBannerTimes++, 
                        this.bannerAD.show(), !0;
                    }
                    return !1;
                }
            }
        }, {
            key: "closeBannerWithTimes",
            value: function(t) {
                this.hideCustomAdByTag("down"), this.closebanner = !0, this.bannerAD && (console.log("关闭banner　=========="), 
                this.bannerAD.hide());
            }
        }, {
            key: "isOPPO",
            value: function() {
                return GA.isPlatform(GA.Platform.OPPO);
            }
        }, {
            key: "isVivo",
            value: function() {
                return GA.isPlatform(GA.Platform.Vivo);
            }
        }, {
            key: "isOPPOAndroid",
            value: function() {
                return !(!GA.isPlatform(GA.Platform.Android) || GA.Info.distributionChannel != GA.DistributionChannel.OPPO);
            }
        }, {
            key: "isNative",
            value: function() {
                return !!GA.isPlatform([ GA.Platform.Android, GA.Platform.iOS ]);
            }
        }, {
            key: "isKwaigame",
            value: function() {
                return GA.isPlatform(GA.Platform.Kwaigame);
            }
        }, {
            key: "isWeChat",
            value: function() {
                return GA.isPlatform(GA.Platform.WeChat);
            }
        }, {
            key: "isByteDance",
            value: function() {
                return GA.isByteDance();
            }
        }, {
            key: "rewardOperation",
            value: function(t, e, i, a, n) {
                Laya.SoundManager.musicMuted = !0, e && dt.uploadCheatScore("videoSuccess"), GA.rewardOperation({
                    tag: t,
                    byVideo: e,
                    page: n,
                    result: function(t) {
                        Laya.SoundManager.musicMuted = !1, t.reward ? (e && dt.uploadCheatScore("videoEnd"), 
                        GameData.maxTodyVideo++, GameData.flashSale[5]++, i()) : a && a();
                    }
                });
            }
        }, {
            key: "loadSubpackage",
            value: function(t, e) {
                var i = this;
                GA.PA.loadSubpackage({
                    name: t,
                    success: function(t) {
                        e && e();
                    },
                    fail: function(a) {
                        console.log("分包加载失败", a), GA.PA.showModal({
                            title: "提示",
                            content: "游戏分包下载失败，点击重试",
                            showCancel: !1,
                            confirmText: "重试",
                            success: function() {
                                i.loadSubpackage(t, e);
                            }
                        });
                    },
                    complete: function() {}
                }) || e && e();
            }
        }, {
            key: "navigateToMiniProgram",
            value: function(t, e, i, a, n) {
                GA.Info.isPreview || (i && GA.clickEvent(i, "导量", "navigation"), dt.uploadCheatScore("clickRedirect"), 
                GA.PA.navigateToMiniProgram({
                    appId: e.appid,
                    pkgName: e.appid,
                    path: e.path,
                    success: function(i) {
                        dt.gonavigate = !0, GA.saveRedirect(t, e.appid, e.path), a && (dt.uploadCheatScore("confirmRedirect"), 
                        a(i));
                    },
                    fail: function(t) {
                        n && n();
                    }
                }));
            }
        }, {
            key: "pushEvent",
            value: function(t, e, i) {
                this.pushEvents([ {
                    eventId: t,
                    detail: e,
                    extraNum: i
                } ]);
            }
        }, {
            key: "pushEvents",
            value: function(t) {
                GA.sentLogs(t);
            }
        }, {
            key: "showModal",
            value: function(t) {
                GA.Info.isPreview || GA.PA.showModal(t);
            }
        }, {
            key: "showLoading",
            value: function(t) {
                GA.Info.isPreview || GA.PA.showLoading({
                    title: t || "加载中...",
                    mask: !0
                });
            }
        }, {
            key: "hideLoading",
            value: function() {
                GA.Info.isPreview || GA.PA.hideLoading({});
            }
        }, {
            key: "showH5Toast",
            value: function(t) {
                if (t && t.length > 0) {
                    var e = Laya.Pool.getItemByClass("toastImg", Laya.Image);
                    e.skin = "game/toast_bg.png", e.sizeGrid = "20,20,20,20", e.width = 30 * t.length + 40, 
                    e.height = 68, e.centerX = 0, e.centerY = 300, Laya.stage.addChild(e);
                    var i = Laya.Pool.getItemByClass("toastLabel", Laya.Label);
                    i.text = t, i.width = 30 * t.length, i.height = 36, i.align = "center", i.pos((e.width - i.width) / 2, (e.height - i.height) / 2), 
                    i.color = "#FFFFFF", i.fontSize = 30, e.addChild(i), Laya.timer.once(1500, null, function() {
                        e.removeSelf(), i.removeSelf(), Laya.Pool.recover("toastLabel", i), Laya.Pool.recover("toastImg", e);
                    });
                }
            }
        }, {
            key: "isH5Game",
            value: function() {
                return !!GA.isQuTouTiao();
            }
        }, {
            key: "isLowEndDevice",
            value: function() {
                if (dt.isWeChat()) {
                    var t = GA.PA.getSystemInfoSync();
                    if (console.log("设备等级：" + t.benchmarkLevel), !Laya.Browser.onAndroid) return !GA.isLongScreen();
                    if (t.benchmarkLevel < 21) return !0;
                }
                return !1;
            }
        }, {
            key: "isIPhoneX",
            value: function() {
                var t = GA.PA.getSystemInfoSync();
                return t.model.indexOf("iPhone X") >= 0 || t.model.indexOf("iPhone 12") >= 0 || t.model.indexOf("iPhone12") >= 0;
            }
        }, {
            key: "isIphone",
            value: function() {
                return GA.PA.getSystemInfoSync().platform.indexOf("ios") >= 0;
            }
        }, {
            key: "isIPad",
            value: function() {
                return GA.PA.getSystemInfoSync().model.indexOf("iPad") >= 0;
            }
        }, {
            key: "startRecorderVideo",
            value: function() {
                var t = this;
                if (!GA.Info.isPreview) if (this.isByteDance()) {
                    var e = GA.PA.getGameRecorderManager();
                    e.start({
                        duration: 300
                    }), e.onStop(function(e) {
                        t.videoPath = e.videoPath;
                    });
                } else this.isKwaigame() && GA.PA.getGameRecorder().start({});
            }
        }, {
            key: "stopRecorderVide",
            value: function() {
                var t;
                GA.Info.isPreview || (this.isByteDance() ? t = GA.PA.getGameRecorderManager() : this.isKwaigame() && (t = GA.PA.getGameRecorder()), 
                t && t.stop());
            }
        }, {
            key: "shareVideo",
            value: function(t, e) {
                if (!GA.Info.isPreview) if (this.isByteDance()) "" == this.videoPath ? GA.PA.showToast({
                    title: "对不起，录屏失败无法分享",
                    icon: "none"
                }) : (dt.pushEvent("TryShareVideo"), GA.PA.shareAppMessage({
                    channel: "video",
                    templateId: "",
                    query: this.channelKey + "=10002",
                    extra: {
                        videoPath: this.videoPath,
                        videoTopics: [ "搬砖我快乐", "卡日曲游戏" ],
                        withVideoId: !0,
                        createChallenge: !1
                    },
                    success: function(e) {
                        dt.pushEvent("ShareVideoSuccess"), t && t();
                    },
                    fail: function(t) {
                        dt.pushEvent("ShareVideoFailed"), e && e();
                    }
                })); else if (this.isKwaigame()) {
                    GA.PA.getGameRecorder().publishVideo({
                        callback: function(i) {
                            null == i || null == i ? t && t() : e && e();
                        },
                        mouldId: this.shareVideMouldId
                    });
                }
            }
        }, {
            key: "getNativeAdImgUrl",
            value: function() {
                return this.nativeAdShowTimes++, this.nativeAdShowTimes % this.nativeAdReportAdShowInterval == 0 && this.nativeAd && this.curNativeAdId && this.nativeAd.reportAdShow({
                    adId: this.curNativeAdId
                }), this.nativeAdImgUrl && (this.nativeAdImgUrl = this.nativeAdImgUrl.split("?")[0]), 
                this.nativeAdImgUrl;
            }
        }, {
            key: "nativeAdCheckRefresh",
            value: function() {
                this.nowReportAdShow = !1, (this.nativeAdShowTimes % this.nativeAdReportAdShowInterval != 0 || GA.Info.underCheck) && this.nativeAdImgUrl || (this.nativeAdImgUrl = null, 
                this.nativeAd && this.nativeAd.load());
            }
        }, {
            key: "showToast",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none", i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                GA.PA.showToast({
                    title: t,
                    icon: e,
                    mask: i
                });
            }
        }, {
            key: "nativeAdRefresh",
            value: function(t) {
                this.nowReportAdShow = !0, this.nativeAdOnLoadHandler = t, this.nativeAd && this.nativeAd.load();
            }
        }, {
            key: "onNativeAdLoad",
            value: function(t) {
                try {
                    var e = t.adList[0];
                    this.nativeAdImgUrl = e.iconUrlList[0], this.curNativeAdId = e.adId, console.log("成功，地址", this.nativeAdImgUrl), 
                    this.nowReportAdShow && this.nativeAd.reportAdShow({
                        adId: this.curNativeAdId
                    }), this.nativeAdOnLoadHandler && this.nativeAdOnLoadHandler.runWith(this.nativeAdImgUrl);
                } catch (t) {
                    t = null;//.handleException(t);
                    console.error("原生广告加载失败" + t);
                }
            }
        }, {
            key: "nativeAdReportAdClick",
            value: function() {
                this.nativeAd && this.curNativeAdId && this.nativeAd.reportAdClick({
                    adId: this.curNativeAdId
                });
            }
        }, {
            key: "showGamePortalAd",
            value: function() {
                this.gamePortalAd && (this.gamePortalAdIsLoad ? this.gamePortalAd && this.gamePortalAd.show() : (GA.PA.showToast({
                    title: "暂无广告！",
                    icon: "none",
                    mask: !1
                }), this.gamePortalAd && GA.isOPPO() && this.gamePortalAd.load()));
            }
        }, {
            key: "hideGamePortalAd",
            value: function() {
                this.gamePortalAd && dt.isVivo() && this.gamePortalAd.hide();
            }
        }, {
            key: "showoppobanner",
            value: function() {
                OppoADM.showGameBannerAd(Laya.Handler.create(this, function(t) {
                    console.log("显示banner"), GA.showBanner();
                }));
            }
        }, {
            key: "hideoppobanner",
            value: function() {
                OppoADM.hideGameBannerAd(), GA.hideBanner();
            }
        }, {
            key: "initGamePortalAd",
            value: function(t, e) {
                var i = this;
                GA.Info.isPreview || (console.log("准备创建九宫格广告"), GA.isOPPO() ? this.gamePortalAd = GA.PA.createGamePortalAd({
                    adUnitId: t
                }) : GA.isVivo() && (this.gamePortalAd = GA.PA.createBoxPortalAd({
                    posId: t,
                    marginTop: e
                })), this.gamePortalAd.onClose(function() {
                    console.log("用户关闭九宫"), i.gamePortalAdIsLoad = !1, GA.isOPPO() && i.gamePortalAd.load();
                }), this.gamePortalAd.onError(function(t) {
                    console.log("九宫格广告加载失败"), console.error(t);
                }), this.gamePortalAd.onLoad(function() {
                    console.log("九宫格广告加载成功"), i.gamePortalAdIsLoad = !0;
                }), GA.isOPPO() && this.gamePortalAd.load());
            }
        }, {
            key: "initNativeAd",
            value: function(t) {
                var e = this;
                this.nativeAd = GA.PA.createNativeAd({
                    adUnitId: t
                }), this.nativeAd.onLoad(function(t) {
                    e.onNativeAdLoad(t);
                }), this.nativeAd.onError(function(t) {
                    Laya.timer.once(2e4, e, function() {
                        e.nativeAd.load();
                    });
                    try {
                        console.error("原生广告加载失败1" + JSON.stringify(t));
                    } catch (t) {
                        t = null;//.handleException(t);
                        console.error("原生广告加载失败" + t);
                    }
                }), this.nativeAd && this.nativeAd.load();
            }
        }, {
            key: "offsetY",
            get: function() {
                return dt.isWeChat() && !GA.Info.isPreview ? (GA.PA.getMenuButtonBoundingClientRect().top + GA.PA.getMenuButtonBoundingClientRect().height / 2) * GA.PA.getSystemInfoSync().designPixelRatio : 100;
            }
        }, {
            key: "uploadCheatShow",
            value: function(t) {
                GA.isWeChat() && (dt.pushEvent("骗点展示", {
                    "位置": t
                }), GA.request({
                    url: dt.requestUrl + "cheatClick/triger",
                    data: {
                        userId: GA.Info.uid,
                        position: t
                    },
                    method: "POST",
                    success: function(t) {
                        0 == t.data.code && (GameInfo.cheatInfo = t.data.data);
                    }
                }));
            }
        }, {
            key: "uploadCheatScore",
            value: function(t) {
                GA.isWeChat && GA.request({
                    url: dt.requestUrl + "cheatClick/action",
                    data: {
                        userId: GA.Info.uid,
                        action: t,
                        scene: GA.Info.scene
                    },
                    method: "POST",
                    success: function(t) {
                        0 == t.data.code && (GameInfo.cheatInfo = t.data.data);
                    },
                    fail: function(t) {
                        console.log("失败", t);
                    }
                });
            }
        }, {
            key: "getinvite",
            value: function() {
                GA.request({
                    url: "https://game.17tcw.com/default/extra/getInviteeList",
                    data: {
                        userid: GA.Info.uid
                    },
                    method: "POST",
                    success: function(t) {
                        0 == t.data.code && (console.log("resgetinvite====", t), GD.InviteeList = t.data.data);
                    },
                    fail: function(t) {
                        console.log("resgetinvite　====", t);
                    }
                });
            }
        } ]), t;
    }())();
    window.G = dt;
    var ct = new (function() {
        function t() {
            s(this, t), this.AIconfig = [], this.Battleconfig = [], this.upconfig = [], this.rewardconfig = [], 
            this.taskconfig = [], this.skinconfig = [], this.snakePrice = [], this.snakeLevel = [], 
            this.firstsignconfig = [], this.loopsignconfig = [], this.loopsecondsign = [], this.fragmentArray = [], 
            this.timereward = [], this.endlessreward = [], this.champion = [], this.levelconfig = [], 
            this.fragmentconfig = [], this.TimeTask = [], this.fragment_weights = 0, this.timelimitedreward = [], 
            this.luckconfig = [], this.invitationconfig = [], this.grand = [], this.plain = [], 
            this.InviteeList = [];
        }
        return o(t, [ {
            key: "initData",
            value: function(t) {
                var e = this, i = t.data.data;
                if (ct.AIconfig = Papa.parse(i.AIconfig, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.Battleconfig = Papa.parse(i.Battleconfig, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.upconfig = Papa.parse(i.upconfig, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.rewardconfig = Papa.parse(i.rewardconfig, {
                    header: !0,
                    dynamicTyping: !0
                }).data, i.taskconfig1 && (ct.taskconfig = Papa.parse(i.taskconfig1, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.taskconfig.splice(0, 1)), i.newchampion && (ct.champion = Papa.parse(i.newchampion, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.champion.splice(0, 1)), i.levelconfig && (ct.levelconfig = Papa.parse(i.levelconfig, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.levelconfig.splice(0, 1)), i.bddfragmentconfig) {
                    ct.fragmentconfig = Papa.parse(i.bddfragmentconfig, {
                        header: !0,
                        dynamicTyping: !0
                    }).data, ct.fragmentconfig.splice(0, 1);
                    for (var a = 0; a < ct.fragmentconfig.length; a++) ct.fragment_weights += ct.fragmentconfig[a].weight;
                }
                if (i.bddskinconfig) {
                    ct.skinconfig = Papa.parse(i.bddskinconfig, {
                        header: !0,
                        dynamicTyping: !0
                    }).data, ct.skinconfig.splice(0, 1);
                    for (var n = [], s = [], o = 0; o < ct.skinconfig.length; o++) if (-1 != GameData.unlockskin.indexOf(ct.skinconfig[o].skinnum) ? n.push(ct.skinconfig[o]) : s.push(ct.skinconfig[o]), 
                    5 == ct.skinconfig[o].type) {
                        var r = {
                            id: ct.skinconfig[o].id,
                            name: ct.skinconfig[o].name,
                            num: 0
                        };
                        this.fragmentArray.push(r);
                    }
                    ct.skinconfig = n.concat(s);
                }
                if (i.FreeRewardconfig) {
                    var h = Papa.parse(i.FreeRewardconfig, {
                        header: !0,
                        dynamicTyping: !0
                    }).data[1];
                    ct.FreeRewardconfig = h;
                }
                if (i.gameconfig) {
                    var l = Papa.parse(i.gameconfig, {
                        header: !0,
                        dynamicTyping: !0
                    }).data[1];
                    ct.playgameconfig = l;
                    var d = ct.playgameconfig.newplaygame;
                    ct.playgameconfig.newplaygame = d.split(","), ct.playgameconfig.newplaygame = ct.playgameconfig.newplaygame.map(Number), 
                    d = ct.playgameconfig.secendplay, ct.playgameconfig.secendplay = d.split(","), ct.playgameconfig.secendplay = ct.playgameconfig.secendplay.map(Number), 
                    d = ct.playgameconfig.oldplay, ct.playgameconfig.oldplay = d.split(","), ct.playgameconfig.oldplay = ct.playgameconfig.oldplay.map(Number), 
                    d = ct.playgameconfig.warnewplaygame, ct.playgameconfig.warnewplaygame = d.split(","), 
                    ct.playgameconfig.warnewplaygame = ct.playgameconfig.warnewplaygame.map(Number), 
                    d = ct.playgameconfig.timelimitplaygame, ct.playgameconfig.timelimitplaygame = d.split(","), 
                    ct.playgameconfig.timelimitplaygame = ct.playgameconfig.timelimitplaygame.map(Number), 
                    d = ct.playgameconfig.oldtimelimitplay, ct.playgameconfig.oldtimelimitplay = d.split(","), 
                    ct.playgameconfig.oldtimelimitplay = ct.playgameconfig.oldtimelimitplay.map(Number);
                }
                if (i.TimeTask && (ct.TimeTask = Papa.parse(i.TimeTask, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.TimeTask.splice(0, 1)), i.newtimelimitedreward) {
                    ct.timelimitedreward = Papa.parse(i.newtimelimitedreward, {
                        header: !0,
                        dynamicTyping: !0
                    }).data, ct.timelimitedreward.splice(0, 1);
                    for (var c = [], m = [], u = [], g = 0; g < 7; g++) {
                        u = [], m = [], c = [], c = ct.timelimitedreward[g].task.split("&");
                        for (var y = 0; y < 4; y++) c[y] = c[y].split(","), u[y] = c[y].map(Number);
                        m = ct.timelimitedreward[g].reward.split(","), ct.timelimitedreward[g].reward = m.map(Number), 
                        ct.timelimitedreward[g].task = u;
                    }
                }
                i.snakePrice && (ct.snakePrice = Papa.parse(i.snakePrice, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.snakePrice.splice(0, 1)), i.snakeLevel && (ct.snakeLevel = Papa.parse(i.snakeLevel, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.snakeLevel.splice(0, 1)), i.loopfirstsign && (ct.firstsignconfig = Papa.parse(i.loopfirstsign, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.firstsignconfig.splice(0, 1)), i.loopsecondsign && (ct.loopsecondsign = Papa.parse(i.loopsecondsign, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.loopsecondsign.splice(0, 1)), i.loopconfig && (ct.loopsignconfig = Papa.parse(i.loopconfig, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.loopsignconfig.splice(0, 1)), i.OPPORogueConfig && (ct.OPPORogueConfig = Papa.parse(i.OPPORogueConfig, {
                    header: !0,
                    dynamicTyping: !0
                }).data[1]), i.luckconfig && (ct.luckconfig = Papa.parse(i.luckconfig, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.luckconfig.splice(0, 1), ct.luckconfig.forEach(function(t) {
                    0 == t.attribute ? e.plain.push(t) : e.grand.push(t);
                })), i.invitationconfig && (ct.invitationconfig = Papa.parse(i.invitationconfig, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.invitationconfig.splice(0, 1)), i.endlessreward && (ct.endlessreward = Papa.parse(i.endlessreward, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.endlessreward.splice(0, 1)), i.timereward && (ct.timereward = Papa.parse(i.timereward, {
                    header: !0,
                    dynamicTyping: !0
                }).data, ct.timereward.splice(0, 1));
            }
        }, {
            key: "gettitle",
            value: function(t) {
                var e = "";
                switch (t) {
                  case 1:
                    e = "初始长度";
                    break;

                  case 2:
                    e = "成长速度";
                    break;

                  case 3:
                    e = "磁铁时间";
                    break;

                  case 4:
                    e = "无敌时间";
                    break;

                  case 5:
                    e = "吃星星收益";
                    break;

                  case 6:
                    e = "吃美食收益";
                    break;

                  case 7:
                    e = "每隔3分钟成长速度";
                }
                return e;
            }
        }, {
            key: "Haveshow",
            value: function(t) {
                return 0 != this.OPPORogueConfig.allRogue && !this.isCityBlacklist() && !GA.Info.underCheck;
            }
        }, {
            key: "stateClick",
            value: function(t) {
                return console.log("gameTime:" + t), !!(this.Haveshow(t) && this.OPPORogueConfig.dyaACMax > GameData.dayAudoClickADCount && OppoADM.nativeAdShowTimes % this.OPPORogueConfig.Ysfreq == 0);
            }
        }, {
            key: "isCityBlacklist",
            value: function() {
                return this.OPPORogueConfig.closecity.indexOf(G.city) >= 0;
            }
        } ]), t;
    }())();
    window.GD = ct;
    var mt, ut = new (function() {
        function t() {
            s(this, t), this.golds = 0, this.Diamonds = 0, this.detailNum = [], this.num = 1, 
            this.isNewPlayer = !1, this.lastSaveTime = 0, this.useskin = 0, this.olduseskin = 0, 
            this.trayskin = [], this.unlockskin = [ 0, 25 ], this.skinlevel = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
            this.addlongth = 0, this.addGrowth = 0, this.addMagnetTime = 0, this.maxtime = 0, 
            this.maxlength = 0, this.maxmust = 0, this.maxnum = 0, this.Todaymaxnum = 0, this.score = 0, 
            this.addreward = 0, this.coin_num = 0, this.diamond_num = 0, this.task = [], this.endlessnum = 0, 
            this.TimeLimitnum = 0, this.RegimentWarnum = 0, this.maxTodylength = 0, this.maxTodymust = 0, 
            this.maxTodyeatStarts = 0, this.maxTodyeatlevel = 0, this.maxTodyVideo = 0, this.navigateTogame = 0, 
            this.upRegimentWarnum = !1, this.upendlessnum = !1, this.upmaxTodylength = !1, this.upmaxTodymust = !1, 
            this.upmaxTodyeatStarts = !1, this.upmaxTodyeatlevel = !1, this.upmaxTodyVideo = !1, 
            this.signday = 0, this.selectsignday = 1, this.newSkin_SantaClaus = 0, this.newSkin_ChristmasTree = 0, 
            this.Crazyscore = 0, this.TimeLimitscore = 0, this.endlessscore = 0, this.Endlessmaxlength = 0, 
            this.TimeLimitmaxlength = 0, this.Crazynummaxlength = 0, this.TimeLimitReceive = 0, 
            this.endlessnumReceive = 0, this.CrazynumReceive = 0, this.championrewardindex = 0, 
            this.championrewardarray = [], this.championscore = 0, this.Segment = 0, this.minSegment = 0, 
            this.warReward = 0, this.endlessReward = 0, this.TimeLimitReward = 0, this.Logindays = 0, 
            this.daytime = 0, this.noinfo = !1, this.nickname = "", this.avatar = "", this.luckarray = [], 
            this.Receiveluckarray = [ 0, 0, 0, 0, 0, 0 ], this.luckindex = 0, this.istoday = !1, 
            this.flashSaleday = 0, this.todaytasknum = [ 0, 0, 0, 0 ], this.todaytask = [ 0, 0, 0, 0 ], 
            this.flashSale = [ 0, 0, 0, 0, 0, 0, 0, 0 ], this.ActivityCompletion = [ 0, 0, 0, 0, 0, 0, 0, 0 ], 
            this.firstflash = !1, this.dayAudoClickADCount = 0, this.propArray = [ {
                id: 99,
                name: "甜甜礼包",
                num: 0
            }, {
                id: 100,
                name: "虎年大礼包",
                num: 0
            } ], this.shareArray = [], this.sharenum = 0, this.BlindboxNum = 0;
        }
        return o(t, [ {
            key: "initWithData",
            value: function(t) {
                try {
                    var e = JSON.parse(t);
                    e.Crazyscore && (this.Crazyscore = e.Crazyscore), e.CrazynumReceive && (this.CrazynumReceive = e.CrazynumReceive), 
                    e.Crazynummaxlength && (this.Crazynummaxlength = e.Crazynummaxlength), e.sharenum && (this.sharenum = e.sharenum), 
                    e.shareArray && (this.shareArray = e.shareArray), e.Endlessmaxlength && (this.Endlessmaxlength = e.Endlessmaxlength), 
                    e.TimeLimitmaxlength && (this.TimeLimitmaxlength = e.TimeLimitmaxlength), e.Todaymaxnum && (this.Todaymaxnum = e.Todaymaxnum), 
                    e.dayAudoClickADCount && (this.dayAudoClickADCount = e.dayAudoClickADCount), e.BlindboxNum && (this.BlindboxNum = e.BlindboxNum), 
                    e.luckindex && (this.luckindex = e.luckindex), e.Receiveluckarray && (this.Receiveluckarray = e.Receiveluckarray), 
                    e.firstflash && (this.firstflash = e.firstflash), e.flashSale && (this.flashSale = e.flashSale), 
                    e.ActivityCompletion && (this.ActivityCompletion = e.ActivityCompletion), e.daytime && (this.daytime = e.daytime), 
                    e.istoday && (this.istoday = e.istoday), e.flashSaleday && (this.flashSaleday = e.flashSaleday), 
                    e.todaytask && (this.todaytask = e.todaytask), e.noinfo && (this.noinfo = e.noinfo), 
                    e.propArray && (this.propArray = e.propArray), e.luckarray && (this.luckarray = e.luckarray), 
                    e.nickname && (this.nickname = e.nickname), e.avatar && (this.avatar = e.avatar), 
                    e.warReward && (this.warReward = e.warReward), e.endlessReward && (this.endlessReward = e.endlessReward), 
                    e.TimeLimitReward && (this.TimeLimitReward = e.TimeLimitReward), e.Segment && (this.Segment = e.Segment), 
                    e.minSegment && (this.minSegment = e.minSegment), e.TimeLimitReceive && (this.TimeLimitReceive = e.TimeLimitReceive), 
                    e.endlessnumReceive && (this.endlessnumReceive = e.endlessnumReceive), e.TimeLimitscore && (this.TimeLimitscore = e.TimeLimitscore), 
                    e.endlessscore && (this.endlessscore = e.endlessscore), e.championrewardindex && (this.championrewardindex = e.championrewardindex), 
                    e.championrewardarray && (this.championrewardarray = e.championrewardarray), e.championscore && (this.championscore = e.championscore), 
                    e.lastSaveTime && (this.lastSaveTime = e.lastSaveTime), e.golds && (this.golds = e.golds), 
                    e.Diamonds && (this.Diamonds = e.Diamonds), e.useskin && (this.useskin = e.useskin), 
                    e.Logindays && (this.Logindays = e.Logindays), e.unlockskin && (this.unlockskin = e.unlockskin, 
                    -1 == this.unlockskin.indexOf(25) && this.unlockskin.push(25)), e.addlongth && (this.addlongth = e.addlongth), 
                    e.addGrowth && (this.addGrowth = e.addGrowth), e.addMagnetTime && (this.addMagnetTime = e.addMagnetTime), 
                    e.maxtime && (this.maxtime = e.maxtime), e.maxlength && (this.maxlength = e.maxlength), 
                    e.maxmust && (this.maxmust = e.maxmust), e.maxnum && (this.maxnum = e.maxnum), e.num && (this.num = e.num), 
                    e.score && (this.score = e.score), e.addreward && (this.addreward = e.addreward), 
                    e.coin_num && (this.coin_num = e.coin_num), e.diamond_num && (this.diamond_num = e.diamond_num), 
                    e.task && (this.task = e.task), e.endlessnum && (this.endlessnum = e.endlessnum), 
                    e.TimeLimitnum && (this.TimeLimitnum = e.TimeLimitnum), e.maxTodylength && (this.maxTodylength = e.maxTodylength), 
                    e.maxTodymust && (this.maxTodymust = e.maxTodymust), e.maxTodyeatStarts && (this.maxTodyeatStarts = e.maxTodyeatStarts), 
                    e.maxTodyeatlevel && (this.maxTodyeatlevel = e.maxTodyeatlevel), e.maxTodyVideo && (this.maxTodyVideo = e.maxTodyVideo), 
                    e.navigateTogame && (this.navigateTogame = e.navigateTogame), e.skinlevel && (this.skinlevel = e.skinlevel), 
                    e.trayskin && (this.trayskin = e.trayskin), e.signday && (this.signday = e.signday), 
                    e.selectsignday && (this.selectsignday = e.selectsignday), e.newSkin_SantaClaus && (this.newSkin_SantaClaus = e.newSkin_SantaClaus), 
                    e.newSkin_ChristmasTree && (this.newSkin_ChristmasTree = e.newSkin_ChristmasTree), 
                    e.detailNum && (this.detailNum = e.detailNum);
                } catch (t) {
                    t = null;//.handleException(t);
                    this.isNewPlayer = !0;
                }
            }
        }, {
            key: "passLevel",
            value: function() {
                this.upload();
            }
        }, {
            key: "upload",
            value: function(t) {
                this.lastSaveTime = Date.now();
                var e = JSON.stringify(this);
                GA.request({
                    method: "POST",
                    url: G.requestUrl + "game/reqSaveUser",
                    data: {
                        userId: GA.Info.uid,
                        data: e
                    },
                    success: function(e) {
                        200 == e.statusCode && (console.log("saveOk"), t && t());
                    },
                    fail: function(t) {
                        console.log("saveFinl" + JSON.stringify(t));
                    }
                });
            }
        } ]), t;
    }())();
    window.GameData = ut, function(t) {
        var e = function() {
            function t(e) {
                s(this, t), this.target = null, this.timeLine = null, this.actionTimes = 0, this.callbacks = null, 
                this.target = e, this.timeLine = new Laya.TimeLine(), Laya.timer.frameLoop(1, this, this.onUpdate);
            }
            return o(t, [ {
                key: "onUpdate",
                value: function() {
                    this.target && this.target.destroyed && this.clear();
                }
            }, {
                key: "clear",
                value: function() {
                    this.timeLine.destroy(), Laya.timer.clear(this, this.onUpdate);
                }
            }, {
                key: "countTimes",
                value: function() {
                    this.actionTimes++;
                }
            }, {
                key: "to",
                value: function(t, e, i) {
                    return this.timeLine.addLabel("action" + this.actionTimes, 0).to(this.target, e, t, i), 
                    this.countTimes(), this;
                }
            }, {
                key: "from",
                value: function(t, e, i) {
                    return this.timeLine.addLabel("action" + this.actionTimes, 0).from(this.target, e, t, i), 
                    this.countTimes(), this;
                }
            }, {
                key: "delay",
                value: function(t) {
                    return this.timeLine.from(this.target, {}, t), this.countTimes(), this;
                }
            }, {
                key: "call",
                value: function(t) {
                    return this.callbacks ? this.callbacks.push(t) : this.callbacks = [ t ], this.timeLine.addLabel("action" + this.actionTimes, 0), 
                    this.countTimes(), this;
                }
            }, {
                key: "callEnd",
                value: function() {
                    this.timeLine.on(Laya.Event.COMPLETE, this, this.onTimeLineComplete);
                }
            }, {
                key: "onTimeLineComplete",
                value: function() {
                    this.clear();
                }
            }, {
                key: "start",
                value: function(t) {
                    t || this.callEnd(), this.timeLine.play(0, t);
                }
            } ]), t;
        }();
        (mt || (mt = {})).tween = function(t) {
            return new e(t);
        };
    }(), window.TimeLine = mt;
    var gt = new (function() {
        function t() {
            s(this, t), this.gamePortalAdIsLoad = !1, this.nativeAdImgUrl = null, this.nativeAdShowTimes = 0, 
            this.nativeAdReportAdShowInterval = 1, this.nowReportAdShow = !1, this.updateNativeAd = 1, 
            this.nativeAdclick = 0;
        }
        return o(t, [ {
            key: "getNativeAdImgUrl",
            value: function() {
                return this.nativeAdShowTimes % this.nativeAdReportAdShowInterval == 0 && this.nativeAd && this.curNativeAdId && this.nativeAd.reportAdShow({
                    adId: this.curNativeAdId
                }), this.nativeAdShowTimes++, this.nativeAdImgUrl && (this.nativeAdImgUrl = this.nativeAdImgUrl.split("?")[0]), 
                this.nativeAdImgUrl;
            }
        }, {
            key: "nativeAdCheckRefresh",
            value: function() {
                this.nowReportAdShow = !1, (this.nativeAdclick % this.updateNativeAd != 0 || GA.Info.underCheck) && this.nativeAdImgUrl || (this.nativeAdImgUrl = null, 
                this.nativeAd && this.nativeAd.load());
            }
        }, {
            key: "errNativeADupdate",
            value: function() {
                this.nowReportAdShow = !1, this.nativeAdImgUrl = null, this.nativeAd && this.nativeAd.load();
            }
        }, {
            key: "onNativeAdLoad",
            value: function(t) {
                try {
                    var e = t.adList[0];
                    this.nativeAdImgUrl = e.imgUrlList[0], this.curNativeAdId = e.adId, console.log("成功，地址1", this.nativeAdImgUrl), 
                    this.nowReportAdShow && this.nativeAd.reportAdShow({
                        adId: this.curNativeAdId
                    }), this.nativeAdOnLoadHandler && this.nativeAdOnLoadHandler.runWith(this.nativeAdImgUrl);
                } catch (t) {
                    t = null;//.handleException(t);
                    console.error("原生广告加载失败" + t);
                }
            }
        }, {
            key: "nativeAdReportAdClick",
            value: function() {
                this.nativeAd && this.curNativeAdId && (this.nativeAdclick++, this.nativeAd.reportAdClick({
                    adId: this.curNativeAdId
                }));
            }
        }, {
            key: "nativeAdRefresh",
            value: function(t) {
                this.nativeAdOnLoadHandler = t, this.nativeAdCheckRefresh();
            }
        }, {
            key: "showGamePortalAd",
            value: function() {
                this.gamePortalAdIsLoad ? this.gamePortalAd && this.gamePortalAd.show() : (GA.PA.showToast({
                    title: "暂无广告！",
                    icon: "none",
                    mask: !1
                }), this.gamePortalAd && this.gamePortalAd.load());
            }
        }, {
            key: "initGamePortalAd",
            value: function(t) {
                var e = this;
                GA.Info.isPreview || (console.log("准备创建九宫格广告"), this.gamePortalAd = GA.PA.createGamePortalAd({
                    adUnitId: t
                }), this.gamePortalAd.onClose(function() {
                    console.log("用户关闭九宫"), e.gamePortalAdIsLoad = !1, e.gamePortalAd.load();
                }), this.gamePortalAd.onError(function(t) {
                    console.error(t);
                }), this.gamePortalAd.onLoad(function() {
                    console.log("九宫格广告加载成功"), e.gamePortalAdIsLoad = !0;
                }), this.gamePortalAd.load());
            }
        }, {
            key: "initNativeAd",
            value: function(t) {
                var e = this;
                this.nativeAd = qg.createNativeAd({
                    adUnitId: t
                }), this.nativeAd.onLoad(function(t) {
                    e.onNativeAdLoad(t);
                }), this.nativeAd.onError(function(t) {
                    Laya.timer.once(2e4, e, function() {
                        e.nativeAd.load();
                    });
                    try {
                        console.error("原生广告加载失败1" + JSON.stringify(t));
                    } catch (t) {
                        t = null;//.handleException(t);
                        console.error("原生广告加载失败" + t);
                    }
                }), this.nativeAd && this.nativeAd.load();
            }
        }, {
            key: "showGameBannerAd",
            value: function(t) {
                console.log("this.gameBannerAd", this.gameBannerAd), this.gameBannerAd && this.gameBannerAd.show().then(function() {
                    console.log("show success");
                }).catch(function(e) {
                    t && t.run(), console.log("show fail with:" + e.errCode + "," + e.errMsg);
                });
            }
        }, {
            key: "hideGameBannerAd",
            value: function() {
                this.gameBannerAd && this.gameBannerAd.hide();
            }
        }, {
            key: "initGameBannerAd",
            value: function() {
                GA.PA.getSystemInfoSync().designPixelRatio, GA.PA.getMenuButtonBoundingClientRect().bottom, 
                console.log("准备创建横幅广告"), GA.isOPPO() && (this.gameBannerAd = GA.PA.initGameBannerAd("467040", "467040", !1, {
                    top: (GA.Info.resolution.height - 340) / GA.PA.getSystemInfoSync().designPixelRatio,
                    left: (GA.Info.resolution.width / 2 - 350 * GA.PA.getSystemInfoSync().designPixelRatio) / GA.PA.getSystemInfoSync().designPixelRatio,
                    orientation: "horizontal"
                })), GA.isVivo() && (this.gameBannerAd || (this.gameBannerAd = qg.createBoxBannerAd({
                    posId: "c0e71c1d39c84fa09f4a37297b5b81b5"
                })));
            }
        }, {
            key: "addDes",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = arguments.length > 1 ? arguments[1] : void 0;
                GA.Info.isPreview || GA.PA.hasShortcutInstalled({
                    success: function(i) {
                        0 == i ? GA.PA.installShortcut({
                            success: function() {
                                e && e();
                            },
                            fail: function() {
                                e && e();
                            },
                            complete: function() {}
                        }) : t && GA.PA.showToast({
                            title: "图标已存在!",
                            icon: "none"
                        });
                    },
                    fail: function(t) {},
                    complete: function() {}
                });
            }
        } ]), t;
    }())();
    window.OppoADM = gt, window.GameInfo = new (function() {
        function t() {
            s(this, t);
        }
        return o(t, [ {
            key: "getCheatCount",
            value: function(t) {
                if (this.cheatInfo) {
                    console.log("looping:", this.cheatInfo);
                    var e = this.cheatInfo.postionLimitList;
                    console.log("looping:", e);
                    for (var i = 0; i < e.length; i++) if (e[i].position == t) return e[i].count;
                }
                return 0;
            }
        }, {
            key: "closeadtime",
            value: function() {
                G.closead = !0, Laya.timer.once(1e3 * GD.playgameconfig.infotime, this, function() {
                    G.closead = !1;
                });
            }
        }, {
            key: "clicknoinfotime",
            value: function() {
                GameData.noinfo && (GameData.isNewPlayer ? Date.now() - GameData.daytime > 1e3 * GD.playgameconfig.newinfotime && (GameData.noinfo = !1) : Date.now() - GameData.daytime > 1e3 * GD.playgameconfig.oldinfotime && (GameData.noinfo = !1));
            }
        } ]), t;
    }())(), new (function() {
        function t() {
            s(this, t);
            var e = 1, i = 1, a = Laya.Browser.clientWidth / Laya.Browser.clientHeight;
            Laya.Browser.onMiniGame && Laya.Browser.onMobile || (a = 1280 / 720), a < 1.7 ? (e = lt.width, 
            i = lt.width * Laya.Browser.clientHeight / Laya.Browser.clientWidth) : a > 1.8 ? (e = lt.height * Laya.Browser.clientWidth / Laya.Browser.clientHeight, 
            i = lt.height) : (i = lt.height, e = lt.width), window.Laya3D ? (Laya3D.init(e, i, null, Laya.Handler.create(this, this.initMain)), 
            Laya.stage.useRetinalCanvas = !0) : (Laya.init(e, i, Laya.WebGL), this.initMain());
        }
        return o(t, [ {
            key: "initMain",
            value: function() {
                Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), 
                Laya.stage.scaleMode = lt.scaleMode, Laya.stage.screenMode = lt.screenMode, Laya.stage.alignV = lt.alignV, 
                Laya.stage.alignH = lt.alignH, Laya.URL.exportSceneToJson = lt.exportSceneToJson, 
                (lt.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
                lt.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), lt.stat && Laya.Stat.show(), 
                console.log("Laya engine version ", Laya.version), console.log("Device Screen info:", Laya.Browser.clientWidth.toFixed(), "x", Laya.Browser.clientHeight.toFixed(), " Pixel:", Laya.Browser.width.toFixed(), "x", Laya.Browser.height.toFixed()), 
                console.log("Design Screen info:", Laya.stage.designWidth.toFixed(), "x", Laya.stage.designHeight.toFixed()), 
                console.log("Current Screen info:", Laya.stage.width.toFixed(), "x", Laya.stage.height.toFixed()), 
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
        }, {
            key: "onVersionLoaded",
            value: function() {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
            }
        }, {
            key: "onConfigLoaded",
            value: function() {
                Laya.Scene.open("scene/LoadScene.scene");
            }
        } ]), t;
    }())();
}();