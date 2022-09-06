require("adapter-min.js");

__globalAdapter.init();

requirePlugin("cocos");

require("physics-min.js");

__globalAdapter.adaptEngine();

require("./ccRequire");

require("./src/settings");

// Introduce Cocos Service here
// 百兽争霸
window["no_juntuan"] = true;

window["no_login"] = true;

window["hide_logo"] = true;

window["no_share"] = true;

window["new-video-pic"] = true;

// 插屏、视频、banner广告
window["adunit-interstitial"] = "adunit-d682d9e1cd58d067";

window["adunit-video"] = "adunit-a9a13cf5e3d14d0e";

window["adunit-banner"] = "adunit-8b2ab5d3d1e910f2";

// 原生多格广告
window["adunit-line"] = "adunit-e915988f51ab51d6";

// 原生单格广告
window["adunit-single"] = "adunit-78e704827b7f7620";

// 原生矩阵广告
window["adunit-wall"] = [ "adunit-df7d7a0fba794621", "adunit-3f235785b34473aa" ];

// appid
window["game_id"] = 130;

require("./main");

// TODO: move to common
// Adjust devicePixelRatio
cc.view._maxPixelRatio = 4;

if (cc.sys.platform !== cc.sys.WECHAT_GAME_SUB) {
    // Release Image objects after uploaded gl texture
    cc.macro.CLEANUP_IMAGE_CACHE = true;
}

window.boot();