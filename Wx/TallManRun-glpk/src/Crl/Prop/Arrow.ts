
import WxApi from "../../Libs/WxApi"
import SoundMgr from "../../Mod/SoundMgr"
import Utility from "../../Mod/Utility"
import Effects from "../Effects"
import GameLogic from "../GameLogic"

export default class Arrow extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null

    type: number = 1

    isDied: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    init(type: number) {
        this.type = type
    }

    onUpdate() {
        this.myOwner.transform.rotate(new Laya.Vector3(0, 1, 0), false, false)

        if (!this.isDied) {
            if (Utility.getWorldDis(this.myOwner, GameLogic.Share._player) <= 1.5) {
                WxApi.DoVibrate()
                switch (this.type) {
                    case 1:
                        SoundMgr.instance.playSoundEffect('green')
                        GameLogic.Share._playerCrl.changeV('+', 10)
                        Effects.createGreen(this.myOwner.transform.position.clone())
                        break
                    case 2:
                        SoundMgr.instance.playSoundEffect('red')
                        GameLogic.Share._playerCrl.changeV('-', 10)
                        Effects.createOrange(this.myOwner.transform.position.clone())
                        break
                    case 3:
                        SoundMgr.instance.playSoundEffect('green')
                        GameLogic.Share._playerCrl.changeH('+', 10)
                        Effects.createGreen(this.myOwner.transform.position.clone())
                        break
                    case 4:
                        SoundMgr.instance.playSoundEffect('red')
                        Effects.createPurple(this.myOwner.transform.position.clone())
                        GameLogic.Share._playerCrl.changeH('-', 10)
                        break
                }
                this.isDied = true
                this.myOwner.destroy()
                return
            }
        }
    }
}