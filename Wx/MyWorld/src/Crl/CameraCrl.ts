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
        myPos.y = 3.5
        myPos.z = -12
        this.myOwner.transform.position = myPos
    }

    resetCamera() {
        GameLogic.Share.isSelectingSkin = false
        this.myOwner.transform.position = GameLogic.Share.camStartPos
        this.myOwner.transform.rotation = GameLogic.Share.camStartRotation
    }

    winCB() {
        let pos = GameLogic.Share._player.transform.position.clone()
        let myPos = this.myOwner.transform.position.clone()
        myPos.x = pos.x
        myPos.y = pos.y + 5
        myPos.z = pos.z - 8

        this.myOwner.transform.rotationEuler = new Laya.Vector3(-30, 180, 0)
        Laya.Vector3.lerp(this.myOwner.transform.position.clone(), myPos, 0.2, myPos)
        this.myOwner.transform.position = myPos

        this.myOwner.fieldOfView = 60
    }

    onUpdate() {
        if (GameLogic.Share.isWin) {
            this.winCB()
        }
        if (GameLogic.Share.isPause || GameLogic.Share.isSelectingSkin) {
            return
        }

        let pos = GameLogic.Share._player.transform.position.clone()
        let myPos = this.myOwner.transform.position.clone()
        myPos.x = pos.x
        myPos.y = pos.y + 20
        myPos.z = pos.z - 10

        let scaleNum: number = GameLogic.Share._playerCrl.scaleNum
        let dir: Laya.Vector3 = new Laya.Vector3()
        this.myOwner.transform.getForward(dir)
        Laya.Vector3.scale(dir, -1, dir)
        Laya.Vector3.scale(dir, 0 + scaleNum * 4, dir)
        Laya.Vector3.add(myPos, dir, myPos)

        this.myOwner.transform.rotationEuler = new Laya.Vector3(-50, 180, 0)
        Laya.Vector3.lerp(this.myOwner.transform.position.clone(), myPos, 0.2, myPos)
        this.myOwner.transform.position = myPos

        this.myOwner.fieldOfView = 80 + scaleNum * 3
    }
}