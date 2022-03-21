import WxApi from "../../Libs/WxApi"
import GameLogic from "../GameLogic"

export default class SelectNode extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D = null
    greenBody: Laya.Sprite3D = null
    redBody: Laya.Sprite3D = null

    type: number = 0
    isFinish: boolean = false
    isLeft: boolean = false

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
        this.greenBody = this.myOwner.getChildAt(0) as Laya.Sprite3D
        this.redBody = this.myOwner.getChildAt(1) as Laya.Sprite3D
    }

    init(v: number, isLeft: boolean) {
        this.isLeft = isLeft
        this.type = v
        for (let i = 0; i < this.greenBody.numChildren; i++) {
            this.greenBody.getChildAt(i).active = v == i + 1
        }
        for (let i = 0; i < this.redBody.numChildren; i++) {
            this.redBody.getChildAt(i).active = v == i + 1
        }
    }

    onUpdate(): void {
        if (this.isFinish) {
            return
        }
        let playerPos: Laya.Vector3 = GameLogic.Share._player.transform.position.clone()
        let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()
        if (Math.abs(playerPos.z - myPos.z) <= 0.5) {
            WxApi.DoVibrate()
            this.isFinish = true
            if (playerPos.x >= 0) {
                myPos.y += 1.8
                myPos.x += 1.5
                GameLogic.Share.createLightFX(myPos)
                GameLogic.Share._playerCrl.changeBody(this.type, this.isLeft)
            } else {
                myPos.y += 1.8
                myPos.x -= 1.5
                GameLogic.Share.createLightFX(myPos)
                GameLogic.Share._playerCrl.changeBody(this.type, !this.isLeft)
            }
        }
    }
}