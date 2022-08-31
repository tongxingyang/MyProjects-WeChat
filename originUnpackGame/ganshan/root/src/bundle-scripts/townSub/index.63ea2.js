var t, e;

System.register("chunks:///_virtual/townSub", [], function() {
    return {
        execute: function() {}
    };
}), t = "virtual:///prerequisite-imports/townSub", e = "chunks:///_virtual/townSub", 
System.register(t, [ e ], function(t, e) {
    return {
        setters: [ function(e) {
            var u = {};
            for (var r in e) "default" !== r && "__esModule" !== r && (u[r] = e[r]);
            t(u);
        } ],
        execute: function() {}
    };
});