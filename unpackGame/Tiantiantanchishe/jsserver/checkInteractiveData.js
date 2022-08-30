exports.main = function(e) {
    try {
        e = JSON.parse(e);
        var r = wx.getOpenId(), t = e.toUser, n = (e.opNum, new Date().toDateString()), i = wx.getFriendUserStorage([ n ]).user_item, s = !1, o = i.find(function(e) {
            return e.openid === t;
        }), a = i.find(function(e) {
            return e.openid === r;
        });
        if (o) {
            var d = o.kv_list[o.kv_list.length - 1], u = a.kv_list[a.kv_list.length - 1], c = d && d.value, v = u && u.value;
            c = c ? JSON.parse(c) : {
                receiveRecords: [],
                sendCount: 0
            }, v = v ? JSON.parse(v) : {
                receiveRecords: [],
                sendCount: 0
            };
            var f = c && c.receiveRecords.some(function(e) {
                return e.fromOpenid === r;
            }), g = v && v.sendCount >= 1;
            if (!f && !g) {
                c.receiveRecords.push({
                    fromOpenid: r,
                    time: Date.now()
                }), v.sendCount = v.sendCount + 1;
                var l = wx.setFriendUserStorage(t, [ {
                    key: n,
                    value: JSON.stringify(c)
                } ]), p = wx.setFriendUserStorage(r, [ {
                    key: n,
                    value: JSON.stringify(v)
                } ]);
                0 == l.errcode && 0 == p.errcode ? s = !0 : console.error("fail");
            }
        }
        return s ? JSON.stringify({
            ret: !0
        }) : JSON.stringify({
            ret: !1
        });
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        console.error(e.message);
    }
};