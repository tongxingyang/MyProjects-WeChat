require("../../../../@babel/runtime/helpers/Arrayincludes");

var _createClass2 = require("../../../../@babel/runtime/helpers/createClass");

var _classCallCheck2 = require("../../../../@babel/runtime/helpers/classCallCheck");

!function() {
    var t = function t() {
        _classCallCheck2(this, t);
        this.id = "", this.showCount = 0, this.clickCount = 0;
    };
    var e = function e() {
        _classCallCheck2(this, e);
        this.showCounts = null, this.showTimes = null, this.startShowTimes = null;
    };
    var s = /* */ function() {
        function s(t, e, _s) {
            _classCallCheck2(this, s);
            this.forbitCountries_ = t, this.forbitProvinces_ = e, this.forbitCities_ = _s;
        }
        _createClass2(s, [ {
            key: "forbitCountries",
            get: function get() {
                return this.forbitCountries_;
            }
        }, {
            key: "forbitProvinces",
            get: function get() {
                return this.forbitProvinces_;
            }
        }, {
            key: "forbitCities",
            get: function get() {
                return this.forbitCities_;
            }
        }, {
            key: "hasFilterInfo",
            get: function get() {
                return this.forbitCountries && this.forbitCountries.length > 0 || this.forbitProvinces && this.forbitProvinces.length > 0 || this.forbitCities && this.forbitCities.length > 0;
            }
        }, {
            key: "IsInAry",
            value: function IsInAry(t, e) {
                if (!t || !e) return !1;
                if (0 == (t = t.trim()).length) return !1;
                for (var _s4 = 0; _s4 < e.length; _s4++) {
                    var _i = e[_s4];
                    if (_i && t.includes(_i)) return !0;
                }
                return !1;
            }
        }, {
            key: "IsInForbitArea",
            value: function IsInForbitArea(t, e, _s3) {
                return !!(this.IsInAry(t, this.forbitCountries) || t && t.length > 0 && "中国" != t && this.IsInAry("海外", this.forbitCountries) || this.IsInAry(e, this.forbitProvinces) || this.IsInAry(_s3, this.forbitCities));
            }
        } ]);
        return s;
    }();
    var i = /* */ function() {
        function i() {
            _classCallCheck2(this, i);
            this.setting = null, this.version = null, this.shareConfigs = [], this.adConfig = {
                inuseNames: [],
                cfgList: []
            }, this.appConfigs = [], this.forbitTimeRange = null, this.shareAreaForbit = null, 
            this.payAreaForbit = null, this.wdlbAreaForbit = null;
        }
        _createClass2(i, [ {
            key: "Get",
            value: function Get(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                if (null == this.setting) return e;
                var s = null, _i2 = this.setting[this.version];
                return _i2 && (s = _i2[t]), null == s && (s = this.setting[t]), null == s ? e : s;
            }
        }, {
            key: "IsInForbitTime",
            value: function IsInForbitTime(t) {
                if (null == this.forbitTimeRange || 4 != this.forbitTimeRange.length) return !0;
                var e = this.forbitTimeRange[0], s = this.forbitTimeRange[1], _i3 = this.forbitTimeRange[2], n = this.forbitTimeRange[3], l = new Date(Date.now());
                l.setHours(e, s);
                var o = new Date(Date.now());
                o.setHours(_i3, n);
                var r = t.getTime(), a = l.getTime(), h = o.getTime();
                return r >= a && r <= h;
            }
        }, {
            key: "hasAnyAreaForbitInfo",
            get: function get() {
                return !(null == this.shareAreaForbit || !this.shareAreaForbit.hasFilterInfo) || !(null == this.payAreaForbit || !this.payAreaForbit.hasFilterInfo) || !(null == this.wdlbAreaForbit || !this.wdlbAreaForbit.hasFilterInfo);
            }
        }, {
            key: "ParseData",
            value: function ParseData(t) {
                this.setting = t;
                var e = this.setting[this.version];
                if (e) for (var _s5 in e) {
                    this.setting[_s5] = e[_s5];
                }
                var _i4 = this.Get("share", []);
                for (var _s6 = _i4.length - 1; _s6 >= 0; _s6--) {
                    0 == _i4[_s6].inuse && _i4.splice(_s6, 1);
                }
                if (this.shareConfigs = _i4, this.isShowAppstore) {
                    this.appConfigs = this.Get("apps", []);
                    for (var _t = this.appConfigs.length - 1; _t >= 0; _t--) {
                        0 == this.appConfigs[_t].inuse && this.appConfigs.splice(_t, 1);
                    }
                } else this.appConfigs = [];
                var n = this.Get("noShareFilters", null);
                n && (this.shareAreaForbit = new s(n.countries ? n.countries.split("|") : [], n.provinces ? n.provinces.split("|") : [], n.cities ? n.cities.split("|") : []));
                var l = this.Get("noChargeFilters", null);
                l && (this.payAreaForbit = new s(l.countries ? l.countries.split("|") : [], l.provinces ? l.provinces.split("|") : [], l.cities ? l.cities.split("|") : []));
                var o = this.Get("noGiftFilters", null);
                o && (this.wdlbAreaForbit = new s(o.countries ? o.countries.split("|") : [], o.provinces ? o.provinces.split("|") : [], o.cities ? o.cities.split("|") : [])), 
                this.forbitTimeRange = this.Get("forbitTimeRange", null);
                var r = this.Get("ad", null);
                if (r) {
                    var _t2 = function _t2(t, e) {
                        if (null == t) return null;
                        for (var _s7 = 0; _s7 < t.length; _s7++) {
                            var _i8 = t[_s7];
                            if (_i8.name == e) return _i8;
                        }
                    };
                    if (r.cfgList = [], r.inuseNames) for (var _e = 0; _e < r.inuseNames.length; _e++) {
                        var _s8 = r.inuseNames[_e];
                        var _i9 = _t2(r.otherConfigs, _s8), _n = null != _t2(r.cfgList, _s8);
                        _i9 && !_n && r.cfgList.push(_i9);
                    }
                    0 == r.cfgList.length && r.cfgList.push({
                        name: r.name,
                        appId: r.appId,
                        bannerIds: r.bannerIds,
                        videoIds: r.videoIds,
                        videoDurations: r.videoDurations,
                        screenId: r.screenId,
                        nativeIds: r.nativeIds,
                        blockIds: r.blockIds,
                        appboxIds: r.appboxIds,
                        gameBannerIds: r.gameBannerIds
                    }), this.adConfig = r;
                }
            }
        }, {
            key: "Request",
            value: function Request(t, e, s, _i7, n) {
                var _this = this;
                var l = e + t.gameId + "/remote_setting.json";
                l += "?time=" + Date.now(), t.httpGet(l, function(t) {
                    try {
                        var _e2 = JSON.parse(t);
                        1 == n && _this.ParseData(_e2), s && s(_e2);
                    } catch (t) {
                        t = {};//.handleException(t);
                        _i7 && _i7(t);
                    }
                }, function(t) {
                    _i7 && _i7(t);
                });
            }
        } ]);
        return i;
    }();
    window.KolaSDK = new (/* */ function() {
        function _class() {
            _classCallCheck2(this, _class);
            this.MaxLevelTime = 1800, this.abTestData = null, this.appConfigs = null, this.logDbName = null, 
            this.gameId = null, this.channel = null, this.userId = null, this.platformName = null, 
            this.deviceModel = null, this.sysInfo = null, this.logUrl = null, this.remoteSettingUrl = null, 
            this.remoteSetting = new i();
        }
        _createClass2(_class, [ {
            key: "OnHide",
            value: function OnHide() {
                if (this.Logout_(), this.levelStartTime > 0) {
                    var _t3 = Date.now();
                    this.levelTotalTime = _t3 - this.levelStartTime;
                }
                this.OnNativeAdHide_(), this.OnAppAnalysHide_();
            }
        }, {
            key: "OnShow",
            value: function OnShow(t) {
                this.Login_(t), this.levelStartTime > 0 && (this.levelStartTime = Date.now());
            }
        }, {
            key: "Initialize",
            value: function Initialize(t, e, s) {
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var o = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                var r = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
                this.logDbName = null != n ? n : "kgameslog", this.gameId = s + "_" + this.ToPlatformName(t), 
                this.platformName = e, this.deviceModel = i, this.logUrl = l, this.remoteSettingUrl = o, 
                this.sysInfo = r, this.levelTotalTime = 0, this.levelStartTime = 0, this.levelStartIndex = null, 
                this.lastLoginTime = null, this.HttpTimeout = 15e3, this.sceneAllAdDatas = null, 
                this.adLoadCount = 0, this.sceneAllAppDatas = null;
            }
        }, {
            key: "LoadRemoteSetting",
            value: function LoadRemoteSetting(t, e, s) {
                var _this2 = this;
                this.remoteSetting.Request(this, this.remoteSettingUrl, function(e) {
                    _this2.appConfigs = _this2.remoteSetting.appConfigs, t && t(e);
                }, e, s);
            }
        }, {
            key: "LogEvent",
            value: function LogEvent(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                this.LogEvent_(t, e, s, i);
            }
        }, {
            key: "LogPay",
            value: function LogPay(t, e, s) {
                var i = {
                    name: t.name,
                    id: t.id,
                    orderId: t.orderId,
                    price: t.price,
                    number: t.number,
                    channel: e,
                    platform: this.platformName
                }, n = this.sysInfo;
                n && (i.OS = n.OS, i.OAID = n.OAID, i.ANDROIDID = n.ANDROIDID, i.IDFA = n.IDFA, 
                i.MAC = n.MAC, i.IMEI = n.IMEI), this.LogEvent("Pay", i, s);
            }
        }, {
            key: "LogStartLevel",
            value: function LogStartLevel(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                this.levelStartTime > 0 && console.warn("不要多次调用LogStartLevel，或者调用LogStartLevel之后必须调用LogFinishLevel结束关卡"), 
                this.levelStartTime = Date.now(), this.levelTotalTime = 0, this.levelStartIndex = t, 
                this.LogEvent_("StartLevel", null, t, 0, e ? {
                    property: e
                } : null);
            }
        }, {
            key: "LogFinishLevel",
            value: function LogFinishLevel(t, e) {
                var s = this.levelStartTime, i = this.levelTotalTime;
                if (this.levelStartTime = 0, this.levelTotalTime = 0, s <= 0) return void console.warn("调用LogFinishLevel之前，必须先调用LogStartLevel");
                if (this.levelStartIndex != t) return void console.warn("LogStartLevel跟LogFinishLevel调用的levelIndex参数不一致！分别是：", this.levelStartIndex, t);
                var n = Math.ceil(.001 * (i + Date.now() - s));
                n > this.MaxLevelTime ? console.warn("LogFinishLevel失败！关卡时长超出限制，可以在this.MaxLevelTime中设置最大值！") : this.LogEvent("FinishLevel", {
                    useTime: n,
                    win: e
                }, t);
            }
        }, {
            key: "LogUseItem",
            value: function LogUseItem(t, e, s, i) {
                this.LogEvent("UseItem", {
                    scene: t,
                    itemId: s,
                    value: i
                }, e);
            }
        }, {
            key: "LogGetItem",
            value: function LogGetItem(t, e, s, i) {
                this.LogEvent("GetItem", {
                    scene: t,
                    itemId: s,
                    value: i
                }, e);
            }
        }, {
            key: "LogShare",
            value: function LogShare(t, e, s, i, n) {
                var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var o = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                this.LogEvent("ShareTo", {
                    scene: t,
                    suc: e,
                    id: i,
                    sharerName: n,
                    videoId: l,
                    klVidelId: o
                }, s, 3);
            }
        }, {
            key: "LogPlayVideoAd",
            value: function LogPlayVideoAd(t, e, s) {
                this.LogEvent("PlayVideoAd", {
                    scene: t,
                    finish: e
                }, s);
            }
        }, {
            key: "OnNativeAdLoaded",
            value: function OnNativeAdLoaded() {
                this.adLoadCount++;
            }
        }, {
            key: "OnNativeAdShow",
            value: function OnNativeAdShow(t, e) {
                this.GetNativeAdData(t, e).showCount++;
            }
        }, {
            key: "OnNativeAdClick",
            value: function OnNativeAdClick(t, e) {
                this.GetNativeAdData(t, e).clickCount++;
            }
        }, {
            key: "OnAppIconShow",
            value: function OnAppIconShow(t, e, s) {
                if (!this.appConfigs) return;
                var i = this.GetIndexOfApp(e), n = this.GetAllAppDatas(t)[i];
                n.showCounts[s]++, n.startShowTimes[s] = Date.now();
            }
        }, {
            key: "OnAppIconHide",
            value: function OnAppIconHide(t, e, s) {
                if (!this.appConfigs) return;
                var i = this.GetIndexOfApp(e), n = this.GetAllAppDatas(t)[i], l = Date.now() - n.startShowTimes[s];
                l > 86400 || l <= 0 || (n.showTimes[s] += .001 * l, n.startShowTimes[s] = Date.now());
            }
        }, {
            key: "OnNavigateToApp",
            value: function OnNavigateToApp(t, e, s, i) {
                this.appConfigs && this.LogEvent("NavigateToApp", {
                    scene: t,
                    name: s.name,
                    appId: s.appId,
                    result: e,
                    adIconId: s.icons ? s.icons[i].adIconId : s.adIconId,
                    qrCode: null == s.appId
                });
            }
        }, {
            key: "ToPlatformName",
            value: function ToPlatformName(t) {
                switch (t) {
                  case 0:
                    return "WeXin";

                  case 1:
                    return "Oppo";

                  case 2:
                    return "";

                  case 4:
                    return "VivoQucikGame";

                  case 7:
                    return "TouTiao";

                  case 8:
                    return "QQ";

                  case 9:
                    return "Baidu";

                  case 10:
                    return "H5_4399";

                  case 11:
                    return "Hago";

                  case 12:
                    return "UC";

                  case 13:
                    return "Bilibili";

                  case 15:
                    return "Meizu";

                  case 16:
                    return "Empty";

                  case 17:
                    return "Gamebox4399";

                  case 29:
                    return "Android";

                  case 30:
                    return "AndroidOppo";
                }
            }
        }, {
            key: "LogEvent_",
            value: function LogEvent_(t, e) {
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var o = this.userId ? this.userId : "Unknown";
                this.LogEvent__(this.logDbName, o, t, e, s, i, n, l);
            }
        }, {
            key: "LogEvent__",
            value: function LogEvent__(t, e, s, i) {
                var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var o = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                var r = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
                i || (i = {}), 1 != r && (i.channelId = null != this.channel ? this.channel : "unknown", 
                i.levelIndex = null != n ? "" + n : "unknown");
                var a = JSON.stringify(i), h = "";
                if (o) for (var d in o) {
                    h += "&".concat(d, "=").concat(JSON.stringify(o[d]));
                }
                var u = this.abTestData, c = this.logUrl + t + "/track?APIVersion=0.6.0&game=";
                c += this.gameId + "&type=" + s + "&user=" + e + (u ? "&__topic__=" + (u.isA ? "A" : "B") : "") + "&content=" + a + h, 
                console.log(c);
                var p = encodeURI(c);
                this.HttpGet(p, l);
            }
        }, {
            key: "HttpGet",
            value: function HttpGet(t, e) {
                var _this3 = this;
                this.httpGet(t, null, function() {
                    e && e > 0 && _this3.HttpGet(t, e - 1);
                });
            }
        }, {
            key: "Login_",
            value: function Login_(t) {
                this.lastLoginTime = Date.now();
                var e = {
                    platform: this.platformName,
                    deviceModel: this.deviceModel,
                    fromAppId: t && t.fromAppId ? t.fromAppId : "Unknown"
                };
                t && (e.scene = t.scene, e.from = t.__sharer_id, e.fromNickName = t.__sharer_name, 
                e.fromShareId = t.__share_id, e.fromKlVideoId = t.__klvideo_id, e.fromShareTitle = t.__share_title, 
                e.shareScene = t.__share_scene, e.channelId = t.channel), this.LogEvent("Login", e);
            }
        }, {
            key: "Logout_",
            value: function Logout_() {
                var t = Math.ceil((Date.now() - (this.lastLoginTime ? this.lastLoginTime : Date.now())) / 1e3);
                t > 86400 || t <= 0 || this.LogEvent("Logout", {
                    total: t
                });
            }
        }, {
            key: "httpGet",
            value: function httpGet(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                try {
                    var l = new XMLHttpRequest();
                    l.timeout = this.HttpTimeout, l.open("GET", t, !0), l.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), 
                    n && Object.keys(n).forEach(function(t) {
                        var e = n[t];
                        l.setRequestHeader(t, e);
                    }), l.onreadystatechange = function() {
                        4 == l.readyState && (200 === l.status || 0 === l.status ? e && (e.call(i, l.responseText), 
                        e = null, s = null) : s && (s.call(i, l.responseText), e = null, s = null));
                    }, l.ontimeout = function(t) {
                        s && (s.call(i, t), e = null, s = null);
                    }, l.onerror = function(t) {
                        s && (s.call(i, t), e = null, s = null);
                    }, l.send();
                } catch (t) {
                    t = {};//.handleException(t);
                    s && (s.call(i, t), e = null, s = null);
                }
            }
        }, {
            key: "httpPostJson",
            value: function httpPostJson(t, e) {
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                try {
                    var o = new XMLHttpRequest();
                    o.timeout = this.HttpTimeout, o.open("POST", t, !0), o.setRequestHeader("Content-Type", "application/json;charset=utf-8"), 
                    l && Object.keys(l).forEach(function(t) {
                        var e = l[t];
                        o.setRequestHeader(t, e);
                    }), o.onreadystatechange = function() {
                        4 == o.readyState && (200 === o.status || 0 === o.status ? s && (s.call(n, o.responseText), 
                        s = null, i = null) : i && (i.call(n, o.responseText), s = null, i = null));
                    }, o.ontimeout = function(t) {
                        i && (i.call(n, t), s = null, i = null);
                    }, o.onerror = function(t) {
                        i && (i.call(n, t), s = null, i = null);
                    }, o.send(e);
                } catch (t) {
                    t = {};//.handleException(t);
                    i && (i.call(n, t), s = null, i = null);
                }
            }
        }, {
            key: "GetNativeAdData",
            value: function GetNativeAdData(e, s) {
                this.sceneAllAdDatas || (this.sceneAllAdDatas = new Map());
                var i = this.sceneAllAdDatas.get(e);
                i || (i = new Array(), this.sceneAllAdDatas.set(e, i));
                var n = null;
                for (var _t4 = 0; _t4 < i.length; _t4++) {
                    var _e3 = i[_t4];
                    if (_e3.id == s) {
                        n = _e3;
                        break;
                    }
                }
                return n || ((n = new t()).id = s, i.push(n)), n;
            }
        }, {
            key: "OnNativeAdHide_",
            value: function OnNativeAdHide_() {
                if (!this.sceneAllAdDatas) return;
                if (this.sceneAllAdDatas.size <= 0) return;
                var t = {}, e = {};
                this.sceneAllAdDatas.forEach(function(s, i) {
                    if (s.length <= 0) return;
                    var n = {}, l = 0, o = {}, r = 0;
                    for (var _t5 = 0; _t5 < s.length; _t5++) {
                        var _e4 = s[_t5];
                        _e4.showCount > 0 && (n[_e4.id] = _e4.showCount, l++), _e4.clickCount > 0 && (o[_e4.id] = _e4.clickCount, 
                        r++);
                    }
                    l > 0 && (t[i] = n), r > 0 && (e[i] = o);
                }), this.LogEvent_("KLAD", {}, 0, 0, {
                    ADLoadCount: this.adLoadCount,
                    ADShowCount: t,
                    ADClickCount: e
                }, !0), this.adLoadCount = 0, this.sceneAllAdDatas.clear();
            }
        }, {
            key: "GetIndexOfApp",
            value: function GetIndexOfApp(t) {
                return this.appConfigs.indexOf(t);
            }
        }, {
            key: "GetAllAppDatas",
            value: function GetAllAppDatas(t) {
                this.sceneAllAppDatas || (this.sceneAllAppDatas = new Map());
                var s = this.sceneAllAppDatas.get(t);
                if (!s) {
                    s = new Array(this.appConfigs.length);
                    for (var _t6 = 0; _t6 < this.appConfigs.length; ++_t6) {
                        var _i10 = this.appConfigs[_t6], n = new e(), l = _i10.icons ? _i10.icons.length : 1;
                        n.showCounts = new Array(l);
                        for (var _t7 = 0; _t7 < n.showCounts.length; _t7++) {
                            n.showCounts[_t7] = 0;
                        }
                        n.showTimes = new Array(l);
                        for (var _t8 = 0; _t8 < n.showTimes.length; _t8++) {
                            n.showTimes[_t8] = 0;
                        }
                        n.startShowTimes = new Array(l);
                        for (var _t9 = 0; _t9 < n.startShowTimes.length; _t9++) {
                            n.startShowTimes[_t9] = 0;
                        }
                        s[_t6] = n;
                    }
                    this.sceneAllAppDatas.set(t, s);
                }
                return s;
            }
        }, {
            key: "OnAppAnalysHide_",
            value: function OnAppAnalysHide_() {
                var _this4 = this;
                if (!this.sceneAllAppDatas) return;
                if (this.sceneAllAppDatas.size <= 0) return;
                var t = {};
                this.sceneAllAppDatas.forEach(function(e, s) {
                    if (e.length <= 0) return;
                    var i = {}, n = 0;
                    for (var _t10 = 0; _t10 < e.length; _t10++) {
                        var _s9 = e[_t10], l = _this4.appConfigs[_t10];
                        for (var _t11 = 0; _t11 < _s9.showCounts.length; _t11++) {
                            _s9.showCounts[_t11] > 0 && (n++, i[l.icons ? l.icons[_t11].adIconId : l.adIconId] = _s9.showCounts[_t11]);
                        }
                    }
                    n > 0 && (t[s] = i);
                }), this.LogEvent_("ADShow2", {}, 0, 0, {
                    ADShowCount: t
                }, !0), this.sceneAllAppDatas.clear();
            }
        } ]);
        return _class;
    }())();
}();