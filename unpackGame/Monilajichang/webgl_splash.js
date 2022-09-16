var e, r, t, o = require("@babel/runtime/helpers/slicedToArray"), a = new Float32Array([ -1, 1, 0, 0, -1, -1, 0, 1, 1, 1, 1, 0, 1, -1, 1, 1 ]), n = !1;

function l(e, r, t) {
    var o = function(e, r, t) {
        var o = i(e, e.VERTEX_SHADER, r), a = i(e, e.FRAGMENT_SHADER, t);
        if (!o || !a) return null;
        var n = e.createProgram();
        if (!n) return null;
        if (e.attachShader(n, o), e.attachShader(n, a), e.linkProgram(n), !e.getProgramParameter(n, e.LINK_STATUS)) {
            var l = e.getProgramInfoLog(n);
            return console.log("Failed to link program: " + l), e.deleteProgram(n), e.deleteShader(a), 
            e.deleteShader(o), null;
        }
        return n;
    }(e, r, t);
    return o ? (e.useProgram(o), e.program = o, !0) : (console.log("Failed to create program"), 
    !1);
}

function i(e, r, t) {
    var o = e.createShader(r);
    if (null == o) return console.log("unable to create shader"), null;
    if (e.shaderSource(o, t), e.compileShader(o), !e.getShaderParameter(o, e.COMPILE_STATUS)) {
        var a = e.getShaderInfoLog(o);
        return console.log("Failed to compile shader: " + a), e.deleteShader(o), null;
    }
    return o;
}

function u(e, r) {
    var t = r || new Float32Array([ -1, 1, 0, 1, -1, -1, 0, 0, 1, 1, 1, 1, 1, -1, 1, 0 ]), o = e.createBuffer();
    if (!o) return console.log("Failed to create the buffer object"), -1;
    e.bindBuffer(e.ARRAY_BUFFER, o), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW);
    var a = t.BYTES_PER_ELEMENT, n = e.getAttribLocation(e.program, "a_Position");
    if (n < 0) return console.log("Failed to get the storage location of a_Position"), 
    -1;
    e.vertexAttribPointer(n, 2, e.FLOAT, !1, 4 * a, 0), e.enableVertexAttribArray(n);
    var l = e.getAttribLocation(e.program, "a_TexCoord");
    return l < 0 ? (console.log("Failed to get the storage location of a_TexCoord"), 
    -1) : (e.vertexAttribPointer(l, 2, e.FLOAT, !1, 4 * a, 2 * a), e.enableVertexAttribArray(l), 
    4);
}

function c(e, r, t, o, a) {
    e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), 
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), 
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texImage2D(e.TEXTURE_2D, 0, e.RGB, e.RGB, e.UNSIGNED_BYTE, a), 
    e.uniform1i(o, 0), e.clear(e.COLOR_BUFFER_BIT), e.drawArrays(e.TRIANGLE_STRIP, 0, r);
}

function T(r, a, n) {
    if (!a) return console.log("Failed to get the rendering context for WebGL"), [ -1 ];
    if (!l(a, "attribute vec4 a_Position;attribute vec2 a_TexCoord;varying vec2 v_TexCoord;void main() {gl_Position = a_Position;v_TexCoord = a_TexCoord;}", "#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform sampler2D u_Sampler;varying vec2 v_TexCoord;void main() {gl_FragColor = texture2D(u_Sampler, v_TexCoord);}")) return console.log("Failed to intialize shaders."), 
    -1;
    var i = u(a, n);
    if (i < 0) return console.log("Failed to set the vertex information"), -1;
    a.clearColor(1, 1, 1, 1);
    var T, g, d, _ = function(r, o, a) {
        var n = r.createTexture();
        if (!n) return console.log("Failed to create the texture object"), [ null, null, null, !1 ];
        var l = r.getUniformLocation(r.program, "u_Sampler");
        if (!l) return console.log("Failed to get the storage location of u_Sampler"), [ null, null, null, !1 ];
        var i = wx.createImage();
        return i ? (i.onload = function() {
            c(r, o, e, l, i), t = i;
        }, i.src = a, [ n, l, !0 ]) : (console.log("Failed to create the image object"), 
        [ null, null, null, !1 ]);
    }(a, i, r), E = o(_, 3);
    return g = E[0], d = E[1], (T = E[2]) ? [ g, d, T ] : (console.log("Failed to intialize the texture."), 
    -1);
}

exports.drawImg = function(l, i) {
    if (!n) {
        var g = T(l, i, a), d = o(g, 3);
        if (e = d[0], r = d[1], d[2] < 0) return;
        n = !0;
    }
    var _ = u(i, a);
    _ < 0 ? console.log("Failed to set the vertex information") : t && c(i, _, e, r, t);
};