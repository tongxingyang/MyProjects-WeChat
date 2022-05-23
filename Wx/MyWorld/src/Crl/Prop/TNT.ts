import GameLogic from "../GameLogic"
import Enemy from "../Enemy"
import PlayerCrl from "../PlayerCrl"
import SoundMgr from "../../Mod/SoundMgr"

export default class TNT extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D = null
    isPlayer: boolean = false
    scaleNum: number = 1

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
        Laya.timer.once(2000, this, () => {
            GameLogic.Share.createBoomFX(this.myOwner);
            this.myOwner.destroy()
        })
    }

    onDestroy() {
        Laya.timer.clearAll(this)
    }

    initData(isPlayer: boolean, scaleNum: number) {
        this.isPlayer = isPlayer
        this.scaleNum = scaleNum
    }

    onUpdate() {
        if (this.isPlayer) {
            for (let i = 0; i < GameLogic.Share._enemyNode.numChildren; i++) {
                let enemy: Laya.Sprite3D = GameLogic.Share._enemyNode.getChildAt(i) as Laya.Sprite3D
                let ePos: Laya.Vector3 = enemy.transform.position.clone()
                let crl: Enemy = enemy.getComponent(Enemy)
                let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()
                if (Laya.Vector3.distance(myPos, ePos) <= this.scaleNum) {
                    crl.hurtCB(this.isPlayer)
                    SoundMgr.instance.playSoundEffect('Boom.mp3')
                    GameLogic.Share.createBoomFX(this.myOwner)
                    this.myOwner.destroy()
                    break
                }
            }
        } else {
            let player: Laya.Sprite3D = GameLogic.Share._player
            let pPos: Laya.Vector3 = player.transform.position.clone()
            let crl: PlayerCrl = player.getComponent(PlayerCrl)
            let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()
            if (Laya.Vector3.distance(myPos, pPos) <= this.scaleNum) {
                crl.hurtCB(this.isPlayer)
                SoundMgr.instance.playSoundEffect('Boom.mp3')
                GameLogic.Share.createBoomFX(this.myOwner)
                this.myOwner.destroy()
            }
        }
    }
}