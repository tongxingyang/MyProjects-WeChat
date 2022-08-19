!function() {
    function t(t) {
        this.options = t || {
            locator: {}
        };
    }
    function e() {
        this.cdata = !1;
    }
    function n(t, e) {
        e.lineNumber = t.lineNumber, e.columnNumber = t.columnNumber;
    }
    function r(t) {
        return t ? "\n@" + (t.systemId || "") + "#[line:" + t.lineNumber + ",col:" + t.columnNumber + "]" : void 0;
    }
    function o(t, e, n) {
        return "string" == typeof t ? t.substr(e, n) : t.length >= e + n || e ? new java.lang.String(t, e, n) + "" : t;
    }
    function i(t, e) {
        t.currentElement ? t.currentElement.appendChild(e) : t.doc.appendChild(e);
    }
    t.prototype.parseFromString = function(t, n) {
        var o = this.options, i = new c(), a = o.domBuilder || new e(), l = o.errorHandler, s = o.locator, u = o.xmlns || {}, m = {
            lt: "<",
            gt: ">",
            amp: "&",
            quot: '"',
            apos: "'"
        };
        return s && a.setDocumentLocator(s), i.errorHandler = function(t, n, o) {
            function i(e) {
                var n = t[e];
                !n && a && (n = 2 == t.length ? function(n) {
                    t(e, n);
                } : t), c[e] = n && function(t) {
                    n("[xmldom " + e + "]\t" + t + r(o));
                } || function() {};
            }
            if (!t) {
                if (n instanceof e) return n;
                t = n;
            }
            var c = {}, a = t instanceof Function;
            return o = o || {}, i("warning"), i("error"), i("fatalError"), c;
        }(l, a, s), i.domBuilder = o.domBuilder || a, /\/x?html?$/.test(n) && (m.nbsp = " ", 
        m.copy = "©", u[""] = "http://www.w3.org/1999/xhtml"), u.xml = u.xml || "http://www.w3.org/XML/1998/namespace", 
        t ? i.parse(t, u, m) : i.errorHandler.error("invalid doc source"), a.doc;
    }, e.prototype = {
        startDocument: function() {
            this.doc = new a().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
        },
        startElement: function(t, e, r, o) {
            var c = this.doc, a = c.createElementNS(t, r || e), l = o.length;
            i(this, a), this.currentElement = a, this.locator && n(this.locator, a);
            for (var s = 0; l > s; s++) {
                t = o.getURI(s);
                var u = o.getValue(s), m = (r = o.getQName(s), c.createAttributeNS(t, r));
                this.locator && n(o.getLocator(s), m), m.value = m.nodeValue = u, a.setAttributeNode(m);
            }
        },
        endElement: function() {
            var t = this.currentElement;
            t.tagName, this.currentElement = t.parentNode;
        },
        startPrefixMapping: function() {},
        endPrefixMapping: function() {},
        processingInstruction: function(t, e) {
            var r = this.doc.createProcessingInstruction(t, e);
            this.locator && n(this.locator, r), i(this, r);
        },
        ignorableWhitespace: function() {},
        characters: function(t) {
            if (t = o.apply(this, arguments)) {
                if (this.cdata) var e = this.doc.createCDATASection(t); else e = this.doc.createTextNode(t);
                this.currentElement ? this.currentElement.appendChild(e) : /^\s*$/.test(t) && this.doc.appendChild(e), 
                this.locator && n(this.locator, e);
            }
        },
        skippedEntity: function() {},
        endDocument: function() {
            this.doc.normalize();
        },
        setDocumentLocator: function(t) {
            (this.locator = t) && (t.lineNumber = 0);
        },
        comment: function(t) {
            t = o.apply(this, arguments);
            var e = this.doc.createComment(t);
            this.locator && n(this.locator, e), i(this, e);
        },
        startCDATA: function() {
            this.cdata = !0;
        },
        endCDATA: function() {
            this.cdata = !1;
        },
        startDTD: function(t, e, r) {
            var o = this.doc.implementation;
            if (o && o.createDocumentType) {
                var c = o.createDocumentType(t, e, r);
                this.locator && n(this.locator, c), i(this, c);
            }
        },
        warning: function(t) {
            console.warn("[xmldom warning]\t" + t, r(this.locator));
        },
        error: function(t) {
            console.error("[xmldom error]\t" + t, r(this.locator));
        },
        fatalError: function(t) {
            throw console.error("[xmldom fatalError]\t" + t, r(this.locator)), t;
        }
    }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(t) {
        e.prototype[t] = function() {
            return null;
        };
    });
    var c = require("./sax").XMLReader, a = exports.DOMImplementation = require("./dom").DOMImplementation;
    exports.XMLSerializer = require("./dom").XMLSerializer, exports.DOMParser = t;
}();