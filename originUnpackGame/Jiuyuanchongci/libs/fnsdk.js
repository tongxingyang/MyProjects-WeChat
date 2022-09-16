var AB = {
    inflateRaw: function(e, r) {
        return AB.F.inflate(e, r);
    },
    readUintBE: function(e) {
        return (e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3]) >>> 0;
    },
    inflate: function(e, r) {
        var a = new Uint8Array(e.slice(0, 6));
        if (120 == a[0] && 156 == a[1]) {
            var t = AB.readUintBE([ a[2], a[3], a[4], a[5] ]);
            return r = new Uint8Array(t), e instanceof ArrayBuffer ? AB.inflateRaw(new Uint8Array(e, 6, e.byteLength - 6), r) : AB.inflateRaw(new Uint8Array(e.buffer, e.byteOffset + 6, e.length - 6), r);
        }
        return e;
    },
    F: {}
};

AB.F.inflate = function(e, r) {
    var a = Uint8Array;
    if (3 == e[0] && 0 == e[1]) return r || new a(0);
    var t = AB.F, n = t._bitsF, o = t._bitsE, f = t._decodeTiny, i = t.makeCodes, d = t.codes2map, c = t._get17, l = t.U, s = null == r;
    s && (r = new a(e.length >>> 2 << 3));
    for (var u, A, p = 0, v = 0, h = 0, m = 0, w = 0, y = 0, B = 0, L = 0, F = 0; 0 == p; ) if (p = n(e, F, 1), 
    v = n(e, F + 1, 2), F += 3, 0 != v) {
        if (s && (r = AB.F._check(r, L + (1 << 17))), 1 == v && (u = l.flmap, A = l.fdmap, 
        y = 511, B = 31), 2 == v) {
            h = o(e, F, 5) + 257, m = o(e, F + 5, 5) + 1, w = o(e, F + 10, 4) + 4;
            F += 14;
            for (var g = 0; g < 38; g += 2) l.itree[g] = 0, l.itree[g + 1] = 0;
            var _ = 1;
            for (g = 0; g < w; g++) {
                var b = o(e, F + 3 * g, 3);
                l.itree[1 + (l.ordr[g] << 1)] = b, b > _ && (_ = b);
            }
            F += 3 * w, i(l.itree, _), d(l.itree, _, l.imap), u = l.lmap, A = l.dmap, F = f(l.imap, (1 << _) - 1, h + m, e, F, l.ttree);
            var C = t._copyOut(l.ttree, 0, h, l.ltree);
            y = (1 << C) - 1;
            var U = t._copyOut(l.ttree, h, m, l.dtree);
            B = (1 << U) - 1, i(l.ltree, C), d(l.ltree, C, u), i(l.dtree, U), d(l.dtree, U, A);
        }
        for (;;) {
            var k = u[c(e, F) & y];
            F += 15 & k;
            var O = k >>> 4;
            if (O >>> 8 == 0) r[L++] = O; else {
                if (256 == O) break;
                var I = L + O - 254;
                if (O > 264) {
                    var x = l.ldef[O - 257];
                    I = L + (x >>> 3) + o(e, F, 7 & x), F += 7 & x;
                }
                var H = A[c(e, F) & B];
                F += 15 & H;
                var S = H >>> 4, E = l.ddef[S], R = (E >>> 4) + n(e, F, 15 & E);
                for (F += 15 & E, s && (r = AB.F._check(r, L + (1 << 17))); L < I; ) r[L] = r[L++ - R], 
                r[L] = r[L++ - R], r[L] = r[L++ - R], r[L] = r[L++ - R];
                L = I;
            }
        }
    } else {
        0 != (7 & F) && (F += 8 - (7 & F));
        var T = 4 + (F >>> 3), M = e[T - 4] | e[T - 3] << 8;
        s && (r = AB.F._check(r, L + M)), r.set(new a(e.buffer, e.byteOffset + T, M), L), 
        F = T + M << 3, L += M;
    }
    return r.length == L ? r : r.slice(0, L);
}, AB.F._check = function(e, r) {
    var a = e.length;
    if (r <= a) return e;
    var t = new Uint8Array(Math.max(a << 1, r));
    return t.set(e, 0), t;
}, AB.F._decodeTiny = function(e, r, a, t, n, o) {
    for (var f = AB.F._bitsE, i = AB.F._get17, d = 0; d < a; ) {
        var c = e[i(t, n) & r];
        n += 15 & c;
        var l = c >>> 4;
        if (l <= 15) o[d] = l, d++; else {
            var s = 0, u = 0;
            16 == l ? (u = 3 + f(t, n, 2), n += 2, s = o[d - 1]) : 17 == l ? (u = 3 + f(t, n, 3), 
            n += 3) : 18 == l && (u = 11 + f(t, n, 7), n += 7);
            for (var A = d + u; d < A; ) o[d] = s, d++;
        }
    }
    return n;
}, AB.F._copyOut = function(e, r, a, t) {
    for (var n = 0, o = 0, f = t.length >>> 1; o < a; ) {
        var i = e[o + r];
        t[o << 1] = 0, t[1 + (o << 1)] = i, i > n && (n = i), o++;
    }
    for (;o < f; ) t[o << 1] = 0, t[1 + (o << 1)] = 0, o++;
    return n;
}, AB.F.makeCodes = function(e, r) {
    for (var a, t, n, o, f = AB.F.U, i = e.length, d = f.bl_count, c = 0; c <= r; c++) d[c] = 0;
    for (c = 1; c < i; c += 2) d[e[c]]++;
    var l = f.next_code;
    for (a = 0, d[0] = 0, t = 1; t <= r; t++) a = a + d[t - 1] << 1, l[t] = a;
    for (n = 0; n < i; n += 2) 0 != (o = e[n + 1]) && (e[n] = l[o], l[o]++);
}, AB.F.codes2map = function(e, r, a) {
    for (var t = e.length, n = AB.F.U.rev15, o = 0; o < t; o += 2) if (0 != e[o + 1]) for (var f = o >> 1, i = e[o + 1], d = f << 4 | i, c = r - i, l = e[o] << c, s = l + (1 << c); l != s; ) {
        a[n[l] >>> 15 - r] = d, l++;
    }
}, AB.F.revCodes = function(e, r) {
    for (var a = AB.F.U.rev15, t = 15 - r, n = e.length, o = 0; o < n; o += 2) {
        var f = e[o] << r - e[o + 1];
        e[o] = a[f] >>> t;
    }
}, AB.F._putsE = function(e, r, a) {
    a <<= 7 & r;
    var t = r >>> 3;
    e[t] |= a, e[t + 1] |= a >>> 8;
}, AB.F._putsF = function(e, r, a) {
    a <<= 7 & r;
    var t = r >>> 3;
    e[t] |= a, e[t + 1] |= a >>> 8, e[t + 2] |= a >>> 16;
}, AB.F._bitsE = function(e, r, a) {
    return (e[r >>> 3] | e[1 + (r >>> 3)] << 8) >>> (7 & r) & (1 << a) - 1;
}, AB.F._bitsF = function(e, r, a) {
    return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16) >>> (7 & r) & (1 << a) - 1;
}, AB.F._get17 = function(e, r) {
    return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16) >>> (7 & r);
}, AB.F._get25 = function(e, r) {
    return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16 | e[3 + (r >>> 3)] << 24) >>> (7 & r);
}, AB.F.U = function() {
    var e = Uint16Array, r = Uint32Array;
    return {
        next_code: new e(16),
        bl_count: new e(16),
        ordr: [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ],
        of0: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999 ],
        exb: [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0 ],
        ldef: new e(32),
        df0: [ 1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535 ],
        dxb: [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0 ],
        ddef: new r(32),
        flmap: new e(512),
        fltree: [],
        fdmap: new e(32),
        fdtree: [],
        lmap: new e(32768),
        ltree: [],
        ttree: [],
        dmap: new e(32768),
        dtree: [],
        imap: new e(512),
        itree: [],
        rev15: new e(32768),
        lhst: new r(286),
        dhst: new r(30),
        ihst: new r(19),
        lits: new r(15e3),
        strt: new e(65536),
        prev: new e(32768)
    };
}(), function() {
    for (var e = AB.F.U, r = 0; r < 32768; r++) {
        var a = r;
        a = (4278255360 & (a = (4042322160 & (a = (3435973836 & (a = (2863311530 & a) >>> 1 | (1431655765 & a) << 1)) >>> 2 | (858993459 & a) << 2)) >>> 4 | (252645135 & a) << 4)) >>> 8 | (16711935 & a) << 8, 
        e.rev15[r] = (a >>> 16 | a << 16) >>> 17;
    }
    function n(e, r, a) {
        for (;0 != r--; ) e.push(0, a);
    }
    for (r = 0; r < 32; r++) e.ldef[r] = e.of0[r] << 3 | e.exb[r], e.ddef[r] = e.df0[r] << 4 | e.dxb[r];
    n(e.fltree, 144, 8), n(e.fltree, 112, 9), n(e.fltree, 24, 7), n(e.fltree, 8, 8), 
    AB.F.makeCodes(e.fltree, 9), AB.F.codes2map(e.fltree, 9, e.flmap), AB.F.revCodes(e.fltree, 9), 
    n(e.fdtree, 32, 5), AB.F.makeCodes(e.fdtree, 5), AB.F.codes2map(e.fdtree, 5, e.fdmap), 
    AB.F.revCodes(e.fdtree, 5), n(e.itree, 19, 0), n(e.ltree, 286, 0), n(e.dtree, 30, 0), 
    n(e.ttree, 320, 0);
}();

