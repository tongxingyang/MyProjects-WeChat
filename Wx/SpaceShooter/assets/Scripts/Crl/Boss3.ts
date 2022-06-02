import { _decorator, Component, Node, dragonBones, ProgressBar, tween, v3, Vec3, view, UITransform, instantiate, Prefab, resources } from 'cc';
import { SoundMgr } from '../Mod/SoundMgr';
import { UpDownLoop } from '../Mod/UpDownLoop';
import Utility from '../Mod/Utility';
import { BossBullet2_2 } from './BossBullet/BossBullet2_2';
import { BossBullet3_2 } from './BossBullet/BossBullet3_2';
import { GameLogic } from './GameLogic';
import { Plane } from './Plane';
const { ccclass, property } = _decorator;

@ccclass('Boss3')
export class Boss3 extends Component {

    _db: Node = null
    _ani: dragonBones.ArmatureDisplay = null
    _hpBar: ProgressBar = null
    _atk2: Node = null
    _laser1: Node = null
    _laser2: Node = null
    _warning: Node = null
    _aim: Node = null

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
        this._atk2 = this.node.getChildByName('atk2')
        this._laser1 = this.node.getChildByName('laser1')
        this._laser2 = this.node.getChildByName('laser2')
        this._warning = this.node.getChildByName('warning')
        this._aim = this.node.getChildByName('aim')
        this.node.setPosition(v3(0, view.getVisibleSize().height / 2 + 300))
        this.show()
    }

    start() {

    }

    show() {
        tween(this.node).to(2, { position: v3(0, view.getVisibleSize().height / 2 - 400) }).call(() => {
            this.isReady = true
            this._db.addComponent(UpDownLoop)
            this.schedule(this.move)
            this.attack()
            this.schedule(this.attack, 5)
        }).start()
    }

    move() {
        if (this.isShooting || this.isDied) return
        if (this.node.position.x < -300) {
            this.isLeft = false
        } else if (this.node.position.x > 300) {
            this.isLeft = true
        }
        let pos = this.node.position.clone()
        pos.x += this.isLeft ? -2 : 2
        this.node.setPosition(pos)
    }

    decHp(dmg: number) {
        if (this.isDied || !this.isReady) return
        SoundMgr.Share.PlaySound('enemyHit')
        this.hp -= dmg
        this._hpBar.progress = this.hp / this.hpMax
        if (this.hp <= this.hpMax / 2) {
            this.node.getChildByName('bossSmoke').active = true
            GameLogic.Share.createHit1FX(this.node)
        }
        if (this.hp <= this.hpMax / 2) {
            this.node.getChildByName('bossSmoke').active = true
            GameLogic.Share.createHit1FX(this.node)
        }
        if (this.hp <= 0) {
            this.unscheduleAllCallbacks()
            this.isDied = true
            GameLogic.Share.createBossDiedFX(this.node)
            this.scheduleOnce(() => {
                SoundMgr.Share.PlaySound('bossDied')
                this.node.destroy()
                GameLogic.Share.gameOver(true)
            }, 2.5)
        }
    }

    createClipFX() {
        resources.load('Prefabs/Effects/Clip', Prefab, (err, res) => {
            let fx = instantiate(res)
            fx.setPosition(v3())
            fx.active = true
            fx.children[Utility.getRandomItemInArr([0, 1, 2, 3])].active = true
            this.node.addChild(fx)
            this.scheduleOnce(() => { fx.destroy(); }, 3)
        })
    }

    attack() {
        if (GameLogic.Share.isPause || GameLogic.Share.isGameOver || this.isDied) return
        let type = Utility.getRandomItemInArr([1, 2])
        this.isShooting = true
        if (type == 1) {
            this._warning.active = true
            this.scheduleOnce(() => {
                this._ani.playAnimation('attack', 1)
                this.scheduleOnce(() => {
                    this.isShooting = false
                    this._laser1.active = false
                    this._laser2.active = false
                    this._ani.playAnimation('idle')
                }, 1.2)

                this.scheduleOnce(() => {
                    SoundMgr.Share.PlaySound('bossLaser')
                    this._warning.active = false
                    this._laser1.active = true
                    this._laser2.active = true
                }, 0.5)
            }, 1)
        } else if (type == 2) {
            this._ani.playAnimation('attack', 1)
            this.scheduleOnce(() => {
                this.isShooting = false
                this._aim.active = false
                this._ani.playAnimation('idle')
            }, 1.2)

            let aimPos = Utility.getCanvasPos(Plane.Share.node)
            this._aim.setPosition(aimPos)
            this._aim.active = true
            this._aim.parent = GameLogic.Share.node

            this.scheduleOnce(() => {
                for (let i = 0; i < 10; i++) {
                    this.scheduleOnce(() => {
                        SoundMgr.Share.PlaySound('bossBullet')
                        let bullet = instantiate(this.node.getChildByName('bullet2'))
                        bullet.active = true
                        bullet.setPosition(Utility.getCanvasPos(this._atk2.children[Math.floor(i % 2)]))
                        GameLogic.Share.bossBulletNode.addChild(bullet)
                        bullet.addComponent(BossBullet3_2)
                    }, i * 0.05)
                }
            }, 0.5)
        }
    }

    update(deltaTime: number) {
        if (this.isReady && !this.isDied && !GameLogic.Share.isPause && !GameLogic.Share.isGameOver) {
            if (Vec3.distance(Utility.getCanvasPos(this.node), Utility.getCanvasPos(Plane.Share.node)) <= 150) {
                Plane.Share.hitCB()
            }
        }
    }
}

