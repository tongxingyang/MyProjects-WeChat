function e(e) {
    var r = e.url;
    return __globalAdapter.loadFont(r) || "Arial";
}

function r(e) {
    if (e._owner instanceof cc.Asset) return null;
    var r = e.content, n = e.rawUrl, o = e.imageAsset || new cc.ImageAsset();
    return o._uuid = e.uuid, o._url = n, o._setRawAsset(n, !1), o._nativeAsset = r, 
    o;
}

function n(e, r, o) {
    void 0 === o && (o = !0);
    var t = e.url, a = new Image();
    function i() {
        a.removeEventListener("load", i), a.removeEventListener("error", c), a.id = e.id, 
        r(null, a);
    }
    function c() {
        a.removeEventListener("load", i), a.removeEventListener("error", c), "https:" !== window.location.protocol && a.crossOrigin && "anonymous" === a.crossOrigin.toLowerCase() ? n(e, r, !1) : r(new Error(cc.debug.getError(4930, t)));
    }
    o && "file:" !== window.location.protocol ? a.crossOrigin = "anonymous" : a.crossOrigin = null, 
    a.addEventListener("load", i), a.addEventListener("error", c), a.src = t;
}

function o(e, r) {
    if (0 === cc.sys.__audioSupport.format.length) return new Error(debug.getError(4927));
    !function(e, r) {
        var n = __globalAdapter.createInnerAudioContext();
        n.src = e.url, r(null, n);
    }(e, r);
}

cc.loader.downloader.loadSubpackage = function(e, r) {
    __globalAdapter.loadSubpackage({
        name: e,
        success: function() {
            System.import("virtual:///prerequisite-imports/" + e).then(function() {
                r && r();
            }).catch(function(e) {
                r && r(e);
            });
        },
        fail: function() {
            r && r(new Error("Failed to load subpackage ".concat(e)));
        }
    });
}, cc.loader.downloader.addHandlers({
    js: function(e, r, n) {
        var o = "../../../" + e.url;
        require(o), r(null, e.url);
    },
    png: n,
    jpg: n,
    bmp: n,
    jpeg: n,
    gif: n,
    ico: n,
    tiff: n,
    webp: n,
    image: n,
    mp3: o,
    ogg: o,
    wav: o,
    m4a: o
}), cc.loader.loader.addHandlers({
    png: r,
    jpg: r,
    bmp: r,
    jpeg: r,
    gif: r,
    ico: r,
    tiff: r,
    webp: r,
    image: r,
    font: e,
    eot: e,
    ttf: e,
    woff: e,
    svg: e,
    ttc: e
});