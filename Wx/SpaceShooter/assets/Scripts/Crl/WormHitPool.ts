import { NodePool } from "cc";

export default class WormHitPool {

    static _pool: NodePool = null

    static initPool() {
        this._pool = new NodePool()
    }

    static getBullet() {
        return this._pool.get()
    }

    static putBullet(node) {
        this._pool.put(node)
    }

    static clearPool() {
        this._pool.clear()
    }

    static get poolSize() {
        return this._pool.size()
    }
}