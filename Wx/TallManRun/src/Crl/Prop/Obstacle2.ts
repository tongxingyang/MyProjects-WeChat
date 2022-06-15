import Utility from "../../Mod/Utility"
import GameLogic from "../GameLogic"

export default class Obstacle2 extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null

    isDied: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    onUpdate() {
        if (!this.isDied) {
            let myPos = this.myOwner.transform.position.clone()
            let pPos = GameLogic.Share._player.transform.position.clone()
            if (Math.abs(myPos.z - pPos.z) <= 0.1 && GameLogic.Share._playerCrl.scaleV > 1.7 && !GameLogic.Share._playerCrl.isJumping) {
                this.isDied = true
                GameLogic.Share._playerCrl.decHV(1)
            }
        }
    }
}