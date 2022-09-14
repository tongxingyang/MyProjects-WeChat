function s0b(a, b) {
    var c = s0a();
    return s0b = function(d, e) {
        d = d - 209;
        var f = c[d];
        return f;
    }, s0b(a, b);
}

var s0v = s0b;

(function(a, b) {
    var u = s0b, d = a();
    while (!![]) {
        try {
            var g = -parseInt(u(281)) / 1 + -parseInt(u(283)) / 2 + parseInt(u(266)) / 3 + -parseInt(u(274)) / 4 + parseInt(u(240)) / 5 * (-parseInt(u(265)) / 6) + -parseInt(u(211)) / 7 + parseInt(u(244)) / 8;
            if (g === b) break; else d["push"](d["shift"]());
        } catch (h) {
            h = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(h);
            d["push"](d["shift"]());
        }
    }
})(s0a, 102153);

var s0c = {
    alpha: !1,
    antialias: !0,
    depth: !0,
    stencil: !0,
    premultipliedAlpha: !1,
    preserveDrawingBuffer: !1,
    powerPreference: s0v(267),
    failIfMajorPerformanceCaveat: !1
}, s0d = null, s0e = null, s0f = null, s0g = null, s0h = null, s0i = null, s0j = null, s0k = null, s0l = 0, s0m = [ 61 / 255, 197 / 255, 222 / 255, 1 ], s0n = [ 100 / 255, 111 / 255, 118 / 255, 1 ], s0o = null;

function s0p(a, b) {
    return function(d, g) {
        var w = s0b, h = s0q(s0d["VERTEX_SHADER"], d), j = s0q(s0d[w(259)], g), k = s0d[w(235)]();
        if (s0d[w(217)](k, h), s0d[w(217)](k, j), s0d[w(261)](k), !s0d[w(262)](k, s0d[w(225)])) {
            var l = s0d[w(263)](k);
            console[w(273)](w(275) + l), s0d[w(255)](k), k = null;
        }
        return s0d["deleteShader"](j), s0d[w(231)](h), k;
    }(a, b);
}

function s0q(b, d) {
    var x = s0v, g = {
        SHKfG: function(j, k) {
            return j + k;
        }
    }, h = s0d["createShader"](b);
    if (s0d[x(276)](h, d), s0d["compileShader"](h), !s0d[x(280)](h, s0d[x(209)])) {
        var i = s0d["getShaderInfoLog"](h);
        return console["log"](g["SHKfG"](x(279), i)), s0d[x(231)](h), null;
    }
    return h;
}

function s0r() {
    var y = s0v, a = {
        MOiZj: y(284),
        uCVjR: function(b) {
            return b();
        }
    };
    s0h = requestAnimationFrame(function() {
        !function() {
            var z = s0b, b = "12|5|3|6|2|8|11|1|4|9|7|13|0|14|10"[z(243)]("|"), d = 0;
            while (!![]) {
                switch (b[d++]) {
                  case "0":
                    s0d["uniform4fv"](l, s0n), s0d[z(249)](s0d[z(253)], s0k), i = s0d["getAttribLocation"](s0g, "a_Position"), 
                    s0d[z(270)](i), s0d["vertexAttribPointer"](i, 2, s0d["FLOAT"], !1, 12, 0);
                    continue;

                  case "1":
                    var g = s0d["getUniformLocation"](s0g, z(282));
                    continue;

                  case "2":
                    s0d["enableVertexAttribArray"](i), s0d["vertexAttribPointer"](i, 2, s0d[z(242)], !1, 16, 0);
                    continue;

                  case "3":
                    s0d["uniform1i"](h, 0), s0d["bindBuffer"](s0d["ARRAY_BUFFER"], s0j);
                    continue;

                  case "4":
                    s0d["uniform1f"](g, s0l);
                    continue;

                  case "5":
                    var h = s0d["getUniformLocation"](s0f, "u_Sampler");
                    continue;

                  case "6":
                    var i = s0d["getAttribLocation"](s0f, "a_Position");
                    continue;

                  case "7":
                    s0d["uniform4fv"](k, s0m);
                    continue;

                  case "8":
                    var j = s0d[z(222)](s0f, a["MOiZj"]);
                    continue;

                  case "9":
                    var k = s0d["getUniformLocation"](s0g, z(250));
                    continue;

                  case "10":
                    s0d[z(270)](m), s0d[z(212)](m, 1, s0d[z(242)], !1, 12, 8), s0d["drawArrays"](s0d[z(220)], 0, 4);
                    continue;

                  case "11":
                    s0d["enableVertexAttribArray"](j), s0d[z(212)](j, 2, s0d["FLOAT"], !1, 16, 8), s0d[z(233)](s0d[z(220)], 0, 4), 
                    s0d["useProgram"](s0g);
                    continue;

                  case "12":
                    s0d[z(232)](0, 0, 0, 0), s0d[z(218)](s0d[z(254)]), s0d[z(216)](s0f), s0d[z(260)](s0d["TEXTURE0"]), 
                    s0d[z(268)](s0d[z(269)], s0i);
                    continue;

                  case "13":
                    var l = s0d[z(238)](s0g, "u_ProgressBackground");
                    continue;

                  case "14":
                    var m = s0d[z(222)](s0g, z(234));
                    continue;
                }
                break;
            }
        }(), s0r(), s0o && (a["uCVjR"](s0o), s0o = null);
    });
}

