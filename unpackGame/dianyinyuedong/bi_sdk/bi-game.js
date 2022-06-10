var _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, uma = require("./uma.min.js"), _typeof = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function(e) {
    return void 0 === e ? "undefined" : _typeof2(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof2(e);
};

!function() {
    var b = require("./bi-game-conf.js"), x = {
        BI: {},
        LeaderBoard: {}
    }, h = "info", v = "error", n = "JQ_" + b.game_id + "_sdk_event_id_end", r = "JQ_" + b.game_id + "_sdk_jq_uid", a = "JQ_" + b.game_id + "_sdk_login_data", g = (b.game_id, 
    b.game_id, b.game_id, b.game_id, "JQ_" + b.game_id + "_config_data"), l = "JQ_" + b.game_id + "_video_or_share_cnt", i = "JQ_" + b.game_id + "_error_mistake_state", f = "JQ" + b.game_id + "_first_login", s = "JQ" + b.game_id + "full_river_big_index", S = "JQ" + b.game_id + "new_full_river_is_click", _ = "JQ" + b.game_id + "new_full_river_show_index", c = (b.game_id, 
    "JQ" + b.game_id + "game_create_account_time"), d = "JQ" + b.game_id + "error_click_device_list", m = "JQ" + b.game_id + "chat_local_list", u = "JQ" + b.game_id + "interact_local_list", w = "JQ" + b.game_id + "friend_info_local_list", p = "JQ" + b.game_id + "friend_apply_info_local_list", y = "JQ" + b.game_id + "friend_black_list", B = "JQ" + b.game_id + "show_and_click_list", C = "JQ" + b.game_id + "last_clickList", L = "JQ" + b.game_id + "daily_end_time", R = 2001, I = 2002, N = 3001, k = {
        requestUrl: function(e) {
            var t = null;
            t = "local" == e ? "http://192.168.1.206:8802/report" : "dev" == e ? "https://bi.52ugame.xy" + b.game_id + "/report" : "https://api.zqygame.com/api";
            return t;
        }(b.env),
        jq_uid: "",
        token: "",
        open_id: "",
        created_at: "",
        app_id: "",
        game_id: b.game_id,
        report_data_game_id: "",
        event_id: "",
        version: "",
        time: "",
        loginLock: 0,
        SystemSwitcher: {},
        RETRY_TIME: 50,
        SUCCESS_CODE: 0,
        on_show_time: 0,
        scene: 0,
        launch_info: {},
        need_statics: !1,
        launchData: "",
        user_update_url: "/get_bi_config",
        data_report_origin_url: "https://a.zqygame.com/api",
        data_report_url: "/action_report",
        get_openid_url: "/get_open_id",
        user_info_report_url: "/authorize_user",
        friend_apply_list_url: "/apply_list",
        friend_list_url: "/friend_list",
        friend_apply_url: "/apply_add",
        agree_friend_apply_url: "/agree_friend",
        refuse_friend_apply_url: "/refuse_friend",
        delete_friend_url: "/delete_friend",
        get_chat_info_url: "/get_user_chat",
        send_chat_info_url: "/save_user_chat",
        send_interact_url: "/create_interact",
        get_campaign_dress_url: "/xgoxmnq/get_campaign_dress",
        refresh_campaign_dress_url: "/xgoxmnq/refresh_campaign_dress",
        upload_dress_url: "/xgoxmnq/upload_dress",
        like_dress_url: "/xgoxmnq/like_dress",
        get_dress_rank_url: "/xgoxmnq/get_dress_rank",
        get_user_status_url: "/get_user_status",
        river_diversion_url: "/riverDiversion",
        batch_river_diversion_url: "/batchRiverDiversion",
        save_user_info_url: "/save_user_info",
        get_user_info_url: "/get_user_info",
        share_card_friend_url: "/share_card_friend",
        subscribe_message_url: "/subscribe_message",
        get_friend_dress_rank_url: "/get_friend_rank",
        get_user_other_info_url: "/xgoxmnq/get_user_other_info",
        update_game_config_url: "/check_bi_config",
        get_diversion_url: "/get_diversion",
        diversion_report_url: "/diversion_report",
        queryCity_url: "/queryCity",
        login_try_times: 0,
        card_id: "",
        local_update_version: "0.0.26"
    }, o = [], E = function() {
        var e = 3, t = null;
        t = "wx" == b.login_type ? wx.getSystemInfoSync() : qq.getSystemInfoSync();
        null != t && ("devtools" == t.platform ? e = 3 : "ios" == t.platform ? e = 1 : "android" == t.platform && (e = 2));
        return e;
    }(), T = 0, T = "wx" == b.login_type ? wx.getStorageSync(n) ? wx.getStorageSync(n) : 0 : qq.getStorageSync(n) ? qq.getStorageSync(n) : 0, F = !1, t = [], O = 1, P = !1, A = [];
    function e() {
        this.listeners = {}, this.maxListener = 20;
    }
    e.prototype.addListener = function(e, t) {
        var n = this.listeners;
        n[e] && n[e].length >= this.maxListener ? console.log("监听器的最大数量是%d,您已超出限制", this.maxListener) : n[e] instanceof Array ? -1 === n[e].indexOf(t) && n[e].push(t) : n[e] = [].concat(t);
    }, e.prototype.emit = function(e) {
        var t = Array.prototype.slice.call(arguments);
        t.shift();
        var n = this.listeners;
        n[e] instanceof Array && n[e].forEach(function(e) {
            e.apply(null, t);
        });
    }, e.prototype.listeners = function(e) {
        return this.listeners[e];
    }, e.prototype.setMaxListeners = function(e) {
        this.maxListener = e;
    }, e.prototype.removeListener = function(e, t) {
        var n = this.listeners;
        0 <= (t = (n[e] || []).indexOf(t)) && n[e].splice(t, 1);
    }, e.prototype.removeAllListener = function(e) {
        this.listeners[e] = [];
    }, x.eventListerObj = new e(), x.BI.updateDuration = function() {
        if (k.need_statics) return k.on_show_time ? new Promise(function(i, o) {
            var r = Math.round(new Date().getTime() / 1e3) - k.on_show_time;
            return function t() {
                var n = {
                    game_id: k.report_data_game_id,
                    action: 1002,
                    uid: k.jq_uid,
                    stay_time: r,
                    version: null != b.version ? b.version : ""
                };
                null != x.open_id && null != x.open_id && (n.open_id = x.open_id);
                var e = k.data_report_origin_url + k.data_report_url + "?game_id=" + n.game_id + "&action=" + n.action + "&uid=" + n.uid + "&stay_time=" + n.stay_time;
                null != x.open_id && null != x.open_id && (e = k.data_report_origin_url + k.data_report_url + "?game_id=" + n.game_id + "&action=" + n.action + "&uid=" + n.uid + "&open_id=" + n.open_id + "&stay_time=" + n.stay_time), 
                e = e + "&version=" + n.version, "" != k.report_data_game_id ? x.NetEngineReportRequestReport({
                    url: e,
                    data: n,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        lt("时长上报：成功", +r + "s", h), P = !1, tt(), i(e);
                    },
                    fail: function(e) {
                        rt(o, t), lt("时长上报 :失败", e, v, n);
                    }
                }) : console.log("report_data_game_id 未配置，不支持数据上报", n, e);
            }();
        }) : void 0;
    }, x.BI.getSdkOpenId = function() {
        return new Promise(function(e, t) {
            null != x.open_id && null != x.open_id ? e({
                openId: x.open_id
            }) : (x.eventListerObj.removeListener("wxOpenIdRefresh"), x.eventListerObj.addListener("wxOpenIdRefresh", function() {
                e({
                    openId: x.open_id
                }), x.eventListerObj.removeListener("wxOpenIdRefresh");
            }));
        });
    }, x.BI.updateUserInfo = function(e, t, n) {
        console.log("userInfo:", e);
        var c;
        c = e, new Promise(function(a, l) {
            return function o() {
                var e, r = {
                    open_id: x.open_id,
                    name: c && c.nickName || "",
                    avatar: c && c.avatarUrl || "",
                    sex: c && c.gender || "",
                    address: c && c.country + "," + c.province + "," + c.city || "",
                    info: JSON.stringify(t),
                    game_data: JSON.stringify(n)
                };
                null != x.open_id && null != x.open_id ? null != c && null != c ? (e = k.requestUrl + k.user_info_report_url + "?open_id=" + r.open_id + "&name=" + r.name + "&avatar=" + r.avatar + "&sex=" + r.sex + "&address=" + r.address + "&info=" + r.info + "&game_data=" + r.game_data, 
                x.NetEngineRequest({
                    url: e,
                    data: r,
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t, n, i = nt(e, l, o, r);
                        0 == e.data.code ? (lt("上报用户数据：成功", c, h), i && i.list && (t = wx.getStorageSync(w)) && 0 < i.list.length && (t.friend_list = i.list, 
                        wx.setStorageSync(w, t)), i && i.apply_list && (n = wx.getStorageSync(p)) && 0 < i.apply_list.length && (n.apply_list = i.apply_list, 
                        wx.setStorageSync(p, n))) : lt("上报用户数据：失败", e.data.message, v), a(e);
                    },
                    fail: function(e) {
                        at(l, o), lt("上报用户数据:失败", e, v, r);
                    }
                })) : console.log("上报用户数据异常") : lt("上报用户数据:失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v);
            }();
        });
    }, x.BI.getUserPackData = function(a) {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    open_id: x.open_id
                }, e = k.requestUrl + k.get_user_info_url + "?open_id=" + i.open_id;
                null != x.open_id && null != x.open_id ? null != x.token && null != x.token ? x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        0 == e.data.code ? (lt("用户数据读档:成功", t, h), a && a(t)) : (lt("用户数据存档:失败", e && e.data && e.data.message, v, i), 
                        a && a({})), o(t);
                    },
                    fail: function(e) {
                        at(r, n), lt("用户数据存档:失败", e, v, i);
                    }
                }) : lt("用户数据读档:失败", "服务端校验失败", v) : lt("用户数据读档:失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v);
            }();
        });
    }, x.BI.getWxFriendsList = function() {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    open_id: x.open_id
                }, e = k.requestUrl + k.friend_list_url + "?open_id=" + i.open_id;
                null != x.open_id && null != x.open_id ? null != x.token && null != x.token ? x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        0 == e.data.code ? lt("获取好友列表:成功", t, h) : lt("获取好友列表:失败", e && e.data && e.data.message, v, i), 
                        o(t);
                    },
                    fail: function(e) {
                        at(r, n), lt("获取好友列表:失败", e, v, i);
                    }
                }) : lt("获取好友列表:失败", "服务端校验失败", v) : lt("获取好友列表:失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v);
            }();
        });
    }, x.BI.getWxFriendsApplyList = function() {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    open_id: x.open_id
                }, e = k.requestUrl + k.friend_apply_list_url + "?open_id=" + i.open_id;
                null != x.open_id && null != x.open_id ? null != x.token && null != x.token ? x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        0 == e.data.code ? lt("获取好友申请列表:成功", t, h) : lt("获取好友申请列表:失败", e && e.data && e.data.message, v, i), 
                        o(t);
                    },
                    fail: function(e) {
                        at(r, n), lt("获取好友申请列表:失败", e, v, i);
                    }
                }) : lt("获取好友申请列表:失败", "服务端校验失败", v) : lt("获取好友申请列表:失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v);
            }();
        });
    }, x.BI.applyFriend = function(t, a) {
        if (null != t && null != t) return new Promise(function(o, r) {
            return function n() {
                var i = {
                    open_id: x.open_id,
                    receiver_openid: t
                }, e = k.requestUrl + k.friend_apply_url + "?open_id=" + i.open_id + "&receiver_openid=" + i.receiver_openid;
                null != x.open_id && null != x.open_id ? null != x.token && null != x.token ? x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        0 == e.data.code ? (lt("申请好友:成功", t, h), a && a(!0, null)) : (lt("申请好友:失败", e && e.data && e.data.message, v, i), 
                        a && a(!1, e.data.message)), o(t);
                    },
                    fail: function(e) {
                        at(r, n), lt("申请好友:失败", e, v, i);
                    }
                }) : lt("申请好友:失败", "服务端校验失败", v) : lt("申请好友:失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v);
            }();
        });
        console.log("接受申请对象的openId不能为空");
    };
    function W(e, t) {
        if (null == e || e && e.length < 0 || null == t || null == t) return -1;
        for (var n = 0; n < e.length; n++) if (e[n] && e[n].open_id == t) return n;
        return -1;
    }
    function M(o) {
        return function(e, t) {
            var n, i;
            if ("object" === (void 0 === e ? "undefined" : _typeof2(e)) && "object" === (void 0 === t ? "undefined" : _typeof2(t)) && e && t) return (n = e[o]) === (i = t[o]) ? 0 : (void 0 === n ? "undefined" : _typeof2(n)) === (void 0 === i ? "undefined" : _typeof2(i)) ? n < i ? -1 : 1 : (void 0 === n ? "undefined" : _typeof2(n)) < (void 0 === i ? "undefined" : _typeof2(i)) ? -1 : 1;
            throw "error";
        };
    }
    x.BI.handleFriendFunc = function(s, d, u) {
        if ("" != d && null != d && null != d) return new Promise(function(l, c) {
            return function r() {
                var a = {
                    open_id: x.open_id,
                    receiver_openid: s
                }, e = "";
                switch (d) {
                  case "agree_wx_friend_apply":
                    e = k.requestUrl + k.agree_friend_apply_url + "?open_id=" + a.open_id + "&receiver_openid=" + a.receiver_openid;
                    break;

                  case "refuse_wx_friend_apply":
                    e = k.requestUrl + k.refuse_friend_apply_url + "?open_id=" + a.open_id + "&receiver_openid=" + a.receiver_openid;
                    break;

                  case "delete_wx_friend":
                    e = k.requestUrl + k.delete_friend_url + "?open_id=" + a.open_id + "&receiver_openid=" + a.receiver_openid;
                }
                null != x.open_id && null != x.open_id ? null != x.token && null != x.token ? (console.log(d, "好友操作"), 
                x.NetEngineRequest({
                    url: e,
                    data: a,
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t, n, i, o = nt(e, c, r, a);
                        0 == e.data.code ? (lt(d + ":成功", o, h), "refuse_wx_friend_apply" == d ? (t = wx.getStorageSync(p)) && (-1 != (n = W(t.apply_list, s)) && t.apply_list.splice(n, 1), 
                        wx.setStorageSync(p, t), x.eventListerObj.emit("friendsInfoChangeMsg", 1)) : (i = wx.getStorageSync(w)) && (i.friend_list = o.list, 
                        wx.setStorageSync(w, i), x.eventListerObj.emit("friendsInfoChangeMsg", 0)), u && u(!0, null)) : (lt(d + ":失败", e && e.data && e.data.message, v, a), 
                        u && u(!1, e.data.message)), l(o);
                    },
                    fail: function(e) {
                        at(c, r), lt(d + ":失败", e, v, a);
                    }
                })) : lt(d + ":失败", "服务端校验失败", v) : lt(d + ":失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v);
            }();
        });
        console.log("操作好友指令不为空");
    }, x.BI.refreshMsgInfo = function() {
        var e = setTimeout(function() {
            console.log("10s请求一次消息数据"), clearTimeout(e), x.BI.getUserChatInfo().then(function(e) {
                if (e.chat_list && 0 < e.chat_list.length) {
                    for (var t = e.chat_list, n = 0; n < t.length; n++) x.BI.isInBlackList(t[n].open_id) || D(t[n].open_id, x.open_id, t[n].message, t[n].date, !1);
                    x.eventListerObj.emit("chatInfoChangeMsg");
                }
                if (e.apply_list && 0 < e.apply_list.length) {
                    for (var i = e.apply_list, o = 0; o < i.length; o++) x.BI.isInBlackList(i[o].open_id) && i.splice(o, 1);
                    var r = wx.getStorageSync(p);
                    r && (r.apply_list = i, wx.setStorageSync(p, r), x.eventListerObj.emit("friendsInfoChangeMsg", 1));
                }
                if (e.friend_list && 0 < e.friend_list.length) {
                    for (var a = e.friend_list, l = 0; l < a.length; l++) x.BI.isInBlackList(a[l].open_id) && a.splice(l, 1);
                    var c = wx.getStorageSync(w);
                    c && (c.friend_list = a, wx.setStorageSync(w, c), x.eventListerObj.emit("friendsInfoChangeMsg", 0));
                }
                if (e.interact_list && 0 < e.interact_list.length) {
                    for (var s = e.interact_list, d = 0; d < s.length; d++) z(s[d]);
                    x.eventListerObj.emit("interactChangeMsg");
                }
            }), x.BI.refreshMsgInfo();
        }, 1e4);
    }, x.BI.getUserChatInfo = function() {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    open_id: x.open_id
                }, e = k.requestUrl + k.get_chat_info_url + "?open_id=" + i.open_id;
                null != x.open_id && null != x.open_id ? null != x.token && null != x.token ? x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        0 == e.data.code ? lt("获取聊天列表:成功", t, h) : lt("获取聊天列表:失败", e && e.data && e.data.message, v, i), 
                        o(t);
                    },
                    fail: function(e) {
                        at(r, n), lt("获取聊天列表:失败", e, v, i);
                    }
                }) : lt("获取聊天列表:失败", "服务端校验失败", v) : lt("获取聊天列表:失败", "openId获取失败,可以获取sdk的用户open_id成功后再调用此接口", v);
            }();
        });
    };
    var D = function(e, t, n, i, o) {
        var r = G();
        if (null != r && r) {
            var a = String(t);
            if (t == x.open_id && (a = String(e)), null != r.midList[a] && null != r.midList[a] || (r.midList[a] = []), 
            null == r.msgList[a] || null == r.msgList[a]) {
                r.msgList[a] = [];
                var l = {
                    id: r.midList[a].length,
                    receive_open_id: t,
                    send_open_id: e,
                    message: n,
                    isMark: o,
                    sendtime: i
                }, c = {
                    mid: r.midList[a].length
                };
                r.midList[a].push(c), r.msgList[a].push(l), r.msgList[a].sort(M("sendtime"));
            } else {
                l = {
                    id: r.midList[a].length,
                    receive_open_id: t,
                    send_open_id: e,
                    message: n,
                    isMark: o,
                    sendtime: i
                }, c = {
                    mid: r.midList[a].length
                };
                for (var s in r.midList[a].push(c), r.msgList[a].push(l), r.msgList) if (r.msgList[s] && 0 < r.msgList[s].length) for (var d = 0; d < r.msgList[s].length; d++) {
                    var u = r.msgList[s][d], g = new Date().getTime();
                    1296e6 < Math.abs(g - u.sendtime) && r.msgList[s].splice(d, 1);
                }
                r.msgList[a].sort(M("sendtime"));
            }
            wx.setStorageSync(m, r);
        }
    }, G = function() {
        var e = wx.getStorageSync(m) ? wx.getStorageSync(m) : "";
        if ("" != e) return e;
        return wx.setStorageSync(m, {
            msgList: {},
            midList: {}
        }), wx.getStorageSync(m);
    };
    x.BI.getChatInfo = function() {
        var e = G();
        return e && e.msgList || null;
    }, x.BI.updateChatInfo = function(e) {
        x.eventListerObj.removeListener("chatInfoChangeMsg"), x.eventListerObj.addListener("chatInfoChangeMsg", function() {
            console.log("sdk聊天消息返回最新的消息数据"), e && e();
        });
    };
    function U() {
        var e = wx.getStorageSync(u) ? wx.getStorageSync(u) : "";
        return "" != e ? e : (wx.setStorageSync(u, {
            msgList: [],
            midList: []
        }), wx.getStorageSync(u));
    }
    x.BI.maskChatInfoIsRead = function(e, t, n) {
        var i = G();
        for (var o in i.msgList) if (String(o) == e && i.msgList[o] && 0 < i.msgList[o].length) for (var r = 0; r < i.msgList[o].length; r++) if (i.msgList[o][r].id == t) {
            i.msgList[o][r].isMark = !0;
            break;
        }
        wx.setStorageSync(m, i), n && n();
    }, x.BI.getInteractInfo = function() {
        var e = U();
        return e && e.msgList || null;
    }, x.BI.updateInteractInfo = function(e) {
        x.eventListerObj.removeListener("interactChangeMsg"), x.eventListerObj.addListener("interactChangeMsg", function() {
            console.log("sdk聊天消息返回最新的互动数据"), e && e();
        });
    };
    var z = function(e) {
        var t = U();
        if (null != t && t) {
            var n = {
                id: t.midList.length,
                send_user_info: e && e.sender || "",
                sendTime: e && e.date || 0,
                interactType: e && e.type || 0,
                interactMsg: e && e.message || 0,
                isMark: !1
            }, i = {
                mid: t.midList.length
            };
            t.midList.push(i), t.msgList.push(n);
            for (var o = 0; o < t.msgList.length; o++) {
                var r = t.msgList[o], a = new Date().getTime();
                1296e6 < Math.abs(a - r.sendTime) && t.msgList.splice(o, 1);
            }
            t.msgList.sort(M("sendTime")), wx.setStorageSync(u, t);
        }
    }, q = 0;
    x.BI.sendInteractInfo = function(a, l, c, s, d) {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    send_id: x.open_id,
                    recevie_id: a,
                    message: l,
                    type: c || 0
                }, e = k.requestUrl + k.send_interact_url + "?send_id=" + i.send_id + "&recevie_id=" + i.recevie_id + "&message=" + i.message + "&type=" + i.type;
                if (null == x.open_id || null == x.open_id) return lt("发送互动:失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v), 
                void (d && d("openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口"));
                if (null == x.token || null == x.token) return lt("发送互动:失败", "服务端校验失败", v), void (d && d("服务端校验失败"));
                if (a == x.open_id) return console.log("自己不能给自己发互动(*^_^*)"), void (d && d("自己不能给自己发互动(*^_^*)"));
                if (0 != q && new Date().getTime() - q < 1e3) {
                    var t = "发送互动的次数过于频繁，请稍后再尝试发送";
                    return console.log(t), void (d && d(t));
                }
                q = new Date().getTime(), x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        0 == e.data.code ? (lt("发送互动:成功", t, h), s && s()) : (lt("发送互动:失败", e && e.data && e.data.message, v, i), 
                        d && d(e.data.message)), o(t);
                    },
                    fail: function(e) {
                        at(r, n), lt("发送互动:失败", e, v, i);
                    }
                });
            }();
        });
    }, x.BI.maskInteractIsRead = function(e, t) {
        for (var n = U(), i = 0; i < n.msgList.length; i++) if (n.msgList[i].id == e) {
            n.msgList[i].isMark = !0;
            break;
        }
        wx.setStorageSync(u, n), t && t();
    };
    function V(e, t) {
        for (var n = 0; n < e.length; n++) if (t == e[n]) return 1;
    }
    x.BI.isInBlackList = function(e) {
        var t = wx.getStorageSync(y) ? wx.getStorageSync(y) : "";
        return "" != t && !!V(t.blackList, e);
    }, x.BI.addBlackList = function(r, a, e) {
        if (x.open_id && x.open_id == r) return console.log("不能添加自己进入黑名单"), void (e && e());
        var t, n = wx.getStorageSync(y) ? wx.getStorageSync(y) : "";
        "" == n ? (V((t = {
            blackList: []
        }).blackList, r) || t.blackList.push(r), wx.setStorageSync(y, t)) : (V(n.blackList, r) || n.blackList.push(r), 
        wx.setStorageSync(y, n)), x.BI.getFriendInfo(function(e) {
            if (e.friend_list && 0 < e.friend_list.length) for (var t = 0; t < e.friend_list.length; t++) if (e.friend_list[t].open_id == r) {
                var n, i = wx.getStorageSync(w);
                i && (-1 != (n = W(i.friend_list, r)) && i.friend_list.splice(n, 1), wx.setStorageSync(w, i), 
                x.eventListerObj.emit("friendsInfoChangeMsg", 0));
                var o = G();
                o && (o.msgList[r] = [], o.midList[r] = [], wx.setStorageSync(m, o)), console.log("添加黑名单成功"), 
                a && a();
                break;
            }
        });
    }, x.BI.removeBlackList = function(e, n, t) {
        var i, o = wx.getStorageSync(y) ? wx.getStorageSync(y) : "";
        "" != o ? o.blackList && 0 < o.blackList.length && (-1 != (i = function(e, t) {
            if (null == e || e && e.length < 0 || null == t || null == t) return -1;
            for (var n = 0; n < e.length; n++) if (e[n] && e[n] == t) return n;
            return -1;
        }(o.blackList, e)) && o.blackList.splice(i, 1), wx.setStorageSync(y, o), wx.getStorageSync(w) && x.BI.getWxFriendsList().then(function(e) {
            var t = {
                friend_list: e.list
            };
            wx.setStorageSync(w, t), x.eventListerObj.emit("friendsInfoChangeMsg", 0), n && n();
        })) : (t && t(), console.log("黑名单为空，无法删除"));
    }, x.BI.addFriendByShareCard = function(t, a, l) {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    open_id: t,
                    friend_id: a
                }, e = k.requestUrl + k.share_card_friend_url + "?open_id=" + i.open_id + "&friend_id=" + i.friend_id;
                null != t && null != t ? null != x.token && null != x.token ? x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        0 == e.data.code ? (lt("分享卡片添加好友:成功", t, h), l && l(!0, t)) : (lt("分享卡片添加好友:失败", e && e.data && e.data.message, v, i), 
                        l && l(!1, e.data.message)), o(t);
                    },
                    fail: function(e) {
                        at(r, n), lt("申请好友:失败", e, v, i);
                    }
                }) : lt("分享卡片添加好友:失败", "服务端校验失败", v) : lt("分享卡片添加好友:失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v);
            }();
        });
    }, x.BI.getFriendInfo = function(n) {
        var e = wx.getStorageSync(w) ? wx.getStorageSync(w) : "";
        "" == e ? x.BI.getWxFriendsList().then(function(e) {
            var t = {
                friend_list: e.list
            };
            wx.setStorageSync(w, t), n && n(wx.getStorageSync(w));
        }) : n && n(e);
    }, x.BI.getFriendApplyInfo = function(n) {
        var e = wx.getStorageSync(p) ? wx.getStorageSync(p) : "";
        "" == e ? x.BI.getWxFriendsApplyList().then(function(e) {
            var t = {
                apply_list: e.list
            };
            wx.setStorageSync(p, t), n && n(wx.getStorageSync(p));
        }) : n && n(e);
    }, x.BI.updateFriendInfo = function(t) {
        x.eventListerObj.removeListener("friendsInfoChangeMsg"), x.eventListerObj.addListener("friendsInfoChangeMsg", function(e) {
            t && t(e);
        });
    };
    var X = 0;
    x.BI.sendChatMsg = function(a, l, c, s) {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    open_id: x.open_id,
                    friend_id: a,
                    message: l
                }, e = k.requestUrl + k.send_chat_info_url + "?open_id=" + i.open_id + "&friend_id=" + i.friend_id + "&message=" + i.message;
                if (null == x.open_id || null == x.open_id) return lt("发送聊天:失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v), 
                void (s && s("openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口"));
                if (null == x.token || null == x.token) return lt("发送聊天:失败", "服务端校验失败", v), void (s && s("服务端校验失败"));
                if (0 != X && new Date().getTime() - X < 1e3) {
                    var t = "发送消息的次数过于频繁，请稍后再尝试发送";
                    return console.log(t), void (s && s(t));
                }
                if (X = new Date().getTime(), a == x.open_id) return console.log("自己不能给自己发消息(*^_^*)"), 
                void (s && s("自己不能给自己发消息(*^_^*)"));
                x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        0 == e.data.code ? (null != t.date && D(x.open_id, a, l, t.date, !0), lt("发送聊天:成功", t, h), 
                        x.eventListerObj.emit("chatInfoChangeMsg"), c && c()) : (lt("发送聊天:失败", e && e.data && e.data.message, v, i), 
                        s && s(e.data.message)), o(t);
                    },
                    fail: function(e) {
                        at(r, n), lt("发送聊天:失败", e, v, i);
                    }
                });
            }();
        });
    };
    function Y(t, a, l) {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    open_id: x.open_id
                }, e = k.requestUrl + t + "?open_id=" + i.open_id;
                console.log(e), null != x.open_id && null != x.open_id ? null != x.token && null != x.token ? x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        0 == e.data.code ? (lt(a + ":成功", t, h), l && l(!0, t)) : (lt(a + ":失败", e && e.data && e.data.message, v, i), 
                        l && l(!1, e.data.message)), o(t);
                    },
                    fail: function(e) {
                        at(r, n), lt(a + ":失败", e, v, i);
                    }
                }) : lt(a + ":失败", "服务端校验失败", v) : lt(a + ":失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v);
            }();
        });
    }
    x.BI.getCampaignDress = function(e) {
        Y(k.get_campaign_dress_url, "获取竞选装扮", e);
    }, x.BI.refreshCampainDress = function(e) {
        Y(k.refresh_campaign_dress_url, "刷新竞选装扮", e);
    }, x.BI.uploadDress = function(t, a) {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    open_id: x.open_id,
                    dress_data: JSON.stringify(t)
                }, e = k.requestUrl + k.upload_dress_url + "?open_id=" + i.open_id + "&dress_data=" + i.dress_data;
                null != x.open_id && null != x.open_id ? null != x.token && null != x.token ? (console.log(e), 
                console.log(i), x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        0 == e.data.code ? (lt("上传装扮:成功", t, h), a && a(!0, null)) : (lt("上传装扮:失败", e && e.data && e.data.message, v, i), 
                        a && a(!1, e.data.message)), o(t);
                    },
                    fail: function(e) {
                        at(r, n), lt("上传装扮:失败", e, v, i);
                    }
                })) : lt("上传装扮:失败", "服务端校验失败", v) : lt("上传装扮:失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v);
            }();
        });
    }, x.BI.likeDress = function(t, a) {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    open_id: x.open_id,
                    dress_id: t
                }, e = k.requestUrl + k.like_dress_url + "?open_id=" + i.open_id + "&dress_id=" + i.dress_id;
                null != x.open_id && null != x.open_id ? null != x.token && null != x.token ? x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        0 == e.data.code ? (lt("点赞装扮:成功", t, h), a && a(!0, null)) : (lt("点赞装扮:失败", e && e.data && e.data.message, v, i), 
                        a && a(!1, e.data.message)), o(t);
                    },
                    fail: function(e) {
                        at(r, n), lt("点赞装扮:失败", e, v, i);
                    }
                }) : lt("点赞装扮:失败", "服务端校验失败", v) : lt("点赞装扮:失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v);
            }();
        });
    }, x.BI.getDressRankList = function(t, a, l) {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    date: t,
                    size: null != a ? a : 50,
                    open_id: x.open_id
                }, e = k.requestUrl + k.get_dress_rank_url + "?date=" + i.date + "&size=" + i.size + "&open_id=" + i.open_id;
                null != x.open_id && null != x.open_id ? null != x.token && null != x.token ? x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        0 == e.data.code ? (lt("获取装扮排行榜:成功", t, h), l && l(!0, t)) : (lt("获取装扮排行榜:失败", e && e.data && e.data.message, v, i), 
                        l && l(!1, e.data.message)), o(t);
                    },
                    fail: function(e) {
                        at(r, n), lt("获取装扮排行榜:失败", e, v, i);
                    }
                }) : lt("获取装扮排行榜:失败", "服务端校验失败", v) : lt("获取装扮排行榜:失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v);
            }();
        });
    }, x.BI.subscribe_message = function(t, a, l) {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    open_id: x.open_id,
                    page: null != t && null != t ? t : "",
                    lang: null != a && null != a ? a : "zh_CN",
                    miniprogram_state: null != l && null != l ? l : "formal",
                    game_id: k.game_id
                }, e = k.requestUrl + k.subscribe_message_url + "?open_id=" + i.open_id + "&page=" + i.page + "&lang=" + i.lang + "&miniprogram_state=" + i.miniprogram_state + "&game_id=" + i.game_id;
                null != x.open_id && null != x.open_id ? x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        0 == e.data.code ? lt("发送订阅:成功", "", h) : (lt("发送订阅:失败", e && e.data && e.data.message, v, i), 
                        callback && callback(!1, e.data.message)), o(t);
                    },
                    fail: function(e) {
                        at(r, n), lt("发送订阅:失败", e, v, i);
                    }
                }) : lt("发送订阅:失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v);
            }();
        });
    }, x.BI.getFriendDressRank = function(a) {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    open_id: x.open_id
                }, e = k.requestUrl + k.get_friend_dress_rank_url + "?open_id=" + i.open_id;
                null != x.open_id && null != x.open_id ? null != x.token && null != x.token ? x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        open_id: x.open_id,
                        token: x.token
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        0 == e.data.code ? (lt("获取好友装扮排行:成功", t, h), a && a(!0, t)) : (lt("获取好友装扮排行:失败", e && e.data && e.data.message, v, i), 
                        a && a(!1, e.data.message)), o(t);
                    },
                    fail: function(e) {
                        at(r, n), lt("获取好友装扮排行:失败", e, v, i);
                    }
                }) : lt("获取好友装扮排行:失败", "服务端校验失败", v) : lt("获取好友装扮排行:失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v);
            }();
        });
    };
    var H = {
        url: "https://cdn.ball.52ugame.com/analyze/navigateRes/",
        scaleTimeScale: null,
        board: null,
        btn: null,
        exitBtn: null,
        chouTiTxtNode: null,
        changeBtn: null,
        topRiverItem: null,
        topRiverItemPos: null,
        chouTiList: null,
        configList: null,
        configChouDiList: null,
        chouTiShowNodeList: null,
        chouTiIsLeft: !(x.BI.getUserOtherInfo = function(a) {
            return new Promise(function(o, r) {
                return function n() {
                    var i = {
                        open_id: x.open_id
                    }, e = k.requestUrl + k.get_user_other_info_url + "?open_id=" + i.open_id;
                    null != x.open_id && null != x.open_id ? null != x.token && null != x.token ? x.NetEngineRequest({
                        url: e,
                        data: i,
                        method: "GET",
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            open_id: x.open_id,
                            token: x.token
                        },
                        success: function(e) {
                            var t = nt(e, r, n, i);
                            0 == e.data.code ? (lt("获取用户其他信息:成功", t, h), a && a(!0, t)) : (lt("获取用户其他信息:失败", e && e.data && e.data.message, v, i), 
                            a && a(!1, e.data.message)), o(t);
                        },
                        fail: function(e) {
                            at(r, n), lt("获取用户其他信息:失败", e, v, i);
                        }
                    }) : lt("获取用户其他信息:失败", "服务端校验失败", v) : lt("获取用户其他信息:失败", "openId获取失败, 可以获取sdk的用户open_id成功后再调用此接口", v);
                }();
            });
        }),
        chouTiBtnPos: null,
        chouTiBoardPos: null,
        navigateContent: null,
        navigateFullScreenContent: null,
        ChouTiCurrentIndex: 0,
        ChouTiIsPop: !1,
        chouTiArea: null,
        chouTiShowMaxNum: 9,
        nativeOperateShow: 1,
        nativeOperateClick: 2,
        nativeOperateFail: 3,
        nativeOperateSuccess: 4,
        topRiverIndex: 0,
        topRiverConfigList: null,
        topTimesCnt: 0,
        topClickTimes: 0,
        scrollViewContent: null,
        fullRiverBtn: null,
        fullRiverList: null,
        fullRiverBgList: null,
        fullRiverCallBack: null,
        fullRiverIsHasNotbanner: !1,
        topRiverBIReportName: null,
        chouBIReportName: null,
        fullRiverBIReportName: null,
        chouTiOpenFirst: !1,
        errorClickContent: null,
        errorClickErrorArray: [],
        fullScreenBigPicList: null,
        fullScreenBigRiverIndex: 0,
        fullScreenBigRiverContent: null,
        fullScreenBigRiverClickTimes: 0,
        fullScreenBigTimeFunc: null,
        fullScreenBigCntFunc: null,
        fullScreenRiverReportName: null,
        fullScreenRiverCountLabel: null,
        popRiverContent: null,
        popRiverList: null,
        wechatGameExitBtn: null,
        wechatGameExitContent: null,
        wechatGameExitList: null,
        wechatGameExitBtnCallBack: null,
        wechatGameExitBtnCloseBack: null,
        wechatGameExitPos: null,
        wechatGameExitPosXByLaya: null,
        wechatGameExitPosYByLaya: null,
        bottomRiverList: null,
        bottomRiverContent: null,
        bottomRiverTimeOffset: 0,
        bottomRiverTimeCnt: 0,
        bottomRiverNode: null,
        bottomRiverPrefab: null,
        bottomFingerTouch: !1,
        bottomContentWidth: 0,
        bottomItemWidth: 0,
        bottomItemStep: 0,
        bottomRiverShowList: null,
        RootSceneNode: null,
        resMap: null,
        fullScreenRefresh: !1,
        popRiverRefresh: !1,
        lastTimestamp: 0,
        listRiverContent: null,
        listRiverList: null,
        listRiverShowNum: 0,
        listRiverPosList: null,
        listRiverPrefab: null,
        listRiverPrefabWidth: 0,
        newFullScreenRiverNodes: null,
        newFullScreenRiverCallBack: null,
        newFullScreenRiverIsClick: 0,
        newFUllScreenRiverClickCnt: 0,
        newFUllscreenRiverBottomShowIndex: 0,
        newFullRefreshTop: !1,
        newFullRefreshBottom: !1,
        newFullScreenActive: !1,
        newListRefreshRiver: !1,
        newListRefreshRiver2: !1,
        adIsInit: !1,
        shareFunc: null,
        isSharing: !1,
        isInitSdkSuccess: !1,
        newBIConfig: null
    }, j = {
        bgNode: null,
        titlebg: null,
        spineNode: null,
        skeleonNode: null,
        hammerNode: null,
        closeArea: null,
        barBg: null,
        bar: null,
        barNode: null,
        btn: null,
        btnLabel: null,
        isWin: !1,
        keepClickTimeCount: 0,
        goldEggBarFillValue: 0,
        touchCount: 0,
        isTimeCount: !0,
        bannerMistakeClickRate: 4,
        mistakeCallBack: null,
        mistakeCloseBack: null,
        mistakeErrCallBack: null,
        mistakeIsOpen: -1,
        rewardNode: null,
        guangYunBg: null,
        lamp: null,
        isCanWin: !1,
        isErrorBanner: !1,
        cdLimitShowErrorClickState: !0,
        cdLimitShowErrorClickNum: 0,
        errorClickErrorCloseShowCb: null,
        errorClickErrorCloseHideCb: null
    };
    "wx" == b.login_type ? (wx.onShow(function(e) {
        return;
        var t, n, i, o, r;
        k.on_show_time = Math.round(new Date().getTime() / 1e3), console.log(e, "config.on_show_time"), 
        j.isCanWin && (x.BI.ErrorCLickshowWin(), j.isCanWin = !1, (t = wx.getSystemInfoSync()) && (n = new Date().getTime(), 
        "" != (i = wx.getStorageSync(d)) && 0 < Number(i) && (Number(i), r = "[" + (o = t.brand + t.model) + "]getErrorClickReward", 
        x.BI.umDataTrackEvent("errClickInfo", {
            device: o,
            operate: r
        })))), H.isSharing && (H.shareFunc && H.shareFunc(), H.isSharing = !1);
    }), wx.onHide(function() {
        console.log("切到后台"), x.BI.updateDuration();
    })) : (qq.onShow(function() {
        k.on_show_time = Math.round(new Date().getTime() / 1e3);
    }), qq.onHide(function() {}));
    function J(e, t, n, i, o, r, a) {
        wx.navigateToMiniProgram({
            appId: t,
            path: a,
            envVersion: "release",
            fail: function() {
                r && r();
            },
            success: function() {
                x.BI.createDataReport(5002, t), null != e && null != e && e && x.BI.diversionReport([ {
                    diversionId: e
                } ], 3, i), o && o();
            }
        });
    }
    function K(e, t, n, i, o, r) {
        var a = t;
        return null != Laya.loader.getRes(e) && null != Laya.loader.getRes(e) ? (a.texture = Laya.loader.getRes(e), 
        null != i && (a.width = i), null != o && (a.height = o), r && r()) : Laya.loader.load(e, Laya.Handler.create(this, function(e) {
            a.texture = e, null != i && (a.width = i), null != o && (a.height = o), r && r();
        })), a;
    }
    function Q(e, t) {
        var n = new cc.Node();
        return n.setPosition(e.x, e.y), n.setContentSize(t), n;
    }
    function Z() {
        var e = new cc.Node();
        return e.addComponent(cc.Sprite), e;
    }
    function $(e) {
        var t = new cc.Node(), n = new cc.Color(0, 0, 0);
        return t.color = n, t.addComponent(cc.Label), t.getComponent(cc.Label).fontSize = e || 22, 
        t;
    }
    function ee(i, o, r) {
        var e, t;
        H.resMap.has(o) ? (e = H.resMap.get(o), t = new cc.SpriteFrame(e), i.getComponent(cc.Sprite).spriteFrame = t, 
        r && r()) : cc.loader.load(o, function(e, t) {
            var n;
            e ? ee(i, o) : (n = new cc.SpriteFrame(t)).uv && 0 < n.uv.length ? (H.resMap.set(o, t), 
            i.getComponent(cc.Sprite) && (i.getComponent(cc.Sprite).spriteFrame = n), r && r()) : setTimeout(function() {
                ee(i, o);
            }, 1e3 / 60);
        });
    }
    function te(i, o, r, a) {
        var e, t;
        H.resMap.has(o) ? (e = H.resMap.get(o), t = new cc.SpriteFrame(e), i.getComponent(cc.Sprite).spriteFrame = t, 
        i.scaleX = r.width / i.getContentSize().width, i.scaleY = r.height / i.getContentSize().width, 
        a && a()) : cc.loader.load(o, function(e, t) {
            var n;
            e ? te(i, o, r, a) : (n = new cc.SpriteFrame(t)).uv && 0 < n.uv.length ? (H.resMap.set(o, t), 
            i.getComponent(cc.Sprite).spriteFrame = n, i.scaleX = r.width / i.getContentSize().width, 
            i.scaleY = r.height / i.getContentSize().width, a && a()) : setTimeout(function() {
                te(i, o, r, a);
            }, 1e3 / 60);
        });
    }
    function ne(i, o, r) {
        var e, t;
        H.resMap.has(o) ? (e = H.resMap.get(o), t = new cc.SpriteFrame(e), i.getComponent(cc.Mask) && (i.getComponent(cc.Mask).spriteFrame = t), 
        r && r()) : cc.loader.load(o, function(e, t) {
            var n;
            e ? ne(i, o) : (n = new cc.SpriteFrame(t)).uv && 0 < n.uv.length ? (H.resMap.set(o, t), 
            i.getComponent(cc.Mask) && (i.getComponent(cc.Mask).spriteFrame = n), r && r()) : setTimeout(function() {
                ne(i, o);
            }, 1e3 / 60);
        });
    }
    x.BI.reportUserBehaviorBranchAnalytics = function(e, t, n) {
        var i = x.BI.getStrByKey(e);
        null != i && -1 != i && wx.reportUserBehaviorBranchAnalytics && wx.reportUserBehaviorBranchAnalytics({
            branchId: i,
            branchDim: String(t),
            eventType: n
        });
    }, x.BI.setTopRiver = function(o) {
        H.topRiverBIReportName = "顶部";
        function r(e) {
            var t, n = e[H.topTimesCnt = 0];
            function i() {
                var e;
                console.log("点击BI Icon----------"), H.topClickTimes || (H.topClickTimes++, e = H.topRiverBIReportName || "", 
                x.BI.adRiverDiversion("", e, H.nativeOperateClick), x.BI.adClickNewBIRiver(n.diversionId, "顶部导流"), 
                n.create_info ? (J(n && n.diversionId, n.create_info.app_id, n.create_info.showName, "顶部导流", function() {
                    H.topClickTimes = 0;
                }, function() {
                    H.topClickTimes = 0, 1 == x.BI.getGameExtValueByKey("isTopRiverOpenFullScreenState") && x.BI.addNewFullScreenRiver();
                }, n.create_info.pathInfo || ""), x.BI.getRiverDataByNeedNum(1, function(e) {
                    r(e);
                }, "顶部导流")) : console.log("创意关联游戏缺失，跳转异常"));
            }
            "laya" == b.engine ? n && (t = H.topRiverItem.getChildByName("son"), K(n.create_info && n.create_info.icon, t, 0, t.width, t.height)) : (t = H.topRiverItem.getChildByName("icon_mask").getChildByName("icon_pic"), 
            setTimeout(function() {
                te(t, n.create_info && n.create_info.icon, cc.size(t.width, t.height));
            }, 500)), "laya" == b.engine ? (H.topRiverItem.offAll(Laya.Event.MOUSE_DOWN), H.topRiverItem.on(Laya.Event.MOUSE_DOWN, o, i)) : (H.topRiverItem.targetOff("touchend"), 
            H.topRiverItem.on("touchend", i));
        }
        H.topRiverItem = o, "laya" == b.engine ? H.topRiverItem.visible = !1 : H.topRiverItem.active = !1;
        var e, t;
        x.BI.getRiverDataByNeedNum(1, function(e) {
            r(e);
        }, "顶部导流"), "laya" == b.engine ? Laya.timer.loop(1e3, o, function() {
            H.topTimesCnt = H.topTimesCnt + 1, 20 == H.topTimesCnt && x.BI.getRiverDataByNeedNum(1, function(e) {
                r(e);
            }, "顶部导流");
        }) : cc.director.getScheduler().schedule(function() {
            H.topTimesCnt = H.topTimesCnt + 1, 20 == H.topTimesCnt && x.BI.getRiverDataByNeedNum(1, function(e) {
                r(e);
            }, "顶部导流");
        }, H.topRiverItem, 1), "laya" == b.engine ? (H.topRiverItem.visible = !0, Laya.Tween.clearAll(H.topRiverItem), 
        e = function() {
            Laya.Tween.to(H.topRiverItem, {
                rotation: -20
            }, 1500, Laya.Ease.linearIn, Laya.Handler.create(this, t));
        }, t = function() {
            Laya.Tween.to(H.topRiverItem, {
                rotation: 20
            }, 1500, Laya.Ease.linearIn, Laya.Handler.create(this, e));
        }, e()) : (H.topRiverItem.active = !0, H.topRiverItem.stopAllActions(), H.topRiverItem.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(3, -20), cc.rotateTo(3, 20)))));
    };
    function ie(r) {
        function e(e, t, n) {
            var i, o;
            "laya" == b.engine ? (i = new Laya.Prefab(), null == r.json ? i.json = r : i = r, 
            o = Laya.Pool.getItemByCreateFun("drawerIcon", i.create, i), H.chouTiList[e] = o, 
            null != H.showNode && (H.chouTiList[e].pos(t, n), H.showNode.addChild(H.chouTiList[e]), 
            H.chouTiList[e].visible = !1)) : (H.chouTiList[e] = cc.instantiate(r), null != H.showNode && (H.showNode.addChild(H.chouTiList[e]), 
            H.chouTiList[e].active = !1));
        }
        if (!H.chouTiOpenFirst) {
            for (var t = 0; t < 9; t++) "laya" == b.engine ? e(t, t % 3 * 190, 210 * Math.floor(t / 3)) : e(t, null, null);
            H.chouTiOpenFirst = !0;
        }
        for (var n = 0; n < 9; n++) "laya" == b.engine ? H.chouTiList[n].visible = !1 : H.chouTiList[n].active = !1;
        H.ChouTiIsPop = !0, H.chouTiArea.active = !0;
    }
    var oe = function() {
        for (var i = this, e = 0; e < H.chouTiShowNodeList.length; e++) {
            var o, r, a, t = function(e) {
                if (null == (o = H.chouTiList[e])) return {
                    v: void 0
                };
                r = H.chouTiShowNodeList[e], a = function() {
                    x.BI.adRiverDiversion("", "抽屉", H.nativeOperateClick), H.chouTiShowNodeList[e].create_info ? (x.BI.adClickNewBIRiver(H.chouTiShowNodeList[e] && H.chouTiShowNodeList[e].diversionId, "抽屉导流"), 
                    J(H.chouTiShowNodeList[e] && H.chouTiShowNodeList[e].diversionId, H.chouTiShowNodeList[e].create_info.app_id, H.chouTiShowNodeList[e].create_info.showName, "抽屉导流", null, null, H.chouTiShowNodeList[e].create_info.pathInfo || ""), 
                    H.chouTiShowNodeList.length, H.chouTiShowMaxNum) : console.log("数据异常");
                };
                var t, n = r.create_info && r.create_info.showName;
                7 < n.length && (n = n.substring(0, 7)), "laya" == b.engine ? (o.visible = !0, K(r.create_info && r.create_info.icon, o.getChildByName("sonNode"), r.create_info && r.create_info.showName, o.getChildByName("sonNode").width, o.getChildByName("sonNode").height), 
                o.getChildByName("showName").text = n, o.getChildByName("sonNode").offAll(Laya.Event.MOUSE_DOWN), 
                o.getChildByName("sonNode").on(Laya.Event.MOUSE_DOWN, i, a)) : (o.active = !0, t = o.getChildByName("icon_mask").getChildByName("icon_pic"), 
                te(t, r.create_info && r.create_info.icon, cc.size(t.width, t.width)), o.getChildByName("label") && (o.getChildByName("label").getComponent(cc.Label).string = n), 
                o.children[0].targetOff("touchend"), o.children[0].on("touchend", a));
            }(e);
            if ("object" === (void 0 === t ? "undefined" : _typeof(t))) return t.v;
        }
    };
    x.BI.setDrawerRiver = function(t, e, n) {
        var i = this;
        if (H.chouTiList = [], "laya" == b.engine) {
            var o = n && n._children;
            if (null == o || o.length <= 0) return;
            n.getChildByName("drawerBtn") && (H.btn = n.getChildByName("drawerBtn")), n.getChildByName("boardNode") && (H.chouTiArea = n.getChildByName("boardNode")), 
            n.getChildByName("drawerBoard") && (H.board = n.getChildByName("drawerBoard"));
            var r = n.getChildByName("drawerBoard");
            r && (r.getChildByName("showNode") && (H.showNode = r.getChildByName("showNode")), 
            r.getChildByName("backBtn") && (H.exitBtn = r.getChildByName("backBtn")), r.getChildByName("changeBtn") && (H.changeBtn = r.getChildByName("changeBtn"))), 
            H.board && (H.board.visible = !1);
        } else {
            if (null == e || e.length <= 0) return;
            e[0] && (H.btn = e[0]), e[1] && (H.chouTiArea = e[1]), e[2] && (H.board = e[2]), 
            e[3] && (H.showNode = e[3]), e[4] && (H.exitBtn = e[4]), e[5] && (H.changeBtn = e[5]), 
            H.board && (H.board.active = !1);
        }
        var a = H.board.position;
        "laya" == b.engine && (a = H.board._x);
        function l() {
            var e;
            H.ChouTiIsPop || (ie(t), "laya" == b.engine ? (e = a - 800, H.board && (H.board.pos(e, H.board._y), 
            H.board && (Laya.Tween.to(H.board, {
                x: a,
                y: H.board._y
            }, 300, Laya.Ease.linearIn, Laya.Handler.create(i, function() {})), H.board.visible = !0), 
            H.btn.alpha = 1, Laya.Tween.to(H.btn, {
                alpha: 0
            }, 300, null, Laya.Handler.create(i, function() {
                H.btn.visible = !1;
            })))) : (H.initPos && (console.log("NavigateTools.initPos", H.initPos), a = H.initPos), 
            e = cc.v2(a.x - 800, a.y), H.board && (H.board.setPosition(e.x, e.y), cc.tween(H.board).to(.3, {
                position: a
            }, {
                easing: "cubicOut"
            }).start(), H.board.active = !0), H.btn.opacity = 255, cc.tween(H.btn).to(.3, {
                opacity: 0
            }).call(function() {
                H.btn.active = !1;
            }).start()), null == H.chouTiShowNodeList ? (x.eventListerObj.removeListener("refreshDrawerEventName"), 
            x.eventListerObj.addListener("refreshDrawerEventName", function() {
                oe();
            })) : setTimeout(function() {
                oe();
            }, 1e3 / 60), x.BI.getRiverDataByNeedNum(9, function(e) {
                (H.chouTiShowNodeList = e) && e.length < H.chouTiShowMaxNum && ("laya" == b.engine ? H.changeBtn.visible = !1 : H.changeBtn.active = !1), 
                x.eventListerObj.emit("refreshDrawerEventName");
            }, "抽屉导流"));
        }
        function c() {
            var e, t, n;
            H.ChouTiIsPop && (console.log("BI 抽屉退出"), "laya" == b.engine ? (e = H.board._x - 800, 
            Laya.Tween.to(H.board, {
                x: e,
                y: H.board._y
            }, 300, Laya.Ease.linearIn, Laya.Handler.create(i, function() {
                H.board.visible = !1, H.btn.visible = !0;
            })), H.btn.alpha = 0, Laya.Tween.to(H.btn, {
                alpha: 1
            }, 300, null)) : (t = H.board.position, n = cc.v2(t.x - 800, t.y), cc.tween(H.board).to(.3, {
                position: n
            }, {
                easing: "cubicIn"
            }).call(function() {
                H.board.active = !1, H.btn.active = !0;
            }).start(), H.btn.opacity = 0, cc.tween(H.btn).to(.3, {
                opacity: 255
            }).start()), H.ChouTiIsPop = !1, H.chouTiArea.active = !1);
        }
        function s() {
            console.log("BI 抽屉换一批"), H.chouTiShowNodeList.length < H.chouTiShowMaxNum ? wx.showToast({
                title: "暂时没有更多小游戏啦^.^",
                icon: "none",
                duration: 1e3
            }) : (x.BI.getRiverDataByNeedNum(9, function(e) {
                d(e);
            }, "抽屉导流"), oe());
        }
        "laya" == b.engine ? (H.btn && H.btn.on(Laya.Event.MOUSE_DOWN, H.btn, l), H.exitBtn && H.exitBtn.on(Laya.Event.MOUSE_DOWN, H.exitBtn, c), 
        H.changeBtn && H.changeBtn.on(Laya.Event.MOUSE_DOWN, H.changeBtn, s)) : (H.btn && H.btn.on("touchstart", l), 
        H.exitBtn && H.exitBtn.on("touchend", c), H.changeBtn && H.changeBtn.on("touchstart", s));
        var d = function(e) {
            e && e.length < H.chouTiShowMaxNum || (H.chouTiShowNodeList = e);
        };
    }, x.BI.resetDrawerState = function() {
        H.chouTiOpenFirst = !1;
    };
    function re(t, n, g, h, i, o, r, a, l, c, s, d) {
        if (!(t.length < 0) && t) {
            for (var u, v, f, m, e = function(e) {
                "laya" == b.engine ? (u = o, v = new Laya.Prefab(), (f = (null == u.json ? v.json = u : v = u, 
                Laya.Pool.getItemByCreateFun("_topContentItemPref", v.create, v))).x = e * (g + h), 
                f.y = 0, a && a(), f._children[0] && (f._children[0].offAll(Laya.Event.CLICK), f._children[0].on(Laya.Event.CLICK, f._children[0], function() {
                    x.BI.adClickNewBIRiver(t[e] && t[e].diversionId, "全屏导流"), x.BI.adRiverDiversion(t[e] && t[e].diversionId, "全屏导流", H.nativeOperateClick), 
                    t[e].create_info || console.log("数据异常"), J(t[e] && t[e].diversionId, t[e].create_info.app_id, t[e].create_info.showName, "全屏导流", null, null, t[e].create_info.pathInfo || ""), 
                    l && l(!1);
                }), K(t[e].create_info.icon, f._children[0], 0, g, g)), f._children[1] && (m = t[e].create_info.showName, 
                r ? 4 < m.length && (m = m.substring(0, 4)) : (m = "", f.y = 5), f._children[1].text = m)) : ((f = cc.instantiate(o)).setPosition(g / 2 + e * (g + h), 0), 
                a && a(), f.children[0] && (f.children[0].targetOff("touchend"), f.children[0].on("touchend", function() {
                    x.BI.adClickNewBIRiver(t[e] && t[e].diversionId, "全屏导流"), x.BI.adRiverDiversion(t[e] && t[e].diversionId, "全屏导流", H.nativeOperateClick), 
                    t[e].create_info || console.log("数据异常"), J(t[e] && t[e].diversionId, t[e].create_info.app_id, t[e].create_info.showName, "全屏导流", null, null, t[e].create_info.pathInfo || ""), 
                    l && l(!1);
                })), m = t[e].create_info.showName, r ? 4 < m.length && (m = m.substring(0, 4)) : (m = "", 
                f.y = -15), function i(o, r, a, l) {
                    var e, t, c = r.children[0], s = r.children[1];
                    H.resMap.has(o) ? (e = H.resMap.get(o), t = new cc.SpriteFrame(e), c.getComponent(cc.Sprite).spriteFrame = t, 
                    c.scaleX = l.width / c.getContentSize().width, c.scaleY = l.width / c.getContentSize().width, 
                    s && (s.getComponent(cc.Label).string = a)) : cc.loader.load(o, function(e, t) {
                        var n;
                        e ? i(o, r, a, l) : (n = new cc.SpriteFrame(t)).uv && 0 < n.uv.length ? (H.resMap.set(o, t), 
                        c.getComponent(cc.Sprite).spriteFrame = n, c.scaleX = l.width / c.getContentSize().width, 
                        c.scaleY = l.width / c.getContentSize().width, s && (s.getComponent(cc.Label).string = a)) : setTimeout(function() {
                            i(o, r, a, l);
                        }, 1e3 / 60);
                    });
                }(t[e].create_info.icon, f, m, cc.size(g, g))), i.addChild(f), n.push(f);
            }, w = 0; w < t.length; w++) {
                e(w);
            }
            var p = function(e, t, n, i) {
                for (var o, r, a, l, c, s, d, u = 0; u < e.length; u++) e[u].x += n;
                r = t, a = i, s = (o = e)[0], d = o[o.length - 1], s && s.x < -r / 2 + a.width / 2 && (l = o.shift(), 
                o.push(l), l.x = d.x + g + h, "laya" == b.engine ? l._children[0].visible = !0 : l.children[0].active = !0), 
                d && d.x > r / 2 + a.width / 2 && (c = o.pop(), o.unshift(c), c.x = s.x - g - h, 
                "laya" == b.engine ? c._children[0].visible = !0 : c.children[0].active = !0);
            }, S = 0, _ = 0, y = 0, B = function(e) {
                var t = e.getLocation().x - e.getStartLocation().x, n = new Date().getTime();
                0 == (S = t / (n - _)) && l && l(!1);
            }, C = function() {
                var e = Laya.stage.mouseX - y, t = new Date().getTime();
                0 == (S = e / (t - _)) && l && l(!1);
            };
            "laya" == b.engine ? (i.on(Laya.Event.MOUSE_DOWN, i, function() {
                l && l(!0), y = Laya.stage.mouseX, S = 0, _ = new Date().getTime(), console.log("开始触摸");
            }), i.on(Laya.Event.MOUSE_MOVE, i, function() {
                setTimeout(function() {
                    y = Laya.stage.mouseX;
                }, 1e3 / 60), c && c(function(e, t) {
                    p(e, t, Laya.stage.mouseX - y, i);
                });
            }), i.on(Laya.Event.MOUSE_OUT, i, function() {
                C();
            }), i.on(Laya.Event.MOUSE_UP, i, function() {
                C();
            }), Laya.timer.loop(1e3 / 60, i, function() {
                i && d(function() {
                    var n;
                    0 != S && (n = S / 60 * 20, c && c(function(e, t) {
                        p(e, t, n, i);
                    }), 0 < S ? (S -= 1 / 60) < 0 && (S = 0, l && l(!1)) : 0 < (S += 1 / 60) && (S = 0, 
                    l && l(!1)));
                }, function() {
                    c && c(function(e, t) {
                        p(e, t, s, i);
                    });
                });
            })) : (i.on("touchmove", function(e) {
                var n = e.getDelta().x;
                c && c(function(e, t) {
                    p(e, t, n, i);
                });
            }), i.on("touchstart", function() {
                l && l(!0), S = 0, _ = new Date().getTime(), console.log("开始触摸");
            }), i.on("touchend", function(e) {
                B(e);
            }), i.on("touchcancel", function(e) {
                B(e);
            }), cc.director.getScheduler().schedule(function(e) {
                i && d(function() {
                    var n;
                    0 != S && (n = S * e * 20, c && c(function(e, t) {
                        p(e, t, n, i);
                    }), 0 < S ? (S -= e) < 0 && (S = 0, l && l(!1)) : 0 < (S += e) && (S = 0, l && l(!1)));
                }, function() {
                    c && c(function(e, t) {
                        p(e, t, s, i);
                    });
                });
            }, i, 1 / 60));
        }
    }
    function ae() {
        if (null != H.newFullScreenRiverNodes) {
            "laya" == b.engine ? H.newFullScreenRiverNodes._bottomContent && H.newFullScreenRiverNodes._bottomContent.removeChildren() : H.newFullScreenRiverNodes._bottomContent && H.newFullScreenRiverNodes._bottomContent.removeAllChildren();
            var d = 2;
            b.isLandScape && (d = 5);
            var u = 0, s = 0, s = ("laya" == b.engine ? (b.designSizeWidth, b.designSizeHeight) : cc.director.getWinSize(), 
            b.engine, u = 316, 30), e = d;
            if (2 == H.newFullScreenRiverIsClick) {
                H.newFUllscreenRiverBottomShowIndex = wx.getStorageSync(_) ? Number(wx.getStorageSync(_)) : 0, 
                H.newFUllscreenRiverBottomShowIndex = H.newFUllscreenRiverBottomShowIndex + 6, wx.setStorageSync(_, H.newFUllscreenRiverBottomShowIndex), 
                H.newFUllscreenRiverBottomShowIndex > H.newFullScreenRiverNodes.bottomList.length && (H.newFUllscreenRiverBottomShowIndex = H.newFUllscreenRiverBottomShowIndex % H.newFullScreenRiverNodes.bottomList.length);
                var t = JSON.parse(JSON.stringify(H.newFullScreenRiverNodes.bottomList));
                H.newFullScreenRiverNodes.bottomList = [];
                for (var n = H.newFUllscreenRiverBottomShowIndex; n < t.length; n++) t[n] && H.newFullScreenRiverNodes.bottomList.push(t[n]);
                if (0 < H.newFUllscreenRiverBottomShowIndex) for (var i = 0; i < H.newFUllscreenRiverBottomShowIndex; i++) t[i] && H.newFullScreenRiverNodes.bottomList.push(t[i]);
            }
            var o = H.newFullScreenRiverNodes.bottomList && Math.ceil(H.newFullScreenRiverNodes.bottomList.length / e);
            o <= 3 && (o = 3);
            var r = function(e, t) {
                for (var n = 0; n < H.newFullScreenRiverNodes.bottomList.length; n++) !function(e, t, n) {
                    var i, o, r, a, l, c, s;
                    Math.floor(e / d) == t && ("laya" == b.engine ? (r = 25, l = 5, a = Laya.Pool.getItemByCreateFun("_midContentItemPref", H.newFullScreenRiverNodes._midContentItemPref.create, H.newFullScreenRiverNodes._midContentItemPref), 
                    i = H.newFullScreenRiverNodes._midContentItemPref, o = new Laya.Prefab(), (a = (null == i.json ? o.json = i : o = i, 
                    Laya.Pool.getItemByCreateFun("_midContentItemPref", o.create, o))).x = r + e % d * (u + l), 
                    a.y = 0, a._children[0] && (a._children[0].offAll(Laya.Event.CLICK), a._children[0].on(Laya.Event.CLICK, this, function() {
                        x.BI.adRiverDiversion("", "新全屏", H.nativeOperateClick), x.BI.adClickNewBIRiver(H.newFullScreenRiverNodes.bottomList[e] && H.newFullScreenRiverNodes.bottomList[e].diversionId, "全屏导流"), 
                        wx.setStorageSync(S, 1), H.newFUllScreenRiverClickCnt = H.newFUllScreenRiverClickCnt + 1, 
                        J(H.newFullScreenRiverNodes.bottomList[e] && H.newFullScreenRiverNodes.bottomList[e].diversionId, H.newFullScreenRiverNodes.bottomList[e].create_info.app_id, H.newFullScreenRiverNodes.bottomList[e].create_info.showName, "全屏导流", null, null, H.newFullScreenRiverNodes.bottomList[e].create_info.pathInfo), 
                        H.newFullScreenRiverNodes.bottomContentFingerTouch = !1;
                    }), K(H.newFullScreenRiverNodes.bottomList[e].create_info.icon, a._children[0])), 
                    a._children[1] && (7 < (s = H.newFullScreenRiverNodes.bottomList[e].create_info.showName).length && (s = s.substring(0, 7)), 
                    a._children[1].text = s)) : (r = 25, a = cc.instantiate(H.newFullScreenRiverNodes._midContentItemPref), 
                    c = u / 2 + r + e % d * (u + (l = 5)), a.setPosition(c, 0), a.children[0] && (a.children[0].targetOff("touchend"), 
                    a.children[0].on("touchend", function() {
                        x.BI.adRiverDiversion("", "新全屏", H.nativeOperateClick), x.BI.adClickNewBIRiver(H.newFullScreenRiverNodes.bottomList[e] && H.newFullScreenRiverNodes.bottomList[e].diversionId, "全屏导流"), 
                        wx.setStorageSync(S, 1), H.newFUllScreenRiverClickCnt = H.newFUllScreenRiverClickCnt + 1, 
                        J(H.newFullScreenRiverNodes.bottomList[e] && H.newFullScreenRiverNodes.bottomList[e].diversionId, H.newFullScreenRiverNodes.bottomList[e].create_info.app_id, H.newFullScreenRiverNodes.bottomList[e].create_info.showName, "全屏导流", null, null, H.newFullScreenRiverNodes.bottomList[e].create_info.pathInfo), 
                        H.newFullScreenRiverNodes.bottomContentFingerTouch = !1;
                    })), a.children[0] && a.children[0].children[0] && te(a.children[0].children[0], H.newFullScreenRiverNodes.bottomList[e].create_info.icon, cc.size(u, u)), 
                    a.children[2] && (7 < (s = H.newFullScreenRiverNodes.bottomList[e].create_info.showName).length && (s = s.substring(0, 7)), 
                    a.children[2].getComponent(cc.Label).string = s)), n.addChild(a));
                }(n, t, e);
            };
            if ("laya" == b.engine) for (var a = 0; a < o; a++) {
                (l = new Laya.Sprite()).width = b.designSizeWidth, l.height = u, l.anchorX = 0, 
                l.x = 0, l.y = a * (u + s), H.newFullScreenRiverNodes.bottomItemHeight += u + s, 
                r(l, a), H.newFullScreenRiverNodes._bottomContent.addChild(l), H.newFullScreenRiverNodes.showBottomList.push(l);
            } else for (var l, c = 0; c < o; c++) {
                (l = new cc.Node()).anchorX = .5;
                var g = H.newFullScreenRiverNodes._bottomContent && H.newFullScreenRiverNodes._bottomContent.width;
                l.setPosition(-g / 2, -u / 2 - c * (u + s)), H.newFullScreenRiverNodes.bottomItemHeight += u + s, 
                r(l, c), H.newFullScreenRiverNodes._bottomContent.addChild(l), H.newFullScreenRiverNodes.showBottomList.push(l);
            }
            var h = function(e, t, n, i) {
                for (var o = 0; o < e.length; o++) e[o].y += n;
                !function(e, t, n) {
                    var i, o = e[0], r = e[e.length - 1], a = o && o.y > t / 2 - n.height / 2;
                    "laya" == b.engine && (a = o && o.y < -t / 2 + n.height / 2), a && (i = e.shift(), 
                    e.push(i), "laya" == b.engine ? (i.y = r.y + u + s, i._children[0].visible = !0) : (i.y = r.y - u - s, 
                    i.children[0].active = !0));
                    var l, c = r && r.y < -t / 2 - n.height / 2;
                    "laya" == b.engine && (c = r && r.y > t / 2 + n.height / 2), c && (l = e.pop(), 
                    e.unshift(l), "laya" == b.engine ? (l.y = o.y - u - s, l._children[0].visible = !0) : (l.y = o.y + u + s, 
                    l.children[0].active = !0));
                }(e, t, i);
            }, v = 0, f = 0, m = function(e) {
                var t = e.getLocation().y - e.getStartLocation().y, n = new Date().getTime();
                0 == (v = t / (n - f)) && (H.newFullScreenRiverNodes.bottomContentFingerTouch = !1);
            }, w = 0, p = function() {
                var e = Laya.stage.mouseY - w, t = new Date().getTime();
                0 == (v = e / (t - f)) && (H.newFullScreenRiverNodes.bottomContentFingerTouch = !1);
            };
            "laya" == b.engine ? (H.newFullScreenRiverNodes._bottomContent.on(Laya.Event.MOUSE_DOWN, H.newFullScreenRiverNodes._bottomContent, function() {
                H.newFullScreenRiverNodes.bottomContentFingerTouch = !0, w = Laya.stage.mouseY, 
                v = 0, f = new Date().getTime(), console.log("开始触摸");
            }), H.newFullScreenRiverNodes._bottomContent.on(Laya.Event.MOUSE_MOVE, H.newFullScreenRiverNodes._bottomContent, function() {
                setTimeout(function() {
                    w = Laya.stage.mouseY;
                }, 1e3 / 60);
                h(H.newFullScreenRiverNodes.showBottomList, H.newFullScreenRiverNodes.bottomItemHeight, Laya.stage.mouseY - w, H.newFullScreenRiverNodes._bottomContent);
            }), H.newFullScreenRiverNodes._bottomContent.on(Laya.Event.MOUSE_OUT, H.newFullScreenRiverNodes._bottomContent, function() {
                p();
            }), H.newFullScreenRiverNodes._bottomContent.on(Laya.Event.MOUSE_UP, H.newFullScreenRiverNodes._bottomContent, function() {
                p();
            }), Laya.timer.loop(1e3 / 60, H.newFullScreenRiverNodes._bottomContent, function() {
                if (H.newFullScreenRiverNodes._bottomContent) if (H.newFullScreenRiverNodes.bottomContentFingerTouch) {
                    if (0 == v) return;
                    var e = v / 60 * 20;
                    h(H.newFullScreenRiverNodes.showBottomList, H.newFullScreenRiverNodes.bottomItemHeight, e, H.newFullScreenRiverNodes._bottomContent), 
                    0 < v ? (v -= 1 / 60) < 0 && (v = 0, H.newFullScreenRiverNodes.bottomContentFingerTouch = !1) : 0 < (v += 1 / 60) && (v = 0, 
                    H.newFullScreenRiverNodes.bottomContentFingerTouch = !1);
                } else h(H.newFullScreenRiverNodes.showBottomList, H.newFullScreenRiverNodes.bottomItemHeight, 1, H.newFullScreenRiverNodes._bottomContent);
            })) : (H.newFullScreenRiverNodes._bottomContent.on("touchmove", function(e) {
                var t = e.getDelta().y;
                h(H.newFullScreenRiverNodes.showBottomList, H.newFullScreenRiverNodes.bottomItemHeight, t, H.newFullScreenRiverNodes._bottomContent);
            }), H.newFullScreenRiverNodes._bottomContent.on("touchstart", function() {
                H.newFullScreenRiverNodes.bottomContentFingerTouch = !0, v = 0, f = new Date().getTime(), 
                console.log("开始触摸");
            }), H.newFullScreenRiverNodes._bottomContent.on("touchend", function(e) {
                m(e);
            }), H.newFullScreenRiverNodes._bottomContent.on("touchcancel", function(e) {
                m(e);
            }), cc.director.getScheduler().unscheduleAllForTarget(H.newFullScreenRiverNodes._bottomContent), 
            cc.director.getScheduler().schedule(function(e) {
                if (H.newFullScreenRiverNodes._bottomContent) if (H.newFullScreenRiverNodes.bottomContentFingerTouch) {
                    if (0 == v) return;
                    var t = v * e * 20;
                    h(H.newFullScreenRiverNodes.showBottomList, H.newFullScreenRiverNodes.bottomItemHeight, t, H.newFullScreenRiverNodes._bottomContent), 
                    0 < v ? (v -= e) < 0 && (v = 0, H.newFullScreenRiverNodes.bottomContentFingerTouch = !1) : 0 < (v += e) && (v = 0, 
                    H.newFullScreenRiverNodes.bottomContentFingerTouch = !1);
                } else h(H.newFullScreenRiverNodes.showBottomList, H.newFullScreenRiverNodes.bottomItemHeight, -1, H.newFullScreenRiverNodes._bottomContent);
            }, H.newFullScreenRiverNodes._bottomContent, 1 / 60));
        }
    }
    x.BI.setNewFullScreenRiverCallBack = function(e) {
        H.newFullScreenRiverCallBack = e;
    }, x.BI.resetNewFullScreenRiverState = function() {
        H.newFullScreenActive = !1;
    };
    var le = !0;
    x.BI.setNewFullScreenRiver = function(e, t, n, i, o, m, r) {
        try {
            if (le) {
                le = !1, H.newFullScreenActive = !0, H.newFullScreenRiverNodes = {}, e && (H.newFullScreenRiverNodes._midContentItemPref = e), 
                t && (H.newFullScreenRiverNodes._topContentItemPref = t), n && (H.newFullScreenRiverNodes._topContent = n), 
                i && (H.newFullScreenRiverNodes._bottomContent = i), o && (H.newFullScreenRiverNodes._bottomContent1 = o), 
                m && (H.newFullScreenRiverNodes._btnBack = m), r && (H.newFullScreenRiverNodes._rootNode = r), 
                "laya" == b.engine ? (H.newFullScreenRiverNodes._rootNode.getChildByName("bg").height = 2e3, 
                H.newFullScreenRiverNodes._rootNode.getChildByName("panel_content").visible = !1) : (H.newFullScreenRiverNodes._rootNode.getChildByName("bg").height = 2e3, 
                H.newFullScreenRiverNodes._rootNode.getChildByName("panel_content").active = !1);
                if (0 == Number(x.BI.getGameExtValueByKey("full_screen_navigate_switch"))) return r && (r.destroy(), 
                H.newFullScreenRiverNodes = null), void (H.newFullScreenRiverCallBack && H.newFullScreenRiverCallBack());
                H.newFullScreenRiverIsClick = wx.getStorageSync(S) ? Number(wx.getStorageSync(S)) : -1, 
                "" == wx.getStorageSync(S) && wx.setStorageSync(S, 2);
                var a, l, c, s, d = function() {
                    console.log("关闭新全屏"), null != H.newFullScreenRiverNodes && (0 == H.newFUllScreenRiverClickCnt && wx.setStorageSync(S, 2), 
                    H.newFUllScreenRiverClickCnt = 0, "laya" == b.engine ? (H.newFullScreenRiverNodes._topContent && (H.newFullScreenRiverNodes._topContent.destroy(), 
                    Laya.timer.clearAll(H.newFullScreenRiverNodes._topContent)), H.newFullScreenRiverNodes._bottomContent && (H.newFullScreenRiverNodes._bottomContent.destroy(), 
                    Laya.timer.clearAll(H.newFullScreenRiverNodes._bottomContent)), H.newFullScreenRiverNodes._bottomContent1 && (H.newFullScreenRiverNodes._bottomContent1.destroy(), 
                    Laya.timer.clearAll(H.newFullScreenRiverNodes._bottomContent1))) : (H.newFullScreenRiverNodes._topContent && (H.newFullScreenRiverNodes._topContent.destroy(), 
                    cc.director.getScheduler().unscheduleAllForTarget(H.newFullScreenRiverNodes._topContent)), 
                    H.newFullScreenRiverNodes._bottomContent && (H.newFullScreenRiverNodes._bottomContent.destroy(), 
                    cc.director.getScheduler().unscheduleAllForTarget(H.newFullScreenRiverNodes._bottomContent)), 
                    H.newFullScreenRiverNodes._bottomContent1 && (H.newFullScreenRiverNodes._bottomContent1.destroy(), 
                    cc.director.getScheduler().unscheduleAllForTarget(H.newFullScreenRiverNodes._bottomContent1))), 
                    H.newFullScreenRiverNodes._rootNode && (H.newFullScreenRiverNodes._rootNode.destroy(), 
                    H.newFullScreenRiverNodes = null), r && r.destroy(), H.newFullScreenActive = !1, 
                    Ae.gridAdIsShow ? x.BI.showGridAd() : (x.BI.hideGridAd(), Ae.bannerIsShow ? x.BI.showBanner() : x.BI.hideBanner()), 
                    H.newFullScreenRiverCallBack && H.newFullScreenRiverCallBack(), le = !0, g && clearTimeout(g));
                }, u = wx.getSystemInfoSync();
                "laya" == b.engine ? (m.visible = !1, a = wx.getMenuButtonBoundingClientRect(), 
                m.y = a.top / u.screenHeight * b.designSizeHeight, m.on(Laya.Event.MOUSE_DOWN, this, d), 
                s = H.newFullScreenRiverNodes._rootNode.getChildByName("bg").width, H.newFullScreenRiverNodes._rootNode.scaleX *= b.designSizeWidth / s, 
                H.newFullScreenRiverNodes._rootNode.scaleY *= b.designSizeWidth / s, null != H.newFullScreenRiverNodes._rootNode.getChildByName("bg") && H.newFullScreenRiverNodes._rootNode.getChildByName("bg").on(Laya.Event.MOUSE_DOWN, r.getChildByName("maskNode"), function(e) {
                    e.stopPropagation();
                })) : (l = cc.director.getWinSize(), c = cc.view.getDesignResolutionSize(), s = H.newFullScreenRiverNodes._rootNode.getChildByName("bg").width, 
                c.width / s == 1 && (m.y = (l.height - u.statusBarHeight) / 2 - m.height / 2, console.log(u.statusBarHeight, "system.statusBarHeight"), 
                20 < u.statusBarHeight && (b.isLandScape ? 1 != parseInt(l.height / c.height) && (m.y = (l.height - u.statusBarHeight) / 2 + m.height / 2) : c.height == l.height ? 1 != parseInt(l.width / c.width) && (m.y = (l.height - u.statusBarHeight) / 2 + m.height / 2) : m.y = (l.height - u.statusBarHeight) / 2 - m.height)), 
                m.on("touchend", d), m.active = !1);
                var g = setTimeout(function() {
                    if ("laya" == b.engine) {
                        var t = function(e, t) {
                            if (0 < e._children.length) for (var n = 0; n < e._children.length; n++) e._children[n].x *= t, 
                            e._children[n].scaleX *= t, e._children[n].scaleY *= t;
                        }, n = function(e, t) {
                            H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_02") && (H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_02").y += H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_02").height * Math.abs(e - 1)), 
                            H.newFullScreenRiverNodes._rootNode.getChildByName("panel_content").y += H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_02").height * Math.abs(e - 1), 
                            t && (H.newFullScreenRiverNodes._rootNode.getChildByName("panel_content").y -= 20), 
                            H.newFullScreenRiverNodes._bottomContent1.parent && (H.newFullScreenRiverNodes._bottomContent1.parent.y += H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_02").height * Math.abs(e - 1)), 
                            H.newFullScreenRiverNodes._rootNode.getChildByName("panel_content") && H.newFullScreenRiverNodes._rootNode.getChildByName("panel_content").getChildByName("kuang3") && (H.newFullScreenRiverNodes._rootNode.getChildByName("panel_content").getChildByName("kuang3").y += H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_02").height * Math.abs(e - 1)), 
                            H.newFullScreenRiverNodes._bottomContent.parent && H.newFullScreenRiverNodes._bottomContent.parent.parent && (H.newFullScreenRiverNodes._bottomContent.parent.parent.height += H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_02").height * Math.abs(e - 1));
                        }, e = function() {
                            var e = Laya.stage.height / b.designSizeHeight;
                            H.newFullScreenRiverNodes._rootNode.scaleX *= e, H.newFullScreenRiverNodes._rootNode.scaleY *= e, 
                            t(H.newFullScreenRiverNodes._rootNode, 1 / e), n(e, !0), setTimeout(function() {
                                H.newFullScreenRiverNodes._rootNode.visible = !0, H.newFullScreenRiverNodes._rootNode.getChildByName("panel_content").visible = !0;
                            }, 1e3 / 60);
                        }, i = function() {
                            var e = Laya.stage.width / b.designSizeWidth;
                            t(H.newFullScreenRiverNodes._rootNode, e), n(e, !1), setTimeout(function() {
                                H.newFullScreenRiverNodes._rootNode.visible = !0, H.newFullScreenRiverNodes._rootNode.getChildByName("panel_content").visible = !0;
                            }, 1e3 / 60);
                        };
                        "fixedheight" == Laya.stage.scaleMode ? i() : "fixedwidth" == Laya.stage.scaleMode ? e() : "fixedauto" == Laya.stage.scaleMode && (Laya.Browser.clientWidth / Laya.Browser.clientHeight < b.designSizeWidth / b.designSizeHeight ? e : i)();
                    } else if (b.isLandScape) {
                        var o = cc.director.getWinSize(), r = cc.view.getDesignResolutionSize(), a = o.height > r.height ? 1 : o.height / r.height;
                        H.scaleTimeScale = a, H.scaleTimeScale && (H.newFullScreenRiverNodes._bottomContent.height = H.newFullScreenRiverNodes._bottomContent.height * H.scaleTimeScale, 
                        H.newFullScreenRiverNodes._bottomContent.parent.y = H.newFullScreenRiverNodes._bottomContent.parent.y * H.scaleTimeScale - 20, 
                        H.newFullScreenRiverNodes._topContent.parent.y = H.newFullScreenRiverNodes._topContent.parent.y * H.scaleTimeScale, 
                        m.y = m.y * H.scaleTimeScale, m.scale = m.scale * H.scaleTimeScale);
                    } else {
                        var o = cc.director.getWinSize(), r = cc.view.getDesignResolutionSize(), l = H.newFullScreenRiverNodes._rootNode.getChildByName("bg").width;
                        if (H.newFullScreenRiverNodes._rootNode.scale = r.width / l, o.height != cc.view.getDesignResolutionSize().height && Math.round(o.width) == cc.view.getDesignResolutionSize().width) {
                            H.newFullScreenRiverNodes._rootNode.getChildByName("bg").height = 2e3;
                            a = o.height > r.height ? o.height / r.height : 1;
                            H.newFullScreenRiverNodes._bottomContent.parent.height *= a, H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_01") && (H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_01").y += H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_01").height * (a - 1)), 
                            H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_02") && (H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_02").y -= H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_02").height * (a - 1)), 
                            H.newFullScreenRiverNodes._bottomContent1.parent.y -= (H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_02").height - 100) * (a - 1), 
                            (s = H.newFullScreenRiverNodes._rootNode.getChildByName("panel_content").getChildByName("bg1")).children[1].y -= (H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_02").height - 100) * (a - 1);
                            var c = H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_01").height / 2 * (a - 1);
                            H.newFullScreenRiverNodes._topContent.parent.y += c, s.children[2].y += c, s.children[3].y += c, 
                            s.children[0].y += c, H.newFullScreenRiverNodes._bottomContent.parent.y += c;
                        } else {
                            a = o.width > r.width ? 1 : o.width / r.width;
                            H.newFullScreenRiverNodes._bottomContent.scale *= a, H.newFullScreenRiverNodes._topContent.parent.scale *= a, 
                            H.newFullScreenRiverNodes._topContent.parent.x *= a, H.newFullScreenRiverNodes._bottomContent1.parent.scale *= a, 
                            H.newFullScreenRiverNodes._bottomContent1.parent.x *= a;
                            for (var s = H.newFullScreenRiverNodes._rootNode.getChildByName("panel_content").getChildByName("bg1"), d = 0; d < s.children.length; d++) s.children[d].scale *= a, 
                            s.children[d].x *= a;
                            var u = cc.view.getFrameSize();
                            Math.round(o.width) != cc.view.getDesignResolutionSize().width && u.width / u.height < 750 / 1334 && (s.children[2].y *= .95), 
                            H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_01").scale *= a, H.newFullScreenRiverNodes._rootNode.getChildByName("full_bg_02").scale *= a, 
                            m.y *= a, m.scale *= a, m.x *= a;
                        }
                        setTimeout(function() {
                            H.newFullScreenRiverNodes._rootNode.getChildByName("panel_content").active = !0;
                        }, 1e3 / 60);
                    }
                    function g(e, t, n) {
                        if (n.length <= 0 || e > n.length || t > n.length) return [];
                        for (var i = [], o = e; o <= t; o++) n[o] && i.push(n[o]);
                        return i;
                    }
                    function h(e) {
                        var t, n;
                        t = g(0, 7, e), n = JSON.parse(JSON.stringify(t)), H.newFullScreenRiverNodes.bottomList = [], 
                        H.newFullScreenRiverNodes.bottomList = n, H.newFullScreenRiverNodes.showBottomList = [], 
                        H.newFullScreenRiverNodes.bottomItemHeight = 0, H.newFullScreenRiverNodes.bottomContentFingerTouch = !1, 
                        ae();
                        var i, o, r, a, l = "laya" == b.engine ? 2 : 1;
                        i = g(8 - l, 13, e), null != H.newFullScreenRiverNodes && (o = JSON.parse(JSON.stringify(i)), 
                        H.newFullScreenRiverNodes.topList = [], H.newFullScreenRiverNodes.topList = o, H.newFullScreenRiverNodes.showTopList = [], 
                        H.newFullScreenRiverNodes.topItemWidth = 0, H.newFullScreenRiverNodes.topContentFingerTouch = !1, 
                        re(H.newFullScreenRiverNodes.topList, H.newFullScreenRiverNodes.showTopList, 105, 5, H.newFullScreenRiverNodes._topContent, H.newFullScreenRiverNodes._topContentItemPref, !1, function() {
                            H.newFullScreenRiverNodes.topItemWidth += 110;
                        }, function(e) {
                            H.newFullScreenRiverNodes.topContentFingerTouch = e;
                        }, function(e) {
                            e && e(H.newFullScreenRiverNodes.showTopList, H.newFullScreenRiverNodes.topItemWidth);
                        }, 1, function(e, t) {
                            H.newFullScreenRiverNodes.topContentFingerTouch ? e && e() : t && t();
                        })), r = g(14 - l, 18, e), null != H.newFullScreenRiverNodes && (a = JSON.parse(JSON.stringify(r)), 
                        H.newFullScreenRiverNodes.bottomList1 = [], H.newFullScreenRiverNodes.bottomList1 = a, 
                        H.newFullScreenRiverNodes.showBottomList1 = [], H.newFullScreenRiverNodes.topBottomItem1Width = 0, 
                        H.newFullScreenRiverNodes.bottomContent1FingerTouch = !1, re(H.newFullScreenRiverNodes.bottomList1, H.newFullScreenRiverNodes.showBottomList1, 125, 10, H.newFullScreenRiverNodes._bottomContent1, H.newFullScreenRiverNodes._topContentItemPref, !1, function() {
                            H.newFullScreenRiverNodes.topBottomItem1Width += 135;
                        }, function(e) {
                            H.newFullScreenRiverNodes.bottomContent1FingerTouch = e;
                        }, function(e) {
                            e && e(H.newFullScreenRiverNodes.showBottomList1, H.newFullScreenRiverNodes.topBottomItem1Width);
                        }, 1, function(e, t) {
                            H.newFullScreenRiverNodes.bottomContent1FingerTouch ? e && e() : t && t();
                        }));
                        var c, s = x.BI.getGameExtValueByKey("fullScreenAutoPopOneSwitch");
                        1 == Number(s) && 0 < e.length && ((c = e[Math.floor(Math.random() * e.length)]) && c.create_info && J(c.diversionId, c.create_info.app_id, c.create_info.showName, "全屏导流", null, null, c.create_info.pathInfo));
                    }
                    x.BI.getRiverDataByNeedNum(19, function(e) {
                        var t = JSON.parse(JSON.stringify(e));
                        if (t.length < 19) {
                            for (var n = t.length, i = n; i < 19; i++) {
                                var o = i % n;
                                t[o] && t.push(t[o]);
                            }
                            h(t);
                        } else h(t);
                    }, "全屏导流"), x.BI.hideErrorBanner(), x.BI.strongHideGridAd();
                    var v = 3, f = x.BI.getGameExtValueByKey("fullScreenCLoseBtnDelayTime");
                    -1 != f && (v = f), setTimeout(function() {
                        null != m && ("laya" == b.engine ? m.visible = !0 : m.active = !0);
                    }, 1e3 * v);
                }, 0);
                setTimeout(function() {
                    le = !0;
                }, 2e3);
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.log(e), le = !0;
        }
    };
    function ce(e, r, a) {
        Laya.loader.load(e, Laya.Handler.create(this, function(e) {
            var t = new Laya.Prefab();
            t.json = e;
            var n = Laya.Pool.getItemByCreateFun(r, t.create, t), i = 99999;
            -1 != x.BI.getGameExtValueByKey("layaGlobalPrfabZorder") && (i = Number(x.BI.getGameExtValueByKey("layaGlobalPrfabZorder"))), 
            n.zOrder = i;
            var o = x.BI.getRootSceneNode();
            a && (n.visible = !1), o ? o.addChild(n) : Laya.stage.addChildAt(n, Laya.stage.numChildren);
        }));
    }
    x.BI.addNewFullScreenRiver = function(e) {
        var t = "", t = "laya" == b.engine ? "prefab/sdk_prefabs/newFullScreenRiver/NewFullScreenRiver.json" : "sdk_prefabs/newFullScreenRiver/newFullScreenRiver";
        e && (t = e), "laya" == b.engine ? ce(t, "NewFullScreenRiver", !0) : cc.loader.loadRes(t, cc.Prefab, function(e, t) {
            var n, i, o;
            e ? console.log("加载新全屏导流报错:" + JSON.stringify(e)) : (n = cc.instantiate(t), i = cc.director.getWinSize(), 
            n.setPosition(i.width / 2, i.height / 2), (o = x.BI.getRootSceneNode()) ? o.addChild(n) : cc.director.getScene().addChild(n, 99999));
        });
    };
    function se() {
        var n = this;
        if (null != H.bottomRiverContent) {
            var i = H.bottomItemWidth, o = H.bottomItemStep;
            "laya" == b.engine ? H.bottomRiverNode.removeChildren() : H.bottomRiverNode.removeAllChildren(), 
            H.bottomRiverShowList = [], H.bottomContentWidth = 0;
            for (var r, e = 0; e < H.bottomRiverList.length; e++) {
                !function(e) {
                    var t;
                    "laya" == b.engine ? ((r = Laya.Pool.getItemByCreateFun("iconPrefabs", H.bottomRiverPrefab.create, H.bottomRiverPrefab)).pos(e * (i + o), 0), 
                    H.bottomContentWidth += i + o, r.getChildByName("icon") && (r.getChildByName("icon").offAll(Laya.Event.CLICK), 
                    r.getChildByName("icon").on(Laya.Event.CLICK, n, function() {
                        x.BI.adRiverDiversion("", "底部", H.nativeOperateClick), x.BI.adClickNewBIRiver(H.bottomRiverList[e] && H.bottomRiverList[e].diversionId, "底部导流"), 
                        H.bottomRiverList[e].create_info ? (J(H.bottomRiverList[e] && H.bottomRiverList[e].diversionId, H.bottomRiverList[e].create_info.app_id, H.bottomRiverList[e].create_info.showName, "底部导流", null, null, H.bottomRiverList[e].create_info.pathInfo), 
                        H.bottomFingerTouch = !1) : console.log("数据异常");
                    })), t = r.getChildByName("icon"), K(H.bottomRiverList[e].create_info.icon, t, H.bottomRiverList[e].create_info.showName, t.width, t.height)) : ((r = cc.instantiate(H.bottomRiverPrefab)).name = H.bottomRiverList[e].showName, 
                    r.setPosition(i / 2 + e * (i + o), 0), H.bottomContentWidth += i + o, r.children[0] && (r.children[0].targetOff("touchend"), 
                    r.children[0].on("touchend", function() {
                        x.BI.adRiverDiversion("", "底部", H.nativeOperateClick), x.BI.adClickNewBIRiver(H.bottomRiverList[e] && H.bottomRiverList[e].diversionId, "底部导流"), 
                        H.bottomRiverList[e].create_info ? (J(H.bottomRiverList[e] && H.bottomRiverList[e].diversionId, H.bottomRiverList[e].create_info.app_id, H.bottomRiverList[e].create_info.showName, "底部导流", null, null, H.bottomRiverList[e].create_info.pathInfo), 
                        H.bottomFingerTouch = !1) : console.log("数据异常");
                    })), t = r.getChildByName("icon_mask") && r.getChildByName("icon_mask").getChildByName("icon_pic"), 
                    te(t, H.bottomRiverList[e].create_info.icon, cc.size(t.width, t.height))), H.bottomRiverNode.addChild(r), 
                    H.bottomRiverShowList.push(r);
                }(e);
            }
            var g = H.bottomItemWidth, h = H.bottomItemStep, a = 0, l = function(e, t, n, i) {
                for (var o, r, a, l, c, s, d, u = 0; u < e.length; u++) e[u].x += n;
                r = t, a = i, s = (o = e)[0], d = o[o.length - 1], s && s.x < -r / 2 + a.width / 2 && (l = o.shift(), 
                o.push(l), l.x = d.x + g + h, "laya" == b.engine ? l._children[0].visible = !0 : l.children[0].active = !0), 
                d && d.x > r / 2 + a.width / 2 && (c = o.pop(), o.unshift(c), c.x = s.x - g - h, 
                "laya" == b.engine ? c._children[0].visible = !0 : c.children[0].active = !0);
            }, c = 0, s = 0, d = 0, t = function(e) {
                var t = e.getLocation().x - e.getStartLocation().x, n = new Date().getTime();
                0 == (c = t / (n - s)) && (H.bottomFingerTouch = !1);
            }, u = function() {
                var e = Laya.stage.mouseX - d, t = new Date().getTime();
                0 == (c = e / (t - s)) && (H.bottomFingerTouch = !1);
            };
            "laya" == b.engine ? (H.bottomRiverContent.offAll(Laya.Event.MOUSE_DOWN), H.bottomRiverContent.on(Laya.Event.MOUSE_DOWN, H.bottomRiverContent, function() {
                H.bottomFingerTouch = !0, d = Laya.stage.mouseX, c = 0, s = new Date().getTime(), 
                console.log("开始触摸");
            }), H.bottomRiverContent.offAll(Laya.Event.MOUSE_MOVE), H.bottomRiverContent.on(Laya.Event.MOUSE_MOVE, H.bottomRiverContent, function() {
                setTimeout(function() {
                    d = Laya.stage.mouseX;
                }, 1e3 / 60), l(H.bottomRiverShowList, H.bottomContentWidth, Laya.stage.mouseX - d, H.bottomRiverNode);
            }), H.bottomRiverContent.offAll(Laya.Event.MOUSE_OUT), H.bottomRiverContent.on(Laya.Event.MOUSE_OUT, H.bottomRiverContent, function() {
                u();
            }), H.bottomRiverContent.offAll(Laya.Event.MOUSE_UP), H.bottomRiverContent.on(Laya.Event.MOUSE_UP, H.bottomRiverContent, function() {
                u();
            }), H.bottomRiverContent && Laya.timer.clearAll(H.bottomRiverContent), Laya.timer.loop(1e3 / 60, H.bottomRiverContent, function() {
                if (20 < (a += 1 / 60)) a = 0, null != H.bottomRiverContent && (H.bottomFingerTouch = !1, 
                x.BI.getRiverDataByNeedNum(7, function(e) {
                    H.bottomRiverList = e, se();
                }, "底部导流")); else if (H.bottomFingerTouch) {
                    if (0 == c) return;
                    var e = c / 60 * 20;
                    l(H.bottomRiverShowList, H.bottomContentWidth, e, H.bottomRiverNode), 0 < c ? (c -= 1 / 60) < 0 && (c = 0, 
                    H.bottomFingerTouch = !1) : 0 < (c += 1 / 60) && (c = 0, H.bottomFingerTouch = !1);
                } else l(H.bottomRiverShowList, H.bottomContentWidth, 1, H.bottomRiverNode);
            })) : (H.bottomRiverContent.targetOff("touchstart"), H.bottomRiverContent.on("touchstart", function() {
                H.bottomFingerTouch = !0, c = 0, s = new Date().getTime(), console.log("开始触摸");
            }), H.bottomRiverContent.targetOff("touchmove"), H.bottomRiverContent.on("touchmove", function(e) {
                var t = e.getDelta().x;
                l(H.bottomRiverShowList, H.bottomContentWidth, t, H.bottomRiverNode);
            }), H.bottomRiverContent.targetOff("touchend"), H.bottomRiverContent.on("touchend", function(e) {
                t(e);
            }), H.bottomRiverContent.targetOff("touchcancel"), H.bottomRiverContent.on("touchcancel", function(e) {
                t(e);
            }), cc.director.getScheduler().unscheduleAllForTarget(H.bottomRiverContent), cc.director.getScheduler().schedule(function(e) {
                if (20 < (a += 1 / 60)) a = 0, cc.isValid(H.bottomRiverContent) && (H.bottomFingerTouch = !1, 
                x.BI.getRiverDataByNeedNum(6, function(e) {
                    H.bottomRiverList = e, se();
                }, "底部导流")); else if (H.bottomFingerTouch) {
                    if (0 == c) return;
                    var t = c / 60 * 20;
                    l(H.bottomRiverShowList, H.bottomContentWidth, t, H.bottomRiverNode), 0 < c ? (c -= 1 / 60) < 0 && (c = 0, 
                    H.bottomFingerTouch = !1) : 0 < (c += 1 / 60) && (c = 0, H.bottomFingerTouch = !1);
                } else l(H.bottomRiverShowList, H.bottomContentWidth, 1, H.bottomRiverNode);
            }, H.bottomRiverContent, 1 / 60));
        }
    }
    x.BI.hideBottomRiver = function() {
        H.bottomRiverContent && (H.bottomRiverContent.active = !1);
    }, x.BI.setBottomRiver = function(e, t, n, i, o) {
        H.bottomRiverContent = o, H.bottomRiverNode = e, H.bottomRiverPrefab = t, H.bottomItemWidth = n, 
        H.bottomItemStep = i, H.bottomRiverTimeOffset = 5, H.bottomRiverShowList = [];
        !function() {
            -1 != x.BI.getGameExtValueByKey("bottom_navi_change_time") && (H.bottomRiverTimeOffset = x.BI.getGameExtValueByKey("bottom_navi_change_time"));
            "laya" == b.engine ? (b.designSizeWidth, b.designSizeHeight) : cc.view.getDesignResolutionSize();
            var e = 6;
            "laya" == b.engine && (e = 7), x.BI.getRiverDataByNeedNum(e, function(e) {
                H.bottomRiverList = e, se();
            }, "底部导流");
        }();
    };
    function de() {
        var e = x.BI.getGameExtValueByKey("strong_derivation_switch");
        if (-1 != e && 1 == Number(e) && 0 < H.fullRiverList.length) {
            var t = Math.floor(Math.random() * H.fullRiverList.length), n = H.fullRiverList[t];
            if (n) {
                if (!n.create_info) return console.log("数据异常"), 0;
                J(n && n.diversionId, n.create_info.appId, n.create_info, showName, "强制导出", null, function() {
                    1 == x.BI.getCurrrentMistakeState() && x.BI.showVideoAd(null, null, null, null);
                }, n.create_info.pathInfo);
            }
        }
    }
    x.BI.setFullScreenRiverCloseCallback = function(e) {
        H.fullRiverCallBack = e;
    };
    var ue = !0;
    x.BI.setFullScreenRiver = function(s, d, e, u, t) {
        var l = this;
        try {
            if (ue) {
                ue = !1;
                u = u;
                H.fullRiverBtn = e, "laya" == b.engine ? H.fullRiverBtn && (H.fullRiverBtn.visible = !1) : H.fullRiverBtn && (H.fullRiverBtn.active = !1), 
                H.navigateFullScreenContent = t;
                var n = Number(x.BI.getGameExtValueByKey("full_screen_navigate_switch"));
                if (console.log(n, "isShowFullState"), 0 == n) return H.navigateFullScreenContent.active = !1, 
                H.fullRiverCallBack && H.fullRiverCallBack(), void de();
                var g = !1, c = 0, h = 0, v = function(e) {
                    var t = e.getLocation().y - e.getStartLocation().y, n = new Date().getTime();
                    0 == (c = t / (n - h)) && (g = !1);
                }, f = function() {
                    var t = this, e = 0, n = Math.floor((H.fullRiverList.length - 1) / 2) + 1, i = 0;
                    "laya" == b.engine ? d.removeChildren() : d.removeAllChildren(), 0 < H.fullRiverList.length && H.fullRiverList.length <= 4 && (d.y = 0);
                    for (var o, r, a, l, c = 0; c < H.fullRiverList.length; c++) {
                        !function(e) {
                            o = H.fullRiverList[e], "laya" == b.engine ? (r = Laya.Pool.getItemByCreateFun("fullScreenItem", s.create, s)) && (r.pos(e % 2 * (u + 30) + 30, Math.floor(e / 2) * (u + 70)), 
                            K(o.iconUrl, r, 0, u, u), r.getChildByName("name") && (r.getChildByName("name").text = o.showName), 
                            r.offAll(Laya.Event.MOUSE_DOWN), r.on(Laya.Event.MOUSE_DOWN, t, function() {
                                x.BI.reportUserBehaviorBranchAnalytics("fullScreenRiver_branchId", e, H.nativeOperateClick), 
                                x.BI.adRiverDiversion(H.fullRiverList[e].id, "全屏", H.nativeOperateClick), J(H.fullRiverList[e].id, H.fullRiverList[e].appId, H.fullRiverList[e].showName, "全屏", null, null, H.fullRiverList[e].pathInfo), 
                                g = !1;
                            }), d.addChild(r)) : ((r = cc.instantiate(s)).setPosition(e % 2 * (u + 30) - 150, -Math.floor(e / 2) * (u + 70) - 200), 
                            r.children && 0 < r.children.length && (r.children[0] && r.children[0].children[0] && te(r.children[0].children[0], o.iconUrl, cc.size(u, u)), 
                            r.children[1] && (r.children[1].getComponent(cc.Label).string = o.showName)), r.targetOff("touchend"), 
                            r.on("touchend", function() {
                                x.BI.reportUserBehaviorBranchAnalytics("fullScreenRiver_branchId", e, H.nativeOperateClick), 
                                x.BI.adRiverDiversion(H.fullRiverList[e].id, "全屏", H.nativeOperateClick), J(H.fullRiverList[e].id, H.fullRiverList[e].appId, H.fullRiverList[e].showName, "全屏", null, null, H.fullRiverList[e].pathInfo), 
                                g = !1;
                            }), d.addChild(r));
                        }(c);
                    }
                    return "laya" == b.engine ? (a = new Laya.Sprite(), d.parent && a.graphics.drawRect(5, 0, d.parent.width, d.parent.height, "#ffff00"), 
                    a.pos(0, 0), d.parent.mask = a, e = (i = (u + 70) * n) - d.height, d.height = i) : (l = null, 
                    l = d.parent.getContentSize(), e = (i = (u + 70) * n + 120) - l.height, d.setContentSize(cc.size(l.width, i))), 
                    e;
                };
                setTimeout(function() {
                    var n, e, i, o, r, a = f();
                    "laya" == b.engine ? (n = 0, d.on(Laya.Event.MOUSE_DOWN, d, function() {
                        n = Laya.stage.mouseY, g = !0, c = 0, h = new Date().getTime(), console.log("开始触摸");
                    }), e = function() {
                        var e = Laya.stage.mouseY - n, t = new Date().getTime();
                        0 == (c = e / (t - h)) && (g = !1);
                    }, i = function() {
                        0 < d.y && (d.y = 0), d.y < -a && (d.y = -a);
                    }, d.on(Laya.Event.MOUSE_MOVE, d, function() {
                        H.fullRiverList && 0 < H.fullRiverList.length && H.fullRiverList.length <= 4 || setTimeout(function() {
                            d.y += Laya.stage.mouseY - n, n = Laya.stage.mouseY, i();
                        }, 1e3 / 60);
                    }), d.on(Laya.Event.MOUSE_UP, d, function() {
                        e();
                    }), d.on(Laya.Event.MOUSE_OUT, d, function() {
                        e();
                    }), o = !1, r = 2, Laya.timer.loop(1e3 / 60, t, function() {
                        if ((!H.navigateFullScreenContent || H.navigateFullScreenContent.active) && (H.fullScreenRefresh && (a = f(), 
                        H.fullScreenRefresh = !1), !(H.fullRiverList && 0 < H.fullRiverList.length && H.fullRiverList.length <= 4))) if (g) {
                            if (0 == c) return;
                            var e = c / 60 * 500;
                            d.y = d.y + e, i(), 0 != d.y && d.y != -a || (g = !1), 0 < c ? (c -= 1 / 60) < 0 && (c = 0, 
                            g = !1) : 0 < (c += 1 / 60) && (c = 0, g = !1);
                        } else o ? (d.y = d.y + r, 0 <= d.y && (o = !1)) : (d.y = d.y - r, d.y < -a && (o = !0));
                    }), H.fullRiverBtn.on(Laya.Event.MOUSE_DOWN, l, function() {
                        console.log("点击继续按钮"), H.fullRiverBtn.active = !1, H.fullRiverCallBack && H.fullRiverCallBack(), 
                        null != H.navigateFullScreenContent && (H.navigateFullScreenContent.destroy(), Laya.timer.clearAll(H.navigateFullScreenContent), 
                        H.navigateFullScreenContent = null), de();
                    })) : (d.on("touchstart", function() {
                        g = !0, c = 0, h = new Date().getTime(), console.log("开始触摸");
                    }), i = function() {
                        d.y < 0 && (d.y = 0), d.y > a && (d.y = a);
                    }, d.on("touchmove", function(e) {
                        var t;
                        H.fullRiverList && 0 < H.fullRiverList.length && H.fullRiverList.length <= 4 || (t = e.getDelta().y, 
                        d.y += t, i());
                    }), d.on("touchend", function(e) {
                        v(e);
                    }), d.on("touchcancel", function(e) {
                        v(e);
                    }), o = !1, r = 2, cc.director.getScheduler().schedule(function(e) {
                        if ((!H.navigateFullScreenContent || H.navigateFullScreenContent.active) && (H.fullScreenRefresh && (a = f(), 
                        H.fullScreenRefresh = !1), !(H.fullRiverList && 0 < H.fullRiverList.length && H.fullRiverList.length <= 4))) if (g) {
                            if (0 == c) return;
                            var t = c * e * 500;
                            d.y = d.y + t, i(), 0 != d.y && d.y != a || (g = !1), 0 < c ? (c -= e) < 0 && (c = 0, 
                            g = !1) : 0 < (c += e) && (c = 0, g = !1);
                        } else o ? (d.y = d.y - r, d.y <= 0 && (o = !1)) : (d.y = d.y + r, d.y > a && (o = !0));
                    }, H.navigateFullScreenContent, 1 / 60), H.fullRiverBtn.on("touchend", function() {
                        console.log("点击继续按钮"), H.fullRiverBtn.active = !1, H.fullRiverCallBack && H.fullRiverCallBack(), 
                        null != H.navigateFullScreenContent && (cc.director.getScheduler().unscheduleAllForTarget(H.navigateFullScreenContent), 
                        H.navigateFullScreenContent.removeFromParent(), H.navigateFullScreenContent = null, 
                        ue = !0), de();
                    })), setTimeout(function() {
                        H.fullRiverBtn && ("laya" == b.engine ? H.fullRiverBtn.visible = !0 : H.fullRiverBtn.active = !0);
                    }, 2500);
                }, 500), setTimeout(function() {
                    ue = !0;
                }, 2e3);
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            ue = !0;
        }
    };
    x.BI.setListRiver = function(u, e, g, h, v, t, f) {
        H.listRiverContent = e, H.listRiverPrefab = u, H.listRiverPrefabWidth = g;
        var n = (f - 1) * h + g * f, i = (t - 1) * v + g * t, m = 0, w = 0;
        e.width >= n ? m = e.width - n : console.log("可显示区域宽度小于（指定的显示列数+X间距)"), e.height >= i ? w = e.height - i : console.log("可显示区域高度小于（指定的显示行数+Y间距)"), 
        H.listRiverPosList = [];
        var p = -e.width / 2, S = e.height / 2;
        H.listRiverShowNum = t * f;
        x.BI.getRiverDataByNeedNum(H.listRiverShowNum, function(e) {
            H.listRiverList = e, H.listRiverList.length < H.listRiverShowNum && (H.listRiverShowNum = H.listRiverList.length), 
            function() {
                var s, d = this;
                0 <= m && 0 <= w && function() {
                    var c = H.listRiverList;
                    if (0 <= m && 0 <= w) for (var e = 0; e < H.listRiverShowNum; e++) !function(e) {
                        var t, n, i, o, r, a, l = m / 2 + g / 2 + e % f * (h + g);
                        "laya" == b.engine ? (t = w / 2 + g / 2 + Math.floor(e / f) * (v + g), n = new Laya.Prefab(), 
                        (i = (null == u.json ? n.json = u : n = u, Laya.Pool.getItemByCreateFun("listIcon", n.create, n)))._children && 0 < i._children.length && (i._children[0] && c[e] && c[e].create_info && K(c[e].create_info.icon, i._children[0], 0, g, g), 
                        i._children[1] && (6 < (a = c[e].create_info && c[e].create_info.showName).length && (a = a.substring(0, 6)), 
                        i._children[1].text = a)), i.offAll(Laya.Event.MOUSE_DOWN), i.on(Laya.Event.MOUSE_DOWN, d, function() {
                            if (c[e]) {
                                if (x.BI.adRiverDiversion("", "列表", H.nativeOperateClick), x.BI.adClickNewBIRiver(c[e] && c[e].diversionId, "列表导流"), 
                                !c[e].create_info) return void console.log("数据错误");
                                J(c[e] && c[e].diversionId, c[e].create_info.app_id, c[e].create_info.showName, "列表导流", null, null, c[e].create_info.pathInfo);
                            }
                        }), c[e].create_info && ((s = {}).posX = l, s.posY = t, i.x = l, i.y = t, H.listRiverPosList.push(s), 
                        H.listRiverContent.addChild(i))) : (o = -w / 2 - g / 2 - Math.floor(e / f) * (v + g), 
                        (r = cc.instantiate(u)).children && 0 < r.children.length && (r.children[0] && c[e] && r.children[0] && r.children[0].children[0] && c[e].create_info && te(r.children[0].children[0], c[e].create_info.icon, cc.size(g, g)), 
                        r.children[2] && (6 < (a = c[e].create_info && c[e].create_info.showName).length && (a = a.substring(0, 6)), 
                        r.children[2].getComponent(cc.Label).string = a)), r.targetOff("touchend"), r.on("touchend", function() {
                            if (c[e]) {
                                if (x.BI.adRiverDiversion("", "列表", H.nativeOperateClick), x.BI.adClickNewBIRiver(c[e] && c[e].diversionId, "列表导流"), 
                                !c[e].create_info) return void console.log("数据错误");
                                J(c[e] && c[e].diversionId, c[e].create_info.app_id, c[e].create_info.showName, "列表导流", null, null, c[e].create_info.pathInfo);
                            }
                        }), c[e].create_info && ((s = {}).posX = l + p, s.posY = o + S, r.x = l + p, r.y = o + S, 
                        H.listRiverPosList.push(s), H.listRiverContent.addChild(r)));
                    }(e);
                }();
            }();
        }, "列表导流");
    };
    x.BI.refreshListRiver = function() {
        x.BI.getRiverDataByNeedNum(H.listRiverShowNum, function(e) {
            H.listRiverList = e, H.listRiverList.length < H.listRiverShowNum && (H.listRiverShowNum = H.listRiverList.length), 
            function() {
                var r, a = this;
                null != H.listRiverContent ? ("laya" == b.engine ? function() {
                    H.listRiverContent.removeChildren();
                    for (var o = H.listRiverList, e = 0; e < H.listRiverPosList.length; e++) !function(e) {
                        r = H.listRiverPrefab;
                        var t, n, i = new Laya.Prefab();
                        (n = (null == r.json ? i.json = r : i = r, Laya.Pool.getItemByCreateFun("listIcon", i.create, i)))._children && 0 < n._children.length && (n._children[0] && o[e] && K(o[e].create_info.icon, n._children[0], 0, H.listRiverPrefabWidth, H.listRiverPrefabWidth), 
                        n._children[1] && (6 < (t = o[e].create_info.showName).length && (t = t.substring(0, 6)), 
                        n._children[1].text = t)), n.offAll(Laya.Event.MOUSE_DOWN), n.on(Laya.Event.MOUSE_DOWN, a, function() {
                            if (o[e]) {
                                if (x.BI.adRiverDiversion("", "列表", H.nativeOperateClick), x.BI.adClickNewBIRiver(o[e] && o[e].diversionId, "列表导流"), 
                                !o[e].create_info) return void console.log("数据错误");
                                J(o[e] && o[e].diversionId, o[e].create_info.app_id, o[e].create_info.showName, "列表导流", null, null, o[e].create_info.pathInfo);
                            }
                        }), n.x = H.listRiverPosList[e].posX, n.y = H.listRiverPosList[e].posY, H.listRiverContent.addChild(n);
                    }(e);
                } : function() {
                    H.listRiverContent.removeAllChildren();
                    for (var i = H.listRiverList, e = 0; e < H.listRiverPosList.length; e++) !function(e) {
                        var t, n = cc.instantiate(H.listRiverPrefab);
                        n.children && 0 < n.children.length && (n.children[0] && i[e] && n.children[0] && n.children[0].children[0] && te(n.children[0].children[0], i[e].create_info.icon, cc.size(H.listRiverPrefabWidth, H.listRiverPrefabWidth)), 
                        n.children[2] && (6 < (t = i[e].create_info.showName).length && (t = t.substring(0, 6)), 
                        n.children[2].getComponent(cc.Label).string = t)), n.targetOff("touchend"), n.on("touchend", function() {
                            if (i[e]) {
                                if (x.BI.adRiverDiversion("", "列表", H.nativeOperateClick), x.BI.adClickNewBIRiver(i[e] && i[e].diversionId, "列表导流"), 
                                !i[e].create_info) return void console.log("数据错误");
                                J(i[e] && i[e].diversionId, i[e].create_info.app_id, i[e].create_info.showName, "列表导流", null, null, i[e].create_info.pathInfo);
                            }
                        }), n.x = H.listRiverPosList[e].posX, n.y = H.listRiverPosList[e].posY, H.listRiverContent.addChild(n);
                    }(e);
                })() : console.log("列表导流预制未加载");
            }();
        }, "列表导流");
    };
    x.BI.isVaild = function(e) {
        return null != e && null != e;
    };
    function ge(e, c, t, n, i, o, s, d, u, g, r, a, h) {
        "laya" == b.engine ? e && e.removeChildren() : e && e.removeAllChildren(), null != h && null != h || (h = "");
        var c = c, l = t && Math.ceil(t.length / c);
        function v(e, t, n, a, l) {
            for (var i = 0; i < a.length; i++) !function(e, t, n) {
                var i, o, r;
                Math.floor(e / c) == t && ("laya" == b.engine ? (r = null, i = s, o = new Laya.Prefab(), 
                (r = (null == i.json ? o.json = i : o = i, Laya.Pool.getItemByCreateFun("_newMultiRowAndMultiCloumnIcon", o.create, o))).x = e % c * (d * f + g), 
                r.y = 0, r.scaleX = f, r.scaleY = f, r.offAll(Laya.Event.MOUSE_DOWN), r.on(Laya.Event.MOUSE_DOWN, this, function() {
                    x.BI.adRiverDiversion(a[e].diversionId, h, H.nativeOperateClick), x.BI.adClickNewBIRiver(a[e].diversionId, h), 
                    J(a[e].diversionId, a[e].create_info.app_id, 0, h, null, null, a[e].create_info.pathInfo), 
                    l && l();
                }), r.getChildByName("icon") && (r.getChildByName("icon").height = u, r.getChildByName("icon").width = u, 
                K(a[e].create_info.icon, r.getChildByName("icon"))), r.getChildByName("label") && (r.getChildByName("label").text = a[e].create_info.showName)) : ((r = cc.instantiate(s)).setPosition(d * f / 2 + e % c * (d * f + g), 0), 
                r.scale = f, r.targetOff("touchend"), r.on("touchend", function() {
                    x.BI.adRiverDiversion(a[e].diversionId, h, H.nativeOperateClick), x.BI.adClickNewBIRiver(a[e].diversionId, h), 
                    J(a[e].diversionId, a[e].create_info.app_id, 0, h, null, null, a[e].create_info.pathInfo), 
                    l && l();
                }), r.getChildByName("icon") && te(r.getChildByName("icon"), a[e].create_info.icon, cc.size(u, u)), 
                r.getChildByName("label") && (r.getChildByName("label").getComponent(cc.Label).string = a[e].create_info.showName)), 
                n.addChild(r));
            }(i, t, e);
        }
        l <= 4 && (l = 4);
        var f = (e.parent.width - 2 * a - (c - 1) * g) / c / d;
        if ("laya" == b.engine) for (var m = 0; m < l; m++) {
            (p = new Laya.Sprite()).width = b.designSizeWidth, p.height = d, p.anchorX = 0, 
            p.x = a, p.y = r + m * (d * f + 20 + r), o && o(), v(p, m, 0, t, i), e.addChild(p), 
            n.push(p);
        } else for (var w = 0; w < l; w++) {
            var p = new cc.Node(), S = cc.view.getDesignResolutionSize();
            p.setContentSize(S.width, d), p.x = -S.width / 2 + a, p.y = -d * f / 2 - r - w * (d * f + 20 + r), 
            o && o(), v(p, w, 0, t, i), e.addChild(p), n.push(p);
        }
    }
    x.BI.delayDoAction = function(e, t, n) {
        var i;
        null != e && null != e && ("laya" == b.engine ? (i = function() {
            n && n();
        }, Laya.timer.clear(e, i), Laya.timer.frameOnce(60 * t, e, i)) : (e.stopAllActions(), 
        e.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(n)))));
    };
    function he(t, n, i, o, r, a, e, l, c, s, d, u, g, h, v, f, m) {
        function w() {
            x.BI.getRiverDataByNeedNum(u, function(e) {
                ge(c, d, e, g, a, h, v, t, n, i, r, o, m);
            }, m);
        }
        w(), "laya" == b.engine ? Laya.timer.loop(2e4, s, function() {
            w();
        }) : (s && cc.director.getScheduler().unscheduleAllForTarget(s), cc.director.getScheduler().schedule(function(e) {
            s && w();
        }, s, 20));
    }
    function ve() {
        1 == x.BI.getGameExtValueByKey("heavyErrorClickIsShowGridAd") && x.BI.getGridAdIsLoaded() && x.BI.showGridAd();
    }
    function fe() {
        1 == x.BI.getGameExtValueByKey("heavyErrorClickIsShowGridAd") && x.BI.getGridAdIsLoaded() && x.BI.hideGridAd();
    }
    var me = {
        content: null,
        iconPref: null,
        iconPrefWidth: 0,
        iconWidth: 0,
        rootNode: null,
        dataList: [],
        showList: [],
        riverLeftX: 0,
        riverSpaceX: 0,
        riverSpaceY: 0,
        totalHeight: 0,
        fingerTouch: !1,
        nextCb: null
    }, we = {
        content: null,
        iconPref: null,
        iconPrefWidth: 0,
        iconWidth: 0,
        rootNode: null,
        dataList: [],
        showList: [],
        riverLeftX: 0,
        riverSpaceX: 0,
        riverSpaceY: 0,
        totalHeight: 0,
        fingerTouch: !(x.BI.setFriendInPlayRiver = function(e, t, n, i, o, r) {
            x.BI.isVaild(e) && (me.iconPref = e), x.BI.isVaild(t) && (me.content = t), x.BI.isVaild(r) && (me.rootNode = r), 
            x.BI.getGridAdIsLoaded() && x.BI.strongHideGridAd(), x.BI.hideErrorBanner();
            var a = wx.getSystemInfoSync();
            x.BI.delayDoAction(me.rootNode, 2, function() {
                "laya" == b.engine ? o.visible = !0 : o.active = !0, x.BI.delayDoAction(me.rootNode, .5, function() {
                    x.BI.getBannerIsLoaded() && (console.log("显示广告控件============"), x.BI.showErrorBanner(function() {
                        x.BI.delayDoAction(me.rootNode, .5, function() {
                            var e = x.BI.getBannerRation() * a.screenHeight;
                            "laya" == b.engine ? o && (o.y = o.y - e - 20) : o && (o.y = o.y + e + o.height);
                        });
                    })), ve();
                });
            });
            function l(e) {
                j.isErrorBanner = !1, x.BI.isVaild(me.rootNode) && (me.rootNode.destroy(), "laya" == b.engine ? Laya.timer.clearAll(me.rootNode) : cc.director.getScheduler().unscheduleAllForTarget(me.rootNode)), 
                e && e();
            }
            x.BI.isVaild(o) && ("laya" == b.engine ? (o.offAll(Laya.Event.MOUSE_DOWN), o.on(Laya.Event.MOUSE_DOWN, o, function() {
                l(function() {
                    Ae.bannerIsShow ? x.BI.showBanner() : x.BI.hideBanner(), fe(), me.nextCb && me.nextCb();
                });
            }), o.visible = !1) : (o.targetOff("touchend"), o.on("touchend", function() {
                l(function() {
                    Ae.bannerIsShow ? x.BI.showBanner() : x.BI.hideBanner(), fe(), me.nextCb && me.nextCb();
                });
            }), o.active = !1)), me.iconPrefWidth = n, me.iconWidth = i, me.riverSpaceX = 10, 
            me.riverSpaceY = 10;
            var c, s, d, u, g, h, v, f = 2 * me.riverSpaceX + 3 * me.iconPrefWidth, m = me.content && me.content.parent && me.content.parent.width;
            me.riverLeftX = (m - f) / 2, m - f <= 0 && (me.riverLeftX = 0), "laya" == b.engine ? (me.rootNode && me.rootNode.getChildByName("bg") && (me.rootNode.getChildByName("bg").width = b.designSizeWidth, 
            me.rootNode.getChildByName("bg").height = Laya.Browser.height), c = function(e) {
                o && (o.scaleX *= e), o && (o.scaleY = o.scaleY * e), o && (o.x *= e);
                var t = me.rootNode.getChildByName("bg").getChildByName("title");
                null != t && t && (t.scaleX *= e, t.scaleY *= e);
            }, "fixedheight" == Laya.stage.scaleMode ? (s = Laya.stage.width / b.designSizeWidth, 
            me.content.scaleX = s, c(me.content.scaleY = s)) : "fixedwidth" == Laya.stage.scaleMode && (s = Laya.stage.height / b.designSizeHeight, 
            me.rootNode.scaleX = s, me.rootNode.scaleY = s, me.content.scaleX = 1 / s, me.content.scaleY = 1 / s, 
            c(1 / s))) : (d = cc.director.getWinSize(), u = cc.view.getDesignResolutionSize(), 
            me.rootNode.getChildByName("bg").width = d.width, me.rootNode.getChildByName("bg").height = d.height, 
            g = me.rootNode.getChildByName("bg").getChildByName("title"), d.height != cc.view.getDesignResolutionSize().height && Math.round(d.width) == cc.view.getDesignResolutionSize().width ? (h = d.height > u.height ? d.height / u.height : 1, 
            me.rootNode.scale = me.rootNode.scale * h, me.content.scale = 1 / h, v = o.getComponent(cc.Widget), 
            1 != h && (v.bottom = v.bottom + o.y * (1 - h) + 10), o.scale *= 1 / h, null != g && g && (v = g.getComponent(cc.Widget), 
            1 != h && (v.left = v.left + v.left * h))) : (h = d.width > u.width ? 1 : d.width / u.width, 
            me.content.scale = me.content.scale * h, x.BI.isVaild(me.content.parent) && (me.content.x = (u.width - me.content.parent.width) / 2, 
            me.content.x *= h), null != g && g && (g.scale *= h, v = g.getComponent(cc.Widget), 
            1 != h && (v.left = v.left + v.left * h)), o && (o.scale *= h))), me.showList = [], 
            me.totalHeight = 0, me.fingerTouch = !1, j.isErrorBanner = !0, he(me.iconPrefWidth, me.iconWidth, me.riverSpaceX, me.riverLeftX, me.riverSpaceY, function(e) {
                me.fingerTouch = e;
            }, 0, 0, me.content, me.rootNode, 3, 15, me.showList, function() {
                var e = (t.parent.width - 2 * me.riverLeftX - 2 * me.riverSpaceX) / 3 / me.iconPrefWidth;
                me.totalHeight += me.iconPrefWidth * e + 25 + me.riverSpaceY;
            }, e, 0, "好友在玩");
        }),
        nextCb: null
    };
    x.BI.setHotRecommondRiver = function(e, t, n, i, o, r, a) {
        x.BI.isVaild(e) && (we.iconPref = e), x.BI.isVaild(t) && (we.content = t), x.BI.isVaild(a) && (we.rootNode = a), 
        x.BI.getGridAdIsLoaded() && x.BI.strongHideGridAd(), x.BI.hideErrorBanner(), we.rootNode && x.BI.delayDoAction(we.rootNode, 2, function() {
            "laya" == b.engine ? r.visible = !0 : r.active = !0, x.BI.delayDoAction(we.rootNode, .5, function() {
                console.log("显示广告控件============"), x.BI.getBannerIsLoaded() && x.BI.showErrorBanner(), 
                ve();
            });
        });
        function l(e) {
            j.isErrorBanner = !1, x.BI.isVaild(we.rootNode) && (we.rootNode.destroy(), "laya" == b.engine ? Laya.timer.clearAll(we.rootNode) : cc.director.getScheduler().unscheduleAllForTarget(we.rootNode)), 
            e && e();
        }
        x.BI.isVaild(o) && ("laya" == b.engine ? (o.offAll(Laya.Event.MOUSE_DOWN), o.on(Laya.Event.MOUSE_DOWN, o, function() {
            l(function() {
                setTimeout(function() {
                    x.BI.showFriendInPlayRiver();
                }, 50);
            });
        })) : (o.targetOff("touchend"), o.on("touchend", function() {
            l(function() {
                setTimeout(function() {
                    x.BI.showFriendInPlayRiver();
                }, 50);
            });
        }))), x.BI.isVaild(r) && ("laya" == b.engine ? (r.offAll(Laya.Event.MOUSE_DOWN), 
        r.on(Laya.Event.MOUSE_DOWN, r, function() {
            l(function() {
                Ae.bannerIsShow ? x.BI.showBanner() : x.BI.hideBanner(), fe(), we.nextCb && we.nextCb();
            });
        }), r.visible = !1) : (r.targetOff("touchend"), r.on("touchend", function() {
            l(function() {
                Ae.bannerIsShow ? x.BI.showBanner() : x.BI.hideBanner(), fe(), we.nextCb && we.nextCb();
            });
        }), r.active = !1)), we.iconPrefWidth = n, we.iconWidth = i, we.riverSpaceX = 100, 
        we.riverSpaceY = 50;
        var c, s, d, u, g, h, v = +we.riverSpaceX + 2 * we.iconPrefWidth, f = we.content && we.content.parent && we.content.parent.width;
        we.riverLeftX = (f - v) / 2, f - v <= 0 && (we.riverLeftX = 0), "laya" == b.engine ? (we.rootNode && we.rootNode.getChildByName("bg") && (we.rootNode.getChildByName("bg").width = b.designSizeWidth, 
        we.rootNode.getChildByName("bg").height = Laya.Browser.height), c = function(e) {
            r && (r.scaleX *= e), r && (r.scaleY = r.scaleY * e), r && (r.x *= e), we.rootNode.getChildByName("bg").getChildByName("title") && (we.rootNode.getChildByName("bg").getChildByName("title").x *= e, 
            we.rootNode.getChildByName("bg").getChildByName("title").scaleX *= e, we.rootNode.getChildByName("bg").getChildByName("title").scaleY *= e), 
            o && (o.x *= e, o.scaleX *= e, o.scaleY *= e);
        }, "fixedheight" == Laya.stage.scaleMode ? (s = Laya.stage.width / b.designSizeWidth, 
        we.content.scaleX = s, c(we.content.scaleY = s)) : "fixedwidth" == Laya.stage.scaleMode && (s = Laya.stage.height / b.designSizeHeight, 
        we.rootNode.scaleX = s, we.rootNode.scaleY = s, we.content.scaleX = 1 / s, we.content.scaleY = 1 / s, 
        c(1 / s))) : (d = cc.director.getWinSize(), u = cc.view.getDesignResolutionSize(), 
        we.rootNode.getChildByName("bg").width = d.width, we.rootNode.getChildByName("bg").height = d.height, 
        d.height != cc.view.getDesignResolutionSize().height && Math.round(d.width) == cc.view.getDesignResolutionSize().width ? (h = d.height > u.height ? d.height / u.height : 1, 
        we.rootNode.scale = we.rootNode.scale * h, we.content.scale = 1 / h, o.scaleX *= 1 / h, 
        o.scaleY *= 1 / h, o.x *= 1 / h, g = r.getComponent(cc.Widget), 1 != h && (g.bottom = g.bottom + r.y * (1 - h) + 10), 
        r.scale *= 1 / h) : (h = d.width > u.width ? 1 : d.width / u.width, we.content.scale = we.content.scale * h, 
        x.BI.isVaild(we.content.parent) && (we.content.x = (u.width - we.content.parent.width) / 2, 
        we.content.x *= h), o && (o.x = we.rootNode.getChildByName("bg").getChildByName("title").x - 270 * h))), 
        we.showList = [], we.totalHeight = 0, we.fingerTouch = !1, we.dataList = 8, setTimeout(function() {
            j.isErrorBanner = !0, he(we.iconPrefWidth, we.iconWidth, we.riverSpaceX, we.riverLeftX, we.riverSpaceY, function(e) {
                we.fingerTouch = e;
            }, 0, 0, we.content, we.rootNode, 2, 8, we.showList, function() {
                var e = (t.parent.width - 2 * we.riverLeftX - we.riverSpaceX) / 2 / we.iconPrefWidth;
                we.totalHeight += we.iconPrefWidth * e + 25 + we.riverSpaceY;
            }, e, 0, "热门推荐");
        }, 1e3 / 60);
    };
    var pe = !0;
    x.BI.showHeavyErrorClick = function(e) {
        if (e && null != e && (we.nextCb = e, me.nextCb = e), pe) {
            if (pe = !1, "laya" == b.engine) {
                ce("prefab/sdk_prefabs/heavyErrorClickRiver/HotRecommendRiver.json", "HotRecommendRiver");
            } else try {
                var i = cc.director.getWinSize();
                cc.loader.loadRes("sdk_prefabs/heavyErrorClickRiver/hotRecommendRiver", cc.Prefab, function(e, t) {
                    var n;
                    e || ((n = cc.instantiate(t)).x = i.width / 2, n.y = i.height / 2, cc.director.getScene().addChild(n, 99999));
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                console.log("err:" + JSON.stringify(e)), pe = !0;
            }
            setTimeout(function() {
                pe = !0;
            }, 200);
        }
    };
    function Se() {
        "laya" == b.engine ? (ye.newListRiverContent1 && ye.newListRiverContent1.removeChildren(), 
        ye.newListRiverContent2 && ye.newListRiverContent2.removeChildren()) : (ye.newListRiverContent1 && ye.newListRiverContent1.removeAllChildren(), 
        ye.newListRiverContent2 && ye.newListRiverContent2.removeAllChildren());
        var e = ye.newListRiverDataList1 && Math.ceil(ye.newListRiverDataList1.length / 2), t = ye.newListRiverDataList2 && Math.ceil(ye.newListRiverDataList2.length / 2);
        function n(e, t, n, o, r) {
            for (var i = 0; i < o.length; i++) !function(e, t, n) {
                var i;
                Math.floor(e / 2) == t && ("laya" == b.engine || ((i = cc.instantiate(ye.newListRiverPreb)).setPosition(ye.newListRiverItemWidth / 2 + e % 2 * (ye.newListRiverItemWidth + ye.newListRiverSpaceX), 0), 
                i.on("touchend", function() {
                    x.BI.adRiverDiversion(o[e].diversionId, "列表导流2", H.nativeOperateClick), x.BI.adClickNewBIRiver(o[e].diversionId, "列表导流2"), 
                    o[e].create_info ? (J(o[e].diversionId, o[e].create_info.app_id, 0, "列表导流2", null, null, o[e].create_info.pathInfo), 
                    1 == r ? ye.newListRiverIsFingerTouch1 = !1 : ye.newListRiverIsFingerTouch2 = !1) : console.log("数据错误");
                }), i.children[0] && setTimeout(function() {
                    te(i.children[0], o[e].create_info.icon, cc.size(ye.newListRiverIconWidth, ye.newListRiverIconWidth));
                }, 500), i.children[1] && (i.children[1].getComponent(cc.Label).string = o[e].create_info.showName || ""), 
                n.addChild(i)));
            }(i, t, e);
        }
        if (e <= 4 && (e = 4), t <= 4 && (t = 4), "laya" == b.engine) for (var i = 0; i < e; i++) {
            (r = new Laya.Sprite()).width = ye.newListRiverContent1.width, r.height = ye.newListRiverItemWidth, 
            r.anchorX = 0, r.x = ye.newListRiverLeftX, r.y = ye.newListRiverItemWidth / 2 + ye.newListRiverSpaceY + i * (ye.newListRiverItemWidth + ye.newListRiverItemWidth / 120 * 20 + ye.newListRiverSpaceY), 
            ye.newListRiverTotalHeight1 += ye.newListRiverItemWidth + ye.newListRiverItemWidth / 120 * 25 + ye.newListRiverSpaceY, 
            n(r, i, 0, ye.newListRiverDataList1, 1), ye.newListRiverContent1.addChild(r), ye.newListRiverShowList1.push(r);
        } else {
            for (var o = 0; o < e; o++) {
                (r = new cc.Node()).setContentSize(ye.newListRiverContent1.width, ye.newListRiverItemWidth), 
                r.anchorX = 0;
                cc.view.getDesignResolutionSize();
                r.setPosition(-ye.newListRiverContent1.width / 2 + ye.newListRiverLeftX, -ye.newListRiverItemWidth / 2 - ye.newListRiverSpaceY - o * (ye.newListRiverItemWidth + ye.newListRiverItemWidth / 120 * 20 + ye.newListRiverSpaceY)), 
                ye.newListRiverTotalHeight1 += ye.newListRiverItemWidth + ye.newListRiverItemWidth / 120 * 25 + ye.newListRiverSpaceY, 
                n(r, o, 0, ye.newListRiverDataList1, 1), ye.newListRiverContent1.addChild(r), ye.newListRiverShowList1.push(r);
            }
            for (var r, o = 0; o < t; o++) {
                (r = new cc.Node()).setContentSize(ye.newListRiverContent2.width, ye.newListRiverItemWidth), 
                r.anchorX = 0;
                cc.view.getDesignResolutionSize();
                r.setPosition(-ye.newListRiverContent2.width / 2 + ye.newListRiverLeftX, -ye.newListRiverItemWidth / 2 - ye.newListRiverSpaceY - o * (ye.newListRiverItemWidth + ye.newListRiverItemWidth / 120 * 20 + ye.newListRiverSpaceY)), 
                ye.newListRiverTotalHeight2 += ye.newListRiverItemWidth + ye.newListRiverItemWidth / 120 * 25 + ye.newListRiverSpaceY, 
                n(r, o, 0, ye.newListRiverDataList2, 2), ye.newListRiverContent2.addChild(r), ye.newListRiverShowList2.push(r);
            }
        }
    }
    var _e = !0, ye = {
        newListRiverContent1: null,
        newListRiverContent2: null,
        newListRiverRootNode: null,
        newListRiverPreb: null,
        newListRiverItemWidth: null,
        newListRiverIconWidth: null,
        newListRiverDataList1: [],
        newListRiverDataList2: [],
        newListRiverShowList1: [],
        newListRiverShowList2: [],
        newListRiverLeftX: 0,
        newListRiverSpaceX: 0,
        newListRiverSpaceY: 0,
        newListRiverTotalHeight1: 0,
        newListRiverTotalHeight2: 0,
        newListRiverIsFingerTouch1: !(x.BI.showFriendInPlayRiver = function() {
            if (_e) {
                _e = !1;
                try {
                    var i;
                    "laya" == b.engine ? ce("prefab/sdk_prefabs/heavyErrorClickRiver/FriendInPlayRiver.json", "FriendInPlayRiver") : (i = cc.director.getWinSize(), 
                    cc.loader.loadRes("sdk_prefabs/heavyErrorClickRiver/friendInPlayRiver", cc.Prefab, function(e, t) {
                        var n;
                        e || ((n = cc.instantiate(t)).x = i.width / 2, n.y = i.height / 2, cc.director.getScene().addChild(n, 99999));
                    }));
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.log("err:" + JSON.stringify(e)), _e = !0;
                }
                setTimeout(function() {
                    _e = !0;
                }, 2e3);
            }
        }),
        newListRiverIsFingerTouch2: !1
    };
    x.BI.setNewListRiver2 = function(e, t, n, i, o, r, a, l) {
        ye.newListRiverPreb = e, ye.newListRiverContent1 = t, ye.newListRiverContent2 = n, 
        ye.newListRiverItemWidth = i, ye.newListRiverSpaceY = a, ye.newListRiverSpaceX = r, 
        ye.newListRiverRootNode = l, ye.newListRiverIconWidth = o;
        var c, s = +ye.newListRiverSpaceX + 2 * i;
        function d() {
            x.BI.getRiverDataByNeedNum(12, function(e) {
                var t = [], n = [];
                if (0 < e.length) {
                    for (var i = 0; i < Math.ceil(e.length / 2); i++) t.push(e[i]);
                    for (var o = Math.ceil(e.length / 2); o < e.length; o++) n.push(e[o]);
                }
                ye.newListRiverDataList1 = t, ye.newListRiverDataList2 = n, ye.newListRiverShowList1 = [], 
                ye.newListRiverShowList2 = [], ye.newListRiverTotalHeight1 = 0, ye.newListRiverTotalHeight2 = 0, 
                ye.newListRiverIsFingerTouch1 = !1, ye.newListRiverIsFingerTouch2 = !1, Se();
            }, "列表导流2");
        }
        (c = t && t.parent && t.parent.width) < s ? (ye.newListRiverSpaceX = (c - 2 * i) / 3, 
        ye.newListRiverLeftX = ye.newListRiverSpaceX, console.log("[新列表导流]实际宽度大于显示区域宽度，自适应显示区域"), 
        console.log("[新列表导流]自适应x间距:" + ye.newListRiverSpaceX)) : ye.newListRiverLeftX = (c - s) / 2, 
        d(), "laya" == b.engine ? Laya.timer.loop(2e4, H.bottomRiverContent, function() {}) : cc.director.getScheduler().schedule(function(e) {
            d();
        }, ye.newListRiverRootNode, 20);
    };
    function Be() {
        "laya" == b.engine ? Le.newListRiverContent && Le.newListRiverContent.removeChildren() : Le.newListRiverContent && Le.newListRiverContent.removeAllChildren();
        var l = 3;
        b.isLandScape && (l = 4);
        var e = Le.newListRiverDataList && Math.ceil(Le.newListRiverDataList.length / l);
        function t(e, t) {
            for (var n = 0; n < Le.newListRiverDataList.length; n++) !function(e, t, n) {
                var i, o, r, a;
                Math.floor(e / l) == t && ("laya" == b.engine ? (r = null, i = Le.newListRiverPreb, 
                o = new Laya.Prefab(), (r = (null == i.json ? o.json = i : o = i, Laya.Pool.getItemByCreateFun("newListRiverPref", o.create, o))).x = Le.newListRiverItemWidth / 2 + e % l * (Le.newListRiverItemWidth + Le.newListRiverSpaceX), 
                r.y = 0, r.on(Laya.Event.MOUSE_UP, this, function() {
                    x.BI.adRiverDiversion("", "新列表导流", H.nativeOperateClick), x.BI.adClickNewBIRiver(Le.newListRiverDataList[e] && Le.newListRiverDataList[e].diversionId, "新列表导流"), 
                    Le.newListRiverDataList[e].create_info ? (J(Le.newListRiverDataList[e] && Le.newListRiverDataList[e].diversionId, Le.newListRiverDataList[e].create_info.app_id, 0, "新列表导流", null, null, Le.newListRiverDataList[e].create_info.pathInfo), 
                    Le.newListRiverIsFingerTouch = !1) : console.log("数据错误");
                }), r._children[0] && (r._children[0].height = Le.newListRiverIconWidth, r._children[0].width = Le.newListRiverIconWidth, 
                K(Le.newListRiverDataList[e].create_info.icon, r._children[0])), r._children[1] && (r._children[1].width = Le.newListRiverItemWidth, 
                6 < (a = Le.newListRiverDataList[e].create_info.showName).length && (a = a.substring(0, 6)), 
                r._children[1].text = a)) : ((r = cc.instantiate(Le.newListRiverPreb)).setPosition(Le.newListRiverItemWidth / 2 + e % l * (Le.newListRiverItemWidth + Le.newListRiverSpaceX), 0), 
                r.on("touchend", function() {
                    x.BI.adRiverDiversion("", "新列表导流", H.nativeOperateClick), x.BI.adClickNewBIRiver(Le.newListRiverDataList[e] && Le.newListRiverDataList[e].diversionId, "新列表导流"), 
                    Le.newListRiverDataList[e].create_info ? (J(Le.newListRiverDataList[e] && Le.newListRiverDataList[e].diversionId, Le.newListRiverDataList[e].create_info.app_id, 0, "新列表导流", null, null, Le.newListRiverDataList[e].create_info.pathInfo), 
                    Le.newListRiverIsFingerTouch = !1) : console.log("数据错误");
                }), r.children[0] && r.children[0].children[0] && te(r.children[0].children[0], Le.newListRiverDataList[e].create_info.icon, cc.size(Le.newListRiverIconWidth, Le.newListRiverIconWidth)), 
                r.children[2] && (6 < (a = Le.newListRiverDataList[e].create_info.showName).length && (a = a.substring(0, 6)), 
                r.children[2].getComponent(cc.Label).string = a)), n.addChild(r));
            }(n, t, e);
        }
        if (e <= 4 && (e = 4), "laya" == b.engine) for (var n = 0; n < e; n++) {
            (i = new Laya.Sprite()).width = Le.newListRiverContent.width, i.height = Le.newListRiverItemWidth, 
            i.anchorX = 0, i.x = Le.newListRiverLeftX, i.y = Le.newListRiverItemWidth / 2 + Le.newListRiverSpaceY + n * (Le.newListRiverItemWidth + Le.newListRiverItemWidth / 120 * 20 + Le.newListRiverSpaceY), 
            Le.newListRiverTotalHeight += Le.newListRiverItemWidth + Le.newListRiverItemWidth / 120 * 25 + Le.newListRiverSpaceY, 
            t(i, n), Le.newListRiverContent.addChild(i), Le.newListRiverShowList.push(i);
        } else for (var i, o = 0; o < e; o++) {
            (i = new cc.Node()).setContentSize(Le.newListRiverContent.width, Le.newListRiverItemWidth), 
            i.anchorX = 0;
            cc.view.getDesignResolutionSize();
            i.setPosition(-Le.newListRiverContent.width / 2 + Le.newListRiverLeftX, -Le.newListRiverItemWidth / 2 - Le.newListRiverSpaceY - o * (Le.newListRiverItemWidth + Le.newListRiverItemWidth / 120 * 20 + Le.newListRiverSpaceY)), 
            Le.newListRiverTotalHeight += Le.newListRiverItemWidth + Le.newListRiverItemWidth / 120 * 25 + Le.newListRiverSpaceY, 
            t(i, o), Le.newListRiverContent.addChild(i), Le.newListRiverShowList.push(i);
        }
    }
    function Ce() {
        function t() {
            var e = 9;
            b.isLandScape && (e = 12), x.BI.getRiverDataByNeedNum(e, function(e) {
                var t = JSON.parse(JSON.stringify(e));
                Le.newListRiverDataList = t, Le.newListRiverShowList = [], Le.newListRiverTotalHeight = 0, 
                Le.newListRiverIsFingerTouch = !1, Be();
            }, "新列表导流");
        }
        t(), b.engine, Le.newListRiverItemWidth, Le.newListRiverItemWidth, Le.newListRiverSpaceY, 
        "laya" == b.engine ? Laya.timer.loop(2e4, Le.newListRiverRootNode, function() {
            t();
        }) : cc.director.getScheduler().schedule(function(e) {
            t();
        }, Le.newListRiverRootNode, 20);
    }
    var Le = {
        newListRiverContent: null,
        newListRiverRootNode: null,
        newListRiverPreb: null,
        newListRiverItemWidth: null,
        newListRiverIconWidth: null,
        newListRiverDataList: [],
        newListRiverShowList: [],
        newListRiverLeftX: 0,
        newListRiverSpaceX: 0,
        newListRiverSpaceY: 0,
        newListRiverTotalHeight: 0,
        newListRiverIsFingerTouch: !(x.BI.resetNewListRiver2 = function() {
            "laya" == b.engine ? ye.newListRiverRootNode && (Laya.timer.clearAll(ye.newListRiverRootNode), 
            ye.newListRiverRootNode = null) : ye.newListRiverRootNode && (ye.newListRiverRootNode.destroy(), 
            cc.director.getScheduler().unscheduleAllForTarget(ye.newListRiverRootNode));
        })
    };
    x.BI.setNewListRiver = function(e, t, n, i, o, r, a) {
        Le.newListRiverPreb = e, Le.newListRiverContent = t, Le.newListRiverItemWidth = n, 
        Le.newListRiverSpaceY = r, Le.newListRiverSpaceX = o, Le.newListRiverRootNode = a;
        var l = 3;
        b.isLandScape && (l = 4);
        var c = Le.newListRiverSpaceX * (l - 1) + n * l, s = 0;
        (s = t && t.parent && t.parent.width) < c ? (Le.newListRiverSpaceX = (s - n * l) / (l + 1), 
        Le.newListRiverLeftX = Le.newListRiverSpaceX, console.log("[新列表导流]实际宽度大于显示区域宽度，自适应显示区域"), 
        console.log("[新列表导流]自适应x间距:" + Le.newListRiverSpaceX)) : Le.newListRiverLeftX = (s - c) / 2, 
        Le.newListRiverIconWidth = i, Ce();
    }, x.BI.resetNewListRiver = function() {
        "laya" == b.engine ? Le.newListRiverRootNode && (Laya.timer.clearAll(Le.newListRiverRootNode), 
        Le.newListRiverRootNode = null) : Le.newListRiverRootNode && (Le.newListRiverRootNode.destroy(), 
        cc.director.getScheduler().unscheduleAllForTarget(Le.newListRiverRootNode));
    }, x.BI.createStrongDerivation = function(e) {
        var t = x.BI.getGameExtValueByKey("strong_derivation_switch");
        -1 != t ? 1 == Number(t) ? (x.BI.createFullScreenBigRiver(function() {
            setTimeout(function() {
                x.BI.showPopRiver(function() {
                    e && e();
                });
            }, 1e3 / 60);
        }), x.BI.createWechatGameExitBtn()) : (console.log("强制导出功能关闭"), e && e()) : e && e();
    }, x.BI.createFullScreenBigRiver = function(l) {
        H.fullScreenRiverReportName = "开屏";
        var e = wx.getStorageSync(s) ? Number(wx.getStorageSync(s)) : 0;
        H.fullScreenBigRiverIndex = e;
        var t;
        H.fullScreenRiverCountLabel = (t = null, "laya" == b.engine ? ((t = new Laya.Text()).color = "#000000", 
        t.fontSize = 20) : t = $(20), t);
        var n, i, c = H.fullScreenRiverReportName || "", a = function() {
            var o, r, e, t, n, a, i = H.fullScreenBigPicList[H.fullScreenBigRiverIndex];
            wx.setStorageSync(s, (H.fullScreenBigRiverIndex + 1) % H.fullScreenBigPicList.length), 
            i && (o = 0, r = 8, -1 != (e = x.BI.getGameExtValueByKey("first_scene_last_time")) && (r = e), 
            o = r, "laya" == b.engine ? (null != Laya.loader.getRes(i.iconUrl) && null != Laya.loader.getRes(i.iconUrl) ? (H.fullScreenRiverItem.texture = Laya.loader.getRes(i.iconUrl), 
            (t = new Laya.Sprite()).texture = Laya.loader.getRes(i.iconUrl), H.fullScreenRiverItem.width = Laya.stage.width, 
            H.fullScreenRiverItem.height = Laya.stage.height, n = t.height / t.width, console.log(n), 
            n < 1 ? (H.fullScreenRiverItem.height = t.height, H.fullScreenRiverItem.pos(H.fullScreenRiverItem.x, Laya.stage.height / 2 - t.height / 2)) : H.fullScreenRiverItem.pos(0, 0)) : Laya.loader.load(i.iconUrl, Laya.Handler.create(this, function(e) {
                console.log(e, "mmmmmmmmmmm"), H.fullScreenRiverItem.texture = e;
                var t = new Laya.Sprite();
                t.texture = e, console.log("++++++++++++++++++", t.width, t.height), H.fullScreenRiverItem.width = Laya.stage.width, 
                H.fullScreenRiverItem.height = Laya.stage.height;
                var n = t.height / t.width;
                console.log(n), n < 1 ? (H.fullScreenRiverItem.height = t.height, H.fullScreenRiverItem.pos(H.fullScreenRiverItem.x, Laya.stage.height / 2 - t.height / 2)) : H.fullScreenRiverItem.pos(0, 0);
            })), x.BI.adRiverDiversion(H.fullScreenBigPicList[H.fullScreenBigRiverIndex].id, c, H.nativeOperateShow), 
            H.fullScreenBigTimeFunc = setTimeout(function() {
                null != H.fullScreenBigRiverContent && (H.fullScreenBigRiverContent.destroy(), H.fullScreenBigRiverContent = null), 
                l && l();
            }, 1e3 * r), setTimeout(function() {
                !function e() {
                    null != H.fullScreenBigRiverContent && (H.fullScreenRiverCountLabel.text = o), H.fullScreenBigCntFunc = setTimeout(function() {
                        0 < o && (--o, e());
                    }, 1e3);
                }();
            }, 1e3 / 60)) : (a = cc.view.getDesignResolutionSize(), cc.loader.load(i.iconUrl, function(e, t) {
                var n = new cc.SpriteFrame(t);
                H.fullScreenRiverItem.getComponent(cc.Sprite).spriteFrame = n;
                var i = H.fullScreenRiverItem.getContentSize().height / H.fullScreenRiverItem.getContentSize().width;
                i <= 1 && (a.height = a.width * i), H.fullScreenRiverItem.scaleX = a.width * H.scaleTimeScale / H.fullScreenRiverItem.getContentSize().width + .05, 
                H.fullScreenRiverItem.scaleY = a.height / H.fullScreenRiverItem.getContentSize().height, 
                x.BI.adRiverDiversion(H.fullScreenBigPicList[H.fullScreenBigRiverIndex].id, c, H.nativeOperateShow), 
                H.fullScreenBigTimeFunc = setTimeout(function() {
                    null != H.fullScreenBigRiverContent && (H.fullScreenBigRiverContent.removeFromParent(), 
                    H.fullScreenBigRiverContent = null), l && l();
                }, 1e3 * r);
                setTimeout(function() {
                    !function e() {
                        H.fullScreenRiverCountLabel.getComponent(cc.Label).string = o, H.fullScreenBigCntFunc = setTimeout(function() {
                            0 < o && (--o, e());
                        }, 1e3);
                    }();
                }, 1e3 / 60);
            })));
        };
        null == H.fullScreenBigRiverContent && (n = null, "laya" == b.engine ? (H.fullScreenBigRiverContent = new Laya.Sprite(), 
        H.fullScreenBigRiverContent.pos(0, 0)) : (n = cc.director.getWinSize(), H.fullScreenBigRiverContent = Q(cc.v2(0, 0), cc.size(n.width, n.height))), 
        null == H.RootSceneNode ? "laya" == b.engine ? Laya.stage.addChildAt(H.fullScreenBigRiverContent, Laya.stage.numChildren) : cc.director.getScene().addChild(H.fullScreenBigRiverContent, 1003) : "laya" == b.engine ? H.RootSceneNode.addChild(H.fullScreenBigRiverContent) : H.RootSceneNode.addChild(H.fullScreenBigRiverContent, 1003), 
        i = function() {
            function e() {
                0 < H.fullScreenBigRiverClickTimes || (H.fullScreenBigTimeFunc && clearTimeout(H.fullScreenBigTimeFunc), 
                H.fullScreenBigCntFunc && clearTimeout(H.fullScreenBigCntFunc), H.fullScreenBigRiverClickTimes++, 
                x.BI.adRiverDiversion(H.fullScreenBigPicList[H.fullScreenBigRiverIndex].id, c, H.nativeOperateClick), 
                J(H.fullScreenBigPicList[H.fullScreenBigRiverIndex].id, H.fullScreenBigPicList[H.fullScreenBigRiverIndex].appId, H.fullScreenBigPicList[H.fullScreenBigRiverIndex].showName, c, function() {
                    H.fullScreenBigRiverClickTimes = 0, null != H.fullScreenBigRiverContent && (H.fullScreenBigRiverContent.destroy(), 
                    H.fullScreenBigRiverContent = null), l && l();
                }, function() {
                    var e;
                    H.fullScreenBigRiverClickTimes = 0, H.fullScreenBigPicList && 0 < H.fullScreenBigPicList.length && (e = ++H.fullScreenBigRiverIndex % H.fullScreenBigPicList.length, 
                    wx.setStorageSync(s, e), H.fullScreenBigRiverIndex = e, a());
                }, H.fullScreenBigPicList[H.fullScreenBigRiverIndex].pathInfo));
            }
            var t, n, i, o, r;
            "laya" == b.engine ? (H.fullScreenRiverItem = new Laya.Sprite(), H.fullScreenRiverItem.pos(0, 0), 
            H.fullScreenBigRiverContent.addChild(H.fullScreenRiverItem), (t = new Laya.Sprite()).alpha = .5, 
            K(H.url + "whiteBg.png", t, 0, 20, 20, function() {
                t.x = 30, t.y = 50, H.fullScreenBigRiverContent.addChild(t), H.fullScreenRiverCountLabel.pos(35, 50), 
                H.fullScreenBigRiverContent.addChild(H.fullScreenRiverCountLabel, 1e3);
            }), a(), H.fullScreenRiverItem.on(Laya.Event.MOUSE_DOWN, this, e)) : (n = cc.view.getDesignResolutionSize(), 
            i = cc.director.getWinSize().width > n.width ? 1 : cc.director.getWinSize().width / n.width, 
            H.scaleTimeScale = i, H.fullScreenRiverItem = Z(), H.fullScreenRiverItem.setPosition(cc.v2(n.width / 2 * H.scaleTimeScale, n.height / 2)), 
            H.fullScreenBigRiverContent.addChild(H.fullScreenRiverItem), (o = Z()).opacity = 128, 
            r = cc.v2(30, n.height - 50), te(o, H.url + "whiteBg.png", cc.size(20, 20), function() {
                o.setPosition(r.x, r.y), H.fullScreenBigRiverContent.addChild(o), H.fullScreenRiverCountLabel.setPosition(r.x, r.y - 15), 
                H.fullScreenBigRiverContent.addChild(H.fullScreenRiverCountLabel, 1e3);
            }), a(), H.fullScreenRiverItem.on("touchend", e));
        }, setTimeout(function() {
            i();
        }, 500));
    }, x.BI.getGameExtValueByKey = function(e) {
        var t = wx.getStorageSync(g) ? wx.getStorageSync(g) : "";
        if ("" != t && t.dataInfo) {
            var n = t.dataInfo && t.dataInfo.data;
            if (n) {
                var i = n.data && n.data.game_config;
                if (i) {
                    if (!i || !i.gameExtConfig) return;
                    var o = JSON.parse(i.gameExtConfig);
                    if (o && 0 < o.length) for (var r = 0; r < o.length; r++) {
                        var a = o[r];
                        if (a && a.ext_key == e) return Number(a.ext_value);
                    }
                }
            }
        }
        return -1;
    }, x.BI.getStrByKey = function(e) {
        var t = wx.getStorageSync(g) ? wx.getStorageSync(g) : "";
        if ("" != t && t.dataInfo) {
            var n = t.dataInfo.data;
            if (n) {
                var i = n.data.game_config;
                if (i) {
                    if (!i || !i.gameExtConfig) return;
                    var o = JSON.parse(i.gameExtConfig);
                    if (o && 0 < o.length) for (var r = 0; r < o.length; r++) {
                        var a = o[r];
                        if (a && a.ext_key == e) return a.ext_value;
                    }
                }
            }
        }
        return -1;
    }, x.BI.getGameExtConfig = function(i) {
        setTimeout(function() {
            var e, t, n = wx.getStorageSync(g) ? wx.getStorageSync(g) : "";
            "" != n && (!n.dataInfo || (e = n.dataInfo.data) && (t = new Map(), e.data.game_config && t.set("gameConfig", e.data.game_config), 
            e.data.advertising_config && t.set("adConfig", e.data.advertising_config), e.data.share_card_config && t.set("shareConfig", e.data.share_card_config), 
            e.data.river_diversion_config && t.set("riverConfig", e.data.river_diversion_config), 
            i && i(t)));
        }, 500);
    }, x.BI.getGameExtDataByKey = function(t, n) {
        x.BI.getGameExtConfig(function(e) {
            null != e && n && n(e.get(t));
        });
    };
    x.BI.setRootSceneNode = function(e) {
        var t, n, i, o;
        null == H.RootSceneNode && ("laya" == b.engine ? e && (H.RootSceneNode = e) : (t = cc.director.getWinSize(), 
        n = cc.view.getDesignResolutionSize(), i = t.width > n.width ? n.width / t.width : t.width / n.width, 
        o = new cc.Node(), H.RootSceneNode = o, cc.director.getScene().addChild(o, 99999), 
        H.RootSceneNode && (H.RootSceneNode.setContentSize(cc.size(0, 0)), H.RootSceneNode.setAnchorPoint(0, 0), 
        cc.director.getScheduler().unscheduleAllForTarget(H.RootSceneNode), cc.director.getScheduler().schedule(function(e) {
            H.RootSceneNode.x = cc.Camera.main.node.x * i;
        }, H.RootSceneNode, 0))));
    }, x.BI.getRootSceneNode = function() {
        if (null != H.RootSceneNode) return H.RootSceneNode;
    }, x.BI.ErrorCLickshowWin = function() {
        j.isWin = !0, j.goldEggBarFillValue = 1, j.mistakeCallBack && j.mistakeCallBack(), 
        j.errorClickErrorCloseHideCb && j.errorClickErrorCloseHideCb(), x.BI.createDataReport(4002), 
        x.BI.strongRefreshBanner(function() {
            console.log("强制刷新banner===========");
        });
    }, x.BI.hideErrorClickLayer = function(e) {
        j.isCanWin = !1, j.isWin = !1, H.errorClickContent && ("laya" == b.engine ? H.errorClickContent && (Laya.timer.clearAll(H.errorClickContent), 
        H.errorClickContent.destroy(), H.errorClickErrorArray = []) : (cc.director.getScheduler().unscheduleAllForTarget(H.errorClickContent), 
        H.errorClickContent.destroy(), H.errorClickContent = null, H.errorClickErrorArray = [])), 
        j.goldEggBarFillValue = 0, x.BI.hideErrorBanner(), j.isErrorBanner = !1, Ae.gridAdIsShow ? x.BI.showGridAd() : (x.BI.hideGridAd(), 
        Ae.bannerIsShow ? x.BI.showBanner() : x.BI.hideBanner()), e && e();
    };
    function Re() {
        var e = x.BI.getGameExtValueByKey("banner_mistake_click_verification");
        -1 != e && (j.mistakeIsOpen = Number(e));
        var t = 0, n = wx.getStorageSync(g) ? wx.getStorageSync(g) : "";
        "" != n && (t = Number(n.verify_status));
        var i = x.BI.getBannerIsLoaded();
        if (0 == j.mistakeIsOpen || 1 == t || !i) return 0 == j.mistakeIsOpen && console.log("误点击后台配置开关banner_mistake_click_verification==0 导致误点击关闭"), 
        1 == t && console.log("审核状态为1 导致误点击关闭"), i || console.log("banner广告不可用导致误点击关闭"), 
        !1;
        if (1 != x.BI.getCurrrentMistakeState()) return console.log("未达到白名单条件"), !1;
        var o, r = [ "OPPOPDVM00", "OPPOPBEM00", "OPPOPCHM10", "OPPOPBAM00", "OPPOPCAM10", "OPPOPDBM00", "OPPOOPPO R11", "OPPOPDYM20", "OPPOPBBM00", "OPPOOPPO A83", "OPPOOPPO R11s", "iPhoneiPad Pro (12.9?inch, 2nd generation, WiFi)<iPad7,11>", "OPPOPACM00", "OPPOPBBM30", "OPPOPCAM00", "OPPOPCHM30", "iPhoneiPad (6th generation, WiFi)<iPad7,5>", "OPPOPADM00", "OPPOPAAM00", "OPPOPDKM00", "OPPOPEAM00", "OPPOPDYT20", "OPPOPCPM00", "OPPOOPPO R11t", "OPPOPBCM10", "OPPOPACT00", "OPPOOPPO R11st", "OPPOPEGM00", "iPhoneiPad Air 2 (WiFi)<iPad5,3>", "OPPOPDAM10", "OPPOPBFM00", "OPPOPCEM00", "realmeRMX2200", "iPhoneiPhone 6<iPhone7,2>", "OPPOOPPO A73", "OPPOPBAT00", "OPPOOPPO A83t", "OPPOPBET00", "OPPOOPPO A77", "OPPOPBBT00", "OPPOOPPO R11s Plus", "OPPOPCKM00", "OPPOPCDM10", "OPPOPCGM00" ];
        1 != x.BI.getGameExtValueByKey("debugErrorClickPhoneWhiteList") || -1 != (o = r.indexOf("OPPOPBEM00")) && r.splice(o, 1);
        var a = wx.getSystemInfoSync();
        if (a) {
            var l = a.brand + a.model;
            return console.log("当前机型:" + l), !function(e) {
                for (var t = 0; t < r.length; t++) if (e == r[t]) return !0;
                return !1;
            }(l) || (console.log("未达到机型白名单条件"), !1);
        }
    }
    x.BI.startSetErrorClickColdCd = function() {
        j.cdLimitShowErrorClickState && (j.cdLimitShowErrorClickState = !1);
    };
    var Ie = 0;
    x.BI.getIsOpenErrorClickFunc = function(o) {
        0 == Ie && (Ie = 1, setTimeout(function() {
            Ie = 0;
        }, 2e3), setTimeout(function() {
            var e, t, n, i;
            Re() ? (e = 100, t = x.BI.getGameExtValueByKey("errorClickShowRate"), n = 60, -1 != (i = x.BI.getGameExtValueByKey("banner_mistake_cd")) && (n = Number(i)) <= 0 && (j.cdLimitShowErrorClickState = !0), 
            -1 != t && (e = t), console.log("当前误点击触发概率为" + e + "%"), Math.round(100 * Math.random()) <= e ? j.cdLimitShowErrorClickState ? o && o(!0) : (console.log("误点击触发" + (n - j.cdLimitShowErrorClickNum) + "s冷却中..."), 
            o && o(!1)) : (console.log("误点概率触发失败"), o && o(!1))) : o && o(!1);
        }, 500));
    };
    var Ne = 0;
    x.BI.initErrorClickFunc = function(i, e, o) {
        if (0 == Ne) {
            if (Ne = 1, setTimeout(function() {
                Ne = 0;
            }, 2e3), 0 < H.errorClickErrorArray.length) for (var t = 0; t < H.errorClickErrorArray.length; t++) H.errorClickErrorArray[t] && ("laya" == b.engine ? Laya.timer.clearAll(H.errorClickErrorArray[t]) : cc.director.getScheduler().unscheduleAllForTarget(H.errorClickErrorArray[t]));
            j.isErrorBanner = !0, x.BI.hideErrorBanner(), x.BI.strongHideGridAd(), console.log("创建误点击"), 
            x.BI.createDataReport(4001);
            var n, r, a, l, c = wx.getSystemInfoSync();
            c && (n = new Date().getTime(), wx.setStorageSync(d, n), a = "[" + (r = c.brand + c.model) + "] openErrorClickUI", 
            x.BI.umDataTrackEvent("errClickInfo", {
                device: r,
                operate: a
            })), e && (j.mistakeCallBack = e), "laya" == b.engine ? (l = new Laya.Sprite(), 
            H.errorClickErrorArray.push(l), H.errorClickContent = l, Laya.stage.addChildAt(H.errorClickContent, Laya.stage.numChildren)) : (l = new cc.Node(), 
            H.errorClickContent = l, H.errorClickErrorArray.push(l), cc.director.getScene().addChild(H.errorClickContent)), 
            setTimeout(function() {
                var e, t, n;
                x.BI.hideErrorBanner(), x.BI.strongHideGridAd(), t = x.BI.getGameExtValueByKey("banner_mistake_click_rate_min"), 
                n = x.BI.getGameExtValueByKey("banner_mistake_click_rate_max"), -1 != t && -1 != n && (e = Math.floor(Math.random() * (Number(n) - Number(t) + 1) + Number(t)), 
                j.bannerMistakeClickRate = e), "laya" == b.engine ? (H.errorClickContent && Laya.timer.clearAll(H.errorClickContent), 
                Laya.timer.loop(1e3 / 60, H.errorClickContent, function() {
                    var e;
                    j.isWin || 0 < j.goldEggBarFillValue && (e = j.goldEggBarFillValue * j.goldEggBarFillValue / 60, 
                    j.goldEggBarFillValue -= e), j.keepClickTimeCount += 1 / 60, .5 <= j.keepClickTimeCount && (j.keepClickTimeCount = 0, 
                    j.touchCount = 0), o && o(), j.touchCount > j.bannerMistakeClickRate && (j.touchCount = 0, 
                    j.errorClickErrorCloseShowCb && j.errorClickErrorCloseShowCb(), x.BI.showErrorBanner(), 
                    x.BI.delayDoAction(H.errorClickContent, 2, function() {
                        x.BI.hideErrorBanner();
                    }), j.isCanWin = !0);
                })) : (H.errorClickContent && cc.director.getScheduler().unscheduleAllForTarget(H.errorClickContent), 
                cc.director.getScheduler().schedule(function(e) {
                    var t;
                    j.isWin || 0 < j.goldEggBarFillValue && (t = j.goldEggBarFillValue * j.goldEggBarFillValue / 60, 
                    j.goldEggBarFillValue -= t), j.keepClickTimeCount += e, .5 <= j.keepClickTimeCount && (j.keepClickTimeCount = 0, 
                    j.touchCount = 0), o && o(), j.touchCount > j.bannerMistakeClickRate && (j.touchCount = 0, 
                    j.errorClickErrorCloseShowCb && j.errorClickErrorCloseShowCb(), x.BI.showErrorBanner(), 
                    x.BI.delayDoAction(H.errorClickContent, 2, function() {
                        x.BI.hideErrorBanner();
                    }), j.isCanWin = !0);
                }, H.errorClickContent, 1 / 60)), i && i();
            }, 500);
        }
    }, x.BI.getErrorClickBarValue = function() {
        return j.goldEggBarFillValue;
    }, x.BI.setErrorClickBtnClickCb = function(e, t) {
        function n(e) {
            if (j.isWin) return console.log("关闭误点击"), x.BI.hideErrorClickLayer(j.mistakeCloseBack), 
            0;
            j.keepClickTimeCount = 0, e && e(), j.touchCount += 1, j.isTimeCount && (j.isTimeCount = !1, 
            setTimeout(function() {
                j.touchCount = 0, j.isTimeCount = !0;
            }, 1e3)), console.log("点击按钮"), j.goldEggBarFillValue += .1;
        }
        null != e && null != e ? "laya" == b.engine ? (e.offAll(Laya.Event.MOUSE_DOWN), 
        e.on(Laya.Event.MOUSE_DOWN, this, function() {
            n(t);
        })) : (e.targetOff("touchstart"), e.on("touchstart", function(e) {
            n(t);
        })) : console.log("节点为空，绑定异常");
    };
    function be(e, t) {
        null != e && null != e ? "laya" == b.engine ? (e.offAll(Laya.Event.MOUSE_DOWN), 
        e.on(Laya.Event.MOUSE_DOWN, this, function() {
            x.BI.hideErrorClickLayer(t);
        })) : (e.targetOff("touchstart"), e.on("touchstart", function(e) {
            x.BI.hideErrorClickLayer(t);
        })) : console.log("节点为空，绑定异常");
    }
    x.BI.setErrorClickErrorHanle = function(t, e) {
        var n;
        null != t && null != t ? (n = function(e) {
            "laya" == b.engine ? t.visible = e : t.active = e;
        }, j.errorClickErrorCloseShowCb = function() {
            n(!0);
        }, j.errorClickErrorCloseHideCb = function() {
            n(!1);
        }, n(!1), be(t, e)) : console.log("节点为空，绑定异常");
    }, x.BI.setErrorClickCloseBtnCb = function(e, t) {
        t && (j.mistakeCloseBack = t), be(e, t);
    }, x.BI.showGeneralErrorClickLayer = function(t, n) {
        x.BI.getIsOpenErrorClickFunc(function(e) {
            e ? x.BI.showCommonMistakeErrorLayer(t, n, !1) : (console.log("通用误点显示失败, 执行关闭回调"), 
            n && n());
        });
    };
    var xe = !0;
    x.BI.showCommonMistakeErrorLayer = function(d, u, g) {
        function h(e) {
            Ae.videoSuccTimes++, Ae.videoFailTimes = 0, Pe.isUseStrategy ? (x.BI.changerVideoOrShareSuccess(function() {
                e && e();
            }), Pe.isUseStrategy = !1) : e && e();
        }
        function v(e) {
            Ae.videoFailTimes++, Pe.isUseStrategy && (Ae.videoFailTimes >= Me.adPlayorShareFailCountStep && (x.BI.changerVideoOrShareSuccess(), 
            Ae.videoFailTimes = 0), Pe.isUseStrategy = !1), e && e();
        }
        var f, m;
        if (xe) {
            xe = !1;
            try {
                "laya" == b.engine ? Laya.loader.load("prefab/sdk_prefabs/errorClickLayer/ShakeBoxLayer.json", Laya.Handler.create(this, function(e) {
                    var o = this, t = new Laya.Prefab();
                    t.json = e;
                    var n, r = Laya.Pool.getItemByCreateFun("ShakeBoxLayer", t.create, t);
                    r && r.getChildByName("bg") && (n = b.designSizeWidth / r.getChildByName("bg").width, 
                    r.scaleX *= n, r.scaleY *= n, r.getChildByName("bg").width = b.designSizeWidth, 
                    r.getChildByName("bg").height = Laya.Browser.height, r.getChildByName("bg").alpha = .9, 
                    r.getChildByName("bg").on(Laya.Event.MOUSE_DOWN, r, function(e) {
                        e.stopPropagation();
                    }));
                    function i(e) {
                        if (0 < r._children.length) for (var t = 0; t < r._children.length; t++) r._children[t].x *= e, 
                        r._children[t].scaleX *= e, r._children[t].scaleY *= e;
                    }
                    var a, l;
                    "fixedheight" == Laya.stage.scaleMode ? i(a = Laya.stage.width / b.designSizeWidth) : "fixedwidth" == Laya.stage.scaleMode && (a = Laya.stage.height / b.designSizeHeight, 
                    r.scaleX *= a, r.scaleY *= a, i(1 / a)), GameSdk.BI.initErrorClickFunc(function() {
                        var e = 99999;
                        -1 != x.BI.getGameExtValueByKey("layaGlobalPrfabZorder") && (e = Number(x.BI.getGameExtValueByKey("layaGlobalPrfabZorder"))), 
                        r.zOrder = e;
                        var t = x.BI.getRootSceneNode();
                        t ? t.addChild(r) : Laya.stage.addChildAt(r, Laya.stage.numChildren);
                        var n = r.getChildByName("bar");
                        Laya.loader.load([ "res/sdkRes/bar/goldEggBar.png", "res/sdkRes/bar/goldEggBar$bar.png" ], Laya.Handler.create(o, function() {
                            (l = new Laya.ProgressBar("res/sdkRes/bar/goldEggBar.png")) && (l.value = 0), n.addChild(l);
                        })), GameSdk.BI.setErrorClickBtnClickCb(r.getChildByName("btn"), function() {
                            r.getChildByName("boxNode").rotation = 5;
                        }), r.getChildByName("btn").getChildByName("btn_name").text = "点  击", r.getChildByName("btn").on(Laya.Event.MOUSE_UP, o, function() {
                            r.getChildByName("boxNode").rotation = 0;
                        }), GameSdk.BI.setErrorClickCloseBtnCb(r.getChildByName("btn_close"), function() {
                            g ? v(function() {
                                r.destroy(), u && u();
                            }) : (r.destroy(), u && u());
                        }), r.getChildByName("boxNode").visible = !0, r.getChildByName("boxOpenNode").visible = !1;
                        var i = 0;
                        -1 != x.BI.getGameExtValueByKey("commonMistakeBtnCloseDelayTime") && (i = x.BI.getGameExtValueByKey("commonMistakeBtnCloseDelayTime")), 
                        r.getChildByName("btn_close").visible = !1, x.BI.delayDoAction(r, i, function() {
                            r.getChildByName("btn_close").visible = !0;
                        });
                    }, function() {
                        var e;
                        r && ((e = r.getChildByName("btn") && r.getChildByName("btn").getChildByName("btn_name")) && (e.text = "关  闭"), 
                        r.getChildByName("btn_close") && (r.getChildByName("btn_close").visible = !1), r.getChildByName("boxOpenNode") && (r.getChildByName("boxOpenNode").visible = !0), 
                        r.getChildByName("boxNode") && (r.getChildByName("boxNode").visible = !1)), g ? h(d) : d && d();
                    }, function() {
                        var e = GameSdk.BI.getErrorClickBarValue();
                        l && (l.value = e);
                    });
                })) : (f = 0, m = cc.director.getWinSize(), cc.loader.loadRes("sdk_prefabs/errorClickLayer/shakeBoxLayer", cc.Prefab, function(e, t) {
                    var n, i, o, r, a, l, c, s;
                    e ? console.log("ERROR:" + JSON.stringify(e)) : (n = cc.instantiate(t), i = cc.view.getDesignResolutionSize(), 
                    o = n.getChildByName("bg") && n.getChildByName("bg").width, r = n.getChildByName("bg") && i.width / n.getChildByName("bg").width, 
                    n.scale *= r, n.getChildByName("bg") && (n.getChildByName("bg").width = m.width), 
                    n.getChildByName("bg") && (n.getChildByName("bg").height = m.height), n.getChildByName("bg") && (n.getChildByName("bg").scale = 1.5), 
                    m.height != cc.view.getDesignResolutionSize().height && Math.round(m.width) == cc.view.getDesignResolutionSize().width ? (c = m.height > i.height ? m.height / i.height : 1, 
                    l = (a = n.getChildByName("btn")) && a.getComponent(cc.Widget), 1 != c && l && a && (l.bottom = l.bottom - a.y * (1 - c))) : (c = m.width > i.width ? 1 : m.width / i.width, 
                    n.getChildByName("btn_close") && (n.getChildByName("btn_close").scale *= c), n.getChildByName("btn_close") && (n.getChildByName("btn_close").x *= c), 
                    m.width != i.width || m.height != cc.view.getDesignResolutionSize().height || (s = cc.view.getFrameSize()).width * window.devicePixelRatio > o && s.width / s.height < 750 / 1334 && (n.scale *= 1 / r, 
                    n.getChildByName("btn_close") && (n.getChildByName("btn_close").x *= .85))), GameSdk.BI.initErrorClickFunc(function() {
                        n.x = m.width / 2, n.y = m.height / 2, cc.director.getScene().addChild(n, 99999), 
                        GameSdk.BI.setErrorClickBtnClickCb(n.getChildByName("btn"), function() {
                            var e = n.getChildByName("boxNode");
                            e.stopAllActions(), e.runAction(cc.sequence(cc.rotateTo(.02, -5), cc.rotateTo(.02, 0), cc.rotateTo(.02, 5)));
                        }), n.getChildByName("btn").getChildByName("label").getComponent(cc.Label).string = "点  击", 
                        n.getChildByName("btn").targetOff("touchend"), n.getChildByName("btn").on("touchend", function() {
                            n.getChildByName("boxNode").angle = 0;
                        }), n.getChildByName("boxNode").active = !0, n.getChildByName("boxOpenNode").active = !1;
                        var e = 0;
                        -1 != x.BI.getGameExtValueByKey("commonMistakeBtnCloseDelayTime") && (e = x.BI.getGameExtValueByKey("commonMistakeBtnCloseDelayTime")), 
                        n.getChildByName("btn_close").active = !1, x.BI.delayDoAction(n, e, function() {
                            n.getChildByName("btn_close").active = !0;
                        }), GameSdk.BI.setErrorClickCloseBtnCb(n.getChildByName("btn_close"), function() {
                            g ? v(function() {
                                n.destroy(), u && u();
                            }) : (n.destroy(), u && u());
                        });
                    }, function() {
                        var e;
                        n && ((e = n.getChildByName("btn") && n.getChildByName("btn").getChildByName("label")) && (e.getComponent(cc.Label).string = "关  闭"), 
                        n.getChildByName("boxNode") && (n.getChildByName("boxNode").active = !1), n.getChildByName("btn_close") && (n.getChildByName("btn_close").active = !1), 
                        n.getChildByName("boxOpenNode") && (n.getChildByName("boxOpenNode").active = !0)), 
                        g ? h(d) : d && d();
                    }, function() {
                        f += 1 / 60;
                        var e = GameSdk.BI.getErrorClickBarValue();
                        n.getChildByName("bar_node").getChildByName("bar").getComponent(cc.Sprite).fillRange = e, 
                        .15 < f && (n.getChildByName("boxNode").angle = 0, f = 0);
                    }));
                }));
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                console.log("load commonMistakeClick Error:" + JSON.stringify(e)), xe = !0;
            }
            setTimeout(function() {
                xe = !0;
            }, 2e3);
        }
    }, x.BI.showPopRiver = function(e) {
        if (H.popRiverCallBack = e, H.popRiverReportName = "弹窗", null == H.popRiverContent) {
            x.BI.createPopRiver();
            for (var t = [], n = 0; n < H.popRiverList.length; n++) {
                var i = {
                    river_diversion_id: H.popRiverList[n].id,
                    advertising_name: H.popRiverReportName,
                    operation_type: H.nativeOperateShow
                };
                t.push(i);
            }
            x.BI.adBatchRiverDiversion(t);
        }
    }, x.BI.createPopRiver = function() {
        var e, t, n, u, i, o, r, a, l, c, s, d, g, h, v, f, m, w, p, S, _, y, B, C, L, R, I = this, N = null;
        null == H.popRiverContent && ("laya" == b.engine ? (H.popRiverContent = new Laya.Sprite(), 
        console.log("fixedwidth" != Laya.stage.scaleMode, "iiiiiiiiiiiii"), "noscale" == Laya.stage.scaleMode || "fixedwidth" == Laya.stage.scaleMode || (e = Laya.Browser.width / b.designSizeWidth, 
        H.popRiverContent.scaleX = e, H.popRiverContent.scaleY = e), H.popRiverContent.pos(0, 0)) : (N = cc.director.getWinSize(), 
        t = cc.view.getDesignResolutionSize(), n = N.width > t.width ? 1 : N.width / t.width, 
        H.scaleTimeScale = n, H.popRiverContent = Q(cc.v2(0, 0), cc.size(N.width, N.height))), 
        null == H.RootSceneNode ? "laya" == b.engine ? Laya.stage.addChildAt(H.popRiverContent, Laya.stage.numChildren - 1) : cc.director.getScene().addChild(H.popRiverContent, 1001) : "laya" == b.engine ? H.RootSceneNode.addChild(H.popRiverContent) : H.RootSceneNode.addChild(H.popRiverContent, 1001), 
        u = !1, o = i = 0, r = function() {
            return "laya" == b.engine ? new Laya.Sprite() : new cc.Node();
        }, a = function(c) {
            var t = this;
            if (0 < H.popRiverList.length && H.popRiverList.length <= 6 && c && (c.y = 0), "laya" == b.engine) {
                c.width = Laya.stage.width * w, c.removeChildren();
                var e = 0;
                e = (s = 270 * (Math.floor((H.popRiverList.length - 1) / 3) + 1)) - b.designSizeHeight / 2, 
                console.log(e, "maxHeight"), c.height = s;
                for (var n, i, o, r, a, l = 0; l < H.popRiverList.length; l++) {
                    !function(e) {
                        n = H.popRiverList[e], (i = new Laya.Sprite()).pos(e % 3 * 210, 270 * Math.floor(e / 3)), 
                        K(H.url + "pop_icon.png", i), (o = new Laya.Sprite()).pos(2, 5), K(n.iconUrl, o, 0, 182, 182), 
                        i.addChild(o), r = new Laya.Text(), r.color = "#FFFFFF", r.fontSize = 26, i.addChild(r), 
                        r.align = "center", r.width = 188, r.pos(0, 200), r.text = n.showName, a = H.popRiverReportName || "", 
                        i.offAll(Laya.Event.MOUSE_DOWN), i.on(Laya.Event.MOUSE_DOWN, t, function() {
                            x.BI.adRiverDiversion(H.popRiverList[e].id, a, H.nativeOperateClick), J(H.popRiverList[e].id, H.popRiverList[e].appId, H.popRiverList[e].showName, a, null, null, H.popRiverList[e].pathInfo), 
                            u = !1;
                        }), c.addChild(i);
                    }(l);
                }
            } else {
                c.removeAllChildren(), c.scaleX = H.scaleTimeScale, c.scaleY = H.scaleTimeScale, 
                c.setPosition(50 * H.scaleTimeScale, 0);
                var s, e = 0;
                e = ((s = 270 * (Math.floor((H.popRiverList.length - 1) / 3) + 1) + 110) - N.height / 2) * H.scaleTimeScale, 
                c.anchorY = 1;
                var d = cc.view.getDesignResolutionSize();
                c.setContentSize(cc.size(d.width, s)), ee(Z(), H.url + "pop_icon.png", function() {
                    for (var t, n, i, o, r, a, l, e = 0; e < H.popRiverList.length; e++) {
                        !function(e) {
                            t = H.popRiverList[e], (n = Z()).setPosition(e % 3 * 220 - 270, 270 * -Math.floor(e / 3) - 200), 
                            ee(n, H.url + "pop_icon.png"), (i = Z()).setPosition(-2, 22), (o = $(26)).setPosition(-5, -100), 
                            r = new cc.Color(255, 255, 255), o.color = r, n.addChild(o), a = n.children[0], 
                            te(i, t.iconUrl, cc.size(182, 182)), n.addChild(i), a && (a.getComponent(cc.Label).string = t.showName), 
                            l = H.popRiverReportName || "", n.targetOff("touchend"), n.on("touchend", function() {
                                x.BI.adRiverDiversion(H.popRiverList[e].id, l, H.nativeOperateClick), J(H.popRiverList[e].id, H.popRiverList[e].appId, H.popRiverList[e].showName, l, null, null, H.popRiverList[e].pathInfo), 
                                u = !1;
                            }), c.addChild(n);
                        }(e);
                    }
                });
            }
            return e;
        }, "laya" == b.engine ? (d = new Laya.Sprite(), K(H.url + "whiteBg.png", d, 0, Laya.stage.width, Laya.stage.height), 
        d.alpha = .6, H.popRiverContent.addChild(d), d.on(Laya.Event.MOUSE_DOWN, d, function(e) {
            e.stopPropagation();
        }), (v = new Laya.Sprite()).width = Laya.stage.width, v.height = Laya.stage.height, 
        v.scaleX = .9, v.scaleY = .9, v.pos(30, 0), H.popRiverContent.addChild(v), f = new Laya.Sprite(), 
        K(H.url + "pop_title.png", f, 0, null, null, function() {
            f.pos(b.designSizeWidth / 2 - f.width / 2, 220), v.addChild(f);
        }), m = new Laya.Sprite(), K(H.url + "pop_btn.png", m, 0, null, null, function() {
            m.pos(-30, 100), v.addChild(m), m.on(Laya.Event.MOUSE_DOWN, I, function() {
                H.popRiverContent && Laya.timer.clearAll(H.popRiverContent), H.popRiverContent.destroy(), 
                H.popRiverContent = null, H.popRiverCallBack && H.popRiverCallBack();
            });
        }), w = 674 / 750, (p = new Laya.Sprite()).pos(0, 350), K(H.url + "whiteBg.png", p, 0, b.designSizeWidth, b.designSizeHeight / 2), 
        v.addChild(p), (S = new Laya.Sprite()).pos(15, 350), S.width = Laya.stage.width, 
        S.height = b.designSizeHeight / 2, l = new Laya.Sprite(), S && l.graphics.drawRect(5, 0, S.width, S.height, "#ffff00"), 
        l.pos(0, 0), S.mask = l, _ = r(), y = a(_), S.addChild(_), B = function() {
            0 < _.y && (_.y = 0), _.y < -y && (_.y = -y);
        }, c = 0, _.on(Laya.Event.MOUSE_DOWN, _, function() {
            c = Laya.stage.mouseY, u = !0, i = 0, o = new Date().getTime(), console.log("开始触摸");
        }), _.on(Laya.Event.MOUSE_MOVE, _, function() {
            H.popRiverList && 0 < H.popRiverList.length && H.popRiverList.length <= 6 || setTimeout(function() {
                _.y += Laya.stage.mouseY - c, c = Laya.stage.mouseY, B();
            }, 1e3 / 60);
        }), s = function() {
            var e = Laya.stage.mouseY - c, t = new Date().getTime();
            0 == (i = e / (t - o)) && (u = !1);
        }, _.on(Laya.Event.MOUSE_OUT, _, function(e) {
            s();
        }), _.on(Laya.Event.MOUSE_UP, _, function(e) {
            s();
        }), v.addChild(S), L = !1, R = 1, Laya.timer.loop(1e3 / 60, H.popRiverContent, function() {
            if ((!H.popRiverContent || H.popRiverContent.active) && (H.popRiverRefresh && (y = a(_), 
            H.popRiverRefresh = !1), !(H.popRiverList && 0 < H.popRiverList.length && H.popRiverList.length <= 6))) if (u) {
                if (0 == i) return;
                var e = i / 60 * 500;
                _.y = _.y + e, B(), 0 != _.y && _.y != -y || (u = !1), 0 < i ? (i -= 1 / 60) < 0 && (i = 0, 
                u = !1) : 0 < (i += 1 / 60) && (i = 0, u = !1);
            } else L ? (_.y = _.y + R, 0 < _.y && (L = !1)) : (_.y = _.y - R, _.y < -y && (L = !0));
        })) : ((d = Z()).setPosition(N.width / 2, N.height / 2), d.getComponent(cc.Sprite).sizeMode = "SLICED", 
        d.setContentSize(cc.size(N.width, N.height)), d.opacity = 150, d.color = new cc.Color(0, 0, 0), 
        H.popRiverContent.addChild(d), ee(d, H.url + "whiteBg.png"), d.on("touchstart", function(e) {
            e.stopPropagation();
        }), g = cc.view.getDesignResolutionSize(), null == H.scaleTimeScale && (h = N.width > g.width ? g.width / N.width : N.width / g.width, 
        H.scaleTimeScale = h), v = Q(cc.v2(0, 0), cc.size(N.width, N.height)), H.popRiverContent.addChild(v), 
        (f = Z()).scaleX = H.scaleTimeScale, f.scaleY = H.scaleTimeScale, f.setPosition(N.width / 2, N.height / 2 + 420 * H.scaleTimeScale), 
        v.addChild(f), ee(f, H.url + "pop_title.png"), (m = Z()).scaleX = H.scaleTimeScale, 
        m.scaleY = H.scaleTimeScale, m.setPosition(50, N.height - 150), v.addChild(m), m.targetOff("touchend"), 
        m.on("touchend", function() {
            console.log("点击返回按钮按钮"), cc.director.getScheduler().unscheduleAllForTarget(H.popRiverContent), 
            H.popRiverContent.removeFromParent(), H.popRiverContent = null, H.popRiverCallBack && H.popRiverCallBack();
        }), ee(m, H.url + "pop_btn.png"), w = 674 / 750, (p = Z()).setPosition(N.width / 2, N.height / 2), 
        p.getComponent(cc.Sprite).sizeMode = "SLICED", p.setContentSize(cc.size(N.width * w, N.height / 2 * H.scaleTimeScale)), 
        v.addChild(p), ee(p, H.url + "whiteBg.png"), (S = new cc.Node()).setContentSize(cc.size(N.width * w, N.height / 2 * H.scaleTimeScale)), 
        S.anchorY = 1, S.addComponent(cc.Mask), S.setPosition(N.width / 2, N.height / 2 + 332 * H.scaleTimeScale), 
        _ = r(), y = a(_), S.addChild(_), B = function() {
            _.y < 0 && (_.y = 0), _.y > y && (_.y = y);
        }, _.on("touchstart", function() {
            u = !0, i = 0, o = new Date().getTime(), console.log("开始触摸");
        }), _.on("touchmove", function(e) {
            var t;
            H.popRiverList && 0 < H.popRiverList.length && H.popRiverList.length <= 6 || (t = e.getDelta().y, 
            _.y += t, B());
        }), C = function(e) {
            var t = e.getLocation().y - e.getStartLocation().y, n = new Date().getTime();
            0 == (i = t / (n - o)) && (u = !1);
        }, _.on("touchend", function(e) {
            C(e);
        }), _.on("touchcancel", function(e) {
            C(e);
        }), v.addChild(S), L = !1, R = 2, cc.director.getScheduler().schedule(function(e) {
            if (H.popRiverRefresh && (y = a(_), H.popRiverRefresh = !1), (!H.popRiverContent || H.popRiverContent.active) && !(H.popRiverList && 0 < H.popRiverList.length && H.popRiverList.length <= 6)) if (u) {
                if (0 == i) return;
                var t = i * e * 500;
                _.y = _.y + t, B(), 0 != _.y && _.y != y || (u = !1), 0 < i ? (i -= e) < 0 && (i = 0, 
                u = !1) : 0 < (i += e) && (i = 0, u = !1);
            } else L ? (_.y = _.y - R, _.y <= 0 && (L = !1)) : (_.y = _.y + R, _.y > y && (L = !0));
        }, H.popRiverContent, 1 / 60)));
    }, x.BI.adjustWechatGameExitBtnPos = function(e) {
        var t = cc.director.getWinSize(), n = 750 < t.width ? 750 / t.width : t.width / 750;
        H.scaleTimeScale = n;
        var i = wx.getMenuButtonBoundingClientRect(), o = wx.getSystemInfoSync(), r = e || cc.v2(0, 0);
        H.wechatGameExitPos = cc.v2(i.left / o.screenWidth * t.width + i.width * H.scaleTimeScale + r.x * H.scaleTimeScale, t.height - i.bottom / o.screenHeight * t.height - 1.5 * i.height + r.y), 
        null != H.wechatGameExitBtn && H.wechatGameExitBtn.setPosition(H.wechatGameExitPos);
    }, x.BI.adjustWechatGameExitBtnPosByLayaPos = function(e, t) {
        var n = wx.getMenuButtonBoundingClientRect(), i = wx.getSystemInfoSync(), o = n.left / i.screenWidth * Laya.stage.width, r = n.bottom / i.screenHeight * Laya.stage.height + .5 * n.height;
        H.wechatGameExitPosXByLaya = null != e ? e + o : o, H.wechatGameExitPosYByLaya = null != t ? t + r : r, 
        H.wechatGameExitBtn.pos(H.wechatGameExitPosXByLaya, H.wechatGameExitPosYByLaya);
    }, x.BI.createWechatGameExitBtn = function(e) {
        var t, n, i, o, r, a = wx.getMenuButtonBoundingClientRect(), l = wx.getSystemInfoSync();
        "laya" == b.engine ? (H.wechatGameExitBtn = new Laya.Sprite(), H.wechatGameExitBtn.visible = !1, 
        t = 0, t = 1 == H.scaleTimeScale ? .84 : .7 < 1 / H.scaleTimeScale ? 1 / H.scaleTimeScale : .7, 
        "fixedwidth" == Laya.stage.scaleMode || "noscale" == Laya.stage.scaleMode ? (H.wechatGameExitBtn.scaleX = t, 
        H.wechatGameExitBtn.scaleY = t) : (H.wechatGameExitBtn.scaleX = .84 * H.scaleTimeScale, 
        H.wechatGameExitBtn.scaleY = .84 * H.scaleTimeScale), H.wechatGameExitBtn.pos(a.left / l.screenWidth * Laya.stage.width, a.bottom / l.screenHeight * Laya.stage.height + .5 * a.height), 
        null != H.wechatGameExitPosXByLaya && null != H.wechatGameExitPosYByLaya && H.wechatGameExitBtn.pos(H.wechatGameExitPosXByLaya, H.wechatGameExitPosYByLaya), 
        null == H.RootSceneNode ? Laya.stage.addChildAt(H.wechatGameExitBtn, Laya.stage.numChildren) : H.RootSceneNode.addChild(H.wechatGameExitBtn), 
        K(H.url + "wechat_exit.png", H.wechatGameExitBtn), H.wechatGameExitBtn.offAll(Laya.Event.MOUSE_DOWN), 
        H.wechatGameExitBtn.on(Laya.Event.MOUSE_DOWN, this, function() {
            console.log("点击继续按钮 - Laya"), x.BI.createWechatGameExitLayer();
        })) : (n = cc.director.getWinSize(), i = cc.view.getDesignResolutionSize(), null == H.scaleTimeScale && (o = n.width > i.width ? i.width / n.width : n.width / i.width, 
        H.scaleTimeScale = o), H.wechatGameExitBtn = Z(), H.wechatGameExitBtn.active = !1, 
        H.wechatGameExitBtn.scaleX = .86 * H.scaleTimeScale, H.wechatGameExitBtn.scaleY = .86 * H.scaleTimeScale, 
        r = cc.v2(a.left / l.screenWidth * n.width + a.width * H.scaleTimeScale, n.height - a.bottom / l.screenHeight * n.height - 1.5 * a.height), 
        null != H.wechatGameExitPos && (r = H.wechatGameExitPos), H.wechatGameExitBtn.setPosition(r), 
        null == H.RootSceneNode ? cc.director.getScene().addChild(H.wechatGameExitBtn, 9999) : H.RootSceneNode.addChild(H.wechatGameExitBtn, 9999), 
        ee(H.wechatGameExitBtn, H.url + "wechat_exit.png"), H.wechatGameExitBtn.targetOff("touchend"), 
        H.wechatGameExitBtn.on("touchend", function() {
            console.log("点击继续按钮"), x.BI.createWechatGameExitLayer();
        }));
        setTimeout(function() {
            var e = x.BI.getGameExtValueByKey("wechat_exit_component_verification"), t = -1;
            -1 != e && (t = Number(e));
            var n = 0, i = wx.getStorageSync(g) ? wx.getStorageSync(g) : "";
            "" != i && (n = Number(i.verify_status)), 0 == t || 1 == n ? (0 == t && console.log("微信退出组件后台配置开关wechat_exit_component_verification==0 导致微信退出组件关闭"), 
            1 == n && console.log("审核状态为1 导致微信退出组件关闭"), H.wechatGameExitBtnCallBack && H.wechatGameExitBtnCallBack()) : 1 == x.BI.getCurrrentMistakeState() ? "laya" == b.engine ? H.wechatGameExitBtn.visible = !0 : H.wechatGameExitBtn.active = !0 : (console.log("未达到微信退出组件开启条件"), 
            H.wechatGameExitBtnCallBack && H.wechatGameExitBtnCallBack());
        }, 500);
    }, x.BI.setWechatGameExitCallBack = function(e, t) {
        H.wechatGameExitBtnCallBack = e, H.wechatGameExitBtnCloseBack = t;
    };
    function ke() {
        var e, t = this;
        if (H.wechatGameExitBtn && H.wechatGameExitBtn.visible && (H.wechatGameExitBtn.visible = !1), 
        null == H.wechatGameExitContent) {
            H.wechatGameExitBtnCallBack && H.wechatGameExitBtnCallBack(), H.wechatGameExitContent = new Laya.Sprite(), 
            "noscale" == Laya.stage.scaleMode || "fixedwidth" == Laya.stage.scaleMode || (e = Laya.Browser.width / b.designSizeWidth, 
            H.wechatGameExitContent.scaleX = e, H.wechatGameExitContent.scaleY = e), null == H.RootSceneNode ? Laya.stage.addChildAt(H.wechatGameExitContent, Laya.stage.numChildren) : H.RootSceneNode.addChild(H.wechatGameExitContent);
            var n = new Laya.Sprite();
            n.width = Laya.stage.width, n.height = Laya.stage.height, H.wechatGameExitContent.addChild(n), 
            K(H.url + "wechat.png", n), n.on(Laya.Event.MOUSE_DOWN, n, function(e) {
                e.stopPropagation();
            });
            var i = new Laya.Sprite();
            i.scaleX = .85, i.scaleY = .85, i.pos(25, 150), H.wechatGameExitContent.addChild(i), 
            K(H.url + "wechat_edit.png", i);
            var o = new Laya.Sprite();
            o.scaleX = .85, o.scaleY = .85, o.pos(25, 70), H.wechatGameExitContent.addChild(o), 
            K(H.url + "back_wechat.png", o, 0, null, null, function() {
                o.offAll(Laya.Event.MOUSE_DOWN), o.on(Laya.Event.MOUSE_DOWN, t, function() {
                    H.wechatGameExitContent && Laya.timer.clearAll(H.wechatGameExitContent), H.wechatGameExitContent.destroy(), 
                    H.wechatGameExitContent = null, H.wechatGameExitBtn && !H.wechatGameExitBtn.visible && (H.wechatGameExitBtn.visible = !0), 
                    H.wechatGameExitBtnCloseBack && H.wechatGameExitBtnCloseBack();
                });
            });
            var a = new Laya.Text();
            a.pos(25, 280);
            a.color = "#FFFFFF", a.fontSize = 26, H.wechatGameExitContent.addChild(a), a.text = "最近使用";
            for (var r = [], l = 0; l < H.wechatGameExitList.length; l++) l < 8 && r.push(H.wechatGameExitList[l]);
            var c = function(e) {
                var t = new Laya.Sprite();
                t.width = 200, t.height = 200;
                var n = new Laya.Sprite();
                n.width = 100, n.height = 100;
                var i = new Laya.Sprite();
                n && i.graphics.drawCircle(50, 50, 50, "#ff0000"), n.mask = i, t.addChild(n);
                var o = new Laya.Sprite(), r = new Laya.Text();
                r.pos(0, 125);
                return r.color = "#FFFFFF", r.fontSize = 22, a.align = "center", a.width = 100, 
                t.addChild(r), r.text = e.showName, K(e.iconUrl, o, 0, 100, 100), n.addChild(o), 
                n.offAll(Laya.Event.MOUSE_DOWN), n.on(Laya.Event.MOUSE_DOWN, this, function() {
                    x.BI.adRiverDiversion(e.id, "伪装", H.nativeOperateClick), J(e.id, e.appId, e.showName, "伪装", null, null, e.pathInfo);
                }), t;
            };
            if (0 < r.length) for (var s = 0; s < r.length; s++) {
                var d = c(r[s]);
                d.pos(s % 4 * 160 + 25, 200 * Math.floor(s / 4) + 350), H.wechatGameExitContent.addChild(d);
            }
            var u = [];
            if (8 < H.wechatGameExitList.length) for (var g = 8; g < H.wechatGameExitList.length; g++) u.push(H.wechatGameExitList[g]);
            var h = new Laya.Text();
            h.pos(25, 750);
            h.color = "#FFFFFF", h.fontSize = 26, h.text = "我的小程序", H.wechatGameExitContent.addChild(h);
            var v = new Laya.Sprite();
            v.pos(0, 0), v.width = Laya.stage.width;
            var f = 200 * (Math.floor((u.length - 1) / 4) + 1) + 100, m = f - 480;
            v.height = f;
            var w = 0, p = new Laya.Sprite();
            p.pos(0, 800), p.width = Laya.stage.width, p.height = 480;
            var S = new Laya.Sprite();
            p && S.graphics.drawRect(5, 0, p.width, p.height, "#ffff00"), S.pos(0, 0), p.mask = S;
            var _ = 0;
            v.on(Laya.Event.MOUSE_DOWN, this, function() {
                _ = Laya.stage.mouseY, w = new Date().getTime(), console.log("开始触摸");
            }), v.on(Laya.Event.MOUSE_MOVE, this, function(e) {
                u && 0 < u.length && u.length <= 8 || setTimeout(function() {
                    v.y += Laya.stage.mouseY - _, _ = Laya.stage.mouseY, 0 < v.y && (v.y = 0), v.y < -m && (v.y = -m);
                }, 1e3 / 60);
            });
            var y = function() {
                var e = Laya.stage.mouseY - _, t = new Date().getTime();
                0 == e / (t - w) && 0;
            };
            v.on(Laya.Event.MOUSE_OUT, v, function(e) {
                y();
            }), v.on(Laya.Event.MOUSE_UP, v, function(e) {
                y();
            }), p.addChild(v);
            for (var B = 0; B < u.length; B++) {
                var C = c(u[B]);
                C.pos(B % 4 * 160 + 25, 200 * Math.floor(B / 4)), v.addChild(C);
            }
            H.wechatGameExitContent.addChild(p);
        } else console.log("当前WechatGameExit界面存在");
    }
    x.BI.createWechatGameExitLayer = function() {
        if ("laya" != b.engine) {
            var B = cc.director.getWinSize();
            if (H.wechatGameExitBtn && H.wechatGameExitBtn.active && (H.wechatGameExitBtn.active = !1), 
            null == H.wechatGameExitContent) {
                H.wechatGameExitBtnCallBack && H.wechatGameExitBtnCallBack(), H.wechatGameExitContent = Q(cc.v2(0, 0), cc.size(B.width, B.height)), 
                null == H.RootSceneNode ? cc.director.getScene().addChild(H.wechatGameExitContent, 1005) : H.RootSceneNode.addChild(H.wechatGameExitContent, 1005), 
                H.wechatGameExitContent.active = !1;
                var e = Z();
                e.setPosition(B.width / 2, B.height / 2), H.wechatGameExitContent.addChild(e), e.scaleX = H.scaleTimeScale, 
                e.scaleY = H.scaleTimeScale, e.on("touchstart", function(e) {
                    e.stopPropagation();
                });
                var t = Z();
                t.setPosition(B.width / 2, B.height / 2 + 450), t.scaleX = .9 * H.scaleTimeScale, 
                t.scaleY = .9 * H.scaleTimeScale, H.wechatGameExitContent.addChild(t);
                var n = Z();
                n.setPosition(150 * H.scaleTimeScale, B.height - 100), n.scaleX = H.scaleTimeScale, 
                n.scaleY = H.scaleTimeScale, H.wechatGameExitContent.addChild(n), ee(e, H.url + "wechat.png", function() {
                    ee(t, H.url + "wechat_edit.png"), ee(n, H.url + "back_wechat.png"), H.wechatGameExitContent.active = !0;
                }), n.targetOff("touchend"), n.on("touchend", function() {
                    cc.director.getScheduler().unscheduleAllForTarget(H.wechatGameExitContent), H.wechatGameExitContent.removeFromParent(), 
                    H.wechatGameExitContent = null, H.wechatGameExitBtn && !H.wechatGameExitBtn.active && (H.wechatGameExitBtn.active = !0), 
                    H.wechatGameExitBtnCloseBack && H.wechatGameExitBtnCloseBack();
                });
                var i = $(26);
                i.setPosition(120 * H.scaleTimeScale, B.height / 2 + 320);
                var o = new cc.Color(255, 255, 255);
                i.color = o, i.getComponent(cc.Label).string = "最近使用", H.wechatGameExitContent.addChild(i);
                for (var C = [], r = 0; r < H.wechatGameExitList.length; r++) r < 8 && C.push(H.wechatGameExitList[r]);
                ne(Z(), H.url + "icon_board.png", function() {
                    if (0 < C.length) for (var e = 0; e < C.length; e++) {
                        var t = function(e) {
                            var t = new cc.Node();
                            t.setContentSize(cc.size(200, 200));
                            var n = Z();
                            n.setPosition(0, 0);
                            var i = new cc.Node();
                            i.scaleX = .35 * H.scaleTimeScale, i.scaleY = .35 * H.scaleTimeScale, i.setContentSize(cc.size(270, 270));
                            var o = i.addComponent(cc.Mask);
                            ne(i, H.url + "icon_board.png"), o.type = cc.Mask.Type.IMAGE_STENCIL, o.alphaThresHold = .5, 
                            t.addChild(i);
                            var r = $(23);
                            r.setPosition(0, -90);
                            var a = new cc.Color(255, 255, 255);
                            return r.color = a, t.addChild(r), te(n, e.iconUrl, cc.size(270, 270), function() {
                                r.getComponent(cc.Label).string = e.showName || "", i.addChild(n);
                            }), i.targetOff("touchend"), i.on("touchend", function() {
                                x.BI.adRiverDiversion(e.id, "伪装", H.nativeOperateClick), J(e.id, e.appId, e.showName, "伪装", null, null, e.pathInfo);
                            }), t;
                        }(C[e]);
                        t.setPosition((e % 4 * 180 + 110) * H.scaleTimeScale, 200 * Math.floor(e / 4) + 700), 
                        H.wechatGameExitContent.addChild(t);
                    }
                    var n = [];
                    if (8 < H.wechatGameExitList.length) for (var i = 8; i < H.wechatGameExitList.length; i++) n.push(H.wechatGameExitList[i]);
                    var o = $(26);
                    o.setPosition(120 * H.scaleTimeScale, B.height / 2 - 150);
                    var r = new cc.Color(255, 255, 255);
                    o.color = r, o.getComponent(cc.Label).string = "我的小程序", H.wechatGameExitContent.addChild(o);
                    var a = new cc.Node();
                    a.scaleX = H.scaleTimeScale, a.scaleY = H.scaleTimeScale, a.setPosition(50, 0);
                    function l() {
                        a.y < 0 && (a.y = 0), a.y > s && (a.y = s);
                    }
                    var c = 200 * (Math.floor((n.length - 1) / 4) + 1) + 120, s = (c - 480) * H.scaleTimeScale, d = !1, u = 0, g = 0, h = new cc.Node();
                    h.setContentSize(cc.size(750, 480 * H.scaleTimeScale)), h.anchorY = 1;
                    var v = h.addComponent(cc.Mask);
                    h.setPosition(B.width / 2, 500), a.on("touchstart", function() {
                        d = !0, u = 0, g = new Date().getTime(), console.log("开始触摸");
                    }), a.on("touchmove", function(e) {
                        var t;
                        n && 0 < n.length && n.length <= 8 || (t = e.getDelta().y, a.y += t, l());
                    });
                    function f(e) {
                        var t = e.getLocation().y - e.getStartLocation().y, n = new Date().getTime();
                        0 == (u = t / (n - g)) && (d = !1);
                    }
                    a.on("touchend", function(e) {
                        f(e);
                    }), a.on("touchcancel", function(e) {
                        f(e);
                    }), a.anchorY = 1, a.setContentSize(cc.size(750, c)), h.addChild(a);
                    for (var m, w, p, S, _, y = 0; y < n.length; y++) {
                        !function(e) {
                            m = n[e], (w = Z()).setPosition(e % 4 * 180, 200 * -Math.floor(e / 4)), w.setContentSize(cc.size(270, 270)), 
                            p = Z(), (S = new cc.Node()).setContentSize(cc.size(270, 270)), S.scaleX = .35, 
                            S.scaleY = .35, v = S.addComponent(cc.Mask), ne(S, H.url + "icon_board.png", function() {
                                v.type = cc.Mask.Type.IMAGE_STENCIL;
                            }), v.alphaThresHold = .5, S.addChild(p), S.setPosition(-310, -100), w.addChild(S), 
                            (o = $(23 / H.scaleTimeScale)).setPosition(-310, -190), r = new cc.Color(255, 255, 255), 
                            o.color = r, w.addChild(o), _ = w.children[1], te(p, m.iconUrl, cc.size(270, 270)), 
                            _ && (_.getComponent(cc.Label).string = m.showName), S.targetOff("touchend"), S.on("touchend", function() {
                                x.BI.adRiverDiversion(n[e].id, "伪装", H.nativeOperateClick), J(n[e].id, n[e].appId, n[e].showName, "伪装", null, null, n[e].pathInfo), 
                                d = !1;
                            }), a.addChild(w);
                        }(y);
                    }
                    H.wechatGameExitContent.addChild(h);
                    cc.director.getScheduler().schedule(function(e) {
                        if (!(n && 0 < n.length && n.length <= 8) && (!H.wechatGameExitContent || H.wechatGameExitContent.active) && d) {
                            if (0 == u) return;
                            var t = u * e * 500;
                            a.y = a.y + t, l(), 0 != a.y && a.y != s || (d = !1), 0 < u ? (u -= e) < 0 && (u = 0, 
                            d = !1) : 0 < (u += e) && (u = 0, d = !1);
                        }
                    }, H.wechatGameExitContent, 1 / 60);
                });
            } else console.log("当前WechatGameExit界面存在");
        } else ke();
    }, x.BI.showTopRiver = function(e) {
        H.topRiverBIReportName = "顶部", H.topRiverItem && (H.topRiverItem.active = !0, H.topRiverItem.stopAllActions(), 
        H.topRiverItem.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(3, -20), cc.rotateTo(3, 20)))));
    }, x.BI.hideTopRiver = function() {
        H.topRiverItem && (H.topRiverItem.active = !1, H.topRiverItem.stopAllActions());
    }, x.BI.createNavigate = function(e, t, n, i, o) {
        console.log("===================initNavigateConfig==========================="), 
        x.BI.initNavigateConfigData();
        var r, a, l = cc.director.getWinSize();
        console.log(l, "winSize"), H.fullRiverIsHasNotbanner = e, H.topRiverItemPos = t, 
        H.chouTiIsLeft = n, i && (r = cc.v2(0, 0), r = H.chouTiIsLeft ? cc.v2(50, i) : cc.v2(695, i), 
        H.chouTiBtnPos = r), o && (a = cc.v2(0, 0), a = H.chouTiIsLeft ? cc.v2(300, o) : cc.v2(430, o), 
        H.chouTiBoardPos = a);
        var c = 750 < l.width ? 750 / l.width : l.width / 750;
        H.scaleTimeScale = c;
    };
    function Ee(e, t, n, i) {
        var o;
        t < e && (e = (o = [ t, e ])[0], t = o[1]);
        var r = t - e, a = e + Math.random() * r;
        return n ? 0 < i ? Math.ceil(a) : i < 0 ? Math.floor(a) : Math.round(a) : a;
    }
    function Te(e) {
        var t = JSON.parse(e);
        if (t && (Me.adPlayorShareFailCountStep = t.fail_count_step, Me.adPlayorShareShowCountStep = t.show_count_step, 
        Me.adPlaySteps = t.steps), Me.adVaildList = [], Me.adPlaySteps && 0 < Me.adPlaySteps.length) for (var n = 0; n < Me.adPlaySteps.length; n++) if (1 == Me.adPlaySteps[n].type) for (var i = 0; i < Me.adPlaySteps[n].count; i++) Me.adVaildList.push(1); else for (var o = 0; o < Me.adPlaySteps[n].count; o++) Me.adVaildList.push(0);
        console.log(Me.adVaildList, "wxBIAdConfig.adVaildList");
    }
    function Fe() {
        var e = We.wxShareConfig && We.wxShareConfig.length, t = Ee(0, e, !0, -1), n = We.wxShareConfig[t];
        return {
            imageUrl: n && n.cardIcon || "",
            title: n && n.cardDesc || "",
            cardId: n && n.id || 0
        };
    }
    function Oe(e) {
        if (e && e.gameExtConfig) {
            var t = JSON.parse(e.gameExtConfig);
            if (console.log(t), t && 0 < t.length) for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i && "reward_step_cfg_1" == i.ext_key || (i && "stage_tips_reverse" == i.ext_key || i && "reward_mark" == i.ext_key ? Me.adStageReverse = Number(i.ext_value) : i && "share_succ_time_step" == i.ext_key ? Me.adShareSuccTimeStep = Number(i.ext_value) : i && "share_succ_time_rate" == i.ext_key ? Me.adShareSuccTimeRate = Number(i.ext_value) : i && "share_succ_count_rate" == i.ext_key && (Me.adShareSuccCountRate = Number(i.ext_value)));
            }
            x.BI.refreshUserShareOrVideoConfig();
        }
    }
    var Pe = {
        bannerAdId: b.bannerAdPosId,
        insertAdId: b.insertAdPosId,
        rdVidepAdId: b.videoAdPosId,
        longVideoAdId: b.videoAdPosId,
        shortVideoAdId: b.videoAdPosId,
        gridAdId: b.gridAdPosId,
        isIn7Days: !0,
        wxAdsMutliAdSwitch: !1,
        isUseStrategy: !1,
        initConfigSuccess: !1,
        bannerWidthAdjustNum: 1
    }, Ae = {
        InsertAdNode: null,
        insertAdIsLoaded: !1,
        videoAdNode: null,
        bannerAdNode: null,
        bannerIsLoaded: !1,
        bannerIsShow: !1,
        gridAdNode: null,
        gridWhiteBg: null,
        gridAdIsLoaded: !1,
        gridAdIsShow: !1,
        videoIsLoaded: !1,
        videoSuccTimes: 0,
        videoFailTimes: 0,
        bannerAdInitState: null,
        gridAdInitState: null,
        insertAdInitState: null
    }, We = {
        wxShareConfig: null,
        shareSuccess: !1,
        shareDataCue: 0,
        shareFailTimes: 0,
        shareTimes: 1,
        shareSuccessTotalTimes: 0,
        videoOrShareCnt: 0
    }, Me = {
        adPlayorShareFailCountStep: 3,
        adPlayorShareShowCountStep: 100,
        adPlaySteps: [ {
            type: 1,
            count: 2
        }, {
            type: 2,
            count: 1
        }, {
            type: 1,
            count: 3
        }, {
            type: 2,
            count: 1
        } ],
        adVaildList: [ 1, 1, 0, 1, 1, 1, 0 ],
        adGetRewardCnt: 0,
        adStageReverse: 1,
        adShareSuccTimeStep: 5,
        adShareSuccTimeRate: 35,
        adShareSuccCountRate: 20
    };
    x.BI.initAdConfig = function() {
        var e, t, n, i, o;
        Pe.initConfigSuccess ? console.log("已初始化广告配置") : ("" != (e = wx.getStorageSync(g) ? wx.getStorageSync(g) : "") ? (!e.dataInfo || (t = e.dataInfo.data) && (t.data.advertising_config, 
        t.data.user_time && 7 <= Math.floor(t.data.user_time) / 86400 && (Pe.isIn7Days = !1), 
        (n = t.data.share_card_config) && (o = n, We.wxShareConfig = [], o.forEach(function(e) {
            We.wxShareConfig.push(e);
        })), (i = t.data.game_config) && Oe(i), x.BI.showShareMenu(), console.log(We.wxShareConfig, "wxShare.wxShareConfig"), 
        console.log(Pe, "广告的配置加载"), Pe.initConfigSuccess = !0), x.eventListerObj.listeners.updateAdConfig && x.eventListerObj.removeListener("updateAdConfig")) : (console.log("初始化广告配置失败"), 
        Pe.initConfigSuccess = !1, x.eventListerObj.removeListener("updateAdConfig"), x.eventListerObj.addListener("updateAdConfig", function() {
            x.BI.initAdConfig();
        })), We.videoOrShareCnt = Number(wx.getStorageSync(l)), console.log(We.videoOrShareCnt, "wxShare.videoOrShareCnt"));
    };
    function De(e) {
        return 1 == function(e, t) {
            for (var n = e.split("."), i = t.split("."), o = 0; o < n.length; o++) {
                var r = Number(n[o]), a = Number(i[o]);
                if (a < r) return 1;
                if (r < a) return -1;
            }
            return 0;
        }(wx.getSystemInfoSync().SDKVersion, e);
    }
    function Ge() {
        return "wx" == b.login_type && De("2.0.4");
    }
    x.BI.showShareMenu = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0], t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null, n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, i = 2 == E ? [ "shareAppMessage", "shareTimeline" ] : [ "shareAppMessage" ];
        wx.showShareMenu({
            withShareTicket: e,
            menus: i,
            success: function(e) {
                return t && t(e);
            },
            fail: function() {
                return n && n(res);
            }
        });
        var o = Fe(), r = o.imageUrl, a = o.title;
        o.cardId;
        De("2.11.3") && wx.onShareTimeline && wx.onShareTimeline(function() {
            return console.log("zqy_sdk监听右上角点击朋友圈"), {
                title: a,
                imageUrl: r,
                query: ""
            };
        });
        var l = "&zqy_share_id=" + k.jq_uid + "&share_open_id=" + x.open_id;
        wx.onShareAppMessage(function() {
            return console.log("zqy_sdk监听右上角点击分享"), {
                title: a,
                imageUrl: r,
                query: l
            };
        });
    };
    var Ue = !0;
    x.BI.showShareImageMenu = function(e) {
        var t, n;
        if (De("2.14.3")) try {
            Ue && (Ue = !1, n = (t = Fe()).imageUrl, t.title, t.cardId, e && "" != e && (n = e), 
            console.log("pic url:" + n), wx.downloadFile({
                url: n,
                success: function(e) {
                    wx.showShareImageMenu && wx.showShareImageMenu({
                        path: e.tempFilePath,
                        success: function() {},
                        fail: function() {}
                    });
                }
            }), setTimeout(function() {
                Ue = !0;
            }, 2e3));
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            Ue = !0;
        }
    };
    var ze = !0;
    x.BI.doVideoOrShareAction = function(e, t, n, i) {
        try {
            ze ? (ze = !1, Pe.isUseStrategy = !0, 0 == x.BI.getCurrentIsVideoOrShareState() ? x.BI.shareInGame(!0, e, t) : x.BI.showVideoAd(e, t, function() {
                Ae.videoFailTimes++, Pe.isUseStrategy && (Ae.videoFailTimes >= Me.adPlayorShareFailCountStep && (x.BI.changerVideoOrShareSuccess(), 
                Ae.videoFailTimes = 0), Pe.isUseStrategy = !1), i && i();
            }, n), setTimeout(function() {
                ze = !0;
            }, 2e3)) : (wx.showToast({
                title: "点击频率过快，请稍后再试",
                icon: "none"
            }), i && i());
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.log(e, " error"), ze = !0;
        }
    }, x.BI.shareGame = function(e, t) {
        x.BI.shareInGame(!1, e, t);
    }, x.BI.directShareGame = function() {
        var e = Fe(), t = e.imageUrl, n = e.title, i = (e.cardId, {
            title: n,
            imageUrl: t,
            query: "&zqy_share_id=" + k.jq_uid + "&share_open_id=" + x.open_id
        });
        "key" != b.umkey && (i = wx.uma.trackShare(i)), wx.shareAppMessage(i);
    }, x.BI.shareInGame = function(n, i, o) {
        var e = Fe(), t = e.imageUrl, r = e.title;
        e.cardId;
        We.shareDataCue = Date.now();
        function a(e) {
            var t;
            We.shareFailTimes++, n && We.shareFailTimes >= Me.adPlayorShareFailCountStep && (x.BI.changerVideoOrShareSuccess(), 
            We.shareFailTimes, We.shareFailTimes = 0), We.shareSuccess = !1, We.shareFailTimes, 
            We.shareTimes++, console.log("分享失败"), (t = [ "分享失败，请分享到群", "分享失败，请分享到不同群", "分享失败,请分享到大于30人的群", "该群已分享过，请换个群" ][Ee(0, 3, !0, -1)] || "分享失败，请分享到群") && wx.showModal({
                title: "温馨提示",
                showCancel: !1,
                confirmText: "好的",
                cancelColor: "#A8A5A5",
                content: t
            }), e && e();
        }
        var l;
        H.shareFunc = function() {
            var e, t = (Date.now() - We.shareDataCue) / 1e3;
            x.BI.createDataReport(R), t < 2 ? a(o) : (e = t / Me.adShareSuccTimeStep * Me.adShareSuccTimeRate + We.shareTimes * Me.adShareSuccCountRate, 
            Math.random() < e / 100 ? (We.shareTimes = 1, We.shareFailTimes = 0, We.shareSuccess = !0, 
            We.shareSuccessTotalTimes++, console.log("分享成功"), We.shareTimes, We.shareSuccessTotalTimes, 
            x.BI.createDataReport(I), n ? x.BI.changerVideoOrShareSuccess(function() {
                i && i(), We.shareSuccess = !1;
            }) : (i && i(), We.shareSuccess = !1)) : a(o));
        }, H.isSharing || (l = {
            title: r,
            imageUrl: t,
            query: "&zqy_share_id=" + k.jq_uid + "&share_open_id=" + x.open_id
        }, "key" != b.umkey && (l = wx.uma.trackShare(l)), wx.shareAppMessage(l)), H.isSharing = !0;
    }, x.BI.changerVideoOrShareSuccess = function(e) {
        var t = We.videoOrShareCnt;
        t += 1, wx.setStorageSync(l, t), e && e();
    }, x.BI.getCurrentIsVideoOrShareState = function() {
        return We.videoOrShareCnt = Number(wx.getStorageSync(l)), /* console.log("视频策略第几次:", We.videoOrShareCnt),  */
        We.videoOrShareCnt <= 0 ? Me.adVaildList[0] : (We.videoOrShareCnt >= Me.adVaildList.length && (We.videoOrShareCnt = 0), 
        Me.adVaildList[We.videoOrShareCnt]);
    }, x.BI.initAd = function() {
        // H.adIsInit ? console.log("广告已初始化") : (x.BI.initAdConfig(), x.BI.initInsertAds(), 
        // x.BI.initVideoAd(), x.BI.preLoadVideo(), x.BI.createBannerAd(), x.BI.createGridAd(), 
        // H.adIsInit = !0);
    }, x.BI.initInsertAds = function() {
        // var e = Pe.insertAdId;
        // if ("" != e && null != e) {
        //     if (Ge()) {
        //         try {
        //             Ae.InsertAdNode = wx.createInterstitialAd({
        //                 adUnitId: e
        //             });
        //         } catch (e) {
        //             e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        //             return void console.log("插屏广告创建失败 msg:" + JSON.stringify(e));
        //         }
        //         Ae.InsertAdNode.onLoad(function() {
        //             Ae.insertAdIsLoaded = !0, console.log("插屏广告加载成功");
        //         });
        //         Ae.InsertAdNode.onError(function(e) {
        //             Ae.insertAdIsLoaded = !1, console.log("插屏广告加载出错，错误信息：" + JSON.stringify(e));
        //         });
        //     }
        // } else console.log("插屏广告id为空");
    }, x.BI.getInsertAdIsLoaded = function() {
        return Ae.insertAdIsLoaded;
    }, x.BI.showInsertAds = function(e, t, n, i) {
        // console.log("尝试拉去插屏广告"), Ae.InsertAdNode || x.BI.initInsertAds(), Ae.InsertAdNode.offClose(), 
        // e && Ae.InsertAdNode.onClose(function() {
        //     e && e(t), Ae.insertAdIsLoaded = !1, Ae.InsertAdNode = null;
        // }), Ae.InsertAdNode.load().then(function() {
        //     Ae.InsertAdNode.show().then(function() {
        //         n && n(), console.log("插屏展示成功");
        //     }).catch(function(e) {
        //         console.log("插屏广告显示失败：" + JSON.stringify(e)), i && i();
        //     });
        // }).catch(function(e) {
        //     i && i();
        // });
    }, x.BI.initVideoAd = function() {
        // if ("" != Pe.rdVidepAdId && null != Pe.rdVidepAdId) {
        //     var e, t;
        //     if (!Ge()) return console.log("微信版本过低，请升级版本"), void (Ae.videoIsLoaded = !1);
        //     try {
        //         De("2.8.0") && Pe.wxAdsMutliAdSwitch ? console.log("使用多例模式") : Ae.videoAdNode || (Ae.videoAdNode = (e = Pe.rdVidepAdId, 
        //         t = !1, wx.createRewardedVideoAd({
        //             adUnitId: e,
        //             multion: t
        //         }))), Ae.videoIsLoaded = !0;
        //     } catch (e) {
        //         e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        //         return console.log("视频广告创建失败 msg:" + JSON.stringify(e)), void (Ae.videoIsLoaded = !1);
        //     }
        //     Ae.videoAdNode && Ae.videoAdNode.onError(function(e) {
        //         console.log("视频广告加载出错，错误信息：" + JSON.stringify(e)), Ae.videoAdErrorCallBack && Ae.videoAdErrorCallBack();
        //     });
        // } else console.log("视频广告id为空");
    }, x.BI.preLoadVideo = function() {
        // if ("" != Pe.rdVidepAdId && null != Pe.rdVidepAdId) {
        //     console.log("预加载视频广告"), Ae.videoAdNode || x.BI.initVideoAd();
        //     Ae.videoAdNode && Ae.videoAdNode.offClose(), Ae.videoAdNode && Ae.videoAdNode.onClose(function(e) {
        //         e && e.isEnded || null == e ? (Ae.videoSuccTimes++, Ae.videoFailTimes = 0, Ae.videoSuccTimes, 
        //         console.log("视频播放完毕"), Pe.isUseStrategy ? (x.BI.changerVideoOrShareSuccess(function() {
        //             Ae.videoAdSuccessCb && Ae.videoAdSuccessCb();
        //         }), Pe.isUseStrategy = !1) : Ae.videoAdSuccessCb && Ae.videoAdSuccessCb(), x.BI.createDataReport(3002)) : (Ae.videoFailTimes++, 
        //         Pe.isUseStrategy && (Ae.videoFailTimes >= Me.adPlayorShareFailCountStep && (x.BI.changerVideoOrShareSuccess(), 
        //         Ae.videoFailTimes, Ae.videoFailTimes = 0), Pe.isUseStrategy = !1), console.log("视频未播放完毕"), 
        //         Ae.videoAdFailCb && Ae.videoAdFailCb()), x.BI.preLoadVideo();
        //     }), Ae.videoAdProloadSucc = !1;
        //     try {
        //         Ae.videoAdNode && Ae.videoAdNode.load(), Ae.videoAdNode && Ae.videoAdNode.load().then(function() {
        //             Ae.videoAdProloadSucc = !0, console.log("视频预加载成功");
        //         }).catch(function(e) {
        //             Ae.videoAdProloadSucc = !1;
        //         });
        //     } catch (e) {
        //         e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        //         console.log("视频预加载失败，错误信息：" + JSON.stringify(e));
        //     }
        // }
    };
    var qe = !0;
    x.BI.showVideoAd = function(e, t, n, i) {
        // if (qe) {
        //     qe = !1;
        //     try {
        //         var o, r, a;
        //         Ae.videoAdProloadSucc ? (n && (Ae.videoAdErrorCallBack = n), e && (Ae.videoAdSuccessCb = e), 
        //         t && (Ae.videoAdFailCb = t), o = 0, -1 != (r = x.BI.getGameExtValueByKey("videoShowErrorClickRate")) && (o = r), 
        //         console.log("当前视频误点击触发概率为" + o + "%"), a = Math.round(100 * Math.random()), 0 < o && a <= o ? Re() ? x.BI.showCommonMistakeErrorLayer(Ae.videoAdSuccessCb, null, !0) : (x.BI.createDataReport(N), 
        //         i && i(), Ae.videoAdNode.show().catch(function(e) {
        //             console.log("视频广告显示失败：" + JSON.stringify(e));
        //         })) : (console.log("视频误点击触发失败"), x.BI.createDataReport(N), i && i(), Ae.videoAdNode.show().catch(function(e) {
        //             console.log("视频广告显示失败：" + JSON.stringify(e));
        //         }))) : (wx.showToast({
        //             title: "广告还未准备好，请稍后再试",
        //             icon: "none"
        //         }), console.log("视频广告未预加载成功,再加载一次"), n && n(), x.BI.preLoadVideo());
        //     } catch (e) {
        //         e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        //         qe = !0;
        //     }
        //     setTimeout(function() {
        //         qe = !0;
        //     }, 2e3);
        // } else wx.showToast({
        //     title: "点击频率过快，请稍后再试",
        //     icon: "none"
        // }), n && n();
    }, x.BI.setBannerWidthAjustFactor = function(e) {
        null != e && (Pe.bannerWidthAdjustNum = e);
    }, x.BI.createBannerAd = function() {
        // if ("" != Pe.bannerAdId && null != Pe.bannerAdId) {
        //     if (Ge()) {
        //         var e = wx.getSystemInfoSync(), t = e.screenHeight, n = e.screenWidth, i = n, o = {
        //             left: (n - (i = n * Pe.bannerWidthAdjustNum < 300 ? 300 : n * Pe.bannerWidthAdjustNum)) / 2,
        //             top: t - 86 - 10,
        //             width: i,
        //             height: 86
        //         };
        //         Ae.bannerAdNode && (Ae.bannerIsShow = !1, Ae.bannerAdNode.hide(), Ae.bannerAdNode.destroy(), 
        //         Ae.bannerAdInitState = null);
        //         var r = 45, a = x.BI.getGameExtValueByKey("banner_reset_time");
        //         -1 != a && (r = Number(a)), console.log("创建banner成功,banner自动刷新时间:" + r);
        //         try {
        //             Ae.bannerAdNode = wx.createBannerAd({
        //                 adUnitId: Pe.bannerAdId,
        //                 adIntervals: r,
        //                 style: o
        //             });
        //         } catch (e) {
        //             e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        //             console.log("创建banner失败:" + JSON.stringify(e));
        //         }
        //         Ae.bannerAdNode && Ae.bannerAdNode.onError(function(e) {
        //             Ae.bannerIsLoaded = !1, Ae.bannerAdInitState = Ae.bannerAdNode, x.eventListerObj.emit("getBannerIsLoaded", !1), 
        //             e && 5019 == e.errCode && (console.log("5019 banner广告异常处理，重新创建banner"), Ae.bannerAdNode.offError(null), 
        //             x.BI.createBannerAd()), console.log("banner广告拉取失败，错误信息：" + JSON.stringify(e));
        //         }), Ae.bannerAdNode && Ae.bannerAdNode.onResize(function() {
        //             b.isLandScape || e && e.model, Ae.bannerAdNode.style && (Ae.bannerAdNode.style.top = wx.getSystemInfoSync().screenHeight - Ae.bannerAdNode.style.realHeight + .1), 
        //             Ae.bannerAdNode.style && (Ae.bannerAdNode.style.left = Ae.bannerAdNode.style.left);
        //         }), Ae.bannerAdNode && Ae.bannerAdNode && Ae.bannerAdNode.onLoad(function() {
        //             console.log("banner广告加载成功"), Ae.bannerIsLoaded = !0, Ae.bannerAdInitState = Ae.bannerAdNode, 
        //             x.eventListerObj.emit("getBannerIsLoaded", !0);
        //         });
        //     }
        // } else console.log("banner广告id为空");
    }, x.BI.getBannerRation = function() {
        var e = wx.getSystemInfoSync(), t = e.screenHeight;
        e.screenWidth;
        return 140 / t;
    }, x.BI.strongRefreshBanner = function(e) {
        // x.BI.destoryBanner(), setTimeout(function() {
        //     x.BI.createBannerAd(), e && e();
        // }, 500);
    }, x.BI.destoryBanner = function() {
        // Ae.bannerAdNode && (Ae.bannerAdNode.destroy(), Ae.bannerAdNode = null, x.eventListerObj.removeListener("getBannerIsLoaded"), 
        // Ae.bannerAdInitState);
    }, x.BI.getBannerIsLoaded = function() {
        return Ae.bannerIsLoaded;
    }, x.BI.getBannerLoadCb = function(t, n) {
        null == Ae.bannerAdInitState ? (x.eventListerObj.removeListener("getBannerIsLoaded"), 
        x.eventListerObj.addListener("getBannerIsLoaded", function(e) {
            x.eventListerObj.removeListener("getBannerIsLoaded"), 1 == e ? t && t() : n && n();
        })) : Ae.bannerIsLoaded ? t && t() : n && n();
    }, x.BI.showBanner = function() {
        // H.newFullScreenActive || (j.isErrorBanner ? console.log("误点击打开暂时接管banenr显示") : (Ae.bannerAdNode || x.BI.createBannerAd(), 
        // Ae.bannerIsShow = !0, Ae.bannerAdNode && Ae.bannerAdNode.show().then(function() {
        //     console.log("显示banner");
        // }).catch(function(e) {
        //     return e.errMsg && "banner-ad has been closed" == e.errMsg && (Ae.bannerAdNode = null), 
        //     console.log("banner展示出错:" + JSON.stringify(e));
        // })));
    }, x.BI.hideBanner = function() {
        // console.log("banner隐藏"), Ae.bannerAdNode ? j.isErrorBanner ? console.log("误点击打开暂时接管banenr显示") : (Ae.bannerIsShow = !1, 
        // Ae.bannerAdNode && Ae.bannerAdNode.hide()) : console.log("banner为空,没必要隐藏");
    }, x.BI.showErrorBanner = function(e) {
        // Ae.bannerAdNode || x.BI.createBannerAd(), Ae.bannerAdNode.show().then(function() {
        //     console.log("显示banner"), e && e();
        // }).catch(function(e) {
        //     return e.errMsg && "banner-ad has been closed" == e.errMsg && (Ae.bannerAdNode = null), 
        //     console.log("banner展示出错:" + JSON.stringify(e));
        // });
    }, x.BI.hideErrorBanner = function() {
        //console.log("banner隐藏"), Ae.bannerAdNode ? Ae.bannerAdNode.hide() : console.log("banner为空,没必要隐藏");
    }, x.BI.createNativeAd = function(e, t, n, i, o, r, a, l) {
        // if (De("2.11.1")) {
        //     var c = 35;
        //     null != t && null != t && (c = t);
        //     var s = x.BI.getGameExtValueByKey("customAdRefreshTime");
        //     -1 != s && (c = s), console.log("原生模板广告刷新时间：" + c + "s");
        //     var d = wx.createCustomAd({
        //         adUnitId: e,
        //         adIntervals: c,
        //         style: {
        //             left: n,
        //             top: i
        //         }
        //     });
        //     return d && d.onError(function(e) {
        //         e.errCode && 2001 == e.errCode || (console.log("微信原生模板广告加载失败" + JSON.stringify(e)), 
        //         a && a(d, e));
        //     }), d && d.onLoad(function() {
        //         console.log("微信原生模板广告加载成功"), r && r(d);
        //     }), d && d.onClose(function() {
        //         o && o();
        //     }), l || d && d.show().then(function() {
        //         console.log("原生模板广告展示完成");
        //     }), d;
        // }
        // console.log("当前微信版本号过低不支持原生模板广告");
    }, x.BI.createNoRefreshNativeAd = function(e, t, n, i, o, r) {
        // if (De("2.11.1")) {
        //     var a = wx.createCustomAd({
        //         adUnitId: e,
        //         style: {
        //             left: t,
        //             top: n
        //         }
        //     });
        //     return a && a.onLoad(function() {
        //         console.log("微信原生模板广告加载成功"), o && o(a);
        //     }), a && a.onError(function(e) {
        //         e.errCode && 2001 == e.errCode || (console.log("微信原生模板广告加载失败" + JSON.stringify(e)), 
        //         r && r(a, e));
        //     }), a && a.onClose(function() {
        //         i && i();
        //     }), a;
        // }
        // console.log("当前微信版本号过低不支持原生模板广告");
    };
    function Ve(u) {
        if (null == Ae.gridWhiteBg) if ("laya" == b.engine) {
            Ae.gridWhiteBg = new Laya.Sprite();
            var t = b.designSizeWidth / 750 * 260;
            Ae.gridWhiteBg.pos(0, b.designSizeHeight - t), K(H.url + "whiteBg.png", Ae.gridWhiteBg, 0, Laya.Browser.width, t), 
            Laya.stage && Laya.stage.addChildAt(Ae.gridWhiteBg, Laya.stage.numChildren), Ae.gridWhiteBg.zOrder = 99999, 
            Ae.gridWhiteBg.visible = !1, Ae.gridWhiteBg.on(Laya.Event.MOUSE_DOWN, Ae.gridWhiteBg, function(e) {
                e.stopPropagation();
            });
            var e = function() {
                var e = Laya.stage.width / b.designSizeWidth;
                Ae.gridWhiteBg.scaleY = e, 750 < Laya.Browser.clientWidth * window.devicePixelRatio && Laya.Browser.clientWidth / Laya.Browser.clientHeight < 750 / 1334 && (Ae.gridWhiteBg.y = Ae.gridWhiteBg.y + t * (1 - Ae.gridWhiteBg.scaleY));
            }, n = function() {
                Laya.stage.height, b.designSizeHeight;
                Ae.gridWhiteBg.y = Ae.gridWhiteBg.y + (Laya.stage.height - b.designSizeHeight);
            };
            "fixedheight" == Laya.stage.scaleMode ? e() : "fixedwidth" == Laya.stage.scaleMode ? n() : "fixedauto" == Laya.stage.scaleMode ? (Laya.Browser.clientWidth / Laya.Browser.clientHeight < b.designSizeWidth / b.designSizeHeight ? n : e)() : "full" == Laya.stage.scaleMode ? (Ae.gridWhiteBg.scaleY = Laya.stage.width / b.designSizeWidth, 
            Ae.gridWhiteBg.y = Ae.gridWhiteBg.y + (Laya.stage.height - b.designSizeHeight) + t * (1 - Ae.gridWhiteBg.scaleY)) : 750 < Laya.Browser.clientWidth * window.devicePixelRatio && Laya.Browser.clientWidth / Laya.Browser.clientHeight < 750 / 1334 && (Ae.gridWhiteBg.scaleY = .825, 
            Ae.gridWhiteBg.y = Ae.gridWhiteBg.y + t * (1 - Ae.gridWhiteBg.scaleY));
        } else {
            try {
                !function s() {
                    var d = setInterval(function() {
                        try {
                            if (null == cc.director.getScene()) clearInterval(d), s(); else {
                                clearInterval(d);
                                try {
                                    Ae.gridWhiteBg = Z(), Ae.gridWhiteBg && (Ae.gridWhiteBg.anchorX = 0), Ae.gridWhiteBg && (Ae.gridWhiteBg.anchorY = 0), 
                                    Ae.gridWhiteBg && Ae.gridWhiteBg.setPosition(0, 0), Ae.gridWhiteBg && (Ae.gridWhiteBg.getComponent(cc.Sprite).sizeMode = "SLICED"), 
                                    Ae.gridWhiteBg.active = !1;
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    console.log("未知错误");
                                }
                                var e, t, i = H.url + "whiteBg.png";
                                H.resMap.has(i) ? (e = H.resMap.get(i), t = new cc.SpriteFrame(e), Ae.gridWhiteBg.getComponent(cc.Sprite).spriteFrame = t, 
                                u && u()) : cc.loader.load(i, function(e, t) {
                                    if (e) ee(Ae.gridWhiteBg, i, u); else {
                                        var n = new cc.SpriteFrame(t);
                                        if (n.uv && 0 < n.uv.length) {
                                            H.resMap.set(i, t);
                                            try {
                                                Ae.gridWhiteBg.getComponent(cc.Sprite) && (Ae.gridWhiteBg.getComponent(cc.Sprite).spriteFrame = n), 
                                                u && u();
                                            } catch (e) {
                                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                                Ae.gridWhiteBg.destroy(), Ae.gridWhiteBg = null, Ve(u);
                                            }
                                        } else setTimeout(function() {
                                            ee(Ae.gridWhiteBg, i, u);
                                        }, 1e3 / 60);
                                    }
                                }), Ae.gridWhiteBg.on("touchstart", function(e) {
                                    e.stopPropagation();
                                }), cc.director.getScene().addChild(Ae.gridWhiteBg, 99999);
                                var n = cc.view.getDesignResolutionSize(), o = 750 < n.width ? 1 : n.width / 750, r = n.width;
                                Ae.gridWhiteBg.setContentSize(2 * r, 260 * o);
                                var a, l, c = cc.director.getWinSize();
                                c.height != n.height && Math.round(c.width) == n.width || (a = c.width > n.width ? 1 : c.width / n.width, 
                                Ae.gridWhiteBg.scaleY = a, Math.round(c.width) != cc.view.getDesignResolutionSize().width || c.height != cc.view.getDesignResolutionSize().height || 750 < (l = cc.view.getFrameSize()).width * window.devicePixelRatio && l.width / l.height < 750 / 1334 && (Ae.gridWhiteBg.y = -130));
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            clearInterval(d);
                        }
                    }, 500);
                }();
            } catch (e) {}
        }
    }
    x.BI.createGridAd = function() {
        // if ("" != Pe.gridAdId && null != Pe.gridAdId) {
        //     var e = !0;
        //     if (b.isUseNewGrid ? (e = !1, console.log("使用新版格子广告，使用原生模板广告的多格子替换格子广告")) : (e = !0, 
        //     console.log("使用旧版格子广告")), De("2.9.2")) {
        //         var t = 35, n = x.BI.getGameExtValueByKey("gridAdRefreshTime");
        //         -1 != n && (t = n), Ae.gridAdNode && (Ae.gridAdIsShow = !1, Ae.gridAdNode.hide(), 
        //         Ae.gridAdNode.destroy(), Ae.gridAdInitState = null);
        //         var i = wx.getSystemInfoSync().screenWidth, o = 360 < i ? 360 : i, r = 130;
        //         e && (o = i, r = 86);
        //         var a = {
        //             left: (i - o) / 2,
        //             top: wx.getSystemInfoSync().screenHeight - r,
        //             width: o,
        //             height: r
        //         };
        //         try {
        //             e ? Ae.gridAdNode = wx.createGridAd({
        //                 adUnitId: Pe.gridAdId,
        //                 adIntervals: t,
        //                 adTheme: "white",
        //                 style: a,
        //                 gridCount: 5
        //             }) : (Ae.gridAdNode = wx.createCustomAd({
        //                 adUnitId: Pe.gridAdId,
        //                 adIntervals: t,
        //                 style: a
        //             }), Ve());
        //         } catch (e) {
        //             e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        //             console.log("error:" + JSON.stringify(e));
        //         }
        //         Ae.gridAdNode && Ae.gridAdNode.onError(function(e) {
        //             var t = x.BI.getGameExtValueByKey("gridAdErrorCode2001Close"), n = e.errCode && 2001 == e.errCode;
        //             1 == t && (n = !1), n || (Ae.gridAdIsLoaded = !1, Ae.gridAdInitState = Ae.gridAdNode, 
        //             x.eventListerObj.emit("getGridIsLoaded", !1), console.log("格子广告拉取失败，错误信息：" + JSON.stringify(e)), 
        //             e.errMsg && "the advertisement has shown" == e.errMsg || ("laya" == b.engine ? Ae.gridWhiteBg && (Ae.gridWhiteBg.visible = !1) : Ae.gridWhiteBg && (Ae.gridWhiteBg.active = !1)));
        //         }), Ae.gridAdNode && Ae.gridAdNode.onResize && Ae.gridAdNode && Ae.gridAdNode.onResize(function() {
        //             Ae.gridAdNode.style.top = wx.getSystemInfoSync().screenHeight - Ae.gridAdNode.style.realHeight + .1, 
        //             Ae.gridAdNode.style.left = Ae.gridAdNode.style.left + .1;
        //         }), Ae.gridAdNode && Ae.gridAdNode.onClose && Ae.gridAdNode && Ae.gridAdNode.onClose(function() {
        //             Ae.gridWhiteBg && (Ae.gridWhiteBg.destroy(), Ae.gridWhiteBg = null), Ae.gridAdNode = null, 
        //             Ae.gridAdIsShow = !1, Ae.gridAdInitState = null;
        //         }), Ae.gridAdNode && Ae.gridAdNode.onLoad(function() {
        //             console.log("格子广告加载成功"), Ae.gridAdIsLoaded = !0, Ae.gridAdInitState = Ae.gridAdNode, 
        //             x.eventListerObj.emit("getGridIsLoaded", !0), j.isErrorBanner && (console.log("误点击打开暂时接管格子广告显示"), 
        //             x.BI.strongHideGridAd());
        //         });
        //     } else console.log("当前微信版本号过低不支持格子广告");
        // } else console.log("格子广告id为空");
    }, x.BI.showGridAd = function() {
        // j.isErrorBanner ? console.log("误点击打开暂时接管格子广告显示") : (Ae.gridAdNode || x.BI.createGridAd(), 
        // Ae.gridAdIsShow = !0, Ae.gridAdNode && Ae.gridAdNode.show().then(function() {
        //     console.log("显示格子广告"), "laya" != b.engine ? cc.isValid(Ae.gridWhiteBg) ? Ae.gridWhiteBg && (Ae.gridWhiteBg.active = !0) : (Ae.gridWhiteBg.destroy(), 
        //     Ae.gridWhiteBg = null, Ve(function() {
        //         Ae.gridWhiteBg && (Ae.gridWhiteBg.active = !0);
        //     })) : Ae.gridWhiteBg && (Ae.gridWhiteBg.visible = !0);
        // }).catch(function(e) {
        //     return console.log("格子广告展示出错:" + JSON.stringify(e));
        // }));
    }, x.BI.strongShowGridAd = function() {
        // Ae.gridAdNode || x.BI.createGridAd(), Ae.gridAdNode && Ae.gridAdNode.show().then(function() {
        //     console.log("显示格子广告"), "laya" != b.engine ? cc.isValid(Ae.gridWhiteBg) ? Ae.gridWhiteBg && (Ae.gridWhiteBg.active = !0) : (Ae.gridWhiteBg.destroy(), 
        //     Ae.gridWhiteBg = null, Ve(function() {
        //         Ae.gridWhiteBg && (Ae.gridWhiteBg.active = !0);
        //     })) : Ae.gridWhiteBg && (Ae.gridWhiteBg.visible = !0);
        // }).catch(function(e) {
        //     return console.log("格子广告展示出错:" + JSON.stringify(e));
        // });
    }, x.BI.hideGridAd = function() {
        // Ae.gridAdNode ? j.isErrorBanner ? console.log("误点击打开暂时接管格子广告") : (Ae.gridAdIsShow = !1, 
        // Ae.gridAdNode.hide(), "laya" == b.engine ? Ae.gridWhiteBg && (Ae.gridWhiteBg.visible = !1) : Ae.gridWhiteBg && (Ae.gridWhiteBg.active = !1)) : console.log("格子广告为空没必要关闭");
    }, x.BI.strongHideGridAd = function() {
        //Ae.gridAdNode ? (Ae.gridAdNode.hide(), "laya" == b.engine ? Ae.gridWhiteBg && (Ae.gridWhiteBg.visible = !1) : Ae.gridWhiteBg && (Ae.gridWhiteBg.active = !1)) : console.log("格子广告为空没必要关闭");
    }, x.BI.destoryGridAd = function() {
        // Ae.gridAdNode && (Ae.gridAdNode.destroy(), Ae.gridAdNode = null, Ae.gridAdInitState = null, 
        // x.eventListerObj.removeListener("getGridIsLoaded")), Ae.gridWhiteBg && (Ae.gridWhiteBg.destroy(), 
        // Ae.gridWhiteBg = null);
    };
    var Xe = {
        timeFun1: null,
        timeFun2: null,
        isHide: !(x.BI.strongRefreshGridAd = function(e) {
            x.BI.destoryGridAd(), setTimeout(function() {
                x.BI.createGridAd(), e && e();
            }, 500);
        })
    };
    x.BI.alternationShowBannerOrGrid = function() {
        var i = 30, e = 30, t = x.BI.getGameExtValueByKey("alternation_show_banner_cd"), n = x.BI.getGameExtValueByKey("alternation_show_grid_cd");
        -1 != t && (i = Number(t)), -1 != n && (e = Number(n));
        var o = !0, r = x.BI.getGameExtValueByKey("alternation_show_switch");
        -1 != r && (o = 1 == Number(r));
        var a = !1, l = x.BI.getGameExtValueByKey("alternation_show_need_destory");
        -1 != l && (a = 1 == Number(l));
        function c(e, t) {
            e ? (x.BI.destoryGridAd(), x.BI.strongRefreshBanner(function() {
                Xe.isHide || (x.BI.getBannerIsLoaded() ? x.BI.showBanner() : (console.log("banner广告加载失败"), 
                x.BI.showGridAd())), t && t();
            })) : (x.BI.hideGridAd(), x.BI.getBannerIsLoaded() ? x.BI.showBanner() : (console.log("banner广告加载失败"), 
            x.BI.showGridAd()), t && t());
        }
        function s(t) {
            var n = "";
            "banner" == t ? (n = "grid", o ? console.log("[交替显示banner和格子广告]:" + i + "s后格子广告若加载成功交替显格子广告，加载失败显示banner广告") : console.log("[优先展示banner，其次格子填充]:" + i + "s后banner广告若加载成功交替显示banner广告，加载失败显示格子广告"), 
            Xe.timeFun1 = setTimeout(function() {
                var e;
                clearTimeout(Xe.timeFun1), o ? (e = function() {
                    s(n);
                }, a ? (x.BI.destoryBanner(), x.BI.strongRefreshGridAd(function() {
                    Xe.isHide || (x.BI.getGridAdIsLoaded() ? x.BI.showGridAd() : (console.log("格子广告加载失败"), 
                    x.BI.showBanner())), e && e();
                })) : (x.BI.hideBanner(), x.BI.getGridAdIsLoaded() ? x.BI.showGridAd() : (console.log("格子广告加载失败"), 
                x.BI.showBanner()), e && e())) : c(a, function() {
                    s(t);
                });
            }, 1e3 * i)) : (n = "banner", o ? console.log("[交替显示banner和格子广告]:" + e + "s后banner广告若加载成功交替显示banner广告，加载失败显示格子广告") : console.log("[优先展示banner，其次格子填充]:" + e + "s后banner广告若加载成功交替显示banner广告，加载失败显示格子广告"), 
            Xe.timeFun2 = setTimeout(function() {
                clearTimeout(Xe.timeFun2), c(a, o ? function() {
                    s(n);
                } : function() {
                    s(t);
                });
            }, 1e3 * e));
        }
        var d, u;
        Xe.timeFun1 && clearTimeout(Xe.timeFun1), Xe.timeFun2 && clearTimeout(Xe.timeFun2), 
        Xe.isHide = !1, d = function() {
            s("banner");
        }, u = function() {
            var e, t;
            e = function() {
                s("grid");
            }, t = function() {
                console.log("[交替显示banner和格子广告]:banner广告和格子广告均加载失败," + i + "s后重试"), setTimeout(function() {
                    x.BI.alternationShowBannerOrGrid();
                }, 1e3 * i);
            }, x.BI.getGridAdIsLoaded() ? (x.BI.showGridAd(), e && e()) : t && t();
        }, x.BI.getBannerIsLoaded() ? (x.BI.hideGridAd(), x.BI.showBanner(), d && d()) : u && u();
    }, x.BI.hideBannerOrGrid = function() {
        Xe.isHide = !0, x.BI.hideBanner(), x.BI.hideGridAd();
    }, x.BI.getGridAdIsLoaded = function() {
        return Ae.gridAdIsLoaded;
    }, x.BI.getGridLoadCb = function(t, n) {
        null == Ae.gridAdInitState ? (x.eventListerObj.removeListener("getGridIsLoaded"), 
        x.eventListerObj.addListener("getGridIsLoaded", function(e) {
            x.eventListerObj.removeListener("getGridIsLoaded"), 1 == e ? t && t() : n && n();
        })) : Ae.gridAdIsLoaded ? t && t() : n && n();
    };
    function Ye(e) {
        function o(e) {
            console.log("重置点击和展示数据");
            var t = {
                showList: [],
                clickList: []
            };
            if (e && 0 < e.length) for (var n = 0; n < e.length; n++) e[n] && (t.showList.push({
                id: e[n].diversionId,
                num: 0
            }), t.clickList.push({
                id: e[n].diversionId,
                num: 0,
                clickFlag: 0
            }));
            x.BI.setNewCacheData(t);
        }
        function r(e, t, n) {
            var i = {
                lastClickList: []
            };
            if (t) for (var o = 0; o < e.length; o++) e[o] && i.lastClickList.push({
                id: e[o].diversionId,
                num: 0
            }); else {
                var r = x.BI.getNewCacheData(), a = "" != r ? r : null;
                if (null == a) return;
                if (a.clickList && 0 < a.clickList.length) for (var l = 0; l < a.clickList.length; l++) i.lastClickList.push({
                    id: a.clickList[l].id,
                    num: a.clickList[l].num
                });
            }
            Je = i, wx.setStorageSync(C, i), n && n();
        }
        var t = wx.getStorageSync(B), a = 864e5 - 1;
        function n(i) {
            setInterval(function() {
                var e, t, n;
                e = function() {
                    r(i, !1, function() {
                        o(i);
                    });
                }, n = new Date().getTime(), l - n <= 0 && (e && e(), new Date().getTime(), t = new Date(new Date().setHours(0, 0, 0, 0) + a).getTime(), 
                l = t, wx.setStorageSync(L, t));
            }, 1e3 / 60);
        }
        "" == t && (r(e, !0), o(e), i = new Date(new Date().setHours(0, 0, 0, 0) + a).getTime(), 
        wx.setStorageSync(L, i));
        var i, l = wx.getStorageSync(L);
        "" == l && (o(e), l = i = new Date(new Date().setHours(0, 0, 0, 0) + a).getTime(), 
        wx.setStorageSync(L, i)), n(e);
    }
    function He(e) {
        var t = 0, n = (null == Je && (Je = wx.getStorageSync(C)), Je);
        if (null == n) return t;
        if (!(n.lastClickList && 0 < n.lastClickList.length)) return t;
        for (var i = 0; i < n.lastClickList.length; i++) if (n.lastClickList[i] && n.lastClickList[i].id == e) {
            t = n.lastClickList[i].num;
            break;
        }
        return t;
    }
    var je = null, Je = null;
    x.BI.getNewCacheData = function() {
        return null == je && (je = wx.getStorageSync(B)), je;
    }, x.BI.setNewCacheData = function(e) {
        je = e, wx.setStorageSync(B, e);
    }, x.BI.getClickOrShowTimesById = function(e, t) {
        var n = x.BI.getNewCacheData(), i = "" != n ? n : null, o = 0;
        if (null == i) return o;
        if ("getShowTime" == t) {
            if (!(i.showList && 0 < i.showList.length)) return o;
            for (var r = 0; r < i.showList.length; r++) if (i.showList[r] && i.showList[r].id == e) {
                o = i.showList[r].num;
                break;
            }
        } else if ("getClickTime" == t) {
            if (!(i.clickList && 0 < i.clickList.length)) return o;
            for (var a = 0; a < i.clickList.length; a++) if (i.clickList[a] && i.clickList[a].id == e) {
                o = i.clickList[a].num;
                break;
            }
        }
        return o;
    }, x.BI.getClickFlagById = function(e) {
        var t = 0, n = x.BI.getNewCacheData(), i = "" != n ? n : null;
        if (!(i.clickList && 0 < i.clickList.length)) return t;
        for (var o = 0; o < i.clickList.length; o++) if (i.clickList[o] && i.clickList[o].id == e) {
            1 == i.clickList[o].clickFlag && (t = 1);
            break;
        }
        return t;
    }, x.BI.setClickOrShowTimesById = function(e, t, n) {
        var i = x.BI.getNewCacheData(), o = "" != i ? i : null;
        if (null != o) {
            if ("setShowTime" == t) {
                if (o.showList && 0 < o.showList.length) for (var r = 0; r < o.showList.length; r++) if (o.showList[r] && o.showList[r].id == e) {
                    o.showList[r].num = n;
                    break;
                }
            } else if ("setClickTime" == t && o.clickList && 0 < o.clickList.length) for (var a = 0; a < o.clickList.length; a++) if (o.clickList[a] && o.clickList[a].id == e) {
                o.clickList[a].num = n, o.clickList[a].clickFlag = 1;
                break;
            }
            x.BI.setNewCacheData(o);
        }
    }, x.BI.getNewBIData = function() {
        return new Promise(function(i, o) {
            var r = {
                game_id: k.game_id
            }, e = k.requestUrl + k.get_diversion_url + "?game_id=" + r.game_id;
            if (null != k.game_id && null != k.game_id && "" != k.game_id) return function n() {
                x.NetEngineRequest({
                    url: e,
                    data: r,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        var t = nt(e, o, n, r);
                        lt("获取导流数据", t, h), i(t);
                    },
                    fail: function(e) {
                        at(o, n), lt("获取导流数据:失败", e, v, r);
                    }
                });
            }();
            lt("游戏id不能为空", v);
        });
    }, x.BI.initNewBiData = function(t) {
        x.BI.getNewBIData().then(function(e) {
            e && e.list && 0 < e.list.length ? (H.newBIConfig = JSON.parse(JSON.stringify(e.list)), 
            Ye(H.newBIConfig), t && t()) : console.warn("获取导流创意列表为空,请检查game_id配置,若game_id配置无误联系后台人员检查后台配置");
        });
    };
    x.BI.sdkGetNewRiverData = function(e, t, n) {
        x.BI.getRiverDataByNeedNum(e, t, n);
    }, x.BI.getRiverDataByNeedNum = function(e, c, s, d) {
        e <= 0 && console.log("显示个数需为正数");
        function t(e) {
            var t = JSON.parse(JSON.stringify(H.newBIConfig)), n = function(e) {
                if (!e || e.length <= 0) return 0;
                for (var t = 0, n = 0, i = 0; i < e.length; i++) {
                    var o = e[i];
                    o && 0 != o.relationTableUserCount && (n = o.diversionUserCount / o.relationTableUserCount), 
                    t += n;
                }
                return t / e.length;
            }(t);
            if (t.length <= 0 || !t) console.log("导流数据为空，请联系后台相关人员配置导流数据"); else {
                for (var i = 0; i < t.length; i++) {
                    var o = He(t[i].diversionId), r = x.BI.getClickOrShowTimesById(t[i].diversionId, "getShowTime"), a = function(e, t, n, i) {
                        var o = i, r = 250 * n;
                        1e3 <= r && (r = 1e3);
                        var a = 0, l = 1, c = 0;
                        e && (0 != e.relationTableUserCount && (a = e.diversionUserCount / e.relationTableUserCount), 
                        c = e.clickRate);
                        var s = x.BI.getClickFlagById(e.diversionId);
                        0 != t && (l = 1 == s ? a / t : 1);
                        var d = (1e3 + r) * c * (l = l < 1 ? 1 : l) * Math.pow(.8, o);
                        return 1 == s ? .5 * d : d;
                    }(t[i], n, o, r);
                    t[i].order = a;
                }
                t.sort(M("order")), t.reverse();
                var l = function(e, t) {
                    var o = [], r = JSON.parse(JSON.stringify(e));
                    t > r.length && (t = r.length);
                    return function e(t, n, i) {
                        .3 < Math.random() ? (n += 1, r[t] && o.push(r[t]), 0 < r.length && (r.splice(t, 1), 
                        n < i && (t += 1, e(t %= r.length, n, i)))) : 0 < r.length && n < i && (t += 1, 
                        e(t %= r.length, n, i));
                    }(0, 0, t), o;
                }(t, e);
                c && c(l), d || x.BI.adShowNewBIRiver(l, s);
            }
        }
        null == H.newBIConfig ? (x.eventListerObj.removeListener("refreshNewBIData"), x.eventListerObj.addListener("refreshNewBIData", function() {
            t(e);
        })) : t(e);
    }, x.BI.adShowNewBIRiver = function(e, t) {
        if (e && !(e.length <= 0)) {
            for (var n, i = 0; i < e.length; i++) {
                e[i] && e[i].diversionId && (n = x.BI.getClickOrShowTimesById(e[i].diversionId, "getShowTime"), 
                x.BI.setClickOrShowTimesById(e[i].diversionId, "setShowTime", n + 1));
            }
            x.BI.diversionReport(e, 2, t);
        }
    }, x.BI.adClickNewBIRiver = function(e, t) {
        var n = x.BI.getClickOrShowTimesById(e, "getClickTime");
        x.BI.setClickOrShowTimesById(e, "setClickTime", n + 1), x.BI.diversionReport([ {
            diversionId: e
        } ], 1, t);
    }, x.BI.initNavigateConfigData = function() {
        var e, t, n = wx.getStorageSync(g) ? wx.getStorageSync(g) : "";
        if ("" != n && (!n.dataInfo || (e = n.dataInfo.data) && (t = e.data.river_diversion_config, 
        H.configList = t)), null != H.configList) for (var i in H.topRiverConfigList = [], 
        H.fullRiverList = [], H.fullScreenBigPicList = [], H.popRiverList = [], H.wechatGameExitList = [], 
        H.listRiverList = [], H.configList) H.configList[i].forEach(function(e) {
            var t = {
                id: e.id,
                gameId: e.gameId,
                appId: e.appId,
                showName: e.showName,
                realName: e.realName,
                iconUrl: e.icon,
                type: e.type,
                locationOrder: Number(e.locationOrder),
                pathInfo: e.pathInfo
            };
            2 == e.type || (1 == e.type ? H.popRiverList.push(t) : 3 == e.type || 5 == e.type || (7 == e.type ? H.fullScreenBigPicList.push(t) : 8 == e.type || 9 == e.type && H.wechatGameExitList.push(t)));
        }); else console.log("config error ==========");
    }, x.BI.getSdkWhiteListState = function() {
        return 1 == x.BI.getCurrrentMistakeState() || (console.log("未达到白名单机制"), !1);
    }, x.BI.getCurrrentMistakeState = function() {
        return "wx" == b.login_type ? wx.getStorageSync(i) ? Number(wx.getStorageSync(i)) : 0 : qq.getStorageSync(i) ? Number(qq.getStorageSync(i)) : 0;
    }, x.BI.isNewUser = function() {
        var e = wx.getStorageSync(c);
        if ("" == e) return !0;
        var t = Number(e);
        return !(864e5 < new Date().getTime() - t);
    };
    function Ke(e) {
        var t = 1 == e ? 0 : 1;
        "wx" == b.login_type ? wx.setStorageSync(i, t) : qq.setStorageSync(i, t);
    }
    x.BI.init = function() {
        // k.loginLock = 1;
        // var e, t, n = "";
        // "" == (n = "wx" == b.login_type ? wx.getStorageSync(r) ? wx.getStorageSync(r) : "" : qq.getStorageSync(r) ? qq.getStorageSync(r) : "") && (e = Math.floor((Math.random() + Math.floor(9 * Math.random() + 1)) * Math.pow(10, 9)), 
        // n = n + k.game_id + E + e + new Date().getTime(), wx.setStorageSync(r, n)), k.jq_uid = n, 
        // "" != wx.getStorageSync(c) && null != wx.getStorageSync(c) || (t = new Date().getTime(), 
        // wx.setStorageSync(c, t)), k.report_data_game_id = null != b.report_data_game_id ? b.report_data_game_id : "", 
        // console.log("report_data_game_id", JSON.stringify(k.report_data_game_id)), console.log("zqy-sdk 版本号:" + k.local_update_version), 
        // console.log("zqy-客户端 版本号:" + b.version);
        // var i, o = wx.getLaunchOptionsSync();
        // o && (o.scene && (console.log(o.scene, "进入场景"), k.scene = o.scene), o.query && (k.launch_info = o.referrerInfo), 
        // i = x.BI.getCurrrentMistakeState(), o.scene && (1007 == o.scene || 1008 == o.scene) || (!o.scene || 1095 != o.scene && 1037 != o.scene && 1038 != o.scene ? (!o.scene || 1044 != o.scene && 1104 != o.scene && 1001 != o.scene && 1090 != o.scene && 1103 != o.scene && 1089 != o.scene) && o.scene && 1 == i && Ke(i) : 0 == i && 1 != wx.getStorageSync(f) && (console.log("10950----------------------"), 
        // Ke(i), wx.setStorageSync(f, 1))));
        // k.jq_uid, k.game_id, "" == it("channel_param") || it("channel_param"), k.scene, 
        // k.card_id;
        // try {
        //     null != uma && "key" != b.umkey && uma.init({
        //         appKey: b.umkey,
        //         useOpenid: !0,
        //         autoGetOpenid: !0,
        //         debug: b.debug
        //     });
        // } catch (e) {
        //     e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        //     console.log(JSON.stringify(e)), "key" == b.umkey && console.log("umKey未传入"), null == uma && console.log("umsdk未引入");
        // }
        // H.resMap = new Map(), x.BI.initNewBiData(function() {
        //     x.eventListerObj.emit("refreshNewBIData");
        // }), x.login("first").then(function(e) {
        //     "wx" == b.login_type ? wx.setStorageSync(a, e) : qq.setStorageSync(a, e);
        //     var t, n, i, o, r = null;
        //     null != (r = "wx" == b.login_type ? wx.getLaunchOptionsSync() : qq.getLaunchOptionsSync()) && (r.scene && (k.scene = r.scene), 
        //     r.referrerInfo && (k.launch_info = r.referrerInfo)), k.loginLock = 2;
        //     try {
        //         "laya" == b.engine ? (t = Laya.Browser.width / b.designSizeWidth, H.scaleTimeScale = t, 
        //         console.log("设备的比例", Laya.Browser.width, Laya.Browser.height), console.log("逻辑分辨率", Laya.Browser.clientWidth, Laya.Browser.clientHeight)) : (n = cc.director.getWinSize(), 
        //         i = cc.view.getDesignResolutionSize(), console.log(i), console.log(n, "winSize==================="), 
        //         o = n.width > i.width ? 1 : n.width / i.width, H.scaleTimeScale = o);
        //     } catch (e) {}
        //     x.BI.refreshConfig(), x.BI.refreshUserStatus();
        // });
    }, x.BI.umDataTrackEvent = function(e, t) {
        var n;
        b && "key" == b.umkey ? console.log("umkey 未初始化无法上报") : null != e && null != e ? (n = x.BI.isNewUser(), 
        null != t ? (n && wx.uma.trackEvent("newuser-" + e, t), wx.uma.trackEvent(e, t), 
        lt(e, t + "", "um trackEvent", null)) : (n && wx.uma.trackEvent("newuser-" + e), 
        wx.uma.trackEvent(e), lt(e, "", "um trackEvent", null))) : console.log("数据上报错误：缺少eventId");
    }, x.BI.queryCity = function() {
        return new Promise(function(e, t) {
            return n = k.requestUrl + k.queryCity_url, void console.log(n, "url");
            var n;
        });
    }, x.BI.jq_config = function(e) {
        var t = "object" === (void 0 === e ? "undefined" : _typeof(e)) ? e : {};
        k.game_id = t.game_id ? t.game_id : "";
    }, x.BI.eventReport = function(e) {
        T++, b.login_type, wx.setStorageSync(n, T);
        k.jq_uid;
        var t = {
            e: e
        };
        o.push(t), lt("上报事件参数", t, h), 1 == o.length && x.BI.reportRequest();
    }, x.BI.reportRequest = function() {};
    function Qe() {
        return new Promise(function(n, e) {
            return function t() {
                5 != k.login_try_times && (k.login_try_times++, "wx" == b.login_type ? wx.login({
                    success: function(e) {
                        if (!e.code) return t();
                        console.log(e.code), n(e);
                    },
                    fail: function(e) {
                        return lt("微信登录 :失败", e, v), t();
                    }
                }) : qq.login({
                    success: function(e) {
                        if (!e.code) return t();
                        console.log(e.code), n(e);
                    },
                    fail: function(e) {
                        return lt("QQ登录 :失败", e, v), t();
                    }
                }));
            }();
        });
    }
    x.getUserOpenId = function(e) {
        var t = {
            game_id: k.report_data_game_id,
            js_code: e,
            uid: k.jq_uid
        };
        return new Promise(function(i, o) {
            return function n() {
                var e = k.requestUrl + k.get_openid_url + "?game_id=" + t.game_id + "&js_code=" + t.js_code + "&uid=" + t.uid;
                x.NetEngineRequest({
                    url: e,
                    data: t,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        0 != e.data.code && console.log("获取open_id失败：" + JSON.stringify(e.data.message));
                        var t = nt(e, o, n, null);
                        i(t);
                    },
                    fail: function() {
                        F = !1, at(o, n);
                    }
                });
            }();
        });
    }, x.BI.enterGame = function(o) {
        var r = {
            game_id: k.report_data_game_id,
            action: 1001,
            uid: k.jq_uid,
            version: null != b.version ? b.version : ""
        };
        return null != x.open_id && null != x.open_id && (r.open_id = x.open_id), "" != k.card_id && null != k.card_id && (console.log("分享卡片uid:" + k.card_id), 
        r.share_uid = k.card_id), new Promise(function(n, i) {
            return function e() {
                var t = k.data_report_origin_url + k.data_report_url + "?game_id=" + r.game_id + "&action=" + r.action + "&uid=" + r.uid + "&pathInfo=" + JSON.stringify(o.query);
                "" != k.card_id && null != k.card_id && (t = k.data_report_origin_url + k.data_report_url + "?game_id=" + r.game_id + "&action=" + r.action + "&uid=" + r.uid + "&share_uid=" + k.card_id + "&pathInfo=" + JSON.stringify(o.query)), 
                null != x.open_id && null != x.open_id && (t = k.data_report_origin_url + k.data_report_url + "?game_id=" + r.game_id + "&action=" + r.action + "&uid=" + r.uid + "&open_id=" + r.open_id + "&pathInfo=" + JSON.stringify(o.query), 
                "" != k.card_id && null != k.card_id && (t = k.data_report_origin_url + k.data_report_url + "?game_id=" + r.game_id + "&action=" + r.action + "&uid=" + r.uid + "&open_id=" + r.open_id + "&share_uid=" + k.card_id + "&pathInfo=" + JSON.stringify(o.query))), 
                t = t + "&version=" + r.version, "" != k.report_data_game_id ? x.NetEngineReportRequestReport({
                    url: t,
                    data: r,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        console.log(t, r), P = !1, tt(), console.log("进入游戏打点"), n(e);
                    },
                    fail: function() {
                        rt(i, e);
                    }
                }) : console.log("report_data_game_id 未配置，不支持数据上报", r, t);
            }();
        });
    }, x.login = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "second";
        return new Promise(function(d, u) {
            var t;
            if ("second" == e && (t = setInterval(function() {
                var e = null;
                (e = "wx" == b.login_type ? wx.getStorageSync(a) : qq.getStorageSync(a)) && 2 == k.loginLock && (clearInterval(t), 
                d(e));
            }, 50)), "first" == e) {
                return function s() {
                    Qe().then(function(e) {
                        var t = "";
                        "wx" == b.login_type ? (t = "10000", b.is_test && (t = "1")) : t = "qq" == b.login_type ? "10001" : "1", 
                        console.log("code=");
                        var l = {
                            platform: t,
                            code: e.code,
                            game_id: k.game_id,
                            token: k.jq_uid,
                            card_id: k.card_id
                        };
                        console.log("login传入cardid:", l.card_id), console.log("jscode-retry", e.code);
                        var c = wx.getLaunchOptionsSync();
                        k.launchData = c, x.NetEngineRequest({
                            url: k.requestUrl + k.user_update_url + "?platform=" + l.platform + "&code=" + l.code + "&game_id=" + l.game_id + "&token=" + l.token + "&card_id=" + l.card_id,
                            data: l,
                            method: "GET",
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                --O;
                                var t = !(F = !1);
                                if (!e || !e.data || 0 != e.data.code) return console.log("获取配置失败"), F = !1, x.BI.initAd(), 
                                at(u, s);
                                if (k.open_id = "00000000000000000000", e && e.data && e.data.data && (null != e.data.data.need_statistics && (k.need_statics = e.data.data.need_statistics), 
                                t = 1 == e.data.data.game_config.status || e.data.data.game_config.ver < b.version, 
                                0 == e.data.data.game_config.status && (t = !1, 0 < function(e, t) {
                                    e = e.split("."), t = t.split(".");
                                    var n = Math.max(e.length, t.length);
                                    for (;e.length < n; ) e.push("0");
                                    for (;t.length < n; ) t.push("0");
                                    for (var i = 0; i < n; i++) {
                                        var o = parseInt(e[i]), r = parseInt(t[i]);
                                        if (r < o) return 1;
                                        if (o < r) return -1;
                                    }
                                    return 0;
                                }(b.version, e.data.data.game_config.ver) && (t = !0))), k.open_id) {
                                    k.open_id = k.open_id, H.lastTimestamp = e && e.data && e.data.data.timestamp;
                                    var n = {
                                        open_id: k.open_id,
                                        verify_status: t,
                                        gameExtConfig: e.data.data.game_config.gameExtConfig,
                                        dataInfo: e
                                    };
                                    wx.setStorageSync(g, n);
                                    var i, o, r, a = wx.getStorageSync(g);
                                    return a && (console.log("存储配置成功", a), H.isInitSdkSuccess = !0, x.eventListerObj.emit("updateAdConfig"), 
                                    !c.scene || 1007 != c.scene && 1008 != c.scene || (0 == (i = x.BI.getCurrrentMistakeState()) && 1 != wx.getStorageSync(f) && (1 == x.BI.getGameExtValueByKey("errorClickAllowByShare") || -1 == x.BI.getGameExtValueByKey("errorClickAllowByShare") ? (console.log("分享用户在白名单中"), 
                                    Ke(i)) : console.log("分享用户不在白名单中"), wx.setStorageSync(f, 1)), console.log("卡片进入"), 
                                    k.card_id = "" == it("zqy_share_id") ? "" : it("zqy_share_id")), o = 60, -1 != (r = x.BI.getGameExtValueByKey("banner_mistake_cd")) && (o = Number(r)), 
                                    setInterval(function() {
                                        j.cdLimitShowErrorClickState || (j.cdLimitShowErrorClickNum = j.cdLimitShowErrorClickNum + 1, 
                                        j.cdLimitShowErrorClickNum >= o && (console.log("重置误点冷却CD"), j.cdLimitShowErrorClickState = !0, 
                                        j.cdLimitShowErrorClickNum = 0));
                                    }, 1e3), x.BI.enterGame(c), x.BI.initNavigateConfigData(), 1 != x.BI.getGameExtValueByKey("isNeedInitAd") && -1 != x.BI.getGameExtValueByKey("isNeedInitAd") || x.BI.initAd(), 
                                    1 == x.BI.getGameExtValueByKey("isNeedAutoPopBanner") && x.BI.showBanner(), x.eventListerObj.emit("refreshListRiverEventName")), 
                                    null != e.data.data && (k.open_id = e.data.data.open_id, x.getUserOpenId(l.code).then(function(e) {
                                        var t, n, o, i;
                                        x.open_id = e && e.open_id, k.open_id = x.open_id, console.log(x.open_id, "open_id"), 
                                        x.token = e && e.token, console.log(x.token, "token"), null != x.open_id && null != x.open_id && ("" != (t = wx.getStorageSync(g) ? wx.getStorageSync(g) : "") && t.open_id && (t.open_id = x.open_id, 
                                        wx.setStorageSync(g, t), console.log("更新openId成功", k)), x.eventListerObj.emit("wxOpenIdRefresh"), 
                                        n = !1, b.isOpenFriendChatFunc && (n = !0), -1 != x.BI.getGameExtValueByKey("isOpenFriendChatFunc") && (n = 1 == x.BI.getGameExtValueByKey("isOpenFriendChatFunc")), 
                                        n && (x.BI.refreshMsgInfo(), o = wx.getStorageSync(w) ? wx.getStorageSync(w) : "", 
                                        x.BI.getWxFriendsList().then(function(n) {
                                            function i(e) {
                                                var t = {
                                                    friend_list: e.list
                                                }, n = e.list && e.list.length || 0;
                                                "" == o ? wx.setStorageSync(w, t) : n != (o.friend_list && o.friend_list.length || 0) && (wx.setStorageSync(w, t), 
                                                x.eventListerObj.emit("friendsInfoChangeMsg", 0));
                                            }
                                            var e;
                                            c.scene && (1007 == c.scene || 1008 == c.scene) ? "" != (e = "" == it("share_open_id") ? "" : it("share_open_id")) ? x.BI.addFriendByShareCard(x.open_id, e, function(e, t) {
                                                i(1 == e ? t : n);
                                            }) : (console.log("分享卡片中分享者open_id为空"), i(n)) : i(n);
                                        }), i = wx.getStorageSync(p) ? wx.getStorageSync(p) : "", x.BI.getWxFriendsApplyList().then(function(e) {
                                            var t = {
                                                apply_list: e.list
                                            }, n = e.list && e.list.length || 0;
                                            "" == i ? wx.setStorageSync(p, t) : n != (i.apply_list && i.apply_list.length || 0) && (wx.setStorageSync(p, t), 
                                            x.eventListerObj.emit("friendsInfoChangeMsg", 1));
                                        })));
                                    })), d(n);
                                }
                            },
                            fail: function() {
                                return k.need_statics = !0, x.BI.initAd(), at(u, s);
                            }
                        });
                    });
                }();
            }
        });
    };
    var Ze = 1;
    x.BI.setSdkInitDataSuccessCb = function(e, t) {
        return;
        if (5 < Ze) return console.log("初始化SDK配置失败"), void (t && t());
        var n;
        H.isInitSdkSuccess ? (Ze = 1, console.log("SDK初始化配置成功"), e && e()) : (Ze++, n = setTimeout(function() {
            x.BI.setSdkInitDataSuccessCb(e), clearTimeout(n);
        }, 500 * Ze));
    }, x.BI.diversionReport = function(d, u, g) {
        function e() {
            return new Promise(function(n, i) {
                var e = [], o = "", t = function(e) {
                    var t = -1;
                    switch (e) {
                      case "顶部导流":
                        t = 1;
                        break;

                      case "底部导流":
                        t = 2;
                        break;

                      case "抽屉导流":
                        t = 3;
                        break;

                      case "全屏导流":
                        t = 4;
                        break;

                      case "列表导流":
                        t = 5;
                        break;

                      case "新列表导流":
                        t = 6;
                        break;

                      case "列表导流2":
                        t = 7;
                        break;

                      default:
                        t = -1;
                    }
                    return t;
                }(g);
                if (-1 == t && (t = g), 1 == u || 2 == u || 3 == u) {
                    if (d && 0 < d.length) for (var r = 0; r < d.length; r++) if (d[r].diversionId) {
                        var a = {
                            diversion_id: d[r].diversionId,
                            game_id: k.game_id,
                            uid: k.jq_uid,
                            type: t
                        };
                        switch (u) {
                          case 1:
                            a.click = 1, o = "点击上报";
                            break;

                          case 2:
                            a.exposure = 1, o = "曝光上报";
                            break;

                          case 3:
                            a.conversion = 1, o = "转化上报";
                        }
                        e.push(a);
                    }
                    var l = {
                        report_params: JSON.stringify(e)
                    }, c = k.launchData && JSON.stringify(k.launchData.query) || "", s = k.data_report_origin_url + k.diversion_report_url + "?report_params=" + l.report_params + "&pathInfo=" + c;
                    if ("" != k.report_data_game_id) {
                        if (null != k.game_id && null != k.game_id && "" != k.game_id) return function t() {
                            x.NetEngineReportRequestReport({
                                url: s,
                                data: l,
                                method: "GET",
                                header: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    P = !1, tt(), e.data && ("ok" == e.data ? 1 == x.BI.getGameExtValueByKey("isShowDiversionLogSwitch") && lt("创意上报:成功", g + o, h) : lt("创意上报 :失败", e.errMsg || "error", v, l)), 
                                    n(e);
                                },
                                fail: function(e) {
                                    rt(i, t), lt("创意上报:失败", e, v, l);
                                }
                            });
                        }();
                        lt("游戏id不能为空", v);
                    } else console.log("report_data_game_id 未配置，不支持数据上报", l, s);
                } else console.log("创意上报类型不存在");
            });
        }
        H.isInitSdkSuccess ? e() : setTimeout(function() {
            e();
        }, 500);
    }, x.BI.refreshUI = function(e, t) {
        function n(e, t) {
            var n, i = null;
            return "" != e && (!e.dataInfo || (n = e.dataInfo.data) && ("river" == t ? i = n.data.river_diversion_config : "shareConfig" == t ? i = n.data.share_card_config : "gameConfig" == t && (i = n.data.game_config))), 
            i;
        }
        n(e, "river"), n(t, "river");
        function i(e) {
            We.wxShareConfig = [], e.forEach(function(e) {
                We.wxShareConfig.push(e);
            });
        }
        var o, r = n(e, "shareConfig"), a = n(t, "shareConfig");
        r.length == a.length ? (o = !1, r.forEach(function(t) {
            a.forEach(function(e) {
                t.id == e.id && (t.cardIcon == e.cardIcon && t.cardDesc == e.cardDesc || (o = !0));
            });
        }), o && i(a)) : i(a);
        var l = n(e, "gameConfig"), c = n(t, "gameConfig");
        l && l.gameExtConfig && c && c.gameExtConfig && l.gameExtConfig != c.gameExtConfig && Oe(c);
    }, x.BI.updateGameConfig = function(t) {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    game_id: k.game_id,
                    time_stamp: t
                }, e = k.requestUrl + k.update_game_config_url + "?game_id=" + i.game_id + "&time_stamp=" + i.time_stamp;
                x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        lt("更新游戏配置", e, h, i), o(t);
                    },
                    fail: function(e) {
                        lt("更新游戏配置", e, v, i), at(r, n);
                    }
                });
            }();
        });
    }, x.BI.getUserStatus = function() {
        return new Promise(function(o, r) {
            return function n() {
                var i = {
                    game_id: k.game_id,
                    uid: k.jq_uid
                }, e = k.requestUrl + k.get_user_status_url + "?game_id=" + i.game_id + "&uid=" + i.uid;
                x.NetEngineRequest({
                    url: e,
                    data: i,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        var t = nt(e, r, n, i);
                        lt("获取用户分级成功", e, h, i), o(t);
                    },
                    fail: function(e) {
                        lt("获取用户等级失败", e, v, i), at(r, n);
                    }
                });
            }();
        });
    }, x.BI.refreshUserShareOrVideoConfig = function() {
        x.BI.getUserStatus().then(function(e) {
            if ("normal" == e.status) {
                var t = wx.getStorageSync(g) ? wx.getStorageSync(g) : "";
                if ("" != t && t.dataInfo) {
                    var n = t.dataInfo.data;
                    if (n) {
                        var i = n.data.game_config;
                        if (!i || !i.gameExtConfig) return;
                        var o = JSON.parse(i.gameExtConfig);
                        if (o && 0 < o.length) for (var r = 0; r < o.length; r++) {
                            var a = o[r];
                            a && "reward_step_cfg_1" == a.ext_key && Te(a.ext_value);
                        }
                    }
                }
            } else {
                "video" == e.status ? Te(JSON.stringify({
                    fail_count_step: 5,
                    steps: [ {
                        type: 1,
                        count: 2
                    } ]
                })) : "share" == e.status && Te(JSON.stringify({
                    fail_count_step: 5,
                    steps: [ {
                        type: 2,
                        count: 2
                    } ]
                }));
            }
        });
    }, x.BI.refreshUserStatus = function() {
        var e = setTimeout(function() {
            clearTimeout(e), x.BI.refreshUserShareOrVideoConfig(), x.BI.refreshUserStatus();
        }, 6e4);
    }, x.BI.refreshConfig = function() {
        var e = setTimeout(function() {
            console.log("60s请求一次游戏配置"), clearTimeout(e), x.BI.updateGameConfig(H.lastTimestamp).then(function(e) {
                var t = !1;
                e.advertising_config && 0 == e.advertising_config.length && (t = !0);
                var n = !1;
                null == e.game_config && (n = !0);
                var i = !1;
                "{}" === JSON.stringify(e.river_diversion_config) && (i = !0);
                var o, r, a = !1;
                e.share_card_config && 0 == e.share_card_config.length && (a = !0), t && n && i && a ? console.log("配置没有变化") : (o = wx.getStorageSync(g), 
                "" != (r = wx.getStorageSync(g) ? wx.getStorageSync(g) : "") && r.dataInfo && (r.dataInfo.data.data.river_diversion_config = e.river_diversion_config, 
                r.dataInfo.data.data.game_config = e.game_config, r.dataInfo.data.data.advertising_config = e.advertising_config, 
                r.dataInfo.data.data.share_card_config = e.share_card_config, wx.setStorageSync(g, r), 
                x.BI.refreshUI(o, r))), H.lastTimestamp = e && e.timestamp;
            }), x.BI.refreshConfig();
        }, 6e4);
    }, x.getGameConfig = function() {
        return new Promise(function(l, c) {
            var e = wx.getStorageSync(g) ? wx.getStorageSync(g) : "";
            return "" != e ? l(e) : function a() {
                Qe().then(function(e) {
                    var t = "";
                    "wx" == b.login_type ? (t = "10000", b.is_test && (t = "1")) : t = "qq" == b.login_type ? "10001" : "1", 
                    console.log("code=");
                    var n = {
                        platform: t,
                        code: e.code,
                        game_id: k.game_id,
                        token: k.jq_uid,
                        card_id: k.card_id
                    };
                    x.NetEngineRequest({
                        url: k.requestUrl + k.user_update_url + "?platform=" + n.platform + "&code=" + n.code + "&game_id=" + n.game_id + "&token=" + n.token + "&card_id=" + n.card_id,
                        data: n,
                        method: "GET",
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            var t = !(F = !1);
                            if (null != e.data.data && (k.open_id = e.data.data.open_id, t = 1 == e.data.data.game_config.status || e.data.data.game_config.ver < b.version, 
                            0 == e.data.data.game_config.status)) {
                                t = !1;
                                for (var n = e.data.data.game_config.ver.split("."), i = b.version.split("."), o = 0; o < n.length; o++) if (Number(n[o]) < Number(i[o])) {
                                    t = !0;
                                    break;
                                }
                            }
                            if (console.log("openid" + k.open_id), k.open_id) {
                                x.open_id = k.open_id, k.open_id = k.open_id;
                                var r = {
                                    open_id: k.open_id,
                                    verify_status: t,
                                    gameExtConfig: e.data.data.game_config.gameExtConfig,
                                    dataInfo: e
                                };
                                return l(r);
                            }
                            return F = !1, at(c, a);
                        },
                        fail: function() {
                            return at(c, a);
                        }
                    });
                });
            }();
        });
    }, x.getGameSwitcher = function() {}, x.getActionModel = function() {}, x.LeaderBoard.post = function(e, t) {}, 
    x.LeaderBoard.get = function(e) {}, x.BI.evtCreateShareCard = function() {}, x.shareAppMessage = function() {}, 
    x.onShareAppMessage = function() {}, x.BI.evtEnterFromShare = function(e) {}, x.BI.dataReportFunc = function(r, a, l, c, s, d) {
        var e = k.need_statics;
        if (r != R && r != I || (e = !0), e) return new Promise(function(i, o) {
            return function e() {
                var n = {
                    game_id: k.report_data_game_id,
                    action: r,
                    uid: k.jq_uid,
                    version: null != b.version ? b.version : ""
                };
                null != d && (n.app_id = d), null != a && (n.event_name = a.event_name || "", n.event_info = null != a.event_info ? a.event_info : {}), 
                null != l && (n.stage_id = null != l.stage_id ? l.stage_id : "", n.stage_name = null != l.stage_name ? l.stage_name : "", 
                null != l.reward_type && (n.reward_type = l.reward_type), null != l.stage_status && (n.stage_status = l.stage_status), 
                null != l.stage_time && (n.stage_time = l.stage_time));
                var t = k.data_report_origin_url + k.data_report_url + "?game_id=" + n.game_id + "&action=" + n.action + "&uid=" + n.uid;
                null != d && (t = t + "&app_id=" + n.app_id), null != a && (t = t + "&event_name=" + n.event_name + "&event_info=" + n.event_info), 
                null != l && (t = t + "&stage_id=" + n.stage_id + "&stage_name=" + n.stage_name, 
                null != n.reward_type && (t = t + "&reward_type=" + n.reward_type), null != n.stage_status && (t = t + "&stage_status=" + n.stage_status), 
                null != n.stage_time && (t = t + "&stage_time=" + n.stage_time)), t = t + "&version=" + n.version, 
                "" != k.report_data_game_id ? x.NetEngineReportRequestReport({
                    url: t,
                    data: n,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        var t;
                        lt("当前占用请求通道个数", O + "个", h), P = !1, tt(), e.data && ("ok" == e.data ? c && c(n) : (t = e.errMsg || "error", 
                        s && s(n, t))), i(e);
                    },
                    fail: function() {
                        rt(o, e);
                    }
                }) : console.log("game_id未配置或者sdk未初始化，不支持数据上报", n, t);
            }();
        });
    };
    var $e = 0;
    x.BI.evtLevelStartReport = function(e, t) {
        $e = Math.round(new Date().getTime() / 1e3);
        var n = {
            stage_id: e,
            stage_name: t
        };
        null != e && null != e ? null != t && null != t ? x.BI.dataReportFunc(6001, null, n, function(e) {
            lt("关卡开始上报:成功", e.action, h);
        }, function(e, t) {
            lt("关卡开始上报:失败", t, v, e);
        }) : console.log("关卡名称不能为空") : console.log("关卡id不能为空");
    }, x.BI.evtLevelEndReport = function(e, t, n) {
        var i = Math.round(new Date().getTime() / 1e3) - $e;
        0 == $e && (console.log("关卡异常上报，没有开始上报只有结束上报"), i = 0), console.log(i, "关卡时长");
        var o = {
            stage_id: e,
            stage_name: t,
            stage_status: n,
            stage_time: i
        };
        null != e && null != e ? null != t && null != t ? null != n && null != n ? x.BI.dataReportFunc(6002, null, o, function(e) {
            lt("关卡结束上报:成功", e.action, h);
        }, function(e, t) {
            lt("关卡结束上报:失败", t, v, e);
        }) : console.log("关卡通关不能为空") : console.log("关卡名称不能为空") : console.log("关卡id不能为空");
    }, x.BI.evtLevelRewardReport = function(e, t, n) {
        var i = {
            stage_id: e,
            stage_name: t,
            reward_type: n
        };
        null != e && null != e ? null != t && null != t ? null != n && null != n ? x.BI.dataReportFunc(6003, null, i, function(e) {
            lt("关卡奖励上报:成功", e.action, h);
        }, function(e, t) {
            lt("关卡奖励上报:失败", t, v, e);
        }) : console.log("奖励类型不能为空") : console.log("关卡名称不能为空") : console.log("关卡id不能为空");
    }, x.BI.createDataReport = function(e, t) {
        var n = "";
        switch (e) {
          case N:
            n = "拉起视频上报";
            break;

          case 3002:
            n = "视频观看上报";
            break;

          case R:
            n = "拉起分享上报";
            break;

          case I:
            n = "分享成功上报";
            break;

          case 4001:
            n = "拉起误点上报";
            break;

          case 4002:
            n = "误点完成上报";
            break;

          case 5001:
            n = "拉起跳转上报";
            break;

          case 5002:
            n = "跳转成功上报";
        }
        "" != n ? x.BI.dataReportFunc(e, null, null, function(e) {
            lt(n + ":成功", e.action, h);
        }, function(e, t) {
            lt(n + ":失败", t, v, e);
        }, t) : console.log("上传数据失败，传入的action参数异常,参考evtDataReport接口传入正确的action参数, error acion:" + e);
    }, x.BI.evtCustomizeDataReport = function(e, t) {
        var n = "自定义事件上报", i = {
            event_name: e
        };
        null != e && null != e ? (null != t && null != t && (i.event_info = t), x.BI.dataReportFunc(1e4, i, null, function(e) {
            lt(n + ":成功", e.action, h);
        }, function(e, t) {
            lt(n + ":失败", t, v, e);
        })) : console.log("事件名称不能为空值");
    }, x.BI.evtShareExposure = function() {}, x.BI.evtVideoExposure = function() {}, 
    x.BI.eventShow = function() {}, x.enterFromShare = function() {}, x.BI.adBatchRiverDiversion = function(e) {
        return new Promise(function(e, t) {
            return k.game_id, k.open_id, k.requestUrl, void k.batch_river_diversion_url;
        });
    }, x.BI.adRiverDiversion = function(e, t, n) {
        n == H.nativeOperateClick && x.BI.createDataReport(5001);
    }, x.BI.evtNavToAd = function(e) {}, x.BI.adSpaceImpression = function(e) {};
    function et() {
        !F && 0 < t.length && x.NetEngineExecute();
    }
    function tt() {
        !P && 0 < A.length && x.NetEngineReportExecute();
    }
    function nt(e, n, i, o) {
        lt("当前占用请求通道个数", --O + "个", h);
        var r = null;
        F = !1, et();
        try {
            if ("object" !== _typeof(e.data)) throw new ot("服务器下发数据错误", "-2");
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return lt("服务器数据错误", e.message, v), at(n, i), !1;
        }
        return Array.isArray(e.data) ? (e.data.map(function(e, t) {
            try {
                if ("undefined" == e.code) throw new Excption("服务器下发数据错误", "-2");
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return lt("服务器数据错误", e.message, v), at(n, i), !1;
            }
            try {
                if (e.code != k.SUCCESS_CODE) throw new ot(e.message, e.code);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                n(e);
            }
            e.cmd == o.cmd && e.data && (r = e.data);
        }), r) : r = e.data.data;
    }
    function it(e, t) {
        return t && null != t || (t = "wx" == b.login_type ? wx.getLaunchOptionsSync().query : qq.getLaunchOptionsSync().query), 
        Object.keys(t).includes(e) ? t[e] : "";
    }
    function ot(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, n = new Error(e, arguments[2], arguments[3]);
        return n.code = t, n.name = "Exception", Object.setPrototypeOf(n, Object.getPrototypeOf(this)), 
        Error.captureStackTrace && Error.captureStackTrace(n, ot), n;
    }
    function rt(e, t) {
        var n, i = 1 < arguments.length && void 0 !== t ? t : null;
        P = !1, "function" == typeof i && (n = setTimeout(function() {
            i(), clearTimeout(n);
        }, 500));
        try {
            throw new ot("message", -1);
        } catch (e) {}
    }
    function at(e, t) {
        var n, i = 1 < arguments.length && void 0 !== t ? t : null;
        F = !1, "function" == typeof i && (n = setTimeout(function() {
            i(), clearTimeout(n);
        }, k.RETRY_TIME));
        try {
            throw new ot("message", -1);
        } catch (e) {}
    }
    function lt(e, t, n, i) {
        var o, r, a, l, c, s, d, u, g, h = t;
        b.debug && (r = "[" + (a = new Date(), l = a.getFullYear(), c = a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1, 
        s = a.getDate(), d = a.getHours(), u = a.getMinutes(), a.getSeconds(), g = a.getMilliseconds(), 
        l + "-" + c + "-" + s + " " + d + ":" + u + ":" + u + ":" + g) + "][" + n + "][" + e + "]:", 
        console.log(r, h)), i && b.debug && console.log("[请求数据]：", i), o = "" + JSON.stringify(h), 
        i && JSON.stringify(i);
    }
    x.userGetRandUserInfo = function() {}, x.logFrontendLog = function(i) {
        return new Promise(function(e, t) {
            return n = {
                cmd: "V2_Logs_frontendLog",
                platform: E,
                game_id: k.game_id,
                ver: b.version,
                sdk_version: k.version,
                open_id: k.open_id,
                token: k.token,
                log_str: i
            }, void x.NetEngineRequest({
                url: k.requestUrl,
                data: n,
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                success: function() {
                    --O, F = !1, et();
                },
                fail: function() {}
            });
            var n;
        });
    }, x.userActivate = function() {}, x.NetEngineRequest = function(e) {
        t.push(e), et();
    }, x.NetEngineReportRequestReport = function(e) {
        A.push(e), tt();
    }, x.NetEngineExecute = function() {
        var e;
        0 < t.length && (e = t.pop(), F = !0, O++, "wx" == b.login_type ? wx.request(e) : qq.request(e));
    }, x.NetEngineReportExecute = function() {
        var e;
        0 < A.length && (e = A.pop(), P = !0, "wx" == b.login_type ? wx.request(e) : qq.request(e));
    }, ((x.Exception = ot).prototype = Object.create(Error.prototype, {
        constructor: {
            value: Error,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })).getCode = function() {
        return this.code;
    }, ot.prototype.getMessage = function() {
        return this.message;
    }, Object.setPrototypeOf ? Object.setPrototypeOf(ot, Error) : ot.__proto__ = Error, 
    x.BI.init(), window.GameSdk = x;
}();