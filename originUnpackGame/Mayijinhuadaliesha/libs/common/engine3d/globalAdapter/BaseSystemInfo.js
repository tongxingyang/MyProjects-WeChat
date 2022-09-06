var e = {
    init: function(e) {
        e && e();
    },
    adaptSys: function(e, a) {
        a || (a = __globalAdapter.getSystemInfoSync()), e.isNative = !1, e.isBrowser = !1, 
        e.isMobile = !0, e.language = a.language.substr(0, 2), e.languageCode = a.language.toLowerCase();
        var o = a.system.toLowerCase(), t = a.platform.toLowerCase();
        "android" === t ? e.os = e.OS_ANDROID : "ios" === t && (e.os = e.OS_IOS), "android p" === o && (o = "android p 9.0");
        var i = /[\d\.]+/.exec(o);
        e.osVersion = i ? i[0] : o, e.osMainVersion = parseInt(e.osVersion), e.browserVersion = a.version;
        var s = a.windowWidth, r = a.windowHeight, n = a.pixelRatio || 1;
        e.windowPixelResolution = {
            width: n * s,
            height: n * r
        }, e.localStorage = window.localStorage;
        var d = !1, l = !1;
        try {
            var g = document.createElement("canvas");
            d = g.getContext("webgl"), l = g.toDataURL("image/webp").startsWith("data:image/webp");
        } catch (e) {}
        e.capabilities = {
            canvas: !0,
            opengl: !!d,
            webp: l
        }, e.__audioSupport = {
            ONLY_ONE: !1,
            WEB_AUDIO: !1,
            DELAY_CREATE_CTX: !1,
            format: [ ".mp3" ]
        };
    }
};

module.exports = e;