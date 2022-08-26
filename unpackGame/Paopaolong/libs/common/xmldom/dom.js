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

var r = {}, i = r.ELEMENT_NODE = 1, o = r.ATTRIBUTE_NODE = 2, a = r.TEXT_NODE = 3, u = r.CDATA_SECTION_NODE = 4, s = r.ENTITY_REFERENCE_NODE = 5, l = r.ENTITY_NODE = 6, c = r.PROCESSING_INSTRUCTION_NODE = 7, h = r.COMMENT_NODE = 8, p = r.DOCUMENT_NODE = 9, f = r.DOCUMENT_TYPE_NODE = 10, d = r.DOCUMENT_FRAGMENT_NODE = 11, m = r.NOTATION_NODE = 12, N = {}, v = {}, g = (N.INDEX_SIZE_ERR = (v[1] = "Index size error", 
1), N.DOMSTRING_SIZE_ERR = (v[2] = "DOMString size error", 2), N.HIERARCHY_REQUEST_ERR = (v[3] = "Hierarchy request error", 
3)), w = (N.WRONG_DOCUMENT_ERR = (v[4] = "Wrong document", 4), N.INVALID_CHARACTER_ERR = (v[5] = "Invalid character", 
5), N.NO_DATA_ALLOWED_ERR = (v[6] = "No data allowed", 6), N.NO_MODIFICATION_ALLOWED_ERR = (v[7] = "No modification allowed", 
7), N.NOT_FOUND_ERR = (v[8] = "Not found", 8)), E = (N.NOT_SUPPORTED_ERR = (v[9] = "Not supported", 
9), N.INUSE_ATTRIBUTE_ERR = (v[10] = "Attribute in use", 10));

N.INVALID_STATE_ERR = (v[11] = "Invalid state", 11), N.SYNTAX_ERR = (v[12] = "Syntax error", 
12), N.INVALID_MODIFICATION_ERR = (v[13] = "Invalid modification", 13), N.NAMESPACE_ERR = (v[14] = "Invalid namespace", 
14), N.INVALID_ACCESS_ERR = (v[15] = "Invalid access", 15);

function y(e, t) {
    if (t instanceof Error) var n = t; else n = this, Error.call(this, v[e]), this.message = v[e], 
    Error.captureStackTrace && Error.captureStackTrace(this, y);
    return n.code = e, t && (this.message = this.message + ": " + t), n;
}

function b() {}

function T(e, t) {
    this._node = e, this._refresh = t, S(this);
}

function S(e) {
    var t = e._node._inc || e._node.ownerDocument._inc;
    if (e._inc != t) {
        var n = e._refresh(e._node);
        for (var r in ee(e, "length", n.length), n) e[r] = n[r];
        e._inc = t;
    }
}

function D() {}

function _(e, t) {
    for (var n = e.length; n--; ) if (e[n] === t) return n;
}

function C(e, t, n, r) {
    if (r ? t[_(t, r)] = n : t[t.length++] = n, e) {
        n.ownerElement = e;
        var i = e.ownerDocument;
        i && (r && M(i, e, r), function(e, t, n) {
            e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
        }(i, e, n));
    }
}

function I(e, t, n) {
    var r = _(t, n);
    if (!(r >= 0)) throw y(w, new Error(e.tagName + "@" + n));
    for (var i = t.length - 1; r < i; ) t[r] = t[++r];
    if (t.length = i, e) {
        var o = e.ownerDocument;
        o && (M(o, e, n), n.ownerElement = null);
    }
}

function x(e) {
    if (this._features = {}, e) for (var t in e) this._features = e[t];
}

function A() {}

function R(e) {
    return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
}

function O(e, t) {
    if (t(e)) return !0;
    if (e = e.firstChild) do {
        if (O(e, t)) return !0;
    } while (e = e.nextSibling);
}

function U() {}

function M(e, t, n, r) {
    e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""];
}

function B(e, t, n) {
    if (e && e._inc) {
        e._inc++;
        var r = t.childNodes;
        if (n) r[r.length++] = n; else {
            for (var i = t.firstChild, o = 0; i; ) r[o++] = i, i = i.nextSibling;
            r.length = o;
        }
    }
}

function P(e, t) {
    var n = t.previousSibling, r = t.nextSibling;
    return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, 
    B(e.ownerDocument, e), t;
}

