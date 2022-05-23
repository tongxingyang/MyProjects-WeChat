
import Man from "./Man";
import Utility from "../Mod/Utility";
import GameLogic from "./GameLogic";
import PlayerCrl from "./PlayerCrl";
import TNT from "./Prop/TNT";
import PlayerDataMgr from "../Libs/PlayerDataMgr";

export default class Enemy extends Man {
    constructor() {
        super()
    }

    initData(skinId: number) {
        this.speed = 0.1
        this.isPlayer = false
        this.changeSkin(skinId)
    }

    gameStart() {
        this.playIdle()
        this.weaponIndex = Utility.GetRandom(0, 4)
        this.activeWeapon(this.weaponIndex)
    }

    hunt() {
        if (this.isDied || PlayerDataMgr.getPlayerData().grade <= 1) return
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
        this.myDir = new Laya.Vector3(Math.random() * 2 - 1, 0, Math.random() * 2 - 1)
        Laya.Vector3.normalize(this.myDir, this.myDir)
        Laya.timer.once(Math.random() * 2000 + 2000, this, () => {
            this.attack()
        })
    }

    attack() {
        if (!this.canMove || this.isDied) { return }
        this.canMove = false
        Laya.timer.once(500, this, () => { this.canMove = true; this.hunt() })
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
                delay = 200
                break
            case 4:
                delay = 150
                break
        }
        Laya.timer.once(delay, this, this.checkHitOpponet)
    }

    checkHitOpponet() {
        if (this.weaponIndex != 3) {
            if (this.weaponIndex == 0) {
                this.smoke_beat.active = true
                Laya.timer.once(1000, this, () => { this.smoke_beat.active = false })
            }
            let arr = []
            let area = this.atkArea.getChildAt(this.areaIndex)
            for (let i = 0; i < area.numChildren; i++) {
                let node: Laya.Sprite3D = area.getChildAt(i) as Laya.Sprite3D
                let pos = node.transform.position.clone()
                arr.push(new Laya.Vector2(pos.x, pos.z))
            }
            let player: Laya.Sprite3D = GameLogic.Share._player
            let ePos: Laya.Vector3 = player.transform.position.clone()
            let crl: PlayerCrl = player.getComponent(PlayerCrl)
            if (Utility.pointInPolygon(new Laya.Vector2(ePos.x, ePos.z), arr)) {
                crl.hurtCB()
            }
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
            crl.initData(false, this.scaleNum)
            tnt.transform.setWorldLossyScale(new Laya.Vector3(this.scaleNum, this.scaleNum, this.scaleNum))

            let desPos: Laya.Vector3 = new Laya.Vector3()
            let dir = this.myDir.clone()
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
}