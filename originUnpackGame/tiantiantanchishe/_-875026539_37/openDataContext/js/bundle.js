var t, e = (t = Object.setPrototypeOf || {
    __proto__: []
} instanceof Array && function(t, e) {
    t.__proto__ = e;
} || function(t, e) {
    for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
}, function(e, a) {
    function i() {
        this.constructor = e;
    }
    t(e, a), e.prototype = null === a ? Object.create(a) : (i.prototype = a.prototype, 
    new i());
});

!function t(e, a, i) {
    function r(o, s) {
        if (!a[o]) {
            if (!e[o]) {
                var h = "function" == typeof require && require;
                if (!s && h) return h(o, !0);
                if (n) return n(o, !0);
                var p = new Error("Cannot find module '" + o + "'");
                throw p.code = "MODULE_NOT_FOUND", p;
            }
            var l = a[o] = {
                exports: {}
            };
            e[o][0].call(l.exports, function(t) {
                return r(e[o][1][t] || t);
            }, l, l.exports, t, e, a, i);
        }
        return a[o].exports;
    }
    for (var n = "function" == typeof require && require, o = 0; o < i.length; o++) r(i[o]);
    return r;
}({
    1: [ function(t, e, a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./view/bigItem"), r = function() {
            function t() {}
            return t.init = function() {
                (0, Laya.ClassUtils.regClass)("view/bigItem.ts", i.default);
            }, t.width = 640, t.height = 1136, t.scaleMode = "fixedwidth", t.screenMode = "none", 
            t.alignV = "top", t.alignH = "left", t.startScene = "test/BigItem.scene", t.sceneRoot = "", 
            t.debug = !1, t.stat = !1, t.physicsDebug = !1, t.exportSceneToJson = !0, t;
        }();
        a.default = r, r.init();
    }, {
        "./view/bigItem": 5
    } ],
    2: [ function(t, e, a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./GameConfig"), r = t("./view/BigRank");
        new (function() {
            function t() {
                Laya.isWXOpenDataContext = !0, Laya.isWXPosMsg = !0, Laya.init(i.default.width, i.default.height, !1), 
                Laya.stage.scaleMode = i.default.scaleMode, Laya.stage.screenMode = Laya.Stage.SCALE_SHOWALL, 
                Laya.stage.alignV = i.default.alignV, Laya.stage.alignH = i.default.alignH, Laya.Browser.onMiniGame ? wx.onMessage(function(t) {
                    "res/atlas/rank.atlas" == t.url && Laya.loader.load("res/atlas/rank.atlas", Laya.Handler.create(this, this.onComplete));
                }.bind(this)) : Laya.loader.load("res/atlas/rank.atlas", Laya.Handler.create(this, this.onComplete));
            }
            return t.prototype.onComplete = function() {
                new r.default().init();
            }, t;
        }())();
    }, {
        "./GameConfig": 1,
        "./view/BigRank": 4
    } ],
    3: [ function(t, a, i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = Laya.View, n = Laya.Scene, o = Laya.ClassUtils.regClass;
        !function(t) {
            !function(t) {
                var a = function(t) {
                    function a() {
                        return t.call(this) || this;
                    }
                    return e(a, t), a.prototype.createChildren = function() {
                        t.prototype.createChildren.call(this), this.createView(a.uiView);
                    }, a.uiView = {
                        type: "Scene",
                        props: {
                            x: 0,
                            width: 1280,
                            height: 750
                        },
                        compId: 2,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 32,
                                x: 150,
                                width: 475,
                                visible: !1,
                                texture: "rank/bg.png",
                                height: 687
                            },
                            compId: 4
                        }, {
                            type: "List",
                            props: {
                                y: 149,
                                x: 150,
                                width: 467,
                                var: "_list",
                                vScrollBarSkin: " ",
                                spaceY: 5,
                                repeatX: 1,
                                height: 449,
                                elasticEnabled: !0
                            },
                            compId: 3,
                            child: [ {
                                type: "bigItem",
                                props: {
                                    y: 10,
                                    x: 12.5,
                                    runtime: "view/bigItem.ts",
                                    renderType: "render"
                                },
                                compId: 5
                            } ]
                        }, {
                            type: "Image",
                            props: {
                                y: 598,
                                x: 150,
                                skin: "rank/bottom.png"
                            },
                            compId: 6,
                            child: [ {
                                type: "Image",
                                props: {
                                    y: 9,
                                    x: 19,
                                    var: "myrank",
                                    skin: "rank/one.png"
                                },
                                compId: 7
                            }, {
                                type: "Label",
                                props: {
                                    y: 9,
                                    x: 21,
                                    width: 65,
                                    var: "myranknum",
                                    valign: "middle",
                                    text: "4",
                                    height: 100,
                                    fontSize: 80,
                                    color: "#496e8d",
                                    bold: !0,
                                    align: "center"
                                },
                                compId: 8
                            }, {
                                type: "Image",
                                props: {
                                    y: 15,
                                    x: 96,
                                    width: 80,
                                    var: "myimg_head",
                                    height: 80
                                },
                                compId: 9,
                                child: [ {
                                    type: "Sprite",
                                    props: {
                                        y: -1,
                                        x: -1,
                                        width: 82,
                                        renderType: "mask",
                                        height: 82
                                    },
                                    compId: 12
                                } ]
                            }, {
                                type: "Label",
                                props: {
                                    y: 28,
                                    x: 185,
                                    width: 216,
                                    var: "myname",
                                    valign: "middle",
                                    text: "名字",
                                    overflow: "scroll",
                                    height: 27,
                                    fontSize: 20,
                                    color: "#496e8d",
                                    bold: !0,
                                    align: "left"
                                },
                                compId: 10
                            }, {
                                type: "Label",
                                props: {
                                    y: 55,
                                    x: 185,
                                    wordWrap: !0,
                                    width: 216,
                                    var: "myscore",
                                    text: "最高长度:",
                                    height: 44,
                                    fontSize: 20,
                                    color: "#496e8d",
                                    bold: !0
                                },
                                compId: 11
                            } ]
                        }, {
                            type: "Image",
                            props: {
                                y: 112,
                                x: 162,
                                width: 442,
                                var: "title",
                                skin: "rank/title.png",
                                height: 43
                            },
                            compId: 13,
                            child: [ {
                                type: "Label",
                                props: {
                                    y: 6,
                                    x: 18,
                                    text: "排名",
                                    fontSize: 30,
                                    color: "#496e8d",
                                    bold: !0
                                },
                                compId: 14
                            }, {
                                type: "Label",
                                props: {
                                    y: 6.5,
                                    x: 97,
                                    text: "玩家",
                                    fontSize: 30,
                                    color: "#496e8d",
                                    bold: !0
                                },
                                compId: 15
                            }, {
                                type: "Label",
                                props: {
                                    y: 7.5,
                                    x: 208,
                                    width: 144,
                                    var: "pattern",
                                    text: "无尽模式",
                                    height: 27,
                                    fontSize: 30,
                                    color: "#496e8d",
                                    bold: !0
                                },
                                compId: 16,
                                child: [ {
                                    type: "Image",
                                    props: {
                                        y: -.5,
                                        width: 30,
                                        var: "downselect",
                                        skin: "rank/down.png",
                                        right: -10,
                                        height: 30
                                    },
                                    compId: 17
                                } ]
                            }, {
                                type: "Image",
                                props: {
                                    y: 43,
                                    x: 195,
                                    width: 148,
                                    visible: !1,
                                    var: "rankbolder",
                                    skin: "rank/bolder.png",
                                    sizeGrid: "12,16,13,13",
                                    height: 109
                                },
                                compId: 18,
                                child: [ {
                                    type: "Label",
                                    props: {
                                        y: 15,
                                        x: 14,
                                        var: "otherrank",
                                        text: "团战模式",
                                        fontSize: 30,
                                        color: "#496e8d",
                                        bold: !0
                                    },
                                    compId: 20
                                }, {
                                    type: "Label",
                                    props: {
                                        y: 63.5,
                                        x: 14,
                                        var: "scendrank",
                                        text: "团战模式",
                                        fontSize: 30,
                                        color: "#496e8d",
                                        bold: !0
                                    },
                                    compId: 21
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 3,
                                        x: 2,
                                        width: 143,
                                        var: "other",
                                        height: 50
                                    },
                                    compId: 22
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 54,
                                        x: 3,
                                        width: 141,
                                        var: "scend",
                                        rotation: 0,
                                        height: 49
                                    },
                                    compId: 23
                                }, {
                                    type: "Label",
                                    props: {
                                        y: 112,
                                        x: 14,
                                        var: "Crazyrank",
                                        text: "团战模式",
                                        fontSize: 30,
                                        color: "#496e8d",
                                        bold: !0
                                    },
                                    compId: 24
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 104,
                                        x: 2,
                                        width: 143,
                                        var: "Crazy",
                                        height: 50
                                    },
                                    compId: 25
                                } ]
                            } ]
                        } ],
                        loadList: [ "rank/bg.png", "rank/bottom.png", "rank/one.png", "rank/title.png", "rank/down.png", "rank/bolder.png" ],
                        loadList3D: []
                    }, a;
                }(n);
                t.BigUI = a, o("ui.test.BigUI", a);
                var i = function(t) {
                    function a() {
                        return t.call(this) || this;
                    }
                    return e(a, t), a.prototype.createChildren = function() {
                        t.prototype.createChildren.call(this), this.createView(a.uiView);
                    }, a.uiView = {
                        type: "View",
                        props: {
                            width: 442,
                            height: 100
                        },
                        compId: 2,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 0,
                                x: 0,
                                width: 442,
                                texture: "rank/other.png",
                                height: 100
                            },
                            compId: 7
                        }, {
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                visible: !1,
                                var: "my",
                                skin: "rank/my.png"
                            },
                            compId: 11
                        }, {
                            type: "Image",
                            props: {
                                y: 10,
                                x: 86,
                                width: 80,
                                var: "img_head",
                                height: 80
                            },
                            compId: 3,
                            child: [ {
                                type: "Sprite",
                                props: {
                                    y: -1,
                                    x: -1,
                                    width: 82,
                                    renderType: "mask",
                                    height: 82
                                },
                                compId: 10
                            } ]
                        }, {
                            type: "Label",
                            props: {
                                y: 19,
                                x: 178,
                                width: 246,
                                var: "othername",
                                valign: "middle",
                                text: "名字",
                                overflow: "scroll",
                                height: 27,
                                fontSize: 20,
                                color: "#496e8d",
                                bold: !0,
                                align: "left"
                            },
                            compId: 4
                        }, {
                            type: "Label",
                            props: {
                                y: 47,
                                x: 178,
                                wordWrap: !0,
                                width: 253,
                                var: "score",
                                text: "最高长度:",
                                height: 44,
                                fontSize: 20,
                                color: "#496e8d",
                                bold: !0
                            },
                            compId: 5
                        }, {
                            type: "Image",
                            props: {
                                y: 0,
                                x: 9,
                                var: "rank",
                                skin: "rank/one.png"
                            },
                            compId: 12
                        }, {
                            type: "Label",
                            props: {
                                y: 0,
                                x: 11,
                                width: 65,
                                var: "ranknum",
                                valign: "middle",
                                text: "4",
                                height: 100,
                                fontSize: 80,
                                color: "#496e8d",
                                bold: !0,
                                align: "center"
                            },
                            compId: 13
                        }, {
                            type: "Image",
                            props: {
                                y: 6.5,
                                x: 350,
                                visible: !1,
                                var: "send",
                                skin: "rank/send.png"
                            },
                            compId: 14
                        } ],
                        loadList: [ "rank/other.png", "rank/my.png", "rank/one.png", "rank/send.png" ],
                        loadList3D: []
                    }, a;
                }(r);
                t.BigItemUI = i, o("ui.test.BigItemUI", i);
            }(t.test || (t.test = {}));
        }(i.ui || (i.ui = {}));
    }, {} ],
    4: [ function(t, a, i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = function(t) {
            function a() {
                var e = t.call(this) || this;
                return e.LowEndDevice = !1, e.rankarray = [ 0, 1, 2, 3 ], e._key = "endless", e.arr = [], 
                e.width = Laya.stage.width, e.height = Laya.stage.height, e.pattern.on(Laya.Event.CLICK, e, e.onpattern), 
                e.other.on(Laya.Event.CLICK, e, e.showotherrank), e.scend.on(Laya.Event.CLICK, e, e.showscendrank), 
                e.Crazy.on(Laya.Event.CLICK, e, e.showcrazyrank), e.otherrank.text = "限时模式", e.scendrank.text = "团战模式", 
                e.Crazyrank.text = "疯狂模式", e.myrank.visible = !1, e.myranknum.visible = !1, e.myimg_head.skin = "", 
                e.myname.text = "", e.rankarray = [ 0, 1, 2, 3 ], e.myscore.text = "", e;
            }
            return e(a, t), a.prototype.onpattern = function() {
                this.rankbolder.visible ? (this.downselect.skin = "rank/down.png", this.rankbolder.visible = !1) : (this.rankbolder.visible = !0, 
                this.downselect.skin = "rank/up.png");
            }, a.prototype.showotherrank = function() {
                var t = this.rankarray.concat(), e = t[1], a = t[0];
                this.rankarray[0] = e, this.rankarray[1] = a, this.rankbolder.visible = !1, this.showpattem();
            }, a.prototype.showscendrank = function() {
                var t = this.rankarray.concat(), e = t[2], a = t[0];
                this.rankarray[0] = e, this.rankarray[2] = a, this.rankbolder.visible = !1, this.showpattem();
            }, a.prototype.showcrazyrank = function() {
                var t = this.rankarray.concat(), e = t[3], a = t[0];
                this.rankarray[0] = e, this.rankarray[3] = a, this.rankbolder.visible = !1, this.showpattem();
            }, a.prototype.showpattem = function() {
                this.downselect.skin = "rank/down.png";
                for (var t = 0; t < 4; t++) 0 == t ? 0 == this.rankarray[t] ? (this.pattern.text = "无尽模式", 
                this._key = "endless", this.getFriendData()) : 1 == this.rankarray[t] ? (this.pattern.text = "限时模式", 
                this._key = "TimeLimit", this.getFriendData()) : 2 == this.rankarray[t] ? (this.pattern.text = "团战模式", 
                this._key = "war", this.getFriendData()) : 3 == this.rankarray[t] && (this.pattern.text = "疯狂模式", 
                this._key = "Crazy", this.getFriendData()) : 1 == t ? 0 == this.rankarray[t] ? this.otherrank.text = "无尽模式" : 1 == this.rankarray[t] ? this.otherrank.text = "限时模式" : 2 == this.rankarray[t] ? this.otherrank.text = "团战模式" : 3 == this.rankarray[t] && (this.otherrank.text = "疯狂模式") : 2 == t ? 0 == this.rankarray[t] ? this.scendrank.text = "无尽模式" : 1 == this.rankarray[t] ? this.scendrank.text = "限时模式" : 2 == this.rankarray[t] ? this.scendrank.text = "团战模式" : 3 == this.rankarray[t] && (this.scendrank.text = "疯狂模式") : 3 == t && (0 == this.rankarray[t] ? this.Crazyrank.text = "无尽模式" : 1 == this.rankarray[t] ? this.Crazyrank.text = "限时模式" : 2 == this.rankarray[t] ? this.Crazyrank.text = "团战模式" : 3 == this.rankarray[t] && (this.Crazyrank.text = "疯狂模式"));
            }, a.prototype.init = function() {
                Laya.stage.addChild(this), this.setlist(this.arr), Laya.Browser.onMiniGame && wx.onMessage(this.recevieData.bind(this));
            }, a.prototype.getFriendData = function() {
                var t = this;
                wx.getFriendCloudStorage({
                    keyList: [ this._key ],
                    success: function(e) {
                        var i, r, n, o = [];
                        if (console.log("-----------------getFriendCloudStorage------------"), e.data) {
                            for (var s = 0; s < e.data.length; s++) (r = e.data[s]).KVDataList.length && (n = r.KVDataList[0]).key == t._key && (n = JSON.parse(n.value), 
                            (i = {}).avatarIP = r.avatarUrl, i.UserName = r.nickname, i.openID = r.openid, i.RankValue = n.wxgame.value1, 
                            i.update_time = n.wxgame.update_time, i._key = t._key, o.push(i));
                            for (o = o.sort(function(t, e) {
                                return e.RankValue - t.RankValue;
                            }), s = 0; s < o.length; s++) o[s].index = s + 1, o[s].openID == a.myopenid && t.showmyrank(o[s]);
                            t.setlist(o);
                        }
                    },
                    fail: function(t) {
                        console.log("------------------获取托管数据失败--------------------"), console.log(t);
                    }
                });
            }, a.prototype.showmyrank = function(t) {
                1 == t.index ? (this.myrank.visible = !0, this.myranknum.visible = !1, this.myrank.skin = "rank/one.png") : 2 == t.index ? (this.myrank.visible = !0, 
                this.myranknum.visible = !1, this.myrank.skin = "rank/two.png") : 3 == t.index ? (this.myrank.visible = !0, 
                this.myranknum.visible = !1, this.myrank.skin = "rank/three.png") : (this.myrank.visible = !1, 
                this.myranknum.visible = !0, this.myranknum.text = t.index + ""), this.myimg_head.skin = t.avatarIP, 
                this.myname.text = t.UserName, "war" == this._key ? this.myscore.text = "奖杯:" + t.RankValue : this.myscore.text = "最高长度:" + t.RankValue;
            }, a.prototype.recevieData = function(t) {
                switch (t.type) {
                  case "start":
                    this.rankarray = [ 0, 1, 2, 3 ], this.rankbolder.visible = !1, this.showpattem();
                    break;

                  case "openid":
                    a.myopenid = t.myopenid, t.LowEndDevice ? (this.LowEndDevice = !0, this.Crazy.visible = !1, 
                    this.Crazyrank.visible = !1, this.rankbolder.height = 109) : (this.LowEndDevice = !1, 
                    this.rankbolder.height = 157, this.Crazy.visible = !0, this.Crazyrank.visible = !0), 
                    this.getFriendData();
                }
            }, a.prototype.setSelfData = function(t) {
                var e = [], a = {
                    wxgame: {}
                };
                a.wxgame.value1 = t, a.wxgame.update_time = Laya.Browser.now(), e.push({
                    key: this._key,
                    value: JSON.stringify(a)
                }), wx.setUserCloudStorage({
                    KVDataList: e,
                    success: function(t) {
                        console.log("-----success:" + JSON.stringify(t));
                    },
                    fail: function(t) {
                        console.log("-----fail:" + JSON.stringify(t));
                    },
                    complete: function(t) {
                        console.log("-----complete:" + JSON.stringify(t));
                    }
                });
            }, a.prototype.setlist = function(t) {
                this._list.array = t, this._list.refresh();
            }, a.myopenid = "", a;
        }(t("../ui/layaMaxUI").ui.test.BigUI);
        i.default = r;
    }, {
        "../ui/layaMaxUI": 3
    } ],
    5: [ function(t, a, i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = t("../ui/layaMaxUI"), n = t("./BigRank"), o = function(t) {
            function a() {
                var e = t.call(this) || this;
                return e.openID = "", e;
            }
            return e(a, t), Object.defineProperty(a.prototype, "dataSource", {
                set: function(t) {
                    t && (1 == t.index ? (this.rank.visible = !0, this.ranknum.visible = !1, this.rank.skin = "rank/one.png") : 2 == t.index ? (this.rank.visible = !0, 
                    this.ranknum.visible = !1, this.rank.skin = "rank/two.png") : 3 == t.index ? (this.rank.visible = !0, 
                    this.ranknum.visible = !1, this.rank.skin = "rank/three.png") : (this.rank.visible = !1, 
                    this.ranknum.visible = !0, this.ranknum.text = t.index + ""), n.default.myopenid == t.openID ? this.my.visible = !0 : (this.send.visible = !0, 
                    this.my.visible = !1), this.img_head.skin = t.avatarIP, this.othername.text = t.UserName, 
                    "war" == t._key ? this.score.text = "奖杯:" + t.RankValue : this.score.text = "最高长度:" + t.RankValue, 
                    this.openID = t.openID, this.send.visible = !1);
                },
                enumerable: !0,
                configurable: !0
            }), a.prototype.modifyFeiend = function() {
                wx.modifyFriendInteractiveStorage({
                    key: "1",
                    opNum: 1,
                    operation: "add",
                    toUser: this.openID,
                    success: function(t) {
                        console.log("发送成功！" + JSON.stringify(t));
                    },
                    fail: function(t) {
                        console.log("err", t);
                    }
                });
            }, a;
        }(r.ui.test.BigItemUI);
        i.default = o;
    }, {
        "../ui/layaMaxUI": 3,
        "./BigRank": 4
    } ]
}, {}, [ 2 ]);