var e = require("../@babel/runtime/helpers/typeof");

!function(t, i) {
    "function" == typeof define && define.amd ? define([], i) : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && "undefined" != typeof exports ? module.exports = i() : (void 0).Papa = i();
}(0, function t() {
    var i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== i ? i : {}, r = !i.document && !!i.postMessage, n = r && /blob:/i.test((i.location || {}).protocol), s = {}, a = 0, o = window.Papa = {};
    if (o.parse = function(e, r) {
        var n = (r = r || {}).dynamicTyping || !1;
        if (E(n) && (r.dynamicTypingFunction = n, n = {}), r.dynamicTyping = n, r.transform = !!E(r.transform) && r.transform, 
        r.worker && o.WORKERS_SUPPORTED) {
            var h = function() {
                if (!o.WORKERS_SUPPORTED) return !1;
                var e, r, n = (e = i.URL || i.webkitURL || null, r = t.toString(), o.BLOB_URL || (o.BLOB_URL = e.createObjectURL(new Blob([ "(", r, ")();" ], {
                    type: "text/javascript"
                })))), h = new i.Worker(n);
                return h.onmessage = v, h.id = a++, s[h.id] = h, h;
            }();
            return h.userStep = r.step, h.userChunk = r.chunk, h.userComplete = r.complete, 
            h.userError = r.error, r.step = E(r.step), r.chunk = E(r.chunk), r.complete = E(r.complete), 
            r.error = E(r.error), delete r.worker, void h.postMessage({
                input: e,
                config: r,
                workerId: h.id
            });
        }
        var u = null;
        return e === o.NODE_STREAM_INPUT && "undefined" == typeof PAPA_BROWSER_CONTEXT ? (u = new p(r)).getStream() : ("string" == typeof e ? u = r.download ? new f(r) : new l(r) : !0 === e.readable && E(e.read) && E(e.on) ? u = new c(r) : (i.File && e instanceof File || e instanceof Object) && (u = new d(r)), 
        u.stream(e));
    }, o.unparse = function(t, i) {
        var r = !1, n = !0, s = ",", a = "\r\n", h = '"', u = h + h, f = !1, d = null, l = !1;
        !function() {
            if ("object" == e(i)) {
                if ("string" != typeof i.delimiter || o.BAD_DELIMITERS.filter(function(e) {
                    return -1 !== i.delimiter.indexOf(e);
                }).length || (s = i.delimiter), ("boolean" == typeof i.quotes || "function" == typeof i.quotes || Array.isArray(i.quotes)) && (r = i.quotes), 
                "boolean" != typeof i.skipEmptyLines && "string" != typeof i.skipEmptyLines || (f = i.skipEmptyLines), 
                "string" == typeof i.newline && (a = i.newline), "string" == typeof i.quoteChar && (h = i.quoteChar), 
                "boolean" == typeof i.header && (n = i.header), Array.isArray(i.columns)) {
                    if (0 === i.columns.length) throw new Error("Option columns is empty");
                    d = i.columns;
                }
                void 0 !== i.escapeChar && (u = i.escapeChar + h), "boolean" == typeof i.escapeFormulae && (l = i.escapeFormulae);
            }
        }();
        var c = new RegExp(m(h), "g");
        if ("string" == typeof t && (t = JSON.parse(t)), Array.isArray(t)) {
            if (!t.length || Array.isArray(t[0])) return _(null, t, f);
            if ("object" == e(t[0])) return _(d || p(t[0]), t, f);
        } else if ("object" == e(t)) return "string" == typeof t.data && (t.data = JSON.parse(t.data)), 
        Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : p(t.data[0])), 
        Array.isArray(t.data[0]) || "object" == e(t.data[0]) || (t.data = [ t.data ])), 
        _(t.fields || [], t.data || [], f);
        throw new Error("Unable to serialize unrecognized input");
        function p(t) {
            if ("object" != e(t)) return [];
            var i = [];
            for (var r in t) i.push(r);
            return i;
        }
        function _(e, t, i) {
            var r = "";
            "string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t));
            var o = Array.isArray(e) && e.length > 0, h = !Array.isArray(t[0]);
            if (o && n) {
                for (var u = 0; u < e.length; u++) u > 0 && (r += s), r += g(e[u], u);
                t.length > 0 && (r += a);
            }
            for (var f = 0; f < t.length; f++) {
                var d = o ? e.length : t[f].length, l = !1, c = o ? 0 === Object.keys(t[f]).length : 0 === t[f].length;
                if (i && !o && (l = "greedy" === i ? "" === t[f].join("").trim() : 1 === t[f].length && 0 === t[f][0].length), 
                "greedy" === i && o) {
                    for (var p = [], _ = 0; _ < d; _++) {
                        var m = h ? e[_] : _;
                        p.push(t[f][m]);
                    }
                    l = "" === p.join("").trim();
                }
                if (!l) {
                    for (var v = 0; v < d; v++) {
                        v > 0 && !c && (r += s);
                        var y = o && h ? e[v] : v;
                        r += g(t[f][y], v);
                    }
                    f < t.length - 1 && (!i || d > 0 && !c) && (r += a);
                }
            }
            return r;
        }
        function g(e, t) {
            if (null == e) return "";
            if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
            !0 === l && "string" == typeof e && null !== e.match(/^[=+\-@].*$/) && (e = "'" + e);
            var i = e.toString().replace(c, u);
            return "boolean" == typeof r && r || "function" == typeof r && r(e, t) || Array.isArray(r) && r[t] || function(e, t) {
                for (var i = 0; i < t.length; i++) if (e.indexOf(t[i]) > -1) return !0;
                return !1;
            }(i, o.BAD_DELIMITERS) || i.indexOf(s) > -1 || " " === i.charAt(0) || " " === i.charAt(i.length - 1) ? h + i + h : i;
        }
    }, o.RECORD_SEP = String.fromCharCode(30), o.UNIT_SEP = String.fromCharCode(31), 
    o.BYTE_ORDER_MARK = "\ufeff", o.BAD_DELIMITERS = [ "\r", "\n", '"', o.BYTE_ORDER_MARK ], 
    o.WORKERS_SUPPORTED = !r && !!i.Worker, o.NODE_STREAM_INPUT = 1, o.LocalChunkSize = 10485760, 
    o.RemoteChunkSize = 5242880, o.DefaultDelimiter = ",", o.Parser = g, o.ParserHandle = _, 
    o.NetworkStreamer = f, o.FileStreamer = d, o.StringStreamer = l, o.ReadableStreamStreamer = c, 
    "undefined" == typeof PAPA_BROWSER_CONTEXT && (o.DuplexStreamStreamer = p), i.jQuery) {
        var h = i.jQuery;
        h.fn.parse = function(t) {
            var r = t.config || {}, n = [];
            return this.each(function(e) {
                if ("INPUT" !== h(this).prop("tagName").toUpperCase() || "file" !== h(this).attr("type").toLowerCase() || !i.FileReader || !this.files || 0 === this.files.length) return !0;
                for (var t = 0; t < this.files.length; t++) n.push({
                    file: this.files[t],
                    inputElem: this,
                    instanceConfig: h.extend({}, r)
                });
            }), s(), this;
            function s() {
                if (0 !== n.length) {
                    var i, r, s, u = n[0];
                    if (E(t.before)) {
                        var f = t.before(u.file, u.inputElem);
                        if ("object" == e(f)) {
                            if ("abort" === f.action) return i = u.file, r = u.inputElem, s = f.reason, void (E(t.error) && t.error({
                                name: "AbortError"
                            }, i, r, s));
                            if ("skip" === f.action) return void a();
                            "object" == e(f.config) && (u.instanceConfig = h.extend(u.instanceConfig, f.config));
                        } else if ("skip" === f) return void a();
                    }
                    var d = u.instanceConfig.complete;
                    u.instanceConfig.complete = function(e) {
                        E(d) && d(e, u.file, u.inputElem), a();
                    }, o.parse(u.file, u.instanceConfig);
                } else E(t.complete) && t.complete();
            }
            function a() {
                n.splice(0, 1), s();
            }
        };
    }
    function u(e) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, 
        this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, 
        this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
            data: [],
            errors: [],
            meta: {}
        }, function(e) {
            var t = b(e);
            t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null), 
            this._handle = new _(t), this._handle.streamer = this, this._config = t;
        }.call(this, e), this.parseChunk = function(e, t) {
            if (this.isFirstChunk && E(this._config.beforeFirstChunk)) {
                var r = this._config.beforeFirstChunk(e);
                void 0 !== r && (e = r);
            }
            this.isFirstChunk = !1, this._halted = !1;
            var s = this._partialLine + e;
            this._partialLine = "";
            var a = this._handle.parse(s, this._baseIndex, !this._finished);
            if (!this._handle.paused() && !this._handle.aborted()) {
                var h = a.meta.cursor;
                this._finished || (this._partialLine = s.substring(h - this._baseIndex), this._baseIndex = h), 
                a && a.data && (this._rowCount += a.data.length);
                var u = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                if (n) i.postMessage({
                    results: a,
                    workerId: o.WORKER_ID,
                    finished: u
                }); else if (E(this._config.chunk) && !t) {
                    if (this._config.chunk(a, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
                    a = void 0, this._completeResults = void 0;
                }
                return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(a.data), 
                this._completeResults.errors = this._completeResults.errors.concat(a.errors), this._completeResults.meta = a.meta), 
                this._completed || !u || !E(this._config.complete) || a && a.meta.aborted || (this._config.complete(this._completeResults, this._input), 
                this._completed = !0), u || a && a.meta.paused || this._nextChunk(), a;
            }
            this._halted = !0;
        }, this._sendError = function(e) {
            E(this._config.error) ? this._config.error(e) : n && this._config.error && i.postMessage({
                workerId: o.WORKER_ID,
                error: e,
                finished: !1
            });
        };
    }
    function f(e) {
        var t;
        (e = e || {}).chunkSize || (e.chunkSize = o.RemoteChunkSize), u.call(this, e), this._nextChunk = r ? function() {
            this._readChunk(), this._chunkLoaded();
        } : function() {
            this._readChunk();
        }, this.stream = function(e) {
            this._input = e, this._nextChunk();
        }, this._readChunk = function() {
            if (this._finished) this._chunkLoaded(); else {
                if (t = new XMLHttpRequest(), this._config.withCredentials && (t.withCredentials = this._config.withCredentials), 
                r || (t.onload = C(this._chunkLoaded, this), t.onerror = C(this._chunkError, this)), 
                t.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !r), this._config.downloadRequestHeaders) {
                    var e = this._config.downloadRequestHeaders;
                    for (var i in e) t.setRequestHeader(i, e[i]);
                }
                if (this._config.chunkSize) {
                    var n = this._start + this._config.chunkSize - 1;
                    t.setRequestHeader("Range", "bytes=" + this._start + "-" + n);
                }
                try {
                    t.send(this._config.downloadRequestBody);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    this._chunkError(e.message);
                }
                r && 0 === t.status && this._chunkError();
            }
        }, this._chunkLoaded = function() {
            var e;
            4 === t.readyState && (t.status < 200 || t.status >= 400 ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : t.responseText.length, 
            this._finished = !this._config.chunkSize || this._start >= (null === (e = t.getResponseHeader("Content-Range")) ? -1 : parseInt(e.substring(e.lastIndexOf("/") + 1))), 
            this.parseChunk(t.responseText)));
        }, this._chunkError = function(e) {
            var i = t.statusText || e;
            this._sendError(new Error(i));
        };
    }
    function d(e) {
        var t, i;
        (e = e || {}).chunkSize || (e.chunkSize = o.LocalChunkSize), u.call(this, e);
        var r = "undefined" != typeof FileReader;
        this.stream = function(e) {
            this._input = e, i = e.slice || e.webkitSlice || e.mozSlice, r ? ((t = new FileReader()).onload = C(this._chunkLoaded, this), 
            t.onerror = C(this._chunkError, this)) : t = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
            this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
            var e = this._input;
            if (this._config.chunkSize) {
                var n = Math.min(this._start + this._config.chunkSize, this._input.size);
                e = i.call(e, this._start, n);
            }
            var s = t.readAsText(e, this._config.encoding);
            r || this._chunkLoaded({
                target: {
                    result: s
                }
            });
        }, this._chunkLoaded = function(e) {
            this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, 
            this.parseChunk(e.target.result);
        }, this._chunkError = function() {
            this._sendError(t.error);
        };
    }
    function l(e) {
        var t;
        e = e || {}, u.call(this, e), this.stream = function(e) {
            return t = e, this._nextChunk();
        }, this._nextChunk = function() {
            if (!this._finished) {
                var e, i = this._config.chunkSize;
                return i ? (e = t.substring(0, i), t = t.substring(i)) : (e = t, t = ""), this._finished = !t, 
                this.parseChunk(e);
            }
        };
    }
    function c(e) {
        e = e || {}, u.call(this, e);
        var t = [], i = !0, r = !1;
        this.pause = function() {
            u.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
            u.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(e) {
            this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), 
            this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
            r && 1 === t.length && (this._finished = !0);
        }, this._nextChunk = function() {
            this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : i = !0;
        }, this._streamData = C(function(e) {
            try {
                t.push("string" == typeof e ? e : e.toString(this._config.encoding)), i && (i = !1, 
                this._checkIsFinished(), this.parseChunk(t.shift()));
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                this._streamError(e);
            }
        }, this), this._streamError = C(function(e) {
            this._streamCleanUp(), this._sendError(e);
        }, this), this._streamEnd = C(function() {
            this._streamCleanUp(), r = !0, this._streamData("");
        }, this), this._streamCleanUp = C(function() {
            this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), 
            this._input.removeListener("error", this._streamError);
        }, this);
    }
    function p(e) {
        var t = require("stream").Duplex, i = b(e), r = !0, n = !1, s = [], a = null;
        this._onCsvData = function(e) {
            var t = e.data;
            a.push(t) || this._handle.paused() || this._handle.pause();
        }, this._onCsvComplete = function() {
            a.push(null);
        }, i.step = C(this._onCsvData, this), i.complete = C(this._onCsvComplete, this), 
        u.call(this, i), this._nextChunk = function() {
            n && 1 === s.length && (this._finished = !0), s.length ? s.shift()() : r = !0;
        }, this._addToParseQueue = function(e, t) {
            s.push(C(function() {
                if (this.parseChunk("string" == typeof e ? e : e.toString(i.encoding)), E(t)) return t();
            }, this)), r && (r = !1, this._nextChunk());
        }, this._onRead = function() {
            this._handle.paused() && this._handle.resume();
        }, this._onWrite = function(e, t, i) {
            this._addToParseQueue(e, i);
        }, this._onWriteComplete = function() {
            n = !0, this._addToParseQueue("");
        }, this.getStream = function() {
            return a;
        }, (a = new t({
            readableObjectMode: !0,
            decodeStrings: !1,
            read: C(this._onRead, this),
            write: C(this._onWrite, this)
        })).once("finish", C(this._onWriteComplete, this));
    }
    function _(e) {
        var t, i, r, n = Math.pow(2, 53), s = -n, a = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/, h = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/, u = this, f = 0, d = 0, l = !1, c = !1, p = [], _ = {
            data: [],
            errors: [],
            meta: {}
        };
        if (E(e.step)) {
            var v = e.step;
            e.step = function(t) {
                if (_ = t, C()) k(); else {
                    if (k(), 0 === _.data.length) return;
                    f += t.data.length, e.preview && f > e.preview ? i.abort() : (_.data = _.data[0], 
                    v(_, u));
                }
            };
        }
        function y(t) {
            return "greedy" === e.skipEmptyLines ? "" === t.join("").trim() : 1 === t.length && 0 === t[0].length;
        }
        function k() {
            if (_ && r && (R("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + o.DefaultDelimiter + "'"), 
            r = !1), e.skipEmptyLines) for (var t = 0; t < _.data.length; t++) y(_.data[t]) && _.data.splice(t--, 1);
            return C() && function() {
                if (_) if (Array.isArray(_.data[0])) {
                    for (var t = 0; C() && t < _.data.length; t++) _.data[t].forEach(i);
                    _.data.splice(0, 1);
                } else _.data.forEach(i);
                function i(t, i) {
                    E(e.transformHeader) && (t = e.transformHeader(t, i)), p.push(t);
                }
            }(), function() {
                if (!_ || !e.header && !e.dynamicTyping && !e.transform) return _;
                function t(t, i) {
                    var r, n = e.header ? {} : [];
                    for (r = 0; r < t.length; r++) {
                        var s = r, a = t[r];
                        e.header && (s = r >= p.length ? "__parsed_extra" : p[r]), e.transform && (a = e.transform(a, s)), 
                        a = w(s, a), "__parsed_extra" === s ? (n[s] = n[s] || [], n[s].push(a)) : n[s] = a;
                    }
                    return e.header && (r > p.length ? R("FieldMismatch", "TooManyFields", "Too many fields: expected " + p.length + " fields but parsed " + r, d + i) : r < p.length && R("FieldMismatch", "TooFewFields", "Too few fields: expected " + p.length + " fields but parsed " + r, d + i)), 
                    n;
                }
                var i = 1;
                return !_.data.length || Array.isArray(_.data[0]) ? (_.data = _.data.map(t), i = _.data.length) : _.data = t(_.data, 0), 
                e.header && _.meta && (_.meta.fields = p), d += i, _;
            }();
        }
        function C() {
            return e.header && 0 === p.length;
        }
        function w(t, i) {
            return function(t) {
                return e.dynamicTypingFunction && void 0 === e.dynamicTyping[t] && (e.dynamicTyping[t] = e.dynamicTypingFunction(t)), 
                !0 === (e.dynamicTyping[t] || e.dynamicTyping);
            }(t) ? "true" === i || "TRUE" === i || "false" !== i && "FALSE" !== i && (function(e) {
                if (a.test(e)) {
                    var t = parseFloat(e);
                    if (t > s && t < n) return !0;
                }
                return !1;
            }(i) ? parseFloat(i) : h.test(i) ? new Date(i) : "" === i ? null : i) : i;
        }
        function R(e, t, i, r) {
            var n = {
                type: e,
                code: t,
                message: i
            };
            void 0 !== r && (n.row = r), _.errors.push(n);
        }
        this.parse = function(n, s, a) {
            var h = e.quoteChar || '"';
            if (e.newline || (e.newline = function(e, t) {
                e = e.substring(0, 1048576);
                var i = new RegExp(m(t) + "([^]*?)" + m(t), "gm"), r = (e = e.replace(i, "")).split("\r"), n = e.split("\n"), s = n.length > 1 && n[0].length < r[0].length;
                if (1 === r.length || s) return "\n";
                for (var a = 0, o = 0; o < r.length; o++) "\n" === r[o][0] && a++;
                return a >= r.length / 2 ? "\r\n" : "\r";
            }(n, h)), r = !1, e.delimiter) E(e.delimiter) && (e.delimiter = e.delimiter(n), 
            _.meta.delimiter = e.delimiter); else {
                var u = function(t, i, r, n, s) {
                    var a, h, u, f;
                    s = s || [ ",", "\t", "|", ";", o.RECORD_SEP, o.UNIT_SEP ];
                    for (var d = 0; d < s.length; d++) {
                        var l = s[d], c = 0, p = 0, _ = 0;
                        u = void 0;
                        for (var m = new g({
                            comments: n,
                            delimiter: l,
                            newline: i,
                            preview: 10
                        }).parse(t), v = 0; v < m.data.length; v++) if (r && y(m.data[v])) _++; else {
                            var k = m.data[v].length;
                            p += k, void 0 !== u ? k > 0 && (c += Math.abs(k - u), u = k) : u = k;
                        }
                        m.data.length > 0 && (p /= m.data.length - _), (void 0 === h || c <= h) && (void 0 === f || p > f) && p > 1.99 && (h = c, 
                        a = l, f = p);
                    }
                    return e.delimiter = a, {
                        successful: !!a,
                        bestDelimiter: a
                    };
                }(n, e.newline, e.skipEmptyLines, e.comments, e.delimitersToGuess);
                u.successful ? e.delimiter = u.bestDelimiter : (r = !0, e.delimiter = o.DefaultDelimiter), 
                _.meta.delimiter = e.delimiter;
            }
            var f = b(e);
            return e.preview && e.header && f.preview++, t = n, i = new g(f), _ = i.parse(t, s, a), 
            k(), l ? {
                meta: {
                    paused: !0
                }
            } : _ || {
                meta: {
                    paused: !1
                }
            };
        }, this.paused = function() {
            return l;
        }, this.pause = function() {
            l = !0, i.abort(), t = E(e.chunk) ? "" : t.substring(i.getCharIndex());
        }, this.resume = function() {
            u.streamer._halted ? (l = !1, u.streamer.parseChunk(t, !0)) : setTimeout(u.resume, 3);
        }, this.aborted = function() {
            return c;
        }, this.abort = function() {
            c = !0, i.abort(), _.meta.aborted = !0, E(e.complete) && e.complete(_), t = "";
        };
    }
    function m(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function g(e) {
        var t, i = (e = e || {}).delimiter, r = e.newline, n = e.comments, s = e.step, a = e.preview, h = e.fastMode, u = t = void 0 === e.quoteChar ? '"' : e.quoteChar;
        if (void 0 !== e.escapeChar && (u = e.escapeChar), ("string" != typeof i || o.BAD_DELIMITERS.indexOf(i) > -1) && (i = ","), 
        n === i) throw new Error("Comment character same as delimiter");
        !0 === n ? n = "#" : ("string" != typeof n || o.BAD_DELIMITERS.indexOf(n) > -1) && (n = !1), 
        "\n" !== r && "\r" !== r && "\r\n" !== r && (r = "\n");
        var f = 0, d = !1;
        this.parse = function(e, o, l) {
            if ("string" != typeof e) throw new Error("Input must be a string");
            var c = e.length, p = i.length, _ = r.length, g = n.length, v = E(s);
            f = 0;
            var y = [], k = [], b = [], C = 0;
            if (!e) return M();
            if (h || !1 !== h && -1 === e.indexOf(t)) {
                for (var w = e.split(r), R = 0; R < w.length; R++) {
                    if (b = w[R], f += b.length, R !== w.length - 1) f += r.length; else if (l) return M();
                    if (!n || b.substring(0, g) !== n) {
                        if (v) {
                            if (y = [], L(b.split(i)), j(), d) return M();
                        } else L(b.split(i));
                        if (a && R >= a) return y = y.slice(0, a), M(!0);
                    }
                }
                return M();
            }
            for (var S = e.indexOf(i, f), O = e.indexOf(r, f), x = new RegExp(m(u) + m(t), "g"), T = e.indexOf(t, f); ;) if (e[f] !== t) if (n && 0 === b.length && e.substring(f, f + g) === n) {
                if (-1 === O) return M();
                f = O + _, O = e.indexOf(r, f), S = e.indexOf(i, f);
            } else {
                if (-1 !== S && (S < O || -1 === O)) {
                    if (!(T > S)) {
                        b.push(e.substring(f, S)), f = S + p, S = e.indexOf(i, f);
                        continue;
                    }
                    var D = q(S, T, O);
                    if (D && void 0 !== D.nextDelim) {
                        S = D.nextDelim, T = D.quoteSearch, b.push(e.substring(f, S)), f = S + p, S = e.indexOf(i, f);
                        continue;
                    }
                }
                if (-1 === O) break;
                if (b.push(e.substring(f, O)), z(O + _), v && (j(), d)) return M();
                if (a && y.length >= a) return M(!0);
            } else for (T = f, f++; ;) {
                if (-1 === (T = e.indexOf(t, T + 1))) return l || k.push({
                    type: "Quotes",
                    code: "MissingQuotes",
                    message: "Quoted field unterminated",
                    row: y.length,
                    index: f
                }), P();
                if (T === c - 1) return P(e.substring(f, T).replace(x, t));
                if (t !== u || e[T + 1] !== u) {
                    if (t === u || 0 === T || e[T - 1] !== u) {
                        -1 !== S && S < T + 1 && (S = e.indexOf(i, T + 1)), -1 !== O && O < T + 1 && (O = e.indexOf(r, T + 1));
                        var A = F(-1 === O ? S : Math.min(S, O));
                        if (e[T + 1 + A] === i) {
                            b.push(e.substring(f, T).replace(x, t)), f = T + 1 + A + p, e[T + 1 + A + p] !== t && (T = e.indexOf(t, f)), 
                            S = e.indexOf(i, f), O = e.indexOf(r, f);
                            break;
                        }
                        var I = F(O);
                        if (e.substring(T + 1 + I, T + 1 + I + _) === r) {
                            if (b.push(e.substring(f, T).replace(x, t)), z(T + 1 + I + _), S = e.indexOf(i, f), 
                            T = e.indexOf(t, f), v && (j(), d)) return M();
                            if (a && y.length >= a) return M(!0);
                            break;
                        }
                        k.push({
                            type: "Quotes",
                            code: "InvalidQuotes",
                            message: "Trailing quote on quoted field is malformed",
                            row: y.length,
                            index: f
                        }), T++;
                    }
                } else T++;
            }
            return P();
            function L(e) {
                y.push(e), C = f;
            }
            function F(t) {
                var i = 0;
                if (-1 !== t) {
                    var r = e.substring(T + 1, t);
                    r && "" === r.trim() && (i = r.length);
                }
                return i;
            }
            function P(t) {
                return l || (void 0 === t && (t = e.substring(f)), b.push(t), f = c, L(b), v && j()), 
                M();
            }
            function z(t) {
                f = t, L(b), b = [], O = e.indexOf(r, f);
            }
            function M(e) {
                return {
                    data: y,
                    errors: k,
                    meta: {
                        delimiter: i,
                        linebreak: r,
                        aborted: d,
                        truncated: !!e,
                        cursor: C + (o || 0)
                    }
                };
            }
            function j() {
                s(M()), y = [], k = [];
            }
            function q(r, n, s) {
                var a = {
                    nextDelim: void 0,
                    quoteSearch: void 0
                }, o = e.indexOf(t, n + 1);
                if (r > n && r < o && (o < s || -1 === s)) {
                    var h = e.indexOf(i, o);
                    if (-1 === h) return a;
                    h > o && (o = e.indexOf(t, o + 1)), a = q(h, o, s);
                } else a = {
                    nextDelim: r,
                    quoteSearch: n
                };
                return a;
            }
        }, this.abort = function() {
            d = !0;
        }, this.getCharIndex = function() {
            return f;
        };
    }
    function v(e) {
        var t = e.data, i = s[t.workerId], r = !1;
        if (t.error) i.userError(t.error, t.file); else if (t.results && t.results.data) {
            var n = {
                abort: function() {
                    r = !0, y(t.workerId, {
                        data: [],
                        errors: [],
                        meta: {
                            aborted: !0
                        }
                    });
                },
                pause: k,
                resume: k
            };
            if (E(i.userStep)) {
                for (var a = 0; a < t.results.data.length && (i.userStep({
                    data: t.results.data[a],
                    errors: t.results.errors,
                    meta: t.results.meta
                }, n), !r); a++) ;
                delete t.results;
            } else E(i.userChunk) && (i.userChunk(t.results, n, t.file), delete t.results);
        }
        t.finished && !r && y(t.workerId, t.results);
    }
    function y(e, t) {
        var i = s[e];
        E(i.userComplete) && i.userComplete(t), i.terminate(), delete s[e];
    }
    function k() {
        throw new Error("Not implemented.");
    }
    function b(t) {
        if ("object" != e(t) || null === t) return t;
        var i = Array.isArray(t) ? [] : {};
        for (var r in t) i[r] = b(t[r]);
        return i;
    }
    function C(e, t) {
        return function() {
            e.apply(t, arguments);
        };
    }
    function E(e) {
        return "function" == typeof e;
    }
    return n && (i.onmessage = function(e) {
        var t = e.data;
        if (void 0 === o.WORKER_ID && t && (o.WORKER_ID = t.workerId), "string" == typeof t.input) i.postMessage({
            workerId: o.WORKER_ID,
            results: o.parse(t.input, t.config),
            finished: !0
        }); else if (i.File && t.input instanceof File || t.input instanceof Object) {
            var r = o.parse(t.input, t.config);
            r && i.postMessage({
                workerId: o.WORKER_ID,
                results: r,
                finished: !0
            });
        }
    }), f.prototype = Object.create(u.prototype), f.prototype.constructor = f, d.prototype = Object.create(u.prototype), 
    d.prototype.constructor = d, l.prototype = Object.create(l.prototype), l.prototype.constructor = l, 
    c.prototype = Object.create(u.prototype), c.prototype.constructor = c, "undefined" == typeof PAPA_BROWSER_CONTEXT && (p.prototype = Object.create(u.prototype), 
    p.prototype.constructor = p), o;
});