import GameLogic from "./GameLogic"

export default class Player extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null
    isDied: boolean = false

    roadEdge: number = 3
    speed: number = 0.2

    onAwake() {
        if (this.myOwner) return
        this.myOwner = this.owner as Laya.Sprite3D
    }

    onDisable() {

    }

    moveX(dtX: number) {
        if (GameLogic.Share.isGameOver) {
            return
        }

        if (this.myOwner.transform.position.x + dtX > this.roadEdge) {
            this.myOwner.transform.position = new Laya.Vector3(this.roadEdge, this.myOwner.transform.position.clone().y, this.myOwner.transform.position.clone().z)
            return
        } else if (this.myOwner.transform.position.x + dtX < -this.roadEdge) {
            this.myOwner.transform.position = new Laya.Vector3(-this.roadEdge, this.myOwner.transform.position.clone().y, this.myOwner.transform.position.clone().z)
            return
        }
        let newPos = new Laya.Vector3(dtX, 0, 0)
        this.myOwner.transform.translate(newPos, false)
    }

    onUpdate() {
        if (!GameLogic.Share.isGameOver) {
            for (let i = 0; i < this.myOwner.numChildren; i++) {
                let m = this.myOwner.getChildAt(i) as Laya.Sprite3D
                m.active = i < 40
            }
        } else {
            for (let i = 0; i < this.myOwner.numChildren; i++) {
                let m = this.myOwner.getChildAt(i) as Laya.Sprite3D
                m.active = true
            }
        }
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) return

        this.myOwner.transform.translate(new Laya.Vector3(0, 0, this.speed), false)
        GameLogic.Share._camera.transform.translate(new Laya.Vector3(0, 0, this.speed), false)

        if (this.myOwner.transform.position.z >= GameLogic.Share._floorFinish.transform.position.z) {
            GameLogic.Share.finishCB(true)
        }
    }

}