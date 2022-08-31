var _classCallCheck2 = require("../opendata/@babel/runtime/helpers/classCallCheck");

var _createClass2 = require("../opendata/@babel/runtime/helpers/createClass");

/*******************************
 * create by lan 
*******************************/ var PAGE_SIZE = 6;

// 滚动列表容器区域可以显示的项数
var ITEM_WIDTH = 475;

var BG_HEIGHT = 98;

var ITEM_HEIGHT = 100;

var KEY_LIST = [ "score" ];

var DES_LIST = [ "分数:" ];

//字段描述 (用于显示  分数：100)
// images
// const rankImgs = [];  //排名
// rankImgs[1] = wx.createImage();
// rankImgs[2] = wx.createImage();
// rankImgs[3] = wx.createImage();
// const itemBg = wx.createImage();
// const selfBg = wx.createImage();
// const beyondBg = wx.createImage();      //即将超越好友背景
// const starImg = wx.createImage();
// 头像图片数据缓存
var avatarCatchs = {};

// rankImgs[1].src = 'opendata/img/rank_1.png';
// rankImgs[2].src = 'opendata/img/rank_2.png';
// rankImgs[3].src = 'opendata/img/rank_3.png';
// itemBg.src = 'opendata/img/item_bg.png';
// selfBg.src = 'opendata/img/myself_bg.png';
// beyondBg.src = 'opendata/img/beyondBg.png';
// starImg.src = 'opendata/img/star.png';
/************************************/
/************************************/ var RankListRenderer = /* */ function() {
    function RankListRenderer() {
        _classCallCheck2(this, RankListRenderer);
        this.offsetY = 0;
        this.maxOffsetY = 0;
        this.RankType = 0;
        this.myOpenId = "";
        this.gameDatas = [];
        //https://developers.weixin.qq.com/minigame/dev/document/open-api/data/UserGameData.html
                this.curRankDatas = [];
        this.myData = 0;
        this.init();
    }
    _createClass2(RankListRenderer, [ {
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
                  case "getFriend":
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
                // keyList: KEY_LIST,
                success: function success(res) {
                    var dataLen = res.list.length;
                    console.log("=====", res);
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
                            temp.avatarUrl = "opendata/img/head".concat(i + 1, ".png");
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
            var startY = offsetY % ITEM_HEIGHT;
            var startIndex = Math.floor(offsetY / ITEM_HEIGHT);
            var stopIndex = startIndex + PAGE_SIZE + (startY == 0 ? 0 : 1);
            var datas = this.curRankDatas.slice(startIndex, stopIndex + 1);
            this.ctx.clearRect(0, 0, 800, 800);
            for (var i = 0, len = datas.length; i < len; i++) {
                this.drawRankItem(this.ctx, i, startIndex + i + 1, datas[i], startY);
            }
            // this.ctx.drawImage(bgBottom, 5, ITEM_HEIGHT * 3.55, 555, 185);
            // this.drawRankItem(this.ctx, 3.7, this.myRank + 1, this.myData, 0, this.offsetY);
                }
        // 头像
        }, {
        key: "drawAvatar",
        value: function drawAvatar(ctx, avatarUrl, x, y, w, h, cb) {
            if (avatarUrl.indexOf("https") > -1) {
                avatarUrl = avatarUrl.substr(0, avatarUrl.lastIndexOf("/")) + "/132";
            }
            console.log(avatarUrl);
            // ctx.fillStyle = "#C8C8C864";
            // ctx.fillRect(x - 5, y - 5, w + 10, h + 10);
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
            // 背景
            // var itemBgImg = itemBg;
            // if (data.openid == this.myOpenId) {
            //     itemBgImg = selfBg;
            //     // nick += "  (自己)"
            // };
            // ctx.drawImage(itemBgImg, 0, itemGapY, ITEM_WIDTH, BG_HEIGHT);
            //头像
                        var avatarX = 0;
            var avatarY = 0 + itemGapY;
            var avatarW = 80;
            var avatarH = 80;
            if (avatarCatchs[data.openid]) {
                // ctx.fillStyle = "#C8C8C864";
                // ctx.fillRect(avatarX - 2, avatarY - 2, avatarW + 4, avatarH + 4);
                ctx.drawImage(avatarCatchs[data.openid], avatarX, avatarY, avatarW, avatarH);
            } else {
                this.drawAvatar(ctx, data.avatarUrl, avatarX, avatarY, avatarW, avatarH, function(avatarImg) {
                    avatarCatchs[data.openid] = avatarImg;
                    // ctx.fillStyle = "#C8C8C864";
                    // ctx.fillRect(avatarX - 2, avatarY - 2, avatarW + 4, avatarH + 4);
                                        ctx.drawImage(avatarImg, avatarX, avatarY, avatarW, avatarH);
                });
            }
            // 性别
            // ctx.drawImage(gender === 1 ? iconMan : iconWomen, 280, 40 + itemGapY, 21, 34);
            //名字
                        ctx.fillStyle = "#FFFFFF";
            // ctx.fillStyle = "#5d3422";
                        ctx.textAlign = "left";
            ctx.baseLine = "middle";
            ctx.font = "25px Helvetica";
            ctx.fillText(nick, 100, 25 + itemGapY);
        }
        //====================================
        // 即将超越好友
        //====================================
        } ]);
    return RankListRenderer;
}();

var rankList = new RankListRenderer();

rankList.listen();