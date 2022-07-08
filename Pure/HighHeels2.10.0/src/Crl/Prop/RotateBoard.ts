import Utility from "../../Mod/Utility"
import GameLogic from "../GameLogic"

export default class RotateBoard extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D

    isUsed: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    onDisable() {

    }

    onUpdate() {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause || this.isUsed) return

        let min = this.myOwner.getChildByName('min') as Laya.Sprite3D
        let max = this.myOwner.getChildByName('max') as Laya.Sprite3D
        let min1 = this.myOwner.getChildByName('min1') as Laya.Sprite3D
        let max1 = this.myOwner.getChildByName('max1') as Laya.Sprite3D
        if (Laya.CollisionUtils.boxContainsBox(
            Utility.getBoundBoxWithMinMax(min.transform.position.clone(), max.transform.position.clone()), GameLogic.Share._playerCrl.getMyBB()) ||
            Laya.CollisionUtils.boxContainsBox(
                Utility.getBoundBoxWithMinMax(min1.transform.position.clone(), max1.transform.position.clone()), GameLogic.Share._playerCrl.getMyBB())) {
            this.isUsed = true
            if (GameLogic.Share._playerCrl.shoesArr.length <= 0) {
                GameLogic.Share._playerCrl.diedCB()
            } else {
                GameLogic.Share._playerCrl.decShoes(this.myOwner, 0)
            }
        }
    }
}