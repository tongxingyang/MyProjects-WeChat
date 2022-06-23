import PlayerDataMgr, { ItemId } from "../Libs/PlayerDataMgr"
import { PlayerAniType } from "../Mod/Entity"
import Utility from "../Mod/Utility"
import GameLogic from "./GameLogic"

export default class Monster extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D
    ani: Laya.Animator = null

    target: Laya.Sprite3D = null

    itemData: ItemId = null

    hp: number = 1000
    hpMax: number = 1000
    moveSpeed: number = 0.04
    curAni: PlayerAniType = PlayerAniType.ANI_IDLE

    isAttacking: boolean = false
    isSkilling: boolean = false
    isMoveing: boolean = true
    isNear: boolean = true
    isPlayer: boolean = true
    isDied: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
        this.ani = this.myOwner.getComponent(Laya.Animator)
        this.ani.getControllerLayer().getAnimatorState(PlayerAniType.ANI_ATTACK).clip.islooping = false
    }

    playAni(name: PlayerAniType, speed: number = 1) {
        if (name == this.curAni && name != PlayerAniType.ANI_ATTACK) return
        Laya.timer.clear(this, this.attackComplete)
        if (name != PlayerAniType.ANI_ATTACK) this.isAttacking = false
        if (name != PlayerAniType.ANI_FLYCAST) this.isSkilling = false
        if (name != PlayerAniType.ANI_RUN) this.isMoveing = false
        this.curAni = name
        this.ani.speed = speed
        this.ani.crossFade(name, 0.02, 0, 0)
    }

    init(isPlayer: boolean, item: ItemId) {
        this.itemData = item
        this.isPlayer = isPlayer
        let hpV = PlayerDataMgr.getHpByType(item.type)
        this.hp = isPlayer ? hpV * 1.5 : hpV
        this.hpMax = isPlayer ? hpV * 1.5 : hpV
        Laya.timer.once(isPlayer ? 1000 : 6000, this, () => {
            this.chooseTarget()
        })
    }

    chooseTarget() {
        if (this.isPlayer) {
            let arr = []
            for (let i = 0; i < GameLogic.Share._enemyNode.numChildren; i++) {
                let enemy = GameLogic.Share._enemyNode.getChildAt(i)
                let crl: Monster = enemy.getComponent(Monster)
                if (crl.isDied) { arr.push(999); continue }
                arr.push(Utility.getWorldDis(enemy as Laya.Sprite3D, this.myOwner))
            }

            let hadEnemy: boolean = false
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] != 999) { hadEnemy = true; break; }
            }
            if (!hadEnemy) {
                this.target = null
                return
            }
            let arr1 = [].concat(arr)
            arr1.sort((a, b) => { return a - b })
            let id = arr.indexOf(arr1[0])
            this.target = GameLogic.Share._enemyNode.getChildAt(id) as Laya.Sprite3D
        } else {
            let arr = []
            for (let i = 0; i < GameLogic.Share._playerNode.numChildren; i++) {
                let player = GameLogic.Share._playerNode.getChildAt(i)
                let crl: Monster = player.getComponent(Monster)
                if (crl.isDied) { arr.push(999); continue }
                arr.push(Utility.getWorldDis(player as Laya.Sprite3D, this.myOwner))
            }

            let hadPlayer: boolean = false
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] != 999) { hadPlayer = true; break; }
            }
            if (!hadPlayer) {
                this.target = null
                return
            }
            let arr1 = [].concat(arr)
            arr1.sort((a, b) => { return a - b })
            let id = arr.indexOf(arr1[0])
            this.target = GameLogic.Share._playerNode.getChildAt(id) as Laya.Sprite3D
        }
    }

    moveToTarget() {
        if (!this.target || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || this.isSkilling || this.isAttacking || this.isDied) return
        if (this.target.getComponent(Monster).isDied) { this.chooseTarget(); return }
        if (this.isNear) {
            let p1 = this.myOwner.transform.position.clone()
            let p2 = this.target.transform.position.clone()
            p1.y = 0
            p2.y = 0
            if (Laya.Vector3.distance(p1, p2) > 2) {
                let dir = new Laya.Vector3(0, 0, 0)
                Laya.Vector3.subtract(p2, p1, dir)
                Laya.Vector3.normalize(dir, dir)
                Laya.Vector3.scale(dir, this.moveSpeed, dir)
                let myPos = this.myOwner.transform.position.clone()
                Laya.Vector3.add(myPos, dir, myPos)
                this.myOwner.transform.position = myPos
                this.isMoveing = true
                this.playAni(PlayerAniType.ANI_RUN)
            } else {
                this.isMoveing = false
                this.attack()
            }
        } else {

        }
    }

    attack() {
        if (!this.target || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || this.isSkilling || this.isAttacking || this.isDied) return
        this.isAttacking = true
        this.playAni(PlayerAniType.ANI_ATTACK)
        let time = this.ani.getControllerLayer().getAnimatorState(PlayerAniType.ANI_ATTACK).clip.duration()
        Laya.timer.once(time * 1000, this, () => { this.isAttacking = false })
        Laya.timer.once(PlayerDataMgr.getAttackEventTime(this.itemData.bodyId), this, this.attackComplete)
    }
    attackComplete() {
        let targetCrl = this.target.getComponent(Monster)
        targetCrl.decHp(PlayerDataMgr.getDamageByType(this.itemData.type))
    }

    skill() {
        if (!this.target || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || this.isSkilling || this.isDied) return
        this.isSkilling = true
        this.playAni(PlayerAniType.ANI_FLYCAST)
        let pos = this.myOwner.transform.position.clone()
        let pos1 = pos.clone()
        pos.y += 1.5
        Utility.TmoveTo(this.myOwner, 800, pos, () => {
            Laya.timer.once(1200, this, () => {
                Utility.TmoveTo(this.myOwner, 300, pos1, () => {
                    this.isSkilling = false
                    let opNode = this.isPlayer ? GameLogic.Share._enemyNode : GameLogic.Share._playerNode
                    for (let i = 0; i < opNode.numChildren; i++) {
                        let node = opNode.getChildAt(i) as Laya.Sprite3D
                        let crl = node.getComponent(Monster) as Monster
                        if (crl.isDied) continue
                        crl.decHp(PlayerDataMgr.getDamageByType(crl.itemData.type) * 2)
                    }
                })
            })
        }, Laya.Ease.linearIn)
        if (this.isPlayer) {
            GameLogic.Share._cameraCrl.zoomSkillTarget(this.myOwner)
        }
    }

    decHp(v: number) {
        if (this.isDied || this.isSkilling) return
        this.hp -= this.isPlayer ? v / 2 : v
        if (this.hp < 0) {
            this.hp = 0
            this.isDied = true
            Laya.timer.clearAll(this)
            this.playAni(PlayerAniType.ANI_DEATH)
        }
    }

    onUpdate() {
        this.moveToTarget()

        if (this.target) {
            let pos = this.target.transform.position.clone()
            pos.y = 0
            this.myOwner.transform.lookAt(pos, new Laya.Vector3(0, 1, 0), false)
            this.myOwner.transform.rotate(new Laya.Vector3(0, 180, 0), false, false)
        }
    }
}