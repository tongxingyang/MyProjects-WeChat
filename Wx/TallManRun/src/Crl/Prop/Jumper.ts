import Utility from "../../Mod/Utility"
import GameLogic from "../GameLogic"

export default class Jumper extends Laya.Script {
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
            if (Utility.getWorldDis(this.myOwner, GameLogic.Share._player) <= 1) {
                GameLogic.Share._playerCrl.jump()
                this.isDied = true
            }
        }
    }
}