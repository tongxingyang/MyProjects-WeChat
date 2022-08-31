Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

for (var a = {
    data: []
}, r = 0; r < 30; ++r) {
    var e = {};
    e.rankScore = Math.floor(500 * Math.random()), e.avatarUrl = "openDataContext/render/img_avatar.png", 
    e.nickname = "Player_" + r, e.stars = 0, e.level = 0, a.data.push(e);
}

a.data.sort(function(a, r) {
    return r.rankScore - a.rankScore;
});

var t = a;

exports.default = t;