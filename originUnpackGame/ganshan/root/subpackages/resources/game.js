var global = (function () {
    return this
})();
if (!global && typeof GameGlobal !== 'undefined') global = GameGlobal;
var pluginInfoMap = {};;
global.requirePlugin = global.requirePlugin || function (path) {
    var position = path.indexOf('/');
    var alias = '';
    var pagePath = '';
    if (position !== -1) {
        alias = path.substr(0, position);
        pagePath = path.substr(position + 1, path.length);
    } else {
        alias = path;
    }
    if (pluginInfoMap.hasOwnProperty(alias)) {
        var realPath = '';
        if (pagePath.length === 0) {
            realPath = '__plugin__/' + pluginInfoMap[alias].appid;
            return require(realPath);
        } else {
            realPath = '__plugin__/' + pluginInfoMap[alias].appid + '/' + pagePath;
            return require(realPath);
        }
    } else {
        console.error('not found alias: ', alias);
        throw new Error('Plugin ' + alias + ' is not defined.')
    }
};
define("subpackages/resources/game.js", function (require, module, exports) {
    "use strict";
    var r, e;
    System.register("chunks:///_virtual/maskLayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (r) {
        var e, t, n, o, s, i, a, c, u, l;
        return {
            setters: [function (r) {
                e = r.applyDecoratedDescriptor, t = r.inheritsLoose, n = r.initializerDefineProperty, o = r.assertThisInitialized
            }, function (r) {
                s = r.cclegacy, i = r._decorator, a = r.Node, c = r.Sprite, u = r.Color, l = r.Component
            }]
            , execute: function () {
                var p, f, y, m, v;
                s._RF.push({}, "ac67a17rTpCb639MP8rmrOA", "maskLayer", void 0);
                var k = i.ccclass
                    , h = i.property;
                r("maskLayer", (p = k("maskLayer"), f = h(a), p((v = e((m = function (r) {
                        function e() {
                            for (var e, t = arguments.length, s = new Array(t), i = 0; i < t; i++) s[i] = arguments[i];
                            return e = r.call.apply(r, [this].concat(s)) || this, n(e, "mask", v, o(e)), e
                        }
                        t(e, r);
                        var s = e.prototype;
                        return s.start = function () {}, s.setOpacity = function (r) {
                            var e = this.mask.getComponent(c)
                                , t = new u(e.color.r, e.color.g, e.color.b, 255 * r);
                            e.color = t
                        }, e
                    }(l))
                    .prototype, "mask", [f], {
                        configurable: !0
                        , enumerable: !0
                        , writable: !0
                        , initializer: function () {
                            return null
                        }
                    }), y = m)) || y)), s._RF.pop()
            }
        }
    })), System.register("chunks:///_virtual/resources", ["./maskLayer.ts"], (function () {
        return {
            setters: [null]
            , execute: function () {}
        }
    })), r = "virtual:///prerequisite-imports/resources", e = "chunks:///_virtual/resources", System.register(r, [e], (function (r, e) {
        return {
            setters: [function (e) {
                var t = {};
                for (var n in e) "default" !== n && "__esModule" !== n && (t[n] = e[n]);
                r(t)
            }]
            , execute: function () {}
        }
    }));
});
require("subpackages/resources/game.js");
