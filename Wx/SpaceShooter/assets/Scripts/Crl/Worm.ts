import { _decorator, Component, Node, dragonBones, resources, utils, Sprite, v3, Vec3, tween, UITransform } from 'cc';
import Utility from '../Mod/Utility';
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

    onLoad() {
        this._bullet = this.node.getChildByName('bullet')
        this._bullet.active = false
        this._db = this.node.getChildByName('db')
        this._armatureDisplay = this._db.getComponent(dragonBones.ArmatureDisplay)
        this.initAsset(this.id)
    }

    start() {
    }

    initData(pointNode, endGrid) {
        this.pointNode = pointNode
        this.endGrid = endGrid

        this.node.setPosition(this.pointNode.children[0].position)
    }

    initAsset(id: number) {
        resources.load('DB/Worm/w' + id + '_ani_ske', dragonBones.DragonBonesAsset, (err, res) => {
            this._armatureDisplay.dragonAsset = res
            resources.load('DB/Worm/w' + id + '_ani_tex', dragonBones.DragonBonesAtlasAsset, (err, res) => {
                this._armatureDisplay.dragonAtlasAsset = res
                this._armatureDisplay.armatureName = 'Armature'
            })
        })
        Utility.loadSpriteFrame('Texture/Bullets/Worm/w' + id + '_bullet', this._bullet.getComponent(Sprite))
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
        tween(this.node).to(0.3, { position: endPos }).call(() => {
            this._isMoveEnd = true
        }).start()
    }

    update(deltaTime: number) {
        if (this.pointNode && this._pointIndex < this.pointNode.children.length) this.move()
    }
}

