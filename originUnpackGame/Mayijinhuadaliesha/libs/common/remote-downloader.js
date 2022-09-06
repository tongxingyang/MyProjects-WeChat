var e = "RemoteDownloader", t = require("../wrapper/fs-utils"), i = /^\w+:\/\/.*/, n = (__globalAdapter.isSubContext, 
null), r = null, c = null, l = null, a = !1, o = /the maximum size of the file storage/, s = {};

function u() {
    this.id = e, this.async = !0, this.pipeline = null, this.REMOTE_SERVER_ROOT = "", 
    this.SUBCONTEXT_ROOT = "";
}

function f(e, i) {
    !e.type || O(e.type) >= A.LOADABLE_MIN ? function(e, i) {
        var n = e.url, r = t.readText;
        O(e.type) === A.BIN && (r = t.readArrayBuffer);
        var c = r(n, function(t, r) {
            t ? i(t) : r ? (e.states[cc.loader.downloader.id] = cc.Pipeline.ItemState.COMPLETE, 
            i(null, r)) : i(new Error("Empty file: " + n));
        });
        c && i(c);
    }(e, i) : i(null, null);
}

u.ID = e, u.prototype.init = function() {
    if (!__globalAdapter.isSubContext) {
        this.cacheDir = t.getUserDataPath() + "/gamecaches", this.cachedFileName = "cacheList.json", 
        this.cacheAsset = !0, this.cachePeriod = 100, this.outOfStorage = !1, this.writeFilePeriod = 1e3, 
        l = {}, n = {};
        var e = this.cacheDir + "/" + this.cachedFileName;
        (r = t.readJsonSync(e)) instanceof Error && (r = {}, t.makeDirSync(this.cacheDir, !0), 
        t.writeFileSync(e, JSON.stringify(r), "utf8"));
    }
}, u.prototype.handle = function(e, c) {
    if ("js" === e.type) return null;
    if ("uuid" === e.type) {
        var l = cc.Pipeline.Downloader.PackDownloader.load(e, c);
        if (void 0 !== l) return l || void 0;
    }
    if (__globalAdapter.isSubContext) return i.test(e.url) ? null : (e.url = this.SUBCONTEXT_ROOT + "/" + e.url, 
    t.checkFsValid() ? null : void f(e, c));
    function a(n) {
        n ? f(e, c) : function(e, n) {
            var c = t.checkFsValid();
            if (c) return void n(c);
            var l = h.getCacheName(e.url), a = h.cacheDir + "/" + l;
            if (l in r) s[l] = !0, e.url = a, d(e, l), f(e, n); else {
                if (!h.REMOTE_SERVER_ROOT) return void n(null, null);
                !function(e, n) {
                    var r = e.url;
                    if (i.test(r)) return void n(null, null);
                    var c = h.REMOTE_SERVER_ROOT + "/" + r;
                    e.url = c;
                    var l = h.getCacheName(r);
                    cc.sys.os === cc.sys.OS_ANDROID && e.type && O(e.type) === A.IMAGE ? (h.cacheAsset && (p(c, !1, l), 
                    d(e, l)), n(null, null)) : t.downloadFile(c, void 0, function(t, i) {
                        t ? n(t, null) : (e.url = i, h.cacheAsset && (p(i, !0, l), d(e, l)), f(e, n));
                    });
                }(e, n);
            }
        }(e, c);
    }
    e.url in n ? a(n[e.url]) : t.exists(e.url, function(t) {
        n[e.url] = t, a(t);
    });
}, u.prototype.cleanOldAssets = function() {
    return cc.warn("remoteDownloader.cleanOldAssets has been deprecated, please use remoteDownloader.cleanOldCaches instead!"), 
    this.cleanOldCaches();
}, u.prototype.cleanOldCaches = function() {
    this.cleanAllCaches(s, function(e) {
        if (e) cc.warn(e); else {
            for (var t in s) cc.log("reserve local file: " + t);
            cc.log("Clean old Assets successfully!");
        }
    });
}, u.prototype.getCacheName = function(e) {
    return e.replace(/\//g, "-");
}, u.prototype.getCachedFileList = function() {
    return r;
}, u.prototype.cleanCache = function(e) {
    if (e in r) {
        var i = this;
        delete r[e], t.writeFileSync(this.cacheDir + "/" + this.cachedFileName, JSON.stringify(r), "utf8"), 
        t.deleteFile(this.cacheDir + "/" + e, function(e) {
            e || (i.outOfStorage = !1);
        });
    }
}, u.prototype.cleanAllAssets = function() {
    cc.warn("remoteDownloader.cleanAllAssets has been deprecated, please use cleanAllCaches instead!"), 
    this.cleanAllCaches(null, function(e) {
        e && cc.error(e.message);
    });
}, u.prototype.cleanAllCaches = function(e, i) {
    e = e || {};
    var n = this, c = t.readDir(n.cacheDir, function(c, a) {
        if (c) i && i(c); else {
            for (var o = [], s = 0, u = a.length; s < u; s++) {
                var f = a[s];
                f !== n.cachedFileName && (f in e || (f in l ? delete l[f] : (delete r[f], o.push(f))));
            }
            t.writeFileSync(n.cacheDir + "/" + n.cachedFileName, JSON.stringify(r), "utf8");
            var h = 0;
            for (s = 0, u = o.length; s < u; s++) t.deleteFile(n.cacheDir + "/" + o[s], function(e) {
                e || (n.outOfStorage = !1), ++h === u && i && i(null);
            });
        }
    });
    c && i(c);
};

var h = window.remoteDownloader = new u();

function d(e, t) {
    cc.LoadingItems.getQueue(e).addListener(e.id, function(e) {
        e.error && (e.url in l ? delete l[e.url] : h.cleanCache(t));
    });
}

function p(e, i, n) {
    if (l[e] = {
        isCopy: i,
        cachePath: n
    }, !a) {
        a = !0, setTimeout(function e() {
            for (var i in a = !1, l) {
                if (!h.outOfStorage) {
                    var n = l[i], c = h.cacheDir + "/" + n.cachePath, s = t.copyFile;
                    n.isCopy || (s = t.downloadFile), s(i, c, function(t) {
                        t ? o.test(t.message) && (h.outOfStorage = !0) : (r[n.cachePath] = 1, E(), T(l) || a || (a = !0, 
                        setTimeout(e, h.cachePeriod)));
                    }), delete l[i];
                }
                return;
            }
        }, h.cachePeriod);
    }
}

function E() {
    !c && (c = setTimeout(function() {
        c = null, t.writeFile(h.cacheDir + "/" + h.cachedFileName, JSON.stringify(r), "utf8");
    }, h.writeFilePeriod));
}

function O(e) {
    return m[e] || A.DEFAULT;
}

function T(e) {
    for (var t in e) return !1;
    return !0;
}

var A = {
    IMAGE: 1,
    FONT: 2,
    AUDIO: 3,
    SCRIPT: 4,
    TEXT: 5,
    BIN: 6,
    DEFAULT: 7,
    LOADABLE_MIN: 5
}, m = {
    js: A.SCRIPT,
    png: A.IMAGE,
    jpg: A.IMAGE,
    bmp: A.IMAGE,
    jpeg: A.IMAGE,
    gif: A.IMAGE,
    ico: A.IMAGE,
    tiff: A.IMAGE,
    webp: A.IMAGE,
    image: A.IMAGE,
    mp3: A.AUDIO,
    ogg: A.AUDIO,
    wav: A.AUDIO,
    m4a: A.AUDIO,
    mp4: A.VIDEO,
    avi: A.VIDEO,
    mov: A.VIDEO,
    mpg: A.VIDEO,
    mpeg: A.VIDEO,
    rm: A.VIDEO,
    rmvb: A.VIDEO,
    txt: A.TEXT,
    xml: A.TEXT,
    vsh: A.TEXT,
    fsh: A.TEXT,
    atlas: A.TEXT,
    tmx: A.TEXT,
    tsx: A.TEXT,
    json: A.TEXT,
    ExportJson: A.TEXT,
    plist: A.TEXT,
    fnt: A.TEXT,
    font: A.FONT,
    eot: A.FONT,
    ttf: A.FONT,
    woff: A.FONT,
    svg: A.FONT,
    ttc: A.FONT,
    binary: A.BIN,
    dbbin: A.BIN,
    bin: A.BIN,
    pvr: A.BIN,
    pkm: A.BIN
};