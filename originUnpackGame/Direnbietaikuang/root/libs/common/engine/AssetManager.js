var e = require("../cache-manager"), n = window.fsUtils, a = n.fs, t = n.downloadFile, o = n.readText, r = n.readArrayBuffer, c = n.readJson, s = n.loadSubpackage, i = n.getUserDataPath, l = n.exists, u = /^https?:\/\/.*/, f = cc.assetManager.downloader, d = cc.assetManager.parser, p = cc.assetManager.presets;

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

function b(n, a, o, r, c) {
    var s = function(n, a) {
        var t = !1, o = !1;
        if (n.startsWith(i())) t = !0; else if (u.test(n)) {
            if (!a.reload) {
                var r = e.cachedFiles.get(n);
                if (r) o = !0, n = r.url; else {
                    var c = e.tempFiles.get(n);
                    c && (t = !0, n = c);
                }
            }
        } else t = !0;
        return {
            url: n,
            inLocal: t,
            inCache: o
        };
    }(n, o);
    s.inLocal ? a(s.url, o, c) : s.inCache ? (e.updateLastTime(n), a(s.url, o, function(a, t) {
        a && e.removeCache(n), c(a, t);
    })) : t(n, null, o.header, r, function(t, r) {
        t ? c(t, null) : a(r, o, function(a, t) {
            a || (e.tempFiles.add(n, r), e.cacheFile(n, r, o.cacheEnabled, o.__cacheBundleRoot__, !0)), 
            c(a, t);
        });
    });
}

function v(e, n, a) {
    r(e, a);
}

function x(e, n, a) {
    o(e, a);
}

function w(e, n, a) {
    c(e, a);
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
        n ? a(null, e) : a(new Error("file " + e + " does not exist!"));
    });
}

function y(e, n, a) {
    b(e, C, n, n.onFileProgress, a);
}

var A = d.parsePVRTex, k = function(e, n, a) {
    r(e, function(e, t) {
        if (e) return a(e);
        A(t, n, a);
    });
}, I = d.parsePKMTex, j = function(e, n, a) {
    r(e, function(e, t) {
        if (e) return a(e);
        I(t, n, a);
    });
}, B = d.parseASTCTex, D = function(e, n, a) {
    r(e, function(e, t) {
        if (e) return a(e);
        B(t, n, a);
    });
}, M = d.parsePlist, T = function(e, n, a) {
    o(e, function(e, t) {
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
                var o = cc.internal.parseCCONJson(t);
                Promise.all(o.chunks.map(function(n) {
                    return new Promise(function(a, t) {
                        P("" + cc.path.mainFileName(e) + n, {}, function(e, n) {
                            e ? t(e) : a(new Uint8Array(n));
                        });
                    });
                })).then(function(e) {
                    var n = new cc.internal.CCON(o.document, e);
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
    bundle: function(n, o, r) {
        var c = cc.path.basename(n), l = o.version || cc.assetManager.downloader.bundleVers[c], d = l ? l + "." : "";
        if (m[c]) {
            var p = "subpackages/" + c + "/config." + d + "json";
            s(c, o.onFileProgress, function(e) {
                e ? r(e, null) : _(p, o, function(e, n) {
                    n && (n.base = "subpackages/" + c + "/"), r(e, n);
                });
            });
        } else {
            var g, h;
            u.test(n) || n.startsWith(i()) ? (h = n, g = "src/bundle-scripts/" + c + "/index." + d + "js", 
            e.makeBundleFolder(c)) : -1 !== f.remoteBundles.indexOf(c) ? (h = f.remoteServerAddress + "remote/" + c, 
            g = "src/bundle-scripts/" + c + "/index." + d + "js", e.makeBundleFolder(c)) : (h = "assets/" + c, 
            g = "assets/" + c + "/index." + d + "js"), require("../../../" + g), o.__cacheBundleRoot__ = c, 
            _(p = h + "/config." + d + "json", o, function(n, c) {
                if (n) r && r(n); else if (c.isZip) {
                    var s = c.zipVersion;
                    !function(n, a, o) {
                        var r = e.cachedFiles.get(n);
                        r ? (e.updateLastTime(n), o && o(null, r.url)) : u.test(n) ? t(n, null, a.header, a.onFileProgress, function(t, r) {
                            t ? o && o(t) : e.unzipAndCacheBundle(n, r, a.__cacheBundleRoot__, o);
                        }) : e.unzipAndCacheBundle(n, n, a.__cacheBundleRoot__, o);
                    }(h + "/res." + (s ? s + "." : "") + "zip", o, function(e, n) {
                        if (e) r && r(e); else {
                            c.base = n + "/res/";
                            var t = cc.sys;
                            if (t.platform === t.Platform.ALIPAY_MINI_GAME && t.os === t.OS.ANDROID) {
                                var o = n + "res/";
                                a.accessSync({
                                    path: o
                                }) && (c.base = o);
                            }
                            r && r(null, c);
                        }
                    });
                } else c.base = h + "/", r && r(null, c);
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
        var o = n[a], r = o.options;
        if (o.config) r.__cacheBundleRoot__ = o.config.name; else {
            if ("bundle" === o.ext) continue;
            r.cacheEnabled = void 0 !== r.cacheEnabled && r.cacheEnabled;
        }
        ".cconb" === o.ext ? o.url = o.url.replace(o.ext, ".bin") : ".ccon" === o.ext && (o.url = o.url.replace(o.ext, ".json"));
    }
});

var E = cc.assetManager.init;

cc.assetManager.init = function(n) {
    E.call(cc.assetManager, n), n.subpackages && n.subpackages.forEach(function(e) {
        return m[e] = "subpackages/" + e;
    }), e.init();
};