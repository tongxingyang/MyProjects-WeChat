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

    startRotate() {
        Laya.timer.frameLoop(1, this, this.finishRotate)
        Laya.timer.once(3000, this, () => {
            Laya.timer.clearAll(this)
        })

        let desPos = GameLogic.Share._player.transform.position.clone()
        desPos.y += 2
        desPos.z -= 2
        this.myOwner.transform.position = desPos
    }

    finishRotate() {
        let a = 1 * Math.PI / 180
        let pPos = GameLogic.Share._player.transform.position.clone()
        let pos = this.myOwner.transform.position.clone()
        pos.x = (pos.x - pPos.x) * Math.cos(a) - (pos.z - pPos.z) * Math.sin(a) + pPos.x;
        pos.z = (pos.x - pPos.x) * Math.sin(a) + (pos.z - pPos.z) * Math.cos(a) + pPos.z;
        this.myOwner.transform.position = pos

        this.myOwner.transform.lookAt(GameLogic.Share._player.transform.position.clone(), new Laya.Vector3(0, 1, 0))

        GameLogic.Share._light.transform.rotate(new Laya.Vector3(0, -1, 0), false, false)
    }

    onUpdate() {
        if (GameLogic.Share.isGameOver) return
        let desPos = GameLogic.Share._player.transform.position.clone()
        desPos.y += 7
        desPos.z -= 6

        let pos = new Laya.Vector3()
        Laya.Vector3.lerp(this.myOwner.transform.position.clone(), desPos, 0.1, pos)
        this.myOwner.transform.position = pos

        let euler = this.myOwner.transform.localRotationEuler.clone()
        euler.x = -25
        this.myOwner.transform.localRotationEuler = euler
    }

    resetCamera() {
        let desPos = GameLogic.Share._player.transform.position.clone()
        desPos.y += 7
        desPos.z -= 6

        this.myOwner.transform.position = desPos

        let euler = this.myOwner.transform.localRotationEuler.clone()
        euler.x = -25
        this.myOwner.transform.localRotationEuler = euler
    }
}