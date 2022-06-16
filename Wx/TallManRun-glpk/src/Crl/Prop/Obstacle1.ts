import WxApi from "../../Libs/WxApi"
import SoundMgr from "../../Mod/SoundMgr"
import Utility from "../../Mod/Utility"
import Effects from "../Effects"
import GameLogic from "../GameLogic"

export default class Obstacle1 extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null

    isDied: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    onUpdate() {
        if (!this.isDied && !GameLogic.Share.isGameOver) {
            let myPos = this.myOwner.transform.position.clone()
            let pPos = GameLogic.Share._player.transform.position.clone()
            if (Math.abs(myPos.x - pPos.x) <= 1 && Math.abs(myPos.z - pPos.z) <= 0.2) {
                SoundMgr.instance.playSoundEffect('hurt')
                WxApi.DoVibrate()
                Effects.createPurple(this.myOwner.transform.position.clone())
                let x = Math.random() >= 0.5 ? Math.random() * 2 + 3.5 : -(Math.random() * 2 + 3.5)
                myPos.x = x
                myPos.z += (Math.random() * 10 + 10)
                Utility.TmoveTo(this.myOwner, 1500, myPos, null)

                let r: Laya.Vector3 = new Laya.Vector3()
                r.x = Math.random() * 720 + 360
                r.y = Math.random() * 720 + 360
                r.z = Math.random() * 720 + 360
                Utility.RotateTo(this.myOwner, 1500, r, null)
                this.isDied = true

                if (!GameLogic.Share.isFinish)
                    GameLogic.Share._playerCrl.decHV(1)
                else
                    GameLogic.Share._playerCrl.decHV()
            }
        } else {
            let myPos = this.myOwner.transform.position.clone()
            if ((myPos.x > 3.5 || myPos.x < -3.5) && this.myOwner.transform.position.y > -5) {
                this.myOwner.transform.translate(new Laya.Vector3(0, -0.2, 0), false)
            }
        }
    }
}