!function() {
    function e(e, t) {
        for (var n in e) t[n] = e[n];
    }
    function t(t, n) {
        function r() {}
        var i = t.prototype;
        if (Object.create) {
            var o = Object.create(n.prototype);
            i.__proto__ = o;
        }
        i instanceof n || (r.prototype = n.prototype, e(i, r = new r()), t.prototype = i = r), 
        i.constructor != t && ("function" != typeof t && console.error("unknow Class:" + t), 
        i.constructor = t);
    }
    function n(e, t) {
        if (t instanceof Error) var r = t; else r = this, Error.call(this, Q[e]), this.message = Q[e], 
        Error.captureStackTrace && Error.captureStackTrace(this, n);
        return r.code = e, t && (this.message = this.message + ": " + t), r;
    }
    function r() {}
    function i(e, t) {
        this._node = e, this._refresh = t, o(this);
    }
    function o(t) {
        var n = t._node._inc || t._node.ownerDocument._inc;
        if (t._inc != n) {
            var r = t._refresh(t._node);
            B(t, "length", r.length), e(r, t), t._inc = n;
        }
    }
    function a() {}
    function u(e, t) {
        for (var n = e.length; n--; ) if (e[n] === t) return n;
    }
    function s(e, t, n, r) {
        if (r ? t[u(t, r)] = n : t[t.length++] = n, e) {
            n.ownerElement = e;
            var i = e.ownerDocument;
            i && (r && m(i, e, r), function(e, t, n) {
                e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
            }(i, e, n));
        }
    }
    function l(e, t, r) {
        var i = u(t, r);
        if (!(i >= 0)) throw n(K, new Error(e.tagName + "@" + r));
        for (var o = t.length - 1; o > i; ) t[i] = t[++i];
        if (t.length = o, e) {
            var a = e.ownerDocument;
            a && (m(a, e, r), r.ownerElement = null);
        }
    }
    function c(e) {
        if (this._features = {}, e) for (var t in e) this._features = e[t];
    }
    function h() {}
    function p(e) {
        return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
    }
    function d(e, t) {
        if (t(e)) return !0;
        if (e = e.firstChild) do {
            if (d(e, t)) return !0;
        } while (e = e.nextSibling);
    }
    function f() {}
    function m(e, t, n) {
        e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""];
    }
    function N(e, t, n) {
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
        N(e.ownerDocument, e), t;
    }
    function v(e, t, n) {
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
        return N(e.ownerDocument || e, e), t.nodeType == W && (t.firstChild = t.lastChild = null), 
        t;
    }
    function w() {
        this._nsMap = {};
    }
    function E() {}
    function y() {}
    function b() {}
    function T() {}
    function _() {}
    function D() {}
    function S() {}
    function C() {}
    function I() {}
    function x() {}
    function A() {}
    function R() {}
    function O(e, t) {
        var n = [], r = 9 == this.nodeType ? this.documentElement : this, i = r.prefix, o = r.namespaceURI;
        if (o && null == i && null == (i = r.lookupPrefix(o))) var a = [ {
            namespace: o,
            prefix: null
        } ];
        return M(this, n, e, t, a), n.join("");
    }
    function U(e, t, n) {
        var r = e.prefix || "", i = e.namespaceURI;
        if (!r && !i) return !1;
        if ("xml" === r && "http://www.w3.org/XML/1998/namespace" === i || "http://www.w3.org/2000/xmlns/" == i) return !1;
        for (var o = n.length; o--; ) {
            var a = n[o];
            if (a.prefix == r) return a.namespace != i;
        }
        return !0;
    }
    function M(e, t, n, r, i) {
        if (r) {
            if (!(e = r(e))) return;
            if ("string" == typeof e) return void t.push(e);
        }
        switch (e.nodeType) {
          case V:
            i || (i = []);
            var o = (i.length, e.attributes), a = o.length, u = e.firstChild, s = e.tagName;
            n = P === e.namespaceURI || n, t.push("<", s);
            for (var l = 0; a > l; l++) "xmlns" == (c = o.item(l)).prefix ? i.push({
                prefix: c.localName,
                namespace: c.value
            }) : "xmlns" == c.nodeName && i.push({
                prefix: "",
                namespace: c.value
            });
            for (l = 0; a > l; l++) {
                var c;
                if (U(c = o.item(l), 0, i)) {
                    var h = c.prefix || "", d = c.namespaceURI, f = h ? " xmlns:" + h : " xmlns";
                    t.push(f, '="', d, '"'), i.push({
                        prefix: h,
                        namespace: d
                    });
                }
                M(c, t, n, r, i);
            }
            if (U(e, 0, i) && (h = e.prefix || "", d = e.namespaceURI, f = h ? " xmlns:" + h : " xmlns", 
            t.push(f, '="', d, '"'), i.push({
                prefix: h,
                namespace: d
            })), u || n && !/^(?:meta|link|img|br|hr|input)$/i.test(s)) {
                if (t.push(">"), n && /^script$/i.test(s)) for (;u; ) u.data ? t.push(u.data) : M(u, t, n, r, i), 
                u = u.nextSibling; else for (;u; ) M(u, t, n, r, i), u = u.nextSibling;
                t.push("</", s, ">");
            } else t.push("/>");
            return;

          case G:
          case W:
            for (u = e.firstChild; u; ) M(u, t, n, r, i), u = u.nextSibling;
            return;

          case k:
            return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, p), '"');

          case j:
            return t.push(e.data.replace(/[<&]/g, p));

          case F:
            return t.push("<![CDATA[", e.data, "]]>");

          case X:
            return t.push("\x3c!--", e.data, "--\x3e");

          case H:
            var m = e.publicId, N = e.systemId;
            if (t.push("<!DOCTYPE ", e.name), m) t.push(' PUBLIC "', m), N && "." != N && t.push('" "', N), 
            t.push('">'); else if (N && "." != N) t.push(' SYSTEM "', N, '">'); else {
                var g = e.internalSubset;
                g && t.push(" [", g, "]"), t.push(">");
            }
            return;

          case $:
            return t.push("<?", e.target, " ", e.data, "?>");

          case Y:
            return t.push("&", e.nodeName, ";");

          default:
            t.push("??", e.nodeName);
        }
    }
    function B(e, t, n) {
        e[t] = n;
    }
    var P = "http://www.w3.org/1999/xhtml", L = {}, V = L.ELEMENT_NODE = 1, k = L.ATTRIBUTE_NODE = 2, j = L.TEXT_NODE = 3, F = L.CDATA_SECTION_NODE = 4, Y = L.ENTITY_REFERENCE_NODE = 5, z = L.ENTITY_NODE = 6, $ = L.PROCESSING_INSTRUCTION_NODE = 7, X = L.COMMENT_NODE = 8, G = L.DOCUMENT_NODE = 9, H = L.DOCUMENT_TYPE_NODE = 10, W = L.DOCUMENT_FRAGMENT_NODE = 11, q = L.NOTATION_NODE = 12, Z = {}, Q = {}, J = (Z.INDEX_SIZE_ERR = (Q[1] = "Index size error", 
    1), Z.DOMSTRING_SIZE_ERR = (Q[2] = "DOMString size error", 2), Z.HIERARCHY_REQUEST_ERR = (Q[3] = "Hierarchy request error", 
    3)), K = (Z.WRONG_DOCUMENT_ERR = (Q[4] = "Wrong document", 4), Z.INVALID_CHARACTER_ERR = (Q[5] = "Invalid character", 
    5), Z.NO_DATA_ALLOWED_ERR = (Q[6] = "No data allowed", 6), Z.NO_MODIFICATION_ALLOWED_ERR = (Q[7] = "No modification allowed", 
    7), Z.NOT_FOUND_ERR = (Q[8] = "Not found", 8)), ee = (Z.NOT_SUPPORTED_ERR = (Q[9] = "Not supported", 
    9), Z.INUSE_ATTRIBUTE_ERR = (Q[10] = "Attribute in use", 10));
    Z.INVALID_STATE_ERR = (Q[11] = "Invalid state", 11), Z.SYNTAX_ERR = (Q[12] = "Syntax error", 
    12), Z.INVALID_MODIFICATION_ERR = (Q[13] = "Invalid modification", 13), Z.NAMESPACE_ERR = (Q[14] = "Invalid namespace", 
    14), Z.INVALID_ACCESS_ERR = (Q[15] = "Invalid access", 15);
    n.prototype = Error.prototype, e(Z, n), r.prototype = {
        length: 0,
        item: function(e) {
            return this[e] || null;
        },
        toString: function(e, t) {
            for (var n = [], r = 0; r < this.length; r++) M(this[r], n, e, t);
            return n.join("");
        }
    }, i.prototype.item = function(e) {
        return o(this), this[e];
    }, t(i, r), a.prototype = {
        length: 0,
        item: r.prototype.item,
        getNamedItem: function(e) {
            for (var t = this.length; t--; ) {
                var n = this[t];
                if (n.nodeName == e) return n;
            }
        },
        setNamedItem: function(e) {
            var t = e.ownerElement;
            if (t && t != this._ownerElement) throw new n(ee);
            var r = this.getNamedItem(e.nodeName);
            return s(this._ownerElement, this, e, r), r;
        },
        setNamedItemNS: function(e) {
            var t, r = e.ownerElement;
            if (r && r != this._ownerElement) throw new n(ee);
            return t = this.getNamedItemNS(e.namespaceURI, e.localName), s(this._ownerElement, this, e, t), 
            t;
        },
        removeNamedItem: function(e) {
            var t = this.getNamedItem(e);
            return l(this._ownerElement, this, t), t;
        },
        removeNamedItemNS: function(e, t) {
            var n = this.getNamedItemNS(e, t);
            return l(this._ownerElement, this, n), n;
        },
        getNamedItemNS: function(e, t) {
            for (var n = this.length; n--; ) {
                var r = this[n];
                if (r.localName == t && r.namespaceURI == e) return r;
            }
            return null;
        }
    }, c.prototype = {
        hasFeature: function(e, t) {
            var n = this._features[e.toLowerCase()];
            return !(!n || t && !(t in n));
        },
        createDocument: function(e, t, n) {
            var i = new f();
            if (i.implementation = this, i.childNodes = new r(), i.doctype = n, n && i.appendChild(n), 
            t) {
                var o = i.createElementNS(e, t);
                i.appendChild(o);
            }
            return i;
        },
        createDocumentType: function(e, t, n) {
            var r = new D();
            return r.name = e, r.nodeName = e, r.publicId = t, r.systemId = n, r;
        }
    }, h.prototype = {
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
            return v(this, e, t);
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
        cloneNode: function(e) {
            return function e(t, n, i) {
                var o = new n.constructor();
                for (var u in n) {
                    var s = n[u];
                    "object" != typeof s && s != o[u] && (o[u] = s);
                }
                switch (n.childNodes && (o.childNodes = new r()), o.ownerDocument = t, o.nodeType) {
                  case V:
                    var l = n.attributes, c = o.attributes = new a(), h = l.length;
                    c._ownerElement = o;
                    for (var p = 0; h > p; p++) o.setAttributeNode(e(t, l.item(p), !0));
                    break;

                  case k:
                    i = !0;
                }
                if (i) for (var d = n.firstChild; d; ) o.appendChild(e(t, d, i)), d = d.nextSibling;
                return o;
            }(this.ownerDocument || this, this, e);
        },
        normalize: function() {
            for (var e = this.firstChild; e; ) {
                var t = e.nextSibling;
                t && t.nodeType == j && e.nodeType == j ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), 
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
                t = t.nodeType == k ? t.ownerDocument : t.parentNode;
            }
            return null;
        },
        lookupNamespaceURI: function(e) {
            for (var t = this; t; ) {
                var n = t._nsMap;
                if (n && e in n) return n[e];
                t = t.nodeType == k ? t.ownerDocument : t.parentNode;
            }
            return null;
        },
        isDefaultNamespace: function(e) {
            return null == this.lookupPrefix(e);
        }
    }, e(L, h), e(L, h.prototype), f.prototype = {
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
            return null == this.documentElement && e.nodeType == V && (this.documentElement = e), 
            v(this, e, t), e.ownerDocument = this, e;
        },
        removeChild: function(e) {
            return this.documentElement == e && (this.documentElement = null), g(this, e);
        },
        importNode: function(e, t) {
            return function e(t, n, r) {
                var i;
                switch (n.nodeType) {
                  case V:
                    (i = n.cloneNode(!1)).ownerDocument = t;

                  case W:
                    break;

                  case k:
                    r = !0;
                }
                if (i || (i = n.cloneNode(!1)), i.ownerDocument = t, i.parentNode = null, r) for (var o = n.firstChild; o; ) i.appendChild(e(t, o, r)), 
                o = o.nextSibling;
                return i;
            }(this, e, t);
        },
        getElementById: function(e) {
            var t = null;
            return d(this.documentElement, function(n) {
                return n.nodeType == V && n.getAttribute("id") == e ? (t = n, !0) : void 0;
            }), t;
        },
        createElement: function(e) {
            var t = new w();
            return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new r(), 
            (t.attributes = new a())._ownerElement = t, t;
        },
        createDocumentFragment: function() {
            var e = new x();
            return e.ownerDocument = this, e.childNodes = new r(), e;
        },
        createTextNode: function(e) {
            var t = new b();
            return t.ownerDocument = this, t.appendData(e), t;
        },
        createComment: function(e) {
            var t = new T();
            return t.ownerDocument = this, t.appendData(e), t;
        },
        createCDATASection: function(e) {
            var t = new _();
            return t.ownerDocument = this, t.appendData(e), t;
        },
        createProcessingInstruction: function(e, t) {
            var n = new A();
            return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, 
            n;
        },
        createAttribute: function(e) {
            var t = new E();
            return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, 
            t;
        },
        createEntityReference: function(e) {
            var t = new I();
            return t.ownerDocument = this, t.nodeName = e, t;
        },
        createElementNS: function(e, t) {
            var n = new w(), i = t.split(":"), o = n.attributes = new a();
            return n.childNodes = new r(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, 
            n.namespaceURI = e, 2 == i.length ? (n.prefix = i[0], n.localName = i[1]) : n.localName = t, 
            o._ownerElement = n, n;
        },
        createAttributeNS: function(e, t) {
            var n = new E(), r = t.split(":");
            return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 
            2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n;
        }
    }, t(f, h), w.prototype = {
        nodeType: V,
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
                r ? r.nextSibling = t : e.firstChild = t, e.lastChild = t, N(e.ownerDocument, e, t), 
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
            return new i(this, function(t) {
                var n = [];
                return d(t, function(r) {
                    r === t || r.nodeType != V || "*" !== e && r.tagName != e || n.push(r);
                }), n;
            });
        },
        getElementsByTagNameNS: function(e, t) {
            return new i(this, function(n) {
                var r = [];
                return d(n, function(i) {
                    i === n || i.nodeType !== V || "*" !== e && i.namespaceURI !== e || "*" !== t && i.localName != t || r.push(i);
                }), r;
            });
        }
    }, f.prototype.getElementsByTagName = w.prototype.getElementsByTagName, f.prototype.getElementsByTagNameNS = w.prototype.getElementsByTagNameNS, 
    t(w, h), E.prototype.nodeType = k, t(E, h), y.prototype = {
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
            throw new Error(Q[J]);
        },
        deleteData: function(e, t) {
            this.replaceData(e, t, "");
        },
        replaceData: function(e, t, n) {
            n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, 
            this.length = n.length;
        }
    }, t(y, h), b.prototype = {
        nodeName: "#text",
        nodeType: j,
        splitText: function(e) {
            var t = this.data, n = t.substring(e);
            t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
            var r = this.ownerDocument.createTextNode(n);
            return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r;
        }
    }, t(b, y), T.prototype = {
        nodeName: "#comment",
        nodeType: X
    }, t(T, y), _.prototype = {
        nodeName: "#cdata-section",
        nodeType: F
    }, t(_, y), D.prototype.nodeType = H, t(D, h), S.prototype.nodeType = q, t(S, h), 
    C.prototype.nodeType = z, t(C, h), I.prototype.nodeType = Y, t(I, h), x.prototype.nodeName = "#document-fragment", 
    x.prototype.nodeType = W, t(x, h), A.prototype.nodeType = $, t(A, h), R.prototype.serializeToString = function(e, t, n) {
        return O.call(e, t, n);
    }, h.prototype.toString = O;
    try {
        Object.defineProperty && (Object.defineProperty(i.prototype, "length", {
            get: function() {
                return o(this), this.$$length;
            }
        }), Object.defineProperty(h.prototype, "textContent", {
            get: function() {
                return function e(t) {
                    switch (t.nodeType) {
                      case V:
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
                  case V:
                  case W:
                    for (;this.firstChild; ) this.removeChild(this.firstChild);
                    (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                    break;

                  default:
                    this.data = e, this.value = e, this.nodeValue = e;
                }
            }
        }), B = function(e, t, n) {
            e["$$" + t] = n;
        });
    } catch (e) {}
    exports.DOMImplementation = c, exports.XMLSerializer = R;
}();