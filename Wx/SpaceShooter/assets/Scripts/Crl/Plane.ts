import { _decorator, Component, Node, dragonBones, resources, Sprite, instantiate, v3, Vec3, Prefab } from 'cc';
import { SoundMgr } from '../Mod/SoundMgr';
import Utility from '../Mod/Utility';
import BulletPool from './BulletPool';
import { GameLogic } from './GameLogic';
import { PlaneBullet } from './PlaneBullet';
const { ccclass, property } = _decorator;

@ccclass('Plane')
export class Plane extends Component {

    static Share: Plane = null

    _bulletAni: Node = null
    _bulletNode: Node = null
    _bulletDir: Node = null
    _bullePrefab: Node = null
    _invicibleNode: Node = null

    _db: Node = null
    _armatureDisplay: dragonBones.ArmatureDisplay = null

    _type: number = 1
    _lv: number = 1

    preLv: number = 1
    lifeCount: number = 3
    isPowing: boolean = false
    isInvincible: boolean = true
    canHit: boolean = true

    onLoad() {
        Plane.Share = this
        this._db = this.node.getChildByName('db')
        this._armatureDisplay = this._db.getComponent(dragonBones.ArmatureDisplay)
        this._bulletNode = this.node.parent.getChildByName("bulletNode")
        this._bullePrefab = this.node.getChildByName("bulletPrefab")
        this._bulletAni = this.node.getChildByName("bulletAni")
        this._bulletDir = this.node.getChildByName("bulletDir")
        this._invicibleNode = this.node.getChildByName("invicible")
    }

    start() {
        this.schedule(this.createBullet, 0.1)
        this.initAsset(this._type, this._lv)
    }

    startCreateBullet() {
        this.schedule(this.createBullet, 0.1)
    }
    stopCreateBullet() {
        this._bulletAni.children[0].active = false
        this._bulletAni.children[1].active = false
        this._bulletAni.children[2].active = false
        this.unschedule(this.createBullet)
    }

    initAsset(type: number, lv: number) {
        resources.load('DB/Plane/s' + type + '_' + (Math.floor((lv - 1) / 3) + 1) + 'ani_ske', dragonBones.DragonBonesAsset, (err, res) => {
            this._armatureDisplay.dragonAsset = res
            resources.load('DB/Plane/s' + type + '_' + (Math.floor((lv - 1) / 3) + 1) + 'ani_tex', dragonBones.DragonBonesAtlasAsset, (err, res) => {
                this._armatureDisplay.dragonAtlasAsset = res
                this._armatureDisplay.armatureName = 'Armature'
            })
        })
    }

    createBullet() {
        if (GameLogic.Share.isPause || GameLogic.Share.isGameOver) return
        if ((this._type == 3 && this._lv >= 7) || (this._type == 4 && this._lv >= 4)) {
            //激光子弹
            this._bulletAni.children[0].active = this._type == 3 && this._lv >= 7
            this._bulletAni.children[1].active = this._type == 4 && this._lv >= 4 && this._lv <= 6
            this._bulletAni.children[2].active = this._type == 4 && this._lv >= 7
        } else {
            this._bulletAni.children[0].active = false
            this._bulletAni.children[1].active = false
            this._bulletAni.children[2].active = false
            //普通子弹
            for (let i = 0; i < this._lv; i++) {
                let bullet: Node = null
                if (BulletPool.poolSize > 0) {
                    bullet = BulletPool.getBullet()
                } else {
                    bullet = instantiate(this._bullePrefab)
                }
                bullet.active = true
                if (!bullet.getComponent(PlaneBullet)) bullet.addComponent(PlaneBullet)

                let bPos = this._bulletDir.children[i].position.clone()
                Vec3.add(bPos, bPos, this.node.getPosition())
                bullet.setPosition(bPos)
                let dir = v3()
                let p1 = this._bulletDir.children[i].children[0].worldPosition
                let p2 = this._bulletDir.children[i].worldPosition
                Vec3.subtract(dir, p1, p2)
                dir = dir.normalize()
                bullet.getComponent(PlaneBullet).init(this._type, this._lv, dir, this._bulletDir.children[i].angle)

                this._bulletNode.addChild(bullet)
            }
        }
    }

    upgradeLv() {
        this.createPropFX()
        if (this.isPowing) { if (this.preLv < 9) this.preLv++; return }
        if (this._lv >= 9) return
        this._lv++
        this.initAsset(this._type, this._lv)
    }

    changeType(type: number) {
        if (this.isPowing) return
        this._type = type
        this.initAsset(this._type, this._lv)
        this.createPropFX()
    }

    getPow() {
        this.isPowing = true
        this.preLv = this._lv
        this._lv = 9
        this.initAsset(this._type, this._lv)
        this.createPropFX()
        this.createPowFX()
        this.scheduleOnce(() => {
            this.isPowing = false
            this._lv = this.preLv
            this.initAsset(this._type, this._lv)
        }, 5)
    }

    createPropFX() {
        resources.load('Prefabs/Effects/getProp', Prefab, (err, res) => {
            let fx = instantiate(res)
            fx.setPosition(v3())
            fx.active = true
            this.node.addChild(fx)
            this.scheduleOnce(() => { fx.destroy() }, 2)
        })
    }

    createPowFX() {
        resources.load('Prefabs/Effects/getPow', Prefab, (err, res) => {
            let fx = instantiate(res)
            fx.setPosition(v3())
            fx.active = true
            this.node.addChild(fx)
            this.scheduleOnce(() => { fx.destroy() }, 5)
            this.scheduleOnce(() => {
                fx.getComponent(dragonBones.ArmatureDisplay).playAnimation('idle', -1)
            }, 0.4)
        })
    }

    createDiedFX(cb: Function) {
        resources.load('Prefabs/Effects/planeDied', Prefab, (err, res) => {
            let fx = instantiate(res)
            fx.setPosition(v3())
            fx.active = true
            this.node.addChild(fx)
            this.scheduleOnce(() => { fx.destroy(); cb && cb() }, 2)
        })
    }

    hitCB() {
        if (this.isInvincible || !this.canHit) return
        this.lifeCount--
        if (this.lifeCount > 0) { this.createHitFX(); this.canHit = false; this.scheduleOnce(() => { this.canHit = true }, 1); return }
        GameLogic.Share.isPause = true
        SoundMgr.Share.PlaySound('planeDied')
        this.createDiedFX(() => {
            SoundMgr.Share.PlaySound('lose')
            GameLogic.Share.gameOver(false)
        })
    }

    createHitFX() {
        resources.load('Prefabs/Effects/wormDied', Prefab, (err, res) => {
            let fx = instantiate(res)
            fx.setPosition(v3())
            fx.active = true
            this.node.addChild(fx)
            this.scheduleOnce(() => { fx.destroy() }, 1)
        })
    }

    update(deltaTime: number) {
        this._invicibleNode.active = this.isInvincible && GameLogic.Share.isStart
    }
}

