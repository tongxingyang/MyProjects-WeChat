import { _decorator, Component, Node, dragonBones, resources, Sprite } from 'cc';
import Utility from '../Mod/Utility';
const { ccclass, property } = _decorator;

@ccclass('Plane')
export class Plane extends Component {

    _db: Node = null
    _armatureDisplay: dragonBones.ArmatureDisplay = null

    onLoad() {
        this._db = this.node.getChildByName('db')
        this._armatureDisplay = this._db.getComponent(dragonBones.ArmatureDisplay)
    }

    start() {

    }

    initAsset(id: number) {
        resources.load('DB/Plane/s' + id + 'ani_ske', dragonBones.DragonBonesAsset, (err, res) => {
            this._armatureDisplay.dragonAsset = res
            resources.load('DB/Plane/s' + id + 'ani_tex', dragonBones.DragonBonesAtlasAsset, (err, res) => {
                this._armatureDisplay.dragonAtlasAsset = res
                this._armatureDisplay.armatureName = 'Armature'
            })
        })
    }

    update(deltaTime: number) {

    }
}

