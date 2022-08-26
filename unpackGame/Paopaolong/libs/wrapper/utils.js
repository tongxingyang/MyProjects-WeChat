module.exports = {
    cloneMethod: function(e, o, t, n) {
        o[t] && (e[n = n || t] = o[t].bind(o));
    }
};;