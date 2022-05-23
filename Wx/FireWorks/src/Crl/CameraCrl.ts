import GameLogic from "./GameLogic"

export default class CameraCrl extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Camera

    isLookAt: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Camera
    }

    onDisable() {

    }

    gameStart() {
        let pos = new Laya.Vector3(0, 2, -3)
        Laya.Vector3.lerp(this.myOwner.transform.position.clone(), pos, 0.2, pos)
        this.myOwner.transform.position = pos

        let r = new Laya.Vector3(-15, 180, 0)
        Laya.Vector3.lerp(this.myOwner.transform.rotationEuler.clone(), r, 0.2, r)
        this.myOwner.transform.rotationEuler = r
    }

    resetCamera() {
        let pos = new Laya.Vector3()
        Laya.Vector3.lerp(this.myOwner.transform.position.clone(), GameLogic.Share.camStartPos, 0.2, pos)
        this.myOwner.transform.position = pos

        let r = new Laya.Quaternion()
        Laya.Quaternion.lerp(this.myOwner.transform.rotation.clone(), GameLogic.Share.camStartRotation, 0.2, r)
        this.myOwner.transform.rotation = r
    }

    onUpdate() {
        if (this.isLookAt) {
            this.gameStart()
        } else {
            this.resetCamera()
        }
    }
}