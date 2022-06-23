import { PlayerAniType } from "../../Mod/Entity"
import SoundMgr from "../../Mod/SoundMgr"
import Utility from "../../Mod/Utility"
import GameLogic from "../GameLogic"

export default class Wall extends Laya.Script {
    constructor() {
        super()
    }
    _ani: Laya.Animator = null
    myOwner: Laya.Sprite3D = null
    isDied: boolean = false

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
        this._ani = this.myOwner.getComponent(Laya.Animator)
        this._ani.speed = 0
        this.myOwner.transform.rotate(new Laya.Vector3(0, 180, 0), true, false)
    }

    onUpdate(): void {
        if (GameLogic.Share.isGameOver || this.isDied) return
        let playerPos: Laya.Vector3 = GameLogic.Share._player.transform.position.clone()
        let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()
        myPos.y = 0
        if (Math.abs(playerPos.z - myPos.z) < 1 && Math.abs(playerPos.x - myPos.x) < 3) {
            this.isDied = true
            SoundMgr.instance.playSoundEffect('hit.mp3')
            GameLogic.Share._playerCrl.playAni(PlayerAniType.ANI_ATTACK, 1.5)
            GameLogic.Share._playerCrl.decHp()
            this._ani.speed = 1
            myPos.z += 10
            Utility.TmoveTo(this.myOwner, 300, myPos, () => {
            }, Laya.Ease.linearIn)
        }
    }
}