var e = wx.getSystemInfoSync(), n = cc.internal.inputManager, t = cc.eventManager, o = cc.Event.EventKeyboard, s = cc.Event.EventMouse;

"windows" === e.platform && (n.registerSystemEvent = function() {
    var e;
    this._isRegisterEvent || (this._glView = cc.view, e = {
        Backspace: 8,
        Tab: 9,
        Enter: 13,
        Shift: 16,
        Control: 17,
        Alt: 18,
        CapsLock: 20,
        Escape: 27,
        Space: 32,
        ArrowLeft: 37,
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        Insert: 45,
        Delete: 46,
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        9: 57,
        a: 65,
        b: 66,
        c: 67,
        d: 68,
        e: 69,
        f: 70,
        g: 71,
        h: 72,
        i: 73,
        j: 74,
        k: 75,
        l: 76,
        m: 77,
        n: 78,
        o: 79,
        p: 80,
        q: 81,
        r: 82,
        s: 83,
        t: 84,
        u: 85,
        v: 86,
        w: 87,
        x: 88,
        y: 89,
        z: 90,
        "*": 106,
        "+": 107,
        "-": 109,
        "/": 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        ScrollLock: 145,
        ";": 186,
        "=": 187,
        ",": 188,
        ".": 190,
        "`": 192,
        "[": 219,
        "\\": 220,
        "]": 221,
        '"': 222
    }, wx.onKeyDown(function(n) {
        return t.dispatchEvent(new o(e[n.key] || 0, !0));
    }), wx.onKeyUp(function(n) {
        return t.dispatchEvent(new o(e[n.key] || 0, !1));
    }), function() {
        var e = {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
        function o(o, s, c) {
            wx[o](function(o) {
                var i = n.getMouseEvent(o, e, s);
                i.setButton(o.button || 0), c(o, i), t.dispatchEvent(i);
            });
        }
        o("onMouseDown", s.DOWN, function(t, o) {
            n._mousePressed = !0, n.handleTouchesBegin([ n.getTouchByXY(o, t.x, t.y, e) ]);
        }), o("onMouseUp", s.UP, function(t, o) {
            n._mousePressed = !1, n.handleTouchesEnd([ n.getTouchByXY(o, t.x, t.y, e) ]);
        }), o("onMouseMove", s.MOVE, function(t, o) {
            n.handleTouchesMove([ n.getTouchByXY(o, t.x, t.y, e) ]), n._mousePressed || o.setButton(null);
        }), o("onWheel", s.SCROLL, function(e, n) {
            n.setScrollData(0, -e.deltaY);
        });
    }(), this._isRegisterEvent = !0);
});