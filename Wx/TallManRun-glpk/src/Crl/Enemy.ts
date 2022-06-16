
import WxApi from "../Libs/WxApi"
import SoundMgr from "../Mod/SoundMgr"
import Utility from "../Mod/Utility"
import GameLogic from "./GameLogic"

export default class Enemy extends Laya.Script {
    constructor() {
        super()
    }
    _ani: Laya.Animator
    myOwner: Laya.Sprite3D = null
    isDied: boolean = false

    curAniName: string = ""

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
        this._ani = this.myOwner.getComponent(Laya.Animator)
        this.playAni('idle')
    }

    playAni(name: string, speed: number = 1, normalizedTime: number = 0) {
        if (name == this.curAniName) return
        this._ani.crossFade(name, 0.2, 0, normalizedTime)
        this._ani.speed = speed
        this.curAniName = name
    }

    hitCB() {
        let playerPos: Laya.Vector3 = GameLogic.Share._player.transform.position.clone()
        let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()
        // let dir: Laya.Vector3 = new Laya.Vector3()
        // Laya.Vector3.subtract(myPos, playerPos, dir)
        // Laya.Vector3.normalize(dir, dir)
        // Laya.Vector3.scale(dir, 5, dir)
        myPos.z += 15
        Utility.TmoveTo(this.myOwner, 800, myPos, null, Laya.Ease.linearIn)
    }

    onUpdate(): void {
        let playerPos: Laya.Vector3 = GameLogic.Share._player.transform.position.clone()
        let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()
        if (!this.isDied && !GameLogic.Share.isGameOver && !GameLogic.Share.isFinish) {
            if (Laya.Vector3.distance(playerPos, myPos) <= 1) {
                this.playAni('die')
                GameLogic.Share._playerCrl.decHV(1)
                SoundMgr.instance.playSoundEffect('hit')
                WxApi.DoVibrate()
                this.isDied = true
                this.hitCB()
                return
            }
        }
        if (Math.abs(myPos.z - playerPos.z) <= 7 && !this.isDied) {
            this.playAni('walk')
            this.myOwner.transform.lookAt(playerPos, new Laya.Vector3(0, 1, 0))
            let myR = this.myOwner.transform.localRotationEuler.clone()
            myR.y += 180
            this.myOwner.transform.localRotationEuler = myR
            let dir: Laya.Vector3 = new Laya.Vector3()
            Laya.Vector3.subtract(playerPos, myPos, dir)
            Laya.Vector3.normalize(dir, dir)
            Laya.Vector3.scale(dir, 0.05, dir)
            this.myOwner.transform.translate(dir, false)
        }
    }
}