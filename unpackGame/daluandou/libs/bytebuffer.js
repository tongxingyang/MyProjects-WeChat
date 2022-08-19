var wasm = null;

try {
    wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([ 0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11 ])), {}).exports;
} catch (t) {}

function Long(t, e, i) {
    this.low = 0 | t, this.high = 0 | e, this.unsigned = !!i;
}

function isLong(t) {
    return !0 === (t && t.__isLong__);
}

Long.prototype.__isLong__, Object.defineProperty(Long.prototype, "__isLong__", {
    value: !0
}), Long.isLong = isLong;

var INT_CACHE = {}, UINT_CACHE = {};

function fromInt(t, e) {
    var i, r, n;
    return e ? (n = 0 <= (t >>>= 0) && t < 256) && (r = UINT_CACHE[t]) ? r : (i = fromBits(t, (0 | t) < 0 ? -1 : 0, !0), 
    n && (UINT_CACHE[t] = i), i) : (n = -128 <= (t |= 0) && t < 128) && (r = INT_CACHE[t]) ? r : (i = fromBits(t, t < 0 ? -1 : 0, !1), 
    n && (INT_CACHE[t] = i), i);
}

function fromNumber(t, e) {
    if (isNaN(t)) return e ? UZERO : ZERO;
    if (e) {
        if (t < 0) return UZERO;
        if (t >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
    } else {
        if (t <= -TWO_PWR_63_DBL) return MIN_VALUE;
        if (t + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
    }
    return t < 0 ? fromNumber(-t, e).neg() : fromBits(t % TWO_PWR_32_DBL | 0, t / TWO_PWR_32_DBL | 0, e);
}

function fromBits(t, e, i) {
    return new Long(t, e, i);
}

Long.fromInt = fromInt, Long.fromNumber = fromNumber, Long.fromBits = fromBits;

var pow_dbl = Math.pow;

function fromString(t, e, i) {
    if (0 === t.length) throw Error("empty string");
    if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t) return ZERO;
    if ("number" == typeof e ? (i = e, e = !1) : e = !!e, (i = i || 10) < 2 || 36 < i) throw RangeError("radix");
    var r;
    if ((r = t.indexOf("-")) > 0) throw Error("interior hyphen");
    if (0 === r) return fromString(t.substring(1), e, i).neg();
    for (var n = fromNumber(pow_dbl(i, 8)), o = ZERO, s = 0; s < t.length; s += 8) {
        var f = Math.min(8, t.length - s), h = parseInt(t.substring(s, s + f), i);
        if (f < 8) {
            var a = fromNumber(pow_dbl(i, f));
            o = o.mul(a).add(fromNumber(h));
        } else o = (o = o.mul(n)).add(fromNumber(h));
    }
    return o.unsigned = e, o;
}

function fromValue(t, e) {
    return "number" == typeof t ? fromNumber(t, e) : "string" == typeof t ? fromString(t, e) : fromBits(t.low, t.high, "boolean" == typeof e ? e : t.unsigned);
}

Long.fromString = fromString, Long.fromValue = fromValue;

var TWO_PWR_16_DBL = 65536, TWO_PWR_24_DBL = 1 << 24, TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL, TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL, TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2, TWO_PWR_24 = fromInt(TWO_PWR_24_DBL), ZERO = fromInt(0);

Long.ZERO = ZERO;

var UZERO = fromInt(0, !0);

Long.UZERO = UZERO;

var ONE = fromInt(1);

Long.ONE = ONE;

var UONE = fromInt(1, !0);

Long.UONE = UONE;

var NEG_ONE = fromInt(-1);

Long.NEG_ONE = NEG_ONE;

var MAX_VALUE = fromBits(-1, 2147483647, !1);

Long.MAX_VALUE = MAX_VALUE;

var MAX_UNSIGNED_VALUE = fromBits(-1, -1, !0);

Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

var MIN_VALUE = fromBits(0, -2147483648, !1);

Long.MIN_VALUE = MIN_VALUE;

var LongPrototype = Long.prototype;

LongPrototype.toInt = function() {
    return this.unsigned ? this.low >>> 0 : this.low;
}, LongPrototype.toNumber = function() {
    return this.unsigned ? (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0) : this.high * TWO_PWR_32_DBL + (this.low >>> 0);
}, LongPrototype.toString = function(t) {
    if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
    if (this.isZero()) return "0";
    if (this.isNegative()) {
        if (this.eq(MIN_VALUE)) {
            var e = fromNumber(t), i = this.div(e), r = i.mul(e).sub(this);
            return i.toString(t) + r.toInt().toString(t);
        }
        return "-" + this.neg().toString(t);
    }
    for (var n = fromNumber(pow_dbl(t, 6), this.unsigned), o = this, s = ""; ;) {
        var f = o.div(n), h = (o.sub(f.mul(n)).toInt() >>> 0).toString(t);
        if ((o = f).isZero()) return h + s;
        for (;h.length < 6; ) h = "0" + h;
        s = "" + h + s;
    }
}, LongPrototype.getHighBits = function() {
    return this.high;
}, LongPrototype.getHighBitsUnsigned = function() {
    return this.high >>> 0;
}, LongPrototype.getLowBits = function() {
    return this.low;
}, LongPrototype.getLowBitsUnsigned = function() {
    return this.low >>> 0;
}, LongPrototype.getNumBitsAbs = function() {
    if (this.isNegative()) return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
    for (var t = 0 != this.high ? this.high : this.low, e = 31; e > 0 && 0 == (t & 1 << e); e--) ;
    return 0 != this.high ? e + 33 : e + 1;
}, LongPrototype.isZero = function() {
    return 0 === this.high && 0 === this.low;
}, LongPrototype.eqz = LongPrototype.isZero, LongPrototype.isNegative = function() {
    return !this.unsigned && this.high < 0;
}, LongPrototype.isPositive = function() {
    return this.unsigned || this.high >= 0;
}, LongPrototype.isOdd = function() {
    return 1 == (1 & this.low);
}, LongPrototype.isEven = function() {
    return 0 == (1 & this.low);
}, LongPrototype.equals = function(t) {
    return isLong(t) || (t = fromValue(t)), (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && (this.high === t.high && this.low === t.low);
}, LongPrototype.eq = LongPrototype.equals, LongPrototype.notEquals = function(t) {
    return !this.eq(t);
}, LongPrototype.neq = LongPrototype.notEquals, LongPrototype.ne = LongPrototype.notEquals, 
LongPrototype.lessThan = function(t) {
    return this.comp(t) < 0;
}, LongPrototype.lt = LongPrototype.lessThan, LongPrototype.lessThanOrEqual = function(t) {
    return this.comp(t) <= 0;
}, LongPrototype.lte = LongPrototype.lessThanOrEqual, LongPrototype.le = LongPrototype.lessThanOrEqual, 
LongPrototype.greaterThan = function(t) {
    return this.comp(t) > 0;
}, LongPrototype.gt = LongPrototype.greaterThan, LongPrototype.greaterThanOrEqual = function(t) {
    return this.comp(t) >= 0;
}, LongPrototype.gte = LongPrototype.greaterThanOrEqual, LongPrototype.ge = LongPrototype.greaterThanOrEqual, 
LongPrototype.compare = function(t) {
    if (isLong(t) || (t = fromValue(t)), this.eq(t)) return 0;
    var e = this.isNegative(), i = t.isNegative();
    return e && !i ? -1 : !e && i ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1;
}, LongPrototype.comp = LongPrototype.compare, LongPrototype.negate = function() {
    return !this.unsigned && this.eq(MIN_VALUE) ? MIN_VALUE : this.not().add(ONE);
}, LongPrototype.neg = LongPrototype.negate, LongPrototype.add = function(t) {
    isLong(t) || (t = fromValue(t));
    var e = this.high >>> 16, i = 65535 & this.high, r = this.low >>> 16, n = 65535 & this.low, o = t.high >>> 16, s = 65535 & t.high, f = t.low >>> 16, h = 0, a = 0, g = 0, u = 0;
    return g += (u += n + (65535 & t.low)) >>> 16, a += (g += r + f) >>> 16, h += (a += i + s) >>> 16, 
    h += e + o, fromBits((g &= 65535) << 16 | (u &= 65535), (h &= 65535) << 16 | (a &= 65535), this.unsigned);
}, LongPrototype.subtract = function(t) {
    return isLong(t) || (t = fromValue(t)), this.add(t.neg());
}, LongPrototype.sub = LongPrototype.subtract, LongPrototype.multiply = function(t) {
    if (this.isZero()) return ZERO;
    if (isLong(t) || (t = fromValue(t)), wasm) return fromBits(wasm.mul(this.low, this.high, t.low, t.high), wasm.get_high(), this.unsigned);
    if (t.isZero()) return ZERO;
    if (this.eq(MIN_VALUE)) return t.isOdd() ? MIN_VALUE : ZERO;
    if (t.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;
    if (this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
    if (t.isNegative()) return this.mul(t.neg()).neg();
    if (this.lt(TWO_PWR_24) && t.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * t.toNumber(), this.unsigned);
    var e = this.high >>> 16, i = 65535 & this.high, r = this.low >>> 16, n = 65535 & this.low, o = t.high >>> 16, s = 65535 & t.high, f = t.low >>> 16, h = 65535 & t.low, a = 0, g = 0, u = 0, l = 0;
    return u += (l += n * h) >>> 16, g += (u += r * h) >>> 16, u &= 65535, g += (u += n * f) >>> 16, 
    a += (g += i * h) >>> 16, g &= 65535, a += (g += r * f) >>> 16, g &= 65535, a += (g += n * s) >>> 16, 
    a += e * h + i * f + r * s + n * o, fromBits((u &= 65535) << 16 | (l &= 65535), (a &= 65535) << 16 | (g &= 65535), this.unsigned);
}, LongPrototype.mul = LongPrototype.multiply, LongPrototype.divide = function(t) {
    if (isLong(t) || (t = fromValue(t)), t.isZero()) throw Error("division by zero");
    var e, i, r;
    if (wasm) return this.unsigned || -2147483648 !== this.high || -1 !== t.low || -1 !== t.high ? fromBits((this.unsigned ? wasm.div_u : wasm.div_s)(this.low, this.high, t.low, t.high), wasm.get_high(), this.unsigned) : this;
    if (this.isZero()) return this.unsigned ? UZERO : ZERO;
    if (this.unsigned) {
        if (t.unsigned || (t = t.toUnsigned()), t.gt(this)) return UZERO;
        if (t.gt(this.shru(1))) return UONE;
        r = UZERO;
    } else {
        if (this.eq(MIN_VALUE)) return t.eq(ONE) || t.eq(NEG_ONE) ? MIN_VALUE : t.eq(MIN_VALUE) ? ONE : (e = this.shr(1).div(t).shl(1)).eq(ZERO) ? t.isNegative() ? ONE : NEG_ONE : (i = this.sub(t.mul(e)), 
        r = e.add(i.div(t)));
        if (t.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
        if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
        if (t.isNegative()) return this.div(t.neg()).neg();
        r = ZERO;
    }
    for (i = this; i.gte(t); ) {
        e = Math.max(1, Math.floor(i.toNumber() / t.toNumber()));
        for (var n = Math.ceil(Math.log(e) / Math.LN2), o = n <= 48 ? 1 : pow_dbl(2, n - 48), s = fromNumber(e), f = s.mul(t); f.isNegative() || f.gt(i); ) f = (s = fromNumber(e -= o, this.unsigned)).mul(t);
        s.isZero() && (s = ONE), r = r.add(s), i = i.sub(f);
    }
    return r;
}, LongPrototype.div = LongPrototype.divide, LongPrototype.modulo = function(t) {
    return isLong(t) || (t = fromValue(t)), wasm ? fromBits((this.unsigned ? wasm.rem_u : wasm.rem_s)(this.low, this.high, t.low, t.high), wasm.get_high(), this.unsigned) : this.sub(this.div(t).mul(t));
}, LongPrototype.mod = LongPrototype.modulo, LongPrototype.rem = LongPrototype.modulo, 
LongPrototype.not = function() {
    return fromBits(~this.low, ~this.high, this.unsigned);
}, LongPrototype.and = function(t) {
    return isLong(t) || (t = fromValue(t)), fromBits(this.low & t.low, this.high & t.high, this.unsigned);
}, LongPrototype.or = function(t) {
    return isLong(t) || (t = fromValue(t)), fromBits(this.low | t.low, this.high | t.high, this.unsigned);
}, LongPrototype.xor = function(t) {
    return isLong(t) || (t = fromValue(t)), fromBits(this.low ^ t.low, this.high ^ t.high, this.unsigned);
}, LongPrototype.shiftLeft = function(t) {
    return isLong(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? fromBits(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : fromBits(0, this.low << t - 32, this.unsigned);
}, LongPrototype.shl = LongPrototype.shiftLeft, LongPrototype.shiftRight = function(t) {
    return isLong(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? fromBits(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : fromBits(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned);
}, LongPrototype.shr = LongPrototype.shiftRight, LongPrototype.shiftRightUnsigned = function(t) {
    return isLong(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? fromBits(this.low >>> t | this.high << 32 - t, this.high >>> t, this.unsigned) : fromBits(32 === t ? this.high : this.high >>> t - 32, 0, this.unsigned);
}, LongPrototype.shru = LongPrototype.shiftRightUnsigned, LongPrototype.shr_u = LongPrototype.shiftRightUnsigned, 
LongPrototype.rotateLeft = function(t) {
    var e;
    return isLong(t) && (t = t.toInt()), 0 == (t &= 63) ? this : 32 === t ? fromBits(this.high, this.low, this.unsigned) : t < 32 ? (e = 32 - t, 
    fromBits(this.low << t | this.high >>> e, this.high << t | this.low >>> e, this.unsigned)) : (e = 32 - (t -= 32), 
    fromBits(this.high << t | this.low >>> e, this.low << t | this.high >>> e, this.unsigned));
}, LongPrototype.rotl = LongPrototype.rotateLeft, LongPrototype.rotateRight = function(t) {
    var e;
    return isLong(t) && (t = t.toInt()), 0 == (t &= 63) ? this : 32 === t ? fromBits(this.high, this.low, this.unsigned) : t < 32 ? (e = 32 - t, 
    fromBits(this.high << e | this.low >>> t, this.low << e | this.high >>> t, this.unsigned)) : (e = 32 - (t -= 32), 
    fromBits(this.low << e | this.high >>> t, this.high << e | this.low >>> t, this.unsigned));
}, LongPrototype.rotr = LongPrototype.rotateRight, LongPrototype.toSigned = function() {
    return this.unsigned ? fromBits(this.low, this.high, !1) : this;
}, LongPrototype.toUnsigned = function() {
    return this.unsigned ? this : fromBits(this.low, this.high, !0);
}, LongPrototype.toBytes = function(t) {
    return t ? this.toBytesLE() : this.toBytesBE();
}, LongPrototype.toBytesLE = function() {
    var t = this.high, e = this.low;
    return [ 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24, 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 ];
}, LongPrototype.toBytesBE = function() {
    var t = this.high, e = this.low;
    return [ t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e ];
}, Long.fromBytes = function(t, e, i) {
    return i ? Long.fromBytesLE(t, e) : Long.fromBytesBE(t, e);
}, Long.fromBytesLE = function(t, e) {
    return new Long(t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24, t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24, e);
}, Long.fromBytesBE = function(t, e) {
    return new Long(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], e);
}, function(t, e) {
    (t.dcodeIO = t.dcodeIO || {}).ByteBuffer = function(t) {
        "use strict";
        var e = function(t, i, n) {
            if (void 0 === t && (t = e.DEFAULT_CAPACITY), void 0 === i && (i = e.DEFAULT_ENDIAN), 
            void 0 === n && (n = e.DEFAULT_NOASSERT), !n) {
                if ((t |= 0) < 0) throw RangeError("Illegal capacity");
                i = !!i, n = !!n;
            }
            this.buffer = 0 === t ? r : new ArrayBuffer(t), this.view = 0 === t ? null : new Uint8Array(this.buffer), 
            this.offset = 0, this.markedOffset = -1, this.limit = t, this.littleEndian = i, 
            this.noAssert = n;
        };
        e.VERSION = "5.0.1", e.LITTLE_ENDIAN = !0, e.BIG_ENDIAN = !1, e.DEFAULT_CAPACITY = 16, 
        e.DEFAULT_ENDIAN = e.BIG_ENDIAN, e.DEFAULT_NOASSERT = !1, e.Long = t || null;
        var i = e.prototype;
        i.__isByteBuffer__, Object.defineProperty(i, "__isByteBuffer__", {
            value: !0,
            enumerable: !1,
            configurable: !1
        });
        var r = new ArrayBuffer(0), n = String.fromCharCode;
        function stringSource(t) {
            var e = 0;
            return function() {
                return e < t.length ? t.charCodeAt(e++) : null;
            };
        }
        function stringDestination() {
            var t = [], e = [];
            return function() {
                if (0 === arguments.length) return e.join("") + n.apply(String, t);
                t.length + arguments.length > 1024 && (e.push(n.apply(String, t)), t.length = 0), 
                Array.prototype.push.apply(t, arguments);
            };
        }
        e.accessor = function() {
            return Uint8Array;
        }, e.allocate = function(t, i, r) {
            return new e(t, i, r);
        }, e.concat = function(t, i, r, n) {
            "boolean" != typeof i && "string" == typeof i || (n = r, r = i, i = void 0);
            for (var o, s = 0, f = 0, h = t.length; f < h; ++f) e.isByteBuffer(t[f]) || (t[f] = e.wrap(t[f], i)), 
            (o = t[f].limit - t[f].offset) > 0 && (s += o);
            if (0 === s) return new e(0, r, n);
            var a, g = new e(s, r, n);
            for (f = 0; f < h; ) (o = (a = t[f++]).limit - a.offset) <= 0 || (g.view.set(a.view.subarray(a.offset, a.limit), g.offset), 
            g.offset += o);
            return g.limit = g.offset, g.offset = 0, g;
        }, e.isByteBuffer = function(t) {
            return !0 === (t && t.__isByteBuffer__);
        }, e.type = function() {
            return ArrayBuffer;
        }, e.wrap = function(t, r, n, o) {
            if ("string" != typeof r && (o = n, n = r, r = void 0), "string" == typeof t) switch (void 0 === r && (r = "utf8"), 
            r) {
              case "base64":
                return e.fromBase64(t, n);

              case "hex":
                return e.fromHex(t, n);

              case "binary":
                return e.fromBinary(t, n);

              case "utf8":
                return e.fromUTF8(t, n);

              case "debug":
                return e.fromDebug(t, n);

              default:
                throw Error("Unsupported encoding: " + r);
            }
            if (null === t || "object" != typeof t) throw TypeError("Illegal buffer");
            var s;
            if (e.isByteBuffer(t)) return (s = i.clone.call(t)).markedOffset = -1, s;
            if (t instanceof Uint8Array) s = new e(0, n, o), t.length > 0 && (s.buffer = t.buffer, 
            s.offset = t.byteOffset, s.limit = t.byteOffset + t.byteLength, s.view = new Uint8Array(t.buffer)); else if (t instanceof ArrayBuffer) s = new e(0, n, o), 
            t.byteLength > 0 && (s.buffer = t, s.offset = 0, s.limit = t.byteLength, s.view = t.byteLength > 0 ? new Uint8Array(t) : null); else {
                if ("[object Array]" !== Object.prototype.toString.call(t)) throw TypeError("Illegal buffer");
                (s = new e(t.length, n, o)).limit = t.length;
                for (var f = 0; f < t.length; ++f) s.view[f] = t[f];
            }
            return s;
        }, i.writeBitSet = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset), !this.noAssert) {
                if (!(t instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
            }
            var r, n = e, o = t.length, s = o >> 3, f = 0;
            for (e += this.writeVarint32(o, e); s--; ) r = 1 & !!t[f++] | (1 & !!t[f++]) << 1 | (1 & !!t[f++]) << 2 | (1 & !!t[f++]) << 3 | (1 & !!t[f++]) << 4 | (1 & !!t[f++]) << 5 | (1 & !!t[f++]) << 6 | (1 & !!t[f++]) << 7, 
            this.writeByte(r, e++);
            if (f < o) {
                var h = 0;
                for (r = 0; f < o; ) r |= (1 & !!t[f++]) << h++;
                this.writeByte(r, e++);
            }
            return i ? (this.offset = e, this) : e - n;
        }, i.readBitSet = function(t) {
            var e = void 0 === t;
            e && (t = this.offset);
            var i, r = this.readVarint32(t), n = r.value, o = n >> 3, s = 0, f = [];
            for (t += r.length; o--; ) i = this.readByte(t++), f[s++] = !!(1 & i), f[s++] = !!(2 & i), 
            f[s++] = !!(4 & i), f[s++] = !!(8 & i), f[s++] = !!(16 & i), f[s++] = !!(32 & i), 
            f[s++] = !!(64 & i), f[s++] = !!(128 & i);
            if (s < n) {
                var h = 0;
                for (i = this.readByte(t++); s < n; ) f[s++] = !!(i >> h++ & 1);
            }
            return e && (this.offset = t), f;
        }, i.readBytes = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset), !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + t > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+" + t + ") <= " + this.buffer.byteLength);
            }
            var r = this.slice(e, e + t);
            return i && (this.offset += t), r;
        }, i.writeBytes = i.append, i.writeInt8 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
            }
            e += 1;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e), e -= 1, this.view[e] = t, i && (this.offset += 1), 
            this;
        }, i.writeByte = i.writeInt8, i.readInt8 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
            }
            var i = this.view[t];
            return 128 == (128 & i) && (i = -(255 - i + 1)), e && (this.offset += 1), i;
        }, i.readByte = i.readInt8, i.writeUint8 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
            }
            e += 1;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e), e -= 1, this.view[e] = t, i && (this.offset += 1), 
            this;
        }, i.writeUInt8 = i.writeUint8, i.readUint8 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
            }
            var i = this.view[t];
            return e && (this.offset += 1), i;
        }, i.readUInt8 = i.readUint8, i.writeInt16 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
            }
            e += 2;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e), e -= 2, this.littleEndian ? (this.view[e + 1] = (65280 & t) >>> 8, 
            this.view[e] = 255 & t) : (this.view[e] = (65280 & t) >>> 8, this.view[e + 1] = 255 & t), 
            i && (this.offset += 2), this;
        }, i.writeShort = i.writeInt16, i.readInt16 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+2) <= " + this.buffer.byteLength);
            }
            var i = 0;
            return this.littleEndian ? (i = this.view[t], i |= this.view[t + 1] << 8) : (i = this.view[t] << 8, 
            i |= this.view[t + 1]), 32768 == (32768 & i) && (i = -(65535 - i + 1)), e && (this.offset += 2), 
            i;
        }, i.readShort = i.readInt16, i.writeUint16 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
            }
            e += 2;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e), e -= 2, this.littleEndian ? (this.view[e + 1] = (65280 & t) >>> 8, 
            this.view[e] = 255 & t) : (this.view[e] = (65280 & t) >>> 8, this.view[e + 1] = 255 & t), 
            i && (this.offset += 2), this;
        }, i.writeUInt16 = i.writeUint16, i.readUint16 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+2) <= " + this.buffer.byteLength);
            }
            var i = 0;
            return this.littleEndian ? (i = this.view[t], i |= this.view[t + 1] << 8) : (i = this.view[t] << 8, 
            i |= this.view[t + 1]), e && (this.offset += 2), i;
        }, i.readUInt16 = i.readUint16, i.writeInt32 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
            }
            e += 4;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e), e -= 4, this.littleEndian ? (this.view[e + 3] = t >>> 24 & 255, 
            this.view[e + 2] = t >>> 16 & 255, this.view[e + 1] = t >>> 8 & 255, this.view[e] = 255 & t) : (this.view[e] = t >>> 24 & 255, 
            this.view[e + 1] = t >>> 16 & 255, this.view[e + 2] = t >>> 8 & 255, this.view[e + 3] = 255 & t), 
            i && (this.offset += 4), this;
        }, i.writeInt = i.writeInt32, i.readInt32 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength);
            }
            var i = 0;
            return this.littleEndian ? (i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, 
            i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, 
            i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0), 
            i |= 0, e && (this.offset += 4), i;
        }, i.readInt = i.readInt32, i.writeUint32 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
            }
            e += 4;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e), e -= 4, this.littleEndian ? (this.view[e + 3] = t >>> 24 & 255, 
            this.view[e + 2] = t >>> 16 & 255, this.view[e + 1] = t >>> 8 & 255, this.view[e] = 255 & t) : (this.view[e] = t >>> 24 & 255, 
            this.view[e + 1] = t >>> 16 & 255, this.view[e + 2] = t >>> 8 & 255, this.view[e + 3] = 255 & t), 
            i && (this.offset += 4), this;
        }, i.writeUInt32 = i.writeUint32, i.readUint32 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength);
            }
            var i = 0;
            return this.littleEndian ? (i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, 
            i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, 
            i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0), 
            e && (this.offset += 4), i;
        }, i.readUInt32 = i.readUint32, t && (i.writeInt64 = function(e, i) {
            var r = void 0 === i;
            if (r && (i = this.offset), !this.noAssert) {
                if ("number" == typeof e) e = t.fromNumber(e); else if ("string" == typeof e) e = t.fromString(e); else if (!(e && e instanceof t)) throw TypeError("Illegal value: " + e + " (not an integer or Long)");
                if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
                if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength);
            }
            "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e)), 
            i += 8;
            var n = this.buffer.byteLength;
            i > n && this.resize((n *= 2) > i ? n : i), i -= 8;
            var o = e.low, s = e.high;
            return this.littleEndian ? (this.view[i + 3] = o >>> 24 & 255, this.view[i + 2] = o >>> 16 & 255, 
            this.view[i + 1] = o >>> 8 & 255, this.view[i] = 255 & o, i += 4, this.view[i + 3] = s >>> 24 & 255, 
            this.view[i + 2] = s >>> 16 & 255, this.view[i + 1] = s >>> 8 & 255, this.view[i] = 255 & s) : (this.view[i] = s >>> 24 & 255, 
            this.view[i + 1] = s >>> 16 & 255, this.view[i + 2] = s >>> 8 & 255, this.view[i + 3] = 255 & s, 
            i += 4, this.view[i] = o >>> 24 & 255, this.view[i + 1] = o >>> 16 & 255, this.view[i + 2] = o >>> 8 & 255, 
            this.view[i + 3] = 255 & o), r && (this.offset += 8), this;
        }, i.writeLong = i.writeInt64, i.readInt64 = function(e) {
            var i = void 0 === e;
            if (i && (e = this.offset), !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength);
            }
            var r = 0, n = 0;
            this.littleEndian ? (r = this.view[e + 2] << 16, r |= this.view[e + 1] << 8, r |= this.view[e], 
            r += this.view[e + 3] << 24 >>> 0, e += 4, n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, 
            n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, 
            n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0, 
            e += 4, r = this.view[e + 1] << 16, r |= this.view[e + 2] << 8, r |= this.view[e + 3], 
            r += this.view[e] << 24 >>> 0);
            var o = new t(r, n, !1);
            return i && (this.offset += 8), o;
        }, i.readLong = i.readInt64, i.writeUint64 = function(e, i) {
            var r = void 0 === i;
            if (r && (i = this.offset), !this.noAssert) {
                if ("number" == typeof e) e = t.fromNumber(e); else if ("string" == typeof e) e = t.fromString(e); else if (!(e && e instanceof t)) throw TypeError("Illegal value: " + e + " (not an integer or Long)");
                if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
                if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength);
            }
            "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e)), 
            i += 8;
            var n = this.buffer.byteLength;
            i > n && this.resize((n *= 2) > i ? n : i), i -= 8;
            var o = e.low, s = e.high;
            return this.littleEndian ? (this.view[i + 3] = o >>> 24 & 255, this.view[i + 2] = o >>> 16 & 255, 
            this.view[i + 1] = o >>> 8 & 255, this.view[i] = 255 & o, i += 4, this.view[i + 3] = s >>> 24 & 255, 
            this.view[i + 2] = s >>> 16 & 255, this.view[i + 1] = s >>> 8 & 255, this.view[i] = 255 & s) : (this.view[i] = s >>> 24 & 255, 
            this.view[i + 1] = s >>> 16 & 255, this.view[i + 2] = s >>> 8 & 255, this.view[i + 3] = 255 & s, 
            i += 4, this.view[i] = o >>> 24 & 255, this.view[i + 1] = o >>> 16 & 255, this.view[i + 2] = o >>> 8 & 255, 
            this.view[i + 3] = 255 & o), r && (this.offset += 8), this;
        }, i.writeUInt64 = i.writeUint64, i.readUint64 = function(e) {
            var i = void 0 === e;
            if (i && (e = this.offset), !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength);
            }
            var r = 0, n = 0;
            this.littleEndian ? (r = this.view[e + 2] << 16, r |= this.view[e + 1] << 8, r |= this.view[e], 
            r += this.view[e + 3] << 24 >>> 0, e += 4, n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, 
            n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, 
            n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0, 
            e += 4, r = this.view[e + 1] << 16, r |= this.view[e + 2] << 8, r |= this.view[e + 3], 
            r += this.view[e] << 24 >>> 0);
            var o = new t(r, n, !0);
            return i && (this.offset += 8), o;
        }, i.readUInt64 = i.readUint64);
        function ieee754_read(t, e, i, r, n) {
            var o, s, f = 8 * n - r - 1, h = (1 << f) - 1, a = h >> 1, g = -7, u = i ? n - 1 : 0, l = i ? -1 : 1, w = t[e + u];
            for (u += l, o = w & (1 << -g) - 1, w >>= -g, g += f; g > 0; o = 256 * o + t[e + u], 
            u += l, g -= 8) ;
            for (s = o & (1 << -g) - 1, o >>= -g, g += r; g > 0; s = 256 * s + t[e + u], u += l, 
            g -= 8) ;
            if (0 === o) o = 1 - a; else {
                if (o === h) return s ? NaN : 1 / 0 * (w ? -1 : 1);
                s += Math.pow(2, r), o -= a;
            }
            return (w ? -1 : 1) * s * Math.pow(2, o - r);
        }
        function ieee754_write(t, e, i, r, n, o) {
            var s, f, h, a = 8 * o - n - 1, g = (1 << a) - 1, u = g >> 1, l = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w = r ? 0 : o - 1, y = r ? 1 : -1, v = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0, s = g) : (s = Math.floor(Math.log(e) / Math.LN2), 
            e * (h = Math.pow(2, -s)) < 1 && (s--, h *= 2), (e += s + u >= 1 ? l / h : l * Math.pow(2, 1 - u)) * h >= 2 && (s++, 
            h /= 2), s + u >= g ? (f = 0, s = g) : s + u >= 1 ? (f = (e * h - 1) * Math.pow(2, n), 
            s += u) : (f = e * Math.pow(2, u - 1) * Math.pow(2, n), s = 0)); n >= 8; t[i + w] = 255 & f, 
            w += y, f /= 256, n -= 8) ;
            for (s = s << n | f, a += n; a > 0; t[i + w] = 255 & s, w += y, s /= 256, a -= 8) ;
            t[i + w - y] |= 128 * v;
        }
        i.writeFloat32 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset), !this.noAssert) {
                if ("number" != typeof t) throw TypeError("Illegal value: " + t + " (not a number)");
                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
            }
            e += 4;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e), e -= 4, ieee754_write(this.view, t, e, this.littleEndian, 23, 4), 
            i && (this.offset += 4), this;
        }, i.writeFloat = i.writeFloat32, i.readFloat32 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength);
            }
            var i = ieee754_read(this.view, t, this.littleEndian, 23, 4);
            return e && (this.offset += 4), i;
        }, i.readFloat = i.readFloat32, i.writeFloat64 = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset), !this.noAssert) {
                if ("number" != typeof t) throw TypeError("Illegal value: " + t + " (not a number)");
                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
            }
            e += 8;
            var r = this.buffer.byteLength;
            return e > r && this.resize((r *= 2) > e ? r : e), e -= 8, ieee754_write(this.view, t, e, this.littleEndian, 52, 8), 
            i && (this.offset += 8), this;
        }, i.writeDouble = i.writeFloat64, i.readFloat64 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength);
            }
            var i = ieee754_read(this.view, t, this.littleEndian, 52, 8);
            return e && (this.offset += 8), i;
        }, i.readDouble = i.readFloat64, e.MAX_VARINT32_BYTES = 5, e.calculateVarint32 = function(t) {
            return (t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 1 << 21 ? 3 : t < 1 << 28 ? 4 : 5;
        }, e.zigZagEncode32 = function(t) {
            return ((t |= 0) << 1 ^ t >> 31) >>> 0;
        }, e.zigZagDecode32 = function(t) {
            return t >>> 1 ^ -(1 & t) | 0;
        }, i.writeVarint32 = function(t, i) {
            var r = void 0 === i;
            if (r && (i = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0, "number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
                if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength);
            }
            var n, o = e.calculateVarint32(t);
            i += o;
            var s = this.buffer.byteLength;
            for (i > s && this.resize((s *= 2) > i ? s : i), i -= o, t >>>= 0; t >= 128; ) n = 127 & t | 128, 
            this.view[i++] = n, t >>>= 7;
            return this.view[i++] = t, r ? (this.offset = i, this) : o;
        }, i.writeVarint32ZigZag = function(t, i) {
            return this.writeVarint32(e.zigZagEncode32(t), i);
        }, i.readVarint32 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
            }
            var i, r = 0, n = 0;
            do {
                if (!this.noAssert && t > this.limit) {
                    var o = Error("Truncated");
                    throw o.truncated = !0, o;
                }
                i = this.view[t++], r < 5 && (n |= (127 & i) << 7 * r), ++r;
            } while (0 != (128 & i));
            return n |= 0, e ? (this.offset = t, n) : {
                value: n,
                length: r
            };
        }, i.readVarint32ZigZag = function(t) {
            var i = this.readVarint32(t);
            return "object" == typeof i ? i.value = e.zigZagDecode32(i.value) : i = e.zigZagDecode32(i), 
            i;
        }, t && (e.MAX_VARINT64_BYTES = 10, e.calculateVarint64 = function(e) {
            "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e));
            var i = e.toInt() >>> 0, r = e.shiftRightUnsigned(28).toInt() >>> 0, n = e.shiftRightUnsigned(56).toInt() >>> 0;
            return 0 == n ? 0 == r ? i < 16384 ? i < 128 ? 1 : 2 : i < 1 << 21 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 1 << 21 ? 7 : 8 : n < 128 ? 9 : 10;
        }, e.zigZagEncode64 = function(e) {
            return "number" == typeof e ? e = t.fromNumber(e, !1) : "string" == typeof e ? e = t.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned()), 
            e.shiftLeft(1).xor(e.shiftRight(63)).toUnsigned();
        }, e.zigZagDecode64 = function(e) {
            return "number" == typeof e ? e = t.fromNumber(e, !1) : "string" == typeof e ? e = t.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned()), 
            e.shiftRightUnsigned(1).xor(e.and(t.ONE).toSigned().negate()).toSigned();
        }, i.writeVarint64 = function(i, r) {
            var n = void 0 === r;
            if (n && (r = this.offset), !this.noAssert) {
                if ("number" == typeof i) i = t.fromNumber(i); else if ("string" == typeof i) i = t.fromString(i); else if (!(i && i instanceof t)) throw TypeError("Illegal value: " + i + " (not an integer or Long)");
                if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
            }
            "number" == typeof i ? i = t.fromNumber(i, !1) : "string" == typeof i ? i = t.fromString(i, !1) : !1 !== i.unsigned && (i = i.toSigned());
            var o = e.calculateVarint64(i), s = i.toInt() >>> 0, f = i.shiftRightUnsigned(28).toInt() >>> 0, h = i.shiftRightUnsigned(56).toInt() >>> 0;
            r += o;
            var a = this.buffer.byteLength;
            switch (r > a && this.resize((a *= 2) > r ? a : r), r -= o, o) {
              case 10:
                this.view[r + 9] = h >>> 7 & 1;

              case 9:
                this.view[r + 8] = 9 !== o ? 128 | h : 127 & h;

              case 8:
                this.view[r + 7] = 8 !== o ? f >>> 21 | 128 : f >>> 21 & 127;

              case 7:
                this.view[r + 6] = 7 !== o ? f >>> 14 | 128 : f >>> 14 & 127;

              case 6:
                this.view[r + 5] = 6 !== o ? f >>> 7 | 128 : f >>> 7 & 127;

              case 5:
                this.view[r + 4] = 5 !== o ? 128 | f : 127 & f;

              case 4:
                this.view[r + 3] = 4 !== o ? s >>> 21 | 128 : s >>> 21 & 127;

              case 3:
                this.view[r + 2] = 3 !== o ? s >>> 14 | 128 : s >>> 14 & 127;

              case 2:
                this.view[r + 1] = 2 !== o ? s >>> 7 | 128 : s >>> 7 & 127;

              case 1:
                this.view[r] = 1 !== o ? 128 | s : 127 & s;
            }
            return n ? (this.offset += o, this) : o;
        }, i.writeVarint64ZigZag = function(t, i) {
            return this.writeVarint64(e.zigZagEncode64(t), i);
        }, i.readVarint64 = function(e) {
            var i = void 0 === e;
            if (i && (e = this.offset), !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
            }
            var r = e, n = 0, o = 0, s = 0, f = 0;
            if (f = this.view[e++], n = 127 & f, 128 & f && (f = this.view[e++], n |= (127 & f) << 7, 
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++], n |= (127 & f) << 14, 
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++], n |= (127 & f) << 21, 
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++], o = 127 & f, 
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++], o |= (127 & f) << 7, 
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++], o |= (127 & f) << 14, 
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++], o |= (127 & f) << 21, 
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++], s = 127 & f, 
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++], s |= (127 & f) << 7, 
            128 & f || this.noAssert && void 0 === f)))))))))) throw Error("Buffer overrun");
            var h = t.fromBits(n | o << 28, o >>> 4 | s << 24, !1);
            return i ? (this.offset = e, h) : {
                value: h,
                length: e - r
            };
        }, i.readVarint64ZigZag = function(i) {
            var r = this.readVarint64(i);
            return r && r.value instanceof t ? r.value = e.zigZagDecode64(r.value) : r = e.zigZagDecode64(r), 
            r;
        });
        i.writeCString = function(t, e) {
            var i = void 0 === e;
            i && (e = this.offset);
            var r, n = t.length;
            if (!this.noAssert) {
                if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
                for (r = 0; r < n; ++r) if (0 === t.charCodeAt(r)) throw RangeError("Illegal str: Contains NULL-characters");
                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
            }
            n = s.calculateUTF16asUTF8(stringSource(t))[1], e += n + 1;
            var o = this.buffer.byteLength;
            return e > o && this.resize((o *= 2) > e ? o : e), e -= n + 1, s.encodeUTF16toUTF8(stringSource(t), function(t) {
                this.view[e++] = t;
            }.bind(this)), this.view[e++] = 0, i ? (this.offset = e, this) : n;
        }, i.readCString = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
            }
            var i, r = t, n = -1;
            return s.decodeUTF8toUTF16(function() {
                if (0 === n) return null;
                if (t >= this.limit) throw RangeError("Illegal range: Truncated data, " + t + " < " + this.limit);
                return 0 === (n = this.view[t++]) ? null : n;
            }.bind(this), i = stringDestination(), !0), e ? (this.offset = t, i()) : {
                string: i(),
                length: t - r
            };
        }, i.writeIString = function(t, e) {
            var i = void 0 === e;
            if (i && (e = this.offset), !this.noAssert) {
                if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
            }
            var r, n = e;
            r = s.calculateUTF16asUTF8(stringSource(t), this.noAssert)[1], e += 4 + r;
            var o = this.buffer.byteLength;
            if (e > o && this.resize((o *= 2) > e ? o : e), e -= 4 + r, this.littleEndian ? (this.view[e + 3] = r >>> 24 & 255, 
            this.view[e + 2] = r >>> 16 & 255, this.view[e + 1] = r >>> 8 & 255, this.view[e] = 255 & r) : (this.view[e] = r >>> 24 & 255, 
            this.view[e + 1] = r >>> 16 & 255, this.view[e + 2] = r >>> 8 & 255, this.view[e + 3] = 255 & r), 
            e += 4, s.encodeUTF16toUTF8(stringSource(t), function(t) {
                this.view[e++] = t;
            }.bind(this)), e !== n + 4 + r) throw RangeError("Illegal range: Truncated data, " + e + " == " + (e + 4 + r));
            return i ? (this.offset = e, this) : e - n;
        }, i.readIString = function(t) {
            var i = void 0 === t;
            if (i && (t = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength);
            }
            var r = t, n = this.readUint32(t), o = this.readUTF8String(n, e.METRICS_BYTES, t += 4);
            return t += o.length, i ? (this.offset = t, o.string) : {
                string: o.string,
                length: t - r
            };
        }, e.METRICS_CHARS = "c", e.METRICS_BYTES = "b", i.writeUTF8String = function(t, e) {
            var i, r = void 0 === e;
            if (r && (e = this.offset), !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
            }
            var n = e;
            i = s.calculateUTF16asUTF8(stringSource(t))[1], e += i;
            var o = this.buffer.byteLength;
            return e > o && this.resize((o *= 2) > e ? o : e), e -= i, s.encodeUTF16toUTF8(stringSource(t), function(t) {
                this.view[e++] = t;
            }.bind(this)), r ? (this.offset = e, this) : e - n;
        }, i.writeString = i.writeUTF8String, e.calculateUTF8Chars = function(t) {
            return s.calculateUTF16asUTF8(stringSource(t))[0];
        }, e.calculateUTF8Bytes = function(t) {
            return s.calculateUTF16asUTF8(stringSource(t))[1];
        }, e.calculateString = e.calculateUTF8Bytes, i.readUTF8String = function(t, i, r) {
            "number" == typeof i && (r = i, i = void 0);
            var n = void 0 === r;
            if (n && (r = this.offset), void 0 === i && (i = e.METRICS_CHARS), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal length: " + t + " (not an integer)");
                if (t |= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
            }
            var o, f = 0, h = r;
            if (i === e.METRICS_CHARS) {
                if (o = stringDestination(), s.decodeUTF8(function() {
                    return f < t && r < this.limit ? this.view[r++] : null;
                }.bind(this), function(t) {
                    ++f, s.UTF8toUTF16(t, o);
                }), f !== t) throw RangeError("Illegal range: Truncated data, " + f + " == " + t);
                return n ? (this.offset = r, o()) : {
                    string: o(),
                    length: r - h
                };
            }
            if (i === e.METRICS_BYTES) {
                if (!this.noAssert) {
                    if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                    if ((r >>>= 0) < 0 || r + t > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+" + t + ") <= " + this.buffer.byteLength);
                }
                var a = r + t;
                if (s.decodeUTF8toUTF16(function() {
                    return r < a ? this.view[r++] : null;
                }.bind(this), o = stringDestination(), this.noAssert), r !== a) throw RangeError("Illegal range: Truncated data, " + r + " == " + a);
                return n ? (this.offset = r, o()) : {
                    string: o(),
                    length: r - h
                };
            }
            throw TypeError("Unsupported metrics: " + i);
        }, i.readString = i.readUTF8String, i.writeVString = function(t, i) {
            var r = void 0 === i;
            if (r && (i = this.offset), !this.noAssert) {
                if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
                if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
                if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength);
            }
            var n, o, f = i;
            n = s.calculateUTF16asUTF8(stringSource(t), this.noAssert)[1], o = e.calculateVarint32(n), 
            i += o + n;
            var h = this.buffer.byteLength;
            if (i > h && this.resize((h *= 2) > i ? h : i), i -= o + n, i += this.writeVarint32(n, i), 
            s.encodeUTF16toUTF8(stringSource(t), function(t) {
                this.view[i++] = t;
            }.bind(this)), i !== f + n + o) throw RangeError("Illegal range: Truncated data, " + i + " == " + (i + n + o));
            return r ? (this.offset = i, this) : i - f;
        }, i.readVString = function(t) {
            var i = void 0 === t;
            if (i && (t = this.offset), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
            }
            var r = t, n = this.readVarint32(t), o = this.readUTF8String(n.value, e.METRICS_BYTES, t += n.length);
            return t += o.length, i ? (this.offset = t, o.string) : {
                string: o.string,
                length: t - r
            };
        }, i.append = function(t, i, r) {
            "number" != typeof i && "string" == typeof i || (r = i, i = void 0);
            var n = void 0 === r;
            if (n && (r = this.offset), !this.noAssert) {
                if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
            }
            t instanceof e || (t = e.wrap(t, i));
            var o = t.limit - t.offset;
            if (o <= 0) return this;
            r += o;
            var s = this.buffer.byteLength;
            return r > s && this.resize((s *= 2) > r ? s : r), r -= o, this.view.set(t.view.subarray(t.offset, t.limit), r), 
            t.offset += o, n && (this.offset += o), this;
        }, i.appendTo = function(t, e) {
            return t.append(this, e), this;
        }, i.assert = function(t) {
            return this.noAssert = !t, this;
        }, i.capacity = function() {
            return this.buffer.byteLength;
        }, i.clear = function() {
            return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, 
            this;
        }, i.clone = function(t) {
            var i = new e(0, this.littleEndian, this.noAssert);
            return t ? (i.buffer = new ArrayBuffer(this.buffer.byteLength), i.view = new Uint8Array(i.buffer)) : (i.buffer = this.buffer, 
            i.view = this.view), i.offset = this.offset, i.markedOffset = this.markedOffset, 
            i.limit = this.limit, i;
        }, i.compact = function(t, e) {
            if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
            }
            if (0 === t && e === this.buffer.byteLength) return this;
            var i = e - t;
            if (0 === i) return this.buffer = r, this.view = null, this.markedOffset >= 0 && (this.markedOffset -= t), 
            this.offset = 0, this.limit = 0, this;
            var n = new ArrayBuffer(i), o = new Uint8Array(n);
            return o.set(this.view.subarray(t, e)), this.buffer = n, this.view = o, this.markedOffset >= 0 && (this.markedOffset -= t), 
            this.offset = 0, this.limit = i, this;
        }, i.copy = function(t, i) {
            if (void 0 === t && (t = this.offset), void 0 === i && (i = this.limit), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0, "number" != typeof i || i % 1 != 0) throw TypeError("Illegal end: Not an integer");
                if (i >>>= 0, t < 0 || t > i || i > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + i + " <= " + this.buffer.byteLength);
            }
            if (t === i) return new e(0, this.littleEndian, this.noAssert);
            var r = i - t, n = new e(r, this.littleEndian, this.noAssert);
            return n.offset = 0, n.limit = r, n.markedOffset >= 0 && (n.markedOffset -= t), 
            this.copyTo(n, 0, t, i), n;
        }, i.copyTo = function(t, i, r, n) {
            var o, s;
            if (!this.noAssert && !e.isByteBuffer(t)) throw TypeError("Illegal target: Not a ByteBuffer");
            if (i = (s = void 0 === i) ? t.offset : 0 | i, r = (o = void 0 === r) ? this.offset : 0 | r, 
            n = void 0 === n ? this.limit : 0 | n, i < 0 || i > t.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + i + " <= " + t.buffer.byteLength);
            if (r < 0 || n > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + r + " <= " + this.buffer.byteLength);
            var f = n - r;
            return 0 === f ? t : (t.ensureCapacity(i + f), t.view.set(this.view.subarray(r, n), i), 
            o && (this.offset += f), s && (t.offset += f), this);
        }, i.ensureCapacity = function(t) {
            var e = this.buffer.byteLength;
            return e < t ? this.resize((e *= 2) > t ? e : t) : this;
        }, i.fill = function(t, e, i) {
            var r = void 0 === e;
            if (r && (e = this.offset), "string" == typeof t && t.length > 0 && (t = t.charCodeAt(0)), 
            void 0 === e && (e = this.offset), void 0 === i && (i = this.limit), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                if (e >>>= 0, "number" != typeof i || i % 1 != 0) throw TypeError("Illegal end: Not an integer");
                if (i >>>= 0, e < 0 || e > i || i > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + i + " <= " + this.buffer.byteLength);
            }
            if (e >= i) return this;
            for (;e < i; ) this.view[e++] = t;
            return r && (this.offset = e), this;
        }, i.flip = function() {
            return this.limit = this.offset, this.offset = 0, this;
        }, i.mark = function(t) {
            if (t = void 0 === t ? this.offset : t, !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
            }
            return this.markedOffset = t, this;
        }, i.order = function(t) {
            if (!this.noAssert && "boolean" != typeof t) throw TypeError("Illegal littleEndian: Not a boolean");
            return this.littleEndian = !!t, this;
        }, i.LE = function(t) {
            return this.littleEndian = void 0 === t || !!t, this;
        }, i.BE = function(t) {
            return this.littleEndian = void 0 !== t && !t, this;
        }, i.prepend = function(t, i, r) {
            "number" != typeof i && "string" == typeof i || (r = i, i = void 0);
            var n = void 0 === r;
            if (n && (r = this.offset), !this.noAssert) {
                if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
            }
            t instanceof e || (t = e.wrap(t, i));
            var o = t.limit - t.offset;
            if (o <= 0) return this;
            var s = o - r;
            if (s > 0) {
                var f = new ArrayBuffer(this.buffer.byteLength + s), h = new Uint8Array(f);
                h.set(this.view.subarray(r, this.buffer.byteLength), o), this.buffer = f, this.view = h, 
                this.offset += s, this.markedOffset >= 0 && (this.markedOffset += s), this.limit += s, 
                r += s;
            } else new Uint8Array(this.buffer);
            return this.view.set(t.view.subarray(t.offset, t.limit), r - o), t.offset = t.limit, 
            n && (this.offset -= o), this;
        }, i.prependTo = function(t, e) {
            return t.prepend(this, e), this;
        }, i.printDebug = function(t) {
            "function" != typeof t && (t = console.log.bind(console)), t(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0));
        }, i.remaining = function() {
            return this.limit - this.offset;
        }, i.reset = function() {
            return this.markedOffset >= 0 ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0, 
            this;
        }, i.resize = function(t) {
            if (!this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal capacity: " + t + " (not an integer)");
                if ((t |= 0) < 0) throw RangeError("Illegal capacity: 0 <= " + t);
            }
            if (this.buffer.byteLength < t) {
                var e = new ArrayBuffer(t), i = new Uint8Array(e);
                i.set(this.view), this.buffer = e, this.view = i;
            }
            return this;
        }, i.reverse = function(t, e) {
            if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
            }
            return t === e ? this : (Array.prototype.reverse.call(this.view.subarray(t, e)), 
            this);
        }, i.skip = function(t) {
            if (!this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal length: " + t + " (not an integer)");
                t |= 0;
            }
            var e = this.offset + t;
            if (!this.noAssert && (e < 0 || e > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + t + " <= " + this.buffer.byteLength);
            return this.offset = e, this;
        }, i.slice = function(t, e) {
            if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
            }
            var i = this.clone();
            return i.offset = t, i.limit = e, i;
        }, i.toBuffer = function(t) {
            var e = this.offset, i = this.limit;
            if (!this.noAssert) {
                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: Not an integer");
                if (e >>>= 0, "number" != typeof i || i % 1 != 0) throw TypeError("Illegal limit: Not an integer");
                if (i >>>= 0, e < 0 || e > i || i > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + i + " <= " + this.buffer.byteLength);
            }
            if (!t && 0 === e && i === this.buffer.byteLength) return this.buffer;
            if (e === i) return r;
            var n = new ArrayBuffer(i - e);
            return new Uint8Array(n).set(new Uint8Array(this.buffer).subarray(e, i), 0), n;
        }, i.toArrayBuffer = i.toBuffer, i.toString = function(t, e, i) {
            if (void 0 === t) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
            switch ("number" == typeof t && (i = e = t = "utf8"), t) {
              case "utf8":
                return this.toUTF8(e, i);

              case "base64":
                return this.toBase64(e, i);

              case "hex":
                return this.toHex(e, i);

              case "binary":
                return this.toBinary(e, i);

              case "debug":
                return this.toDebug();

              case "columns":
                return this.toColumns();

              default:
                throw Error("Unsupported encoding: " + t);
            }
        };
        var o = function() {
            for (var t = {}, e = [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47 ], i = [], r = 0, n = e.length; r < n; ++r) i[e[r]] = r;
            return t.encode = function(t, i) {
                for (var r, n; null !== (r = t()); ) i(e[r >> 2 & 63]), n = (3 & r) << 4, null !== (r = t()) ? (i(e[63 & ((n |= r >> 4 & 15) | r >> 4 & 15)]), 
                n = (15 & r) << 2, null !== (r = t()) ? (i(e[63 & (n | r >> 6 & 3)]), i(e[63 & r])) : (i(e[63 & n]), 
                i(61))) : (i(e[63 & n]), i(61), i(61));
            }, t.decode = function(t, e) {
                var r, n, o;
                function fail(t) {
                    throw Error("Illegal character code: " + t);
                }
                for (;null !== (r = t()); ) if (void 0 === (n = i[r]) && fail(r), null !== (r = t()) && (void 0 === (o = i[r]) && fail(r), 
                e(n << 2 >>> 0 | (48 & o) >> 4), null !== (r = t()))) {
                    if (void 0 === (n = i[r])) {
                        if (61 === r) break;
                        fail(r);
                    }
                    if (e((15 & o) << 4 >>> 0 | (60 & n) >> 2), null !== (r = t())) {
                        if (void 0 === (o = i[r])) {
                            if (61 === r) break;
                            fail(r);
                        }
                        e((3 & n) << 6 >>> 0 | o);
                    }
                }
            }, t.test = function(t) {
                return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(t);
            }, t;
        }();
        i.toBase64 = function(t, e) {
            if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), e |= 0, 
            (t |= 0) < 0 || e > this.capacity || t > e) throw RangeError("begin, end");
            var i;
            return o.encode(function() {
                return t < e ? this.view[t++] : null;
            }.bind(this), i = stringDestination()), i();
        }, e.fromBase64 = function(t, i) {
            if ("string" != typeof t) throw TypeError("str");
            var r = new e(t.length / 4 * 3, i), n = 0;
            return o.decode(stringSource(t), function(t) {
                r.view[n++] = t;
            }), r.limit = n, r;
        }, e.btoa = function(t) {
            return e.fromBinary(t).toBase64();
        }, e.atob = function(t) {
            return e.fromBase64(t).toBinary();
        }, i.toBinary = function(t, e) {
            if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), e |= 0, 
            (t |= 0) < 0 || e > this.capacity() || t > e) throw RangeError("begin, end");
            if (t === e) return "";
            for (var i = [], r = []; t < e; ) i.push(this.view[t++]), i.length >= 1024 && (r.push(String.fromCharCode.apply(String, i)), 
            i = []);
            return r.join("") + String.fromCharCode.apply(String, i);
        }, e.fromBinary = function(t, i) {
            if ("string" != typeof t) throw TypeError("str");
            for (var r, n = 0, o = t.length, s = new e(o, i); n < o; ) {
                if ((r = t.charCodeAt(n)) > 255) throw RangeError("illegal char code: " + r);
                s.view[n++] = r;
            }
            return s.limit = o, s;
        }, i.toDebug = function(t) {
            for (var e, i = -1, r = this.buffer.byteLength, n = "", o = "", s = ""; i < r; ) {
                if (-1 !== i && (e = this.view[i], n += e < 16 ? "0" + e.toString(16).toUpperCase() : e.toString(16).toUpperCase(), 
                t && (o += e > 32 && e < 127 ? String.fromCharCode(e) : ".")), ++i, t && i > 0 && i % 16 == 0 && i !== r) {
                    for (;n.length < 51; ) n += " ";
                    s += n + o + "\n", n = o = "";
                }
                i === this.offset && i === this.limit ? n += i === this.markedOffset ? "!" : "|" : i === this.offset ? n += i === this.markedOffset ? "[" : "<" : i === this.limit ? n += i === this.markedOffset ? "]" : ">" : n += i === this.markedOffset ? "'" : t || 0 !== i && i !== r ? " " : "";
            }
            if (t && " " !== n) {
                for (;n.length < 51; ) n += " ";
                s += n + o + "\n";
            }
            return t ? s : n;
        }, e.fromDebug = function(t, i, r) {
            for (var n, o, s = t.length, f = new e((s + 1) / 3 | 0, i, r), h = 0, a = 0, g = !1, u = !1, l = !1, w = !1, y = !1; h < s; ) {
                switch (n = t.charAt(h++)) {
                  case "!":
                    if (!r) {
                        if (u || l || w) {
                            y = !0;
                            break;
                        }
                        u = l = w = !0;
                    }
                    f.offset = f.markedOffset = f.limit = a, g = !1;
                    break;

                  case "|":
                    if (!r) {
                        if (u || w) {
                            y = !0;
                            break;
                        }
                        u = w = !0;
                    }
                    f.offset = f.limit = a, g = !1;
                    break;

                  case "[":
                    if (!r) {
                        if (u || l) {
                            y = !0;
                            break;
                        }
                        u = l = !0;
                    }
                    f.offset = f.markedOffset = a, g = !1;
                    break;

                  case "<":
                    if (!r) {
                        if (u) {
                            y = !0;
                            break;
                        }
                        u = !0;
                    }
                    f.offset = a, g = !1;
                    break;

                  case "]":
                    if (!r) {
                        if (w || l) {
                            y = !0;
                            break;
                        }
                        w = l = !0;
                    }
                    f.limit = f.markedOffset = a, g = !1;
                    break;

                  case ">":
                    if (!r) {
                        if (w) {
                            y = !0;
                            break;
                        }
                        w = !0;
                    }
                    f.limit = a, g = !1;
                    break;

                  case "'":
                    if (!r) {
                        if (l) {
                            y = !0;
                            break;
                        }
                        l = !0;
                    }
                    f.markedOffset = a, g = !1;
                    break;

                  case " ":
                    g = !1;
                    break;

                  default:
                    if (!r && g) {
                        y = !0;
                        break;
                    }
                    if (o = parseInt(n + t.charAt(h++), 16), !r && (isNaN(o) || o < 0 || o > 255)) throw TypeError("Illegal str: Not a debug encoded string");
                    f.view[a++] = o, g = !0;
                }
                if (y) throw TypeError("Illegal str: Invalid symbol at " + h);
            }
            if (!r) {
                if (!u || !w) throw TypeError("Illegal str: Missing offset or limit");
                if (a < f.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + a + " < " + s);
            }
            return f;
        }, i.toHex = function(t, e) {
            if (t = void 0 === t ? this.offset : t, e = void 0 === e ? this.limit : e, !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
            }
            for (var i, r = new Array(e - t); t < e; ) (i = this.view[t++]) < 16 ? r.push("0", i.toString(16)) : r.push(i.toString(16));
            return r.join("");
        }, e.fromHex = function(t, i, r) {
            if (!r) {
                if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
                if (t.length % 2 != 0) throw TypeError("Illegal str: Length not a multiple of 2");
            }
            for (var n, o = t.length, s = new e(o / 2 | 0, i), f = 0, h = 0; f < o; f += 2) {
                if (n = parseInt(t.substring(f, f + 2), 16), !r && (!isFinite(n) || n < 0 || n > 255)) throw TypeError("Illegal str: Contains non-hex characters");
                s.view[h++] = n;
            }
            return s.limit = h, s;
        };
        var s = function() {
            var t = {
                MAX_CODEPOINT: 1114111,
                encodeUTF8: function(t, e) {
                    var i = null;
                    for ("number" == typeof t && (i = t, t = function() {
                        return null;
                    }); null !== i || null !== (i = t()); ) i < 128 ? e(127 & i) : i < 2048 ? (e(i >> 6 & 31 | 192), 
                    e(63 & i | 128)) : i < 65536 ? (e(i >> 12 & 15 | 224), e(i >> 6 & 63 | 128), e(63 & i | 128)) : (e(i >> 18 & 7 | 240), 
                    e(i >> 12 & 63 | 128), e(i >> 6 & 63 | 128), e(63 & i | 128)), i = null;
                },
                decodeUTF8: function(t, e) {
                    for (var i, r, n, o, s = function(t) {
                        t = t.slice(0, t.indexOf(null));
                        var e = Error(t.toString());
                        throw e.name = "TruncatedError", e.bytes = t, e;
                    }; null !== (i = t()); ) if (0 == (128 & i)) e(i); else if (192 == (224 & i)) null === (r = t()) && s([ i, r ]), 
                    e((31 & i) << 6 | 63 & r); else if (224 == (240 & i)) (null === (r = t()) || null === (n = t())) && s([ i, r, n ]), 
                    e((15 & i) << 12 | (63 & r) << 6 | 63 & n); else {
                        if (240 != (248 & i)) throw RangeError("Illegal starting byte: " + i);
                        (null === (r = t()) || null === (n = t()) || null === (o = t())) && s([ i, r, n, o ]), 
                        e((7 & i) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & o);
                    }
                },
                UTF16toUTF8: function(t, e) {
                    for (var i, r = null; null !== (i = null !== r ? r : t()); ) i >= 55296 && i <= 57343 && null !== (r = t()) && r >= 56320 && r <= 57343 ? (e(1024 * (i - 55296) + r - 56320 + 65536), 
                    r = null) : e(i);
                    null !== r && e(r);
                },
                UTF8toUTF16: function(t, e) {
                    var i = null;
                    for ("number" == typeof t && (i = t, t = function() {
                        return null;
                    }); null !== i || null !== (i = t()); ) i <= 65535 ? e(i) : (e(55296 + ((i -= 65536) >> 10)), 
                    e(i % 1024 + 56320)), i = null;
                },
                encodeUTF16toUTF8: function(e, i) {
                    t.UTF16toUTF8(e, function(e) {
                        t.encodeUTF8(e, i);
                    });
                },
                decodeUTF8toUTF16: function(e, i) {
                    t.decodeUTF8(e, function(e) {
                        t.UTF8toUTF16(e, i);
                    });
                },
                calculateCodePoint: function(t) {
                    return t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
                },
                calculateUTF8: function(t) {
                    for (var e, i = 0; null !== (e = t()); ) i += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
                    return i;
                },
                calculateUTF16asUTF8: function(e) {
                    var i = 0, r = 0;
                    return t.UTF16toUTF8(e, function(t) {
                        ++i, r += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
                    }), [ i, r ];
                }
            };
            return t;
        }();
        return i.toUTF8 = function(t, e) {
            if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
            }
            var i;
            try {
                s.decodeUTF8toUTF16(function() {
                    return t < e ? this.view[t++] : null;
                }.bind(this), i = stringDestination());
            } catch (i) {
                i = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(i);
                if (t !== e) throw RangeError("Illegal range: Truncated data, " + t + " != " + e);
            }
            return i();
        }, e.fromUTF8 = function(t, i, r) {
            if (!r && "string" != typeof t) throw TypeError("Illegal str: Not a string");
            var n = new e(s.calculateUTF16asUTF8(stringSource(t), !0)[1], i, r), o = 0;
            return s.encodeUTF16toUTF8(stringSource(t), function(t) {
                n.view[o++] = t;
            }), n.limit = o, n;
        }, e;
    }(Long);
}(this);