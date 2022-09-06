!function() {
    if (cc && cc.internal && cc.internal.EditBox) {
        var e = cc.internal.EditBox, n = cc.js, t = e.KeyboardReturnType, o = null, r = null;
        n.extend(a, e._EditBoxImpl), e._EditBoxImpl = a, Object.assign(a.prototype, {
            init: function(e) {
                e ? this._delegate = e : cc.error("EditBox init failed");
            },
            beginEditing: function() {
                var e = this;
                this._editing || this._ensureKeyboardHide(function() {
                    var n = e._delegate;
                    e._showKeyboard(), e._registerKeyboardEvent(), e._editing = !0, r = e, n._editBoxEditingDidBegan();
                });
            },
            endEditing: function() {
                this._hideKeyboard();
                var e = this._eventListeners;
                e.onKeyboardComplete && e.onKeyboardComplete();
            },
            _registerKeyboardEvent: function() {
                var e = this, n = this._delegate, t = this._eventListeners;
                t.onKeyboardInput = function(e) {
                    n._string !== e.value && n._editBoxTextChanged(e.value);
                }, t.onKeyboardConfirm = function(t) {
                    n._editBoxEditingReturn();
                    var o = e._eventListeners;
                    o.onKeyboardComplete && o.onKeyboardComplete();
                }, t.onKeyboardComplete = function() {
                    e._editing = !1, r = null, e._unregisterKeyboardEvent(), n._editBoxEditingDidEnded();
                }, __globalAdapter.onKeyboardInput(t.onKeyboardInput), __globalAdapter.onKeyboardConfirm(t.onKeyboardConfirm), 
                __globalAdapter.onKeyboardComplete(t.onKeyboardComplete);
            },
            _unregisterKeyboardEvent: function() {
                var e = this._eventListeners;
                e.onKeyboardInput && (__globalAdapter.offKeyboardInput(e.onKeyboardInput), e.onKeyboardInput = null), 
                e.onKeyboardConfirm && (__globalAdapter.offKeyboardConfirm(e.onKeyboardConfirm), 
                e.onKeyboardConfirm = null), e.onKeyboardComplete && (__globalAdapter.offKeyboardComplete(e.onKeyboardComplete), 
                e.onKeyboardComplete = null);
            },
            _otherEditing: function() {
                return !!r && r !== this && r._editing;
            },
            _ensureKeyboardHide: function(e) {
                var n = this._otherEditing();
                if (!n && !o) return e();
                o && clearTimeout(o), n && r.endEditing(), o = setTimeout(function() {
                    o = null, e();
                }, 600);
            },
            _showKeyboard: function() {
                var n = this._delegate, t = n.inputMode === e.InputMode.ANY;
                __globalAdapter.showKeyboard({
                    defaultValue: n.string,
                    maxLength: n.maxLength < 0 ? 65535 : n.maxLength,
                    multiple: t,
                    confirmHold: !1,
                    confirmType: i(n.returnType),
                    success: function(e) {},
                    fail: function(e) {
                        cc.warn(e.errMsg);
                    }
                });
            },
            _hideKeyboard: function() {
                __globalAdapter.hideKeyboard({
                    success: function(e) {},
                    fail: function(e) {
                        cc.warn(e.errMsg);
                    }
                });
            }
        });
    }
    function i(e) {
        switch (e) {
          case t.DEFAULT:
          case t.DONE:
            return "done";

          case t.SEND:
            return "send";

          case t.SEARCH:
            return "search";

          case t.GO:
            return "go";

          case t.NEXT:
            return "next";
        }
        return "done";
    }
    function a() {
        this._delegate = null, this._editing = !1, this._eventListeners = {
            onKeyboardInput: null,
            onKeyboardConfirm: null,
            onKeyboardComplete: null
        };
    }
}();