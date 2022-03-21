import { PlayerAniType } from "../Mod/Entity"
import Utility from "../Mod/Utility"
import GameLogic from "./GameLogic"
import SoundMgr from "../Mod/SoundMgr"
import WxApi from "../Libs/WxApi"

export default class Boss extends Laya.Script {
    constructor() {
        super()
    }
    _ani: Laya.Animator
    myOwner: Laya.Sprite3D = null
    isDied: boolean = false
    hp: number = 10
    hpMax: number = 10

    curAniName: string = ""

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
        this._ani = this.myOwner.getComponent(Laya.Animator)
        this.init()
        this.playAni(PlayerAniType.ANI_BOXING_IDLE)
    }

    init() {
        let arr = ['Cat', 'Huga', 'Shouter']
        let str = Utility.getRandomItemInArr(arr)
        for (let i = 1; i < this.myOwner.numChildren; i++) {
            let sp: Laya.Sprite3D = this.myOwner.getChildAt(i) as Laya.Sprite3D
            sp.active = sp.name.search(str) != -1
        }
    }

    playAni(name: string, speed: number = 1, normalizedTime: number = 0) {
        if (name == this.curAniName || this.curAniName == PlayerAniType.ANI_WIN) return
        this._ani.crossFade(name, 0.2, 0, normalizedTime)
        this._ani.speed = speed
        this.curAniName = name
    }

    hitCB() {
        WxApi.DoVibrate()
        this.hp -= 2
        SoundMgr.instance.playSoundEffect('hurt.mp3')
        if (this.hp <= 0) {
            GameLogic.Share._scene.enableFog = false;
            this.isDied = true
            GameLogic.Share.isGameOver = true
            this.playAni(PlayerAniType.ANI_DIE, 1.5, 0.3)
            this.dieCB()
            Laya.timer.clearAll(this)
        } else {
            Laya.timer.once(200, this, () => {
                this.playAni(PlayerAniType.ANI_BOXING_HIT, 1.5)
            })
            Laya.timer.once(400, this, () => {
                this.playAni(PlayerAniType.ANI_BOXING_IDLE)
            })
        }
        let pos = this.myOwner.transform.position.clone()
        pos.y += 7
        pos.z -= 1
        GameLogic.Share.createHitFX(pos, this)
    }

    updateBoxingAtk() {
        if (this.isDied || GameLogic.Share.isGameOver) return
        Laya.timer.once(Math.random() * 1000 + 1000, this, () => {
            if (this.isDied || GameLogic.Share.isGameOver) return
            this.playAni(PlayerAniType.ANI_BOXING_ATTACK, 2)
            Laya.timer.once(200, this, () => {
                GameLogic.Share._playerCrl.hurtCB(Math.random() * 1 + 1)
            })
            Laya.timer.once(500, this, () => {
                this.playAni(PlayerAniType.ANI_BOXING_IDLE)
            })
            this.updateBoxingAtk()

            let pos = GameLogic.Share._player.transform.position.clone()
            pos.y += 7
            GameLogic.Share.createHitFX(pos, this)
        })
    }

    dieCB() {
        let pos = this.myOwner.transform.position.clone()
        pos.y += 20
        pos.z += 60
        Utility.TmoveTo(this.myOwner, 2000, pos, () => {
            GameLogic.Share.gameOver(true)
        })
        let r = this.myOwner.transform.rotationEuler.clone()
        r.z = Math.random() * 720 + 360
        Utility.RotateTo(this.myOwner, 2000, r, null)
        GameLogic.Share._cameraCrl.bossDie()
    }

    onUpdate(): void {
    }
}