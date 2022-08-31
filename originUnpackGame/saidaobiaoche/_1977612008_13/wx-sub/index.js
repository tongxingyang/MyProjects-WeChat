var _toConsumableArray2 = require("../wx-sub/@babel/runtime/helpers/toConsumableArray");

console.log("load wx-sub");

// const adjoinRank = require('./adjoinRank.js');
// const friendAllRank = require('./friendAllRank.js');
// const targetRank = require('./targetRank.js');
// const currentByScoreRank = require('./currentByScoreRank.js');
var friendRecommend = require("./FriendRecommend.js");

var canvas = wx.getSharedCanvas();

var ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = true;

ctx.imageSmoothingQuality = "high";

// 是否调试模式
var isDebug = false;

// 主域传递过来的数据
var mainMsg;

// 玩家头像缓存防止闪烁
var avatars = {};

// 当前显示的排行榜类型
var rankType = "";

// 好友数据缓存
var friendDatas = [];

// 转换数据未key-value形式
var convertData = function convertData(datas) {
    datas.map(function(data) {
        data.KVDataList.map(function(kv) {
            if (kv.key === mainMsg.sortKey) {
                data[kv.key] = Number(kv.value);
            } else {
                data[kv.key] = kv.value;
            }
        });
        return data;
    });
    if (isDebug || mainMsg.isDebug) {
        var i = 3;
        datas.map(function(data) {
            // data['score'] = Math.floor(Math.random() * 1000);
            data["score"] = i;
            ++i;
            return data;
        });
    }
    // 排序
        datas.sort(function(a, b) {
        if (a[mainMsg.sortKey || "nickname"] == b[mainMsg.sortKey || "nickname"]) {
            return a.nickname < b.nickname ? 1 : -1;
        } else {
            return a[mainMsg.sortKey] < b[mainMsg.sortKey] ? 1 : -1;
        }
    });
    for (var _i = 0; _i < datas.length; ++_i) {
        datas[_i].index = _i + 1;
    }
    friendDatas = _toConsumableArray2(datas);
    return _toConsumableArray2(datas);
};

// 获取好友数据
var getFriendDatas = function getFriendDatas(msg, callback) {
    wx.getFriendCloudStorage({
        keyList: msg.keyList,
        success: function success(res) {
            return callback(null, convertData(res.data));
        },
        fail: function fail(err) {
            return callback(err);
        },
        complete: function complete(res) {}
    });
};

// 获取群友数据
var getGroupDatas = function getGroupDatas(msg, callback) {
    wx.getGroupCloudStorage({
        keyList: msg.keyList,
        success: function success(res) {
            return callback(null, convertData(res.data));
        },
        fail: function fail(err) {
            return callback(err);
        },
        complete: function complete(res) {}
    });
};

// 显示好友排行榜
var onFriendRank = function onFriendRank(err, datas) {
    if (err) {
        if (friendDatas.length > 0) {
            datas = friendDatas;
        } else {
            return console.log("err:", err);
        }
    }
    // 显示排行
        friendAllRank.init(ctx, datas, mainMsg, avatars);
};

// 显示群排行榜
var onGroupRank = function onGroupRank(err, datas) {// pageItemCount = mainMsg.pageItemCount || 6;
    // pageItemOneCount = mainMsg.pageItemOneCount || 5;
    // itemWidth = mainMsg.itemWidth || 600;
    // itemHeight = mainMsg.itemHeight || 130;
    // maxOffsetHeight = itemHeight * datas.length;
    // gameDatas = datas;
    // // 显示排行
    // showRank();
};