function L(e, t, n) {
    var r = t.parentNode;
    if (r && r.removeChild(t), t.nodeType === d) {
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
    return B(e.ownerDocument || e, e), t.nodeType == d && (t.firstChild = t.lastChild = null), 
    t;
}

function V() {
    this._nsMap = {};
}

function k() {}

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

function Q(e, t) {
    var n = [], r = 9 == this.nodeType && this.documentElement || this, i = r.prefix, o = r.namespaceURI;
    if (o && null == i && null == (i = r.lookupPrefix(o))) var a = [ {
        namespace: o,
        prefix: null
    } ];
    return K(this, n, e, t, a), n.join("");
}

function J(e, t, n) {
    var r = e.prefix || "", i = e.namespaceURI;
    if (!r && !i) return !1;
    if ("xml" === r && "http://www.w3.org/XML/1998/namespace" === i || "http://www.w3.org/2000/xmlns/" == i) return !1;
    for (var o = n.length; o--; ) {
        var a = n[o];
        if (a.prefix == r) return a.namespace != i;
    }
    return !0;
}

function K(e, t, n, r, l) {
    if (r) {
        if (!(e = r(e))) return;
        if ("string" == typeof e) return void t.push(e);
    }
    switch (e.nodeType) {
      case i:
        l || (l = []);
        l.length;
        var m = e.attributes, N = m.length, v = e.firstChild, g = e.tagName;
        n = "http://www.w3.org/1999/xhtml" === e.namespaceURI || n, t.push("<", g);
        for (var w = 0; w < N; w++) {
            "xmlns" == (E = m.item(w)).prefix ? l.push({
                prefix: E.localName,
                namespace: E.value
            }) : "xmlns" == E.nodeName && l.push({
                prefix: "",
                namespace: E.value
            });
        }
        for (w = 0; w < N; w++) {
            var E;
            if (J(E = m.item(w), 0, l)) {
                var y = E.prefix || "", b = E.namespaceURI, T = y ? " xmlns:" + y : " xmlns";
                t.push(T, '="', b, '"'), l.push({
                    prefix: y,
                    namespace: b
                });
            }
            K(E, t, n, r, l);
        }
        if (J(e, 0, l)) {
            y = e.prefix || "", b = e.namespaceURI, T = y ? " xmlns:" + y : " xmlns";
            t.push(T, '="', b, '"'), l.push({
                prefix: y,
                namespace: b
            });
        }
        if (v || n && !/^(?:meta|link|img|br|hr|input)$/i.test(g)) {
            if (t.push(">"), n && /^script$/i.test(g)) for (;v; ) v.data ? t.push(v.data) : K(v, t, n, r, l), 
            v = v.nextSibling; else for (;v; ) K(v, t, n, r, l), v = v.nextSibling;
            t.push("</", g, ">");
        } else t.push("/>");
        return;

      case p:
      case d:
        for (v = e.firstChild; v; ) K(v, t, n, r, l), v = v.nextSibling;
        return;

      case o:
        return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, R), '"');

      case a:
        return t.push(e.data.replace(/[<&]/g, R));

      case u:
        return t.push("<![CDATA[", e.data, "]]>");

      case h:
        return t.push("\x3c!--", e.data, "--\x3e");

      case f:
        var S = e.publicId, D = e.systemId;
        if (t.push("<!DOCTYPE ", e.name), S) t.push(' PUBLIC "', S), D && "." != D && t.push('" "', D), 
        t.push('">'); else if (D && "." != D) t.push(' SYSTEM "', D, '">'); else {
            var _ = e.internalSubset;
            _ && t.push(" [", _, "]"), t.push(">");
        }
        return;

      case c:
        return t.push("<?", e.target, " ", e.data, "?>");

      case s:
        return t.push("&", e.nodeName, ";");

      default:
        t.push("??", e.nodeName);
    }
}

function ee(e, t, n) {
    e[t] = n;
}

