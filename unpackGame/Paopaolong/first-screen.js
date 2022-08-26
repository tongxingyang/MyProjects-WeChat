var e = {
  alpha: !1,
  antialias: !0,
  depth: !0,
  stencil: !0,
  premultipliedAlpha: !1,
  preserveDrawingBuffer: !1,
  powerPreference: "default",
  failIfMajorPerformanceCaveat: !1
}, r = null, t = null, a = null, n = null, o = null, i = null, u = null, l = null, T = 0, _ = [ 61 / 255, 197 / 255, 222 / 255, 1 ], E = [ 100 / 255, 111 / 255, 118 / 255, 1 ], R = null;

function f(e, t) {
  return function(e, t) {
      var a = s(r.VERTEX_SHADER, e), n = s(r.FRAGMENT_SHADER, t), o = r.createProgram();
      if (r.attachShader(o, a), r.attachShader(o, n), r.linkProgram(o), !r.getProgramParameter(o, r.LINK_STATUS)) {
          var i = r.getProgramInfoLog(o);
          console.log("Failed to link program: " + i), r.deleteProgram(o), o = null;
      }
      return r.deleteShader(n), r.deleteShader(a), o;
  }(e, t);
}

function s(e, t) {
  var a = r.createShader(e);
  if (r.shaderSource(a, t), r.compileShader(a), !r.getShaderParameter(a, r.COMPILE_STATUS)) {
      var n = r.getShaderInfoLog(a);
      return console.log("Failed to compile shader: " + n), r.deleteShader(a), null;
  }
  return a;
}

function A() {
  o = requestAnimationFrame(function() {
      !function() {
          r.clearColor(0, 0, 0, 0), r.clear(r.COLOR_BUFFER_BIT), r.useProgram(a), r.activeTexture(r.TEXTURE0), 
          r.bindTexture(r.TEXTURE_2D, i);
          var e = r.getUniformLocation(a, "u_Sampler");
          r.uniform1i(e, 0), r.bindBuffer(r.ARRAY_BUFFER, u);
          var t = r.getAttribLocation(a, "a_Position");
          r.enableVertexAttribArray(t), r.vertexAttribPointer(t, 2, r.FLOAT, !1, 16, 0);
          var o = r.getAttribLocation(a, "a_TexCoord");
          r.enableVertexAttribArray(o), r.vertexAttribPointer(o, 2, r.FLOAT, !1, 16, 8), r.drawArrays(r.TRIANGLE_STRIP, 0, 4), 
          r.useProgram(n);
          var R = r.getUniformLocation(n, "u_CurrentProgress");
          r.uniform1f(R, T);
          var f = r.getUniformLocation(n, "u_ProgressBarColor");
          r.uniform4fv(f, _);
          var s = r.getUniformLocation(n, "u_ProgressBackground");
          r.uniform4fv(s, E), r.bindBuffer(r.ARRAY_BUFFER, l), t = r.getAttribLocation(n, "a_Position"), 
          r.enableVertexAttribArray(t), r.vertexAttribPointer(t, 2, r.FLOAT, !1, 12, 0);
          var A = r.getAttribLocation(n, "a_Progress");
          r.enableVertexAttribArray(A), r.vertexAttribPointer(A, 1, r.FLOAT, !1, 12, 8);
      }(), A(), R && (R(), R = null);
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
  start: function(o, T) {
      var _, E, R, s;
      return e.alpha = "true" === o, e.antialias = "false" !== T, r = window.canvas.getContext("webgl", e), 
      _ = 2 / canvas.width, E = 2 / canvas.height, R = new Float32Array([ _, E, 1, 1, _, E, 1, 0, -_, E, 0, 1, -_, E, 0, 0 ]), 
      u = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, u), r.bufferData(r.ARRAY_BUFFER, R, r.STATIC_DRAW), 
      function() {
          var e = (window.devicePixelRatio >= 2 ? 6 : 3) / canvas.height, t = new Float32Array([ .405, -.25 - e, 1, .405, -.25 + e, 1, -.405, -.25 - e, 0, -.405, -.25 + e, 0 ]);
          l = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, l), r.bufferData(r.ARRAY_BUFFER, t, r.STATIC_DRAW);
      }(), i = r.createTexture(), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, i), 
      r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), 
      r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), 
      r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, 2, 2, 0, r.RGBA, r.UNSIGNED_BYTE, new Uint8Array([ 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255 ])), 
      a = f("\nattribute vec4 a_Position;\nattribute vec2 a_TexCoord;\nvarying vec2 v_TexCoord;\nvoid main() {\n    gl_Position = a_Position;  \n    v_TexCoord = a_TexCoord;\n}", "\nprecision mediump float;\nuniform sampler2D u_Sampler;\nvarying vec2 v_TexCoord;\nvoid main() {\n    gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n}"), 
      n = f("\nprecision mediump float;\nattribute vec4 a_Position;\nattribute float a_Progress;\nvarying float v_Progress;\nvoid main() {\n    gl_Position = a_Position;  \n    v_Progress = a_Progress;\n}", "\nprecision mediump float;\nuniform float u_CurrentProgress;\nvarying float v_Progress;\nuniform vec4 u_ProgressBarColor;\nuniform vec4 u_ProgressBackground;\nvoid main() {\n    gl_FragColor = v_Progress <= u_CurrentProgress ? u_ProgressBarColor : u_ProgressBackground;\n}"), 
      A(), (s = "splash1.jpg", 
      new Promise(function(e, r) {
          (t = new Image()).premultiplyAlpha = !1, t.onload = function() {
              e(t);
          }, t.onerror = function(e) {
              r(e);
          }, t.src = s;
      })).then(function() {
          return function() {
              var e = t.height / t.width / (canvas.height / canvas.width), a = new Float32Array([ 1, -e, 1, 1, 1, e, 1, 0, -1, -e, 0, 1, -1, e, 0, 0 ]);
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
          r.deleteProgram(a), r.deleteProgram(n);
      });
  },
  setProgress: c
};