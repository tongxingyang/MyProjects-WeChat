!function() {
    "use strict";
    const e = new Float32Array([ -1, 1, 0, 0, -1, -1, 0, 1, 1, 1, 1, 0, 1, -1, 1, 1 ]);
    var r, t, o, a = !1;
    function n(e, r, t) {
        var o = function(e, r, t) {
            var o = l(e, e.VERTEX_SHADER, r), a = l(e, e.FRAGMENT_SHADER, t);
            if (!o || !a) return null;
            var n = e.createProgram();
            if (!n) return null;
            if (e.attachShader(n, o), e.attachShader(n, a), e.linkProgram(n), !e.getProgramParameter(n, e.LINK_STATUS)) {
                var i = e.getProgramInfoLog(n);
                return console.log("Failed to link program: " + i), e.deleteProgram(n), e.deleteShader(a), 
                e.deleteShader(o), null;
            }
            return n;
        }(e, r, t);
        return o ? (e.useProgram(o), e.program = o, !0) : (console.log("Failed to create program"), 
        !1);
    }
    function l(e, r, t) {
        var o = e.createShader(r);
        if (null == o) return console.log("unable to create shader"), null;
        if (e.shaderSource(o, t), e.compileShader(o), !e.getShaderParameter(o, e.COMPILE_STATUS)) {
            var a = e.getShaderInfoLog(o);
            return console.log("Failed to compile shader: " + a), e.deleteShader(o), null;
        }
        return o;
    }
    function i(e, r) {
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
    function u(e, r, t, o, a) {
        e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), 
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), 
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texImage2D(e.TEXTURE_2D, 0, e.RGB, e.RGB, e.UNSIGNED_BYTE, a), 
        e.uniform1i(o, 0), e.clear(e.COLOR_BUFFER_BIT), e.drawArrays(e.TRIANGLE_STRIP, 0, r);
    }
    function c(e, t, a) {
        if (!t) return console.log("Failed to get the rendering context for WebGL"), [ -1 ];
        if (!n(t, "attribute vec4 a_Position;attribute vec2 a_TexCoord;varying vec2 v_TexCoord;void main() {gl_Position = a_Position;v_TexCoord = a_TexCoord;}", "#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform sampler2D u_Sampler;varying vec2 v_TexCoord;void main() {gl_FragColor = texture2D(u_Sampler, v_TexCoord);}")) return console.log("Failed to intialize shaders."), 
        -1;
        var l = i(t, a);
        if (l < 0) return console.log("Failed to set the vertex information"), -1;
        t.clearColor(1, 1, 1, 1);
        var c, T, g = !0;
        return [c, T, g] = function(e, t, a) {
            var n = e.createTexture();
            if (!n) return console.log("Failed to create the texture object"), [ null, null, null, !1 ];
            var l = e.getUniformLocation(e.program, "u_Sampler");
            if (!l) return console.log("Failed to get the storage location of u_Sampler"), [ null, null, null, !1 ];
            var i = wx.createImage();
            return i ? (i.onload = function() {
                u(e, t, r, l, i), o = i;
            }, i.src = a, [ n, l, !0 ]) : (console.log("Failed to create the image object"), 
            [ null, null, null, !1 ]);
        }(t, l, e), g ? [ c, T, g ] : (console.log("Failed to intialize the texture."), 
        -1);
    }
    exports.drawImg = function(n, l) {
        if (!a) {
            var T = 0;
            if ([r, t, T] = c(n, l, e), T < 0) return;
            a = !0;
        }
        var g = i(l, e);
        g < 0 ? console.log("Failed to set the vertex information") : o && u(l, g, r, t, o);
    };
}();