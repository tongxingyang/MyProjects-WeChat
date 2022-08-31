var e = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, t = new RegExp("[\\-\\.0-9" + e.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), r = new RegExp("^" + e.source + t.source + "*(?::" + e.source + t.source + "*)?$");

function a() {}

function n(e, t) {
    return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
}

function s(e, t, r, a, n, s) {
    for (var c, i = ++t, u = 0; ;) {
        var l = e.charAt(i);
        switch (l) {
          case "=":
            if (1 === u) c = e.slice(t, i), u = 3; else {
                if (2 !== u) throw new Error("attribute equal must after attrName");
                u = 3;
            }
            break;

          case "'":
          case '"':
            if (3 === u || 1 === u) {
                if (1 === u && (s.warning('attribute value must after "="'), c = e.slice(t, i)), 
                t = i + 1, !((i = e.indexOf(l, t)) > 0)) throw new Error("attribute value no end '" + l + "' match");
                o = e.slice(t, i).replace(/&#?\w+;/g, n), r.add(c, o, t - 1), u = 5;
            } else {
                if (4 != u) throw new Error('attribute value must after "="');
                o = e.slice(t, i).replace(/&#?\w+;/g, n), r.add(c, o, t), s.warning('attribute "' + c + '" missed start quot(' + l + ")!!"), 
                t = i + 1, u = 5;
            }
            break;

          case "/":
            switch (u) {
              case 0:
                r.setTagName(e.slice(t, i));

              case 5:
              case 6:
              case 7:
                u = 7, r.closed = !0;

              case 4:
              case 1:
              case 2:
                break;

              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;

          case "":
            return s.error("unexpected end of input"), 0 == u && r.setTagName(e.slice(t, i)), 
            i;

          case ">":
            switch (u) {
              case 0:
                r.setTagName(e.slice(t, i));

              case 5:
              case 6:
              case 7:
                break;

              case 4:
              case 1:
                "/" === (o = e.slice(t, i)).slice(-1) && (r.closed = !0, o = o.slice(0, -1));

              case 2:
                2 === u && (o = c), 4 == u ? (s.warning('attribute "' + o + '" missed quot(")!!'), 
                r.add(c, o.replace(/&#?\w+;/g, n), t)) : ("http://www.w3.org/1999/xhtml" === a[""] && o.match(/^(?:disabled|checked|selected)$/i) || s.warning('attribute "' + o + '" missed value!! "' + o + '" instead!!'), 
                r.add(o, o, t));
                break;

              case 3:
                throw new Error("attribute value missed!!");
            }
            return i;

          case "":
            l = " ";

          default:
            if (l <= " ") switch (u) {
              case 0:
                r.setTagName(e.slice(t, i)), u = 6;
                break;

              case 1:
                c = e.slice(t, i), u = 2;
                break;

              case 4:
                var o = e.slice(t, i).replace(/&#?\w+;/g, n);
                s.warning('attribute "' + o + '" missed quot(")!!'), r.add(c, o, t);

              case 5:
                u = 6;
            } else switch (u) {
              case 2:
                r.tagName;
                "http://www.w3.org/1999/xhtml" === a[""] && c.match(/^(?:disabled|checked|selected)$/i) || s.warning('attribute "' + c + '" missed value!! "' + c + '" instead2!!'), 
                r.add(c, c, t), t = i, u = 1;
                break;

              case 5:
                s.warning('attribute space is required"' + c + '"!!');

              case 6:
                u = 1, t = i;
                break;

              case 3:
                u = 4, t = i;
                break;

              case 7:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
        }
        i++;
    }
}

function c(e, t, r) {
    for (var a = e.tagName, n = null, s = e.length; s--; ) {
        var c = e[s], i = c.qName, u = c.value;
        if ((m = i.indexOf(":")) > 0) var o = c.prefix = i.slice(0, m), f = i.slice(m + 1), d = "xmlns" === o && f; else f = i, 
        o = null, d = "xmlns" === i && "";
        c.localName = f, !1 !== d && (null == n && (n = {}, l(r, r = {})), r[d] = n[d] = u, 
        c.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(d, u));
    }
    for (s = e.length; s--; ) {
        (o = (c = e[s]).prefix) && ("xml" === o && (c.uri = "http://www.w3.org/XML/1998/namespace"), 
        "xmlns" !== o && (c.uri = r[o || ""]));
    }
    var m;
    (m = a.indexOf(":")) > 0 ? (o = e.prefix = a.slice(0, m), f = e.localName = a.slice(m + 1)) : (o = null, 
    f = e.localName = a);
    var h = e.uri = r[o || ""];
    if (t.startElement(h, f, a, e), !e.closed) return e.currentNSMap = r, e.localNSMap = n, 
    !0;
    if (t.endElement(h, f, a), n) for (o in n) t.endPrefixMapping(o);
}

function i(e, t, r, a, n) {
    if (/^(?:script|textarea)$/i.test(r)) {
        var s = e.indexOf("</" + r + ">", t), c = e.substring(t + 1, s);
        if (/[&<]/.test(c)) return /^script$/i.test(r) ? (n.characters(c, 0, c.length), 
        s) : (c = c.replace(/&#?\w+;/g, a), n.characters(c, 0, c.length), s);
    }
    return t + 1;
}

function u(e, t, r, a) {
    var n = a[r];
    return null == n && ((n = e.lastIndexOf("</" + r + ">")) < t && (n = e.lastIndexOf("</" + r)), 
    a[r] = n), n < t;
}

function l(e, t) {
    for (var r in e) t[r] = e[r];
}

function o(e, t, r, a) {
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

function f(e, t, r) {
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

function d(e) {}

a.prototype = {
    parse: function(e, t, r) {
        var a = this.domBuilder;
        a.startDocument(), l(t, t = {}), function(e, t, r, a, l) {
            function m(e) {
                var t = e.slice(1, -1);
                return t in r ? r[t] : "#" === t.charAt(0) ? function(e) {
                    if (e > 65535) {
                        var t = 55296 + ((e -= 65536) >> 10), r = 56320 + (1023 & e);
                        return String.fromCharCode(t, r);
                    }
                    return String.fromCharCode(e);
                }(parseInt(t.substr(1).replace("x", "0x"))) : (l.error("entity not found:" + e), 
                e);
            }
            function h(t) {
                if (t > F) {
                    var r = e.substring(F, t).replace(/&#?\w+;/g, m);
                    x && g(F), a.characters(r, 0, t - F), F = t;
                }
            }
            function g(t, r) {
                for (;t >= p && (r = b.exec(e)); ) w = r.index, p = w + r[0].length, x.lineNumber++;
                x.columnNumber = t - w + 1;
            }
            var w = 0, p = 0, b = /.*(?:\r\n?|\n)|.*$/g, x = a.locator, v = [ {
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
                    switch (D > F && h(D), e.charAt(D + 1)) {
                      case "/":
                        var C = e.indexOf(">", D + 3), $ = e.substring(D + 2, C), A = v.pop();
                        C < 0 ? ($ = e.substring(D + 2).replace(/[\s<].*/, ""), l.error("end tag name: " + $ + " is not complete:" + A.tagName), 
                        C = D + 1 + $.length) : $.match(/\s</) && ($ = $.replace(/[\s<].*/, ""), l.error("end tag name: " + $ + " maybe not complete"), 
                        C = D + 1 + $.length);
                        var M = A.localNSMap, O = A.tagName == $;
                        if (O || A.tagName && A.tagName.toLowerCase() == $.toLowerCase()) {
                            if (a.endElement(A.uri, A.localName, $), M) for (var T in M) a.endPrefixMapping(T);
                            O || l.fatalError("end tag name: " + $ + " is not match the current start tagName:" + A.tagName);
                        } else v.push(A);
                        C++;
                        break;

                      case "?":
                        x && g(D), C = f(e, D, a);
                        break;

                      case "!":
                        x && g(D), C = o(e, D, a, l);
                        break;

                      default:
                        x && g(D);
                        var S = new d(), q = v[v.length - 1].currentNSMap, y = (C = s(e, D, S, q, m, l), 
                        S.length);
                        if (!S.closed && u(e, C, S.tagName, N) && (S.closed = !0, r.nbsp || l.warning("unclosed xml attribute")), 
                        x && y) {
                            for (var I = n(x, {}), L = 0; L < y; L++) {
                                var R = S[L];
                                g(R.offset), R.locator = n(x, {});
                            }
                            a.locator = I, c(S, a, q) && v.push(S), a.locator = x;
                        } else c(S, a, q) && v.push(S);
                        "http://www.w3.org/1999/xhtml" !== S.uri || S.closed ? C++ : C = i(e, C, S.tagName, m, a);
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    l.error("element parse error: " + e), C = -1;
                }
                C > F ? F = C : h(Math.max(D, F) + 1);
            }
        }(e, t, r, a, this.errorHandler), a.endDocument();
    }
}, d.prototype = {
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
}, exports.XMLReader = a;