function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(t);
}

function t(e, t) {
    for (var n in e) t[n] = e[n];
}

function n(e, t) {
    var n = e.prototype;
    if (!(n instanceof t)) {
        var r = function() {};
        for (var i in r.prototype = t.prototype, r = new r(), n) r[i] = n[i];
        e.prototype = n = r;
    }
    n.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e), 
    n.constructor = e);
}

var r = "http://www.w3.org/1999/xhtml", i = {}, o = i.ELEMENT_NODE = 1, a = i.ATTRIBUTE_NODE = 2, u = i.TEXT_NODE = 3, s = i.CDATA_SECTION_NODE = 4, l = i.ENTITY_REFERENCE_NODE = 5, c = i.ENTITY_NODE = 6, h = i.PROCESSING_INSTRUCTION_NODE = 7, p = i.COMMENT_NODE = 8, f = i.DOCUMENT_NODE = 9, d = i.DOCUMENT_TYPE_NODE = 10, m = i.DOCUMENT_FRAGMENT_NODE = 11, N = i.NOTATION_NODE = 12, v = {}, g = {}, w = (v.INDEX_SIZE_ERR = (g[1] = "Index size error", 
1), v.DOMSTRING_SIZE_ERR = (g[2] = "DOMString size error", 2), v.HIERARCHY_REQUEST_ERR = (g[3] = "Hierarchy request error", 
3)), E = (v.WRONG_DOCUMENT_ERR = (g[4] = "Wrong document", 4), v.INVALID_CHARACTER_ERR = (g[5] = "Invalid character", 
5), v.NO_DATA_ALLOWED_ERR = (g[6] = "No data allowed", 6), v.NO_MODIFICATION_ALLOWED_ERR = (g[7] = "No modification allowed", 
7), v.NOT_FOUND_ERR = (g[8] = "Not found", 8)), y = (v.NOT_SUPPORTED_ERR = (g[9] = "Not supported", 
9), v.INUSE_ATTRIBUTE_ERR = (g[10] = "Attribute in use", 10));

v.INVALID_STATE_ERR = (g[11] = "Invalid state", 11), v.SYNTAX_ERR = (g[12] = "Syntax error", 
12), v.INVALID_MODIFICATION_ERR = (g[13] = "Invalid modification", 13), v.NAMESPACE_ERR = (g[14] = "Invalid namespace", 
14), v.INVALID_ACCESS_ERR = (g[15] = "Invalid access", 15);

function b(e, t) {
    if (t instanceof Error) var n = t; else n = this, Error.call(this, g[e]), this.message = g[e], 
    Error.captureStackTrace && Error.captureStackTrace(this, b);
    return n.code = e, t && (this.message = this.message + ": " + t), n;
}

function T() {}

function S(e, t) {
    this._node = e, this._refresh = t, D(this);
}

function D(e) {
    var t = e._node._inc || e._node.ownerDocument._inc;
    if (e._inc != t) {
        var n = e._refresh(e._node);
        for (var r in te(e, "length", n.length), n) e[r] = n[r];
        e._inc = t;
    }
}

function _() {}

function C(e, t) {
    for (var n = e.length; n--; ) if (e[n] === t) return n;
}

function I(e, t, n, r) {
    if (r ? t[C(t, r)] = n : t[t.length++] = n, e) {
        n.ownerElement = e;
        var i = e.ownerDocument;
        i && (r && B(i, e, r), function(e, t, n) {
            e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
        }(i, e, n));
    }
}

function x(e, t, n) {
    var r = C(t, n);
    if (!(r >= 0)) throw b(E, new Error(e.tagName + "@" + n));
    for (var i = t.length - 1; r < i; ) t[r] = t[++r];
    if (t.length = i, e) {
        var o = e.ownerDocument;
        o && (B(o, e, n), n.ownerElement = null);
    }
}

function A(e) {
    if (this._features = {}, e) for (var t in e) this._features = e[t];
}

function R() {}

function O(e) {
    return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
}

function U(e, t) {
    if (t(e)) return !0;
    if (e = e.firstChild) do {
        if (U(e, t)) return !0;
    } while (e = e.nextSibling);
}

function M() {}

function B(e, t, n, r) {
    e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""];
}

function P(e, t, n) {
    if (e && e._inc) {
        e._inc++;
        var r = t.childNodes;
        if (n) r[r.length++] = n; else {
            for (var i = t.firstChild, o = 0; i; ) r[o++] = i, i = i.nextSibling;
            r.length = o;
        }
    }
}

