var e, t, n, o, i, a, r, l, s = require("../@babel/runtime/helpers/inherits"), u = require("../@babel/runtime/helpers/createSuper"), d = require("../@babel/runtime/helpers/classCallCheck"), c = require("../@babel/runtime/helpers/createClass");

function f(e, t) {
    var n = h();
    return (f = function(e, t) {
        return n[e -= 119];
    })(e, t);
}

function h() {
    var e = [ "811407rxbNPx", "30bbrEbC", "3575864obSFMA", "6gsJodF", "951847TaYVHJ", "8027469jjunyO", "40JceCTL", "641956MrFvgy", "6184160onkVJa", "126272dGNNKg" ];
    return (h = function() {
        return e;
    })();
}

!function(e, t) {
    for (var n = f, o = h(); ;) try {
        if (658029 == parseInt(n(126)) / 1 + parseInt(n(121)) / 2 + -parseInt(n(122)) / 3 + parseInt(n(124)) / 4 + parseInt(n(120)) / 5 * (parseInt(n(125)) / 6) + -parseInt(n(119)) / 7 * (-parseInt(n(128)) / 8) + -parseInt(n(127)) / 9 * (parseInt(n(123)) / 10)) break;
        o.push(o.shift());
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        o.push(o.shift());
    }
}(), (t || (t = {})).BaseAppProxy = function() {
    function e() {
        d(this, e);
    }
    return c(e, [ {
        key: "signInGoogle",
        value: function() {
            console.log("BaseAppProxy signInGoogle");
        }
    }, {
        key: "signInGoogleSilently",
        value: function() {
            console.log("BaseAppProxy signInGoogleSilently");
        }
    }, {
        key: "signOutGoogle",
        value: function() {
            console.log("BaseAppProxy signOutGoogle");
        }
    }, {
        key: "saveFile",
        value: function(e) {}
    }, {
        key: "loadSavefile",
        value: function() {}
    }, {
        key: "setNonConsumableProduct",
        value: function(e) {}
    }, {
        key: "getProductDetail",
        value: function(e) {}
    }, {
        key: "requestPayment",
        value: function(e) {}
    }, {
        key: "checkPurchase",
        value: function() {}
    }, {
        key: "fetchRemoteConfig",
        value: function() {}
    }, {
        key: "confirmPurchase",
        value: function(e) {}
    }, {
        key: "getRemoteConfig",
        value: function() {
            return new Map();
        }
    }, {
        key: "getOrderInfo",
        value: function(e) {
            return "";
        }
    }, {
        key: "restoreNonConsumablePurchase",
        value: function() {}
    }, {
        key: "onOfferwallAdCredited",
        value: function(e, t) {}
    }, {
        key: "onOfferwallAdClosed",
        value: function() {}
    } ]), e;
}(), o = n || (n = {}), (i = o.Urls || (o.Urls = {})).SaveLog = "https://log.17tcw.com/collect/pushEvents", 
i.SaveRedirect = "https://game.17tcw.com/xyx/statis/reqSaveRedirect", i.GetNativationConfig = "https://game.17tcw.com/default/redirect/list", 
i.GameConfig = "https://game.17tcw.com/default/extra/getNewConfigs", i.SaveShare = "https://game.17tcw.com/xyx/statis/reqBeginShare", 
i.GetShareConfig = "https://game.17tcw.com/xyx/basic/reqFenxiang", i.GetUUID = "https://game.17tcw.com/game/wechat", 
i.GetRewardConfig = "https://game.17tcw.com/default/game/getShareStrategy", i.GameUrl = "https://game.17tcw.com", 
i.GetOpenId = "https://game.17tcw.com/default/login/authorize", i.UploadClickShare = "https://game.17tcw.com/default/game/clickShare", 
(a = o.EngineType || (o.EngineType = {})).Default = "Default", a.CocosCreator = "CocosCreator", 
a.LayaAir = "LayaAir", (r = o.Platform || (o.Platform = {})).Default = "Default", 
r.Kuaidianwan = "Kuaidianwan", r.WeChat = "WeChat", r.QQ = "QQ", r.OPPO = "OPPO", 
r.Vivo = "Vivo", r.BaiDu = "BaiDu", r.XiaoDu = "XiaoDu", r.QuTouTiao = "QuTouTiao", 
r.QuTouTiaoAndroid = "QuTouTiaoAndroid", r.ByteDance = "ByteDance", r.YueYou = "YueYou", 
r.KuaiKan = "KuaiKan", r.BaoQu = "BaoQu", r.Android = "Android", r.iOS = "iOS", 
r.UCMiniGame = "UCMiniGame", r.LianShangMiniGame = "LianShangMiniGame", r.Kwaigame = "Kwaigame", 
r.M4399MiniGame = "M4399MiniGame", r.Hago = "Hago", r.HuaWeiQuickGame = "HuaWeiQuickGame", 
(l = o.DistributionChannel || (o.DistributionChannel = {})).None = "", l.AppStore = "AppStore", 
l.AndroidOfficial = "AndroidOfficial", l.OPPO = "OPPO", l.M4399 = "M4399", l.M233 = "M233", 
l.HaoYouKuaiBao = "HaoYouKuaiBao", l.BaMenShenQi = "BaMenShenQi", l.YingYongBao = "YingYongBao", 
l.XiaoMi = "XiaoMi", l.GooglePlay = "GooglePlay", l.HuaweiGlobal = "HuaweiGlobal", 
l.MomoyuAndroid = "MomoyuAndroid", function(e) {
    e.Info = new (function() {
        return function t() {
            d(this, t), this.debugLog = !1, this.isPreview = !1, this.appId = "", this.platform = e.Platform.Default, 
            this.engine = e.EngineType.Default, this.distributionChannel = e.DistributionChannel.None, 
            this.channelId = "", this.channelKey = "", this.UUID = "", this.underCheck = !1, 
            this.resolution = {
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
        };
    }())();
}(n || (n = {})), function(e) {
    function n(t) {
        e.Info.openId = t, e.PA.setStorageSync("LocalOpenId", e.Info.openId);
    }
    function o(t) {
        var n, o, i, a, r, l, s;
        e.Info.shareOption = t, e.Info.shareTime = Date.now();
        var u = null;
        if (e.Info.shareData.length > 0 && (u = e.Info.shareData[e.rand(0, e.Info.shareData.length - 1)]), 
        e.Info.isPreview) {
            null === (n = e.Info.shareOption) || void 0 === n || n.result({
                reward: !0
            }), e.Info.shareOption = null;
        } else {
            e.PA.shareAppMessage({
                templateId: null !== (o = u.templateId) && void 0 !== o ? o : "",
                title: null !== (i = u.title) && void 0 !== i ? i : "",
                imageUrl: null !== (a = u.url) && void 0 !== a ? a : "",
                query: "shareid=" + (null !== (r = u.id) && void 0 !== r ? r : 0) + "&openid=" + e.Info.openId + "&tm=" + Date.now().toFixed() + "&" + e.Info.sharePath + (t.query ? "&" : "") + (null !== (l = t.query) && void 0 !== l ? l : ""),
                success: function(e) {
                    console.log("分享接口成功回调，暂不开放");
                },
                fail: function() {
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
                    ShareId: u.id,
                    ShareTm: Date.now().toFixed()
                }
            });
            var d = {};
            d["触发点"] = null !== (s = t.tag) && void 0 !== s ? s : "未知", e.sentLog("分享", null, d);
        }
    }
    function i() {
        var t, n = "";
        return (null === (t = null === e.Info || void 0 === e.Info ? void 0 : e.Info.shareFailTips) || void 0 === t ? void 0 : t.length) > 0 ? (n = e.Info.shareFailTips.shift(), 
        e.Info.shareFailTips.push(n)) : n = "分享失败，请分享到新的群", n;
    }
    function a() {
        if (!e.isPlatform(e.Platform.Android) || e.Info.distributionChannel != e.DistributionChannel.GooglePlay) {
            var t = Math.round((Date.now() - e.Info.lastGameTimeUploadTimestamp) / 1e3);
            e.sentLog("onlinetime", t, {
                scene: e.Info.sceneWithSourceAppId
            }), e.Info.lastGameTimeUploadTimestamp = Date.now();
        }
    }
    function r() {
        try {
            var t = e.PA.getStorageSync("RewardUserData");
            if (!t || "" == t) throw "loadRewardUserData:本地RewardUserData不存在";
            try {
                var n = JSON.parse(t);
                if (!(n.time > e.Info.rewardUserData.time && e.isToday(n.time))) throw "数据已过期";
                if (e.Info.rewardUserData.time = n.time, e.Info.rewardUserData.data.clear(), n.data.length <= 0) throw "数据为空";
                n.data.forEach(function(t) {
                    e.Info.rewardUserData.data.set(t.tag, {
                        currIndex: t.currIndex,
                        currCount: t.currCount
                    });
                }), e.Info.rewardConfigOriginData.forEach(function(t, n, o) {
                    if (!e.Info.rewardUserData.data.has(n)) {
                        e.Info.rewardUserData.data.set(n, {
                            currIndex: 0,
                            currCount: 0
                        });
                    }
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                throw "loadRewardUserData:本地RewardUserData数据解析失败";
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            e.log(t), e.Info.rewardUserData.time = Date.now(), e.Info.rewardUserData.data.clear(), 
            e.Info.rewardConfigOriginData.forEach(function(t, n, o) {
                if (t.rule.length > 0) {
                    e.Info.rewardUserData.data.set(n, {
                        currIndex: 0,
                        currCount: 0
                    });
                }
            });
        }
        e.log("RewardUserData", e.Info.rewardUserData);
    }
    window.GA = e, e.PA = null, e.init = function(n) {
        var r, l, s, u, d, c, f;
        return console.log("GA3 Version:" + e.version + " buildTime:" + e.buildTime), "" == e.Info.appId ? (e.Info.debugLog = null !== (r = n.debugLog) && void 0 !== r && r, 
        e.Info.isPreview = n.isPreview, e.Info.engine = n.engine, t.isAPP(n.platform) && (n.platform = t.getPlatform()), 
        e.Info.platform = n.platform, function(n) {
            var o, i, a, r, l, s, u = null;
            switch (n) {
              case e.Platform.Android:
                u = t.PROXY;
                break;

              case e.Platform.WeChat:
                u = null !== (o = window.wx) && void 0 !== o ? o : {};
                break;

              case e.Platform.QQ:
                u = null !== (i = window.qq) && void 0 !== i ? i : {};
                break;

              case e.Platform.iOS:
                u = t.PROXY;
                break;

              case e.Platform.OPPO:
              case e.Platform.Vivo:
                u = null !== (a = window.qg) && void 0 !== a ? a : {};
                break;

              case e.Platform.ByteDance:
                u = null !== (r = window.tt) && void 0 !== r ? r : {};
                break;

              case e.Platform.Kwaigame:
                u = null !== (l = window.ks) && void 0 !== l ? l : {};
                break;

              case e.Platform.Kuaidianwan:
                u = {}, window.GameAssistantWeb ? (console.log("GameAssistantWeb is ok."), GameAssistantWeb.onGameLoaded()) : console.log("GameAssistantWeb is not ok.");
                break;

              case e.Platform.Hago:
                u = null !== (s = window.hg) && void 0 !== s ? s : {};
            }
            e.PA = new e.PAClass(), e.PA.init(u);
        }(n.platform), t.isAPP() && (!n.isPreview && (n.appId = null !== (u = null === (s = null === (l = e.PA.getLaunchOptionsSync()) || void 0 === l ? void 0 : l.query) || void 0 === s ? void 0 : s.appId) && void 0 !== u ? u : e.Info.appId), 
        e.Info.distributionChannel = null !== (f = null === (c = null === (d = e.PA.getLaunchOptionsSync()) || void 0 === d ? void 0 : d.query) || void 0 === c ? void 0 : c.distributionChannel) && void 0 !== f ? f : e.Info.distributionChannel), 
        new Promise(function(r) {
            t.setSplashAdEndListener(function() {
                (function(t) {
                    var n, r, l, s, u, d, c, f;
                    if (e.log("init evn", t), e.Info.debugLog = null !== (n = t.debugLog) && void 0 !== n && n, 
                    e.Info.isPreview = t.isPreview, e.Info.appId = t.appId, e.Info.platform = t.platform, 
                    e.Info.engine = t.engine, e.Info.channelKey = t.channelKey, e.Info.UUID = t.uuid, 
                    e.Info.resolution.width = t.resolution.width ? t.resolution.width : 0, e.Info.resolution.height = t.resolution.height ? t.resolution.height : 0, 
                    e.Info.sharePath = t.sharePath, e.Info.withoutRewardVideoAd = !!t.withoutRewardVideoAd, 
                    e.Info.version = t.version ? t.version : "1.0.0", !e.isPlatform(e.Platform.M4399MiniGame)) {
                        try {
                            var h = null === (r = e.PA.getSystemInfoSync) || void 0 === r ? void 0 : r.call(e.PA);
                            h.windowWidth / h.windowHeight > e.Info.resolution.width / e.Info.resolution.height ? e.Info.resolution.width = Math.round(h.windowWidth * e.Info.resolution.height / h.windowHeight) : e.Info.resolution.height = Math.round(h.windowHeight * e.Info.resolution.width / h.windowWidth);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            console.error(e);
                        }
                        !function() {
                            var t;
                            try {
                                var n = e.PA.getLaunchOptionsSync();
                                n.scene ? (e.Info.scene = n.scene + "", e.Info.sceneWithSourceAppId = n.scene + "") : n.from && e.isPlatform([ e.Platform.Kwaigame ]) && (e.Info.scene = n.from + "", 
                                e.Info.sceneWithSourceAppId = n.from + ""), (null == n ? void 0 : n.query) && n.query[e.Info.channelKey] && (e.Info.channelId = e.Info.channelKey + "=" + n.query[e.Info.channelKey]), 
                                (null == n ? void 0 : n.referrerInfo) && (e.Info.sourceAppid = null !== (t = n.referrerInfo.appId) && void 0 !== t ? t : "", 
                                e.Info.sourceAppid.length > 0 && (e.Info.sceneWithSourceAppId = e.Info.scene + "_" + e.Info.sourceAppid));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                console.error(e);
                            }
                        }();
                        try {
                            null === (l = e.PA.setKeepScreenOn) || void 0 === l || l.call(e.PA, {
                                keepScreenOn: !0
                            }), e.PA.onShow(function() {
                                var t, n, a, r, l, s, u, d, c, f, h, v;
                                e.Info.gameInBackground = !1, e.Info.lastGameTimeUploadTimestamp = Date.now();
                                if (null === (t = e.PA.setKeepScreenOn) || void 0 === t || t.call(e.PA, {
                                    keepScreenOn: !0
                                }), null === (n = e.Info.shareOption) || void 0 === n ? void 0 : n.result) {
                                    e.Info.shareTimes++;
                                    var g = null !== (l = null === (a = e.Info.rewardConfigOriginData) || void 0 === a ? void 0 : a.get(null === (r = e.Info.shareOption) || void 0 === r ? void 0 : r.tag)) && void 0 !== l ? l : null === (s = e.Info.rewardConfigOriginData) || void 0 === s ? void 0 : s.get("SCORE_STRATEGY");
                                    try {
                                        var m = null !== (d = null == g ? void 0 : g.shareSuccessRate[Math.min(e.Info.shareTimes - 1, (null === (u = null == g ? void 0 : g.shareSuccessRate) || void 0 === u ? void 0 : u.length) - 1)]) && void 0 !== d ? d : 0, P = Math.random() < m / 100;
                                        if (!P) {
                                            var p = null !== (f = 1e3 * (null == g ? void 0 : g.shareSuccessTime[Math.min(e.Info.shareTimes - 1, (null === (c = null == g ? void 0 : g.shareSuccessTime) || void 0 === c ? void 0 : c.length) - 1)])) && void 0 !== f ? f : 5e3;
                                            Date.now() - e.Info.shareTime >= p && p >= 0 && (P = !0);
                                        }
                                        try {
                                            var y = {};
                                            y.reward = P, e.Info.shareOption.result(y);
                                        } catch (e) {}
                                        P ? (e.Info.shareTimes = 0, e.Info.shareOption = null) : (null === (v = null === (h = e.Info.shareOption) || void 0 === h ? void 0 : h.showFailTip) || void 0 === v || v) && e.PA.showModal({
                                            title: "提示",
                                            content: i(),
                                            showCancel: !0,
                                            cancelText: "返回游戏",
                                            confirmText: "去分享",
                                            success: function(t) {
                                                t.cancel ? e.Info.shareOption = null : o(e.Info.shareOption);
                                            }
                                        });
                                    } catch (e) {}
                                }
                            }), e.PA.onHide(function() {
                                e.Info.gameInBackground = !0, e.Info.openId && a(), function() {
                                    try {
                                        e.Info.rewardUserData.time = Date.now();
                                        var t = {
                                            time: 0,
                                            data: []
                                        };
                                        t.time = e.Info.rewardUserData.time, e.Info.rewardUserData.data.forEach(function(e, n, o) {
                                            var i = {};
                                            i.tag = n, i.currIndex = e.currIndex, i.currCount = e.currCount, t.data.push(i);
                                        }), e.PA.setStorageSync("RewardUserData", JSON.stringify(t));
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        console.error(e);
                                    }
                                }();
                            }), setInterval(function() {
                                !e.Info.gameInBackground && a();
                            }, 1e3 * Math.max(null !== (s = t.uploadGameTimeIntervals) && void 0 !== s ? s : 10, 10)), 
                            setInterval(function() {
                                e.Info.pageList.length > 0 && (e.Info.pageList[e.Info.pageList.length - 1].time += 1);
                            }, 1e3);
                            null === (u = e.PA.showShareMenu) || void 0 === u || u.call(e.PA, {
                                menus: [ "shareAppMessage", "shareTimeline" ]
                            }), null === (d = e.PA.onShareMessageToFriend) || void 0 === d || d.call(e.PA, function(e) {
                                console.log("onShareMessageToFriend:", e.success, e.errMsg);
                            });
                            var v = function(t, n) {
                                try {
                                    var o = "", i = {
                                        id: "",
                                        title: "",
                                        url: ""
                                    }, a = {};
                                    if ("video" == (t = null != t ? t : {
                                        channel: ""
                                    }).channel) {
                                        o = "openid=" + e.Info.openId + "&tm=" + Date.now().toFixed() + "&" + e.Info.channelKey + "=10001";
                                        var r = {};
                                        r.videoTopics = e.Info.videoTopics, a = r;
                                        var l = {};
                                        l["触发点"] = n, e.sentLog("拍抖音", null, l);
                                    } else {
                                        i = e.Info.shareData[e.rand(0, e.Info.shareData.length - 1)], e.request({
                                            url: e.Urls.SaveShare,
                                            method: "POST",
                                            data: {
                                                Openid: e.Info.openId,
                                                ShareId: i.id,
                                                ShareTm: Date.now().toFixed()
                                            }
                                        }), o = "shareid=" + i.id + "&openid=" + e.Info.openId + "&tm=" + Date.now().toFixed() + "&" + e.Info.sharePath;
                                        var s = {};
                                        s["触发点"] = n, e.sentLog("分享", null, s);
                                    }
                                    var u = {};
                                    return u.title = i.title, u.imageUrl = i.url, u.query = o, u.extra = a, u;
                                } catch (o) {
                                    o = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(o);
                                    console.error(o);
                                    var d = {};
                                    return d["触发点"] = n, e.sentLog("分享", null, d), {
                                        title: "",
                                        imageUrl: "",
                                        query: "openid=" + e.Info.openId + "&tm=" + Date.now().toFixed() + "&" + ("video" == (null == t ? void 0 : t.channel) ? e.Info.channelKey + "=10001" : e.Info.sharePath)
                                    };
                                }
                            };
                            null === (c = e.PA.onShareAppMessage) || void 0 === c || c.call(e.PA, function(e) {
                                return v(e, "顶部分享");
                            }), null === (f = e.PA.onShareTimeline) || void 0 === f || f.call(e.PA, function() {
                                return v(null, "分享朋友圈");
                            });
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            console.error(e);
                        }
                        (function() {
                            console.log("--------------* GA 基础配置和信息 *--------------"), console.log('Appid is "' + e.Info.appId + '"'), 
                            console.log('Platform is "' + e.Info.platform + '"'), console.log('ChannelKey is "' + e.Info.channelKey + '"'), 
                            console.log('ChannelID is "' + e.Info.channelId + '"'), console.log("SharePath is " + e.Info.sharePath), 
                            console.log('UUID is "' + e.Info.UUID + '"'), console.log("GameEngine is " + e.Info.engine), 
                            console.log("Design resolution is " + JSON.stringify(e.Info.resolution)), console.log("--------------* GA 使用域名清单 *---------------");
                            var t = new Set();
                            for (var n in e.Urls) {
                                var o = e.Urls[n].split("/"), i = o[0] + "//" + o[2];
                                !t.has(i) && (t.add(i), console.log(i));
                            }
                            console.log("----------------------------------------------");
                        })(), e.request({
                            url: e.Urls.GetShareConfig,
                            data: {
                                Appid: e.Info.appId,
                                Type: 0
                            },
                            method: "POST",
                            success: function(t) {
                                var n, o;
                                try {
                                    if ((null === (o = null === (n = null == t ? void 0 : t.data) || void 0 === n ? void 0 : n.data) || void 0 === o ? void 0 : o.length) > 0) {
                                        var i = [];
                                        t.data.data.forEach(function(e) {
                                            var t = {};
                                            t.id = e.shareid, t.title = e.title, t.url = e.imageurl, i.push(t);
                                        }), e.Info.shareData = i, e.log("ShareContent", e.Info.shareData);
                                    } else e.log("分享内容获取失败:" + JSON.stringify(t));
                                } catch (e) {}
                            }
                        });
                    }
                })(n), t.isAPP() ? r(null) : (e.isPlatform([ e.Platform.WeChat ]) && e.AdTracking.init(), 
                function t(n) {
                    e.isPlatform([ e.Platform.M4399MiniGame, e.Platform.Android, e.Platform.iOS ]) ? n("") : e.request({
                        url: e.Urls.GetUUID,
                        method: "POST",
                        dataType: "其他",
                        data: {
                            appid: e.Info.appId
                        },
                        success: function(e) {
                            try {
                                n(e.data);
                            } catch (e) {}
                        },
                        fail: function(o) {
                            e.PA.showModal({
                                title: "提示",
                                content: "网络不稳定，连接服务器失败，请重试",
                                showCancel: !1,
                                confirmText: "重试",
                                success: function() {
                                    t(n);
                                }
                            });
                        }
                    });
                }(function(t) {
                    e.Info.underCheck = t == e.Info.UUID, e.log("Server UUID : ", t, " UnderCheck:", e.Info.underCheck), 
                    r(null);
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
            success: function(t) {
                var n;
                0 == (null === (n = null == t ? void 0 : t.data) || void 0 === n ? void 0 : n.code) ? function(t) {
                    t.forEach(function(t) {
                        e.Info.rewardConfigOriginData.set(t.tag, {
                            rule: t.rule,
                            shareSuccessRate: t.shareRate,
                            shareSuccessTime: t.shareTime
                        });
                    }), e.log("RewardConfig ServerData is ", e.Info.rewardConfigOriginData), r();
                }(t.data.data) : e.error("load reward config error ", t);
            }
        });
    }, e.setOpenId = n, e.exit = function() {
        e.PA.exitMiniProgram();
    }, e.rewardOperation = function(t) {
        if (t.byVideo) if (e.Info.withoutRewardVideoAd) {
            t.result({
                reward: !0
            });
        } else e.showVideoAd(t); else o({
            tag: t.tag,
            page: t.page,
            result: function(n) {
                if (null == n ? void 0 : n.reward) {
                    e.Info.rewardUserData.data.has(t.tag) && e.Info.rewardUserData.data.get(t.tag).currCount++;
                    t.result({
                        reward: !0
                    });
                } else {
                    t.result({
                        reward: !1
                    });
                }
            }
        });
    }, e.randomShare = o, e.getOpenId = function t(o, i, a) {
        var r, l = function(t, n) {
            e.Info.openId = t, e.Info.session_key = n, e.Info.openId && "" != e.Info.openId && (e.sentLogs([ {
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
            } ]), function() {
                var t, n;
                try {
                    var o = e.PA.getLaunchOptionsSync();
                    e.Info.isPreview && (o = JSON.parse('{ "query": { "shareid": 1 ,"openid":"testopenid","tm":0} }')), 
                    (null === (t = null == o ? void 0 : o.query) || void 0 === t ? void 0 : t.shareid) && e.request({
                        url: e.Urls.UploadClickShare,
                        data: {
                            openid: e.Info.openId,
                            sourceOpenid: o.query.openid,
                            shareId: parseInt(o.query.shareid),
                            shareTm: null !== (n = o.query.tm) && void 0 !== n ? n : 0
                        },
                        method: "POST",
                        success: function(e) {
                            console.log("UPLOAD click share ", e);
                        }
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error(e);
                }
            }()), o(t, n);
        };
        if (e.Info.isPreview) try {
            e.Info.openId = localStorage.getItem("user_id"), !e.Info.openId && (e.Info.openId = "Test" + Date.now() + (1e8 * Math.random()).toFixed(), 
            localStorage.setItem("user_id", e.Info.openId)), l(e.Info.openId, "TestSessionKey");
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.error(e);
        } else if (e.isPlatform(e.Platform.Kuaidianwan)) GameAssistantWeb.login(function(t, n) {
            e.Info.openId = n, l(n, "");
        }); else {
            var s = null !== (r = e.PA.getStorageSync("LocalOpenId")) && void 0 !== r ? r : "";
            s && !a && e.isPlatform([ e.Platform.WeChat ]) ? l(s, "") : e.isPlatform(e.Platform.M4399MiniGame) ? window.h5api.isLogin() ? window.h5api.login(function(t) {
                e.Info.uid = parseInt(t.uId), e.Info.nickname = t.userName, l(t.uId, "");
            }) : l("LocalOpenId", "") : e.PA.login({
                force: !1,
                success: function(t) {
                    console.log("Platform " + e.Info.platform + " login:" + JSON.stringify(t));
                    var o = e.PA.getSystemInfoSync();
                    if (e.isPlatform(e.Platform.Kwaigame)) l(t.gameUserId, t.gameToken); else {
                        var a = {};
                        if (e.isPlatform([ e.Platform.ByteDance ])) {
                            var r = {};
                            r.code = t.code, r.anonymous_code = t.anonymousCode, a = r;
                        } else if (e.isPlatform([ e.Platform.LianShangMiniGame, e.Platform.Android, e.Platform.iOS ])) {
                            var s = {};
                            s.code = t.code, a = s;
                        } else if (e.isPlatform(e.Platform.OPPO)) {
                            e.Info.nickname = t.nickName, e.Info.avatar = t.avatar, e.Info.token = t.token;
                            var u = {};
                            u.code = t.uid, a = u;
                        } else if (e.isPlatform(e.Platform.Vivo)) {
                            e.Info.token = t.code;
                            var d = {};
                            d.token = t.code, a = d;
                        } else if (e.isPlatform(e.Platform.Hago)) {
                            console.log("systemInfo:", JSON.stringify(o));
                            var c = {};
                            c.code = t.code, c.countryCode = o.countryCode, a = c;
                        } else {
                            var f = {};
                            f.js_code = t.code, a = f;
                        }
                        !function t(o, i, a) {
                            var r;
                            if (e.isPlatform([ e.Platform.Android, e.Platform.OPPO, e.Platform.iOS ])) try {
                                a(i.code, "");
                            } catch (e) {} else {
                                var l = "";
                                i.code = null !== (r = i.code) && void 0 !== r ? r : "", Object.getOwnPropertyNames(i).forEach(function(e, t) {
                                    l += (0 == t ? "?" : "&") + e + "=" + i[e];
                                }), console.log("GetOpenIdUrl:", e.Urls.GetOpenId + l), e.request({
                                    url: e.Urls.GetOpenId + l,
                                    method: "GET",
                                    success: function(r) {
                                        var l, s, u, d, c, f, h, v, g, m, P, p, y;
                                        if (console.log("GetOpenid:", JSON.stringify(r)), (null === (l = null == r ? void 0 : r.data) || void 0 === l ? void 0 : l.openid) ? e.Info.openId = null === (s = null == r ? void 0 : r.data) || void 0 === s ? void 0 : s.openid : (null === (d = null === (u = r.data) || void 0 === u ? void 0 : u.data) || void 0 === d ? void 0 : d.open_id) ? e.Info.openId = null === (f = null === (c = r.data) || void 0 === c ? void 0 : c.data) || void 0 === f ? void 0 : f.open_id : (null === (h = r.data) || void 0 === h ? void 0 : h.anonymous_openid) ? e.Info.openId = null === (v = r.data) || void 0 === v ? void 0 : v.anonymous_openid : (null === (m = null === (g = null == r ? void 0 : r.data) || void 0 === g ? void 0 : g.data) || void 0 === m ? void 0 : m.openId) && (e.Info.openId = r.data.data.openId), 
                                        (null === (p = null === (P = null == r ? void 0 : r.data) || void 0 === P ? void 0 : P.data) || void 0 === p ? void 0 : p.nickName) && (e.Info.nickname = r.data.data.nickName), 
                                        "" != e.Info.openId) {
                                            n(e.Info.openId);
                                            try {
                                                a(e.Info.openId, null === (y = r.data) || void 0 === y ? void 0 : y.session_key);
                                            } catch (e) {}
                                        } else o ? e.PA.showModal({
                                            title: "提示",
                                            content: "获取登录数据失败(数据异常)，点击重试",
                                            showCancel: !1,
                                            confirmText: "重试",
                                            success: function(e) {
                                                t(o, i, a);
                                            }
                                        }) : a("", "");
                                    },
                                    fail: function(n) {
                                        o ? e.PA.showModal({
                                            title: "提示",
                                            content: "获取登录数据失败(请求失败)，点击重试",
                                            showCancel: !1,
                                            confirmText: "重试",
                                            success: function(e) {
                                                t(o, i, a);
                                            }
                                        }) : a("", "");
                                    }
                                });
                            }
                        }(i, a, l);
                    }
                },
                fail: function(n) {
                    console.log(n), e.PA.showModal({
                        title: "提示",
                        content: "获取登录数据失败(平台授权失败)，点击重试",
                        showCancel: !1,
                        confirmText: "重试",
                        success: function(e) {
                            t(o);
                        }
                    });
                }
            });
        }
    }, e.isNextRewardVideo = function(t) {
        var n = !0;
        try {
            if (!e.Info.underCheck) {
                var o = e.Info.rewardConfigOriginData.get(t);
                (null == o || o.rule.length <= 0) && (o = e.Info.rewardConfigOriginData.get("SCORE_STRATEGY"));
                var i = e.Info.rewardUserData.data.get(t);
                for (null == i && (i = e.Info.rewardUserData.data.get("SCORE_STRATEGY")); i.currCount >= o.rule[i.currIndex].count; ) if (i.currIndex += 1, 
                i.currCount = 0, i.currIndex >= o.rule.length) {
                    i.currIndex = 0, i.currCount = 0;
                    break;
                }
                n = "video" == o.rule[i.currIndex].type;
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            n = !0;
        }
        return n;
    }, e.loadRewardUserLocalData = r, e.getNavigationList = function(t, n, o) {
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
                success: function(e) {
                    if (0 == e.data.code) {
                        var t = [];
                        e.data.data.forEach(function(e) {
                            var n = {};
                            n.id = e.redirectId, n.appid = e.appid, n.name = e.name, n.is_open_code = !1, n.path = e.path, 
                            n.icon = e.icon, n.qr_code = "", t.push(n);
                        }), i(t);
                    } else a(e);
                },
                fail: function(e) {
                    a(e);
                }
            });
        });
    }, e.enterPage = function(t) {
        var n, o = {};
        o.page = t.page, o.time = 0, e.Info.pageList.push(o);
        var i, a = {};
        a.page = t.page, a.existRedirect = t.existRedirect ? 1 : 0, a.existVideo = t.existVideo ? 1 : 0, 
        a.existBanner = t.existBanner ? 1 : 0, a.openType = null !== (n = t.openType) && void 0 !== n ? n : 0, 
        i = a, e.sentLog("EnterPage", void 0, i);
    }, e.closePage = function(t) {
        var n = function(t) {
            for (var n = 0; n < e.Info.pageList.length; n++) if (e.Info.pageList[n].page == t) {
                var o = e.Info.pageList[n];
                return e.Info.pageList.splice(n, 1), o;
            }
            return null;
        }(t.page);
        if (n) {
            var o = {};
            o.page = t.page, e.sentLog("ClosePage", n.time, o);
        }
    }, e.videoRequestEvent = function(t, n) {
        t || console.error("pageName is empty!");
        var o, i = [];
        n.forEach(function(e) {
            var n = {};
            n.page = t, n.type = e, i.push({
                eventId: "VideoRequest",
                detail: JSON.stringify(n)
            });
        }), o = i, e.sentLogs(o);
    }, e.clickEvent = function(t, n, o, i) {
        if (e.Info.pageList && e.Info.pageList.length > 0) {
            t || console.error("pageName is empty!");
            var a = n, r = e.Info.pageList[e.Info.pageList.length - 1], l = !1;
            r.map ? !r.map.get(o) && (r.map.set(o, 1), l = !0) : (r.map = new Map(), r.map.set(o, 1), 
            l = !0);
            var s = "video" == o ? a : null, u = "other" != o ? r.time : 0, d = {};
            d.page = t, d.eventType = "click", d.posType = o, d.pos = s, d.isFirstClick = l ? 1 : 0;
            var c = d;
            i && (c.classify = i), e.sentLog(n, u, c);
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
    }, e.isNative = function() {
        return e.isPlatform(e.Platform.iOS) || e.isPlatform(e.Platform.Android);
    }, e.isOppoAndroid = function() {
        return e.isPlatform(e.Platform.Android) && e.Info.distributionChannel == e.DistributionChannel.OPPO;
    };
}(n || (n = {})), function(e) {
    e.PAClass = function() {
        function t() {
            d(this, t), this.platformObject = null, this.launchOptions = null, this.selfShowToast = null;
        }
        return c(t, [ {
            key: "init",
            value: function(e) {
                null == e && console.log("GA PlatformApi init error: platformObject is null"), this.syncUnsupportMethod(e), 
                this.platformObject = e;
            }
        }, {
            key: "syncUnsupportMethod",
            value: function(t) {
                var n = this;
                try {
                    var o = [];
                    if (e.Info.isPreview || e.isPlatform([ e.Platform.Kuaidianwan, e.Platform.M4399MiniGame, e.Platform.Hago ])) o.push("getSetting", "showLoading", "hideLoading", "createUserInfoButton", "getUpdateManager", "onTouchEnd", "onTouchStart", "offTouchStart", "offTouchEnd", "setKeepScreenOn", "showShareMenu", "loadSubpackage", "onShareMessageToFriend", "onShareAppMessage", "saveAppToDesktop", "initGameBannerAd", "addColorSign", "addRecentColorSign", "subscribeAppMsg", "onShareTimeline", "vibrateShort", "vibrateLong"); else if (e.isPlatform([ e.Platform.Android, e.Platform.iOS ])) Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(function(e) {
                        null == n[e] && (n[e] = function() {
                            return t[e].apply(t, arguments);
                        });
                    }), Object.getOwnPropertyNames(t).forEach(function(e) {
                        null == n[e] && "function" == typeof t[e] && (n[e] = function() {
                            return t[e].apply(t, arguments);
                        });
                    }); else if (t) for (var i in o.push("showNativeAd", "hideNativeAd"), t) null == this[i] && (this[i] = t[i]);
                    o.forEach(function(e) {
                        n[e] = function() {
                            console.log("Preview 暂不支持" + e);
                        };
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error(e);
                }
            }
        }, {
            key: "addUnsupportMethods",
            value: function(t, n) {
                var o = this;
                e.isPlatform(t) && n.forEach(function(e) {
                    o[e] = function() {
                        console.log(t + " 暂不支持" + e);
                    };
                });
            }
        }, {
            key: "onShow",
            value: function(t) {
                var n, o;
                e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.Hago ]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? ((null === (n = cc.game) || void 0 === n ? void 0 : n.EVENT_SHOW) && cc.game.on(cc.game.EVENT_SHOW, t), 
                (null === (o = cc.Game) || void 0 === o ? void 0 : o.EVENT_SHOW) && cc.game.on(cc.Game.EVENT_SHOW, t)) : e.log("laya onShow 暂未实现") : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.onShow(t) : this.platformObject.onShow(t);
            }
        }, {
            key: "offShow",
            value: function(t) {
                var n, o;
                e.isPlatform([ e.Platform.Android, e.Platform.iOS ]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? ((null === (n = cc.game) || void 0 === n ? void 0 : n.EVENT_SHOW) && cc.game.off(cc.game.EVENT_SHOW, t), 
                (null === (o = cc.Game) || void 0 === o ? void 0 : o.EVENT_SHOW) && cc.game.off(cc.Game.EVENT_SHOW, t)) : e.log("laya offShow 暂未实现") : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.offShow(t) : this.platformObject.offShow(t);
            }
        }, {
            key: "onHide",
            value: function(t) {
                var n, o;
                e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.Hago ]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? ((null === (n = cc.game) || void 0 === n ? void 0 : n.EVENT_HIDE) && cc.game.on(cc.game.EVENT_HIDE, t), 
                (null === (o = cc.Game) || void 0 === o ? void 0 : o.EVENT_HIDE) && cc.game.on(cc.Game.EVENT_HIDE, t)) : e.log("laya onhide 暂未实现") : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.onHide(t) : this.platformObject.onHide(t);
            }
        }, {
            key: "offHide",
            value: function(t) {
                var n, o;
                e.isPlatform([ e.Platform.Android, e.Platform.iOS ]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? ((null === (n = cc.game) || void 0 === n ? void 0 : n.EVENT_HIDE) && cc.game.off(cc.game.EVENT_HIDE, t), 
                (null === (o = cc.Game) || void 0 === o ? void 0 : o.EVENT_HIDE) && cc.game.off(cc.Game.EVENT_HIDE, t)) : e.log("laya offHide 暂未实现") : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.offHide(t) : this.platformObject.offHide(t);
            }
        }, {
            key: "getLaunchOptionsSync",
            value: function() {
                if (e.Info.isPreview || e.isPlatform([ e.Platform.M4399MiniGame, e.Platform.Kuaidianwan, e.Platform.Hago ])) {
                    var t = {
                        path: "",
                        query: {},
                        referrerInfo: {
                            appId: "",
                            extraData: {}
                        },
                        scene: 0,
                        shareTicket: ""
                    };
                    return t;
                }
                return this.launchOptions && 0 != Object.keys(this.launchOptions).length ? this.launchOptions : this.launchOptions = this.platformObject.getLaunchOptionsSync();
            }
        }, {
            key: "getSystemInfoSync",
            value: function() {
                return null == e.Info.systemInfo && (e.Info.isPreview || e.isPlatform([ e.Platform.M4399MiniGame, e.Platform.Kuaidianwan ]) ? e.Info.systemInfo = {
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
            value: function() {
                var t;
                try {
                    (null !== (t = this.platformObject.exitMiniProgram) && void 0 !== t ? t : this.platformObject.exitApplication)();
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    e.error(t);
                }
            }
        }, {
            key: "loadSubpackage",
            value: function(t) {
                return this.platformObject && this.platformObject.loadSubpackage ? this.platformObject.loadSubpackage(t) : (e.UnsupportLog("loadSubpackage"), 
                null);
            }
        }, {
            key: "createRewardedVideoAd",
            value: function(t) {
                return e.isPlatform(e.Platform.Vivo) && (t.posId = t.adUnitId), this.platformObject.createRewardedVideoAd(t);
            }
        }, {
            key: "createInterstitialAd",
            value: function(t) {
                return e.isPlatform(e.Platform.OPPO) ? this.platformObject.createInsertAd(t) : e.isPlatform(e.Platform.Vivo) ? (t.posId = t.adUnitId, 
                this.platformObject.createInterstitialAd(t)) : this.platformObject.createInterstitialAd(t);
            }
        }, {
            key: "saveAppToDesktop",
            value: function(t) {
                e.isPlatform(e.Platform.QQ) && this.platformObject.saveAppToDesktop(t);
            }
        }, {
            key: "addColorSign",
            value: function(t) {
                e.isPlatform(e.Platform.QQ) && this.platformObject.addColorSign(t);
            }
        }, {
            key: "addRecentColorSign",
            value: function(t) {
                e.isPlatform(e.Platform.QQ) && this.platformObject.addRecentColorSign(t);
            }
        }, {
            key: "isColorSignExistSync",
            value: function() {
                return !!e.isPlatform(e.Platform.QQ) && this.platformObject.isColorSignExistSync();
            }
        }, {
            key: "getLanguage",
            value: function() {
                return this.platformObject.getLanguage ? this.platformObject.getLanguage() : "zh-CN";
            }
        }, {
            key: "initGameBannerAd",
            value: function(t, n) {
                var o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], i = arguments.length > 3 ? arguments[3] : void 0;
                if (e.isPlatform(e.Platform.OPPO)) {
                    var a, r = this.platformObject.getSystemInfoSync().platformVersionCode;
                    if (!i && (i = {
                        left: 100 / this.getSystemInfoSync().designPixelRatio,
                        top: (e.Info.resolution.height - 200) / this.getSystemInfoSync().designPixelRatio,
                        orientation: "horizontal"
                    }), r >= 1090 && !o && n) {
                        var l = {};
                        l.adUnitId = n, l.style = i, a = this.platformObject.createGameBannerAd(l);
                    } else if (r >= 1076) {
                        var s = {};
                        s.adUnitId = t, a = this.platformObject.createGameBannerAd(s);
                    }
                    return a;
                }
            }
        }, {
            key: "showInterstitialAd",
            value: function() {
                (e.isPlatform(e.Platform.Android) || e.isPlatform(e.Platform.iOS)) && this.platformObject.showInterstitialAd();
            }
        }, {
            key: "setShowToast",
            value: function(e) {
                this.selfShowToast = e;
            }
        }, {
            key: "showToast",
            value: function(t) {
                if (e.Info.isPreview || e.isPlatform([ e.Platform.M4399MiniGame, e.Platform.Hago ])) e.log("showToast:", t.title); else if (this.selfShowToast) this.selfShowToast(t); else if (e.isPlatform(e.Platform.Vivo)) {
                    var n = {};
                    n.message = t.title, n.duration = t.duration, this.platformObject.showToast(n);
                } else e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.showToast(t.title) : this.platformObject.showToast(t);
            }
        }, {
            key: "showModal",
            value: function(t) {
                var n, o;
                if (e.Info.isPreview || e.isPlatform([ e.Platform.M4399MiniGame, e.Platform.Hago ])) e.log("showModal:" + t.content), 
                t.success({
                    confirm: !1 === t.showCancel,
                    cancel: 0 != t.showCancel
                }); else {
                    if (e.isPlatform(e.Platform.Vivo)) {
                        var i = [], a = {};
                        if (a.text = null !== (n = t.confirmText) && void 0 !== n ? n : "确定", a.color = t.confirmColor, 
                        i.push(a), t.showCancel) {
                            var r = {};
                            r.text = null !== (o = t.cancelText) && void 0 !== o ? o : "取消", r.color = t.cancelColor, 
                            i.push(r);
                        }
                        return this.platformObject.showDialog({
                            title: t.title,
                            message: t.content,
                            buttons: i,
                            success: function(e) {
                                if (0 == e.index) {
                                    t.success({
                                        confirm: !0,
                                        cancel: !1
                                    });
                                } else if (1 == e.index) {
                                    t.success({
                                        confirm: !1,
                                        cancel: !0
                                    });
                                } else {
                                    t.success({
                                        confirm: !1,
                                        cancel: !1
                                    });
                                }
                            },
                            cancel: t.fail,
                            complete: t.complete
                        });
                    }
                    if (!e.isPlatform(e.Platform.Kuaidianwan)) return this.platformObject.showModal(t);
                    GameAssistantWeb.showModal(t.title, t.content, t.confirmText, t.cancelText, function(e, n) {
                        var o = {};
                        o.confirm = e, o.cancel = n, t.success(o);
                    });
                }
            }
        }, {
            key: "showLoading",
            value: function(t) {
                if (!e.isPlatform(e.Platform.Vivo)) return this.platformObject.showLoading(t);
                var n = {};
                n.message = t.title, n.success = t.success, n.cancel = t.fail, n.complete = t.complete, 
                this.platformObject.showLoading(n);
            }
        }, {
            key: "getMenuButtonBoundingClientRect",
            value: function() {
                var t;
                if (e.isPlatform(e.Platform.OPPO)) return {
                    top: this.getSystemInfoSync().statusBarHeight,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: 0,
                    height: 0
                };
                if (null === (t = this.platformObject) || void 0 === t ? void 0 : t.getMenuButtonBoundingClientRect) return this.platformObject.getMenuButtonBoundingClientRect();
                return {
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
            value: function(t) {
                if (e.isPlatform(e.Platform.Vivo)) {
                    var n = {};
                    return n.success = t.success, n.fail = t.fail, n.cancel = t.fail, this.platformObject.share(n);
                }
                return t.extra && (t.extra.hashtag_list && null == t.extra.videoTopics ? t.extra.videoTopics = t.extra.hashtag_list : t.extra.videoTopics && null == t.extra.hashtag_list && (t.extra.hashtag_list = t.extra.videoTopics)), 
                this.platformObject.shareAppMessage(t);
            }
        }, {
            key: "setStorageSync",
            value: function(t, n) {
                if (e.isPlatform(e.Platform.Vivo)) {
                    var o = {};
                    o.key = t, o.value = n, this.platformObject.setStorageSync(o);
                } else e.isPlatform(e.Platform.OPPO) ? localStorage.setItem(t, n) : e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.Hago ]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? cc.sys.localStorage.setItem(t, n) : e.isEngine(e.EngineType.LayaAir) && localStorage.setItem(t, n) : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.setStorage(t, n) : this.platformObject.setStorageSync(t, n);
            }
        }, {
            key: "setStorage",
            value: function(t) {
                var n;
                if (e.isPlatform(e.Platform.Vivo)) {
                    var o = {};
                    return o.key = t.key, o.value = t.data, o.success = t.success, o.fail = t.fail, 
                    o.complete = t.complete, this.platformObject.setStorage(o);
                }
                if (e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.Hago ]) || e.Info.isPreview) {
                    if (e.isEngine(e.EngineType.CocosCreator)) {
                        cc.sys.localStorage.setItem(t.key, t.data);
                        try {
                            t.success();
                        } catch (e) {}
                    } else if (e.isEngine(e.EngineType.LayaAir)) {
                        localStorage.setItem(t.key, t.data);
                        try {
                            t.success();
                        } catch (e) {}
                    }
                } else {
                    if (!e.isPlatform(e.Platform.Kuaidianwan)) return this.platformObject.setStorage(t);
                    GameAssistantWeb.setStorage(t.key, t.data), null === (n = t.success) || void 0 === n || n.call(t);
                }
            }
        }, {
            key: "removeStorageSync",
            value: function(t) {
                if (e.isPlatform(e.Platform.Vivo)) {
                    var n = {};
                    return n.key = t, this.platformObject.deleteStorageSync(n);
                }
                if (e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.Hago ]) || e.Info.isPreview) e.isEngine(e.EngineType.CocosCreator) ? cc.sys.localStorage.removeItem(t) : e.isEngine(e.EngineType.LayaAir) && localStorage.removeItem(t); else {
                    if (!e.isPlatform(e.Platform.Kuaidianwan)) return this.platformObject.removeStorageSync(t);
                    GameAssistantWeb.removeStorage(t);
                }
            }
        }, {
            key: "removeStorage",
            value: function(t) {
                var n;
                if (e.isPlatform(e.Platform.Vivo)) return this.platformObject.deleteStorage(t);
                if (e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.Hago ]) || e.Info.isPreview) {
                    if (e.isEngine(e.EngineType.CocosCreator)) {
                        cc.sys.localStorage.removeItem(t.key);
                        try {
                            t.success();
                        } catch (e) {}
                    } else if (e.isEngine(e.EngineType.LayaAir)) {
                        localStorage.removeItem(t.key);
                        try {
                            t.success();
                        } catch (e) {}
                    }
                } else {
                    if (!e.isPlatform(e.Platform.Kuaidianwan)) return this.platformObject.removeStorage(t);
                    GameAssistantWeb.removeStorage(t.key), null === (n = t.success) || void 0 === n || n.call(t);
                }
            }
        }, {
            key: "getStorageSync",
            value: function(t) {
                if (e.isPlatform(e.Platform.Vivo)) {
                    var n = {};
                    return n.key = t, this.platformObject.getStorageSync(n);
                }
                return e.isPlatform(e.Platform.OPPO) ? localStorage.getItem(t) : e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.Hago ]) || e.Info.isPreview ? e.isEngine(e.EngineType.CocosCreator) ? cc.sys.localStorage.getItem(t) : e.isEngine(e.EngineType.LayaAir) ? localStorage.getItem(t) : void 0 : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.getStorage(t) : e.isPlatform(e.Platform.Hago) ? null : this.platformObject.getStorageSync(t);
            }
        }, {
            key: "getStorage",
            value: function(t) {
                var n;
                if (this.platformObject.getStorage) return this.platformObject.getStorage(t);
                if (e.isPlatform([ e.Platform.Android, e.Platform.iOS, e.Platform.M4399MiniGame, e.Platform.Hago ]) || e.Info.isPreview) {
                    if (e.isEngine(e.EngineType.CocosCreator)) try {
                        t.success(cc.sys.localStorage.getItem(t.key));
                    } catch (e) {} else if (e.isEngine(e.EngineType.LayaAir)) try {
                        t.success(localStorage.getItem(t.key));
                    } catch (e) {}
                } else if (e.isPlatform(e.Platform.Kuaidianwan)) null === (n = t.success) || void 0 === n || n.call(t, GameAssistantWeb.getStorage(t.key)); else try {
                    t.success("");
                } catch (e) {}
            }
        }, {
            key: "navigateToMiniProgram",
            value: function(e) {
                var t, n;
                e.pkgName = null !== (t = e.pkgName) && void 0 !== t ? t : e.appId, (null !== (n = this.platformObject.navigateToMiniGame) && void 0 !== n ? n : this.platformObject.navigateToMiniProgram)(e);
            }
        }, {
            key: "getUserInfo",
            value: function(t) {
                return e.isPlatform(e.Platform.Vivo) ? this.platformObject.getUserInfo({
                    success: function(e) {
                        try {
                            var n = {};
                            n.nickName = e.data.nickName, n.avatarUrl = e.data.biggerAvatar, n.gender = 1 == e.data.gender ? "1" : 2 == e.data.gender ? "2" : "0", 
                            n.country = "", n.province = "", n.city = "", n.language = "zh_CN";
                            var o = {};
                            o.userInfo = n, o.rawData = "", o.signature = "", o.encryptedData = "", o.iv = "", 
                            o.cloudID = "", t.success(o);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            console.error(e);
                        }
                    },
                    fail: t.fail
                }) : this.platformObject.getUserInfo(t);
            }
        }, {
            key: "login",
            value: function(t) {
                return e.isPlatform(e.Platform.Vivo) ? this.platformObject.login({
                    success: function(e) {
                        try {
                            var n = {};
                            n.code = e.data.token, t.success(n);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            console.error(e);
                        }
                    },
                    fail: t.fail
                }) : e.isPlatform(e.Platform.QuTouTiao) ? this.platformObject.qttlogin(t) : this.platformObject.login(t);
            }
        }, {
            key: "checkIsUserAdvisedToRest",
            value: function(t) {
                var n = this;
                e.isPlatform(e.Platform.WeChat) && this.platformObject.checkIsUserAdvisedToRest({
                    todayPlayedTime: t,
                    success: function(e) {
                        e.result && n.showModal({
                            title: "防沉迷提示",
                            content: "你今日的游戏在线时长已达上限，或当前时段为未成年登陆限制时间段，您将无法继续游戏。",
                            showCancel: !1,
                            confirmText: "退出游戏",
                            success: function() {
                                n.exitMiniProgram();
                            }
                        });
                    }
                });
            }
        }, {
            key: "setOrientation",
            value: function(t) {
                e.isPlatform(e.Platform.YueYou) && Yzsdk.setOrientation(t);
            }
        }, {
            key: "setFullScreen",
            value: function(t) {
                e.isPlatform(e.Platform.YueYou) && Yzsdk.setFullScreen(t);
            }
        }, {
            key: "initYueYou",
            value: function() {
                e.isPlatform(e.Platform.YueYou) && Yzsdk.init();
            }
        }, {
            key: "getAuthCode",
            value: function(t, n, o) {
                e.isPlatform(e.Platform.YueYou) && Yzsdk.getAuthCode(t, n, o);
            }
        }, {
            key: "openGameAd",
            value: function(t, n, o, i, a, r) {
                e.isPlatform(e.Platform.YueYou) && Yzsdk.openGameAd(t, n, o, i, a, r);
            }
        }, {
            key: "addViewStateListener",
            value: function(t) {
                e.isPlatform(e.Platform.YueYou) && Yzsdk.addViewStateListener(t);
            }
        }, {
            key: "removeViewStateListener",
            value: function() {
                e.isPlatform(e.Platform.YueYou) && Yzsdk.removeViewStateListener();
            }
        }, {
            key: "screenWidth",
            value: function() {
                return e.isPlatform(e.Platform.YueYou) ? Yzsdk.screenWidth() : 0;
            }
        }, {
            key: "screenHeight",
            value: function() {
                return e.isPlatform(e.Platform.YueYou) ? Yzsdk.screenHeight() : 0;
            }
        }, {
            key: "joinVoIPChat",
            value: function(t) {
                e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.joinVoIPChat) ? wx.joinVoIPChat(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.joinVoIPChat) && qg.joinVoIPChat(t);
            }
        }, {
            key: "exitVoIPChat",
            value: function(t) {
                e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.exitVoIPChat) ? wx.exitVoIPChat(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.exitVoIPChat) && qg.exitVoIPChat(t);
            }
        }, {
            key: "updateVoIPChatMuteConfig",
            value: function(t) {
                e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.updateVoIPChatMuteConfig) ? wx.updateVoIPChatMuteConfig(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.updateVoIPChatMuteConfig) && qg.updateVoIPChatMuteConfig(t);
            }
        }, {
            key: "onVoIPChatSpeakersChanged",
            value: function(t) {
                e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.onVoIPChatSpeakersChanged) ? wx.onVoIPChatSpeakersChanged(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.onVoIPChatSpeakersChanged) && qg.onVoIPChatSpeakersChanged(t);
            }
        }, {
            key: "onVoIPChatMembersChanged",
            value: function(t) {
                e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.onVoIPChatMembersChanged) ? wx.onVoIPChatMembersChanged(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.onVoIPChatMembersChanged) && qg.onVoIPChatMembersChanged(t);
            }
        }, {
            key: "onVoIPChatInterrupted",
            value: function(t) {
                e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.onVoIPChatInterrupted) ? wx.onVoIPChatInterrupted(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.onVoIPChatInterrupted) && qg.onVoIPChatInterrupted(t);
            }
        }, {
            key: "offVoIPChatSpeakersChanged",
            value: function(t) {
                e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.offVoIPChatSpeakersChanged) ? wx.offVoIPChatSpeakersChanged(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.offVoIPChatSpeakersChanged) && qg.offVoIPChatSpeakersChanged(t);
            }
        }, {
            key: "offVoIPChatMembersChanged",
            value: function(t) {
                e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.offVoIPChatMembersChanged) ? wx.offVoIPChatMembersChanged(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.offVoIPChatMembersChanged) && qg.offVoIPChatMembersChanged(t);
            }
        }, {
            key: "offVoIPChatInterrupted",
            value: function(t) {
                e.isPlatform(e.Platform.WeChat) && (null === wx || void 0 === wx ? void 0 : wx.offVoIPChatInterrupted) ? wx.offVoIPChatInterrupted(t) : e.isPlatform(e.Platform.OPPO) && (null === qg || void 0 === qg ? void 0 : qg.offVoIPChatInterrupted) && qg.offVoIPChatInterrupted(t);
            }
        }, {
            key: "isRewardVideoAdReady",
            value: function() {
                return !!e.isPlatform([ e.Platform.iOS, e.Platform.Android ]) && this.platformObject.isRewardVideoAdReady();
            }
        } ]), t;
    }();
}(n || (n = {})), function(e) {
    var t = function() {
        function e(t) {
            d(this, e), this.seed = t, !this.seed && 0 != this.seed && (this.seed = new Date().getTime());
        }
        return c(e, [ {
            key: "value",
            get: function() {
                return this.range(0, 1);
            }
        }, {
            key: "range",
            value: function(e, t) {
                return e >= t ? e : (!this.seed && 0 != this.seed && (this.seed = new Date().getTime()), 
                t = t || 1, e = e || 0, this.seed = (9301 * this.seed + 49297) % 233280, e + this.seed / 233280 * (t - e));
            }
        }, {
            key: "rangeInt",
            value: function(e, t) {
                if (e >= t) return e;
                if (t - e >= 233280) return 0;
                !this.seed && 0 != this.seed && (this.seed = new Date().getTime()), t = t || 1, 
                e = e || 0, this.seed = (9301 * this.seed + 49297) % 233280;
                var n = this.seed / 233280;
                return e + Math.floor(n * (t - e + .9));
            }
        } ], [ {
            key: "internalInstance",
            get: function() {
                return null == this._internalInstance && (this._internalInstance = new e()), this._internalInstance;
            }
        }, {
            key: "value",
            get: function() {
                return this.internalInstance.range(0, 1);
            }
        }, {
            key: "range",
            value: function(e, t) {
                return this.internalInstance.range(e, t);
            }
        }, {
            key: "rangeInt",
            value: function(e, t) {
                return this.internalInstance.rangeInt(e, t);
            }
        } ]), e;
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
        for (var t, o = arguments.length, a = new Array(o), r = 0; r < o; r++) a[r] = arguments[r];
        e.Info.debugLog && (i(e.EngineType.LayaAir) && n([ e.Platform.iOS, e.Platform.Android ]) ? console.log("GA:" + a.join(",")) : (t = console).log.apply(t, [ "GA:" ].concat(a)));
    }
    function r() {
        for (var t, o = arguments.length, a = new Array(o), r = 0; r < o; r++) a[r] = arguments[r];
        i(e.EngineType.LayaAir) && n([ e.Platform.iOS, e.Platform.Android ]) ? console.warn("GA:" + a.join(",")) : (t = console).warn.apply(t, [ "GA:" ].concat(a));
    }
    function l(t) {
        if (!n(e.Platform.M4399MiniGame) && !o(e.DistributionChannel.GooglePlay)) {
            if (e.PA && e.PA.request && !n([ e.Platform.Vivo, e.Platform.Hago ])) {
                var i = {};
                return i.appid = e.Info.appId, t.header = i, e.PA.request(t);
            }
            var a = new XMLHttpRequest();
            a.onreadystatechange = function() {
                if (4 == a.readyState) {
                    var e = a.responseText, n = {
                        data: "",
                        statusCode: a.status,
                        header: {},
                        errMsg: a.getAllResponseHeaders()
                    };
                    try {
                        var o = JSON.parse(e);
                        n.data = o;
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        n.data = a.responseText;
                    }
                    a.status >= 200 && a.status < 400 ? "function" == typeof t.success && t.success(n) : (r('request fail with url : "' + t.url + '"'), 
                    "function" == typeof t.fail && t.fail(n));
                }
            }, a.onerror = function() {
                if (t.fail) {
                    t.fail({
                        errMsg: "request onerror"
                    });
                }
            }, a.onabort = function() {
                if (t.fail) {
                    t.fail({
                        errMsg: "request onabort"
                    });
                }
            }, void 0 === t.method && (t.method = "GET"), a.open(t.method, t.url, !0), n(e.Platform.Hago) ? a.setRequestHeader("Content-Type", "application/json;charset=utf-8") : a.setRequestHeader("Content-type", "application/json;charset=utf-8"), 
            a.setRequestHeader("appid", e.Info.appId), void 0 === t.data ? a.send() : a.send(JSON.stringify(t.data));
        }
    }
    function s(o, i) {
        "onlinetime" != o[0].eventId && a("sentLogs:" + JSON.stringify(o)), o.forEach(function(e) {
            if (null != e.extraNum) try {
                var t = null != e.detail ? JSON.parse(e.detail) : {};
                t.extraNum = e.extraNum, e.detail = JSON.stringify(t);
            } catch (e) {}
        }), e.request({
            url: e.Urls.SaveLog,
            data: {
                appid: e.Info.appId,
                uuid: e.Info.openId,
                list: o,
                channel: e.Info.channelId,
                device: e.PA.getSystemInfoSync().model
            },
            method: "POST",
            success: function() {
                try {
                    i();
                } catch (e) {}
            }
        }), (n([ e.Platform.Android ]) || n(e.Platform.iOS)) && o.forEach(function(e) {
            var n;
            if ("onlinetime" != e.eventId) try {
                t.PROXY.sendEvent(e.eventId, null !== (n = e.detail) && void 0 !== n ? n : "{}");
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                console.error(e);
            }
        });
    }
    e.isPlatform = n, e.isDistributionChannel = o, e.isEngine = i, e.log = a, e.warn = r, 
    e.error = function() {
        for (var t, o = arguments.length, a = new Array(o), r = 0; r < o; r++) a[r] = arguments[r];
        i(e.EngineType.LayaAir) && n([ e.Platform.iOS, e.Platform.Android ]) ? console.error("GA:" + a.join(",")) : (t = console).error.apply(t, [ "GA:" ].concat(a));
    }, e.UnsupportLog = function(t) {
        r("当前平台 " + e.Info.platform + " 暂不支持 " + t);
    }, e.request = l, e.sentLogs = s, e.sentLog = function(e, t, n, o) {
        s([ {
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
        var t = Math.round(e).toString(), n = t.indexOf("e+");
        if (n > 0) {
            var o = t.substr(n + 2);
            return t.substr(0, 4) + "E" + o;
        }
        var i = Math.round(e).toString().length - 1;
        return (e / Math.pow(10, i)).toFixed(1) + "E" + i;
    }, e.formatTime = function(e) {
        var t = Math.floor(e / 3600), n = Math.floor((e - 3600 * t) / 60), o = Math.floor(e % 60), i = "";
        return t > 0 && (i = (t < 10 ? "0" : "") + t.toFixed() + ":"), i + (n < 10 ? "0" : "") + n.toFixed() + ":" + (o < 10 ? "0" : "") + o.toFixed();
    }, e.rand = function(e, t) {
        var n = Math.floor(e + Math.random() * (t - e + 1));
        return n = Math.min(n, t), Math.max(n, e);
    }, e.randFloat = function(e, t) {
        return e + Math.random() * (t - e);
    }, e.saveRedirect = function(t, n, o) {
        var i = {};
        i.Openid = e.Info.openId, i.Channel = e.Info.channelId, i.Appid = e.Info.appId, 
        i.Type = t, i.TargetAppid = "", i.Path = "";
        var a = i;
        if ("string" == typeof n) a.TargetAppid = n, a.Path = o; else {
            a.TargetAppid = n.appid, a.Path = n.path;
            var r = {};
            r.url = e.Urls.SaveRedirect, r.data = {}, r.method = "POST", r.success = function(e) {}, 
            r.data.userId = e.Info.uid, r.data.redirectId = n.id, l(r);
        }
        l({
            url: e.Urls.SaveRedirect,
            data: a,
            method: "POST",
            success: function(e) {
                console.log("Navigate to ", a);
            }
        });
    }, e.loadServerConfig = function() {
        return new Promise(function(t, n) {
            e.request({
                url: e.Urls.GameConfig + "?userId=" + e.Info.uid,
                method: "POST",
                data: [],
                success: function(e) {
                    var o;
                    0 == (null === (o = null == e ? void 0 : e.data) || void 0 === o ? void 0 : o.code) ? t(e.data.data) : n(e.data);
                },
                fail: function(e) {
                    n(e);
                }
            });
        });
    };
}(n || (n = {})), function(e) {
    e.version = "1.0.59", e.buildTime = "2022/3/2216:45:43";
}(n || (n = {})), function(e) {
    var t, n;
    (n = t || (t = {}))[n.Invalid = 0] = "Invalid", n[n.Loaded = 1] = "Loaded", n[n.Error = 2] = "Error", 
    n[n.Shown = 3] = "Shown", n[n.Hidden = 4] = "Hidden";
    var o = "Banner", i = new (function() {
        function n() {
            d(this, n), this.initOptions = new Map(), this.showOptions = new Map(), this.ads = new Map(), 
            this.status = new Map(), this.showCount = new Map(), this.sizes = new Map(), this.tryShowCount = 0;
        }
        return c(n, [ {
            key: "initBannerAd",
            value: function(n) {
                var i, a, r = this, l = null !== (i = null == (a = Array.isArray(n) ? n[0] : n) ? void 0 : a.adTag) && void 0 !== i ? i : o;
                this.initOptions.set(l, a), this.status.set(l, t.Invalid);
                var s, u, d = e.PA.getSystemInfoSync();
                if (u = e.isPlatform([ e.Platform.WeChat ]) ? d.screenWidth > d.screenHeight ? 300 / d.designPixelRatio : d.screenWidth : Math.min(d.screenWidth, d.screenHeight), 
                e.isPlatform([ e.Platform.Vivo ])) s = {
                    posId: a.adId,
                    adIntervals: null == a ? void 0 : a.adIntervals,
                    style: {
                        left: 0,
                        top: (e.Info.resolution.height - 100) / e.PA.getSystemInfoSync().designPixelRatio
                    }
                }; else {
                    var c = {
                        left: 0,
                        top: 0
                    };
                    c.width = u;
                    var f = {};
                    f.adUnitId = a.adId, f.adIntervals = null == a ? void 0 : a.adIntervals, f.style = c, 
                    s = f;
                }
                var h = e.PA.createBannerAd(s);
                this.ads.set(l, h), h.onLoad(function() {
                    r.status.set(l, t.Loaded);
                }), h.onError(function(n) {
                    r.status.set(l, t.Error), e.warn("banner onError:", n);
                }), e.isPlatform([ e.Platform.Vivo ]) || h.onResize(function(e) {
                    var t = {};
                    t.width = e.width, t.height = e.height, r.sizes.set(l, t), r.updateBannerPosition(l);
                });
            }
        }, {
            key: "tryInitBannerAd",
            value: function(n) {
                var i, a, r, l = this, s = null !== (i = n.initOption.adTag) && void 0 !== i ? i : o;
                this.status.set(s, t.Invalid);
                var u, d, c = e.PA.getSystemInfoSync();
                if (d = e.isPlatform([ e.Platform.WeChat ]) ? c.screenWidth > c.screenHeight ? 300 / c.designPixelRatio : c.screenWidth : Math.min(c.screenWidth, c.screenHeight), 
                e.isPlatform([ e.Platform.Vivo ])) u = {
                    posId: n.initOption.adId,
                    adIntervals: null === (a = n.initOption) || void 0 === a ? void 0 : a.adIntervals,
                    style: {
                        left: 0,
                        top: (e.Info.resolution.height - 100) / e.PA.getSystemInfoSync().designPixelRatio
                    }
                }; else {
                    var f = {
                        left: 0,
                        top: 0
                    };
                    f.width = d;
                    var h = {};
                    h.adUnitId = n.initOption.adId, h.adIntervals = null === (r = n.initOption) || void 0 === r ? void 0 : r.adIntervals, 
                    h.style = f, u = h;
                }
                var v = e.PA.createBannerAd(u);
                this.ads.set(s, v), v.onLoad(function() {
                    l.status.set(s, t.Loaded), n.success();
                }), v.onError(function(n) {
                    l.status.set(s, t.Error), e.warn("banner onError:", n);
                }), e.isPlatform([ e.Platform.Vivo ]) || v.onResize(function(e) {
                    var t = {};
                    t.width = e.width, t.height = e.height, l.sizes.set(s, t), l.updateBannerPosition(s);
                });
            }
        }, {
            key: "updateBannerPosition",
            value: function(t) {
                var n, o;
                if (!e.isPlatform([ e.Platform.Vivo ])) {
                    var i = this.showOptions.get(t), a = this.ads.get(t), r = this.sizes.get(t);
                    if (a && r) {
                        var l, s, u = e.PA.getSystemInfoSync();
                        l = null != (null === (n = null == i ? void 0 : i.style) || void 0 === n ? void 0 : n.offsetX) ? i.style.offsetX : (u.windowWidth - r.width) / 2, 
                        s = null != (null === (o = null == i ? void 0 : i.style) || void 0 === o ? void 0 : o.offsetY) ? u.windowHeight - r.height - i.style.offsetY : u.windowHeight - r.height, 
                        a.style.left = l, a.style.top = s, e.log("update banner position left:" + l + " top:" + s);
                    }
                }
            }
        }, {
            key: "showBanner",
            value: function(n) {
                var i, a, r = this;
                this.tryShowCount++;
                var l = null !== (i = null == n ? void 0 : n.adTag) && void 0 !== i ? i : o, s = this.sizes.get(l), u = e.PA.getSystemInfoSync();
                if (this.showOptions.set(l, n), this.ads.has(l)) {
                    var d, c = this.ads.get(l);
                    if (d = (null === (a = null == n ? void 0 : n.style) || void 0 === a ? void 0 : a.width) ? n.style.width : e.isPlatform([ e.Platform.WeChat ]) ? u.screenWidth > u.screenHeight ? 300 / u.designPixelRatio : u.screenWidth : Math.min(u.screenWidth, u.screenHeight), 
                    !e.isPlatform([ e.Platform.Vivo ]) && (c.style.width = d), (null == s ? void 0 : s.width) == d && this.updateBannerPosition(l), 
                    this.status.get(l) == t.Shown) return void (this.tryShowCount = 0);
                    c.show().then(function() {
                        r.tryShowCount = 0, r.status.set(l, t.Shown);
                    }).catch(function(e) {
                        try {
                            r.tryShowCount > 1 ? (r.tryShowCount = 0, null == n || n.fail()) : r.tryInitBannerAd({
                                initOption: r.initOptions.get(l),
                                success: function() {
                                    r.showBanner(n);
                                }
                            });
                        } catch (e) {}
                    });
                } else this.tryShowCount = 0, e.warn("显示banner失败,广告标签" + l + "不存在");
            }
        }, {
            key: "hideBanner",
            value: function(e) {
                var n, i = null != e ? e : o;
                try {
                    if (this.ads.has(i)) {
                        this.showCount.has(i) ? this.showCount.set(i, this.showCount.get(i) + 1) : this.showCount.set(i, 1);
                        var a = this.showCount.get(i), r = this.ads.get(i), l = null === (n = this.initOptions.get(i)) || void 0 === n ? void 0 : n.validTimes;
                        r && (a && l && a >= l ? r.destroy && (this.showCount.delete(i), r.destroy(), this.status.set(i, t.Invalid), 
                        this.initBannerAd(this.initOptions.get(i))) : r.hide && (r.hide(), this.status.set(i, t.Hidden)));
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    e(e);
                }
            }
        }, {
            key: "hideAllBanner",
            value: function() {}
        }, {
            key: "resumeShowBanner",
            value: function() {}
        }, {
            key: "clearAllBanner",
            value: function() {}
        }, {
            key: "isExistBanner",
            value: function(e) {
                return !(!this.ads.has(e) || this.status.get(e) != t.Loaded && this.status.get(e) != t.Shown && this.status.get(e) != t.Hidden);
            }
        } ]), n;
    }())();
    e.initBannerAd = function(t) {
        !e.isPlatform([ e.Platform.Android ]) && (null == i || i.initBannerAd(t));
    }, e.showBanner = function(t) {
        var n, o, a, r, l, s, u, d;
        if (e.isPlatform([ e.Platform.Android, e.Platform.iOS ])) {
            var c = null !== (o = null === (n = null == t ? void 0 : t.style) || void 0 === n ? void 0 : n.offsetX) && void 0 !== o ? o : 0, f = null !== (r = null === (a = null == t ? void 0 : t.style) || void 0 === a ? void 0 : a.offsetY) && void 0 !== r ? r : 0, h = null !== (s = null === (l = null == t ? void 0 : t.style) || void 0 === l ? void 0 : l.width) && void 0 !== s ? s : 0, v = null !== (d = null === (u = null == t ? void 0 : t.style) || void 0 === u ? void 0 : u.height) && void 0 !== d ? d : 0;
            e.PA.showBanner(c, f, h, v);
        } else e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.showBanner() : null == i || i.showBanner(t);
    }, e.hideBanner = function(t) {
        e.isPlatform([ e.Platform.Android, e.Platform.iOS ]) ? e.PA.hideBanner() : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.hideBanner() : null == i || i.hideBanner(t);
    }, e.hideAllBanner = function() {
        e.isPlatform([ e.Platform.Android ]) ? e.PA.hideAllBanner() : e.isPlatform(e.Platform.iOS) || null == i || i.hideAllBanner();
    }, e.resumeShowBanner = function() {
        e.isPlatform([ e.Platform.Android ]) ? e.PA.resumeShowBanner() : e.isPlatform(e.Platform.iOS) || null == i || i.resumeShowBanner();
    }, e.clearAllBanner = function() {
        e.isPlatform([ e.Platform.Android ]) ? e.PA.clearAllBanner() : e.isPlatform(e.Platform.iOS) || null == i || i.clearAllBanner();
    }, e.isExistBanner = function(e) {
        return null == i ? void 0 : i.isExistBanner(e);
    };
}(n || (n = {})), n || (n = {}), function(e) {
    var t = new (function() {
        return function e() {
            d(this, e);
        };
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
    var t = new (function() {
        function t() {
            d(this, t);
        }
        return c(t, [ {
            key: "initGameBannerAd",
            value: function(t, n) {
                if (e.isPlatform([ e.Platform.Vivo, e.Platform.OPPO ]) && !e.Info.isPreview) {
                    if (!n && (n = {
                        left: 100 / e.PA.getSystemInfoSync().designPixelRatio,
                        top: (e.Info.resolution.height - 200) / e.PA.getSystemInfoSync().designPixelRatio,
                        orientation: "horizontal"
                    }), e.isOPPO()) {
                        var o = {};
                        o.adUnitId = t, o.style = n, this.gameBannerAd = e.PA.createGameBannerAd(o);
                    } else if (e.isVivo()) {
                        var i = {};
                        i.posId = t, this.gameBannerAd = e.PA.createBoxBannerAd(i);
                    }
                    this.gameBannerAd.onError(function(t) {
                        e.log("GameBannerAd error:", t);
                    }), this.gameBannerAd.onLoad(function() {
                        e.log("GameBannerAd loaded");
                    });
                } else !e.Info.isPreview && e.log("当前平台：" + e.Info.platform + "暂不支持互推横幅广告");
            }
        }, {
            key: "showGameBannerAd",
            value: function() {
                e.log("try show GameBannerAd"), this.gameBannerAd ? this.gameBannerAd.show().then(function() {
                    console.log("GameBannerAd show success");
                }).catch(function(e) {
                    console.log("GameBannerAd show fail with:" + e);
                }) : e.log("GameBannerAd not init");
            }
        }, {
            key: "hideGameBannerAd",
            value: function() {
                this.gameBannerAd ? (e.log("GameBannerAd hide"), this.gameBannerAd.hide()) : e.log("GameBannerAd not init");
            }
        } ]), t;
    }())();
    e.initGameBannerAd = function(e, n) {
        t.initGameBannerAd(e, n);
    }, e.showGameBannerAd = function() {
        t.showGameBannerAd();
    }, e.hideGameBannerAd = function() {
        t.hideGameBannerAd();
    };
}(n || (n = {})), function(e) {
    var t = new (function() {
        function t() {
            d(this, t), this.adUnitId = "";
        }
        return c(t, [ {
            key: "initInterstitialAd",
            value: function(e) {
                this.adUnitId = e;
            }
        }, {
            key: "showInterstitialAd",
            value: function() {
                var t = {};
                t.adUnitId = this.adUnitId;
                var n = e.PA.createInterstitialAd(t);
                e.isPlatform([ e.Platform.Vivo, e.Platform.Kwaigame ]) ? n.show().then(function() {
                    e.log("InterstitialAd show");
                }).catch(function(t) {
                    e.log("InterstitialAd fail", JSON.stringify(t));
                }) : e.isPlatform([ e.Platform.ByteDance ]) ? n.load().then(function() {
                    n.show().then(function() {
                        e.log("InterstitialAd show");
                    });
                }).catch(function(t) {
                    e.log(t);
                }) : (n.onError(function(t) {
                    e.log("InterstitialAd error", t);
                }), n.onLoad(function() {
                    e.log("InterstitialAd onLoad"), n.show().catch(function(t) {
                        e.error("show", t);
                    });
                }), n.load().catch(function(t) {
                    e.error("InterstitialAd err", t);
                }));
            }
        } ]), t;
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
}(n || (n = {})), (n || (n = {})).showOfferWallAd = function(e) {}, function(e) {
    var t, n;
    (n = t || (t = {}))[n.Default = 0] = "Default", n[n.Loading = 1] = "Loading", n[n.Loaded = 2] = "Loaded", 
    n[n.Showing = 3] = "Showing", n[n.End = 4] = "End", n[n.Error = 5] = "Error";
    var o = new (function() {
        function n() {
            d(this, n), this.adIds = [], this.currAdIdIdx = -1, this.ad = null, this.showOption = null, 
            this.videoPlayTimeStamp = 0, this.status = t.Default, this.closeTip = "看完视频才能获得奖励哦", 
            this.videoPlayCallbacks = [], this.videoPlayEndCallbacks = [], this.videoCloseCallbacks = [];
        }
        return c(n, [ {
            key: "init",
            value: function(e) {
                this.adIds = e, this.currAdIdIdx = -1, this.initNextAd();
            }
        }, {
            key: "setCloseTip",
            value: function(e) {
                this.closeTip = e;
            }
        }, {
            key: "haveRewardVideo",
            value: function() {
                return e.isPlatform([ e.Platform.iOS, e.Platform.Android ]) ? e.PA.isRewardVideoAdReady() : this.status == t.Loaded;
            }
        }, {
            key: "onLoad",
            value: function() {
                this.status = t.Loaded;
            }
        }, {
            key: "onError",
            value: function(n) {
                var o, i;
                if (this.status = t.Error, this.showOption) {
                    if (!e.Info.isPreview) {
                        var a = {};
                        a.type = this.showOption.tag, a.page = null !== (o = this.showOption.page) && void 0 !== o ? o : "", 
                        e.sentLog("VideoAdFailed", null, a);
                    }
                    e.PA.showToast({
                        title: "抱歉，没有找到视频",
                        icon: "none",
                        mask: !1
                    }), null === (i = this.showOption) || void 0 === i || i.result({
                        errorMsg: JSON.stringify(n),
                        reward: !1,
                        shown: !1
                    });
                }
                e.isPlatform([ e.Platform.OPPO, e.Platform.Vivo ]) && this.ad.load(), this.showOption = null;
            }
        }, {
            key: "onClose",
            value: function(n) {
                var o, i, a;
                n.isEnded ? (e.Info.rewardUserData.data.has(this.showOption.tag) && e.Info.rewardUserData.data.get(this.showOption.tag).currCount++, 
                this.videoCloseCallbacks.forEach(function(e) {
                    try {
                        e(n.isEnded);
                    } catch (e) {}
                }), this.videoPlayEndCallbacks.forEach(function(e) {
                    try {
                        e();
                    } catch (e) {}
                })) : this.videoCloseCallbacks.forEach(function(e) {
                    try {
                        e(n.isEnded);
                    } catch (e) {}
                }), this.status = t.End;
                var r = {};
                if (r.reward = null == n ? void 0 : n.isEnded, r.shown = !0, r.ecpm = null !== (i = n.ecpm) && void 0 !== i ? i : 0, 
                null === (o = this.showOption) || void 0 === o || o.result(r), !e.Info.isPreview && e.sentLog((null == n ? void 0 : n.isEnded) ? "VideoAdEnded" : "VideoAdClosed", Math.round((Date.now() - this.videoPlayTimeStamp) / 1e3), {
                    type: this.showOption.tag,
                    page: null !== (a = this.showOption.page) && void 0 !== a ? a : ""
                }), e.isPlatform([ e.Platform.OPPO, e.Platform.Vivo ]) && !e.Info.isPreview && this.ad.load(), 
                this.showOption = null, this.status = t.End, !(null == n ? void 0 : n.isEnded) && this.closeTip && "" != this.closeTip) {
                    var l = {};
                    l.title = this.closeTip, l.mask = !0, l.icon = "none", e.PA.showToast(l);
                }
            }
        }, {
            key: "initNextAd",
            value: function() {
                var n = this;
                if (this.adIds.length > 0 && !e.isPlatform(e.Platform.Android)) if (this.currAdIdIdx = (this.currAdIdIdx + 1) % this.adIds.length, 
                this.status = t.Loading, e.isPlatform(e.Platform.Hago)) {
                    var o = {};
                    o.adUnitId = this.adIds[this.currAdIdIdx];
                    var i = window.hg.createRewardedVideoAd(o);
                    i.onClose = function(e) {
                        n.onClose(e);
                    }, i.onError = function() {
                        e.log("中途关闭广告或者拉取广告失败");
                    }, this.ad = i;
                } else this.ad = e.PA.createRewardedVideoAd({
                    adUnitId: this.adIds[this.currAdIdIdx],
                    multiton: !1
                }), this.ad.onLoad(function() {
                    n.onLoad();
                }), this.ad.onError(function(e) {
                    n.onError(e);
                }), this.ad.onClose(function(e) {
                    n.onClose(e);
                }), e.isPlatform([ e.Platform.OPPO, e.Platform.Vivo ]) && this.ad.load();
            }
        }, {
            key: "showVideoAd",
            value: function(t) {
                var n, o = this;
                if (this.showOption) e.log("reward video is showing with " + this.showOption.page + " - " + this.showOption.tag); else {
                    if (this.videoPlayTimeStamp = Date.now(), this.showOption = t, !e.Info.isPreview) {
                        var i = {};
                        i.type = this.showOption.tag, i.page = null !== (n = this.showOption.page) && void 0 !== n ? n : "", 
                        e.sentLog("TryPlayVideoAd", null, i);
                    }
                    if (e.Info.isPreview) {
                        this.onClose({
                            isEnded: !0
                        });
                    } else e.isPlatform(e.Platform.QuTouTiao) ? qttGame.showVideo(function(e) {
                        var t = {};
                        t.isEnded = 1 == e, o.onClose(t);
                    }) : e.isPlatform(e.Platform.Kuaidianwan) ? GameAssistantWeb.showRewardVideo(function(e) {
                        var t = {};
                        t.isEnded = e, o.onClose(t);
                    }) : e.isPlatform(e.Platform.Android) ? e.PA.showRewardVideoAd(function(t) {
                        var n;
                        if (e.log("reward video Android show callback:" + JSON.stringify(t)), t.shown) {
                            var i = {};
                            i.isEnded = t.reward, i.ecpm = t.ecpm, o.onClose(i);
                        } else o.showOption && (null === (n = o.showOption) || void 0 === n || n.result({
                            errorMsg: JSON.stringify(t),
                            reward: !1,
                            shown: !1
                        })), o.showOption = null;
                    }) : e.isPlatform(e.Platform.iOS) ? e.PA.showRewardVideoAd(function(t) {
                        var n;
                        if (e.log("reward video ios show callback:" + JSON.stringify(t)), t.shown) {
                            var i = {};
                            i.isEnded = t.reward, i.ecpm = t.ecpm, o.onClose(i);
                        } else o.showOption && (null === (n = o.showOption) || void 0 === n || n.result({
                            errorMsg: JSON.stringify(t),
                            reward: !1,
                            shown: !1
                        })), o.showOption = null;
                    }) : e.isPlatform(e.Platform.M4399MiniGame) ? window.h5api.playAd(function(t) {
                        if (e.log("code:" + t.code + ",message:" + t.message), 1e4 === t.code) o.videoPlayCallbacks.forEach(function(e) {
                            try {
                                e();
                            } catch (e) {}
                        }); else if (10001 === t.code) {
                            o.onClose({
                                isEnded: !0
                            });
                        } else o.showOption = null, o.videoCloseCallbacks.forEach(function(e) {
                            try {
                                e();
                            } catch (e) {}
                        });
                    }) : (null == this.ad && this.initNextAd(), this.ad.show().then(function(e) {
                        o.videoPlayTimeStamp = Date.now(), o.showAdResult(!0, "");
                    }).catch(function(e) {
                        o.showAdResult(!1, JSON.stringify(e));
                    }));
                }
            }
        }, {
            key: "showAdResult",
            value: function(t, n) {
                var o;
                if (this.showOption && !e.Info.isPreview) {
                    var i = {};
                    i.type = this.showOption.tag, i.page = null !== (o = this.showOption.page) && void 0 !== o ? o : "", 
                    e.sentLog(t ? "VideoAdSuccess" : "VideoAdFailed", null, i);
                }
                if (t) this.videoPlayCallbacks.forEach(function(e) {
                    try {
                        e();
                    } catch (e) {}
                }); else {
                    e.isPlatform([ e.Platform.OPPO, e.Platform.Vivo ]) && this.ad.load();
                    var a = {
                        errCode: 1
                    };
                    a.errMsg = n, this.onError(a);
                }
            }
        }, {
            key: "addPlayCallback",
            value: function(e) {
                this.videoPlayCallbacks.push(e);
            }
        }, {
            key: "addPlayEndCallback",
            value: function(e) {
                this.videoPlayEndCallbacks.push(e);
            }
        }, {
            key: "addCloseCallback",
            value: function(e) {
                this.videoCloseCallbacks.push(e);
            }
        }, {
            key: "removePlayCallback",
            value: function(e) {
                var t = this.videoPlayCallbacks.indexOf(e);
                t >= 0 && this.videoPlayCallbacks.splice(t, 1);
            }
        }, {
            key: "removePlayEndCallback",
            value: function(e) {
                var t = this.videoPlayEndCallbacks.indexOf(e);
                t >= 0 && this.videoPlayEndCallbacks.splice(t, 1);
            }
        }, {
            key: "removeCloseCallback",
            value: function(e) {
                var t = this.videoCloseCallbacks.indexOf(e);
                t >= 0 && this.videoCloseCallbacks.splice(t, 1);
            }
        } ]), n;
    }())();
    e.haveRewardVideo = function() {
        return o.haveRewardVideo();
    }, e.showVideoAd = function(e) {
        o.showVideoAd(e);
    }, e.initRewardVideoAd = function(t) {
        !e.Info.isPreview && o.init(t);
    }, e.addVideoPlayCallback = function(e) {
        o.addPlayCallback(e);
    }, e.addVideoEndCallback = function(e) {
        o.addPlayEndCallback(e);
    }, e.addVideoCloseCallback = function(e) {
        o.addCloseCallback(e);
    }, e.removeVideoPlayCallback = function(e) {
        o.removePlayCallback(e);
    }, e.removeVideoEndCallback = function(e) {
        o.removePlayEndCallback(e);
    }, e.removeVideoCloseCallback = function(e) {
        o.removeCloseCallback(e);
    }, e.setInterruptPlayTip = function(e) {
        o.setCloseTip(e);
    };
}(n || (n = {})), function(e) {
    e.showSplashAd = function() {
        var t;
        e.Info.isPreview || e.isPlatform(e.Platform.Kuaidianwan) || null === (t = e.PA.showSplashAd) || void 0 === t || t.call(e.PA);
    };
}(n || (n = {})), function(e) {
    !function(t) {
        var n;
        (n = t.Action || (t.Action = {}))[n.Active = 0] = "Active", n[n.Register = 1] = "Register", 
        n[n.Pay = 2] = "Pay", n[n.NextDay = 6] = "NextDay", n[n.KeyAction = 25] = "KeyAction";
        var o = {
            clue_token: "",
            ad_id: "",
            creative_id: ""
        };
        t.init = function() {
            var t, n, i, a, r, l;
            if (e.isPlatform([ e.Platform.WeChat ])) {
                var s = e.PA.getLaunchOptionsSync();
                o.clue_token = null !== (n = null === (t = null == s ? void 0 : s.query) || void 0 === t ? void 0 : t.clue_token) && void 0 !== n ? n : "", 
                o.ad_id = null !== (a = null === (i = null == s ? void 0 : s.query) || void 0 === i ? void 0 : i.ad_id) && void 0 !== a ? a : "", 
                o.creative_id = null !== (l = null === (r = null == s ? void 0 : s.query) || void 0 === r ? void 0 : r.creative_id) && void 0 !== l ? l : "", 
                e.addVideoEndCallback(function() {
                    e.request({
                        url: "https://game.17tcw.com/default/user/videoAd",
                        method: "POST",
                        data: {
                            userId: e.Info.uid,
                            adType: "RewardVideoAd",
                            ecpm: 0
                        },
                        success: function(t) {
                            e.log("RewardVideoAd: " + JSON.stringify(t));
                        }
                    });
                });
            }
        }, t.reportKeyAction = function(t) {
            var n;
            (null === (n = o.clue_token) || void 0 === n ? void 0 : n.length) > 0 && e.request({
                url: "https://game.17tcw.com/default/put/reportWX",
                method: "POST",
                data: {
                    uid: e.Info.uid,
                    event_type: t,
                    clueToken: o.clue_token,
                    ad_id: o.ad_id
                },
                success: function(t) {
                    e.log("Report KeyAction: " + JSON.stringify(t));
                }
            });
        }, t.videoAd = function() {};
    }(e.AdTracking || (e.AdTracking = {}));
}(n || (n = {})), function(t) {
    t.AndroidProxy = function(t) {
        s(i, t);
        var o = u(i);
        function i() {
            var e;
            d(this, i), (e = o.call(this)).compatibleMethods = [ "onShareMessageToFriend", "showShareMenu", "onShareTimeline", "onShareAppMessage", "getUpdateManager", "onTouchEnd", "onTouchStart", "offTouchStart", "offTouchEnd", "triggerGC" ], 
            e.bridge = null, e.isSplashAdEnd = !1, e.splashAdEndCallback = null, e.callbacks = new Map(), 
            e.times = 0, e.offerWallListener = null, e.compatibleMethods.forEach(function(t) {
                e[t] = function() {
                    console.log("Android 暂不支持" + t);
                };
            });
            try {
                e.bridge = PlatformClass.createClass("com.kariqu.sdkmanager.JavaScriptProxy");
            } catch (e) {}
            return e;
        }
        return c(i, [ {
            key: "signInGoogle",
            value: function() {
                e.signIn();
            }
        }, {
            key: "signInGoogleSilently",
            value: function() {
                e.signInSilently();
            }
        }, {
            key: "signOutGoogle",
            value: function() {
                e.signOut();
            }
        }, {
            key: "saveFile",
            value: function(t) {
                e.saveFile(t);
            }
        }, {
            key: "loadSavefile",
            value: function() {
                e.loadSavefile();
            }
        }, {
            key: "setNonConsumableProduct",
            value: function(t) {
                e.setAcknowledgedSku(t);
            }
        }, {
            key: "getProductDetail",
            value: function(t, o) {
                n.isDistributionChannel(n.DistributionChannel.GooglePlay) ? e.loadSkuDetail(t, []) : this.native("requestProductInfo", "(Ljava/lang/String;I)V", JSON.stringify(t), null != o ? o : 0);
            }
        }, {
            key: "requestPayment",
            value: function(t, o) {
                n.isDistributionChannel(n.DistributionChannel.GooglePlay) ? e.purchaseSku(t) : this.native("requestPayProduct", "(Ljava/lang/String;I)V", t, null != o ? o : 0);
            }
        }, {
            key: "checkPurchase",
            value: function() {
                n.isDistributionChannel(n.DistributionChannel.GooglePlay) ? e.checkPurchase() : this.native("checkUnfinishedTransaction", "()V");
            }
        }, {
            key: "fetchRemoteConfig",
            value: function() {
                e.syncRemoteConfig();
            }
        }, {
            key: "confirmPurchase",
            value: function(t) {
                n.isDistributionChannel(n.DistributionChannel.GooglePlay) ? e.confirmPurchase(t) : this.native("finishTransaction", "(Ljava/lang/String;)V", t);
            }
        }, {
            key: "getRemoteConfig",
            value: function() {
                return e.getRemoteConfig();
            }
        }, {
            key: "getOrderInfo",
            value: function(t) {
                return n.isDistributionChannel(n.DistributionChannel.GooglePlay) ? e.getOrderInfo(t) : this.native("getTransactionInfo", "(Ljava/lang/String;)Ljava/lang/String;", t);
            }
        }, {
            key: "restoreNonConsumablePurchase",
            value: function() {
                n.isDistributionChannel(n.DistributionChannel.GooglePlay) ? e.recoverAcknowledgedPurchase() : this.native("restoreNonConsumableTransaction", "()V");
            }
        }, {
            key: "setUserId",
            value: function(e) {
                this.native("setUserId", "(Ljava/lang/String;)V", e);
            }
        }, {
            key: "setSplashAdEnd",
            value: function() {
                this.isSplashAdEnd = !0, this.splashAdEndCallback && this.splashAdEndCallback(), 
                this.splashAdEndCallback = null;
            }
        }, {
            key: "afterSplashAd",
            value: function(e) {
                this.isSplashAdEnd ? e() : this.splashAdEndCallback = e;
            }
        }, {
            key: "native",
            value: function(e, t) {
                for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
                console.log("call android native " + e + " " + t + " " + o.join(","));
                try {
                    var a, r;
                    return this.bridge ? (o.forEach(function(e) {
                        "number" == typeof e && (e *= 1);
                    }), (a = this.bridge).call.apply(a, [ e ].concat(o))) : (r = jsb.reflection).callStaticMethod.apply(r, [ "com/kariqu/sdkmanager/JavaScriptProxy", e, t ].concat(o));
                } catch (e) {}
            }
        }, {
            key: "callCallback",
            value: function(e) {
                if (this.callbacks.has(e)) try {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    this.callbacks.get(e).apply(void 0, n);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error(e);
                } finally {
                    this.callbacks.delete(e);
                }
            }
        }, {
            key: "uuid",
            value: function() {
                return this.times++, Date.now() + "-" + this.times;
            }
        }, {
            key: "onShow",
            value: function(e) {}
        }, {
            key: "offShow",
            value: function(e) {}
        }, {
            key: "onHide",
            value: function(e) {}
        }, {
            key: "offHide",
            value: function(e) {}
        }, {
            key: "getSystemInfoSync",
            value: function() {
                return JSON.parse(this.native("getSystemInfoSync", "()Ljava/lang/String;"));
            }
        }, {
            key: "getLaunchOptionsSync",
            value: function() {
                var e = null, t = this.native("getLaunchOptionsSync", "()Ljava/lang/String;");
                if (t && "" != t) try {
                    e = JSON.parse(t);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error(JSON.stringify(e));
                } else n.log("Android getLaunchOptionsSync error('').");
                return e;
            }
        }, {
            key: "exitMiniProgram",
            value: function() {
                this.native("exitApplication", "()V");
            }
        }, {
            key: "showRewardVideoAd",
            value: function(e) {
                var t = "showRewardVideoAd:" + this.uuid();
                this.callbacks.set(t, e);
                var n = "showRewardVideoAd:show:" + this.uuid();
                this.callbacks.set(n, e), this.native("showRewardVideoAd", "(Ljava/lang/String;Ljava/lang/String;)V", n, t);
            }
        }, {
            key: "showFullScreenVideoAd",
            value: function() {
                this.native("showFullScreenVideoAd", "()V");
            }
        }, {
            key: "showInterstitialAd",
            value: function() {
                this.native("showInterstitialAd", "()V");
            }
        }, {
            key: "showBanner",
            value: function(e, t, n, o) {
                var i = {};
                i.offsetX = null != e ? e : 0, i.offsetY = null != t ? t : 0, i.width = null != n ? n : 0, 
                i.height = null != o ? o : 0, this.native("showBanner", "(Ljava/lang/String;)V", JSON.stringify(i));
            }
        }, {
            key: "hideBanner",
            value: function() {
                this.native("hideBanner", "()V");
            }
        }, {
            key: "showNativeAd",
            value: function(e) {
                var t, n, o, i;
                e.offsetX = null !== (t = e.offsetX) && void 0 !== t ? t : 0, e.offsetY = null !== (n = e.offsetY) && void 0 !== n ? n : 0, 
                e.width = null !== (o = e.width) && void 0 !== o ? o : 0, e.height = null !== (i = e.height) && void 0 !== i ? i : 0, 
                this.native("showNativeAd", "(Ljava/lang/String;)V", JSON.stringify(e));
            }
        }, {
            key: "hideNativeAd",
            value: function() {
                this.native("hideNativeAd", "()V");
            }
        }, {
            key: "showOfferWallAd",
            value: function(e) {
                this.offerWallListener = e, this.native("showOfferWallAd", "()V");
            }
        }, {
            key: "onOfferwallAdCredited",
            value: function(e, t) {
                var n;
                null === (n = this.offerWallListener) || void 0 === n || n.call(this, e, t);
            }
        }, {
            key: "onOfferwallAdClosed",
            value: function() {
                this.offerWallListener = null;
            }
        }, {
            key: "showToast",
            value: function(e) {
                this.native("showToast", "(Ljava/lang/String;)V", JSON.stringify(e));
            }
        }, {
            key: "getLanguage",
            value: function() {
                return this.native("getLanguage", "()Ljava/lang/String;");
            }
        }, {
            key: "showModal",
            value: function(e) {
                var t, n, o = "showModal:" + this.uuid();
                this.native("showModal", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e.title, e.content, null !== (t = e.confirmText) && void 0 !== t ? t : "确认", e.showCancel ? null !== (n = e.cancelText) && void 0 !== n ? n : "取消" : "", o), 
                this.callbacks.set(o, e.success);
            }
        }, {
            key: "showLoading",
            value: function(e) {
                this.native("showLoading", "(Ljava/lang/String;)V", e.title);
            }
        }, {
            key: "hideLoading",
            value: function(e) {
                this.native("hideLoading", "()V");
            }
        }, {
            key: "showShareMenu",
            value: function(e) {
                this.native("showShareMenu", "()V");
            }
        }, {
            key: "shareAppMessage",
            value: function(e) {
                this.native("shareAppMessage", "(Ljava/lang/String;)V", JSON.stringify(e));
            }
        }, {
            key: "getUserInfo",
            value: function(e) {}
        }, {
            key: "getWeChatOpenId",
            value: function(e) {
                var t = this, n = "getWeChatOpenId:" + this.uuid();
                this.callbacks.set(n, function(o) {
                    var i;
                    e(null !== (i = o.openid) && void 0 !== i ? i : ""), t.callbacks.delete(n);
                }), this.native("getWeChatOpenId", "(Ljava/lang/String;)V", n);
            }
        }, {
            key: "login",
            value: function(e) {
                var t = this, n = "login:success:" + this.uuid();
                this.callbacks.set(n, e.success);
                var o = "login:fail:" + this.uuid();
                this.callbacks.set(o, e.fail);
                var i = "login:complete:" + this.uuid();
                this.callbacks.set(i, function() {
                    t.callbacks.delete(n), t.callbacks.delete(o), t.callbacks.delete(i);
                }), this.native("login", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", n, o, i);
            }
        }, {
            key: "setKeepScreenOn",
            value: function(e) {}
        }, {
            key: "vibrateShort",
            value: function(e) {
                this.native("vibrateShort", "()V");
            }
        }, {
            key: "vibrateLong",
            value: function(e) {
                this.native("vibrateLong", "()V");
            }
        }, {
            key: "setClipboardData",
            value: function(e) {
                this.native("setClipboardData", "(Ljava/lang/String;)V", e.data);
            }
        }, {
            key: "getClipboardData",
            value: function(e) {
                try {
                    e.success({
                        data: this.native("getClipboardData", "()Ljava/lang/String;")
                    });
                } catch (e) {}
            }
        }, {
            key: "getBatteryInfo",
            value: function(e) {}
        }, {
            key: "getBatteryInfoSync",
            value: function() {
                return {
                    level: 0,
                    isCharging: !1
                };
            }
        }, {
            key: "onOceanEngineInit",
            value: function() {
                this.native("onOceanEngineInit", "()V");
            }
        }, {
            key: "reportKeyAction",
            value: function(e) {
                e ? this.native("reportKeyAction", "(Ljava/lang/String;)V", e) : this.native("reportKeyAction", "()V");
            }
        }, {
            key: "onOceanEngineRegister",
            value: function(e, t) {
                this.native("onOceanEngineRegister", "(Ljava/lang/String;Z)V", e, t);
            }
        }, {
            key: "onOceanEnginePurchase",
            value: function(e, t) {
                this.native("onOceanEnginePurchase", "(Ljava/lang/String;Z)V", e, t);
            }
        }, {
            key: "jumpLeisureSubject",
            value: function() {
                this.native("jumpLeisureSubject", "()V");
            }
        }, {
            key: "exitApplication",
            value: function() {
                this.native("exitApplication", "()V");
            }
        }, {
            key: "isRewardVideoAdReady",
            value: function() {
                return this.native("isRewardVideoAdReady", "()Z");
            }
        }, {
            key: "sendEvent",
            value: function(e, t) {
                this.native("sendEvent", "(Ljava/lang/String;Ljava/lang/String;)V", e, t);
            }
        } ]), i;
    }(t.BaseAppProxy);
}(t || (t = {})), function(e) {
    window.AppProxy = e;
    var t, o, i, a = new (function() {
        function t() {
            d(this, t), this.isAndroid = !1, this.isiOS = !1;
        }
        return c(t, [ {
            key: "check",
            value: function(t) {
                if (null == e.PROXY) {
                    if (null == this.platform) {
                        try {
                            if (this.platform = jsb.reflection.callStaticMethod("com/kariqu/sdkmanager/JavaScriptProxy", "getPlatform", "()Ljava/lang/String;"), 
                            !this.platform) throw "";
                            console.log("Platform : Cocos Creator Android");
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            try {
                                if (this.platform = jsb.reflection.callStaticMethod("JavaScriptProxy", "getPlatform"), 
                                !this.platform) throw "";
                                console.log("Platform : Cocos Creator iOS");
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                try {
                                    if (this.platform = PlatformClass.createClass("com.kariqu.sdkmanager.JavaScriptProxy").call("getPlatform"), 
                                    !this.platform) throw "";
                                    console.log("Platform : LayaAir Android");
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    try {
                                        if (this.platform = PlatformClass.createClass("JavaScriptProxy").call("getPlatform"), 
                                        !this.platform) throw "";
                                        console.log("Platform : LayaAir iOS");
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        console.log("Platform : null, default " + t), this.platform = null;
                                    }
                                }
                            }
                        }
                        null == this.platform && (this.platform = t);
                    }
                    console.log("AppProxy Platform is " + this.platform + " default is " + t), this.platform == n.Platform.Android ? (this.isAndroid = !0, 
                    e.PROXY = new e.AndroidProxy(), console.log("AppProxy PROXY init " + (null == e.PROXY ? "failed" : "success") + " Platform:" + this.platform)) : this.platform == n.Platform.iOS && (this.isiOS = !0, 
                    e.PROXY = new e.IOSProxy(), console.log("AppProxy PROXY init " + (null == e.PROXY ? "failed" : "success") + " Platform:" + this.platform));
                }
            }
        }, {
            key: "isAndroidApp",
            value: function() {
                return this.isAndroid;
            }
        }, {
            key: "isiOSApp",
            value: function() {
                return this.isiOS;
            }
        } ]), t;
    }())();
    (t = e.ProductType || (e.ProductType = {}))[t.Consumable = 0] = "Consumable", t[t.NonConsumable = 1] = "NonConsumable", 
    t[t.Subscription = 2] = "Subscription", (i = o = e.ListenerKey || (e.ListenerKey = {})).SIGN_IN = "SIGN_IN", 
    i.SIGN_IN_FAILED = "SIGN_IN_FAILED", i.SIGN_OUT = "SIGN_OUT", i.SAVE_FILE = "SAVE_FILE", 
    i.LOAD_SAVE_FILE = "LOAD_SAVE_FILE", i.REMOTE_CONFIG_SYNC = "REMOTE_CONFIG_SYNC", 
    i.GOT_SKU_DETAIL = "GOT_PRODUCT_DETAIL", i.GOT_PRODUCT_DETAIL = "GOT_PRODUCT_DETAIL", 
    i.PENDING_ORDER = "PENDING_ORDER", i.RECOVER_ACKNOWLEDGED_SKUS = "RESTORE_NONCONSUMABLE_PURCHASE", 
    i.RESTORE_NONCONSUMABLE_PURCHASE = "RESTORE_NONCONSUMABLE_PURCHASE", i.PURCHASE_RESULT = "PURCHASE_RESULT";
    var r = new Map();
    function l(e) {
        return a.check(e), a.isAndroidApp() || a.isiOSApp();
    }
    e.isAPP = l, e.getPlatform = function() {
        return a.isiOSApp() ? n.Platform.iOS : a.isAndroidApp() ? n.Platform.Android : n.Platform.Default;
    };
    var s = null, u = !1;
    e.setSplashAdEndListener = function(e) {
        u || !l() || n.Info.isPreview ? null == e || e() : s = e;
    }, e.afterSplashAd = function() {
        console.log("AppProxy afterSplashAd"), u = !0, null == s || s();
    }, e.registListener = function(e, t) {
        r.set(e, t);
    }, e.unregistListener = function(e) {
        r.delete(e);
    }, e.onSignIn = function() {
        if (r.has(o.SIGN_IN)) try {
            r.get(o.SIGN_IN)();
        } catch (e) {}
    }, e.onSignInFailed = function(e) {
        if (r.has(o.SIGN_IN_FAILED)) try {
            r.get(o.SIGN_IN_FAILED)(e);
        } catch (e) {}
    }, e.onSignOut = function() {
        if (r.has(o.SIGN_OUT)) try {
            r.get(o.SIGN_OUT)();
        } catch (e) {}
    }, e.onSaveFile = function(e) {
        if (r.has(o.SAVE_FILE)) try {
            r.get(o.SAVE_FILE)(e);
        } catch (e) {}
    }, e.onLoadSavefile = function(e, t) {
        if (r.has(o.LOAD_SAVE_FILE)) try {
            r.get(o.LOAD_SAVE_FILE)(e, t);
        } catch (e) {}
    }, e.onRemoteConfigSynced = function(e) {
        if (r.has(o.REMOTE_CONFIG_SYNC)) try {
            r.get(o.REMOTE_CONFIG_SYNC)(e);
        } catch (e) {}
    }, e.onPendingOrder = function(e) {
        if (r.has(o.PENDING_ORDER)) try {
            r.get(o.PENDING_ORDER)(JSON.parse(e));
        } catch (e) {}
    }, e.onPurchaseResult = function(e, t) {
        if (r.has(o.PURCHASE_RESULT)) try {
            r.get(o.PURCHASE_RESULT)(e, t);
        } catch (e) {}
    }, e.onGotSkuDetail = function(e, t) {
        if (r.has(o.GOT_PRODUCT_DETAIL)) try {
            r.get(o.GOT_PRODUCT_DETAIL)(e, JSON.parse(t));
        } catch (e) {}
    }, e.onRestoreNonConsumablePurchase = function(e) {
        if (r.has(o.RESTORE_NONCONSUMABLE_PURCHASE)) try {
            r.get(o.RESTORE_NONCONSUMABLE_PURCHASE)(JSON.parse(e));
        } catch (e) {}
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
        null === e.PROXY || void 0 === e.PROXY || e.PROXY.requestPayment(t);
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
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return null;
        }
    }, e.restoreNonConsumablePurchase = function() {
        return null === e.PROXY || void 0 === e.PROXY ? void 0 : e.PROXY.restoreNonConsumablePurchase();
    }, e.onOfferwallAdCredited = function(t, n) {
        null === e.PROXY || void 0 === e.PROXY || e.PROXY.onOfferwallAdCredited(t, n);
    }, e.onOfferwallAdClosed = function() {
        null === e.PROXY || void 0 === e.PROXY || e.PROXY.onOfferwallAdClosed();
    };
}(t || (t = {})), function(e) {
    window.GoogleService = e;
    var t = null;
    function o(e, n) {
        for (var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++) i[a - 2] = arguments[a];
        console.log("call android native " + e + " " + n + " " + i.join(","));
        try {
            var r;
            return (r = jsb.reflection).callStaticMethod.apply(r, [ "com/kariqu/googleservice/GSSDK", e, n ].concat(i));
        } catch (n) {
            n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
            var l;
            return null == t && (t = PlatformClass.createClass("com.kariqu.googleservice.GSSDK")), 
            (l = t).call.apply(l, [ e ].concat(i));
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
        for (var t = JSON.parse(e), i = new Map(), a = 0, r = Object.keys(t); a < r.length; a++) {
            var l = r[a];
            i.set(l, t[l]);
        }
        return i;
    }, e.getOrderInfo = function(e) {
        return o("getOrderInfo", "(Ljava/lang/String;)Ljava/lang/String;", e);
    }, e.recoverAcknowledgedPurchase = function() {
        return o("recoverAcknowledgedPurchase", "()V");
    };
}(e || (e = {})), function(e) {
    e.IOSProxy = function(e) {
        s(o, e);
        var t = u(o);
        function o() {
            var e;
            d(this, o), (e = t.call(this)).compatibleMethods = [ "onShareMessageToFriend", "showShareMenu", "onShareTimeline", "onShareAppMessage", "getUpdateManager", "onTouchEnd", "onTouchStart", "offTouchStart", "offTouchEnd", "triggerGC" ], 
            e.bridge = null, e.callbacks = new Map(), e.callbackValidTimes = new Map(), e.times = 0, 
            e.compatibleMethods.forEach(function(t) {
                e[t] = function() {
                    console.log("iOS 暂不支持" + t);
                };
            });
            try {
                e.bridge = PlatformClass.createClass("JavaScriptProxy");
            } catch (e) {}
            return e;
        }
        return c(o, [ {
            key: "native",
            value: function(e) {
                var t = null, o = null;
                try {
                    for (var i, a, r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) l[s - 1] = arguments[s];
                    n.isEngine(n.EngineType.CocosCreator) ? t = l ? (i = jsb.reflection).callStaticMethod.apply(i, [ "JavaScriptProxy", e ].concat(l)) : jsb.reflection.callStaticMethod("JavaScriptProxy", e) : n.isEngine(n.EngineType.LayaAir) && (t = l ? (a = this.bridge).call.apply(a, [ e ].concat(l)) : this.bridge.call(e));
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    o = e;
                }
                return o ? (console.log("call ios native ", e, " error."), console.error(o)) : console.log("call ios native ", e, " return:", t), 
                t;
            }
        }, {
            key: "sendEvent",
            value: function(e, t) {
                this.native("sendEvent:params:", e, null != t ? t : "");
            }
        }, {
            key: "callCallback",
            value: function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                if (this.callbacks.has(e)) {
                    console.log("ios call jscallback : ", e, JSON.stringify(n));
                    try {
                        this.callbacks.get(e).apply(void 0, n);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.error(e);
                    } finally {
                        var i = this.callbackValidTimes.get(e);
                        i > 1 ? this.callbackValidTimes.set(e, i - 1) : (this.callbacks.delete(e), this.callbackValidTimes.delete(e));
                    }
                } else console.log("ios call jscallback(not exist): ", e, JSON.stringify(n));
            }
        }, {
            key: "addCallback",
            value: function(e, t, n) {
                this.callbacks.set(e, t), this.callbackValidTimes.set(e, n);
            }
        }, {
            key: "uuid",
            value: function() {
                return this.times++, Date.now() + "-" + this.times;
            }
        }, {
            key: "onShow",
            value: function(e) {}
        }, {
            key: "offShow",
            value: function(e) {}
        }, {
            key: "onHide",
            value: function(e) {}
        }, {
            key: "offHide",
            value: function(e) {}
        }, {
            key: "getSystemInfoSync",
            value: function() {
                var e;
                return JSON.parse(null !== (e = this.native("getSystemInfoSync")) && void 0 !== e ? e : "{}");
            }
        }, {
            key: "getLaunchOptionsSync",
            value: function() {
                var e;
                return JSON.parse(null !== (e = this.native("getLaunchOptionsSync")) && void 0 !== e ? e : "{}");
            }
        }, {
            key: "exitMiniProgram",
            value: function() {
                this.native("exitMiniProgram");
            }
        }, {
            key: "showRewardVideoAd",
            value: function(e) {
                var t = "showRewardVideoAd:show:" + this.uuid();
                this.addCallback(t, e, 2), this.native("showRewardVideoAd:scene:", t, "");
            }
        }, {
            key: "showFullScreenVideoAd",
            value: function() {
                this.native("showFullScreenVideoAd:", "");
            }
        }, {
            key: "showInterstitialAd",
            value: function() {
                this.native("showInterstitial");
            }
        }, {
            key: "showBanner",
            value: function(e, t, n, o) {
                this.native("showBannerAdWithOffsetX:offsetY:width:height:", e, t, n, o);
            }
        }, {
            key: "hideBanner",
            value: function() {
                this.native("hideBannerAd");
            }
        }, {
            key: "showNativeAd",
            value: function(e) {
                var t, n, o, i;
                this.native("showNativeAdWithOffsetX:offsetY:width:height:", null !== (t = e.offsetX) && void 0 !== t ? t : 0, null !== (n = e.offsetY) && void 0 !== n ? n : 0, null !== (o = e.width) && void 0 !== o ? o : 0, null !== (i = e.height) && void 0 !== i ? i : 0);
            }
        }, {
            key: "hideNativeAd",
            value: function() {
                this.native("hideNativeAd");
            }
        }, {
            key: "showToast",
            value: function(e) {
                var t;
                e.duration && e.duration > 100 && (e.duration = e.duration / 1e3), this.native("showToast:duration:", e.title, null !== (t = e.duration) && void 0 !== t ? t : 1.5);
            }
        }, {
            key: "showModal",
            value: function(e) {
                var t, n, o = "showModal:" + this.uuid();
                this.native("showModal:content:showCancel:cancelText:confirmText:callbackKey:", e.title, e.content, !!e.showCancel, null !== (t = e.cancelText) && void 0 !== t ? t : "取消", null !== (n = e.confirmText) && void 0 !== n ? n : "确认", o), 
                this.addCallback(o, e.success, 1);
            }
        }, {
            key: "showLoading",
            value: function(e) {
                var t;
                this.native("showLoading:mask:", null !== (t = e.title) && void 0 !== t ? t : "", !!e.mask);
            }
        }, {
            key: "hideLoading",
            value: function(e) {
                this.native("hideLoading");
            }
        }, {
            key: "showShareMenu",
            value: function(e) {
                this.native("showShareMenu");
            }
        }, {
            key: "shareAppMessage",
            value: function(e) {}
        }, {
            key: "login",
            value: function(e) {
                var t, n = this.native("login"), o = {};
                o.code = n, null === (t = null == e ? void 0 : e.success) || void 0 === t || t.call(e, o);
            }
        }, {
            key: "setUserId",
            value: function(e) {
                this.native("setUserId:", e);
            }
        }, {
            key: "setKeepScreenOn",
            value: function(e) {}
        }, {
            key: "vibrateShort",
            value: function(e) {
                this.native("vibrate:", 15);
            }
        }, {
            key: "vibrateLong",
            value: function(e) {
                this.native("vibrate:", 400);
            }
        }, {
            key: "setClipboardData",
            value: function(e) {
                var t;
                this.native("setClipboardData:", null !== (t = e.data) && void 0 !== t ? t : "");
            }
        }, {
            key: "getClipboardData",
            value: function(e) {
                try {
                    e.success({
                        data: this.native("getClipboardData")
                    });
                } catch (e) {}
            }
        }, {
            key: "getBatteryInfo",
            value: function(e) {}
        }, {
            key: "getBatteryInfoSync",
            value: function() {
                return {
                    level: 0,
                    isCharging: !1
                };
            }
        }, {
            key: "onOceanEngineInit",
            value: function() {
                this.native("onOceanEngineInit");
            }
        }, {
            key: "reportKeyAction",
            value: function(e) {
                e ? this.native("reportKeyAction:", e) : this.native("reportKeyAction");
            }
        }, {
            key: "onOceanEngineRegister",
            value: function(e, t) {
                this.native("onOceanEngineRegister:success:", e, t);
            }
        }, {
            key: "onOceanEnginePurchase",
            value: function(e, t) {
                this.native("onOceanEnginePurchase:success:", e, t);
            }
        }, {
            key: "getMenuButtonBoundingClientRect",
            value: function() {
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
            value: function() {
                this.native("exitApplication");
            }
        }, {
            key: "isRewardVideoAdReady",
            value: function() {
                return this.native("isRewardVideoAdReady");
            }
        }, {
            key: "getProductDetail",
            value: function(e) {
                this.native("getProductsInfo:", JSON.stringify(e));
            }
        }, {
            key: "requestPayment",
            value: function(e) {
                this.native("payProduct:", e);
            }
        }, {
            key: "checkPurchase",
            value: function() {
                this.native("checkPurchase");
            }
        }, {
            key: "confirmPurchase",
            value: function(e) {
                this.native("confirmPurchase:", e);
            }
        }, {
            key: "getOrderInfo",
            value: function(e) {
                return this.native("getTransactionInfo:", e);
            }
        }, {
            key: "restoreNonConsumablePurchase",
            value: function() {
                this.native("restoreNonConsumablePurchase");
            }
        }, {
            key: "fetchRemoteConfig",
            value: function() {
                this.native("fetchRemoteConfig");
            }
        }, {
            key: "getRemoteConfig",
            value: function() {
                for (var e = this.native("getRemoteConfig"), t = JSON.parse(e), n = new Map(), o = 0, i = Object.keys(t); o < i.length; o++) {
                    var a = i[o];
                    n.set(a, t[a]);
                }
                return n;
            }
        } ]), o;
    }(e.BaseAppProxy);
}(t || (t = {})), function(e) {
    e.PlatformAdapter = function() {
        return function t() {
            d(this, t), this.platform = e.Platform.Default;
        };
    }();
}(n || (n = {}));