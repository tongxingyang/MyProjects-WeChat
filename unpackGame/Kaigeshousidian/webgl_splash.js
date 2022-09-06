var $jscomp = $jscomp || {};

$jscomp.scope = {}, $jscomp.arrayIteratorImpl = function(r) {
    var e = 0;
    return function() {
        return e < r.length ? {
            done: !1,
            value: r[e++]
        } : {
            done: !0
        };
    };
}, $jscomp.arrayIterator = function(r) {
    return {
        next: $jscomp.arrayIteratorImpl(r)
    };
}, $jscomp.makeIterator = function(r) {
    var e = "undefined" != typeof Symbol && Symbol.iterator && r[Symbol.iterator];
    return e ? e.call(r) : $jscomp.arrayIterator(r);
};

var TEXTURE, USAMPLE, IMAGE, VSHADER_SOURCE = "attribute vec4 a_Position;attribute vec2 a_TexCoord;varying vec2 v_TexCoord;void main() {gl_Position = a_Position;v_TexCoord = a_TexCoord;}", FSHADER_SOURCE = "#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform sampler2D u_Sampler;varying vec2 v_TexCoord;void main() {gl_FragColor = texture2D(u_Sampler, v_TexCoord);}", VERTICES = new Float32Array([ -1, 1, 0, 0, -1, -1, 0, 1, 1, 1, 1, 0, 1, -1, 1, 1 ]), INITENV = !1;

function initShaders(r, e, t) {
    return !!(e = createProgram(r, e, t)) && (r.useProgram(e), r.program = e, !0);
}

function createProgram(r, e, t) {
    if (e = loadShader(r, r.VERTEX_SHADER, e), t = loadShader(r, r.FRAGMENT_SHADER, t), 
    !e || !t) return null;
    var a = r.createProgram();
    return a ? (r.attachShader(a, e), r.attachShader(a, t), r.linkProgram(a), r.getProgramParameter(a, r.LINK_STATUS) ? a : (r.getProgramInfoLog(a), 
    r.deleteProgram(a), r.deleteShader(t), r.deleteShader(e), null)) : null;
}

function loadShader(r, e, t) {
    return null == (e = r.createShader(e)) ? null : (r.shaderSource(e, t), r.compileShader(e), 
    r.getShaderParameter(e, r.COMPILE_STATUS) ? e : (r.getShaderInfoLog(e), r.deleteShader(e), 
    null));
}

function initVertexBuffers(r, e) {
    var t = e || new Float32Array([ -1, 1, 0, 1, -1, -1, 0, 0, 1, 1, 1, 1, 1, -1, 1, 0 ]), a = r.createBuffer();
    return a ? (r.bindBuffer(r.ARRAY_BUFFER, a), r.bufferData(r.ARRAY_BUFFER, t, r.STATIC_DRAW), 
    t = t.BYTES_PER_ELEMENT, 0 > (a = r.getAttribLocation(r.program, "a_Position")) ? -1 : (r.vertexAttribPointer(a, 2, r.FLOAT, !1, 4 * t, 0), 
    r.enableVertexAttribArray(a), 0 > (a = r.getAttribLocation(r.program, "a_TexCoord")) ? -1 : (r.vertexAttribPointer(a, 2, r.FLOAT, !1, 4 * t, 2 * t), 
    r.enableVertexAttribArray(a), 4))) : -1;
}

function initTextures(r, e, t) {
    var a = r.createTexture();
    if (!a) return [ null, null, null, !1 ];
    var n = r.getUniformLocation(r.program, "u_Sampler");
    if (!n) return [ null, null, null, !1 ];
    var o = wx.createImage();
    return o ? (o.onload = function() {
        loadTexture(r, e, TEXTURE, n, o), IMAGE = o;
    }, o.src = t, [ a, n, !0 ]) : [ null, null, null, !1 ];
}

function loadTexture(r, e, t, a, n) {
    r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, t), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), 
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), 
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texImage2D(r.TEXTURE_2D, 0, r.RGB, r.RGB, r.UNSIGNED_BYTE, n), 
    r.uniform1i(a, 0), r.clear(r.COLOR_BUFFER_BIT), r.drawArrays(r.TRIANGLE_STRIP, 0, e);
}

function InitGLEnv(r, e, t) {
    return e ? initShaders(e, VSHADER_SOURCE, FSHADER_SOURCE) ? 0 > (t = initVertexBuffers(e, t)) ? -1 : (e.clearColor(1, 1, 1, 1), 
    r = (t = $jscomp.makeIterator(initTextures(e, t, r))).next().value, e = t.next().value, 
    (t = t.next().value) ? [ r, e, t ] : -1) : -1 : [ -1 ];
}

function drawImg(r, e) {
    if (!INITENV) {
        var t = $jscomp.makeIterator(InitGLEnv(r, e, VERTICES));
        if (TEXTURE = t.next().value, USAMPLE = t.next().value, 0 > t.next().value) return;
        INITENV = !0;
    }
    0 > (t = initVertexBuffers(e, VERTICES)) || IMAGE && loadTexture(e, t, TEXTURE, USAMPLE, IMAGE);
}

exports.drawImg = drawImg;