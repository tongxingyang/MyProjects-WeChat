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
    if (t) return "\n@" + (t.systemId || "") + "#[line:" + t.lineNumber + ",col:" + t.columnNumber + "]";
}

function o(t, e, n) {
    return "string" == typeof t ? t.substr(e, n) : t.length >= e + n || e ? new java.lang.String(t, e, n) + "" : t;
}

function i(t, e) {
    t.currentElement ? t.currentElement.appendChild(e) : t.doc.appendChild(e);
}

t.prototype.parseFromString = function(t, n) {
    var o = this.options, i = new a(), l = o.domBuilder || new e(), s = o.errorHandler, u = o.locator, m = o.xmlns || {}, h = /\/x?html?$/.test(n), d = h ? c.entityMap : {
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'"
    };
    return u && l.setDocumentLocator(u), i.errorHandler = function(t, n, o) {
        if (!t) {
            if (n instanceof e) return n;
            t = n;
        }
        var i = {}, c = t instanceof Function;
        function a(e) {
            var n = t[e];
            !n && c && (n = 2 == t.length ? function(n) {
                t(e, n);
            } : t), i[e] = n && function(t) {
                n("[xmldom " + e + "]\t" + t + r(o));
            } || function() {};
        }
        return o = o || {}, a("warning"), a("error"), a("fatalError"), i;
    }(s, l, u), i.domBuilder = o.domBuilder || l, h && (m[""] = "http://www.w3.org/1999/xhtml"), 
    m.xml = m.xml || "http://www.w3.org/XML/1998/namespace", t ? i.parse(t, m, d) : i.errorHandler.error("invalid doc source"), 
    l.doc;
}, e.prototype = {
    startDocument: function() {
        this.doc = new l().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
    },
    startElement: function(t, e, r, o) {
        var c = this.doc, a = c.createElementNS(t, r || e), l = o.length;
        i(this, a), this.currentElement = a, this.locator && n(this.locator, a);
        for (var s = 0; s < l; s++) {
            t = o.getURI(s);
            var u = o.getValue(s), m = (r = o.getQName(s), c.createAttributeNS(t, r));
            this.locator && n(o.getLocator(s), m), m.value = m.nodeValue = u, a.setAttributeNode(m);
        }
    },
    endElement: function(t, e, n) {
        var r = this.currentElement;
        r.tagName;
        this.currentElement = r.parentNode;
    },
    startPrefixMapping: function(t, e) {},
    endPrefixMapping: function(t) {},
    processingInstruction: function(t, e) {
        var r = this.doc.createProcessingInstruction(t, e);
        this.locator && n(this.locator, r), i(this, r);
    },
    ignorableWhitespace: function(t, e, n) {},
    characters: function(t, e, r) {
        if (t = o.apply(this, arguments)) {
            if (this.cdata) var i = this.doc.createCDATASection(t); else i = this.doc.createTextNode(t);
            this.currentElement ? this.currentElement.appendChild(i) : /^\s*$/.test(t) && this.doc.appendChild(i), 
            this.locator && n(this.locator, i);
        }
    },
    skippedEntity: function(t) {},
    endDocument: function() {
        this.doc.normalize();
    },
    setDocumentLocator: function(t) {
        (this.locator = t) && (t.lineNumber = 0);
    },
    comment: function(t, e, r) {
        t = o.apply(this, arguments);
        var c = this.doc.createComment(t);
        this.locator && n(this.locator, c), i(this, c);
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

var c = require("./entities"), a = require("./sax").XMLReader, l = exports.DOMImplementation = require("./dom").DOMImplementation;

exports.XMLSerializer = require("./dom").XMLSerializer, exports.DOMParser = t;