function s0a() {
    var I = [ "487372wQjcsh", "Failed to link program: ", "shaderSource", "RGBA", "true", "Failed to compile shader: ", "getShaderParameter", "13842ypSBaa", "u_CurrentProgress", "325220vABGOV", "a_TexCoord", "COMPILE_STATUS", "WebGL2RenderingContext", "470666nISMHh", "vertexAttribPointer", "deleteBuffer", "webgl2", "exports", "useProgram", "attachShader", "clear", "bufferData", "TRIANGLE_STRIP", "LINEAR", "getAttribLocation", "onload", "canvas", "LINK_STATUS", "STATIC_DRAW", "texImage2D", "TEXTURE_WRAP_T", "onerror", "\nprecision mediump float;\nuniform sampler2D u_Sampler;\nvarying vec2 v_TexCoord;\nvoid main() {\n    gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n}", "deleteShader", "clearColor", "drawArrays", "a_Progress", "createProgram", "createBuffer", "src", "getUniformLocation", "\nprecision mediump float;\nattribute vec4 a_Position;\nattribute float a_Progress;\nvarying float v_Progress;\nvoid main() {\n    gl_Position = a_Position;  \n    v_Progress = a_Progress;\n}", "435mBrkWO", "getContext", "FLOAT", "split", "4339352pFaUNz", "\nattribute vec4 a_Position;\nattribute vec2 a_TexCoord;\nvarying vec2 v_TexCoord;\nvoid main() {\n    gl_Position = a_Position;  \n    v_TexCoord = a_TexCoord;\n}", "XyQvz", "devicePixelRatio", "texParameteri", "bindBuffer", "u_ProgressBarColor", "TEXTURE_MIN_FILTER", "splash.jpg", "ARRAY_BUFFER", "COLOR_BUFFER_BIT", "deleteProgram", "antialias", "then", "width", "FRAGMENT_SHADER", "activeTexture", "linkProgram", "getProgramParameter", "getProgramInfoLog", "CLAMP_TO_EDGE", "7002elUQVt", "80388UDOqrK", "default", "bindTexture", "TEXTURE_2D", "enableVertexAttribArray", "TEXTURE_MAG_FILTER", "height", "log" ];
    s0a = function() {
        return I;
    };
    return s0a();
}

function s0s(a) {
    return s0l = a, new Promise(function(b, d) {
        s0o = function() {
            b();
        };
    });
}