function L(e, t) {
    var n = t.previousSibling, r = t.nextSibling;
    return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, 
    P(e.ownerDocument, e), t;
}

function V(e, t, n) {
    var r = t.parentNode;
    if (r && r.removeChild(t), t.nodeType === m) {
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
    return P(e.ownerDocument || e, e), t.nodeType == m && (t.firstChild = t.lastChild = null), 
    t;
}

function k() {
    this._nsMap = {};
}

function F() {}

function j() {}

function Y() {}

function z() {}

function $() {}

function X() {}

function G() {}

function H() {}

function W() {}

function q() {}

function Z() {}

function Q() {}

function J(e, t) {
    var n = [], r = 9 == this.nodeType && this.documentElement || this, i = r.prefix, o = r.namespaceURI;
    if (o && null == i && null == (i = r.lookupPrefix(o))) var a = [ {
        namespace: o,
        prefix: null
    } ];
    return ee(this, n, e, t, a), n.join("");
}

function K(e, t, n) {
    var r = e.prefix || "", i = e.namespaceURI;
    if (!r && !i) return !1;
    if ("xml" === r && "http://www.w3.org/XML/1998/namespace" === i || "http://www.w3.org/2000/xmlns/" == i) return !1;
    for (var o = n.length; o--; ) {
        var a = n[o];
        if (a.prefix == r) return a.namespace != i;
    }
    return !0;
}

function ee(e, t, n, i, c) {
    if (i) {
        if (!(e = i(e))) return;
        if ("string" == typeof e) return void t.push(e);
    }
    switch (e.nodeType) {
      case o:
        c || (c = []);
        c.length;
        var N = e.attributes, v = N.length, g = e.firstChild, w = e.tagName;
        n = r === e.namespaceURI || n, t.push("<", w);
        for (var E = 0; E < v; E++) {
            "xmlns" == (y = N.item(E)).prefix ? c.push({
                prefix: y.localName,
                namespace: y.value
            }) : "xmlns" == y.nodeName && c.push({
                prefix: "",
                namespace: y.value
            });
        }
        for (E = 0; E < v; E++) {
            var y;
            if (K(y = N.item(E), 0, c)) {
                var b = y.prefix || "", T = y.namespaceURI, S = b ? " xmlns:" + b : " xmlns";
                t.push(S, '="', T, '"'), c.push({
                    prefix: b,
                    namespace: T
                });
            }
            ee(y, t, n, i, c);
        }
        if (K(e, 0, c)) {
            b = e.prefix || "", T = e.namespaceURI, S = b ? " xmlns:" + b : " xmlns";
            t.push(S, '="', T, '"'), c.push({
                prefix: b,
                namespace: T
            });
        }
        if (g || n && !/^(?:meta|link|img|br|hr|input)$/i.test(w)) {
            if (t.push(">"), n && /^script$/i.test(w)) for (;g; ) g.data ? t.push(g.data) : ee(g, t, n, i, c), 
            g = g.nextSibling; else for (;g; ) ee(g, t, n, i, c), g = g.nextSibling;
            t.push("</", w, ">");
        } else t.push("/>");
        return;

      case f:
      case m:
        for (g = e.firstChild; g; ) ee(g, t, n, i, c), g = g.nextSibling;
        return;

      case a:
        return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, O), '"');

      case u:
        return t.push(e.data.replace(/[<&]/g, O));

      case s:
        return t.push("<![CDATA[", e.data, "]]>");

      case p:
        return t.push("\x3c!--", e.data, "--\x3e");

      case d:
        var D = e.publicId, _ = e.systemId;
        if (t.push("<!DOCTYPE ", e.name), D) t.push(' PUBLIC "', D), _ && "." != _ && t.push('" "', _), 
        t.push('">'); else if (_ && "." != _) t.push(' SYSTEM "', _, '">'); else {
            var C = e.internalSubset;
            C && t.push(" [", C, "]"), t.push(">");
        }
        return;

      case h:
        return t.push("<?", e.target, " ", e.data, "?>");

      case l:
        return t.push("&", e.nodeName, ";");

      default:
        t.push("??", e.nodeName);
    }
}

function te(e, t, n) {
    e[t] = n;
}

