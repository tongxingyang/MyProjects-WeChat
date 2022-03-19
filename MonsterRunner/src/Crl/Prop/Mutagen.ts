import WxApi from "../../Libs/WxApi"
import SoundMgr from "../../Mod/SoundMgr"
import GameLogic from "../GameLogic"

export default class Matugen extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D = null

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    onUpdate(): void {
        let playerPos: Laya.Vector3 = GameLogic.Share._player.transform.position.clone()
        let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()
        if (Laya.Vector3.distance(playerPos, myPos) <= 1) {
            SoundMgr.instance.playSoundEffect('mutagen.mp3')
            GameLogic.Share._playerCrl.addHp()
            WxApi.DoVibrate()
            this.myOwner.destroy()
        }
    }
}