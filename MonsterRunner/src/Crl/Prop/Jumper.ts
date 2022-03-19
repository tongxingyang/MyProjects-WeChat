
import GameLogic from "../GameLogic"
import SoundMgr from "../../Mod/SoundMgr"

export default class Jumper extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null
    isDied: boolean = false

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    onUpdate(): void {
        if (GameLogic.Share.isGameOver || this.isDied) return
        let playerPos: Laya.Vector3 = GameLogic.Share._player.transform.position.clone()
        let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()
        myPos.y = 0
        if (Laya.Vector3.distance(myPos, playerPos) < 1) {
            this.isDied = true
            SoundMgr.instance.playSoundEffect('spring.mp3')
            GameLogic.Share._playerCrl.jump()
        }
    }
}