b.prototype = Error.prototype, t(v, b), T.prototype = {
    length: 0,
    item: function(e) {
        return this[e] || null;
    },
    toString: function(e, t) {
        for (var n = [], r = 0; r < this.length; r++) ee(this[r], n, e, t);
        return n.join("");
    }
}, S.prototype.item = function(e) {
    return D(this), this[e];
}, n(S, T), _.prototype = {
    length: 0,
    item: T.prototype.item,
    getNamedItem: function(e) {
        for (var t = this.length; t--; ) {
            var n = this[t];
            if (n.nodeName == e) return n;
        }
    },
    setNamedItem: function(e) {
        var t = e.ownerElement;
        if (t && t != this._ownerElement) throw new b(y);
        var n = this.getNamedItem(e.nodeName);
        return I(this._ownerElement, this, e, n), n;
    },
    setNamedItemNS: function(e) {
        var t, n = e.ownerElement;
        if (n && n != this._ownerElement) throw new b(y);
        return t = this.getNamedItemNS(e.namespaceURI, e.localName), I(this._ownerElement, this, e, t), 
        t;
    },
    removeNamedItem: function(e) {
        var t = this.getNamedItem(e);
        return x(this._ownerElement, this, t), t;
    },
    removeNamedItemNS: function(e, t) {
        var n = this.getNamedItemNS(e, t);
        return x(this._ownerElement, this, n), n;
    },
    getNamedItemNS: function(e, t) {
        for (var n = this.length; n--; ) {
            var r = this[n];
            if (r.localName == t && r.namespaceURI == e) return r;
        }
        return null;
    }
}, A.prototype = {
    hasFeature: function(e, t) {
        var n = this._features[e.toLowerCase()];
        return !(!n || t && !(t in n));
    },
    createDocument: function(e, t, n) {
        var r = new M();
        if (r.implementation = this, r.childNodes = new T(), r.doctype = n, n && r.appendChild(n), 
        t) {
            var i = r.createElementNS(e, t);
            r.appendChild(i);
        }
        return r;
    },
    createDocumentType: function(e, t, n) {
        var r = new X();
        return r.name = e, r.nodeName = e, r.publicId = t, r.systemId = n, r;
    }
}, R.prototype = {
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
        return V(this, e, t);
    },
    replaceChild: function(e, t) {
        this.insertBefore(e, t), t && this.removeChild(t);
    },
    removeChild: function(e) {
        return L(this, e);
    },
    appendChild: function(e) {
        return this.insertBefore(e, null);
    },
    hasChildNodes: function() {
        return null != this.firstChild;
    },
    cloneNode: function(t) {
        return function t(n, r, i) {
            var u = new r.constructor();
            for (var s in r) {
                var l = r[s];
                "object" != e(l) && l != u[s] && (u[s] = l);
            }
            r.childNodes && (u.childNodes = new T());
            u.ownerDocument = n;
            switch (u.nodeType) {
              case o:
                var c = r.attributes, h = u.attributes = new _(), p = c.length;
                h._ownerElement = u;
                for (var f = 0; f < p; f++) u.setAttributeNode(t(n, c.item(f), !0));
                break;

              case a:
                i = !0;
            }
            if (i) for (var d = r.firstChild; d; ) u.appendChild(t(n, d, i)), d = d.nextSibling;
            return u;
        }(this.ownerDocument || this, this, t);
    },
    normalize: function() {
        for (var e = this.firstChild; e; ) {
            var t = e.nextSibling;
            t && t.nodeType == u && e.nodeType == u ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), 
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
            t = t.nodeType == a ? t.ownerDocument : t.parentNode;
        }
        return null;
    },
    lookupNamespaceURI: function(e) {
        for (var t = this; t; ) {
            var n = t._nsMap;
            if (n && e in n) return n[e];
            t = t.nodeType == a ? t.ownerDocument : t.parentNode;
        }
        return null;
    },
    isDefaultNamespace: function(e) {
        return null == this.lookupPrefix(e);
    }
}, t(i, R), t(i, R.prototype), M.prototype = {
    nodeName: "#document",
    nodeType: f,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function(e, t) {
        if (e.nodeType == m) {
            for (var n = e.firstChild; n; ) {
                var r = n.nextSibling;
                this.insertBefore(n, t), n = r;
            }
            return e;
        }
        return null == this.documentElement && e.nodeType == o && (this.documentElement = e), 
        V(this, e, t), e.ownerDocument = this, e;
    },
    removeChild: function(e) {
        return this.documentElement == e && (this.documentElement = null), L(this, e);
    },
    importNode: function(e, t) {
        return function e(t, n, r) {
            var i;
            switch (n.nodeType) {
              case o:
                (i = n.cloneNode(!1)).ownerDocument = t;

              case m:
                break;

              case a:
                r = !0;
            }
            i || (i = n.cloneNode(!1));
            i.ownerDocument = t;
            i.parentNode = null;
            if (r) for (var u = n.firstChild; u; ) i.appendChild(e(t, u, r)), u = u.nextSibling;
            return i;
        }(this, e, t);
    },
    getElementById: function(e) {
        var t = null;
        return U(this.documentElement, function(n) {
            if (n.nodeType == o && n.getAttribute("id") == e) return t = n, !0;
        }), t;
    },
    createElement: function(e) {
        var t = new k();
        return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new T(), 
        (t.attributes = new _())._ownerElement = t, t;
    },
    createDocumentFragment: function() {
        var e = new q();
        return e.ownerDocument = this, e.childNodes = new T(), e;
    },
    createTextNode: function(e) {
        var t = new Y();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createComment: function(e) {
        var t = new z();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createCDATASection: function(e) {
        var t = new $();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createProcessingInstruction: function(e, t) {
        var n = new Z();
        return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, 
        n;
    },
    createAttribute: function(e) {
        var t = new F();
        return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, 
        t;
    },
    createEntityReference: function(e) {
        var t = new W();
        return t.ownerDocument = this, t.nodeName = e, t;
    },
    createElementNS: function(e, t) {
        var n = new k(), r = t.split(":"), i = n.attributes = new _();
        return n.childNodes = new T(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, 
        n.namespaceURI = e, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, 
        i._ownerElement = n, n;
    },
    createAttributeNS: function(e, t) {
        var n = new F(), r = t.split(":");
        return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 
        2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n;
    }
}, n(M, R), k.prototype = {
    nodeType: o,
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
        return e.nodeType === m ? this.insertBefore(e, null) : function(e, t) {
            var n = t.parentNode;
            if (n) {
                var r = e.lastChild;
                n.removeChild(t), r = e.lastChild;
            }
            return r = e.lastChild, t.parentNode = e, t.previousSibling = r, t.nextSibling = null, 
            r ? r.nextSibling = t : e.firstChild = t, e.lastChild = t, P(e.ownerDocument, e, t), 
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
        return new S(this, function(t) {
            var n = [];
            return U(t, function(r) {
                r === t || r.nodeType != o || "*" !== e && r.tagName != e || n.push(r);
            }), n;
        });
    },
    getElementsByTagNameNS: function(e, t) {
        return new S(this, function(n) {
            var r = [];
            return U(n, function(i) {
                i === n || i.nodeType !== o || "*" !== e && i.namespaceURI !== e || "*" !== t && i.localName != t || r.push(i);
            }), r;
        });
    }
}, M.prototype.getElementsByTagName = k.prototype.getElementsByTagName, M.prototype.getElementsByTagNameNS = k.prototype.getElementsByTagNameNS, 
n(k, R), F.prototype.nodeType = a, n(F, R), j.prototype = {
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
    appendChild: function(e) {
        throw new Error(g[w]);
    },
    deleteData: function(e, t) {
        this.replaceData(e, t, "");
    },
    replaceData: function(e, t, n) {
        n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, 
        this.length = n.length;
    }
}, n(j, R), Y.prototype = {
    nodeName: "#text",
    nodeType: u,
    splitText: function(e) {
        var t = this.data, n = t.substring(e);
        t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
        var r = this.ownerDocument.createTextNode(n);
        return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r;
    }
}, n(Y, j), z.prototype = {
    nodeName: "#comment",
    nodeType: p
}, n(z, j), $.prototype = {
    nodeName: "#cdata-section",
    nodeType: s
}, n($, j), X.prototype.nodeType = d, n(X, R), G.prototype.nodeType = N, n(G, R), 
H.prototype.nodeType = c, n(H, R), W.prototype.nodeType = l, n(W, R), q.prototype.nodeName = "#document-fragment", 
q.prototype.nodeType = m, n(q, R), Z.prototype.nodeType = h, n(Z, R), Q.prototype.serializeToString = function(e, t, n) {
    return J.call(e, t, n);
}, R.prototype.toString = J;

try {
    if (Object.defineProperty) {
        Object.defineProperty(S.prototype, "length", {
            get: function() {
                return D(this), this.$$length;
            }
        }), Object.defineProperty(R.prototype, "textContent", {
            get: function() {
                return function e(t) {
                    switch (t.nodeType) {
                      case o:
                      case m:
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
                  case o:
                  case m:
                    for (;this.firstChild; ) this.removeChild(this.firstChild);
                    (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                    break;

                  default:
                    this.data = e, this.value = e, this.nodeValue = e;
                }
            }
        }), te = function(e, t, n) {
            e["$$" + t] = n;
        };
    }
} catch (e) {}

exports.DOMImplementation = A, exports.XMLSerializer = Q;