y.prototype = Error.prototype, t(N, y), b.prototype = {
    length: 0,
    item: function(e) {
        return this[e] || null;
    },
    toString: function(e, t) {
        for (var n = [], r = 0; r < this.length; r++) K(this[r], n, e, t);
        return n.join("");
    }
}, T.prototype.item = function(e) {
    return S(this), this[e];
}, n(T, b), D.prototype = {
    length: 0,
    item: b.prototype.item,
    getNamedItem: function(e) {
        for (var t = this.length; t--; ) {
            var n = this[t];
            if (n.nodeName == e) return n;
        }
    },
    setNamedItem: function(e) {
        var t = e.ownerElement;
        if (t && t != this._ownerElement) throw new y(E);
        var n = this.getNamedItem(e.nodeName);
        return C(this._ownerElement, this, e, n), n;
    },
    setNamedItemNS: function(e) {
        var t, n = e.ownerElement;
        if (n && n != this._ownerElement) throw new y(E);
        return t = this.getNamedItemNS(e.namespaceURI, e.localName), C(this._ownerElement, this, e, t), 
        t;
    },
    removeNamedItem: function(e) {
        var t = this.getNamedItem(e);
        return I(this._ownerElement, this, t), t;
    },
    removeNamedItemNS: function(e, t) {
        var n = this.getNamedItemNS(e, t);
        return I(this._ownerElement, this, n), n;
    },
    getNamedItemNS: function(e, t) {
        for (var n = this.length; n--; ) {
            var r = this[n];
            if (r.localName == t && r.namespaceURI == e) return r;
        }
        return null;
    }
}, x.prototype = {
    hasFeature: function(e, t) {
        var n = this._features[e.toLowerCase()];
        return !(!n || t && !(t in n));
    },
    createDocument: function(e, t, n) {
        var r = new U();
        if (r.implementation = this, r.childNodes = new b(), r.doctype = n, n && r.appendChild(n), 
        t) {
            var i = r.createElementNS(e, t);
            r.appendChild(i);
        }
        return r;
    },
    createDocumentType: function(e, t, n) {
        var r = new $();
        return r.name = e, r.nodeName = e, r.publicId = t, r.systemId = n, r;
    }
}, A.prototype = {
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
        return L(this, e, t);
    },
    replaceChild: function(e, t) {
        this.insertBefore(e, t), t && this.removeChild(t);
    },
    removeChild: function(e) {
        return P(this, e);
    },
    appendChild: function(e) {
        return this.insertBefore(e, null);
    },
    hasChildNodes: function() {
        return null != this.firstChild;
    },
    cloneNode: function(t) {
        return function t(n, r, a) {
            var u = new r.constructor();
            for (var s in r) {
                var l = r[s];
                "object" != e(l) && l != u[s] && (u[s] = l);
            }
            r.childNodes && (u.childNodes = new b());
            switch (u.ownerDocument = n, u.nodeType) {
              case i:
                var c = r.attributes, h = u.attributes = new D(), p = c.length;
                h._ownerElement = u;
                for (var f = 0; f < p; f++) u.setAttributeNode(t(n, c.item(f), !0));
                break;

              case o:
                a = !0;
            }
            if (a) for (var d = r.firstChild; d; ) u.appendChild(t(n, d, a)), d = d.nextSibling;
            return u;
        }(this.ownerDocument || this, this, t);
    },
    normalize: function() {
        for (var e = this.firstChild; e; ) {
            var t = e.nextSibling;
            t && t.nodeType == a && e.nodeType == a ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), 
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
            t = t.nodeType == o ? t.ownerDocument : t.parentNode;
        }
        return null;
    },
    lookupNamespaceURI: function(e) {
        for (var t = this; t; ) {
            var n = t._nsMap;
            if (n && e in n) return n[e];
            t = t.nodeType == o ? t.ownerDocument : t.parentNode;
        }
        return null;
    },
    isDefaultNamespace: function(e) {
        return null == this.lookupPrefix(e);
    }
}, t(r, A), t(r, A.prototype), U.prototype = {
    nodeName: "#document",
    nodeType: p,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function(e, t) {
        if (e.nodeType == d) {
            for (var n = e.firstChild; n; ) {
                var r = n.nextSibling;
                this.insertBefore(n, t), n = r;
            }
            return e;
        }
        return null == this.documentElement && e.nodeType == i && (this.documentElement = e), 
        L(this, e, t), e.ownerDocument = this, e;
    },
    removeChild: function(e) {
        return this.documentElement == e && (this.documentElement = null), P(this, e);
    },
    importNode: function(e, t) {
        return function e(t, n, r) {
            var a;
            switch (n.nodeType) {
              case i:
                (a = n.cloneNode(!1)).ownerDocument = t;

              case d:
                break;

              case o:
                r = !0;
            }
            a || (a = n.cloneNode(!1));
            if (a.ownerDocument = t, a.parentNode = null, r) for (var u = n.firstChild; u; ) a.appendChild(e(t, u, r)), 
            u = u.nextSibling;
            return a;
        }(this, e, t);
    },
    getElementById: function(e) {
        var t = null;
        return O(this.documentElement, function(n) {
            if (n.nodeType == i && n.getAttribute("id") == e) return t = n, !0;
        }), t;
    },
    createElement: function(e) {
        var t = new V();
        return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new b(), 
        (t.attributes = new D())._ownerElement = t, t;
    },
    createDocumentFragment: function() {
        var e = new W();
        return e.ownerDocument = this, e.childNodes = new b(), e;
    },
    createTextNode: function(e) {
        var t = new j();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createComment: function(e) {
        var t = new Y();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createCDATASection: function(e) {
        var t = new z();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createProcessingInstruction: function(e, t) {
        var n = new q();
        return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, 
        n;
    },
    createAttribute: function(e) {
        var t = new k();
        return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, 
        t;
    },
    createEntityReference: function(e) {
        var t = new H();
        return t.ownerDocument = this, t.nodeName = e, t;
    },
    createElementNS: function(e, t) {
        var n = new V(), r = t.split(":"), i = n.attributes = new D();
        return n.childNodes = new b(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, 
        n.namespaceURI = e, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, 
        i._ownerElement = n, n;
    },
    createAttributeNS: function(e, t) {
        var n = new k(), r = t.split(":");
        return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 
        2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n;
    }
}, n(U, A), V.prototype = {
    nodeType: i,
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
        return e.nodeType === d ? this.insertBefore(e, null) : function(e, t) {
            var n = t.parentNode;
            if (n) {
                var r = e.lastChild;
                n.removeChild(t);
                r = e.lastChild;
            }
            return r = e.lastChild, t.parentNode = e, t.previousSibling = r, t.nextSibling = null, 
            r ? r.nextSibling = t : e.firstChild = t, e.lastChild = t, B(e.ownerDocument, e, t), 
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
        return new T(this, function(t) {
            var n = [];
            return O(t, function(r) {
                r === t || r.nodeType != i || "*" !== e && r.tagName != e || n.push(r);
            }), n;
        });
    },
    getElementsByTagNameNS: function(e, t) {
        return new T(this, function(n) {
            var r = [];
            return O(n, function(o) {
                o === n || o.nodeType !== i || "*" !== e && o.namespaceURI !== e || "*" !== t && o.localName != t || r.push(o);
            }), r;
        });
    }
}, U.prototype.getElementsByTagName = V.prototype.getElementsByTagName, U.prototype.getElementsByTagNameNS = V.prototype.getElementsByTagNameNS, 
n(V, A), k.prototype.nodeType = o, n(k, A), F.prototype = {
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
        throw new Error(v[g]);
    },
    deleteData: function(e, t) {
        this.replaceData(e, t, "");
    },
    replaceData: function(e, t, n) {
        n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, 
        this.length = n.length;
    }
}, n(F, A), j.prototype = {
    nodeName: "#text",
    nodeType: a,
    splitText: function(e) {
        var t = this.data, n = t.substring(e);
        t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
        var r = this.ownerDocument.createTextNode(n);
        return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r;
    }
}, n(j, F), Y.prototype = {
    nodeName: "#comment",
    nodeType: h
}, n(Y, F), z.prototype = {
    nodeName: "#cdata-section",
    nodeType: u
}, n(z, F), $.prototype.nodeType = f, n($, A), X.prototype.nodeType = m, n(X, A), 
G.prototype.nodeType = l, n(G, A), H.prototype.nodeType = s, n(H, A), W.prototype.nodeName = "#document-fragment", 
W.prototype.nodeType = d, n(W, A), q.prototype.nodeType = c, n(q, A), Z.prototype.serializeToString = function(e, t, n) {
    return Q.call(e, t, n);
}, A.prototype.toString = Q;

try {
    if (Object.defineProperty) {
        Object.defineProperty(T.prototype, "length", {
            get: function() {
                return S(this), this.$$length;
            }
        }), Object.defineProperty(A.prototype, "textContent", {
            get: function() {
                return function e(t) {
                    switch (t.nodeType) {
                      case i:
                      case d:
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
                  case i:
                  case d:
                    for (;this.firstChild; ) this.removeChild(this.firstChild);
                    (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                    break;

                  default:
                    this.data = e, this.value = e, this.nodeValue = e;
                }
            }
        }), ee = function(e, t, n) {
            e["$$" + t] = n;
        };
    }
} catch (e) {}

exports.DOMImplementation = x, exports.XMLSerializer = Z;