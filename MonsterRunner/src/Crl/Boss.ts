import { PlayerAniType } from "../Mod/Entity"
import Utility from "../Mod/Utility"
import GameLogic from "./GameLogic"

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
        if (name == this.curAniName) return
        this._ani.crossFade(name, 0.2, 0, normalizedTime)
        this._ani.speed = speed
        this.curAniName = name
    }

    hitCB() {
        this.hp -= 2
        if (this.hp <= 0) {
            this.isDied = true
            this.playAni(PlayerAniType.ANI_DIE, 1.5, 0.3)
            GameLogic.Share.gameOver(true)
        } else {
            Laya.timer.once(200, this, () => {
                this.playAni(PlayerAniType.ANI_BOXING_HIT, 1.5)
            })
            Laya.timer.once(400, this, () => {
                this.playAni(PlayerAniType.ANI_BOXING_IDLE)
            })
        }
    }

    onUpdate(): void {
    }
}