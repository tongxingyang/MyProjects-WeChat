var e, t;

System.register("chunks:///_virtual/commonSub", [], function() {
    return {
        execute: function() {}
    };
}), e = "virtual:///prerequisite-imports/commonSub", t = "chunks:///_virtual/commonSub", 
System.register(e, [ t ], function(e, t) {
    return {
        setters: [ function(t) {
            var u = {};
            for (var r in t) "default" !== r && "__esModule" !== r && (u[r] = t[r]);
            e(u);
        } ],
        execute: function() {}
    };
});