var e = {
    alpha: !1,
    antialias: !0,
    depth: !0,
    stencil: !0,
    premultipliedAlpha: !1,
    preserveDrawingBuffer: !1,
    powerPreference: "default",
    failIfMajorPerformanceCaveat: !1
}, r = null, t = null, n = null, a = null, o = null, i = null, u = null, l = null, T = 0, _ = [ 61 / 255, 197 / 255, 222 / 255, 1 ], E = [ 100 / 255, 111 / 255, 118 / 255, 1 ], R = null;

function A(e, t) {
    return function(e, t) {
        var n = f(r.VERTEX_SHADER, e), a = f(r.FRAGMENT_SHADER, t), o = r.createProgram();
        if (r.attachShader(o, n), r.attachShader(o, a), r.linkProgram(o), !r.getProgramParameter(o, r.LINK_STATUS)) {
            var i = r.getProgramInfoLog(o);
            console.log("Failed to link program: " + i), r.deleteProgram(o), o = null;
        }
        return r.deleteShader(a), r.deleteShader(n), o;
    }(e, t);
}

function f(e, t) {
    var n = r.createShader(e);
    if (r.shaderSource(n, t), r.compileShader(n), !r.getShaderParameter(n, r.COMPILE_STATUS)) {
        var a = r.getShaderInfoLog(n);
        return console.log("Failed to compile shader: " + a), r.deleteShader(n), null;
    }
    return n;
}

function s() {
    o = requestAnimationFrame(function() {
        !function() {
            r.clearColor(0, 0, 0, 0), r.clear(r.COLOR_BUFFER_BIT), r.useProgram(n), r.activeTexture(r.TEXTURE0), 
            r.bindTexture(r.TEXTURE_2D, i);
            var e = r.getUniformLocation(n, "u_Sampler");
            r.uniform1i(e, 0), r.bindBuffer(r.ARRAY_BUFFER, u);
            var t = r.getAttribLocation(n, "a_Position");
            r.enableVertexAttribArray(t), r.vertexAttribPointer(t, 2, r.FLOAT, !1, 16, 0);
            var o = r.getAttribLocation(n, "a_TexCoord");
            r.enableVertexAttribArray(o), r.vertexAttribPointer(o, 2, r.FLOAT, !1, 16, 8), r.drawArrays(r.TRIANGLE_STRIP, 0, 4), 
            r.useProgram(a);
            var R = r.getUniformLocation(a, "u_CurrentProgress");
            r.uniform1f(R, T);
            var A = r.getUniformLocation(a, "u_ProgressBarColor");
            r.uniform4fv(A, _);
            var f = r.getUniformLocation(a, "u_ProgressBackground");
            r.uniform4fv(f, E), r.bindBuffer(r.ARRAY_BUFFER, l), t = r.getAttribLocation(a, "a_Position"), 
            r.enableVertexAttribArray(t), r.vertexAttribPointer(t, 2, r.FLOAT, !1, 12, 0);
            var s = r.getAttribLocation(a, "a_Progress");
            r.enableVertexAttribArray(s), r.vertexAttribPointer(s, 1, r.FLOAT, !1, 12, 8), r.drawArrays(r.TRIANGLE_STRIP, 0, 4);
        }(), s(), R && (R(), R = null);
    });
}

function c(e) {
    return T = e, new Promise(function(e, r) {
        R = function() {
            e();
        };
    });
}

module.exports = {
    start: function(o, T, _) {
        var E, R, f, g;
        return e.alpha = "true" === o, e.antialias = "false" !== T, "true" === _ && (r = window.canvas.getContext("webgl2", e)), 
        r ? window.WebGL2RenderingContext = !0 : (window.WebGL2RenderingContext = !1, r = window.canvas.getContext("webgl", e)), 
        E = 2 / canvas.width, R = 2 / canvas.height, f = new Float32Array([ E, R, 1, 1, E, R, 1, 0, -E, R, 0, 1, -E, R, 0, 0 ]), 
        u = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, u), r.bufferData(r.ARRAY_BUFFER, f, r.STATIC_DRAW), 
        function() {
            var e = (window.devicePixelRatio >= 2 ? 6 : 3) / canvas.height, t = new Float32Array([ .405, -.25 - e, 1, .405, -.25 + e, 1, -.405, -.25 - e, 0, -.405, -.25 + e, 0 ]);
            l = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, l), r.bufferData(r.ARRAY_BUFFER, t, r.STATIC_DRAW);
        }(), i = r.createTexture(), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, i), 
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), 
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), 
        r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, 2, 2, 0, r.RGBA, r.UNSIGNED_BYTE, new Uint8Array([ 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255 ])), 
        n = A("\nattribute vec4 a_Position;\nattribute vec2 a_TexCoord;\nvarying vec2 v_TexCoord;\nvoid main() {\n    gl_Position = a_Position;  \n    v_TexCoord = a_TexCoord;\n}", "\nprecision mediump float;\nuniform sampler2D u_Sampler;\nvarying vec2 v_TexCoord;\nvoid main() {\n    gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n}"), 
        a = A("\nprecision mediump float;\nattribute vec4 a_Position;\nattribute float a_Progress;\nvarying float v_Progress;\nvoid main() {\n    gl_Position = a_Position;  \n    v_Progress = a_Progress;\n}", "\nprecision mediump float;\nuniform float u_CurrentProgress;\nvarying float v_Progress;\nuniform vec4 u_ProgressBarColor;\nuniform vec4 u_ProgressBackground;\nvoid main() {\n    gl_FragColor = v_Progress <= u_CurrentProgress ? u_ProgressBarColor : u_ProgressBackground;\n}"), 
        s(), (g = "splash.png", new Promise(function(e, r) {
            (t = new Image()).premultiplyAlpha = !1, t.onload = function() {
                e(t);
            }, t.onerror = function(e) {
                r(e);
            }, t.src = g.replace("#", "%23");
        })).then(function() {
            return function() {
                var e = t.width / canvas.width, n = t.height / canvas.height, a = new Float32Array([ e, -n, 1, 1, e, n, 1, 0, -e, -n, 0, 1, -e, n, 0, 0 ]);
                r.bindBuffer(r.ARRAY_BUFFER, u), r.bufferData(r.ARRAY_BUFFER, a, r.STATIC_DRAW);
            }(), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, i), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), 
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), 
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t), 
            c(0);
        });
    },
    end: function() {
        return c(1).then(function() {
            cancelAnimationFrame(o), r.useProgram(null), r.bindTexture(r.TEXTURE_2D, null), 
            r.bindBuffer(r.ARRAY_BUFFER, null), r.deleteTexture(i), r.deleteBuffer(u), r.deleteBuffer(l), 
            r.deleteProgram(n), r.deleteProgram(a);
        });
    },
    setProgress: c
};