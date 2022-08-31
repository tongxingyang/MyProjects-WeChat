var _classCallCheck2 = require("../wx-sub/@babel/runtime/helpers/classCallCheck");

var _createClass2 = require("../wx-sub/@babel/runtime/helpers/createClass");

/*******************************
 * create by lan 
*******************************/ var PAGE_SIZE = 6;

// 滚动列表容器区域可以显示的项数
var ITEM_HEIGHT = 100;

// 头像图片数据缓存
var avatarCatchs = {};

/************************************/ var FriendRecommend = /* */ function() {
    function FriendRecommend() {
        _classCallCheck2(this, FriendRecommend);
        this.myOpenId = "";
        this.curRankDatas = [];
        this.init();
    }
    _createClass2(FriendRecommend, [ {
        key: "init",
        value: function init() {
            this.canvas = wx.getSharedCanvas();
            this.ctx = this.canvas.getContext("2d");
            this.ctx.imageSmoothingEnabled = true;
            this.ctx.imageSmoothingQuality = "high";
        }
    }, {
        key: "listen",
        value: function listen() {
            var _this = this;
            //msg -> {action, data}
                        wx.onMessage(function(msg) {
                switch (msg.action) {
                  case "FRIEND_RECOMMENDED":
                    _this.myOpenId = _this.myOpenId || msg.openId;
                    _this.showFriendInfo();
                    break;

                  default:
                    // console.log(`未知消息类型:msg.action=${msg.action}`);
                    break;
                }
            });
        }
        // 显示3位好友信息
        }, {
        key: "showFriendInfo",
        value: function showFriendInfo() {
            var _this2 = this;
            var map = [];
            //取出所有好友数据
                        wx.getPotentialFriendList({
                success: function success(res) {
                    var dataLen = res.list.length;
                    // console.log('=====', res)
                                        if (dataLen < 2) {// 没有好友在玩
                    } else {
                        var count = 0;
                        for (var i = 0; i < dataLen; ++i) {
                            var item = res.list[i];
                            if (item.openid == _this2.myOpenId) {} else {
                                map.push(item);
                                count++;
                                if (count >= 3) break;
                            }
                        }
                    }
                    if (map.length < 3) {
                        var dt = 3 - map.length;
                        var tempItem = map[0] || {
                            nickname: "",
                            avatarUrl: ""
                        };
                        for (var i = 0; i < dt; ++i) {
                            var temp = JSON.parse(JSON.stringify(tempItem));
                            temp.avatarUrl = "FriendRecommend/head".concat(i + 1, ".png");
                            map.push(temp);
                        }
                    }
                    _this2.curRankDatas = map;
                    _this2.showRanks(0);
                },
                fail: function fail(res) {
                    console.log("wx.getFriendCloudStorage fail", res);
                }
            });
        }
        //显示数据
        }, {
        key: "showRanks",
        value: function showRanks(offsetY) {
            console.log("===显示信息");
            var startY = offsetY % ITEM_HEIGHT;
            var startIndex = Math.floor(offsetY / ITEM_HEIGHT);
            var stopIndex = startIndex + PAGE_SIZE + (startY == 0 ? 0 : 1);
            var datas = this.curRankDatas.slice(startIndex, stopIndex + 1);
            this.ctx.clearRect(0, 0, 800, 800);
            for (var i = 0, len = datas.length; i < len; i++) {
                this.drawRankItem(this.ctx, i, startIndex + i + 1, datas[i], startY);
            }
        }
        // 头像
        }, {
        key: "drawAvatar",
        value: function drawAvatar(ctx, avatarUrl, x, y, w, h, cb) {
            if (avatarUrl.indexOf("https") > -1) {
                avatarUrl = avatarUrl.substr(0, avatarUrl.lastIndexOf("/")) + "/132";
            }
            console.log(avatarUrl);
            var avatarImg = wx.createImage();
            avatarImg.src = avatarUrl;
            avatarImg.onload = function() {
                cb(avatarImg);
            };
        }
        //canvas原点在左上角
        }, {
        key: "drawRankItem",
        value: function drawRankItem(ctx, index, rank, data, startY) {
            var nick = data.nickname.length <= 6 ? data.nickname : data.nickname.substr(0, 6) + "...";
            var itemGapY = ITEM_HEIGHT * index - startY;
            //头像
                        var avatarX = 0;
            var avatarY = 0 + itemGapY;
            var avatarW = 80;
            var avatarH = 80;
            if (avatarCatchs[data.openid]) {
                ctx.drawImage(avatarCatchs[data.openid], avatarX, avatarY, avatarW, avatarH);
            } else {
                this.drawAvatar(ctx, data.avatarUrl, avatarX, avatarY, avatarW, avatarH, function(avatarImg) {
                    avatarCatchs[data.openid] = avatarImg;
                    ctx.drawImage(avatarImg, avatarX, avatarY, avatarW, avatarH);
                });
            }
            //名字
                        ctx.fillStyle = "#FFFFFF";
            ctx.textAlign = "left";
            ctx.baseLine = "middle";
            ctx.font = "25px Helvetica";
            ctx.fillText(nick, 100, 25 + itemGapY);
        }
    } ]);
    return FriendRecommend;
}();

var rankList = new FriendRecommend();

rankList.listen();