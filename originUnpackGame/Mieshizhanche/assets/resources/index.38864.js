var e, r;

System.register("chunks:///_virtual/resources", [], function() {
    return {
        execute: function() {}
    };
}), e = "virtual:///prerequisite-imports/resources", r = "chunks:///_virtual/resources", 
System.register(e, [ r ], function(e, r) {
    return {
        setters: [ function(r) {
            var t = {};
            for (var u in r) "default" !== u && "__esModule" !== u && (t[u] = r[u]);
            e(t);
        } ],
        execute: function() {}
    };
});