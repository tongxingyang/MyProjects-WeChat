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

    onUpdate() {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) {
            return
        }
        let pos = GameLogic.Share._player.transform.position.clone()
        let myPos = this.myOwner.transform.position.clone()
        myPos.z = pos.z - 6.81
        Laya.Vector3.lerp(this.myOwner.transform.position.clone(), myPos, 0.2, myPos)
        this.myOwner.transform.position = myPos
    }
}