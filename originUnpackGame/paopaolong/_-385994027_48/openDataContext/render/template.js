var e = require("../../openDataContext/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

e(require("./dataDemo"));

var t = function(e, t) {
    var a = "openDataContext/render/board_item_2.png", s = "openDataContext/render/img_star.png", i = t.selfIndex, l = -1 == i ? "未入榜" : "" + (i + 1), m = '<view class="container" id="main"> <view class="rankList"> <scrollview class="list" scrollY="true"> ', r = e.data;
    if (r) for (var v, c = -1, n = r.length - 1; c < n; ) v = r[c += 1], m += ' <view class="listItemBgData"> <image class="listItemBg" src="' + (c == i ? a : "openDataContext/render/board_item_1.png") + '"></image> </view> <view class="listItem"> <view id="listItemRankData"> ', 
    c < 3 && (m += ' <image class="listItemTop3" src="openDataContext/render/icon_' + c + '.png"></image> '), 
    m += " ", c > 2 && (m += ' <text class="listItemNum" value="' + (c + 1) + '"></text> '), 
    m += ' <text class="listItemTemp1" value=\'\'></text> </view> <view id="listItemTemp1"> </view> <view id="listItemIconData"> <image class="listHeadImg" src="' + v.avatarUrl + '"></image> </view> <view id="listItemTemp2"> </view> <view id="listItemNickData"> <text class="listItemName" value="' + v.nickname + '"></text> <text class="listItemTemp5" value=""></text> <view id="listItemStarsData"> <view class="listItemStarsBgData"> <image class="listItemStarsBg" src="' + (c == i ? "openDataContext/render/boar_starcount_2.png" : "openDataContext/render/boar_starcount_1.png") + '"></image> </view> <text class="listItemTemp4" value=""></text> <image class="listImgStars" src="' + s + '"></image> <text class="listItemTemp4" value=""></text> <text class="listItemUserStars" value="' + v.stars + '"></text> </view> </view> <view id="listItemTemp3"> </view> <text class="listItemScore" value="第' + v.level + '关"></text> </view> ';
    return m += ' </scrollview> </view><view class="selfItemBgData"><image class="selfItemBg" src="' + a + '"></image></view> <view class="selfItem"> <view id="selfItemRankData"> ', 
    i > -1 && i < 3 && (m += ' <image class="listItemTop3" src="openDataContext/render/icon_' + i + '.png"></image> '), 
    m += " ", (-1 == i || i > 2) && (m += ' <text class="listItemNum" value="' + l + '"></text> '), 
    m += ' <text class="selfItemTemp1" value=\'\'></text> </view> <view id="selfItemTemp1"> </view> <view id="selfItemIconData"> <image class="listHeadImg" src="' + t.avatarUrl + '"></image> </view> <view id="selfItemTemp2"> </view> <view id="selfItemNickData"> <text class="listItemName" value="' + t.nickname + '"></text> <text class="listItemTemp5" value=""></text> <view id="selfItemStarsData"> <view class="listItemStarsBgData"><image class="listItemStarsBg" src="openDataContext/render/boar_starcount_2.png"></image></view> <text class="selfItemTemp4" value=""></text> <image class="listImgStars" src="' + s + '"></image> <text class="selfItemTemp4" value=""></text> <text class="listItemUserStars" value="' + t.stars + '"></text> </view> </view> <view id="selfItemTemp3"> </view> <text class="selfItemScore" value="第' + t.level + '关"></text> </view></view>';
};

exports.default = t;