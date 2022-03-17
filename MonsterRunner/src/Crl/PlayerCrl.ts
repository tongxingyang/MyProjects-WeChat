
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import { PlayerAniType } from "../Mod/Entity"
import SoundMgr from "../Mod/SoundMgr"
import Utility from "../Mod/Utility"
import GameLogic from "./GameLogic"

export default class PlayerCrl extends Laya.Script {
    constructor() {
        super()
    }
    _ani: Laya.Animator
    myOwner: Laya.Sprite3D = null

    touchX: number = 0
    speed: number = 0.15
    hp: number = 10
    hpMax: number = 10
    edgeMax: number = 3

    canMove: boolean = true
    curAniName: string = ""

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
        this._ani = this.myOwner.getComponent(Laya.Animator)
        this.init()
    }

    init() {
        for (let i = 1; i < this.myOwner.numChildren; i++) {
            let sp: Laya.Sprite3D = this.myOwner.getChildAt(i) as Laya.Sprite3D
            sp.active = sp.name.search('Dude') != -1
        }
    }

    startRun() {
        this.myOwner.transform.position = new Laya.Vector3(0, 0, 0)
        this.myOwner.transform.rotationEuler = new Laya.Vector3(0, 0, 0)
        this.playAni(PlayerAniType.ANI_RUN)
    }

    walkToDes() {
        this.speed = 0.1
        this.playAni(PlayerAniType.ANI_WALK)
        let desPos: Laya.Vector3 = GameLogic.Share._roadFinish.transform.position.clone()
        desPos.z += 19
        Utility.TmoveTo(this.myOwner, 3000, desPos, () => {
            this.win()
        })
    }

    win() {
        this.playAni(PlayerAniType.ANI_WIN)
        let r: Laya.Vector3 = this.myOwner.transform.localRotationEuler.clone()
        r.y += 180
        Utility.RotateTo(this.myOwner, 500, r, null)
        GameLogic.Share.gameOver(true)
    }

    playAni(name: string, speed: number = 1, normalizedTime: number = 0) {
        if (name == this.curAniName) return
        this._ani.crossFade(name, 0.2, 0, normalizedTime)
        this._ani.speed = speed
        this.curAniName = name
        if (name == PlayerAniType.ANI_ATTACK) {
            Laya.timer.once(500, this, () => {
                this.playAni(PlayerAniType.ANI_RUN)
            })
        }
    }

    changeBody(v: number, isGreen: boolean) {
        let skinArr: string = PlayerDataMgr.getSkinStr()
        if (!isGreen) {
            skinArr = Utility.getRandomItemInArr(['Cat_', 'Huga_', 'Shouter_'])
            SoundMgr.instance.playSoundEffect('red.mp3')
        } else {
            SoundMgr.instance.playSoundEffect('green.mp3')
            GameLogic.Share.correctCount++
        }
        let bodyStr: string = ''
        switch (v) {
            case 1:
                bodyStr = 'Head'
                break
            case 2:
                bodyStr = 'Torso'
                break
            case 3:
                bodyStr = 'Arm_L'
                break
            case 4:
                bodyStr = 'Arm_R'
                break
            case 5:
                bodyStr = 'Leg_L'
                break
            case 6:
                bodyStr = 'Leg_R'
                break
        }
        let str: string = skinArr + bodyStr;
        this.myOwner.getChildByName('Dude_' + bodyStr).active = false
        this.myOwner.getChildByName(str).active = true
    }

    moveX() {
        if (GameLogic.Share.isGameOver || !this.canMove) return

        let pos = new Laya.Vector3(0, 0, this.speed)
        this.myOwner.transform.translate(pos, false)

        let x = this.touchX
        x -= Laya.stage.displayWidth / 2
        x = x / (Laya.stage.displayWidth / 2) * this.edgeMax
        pos = this.myOwner.transform.position.clone()
        pos.x = -x
        Laya.Vector3.lerp(this.myOwner.transform.position.clone(), pos, 0.2, pos)
        this.myOwner.transform.position = pos
    }

    hurtCB(dmg: number) {
    }

    onUpdate(): void {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isFinish) {
            return
        }

        if (Math.abs(this.myOwner.transform.position.z - GameLogic.Share._desNode.transform.position.z) <= 1) {
            GameLogic.Share.finish()
            return
        }

        this.moveX()

        if (this.myOwner.transform.position.x < -this.edgeMax) {
            let pos = this.myOwner.transform.position.clone()
            pos.x = -this.edgeMax
            this.myOwner.transform.position = pos
        } else if (this.myOwner.transform.position.x > this.edgeMax) {
            let pos = this.myOwner.transform.position.clone()
            pos.x = this.edgeMax
            this.myOwner.transform.position = pos
        }
    }
}