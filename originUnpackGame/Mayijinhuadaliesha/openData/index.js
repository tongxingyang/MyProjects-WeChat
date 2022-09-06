var e = require("../@babel/runtime/helpers/interopRequireDefault"), a = e(require("../@babel/runtime/helpers/classCallCheck")), t = e(require("../@babel/runtime/helpers/createClass")), n = {
    ScoreKey: "maxSocre",
    Level: "level",
    Power: "power"
}, i = {
    initMyUserInfo: "initMyUserInfo",
    updateScore: "updateScore",
    updateLv: "updateLv",
    updatePower: "updatePower",
    FriendRank: "FriendRank",
    Paging: "Paging"
}, r = [ {
    id: 0,
    name: "黑铁",
    cupMin: 0,
    cupMax: 50
}, {
    id: 1,
    name: "青铜",
    cupMin: 51,
    cupMax: 150
}, {
    id: 2,
    name: "白银",
    cupMin: 151,
    cupMax: 300
}, {
    id: 3,
    name: "黄金",
    cupMin: 301,
    cupMax: 600
}, {
    id: 4,
    name: "铂金",
    cupMin: 601,
    cupMax: 1200
}, {
    id: 5,
    name: "钻石",
    cupMin: 1201,
    cupMax: 2e3
}, {
    id: 6,
    name: "王者",
    cupMin: 2001,
    cupMax: 999999
} ];

var o = function(e) {
    return e.sort(function(e, a) {
        var t = e.KVDataList.find(function(e) {
            return e.key === n.ScoreKey;
        }), i = a.KVDataList.find(function(e) {
            return e.key === n.ScoreKey;
        }), r = t ? parseInt(JSON.parse(t.value).wxgame.score || "0") : 0, o = i ? parseInt(JSON.parse(i.value).wxgame.score || "0") : 0, l = t ? JSON.parse(t.value).wxgame.update_time : 0, s = i ? JSON.parse(t.value).wxgame.update_time : 0;
        return r > o ? -1 : r < o ? 1 : l > s ? 1 : -1;
    });
};

