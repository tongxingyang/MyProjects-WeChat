import { _decorator, Component, Node, dragonBones, instantiate, Prefab, ProgressBar, resources, tween, v3, Vec3, view } from 'cc';
import { UpDownLoop } from '../Mod/UpDownLoop';
import Utility from '../Mod/Utility';
import { BossBullet2_1 } from './BossBullet/BossBullet2_1';
import { BossBullet2_2 } from './BossBullet/BossBullet2_2';
import { GameLogic } from './GameLogic';
import { Plane } from './Plane';
const { ccclass, property } = _decorator;

@ccclass('Boss2')
export class Boss2 extends Component {

    _db: Node = null
    _ani: dragonBones.ArmatureDisplay = null
    _hpBar: ProgressBar = null
    _atk1: Node = null
    _atk2: Node = null

    hpMax: number = 300
    hp: number = 300
    isReady: boolean = false
    isDied: boolean = false
    isShooting: boolean = false
    isLeft: boolean = true

    onLoad() {
        this._db = this.node.getChildByName('db')
        this._ani = this._db.getComponent(dragonBones.ArmatureDisplay)
        this._hpBar = this.node.getChildByName('hpBar').getComponent(ProgressBar)
        this._atk1 = this.node.getChildByName('atk1')
        this._atk2 = this.node.getChildByName('atk2')
        this.node.setPosition(v3(0, view.getVisibleSize().height / 2 + 300))
        this.show()
    }

    start() {

    }

    show() {
        tween(this.node).to(2, { position: v3(0, view.getVisibleSize().height / 2 - 300) }).call(() => {
            this.isReady = true
            this._db.addComponent(UpDownLoop)
            this.schedule(this.move)
            this.attack()
            this.schedule(this.attack, 5)
        }).start()
    }

    move() {
        if (this.isShooting || this.isDied) return
        if (this.node.position.x < -200) {
            this.isLeft = false
        } else if (this.node.position.x > 200) {
            this.isLeft = true
        }
        let pos = this.node.position.clone()
        pos.x += this.isLeft ? -2 : 2
        this.node.setPosition(pos)
    }

    decHp(dmg: number) {
        if (this.isDied || !this.isReady) return
        this.hp -= dmg
        this._hpBar.progress = this.hp / this.hpMax
        if (this.hp <= 0) {
            this.unscheduleAllCallbacks()
            this.isDied = true
        }
    }

    attack() {
        if (GameLogic.Share.isPause || GameLogic.Share.isGameOver || this.isDied) return
        let type = Utility.getRandomItemInArr([1, 2])
        this.isShooting = true
        this._ani.playAnimation('attack', 1)
        this.scheduleOnce(() => {
            this.isShooting = false
            this._ani.playAnimation('idle')
        }, 1.2)
        if (type == 1) {
            for (let j = 0; j < 3; j++) {
                this.scheduleOnce(() => {
                    for (let i = 0; i < this._atk1.children.length; i++) {
                        let bullet = instantiate(this.node.getChildByName('bullet1'))
                        bullet.active = true
                        bullet.setPosition(Utility.getCanvasPos(this._atk1.children[i]))
                        GameLogic.Share.bossBulletNode.addChild(bullet)
                        bullet.addComponent(BossBullet2_1)
                    }
                }, 0.3 + 0.2 * j)
            }
        } else if (type == 2) {
            this.scheduleOnce(() => {
                for (let i = 0; i < 5; i++) {
                    this.scheduleOnce(() => {
                        let bullet = instantiate(this.node.getChildByName('bullet2'))
                        bullet.active = true
                        bullet.setPosition(Utility.getCanvasPos(this._atk2))
                        GameLogic.Share.bossBulletNode.addChild(bullet)
                        bullet.addComponent(BossBullet2_2)
                    }, i * 0.2)
                }
            }, 0.5)
        }
    }

    update(deltaTime: number) {
        if (this.isReady && !this.isDied && !GameLogic.Share.isPause && !GameLogic.Share.isGameOver) {
            if (Vec3.distance(Utility.getCanvasPos(this.node), Utility.getCanvasPos(Plane.Share.node)) <= 220) {
                Plane.Share.hitCB()
            }
        }
    }
}

