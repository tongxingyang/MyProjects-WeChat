function e() {}

function t(e, t) {
    return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
}

function r(e, t, r, a, n, s) {
    for (var c, i = ++t, u = h; ;) {
        var o = e.charAt(i);
        switch (o) {
          case "=":
            if (u === g) c = e.slice(t, i), u = w; else {
                if (u !== p) throw new Error("attribute equal must after attrName");
                u = w;
            }
            break;

          case "'":
          case '"':
            if (u === w || u === g) {
                if (u === g && (s.warning('attribute value must after "="'), c = e.slice(t, i)), 
                t = i + 1, !((i = e.indexOf(o, t)) > 0)) throw new Error("attribute value no end '" + o + "' match");
                l = e.slice(t, i).replace(/&#?\w+;/g, n), r.add(c, l, t - 1), u = x;
            } else {
                if (u != b) throw new Error('attribute value must after "="');
                l = e.slice(t, i).replace(/&#?\w+;/g, n), r.add(c, l, t), s.warning('attribute "' + c + '" missed start quot(' + o + ")!!"), 
                t = i + 1, u = x;
            }
            break;

          case "/":
            switch (u) {
              case h:
                r.setTagName(e.slice(t, i));

              case x:
              case v:
              case N:
                u = N, r.closed = !0;

              case b:
              case g:
              case p:
                break;

              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;

          case "":
            return s.error("unexpected end of input"), u == h && r.setTagName(e.slice(t, i)), 
            i;

          case ">":
            switch (u) {
              case h:
                r.setTagName(e.slice(t, i));

              case x:
              case v:
              case N:
                break;

              case b:
              case g:
                "/" === (l = e.slice(t, i)).slice(-1) && (r.closed = !0, l = l.slice(0, -1));

              case p:
                u === p && (l = c), u == b ? (s.warning('attribute "' + l + '" missed quot(")!!'), 
                r.add(c, l.replace(/&#?\w+;/g, n), t)) : ("http://www.w3.org/1999/xhtml" === a[""] && l.match(/^(?:disabled|checked|selected)$/i) || s.warning('attribute "' + l + '" missed value!! "' + l + '" instead!!'), 
                r.add(l, l, t));
                break;

              case w:
                throw new Error("attribute value missed!!");
            }
            return i;

          case "":
            o = " ";

          default:
            if (" " >= o) switch (u) {
              case h:
                r.setTagName(e.slice(t, i)), u = v;
                break;

              case g:
                c = e.slice(t, i), u = p;
                break;

              case b:
                var l = e.slice(t, i).replace(/&#?\w+;/g, n);
                s.warning('attribute "' + l + '" missed quot(")!!'), r.add(c, l, t);

              case x:
                u = v;
            } else switch (u) {
              case p:
                r.tagName, "http://www.w3.org/1999/xhtml" === a[""] && c.match(/^(?:disabled|checked|selected)$/i) || s.warning('attribute "' + c + '" missed value!! "' + c + '" instead2!!'), 
                r.add(c, c, t), t = i, u = g;
                break;

              case x:
                s.warning('attribute space is required"' + c + '"!!');

              case v:
                u = g, t = i;
                break;

              case w:
                u = b, t = i;
                break;

              case N:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
        }
        i++;
    }
}

function a(e, t, r) {
    for (var a = e.tagName, n = null, s = e.length; s--; ) {
        var i = e[s], u = i.qName, o = i.value;
        if ((m = u.indexOf(":")) > 0) var l = i.prefix = u.slice(0, m), f = u.slice(m + 1), d = "xmlns" === l && f; else f = u, 
        l = null, d = "xmlns" === u && "";
        i.localName = f, !1 !== d && (null == n && (n = {}, c(r, r = {})), r[d] = n[d] = o, 
        i.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(d, o));
    }
    for (s = e.length; s--; ) (l = (i = e[s]).prefix) && ("xml" === l && (i.uri = "http://www.w3.org/XML/1998/namespace"), 
    "xmlns" !== l && (i.uri = r[l || ""]));
    var m;
    (m = a.indexOf(":")) > 0 ? (l = e.prefix = a.slice(0, m), f = e.localName = a.slice(m + 1)) : (l = null, 
    f = e.localName = a);
    var h = e.uri = r[l || ""];
    if (t.startElement(h, f, a, e), !e.closed) return e.currentNSMap = r, e.localNSMap = n, 
    !0;
    if (t.endElement(h, f, a), n) for (l in n) t.endPrefixMapping(l);
}

function n(e, t, r, a, n) {
    if (/^(?:script|textarea)$/i.test(r)) {
        var s = e.indexOf("</" + r + ">", t), c = e.substring(t + 1, s);
        if (/[&<]/.test(c)) return /^script$/i.test(r) ? (n.characters(c, 0, c.length), 
        s) : (c = c.replace(/&#?\w+;/g, a), n.characters(c, 0, c.length), s);
    }
    return t + 1;
}

function s(e, t, r, a) {
    var n = a[r];
    return null == n && (t > (n = e.lastIndexOf("</" + r + ">")) && (n = e.lastIndexOf("</" + r)), 
    a[r] = n), t > n;
}

function c(e, t) {
    for (var r in e) t[r] = e[r];
}

function i(e, t, r, a) {
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
            for (n.lastIndex = t, n.exec(e); r = n.exec(e); ) if (a.push(r), r[1]) return a;
        }(e, t), c = s.length;
        if (c > 1 && /!doctype/i.test(s[0][0])) {
            var i = s[1][0], u = c > 3 && /^public$/i.test(s[2][0]) && s[3][0], o = c > 4 && s[4][0], l = s[c - 1];
            return r.startDTD(i, u && u.replace(/^(['"])(.*?)\1$/, "$2"), o && o.replace(/^(['"])(.*?)\1$/, "$2")), 
            r.endDTD(), l.index + l[0].length;
        }
    }
    return -1;
}

function u(e, t, r) {
    var a = e.indexOf("?>", t);
    if (a) {
        var n = e.substring(t, a).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        return n ? (n[0].length, r.processingInstruction(n[1], n[2]), a + 2) : -1;
    }
    return -1;
}

function o() {}

function l(e, t) {
    return e.__proto__ = t, e;
}

var f = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, d = new RegExp("[\\-\\.0-9" + f.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), m = new RegExp("^" + f.source + d.source + "*(?::" + f.source + d.source + "*)?$"), h = 0, g = 1, p = 2, w = 3, b = 4, x = 5, v = 6, N = 7;

e.prototype = {
    parse: function(e, l, f) {
        var d = this.domBuilder;
        d.startDocument(), c(l, l = {}), function(e, c, l, f, d) {
            function m(e) {
                var t = e.slice(1, -1);
                return t in l ? l[t] : "#" === t.charAt(0) ? function(e) {
                    if (e > 65535) {
                        var t = 55296 + ((e -= 65536) >> 10), r = 56320 + (1023 & e);
                        return String.fromCharCode(t, r);
                    }
                    return String.fromCharCode(e);
                }(parseInt(t.substr(1).replace("x", "0x"))) : (d.error("entity not found:" + e), 
                e);
            }
            function h(t) {
                if (t > F) {
                    var r = e.substring(F, t).replace(/&#?\w+;/g, m);
                    x && g(F), f.characters(r, 0, t - F), F = t;
                }
            }
            function g(t, r) {
                for (;t >= w && (r = b.exec(e)); ) p = r.index, w = p + r[0].length, x.lineNumber++;
                x.columnNumber = t - p + 1;
            }
            for (var p = 0, w = 0, b = /.*(?:\r\n?|\n)|.*$/g, x = f.locator, v = [ {
                currentNSMap: c
            } ], N = {}, F = 0; ;) {
                try {
                    var D = e.indexOf("<", F);
                    if (0 > D) {
                        if (!e.substr(F).match(/^\s*$/)) {
                            var k = f.doc, E = k.createTextNode(e.substr(F));
                            k.appendChild(E), f.currentElement = E;
                        }
                        return;
                    }
                    switch (D > F && h(D), e.charAt(D + 1)) {
                      case "/":
                        var C = e.indexOf(">", D + 3), $ = e.substring(D + 2, C), A = v.pop();
                        0 > C ? ($ = e.substring(D + 2).replace(/[\s<].*/, ""), d.error("end tag name: " + $ + " is not complete:" + A.tagName), 
                        C = D + 1 + $.length) : $.match(/\s</) && ($ = $.replace(/[\s<].*/, ""), d.error("end tag name: " + $ + " maybe not complete"), 
                        C = D + 1 + $.length);
                        var M = A.localNSMap, O = A.tagName == $;
                        if (O || A.tagName && A.tagName.toLowerCase() == $.toLowerCase()) {
                            if (f.endElement(A.uri, A.localName, $), M) for (var T in M) f.endPrefixMapping(T);
                            O || d.fatalError("end tag name: " + $ + " is not match the current start tagName:" + A.tagName);
                        } else v.push(A);
                        C++;
                        break;

                      case "?":
                        x && g(D), C = u(e, D, f);
                        break;

                      case "!":
                        x && g(D), C = i(e, D, f, d);
                        break;

                      default:
                        x && g(D);
                        var S = new o(), q = v[v.length - 1].currentNSMap, y = (C = r(e, D, S, q, m, d), 
                        S.length);
                        if (!S.closed && s(e, C, S.tagName, N) && (S.closed = !0, l.nbsp || d.warning("unclosed xml attribute")), 
                        x && y) {
                            for (var I = t(x, {}), L = 0; y > L; L++) {
                                var _ = S[L];
                                g(_.offset), _.locator = t(x, {});
                            }
                            f.locator = I, a(S, f, q) && v.push(S), f.locator = x;
                        } else a(S, f, q) && v.push(S);
                        "http://www.w3.org/1999/xhtml" !== S.uri || S.closed ? C++ : C = n(e, C, S.tagName, m, f);
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    d.error("element parse error: " + e), C = -1;
                }
                C > F ? F = C : h(Math.max(D, F) + 1);
            }
        }(e, l, f, d, this.errorHandler), d.endDocument();
    }
}, o.prototype = {
    setTagName: function(e) {
        if (!m.test(e)) throw new Error("invalid tagName:" + e);
        this.tagName = e;
    },
    add: function(e, t, r) {
        if (!m.test(e)) throw new Error("invalid attribute:" + e);
        this[this.length++] = {
            qName: e,
            value: t,
            offset: r
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
}, l({}, l.prototype) instanceof l || (l = function(e, t) {
    function r() {}
    for (t in r.prototype = t, r = new r(), e) r[t] = e[t];
    return r;
}), exports.XMLReader = e;