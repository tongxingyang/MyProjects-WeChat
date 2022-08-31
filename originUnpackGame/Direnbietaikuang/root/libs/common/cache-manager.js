var e = window.fsUtils, i = e.getUserDataPath, t = e.readJsonSync, c = e.makeDirSync, a = e.writeFileSync, s = e.copyFile, h = e.downloadFile, n = e.deleteFile, r = e.rmdirSync, l = e.unzip, o = e.isOutOfStorage, u = !1, d = null, f = !1, F = 0, m = /^https?:\/\/.*/, g = {
    cacheDir: "gamecaches",
    cachedFileName: "cacheList.json",
    cacheEnabled: !0,
    autoClear: !0,
    cacheInterval: 500,
    deleteInterval: 500,
    writeFileInterval: 2e3,
    outOfStorage: !1,
    tempFiles: null,
    cachedFiles: null,
    cacheQueue: {},
    version: "1.0",
    getCache: function(e) {
        return this.cachedFiles.has(e) ? this.cachedFiles.get(e).url : "";
    },
    getTemp: function(e) {
        return this.tempFiles.has(e) ? this.tempFiles.get(e) : "";
    },
    init: function() {
        this.cacheDir = i() + "/" + this.cacheDir;
        var e = this.cacheDir + "/" + this.cachedFileName, s = t(e);
        !s || !s.version ? (s instanceof Error || r(this.cacheDir, !0), 
        this.cachedFiles = new cc.AssetManager.Cache(), c(this.cacheDir, !0), a(e, JSON.stringify({
            files: this.cachedFiles._map,
            version: this.version
        }), "utf8")) : this.cachedFiles = new cc.AssetManager.Cache(s.files), this.tempFiles = new cc.AssetManager.Cache();
    },
    updateLastTime: function(e) {
        this.cachedFiles.has(e) && (this.cachedFiles.get(e).lastTime = Date.now());
    },
    _write: function() {
        d = null, a(this.cacheDir + "/" + this.cachedFileName, JSON.stringify({
            files: this.cachedFiles._map,
            version: this.version
        }), "utf8");
    },
    writeCacheFile: function() {
        d || (d = setTimeout(this._write.bind(this), this.writeFileInterval));
    },
    _cache: function() {
        u = !1;
        var e = this, i = "";
        for (var t in this.cacheQueue) {
            i = t;
            break;
        }
        if (i) {
            var c = this.cacheQueue[i], a = c.srcUrl, n = c.isCopy, r = c.cacheBundleRoot, l = Date.now().toString(), d = "";
            d = r ? this.cacheDir + "/" + r + "/" + l + F++ + cc.path.extname(i) : this.cacheDir + "/" + l + F++ + cc.path.extname(i), 
            n ? s(a, d, f) : h(a, d, null, f);
        }
        function f(t) {
            if (t) {
                if (o(t.message)) return e.outOfStorage = !0, void (e.autoClear && e.clearLRU());
            } else e.cachedFiles.add(i, {
                bundle: r,
                url: d,
                lastTime: l
            }), e.writeCacheFile();
            delete e.cacheQueue[i], cc.js.isEmptyObject(e.cacheQueue) || u || (u = !0, setTimeout(e._cache.bind(e), e.cacheInterval));
        }
    },
    cacheFile: function(e, i, t, c, a) {
        !(t = void 0 !== t ? t : this.cacheEnabled) || this.cacheQueue[e] || this.cachedFiles.has(e) || (this.cacheQueue[e] = {
            srcUrl: i,
            cacheBundleRoot: c,
            isCopy: a
        }, u || this.outOfStorage || (u = !0, setTimeout(this._cache.bind(this), this.cacheInterval)));
    },
    clearCache: function() {
        var e = this;
        r(this.cacheDir, !0), this.cachedFiles = new cc.AssetManager.Cache(), c(this.cacheDir, !0), 
        this.outOfStorage = !1, clearTimeout(d), this._write(), cc.assetManager.bundles.forEach(function(i) {
            m.test(i.base) && e.makeBundleFolder(i.name);
        });
    },
    clearLRU: function() {
        if (!f) {
            f = !0;
            var e = [], i = this;
            if (this.cachedFiles.forEach(function(t, c) {
                i._isZipFile(c) && cc.assetManager.bundles.find(function(e) {
                    return -1 !== e.base.indexOf(t.url);
                }) || e.push({
                    originUrl: c,
                    url: t.url,
                    lastTime: t.lastTime
                });
            }), e.sort(function(e, i) {
                return e.lastTime - i.lastTime;
            }), e.length = Math.floor(e.length / 3), 0 !== e.length) {
                for (var t = 0, c = e.length; t < c; t++) this.cachedFiles.remove(e[t].originUrl);
                clearTimeout(d), this._write(), setTimeout(function t() {
                    var c = e.pop();
                    i._isZipFile(c.originUrl) ? (r(c.url, !0), i._deleteFileCB()) : n(c.url, i._deleteFileCB.bind(i)), 
                    e.length > 0 ? setTimeout(t, i.deleteInterval) : f = !1;
                }, i.deleteInterval);
            }
        }
    },
    removeCache: function(e) {
        if (this.cachedFiles.has(e)) {
            var i = this.cachedFiles.remove(e).url;
            clearTimeout(d), this._write(), this._isZipFile(e) ? (r(i, !0), this._deleteFileCB()) : n(i, this._deleteFileCB.bind(this));
        }
    },
    _deleteFileCB: function(e) {
        e || (this.outOfStorage = !1);
    },
    makeBundleFolder: function(e) {
        c(this.cacheDir + "/" + e, !0);
    },
    unzipAndCacheBundle: function(e, i, t, a) {
        var s = Date.now().toString(), h = this.cacheDir + "/" + t + "/" + s + F++, n = this;
        c(h, !0), l(i, h, function(i) {
            if (i) return r(h, !0), o(i.message) && (n.outOfStorage = !0, n.autoClear && n.clearLRU()), 
            void (a && a(i));
            n.cachedFiles.add(e, {
                bundle: t,
                url: h,
                lastTime: s
            }), n.writeCacheFile(), a && a(null, h);
        });
    },
    _isZipFile: function(e) {
        return ".zip" === e.slice(-4);
    }
};

cc.assetManager.cacheManager = module.exports = g;