import { _decorator, Component, Node, Sprite, Vec3, v3, tween, Tween, Intersection2D, UITransform, instantiate, Prefab, resources } from 'cc';
import Utility from '../Mod/Utility';
import { Boss1 } from './Boss1';
import { Boss2 } from './Boss2';
import { Boss3 } from './Boss3';
import BulletPool from './BulletPool';
import { GameLogic } from './GameLogic';
import { Plane } from './Plane';
import { Worm } from './Worm';
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

    checkCollWorm() {
        for (let i = 0; i < GameLogic.Share.wormArr.length; i++) {
            let worm = GameLogic.Share.wormArr[i]
            if (worm.isValid && Intersection2D.rectRect(this.getComponent(UITransform).getBoundingBoxToWorld(), worm.getComponent(UITransform).getBoundingBoxToWorld())) {
                worm.getComponent(Worm).decHp()
                this.recoveryBullet()
                break
            }
        }
    }

    checkCollBoss1() {
        if (GameLogic.Share.boss1.active && !GameLogic.Share.boss1.getComponent(Boss1).isDied && Vec3.distance(this.node.position, GameLogic.Share.boss1.position) <= 150) {
            this.createBossHitFX(Utility.getCanvasPos(this.node))
            GameLogic.Share.boss1.getComponent(Boss1).decHp(1)
            this.recoveryBullet()
        }
    }
    checkCollBoss2() {
        if (GameLogic.Share.boss2.active && !GameLogic.Share.boss2.getComponent(Boss2).isDied && Vec3.distance(this.node.position, GameLogic.Share.boss2.position) <= 150) {
            this.createBossHitFX(Utility.getCanvasPos(this.node))
            GameLogic.Share.boss2.getComponent(Boss2).decHp(1)
            this.recoveryBullet()
        }
    }
    checkCollBoss3() {
        if (GameLogic.Share.boss3.active && !GameLogic.Share.boss3.getComponent(Boss3).isDied && Vec3.distance(this.node.position, GameLogic.Share.boss3.position) <= 100) {
            this.createBossHitFX(Utility.getCanvasPos(this.node))
            GameLogic.Share.boss3.getComponent(Boss3).decHp(1)
            this.recoveryBullet()
        }
    }

    createBossHitFX(pos) {
        resources.load('Prefabs/Effects/bossHit', Prefab, (err, res) => {
            let fx = instantiate(res)
            fx.setPosition(pos)
            fx.active = true
            GameLogic.Share.effectNode.addChild(fx)
            this.scheduleOnce(() => { fx.destroy(); }, 1)
        })
    }

    update(deltaTime: number) {
        if (this._type == 6 && this._lv >= 4) {
            this.node.angle += 20
        }
        this.checkCollWorm()
        this.checkCollBoss1()
        this.checkCollBoss2()
        this.checkCollBoss3()
    }
}

