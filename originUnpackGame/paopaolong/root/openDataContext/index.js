var e = require("../openDataContext/@babel/runtime/helpers/interopRequireDefault"), a = e(require("./render/style")), t = e(require("./render/template")), r = e(require("./engine")), l = (e(require("./render/dataDemo")), 
GameGlobal.wx || GameGlobal.tt || GameGlobal.swan), n = l.getSharedCanvas().getContext("2d"), i = null;

l.onMessage(function(e) {
    "engine" === e.type && "viewport" == e.event && (i = e), "friend" === e.type && e.data && wx.getFriendCloudStorage({
        keyList: [ "data" ],
        success: function(l) {
            if (l.errMsg.indexOf("ok") > -1) {
                for (var d = l.data.splice(0, 100), o = [], s = 0; s < 100; ++s) if (d[s]) {
                    var u = JSON.parse(d[s].KVDataList[0].value);
                    e.data.selfIndex = -1, d[s].openid == e.data.openid && (u.stars = e.data.stars, 
                    u.level = e.data.level), o.push({
                        openid: d[s].openid,
                        avatarUrl: d[s].avatarUrl,
                        nickname: d[s].nickname,
                        stars: u.stars || 0,
                        level: u.level || 0
                    });
                }
                o.sort(function(e, a) {
                    return a.level == e.level ? a.stars - e.stars : a.level - e.level;
                });
                for (var f = 0; f < o.length; ++f) if (o[f].openid == e.data.openid) {
                    e.data.selfIndex = f;
                    break;
                }
                var v = {
                    data: o
                };
                !function(e) {
                    r.default.updateViewPort({
                        x: e.x,
                        y: e.y,
                        width: e.width,
                        height: e.height
                    });
                }(i), function(e, l) {
                    r.default.clear(), r.default.init((0, t.default)(e, l), a.default), r.default.layout(n);
                }(v, e.data);
            }
        },
        fail: function(e) {
            console.log("好友数据获取失败");
        }
    });
});