!function(root, factory) {
    if (typeof module === "object" && module.exports) module.exports = factory(); else root.SDK = factory();
}(typeof window !== "undefined" ? window : this, function() {
    var sdk = {
        openid: "",
        appid: "",
        options: null,
        channel: "",
        subchannel: "",
        yleventID: null,
        ylappID: null,
        initialized: false,
        apiPath: "https://vxcj.yoyegame.cn/json/",
        InitSDK: InitSDK,
        auth: auth,
        getAppMoreInfo: getAppMoreInfo,
        getAppTGInfo: getAppTGInfo,
        getScreenTGInfo: getScreenTGInfo,
        getAppAll: getAppAll,
        getChannel: getChannel,
        getShareQuery: getShareQuery,
        userEvent: userEvent,
        gameIconClick: gameIconClick,
        isInit: isInit,
        OnShow: OnShow,
        OnHide: OnHide,
        valideUser: valideUser,
        valideUser1: valideUser1,
        InitSDK2: InitSDK2,
        InitUserInfo: InitUserInfo
    };
    //appid-本有小游戏项目的appid
    //openid-登陆微信获取的openid
    //options- wx.getLaunchOptionsSync()返回的内容
    //yleventID-炎龙sdk初始化需要的一个值 从平台获取 没有去找平台要
    //ylappID-炎龙sdk初始化需要的一个值 从平台获取 没有去找平台要
        function InitSDK(appid, openid, options, ylappid, yleventid) {
        if (appid == null) {
            console.error("ylsdk init fail! appid == null!");
        }
        sdk.appid = appid;
        sdk.openid = openid;
        sdk.options = options;
        sdk.yleventID = yleventid;
        sdk.ylappID = ylappid;
        sdk.initialized = true;
        sdk.apiPath = sdk.apiPath + "tj_" + appid + ".json";
        ParseChannel();
    }
    //appid-本有小游戏项目的appid
    //options- wx.getLaunchOptionsSync()返回的内容
    //yleventID-炎龙sdk初始化需要的一个值 从平台获取 没有去找平台要
    //ylappID-炎龙sdk初始化需要的一个值 从平台获取 没有去找平台要
        function InitSDK2(appid, options, ylappid, yleventid) {
        if (appid == null) {
            console.error("ylsdk init fail! appid == null!");
        }
        sdk.appid = appid;
        sdk.options = options;
        sdk.yleventID = yleventid;
        sdk.ylappID = ylappid;
        sdk.initialized = true;
        sdk.apiPath = sdk.apiPath + "tj_" + appid + ".json";
        ParseChannel();
    }
    // 是否已经初始化
        function isInit() {
        return sdk.initialized;
    }
    // 点击授权确认
        function auth() {
        //授权打点
        //userEvent("user_auth", {"openid":sdk.openid});
    }
    // 有效用户
        function valideUser() {
        //有效用户
        //userEvent("valideUser", {"openid":sdk.openid});
    }
    // 有效用户1
        function valideUser1() {
        //有效用户1
        //userEvent("valideUser_1", {"openid":sdk.openid});
    }
    function getAppAll(obj) {
        var reqObj = "undefined" === typeof obj ? {} : obj;
        reqObj.url = sdk.apiPath + "?ts=" + new Date().getTime();
        console.log("tjUrl " + reqObj.url);
        wxRequestApi(reqObj);
    }
    function wxRequestApi(obj) {
        var wxRequestObj = {
            url: obj.url,
            success: function(res) {
                if ("success" in obj && "function" === typeof obj.success) {
                    if (res.data.success) {
                        obj.success(res.data.content);
                    } else {
                        if ("fail" in obj && "function" === typeof obj.fail) {
                            obj.fail(res.data.errMsg);
                        }
                    }
                }
            },
            fail: function() {
                if ("fail" in obj && "function" === typeof obj.fail) {
                    obj.fail("net error");
                }
            },
            complete: function() {
                if ("complete" in obj && "function" === typeof obj.complete) {
                    obj.complete();
                }
            }
        };
        if ("data" in obj) {
            wxRequestObj.data = obj.data;
        }
        wx.request(wxRequestObj);
    }
    // 推广ICON点击事件
        function gameIconClick(data, userparam) {
        if ("object" == typeof data) {
            if (data.hasOwnProperty("eventParams")) {
                var param = data["eventParams"];
                if (param) {
                    /*if( "object" == typeof userparam)
                    {
                        for (var item in userparam){
                            if( !param.hasOwnProperty(item))
                                param[item] = userparam[item];
                        }
                    }*/
                    param["channel"] = sdk.channel;
                    userEvent("gameicon_click_new", param);
                }
            } else if (data.hasOwnProperty("otherAppId")) {
                var eventdata = {
                    otherAppId: data["otherAppId"]
                };
                /*if( "object" == typeof userparam)
                {
                    for (var item in userparam){
                        if( !eventdata.hasOwnProperty(item))
                            eventdata[item] = userparam[item];
                    }
                }*/                eventdata["channel"] = sdk.channel;
                userEvent("gameicon_click_new", eventdata);
            } else {
                console.log("sdk gameIconClick have not property");
            }
        } else {
            console.log("sdk gameIconClick param error");
        }
    }
    // 用户自定义事件
        function userEvent(a, b) {
        console.log("统计Key " + a + " 值 " + JSON.stringify(b));
        if (wx && wx.uma.hasOwnProperty("trackEvent")) {
            //var data = {};
            //data[b.tgAppId] = b.tgAppId + "";
            //data[b.tgAppName] = 1;
            //wx.uma.trackEvent("1",b);
            wx.uma.trackEvent("1", b.tgAppName);
            console.log("trackEvent success!");
        } else {
            console.log("统计失败，需接入UMeng！");
        }
    }
    /////////////////////////内部函数
    //解析渠道号
        function ParseChannel() {
        if (sdk.options && sdk.options.query) {
            if (sdk.options.query.channel) {
                sdk.channel = sdk.options.query.channel;
            } else {
                sdk.channel = "_self";
            }
            // this.PreLoadUI();
            // return;
                } else {
            sdk.channel = "_self";
        }
        if (sdk.options && sdk.options.scene == 1037) {
            if (sdk.options.referrerInfo) {
                if (sdk.options.referrerInfo.appId) {
                    sdk.subchannel = sdk.options.referrerInfo.appId;
                } else {
                    sdk.subchannel = "_appidnull_";
                }
            } else {
                sdk.subchannel = "_refnull_";
            }
        } else {
            if (sdk.options) {
                sdk.subchannel = sdk.options.scene + " ";
            } else {
                sdk.subchannel = "_null_";
            }
        }
        console.log("****************" + sdk.subchannel);
    }
    // 设置用户信息
        function InitUserInfo(openid) {
        if (sdk.initialized) {
            sdk.openid = openid;
        }
    }
    //////////////////////////////////
    //废弃方法 后续不用了
    //获取“更多游戏”按钮的一些参数 ｛otherAppId: "", otherIndexPath: ""｝
        function getAppMoreInfo(success, error) {
        //废弃
    }
    function getAppTGInfo(success, error) {
        //废弃
    }
    //获取开屏广告列表
        function getScreenTGInfo(obj) {
        //废弃
    }
    //获取渠道号
        function getChannel() {
        //废弃
    }
    // 获取分享的参数
        function getShareQuery() {
        //废弃
        return "";
    }
    function OnShow(appid, openid, options) {
        console.log("sdk onShow");
        //废弃
        }
    function OnHide(appid, openid) {
        console.log("sdk OnHide");
        //废弃
        }
    //////////////////////////////////
        return sdk;
});