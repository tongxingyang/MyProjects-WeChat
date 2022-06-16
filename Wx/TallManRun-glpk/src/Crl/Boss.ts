import { PlayerAniType } from "../Mod/Entity"

export default class Boss extends Laya.Script {
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
        this.init()
    }

    init() {
    }

    playAni(name: string, speed: number = 1, normalizedTime: number = 0) {
        this._ani.crossFade(name, 0.2, 0, normalizedTime)
        this._ani.speed = speed
        this.curAniName = name
    }

    hitCB() {
    }

    dieCB() {
    }

    onUpdate(): void {
    }
}