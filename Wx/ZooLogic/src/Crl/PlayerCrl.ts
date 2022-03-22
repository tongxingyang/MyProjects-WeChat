import Utility from "../Mod/Utility"
import GameUI from "../View/GameUI"
import GameLogic from "./GameLogic"

export default class PlayerCrl extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D = null

    hpMax: number = 10
    hp: number = 10
    powerMax: number = 10
    power: number = 10

    moveDir: number = 0
    speed: number = 0.08

    canMove: boolean = true
    hadLeg: boolean = false
    isPlayer: boolean = false

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    initData(hp: number, power: number, isPlayer: boolean = false) {
        this.isPlayer = isPlayer
        this.hpMax = hp
        this.hp = hp
        this.powerMax = power
        this.power = power
        if (this.myOwner.getChildByName('FLegNode').numChildren > 0 || this.myOwner.getChildByName('BLegNode').numChildren > 0) {
            let pos = this.myOwner.transform.position.clone()
            pos.y += 1.8
            this.myOwner.transform.position = pos
            this.hadLeg = true
        }
    }

    moveX() {
        if (GameLogic.Share.isGameOver || !this.canMove) return

        let speed = this.speed
        if (!this.hadLeg) speed *= 0.5
        if (this.moveDir > 0) {
            this.myOwner.transform.translate(new Laya.Vector3(speed, 0, 0), false)
        } else if (this.moveDir < 0) {
            this.myOwner.transform.translate(new Laya.Vector3(-speed, 0, 0), false)
        }
    }

    hurtCB(dmg: number) {
        this.canMove = false
        let pos = this.myOwner.transform.position.clone()
        pos.x += this.isPlayer ? 4 : -4
        Utility.TmoveTo(this.myOwner, 200, pos, () => {
            this.canMove = true
        })
        if(this.isPlayer){
            GameUI.Share.createPlayerDmg(dmg)
        }else{
            GameUI.Share.createEnemyDmg(dmg)
        }
        this.hp -= dmg
        if (this.hp <= 0) {
            this.hp = 0
            GameLogic.Share.gameOver(!this.isPlayer)
            let myPos = this.myOwner.transform.position.clone()
            myPos.y = 1
            myPos.z -= 1.5
            Utility.TmoveTo(this.myOwner, 800, myPos, null)
            let myRot = this.myOwner.transform.rotationEuler.clone()
            myRot.x = this.isPlayer ? -90 : 90
            Utility.RotateTo(this.myOwner, 800, myRot, null)
            return
        }
    }

    onUpdate(): void {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) {
            return
        }

        this.moveX()

        if (this.myOwner.transform.position.x < -30) {
            let pos = this.myOwner.transform.position.clone()
            pos.x = -30
            this.myOwner.transform.position = pos
        } else if (this.myOwner.transform.position.x > 30) {
            let pos = this.myOwner.transform.position.clone()
            pos.x = 30
            this.myOwner.transform.position = pos
        }
    }
}