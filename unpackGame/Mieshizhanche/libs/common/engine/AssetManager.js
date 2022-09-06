var e = require("../cache-manager"), n = window.fsUtils, a = n.fs, t = n.downloadFile, c = n.readText, o = n.readArrayBuffer, r = n.readJson, s = n.loadSubpackage, i = n.getUserDataPath, l = n.exists, u = /^https?:\/\/.*/, f = cc.assetManager.downloader, d = cc.assetManager.parser, p = cc.assetManager.presets;

f.maxConcurrency = 8, f.maxRequestsPerFrame = 64, p.scene.maxConcurrency = 10, p.scene.maxRequestsPerFrame = 64;

var m = {};

function g(e, n, a) {
    u.test(e) ? a && a(new Error("Can not load remote scripts")) : (require("../../../" + e), 
    a && a(null));
}

function h(e, n, a) {
    cc.AudioPlayer.load(e).then(function(n) {
        var t = {
            player: n,
            url: e,
            duration: n.duration,
            type: n.type
        };
        a(null, t);
    }).catch(function(e) {
        a(e);
    });
}

function b(n, a, c, o, r) {
    var s = function(n, a) {
        var t = !1, c = !1;
        if (n.startsWith(i())) t = !0; else if (u.test(n)) {
            if (!a.reload) {
                var o = e.cachedFiles.get(n);
                if (o) c = !0, n = o.url; else {
                    var r = e.tempFiles.get(n);
                    r && (t = !0, n = r);
                }
            }
        } else t = !0;
        return {
            url: n,
            inLocal: t,
            inCache: c
        };
    }(n, c);
    s.inLocal ? a(s.url, c, r) : s.inCache ? (e.updateLastTime(n), a(s.url, c, function(a, t) {
        a && e.removeCache(n), r(a, t);
    })) : t(n, null, c.header, o, function(t, o) {
        t ? r(t, null) : a(o, c, function(a, t) {
            a || (e.tempFiles.add(n, o), e.cacheFile(n, o, c.cacheEnabled, c.__cacheBundleRoot__, !0)), 
            r(a, t);
        });
    });
}

function v(e, n, a) {
    o(e, a);
}

function x(e, n, a) {
    c(e, a);
}

function w(e, n, a) {
    r(e, a);
}

function _(e, n, a) {
    b(e, w, n, n.onFileProgress, a);
}

function P(e, n, a) {
    b(e, v, n, n.onFileProgress, a);
}

function F(e, n, a) {
    a(null, __globalAdapter.loadFont(e) || "Arial");
}

function C(e, n, a) {
    l(e, function(n) {
        n ? a(null, e) : a(new Error("file ".concat(e, " does not exist!")));
    });
}

function y(e, n, a) {
    b(e, C, n, n.onFileProgress, a);
}

var A = d.parsePVRTex, k = function(e, n, a) {
    o(e, function(e, t) {
        if (e) return a(e);
        A(t, n, a);
    });
}, I = d.parsePKMTex, j = function(e, n, a) {
    o(e, function(e, t) {
        if (e) return a(e);
        I(t, n, a);
    });
}, B = d.parseASTCTex, D = function(e, n, a) {
    o(e, function(e, t) {
        if (e) return a(e);
        B(t, n, a);
    });
}, M = d.parsePlist, T = function(e, n, a) {
    c(e, function(e, t) {
        if (e) return a(e);
        M(t, n, a);
    });
};

