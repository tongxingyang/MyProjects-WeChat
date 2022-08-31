var c8j7sa = [ "scene", "getTime", "log", "===> 分包加载成功_", "view", "boot" ];

(function(c, d) {
    var e = function e(f) {
        while (--f) {
            c["push"](c["shift"]());
        }
    };
    e(++d);
})(c8j7sa, 148);

var c8j7sb = function c8j7sb(c, d) {
    c = c - 0;
    var e = c8j7sa[c];
    return e;
};

"use strict";

require("./utils/fl_analyse");

require("./flconsts");

require("adapter-min.js");

__globalAdapter["init"]();

function c8j7s_h() {
    requirePlugin("cocos");
    __globalAdapter["adaptEngine"]();
    require("./ccRequire");
    require("./src/fl-framework-assets/Framework/FLBehavior");
}

c8j7s_h();

function c8j7s_i() {
    require("mj-src/settings");
    c8j7s_k();
}

function c8j7s_j() {
    require("./src/settings");
    c8j7s_k();
}

function c8j7s_k(l) {
    require("./main");
    cc[c8j7sb("0x0")]["_maxPixelRatio"] = 4;
    window["wxDownloader"] = remoteDownloader;
    remoteDownloader["REMOTE_SERVER_ROOT"] = "";
    remoteDownloader["SUBCONTEXT_ROOT"] = "";
    var m = cc["loader"]["subPackPipe"] || cc["loader"]["md5Pipe"] || cc["loader"]["assetLoader"];
    cc["loader"]["insertPipeAfter"](m, remoteDownloader);
    if (cc["sys"]["platform"] === cc["sys"]["WECHAT_GAME_SUB"]) {
        var n = require("src/subdomain.json.js");
        cc["game"]["once"](cc["game"]["EVENT_ENGINE_INITED"], function() {
            cc["Pipeline"]["Downloader"]["PackDownloader"]["_doPreload"]("SUBDOMAIN_DATA", n);
        });
    } else {
        cc["macro"]["CLEANUP_IMAGE_CACHE"] = !![];
    }
    remoteDownloader["init"]();
    window[c8j7sb("0x1")]();
}

var c8j7s_o, c8j7s_p;

var c8j7s_q = function c8j7s_q() {
    var _this = this;
    var r = "https://game-api.feigo.fun";
    var s = wx["getLaunchOptionsSync"]();
    wx["request"]({
        url: r + "/api/config/pre-config",
        data: {},
        header: {
            "client-ver": window["APP_VERSION"],
            scene: s[c8j7sb("0x2")]
        },
        method: "GET",
        success: function success(t) {
            clearInterval(c8j7s_o);
            if (typeof t["data"] === "string") {
                t["data"] = JSON["parse"](t["data"]);
            }
            console["log"]("res.data", t["data"]);
            window["reviewSwitch"] = 0;
            if (t["data"] && t["data"]["reviewSwitch"] === 0) {
                window["eReviewSwitch"] = t["data"]["eReviewSwitch"];
                c8j7s_v();
                c8j7s_j();
                c8j7s_p = setInterval(function() {
                    c8j7s_v();
                }["bind"](_this), 2e3);
            } else {
                window["reviewSwitch"] = 1;
                c8j7s_v();
                c8j7s_j();
                c8j7s_p = setInterval(function() {
                    c8j7s_v();
                }["bind"](_this), 2e3);
            }
        },
        fail: function fail(u) {
            clearInterval(c8j7s_o);
            c8j7s_v();
            c8j7s_j();
            c8j7s_p = setInterval(function() {
                c8j7s_v();
            }["bind"](_this), 2e3);
        },
        complete: function complete() {}
    });
};

c8j7s_q();

var c8j7s_v = function c8j7s_v() {
    var w = new Date()["getTime"]();
    window["loadSubpack"] = ![];
    wx["loadSubpackage"]({
        name: "subpack",
        success: function success() {
            clearInterval(c8j7s_p);
            window["loadSubpack"] = !![];
            cc["systemEvent"]["emit"]("ON_LOADSUBPACK_COMPLETE", !![]);
            console["log"]("===> 分包加载成功_" + ((new Date()["getTime"]() - w) / 1e3)["toFixed"](1));
            wx["aldSendEvent"]("分包加载成功_" + ((new Date()["getTime"]() - w) / 1e3)["toFixed"](1));
        },
        fail: function fail() {
            console["log"]("分包加载失败_" + ((new Date()["getTime"]() - w) / 1e3)["toFixed"](1));
            wx["aldSendEvent"]("分包加载失败_" + ((new Date()["getTime"]() - w) / 1e3)["toFixed"](1));
        },
        complete: function complete() {}
    });
};

var c8j7s_x = function c8j7s_x() {
    var y = new Date()[c8j7sb("0x3")]();
    window["loadSubpack"] = ![];
    wx["loadSubpackage"]({
        name: "mj-res",
        success: function success() {
            clearInterval(c8j7s_p);
            window["loadSubpack"] = !![];
            c8j7s_i();
            console[c8j7sb("0x4")](c8j7sb("0x5") + ((new Date()["getTime"]() - y) / 1e3)["toFixed"](1));
            wx["aldSendEvent"]("分包加载成功_" + ((new Date()["getTime"]() - y) / 1e3)["toFixed"](1));
        },
        fail: function fail() {
            console["log"]("分包加载失败_" + ((new Date()["getTime"]() - y) / 1e3)["toFixed"](1));
            wx["aldSendEvent"]("分包加载失败_" + ((new Date()["getTime"]() - y) / 1e3)["toFixed"](1));
        },
        complete: function complete() {}
    });
};