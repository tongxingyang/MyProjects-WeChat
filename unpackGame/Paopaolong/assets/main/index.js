var e, t;

System.register("chunks:///main.js", [], function() {
    return {
        execute: function() {}
    };
}), e = "virtual:///prerequisite-imports/main", t = "chunks:///main.js", System.register(e, [ t ], function(e, t) {
    return {
        setters: [ function(t) {
            var n = {};
            for (var r in t) "default" !== r && "__esModule" !== r && (n[r] = t[r]);
            e(n);
        } ],
        execute: function() {}
    };
});