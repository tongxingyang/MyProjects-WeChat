import GameLogic from "./GameLogic"

export default class CameraCrl extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Camera

    onAwake() {
        this.myOwner = this.owner as Laya.Camera
        console.log(this.myOwner.transform.rotationEuler)
    }

    onDisable() {

    }

    selectSkirt() {
        GameLogic.Share.isSelectingSkin = true
        let myPos = this.myOwner.transform.position.clone()
        myPos.y = 2
        myPos.z = -10
        this.myOwner.transform.position = myPos
    }

    resetCamera() {
        GameLogic.Share.isSelectingSkin = false
        this.myOwner.transform.position = GameLogic.Share.camStartPos
        this.myOwner.transform.rotation = GameLogic.Share.camStartRotation
    }

    onUpdate() {
        if (!GameLogic.Share.isStartGame || GameLogic.Share.isSelectingSkin) {
            return
        }

        let pos = GameLogic.Share._player.transform.position.clone()
        let myPos = this.myOwner.transform.position.clone()
        myPos.x = pos.x
        myPos.y = pos.y + 17
        myPos.z = pos.z - 23
        Laya.Vector3.lerp(this.myOwner.transform.position.clone(), myPos, 0.2, myPos)
        this.myOwner.transform.position = myPos
        this.myOwner.transform.rotationEuler = new Laya.Vector3(-30, 180, 0)
    }
}