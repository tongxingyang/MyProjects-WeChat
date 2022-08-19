var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/helpers/typeof"));

function t(e, t) {
    for (var n in e) t[n] = e[n];
}

function n(e, n) {
    function r() {}
    var i = e.prototype;
    if (Object.create) {
        var o = Object.create(n.prototype);
        i.__proto__ = o;
    }
    i instanceof n || (r.prototype = n.prototype, t(i, r = new r()), e.prototype = i = r), 
    i.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e), 
    i.constructor = e);
}

function r(e, t) {
    if (t instanceof Error) var n = t; else n = this, Error.call(this, J[e]), this.message = J[e], 
    Error.captureStackTrace && Error.captureStackTrace(this, r);
    return n.code = e, t && (this.message = this.message + ": " + t), n;
}

function i() {}

function o(e, t) {
    this._node = e, this._refresh = t, a(this);
}

function a(e) {
    var n = e._node._inc || e._node.ownerDocument._inc;
    if (e._inc != n) {
        var r = e._refresh(e._node);
        P(e, "length", r.length), t(r, e), e._inc = n;
    }
}

function u() {}

function s(e, t) {
    for (var n = e.length; n--; ) if (e[n] === t) return n;
}

function l(e, t, n, r) {
    if (r ? t[s(t, r)] = n : t[t.length++] = n, e) {
        n.ownerElement = e;
        var i = e.ownerDocument;
        i && (r && N(i, e, r), function(e, t, n) {
            e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
        }(i, e, n));
    }
}

function c(e, t, n) {
    var i = s(t, n);
    if (!(i >= 0)) throw r(ee, new Error(e.tagName + "@" + n));
    for (var o = t.length - 1; o > i; ) t[i] = t[++i];
    if (t.length = o, e) {
        var a = e.ownerDocument;
        a && (N(a, e, n), n.ownerElement = null);
    }
}

function h(e) {
    if (this._features = {}, e) for (var t in e) this._features = e[t];
}

function p() {}

function d(e) {
    return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
}

function f(e, t) {
    if (t(e)) return !0;
    if (e = e.firstChild) do {
        if (f(e, t)) return !0;
    } while (e = e.nextSibling);
}

function m() {}

function N(e, t, n) {
    e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""];
}

function v(e, t, n) {
    if (e && e._inc) {
        e._inc++;
        var r = t.childNodes;
        if (n) r[r.length++] = n; else {
            for (var i = t.firstChild, o = 0; i; ) r[o++] = i, i = i.nextSibling;
            r.length = o;
        }
    }
}

function g(e, t) {
    var n = t.previousSibling, r = t.nextSibling;
    return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, 
    v(e.ownerDocument, e), t;
}

function w(e, t, n) {
    var r = t.parentNode;
    if (r && r.removeChild(t), t.nodeType === W) {
        var i = t.firstChild;
        if (null == i) return t;
        var o = t.lastChild;
    } else i = o = t;
    var a = n ? n.previousSibling : e.lastChild;
    i.previousSibling = a, o.nextSibling = n, a ? a.nextSibling = i : e.firstChild = i, 
    null == n ? e.lastChild = o : n.previousSibling = o;
    do {
        i.parentNode = e;
    } while (i !== o && (i = i.nextSibling));
    return v(e.ownerDocument || e, e), t.nodeType == W && (t.firstChild = t.lastChild = null), 
    t;
}

function E() {
    this._nsMap = {};
}

function b() {}

function y() {}

function T() {}

function _() {}

function D() {}

function S() {}

function C() {}

function I() {}

function x() {}

function R() {}

function A() {}

function O() {}

function U(e, t) {
    var n = [], r = 9 == this.nodeType ? this.documentElement : this, i = r.prefix, o = r.namespaceURI;
    if (o && null == i && null == (i = r.lookupPrefix(o))) var a = [ {
        namespace: o,
        prefix: null
    } ];
    return B(this, n, e, t, a), n.join("");
}

function M(e, t, n) {
    var r = e.prefix || "", i = e.namespaceURI;
    if (!r && !i) return !1;
    if ("xml" === r && "http://www.w3.org/XML/1998/namespace" === i || "http://www.w3.org/2000/xmlns/" == i) return !1;
    for (var o = n.length; o--; ) {
        var a = n[o];
        if (a.prefix == r) return a.namespace != i;
    }
    return !0;
}

