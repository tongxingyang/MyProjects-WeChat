var e = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, t = new RegExp("[\\-\\.0-9" + e.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), r = new RegExp("^" + e.source + t.source + "*(?::" + e.source + t.source + "*)?$"), a = 0, n = 1, s = 2, c = 3, i = 4, u = 5, l = 6, o = 7;

function f() {}

function d(e, t) {
    return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
}

function m(e, t, r, f, d, m) {
    for (var h, g = ++t, w = a; ;) {
        var p = e.charAt(g);
        switch (p) {
          case "=":
            if (w === n) h = e.slice(t, g), w = c; else {
                if (w !== s) throw new Error("attribute equal must after attrName");
                w = c;
            }
            break;

          case "'":
          case '"':
            if (w === c || w === n) {
                if (w === n && (m.warning('attribute value must after "="'), h = e.slice(t, g)), 
                t = g + 1, !((g = e.indexOf(p, t)) > 0)) throw new Error("attribute value no end '" + p + "' match");
                b = e.slice(t, g).replace(/&#?\w+;/g, d), r.add(h, b, t - 1), w = u;
            } else {
                if (w != i) throw new Error('attribute value must after "="');
                b = e.slice(t, g).replace(/&#?\w+;/g, d), r.add(h, b, t), m.warning('attribute "' + h + '" missed start quot(' + p + ")!!"), 
                t = g + 1, w = u;
            }
            break;

          case "/":
            switch (w) {
              case a:
                r.setTagName(e.slice(t, g));

              case u:
              case l:
              case o:
                w = o, r.closed = !0;

              case i:
              case n:
              case s:
                break;

              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;

          case "":
            return m.error("unexpected end of input"), w == a && r.setTagName(e.slice(t, g)), 
            g;

          case ">":
            switch (w) {
              case a:
                r.setTagName(e.slice(t, g));

              case u:
              case l:
              case o:
                break;

              case i:
              case n:
                "/" === (b = e.slice(t, g)).slice(-1) && (r.closed = !0, b = b.slice(0, -1));

              case s:
                w === s && (b = h), w == i ? (m.warning('attribute "' + b + '" missed quot(")!!'), 
                r.add(h, b.replace(/&#?\w+;/g, d), t)) : ("http://www.w3.org/1999/xhtml" === f[""] && b.match(/^(?:disabled|checked|selected)$/i) || m.warning('attribute "' + b + '" missed value!! "' + b + '" instead!!'), 
                r.add(b, b, t));
                break;

              case c:
                throw new Error("attribute value missed!!");
            }
            return g;

          case "":
            p = " ";

          default:
            if (p <= " ") switch (w) {
              case a:
                r.setTagName(e.slice(t, g)), w = l;
                break;

              case n:
                h = e.slice(t, g), w = s;
                break;

              case i:
                var b = e.slice(t, g).replace(/&#?\w+;/g, d);
                m.warning('attribute "' + b + '" missed quot(")!!'), r.add(h, b, t);

              case u:
                w = l;
            } else switch (w) {
              case s:
                r.tagName;
                "http://www.w3.org/1999/xhtml" === f[""] && h.match(/^(?:disabled|checked|selected)$/i) || m.warning('attribute "' + h + '" missed value!! "' + h + '" instead2!!'), 
                r.add(h, h, t), t = g, w = n;
                break;

              case u:
                m.warning('attribute space is required"' + h + '"!!');

              case l:
                w = n, t = g;
                break;

              case c:
                w = i, t = g;
                break;

              case o:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
        }
        g++;
    }
}

function h(e, t, r) {
    for (var a = e.tagName, n = null, s = e.length; s--; ) {
        var c = e[s], i = c.qName, u = c.value;
        if ((d = i.indexOf(":")) > 0) var l = c.prefix = i.slice(0, d), o = i.slice(d + 1), f = "xmlns" === l && o; else o = i, 
        l = null, f = "xmlns" === i && "";
        c.localName = o, !1 !== f && (null == n && (n = {}, p(r, r = {})), r[f] = n[f] = u, 
        c.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(f, u));
    }
    for (s = e.length; s--; ) {
        (l = (c = e[s]).prefix) && ("xml" === l && (c.uri = "http://www.w3.org/XML/1998/namespace"), 
        "xmlns" !== l && (c.uri = r[l || ""]));
    }
    var d;
    (d = a.indexOf(":")) > 0 ? (l = e.prefix = a.slice(0, d), o = e.localName = a.slice(d + 1)) : (l = null, 
    o = e.localName = a);
    var m = e.uri = r[l || ""];
    if (t.startElement(m, o, a, e), !e.closed) return e.currentNSMap = r, e.localNSMap = n, 
    !0;
    if (t.endElement(m, o, a), n) for (l in n) t.endPrefixMapping(l);
}

function g(e, t, r, a, n) {
    if (/^(?:script|textarea)$/i.test(r)) {
        var s = e.indexOf("</" + r + ">", t), c = e.substring(t + 1, s);
        if (/[&<]/.test(c)) return /^script$/i.test(r) ? (n.characters(c, 0, c.length), 
        s) : (c = c.replace(/&#?\w+;/g, a), n.characters(c, 0, c.length), s);
    }
    return t + 1;
}

function w(e, t, r, a) {
    var n = a[r];
    return null == n && ((n = e.lastIndexOf("</" + r + ">")) < t && (n = e.lastIndexOf("</" + r)), 
    a[r] = n), n < t;
}

function p(e, t) {
    for (var r in e) t[r] = e[r];
}

function b(e, t, r, a) {
    switch (e.charAt(t + 2)) {
      case "-":
        return "-" === e.charAt(t + 3) ? (n = e.indexOf("--\x3e", t + 4)) > t ? (r.comment(e, t + 4, n - t - 4), 
        n + 3) : (a.error("Unclosed comment"), -1) : -1;

      default:
        if ("CDATA[" == e.substr(t + 3, 6)) {
            var n = e.indexOf("]]>", t + 9);
            return r.startCDATA(), r.characters(e, t + 9, n - t - 9), r.endCDATA(), n + 3;
        }
        var s = function(e, t) {
            var r, a = [], n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
            n.lastIndex = t, n.exec(e);
            for (;r = n.exec(e); ) if (a.push(r), r[1]) return a;
        }(e, t), c = s.length;
        if (c > 1 && /!doctype/i.test(s[0][0])) {
            var i = s[1][0], u = c > 3 && /^public$/i.test(s[2][0]) && s[3][0], l = c > 4 && s[4][0], o = s[c - 1];
            return r.startDTD(i, u && u.replace(/^(['"])(.*?)\1$/, "$2"), l && l.replace(/^(['"])(.*?)\1$/, "$2")), 
            r.endDTD(), o.index + o[0].length;
        }
    }
    return -1;
}

function x(e, t, r) {
    var a = e.indexOf("?>", t);
    if (a) {
        var n = e.substring(t, a).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (n) {
            n[0].length;
            return r.processingInstruction(n[1], n[2]), a + 2;
        }
        return -1;
    }
    return -1;
}

function v(e) {}

f.prototype = {
    parse: function(e, t, r) {
        var a = this.domBuilder;
        a.startDocument(), p(t, t = {}), function(e, t, r, a, n) {
            function s(e) {
                var t = e.slice(1, -1);
                return t in r ? r[t] : "#" === t.charAt(0) ? function(e) {
                    if (e > 65535) {
                        var t = 55296 + ((e -= 65536) >> 10), r = 56320 + (1023 & e);
                        return String.fromCharCode(t, r);
                    }
                    return String.fromCharCode(e);
                }(parseInt(t.substr(1).replace("x", "0x"))) : (n.error("entity not found:" + e), 
                e);
            }
            function c(t) {
                if (t > F) {
                    var r = e.substring(F, t).replace(/&#?\w+;/g, s);
                    f && i(F), a.characters(r, 0, t - F), F = t;
                }
            }
            function i(t, r) {
                for (;t >= l && (r = o.exec(e)); ) u = r.index, l = u + r[0].length, f.lineNumber++;
                f.columnNumber = t - u + 1;
            }
            var u = 0, l = 0, o = /.*(?:\r\n?|\n)|.*$/g, f = a.locator, p = [ {
                currentNSMap: t
            } ], N = {}, F = 0;
            for (;;) {
                try {
                    var D = e.indexOf("<", F);
                    if (D < 0) {
                        if (!e.substr(F).match(/^\s*$/)) {
                            var k = a.doc, E = k.createTextNode(e.substr(F));
                            k.appendChild(E), a.currentElement = E;
                        }
                        return;
                    }
                    switch (D > F && c(D), e.charAt(D + 1)) {
                      case "/":
                        var C = e.indexOf(">", D + 3), $ = e.substring(D + 2, C), A = p.pop();
                        C < 0 ? ($ = e.substring(D + 2).replace(/[\s<].*/, ""), n.error("end tag name: " + $ + " is not complete:" + A.tagName), 
                        C = D + 1 + $.length) : $.match(/\s</) && ($ = $.replace(/[\s<].*/, ""), n.error("end tag name: " + $ + " maybe not complete"), 
                        C = D + 1 + $.length);
                        var M = A.localNSMap, O = A.tagName == $, T = O || A.tagName && A.tagName.toLowerCase() == $.toLowerCase();
                        if (T) {
                            if (a.endElement(A.uri, A.localName, $), M) for (var S in M) a.endPrefixMapping(S);
                            O || n.fatalError("end tag name: " + $ + " is not match the current start tagName:" + A.tagName);
                        } else p.push(A);
                        C++;
                        break;

                      case "?":
                        f && i(D), C = x(e, D, a);
                        break;

                      case "!":
                        f && i(D), C = b(e, D, a, n);
                        break;

                      default:
                        f && i(D);
                        var q = new v(), y = p[p.length - 1].currentNSMap, C = m(e, D, q, y, s, n), I = q.length;
                        if (!q.closed && w(e, C, q.tagName, N) && (q.closed = !0, r.nbsp || n.warning("unclosed xml attribute")), 
                        f && I) {
                            for (var L = d(f, {}), R = 0; R < I; R++) {
                                var P = q[R];
                                i(P.offset), P.locator = d(f, {});
                            }
                            a.locator = L, h(q, a, y) && p.push(q), a.locator = f;
                        } else h(q, a, y) && p.push(q);
                        "http://www.w3.org/1999/xhtml" !== q.uri || q.closed ? C++ : C = g(e, C, q.tagName, s, a);
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    n.error("element parse error: " + e), C = -1;
                }
                C > F ? F = C : c(Math.max(D, F) + 1);
            }
        }(e, t, r, a, this.errorHandler), a.endDocument();
    }
}, v.prototype = {
    setTagName: function(e) {
        if (!r.test(e)) throw new Error("invalid tagName:" + e);
        this.tagName = e;
    },
    add: function(e, t, a) {
        if (!r.test(e)) throw new Error("invalid attribute:" + e);
        this[this.length++] = {
            qName: e,
            value: t,
            offset: a
        };
    },
    length: 0,
    getLocalName: function(e) {
        return this[e].localName;
    },
    getLocator: function(e) {
        return this[e].locator;
    },
    getQName: function(e) {
        return this[e].qName;
    },
    getURI: function(e) {
        return this[e].uri;
    },
    getValue: function(e) {
        return this[e].value;
    }
}, exports.XMLReader = f;