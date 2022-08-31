cc.Node.prototype.getChildByNameEx = function(h) {
    return this.__childCaches = this.__childCaches || {}, this.__childCaches[h] && this.__childCaches[h].getChildByName ? this.__childCaches[h] : (this.__childCaches[h] = this.getChildByName(h), 
    this.__childCaches[h]);
}, cc.Node.prototype.getComponentEx = function(h) {
    this.__componentCaches = this.__componentCaches || {};
    var t = h.name || h || "";
    return this.__componentCaches[t] && this.__componentCaches[t].destroy ? this.__componentCaches[t] : (this.__componentCaches[t] = this.getComponent(h), 
    this.__componentCaches[t]);
};