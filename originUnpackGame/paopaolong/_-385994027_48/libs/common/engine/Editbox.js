!function() {
    if (cc && cc.EditBoxComponent) {
        var e = cc.EditBoxComponent, n = cc.js, o = e.KeyboardReturnType, t = null, r = null;
        n.extend(d, e._EditBoxImpl), e._EditBoxImpl = d, Object.assign(d.prototype, {
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
                var e = this, n = this._delegate, o = this._eventListeners;
                o.onKeyboardInput = function(e) {
                    n._string !== e.value && n._editBoxTextChanged(e.value);
                }, o.onKeyboardConfirm = function(o) {
                    n._editBoxEditingReturn();
                    var t = e._eventListeners;
                    t.onKeyboardComplete && t.onKeyboardComplete();
                }, o.onKeyboardComplete = function() {
                    e._editing = !1, r = null, e._unregisterKeyboardEvent(), n._editBoxEditingDidEnded();
                }, __globalAdapter.onKeyboardInput(o.onKeyboardInput), __globalAdapter.onKeyboardConfirm(o.onKeyboardConfirm), 
                __globalAdapter.onKeyboardComplete(o.onKeyboardComplete);
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
                if (!n && !t) return e();
                t && clearTimeout(t), n && r.endEditing(), t = setTimeout(function() {
                    t = null, e();
                }, 600);
            },
            _showKeyboard: function() {
                var n = this._delegate, o = n.inputMode === e.InputMode.ANY;
                __globalAdapter.showKeyboard({
                    defaultValue: n.string,
                    maxLength: n.maxLength < 0 ? 65535 : n.maxLength,
                    multiple: o,
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
          case o.DEFAULT:
          case o.DONE:
            return "done";

          case o.SEND:
            return "send";

          case o.SEARCH:
            return "search";

          case o.GO:
            return "go";

          case o.NEXT:
            return "next";
        }
        return "done";
    }
    function d() {
        this._delegate = null, this._editing = !1, this._eventListeners = {
            onKeyboardInput: null,
            onKeyboardConfirm: null,
            onKeyboardComplete: null
        };
    }
}();