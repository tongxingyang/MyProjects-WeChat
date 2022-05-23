import Utility from "../../Mod/Utility"
import GameLogic from "../GameLogic"

export default class Road extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D
    myBB: Laya.BoundBox

    isUsed: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
        this.myBB = Utility.getBoundBox(this.myOwner.getChildByName('IdleArea') as Laya.Sprite3D)
    }

    onDisable() {

    }

    onUpdate() {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause || this.isUsed) return

        if (Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB())) {
            this.isUsed = true
            GameLogic.Share._playerCrl.resetIdle(this.myOwner)
        }
    }
}