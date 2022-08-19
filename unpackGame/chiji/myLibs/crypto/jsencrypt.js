!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([ "exports" ], e) : e(t.JSEncrypt = {});
}(this, function(t) {
    "use strict";
    var e = "0123456789abcdefghijklmnopqrstuvwxyz";
    function int2char(t) {
        return e.charAt(t);
    }
    function op_and(t, e) {
        return t & e;
    }
    function op_or(t, e) {
        return t | e;
    }
    function op_xor(t, e) {
        return t ^ e;
    }
    function op_andnot(t, e) {
        return t & ~e;
    }
    function lbit(t) {
        if (0 == t) return -1;
        var e = 0;
        return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 
        0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, 
        e;
    }
    function cbit(t) {
        for (var e = 0; 0 != t; ) t &= t - 1, ++e;
        return e;
    }
    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = "=";
    function hex2b64(t) {
        var e, n, s = "";
        for (e = 0; e + 3 <= t.length; e += 3) n = parseInt(t.substring(e, e + 3), 16), 
        s += i.charAt(n >> 6) + i.charAt(63 & n);
        for (e + 1 == t.length ? (n = parseInt(t.substring(e, e + 1), 16), s += i.charAt(n << 2)) : e + 2 == t.length && (n = parseInt(t.substring(e, e + 2), 16), 
        s += i.charAt(n >> 2) + i.charAt((3 & n) << 4)); (3 & s.length) > 0; ) s += r;
        return s;
    }
    function b64tohex(t) {
        var e, n = "", s = 0, o = 0;
        for (e = 0; e < t.length && t.charAt(e) != r; ++e) {
            var h = i.indexOf(t.charAt(e));
            h < 0 || (0 == s ? (n += int2char(h >> 2), o = 3 & h, s = 1) : 1 == s ? (n += int2char(o << 2 | h >> 4), 
            o = 15 & h, s = 2) : 2 == s ? (n += int2char(o), n += int2char(h >> 2), o = 3 & h, 
            s = 3) : (n += int2char(o << 2 | h >> 4), n += int2char(15 & h), s = 0));
        }
        return 1 == s && (n += int2char(o << 2)), n;
    }
    var n, s = function(t, e) {
        return (s = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    };
    var o, h = function(t) {
        var e;
        if (void 0 === n) {
            var i = "0123456789ABCDEF", r = " \f\n\r\t \u2028\u2029";
            for (n = {}, e = 0; e < 16; ++e) n[i.charAt(e)] = e;
            for (i = i.toLowerCase(), e = 10; e < 16; ++e) n[i.charAt(e)] = e;
            for (e = 0; e < r.length; ++e) n[r.charAt(e)] = -1;
        }
        var s = [], o = 0, h = 0;
        for (e = 0; e < t.length; ++e) {
            var a = t.charAt(e);
            if ("=" == a) break;
            if (-1 != (a = n[a])) {
                if (void 0 === a) throw new Error("Illegal character at offset " + e);
                o |= a, ++h >= 2 ? (s[s.length] = o, o = 0, h = 0) : o <<= 4;
            }
        }
        if (h) throw new Error("Hex encoding incomplete: 4 bits missing");
        return s;
    }, a = {
        decode: function(t) {
            var e;
            if (void 0 === o) {
                var i = "= \f\n\r\t \u2028\u2029";
                for (o = Object.create(null), e = 0; e < 64; ++e) o["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                for (e = 0; e < i.length; ++e) o[i.charAt(e)] = -1;
            }
            var r = [], n = 0, s = 0;
            for (e = 0; e < t.length; ++e) {
                var h = t.charAt(e);
                if ("=" == h) break;
                if (-1 != (h = o[h])) {
                    if (void 0 === h) throw new Error("Illegal character at offset " + e);
                    n |= h, ++s >= 4 ? (r[r.length] = n >> 16, r[r.length] = n >> 8 & 255, r[r.length] = 255 & n, 
                    n = 0, s = 0) : n <<= 6;
                }
            }
            switch (s) {
              case 1:
                throw new Error("Base64 encoding incomplete: at least 2 bits missing");

              case 2:
                r[r.length] = n >> 10;
                break;

              case 3:
                r[r.length] = n >> 16, r[r.length] = n >> 8 & 255;
            }
            return r;
        },
        re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
        unarmor: function(t) {
            var e = a.re.exec(t);
            if (e) if (e[1]) t = e[1]; else {
                if (!e[2]) throw new Error("RegExp out of sync");
                t = e[2];
            }
            return a.decode(t);
        }
    }, u = function() {
        function Int10(t) {
            this.buf = [ +t || 0 ];
        }
        return Int10.prototype.mulAdd = function(t, e) {
            var i, r, n = this.buf, s = n.length;
            for (i = 0; i < s; ++i) (r = n[i] * t + e) < 1e13 ? e = 0 : r -= 1e13 * (e = 0 | r / 1e13), 
            n[i] = r;
            e > 0 && (n[i] = e);
        }, Int10.prototype.sub = function(t) {
            var e, i, r = this.buf, n = r.length;
            for (e = 0; e < n; ++e) (i = r[e] - t) < 0 ? (i += 1e13, t = 1) : t = 0, r[e] = i;
            for (;0 === r[r.length - 1]; ) r.pop();
        }, Int10.prototype.toString = function(t) {
            if (10 != (t || 10)) throw new Error("only base 10 is supported");
            for (var e = this.buf, i = e[e.length - 1].toString(), r = e.length - 2; r >= 0; --r) i += (1e13 + e[r]).toString().substring(1);
            return i;
        }, Int10.prototype.valueOf = function() {
            for (var t = this.buf, e = 0, i = t.length - 1; i >= 0; --i) e = 1e13 * e + t[i];
            return e;
        }, Int10.prototype.simplify = function() {
            var t = this.buf;
            return 1 == t.length ? t[0] : this;
        }, Int10;
    }(), c = "…", f = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, g = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
    function stringCut(t, e) {
        return t.length > e && (t = t.substring(0, e) + c), t;
    }
    var l, p = function() {
        function Stream(t, e) {
            this.hexDigits = "0123456789ABCDEF", t instanceof Stream ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t, 
            this.pos = e);
        }
        return Stream.prototype.get = function(t) {
            if (void 0 === t && (t = this.pos++), t >= this.enc.length) throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
            return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t];
        }, Stream.prototype.hexByte = function(t) {
            return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t);
        }, Stream.prototype.hexDump = function(t, e, i) {
            for (var r = "", n = t; n < e; ++n) if (r += this.hexByte(this.get(n)), !0 !== i) switch (15 & n) {
              case 7:
                r += "  ";
                break;

              case 15:
                r += "\n";
                break;

              default:
                r += " ";
            }
            return r;
        }, Stream.prototype.isASCII = function(t, e) {
            for (var i = t; i < e; ++i) {
                var r = this.get(i);
                if (r < 32 || r > 176) return !1;
            }
            return !0;
        }, Stream.prototype.parseStringISO = function(t, e) {
            for (var i = "", r = t; r < e; ++r) i += String.fromCharCode(this.get(r));
            return i;
        }, Stream.prototype.parseStringUTF = function(t, e) {
            for (var i = "", r = t; r < e; ) {
                var n = this.get(r++);
                i += n < 128 ? String.fromCharCode(n) : n > 191 && n < 224 ? String.fromCharCode((31 & n) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & n) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++));
            }
            return i;
        }, Stream.prototype.parseStringBMP = function(t, e) {
            for (var i, r, n = "", s = t; s < e; ) i = this.get(s++), r = this.get(s++), n += String.fromCharCode(i << 8 | r);
            return n;
        }, Stream.prototype.parseTime = function(t, e, i) {
            var r = this.parseStringISO(t, e), n = (i ? f : g).exec(r);
            return n ? (i && (n[1] = +n[1], n[1] += +n[1] < 70 ? 2e3 : 1900), r = n[1] + "-" + n[2] + "-" + n[3] + " " + n[4], 
            n[5] && (r += ":" + n[5], n[6] && (r += ":" + n[6], n[7] && (r += "." + n[7]))), 
            n[8] && (r += " UTC", "Z" != n[8] && (r += n[8], n[9] && (r += ":" + n[9]))), r) : "Unrecognized time: " + r;
        }, Stream.prototype.parseInteger = function(t, e) {
            for (var i, r = this.get(t), n = r > 127, s = n ? 255 : 0, o = ""; r == s && ++t < e; ) r = this.get(t);
            if (0 === (i = e - t)) return n ? -1 : 0;
            if (i > 4) {
                for (o = r, i <<= 3; 0 == (128 & (+o ^ s)); ) o = +o << 1, --i;
                o = "(" + i + " bit)\n";
            }
            n && (r -= 256);
            for (var h = new u(r), a = t + 1; a < e; ++a) h.mulAdd(256, this.get(a));
            return o + h.toString();
        }, Stream.prototype.parseBitString = function(t, e, i) {
            for (var r = this.get(t), n = "(" + ((e - t - 1 << 3) - r) + " bit)\n", s = "", o = t + 1; o < e; ++o) {
                for (var h = this.get(o), a = o == e - 1 ? r : 0, u = 7; u >= a; --u) s += h >> u & 1 ? "1" : "0";
                if (s.length > i) return n + stringCut(s, i);
            }
            return n + s;
        }, Stream.prototype.parseOctetString = function(t, e, i) {
            if (this.isASCII(t, e)) return stringCut(this.parseStringISO(t, e), i);
            var r = e - t, n = "(" + r + " byte)\n";
            r > (i /= 2) && (e = t + i);
            for (var s = t; s < e; ++s) n += this.hexByte(this.get(s));
            return r > i && (n += c), n;
        }, Stream.prototype.parseOID = function(t, e, i) {
            for (var r = "", n = new u(), s = 0, o = t; o < e; ++o) {
                var h = this.get(o);
                if (n.mulAdd(128, 127 & h), s += 7, !(128 & h)) {
                    if ("" === r) if ((n = n.simplify()) instanceof u) n.sub(80), r = "2." + n.toString(); else {
                        var a = n < 80 ? n < 40 ? 0 : 1 : 2;
                        r = a + "." + (n - 40 * a);
                    } else r += "." + n.toString();
                    if (r.length > i) return stringCut(r, i);
                    n = new u(), s = 0;
                }
            }
            return s > 0 && (r += ".incomplete"), r;
        }, Stream;
    }(), d = function() {
        function ASN1(t, e, i, r, n) {
            if (!(r instanceof y)) throw new Error("Invalid tag value.");
            this.stream = t, this.header = e, this.length = i, this.tag = r, this.sub = n;
        }
        return ASN1.prototype.typeName = function() {
            switch (this.tag.tagClass) {
              case 0:
                switch (this.tag.tagNumber) {
                  case 0:
                    return "EOC";

                  case 1:
                    return "BOOLEAN";

                  case 2:
                    return "INTEGER";

                  case 3:
                    return "BIT_STRING";

                  case 4:
                    return "OCTET_STRING";

                  case 5:
                    return "NULL";

                  case 6:
                    return "OBJECT_IDENTIFIER";

                  case 7:
                    return "ObjectDescriptor";

                  case 8:
                    return "EXTERNAL";

                  case 9:
                    return "REAL";

                  case 10:
                    return "ENUMERATED";

                  case 11:
                    return "EMBEDDED_PDV";

                  case 12:
                    return "UTF8String";

                  case 16:
                    return "SEQUENCE";

                  case 17:
                    return "SET";

                  case 18:
                    return "NumericString";

                  case 19:
                    return "PrintableString";

                  case 20:
                    return "TeletexString";

                  case 21:
                    return "VideotexString";

                  case 22:
                    return "IA5String";

                  case 23:
                    return "UTCTime";

                  case 24:
                    return "GeneralizedTime";

                  case 25:
                    return "GraphicString";

                  case 26:
                    return "VisibleString";

                  case 27:
                    return "GeneralString";

                  case 28:
                    return "UniversalString";

                  case 30:
                    return "BMPString";
                }
                return "Universal_" + this.tag.tagNumber.toString();

              case 1:
                return "Application_" + this.tag.tagNumber.toString();

              case 2:
                return "[" + this.tag.tagNumber.toString() + "]";

              case 3:
                return "Private_" + this.tag.tagNumber.toString();
            }
        }, ASN1.prototype.content = function(t) {
            if (void 0 === this.tag) return null;
            void 0 === t && (t = 1 / 0);
            var e = this.posContent(), i = Math.abs(this.length);
            if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
            switch (this.tag.tagNumber) {
              case 1:
                return 0 === this.stream.get(e) ? "false" : "true";

              case 2:
                return this.stream.parseInteger(e, e + i);

              case 3:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + i, t);

              case 4:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);

              case 6:
                return this.stream.parseOID(e, e + i, t);

              case 16:
              case 17:
                return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";

              case 12:
                return stringCut(this.stream.parseStringUTF(e, e + i), t);

              case 18:
              case 19:
              case 20:
              case 21:
              case 22:
              case 26:
                return stringCut(this.stream.parseStringISO(e, e + i), t);

              case 30:
                return stringCut(this.stream.parseStringBMP(e, e + i), t);

              case 23:
              case 24:
                return this.stream.parseTime(e, e + i, 23 == this.tag.tagNumber);
            }
            return null;
        }, ASN1.prototype.toString = function() {
            return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]";
        }, ASN1.prototype.toPrettyString = function(t) {
            void 0 === t && (t = "");
            var e = t + this.typeName() + " @" + this.stream.pos;
            if (this.length >= 0 && (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"), 
            e += "\n", null !== this.sub) {
                t += "  ";
                for (var i = 0, r = this.sub.length; i < r; ++i) e += this.sub[i].toPrettyString(t);
            }
            return e;
        }, ASN1.prototype.posStart = function() {
            return this.stream.pos;
        }, ASN1.prototype.posContent = function() {
            return this.stream.pos + this.header;
        }, ASN1.prototype.posEnd = function() {
            return this.stream.pos + this.header + Math.abs(this.length);
        }, ASN1.prototype.toHexString = function() {
            return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
        }, ASN1.decodeLength = function(t) {
            var e = t.get(), i = 127 & e;
            if (i == e) return i;
            if (i > 6) throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
            if (0 === i) return null;
            e = 0;
            for (var r = 0; r < i; ++r) e = 256 * e + t.get();
            return e;
        }, ASN1.prototype.getHexStringValue = function() {
            var t = this.toHexString(), e = 2 * this.header, i = 2 * this.length;
            return t.substr(e, i);
        }, ASN1.decode = function(t) {
            var e;
            e = t instanceof p ? t : new p(t, 0);
            var i = new p(e), r = new y(e), n = ASN1.decodeLength(e), s = e.pos, o = s - i.pos, h = null, a = function() {
                var t = [];
                if (null !== n) {
                    for (var i = s + n; e.pos < i; ) t[t.length] = ASN1.decode(e);
                    if (e.pos != i) throw new Error("Content size is not correct for container starting at offset " + s);
                } else try {
                    for (;;) {
                        var r = ASN1.decode(e);
                        if (r.tag.isEOC()) break;
                        t[t.length] = r;
                    }
                    n = s - e.pos;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    throw new Error("Exception while decoding undefined length content: " + t);
                }
                return t;
            };
            if (r.tagConstructed) h = a(); else if (r.isUniversal() && (3 == r.tagNumber || 4 == r.tagNumber)) try {
                if (3 == r.tagNumber && 0 != e.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                h = a();
                for (var u = 0; u < h.length; ++u) if (h[u].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.");
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                h = null;
            }
            if (null === h) {
                if (null === n) throw new Error("We can't skip over an invalid tag with undefined length at offset " + s);
                e.pos = s + Math.abs(n);
            }
            return new ASN1(i, o, n, r, h);
        }, ASN1;
    }(), y = function() {
        function ASN1Tag(t) {
            var e = t.get();
            if (this.tagClass = e >> 6, this.tagConstructed = 0 != (32 & e), this.tagNumber = 31 & e, 
            31 == this.tagNumber) {
                var i = new u();
                do {
                    e = t.get(), i.mulAdd(128, 127 & e);
                } while (128 & e);
                this.tagNumber = i.simplify();
            }
        }
        return ASN1Tag.prototype.isUniversal = function() {
            return 0 === this.tagClass;
        }, ASN1Tag.prototype.isEOC = function() {
            return 0 === this.tagClass && 0 === this.tagNumber;
        }, ASN1Tag;
    }(), m = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997 ], v = (1 << 26) / m[m.length - 1], b = function() {
        function BigInteger(t, e, i) {
            null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e));
        }
        return BigInteger.prototype.toString = function(t) {
            if (this.s < 0) return "-" + this.negate().toString(t);
            var e;
            if (16 == t) e = 4; else if (8 == t) e = 3; else if (2 == t) e = 1; else if (32 == t) e = 5; else {
                if (4 != t) return this.toRadix(t);
                e = 2;
            }
            var i, r = (1 << e) - 1, n = !1, s = "", o = this.t, h = this.DB - o * this.DB % e;
            if (o-- > 0) for (h < this.DB && (i = this[o] >> h) > 0 && (n = !0, s = int2char(i)); o >= 0; ) h < e ? (i = (this[o] & (1 << h) - 1) << e - h, 
            i |= this[--o] >> (h += this.DB - e)) : (i = this[o] >> (h -= e) & r, h <= 0 && (h += this.DB, 
            --o)), i > 0 && (n = !0), n && (s += int2char(i));
            return n ? s : "0";
        }, BigInteger.prototype.negate = function() {
            var t = nbi();
            return BigInteger.ZERO.subTo(this, t), t;
        }, BigInteger.prototype.abs = function() {
            return this.s < 0 ? this.negate() : this;
        }, BigInteger.prototype.compareTo = function(t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var i = this.t;
            if (0 != (e = i - t.t)) return this.s < 0 ? -e : e;
            for (;--i >= 0; ) if (0 != (e = this[i] - t[i])) return e;
            return 0;
        }, BigInteger.prototype.bitLength = function() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
        }, BigInteger.prototype.mod = function(t) {
            var e = nbi();
            return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && t.subTo(e, e), 
            e;
        }, BigInteger.prototype.modPowInt = function(t, e) {
            var i;
            return i = t < 256 || e.isEven() ? new T(e) : new E(e), this.exp(t, i);
        }, BigInteger.prototype.clone = function() {
            var t = nbi();
            return this.copyTo(t), t;
        }, BigInteger.prototype.intValue = function() {
            if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV;
                if (0 == this.t) return -1;
            } else {
                if (1 == this.t) return this[0];
                if (0 == this.t) return 0;
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
        }, BigInteger.prototype.byteValue = function() {
            return 0 == this.t ? this.s : this[0] << 24 >> 24;
        }, BigInteger.prototype.shortValue = function() {
            return 0 == this.t ? this.s : this[0] << 16 >> 16;
        }, BigInteger.prototype.signum = function() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
        }, BigInteger.prototype.toByteArray = function() {
            var t = this.t, e = [];
            e[0] = this.s;
            var i, r = this.DB - t * this.DB % 8, n = 0;
            if (t-- > 0) for (r < this.DB && (i = this[t] >> r) != (this.s & this.DM) >> r && (e[n++] = i | this.s << this.DB - r); t >= 0; ) r < 8 ? (i = (this[t] & (1 << r) - 1) << 8 - r, 
            i |= this[--t] >> (r += this.DB - 8)) : (i = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, 
            --t)), 0 != (128 & i) && (i |= -256), 0 == n && (128 & this.s) != (128 & i) && ++n, 
            (n > 0 || i != this.s) && (e[n++] = i);
            return e;
        }, BigInteger.prototype.equals = function(t) {
            return 0 == this.compareTo(t);
        }, BigInteger.prototype.min = function(t) {
            return this.compareTo(t) < 0 ? this : t;
        }, BigInteger.prototype.max = function(t) {
            return this.compareTo(t) > 0 ? this : t;
        }, BigInteger.prototype.and = function(t) {
            var e = nbi();
            return this.bitwiseTo(t, op_and, e), e;
        }, BigInteger.prototype.or = function(t) {
            var e = nbi();
            return this.bitwiseTo(t, op_or, e), e;
        }, BigInteger.prototype.xor = function(t) {
            var e = nbi();
            return this.bitwiseTo(t, op_xor, e), e;
        }, BigInteger.prototype.andNot = function(t) {
            var e = nbi();
            return this.bitwiseTo(t, op_andnot, e), e;
        }, BigInteger.prototype.not = function() {
            for (var t = nbi(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
            return t.t = this.t, t.s = ~this.s, t;
        }, BigInteger.prototype.shiftLeft = function(t) {
            var e = nbi();
            return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e;
        }, BigInteger.prototype.shiftRight = function(t) {
            var e = nbi();
            return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e;
        }, BigInteger.prototype.getLowestSetBit = function() {
            for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + lbit(this[t]);
            return this.s < 0 ? this.t * this.DB : -1;
        }, BigInteger.prototype.bitCount = function() {
            for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += cbit(this[i] ^ e);
            return t;
        }, BigInteger.prototype.testBit = function(t) {
            var e = Math.floor(t / this.DB);
            return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB);
        }, BigInteger.prototype.setBit = function(t) {
            return this.changeBit(t, op_or);
        }, BigInteger.prototype.clearBit = function(t) {
            return this.changeBit(t, op_andnot);
        }, BigInteger.prototype.flipBit = function(t) {
            return this.changeBit(t, op_xor);
        }, BigInteger.prototype.add = function(t) {
            var e = nbi();
            return this.addTo(t, e), e;
        }, BigInteger.prototype.subtract = function(t) {
            var e = nbi();
            return this.subTo(t, e), e;
        }, BigInteger.prototype.multiply = function(t) {
            var e = nbi();
            return this.multiplyTo(t, e), e;
        }, BigInteger.prototype.divide = function(t) {
            var e = nbi();
            return this.divRemTo(t, e, null), e;
        }, BigInteger.prototype.remainder = function(t) {
            var e = nbi();
            return this.divRemTo(t, null, e), e;
        }, BigInteger.prototype.divideAndRemainder = function(t) {
            var e = nbi(), i = nbi();
            return this.divRemTo(t, e, i), [ e, i ];
        }, BigInteger.prototype.modPow = function(t, e) {
            var i, r, n = t.bitLength(), s = nbv(1);
            if (n <= 0) return s;
            i = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6, r = n < 8 ? new T(e) : e.isEven() ? new B(e) : new E(e);
            var o = [], h = 3, a = i - 1, u = (1 << i) - 1;
            if (o[1] = r.convert(this), i > 1) {
                var c = nbi();
                for (r.sqrTo(o[1], c); h <= u; ) o[h] = nbi(), r.mulTo(c, o[h - 2], o[h]), h += 2;
            }
            var f, g, l = t.t - 1, p = !0, d = nbi();
            for (n = nbits(t[l]) - 1; l >= 0; ) {
                for (n >= a ? f = t[l] >> n - a & u : (f = (t[l] & (1 << n + 1) - 1) << a - n, l > 0 && (f |= t[l - 1] >> this.DB + n - a)), 
                h = i; 0 == (1 & f); ) f >>= 1, --h;
                if ((n -= h) < 0 && (n += this.DB, --l), p) o[f].copyTo(s), p = !1; else {
                    for (;h > 1; ) r.sqrTo(s, d), r.sqrTo(d, s), h -= 2;
                    h > 0 ? r.sqrTo(s, d) : (g = s, s = d, d = g), r.mulTo(d, o[f], s);
                }
                for (;l >= 0 && 0 == (t[l] & 1 << n); ) r.sqrTo(s, d), g = s, s = d, d = g, --n < 0 && (n = this.DB - 1, 
                --l);
            }
            return r.revert(s);
        }, BigInteger.prototype.modInverse = function(t) {
            var e = t.isEven();
            if (this.isEven() && e || 0 == t.signum()) return BigInteger.ZERO;
            for (var i = t.clone(), r = this.clone(), n = nbv(1), s = nbv(0), o = nbv(0), h = nbv(1); 0 != i.signum(); ) {
                for (;i.isEven(); ) i.rShiftTo(1, i), e ? (n.isEven() && s.isEven() || (n.addTo(this, n), 
                s.subTo(t, s)), n.rShiftTo(1, n)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                for (;r.isEven(); ) r.rShiftTo(1, r), e ? (o.isEven() && h.isEven() || (o.addTo(this, o), 
                h.subTo(t, h)), o.rShiftTo(1, o)) : h.isEven() || h.subTo(t, h), h.rShiftTo(1, h);
                i.compareTo(r) >= 0 ? (i.subTo(r, i), e && n.subTo(o, n), s.subTo(h, s)) : (r.subTo(i, r), 
                e && o.subTo(n, o), h.subTo(s, h));
            }
            return 0 != r.compareTo(BigInteger.ONE) ? BigInteger.ZERO : h.compareTo(t) >= 0 ? h.subtract(t) : h.signum() < 0 ? (h.addTo(t, h), 
            h.signum() < 0 ? h.add(t) : h) : h;
        }, BigInteger.prototype.pow = function(t) {
            return this.exp(t, new S());
        }, BigInteger.prototype.gcd = function(t) {
            var e = this.s < 0 ? this.negate() : this.clone(), i = t.s < 0 ? t.negate() : t.clone();
            if (e.compareTo(i) < 0) {
                var r = e;
                e = i, i = r;
            }
            var n = e.getLowestSetBit(), s = i.getLowestSetBit();
            if (s < 0) return e;
            for (n < s && (s = n), s > 0 && (e.rShiftTo(s, e), i.rShiftTo(s, i)); e.signum() > 0; ) (n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e), 
            (n = i.getLowestSetBit()) > 0 && i.rShiftTo(n, i), e.compareTo(i) >= 0 ? (e.subTo(i, e), 
            e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
            return s > 0 && i.lShiftTo(s, i), i;
        }, BigInteger.prototype.isProbablePrime = function(t) {
            var e, i = this.abs();
            if (1 == i.t && i[0] <= m[m.length - 1]) {
                for (e = 0; e < m.length; ++e) if (i[0] == m[e]) return !0;
                return !1;
            }
            if (i.isEven()) return !1;
            for (e = 1; e < m.length; ) {
                for (var r = m[e], n = e + 1; n < m.length && r < v; ) r *= m[n++];
                for (r = i.modInt(r); e < n; ) if (r % m[e++] == 0) return !1;
            }
            return i.millerRabin(t);
        }, BigInteger.prototype.copyTo = function(t) {
            for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
            t.t = this.t, t.s = this.s;
        }, BigInteger.prototype.fromInt = function(t) {
            this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
        }, BigInteger.prototype.fromString = function(t, e) {
            var i;
            if (16 == e) i = 4; else if (8 == e) i = 3; else if (256 == e) i = 8; else if (2 == e) i = 1; else if (32 == e) i = 5; else {
                if (4 != e) return void this.fromRadix(t, e);
                i = 2;
            }
            this.t = 0, this.s = 0;
            for (var r = t.length, n = !1, s = 0; --r >= 0; ) {
                var o = 8 == i ? 255 & +t[r] : intAt(t, r);
                o < 0 ? "-" == t.charAt(r) && (n = !0) : (n = !1, 0 == s ? this[this.t++] = o : s + i > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - s) - 1) << s, 
                this[this.t++] = o >> this.DB - s) : this[this.t - 1] |= o << s, (s += i) >= this.DB && (s -= this.DB));
            }
            8 == i && 0 != (128 & +t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), 
            this.clamp(), n && BigInteger.ZERO.subTo(this, this);
        }, BigInteger.prototype.clamp = function() {
            for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; ) --this.t;
        }, BigInteger.prototype.dlShiftTo = function(t, e) {
            var i;
            for (i = this.t - 1; i >= 0; --i) e[i + t] = this[i];
            for (i = t - 1; i >= 0; --i) e[i] = 0;
            e.t = this.t + t, e.s = this.s;
        }, BigInteger.prototype.drShiftTo = function(t, e) {
            for (var i = t; i < this.t; ++i) e[i - t] = this[i];
            e.t = Math.max(this.t - t, 0), e.s = this.s;
        }, BigInteger.prototype.lShiftTo = function(t, e) {
            for (var i = t % this.DB, r = this.DB - i, n = (1 << r) - 1, s = Math.floor(t / this.DB), o = this.s << i & this.DM, h = this.t - 1; h >= 0; --h) e[h + s + 1] = this[h] >> r | o, 
            o = (this[h] & n) << i;
            for (h = s - 1; h >= 0; --h) e[h] = 0;
            e[s] = o, e.t = this.t + s + 1, e.s = this.s, e.clamp();
        }, BigInteger.prototype.rShiftTo = function(t, e) {
            e.s = this.s;
            var i = Math.floor(t / this.DB);
            if (i >= this.t) e.t = 0; else {
                var r = t % this.DB, n = this.DB - r, s = (1 << r) - 1;
                e[0] = this[i] >> r;
                for (var o = i + 1; o < this.t; ++o) e[o - i - 1] |= (this[o] & s) << n, e[o - i] = this[o] >> r;
                r > 0 && (e[this.t - i - 1] |= (this.s & s) << n), e.t = this.t - i, e.clamp();
            }
        }, BigInteger.prototype.subTo = function(t, e) {
            for (var i = 0, r = 0, n = Math.min(t.t, this.t); i < n; ) r += this[i] - t[i], 
            e[i++] = r & this.DM, r >>= this.DB;
            if (t.t < this.t) {
                for (r -= t.s; i < this.t; ) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                r += this.s;
            } else {
                for (r += this.s; i < t.t; ) r -= t[i], e[i++] = r & this.DM, r >>= this.DB;
                r -= t.s;
            }
            e.s = r < 0 ? -1 : 0, r < -1 ? e[i++] = this.DV + r : r > 0 && (e[i++] = r), e.t = i, 
            e.clamp();
        }, BigInteger.prototype.multiplyTo = function(t, e) {
            var i = this.abs(), r = t.abs(), n = i.t;
            for (e.t = n + r.t; --n >= 0; ) e[n] = 0;
            for (n = 0; n < r.t; ++n) e[n + i.t] = i.am(0, r[n], e, n, 0, i.t);
            e.s = 0, e.clamp(), this.s != t.s && BigInteger.ZERO.subTo(e, e);
        }, BigInteger.prototype.squareTo = function(t) {
            for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0; ) t[i] = 0;
            for (i = 0; i < e.t - 1; ++i) {
                var r = e.am(i, e[i], t, 2 * i, 0, 1);
                (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, r, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, 
                t[i + e.t + 1] = 1);
            }
            t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp();
        }, BigInteger.prototype.divRemTo = function(t, e, i) {
            var r = t.abs();
            if (!(r.t <= 0)) {
                var n = this.abs();
                if (n.t < r.t) return null != e && e.fromInt(0), void (null != i && this.copyTo(i));
                null == i && (i = nbi());
                var s = nbi(), o = this.s, h = t.s, a = this.DB - nbits(r[r.t - 1]);
                a > 0 ? (r.lShiftTo(a, s), n.lShiftTo(a, i)) : (r.copyTo(s), n.copyTo(i));
                var u = s.t, c = s[u - 1];
                if (0 != c) {
                    var f = c * (1 << this.F1) + (u > 1 ? s[u - 2] >> this.F2 : 0), g = this.FV / f, l = (1 << this.F1) / f, p = 1 << this.F2, d = i.t, y = d - u, m = null == e ? nbi() : e;
                    for (s.dlShiftTo(y, m), i.compareTo(m) >= 0 && (i[i.t++] = 1, i.subTo(m, i)), BigInteger.ONE.dlShiftTo(u, m), 
                    m.subTo(s, s); s.t < u; ) s[s.t++] = 0;
                    for (;--y >= 0; ) {
                        var v = i[--d] == c ? this.DM : Math.floor(i[d] * g + (i[d - 1] + p) * l);
                        if ((i[d] += s.am(0, v, i, y, 0, u)) < v) for (s.dlShiftTo(y, m), i.subTo(m, i); i[d] < --v; ) i.subTo(m, i);
                    }
                    null != e && (i.drShiftTo(u, e), o != h && BigInteger.ZERO.subTo(e, e)), i.t = u, 
                    i.clamp(), a > 0 && i.rShiftTo(a, i), o < 0 && BigInteger.ZERO.subTo(i, i);
                }
            }
        }, BigInteger.prototype.invDigit = function() {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e;
        }, BigInteger.prototype.isEven = function() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s);
        }, BigInteger.prototype.exp = function(t, e) {
            if (t > 4294967295 || t < 1) return BigInteger.ONE;
            var i = nbi(), r = nbi(), n = e.convert(this), s = nbits(t) - 1;
            for (n.copyTo(i); --s >= 0; ) if (e.sqrTo(i, r), (t & 1 << s) > 0) e.mulTo(r, n, i); else {
                var o = i;
                i = r, r = o;
            }
            return e.revert(i);
        }, BigInteger.prototype.chunkSize = function(t) {
            return Math.floor(Math.LN2 * this.DB / Math.log(t));
        }, BigInteger.prototype.toRadix = function(t) {
            if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
            var e = this.chunkSize(t), i = Math.pow(t, e), r = nbv(i), n = nbi(), s = nbi(), o = "";
            for (this.divRemTo(r, n, s); n.signum() > 0; ) o = (i + s.intValue()).toString(t).substr(1) + o, 
            n.divRemTo(r, n, s);
            return s.intValue().toString(t) + o;
        }, BigInteger.prototype.fromRadix = function(t, e) {
            this.fromInt(0), null == e && (e = 10);
            for (var i = this.chunkSize(e), r = Math.pow(e, i), n = !1, s = 0, o = 0, h = 0; h < t.length; ++h) {
                var a = intAt(t, h);
                a < 0 ? "-" == t.charAt(h) && 0 == this.signum() && (n = !0) : (o = e * o + a, ++s >= i && (this.dMultiply(r), 
                this.dAddOffset(o, 0), s = 0, o = 0));
            }
            s > 0 && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(o, 0)), n && BigInteger.ZERO.subTo(this, this);
        }, BigInteger.prototype.fromNumber = function(t, e, i) {
            if ("number" == typeof e) if (t < 2) this.fromInt(1); else for (this.fromNumber(t, i), 
            this.testBit(t - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(t - 1), op_or, this), 
            this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e); ) this.dAddOffset(2, 0), 
            this.bitLength() > t && this.subTo(BigInteger.ONE.shiftLeft(t - 1), this); else {
                var r = [], n = 7 & t;
                r.length = 1 + (t >> 3), e.nextBytes(r), n > 0 ? r[0] &= (1 << n) - 1 : r[0] = 0, 
                this.fromString(r, 256);
            }
        }, BigInteger.prototype.bitwiseTo = function(t, e, i) {
            var r, n, s = Math.min(t.t, this.t);
            for (r = 0; r < s; ++r) i[r] = e(this[r], t[r]);
            if (t.t < this.t) {
                for (n = t.s & this.DM, r = s; r < this.t; ++r) i[r] = e(this[r], n);
                i.t = this.t;
            } else {
                for (n = this.s & this.DM, r = s; r < t.t; ++r) i[r] = e(n, t[r]);
                i.t = t.t;
            }
            i.s = e(this.s, t.s), i.clamp();
        }, BigInteger.prototype.changeBit = function(t, e) {
            var i = BigInteger.ONE.shiftLeft(t);
            return this.bitwiseTo(i, e, i), i;
        }, BigInteger.prototype.addTo = function(t, e) {
            for (var i = 0, r = 0, n = Math.min(t.t, this.t); i < n; ) r += this[i] + t[i], 
            e[i++] = r & this.DM, r >>= this.DB;
            if (t.t < this.t) {
                for (r += t.s; i < this.t; ) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                r += this.s;
            } else {
                for (r += this.s; i < t.t; ) r += t[i], e[i++] = r & this.DM, r >>= this.DB;
                r += t.s;
            }
            e.s = r < 0 ? -1 : 0, r > 0 ? e[i++] = r : r < -1 && (e[i++] = this.DV + r), e.t = i, 
            e.clamp();
        }, BigInteger.prototype.dMultiply = function(t) {
            this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp();
        }, BigInteger.prototype.dAddOffset = function(t, e) {
            if (0 != t) {
                for (;this.t <= e; ) this[this.t++] = 0;
                for (this[e] += t; this[e] >= this.DV; ) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), 
                ++this[e];
            }
        }, BigInteger.prototype.multiplyLowerTo = function(t, e, i) {
            var r = Math.min(this.t + t.t, e);
            for (i.s = 0, i.t = r; r > 0; ) i[--r] = 0;
            for (var n = i.t - this.t; r < n; ++r) i[r + this.t] = this.am(0, t[r], i, r, 0, this.t);
            for (n = Math.min(t.t, e); r < n; ++r) this.am(0, t[r], i, r, 0, e - r);
            i.clamp();
        }, BigInteger.prototype.multiplyUpperTo = function(t, e, i) {
            --e;
            var r = i.t = this.t + t.t - e;
            for (i.s = 0; --r >= 0; ) i[r] = 0;
            for (r = Math.max(e - this.t, 0); r < t.t; ++r) i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
            i.clamp(), i.drShiftTo(1, i);
        }, BigInteger.prototype.modInt = function(t) {
            if (t <= 0) return 0;
            var e = this.DV % t, i = this.s < 0 ? t - 1 : 0;
            if (this.t > 0) if (0 == e) i = this[0] % t; else for (var r = this.t - 1; r >= 0; --r) i = (e * i + this[r]) % t;
            return i;
        }, BigInteger.prototype.millerRabin = function(t) {
            var e = this.subtract(BigInteger.ONE), i = e.getLowestSetBit();
            if (i <= 0) return !1;
            var r = e.shiftRight(i);
            (t = t + 1 >> 1) > m.length && (t = m.length);
            for (var n = nbi(), s = 0; s < t; ++s) {
                n.fromInt(m[Math.floor(Math.random() * m.length)]);
                var o = n.modPow(r, this);
                if (0 != o.compareTo(BigInteger.ONE) && 0 != o.compareTo(e)) {
                    for (var h = 1; h++ < i && 0 != o.compareTo(e); ) if (0 == (o = o.modPowInt(2, this)).compareTo(BigInteger.ONE)) return !1;
                    if (0 != o.compareTo(e)) return !1;
                }
            }
            return !0;
        }, BigInteger.prototype.square = function() {
            var t = nbi();
            return this.squareTo(t), t;
        }, BigInteger.prototype.gcda = function(t, e) {
            var i = this.s < 0 ? this.negate() : this.clone(), r = t.s < 0 ? t.negate() : t.clone();
            if (i.compareTo(r) < 0) {
                var n = i;
                i = r, r = n;
            }
            var s = i.getLowestSetBit(), o = r.getLowestSetBit();
            if (o < 0) e(i); else {
                s < o && (o = s), o > 0 && (i.rShiftTo(o, i), r.rShiftTo(o, r));
                var h = function() {
                    (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i), (s = r.getLowestSetBit()) > 0 && r.rShiftTo(s, r), 
                    i.compareTo(r) >= 0 ? (i.subTo(r, i), i.rShiftTo(1, i)) : (r.subTo(i, r), r.rShiftTo(1, r)), 
                    i.signum() > 0 ? setTimeout(h, 0) : (o > 0 && r.lShiftTo(o, r), setTimeout(function() {
                        e(r);
                    }, 0));
                };
                setTimeout(h, 10);
            }
        }, BigInteger.prototype.fromNumberAsync = function(t, e, i, r) {
            if ("number" == typeof e) if (t < 2) this.fromInt(1); else {
                this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(t - 1), op_or, this), 
                this.isEven() && this.dAddOffset(1, 0);
                var n = this, s = function() {
                    n.dAddOffset(2, 0), n.bitLength() > t && n.subTo(BigInteger.ONE.shiftLeft(t - 1), n), 
                    n.isProbablePrime(e) ? setTimeout(function() {
                        r();
                    }, 0) : setTimeout(s, 0);
                };
                setTimeout(s, 0);
            } else {
                var o = [], h = 7 & t;
                o.length = 1 + (t >> 3), e.nextBytes(o), h > 0 ? o[0] &= (1 << h) - 1 : o[0] = 0, 
                this.fromString(o, 256);
            }
        }, BigInteger;
    }(), S = function() {
        function NullExp() {}
        return NullExp.prototype.convert = function(t) {
            return t;
        }, NullExp.prototype.revert = function(t) {
            return t;
        }, NullExp.prototype.mulTo = function(t, e, i) {
            t.multiplyTo(e, i);
        }, NullExp.prototype.sqrTo = function(t, e) {
            t.squareTo(e);
        }, NullExp;
    }(), T = function() {
        function Classic(t) {
            this.m = t;
        }
        return Classic.prototype.convert = function(t) {
            return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
        }, Classic.prototype.revert = function(t) {
            return t;
        }, Classic.prototype.reduce = function(t) {
            t.divRemTo(this.m, null, t);
        }, Classic.prototype.mulTo = function(t, e, i) {
            t.multiplyTo(e, i), this.reduce(i);
        }, Classic.prototype.sqrTo = function(t, e) {
            t.squareTo(e), this.reduce(e);
        }, Classic;
    }(), E = function() {
        function Montgomery(t) {
            this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
            this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
        }
        return Montgomery.prototype.convert = function(t) {
            var e = nbi();
            return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(b.ZERO) > 0 && this.m.subTo(e, e), 
            e;
        }, Montgomery.prototype.revert = function(t) {
            var e = nbi();
            return t.copyTo(e), this.reduce(e), e;
        }, Montgomery.prototype.reduce = function(t) {
            for (;t.t <= this.mt2; ) t[t.t++] = 0;
            for (var e = 0; e < this.m.t; ++e) {
                var i = 32767 & t[e], r = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (t[i = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[i] >= t.DV; ) t[i] -= t.DV, 
                t[++i]++;
            }
            t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
        }, Montgomery.prototype.mulTo = function(t, e, i) {
            t.multiplyTo(e, i), this.reduce(i);
        }, Montgomery.prototype.sqrTo = function(t, e) {
            t.squareTo(e), this.reduce(e);
        }, Montgomery;
    }(), B = function() {
        function Barrett(t) {
            this.m = t, this.r2 = nbi(), this.q3 = nbi(), b.ONE.dlShiftTo(2 * t.t, this.r2), 
            this.mu = this.r2.divide(t);
        }
        return Barrett.prototype.convert = function(t) {
            if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
            if (t.compareTo(this.m) < 0) return t;
            var e = nbi();
            return t.copyTo(e), this.reduce(e), e;
        }, Barrett.prototype.revert = function(t) {
            return t;
        }, Barrett.prototype.reduce = function(t) {
            for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, 
            t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; ) t.dAddOffset(1, this.m.t + 1);
            for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; ) t.subTo(this.m, t);
        }, Barrett.prototype.mulTo = function(t, e, i) {
            t.multiplyTo(e, i), this.reduce(i);
        }, Barrett.prototype.sqrTo = function(t, e) {
            t.squareTo(e), this.reduce(e);
        }, Barrett;
    }();
    function nbi() {
        return new b(null);
    }
    function parseBigInt(t, e) {
        return new b(t, e);
    }
    "Microsoft Internet Explorer" == navigator.appName ? (b.prototype.am = function(t, e, i, r, n, s) {
        for (var o = 32767 & e, h = e >> 15; --s >= 0; ) {
            var a = 32767 & this[t], u = this[t++] >> 15, c = h * a + u * o;
            n = ((a = o * a + ((32767 & c) << 15) + i[r] + (1073741823 & n)) >>> 30) + (c >>> 15) + h * u + (n >>> 30), 
            i[r++] = 1073741823 & a;
        }
        return n;
    }, l = 30) : "Netscape" != navigator.appName ? (b.prototype.am = function(t, e, i, r, n, s) {
        for (;--s >= 0; ) {
            var o = e * this[t++] + i[r] + n;
            n = Math.floor(o / 67108864), i[r++] = 67108863 & o;
        }
        return n;
    }, l = 26) : (b.prototype.am = function(t, e, i, r, n, s) {
        for (var o = 16383 & e, h = e >> 14; --s >= 0; ) {
            var a = 16383 & this[t], u = this[t++] >> 14, c = h * a + u * o;
            n = ((a = o * a + ((16383 & c) << 14) + i[r] + n) >> 28) + (c >> 14) + h * u, i[r++] = 268435455 & a;
        }
        return n;
    }, l = 28), b.prototype.DB = l, b.prototype.DM = (1 << l) - 1, b.prototype.DV = 1 << l;
    b.prototype.FV = Math.pow(2, 52), b.prototype.F1 = 52 - l, b.prototype.F2 = 2 * l - 52;
    var I, w, D = [];
    for (I = "0".charCodeAt(0), w = 0; w <= 9; ++w) D[I++] = w;
    for (I = "a".charCodeAt(0), w = 10; w < 36; ++w) D[I++] = w;
    for (I = "A".charCodeAt(0), w = 10; w < 36; ++w) D[I++] = w;
    function intAt(t, e) {
        var i = D[t.charCodeAt(e)];
        return null == i ? -1 : i;
    }
    function nbv(t) {
        var e = nbi();
        return e.fromInt(t), e;
    }
    function nbits(t) {
        var e, i = 1;
        return 0 != (e = t >>> 16) && (t = e, i += 16), 0 != (e = t >> 8) && (t = e, i += 8), 
        0 != (e = t >> 4) && (t = e, i += 4), 0 != (e = t >> 2) && (t = e, i += 2), 0 != (e = t >> 1) && (t = e, 
        i += 1), i;
    }
    b.ZERO = nbv(0), b.ONE = nbv(1);
    var A = function() {
        function Arcfour() {
            this.i = 0, this.j = 0, this.S = [];
        }
        return Arcfour.prototype.init = function(t) {
            var e, i, r;
            for (e = 0; e < 256; ++e) this.S[e] = e;
            for (i = 0, e = 0; e < 256; ++e) i = i + this.S[e] + t[e % t.length] & 255, r = this.S[e], 
            this.S[e] = this.S[i], this.S[i] = r;
            this.i = 0, this.j = 0;
        }, Arcfour.prototype.next = function() {
            var t;
            return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], 
            this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255];
        }, Arcfour;
    }();
    var x, R, N = 256, O = null;
    if (null == O) {
        O = [], R = 0;
        var V = void 0;
        if (window.crypto && window.crypto.getRandomValues) {
            var P = new Uint32Array(256);
            for (window.crypto.getRandomValues(P), V = 0; V < P.length; ++V) O[R++] = 255 & P[V];
        }
        var M = function(t) {
            if (this.count = this.count || 0, this.count >= 256 || R >= N) window.removeEventListener ? window.removeEventListener("mousemove", M, !1) : window.detachEvent && window.detachEvent("onmousemove", M); else try {
                var e = t.x + t.y;
                O[R++] = 255 & e, this.count += 1;
            } catch (t) {}
        };
        window.addEventListener ? window.addEventListener("mousemove", M, !1) : window.attachEvent && window.attachEvent("onmousemove", M);
    }
    function rng_get_byte() {
        if (null == x) {
            for (x = new A(); R < N; ) {
                var t = Math.floor(65536 * Math.random());
                O[R++] = 255 & t;
            }
            for (x.init(O), R = 0; R < O.length; ++R) O[R] = 0;
            R = 0;
        }
        return x.next();
    }
    var C = function() {
        function SecureRandom() {}
        return SecureRandom.prototype.nextBytes = function(t) {
            for (var e = 0; e < t.length; ++e) t[e] = rng_get_byte();
        }, SecureRandom;
    }();
    var q = function() {
        function RSAKey() {
            this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, 
            this.dmq1 = null, this.coeff = null;
        }
        return RSAKey.prototype.doPublic = function(t) {
            return t.modPowInt(this.e, this.n);
        }, RSAKey.prototype.doPrivate = function(t) {
            if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
            for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0; ) e = e.add(this.p);
            return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i);
        }, RSAKey.prototype.setPublic = function(t, e) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = parseBigInt(t, 16), 
            this.e = parseInt(e, 16)) : console.error("Invalid RSA public key");
        }, RSAKey.prototype.encrypt = function(t) {
            var e = function(t, e) {
                if (e < t.length + 11) return console.error("Message too long for RSA"), null;
                for (var i = [], r = t.length - 1; r >= 0 && e > 0; ) {
                    var n = t.charCodeAt(r--);
                    n < 128 ? i[--e] = n : n > 127 && n < 2048 ? (i[--e] = 63 & n | 128, i[--e] = n >> 6 | 192) : (i[--e] = 63 & n | 128, 
                    i[--e] = n >> 6 & 63 | 128, i[--e] = n >> 12 | 224);
                }
                i[--e] = 0;
                for (var s = new C(), o = []; e > 2; ) {
                    for (o[0] = 0; 0 == o[0]; ) s.nextBytes(o);
                    i[--e] = o[0];
                }
                return i[--e] = 2, i[--e] = 0, new b(i);
            }(t, this.n.bitLength() + 7 >> 3);
            if (null == e) return null;
            var i = this.doPublic(e);
            if (null == i) return null;
            var r = i.toString(16);
            return 0 == (1 & r.length) ? r : "0" + r;
        }, RSAKey.prototype.setPrivate = function(t, e, i) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = parseBigInt(t, 16), 
            this.e = parseInt(e, 16), this.d = parseBigInt(i, 16)) : console.error("Invalid RSA private key");
        }, RSAKey.prototype.setPrivateEx = function(t, e, i, r, n, s, o, h) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = parseBigInt(t, 16), 
            this.e = parseInt(e, 16), this.d = parseBigInt(i, 16), this.p = parseBigInt(r, 16), 
            this.q = parseBigInt(n, 16), this.dmp1 = parseBigInt(s, 16), this.dmq1 = parseBigInt(o, 16), 
            this.coeff = parseBigInt(h, 16)) : console.error("Invalid RSA private key");
        }, RSAKey.prototype.generate = function(t, e) {
            var i = new C(), r = t >> 1;
            this.e = parseInt(e, 16);
            for (var n = new b(e, 16); ;) {
                for (;this.p = new b(t - r, 1, i), 0 != this.p.subtract(b.ONE).gcd(n).compareTo(b.ONE) || !this.p.isProbablePrime(10); ) ;
                for (;this.q = new b(r, 1, i), 0 != this.q.subtract(b.ONE).gcd(n).compareTo(b.ONE) || !this.q.isProbablePrime(10); ) ;
                if (this.p.compareTo(this.q) <= 0) {
                    var s = this.p;
                    this.p = this.q, this.q = s;
                }
                var o = this.p.subtract(b.ONE), h = this.q.subtract(b.ONE), a = o.multiply(h);
                if (0 == a.gcd(n).compareTo(b.ONE)) {
                    this.n = this.p.multiply(this.q), this.d = n.modInverse(a), this.dmp1 = this.d.mod(o), 
                    this.dmq1 = this.d.mod(h), this.coeff = this.q.modInverse(this.p);
                    break;
                }
            }
        }, RSAKey.prototype.decrypt = function(t) {
            var e = parseBigInt(t, 16), i = this.doPrivate(e);
            return null == i ? null : function(t, e) {
                var i = t.toByteArray(), r = 0;
                for (;r < i.length && 0 == i[r]; ) ++r;
                if (i.length - r != e - 1 || 2 != i[r]) return null;
                ++r;
                for (;0 != i[r]; ) if (++r >= i.length) return null;
                var n = "";
                for (;++r < i.length; ) {
                    var s = 255 & i[r];
                    s < 128 ? n += String.fromCharCode(s) : s > 191 && s < 224 ? (n += String.fromCharCode((31 & s) << 6 | 63 & i[r + 1]), 
                    ++r) : (n += String.fromCharCode((15 & s) << 12 | (63 & i[r + 1]) << 6 | 63 & i[r + 2]), 
                    r += 2);
                }
                return n;
            }(i, this.n.bitLength() + 7 >> 3);
        }, RSAKey.prototype.generateAsync = function(t, e, i) {
            var r = new C(), n = t >> 1;
            this.e = parseInt(e, 16);
            var s = new b(e, 16), o = this, h = function() {
                var e = function() {
                    if (o.p.compareTo(o.q) <= 0) {
                        var t = o.p;
                        o.p = o.q, o.q = t;
                    }
                    var e = o.p.subtract(b.ONE), r = o.q.subtract(b.ONE), n = e.multiply(r);
                    0 == n.gcd(s).compareTo(b.ONE) ? (o.n = o.p.multiply(o.q), o.d = s.modInverse(n), 
                    o.dmp1 = o.d.mod(e), o.dmq1 = o.d.mod(r), o.coeff = o.q.modInverse(o.p), setTimeout(function() {
                        i();
                    }, 0)) : setTimeout(h, 0);
                }, a = function() {
                    o.q = nbi(), o.q.fromNumberAsync(n, 1, r, function() {
                        o.q.subtract(b.ONE).gcda(s, function(t) {
                            0 == t.compareTo(b.ONE) && o.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(a, 0);
                        });
                    });
                }, u = function() {
                    o.p = nbi(), o.p.fromNumberAsync(t - n, 1, r, function() {
                        o.p.subtract(b.ONE).gcda(s, function(t) {
                            0 == t.compareTo(b.ONE) && o.p.isProbablePrime(10) ? setTimeout(a, 0) : setTimeout(u, 0);
                        });
                    });
                };
                setTimeout(u, 0);
            };
            setTimeout(h, 0);
        }, RSAKey.prototype.sign = function(t, e, i) {
            var r = function(t, e) {
                if (e < t.length + 22) return console.error("Message too long for RSA"), null;
                for (var i = e - t.length - 6, r = "", n = 0; n < i; n += 2) r += "ff";
                return parseBigInt("0001" + r + "00" + t, 16);
            }((K[i] || "") + e(t).toString(), this.n.bitLength() / 4);
            if (null == r) return null;
            var n = this.doPrivate(r);
            if (null == n) return null;
            var s = n.toString(16);
            return 0 == (1 & s.length) ? s : "0" + s;
        }, RSAKey.prototype.verify = function(t, e, i) {
            var r = parseBigInt(e, 16), n = this.doPublic(r);
            return null == n ? null : function(t) {
                for (var e in K) if (K.hasOwnProperty(e)) {
                    var i = K[e], r = i.length;
                    if (t.substr(0, r) == i) return t.substr(r);
                }
                return t;
            }(n.toString(16).replace(/^1f+00/, "")) == i(t).toString();
        }, RSAKey;
    }();
    var K = {
        md2: "3020300c06082a864886f70d020205000410",
        md5: "3020300c06082a864886f70d020505000410",
        sha1: "3021300906052b0e03021a05000414",
        sha224: "302d300d06096086480165030402040500041c",
        sha256: "3031300d060960864801650304020105000420",
        sha384: "3041300d060960864801650304020205000430",
        sha512: "3051300d060960864801650304020305000440",
        ripemd160: "3021300906052b2403020105000414"
    };
    var j = {};
    j.lang = {
        extend: function(t, e, i) {
            if (!e || !t) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
            var r = function() {};
            if (r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t, 
            t.superclass = e.prototype, e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e), 
            i) {
                var n;
                for (n in i) t.prototype[n] = i[n];
                var s = function() {}, o = [ "toString", "valueOf" ];
                try {
                    /MSIE/.test(navigator.userAgent) && (s = function(t, e) {
                        for (n = 0; n < o.length; n += 1) {
                            var i = o[n], r = e[i];
                            "function" == typeof r && r != Object.prototype[i] && (t[i] = r);
                        }
                    });
                } catch (t) {}
                s(t.prototype, i);
            }
        }
    };
    var L = {};
    void 0 !== L.asn1 && L.asn1 || (L.asn1 = {}), L.asn1.ASN1Util = new function() {
        this.integerToByteHex = function(t) {
            var e = t.toString(16);
            return e.length % 2 == 1 && (e = "0" + e), e;
        }, this.bigIntToMinTwosComplementsHex = function(t) {
            var e = t.toString(16);
            if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e); else {
                var i = e.substr(1).length;
                i % 2 == 1 ? i += 1 : e.match(/^[0-7]/) || (i += 2);
                for (var r = "", n = 0; n < i; n++) r += "f";
                e = new b(r, 16).xor(t).add(b.ONE).toString(16).replace(/^-/, "");
            }
            return e;
        }, this.getPEMStringFromHex = function(t, e) {
            return hextopem(t, e);
        }, this.newObject = function(t) {
            var e = L.asn1, i = e.DERBoolean, r = e.DERInteger, n = e.DERBitString, s = e.DEROctetString, o = e.DERNull, h = e.DERObjectIdentifier, a = e.DEREnumerated, u = e.DERUTF8String, c = e.DERNumericString, f = e.DERPrintableString, g = e.DERTeletexString, l = e.DERIA5String, p = e.DERUTCTime, d = e.DERGeneralizedTime, y = e.DERSequence, m = e.DERSet, v = e.DERTaggedObject, b = e.ASN1Util.newObject, S = Object.keys(t);
            if (1 != S.length) throw "key of param shall be only one.";
            var T = S[0];
            if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + T + ":")) throw "undefined key: " + T;
            if ("bool" == T) return new i(t[T]);
            if ("int" == T) return new r(t[T]);
            if ("bitstr" == T) return new n(t[T]);
            if ("octstr" == T) return new s(t[T]);
            if ("null" == T) return new o(t[T]);
            if ("oid" == T) return new h(t[T]);
            if ("enum" == T) return new a(t[T]);
            if ("utf8str" == T) return new u(t[T]);
            if ("numstr" == T) return new c(t[T]);
            if ("prnstr" == T) return new f(t[T]);
            if ("telstr" == T) return new g(t[T]);
            if ("ia5str" == T) return new l(t[T]);
            if ("utctime" == T) return new p(t[T]);
            if ("gentime" == T) return new d(t[T]);
            if ("seq" == T) {
                for (var E = t[T], B = [], I = 0; I < E.length; I++) {
                    var w = b(E[I]);
                    B.push(w);
                }
                return new y({
                    array: B
                });
            }
            if ("set" == T) {
                for (E = t[T], B = [], I = 0; I < E.length; I++) {
                    w = b(E[I]);
                    B.push(w);
                }
                return new m({
                    array: B
                });
            }
            if ("tag" == T) {
                var D = t[T];
                if ("[object Array]" === Object.prototype.toString.call(D) && 3 == D.length) {
                    var A = b(D[2]);
                    return new v({
                        tag: D[0],
                        explicit: D[1],
                        obj: A
                    });
                }
                var x = {};
                if (void 0 !== D.explicit && (x.explicit = D.explicit), void 0 !== D.tag && (x.tag = D.tag), 
                void 0 === D.obj) throw "obj shall be specified for 'tag'.";
                return x.obj = b(D.obj), new v(x);
            }
        }, this.jsonToASN1HEX = function(t) {
            return this.newObject(t).getEncodedHex();
        };
    }(), L.asn1.ASN1Util.oidHexToInt = function(t) {
        for (var e = "", i = parseInt(t.substr(0, 2), 16), r = (e = Math.floor(i / 40) + "." + i % 40, 
        ""), n = 2; n < t.length; n += 2) {
            var s = ("00000000" + parseInt(t.substr(n, 2), 16).toString(2)).slice(-8);
            if (r += s.substr(1, 7), "0" == s.substr(0, 1)) e = e + "." + new b(r, 2).toString(10), 
            r = "";
        }
        return e;
    }, L.asn1.ASN1Util.oidIntToHex = function(t) {
        var e = function(t) {
            var e = t.toString(16);
            return 1 == e.length && (e = "0" + e), e;
        }, i = function(t) {
            var i = "", r = new b(t, 10).toString(2), n = 7 - r.length % 7;
            7 == n && (n = 0);
            for (var s = "", o = 0; o < n; o++) s += "0";
            r = s + r;
            for (o = 0; o < r.length - 1; o += 7) {
                var h = r.substr(o, 7);
                o != r.length - 7 && (h = "1" + h), i += e(parseInt(h, 2));
            }
            return i;
        };
        if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
        var r = "", n = t.split("."), s = 40 * parseInt(n[0]) + parseInt(n[1]);
        r += e(s), n.splice(0, 2);
        for (var o = 0; o < n.length; o++) r += i(n[o]);
        return r;
    }, L.asn1.ASN1Object = function() {
        this.getLengthHexFromValue = function() {
            if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
            if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
            var t = this.hV.length / 2, e = t.toString(16);
            if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
            var i = e.length / 2;
            if (i > 15) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
            return (128 + i).toString(16) + e;
        }, this.getEncodedHex = function() {
            return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), 
            this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, 
            this.isModified = !1), this.hTLV;
        }, this.getValueHex = function() {
            return this.getEncodedHex(), this.hV;
        }, this.getFreshValueHex = function() {
            return "";
        };
    }, L.asn1.DERAbstractString = function(t) {
        L.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
            return this.s;
        }, this.setString = function(t) {
            this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s);
        }, this.setStringHex = function(t) {
            this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
        }, this.getFreshValueHex = function() {
            return this.hV;
        }, void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex));
    }, j.lang.extend(L.asn1.DERAbstractString, L.asn1.ASN1Object), L.asn1.DERAbstractTime = function(t) {
        L.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(t) {
            return utc = t.getTime() + 6e4 * t.getTimezoneOffset(), new Date(utc);
        }, this.formatDate = function(t, e, i) {
            var r = this.zeroPadding, n = this.localDateToUTC(t), s = String(n.getFullYear());
            "utc" == e && (s = s.substr(2, 2));
            var o = s + r(String(n.getMonth() + 1), 2) + r(String(n.getDate()), 2) + r(String(n.getHours()), 2) + r(String(n.getMinutes()), 2) + r(String(n.getSeconds()), 2);
            if (!0 === i) {
                var h = n.getMilliseconds();
                if (0 != h) {
                    var a = r(String(h), 3);
                    o = o + "." + (a = a.replace(/[0]+$/, ""));
                }
            }
            return o + "Z";
        }, this.zeroPadding = function(t, e) {
            return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
        }, this.getString = function() {
            return this.s;
        }, this.setString = function(t) {
            this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(t);
        }, this.setByDateValue = function(t, e, i, r, n, s) {
            var o = new Date(Date.UTC(t, e - 1, i, r, n, s, 0));
            this.setByDate(o);
        }, this.getFreshValueHex = function() {
            return this.hV;
        };
    }, j.lang.extend(L.asn1.DERAbstractTime, L.asn1.ASN1Object), L.asn1.DERAbstractStructured = function(t) {
        L.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(t) {
            this.hTLV = null, this.isModified = !0, this.asn1Array = t;
        }, this.appendASN1Object = function(t) {
            this.hTLV = null, this.isModified = !0, this.asn1Array.push(t);
        }, this.asn1Array = new Array(), void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array);
    }, j.lang.extend(L.asn1.DERAbstractStructured, L.asn1.ASN1Object), L.asn1.DERBoolean = function() {
        L.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
    }, j.lang.extend(L.asn1.DERBoolean, L.asn1.ASN1Object), L.asn1.DERInteger = function(t) {
        L.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) {
            this.hTLV = null, this.isModified = !0, this.hV = L.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
        }, this.setByInteger = function(t) {
            var e = new b(String(t), 10);
            this.setByBigInteger(e);
        }, this.setValueHex = function(t) {
            this.hV = t;
        }, this.getFreshValueHex = function() {
            return this.hV;
        }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
    }, j.lang.extend(L.asn1.DERInteger, L.asn1.ASN1Object), L.asn1.DERBitString = function(t) {
        if (void 0 !== t && void 0 !== t.obj) {
            var e = L.asn1.ASN1Util.newObject(t.obj);
            t.hex = "00" + e.getEncodedHex();
        }
        L.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t) {
            this.hTLV = null, this.isModified = !0, this.hV = t;
        }, this.setUnusedBitsAndHexValue = function(t, e) {
            if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
            var i = "0" + t;
            this.hTLV = null, this.isModified = !0, this.hV = i + e;
        }, this.setByBinaryString = function(t) {
            var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
            8 == e && (e = 0);
            for (var i = 0; i <= e; i++) t += "0";
            var r = "";
            for (i = 0; i < t.length - 1; i += 8) {
                var n = t.substr(i, 8), s = parseInt(n, 2).toString(16);
                1 == s.length && (s = "0" + s), r += s;
            }
            this.hTLV = null, this.isModified = !0, this.hV = "0" + e + r;
        }, this.setByBooleanArray = function(t) {
            for (var e = "", i = 0; i < t.length; i++) 1 == t[i] ? e += "1" : e += "0";
            this.setByBinaryString(e);
        }, this.newFalseArray = function(t) {
            for (var e = new Array(t), i = 0; i < t; i++) e[i] = !1;
            return e;
        }, this.getFreshValueHex = function() {
            return this.hV;
        }, void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array));
    }, j.lang.extend(L.asn1.DERBitString, L.asn1.ASN1Object), L.asn1.DEROctetString = function(t) {
        if (void 0 !== t && void 0 !== t.obj) {
            var e = L.asn1.ASN1Util.newObject(t.obj);
            t.hex = e.getEncodedHex();
        }
        L.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04";
    }, j.lang.extend(L.asn1.DEROctetString, L.asn1.DERAbstractString), L.asn1.DERNull = function() {
        L.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
    }, j.lang.extend(L.asn1.DERNull, L.asn1.ASN1Object), L.asn1.DERObjectIdentifier = function(t) {
        var e = function(t) {
            var e = t.toString(16);
            return 1 == e.length && (e = "0" + e), e;
        }, i = function(t) {
            var i = "", r = new b(t, 10).toString(2), n = 7 - r.length % 7;
            7 == n && (n = 0);
            for (var s = "", o = 0; o < n; o++) s += "0";
            r = s + r;
            for (o = 0; o < r.length - 1; o += 7) {
                var h = r.substr(o, 7);
                o != r.length - 7 && (h = "1" + h), i += e(parseInt(h, 2));
            }
            return i;
        };
        L.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t) {
            this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
        }, this.setValueOidString = function(t) {
            if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
            var r = "", n = t.split("."), s = 40 * parseInt(n[0]) + parseInt(n[1]);
            r += e(s), n.splice(0, 2);
            for (var o = 0; o < n.length; o++) r += i(n[o]);
            this.hTLV = null, this.isModified = !0, this.s = null, this.hV = r;
        }, this.setValueName = function(t) {
            var e = L.asn1.x509.OID.name2oid(t);
            if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
            this.setValueOidString(e);
        }, this.getFreshValueHex = function() {
            return this.hV;
        }, void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name));
    }, j.lang.extend(L.asn1.DERObjectIdentifier, L.asn1.ASN1Object), L.asn1.DEREnumerated = function(t) {
        L.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
            this.hTLV = null, this.isModified = !0, this.hV = L.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
        }, this.setByInteger = function(t) {
            var e = new b(String(t), 10);
            this.setByBigInteger(e);
        }, this.setValueHex = function(t) {
            this.hV = t;
        }, this.getFreshValueHex = function() {
            return this.hV;
        }, void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
    }, j.lang.extend(L.asn1.DEREnumerated, L.asn1.ASN1Object), L.asn1.DERUTF8String = function(t) {
        L.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c";
    }, j.lang.extend(L.asn1.DERUTF8String, L.asn1.DERAbstractString), L.asn1.DERNumericString = function(t) {
        L.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12";
    }, j.lang.extend(L.asn1.DERNumericString, L.asn1.DERAbstractString), L.asn1.DERPrintableString = function(t) {
        L.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13";
    }, j.lang.extend(L.asn1.DERPrintableString, L.asn1.DERAbstractString), L.asn1.DERTeletexString = function(t) {
        L.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14";
    }, j.lang.extend(L.asn1.DERTeletexString, L.asn1.DERAbstractString), L.asn1.DERIA5String = function(t) {
        L.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16";
    }, j.lang.extend(L.asn1.DERIA5String, L.asn1.DERAbstractString), L.asn1.DERUTCTime = function(t) {
        L.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function(t) {
            this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), 
            this.hV = stohex(this.s);
        }, this.getFreshValueHex = function() {
            return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "utc"), 
            this.hV = stohex(this.s)), this.hV;
        }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date));
    }, j.lang.extend(L.asn1.DERUTCTime, L.asn1.DERAbstractTime), L.asn1.DERGeneralizedTime = function(t) {
        L.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", 
        this.withMillis = !1, this.setByDate = function(t) {
            this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), 
            this.hV = stohex(this.s);
        }, this.getFreshValueHex = function() {
            return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), 
            this.hV = stohex(this.s)), this.hV;
        }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), 
        !0 === t.millis && (this.withMillis = !0));
    }, j.lang.extend(L.asn1.DERGeneralizedTime, L.asn1.DERAbstractTime), L.asn1.DERSequence = function(t) {
        L.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() {
            for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                t += this.asn1Array[e].getEncodedHex();
            }
            return this.hV = t, this.hV;
        };
    }, j.lang.extend(L.asn1.DERSequence, L.asn1.DERAbstractStructured), L.asn1.DERSet = function(t) {
        L.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, 
        this.getFreshValueHex = function() {
            for (var t = new Array(), e = 0; e < this.asn1Array.length; e++) {
                var i = this.asn1Array[e];
                t.push(i.getEncodedHex());
            }
            return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV;
        }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1);
    }, j.lang.extend(L.asn1.DERSet, L.asn1.DERAbstractStructured), L.asn1.DERTaggedObject = function(t) {
        L.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", 
        this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(t, e, i) {
            this.hT = e, this.isExplicit = t, this.asn1Object = i, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), 
            this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), 
            this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1);
        }, this.getFreshValueHex = function() {
            return this.hV;
        }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), 
        void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
    }, j.lang.extend(L.asn1.DERTaggedObject, L.asn1.ASN1Object);
    var H = function(t) {
        function JSEncryptRSAKey(e) {
            var i = t.call(this) || this;
            return e && ("string" == typeof e ? i.parseKey(e) : (JSEncryptRSAKey.hasPrivateKeyProperty(e) || JSEncryptRSAKey.hasPublicKeyProperty(e)) && i.parsePropertiesFrom(e)), 
            i;
        }
        return function(t, e) {
            function __() {
                this.constructor = t;
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, 
            new __());
        }(JSEncryptRSAKey, t), JSEncryptRSAKey.prototype.parseKey = function(t) {
            try {
                var e = 0, i = 0, r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? h(t) : a.unarmor(t), n = d.decode(r);
                if (3 === n.sub.length && (n = n.sub[2].sub[0]), 9 === n.sub.length) {
                    e = n.sub[1].getHexStringValue(), this.n = parseBigInt(e, 16), i = n.sub[2].getHexStringValue(), 
                    this.e = parseInt(i, 16);
                    var s = n.sub[3].getHexStringValue();
                    this.d = parseBigInt(s, 16);
                    var o = n.sub[4].getHexStringValue();
                    this.p = parseBigInt(o, 16);
                    var u = n.sub[5].getHexStringValue();
                    this.q = parseBigInt(u, 16);
                    var c = n.sub[6].getHexStringValue();
                    this.dmp1 = parseBigInt(c, 16);
                    var f = n.sub[7].getHexStringValue();
                    this.dmq1 = parseBigInt(f, 16);
                    var g = n.sub[8].getHexStringValue();
                    this.coeff = parseBigInt(g, 16);
                } else {
                    if (2 !== n.sub.length) return !1;
                    var l = n.sub[1].sub[0];
                    e = l.sub[0].getHexStringValue(), this.n = parseBigInt(e, 16), i = l.sub[1].getHexStringValue(), 
                    this.e = parseInt(i, 16);
                }
                return !0;
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                return !1;
            }
        }, JSEncryptRSAKey.prototype.getPrivateBaseKey = function() {
            var t = {
                array: [ new L.asn1.DERInteger({
                    int: 0
                }), new L.asn1.DERInteger({
                    bigint: this.n
                }), new L.asn1.DERInteger({
                    int: this.e
                }), new L.asn1.DERInteger({
                    bigint: this.d
                }), new L.asn1.DERInteger({
                    bigint: this.p
                }), new L.asn1.DERInteger({
                    bigint: this.q
                }), new L.asn1.DERInteger({
                    bigint: this.dmp1
                }), new L.asn1.DERInteger({
                    bigint: this.dmq1
                }), new L.asn1.DERInteger({
                    bigint: this.coeff
                }) ]
            };
            return new L.asn1.DERSequence(t).getEncodedHex();
        }, JSEncryptRSAKey.prototype.getPrivateBaseKeyB64 = function() {
            return hex2b64(this.getPrivateBaseKey());
        }, JSEncryptRSAKey.prototype.getPublicBaseKey = function() {
            var t = new L.asn1.DERSequence({
                array: [ new L.asn1.DERObjectIdentifier({
                    oid: "1.2.840.113549.1.1.1"
                }), new L.asn1.DERNull() ]
            }), e = new L.asn1.DERSequence({
                array: [ new L.asn1.DERInteger({
                    bigint: this.n
                }), new L.asn1.DERInteger({
                    int: this.e
                }) ]
            }), i = new L.asn1.DERBitString({
                hex: "00" + e.getEncodedHex()
            });
            return new L.asn1.DERSequence({
                array: [ t, i ]
            }).getEncodedHex();
        }, JSEncryptRSAKey.prototype.getPublicBaseKeyB64 = function() {
            return hex2b64(this.getPublicBaseKey());
        }, JSEncryptRSAKey.wordwrap = function(t, e) {
            if (!t) return t;
            var i = "(.{1," + (e = e || 64) + "})( +|$\n?)|(.{1," + e + "})";
            return t.match(RegExp(i, "g")).join("\n");
        }, JSEncryptRSAKey.prototype.getPrivateKey = function() {
            var t = "-----BEGIN RSA PRIVATE KEY-----\n";
            return t += JSEncryptRSAKey.wordwrap(this.getPrivateBaseKeyB64()) + "\n", t += "-----END RSA PRIVATE KEY-----";
        }, JSEncryptRSAKey.prototype.getPublicKey = function() {
            var t = "-----BEGIN PUBLIC KEY-----\n";
            return t += JSEncryptRSAKey.wordwrap(this.getPublicBaseKeyB64()) + "\n", t += "-----END PUBLIC KEY-----";
        }, JSEncryptRSAKey.hasPublicKeyProperty = function(t) {
            return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e");
        }, JSEncryptRSAKey.hasPrivateKeyProperty = function(t) {
            return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff");
        }, JSEncryptRSAKey.prototype.parsePropertiesFrom = function(t) {
            this.n = t.n, this.e = t.e, t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, 
            this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff);
        }, JSEncryptRSAKey;
    }(q), _ = function() {
        function JSEncrypt(t) {
            t = t || {}, this.default_key_size = parseInt(t.default_key_size, 10) || 1024, this.default_public_exponent = t.default_public_exponent || "010001", 
            this.log = t.log || !1, this.key = null;
        }
        return JSEncrypt.prototype.setKey = function(t) {
            this.log && this.key && console.warn("A key was already set, overriding existing."), 
            this.key = new H(t);
        }, JSEncrypt.prototype.setPrivateKey = function(t) {
            this.setKey(t);
        }, JSEncrypt.prototype.setPublicKey = function(t) {
            this.setKey(t);
        }, JSEncrypt.prototype.decrypt = function(t) {
            try {
                return this.getKey().decrypt(b64tohex(t));
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                return !1;
            }
        }, JSEncrypt.prototype.encrypt = function(t) {
            try {
                return hex2b64(this.getKey().encrypt(t));
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                return !1;
            }
        }, JSEncrypt.prototype.sign = function(t, e, i) {
            try {
                return hex2b64(this.getKey().sign(t, e, i));
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                return !1;
            }
        }, JSEncrypt.prototype.verify = function(t, e, i) {
            try {
                return this.getKey().verify(t, b64tohex(e), i);
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                return !1;
            }
        }, JSEncrypt.prototype.getKey = function(t) {
            if (!this.key) {
                if (this.key = new H(), t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                this.key.generate(this.default_key_size, this.default_public_exponent);
            }
            return this.key;
        }, JSEncrypt.prototype.getPrivateKey = function() {
            return this.getKey().getPrivateKey();
        }, JSEncrypt.prototype.getPrivateKeyB64 = function() {
            return this.getKey().getPrivateBaseKeyB64();
        }, JSEncrypt.prototype.getPublicKey = function() {
            return this.getKey().getPublicKey();
        }, JSEncrypt.prototype.getPublicKeyB64 = function() {
            return this.getKey().getPublicBaseKeyB64();
        }, JSEncrypt.version = "3.0.0-rc.1", JSEncrypt;
    }();
    window.JSEncrypt = _, t.JSEncrypt = _, t.default = _, Object.defineProperty(t, "__esModule", {
        value: !0
    });
});