f.downloadScript = g, d.parsePVRTex = k, d.parsePKMTex = j, d.parseASTCTex = D, 
d.parsePlist = T, f.register({
    ".js": g,
    ".mp3": y,
    ".ogg": y,
    ".wav": y,
    ".m4a": y,
    ".png": y,
    ".jpg": y,
    ".bmp": y,
    ".jpeg": y,
    ".gif": y,
    ".ico": y,
    ".tiff": y,
    ".image": y,
    ".webp": y,
    ".pvr": y,
    ".pkm": y,
    ".astc": y,
    ".font": y,
    ".eot": y,
    ".ttf": y,
    ".woff": y,
    ".svg": y,
    ".ttc": y,
    ".ccon": function(e, n, a) {
        _(e, n, function(n, t) {
            if (n) a(n); else {
                var c = cc.internal.parseCCONJson(t);
                Promise.all(c.chunks.map(function(n) {
                    return new Promise(function(a, t) {
                        P("".concat(cc.path.mainFileName(e)).concat(n), {}, function(e, n) {
                            e ? t(e) : a(new Uint8Array(n));
                        });
                    });
                })).then(function(e) {
                    var n = new cc.internal.CCON(c.document, e);
                    a(null, n);
                }).catch(function(e) {
                    a(e);
                });
            }
        });
    },
    ".cconb": function(e, n, a) {
        P(e, n, function(e, n) {
            if (e) a(e); else try {
                var t = cc.internal.decodeCCONBinary(new Uint8Array(n));
                a(null, t);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                a(e);
            }
        });
    },
    ".txt": y,
    ".xml": y,
    ".vsh": y,
    ".fsh": y,
    ".atlas": y,
    ".tmx": y,
    ".tsx": y,
    ".plist": y,
    ".fnt": y,
    ".json": _,
    ".ExportJson": y,
    ".binary": y,
    ".bin": y,
    ".dbbin": y,
    ".skel": y,
    ".mp4": y,
    ".avi": y,
    ".mov": y,
    ".mpg": y,
    ".mpeg": y,
    ".rm": y,
    ".rmvb": y,
    bundle: function(n, c, o) {
        var r = cc.path.basename(n), l = c.version || cc.assetManager.downloader.bundleVers[r], d = l ? l + "." : "";
        if (m[r]) {
            var p = "subpackages/".concat(r, "/config.").concat(d, "json");
            s(r, c.onFileProgress, function(e) {
                e ? o(e, null) : _(p, c, function(e, n) {
                    n && (n.base = "subpackages/".concat(r, "/")), o(e, n);
                });
            });
        } else {
            var g, h;
            u.test(n) || n.startsWith(i()) ? (h = n, g = "src/bundle-scripts/".concat(r, "/index.").concat(d, "js"), 
            e.makeBundleFolder(r)) : -1 !== f.remoteBundles.indexOf(r) ? (h = "".concat(f.remoteServerAddress, "remote/").concat(r), 
            g = "src/bundle-scripts/".concat(r, "/index.").concat(d, "js"), e.makeBundleFolder(r)) : (h = "assets/".concat(r), 
            g = "assets/".concat(r, "/index.").concat(d, "js")), require("../../../" + g), c.__cacheBundleRoot__ = r, 
            _(p = "".concat(h, "/config.").concat(d, "json"), c, function(n, r) {
                if (n) o && o(n); else if (r.isZip) {
                    var s = r.zipVersion;
                    !function(n, a, c) {
                        var o = e.cachedFiles.get(n);
                        o ? (e.updateLastTime(n), c && c(null, o.url)) : u.test(n) ? t(n, null, a.header, a.onFileProgress, function(t, o) {
                            t ? c && c(t) : e.unzipAndCacheBundle(n, o, a.__cacheBundleRoot__, c);
                        }) : e.unzipAndCacheBundle(n, n, a.__cacheBundleRoot__, c);
                    }("".concat(h, "/res.").concat(s ? s + "." : "", "zip"), c, function(e, n) {
                        if (e) o && o(e); else {
                            r.base = n + "/res/";
                            var t = cc.sys;
                            if (t.platform === t.Platform.ALIPAY_MINI_GAME && t.os === t.OS.ANDROID) {
                                var c = n + "res/";
                                a.accessSync({
                                    path: c
                                }) && (r.base = c);
                            }
                            o && o(null, r);
                        }
                    });
                } else r.base = h + "/", o && o(null, r);
            });
        }
    },
    default: function(e, n, a) {
        b(e, x, n, n.onFileProgress, a);
    }
}), d.register({
    ".png": f.downloadDomImage,
    ".jpg": f.downloadDomImage,
    ".bmp": f.downloadDomImage,
    ".jpeg": f.downloadDomImage,
    ".gif": f.downloadDomImage,
    ".ico": f.downloadDomImage,
    ".tiff": f.downloadDomImage,
    ".image": f.downloadDomImage,
    ".webp": f.downloadDomImage,
    ".pvr": k,
    ".pkm": j,
    ".astc": D,
    ".font": F,
    ".eot": F,
    ".ttf": F,
    ".woff": F,
    ".svg": F,
    ".ttc": F,
    ".mp3": h,
    ".ogg": h,
    ".wav": h,
    ".m4a": h,
    ".txt": x,
    ".xml": x,
    ".vsh": x,
    ".fsh": x,
    ".atlas": x,
    ".tmx": x,
    ".tsx": x,
    ".fnt": x,
    ".plist": T,
    ".binary": v,
    ".bin": v,
    ".dbbin": v,
    ".skel": v,
    ".ExportJson": w
}), cc.assetManager.transformPipeline.append(function(e) {
    for (var n = e.output = e.input, a = 0, t = n.length; a < t; a++) {
        var c = n[a], o = c.options;
        if (c.config) o.__cacheBundleRoot__ = c.config.name; else {
            if ("bundle" === c.ext) continue;
            o.cacheEnabled = void 0 !== o.cacheEnabled && o.cacheEnabled;
        }
        ".cconb" === c.ext ? c.url = c.url.replace(c.ext, ".bin") : ".ccon" === c.ext && (c.url = c.url.replace(c.ext, ".json"));
    }
});

var E = cc.assetManager.init;

cc.assetManager.init = function(n) {
    E.call(cc.assetManager, n), n.subpackages && n.subpackages.forEach(function(e) {
        return m[e] = "subpackages/" + e;
    }), e.init();
};