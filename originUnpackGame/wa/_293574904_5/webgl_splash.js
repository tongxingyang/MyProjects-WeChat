var r = r || {};

r.scope = {}, r.arrayIteratorImpl = function(r) {
    var e = 0;
    return function() {
        return e < r.length ? {
            done: !1,
            value: r[e++]
        } : {
            done: !0
        };
    };
}, r.arrayIterator = function(e) {
    return {
        next: r.arrayIteratorImpl(e)
    };
}, r.makeIterator = function(e) {
    var t = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
    return t ? t.call(e) : r.arrayIterator(e);
};

var e, t, a, n = new Float32Array([ -1, 1, 0, 0, -1, -1, 0, 1, 1, 1, 1, 0, 1, -1, 1, 1 ]), o = !1;

function u(r, e, t) {
    return !!(e = function(r, e, t) {
        if (e = i(r, r.VERTEX_SHADER, e), t = i(r, r.FRAGMENT_SHADER, t), !e || !t) return null;
        var a = r.createProgram();
        return a ? (r.attachShader(a, e), r.attachShader(a, t), r.linkProgram(a), r.getProgramParameter(a, r.LINK_STATUS) ? a : (r.getProgramInfoLog(a), 
        r.deleteProgram(a), r.deleteShader(t), r.deleteShader(e), null)) : null;
    }(r, e, t)) && (r.useProgram(e), r.program = e, !0);
}

function i(r, e, t) {
    return null == (e = r.createShader(e)) ? null : (r.shaderSource(e, t), r.compileShader(e), 
    r.getShaderParameter(e, r.COMPILE_STATUS) ? e : (r.getShaderInfoLog(e), r.deleteShader(e), 
    null));
}

function l(r, e) {
    var t = e || new Float32Array([ -1, 1, 0, 1, -1, -1, 0, 0, 1, 1, 1, 1, 1, -1, 1, 0 ]), a = r.createBuffer();
    return a ? (r.bindBuffer(r.ARRAY_BUFFER, a), r.bufferData(r.ARRAY_BUFFER, t, r.STATIC_DRAW), 
    t = t.BYTES_PER_ELEMENT, 0 > (a = r.getAttribLocation(r.program, "a_Position")) ? -1 : (r.vertexAttribPointer(a, 2, r.FLOAT, !1, 4 * t, 0), 
    r.enableVertexAttribArray(a), 0 > (a = r.getAttribLocation(r.program, "a_TexCoord")) ? -1 : (r.vertexAttribPointer(a, 2, r.FLOAT, !1, 4 * t, 2 * t), 
    r.enableVertexAttribArray(a), 4))) : -1;
}

function T(r, e, t, a, n) {
    r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, t), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), 
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), 
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texImage2D(r.TEXTURE_2D, 0, r.RGB, r.RGB, r.UNSIGNED_BYTE, n), 
    r.uniform1i(a, 0), r.clear(r.COLOR_BUFFER_BIT), r.drawArrays(r.TRIANGLE_STRIP, 0, e);
}

function E(t, n, o) {
    return n ? u(n, "attribute vec4 a_Position;attribute vec2 a_TexCoord;varying vec2 v_TexCoord;void main() {gl_Position = a_Position;v_TexCoord = a_TexCoord;}", "#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform sampler2D u_Sampler;varying vec2 v_TexCoord;void main() {gl_FragColor = texture2D(u_Sampler, v_TexCoord);}") ? 0 > (o = l(n, o)) ? -1 : (n.clearColor(1, 1, 1, 1), 
    t = (o = r.makeIterator(function(r, t, n) {
        var o = r.createTexture();
        if (!o) return [ null, null, null, !1 ];
        var u = r.getUniformLocation(r.program, "u_Sampler");
        if (!u) return [ null, null, null, !1 ];
        var i = wx.createImage();
        return i ? (i.onload = function() {
            T(r, t, e, u, i), a = i;
        }, i.src = n, [ o, u, !0 ]) : [ null, null, null, !1 ];
    }(n, o, t))).next().value, n = o.next().value, (o = o.next().value) ? [ t, n, o ] : -1) : -1 : [ -1 ];
}

exports.drawImg = function(u, i) {
    if (!o) {
        var _ = r.makeIterator(E(u, i, n));
        if (e = _.next().value, t = _.next().value, 0 > _.next().value) return;
        o = !0;
    }
    0 > (_ = l(i, n)) || a && T(i, _, e, t, a);
};