var Loader = Laya.Loader;

Loader.prototype.parsePLFBData = function(e) {
    var r, a, t = new Laya.Byte(AB.inflate(e));
    for (a = t.getInt32(), r = 0; r < a; r++) this.parseOnePLFBFile(t);
};

var rawOnLoaded = Loader.prototype.onLoaded;

Loader.prototype.onLoaded = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    this._type == Loader.JSON && e instanceof ArrayBuffer ? (e = JSON.parse(this.Utf8ArrayToStr(new Uint8Array(e))), 
    this.complete(e)) : rawOnLoaded.call(this, e);
};

var rawLoadHtmlImage = Laya.Loader.prototype._loadHtmlImage;

Laya.Loader.prototype._loadHtmlImage = function(e, r, a, t, n) {
    if (Loader.preLoadedMap[e]) if (window.Blob && window.FileReader) this.createHtmlImageAsync(Loader.preLoadedMap[e], e, r, a, t, n); else {
        var o = this.arrayBufferToBase64(e, Loader.preLoadedMap[e]);
        rawLoadHtmlImage.call(this, o, r, a, t, n);
    } else rawLoadHtmlImage.call(this, e, r, a, t, n);
}, Loader.prototype.createHtmlImageAsync = function(e, r, a, t, n, o) {
    var i;
    function f() {
        var e = i;
        e.onload = null, e.onerror = null, delete Laya.Loader._imgCache[r];
    }
    (i = new Laya.Browser.window.Image()).crossOrigin = "", i.onload = function() {
        f(), t.call(a, i);
    }, i.onerror = function() {
        f(), o.call(n);
    };
    var d = new Blob([ e ]), c = new FileReader();
    c.onload = function(e) {
        i.src = e.target.result, Laya.Loader._imgCache = i;
    }, c.readAsDataURL(d);
}, Loader.prototype.arrayBufferToBase64 = function(e, r) {
    var a = "data:image/jpeg;base64,";
    "png" == Laya.Utils.getFileExtension(e) && (a = "data:image/png;base64,");
    for (var t = "", n = new Uint8Array(r), o = n.byteLength, f = 0; f < o; f++) t += String.fromCharCode(n[f]);
    return a + (window.btoa ? window.btoa(t) : this.btoa(t));
}, Loader.prototype.btoa = function(e) {
    for (var r, a, t, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, f = e.length, i = ""; o < f; ) {
        if (r = 255 & e.charCodeAt(o++), o == f) {
            i += n.charAt(r >> 2), i += n.charAt((3 & r) << 4), i += "==";
            break;
        }
        if (a = e.charCodeAt(o++), o == f) {
            i += n.charAt(r >> 2), i += n.charAt((3 & r) << 4 | (240 & a) >> 4), i += n.charAt((15 & a) << 2), 
            i += "=";
            break;
        }
        t = e.charCodeAt(o++), i += n.charAt(r >> 2), i += n.charAt((3 & r) << 4 | (240 & a) >> 4), 
        i += n.charAt((15 & a) << 2 | (192 & t) >> 6), i += n.charAt(63 & t);
    }
    return i;
}, Loader.prototype.Utf8ArrayToStr = function(e) {
    var r, a, t, n, o, f;
    for (r = "", t = e.length, a = 0; a < t; ) switch ((n = e[a++]) >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        r += String.fromCharCode(n);
        break;

      case 12:
      case 13:
        o = e[a++], r += String.fromCharCode((31 & n) << 6 | 63 & o);
        break;

      case 14:
        o = e[a++], f = e[a++], r += String.fromCharCode((15 & n) << 12 | (63 & o) << 6 | (63 & f) << 0);
    }
    return r;
};

var camera_parse = Laya.Camera.prototype._parse;

Laya.Camera.prototype._parse = function(e, r) {
    e.enableHDR = !1, camera_parse.call(this, e, r);
};