
import Man from "./Man"
import Utility from "../Mod/Utility"
import GameLogic from "./GameLogic"
import Enemy from "./Enemy"
import TNT from "./Prop/TNT"
import WxApi from "../Libs/WxApi"
import SoundMgr from "../Mod/SoundMgr"
import GameUI from "../View/GameUI"

export default class PlayerCrl extends Man {
    constructor() {
        super()
    }

    initData(weaponIndex: number, skinId: number) {
        this.weaponIndex = weaponIndex
        this.changeSkin(skinId)
        Laya.timer.frameLoop(10, this, this.myUpdate)
    }

    gameStart() {
        this.playIdle()
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
        this.smoke_1.active = true
    }

    attack() {
        if (!this.canMove || this.isDied) { return }
        this.canMove = false
        Laya.timer.once(500, this, () => { this.canMove = true })
        this.playAttack()
        let delay: number = 0
        switch (this.weaponIndex) {
            case 0:
                delay = 400
                break
            case 1:
                delay = 200
                break
            case 2:
                delay = 150
                break
            case 3:
                delay = 100
                break
            case 4:
                delay = 150
                break
        }
        Laya.timer.once(delay, this, this.checkHitOpponet)
    }

    checkHitOpponet() {
        switch (this.weaponIndex) {
            case 0:
                SoundMgr.instance.playSoundEffect('Hammer.mp3')
                break
            case 1:
                SoundMgr.instance.playSoundEffect('Sword.mp3')
                break
            case 2:
                SoundMgr.instance.playSoundEffect('Gun.mp3')
                break
            case 3:
                SoundMgr.instance.playSoundEffect('Trap.mp3')
                break
            case 4:
                SoundMgr.instance.playSoundEffect('Hunter.mp3')
                break
        }
        if (this.weaponIndex != 3) {
            Utility.objectShake(GameLogic.Share._camera, 0.1, 0.5)
            WxApi.DoVibrate()
            if (this.weaponIndex == 0) {
                this.smoke_beat.active = true
                Laya.timer.once(1000, this, () => { this.smoke_beat.active = false })
            } else if (this.weaponIndex == 2 || this.weaponIndex == 4) {
                this.weaponNode.getChildAt(this.weaponIndex).getChildAt(0).active = true
                Laya.timer.once(1000, this, () => {
                    this.weaponNode.getChildAt(this.weaponIndex).getChildAt(0).active = false
                })
            }
            let arr = []
            let area = this.atkArea.getChildAt(this.areaIndex)
            for (let i = 0; i < area.numChildren; i++) {
                let node: Laya.Sprite3D = area.getChildAt(i) as Laya.Sprite3D
                let pos = node.transform.position.clone()
                arr.push(new Laya.Vector2(pos.x, pos.z))
            }
            let count = 0
            for (let i = GameLogic.Share._enemyNode.numChildren - 1; i >= 0; i--) {
                let enemy: Laya.Sprite3D = GameLogic.Share._enemyNode.getChildAt(i) as Laya.Sprite3D
                let ePos: Laya.Vector3 = enemy.transform.position.clone()
                let crl: Enemy = enemy.getComponent(Enemy)
                if (Utility.pointInPolygon(new Laya.Vector2(ePos.x, ePos.z), arr)) {
                    count++
                    crl.hurtCB(true)
                }
            }
            if (count > 0)
                GameUI.Share.showTips(count)
        } else {
            this.createTnt()
        }
    }

    createTnt() {
        for (let i = 0; i < 3; i++) {
            let tntRes: Laya.Sprite3D = GameLogic.Share._scene.getChildByName('TNT_1') as Laya.Sprite3D
            let tnt = Laya.Sprite3D.instantiate(tntRes, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0))
            tnt.active = true
            let pos = this.myPos
            pos.y += 1
            tnt.transform.position = pos
            let crl: TNT = tnt.addComponent(TNT)
            crl.initData(true, this.scaleNum)
            tnt.transform.setWorldLossyScale(new Laya.Vector3(this.scaleNum, this.scaleNum, this.scaleNum))

            let desPos: Laya.Vector3 = new Laya.Vector3()
            let dir = this.tempDir.clone()
            let s = this.scaleNum / 2
            if (s < 1) s = 1
            let dis = 4 * s
            if (i == 1) {
                dis = 8 * s
                dir = Utility.RotateWithPoint(dir, new Laya.Vector3(0, 1, 0), 30)
            } else if (i == 2) {
                dis = 8 * s
                dir = Utility.RotateWithPoint(dir, new Laya.Vector3(0, 1, 0), -30)
            }
            Laya.Vector3.scale(dir, dis, dir)
            Laya.Vector3.add(this.myPos, dir, desPos)
            Utility.TmoveTo(tnt, 100, desPos, null)
        }
    }

    winCB() {
        this.atkArea.active = false
        this.smoke_1.active = false
        this.playWin()
        this.myOwner.transform.rotationEuler = new Laya.Vector3(0, 180, 0)
        this.scaleNum = 1
        this.myOwner.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1))
    }

    myUpdate() {
        if (this.weaponIndex != 3) {
            let arr = []
            let area = this.atkArea.getChildAt(this.areaIndex)
            for (let i = 0; i < area.numChildren; i++) {
                let node: Laya.Sprite3D = area.getChildAt(i) as Laya.Sprite3D
                let pos = node.transform.position.clone()
                arr.push(new Laya.Vector2(pos.x, pos.z))
            }
            for (let i = GameLogic.Share._enemyNode.numChildren - 1; i >= 0; i--) {
                let enemy: Laya.Sprite3D = GameLogic.Share._enemyNode.getChildAt(i) as Laya.Sprite3D
                let ePos: Laya.Vector3 = enemy.transform.position.clone()
                let crl: Enemy = enemy.getComponent(Enemy)
                if (Utility.pointInPolygon(new Laya.Vector2(ePos.x, ePos.z), arr)) {
                    //自动攻击
                    this.attack()
                    break
                }
            }
        }
    }
}