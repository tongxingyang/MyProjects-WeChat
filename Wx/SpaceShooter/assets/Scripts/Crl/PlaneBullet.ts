import { _decorator, Component, Node, Sprite, Vec3, v3, tween, Tween } from 'cc';
import Utility from '../Mod/Utility';
import BulletPool from './BulletPool';
import { Plane } from './Plane';
const { ccclass, property } = _decorator;

@ccclass('PlaneBullet')
export class PlaneBullet extends Component {

    _type: number = 1
    _lv: number = 1

    _dmg: number = 1
    _dir: Vec3 = null

    start() {

    }

    init(type: number, lv: number, dir: Vec3, angle: number) {
        this._type = type
        this._lv = lv
        this._dir = dir
        this.node.angle = angle
        this.initSp()
        this.move()
    }

    initSp() {
        Utility.loadSpriteFrame('Texture/Bullets/Plane/s' + this._type + '_bullet_' + (Math.floor((this._lv - 1) / 3) + 1).toString(), this.getComponent(Sprite))
    }

    move() {
        if (!this._dir) return
        let basePos = this.node.position.clone()
        let desPos = v3()
        Vec3.multiplyScalar(desPos, this._dir, 2000)
        Vec3.add(desPos, desPos, basePos)
        tween(this.node).to(1, { position: desPos }).call(() => { this.recoveryBullet() }).start()
    }

    recoveryBullet() {
        Tween.stopAllByTarget(this.node)
        BulletPool.putBullet(this.node)
    }

    update(deltaTime: number) {

    }
}