function B(e, t, n, r, i) {
    if (r) {
        if (!(e = r(e))) return;
        if ("string" == typeof e) return void t.push(e);
    }
    switch (e.nodeType) {
      case k:
        i || (i = []);
        var o = (i.length, e.attributes), a = o.length, u = e.firstChild, s = e.tagName;
        n = L === e.namespaceURI || n, t.push("<", s);
        for (var l = 0; a > l; l++) "xmlns" == (c = o.item(l)).prefix ? i.push({
            prefix: c.localName,
            namespace: c.value
        }) : "xmlns" == c.nodeName && i.push({
            prefix: "",
            namespace: c.value
        });
        for (l = 0; a > l; l++) {
            var c;
            if (M(c = o.item(l), 0, i)) {
                var h = c.prefix || "", p = c.namespaceURI, f = h ? " xmlns:" + h : " xmlns";
                t.push(f, '="', p, '"'), i.push({
                    prefix: h,
                    namespace: p
                });
            }
            B(c, t, n, r, i);
        }
        if (M(e, 0, i) && (h = e.prefix || "", p = e.namespaceURI, f = h ? " xmlns:" + h : " xmlns", 
        t.push(f, '="', p, '"'), i.push({
            prefix: h,
            namespace: p
        })), u || n && !/^(?:meta|link|img|br|hr|input)$/i.test(s)) {
            if (t.push(">"), n && /^script$/i.test(s)) for (;u; ) u.data ? t.push(u.data) : B(u, t, n, r, i), 
            u = u.nextSibling; else for (;u; ) B(u, t, n, r, i), u = u.nextSibling;
            t.push("</", s, ">");
        } else t.push("/>");
        return;

      case G:
      case W:
        for (u = e.firstChild; u; ) B(u, t, n, r, i), u = u.nextSibling;
        return;

      case j:
        return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, d), '"');

      case F:
        return t.push(e.data.replace(/[<&]/g, d));

      case Y:
        return t.push("<![CDATA[", e.data, "]]>");

      case X:
        return t.push("\x3c!--", e.data, "--\x3e");

      case H:
        var m = e.publicId, N = e.systemId;
        if (t.push("<!DOCTYPE ", e.name), m) t.push(' PUBLIC "', m), N && "." != N && t.push('" "', N), 
        t.push('">'); else if (N && "." != N) t.push(' SYSTEM "', N, '">'); else {
            var v = e.internalSubset;
            v && t.push(" [", v, "]"), t.push(">");
        }
        return;

      case q:
        return t.push("<?", e.target, " ", e.data, "?>");

      case z:
        return t.push("&", e.nodeName, ";");

      default:
        t.push("??", e.nodeName);
    }
}

function P(e, t, n) {
    e[t] = n;
}

var L = "http://www.w3.org/1999/xhtml", V = {}, k = V.ELEMENT_NODE = 1, j = V.ATTRIBUTE_NODE = 2, F = V.TEXT_NODE = 3, Y = V.CDATA_SECTION_NODE = 4, z = V.ENTITY_REFERENCE_NODE = 5, $ = V.ENTITY_NODE = 6, q = V.PROCESSING_INSTRUCTION_NODE = 7, X = V.COMMENT_NODE = 8, G = V.DOCUMENT_NODE = 9, H = V.DOCUMENT_TYPE_NODE = 10, W = V.DOCUMENT_FRAGMENT_NODE = 11, Z = V.NOTATION_NODE = 12, Q = {}, J = {}, K = (Q.INDEX_SIZE_ERR = (J[1] = "Index size error", 
1), Q.DOMSTRING_SIZE_ERR = (J[2] = "DOMString size error", 2), Q.HIERARCHY_REQUEST_ERR = (J[3] = "Hierarchy request error", 
3)), ee = (Q.WRONG_DOCUMENT_ERR = (J[4] = "Wrong document", 4), Q.INVALID_CHARACTER_ERR = (J[5] = "Invalid character", 
5), Q.NO_DATA_ALLOWED_ERR = (J[6] = "No data allowed", 6), Q.NO_MODIFICATION_ALLOWED_ERR = (J[7] = "No modification allowed", 
7), Q.NOT_FOUND_ERR = (J[8] = "Not found", 8)), te = (Q.NOT_SUPPORTED_ERR = (J[9] = "Not supported", 
9), Q.INUSE_ATTRIBUTE_ERR = (J[10] = "Attribute in use", 10));

