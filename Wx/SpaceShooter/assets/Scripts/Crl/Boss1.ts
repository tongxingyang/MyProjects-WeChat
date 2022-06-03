import { _decorator, Component, Node, dragonBones, ProgressBar, v3, view, tween, resources, Prefab, instantiate, Vec3 } from 'cc';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import { UpDownLoop } from '../Mod/UpDownLoop';
import Utility from '../Mod/Utility';
import { BossBullet1_1 } from './BossBullet/BossBullet1_1';
import { BossBullet1_2 } from './BossBullet/BossBullet1_2';
import { GameLogic } from './GameLogic';
import { Plane } from './Plane';
const { ccclass, property } = _decorator;

@ccclass('Boss1')
export class Boss1 extends Component {

    _db: Node = null
    _ani: dragonBones.ArmatureDisplay = null
    _hpBar: ProgressBar = null
    _atk1: Node = null
    _atk2: Node = null
    _atk3: Node = null

    hpMax: number = 300
    hp: number = 300
    isReady: boolean = false
    isDied: boolean = false
    isShooting: boolean = false
    isLeft: boolean = true

    onLoad() {
        this.hp = PlayerDataMgr.getBossHp()
        this.hpMax = PlayerDataMgr.getBossHp()
        this._db = this.node.getChildByName('db')
        this._ani = this._db.getComponent(dragonBones.ArmatureDisplay)
        this._hpBar = this.node.getChildByName('hpBar').getComponent(ProgressBar)
        this._atk1 = this.node.getChildByName('atk1')
        this._atk2 = this.node.getChildByName('atk2')
        this._atk3 = this.node.getChildByName('atk3')
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
        if (Math.random() * 1 <= 0.02) {
            this.createClipFX()
        }
        if (this.hp <= this.hpMax / 2) {
            this.node.getChildByName('bossSmoke').active = true
            GameLogic.Share.createHit1FX(this.node)
        }
        if (this.hp <= 0) {
            Plane.Share.isInvincible = true
            this.unscheduleAllCallbacks()
            SoundMgr.Share.PlaySound('bossDied')
            this.isDied = true
            GameLogic.Share.createBossDiedFX(this.node)
            this.scheduleOnce(() => {
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
        let type = Utility.getRandomItemInArr([1, 2, 3])
        this.isShooting = true
        this._ani.playAnimation('attack', 1)
        this.scheduleOnce(() => {
            this.isShooting = false
            this._ani.playAnimation('idle')
        }, 1.2)
        if (type == 1) {
            this.scheduleOnce(() => {
                resources.load('Prefabs/boss1_bullet1', Prefab, (err, res) => {
                    if (err) return
                    SoundMgr.Share.PlaySound('rocket')
                    let bullet = instantiate(res)
                    bullet.setScale(v3(1.5, 1.5, 1))
                    GameLogic.Share.bossBulletNode.addChild(bullet)
                    bullet.position = Utility.getCanvasPos(this._atk1)
                    let crl = bullet.addComponent(BossBullet1_1)
                    crl.initDir(true)
                })
            }, 0.5)
        } else if (type == 2) {
            this.scheduleOnce(() => {
                for (let i = 0; i < 4; i++) {
                    SoundMgr.Share.PlaySound('rocket')
                    resources.load('Prefabs/boss1_bullet1', Prefab, (err, res) => {
                        if (err) return
                        let bullet = instantiate(res)
                        GameLogic.Share.bossBulletNode.addChild(bullet)
                        bullet.position = Utility.getCanvasPos(this._atk2.children[i])
                        let crl = bullet.addComponent(BossBullet1_1)
                        crl.initDir(i < 2)
                    })
                }
            }, 0.5)
        } else if (type == 3) {
            this.scheduleOnce(() => {
                SoundMgr.Share.PlaySound('bossElectric')
                resources.load('Prefabs/boss1_bullet2', Prefab, (err, res) => {
                    if (err) return
                    let bullet = instantiate(res)
                    bullet.setScale(v3(1.5, 1.5, 1))
                    GameLogic.Share.bossBulletNode.addChild(bullet)
                    bullet.position = Utility.getCanvasPos(this._atk3)
                    let crl = bullet.addComponent(BossBullet1_2)
                })
            }, 0.5)
        }
    }

    update(deltaTime: number) {
        if (this.isReady && !this.isDied && !GameLogic.Share.isPause && !GameLogic.Share.isGameOver) {
            if (Vec3.distance(Utility.getCanvasPos(this.node), Utility.getCanvasPos(Plane.Share.node)) <= 180) {
                Plane.Share.hitCB()
            }
        }

        this._db.children[0].active = this.hp < 0.8 * this.hpMax
        this._db.children[1].active = this.hp < 0.7 * this.hpMax
        this._db.children[2].active = this.hp < 0.6 * this.hpMax
        this._db.children[3].active = this.hp < 0.5 * this.hpMax
    }
}

