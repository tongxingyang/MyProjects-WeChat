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

    finishCB() {
        Laya.timer.once(1000,this,()=>{
            let desPos: Laya.Vector3 = GameLogic.Share._roadFinish.transform.position.clone()
            desPos.z += 20
            desPos.x -= 13
            desPos.y += 10
            Utility.TmoveTo(this.myOwner, 1500, desPos, null)
            let r = this.myOwner.transform.rotationEuler.clone()
            r.y += 90
            Utility.RotateTo(this.myOwner, 2700, r, null)
        })
    }

    onUpdate() {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isFinish) {
            return
        }
        let pos = GameLogic.Share._player.transform.position.clone()
        let myPos = this.myOwner.transform.position.clone()
        myPos.y = pos.y + 4
        myPos.z = pos.z - 6.81
        Laya.Vector3.lerp(this.myOwner.transform.position.clone(), myPos, 0.2, myPos)
        this.myOwner.transform.position = myPos
    }
}