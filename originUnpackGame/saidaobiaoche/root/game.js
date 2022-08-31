var _typeof2 = require("@babel/runtime/helpers/typeof");

var c1sdj_0x29e5 = [ "init", "boot", "DOMParser", "./libs/common/engine/globalAdapter/index", "./libs/wrapper/unify", "flconsts", "aldSendEvent", "游戏加载_游戏启动", "https://game-api.feigo.fun", "getLaunchOptionsSync", "request", "data", "string", "parse", "log", "游戏加载_pre-config请求成功", "eReviewSwitch", "bind", "loadSubpackage", "sub_pack", "sub_pack2", "cocos/cocos2d-js-min.js", "./libs/common/engine/index", "./main", "view", "wxDownloader", "SUBCONTEXT_ROOT", "loader", "subPackPipe", "md5Pipe", "assetLoader", "insertPipeAfter", "sys", "platform", "src/subdomain.json.js", "game", "once", "EVENT_ENGINE_INITED", "PackDownloader", "./libs/wrapper/sub-context-adapter", "macro", "CLEANUP_IMAGE_CACHE" ];

(function(_0x54aeab, _0x5cd1bd) {
    var _0x292f7f = function _0x292f7f(_0x2914ab) {
        while (--_0x2914ab) {
            _0x54aeab["push"](_0x54aeab["shift"]());
        }
    };
    _0x292f7f(++_0x5cd1bd);
})(c1sdj_0x29e5, 128);

var c1sdj_0x2d16 = function c1sdj_0x2d16(_0x1e5de4, _0x2c09e5) {
    _0x1e5de4 = _0x1e5de4 - 0;
    var _0x481831 = c1sdj_0x29e5[_0x1e5de4];
    return _0x481831;
};

require("./libs/wrapper/builtin/index");

window[c1sdj_0x2d16("0x0")] = require("./libs/common/xmldom/dom-parser")[c1sdj_0x2d16("0x0")];

require(c1sdj_0x2d16("0x1"));

require(c1sdj_0x2d16("0x2"));

require("./libs/wrapper/systemInfo");

require(c1sdj_0x2d16("0x3"));

require("utils/ald-game");

wx[c1sdj_0x2d16("0x4")](c1sdj_0x2d16("0x5"));

var c1sdj_0xd2c8cd;

var c1sdj_0x435aa9 = function c1sdj_0x435aa9() {
    var _0xadf689 = c1sdj_0x2d16("0x6");
    var _0x5e9f40 = wx[c1sdj_0x2d16("0x7")]();
    wx[c1sdj_0x2d16("0x8")]({
        url: _0xadf689 + "/api/config/pre-config",
        data: {},
        header: {
            "client-ver": window["APP_VERSION"],
            scene: _0x5e9f40["scene"]
        },
        method: "GET",
        success: function success(_0x58e69e) {
            clearInterval(c1sdj_0xd2c8cd);
            if (_typeof2(_0x58e69e[c1sdj_0x2d16("0x9")]) === c1sdj_0x2d16("0xa")) {
                _0x58e69e[c1sdj_0x2d16("0x9")] = JSON[c1sdj_0x2d16("0xb")](_0x58e69e[c1sdj_0x2d16("0x9")]);
            }
            console[c1sdj_0x2d16("0xc")]("res.data", _0x58e69e[c1sdj_0x2d16("0x9")]);
            wx["aldSendEvent"](c1sdj_0x2d16("0xd"));
            window[c1sdj_0x2d16("0xe")] = _0x58e69e[c1sdj_0x2d16("0x9")][c1sdj_0x2d16("0xe")];
        },
        fail: function fail(_0x5e17d4) {},
        complete: function complete() {}
    });
};

c1sdj_0xd2c8cd = setInterval(function() {
    c1sdj_0x435aa9();
}[c1sdj_0x2d16("0xf")](void 0), 2e3);

c1sdj_0x435aa9();

wx[c1sdj_0x2d16("0x10")]({
    name: c1sdj_0x2d16("0x11"),
    success: function success() {
        wx[c1sdj_0x2d16("0x10")]({
            name: c1sdj_0x2d16("0x12"),
            success: function success() {
                window["__globalAdapter"]["init"](function() {
                    require("./src/settings");
                    require(c1sdj_0x2d16("0x13"));
                    require(c1sdj_0x2d16("0x14"));
                    require(c1sdj_0x2d16("0x15"));
                    require("./libs/common/remote-downloader");
                    cc[c1sdj_0x2d16("0x16")]["_maxPixelRatio"] = 4;
                    window[c1sdj_0x2d16("0x17")] = remoteDownloader;
                    remoteDownloader["REMOTE_SERVER_ROOT"] = "";
                    remoteDownloader[c1sdj_0x2d16("0x18")] = "";
                    var _0x2c9c19 = cc[c1sdj_0x2d16("0x19")][c1sdj_0x2d16("0x1a")] || cc["loader"][c1sdj_0x2d16("0x1b")] || cc[c1sdj_0x2d16("0x19")][c1sdj_0x2d16("0x1c")];
                    cc[c1sdj_0x2d16("0x19")][c1sdj_0x2d16("0x1d")](_0x2c9c19, remoteDownloader);
                    if (cc[c1sdj_0x2d16("0x1e")][c1sdj_0x2d16("0x1f")] === cc[c1sdj_0x2d16("0x1e")]["WECHAT_GAME_SUB"]) {
                        var _0x2b300b = require(c1sdj_0x2d16("0x20"));
                        cc[c1sdj_0x2d16("0x21")][c1sdj_0x2d16("0x22")](cc[c1sdj_0x2d16("0x21")][c1sdj_0x2d16("0x23")], function() {
                            cc["Pipeline"]["Downloader"][c1sdj_0x2d16("0x24")]["_doPreload"]("SUBDOMAIN_DATA", _0x2b300b);
                        });
                        require(c1sdj_0x2d16("0x25"));
                    } else {
                        cc[c1sdj_0x2d16("0x26")][c1sdj_0x2d16("0x27")] = !![];
                    }
                    remoteDownloader[c1sdj_0x2d16("0x28")]();
                });
                window[c1sdj_0x2d16("0x29")]();
            }
        });
    },
    fail: function fail() {},
    complete: function complete() {}
});