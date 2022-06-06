import { _decorator, Component, Node, dragonBones, resources, utils, Sprite, v3, Vec3, tween, UITransform, Layers, macro, Prefab, instantiate } from 'cc';
import { PropType } from '../Mod/Entity';
import { RotateLoop1 } from '../Mod/RotateLoop1';
import { SoundMgr } from '../Mod/SoundMgr';
import Utility from '../Mod/Utility';
import { GameUI } from '../UI/GameUI';
import { GameLogic } from './GameLogic';
import { Plane } from './Plane';
import { WormBullet } from './WormBullet';
import WormHitPool from './WormHitPool';
const { ccclass, property } = _decorator;

@ccclass('Worm')
export class Worm extends Component {
    pointNode: Node = null
    endGrid: Node = null

    @property
    id: number = 1
    @property
    speed: number = 2

    _bullet: Node = null
    _db: Node = null
    _armatureDisplay: dragonBones.ArmatureDisplay = null

    _pointIndex: number = 1
    _isMoveEnd: boolean = false
    _isDied: boolean = false
    _type: PropType = null

    _hp: number = 5
    endPos: Vec3 = v3()

    onLoad() {
        this._bullet = this.node.getChildByName('bullet')
        this._bullet.active = false
        this._db = this.node.getChildByName('db')
        this._armatureDisplay = this._db.getComponent(dragonBones.ArmatureDisplay)
        this.initAsset(this.id)
        this._hp *= GameLogic.Share.waveCount
    }

    start() {
    }

    initData(pointNode, endGrid) {
        this.pointNode = pointNode
        this.endGrid = endGrid

        this.node.setPosition(this.pointNode.children[0].position)
    }

    initAsset(id: number) {
        // resources.load('DB/Worm/w' + id + '_ani_ske', dragonBones.DragonBonesAsset, (err, res) => {
        //     this._armatureDisplay.dragonAsset = res
        //     resources.load('DB/Worm/w' + id + '_ani_tex', dragonBones.DragonBonesAtlasAsset, (err, res) => {
        //         this._armatureDisplay.dragonAtlasAsset = res
        //         this._armatureDisplay.armatureName = 'Armature'
        //     })
        // })
        this._armatureDisplay.dragonAsset = GameLogic.Share.wormDBAsset[id - 1]
        this._armatureDisplay.dragonAtlasAsset = GameLogic.Share.wormDBAtlasAsset[id - 1]
        this._armatureDisplay.armatureName = 'Armature'
        this._bullet.getComponent(Sprite).spriteFrame = GameLogic.Share.getWormBulletSPByName('w' + id + '_bullet')
    }

    move() {
        let target = this.pointNode.children[this._pointIndex]
        let targetPos = target.position.clone()
        let myPos = this.node.position.clone()
        let dir = v3()
        Vec3.subtract(dir, targetPos, myPos)
        dir = dir.normalize()
        Vec3.multiplyScalar(dir, dir, this.speed)
        Vec3.add(myPos, myPos, dir)
        this.node.setPosition(myPos)

        if (Vec3.distance(targetPos, this.node.position.clone()) <= 20) {
            this._pointIndex++
            if (this._pointIndex >= this.pointNode.children.length) {
                this.node.setPosition(targetPos)
                this.moveToEnd()
            }
        }
    }

    moveToEnd() {
        let id = this.node.parent.children.indexOf(this.node)
        let endPos = this.endGrid.children[id].position.clone()
        this.endPos = endPos.clone()
        tween(this.node).to(0.3, { position: endPos }).call(() => {
            this._isMoveEnd = true
            this.schedule(this.shootBullet, 5, 2, Math.random() * 5)
            this.randMove()
        }).start()
    }

    randMove() {
        let endPos = this.endPos.clone()
        endPos.x += Math.random() * 100 - 50
        endPos.y += Math.random() * 100 - 50
        tween(this.node).to(0.5, { position: endPos }).call(() => {
            this.randMove()
        }).start()
    }

    shootBullet() {
        if (GameLogic.Share.isPause || GameLogic.Share.isGameOver) return
        if (Math.random() > 0.4) return
        SoundMgr.Share.PlaySound('enemyShoot')
        let bullet = new Node('wormBullet')
        let sp = bullet.addComponent(Sprite)
        sp.spriteFrame = GameLogic.Share.getWormBulletSPByName('w' + this.id + '_bullet')
        bullet.setPosition(this.node.position)
        GameLogic.Share.wormBulletNode.addChild(bullet)
        bullet.layer = bullet.parent.layer

        let dir = v3()
        Vec3.subtract(dir, Plane.Share.node.position, this.node.position)
        dir = dir.normalize()
        let desPos = v3()
        Vec3.multiplyScalar(desPos, dir, 2000)
        tween(bullet).to(10, { position: desPos }).call(() => { bullet.destroy() }).start()
        bullet.addComponent(WormBullet)
    }

    decHp(dmg: number = 1) {
        this._hp -= dmg
        this.createHitFX()
        if (this._hp <= 0) {
            SoundMgr.Share.PlaySound('enemyDied')
            this._isDied = true
            GameLogic.Share.wormArr.splice(GameLogic.Share.wormArr.indexOf(this.node), 1)
            if (this._type != null) GameLogic.Share.createProp(this._type, this.node.position)
            this.createDiedFX(Utility.getCanvasPos(this.node))

            if (Math.random() < 0.2) {
                GameUI.Share.getCoinEffect(Utility.getCanvasPos(this.node))
            }

            this.node.destroy()
        }
    }

    createHitFX() {
        let fx = null
        if (WormHitPool.poolSize > 0) {
            fx = WormHitPool.getBullet()
        } else {
            fx = instantiate(GameLogic.Share.wormHitFX)
        }
        if (!fx || !fx.isValid) return
        fx.setPosition(v3())
        fx.active = true
        fx.getComponent(dragonBones.ArmatureDisplay).playAnimation('W_Hit1')
        this.node.addChild(fx)
        GameLogic.Share.scheduleOnce(() => { WormHitPool.putBullet(fx) }, 0.4)
    }

    createDiedFX(pos) {
        let fx = instantiate(GameLogic.Share.getEffectPrefabByName('wormDied'))
        fx.setPosition(pos)
        fx.active = true
        GameLogic.Share.effectNode.addChild(fx)
        GameLogic.Share.scheduleOnce(() => { fx.destroy() }, 1)
    }

    update(deltaTime: number) {
        if (GameLogic.Share.isPause || GameLogic.Share.isGameOver) return
        if (this.pointNode && this._pointIndex < this.pointNode.children.length) this.move()
        if (Vec3.distance(this.node.position, Plane.Share.node.position) <= 100) {
            this.node.destroy()
            Plane.Share.hitCB()
        }
    }
}