Q.INVALID_STATE_ERR = (J[11] = "Invalid state", 11), Q.SYNTAX_ERR = (J[12] = "Syntax error", 
12), Q.INVALID_MODIFICATION_ERR = (J[13] = "Invalid modification", 13), Q.NAMESPACE_ERR = (J[14] = "Invalid namespace", 
14), Q.INVALID_ACCESS_ERR = (J[15] = "Invalid access", 15);

r.prototype = Error.prototype, t(Q, r), i.prototype = {
    length: 0,
    item: function(e) {
        return this[e] || null;
    },
    toString: function(e, t) {
        for (var n = [], r = 0; r < this.length; r++) B(this[r], n, e, t);
        return n.join("");
    }
}, o.prototype.item = function(e) {
    return a(this), this[e];
}, n(o, i), u.prototype = {
    length: 0,
    item: i.prototype.item,
    getNamedItem: function(e) {
        for (var t = this.length; t--; ) {
            var n = this[t];
            if (n.nodeName == e) return n;
        }
    },
    setNamedItem: function(e) {
        var t = e.ownerElement;
        if (t && t != this._ownerElement) throw new r(te);
        var n = this.getNamedItem(e.nodeName);
        return l(this._ownerElement, this, e, n), n;
    },
    setNamedItemNS: function(e) {
        var t, n = e.ownerElement;
        if (n && n != this._ownerElement) throw new r(te);
        return t = this.getNamedItemNS(e.namespaceURI, e.localName), l(this._ownerElement, this, e, t), 
        t;
    },
    removeNamedItem: function(e) {
        var t = this.getNamedItem(e);
        return c(this._ownerElement, this, t), t;
    },
    removeNamedItemNS: function(e, t) {
        var n = this.getNamedItemNS(e, t);
        return c(this._ownerElement, this, n), n;
    },
    getNamedItemNS: function(e, t) {
        for (var n = this.length; n--; ) {
            var r = this[n];
            if (r.localName == t && r.namespaceURI == e) return r;
        }
        return null;
    }
}, h.prototype = {
    hasFeature: function(e, t) {
        var n = this._features[e.toLowerCase()];
        return !(!n || t && !(t in n));
    },
    createDocument: function(e, t, n) {
        var r = new m();
        if (r.implementation = this, r.childNodes = new i(), r.doctype = n, n && r.appendChild(n), 
        t) {
            var o = r.createElementNS(e, t);
            r.appendChild(o);
        }
        return r;
    },
    createDocumentType: function(e, t, n) {
        var r = new S();
        return r.name = e, r.nodeName = e, r.publicId = t, r.systemId = n, r;
    }
}, p.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function(e, t) {
        return w(this, e, t);
    },
    replaceChild: function(e, t) {
        this.insertBefore(e, t), t && this.removeChild(t);
    },
    removeChild: function(e) {
        return g(this, e);
    },
    appendChild: function(e) {
        return this.insertBefore(e, null);
    },
    hasChildNodes: function() {
        return null != this.firstChild;
    },
    cloneNode: function(t) {
        return function t(n, r, o) {
            var a = new r.constructor();
            for (var s in r) {
                var l = r[s];
                "object" != (0, e.default)(l) && l != a[s] && (a[s] = l);
            }
            switch (r.childNodes && (a.childNodes = new i()), a.ownerDocument = n, a.nodeType) {
              case k:
                var c = r.attributes, h = a.attributes = new u(), p = c.length;
                h._ownerElement = a;
                for (var d = 0; p > d; d++) a.setAttributeNode(t(n, c.item(d), !0));
                break;

              case j:
                o = !0;
            }
            if (o) for (var f = r.firstChild; f; ) a.appendChild(t(n, f, o)), f = f.nextSibling;
            return a;
        }(this.ownerDocument || this, this, t);
    },
    normalize: function() {
        for (var e = this.firstChild; e; ) {
            var t = e.nextSibling;
            t && t.nodeType == F && e.nodeType == F ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), 
            e = t);
        }
    },
    isSupported: function(e, t) {
        return this.ownerDocument.implementation.hasFeature(e, t);
    },
    hasAttributes: function() {
        return this.attributes.length > 0;
    },
    lookupPrefix: function(e) {
        for (var t = this; t; ) {
            var n = t._nsMap;
            if (n) for (var r in n) if (n[r] == e) return r;
            t = t.nodeType == j ? t.ownerDocument : t.parentNode;
        }
        return null;
    },
    lookupNamespaceURI: function(e) {
        for (var t = this; t; ) {
            var n = t._nsMap;
            if (n && e in n) return n[e];
            t = t.nodeType == j ? t.ownerDocument : t.parentNode;
        }
        return null;
    },
    isDefaultNamespace: function(e) {
        return null == this.lookupPrefix(e);
    }
}, t(V, p), t(V, p.prototype), m.prototype = {
    nodeName: "#document",
    nodeType: G,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function(e, t) {
        if (e.nodeType == W) {
            for (var n = e.firstChild; n; ) {
                var r = n.nextSibling;
                this.insertBefore(n, t), n = r;
            }
            return e;
        }
        return null == this.documentElement && e.nodeType == k && (this.documentElement = e), 
        w(this, e, t), e.ownerDocument = this, e;
    },
    removeChild: function(e) {
        return this.documentElement == e && (this.documentElement = null), g(this, e);
    },
    importNode: function(e, t) {
        return function e(t, n, r) {
            var i;
            switch (n.nodeType) {
              case k:
                (i = n.cloneNode(!1)).ownerDocument = t;

              case W:
                break;

              case j:
                r = !0;
            }
            if (i || (i = n.cloneNode(!1)), i.ownerDocument = t, i.parentNode = null, r) for (var o = n.firstChild; o; ) i.appendChild(e(t, o, r)), 
            o = o.nextSibling;
            return i;
        }(this, e, t);
    },
    getElementById: function(e) {
        var t = null;
        return f(this.documentElement, function(n) {
            return n.nodeType == k && n.getAttribute("id") == e ? (t = n, !0) : void 0;
        }), t;
    },
    createElement: function(e) {
        var t = new E();
        return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new i(), 
        (t.attributes = new u())._ownerElement = t, t;
    },
    createDocumentFragment: function() {
        var e = new R();
        return e.ownerDocument = this, e.childNodes = new i(), e;
    },
    createTextNode: function(e) {
        var t = new T();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createComment: function(e) {
        var t = new _();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createCDATASection: function(e) {
        var t = new D();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createProcessingInstruction: function(e, t) {
        var n = new A();
        return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, 
        n;
    },
    createAttribute: function(e) {
        var t = new b();
        return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, 
        t;
    },
    createEntityReference: function(e) {
        var t = new x();
        return t.ownerDocument = this, t.nodeName = e, t;
    },
    createElementNS: function(e, t) {
        var n = new E(), r = t.split(":"), o = n.attributes = new u();
        return n.childNodes = new i(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, 
        n.namespaceURI = e, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, 
        o._ownerElement = n, n;
    },
    createAttributeNS: function(e, t) {
        var n = new b(), r = t.split(":");
        return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 
        2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n;
    }
}, n(m, p), E.prototype = {
    nodeType: k,
    hasAttribute: function(e) {
        return null != this.getAttributeNode(e);
    },
    getAttribute: function(e) {
        var t = this.getAttributeNode(e);
        return t && t.value || "";
    },
    getAttributeNode: function(e) {
        return this.attributes.getNamedItem(e);
    },
    setAttribute: function(e, t) {
        var n = this.ownerDocument.createAttribute(e);
        n.value = n.nodeValue = "" + t, this.setAttributeNode(n);
    },
    removeAttribute: function(e) {
        var t = this.getAttributeNode(e);
        t && this.removeAttributeNode(t);
    },
    appendChild: function(e) {
        return e.nodeType === W ? this.insertBefore(e, null) : function(e, t) {
            var n = t.parentNode;
            if (n) {
                var r = e.lastChild;
                n.removeChild(t), r = e.lastChild;
            }
            return r = e.lastChild, t.parentNode = e, t.previousSibling = r, t.nextSibling = null, 
            r ? r.nextSibling = t : e.firstChild = t, e.lastChild = t, v(e.ownerDocument, e, t), 
            t;
        }(this, e);
    },
    setAttributeNode: function(e) {
        return this.attributes.setNamedItem(e);
    },
    setAttributeNodeNS: function(e) {
        return this.attributes.setNamedItemNS(e);
    },
    removeAttributeNode: function(e) {
        return this.attributes.removeNamedItem(e.nodeName);
    },
    removeAttributeNS: function(e, t) {
        var n = this.getAttributeNodeNS(e, t);
        n && this.removeAttributeNode(n);
    },
    hasAttributeNS: function(e, t) {
        return null != this.getAttributeNodeNS(e, t);
    },
    getAttributeNS: function(e, t) {
        var n = this.getAttributeNodeNS(e, t);
        return n && n.value || "";
    },
    setAttributeNS: function(e, t, n) {
        var r = this.ownerDocument.createAttributeNS(e, t);
        r.value = r.nodeValue = "" + n, this.setAttributeNode(r);
    },
    getAttributeNodeNS: function(e, t) {
        return this.attributes.getNamedItemNS(e, t);
    },
    getElementsByTagName: function(e) {
        return new o(this, function(t) {
            var n = [];
            return f(t, function(r) {
                r === t || r.nodeType != k || "*" !== e && r.tagName != e || n.push(r);
            }), n;
        });
    },
    getElementsByTagNameNS: function(e, t) {
        return new o(this, function(n) {
            var r = [];
            return f(n, function(i) {
                i === n || i.nodeType !== k || "*" !== e && i.namespaceURI !== e || "*" !== t && i.localName != t || r.push(i);
            }), r;
        });
    }
}, m.prototype.getElementsByTagName = E.prototype.getElementsByTagName, m.prototype.getElementsByTagNameNS = E.prototype.getElementsByTagNameNS, 
n(E, p), b.prototype.nodeType = j, n(b, p), y.prototype = {
    data: "",
    substringData: function(e, t) {
        return this.data.substring(e, e + t);
    },
    appendData: function(e) {
        e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
    },
    insertData: function(e, t) {
        this.replaceData(e, 0, t);
    },
    appendChild: function() {
        throw new Error(J[K]);
    },
    deleteData: function(e, t) {
        this.replaceData(e, t, "");
    },
    replaceData: function(e, t, n) {
        n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, 
        this.length = n.length;
    }
}, n(y, p), T.prototype = {
    nodeName: "#text",
    nodeType: F,
    splitText: function(e) {
        var t = this.data, n = t.substring(e);
        t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
        var r = this.ownerDocument.createTextNode(n);
        return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r;
    }
}, n(T, y), _.prototype = {
    nodeName: "#comment",
    nodeType: X
}, n(_, y), D.prototype = {
    nodeName: "#cdata-section",
    nodeType: Y
}, n(D, y), S.prototype.nodeType = H, n(S, p), C.prototype.nodeType = Z, n(C, p), 
I.prototype.nodeType = $, n(I, p), x.prototype.nodeType = z, n(x, p), R.prototype.nodeName = "#document-fragment", 
R.prototype.nodeType = W, n(R, p), A.prototype.nodeType = q, n(A, p), O.prototype.serializeToString = function(e, t, n) {
    return U.call(e, t, n);
}, p.prototype.toString = U;

try {
    Object.defineProperty && (Object.defineProperty(o.prototype, "length", {
        get: function() {
            return a(this), this.$$length;
        }
    }), Object.defineProperty(p.prototype, "textContent", {
        get: function() {
            return function e(t) {
                switch (t.nodeType) {
                  case k:
                  case W:
                    var n = [];
                    for (t = t.firstChild; t; ) 7 !== t.nodeType && 8 !== t.nodeType && n.push(e(t)), 
                    t = t.nextSibling;
                    return n.join("");

                  default:
                    return t.nodeValue;
                }
            }(this);
        },
        set: function(e) {
            switch (this.nodeType) {
              case k:
              case W:
                for (;this.firstChild; ) this.removeChild(this.firstChild);
                (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                break;

              default:
                this.data = e, this.value = e, this.nodeValue = e;
            }
        }
    }), P = function(e, t, n) {
        e["$$" + t] = n;
    });
} catch (e) {}

exports.DOMImplementation = h, exports.XMLSerializer = O;