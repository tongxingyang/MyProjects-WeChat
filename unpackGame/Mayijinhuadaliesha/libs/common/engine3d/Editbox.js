!function() {
    if (cc && cc.EditBoxComponent) {
        var e = cc.EditBoxComponent, n = cc.js, t = e.KeyboardReturnType, o = null;
        n.extend(r, e._EditBoxImpl), e._EditBoxImpl = r, Object.assign(r.prototype, {
            init: function(e) {
                e ? this._delegate = e : cc.error("EditBox init failed");
            },
            setFocus: function(e) {
                e ? this.beginEditing() : this.endEditing();
            },
            isFocused: function() {
                return this._editing;
            },
            beginEditing: function() {
                if (o !== this) {
                    var e = this._delegate;
                    if (o) o._eventListeners.onKeyboardComplete(), __globalAdapter.updateKeyboard && __globalAdapter.updateKeyboard({
                        value: e.string
                    }); else this._showKeyboard();
                    this._registerKeyboardEvent(), this._editing = !0, o = this, e._editBoxEditingDidBegan();
                }
            },
            endEditing: function() {
                this._hideKeyboard();
                var e = this._eventListeners;
                e.onKeyboardComplete && e.onKeyboardComplete();
            },
            setMaxLength: function(e) {
                isNaN(e) || (e < 0 && (e = 65535), this._maxLength = e);
            },
            _registerKeyboardEvent: function() {
                var e = this, n = this._delegate, t = this._eventListeners;
                t.onKeyboardInput = function(t) {
                    t.value.length > e._maxLength && (t.value = t.value.slice(0, e._maxLength)), n._string !== t.value && n._editBoxTextChanged(t.value);
                }, t.onKeyboardConfirm = function(t) {
                    n._editBoxEditingReturn();
                    var o = e._eventListeners;
                    o.onKeyboardComplete && o.onKeyboardComplete();
                }, t.onKeyboardComplete = function() {
                    e._editing = !1, o = null, e._unregisterKeyboardEvent(), n._editBoxEditingDidEnded();
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
            _showKeyboard: function() {
                var n = this._delegate, t = n.inputMode === e.InputMode.ANY;
                this.setMaxLength(n.maxLength), __globalAdapter.showKeyboard({
                    defaultValue: n.string,
                    maxLength: this._maxLength,
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
    function r() {
        this._delegate = null, this._editing = !1, this._eventListeners = {
            onKeyboardInput: null,
            onKeyboardConfirm: null,
            onKeyboardComplete: null
        };
    }
}();