new (function() {
    function e() {
        (0, a.default)(this, e), this._mTotalPage = 0, this._mCurrPage = 0, this._mGameDatas = [], 
        this._mMyRank = 1, this._mIconUrl = null, this._init();
    }
    return (0, t.default)(e, [ {
        key: "_init",
        value: function() {
            this.canvas = this.kf().getSharedCanvas(), this.ctx = this.canvas.getContext("2d"), 
            this.ctx.imageSmoothingEnabled = !0, this.ctx.imageSmoothingQuality = "high";
        }
    }, {
        key: "kf",
        value: function() {
            return "undefined" != typeof tt ? tt : "undefined" != typeof wx ? wx : null;
        }
    }, {
        key: "hasTouTiao",
        value: function() {
            return "undefined" != typeof tt;
        }
    }, {
        key: "_listen",
        value: function() {
            var e = this;
            this.kf().onMessage(function(a) {
                switch (console.log("ranklist onMessage", a), a.type) {
                  case i.initMyUserInfo:
                    e._initMyUserInfo(a.value);
                    break;

                  case i.FriendRank:
                    e._fetchFriendData();
                    break;

                  case i.updateLv:
                    e._updateLv(parseInt(a.value));
                    break;

                  case i.updatePower:
                    e._updatePower(parseInt(a.value));
                    break;

                  case i.updateScore:
                    e._updateScore(parseInt(a.value));
                    break;

                  case i.Paging:
                    if (!e._mGameDatas.length) return;
                    var t = a.value, n = e._mCurrPage + t;
                    if (n < 0) return void console.log("已经是第一页了");
                    if (n + 1 > e._mTotalPage) return void console.log("没有更多了");
                    e._mCurrPage = n, e._showPagedRanks(n), console.log("当前页", e._mCurrPage);
                    break;

                  default:
                    console.log("未知消息类型", a);
                }
            });
        }
    }, {
        key: "_findMyrank",
        value: function() {
            if (this._mIconUrl) for (var e = 0; e < this._mGameDatas.length; e++) if (this._mGameDatas[e].avatarUrl == this._mIconUrl) {
                this._mMyRank = e + 1;
                break;
            }
        }
    }, {
        key: "_updateLv",
        value: function(e) {
            var a = new Array(), t = {
                wxgame: {
                    level: e,
                    update_time: new Date().getTime()
                }
            };
            a.push({
                key: n.Level,
                value: JSON.stringify(t)
            }), this.kf().setUserCloudStorage({
                KVDataList: a
            });
        }
    }, {
        key: "_updatePower",
        value: function(e) {}
    }, {
        key: "_updateScore",
        value: function(e) {
            var a = new Array(), t = {
                wxgame: {
                    score: e,
                    update_time: new Date().getTime()
                }
            };
            a.push({
                key: n.ScoreKey,
                value: JSON.stringify(t)
            }), this.kf().setUserCloudStorage({
                KVDataList: a
            });
        }
    }, {
        key: "_initMyUserInfo",
        value: function(e) {
            var a = this;
            this.hasTouTiao() ? (console.log("主域传递过来的头像url", e), this._mIconUrl = e) : this.kf().getUserInfo({
                openIdList: [ "selfOpenId" ],
                lang: "zh_CN",
                success: function(e) {
                    a._mIconUrl = e.data[0].avatarUrl;
                }
            });
        }
    }, {
        key: "_ttLogin",
        value: function(e) {
            this.kf().login({
                force: !0,
                success: function(a) {
                    console.log("login调用成功".concat(a.code, " ").concat(a.anonymousCode)), e && e(a);
                },
                fail: function(a) {
                    console.log("login调用失败"), e && e();
                }
            });
        }
    }, {
        key: "_fetchFriendData",
        value: function() {
            var e = this;
            this.hasTouTiao() ? this.kf().getCloudStorageByRelation({
                type: "friend",
                keyList: [ n.ScoreKey, n.Level ],
                success: function(a) {
                    console.log("getFriendCloudStorage success", a);
                    var t = a.data.length;
                    e._mGameDatas = o(a.data), e._mCurrPage = 0, e._mTotalPage = Math.ceil(t / 5), t && e._showPagedRanks(0);
                },
                fail: function(e) {
                    console.log("getFriendCloudStorage fail", e);
                }
            }) : this.kf().getFriendCloudStorage({
                keyList: [ n.ScoreKey, n.Level ],
                success: function(a) {
                    console.log("getFriendCloudStorage success", a);
                    var t = a.data.length;
                    e._mGameDatas = o(a.data), e._mCurrPage = 0, e._mTotalPage = Math.ceil(t / 5), t && e._showPagedRanks(0);
                },
                fail: function(e) {
                    console.log("getFriendCloudStorage fail", e);
                }
            });
        }
    }, {
        key: "_showPagedRanks",
        value: function(e) {
            this._findMyrank();
            var a = 5 * e, t = this._mGameDatas.slice(a, a + 5), n = t.length;
            this.ctx.clearRect(0, 0, 990, 625);
            for (var i = 0; i < n; i++) this._drawRankItem(this.ctx, i, a + i + 1, t[i], n);
            var r = this._mMyRank - 1;
            console.log("我的排行", r);
            for (var o = 0; o < this._mGameDatas.length; o++) if (o == r) {
                this._drawRankItem(this.ctx, 0, o + 1, this._mGameDatas[o], n, 437);
                break;
            }
            var l = e + 1, s = Math.ceil(this._mGameDatas.length / 5);
            this.ctx.fillStyle = "#FFFFFF", this.ctx.textAlign = "center", this.ctx.baseLine = "center", 
            this.ctx.font = "30px Helvetica", this.ctx.fillText(l + "/" + s, 495, 500);
        }
    }, {
        key: "_drawRankItem",
        value: function(e, a, t, i, o) {
            var l = this, s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (i) {
                var c = i.avatarUrl, u = i.nickname.length <= 4 ? i.nickname : i.nickname.substr(0, 5) + "..", f = i.KVDataList.find(function(e) {
                    return e.key === n.ScoreKey;
                }), g = i.KVDataList.find(function(e) {
                    return e.key === n.Level;
                }), m = (i.KVDataList.find(function(e) {
                    return e.key === n.Power;
                }), f ? JSON.parse(f.value).wxgame.score : 0), d = g ? JSON.parse(g.value).wxgame.level : 0, h = function(e) {
                    for (var a = 0; a < r.length; a++) {
                        var t = r[a];
                        if (e >= t.cupMin && e <= t.cupMax) return a;
                    }
                    return r.length - 1;
                }(m), v = 58 * a + 140 + s, p = this.kf().createImage(), k = this._mMyRank - 1 == a, _ = this._setPromise(p, k ? "openData/image/bg2.png" : "openData/image/bg1.png");
                Promise.all([ _ ]).then(function() {
                    var n = 8 * a;
                    if (0 == s && l.ctx.drawImage(p, 40, v - 15 + n, 912, 58), t < 4) {
                        var i = l.kf().createImage();
                        i.src = "openData/image/top" + t + ".png", i.onload = function() {
                            e.drawImage(i, 65, v - 15 + n, 41, 57);
                        };
                    } else e.fillStyle = "#FFFFFF", e.textAlign = "center", e.baseLine = "center", e.font = "40px Helvetica", 
                    e.fillText(t.toString(), 83, v + 26 + n);
                    var o = v + n - 5.5;
                    l._drawAvatar(e, c, 170, o, 40, 40), e.fillStyle = "#FFFFFF", e.textAlign = "left", 
                    e.baseLine = "center", e.font = "30px Helvetica", e.fillText(u, 220, 25 + v + n);
                    var f = "openData/image/UIPVP_" + (h + 1) + ".png", g = l.kf().createImage();
                    g.src = f, g.onload = function() {
                        e.drawImage(g, 365, v - 15 + n, 61, 56);
                    };
                    var k = r[h] ? r[h] : r[r.length - 1];
                    e.fillStyle = "#FFFFFF", e.textAlign = "center", e.baseLine = "center", e.font = "30px Helvetica", 
                    e.fillText("" + k.name, 455, 25 + v + n);
                    var _ = l.kf().createImage();
                    _.src = "openData/image/cup.png", _.onload = function() {
                        e.drawImage(_, 790, v - 15 + n, 51, 52);
                    }, e.fillStyle = "#FFFFFF", e.textAlign = "left", e.baseLine = "center", e.font = "30px Helvetica";
                    var y = m.toString();
                    e.fillText("" + y, 850, 25 + v + n);
                    var x = l.kf().createImage();
                    x.src = "openData/image/icon.png", x.onload = function() {
                        e.drawImage(x, 590, v - 15 + n, 61, 56);
                    }, e.fillStyle = "#FFFFFF", e.textAlign = "left", e.baseLine = "center", e.font = "30px Helvetica", 
                    e.fillText(d.toString(), 660, 25 + v + n);
                });
            }
        }
    }, {
        key: "_setPromise",
        value: function(e, a) {
            return new Promise(function(t, n) {
                e.src = a, a || t(), e.onload = function() {
                    t();
                };
            }).then(function() {
                console.log("背景图加载完毕");
            }).catch(function(e) {
                console.log("背景图加载失败：", e);
            });
        }
    }, {
        key: "_drawAvatar",
        value: function(e, a, t, n, i, r) {
            e.fillStyle = "#ffffff", e.fillRect(t - 5, n - 5, i + 10, r + 10);
            var o = this.kf().createImage();
            o.src = a, o.onload = function() {
                e.drawImage(o, t, n, i, r);
            };
        }
    } ]), e;
}())()._listen();