// 显示相邻排行榜
var onAdjoinRank = function onAdjoinRank(err, datas) {
    if (err) {
        if (friendDatas.length > 0) {
            datas = friendDatas;
        } else {
            return console.log("err:", err);
        }
    }
    // 查找到自己
        var index = -1;
    for (var i = 0; i < datas.length; ++i) {
        if (datas[i].openid === mainMsg.openid) {
            index = i;
            break;
        }
    }
    // 没找到自己
        if (index === -1) {
        return;
    }
    var result = [];
    if (datas.length <= 3) {
        result = _toConsumableArray2(datas);
    } else if (datas[index - 1] && datas[index + 1]) {
        result.push(datas[index - 1]);
        result.push(datas[index]);
        result.push(datas[index + 1]);
    } else if (datas[index - 2] && datas[index - 1]) {
        result.push(datas[index - 2]);
        result.push(datas[index - 1]);
        result.push(datas[index]);
    } else if (datas[index + 1] && datas[index + 2]) {
        result.push(datas[index]);
        result.push(datas[index + 1]);
        result.push(datas[index + 2]);
    }
    // 绘制排行榜
        adjoinRank.init(ctx, result, mainMsg, avatars);
};

// 显示下一个目标(即将超越)
var onNextTargetRank = function onNextTargetRank(err, datas) {
    if (err) {
        if (friendDatas.length > 0) {
            datas = friendDatas;
        } else {
            return console.log("err:", err);
        }
    }
    if (!datas || datas.length === 0) {
        return;
    }
    // 查找到自己
        var index = -1;
    for (var i = 0; i < datas.length; ++i) {
        if (datas[i].openid === mainMsg.openid) {
            index = i;
            break;
        }
    }
    // 没找到自己
        if (index === -1) {
        // 取最后一个
        return targetRank.init(ctx, datas[datas.length - 1], mainMsg, avatars);
    }
    // 前一个
        targetRank.init(ctx, datas[index - 1], mainMsg, avatars);
};

// 显示某个分数的玩家头像
var onCurrentByScoreRank = function onCurrentByScoreRank(err, datas) {
    if (err) {
        if (friendDatas.length > 0) {
            datas = friendDatas;
        } else {
            return console.log("err:", err);
        }
    }
    if (!datas || datas.length === 0) {
        return;
    }
    var data;
    for (var i = 0; i < datas.length; ++i) {
        if (datas[i][mainMsg.sortKey || "score"] === mainMsg.score) {
            data = datas[i];
            break;
        }
    }
    if (!data) {
        return ctx.clearRect(0, 0, mainMsg.canvasWidth || 1e3, mainMsg.canvasHeight || 2e3);
    }
    // 前一个
        currentByScoreRank.init(ctx, data, mainMsg, avatars);
};

// 滚动排行榜
var onScroll = function onScroll(msg) {
    switch (rankType) {
      case "ALL_FRIEND":
        friendAllRank.onScroll(msg.offsetY);
        break;

      case "ALL_GROUP":
        break;

      case "ADJOIN":
        break;

      case "TARGET":
        break;

      case "PASS":
        break;

      default:
        break;
    }
};

// 显示好友推荐位的头像以及名称
var onShowFriendRecommend = function onShowFriendRecommend(err, datas) {
    console.log("=====1111");
    friendRecommend.init();
};

console.log("load wx-sub 监听主域消息");

// 监听主域消息
wx.onMessage(function(msg) {
    isDebug = msg.isDebug;
    isDebug && console.log("onMessage msg:", msg);
    if (isDebug) {
        // 正式环境openID
        msg.openid = "ooc6K5dxf5qP8Qu5X81lInp9NTLA";
    }
    mainMsg = msg;
    switch (msg.event) {
      case "ALL_FRIEND":
        rankType = "ALL_FRIEND";
        getFriendDatas(msg, onFriendRank);
        break;

      case "ALL_GROUP":
        rankType = "ALL_GROUP";
        getGroupDatas(msg, onGroupRank);
        break;

      case "ADJOIN":
        rankType = "ADJOIN";
        getFriendDatas(msg, onAdjoinRank);
        break;

      case "TARGET":
        rankType = "TARGET";
        getFriendDatas(msg, onNextTargetRank);
        break;

      case "CURRENT_SCORE":
        if (!mainMsg.score) {
            return;
        }
        rankType = "CURRENT_SCORE";
        getFriendDatas(msg, onCurrentByScoreRank);
        break;

      case "PASS":
        rankType = "PASS";
        break;

      case "SCROLL":
        onScroll(msg);
        break;

      case "FRIEND_RECOMMENDED":
        onShowFriendRecommend(msg);
        break;

      default:
        console.log("主域消息:", msg);
        break;
    }
});