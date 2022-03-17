import WxApi from "../../Libs/WxApi"
import SoundMgr from "../../Mod/SoundMgr"
import Utility from "../../Mod/Utility"
import GameLogic from "../GameLogic"

export default class Barrel extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D = null
    isDied: boolean = false

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    onUpdate(): void {
        let playerPos: Laya.Vector3 = GameLogic.Share._player.transform.position.clone()
        let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()

        if ((myPos.x > 3 || myPos.x < -3) && this.myOwner.transform.position.y > -5) {
            this.myOwner.transform.translate(new Laya.Vector3(0, -0.2, 0), false)
        }

        if (this.isDied) return
        if (Laya.Vector3.distance(playerPos, myPos) <= 2) {
            SoundMgr.instance.playSoundEffect('hit.mp3')
            WxApi.DoVibrate()
            this.isDied = true
            let x = this.myOwner.transform.position.x >= 0 ? Math.random() * 2 + 3 : -(Math.random() * 2 + 3)
            myPos.x = x
            myPos.z += (Math.random() * 10 + 10)
            Utility.TmoveTo(this.myOwner, 500, myPos, null)

            let r: Laya.Vector3 = new Laya.Vector3()
            r.x = Math.random() * 720 + 360
            r.y = Math.random() * 720 + 360
            r.z = Math.random() * 720 + 360
            Utility.RotateTo(this.myOwner, 500, r, null)
        }
    }
}