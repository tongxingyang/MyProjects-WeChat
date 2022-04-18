import GameLogic from "./GameLogic"
import Utility from "../Mod/Utility"

export default class PlayerCrl extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D = null

    _ani: Laya.Animator = null
    weaponNode: Laya.Sprite3D = null
    atkArea: Laya.Sprite3D = null

    baseSpeed: number = 0.065
    speed: number = 0
    weaponIndex: number = 0

    canMove: boolean = true

    curAniName: string = ''

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
        this._ani = this.myOwner.getComponent(Laya.Animator)
        this.weaponNode = Utility.findNodeByName(this.myOwner, 'weapon_hand.R')
        this.atkArea = Utility.findNodeByName(this.myOwner, 'AtkArea')
        this.playAni('character_bones|default_idle_' + Utility.GetRandom(1, 7))
    }

    get myPos(): Laya.Vector3 {
        return this.myOwner.transform.position.clone()
    }

    playAni(name: string, speed: number = 1, normalizedTime: number = 0) {
        this._ani.crossFade(name, 0.2, 0, normalizedTime)
        this._ani.speed = speed
        this.curAniName = name
    }
    playIdle() {
        this.playAni(this.getAniTypeName() + 'idle')
    }
    playRun() {
        this.playAni(this.getAniTypeName() + 'run')
    }
    playAttack() {
        this.playAni(this.getAniTypeName() + 'attack')
    }
    playWin() {
        this.playAni(this.getAniTypeName() + 'win_1')
    }

    getAniTypeName() {
        switch (this.weaponIndex) {
            case 0:
                return 'character_bones|hammer_'
            case 1:
                return 'character_bones|sword_'
            case 2:
                return 'character_bones|gunman_'
            case 3:
                return 'character_bones|trapman_'
            case 4:
                return 'character_bones|hunter_'
        }
    }

    gameStart() {
        this.activeWeapon(this.weaponIndex)
        switch (this.weaponIndex) {
            case 0:
                this.activeAtkArea(0)
                break
            case 1:
                this.activeAtkArea(0)
                break
            case 2:
                this.activeAtkArea(1)
                break
            case 3:
                this.activeAtkArea(-1)
                break
            case 4:
                this.activeAtkArea(2)
                break
        }
    }

    activeWeapon(id: number) {
        for (let i = 0; i < this.weaponNode.numChildren; i++) {
            let weapon: Laya.Sprite3D = this.weaponNode.getChildAt(i) as Laya.Sprite3D
            weapon.active = i == id
        }
    }
    activeAtkArea(id: number) {
        for (let i = 0; i < this.atkArea.numChildren; i++) {
            let area: Laya.Sprite3D = this.atkArea.getChildAt(i) as Laya.Sprite3D
            area.active = i == id
        }
    }

    moveX() {
        if (GameLogic.Share.isGameOver || !this.canMove) return
        let speed = this.speed
    }

    hurtCB() {

    }

    winCB() {
    }

    onUpdate(): void {

    }
}