module[s0v(215)] = {
    start: function(a, b, d) {
        var B = s0v, h = {
            wsvFX: function(m, n, p) {
                return m(n, p);
            },
            gNuih: "\nprecision mediump float;\nuniform float u_CurrentProgress;\nvarying float v_Progress;\nuniform vec4 u_ProgressBarColor;\nuniform vec4 u_ProgressBackground;\nvoid main() {\n    gl_FragColor = v_Progress <= u_CurrentProgress ? u_ProgressBarColor : u_ProgressBackground;\n}"
        }, i, j, k, l;
        return s0c["alpha"] = B(278) === a, s0c[B(256)] = "false" !== b, "true" === d && (s0d = window[B(224)][B(241)](B(214), s0c)), 
        s0d ? window[B(210)] = !0 : (window[B(210)] = !1, s0d = window[B(224)]["getContext"]("webgl", s0c)), 
        i = 2 / canvas[B(258)], j = 2 / canvas[B(272)], k = new Float32Array([ i, j, 1, 1, i, j, 1, 0, -i, j, 0, 1, -i, j, 0, 0 ]), 
        s0j = s0d["createBuffer"](), s0d["bindBuffer"](s0d["ARRAY_BUFFER"], s0j), s0d[B(219)](s0d[B(253)], k, s0d[B(226)]), 
        function() {
            var C = B, m = (window[C(247)] >= 2 ? 12 : 6) / canvas["height"], n = new Float32Array([ .405, -.65 - m, 1, .405, -.65 + m, 1, -.405, -.65 - m, 0, -.405, -.65 + m, 0 ]);
            s0k = s0d[C(236)](), s0d[C(249)](s0d[C(253)], s0k), s0d[C(219)](s0d["ARRAY_BUFFER"], n, s0d["STATIC_DRAW"]);
        }(), s0i = s0d["createTexture"](), s0d["activeTexture"](s0d["TEXTURE0"]), s0d["bindTexture"](s0d[B(269)], s0i), 
        s0d[B(248)](s0d[B(269)], s0d["TEXTURE_MIN_FILTER"], s0d["LINEAR"]), s0d[B(248)](s0d[B(269)], s0d[B(271)], s0d["LINEAR"]), 
        s0d[B(248)](s0d[B(269)], s0d["TEXTURE_WRAP_S"], s0d[B(264)]), s0d[B(248)](s0d["TEXTURE_2D"], s0d[B(228)], s0d[B(264)]), 
        s0d[B(227)](s0d[B(269)], 0, s0d[B(277)], 2, 2, 0, s0d["RGBA"], s0d["UNSIGNED_BYTE"], new Uint8Array([ 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255 ])), 
        s0f = h["wsvFX"](s0p, B(245), B(230)), s0g = s0p(B(239), h["gNuih"]), s0r(), (l = B(252), 
        new Promise(function(m, n) {
            var D = B, p = {
                XyQvz: function(q, t) {
                    return q(t);
                }
            };
            (s0e = new Image())["premultiplyAlpha"] = !1, s0e[D(223)] = function() {
                var E = D;
                p[E(246)](m, s0e);
            }, s0e[D(229)] = function(q) {
                n(q);
            }, s0e[D(237)] = l["replace"]("#", "%23");
        }))[B(257)](function() {
            var G = B;
            return function() {
                var F = s0b, m = 1, p = 1, q = new Float32Array([ m, -p, 1, 1, m, p, 1, 0, -m, -p, 0, 1, -m, p, 0, 0 ]);
                s0d[F(249)](s0d["ARRAY_BUFFER"], s0j), s0d[F(219)](s0d["ARRAY_BUFFER"], q, s0d["STATIC_DRAW"]);
            }(), s0d[G(260)](s0d["TEXTURE0"]), s0d["bindTexture"](s0d[G(269)], s0i), s0d["texParameteri"](s0d[G(269)], s0d[G(251)], s0d[G(221)]), 
            s0d["texParameteri"](s0d["TEXTURE_2D"], s0d["TEXTURE_MAG_FILTER"], s0d["LINEAR"]), 
            s0d["texParameteri"](s0d[G(269)], s0d["TEXTURE_WRAP_S"], s0d["CLAMP_TO_EDGE"]), 
            s0d[G(248)](s0d[G(269)], s0d[G(228)], s0d[G(264)]), s0d[G(227)](s0d[G(269)], 0, s0d["RGBA"], s0d["RGBA"], s0d["UNSIGNED_BYTE"], s0e), 
            s0s(0);
        });
    },
    end: function() {
        cancelAnimationFrame(s0h), setTimeout(() => {
            var H = s0b;
            s0d["deleteTexture"](s0i), s0d[H(213)](s0j), s0d["deleteBuffer"](s0k), s0d["deleteProgram"](s0f), 
            s0d[H(255)](s0g);
        }, 0);
    },
    setProgress: s0s
};