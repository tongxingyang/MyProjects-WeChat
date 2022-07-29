import PlayerDataMgr, { ItemId } from "../Libs/PlayerDataMgr"
import { PlayerAniType } from "../Mod/Entity"
import SoundMgr from "../Mod/SoundMgr"
import Utility from "../Mod/Utility"
import Effects from "./Effects"
import GameLogic from "./GameLogic"

export default class Monster extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D
    ani: Laya.Animator = null

    target: Laya.Sprite3D = null
    armNodeL: Laya.Sprite3D = null
    armNodeR: Laya.Sprite3D = null

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
        this.armNodeL = Utility.findNodeByName(this.myOwner, 'ArmNodeL')
        this.armNodeR = Utility.findNodeByName(this.myOwner, 'ArmNodeR')
        let handL = this.armNodeL.getChildAt(0) as Laya.Sprite3D
        let aniL = handL.getComponent(Laya.Animator) as Laya.Animator
        aniL.getControllerLayer().getAnimatorState('Attack').clip.islooping = false
        let handR = this.armNodeR.getChildAt(0) as Laya.Sprite3D
        let aniR = handR.getComponent(Laya.Animator) as Laya.Animator
        aniR.getControllerLayer().getAnimatorState('Attack').clip.islooping = false
    }

    playAni(name: PlayerAniType, speed: number = 1) {
        if (name == this.curAni && name != PlayerAniType.ANI_ATTACK) return
        Laya.timer.clear(this, this.attackComplete)
        Laya.timer.clear(this, this.shootBullet)

        let handL = this.armNodeL.getChildAt(0) as Laya.Sprite3D
        let aniL = handL.getComponent(Laya.Animator) as Laya.Animator
        aniL.play('Idle', 0, 0)
        let handR = this.armNodeR.getChildAt(0) as Laya.Sprite3D
        let aniR = handR.getComponent(Laya.Animator) as Laya.Animator
        aniR.play('Idle', 0, 0)

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
        this.isNear = PlayerDataMgr.getIsNearByHandId(item.handId)
        let hpV = PlayerDataMgr.getHpByType(item.type)
        this.hp = isPlayer ? hpV * 1.5 : hpV
        this.hpMax = isPlayer ? hpV * 1.5 : hpV
        Laya.timer.once(isPlayer ? 1000 : 6000, this, () => {
            this.chooseTarget()
            if (!isPlayer) this.monsterAutoSkill()
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
        let p1 = this.myOwner.transform.position.clone()
        let p2 = this.target.transform.position.clone()
        p1.y = 0
        p2.y = 0
        if (Laya.Vector3.distance(p1, p2) > (this.isNear ? 2 : 3)) {
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
    }

    attack() {
        if (!this.target || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || this.isSkilling || this.isAttacking || this.isDied) return
        this.isAttacking = true
        if (this.isNear) {
            this.playAni(PlayerAniType.ANI_ATTACK)
            let time = this.ani.getControllerLayer().getAnimatorState(PlayerAniType.ANI_ATTACK).clip.duration()
            Laya.timer.once(time * 1000, this, () => { this.isAttacking = false })
            Laya.timer.once(PlayerDataMgr.getAttackEventTime(this.itemData.bodyId), this, this.attackComplete)
        } else {
            if (this.isPlayer)
                SoundMgr.instance.playSoundEffect('shoot')
            this.playAni(PlayerAniType.ANI_IDLE)
            let handL = this.armNodeL.getChildAt(0) as Laya.Sprite3D
            let aniL = handL.getComponent(Laya.Animator) as Laya.Animator
            aniL.play('Attack', 0, 0)
            let handR = this.armNodeR.getChildAt(0) as Laya.Sprite3D
            let aniR = handR.getComponent(Laya.Animator) as Laya.Animator
            aniR.play('Attack', 0, 0)
            Laya.timer.once(500, this, this.shootBullet)
            Laya.timer.once(1000, this, () => { this.isAttacking = false })
        }
    }
    attackComplete() {
        if (!this.target) return
        let targetCrl = this.target.getComponent(Monster) as Monster
        targetCrl.decHp(PlayerDataMgr.getDamageByType(this.itemData.type))
    }
    shootBullet() {
        if (!this.target || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || this.isSkilling) return
        let posL = Utility.findNodeByName(this.armNodeL, 'Pos').transform.position.clone()
        let posR = Utility.findNodeByName(this.armNodeR, 'Pos').transform.position.clone()
        let desPos = this.target.transform.position.clone()
        desPos.y += 1
        if (this.itemData.handId == 6) {
            Effects.createAttack2(posL, desPos, () => {
                if (!this.target) return
                let targetCrl = this.target.getComponent(Monster) as Monster
                targetCrl.decHp(PlayerDataMgr.getDamageByType(this.itemData.type) / 3, 2)
            })
            Effects.createAttack2(posR, desPos, () => {
                if (!this.target) return
                let targetCrl = this.target.getComponent(Monster) as Monster
                targetCrl.decHp(PlayerDataMgr.getDamageByType(this.itemData.type) / 3, 2)
            })
        } else {
            Effects.createAttack1(posL, desPos, () => {
                if (!this.target) return
                let targetCrl = this.target.getComponent(Monster) as Monster
                targetCrl.decHp(PlayerDataMgr.getDamageByType(this.itemData.type) / 3, 1)
            })
            Effects.createAttack1(posR, desPos, () => {
                if (!this.target) return
                let targetCrl = this.target.getComponent(Monster) as Monster
                targetCrl.decHp(PlayerDataMgr.getDamageByType(this.itemData.type) / 3, 1)
            })
        }
    }

    skill() {
        if (!this.target || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || this.isSkilling || this.isDied) return

        Effects.createFlyCast(this.myOwner)

        if (this.isPlayer)
            SoundMgr.instance.playSoundEffect('flyCast')
        this.isSkilling = true
        this.playAni(PlayerAniType.ANI_FLYCAST)
        let pos = this.myOwner.transform.position.clone()
        let pos1 = pos.clone()
        pos.y += 1.5
        Utility.TmoveTo(this.myOwner, 800, pos, () => {
            Laya.timer.once(1200, this, () => {
                Utility.TmoveTo(this.myOwner, 300, pos1, () => {
                    Effects.createFlyCast3(this.myOwner)
                    this.isSkilling = false

                    let opNode = this.isPlayer ? GameLogic.Share._enemyNode : GameLogic.Share._playerNode
                    for (let i = 0; i < opNode.numChildren; i++) {
                        let node = opNode.getChildAt(i) as Laya.Sprite3D
                        let crl = node.getComponent(Monster) as Monster
                        if (crl.isDied) continue
                        let opPos = node.transform.position.clone()
                        opPos.y += 1
                        let myPos = this.myOwner.transform.position.clone()
                        myPos.y += 1
                        Effects.createFlyCastBullet(myPos, opPos, () => {
                            crl.decHp(PlayerDataMgr.getDamageByType(crl.itemData.type) * 2, 4)
                        })
                    }
                })
            })
        }, Laya.Ease.linearIn)
        if (this.isPlayer) {
            GameLogic.Share._cameraCrl.zoomSkillTarget(this.myOwner)
        }
    }

    monsterAutoSkill() {
        Laya.timer.once(Math.random() * 5000 + 7000, this, () => {
            this.skill()
            this.monsterAutoSkill()
        })
    }

    decHp(v: number, type: number = 3) {
        if (this.isDied) return

        let pos = this.myOwner.transform.position.clone()
        if (type == 1) {
            pos.y += 1
            Effects.createHurt1(pos)
            SoundMgr.instance.playSoundEffect('waterHit')
        } else if (type == 2) {
            pos.y += 1
            Effects.createHurt2(pos)
            SoundMgr.instance.playSoundEffect('coin')
        } else if (type == 3) {
            pos.y += 1
            Effects.createHurt3(pos)
            SoundMgr.instance.playSoundEffect('hit')
        }
        else if (type == 4) {
            pos.y += 1
            Effects.createSkillHurt(pos)
            SoundMgr.instance.playSoundEffect('fire')
        }

        this.hp -= this.isPlayer ? v / 2 : v
        if (this.hp < 0) {
            this.hp = 0
            if (this.isSkilling) return
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