import Utility from "../Mod/Utility"
import GameLogic from "./GameLogic"

export default class CameraCrl extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Camera

    onAwake() {
        this.myOwner = this.owner as Laya.Camera
    }

    onDisable() {

    }

    moveToBoss() {
        let bossPos = GameLogic.Share._boss.transform.position.clone()
        bossPos.y = 25
        Utility.TmoveTo(this.myOwner, 2000, bossPos, null)

        let myEr: Laya.Vector3 = this.myOwner.transform.rotationEuler.clone()
        myEr.x = -90
        Utility.RotateTo(this.myOwner, 3000, myEr, null)
    }

    onUpdate() {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) {
            return
        }
        let pos = GameLogic.Share._player.transform.position.clone()
        let myPos = this.myOwner.transform.position.clone()
        myPos.y = pos.y + 4.76
        myPos.z = pos.z - 8
        Laya.Vector3.lerp(this.myOwner.transform.position.clone(), myPos, 0.2, myPos)
        this.myOwner.transform.position = myPos
    }
}