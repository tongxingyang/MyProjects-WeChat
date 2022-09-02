var _get2 = require("../@babel/runtime/helpers/get");

var _getPrototypeOf2 = require("../@babel/runtime/helpers/getPrototypeOf");

var _inherits2 = require("../@babel/runtime/helpers/inherits");

var _createSuper2 = require("../@babel/runtime/helpers/createSuper");

var _classCallCheck2 = require("../@babel/runtime/helpers/classCallCheck");

var _createClass2 = require("../@babel/runtime/helpers/createClass");

var _typeof2 = require("../@babel/runtime/helpers/typeof");

function isCocosEngine() {
    return "undefined" != typeof window && void 0 !== window.cc && void 0 !== window.cc.ENGINE_VERSION;
}

function isLayaEngine() {
    return "undefined" != typeof window && void 0 !== window.Laya && void 0 !== window.Laya.version;
}

function _isWINPlatform() {
    return void 0 === window.wx && void 0 === window.qq && void 0 === window.tt && void 0 === window.qg;
}

function _isWXPlatform() {
    return void 0 !== window.wx && void 0 === window.qq && void 0 === window.tt && void 0 === window.qg;
}

function _isQQPlatform() {
    return void 0 !== window.qq;
}

function _isTTPlatform() {
    return void 0 !== window.tt;
}

function _isOPPOPlatform() {
    return void 0 !== window.qg && window.qg.getProvider().toLowerCase().indexOf("oppo") > -1;
}

function _isVIVOPlatform() {
    return void 0 !== window.qg && window.qg.getProvider().toLowerCase().indexOf("vivo") > -1;
}

function _isQGPlatform() {
    return void 0 !== window.qg;
}

function _isAndroidNativePlatform() {
    return !(!isCocosEngine() || void 0 === window.jsb || cc.sys.os !== cc.sys.OS_ANDROID) || !(!isLayaEngine() || void 0 === window.conch || "Conch-android" !== window.conchConfig.getOS());
}

function _isIOSNativePlatform() {
    return !(!isCocosEngine() || void 0 === window.jsb || cc.sys.os !== cc.sys.OS_IOS) || !(!isLayaEngine() || void 0 === window.conch || "Conch-ios" !== window.conchConfig.getOS());
}

function getLayaMiniAdapter() {
    if (isLayaEngine()) return Laya.MiniAdpter ? Laya.MiniAdpter : Laya.QQMiniAdapter ? Laya.QQMiniAdapter : Laya.VVMiniAdapter ? Laya.VVMiniAdapter : Laya.QGMiniAdapter ? Laya.QGMiniAdapter : Laya.TTMiniAdapter ? Laya.TTMiniAdapter : Laya.HWMiniAdapter ? Laya.HWMiniAdapter : null;
}

function checkString(e) {
    return "string" == typeof e && "" !== e;
}

function checkFunc(e) {
    return "function" == typeof e;
}

function isObject$1(e) {
    return e && "object" == _typeof2(e);
}

function doCallback$1(e) {
    if ("function" == typeof e) {
        var t = Array.prototype.slice.call(arguments);
        return t.shift(), e.apply(null, t);
    }
    return null;
}

function random(e, t) {
    if (e < 0 || t <= 0) return 0;
    switch (arguments.length) {
      case 1:
        return Math.floor(Math.random() * e + 1);

      case 2:
        return Math.floor(Math.random() * (t - e + 1) + e);

      default:
        return 0;
    }
}

function generateString(e) {
    var t = "";
    if ("number" == typeof e) for (var n = 0; n < e; n++) {
        Math.random() < .5 ? t += String.fromCharCode(random("0".charCodeAt(), "0".charCodeAt() + 9)) : t += String.fromCharCode(random("a".charCodeAt(), "a".charCodeAt() + 25));
    }
    return t;
}

function cutString(e, t) {
    var n = 0, i = "", a = /[^\x00-\xff]/g, o = "", s = e.replace(a, "**").length;
    if (s > t) {
        for (var r = 0; r < s && (null != (o = e.charAt(r).toString()).match(a) ? n += 2 : n++, 
        !(n > t)); r++) {
            i += o;
        }
        s > t && (i += "...");
    } else i = e;
    return i;
}

function shuffleArray(e) {
    if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
        var n = Math.round(Math.random() * (e.length - 1 - t)) + t, i = e[n];
        e[n] = e[t], e[t] = i;
    }
}

function convertWebParams(e) {
    var t = {};
    if (isObject$1(e)) for (var n in e) {
        "string" == typeof e[n] && (e[n] = e[n].trim()), /^\d+(?=\.{0,1}\d+$|$)/.test(e[n]) ? t[n] = parseFloat(e[n]) : t[n] = e[n];
    }
    return t;
}

String.prototype.format = function(e) {
    var t = this;
    if (arguments.length < 1) return t;
    var n = arguments;
    for (var i in 1 == arguments.length && "object" == _typeof2(e) && (n = e), n) {
        var a = n[i];
        null != a && (t = t.replace("{" + i + "}", a));
    }
    return t;
}, Date.prototype.format = function(e) {
    var t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    for (var n in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), 
    t) {
        new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
    }
    return e;
}, isLayaEngine() && Object.defineProperty(Laya.List.prototype, "selectedIndex", {
    get: function get() {
        return this._selectedIndex;
    },
    set: function set(e) {
        this._selectedIndex = e, this.changeSelectStatus(), this.event(Laya.Event.CHANGE), 
        this.selectHandler && this.selectHandler.runWith(e), this.startIndex = this._startIndex;
    }
});

var DesignSize = {
    width: 750,
    height: 1334
}, EventName = {
    EN_SYSTEM_ERROR: "EN_SYSTEM_ERROR",
    EN_SDK_NOT_SUPPORT: "EN_SDK_NOT_SUPPORT",
    EN_NET_CONNECTION_LOST: "EN_NET_CONNECTION_LOST",
    EN_NET_CONNECTION_RECOVER: "EN_NET_CONNECTION_RECOVER",
    EN_APP_ONSHOW: "EN_APP_ONSHOW",
    EN_APP_ONHIDE: "EN_APP_ONHIDE",
    EN_CANCEL_NAVIGATION_FROM_AD: "EN_CANCEL_NAVIGATION_FROM_AD",
    EN_BANNER_NOT_SUPPORT_RIGHT_NOW: "EN_BANNER_NOT_SUPPORT_RIGHT_NOW",
    EN_VIDEO_NOT_SUPPORT_RIGHT_NOW: "EN_VIDEO_NOT_SUPPORT_RIGHT_NOW",
    EN_INTERSTITIAL_NOT_SUPPORT_RIGHT_NOW: "EN_INTERSTITIAL_NOT_SUPPORT_RIGHT_NOW",
    EN_SHOW_CUSTOM_TIPS: "EN_SHOW_CUSTOM_TIPS",
    EN_HIDE_CUSTOM_TIPS: "EN_HIDE_CUSTOM_TIPS",
    EN_SHOW_CUSTOM_MODAL: "EN_SHOW_CUSTOM_MODAL",
    EN_SHOW_CUSTOM_LOADING: "EN_SHOW_CUSTOM_LOADING",
    EN_HIDE_CUSTOM_LOADING: "EN_HIDE_CUSTOM_LOADING",
    EN_LAUNCH_APP_FROM_UNKNOW: "EN_LAUNCH_APP_FROM_UNKNOW",
    EN_LAUNCH_APP_FROM_EVERYWHERE: "EN_LAUNCH_APP_FROM_EVERYWHERE",
    EN_LAUNCH_APP_FROM_RECENT: "EN_LAUNCH_APP_FROM_RECENT",
    EN_LAUNCH_APP_FROM_FAVOURITE: "EN_LAUNCH_APP_FROM_FAVOURITE",
    EN_LAUNCH_APP_FROM_SINGLE_SHARE: "EN_LAUNCH_APP_FROM_SINGLE_SHARE",
    EN_LAUNCH_APP_FROM_GROUP_SHARE: "EN_LAUNCH_APP_FROM_GROUP_SHARE",
    EN_LAUNCH_APP_FROM_SHARE: "EN_LAUNCH_APP_FROM_SHARE",
    EN_LAUNCH_APP_BACK_FROM_OTHER_APP: "EN_LAUNCH_APP_BACK_FROM_OTHER_APP"
}, PropagationEventNames = {}, SwitchName = {
    SN_REWARD_TIMES_OF_EACH_DAY: "rewardTimesOfEachDay",
    SN_ADV_TIMES_BEFORE_SHARE: "advTimesBeforeShare",
    SN_RATE_OF_SHARE: "rateOfShare",
    SN_MIN_DURATION_BETWEEN_SHARE: "minDurationBetweenShare",
    SN_IS_PUBLISHING: "isPublishing",
    SN_COMMIT_VERSION: "commitVersion"
}, SwitchCfgs = {}, ReportEventName = {
    REN_NAVIGATION_TO_MINIPROGRAM: "navigation_to_miniprogram",
    REN_NAVIGATION_TO_MINIPROGRAM_SUCCESS: "navigation_to_miniprogram_success",
    REN_NAVIGATION_TO_MINIPROGRAM_CANCEL: "navigation_to_miniprogram_cancel",
    REN_NAVIGATION_TO_MINIPROGRAM_ERROR: "navigation_to_miniprogram_error",
    REN_NAVIGATE_SUCC_ON_TT_PLAT: "navigate_succ_on_tt_plat",
    REN_RECEIVED_MEMORY_WARNING: "received_memory_warning"
}, FreeGetWay = {
    FGW_NONE: "none",
    FGW_SHARE: "share",
    FGW_ADV: "adv"
}, ShareScene = {
    SS_SYSTEM_MENU: "SystemMenu",
    SS_SHARE_APP: "ShareApp"
}, ShareSceneCfgs = {}, SoundName = {
    SN_CLICK: "hlsdk/res/sounds/click.mp3"
}, LoginConfig = {
    isAlwaysNewPlayer: !1,
    fixedOpenID: null
}, PlatIDs = {
    winAppID: "",
    wxAppID: "",
    qqAppID: "",
    ttAppID: "",
    oppoAppID: "",
    vivoAppID: ""
}, PlatAdUnitIDs = {
    bannerAdUnitIDs: [],
    videoAdUnitIDs: [],
    interstitialAdUnitIDs: [],
    splashAdUnitIDs: [],
    boxAdUnitIDs: [],
    blockAdUnitIDs: [],
    nativeAdUnitIDs: [],
    customAdUnitIDs: [],
    gameNativeAdUnitIDs: []
}, PlatAdOnShowFlow = {
    splash: "",
    banner: "",
    video: "",
    interstitial: "",
    custom: "",
    box: "",
    block: "",
    moreGame: "",
    portal: "",
    streamer: "",
    drawer: ""
}, ScreenOrientation = {
    landscape: "landscape",
    portrait: "portrait"
}, AppConfig = {
    version: ""
}, CompanyConfig = {
    name: "quyou",
    FullName: "长沙趣游网络科技有限公司"
}, SubConfig = {
    path: ""
}, PreloadConfig = {
    isPreloadResInInit: !0
}, AldConfig = {
    appKey: "",
    qqAppKey: "",
    getLocation: !1,
    useOpen: !0,
    openKey: "key_of_hl_ald_open_id"
}, UmaConfig = {
    wxAppKey: "",
    qqAppKey: ""
}, UserTypeTag = {
    All: "0",
    New: "1",
    Old: "2"
}, BlackTypeTag = {
    All: "0",
    Black: "1",
    Normal: "2"
}, RewatchVideoDialog = {
    content: "观看完整的视频才可获得游戏奖励",
    cancelText: "稍后观看",
    confirmText: "重新观看"
}, ShowVideoFailTips = {
    noFinish: "奖励视频未观看完成，无法领取奖励",
    noReady: "暂无奖励视频播放，请稍后重新尝试",
    wait: "奖励视频还未准备好，请{0}秒后重新尝试",
    noMore: "很抱歉，今日奖励已经达到上限"
}, ShareFailTips = [ "请不要一直打扰同一个群", "只有分享到群中才可以获得奖励", "很抱歉，本次游戏时间太短了，无法分享" ], ShareVideoFailTips = [ "很抱歉，本次游戏时间太短了，无法分享" ], HandleErrorDialog = {
    title: "网络错误",
    content: "网络连接异常，请稍后重试",
    cancelText: "退出游戏",
    confirmText: "重新启动"
}, BtnClickInvokeType = {
    None: 0,
    Banner: 1,
    RewardedVideo: 2
}, BtnClickMistakeType = {
    None: 0,
    Move: 1,
    Show: 2
}, CrazyClickInvokeType = {
    None: 0,
    Banner: 1,
    CustomScroll: 2,
    Box: 3
}, CrazyClickBannerMistakeType$1 = {
    None: 0,
    Move: 1,
    Show: 2
}, PreloadFlowType = {
    Loading: 0,
    Main: 1,
    Gaming: 2
}, HLSDKLocalData = {
    _isInited: !1,
    _isPreloadAllResInInit: !0,
    _openID: null,
    _token: null,
    _address: "",
    _isNewPlayer: !1,
    _isMistakeEnabled: !1,
    _blackInfo: {
        backArea: "",
        blackScene: ""
    },
    _advInfos: null,
    _gameFlows: null,
    _runningScene: null,
    _gameTimes: 0,
    _lastOnShowPagePath: "",
    _curOnShowPagePath: "",
    _viewStatus: {
        _isMainViewShowed: !1,
        _isGamingViewShowed: !1,
        _isGameEndViewShowed: !1,
        _isReviveViewShowed: !1,
        _isFinishViewShowed: !1,
        _isFinishFailViewShowed: !1
    },
    _isBannerOnShow: !1,
    _bannerAdvObj: null,
    _nextFreeGetWay: null,
    _settings: {
        _isSoundEnabled: !0,
        _isMusicEnabled: !1,
        _isMuteEnabled: !1
    },
    _interactInfo: {
        _todayAdvTimes: 0,
        _totalAdvTimes: 0,
        _todayShareTimes: 0,
        _totalShareTimes: 0,
        _saveDay: 0
    },
    _handles: {
        onErr: null,
        onShow: null,
        onHide: null
    },
    _tempHides: {
        ui: {
            couplet: null,
            scroll: null,
            scrollWithName: null,
            matrix: null
        },
        adv: {
            couplet: [],
            scroll: [],
            matrix: []
        }
    },
    _globalBannerCfg: {
        preloadCount: 0,
        maxShowTime: 999999,
        maxClickedTimes: 99,
        isTest: !1,
        isLongstay: !1
    },
    _globalVideoCfg: {
        videoLoadingTips: "",
        videoLoadingShowTime: 0
    },
    _globalNoMoveMistakeBtnCfg: {
        isEnabled: !1,
        btnDelay: 0,
        btnHide: 0,
        btnUnhandle: 0,
        btnInvokeType: 0,
        btnMistakeType: 0,
        bannerShow: 0
    },
    _globalMoveMistakeBtnCfg: {
        isEnabled: !1,
        btnDelay: 0,
        btnHide: 0,
        btnUnhandle: 0,
        btnInvokeType: 0,
        btnMoveAfterShowBanner: 0,
        moveDuration: 0
    },
    _globalCrazyClickBtnCfg: {
        isEnabled: !1,
        invokeType: "",
        mistakeStyle: 0,
        scrollAdUnitId: "",
        gap: 0,
        miniMinus: 0,
        maxMinus: 0,
        add: 0,
        target: 0,
        videoTarget: 0,
        miniClick: 0,
        maxClick: 0,
        rate: 0,
        duration: 0,
        maxMistakeTimes: 0,
        mistakeSuccTimes: 0
    },
    _flowPreloadStates: [ !1, !1, !1 ],
    _flowPreloadPromises: [ null, null, null ],
    _globalMatrixAdCfg: [],
    _globalScrollAdCfg: [],
    _globalCoupleAdCfg: []
}, addAdvTimes = function addAdvTimes() {
    HLSDKLocalData._interactInfo._todayAdvTimes += 1, HLSDKLocalData._interactInfo._totalAdvTimes += 1;
}, addShareTimes = function addShareTimes() {
    HLSDKLocalData._interactInfo._todayShareTimes += 1, HLSDKLocalData._interactInfo._totalShareTimes += 1;
}, saveInteractInfoToString = function saveInteractInfoToString() {
    return JSON.stringify(HLSDKLocalData._interactInfo);
}, loadInteractInfoFromString = function loadInteractInfoFromString(e) {
    HLSDKLocalData._interactInfo = JSON.parse(e);
}, SK_KEY_OF_LOGINED_OPENID_AND_TOKEN = "storage_of_logined_openid_and_token", SK_KEY_OF_INTERACT_INFO = "storage_of_interact_info", G_IsGlobalEventPropagation = function G_IsGlobalEventPropagation(e) {
    return "string" != typeof e || !EventName[e] || !PropagationEventNames[e];
};

var _Event = /* */ function() {
    function _Event() {
        _classCallCheck2(this, _Event);
        this._listerners = {};
    }
    _createClass2(_Event, [ {
        key: "addEventListerner",
        value: function addEventListerner(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            if (!this._checkString(e) || !this._checkListerner(t)) return "";
            void 0 === this._listerners[e] && (this._listerners[e] = []);
            var i = generateString(32);
            return this._listerners[e].push({
                key: i,
                method: t,
                caller: n
            }), i;
        }
    }, {
        key: "removeEventListernerByKey",
        value: function removeEventListernerByKey(e, t) {
            if (this._checkString(e) && this._checkString(t) && void 0 !== this._listerners[e]) for (var n = 0; n < this._listerners[e].length; n++) {
                if (this._listerners[e][n].key === t) return void this._listerners[e].splice(n, 1);
            }
        }
    }, {
        key: "removeEventListerner",
        value: function removeEventListerner(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            if (this._checkString(e) && this._checkListerner(t) && void 0 !== this._listerners[e]) for (var i = 0; i < this._listerners[e].length; i++) {
                var a = this._listerners[e][i];
                if (a.method === t && a.caller === n) return void this._listerners[e].splice(i, 1);
            }
        }
    }, {
        key: "removeAllEventListerners",
        value: function removeAllEventListerners() {
            this._listerners = {};
        }
    }, {
        key: "hasEventListerner",
        value: function hasEventListerner(e) {
            return !!this._checkString(e) && void 0 !== this._listerners[e] && this._listerners[e].length > 0;
        }
    }, {
        key: "dispatchEvent",
        value: function dispatchEvent(e) {
            if (!this._checkString(e)) return;
            var t = Array.prototype.slice.call(arguments);
            t.shift(), t.length > 0 ? console.log("dispatch EventName: {0}, Params: {1}".format(e, JSON.stringify(t))) : console.log("dispatch EventName: {0}".format(e));
            var n = null;
            for (var i in this._listerners[e]) {
                var a = this._listerners[e][i], o = !1;
                void 0 === (o = a.method.apply(a.caller, t)) && (o = null), n = n || o;
            }
            if (null === n && (n = G_IsGlobalEventPropagation(e)), !n) {
                var _n = this._getParentEventName(e);
                "" !== _n && (t.splice(0, 0, _n), this.dispatchEvent.apply(this, t));
            }
        }
    }, {
        key: "_checkString",
        value: function _checkString(e) {
            return void 0 !== e && "string" == typeof e && "" !== e;
        }
    }, {
        key: "_checkListerner",
        value: function _checkListerner(e) {
            return "function" == typeof e;
        }
    }, {
        key: "_getParentEventName",
        value: function _getParentEventName(e) {
            if (!this._checkString(e)) return "";
            var t = e.split("_"), n = "";
            for (var _e2 = 0; _e2 < t.length - 1; _e2++) {
                n += "" === n ? t[_e2] : "_" + t[_e2];
            }
            return n;
        }
    } ]);
    return _Event;
}();

var Event = new _Event();

var _Switch = /* */ function() {
    function _Switch() {
        _classCallCheck2(this, _Switch);
        this._initedCbs = {};
    }
    _createClass2(_Switch, [ {
        key: "markInited",
        value: function markInited() {
            var _this = this;
            var _loop = function _loop(e) {
                _this._initedCbs[e].forEach(function(t) {
                    void 0 !== SwitchCfgs[e] ? t(!0, SwitchCfgs[e]) : t(!1, "");
                });
            };
            for (var e in this._initedCbs) {
                _loop(e);
            }
            this._initedCbs = {};
        }
    }, {
        key: "getCfgByKey",
        value: function getCfgByKey(e, t) {
            checkFunc(t) && this._getCfgByKey(e, function(e, n) {
                e ? doCallback(t, n) : doCallback(t, null);
            });
        }
    }, {
        key: "getCfgByKeySync",
        value: function getCfgByKeySync(e) {
            return void 0 !== SwitchCfgs[e] ? SwitchCfgs[e] : null;
        }
    }, {
        key: "getCommitVersion",
        value: function getCommitVersion(e) {
            checkFunc(e) && this._getCfgByKey(SwitchName.SN_COMMIT_VERSION, function(t, n) {
                e(t ? n : "000000");
            });
        }
    }, {
        key: "getCommitVersionSync",
        value: function getCommitVersionSync() {
            return void 0 !== SwitchCfgs[SwitchName.SN_COMMIT_VERSION] && SwitchCfgs[SwitchName.SN_COMMIT_VERSION];
        }
    }, {
        key: "isPublishing",
        value: function isPublishing(e) {
            checkFunc(e) && this._getCfgByKey(SwitchName.SN_IS_PUBLISHING, function(t, n) {
                e(!!t && 1 === parseInt(n, 10));
            });
        }
    }, {
        key: "isPublishingSync",
        value: function isPublishingSync() {
            return void 0 !== SwitchCfgs[SwitchName.SN_IS_PUBLISHING] && 1 === parseInt(SwitchCfgs[SwitchName.SN_IS_PUBLISHING], 10);
        }
    }, {
        key: "getRewardTimesOfEachDay",
        value: function getRewardTimesOfEachDay(e) {
            checkFunc(e) && this._getCfgByKey(SwitchName.SN_REWARD_TIMES_OF_EACH_DAY, function(t, n) {
                e(t ? parseInt(n, 10) : 0);
            });
        }
    }, {
        key: "getRateOfShare",
        value: function getRateOfShare(e) {
            checkFunc(e) && this._getCfgByKey(SwitchName.SN_RATE_OF_SHARE, function(t, n) {
                e(t ? parseInt(n, 10) : 100);
            });
        }
    }, {
        key: "getAdvTimesBeforeShare",
        value: function getAdvTimesBeforeShare(e) {
            checkFunc(e) && this._getCfgByKey(SwitchName.SN_ADV_TIMES_BEFORE_SHARE, function(t, n) {
                e(t ? parseInt(n, 10) : 0);
            });
        }
    }, {
        key: "getMinDurationBetweenShare",
        value: function getMinDurationBetweenShare(e) {
            checkFunc(e) && this._getCfgByKey(SwitchName.SN_MIN_DURATION_BETWEEN_SHARE, function(t, n) {
                e(t ? parseInt(n, 10) : 0);
            });
        }
    }, {
        key: "_getCfgByKey",
        value: function _getCfgByKey(e, t) {
            checkString(e) || t(!1, ""), Object.keys(SwitchCfgs).length > 0 ? void 0 !== SwitchCfgs[e] ? t(!0, SwitchCfgs[e]) : t(!1, "") : (this._initedCbs[e] || (this._initedCbs[e] = []), 
            this._initedCbs[e].push(t));
        }
    } ]);
    return _Switch;
}();

var Switch = new _Switch();

function checkBlackState() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    if (checkString(e)) {
        var _t = e.split(",");
        for (var _e3 = 0; _e3 < _t.length; _e3++) {
            if (-1 !== HLSDKLocalData._address.indexOf(_t[_e3])) return !1;
        }
    }
    if (checkString(t)) {
        var _e4 = PlatHelper.getLaunchScene(), n = t.split(",");
        for (var _t2 = 0; _t2 < n.length; _t2++) {
            if (_e4 === n[_t2]) return !1;
        }
    }
    return !0;
}

function isGlobalMistakeEnabled() {
    return !Switch.isPublishingSync() && HLSDKLocalData._isMistakeEnabled;
}

function isLoadLandscapeConfig$1() {
    return HLSDK_CFG.Orientation === ScreenOrientation.landscape;
}

function isLoadWXConfig$1() {
    return !(!_isWINPlatform() || HLSDK_CFG.PlatIDs.winAppID !== HLSDK_CFG.PlatIDs.wxAppID) || _isWXPlatform();
}

function getMatrixInputLayout(e) {
    var t = {};
    t.row = Number(e.row || 5), t.height = Math.min(Math.max(85 + 55 * t.row, 195), 360), 
    t.width = 300;
    var n = PlatHelper.getPlat();
    if (null != n) {
        var i = n.getSystemInfoSync();
        isLoadLandscapeConfig$1() || "1" != e.isStret || (t.height = t.height * (i.screenWidth / t.width), 
        t.width = i.screenWidth);
    }
    return t.isNewLayout = !0, null != e && getLayoutStyle(e, t), t;
}

function getScrollInputLayout(e) {
    var t = {}, n = Number(e.rowCount || 1), i = Number(e.cellCount || 1);
    return 1 == n && 1 == i ? (t.width = 60, t.height = 106) : n > 1 ? (t.orientation = "vertical", 
    t.width = 72, t.height = 72 * Math.min(5, Math.max(2, n)) + 47) : (t.orientation = "landscape", 
    t.height = 106, t.width = 72 * Math.min(5, Math.max(2, i))), t.isNewLayout = !0, 
    null != e && getLayoutStyle(e, t), t;
}

function getLayoutStyle(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return null != e.fromTopPercent && -1 != Number(e.fromTopPercent) ? t.top = Number(e.fromTopPercent) : null != e.fromBottomPercent && -1 != Number(e.fromBottomPercent) ? t.bottom = Number(e.fromBottomPercent) : null != e.centerY && -1 != Number(e.centerY) ? t.centerY = Number(e.centerY) : t.top = 0, 
    null != e.fromLeftPercent && -1 != Number(e.fromLeftPercent) ? t.left = Number(e.fromLeftPercent) : null != e.fromRightPercent && -1 != Number(e.fromRightPercent) ? t.right = Number(e.fromRightPercent) : null != e.centerX && -1 != Number(e.centerX) ? t.centerX = Number(e.centerX) : t.left = 0, 
    t;
}

function isLoadQQConfig() {
    return !(!_isWINPlatform() || HLSDK_CFG.PlatIDs.winAppID !== HLSDK_CFG.PlatIDs.qqAppID) || _isQQPlatform();
}

function isLoadTTConfig() {
    return !(!_isWINPlatform() || HLSDK_CFG.PlatIDs.winAppID !== HLSDK_CFG.PlatIDs.ttAppID) || _isTTPlatform();
}

function isLoadOPPOConfig() {
    return !(!_isWINPlatform() || HLSDK_CFG.PlatIDs.winAppID !== HLSDK_CFG.PlatIDs.oppoAppID) || _isOPPOPlatform();
}

function isLoadVIVOConfig() {
    return !(!_isWINPlatform() || HLSDK_CFG.PlatIDs.winAppID !== HLSDK_CFG.PlatIDs.vivoAppID) || _isVIVOPlatform();
}

function isLoadNativeConfig() {
    return !(!_isWINPlatform() || HLSDK_CFG.PlatIDs.winAppID !== HLSDK_CFG.PlatIDs.nativeAppID) || _isAndroidNativePlatform() || _isIOSNativePlatform();
}

var WX_AdvKeys = {
    Banner: "bannerAd",
    RewardedVideo: "rewardedVideoAd",
    Interstitial: "interstitialAd",
    VideoInterstitial: "videoInterstitialAd",
    Couplet: "coupletAd",
    Scroll: "scrollAd",
    MoreGame: "moreGameAd",
    Matrix: "matrixAd"
}, WX_FlowAdvType = {
    Banner: "bannerAd",
    RewardedVideo: "rewardedVideoAd",
    Interstitial: "interstitialAd",
    Custom: "customAd"
}, WX_FlowAdvActionType = {
    Show: "0",
    LoadSucc: "1",
    LoadFail: "2"
}, WX_FlowBannerAdvSize = {
    Width: 960,
    Height: 334
}, QQ_AdvKeys = {
    Banner: "bannerAd_QQ",
    RewardedVideo: "rewardedVideoAd_QQ",
    Interstitial: "interstitialAd_QQ",
    Couplet: "coupletAd_QQ",
    Scroll: "scrollAd_QQ",
    MoreGame: "moreGameAd_QQ",
    Matrix: "matrixAd_QQ"
}, QQ_FlowAdvType = {
    Banner: "bannerAd",
    RewardedVideo: "rewardedVideoAd",
    Interstitial: "interstitialAd",
    Box: "boxAd",
    Block: "blockAd"
}, QQ_FlowAdvActionType = {
    Show: "0",
    LoadSucc: "1",
    LoadFail: "2"
}, QQ_FlowBannerAdvSize = {
    Width: 960,
    Height: 223
}, TT_AdvKeys = {
    Banner: "bannerAd_TT",
    RewardedVideo: "rewardedVideoAd_TT",
    Interstitial: "interstitialAd_TT",
    MoreGame: "moreGameAd_TT"
}, TT_FlowAdvType = {
    Banner: "bannerAd",
    RewardedVideo: "rewardedVideoAd",
    Interstitial: "interstitialAd",
    MoreGame: "moreGameAd"
}, TT_FlowAdvActionType = {
    Show: "0",
    LoadSucc: "1",
    LoadFail: "2"
}, TT_FlowBannerAdvSize = {
    Width: 300,
    Height: 105
}, Native_AdvKeys = {
    Banner: "bannerAd_Native",
    RewardedVideo: "rewardedVideoAd_Native",
    Interstitial: "interstitialAd_Native"
}, Native_FlowAdvType = {
    Banner: "bannerAd",
    RewardedVideo: "rewardedVideoAd",
    Interstitial: "interstitialAd"
}, Native_FlowAdvActionType = {
    Show: "0",
    LoadSucc: "1",
    LoadFail: "2"
}, Native_FlowBannerAdvSize = {
    Width: 300,
    Height: 75
}, OPPO_AdvKeys = {
    Banner: "bannerAd_OPPO",
    RewardedVideo: "rewardedVideoAd_OPPO",
    Portal: "portalAd_OPPO",
    Scroll: "scrollAd_OPPO",
    Drawer: "drawerAd_OPPO",
    Graphic: "graphic_OPPO"
}, OPPO_FlowAdvType = {
    Banner: "bannerAd",
    RewardedVideo: "rewardedVideoAd",
    Portal: "portalAd",
    Streamer: "streamerAd",
    Drawer: "drawerAd",
    Custom: "customAd"
}, OPPO_FlowAdvActionType = {
    Show: "0",
    LoadSucc: "1",
    LoadFail: "2"
}, VIVO_AdvKeys = {
    Banner: "bannerAd_VIVO",
    RewardedVideo: "rewardedVideoAd_VIVO",
    Interstitial: "interstitialAd_VIVO",
    Portal: "portalAd_VIVO",
    Streamer: "streamerAd_VIVO",
    Graphic: "graphic_VIVO"
}, VIVO_FlowAdvType = {
    Banner: "bannerAd",
    RewardedVideo: "rewardedVideoAd",
    Interstitial: "interstitialAd",
    Portal: "portalAd",
    Streamer: "streamerAd",
    Custom: "customAd"
}, VIVO_FlowAdvActionType = {
    Show: "0",
    LoadSucc: "1",
    LoadFail: "2"
}, _AdvKeys = {
    Banner: "",
    RewardedVideo: "",
    Interstitial: "",
    VideoInterstitial: "",
    Couplet: "",
    Scroll: "",
    MoreGame: "",
    Matrix: "",
    Portal: ""
}, _FlowAdvType = {
    Banner: "",
    RewardedVideo: "",
    Interstitial: "",
    Custom: "",
    Box: "",
    Block: "",
    MoreGame: "",
    Portal: "",
    Streamer: "",
    Drawer: "",
    Graphic: ""
}, _FlowAdvActionType = {
    Show: "",
    LoadSucc: "",
    LoadFail: ""
}, _FlowBannerAdvSize = {
    Width: 0,
    Height: 0
};

isLoadQQConfig() ? (Object.assign(_AdvKeys, QQ_AdvKeys), Object.assign(_FlowAdvType, QQ_FlowAdvType), 
Object.assign(_FlowAdvActionType, QQ_FlowAdvActionType), Object.assign(_FlowBannerAdvSize, QQ_FlowBannerAdvSize)) : isLoadTTConfig() ? (Object.assign(_AdvKeys, TT_AdvKeys), 
Object.assign(_FlowAdvType, TT_FlowAdvType), Object.assign(_FlowAdvActionType, TT_FlowAdvActionType), 
Object.assign(_FlowBannerAdvSize, TT_FlowBannerAdvSize)) : isLoadOPPOConfig() ? (Object.assign(_AdvKeys, OPPO_AdvKeys), 
Object.assign(_FlowAdvType, OPPO_FlowAdvType), Object.assign(_FlowAdvActionType, OPPO_FlowAdvActionType)) : isLoadVIVOConfig() ? (Object.assign(_AdvKeys, VIVO_AdvKeys), 
Object.assign(_FlowAdvType, VIVO_FlowAdvType), Object.assign(_FlowAdvActionType, VIVO_FlowAdvActionType)) : isLoadWXConfig$1() ? (Object.assign(_AdvKeys, WX_AdvKeys), 
Object.assign(_FlowAdvType, WX_FlowAdvType), Object.assign(_FlowAdvActionType, WX_FlowAdvActionType), 
Object.assign(_FlowBannerAdvSize, WX_FlowBannerAdvSize)) : isLoadNativeConfig() ? (Object.assign(_AdvKeys, Native_AdvKeys), 
Object.assign(_FlowAdvType, Native_FlowAdvType), Object.assign(_FlowAdvActionType, Native_FlowAdvActionType), 
Object.assign(_FlowBannerAdvSize, Native_FlowBannerAdvSize)) : console.error("Not Support This Platform, check hlsdk_config.js first...");

var FlowAdvType = _FlowAdvType, FlowAdvActionType = _FlowAdvActionType, FlowBannerAdvSize = _FlowBannerAdvSize, hl_cfg = {
    app_id_key: "",
    company: CompanyConfig.name
}, hl = {}, plat = null;

if (_isQQPlatform() ? (plat = window.qq, hl_cfg.app_id_key = "qqAppID") : _isTTPlatform() ? (plat = window.tt, 
hl_cfg.app_id_key = "ttAppID") : _isOPPOPlatform() ? (plat = window.qg, hl_cfg.app_id_key = "oppoAppID") : _isVIVOPlatform() ? (plat = window.qg, 
hl_cfg.app_id_key = "vivoAppID") : _isWXPlatform() && (plat = window.wx, hl_cfg.app_id_key = "wxAppID"), 
plat) {
    var g_sendingCount = 0;
    hl.init = function() {
        console.log("start to load hl sdk...");
        var e = function e(_e5) {
            return "string" == typeof _e5 && "" !== _e5;
        }, t = function t() {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }
            return e() + e() + e() + e() + e() + e() + e() + e();
        }, n = function n(t, _n2) {
            e(t) ? e(_n2) ? "undefined" != typeof Laya ? Laya.LocalStorage.setItem(t, _n2) : "undefined" != typeof cc && cc.sys.localStorage.setItem(t, _n2) : console.error("setStorage Fail, only support string data...") : console.error("setStorage Fail, Check Input Key...");
        }, i = function i(t, n) {
            if (!e(t)) return console.error("getStorage Fail, Check Input Key..."), void 0 !== n ? n : null;
            var i = null;
            return "undefined" != typeof Laya ? i = Laya.LocalStorage.getItem(t) : "undefined" != typeof cc && (i = cc.sys.localStorage.getItem(t)), 
            null !== i && "" !== i || void 0 === n ? i : n;
        }, a = function a(t) {
            e(t) ? "undefined" != typeof Laya ? Laya.LocalStorage.removeItem(t) : "undefined" != typeof cc && cc.sys.localStorage.removeItem(t) : console.error("clearStorage Fail, Check Input Key...");
        }, o = function o() {
            return "" !== g ? new Promise(function(e, t) {
                e("");
            }) : _isWXPlatform() || _isQQPlatform() ? new Promise(function(e, t) {
                plat.login({
                    success: function success(t) {
                        f = t.code, e("");
                    }
                });
            }) : new Promise(function(e, t) {
                e("");
            });
        }, s = function s(e) {
            var t = i("qy_unsend_dict");
            if ("string" == typeof t && "" !== t) {
                var _i = JSON.parse(t), _a = !1;
                for (var _t3 in _i) {
                    if (_t3 === e) {
                        _a = !0, delete _i[_t3];
                        break;
                    }
                }
                _a && n("qy_unsend_dict", JSON.stringify(_i));
            }
        }, r = function r(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var a = null, o = i("qy_unsend_adv_infos");
            if ("string" == typeof o && "" !== o && (a = JSON.parse(o)), null === a && (a = []), 
            t) {
                if (Array.isArray(t)) t.forEach(function(t) {
                    a.push({
                        workflow_path: e,
                        adv_id: t.adv_id,
                        appid: t.appid,
                        origin_path: t.origin_path ? t.origin_path : t.logo_url.origin_path,
                        type: -1
                    });
                }); else if ("object" == _typeof2(t)) {
                    var _n3 = t;
                    a.push({
                        workflow_path: e,
                        adv_id: _n3.adv_id,
                        appid: _n3.appid,
                        origin_path: _n3.origin_path ? _n3.origin_path : _n3.logo_url.origin_path,
                        type: -1
                    });
                }
            } else a.push({
                workflow_path: e,
                last_workflow_path: HLSDKLocalData._lastOnShowPagePath,
                times: HLSDKLocalData._gameTimes
            });
            n("qy_unsend_adv_infos", JSON.stringify(a));
        }, l = function l() {
            var e = null, t = i("qy_unsend_adv_infos");
            "string" == typeof t && "" !== t && (e = JSON.parse(t)), null !== e && (plat.h_SendEvent("ad", e), 
            a("qy_unsend_adv_infos"));
        }, d = function d() {
            var e = null, t = i("qy_unsend_flow_adv_infos");
            "string" == typeof t && "" !== t && (e = JSON.parse(t)), null !== e && (plat.h_SendEvent("adv", e), 
            a("qy_unsend_flow_adv_infos"));
        }, h = function h(t, n, i, a) {
            if (!e(t) || t.length > 255) return void console.error("上报事件名称必须为String类型且不能超过255个字符");
            var o = "";
            "string" == typeof n ? o = n : "object" == _typeof2(n) && (o = JSON.stringify(n));
            var s = {
                ak: PlatIDs[hl_cfg.app_id_key],
                uu: u,
                oid: "",
                openid: g,
                cd: f,
                ev: "event",
                tp: t,
                ct: o,
                v: c,
                st: Date.now(),
                wsr: _
            };
            !function(e) {
                if (e && plat.getSystemInfoSync) {
                    var _t4 = plat.getSystemInfoSync();
                    _t4 && (e.br = _t4.brand, e.md = _t4.model, e.pr = _t4.pixelRatio, e.sw = _t4.screenWidth, 
                    e.sh = _t4.screenHeight, e.ww = _t4.windowWidth, e.wh = _t4.windowHeight, e.lang = _t4.language, 
                    e.wv = _t4.COREVersion, e.sv = _t4.system || "", e.wvv = _t4.platform || "", e.wsdk = _t4.platformVersion || "", 
                    e.fs = _t4.fontSizeSetting || "", e.bh = _t4.benchmarkLevel || "", e.bt = _t4.battery || "", 
                    e.wf = _t4.wifiSignal || "", e.lng = "", e.lat = "", e.nt = m, e.spd = "", e.ufo = "");
                }
            }(s), function(e, t) {
                if ("object" == _typeof2(t)) {
                    var _n4 = null;
                    if ("undefined" != typeof Laya ? _n4 = new Laya.HttpRequest()._http : "undefined" != typeof cc && (_n4 = cc.loader.getXMLHttpRequest()), 
                    _n4) {
                        if (_n4.open("POST", t.url, !0), console.log("req adv url: " + t.url), "function" == typeof t.complete && (_n4.onreadystatechange = function() {
                            2 === _n4.readyState && "function" == typeof t.complete && t.complete();
                        }), _n4.onload = function() {
                            if (4 === _n4.readyState) {
                                var _e6 = null;
                                if ("function" == typeof (_e6 = _n4.status >= 200 && _n4.status < 300 ? t.success : t.fail)) try {
                                    _e6({
                                        data: JSON.parse(_n4.responseText),
                                        statusCode: _n4.status
                                    });
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    _e6({
                                        data: _n4.responseText,
                                        statusCode: _n4.status
                                    });
                                }
                            }
                        }, _n4.timeout = 1e4, _n4.ontimeout = function(e) {
                            console.error(e), "function" == typeof t.fail && t.fail({
                                data: null,
                                statusCode: _n4.status
                            });
                        }, _n4.onerror = function(e) {
                            console.error(e), "function" == typeof t.fail && t.fail({
                                data: null,
                                statusCode: _n4.status
                            });
                        }, _n4.setRequestHeader("au", hl_cfg.company), "object" == _typeof2(t.header)) for (var _e7 in t.header) {
                            _n4.setRequestHeader(_e7, t.header[_e7]);
                        }
                        "form" === e ? _n4.setRequestHeader("content-type", "application/x-www-form-urlencoded") : _n4.setRequestHeader("content-type", "application/json"), 
                        t.data ? "form" === e ? _n4.send(t.data) : _n4.send(JSON.stringify(t.data)) : _n4.send(null);
                    }
                }
            }("json", {
                url: p + "/sdk/v2/report",
                data: s,
                success: function success(e) {
                    e.data && "200" === e.data.status ? (console.log("report to server succ..."), "function" == typeof i && i()) : (console.log("report to server fail..."), 
                    "function" == typeof a && a());
                },
                fail: function fail(e) {
                    console.log("report to server fail..."), "function" == typeof a && a();
                }
            });
        };
        e(PlatIDs[hl_cfg.app_id_key]) || console.error("请在配置文件(qy-plat-config.js)中填写您的app_key"), 
        PlatIDs[hl_cfg.app_id_key] = PlatIDs[hl_cfg.app_id_key].replace(/\s/g, "");
        var c = "1.0.0", u = function() {
            var e = i("hl_uuid");
            return null !== e && "" !== e || (e = t(), n("hl_uuid", e)), e;
        }(), p = "https://api.game.hnquyou.com", _ = {}, g = "", f = "", m = "";
        plat.getLaunchOptionsSync && (_ = plat.getLaunchOptionsSync(), console.log("g_launchOpts: ", _)), 
        console.log("g_uuid: ", u);
        var A = [ "h_ShowAdvs", "h_ShowView", "h_ShowPage", "h_ShowComponent", "h_ReportFlowAdv", "h_ToMinProgram", "h_SendEvent", "h_ReportAllSavedAdvInfos", "h_SendOpenid" ], v = {
            h_ShowAdvs: function h_ShowAdvs(e, t) {
                r(e, t);
            },
            h_ShowView: function h_ShowView(e) {
                r(e);
            },
            h_ShowPage: function h_ShowPage(e) {
                r(e);
            },
            h_ShowComponent: function h_ShowComponent(e) {
                r(e);
            },
            h_ReportFlowAdv: function h_ReportFlowAdv(e, t) {
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                !function(e, t, a) {
                    var o = null, s = i("qy_unsend_flow_adv_infos");
                    "string" == typeof s && "" !== s && (o = JSON.parse(s)), null === o && (o = []);
                    var r = {
                        adv_key: e,
                        type: t
                    };
                    t === FlowAdvActionType.Show && (r.workflow_path = a, r.last_workflow_path = HLSDKLocalData._lastOnShowPagePath, 
                    r.times = HLSDKLocalData._gameTimes), o.push(r), n("qy_unsend_flow_adv_infos", JSON.stringify(o));
                }(e, t, a);
            },
            h_ToMinProgram: function h_ToMinProgram(t, n) {
                var i = "object" === function(e) {
                    return Object.prototype.toString(e).slice(8, -1).toLowerCase();
                }(n) ? n : {}, a = n.success, o = n.fail;
                !e(i.pkgName) && e(i.appid) && (i.pkgName = i.appid), e(i.path) || (i.path = void 0);
                var s = function s(e) {
                    plat.h_SendEvent("ad", [ {
                        workflow_path: t,
                        adv_id: i.adv_id,
                        origin_path: i.origin_path,
                        type: e
                    } ]);
                };
                i.success = function(e) {
                    s(1), "function" == typeof a && a(e);
                }, i.fail = function(e) {
                    s(2), "function" == typeof o && o(e);
                };
                var r = null;
                plat && (plat.navigateToMiniGame ? r = plat.navigateToMiniGame : plat.navigateToMiniProgram && (r = plat.navigateToMiniProgram)), 
                r && (s(0), r(i));
            },
            h_SendEvent: function h_SendEvent(a, r) {
                o().then(function() {
                    h(a, r, function() {
                        !function() {
                            if (g_sendingCount > 0) return;
                            var e = i("qy_unsend_dict");
                            if ("string" == typeof e && "" !== e) {
                                var _t5 = JSON.parse(e);
                                var _loop2 = function _loop2(_e8) {
                                    if (g_sendingCount >= 9) return "break";
                                    ++g_sendingCount;
                                    var n = _t5[_e8].event, i = _t5[_e8].data;
                                    o().then(function() {
                                        h(n, i, function() {
                                            --g_sendingCount, s(_e8);
                                        }, function() {
                                            --g_sendingCount;
                                        });
                                    });
                                };
                                for (var _e8 in _t5) {
                                    var _ret = _loop2(_e8);
                                    if (_ret === "break") break;
                                }
                            }
                        }();
                    }, function() {
                        !function(a, o) {
                            if (!e(PlatIDs[hl_cfg.app_id_key])) return;
                            var s = i("qy_unsend_dict"), r = {};
                            "string" == typeof s && "" !== s && (r = JSON.parse(s)), r[t()] = {
                                event: a,
                                data: o
                            }, n("qy_unsend_dict", JSON.stringify(r));
                        }(a, r);
                    });
                });
            },
            h_ReportAllSavedAdvInfos: function h_ReportAllSavedAdvInfos() {
                l(), d();
            },
            h_SendOpenid: function h_SendOpenid(e) {
                console.log("register openid into hl sdk succ..."), g = e;
            }
        };
        for (var _e9 = 0; _e9 < A.length; _e9++) {
            var _t6 = A[_e9], _n5 = v[_t6];
            Object.defineProperty(plat, _t6, {
                value: _n5,
                writable: !1,
                enumerable: !0,
                configurable: !0
            });
        }
        plat.h_SendEvent && (plat.getNetworkType ? new Promise(function(e, t) {
            plat.getNetworkType({
                success: function success(t) {
                    m = t.networkType ? t.networkType : "", e("");
                },
                fail: function fail() {
                    e("");
                }
            });
        }) : new Promise(function(e, t) {
            e("");
        })).then(function() {
            plat.h_SendEvent("sdk_init"), l(), d(), setInterval(function() {
                l(), d();
            }, 1e4);
        });
    };
} else hl.init = function() {
    console.log("hl sdk not support on windows platform....");
};

var getLocation$1 = AldConfig.getLocation, useOpen$1 = AldConfig.useOpen, openKey$1 = AldConfig.openKey, ald = {};

window.wx ? ald.init = function() {
    function t() {
        var e = "";
        try {
            e = wx.getStorageSync("aldstat_op");
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            e = wx.getStorageSync("aldstat_op");
        }
        if ("" === e) {
            if ("" === a) return "";
            try {
                _ = e = wx.getStorageSync(a), e && wx.setStorageSync("aldstat_op", e);
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                _ = e = wx.getStorageSync(a), e && wx.setStorageSync("aldstat_op", e);
            }
        }
        return e;
    }
    function u(e) {
        var t = {};
        return "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(e, n) {
            t["[object " + e + "]"] = e.toLowerCase();
        }), null == e ? e : "object" == _typeof2(e) || "function" == typeof e ? t[function(e) {
            return Object.prototype.toString.call(e);
        }.call(e)] || "object" : _typeof2(e);
    }
    function d() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }
        return e() + e() + e() + e() + e() + e() + e() + e();
    }
    function f(e, a) {
        function r() {
            return new Promise(function(t, n) {
                wx.request({
                    url: "https://" + i + ".aldwx.com/d.html",
                    data: e,
                    header: {
                        se: p || "",
                        op: _ || "",
                        img: C || ""
                    },
                    method: "GET",
                    fail: function fail() {
                        t("");
                    },
                    success: function success(e) {
                        t(200 == e.statusCode ? "" : "status error");
                    }
                });
            });
        }
        useOpen$1 && t(), A++, e.as = I, e.at = y, e.rq_c = A, e.ifo = s, e.ak = AldConfig.appKey, 
        e.uu = l, e.v = n, e.st = Date.now(), e.ev = a, e.te = o, e.wsr = v, "" !== function(e) {
            if (void 0 === e || "" === e) return "";
            var t = {};
            for (var n in e) {
                "rawData" != n && "errMsg" != n && (t[n] = e[n]);
            }
            return t;
        }(e.ufo) && (e.ufo = e.ufo), e.ec = m, useOpen$1 ? "" === _ ? D.push(r) : (wx.Queue.push(r), 
        D.concat()) : wx.Queue.push(r);
    }
    function g(e) {
        var t = {};
        for (var n in e) {
            t[n] = e[n];
        }
        return t;
    }
    function h(e) {
        for (var t = "", n = 0; n < e.length; n++) {
            e[n].length > t.length && (t = e[n]);
        }
        return t;
    }
    console.log("start to load ald sdk...");
    var n = "3.2.0", i = "glog";
    "" === AldConfig.appKey && console.error("请在配置文件(ald-game-config.js)中填写您的AldConfig.appKey"), 
    useOpen$1 && console.warn("提示：开启了useOpen配置后，如果不上传用户opendId则不会上报数据。"), AldConfig.appKey = AldConfig.appKey.replace(/\s/g, "");
    var a = openKey$1, o = "wg";
    wx.request({
        url: "https://" + i + ".aldwx.com/config/app.json",
        method: "GET",
        success: function success(e) {
            200 === e.statusCode && (e.data.version > n && console.warn("您的SDK不是最新版本，请尽快升级！"), 
            e.data.warn && console.warn(e.data.warn), e.data.error && console.error(e.data.error));
        }
    });
    var s = "", l = function() {
        var e = "";
        try {
            e = wx.getStorageSync("aldstat_uuid"), wx.setStorageSync("ald_ifo", !0);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            e = "uuid_getstoragesync";
        }
        if (e) s = !1; else {
            e = d(), s = !0;
            try {
                wx.setStorageSync("aldstat_uuid", e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
            }
        }
        return e;
    }(), c = {}, p = "", _ = t(), m = 0, A = "", v = wx.getLaunchOptionsSync(), S = Date.now(), y = "" + Date.now() + Math.floor(1e7 * Math.random()), I = "" + Date.now() + Math.floor(1e7 * Math.random()), w = 0, b = "", C = "", P = !0, T = !1, O = [ "aldSendEvent", "aldOnShareAppMessage", "aldShareAppMessage", "aldSendSession", "aldSendOpenid", "aldLevelEvent" ], k = [ "payStart", "paySuccess", "payFail", "die", "revive", "tools", "award" ], L = [ "complete", "fail" ], E = wx.getStorageSync("ald_level_time") || 0, N = wx.getStorageSync("ald_level_session") || "";
    void 0 === wx.Queue && (wx.Queue = new function() {
        this.concurrency = 4, this.queue = [], this.tasks = [], this.activeCount = 0;
        var e = this;
        this.push = function(t) {
            this.tasks.push(new Promise(function(n, i) {
                var a = function a() {
                    e.activeCount++, t().then(function(e) {
                        n(e);
                    }).then(function() {
                        e.next();
                    });
                };
                e.activeCount < e.concurrency ? a() : e.queue.push(a);
            }));
        }, this.all = function() {
            return Promise.all(this.tasks);
        }, this.next = function() {
            e.activeCount--, e.queue.length > 0 && e.queue.shift()();
        };
    }(), wx.Queue.all());
    var D = new function() {
        this.request = [], this.push = function(e) {
            this.request.length >= 18 ? (this.request.shift(), this.request.push(e)) : this.request.push(e);
        }, this.concat = function() {
            this.request.map(function(e) {
                wx.Queue.push(e);
            }), this.request = [];
        };
    }();
    Promise.all([ new Promise(function(e, t) {
        wx.getSetting({
            success: function success(t) {
                t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function success(t) {
                        C = h(t.userInfo.avatarUrl.split("/")), e(t);
                    },
                    fail: function fail() {
                        e("");
                    }
                }) : e("");
            },
            fail: function fail() {
                e("");
            }
        });
    }), new Promise(function(e, t) {
        wx.getNetworkType({
            success: function success(t) {
                e(t);
            },
            fail: function fail() {
                e("");
            }
        });
    }), new Promise(function(e, t) {
        getLocation$1 ? wx.getLocation({
            success: function success(t) {
                e(t);
            },
            fail: function fail() {
                e("");
            }
        }) : wx.getSetting({
            success: function success(t) {
                t.authSetting["scope.userLocation"] ? (wx.getLocation({
                    success: function success(t) {
                        e(t);
                    },
                    fail: function fail() {
                        e("");
                    }
                }), e("")) : e("");
            },
            fail: function fail() {
                e("");
            }
        });
    }) ]).then(function(e) {
        "" !== e[2] ? (c.lat = e[2].latitude || "", c.lng = e[2].longitude || "", c.spd = e[2].speed || "") : (c.lat = "", 
        c.lng = "", c.spd = ""), "" !== e[1] ? c.nt = e[1].networkType || "" : c.nt = "";
        var t = g(c);
        "" !== e[0] && (t.ufo = e[0], b = e[0]), f(t, "init");
    }), wx.onShow(function(e) {
        if (v = e, w = Date.now(), !P && !T) {
            y = "" + Date.now() + Math.floor(1e7 * Math.random()), s = !1;
            try {
                wx.setStorageSync("ald_ifo", !1);
            } catch (e) {}
        }
        P = !1, T = !1;
        var t = g(c), n = g(c);
        t.sm = w - S, e.query.ald_share_src && e.shareTicket && "1044" === e.scene ? (n.tp = "ald_share_click", 
        new Promise(function(e, t) {
            "1044" == v.scene ? wx.getShareInfo({
                shareTicket: v.shareTicket,
                success: function success(t) {
                    e(t);
                },
                fail: function fail() {
                    e("");
                }
            }) : e("");
        }).then(function(e) {
            n.ct = e, f(n, "event");
        })) : e.query.ald_share_src && (n.tp = "ald_share_click", n.ct = "1", f(n, "event")), 
        f(t, "show");
    }), wx.onHide(function() {
        wx.setStorageSync("ald_level_session", "");
        var e = g(c);
        e.dr = Date.now() - w, "" === b ? wx.getSetting({
            success: function success(t) {
                t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function success(t) {
                        e.ufo = t, b = t, C = h(t.userInfo.avatarUrl.split("/")), f(e, "hide");
                    }
                }) : f(e, "hide");
            }
        }) : f(e, "hide");
    }), wx.onError(function(e) {
        var t = g(c);
        t.tp = "ald_error_message", t.ct = e, m++, f(t, "event");
    });
    var B = {
        aldSendEvent: function aldSendEvent(e, t) {
            var n = g(c);
            if ("" !== e && "string" == typeof e && e.length <= 255) {
                if (n.tp = e, "string" == typeof t && t.length <= 255) n.ct = String(t), f(n, "event"); else if ("object" == _typeof2(t)) {
                    if (JSON.stringify(t).length >= 255) return void console.error("自定义事件参数不能超过255个字符");
                    if (function(e) {
                        for (var t in e) {
                            if ("object" == _typeof2(e[t]) && null !== e[t]) return !0;
                        }
                        return !1;
                    }(t)) return void console.error("事件参数，参数内部只支持Number,String等类型，请参考接入文档");
                    for (var i in t) {
                        "number" == typeof t[i] && (t[i] = t[i] + "s##");
                    }
                    n.ct = JSON.stringify(t), f(n, "event");
                } else void 0 === t || "" === t ? f(n, "event") : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符");
            } else console.error("事件名称必须为String类型且不能超过255个字符");
        },
        aldOnShareAppMessage: function aldOnShareAppMessage(e) {
            wx.onShareAppMessage(function() {
                T = !0;
                var t = e(), n = "";
                n = void 0 !== v.query.ald_share_src ? void 0 !== t.query ? (v.query.ald_share_src.indexOf(l), 
                t.query + "&ald_share_src=" + v.query.ald_share_src + "," + l) : (v.query.ald_share_src.indexOf(l), 
                "ald_share_src=" + v.query.ald_share_src + "," + l) : void 0 !== t.query ? t.query + "&ald_share_src=" + l : "ald_share_src=" + l, 
                "undefined" != u(t.ald_desc) && (n += "&ald_desc=" + t.ald_desc), t.query = n;
                var i = g(c);
                return i.ct = t, i.ct.sho = 1, i.tp = "ald_share_chain", f(i, "event"), t;
            });
        },
        aldShareAppMessage: function aldShareAppMessage(e) {
            T = !0;
            var t = e, n = "";
            n = void 0 !== v.query.ald_share_src ? void 0 !== t.query ? (v.query.ald_share_src.indexOf(l), 
            t.query + "&ald_share_src=" + v.query.ald_share_src + "," + l) : (v.query.ald_share_src.indexOf(l), 
            "ald_share_src=" + v.query.ald_share_src + "," + l) : void 0 !== t.query ? t.query + "&ald_share_src=" + l : "ald_share_src=" + l;
            var i = g(c);
            "undefined" != u(t.ald_desc) && (n += "&ald_desc=" + t.ald_desc), t.query = n, i.ct = t, 
            i.tp = "ald_share_chain", f(i, "event"), wx.shareAppMessage(t);
        },
        aldSendSession: function aldSendSession(e) {
            if ("" !== e && e) {
                var t = g(c);
                t.tp = "session", t.ct = "session", p = e, "" === b ? wx.getSetting({
                    success: function success(e) {
                        e.authSetting["scope.userInfo"] ? wx.getUserInfo({
                            success: function success(e) {
                                t.ufo = e, f(t, "event");
                            }
                        }) : f(t, "event");
                    }
                }) : (t.ufo = b, "" !== b && (t.gid = ""), f(t, "event"));
            } else console.error("请传入从后台获取的session_key");
        },
        aldSendOpenid: function aldSendOpenid(e) {
            if ("" !== e && e) {
                _ = e, wx.setStorageSync("aldstat_op", "openid");
                var t = g(c);
                t.tp = "openid", t.ct = "openid", f(t, "event");
            } else console.error("openID不能为空");
        }
    };
    wx.aldStage = new function() {
        function e(e) {
            return !/^\d+(.\d+)*$/.test(e.stageId) || e.stageId.length > 32 || isNaN(Number(e.stageId)) ? (console.warn("关卡stageId必须符合传参规则,请参考文档。"), 
            !1) : !("string" !== u(e.stageName) || e.stageName.length > 32) || (console.warn("关卡名称为必传字段,且长度小于32个字符,请参考文档"), 
            !1);
        }
        var t = "", n = "", i = 0;
        this.onStart = function(a) {
            if (e(a)) {
                var o = {};
                i = Date.now(), o.sid = a.stageId, o.snm = a.stageName, ("string" === u(a.userId) && a.userId) < 32 ? o.uid = a.userId : o.uid = "", 
                o.state = "start", n = d(), t = o, this.request();
            }
        }, this.onRunning = function(n) {
            if (e(n)) {
                var i = {
                    params: {}
                };
                if (("string" === u(n.userId) && n.userId) < 32 ? i.uid = n.userId : i.uid = "", 
                "string" !== u(n.event) && -1 === k.join(",").indexOf(n.event + ",")) return void console.warn("关卡running状态中仅支持" + k.join(",") + "事件类型，且为必传字段，详情请参考文档。");
                if (i.event = n.event, "object" !== u(n.params)) return void console.warn("关卡running状态中params为必传字段，且该字段需为Object类型，详情请参考文档。");
                if ("string" !== u(n.params.itemName) || n.params.itemName.length > 32) return void console.warn("道具/商品名称为必传字段，且长度小于32个字符，详情请参考文档");
                i.params.itnm = n.params.itemName, "string" === u(n.params.itemId) && n.params.itemId.length < 32 && (i.params.itid = n.params.itemId), 
                "number" === u(n.params.itemCount) && toString(n.params.itemCount).length < 32 ? i.params.itco = n.params.itemCount : i.params.itco = 1, 
                -1 !== n.event.indexOf("pay") && ("number" === u(n.params.itemMoney) && toString(n.params.itemMoney).length < 32 ? i.params.money = n.params.itemMoney : i.params.money = 0), 
                "string" === u(n.params.desc) && n.params.desc.length < 64 && (i.params.desc = n.params.desc), 
                i.state = "running", i.sid = n.stageId, i.snm = n.stageName, t = i, this.request();
            }
        }, this.onEnd = function(n) {
            if (e(n)) {
                var a = {
                    state: "end"
                };
                if (("string" === u(n.userId) && n.userId) < 32 ? a.uid = n.userId : a.uid = "", 
                !u(n.event) && -1 !== L.join(",").indexOf(n.event + ",")) return void L.join(",");
                a.sid = n.stageId, a.snm = n.stageName, a.event = n.event, a.sdr = 0 !== i ? Date.now() - i : "", 
                a.params = {}, "object" === u(n.params) && "string" === u(n.params.desc) && n.params.desc.length < 64 && (a.params.desc = n.params.desc), 
                t = a, this.request();
            }
        }, this.request = function() {
            var e = g(c);
            t.ss = n, e.ct = t, f(e, "screen");
        };
    }(), wx.aldLevel = new function() {
        function e(e) {
            return !/^\d+(.\d+)*$/.test(e.levelId) || e.levelId.length > 32 || isNaN(Number(e.levelId)) ? (console.warn("levelId必须符合传参规则,请参考文档。"), 
            !1) : !("string" !== u(e.levelName) || e.levelName.length > 32) || (console.warn("levelName为必传字段,且长度小于32个字符,请参考文档"), 
            !1);
        }
        var t = "", n = "", i = 0;
        this.onInitLevel = function(i) {
            if (e(i)) {
                var a = {};
                "" == N ? (n = d(), wx.setStorageSync("ald_level_session", n)) : n = N, a.lid = i.levelId, 
                a.lnm = i.levelName, ("string" === u(i.userId) && i.userId) < 32 ? a.uid = i.userId : a.uid = "", 
                a.un = i.userName, a.state = "init", t = a, this.request();
            }
        }, this.onSetLevel = function(a) {
            if (e(a)) {
                var o = {};
                n = d(), wx.setStorageSync("ald_level_session", n), o.lid = a.levelId, o.lnm = a.levelName, 
                ("string" === u(a.userId) && a.userId) < 32 ? o.uid = a.userId : o.uid = "", o.un = a.userName, 
                o.state = "set", o.tmr = 0 !== E ? Date.now() - E : "", i = Date.now(), wx.setStorageSync("ald_level_time", i), 
                t = o, this.request();
            }
        }, this.onPaySuccess = function(n) {
            if (e(n)) {
                var i = {
                    params: {}
                };
                if ("object" !== u(n.params)) return void console.warn("关卡paySuccess状态中params为必传字段，且该字段需为Object类型，详情请参考文档。");
                "number" === u(n.params.amount) && toString(n.params.amount).length < 32 ? i.params.am = n.params.amount : i.params.am = 0, 
                "string" === u(n.params.desc) && n.params.desc.length < 64 && (i.params.desc = n.params.desc), 
                i.lid = n.levelId, i.lnm = n.levelName, ("string" === u(n.userId) && n.userId) < 32 ? i.uid = n.userId : i.uid = "", 
                i.un = n.userName, i.state = "paySuccess", t = i, this.request();
            }
        }, this.onPayFail = function(n) {
            if (e(n)) {
                var i = {
                    params: {}
                };
                if ("object" !== u(n.params)) return void console.warn("关卡payFile状态中params为必传字段，且该字段需为Object类型，详情请参考文档。");
                "number" === u(n.params.amount) && toString(n.params.amount).length < 32 ? i.params.am = n.params.amount : i.params.am = 0, 
                "string" === u(n.params.desc) && n.params.desc.length < 64 && (i.params.desc = n.params.desc), 
                i.lid = n.levelId, i.lnm = n.levelName, ("string" === u(n.userId) && n.userId) < 32 ? i.uid = n.userId : i.uid = "", 
                i.un = n.userName, i.state = "payFail", t = i, this.request();
            }
        }, this.request = function() {
            var e = g(c);
            t.ls = n, e.ct = t, f(e, "level");
        };
    }();
    for (var M = 0; M < O.length; M++) {
        !function(e, t) {
            Object.defineProperty(wx, e, {
                value: t,
                writable: !1,
                enumerable: !0,
                configurable: !0
            });
        }(O[M], B[O[M]]);
    }
    try {
        var H = wx.getSystemInfoSync();
        c.br = H.brand || "", c.md = H.model, c.pr = H.pixelRatio, c.sw = H.screenWidth, 
        c.sh = H.screenHeight, c.ww = H.windowWidth, c.wh = H.windowHeight, c.lang = H.language, 
        c.wv = H.version, c.sv = H.system, c.wvv = H.platform, c.fs = H.fontSizeSetting, 
        c.wsdk = H.SDKVersion, c.bh = H.benchmarkLevel || "", c.bt = H.battery || "", c.wf = H.wifiSignal || "", 
        c.lng = "", c.lat = "", c.nt = "", c.spd = "", c.ufo = "";
    } catch (e) {}
} : ald.init = function() {
    console.log("ald sdk not support on windows platform....");
};

var getLocation = AldConfig.getLocation, useOpen = AldConfig.useOpen, openKey = AldConfig.openKey, ald_qq = {};

window.qq ? ald_qq.init = function() {
    function t() {
        var e = "";
        try {
            e = qq.getStorageSync("aldstat_op");
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            e = qq.getStorageSync("aldstat_op");
        }
        if ("" === e) {
            if ("" === s) return "";
            try {
                _ = e = qq.getStorageSync(s), e && qq.setStorageSync("aldstat_op", e);
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                _ = e = qq.getStorageSync(s), e && qq.setStorageSync("aldstat_op", e);
            }
        }
        return e;
    }
    function i(e) {
        var t = {};
        return "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(e, n) {
            t["[object " + e + "]"] = e.toLowerCase();
        }), null == e ? e : "object" == _typeof2(e) || "function" == typeof e ? t[function(e) {
            return Object.prototype.toString.call(e);
        }.call(e)] || "object" : _typeof2(e);
    }
    function c() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }
        return e() + e() + e() + e() + e() + e() + e() + e();
    }
    function f(e, i) {
        function r() {
            return new Promise(function(t, n) {
                qq.request({
                    url: "https://" + a + ".aldwx.com/d.html",
                    data: e,
                    header: {
                        se: p || "",
                        op: _ || "",
                        img: b || ""
                    },
                    method: "GET",
                    fail: function fail() {
                        t("");
                    },
                    success: function success(e) {
                        t(200 == e.statusCode ? "" : "status error");
                    }
                });
            });
        }
        useOpen && t(), m++, e.as = y, e.at = S, e.rq_c = m, e.ifo = l, e.ak = AldConfig.qqAppKey, 
        e.uu = d, e.v = n, e.st = Date.now(), e.ev = i, e.wsr = JSON.stringify(A), e.te = o, 
        "" !== function(e) {
            if (void 0 === e || "" === e) return "";
            var t = {};
            for (var n in e) {
                "rawData" != n && "errMsg" != n && (t[n] = e[n]);
            }
            return t;
        }(e.ufo) && (e.ufo = e.ufo), e.ec = g, useOpen ? "" === _ ? L.push(r) : (qq.Queue.push(r), 
        L.concat()) : qq.Queue.push(r);
    }
    function h(e) {
        var t = {};
        for (var n in e) {
            t[n] = e[n];
        }
        return t;
    }
    function q(e) {
        for (var t = "", n = 0; n < e.length; n++) {
            e[n].length > t.length && (t = e[n]);
        }
        return t;
    }
    console.log("start to load ald qq sdk...");
    var n = "2.0.0", a = "qg.log", o = "qg";
    qq, o = "qg", wx = qq, "" === AldConfig.qqAppKey && console.error("请在配置文件(ald-qq-game-config.js)中填写您的AldConfig.qqAppKey"), 
    useOpen && console.warn("提示：开启了useOpen配置后，如果不上传用户opendId则不会上报数据。"), AldConfig.qqAppKey = AldConfig.qqAppKey.replace(/\s/g, "");
    var s = openKey;
    qq.request({
        url: "https://" + a + ".aldwx.com/config/app.json",
        method: "GET",
        success: function success(e) {
            200 === e.statusCode && (e.data.version != n && console.warn("您的SDK不是最新版本，请尽快升级！"), 
            e.data.warn && console.warn(e.data.warn), e.data.error && console.error(e.data.error));
        }
    });
    var l = "", d = function() {
        var e = "";
        try {
            e = qq.getStorageSync("aldstat_uuid"), qq.setStorageSync("ald_ifo", !0);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            e = "uuid_getstoragesync";
        }
        if (e) l = !1; else {
            e = c(), l = !0;
            try {
                qq.setStorageSync("aldstat_uuid", e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                qq.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
            }
        }
        return e;
    }(), u = {}, p = "", _ = t(), g = 0, m = "", A = qq.getLaunchOptionsSync(), v = Date.now(), S = "" + Date.now() + Math.floor(1e7 * Math.random()), y = "" + Date.now() + Math.floor(1e7 * Math.random()), I = 0, w = "", b = "", C = !0, P = !1, T = [ "aldSendEvent", "aldOnShareAppMessage", "aldShareAppMessage", "aldSendSession", "aldSendOpenid", "aldLevelEvent" ], O = [ "payStart", "paySuccess", "payFail", "die", "revive", "tools", "award" ], k = [ "complete", "fail" ];
    void 0 === qq.Queue && (qq.Queue = new function() {
        this.concurrency = 4, this.queue = [], this.tasks = [], this.activeCount = 0;
        var e = this;
        this.push = function(t) {
            this.tasks.push(new Promise(function(n, i) {
                var a = function a() {
                    e.activeCount++, t().then(function(e) {
                        n(e);
                    }).then(function() {
                        e.next();
                    });
                };
                e.activeCount < e.concurrency ? a() : e.queue.push(a);
            }));
        }, this.all = function() {
            return Promise.all(this.tasks);
        }, this.next = function() {
            e.activeCount--, e.queue.length > 0 && e.queue.shift()();
        };
    }(), qq.Queue.all());
    var L = new function() {
        this.request = [], this.push = function(e) {
            this.request.length >= 18 ? (this.request.shift(), this.request.push(e)) : this.request.push(e);
        }, this.concat = function() {
            this.request.map(function(e) {
                qq.Queue.push(e);
            }), this.request = [];
        };
    }();
    Promise.all([ new Promise(function(e, t) {
        qq.getSetting({
            success: function success(t) {
                t.authSetting["scope.userInfo"] ? qq.getUserInfo({
                    success: function success(t) {
                        b = q(t.userInfo.avatarUrl.split("/")), e(t);
                    },
                    fail: function fail() {
                        e("");
                    }
                }) : e("");
            },
            fail: function fail() {
                e("");
            }
        });
    }), new Promise(function(e, t) {
        qq.getNetworkType({
            success: function success(t) {
                e(t);
            },
            fail: function fail() {
                e("");
            }
        });
    }), new Promise(function(e, t) {
        getLocation ? qq.getLocation({
            success: function success(t) {
                e(t);
            },
            fail: function fail() {
                e("");
            }
        }) : qq.getSetting({
            success: function success(t) {
                t.authSetting["scope.userLocation"] ? (qq.getLocation({
                    success: function success(t) {
                        e(t);
                    },
                    fail: function fail() {
                        e("");
                    }
                }), e("")) : e("");
            },
            fail: function fail() {
                e("");
            }
        });
    }) ]).then(function(e) {
        "" !== e[2] ? (u.lat = e[2].latitude || "", u.lng = e[2].longitude || "", u.spd = e[2].speed || "") : (u.lat = "", 
        u.lng = "", u.spd = ""), "" !== e[1] ? u.nt = e[1].networkType || "" : u.nt = "";
        var t = h(u);
        "" !== e[0] && (t.ufo = e[0], w = e[0]), f(t, "init");
    }), qq.onShow(function(e) {
        if ((A = e).scene, e.scene, I = Date.now(), !C && !P) {
            S = "" + Date.now() + Math.floor(1e7 * Math.random()), l = !1;
            try {
                qq.setStorageSync("ald_ifo", !1);
            } catch (e) {}
        }
        C = !1, P = !1;
        var t = h(u), n = h(u);
        t.sm = I - v, void 0 !== e.query && void 0 !== e.query.ald_share_src && e.shareTicket && "1044" === e.scene ? (n.tp = "ald_share_click", 
        new Promise(function(e, t) {
            "1044" == A.scene ? qq.getShareInfo({
                shareTicket: A.shareTicket,
                success: function success(t) {
                    e(t);
                },
                fail: function fail() {
                    e("");
                }
            }) : e("");
        }).then(function(e) {
            n.ct = e, f(n, "event");
        })) : void 0 !== e.query && void 0 !== e.query.ald_share_src && (n.tp = "ald_share_click", 
        n.ct = "1", f(n, "event")), "" === w && qq.getSetting({
            success: function success(e) {
                e.authSetting["scope.userInfo"] && qq.getUserInfo({
                    success: function success(e) {
                        var t = h(u);
                        t.ufo = JSON.stringify(e), w = e, b = q(e.userInfo.avatarUrl.split("/")), f(t, "ald_ufo");
                    }
                });
            }
        }), f(t, "show");
    }), qq.onHide(function() {
        var e = h(u);
        e.dr = Date.now() - I, f(e, "hide");
    }), qq.onError(function(e) {
        var t = h(u);
        t.tp = "ald_error_message", t.ct = e, g++, f(t, "event");
    });
    var E = {
        aldSendEvent: function aldSendEvent(e, t) {
            var n = h(u);
            if ("" !== e && "string" == typeof e && e.length <= 255) {
                if (n.tp = e, "string" == typeof t && t.length <= 255) n.ct = String(t), f(n, "event"); else if ("object" == _typeof2(t)) {
                    if (JSON.stringify(t).length >= 255) return void console.error("自定义事件参数不能超过255个字符");
                    if (function(e) {
                        for (var t in e) {
                            if ("object" == _typeof2(e[t]) && null !== e[t]) return !0;
                        }
                        return !1;
                    }(t)) return void console.error("事件参数，参数内部只支持Number,String等类型，请参考接入文档");
                    for (var i in t) {
                        "number" == typeof t[i] && (t[i] = t[i] + "s##");
                    }
                    n.ct = JSON.stringify(t), f(n, "event");
                } else void 0 === t || "" === t ? f(n, "event") : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符");
            } else console.error("事件名称必须为String类型且不能超过255个字符");
        },
        aldOnShareAppMessage: function aldOnShareAppMessage(e) {
            qq.onShareAppMessage(function() {
                P = !0;
                var t = e(), n = "";
                n = void 0 !== A.query && void 0 !== A.query.ald_share_src ? void 0 !== t.query ? (A.query.ald_share_src.indexOf(d), 
                t.query + "&ald_share_src=" + A.query.ald_share_src + "," + d) : (A.query.ald_share_src.indexOf(d), 
                "ald_share_src=" + A.query.ald_share_src + "," + d) : void 0 !== t.query ? t.query + "&ald_share_src=" + d : "ald_share_src=" + d, 
                "undefined" != i(t.ald_desc) && (n += "&ald_desc=" + t.ald_desc), t.query = n;
                var a = h(u);
                return a.ct = t, a.ct.sho = 1, a.tp = "ald_share_chain", f(a, "event"), t;
            });
        },
        aldShareAppMessage: function aldShareAppMessage(e) {
            P = !0;
            var t = e, n = "";
            n = void 0 !== A.query && void 0 !== A.query.ald_share_src ? void 0 !== t.query ? (A.query.ald_share_src.indexOf(d), 
            t.query + "&ald_share_src=" + A.query.ald_share_src + "," + d) : (A.query.ald_share_src.indexOf(d), 
            "ald_share_src=" + A.query.ald_share_src + "," + d) : void 0 !== t.query ? t.query + "&ald_share_src=" + d : "ald_share_src=" + d;
            var a = h(u);
            "undefined" != i(t.ald_desc) && (n += "&ald_desc=" + t.ald_desc), t.query = n, a.ct = t, 
            a.tp = "ald_share_chain", f(a, "event"), qq.shareAppMessage(t);
        },
        aldSendSession: function aldSendSession(e) {
            if ("" !== e && e) {
                var t = h(u);
                t.tp = "session", t.ct = "session", p = e, "" === w ? qq.getSetting({
                    success: function success(e) {
                        e.authSetting["scope.userInfo"] ? qq.getUserInfo({
                            success: function success(e) {
                                t.ufo = e, f(t, "event");
                            }
                        }) : f(t, "event");
                    }
                }) : (t.ufo = w, "" !== w && (t.gid = ""), f(t, "event"));
            } else console.error("请传入从后台获取的session_key");
        },
        aldSendOpenid: function aldSendOpenid(e) {
            if (!e || 28 != e.length && 32 != e.length) console.error("openID不符合规则"); else {
                _ = e, qq.setStorageSync("aldstat_op", e);
                var t = h(u);
                t.tp = "openid", t.ct = "openid", f(t, "event");
            }
        }
    };
    qq.aldStage = new function() {
        function e(e) {
            return !/^\d+(.\d+)*$/.test(e.stageId) || e.stageId.length > 32 ? (console.warn("关卡stageId必须符合传参规则,请参考文档。"), 
            !1) : !("string" !== i(e.stageName) || e.stageName.length > 32) || (console.warn("关卡名称为必传字段,且长度小于32个字符,请参考文档"), 
            !1);
        }
        var t = "", n = "", a = 0;
        this.onStart = function(o) {
            if (e(o)) {
                var s = {};
                a = Date.now(), s.sid = o.stageId, s.snm = o.stageName, s.state = "start", n = c(), 
                t = s, ("string" === i(o.userId) && o.userId) < 32 && (this.uid = o.uid), this.request();
            }
        }, this.onRunning = function(n) {
            if (e(n)) {
                var a = {
                    params: {}
                };
                if (("string" === i(n.userId) && n.userId) < 32 && (this.uid = n.uid), O.join(",").indexOf(n.event + ","), 
                "string" !== i(n.event) || -1 === O.join(",").indexOf(n.event + ",")) return void console.warn("关卡running状态中仅支持" + O.join(",") + "事件类型，且为必传字段，详情请参考文档。");
                if (a.event = n.event, "object" !== i(n.params)) return void console.warn("关卡running状态中params为必传字段，且该字段需为Object类型，详情请参考文档。");
                if ("string" !== i(n.params.itemName) || n.params.itemName.length > 32) return void console.warn("道具/商品名称为必传字段，且长度小于32个字符，详情请参考文档");
                a.params.itnm = n.params.itemName, "string" === i(n.params.itemId) && n.params.itemId.length < 32 && (a.params.itid = n.params.itemId), 
                "number" === i(n.params.itemCount) && n.params.itemCount.length < 32 ? a.params.itco = n.params.itemCount : a.params.itco = 1, 
                -1 !== n.event.indexOf("pay") && ("number" === i(n.params.itemMoney) && n.params.itemMoney.length < 32 ? a.params.money = n.params.itemMoney : a.params.money = 0), 
                "string" === i(n.params.desc) && n.params.desc.length < 64 && (a.params.desc = n.params.desc), 
                a.state = "running", a.sid = n.stageId, a.snm = n.stageName, t = a, this.request();
            }
        }, this.onEnd = function(n) {
            if (e(n)) {
                var o = {
                    state: "end"
                };
                if (("string" === i(n.userId) && n.userId) < 32 && (this.uid = n.uid), !i(n.event) && -1 !== k.join(",").indexOf(n.event + ",")) return void k.join(",");
                o.sid = n.stageId, o.snm = n.stageName, o.event = n.event, o.sdr = 0 !== a ? Date.now() - a : "", 
                o.params = {}, "object" === i(n.params) && "string" === i(n.params.desc) && n.params.desc.length < 64 && (o.params.desc = n.params.desc), 
                t = o, this.request();
            }
        }, this.request = function() {
            var e = h(u);
            t.ss = n, e.ct = t, f(e, "screen");
        };
    }();
    for (var N = 0; N < T.length; N++) {
        !function(e, t) {
            Object.defineProperty(qq, e, {
                value: t,
                writable: !1,
                enumerable: !0,
                configurable: !0
            });
        }(T[N], E[T[N]]);
    }
    try {
        var D = qq.getSystemInfoSync();
        u.br = D.brand || "", u.md = D.model, u.pr = D.pixelRatio, u.sw = D.screenWidth, 
        u.sh = D.screenHeight, u.ww = D.windowWidth, u.wh = D.windowHeight, u.lang = D.language, 
        u.wv = D.version, u.sv = D.system, u.wvv = D.platform, u.fs = D.fontSizeSetting, 
        u.wsdk = D.SDKVersion, u.bh = D.benchmarkLevel || "", u.bt = D.battery || "", u.wf = D.wifiSignal || "", 
        u.lng = "", u.lat = "", u.nt = "", u.spd = "", u.ufo = "";
    } catch (e) {}
} : ald_qq.init = function() {
    console.log("ald qq sdk not support on windows platform....");
};

var uma_wx = {};

_isWXPlatform() ? uma_wx.init = function() {
    var l = "[UMENG] -- ", d = function() {
        var e = null, t = !1;
        function i() {
            this.setDebug = function(e) {
                t = e;
            }, this.d = function() {
                if (t) try {
                    "string" == typeof arguments[0] && (arguments[0] = l + arguments[0]), console.debug.apply(console, arguments);
                } catch (e) {}
            }, this.i = function() {
                try {
                    if (t) try {
                        "string" == typeof arguments[0] && (arguments[0] = l + arguments[0]), console.info.apply(console, arguments);
                    } catch (e) {}
                } catch (e) {}
            }, this.e = function() {
                if (t) try {
                    "string" == typeof arguments[0] && (arguments[0] = l + arguments[0]), console.error.apply(console, arguments);
                } catch (e) {}
            }, this.w = function() {
                if (t) try {
                    "string" == typeof arguments[0] && (arguments[0] = l + arguments[0]), console.warn.apply(console, arguments);
                } catch (e) {}
            }, this.v = function() {
                if (t) try {
                    "string" == typeof arguments[0] && (arguments[0] = l + arguments[0]), console.log.apply(console, arguments);
                } catch (e) {}
            }, this.t = function() {
                if (t) try {
                    console.table.apply(console, arguments);
                } catch (e) {}
            }, this.tip = function() {
                try {
                    "string" == typeof arguments[0] && (arguments[0] = l + arguments[0]), console.log.apply(console, arguments);
                } catch (e) {}
            }, this.tip_w = function(e) {
                try {
                    console.log("%c [UMENG] -- " + e, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;");
                } catch (e) {}
            }, this.err = function() {
                try {
                    "string" == typeof arguments[0] && (arguments[0] = l + arguments[0]), console.error.apply(console, arguments);
                } catch (e) {}
            }, this.repeat = function(e) {
                for (var t = e; t.length < 86; ) {
                    t += e;
                }
                return t;
            };
        }
        return function() {
            return null === e && (e = new i()), e;
        };
    }(), h = function() {
        var e = null;
        function t() {
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
        }
        return function() {
            return e || (e = new t()), e;
        };
    }();
    function i() {}
    i.prototype = {
        on: function on(e, t, n) {
            var i = this.e || (this.e = {});
            return (i[e] || (i[e] = [])).push({
                fn: t,
                ctx: n
            }), this;
        },
        once: function once(e, t, n) {
            var i = this;
            function r() {
                i.off(e, r), t.apply(n, arguments);
            }
            return r._ = t, this.on(e, r, n);
        },
        emit: function emit(e) {
            for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, a = n.length; i < a; i++) {
                n[i].fn.apply(n[i].ctx, t);
            }
            return this;
        },
        off: function off(e, t) {
            var n = this.e || (this.e = {}), i = n[e], a = [];
            if (i && t) for (var o = 0, s = i.length; o < s; o++) {
                i[o].fn !== t && i[o].fn._ !== t && a.push(i[o]);
            }
            return a.length ? n[e] = a : delete n[e], this;
        }
    };
    var u = new i();
    u.messageType = {
        CONFIG_LOADED: 0,
        UMA_LIB_INITED: 1
    };
    var _p = function p(e, t) {
        return (_p = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) {
                t.hasOwnProperty(n) && (e[n] = t[n]);
            }
        })(e, t);
    };
    function s(e, t) {
        function n() {
            this.constructor = e;
        }
        _p(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
        new n());
    }
    var _, g = new (function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return s(n, e), n.prototype.getSdkType = function() {
            return "wxgamemp";
        }, n.prototype.getUserInfo = function(e) {
            var t = {
                fail: function fail() {
                    e && e();
                },
                success: function success(t) {
                    if (t && t.userInfo) {
                        var n = t.userInfo;
                        e && e({
                            avatar: n.avatarUrl,
                            nickName: n.nickName,
                            gender: n.gender,
                            country: n.country,
                            province: n.province,
                            city: n.city,
                            language: n.language
                        });
                    }
                }
            };
            try {
                wx.getSetting({
                    success: function success(e) {
                        e.authSetting["scope.userInfo"] && wx.getUserInfo(t);
                    },
                    fail: function fail() {
                        e();
                    }
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                d.e("getUserInfo error", e);
            }
        }, n;
    }(function() {
        function e() {}
        return e.prototype.setStorage = function(e, t, n) {
            wx.setStorage({
                key: e,
                data: t,
                success: function success() {
                    "function" == typeof n && n(!0);
                },
                fail: function fail() {
                    "function" == typeof n && n(!1);
                }
            });
        }, e.prototype.getStorage = function(e, t) {
            wx.getStorage({
                key: e,
                success: function success(e) {
                    "function" == typeof t && t(e.data);
                },
                fail: function fail(n) {
                    d().w(e + ": " + n.errMsg), "function" == typeof t && t();
                }
            });
        }, e.prototype.removeStorage = function(e, t) {
            wx.removeStorage({
                key: e,
                success: function success() {
                    "function" == typeof t && t(!0);
                },
                fail: function fail() {
                    "function" == typeof t && t(!1);
                }
            });
        }, e.prototype.getSystemInfo = function(e) {
            wx.getSystemInfo({
                success: function success(t) {
                    t.safeArea = t.safeArea || {};
                    var n = "";
                    t.host && "string" == typeof t.host.env && (n = t.host.env);
                    var i = {
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
                        resolution: "",
                        theme: t.theme,
                        benchmarkLevel: t.benchmarkLevel,
                        safeArea: {
                            width: t.safeArea.width,
                            height: t.safeArea.height,
                            top: t.safeArea.top,
                            left: t.safeArea.left,
                            bottom: t.safeArea.bottom,
                            right: t.safeArea.right
                        },
                        statusBarHeight: t.statusBarHeight,
                        host: n
                    }, a = t.system.split(" ");
                    Array.isArray(a) && (i.OS = a[0]);
                    var o = Math.round(t.screenWidth * t.pixelRatio), s = Math.round(t.screenHeight * t.pixelRatio);
                    i.resolution = o > s ? o + "*" + s : s + "*" + o, "function" == typeof e && e(i);
                },
                fail: function fail() {
                    "function" == typeof e && e();
                }
            });
        }, e.prototype.getDeviceInfo = function(e) {
            "function" == typeof e && e("");
        }, e.prototype.checkNetworkAvailable = function(e) {
            wx.getNetworkType({
                success: function success(t) {
                    "function" == typeof e && e(t && "none" !== t.networkType);
                },
                fail: function fail() {
                    "function" == typeof e && e(!1);
                }
            });
        }, e.prototype.getNetworkInfo = function(e) {
            wx.getNetworkType({
                success: function success(t) {
                    "function" == typeof e && e({
                        networkAvailable: "none" !== t.networkType,
                        networkType: t.networkType
                    });
                },
                fail: function fail() {
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
            var t = e.success, n = e.fail, i = !1, a = null;
            e.success = function(e) {
                i || (a && clearTimeout(a), "function" == typeof t && t(e));
            }, e.fail = function() {
                i || (a && clearTimeout(a), "function" == typeof n && n(!1));
            }, wx.request(e), a = setTimeout(function() {
                a && clearTimeout(a), i = !0, "function" == typeof n && n(i);
            }, e.timeout || 5e3);
        }, e.prototype.getSdkType = function() {
            return "wxmp";
        }, e.prototype.getPlatform = function() {
            return "wx";
        }, e.prototype.getUserInfo = function(e) {
            e();
        }, e.prototype.getAppInfoSync = function() {
            if (wx.getAccountInfoSync) {
                var e = wx.getAccountInfoSync(), t = e && e.miniProgram ? e.miniProgram : {};
                return {
                    appId: t.appId,
                    appEnv: t.envVersion,
                    appVersion: t.version
                };
            }
            return {};
        }, e.prototype.onShareAppMessage = function(e) {
            wx.onShareAppMessage(e);
        }, e.prototype.shareAppMessage = function(e) {
            wx.shareAppMessage(e);
        }, e.prototype.getLaunchOptionsSync = function() {
            var e = null;
            if (e) return e;
            if (!wx.getLaunchOptionsSync) return {};
            try {
                e = wx.getLaunchOptionsSync();
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                e = null;
            }
            return e || {};
        }, e;
    }()))(), f = {
        SESSION_INTERVAL: 3e4,
        LOG_URL: "/wxm_logs",
        GET_OPENID_URL: "/uminiprogram_logs/wx/getuut",
        USERINFO_URL: "/uminiprogram_logs/comm/uif",
        ENDPOINT: "https://umini.shujupie.com",
        ENDPOINTB: "https://ulogs.umeng.com",
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
        IMPL_VERSION: "2.7.1",
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
        IS_ALIYUN: !1
    }, m = {
        isNumber: function isNumber(e) {
            return !Number.isNaN(parseInt(e, 10));
        },
        compareVersion: function compareVersion(e, t) {
            for (var n = String(e).split("."), i = String(t).split("."), a = 0; a < Math.max(n.length, i.length); a++) {
                var o = parseInt(n[a] || 0, 10), s = parseInt(i[a] || 0, 10);
                if (o > s) return 1;
                if (o < s) return -1;
            }
            return 0;
        },
        getRandomStr: function getRandomStr(e) {
            for (var t = "", n = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], i = 0; i < Number(e); i++) {
                t += n[Math.round(Math.random() * (n.length - 1))];
            }
            return t;
        },
        clone: function clone(e) {
            return JSON.parse(JSON.stringify(e));
        },
        startsWith: function startsWith(e, t) {
            return !(!e || !t || 0 === t.length || t.length > e.length) && e.substr(0, t.length) === t;
        },
        endsWith: function endsWith(e, t) {
            return !(!t || 0 === e.length || t.length > e.length) && e.substring(e.length - t.length) === t;
        },
        assign: function assign(e) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (i) for (var a in i) {
                    Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
                }
            }
            return t;
        },
        deepEqual: function e(t, n) {
            if (t === n) return !0;
            if (t && "object" == _typeof2(t) && n && "object" == _typeof2(n)) {
                if (Object.keys(t).length !== Object.keys(n).length) return !1;
                for (var i in t) {
                    if (Object.prototype.hasOwnProperty.call(n, i)) return !1;
                    if (!e(t[i], n[i])) return !1;
                }
                return !0;
            }
            return !1;
        },
        trimStart: function trimStart(e, t) {
            if (!e) return "";
            if ("string" == typeof t && t.length) {
                var n = new RegExp("^" + t + "*");
                e = e.replace(n, "");
            } else e = e.replace(/^s*/, "");
            return e;
        },
        trimEnd: function trimEnd(e, t) {
            if (!e) return "";
            var n, i;
            if ("string" == typeof t && t.length) {
                for (n = new RegExp(t), i = e.length; n.test(e.charAt(i)); ) {
                    i -= 1;
                }
                return e.slice(0, i + 1);
            }
            for (n = /s/, i = e.length - 1; n.test(e.charAt(i)); ) {
                i -= 1;
            }
            return e.slice(0, i + 1);
        },
        isFunction: function isFunction(e) {
            return "function" == typeof e;
        }
    }, A = function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return s(n, e), n.prototype.getOpenIdAsync = function(e, t) {
            var n = this;
            wx.login({
                success: function success(i) {
                    i.code ? g.request({
                        url: f.ENDPOINT + f.GET_OPENID_URL,
                        method: "GET",
                        data: {
                            key: e,
                            code: i.code
                        },
                        success: function success(e) {
                            if (e && 200 === e.statusCode && e.data && e.data.data) {
                                var i = e.data.data;
                                return n.setOpenid(i.oid), n.setUnionid(i.uid), t && t(!0);
                            }
                            t && t();
                        },
                        fail: function fail(e) {
                            d().v("wx request failed...", e), t && t();
                        }
                    }) : t && t();
                },
                fail: function fail() {
                    t && t();
                }
            });
        }, n;
    }(function(e) {
        function n() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._openid = "", t._unionid = "", t._useOpenid = !1, t;
        }
        return s(n, e), n.prototype.initID = function(e) {
            var t = this;
            t._idType = t._useOpenid ? "openid" : "uuid", d().v("id type: ", t._idType), g.getStorage(f.UNIONID, function(e) {
                t._unionid = e;
            }), this._useOpenid ? g.getStorage(f.OPENID, function(n) {
                t._openid = n, e && e();
            }) : e && e();
        }, n.prototype.setUseOpenid = function(e) {
            this._useOpenid = e;
        }, n.prototype.setOpenid = function(e) {
            !this._openid && e && (this._openid = e, g.setStorage(f.OPENID, e));
        }, n.prototype.setUnionid = function(e) {
            !this._unionid && e && (this._unionid = e, g.setStorage(f.UNIONID, e));
        }, n.prototype.getIdTracking = function() {
            var t = e.prototype.getIdTracking.call(this);
            return this._openid && (t.openid = this._openid), this._unionid && (t.unionid = this._unionid), 
            this._userid && (t.userid = this._userid), t;
        }, n.prototype.getId = function() {
            return this._useOpenid ? this._openid : this._uuid;
        }, n;
    }(function() {
        function e() {
            this._uuid = "", this._userid = "", this._provider = "", this._idType = "";
        }
        return e.prototype.createUUID = function() {
            return m.getRandomStr(10) + Date.now() + m.getRandomStr(7) + f.UUID_SUFFIX;
        }, e.prototype.initUUID = function(e) {
            var t = this;
            g.getStorage(f.UUID, function(n) {
                n ? t._uuid = n : (t._uuid = t.createUUID(), g.setStorage(f.UUID, t._uuid)), e && e(n);
            });
        }, e.prototype.initUserid = function() {
            var e = this;
            g.getStorage(f.USERID, function(t) {
                !e._userid && t && (e._userid = t, d().v("userId is ", t));
            }), g.getStorage(f.PROVIDER, function(t) {
                !e._provider && t && (e._provider = t, d().v("provider is ", t));
            });
        }, e.prototype.init = function(e) {
            var t = this;
            t.initUUID(function() {
                t.initUserid(), t.initID(e);
            });
        }, e.prototype.setUserid = function(e, t) {
            !this._userid && e && (this._userid = e, this._provider = t, g.setStorage(f.USERID, e), 
            g.setStorage(f.PROVIDER, t));
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
    }())), v = (_ = null, function() {
        return _ || (_ = new A()), _;
    }), S = function() {
        var e = null;
        function t() {
            var e = !1, t = null, n = [];
            this.addPageStart = function(n) {
                n && !e && (t = {
                    ts: Date.now(),
                    path: n,
                    page_name: n
                }, e = !0);
            }, this.addPageEnd = function(i) {
                if (e && i && t && i === t.page_name) {
                    var a = Date.now() - t.ts;
                    t.duration = Math.abs(a), n.push(t), t = null, e = !1;
                }
            }, this.get = function() {
                return n;
            }, this.getCurrentPage = function() {
                return t;
            }, this.clear = function() {
                n.length = 0;
            };
        }
        return function() {
            return e || (e = new t()), e;
        };
    }(), y = {}, I = function() {
        var e = null, t = [], n = "";
        function r() {
            return {
                add: function add(e, i) {
                    d().v("share origin: %o", e);
                    var a = {
                        title: e && e.title,
                        path: e && e.path && e.path.split("?")[0],
                        _um_sts: Date.now()
                    };
                    a.path && a.path.length > 1 && m.startsWith(a.path, "/") && (a.path = m.trimStart(a.path, "/"));
                    var o = e.path || "", s = v().getId();
                    if (s) {
                        var r = n.split(","), l = (r = r.filter(function(e) {
                            return e.length > 0;
                        })).indexOf(s);
                        l >= 0 && (r = r.slice(0, l)), r.length < 3 && r.push(s);
                        var h = r.join(",");
                        -1 !== o.indexOf("?") ? o += "&_um_ssrc=" + h : o += "?_um_ssrc=" + h;
                        var c = Date.now();
                        if (o += "&_um_sts=" + c, i) {
                            var u = function(e) {
                                var t = [];
                                for (var n in e) {
                                    "_um_ssrc" !== n && "_um_sts" !== n && t.push(n + "=" + e[n]);
                                }
                                return t.join("&");
                            }(y), p = u ? u + "&_um_ssrc=" + h + "&_um_sts=" + c : "_um_ssrc=" + h + "&_um_sts=" + c;
                            e.query = e.query ? e.query + "&_um_ssrc=" + h + "&_um_sts=" + c : p;
                        } else e.path = o;
                        a._um_ssrc = h, a._um_sts = c;
                    }
                    return t.push(a), d().v("share: %o", e), e;
                },
                setShareSource: function setShareSource(e) {
                    n = e;
                },
                clear: function clear() {
                    t.length = 0;
                },
                get: function get() {
                    return t;
                }
            };
        }
        return function() {
            return e || (e = new r()), e;
        };
    }(), w = function w(e) {
        if (e) try {
            return JSON.stringify(e);
        } catch (e) {}
        return "";
    }, b = function b(e) {
        if (e) try {
            return JSON.parse(e);
        } catch (e) {}
        return null;
    }, T = function() {
        var e = null, t = "", n = null, i = !1;
        function o() {
            this.load = function(e) {
                n ? (g.removeStorage(t), e()) : (t = "um_cache_" + h().appKey(), g.getStorage(t, function(a) {
                    n = b(a) || {}, i = !0, g.removeStorage(t), e();
                }));
            }, this.save = function() {
                n && g.setStorage(t, w(n));
            }, this.set = function(e, t) {
                n && (n[e] = t);
            }, this.get = function(e) {
                return (n || {})[e];
            }, this.remove = function(e) {
                n && n[e] && delete n[e];
            }, this.getAll = function() {
                return n;
            }, this.clear = function() {
                n = null;
            }, this.has = function(e) {
                return !!this.get(e);
            }, this.isLoaded = function() {
                return i;
            };
        }
        return function() {
            return e || (e = new o()), e;
        };
    }(), O = function() {
        var e, t, n = [], i = [];
        function s(e, n) {
            var i = (e = e || {})[t];
            return Array.isArray(i) && i.length ? e[t] = i.concat(n) : e[t] = [].concat(n), 
            e;
        }
        return function() {
            return e || (e = {
                addEvent: function addEvent(e) {
                    t ? (n.unshift(e), n.length > 1 && (!function() {
                        if (n.length) {
                            var e = T().get("ekvs");
                            (function(e) {
                                var t = 0;
                                for (var n in e) {
                                    Array.isArray(e[n]) && (t += e[n].length);
                                }
                                return t;
                            })(e) + n.length <= 1e4 && (e = s(e, n), T().set("ekvs", e));
                        }
                    }(), n.length = 0)) : (d().w("session id is null: ", t), i.unshift(e));
                },
                setSessionId: function setSessionId(e) {
                    if (t = e, d().v("setSessionId: ", t), Array.isArray(i) && i.length && t) {
                        for (var n = 0; n < i.length; n++) {
                            this.addEvent(i[n]);
                        }
                        i.length = 0;
                    }
                },
                getEkvs: function getEkvs() {
                    var e = T().get("ekvs");
                    return n && n.length && (e = s(e, n)), e;
                },
                clear: function clear() {
                    T().remove("ekvs"), n.length = 0;
                }
            }), e;
        };
    }(), k = "2g", E = "3g", N = "4g", D = "half_session", B = "close_session", H = "ekv", U = [ "access", "access_subtype" ], x = function() {
        var e = null;
        function t() {
            var e = !1, t = {};
            return {
                init: function init() {
                    !function(e) {
                        var n = T().get(f.IMPRINT);
                        n && (t.imprint = n), t.device_type = "Phone", t.sdk_version = f.IMPL_VERSION, t.appkey = h().appKey(), 
                        g.getDeviceInfo(function(e) {
                            t.device_info = e || "";
                        });
                        var i = g.getAppInfoSync();
                        t.appid = i.appId, t.app_env = i.appEnv, t.app_version = i.appVersion, g.getSystemInfo(function(n) {
                            g.getNetworkInfo(function(i) {
                                var a = function(e, t) {
                                    var n = {};
                                    (e = e || {}).safeArea = e.safeArea || {};
                                    var i = (t = t || {}).networkType;
                                    "none" === i && (i = "unknown");
                                    var a = e.model || "", o = e.platform || "", s = e.brand || "", r = s.toLowerCase();
                                    switch (n.sdk_type = g.getSdkType(), n.platform = g.getPlatform(), n.platform_sdk_version = e.platformSDKVersion, 
                                    n.platform_version = e.platformVersion, n.resolution = e.resolution, n.pixel_ratio = e.pixelRatio, 
                                    n.os = o, n.font_size_setting = e.fontSizeSetting, n.device_model = a, n.device_brand = s, 
                                    n.device_manufacturer = r, n.device_manuid = a, n.device_name = a, n.os_version = e.OSVersion, 
                                    n.language = e.language, n.theme = e.theme, n.benchmark_level = e.benchmarkLevel, 
                                    n.status_bar_height = e.statusBarHeight, n.safe_area_top = e.safeArea.top, n.safe_area_left = e.safeArea.left, 
                                    n.safe_area_right = e.safeArea.right, n.safe_area_bottom = e.safeArea.bottom, n.safe_area_height = e.safeArea.height, 
                                    n.safe_area_width = e.safeArea.width, n.storage = e.storage, n.screen_width = e.screenWidth, 
                                    n.screen_height = e.screenHeight, n.host = e.host, i = i ? i.toLowerCase() : "") {
                                      case N:
                                        n.access_subtype = "LTE", n.access = "4G";
                                        break;

                                      case E:
                                        n.access_subtype = "CDMA", n.access = "3G";
                                        break;

                                      case k:
                                        n.access_subtype = "GRPS", n.access = "2G";
                                        break;

                                      default:
                                        n.access = i, delete n.access_subtype;
                                    }
                                    return n;
                                }(n, i);
                                m.assign(t, a), e && e();
                            });
                        });
                    }(function() {
                        e = !0;
                    });
                },
                isLoaded: function isLoaded() {
                    return e;
                },
                get: function get() {
                    return t;
                },
                getRealtimeFields: function getRealtimeFields() {
                    var e = {};
                    return U.forEach(function(n) {
                        e[n] = t[n];
                    }), e;
                },
                setIdTracking: function setIdTracking(e) {
                    this.setItem("id_tracking", e);
                },
                setIdType: function setIdType(e) {
                    this.setItem("id_type", e);
                },
                setAppVersion: function setAppVersion(e) {
                    this.setItem("app_version", e);
                },
                setSuperProperty: function setSuperProperty(e) {
                    t.sp || (t.sp = {}), t.sp.isv = e;
                },
                getSuperProperty: function getSuperProperty() {
                    return t && t.sp ? t.sp.isv : "";
                },
                setItem: function setItem(e, n) {
                    t[e] = n;
                },
                getItem: function getItem(e) {
                    return t[e];
                }
            };
        }
        return {
            instance: function instance() {
                return e || (e = t()), e;
            }
        };
    }(), F = function() {
        var e = null, t = null, n = null;
        return function() {
            return e || (e = {
                resume: function resume(e) {
                    var i = !1;
                    n || (n = T().get(f.CURRENT_SESSION));
                    var a = new Date();
                    return t = a.getTime(), !n || !n.end_time || t - n.end_time > f.SESSION_INTERVAL ? (i = !0, 
                    function(e) {
                        try {
                            var t = (n || {}).options || {}, i = m.assign({}, function(e) {
                                var t = {};
                                for (var n in e) {
                                    0 === n.indexOf("_um_") && (t[n] = e[n]);
                                }
                                return d().v("query: ", e), d().v("_um_params: ", t), t;
                            }(e.query));
                            i.path = e.path || t.path, i.scene = e.scene ? g.getPlatform() + "_" + e.scene : t.scene;
                            var a = e.referrerInfo;
                            a && (i.referrerAppId = a.appId), d().v("session options: ", i);
                            var o = i[f.UM_SSRC];
                            o && I().setShareSource(o);
                            var s = Date.now();
                            n = {
                                id: m.getRandomStr(10) + s,
                                start_time: s,
                                options: i
                            };
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            d().e("生成新session失败: ", e);
                        }
                    }(e), d().v("开始新的session(%s): ", n.id, n)) : d().v("延续上一次session(%s): %s ", n.id, a.toLocaleTimeString(), n), 
                    i;
                },
                pause: function pause() {
                    !function() {
                        if (n) {
                            var e = new Date();
                            n.end_time = e.getTime(), "number" != typeof n.duration && (n.duration = 0), n.duration = n.end_time - t, 
                            T().set(f.CURRENT_SESSION, n), d().v("退出会话(%s): %s ", n.id, e.toLocaleTimeString(), n);
                        }
                    }();
                },
                getCurrentSessionId: function getCurrentSessionId() {
                    return (n || {}).id;
                },
                getCurrentSession: function getCurrentSession() {
                    return n;
                },
                cloneCurrentSession: function cloneCurrentSession() {
                    return m.clone(n);
                }
            }), e;
        };
    }();
    var R = {
        sessions: "sn",
        ekvs: "e",
        active_user: "active_user"
    }, V = {
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
        testToken: "ttn",
        theme: "t5",
        benchmark_level: "bml",
        screen_width: "sw",
        screen_height: "sh",
        status_bar_height: "sbh",
        safe_area_top: "sat",
        safe_area_left: "sal",
        safe_area_right: "sar",
        safe_area_bottom: "sab",
        safe_area_height: "sah",
        safe_area_width: "saw",
        pixel_ratio: "pr",
        storage: "s7",
        host: "hs"
    }, j = {
        uuid: "ud",
        unionid: "und",
        openid: "od",
        anonymousid: "nd",
        alipay_id: "ad",
        device_id: "dd",
        userid: "puid"
    };
    function P(e, t) {
        var n = C(e, t);
        return e && e.id_tracking && (n[t.id_tracking || "id_tracking"] = C(e.id_tracking, j)), 
        n;
    }
    function C(e, t) {
        var n = {};
        for (var i in e) {
            t[i] ? n[t[i]] = e[i] : n[i] = e[i];
        }
        return n;
    }
    function L(e, t) {
        var n = {};
        if (e) for (var i in e) {
            e[i] && (n[t[i]] = e[i]);
        }
        return n;
    }
    var K = "";
    function M() {
        return K;
    }
    var G = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", W = function(e) {
        for (var t = {}, n = 0, i = e.length; n < i; n++) {
            t[e.charAt(n)] = n;
        }
        return t;
    }(G), q = String.fromCharCode, z = function z(e) {
        if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? q(192 | t >>> 6) + q(128 | 63 & t) : q(224 | t >>> 12 & 15) + q(128 | t >>> 6 & 63) + q(128 | 63 & t);
        var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
        return q(240 | t >>> 18 & 7) + q(128 | t >>> 12 & 63) + q(128 | t >>> 6 & 63) + q(128 | 63 & t);
    }, Q = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, X = function X(e) {
        var t = [ 0, 2, 1 ][e.length % 3], n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
        return [ G.charAt(n >>> 18), G.charAt(n >>> 12 & 63), t >= 2 ? "=" : G.charAt(n >>> 6 & 63), t >= 1 ? "=" : G.charAt(63 & n) ].join("");
    }, Y = function Y(e) {
        return function(e) {
            return e.replace(Q, z);
        }(e).replace(/[\s\S]{1,3}/g, X);
    }, J = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), ee = function ee(e) {
        switch (e.length) {
          case 4:
            var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
            return q(55296 + (t >>> 10)) + q(56320 + (1023 & t));

          case 3:
            return q((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

          default:
            return q((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
        }
    }, te = function te(e) {
        var t = e.length, n = t % 4, i = (t > 0 ? W[e.charAt(0)] << 18 : 0) | (t > 1 ? W[e.charAt(1)] << 12 : 0) | (t > 2 ? W[e.charAt(2)] << 6 : 0) | (t > 3 ? W[e.charAt(3)] : 0), a = [ q(i >>> 16), q(i >>> 8 & 255), q(255 & i) ];
        return a.length -= [ 0, 0, 2, 1 ][n], a.join("");
    }, se = function se(e, t) {
        return t ? Y(String(e)).replace(/[+\/]/g, function(e) {
            return "+" == e ? "-" : "_";
        }).replace(/=/g, "") : Y(String(e));
    }, re = function re(e) {
        return function(e) {
            return function(e) {
                return e.replace(/[\s\S]{1,4}/g, te);
            }(e).replace(J, ee);
        }(String(e).replace(/[-_]/g, function(e) {
            return "-" == e ? "+" : "/";
        }).replace(/[^A-Za-z0-9\+\/]/g, ""));
    }, le = new function() {
        var e = "", t = this;
        this.set = function(t) {
            e = t;
        }, this.get = function() {
            return e;
        }, this.getImpObj = function() {
            return b(re(e));
        }, this.getItem = function(e) {
            var n = t.getImpObj();
            return n && n[e] || "";
        }, this.load = function() {
            e = T().get(f.IMPRINT);
        }, this.save = function() {
            e && T().set(f.IMPRINT, e);
        };
    }();
    function Z(e, t, n, i) {
        x.instance().setIdType(v().getIdType()), x.instance().setIdTracking(v().getIdTracking());
        var a = v().getUserId();
        a && e.analytics && (e.analytics.active_user = {
            puid: a,
            provider: v().getProvider()
        });
        var o = m.clone(x.instance().get());
        e.header = m.assign(o, e.header, {
            ts: Date.now(),
            testToken: M(),
            traceId: m.getRandomStr(10) + Date.now() + m.getRandomStr(9)
        });
        var s, r = function(e) {
            return {
                h: P(e.header, V),
                a: L(e.analytics, R)
            };
        }(e), l = w(r), h = {
            url: f.ENDPOINT + f.LOG_URL,
            method: "POST",
            data: se(l),
            success: function success(i) {
                var a = i.code || i.status || i.statusCode;
                200 === a || 413 === a ? (d().i("数据发送成功: ", e, l), function(e) {
                    e && (x.instance().setItem(f.IMPRINT, e), le.set(e), le.save(), d().v("imprint: ", le.getImpObj()), 
                    le.getItem("ttn_invalid") && (K = ""));
                }((i.data || {}).imprint), "function" == typeof t && t(i)) : (d().w("数据发送失败: ", l), 
                "function" == typeof n && n());
            },
            fail: function fail(e) {
                d().w("超时: ", l), "function" == typeof n && n();
            },
            complete: function complete() {
                "function" == typeof i && i();
            }
        };
        g.request(m.assign(h, {
            header: {
                "Content-Type": s = g.getSdkType() + "/json",
                "Msg-Type": s
            }
        }));
    }
    function $(e) {
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
    }
    var de = function() {
        var e = null, t = !1, n = [], i = new $(50);
        function o(e, t, n) {
            if (x.instance().isLoaded()) {
                t = t || {};
                var a = function(e) {
                    var t = null;
                    switch (e) {
                      case D:
                        t = function() {
                            var e = null, t = F().cloneCurrentSession();
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

                      case B:
                        t = function() {
                            var e = null, t = {}, n = F().cloneCurrentSession();
                            if (n) {
                                var i = S().get(), a = I().get();
                                Array.isArray(i) && i.length && (n.pages = m.clone(i)), Array.isArray(a) && a.length && (n.shares = m.clone(a)), 
                                S().clear(), I().clear(), t.sessions = [ n ];
                            }
                            var o = O().getEkvs();
                            return o && (t.ekvs = m.clone(o), O().clear()), (t.sessions || t.ekvs) && (e = {
                                analytics: t
                            }), e;
                        }();
                        break;

                      case H:
                        t = function() {
                            var e = null, t = O().getEkvs();
                            return t && (e = {
                                analytics: {
                                    ekvs: m.clone(t)
                                }
                            }, O().clear()), e;
                        }();
                    }
                    return t;
                }(e);
                if (a) {
                    var s = x.instance().getRealtimeFields();
                    a.header = m.assign({}, a.header, s), a.noCache = t.noCache, i.enqueue(a);
                }
                "function" == typeof n && n();
            } else setTimeout(function() {
                o(e, t, n);
            }, 100);
        }
        function a(e) {
            v().getId() ? t ? d().i("队列正在发送中") : (t = !0, function s(e) {
                var t = i.front();
                t ? Z(t, function() {
                    i.dequeue(), s(e);
                }, function() {
                    var t = i.dequeue();
                    t && !t.noCache && n.push(t), s(e);
                }) : (n.forEach(function(e) {
                    i.enqueue(e);
                }), n.length = 0, e());
            }(function() {
                t = !1, "function" == typeof e && e();
            })) : (d().i("获取id标识失败，暂缓发送"), "function" == typeof e && e());
        }
        function c() {
            this.send = function(e, t, n) {
                e ? this.add(e, t, function() {
                    a(n);
                }) : a(n);
            }, this.add = function(e, t, n) {
                o(e, t, n);
            }, this.load = function() {
                var e = T().get(f.REQUESTS);
                e && e.length && e.forEach(function(e) {
                    i.enqueue(e);
                }), T().remove(f.REQUESTS);
            }, this.save = function() {
                T().set(f.REQUESTS, m.clone(i.items())), i.clear();
            };
        }
        return function() {
            return e || (e = new c()), e;
        };
    }(), he = function() {
        var t = null, n = null;
        function r() {
            function e(e) {
                if (e && "object" == _typeof2(e)) {
                    var t = T().get(f.USER_INFO);
                    return t && m.deepEqual(e, t) || function(e, t) {
                        var n = h().appKey(), i = g.getSdkType(), a = v().getId(), o = v().getIdType();
                        if (n && i && a && o) {
                            var s = {
                                ak: h().appKey(),
                                sdt: g.getSdkType(),
                                uin: e.nickName,
                                uia: e.avatar || e.avatarUrl,
                                uig: e.gender,
                                uit: e.country,
                                uip: e.province,
                                uic: e.city,
                                uil: e.language,
                                id: v().getId(),
                                it: v().getIdType(),
                                age: e.age,
                                cln: e.constellation
                            }, r = JSON.stringify(s);
                            r = se(r), g.request({
                                url: f.ENDPOINT + f.USERINFO_URL,
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                data: "ui=" + r,
                                success: function success(n) {
                                    d().v("用户信息上传成功: ", e), t && t(n && n.data && 200 === n.data.code);
                                },
                                fail: function fail() {
                                    d().e("用户信息上传失败: ", e), t && t(!1);
                                }
                            });
                        }
                    }(e, function(t) {
                        t && T().set(f.USER_INFO, e);
                    }), !0;
                }
                return !1;
            }
            this.setUserInfo = function(e) {
                n = e;
            }, this.update = function() {
                e(n) || g.getUserInfo(function(t) {
                    e(t);
                });
            };
        }
        return function() {
            return t || (t = new r()), t;
        };
    }();
    function ne(e, t) {
        this.id = e, this.ts = Date.now();
        var n = _typeof2(t);
        if ("string" === n && t) this[e] = t; else if ("object" === n) for (var i in t) {
            ({}).hasOwnProperty.call(t, i) && (this[i] = t[i]);
        }
    }
    function ie() {
        var e = !1, t = !1, n = 0;
        this.init = function(t) {
            d().v("sdk version: " + f.IMPL_VERSION), e ? d().v("Lib重复实例化") : T().load(function() {
                d().v("cache初始化成功: ", T().getAll()), v().setUseOpenid && v().setUseOpenid(h().useOpenid()), 
                v().init(function() {
                    x.instance().init(), d().v("Header初始化成功");
                }), e = !0, "function" == typeof t && t(), d().tip("SDK集成成功");
            });
        }, this.resume = function(n) {
            var i;
            e && !t && (d().v("showOptions: ", n), t = !0, h().enableVerify() && n && n.query && (i = n.query._ttn, 
            K = i || K), this._resume(n));
        }, this._resume = function(e) {
            de().load();
            var t = F().resume(e), n = F().getCurrentSessionId();
            O().setSessionId(n), t && de().add(D, {}, function() {
                v().setUseOpenid && v().setUseOpenid(h().useOpenid()), h().useOpenid() && h().autoGetOpenid() && !v().getId() ? (d().v("get id async"), 
                function o(e, t) {
                    v().getId() || e <= 0 || v().getOpenIdAsync(h().appKey(), function(n) {
                        n ? (d().v("获取id成功"), de().send()) : (d().v("获取openid失败,启动重试,剩余可用次数", e - 1), setTimeout(function() {
                            o(e - 1, t);
                        }, t));
                    });
                }(10, 3e3)) : (d().v("session auto send"), de().send());
            });
        }, this.pause = function(i) {
            e && (t = !1, n = 0, F().pause(), h().uploadUserInfo() && he().update(), de().send(B, {}, function() {
                de().save(), T().save(), d().v("cache save success"), "function" == typeof i && i();
            }));
        }, this.setOpenid = function(e) {
            d().v("setOpenId: %s", e), v().setOpenid(e), de().send();
        }, this.setUnionid = function(e) {
            d().v("setUnionid: %s", e), v().setUnionid(e);
        }, this.setUserid = function(e, t) {
            d().v("setUserid: %s", e, t), v().setUserid(e, t);
        }, this.setUserInfo = function(e) {
            d().v("setUserInfo: %s", e), he().setUserInfo(e);
        }, this.setAnonymousid = function(e) {
            d().v("setAnonymousId: %s", e), v().setAnonymousid(e), de().send();
        }, this.setAppVersion = function(e) {
            e && "string" != typeof e ? d().w("setAppVersion方法只接受字符串类型参数") : x.instance().setAppVersion(e);
        }, this.setAlipayUserid = function(e) {
            e && "string" != typeof e ? d().w("setAlipayUserid方法只接受字符串类型参数") : (d().v("setAlipayUserid: %s", e), 
            v().setAlipayUserid(e));
        }, this.setDeviceId = function(e) {
            if ("string" == typeof e) return v().setDeviceId(e), e;
        }, this.setSuperProperty = function(e) {
            if (e && "string" != typeof e) d().w("超级属性只支持字符串类型"); else {
                var t = this;
                x.instance().getSuperProperty() !== e && (x.instance().setSuperProperty(e), t.pause(function() {
                    t.resume();
                }));
            }
        }, this.trackEvent = function(t, i) {
            if (e && (d().v("event: ", t, i), function(e, t) {
                if (!e || "string" != typeof e) return d().e('please check trackEvent id. id should be "string" and not null'), 
                !1;
                var n = [ "id", "ts", "du" ], i = {};
                if (n.forEach(function(e) {
                    i[e] = 1;
                }), i[e]) return d().e("eventId不能与以下保留字冲突: " + n.join(",")), !1;
                if (e.length > f.MAX_EVENTID_LENGTH) return d().e("The maximum length of event id shall not exceed " + f.MAX_EVENTID_LENGTH), 
                !1;
                if (t && ("object" != _typeof2(t) || Array.isArray(t)) && "string" != typeof t) return d().e("please check trackEvent properties. properties should be string or object(not include Array)"), 
                !1;
                if ("object" == _typeof2(t)) {
                    var a = 0;
                    for (var o in t) {
                        if ({}.hasOwnProperty.call(t, o)) {
                            if (o.length > f.MAX_PROPERTY_KEY_LENGTH) return d().e("The maximum length of property key shall not exceed " + f.MAX_PROPERTY_KEY_LENGTH), 
                            !1;
                            if (a >= f.MAX_PROPERTY_KEYS_COUNT) return d().e("The maximum count of properties shall not exceed " + f.MAX_PROPERTY_KEYS_COUNT), 
                            !1;
                            if (i[o]) return d().e("属性中的key不能与以下保留字冲突: " + n.join(",")), !1;
                            a += 1;
                        }
                    }
                }
                return !0;
            }(t, i))) {
                var a = new ne(t, i);
                O().addEvent(a);
                var o = !!M(), s = o ? 0 : f.EVENT_SEND_DEFAULT_INTERVAL, r = Date.now();
                ("number" != typeof n || "number" != typeof s || n <= 0 || r - n > s) && (n = r, 
                de().send(H, {
                    noCache: o
                }, function() {}));
            }
        }, this.trackShare = function(t) {
            if (e) try {
                g.getSdkType().indexOf("game") > -1 ? (t = I().add(t, !0), d().v("shareQuery: ", t)) : (t = I().add(t, !1), 
                d().v("sharePath: ", t.path));
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                d().v("shareAppMessage: ", e);
            }
            return t;
        }, this.trackPageStart = function(t) {
            e && S().addPageStart(t);
        }, this.trackPageEnd = function(t) {
            e && S().addPageEnd(t);
        }, this.onShareAppMessage = function(e) {
            var t = this;
            g.onShareAppMessage(function() {
                return t.trackShare(e());
            });
        }, this.shareAppMessage = function(e) {
            this.trackShare(e), g.shareAppMessage(e);
        };
    }
    var ce = [];
    function oe() {}
    oe.prototype = {
        createMethod: function createMethod(e, t, n) {
            try {
                e[t] = n && n[t] ? function() {
                    return n[t].apply(n, arguments);
                } : function() {
                    ce.push([ t, [].slice.call(arguments) ]);
                };
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                d().v("create method errror: ", e);
            }
        },
        installApi: function installApi(e, t) {
            try {
                var n, i, a = "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setUnionid,onShareAppMessage,shareAppMessage".split(",");
                for (n = 0, i = a.length; n < i; n++) {
                    this.createMethod(e, a[n], t);
                }
                if (t) for (n = 0, i = ce.length; n < i; n++) {
                    var o = ce[n];
                    try {
                        t[o[0]].apply(t, o[1]);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        d().v("impl[v[0]].apply error: ", o[0], e);
                    }
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                d().v("install api errror: ", e);
            }
        }
    };
    var ue = [ f.ENDPOINT, f.ENDPOINTB ];
    !function(e) {
        f.ENDPOINTB && setTimeout(function() {
            !function ae(e, t) {
                var n, i;
                if (0 === e || 1 === e && t ? n = f.ENDPOINT : 2 === e && t ? n = f.ENDPOINTB : t && (n = ue[e]), 
                e >= ue.length || t) return t && (i = n, f.ENDPOINT = i), t && d().v("命中可用服务", n), 
                !t && d().tip_w("未命中可用服务"), !1;
                g.request({
                    url: f.ENDPOINT + "/uminiprogram_logs/ckdh",
                    success: function success(t) {
                        200 === (t.code || t.status || t.statusCode) && t.data && 200 === t.data.code ? ae(e + 1, !0) : ae(e + 1, !1);
                    },
                    fail: function fail() {
                        ae(e + 1, !1);
                    }
                });
            }(0, !1);
        }, e);
    }(3e3);
    var pe = new oe(), ge = {
        _inited: !1,
        _log: d(),
        preinit: function preinit(e) {
            if (e && "object" == _typeof2(e)) for (var t in e) {
                f[t] = e[t];
            }
            return f;
        },
        use: function use(e, t) {
            return e && m.isFunction(e.install) ? e.install(ge, t) : m.isFunction(e) && e(ge, t), 
            ge;
        },
        messager: u,
        init: function init(e) {
            if (this._inited) d().v("已经实例过，请避免重复初始化"); else if (e) {
                if (e.appKey) {
                    "boolean" != typeof e.useOpenid && (e.useOpenid = !0), h().set(e), d().setDebug(e.debug), 
                    this._inited = !0;
                    var t = this;
                    u.emit(u.messageType.CONFIG_LOADED, e);
                    try {
                        var n = new ie();
                        d().v("成功创建Lib对象"), n.init(function() {
                            d().v("Lib对象初始化成功"), pe.installApi(t, n), d().v("安装Lib接口成功"), u.emit(u.messageType.UMA_LIB_INITED, e);
                        });
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        d().w("创建Lib对象异常: " + e);
                    }
                } else d().err("请确保传入正确的appkey");
            } else d().err("请正确设置相关信息！");
        }
    };
    try {
        pe.installApi(ge, null);
    } catch (l) {
        l = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(l);
        d().w("uma赋值异常: ", l);
    }
    var fe = "2.7.1", me = "none", Ae = {}, ve = Array.isArray;
    Ae.isArray = ve || function(e) {
        return "[object Array]" === toString.call(e);
    }, Ae.isObject = function(e) {
        return e === Object(e) && !Ae.isArray(e);
    }, Ae.isEmptyObject = function(e) {
        if (Ae.isObject(e)) {
            for (var t in e) {
                if (hasOwnProperty.call(e, t)) return !1;
            }
            return !0;
        }
        return !1;
    }, Ae.isUndefined = function(e) {
        return void 0 === e;
    }, Ae.isString = function(e) {
        return "[object String]" === toString.call(e);
    }, Ae.isDate = function(e) {
        return "[object Date]" === toString.call(e);
    }, Ae.isNumber = function(e) {
        return "[object Number]" === toString.call(e);
    }, Ae.each = function(e, t, n) {
        if (null != e) {
            var i = {}, a = Array.prototype.forEach;
            if (a && e.forEach === a) e.forEach(t, n); else if (e.length === +e.length) {
                for (var o = 0, s = e.length; o < s; o++) {
                    if (o in e && t.call(n, e[o], o, e) === i) return;
                }
            } else for (var r in e) {
                if (hasOwnProperty.call(e, r) && t.call(n, e[r], r, e) === i) return;
            }
        }
    }, Ae.buildQuery = function(e, t) {
        var n, i, a = [];
        return void 0 === t && (t = "&"), Ae.each(e, function(e, t) {
            n = encodeURIComponent(e.toString()), i = encodeURIComponent(t), a[a.length] = i + "=" + n;
        }), a.join(t);
    }, Ae.JSONDecode = function(e) {
        if (e) {
            try {
                return JSON.parse(e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                console.error("JSONDecode error", e);
            }
            return null;
        }
    }, Ae.JSONEncode = function(e) {
        try {
            return JSON.stringify(e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.error("JSONEncode error", e);
        }
    };
    var Se = Object.create(null);
    function _e(e) {
        d().v("开始构建 fetch body"), g.getSystemInfo(function(t) {
            g.getNetworkInfo(function(n) {
                var i = (n = n || {}).networkType;
                i = i === me ? "unknown" : i.toUpperCase(), Se.access = i, function(e, t) {
                    var n = e.brand || "";
                    if (Se.deviceType = "Phone", Se.sdkVersion = fe, Se.appkey = h().appKey(), Se.sdkType = g.getSdkType(), 
                    Se.umid = v().getId(), e) {
                        Se.language = e.language || "", Se.os = e.OS, Se.osVersion = e.OSVersion, Se.deviceName = e.deviceName, 
                        Se.platformVersion = e.platformVersion, Se.platformSdkVersion = e.platformSDKVersion, 
                        Se.deviceBrand = n;
                        var i = e.resolution.split("*");
                        Ae.isArray(i) && (Se.resolutionHeight = Number(i[0]), Se.resolutionWidth = Number(i[1]));
                    }
                    !function(e) {
                        e && (Se.installTime = e.install_datetime && Date.parse(e.install_datetime), Se.scene = e.install_scene, 
                        Se.channel = e.install_channel, Se.campaign = e.install_campaign);
                    }(le.getImpObj()), t && t(Se);
                }(t, e);
            });
        });
    }
    var ye = Object.create(null), Ie = null, we = !1, be = {
        minFetchIntervalSeconds: 43200
    };
    function Ee(e) {
        e && Ae.each(e, function(e) {
            ye[e.k] = e;
        });
    }
    function Oe() {
        var e = this;
        this.STORAGE_NAME = null, u.once(u.messageType.CONFIG_LOADED, function(t) {
            d().v("云配初始化开始..."), e.init(t);
        });
    }
    Oe.prototype = {
        setDefaultValues: function setDefaultValues(e) {
            we && Ae.isObject(e) && Ae.each(e, function(e, t) {
                ye[t] && ye[t].v || (ye[t] = {
                    v: e
                });
            });
        },
        getValue: function getValue(e) {
            d().v("从配置项中读取 value, 当前配置为: ", ye), d().v("待读取的 key : ", e);
            try {
                if (!we) return;
                var t = ye[e] || {};
                return d().v("读取相应配置ing..., 结果为: ", t), Ae.isNumber(t.e) && Ae.isNumber(t.g) && (d().v("读取到相应配置, 开始数据上报..."), 
                function(e) {
                    var t = {
                        appkey: h().appKey(),
                        sdkType: g.getSdkType(),
                        expId: e && e.e,
                        groupId: e && e.g,
                        clientTs: Date.now(),
                        key: e && e.k,
                        value: e && e.v,
                        umid: v().getId()
                    };
                    try {
                        g.request({
                            url: "https://pslog.umeng.com/mini_ablog",
                            method: "POST",
                            data: [ t ],
                            success: function success(e) {
                                e && 200 === e.statusCode ? d().v("上传数据成功", t) : d().w("ablog 请求成功, 返回结果异常 ", e);
                            },
                            fail: function fail(e) {
                                d().w("ablog 请求数据错误 ", t, e);
                            }
                        });
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        d().w("urequest 调用错误", e);
                    }
                }(t)), t.v;
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                d().w("getValue error, key: ", e);
            }
        },
        active: function active(e) {
            try {
                if (!we) return;
                var t, n;
                e && e.params && (t = e.params), e && e.callback && (n = e.callback), d().v("激活配置项: ", t), 
                t ? (d().v("本地已缓存的配置项: ", ye), Ee(t), d().v("合并后的配置项: ", ye), n && n(ye), d().v("active 结束")) : (d().v("配置项为空!! 读取本地配置..."), 
                g.getStorage(this.STORAGE_NAME, function(e) {
                    e ? (Ee((e = Ae.JSONDecode(e) || {}).params), d().v("当前本地配置项为: ", ye), n && n(ye), 
                    d().v("active 结束")) : d().v("当前本地配置项为空, 退出激活");
                }));
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                d().w("SDK active 错误", e);
            }
        },
        init: function init(e) {
            e.appKey && (Ie = e.appKey, this.STORAGE_NAME = "um_remote_config_{{" + Ie + "}}"), 
            Ie ? we ? d().w("SDK 已经初始化, 请避免重复初始化") : (we = !0, this.setOptions(e), this.active()) : d().err("请检查您的小程序 appKey, appKey 不能为空");
        },
        setOptions: function setOptions(e) {
            if (Ae.isObject(e)) {
                var t = e.minFetchIntervalSeconds;
                Ae.isNumber(t) && (be.minFetchIntervalSeconds = Math.max(t, 5));
            }
        },
        fetch: function fetch(e) {
            if (we && this.STORAGE_NAME) {
                var t, n;
                e && e.active && (t = e.active), e && e.callback && (n = e.callback);
                var i = this;
                g.getStorage(this.STORAGE_NAME, function(e) {
                    d().v("开始读缓存 data is ", e), (e = Ae.JSONDecode(e) || {}).params && e.ts && Date.now() - e.ts < 1e3 * be.minFetchIntervalSeconds ? (d().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch"), 
                    n && n(e.params)) : _e(function(e) {
                        d().v("缓存数据不存在, 构建 fetch body :", e);
                        try {
                            g.request({
                                url: "https://ucc.umeng.com/v1/mini/fetch",
                                method: "POST",
                                data: e,
                                success: function success(e) {
                                    if (e && 200 === e.statusCode && e.data && e.data.cc) {
                                        d().v("fetch 请求成功, 响应数据: ", e.data);
                                        var a = Object.create(null);
                                        Ae.each(e.data.cc, function(e) {
                                            a[e.k] = e;
                                        });
                                        var o = {
                                            ts: Date.now(),
                                            params: a
                                        };
                                        d().v("开始缓存 fetch 请求的云配置结果..."), g.setStorage(i.STORAGE_NAME, Ae.JSONEncode(o), function(e) {
                                            d().v("缓存云配置成功, 缓存数据为: ", o), d().v("缓存云配置成功, 成功消息为: ", e), d().v("云配拉取数据是否自动激活: ", t), 
                                            e && t && (d().v("激活云配置..."), i.active({
                                                params: a,
                                                callback: n
                                            }));
                                        });
                                    } else d().w("fetch 请求成功,返回结果异常 ", e.data), n && n();
                                },
                                fail: function fail(t) {
                                    d().w("fetch请求数据错误 ", e, t), n && n();
                                }
                            });
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            d().w("urequest调用错误", e);
                        }
                    });
                });
            }
        }
    };
    var Pe = {
        install: function install(e, t) {
            return e.rc || (e.rc = new Oe()), e.messager.once(e.messager.messageType.CONFIG_LOADED, function() {
                e._log.v("plugin rc installed");
            }), e.rc;
        }
    }, Te = "_um", ke = "revenue", Le = "stage", Ne = "level", De = "running", Be = "end", Me = "init", He = "set", Ue = [ Te, Le, "start" ].join(".");
    function Ce(e) {
        var t = {};
        for (var n in e) {
            var i = e[n];
            if ("object" == _typeof2(i)) for (var a in i) {
                t[n + "." + a] = i[a];
            } else t[n] = i;
        }
        return t;
    }
    var xe = {
        install: function install(e, t) {
            e.revenue = function(t) {
                e.trackEvent([ Te, ke, t.group ].join("."), Ce(t));
            };
            var n = 0;
            return e.stage = {
                onStart: function onStart(t) {
                    n = Date.now(), e.trackEvent(Ue, Ce(t));
                },
                onEnd: function onEnd(t) {
                    "number" != typeof t._um_sdu && (t._um_sdu = 0 !== n ? Date.now() - n : 0), e.trackEvent([ Te, Le, Be, t.event ].join("."), Ce(t));
                },
                onRunning: function onRunning(t) {
                    e.trackEvent([ Te, Le, De, t.event ].join("."), Ce(t));
                }
            }, e.level = {
                onInitLevel: function onInitLevel(t) {
                    e.trackEvent([ Te, Ne, Me ].join("."), Ce(t));
                },
                onSetLevel: function onSetLevel(t) {
                    e.trackEvent([ Te, Ne, He ].join("."), Ce(t));
                }
            }, e.messager.once(e.messager.messageType.CONFIG_LOADED, function() {
                e._log.v("plugin game-ext installed");
            }), e;
        }
    };
    wx.onShow(function(e) {
        var t;
        d().v("game onShow: ", e), t = e.query, y = t, ge.resume(e, !0);
    }), wx.onHide(function() {
        d().v("game onHide"), ge.pause();
    });
    var Fe = ge.init;
    ge.init = function(e) {
        e && e.useOpenid && (d().tip_w(d().repeat("!")), d().tip_w("您选择了使用openid进行统计，请确保使用setOpenid回传openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取"), 
        d().tip_w(d().repeat("!"))), Fe.call(ge, e);
    }, ge.use(Pe), ge.use(xe), wx.uma = ge, console.log("start to load uma sdk..."), 
    ge.init({
        appKey: UmaConfig.wxAppKey,
        useOpenid: !0,
        autoGetOpenid: !1,
        debug: !1
    });
} : uma_wx.init = function() {
    console.log("uma sdk not support on windows platform....");
};

var _Reportor = /* */ function() {
    function _Reportor() {
        _classCallCheck2(this, _Reportor);
        this._reportors = [];
    }
    _createClass2(_Reportor, [ {
        key: "init",
        value: function init(e, t, n) {
            e && this._enable("hl"), t && this._enable("ald"), n && this._enable("uma"), PlatHelper.isWXPlatform() && this._enable("wx");
        }
    }, {
        key: "report",
        value: function report(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            checkString(e) && (!t || isObject$1(t) ? (t || (t = void 0), this._doReport(e, t)) : console.error("A Valid Param Must Be A Type Of Json Object."));
        }
    }, {
        key: "_enable",
        value: function _enable(e) {
            "ald" === e ? PlatHelper.getPlat() && (PlatHelper.getPlat().aldSendEvent || (PlatHelper.isQQPlatform() ? ald_qq.init() : PlatHelper.isWXPlatform() && ald.init()), 
            PlatHelper.getPlat().aldSendEvent && this._reportors.push({
                type: e,
                sender: PlatHelper.getPlat().aldSendEvent
            })) : "uma" === e ? PlatHelper.getPlat() && (PlatHelper.getPlat().uma && PlatHelper.getPlat().uma.trackEvent || PlatHelper.isWXPlatform() && uma_wx.init(), 
            PlatHelper.getPlat().uma && PlatHelper.getPlat().uma.trackEvent && this._reportors.push({
                type: e,
                sender: PlatHelper.getPlat().uma.trackEvent
            })) : "hl" === e ? PlatHelper.getPlat() && (PlatHelper.getPlat().h_SendEvent || hl.init(), 
            PlatHelper.getPlat().h_SendEvent && this._reportors.push({
                type: e,
                sender: PlatHelper.getPlat().h_SendEvent
            })) : "wx" === e && PlatHelper.getPlat() && PlatHelper.getPlat().reportEvent && this._reportors.push({
                plat: e,
                sender: PlatHelper.getPlat().reportEvent
            });
        }
    }, {
        key: "beginLevel",
        value: function beginLevel(e) {
            this._doReport("level", {
                level_id: e,
                type: 0
            });
        }
    }, {
        key: "endLevel",
        value: function endLevel(e) {
            this._doReport("level", {
                level_id: e,
                type: 1
            });
        }
    }, {
        key: "failLevel",
        value: function failLevel(e) {
            this._doReport("level", {
                level_id: e,
                type: 2
            });
        }
    }, {
        key: "_doReport",
        value: function _doReport(e, t) {
            for (var n = 0; n < this._reportors.length; n++) {
                var i = this._reportors[n];
                "function" == typeof i.sender && i.sender(e, t);
            }
            console.log("Report Event {0} Succ!".format(e));
        }
    } ]);
    return _Reportor;
}();

var Reportor = new _Reportor();

var C_SCHEDULE_REPEAT_FOREVER = 1561963389461;

var _Scheduler = /* */ function() {
    function _Scheduler() {
        _classCallCheck2(this, _Scheduler);
        this._scheduledInfos = {};
    }
    _createClass2(_Scheduler, [ {
        key: "schedule",
        value: function schedule(e, t, n, i, a) {
            if (!this._checkKey(e) || !this._checkCallback(t)) return !1;
            if (this._scheduledInfos[e]) return !1;
            null == i && (i = n ? 1 : 0), null == a && (a = C_SCHEDULE_REPEAT_FOREVER);
            var o = 0 === a ? t : function(t) {
                var n = this._scheduledInfos[e];
                if (n) if (n.invokeTimes += 1, n.invokeTimes >= a) {
                    var _t7 = n.cb;
                    this.unschedule(e), _t7();
                } else n.cb(t);
            }.bind(this);
            return 0 === a ? n ? Laya.timer.frameOnce(i, this, o) : Laya.timer.once(i, this, o) : (this._scheduledInfos[e] = {
                invokeTimes: 0,
                cb: t,
                scheduleCb: o
            }, n ? Laya.timer.frameLoop(i, this, o) : Laya.timer.loop(i, this, o)), !0;
        }
    }, {
        key: "unschedule",
        value: function unschedule(e) {
            return !!this._checkKey(e) && !!this._scheduledInfos[e] && (Laya.timer.clear(this, this._scheduledInfos[e].scheduleCb), 
            delete this._scheduledInfos[e], !0);
        }
    }, {
        key: "isScheduled",
        value: function isScheduled(e) {
            return !!this._checkKey(e) && !!this._scheduledInfos[e];
        }
    }, {
        key: "unscheduleAll",
        value: function unscheduleAll() {
            for (var e in this._scheduledInfos) {
                Laya.timer.clear(this, this._scheduledInfos[e].cb);
            }
            this._scheduledInfos = {};
        }
    }, {
        key: "_checkKey",
        value: function _checkKey(e) {
            return "string" == typeof e && "" !== e;
        }
    }, {
        key: "_checkCallback",
        value: function _checkCallback(e) {
            return "function" == typeof e;
        }
    } ]);
    return _Scheduler;
}();

var Scheduler = new _Scheduler();

var PlatBaseHelper = /* */ function() {
    function PlatBaseHelper() {
        _classCallCheck2(this, PlatBaseHelper);
        this._plat = null, this._platType = "None", this._platDesc = "未定义", this._sysInfo = null, 
        this._recogniseSceneIDs = [], this._isModalOnShow = !1, this._isToastOnShow = !1, 
        this._isLoadingOnShow = !1, this._hideAppTime = 0, this._channelID = null;
    }
    _createClass2(PlatBaseHelper, [ {
        key: "_checkLaunchOptions",
        value: function _checkLaunchOptions(e, t) {
            var n = !1;
            for (var i = 0; i < this._recogniseSceneIDs.length; ++i) {
                var a = this._recogniseSceneIDs[i];
                for (var _i2 = 0; _i2 < a.sceneIDs.length; ++_i2) {
                    if (e === a.sceneIDs[_i2]) {
                        n = !0, Event.dispatchEvent(a.eventName, t);
                        break;
                    }
                }
            }
            Event.dispatchEvent(EventName.EN_LAUNCH_APP_FROM_EVERYWHERE, e, t), n || Event.dispatchEvent(EventName.EN_LAUNCH_APP_FROM_UNKNOW, e, t);
        }
    }, {
        key: "init",
        value: function init() {
            var _this2 = this;
            if (console.log("当前平台为：" + this.getPlatDesc()), this._plat) {
                var e = this.getLaunchOptions();
                e && e.scene && e.query && this._checkLaunchOptions(e.scene, e.query), this._plat.onShow && this._plat.onShow(function(e) {
                    HLSDKLocalData._isInited && ServerInfo.reLoad(function() {
                        0 !== _this2._hideAppTime ? (Event.dispatchEvent(EventName.EN_APP_ONSHOW, ServerInfo.getServerTime() - _this2._hideAppTime), 
                        _this2._hideAppTime = 0) : Event.dispatchEvent(EventName.EN_APP_ONSHOW), _this2._checkLaunchOptions(e.scene, e.query);
                    });
                }), this._plat.onHide && this._plat.onHide(function(e) {
                    _this2._hideAppTime = ServerInfo.getServerTime(), Event.dispatchEvent(EventName.EN_APP_ONHIDE);
                }), this._plat.onMemoryWarning && this._plat.onMemoryWarning(function() {
                    console.warn("On Memory Warning Received..."), Reportor.report(ReportEventName.REN_RECEIVED_MEMORY_WARNING);
                });
            }
        }
    }, {
        key: "getPlat",
        value: function getPlat() {
            return this._plat;
        }
    }, {
        key: "getPlatType",
        value: function getPlatType() {
            return this._platType;
        }
    }, {
        key: "getPlatDesc",
        value: function getPlatDesc() {
            return this._platDesc;
        }
    }, {
        key: "restartApp",
        value: function restartApp() {
            this.exitApp();
        }
    }, {
        key: "exitApp",
        value: function exitApp() {
            this._plat && this._plat.exitMiniProgram && this._plat.exitMiniProgram({
                fail: function fail() {
                    Event.dispatchEvent(EventName.EN_SYSTEM_ERROR);
                }
            });
        }
    }, {
        key: "getLaunchOptions",
        value: function getLaunchOptions() {
            return this._plat && this._plat.getLaunchOptionsSync ? this._plat.getLaunchOptionsSync() : null;
        }
    }, {
        key: "getLaunchScene",
        value: function getLaunchScene() {
            var e = this.getLaunchOptions();
            return e && e.scene ? e.scene.toString() : "";
        }
    }, {
        key: "getChannelID",
        value: function getChannelID() {
            if (null === this._channelID) {
                this._channelID = "";
                var e = this.getLaunchOptions();
                if (e) for (var t in e.query || {}) {
                    if ("chid" === t) {
                        this._channelID = e.query[t].toString();
                        break;
                    }
                }
            }
            return this._channelID;
        }
    }, {
        key: "isSupportVibratePhone",
        value: function isSupportVibratePhone() {
            return !0;
        }
    }, {
        key: "vibratePhone",
        value: function vibratePhone(e) {
            HLSDKLocalData._settings._isMuteEnabled && (e ? this._plat && this._plat.vibrateLong && this._plat.vibrateLong() : this._plat && this._plat.vibrateShort && this._plat.vibrateShort());
        }
    }, {
        key: "installShortcut",
        value: function installShortcut(e) {}
    }, {
        key: "showMoreGamesModal",
        value: function showMoreGamesModal(e, t, n) {}
    }, {
        key: "startRecord",
        value: function startRecord() {}
    }, {
        key: "pauseRecord",
        value: function pauseRecord() {}
    }, {
        key: "resumeRecord",
        value: function resumeRecord() {}
    }, {
        key: "stopRecord",
        value: function stopRecord() {}
    }, {
        key: "getSavedVideoPath",
        value: function getSavedVideoPath() {
            return "";
        }
    }, {
        key: "showModal",
        value: function showModal(e, t, n, i, a) {
            if (!this._isModalOnShow) if (this._plat && this._plat.showModal && checkString(t)) {
                var o = {
                    content: t,
                    showCancel: n,
                    success: function(e) {
                        this._isModalOnShow = !1, "function" == typeof i && ("boolean" == typeof e ? i(e) : e.confirm ? i(!1) : (e.cancel, 
                        i(!1)));
                    }.bind(this)
                };
                checkString(e) && (o.title = e), a && (a.cancelText && (o.cancelText = a.cancelText), 
                a.cancelColor && (o.cancelColor = a.cancelColor), a.confirmText && (o.confirmText = a.confirmText), 
                a.confirmColor && (o.confirmColor = a.confirmColor)), this._isModalOnShow = !0, 
                this._plat.showModal(o);
            } else "function" == typeof i && i(!1);
        }
    }, {
        key: "showToast",
        value: function showToast(e, t) {
            if (this._clearToastAndLoading(), this._plat && this._plat.showToast && checkString(e)) {
                var n = {
                    title: e,
                    duration: 2e3,
                    success: function(e) {
                        this._isToastOnShow = !0, Scheduler.schedule("Auto_Reset_Toast_State", function() {
                            this._isToastOnShow = !1;
                        }.bind(this), !1, 2e3, 0);
                    }.bind(this)
                };
                n.icon = t || "none", this._plat.showToast(n);
            }
        }
    }, {
        key: "hideToast",
        value: function hideToast() {
            this._isToastOnShow && (this._isToastOnShow = !1, this._plat && this._plat.hideToast && this._plat.hideToast());
        }
    }, {
        key: "showRandomToast",
        value: function showRandomToast(e) {
            if (e) {
                var t = random(0, e.length - 1);
                this.showToast(e[t]);
            }
        }
    }, {
        key: "showLoading",
        value: function showLoading(e) {
            if (this._clearToastAndLoading(), this._plat && this._plat.showLoading) {
                var t = {
                    title: e,
                    mask: !0
                };
                this._isLoadingOnShow = !0, this._plat.showLoading(t);
            } else console.log("show loading: " + e);
        }
    }, {
        key: "hideLoading",
        value: function hideLoading() {
            this._isLoadingOnShow && (this._isLoadingOnShow = !1, this._plat && this._plat.hideLoading && this._plat.hideLoading());
        }
    }, {
        key: "_clearToastAndLoading",
        value: function _clearToastAndLoading() {
            this.hideToast(), this.hideLoading();
        }
    }, {
        key: "getSysInfo",
        value: function getSysInfo() {
            if (null === this._sysInfo) if (this._plat && this._plat.getSystemInfoSync) try {
                this._sysInfo = this._plat.getSystemInfoSync();
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                Event.dispatchEvent(EventName.EN_SYSTEM_ERROR);
            } else this._sysInfo = {
                screenHeight: Math.round(Laya.stage.height),
                screenWidth: Math.round(Laya.stage.width),
                windowHeight: Math.round(Laya.stage.height),
                windowWidth: Math.round(Laya.stage.width),
                statusBarHeight: 0,
                brand: "microsoft",
                platform: "window",
                system: "Window 7",
                SDKVersion: "0.0.0"
            };
            return this._sysInfo;
        }
    }, {
        key: "getSDKVersion",
        value: function getSDKVersion() {
            var e = this.getSysInfo();
            return e && void 0 !== e.SDKVersion ? e.SDKVersion : "0.0.0";
        }
    }, {
        key: "isIPhoneX",
        value: function isIPhoneX() {
            var e = this.getSysInfo();
            if (e) {
                if (e.model && (-1 !== e.model.indexOf("iPhone X") || -1 !== e.model.indexOf("iPhone 11") || -1 !== e.model.indexOf("iPhone 12"))) return !0;
                if (this.isIOSNativePlatform() && e.screenHeight / e.screenWidth > 2) return !0;
            }
            return !1;
        }
    }, {
        key: "setStorage",
        value: function setStorage(e, t) {
            if (checkString(e)) {
                if (this._plat && this._plat.setStorageSync) try {
                    this._plat.setStorageSync(e, t);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error("PlatHelper.setStorage Fail, No Support This Kind Of Data: ", t);
                } else Laya.LocalStorage.setItem(e, t);
            } else console.error("PlatHelper.setStorage Fail, Check Input...");
        }
    }, {
        key: "getStorage",
        value: function getStorage(e, t) {
            if (checkString(e)) {
                if (!this._plat || !this._plat.getStorageSync) return Laya.LocalStorage.getItem(e);
                try {
                    return this._plat.getStorageSync(e);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void 0 !== t ? t : null;
                }
            } else console.error("PlatHelper.getStorage Fail, Check Input...");
        }
    }, {
        key: "clearStorage",
        value: function clearStorage(e) {
            if (checkString(e)) {
                if (this._plat && this._plat.removeStorageSync) try {
                    this._plat.removeStorageSync(e);
                } catch (e) {} else Laya.LocalStorage.removeItem(e);
            } else console.error("PlatHelper.clearStorage Fail, Check Input...");
        }
    }, {
        key: "canLoginOnline",
        value: function canLoginOnline() {
            return !1;
        }
    }, {
        key: "canSaveOnline",
        value: function canSaveOnline() {
            return !1;
        }
    }, {
        key: "isWINPlatform",
        value: function isWINPlatform() {
            return null === this._plat && _isWINPlatform();
        }
    }, {
        key: "isWXPlatform",
        value: function isWXPlatform() {
            return _isWXPlatform();
        }
    }, {
        key: "isQQPlatform",
        value: function isQQPlatform() {
            return _isQQPlatform();
        }
    }, {
        key: "isTTPlatform",
        value: function isTTPlatform() {
            return _isTTPlatform();
        }
    }, {
        key: "isOPPOPlatform",
        value: function isOPPOPlatform() {
            return _isOPPOPlatform();
        }
    }, {
        key: "isVIVOPlatform",
        value: function isVIVOPlatform() {
            return _isVIVOPlatform();
        }
    }, {
        key: "isQGPlatform",
        value: function isQGPlatform() {
            return _isQGPlatform();
        }
    }, {
        key: "isAndroidNativePlatform",
        value: function isAndroidNativePlatform() {
            return _isAndroidNativePlatform();
        }
    }, {
        key: "isIOSNativePlatform",
        value: function isIOSNativePlatform() {
            return _isIOSNativePlatform();
        }
    } ]);
    return PlatBaseHelper;
}();

var ExtPlatHelper = /* */ function(_PlatBaseHelper) {
    _inherits2(ExtPlatHelper, _PlatBaseHelper);
    var _super = _createSuper2(ExtPlatHelper);
    function ExtPlatHelper() {
        var _this3;
        _classCallCheck2(this, ExtPlatHelper);
        _this3 = _super.call(this), _this3._isUseLocalModal = !1, _this3._isUseLocalToast = !1, 
        _this3._isUseLocalLoading = !1;
        return _this3;
    }
    _createClass2(ExtPlatHelper, [ {
        key: "init",
        value: function init() {
            _get2(_getPrototypeOf2(ExtPlatHelper.prototype), "init", this).call(this), this._isUseLocalModal && (ExtPlatHelper.prototype.showModal = function(e, t, n, i, a) {
                var _this4 = this;
                if (!this._isModalOnShow) if (checkString(t)) {
                    var o = {
                        content: t,
                        showCancel: n,
                        cb: function cb(e) {
                            _this4._isModalOnShow = !1, "function" == typeof i && i(e);
                        }
                    };
                    checkString(e) && (o.title = e), a && (a.cancelText && (o.cancelText = a.cancelText), 
                    a.cancelColor && (o.cancelColor = a.cancelColor), a.confirmText && (o.confirmText = a.confirmText), 
                    a.confirmColor && (o.confirmColor = a.confirmColor)), Event.dispatchEvent(EventName.EN_SHOW_CUSTOM_MODAL, o);
                } else "function" == typeof i && i(!1);
            }), this._isUseLocalToast && (ExtPlatHelper.prototype.showToast = function(e, t) {
                this._clearToastAndLoading(), console.log("show toast: " + e), Event.dispatchEvent(EventName.EN_SHOW_CUSTOM_TIPS, e);
            }, ExtPlatHelper.prototype.hideToast = function() {
                Event.dispatchEvent(EventName.EN_HIDE_CUSTOM_TIPS);
            }), this._isUseLocalLoading && (ExtPlatHelper.prototype.showLoading = function(e) {
                this._clearToastAndLoading(), console.log("show loading: " + e), Event.dispatchEvent(EventName.EN_SHOW_CUSTOM_LOADING, e);
            }, ExtPlatHelper.prototype.hideLoading = function() {
                Event.dispatchEvent(EventName.EN_HIDE_CUSTOM_LOADING);
            });
        }
    } ]);
    return ExtPlatHelper;
}(PlatBaseHelper);

var WINPlatHelper = /* */ function(_ExtPlatHelper) {
    _inherits2(WINPlatHelper, _ExtPlatHelper);
    var _super2 = _createSuper2(WINPlatHelper);
    function WINPlatHelper() {
        var _this5;
        _classCallCheck2(this, WINPlatHelper);
        _this5 = _super2.call(this), _this5._platType = "WIN", _this5._platDesc = "Windows小游戏平台", 
        _this5._isUseLocalModal = !0, _this5._isUseLocalToast = !0, _this5._isUseLocalLoading = !0;
        return _this5;
    }
    _createClass2(WINPlatHelper, [ {
        key: "canLoginOnline",
        value: function canLoginOnline() {
            return !1;
        }
    }, {
        key: "canSaveOnline",
        value: function canSaveOnline() {
            return !1;
        }
    }, {
        key: "isSupportVibratePhone",
        value: function isSupportVibratePhone() {
            return !1;
        }
    } ]);
    return WINPlatHelper;
}(ExtPlatHelper);

var WXPlatHelper = /* */ function(_ExtPlatHelper2) {
    _inherits2(WXPlatHelper, _ExtPlatHelper2);
    var _super3 = _createSuper2(WXPlatHelper);
    function WXPlatHelper() {
        var _this6;
        _classCallCheck2(this, WXPlatHelper);
        _this6 = _super3.call(this), _this6._plat = window.wx, _this6._platType = "WX", 
        _this6._platDesc = "微信小游戏平台", _this6._recogniseSceneIDs.push({
            sceneIDs: [ 1007 ],
            eventName: EventName.EN_LAUNCH_APP_FROM_SINGLE_SHARE
        }), _this6._recogniseSceneIDs.push({
            sceneIDs: [ 1008 ],
            eventName: EventName.EN_LAUNCH_APP_FROM_GROUP_SHARE
        }), _this6._recogniseSceneIDs.push({
            sceneIDs: [ 1007, 1008 ],
            eventName: EventName.EN_LAUNCH_APP_FROM_SHARE
        }), _this6._recogniseSceneIDs.push({
            sceneIDs: [ 1089 ],
            eventName: EventName.EN_LAUNCH_APP_FROM_RECENT
        }), _this6._recogniseSceneIDs.push({
            sceneIDs: [ 1038 ],
            eventName: EventName.EN_LAUNCH_APP_BACK_FROM_OTHER_APP
        }), _this6._recogniseSceneIDs.push({
            sceneIDs: [ 1104 ],
            eventName: EventName.EN_LAUNCH_APP_FROM_FAVOURITE
        });
        return _this6;
    }
    _createClass2(WXPlatHelper, [ {
        key: "canLoginOnline",
        value: function canLoginOnline() {
            return !0;
        }
    }, {
        key: "canSaveOnline",
        value: function canSaveOnline() {
            return !0;
        }
    } ]);
    return WXPlatHelper;
}(ExtPlatHelper);

var QQPlatHelper = /* */ function(_ExtPlatHelper3) {
    _inherits2(QQPlatHelper, _ExtPlatHelper3);
    var _super4 = _createSuper2(QQPlatHelper);
    function QQPlatHelper() {
        var _this7;
        _classCallCheck2(this, QQPlatHelper);
        _this7 = _super4.call(this), _this7._plat = window.qq, _this7._platType = "QQ", 
        _this7._platDesc = "QQ小游戏平台", _this7._recogniseSceneIDs.push({
            sceneIDs: [ 1007 ],
            eventName: EventName.EN_LAUNCH_APP_FROM_SINGLE_SHARE
        }), _this7._recogniseSceneIDs.push({
            sceneIDs: [ 1008 ],
            eventName: EventName.EN_LAUNCH_APP_FROM_GROUP_SHARE
        }), _this7._recogniseSceneIDs.push({
            sceneIDs: [ 1007, 1008 ],
            eventName: EventName.EN_LAUNCH_APP_FROM_SHARE
        }), _this7._recogniseSceneIDs.push({
            sceneIDs: [ 1038 ],
            eventName: EventName.EN_LAUNCH_APP_BACK_FROM_OTHER_APP
        });
        return _this7;
    }
    _createClass2(QQPlatHelper, [ {
        key: "canLoginOnline",
        value: function canLoginOnline() {
            return !0;
        }
    }, {
        key: "canSaveOnline",
        value: function canSaveOnline() {
            return !0;
        }
    } ]);
    return QQPlatHelper;
}(ExtPlatHelper);

var OPPOPlatHelper = /* */ function(_ExtPlatHelper4) {
    _inherits2(OPPOPlatHelper, _ExtPlatHelper4);
    var _super5 = _createSuper2(OPPOPlatHelper);
    function OPPOPlatHelper() {
        var _this8;
        _classCallCheck2(this, OPPOPlatHelper);
        _this8 = _super5.call(this), _this8._plat = window.qg, _this8._platType = "OPPO", 
        _this8._platDesc = "OPPO小游戏平台", _this8._isUseLocalToast = !0;
        return _this8;
    }
    _createClass2(OPPOPlatHelper, [ {
        key: "exitApp",
        value: function exitApp() {
            this._plat && this._plat.exitApplication && this._plat.exitApplication({
                fail: function fail() {
                    Event.dispatchEvent(EventName.EN_SYSTEM_ERROR);
                }
            });
        }
    }, {
        key: "getSDKVersion",
        value: function getSDKVersion() {
            var e = this.getSysInfo();
            return e && void 0 !== e.platformVersion ? e.platformVersion.toString() : "0";
        }
    }, {
        key: "canLoginOnline",
        value: function canLoginOnline() {
            return !1;
        }
    }, {
        key: "canSaveOnline",
        value: function canSaveOnline() {
            return !1;
        }
    }, {
        key: "vibratePhone",
        value: function vibratePhone(e) {
            e ? this._plat && this._plat.vibrateLong && this._plat.vibrateLong({
                success: null,
                fail: null,
                complete: null
            }) : this._plat && this._plat.vibrateShort && this._plat.vibrateShort({});
        }
    }, {
        key: "hideLoading",
        value: function hideLoading() {
            this._isLoadingOnShow && (this._isLoadingOnShow = !1, this._plat && this._plat.hideLoading && this._plat.hideLoading({
                success: null,
                fail: null,
                complete: null
            }));
        }
    }, {
        key: "installShortcut",
        value: function installShortcut(e) {
            var _this9 = this;
            this._plat.hasShortcutInstalled({
                success: function success(t) {
                    0 == t && _this9._plat.installShortcut({
                        success: function success() {
                            "function" == typeof e && e();
                        }
                    });
                }
            });
        }
    } ]);
    return OPPOPlatHelper;
}(ExtPlatHelper);

var VIVOPlatHelper = /* */ function(_ExtPlatHelper5) {
    _inherits2(VIVOPlatHelper, _ExtPlatHelper5);
    var _super6 = _createSuper2(VIVOPlatHelper);
    function VIVOPlatHelper() {
        var _this10;
        _classCallCheck2(this, VIVOPlatHelper);
        _this10 = _super6.call(this), _this10._plat = window.qg, _this10._platType = "VIVO", 
        _this10._platDesc = "VIVO小游戏平台", _this10._isUseLocalToast = !0;
        return _this10;
    }
    _createClass2(VIVOPlatHelper, [ {
        key: "exitApp",
        value: function exitApp() {
            this._plat && this._plat.exitApplication && this._plat.exitApplication();
        }
    }, {
        key: "getSDKVersion",
        value: function getSDKVersion() {
            var e = this.getSysInfo();
            return e && void 0 !== e.platformVersion ? e.platformVersion.toString() : "0";
        }
    }, {
        key: "canLoginOnline",
        value: function canLoginOnline() {
            return !1;
        }
    }, {
        key: "canSaveOnline",
        value: function canSaveOnline() {
            return !1;
        }
    }, {
        key: "showModal",
        value: function showModal(e, t, n, i, a) {
            var _this11 = this;
            if (!this._isModalOnShow) if (this._plat && this._plat.showDialog && checkString(t)) {
                var o = {
                    message: t,
                    buttons: [ {
                        text: "确认"
                    } ],
                    success: function success(e) {
                        _this11._isModalOnShow = !1, "function" == typeof i && (0 === e.index ? i(!0) : 1 === e.index && i(!1));
                    },
                    cancel: function cancel() {
                        _this11._isModalOnShow = !1, "function" == typeof i && i(!1);
                    },
                    fail: function fail() {
                        _this11._isModalOnShow = !1, "function" == typeof i && i(!1);
                    }
                };
                n && o.buttons.push({
                    text: "取消"
                }), a && (checkString(e) && (o.title = e), a.confirmText && (o.buttons[0].text = a.confirmText), 
                a.confirmColor && (o.buttons[0].color = a.confirmColor), n && (a.cancelText && (o.buttons[1].text = a.cancelText), 
                a.cancelColor && (o.buttons[1].color = a.cancelColor))), this._isModalOnShow = !0, 
                this._plat.showDialog(o);
            } else "function" == typeof i && i(!1);
        }
    }, {
        key: "installShortcut",
        value: function installShortcut(e) {
            var _this12 = this;
            this._plat.hasShortcutInstalled({
                success: function success(t) {
                    0 == t && _this12._plat.installShortcut({
                        success: function success() {
                            "function" == typeof e && e();
                        }
                    });
                }
            });
        }
    }, {
        key: "setStorage",
        value: function setStorage(e, t) {
            checkString(e) ? Laya.LocalStorage.setItem(e, t) : console.error("PlatHelper.setStorage Fail, Check Input...");
        }
    }, {
        key: "getStorage",
        value: function getStorage(e, t) {
            if (checkString(e)) return Laya.LocalStorage.getItem(e);
            console.error("PlatHelper.getStorage Fail, Check Input...");
        }
    }, {
        key: "clearStorage",
        value: function clearStorage(e) {
            checkString(e) ? Laya.LocalStorage.removeItem(e) : console.error("PlatHelper.clearStorage Fail, Check Input...");
        }
    } ]);
    return VIVOPlatHelper;
}(ExtPlatHelper);

var TTPlatHelper = /* */ function(_ExtPlatHelper6) {
    _inherits2(TTPlatHelper, _ExtPlatHelper6);
    var _super7 = _createSuper2(TTPlatHelper);
    function TTPlatHelper() {
        var _this13;
        _classCallCheck2(this, TTPlatHelper);
        _this13 = _super7.call(this), _this13._plat = window.tt, _this13._platType = "TT", 
        _this13._platDesc = "TT小游戏平台", _this13._onNavigateSuccCb = null, _this13._onNavigateFailCb = null, 
        _this13._onMoreGamesModalCloseCb = null, _this13._videoRecorder = null, _this13._shareVideoPath = "", 
        _this13._isUseLocalToast = !0;
        return _this13;
    }
    _createClass2(TTPlatHelper, [ {
        key: "init",
        value: function init() {
            var _this14 = this;
            _get2(_getPrototypeOf2(TTPlatHelper.prototype), "init", this).call(this), this._plat && this._plat.onNavigateToMiniProgram && this._plat.onNavigateToMiniProgram(function(e) {
                0 === e.errCode || 1 === e.errCode ? "function" == typeof _this14._onNavigateSuccCb && _this14._onNavigateSuccCb() : "function" == typeof _this14._onNavigateFailCb && _this14._onNavigateFailCb();
            }), this._plat && this._plat.onMoreGamesModalClose && this._plat.onMoreGamesModalClose(function() {
                _this14._onNavigateSuccCb = null, _this14._onNavigateFailCb = null;
                var e = _this14._onMoreGamesModalCloseCb;
                _this14._onMoreGamesModalCloseCb = null, "function" == typeof e && e();
            });
        }
    }, {
        key: "exitApp",
        value: function exitApp() {
            this._plat && this._plat.exitApplication && this._plat.exitApplication();
        }
    }, {
        key: "canLoginOnline",
        value: function canLoginOnline() {
            return !1;
        }
    }, {
        key: "canSaveOnline",
        value: function canSaveOnline() {
            return !1;
        }
    }, {
        key: "showMoreGamesModal",
        value: function showMoreGamesModal(e, t, n) {
            "ios" !== this.getSysInfo().platform ? this._plat.showMoreGamesModal && (this._plat.showMoreGamesModal({
                appLaunchOptions: [],
                success: function success() {
                    adv_interface.reportShowAdv(FlowAdvType.MoreGame, PlatAdOnShowFlow.moreGame), doCallback$1(t);
                },
                fail: function fail(e) {
                    checkFunc(n) ? doCallback$1(n, e) : console.error("show more game modal fail:", e);
                }
            }), this._onMoreGamesModalCloseCb = e) : doCallback$1(n, "Not Support On Current Platform...");
        }
    }, {
        key: "startRecord",
        value: function startRecord() {
            var _this15 = this;
            this._videoRecorder || (this._videoRecorder = this._plat.getGameRecorderManager(), 
            this._videoRecorder.onStart(function(e) {
                console.log("start record and clear succ..."), _this15._shareVideoPath = "";
            }), this._videoRecorder.onStop(function(e) {
                console.log("stop record and save succ..."), _this15._videoRecorder.clipVideo({
                    path: e.videoPath,
                    timeRange: [ 25, 0 ],
                    success: function success(e) {
                        _this15._shareVideoPath = e.videoPath;
                    },
                    fail: function fail(e) {
                        console.error("clip video fail: ", e);
                    }
                });
            })), this._videoRecorder && this._videoRecorder.start({
                duration: 60
            });
        }
    }, {
        key: "pauseRecord",
        value: function pauseRecord() {
            this._videoRecorder && this._videoRecorder.pause();
        }
    }, {
        key: "resumeRecord",
        value: function resumeRecord() {
            this._videoRecorder && this._videoRecorder.resume();
        }
    }, {
        key: "stopRecord",
        value: function stopRecord() {
            this._videoRecorder && this._videoRecorder.stop();
        }
    }, {
        key: "getSavedVideoPath",
        value: function getSavedVideoPath() {
            return this._shareVideoPath;
        }
    } ]);
    return TTPlatHelper;
}(ExtPlatHelper);

var _PlatHelper = PlatBaseHelper, PlatHelper = new (_PlatHelper = _isQQPlatform() ? QQPlatHelper : _isTTPlatform() ? TTPlatHelper : _isOPPOPlatform() ? OPPOPlatHelper : _isVIVOPlatform() ? VIVOPlatHelper : _isWXPlatform() ? WXPlatHelper : WINPlatHelper)();

var TIMEOUT_OF_HTTPS_REQUEST = 1e4;

var _HttpsHelper = /* */ function() {
    function _HttpsHelper() {
        _classCallCheck2(this, _HttpsHelper);
        this._getServerTimeFunc = null;
    }
    _createClass2(_HttpsHelper, [ {
        key: "registerGetServerTimeFunc",
        value: function registerGetServerTimeFunc(e) {
            this._getServerTimeFunc = null, checkFunc(e) && (this._getServerTimeFunc = e);
        }
    }, {
        key: "_getServerTime",
        value: function _getServerTime() {
            return this._getServerTimeFunc ? this._getServerTimeFunc() : Date.now();
        }
    }, {
        key: "getJson",
        value: function getJson(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            this._doJsonRequest("GET", e, t, n, i);
        }
    }, {
        key: "sendJson",
        value: function sendJson(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            this._doJsonRequest("POST", e, t, n, i);
        }
    }, {
        key: "sendForm",
        value: function sendForm(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            this._doFormRequest("POST", e, t, n, i);
        }
    }, {
        key: "_doJsonRequest",
        value: function _doJsonRequest(e, t, n, i, a) {
            var o = this._createRequest(e, t, a);
            try {
                if (o.setRequestHeader("content-type", "application/json"), isObject$1(n)) for (var _e10 in n) {
                    o.setRequestHeader(_e10, n[_e10]);
                }
                i ? o.send(JSON.stringify(i)) : o.send(null);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                console.error(e), doCallback$1(a, !1, "未知错误，请检查错误输出");
            }
        }
    }, {
        key: "_doFormRequest",
        value: function _doFormRequest(e, t, n, i, a) {
            var o = this._createRequest(e, t, a);
            try {
                if (o.setRequestHeader("content-type", "application/x-www-form-urlencoded"), isObject$1(n)) for (var _e11 in n) {
                    o.setRequestHeader(_e11, n[_e11]);
                }
                if (i) {
                    var _e12 = null, _t8 = [];
                    for (var _e13 in i) {
                        _t8.push(encodeURIComponent(_e13) + "=" + encodeURIComponent(i[_e13]));
                    }
                    _t8.length > 0 && (_e12 = _t8.join("&").replace(/%20/g, "+")), o.send(_e12);
                } else o.send(null);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                console.error(e), doCallback$1(a, !1, "未知错误，请检查错误输出");
            }
        }
    }, {
        key: "_createRequest",
        value: function _createRequest(e, t, n) {
            return this._createBaseRequest(e, t, function(e, t) {
                e && t ? "json" === t ? doCallback$1(n, !0, JSON.parse(e)) : doCallback$1(n, !1, "返回数据格式错误") : doCallback$1(n, !1, "未知错误，请检查错误输出");
            });
        }
    }, {
        key: "_createBaseRequest",
        value: function _createBaseRequest(e, t, n) {
            if ("GET" !== e && "POST" !== e) return console.error("Https Err: Only Support GET or POST Way of Request, Way: ", e), 
            null;
            if (!checkString(t)) return console.error("Https Err: url Is Not Right, Url: ", t), 
            null;
            var i = null;
            return isLayaEngine() ? i = new Laya.HttpRequest()._http : isCocosEngine() && (i = new XMLHttpRequest()), 
            i && (t = -1 == t.indexOf("?") ? "{0}?timestamp={1}".format(t, Math.round(this._getServerTime() / 1e3).toString()) : t + "&timestamp=" + Math.round(this._getServerTime() / 1e3).toString(), 
            i.open(e, t, !0), console.log("req url:", t), i.onload = function() {
                if (checkFunc(n)) if (4 === i.readyState) {
                    if (i.status >= 200 && i.status < 300) {
                        if ("application/json" === i.getResponseHeader("content-type")) n(i.responseText, "json"); else {
                            var _e14 = !1;
                            try {
                                JSON.parse(i.responseText), _e14 = !0;
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                console.error(e);
                            }
                            n(i.responseText, _e14 ? "json" : "text");
                        }
                    } else n();
                } else n();
            }, i.timeout = TIMEOUT_OF_HTTPS_REQUEST, i.ontimeout = function(e) {
                console.error(e), doCallback$1(n);
            }, i.onerror = function(e) {
                console.error(e), doCallback$1(n);
            }), i;
        }
    } ]);
    return _HttpsHelper;
}();

var HttpsHelper = new _HttpsHelper(), chrsz = 8;

function hex_md5(e) {
    return binl2hex(core_md5(str2binl(e), e.length * chrsz));
}

function core_md5(e, t) {
    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
    for (var n = 1732584193, i = -271733879, a = -1732584194, o = 271733878, s = 0; s < e.length; s += 16) {
        var r = n, l = i, d = a, h = o;
        n = md5_ff(n, i, a, o, e[s + 0], 7, -680876936), o = md5_ff(o, n, i, a, e[s + 1], 12, -389564586), 
        a = md5_ff(a, o, n, i, e[s + 2], 17, 606105819), i = md5_ff(i, a, o, n, e[s + 3], 22, -1044525330), 
        n = md5_ff(n, i, a, o, e[s + 4], 7, -176418897), o = md5_ff(o, n, i, a, e[s + 5], 12, 1200080426), 
        a = md5_ff(a, o, n, i, e[s + 6], 17, -1473231341), i = md5_ff(i, a, o, n, e[s + 7], 22, -45705983), 
        n = md5_ff(n, i, a, o, e[s + 8], 7, 1770035416), o = md5_ff(o, n, i, a, e[s + 9], 12, -1958414417), 
        a = md5_ff(a, o, n, i, e[s + 10], 17, -42063), i = md5_ff(i, a, o, n, e[s + 11], 22, -1990404162), 
        n = md5_ff(n, i, a, o, e[s + 12], 7, 1804603682), o = md5_ff(o, n, i, a, e[s + 13], 12, -40341101), 
        a = md5_ff(a, o, n, i, e[s + 14], 17, -1502002290), n = md5_gg(n, i = md5_ff(i, a, o, n, e[s + 15], 22, 1236535329), a, o, e[s + 1], 5, -165796510), 
        o = md5_gg(o, n, i, a, e[s + 6], 9, -1069501632), a = md5_gg(a, o, n, i, e[s + 11], 14, 643717713), 
        i = md5_gg(i, a, o, n, e[s + 0], 20, -373897302), n = md5_gg(n, i, a, o, e[s + 5], 5, -701558691), 
        o = md5_gg(o, n, i, a, e[s + 10], 9, 38016083), a = md5_gg(a, o, n, i, e[s + 15], 14, -660478335), 
        i = md5_gg(i, a, o, n, e[s + 4], 20, -405537848), n = md5_gg(n, i, a, o, e[s + 9], 5, 568446438), 
        o = md5_gg(o, n, i, a, e[s + 14], 9, -1019803690), a = md5_gg(a, o, n, i, e[s + 3], 14, -187363961), 
        i = md5_gg(i, a, o, n, e[s + 8], 20, 1163531501), n = md5_gg(n, i, a, o, e[s + 13], 5, -1444681467), 
        o = md5_gg(o, n, i, a, e[s + 2], 9, -51403784), a = md5_gg(a, o, n, i, e[s + 7], 14, 1735328473), 
        n = md5_hh(n, i = md5_gg(i, a, o, n, e[s + 12], 20, -1926607734), a, o, e[s + 5], 4, -378558), 
        o = md5_hh(o, n, i, a, e[s + 8], 11, -2022574463), a = md5_hh(a, o, n, i, e[s + 11], 16, 1839030562), 
        i = md5_hh(i, a, o, n, e[s + 14], 23, -35309556), n = md5_hh(n, i, a, o, e[s + 1], 4, -1530992060), 
        o = md5_hh(o, n, i, a, e[s + 4], 11, 1272893353), a = md5_hh(a, o, n, i, e[s + 7], 16, -155497632), 
        i = md5_hh(i, a, o, n, e[s + 10], 23, -1094730640), n = md5_hh(n, i, a, o, e[s + 13], 4, 681279174), 
        o = md5_hh(o, n, i, a, e[s + 0], 11, -358537222), a = md5_hh(a, o, n, i, e[s + 3], 16, -722521979), 
        i = md5_hh(i, a, o, n, e[s + 6], 23, 76029189), n = md5_hh(n, i, a, o, e[s + 9], 4, -640364487), 
        o = md5_hh(o, n, i, a, e[s + 12], 11, -421815835), a = md5_hh(a, o, n, i, e[s + 15], 16, 530742520), 
        n = md5_ii(n, i = md5_hh(i, a, o, n, e[s + 2], 23, -995338651), a, o, e[s + 0], 6, -198630844), 
        o = md5_ii(o, n, i, a, e[s + 7], 10, 1126891415), a = md5_ii(a, o, n, i, e[s + 14], 15, -1416354905), 
        i = md5_ii(i, a, o, n, e[s + 5], 21, -57434055), n = md5_ii(n, i, a, o, e[s + 12], 6, 1700485571), 
        o = md5_ii(o, n, i, a, e[s + 3], 10, -1894986606), a = md5_ii(a, o, n, i, e[s + 10], 15, -1051523), 
        i = md5_ii(i, a, o, n, e[s + 1], 21, -2054922799), n = md5_ii(n, i, a, o, e[s + 8], 6, 1873313359), 
        o = md5_ii(o, n, i, a, e[s + 15], 10, -30611744), a = md5_ii(a, o, n, i, e[s + 6], 15, -1560198380), 
        i = md5_ii(i, a, o, n, e[s + 13], 21, 1309151649), n = md5_ii(n, i, a, o, e[s + 4], 6, -145523070), 
        o = md5_ii(o, n, i, a, e[s + 11], 10, -1120210379), a = md5_ii(a, o, n, i, e[s + 2], 15, 718787259), 
        i = md5_ii(i, a, o, n, e[s + 9], 21, -343485551), n = safe_add(n, r), i = safe_add(i, l), 
        a = safe_add(a, d), o = safe_add(o, h);
    }
    return Array(n, i, a, o);
}

function md5_cmn(e, t, n, i, a, o) {
    return safe_add(bit_rol(safe_add(safe_add(t, e), safe_add(i, o)), a), n);
}

function md5_ff(e, t, n, i, a, o, s) {
    return md5_cmn(t & n | ~t & i, e, t, a, o, s);
}

function md5_gg(e, t, n, i, a, o, s) {
    return md5_cmn(t & i | n & ~i, e, t, a, o, s);
}

function md5_hh(e, t, n, i, a, o, s) {
    return md5_cmn(t ^ n ^ i, e, t, a, o, s);
}

function md5_ii(e, t, n, i, a, o, s) {
    return md5_cmn(n ^ (t | ~i), e, t, a, o, s);
}

function safe_add(e, t) {
    var n = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
}

function bit_rol(e, t) {
    return e << t | e >>> 32 - t;
}

function str2binl(e) {
    for (var t = Array(), n = (1 << chrsz) - 1, i = 0; i < e.length * chrsz; i += chrsz) {
        t[i >> 5] |= (e.charCodeAt(i / chrsz) & n) << i % 32;
    }
    return t;
}

function binl2hex(e) {
    for (var t = "", n = 0; n < 4 * e.length; n++) {
        t += "0123456789abcdef".charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(e[n >> 2] >> n % 4 * 8 & 15);
    }
    return t;
}

var LZString = function() {
    var e = String.fromCharCode, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", i = {};
    function getBaseValue(e, t) {
        if (!i[e]) {
            i[e] = {};
            for (var n = 0; n < e.length; n++) {
                i[e][e.charAt(n)] = n;
            }
        }
        return i[e][t];
    }
    var a = {
        compressToBase64: function compressToBase64(e) {
            if (null == e) return "";
            var n = a._compress(e, 6, function(e) {
                return t.charAt(e);
            });
            switch (n.length % 4) {
              default:
              case 0:
                return n;

              case 1:
                return n + "===";

              case 2:
                return n + "==";

              case 3:
                return n + "=";
            }
        },
        decompressFromBase64: function decompressFromBase64(e) {
            return null == e ? "" : "" == e ? null : a._decompress(e.length, 32, function(n) {
                return getBaseValue(t, e.charAt(n));
            });
        },
        compressToUTF16: function compressToUTF16(t) {
            return null == t ? "" : a._compress(t, 15, function(t) {
                return e(t + 32);
            }) + " ";
        },
        decompressFromUTF16: function decompressFromUTF16(e) {
            return null == e ? "" : "" == e ? null : a._decompress(e.length, 16384, function(t) {
                return e.charCodeAt(t) - 32;
            });
        },
        compressToUint8Array: function compressToUint8Array(e) {
            for (var t = a.compress(e), n = new Uint8Array(2 * t.length), i = 0, o = t.length; i < o; i++) {
                var s = t.charCodeAt(i);
                n[2 * i] = s >>> 8, n[2 * i + 1] = s % 256;
            }
            return n;
        },
        decompressFromUint8Array: function decompressFromUint8Array(t) {
            if (null == t) return a.decompress(t);
            for (var n = new Array(t.length / 2), i = 0, o = n.length; i < o; i++) {
                n[i] = 256 * t[2 * i] + t[2 * i + 1];
            }
            var s = [];
            return n.forEach(function(t) {
                s.push(e(t));
            }), a.decompress(s.join(""));
        },
        compressToEncodedURIComponent: function compressToEncodedURIComponent(e) {
            return null == e ? "" : a._compress(e, 6, function(e) {
                return n.charAt(e);
            });
        },
        decompressFromEncodedURIComponent: function decompressFromEncodedURIComponent(e) {
            return null == e ? "" : "" == e ? null : (e = e.replace(/ /g, "+"), a._decompress(e.length, 32, function(t) {
                return getBaseValue(n, e.charAt(t));
            }));
        },
        compress: function compress(t) {
            return a._compress(t, 16, function(t) {
                return e(t);
            });
        },
        _compress: function _compress(e, t, n) {
            if (null == e) return "";
            var i, a, o, s = {}, r = {}, l = "", d = "", h = "", c = 2, u = 3, p = 2, _ = [], g = 0, f = 0;
            for (o = 0; o < e.length; o += 1) {
                if (l = e.charAt(o), Object.prototype.hasOwnProperty.call(s, l) || (s[l] = u++, 
                r[l] = !0), d = h + l, Object.prototype.hasOwnProperty.call(s, d)) h = d; else {
                    if (Object.prototype.hasOwnProperty.call(r, h)) {
                        if (h.charCodeAt(0) < 256) {
                            for (i = 0; i < p; i++) {
                                g <<= 1, f == t - 1 ? (f = 0, _.push(n(g)), g = 0) : f++;
                            }
                            for (a = h.charCodeAt(0), i = 0; i < 8; i++) {
                                g = g << 1 | 1 & a, f == t - 1 ? (f = 0, _.push(n(g)), g = 0) : f++, a >>= 1;
                            }
                        } else {
                            for (a = 1, i = 0; i < p; i++) {
                                g = g << 1 | a, f == t - 1 ? (f = 0, _.push(n(g)), g = 0) : f++, a = 0;
                            }
                            for (a = h.charCodeAt(0), i = 0; i < 16; i++) {
                                g = g << 1 | 1 & a, f == t - 1 ? (f = 0, _.push(n(g)), g = 0) : f++, a >>= 1;
                            }
                        }
                        0 == --c && (c = Math.pow(2, p), p++), delete r[h];
                    } else for (a = s[h], i = 0; i < p; i++) {
                        g = g << 1 | 1 & a, f == t - 1 ? (f = 0, _.push(n(g)), g = 0) : f++, a >>= 1;
                    }
                    0 == --c && (c = Math.pow(2, p), p++), s[d] = u++, h = String(l);
                }
            }
            if ("" !== h) {
                if (Object.prototype.hasOwnProperty.call(r, h)) {
                    if (h.charCodeAt(0) < 256) {
                        for (i = 0; i < p; i++) {
                            g <<= 1, f == t - 1 ? (f = 0, _.push(n(g)), g = 0) : f++;
                        }
                        for (a = h.charCodeAt(0), i = 0; i < 8; i++) {
                            g = g << 1 | 1 & a, f == t - 1 ? (f = 0, _.push(n(g)), g = 0) : f++, a >>= 1;
                        }
                    } else {
                        for (a = 1, i = 0; i < p; i++) {
                            g = g << 1 | a, f == t - 1 ? (f = 0, _.push(n(g)), g = 0) : f++, a = 0;
                        }
                        for (a = h.charCodeAt(0), i = 0; i < 16; i++) {
                            g = g << 1 | 1 & a, f == t - 1 ? (f = 0, _.push(n(g)), g = 0) : f++, a >>= 1;
                        }
                    }
                    0 == --c && (c = Math.pow(2, p), p++), delete r[h];
                } else for (a = s[h], i = 0; i < p; i++) {
                    g = g << 1 | 1 & a, f == t - 1 ? (f = 0, _.push(n(g)), g = 0) : f++, a >>= 1;
                }
                0 == --c && (c = Math.pow(2, p), p++);
            }
            for (a = 2, i = 0; i < p; i++) {
                g = g << 1 | 1 & a, f == t - 1 ? (f = 0, _.push(n(g)), g = 0) : f++, a >>= 1;
            }
            for (;;) {
                if (g <<= 1, f == t - 1) {
                    _.push(n(g));
                    break;
                }
                f++;
            }
            return _.join("");
        },
        decompress: function decompress(e) {
            return null == e ? "" : "" == e ? null : a._decompress(e.length, 32768, function(t) {
                return e.charCodeAt(t);
            });
        },
        _decompress: function _decompress(t, n, i) {
            var a, o, s, r, l, d, h, c = [], u = 4, p = 4, _ = 3, g = "", f = [], m = {
                val: i(0),
                position: n,
                index: 1
            };
            for (a = 0; a < 3; a += 1) {
                c[a] = a;
            }
            for (s = 0, l = Math.pow(2, 2), d = 1; d != l; ) {
                r = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = n, m.val = i(m.index++)), 
                s |= (r > 0 ? 1 : 0) * d, d <<= 1;
            }
            switch (s) {
              case 0:
                for (s = 0, l = Math.pow(2, 8), d = 1; d != l; ) {
                    r = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = n, m.val = i(m.index++)), 
                    s |= (r > 0 ? 1 : 0) * d, d <<= 1;
                }
                h = e(s);
                break;

              case 1:
                for (s = 0, l = Math.pow(2, 16), d = 1; d != l; ) {
                    r = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = n, m.val = i(m.index++)), 
                    s |= (r > 0 ? 1 : 0) * d, d <<= 1;
                }
                h = e(s);
                break;

              case 2:
                return "";
            }
            for (c[3] = h, o = h, f.push(h); ;) {
                if (m.index > t) return "";
                for (s = 0, l = Math.pow(2, _), d = 1; d != l; ) {
                    r = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = n, m.val = i(m.index++)), 
                    s |= (r > 0 ? 1 : 0) * d, d <<= 1;
                }
                switch (h = s) {
                  case 0:
                    for (s = 0, l = Math.pow(2, 8), d = 1; d != l; ) {
                        r = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = n, m.val = i(m.index++)), 
                        s |= (r > 0 ? 1 : 0) * d, d <<= 1;
                    }
                    c[p++] = e(s), h = p - 1, u--;
                    break;

                  case 1:
                    for (s = 0, l = Math.pow(2, 16), d = 1; d != l; ) {
                        r = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = n, m.val = i(m.index++)), 
                        s |= (r > 0 ? 1 : 0) * d, d <<= 1;
                    }
                    c[p++] = e(s), h = p - 1, u--;
                    break;

                  case 2:
                    return f.join("");
                }
                if (0 == u && (u = Math.pow(2, _), _++), c[h]) g = c[h]; else {
                    if (h !== p) return null;
                    g = o + o.charAt(0);
                }
                f.push(g), c[p++] = o + g.charAt(0), o = g, 0 == --u && (u = Math.pow(2, _), _++);
            }
        }
    };
    return a;
}();

var MAX_TRY_TIMES = 3;

var _NetHelper = /* */ function() {
    function _NetHelper() {
        _classCallCheck2(this, _NetHelper);
        this._baseUrls = {
            hlsdk: "https://api.game.hnquyou.com"
        }, this._netType = null, this._initedCbs = [];
    }
    _createClass2(_NetHelper, [ {
        key: "init",
        value: function init() {
            var _this16 = this;
            if (PlatHelper.getPlat() && PlatHelper.getPlat().onNetworkStatusChange) {
                PlatHelper.getPlat().onNetworkStatusChange(function(e) {
                    var t = _this16._netType;
                    _this16._netType = e.networkType, e.isConnected || (_this16._netType = "none"), 
                    "none" === _this16._netType ? Event.dispatchEvent(EventName.EN_NET_CONNECTION_LOST) : "none" === t && Event.dispatchEvent(EventName.EN_NET_CONNECTION_RECOVER);
                });
                var e = function e() {
                    for (var _e15 = 0; _e15 < _this16._initedCbs.length; _e15++) {
                        _this16._initedCbs[_e15](_this16._netType);
                    }
                    _this16._initedCbs = [];
                };
                PlatHelper.getPlat().getNetworkType && PlatHelper.getPlat().getNetworkType({
                    success: function success(t) {
                        _this16._netType = t.networkType, e();
                    },
                    fail: function fail(t) {
                        _this16._netType = "none", e();
                    }
                });
            } else this._netType = "wifi";
        }
    }, {
        key: "getNetType",
        value: function getNetType(e) {
            "function" == typeof e && (null !== this._netType ? e(this._netType) : this._initedCbs.push(e));
        }
    }, {
        key: "isConnected",
        value: function isConnected(e) {
            "function" == typeof e && (null !== this._netType ? e("none" !== this._netType) : this._initedCbs.push(function(t) {
                e("none" !== t);
            }));
        }
    }, {
        key: "_getTag",
        value: function _getTag() {
            return "" === this._tag && (this._tag = "hlsdk"), this._tag;
        }
    }, {
        key: "_makeUrl",
        value: function _makeUrl(e, t) {
            return void 0 !== this._baseUrls[e] ? this._baseUrls[e] + t : "";
        }
    }, {
        key: "reqGetServerTime",
        value: function reqGetServerTime(e) {
            this._prepareRequest("sendForm", "hlsdk", "/sdk/v2/time", null, e);
        }
    }, {
        key: "reqLogin",
        value: function reqLogin(e, t) {
            var n = {
                code: e,
                appid: this._getAppID()
            };
            PlatHelper.isQQPlatform() ? (n.sign = hex_md5("appid=" + this._getAppID() + "&code=" + e + "&path=/sdk/v2/qq/login"), 
            this._prepareRequest("sendForm", "hlsdk", "/sdk/v2/qq/login", n, t)) : PlatHelper.isTTPlatform() ? (n.sign = hex_md5("appid=" + this._getAppID() + "&code=" + e + "&path=/sdk/v2/tt/login"), 
            this._prepareRequest("sendForm", "hlsdk", "/sdk/v2/tt/login", n, t)) : (n.sign = hex_md5("appid=" + this._getAppID() + "&code=" + e + "&path=/sdk/v2/wx/login"), 
            this._prepareRequest("sendForm", "hlsdk", "/sdk/v2/wx/login", n, t));
        }
    }, {
        key: "reqIsEnterRealGame",
        value: function reqIsEnterRealGame(e, t) {
            var n = {
                appid: this._getAppID(),
                time: Math.floor(ServerInfo.getServerTime() / 1e3),
                version: e
            };
            n.sign = hex_md5("appid=" + n.appid + "&path=/sdk/v2/config/quickly&time=" + n.time), 
            this._prepareRequest("sendForm", "hlsdk", "/sdk/v2/config/quickly", n, function(e) {
                if (e && "200" === e.status) try {
                    e.result = JSON.parse(LZString.decompressFromBase64(e.result));
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    console.error("parse result from /sdk/v2/config/quickly fail: ", t), e = null;
                }
                doCallback$1(t, e);
            });
        }
    }, {
        key: "reqGetAdvList",
        value: function reqGetAdvList(e) {
            var t = {
                appid: this._getAppID(),
                time: Math.floor(ServerInfo.getServerTime() / 1e3)
            };
            t.sign = hex_md5("appid=" + t.appid + "&path=/sdk/v2/ad&time=" + t.time), this._prepareRequest("sendForm", "hlsdk", "/sdk/v2/ad", t, e);
        }
    }, {
        key: "reqGetWebConfig",
        value: function reqGetWebConfig(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = {
                appid: this._getAppID(),
                time: Math.floor(ServerInfo.getServerTime() / 1e3),
                version: e
            };
            t && (i.openid = t), i.sign = hex_md5("appid=" + i.appid + "&path=/sdk/v2/config/info&time=" + i.time), 
            this._prepareRequest("sendForm", "hlsdk", "/sdk/v2/config/info", i, function(e) {
                if (e && "200" === e.status) try {
                    e.result = JSON.parse(LZString.decompressFromBase64(e.result));
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    console.error("parse result from /sdk/v2/config/info fail: ", t), e = null;
                }
                doCallback$1(n, e);
            });
        }
    }, {
        key: "_prepareRequest",
        value: function _prepareRequest(e, t, n, i, a) {
            var o = this;
            this.isConnected(function(s) {
                s ? o._doRequest(o._makeObj(e, t, n, i, a)) : "function" == typeof a && a(null);
            });
        }
    }, {
        key: "_makeObj",
        value: function _makeObj(e, t, n, i, a) {
            return {
                way: e,
                key: t,
                path: n,
                data: i,
                cb: a,
                try_times: 0
            };
        }
    }, {
        key: "_doRequest",
        value: function _doRequest(e) {
            if (e) {
                var t = this;
                var n = function n(_n6, i) {
                    if (_n6) {
                        if ("function" == typeof e.cb) {
                            var _t9 = e.cb;
                            e.cb = null, _t9(i);
                        }
                    } else if (console.log("Request {0} Fail, Reason: {1}".format(e.path, i)), e.try_times >= MAX_TRY_TIMES) {
                        if ("function" == typeof e.cb) {
                            var _t10 = e.cb;
                            e.cb = null, _t10(null);
                        }
                    } else t._doRequest(e);
                };
                e.try_times += 1;
                var i = {
                    appId: this._getAppID()
                };
                "sendJson" === e.way ? HttpsHelper.sendJson(this._makeUrl(e.key, e.path), i, e.data, n) : "getJson" === e.way ? HttpsHelper.getJson(this._makeUrl(e.key, e.path), i, e.data, n) : "sendForm" === e.way ? HttpsHelper.sendForm(this._makeUrl(e.key, e.path), i, e.data, n) : "sendProto" === e.way ? HttpsHelper.sendProto(this._makeUrl(e.key, e.path), i, e.data, n) : (console.error("Do Not Support This Kind Of Request Right Now, Way: {0}".format(e.way)), 
                n(!1, null));
            }
        }
    }, {
        key: "_getAppID",
        value: function _getAppID() {
            return PlatHelper.isQQPlatform() ? PlatIDs.qqAppID : PlatHelper.isTTPlatform() ? PlatIDs.ttAppID : PlatHelper.isOPPOPlatform() ? PlatIDs.oppoAppID : PlatHelper.isVIVOPlatform() ? PlatIDs.vivoAppID : PlatHelper.isWXPlatform() ? PlatIDs.wxAppID : checkString(PlatIDs.winAppID) ? PlatIDs.winAppID : PlatIDs.wxAppID;
        }
    } ]);
    return _NetHelper;
}();

var NetHelper = new _NetHelper(), TAG_OF_SCHEDULE_SERVER_TIME = "Server_Time_Tick";

var _ServerInfo = /* */ function() {
    function _ServerInfo() {
        _classCallCheck2(this, _ServerInfo);
        this._loaded = !1, this._serverTime = 0, this._startedAppTime = 0, this._startedServerTime = 0;
    }
    _createClass2(_ServerInfo, [ {
        key: "reLoad",
        value: function reLoad(e) {
            var _this17 = this;
            PlatHelper.canLoginOnline() ? (this.unregisterServerTime(), NetHelper.reqGetServerTime(function(t) {
                t && "200" === t.status ? (_this17._loaded = !0, _this17.registerServerTime(Math.floor(parseInt(t.time_stamp, 10) / 1e3)), 
                doCallback$1(e)) : Event.dispatchEvent(EventName.EN_SYSTEM_ERROR);
            })) : doCallback$1(e);
        }
    }, {
        key: "registerServerTime",
        value: function registerServerTime(e) {
            console.log("server time: ", e), this.unregisterServerTime(), this._startedAppTime = Date.now(), 
            this._serverTime = 1e3 * e, this._startedServerTime = this._serverTime, Scheduler.schedule(TAG_OF_SCHEDULE_SERVER_TIME, function() {
                this._loaded && (this._serverTime = this._startedServerTime + Date.now() - this._startedAppTime);
            }, !0);
        }
    }, {
        key: "unregisterServerTime",
        value: function unregisterServerTime() {
            this._loaded && (this._loaded = !1, this._serverTime = 0, this._startedAppTime = 0, 
            this._startedServerTime = 0, Scheduler.unschedule(TAG_OF_SCHEDULE_SERVER_TIME));
        }
    }, {
        key: "getServerTime",
        value: function getServerTime() {
            return this._loaded ? this._serverTime : Date.now();
        }
    }, {
        key: "getServerDate",
        value: function getServerDate() {
            return this._loaded ? new Date(this._serverTime) : new Date();
        }
    }, {
        key: "getCurServerDayOfWeek",
        value: function getCurServerDayOfWeek() {
            var e = this.getServerDate().getDay();
            return 0 === e && (e = 7), e;
        }
    }, {
        key: "getCurServerDayOfMonth",
        value: function getCurServerDayOfMonth() {
            return this.getServerDate().getDate();
        }
    }, {
        key: "getCurServerDayOfYear",
        value: function getCurServerDayOfYear() {
            var e = this.getServerDate(), t = new Date(e.getFullYear(), 0, 0), n = e - t + 60 * (t.getTimezoneOffset() - e.getTimezoneOffset()) * 1e3;
            return Math.floor(n / 864e5);
        }
    }, {
        key: "getCurServerWeekOfYear",
        value: function getCurServerWeekOfYear() {
            var e = this.getServerDate(), t = new Date(e.valueOf()), n = (e.getDay() + 6) % 7;
            t.setDate(t.getDate() - n + 3);
            var i = t.valueOf();
            return t.setMonth(0, 1), 4 !== t.getDay() && t.setMonth(0, 1 + (4 - t.getDay() + 7) % 7), 
            1 + Math.ceil((i - t) / 6048e5);
        }
    } ]);
    return _ServerInfo;
}();

var ServerInfo = new _ServerInfo();

var ShareBase = /* */ function() {
    function ShareBase() {
        _classCallCheck2(this, ShareBase);
        this._inited = !1, this._shareFailTips = null, this._sharingSceneInfo = null, this._minDurationBetweenShare = 3e3;
    }
    _createClass2(ShareBase, [ {
        key: "init",
        value: function init() {
            var _this18 = this;
            this._inited || (this._inited = !0, Switch.getMinDurationBetweenShare(function(e) {
                this._minDurationBetweenShare = e;
            }.bind(this)), this.isSupportCallback() || Event.addEventListerner(EventName.EN_APP_ONSHOW, function() {
                Scheduler.schedule("Auto_Share_Callback", function() {
                    if (console.log("Auto_Share_Callback"), this._sharingSceneInfo) {
                        var e = this._checkShareResult(this._sharingSceneInfo);
                        "function" == typeof this._sharingSceneInfo.cb && this._sharingSceneInfo.cb(e), 
                        !e && this._sharingSceneInfo.showFailTips && PlatHelper.showRandomToast(this._getShareFailTips()), 
                        this._sharingSceneInfo = null;
                    }
                }.bind(this), !1, 10, 0);
            }.bind(this)), PlatHelper.getPlat() && PlatHelper.getPlat().showShareMenu && this._getOnMenuShareFunc(function(e) {
                (function(e) {
                    e && (PlatHelper.getPlat().showShareMenu({
                        withShareTicket: !0
                    }), e(function(e) {
                        var t = _this18._getDoShareCfg(_this18._getShareInfo(ShareScene.SS_SYSTEM_MENU));
                        return t ? _this18._makeAndSaveShareInfo(ShareScene.SS_SYSTEM_MENU, null, t, null, !1, null) : {};
                    }));
                })(e);
            }));
        }
    }, {
        key: "isSupport",
        value: function isSupport() {
            return !1;
        }
    }, {
        key: "isSupportCallback",
        value: function isSupportCallback() {
            return !1;
        }
    }, {
        key: "isSharing",
        value: function isSharing() {
            return null !== this._sharingSceneInfo;
        }
    }, {
        key: "share",
        value: function share(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            this._checkString(e) ? this.isSupport() ? this._doShare(e, null, t, n, i) : "function" == typeof i && i(PlatHelper.isWINPlatform()) : "function" == typeof i && i(!1);
        }
    }, {
        key: "shareVideo",
        value: function shareVideo(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        }
    }, {
        key: "getShareInfo",
        value: function getShareInfo(e) {
            return this._getShareInfo(e);
        }
    }, {
        key: "getDoShareCfg",
        value: function getDoShareCfg(e) {
            return this._getDoShareCfg(e);
        }
    }, {
        key: "_getShareInfo",
        value: function _getShareInfo(e) {
            return ShareSceneCfgs[e] ? ShareSceneCfgs[e] : null;
        }
    }, {
        key: "_getDoShareCfg",
        value: function _getDoShareCfg(e) {
            if (!e || !e.cfgs) return null;
            var t = e.cfgs, n = 0;
            for (var _e16 = 0; _e16 < t.length; _e16++) {
                void 0 === t[_e16].weight && (t[_e16].weight = "10"), n += parseInt(t[_e16].weight, 10);
            }
            var i = 0;
            for (;0 === i; ) {
                i = random(n);
            }
            var a = 0, o = 0;
            for (var _e17 = 0; _e17 < t.length; _e17++) {
                if (a = o, o += parseInt(t[_e17].weight, 10), i >= a && i <= o) return t[_e17];
            }
            return null;
        }
    }, {
        key: "_doShare",
        value: function _doShare(e, t, n, i, a) {
            var o = this._getDoShareCfg(this._getShareInfo(e));
            if (o && this.isSupport()) {
                var s = this._getShareAppFunc();
                s && s(this._makeAndSaveShareInfo(e, t, o, n, i, a));
            } else "function" == typeof a && a(!1);
        }
    }, {
        key: "_makeAndSaveShareInfo",
        value: function _makeAndSaveShareInfo(e, t, n, i, a, o) {
            if (this._sharingSceneInfo = null, n) {
                this._sharingSceneInfo = {
                    scene: e,
                    customQueryObj: i,
                    showFailTips: a,
                    startTime: new Date().getTime(),
                    cb: o
                };
                var r = "scene={0}&tag={1}".format(e, n.tag);
                if (i) for (var _e18 in i) {
                    r += "&" + _e18 + "=" + i[_e18];
                }
                var s = this;
                return {
                    query: r,
                    success: function success() {
                        if (console.log("share success!!!"), s._sharingSceneInfo) {
                            var _e19 = s._checkShareResult(s._sharingSceneInfo);
                            !_e19 && s._sharingSceneInfo.showFailTips && PlatHelper.showRandomToast(s._getShareFailTips()), 
                            "function" == typeof s._sharingSceneInfo.cb && s._sharingSceneInfo.cb(_e19), s._sharingSceneInfo = null;
                        }
                    },
                    fail: function fail(e) {
                        console.log("share fail!!!"), s._sharingSceneInfo && (s._sharingSceneInfo.showFailTips && PlatHelper.showRandomToast(s._getShareFailTips(t)), 
                        "function" == typeof s._sharingSceneInfo.cb && s._sharingSceneInfo.cb(!1), s._sharingSceneInfo = null);
                    }
                };
            }
            return {};
        }
    }, {
        key: "_checkShareResult",
        value: function _checkShareResult(e) {
            return !!(e && new Date().getTime() - e.startTime >= this._minDurationBetweenShare);
        }
    }, {
        key: "_getShareFailTips",
        value: function _getShareFailTips() {
            return this._shareFailTips || (this._shareFailTips = [].concat(ShareFailTips)), 
            this._shareFailTips;
        }
    }, {
        key: "_getOnMenuShareFunc",
        value: function _getOnMenuShareFunc(e) {
            "function" == typeof e && e(null);
        }
    }, {
        key: "_getShareAppFunc",
        value: function _getShareAppFunc() {
            return null;
        }
    }, {
        key: "_checkString",
        value: function _checkString(e) {
            return "string" == typeof e && "" !== e;
        }
    } ]);
    return ShareBase;
}();

var UnSupportShare = /* */ function(_ShareBase) {
    _inherits2(UnSupportShare, _ShareBase);
    var _super8 = _createSuper2(UnSupportShare);
    function UnSupportShare() {
        _classCallCheck2(this, UnSupportShare);
        return _super8.call(this);
    }
    _createClass2(UnSupportShare, [ {
        key: "isSupport",
        value: function isSupport() {
            return !1;
        }
    } ]);
    return UnSupportShare;
}(ShareBase);

var WXShare = /* */ function(_ShareBase2) {
    _inherits2(WXShare, _ShareBase2);
    var _super9 = _createSuper2(WXShare);
    function WXShare() {
        var _this19;
        _classCallCheck2(this, WXShare);
        _this19 = _super9.call(this), _this19._cfgs = {};
        return _this19;
    }
    _createClass2(WXShare, [ {
        key: "isSupport",
        value: function isSupport() {
            return !0;
        }
    }, {
        key: "isSupportCallback",
        value: function isSupportCallback() {
            return !1;
        }
    }, {
        key: "_makeAndSaveShareInfo",
        value: function _makeAndSaveShareInfo(e, t, n, i, a, o) {
            var s = _get2(_getPrototypeOf2(WXShare.prototype), "_makeAndSaveShareInfo", this).call(this, e, t, n, i, a, o);
            return n && (s.title = n.title, s.imageUrl = n.img_url), s;
        }
    }, {
        key: "_getOnMenuShareFunc",
        value: function _getOnMenuShareFunc(e) {
            "function" == typeof e && (this.isSupport() ? PlatHelper.getPlat().aldOnShareAppMessage ? e(PlatHelper.getPlat().aldOnShareAppMessage) : PlatHelper.getPlat().uma && PlatHelper.getPlat().uma.onShareAppMessage ? e(PlatHelper.getPlat().uma.onShareAppMessage) : e(PlatHelper.getPlat().onShareAppMessage) : e(null));
        }
    }, {
        key: "_getShareAppFunc",
        value: function _getShareAppFunc() {
            return this.isSupport() ? PlatHelper.getPlat().aldShareAppMessage ? PlatHelper.getPlat().aldShareAppMessage : PlatHelper.getPlat().uma && PlatHelper.getPlat().uma.shareAppMessage ? PlatHelper.getPlat().uma.shareAppMessage : PlatHelper.getPlat().shareAppMessage : null;
        }
    } ]);
    return WXShare;
}(ShareBase);

var QQShare = /* */ function(_ShareBase3) {
    _inherits2(QQShare, _ShareBase3);
    var _super10 = _createSuper2(QQShare);
    function QQShare() {
        var _this20;
        _classCallCheck2(this, QQShare);
        _this20 = _super10.call(this), _this20._cfgs = {};
        return _this20;
    }
    _createClass2(QQShare, [ {
        key: "isSupport",
        value: function isSupport() {
            return !0;
        }
    }, {
        key: "isSupportCallback",
        value: function isSupportCallback() {
            return !0;
        }
    }, {
        key: "_makeAndSaveShareInfo",
        value: function _makeAndSaveShareInfo(e, t, n, i, a, o) {
            var s = _get2(_getPrototypeOf2(QQShare.prototype), "_makeAndSaveShareInfo", this).call(this, e, t, n, i, a, o);
            return n && (s.title = n.title, s.imageUrl = n.img_url), s;
        }
    }, {
        key: "_getOnMenuShareFunc",
        value: function _getOnMenuShareFunc(e) {
            "function" == typeof e && (this.isSupport() ? PlatHelper.getPlat().aldOnShareAppMessage ? e(PlatHelper.getPlat().aldOnShareAppMessage) : PlatHelper.getPlat().uma && PlatHelper.getPlat().uma.onShareAppMessage ? e(PlatHelper.getPlat().uma.onShareAppMessage) : e(PlatHelper.getPlat().onShareAppMessage) : e(null));
        }
    }, {
        key: "_getShareAppFunc",
        value: function _getShareAppFunc() {
            return this.isSupport() ? PlatHelper.getPlat().aldShareAppMessage ? PlatHelper.getPlat().aldShareAppMessage : PlatHelper.getPlat().uma && PlatHelper.getPlat().uma.shareAppMessage ? PlatHelper.getPlat().uma.shareAppMessage : PlatHelper.getPlat().shareAppMessage : null;
        }
    } ]);
    return QQShare;
}(ShareBase);

var TTShare = /* */ function(_ShareBase4) {
    _inherits2(TTShare, _ShareBase4);
    var _super11 = _createSuper2(TTShare);
    function TTShare() {
        var _this21;
        _classCallCheck2(this, TTShare);
        _this21 = _super11.call(this), _this21._cfgs = {};
        return _this21;
    }
    _createClass2(TTShare, [ {
        key: "isSupport",
        value: function isSupport() {
            return !0;
        }
    }, {
        key: "isSupportCallback",
        value: function isSupportCallback() {
            return !0;
        }
    }, {
        key: "shareVideo",
        value: function shareVideo(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            this._checkString(e) && this._checkString(t) ? this.isSupport() ? this._doShare(e, {
                videoPath: t
            }, n, i, a) : "function" == typeof a && a(!0) : "function" == typeof a && a(!1);
        }
    }, {
        key: "_makeAndSaveShareInfo",
        value: function _makeAndSaveShareInfo(e, t, n, i, a, o) {
            var _this22 = this;
            var s = _get2(_getPrototypeOf2(TTShare.prototype), "_makeAndSaveShareInfo", this).call(this, e, t, n, i, a, o);
            s.success = function(e) {
                if (console.log("share success!!!"), _this22._sharingSceneInfo) {
                    var _t11 = _this22._checkShareResult(_this22._sharingSceneInfo);
                    !_t11 && _this22._sharingSceneInfo.showFailTips && PlatHelper.showRandomToast(_this22._getShareFailTips()), 
                    "function" == typeof _this22._sharingSceneInfo.cb && _this22._sharingSceneInfo.cb(_t11, e.videoId), 
                    _this22._sharingSceneInfo = null;
                }
            }, n && (s.templateId = n.template_id), t && void 0 !== t.videoPath && (s.channel = "video", 
            s.extra = {
                videoPath: t.videoPath,
                withVideoId: !0
            }, void 0 !== t.videoTopics && (s.extra.videoTopics = t.videoTopics));
            var r = "", l = PlatHelper.getLaunchOptions();
            if (l && l.query) for (var _e20 in l.query) {
                var _t12 = l.query[_e20].toString();
                "sc" === _e20 && (_t12 = (parseInt(_t12) + 1).toString()), r += "" === r ? _e20 + "=" + _t12 : "&" + _e20 + "=" + _t12;
            }
            return "" !== r && (s.query = r), s;
        }
    }, {
        key: "_getOnMenuShareFunc",
        value: function _getOnMenuShareFunc(e) {
            "function" == typeof e && (this.isSupport() ? e(PlatHelper.getPlat().onShareAppMessage) : e(null));
        }
    }, {
        key: "_getShareAppFunc",
        value: function _getShareAppFunc() {
            return this.isSupport() ? PlatHelper.getPlat().shareAppMessage : null;
        }
    }, {
        key: "_getShareFailTips",
        value: function _getShareFailTips(e) {
            return e && void 0 !== e.videoPath ? (this._shareFailTips || (this._shareFailTips = [].concat(ShareVideoFailTips)), 
            this._shareFailTips) : _get2(_getPrototypeOf2(TTShare.prototype), "_makeAndSaveShareInfo", this).call(this);
        }
    } ]);
    return TTShare;
}(ShareBase);

var _Share = UnSupportShare, Share = new (_Share = _isQQPlatform() ? QQShare : _isTTPlatform() ? TTShare : _isWXPlatform() ? WXShare : UnSupportShare)(), _reseekAndCb = function _reseekAndCb(e, t) {
    if (e) if (PlatHelper.isWXPlatform()) e.currentTime > 0 && e.seek(0), doCallback$1(t, e); else {
        var n = function n() {
            e.offSeeked(n), doCallback$1(t, e);
        };
        e.currentTime > 0 ? (e.onSeeked(n), e.seek(0)) : doCallback$1(t, e);
    }
};

var AudioBaseHelper = /* */ function() {
    function AudioBaseHelper() {
        _classCallCheck2(this, AudioBaseHelper);
        this._isInited = !1, this._soundPlayLoopTimes = {}, this._playingSoundContexts = [], 
        this._backupSoundContexts = [], this._bgmUrl = "", this._bgmContext = null, this._bgmLoopState = !0, 
        this._isBgmStoped = !1, this._lastBgmPos = -1;
    }
    _createClass2(AudioBaseHelper, [ {
        key: "_init",
        value: function _init() {
            this._isInited || (this._isInited = !0, this._isSupportAudioContext() && (this._bgmContext = this._getAudioContext(), 
            this._bgmContext && (this._bgmContext._bgSrc = "")));
        }
    }, {
        key: "_isSupportAudioContext",
        value: function _isSupportAudioContext() {
            return !0;
        }
    }, {
        key: "_isSupportLocalUrl",
        value: function _isSupportLocalUrl() {
            return !0;
        }
    }, {
        key: "_canPlayByPlatContext",
        value: function _canPlayByPlatContext(e) {
            return !0;
        }
    }, {
        key: "_getAudioContext",
        value: function _getAudioContext() {
            var e = null;
            return this._isSupportAudioContext() && (this._backupSoundContexts.length > 0 ? (e = this._backupSoundContexts[0], 
            this._backupSoundContexts.splice(0, 1)) : (e = PlatHelper.getPlat().createInnerAudioContext()).onError(function(e) {
                console.log("play error:", e);
            })), this._playingSoundContexts.push(e), e;
        }
    }, {
        key: "_recycleAudioContext",
        value: function _recycleAudioContext(e) {
            var t = this._playingSoundContexts.indexOf(e);
            -1 !== t && this._playingSoundContexts.splice(t, 1), this._backupSoundContexts.push(e);
        }
    }, {
        key: "loadSound",
        value: function loadSound(e, t) {
            if (this._init(), checkString(e)) {
                if (this._canPlayByPlatContext(e)) {
                    if (this._isSupportAudioContext()) {
                        var n = this._getAudioContext();
                        if (n.src == e) return void _reseekAndCb(n, t);
                        n.src = e, n.loop = !1, n.autoplay = !1;
                        var i = function i() {
                            n.offCanplay(i), _reseekAndCb(n, t);
                        };
                        n.onCanplay(i);
                    } else doCallback$1(t, null);
                } else doCallback$1(t, null);
            } else doCallback$1(t, null);
        }
    }, {
        key: "loadMusic",
        value: function loadMusic(e, t) {
            var _this23 = this;
            if (this._init(), checkString(e)) {
                if (this._canPlayByPlatContext(e)) {
                    if (this._isSupportAudioContext()) {
                        if (this._bgmContext.src == e) return this._bgmContext._bgSrc = e, void _reseekAndCb(this._bgmContext, t);
                        this._bgmContext.src = e, this._bgmContext._bgSrc = e, this._bgmContext.autoplay = !1;
                        var n = function n() {
                            _this23._bgmContext.offCanplay(n), _reseekAndCb(_this23._bgmContext, t);
                        };
                        this._bgmContext.onCanplay(n);
                    } else doCallback$1(t, null);
                } else doCallback$1(t, null);
            } else doCallback$1(t, null);
        }
    }, {
        key: "playSound",
        value: function playSound(e) {
            var _this24 = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            if (this._init(), checkString(e)) if (this.stopSound(e), t = t <= 0 ? 99999 : t, 
            this._canPlayByPlatContext(e)) {
                if (this._isSupportAudioContext()) {
                    var n = generateString(32);
                    this.loadSound(e, function(i) {
                        if (i) {
                            var a = function a() {
                                void 0 !== _this24._soundPlayLoopTimes[e] && _this24._soundPlayLoopTimes[e].identify === n && _this24._soundPlayLoopTimes[e].loops > 1 ? (_this24._soundPlayLoopTimes[e].loops -= 1, 
                                i.seek(0), i.play()) : (void 0 !== _this24._soundPlayLoopTimes[e] && delete _this24._soundPlayLoopTimes[e], 
                                i._endCb = null, i.offEnded(a), _this24._recycleAudioContext(i));
                            };
                            t > 1 && (_this24._soundPlayLoopTimes[e] = {
                                loops: t,
                                identify: n
                            }), i.loop = !1, i.seek(0), i.play(), i._endCb = a, i.onEnded(a);
                        }
                    });
                } else this._playSoundByNative(e, t);
            } else this._playSoundByNative(e, t);
        }
    }, {
        key: "_playSoundByNative",
        value: function _playSoundByNative(e, t) {
            var n = generateString(32);
            t > 1 && (this._soundPlayLoopTimes[e] = {
                loops: t,
                identify: n
            }), "function" == typeof this.playSoundByNative && this.playSoundByNative(e, t);
        }
    }, {
        key: "stopSound",
        value: function stopSound(e) {
            if (checkString(e)) if (this._canPlayByPlatContext(e)) {
                if (this._isSupportAudioContext()) {
                    void 0 !== this._soundPlayLoopTimes[e] && delete this._soundPlayLoopTimes[e];
                    for (var t = 0; t < this._playingSoundContexts.length; t++) {
                        var n = this._playingSoundContexts[t];
                        n.src === e && (n._endCb && (n.offEnded(n._endCb), n._endCb = null), n.stop(), this._recycleAudioContext(n));
                    }
                } else this._stopSoundByNative(e);
            } else this._stopSoundByNative(e);
        }
    }, {
        key: "_stopSoundByNative",
        value: function _stopSoundByNative(e) {
            "function" == typeof this.stopSoundByNative && this.stopSoundByNative(e), void 0 !== this._soundPlayLoopTimes[e] && delete this._soundPlayLoopTimes[e];
        }
    }, {
        key: "stopAllSounds",
        value: function stopAllSounds() {
            for (var e in this._soundPlayLoopTimes) {
                this.stopSound(e);
            }
        }
    }, {
        key: "playMusic",
        value: function playMusic(e) {
            var _this25 = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            this._init(), checkString(e) && this.stopMusic(function() {
                if (_this25._isBgmStoped = !1, !_this25._canPlayByPlatContext(e)) return _this25._playMusicByNative(e, t), 
                void doCallback$1(n);
                _this25._isSupportAudioContext() ? _this25.loadMusic(e, function(e) {
                    _this25._isBgmStoped || e && (e.seek(0), e.play(), e.loop = t, doCallback$1(n));
                }) : (_this25._playMusicByNative(e, t), doCallback$1(n));
            });
        }
    }, {
        key: "_playMusicByNative",
        value: function _playMusicByNative(e, t) {
            this._bgmUrl = e, this._bgmLoopState = t, "function" == typeof this.playMusicByNative && this.playMusicByNative(e, t);
        }
    }, {
        key: "stopMusic",
        value: function stopMusic(e) {
            var _this26 = this;
            if (this._isBgmStoped = !0, this._lastBgmPos = -1, "" !== this._bgmUrl) this._stopMusicByNative(), 
            doCallback$1(e); else if (this._bgmContext && "" !== this._bgmContext._bgSrc) {
                var t = function t() {
                    _this26._bgmContext._bgSrc = "", doCallback$1(e);
                };
                if (0 !== this._bgmContext.volume) {
                    var _e21 = function _e21() {
                        _this26._bgmContext.offStop(_e21), t();
                    };
                    this._bgmContext.onStop(_e21), this._bgmContext.stop();
                } else this._bgmContext.stop(), t();
            } else doCallback$1(e);
        }
    }, {
        key: "_stopMusicByNative",
        value: function _stopMusicByNative() {
            this._bgmUrl = "", this._bgmLoopState = !0, "function" == typeof this.stopMusicByNative && this.stopMusicByNative();
        }
    }, {
        key: "resumeMusic",
        value: function resumeMusic() {
            this._bgmContext && "" !== this._bgmContext._bgSrc ? (this._bgmContext.volume = 1, 
            -1 != this._lastBgmPos && (this._bgmContext.seek(this._lastBgmPos), this._lastBgmPos = -1), 
            this._bgmContext.play()) : "" !== this._bgmUrl && ("function" == typeof this.resumeMusicByNative && this.resumeMusicByNative() || this.playMusic(this._bgmUrl, null, this._bgmLoopState));
        }
    }, {
        key: "pauseMusic",
        value: function pauseMusic() {
            this._bgmContext ? (this._bgmContext.pause(), this._lastBgmPos = this.getCurMusicTime(), 
            this._bgmContext.volume = 0) : "" !== this._bgmUrl && "function" == typeof this.pauseMusicByNative && this.pauseMusicByNative();
        }
    }, {
        key: "getCurMusicTime",
        value: function getCurMusicTime() {
            return this._bgmContext ? this._bgmContext.currentTime : 0;
        }
    }, {
        key: "isMusicUrlValid",
        value: function isMusicUrlValid() {
            return !!("" !== this._bgmUrl || this._bgmContext && "" !== this._bgmContext._bgSrc);
        }
    }, {
        key: "setMusicInfo",
        value: function setMusicInfo(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            this._bgmContext ? (this._bgmContext._bgSrc = e, this._bgmContext.loop = t) : (this._bgmUrl = e, 
            this._bgmLoopState = t);
        }
    } ]);
    return AudioBaseHelper;
}();

var C_MaxTimesOfCreateBanner = 3, C_MaxTimesOfCreateInterstitial = 3;

var AdvBase = /* */ function() {
    function AdvBase() {
        _classCallCheck2(this, AdvBase);
        this._bannerAdUnitIDIndex = -1, this._bannerAdObj = null, this._bannerAdObjs = [], 
        this._bannerAdObjIndex = -1, this._preloadBannerAdObj = null, this._preloadingBannerAd = !1, 
        this._failCountOfCreateBanner = 0, this._passedTimeFromLastRefresh = 0, this._bannerOnShow = !1, 
        this._isForceUnSupportedVideo = !1, this._videoAdUnitIDIndex = -1, this._videoAdIns = null, 
        this._interstitialAdUnitIDIndex = -1, this._interstitialAdObj = null, this._preloadInterstitialAdObj = null, 
        this._preloadingInterstitialAd = !1, this._failCountOfCreateInterstitial = 0, this._lastTimeOfShowInterstitialAd = 0, 
        this._gapOfEachInterstitialAd = 0, this._isCustomAdOnShow = {}, this._onLoadedCustomAdObjs = {};
    }
    _createClass2(AdvBase, [ {
        key: "isSupportBannerAd",
        value: function isSupportBannerAd() {
            return PlatAdUnitIDs.bannerAdUnitIDs.length > 0;
        }
    }, {
        key: "_stopSupportBannerAd",
        value: function _stopSupportBannerAd() {
            console.log("stop support banner ad..."), Event.dispatchEvent(EventName.EN_BANNER_NOT_SUPPORT_RIGHT_NOW);
        }
    }, {
        key: "isSupportVideoAd",
        value: function isSupportVideoAd() {
            return true;
        }
    }, {
        key: "_stopSupportVideoAd",
        value: function _stopSupportVideoAd() {
            console.log("stop support video ad..."), this._isForceUnSupportedVideo = !0, Event.dispatchEvent(EventName.EN_VIDEO_NOT_SUPPORT_RIGHT_NOW);
        }
    }, {
        key: "isSupportInterstitialAd",
        value: function isSupportInterstitialAd() {
            return PlatAdUnitIDs.interstitialAdUnitIDs.length > 0;
        }
    }, {
        key: "_stopSupportInterstitialAd",
        value: function _stopSupportInterstitialAd() {
            console.log("stop support interstitial ad..."), Event.dispatchEvent(EventName.EN_INTERSTITIAL_NOT_SUPPORT_RIGHT_NOW);
        }
    }, {
        key: "preload",
        value: function preload() {
            var _this27 = this;
            if (HLSDKLocalData._globalBannerCfg.preloadCount > 1 && this.isSupportBannerAd() && !PlatHelper.isWXPlatform()) {
                Event.addEventListerner(EventName.EN_APP_ONHIDE, function() {
                    _this27._bannerAdObj && (_this27._bannerAdObj._clickedTimes += 1);
                });
                var e = [];
                for (var _t13 = 0; _t13 < HLSDKLocalData._globalBannerCfg.preloadCount; _t13++) {
                    e.push(0);
                }
                var t = function t(n) {
                    _this27._doCreateBannerAdObj(null, function(e) {
                        console.log("preload a banner finished..."), _this27._bannerAdObjs.push(e);
                    }, function() {
                        e[n] += 1, e[n] < C_MaxTimesOfCreateBanner && (console.log("preload a banner failed..."), 
                        Scheduler.schedule("Delay_Recreate_Banner_" + n.toString(), function() {
                            console.log("retry preload banner..."), t(n);
                        }, !1, 200, 0));
                    });
                };
                for (var _e22 = 0; _e22 < HLSDKLocalData._globalBannerCfg.preloadCount; _e22++) {
                    t(_e22);
                }
            } else this._preloadBannerAd();
            this._preloadVideoAd(), 0 && this._preloadInterstitialAd(), this._lastTimeOfShowInterstitialAd = ServerInfo.getServerTime();
        }
    }, {
        key: "getOnShowBannerAdUnitIDs",
        value: function getOnShowBannerAdUnitIDs() {
            var e = [];
            return this._bannerAdObjs.length > 0 && this._bannerAdObjs.forEach(function(t) {
                e.push(t._adUnitId);
            }), 0 === e.length && this._bannerAdObj && e.push(this._bannerAdObj._adUnitId), 
            e;
        }
    }, {
        key: "createBannerAd",
        value: function createBannerAd(e, t, n, i) {
            var _this28 = this;
            if (!this.isSupportBannerAd()) return Event.dispatchEvent(EventName.EN_BANNER_NOT_SUPPORT_RIGHT_NOW), 
            doCallback$1(n, "Not Support..."), null;
            if (HLSDKLocalData._globalBannerCfg.preloadCount > 1) this._bannerAdObj && (this._hideBannerAd(), 
            this._bannerAdObj = null); else if (this._failCountOfCreateBanner = 0, this._bannerAdObj) {
                var _e23 = this._bannerAdObj;
                Scheduler.schedule("Destroy_Old_Banner", function() {
                    console.log("destory old banner..."), _this28._isSupportDelayDestroyBanner() && _e23 && _e23.destroy();
                }, !1, 60, 0), this._bannerAdObj = null;
            }
            return this._getBannerAdObj(e, t, n, function(e) {
                _this28._bannerOnShow || _this28._hideBannerAd(), doCallback$1(i);
            }), this._bannerOnShow && this._showBannerAd(), this._bannerAdObj;
        }
    }, {
        key: "_getBannerAdObj",
        value: function _getBannerAdObj(e, t, n, i) {
            var _this29 = this;
            var a = function a() {
                _this29._preloadingBannerAd = !0, Scheduler.schedule("Delay_Preload_Banner", function() {
                    console.log("Delay preload next banner..."), _this29._preloadBannerAd(function(e) {
                        _this29._preloadingBannerAd = !1, console.log("Delay preload create banner success"), 
                        HLSDKLocalData._globalBannerCfg.preloadCount > 1 && _this29._bannerAdObjs.push(e);
                    }, function() {
                        _this29._preloadingBannerAd = !1, console.log("Delay preload create banner fail");
                    });
                }, !1, 30, 0);
            }, o = null, s = !1;
            if (HLSDKLocalData._globalBannerCfg.preloadCount > 1) {
                if (this._bannerAdObjs.length < HLSDKLocalData._globalBannerCfg.preloadCount && (this._preloadingBannerAd || a()), 
                this._bannerAdObjs.length > 0) {
                    var _t14 = !1;
                    if (checkString(e)) for (var _n7 = 0; _n7 < this._bannerAdObjs.length; _n7++) {
                        if (this._bannerAdObjs[_n7]._adUnitId === e) {
                            _t14 = !0, o = this._bannerAdObjs[_n7];
                            break;
                        }
                    }
                    _t14 || (this._bannerAdObjIndex += 1, this._bannerAdObjIndex >= this._bannerAdObjs.length && (this._bannerAdObjIndex = 0), 
                    o = this._bannerAdObjs[this._bannerAdObjIndex]);
                }
            } else if (null != this._preloadBannerAdObj && HLSDKLocalData._globalBannerCfg.isLongstay ? o = this._preloadBannerAdObj : null != this._preloadBannerAdObj ? (o = this._preloadBannerAdObj, 
            this._preloadBannerAdObj = null, a()) : this._preloadingBannerAd || a(), o) s = !0, 
            console.log("use preloaded banner obj..."); else {
                var _e24 = this._convertToPlatformStyle(t);
                o = this._doCreateBannerAdObj(_e24, i, n);
            }
            if (o && this._isSupportResizeTwice()) {
                var _e25 = this._convertToPlatformStyle(t);
                o.style.left = _e25.left, o.style.top = _e25.top, o.style.width = _e25.width;
            }
            return this._bannerAdObj = o, o && (PlatHelper.isTTPlatform() ? s && i(o) : i(o)), 
            o;
        }
    }, {
        key: "_preloadBannerAd",
        value: function _preloadBannerAd(e, t) {
            var _this30 = this;
            this.isSupportBannerAd() ? this._isSupportPreloadBanner() ? null === this._preloadBannerAdObj ? this._doCreateBannerAdObj(null, function(t) {
                console.log("preload banner finished..."), _this30._preloadBannerAdObj = t, "function" == typeof e && e(t);
            }, t) : "function" == typeof e && e(this._preloadBannerAdObj) : doCallback$1(t, "Not Support Preload...") : doCallback$1(t, "Not Support...");
        }
    }, {
        key: "_doCreateBannerAdObj",
        value: function _doCreateBannerAdObj(e, t, n) {
            e || (e = this._getDefaultPlatformStyle()), this._bannerAdUnitIDIndex += 1, this._bannerAdUnitIDIndex >= PlatAdUnitIDs.bannerAdUnitIDs.length && (this._bannerAdUnitIDIndex = 0);
            var i = PlatHelper.getPlat().createBannerAd({
                adUnitId: PlatAdUnitIDs.bannerAdUnitIDs[this._bannerAdUnitIDIndex],
                style: e,
                adIntervals: 30
            });
            i._adUnitId = PlatAdUnitIDs.bannerAdUnitIDs[this._bannerAdUnitIDIndex], "function" == typeof t && (i.loadCb = t), 
            "function" == typeof n && (i.errCb = n);
            var a = this;
            var o = function o() {
                i.offLoad(o), adv_interface$1.reportLoadSuccAdv(FlowAdvType.Banner), i._startShowTime = 0, 
                i._totalShowTime = 0, i._clickedTimes = 0;
                var e = i.loadCb;
                i.loadCb = null, e && e(i);
            };
            i.onLoad(o);
            var s = function s(o) {
                i.offError(s), adv_interface$1.reportLoadFailAdv(FlowAdvType.Banner);
                var r = null;
                i && (a._bannerAdObj === i && (a._bannerAdObj = null), r = i.errCb, PlatHelper.isTTPlatform() && i.destroy(), 
                i = null), HLSDKLocalData._globalBannerCfg.preloadCount > 1 ? r ? r(o) : console.error(o) : (a._failCountOfCreateBanner += 1, 
                a._failCountOfCreateBanner >= C_MaxTimesOfCreateBanner ? r ? r(o) : console.error(o) : Scheduler.schedule("Delay_Recreate_Banner", function() {
                    console.log("retry preload banner..."), a._doCreateBannerAdObj(e, t, n);
                }, !1, 200, 0));
            };
            return i.onError(s), i;
        }
    }, {
        key: "showBannerAd",
        value: function showBannerAd() {
            adv_interface$1.reportShowAdv(FlowAdvType.Banner, PlatAdOnShowFlow.banner), this._bannerOnShow || this._showBannerAd();
        }
    }, {
        key: "_showBannerAd",
        value: function _showBannerAd() {
            if (this._bannerAdObj) {
                if (this._bannerOnShow = !0, this._bannerAdObj.show(), HLSDKLocalData._globalBannerCfg.isLongstay) {
                    var e = PlatHelper.getSysInfo();
                    this._bannerAdObj.style.left == e.screenWidth && (this._bannerAdObj.style.left = this._bannerAdObj.lastLeft);
                }
                this._bannerAdObj._startShowTime = Date.now();
            }
        }
    }, {
        key: "hideBannerAd",
        value: function hideBannerAd() {
            this._bannerOnShow && (this._bannerOnShow = !1, this._hideBannerAd());
        }
    }, {
        key: "_hideBannerAd",
        value: function _hideBannerAd() {
            var _this31 = this;
            if (this._bannerAdObj) if (HLSDKLocalData._globalBannerCfg.isLongstay) {
                var e = PlatHelper.getSysInfo();
                this._bannerAdObj.lastLeft = this._bannerAdObj.style.left, this._bannerAdObj.style.left = e.screenWidth;
            } else if (HLSDKLocalData._globalBannerCfg.preloadCount > 1) {
                if (0 !== this._bannerAdObj._startShowTime && (this._bannerAdObj._totalShowTime += Date.now() - this._bannerAdObj._startShowTime, 
                this._bannerAdObj._startShowTime = 0), console.log("banner: totalShowTime: ", this._bannerAdObj._totalShowTime, "clickedTimes: ", this._bannerAdObj._clickedTimes), 
                this._bannerAdObj._totalShowTime >= HLSDKLocalData._globalBannerCfg.maxShowTime && this._bannerAdObj._clickedTimes >= HLSDKLocalData._globalBannerCfg.maxClickedTimes) {
                    var _e26 = this._bannerAdObj;
                    Scheduler.schedule("Destroy_Old_Banner", function() {
                        console.log("destory old banner..."), _this31._isSupportDelayDestroyBanner() && _e26 && _e26.destroy();
                    }, !1, 60, 0), this._bannerAdObjs.splice(this._bannerAdObjs.indexOf(this._bannerAdObj), 1);
                } else this._bannerAdObj.hide();
            } else this._bannerAdObj.hide();
        }
    }, {
        key: "destroyBannerAdv",
        value: function destroyBannerAdv() {
            HLSDKLocalData._globalBannerCfg.preloadCount > 1 ? this.hideBannerAd() : this._bannerAdObj && (this._bannerAdObj.destroy(), 
            this._bannerAdObj = null);
        }
    }, {
        key: "createVideoAdv",
        value: function createVideoAdv(e, t, n) {
            var _this32 = this;
            if (PlatHelper.getPlat() && PlatHelper.getPlat().createRewardedVideoAd) {
                if (!this.isSupportVideoAd()) return Event.dispatchEvent(EventName.EN_VIDEO_NOT_SUPPORT_RIGHT_NOW), 
                void ("function" == typeof n && n("Stop Support..."));
                if (void 0 === n && (n = null), null !== this._videoAdIns) {
                    var i = this;
                    "function" == typeof t && (this._videoAdIns.closeCb = t), "function" == typeof n && (this._videoAdIns.errCb = n), 
                    this._videoAdIns.show().then(function() {
                        adv_interface$1.reportShowAdv(FlowAdvType.RewardedVideo, PlatAdOnShowFlow.video), 
                        doCallback$1(e);
                    }).catch(function() {
                        _this32._videoAdIns && _this32._videoAdIns.load().then(function() {
                            return _this32._videoAdIns.show().then(function() {
                                adv_interface$1.reportShowAdv(FlowAdvType.RewardedVideo, PlatAdOnShowFlow.video), 
                                doCallback$1(e);
                            });
                        }).catch(function(e) {
                            if (i._stopSupportVideoAd(), _this32._videoAdIns) {
                                var _t15 = _this32._videoAdIns.errCb;
                                doCallback$1(_t15, e), checkFunc(_t15) || console.error(e), _this32._videoAdIns = null;
                            }
                        });
                    });
                } else this._stopSupportVideoAd(), "function" == typeof n && n("Stop Support...");
            } else "function" == typeof t && t(!0);
        }
    }, {
        key: "_preloadVideoAd",
        value: function _preloadVideoAd(e) {
            this.isSupportVideoAd() ? null === this._videoAdIns && (this._videoAdIns = this._doCreateVideoAdObj(function() {
                console.log("preload video finished...");
            })) : doCallback$1(e);
        }
    }, {
        key: "_doCreateVideoAdObj",
        value: function _doCreateVideoAdObj(e) {
            if (this._videoAdIns) return this._videoAdIns;
            if (this._videoAdUnitIDIndex += 1, this._videoAdUnitIDIndex >= PlatAdUnitIDs.videoAdUnitIDs.length && (this._videoAdUnitIDIndex = 0), 
            this._videoAdIns = null, PlatHelper.getPlat().createRewardedVideoAd && (this._videoAdIns = PlatHelper.getPlat().createRewardedVideoAd({
                adUnitId: "adunit-014b2366143b8502"
            })), this._videoAdIns) {
                var t = this;
                this._videoAdIns.onLoad(function() {
                    adv_interface$1.reportLoadSuccAdv(FlowAdvType.RewardedVideo), "function" == typeof e && e();
                }), this._videoAdIns.onClose(function(e) {
                    if (t._videoAdIns) {
                        var n = t._videoAdIns.closeCb;
                        t._videoAdIns.errCb, t._videoAdIns.closeCb = null, t._videoAdIns.errCb = null, !e || e.isEnded ? n && n(!0) : n && n(!1), 
                        t._preloadVideoAd();
                    }
                }), this._videoAdIns.onError(function(e) {
                    if (adv_interface$1.reportLoadFailAdv(FlowAdvType.RewardedVideo), t._stopSupportVideoAd(), 
                    t._videoAdIns) {
                        var n = t._videoAdIns.errCb;
                        n ? n(e) : console.error(e), t._videoAdIns = null;
                    }
                });
            }
            return this._videoAdIns;
        }
    }, {
        key: "isWatchingVideoAdv",
        value: function isWatchingVideoAdv() {
            return !(!this._videoAdIns || !this._videoAdIns.closeCb);
        }
    }, {
        key: "createInterstitialAd",
        value: function createInterstitialAd(e, t, n) {
            var _this33 = this;
            if (!this.isSupportInterstitialAd()) return Event.dispatchEvent(EventName.EN_INTERSTITIAL_NOT_SUPPORT_RIGHT_NOW), 
            void doCallback$1(n);
            if (this._canShowInterstitialNow()) {
                if (this._failCountOfCreateInterstitial = 0, this._interstitialAdObj) {
                    var _e27 = this._interstitialAdObj;
                    this._isSupportDelayDestroyInterstitial() && Scheduler.schedule("Destroy_old_Interstitial", function() {
                        console.log("destory old interstitial..."), _e27 && _e27.destroy();
                    }.bind(this), !1, 60, 0), this._interstitialAdObj = null;
                }
                this._getInterstitialAdObj(function(t) {
                    _this33.showInterstitialAd(e, n);
                }, t, n);
            } else doCallback$1(n);
        }
    }, {
        key: "_getInterstitialAdObj",
        value: function _getInterstitialAdObj(e, t, n) {
            var i = null, a = function() {
                this._preloadingInterstitialAd = !0, Scheduler.schedule("Delay_Preload_Interstitial", function() {
                    var _this34 = this;
                    console.log("Delay preload next interstitial..."), this._preloadInterstitialAd(function() {
                        _this34._preloadingInterstitialAd = !1, console.log("Delay preload create interstitial success");
                    }, function() {
                        _this34._preloadingInterstitialAd = !1, console.log("Delay preload create interstitial fail");
                    });
                }.bind(this), !1, 30, 0);
            }.bind(this);
            null != this._preloadInterstitialAdObj ? (i = this._preloadInterstitialAdObj, this._preloadInterstitialAdObj = null, 
            a()) : this._preloadingInterstitialAd || a(), i ? ("function" == typeof t && (i.closeCb = t), 
            this._interstitialAdObj = i, doCallback$1(e, i)) : this._interstitialAdObj = this._doCreateInterstitialAdObj(t, e, n);
        }
    }, {
        key: "_preloadInterstitialAd",
        value: function _preloadInterstitialAd(e, t) {
            var _this35 = this;
            this.isSupportInterstitialAd() && this._isSupportPreloadInterstitial() ? null === this._preloadInterstitialAdObj ? this._doCreateInterstitialAdObj(null, function(t) {
                console.log("preload interstitial finished..."), _this35._preloadInterstitialAdObj = t, 
                "function" == typeof e && e(t);
            }, t) : "function" == typeof e && e(this._preloadInterstitialAdObj) : doCallback$1(t);
        }
    }, {
        key: "_doCreateInterstitialAdObj",
        value: function _doCreateInterstitialAdObj(e, t, n) {
            var _this36 = this;
            this._interstitialAdUnitIDIndex += 1, this._interstitialAdUnitIDIndex >= PlatAdUnitIDs.interstitialAdUnitIDs.length && (this._interstitialAdUnitIDIndex = 0);
            var i = PlatHelper.getPlat().createInterstitialAd({
                adUnitId: "adunit-a0cf1d36cf7ac23b"
            });
            "function" == typeof e && (i.closeCb = e), "function" == typeof t && (i.loadCb = t), 
            "function" == typeof n && (i.errCb = n);
            var a = this;
            var o = function o() {
                i.offClose(o), _this36._lastTimeOfShowInterstitialAd = ServerInfo.getServerTime();
                var e = i.closeCb;
                i.closeCb = void 0, e && e();
            };
            i.onClose(o);
            var s = function s() {
                i.offLoad(s), adv_interface$1.reportLoadSuccAdv(FlowAdvType.Interstitial);
                var e = i.loadCb;
                i.loadCb = void 0, e && e(i);
            };
            i.onLoad(s);
            var r = function r(o) {
                i.offError(r), adv_interface$1.reportLoadFailAdv(FlowAdvType.Interstitial);
                var s = null;
                i && (s = i.errCb, i = null), a._failCountOfCreateInterstitial += 1, a._failCountOfCreateInterstitial >= C_MaxTimesOfCreateInterstitial ? (doCallback$1(s, o), 
                checkFunc(s) || console.error(o)) : Scheduler.schedule("Delay_Recreate_Interstitial", function() {
                    console.log("retry preload interstitial..."), a._doCreateInterstitialAdObj(e, t, n);
                }, !1, 200, 0);
            };
            return i.onError(r), i;
        }
    }, {
        key: "showInterstitialAd",
        value: function showInterstitialAd(e, t) {
            this._interstitialAdObj && this._interstitialAdObj.show().then(function() {
                doCallback$1(e), adv_interface$1.reportShowAdv(FlowAdvType.Interstitial, PlatAdOnShowFlow.interstitial);
            }).catch(function(e) {
                doCallback$1(t, e), checkFunc(t) || console.error(e);
            });
        }
    }, {
        key: "createCustomAd",
        value: function createCustomAd(e, t) {
            var _this37 = this;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var i = arguments.length > 3 ? arguments[3] : undefined;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            var s = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
            if (!PlatAdUnitIDs.customAdUnitIDs || 0 === PlatAdUnitIDs.customAdUnitIDs.length || -1 === PlatAdUnitIDs.customAdUnitIDs.indexOf(e)) return void console.error("Config Target Custom adUnitId first, adUnitId:", e);
            var r = !1;
            isLoadOPPOConfig() && (r = !0), this._isCustomAdOnShow[e] = !0;
            var l = this._onLoadedCustomAdObjs[e], d = function d() {
                _this37._isCustomAdOnShow[e] ? (adv_interface$1.reportShowAdv(FlowAdvType.Custom, PlatAdOnShowFlow.custom), 
                doCallback$1(a)) : l.hide();
            }, h = function h(e) {
                adv_interface$1.reportLoadFailAdv(FlowAdvType.Custom), checkFunc(s) ? doCallback$1(s, e) : console.error(e);
            };
            try {
                null == l ? r ? (l = this._doCreateCustomAd(e, n, t, null), this._onLoadedCustomAdObjs[e] = l, 
                i ? l.show().then(d) : doCallback$1(a)) : l = this._doCreateCustomAd(e, n, t, function(t) {
                    t && (_this37._onLoadedCustomAdObjs[e] = t, _this37._isCustomAdOnShow[e] ? i ? t.show().then(d) : doCallback$1(a) : i || doCallback$1(a));
                }) : i ? l.show().then(d) : doCallback$1(a);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                h(e);
            }
            null != l && (null != l.offError && null != l.errorBack && l.offError(l.errorBack), 
            l.errorBack = h, null != l.onError && l.onError(l.errorBack), null != l.offHide && null != l.hideBack && l.offHide(l.hideBack), 
            l.hideBack = function() {
                console.log("customAdObj.onHide"), doCallback$1(o), l.offHide(l.hideCustomAd);
            }, null != l.offClose && null != l.closeBack && l.offClose(l.closeBack), l.closeBack = function() {
                console.log("customAdObj.onClose......."), doCallback$1(o), l.offClose(l.hideCustomAd), 
                Scheduler.unschedule("Schedule_Of_Create_CustomAd_Agin"), Scheduler.schedule("Schedule_Of_Create_CustomAd_Agin", function() {
                    _this37._onLoadedCustomAdObjs[e] = null, _this37.createCustomAd(e, t, n, a, o, s);
                }, !1, 2e3, 0);
            }, null != l.onHide && l.onHide(l.hideBack), null != l.onClose && l.onClose(l.closeBack));
        }
    }, {
        key: "showCustomAd",
        value: function showCustomAd(e) {
            if (!this._isCustomAdOnShow[e] && void 0 !== this._onLoadedCustomAdObjs[e]) {
                this._isCustomAdOnShow[e] = !0;
                var t = this._onLoadedCustomAdObjs[e];
                void 0 !== t && (isLoadOPPOConfig() ? t.show() : t.isShow() || t.show());
            }
        }
    }, {
        key: "hideCustomAd",
        value: function hideCustomAd(e) {
            if (this._isCustomAdOnShow[e]) {
                this._isCustomAdOnShow[e] = !1;
                var t = this._onLoadedCustomAdObjs[e];
                void 0 !== t && (isLoadOPPOConfig() ? t.hide() : t.isShow() && t.hide());
            }
        }
    }, {
        key: "hideAllCustomAds",
        value: function hideAllCustomAds() {
            for (var e in this._isCustomAdOnShow) {
                this._isCustomAdOnShow[e] && this.hideCustomAd(e);
            }
        }
    }, {
        key: "destoryCustomAd",
        value: function destoryCustomAd(e) {
            this._isCustomAdOnShow[e] = !1;
            var t = this._onLoadedCustomAdObjs[e];
            void 0 !== t && (t.destroy(), delete this._onLoadedCustomAdObjs[e]);
        }
    }, {
        key: "isCustomAdPreloaded",
        value: function isCustomAdPreloaded(e) {
            return void 0 !== this._onLoadedCustomAdObjs[e];
        }
    }, {
        key: "isCustomAdOnShow",
        value: function isCustomAdOnShow(e) {
            var t = this._onLoadedCustomAdObjs[e];
            return void 0 !== t && void 0 !== this._isCustomAdOnShow[e] && this._isCustomAdOnShow[e] && t.isShow();
        }
    }, {
        key: "_doCreateCustomAd",
        value: function _doCreateCustomAd(e, t, n, i) {
            if (PlatHelper.getPlat() && PlatHelper.getPlat().createCustomAd) {
                var a = {
                    left: 0,
                    top: 0,
                    width: 0
                }, o = PlatHelper.getPlat().getSystemInfoSync(), s = {
                    width: 72,
                    height: 106
                }, r = {
                    width: 360,
                    height: 106
                }, l = {
                    width: o.screenWidth,
                    rowHeight: 71,
                    defaultHeight: 140
                };
                if (isLoadLandscapeConfig$1() && (l.width = 360), n.isNewLayout) {
                    if (null != n) {
                        if (null != n.top) a.top = n.top / Laya.stage.height * o.screenHeight; else if (null != n.bottom) {
                            var _e28 = n.bottom / Laya.stage.height * o.screenHeight;
                            a.top = o.screenHeight - (_e28 + n.height);
                        } else null != n.centerY && (a.top = (o.screenHeight - n.height) / 2 + o.screenHeight * (n.centerY / 100));
                        if (null != n.left) a.left = n.left / Laya.stage.width * o.screenWidth; else if (null != n.right) {
                            var _e29 = n.right / Laya.stage.width * o.screenWidth;
                            a.left = o.screenWidth - (_e29 + n.width);
                        } else null != n.centerX && (a.left = (o.screenWidth - n.width) / 2 + o.screenWidth * (n.centerX / 100));
                        a.width = n.width;
                    }
                } else if (n && "left" === n.layout && "number" == typeof n.top) a.left = n.left, 
                a.top = n.top / Laya.stage.height * o.screenHeight; else if (n && "right" === n.layout && "number" == typeof n.top) a.left = o.screenWidth - s.width - n.left, 
                a.top = n.top / Laya.stage.height * o.screenHeight; else if (n && "top" === n.layout && "number" == typeof n.top && 1 === n.type) a.width = o.screenWidth, 
                a.left = 0, a.top = n.top / 100 * o.screenHeight; else if (n && "top" === n.layout && "number" == typeof n.top && 2 === n.type) a.width = o.screenWidth, 
                a.left = 0, a.top = n.top / 100 * o.screenHeight; else if (n && "top" === n.layout && "number" == typeof n.top && 3 === n.type) a.width = o.screenWidth, 
                a.left = 0, a.top = n.top / 100 * o.screenHeight; else if (n && "top" === n.layout && "number" == typeof n.top) isLoadLandscapeConfig$1() ? a.left = o.screenWidth - r.width : a.left = (o.screenWidth - r.width) / 2, 
                a.top = n.top / Laya.stage.height * o.screenHeight; else if (n && "bottom" === n.layout && "number" == typeof n.bottom) a.left = (o.screenWidth - r.width) / 2, 
                a.top = (Laya.stage.height - n.bottom) / Laya.stage.height * o.screenHeight - r.height; else if (n && "center" === n.layout && "number" == typeof n.top && "number" == typeof n.row) {
                    if (a.width = l.width, isLoadLandscapeConfig$1()) {
                        a.left = 40;
                        var _e30 = l.defaultHeight + l.rowHeight * n.row;
                        a.top = (o.screenHeight - _e30) / 2;
                    } else a.left = (o.screenWidth - l.width) / 2, a.top = n.top / Laya.stage.height * o.screenHeight;
                } else if (n && "center" === n.layout && "number" == typeof n.row) {
                    a.width = l.width, a.left = (o.screenWidth - l.width) / 2;
                    var _e31 = l.defaultHeight + l.rowHeight * n.row;
                    a.top = (o.screenHeight - _e31) / 2;
                } else if (n && "center" === n.layout && "object" == _typeof2(n.centerPt)) {
                    a.width = s.width;
                    var _e32 = convertToOpenGLPt(n.centerPt);
                    a.left = _e32.x - s.width / 2, a.top = _e32.y - s.height / 2, a.top > o.screenHeight - s.height / 2 && (a.top = o.screenHeight - s.height / 2);
                } else console.error("align error, check input...", n);
                var d = {
                    adUnitId: "adunit-1970e120eb53e448",
                    style: a
                };
                "number" == typeof t && t >= 30 && (d.adIntervals = t), console.log("params: ", d);
                var h = PlatHelper.getPlat().createCustomAd(d);
                return h && (h.loadCallBack = function() {
                    adv_interface$1.reportLoadSuccAdv(FlowAdvType.Custom), doCallback$1(i, h);
                }, h.onLoad(h.loadCallBack)), h;
            }
            return null;
        }
    }, {
        key: "isBlockAdPreloaded",
        value: function isBlockAdPreloaded(e) {
            return console.error("Not Support On Current Platform..."), !1;
        }
    }, {
        key: "createBoxAd",
        value: function createBoxAd() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            console.error("Not Support On Current Platform..."), "function" == typeof t && t();
        }
    }, {
        key: "addColorSign",
        value: function addColorSign() {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "createBlockAd",
        value: function createBlockAd(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "landscape";
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            console.error("Not Support On Current Platform..."), "function" == typeof o && o();
        }
    }, {
        key: "showBlockAd",
        value: function showBlockAd(e) {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "hideBlockAd",
        value: function hideBlockAd(e) {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "hideAllBlockAds",
        value: function hideAllBlockAds() {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "destoryBlockAd",
        value: function destoryBlockAd(e) {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "destroyAllBlockAds",
        value: function destroyAllBlockAds() {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "createPortalAd",
        value: function createPortalAd(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            console.error("Not Support On Current Platform..."), "function" == typeof i && i();
        }
    }, {
        key: "createDrawerAd",
        value: function createDrawerAd(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            console.error("Not Support On Current Platform..."), "function" == typeof i && i();
        }
    }, {
        key: "createStreamerAd",
        value: function createStreamerAd(e, t, n) {
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            console.error("Not Support On Current Platform..."), doCallback$1(o);
        }
    }, {
        key: "showStreamerAd",
        value: function showStreamerAd(e) {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "showDrawerAd",
        value: function showDrawerAd(e) {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "hideDrawerAd",
        value: function hideDrawerAd(e) {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "hideStreamerAd",
        value: function hideStreamerAd(e) {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "hideAllStreamerAds",
        value: function hideAllStreamerAds() {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "isStreamerAdPreloaded",
        value: function isStreamerAdPreloaded(e) {
            return console.error("Not Support On Current Platform..."), !1;
        }
    }, {
        key: "createQgPortalAd",
        value: function createQgPortalAd(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            console.error("Not Support On Current Platform..."), "function" == typeof i && i();
        }
    }, {
        key: "createQgStreamerAd",
        value: function createQgStreamerAd(e) {
            console.error("Not Support On Current Platform..."), doCallback$1(errCb);
        }
    }, {
        key: "showPortalQgAd",
        value: function showPortalQgAd(e) {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "showStreamerQgAd",
        value: function showStreamerQgAd(e) {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "hidePortalQgAd",
        value: function hidePortalQgAd(e) {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "hideStreamerQgAd",
        value: function hideStreamerQgAd(e) {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "hideAllQgStreamerAds",
        value: function hideAllQgStreamerAds() {
            console.error("Not Support On Current Platform...");
        }
    }, {
        key: "isQgStreamerAdPreloaded",
        value: function isQgStreamerAdPreloaded(e) {
            return console.error("Not Support On Current Platform..."), !1;
        }
    }, {
        key: "_convertToPlatformStyle",
        value: function _convertToPlatformStyle(e) {
            var t = this._getDefaultPlatformStyle();
            if (e) {
                var n = PlatHelper.getSysInfo();
                this._fixedStyle(e), t.width = e.width;
                var i = this._caculateRealWidth(e.width);
                "number" == typeof e.centerX ? t.left = (n.screenWidth - i) / 2 + e.centerX : "number" == typeof e.left ? t.left = e.left : "number" == typeof e.right && (t.left = n.screenWidth - i - e.right);
                var a = FlowBannerAdvSize.Height / FlowBannerAdvSize.Width * i;
                "number" == typeof e.centerY ? t.top = (n.screenHeight - a) / 2 + e.centerY : "number" == typeof e.top ? t.top = e.top : "number" == typeof e.bottom && (t.top = n.screenHeight - a - e.bottom);
            }
            return t;
        }
    }, {
        key: "_getDefaultPlatformStyle",
        value: function _getDefaultPlatformStyle() {
            return {};
        }
    }, {
        key: "_caculateRealWidth",
        value: function _caculateRealWidth(e) {
            return e;
        }
    }, {
        key: "_fixedStyle",
        value: function _fixedStyle(e) {}
    }, {
        key: "getMiniGapFromBottom",
        value: function getMiniGapFromBottom() {
            return 0;
        }
    }, {
        key: "_isSupportResizeTwice",
        value: function _isSupportResizeTwice() {
            return !0;
        }
    }, {
        key: "_isSupportPreloadBanner",
        value: function _isSupportPreloadBanner() {
            return !0;
        }
    }, {
        key: "_isSupportDelayDestroyBanner",
        value: function _isSupportDelayDestroyBanner() {
            return !0;
        }
    }, {
        key: "_canShowInterstitialNow",
        value: function _canShowInterstitialNow() {
            if (ServerInfo.getServerTime() - this._lastTimeOfShowInterstitialAd > this._gapOfEachInterstitialAd) return !0;
            {
                var e = this._gapOfEachInterstitialAd / 1e3 - Math.floor((ServerInfo.getServerTime() - this._lastTimeOfShowInterstitialAd) / 1e3);
                return console.warn("插屏广告还未准备好，请{0}秒后重新尝试".format(e.toString())), !1;
            }
        }
    }, {
        key: "_isSupportPreloadInterstitial",
        value: function _isSupportPreloadInterstitial() {
            return !0;
        }
    }, {
        key: "_isSupportDelayDestroyInterstitial",
        value: function _isSupportDelayDestroyInterstitial() {
            return !0;
        }
    } ]);
    return AdvBase;
}();

var SK_KEY_OF_COLOR_SIGN_INFO = "storage_key_of_color_sign_info", GAP_OF_EACH_INTERSTITIAL_AD = 3e4;

void 0 !== window.tt && (GAP_OF_EACH_INTERSTITIAL_AD = 6e4);

var UnSupportAdv = /* */ function(_AdvBase) {
    _inherits2(UnSupportAdv, _AdvBase);
    var _super12 = _createSuper2(UnSupportAdv);
    function UnSupportAdv() {
        _classCallCheck2(this, UnSupportAdv);
        return _super12.call(this);
    }
    return _createClass2(UnSupportAdv);
}(AdvBase);

var WXAdv = /* */ function(_AdvBase2) {
    _inherits2(WXAdv, _AdvBase2);
    var _super13 = _createSuper2(WXAdv);
    function WXAdv() {
        var _this38;
        _classCallCheck2(this, WXAdv);
        _this38 = _super13.call(this), _this38._gapOfEachInterstitialAd = GAP_OF_EACH_INTERSTITIAL_AD, 
        _this38._customAdUnitIDIndex = -1, _this38._isCustomAdOnShow = {}, _this38._onLoadedCustomAdObjs = {};
        return _this38;
    }
    _createClass2(WXAdv, [ {
        key: "_doCreateBannerAdObj",
        value: function _doCreateBannerAdObj(e, t, n) {
            return _get2(_getPrototypeOf2(WXAdv.prototype), "_doCreateBannerAdObj", this).call(this, e, t, n);
        }
    }, {
        key: "_getDefaultPlatformStyle",
        value: function _getDefaultPlatformStyle() {
            return {
                left: 0,
                top: 0,
                width: 300
            };
        }
    }, {
        key: "getMiniGapFromBottom",
        value: function getMiniGapFromBottom() {
            return 0;
        }
    }, {
        key: "_fixedStyle",
        value: function _fixedStyle(e) {
            e && ("number" != typeof e.width && (e.width = 300), e.width < 300 && (e.width = 300));
        }
    } ]);
    return WXAdv;
}(AdvBase);

var QQAdv = /* */ function(_AdvBase3) {
    _inherits2(QQAdv, _AdvBase3);
    var _super14 = _createSuper2(QQAdv);
    function QQAdv() {
        var _this39;
        _classCallCheck2(this, QQAdv);
        _this39 = _super14.call(this), _this39._gapOfEachInterstitialAd = GAP_OF_EACH_INTERSTITIAL_AD, 
        _this39.isCreating = !1, _this39.createBlockIDs = [], _this39.blockObj = [], _this39._interstitialAdIns = null, 
        _this39._isForceUnSupportedInterstitial = !1, _this39._boxAdObj = null, _this39._boxAdUnitIDIndex = -1, 
        _this39._isShowColorSignBefore = !1, _this39._blockAdUnitIDIndex = -1, _this39._isBlockAdOnShow = {}, 
        _this39._onLoadedBlockAdObjs = {};
        return _this39;
    }
    _createClass2(QQAdv, [ {
        key: "isSupportInterstitialAd",
        value: function isSupportInterstitialAd() {
            return PlatAdUnitIDs.interstitialAdUnitIDs.length > 0 && !this._isForceUnSupportedInterstitial;
        }
    }, {
        key: "_stopSupportInterstitialAd",
        value: function _stopSupportInterstitialAd() {
            console.log("stop support interstitial ad..."), this._isForceUnSupportedInterstitial = !0, 
            Event.dispatchEvent(EventName.EN_INTERSTITIAL_NOT_SUPPORT_RIGHT_NOW);
        }
    }, {
        key: "_preloadInterstitialAd",
        value: function _preloadInterstitialAd(e, t) {
            this.isSupportInterstitialAd() ? null === this._interstitialAdIns && (this._interstitialAdIns = this._doCreateInterstitialAdObj(null, function() {
                console.log("preload interstitial finished...");
            }, null)) : doCallback$1(t);
        }
    }, {
        key: "createInterstitialAd",
        value: function createInterstitialAd(e, t, n) {
            if (!this.isSupportInterstitialAd()) return Event.dispatchEvent(EventName.EN_INTERSTITIAL_NOT_SUPPORT_RIGHT_NOW), 
            void doCallback$1(n);
            this._canShowInterstitialNow() ? null !== this._interstitialAdIns ? (checkFunc(t) && (this._interstitialAdIns.closeCb = t), 
            checkFunc(n) && (this._interstitialAdIns.errCb = n), this.showInterstitialAd(e, n)) : (this._stopSupportInterstitialAd(), 
            doCallback$1(n)) : doCallback$1(n);
        }
    }, {
        key: "_doCreateInterstitialAdObj",
        value: function _doCreateInterstitialAdObj(e, t, n) {
            if (this._interstitialAdIns) return this._interstitialAdIns;
            if (this._interstitialAdUnitIDIndex += 1, this._interstitialAdUnitIDIndex >= PlatAdUnitIDs.interstitialAdUnitIDs.length && (this._interstitialAdUnitIDIndex = 0), 
            this._interstitialAdIns = PlatHelper.getPlat().createInterstitialAd({
                adUnitId: "adunit-a0cf1d36cf7ac23b"
            }), this._interstitialAdIns) {
                var i = this;
                this._interstitialAdIns.onLoad(function() {
                    adv_interface$1.reportLoadSuccAdv(FlowAdvType.Interstitial), "function" == typeof t && t();
                }), this._interstitialAdIns.onClose(function() {
                    if (i._interstitialAdIns) {
                        var _e33 = i._interstitialAdIns.closeCb;
                        i._interstitialAdIns.errCb, i._lastTimeOfShowInterstitialAd = ServerInfo.getServerTime(), 
                        i._interstitialAdIns.closeCb = null, i._interstitialAdIns.errCb = null, _e33 && _e33(), 
                        i._preloadInterstitialAd();
                    }
                }), this._interstitialAdIns.onError(function(e) {
                    if (-1 === [ 2001, 2002, 2003, 2004, 2005 ].indexOf(e.errCode) && (adv_interface$1.reportLoadFailAdv(FlowAdvType.Interstitial), 
                    i._stopSupportInterstitialAd(), i._interstitialAdIns)) {
                        var _t16 = i._interstitialAdIns.errCb;
                        _t16 ? _t16(e) : console.error(e), i._interstitialAdIns = null;
                    }
                });
            }
            return this._interstitialAdIns;
        }
    }, {
        key: "showInterstitialAd",
        value: function showInterstitialAd(e, t) {
            this._interstitialAdIns && this._interstitialAdIns.show().then(function() {
                doCallback$1(e), adv_interface$1.reportShowAdv(FlowAdvType.Interstitial, PlatAdOnShowFlow.interstitial);
            }).catch(function(e) {
                doCallback$1(t, e), checkFunc(t) || console.error(e);
            });
        }
    }, {
        key: "createBoxAd",
        value: function createBoxAd() {
            var _this40 = this;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            if (PlatHelper.getPlat() && PlatHelper.getPlat().createAppBox) {
                if (this._boxAdObj && (console.log("destory old unclosed box..."), this._boxAdObj.destroy(), 
                this._boxAdObj = null), 0 === PlatAdUnitIDs.boxAdUnitIDs.length) return doCallback$1(n), 
                null;
                this._boxAdUnitIDIndex += 1, this._boxAdUnitIDIndex >= PlatAdUnitIDs.boxAdUnitIDs.length && (this._boxAdUnitIDIndex = 0);
                var i = PlatHelper.getPlat().createAppBox({
                    adUnitId: PlatAdUnitIDs.boxAdUnitIDs[this._boxAdUnitIDIndex]
                });
                i && (checkFunc(t) && (i.closeCb = t), i.onClose(function() {
                    var e = i.closeCb;
                    i.closeCb = null, _this40._boxAdObj.destroy(), _this40._boxAdObj = null, doCallback$1(e);
                }), i.load().then(function() {
                    adv_interface$1.reportLoadSuccAdv(FlowAdvType.Box), i.show().then(function() {
                        doCallback$1(e), adv_interface$1.reportShowAdv(FlowAdvType.Box, PlatAdOnShowFlow.box);
                    }).catch(function(e) {
                        doCallback$1(n, e), checkFunc(n) || console.error(e);
                    });
                }).catch(function(e) {
                    adv_interface$1.reportLoadFailAdv(FlowAdvType.Box), doCallback$1(n, e), checkFunc(n) || console.error(e);
                }), this._boxAdObj = i);
            }
            return this._boxAdObj;
        }
    }, {
        key: "addColorSign",
        value: function addColorSign() {
            PlatHelper.getPlat() && PlatHelper.getPlat().addColorSign && !this._isShowColorSignBefore && (this._isShowColorSignBefore = !0, 
            PlatHelper.getPlat().addColorSign());
        }
    }, {
        key: "createBlockAd",
        value: function createBlockAd(e, t) {
            var _this41 = this;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "landscape";
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            if (!PlatAdUnitIDs.blockAdUnitIDs || 0 === PlatAdUnitIDs.blockAdUnitIDs.length || -1 === PlatAdUnitIDs.blockAdUnitIDs.indexOf(e)) return doCallback$1(o, "Config Target Block adUnitId first, adUnitId:" + e), 
            null;
            this._isBlockAdOnShow[e] = !0;
            var s = null, r = this._onLoadedBlockAdObjs[e];
            if (Array.isArray(r) && r.length > 0) for (var _e34 = 0; _e34 < r.length; _e34++) {
                if (!r[_e34]._isUsing) {
                    s = r[_e34];
                    break;
                }
            }
            if (s) {
                var _t17 = s.show();
                null != _t17 && _t17.then(function() {
                    doCallback$1(a), _this41._isBlockAdOnShow[e] ? (adv_interface$1.reportShowAdv(FlowAdvType.Block, PlatAdOnShowFlow.block), 
                    s._isUsing = !0) : s.hide();
                });
            } else this._doCreateBlockAd(e, t, n, i, function(t) {
                t && (Array.isArray(_this41._onLoadedBlockAdObjs[e]) || (_this41._onLoadedBlockAdObjs[e] = []), 
                _this41._onLoadedBlockAdObjs[e].push(t), _this41._isBlockAdOnShow[e] && t.show().then(function() {
                    doCallback$1(a), _this41._isBlockAdOnShow[e] ? (adv_interface$1.reportShowAdv(FlowAdvType.Block, PlatAdOnShowFlow.block), 
                    t._isUsing = !0) : t.hide();
                }));
            }, o);
        }
    }, {
        key: "_doCreateNextBlock",
        value: function _doCreateNextBlock() {
            var _this42 = this;
            if (this.isCreating) return;
            this.isCreating = !0;
            var e = this.createBlockIDs.shift();
            if (null != e) {
                var t = e.adUnitId, n = e.align, i = e.size, a = e.orientation, o = e.loadCb, s = e.errCb;
                if (PlatHelper.getPlat() && PlatHelper.getPlat().createBlockAd) {
                    var _e35 = PlatHelper.getPlat().createBlockAd({
                        adUnitId: t,
                        style: {
                            left: 20,
                            top: 32
                        },
                        size: i,
                        orientation: a
                    });
                    if (_e35) {
                        this.blockObj.push(_e35), "function" == typeof o && (_e35.loadCb = o), "function" == typeof s && (_e35.errCb = s);
                        var _t18 = function _t18() {
                            if (_e35.offLoad(_t18), adv_interface$1.reportLoadSuccAdv(FlowAdvType.Block), _this42.blockObj.indexOf(_e35) >= 0) {
                                var _t19 = _e35.loadCb;
                                _e35.loadCb = null, _t19 && _t19(_e35);
                            }
                            _this42.isCreating = !1, _this42._doCreateNextBlock();
                        }, _i3 = function _i3(t) {
                            if (console.log(JSON.stringify(t)), _this42.blockObj.indexOf(_e35) < 0) return;
                            var i = t.height, a = t.width, o = PlatHelper.getPlat().getSystemInfoSync();
                            if (n && "left" === n.layout && "number" == typeof n.top) _e35.style.left = 20, 
                            _e35.style.top = n.top / Laya.stage.height * o.screenHeight, _e35.style.top < 32 && (_e35.style.top = 32); else if (n && "leftCenter" === n.layout) _e35.style.left = 20, 
                            _e35.style.top = (o.screenHeight - i) / 2; else if (n && "right" === n.layout && "number" == typeof n.top) _e35.style.left = o.screenWidth - a - 20, 
                            _e35.style.top = n.top / Laya.stage.height * o.screenHeight, _e35.style.top < 32 && (_e35.style.top = 32); else if (n && "rightCenter" === n.layout) _e35.style.left = o.screenWidth - a, 
                            _e35.style.top = (o.screenHeight - i) / 2; else if (n && "top" === n.layout && "number" == typeof n.top) _e35.style.left = (o.screenWidth - a) / 2, 
                            _e35.style.top = n.top / Laya.stage.height * o.screenHeight; else if (n && "bottom" === n.layout && "number" == typeof n.bottom) n.bottom < 35 && (n.bottom = 35), 
                            _e35.style.left = (o.screenWidth - a) / 2, _e35.style.top = (Laya.stage.height - n.bottom) / Laya.stage.height * o.screenHeight - i; else if (n && "center" === n.layout && "number" == typeof n.row) _e35.style.left = (o.screenWidth - a) / 2, 
                            _e35.style.top = n.top; else if (n && "center" === n.layout && "object" == _typeof2(n.centerPt)) {
                                _e35.style.width = a;
                                var _t20 = convertToOpenGLPt(n.centerPt);
                                _e35.style.left = _t20.x - a / 2, _e35.style.top = _t20.y - i / 2, _e35.style.top > o.screenHeight - i / 2 && (_e35.style.top = o.screenHeight - i / 2);
                            } else n && "center" === n.layout ? (_e35.style.left = (o.screenWidth - a) / 2, 
                            _e35.style.top = (o.screenHeight - i) / 2, "number" == typeof n.hor && (_e35.style.left += n.hor), 
                            "number" == typeof n.vel && (_e35.style.top += n.vel)) : console.error("align error, check input...", n);
                        }, _a2 = function _a2(n) {
                            adv_interface$1.reportLoadFailAdv(FlowAdvType.Block), _e35.offLoad(_t18), _e35.offResize(_i3), 
                            _e35.offError(_a2);
                            var o = _e35.errCb;
                            _e35._errCb = null, o ? o(n) : console.error(n);
                        };
                        _e35.onLoad(_t18), _e35.onResize(_i3), _e35.onError(_a2);
                    }
                }
            } else this.isCreating = !1;
        }
    }, {
        key: "_doCreateBlockAd",
        value: function _doCreateBlockAd(e, t, n, i, a, o) {
            this.createBlockIDs.push({
                adUnitId: e,
                align: t,
                size: n,
                orientation: i,
                loadCb: a,
                errCb: o
            }), this._doCreateNextBlock();
        }
    }, {
        key: "isBlockAdPreloaded",
        value: function isBlockAdPreloaded(e) {
            var t = this._onLoadedBlockAdObjs[e];
            return !!(Array.isArray(t) && t.length > 0);
        }
    }, {
        key: "showBlockAd",
        value: function showBlockAd(e) {
            if (!this._isBlockAdOnShow[e] && void 0 !== this._onLoadedBlockAdObjs[e]) {
                this._isBlockAdOnShow[e] = !0;
                var t = this._onLoadedBlockAdObjs[e];
                Array.isArray(t) && t.length > 0 && t.forEach(function(e) {
                    e._isUsing = !0, e.show();
                });
            }
        }
    }, {
        key: "hideBlockAd",
        value: function hideBlockAd(e) {
            if (this._isBlockAdOnShow[e]) {
                this._isBlockAdOnShow[e] = !1;
                var t = this._onLoadedBlockAdObjs[e];
                Array.isArray(t) && t.length > 0 && t.forEach(function(e) {
                    e._isUsing = !1, e.hide();
                });
            }
        }
    }, {
        key: "hideAllBlockAds",
        value: function hideAllBlockAds() {
            var e = [];
            this.createBlockIDs = [], this.blockObj = [];
            for (var t in this._onLoadedBlockAdObjs) {
                void 0 !== this._onLoadedBlockAdObjs[t] && e.push(this.hideBlockAd(t));
            }
            return new Promise(function(t, n) {
                e.length > 0 ? Promise.all(e).then(function() {
                    t();
                }) : t();
            });
        }
    }, {
        key: "destoryBlockAd",
        value: function destoryBlockAd(e) {
            var _this43 = this;
            this._isBlockAdOnShow[e] = !1;
            var t = this._onLoadedBlockAdObjs[e];
            return new Promise(function(n, i) {
                var a = [];
                Array.isArray(t) && t.length > 0 && a.push(new Promise(function(e, n) {
                    t.forEach(function(t) {
                        t.destroy().then(e()).catch(function(t) {
                            console.error(t), e();
                        });
                    });
                })), delete _this43._onLoadedBlockAdObjs[e], a.length > 0 ? Promise.all(a).then(function() {
                    n();
                }) : n();
            });
        }
    }, {
        key: "destroyAllBlockAds",
        value: function destroyAllBlockAds() {
            var e = [];
            this.createBlockIDs = [], this.blockObj = [];
            for (var t in this._onLoadedBlockAdObjs) {
                void 0 !== this._onLoadedBlockAdObjs[t] && e.push(this.destoryBlockAd(t));
            }
            return new Promise(function(t, n) {
                e.length > 0 ? Promise.all(e).then(function() {
                    t();
                }) : t();
            });
        }
    }, {
        key: "_canShowColorSign",
        value: function _canShowColorSign() {
            var e = PlatHelper.getStorage(SK_KEY_OF_COLOR_SIGN_INFO);
            if (e && "" !== e) {
                var t = JSON.parse(e);
                if (void 0 !== t.lastSignDay && t.lastSignDay === ServerInfo.getCurServerDayOfYear()) return !1;
            }
            return !0;
        }
    }, {
        key: "_markShowColorSign",
        value: function _markShowColorSign() {
            var e = {
                lastSignDay: ServerInfo.getCurServerDayOfYear()
            };
            PlatHelper.setStorage(SK_KEY_OF_COLOR_SIGN_INFO, JSON.stringify(e));
        }
    }, {
        key: "_doCreateBannerAdObj",
        value: function _doCreateBannerAdObj(e, t, n) {
            return _get2(_getPrototypeOf2(QQAdv.prototype), "_doCreateBannerAdObj", this).call(this, e, t, n);
        }
    }, {
        key: "_getDefaultPlatformStyle",
        value: function _getDefaultPlatformStyle() {
            var e = PlatHelper.getSysInfo(), t = FlowBannerAdvSize.Height / FlowBannerAdvSize.Width * 300, n = {
                left: (e.screenWidth - 300) / 2,
                top: e.screenHeight - t,
                width: 300
            };
            return PlatHelper.isIPhoneX() && (n.top -= 20), n;
        }
    }, {
        key: "getMiniGapFromBottom",
        value: function getMiniGapFromBottom() {
            return 20;
        }
    }, {
        key: "_fixedStyle",
        value: function _fixedStyle(e) {
            e && ("number" != typeof e.width && (e.width = 300), e.width < 300 && (e.width = 300));
        }
    }, {
        key: "_isSupportPreloadBanner",
        value: function _isSupportPreloadBanner() {
            return !1;
        }
    }, {
        key: "_isSupportDelayDestroyBanner",
        value: function _isSupportDelayDestroyBanner() {
            return !1;
        }
    } ]);
    return QQAdv;
}(AdvBase);

var TTAdv = /* */ function(_AdvBase4) {
    _inherits2(TTAdv, _AdvBase4);
    var _super15 = _createSuper2(TTAdv);
    function TTAdv() {
        var _this44;
        _classCallCheck2(this, TTAdv);
        _this44 = _super15.call(this), _this44._gapOfEachInterstitialAd = GAP_OF_EACH_INTERSTITIAL_AD;
        return _this44;
    }
    _createClass2(TTAdv, [ {
        key: "_doCreateBannerAdObj",
        value: function _doCreateBannerAdObj(e, t, n) {
            var i = _get2(_getPrototypeOf2(TTAdv.prototype), "_doCreateBannerAdObj", this).call(this, e, t, n);
            var _PlatHelper$getPlat$g = PlatHelper.getPlat().getSystemInfoSync(), a = _PlatHelper$getPlat$g.windowWidth, o = _PlatHelper$getPlat$g.windowHeight;
            var s = function s(e) {
                i.style.top = o - e.height, i.style.left = (a - e.width) / 2, PlatHelper.isIPhoneX() && (i.style.top -= 20), 
                i.offResize(s);
            };
            return i.onResize(s), i;
        }
    }, {
        key: "_doCreateInterstitialAdObj",
        value: function _doCreateInterstitialAdObj(e, t, n) {
            var _this45 = this;
            var i = _get2(_getPrototypeOf2(TTAdv.prototype), "_doCreateInterstitialAdObj", this).call(this, function() {
                var t = i;
                Scheduler.schedule("Destroy_Interstitial_Ad", function() {
                    t && (console.log("destory interstitial ad..."), t.destroy());
                }.bind(_this45), !1, 60, 0), _this45._interstitialAdObj = null, "function" == typeof e && e();
            }, t, n);
            return console.log("start to load interstitial ad..."), i.load(), i;
        }
    }, {
        key: "_isSupportPreloadInterstitial",
        value: function _isSupportPreloadInterstitial() {
            return !1;
        }
    }, {
        key: "_isSupportDelayDestroyInterstitial",
        value: function _isSupportDelayDestroyInterstitial() {
            return !1;
        }
    }, {
        key: "_getDefaultPlatformStyle",
        value: function _getDefaultPlatformStyle() {
            return {
                left: 0,
                top: 0,
                width: 300
            };
        }
    }, {
        key: "getMiniGapFromBottom",
        value: function getMiniGapFromBottom() {
            return 0;
        }
    }, {
        key: "_isSupportResizeTwice",
        value: function _isSupportResizeTwice() {
            return !1;
        }
    }, {
        key: "_fixedStyle",
        value: function _fixedStyle(e) {
            e && ("number" != typeof e.width && (e.width = 300), e.width < 300 && (e.width = 300));
        }
    } ]);
    return TTAdv;
}(AdvBase);

var OPPOAdv = /* */ function(_AdvBase5) {
    _inherits2(OPPOAdv, _AdvBase5);
    var _super16 = _createSuper2(OPPOAdv);
    function OPPOAdv() {
        var _this46;
        _classCallCheck2(this, OPPOAdv);
        _this46 = _super16.call(this), _this46._gapOfEachInterstitialAd = GAP_OF_EACH_INTERSTITIAL_AD, 
        _this46._portalAdObj = null, _this46._portalAdUnitIDIndex = -1, _this46._isStreamerAdOnShow = {}, 
        _this46._onLoadedStreamerAdObjs = {}, _this46._DrawerAdObj = null, _this46._isDrawerAdOnShow = {}, 
        _this46._isOVCustomAdOnShow = {}, _this46._onLoadedOVCustomAdObjs = {};
        return _this46;
    }
    _createClass2(OPPOAdv, [ {
        key: "isSupportInterstitialAd",
        value: function isSupportInterstitialAd() {
            return PlatAdUnitIDs.interstitialAdUnitIDs.length > 0 && !this._isForceUnSupportedInterstitial;
        }
    }, {
        key: "_stopSupportInterstitialAd",
        value: function _stopSupportInterstitialAd() {
            console.log("stop support interstitial ad..."), this._isForceUnSupportedInterstitial = !0, 
            Event.dispatchEvent(EventName.EN_INTERSTITIAL_NOT_SUPPORT_RIGHT_NOW);
        }
    }, {
        key: "_preloadInterstitialAd",
        value: function _preloadInterstitialAd(e, t) {
            this.isSupportInterstitialAd() ? null === this._interstitialAdIns && (this._interstitialAdIns = this._doCreateInterstitialAdObj(null, function() {
                console.log("preload interstitial finished...");
            }, null)) : doCallback$1(t);
        }
    }, {
        key: "createInterstitialAd",
        value: function createInterstitialAd(e, t, n) {
            if (!this.isSupportInterstitialAd()) return Event.dispatchEvent(EventName.EN_INTERSTITIAL_NOT_SUPPORT_RIGHT_NOW), 
            void doCallback$1(n);
            this._canShowInterstitialNow() ? null !== this._interstitialAdIns ? (checkFunc(t) && (this._interstitialAdIns.closeCb = t), 
            checkFunc(n) && (this._interstitialAdIns.errCb = n), this.showInterstitialAd(e, n)) : (this._stopSupportInterstitialAd(), 
            doCallback$1(n)) : doCallback$1(n);
        }
    }, {
        key: "_doCreateInterstitialAdObj",
        value: function _doCreateInterstitialAdObj(e, t, n) {
            if (this._interstitialAdIns) return this._interstitialAdIns;
            if (this._interstitialAdUnitIDIndex += 1, this._interstitialAdUnitIDIndex >= PlatAdUnitIDs.interstitialAdUnitIDs.length && (this._interstitialAdUnitIDIndex = 0), 
            this._interstitialAdIns = PlatHelper.getPlat().createInterstitialAd({
                adUnitId: "adunit-a0cf1d36cf7ac23b"
            }), this._interstitialAdIns) {
                var i = this;
                this._interstitialAdIns.onLoad(function() {
                    adv_interface$1.reportLoadSuccAdv(FlowAdvType.Interstitial), "function" == typeof t && t();
                }), this._interstitialAdIns.onClose(function() {
                    if (i._interstitialAdIns) {
                        var _e36 = i._interstitialAdIns.closeCb;
                        i._interstitialAdIns.errCb, i._lastTimeOfShowInterstitialAd = ServerInfo.getServerTime(), 
                        i._interstitialAdIns.closeCb = null, i._interstitialAdIns.errCb = null, _e36 && _e36(), 
                        i._preloadInterstitialAd();
                    }
                }), this._interstitialAdIns.onError(function(e) {
                    if (-1 === [ 2001, 2002, 2003, 2004, 2005 ].indexOf(e.errCode) && (adv_interface$1.reportLoadFailAdv(FlowAdvType.Interstitial), 
                    i._stopSupportInterstitialAd(), i._interstitialAdIns)) {
                        var _t21 = i._interstitialAdIns.errCb;
                        _t21 ? _t21(e) : console.error(e), i._interstitialAdIns = null;
                    }
                });
            }
            return this._interstitialAdIns;
        }
    }, {
        key: "createPortalAd",
        value: function createPortalAd(e) {
            var _this47 = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            if (PlatHelper.getPlat() && PlatHelper.getPlat().createGamePortalAd) {
                this._portalAdObj && (console.log("destory old unclosed portal..."), this._portalAdObj.destroy(), 
                this._portalAdObj = null);
                var a = PlatHelper.getPlat().createGamePortalAd({
                    adUnitId: e
                });
                a && (checkFunc(n) && (a.closeCb = n), a.onClose(function() {
                    var e = a.closeCb;
                    a.closeCb = null, _this47._portalAdObj.destroy(), _this47._portalAdObj = null, doCallback$1(e);
                }), a.load().then(function() {
                    adv_interface$1.reportLoadSuccAdv(FlowAdvType.Portal), a.show().then(function() {
                        doCallback$1(t), console.error("show...portalAdObj"), adv_interface$1.reportShowAdv(FlowAdvType.Portal, PlatAdOnShowFlow.portal);
                    }).catch(function(e) {
                        doCallback$1(i, e), checkFunc(i) || console.error(e);
                    });
                }).catch(function(e) {
                    adv_interface$1.reportLoadFailAdv(FlowAdvType.Portal), doCallback$1(i, e), checkFunc(i) || console.error(e);
                }), this._portalAdObj = a);
            }
            return this._portalAdObj;
        }
    }, {
        key: "createDrawerAd",
        value: function createDrawerAd(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            if (PlatHelper.getPlat() && PlatHelper.getPlat().createGameDrawerAd) {
                if (0 === PlatAdUnitIDs.gameNativeAdUnitIDs.length) return doCallback$1(i), null;
                this._isDrawerAdOnShow[e] = !0;
                var _a3 = t / 100 * PlatHelper.getPlat().getSystemInfoSync().screenHeight, o = PlatHelper.getPlat().createGameDrawerAd({
                    adUnitId: e,
                    style: {
                        top: _a3
                    }
                });
                o && (o.show().then(function() {
                    doCallback$1(n), console.error("show...DrawerAdObj"), adv_interface$1.reportShowAdv(FlowAdvType.Drawer, PlatAdOnShowFlow.drawer);
                }).catch(function(e) {
                    doCallback$1(i, e), checkFunc(i) || console.error(e);
                }), this._DrawerAdObj = o);
            }
            return this._DrawerAdObj;
        }
    }, {
        key: "createStreamerAd",
        value: function createStreamerAd(e) {
            var _this48 = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var n = arguments.length > 2 ? arguments[2] : undefined;
            var i = arguments.length > 3 ? arguments[3] : undefined;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            var s = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
            if (!PlatAdUnitIDs.gameNativeAdUnitIDs || 0 === PlatAdUnitIDs.gameNativeAdUnitIDs.length || -1 === PlatAdUnitIDs.gameNativeAdUnitIDs.indexOf(e)) return void console.error("Config Target Streamer adUnitId first, adUnitId:", e);
            this._isStreamerAdOnShow[e] = !0;
            var r = this._onLoadedStreamerAdObjs[e];
            r ? r.show().then(function() {
                console.error("Streamer....onShow"), adv_interface$1.reportShowAdv(FlowAdvType.Streamer, PlatAdOnShowFlow.streamer), 
                doCallback$1(a), _this48._isStreamerAdOnShow[e] || r.hide();
            }) : this._doCreateStreamerAd(e, t, n, i, function(t) {
                t && (console.error("OBJ"), _this48._isStreamerAdOnShow[e] && t.show().then(function() {
                    console.error("Streamer....onShow"), adv_interface$1.reportShowAdv(FlowAdvType.Streamer, PlatAdOnShowFlow.streamer), 
                    doCallback$1(a), _this48._isStreamerAdOnShow[e] || t.hide();
                }));
            }, o, s);
        }
    }, {
        key: "_doCreateStreamerAd",
        value: function _doCreateStreamerAd(e, t, n, i, a, o) {
            if (PlatHelper.getPlat() && PlatHelper.getPlat().createGameBannerAd) {
                var _a4 = {
                    left: 0,
                    top: 0,
                    orientation: "landscape" == n ? "horizontal" : "vertical"
                }, s = PlatHelper.getPlat().getSystemInfoSync(), r = {
                    width: 985,
                    height: 285
                }, l = {
                    width: 230,
                    height: 1080
                };
                t && "left" === t.layout && "number" == typeof t.top ? (_a4.left = 5, _a4.top = t.top / Laya.stage.height * s.screenHeight) : t && "right" === t.layout && "number" == typeof t.top ? (_a4.left = s.screenWidth - l.width, 
                _a4.top = t.top / Laya.stage.height * s.screenHeight) : t && "top" === t.layout && "number" == typeof t.top ? (isLoadLandscapeConfig$1() ? _a4.left = s.screenWidth - r.width : _a4.left = (s.screenWidth - r.width) / 2, 
                console.error("Align@@@@"), _a4.top = t.top / Laya.stage.height * s.screenHeight) : t && "bottom" === t.layout && "number" == typeof t.bottom ? (_a4.left = (s.screenWidth - r.width) / 2, 
                _a4.top = (Laya.stage.height - t.bottom) / Laya.stage.height * s.screenHeight - r.height) : console.error("align error, check input...", t);
                var d = {
                    adUnitId: e,
                    style: _a4
                };
                "number" == typeof gap && gap >= 30 && (d.adIntervals = gap);
                var h = PlatHelper.getPlat().createGameBannerAd(d);
                console.error("params: " + d), h && (h.onLoad(function() {
                    adv_interface$1.reportLoadSuccAdv(FlowAdvType.Streamer), doCallback$1(i, h);
                }), h.onError(function(e) {
                    adv_interface$1.reportLoadFailAdv(FlowAdvType.Streamer), doCallback$1(o, e), checkFunc(o) || console.error(e);
                }), this._onLoadedStreamerAdObjs[e] = h, h.show().then(function() {
                    console.log("show success");
                }).catch(function(e) {
                    console.log("show fail with:" + e.errCode + "," + e.errMsg);
                }));
            }
        }
    }, {
        key: "showStreamerAd",
        value: function showStreamerAd(e) {
            this.hideBase(e, this._isStreamerAdOnShow, this._onLoadedStreamerAdObjs[e], "show");
        }
    }, {
        key: "showDrawerAd",
        value: function showDrawerAd(e) {
            this.hideBase(e, this._isDrawerAdOnShow, this._DrawerAdObj, "show");
        }
    }, {
        key: "hideStreamerAd",
        value: function hideStreamerAd(e) {
            this.hideBase(e, this._isStreamerAdOnShow, this._onLoadedStreamerAdObjs[e]);
        }
    }, {
        key: "hideDrawerAd",
        value: function hideDrawerAd(e) {
            this.hideBase(e, this._isDrawerAdOnShow, this._DrawerAdObj);
        }
    }, {
        key: "hideBase",
        value: function hideBase(e, t, n) {
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "hide";
            if (t[e]) {
                t[e] = !1;
                var a = n;
                void 0 !== a && a[i]();
            }
        }
    }, {
        key: "hideAllStreamerAds",
        value: function hideAllStreamerAds() {
            for (var e in this._isStreamerAdOnShow) {
                this._isStreamerAdOnShow[e] && this.hideStreamerAd(e);
            }
            for (var _e37 in this._isDrawerAdOnShow) {
                this._isDrawerAdOnShow[_e37] && this.hideDrawerAd(_e37);
            }
        }
    }, {
        key: "isStreamerAdPreloaded",
        value: function isStreamerAdPreloaded(e) {
            return void 0 !== this._onLoadedStreamerAdObjs[e];
        }
    } ]);
    return OPPOAdv;
}(AdvBase);

var VIVOAdv = /* */ function(_AdvBase6) {
    _inherits2(VIVOAdv, _AdvBase6);
    var _super17 = _createSuper2(VIVOAdv);
    function VIVOAdv() {
        var _this49;
        _classCallCheck2(this, VIVOAdv);
        _this49 = _super17.call(this), _this49._gapOfEachInterstitialAd = GAP_OF_EACH_INTERSTITIAL_AD, 
        _this49._qgPortalAdObj = null, _this49._isQgPortalAdOnShow = {}, _this49._isQgStreamerAdOnShow = {}, 
        _this49._onLoadedQgStreamerAdObjs = {};
        return _this49;
    }
    _createClass2(VIVOAdv, [ {
        key: "isSupportInterstitialAd",
        value: function isSupportInterstitialAd() {
            return PlatAdUnitIDs.interstitialAdUnitIDs.length > 0 && !this._isForceUnSupportedInterstitial;
        }
    }, {
        key: "_stopSupportInterstitialAd",
        value: function _stopSupportInterstitialAd() {
            console.log("stop support interstitial ad..."), this._isForceUnSupportedInterstitial = !0, 
            Event.dispatchEvent(EventName.EN_INTERSTITIAL_NOT_SUPPORT_RIGHT_NOW);
        }
    }, {
        key: "_preloadInterstitialAd",
        value: function _preloadInterstitialAd(e, t) {
            this.isSupportInterstitialAd() ? null === this._interstitialAdIns && (this._interstitialAdIns = this._doCreateInterstitialAdObj(null, function() {
                console.log("preload interstitial finished...");
            }, null)) : doCallback$1(t);
        }
    }, {
        key: "createInterstitialAd",
        value: function createInterstitialAd(e, t, n) {
            if (!this.isSupportInterstitialAd()) return Event.dispatchEvent(EventName.EN_INTERSTITIAL_NOT_SUPPORT_RIGHT_NOW), 
            void doCallback$1(n);
            this._canShowInterstitialNow() ? null !== this._interstitialAdIns ? (checkFunc(t) && (this._interstitialAdIns.closeCb = t), 
            checkFunc(n) && (this._interstitialAdIns.errCb = n), this.showInterstitialAd(e, n)) : (this._stopSupportInterstitialAd(), 
            doCallback$1(n)) : doCallback$1(n);
        }
    }, {
        key: "_doCreateInterstitialAdObj",
        value: function _doCreateInterstitialAdObj(e, t, n) {
            if (this._interstitialAdIns) return this._interstitialAdIns;
            if (this._interstitialAdUnitIDIndex += 1, this._interstitialAdUnitIDIndex >= PlatAdUnitIDs.interstitialAdUnitIDs.length && (this._interstitialAdUnitIDIndex = 0), 
            this._interstitialAdIns = PlatHelper.getPlat().createInterstitialAd({
                adUnitId: "adunit-a0cf1d36cf7ac23b"
            }), this._interstitialAdIns) {
                var i = this;
                this._interstitialAdIns.onLoad(function() {
                    adv_interface$1.reportLoadSuccAdv(FlowAdvType.Interstitial), "function" == typeof t && t();
                }), this._interstitialAdIns.onClose(function() {
                    if (i._interstitialAdIns) {
                        var _e38 = i._interstitialAdIns.closeCb;
                        i._interstitialAdIns.errCb, i._lastTimeOfShowInterstitialAd = ServerInfo.getServerTime(), 
                        i._interstitialAdIns.closeCb = null, i._interstitialAdIns.errCb = null, _e38 && _e38(), 
                        i._preloadInterstitialAd();
                    }
                }), this._interstitialAdIns.onError(function(e) {
                    if (-1 === [ 2001, 2002, 2003, 2004, 2005 ].indexOf(e.errCode) && (adv_interface$1.reportLoadFailAdv(FlowAdvType.Interstitial), 
                    i._stopSupportInterstitialAd(), i._interstitialAdIns)) {
                        var _t22 = i._interstitialAdIns.errCb;
                        _t22 ? _t22(e) : console.error(e), i._interstitialAdIns = null;
                    }
                });
            }
            return this._interstitialAdIns;
        }
    }, {
        key: "createQgPortalAd",
        value: function createQgPortalAd(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            if (PlatHelper.getPlat() && PlatHelper.getPlat().createBoxPortalAd) {
                if (0 === PlatAdUnitIDs.gameNativeAdUnitIDs.length) return doCallback$1(a), null;
                this._isQgPortalAdOnShow[e] = !0;
                var o = t / 100 * PlatHelper.getPlat().getSystemInfoSync().screenHeight, s = PlatHelper.getPlat().createBoxPortalAd({
                    posId: e,
                    image: "",
                    marginTop: o
                });
                s && (s.onError(function(e) {
                    console.log("盒子九宫格广告加载失败", e), doCallback$1(a);
                }), s.onClose(function() {
                    console.log("close"), s.isDestroyed || (console.log("after"), Scheduler.schedule("Delay_Show_QgPortalAd_Icon", function() {
                        s.show(), console.log("show");
                    }, !1, 500, 0), doCallback$1(i));
                }), s.show().then(function() {
                    console.log("show success"), doCallback$1(n);
                }), this._qgPortalAdObj = s);
            }
            return this._qgPortalAdObj;
        }
    }, {
        key: "createQgStreamerAd",
        value: function createQgStreamerAd(e) {
            var _this50 = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            if (!PlatAdUnitIDs.gameNativeAdUnitIDs || 0 === PlatAdUnitIDs.gameNativeAdUnitIDs.length || -1 === PlatAdUnitIDs.gameNativeAdUnitIDs.indexOf(e)) return void console.error("Config Target Streamer adUnitId first, adUnitId:", e);
            this._isQgStreamerAdOnShow[e] = !0;
            var a = this._onLoadedQgStreamerAdObjs[e];
            a ? a.show().then(function() {
                console.error("Streamer....onShow"), adv_interface$1.reportShowAdv(FlowAdvType.Streamer, PlatAdOnShowFlow.streamer), 
                doCallback$1(t), _this50._isStreamerAdOnShow[e] || a.hide();
            }) : this._doCreateQgStreamerAd(e, function(n) {
                n && (console.error("OBJ"), _this50._isQgStreamerAdOnShow[e] && n.show().then(function() {
                    console.error("Streamer....onShow"), adv_interface$1.reportShowAdv(FlowAdvType.Streamer, PlatAdOnShowFlow.streamer), 
                    doCallback$1(t), _this50._isQgStreamerAdOnShow[e] || n.hide();
                }));
            }, n, i);
        }
    }, {
        key: "_doCreateQgStreamerAd",
        value: function _doCreateQgStreamerAd(e, t, n, i) {
            if (PlatHelper.getPlat() && PlatHelper.getPlat().createBoxBannerAd) {
                var _n8 = PlatHelper.getPlat().createBoxBannerAd({
                    posId: e
                });
                _n8 && (_n8.onError(function(e) {
                    adv_interface$1.reportLoadFailAdv(FlowAdvType.Streamer), doCallback$1(i, e), checkFunc(i) || console.error(e);
                }), this._onLoadedQgStreamerAdObjs[e] = _n8, _n8.show().then(function() {
                    console.log("show success"), doCallback$1(t);
                }).catch(function(e) {
                    console.log("show fail with:" + e.errCode + "," + e.errMsg);
                }));
            }
        }
    }, {
        key: "showPortalQgAd",
        value: function showPortalQgAd(e) {
            this.hideBase(e, this._isQgPortalAdOnShow, this._qgPortalAdObj, "show");
        }
    }, {
        key: "showStreamerQgAd",
        value: function showStreamerQgAd(e) {
            this.hideBase(e, this._isQgStreamerAdOnShow, this._onLoadedQgStreamerAdObjs[e], "show");
        }
    }, {
        key: "hidePortalQgAd",
        value: function hidePortalQgAd(e) {
            this.hideBase(e, this._isQgPortalAdOnShow, this._qgPortalAdObj);
        }
    }, {
        key: "hideStreamerQgAd",
        value: function hideStreamerQgAd(e) {
            this.hideBase(e, this._isQgStreamerAdOnShow, this._onLoadedQgStreamerAdObjs[e]);
        }
    }, {
        key: "hideBase",
        value: function hideBase(e, t, n) {
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "hide";
            if (t[e]) {
                t[e] = !1;
                var a = n;
                void 0 !== a && a[i]();
            }
        }
    }, {
        key: "hideAllQgStreamerAds",
        value: function hideAllQgStreamerAds() {
            for (var e in this._isQgStreamerAdOnShow) {
                this._isQgStreamerAdOnShow[e] && this.hideStreamerQgAd(e);
            }
            for (var _e39 in this._isQgPortalAdOnShow) {
                this._isQgPortalAdOnShow[_e39] && this.hidePortalQgAd(_e39);
            }
        }
    }, {
        key: "isQgStreamerAdPreloaded",
        value: function isQgStreamerAdPreloaded(e) {
            return void 0 !== this._onLoadedQgStreamerAdObjs[e];
        }
    } ]);
    return VIVOAdv;
}(AdvBase);

var _Adv = UnSupportAdv, Adv = new (_Adv = _isQQPlatform() ? QQAdv : _isTTPlatform() ? TTAdv : _isWXPlatform() ? WXAdv : _isOPPOPlatform() ? OPPOAdv : _isVIVOPlatform() ? VIVOAdv : UnSupportAdv)();

var C_GapOfEachBanner = 3e3, C_GapOfEachVideo = 3e3;

var _QGAdv = /* */ function() {
    function _QGAdv() {
        _classCallCheck2(this, _QGAdv);
        this._isSupport = !1, this._configs = null, this._onShowBannerObj = null, this._onShowVideoObj = null, 
        this._onShowInsertObj = null, this._unClickNativeObjs = [], this._lastUsedAdID = "";
    }
    _createClass2(_QGAdv, [ {
        key: "init",
        value: function init() {
            var _this51 = this;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            PlatHelper.isOPPOPlatform() && PlatHelper.getPlat().initAdService && checkString(PlatIDs.oppoAppID) ? PlatHelper.getPlat().initAdService({
                appId: PlatIDs.oppoAppID,
                isDebug: !0,
                success: function success(t) {
                    _this51._isSupport = !0, console.log("initAdService success"), doCallback$1(e);
                },
                fail: function fail(e) {
                    console.error("initAdService fail, code: " + e.code + ", msg: " + e.msg);
                },
                complete: function complete(e) {
                    console.log("initAdService complete");
                }
            }) : PlatHelper.isVIVOPlatform() && (this._isSupport = !0, doCallback$1(e));
        }
    }, {
        key: "isSupport",
        value: function isSupport() {
            return this._isSupport && this._configs.length > 0;
        }
    }, {
        key: "stopSupport",
        value: function stopSupport() {
            console.log("force stop support all qg advs..."), this._isSupport = !1;
        }
    }, {
        key: "isSupportBanner",
        value: function isSupportBanner() {
            return this._isSupport && PlatAdUnitIDs.bannerAdUnitIDs.length > 0;
        }
    }, {
        key: "isSupportVideo",
        value: function isSupportVideo() {
            return this._isSupport && PlatAdUnitIDs.videoAdUnitIDs.length > 0;
        }
    }, {
        key: "isSupportInsert",
        value: function isSupportInsert() {
            return this._isSupport && PlatAdUnitIDs.interstitialAdUnitIDs.length > 0;
        }
    }, {
        key: "isSupportNative",
        value: function isSupportNative() {
            return this._isSupport && PlatAdUnitIDs.nativeAdUnitIDs.length > 0 && this._unClickNativeObjs.length > 0;
        }
    }, {
        key: "preload",
        value: function preload(e) {
            console.log("start preload ov adv...");
            var t = 0, n = 0, i = !1;
            t += 1, this.loadRandomNativeAd(function(a) {
                a ? console.log("preload native ad succ...") : console.log("preload native ad fail..."), 
                a && (i = !0), (n += 1) === t && doCallback$1(e, !1, i);
            });
        }
    }, {
        key: "showRandomBannerAd",
        value: function showRandomBannerAd(e) {
            if (PlatAdUnitIDs.bannerAdUnitIDs.length > 0) {
                var t = random(0, PlatAdUnitIDs.bannerAdUnitIDs.length - 1), n = PlatAdUnitIDs.bannerAdUnitIDs[t];
                return this._doShowBanner(n, e);
            }
        }
    }, {
        key: "showRandomVideoAd",
        value: function showRandomVideoAd(e, t) {
            if (PlatAdUnitIDs.videoAdUnitIDs.length > 0) {
                var n = random(0, PlatAdUnitIDs.videoAdUnitIDs.length - 1), i = PlatAdUnitIDs.videoAdUnitIDs[n];
                return this._doShowVideo(i, e, t);
            }
            return null;
        }
    }, {
        key: "showRandomInsertAd",
        value: function showRandomInsertAd(e, t) {
            if (PlatAdUnitIDs.interstitialAdUnitIDs.length > 0) {
                var n = random(0, PlatAdUnitIDs.interstitialAdUnitIDs.length - 1), i = PlatAdUnitIDs.interstitialAdUnitIDs[n];
                return this._doShowInsertAd(i, e, t);
            }
            return null;
        }
    }, {
        key: "loadRandomNativeAd",
        value: function loadRandomNativeAd(e) {
            var _this52 = this;
            var t = 0, n = Math.min(3, PlatAdUnitIDs.nativeAdUnitIDs.length), i = function i(e, t) {
                var n = PlatAdUnitIDs.nativeAdUnitIDs[e];
                _this52._doLoadNativeAd(n, function(e) {
                    if (e) {
                        var _t23 = !1;
                        for (var _n9 = 0; _n9 < _this52._unClickNativeObjs.length; _n9++) {
                            if (_this52._unClickNativeObjs[_n9]._adList[0].adId === e._adList[0].adId) {
                                _t23 = !0;
                                break;
                            }
                        }
                        _t23 || _this52._unClickNativeObjs.push(e);
                    }
                    doCallback$1(t, e);
                });
            }, a = function a(o) {
                t += 1, i(o, function(i) {
                    if (i) doCallback$1(e, i); else if (t < n) {
                        var _e40 = o + 1;
                        _e40 === PlatAdUnitIDs.nativeAdUnitIDs.length && (_e40 = 0), a(_e40);
                    } else doCallback$1(e, null);
                });
            };
            if (PlatAdUnitIDs.nativeAdUnitIDs.length > 0) {
                var _e41 = random(0, PlatAdUnitIDs.nativeAdUnitIDs.length - 1);
                a(_e41);
            } else doCallback$1(e, null);
        }
    }, {
        key: "hideOnShowBannerAd",
        value: function hideOnShowBannerAd() {
            this._onShowBannerObj && this._onShowBannerObj.hide();
        }
    }, {
        key: "destroyOnShowBannerAd",
        value: function destroyOnShowBannerAd() {
            this._onShowBannerObj && (this._onShowBannerObj.destroy(), this._onShowBannerObj = null);
        }
    }, {
        key: "_doShowBanner",
        value: function _doShowBanner(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            if (!this._isSupport) return null;
            if (console.log("show banner: ", e), this._onShowBannerObj) if (PlatHelper.isOPPOPlatform()) this._onShowBannerObj.destroy(), 
            this._onShowBannerObj = null; else if (ServerInfo.getServerTime() - this._onShowBannerObj._lastCreatedTime > C_GapOfEachBanner) this._onShowBannerObj.destroy(), 
            this._onShowBannerObj = null; else {
                var _e42 = C_GapOfEachBanner / 1e3 - Math.floor((ServerInfo.getServerTime() - this._onShowBannerObj._lastCreatedTime) / 1e3);
                console.log("banner广告还未准备好，请{0}秒后重新尝试".format(_e42.toString()));
            }
            if (null === this._onShowBannerObj) {
                var n = null;
                if (n = PlatHelper.isOPPOPlatform() ? PlatHelper.getPlat().createBannerAd({
                    posId: e
                }) : PlatHelper.getPlat().createBannerAd({
                    posId: e,
                    style: {}
                }), checkFunc(t) && (n._loadCb = t), PlatHelper.isVIVOPlatform() && n.onLoad(function() {
                    if (n && n._loadCb) {
                        var _e43 = n._loadCb;
                        n._loadCb = null, _e43(n);
                    } else n.show().then(function() {
                        adv_interface$1.reportShowAdv(FlowAdvType.Banner, PlatAdOnShowFlow.banner);
                    });
                }), n.onError(function(e) {
                    console.error("banner ad err: ", e), PlatHelper.isVIVOPlatform() && (this._onShowBannerObj = null);
                }), PlatHelper.isVIVOPlatform() && n.onClose(function() {
                    this._onShowBannerObj = null;
                }), this._onShowBannerObj = n, this._onShowBannerObj._lastCreatedTime = ServerInfo.getServerTime(), 
                PlatHelper.isOPPOPlatform()) if (n._loadCb) {
                    var _e44 = n._loadCb;
                    n._loadCb = null, _e44(n);
                } else n.show().then(function() {
                    adv_interface$1.reportShowAdv(FlowAdvType.Banner, PlatAdOnShowFlow.banner);
                });
            }
            return this._onShowBannerObj;
        }
    }, {
        key: "_doShowVideo",
        value: function _doShowVideo(e, t, n) {
            if (!this._isSupport) return null;
            if (this._onShowVideoObj && PlatHelper.isOPPOPlatform() && (this._onShowVideoObj.destroy(), 
            this._onShowVideoObj = null), null === this._onShowVideoObj && (this._onShowVideoObj = this._doCreateVideoObj(e)), 
            console.log("show video: ", e), checkFunc(t) && (this._onShowVideoObj.closeCb = t), 
            checkFunc(n) && (this._onShowVideoObj.errCb = n), PlatHelper.isOPPOPlatform()) this._onShowVideoObj.load(); else if (this._onShowVideoObj._lastShowedTime) {
                if (console.log(ServerInfo.getServerTime(), "-", this._onShowVideoObj._lastShowedTime), 
                ServerInfo.getServerTime() - this._onShowVideoObj._lastShowedTime > C_GapOfEachVideo) this._onShowVideoObj.load(); else {
                    var _e45 = this._onShowVideoObj.errCb;
                    this._onShowVideoObj.closeCb = null, this._onShowVideoObj.errCb = null, doCallback$1(_e45, -1);
                }
            } else this._onShowVideoObj.load();
            return this._onShowVideoObj;
        }
    }, {
        key: "_doCreateVideoObj",
        value: function _doCreateVideoObj(e) {
            var t = PlatHelper.getPlat().createRewardedVideoAd({
                posId: e
            });
            return t.onLoad(function() {
                t.show().then(function() {
                    adv_interface$1.reportShowAdv(FlowAdvType.RewardedVideo, PlatAdOnShowFlow.video);
                });
            }), t.onClose(function(e) {
                t._lastShowedTime = ServerInfo.getServerTime(), e.isEnded ? console.log("激励视频广告完成，发放奖励") : console.log("激励视频广告取消关闭，不发放奖励");
                var n = t.closeCb;
                t.closeCb = null, t.errCb = null, doCallback$1(n, e.isEnded);
            }), t.onError(function(e) {
                console.error("video ad err: ", e);
                var n = t.errCb;
                t.closeCb = null, t.errCb = null, doCallback$1(n, -1);
            }), t;
        }
    }, {
        key: "_doShowInsertAd",
        value: function _doShowInsertAd(e, t, n) {
            var _this53 = this;
            if (!this._isSupport) return null;
            console.log("show insert: ", e);
            var i = null;
            return i = PlatHelper.getPlat().createInsertAd ? PlatHelper.getPlat().createInsertAd({
                posId: e
            }) : PlatHelper.getPlat().createInterstitialAd({
                posId: e
            }), PlatHelper.isOPPOPlatform() && i.onLoad(function() {
                this._onShowBannerObj && this._onShowBannerObj.hide(), i.show().then(function() {
                    adv_interface$1.reportShowAdv(FlowAdvType.Interstitial, PlatAdOnShowFlow.interstitial);
                });
            }), i.onClose(function() {
                this._onShowInsertObj = null, doCallback$1(t);
            }), i.onError(function(e) {
                console.error("insert ad err: ", e), doCallback$1(n);
            }), this._onShowInsertObj = i, PlatHelper.isOPPOPlatform() ? (console.log("start to load insert ad..."), 
            i.load()) : i.show().then(function() {
                console.log("show insert ad succ..."), _this53._onShowBannerObj && _this53._onShowBannerObj.hide();
            }), i;
        }
    }, {
        key: "_doLoadNativeAd",
        value: function _doLoadNativeAd(e, t) {
            if (!this._isSupport) return null;
            console.log("load native: ", e);
            var n = PlatHelper.getPlat().createNativeAd({
                posId: e
            }), _i4 = null;
            _i4 = function i(e) {
                console.error("native ad loaded:", e), n.offLoad(_i4), n.offError(_a5), e.adList.length > 0 && (e.adList.forEach(function(e) {
                    e.localAdID = generateString(32);
                }), n._adList = e.adList, doCallback$1(t, n));
            };
            var _a5 = null;
            return _a5 = function a(e) {
                console.error("native ad err:", e), n.offLoad(_i4), n.offError(_a5), doCallback$1(t, null);
            }, n.onLoad(_i4), n.onError(_a5), n.load(), n;
        }
    }, {
        key: "isWatchingVideoAdv",
        value: function isWatchingVideoAdv() {
            return !(!this._onShowVideoObj || !this._onShowVideoObj.closeCb);
        }
    }, {
        key: "getNextNativeAdInfo",
        value: function getNextNativeAdInfo() {
            if (console.error("nativeAd:  " + this._unClickNativeObjs.length), this._unClickNativeObjs.length > 0) for (var e = this._unClickNativeObjs.length - 1; e >= 0; e--) {
                this._unClickNativeObjs[e] || this._unClickNativeObjs.splice(e, 1);
            }
            if (this._unClickNativeObjs.length > 0) {
                var _e46 = this._unClickNativeObjs;
                if (console.log("last used ad id: ", this._lastUsedAdID), this._unClickNativeObjs.length > 1 && "" !== this._lastUsedAdID) {
                    _e46 = [];
                    for (var _t24 = 0; _t24 < this._unClickNativeObjs.length; _t24++) {
                        this._unClickNativeObjs[_t24]._adList[this._unClickNativeObjs[_t24]._adList.length - 1].localAdID !== this._lastUsedAdID && _e46.push(this._unClickNativeObjs[_t24]);
                    }
                }
                var t = _e46[random(0, _e46.length - 1)], n = t._adList[t._adList.length - 1];
                return this._lastUsedAdID = n.localAdID, console.log("next used ad id: ", this._lastUsedAdID), 
                [ t, n ];
            }
            return this.loadRandomNativeAd(function(e) {
                e ? console.log("auto preload next native ad succ...") : console.log("auto preload next native ad fail...");
            }), null;
        }
    }, {
        key: "reportNativeAdShow",
        value: function reportNativeAdShow(e, t) {
            console.log("just show native ad..."), e && e.reportAdShow({
                adId: t
            });
        }
    }, {
        key: "reportNativeAdHide",
        value: function reportNativeAdHide() {
            this._isSupport && (console.log("just hide native ad..."), this.loadRandomNativeAd(function(e) {
                e ? console.log("auto preload next native ad succ...") : console.log("auto preload next native ad fail...");
            }));
        }
    }, {
        key: "reportNativeAdClick",
        value: function reportNativeAdClick(e, t) {
            if (console.log("just click native ad..."), e && (e.reportAdClick({
                adId: t
            }), e._adList.pop(), 0 === e._adList.length)) for (var _t25 = 0; _t25 < this._unClickNativeObjs.length; _t25++) {
                this._unClickNativeObjs[_t25] === e && this._unClickNativeObjs.splice(_t25, 1);
            }
        }
    } ]);
    return _QGAdv;
}();

var QGAdv = new _QGAdv();

var C_Gap_Of_Each_Reward_Video = 1e4, C_Gap_Of_Each_Interaction = 1e4, INTERFACE_OF_ANDROID_IN_JAVA = "org/cocos2dx/javascript/AppActivity", INTERFACE_OF_IOS_IN_OBC = "AppController";

var _NativeAdv = /* */ function() {
    function _NativeAdv() {
        _classCallCheck2(this, _NativeAdv);
        this._isBannerOnShow = !1, this._isRewardVideoLoaded = !1, this._rewardVideoLoadCb = null, 
        this._rewardVideoCloseCb = null, this._rewardVideoErrCb = null, this._isInteractionLoaded = !1, 
        this._interactionLoadCb = null, this._interactionCloseCb = null, this._interactionErrCb = null;
    }
    _createClass2(_NativeAdv, [ {
        key: "preload",
        value: function preload() {
            PlatHelper.isAndroidNativePlatform() ? PlatHelper.getPlat().reflection.callStaticMethod(INTERFACE_OF_ANDROID_IN_JAVA, "preloadAllAdvs", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", PlatAdUnitIDs.splashAdUnitIDs.join("|"), PlatAdUnitIDs.bannerAdUnitIDs.join("|"), PlatAdUnitIDs.videoAdUnitIDs.join("|"), PlatAdUnitIDs.interstitialAdUnitIDs.join("|")) : PlatHelper.getPlat().reflection.callStaticMethod(INTERFACE_OF_IOS_IN_OBC, "preloadAllAdvs:splashCodeIds:bannerCodeIds:videoCodeIds:interactionCodeIds:", HLSDKLocalData._openID, PlatAdUnitIDs.splashAdUnitIDs.join("|"), PlatAdUnitIDs.bannerAdUnitIDs.join("|"), PlatAdUnitIDs.videoAdUnitIDs.join("|"), PlatAdUnitIDs.interstitialAdUnitIDs.join("|"));
        }
    }, {
        key: "isSupportBanner",
        value: function isSupportBanner() {
            return PlatAdUnitIDs.bannerAdUnitIDs.length > 0;
        }
    }, {
        key: "showBanner",
        value: function showBanner() {
            _isBannerOnShow = !0, PlatHelper.isAndroidNativePlatform() ? PlatHelper.getPlat().reflection.callStaticMethod(INTERFACE_OF_ANDROID_IN_JAVA, "showBannerAdv", "()V") : PlatHelper.getPlat().reflection.callStaticMethod(INTERFACE_OF_IOS_IN_OBC, "showBannerAdv");
        }
    }, {
        key: "hideBanner",
        value: function hideBanner() {
            _isBannerOnShow = !1, PlatHelper.isAndroidNativePlatform() ? PlatHelper.getPlat().reflection.callStaticMethod(INTERFACE_OF_ANDROID_IN_JAVA, "hideBannerAdv", "()V") : PlatHelper.getPlat().reflection.callStaticMethod(INTERFACE_OF_IOS_IN_OBC, "hideBannerAdv");
        }
    }, {
        key: "isSupportRewardVideo",
        value: function isSupportRewardVideo() {
            return PlatAdUnitIDs.videoAdUnitIDs.length > 0;
        }
    }, {
        key: "isRewardVideoLoaded",
        value: function isRewardVideoLoaded() {
            return _isRewardVideoLoaded;
        }
    }, {
        key: "showRewardVideo",
        value: function showRewardVideo(e, t) {
            _isRewardVideoLoaded ? ("function" == typeof e && (_rewardVideoCloseCb = e), _rewardVideoErrCb = "function" == typeof t ? t : null, 
            PlatHelper.isAndroidNativePlatform() ? PlatHelper.getPlat().reflection.callStaticMethod(INTERFACE_OF_ANDROID_IN_JAVA, "showRewardVideoAdv", "()V") : PlatHelper.getPlat().reflection.callStaticMethod(INTERFACE_OF_IOS_IN_OBC, "showRewardVideoAdv")) : doCallback$1(t);
        }
    }, {
        key: "_loadNextRewardVideo",
        value: function _loadNextRewardVideo(e, t) {
            _isRewardVideoLoaded ? doCallback$1(e) : ("function" == typeof e && (_rewardVideoLoadCb = e), 
            _rewardVideoErrCb = "function" == typeof t ? t : null, PlatHelper.isAndroidNativePlatform() ? PlatHelper.getPlat().reflection.callStaticMethod(INTERFACE_OF_ANDROID_IN_JAVA, "loadRewardVideoAdv", "()V") : PlatHelper.getPlat().reflection.callStaticMethod(INTERFACE_OF_IOS_IN_OBC, "loadRewardVideoAdv"));
        }
    }, {
        key: "onRewardVideoLoaded",
        value: function onRewardVideoLoaded() {
            _isRewardVideoLoaded = !0;
            var e = _rewardVideoLoadCb;
            _rewardVideoLoadCb = null, doCallback$1(e, !1);
        }
    }, {
        key: "onRewardVideoClosed",
        value: function onRewardVideoClosed() {
            _isRewardVideoLoaded = !1;
            var e = _rewardVideoCloseCb;
            _rewardVideoCloseCb = null, doCallback$1(e, !1), this._autoLoadNextRewardVideo();
        }
    }, {
        key: "onRewardVideoFinished",
        value: function onRewardVideoFinished() {
            _isRewardVideoLoaded = !1;
            var e = _rewardVideoCloseCb;
            _rewardVideoCloseCb = null, doCallback$1(e, !0), this._autoLoadNextRewardVideo();
        }
    }, {
        key: "onRewardVideoError",
        value: function onRewardVideoError() {
            _isRewardVideoLoaded = !1;
            var e = _rewardVideoErrCb;
            _rewardVideoErrCb = null, doCallback$1(e), this._autoLoadNextRewardVideo();
        }
    }, {
        key: "_autoLoadNextRewardVideo",
        value: function _autoLoadNextRewardVideo() {
            var _this54 = this;
            Scheduler.schedule("Auto_Load_Next_Reward_Video", function() {
                _isRewardVideoLoaded || _this54._loadNextRewardVideo();
            }, !1, C_Gap_Of_Each_Reward_Video, 0);
        }
    }, {
        key: "isSupportInteraction",
        value: function isSupportInteraction() {
            return PlatAdUnitIDs.interstitialAdUnitIDs.length > 0;
        }
    }, {
        key: "isInteractionLoaded",
        value: function isInteractionLoaded() {
            return _isInteractionLoaded;
        }
    }, {
        key: "showInteraction",
        value: function showInteraction(e, t) {
            _isInteractionLoaded ? ("function" == typeof e && (_interactionCloseCb = e), _interactionErrCb = "function" == typeof t ? t : null, 
            PlatHelper.isAndroidNativePlatform() ? PlatHelper.getPlat().reflection.callStaticMethod(INTERFACE_OF_ANDROID_IN_JAVA, "showInteractionAdv", "()V") : PlatHelper.getPlat().reflection.callStaticMethod(INTERFACE_OF_IOS_IN_OBC, "showInteractionAdv")) : doCallback$1(t);
        }
    }, {
        key: "_loadNextInteraction",
        value: function _loadNextInteraction(e, t) {
            _isInteractionLoaded ? doCallback$1(e) : ("function" == typeof e && (_interactionLoadCb = e), 
            _interactionErrCb = "function" == typeof t ? t : null, PlatHelper.isAndroidNativePlatform() ? PlatHelper.getPlat().reflection.callStaticMethod(INTERFACE_OF_ANDROID_IN_JAVA, "loadInteractionAdv", "()V") : PlatHelper.getPlat().reflection.callStaticMethod(INTERFACE_OF_IOS_IN_OBC, "loadInteractionAdv"));
        }
    }, {
        key: "onInteractionLoaded",
        value: function onInteractionLoaded() {
            _isInteractionLoaded = !0;
            var e = _interactionLoadCb;
            _interactionLoadCb = null, doCallback$1(e);
        }
    }, {
        key: "onInteractionClosed",
        value: function onInteractionClosed() {
            _isInteractionLoaded = !1;
            var e = _interactionCloseCb;
            _interactionCloseCb = null, doCallback$1(e), this._autoLoadNextInteraction();
        }
    }, {
        key: "onInteractionError",
        value: function onInteractionError() {
            _isInteractionLoaded = !1;
            var e = _interactionErrCb;
            _interactionErrCb = null, doCallback$1(e), this._autoLoadNextInteraction();
        }
    }, {
        key: "_autoLoadNextInteraction",
        value: function _autoLoadNextInteraction() {
            Scheduler.schedule("Auto_Load_Next_Interaction", function() {
                _isInteractionLoaded || this._loadNextInteraction();
            }, !1, C_Gap_Of_Each_Interaction, 0);
        }
    } ]);
    return _NativeAdv;
}();

var NativeAdv = new _NativeAdv();

var bannerMgr = /* */ function() {
    function bannerMgr() {
        _classCallCheck2(this, bannerMgr);
    }
    _createClass2(bannerMgr, [ {
        key: "init",
        value: function init(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3e4;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        }
    }, {
        key: "createBannerAd",
        value: function createBannerAd(e) {}
    }, {
        key: "left",
        get: function get() {
            return 0;
        }
    }, {
        key: "top",
        get: function get() {
            return 0;
        }
    }, {
        key: "width",
        get: function get() {
            return 300;
        }
    }, {
        key: "height",
        get: function get() {
            return 105;
        }
    }, {
        key: "destroyBannerAd",
        value: function destroyBannerAd() {}
    }, {
        key: "resetBannerAd",
        value: function resetBannerAd() {}
    }, {
        key: "showBannerAd",
        value: function showBannerAd() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        }
    }, {
        key: "hideBannerAd",
        value: function hideBannerAd() {}
    } ]);
    return bannerMgr;
}();

var Version = /* */ function() {
    function Version() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        _classCallCheck2(this, Version);
        "number" == typeof e ? (this.minor = e, this.major = t, this.build = n, this.revision = i) : "string" == typeof e && this.m_parse(e);
    }
    _createClass2(Version, [ {
        key: "Minor",
        get: function get() {
            return this.minor;
        }
    }, {
        key: "Major",
        get: function get() {
            return this.major;
        }
    }, {
        key: "Build",
        get: function get() {
            return this.build;
        }
    }, {
        key: "Revision",
        get: function get() {
            return this.revision;
        }
    }, {
        key: "m_parse",
        value: function m_parse(e) {
            this.minor = this.major = this.build = this.revision = 0;
            var t = e.split(".");
            this.minor = Number(t[0]), t.length > 1 && (this.major = Number(t[1])), t.length > 2 && (this.build = Number(t[2])), 
            t.length > 3 && (this.revision = Number(t[3]));
        }
    }, {
        key: "Compare",
        value: function Compare(e) {
            return 1e3 * (this.minor - e.Minor) + 100 * (this.major - e.Major) + 10 * (this.build - e.Build) + (this.revision - e.Revision);
        }
    }, {
        key: "CompareToString",
        value: function CompareToString(e) {
            return versionCompare.m_parse(e), this.Compare(versionCompare);
        }
    } ]);
    return Version;
}();

var versionCompare = new Version();

var qqBannerMgr = /* */ function(_bannerMgr) {
    _inherits2(qqBannerMgr, _bannerMgr);
    var _super18 = _createSuper2(qqBannerMgr);
    function qqBannerMgr() {
        var _this55;
        _classCallCheck2(this, qqBannerMgr);
        _this55 = _super18.call(this), _this55.banIndex = -1, _this55.BannerIDs = [], _this55.BannerBrushIDs = [], 
        _this55.Version = new Version("0.0.0.0"), _this55.bannerAds = [], _this55.bannerAd = null, 
        _this55.nextBannerAd = null, _this55.BrushBannerObj = null, _this55.isBannerShow = !1, 
        _this55.BrushBannerAdIntervals = 40, _this55.BrushBannerRefreshTime = 35, _this55.SystemInfo = null, 
        _this55.MaxShowTime = 0, _this55.MaxClickCount = 0, _this55.preloadCount = 0, _this55.DefaultHeight = 73;
        return _this55;
    }
    _createClass2(qqBannerMgr, [ {
        key: "refreshBanId",
        get: function get() {
            return this.banIndex++, this.BannerIDs.length <= 0 ? -1 : this.banIndex % this.BannerIDs.length;
        }
    }, {
        key: "init",
        value: function init(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3e4;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            shuffleArray(e = e.split("||")), this.BrushBannerAdIntervals = t, this.BrushBannerRefreshTime = n, 
            this.preloadCount = 0, this.SystemInfo = qq.getSystemInfoSync();
            var s = e.length;
            for (var _t26 = 0; _t26 < s; _t26++) {
                this.BannerIDs.push(e[_t26]);
            }
            this.preloadBanner(o), this.MaxShowTime = i, this.MaxClickCount = a, 0 == i && 0 == a || (console.log("监听小游戏打开事件"), 
            qq.onShow(this.onShow.bind(this)));
        }
    }, {
        key: "preloadBanner",
        value: function preloadBanner(e) {
            if (e > 0) for (var t = 0; t < this.BannerIDs.length && t < e; t++) {
                this.bannerAds.push(this.createBannerAd(null, this.BannerIDs[t]));
            }
        }
    }, {
        key: "onShow",
        value: function onShow(e) {
            null != this.bannerAd && (this.censusTime(), this.bannerAd.ClickCount++, this.checkReset());
        }
    }, {
        key: "checkReset",
        value: function checkReset() {
            null != this.bannerAd && (this.MaxClickCount > 0 || this.MaxShowTime > 0) && this.bannerAd.ClickCount >= this.MaxClickCount && this.bannerAd.ShowTotalTime >= this.MaxShowTime && this.resetBannerAd();
        }
    }, {
        key: "createBannerAd",
        value: function createBannerAd(e) {
            var _this56 = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = null;
            if (qq) {
                var i = t;
                if (null == t) {
                    if ((i = this.refreshBanId) < 0) return;
                    i = this.BannerIDs[i];
                }
                null == e && (e = {
                    left: this.SystemInfo.screenWidth / 2 - 150,
                    top: this.SystemInfo.screenHeight - this.DefaultHeight,
                    width: 300
                }), e.width = 300, (n = this.MaxClickCount > 0 || this.MaxShowTime > 0 ? qq.createBannerAd({
                    adUnitId: i,
                    style: e
                }) : qq.createBannerAd({
                    adIntervals: 30,
                    adUnitId: i,
                    style: e
                })).bannerID = i, n.ClickCount = 0, n.ShowTime = n.ShowTotalTime = 0, console.log("banner创建 id=", i), 
                n.onLoad(function() {
                    if (console.log("banner创建成功 id=", i), n.offLoad(), n.loaded = !0, _this56.nextBannerAd == n) {
                        if (_this56.preloadCount > 0) {
                            var _e47 = _this56.bannerAds.indexOf(_this56.bannerAd);
                            _e47 >= 0 && _this56.bannerAds.splice(_e47, 1);
                        }
                        _this56.destroyBannerAd(), _this56.preloadCount > 0 ? (_this56.bannerAds.indexOf(), 
                        _this56.bannerAds.push(n)) : _this56.bannerAd = _this56.nextBannerAd, _this56.nextBannerAd = null;
                    }
                    _this56.isBannerShow && _this56.bannerAd == n && _this56.showBannerAd(e), adv_interface$1.reportLoadSuccAdv(FlowAdvType.Banner);
                }), n.onResize(function() {
                    console.log("Resize", n), n.width = n.style.realWidth || 300, n.height = n.style.realHeight || _this56.DefaultHeight, 
                    n.aspectratio = n.width / n.height, null != n.lastStyle ? (n.style.left = n.lastStyle.left, 
                    n.style.top = n.lastStyle.top) : n.style.left = (_this56.SystemInfo.screenWidth - n.style.realWidth) / 2, 
                    n.offResize();
                }), n.onError(function(e) {
                    n.offError(), console.log("创建banner失败: ", e), adv_interface$1.reportLoadFailAdv(FlowAdvType.Banner);
                });
            }
            return n;
        }
    }, {
        key: "left",
        get: function get() {
            return null != this.bannerAd ? this.bannerAd.style.left : this.SystemInfo.screenWidth / 2 - 150;
        }
    }, {
        key: "top",
        get: function get() {
            return null != this.bannerAd ? this.bannerAd.style.top : this.SystemInfo.screenHeight - this.DefaultHeight;
        }
    }, {
        key: "width",
        get: function get() {
            return null != this.bannerAd ? this.bannerAd.width : 300;
        }
    }, {
        key: "height",
        get: function get() {
            return null != this.bannerAd ? this.bannerAd.height : this.DefaultHeight;
        }
    }, {
        key: "destroyBannerAd",
        value: function destroyBannerAd() {
            null != this.bannerAd && (console.log("销毁 banner"), this.bannerAd.destroy(), this.bannerAd = null);
        }
    }, {
        key: "resetBannerAd",
        value: function resetBannerAd() {
            console.log("创建新banner");
            var e = null, t = this.getBannerIDUnrepeat();
            null != this.bannerAd && (e = this.bannerAd.lastStyle, this.preloadCount > 0 && this.bannerAds.push(this.bannerAd)), 
            this.nextBannerAd = this.createBannerAd(e, t);
        }
    }, {
        key: "getBannerIDUnrepeat",
        value: function getBannerIDUnrepeat() {
            for (var e = 0; e < this.BannerIDs.length; e++) {
                var t = !1;
                for (var n = 0; n < this.bannerAds.length; n++) {
                    if (this.BannerIDs[e] == this.bannerAds[n].bannerID) {
                        t = !0;
                        break;
                    }
                }
                if (!t) return this.BannerIDs[e];
            }
            return null;
        }
    }, {
        key: "showBannerAd",
        value: function showBannerAd() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return this.isBannerShow = !0, null == this.bannerAd && (this.bannerAds.length > 0 ? this.bannerAd = this.bannerAds.shift() : this.bannerAd = this.createBannerAd(e)), 
            null != this.bannerAd && (adv_interface$1.reportShowAdv(FlowAdvType.Banner, PlatAdOnShowFlow.banner), 
            !this.bannerAd.visible && this.bannerAd.loaded && (console.log("显示 banner"), this.bannerAd.show(), 
            this.bannerAd.visible = !0, this.bannerAd.ShowTime = Date.now()), this.bannerAd.lastStyle = e, 
            null == e ? (this.bannerAd.width = 300, this.bannerAd.height = this.DefaultHeight, 
            this.bannerAd.style.left = (this.SystemInfo.screenWidth - (this.bannerAd.style.realWidth || this.bannerAd.width)) / 2, 
            this.bannerAd.style.top = this.SystemInfo.screenHeight - (this.bannerAd.style.realHeight || this.bannerAd.height)) : (this.bannerAd.width = e.width || 300, 
            this.bannerAd.height = e.height || this.DefaultHeight, this.bannerAd.style.left = null != e.left ? e.left : (this.SystemInfo.screenWidth - (this.bannerAd.style.realWidth || this.bannerAd.width)) / 2, 
            this.bannerAd.style.top = null != e.top ? e.top : this.SystemInfo.screenHeight - (this.bannerAd.style.realHeight || this.bannerAd.height))), 
            this.bannerAd;
        }
    }, {
        key: "hideBannerAd",
        value: function hideBannerAd() {
            this.isBannerShow = !1, null != this.bannerAd && this.bannerAd.visible && (this.censusTime(), 
            console.log("隐藏 banner"), this.bannerAd.hide(), this.bannerAd.visible = !1, this.checkReset(), 
            this.preloadCount > 0 && (this.bannerAds.push(this.bannerAd), this.bannerAd = null));
        }
    }, {
        key: "censusTime",
        value: function censusTime() {
            null != this.bannerAd && (this.bannerAd.ShowTotalTime += Date.now() - this.bannerAd.ShowTime, 
            this.bannerAd.ShowTime = Date.now());
        }
    } ]);
    return qqBannerMgr;
}(bannerMgr);

var wxBannerMgr = /* */ function(_bannerMgr2) {
    _inherits2(wxBannerMgr, _bannerMgr2);
    var _super19 = _createSuper2(wxBannerMgr);
    function wxBannerMgr() {
        var _this57;
        _classCallCheck2(this, wxBannerMgr);
        _this57 = _super19.call(this), _this57.banIndex = -1, _this57.BannerIDs = [], _this57.CreateBannerID = [], 
        _this57.BannerBrushIDs = [], _this57.Version = new Version(wx.version.version), 
        _this57.bannerAds = [], _this57.bannerAd = null, _this57.nextBannerAd = null, _this57.BrushBannerObj = null, 
        _this57.isBannerShow = !1, _this57.BrushBannerAdIntervals = 40, _this57.BrushBannerRefreshTime = 35, 
        _this57.SystemInfo = null, _this57.MaxShowTime = 0, _this57.MaxClickCount = 0, _this57.preloadCount = 0, 
        _this57.refreshTime = 0, _this57.createTime = 0;
        return _this57;
    }
    _createClass2(wxBannerMgr, [ {
        key: "init",
        value: function init(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3e4;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            var s = arguments.length > 6 ? arguments[6] : undefined;
            var r = e.split("||");
            for (e = []; r.length > 0; ) {
                var _t27 = Math.floor(Math.random() * r.length);
                e.push(r[_t27]), r.splice(_t27, 1);
            }
            if (this.BrushBannerAdIntervals = t, this.BrushBannerRefreshTime = n, this.preloadCount = o, 
            this.SystemInfo = wx.getSystemInfoSync(), 1 == s) {
                if (e.length > 1) {
                    var _t28 = Math.floor(e.length / 2);
                    for (var _n10 = 0; _n10 < _t28; _n10++) {
                        this.BannerIDs.push(e[_n10]);
                    }
                    for (var _n11 = _t28; _n11 < e.length; _n11++) {
                        this.BannerBrushIDs.push(e[_n11]);
                    }
                }
            } else for (var _t29 = 0; _t29 < e.length; _t29++) {
                this.BannerIDs.push(e[_t29]);
            }
            this.CreateBannerID = this.BannerIDs.concat([]), this.BannerBrushIDs.length > 0 && this.brushBanner(), 
            this.preloadBanner(o), this.MaxShowTime = i, this.MaxClickCount = a;
        }
    }, {
        key: "preloadBanner",
        value: function preloadBanner(e) {
            if (e > 0) for (var t = 0; t < this.BannerIDs.length && t < e; t++) {
                this.bannerAds.push(this.createBannerAd(null));
            }
        }
    }, {
        key: "createBannerAd",
        value: function createBannerAd(e) {
            var _this58 = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = null;
            if (wx) {
                var i = t;
                if (null == t) {
                    if (!(this.CreateBannerID.length > 0)) return this.bannerAds.shift();
                    i = this.CreateBannerID.shift();
                }
                null == e && (e = {
                    left: this.SystemInfo.screenWidth / 2 - 150,
                    top: this.SystemInfo.screenHeight - 105,
                    width: 300
                }), e.width = 300, (n = (this.MaxClickCount > 0 || this.MaxShowTime, wx.createBannerAd({
                    adIntervals: 30,
                    adUnitId: i,
                    style: e
                }))).bannerID = i, n.ClickCount = 0, n.ShowTime = n.ShowTotalTime = 0, console.log("banner创建 id=", i), 
                n.onLoad(function() {
                    if (console.log("banner创建成功 id=", i), n.offLoad(), n.loaded = !0, _this58.nextBannerAd == n) {
                        if (_this58.preloadCount > 0) {
                            var _e48 = _this58.bannerAds.indexOf(_this58.bannerAd);
                            _e48 >= 0 && _this58.bannerAds.splice(_e48, 1);
                        }
                        _this58.destroyBannerAd(), _this58.preloadCount > 0 ? (_this58.bannerAds.indexOf(), 
                        _this58.bannerAds.push(n)) : _this58.bannerAd = _this58.nextBannerAd, _this58.nextBannerAd = null;
                    }
                    _this58.isBannerShow && _this58.bannerAd == n && _this58.showBannerAd(e), adv_interface$1.reportLoadSuccAdv(FlowAdvType.Banner);
                }), n.onResize(function() {
                    console.log("Resize", n), n.width = n.style.realWidth || 300, n.height = n.style.realHeight || 105, 
                    n.aspectratio = n.width / n.height, null != n.lastStyle ? (n.style.left = n.lastStyle.left, 
                    n.style.top = n.lastStyle.top) : n.style.left = (_this58.SystemInfo.screenWidth - n.style.realWidth) / 2, 
                    n.offResize();
                }), n.onError(function(t) {
                    n.offError(), console.log("创建banner失败: ", t), Scheduler.unschedule("delay_retry_create_Banner"), 
                    _this58.createTime++;
                    var i = n.bannerID;
                    _this58.createTime <= 3 ? Scheduler.schedule("delay_retry_create_Banner", function() {
                        _this58.bannerAd = _this58.createBannerAd(e, i);
                    }, !1, 100 * _this58.createTime, 0) : _this58.CreateBannerID.push(i), adv_interface$1.reportLoadFailAdv(FlowAdvType.Banner);
                });
            }
            return n;
        }
    }, {
        key: "left",
        get: function get() {
            return null != this.bannerAd ? this.bannerAd.style.left : this.SystemInfo.screenWidth / 2 - 150;
        }
    }, {
        key: "top",
        get: function get() {
            return null != this.bannerAd ? this.bannerAd.style.top : this.SystemInfo.screenHeight - 105;
        }
    }, {
        key: "width",
        get: function get() {
            return null != this.bannerAd ? this.bannerAd.width : 300;
        }
    }, {
        key: "height",
        get: function get() {
            return null != this.bannerAd ? this.bannerAd.height : 105;
        }
    }, {
        key: "destroyBannerAd",
        value: function destroyBannerAd() {
            null != this.bannerAd && (console.log("销毁 banner"), this.bannerAd.destroy(), this.bannerAd = null);
        }
    }, {
        key: "showBannerAd",
        value: function showBannerAd() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return this.hideBannerAd(), this.isBannerShow = !0, this.createTime = 0, null == this.bannerAd && (this.CreateBannerID.length > 0 ? this.bannerAd = this.createBannerAd(e) : this.bannerAd = this.bannerAds.shift()), 
            null != this.bannerAd && (adv_interface$1.reportShowAdv(FlowAdvType.Banner, PlatAdOnShowFlow.banner), 
            !this.bannerAd.visible && this.bannerAd.loaded && (console.log("显示 bannerID" + this.bannerAd.bannerID), 
            this.bannerAd.show(), this.bannerAd.visible = !0, this.bannerAd.ShowTime = Date.now()), 
            this.bannerAd.lastStyle = e, null == e ? (this.bannerAd.width = 300, this.bannerAd.height = 105, 
            this.bannerAd.style.left = (this.SystemInfo.screenWidth - (this.bannerAd.style.realWidth || this.bannerAd.width)) / 2, 
            this.bannerAd.style.top = this.SystemInfo.screenHeight - (this.bannerAd.style.realHeight || this.bannerAd.height)) : (this.bannerAd.width = e.width || 300, 
            this.bannerAd.height = e.height || 105, this.bannerAd.style.left = null != e.left ? e.left : (this.SystemInfo.screenWidth - (this.bannerAd.style.realWidth || this.bannerAd.width)) / 2, 
            this.bannerAd.style.top = null != e.top ? e.top : this.SystemInfo.screenHeight - (this.bannerAd.style.realHeight || this.bannerAd.height))), 
            this.bannerAd;
        }
    }, {
        key: "hideBannerAd",
        value: function hideBannerAd() {
            this.isBannerShow = !1, null != this.bannerAd && (this.bannerAd.visible ? (console.log("隐藏 banner"), 
            this.bannerAd.hide(), this.bannerAd.visible = !1, this.bannerAds.push(this.bannerAd)) : this.bannerAd.loaded && this.bannerAds.push(this.bannerAd), 
            this.bannerAd = null);
        }
    }, {
        key: "brushBanner",
        value: function brushBanner() {
            var _this59 = this;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            null == e && (e = this.BannerBrushIDs[Number(Math.floor(Math.random() * this.BannerBrushIDs.length))]), 
            console.log("隐藏刷banner _adUnitIndex", e), this.BrushBannerObj = wx.createBannerAd({
                adUnitId: e,
                adIntervals: this.BrushBannerAdIntervals,
                style: {
                    left: -340,
                    top: -115,
                    with: 300
                }
            }), this.BrushBannerObj.onLoad(function() {
                console.log("加载隐藏刷banner");
            }), this.BrushBannerObj.onResize(function() {
                var e = (_this59.SystemInfo.screenWidth - _this59.BrushBannerObj.style.realWidth) / 2;
                _this59.BrushBannerObj.style.left = 1 - (e + _this59.BrushBannerObj.style.realWidth), 
                _this59.BrushBannerObj.style.top = 1 - _this59.BrushBannerObj.style.realHeight, 
                _this59.BrushBannerObj.offResize();
            }), this.BrushBannerObj.onError(function(t) {
                if (_this59.BrushBannerObj.offError(), console.error("屏幕外banner创建失败：", e), Scheduler.unschedule("delay_brus_Banner"), 
                _this59.refreshTime++, _this59.refreshTime <= 3) {
                    var _e49 = _this59.BrushBannerObj.bannerID;
                    Scheduler.schedule("delay_brus_Banner", function() {
                        _this59.brushBanner(_e49);
                    }, !1, 100 * _this59.refreshTime, 0);
                }
                console.log("fetch banner error:" + t.errMsg);
            }), this.BrushBannerObj.show().then(function() {
                console.log(" 隐藏刷banner刷新广告显示成功"), _this59.refreshTime = 0, Laya.timer.once(1e3 * _this59.BrushBannerRefreshTime, _this59, function() {
                    _this59.BrushBannerObj.destroy(), _this59.brushBanner();
                });
            }).catch(function(e) {});
        }
    } ]);
    return wxBannerMgr;
}(bannerMgr);

var m_newBannerMgr = null;

var newBannerMgr = /* */ function() {
    function newBannerMgr() {
        _classCallCheck2(this, newBannerMgr);
    }
    _createClass2(newBannerMgr, null, [ {
        key: "Instances",
        get: function get() {
            if (null == m_newBannerMgr) switch (PlatHelper.getPlatType()) {
              case "WX":
                m_newBannerMgr = new wxBannerMgr();
                break;

              case "QQ":
                m_newBannerMgr = new qqBannerMgr();
                break;

              default:
                m_newBannerMgr = new bannerMgr();
            }
            return m_newBannerMgr;
        }
    } ]);
    return newBannerMgr;
}();

var _adv_interface = /* */ function() {
    function _adv_interface() {
        _classCallCheck2(this, _adv_interface);
        this._isAutoRefreshBannerScheduled = !1, this._isAutoRefreshBannerPaused = !1, this._passedTimeOfLastRefresh = 0, 
        this._gapOfRefreshBanner = 0, this._autoRefreshBannerIndexs = [], this._curAutoRefreshBannerIndex = 0, 
        this._autoRefreshBannerAdStyle = null, this._autoRefreshBannerAdFlowID = "", this._autoRefreshBannerAdSuccCb = null, 
        this._autoRefreshBannerAdErrCb = null, this._onShowCoupletAdUnitIds = [], this._onShowScrollAdUnitIds = [], 
        this._onShowMatrixAdUnitIds = [], this._lastBannerStyle = {
            left: 0,
            top: 0
        };
    }
    _createClass2(_adv_interface, [ {
        key: "reportShowAdv",
        value: function reportShowAdv(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            PlatHelper.getPlat() && PlatHelper.getPlat().h_ReportFlowAdv ? (h_ReportFlowAdv(e, FlowAdvActionType.Show, t), 
            PlatHelper.getPlat().h_ReportFlowAdv(e, FlowAdvActionType.Show, t)) : h_ReportFlowAdv(e, FlowAdvActionType.Show, t);
        }
    }, {
        key: "reportLoadSuccAdv",
        value: function reportLoadSuccAdv(e) {
            PlatHelper.getPlat() && PlatHelper.getPlat().h_ReportFlowAdv ? (h_ReportFlowAdv(e, FlowAdvActionType.LoadSucc), 
            PlatHelper.getPlat().h_ReportFlowAdv(e, FlowAdvActionType.LoadSucc)) : h_ReportFlowAdv(e, FlowAdvActionType.LoadSucc);
        }
    }, {
        key: "reportLoadFailAdv",
        value: function reportLoadFailAdv(e) {
            PlatHelper.getPlat() && PlatHelper.getPlat().h_ReportFlowAdv ? (h_ReportFlowAdv(e, FlowAdvActionType.LoadFail), 
            PlatHelper.getPlat().h_ReportFlowAdv(e, FlowAdvActionType.LoadFail)) : h_ReportFlowAdv(e, FlowAdvActionType.LoadFail);
        }
    }, {
        key: "showAutoRefreshBannerAd",
        value: function showAutoRefreshBannerAd(e) {
            var _this60 = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            this.stopAutoRefreshBannerAd(), this._isAutoRefreshBannerScheduled = !0, this._isAutoRefreshBannerPaused = !1, 
            this._passedTimeOfLastRefresh = 0, this._gapOfRefreshBanner = Math.round(e / 1e3), 
            this._autoRefreshBannerIndexs = t, this._curAutoRefreshBannerIndex = -1, this._autoRefreshBannerAdStyle = n, 
            this._autoRefreshBannerAdFlowID = i, this._autoRefreshBannerAdSuccCb = a, this._autoRefreshBannerAdErrCb = o, 
            this._doShowRefreshBannerAd(), Scheduler.schedule("Schedule_Of_Auto_Refresh_Banner", function() {
                _this60._doRefreshBannerAd();
            }, !1, 1e3);
        }
    }, {
        key: "stopAutoRefreshBannerAd",
        value: function stopAutoRefreshBannerAd() {
            this._isAutoRefreshBannerScheduled && (Scheduler.unschedule("Schedule_Of_Auto_Refresh_Banner"), 
            this._isAutoRefreshBannerScheduled = !1, this._isAutoRefreshBannerPaused = !1, this._passedTimeOfLastRefresh = 0, 
            this._gapOfRefreshBanner = 0, this._autoRefreshBannerAdStyle = null);
        }
    }, {
        key: "pauseAutoRefreshBannerAd",
        value: function pauseAutoRefreshBannerAd() {
            this._isAutoRefreshBannerScheduled && (this._isAutoRefreshBannerPaused = !0);
        }
    }, {
        key: "resumeAutoRefreshBannerAd",
        value: function resumeAutoRefreshBannerAd() {
            this._isAutoRefreshBannerScheduled && (this._isAutoRefreshBannerPaused = !1);
        }
    }, {
        key: "_doRefreshBannerAd",
        value: function _doRefreshBannerAd() {
            this._isAutoRefreshBannerPaused || (this._passedTimeOfLastRefresh += 1, this._passedTimeOfLastRefresh >= this._gapOfRefreshBanner && (this._passedTimeOfLastRefresh = 0, 
            this._doShowRefreshBannerAd()));
        }
    }, {
        key: "_doShowRefreshBannerAd",
        value: function _doShowRefreshBannerAd() {
            var e = 0;
            this._autoRefreshBannerIndexs.length > 0 && (this._curAutoRefreshBannerIndex += 1, 
            this._curAutoRefreshBannerIndex >= this._autoRefreshBannerIndexs.length && (this._curAutoRefreshBannerIndex = 0), 
            e = this._autoRefreshBannerIndexs[this._curAutoRefreshBannerIndex]), this.showBannerAd(e, this._autoRefreshBannerAdStyle, this._autoRefreshBannerAdFlowID, this._autoRefreshBannerAdSuccCb, this._autoRefreshBannerAdErrCb);
        }
    }, {
        key: "showBannerAd",
        value: function showBannerAd(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            if (HLSDKLocalData._isBannerOnShow = !0, PlatAdOnShowFlow.banner = n, PlatHelper.isAndroidNativePlatform() || PlatHelper.isIOSNativePlatform()) NativeAdv.showBanner(); else if (PlatHelper.isQGPlatform()) QGAdv.showRandomBannerAd(function(e) {
                e && HLSDKLocalData._isBannerOnShow ? (e.show(), doCallback$1(i)) : doCallback$1(a);
            }); else if (PlatHelper.isWXPlatform() || PlatHelper.isQQPlatform()) 1 == t.out ? HLSDKLocalData._bannerAdvObj = newBannerMgr.Instances.showBannerAd({
                left: -newBannerMgr.Instances.width
            }) : HLSDKLocalData._bannerAdvObj = newBannerMgr.Instances.showBannerAd(), doCallback$1(i); else if (PlatHelper.isWINPlatform()) this.reportShowAdv(FlowAdvType.Banner, n), 
            doCallback$1(i); else {
                var _n12 = !1, o = 0;
                if (PlatHelper.isTTPlatform()) o = 128; else if (PlatHelper.isQQPlatform() || PlatHelper.isWXPlatform()) {
                    PlatHelper.isWXPlatform() && t.out && (_n12 = !0);
                    var _e50 = PlatHelper.getSysInfo();
                    if (t.max ? o = _e50.screenWidth : t.min ? o = 300 : "number" == typeof t.width && t.width > 0 ? (t.width < 300 && (t.width = 300), 
                    t.width > _e50.screenWidth && (t.width = _e50.screenWidth), o = t.width) : o = _e50.screenWidth, 
                    "number" == typeof t.topFromHeight && t.topFromHeight > 0) {
                        var _n13 = o / FlowBannerAdvSize.Width * FlowBannerAdvSize.Height;
                        PlatHelper.isIPhoneX() && (_n13 += Adv.getMiniGapFromBottom());
                        var _i5 = getSceneSize();
                        if (_n13 / _e50.screenHeight * _i5.height > t.topFromHeight) {
                            var _n14 = t.topFromHeight / _i5.height * _e50.screenHeight;
                            PlatHelper.isIPhoneX() && (_n14 -= Adv.getMiniGapFromBottom());
                            var _a6 = _n14 / FlowBannerAdvSize.Height * FlowBannerAdvSize.Width;
                            _a6 < 300 && (_a6 = 300), o = _a6;
                        }
                    }
                }
                var s = "";
                if (e > 0 && HLSDKLocalData._globalBannerCfg.preloadCount > 1) {
                    var _t30 = Adv.getOnShowBannerAdUnitIDs();
                    s = _t30[(e - 1) % _t30.length];
                }
                if (_n12) {
                    var _e51 = o / FlowBannerAdvSize.Width * FlowBannerAdvSize.Height, _t31 = 1;
                    HLSDKLocalData._globalBannerCfg.isTest && (_t31 = 20), HLSDKLocalData._bannerAdvObj = Adv.createBannerAd(s, {
                        left: _t31 - o,
                        top: _t31 - _e51,
                        width: o
                    }, function(e) {
                        doCallback$1(a, e);
                    }, function() {
                        HLSDKLocalData._isBannerOnShow && Adv.showBannerAd(), doCallback$1(i);
                    });
                } else {
                    var _e52 = 5;
                    t.min && (_e52 = 10), HLSDKLocalData._bannerAdvObj = Adv.createBannerAd(s, {
                        centerX: 0,
                        bottom: _e52,
                        width: o
                    }, function(e) {
                        doCallback$1(a, e);
                    }, function() {
                        HLSDKLocalData._isBannerOnShow && Adv.showBannerAd(), doCallback$1(i);
                    });
                }
            }
        }
    }, {
        key: "hideBannerAd",
        value: function hideBannerAd() {
            HLSDKLocalData._isBannerOnShow = !1, HLSDKLocalData._bannerAdvObj = null, PlatHelper.isWINPlatform() || (PlatHelper.isQGPlatform() ? QGAdv.hideOnShowBannerAd() : PlatHelper.isWXPlatform() || PlatHelper.isQQPlatform() ? newBannerMgr.Instances.hideBannerAd() : Adv.hideBannerAd());
        }
    }, {
        key: "moveBannerAd",
        value: function moveBannerAd(e) {
            if (HLSDKLocalData._isBannerOnShow && HLSDKLocalData._bannerAdvObj) {
                var t = new Laya.Size(0, 0);
                void 0 !== e.left && (t._width = e.left), void 0 !== e.right && (t._width = -e.right), 
                void 0 !== e.top && (t._height = e.top), void 0 !== e.bottom && (t._height = -e.bottom);
                var n = convertToOpenGLSize(t);
                HLSDKLocalData._bannerAdvObj._lastLeft = HLSDKLocalData._bannerAdvObj.style.left, 
                HLSDKLocalData._bannerAdvObj._lastTop = HLSDKLocalData._bannerAdvObj.style.top, 
                0 !== n.width && (HLSDKLocalData._bannerAdvObj.style.left -= n.width), 0 !== n.height && (HLSDKLocalData._bannerAdvObj.style.top -= n.height), 
                (PlatHelper.isWXPlatform() || PlatHelper.isQQPlatform()) && newBannerMgr.Instances.showBannerAd({
                    left: HLSDKLocalData._bannerAdvObj.style.left,
                    top: HLSDKLocalData._bannerAdvObj.style.top
                });
            }
        }
    }, {
        key: "moveBannerAdTo",
        value: function moveBannerAdTo(e) {
            if (HLSDKLocalData._isBannerOnShow && HLSDKLocalData._bannerAdvObj) {
                var t = convertToOpenGLPt(e), n = PlatHelper.getSysInfo(), i = {
                    realWidth: 0,
                    realHeight: 0
                };
                void 0 !== HLSDKLocalData._bannerAdvObj.style ? (i.realWidth = HLSDKLocalData._bannerAdvObj.style.realWidth, 
                i.realHeight = HLSDKLocalData._bannerAdvObj.style.realHeight) : (i.realWidth = newBannerMgr.Instances.width, 
                i.realHeight = newBannerMgr.Instances.height);
                var a = t.x - i.realWidth / 2;
                a < 0 ? a = 0 : a > n.screenWidth - i.realWidth && (a = n.screenWidth - i.realWidth);
                var o = t.y - i.realHeight / 2;
                o < 0 ? o = 0 : o > n.screenHeight - i.realHeight && (o = n.screenHeight - i.realHeight), 
                HLSDKLocalData._bannerAdvObj._lastLeft = HLSDKLocalData._bannerAdvObj.style.left, 
                HLSDKLocalData._bannerAdvObj._lastTop = HLSDKLocalData._bannerAdvObj.style.top, 
                HLSDKLocalData._bannerAdvObj.style.left = a, HLSDKLocalData._bannerAdvObj.style.top = o, 
                (PlatHelper.isWXPlatform() || PlatHelper.isQQPlatform()) && newBannerMgr.Instances.showBannerAd({
                    left: HLSDKLocalData._bannerAdvObj.style.left,
                    top: HLSDKLocalData._bannerAdvObj.style.top
                });
            }
        }
    }, {
        key: "moveBannerAdBack",
        value: function moveBannerAdBack() {
            HLSDKLocalData._isBannerOnShow && HLSDKLocalData._bannerAdvObj && ("number" == typeof HLSDKLocalData._bannerAdvObj._lastLeft && (HLSDKLocalData._bannerAdvObj.style.left = HLSDKLocalData._bannerAdvObj._lastLeft, 
            delete HLSDKLocalData._bannerAdvObj._lastLeft), "number" == typeof HLSDKLocalData._bannerAdvObj._lastTop && (HLSDKLocalData._bannerAdvObj.style.top = HLSDKLocalData._bannerAdvObj._lastTop, 
            delete HLSDKLocalData._bannerAdvObj._lastTop));
        }
    }, {
        key: "isBannerOnShow",
        value: function isBannerOnShow() {
            return HLSDKLocalData._isBannerOnShow;
        }
    }, {
        key: "tempHideBanner",
        value: function tempHideBanner() {
            HLSDKLocalData._isBannerOnShow = !1, HLSDKLocalData._bannerAdvObj && HLSDKLocalData._bannerAdvObj.hide();
        }
    }, {
        key: "tempShowBanner",
        value: function tempShowBanner() {
            HLSDKLocalData._isBannerOnShow = !0, HLSDKLocalData._bannerAdvObj && HLSDKLocalData._bannerAdvObj.show();
        }
    }, {
        key: "getNextFreeGetWay",
        value: function getNextFreeGetWay(e) {
            if ("function" != typeof e) return;
            var t = function t(_t32) {
                HLSDKLocalData._nextFreeGetWay = _t32, doCallback$1(e, _t32);
            };
            PlatHelper.isWINPlatform() ? t(FreeGetWay.FGW_ADV) : PlatHelper.isQGPlatform() ? QGAdv.isSupportVideo() ? t(FreeGetWay.FGW_ADV) : t(FreeGetWay.FGW_NONE) : PlatHelper.isTTPlatform() ? Adv.isSupportVideoAd() ? t(FreeGetWay.FGW_ADV) : t(FreeGetWay.FGW_NONE) : Switch.getRewardTimesOfEachDay(function(e) {
                HLSDKLocalData._interactInfo._todayAdvTimes >= e ? t(FreeGetWay.FGW_NONE) : Switch.isPublishing(function(e) {
                    e ? Adv.isSupportVideoAd() ? t(FreeGetWay.FGW_ADV) : t(FreeGetWay.FGW_NONE) : Switch.getAdvTimesBeforeShare(function(e) {
                        HLSDKLocalData._interactInfo._todayAdvTimes < e ? Adv.isSupportVideoAd() ? t(FreeGetWay.FGW_ADV) : t(FreeGetWay.FGW_SHARE) : Adv.isSupportVideoAd() ? Switch.getRateOfShare(function(e) {
                            random(1, 100) <= e ? t(FreeGetWay.FGW_SHARE) : t(FreeGetWay.FGW_ADV);
                        }) : t(FreeGetWay.FGW_SHARE);
                    });
                });
            });
        }
    }, {
        key: "tryFreeToGetAReward",
        value: function tryFreeToGetAReward(e) {
            var _this61 = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var o = function o() {
                HLSDKLocalData._nextFreeGetWay = null, doCallback$1(i);
            }, s = function s() {
                t ? PlatHelper.showModal(null, RewatchVideoDialog.content, !0, function(e) {
                    e ? (t = !1, _this61.getNextFreeGetWay(function(e) {
                        console.log("new free get way: ", e), r();
                    })) : (HLSDKLocalData._nextFreeGetWay = null, doCallback$1(a));
                }, {
                    confirmText: RewatchVideoDialog.confirmText,
                    cancelText: RewatchVideoDialog.cancelText
                }) : (HLSDKLocalData._nextFreeGetWay = null, doCallback$1(a));
            }, r = function r() {
                1 ? _this61.showRewardedVideoAd("", n, o, s) : PlatHelper.isTTPlatform() && HLSDKLocalData._nextFreeGetWay === FreeGetWay.FGW_NONE ? (n && PlatHelper.showToast(ShowVideoFailTips.noReady), 
                s()) : Share.share(e, null, n, function(e) {
                    if (e) {
                        if (addShareTimes(), PlatHelper.setStorage(SK_KEY_OF_INTERACT_INFO, saveInteractInfoToString()), 
                        HLSDKLocalData._nextFreeGetWay === FreeGetWay.FGW_SHARE) return void o();
                        n && PlatHelper.showToast(ShowVideoFailTips.noMore);
                    }
                    s();
                });
            };
            1 ? r() : this.getNextFreeGetWay(function(e) {
                console.log("new free get way: ", e), r();
            });
        }
    }, {
        key: "isWatchingVideoAdv",
        value: function isWatchingVideoAdv() {
            return PlatHelper.isQGPlatform() ? QGAdv.isWatchingVideoAdv() : Adv.isWatchingVideoAdv();
        }
    }, {
        key: "showRewardedVideoAd",
        value: function showRewardedVideoAd() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var a = function a(e) {
                doCallback$1(HLSDKLocalData._handles.onShow), e ? (addAdvTimes(), PlatHelper.setStorage(SK_KEY_OF_INTERACT_INFO, saveInteractInfoToString()), 
                doCallback$1(n)) : (t && PlatHelper.showToast(ShowVideoFailTips.noFinish), doCallback$1(i, "Not Finish..."));
            };
            doCallback$1(HLSDKLocalData._handles.onHide), PlatHelper.isWINPlatform() ? (this.reportShowAdv(FlowAdvType.RewardedVideo, e), 
            a(!0)) : PlatHelper.isQGPlatform() ? (PlatAdOnShowFlow.video = e, QGAdv.showRandomVideoAd(function(e) {
                a(e);
            }, function(e) {
                if (doCallback$1(HLSDKLocalData._handles.onShow), t && "number" == typeof e) {
                    var _t33 = e;
                    -1 === _t33 ? PlatHelper.showToast(ShowVideoFailTips.noReady) : PlatHelper.showToast(ShowVideoFailTips.wait.format(_t33.toString()));
                }
                doCallback$1(i, "number" != typeof e ? e : "Unknow...");
            })) : (PlatAdOnShowFlow.video = e, 0 !== HLSDKLocalData._globalVideoCfg.videoLoadingShowTime && (-1 === HLSDKLocalData._globalVideoCfg.videoLoadingShowTime ? PlatHelper.showLoading(HLSDKLocalData._globalVideoCfg.videoLoadingTips) : HLSDKLocalData._globalVideoCfg.videoLoadingShowTime > 0 && Scheduler.schedule("Delay_Auto_Close_Video_Loading", function() {
                PlatHelper.hideLoading();
            }, !1, HLSDKLocalData._globalVideoCfg.videoLoadingShowTime, 1)), Adv.createVideoAdv(function() {
                -1 === HLSDKLocalData._globalVideoCfg.videoLoadingShowTime && PlatHelper.hideLoading();
            }, function(e) {
                a(e);
            }, function(e) {
                HLSDKLocalData._globalVideoCfg.videoLoadingShowTime > 0 && Scheduler.unschedule("Delay_Auto_Close_Video_Loading"), 
                PlatHelper.hideLoading(), doCallback$1(HLSDKLocalData._handles.onShow), doCallback$1(i, e);
            }));
        }
    }, {
        key: "showInterstitialAd",
        value: function showInterstitialAd() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            PlatHelper.isWINPlatform() ? (this.reportShowAdv(FlowAdvType.Interstitial, e), doCallback$1(t)) : (PlatAdOnShowFlow.interstitial = e, 
            PlatHelper.isQGPlatform() ? QGAdv.showRandomInsertAd(t, n) : Adv.createInterstitialAd(null, t, n));
        }
    }, {
        key: "showPortalAd",
        value: function showPortalAd(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            PlatHelper.isOPPOPlatform() && (PlatAdOnShowFlow.portal = t, Adv.createPortalAd(e, n, i, a)), 
            PlatHelper.isWINPlatform() && (isLoadOPPOConfig() && this.reportShowAdv(FlowAdvType.Portal, t), 
            doCallback$1(i));
        }
    }, {
        key: "showDrawerAd",
        value: function showDrawerAd(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            PlatHelper.isOPPOPlatform() && (PlatAdOnShowFlow.drawer = n, Adv.createDrawerAd(e, t, i, a, o)), 
            PlatHelper.isWINPlatform() && (isLoadOPPOConfig() && this.reportShowAdv(FlowAdvType.Drawer, n), 
            doCallback$1(o));
        }
    }, {
        key: "ShowQgPortalAd",
        value: function ShowQgPortalAd(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            PlatHelper.isVIVOPlatform() && (PlatAdOnShowFlow.portal = n, Adv.createQgPortalAd(e, t, i, a, o)), 
            PlatHelper.isWINPlatform() && (isLoadVIVOConfig() && this.reportShowAdv(FlowAdvType.Portal, n), 
            doCallback$1(o));
        }
    }, {
        key: "ShowQgStreamerAd",
        value: function ShowQgStreamerAd(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            PlatHelper.isVIVOPlatform() && (PlatAdOnShowFlow.portal = t, Adv.createQgStreamerAd(e, n, a, i)), 
            PlatHelper.isWINPlatform() && (isLoadVIVOConfig() && this.reportShowAdv(FlowAdvType.Streamer, t), 
            doCallback$1(a));
        }
    }, {
        key: "showPopupCustomAd",
        value: function showPopupCustomAd(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            PlatHelper.isWXPlatform() && checkString(e) && (PlatAdOnShowFlow.custom = n, Adv.createCustomAd(e, {
                layout: "center",
                row: t
            }, 0, !0, i, a, o)), PlatHelper.isWINPlatform() && (isLoadWXConfig$1() && this.reportShowAdv(FlowAdvType.Custom, n), 
            doCallback$1(i));
        }
    }, {
        key: "showBoxAd",
        value: function showBoxAd() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            PlatHelper.isQQPlatform() && (PlatAdOnShowFlow.box = e, Adv.createBoxAd(function() {
                doCallback$1(t);
            }, function() {
                doCallback$1(n);
            }, function(e) {
                doCallback$1(i, e);
            })), PlatHelper.isWINPlatform() && (isLoadQQConfig() && this.reportShowAdv(FlowAdvType.Box, e), 
            doCallback$1(n));
        }
    }, {
        key: "showMoreGameAd",
        value: function showMoreGameAd() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            PlatHelper.isTTPlatform() && (PlatAdOnShowFlow.moreGame = e, PlatHelper.showMoreGamesModal(n, t, i), 
            doCallback$1(t)), PlatHelper.isWINPlatform() && (isLoadTTConfig() && this.reportShowAdv(FlowAdvType.MoreGame, e), 
            doCallback$1(n));
        }
    }, {
        key: "showComponentAd",
        value: function showComponentAd(e, t, n, i) {
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            var s = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "landscape";
            var r = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !0;
            var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
            var d = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
            checkString(n) && ("couplet" === e.toLowerCase() ? -1 === this._onShowCoupletAdUnitIds.indexOf(n) && this._onShowCoupletAdUnitIds.push(n) : "scroll" === e.toLowerCase() ? -1 === this._onShowScrollAdUnitIds.indexOf(n) && this._onShowScrollAdUnitIds.push(n) : "matrix" === e.toLowerCase() && -1 === this._onShowMatrixAdUnitIds.indexOf(n) && this._onShowMatrixAdUnitIds.push(n), 
            "number" == typeof i.top && (i.top = i.top / 100 * Laya.stage.height), "number" == typeof i.bottom && (i.bottom = i.bottom / 100 * Laya.stage.height), 
            "number" == typeof i.left && (i.left = i.left / 100 * Laya.stage.width), "number" == typeof i.right && (i.right = i.right / 100 * Laya.stage.width), 
            PlatHelper.isWXPlatform() ? (PlatAdOnShowFlow.custom = t, Adv.createCustomAd(n, i, a, r, l, null, d)) : PlatHelper.isQQPlatform() ? (PlatAdOnShowFlow.block = t, 
            Adv.createBlockAd(n, i, o, s, l, d)) : PlatHelper.isOPPOPlatform() ? (PlatAdOnShowFlow.streamer = t, 
            Adv.createStreamerAd(n, i, s, l, null, d)) : (isLoadWXConfig$1() ? this.reportShowAdv(FlowAdvType.Custom, t) : isLoadQQConfig() ? this.reportShowAdv(FlowAdvType.Block, t) : isLoadOPPOConfig() && this.reportShowAdv(FlowAdvType.Streamer, t), 
            doCallback$1(l)));
        }
    }, {
        key: "showgraphicAd",
        value: function showgraphicAd(e, t, n, i) {
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            var s = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
            (PlatHelper.isOPPOPlatform() || PlatHelper.isVIVOPlatform()) && (PlatAdOnShowFlow.custom = t, 
            Adv.createCustomAd(n, i, 0, !0, a, s, o)), PlatHelper.isWINPlatform() && (this.reportShowAdv(FlowAdvType.Custom, t), 
            doCallback$1(s));
        }
    }, {
        key: "preloadFlowCustomAd",
        value: function preloadFlowCustomAd(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            if (!PlatHelper.isWXPlatform()) return [];
            var a = HLSDKLocalData._flowPreloadPromises[e];
            return a || (a = [], HLSDKLocalData._flowPreloadPromises[e] = a), t && a.push(adv_interface$1.preloadCustomAd("matrix", e, HLSDKLocalData._globalMatrixAdCfg, "landscape", getMatrixInputLayout)), 
            n && a.push(adv_interface$1.preloadCustomAd("scroll", e, HLSDKLocalData._globalScrollAdCfg, "", getScrollInputLayout)), 
            i && a.push(adv_interface$1.preloadCustomAd("couplet", e, HLSDKLocalData._globalCoupleAdCfg, "vertical", function(e) {
                return parseInt(e.left) > 0 ? {
                    layout: "left",
                    left: parseFloat(e.FromLeftPercent),
                    top: parseFloat(e.leftFromTopPercent)
                } : parseInt(e.right) > 0 ? {
                    layout: "right",
                    left: parseFloat(e.FromRightPercent),
                    top: parseFloat(e.rightFromTopPercent)
                } : void 0;
            })), a;
        }
    }, {
        key: "preloadCustomAd",
        value: function preloadCustomAd(e, t, n, i, a) {
            if (PlatHelper.isWXPlatform() && n.length > 0) {
                var _ret2 = function() {
                    var o = [], s = function s(e) {
                        return void 0 === e.isLoaded && (e.isLoaded = !1), !e.isLoaded && parseInt(e.preloadFlow) === t;
                    }, r = function r(e) {
                        return checkString(e.matrixAdUnitId) ? e.matrixAdUnitId : checkString(e.adUnitId) ? e.adUnitId : checkString(e.leftAdUnitId) ? e.leftAdUnitId : checkString(e.rightAdUnitId) ? e.rightAdUnitId : "";
                    }, l = function l(e) {
                        return void 0 !== e.blockSize ? parseInt(e.blockSize) : void 0 !== e.leftSize ? parseInt(e.leftSize) : void 0 !== e.rightSize ? parseInt(e.rightSize) : 0;
                    };
                    var _loop3 = function _loop3(d) {
                        var h = n[d], c = r(h);
                        s(h) && checkString(c) && o.push(new Promise(function(n, o) {
                            var s = function s() {
                                adv_interface$1.showComponentAd(e, "", c, n[0], 0, l(h), void 0 !== h.orientation ? h.orientation : i, !1, function() {
                                    console.warn("preload {0} custom ad succ...".format(e)), h.isLoaded = !0, n();
                                }, function(t) {
                                    console.warn("preload {0} custom ad fail...".format(e), {
                                        errCode: t && t.errCode,
                                        errMsg: t && t.errMsg
                                    }), n();
                                });
                            };
                            t === PreloadFlowType.Loading ? s() : Scheduler.schedule("Delay_Try_Preload_WX_Custom_Ad", function() {
                                s();
                            }, !1, 1e3 + parseInt(h.delayPreloadTime), 0);
                        }));
                    };
                    for (var d = 0; d < n.length; d++) {
                        _loop3(d);
                    }
                    return {
                        v: o.length > 0 ? Promise.all(o) : Promise.resolve()
                    };
                }();
                if (_typeof2(_ret2) === "object") return _ret2.v;
            }
            return Promise.resolve();
        }
    }, {
        key: "_showComponentAd",
        value: function _showComponentAd(e) {
            PlatHelper.isWXPlatform() ? Adv.showCustomAd(e) : PlatHelper.isQQPlatform() ? Adv.showBlockAd(e) : PlatHelper.isOPPOPlatform() ? (Adv.showStreamerAd(e), 
            Adv.showDrawerAd(e)) : PlatHelper.isVIVOPlatform() && (Adv.showStreamerQgAd(e), 
            Adv.showPortalQgAd(e)), isLoadWXConfig$1() ? console.log("show target custom ad succ...") : isLoadQQConfig() && console.log("show target Block ad succ...");
        }
    }, {
        key: "hideComponentAd",
        value: function hideComponentAd(e) {
            var t = this._onShowCoupletAdUnitIds.indexOf(e);
            -1 !== t && this._onShowCoupletAdUnitIds.splice(t, 1), -1 !== (t = this._onShowScrollAdUnitIds.indexOf(e)) && this._onShowScrollAdUnitIds.splice(t, 1), 
            -1 !== (t = this._onShowMatrixAdUnitIds.indexOf(e)) && this._onShowMatrixAdUnitIds.splice(t, 1), 
            this._hideComponentAd(e);
        }
    }, {
        key: "_hideComponentAd",
        value: function _hideComponentAd(e) {
            PlatHelper.isWXPlatform() ? Adv.hideCustomAd(e) : PlatHelper.isQQPlatform() ? Adv.hideBlockAd(e) : PlatHelper.isOPPOPlatform() ? (Adv.hideStreamerAd(e), 
            Adv.hideDrawerAd(e)) : PlatHelper.isVIVOPlatform() && (Adv.hideStreamerQgAd(e), 
            Adv.hidePortalQgAd(e)), isLoadWXConfig$1() ? console.log("hide target custom ad succ...") : isLoadQQConfig() && console.log("hide target Block ad succ...");
        }
    }, {
        key: "isComponentAdPreloaded",
        value: function isComponentAdPreloaded(e) {
            return PlatHelper.isWXPlatform() ? Adv.isCustomAdPreloaded(e) : PlatHelper.isQQPlatform() ? Adv.isBlockAdPreloaded(e) : PlatHelper.isOPPOPlatform() ? Adv.isStreamerAdPreloaded(e) : !!PlatHelper.isVIVOPlatform && Adv.isQgStreamerAdPreloaded(e);
        }
    }, {
        key: "hideAllComponentAds",
        value: function hideAllComponentAds() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this._onShowCoupletAdUnitIds = [], this._onShowScrollAdUnitIds = [], this._onShowMatrixAdUnitIds = [], 
            (PlatHelper.isWXPlatform() || PlatHelper.isOPPOPlatform() || PlatHelper.isVIVOPlatform()) && Adv.hideAllCustomAds(), 
            PlatHelper.isQQPlatform() ? Adv.destroyAllBlockAds().then(function() {
                doCallback$1(e);
            }) : PlatHelper.isOPPOPlatform() ? Adv.hideAllStreamerAds() : PlatHelper.isVIVOPlatform() && Adv.hideAllQgStreamerAds(), 
            isLoadWXConfig$1() ? console.log("hide all custom ads succ...") : isLoadQQConfig() && console.log("destroy all block ads succ..."), 
            PlatHelper.isQQPlatform() || doCallback$1(e);
        }
    }, {
        key: "tempHideAllAdvs",
        value: function tempHideAllAdvs() {
            var _this62 = this;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            !0 === e.couplet && this._onShowCoupletAdUnitIds.length > 0 && this._onShowCoupletAdUnitIds.forEach(function(e) {
                HLSDKLocalData._tempHides.adv.couplet.push(e), _this62._hideComponentAd(e);
            }), !0 === e.scroll && this._onShowScrollAdUnitIds.length > 0 && this._onShowScrollAdUnitIds.forEach(function(e) {
                HLSDKLocalData._tempHides.adv.scroll.push(e), _this62._hideComponentAd(e);
            }), !0 === e.matrix && this._onShowMatrixAdUnitIds.length > 0 && this._onShowMatrixAdUnitIds.forEach(function(e) {
                HLSDKLocalData._tempHides.adv.matrix.push(e), _this62._hideComponentAd(e);
            });
        }
    }, {
        key: "showAllTempHideAdvs",
        value: function showAllTempHideAdvs() {
            var _this63 = this;
            HLSDKLocalData._tempHides.adv.couplet.length > 0 && (HLSDKLocalData._tempHides.adv.couplet.forEach(function(e) {
                _this63._showComponentAd(e);
            }), HLSDKLocalData._tempHides.adv.couplet = []), HLSDKLocalData._tempHides.adv.scroll.length > 0 && (HLSDKLocalData._tempHides.adv.scroll.forEach(function(e) {
                _this63._showComponentAd(e);
            }), HLSDKLocalData._tempHides.adv.scroll = []), HLSDKLocalData._tempHides.adv.matrix.length > 0 && (HLSDKLocalData._tempHides.adv.matrix.forEach(function(e) {
                _this63._showComponentAd(e);
            }), HLSDKLocalData._tempHides.adv.matrix = []);
        }
    } ]);
    return _adv_interface;
}();

var adv_interface$1 = new _adv_interface();

var CocosAudioHelper = /* */ function(_AudioBaseHelper) {
    _inherits2(CocosAudioHelper, _AudioBaseHelper);
    var _super20 = _createSuper2(CocosAudioHelper);
    function CocosAudioHelper() {
        var _this64;
        _classCallCheck2(this, CocosAudioHelper);
        _this64 = _super20.call(this), _this64._playingEffectAudioIDs = {}, _this64._bgmAudioID = -1;
        return _this64;
    }
    _createClass2(CocosAudioHelper, [ {
        key: "_canPlayByPlatContext",
        value: function _canPlayByPlatContext(e) {
            return !(!this._isSupportLocalUrl() && -1 === e.indexOf("http"));
        }
    }, {
        key: "playSoundByNative",
        value: function playSoundByNative(e, t) {
            var _this65 = this;
            var n = "";
            void 0 !== this._soundPlayLoopTimes[e] && (n = this._soundPlayLoopTimes[e].identify);
            var i = function i() {
                _this65._getClip(e, function(t) {
                    var a = cc.audioEngine.playEffect(t, !1);
                    _this65._playingEffectAudioIDs[e] = a, cc.audioEngine.setFinishCallback(a, function() {
                        delete _this65._playingEffectAudioIDs[e], void 0 !== _this65._soundPlayLoopTimes[e] && _this65._soundPlayLoopTimes[e].identify === n && (_this65._soundPlayLoopTimes[e].loops -= 1, 
                        _this65._soundPlayLoopTimes[e].loops > 0 ? i() : delete _this65._soundPlayLoopTimes[e]);
                    });
                });
            };
            i();
        }
    }, {
        key: "stopSoundByNative",
        value: function stopSoundByNative(e) {
            void 0 !== this._playingEffectAudioIDs[e] && (cc.audioEngine.stopEffect(this._playingEffectAudioIDs[e]), 
            delete this._playingEffectAudioIDs[e]);
        }
    }, {
        key: "playMusicByNative",
        value: function playMusicByNative(e, t) {
            var _this66 = this;
            this._getClip(e, function(e) {
                _this66._bgmAudioID = cc.audioEngine.playMusic(e, t), cc.audioEngine.setMusicVolume(1);
            });
        }
    }, {
        key: "stopMusicByNative",
        value: function stopMusicByNative() {
            -1 !== this._bgmAudioID && (cc.audioEngine.stop(this._bgmAudioID), cc.audioEngine.setMusicVolume(0), 
            this._bgmAudioID = 0);
        }
    }, {
        key: "resumeMusicByNative",
        value: function resumeMusicByNative() {
            return -1 !== this._bgmAudioID && (cc.audioEngine.resumeMusic(), cc.audioEngine.setMusicVolume(1), 
            !0);
        }
    }, {
        key: "pauseMusicByNative",
        value: function pauseMusicByNative() {
            -1 !== this._bgmAudioID && (cc.audioEngine.pauseMusic(), cc.audioEngine.setMusicVolume(0));
        }
    }, {
        key: "getCurMusicTime",
        value: function getCurMusicTime() {
            return "" !== this._bgmUrl ? -1 !== this._bgmAudioID ? cc.audioEngine.getCurrentTime(this._bgmAudioID) : 0 : _get2(_getPrototypeOf2(CocosAudioHelper.prototype), "getCurMusicTime", this).call(this);
        }
    }, {
        key: "_getClip",
        value: function _getClip(e, t) {
            if (checkFunc(t)) if (checkString(e)) -1 !== e.indexOf("http") || -1 !== e.indexOf("assets/resources/native/") ? cc.assetManager.loadRemote(e, function(e, n) {
                if (e) return console.error(e), void t(null);
                t(n);
            }) : cc.resources.load(e, function(e, n) {
                e ? (console.error(e), t(null)) : t(n);
            }); else if (e instanceof cc.AudioClip) {
                t(e);
            } else console.error("Error: unsupport clip type, ", clip), t(null);
        }
    } ]);
    return CocosAudioHelper;
}(AudioBaseHelper);

var LayaAudioHelper = /* */ function(_AudioBaseHelper2) {
    _inherits2(LayaAudioHelper, _AudioBaseHelper2);
    var _super21 = _createSuper2(LayaAudioHelper);
    function LayaAudioHelper() {
        var _this67;
        _classCallCheck2(this, LayaAudioHelper);
        _this67 = _super21.call(this), _this67._bgmAudio = null;
        return _this67;
    }
    _createClass2(LayaAudioHelper, [ {
        key: "_canPlayByPlatContext",
        value: function _canPlayByPlatContext(e) {
            if (!this._isSupportLocalUrl()) {
                if (-1 === e.indexOf("http")) return !1;
                if (Laya.MiniFileMgr && void 0 !== Laya.MiniFileMgr.fakeObj[e]) return !1;
            }
            return !0;
        }
    }, {
        key: "playSoundByNative",
        value: function playSoundByNative(e, t) {
            var _this68 = this;
            var n = "";
            void 0 !== this._soundPlayLoopTimes[e] && (n = this._soundPlayLoopTimes[e].identify);
            var i = function i() {
                Laya.SoundManager.playSound(e, 1, Laya.Handler.create(null, function() {
                    void 0 !== _this68._soundPlayLoopTimes[e] && _this68._soundPlayLoopTimes[e].identify === n && (_this68._soundPlayLoopTimes[e].loops -= 1, 
                    _this68._soundPlayLoopTimes[e].loops > 0 ? i() : delete _this68._soundPlayLoopTimes[e]);
                }), 0);
            };
            i();
        }
    }, {
        key: "stopSoundByNative",
        value: function stopSoundByNative(e) {
            Laya.SoundManager.stopSound(e);
        }
    }, {
        key: "playMusicByNative",
        value: function playMusicByNative(e, t) {
            var _this69 = this;
            var n = t ? 99999 : 1, i = function i() {
                _this69._bgmAudio = Laya.SoundManager.playMusic(e, 1, Laya.Handler.create(null, function() {
                    n -= 1, "" !== _this69._bgmUrl && n > 0 && i();
                }), 0), _this69._bgmAudio.volume = 1;
            };
            i();
        }
    }, {
        key: "stopMusicByNative",
        value: function stopMusicByNative() {
            this._bgmAudio && (this._bgmAudio.stop(), this._bgmAudio.volume = 0, this._bgmAudio = null);
        }
    }, {
        key: "resumeMusicByNative",
        value: function resumeMusicByNative() {
            return !!this._bgmAudio && (this._bgmAudio.resume(), this._bgmAudio.volume = 1, 
            !0);
        }
    }, {
        key: "pauseMusicByNative",
        value: function pauseMusicByNative() {
            this._bgmAudio && (this._bgmAudio.pause(), this._bgmAudio.volume = 0);
        }
    }, {
        key: "getCurMusicTime",
        value: function getCurMusicTime() {
            return "" !== this._bgmUrl ? this._bgmAudio ? this._bgmAudio.position : 0 : _get2(_getPrototypeOf2(LayaAudioHelper.prototype), "getCurMusicTime", this).call(this);
        }
    } ]);
    return LayaAudioHelper;
}(AudioBaseHelper);

var EngineAudioHelper = AudioBaseHelper;

"undefined" != typeof window && void 0 !== window.cc && void 0 !== window.cc.ENGINE_VERSION ? EngineAudioHelper = CocosAudioHelper : "undefined" != typeof window && void 0 !== window.Laya && void 0 !== window.Laya.version && (EngineAudioHelper = LayaAudioHelper);

var CommonAudioHelper = /* */ function(_EngineAudioHelper) {
    _inherits2(CommonAudioHelper, _EngineAudioHelper);
    var _super22 = _createSuper2(CommonAudioHelper);
    function CommonAudioHelper() {
        _classCallCheck2(this, CommonAudioHelper);
        return _super22.call(this);
    }
    _createClass2(CommonAudioHelper, [ {
        key: "_isSupportAudioContext",
        value: function _isSupportAudioContext() {
            return PlatHelper.getPlat();
        }
    }, {
        key: "_isSupportLocalUrl",
        value: function _isSupportLocalUrl() {
            return !0;
        }
    }, {
        key: "playMusic",
        value: function playMusic(e) {
            var _this70 = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            _get2(_getPrototypeOf2(CommonAudioHelper.prototype), "playMusic", this).call(this, e, t, function() {
                PlatHelper.getPlat() && adv_interface$1.isWatchingVideoAdv() && _this70.pauseMusic(), 
                doCallback$1(n);
            });
        }
    } ]);
    return CommonAudioHelper;
}(EngineAudioHelper);

var OPPOAudioHelper = /* */ function(_AudioBaseHelper3) {
    _inherits2(OPPOAudioHelper, _AudioBaseHelper3);
    var _super23 = _createSuper2(OPPOAudioHelper);
    function OPPOAudioHelper() {
        _classCallCheck2(this, OPPOAudioHelper);
        return _super23.call(this);
    }
    _createClass2(OPPOAudioHelper, [ {
        key: "_isSupportAudioContext",
        value: function _isSupportAudioContext() {
            return !0;
        }
    }, {
        key: "_isSupportLocalUrl",
        value: function _isSupportLocalUrl() {
            return !1;
        }
    }, {
        key: "playMusic",
        value: function playMusic(e) {
            var _this71 = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            _get2(_getPrototypeOf2(OPPOAudioHelper.prototype), "playMusic", this).call(this, e, t, function() {
                adv_interface$1.isWatchingVideoAdv() && _this71.pauseMusic(), doCallback$1(n);
            });
        }
    } ]);
    return OPPOAudioHelper;
}(AudioBaseHelper);

var VIVOAudioHelper = /* */ function(_AudioBaseHelper4) {
    _inherits2(VIVOAudioHelper, _AudioBaseHelper4);
    var _super24 = _createSuper2(VIVOAudioHelper);
    function VIVOAudioHelper() {
        _classCallCheck2(this, VIVOAudioHelper);
        return _super24.call(this);
    }
    _createClass2(VIVOAudioHelper, [ {
        key: "_isSupportAudioContext",
        value: function _isSupportAudioContext() {
            return !0;
        }
    }, {
        key: "_isSupportLocalUrl",
        value: function _isSupportLocalUrl() {
            return !1;
        }
    }, {
        key: "_recycleAudioContext",
        value: function _recycleAudioContext(e) {
            var t = this._playingContexts.indexOf(e);
            -1 !== t && this._playingContexts.splice(t, 1), e && e.destroy();
        }
    }, {
        key: "playMusic",
        value: function playMusic(e) {
            var _this72 = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            _get2(_getPrototypeOf2(VIVOAudioHelper.prototype), "playMusic", this).call(this, e, t, function() {
                adv_interface$1.isWatchingVideoAdv() && _this72.pauseMusic(), doCallback$1(n);
            });
        }
    } ]);
    return VIVOAudioHelper;
}(AudioBaseHelper);

var _AudioHelper_Cls = CommonAudioHelper, AudioHelper = new (_AudioHelper_Cls = "undefined" != typeof qg && qg.getProvider().toLowerCase().indexOf("oppo") > -1 ? OPPOAudioHelper : "undefined" != typeof qg && qg.getProvider().toLowerCase().indexOf("vivo") > -1 ? VIVOAudioHelper : CommonAudioHelper)();

var _AudioMgr = /* */ function() {
    function _AudioMgr() {
        _classCallCheck2(this, _AudioMgr);
    }
    _createClass2(_AudioMgr, [ {
        key: "loadSound",
        value: function loadSound(e, t) {
            AudioHelper.loadSound(e, t);
        }
    }, {
        key: "playSound",
        value: function playSound(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            HLSDKLocalData._settings._isSoundEnabled && AudioHelper.playSound(this._fixUrl(e), t);
        }
    }, {
        key: "stopSound",
        value: function stopSound(e) {
            AudioHelper.stopSound(this._fixUrl(e));
        }
    }, {
        key: "stopAllSounds",
        value: function stopAllSounds() {
            AudioHelper.stopAllSounds();
        }
    }, {
        key: "loadMusic",
        value: function loadMusic(e, t) {
            AudioHelper.loadMusic(this._fixUrl(e), t);
        }
    }, {
        key: "playMusic",
        value: function playMusic(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            HLSDKLocalData._settings._isMusicEnabled ? AudioHelper.playMusic(this._fixUrl(e), t, n) : AudioHelper.setMusicInfo(this._fixUrl(e), t);
        }
    }, {
        key: "stopMusic",
        value: function stopMusic(e) {
            AudioHelper.stopMusic(e);
        }
    }, {
        key: "pauseMusic",
        value: function pauseMusic() {
            AudioHelper.pauseMusic();
        }
    }, {
        key: "resumeMusic",
        value: function resumeMusic() {
            HLSDKLocalData._settings._isMusicEnabled && AudioHelper.resumeMusic();
        }
    }, {
        key: "getCurMusicTime",
        value: function getCurMusicTime() {
            return AudioHelper.getCurMusicTime();
        }
    }, {
        key: "setMusicEnable",
        value: function setMusicEnable(e) {
            e && AudioHelper.isMusicUrlValid() ? AudioHelper.resumeMusic() : !e && AudioHelper.isMusicUrlValid() && AudioHelper.pauseMusic();
        }
    }, {
        key: "_fixUrl",
        value: function _fixUrl(e) {
            if (checkString(SubConfig.path)) return SubConfig.path + e;
            if (!isLayaEngine()) return e;
            if (PlatHelper.getPlat() && "" !== Laya.URL.basePath) {
                var t = !1, n = getLayaMiniAdapter();
                if (n.nativefiles.length > 0) for (var i = 0; i < n.nativefiles.length; i++) {
                    var a = n.nativefiles[i];
                    if (-1 !== e.indexOf(a)) {
                        t = !0;
                        break;
                    }
                }
                t || (e = Laya.URL.basePath + e);
            }
            return e;
        }
    } ]);
    return _AudioMgr;
}();

var AudioMgr = new _AudioMgr();

function getSceneSize() {
    return isCocosEngine() ? {
        width: cc.winSize.width,
        height: cc.winSize.height
    } : isLayaEngine() ? {
        width: Laya.stage.width,
        height: Laya.stage.height
    } : {
        width: 0,
        height: 0
    };
}

function convertToScreneOrientationPrefabPath(e) {
    return checkString(e) ? isLoadLandscapeConfig$1() ? e.substring(0, e.indexOf(".json")) + "_landscape.json" : e : "";
}

function seekNodeByName(e, t) {
    if (e.name === t) return e;
    var n = void 0;
    return e._children.forEach(function(e) {
        n || (n = seekNodeByName(e, t));
    }), n;
}

function getComponentByName(e, t) {
    var n = void 0;
    return e._components.forEach(function(e) {
        !n && e && -1 != e.runtime.indexOf(t) && (n = e);
    }), n;
}

function playBtnTouchAction(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 500;
    if (e) {
        if (e._lastClickTime && Date.now() - e._lastClickTime <= o) return;
        e._lastClickTime = Date.now(), e._touchTween && (e._touchTween.clear(), e._touchTween = null), 
        e.scaleX = n, e.scaleY = n, e._touchTween = Laya.Tween.to(e, {
            scaleX: 1.1 * n * i,
            scaleY: 1.1 * n * i
        }, 100 * a, null, Laya.Handler.create(null, function() {
            e._touchTween = Laya.Tween.to(e, {
                scaleX: n,
                scaleY: n
            }, 50 * a, null, Laya.Handler.create(null, function() {
                e._touchTween = null, "function" == typeof t && t();
            }), 0, !1, !1);
        }), 0, !1, !1);
    }
}

function delayShow(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3e3;
    e && t > 0 ? (e.visible = !1, Scheduler.schedule("Delay_Show_Of_" + generateString(32), function() {
        e.visible = !0;
    }, !1, t, 0)) : e.visible = !0;
}

function recordOriginalState(e) {
    e && (e._originalWidget || (e._originalWidget = {
        left: e.left,
        right: e.right,
        top: e.top,
        bottom: e.bottom,
        centerX: e.centerX,
        centerY: e.centerY
    }), e._originalScale || (e._originalScale = {
        x: e.scaleX,
        y: e.scaleY
    }), e.backToOriginalState || (e.backToOriginalState = function() {
        if (e._originalWidget) {
            var t = function t(_t34) {
                isNaN(e._originalWidget[_t34]) ? e[_t34] = NaN : e[_t34] = e._originalWidget[_t34];
            };
            t("left"), t("right"), t("top"), t("bottom"), t("horizontalCenter"), t("verticalCenter");
        }
        e._originalScale && (e.scaleX = e._originalScale.x, e.scaleY = e._originalScale.y);
    }));
}

function autoMove(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var s = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
    var r = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {
        x: 0,
        y: 0
    };
    e && (recordOriginalState(e), e._moveTween && (e._moveTween.clear(), e._moveTween = null), 
    e._scheduleKey && (Scheduler.unschedule(e._scheduleKey), e._scheduleKey = null), 
    n > 0 && (e.visible = !1), e.backToOriginalState(), e._scheduleKey = generateString(32), 
    Scheduler.schedule(e._scheduleKey, function() {
        e._scheduleKey = null, "function" == typeof t && t("hide_finished"), e.visible = !0, 
        e._scheduleKey = generateString(32), Scheduler.schedule(e._scheduleKey, function() {
            e._scheduleKey = null, "function" == typeof t && t("hold_finished_1"), e._scheduleKey = generateString(32), 
            Scheduler.schedule(e._scheduleKey, function() {
                e._scheduleKey = null, "function" == typeof t && t("hold_finished_2"), s ? e._moveTween = Laya.Tween.to(e, {
                    bottom: e.bottom - r.y
                }, o, null, Laya.Handler.create(null, function() {
                    e._moveTween = null, "function" == typeof t && t("move_finished");
                }), 0, !1, !1) : (e._scheduleKey = generateString(32), Scheduler.schedule(e._scheduleKey, function() {
                    e._scheduleKey = null, e.backToOriginalState(), e.bottom += r.y, "function" == typeof t && t("move_finished");
                }, !1, o, 1));
            }, !1, a, 1);
        }, !1, i, 1);
    }, !1, n, 1));
}

function createMistakeBtn_NoMove(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var s = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var r = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    var d = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
    var h = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
    var c = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : null;
    e && createMistakeBtn_Move(e, t, n, i, a, o, s, r, l, !1, {
        x: 0,
        y: 0
    }, d, h, c);
}

function createMistakeBtn_Move(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var s = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var r = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    var d = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : !1;
    var h = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : {
        x: 0,
        y: 0
    };
    var c = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : null;
    var u = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : null;
    var p = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : null;
    if (e) {
        recordOriginalState(e), e._canTouch = !1, e._isTouching = !1, o < 100 && (o = 100), 
        e.offAll("click");
        var _s = function _s() {
            e.on("click", null, function() {
                e._canTouch && doCallback$1(t);
            });
        };
        e.backToOriginalState(), e.enableMistake = function() {
            e._isTouching || (e._canTouch = !1, e._isTouching = !0, checkFunc(c) ? doCallback$1(c, {
                out: n === BtnClickMistakeType.Show,
                min: !0
            }) : adv_interface$1.showBannerAd(0, {
                out: n === BtnClickMistakeType.Show,
                min: !0
            }, ""), autoMove(e, function(t) {
                if ("hold_finished_1" === t) {
                    if (n === BtnClickMistakeType.Show || n === BtnClickMistakeType.Move) {
                        var _t35 = e.localToGlobal(new Laya.Point(e.width / 2, e.height / 2), !0);
                        checkFunc(p) ? doCallback$1(p, _t35) : adv_interface$1.moveBannerAdTo(_t35);
                    }
                } else "move_finished" === t && (e._isTouching = !1, e._canTouch = !0, _s(), 0 === h.x && 0 === h.y && (checkFunc(u) ? doCallback$1(u) : adv_interface$1.hideBannerAd()));
            }, a, o, r, l, d, h));
        }, e.disableMistake = function() {
            e._canTouch = !0, _s(), e.backToOriginalState(), e.bottom += h.y, delayShow(e, i || 0);
        };
    }
}

function createCrazyClickBtn(e, t, n, i, a) {
    var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    var s = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
    var r = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
    var d = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
    var h = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
    if (e) {
        var _s2 = [ a.target ];
        if ("number" != typeof a.target) {
            _s2 = a.target.split("|");
            for (var _e53 = 0; _e53 < _s2.length; _e53++) {
                _s2[_e53] = parseFloat(_s2[_e53]);
            }
        }
        var u = [ a.invokeType ];
        if (null != a.invokeType && "number" != typeof a.invokeType) {
            u = a.invokeType.split("|");
            for (var _e54 = 0; _e54 < u.length; _e54++) {
                u[_e54] = parseInt(u[_e54]);
            }
        }
        var p = 0, _ = 0, g = function g() {
            return "number" == typeof a.mistakeSuccTimes && p >= a.mistakeSuccTimes || void 0 === a.mistakeSuccTimes && p > 0;
        }, f = function f() {
            return 0 === a.videoTarget || _ > 0;
        };
        "number" != typeof a.maxMistakeTimes && (a.maxMistakeTimes = 0);
        var c = function c() {
            checkString(e._scheduleKey) && (Scheduler.unschedule(e._scheduleKey), e._scheduleKey = "");
        };
        e._curProgress = 0, Scheduler.unschedule(e._scheduleKey), e._scheduleKey = "", e._isMistakeEnabled = !1, 
        e.enableMistake = function() {
            e._isMistakeEnabled = !0;
        }, e.disableMistake = function() {
            e._isMistakeEnabled = !1;
        }, e._invokeMistakeTimes = 0, e._clickedTimes = 0, e._needClickTimes = 0;
        var m = function m() {
            e._clickedTimes = 0, e._needClickTimes = random(a.miniClick, a.maxClick);
        };
        m(), doCallback$1(t, e._curProgress), c(), e._scheduleKey = generateString(32), 
        Scheduler.schedule(e._scheduleKey, function() {
            if (e._curProgress > 0) {
                var _n15 = random(100 * a.miniMinus, 100 * a.maxMinus);
                e._curProgress -= _n15 / 100, e._curProgress < 0 && (e._curProgress = 0), doCallback$1(t, e._curProgress);
            }
        }, !1, a.gap);
        var A = function A() {
            p += 1;
        }, v = function v() {
            g() && (a.mistakeStyle == CrazyClickBannerMistakeType$1.Show && adv_interface$1.hideBannerAd(), 
            f() && S());
        };
        Event.addEventListerner(EventName.EN_APP_ONHIDE, A), Event.addEventListerner(EventName.EN_APP_ONSHOW, v), 
        isLoadQQConfig() || isLoadTTConfig() || -1 === u.indexOf(CrazyClickInvokeType.Banner) || (checkFunc(o) ? doCallback$1(o, {
            out: a.mistakeStyle !== CrazyClickBannerMistakeType$1.Move,
            min: !0
        }) : adv_interface$1.showBannerAd(0, {
            out: a.mistakeStyle !== CrazyClickBannerMistakeType$1.Move,
            min: !0
        })), e._isRewarded = !1;
        var S = function S() {
            e._isRewarded || (e._isRewarded = !0, Event.removeEventListerner(EventName.EN_APP_ONHIDE, A), 
            Event.removeEventListerner(EventName.EN_APP_ONSHOW, v), e._curProgress = 1, c(), 
            Scheduler.unschedule("Delay_Normal_CrazyClick_Mistake_State"), doCallback$1(t, e._curProgress), 
            doCallback$1(i));
        };
        e._isMistakeInvoked = !1;
        var y = function y() {
            if (e._isMistakeInvoked) return;
            e._isMistakeInvoked = !0;
            var t = u[u.length - 1];
            e._invokeMistakeTimes < u.length && (t = u[e._invokeMistakeTimes]), e._invokeMistakeTimes += 1;
            var n = u[u.length - 1];
            e._invokeMistakeTimes < u.length && (n = u[e._invokeMistakeTimes]), t === CrazyClickInvokeType.Banner ? isLoadQQConfig() || isLoadTTConfig() || a.mistakeStyle == CrazyClickBannerMistakeType$1.None ? checkFunc(o) ? doCallback$1(o, {
                min: !0
            }) : adv_interface$1.showBannerAd(0, {
                min: !0
            }) : checkFunc(r) ? doCallback$1(r, e.localToGlobal(new Laya.Point(e.width / 2, e.height / 2), !0)) : adv_interface$1.moveBannerAdTo(e.localToGlobal(new Laya.Point(e.width / 2, e.height / 2), !0)) : t === CrazyClickInvokeType.CustomScroll ? checkFunc(d) ? doCallback$1(d, a.scrollAdUnitId, {
                layout: "center",
                centerPt: e.localToGlobal(new Laya.Point(e.width / 2, e.height / 2), !0)
            }) : adv_interface$1.showComponentAd("scroll", "", a.scrollAdUnitId, {
                layout: "center",
                centerPt: e.localToGlobal(new Laya.Point(e.width / 2, e.height / 2), !0)
            }) : t === CrazyClickInvokeType.Box && adv_interface$1.showBoxAd("", null, null, null), 
            Scheduler.unschedule(), Scheduler.schedule("Delay_Normal_CrazyClick_Mistake_State", function() {
                t === CrazyClickInvokeType.Banner ? a.mistakeStyle == CrazyClickBannerMistakeType$1.None ? adv_interface$1.hideBannerAd() : adv_interface$1.moveBannerAdBack() : t === CrazyClickInvokeType.CustomScroll && (checkFunc(h) ? doCallback$1(h, a.scrollAdUnitId) : adv_interface$1.hideComponentAd(a.scrollAdUnitId)), 
                n === t === CrazyClickInvokeType.Banner && a.mistakeStyle === CrazyClickBannerMistakeType$1.Move && (checkFunc(o) ? doCallback$1(o) : adv_interface$1.showBannerAd(0, {}, "")), 
                !g() && (0 === a.maxMistakeTimes || e._invokeMistakeTimes < a.maxMistakeTimes) && (e._isMistakeInvoked = !1, 
                m());
            }, !1, a.duration, 1);
        }, I = function I() {
            if (e._curProgress += a.add, e._curProgress >= 1 ? S() : doCallback$1(t, e._curProgress), 
            e._isMistakeEnabled) {
                var _t36 = _s2[_s2.length - 1];
                e._invokeMistakeTimes < _s2.length && (_t36 = _s2[e._invokeMistakeTimes]), 0 === _ && a.videoTarget > 0 && e._curProgress > a.videoTarget && (_ = 1, 
                checkFunc(l) ? doCallback$1(l, function() {
                    A(), g() && f() && S();
                }) : (PlatAdOnShowFlow.video = "", adv_interface$1.showRewardedVideoAd("", !1, function() {
                    A(), g() && f() && S();
                }, function() {
                    g() && f() && S();
                }))), e._curProgress > _t36 && (e._clickedTimes += 1, 0 !== e._needClickTimes && e._clickedTimes !== e._needClickTimes || y());
            }
        };
        e.offAll("click"), e.on("click", null, function() {
            playBtnTouchAction(e), AudioMgr.playSound(SoundName.SN_CLICK), I(), doCallback$1(n);
        });
    }
}

function doCustomPromise(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var n = -1, i = function i() {
        if (Array.isArray(e) && e.length > 0) for (var _t37 = 0; _t37 < e.length; _t37++) {
            if (e[_t37].times > 0) return !1;
        }
        return !0;
    }, a = function a(t) {
        ++n === e.length && (n = 0);
        var o = e[n];
        o.times > 0 ? (o.times--, Promise.all([ o.getPromiseFunc() ]).then(function() {
            i() ? doCallback$1(t) : a(t);
        })) : i() ? doCallback$1(t) : a(t);
    };
    i() ? doCallback$1(t) : a(t);
}

function convertToOpenGLPt(e) {
    var t = null;
    if (t = isCocosEngine() ? cc.v2(0, 0) : new Laya.Point(0, 0), void 0 === e.x || null === e.x || void 0 === e.y || null === e.y) return t;
    var n = PlatHelper.getSysInfo();
    return t.x = e.x / getSceneSize().width * n.screenWidth, isCocosEngine() ? t.y = (1 - e.y / getSceneSize().height) * n.screenHeight : t.y = e.y / getSceneSize().height * n.screenHeight, 
    t;
}

function convertToOpenGLSize(e) {
    var t = null;
    if (t = isCocosEngine() ? cc.size(0, 0) : new Laya.Size(0, 0), void 0 === e.width || null === e.width || void 0 === e.height || null === e.height) return t;
    var n = PlatHelper.getSysInfo();
    return void 0 !== t._width ? (t._width = e.width / getSceneSize().width * n.screenWidth, 
    t._height = e.height / getSceneSize().height * n.screenHeight) : (t.width = e.width / getSceneSize().width * n.screenWidth, 
    t.height = e.height / getSceneSize().height * n.screenHeight), t;
}

function h_ShowAdvs(e, t) {
    Array.isArray(t) ? console.warn("广告曝光 路劲：" + e + "，数量：" + t.length, t) : console.warn("广告曝光 路劲：" + e + "，数量：1", t);
}

function h_ShowView(e) {
    console.warn("流程曝光 路劲：" + e);
}

function h_ShowPage(e) {
    console.warn("页面曝光 路劲：" + e);
}

function h_ShowComponent(e) {
    console.warn("组件曝光 路劲：" + e);
}

function h_ReportFlowAdv(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    t === FlowAdvActionType.Show ? console.warn("流量主广告曝光 类型：" + e + ("" !== n ? " 流程：" + n : "")) : t === FlowAdvActionType.LoadSucc ? console.warn("流量主广告加载成功 类型：" + e + ("" !== n ? " 流程：" + n : "")) : t === FlowAdvActionType.LoadFail && console.warn("流量主广告加载失败 类型：" + e + ("" !== n ? " 流程：" + n : ""));
}

var WX_UIKeys = {
    FakeLoading: "fakeLoading",
    MoreGame: "moreGame",
    MoreGameEntrance: "moreGameEntrance",
    FullExport: "fullExport",
    FullExport_V2: "fullExport_v2",
    FullExit: "fullExit",
    CrazyClick: "crazyClick",
    Scroll: "scroll",
    ScrollWithName: "scrollWithName",
    Couplet: "couplet",
    Matrix: "matrix",
    NativeTemplateAd: "nativeTemplateAd"
}, QQ_UIKeys = {
    MoreGameEntrance: "moreGameEntrance_QQ",
    CrazyClick: "crazyClick_QQ"
}, TT_UIKeys = {
    MoreGameEntrance: "moreGameEntrance_TT",
    CrazyClick: "crazyClick_TT"
}, Native_UIKeys = {}, VIVO_UIKeys = {
    MoreGameEntrance: "moreGameEntrance_VIVO",
    NativeBanner: "nativeBanner_VIVO",
    NativeBottomBanner: "nativeBottomBanner_VIVO",
    NativeMiddleBanner: "nativeMiddleBanner_VIVO"
}, OPPO_UIKeys = {
    MoreGameEntrance: "moreGameEntrance_OPPO",
    NativeBanner: "nativeBanner_OPPO",
    NativeBottomBanner: "nativeBottomBanner_OPPO",
    NativeMiddleBanner: "nativeMiddleBanner_OPPO"
}, _UIKeys = {
    Modal: "modal",
    Loading: "loading",
    Tips: "tips",
    Finger: "finger",
    Mask: "mask",
    Private: "private",
    Transplate: "transplate",
    FakeLoading: "",
    MoreGame: "",
    MoreGameEntrance: "",
    FullExport: "",
    FullExport_V2: "",
    FullExit: "",
    CrazyClick: "",
    Scroll: "",
    ScrollWithName: "",
    Couplet: "",
    Matrix: "",
    NativeTemplateAd: "",
    NativeBanner: "",
    NativeBottomBanner: "",
    NativeMiddleBanner: ""
};

isLoadQQConfig() ? Object.assign(_UIKeys, QQ_UIKeys) : isLoadTTConfig() ? Object.assign(_UIKeys, TT_UIKeys) : isLoadOPPOConfig() ? Object.assign(_UIKeys, OPPO_UIKeys) : isLoadVIVOConfig() ? Object.assign(_UIKeys, VIVO_UIKeys) : isLoadWXConfig$1() ? Object.assign(_UIKeys, WX_UIKeys) : isLoadNativeConfig() ? Object.assign(_UIKeys, Native_UIKeys) : console.error("Not Support This Platform, check hlsdk_config.js first...");

var UIKeys = _UIKeys;

var _BaseUI = /* */ function(_Laya$Script) {
    _inherits2(_BaseUI, _Laya$Script);
    var _super25 = _createSuper2(_BaseUI);
    function _BaseUI() {
        var _this73;
        _classCallCheck2(this, _BaseUI);
        _this73 = _super25.call(this), _this73._rootNode = void 0, _this73._callbacks = {}, 
        _this73._openType = "none", _this73._closeType = "none";
        return _this73;
    }
    _createClass2(_BaseUI, [ {
        key: "onEnable",
        value: function onEnable() {
            this._onInitUI();
        }
    }, {
        key: "_onInitUI",
        value: function _onInitUI() {
            "function" == typeof this.onInitUI && this.onInitUI();
        }
    }, {
        key: "showUI",
        value: function showUI() {
            var _this74 = this;
            this.owner.visible = !0, arguments.length > 0 ? this._onInit.apply(this, arguments) : this._onInit(), 
            "scale" === this._openType ? this._runScaleOpenAction(function() {
                _this74._onShow();
            }) : "fromLeft" === this._openType ? this._runFromLeftOpenAction(function() {
                _this74._onShow();
            }) : "fromBottom" === this._openType ? this._runFromBottomOpenAction(function() {
                _this74._onShow();
            }) : "opacity" === this._openType ? this._runOpacityOpenAction(function() {
                _this74._onShow();
            }) : this._onShow();
        }
    }, {
        key: "hideUI",
        value: function hideUI() {
            var _this75 = this;
            "scale" === this._closeType ? this._runScaleCloseAction(function() {
                _this75._onHide();
            }) : "opacity" === this._closeType ? this._runOpacityCloseAction(function() {
                _this75._onHide();
            }) : this._onHide();
        }
    }, {
        key: "tempShowUI",
        value: function tempShowUI() {
            this.owner.visible = !0;
        }
    }, {
        key: "tempHideUI",
        value: function tempHideUI() {
            this.owner.visible = !1;
        }
    }, {
        key: "isOnShow",
        value: function isOnShow() {
            var e = function e(t) {
                return !(!t || !t.visible) && (t.parent ? e(t.parent) : t === Laya.stage);
            };
            return e(this.owner);
        }
    }, {
        key: "_onInit",
        value: function _onInit() {
            this._rootNode && (this._rootNode.pivotX = this._rootNode.width / 2, this._rootNode.pivotY = this._rootNode.height / 2, 
            this._rootNode.parent ? (this._rootNode.x = this._rootNode.parent.width / 2, this._rootNode.y = this._rootNode.parent.height / 2) : (this._rootNode.x = Laya.stage.width / 2, 
            this._rootNode.y = Laya.stage.height / 2), this._rootNode.alpha = 1), "function" == typeof this.onInit && (arguments.length > 0 ? this.onInit.apply(this, arguments) : this.onInit());
        }
    }, {
        key: "_onShow",
        value: function _onShow() {
            this._rootNode && this._rootNode._baseTween && (this._rootNode._baseTween.clear(), 
            this._rootNode._baseTween = null), "function" == typeof this.onShow && this.onShow();
        }
    }, {
        key: "_onHide",
        value: function _onHide() {
            "function" == typeof this.onHide && this.onHide(), this.owner.visible = !1, this.invokeCallback("close");
        }
    }, {
        key: "_runScaleOpenAction",
        value: function _runScaleOpenAction(e) {
            if (this._rootNode) {
                var t = this._rootNode;
                t._baseTween && (t._baseTween.clear(), t._baseTween = null), t.scaleX = .8, t.scaleY = .8, 
                t._baseTween = Laya.Tween.to(t, {
                    scaleX: 1,
                    scaleY: 1
                }, 500, Laya.Ease.elasticOut, Laya.Handler.create(null, function() {
                    t._baseTween = null, "function" == typeof e && e();
                }));
            }
        }
    }, {
        key: "_runFromLeftOpenAction",
        value: function _runFromLeftOpenAction(e) {
            if (this._rootNode) {
                var t = this._rootNode;
                t._baseTween && (t._baseTween.clear(), t._baseTween = null), t.x = Laya.stage.width / 3, 
                t._baseTween = Laya.Tween.to(t, {
                    x: Laya.stage.width / 2
                }, 500, Laya.Ease.elasticOut, Laya.Handler.create(null, function() {
                    t._baseTween = null, "function" == typeof e && e();
                }));
            }
        }
    }, {
        key: "_runFromBottomOpenAction",
        value: function _runFromBottomOpenAction(e) {
            if (this._rootNode) {
                var t = this._rootNode;
                t._baseTween && (t._baseTween.clear(), t._baseTween = null), t.y = Laya.stage.height / 4, 
                t._baseTween = Laya.Tween.to(t, {
                    y: Laya.stage.height - t.height
                }, 500, Laya.Ease.elasticOut, Laya.Handler.create(null, function() {
                    t._baseTween = null, "function" == typeof e && e();
                }));
            }
        }
    }, {
        key: "_runOpacityOpenAction",
        value: function _runOpacityOpenAction(e) {
            if (this._rootNode) {
                var t = this._rootNode;
                t._baseTween && (t._baseTween.clear(), t._baseTween = null), t.alpha = 0, t._baseTween = Laya.Tween.to(t, {
                    alpha: 1
                }, 400, null, Laya.Handler.create(null, function() {
                    t._baseTween = null, "function" == typeof e && e();
                }));
            }
        }
    }, {
        key: "_runScaleCloseAction",
        value: function _runScaleCloseAction(e) {
            if (this._rootNode) {
                var t = this._rootNode;
                t._baseTween && (t._baseTween.clear(), t._baseTween = null), t.scaleX = 1, t.scaleY = 1, 
                t._baseTween = Laya.Tween.to(t, {
                    scaleX: .1,
                    scaleY: .1
                }, 500, Laya.Ease.elasticOut, Laya.Handler.create(null, function() {
                    t._baseTween = null, "function" == typeof e && e();
                }));
            }
        }
    }, {
        key: "_runOpacityCloseAction",
        value: function _runOpacityCloseAction(e) {
            if (this._rootNode) {
                var t = this._rootNode;
                t._baseTween && (t._baseTween.clear(), t._baseTween = null), t.alpha = 1, t._baseTween = Laya.Tween.to(t, {
                    alpha: 0
                }, 400, null, Laya.Handler.create(null, function() {
                    t._baseTween = null, "function" == typeof e && e();
                }));
            }
        }
    }, {
        key: "registerCallback",
        value: function registerCallback(e, t) {
            checkString(e) && (void 0 === this._callbacks[e] && (this._callbacks[e] = []), this._callbacks[e].push(t));
        }
    }, {
        key: "unregisterCallback",
        value: function unregisterCallback(e, t) {
            if (checkString(e) && void 0 !== this._callbacks[e]) if (t) {
                var n = this._callbacks[e], i = n.indexOf(t);
                i > -1 && n.splice(i, 1);
            } else this._callbacks[e] = [];
        }
    }, {
        key: "invokeCallback",
        value: function invokeCallback(e) {
            if (checkString(e) && void 0 !== this._callbacks[e]) {
                var t = [].concat(this._callbacks[e]), n = Array.prototype.slice.call(arguments);
                n.shift();
                for (var _e55 = 0; _e55 < t.length; _e55++) {
                    t[_e55].apply(null, n);
                }
            }
        }
    } ]);
    return _BaseUI;
}(Laya.Script);

var BaseUI = _BaseUI;

var _ImageAnimation = /* */ function(_Laya$Sprite) {
    _inherits2(_ImageAnimation, _Laya$Sprite);
    var _super26 = _createSuper2(_ImageAnimation);
    function _ImageAnimation(e) {
        var _this76;
        _classCallCheck2(this, _ImageAnimation);
        _this76 = _super26.call(this), _this76._originalSize = e, _this76._imgUrl = "", 
        _this76._singleImgSize = null, _this76._totalFrames = 0, _this76._curentFrame = 0, 
        _this76._rowCount = 0, _this76._colCount = 0, _this76._offsetTexture = new Laya.Point(), 
        _this76._isAnimating = !1, _this76._imgTexture = null, _this76._onSizeChangedCb = null, 
        _this76.size(e.width, e.height);
        return _this76;
    }
    _createClass2(_ImageAnimation, [ {
        key: "setImageData",
        value: function setImageData(e) {
            if (this._imgUrl !== e) if ("object" == _typeof2(e)) {
                var t = e;
                this._setImageAnimation(t.path, {
                    width: t.width,
                    height: t.height
                }, t.frame_count);
            } else this._setImg(e);
        }
    }, {
        key: "_setImg",
        value: function _setImg(e) {
            this._imgUrl = e, this._totalFrames = 1, null !== this._imgTexture && (this._imgTexture = null, 
            this._singleImgSize = null, this._totalFrames = 0, this._curentFrame = 0, this._rowCount = 0, 
            this._colCount = 0, this._offsetTexture = new Laya.Point(), this._endAnimate(), 
            this.graphics.clear(!0));
            var t = "";
            if ("string" == typeof e && "" !== e) t = e; else if (Array.isArray(e) && e.length > 0) {
                var n = this._random(0, e.length - 1);
                t = e[n];
            } else t = "hlsdk/res/ad/default_ad.png";
            this.loadImage(t, Laya.Handler.create(this, function() {
                this._imgUrl === e && this.texture && (this.size(this.texture.width, this.texture.height), 
                this._onSizeChangedCb && this._onSizeChangedCb());
            }.bind(this)));
        }
    }, {
        key: "_setImageAnimation",
        value: function _setImageAnimation(e, t, n) {
            n > 1 ? (this._imgUrl = e, this._singleImgSize = t, this._totalFrames = n, this.size(t.width, t.height), 
            this._onSizeChangedCb && this._onSizeChangedCb(), this._loadImg(function() {
                e === this._imgUrl && (null !== this.texture && (this.texture = null), null !== this._imgTexture && (this._curentFrame = 0, 
                this._rowCount = this._imgTexture.height / this._singleImgSize.height, this._colCount = this._imgTexture.width / this._singleImgSize.width, 
                this._startAnimate()));
            }.bind(this))) : this._setImg(e);
        }
    }, {
        key: "_loadImg",
        value: function _loadImg(e) {
            "string" == typeof this._imgUrl && "" !== this._imgUrl && Laya.loader.load(this._imgUrl, Laya.Handler.create(this, function() {
                this._imgTexture = Laya.loader.getRes(this._imgUrl), "function" == typeof e && e();
            }.bind(this)));
        }
    }, {
        key: "_updateFrame",
        value: function _updateFrame() {
            this._curentFrame += 1, this._curentFrame > this._totalFrames && (this._curentFrame = 1);
            var e = (this._curentFrame - 1) % this._colCount * this._singleImgSize.width, t = Math.floor((this._curentFrame - 1) / this._colCount) * this._singleImgSize.height;
            this._offsetTexture.x = -e, this._offsetTexture.y = -t, this.graphics.clear(!0), 
            this.graphics.fillTexture(this._imgTexture, 0, 0, this.width, this.height, "no-repeat", this._offsetTexture);
        }
    }, {
        key: "_startAnimate",
        value: function _startAnimate() {
            this._endAnimate(), this._isAnimating = !0, this.timerLoop(100, this, this._updateAnimate), 
            this._updateFrame();
        }
    }, {
        key: "_updateAnimate",
        value: function _updateAnimate() {
            this._isAnimating && this._checkIsOnShow(this) && this._updateFrame();
        }
    }, {
        key: "_endAnimate",
        value: function _endAnimate() {
            this._isAnimating && (this._isAnimating = !1, this.clearTimer(this, this._updateAnimate));
        }
    }, {
        key: "onSizeChanged",
        value: function onSizeChanged(e) {
            "function" == typeof e && (this._onSizeChangedCb = e);
        }
    }, {
        key: "offSizeChanged",
        value: function offSizeChanged() {
            this._onSizeChangedCb = null;
        }
    }, {
        key: "_checkIsOnShow",
        value: function _checkIsOnShow(e) {
            return null === e || e && e.visible && this._checkIsOnShow(e.parent);
        }
    }, {
        key: "_random",
        value: function _random(e, t) {
            if (e < 0 || t <= 0) return 0;
            switch (arguments.length) {
              case 1:
                return Math.floor(Math.random() * e + 1);

              case 2:
                return Math.floor(Math.random() * (t - e + 1) + e);

              default:
                return 0;
            }
        }
    } ]);
    return _ImageAnimation;
}(Laya.Sprite);

var ImageAnimation = _ImageAnimation;

var C_TAG_OF_NEW$1 = "New", C_TAG_OF_HOT$1 = "Hot";

var _AdvItem = /* */ function(_Laya$Box) {
    _inherits2(_AdvItem, _Laya$Box);
    var _super27 = _createSuper2(_AdvItem);
    function _AdvItem(e, t, n) {
        var _this77;
        _classCallCheck2(this, _AdvItem);
        _this77 = _super27.call(this), _this77._index = e, _this77._advID = 0, _this77._advImgUrls = "", 
        _this77._advTitle = "", _this77._advPath = "", _this77._effectType = "0", _this77._flagType = "0", 
        _this77._itemCfg = n, _this77._advImg = null, _this77._advFrame = null, _this77._advName = null, 
        _this77.size(t.width, t.height), _this77._initUI(t.width, t.height);
        return _this77;
    }
    _createClass2(_AdvItem, [ {
        key: "_initUI",
        value: function _initUI(e, t) {
            var n = null;
            n = this._itemCfg.imgWidth > 0 && this._itemCfg.imgHeight > 0 ? {
                width: this._itemCfg.imgWidth,
                height: this._itemCfg.imgHeight,
                iconNeedPos: this._itemCfg.iconNeedPos,
                iconPos: this._itemCfg.iconPos
            } : {
                width: e,
                height: t,
                iconNeedPos: this._itemCfg.iconNeedPos,
                iconPos: this._itemCfg.iconPos
            };
            var i = new ImageAnimation(n);
            if (i && (i.onSizeChanged(function() {
                if (!i.destroyed) if (n.iconNeedPos) {
                    var _e56 = n.iconPos.split("|");
                    i.pivotX = 0, i.pivotY = 0, i.x = Number.parseInt(_e56[0]), i.y = Number.parseInt(_e56[1]), 
                    i.scaleX = n.width / i.width, i.scaleY = n.height / i.height;
                } else i.pivotX = i.width / 2, i.pivotY = i.height / 2, i.x = n.width / 2, i.y = n.height / 2, 
                i.scaleX = n.width / i.width, i.scaleY = n.height / i.height;
            }), this.addChild(i), this._advImg = i, this._addTagIntoImg(C_TAG_OF_NEW$1), this._addTagIntoImg(C_TAG_OF_HOT$1)), 
            "string" == typeof this._itemCfg.framePath && "" !== this._itemCfg.framePath) {
                if (this._advFrame = new Laya.Image(), this._itemCfg.framePathCount > 1) {
                    var _e57 = this._index % this._itemCfg.framePathCount;
                    0 === _e57 && (_e57 = this._itemCfg.framePathCount), this._advFrame.skin = this._itemCfg.framePath.format(_e57.toString());
                } else this._advFrame.skin = this._itemCfg.framePath;
                this._advFrame.width = e, this._advFrame.height = t, this._advFrame.pivotX = this._advFrame.width / 2, 
                this._advFrame.pivotY = this._advFrame.height / 2, this._advFrame.x = this._advFrame.width / 2, 
                this._advFrame.y = this._advFrame.height / 2, this.addChild(this._advFrame);
            }
            if (this._itemCfg.needMask && Laya.loader.load(SubConfig.path + "hlsdk/res/ad/ad_mask.png", Laya.Handler.create(null, function() {
                var e = new Laya.Image();
                e.skin = SubConfig.path + "hlsdk/res/ad/ad_mask.png", e.sizeGrid = "30,30,30,30", 
                e.width = this._advImg.width + 2, e.height = this._advImg.height + 2, e.pivotX = e.width / 2, 
                e.pivotY = e.height / 2, e.x = e.width / 2, e.y = e.height / 2, this._advImg.mask = e;
            }.bind(this))), "" !== this._itemCfg.nameCfg) {
                var _t38 = this._itemCfg.nameCfg.split("||");
                if (this._advName = new Laya.Text(), this._advName.fontSize = parseInt(_t38[0], 10), 
                _t38.length >= 3 ? this._advName.color = "#" + _t38[2] : this._advName.color = "#ffffff", 
                this._advName.valign = "top", this._advName.height = parseInt(_t38[0], 10), this._itemCfg.nameNeedPos && "" !== this._itemCfg.namePos) {
                    var _t39 = this._itemCfg.namePos.split("|"), _n16 = Number.parseFloat(_t39[2]);
                    this._advName.align = .5 == _n16 ? "center" : 1 == _n16 ? "right" : "left", this._advName.width = e, 
                    this._advName.pivotX = this._advName.width * _n16, this._advName.pivotY = 0, this._advName.x = parseInt(_t39[0], 10), 
                    this._advName.y = parseInt(_t39[1], 10);
                } else this._advName.align = "center", this._advName.width = e, this._advName.pivotX = this._advName.width / 2, 
                this._advName.pivotY = 0, this._advName.x = e / 2, this._advName.y = this._advImg.height + parseInt(_t38[1], 10);
                this.addChild(this._advName);
            }
        }
    }, {
        key: "_addTagIntoImg",
        value: function _addTagIntoImg(e) {
            var t = this._advImg;
            t && (t["set" + e + "TagStatus"] = function(n) {
                t["_is" + e + "TagOnShow"] = n;
                var i = "_" + e + "Tag";
                if (n) {
                    if (!t[i]) {
                        var _n17 = new Laya.Image();
                        _n17.skin = e === C_TAG_OF_NEW$1 ? this._itemCfg.newTagPath : this._itemCfg.hotTagPath, 
                        t.getChildByName("tag") ? (_n17.pivotX = 0, _n17.pivotY = 0, _n17.x = 0, _n17.y = 0, 
                        t.getChildByName("tag").addChild(_n17)) : (-1 !== _n17.skin.indexOf("2") ? (_n17.pivotX = 0, 
                        _n17.pivotY = 0, _n17.x = 1.5, _n17.y = 1.5) : (_n17.pivotX = _n17.width, _n17.pivotY = 0, 
                        _n17.x = t.width - 1.5, _n17.y = 1.5), t.addChild(_n17)), t[i] = _n17;
                    }
                    t[i].visible = !0;
                } else t[i] && (t[i].visible = !1);
            }.bind(this), t["get" + e + "TagStatus"] = function() {
                return t["_is" + e + "TagOnShow"];
            }, t["set" + e + "TagStatus"](!1));
        }
    }, {
        key: "_setSweepEffectStatus",
        value: function _setSweepEffectStatus(e) {
            var t = this._advImg;
            if (t) if (e) {
                if (!t._sweepImg) {
                    var _e58 = new Laya.Image();
                    _e58.skin = this._itemCfg.sweepEffectPath, _e58.scaleY = (t.height - 2) / _e58.height, 
                    _e58.scaleX = _e58.scaleY, _e58.pivotX = 0, _e58.pivotY = _e58.height / 2, _e58.y = t.height / 2, 
                    t.addChild(_e58), t._sweepImg = _e58;
                }
                if (t._sweepImg.visible = !0, !t._tween) {
                    var _e59 = function _e59(n) {
                        t._sweepImg.x = 0 - t._sweepImg.width * t._sweepImg.scaleX, t._tween = Laya.Tween.to(t._sweepImg, {
                            x: t.width
                        }, 1e3, null, Laya.Handler.create(null, function() {
                            t._tween = null, _e59(2e3);
                        }), n);
                    };
                    _e59(0);
                }
                t.mask || Laya.loader.load(SubConfig.path + "hlsdk/res/ad/ad_mask.png", Laya.Handler.create(null, function() {
                    var e = new Laya.Image();
                    e.skin = SubConfig.path + "hlsdk/res/ad/ad_mask.png", e.sizeGrid = "30,30,30,30", 
                    e.width = t.width + 2, e.height = t.height + 2, e.pivotX = e.width / 2, e.pivotY = e.height / 2, 
                    e.x = e.width / 2, e.y = e.height / 2, t.mask = e;
                }.bind(this)));
            } else t._sweepImg && (t._sweepImg.visible = !1), t._tween && (t._tween.clear(), 
            t._tween = null), t.mask && !this._itemCfg.needMask && (t.mask = null);
        }
    }, {
        key: "getImgCenterPt",
        value: function getImgCenterPt() {
            return this._advImg ? this._advImg.localToGlobal(new Laya.Point(this._advImg.width / 2, this._advImg.height / 2), !0) : new Laya.Point(0, 0);
        }
    }, {
        key: "setAdvInfo",
        value: function setAdvInfo(e, t, n, i, a, o) {
            this._advID === e && this._advImgUrls === t && this._advTitle === n && this._advPath === i && this._effectType === a && this._flagType === o || (this._advID = e, 
            this._advImgUrls = t, this._advTitle = n, this._advPath = i, this._effectType = a, 
            this._flagType = o, this._advImg.setImageData(this._advImgUrls), this._advName && (this._advName.text = this._advTitle), 
            this._advImg["set" + C_TAG_OF_NEW$1 + "TagStatus"]("1" === this._flagType), this._advImg["set" + C_TAG_OF_HOT$1 + "TagStatus"]("2" === this._flagType), 
            this._setSweepEffectStatus("1" === this._effectType));
        }
    } ]);
    return _AdvItem;
}(Laya.Box);

var AdvItem = _AdvItem;

var _AdvList = /* */ function(_Laya$Script2) {
    _inherits2(_AdvList, _Laya$Script2);
    var _super28 = _createSuper2(_AdvList);
    function _AdvList() {
        var _this78;
        _classCallCheck2(this, _AdvList);
        _this78 = _super28.call(this), _this78._inited = !1, _this78._touchCb = null, _this78._selectCb = null, 
        _this78._isHorizontal = !1, _this78._cellSize = null;
        return _this78;
    }
    _createClass2(_AdvList, [ {
        key: "onEnable",
        value: function onEnable() {
            this._initUI();
        }
    }, {
        key: "_initUI",
        value: function _initUI() {
            this.owner.selectEnable = !0, this.owner.selectHandler = new Laya.Handler(this, this.onSelect), 
            this.owner.renderHandler = new Laya.Handler(this, this.updateItem), this.owner.mouseHandler = new Laya.Handler(this, this.onTouch);
        }
    }, {
        key: "updateItem",
        value: function updateItem(e, t) {
            var n = e.dataSource;
            null != e.setAdvInfo && e.setAdvInfo(n.adv_id, n.logo_url, n.title, n.path, n.effect_type, n.flag_type);
        }
    }, {
        key: "onSelect",
        value: function onSelect(e) {
            var t = this.owner.selection.dataSource;
            AudioMgr.playSound(SoundName.SN_CLICK), this._doSelectCallback(t, function(e) {
                e && this.owner.setItem(this.owner.selectedIndex, e);
            }.bind(this));
        }
    }, {
        key: "onTouch",
        value: function onTouch(e) {
            e && ("mousedown" === e.type ? this._doTouchCallback("down") : "mouseup" === e.type || "mouseout" === e.type ? this._doTouchCallback("up") : "click" === e.type && this._doTouchCallback("click"));
        }
    }, {
        key: "getAllExposedAdvInfos",
        value: function getAllExposedAdvInfos() {
            var _this79 = this;
            var e = [];
            return this.owner.cells.forEach(function(t) {
                if (t && t.dataSource) {
                    var n = t.localToGlobal(new Laya.Point(0, 0), !0);
                    if (n.x >= 0 && n.y >= 0) {
                        var _n18 = t.localToGlobal(new Laya.Point(t.width, t.height), !0), i = _this79.owner.globalToLocal(_n18, !0);
                        i.x - .5 <= _this79.owner.width && i.y - .5 <= _this79.owner.height && e.push({
                            index: t._index,
                            info: t.dataSource,
                            getCenterPt: function getCenterPt() {
                                return t.getImgCenterPt();
                            }
                        });
                    }
                }
            }), e;
        }
    }, {
        key: "registerTouchCallback",
        value: function registerTouchCallback(e) {
            "function" == typeof e && (this._touchCb = e);
        }
    }, {
        key: "_doTouchCallback",
        value: function _doTouchCallback(e) {
            this._touchCb && this._touchCb(e);
        }
    }, {
        key: "registerSelectCallback",
        value: function registerSelectCallback(e) {
            "function" == typeof e && (this._selectCb = e);
        }
    }, {
        key: "_doSelectCallback",
        value: function _doSelectCallback(e, t) {
            this._selectCb && this._selectCb(e, t);
        }
    }, {
        key: "setList",
        value: function setList(e, t, n, i) {
            if (!this._inited && (this._inited = !0, this._isHorizontal = e, this._cellSize = t, 
            Array.isArray(i) && i.length > 0)) {
                var _e60 = 0;
                this.owner.itemRender = function() {
                    return new AdvItem(_e60 += 1, t, n);
                }, this._isHorizontal ? (this.owner.repeatX = Math.ceil(i.length / this.owner.repeatY), 
                this.owner.hScrollBarSkin = "") : (this.owner.repeatY = Math.ceil(i.length / this.owner.repeatX), 
                this.owner.vScrollBarSkin = "");
            }
            this.owner.array = i;
        }
    } ]);
    return _AdvList;
}(Laya.Script);

var AdvList = _AdvList, freeGlobal = "object" == (typeof global === "undefined" ? "undefined" : _typeof2(global)) && global && global.Object === Object && global, freeSelf = "object" == (typeof self === "undefined" ? "undefined" : _typeof2(self)) && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), _Symbol = root.Symbol, objectProto$e = Object.prototype, hasOwnProperty$c = objectProto$e.hasOwnProperty, nativeObjectToString$1 = objectProto$e.toString, symToStringTag$1 = _Symbol ? _Symbol.toStringTag : void 0;

function getRawTag(e) {
    var t = hasOwnProperty$c.call(e, symToStringTag$1), n = e[symToStringTag$1];
    try {
        e[symToStringTag$1] = void 0;
        var i = !0;
    } catch (e) {}
    var a = nativeObjectToString$1.call(e);
    return i && (t ? e[symToStringTag$1] = n : delete e[symToStringTag$1]), a;
}

var objectProto$d = Object.prototype, nativeObjectToString = objectProto$d.toString;

function objectToString(e) {
    return nativeObjectToString.call(e);
}

var nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag = _Symbol ? _Symbol.toStringTag : void 0;

function baseGetTag(e) {
    return null == e ? void 0 === e ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(e) ? getRawTag(e) : objectToString(e);
}

function isObjectLike(e) {
    return null != e && "object" == _typeof2(e);
}

var symbolTag$3 = "[object Symbol]";

function isSymbol(e) {
    return "symbol" == _typeof2(e) || isObjectLike(e) && baseGetTag(e) == symbolTag$3;
}

function arrayMap(e, t) {
    for (var n = -1, i = null == e ? 0 : e.length, a = Array(i); ++n < i; ) {
        a[n] = t(e[n], n, e);
    }
    return a;
}

var isArray = Array.isArray, INFINITY$2 = 1 / 0, symbolProto$2 = _Symbol ? _Symbol.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;

function baseToString(e) {
    if ("string" == typeof e) return e;
    if (isArray(e)) return arrayMap(e, baseToString) + "";
    if (isSymbol(e)) return symbolToString ? symbolToString.call(e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -INFINITY$2 ? "-0" : t;
}

function isObject(e) {
    var t = _typeof2(e);
    return null != e && ("object" == t || "function" == t);
}

function identity(e) {
    return e;
}

var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";

function isFunction(e) {
    if (!isObject(e)) return !1;
    var t = baseGetTag(e);
    return t == funcTag$2 || t == genTag$1 || t == asyncTag || t == proxyTag;
}

var coreJsData = root["__core-js_shared__"], maskSrcKey = function() {
    var e = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
}();

function isMasked(e) {
    return !!maskSrcKey && maskSrcKey in e;
}

var funcProto$1 = Function.prototype, funcToString$1 = funcProto$1.toString;

function toSource(e) {
    if (null != e) {
        try {
            return funcToString$1.call(e);
        } catch (e) {}
        try {
            return e + "";
        } catch (e) {}
    }
    return "";
}

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, funcProto = Function.prototype, objectProto$c = Object.prototype, funcToString = funcProto.toString, hasOwnProperty$b = objectProto$c.hasOwnProperty, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function baseIsNative(e) {
    return !(!isObject(e) || isMasked(e)) && (isFunction(e) ? reIsNative : reIsHostCtor).test(toSource(e));
}

function getValue(e, t) {
    return null == e ? void 0 : e[t];
}

function getNative(e, t) {
    var n = getValue(e, t);
    return baseIsNative(n) ? n : void 0;
}

var WeakMap = getNative(root, "WeakMap"), objectCreate = Object.create, baseCreate = function() {
    function object() {}
    return function(e) {
        if (!isObject(e)) return {};
        if (objectCreate) return objectCreate(e);
        object.prototype = e;
        var t = new object();
        return object.prototype = void 0, t;
    };
}();

function apply(e, t, n) {
    switch (n.length) {
      case 0:
        return e.call(t);

      case 1:
        return e.call(t, n[0]);

      case 2:
        return e.call(t, n[0], n[1]);

      case 3:
        return e.call(t, n[0], n[1], n[2]);
    }
    return e.apply(t, n);
}

function noop() {}

function copyArray(e, t) {
    var n = -1, i = e.length;
    for (t || (t = Array(i)); ++n < i; ) {
        t[n] = e[n];
    }
    return t;
}

var HOT_COUNT = 800, HOT_SPAN = 16, nativeNow = Date.now;

function shortOut(e) {
    var t = 0, n = 0;
    return function() {
        var i = nativeNow(), a = HOT_SPAN - (i - n);
        if (n = i, a > 0) {
            if (++t >= HOT_COUNT) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
    };
}

function constant(e) {
    return function() {
        return e;
    };
}

var defineProperty = function() {
    try {
        var e = getNative(Object, "defineProperty");
        return e({}, "", {}), e;
    } catch (e) {}
}(), baseSetToString = defineProperty ? function(e, t) {
    return defineProperty(e, "toString", {
        configurable: !0,
        enumerable: !1,
        value: constant(t),
        writable: !0
    });
} : identity, setToString = shortOut(baseSetToString);

function arrayEach(e, t) {
    for (var n = -1, i = null == e ? 0 : e.length; ++n < i && !1 !== t(e[n], n, e); ) {}
    return e;
}

function baseFindIndex(e, t, n, i) {
    for (var a = e.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; ) {
        if (t(e[o], o, e)) return o;
    }
    return -1;
}

function baseIsNaN(e) {
    return e != e;
}

function strictIndexOf(e, t, n) {
    for (var i = n - 1, a = e.length; ++i < a; ) {
        if (e[i] === t) return i;
    }
    return -1;
}

function baseIndexOf(e, t, n) {
    return t == t ? strictIndexOf(e, t, n) : baseFindIndex(e, baseIsNaN, n);
}

function arrayIncludes(e, t) {
    return !!(null == e ? 0 : e.length) && baseIndexOf(e, t, 0) > -1;
}

var MAX_SAFE_INTEGER$1 = 9007199254740991, reIsUint = /^(?:0|[1-9]\d*)$/;

function isIndex(e, t) {
    var n = _typeof2(e);
    return !!(t = null == t ? MAX_SAFE_INTEGER$1 : t) && ("number" == n || "symbol" != n && reIsUint.test(e)) && e > -1 && e % 1 == 0 && e < t;
}

function baseAssignValue(e, t, n) {
    "__proto__" == t && defineProperty ? defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n;
}

function eq(e, t) {
    return e === t || e != e && t != t;
}

var objectProto$b = Object.prototype, hasOwnProperty$a = objectProto$b.hasOwnProperty;

function assignValue(e, t, n) {
    var i = e[t];
    hasOwnProperty$a.call(e, t) && eq(i, n) && (void 0 !== n || t in e) || baseAssignValue(e, t, n);
}

function copyObject(e, t, n, i) {
    var a = !n;
    n || (n = {});
    for (var o = -1, s = t.length; ++o < s; ) {
        var r = t[o], l = i ? i(n[r], e[r], r, n, e) : void 0;
        void 0 === l && (l = e[r]), a ? baseAssignValue(n, r, l) : assignValue(n, r, l);
    }
    return n;
}

var nativeMax = Math.max;

function overRest(e, t, n) {
    return t = nativeMax(void 0 === t ? e.length - 1 : t, 0), function() {
        for (var i = arguments, a = -1, o = nativeMax(i.length - t, 0), s = Array(o); ++a < o; ) {
            s[a] = i[t + a];
        }
        a = -1;
        for (var r = Array(t + 1); ++a < t; ) {
            r[a] = i[a];
        }
        return r[t] = n(s), apply(e, this, r);
    };
}

function baseRest(e, t) {
    return setToString(overRest(e, t, identity), e + "");
}

var MAX_SAFE_INTEGER = 9007199254740991;

function isLength(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER;
}

function isArrayLike(e) {
    return null != e && isLength(e.length) && !isFunction(e);
}

var objectProto$a = Object.prototype;

function isPrototype(e) {
    var t = e && e.constructor;
    return e === ("function" == typeof t && t.prototype || objectProto$a);
}

function baseTimes(e, t) {
    for (var n = -1, i = Array(e); ++n < e; ) {
        i[n] = t(n);
    }
    return i;
}

var argsTag$3 = "[object Arguments]";

function baseIsArguments(e) {
    return isObjectLike(e) && baseGetTag(e) == argsTag$3;
}

var objectProto$9 = Object.prototype, hasOwnProperty$9 = objectProto$9.hasOwnProperty, propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable, isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(e) {
    return isObjectLike(e) && hasOwnProperty$9.call(e, "callee") && !propertyIsEnumerable$1.call(e, "callee");
};

function stubFalse() {
    return !1;
}

var freeExports$2 = "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && exports && !exports.nodeType && exports, freeModule$2 = freeExports$2 && "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) && module && !module.nodeType && module, moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2, Buffer$1 = moduleExports$2 ? root.Buffer : void 0, nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0, isBuffer = nativeIsBuffer || stubFalse, argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]", arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]", typedArrayTags = {};

function baseIsTypedArray(e) {
    return isObjectLike(e) && isLength(e.length) && !!typedArrayTags[baseGetTag(e)];
}

function baseUnary(e) {
    return function(t) {
        return e(t);
    };
}

typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = !0, 
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = !1;

var freeExports$1 = "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && exports && !exports.nodeType && exports, freeModule$1 = freeExports$1 && "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) && module && !module.nodeType && module, moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1, freeProcess = moduleExports$1 && freeGlobal.process, nodeUtil = function() {
    try {
        var e = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
        return e || freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}(), nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray, isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray, objectProto$8 = Object.prototype, hasOwnProperty$8 = objectProto$8.hasOwnProperty;

function arrayLikeKeys(e, t) {
    var n = isArray(e), i = !n && isArguments(e), a = !n && !i && isBuffer(e), o = !n && !i && !a && isTypedArray(e), s = n || i || a || o, r = s ? baseTimes(e.length, String) : [], l = r.length;
    for (var d in e) {
        !t && !hasOwnProperty$8.call(e, d) || s && ("length" == d || a && ("offset" == d || "parent" == d) || o && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || isIndex(d, l)) || r.push(d);
    }
    return r;
}

function overArg(e, t) {
    return function(n) {
        return e(t(n));
    };
}

var nativeKeys = overArg(Object.keys, Object), objectProto$7 = Object.prototype, hasOwnProperty$7 = objectProto$7.hasOwnProperty;

function baseKeys(e) {
    if (!isPrototype(e)) return nativeKeys(e);
    var t = [];
    for (var n in Object(e)) {
        hasOwnProperty$7.call(e, n) && "constructor" != n && t.push(n);
    }
    return t;
}

function keys(e) {
    return isArrayLike(e) ? arrayLikeKeys(e) : baseKeys(e);
}

function nativeKeysIn(e) {
    var t = [];
    if (null != e) for (var n in Object(e)) {
        t.push(n);
    }
    return t;
}

var objectProto$6 = Object.prototype, hasOwnProperty$6 = objectProto$6.hasOwnProperty;

function baseKeysIn(e) {
    if (!isObject(e)) return nativeKeysIn(e);
    var t = isPrototype(e), n = [];
    for (var i in e) {
        ("constructor" != i || !t && hasOwnProperty$6.call(e, i)) && n.push(i);
    }
    return n;
}

function keysIn(e) {
    return isArrayLike(e) ? arrayLikeKeys(e, !0) : baseKeysIn(e);
}

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;

function isKey(e, t) {
    if (isArray(e)) return !1;
    var n = _typeof2(e);
    return !("number" != n && "symbol" != n && "boolean" != n && null != e && !isSymbol(e)) || reIsPlainProp.test(e) || !reIsDeepProp.test(e) || null != t && e in Object(t);
}

var nativeCreate = getNative(Object, "create");

function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {}, this.size = 0;
}

function hashDelete(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
}

var HASH_UNDEFINED$2 = "__lodash_hash_undefined__", objectProto$5 = Object.prototype, hasOwnProperty$5 = objectProto$5.hasOwnProperty;

function hashGet(e) {
    var t = this.__data__;
    if (nativeCreate) {
        var n = t[e];
        return n === HASH_UNDEFINED$2 ? void 0 : n;
    }
    return hasOwnProperty$5.call(t, e) ? t[e] : void 0;
}

var objectProto$4 = Object.prototype, hasOwnProperty$4 = objectProto$4.hasOwnProperty;

function hashHas(e) {
    var t = this.__data__;
    return nativeCreate ? void 0 !== t[e] : hasOwnProperty$4.call(t, e);
}

var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";

function hashSet(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = nativeCreate && void 0 === t ? HASH_UNDEFINED$1 : t, 
    this;
}

function Hash(e) {
    var t = -1, n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var i = e[t];
        this.set(i[0], i[1]);
    }
}

function listCacheClear() {
    this.__data__ = [], this.size = 0;
}

function assocIndexOf(e, t) {
    for (var n = e.length; n--; ) {
        if (eq(e[n][0], t)) return n;
    }
    return -1;
}

Hash.prototype.clear = hashClear, Hash.prototype.delete = hashDelete, Hash.prototype.get = hashGet, 
Hash.prototype.has = hashHas, Hash.prototype.set = hashSet;

var arrayProto = Array.prototype, splice = arrayProto.splice;

function listCacheDelete(e) {
    var t = this.__data__, n = assocIndexOf(t, e);
    return !(n < 0) && (n == t.length - 1 ? t.pop() : splice.call(t, n, 1), --this.size, 
    !0);
}

function listCacheGet(e) {
    var t = this.__data__, n = assocIndexOf(t, e);
    return n < 0 ? void 0 : t[n][1];
}

function listCacheHas(e) {
    return assocIndexOf(this.__data__, e) > -1;
}

function listCacheSet(e, t) {
    var n = this.__data__, i = assocIndexOf(n, e);
    return i < 0 ? (++this.size, n.push([ e, t ])) : n[i][1] = t, this;
}

function ListCache(e) {
    var t = -1, n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var i = e[t];
        this.set(i[0], i[1]);
    }
}

ListCache.prototype.clear = listCacheClear, ListCache.prototype.delete = listCacheDelete, 
ListCache.prototype.get = listCacheGet, ListCache.prototype.has = listCacheHas, 
ListCache.prototype.set = listCacheSet;

var Map = getNative(root, "Map");

function mapCacheClear() {
    this.size = 0, this.__data__ = {
        hash: new Hash(),
        map: new (Map || ListCache)(),
        string: new Hash()
    };
}

function isKeyable(e) {
    var t = _typeof2(e);
    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
}

function getMapData(e, t) {
    var n = e.__data__;
    return isKeyable(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
}

function mapCacheDelete(e) {
    var t = getMapData(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
}

function mapCacheGet(e) {
    return getMapData(this, e).get(e);
}

function mapCacheHas(e) {
    return getMapData(this, e).has(e);
}

function mapCacheSet(e, t) {
    var n = getMapData(this, e), i = n.size;
    return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}

function MapCache(e) {
    var t = -1, n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var i = e[t];
        this.set(i[0], i[1]);
    }
}

MapCache.prototype.clear = mapCacheClear, MapCache.prototype.delete = mapCacheDelete, 
MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet;

var FUNC_ERROR_TEXT = "Expected a function";

function memoize(e, t) {
    if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(FUNC_ERROR_TEXT);
    var n = function n() {
        var i = arguments, a = t ? t.apply(this, i) : i[0], o = n.cache;
        if (o.has(a)) return o.get(a);
        var s = e.apply(this, i);
        return n.cache = o.set(a, s) || o, s;
    };
    return n.cache = new (memoize.Cache || MapCache)(), n;
}

memoize.Cache = MapCache;

var MAX_MEMOIZE_SIZE = 500;

function memoizeCapped(e) {
    var t = memoize(e, function(e) {
        return n.size === MAX_MEMOIZE_SIZE && n.clear(), e;
    }), n = t.cache;
    return t;
}

var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reEscapeChar = /\\(\\)?/g, stringToPath = memoizeCapped(function(e) {
    var t = [];
    return 46 === e.charCodeAt(0) && t.push(""), e.replace(rePropName, function(e, n, i, a) {
        t.push(i ? a.replace(reEscapeChar, "$1") : n || e);
    }), t;
});

function toString$1(e) {
    return null == e ? "" : baseToString(e);
}

function castPath(e, t) {
    return isArray(e) ? e : isKey(e, t) ? [ e ] : stringToPath(toString$1(e));
}

var INFINITY$1 = 1 / 0;

function toKey(e) {
    if ("string" == typeof e || isSymbol(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -INFINITY$1 ? "-0" : t;
}

function baseGet(e, t) {
    for (var n = 0, i = (t = castPath(t, e)).length; null != e && n < i; ) {
        e = e[toKey(t[n++])];
    }
    return n && n == i ? e : void 0;
}

function get(e, t, n) {
    var i = null == e ? void 0 : baseGet(e, t);
    return void 0 === i ? n : i;
}

function arrayPush(e, t) {
    for (var n = -1, i = t.length, a = e.length; ++n < i; ) {
        e[a + n] = t[n];
    }
    return e;
}

var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : void 0;

function isFlattenable(e) {
    return isArray(e) || isArguments(e) || !!(spreadableSymbol && e && e[spreadableSymbol]);
}

function baseFlatten(e, t, n, i, a) {
    var o = -1, s = e.length;
    for (n || (n = isFlattenable), a || (a = []); ++o < s; ) {
        var r = e[o];
        t > 0 && n(r) ? t > 1 ? baseFlatten(r, t - 1, n, i, a) : arrayPush(a, r) : i || (a[a.length] = r);
    }
    return a;
}

var getPrototype = overArg(Object.getPrototypeOf, Object);

function stackClear() {
    this.__data__ = new ListCache(), this.size = 0;
}

function stackDelete(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
}

function stackGet(e) {
    return this.__data__.get(e);
}

function stackHas(e) {
    return this.__data__.has(e);
}

var LARGE_ARRAY_SIZE$2 = 200;

function stackSet(e, t) {
    var n = this.__data__;
    if (n instanceof ListCache) {
        var i = n.__data__;
        if (!Map || i.length < LARGE_ARRAY_SIZE$2 - 1) return i.push([ e, t ]), this.size = ++n.size, 
        this;
        n = this.__data__ = new MapCache(i);
    }
    return n.set(e, t), this.size = n.size, this;
}

function Stack(e) {
    var t = this.__data__ = new ListCache(e);
    this.size = t.size;
}

function baseAssign(e, t) {
    return e && copyObject(t, keys(t), e);
}

function baseAssignIn(e, t) {
    return e && copyObject(t, keysIn(t), e);
}

Stack.prototype.clear = stackClear, Stack.prototype.delete = stackDelete, Stack.prototype.get = stackGet, 
Stack.prototype.has = stackHas, Stack.prototype.set = stackSet;

var freeExports = "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && exports && !exports.nodeType && exports, freeModule = freeExports && "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) && module && !module.nodeType && module, moduleExports = freeModule && freeModule.exports === freeExports, Buffer = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;

function cloneBuffer(e, t) {
    if (t) return e.slice();
    var n = e.length, i = allocUnsafe ? allocUnsafe(n) : new e.constructor(n);
    return e.copy(i), i;
}

function arrayFilter(e, t) {
    for (var n = -1, i = null == e ? 0 : e.length, a = 0, o = []; ++n < i; ) {
        var s = e[n];
        t(s, n, e) && (o[a++] = s);
    }
    return o;
}

function stubArray() {
    return [];
}

var objectProto$3 = Object.prototype, propertyIsEnumerable = objectProto$3.propertyIsEnumerable, nativeGetSymbols$1 = Object.getOwnPropertySymbols, getSymbols = nativeGetSymbols$1 ? function(e) {
    return null == e ? [] : (e = Object(e), arrayFilter(nativeGetSymbols$1(e), function(t) {
        return propertyIsEnumerable.call(e, t);
    }));
} : stubArray;

function copySymbols(e, t) {
    return copyObject(e, getSymbols(e), t);
}

var nativeGetSymbols = Object.getOwnPropertySymbols, getSymbolsIn = nativeGetSymbols ? function(e) {
    for (var t = []; e; ) {
        arrayPush(t, getSymbols(e)), e = getPrototype(e);
    }
    return t;
} : stubArray;

function copySymbolsIn(e, t) {
    return copyObject(e, getSymbolsIn(e), t);
}

function baseGetAllKeys(e, t, n) {
    var i = t(e);
    return isArray(e) ? i : arrayPush(i, n(e));
}

function getAllKeys(e) {
    return baseGetAllKeys(e, keys, getSymbols);
}

function getAllKeysIn(e) {
    return baseGetAllKeys(e, keysIn, getSymbolsIn);
}

var DataView = getNative(root, "DataView"), Promise$1 = getNative(root, "Promise"), Set = getNative(root, "Set"), mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]", dataViewTag$3 = "[object DataView]", dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap), getTag = baseGetTag;

(DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$3 || Map && getTag(new Map()) != mapTag$4 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set && getTag(new Set()) != setTag$4 || WeakMap && getTag(new WeakMap()) != weakMapTag$1) && (getTag = function getTag(e) {
    var t = baseGetTag(e), n = t == objectTag$2 ? e.constructor : void 0, i = n ? toSource(n) : "";
    if (i) switch (i) {
      case dataViewCtorString:
        return dataViewTag$3;

      case mapCtorString:
        return mapTag$4;

      case promiseCtorString:
        return promiseTag;

      case setCtorString:
        return setTag$4;

      case weakMapCtorString:
        return weakMapTag$1;
    }
    return t;
});

var getTag$1 = getTag, objectProto$2 = Object.prototype, hasOwnProperty$3 = objectProto$2.hasOwnProperty;

function initCloneArray(e) {
    var t = e.length, n = new e.constructor(t);
    return t && "string" == typeof e[0] && hasOwnProperty$3.call(e, "index") && (n.index = e.index, 
    n.input = e.input), n;
}

var Uint8Array$1 = root.Uint8Array;

function cloneArrayBuffer(e) {
    var t = new e.constructor(e.byteLength);
    return new Uint8Array$1(t).set(new Uint8Array$1(e)), t;
}

function cloneDataView(e, t) {
    var n = t ? cloneArrayBuffer(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
}

var reFlags = /\w*$/;

function cloneRegExp(e) {
    var t = new e.constructor(e.source, reFlags.exec(e));
    return t.lastIndex = e.lastIndex, t;
}

var symbolProto$1 = _Symbol ? _Symbol.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;

function cloneSymbol(e) {
    return symbolValueOf$1 ? Object(symbolValueOf$1.call(e)) : {};
}

function cloneTypedArray(e, t) {
    var n = t ? cloneArrayBuffer(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
}

var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]", arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";

function initCloneByTag(e, t, n) {
    var i = e.constructor;
    switch (t) {
      case arrayBufferTag$2:
        return cloneArrayBuffer(e);

      case boolTag$2:
      case dateTag$2:
        return new i(+e);

      case dataViewTag$2:
        return cloneDataView(e, n);

      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return cloneTypedArray(e, n);

      case mapTag$3:
        return new i();

      case numberTag$2:
      case stringTag$2:
        return new i(e);

      case regexpTag$2:
        return cloneRegExp(e);

      case setTag$3:
        return new i();

      case symbolTag$2:
        return cloneSymbol(e);
    }
}

function initCloneObject(e) {
    return "function" != typeof e.constructor || isPrototype(e) ? {} : baseCreate(getPrototype(e));
}

var mapTag$2 = "[object Map]";

function baseIsMap(e) {
    return isObjectLike(e) && getTag$1(e) == mapTag$2;
}

var nodeIsMap = nodeUtil && nodeUtil.isMap, isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap, setTag$2 = "[object Set]";

function baseIsSet(e) {
    return isObjectLike(e) && getTag$1(e) == setTag$2;
}

var nodeIsSet = nodeUtil && nodeUtil.isSet, isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet, CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4, argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]", arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", cloneableTags = {};

function baseClone(e, t, n, i, a, o) {
    var s, r = t & CLONE_DEEP_FLAG$1, l = t & CLONE_FLAT_FLAG, d = t & CLONE_SYMBOLS_FLAG$1;
    if (n && (s = a ? n(e, i, a, o) : n(e)), void 0 !== s) return s;
    if (!isObject(e)) return e;
    var h = isArray(e);
    if (h) {
        if (s = initCloneArray(e), !r) return copyArray(e, s);
    } else {
        var c = getTag$1(e), u = c == funcTag || c == genTag;
        if (isBuffer(e)) return cloneBuffer(e, r);
        if (c == objectTag$1 || c == argsTag$1 || u && !a) {
            if (s = l || u ? {} : initCloneObject(e), !r) return l ? copySymbolsIn(e, baseAssignIn(s, e)) : copySymbols(e, baseAssign(s, e));
        } else {
            if (!cloneableTags[c]) return a ? e : {};
            s = initCloneByTag(e, c, r);
        }
    }
    o || (o = new Stack());
    var p = o.get(e);
    if (p) return p;
    o.set(e, s), isSet(e) ? e.forEach(function(i) {
        s.add(baseClone(i, t, n, i, e, o));
    }) : isMap(e) && e.forEach(function(i, a) {
        s.set(a, baseClone(i, t, n, a, e, o));
    });
    var _ = h ? void 0 : (d ? l ? getAllKeysIn : getAllKeys : l ? keysIn : keys)(e);
    return arrayEach(_ || e, function(i, a) {
        _ && (i = e[a = i]), assignValue(s, a, baseClone(i, t, n, a, e, o));
    }), s;
}

cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = !0, 
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = !1;

var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;

function cloneDeep(e) {
    return baseClone(e, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

var HASH_UNDEFINED = "__lodash_hash_undefined__";

function setCacheAdd(e) {
    return this.__data__.set(e, HASH_UNDEFINED), this;
}

function setCacheHas(e) {
    return this.__data__.has(e);
}

function SetCache(e) {
    var t = -1, n = null == e ? 0 : e.length;
    for (this.__data__ = new MapCache(); ++t < n; ) {
        this.add(e[t]);
    }
}

function arraySome(e, t) {
    for (var n = -1, i = null == e ? 0 : e.length; ++n < i; ) {
        if (t(e[n], n, e)) return !0;
    }
    return !1;
}

function cacheHas(e, t) {
    return e.has(t);
}

SetCache.prototype.add = SetCache.prototype.push = setCacheAdd, SetCache.prototype.has = setCacheHas;

var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;

function equalArrays(e, t, n, i, a, o) {
    var s = n & COMPARE_PARTIAL_FLAG$5, r = e.length, l = t.length;
    if (r != l && !(s && l > r)) return !1;
    var d = o.get(e), h = o.get(t);
    if (d && h) return d == t && h == e;
    var c = -1, u = !0, p = n & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
    for (o.set(e, t), o.set(t, e); ++c < r; ) {
        var _ = e[c], g = t[c];
        if (i) var f = s ? i(g, _, c, t, e, o) : i(_, g, c, e, t, o);
        if (void 0 !== f) {
            if (f) continue;
            u = !1;
            break;
        }
        if (p) {
            if (!arraySome(t, function(e, t) {
                if (!cacheHas(p, t) && (_ === e || a(_, e, n, i, o))) return p.push(t);
            })) {
                u = !1;
                break;
            }
        } else if (_ !== g && !a(_, g, n, i, o)) {
            u = !1;
            break;
        }
    }
    return o.delete(e), o.delete(t), u;
}

function mapToArray(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(e, i) {
        n[++t] = [ i, e ];
    }), n;
}

function setToArray(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(e) {
        n[++t] = e;
    }), n;
}

var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2, boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", symbolProto = _Symbol ? _Symbol.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;

function equalByTag(e, t, n, i, a, o, s) {
    switch (n) {
      case dataViewTag:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
        e = e.buffer, t = t.buffer;

      case arrayBufferTag:
        return !(e.byteLength != t.byteLength || !o(new Uint8Array$1(e), new Uint8Array$1(t)));

      case boolTag:
      case dateTag:
      case numberTag:
        return eq(+e, +t);

      case errorTag:
        return e.name == t.name && e.message == t.message;

      case regexpTag:
      case stringTag:
        return e == t + "";

      case mapTag:
        var r = mapToArray;

      case setTag:
        var l = i & COMPARE_PARTIAL_FLAG$4;
        if (r || (r = setToArray), e.size != t.size && !l) return !1;
        var d = s.get(e);
        if (d) return d == t;
        i |= COMPARE_UNORDERED_FLAG$2, s.set(e, t);
        var h = equalArrays(r(e), r(t), i, a, o, s);
        return s.delete(e), h;

      case symbolTag:
        if (symbolValueOf) return symbolValueOf.call(e) == symbolValueOf.call(t);
    }
    return !1;
}

var COMPARE_PARTIAL_FLAG$3 = 1, objectProto$1 = Object.prototype, hasOwnProperty$2 = objectProto$1.hasOwnProperty;

function equalObjects(e, t, n, i, a, o) {
    var s = n & COMPARE_PARTIAL_FLAG$3, r = getAllKeys(e), l = r.length;
    if (l != getAllKeys(t).length && !s) return !1;
    for (var d = l; d--; ) {
        var h = r[d];
        if (!(s ? h in t : hasOwnProperty$2.call(t, h))) return !1;
    }
    var c = o.get(e), u = o.get(t);
    if (c && u) return c == t && u == e;
    var p = !0;
    o.set(e, t), o.set(t, e);
    for (var _ = s; ++d < l; ) {
        var g = e[h = r[d]], f = t[h];
        if (i) var m = s ? i(f, g, h, t, e, o) : i(g, f, h, e, t, o);
        if (!(void 0 === m ? g === f || a(g, f, n, i, o) : m)) {
            p = !1;
            break;
        }
        _ || (_ = "constructor" == h);
    }
    if (p && !_) {
        var A = e.constructor, v = t.constructor;
        A != v && "constructor" in e && "constructor" in t && !("function" == typeof A && A instanceof A && "function" == typeof v && v instanceof v) && (p = !1);
    }
    return o.delete(e), o.delete(t), p;
}

var COMPARE_PARTIAL_FLAG$2 = 1, argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]", objectProto = Object.prototype, hasOwnProperty$1 = objectProto.hasOwnProperty;

function baseIsEqualDeep(e, t, n, i, a, o) {
    var s = isArray(e), r = isArray(t), l = s ? arrayTag : getTag$1(e), d = r ? arrayTag : getTag$1(t), h = (l = l == argsTag ? objectTag : l) == objectTag, c = (d = d == argsTag ? objectTag : d) == objectTag, u = l == d;
    if (u && isBuffer(e)) {
        if (!isBuffer(t)) return !1;
        s = !0, h = !1;
    }
    if (u && !h) return o || (o = new Stack()), s || isTypedArray(e) ? equalArrays(e, t, n, i, a, o) : equalByTag(e, t, l, n, i, a, o);
    if (!(n & COMPARE_PARTIAL_FLAG$2)) {
        var p = h && hasOwnProperty$1.call(e, "__wrapped__"), _ = c && hasOwnProperty$1.call(t, "__wrapped__");
        if (p || _) {
            var g = p ? e.value() : e, f = _ ? t.value() : t;
            return o || (o = new Stack()), a(g, f, n, i, o);
        }
    }
    return !!u && (o || (o = new Stack()), equalObjects(e, t, n, i, a, o));
}

function baseIsEqual(e, t, n, i, a) {
    return e === t || (null == e || null == t || !isObjectLike(e) && !isObjectLike(t) ? e != e && t != t : baseIsEqualDeep(e, t, n, i, baseIsEqual, a));
}

var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;

function baseIsMatch(e, t, n, i) {
    var a = n.length, o = a, s = !i;
    if (null == e) return !o;
    for (e = Object(e); a--; ) {
        var r = n[a];
        if (s && r[2] ? r[1] !== e[r[0]] : !(r[0] in e)) return !1;
    }
    for (;++a < o; ) {
        var l = (r = n[a])[0], d = e[l], h = r[1];
        if (s && r[2]) {
            if (void 0 === d && !(l in e)) return !1;
        } else {
            var c = new Stack();
            if (i) var u = i(d, h, l, e, t, c);
            if (!(void 0 === u ? baseIsEqual(h, d, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, i, c) : u)) return !1;
        }
    }
    return !0;
}

function isStrictComparable(e) {
    return e == e && !isObject(e);
}

function getMatchData(e) {
    for (var t = keys(e), n = t.length; n--; ) {
        var i = t[n], a = e[i];
        t[n] = [ i, a, isStrictComparable(a) ];
    }
    return t;
}

function matchesStrictComparable(e, t) {
    return function(n) {
        return null != n && n[e] === t && (void 0 !== t || e in Object(n));
    };
}

function baseMatches(e) {
    var t = getMatchData(e);
    return 1 == t.length && t[0][2] ? matchesStrictComparable(t[0][0], t[0][1]) : function(n) {
        return n === e || baseIsMatch(n, e, t);
    };
}

function baseHasIn(e, t) {
    return null != e && t in Object(e);
}

function hasPath(e, t, n) {
    for (var i = -1, a = (t = castPath(t, e)).length, o = !1; ++i < a; ) {
        var s = toKey(t[i]);
        if (!(o = null != e && n(e, s))) break;
        e = e[s];
    }
    return o || ++i != a ? o : !!(a = null == e ? 0 : e.length) && isLength(a) && isIndex(s, a) && (isArray(e) || isArguments(e));
}

function hasIn(e, t) {
    return null != e && hasPath(e, t, baseHasIn);
}

var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;

function baseMatchesProperty(e, t) {
    return isKey(e) && isStrictComparable(t) ? matchesStrictComparable(toKey(e), t) : function(n) {
        var i = get(n, e);
        return void 0 === i && i === t ? hasIn(n, e) : baseIsEqual(t, i, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
}

function baseProperty(e) {
    return function(t) {
        return null == t ? void 0 : t[e];
    };
}

function basePropertyDeep(e) {
    return function(t) {
        return baseGet(t, e);
    };
}

function property(e) {
    return isKey(e) ? baseProperty(toKey(e)) : basePropertyDeep(e);
}

function baseIteratee(e) {
    return "function" == typeof e ? e : null == e ? identity : "object" == _typeof2(e) ? isArray(e) ? baseMatchesProperty(e[0], e[1]) : baseMatches(e) : property(e);
}

function isArrayLikeObject(e) {
    return isObjectLike(e) && isArrayLike(e);
}

function arrayIncludesWith(e, t, n) {
    for (var i = -1, a = null == e ? 0 : e.length; ++i < a; ) {
        if (n(t, e[i])) return !0;
    }
    return !1;
}

var LARGE_ARRAY_SIZE$1 = 200;

function baseDifference(e, t, n, i) {
    var a = -1, o = arrayIncludes, s = !0, r = e.length, l = [], d = t.length;
    if (!r) return l;
    n && (t = arrayMap(t, baseUnary(n))), i ? (o = arrayIncludesWith, s = !1) : t.length >= LARGE_ARRAY_SIZE$1 && (o = cacheHas, 
    s = !1, t = new SetCache(t));
    e: for (;++a < r; ) {
        var h = e[a], c = null == n ? h : n(h);
        if (h = i || 0 !== h ? h : 0, s && c == c) {
            for (var u = d; u--; ) {
                if (t[u] === c) continue e;
            }
            l.push(h);
        } else o(t, c, i) || l.push(h);
    }
    return l;
}

function last(e) {
    var t = null == e ? 0 : e.length;
    return t ? e[t - 1] : void 0;
}

var INFINITY = 1 / 0, createSet = Set && 1 / setToArray(new Set([ , -0 ]))[1] == INFINITY ? function(e) {
    return new Set(e);
} : noop, LARGE_ARRAY_SIZE = 200;

function baseUniq(e, t, n) {
    var i = -1, a = arrayIncludes, o = e.length, s = !0, r = [], l = r;
    if (n) s = !1, a = arrayIncludesWith; else if (o >= LARGE_ARRAY_SIZE) {
        var d = t ? null : createSet(e);
        if (d) return setToArray(d);
        s = !1, a = cacheHas, l = new SetCache();
    } else l = t ? [] : r;
    e: for (;++i < o; ) {
        var h = e[i], c = t ? t(h) : h;
        if (h = n || 0 !== h ? h : 0, s && c == c) {
            for (var u = l.length; u--; ) {
                if (l[u] === c) continue e;
            }
            t && l.push(c), r.push(h);
        } else a(l, c, n) || (l !== r && l.push(c), r.push(h));
    }
    return r;
}

function uniq(e) {
    return e && e.length ? baseUniq(e) : [];
}

function baseXor(e, t, n) {
    var i = e.length;
    if (i < 2) return i ? baseUniq(e[0]) : [];
    for (var a = -1, o = Array(i); ++a < i; ) {
        for (var s = e[a], r = -1; ++r < i; ) {
            r != a && (o[a] = baseDifference(o[a] || s, e[r], t, n));
        }
    }
    return baseUniq(baseFlatten(o, 1), t, n);
}

var xorBy = baseRest(function(e) {
    var t = last(e);
    return isArrayLikeObject(t) && (t = void 0), baseXor(arrayFilter(e, isArrayLikeObject), baseIteratee(t));
});

var C_TAG_OF_NEW = "New", C_TAG_OF_HOT = "Hot", C_SK_FORMAT_OF_NAVAGATED_APPIDS = "navagated_appids_of_player_{0}";

var _loadNavigatedAppIds = function _loadNavigatedAppIds() {
    var e = PlatHelper.getStorage(C_SK_FORMAT_OF_NAVAGATED_APPIDS.format(HLSDKLocalData._openID));
    if (e && "" !== e) {
        var t = JSON.parse(e);
        if (void 0 !== t.ids && ServerInfo.getCurServerDayOfYear() === t.saveDay && void 0 !== t.ids) return t.ids;
    }
    return [];
}, _saveNavigatedAppIds = function _saveNavigatedAppIds(e) {
    if (Array.isArray(e) && e.length > 0) {
        var t = {
            ids: e,
            saveDay: ServerInfo.getCurServerDayOfYear()
        };
        PlatHelper.setStorage(C_SK_FORMAT_OF_NAVAGATED_APPIDS.format(HLSDKLocalData._openID), JSON.stringify(t));
    }
};

var AdvLoadMgr = /* */ function(_Laya$Script3) {
    _inherits2(AdvLoadMgr, _Laya$Script3);
    var _super29 = _createSuper2(AdvLoadMgr);
    function AdvLoadMgr() {
        var _this80;
        _classCallCheck2(this, AdvLoadMgr);
        _this80 = _super29.call(this), _this80.advType = "btn", _this80.newTagPath = "hlsdk/res/ad/new_tag.png", 
        _this80.hotTagPath = "hlsdk/res/ad/hot_tag.png", _this80.sweepEffectPath = "hlsdk/res/ad/sweep_effect.png", 
        _this80.needMask = !1, _this80.nameCfg = "", _this80.framePath = "", _this80.framePathCount = 1, 
        _this80.isHorizontal = !1, _this80.maxOnShowCells = 0, _this80.cellWidth = 0, _this80.cellHeight = 0, 
        _this80.imgWidth = 0, _this80.imgHeight = 0, _this80.isTween = !1, _this80.tweenSpeed = 1e3, 
        _this80.autoExtend = !1, _this80.advCount = 0, _this80.isCanDynamicChange = !0, 
        _this80.delayToLoad = 0, _this80.advKey = "", _this80.nameNeedPos = !1, _this80.namePos = "0|0|0", 
        _this80.iconNeedPos = !1, _this80.iconPos = "0|0", _this80._advList = null, _this80._advBtns = [], 
        _this80._originalAdvInfos = null, _this80._advInfos = null, _this80._onShowAdvImgs = [], 
        _this80._getAdvInfosCb = null, _this80._getAdvInfosFunc = null, _this80._advPath = "";
        return _this80;
    }
    _createClass2(AdvLoadMgr, [ {
        key: "setAdvPath",
        value: function setAdvPath(e) {
            this._advPath = e;
        }
    }, {
        key: "registerGetAdvInfosFunc",
        value: function registerGetAdvInfosFunc(e) {
            checkFunc(e) && (this._getAdvInfosFunc = e);
        }
    }, {
        key: "onAwake",
        value: function onAwake() {
            "list" === this.advType && this._initUI();
        }
    }, {
        key: "onEnable",
        value: function onEnable() {
            "btn" === this.advType && this._initUI(), Scheduler.schedule("Delay_To_Load_Ad_" + this.advKey, function() {
                console.log("start load ad, tag:", this.advKey);
                var e = function(e) {
                    if (e && (this._originalAdvInfos = e, this._refreshAdv(), this.isTween && this._advList && this._advList.length > 0 && Scheduler.schedule("Auto_Start_Tween_Show_Of_Ad_" + this.advKey, function() {
                        this._autoTweenList();
                    }.bind(this), !1, 500, 1), this._getAdvInfosCb)) {
                        var _e61 = this._getAdvInfosCb;
                        this._getAdvInfosCb = null, _e61(this._advInfos);
                    }
                }.bind(this);
                if (this._getAdvInfosFunc) e(this._getAdvInfosFunc()); else {
                    var t = "ee2a98b3ba79d62950534db9641ee913";
                    HttpsHelper.getJson("https://image.game.hnquyou.com/upload/opId10.txt", null, null, function(n, i) {
                        n && i && i.ret && i[t] && e(i[t]);
                    });
                }
            }.bind(this), !1, 20 + this.delayToLoad, 0);
        }
    }, {
        key: "_initUI",
        value: function _initUI() {
            var _this81 = this;
            if ("btn" === this.advType) {
                var _loop4 = function _loop4(e) {
                    var t = "adv_" + e.toString(), n = seekNodeByName(_this81.owner, t);
                    if (n) {
                        var _e62 = null, _t40 = seekNodeByName(n, "icon");
                        _e62 = _t40 ? {
                            width: _t40.width,
                            height: _t40.height
                        } : {
                            width: n.width,
                            height: n.height
                        };
                        var i = new ImageAnimation(_e62);
                        i && (i.onSizeChanged(function() {
                            i.destroyed || (i.pivotX = i.width / 2, i.pivotY = i.height / 2, i.x = _e62.width / 2, 
                            i.y = _e62.height / 2, i.scaleX = _e62.width / i.width, i.scaleY = _e62.height / i.height);
                        }), _t40 ? _t40.addChild(i) : n.addChild(i), n._advImg = i), _this81._addTagIntoBtn(n, C_TAG_OF_NEW), 
                        _this81._addTagIntoBtn(n, C_TAG_OF_HOT), _this81.needMask && Laya.loader.load(SubConfig.path + "hlsdk/res/ad/ad_mask.png", Laya.Handler.create(null, function() {
                            var e = new Laya.Image();
                            e.skin = SubConfig.path + "hlsdk/res/ad/ad_mask.png", e.sizeGrid = "30,30,30,30", 
                            e.width = n.width, e.height = n.height, n.mask = e;
                        })), n.offAll("click"), n.on("click", null, function() {
                            this.onAdvTouched(n);
                        }.bind(_this81)), n.registerAdvInfo = function(e) {
                            if (!n.destroyed && e) {
                                n._advInfo = e, n._advImg && n._advImg.setImageData(e.logo_url);
                                var _t41 = seekNodeByName(n, "name");
                                _t41 && (_t41.text = e.title), n["set" + C_TAG_OF_NEW + "TagStatus"]("1" === e.flag_type), 
                                n["set" + C_TAG_OF_HOT + "TagStatus"]("2" === e.flag_type), this._setSweepEffectStatu(n, "1" === e.effect_type);
                            }
                        }.bind(_this81), n._advInfo = null, _this81._advBtns.push(n);
                    }
                };
                for (var e = 1; e <= this.advCount; e++) {
                    _loop4(e);
                }
            } else if ("list" === this.advType) {
                var _e63 = 0, t = Laya.stage.designWidth, n = Laya.stage.designHeight;
                this.autoExtend && (this.isHorizontal ? Laya.stage.width - t > 0 && (_e63 = Math.ceil((Laya.stage.width - t) / this.cellWidth)) : Laya.stage.height - n > 0 && (_e63 = Math.ceil((Laya.stage.height - n) / this.cellHeight)), 
                console.log("extendTimes: ", _e63));
                var i = seekNodeByName(this.owner, "list");
                if (i) {
                    this._advList = i, _e63 > 0 && (this.isHorizontal ? (this.maxOnShowCells += i.repeatY * _e63, 
                    this.advCount += i.repeatY * _e63, this.owner.width += Laya.stage.width - t, i.width += Laya.stage.width - t) : (this.maxOnShowCells += i.repeatX * _e63, 
                    this.advCount += i.repeatX * _e63, this.owner.height += Laya.stage.height - n, i.height += Laya.stage.height - n));
                    var a = i.addComponent(AdvList);
                    a.registerTouchCallback(function(e) {
                        _this81.isTween && (Scheduler.unschedule("Next_Tween_of_Ad_" + _this81.advKey), 
                        "up" === e ? i.scrollBar ? i.scrollBar.once(Laya.Event.END, null, function() {
                            Scheduler.schedule("Next_Tween_of_Ad_" + _this81.advKey, function() {
                                _this81._autoTweenList();
                            }, !1, 1e3, 1);
                        }) : Scheduler.schedule("Next_Tween_of_Ad_" + _this81.advKey, function() {
                            _this81._autoTweenList();
                        }, !1, 3e3, 1) : "click" === e && Scheduler.schedule("Next_Tween_of_Ad_" + _this81.advKey, function() {
                            _this81._autoTweenList();
                        }, !1, 2e3, 1));
                    }), a.registerSelectCallback(function(e, t) {
                        e && this._toMiniProgram(e, function(n) {
                            var i = this._getNextAdvInfo(e.adv_id);
                            null !== i && (this._removeOnShowAdvImg(e.logo_url), this._addOnShowAdvImg(i.logo_url), 
                            PlatHelper.getPlat() && PlatHelper.getPlat().h_ShowAdvs ? PlatHelper.getPlat().h_ShowAdvs(this._advPath, i) : h_ShowAdvs(this._advPath, i)), 
                            "function" == typeof t && t(i), n || Event.dispatchEvent(EventName.EN_CANCEL_NAVIGATION_FROM_AD, this.advKey);
                        }.bind(this));
                    }.bind(this));
                }
            }
        }
    }, {
        key: "_autoTweenList",
        value: function _autoTweenList() {
            var _this82 = this;
            if ("list" === this.advType && this.isTween && this._advList && this._advList.length > 0) {
                if (this._advList.destroyed) return;
                var e = this._advList.startIndex, t = this._getMaxScrollIndex(), n = t, i = n, a = 0;
                e < t ? (n = t, i = this.isHorizontal ? n + this._advList.repeatY : n + this._advList.repeatX) : (n = 0, 
                i = 0), a = this.isHorizontal ? this._getScrollDuration(Math.floor(e / this._advList.repeatY), Math.floor(n / this._advList.repeatY)) : this._getScrollDuration(Math.floor(e / this._advList.repeatX), Math.floor(n / this._advList.repeatX)), 
                this._advList.tweenTo(i, a), Scheduler.unschedule("Next_Tween_of_Ad_" + this.advKey), 
                Scheduler.schedule("Next_Tween_of_Ad_" + this.advKey, function() {
                    _this82._autoTweenList();
                }, !1, a + 2e3, 1);
            }
        }
    }, {
        key: "refreshAdv",
        value: function refreshAdv() {
            console.log("refresh adv: ", this.advKey), "list" === this.advType && (this._advList && this._advList.scrollTo(0), 
            this.isTween && this._advList && this._advList.length > 0 && Scheduler.schedule("Auto_Start_Tween_Show_Of_Ad_" + this.advKey, function() {
                this._autoTweenList();
            }.bind(this), !1, 500, 1)), this._refreshAdv();
        }
    }, {
        key: "hideAdv",
        value: function hideAdv() {
            console.log("hide adv: ", this.advKey), "list" === this.advType && this.isTween && (Scheduler.unschedule("Auto_Start_Tween_Show_Of_Ad_" + this.advKey), 
            Scheduler.unschedule("Check_Until_All_Advs_Exposed_" + this.advKey), Scheduler.unschedule("Next_Tween_of_Ad_" + this.advKey));
        }
    }, {
        key: "randomNavigate",
        value: function randomNavigate(e) {
            var _this83 = this;
            var t = function t() {
                console.warn("Auto Random Navigate...");
                var t = random(0, _this83._advInfos.length - 1), n = _this83._advInfos[t];
                _this83._toMiniProgram(n, function(t) {
                    "function" == typeof e && e(!0, t);
                });
            };
            this._advInfos ? t() : this.getAdvInfos(t);
        }
    }, {
        key: "navagate",
        value: function navagate(e, t) {
            this._toMiniProgram(e, function(e) {
                "function" == typeof t && t(e);
            });
        }
    }, {
        key: "getAdvInfos",
        value: function getAdvInfos(e) {
            "function" == typeof e && (this._advInfos ? e(this._advInfos) : this._getAdvInfosCb = e);
        }
    }, {
        key: "getAllExposedAdvInfos",
        value: function getAllExposedAdvInfos() {
            if ("list" === this.advType) {
                var e = this._advList.getComponent(AdvList);
                return e ? e.getAllExposedAdvInfos() : [];
            }
            return [];
        }
    }, {
        key: "_refreshAdv",
        value: function _refreshAdv() {
            var _this84 = this;
            if (this._originalAdvInfos && (this._onShowAdvImgs = [], this._advInfos = this._convertToLocalAdvInfos(this._originalAdvInfos), 
            Array.isArray(this._advInfos))) if ("btn" === this.advType) for (var e = 0; e < this._advInfos.length && !(e >= this.advCount); e++) {
                var t = this._advInfos[e], n = this._advBtns[e];
                this._addOnShowAdvImg(t.logo_url), n && n.registerAdvInfo && n.registerAdvInfo(t), 
                PlatHelper.getPlat() && PlatHelper.getPlat().h_ShowAdvs ? PlatHelper.getPlat().h_ShowAdvs(this._advPath, t) : h_ShowAdvs(this._advPath, t);
            } else if ("list" === this.advType) {
                var _e64 = this._advList.getComponent(AdvList);
                if (_e64) {
                    var _t42 = [];
                    for (var _e65 = 0; _e65 < this._advInfos.length && !(_e65 >= this.advCount); _e65++) {
                        this._addOnShowAdvImg(this._advInfos[_e65].logo_url), _t42.push(this._advInfos[_e65]);
                    }
                    if (_e64.setList(this.isHorizontal, {
                        width: this.cellWidth,
                        height: this.cellHeight
                    }, {
                        imgWidth: this.imgWidth,
                        imgHeight: this.imgHeight,
                        nameCfg: this.nameCfg,
                        needMask: this.needMask,
                        newTagPath: SubConfig.path + this.newTagPath,
                        hotTagPath: SubConfig.path + this.hotTagPath,
                        sweepEffectPath: SubConfig.path + this.sweepEffectPath,
                        framePath: this.framePath,
                        framePathCount: this.framePathCount,
                        nameNeedPos: this.nameNeedPos,
                        namePos: this.namePos,
                        iconNeedPos: this.iconNeedPos,
                        iconPos: this.iconPos
                    }, _t42), this.isTween) {
                        if (Scheduler.unschedule("Check_Until_All_Advs_Exposed_" + this.advKey), _t42.length > 0) {
                            var _n19 = [];
                            for (var _e66 = 0; _e66 < _t42.length; _e66++) {
                                _n19.push(!1);
                            }
                            var i = function i() {
                                if (!_e64.owner) return void Scheduler.unschedule("Check_Until_All_Advs_Exposed_" + _this84.advKey);
                                var i = _e64.getAllExposedAdvInfos();
                                if (i.length > 0) {
                                    var _e67 = [];
                                    for (var _t43 = 0; _t43 < i.length; _t43++) {
                                        var a = i[_t43];
                                        _n19[a.index - 1] || (_n19[a.index - 1] = !0, _e67.push(a.info));
                                    }
                                    if (_e67.length > 0) {
                                        PlatHelper.getPlat() && PlatHelper.getPlat().h_ShowAdvs ? PlatHelper.getPlat().h_ShowAdvs(_this84._advPath, _e67) : h_ShowAdvs(_this84._advPath, _e67);
                                        var _i6 = 0;
                                        _n19.forEach(function(e) {
                                            e && _i6++;
                                        }), _i6 === _t42.length && Scheduler.unschedule("Check_Until_All_Advs_Exposed_" + _this84.advKey);
                                    }
                                }
                            };
                            Scheduler.schedule("Check_Until_All_Advs_Exposed_" + this.advKey, function() {
                                i();
                            }, !1, 200), Scheduler.schedule("First_Check_Exposed_Advs_" + this.advKey, function() {
                                i();
                            }, !1, 10, 0);
                        }
                    } else PlatHelper.getPlat() && PlatHelper.getPlat().h_ShowAdvs ? PlatHelper.getPlat().h_ShowAdvs(this._advPath, _t42) : h_ShowAdvs(this._advPath, _t42);
                }
            }
        }
    }, {
        key: "onAdvTouched",
        value: function onAdvTouched(e) {
            if (AudioMgr.playSound(SoundName.SN_CLICK), e._advInfo) {
                var t = function(t) {
                    var n = this._getNextAdvInfo(e._advInfo.adv_id);
                    null !== n && (this._removeOnShowAdvImg(e._advInfo.logo_url), this._addOnShowAdvImg(n.logo_url), 
                    e.registerAdvInfo(n), PlatHelper.getPlat() && PlatHelper.getPlat().h_ShowAdvs ? PlatHelper.getPlat().h_ShowAdvs(this._advPath, n) : h_ShowAdvs(this._advPath, n)), 
                    t || Event.dispatchEvent(EventName.EN_CANCEL_NAVIGATION_FROM_AD, this.advKey);
                }.bind(this);
                this._toMiniProgram(e._advInfo, t);
            } else Event.dispatchEvent(EventName.EN_CANCEL_NAVIGATION_FROM_AD, this.advKey);
        }
    }, {
        key: "_toMiniProgram",
        value: function _toMiniProgram(e, t) {
            if (PlatHelper.getPlat()) {
                if (e) {
                    Reportor.report(ReportEventName.REN_NAVIGATION_TO_MINIPROGRAM);
                    var n = this._getWillNavagatedAdvInfo(e), i = {
                        adv_id: n.adv_id,
                        origin_path: n.logo_url.origin_path,
                        appId: n.appid,
                        pkgName: n.appid,
                        path: n.path
                    };
                    i.success = function() {
                        if (PlatHelper.isWXPlatform()) {
                            var _e68 = _loadNavigatedAppIds();
                            _e68.push(i.appId), _saveNavigatedAppIds(_e68);
                        }
                        Reportor.report(ReportEventName.REN_NAVIGATION_TO_MINIPROGRAM_SUCCESS), "function" == typeof t && t(!0);
                    }, i.fail = function(e) {
                        e && -1 !== e.errMsg.indexOf("fail cancel") ? Reportor.report(ReportEventName.REN_NAVIGATION_TO_MINIPROGRAM_CANCEL) : Reportor.report(ReportEventName.REN_NAVIGATION_TO_MINIPROGRAM_ERROR), 
                        "function" == typeof t && t(!1);
                    }, PlatHelper.isTTPlatform() ? PlatHelper.showMoreGamesModal() : PlatHelper.getPlat() && PlatHelper.getPlat().h_ToMinProgram && PlatHelper.getPlat().h_ToMinProgram(this._advPath, i);
                }
            } else "function" == typeof t && t(!1);
        }
    }, {
        key: "_getWillNavagatedAdvInfo",
        value: function _getWillNavagatedAdvInfo(e) {
            if (!PlatHelper.isWXPlatform() || !isGlobalMistakeEnabled()) return e;
            var t = !1, n = _loadNavigatedAppIds();
            for (var i = 0; i < n.length; i++) {
                if (n[i] === e.appid) {
                    t = !0;
                    break;
                }
            }
            if (t) {
                var _t44 = [];
                for (var _e69 = 0; _e69 < this._advInfos.length; _e69++) {
                    _t44.push(this._advInfos[_e69].appid);
                }
                _t44 = uniq(_t44);
                var _i7 = xorBy(_t44, n);
                if (_i7 && _i7.length > 0) {
                    var _e70 = _i7[random(0, _i7.length - 1)];
                    for (var _t45 = 0; _t45 < this._advInfos.length; _t45++) {
                        if (this._advInfos[_t45].appid === _e70) return this._advInfos[_t45];
                    }
                }
                return e;
            }
            return e;
        }
    }, {
        key: "_getMaxScrollIndex",
        value: function _getMaxScrollIndex() {
            if (this._advList) {
                var e = this._advList.length;
                return this.isHorizontal ? (e = Math.ceil(this._advList.length / this._advList.repeatY - this.maxOnShowCells / this._advList.repeatY), 
                e *= this._advList.repeatY) : (e = Math.ceil(this._advList.length / this._advList.repeatX - this.maxOnShowCells / this._advList.repeatX), 
                e *= this._advList.repeatX), e;
            }
            return 0;
        }
    }, {
        key: "_getScrollDuration",
        value: function _getScrollDuration(e, t) {
            return Math.abs(t - e) * this.tweenSpeed;
        }
    }, {
        key: "_getNextAdvInfo",
        value: function _getNextAdvInfo(e) {
            if (this._advInfos && this._advInfos.length > this.advCount) {
                var _e71 = [];
                for (var t = 0; t < this._advInfos.length; t++) {
                    var n = this._advInfos[t].logo_url;
                    -1 === this._onShowAdvImgs.indexOf(n) && _e71.push(this._advInfos[t]);
                }
                if (_e71.length > 0) {
                    return _e71[random(0, _e71.length - 1)];
                }
                console.error(this._onShowAdvImgs), console.error(this._advInfos);
            }
            return null;
        }
    }, {
        key: "_addOnShowAdvImg",
        value: function _addOnShowAdvImg(e) {
            -1 === this._onShowAdvImgs.indexOf(e) && this._onShowAdvImgs.push(e);
        }
    }, {
        key: "_removeOnShowAdvImg",
        value: function _removeOnShowAdvImg(e) {
            var t = this._onShowAdvImgs.indexOf(e);
            -1 !== t && this._onShowAdvImgs.splice(t, 1);
        }
    }, {
        key: "_convertToLocalAdvInfos",
        value: function _convertToLocalAdvInfos(e) {
            var t = [], n = [];
            if (Array.isArray(e)) for (var i = 0; i < e.length; i++) {
                var a = e[i];
                if (Array.isArray(a.logo_attr)) {
                    var _e72 = random(0, a.logo_attr.length - 1);
                    for (var _i8 = 0; _i8 < a.logo_attr.length; _i8++) {
                        var o = cloneDeep(a), s = a.logo_attr[_i8];
                        o.logo_url = s && "object" == _typeof2(s) ? cloneDeep(s) : s, _i8 === _e72 ? t.push(o) : n.push(o);
                    }
                } else if ("string" == typeof a.logo_url) t.push(a); else if (Array.isArray(a.logo_url)) {
                    var _e73 = random(0, a.logo_url.length - 1);
                    for (var _i9 = 0; _i9 < a.logo_url.length; _i9++) {
                        var _o = cloneDeep(a), _s3 = a.logo_url[_i9];
                        _o.logo_url = _s3 && "object" == _typeof2(_s3) ? cloneDeep(_s3) : _s3, _i9 === _e73 ? t.push(_o) : n.push(_o);
                    }
                }
            }
            return shuffleArray(t), n.length > 0 && (shuffleArray(n), t = t.concat(n)), t;
        }
    }, {
        key: "_addTagIntoBtn",
        value: function _addTagIntoBtn(e, t) {
            e && (e["set" + t + "TagStatus"] = function(n) {
                e["_is" + t + "TagOnShow"] = n;
                var i = "_" + t + "Tag";
                if (n) {
                    if (!e[i]) {
                        var _n20 = new Laya.Image();
                        _n20.skin = t === C_TAG_OF_NEW ? SubConfig.path + this.newTagPath : SubConfig.path + this.hotTagPath, 
                        e.getChildByName("tag") ? (_n20.pivotX = 0, _n20.pivotY = 0, _n20.x = 0, _n20.y = 0, 
                        e.getChildByName("tag").addChild(_n20)) : (-1 !== _n20.skin.indexOf("2") ? (_n20.pivotX = 0, 
                        _n20.pivotY = 0, _n20.x = 1.5, _n20.y = 1.5) : (_n20.pivotX = _n20.width, _n20.pivotY = 0, 
                        _n20.x = e.width - 1.5, _n20.y = 1.5), e.addChild(_n20)), e[i] = _n20;
                    }
                    e[i].visible = !0;
                } else e[i] && (e[i].visible = !1);
            }.bind(this), e["get" + t + "TagStatus"] = function() {
                return e["_is" + t + "TagOnShow"];
            }.bind(this), e["set" + t + "TagStatus"](!1));
        }
    }, {
        key: "_setSweepEffectStatu",
        value: function _setSweepEffectStatu(e, t) {
            if (e) if (t) {
                if (!e._sweepImg) {
                    var _t46 = new Laya.Image();
                    _t46.skin = SubConfig.path + this.sweepEffectPath, _t46.scaleY = e.height / _t46.height, 
                    _t46.scaleX = _t46.scaleY, _t46.pivotX = 0, _t46.pivotY = 0, e.addChild(_t46), e._sweepImg = _t46;
                }
                if (e._sweepImg.visible = !0, !e._tween) {
                    var _t47 = function _t47(n) {
                        e._sweepImg.x = 0 - e._sweepImg.width * e._sweepImg.scaleX, e._tween = Laya.Tween.to(e._sweepImg, {
                            x: e.width
                        }, 1e3, null, Laya.Handler.create(null, function() {
                            e._tween = null, _t47(2e3);
                        }), n);
                    };
                    _t47(0);
                }
                e.mask || Laya.loader.load(SubConfig.path + "hlsdk/res/ad/ad_mask.png", Laya.Handler.create(null, function() {
                    var t = new Laya.Image();
                    t.skin = SubConfig.path + "hlsdk/res/ad/ad_mask.png", t.sizeGrid = "30,30,30,30", 
                    t.width = e.width, t.height = e.height, e.mask = t;
                }.bind(this)));
            } else e._sweepImg && (e._sweepImg.visible = !1), e._tween && (e._tween.clear(), 
            e._tween = null), e.mask && !this.needMask && (e.mask = null);
        }
    } ]);
    return AdvLoadMgr;
}(Laya.Script);

var BaseAdUI = /* */ function(_BaseUI2) {
    _inherits2(BaseAdUI, _BaseUI2);
    var _super30 = _createSuper2(BaseAdUI);
    function BaseAdUI() {
        var _this85;
        _classCallCheck2(this, BaseAdUI);
        _this85 = _super30.call(this), _this85._uiParams = null, _this85._advLoadMgrs = [];
        return _this85;
    }
    _createClass2(BaseAdUI, [ {
        key: "onAwake",
        value: function onAwake() {
            this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType;
        }
    }, {
        key: "onHide",
        value: function onHide() {
            for (var e = 0; e < this._advLoadMgrs.length; e++) {
                this._advLoadMgrs[e].hideAdv();
            }
        }
    }, {
        key: "_onInit",
        value: function _onInit(e) {
            this._uiParams = null, e ? (this._uiParams = convertWebParams(e), _get2(_getPrototypeOf2(BaseAdUI.prototype), "_onInit", this).call(this, this._uiParams)) : _get2(_getPrototypeOf2(BaseAdUI.prototype), "_onInit", this).call(this);
        }
    }, {
        key: "bindName",
        value: function bindName(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            checkString(t.name) && -1 !== n.indexOf(t.name) && (e[t.name] = t);
            for (var i = 0; i < t.numChildren; i++) {
                this.bindName(e, t.getChildAt(i), n);
            }
        }
    }, {
        key: "refreshAdv",
        value: function refreshAdv() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            var t = e ? this._advLoadMgrs.length : 1;
            for (var _e74 = 0; _e74 < t; _e74++) {
                this._advLoadMgrs[_e74].refreshAdv();
            }
        }
    }, {
        key: "setAdvPath",
        value: function setAdvPath(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            var i = t ? this._advLoadMgrs.length : 1;
            for (var _t48 = 0; _t48 < i; _t48++) {
                this._advLoadMgrs[_t48].setAdvPath(e), n && this._advLoadMgrs[_t48].refreshAdv();
            }
        }
    }, {
        key: "randomNavigate",
        value: function randomNavigate() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this._advLoadMgrs.length > 0 && this._advLoadMgrs[0].randomNavigate(e);
        }
    }, {
        key: "addAdvLoadMgr",
        value: function addAdvLoadMgr() {
            var _this86 = this;
            var e = null, t = null;
            for (var n = 0; n < arguments.length; n++) {
                null != (e = arguments[n]) && null !== (t = e.getComponent(AdvLoadMgr)) && (this._advLoadMgrs.push(t), 
                t.registerGetAdvInfosFunc(function() {
                    return _this86._getAdvInfos();
                }));
            }
        }
    }, {
        key: "_getAdvInfos",
        value: function _getAdvInfos() {
            return HLSDKLocalData._advInfos;
        }
    }, {
        key: "_showBannerAd",
        value: function _showBannerAd() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var t = 0;
            "number" == typeof this._uiParams.bannerIndex && this._uiParams.bannerIndex > 0 && (t = this._uiParams.bannerIndex), 
            adv_interface$1.showBannerAd(t, e, this._getAdvPagePath());
        }
    }, {
        key: "_hideBannerAd",
        value: function _hideBannerAd() {
            adv_interface$1.hideBannerAd();
        }
    }, {
        key: "_moveBannerAdTo",
        value: function _moveBannerAdTo(e) {
            adv_interface$1.moveBannerAdTo(e);
        }
    }, {
        key: "_showRewardedVideoAd",
        value: function _showRewardedVideoAd() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            adv_interface$1.showRewardedVideoAd(this._getAdvPagePath(), !1, function() {
                doCallback$1(e, !0);
            }, function() {
                doCallback$1(e, !1);
            });
        }
    }, {
        key: "_showInterstitialAd",
        value: function _showInterstitialAd() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            adv_interface$1.showInterstitialAd(this._getAdvPagePath(), function() {
                doCallback$1(e);
            }, function() {
                doCallback$1(e);
            });
        }
    }, {
        key: "_preloadScrollAd",
        value: function _preloadScrollAd(e, t) {
            adv_interface$1.isComponentAdPreloaded(e) ? this._hideScrollAd(e) : (this._showScrollAd(e, t), 
            this._hideScrollAd(e));
        }
    }, {
        key: "_showScrollAd",
        value: function _showScrollAd(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            adv_interface$1.showComponentAd("scroll", this._getAdvPagePath(), e, t, 0, 5, "landscape", !0, null, n);
        }
    }, {
        key: "_hideScrollAd",
        value: function _hideScrollAd(e) {
            adv_interface$1.hideComponentAd(e);
        }
    }, {
        key: "_showMoreGameAd",
        value: function _showMoreGameAd() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            isLoadWXConfig$1() ? adv_interface$1.showPopupCustomAd(e.matrixAdUnitId, parseInt(e.matrixAdRow), this._getAdvPagePath(), null, function() {
                console.log("hideUI.MaskBB"), doCallback$1(n);
            }, function(e) {
                console.log("hideUI.MaskCC"), doCallback$1(t);
            }) : isLoadQQConfig() ? adv_interface$1.showBoxAd(this._getAdvPagePath(), null, null, function(e) {
                doCallback$1(t);
            }) : isLoadTTConfig() && adv_interface$1.showMoreGameAd(this._getAdvPagePath(), null, null, function(e) {
                doCallback$1(t);
            });
        }
    }, {
        key: "_showPortalAd",
        value: function _showPortalAd() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            isLoadOPPOConfig() && adv_interface$1.showPortalAd(e.portalAdUnitId, this._getAdvPagePath(), null, function() {
                console.log("hideUI.MaskBB"), doCallback$1(t);
            }, function() {
                doCallback$1(n);
            });
        }
    }, {
        key: "_getAdvPagePath",
        value: function _getAdvPagePath() {
            return checkString(this._uiParams.advPath) ? this._uiParams.advPath.indexOf("/") === this._uiParams.advPath.lastIndexOf("/") ? this._uiParams.advPath : this._uiParams.advPath.substring(0, this._uiParams.advPath.lastIndexOf("/")) : "";
        }
    } ]);
    return BaseAdUI;
}(BaseUI);

var AutoScale = /* */ function(_Laya$Script4) {
    _inherits2(AutoScale, _Laya$Script4);
    var _super31 = _createSuper2(AutoScale);
    function AutoScale() {
        var _this87;
        _classCallCheck2(this, AutoScale);
        _this87 = _super31.call(this), _this87.miniScale = 1, _this87.maxScale = 1.1, _this87.duration = 800, 
        _this87._tween = null;
        return _this87;
    }
    _createClass2(AutoScale, [ {
        key: "onEnable",
        value: function onEnable() {
            this._doScale();
        }
    }, {
        key: "setTweenEnable",
        value: function setTweenEnable(e) {
            this._clearTween(), this.owner.scaleX = this.miniScale, this.owner.scaleY = this.miniScale, 
            e && this._doScale();
        }
    }, {
        key: "_doScale",
        value: function _doScale() {
            var _this88 = this;
            var _e75 = null;
            (_e75 = function e() {
                _this88.owner && !_this88.owner.destroyed && (_this88.owner.scaleX < _this88.maxScale ? _this88._scaleToMax(_e75) : _this88._scaleToMini(_e75));
            })();
        }
    }, {
        key: "_scaleToMini",
        value: function _scaleToMini(e) {
            var _this89 = this;
            if (this._clearTween(), this.owner && this.owner.scaleX > this.miniScale) {
                var t = (this.owner.scaleX - this.miniScale) / (this.maxScale - this.miniScale) * this.duration;
                this._tween = Laya.Tween.to(this.owner, {
                    scaleX: this.miniScale,
                    scaleY: this.miniScale
                }, t, null, Laya.Handler.create(null, function() {
                    _this89._tween = null, "function" == typeof e && e();
                }), 0, !1, !1);
            } else "function" == typeof e && e();
        }
    }, {
        key: "_scaleToMax",
        value: function _scaleToMax(e) {
            var _this90 = this;
            if (this._clearTween(), this.owner && this.owner.scaleX < this.maxScale) {
                var t = (this.maxScale - this.owner.scaleX) / (this.maxScale - this.miniScale) * this.duration;
                this._tween = Laya.Tween.to(this.owner, {
                    scaleX: this.maxScale,
                    scaleY: this.maxScale
                }, t, null, Laya.Handler.create(null, function() {
                    _this90._tween = null, "function" == typeof e && e();
                }), 0, !1, !1);
            } else "function" == typeof e && e();
        }
    }, {
        key: "_clearTween",
        value: function _clearTween() {
            this.owner && this._tween && (this._tween.clear(), this._tween = null);
        }
    } ]);
    return AutoScale;
}(Laya.Script);

var MoreGameInvokeType = {
    None: 0,
    MoreGame: 1,
    MoreGameAd: 2
};

var MoreGameEntrance = /* */ function(_BaseAdUI) {
    _inherits2(MoreGameEntrance, _BaseAdUI);
    var _super32 = _createSuper2(MoreGameEntrance);
    function MoreGameEntrance() {
        _classCallCheck2(this, MoreGameEntrance);
        return _super32.call(this);
    }
    _createClass2(MoreGameEntrance, [ {
        key: "onInitUI",
        value: function onInitUI() {
            this.bindName(this, this.owner, [ "leftEntranceBtn", "rightEntranceBtn", "middleEntranceBtn" ]), 
            this.leftEntranceBtn && this.leftEntranceBtn.on("click", this, this.onEntranceTouched), 
            this.rightEntranceBtn && this.rightEntranceBtn.on("click", this, this.onEntranceTouched), 
            this.middleEntranceBtn && this.middleEntranceBtn.on("click", this, this.onEntranceTouched);
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            var t = function t(_t49, n) {
                if (_t49) {
                    _t49.visible = n;
                    var i = seekNodeByName(_t49, "dot");
                    i && (i.visible = 1 === e.hot), _t49.getComponent(AutoScale).setTweenEnable(1 === e.autoScale), 
                    "middleEntranceBtn" !== _t49.name && e.fromTopPercent >= 0 && (_t49.top = e.fromTopPercent / 100 * Laya.stage.height), 
                    "leftEntranceBtn" == _t49.name && e.fromLeftPercent >= 0 && (_t49.left = e.fromLeftPercent / 100 * Laya.stage.width), 
                    "rightEntranceBtn" == _t49.name && e.fromRightPercent >= 0 && (_t49.right = e.fromRightPercent / 100 * Laya.stage.width), 
                    "middleEntranceBtn" == _t49.name && ((e.centerX >= 0 || e.centerX < 0) && (_t49.x = getSceneSize().width / 2 + e.centerX / 100 * getSceneSize().width), 
                    (e.centerY >= 0 || e.centerY < 0) && (_t49.y = getSceneSize().height / 2 + e.centerY / 100 * getSceneSize().height));
                }
            };
            this.leftEntranceBtn && t(this.leftEntranceBtn, 1 === e.left), this.rightEntranceBtn && t(this.rightEntranceBtn, 1 === e.right), 
            this.middleEntranceBtn && t(this.middleEntranceBtn, 1 === e.middle);
        }
    }, {
        key: "onEntranceTouched",
        value: function onEntranceTouched() {
            isLoadWXConfig$1() ? this._uiParams.type === MoreGameInvokeType.MoreGameAd && checkString(this._uiParams.matrixAdUnitId) ? (UIManager.showUI(UIKeys.Mask), 
            this._showMoreGameAd({
                matrixAdUnitId: this._uiParams.matrixAdUnitId,
                matrixAdRow: this._uiParams.matrixAdRow
            }, function() {
                UIManager.hideUI(UIKeys.Mask);
            }, function() {
                UIManager.hideUI(UIKeys.Mask);
            })) : UIManager.showUI(UIKeys.MoreGame, null, this._uiParams) : isLoadQQConfig() ? this._showMoreGameAd() : isLoadOPPOConfig() ? this._showPortalAd({
                portalAdUnitId: this._uiParams.portalAdUnitId
            }, function() {
                UIManager.hideUI(UIKeys.Mask);
            }, function() {
                UIManager.hideUI(UIKeys.Mask);
            }) : isLoadTTConfig() ? this._showMoreGameAd({}, function() {
                PlatHelper.showToast("很抱歉，当前平台用户暂不支持");
            }) : console.error("not support platfrom...");
        }
    } ]);
    return MoreGameEntrance;
}(BaseAdUI);

var C_MistakeType = {
    None: 0,
    Banner: 1,
    Video: 2,
    Custom: 3
}, C_InvokeType = {
    None: 0,
    AutoRandom: 1,
    Video: 2,
    Custom: 3
};

var BasePageUI = /* */ function(_BaseAdUI2) {
    _inherits2(BasePageUI, _BaseAdUI2);
    var _super33 = _createSuper2(BasePageUI);
    function BasePageUI() {
        var _this91;
        _classCallCheck2(this, BasePageUI);
        _this91 = _super33.call(this), _this91._pageKey = "", _this91._isAutoOpen = !1;
        return _this91;
    }
    _createClass2(BasePageUI, [ {
        key: "onInit",
        value: function onInit(e) {
            var _this92 = this;
            if ("number" == typeof e.autoClose && e.autoClose > 0 && this.autoClosePage(e.autoClose), 
            "number" == typeof e.autoOpen && e.autoOpen > 0 && (this._isAutoOpen = !0), e.isMistakeEnabled && e.autoNav && (e.autoNav > 1 ? doCustomPromise([ {
                getPromiseFunc: function getPromiseFunc() {
                    return Promise.resolve();
                },
                times: 0
            }, {
                getPromiseFunc: function getPromiseFunc() {
                    return new Promise(function(e, t) {
                        _this92.randomNavigate(function(t) {
                            e();
                        });
                    });
                },
                times: e.autoNav
            } ]) : this.randomNavigate()), e.isMistakeEnabled && (e.autoVideo && e.autoInsert ? (this._showInterstitialAd(), 
            Scheduler.schedule("Delay_Open_RewardedVideoAd_While_Show_InsertAd_In_Page", function() {
                _this92._showRewardedVideoAd();
            }, !1, 1500, 0)) : e.autoVideo ? this._showRewardedVideoAd() : e.autoInsert && this._showInterstitialAd()), 
            e.isMistakeEnabled && isLoadWXConfig$1() && e.isBannerAutoRefresh) {
                var t = 0;
                Scheduler.schedule("Auto_Refresh_Banner_In_Page", function() {
                    e.eachBannerShowTimes > 1 ? adv_interface$1.isBannerOnShow() ? (console.log("hide old banner"), 
                    adv_interface$1.tempHideBanner()) : (t += 1) > 1 && t <= e.eachBannerShowTimes ? (console.log("show old banner"), 
                    adv_interface$1.tempShowBanner()) : (t = 1, console.log("show new banner"), _this92._hideBannerAd(), 
                    _this92._showBannerAd({
                        min: !0
                    })) : (_this92._hideBannerAd(), _this92._showBannerAd({
                        min: !0
                    }));
                }, !1, e.bannerAutoRefreshGap);
            }
            this._isAutoOpen && (this._uiParams.isAutoOpen || this.hidePage());
        }
    }, {
        key: "hidePage",
        value: function hidePage() {
            var _this93 = this;
            if (this.cancelAutoClosePage(), this._uiParams.isBannerAutoRefresh && Scheduler.unschedule("Auto_Refresh_Banner_In_Page"), 
            this._isAutoOpen) {
                var e = this._uiParams.autoOpen;
                this._uiParams.isAutoOpen && (this._uiParams.isAutoOpen = null, e = Math.random() * Math.max(0, e - 2e4) + 2e4), 
                Scheduler.unschedule(this._getAutoOpenScheduleKey()), Scheduler.schedule(this._getAutoOpenScheduleKey(), function() {
                    _this93._uiParams.isAutoOpen = !0, UIManager.showUI(_this93._pageKey, null, _this93._uiParams);
                }, !1, e, 1);
            }
            checkString(this._pageKey) ? UIManager.hideUI(this._pageKey) : console.error("Page Key Not Set...");
        }
    }, {
        key: "autoClosePage",
        value: function autoClosePage(e) {
            var _this94 = this;
            Scheduler.isScheduled(this._getAutoCloseScheduleKey()) || Scheduler.schedule(this._getAutoCloseScheduleKey(), function() {
                _this94.hidePage();
            }, !1, e, 1);
        }
    }, {
        key: "autoOpenPage",
        value: function autoOpenPage() {}
    }, {
        key: "cancelAutoClosePage",
        value: function cancelAutoClosePage() {
            Scheduler.unschedule(this._getAutoCloseScheduleKey());
        }
    }, {
        key: "_getAutoCloseScheduleKey",
        value: function _getAutoCloseScheduleKey() {
            return "Auto_Close_Page_Of_" + this._pageKey;
        }
    }, {
        key: "_getAutoOpenScheduleKey",
        value: function _getAutoOpenScheduleKey() {
            return "Auto_Open_Page_Of_" + this._pageKey;
        }
    }, {
        key: "addPlayBtntouchAction",
        value: function addPlayBtntouchAction(e) {
            var _this95 = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            e.offAll("click"), e.on("click", null, function() {
                playBtnTouchAction(e, function() {
                    AudioMgr.playSound(SoundName.SN_CLICK);
                    var n = _this95._uiParams.invokeType;
                    t || (n = _this95._uiParams.mistakeType), t && n === C_InvokeType.AutoRandom ? _this95.randomNavigate(function(e) {
                        _this95.hidePage();
                    }) : n === C_MistakeType.Video ? _this95._showRewardedVideoAd(function() {
                        _this95.hidePage();
                    }) : n === C_MistakeType.Custom ? (e.mouseEnabled = !1, doCustomPromise([ {
                        getPromiseFunc: function getPromiseFunc() {
                            return new Promise(function(e, t) {
                                _this95._showRewardedVideoAd(function() {
                                    e();
                                });
                            });
                        },
                        times: "number" == typeof _this95._uiParams.customVideoCount ? _this95._uiParams.customVideoCount : 0
                    }, {
                        getPromiseFunc: function getPromiseFunc() {
                            return new Promise(function(e, t) {
                                _this95.randomNavigate(function(t) {
                                    e();
                                });
                            });
                        },
                        times: "number" == typeof _this95._uiParams.customNavCount ? _this95._uiParams.customNavCount : 0
                    } ], function() {
                        e.mouseEnabled = !0, _this95.hidePage();
                    })) : _this95.hidePage();
                }, 1, 1, 1, 1e3);
            });
        }
    } ]);
    return BasePageUI;
}(BaseAdUI);

var MoreGamePopup = /* */ function(_BasePageUI) {
    _inherits2(MoreGamePopup, _BasePageUI);
    var _super34 = _createSuper2(MoreGamePopup);
    function MoreGamePopup() {
        var _this96;
        _classCallCheck2(this, MoreGamePopup);
        _this96 = _super34.call(this), _this96._pageKey = UIKeys.MoreGame;
        return _this96;
    }
    _createClass2(MoreGamePopup, [ {
        key: "onInitUI",
        value: function onInitUI() {
            var _this97 = this;
            this.bindName(this, this.owner, [ "closeBtn", "fakeCloseBtn", "adLoader" ]), this.closeBtn && (this.closeBtn.setOriginalScale = function(e) {
                _this97.closeBtn._originalScale = e, _this97.closeBtn.scaleX = e, _this97.closeBtn.scaleY = e;
            }, this.closeBtn.setOriginalScale(1), this.closeBtn.on("click", this, this.onCloseTouched)), 
            this.fakeCloseBtn && (this.fakeCloseBtn.setOriginalScale = function(e) {
                _this97.fakeCloseBtn._originalScale = e, _this97.fakeCloseBtn.scaleX = e, _this97.fakeCloseBtn.scaleY = e;
            }, this.fakeCloseBtn.setOriginalScale(1), this.fakeCloseBtn.on("click", this, this.onFakeCloseTouched)), 
            this.addAdvLoadMgr(this.adLoader);
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            _get2(_getPrototypeOf2(MoreGamePopup.prototype), "onInit", this).call(this, e), 
            e.isMistakeEnabled && e.enableMistake ? (this.closeBtn.setOriginalScale(.5), this.fakeCloseBtn.setOriginalScale(.5), 
            this.fakeCloseBtn.visible = !0) : (this.closeBtn.setOriginalScale(1), this.fakeCloseBtn.setOriginalScale(1), 
            this.fakeCloseBtn.visible = !1, e.delayShow ? delayShow(this.closeBtn, e.delayShow) : delayShow(this.closeBtn, 0)), 
            this.setAdvPath(e.advPath);
        }
    }, {
        key: "onCloseTouched",
        value: function onCloseTouched() {
            var _this98 = this;
            this._uiParams.isMistakeEnabled && this._uiParams.enableMistake ? this._showRewardedVideoAd(function() {
                _this98.hidePage();
            }) : playBtnTouchAction(this.closeBtn, function() {
                _this98.hidePage();
            }, this.closeBtn._originalScale), AudioMgr.playSound(SoundName.SN_CLICK);
        }
    }, {
        key: "onFakeCloseTouched",
        value: function onFakeCloseTouched() {
            var _this99 = this;
            playBtnTouchAction(this.onFakeCloseTouched, function() {
                _this99.hidePage();
            }, this.onFakeCloseTouched._originalScale), AudioMgr.playSound(SoundName.SN_CLICK);
        }
    } ]);
    return MoreGamePopup;
}(BasePageUI);

var FakeLoadingPopup = /* */ function(_BasePageUI2) {
    _inherits2(FakeLoadingPopup, _BasePageUI2);
    var _super35 = _createSuper2(FakeLoadingPopup);
    function FakeLoadingPopup() {
        var _this100;
        _classCallCheck2(this, FakeLoadingPopup);
        _this100 = _super35.call(this), _this100._pageKey = UIKeys.FakeLoading;
        return _this100;
    }
    _createClass2(FakeLoadingPopup, [ {
        key: "onInitUI",
        value: function onInitUI() {
            var _this101 = this;
            if (this.bindName(this, this.owner, [ "startBtn", "btnAdvLoader", "listAdvLoader", "progress", "progressTips" ]), 
            this.addAdvLoadMgr(this.btnAdvLoader, this.listAdvLoader), this.startBtn && this.addPlayBtntouchAction(this.startBtn, !0), 
            this.listAdvLoader) {
                var e = this.listAdvLoader.getComponent(AdvLoadMgr);
                Laya.loader.create(convertToScreneOrientationPrefabPath(SubConfig.path + "hlsdk/res/prefab/items/fakeListItem.json"), Laya.Handler.create(null, function(t) {
                    var n = new Laya.Prefab();
                    n.json = t, e.getAdvInfos(function() {
                        var e = seekNodeByName(_this101.listAdvLoader, "list"), t = 3;
                        e.cells.forEach(function(e) {
                            if (e && !e._advFrameExt) {
                                t += 1;
                                var i = n.create();
                                i.pivotX = i.width / 2, i.pivotY = i.height / 2, i.x = i.width / 2, i.y = i.height / 2, 
                                seekNodeByName(i, "rank").text = t.toString();
                                var a = seekNodeByName(i, "tips");
                                _this101._setRankTips(a, t), e._advFrameExt = i, e.addChild(i);
                            }
                        });
                    });
                }));
            }
            this.progress.setFakeProgress = function(e) {
                e = e > 1 ? 1 : e, _this101.progress.value = e, _this101.progressTips.text = "游戏资源加载中...{0}%".format(Math.floor(100 * e).toString());
            };
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            var _this102 = this;
            _get2(_getPrototypeOf2(FakeLoadingPopup.prototype), "onInit", this).call(this, e), 
            this.startBtn.visible = !1, this.progress.setFakeProgress(0);
            var t = ServerInfo.getServerTime();
            Scheduler.schedule("Fake_Loading_Progress", function() {
                var n = (ServerInfo.getServerTime() - t) / e.time;
                _this102.progress.setFakeProgress(n), n >= 1 && (_this102.startBtn.visible = !0, 
                Scheduler.unschedule("Fake_Loading_Progress"));
            }, !0);
            for (var _e76 = 1; _e76 <= 3; _e76++) {
                var _t50 = "static_tips_" + _e76.toString(), n = seekNodeByName(this.owner, _t50);
                this._setRankTips(n, _e76);
            }
            this.setAdvPath(e.advPath);
        }
    }, {
        key: "_setRankTips",
        value: function _setRankTips(e, t) {
            e && (e.text = t <= 20 ? random(8 * (20 - t), 8 * (20 - t + 1)).toString() + "万人在玩" : "新游立即玩");
        }
    } ]);
    return FakeLoadingPopup;
}(BasePageUI);

var ScrollPopup = /* */ function(_BaseAdUI3) {
    _inherits2(ScrollPopup, _BaseAdUI3);
    var _super36 = _createSuper2(ScrollPopup);
    function ScrollPopup() {
        _classCallCheck2(this, ScrollPopup);
        return _super36.call(this);
    }
    _createClass2(ScrollPopup, [ {
        key: "onInitUI",
        value: function onInitUI() {
            this.bindName(this, this.owner, [ "adLoader", "bg" ]), this.addAdvLoadMgr(this.adLoader);
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            if (this.setAdvPath(e.advPath), this.bg && (e && void 0 !== e.withBg ? this.bg.visible = !!e.withBg : this.bg.visible = !1), 
            this.adLoader) {
                var t = this.adLoader.height;
                e && e.top ? (e.fromTopPercent > 0 ? this.adLoader.top = e.fromTopPercent / 100 * Laya.stage.height : this.adLoader.top = 0, 
                this.adLoader.bottom = NaN) : (this.adLoader.top = NaN, e.fromBottomPercent > 0 ? this.adLoader.bottom = e.fromBottomPercent / 100 * Laya.stage.height : this.adLoader.bottom = 0), 
                this.adLoader.height = t;
            }
        }
    } ]);
    return ScrollPopup;
}(BaseAdUI);

var AutoShake = /* */ function(_Laya$Script5) {
    _inherits2(AutoShake, _Laya$Script5);
    var _super37 = _createSuper2(AutoShake);
    function AutoShake() {
        var _this103;
        _classCallCheck2(this, AutoShake);
        _this103 = _super37.call(this), _this103.gap = 3e3, _this103._tween = null, _this103._shakeTimes = 0, 
        _this103._scheduleKey = "";
        return _this103;
    }
    _createClass2(AutoShake, [ {
        key: "onEnable",
        value: function onEnable() {
            this._doShake();
        }
    }, {
        key: "setTweenEnable",
        value: function setTweenEnable(e) {
            "" !== this._scheduleKey && (Scheduler.unschedule(this._scheduleKey), this._scheduleKey = ""), 
            this._clearTween(), this.owner.rotation = 0, e && this._doShake();
        }
    }, {
        key: "_doShake",
        value: function _doShake() {
            var _this104 = this;
            var _e77 = null;
            (_e77 = function e() {
                _this104.owner && !_this104.owner.destroyed && (_this104._shakeTimes > 0 && _this104._shakeTimes % 2 == 0 ? (_this104._shakeTimes = 0, 
                _this104._shakeToMiddle(function() {
                    _this104._scheduleKey = "auto_shake_" + generateString(32), Scheduler.schedule(_this104._scheduleKey, function() {
                        _this104._scheduleKey = "", _e77();
                    }, !1, _this104.gap, 1);
                })) : _this104.owner.rotation < 15 ? (_this104._shakeTimes += 1, _this104._shakeToRight(_e77)) : (_this104._shakeTimes += 1, 
                _this104._shakeToLeft(_e77)));
            })();
        }
    }, {
        key: "_shakeToLeft",
        value: function _shakeToLeft(e) {
            var _this105 = this;
            if (this._clearTween(), this.owner && this.owner.rotation > -15) {
                var t = (this.owner.rotation + 15) / 30 * 50;
                this._tween = Laya.Tween.to(this.owner, {
                    rotation: -15
                }, t, null, Laya.Handler.create(null, function() {
                    _this105._tween = null, "function" == typeof e && e();
                }));
            } else "function" == typeof e && e();
        }
    }, {
        key: "_shakeToRight",
        value: function _shakeToRight(e) {
            var _this106 = this;
            if (this._clearTween(), this.owner && this.owner.rotation < 15) {
                var t = (15 - this.owner.rotation) / 30 * 50;
                this._tween = Laya.Tween.to(this.owner, {
                    rotation: 15
                }, t, null, Laya.Handler.create(null, function() {
                    _this106._tween = null, "function" == typeof e && e();
                }));
            } else "function" == typeof e && e();
        }
    }, {
        key: "_shakeToMiddle",
        value: function _shakeToMiddle(e) {
            var _this107 = this;
            if (this._clearTween(), this.owner && 0 != this.owner.rotation) {
                var t = Math.abs(this.owner.rotation) / 30 * 50;
                this._tween = Laya.Tween.to(this.owner, {
                    rotation: 0
                }, t, null, Laya.Handler.create(null, function() {
                    _this107._tween = null, "function" == typeof e && e();
                }));
            } else "function" == typeof e && e();
        }
    }, {
        key: "_clearTween",
        value: function _clearTween() {
            this.owner && this._tween && (this._tween.clear(), this._tween = null);
        }
    } ]);
    return AutoShake;
}(Laya.Script);

var CoupletPopup = /* */ function(_BaseAdUI4) {
    _inherits2(CoupletPopup, _BaseAdUI4);
    var _super38 = _createSuper2(CoupletPopup);
    function CoupletPopup() {
        var _this108;
        _classCallCheck2(this, CoupletPopup);
        _this108 = _super38.call(this), _this108._isFirstOpen = !0, _this108._leftNodes = [], 
        _this108._rightNodes = [];
        return _this108;
    }
    _createClass2(CoupletPopup, [ {
        key: "onInitUI",
        value: function onInitUI() {}
    }, {
        key: "onInit",
        value: function onInit(e) {
            var _this109 = this;
            Scheduler.unschedule("Auto_Refresh_Of_Couplet_Ad");
            var t = function t(e, _t53, n, i) {
                if (e.length > 0) {
                    var _i10 = e[0], a = !1;
                    if (n || -1 === _i10.name.indexOf("_WithName") || (a = !0), n && -1 === _i10.name.indexOf("_WithName") && (a = !0), 
                    a || e.length > _t53) {
                        var _n21 = _t53;
                        a && (_n21 = 0);
                        for (var _t51 = e.length - 1; _t51 >= _n21; _t51--) {
                            var _n22 = e[_t51];
                            _n22.removeSelf(), _n22.destroy(), e.splice(_t51, 1);
                        }
                    }
                }
                if (e.length > 0 && e.forEach(function(e) {
                    e.getComponent(AdvLoadMgr).refreshAdv();
                }), e.length < _t53) {
                    var _a7 = "hlsdk/res/prefab/items/flowItem.json";
                    n && (_a7 = "hlsdk/res/prefab/items/flowItem_WithName.json"), Laya.loader.create(convertToScreneOrientationPrefabPath(SubConfig.path + _a7), Laya.Handler.create(null, function(n) {
                        var a = new Laya.Prefab();
                        a.json = n;
                        for (var _n23 = e.length; _n23 < _t53; _n23++) {
                            var _t52 = a.create();
                            e.push(_t52), _this109.owner.addChild(_t52);
                        }
                        doCallback$1(i);
                    }));
                } else doCallback$1(i);
            }, n = [];
            n.push(new Promise(function(n, i) {
                t(_this109._leftNodes, e.leftCount, e.withName, function() {
                    n();
                });
            })), n.push(new Promise(function(n, i) {
                t(_this109._rightNodes, e.rightCount, e.withName, function() {
                    n();
                });
            })), Promise.all(n).then(function() {
                if (_this109._advLoadMgrs = [], _this109._leftNodes.length > 0) {
                    var _t54 = e.fromTopPercent / 100 * Laya.stage.height, _n24 = 30;
                    for (var i = 0; i < _this109._leftNodes.length; i++) {
                        var a = _this109._leftNodes[i];
                        if (a) {
                            _this109.addAdvLoadMgr(a), a.getComponent(AutoScale).setTweenEnable(1 === e.autoScale), 
                            a.getComponent(AutoShake).setTweenEnable(1 === e.autoShake), a.pivotX = a.width / 2, 
                            a.pivotY = a.height / 2, a.left = 10, a.top = _t54 + i * (a.height + _n24);
                        }
                    }
                }
                if (_this109._rightNodes.length > 0) {
                    var _t55 = e.fromTopPercent / 100 * Laya.stage.height, _n25 = 30;
                    for (var _i11 = 0; _i11 < _this109._rightNodes.length; _i11++) {
                        var _a8 = _this109._rightNodes[_i11];
                        if (_a8) {
                            _this109.addAdvLoadMgr(_a8), _a8.getComponent(AutoScale).setTweenEnable(1 === e.autoScale), 
                            _a8.getComponent(AutoShake).setTweenEnable(1 === e.autoShake), _a8.pivotX = _a8.width / 2, 
                            _a8.pivotY = _a8.height / 2, _a8.right = 10, _a8.top = _t55 + _i11 * (_a8.height + _n25);
                        }
                    }
                }
                _this109.setAdvPath(e.advPath, !0, !1), e.refreshGap > 0 && Scheduler.schedule("Auto_Refresh_Of_Couplet_Ad", function() {
                    _this109.refreshAdv(!0);
                }, !1, e.refreshGap);
            });
        }
    }, {
        key: "onHide",
        value: function onHide() {
            _get2(_getPrototypeOf2(CoupletPopup.prototype), "onHide", this).call(this), Scheduler.unschedule("Auto_Refresh_Of_Couplet_Ad");
        }
    } ]);
    return CoupletPopup;
}(BaseAdUI);

var MatrixPopup = /* */ function(_BaseAdUI5) {
    _inherits2(MatrixPopup, _BaseAdUI5);
    var _super39 = _createSuper2(MatrixPopup);
    function MatrixPopup() {
        var _this110;
        _classCallCheck2(this, MatrixPopup);
        _this110 = _super39.call(this), _this110._advNode = null, _this110._advLoadMgr = null;
        return _this110;
    }
    _createClass2(MatrixPopup, [ {
        key: "onInitUI",
        value: function onInitUI() {}
    }, {
        key: "onInit",
        value: function onInit(e) {
            var _this111 = this;
            Scheduler.unschedule("Auto_Refresh_Of_Matrix_Ad");
            var t = "3x2";
            e.style2x2 && (t = "2x2"), !this._advNode || this._advNode._style === t && this._advNode._advRowCount === e.advRowCount || (this._advNode.removeSelf(), 
            this._advNode.destroy(), this._advNode = null);
            var n = function n() {
                _this111._advNode && (e.fromTopPercent > 0 ? _this111._advNode.top = e.fromTopPercent / 100 * Laya.stage.height : _this111._advNode.top = 0, 
                e.refreshGap > 0 && Scheduler.schedule("Auto_Refresh_Of_Matrix_Ad", function() {
                    _this111.refreshAdv();
                }, !1, e.refreshGap)), _this111.setAdvPath(e.advPath);
            };
            this._advNode ? (this.refreshAdv(), n()) : Laya.loader.create(convertToScreneOrientationPrefabPath(SubConfig.path + "hlsdk/res/prefab/items/matrixItem_" + t + ".json"), Laya.Handler.create(null, function(t) {
                var i = new Laya.Prefab();
                i.json = t;
                var a = i.create(), o = a.getComponent(AdvLoadMgr);
                _this111.addAdvLoadMgr(a), _this111._advLoadMgr = o, e.advRowCount > 2 && (o.advCount = o.advCount / 2 * e.advRowCount, 
                o.isTween = !0, o.tweenSpeed = 3e3), _this111._advNode = a, _this111.owner.addChild(a), 
                n();
            }));
        }
    }, {
        key: "onHide",
        value: function onHide() {
            _get2(_getPrototypeOf2(MatrixPopup.prototype), "onHide", this).call(this), Scheduler.unschedule("Auto_Refresh_Of_Matrix_Ad");
        }
    } ]);
    return MatrixPopup;
}(BaseAdUI);

var FullExportPopup = /* */ function(_BasePageUI3) {
    _inherits2(FullExportPopup, _BasePageUI3);
    var _super40 = _createSuper2(FullExportPopup);
    function FullExportPopup() {
        var _this112;
        _classCallCheck2(this, FullExportPopup);
        _this112 = _super40.call(this), _this112._pageKey = UIKeys.FullExport;
        return _this112;
    }
    _createClass2(FullExportPopup, [ {
        key: "onInitUI",
        value: function onInitUI() {
            this.bindName(this, this.owner, [ "closeBtn", "scrollAdvLoader", "bannerAdvLoader" ]), 
            this.addAdvLoadMgr(this.scrollAdvLoader, this.bannerAdvLoader);
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            var _this113 = this;
            _get2(_getPrototypeOf2(FullExportPopup.prototype), "onInit", this).call(this, e), 
            this.setAdvPath(e.advPath, !0), this._uiParams.mistakeType === C_MistakeType.Banner && (adv_interface$1.pauseAutoRefreshBannerAd(), 
            this._hideBannerAd()), this._uiParams.mistakeType === C_MistakeType.Banner || this._uiParams.mistakeType === C_MistakeType.None ? (e.stopAutoMoveBtn ? createMistakeBtn_NoMove(this.closeBtn, function() {
                _this113.onCloseTouched(_this113.closeBtn);
            }, BtnClickMistakeType.Show, e.btnDelay, e.btnHide, e.btnUnhandle, e.bannerShow, function() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                _this113._showBannerAd(e);
            }, function() {
                _this113._hideBannerAd();
            }, function(e) {
                _this113._moveBannerAdTo(e);
            }) : createMistakeBtn_Move(this.closeBtn, function() {
                _this113.onCloseTouched(_this113.closeBtn);
            }, BtnClickMistakeType.Show, e.btnDelay, e.btnHide, e.btnUnhandle, e.btnMoveAfterShowBanner, e.moveDuration, !0, {
                x: 0,
                y: -200
            }, function() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                _this113._showBannerAd(e);
            }, function() {
                _this113._hideBannerAd();
            }, function(e) {
                _this113._moveBannerAdTo(e);
            }), this._uiParams.mistakeType === C_MistakeType.None ? this.closeBtn.disableMistake() : e.isMistakeEnabled && e.enableMistake ? e.mistakeDelay > 0 ? Scheduler.schedule("Delay_Auto_Start_Page_Banner_Mistake", function() {
                _this113.closeBtn.enableMistake();
            }, !1, e.mistakeDelay, 0) : this.closeBtn.once("click", null, function() {
                _this113.closeBtn.enableMistake();
            }) : this.closeBtn.disableMistake()) : this.addPlayBtntouchAction(this.closeBtn);
        }
    }, {
        key: "onHide",
        value: function onHide() {
            _get2(_getPrototypeOf2(FullExportPopup.prototype), "onHide", this).call(this), this._uiParams.mistakeType === C_MistakeType.Banner && (adv_interface$1.resumeAutoRefreshBannerAd(), 
            this._hideBannerAd());
        }
    }, {
        key: "onCloseTouched",
        value: function onCloseTouched() {
            AudioMgr.playSound(SoundName.SN_CLICK), this.hidePage();
        }
    } ]);
    return FullExportPopup;
}(BasePageUI);

var FullExitPopup = /* */ function(_BasePageUI4) {
    _inherits2(FullExitPopup, _BasePageUI4);
    var _super41 = _createSuper2(FullExitPopup);
    function FullExitPopup() {
        var _this114;
        _classCallCheck2(this, FullExitPopup);
        _this114 = _super41.call(this), _this114._pageKey = UIKeys.FullExit;
        return _this114;
    }
    _createClass2(FullExitPopup, [ {
        key: "onInitUI",
        value: function onInitUI() {
            this.bindName(this, this.owner, [ "closeBtn", "advLoader" ]), this.addAdvLoadMgr(this.advLoader);
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            var _this115 = this;
            _get2(_getPrototypeOf2(FullExitPopup.prototype), "onInit", this).call(this, e), 
            this.setAdvPath(e.advPath, !1), this._uiParams.mistakeType === C_MistakeType.Banner && (adv_interface$1.pauseAutoRefreshBannerAd(), 
            this._hideBannerAd()), this.closeBtn && (this.closeBtn.offAll("click"), this._uiParams.mistakeType === C_MistakeType.Banner || this._uiParams.mistakeType === C_MistakeType.None ? (e.stopAutoMoveBtn ? createMistakeBtn_NoMove(this.closeBtn, function() {
                _this115.onCloseTouched(_this115.closeBtn);
            }, BtnClickMistakeType.Show, e.btnDelay, e.btnHide, e.btnUnhandle, e.bannerShow, function() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                isLoadWXConfig$1() && e.isBannerAutoRefresh || _this115._showBannerAd(t);
            }, function() {
                isLoadWXConfig$1() && e.isBannerAutoRefresh || _this115._hideBannerAd();
            }, function(t) {
                isLoadWXConfig$1() && e.isBannerAutoRefresh || _this115._moveBannerAdTo(t);
            }) : createMistakeBtn_Move(this.closeBtn, function() {
                _this115.onCloseTouched(_this115.closeBtn);
            }, BtnClickMistakeType.Show, e.btnDelay, e.btnHide, e.btnUnhandle, e.btnMoveAfterShowBanner, e.moveDuration, !0, {
                x: 0,
                y: -200
            }, function() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                isLoadWXConfig$1() && e.isBannerAutoRefresh || _this115._showBannerAd(t);
            }, function() {
                isLoadWXConfig$1() && e.isBannerAutoRefresh || _this115._hideBannerAd();
            }, function(t) {
                isLoadWXConfig$1() && e.isBannerAutoRefresh || _this115._moveBannerAdTo(t);
            }), this._uiParams.mistakeType === C_MistakeType.None ? this.closeBtn.disableMistake() : e.isMistakeEnabled && e.enableMistake ? e.mistakeDelay > 0 ? Scheduler.schedule("Delay_Auto_Start_Page_Banner_Mistake", function() {
                _this115.closeBtn.enableMistake();
            }, !1, e.mistakeDelay, 0) : this.closeBtn.once("click", null, function() {
                _this115.closeBtn.enableMistake();
            }) : this.closeBtn.disableMistake()) : this.addPlayBtntouchAction(this.closeBtn));
        }
    }, {
        key: "onHide",
        value: function onHide() {
            _get2(_getPrototypeOf2(FullExitPopup.prototype), "onHide", this).call(this), this._uiParams.mistakeType === C_MistakeType.Banner && (adv_interface$1.resumeAutoRefreshBannerAd(), 
            this._hideBannerAd());
        }
    }, {
        key: "onCloseTouched",
        value: function onCloseTouched(e) {
            AudioMgr.playSound(SoundName.SN_CLICK), this.hidePage();
        }
    } ]);
    return FullExitPopup;
}(BasePageUI);

var FullExportPopup_V2 = /* */ function(_BasePageUI5) {
    _inherits2(FullExportPopup_V2, _BasePageUI5);
    var _super42 = _createSuper2(FullExportPopup_V2);
    function FullExportPopup_V2() {
        var _this116;
        _classCallCheck2(this, FullExportPopup_V2);
        _this116 = _super42.call(this), _this116._pageKey = UIKeys.FullExport_V2, _this116._isTouching = !1, 
        _this116._fromTopToBottom = !0, _this116._isFirstOpen = !0;
        return _this116;
    }
    _createClass2(FullExportPopup_V2, [ {
        key: "onInitUI",
        value: function onInitUI() {
            var _this117 = this;
            if (this.bindName(this, this.owner, [ "closeBtn", "list" ]), this.list) {
                this.list.vScrollBarSkin = "";
                var e = this.list.width;
                this.list.itemRender = function() {
                    var t = new Laya.Box();
                    return t.name = "fakeContent", t.pivotX = 0, t.pivotY = 0, t.width = e, t.height = 1938, 
                    t;
                }, this.list.array = [ "content" ], Laya.loader.create(convertToScreneOrientationPrefabPath(SubConfig.path + "hlsdk/res/prefab/items/fullExportContent_v2.json"), Laya.Handler.create(null, function(e) {
                    var t = new Laya.Prefab();
                    t.json = e, _this117._advLoadMgrs = [];
                    var n = t.create();
                    if (n.width = _this117.list.width, _this117.bindName(_this117, n, [ "staticAdvLoader", "scrollAdvLoader", "listAdvLoader" ]), 
                    _this117.addAdvLoadMgr(_this117.staticAdvLoader, _this117.scrollAdvLoader, _this117.listAdvLoader), 
                    isLoadLandscapeConfig$1()) {
                        if (_this117.staticAdvLoader) {
                            var _e78 = seekNodeByName(_this117.staticAdvLoader, "list"), _t56 = _this117.staticAdvLoader.getComponent(AdvLoadMgr), i = 5, a = n.width - _e78.left - _e78.right, o = Math.floor(a / (_t56.cellWidth + i)), s = (a - o * _t56.cellWidth) / (o - 1);
                            _e78.spaceX = s, _e78.repeatX = o, _t56.maxOnShowCells = _e78.repeatX, _t56.advCount = _e78.repeatX;
                        }
                        if (_this117.scrollAdvLoader) {
                            var _e79 = seekNodeByName(_this117.scrollAdvLoader, "list"), _t57 = _this117.scrollAdvLoader.getComponent(AdvLoadMgr), _i12 = 3, _a9 = Math.floor(n.width / (_t57.cellWidth + _i12)), _o2 = Math.ceil((n.width - _a9 * _t57.cellWidth) / (_a9 - 1));
                            _e79.repeatX = _a9, _e79.spaceX = _o2, _t57.maxOnShowCells = _e79.repeatX * _e79.repeatY, 
                            _t57.advCount = _t57.maxOnShowCells + 4;
                        }
                        if (_this117.listAdvLoader) {
                            var _e80 = seekNodeByName(_this117.listAdvLoader, "list"), _t58 = _this117.listAdvLoader.getComponent(AdvLoadMgr), _i13 = 5, _a10 = n.width - _e80.left - _e80.right, _o3 = Math.floor(_a10 / (_t58.cellWidth + _i13)), _s4 = (_a10 - _o3 * _t58.cellWidth) / (_o3 - 1);
                            _e80.repeatX = _o3, _e80.spaceX = _s4, _t58.maxOnShowCells = _e80.repeatX * _e80.repeatY, 
                            _t58.advCount = _t58.maxOnShowCells;
                        }
                    }
                    null != _this117._uiParams && null != _this117._uiParams.advPath && _this117.setAdvPath(_this117._uiParams.advPath, !0), 
                    Scheduler.schedule("Delay_Add_FullExport_V2_Content", function() {
                        _this117.list.cells[0].addChild(n);
                    }, !1, 100, 0);
                }));
            }
        }
    }, {
        key: "_doTotalScroll",
        value: function _doTotalScroll() {
            this.list && !this.list.destroyed && this.list.scrollBar && !this._isTouching && (this._fromTopToBottom ? (this.list.scrollBar.value += .5, 
            this.list.scrollBar.value >= this.list.scrollBar.max && (this.list.scrollBar.value = this.list.scrollBar.max, 
            this._fromTopToBottom = !1)) : (this.list.scrollBar.value -= .5, this.list.scrollBar.value <= 0 && (this.list.scrollBar.value = 0, 
            this._fromTopToBottom = !0)));
        }
    }, {
        key: "_enableTotalScroll",
        value: function _enableTotalScroll() {
            this._isTouching = !1;
        }
    }, {
        key: "_disableTotalScroll",
        value: function _disableTotalScroll() {
            this._isTouching = !0;
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            var _this118 = this;
            _get2(_getPrototypeOf2(FullExportPopup_V2.prototype), "onInit", this).call(this, e), 
            this._isFirstOpen ? this._isFirstOpen = !1 : this.refreshAdv(!0), this.setAdvPath(e.advPath), 
            this._uiParams.mistakeType === C_MistakeType.Banner && (adv_interface$1.pauseAutoRefreshBannerAd(), 
            this._hideBannerAd()), this.closeBtn && (null == this._uiParams.mistakeType || this._uiParams.mistakeType === C_MistakeType.Banner || this._uiParams.mistakeType === C_MistakeType.None ? (e.stopAutoMoveBtn ? createMistakeBtn_NoMove(this.closeBtn, function() {
                _this118.onCloseTouched(_this118.closeBtn);
            }, BtnClickMistakeType.Show, e.btnDelay, e.btnHide, e.btnUnhandle, e.bannerShow, function() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                _this118._showBannerAd(e);
            }, function() {
                _this118._hideBannerAd();
            }, function(e) {
                _this118._moveBannerAdTo(e);
            }) : createMistakeBtn_Move(this.closeBtn, function() {
                _this118.onCloseTouched(_this118.closeBtn);
            }, BtnClickMistakeType.Show, e.btnDelay, e.btnHide, e.btnUnhandle, e.btnMoveAfterShowBanner, e.moveDuration, !0, {
                x: 0,
                y: -250
            }, function() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                _this118._showBannerAd(e);
            }, function() {
                _this118._hideBannerAd();
            }, function(e) {
                _this118._moveBannerAdTo(e);
            }), this._uiParams.mistakeType === C_MistakeType.None ? this.closeBtn.disableMistake() : e.isMistakeEnabled && e.enableMistake ? e.mistakeDelay > 0 ? Scheduler.schedule("Delay_Auto_Start_Page_Banner_Mistake", function() {
                _this118.closeBtn.enableMistake();
            }, !1, e.mistakeDelay, 0) : this.closeBtn.once("click", null, function() {
                _this118.closeBtn.enableMistake();
            }) : this.closeBtn.disableMistake()) : this.addPlayBtntouchAction(this.closeBtn)), 
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this._disableTotalScroll), Laya.stage.on(Laya.Event.MOUSE_UP, this, this._enableTotalScroll), 
            Laya.stage.on(Laya.Event.MOUSE_OVER, this, this._enableTotalScroll), Scheduler.schedule("Auto_Do_Total_Scroll_Of_FullExportPopup_V2", function() {
                _this118._doTotalScroll();
            }, !0);
            var t = function t() {
                var e = null;
                if (_this118._advLoadMgrs && _this118._advLoadMgrs.length > 2) {
                    var _t59 = _this118._advLoadMgrs[2].getAllExposedAdvInfos();
                    if (_t59.length > 6) {
                        var n = random(0, 5);
                        e = _t59[n];
                    } else if (_t59.length > 0) {
                        var _n26 = random(0, _t59.length - 1);
                        e = _t59[_n26];
                    }
                }
                if (Scheduler.unschedule("Finger_Auto_Follow_Target_Of_FullExportPopup_V2"), UIManager.hideUI(UIKeys.Finger).catch(function(e) {}), 
                e) {
                    var _t60 = e.getCenterPt();
                    UIManager.showUI(UIKeys.Finger, null, new Laya.Vector2(_t60.x, _t60.y)).then(function(t) {
                        var n = t[1];
                        Scheduler.schedule("Finger_Auto_Follow_Target_Of_FullExportPopup_V2", function() {
                            var t = e.getCenterPt();
                            n.fixPos(new Laya.Vector2(t.x, t.y));
                        }, !0);
                    });
                }
            };
            Scheduler.schedule("Auto_Show_Finger_Of_FullExportPopup_V2", function() {
                t();
            }, !1, 2e3), Scheduler.schedule("First_Show_Finger_Of_FullExportPopup_V2", function() {
                t();
            }, !1, 500, 0);
        }
    }, {
        key: "onHide",
        value: function onHide() {
            _get2(_getPrototypeOf2(FullExportPopup_V2.prototype), "onHide", this).call(this), 
            UIManager.hideUI(UIKeys.Finger).catch(function(e) {}), Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this._disableTotalScroll), 
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this._enableTotalScroll), Laya.stage.off(Laya.Event.MOUSE_OVER, this, this._enableTotalScroll), 
            Scheduler.unschedule("Auto_Do_Total_Scroll_Of_FullExportPopup_V2"), Scheduler.unschedule("Auto_Show_Finger_Of_FullExportPopup_V2"), 
            Scheduler.unschedule("Finger_Auto_Follow_Target_Of_FullExportPopup_V2"), this._uiParams.mistakeType === C_MistakeType.Banner && (adv_interface$1.resumeAutoRefreshBannerAd(), 
            this._hideBannerAd());
        }
    }, {
        key: "onCloseTouched",
        value: function onCloseTouched() {
            AudioMgr.playSound(SoundName.SN_CLICK), this.hidePage();
        }
    } ]);
    return FullExportPopup_V2;
}(BasePageUI);

var CrazyClickPopup = /* */ function(_BasePageUI6) {
    _inherits2(CrazyClickPopup, _BasePageUI6);
    var _super43 = _createSuper2(CrazyClickPopup);
    function CrazyClickPopup() {
        var _this119;
        _classCallCheck2(this, CrazyClickPopup);
        _this119 = _super43.call(this), _this119._pageKey = UIKeys.CrazyClick, _this119._scheduleKey = "", 
        _this119.MouldName = "", _this119.ClickImgs = [];
        return _this119;
    }
    _createClass2(CrazyClickPopup, [ {
        key: "onInitUI",
        value: function onInitUI() {
            this.bindName(this, this.owner, [ "clickProgress", "clickProgressBg", "clickBtn", "finger", "tips", "icon" ]), 
            this.progressValue = 0, this.clickBtn && null == this.clickBtn._originalBottom && (this.clickBtn._originalBottom = this.clickBtn.bottom), 
            this.finger && null == this.finger._originalBottom && (this.finger._originalBottom = this.finger.bottom), 
            this.tips && null == this.tips._originalBottom && (this.tips._originalBottom = this.tips.bottom);
        }
    }, {
        key: "progressValue",
        set: function set(e) {
            null != this.clickProgress && (this.clickProgress instanceof Laya.ProgressBar ? this.clickProgress.value = e : this.clickProgress instanceof Laya.Box && (this.clickProgress.width = Math.max(1, this.clickProgressBg.width * e)));
        }
    }, {
        key: "getTplName",
        value: function getTplName(e) {
            return e.split("/")[0];
        }
    }, {
        key: "getClickImg",
        value: function getClickImg() {
            if (this.ClickImgs = [], null != this.MouldName) {
                var e = this.MouldName;
                for (var t = 1; t < 10; t++) {
                    var n = Laya.loader.getRes("hlsdk/res/" + this.getTplName(e) + "/" + t + ".png");
                    if (null == n) break;
                    this.ClickImgs.push(n);
                }
            }
            return this.ClickImgs;
        }
    }, {
        key: "doShowUI",
        value: function doShowUI(e) {
            var _this120 = this;
            if (this.MouldName = e.tpl, this.getClickImg(), e.invokeType === CrazyClickInvokeType.Banner && e.mistakeStyle === CrazyClickBannerMistakeType$1.Move) this.clickBtn.bottom = this.clickBtn._originalBottom + 200, 
            this.finger && (this.finger.bottom = this.finger._originalBottom + 200), this.tips && (this.tips.bottom = this.tips._originalBottom + 200); else if (e.invokeType > 0 || e.invokeType === CrazyClickInvokeType.CustomScroll) this.clickBtn.bottom = this.clickBtn._originalBottom - 60, 
            this.finger && (this.finger.bottom = this.finger._originalBottom - 60), this.tips && (this.tips.bottom = this.tips._originalBottom - 60); else if (e.invokeType <= 0 && 0 !== e.videoTarget) {
                var _e81 = .168 * Laya.stage.height;
                isLoadLandscapeConfig$1() && (_e81 = .248 * Laya.stage.height);
                var t = _e81 - this.clickBtn.height / 2 - this.clickBtn._originalBottom;
                this.clickBtn.bottom = this.clickBtn._originalBottom + t, this.finger && (this.finger.bottom = this.finger._originalBottom + t), 
                this.tips && (this.tips.bottom = this.tips._originalBottom + t);
            } else this.clickBtn.bottom = this.clickBtn._originalBottom, this.finger && (this.finger.bottom = this.finger._originalBottom), 
            this.tips && (this.tips.bottom = this.tips._originalBottom);
            (checkString(e.invokeType) || e.invokeType === CrazyClickInvokeType.CustomScroll) && checkString(e.scrollAdUnitId) && Scheduler.schedule("Delay_Preload_Custom_Ad", function() {
                _this120._preloadScrollAd(e.scrollAdUnitId, {
                    layout: "center",
                    centerPt: _this120.clickBtn.localToGlobal(new Laya.Point(_this120.clickBtn.width / 2, _this120.clickBtn.height / 2), !0)
                });
            }, !1, 100, 0), createCrazyClickBtn(this.clickBtn, function(e) {
                if (_this120.progressValue = e, e > 0 && (_this120.cancelAutoClosePage(), _this120.ClickImgs.length > 0)) {
                    var _t61 = Math.min(Math.floor(e * _this120.ClickImgs.length), _this120.ClickImgs.length - 1);
                    _this120.icon.skin = _this120.ClickImgs[_t61].url;
                }
            }, function() {}, function() {
                _this120._delayToHide();
            }, e, function() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                _this120._showBannerAd(t), t.out || e.mistakeStyle !== CrazyClickBannerMistakeType$1.Show || _this120._moveBannerAdTo(_this120.clickBtn.localToGlobal(new Laya.Point(_this120.clickBtn.width / 2, _this120.clickBtn.height / 2)));
            }, function() {
                _this120._hideBannerAd();
            }, function(e) {
                _this120._moveBannerAdTo(e);
            }, function(e) {
                _this120._showRewardedVideoAd(e);
            }, function(e, t) {
                _this120._showScrollAd(e, t);
            }, function(e) {
                _this120._hideScrollAd(e);
            }), e.isMistakeEnabled && e.enableMistake ? this.clickBtn.enableMistake() : this.clickBtn.disableMistake();
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            _get2(_getPrototypeOf2(CrazyClickPopup.prototype), "onInit", this).call(this, e), 
            e.invokeType === CrazyClickInvokeType.Banner && (adv_interface$1.pauseAutoRefreshBannerAd(), 
            this._hideBannerAd()), this.doShowUI(e);
        }
    }, {
        key: "onHide",
        value: function onHide() {
            _get2(_getPrototypeOf2(CrazyClickPopup.prototype), "onHide", this).call(this), this._uiParams.invokeType === CrazyClickInvokeType.Banner && adv_interface$1.resumeAutoRefreshBannerAd();
        }
    }, {
        key: "_delayToHide",
        value: function _delayToHide() {
            var _this121 = this;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1e3;
            Scheduler.isScheduled("Delay_Hide_Click_Mistake_Popup") || Scheduler.schedule("Delay_Hide_Click_Mistake_Popup", function() {
                _this121._uiParams.invokeType === CrazyClickInvokeType.Banner ? _this121._hideBannerAd() : _this121._uiParams.invokeType === CrazyClickInvokeType.CustomScroll && checkString(_this121._uiParams.scrollAdUnitId) && _this121._hideScrollAd(_this121._uiParams.scrollAdUnitId), 
                _this121.hidePage();
            }, !1, e, 1);
        }
    } ]);
    return CrazyClickPopup;
}(BasePageUI);

var nativeTemplatePopup = /* */ function(_BasePageUI7) {
    _inherits2(nativeTemplatePopup, _BasePageUI7);
    var _super44 = _createSuper2(nativeTemplatePopup);
    function nativeTemplatePopup() {
        var _this122;
        _classCallCheck2(this, nativeTemplatePopup);
        _this122 = _super44.call(this), _this122._pageKey = UIKeys.NativeTemplateAd, _this122._isCloseBtnCanInvoke = null;
        return _this122;
    }
    _createClass2(nativeTemplatePopup, [ {
        key: "onInitUI",
        value: function onInitUI() {
            this.bindName(this, this.owner, [ "closeBtn" ]);
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            var _this123 = this;
            _get2(_getPrototypeOf2(nativeTemplatePopup.prototype), "onInit", this).call(this, e), 
            this._uiParams.mistakeType === C_MistakeType.Banner && (adv_interface$1.pauseAutoRefreshBannerAd(), 
            this._hideBannerAd()), this.closeBtn && (this.closeBtn.offAll("click"), this._uiParams.mistakeType === C_MistakeType.Banner ? (e.stopAutoMoveBtn || !this._uiParams.enableMistake ? createMistakeBtn_NoMove(this.closeBtn, function() {
                _this123.onCloseTouched(_this123.closeBtn);
            }, BtnClickMistakeType.Show, e.btnDelay, e.btnHide, e.btnUnhandle, e.btnInvalid, e.btnMoveAfterShowBanner, 0, e.bannerShow, function() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                isLoadWXConfig$1() && e.isBannerAutoRefresh || _this123._showBannerAd(t);
            }, function() {
                isLoadWXConfig$1() && e.isBannerAutoRefresh || _this123._hideBannerAd();
            }) : createMistakeBtn_Move(this.closeBtn, function() {
                _this123.onCloseTouched(_this123.closeBtn);
            }, BtnClickMistakeType.Show, e.btnDelay, e.btnHide, e.btnUnhandle, e.btnInvalid, e.btnMoveAfterShowBanner, e.moveDuration, !0, {
                x: 0,
                y: -200
            }, function() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                isLoadWXConfig$1() && e.isBannerAutoRefresh || _this123._showBannerAd(t);
            }, function() {
                isLoadWXConfig$1() && e.isBannerAutoRefresh || _this123._hideBannerAd();
            }, function(t) {
                isLoadWXConfig$1() && e.isBannerAutoRefresh || _this123._moveBannerAdTo(t);
            }), this._uiParams.mistakeType === C_MistakeType.None ? this.closeBtn.disableMistake() : e.isMistakeEnabled && e.enableMistake ? e.mistakeDelay > 0 ? Scheduler.schedule("Delay_Auto_Start_Page_Banner_Mistake", function() {
                _this123.closeBtn.enableMistake();
            }, !1, e.mistakeDelay, 0) : this.closeBtn.once("click", null, function() {
                _this123.closeBtn.enableMistake();
            }) : this.closeBtn.disableMistake()) : e.isMistakeEnabled && !this._uiParams.enableMistake && this._uiParams.btnInvalid > 0 && !this._isCloseBtnCanInvoke ? null === this._isCloseBtnCanInvoke && (this._isCloseBtnCanInvoke = !1, 
            this.closeBtn.once("click", null, function() {
                Scheduler.schedule("Delay_Enable_Close_Btn", function() {
                    _this123._isCloseBtnCanInvoke = !0, _this123.addPlayBtntouchAction(_this123.closeBtn);
                }, !1, _this123._uiParams.btnInvalid, 0);
            })) : this.addPlayBtntouchAction(this.closeBtn));
        }
    }, {
        key: "onHide",
        value: function onHide() {
            _get2(_getPrototypeOf2(nativeTemplatePopup.prototype), "onHide", this).call(this), 
            this._uiParams.mistakeType === C_MistakeType.Banner && (adv_interface$1.resumeAutoRefreshBannerAd(), 
            this._hideBannerAd());
        }
    }, {
        key: "onCloseTouched",
        value: function onCloseTouched(e) {
            AudioMgr.playSound(SoundName.SN_CLICK), this.hidePage();
        }
    } ]);
    return nativeTemplatePopup;
}(BasePageUI);

var WX_UIRegisterInfos = [];

var moreGameEntranceInfo$4 = {
    key: WX_UIKeys.MoreGameEntrance,
    zOrder: 11,
    isAutoDestory: !1,
    cls: MoreGameEntrance,
    clsPath: "script/game/ui/popup/MoreGameEntrance.js",
    prefab: "hlsdk/res/prefab/moreGameEntrance.json",
    customResPathes: [ "hlsdk/res/more_game_btn.png", "hlsdk/res/red_dot.png", "hlsdk/res/more_game_btn_fliped.png" ]
};

WX_UIRegisterInfos.push(moreGameEntranceInfo$4);

var matrixAdInfo = {
    key: WX_UIKeys.Matrix,
    zOrder: 21,
    isAutoDestory: !1,
    cls: MatrixPopup,
    clsPath: "script/game/ui/popup/MatrixPopup.js",
    prefab: "hlsdk/res/prefab/matrixAd.json"
};

WX_UIRegisterInfos.push(matrixAdInfo);

var coupletAdInfo = {
    key: WX_UIKeys.Couplet,
    zOrder: 22,
    isAutoDestory: !1,
    cls: CoupletPopup,
    clsPath: "script/game/ui/popup/CoupletPopup.js",
    prefab: "hlsdk/res/prefab/coupletAd.json"
};

WX_UIRegisterInfos.push(coupletAdInfo);

var scrollAdInfo = {
    key: WX_UIKeys.Scroll,
    zOrder: 23,
    isAutoDestory: !1,
    cls: ScrollPopup,
    clsPath: "script/game/ui/popup/ScrollPopup.js",
    prefab: "hlsdk/res/prefab/scrollAd.json"
};

WX_UIRegisterInfos.push(scrollAdInfo);

var scrollWithNameAdInfo = {
    key: WX_UIKeys.ScrollWithName,
    zOrder: 23,
    isAutoDestory: !1,
    cls: ScrollPopup,
    clsPath: "script/game/ui/popup/ScrollPopup.js",
    prefab: "hlsdk/res/prefab/scrollAd_WithName.json"
};

WX_UIRegisterInfos.push(scrollWithNameAdInfo);

var crazyClickInfo$2 = {
    key: WX_UIKeys.CrazyClick,
    zOrder: 991,
    isAutoDestory: !1,
    cls: CrazyClickPopup,
    clsPath: "script/game/ui/popup/CrazyClickPopup.js",
    prefab: "hlsdk/res/prefab/crazyClick.json",
    customResPathes: [ "hlsdk/res/crazyClick/bg.png", "hlsdk/res/crazyClick/box.png", "hlsdk/res/crazyClick/button.png", "hlsdk/res/crazyClick/finger.png", "hlsdk/res/crazyClick/progress_bg.png", "hlsdk/res/crazyClick/progress_fill$bar.png", "hlsdk/res/crazyClick/progress_fill.png", "hlsdk/res/crazyClick/tips.png", "hlsdk/res/crazyClick/title.png" ]
};

WX_UIRegisterInfos.push(crazyClickInfo$2);

var fakeLoadingAdInfo = {
    key: WX_UIKeys.FakeLoading,
    zOrder: 211,
    isAutoDestory: !1,
    cls: FakeLoadingPopup,
    clsPath: "script/game/ui/popup/FakeLoadingPopup.js",
    prefab: "hlsdk/res/prefab/fakeLoadingAd.json",
    dependentPrefabs: [ "hlsdk/res/prefab/items/fakeListItem.json" ]
};

WX_UIRegisterInfos.push(fakeLoadingAdInfo);

var moreGameAdInfo = {
    key: WX_UIKeys.MoreGame,
    zOrder: 212,
    isAutoDestory: !1,
    cls: MoreGamePopup,
    clsPath: "script/game/ui/popup/MoreGamePopup.js",
    prefab: "hlsdk/res/prefab/moreGameAd.json"
};

WX_UIRegisterInfos.push(moreGameAdInfo);

var fullExportAdInfo = {
    key: WX_UIKeys.FullExport,
    zOrder: 213,
    isAutoDestory: !1,
    cls: FullExportPopup,
    clsPath: "script/game/ui/popup/FullExportPopup.js",
    prefab: "hlsdk/res/prefab/fullExportAd.json"
};

WX_UIRegisterInfos.push(fullExportAdInfo);

var fullExport_V2_AdInfo = {
    key: WX_UIKeys.FullExport_V2,
    zOrder: 214,
    isAutoDestory: !1,
    cls: FullExportPopup_V2,
    clsPath: "script/game/ui/popup/FullExportPopup_V2.js",
    prefab: "hlsdk/res/prefab/fullExportAd_v2.json",
    dependentPrefabs: [ "hlsdk/res/prefab/items/fullExportContent_v2.json" ]
};

WX_UIRegisterInfos.push(fullExport_V2_AdInfo);

var fullExitAdInfo = {
    key: WX_UIKeys.FullExit,
    zOrder: 215,
    isAutoDestory: !1,
    cls: FullExitPopup,
    clsPath: "script/game/ui/popup/FullExitPopup.js",
    prefab: "hlsdk/res/prefab/fullExitAd.json"
};

WX_UIRegisterInfos.push(fullExitAdInfo);

var nativeTemplateAdInfo = {
    key: WX_UIKeys.NativeTemplateAd,
    zOrder: 216,
    isAutoDestory: !1,
    cls: nativeTemplatePopup,
    clsPath: "script/game/ui/popup/NativeTemplatePopup.js",
    prefab: "hlsdk/res/prefab/nativeTemplateAd.json"
};

WX_UIRegisterInfos.push(nativeTemplateAdInfo);

var QQ_UIRegisterInfos = [];

var moreGameEntranceInfo$3 = {
    key: QQ_UIKeys.MoreGameEntrance,
    zOrder: 11,
    isAutoDestory: !1,
    cls: MoreGameEntrance,
    clsPath: "script/game/ui/popup/MoreGameEntrance.js",
    prefab: "hlsdk/res/prefab/moreGameEntrance.json",
    customResPathes: [ "hlsdk/res/more_game_btn.png", "hlsdk/res/red_dot.png", "hlsdk/res/more_game_btn_fliped.png" ]
};

QQ_UIRegisterInfos.push(moreGameEntranceInfo$3);

var crazyClickInfo$1 = {
    key: QQ_UIKeys.CrazyClick,
    zOrder: 991,
    isAutoDestory: !1,
    cls: CrazyClickPopup,
    clsPath: "script/game/ui/popup/CrazyClickPopup.js",
    prefab: "hlsdk/res/prefab/crazyClick.json",
    customResPathes: [ "hlsdk/res/crazyClick/bg.png", "hlsdk/res/crazyClick/box.png", "hlsdk/res/crazyClick/button.png", "hlsdk/res/crazyClick/finger.png", "hlsdk/res/crazyClick/progress_bg.png", "hlsdk/res/crazyClick/progress_fill$bar.png", "hlsdk/res/crazyClick/progress_fill.png", "hlsdk/res/crazyClick/tips.png", "hlsdk/res/crazyClick/title.png" ]
};

QQ_UIRegisterInfos.push(crazyClickInfo$1);

var TT_UIRegisterInfos = [];

var moreGameEntranceInfo$2 = {
    key: TT_UIKeys.MoreGameEntrance,
    zOrder: 11,
    isAutoDestory: !1,
    cls: MoreGameEntrance,
    clsPath: "script/game/ui/popup/MoreGameEntrance.js",
    prefab: "hlsdk/res/prefab/moreGameEntrance.json",
    customResPathes: [ "hlsdk/res/more_game_btn.png", "hlsdk/res/red_dot.png", "hlsdk/res/more_game_btn_fliped.png" ]
};

TT_UIRegisterInfos.push(moreGameEntranceInfo$2);

var crazyClickInfo = {
    key: TT_UIKeys.CrazyClick,
    zOrder: 991,
    isAutoDestory: !1,
    cls: CrazyClickPopup,
    clsPath: "script/game/ui/popup/CrazyClickPopup.js",
    prefab: "hlsdk/res/prefab/crazyClick.json",
    customResPathes: [ "hlsdk/res/crazyClick/bg.png", "hlsdk/res/crazyClick/box.png", "hlsdk/res/crazyClick/button.png", "hlsdk/res/crazyClick/finger.png", "hlsdk/res/crazyClick/progress_bg.png", "hlsdk/res/crazyClick/progress_fill$bar.png", "hlsdk/res/crazyClick/progress_fill.png", "hlsdk/res/crazyClick/tips.png", "hlsdk/res/crazyClick/title.png" ]
};

TT_UIRegisterInfos.push(crazyClickInfo);

var NativeBanner = /* */ function(_BasePageUI8) {
    _inherits2(NativeBanner, _BasePageUI8);
    var _super45 = _createSuper2(NativeBanner);
    function NativeBanner() {
        var _this124;
        _classCallCheck2(this, NativeBanner);
        _this124 = _super45.call(this), _this124._pageKey = UIKeys.NativeBanner, _this124._nativeAdObj = null, 
        _this124._nativeAdInfo = null;
        return _this124;
    }
    _createClass2(NativeBanner, [ {
        key: "onInitUI",
        value: function onInitUI() {
            this.bindName(this, this.owner, [ "bg", "closeBtn", "clickBtn" ]), this.clickBtn && this.clickBtn.on("click", this, this.onAdvTouched), 
            this.closeBtn && this.closeBtn.on("click", this, this.onCloseTouched);
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            _get2(_getPrototypeOf2(NativeBanner.prototype), "onInit", this).call(this, e), this.bg && (e.fromTopPercent > 0 ? (this.bg.top = e.fromTopPercent / 100 * (this.node && this.node.parent ? this.node.parent.height : Laya.stage.height), 
            console.error("TOP:  " + this.bg.top)) : this.bg.top = 0);
            var t = QGAdv.getNextNativeAdInfo();
            if (t) {
                var _e82 = t[0], n = t[1];
                _e82 && n ? (this._nativeAdInfo = _e82, this._nativeAdInfo = n, this.clickBtn && n.imgUrlList.length > 0 && (this.clickBtn.skin = n.imgUrlList[0]), 
                console.error("show...succ")) : (console.error("show...fail...hide1"), this.hidePage());
            } else console.error("show...fail...hide2"), this.hidePage();
        }
    }, {
        key: "onHide",
        value: function onHide() {
            _get2(_getPrototypeOf2(NativeBanner.prototype), "onHide", this).call(this), this._nativeAdObj && this._nativeAdInfo && (QGAdv.reportNativeAdHide(), 
            this._nativeAdObj = null, this._nativeAdInfo = null);
        }
    }, {
        key: "onAdvTouched",
        value: function onAdvTouched() {
            this._clickAdv(), this.hidePage();
        }
    }, {
        key: "onCloseTouched",
        value: function onCloseTouched() {
            this.hidePage();
        }
    }, {
        key: "_clickAdv",
        value: function _clickAdv() {
            this._nativeAdObj && this._nativeAdInfo && (QGAdv.reportNativeAdClick(this._nativeAdObj, this._nativeAdInfo.adId, this._nativeAdInfo.localAdID), 
            this._nativeAdObj = null, this._nativeAdInfo = null);
        }
    } ]);
    return NativeBanner;
}(BasePageUI);

var NativeBottomBanner = /* */ function(_BasePageUI9) {
    _inherits2(NativeBottomBanner, _BasePageUI9);
    var _super46 = _createSuper2(NativeBottomBanner);
    function NativeBottomBanner() {
        var _this125;
        _classCallCheck2(this, NativeBottomBanner);
        _this125 = _super46.call(this), _this125._pageKey = UIKeys.NativeBottomBanner, _this125._nativeAdObj = null, 
        _this125._nativeAdInfo = null;
        return _this125;
    }
    _createClass2(NativeBottomBanner, [ {
        key: "onInitUI",
        value: function onInitUI() {
            this.bindName(this, this.owner, [ "checkBtn", "closeBtn", "clickBtn" ]), this.clickBtn && this.clickBtn.on("click", this, this.onAdvTouched), 
            this.checkBtn && this.checkBtn.on("click", this, this.onAdvTouched), this.closeBtn && this.closeBtn.on("click", this, this.onCloseTouched);
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            _get2(_getPrototypeOf2(NativeBottomBanner.prototype), "onInit", this).call(this, e);
            var t = QGAdv.getNextNativeAdInfo();
            if (t) {
                var _e83 = t[0], n = t[1];
                _e83 && n ? (this._nativeAdInfo = _e83, this._nativeAdInfo = n, this.clickBtn && n.imgUrlList.length > 0 && (this.clickBtn.skin = n.imgUrlList[0]), 
                console.error("show...succ")) : (console.error("show...fail...hide1"), this.hidePage());
            } else console.error("show...fail...hide2"), this.hidePage();
        }
    }, {
        key: "onHide",
        value: function onHide() {
            _get2(_getPrototypeOf2(NativeBottomBanner.prototype), "onHide", this).call(this), 
            this._nativeAdObj && this._nativeAdInfo && (QGAdv.reportNativeAdHide(), this._nativeAdObj = null, 
            this._nativeAdInfo = null);
        }
    }, {
        key: "onAdvTouched",
        value: function onAdvTouched() {
            this._clickAdv(), this.hidePage();
        }
    }, {
        key: "onCloseTouched",
        value: function onCloseTouched() {
            this.hidePage();
        }
    }, {
        key: "_clickAdv",
        value: function _clickAdv() {
            this._nativeAdObj && this._nativeAdInfo && (QGAdv.reportNativeAdClick(this._nativeAdObj, this._nativeAdInfo.adId, this._nativeAdInfo.localAdID), 
            this._nativeAdObj = null, this._nativeAdInfo = null);
        }
    } ]);
    return NativeBottomBanner;
}(BasePageUI);

var NativeMiddleBanner = /* */ function(_BasePageUI10) {
    _inherits2(NativeMiddleBanner, _BasePageUI10);
    var _super47 = _createSuper2(NativeMiddleBanner);
    function NativeMiddleBanner() {
        var _this126;
        _classCallCheck2(this, NativeMiddleBanner);
        _this126 = _super47.call(this), _this126._pageKey = UIKeys.NativeMiddleBanner, _this126._nativeAdObj = null, 
        _this126._nativeAdInfo = null;
        return _this126;
    }
    _createClass2(NativeMiddleBanner, [ {
        key: "onInitUI",
        value: function onInitUI() {
            this.bindName(this, this.owner, [ "bg", "closeBtn", "adv", "clickBtn", "desc", "title" ]), 
            this.bg && this.bg.on("click", this, this.onAdvTouched), this.adv && this.adv.on("click", this, this.onAdvTouched), 
            this.clickBtn && this.clickBtn.on("click", this, this.onAdvTouched), this.closeBtn && this.closeBtn.on("click", this, this.onCloseTouched);
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            _get2(_getPrototypeOf2(NativeMiddleBanner.prototype), "onInit", this).call(this, e), 
            this.bg && (e.fromTopPercent > 0 ? (this.bg.top = e.fromTopPercent / 100 * (this.node && this.node.parent ? this.node.parent.height : Laya.stage.height), 
            console.error("TOP:  " + this.bg.top)) : this.bg.top = 0);
            var t = QGAdv.getNextNativeAdInfo();
            if (t) {
                var _e84 = t[0], n = t[1];
                _e84 && n ? (this._nativeAdInfo = _e84, this._nativeAdInfo = n, this.title && (this.title.text = n.title), 
                this.desc && (this.desc.text = n.desc), this.adv && n.imgUrlList.length > 0 && (this.adv.skin = n.imgUrlList[0]), 
                console.error("show...succ")) : (console.error("show...fail...hide1"), this.hidePage());
            } else console.error("show...fail...hide2"), this.hidePage();
        }
    }, {
        key: "onHide",
        value: function onHide() {
            _get2(_getPrototypeOf2(NativeMiddleBanner.prototype), "onHide", this).call(this), 
            this._nativeAdObj && this._nativeAdInfo && (QGAdv.reportNativeAdHide(), this._nativeAdObj = null, 
            this._nativeAdInfo = null);
        }
    }, {
        key: "onAdvTouched",
        value: function onAdvTouched() {
            this._clickAdv(), this.hidePage();
        }
    }, {
        key: "onCloseTouched",
        value: function onCloseTouched() {
            this.hidePage();
        }
    }, {
        key: "_clickAdv",
        value: function _clickAdv() {
            this._nativeAdObj && this._nativeAdInfo && (QGAdv.reportNativeAdClick(this._nativeAdObj, this._nativeAdInfo.adId, this._nativeAdInfo.localAdID), 
            this._nativeAdObj = null, this._nativeAdInfo = null);
        }
    } ]);
    return NativeMiddleBanner;
}(BasePageUI);

var OPPO_UIRegisterInfos = [];

var moreGameEntranceInfo$1 = {
    key: OPPO_UIKeys.MoreGameEntrance,
    zOrder: 21,
    isAutoDestory: !1,
    cls: MoreGameEntrance,
    clsPath: "script/game/ui/popup/MoreGameEntrance.js",
    prefab: "hlsdk/res/prefab/moreGameEntrance.json"
};

OPPO_UIRegisterInfos.push(moreGameEntranceInfo$1);

var nativeBannerInfo$1 = {
    key: OPPO_UIKeys.NativeBanner,
    zOrder: 21,
    isAutoDestory: !1,
    cls: NativeBanner,
    clsPath: "script/game/ui/popup/NativeFlow.js",
    prefab: "hlsdk/res/prefab/flowNativeAd_750x230.json"
};

OPPO_UIRegisterInfos.push(nativeBannerInfo$1);

var nativeBottomInfo$1 = {
    key: OPPO_UIKeys.NativeBottomBanner,
    zOrder: 21,
    isAutoDestory: !1,
    cls: NativeBottomBanner,
    clsPath: "script/game/ui/popup/NativeFlow.js",
    prefab: "hlsdk/res/prefab/flowNativeAd_WithBtn.json"
};

OPPO_UIRegisterInfos.push(nativeBottomInfo$1);

var nativeMiddleInfo$1 = {
    key: OPPO_UIKeys.NativeMiddleBanner,
    zOrder: 21,
    isAutoDestory: !1,
    cls: NativeMiddleBanner,
    clsPath: "script/game/ui/popup/NativeFlow.js",
    prefab: "hlsdk/res/prefab/insertAd.json"
};

OPPO_UIRegisterInfos.push(nativeMiddleInfo$1);

var VIVO_UIRegisterInfos = [];

var moreGameEntranceInfo = {
    key: VIVO_UIKeys.MoreGameEntrance,
    zOrder: 21,
    isAutoDestory: !1,
    cls: MoreGameEntrance,
    clsPath: "script/game/ui/popup/MoreGameEntrance.js",
    prefab: "hlsdk/res/prefab/moreGameEntrance.json"
};

VIVO_UIRegisterInfos.push(moreGameEntranceInfo);

var nativeBannerInfo = {
    key: VIVO_UIKeys.NativeBanner,
    zOrder: 21,
    isAutoDestory: !1,
    cls: NativeBanner,
    clsPath: "script/game/ui/popup/NativeFlow.js",
    prefab: "hlsdk/res/prefab/flowNativeAd_750x230.json"
};

VIVO_UIRegisterInfos.push(nativeBannerInfo);

var nativeBottomInfo = {
    key: VIVO_UIKeys.NativeBottomBanner,
    zOrder: 21,
    isAutoDestory: !1,
    cls: NativeBottomBanner,
    clsPath: "script/game/ui/popup/NativeFlow.js",
    prefab: "hlsdk/res/prefab/flowNativeAd_WithBtn.json"
};

VIVO_UIRegisterInfos.push(nativeBottomInfo);

var nativeMiddleInfo = {
    key: VIVO_UIKeys.NativeMiddleBanner,
    zOrder: 21,
    isAutoDestory: !1,
    cls: NativeMiddleBanner,
    clsPath: "script/game/ui/popup/NativeFlow.js",
    prefab: "hlsdk/res/prefab/insertAd.json"
};

VIVO_UIRegisterInfos.push(nativeMiddleInfo);

var Native_UIRegisterInfos = [];

var Tips = /* */ function(_BaseUI3) {
    _inherits2(Tips, _BaseUI3);
    var _super48 = _createSuper2(Tips);
    function Tips() {
        var _this127;
        _classCallCheck2(this, Tips);
        _this127 = _super48.call(this), _this127._bg = null, _this127._content = null, _this127._maxContendWidth = .8 * Laya.stage.width;
        return _this127;
    }
    _createClass2(Tips, [ {
        key: "onAwake",
        value: function onAwake() {
            this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType;
        }
    }, {
        key: "onEnable",
        value: function onEnable() {
            this._initUI(), this._doClean();
        }
    }, {
        key: "_initUI",
        value: function _initUI() {
            var e = seekNodeByName(this.owner, "bg");
            e && (this._bg = e);
            var t = seekNodeByName(this.owner, "content");
            t && (this._content = t);
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            var _this128 = this;
            this._doClean(), this._content.x = 15, this._content.y = 15, this._content.width = 0, 
            this._content.wordWrap = !1, this._content.text = e, this._content.width > this._maxContendWidth && (this._content.width = this._maxContendWidth, 
            this._content.wordWrap = !0), this._bg.width = this._content.width + 30, this._bg.height = this._content.height + 30, 
            this._bg.pivotX = this._bg.width / 2, this._bg.pivotY = this._bg.height / 2, this._bg.x = this.owner.width / 2, 
            this._bg.y = this.owner.height / 2, this._bg._scheduleKey = generateString(32), 
            Scheduler.schedule(this._bg._scheduleKey, function() {
                _this128._bg._scheduleKey = null, UIManager.hideUI(UIKeys.Tips);
            }, !1, 2e3, 1);
        }
    }, {
        key: "onHide",
        value: function onHide() {
            this._doClean();
        }
    }, {
        key: "_doClean",
        value: function _doClean() {
            this._bg._scheduleKey && (Scheduler.unschedule(this._bg._scheduleKey), this._bg._scheduleKey = "");
        }
    } ]);
    return Tips;
}(BaseUI);

var Modal = /* */ function(_BaseUI4) {
    _inherits2(Modal, _BaseUI4);
    var _super49 = _createSuper2(Modal);
    function Modal() {
        var _this129;
        _classCallCheck2(this, Modal);
        _this129 = _super49.call(this), _this129._bg = null, _this129._title = null, _this129._content = null, 
        _this129._cancelBtn = null, _this129._confirmBtn = null, _this129._singleConfirmBtn = null, 
        _this129._cb = null;
        return _this129;
    }
    _createClass2(Modal, [ {
        key: "onAwake",
        value: function onAwake() {
            this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType;
        }
    }, {
        key: "onEnable",
        value: function onEnable() {
            this._initUI();
        }
    }, {
        key: "_initUI",
        value: function _initUI() {
            var e = seekNodeByName(this.owner, "bg");
            e && (this._bg = e);
            var t = seekNodeByName(this.owner, "title");
            t && (this._title = t);
            var n = seekNodeByName(this.owner, "content");
            n && (this._content = n);
            var i = seekNodeByName(this.owner, "cancelBtn");
            i && (i.on("click", null, function() {
                this.onCancelTouched(i);
            }.bind(this)), this._cancelBtn = i);
            var a = seekNodeByName(this.owner, "confirmBtn");
            a && (a.on("click", null, function() {
                this.onConfirmTouched(a);
            }.bind(this)), this._confirmBtn = a);
            var o = seekNodeByName(this.owner, "singleConfirmBtn");
            o && (o.on("click", null, function() {
                this.onConfirmTouched(o);
            }.bind(this)), this._singleConfirmBtn = o);
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            this._cb = e.cb, this._title && (e.title ? (this._title.visible = !0, this._title.text = e.title, 
            this._bg && (this._bg.height = 266)) : (this._title.visible = !1, this._bg && (this._bg.height = 226))), 
            this._content && e.content && (this._content.text = e.content), this._cancelBtn && (e.cancelText ? this._cancelBtn.label = e.cancelText : this._cancelBtn.label = "取消", 
            e.cancelColor ? this._cancelBtn.labelColors = e.cancelColor + "," + e.cancelColor + "," + e.cancelColor : this._cancelBtn.labelColors = "#000000,#000000,#000000"), 
            [ this._confirmBtn, this._singleConfirmBtn ].forEach(function(t) {
                e.confirmText ? t.label = e.confirmText : t.label = "确定", e.confirmColor ? t.labelColors = e.confirmColor + "," + e.confirmColor + "," + e.confirmColor : t.labelColors = "#576B95,#576B95,#576B95";
            }), e.showCancel ? (this._cancelBtn.visible = this._confirmBtn.visible = !0, this._singleConfirmBtn.visible = !1) : (this._cancelBtn.visible = this._confirmBtn.visible = !1, 
            this._singleConfirmBtn.visible = !0);
        }
    }, {
        key: "onCancelTouched",
        value: function onCancelTouched() {
            UIManager.hideUI(UIKeys.Modal), doCallback$1(this._cb, !1);
        }
    }, {
        key: "onConfirmTouched",
        value: function onConfirmTouched() {
            UIManager.hideUI(UIKeys.Modal), doCallback$1(this._cb, !0);
        }
    } ]);
    return Modal;
}(BaseUI);

var C_Max_Str_Length_Of_Loading_Content = 14;

var Waiting = /* */ function(_BaseUI5) {
    _inherits2(Waiting, _BaseUI5);
    var _super50 = _createSuper2(Waiting);
    function Waiting() {
        var _this130;
        _classCallCheck2(this, Waiting);
        _this130 = _super50.call(this), _this130._bg = null, _this130._icon = null, _this130._content = null;
        return _this130;
    }
    _createClass2(Waiting, [ {
        key: "onAwake",
        value: function onAwake() {
            this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType;
        }
    }, {
        key: "onEnable",
        value: function onEnable() {
            this._initUI();
        }
    }, {
        key: "_initUI",
        value: function _initUI() {
            var e = seekNodeByName(this.owner, "bg");
            e && (this._bg = e);
            var t = seekNodeByName(this.owner, "icon");
            t && (t.rotateForever = function() {
                t._isRotating || (t._isRotating = !0, Scheduler.schedule("Rotate_Of_Loading_Icon", function() {
                    t.rotation = (t.rotation - 45) % 360;
                }, !1, 100));
            }, t.stopRotate = function() {
                t._isRotating && (t._isRotating = !1, t.rotation = 0, Scheduler.unschedule("Rotate_Of_Loading_Icon"));
            }, t._isRotating = !1, this._icon = t);
            var n = seekNodeByName(this.owner, "content");
            n && (this._content = n);
        }
    }, {
        key: "onShow",
        value: function onShow() {
            this._icon && this._icon.rotateForever();
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            this._content && (this._content.text = cutString(e, C_Max_Str_Length_Of_Loading_Content));
        }
    }, {
        key: "onHide",
        value: function onHide() {
            this._icon && this._icon.stopRotate();
        }
    } ]);
    return Waiting;
}(BaseUI);

var Finger = /* */ function(_BaseUI6) {
    _inherits2(Finger, _BaseUI6);
    var _super51 = _createSuper2(Finger);
    function Finger() {
        var _this131;
        _classCallCheck2(this, Finger);
        _this131 = _super51.call(this), _this131._finger = null, _this131._release = null, 
        _this131._press = null;
        return _this131;
    }
    _createClass2(Finger, [ {
        key: "onAwake",
        value: function onAwake() {
            this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType;
        }
    }, {
        key: "onEnable",
        value: function onEnable() {
            this._initUI();
        }
    }, {
        key: "_initUI",
        value: function _initUI() {
            var e = seekNodeByName(this.owner, "finger");
            e && (this._finger = e);
            var t = seekNodeByName(this.owner, "release");
            t && (this._release = t);
            var n = seekNodeByName(this.owner, "press");
            n && (this._press = n);
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            var _this132 = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2e3;
            this._release.visible = !0, this._press.visible = !1, this.fixPos(e), Scheduler.schedule("Auto_Change_Fingers", function() {
                _this132._release.visible = !_this132._release.visible, _this132._press.visible = !_this132._press.visible;
            }, !1, 200), t > 0 && Scheduler.schedule("Auto_Close_Finger", function() {
                UIManager.hideUI(UIKeys.Finger).catch(function(e) {});
            }, !1, t, 1);
        }
    }, {
        key: "fixPos",
        value: function fixPos(e) {
            var t = this._finger.parent.globalToLocal(e, !0);
            this._finger.x = t.x, this._finger.y = t.y;
        }
    }, {
        key: "onHide",
        value: function onHide() {
            Scheduler.unschedule("Auto_Change_Fingers"), Scheduler.unschedule("Auto_Close_Finger");
        }
    } ]);
    return Finger;
}(BaseUI);

var MaskPopup = /* */ function(_BaseUI7) {
    _inherits2(MaskPopup, _BaseUI7);
    var _super52 = _createSuper2(MaskPopup);
    function MaskPopup() {
        _classCallCheck2(this, MaskPopup);
        return _super52.call(this);
    }
    _createClass2(MaskPopup, [ {
        key: "onAwake",
        value: function onAwake() {
            this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType;
        }
    }, {
        key: "onEnable",
        value: function onEnable() {
            this._initUI();
        }
    }, {
        key: "_initUI",
        value: function _initUI() {
            var e = seekNodeByName(this.owner, "blockBtn");
            e && (this._blockBtn = e, e.on("click", null, function() {
                this.onBlockTouched(e);
            }.bind(this)));
        }
    }, {
        key: "onInit",
        value: function onInit() {}
    }, {
        key: "onHide",
        value: function onHide() {}
    }, {
        key: "onBlockTouched",
        value: function onBlockTouched() {
            console.log("view flow is progressing...");
        }
    } ]);
    return MaskPopup;
}(BaseUI);

var PrivacyPopup = /* */ function(_BaseUI8) {
    _inherits2(PrivacyPopup, _BaseUI8);
    var _super53 = _createSuper2(PrivacyPopup);
    function PrivacyPopup() {
        var _this133;
        _classCallCheck2(this, PrivacyPopup);
        _this133 = _super53.call(this), _this133.Frames = {}, _this133.Privates = {};
        return _this133;
    }
    _createClass2(PrivacyPopup, [ {
        key: "bindName",
        value: function bindName(e, t) {
            e[t.name] = t;
            for (var n = 0; n < t.numChildren; n++) {
                this.bindName(e, t.getChildAt(n));
            }
        }
    }, {
        key: "onAwake",
        value: function onAwake() {
            this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType;
        }
    }, {
        key: "onEnable",
        value: function onEnable() {
            this.bindName(this, this.owner), this._initUI(), this.ConfirmUI.visible = !1, this.InfoUI.visible = !1;
        }
    }, {
        key: "_initUI",
        value: function _initUI() {
            this.UnagreenBtn.on(Laya.Event.CLICK, this, this.onUnagreenBtn), this.ConfirmExit.on(Laya.Event.CLICK, this, this.onConfirmExit), 
            this.BackAgreenBtn.on(Laya.Event.CLICK, this, this.onBackAgreenBon), this.ConfirmCloseBtn.on(Laya.Event.CLICK, this, this.onConfirmCloseBtn), 
            this.AgreenBtn.on(Laya.Event.CLICK, this, this.onAgreenBtn), this.ServiceBtn.on(Laya.Event.CLICK, this, this.onServiceBtn), 
            this.PrivacyBtn.on(Laya.Event.CLICK, this, this.onPrivacyBtn), this.closeBtn.on(Laya.Event.CLICK, this, this.oncloseBtn), 
            this.OkBtn.on(Laya.Event.CLICK, this, this.onOkBtn), this.LabPanel.vScrollBarSkin = "";
        }
    }, {
        key: "onOkBtn",
        value: function onOkBtn() {
            var _this134 = this;
            playBtnTouchAction(this.OkBtn, function() {
                _this134.InfoUI.visible = !1, _this134.hideFrame(1), _this134.hideFrame(2);
            });
        }
    }, {
        key: "oncloseBtn",
        value: function oncloseBtn() {
            playBtnTouchAction(this.closeBtn, function() {
                UIManager.hideUI(UIKeys.Private);
            });
        }
    }, {
        key: "onPrivacyBtn",
        value: function onPrivacyBtn() {
            this.initHTMLFrame("https://r.game.hnquyou.com/upload/games/privacy/privacy2.html?company=" + HLSDK_CFG.CompanyName, 1);
        }
    }, {
        key: "onServiceBtn",
        value: function onServiceBtn() {
            this.initHTMLFrame("https://r.game.hnquyou.com/upload/games/privacy/agreement2.html?app_name=" + HLSDK_CFG.GameName + "=" + HLSDK_CFG.CompanyName, 2);
        }
    }, {
        key: "onAgreenBtn",
        value: function onAgreenBtn() {
            Laya.LocalStorage.setItem("Private", "1"), UIManager.hideUI(UIKeys.Private);
        }
    }, {
        key: "onConfirmCloseBtn",
        value: function onConfirmCloseBtn() {
            var _this135 = this;
            playBtnTouchAction(this.ConfirmCloseBtn, function() {
                _this135.ConfirmUI.visible = !1;
            });
        }
    }, {
        key: "onBackAgreenBon",
        value: function onBackAgreenBon() {
            var _this136 = this;
            playBtnTouchAction(this.BackAgreenBtn, function() {
                _this136.ConfirmUI.visible = !1;
            });
        }
    }, {
        key: "onConfirmExit",
        value: function onConfirmExit() {
            playBtnTouchAction(this.ConfirmExit, function() {
                PlatHelper.exitApp();
            });
        }
    }, {
        key: "onUnagreenBtn",
        value: function onUnagreenBtn() {
            var _this137 = this;
            playBtnTouchAction(this.UnagreenBtn, function() {
                _this137.ConfirmUI.visible = !0;
            });
        }
    }, {
        key: "hideFrame",
        value: function hideFrame(e) {
            var t = this.Frames[e];
            null != t && (t.hidden = !0);
        }
    }, {
        key: "request",
        value: function request(e, t) {
            var _this138 = this;
            if (null == this.Privates[t]) {
                this.Privates[t] = "";
                var n = new Laya.HttpRequest();
                n.on(Laya.Event.COMPLETE, this, function(e) {
                    _this138.Privates[t] = _this138.processLab(e), _this138.LabValue.text = _this138.Privates[t], 
                    _this138.LabValue.height = _this138.LabValue.textHeight;
                }), this.LabValue.text = "", n.send(e);
            } else this.LabValue.text = this.Privates[t], this.LabValue.height = this.LabValue.textHeight;
        }
    }, {
        key: "processLab",
        value: function processLab(e) {
            var t = 0, n = 0, i = "";
            for (t = (e = (e = (e = (e = (e = (e = (e = (e = e.replace("[本公司]", HLSDK_CFG.CompanyName)).replace("[本游戏]", HLSDK_CFG.GameName)).substring(e.indexOf("<body>"))).replace(/ /g, "")).replace(/&emsp;/g, "")).replace(/&ldquo;/g, "")).replace(/&rdquo;/g, "")).replace(/&nbsp;/g, "")).indexOf(">", n), 
            n = e.indexOf("<", t); t >= 0 && n >= 0; ) {
                i += e.substring(t + 1, n), t = e.indexOf(">", n), n = e.indexOf("<", t);
            }
            return i = (i += e.substring(t + 1, e.length - 1)).substring(0, i.indexOf("function"));
        }
    }, {
        key: "initHTMLFrame",
        value: function initHTMLFrame(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            switch (t) {
              case 1:
                this.Title.text = "隐私政策";
                break;

              default:
                this.Title.text = "服务条款";
            }
            if (this.LabValue.text = "", null != window.qq || null != window.qg) this.request(e, t); else {
                var n = this.Frames[t];
                null == n && (n = Laya.Browser.window.document.createElement("iframe"), this.Frames[t] = n, 
                Laya.Browser.document.body.appendChild(n), n.setAttribute("src", e), n.setAttribute("frameborder", 0)), 
                Laya.Utils.fitDOMElementInArea(n, this.InfoPanel, 30, this.InfoPanel.y, this.InfoPanel.width - 80, this.InfoPanel.height - 270), 
                n.hidden = !1;
            }
            this.InfoUI.visible = !0;
        }
    }, {
        key: "onInit",
        value: function onInit(e) {
            "1" == Laya.LocalStorage.getItem("Private") ? (this.UnagreenBtn.visible = !1, this.AgreenBtn.visible = !1, 
            this.closeBtn.visible = !0) : this.closeBtn.visible = !1;
        }
    } ]);
    return PrivacyPopup;
}(BaseUI);

var modalInfo = {
    key: UIKeys.Modal,
    zOrder: 996,
    isAutoDestory: !1,
    cls: Modal,
    clsPath: "script/game/ui/popup/Modal.js",
    prefab: "hlsdk/res/prefab/modalView.json"
}, loadingInfo = {
    key: UIKeys.Loading,
    zOrder: 998,
    isAutoDestory: !1,
    cls: Waiting,
    clsPath: "script/game/ui/popup/Waiting.js",
    prefab: "hlsdk/res/prefab/loadingView.json"
}, tipsInfo = {
    key: UIKeys.Tips,
    zOrder: 999,
    isAutoDestory: !1,
    cls: Tips,
    clsPath: "script/game/ui/popup/Tips.js",
    prefab: "hlsdk/res/prefab/tipsView.json"
}, fingerInfo = {
    key: UIKeys.Finger,
    zOrder: 990,
    isAutoDestory: !1,
    cls: Finger,
    clsPath: "script/game/ui/popup/Finger.js",
    prefab: "hlsdk/res/prefab/fingerView.json"
}, maskInfo = {
    key: UIKeys.Mask,
    zOrder: 100,
    isAutoDestory: !1,
    cls: MaskPopup,
    clsPath: "script/game/ui/popup/MaskPopup.js",
    prefab: "hlsdk/res/prefab/maskView.json"
}, privateInfo = {
    key: UIKeys.Private,
    zOrder: 800,
    isAutoDestory: !1,
    cls: PrivacyPopup,
    clsPath: "script/game/ui/popup/PrivacyPopup.js",
    prefab: "hlsdk/res/prefab/agreementUI.json",
    customResPathes: [ "hlsdk/res/border.png", "hlsdk/res/44.png", "hlsdk/res/close_btn.png", "hlsdk/res/43.png" ]
};

var UIRegisterInfos = null;

isLoadQQConfig() ? UIRegisterInfos = [ fingerInfo, maskInfo, privateInfo ].concat(QQ_UIRegisterInfos) : isLoadTTConfig() ? UIRegisterInfos = [ fingerInfo, maskInfo, tipsInfo ].concat(TT_UIRegisterInfos) : isLoadOPPOConfig() ? UIRegisterInfos = [ fingerInfo, maskInfo, tipsInfo, privateInfo ].concat(OPPO_UIRegisterInfos) : isLoadVIVOConfig() ? UIRegisterInfos = [ fingerInfo, maskInfo, tipsInfo, privateInfo ].concat(VIVO_UIRegisterInfos) : isLoadWXConfig$1() ? UIRegisterInfos = [ fingerInfo, maskInfo, privateInfo ].concat(WX_UIRegisterInfos) : isLoadNativeConfig() ? UIRegisterInfos = [ fingerInfo, maskInfo, tipsInfo, privateInfo ].concat(Native_UIRegisterInfos) : console.error("Not Support This Platform, check hlsdk_config.js first..."), 
_isWINPlatform() && (-1 === UIRegisterInfos.indexOf(modalInfo) && UIRegisterInfos.push(modalInfo), 
-1 === UIRegisterInfos.indexOf(loadingInfo) && UIRegisterInfos.push(loadingInfo), 
-1 === UIRegisterInfos.indexOf(tipsInfo) && UIRegisterInfos.push(tipsInfo), -1 === UIRegisterInfos.indexOf(privateInfo) && UIRegisterInfos.push(privateInfo)), 
UIRegisterInfos.forEach(function(e) {
    if (e.prefab = convertToScreneOrientationPrefabPath(e.prefab), Array.isArray(e.dependentPrefabs)) for (var t = 0; t < e.dependentPrefabs.length; t++) {
        e.dependentPrefabs[t] = convertToScreneOrientationPrefabPath(e.dependentPrefabs[t]);
    }
});

var UIRegisterInfos$1 = UIRegisterInfos, WX_UIAtlas = [ "hlsdk/res/atlas/ad.atlas", "hlsdk/res/atlas/plat/wx.atlas" ], QQ_UIAtlas = [], TT_UIAtlas = [], Native_UIAtlas = [], UIBaseAtlas = [ "hlsdk/res/atlas/comm.atlas" ], UIAtlas = [];

isLoadQQConfig() ? UIAtlas = UIBaseAtlas.concat(QQ_UIAtlas) : isLoadTTConfig() ? UIAtlas = UIBaseAtlas.concat(TT_UIAtlas) : isLoadOPPOConfig() ? UIAtlas = UIBaseAtlas : isLoadVIVOConfig() ? UIAtlas = UIBaseAtlas : isLoadWXConfig$1() ? UIAtlas = UIBaseAtlas.concat(WX_UIAtlas) : isLoadNativeConfig() ? UIAtlas = UIBaseAtlas.concat(Native_UIAtlas) : console.error("Not Support This Platform, check hlsdk_config.js first...");

var UIAtlas$1 = UIAtlas;

var WidgetMgr = /* */ function(_Laya$Script6) {
    _inherits2(WidgetMgr, _Laya$Script6);
    var _super54 = _createSuper2(WidgetMgr);
    function WidgetMgr() {
        var _this139;
        _classCallCheck2(this, WidgetMgr);
        _this139 = _super54.call(this), _this139.layoutParent = "parent", _this139.isAlignTop = !1, 
        _this139.top = 0, _this139.isAlignBottom = !1, _this139.bottom = 0, _this139.isAlignLeft = !1, 
        _this139.left = 0, _this139.isAlignRight = !1, _this139.right = 0, _this139.isAlignHorizontalCenter = !1, 
        _this139.horizontalCenter = 0, _this139.isAlignVerticalCenter = !1, _this139.verticalCenter = 0;
        return _this139;
    }
    _createClass2(WidgetMgr, [ {
        key: "onEnable",
        value: function onEnable() {
            Laya.stage.on(Laya.Event.RESIZE, this, this.onResize), this.onLayout();
        }
    }, {
        key: "onDisable",
        value: function onDisable() {
            Laya.stage.off(Laya.Event.RESIZE, this, this.onResize);
        }
    }, {
        key: "onResize",
        value: function onResize() {
            this.onLayout();
        }
    }, {
        key: "onLayout",
        value: function onLayout() {
            // (function() {
            //     console.log("Layout ...");
            //     var e = this.getLayoutParent();
            //     e && (this.isAlignLeft && this.isAlignRight && (this.owner.width = e.width - this.left - this.right), 
            //     this.isAlignTop && this.isAlignBottom && (this.owner.height = e.height - this.top - this.bottom), 
            //     this.isAlignHorizontalCenter ? this.owner.x = e.width / 2 - this.owner.width + this._getLayoutCenterOffsetX() + this.horizontalCenter : this.isAlignLeft ? this.owner.x = this.left + this._getLayoutCenterOffsetX() : this.isAlignRight && (this.owner.x = e.width - this.right - this.owner.width + this._getLayoutCenterOffsetX()), 
            //     this.isAlignVerticalCenter ? this.owner.y = e.height / 2 - this.owner.height + this._getLayoutCenterOffsetY() + this.verticalCenter : this.isAlignTop ? this.owner.y = this.top + this._getLayoutCenterOffsetY() : this.isAlignBottom && (this.owner.y = e.height - this.bottom - this.owner.height + this._getLayoutCenterOffsetY()));
            // }).bind(this)();
        }
    }, {
        key: "getLayoutParent",
        value: function getLayoutParent() {
            return "parent" === this.layoutParent ? this.owner.parent : DesignSize.width < DesignSize.height ? {
                width: DesignSize.width,
                height: Laya.stage.height / Laya.stage.width * DesignSize.width
            } : {
                height: DesignSize.height,
                width: Laya.stage.width / Laya.stage.height * DesignSize.height
            };
        }
    }, {
        key: "_getLayoutCenterOffsetX",
        value: function _getLayoutCenterOffsetX() {
            return void 0 === this.owner.pivotX || isNaN(this.owner.pivotX) || void 0 === this.owner.anchorX || isNaN(this.owner.anchorX) ? void 0 === this.owner.pivotX || isNaN(this.owner.pivotX) ? this.owner.width * this.owner.anchorX : this.owner.pivotX : 0 === this.owner.pivotX && 0 === this.owner.anchorX ? 0 : 0 !== this.owner.pivotX ? this.owner.pivotX : this.owner.width * this.owner.anchorX;
        }
    }, {
        key: "_getLayoutCenterOffsetY",
        value: function _getLayoutCenterOffsetY() {
            return void 0 === this.owner.pivotY || isNaN(this.owner.pivotY) || void 0 === this.owner.anchorY || isNaN(this.owner.anchorY) ? void 0 === this.owner.pivotY || isNaN(this.owner.pivotY) ? this.owner.height * this.owner.anchorY : this.owner.pivotY : 0 === this.owner.pivotY && 0 === this.owner.anchorY ? 0 : 0 !== this.owner.pivotY ? this.owner.pivotY : this.owner.height * this.owner.anchorY;
        }
    } ]);
    return WidgetMgr;
}(Laya.Script);

function getRunningScene() {
    if (isLayaEngine()) {
        if (HLSDKLocalData._runningScene) return HLSDKLocalData._runningScene;
        var e = Laya.stage;
        return e ? (e.mouseThrough || (e.mouseThrough = !0), e) : null;
    }
    return cc.director.getScene();
}

var _UIManager = /* */ function() {
    function _UIManager() {
        _classCallCheck2(this, _UIManager);
        this._UIInfos = {}, this._UIRoot = null;
    }
    _createClass2(_UIManager, [ {
        key: "registerAllUIs",
        value: function registerAllUIs(e) {
            var _this140 = this;
            var t = Laya.ClassUtils.regClass;
            t("script/game/ctrl/WidgetMgr.js", WidgetMgr), t("script/game/ctrl/AdvLoadMgr.js", AdvLoadMgr), 
            t("script/game/ctrl/AutoScale.js", AutoScale), t("script/game/ctrl/AutoShake.js", AutoShake);
            var n = [].concat(UIAtlas$1);
            if (UIRegisterInfos$1.forEach(function(e) {
                t(e.clsPath, e.cls), n.push(e.prefab), Array.isArray(e.dependentPrefabs) && e.dependentPrefabs.forEach(function(e) {
                    n.push(e);
                }), _this140._registerUI(e.key, e.zOrder, e.isAutoDestory, e.cls, e.prefab, e.customResPathes);
            }), checkString(SubConfig.path)) for (var _e85 = 0; _e85 < n.length; _e85++) {
                n[_e85] = SubConfig.path + n[_e85];
            }
            if (n.length > 0) {
                if (isLayaEngine()) {
                    var _t62 = getLayaMiniAdapter();
                    _t62 && (_t62.nativefiles = _t62.nativefiles.concat([ SubConfig.path + "hlsdk/res/" ])), 
                    PreloadConfig.isPreloadResInInit ? Laya.loader.create(n, Laya.Handler.create(null, function() {
                        console.log("UIManager: all ui atlas and prefabs are loaded..."), doCallback$1(e);
                    })) : doCallback$1(e);
                } else doCallback$1(e);
            } else doCallback$1(e);
        }
    }, {
        key: "unregisterAllUIs",
        value: function unregisterAllUIs() {
            for (var e in this._UIInfos) {
                var t = this._UIInfos[e];
                this._destroyUI(t);
            }
            this._UIInfos = {};
        }
    }, {
        key: "tempHideAllUIs",
        value: function tempHideAllUIs() {
            var _this141 = this;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var t = function t(e) {
                var t = _this141.getUI(e);
                if (Array.isArray(t)) {
                    var _e86 = t[0], n = t[1];
                    if (_e86 && n && n.isOnShow()) return n.tempHideUI(), n;
                }
                return null;
            };
            !0 === e.couplet && (HLSDKLocalData._tempHides.ui.couplet = t(UIKeys.Couplet)), 
            !0 === e.scroll && (HLSDKLocalData._tempHides.ui.scroll = t(UIKeys.Scroll), HLSDKLocalData._tempHides.ui.scrollWithName = t(UIKeys.ScrollWithName)), 
            !0 === e.matrix && (HLSDKLocalData._tempHides.ui.matrix = t(UIKeys.Matrix));
        }
    }, {
        key: "showAllTempHideUIs",
        value: function showAllTempHideUIs() {
            for (var e in HLSDKLocalData._tempHides.ui) {
                var t = HLSDKLocalData._tempHides.ui[e];
                t && (t.tempShowUI(), HLSDKLocalData._tempHides.ui[e] = null);
            }
        }
    }, {
        key: "showUI",
        value: function showUI(e, t) {
            var _this142 = this;
            var n = this._doCheck(e, "showUI");
            if (n) {
                var _e87 = function _e87(e) {
                    return n.closeCb = t, n.node.zOrder = n.zOrder, n.clsObj.showUI.apply(n.clsObj, e), 
                    new Promise(function(e, t) {
                        e([ n.node, n.clsObj ]);
                    });
                }, i = [], a = null;
                arguments.length > 2 && ((i = Array.prototype.slice.call(arguments)).shift(), i.shift(), 
                a = i[0]);
                var o = function o(e) {
                    return "https://image.game.hnquyou.com/upload/HLSDK/crazys/" + e.tpl + "/";
                }, s = function s(e) {
                    return e.split("/")[0];
                }, r = SubConfig.path + n.prefab, l = [ r ], d = "";
                return null != a && null != a.tpl && "" != a.tpl && (d = a.tpl, r = o(a) + s(d) + "_" + (isLoadLandscapeConfig$1() ? "landscape" : "portrait") + ".json", 
                l = [ r ], d.indexOf("UNATLAS") < 0 && (l.push(o(a) + s(d) + ".atlas"), l.push(o(a) + s(d) + ".png"))), 
                null != n.node && n.tpl != d && (n.node.destroy(), n.node = null), n.tpl = d, n.node ? _e87(i) : new Promise(function(t, a) {
                    Laya.loader.create(l, Laya.Handler.create(null, function(o) {
                        if (n.node) _e87(i).then(function(e) {
                            t(e);
                        }); else {
                            if (o = Laya.loader.getRes(r), "" == d && checkString(SubConfig.path) && Array.isArray(n.customResPathes)) {
                                var _e88 = JSON.stringify(o);
                                n.customResPathes.forEach(function(t) {
                                    _e88 = _e88.replace(new RegExp(t, "gm"), SubConfig.path + t);
                                }), o = JSON.parse(_e88);
                            }
                            var _s5 = new Laya.Prefab();
                            _s5.json = o, n.node = _s5.create(), "string" == typeof n.cls ? n.clsObj = getComponentByName(n.node, n.cls) : n.clsObj = n.node.getComponent(n.cls), 
                            null == n.clsObj && (n.clsObj = n.node.addComponent(n.cls));
                            var _l = _this142._getUIRoot();
                            _l ? (_l.addChild(n.node), "" != d && (n.node.size(n.node.width, n.node.height), 
                            n.node.bottom = n.node.top = n.node.right = n.node.left = 0), _e87(i).then(function(e) {
                                t(e);
                            })) : a();
                        }
                    }));
                });
            }
            return new Promise(function(e, t) {
                t();
            });
        }
    }, {
        key: "hideUI",
        value: function hideUI(e) {
            var _this143 = this;
            var t = this._doCheck(e, "hideUI");
            return t && t.node && t.clsObj && t.clsObj.isOnShow() ? new Promise(function(e, n) {
                var _i14 = null;
                _i14 = function i() {
                    t.clsObj.unregisterCallback("close", _i14);
                    var n = t.closeCb;
                    t.closeCb = null, t.isAutoDestory && _this143._destroyUI(t), "function" == typeof n && n(), 
                    e();
                }, t.clsObj.registerCallback("close", _i14), t.clsObj.hideUI();
            }) : new Promise(function(e, t) {
                e();
            });
        }
    }, {
        key: "hideAllUIs",
        value: function hideAllUIs() {
            var _this144 = this;
            return new Promise(function(e, t) {
                var n = [];
                for (var _e89 in _this144._UIInfos) {
                    var _t63 = _this144._UIInfos[_e89];
                    _t63 && _t63.node && n.push(_this144.hideUI(_e89));
                }
                n.length > 0 ? Promise.all(n).then(function() {
                    e();
                }) : e();
            });
        }
    }, {
        key: "getUI",
        value: function getUI(e) {
            var t = this._doCheck(e, "getUI");
            return t ? [ t.node, t.clsObj ] : null;
        }
    }, {
        key: "zOrderUI",
        value: function zOrderUI(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var n = this._doCheck(e, "zOrderUI");
            n && n.node && (n.node.zOrder = t + n.zOrder);
        }
    }, {
        key: "_getUIRoot",
        value: function _getUIRoot() {
            var e = getRunningScene();
            return e ? this._UIRoot ? (this._UIRoot.parent || e.addChild(this._UIRoot), this._UIRoot) : (this._UIRoot || (this._UIRoot = new Laya.Box(), 
            this._UIRoot.name = "hl_uiRoot", this._UIRoot.pivotX = 0, this._UIRoot.pivotY = 0, 
            this._UIRoot.zOrder = 999, this._UIRoot.mouseThrough = !0, DesignSize.width < DesignSize.height ? (this._UIRoot.width = DesignSize.width, 
            this._UIRoot.height = Laya.stage.height / Laya.stage.width * DesignSize.width, this._UIRoot.scaleX = Laya.stage.width / DesignSize.width, 
            this._UIRoot.scaleY = this._UIRoot.scaleX) : (this._UIRoot.height = DesignSize.height, 
            this._UIRoot.width = Laya.stage.width / Laya.stage.height * DesignSize.height, this._UIRoot.scaleY = Laya.stage.height / DesignSize.height, 
            this._UIRoot.scaleX = this._UIRoot.scaleY), e.addChild(this._UIRoot)), this._UIRoot) : (console.error("Not Support Engine..."), 
            null);
        }
    }, {
        key: "_registerUI",
        value: function _registerUI(e, t, n, i, a, o) {
            checkString(e) ? void 0 === this._UIInfos[e] ? checkString(a) && a.lastIndexOf(".json") === a.length - 5 ? (this._UIInfos[e] = {
                key: e,
                zOrder: t,
                isAutoDestory: n,
                cls: i,
                prefab: a,
                customResPathes: o,
                node: null,
                clsObj: null,
                closeCb: null,
                tpl: ""
            }, console.log("UIManager.registerUI: {0} UI has registered successful...".format(e))) : console.error("UIManager.registerUI: prefab must be a type of string and not empty and end with '.json'...") : console.error("UIManager.registerUI: {0} has registered before...".format(e)) : console.error("UIManager.registerUI: key must be a type of string and not empty...");
        }
    }, {
        key: "_doCheck",
        value: function _doCheck(e, t) {
            if (!checkString(e)) return console.error("UIManager.{0}: key must be a type of string and not empty...".format(t)), 
            null;
            var n = this._UIInfos[e];
            return void 0 === n ? (console.error("UIManager.{0}: {1} has not registered before...".format(t, e)), 
            null) : n;
        }
    }, {
        key: "_destroyUI",
        value: function _destroyUI(e) {
            e && e.node && (e.node.destroy(), e.node = null, e.clsObj = null);
        }
    } ]);
    return _UIManager;
}();

var UIManager = new _UIManager();

var BaseFlow = /* */ function() {
    function BaseFlow() {
        _classCallCheck2(this, BaseFlow);
        this._flowCfg = null;
    }
    _createClass2(BaseFlow, [ {
        key: "startFlow",
        value: function startFlow(e) {
            return this._flowCfg = e, this._onStartFlow(e);
        }
    }, {
        key: "endFlow",
        value: function endFlow() {
            return this._flowCfg ? this._onEndFlow(this._flowCfg) : Promise.resolve();
        }
    }, {
        key: "_onStartFlow",
        value: function _onStartFlow(e) {
            return "function" == typeof this.onStartFlow ? this.onStartFlow(e) : Promise.reject("Not Implement...");
        }
    }, {
        key: "_onEndFlow",
        value: function _onEndFlow(e) {
            return "function" == typeof this.onEndFlow ? this.onEndFlow(e) : Promise.reject("Not Implement...");
        }
    }, {
        key: "_checkBlackState",
        value: function _checkBlackState(e, t) {
            return !!isGlobalMistakeEnabled() && checkBlackState(e, t);
        }
    }, {
        key: "_getAdvPagePath",
        value: function _getAdvPagePath() {
            var e = this._flowCfg.config.advPath;
            return checkString(e) ? e.indexOf("/") === e.lastIndexOf("/") ? e : e.substring(0, e.lastIndexOf("/")) : "";
        }
    } ]);
    return BaseFlow;
}();

var BaseComponentFlow = /* */ function(_BaseFlow) {
    _inherits2(BaseComponentFlow, _BaseFlow);
    var _super55 = _createSuper2(BaseComponentFlow);
    function BaseComponentFlow() {
        var _this145;
        _classCallCheck2(this, BaseComponentFlow);
        _this145 = _super55.call(this), _this145._baseZOrder = 0;
        return _this145;
    }
    _createClass2(BaseComponentFlow, [ {
        key: "startFlow",
        value: function startFlow(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this._baseZOrder = t, _get2(_getPrototypeOf2(BaseComponentFlow.prototype), "startFlow", this).call(this, e);
        }
    }, {
        key: "onStartFlow",
        value: function onStartFlow(e) {
            try {
                var t = e.type;
                if (-1 === Object.keys(SupportComponentTypes).indexOf(t)) return Promise.reject("Not Support...");
                var n = this._checkBlackState(e.blackArea, e.blackScene);
                isObject$1(e.config) && !Array.isArray(e.config) ? e.config.isMistakeEnabled = n ? "1" : "0" : e.config = {
                    isMistakeEnabled: n ? "1" : "0"
                }, e.config.advPath = e.workflow_id + "/" + e.node_id + "/" + e.element_id, PlatHelper.getPlat() && PlatHelper.getPlat().h_ShowComponent ? PlatHelper.getPlat().h_ShowComponent(e.config.advPath) : h_ShowComponent(e.config.advPath);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return Promise.reject(e);
            }
            return this.onStartFlow_Extend(e);
        }
    }, {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            return Promise.resolve();
        }
    }, {
        key: "onEndFlow",
        value: function onEndFlow() {
            return Promise.resolve("Not Need...");
        }
    } ]);
    return BaseComponentFlow;
}(BaseFlow);

var _ComponentBannerMgr = /* */ function(_BaseComponentFlow) {
    _inherits2(_ComponentBannerMgr, _BaseComponentFlow);
    var _super56 = _createSuper2(_ComponentBannerMgr);
    function _ComponentBannerMgr() {
        var _this146;
        _classCallCheck2(this, _ComponentBannerMgr);
        _this146 = _super56.call(this), _this146.DelayID = 0, _this146.HideBannerID = 0, 
        _this146.ShowBannerID = 0, _this146.ShowBannerIndex = 0, _this146.ShowBannerCount = 0, 
        _this146.ShowBannerTime = 0, _this146.qqRefreshGap = 0, _this146.bannerIndexs = [];
        return _this146;
    }
    _createClass2(_ComponentBannerMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this147 = this;
            return new Promise(function(t, n) {
                try {
                    var i = e.config;
                    if (isLoadWXConfig$1()) {
                        _this147.ShowBannerCount = _this147.ShowBannerIndex = Number(i.bannerShowCount || 0), 
                        _this147.ShowBannerTime = Number(i.bannerShowTime || 3e4), adv_interface$1.stopAutoRefreshBannerAd();
                        var _e90 = function _e90() {
                            _this147.ShowBannerIndex--, adv_interface$1.showBannerAd(0, {
                                min: "1" === i.isMin,
                                out: "1" === i.isOutScreen
                            }, _this147._getAdvPagePath(), function() {}, function(e) {}), _this147.ShowBannerTime > 0 && (_this147.HideBannerID = setTimeout(_n27, Math.max(1e3, _this147.ShowBannerTime)));
                        }, _n27 = function _n27() {
                            adv_interface$1.hideBannerAd(), (_this147.ShowBannerIndex > 0 || 0 == _this147.ShowBannerCount) && (_this147.ShowBannerID = setTimeout(_e90, Number(i.bannerShowSpace || 0)));
                        }, a = Number(i.bannerDelay || 0);
                        a > 0 ? _this147.DelayID = setTimeout(_e90, a) : _e90(), t();
                    } else {
                        if (checkString(i.bannerIndex)) {
                            i.bannerIndex.split("||").forEach(function(e) {
                                NaN !== parseInt(e) && 0 !== parseInt(e) && _this147.bannerIndexs.push(parseInt(e));
                            });
                        }
                        void 0 !== i.refreshGap && parseInt(i.refreshGap) > 0 && !Switch.isPublishingSync() && !HLSDKLocalData._globalBannerCfg.isLongstay ? adv_interface$1.showAutoRefreshBannerAd(parseInt(i.refreshGap), _this147.bannerIndexs, {
                            min: "1" === i.isMin,
                            out: "1" === i.isOutScreen
                        }, _this147._getAdvPagePath(), function() {
                            t();
                        }, function(e) {
                            n(e);
                        }) : (adv_interface$1.stopAutoRefreshBannerAd(), adv_interface$1.showBannerAd(bannerIndexs.length > 0 ? bannerIndexs[0] : 0, {
                            min: "1" === i.isMin,
                            out: "1" === i.isOutScreen
                        }, _this147._getAdvPagePath(), function() {
                            t();
                        }, function(e) {
                            n(e);
                        }));
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    n(e);
                }
            });
        }
    }, {
        key: "onEndFlow",
        value: function onEndFlow(e) {
            var _this148 = this;
            return new Promise(function(e, t) {
                clearTimeout(_this148.DelayID), clearTimeout(_this148.HideBannerID), clearTimeout(_this148.ShowBannerID), 
                adv_interface$1.hideBannerAd(), e();
            });
        }
    } ]);
    return _ComponentBannerMgr;
}(BaseComponentFlow);

var ComponentBannerMgr = new _ComponentBannerMgr();

var _ComponentCoupletMgr = /* */ function(_BaseComponentFlow2) {
    _inherits2(_ComponentCoupletMgr, _BaseComponentFlow2);
    var _super57 = _createSuper2(_ComponentCoupletMgr);
    function _ComponentCoupletMgr() {
        _classCallCheck2(this, _ComponentCoupletMgr);
        return _super57.call(this);
    }
    _createClass2(_ComponentCoupletMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this149 = this;
            return new Promise(function(t, n) {
                var i = e.config;
                parseInt(i.left) && (console.error("left"), adv_interface$1.showComponentAd("couplet", _this149._getAdvPagePath(), i.leftAdUnitId, {
                    layout: "left",
                    left: parseFloat(i.FromLeftPercent),
                    top: parseFloat(i.leftFromTopPercent)
                }, 0, void 0 !== i.leftSize ? parseInt(i.leftSize) : 0, "vertical", !0, function() {
                    t();
                }, function(e) {
                    n(e);
                })), parseInt(i.right) && (console.error("right"), adv_interface$1.showComponentAd("couplet", _this149._getAdvPagePath(), i.rightAdUnitId, {
                    layout: "right",
                    left: parseFloat(i.FromRightPercent),
                    top: parseFloat(i.rightFromTopPercent)
                }, 0, void 0 !== i.rightSize ? parseInt(i.rightSize) : 0, "vertical", !0, function() {
                    t();
                }, function(e) {
                    n(e);
                }));
            });
        }
    }, {
        key: "onEndFlow",
        value: function onEndFlow(e) {
            return new Promise(function(t, n) {
                var i = e.config;
                parseInt(i.left) && adv_interface$1.hideComponentAd(i.leftAdUnitId), parseInt(i.right) && adv_interface$1.hideComponentAd(i.rightAdUnitId), 
                t();
            });
        }
    } ]);
    return _ComponentCoupletMgr;
}(BaseComponentFlow);

var ComponentCoupletMgr = new _ComponentCoupletMgr();

var _ComponentMatrixMgr = /* */ function(_BaseComponentFlow3) {
    _inherits2(_ComponentMatrixMgr, _BaseComponentFlow3);
    var _super58 = _createSuper2(_ComponentMatrixMgr);
    function _ComponentMatrixMgr() {
        _classCallCheck2(this, _ComponentMatrixMgr);
        return _super58.call(this);
    }
    _createClass2(_ComponentMatrixMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this150 = this;
            return new Promise(function(t, n) {
                var i = e.config;
                if (checkString(i.matrixAdUnitId)) if (isLoadWXConfig$1()) adv_interface$1.showComponentAd("matrix", _this150._getAdvPagePath(), i.matrixAdUnitId, getMatrixInputLayout(i), 0, 0, "landscape", !0, function() {
                    t();
                }, function(e) {
                    n(e);
                }), parseInt(i.preload) && adv_interface$1.hideComponentAd(i.matrixAdUnitId); else if (isLoadQQConfig()) {
                    var _e91 = parseInt(i.row), a = i.matrixAdUnitId.split("|");
                    if (a.length < _e91) for (var _t64 = a.length + 1; _t64 <= _e91; _t64++) {
                        a.push(a[a.length - 1]);
                    }
                    for (var _e92 = 0; _e92 < a.length; _e92++) {
                        adv_interface$1.showComponentAd("matrix", _this150._getAdvPagePath(), a[_e92], {
                            layout: "center",
                            top: parseFloat(i.fromTopPercent) + 7 * _e92,
                            row: parseInt(i.row)
                        }, 0, parseInt(i.matrixSize), "landscape", !0, function() {
                            t();
                        }, function(e) {
                            n(e);
                        });
                    }
                }
            });
        }
    }, {
        key: "onEndFlow",
        value: function onEndFlow(e) {
            return new Promise(function(t, n) {
                var i = e.config;
                adv_interface$1.hideComponentAd(i.matrixAdUnitId), t();
            });
        }
    } ]);
    return _ComponentMatrixMgr;
}(BaseComponentFlow);

var ComponentMatrixMgr = new _ComponentMatrixMgr();

var _ComponentScrollMgr = /* */ function(_BaseComponentFlow4) {
    _inherits2(_ComponentScrollMgr, _BaseComponentFlow4);
    var _super59 = _createSuper2(_ComponentScrollMgr);
    function _ComponentScrollMgr() {
        _classCallCheck2(this, _ComponentScrollMgr);
        return _super59.call(this);
    }
    _createClass2(_ComponentScrollMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this151 = this;
            return new Promise(function(t, n) {
                var i = e.config;
                if (isLoadWXConfig$1()) {
                    var _e93 = getScrollInputLayout(i);
                    adv_interface$1.showComponentAd("scroll", _this151._getAdvPagePath(), i.adUnitId, _e93, 0, void 0 !== i.blockSize ? parseInt(i.blockSize) : 0, _e93.orientation, !0, function() {
                        t();
                    }, function(e) {
                        n(e);
                    });
                } else parseInt(i.top) && adv_interface$1.showComponentAd("scroll", _this151._getAdvPagePath(), i.topAdUnitId, {
                    layout: "top",
                    top: parseFloat(i.fromTopPercent)
                }, 0, void 0 !== i.blockSize ? parseInt(i.blockSize) : 0, "landscape", !0, function() {
                    t();
                }, function(e) {
                    n(e);
                }), parseInt(i.bottom) && adv_interface$1.showComponentAd("scroll", _this151._getAdvPagePath(), i.bottomAdUnitId, {
                    layout: "bottom",
                    bottom: parseFloat(i.fromBottomPercent)
                }, 0, void 0 !== i.blockSize ? parseInt(i.blockSize) : 0, "landscape", !0, function() {
                    t();
                }, function(e) {
                    n(e);
                }), parseInt(i.left) && adv_interface$1.showComponentAd("scroll", _this151._getAdvPagePath(), i.leftAdUnitId, {
                    layout: "left",
                    top: parseFloat(i.fromTopPercent)
                }, 0, void 0 !== i.blockSize ? parseInt(i.blockSize) : 0, "vertical", function() {
                    t();
                }, function(e) {
                    n(e);
                }), parseInt(i.right) && adv_interface$1.showComponentAd("scroll", _this151._getAdvPagePath(), i.rightAdUnitId, {
                    layout: "right",
                    top: parseFloat(i.fromTopPercent)
                }, 0, void 0 !== i.blockSize ? parseInt(i.blockSize) : 0, "vertical", function() {
                    t();
                }, function(e) {
                    n(e);
                });
            });
        }
    }, {
        key: "onEndFlow",
        value: function onEndFlow(e) {
            return new Promise(function(t, n) {
                var i = e.config;
                adv_interface$1.hideComponentAd(i.adUnitId), t();
            });
        }
    } ]);
    return _ComponentScrollMgr;
}(BaseComponentFlow);

var ComponentScrollMgr = new _ComponentScrollMgr();

var _ComponentUIMgr = /* */ function(_BaseComponentFlow5) {
    _inherits2(_ComponentUIMgr, _BaseComponentFlow5);
    var _super60 = _createSuper2(_ComponentUIMgr);
    function _ComponentUIMgr() {
        _classCallCheck2(this, _ComponentUIMgr);
        return _super60.call(this);
    }
    _createClass2(_ComponentUIMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this152 = this;
            return new Promise(function(t, n) {
                var i = e.type;
                UIManager.showUI(i, null, e.config).then(function() {
                    _this152._baseZOrder > 0 && UIManager.zOrderUI(i, _this152._baseZOrder), t();
                }).catch(function(e) {
                    n(e);
                });
            });
        }
    }, {
        key: "onEndFlow",
        value: function onEndFlow(e) {
            return new Promise(function(t, n) {
                var i = e.type;
                UIManager.hideUI(i).then(function() {
                    t();
                }).catch(function(e) {
                    n(e);
                });
            });
        }
    } ]);
    return _ComponentUIMgr;
}(BaseComponentFlow);

var ComponentUIMgr = new _ComponentUIMgr();

var BasePageFlow = /* */ function(_BaseFlow2) {
    _inherits2(BasePageFlow, _BaseFlow2);
    var _super61 = _createSuper2(BasePageFlow);
    function BasePageFlow() {
        var _this153;
        _classCallCheck2(this, BasePageFlow);
        _this153 = _super61.call(this), _this153._isFlowFirstOpen = !1, _this153._isBackToFlow = !1;
        return _this153;
    }
    _createClass2(BasePageFlow, [ {
        key: "startFlow",
        value: function startFlow(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            return this._isFlowFirstOpen = t, this._isBackToFlow = n, _get2(_getPrototypeOf2(BasePageFlow.prototype), "startFlow", this).call(this, e);
        }
    }, {
        key: "onStartFlow",
        value: function onStartFlow(e) {
            try {
                var t = e.type;
                if (-1 === Object.keys(SupportPageTypes).indexOf(t)) return Promise.reject("Not Support...");
                var n = this._checkBlackState(e.blackArea, e.blackScene);
                if (void 0 !== e.blacktype && !this._checkBlackTag(e.blacktype, n)) return Promise.reject("Black State...");
                if (void 0 !== e.newUser && !this._checkUserTag(e.newUser)) return Promise.reject("User Blocked...");
                if (!this._isFlowFirstOpen && e.config && void 0 !== e.config.onlyFirstOpen && "1" === e.config.onlyFirstOpen.toString()) return Promise.reject("Not First...");
                if (this._isFlowFirstOpen && e.config && void 0 !== e.config.notFirstOpen && "1" === e.config.notFirstOpen.toString()) return Promise.reject("First...");
                if (!this.isCanShowPage()) return Promise.reject("Back From Other Flow...");
                isObject$1(e.config) && !Array.isArray(e.config) ? e.config.isMistakeEnabled = n ? "1" : "0" : e.config = {
                    isMistakeEnabled: n ? "1" : "0"
                }, e.config.tpl = e.tpl, e.config.advPath = e.workflow_id + "/" + e.node_id, HLSDKLocalData._lastOnShowPagePath = HLSDKLocalData._curOnShowPagePath, 
                HLSDKLocalData._curOnShowPagePath = e.config.advPath, PlatHelper.getPlat() && PlatHelper.getPlat().h_ShowPage ? PlatHelper.getPlat().h_ShowPage(e.config.advPath) : h_ShowPage(e.config.advPath);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return Promise.reject(e);
            }
            return this.onStartFlow_Extend(e);
        }
    }, {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            return Promise.resolve();
        }
    }, {
        key: "onEndFlow",
        value: function onEndFlow() {
            return Promise.reject("Not Right...");
        }
    }, {
        key: "isCanShowPage",
        value: function isCanShowPage() {
            return !this._isBackToFlow;
        }
    }, {
        key: "_checkBlackTag",
        value: function _checkBlackTag(e, t) {
            return e === BlackTypeTag.All || !t && e === BlackTypeTag.Black || !(!t || e !== BlackTypeTag.Normal);
        }
    }, {
        key: "_checkUserTag",
        value: function _checkUserTag(e) {
            return e === UserTypeTag.All || !(!HLSDKLocalData._isNewPlayer || e !== UserTypeTag.New) || !HLSDKLocalData._isNewPlayer && e === UserTypeTag.Old;
        }
    }, {
        key: "_showCompomentsOfPage",
        value: function _showCompomentsOfPage(e, t) {
            e.forEach(function(e) {
                var n = e.type, i = SupportComponentTypes[n];
                i ? i.startFlow(e, t).then(function() {
                    console.warn("show compoment " + n + " succ...");
                }).catch(function(e) {
                    checkString(e) ? console.warn("show compoment " + n + " fail：", e) : (console.error(e), 
                    console.warn("show compoment " + n + " fail..."));
                }) : console.warn("show compoment " + n + " fail：", "Not Support On Current SDK Version...");
            });
        }
    }, {
        key: "_hideCompomentsOfPage",
        value: function _hideCompomentsOfPage(e) {
            e.forEach(function(e) {
                var t = e.type, n = SupportComponentTypes[t];
                n ? (n._flowCfg = e, n.endFlow().then(function() {
                    console.warn("hide compoment " + t + " succ...");
                }).catch(function(e) {
                    checkString(e) ? console.warn("hide compoment " + t + " fail...", e) : (console.error(e), 
                    console.warn("hide compoment " + t + " fail..."));
                })) : console.warn("hide compoment " + t + " fail...", "Not Support On Current SDK Version...");
            });
        }
    } ]);
    return BasePageFlow;
}(BaseFlow);

var _PageInsertMgr = /* */ function(_BasePageFlow) {
    _inherits2(_PageInsertMgr, _BasePageFlow);
    var _super62 = _createSuper2(_PageInsertMgr);
    function _PageInsertMgr() {
        var _this154;
        _classCallCheck2(this, _PageInsertMgr);
        _this154 = _super62.call(this), _this154.Time = Date.now(), _this154.ShowIndex = 0, 
        _this154.ShowCount = 0, _this154.ShowSpaceTime = 0;
        return _this154;
    }
    _createClass2(_PageInsertMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this155 = this;
            return new Promise(function(t, n) {
                var i = e.config;
                if (isLoadWXConfig()) {
                    var _e94 = Date.now() - _this155.Time;
                    _this155.ShowIndex = _this155.ShowCount = Number(i.showCount || 0), _this155.ShowSpaceTime = Math.max(31e3, Number(i.showSpaceTime || 31e3));
                    var a = Number(i.firstDelayShow || 0), o = function o() {
                        _this155.ShowIndex--, adv_interface$1.showInterstitialAd(_this155._getAdvPagePath(), function() {
                            t(), (_this155.ShowIndex > 0 || 0 == _this155.ShowCount) && (_this155.DelayID = setTimeout(s, _this155.ShowSpaceTime));
                        }, function(e) {
                            n(e);
                        });
                    }, s = function s() {
                        _this155.ShowIndex--, adv_interface$1.showInterstitialAd(_this155._getAdvPagePath(), function() {
                            (_this155.ShowIndex > 0 || 0 == _this155.ShowCount) && (_this155.DelayID = setTimeout(s, _this155.ShowSpaceTime));
                        }, function(e) {});
                    };
                    _e94 > 3e4 && 0 == a ? o() : (_this155.DelayID = setTimeout(s, a), t());
                } else adv_interface$1.showInterstitialAd(_this155._getAdvPagePath(), function() {
                    t();
                }, function(e) {
                    n(e);
                });
            });
        }
    }, {
        key: "onEndFlow",
        value: function onEndFlow() {
            var _this156 = this;
            return new Promise(function(e, t) {
                clearTimeout(_this156.DelayID), e();
            });
        }
    } ]);
    return _PageInsertMgr;
}(BasePageFlow);

var PageInsertMgr = new _PageInsertMgr();

var _PageMoreGameMgr = /* */ function(_BasePageFlow2) {
    _inherits2(_PageMoreGameMgr, _BasePageFlow2);
    var _super63 = _createSuper2(_PageMoreGameMgr);
    function _PageMoreGameMgr() {
        _classCallCheck2(this, _PageMoreGameMgr);
        return _super63.call(this);
    }
    _createClass2(_PageMoreGameMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this157 = this;
            return new Promise(function(t, n) {
                if (isLoadWXConfig$1()) {
                    var i = e.config;
                    adv_interface$1.showPopupCustomAd(i.matrixAdUnitId, parseInt(i.matrixAdRow), _this157._getAdvPagePath(), null, function() {
                        t();
                    }, function(e) {
                        n(e);
                    });
                } else isLoadQQConfig() ? adv_interface$1.showBoxAd(_this157._getAdvPagePath(), null, function() {
                    t();
                }, function(e) {
                    n(e);
                }) : isLoadTTConfig() && adv_interface$1.showMoreGameAd(_this157._getAdvPagePath(), null, function() {
                    t();
                }, function(e) {
                    n(e);
                });
            });
        }
    } ]);
    return _PageMoreGameMgr;
}(BasePageFlow);

var PageMoreGameMgr = new _PageMoreGameMgr();

var _PageUIMgr = /* */ function(_BasePageFlow3) {
    _inherits2(_PageUIMgr, _BasePageFlow3);
    var _super64 = _createSuper2(_PageUIMgr);
    function _PageUIMgr() {
        _classCallCheck2(this, _PageUIMgr);
        return _super64.call(this);
    }
    _createClass2(_PageUIMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this158 = this;
            return new Promise(function(t, n) {
                var i = e.type;
                UIManager.showUI(i, function() {
                    -1 !== SupportComponentPageTypes.indexOf(i) && _this158._hideCompomentsOfPage(e.elements), 
                    t();
                }, e.config).then(function(t) {
                    t && t.length > 0 && -1 !== SupportComponentPageTypes.indexOf(i) && _this158._showCompomentsOfPage(e.elements, t[0].zOrder);
                }).catch(function(e) {
                    n(e);
                });
            });
        }
    } ]);
    return _PageUIMgr;
}(BasePageFlow);

var PageUIMgr = new _PageUIMgr();

var _PageVideoInsertMgr = /* */ function(_BasePageFlow4) {
    _inherits2(_PageVideoInsertMgr, _BasePageFlow4);
    var _super65 = _createSuper2(_PageVideoInsertMgr);
    function _PageVideoInsertMgr() {
        _classCallCheck2(this, _PageVideoInsertMgr);
        return _super65.call(this);
    }
    _createClass2(_PageVideoInsertMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this159 = this;
            return new Promise(function(e, t) {
                var n = [];
                n.push(new Promise(function(e, t) {
                    adv_interface$1.showInterstitialAd(_this159._getAdvPagePath(), function() {
                        e();
                    }, function(t) {
                        console.error(t), e();
                    });
                })), n.push(new Promise(function(e, t) {
                    Scheduler.schedule("Delay_Open_RewardedVideoAd_While_Show_InsertAd", function() {
                        adv_interface$1.showRewardedVideoAd(_this159._getAdvPagePath(), !1, function() {
                            e();
                        }, function(t) {
                            console.error(t), e();
                        });
                    }, !1, 1500, 0);
                })), Promise.all(n).then(function() {
                    e();
                });
            });
        }
    } ]);
    return _PageVideoInsertMgr;
}(BasePageFlow);

var PageVideoInsertMgr = new _PageVideoInsertMgr();

var _PageVideoMgr = /* */ function(_BasePageFlow5) {
    _inherits2(_PageVideoMgr, _BasePageFlow5);
    var _super66 = _createSuper2(_PageVideoMgr);
    function _PageVideoMgr() {
        _classCallCheck2(this, _PageVideoMgr);
        return _super66.call(this);
    }
    _createClass2(_PageVideoMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this160 = this;
            return new Promise(function(t, n) {
                var i = e.config;
                0 == HLSDKLocalData._gameTimes || HLSDKLocalData._gameTimes >= i.openTime ? adv_interface$1.showRewardedVideoAd(_this160._getAdvPagePath(), !1, function() {
                    t();
                }, function(e) {
                    n(e);
                }) : t();
            });
        }
    }, {
        key: "onEndFlow",
        value: function onEndFlow() {
            return new Promise(function(e, t) {
                e();
            });
        }
    } ]);
    return _PageVideoMgr;
}(BasePageFlow);

var PageVideoMgr = new _PageVideoMgr(), _SupportPageTypes$6 = {};

_SupportPageTypes$6[WX_AdvKeys.RewardedVideo] = PageVideoMgr, _SupportPageTypes$6[WX_AdvKeys.Interstitial] = PageInsertMgr, 
_SupportPageTypes$6[WX_AdvKeys.VideoInterstitial] = PageVideoInsertMgr, _SupportPageTypes$6[WX_AdvKeys.MoreGame] = PageMoreGameMgr, 
_SupportPageTypes$6[WX_UIKeys.NativeTemplateAd] = PageUIMgr, _SupportPageTypes$6[WX_UIKeys.FakeLoading] = PageUIMgr, 
_SupportPageTypes$6[WX_UIKeys.MoreGame] = PageUIMgr, _SupportPageTypes$6[WX_UIKeys.FullExport] = PageUIMgr, 
_SupportPageTypes$6[WX_UIKeys.FullExport_V2] = PageUIMgr, _SupportPageTypes$6[WX_UIKeys.FullExit] = PageUIMgr, 
_SupportPageTypes$6[WX_UIKeys.CrazyClick] = PageUIMgr;

var WX_SupportPageTypes = _SupportPageTypes$6, WX_SupportComponentPageTypes = [ WX_UIKeys.CrazyClick, WX_UIKeys.MoreGame, WX_UIKeys.NativeTemplateAd ], _SupportComponentTypes$6 = {};

_SupportComponentTypes$6[WX_AdvKeys.Banner] = ComponentBannerMgr, _SupportComponentTypes$6[WX_AdvKeys.Couplet] = ComponentCoupletMgr, 
_SupportComponentTypes$6[WX_AdvKeys.Scroll] = ComponentScrollMgr, _SupportComponentTypes$6[WX_AdvKeys.Matrix] = ComponentMatrixMgr, 
_SupportComponentTypes$6[WX_UIKeys.Scroll] = ComponentUIMgr, _SupportComponentTypes$6[WX_UIKeys.ScrollWithName] = ComponentUIMgr, 
_SupportComponentTypes$6[WX_UIKeys.Couplet] = ComponentUIMgr, _SupportComponentTypes$6[WX_UIKeys.Matrix] = ComponentUIMgr, 
_SupportComponentTypes$6[WX_UIKeys.MoreGameEntrance] = ComponentUIMgr;

var WX_SupportComponentTypes = _SupportComponentTypes$6, _SupportPageTypes$5 = {};

_SupportPageTypes$5[QQ_AdvKeys.RewardedVideo] = PageVideoMgr, _SupportPageTypes$5[QQ_AdvKeys.Interstitial] = PageInsertMgr, 
_SupportPageTypes$5[QQ_AdvKeys.MoreGame] = PageMoreGameMgr, _SupportPageTypes$5[QQ_UIKeys.CrazyClick] = PageUIMgr;

var QQ_SupportPageTypes = _SupportPageTypes$5, QQ_SupportComponentPageTypes = [ QQ_UIKeys.CrazyClick ], _SupportComponentTypes$5 = {};

_SupportComponentTypes$5[QQ_AdvKeys.Banner] = ComponentBannerMgr, _SupportComponentTypes$5[QQ_AdvKeys.Couplet] = ComponentCoupletMgr, 
_SupportComponentTypes$5[QQ_AdvKeys.Scroll] = ComponentScrollMgr, _SupportComponentTypes$5[QQ_AdvKeys.Matrix] = ComponentMatrixMgr, 
_SupportComponentTypes$5[QQ_UIKeys.MoreGameEntrance] = ComponentUIMgr;

var QQ_SupportComponentTypes = _SupportComponentTypes$5, _SupportPageTypes$4 = {};

_SupportPageTypes$4[TT_AdvKeys.RewardedVideo] = PageVideoMgr, _SupportPageTypes$4[TT_AdvKeys.Interstitial] = PageInsertMgr, 
_SupportPageTypes$4[TT_AdvKeys.MoreGame] = PageMoreGameMgr, _SupportPageTypes$4[TT_UIKeys.CrazyClick] = PageUIMgr;

var TT_SupportPageTypes = _SupportPageTypes$4, TT_SupportComponentPageTypes = [ TT_UIKeys.CrazyClick ], _SupportComponentTypes$4 = {};

_SupportComponentTypes$4[TT_AdvKeys.Banner] = ComponentBannerMgr, _SupportComponentTypes$4[TT_UIKeys.MoreGameEntrance] = ComponentUIMgr;

var TT_SupportComponentTypes = _SupportComponentTypes$4, _SupportPageTypes$3 = {};

_SupportPageTypes$3[Native_AdvKeys.RewardedVideo] = PageVideoMgr, _SupportPageTypes$3[Native_AdvKeys.Interstitial] = PageInsertMgr;

var Native_SupportPageTypes = _SupportPageTypes$3, Native_SupportComponentPageTypes = [], _SupportComponentTypes$3 = {};

_SupportComponentTypes$3[Native_AdvKeys.Banner] = ComponentBannerMgr;

var Native_SupportComponentTypes = _SupportComponentTypes$3;

var _PageTransplateMgr = /* */ function(_BasePageFlow6) {
    _inherits2(_PageTransplateMgr, _BasePageFlow6);
    var _super67 = _createSuper2(_PageTransplateMgr);
    function _PageTransplateMgr() {
        _classCallCheck2(this, _PageTransplateMgr);
        return _super67.call(this);
    }
    _createClass2(_PageTransplateMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this161 = this;
            return new Promise(function(t, n) {
                _this161._showCompomentsOfPage(e.elements, 0), t();
            });
        }
    }, {
        key: "isCanShowPage",
        value: function isCanShowPage() {
            return !0;
        }
    } ]);
    return _PageTransplateMgr;
}(BasePageFlow);

var PageTransplateMgr = new _PageTransplateMgr();

var _ComponentDrawerMgr = /* */ function(_BaseComponentFlow6) {
    _inherits2(_ComponentDrawerMgr, _BaseComponentFlow6);
    var _super68 = _createSuper2(_ComponentDrawerMgr);
    function _ComponentDrawerMgr() {
        _classCallCheck2(this, _ComponentDrawerMgr);
        return _super68.call(this);
    }
    _createClass2(_ComponentDrawerMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this162 = this;
            return new Promise(function(t, n) {
                var i = e.config;
                checkString(i.drawerAdUnitId) && isLoadOPPOConfig() && adv_interface$1.showDrawerAd(i.drawerAdUnitId, parseFloat(i.fromTopPercent), _this162._getAdvPagePath(), function() {
                    t();
                }, function(e) {
                    n(e);
                }, null);
            });
        }
    }, {
        key: "onEndFlow",
        value: function onEndFlow(e) {
            return new Promise(function(t, n) {
                var i = e.config;
                adv_interface$1.hideComponentAd(i.drawerAdUnitId), t();
            });
        }
    } ]);
    return _ComponentDrawerMgr;
}(BaseComponentFlow);

var ComponentDrawerMgr = new _ComponentDrawerMgr();

var _ComponentGraphicMgr = /* */ function(_BaseComponentFlow7) {
    _inherits2(_ComponentGraphicMgr, _BaseComponentFlow7);
    var _super69 = _createSuper2(_ComponentGraphicMgr);
    function _ComponentGraphicMgr() {
        _classCallCheck2(this, _ComponentGraphicMgr);
        return _super69.call(this);
    }
    _createClass2(_ComponentGraphicMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this163 = this;
            return new Promise(function(t, n) {
                var i = e.config;
                checkString(i.graphicAdUnitId) && (isLoadOPPOConfig() || isLoadVIVOConfig()) && adv_interface$1.showgraphicAd("couplet", _this163._getAdvPagePath(), i.graphicAdUnitId, {
                    layout: "top",
                    top: parseFloat(i.fromTopPercent),
                    type: parseInt(i.graphicAdType)
                }, function() {
                    t();
                }, function(e) {
                    n(e);
                }, null);
            });
        }
    }, {
        key: "onEndFlow",
        value: function onEndFlow(e) {
            return new Promise(function(t, n) {
                var i = e.config;
                adv_interface$1.hideComponentAd(i.graphicAdUnitId), t();
            });
        }
    } ]);
    return _ComponentGraphicMgr;
}(BaseComponentFlow);

var ComponentGraphicMgr = new _ComponentGraphicMgr();

var _PageGraphicMgr = /* */ function(_BasePageFlow7) {
    _inherits2(_PageGraphicMgr, _BasePageFlow7);
    var _super70 = _createSuper2(_PageGraphicMgr);
    function _PageGraphicMgr() {
        _classCallCheck2(this, _PageGraphicMgr);
        return _super70.call(this);
    }
    _createClass2(_PageGraphicMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this164 = this;
            return new Promise(function(t, n) {
                var i = e.config;
                checkString(i.graphicAdUnitId) && (isLoadOPPOConfig() || isLoadVIVOConfig()) && adv_interface$1.showgraphicAd("couplet", _this164._getAdvPagePath(), i.graphicAdUnitId, {
                    layout: "top",
                    top: parseFloat(i.fromTopPercent),
                    type: parseInt(i.graphicAdType)
                }, function() {}, function(e) {
                    n(e);
                }, function() {
                    t();
                });
            });
        }
    } ]);
    return _PageGraphicMgr;
}(BasePageFlow);

var PageGraphicMgr = new _PageGraphicMgr();

var _PagePortalMgr = /* */ function(_BasePageFlow8) {
    _inherits2(_PagePortalMgr, _BasePageFlow8);
    var _super71 = _createSuper2(_PagePortalMgr);
    function _PagePortalMgr() {
        _classCallCheck2(this, _PagePortalMgr);
        return _super71.call(this);
    }
    _createClass2(_PagePortalMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this165 = this;
            return new Promise(function(t, n) {
                if (isLoadOPPOConfig()) {
                    var i = e.config;
                    adv_interface$1.showPortalAd(i.portalAdUnitId, _this165._getAdvPagePath(), function() {
                        console.error("Portal....succ...."), t();
                    }, null, function(e) {
                        n(e);
                    });
                }
            });
        }
    } ]);
    return _PagePortalMgr;
}(BasePageFlow);

var PagePortalMgr = new _PagePortalMgr(), _SupportPageTypes$2 = {};

_SupportPageTypes$2[OPPO_AdvKeys.RewardedVideo] = PageVideoMgr, _SupportPageTypes$2[OPPO_AdvKeys.Portal] = PagePortalMgr, 
_SupportPageTypes$2[OPPO_AdvKeys.Graphic] = PageGraphicMgr;

var OPPO_SupportPageTypes = _SupportPageTypes$2, OPPO_SupportComponentPageTypes = [], _SupportComponentTypes$2 = {};

_SupportComponentTypes$2[OPPO_AdvKeys.Banner] = ComponentBannerMgr, _SupportComponentTypes$2[OPPO_UIKeys.MoreGameEntrance] = ComponentUIMgr, 
_SupportComponentTypes$2[OPPO_UIKeys.NativeBanner] = ComponentUIMgr, _SupportComponentTypes$2[OPPO_UIKeys.NativeBottomBanner] = ComponentUIMgr, 
_SupportComponentTypes$2[OPPO_UIKeys.NativeMiddleBanner] = ComponentUIMgr, _SupportComponentTypes$2[OPPO_AdvKeys.Scroll] = ComponentScrollMgr, 
_SupportComponentTypes$2[OPPO_AdvKeys.Drawer] = ComponentDrawerMgr, _SupportComponentTypes$2[OPPO_AdvKeys.Graphic] = ComponentGraphicMgr;

var OPPO_SupportComponentTypes = _SupportComponentTypes$2;

var _ComponentPortalMgr = /* */ function(_BaseComponentFlow8) {
    _inherits2(_ComponentPortalMgr, _BaseComponentFlow8);
    var _super72 = _createSuper2(_ComponentPortalMgr);
    function _ComponentPortalMgr() {
        _classCallCheck2(this, _ComponentPortalMgr);
        return _super72.call(this);
    }
    _createClass2(_ComponentPortalMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this166 = this;
            return new Promise(function(t, n) {
                var i = e.config;
                checkString(i.portalAdUnitId) && isLoadVIVOConfig() && (console.log("111111"), adv_interface$1.ShowQgPortalAd(i.portalAdUnitId, parseFloat(i.fromTopPercent), _this166._getAdvPagePath(), function() {
                    t();
                }, function(e) {
                    n(e);
                }, null));
            });
        }
    }, {
        key: "onEndFlow",
        value: function onEndFlow(e) {
            return new Promise(function(t, n) {
                e.config, t();
            });
        }
    } ]);
    return _ComponentPortalMgr;
}(BaseComponentFlow);

var ComponentPortalMgr = new _ComponentPortalMgr();

var _ComponentStreamerMgr = /* */ function(_BaseComponentFlow9) {
    _inherits2(_ComponentStreamerMgr, _BaseComponentFlow9);
    var _super73 = _createSuper2(_ComponentStreamerMgr);
    function _ComponentStreamerMgr() {
        _classCallCheck2(this, _ComponentStreamerMgr);
        return _super73.call(this);
    }
    _createClass2(_ComponentStreamerMgr, [ {
        key: "onStartFlow_Extend",
        value: function onStartFlow_Extend(e) {
            var _this167 = this;
            return new Promise(function(t, n) {
                var i = e.config;
                checkString(i.streamerAdUnitId) && isLoadVIVOConfig() && (console.log("111111"), 
                adv_interface$1.ShowQgStreamerAd(i.streamerAdUnitId, _this167._getAdvPagePath(), function() {
                    t();
                }, function(e) {
                    n(e);
                }, null));
            });
        }
    }, {
        key: "onEndFlow",
        value: function onEndFlow(e) {
            return new Promise(function(t, n) {
                var i = e.config;
                adv_interface$1.hideComponentAd(i.streamerAdUnitId), t();
            });
        }
    } ]);
    return _ComponentStreamerMgr;
}(BaseComponentFlow);

var ComponentStreamerMgr = new _ComponentStreamerMgr(), _SupportPageTypes$1 = {};

_SupportPageTypes$1[VIVO_AdvKeys.RewardedVideo] = PageVideoMgr, _SupportPageTypes$1[VIVO_AdvKeys.Interstitial] = PageInsertMgr;

var VIVO_SupportPageTypes = _SupportPageTypes$1, VIVO_SupportComponentPageTypes = [], _SupportComponentTypes$1 = {};

_SupportComponentTypes$1[VIVO_AdvKeys.Banner] = ComponentBannerMgr, _SupportComponentTypes$1[VIVO_AdvKeys.Portal] = ComponentPortalMgr, 
_SupportComponentTypes$1[VIVO_AdvKeys.Streamer] = ComponentStreamerMgr, _SupportComponentTypes$1[VIVO_UIKeys.NativeBanner] = ComponentUIMgr, 
_SupportComponentTypes$1[VIVO_UIKeys.NativeBottomBanner] = ComponentUIMgr, _SupportComponentTypes$1[VIVO_UIKeys.NativeMiddleBanner] = ComponentUIMgr, 
_SupportComponentTypes$1[VIVO_AdvKeys.Graphic] = ComponentGraphicMgr;

var VIVO_SupportComponentTypes = _SupportComponentTypes$1, _SupportPageTypes = {};

_SupportPageTypes[UIKeys.Transplate] = PageTransplateMgr;

var _SupportComponentPageTypes = [], _SupportComponentTypes = {};

isLoadQQConfig() ? (Object.assign(_SupportPageTypes, QQ_SupportPageTypes), _SupportComponentPageTypes = _SupportComponentPageTypes.concat(QQ_SupportComponentPageTypes), 
Object.assign(_SupportComponentTypes, QQ_SupportComponentTypes)) : isLoadTTConfig() ? (Object.assign(_SupportPageTypes, TT_SupportPageTypes), 
_SupportComponentPageTypes = _SupportComponentPageTypes.concat(TT_SupportComponentPageTypes), 
Object.assign(_SupportComponentTypes, TT_SupportComponentTypes)) : isLoadOPPOConfig() ? (Object.assign(_SupportPageTypes, OPPO_SupportPageTypes), 
_SupportComponentPageTypes = _SupportComponentPageTypes.concat(OPPO_SupportComponentPageTypes), 
Object.assign(_SupportComponentTypes, OPPO_SupportComponentTypes)) : isLoadVIVOConfig() ? (Object.assign(_SupportPageTypes, VIVO_SupportPageTypes), 
_SupportComponentPageTypes = _SupportComponentPageTypes.concat(VIVO_SupportComponentPageTypes), 
Object.assign(_SupportComponentTypes, VIVO_SupportComponentTypes)) : isLoadWXConfig$1() ? (Object.assign(_SupportPageTypes, WX_SupportPageTypes), 
_SupportComponentPageTypes = _SupportComponentPageTypes.concat(WX_SupportComponentPageTypes), 
Object.assign(_SupportComponentTypes, WX_SupportComponentTypes)) : isLoadNativeConfig() ? (Object.assign(_SupportPageTypes, Native_SupportPageTypes), 
_SupportComponentPageTypes = _SupportComponentPageTypes.concat(Native_SupportComponentPageTypes), 
Object.assign(_SupportComponentTypes, Native_SupportComponentTypes)) : console.error("Not Support This Platform, check hlsdk_config.js first...");

var SupportPageTypes = _SupportPageTypes, SupportComponentPageTypes = _SupportComponentPageTypes, SupportComponentTypes = _SupportComponentTypes;

var VIEW_NAME = {
    MAIN: "mainView",
    GAMING: "gamingView",
    GAMEEND: "gameEndView",
    REVIVE: "reviveView",
    Finish: "finishView",
    FinishFail: "finishFailView",
    Custom: "customView",
    Custom_02: "customView_02",
    Custom_03: "customView_03",
    Custom_04: "customView_04",
    Custom_05: "customView_05"
};

var _FlowManager = /* */ function() {
    function _FlowManager() {
        _classCallCheck2(this, _FlowManager);
        this._currentViewName = "";
    }
    _createClass2(_FlowManager, [ {
        key: "exeMainView",
        value: function exeMainView() {
            var _this168 = this;
            return new Promise(function(e, t) {
                _this168._isViewCanExe(VIEW_NAME.MAIN, [ "", VIEW_NAME.Custom, VIEW_NAME.Custom_02, VIEW_NAME.Custom_03, VIEW_NAME.Custom_04, VIEW_NAME.Custom_05, VIEW_NAME.REVIVE, VIEW_NAME.GAMEEND, VIEW_NAME.Finish, VIEW_NAME.FinishFail ], function() {}).then(function(n) {
                    console.warn("开始新一轮游戏..."), HLSDKLocalData._gameTimes += 1, _this168._exe(VIEW_NAME.MAIN, n).then(function() {
                        e();
                    }).catch(function(e) {
                        t(e);
                    });
                }).catch(function(e) {
                    t(e);
                });
            });
        }
    }, {
        key: "exeGamingView",
        value: function exeGamingView() {
            var _this169 = this;
            var e = this._currentViewName;
            return new Promise(function(t, n) {
                _this169._isViewCanExe(VIEW_NAME.GAMING, [ VIEW_NAME.Custom, VIEW_NAME.Custom_02, VIEW_NAME.Custom_03, VIEW_NAME.Custom_04, VIEW_NAME.Custom_05, VIEW_NAME.MAIN, VIEW_NAME.REVIVE ]).then(function(i) {
                    _this169._exe(VIEW_NAME.GAMING, i, e === VIEW_NAME.REVIVE).then(function() {
                        t();
                    }).catch(function(e) {
                        n(e);
                    });
                }).catch(function(e) {
                    n(e);
                });
            });
        }
    }, {
        key: "exeGameEndView",
        value: function exeGameEndView() {
            var _this170 = this;
            return new Promise(function(e, t) {
                _this170._isViewCanExe(VIEW_NAME.GAMEEND, [ VIEW_NAME.GAMING, VIEW_NAME.Custom, VIEW_NAME.Custom_02, VIEW_NAME.Custom_03, VIEW_NAME.Custom_04, VIEW_NAME.Custom_05 ]).then(function(n) {
                    _this170._exe(VIEW_NAME.GAMEEND, n).then(function() {
                        e();
                    }).catch(function(e) {
                        t(e);
                    });
                }).catch(function(e) {
                    t(e);
                });
            });
        }
    }, {
        key: "exeReviveView",
        value: function exeReviveView() {
            var _this171 = this;
            return new Promise(function(e, t) {
                _this171._isViewCanExe(VIEW_NAME.REVIVE, [ VIEW_NAME.GAMING, VIEW_NAME.Custom, VIEW_NAME.Custom_02, VIEW_NAME.Custom_03, VIEW_NAME.Custom_04, VIEW_NAME.Custom_05 ]).then(function(n) {
                    _this171._exe(VIEW_NAME.REVIVE, n).then(function() {
                        e();
                    }).catch(function(e) {
                        t(e);
                    });
                }).catch(function(e) {
                    t(e);
                });
            });
        }
    }, {
        key: "exeFinishView",
        value: function exeFinishView() {
            var _this172 = this;
            return new Promise(function(e, t) {
                _this172._isViewCanExe(VIEW_NAME.Finish, [ VIEW_NAME.GAMING, VIEW_NAME.GAMEEND, VIEW_NAME.REVIVE, VIEW_NAME.Custom, VIEW_NAME.Custom_02, VIEW_NAME.Custom_03, VIEW_NAME.Custom_04, VIEW_NAME.Custom_05 ]).then(function(n) {
                    _this172._exe(VIEW_NAME.Finish, n).then(function() {
                        e();
                    }).catch(function(e) {
                        t(e);
                    });
                }).catch(function(e) {
                    t(e);
                });
            });
        }
    }, {
        key: "exeFinishFailView",
        value: function exeFinishFailView() {
            var _this173 = this;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return new Promise(function(e, t) {
                _this173._isViewCanExe(VIEW_NAME.FinishFail, [ VIEW_NAME.REVIVE, VIEW_NAME.GAMING, VIEW_NAME.GAMEEND, VIEW_NAME.Custom, VIEW_NAME.Custom_02, VIEW_NAME.Custom_03, VIEW_NAME.Custom_04, VIEW_NAME.Custom_05 ]).then(function(n) {
                    _this173._exe(VIEW_NAME.FinishFail, n).then(function() {
                        e();
                    }).catch(function(e) {
                        t(e);
                    });
                }).catch(function(e) {
                    t(e);
                });
            });
        }
    }, {
        key: "exeCustomView",
        value: function exeCustomView() {
            var _this174 = this;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return new Promise(function(e, t) {
                _this174._isViewCanExe(VIEW_NAME.Custom, [ VIEW_NAME.MAIN, VIEW_NAME.GAMING, VIEW_NAME.GAMEEND, VIEW_NAME.REVIVE, VIEW_NAME.Finish, VIEW_NAME.FinishFail, VIEW_NAME.Custom_02, VIEW_NAME.Custom_03, VIEW_NAME.Custom_04, VIEW_NAME.Custom_05 ]).then(function(n) {
                    _this174._exe(VIEW_NAME.Custom, n).then(function() {
                        e();
                    }).catch(function(e) {
                        t(e);
                    });
                }).catch(function(e) {
                    t(e);
                });
            });
        }
    }, {
        key: "exeCustomView_02",
        value: function exeCustomView_02() {
            var _this175 = this;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return new Promise(function(e, t) {
                _this175._isViewCanExe(VIEW_NAME.Custom_02, [ VIEW_NAME.Custom, VIEW_NAME.Custom_03, VIEW_NAME.Custom_04, VIEW_NAME.Custom_05, VIEW_NAME.MAIN, VIEW_NAME.GAMING, VIEW_NAME.GAMEEND, VIEW_NAME.REVIVE, VIEW_NAME.Finish, VIEW_NAME.FinishFail ]).then(function(n) {
                    _this175._exe(VIEW_NAME.Custom_02, n).then(function() {
                        e();
                    }).catch(function(e) {
                        t(e);
                    });
                }).catch(function(e) {
                    t(e);
                });
            });
        }
    }, {
        key: "exeCustomView_03",
        value: function exeCustomView_03() {
            var _this176 = this;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return new Promise(function(e, t) {
                _this176._isViewCanExe(VIEW_NAME.Custom_03, [ VIEW_NAME.Custom_02, VIEW_NAME.Custom, VIEW_NAME.Custom_04, VIEW_NAME.Custom_05, VIEW_NAME.MAIN, VIEW_NAME.GAMING, VIEW_NAME.GAMEEND, VIEW_NAME.REVIVE, VIEW_NAME.Finish, VIEW_NAME.FinishFail ]).then(function(n) {
                    _this176._exe(VIEW_NAME.Custom_03, n).then(function() {
                        e();
                    }).catch(function(e) {
                        t(e);
                    });
                }).catch(function(e) {
                    t(e);
                });
            });
        }
    }, {
        key: "exeCustomView_04",
        value: function exeCustomView_04() {
            var _this177 = this;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return new Promise(function(e, t) {
                _this177._isViewCanExe(VIEW_NAME.Custom_04, [ VIEW_NAME.Custom_02, VIEW_NAME.Custom_03, VIEW_NAME.Custom, VIEW_NAME.Custom_05, VIEW_NAME.MAIN, VIEW_NAME.GAMING, VIEW_NAME.GAMEEND, VIEW_NAME.REVIVE, VIEW_NAME.Finish, VIEW_NAME.FinishFail ]).then(function(n) {
                    _this177._exe(VIEW_NAME.Custom_04, n).then(function() {
                        e();
                    }).catch(function(e) {
                        t(e);
                    });
                }).catch(function(e) {
                    t(e);
                });
            });
        }
    }, {
        key: "exeCustomView_05",
        value: function exeCustomView_05() {
            var _this178 = this;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return new Promise(function(e, t) {
                _this178._isViewCanExe(VIEW_NAME.Custom_05, [ VIEW_NAME.Custom_02, VIEW_NAME.Custom_03, VIEW_NAME.Custom_04, VIEW_NAME.Custom, VIEW_NAME.MAIN, VIEW_NAME.GAMING, VIEW_NAME.GAMEEND, VIEW_NAME.REVIVE, VIEW_NAME.Finish, VIEW_NAME.FinishFail ]).then(function(n) {
                    _this178._exe(VIEW_NAME.Custom_05, n).then(function() {
                        e();
                    }).catch(function(e) {
                        t(e);
                    });
                }).catch(function(e) {
                    t(e);
                });
            });
        }
    }, {
        key: "_isViewCanExe",
        value: function _isViewCanExe(e, t) {
            var _this179 = this;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            return new Promise(function(i, a) {
                var o = _this179._currentViewName;
                if (_this179._currentViewName === e) return void a("不要连续多次执行同一流程...");
                if (-1 === t.indexOf(o)) return void a("上一流程非法，请按流程图所示顺序调用...");
                _this179._currentViewName = e;
                var s = !1, r = "_is" + e.charAt(0).toUpperCase() + e.substr(1) + "Showed";
                HLSDKLocalData._viewStatus[r] || (HLSDKLocalData._viewStatus[r] = !0, s = !0, doCallback$1(n)), 
                i(s);
            });
        }
    }, {
        key: "_exe",
        value: function _exe(e) {
            return new Promise((e,a)=>{e()});
            // var _this180 = this;
            // var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            // var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            // var i = HLSDKLocalData._gameFlows[e];
            // return new Promise(function(e, a) {
            //     _this180._doCleanBeforeExe().then(function() {
            //         _this180._doExe(i, t, n).then(function() {
            //             _this180._doCleanAfterExe().then(function() {
            //                 e();
            //             });
            //         }).catch(function() {
            //             _this180._doCleanAfterExe().then(function() {
            //                 e();
            //             });
            //         });
            //     });
            // });
        }
    }, {
        key: "_doCleanBeforeExe",
        value: function _doCleanBeforeExe() {
            return new Promise(function(e, t) {
                adv_interface$1.stopAutoRefreshBannerAd(), adv_interface$1.hideBannerAd();
                var n = [];
                n.push(new Promise(function(e, t) {
                    adv_interface$1.hideAllComponentAds(function() {
                        e();
                    });
                })), UIManager.showAllTempHideUIs(), n.push(new Promise(function(e, t) {
                    UIManager.hideAllUIs().then(function() {
                        e();
                    });
                })), Promise.all(n).then(function() {
                    UIManager.showUI(UIKeys.Mask).then(function() {
                        e();
                    });
                });
            });
        }
    }, {
        key: "_doExe",
        value: function _doExe(e, t, n) {
            return new Promise(function(i, a) {
                if (void 0 !== e && void 0 !== e.flows) {
                    PlatHelper.getPlat() && PlatHelper.getPlat().h_ShowView ? PlatHelper.getPlat().h_ShowView(e.workflow_id) : h_ShowView(e.workflow_id);
                    var _a11 = -1, o = e.flows, s = function s() {
                        if (_a11 < o.length - 1) {
                            var _e95 = o[_a11 += 1], _i15 = SupportPageTypes[_e95.type];
                            _i15 ? _i15.startFlow(_e95, t, n).then(function() {
                                console.warn("show page " + _e95.type + " succ..."), s();
                            }).catch(function(t) {
                                checkString(t) ? console.warn("show page " + _e95.type + " fail：", t) : (console.error(t), 
                                console.warn("show page " + _e95.type + " fail...")), s();
                            }) : (console.warn("show page " + _e95.type + " fail：", "Not Support On Current SDK Version..."), 
                            s());
                        } else i();
                    };
                    Array.isArray(o) && o.length > 0 ? s() : i();
                } else i();
            });
        }
    }, {
        key: "_doCleanAfterExe",
        value: function _doCleanAfterExe() {
            return new Promise(function(e, t) {
                UIManager.hideUI(UIKeys.Mask), e();
            });
        }
    }, {
        key: "_checkBlackState",
        value: function _checkBlackState(e, t) {
            return !!isGlobalMistakeEnabled() && checkBlackState(e, t);
        }
    }, {
        key: "_checkBlackTag",
        value: function _checkBlackTag(e, t) {
            return e === BlackTypeTag.All || !t && e === BlackTypeTag.Black || !(!t || e !== BlackTypeTag.Normal);
        }
    }, {
        key: "_checkUserTag",
        value: function _checkUserTag(e) {
            return e === UserTypeTag.All || !(!HLSDKLocalData._isNewPlayer || e !== UserTypeTag.New) || !HLSDKLocalData._isNewPlayer && e === UserTypeTag.Old;
        }
    } ]);
    return _FlowManager;
}();

var FlowManager = new _FlowManager();

var _ui_interface = /* */ function() {
    function _ui_interface() {
        _classCallCheck2(this, _ui_interface);
        this._currentViewName = "", this._uiRoot = null;
    }
    _createClass2(_ui_interface, [ {
        key: "registerRunningScene",
        value: function registerRunningScene(e) {
            isLayaEngine() ? e && e instanceof Laya.Scene ? HLSDKLocalData._runningScene = e : console.error("scene must instanceof Laya.Scene...") : console.error("no need call this function...");
        }
    }, {
        key: "doBtnMistake",
        value: function doBtnMistake(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
                x: 0,
                y: 0
            };
            if (e) if (adv_interface$1.pauseAutoRefreshBannerAd(), adv_interface$1.hideBannerAd(), 
            0 !== n.x || 0 !== n.y) {
                var i = HLSDKLocalData._globalMoveMistakeBtnCfg;
                isGlobalMistakeEnabled() && i.isEnabled && i.btnInvokeType === BtnClickInvokeType.RewardedVideo ? adv_interface$1.showRewardedVideoAd("", !1, function() {
                    doCallback$1(t);
                }, function() {
                    doCallback$1(t);
                }) : (createMistakeBtn_Move(e, function() {
                    adv_interface$1.resumeAutoRefreshBannerAd(), doCallback$1(t);
                }, BtnClickMistakeType.Show, i.btnDelay, i.btnHide, i.btnUnhandle, i.btnMoveAfterShowBanner, i.moveDuration, !0, n), 
                isGlobalMistakeEnabled() && i.isEnabled ? e.enableMistake() : e.disableMistake());
            } else {
                var _n28 = HLSDKLocalData._globalNoMoveMistakeBtnCfg;
                isGlobalMistakeEnabled() && _n28.isEnabled && _n28.btnInvokeType === BtnClickInvokeType.RewardedVideo ? adv_interface$1.showRewardedVideoAd("", !1, function() {
                    doCallback$1(t);
                }, function() {
                    doCallback$1(t);
                }) : (createMistakeBtn_NoMove(e, function() {
                    adv_interface$1.resumeAutoRefreshBannerAd(), doCallback$1(t);
                }, _n28.btnMistakeType, _n28.btnDelay, _n28.btnHide, _n28.btnUnhandle, _n28.bannerShow), 
                isGlobalMistakeEnabled() && _n28.isEnabled ? e.enableMistake() : e.disableMistake());
            }
        }
    }, {
        key: "doBtnCrazyClick",
        value: function doBtnCrazyClick(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            if (e) {
                var a = HLSDKLocalData._globalCrazyClickBtnCfg;
                if (e && null == e._originalBottom && (e._originalBottom = e.bottom), a.invokeType === CrazyClickInvokeType.Banner && a.mistakeStyle === CrazyClickBannerMistakeType.Move) e.bottom = e._originalBottom + 200; else if (a.invokeType > 0 || a.invokeType === CrazyClickInvokeType.CustomScroll) e.bottom = e._originalBottom - 140; else if (a.invokeType <= 0 && 0 !== a.videoTarget) {
                    var _t65 = .168 * Laya.stage.height;
                    isLoadLandscapeConfig() && (_t65 = .248 * Laya.stage.height);
                    var _n29 = _t65 - e.height / 2 - e._originalBottom;
                    e.bottom = e._originalBottom + _n29;
                } else e.bottom = e._originalBottom;
                a.invokeType === CrazyClickInvokeType.Banner && (adv_interface$1.pauseAutoRefreshBannerAd(), 
                adv_interface$1.hideBannerAd()), (checkString(a.invokeType) || a.invokeType === CrazyClickInvokeType.CustomScroll) && checkString(a.scrollAdUnitId) && (adv_interface$1.isComponentAdPreloaded(a.scrollAdUnitId) ? adv_interface$1.hideComponentAd(a.scrollAdUnitId) : (adv_interface$1.showComponentAd("scroll", "", a.scrollAdUnitId, {
                    layout: "bottom",
                    bottom: 0
                }), adv_interface$1.hideComponentAd(a.scrollAdUnitId))), createCrazyClickBtn(e, t, n, function() {
                    a.isEnabled && (a.invokeType === CrazyClickInvokeType.Banner ? adv_interface$1.resumeAutoRefreshBannerAd() : (checkString(a.invokeType) || a.invokeType === CrazyClickInvokeType.Box) && adv_interface$1.showBoxAd("", null, null, null)), 
                    doCallback$1(i);
                }, a), isGlobalMistakeEnabled() && a.isEnabled ? e.enableMistake() : e.disableMistake();
            }
        }
    } ]);
    return _ui_interface;
}();

var ui_interface = new _ui_interface();

var _share_interface = /* */ function() {
    function _share_interface() {
        _classCallCheck2(this, _share_interface);
    }
    _createClass2(_share_interface, [ {
        key: "isSupport",
        value: function isSupport() {
            return Share.isSupport();
        }
    }, {
        key: "share",
        value: function share(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            Share.share(e, t, n, function(t) {
                t && e !== ShareScene.SS_SYSTEM_MENU && (addShareTimes(), PlatHelper.setStorage(SK_KEY_OF_INTERACT_INFO, saveInteractInfoToString())), 
                doCallback$1(i, t);
            });
        }
    }, {
        key: "shareVideo",
        value: function shareVideo(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            Share.shareVideo(e, t, n, i, function(t) {
                t && e !== ShareScene.SS_SYSTEM_MENU && (addShareTimes(), PlatHelper.setStorage(SK_KEY_OF_INTERACT_INFO, saveInteractInfoToString())), 
                doCallback$1(a, t);
            });
        }
    } ]);
    return _share_interface;
}();

var share_interface = new _share_interface();

var _event_interface = /* */ function() {
    function _event_interface() {
        _classCallCheck2(this, _event_interface);
        this._GlobalEventIDs = {};
    }
    _createClass2(_event_interface, [ {
        key: "handleGlobalEvents",
        value: function handleGlobalEvents() {
            var _this181 = this;
            var e = function e(_e96, t) {
                _this181._GlobalEventIDs[_e96] = t, Event.addEventListerner(_e96, t);
            };
            e(EventName.EN_APP_ONSHOW, function(e) {
                AudioMgr.resumeMusic(), doCallback$1(HLSDKLocalData._handles.onShow, e);
            }), e(EventName.EN_APP_ONHIDE, function() {
                AudioMgr.pauseMusic(), PlatHelper.getPlat() && checkFunc(PlatHelper.getPlat().h_ReportAllSavedAdvInfos) && PlatHelper.getPlat().h_ReportAllSavedAdvInfos(), 
                doCallback$1(HLSDKLocalData._handles.onHide);
            }), e(EventName.EN_SYSTEM_ERROR, function() {
                if (checkFunc(HLSDKLocalData._handles.onErr)) {
                    doCallback$1(HLSDKLocalData._handles.onErr) && _this181.handleError();
                } else _this181.handleError();
            }), e(EventName.EN_SHOW_CUSTOM_TIPS, function(e) {
                UIManager.showUI(UIKeys.Tips, null, e);
            }), e(EventName.EN_HIDE_CUSTOM_TIPS, function() {
                UIManager.hideUI(UIKeys.Tips);
            }), e(EventName.EN_SHOW_CUSTOM_MODAL, function(e) {
                UIManager.showUI(UIKeys.Modal, null, e);
            }), e(EventName.EN_SHOW_CUSTOM_LOADING, function(e) {
                UIManager.showUI(UIKeys.Loading, null, e);
            }), e(EventName.EN_HIDE_CUSTOM_LOADING, function() {
                UIManager.hideUI(UIKeys.Loading);
            });
        }
    }, {
        key: "unHandleGlobalEvents",
        value: function unHandleGlobalEvents() {
            for (var e in this._GlobalEventIDs) {
                Event.removeEventListerner(e, this._GlobalEventIDs[e]);
            }
            this._GlobalEventIDs = {};
        }
    }, {
        key: "handleError",
        value: function handleError() {
            // PlatHelper.showModal(HandleErrorDialog.title, HandleErrorDialog.content, isCocosEngine(), function(e) {
            //     isCocosEngine() && e ? (PlatHelper.restartApp(), console.error("restart app...")) : (PlatHelper.exitApp(), 
            //     console.error("exit app..."));
            // }, {
            //     confirmText: HandleErrorDialog.confirmText,
            //     cancelText: HandleErrorDialog.cancelText
            // });
        }
    } ]);
    return _event_interface;
}();

var event_interface = new _event_interface();

var C_TIMEOUT_OF_LOGIN = 1e4;

var HLSDK = {
    VERSION: "1.0.0"
};

HLSDK.EventName = EventName, HLSDK.PropagationEventNames = PropagationEventNames, 
HLSDK.SwitchName = SwitchName, HLSDK.ShareScene = ShareScene, HLSDK.platHelper = PlatHelper, 
PlatHelper.init(), NetHelper.init(), HLSDK.isEnterRealGame = function(e) {
    NetHelper.reqIsEnterRealGame(HLSDK.VERSION, function(t) {
        t && "200" === t.status ? doCallback$1(e.cb, "0" === t.result.isShield) : doCallback$1(e.cb, !0);
    });
}, HLSDK.init = function(e) {
    if (HLSDKLocalData._isInited) return void doCallback$1(e.onInit);
    if (console.log("start to init HLSDK..."), HLSDK_CFG.VERSION !== HLSDK.VERSION) return void console.error("当前SDK版本与SDK配置文件版本不匹配，请检查");
    if (HLSDK_CFG.Orientation !== ScreenOrientation.portrait && HLSDK_CFG.Orientation !== ScreenOrientation.landscape) return void console.error("请在SDK配置文件中填写有效的屏幕方向：Orientation");
    if (HLSDK_CFG.Orientation, HLSDK_CFG.Orientation === ScreenOrientation.portrait ? (DesignSize.width = 750, 
    DesignSize.height = 1334) : (DesignSize.width = 1334, DesignSize.height = 750), 
    !checkString(HLSDK_CFG.Base.appVersion) || 6 !== HLSDK_CFG.Base.appVersion.length) return void console.error("请在SDK配置文件中填写有效的app版本：appVersion");
    AppConfig.version = HLSDK_CFG.Base.appVersion, checkString(HLSDK_CFG.Base.company) && (CompanyConfig.name = HLSDK_CFG.Base.company), 
    void 0 !== HLSDK_CFG.Base.isPreloadAllResInInit ? PreloadConfig.isPreloadResInInit = HLSDK_CFG.Base.isPreloadAllResInInit : PreloadConfig.isPreloadResInInit = !0, 
    checkString(HLSDK_CFG.SubPath) ? SubConfig.path = HLSDK_CFG.SubPath : SubConfig.path = "";
    for (var _e97 in HLSDK_CFG.SwitchName) {
        void 0 === HLSDK.SwitchName[_e97] ? HLSDK.SwitchName[_e97] = HLSDK_CFG.SwitchName[_e97] : console.error("Switch Name: {0} Conflicted, It's Used By SDK...".format(_e97));
    }
    for (var _e98 in HLSDK_CFG.ShareScene) {
        void 0 === HLSDK.ShareScene[_e98] ? HLSDK.ShareScene[_e98] = HLSDK_CFG.ShareScene[_e98] : console.error("Share Scene Name: {0} Conflicted, It's Used By SDK...".format(_e98));
    }
    Object.assign(PlatIDs, HLSDK_CFG.PlatIDs), Object.assign(AldConfig, HLSDK_CFG.ReportorConfig), 
    Object.assign(UmaConfig, HLSDK_CFG.UmaConfig), Object.assign(LoginConfig, HLSDK_CFG.LoginConfig);
    for (var _t66 in e) {
        void 0 !== HLSDKLocalData._handles[_t66] && checkFunc(e[_t66]) && (HLSDKLocalData._handles[_t66] = e[_t66]);
    }
    PlatHelper.isWXPlatform() || PlatHelper.isQQPlatform() ? PlatHelper.isWXPlatform() ? Reportor.init(!0, checkString(AldConfig.appKey), checkString(UmaConfig.wxAppKey)) : Reportor.init(!0, checkString(AldConfig.qqAppKey), checkString(UmaConfig.qqAppKey)) : Reportor.init(!0, !1, !1), 
    event_interface.handleGlobalEvents();
    var t = function t(e) {
        return new Promise(function(t, n) {
            NetHelper.reqGetWebConfig(HLSDK.VERSION, e, function(e) {
                if (console.log(e), e && "200" === e.status) {
                    if (void 0 !== e.result.baseInfo.config && void 0 !== e.result.baseInfo.config.base) {
                        var _t67 = e.result.baseInfo.config.base;
                        Object.assign(SwitchCfgs, _t67), AppConfig.version === SwitchCfgs[SwitchName.SN_COMMIT_VERSION] ? SwitchCfgs[SwitchName.SN_IS_PUBLISHING] = _t67[SwitchName.SN_IS_PUBLISHING] : SwitchCfgs[SwitchName.SN_IS_PUBLISHING] = "0", 
                        "1" === SwitchCfgs[SwitchName.SN_IS_PUBLISHING] ? console.log("app ver: ", AppConfig.version, " ispublishing: ", !0) : console.log("app ver: ", AppConfig.version, " ispublishing: ", !1);
                    }
                    if (void 0 !== e.result.baseInfo.config) {
                        var _t68 = function _t68(e) {
                            for (var _t69 in e) {
                                void 0 !== PlatAdUnitIDs[_t69] && (checkString(e[_t69]) ? PlatAdUnitIDs[_t69] = e[_t69].split("||") : PlatAdUnitIDs[_t69] = []);
                            }
                            for (var _e99 in PlatAdUnitIDs) {
                                shuffleArray(PlatAdUnitIDs[_e99]);
                            }
                        };
                        void 0 !== e.result.baseInfo.config.adv && _t68(e.result.baseInfo.config.adv), void 0 !== e.result.baseInfo.config.wxAdv && _t68(e.result.baseInfo.config.wxAdv), 
                        isLoadWXConfig$1() && void 0 !== e.result.baseInfo.config.wxAdv && _t68(e.result.baseInfo.config.wxAdv), 
                        isLoadQQConfig() && void 0 !== e.result.baseInfo.config.qqAdv && _t68(e.result.baseInfo.config.qqAdv), 
                        isLoadTTConfig() && void 0 !== e.result.baseInfo.config.ttAdv && _t68(e.result.baseInfo.config.ttAdv), 
                        (isLoadOPPOConfig() || isLoadVIVOConfig()) && void 0 !== e.result.baseInfo.config.qgAdv && _t68(e.result.baseInfo.config.qgAdv), 
                        isLoadNativeConfig() && void 0 !== e.result.baseInfo.config.nativeAdv && _t68(e.result.baseInfo.config.nativeAdv);
                    }
                    if (void 0 !== e.result.share) {
                        e.result.share.forEach(function(e) {
                            void 0 === ShareSceneCfgs[e.scene_name] && (ShareSceneCfgs[e.scene_name] = {
                                cfgs: []
                            }), ShareSceneCfgs[e.scene_name].cfgs.push({
                                title: e.title,
                                weight: e.weight,
                                img_url: e.image_url,
                                template_id: "",
                                tag: e.flag
                            });
                        });
                    }
                    if (Share.init(), void 0 !== e.result.baseInfo.config && void 0 !== e.result.baseInfo.config.banner ? (HLSDKLocalData._globalBannerCfg.preloadCount = parseInt(e.result.baseInfo.config.banner.preloadBannerCount), 
                    HLSDKLocalData._globalBannerCfg.isTest = 1 === parseInt(e.result.baseInfo.config.banner.isTestBanner), 
                    HLSDKLocalData._globalBannerCfg.maxShowTime = parseInt(e.result.baseInfo.config.banner.maxShowTime), 
                    HLSDKLocalData._globalBannerCfg.maxClickedTimes = parseInt(e.result.baseInfo.config.banner.maxClickedTimes), 
                    HLSDKLocalData._globalBannerCfg.isLongstay = 1 === parseInt(e.result.baseInfo.config.banner.bannerLongstay)) : (HLSDKLocalData._globalBannerCfg.preloadCount = 1, 
                    HLSDKLocalData._globalBannerCfg.isTest = !1, HLSDKLocalData._globalBannerCfg.maxShowTime = 999999, 
                    HLSDKLocalData._globalBannerCfg.maxClickedTimes = 99, HLSDKLocalData._globalBannerCfg.isLongstay = !1), 
                    void 0 !== e.result.baseInfo.config && void 0 !== e.result.baseInfo.config.video ? (HLSDKLocalData._globalVideoCfg.videoLoadingTips = e.result.baseInfo.config.video.videoLoadingTips, 
                    HLSDKLocalData._globalVideoCfg.videoLoadingShowTime = parseInt(e.result.baseInfo.config.video.videoLoadingShowTime)) : (HLSDKLocalData._globalVideoCfg.videoLoadingTips = "", 
                    HLSDKLocalData._globalVideoCfg.videoLoadingShowTime = 0), void 0 !== e.result.globalAd && void 0 !== e.result.globalAd["pre-MatrixAd"] && (HLSDKLocalData._globalMatrixAdCfg = e.result.globalAd["pre-MatrixAd"]), 
                    void 0 !== e.result.globalAd && void 0 !== e.result.globalAd["pre-ScrollAd"] && (HLSDKLocalData._globalScrollAdCfg = e.result.globalAd["pre-ScrollAd"]), 
                    void 0 !== e.result.globalAd && void 0 !== e.result.globalAd["pre-CoupleAd"] && (HLSDKLocalData._globalCoupleAdCfg = e.result.globalAd["pre-CoupleAd"]), 
                    void 0 !== e.result.baseInfo.config && void 0 !== e.result.baseInfo.config.noMoreMistakeBtn) {
                        var _t70 = convertWebParams(e.result.baseInfo.config.noMoreMistakeBtn);
                        for (var _e100 in _t70) {
                            "enableMistake" === _e100 ? HLSDKLocalData._globalNoMoveMistakeBtnCfg.isEnabled = 1 === _t70.enableMistake : void 0 !== HLSDKLocalData._globalNoMoveMistakeBtnCfg[_e100] && (HLSDKLocalData._globalNoMoveMistakeBtnCfg[_e100] = _t70[_e100]);
                        }
                    } else HLSDKLocalData._globalNoMoveMistakeBtnCfg.isEnabled = !1;
                    if (void 0 !== e.result.baseInfo.config && void 0 !== e.result.baseInfo.config.moreMistakeBtn) {
                        var _t71 = convertWebParams(e.result.baseInfo.config.moreMistakeBtn);
                        for (var _e101 in _t71) {
                            if ("enableMistake_More" === _e101) HLSDKLocalData._globalMoveMistakeBtnCfg.isEnabled = 1 === _t71.enableMistake_More; else {
                                var _n30 = _e101;
                                -1 !== _e101.indexOf("_More") && (_n30 = _e101.substring(0, _e101.indexOf("_More"))), 
                                void 0 !== HLSDKLocalData._globalMoveMistakeBtnCfg[_n30] && (HLSDKLocalData._globalMoveMistakeBtnCfg[_n30] = _t71[_e101]);
                            }
                        }
                    } else HLSDKLocalData._globalMoveMistakeBtnCfg.isEnabled = !1;
                    if (void 0 !== e.result.baseInfo.config && void 0 !== e.result.baseInfo.config.crazyClickBtn) {
                        var _t72 = convertWebParams(e.result.baseInfo.config.crazyClickBtn);
                        for (var _e102 in _t72) {
                            if ("enableMistake_Click" === _e102) HLSDKLocalData._globalCrazyClickBtnCfg.isEnabled = 1 === _t72.enableMistake_Click; else {
                                var _n31 = _e102;
                                -1 !== _e102.indexOf("_Click") && (_n31 = _e102.substring(0, _e102.indexOf("_Click"))), 
                                void 0 !== HLSDKLocalData._globalCrazyClickBtnCfg[_n31] && (HLSDKLocalData._globalCrazyClickBtnCfg[_n31] = _t72[_e102]);
                            }
                        }
                    } else HLSDKLocalData._globalCrazyClickBtnCfg.isEnabled = !1;
                    HLSDKLocalData._gameFlows = e.result.gameFlows;
                    var _loop5 = function _loop5(_e103) {
                        var t = HLSDKLocalData._gameFlows[_e103], n = HLSDKLocalData._gameFlows[_e103].flows;
                        void 0 !== n && n.forEach(function(e) {
                            e.workflow_id = t.workflow_id;
                            var n = e.elements;
                            void 0 !== n && n.forEach(function(n) {
                                n.workflow_id = t.workflow_id, n.node_id = e.node_id;
                            });
                        });
                    };
                    for (var _e103 in HLSDKLocalData._gameFlows) {
                        _loop5(_e103);
                    }
                    void 0 !== e.result.allBackList ? (HLSDKLocalData._blackInfo.backArea = e.result.allBackList.backArea, 
                    HLSDKLocalData._blackInfo.blackScene = e.result.allBackList.blackScene) : (HLSDKLocalData._blackInfo.backArea = "", 
                    HLSDKLocalData._blackInfo.blackScene = ""), newBannerMgr.Instances.init(e.result.baseInfo.config.wxAdv.bannerAdUnitIDs, Number(e.result.baseInfo.config.banner.brushAdIntervals || 3e3), Number(e.result.baseInfo.config.banner.brushRefreshTime || 600), Number(e.result.baseInfo.config.banner.maxShowTime || 1), Number(e.result.baseInfo.config.banner.maxClickedTimes || 6e4), Number(e.result.baseInfo.config.banner.preloadBannerCount || 0), Number(e.result.baseInfo.config.banner.isOutsideBanner || 0)), 
                    (PlatHelper.isAndroidNativePlatform() || PlatHelper.isIOSNativePlatform()) && NativeAdv.preload(), 
                    PlatHelper.isQGPlatform() ? QGAdv.init(function() {
                        QGAdv.preload();
                    }) : PlatHelper.isWINPlatform() || Adv.preload(), adv_interface$1.preloadFlowCustomAd(PreloadFlowType.Loading, !0, !1, !1), 
                    t();
                } else Event.dispatchEvent(EventName.EN_SYSTEM_ERROR);
            });
        });
    }, n = [];Adv.preload();
    n.push(new Promise(function(e, t) {
        UIManager.registerAllUIs(function() {
            e();
        });
    })), n.push(new Promise(function(e, t) {
        NetHelper.reqGetAdvList(function(t) {
            t && "200" === t.status ? (HLSDKLocalData._advInfos = t.result, e()) : Event.dispatchEvent(EventName.EN_SYSTEM_ERROR);
        });
    })), n.push(new Promise(function(e, n) {
        if (PlatHelper.canLoginOnline()) PlatHelper.getPlat().login({
            timeout: 1e4,
            success: function success(n) {
                var i = n.code ? n.code : n.data.code;
                NetHelper.reqLogin(i, function(n) {
                    n && "200" === n.status ? (ServerInfo.registerServerTime(Math.floor(parseInt(n.time_stamp, 10) / 1e3)), 
                    HttpsHelper.registerGetServerTimeFunc(function() {
                        return ServerInfo.getServerTime();
                    }), HLSDKLocalData._isNewPlayer = "1" === n.result.is_new, HLSDKLocalData._openID = n.result.openid, 
                    HLSDKLocalData._token = n.result.token, HLSDKLocalData._address = n.result.address, 
                    PlatHelper.getStorage(SK_KEY_OF_INTERACT_INFO) && loadInteractInfoFromString(PlatHelper.getStorage(SK_KEY_OF_INTERACT_INFO)), 
                    HLSDKLocalData._interactInfo._saveDay !== ServerInfo.getCurServerDayOfYear() && (HLSDKLocalData._interactInfo._saveDay = ServerInfo.getCurServerDayOfYear(), 
                    HLSDKLocalData._interactInfo._todayShareTimes = 0, HLSDKLocalData._interactInfo._todayAdvTimes = 0, 
                    PlatHelper.setStorage(SK_KEY_OF_INTERACT_INFO, saveInteractInfoToString())), PlatHelper.setStorage(SK_KEY_OF_LOGINED_OPENID_AND_TOKEN, HLSDKLocalData._openID + "&&" + HLSDKLocalData._token), 
                    Reportor.report(HLSDKLocalData._openID), t(HLSDKLocalData._openID).then(function() {
                        e();
                    })) : (Event.dispatchEvent(EventName.EN_SYSTEM_ERROR));
                });
            },
            fail: function fail(e) {
                console.error(e), Event.dispatchEvent(EventName.EN_SYSTEM_ERROR);
            }
        }); else {
            if (ServerInfo.registerServerTime(Math.round(new Date() / 1e3)), LoginConfig.isAlwaysNewPlayer && (HLSDKLocalData._isNewPlayer = !0, 
            PlatHelper.clearStorage(SK_KEY_OF_LOGINED_OPENID_AND_TOKEN)), checkString(LoginConfig.fixedOpenID) && (HLSDKLocalData._openID = LoginConfig.fixedOpenID, 
            HLSDKLocalData._token = generateString(32), PlatHelper.setStorage(SK_KEY_OF_LOGINED_OPENID_AND_TOKEN, HLSDKLocalData._openID + "&&" + HLSDKLocalData._token)), 
            !checkString(HLSDKLocalData._openID)) {
                var _e104 = PlatHelper.getStorage(SK_KEY_OF_LOGINED_OPENID_AND_TOKEN);
                if (null !== _e104) {
                    var _t73 = _e104.split("&&");
                    2 === _t73.length && (HLSDKLocalData._isNewPlayer = !1, HLSDKLocalData._openID = _t73[0], 
                    HLSDKLocalData._token = _t73[1]);
                }
                checkString(HLSDKLocalData._openID) || (HLSDKLocalData._openID = generateString(28), 
                HLSDKLocalData._token = generateString(32), PlatHelper.setStorage(SK_KEY_OF_LOGINED_OPENID_AND_TOKEN, HLSDKLocalData._openID + "&&" + HLSDKLocalData._token));
            }
            Reportor.report(HLSDKLocalData._openID), t(HLSDKLocalData._openID).then(function() {
                e();
            });
        }
    })), Promise.all(n).then(function() {
        if (HLSDKLocalData._isInited = !0, console.error("Current OpenID: ", HLSDKLocalData._openID), 
        HLSDKLocalData._isMistakeEnabled = checkBlackState(HLSDKLocalData._blackInfo.backArea, HLSDKLocalData._blackInfo.blackScene), 
        console.log("init HLSDK succ..."), isLoadQQConfig() || isLoadOPPOConfig() || isLoadVIVOConfig()) "1" != Laya.LocalStorage.getItem("Private") ? HLSDK.showPrivacy(function() {
            doCallback$1(e.onInit);
        }) : doCallback$1(e.onInit); else {
            var _t74 = adv_interface$1.preloadFlowCustomAd(PreloadFlowType.Loading, !1, !0, !0);
            Promise.all(_t74).then(function() {
                console.warn("All Loading Custom Adv Preloaded..."), doCallback$1(e.onInit);
            });
        }
    });
}, HLSDK.isNewPlayer = function() {
    return HLSDKLocalData._isNewPlayer;
}, HLSDK.isMistakeEnabled = function() {
    return isGlobalMistakeEnabled();
}, HLSDK.getOpenID = function() {
    return HLSDKLocalData._openID;
}, HLSDK.setSoundEnable = function(e) {
    HLSDKLocalData._settings._isSoundEnabled = e;
}, HLSDK.isSoundEnable = function() {
    return HLSDKLocalData._settings._isSoundEnabled;
}, HLSDK.setMusicEnable = function(e) {
    HLSDKLocalData._settings._isMusicEnabled = e;
}, HLSDK.isMusicEnable = function() {
    return HLSDKLocalData._settings._isMusicEnabled;
}, HLSDK.setMuteEnable = function(e) {
    HLSDKLocalData._settings._isMuteEnabled = e;
}, HLSDK.isMuteEnable = function() {
    return HLSDKLocalData._settings._isMuteEnabled;
}, HLSDK.doBtnMistake = function(e) {
    ui_interface.doBtnMistake(e.btn, e.touchCb, e.offsetPos);
}, HLSDK.doBtnCrazyClick = function(e) {
    ui_interface.doBtnCrazyClick(e.btn, e.progressCb, e.clickCb, e.rewardCb);
}, HLSDK.showMainView = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (console.warn("showMainView..."), !HLSDKLocalData._flowPreloadStates[PreloadFlowType.Main]) {
        HLSDKLocalData._flowPreloadStates[PreloadFlowType.Main] = !0;
        var _e105 = adv_interface$1.preloadFlowCustomAd(PreloadFlowType.Main);
        Promise.all(_e105).then(function() {
            HLSDKLocalData._flowPreloadPromises[PreloadFlowType.Main] = null, console.warn("All Main Custom Adv Preloaded...");
        });
    }
    FlowManager.exeMainView().then(function() {
        console.warn("showMainView succ..."), doCallback$1(e);
    }).catch(function(t) {
        console.error(t), console.warn("showMainView fail..."), doCallback$1(e);
    });
};

var checkFlowPreloadCustomAd = function checkFlowPreloadCustomAd(e, t) {
    var n = HLSDKLocalData._flowPreloadPromises[e];
    n && 0 !== n.length ? (PlatHelper.showLoading("疯狂加载中"), Promise.all(n).then(function() {
        PlatHelper.hideLoading(), doCallback$1(t);
    })) : doCallback$1(t);
};

HLSDK.showGamingView = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    console.warn("showGamingView...");
    checkFlowPreloadCustomAd(PreloadFlowType.Main, function() {
        if (!HLSDKLocalData._flowPreloadStates[PreloadFlowType.Gaming]) {
            HLSDKLocalData._flowPreloadStates[PreloadFlowType.Gaming] = !0;
            var _e106 = adv_interface$1.preloadFlowCustomAd(PreloadFlowType.Gaming);
            Promise.all(_e106).then(function() {
                HLSDKLocalData._flowPreloadPromises[PreloadFlowType.Gaming] = null, console.warn("All Gaming Custom Adv Preloaded...");
            });
        }
        FlowManager.exeGamingView().then(function() {
            console.warn("showGamingView succ..."), doCallback$1(e);
        }).catch(function(t) {
            console.error(t), console.warn("showGamingView fail..."), doCallback$1(e);
        });
    });
}, HLSDK.showGameEndView = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    console.warn("showGameEndView..."), checkFlowPreloadCustomAd(PreloadFlowType.Gaming, function() {
        FlowManager.exeGameEndView().then(function() {
            console.warn("showGameEndView succ..."), doCallback$1(e);
        }).catch(function(t) {
            console.error(t), console.warn("showGameEndView fail..."), doCallback$1(e);
        });
    });
}, HLSDK.showReviveView = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    console.warn("showReviveView..."), checkFlowPreloadCustomAd(PreloadFlowType.Gaming, function() {
        FlowManager.exeReviveView().then(function() {
            console.warn("showReviveView succ..."), doCallback$1(e);
        }).catch(function(t) {
            console.error(t), console.warn("showReviveView fail..."), doCallback$1(e);
        });
    });
}, HLSDK.showFinishView = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    console.warn("showFinishView..."), checkFlowPreloadCustomAd(PreloadFlowType.Gaming, function() {
        FlowManager.exeFinishView().then(function() {
            console.warn("showFinishView succ..."), doCallback$1(e);
        }).catch(function(t) {
            console.error(t), console.warn("showFinishView fail..."), doCallback$1(e);
        });
    });
}, HLSDK.showFinishFailView = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    console.warn("showFinishFailView..."), checkFlowPreloadCustomAd(PreloadFlowType.Gaming, function() {
        FlowManager.exeFinishFailView().then(function() {
            console.warn("showFinishFailView succ..."), doCallback$1(e);
        }).catch(function(t) {
            console.error(t), console.warn("showFinishFailView fail..."), doCallback$1(e);
        });
    });
}, HLSDK.showCustomView = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    console.warn("showCustomView..."), FlowManager.exeCustomView().then(function() {
        console.warn("showCustomView succ..."), doCallback$1(e);
    }).catch(function(t) {
        console.error(t), console.warn("showCustomView fail..."), doCallback$1(e);
    });
}, HLSDK.showCustomView_02 = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    console.warn("showCustomView_02..."), FlowManager.exeCustomView_02().then(function() {
        console.warn("showCustomView_02 succ..."), doCallback$1(e);
    }).catch(function(t) {
        console.error(t), console.warn("showCustomView_02 fail..."), doCallback$1(e);
    });
}, HLSDK.showCustomView_03 = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    console.warn("showCustomView_03..."), FlowManager.exeCustomView_03().then(function() {
        console.warn("showCustomView_03 succ..."), doCallback$1(e);
    }).catch(function(t) {
        console.error(t), console.warn("showCustomView_03 fail..."), doCallback$1(e);
    });
}, HLSDK.showCustomView_04 = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    console.warn("showCustomView_04..."), FlowManager.exeCustomView_04().then(function() {
        console.warn("showCustomView_04 succ..."), doCallback$1(e);
    }).catch(function(t) {
        console.error(t), console.warn("showCustomView_04 fail..."), doCallback$1(e);
    });
}, HLSDK.showCustomView_05 = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    console.warn("showCustomView_05..."), FlowManager.exeCustomView_05().then(function() {
        console.warn("showCustomView_05 succ..."), doCallback$1(e);
    }).catch(function(t) {
        console.error(t), console.warn("showCustomView_05 fail..."), doCallback$1(e);
    });
}, HLSDK.tempHide = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        couplet: !0,
        scroll: !0,
        matrix: !0
    };
    UIManager.tempHideAllUIs(e), adv_interface$1.tempHideAllAdvs(e);
}, HLSDK.showTempHide = function() {
    UIManager.showAllTempHideUIs(), adv_interface$1.showAllTempHideAdvs();
}, HLSDK.showBannerAd = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    adv_interface$1.showBannerAd(0, e, "");
}, HLSDK.hideBannerAd = function() {
    adv_interface$1.hideBannerAd();
}, HLSDK.showPrivacy = function(e) {
    UIManager.showUI(UIKeys.Private, e);
}, HLSDK.moveBannerAd = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    adv_interface$1.moveBannerAd(e);
}, HLSDK.moveBannerAdTo = function(e) {
    adv_interface$1.moveBannerAdTo(e);
}, HLSDK.isBannerOnShow = function() {
    return adv_interface$1.isBannerOnShow();
}, HLSDK.pauseAutoRefreshBannerAd = function() {
    adv_interface$1.pauseAutoRefreshBannerAd();
}, HLSDK.resumeAutoRefreshBannerAd = function() {
    adv_interface$1.resumeAutoRefreshBannerAd();
}, HLSDK.getNextFreeGetWay = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    adv_interface$1.getNextFreeGetWay(e.cb);
}, HLSDK.tryFreeToGetAReward = function(e) {
    adv_interface$1.tryFreeToGetAReward(e.shareScene, e.isFailTryAgain, e.showFailTips, e.succCb, e.failCb);
}, HLSDK.isWatchingVideoAdv = function() {
    return adv_interface$1.isWatchingVideoAdv();
}, HLSDK.showInterstitialAd = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    adv_interface$1.showInterstitialAd("", e.closeCb, e.errCb);
}, HLSDK.share = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    share_interface.share(e.sceneName, e.customQueryObj, e.showFailTips, e.cb);
}, HLSDK.shareVideo = function() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    share_interface.shareVideo(e.sceneName, e.videoPath, e.customQueryObj, e.showFailTips, e.cb);
}, HLSDK.sendEvent = function(e) {
    Reportor.report(e.eventName, e.data);
}, window.HLSDK = HLSDK;