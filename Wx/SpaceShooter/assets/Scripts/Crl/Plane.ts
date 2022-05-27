import { _decorator, Component, Node, dragonBones, resources, Sprite, instantiate, v3, Vec3 } from 'cc';
import Utility from '../Mod/Utility';
import BulletPool from './BulletPool';
import { PlaneBullet } from './PlaneBullet';
const { ccclass, property } = _decorator;

@ccclass('Plane')
export class Plane extends Component {

    static Share: Plane = null

    _bulletAni: Node = null
    _bulletNode: Node = null
    _bulletDir: Node = null
    _bullePrefab: Node = null

    _db: Node = null
    _armatureDisplay: dragonBones.ArmatureDisplay = null

    _type: number = 1
    _lv: number = 1

    onLoad() {
        Plane.Share = this
        this._db = this.node.getChildByName('db')
        this._armatureDisplay = this._db.getComponent(dragonBones.ArmatureDisplay)
        this._bulletNode = this.node.parent.getChildByName("bulletNode")
        this._bullePrefab = this.node.getChildByName("bulletPrefab")
        this._bulletAni = this.node.getChildByName("bulletAni")
        this._bulletDir = this.node.getChildByName("bulletDir")
    }

    start() {
        this.schedule(this.createBullet, 0.1)
        this.initAsset(this._type, this._lv)
    }

    startCreateBullet() {
        this.schedule(this.createBullet, 0.1)
    }
    stopCreateBullet() {
        this.unschedule(this.createBullet)
    }

    initAsset(type: number, lv: number) {
        resources.load('DB/Plane/s' + type + '_' + (Math.floor((this._lv - 1) / 3) + 1) + 'ani_ske', dragonBones.DragonBonesAsset, (err, res) => {
            this._armatureDisplay.dragonAsset = res
            resources.load('DB/Plane/s' + type + '_' + (Math.floor((this._lv - 1) / 3) + 1) + 'ani_tex', dragonBones.DragonBonesAtlasAsset, (err, res) => {
                this._armatureDisplay.dragonAtlasAsset = res
                this._armatureDisplay.armatureName = 'Armature'
            })
        })
    }

    createBullet() {
        if ((this._type == 3 && this._lv >= 7) || (this._type == 4 && this._lv >= 4)) {
            //激光子弹
            this._bulletAni.children[0].active = this._type == 3 && this._lv >= 7
            this._bulletAni.children[1].active = this._type == 4 && this._lv >= 4 && this._lv <= 6
            this._bulletAni.children[2].active = this._type == 4 && this._lv >= 7
        } else {
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

    update(deltaTime: number) {

    }
}

