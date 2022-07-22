import { _decorator, Component, Node, dragonBones, tween, v3, Vec3, view, math, UIOpacity, Tween, Intersection2D, UITransform, Vec2 } from 'cc';
import { MonsterAniType } from '../Mod/Entity';
import Utility from '../Mod/Utility';
import { GameCamera } from './GameCamera';
import { GameLogic } from './GameLogic';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('Monster')
export class Monster extends Component {

    private ani: dragonBones.ArmatureDisplay = null
    private HitArea: Node = null

    private curAniName: MonsterAniType = MonsterAniType.Type_Idle

    private hp: number = 100
    private hpMax: number = 100
    private atk: number = 5
    private speed: number = 7
    private dirX: number = 1

    private edgeMin: number = 0
    private edgeMax: number = 0
    private hitBackTag1: number = 1
    private hitBackTag2: number = 2

    private isHunting: boolean = false
    private isAttacking: boolean = false
    private isHurting: boolean = false
    public isDied: boolean = false

    onLoad() {
        this.ani = this.node.getChildByName('db').getComponent(dragonBones.ArmatureDisplay)
        this.HitArea = this.node.getChildByName('hitArea')
        this.edgeMin = -view.getVisibleSize().width / 2 + 50
        this.edgeMax = 3000 - view.getVisibleSize().width / 2 - 50
    }

    start() {
        this.ani.on(dragonBones.EventObject.COMPLETE, this.animationCompleted, this)
        this.ani.on(dragonBones.EventObject.FRAME_EVENT, this.animationFrameEvent, this)
        this.hp = 1000 + GameLogic.Share.curGrade * 100
        this.hpMax = this.hp
        this.atk = 5 * GameLogic.Share.curGrade

        this.startHunt()
    }
    get myPos(): Vec3 {
        return this.node.position.clone()
    }

    playAnimation(name: MonsterAniType, times: number = -1, speed: number = 1) {
        if (this.curAniName == name && name != MonsterAniType.Type_Hurt) {
            return
        }
        this.ani.timeScale = speed
        this.ani.playAnimation(name, times)
        this.curAniName = name
        if (name == MonsterAniType.Type_Idle) this.dirX = 0
    }

    animationCompleted(evt) {
        if (this.curAniName == MonsterAniType.Type_Attack) {
            this.playAnimation(MonsterAniType.Type_Idle)
            this.isAttacking = false
        }
    }
    animationFrameEvent(evt: dragonBones.EventObject) {
        if (evt.name == 'checkAttack') {
            this.checkAttack()
        }
    }

    checkHurtPlayer() {
        let hPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(Utility.getWorldPos(this.HitArea))
        let pPos = Player.Share.myPos
        pPos.y += 100
        if (Vec2.distance(hPos, pPos) <= 120) {
            Player.Share.hurt(this.atk, this.myPos.x < Player.Share.myPos.x ? 1 : -1)
        }
    }

    startHunt() {
        if (this.isHurting || this.isAttacking || this.isDied) return
        let randNum = Math.random() * 1
        let huntType: number = 0
        if (randNum < 0.1) {
            huntType = 0
        } else if (randNum < 0.2) {
            huntType = 1
        } else if (randNum < 0.6) {
            huntType = 2
        } else {
            huntType = 3
        }

        if (Math.abs(this.myPos.x - Player.Share.node.position.x) <= 200 && Math.random() * 1 < 0.5) {
            huntType = 3
        }

        if (huntType == 0) {
            //待机
            this.playAnimation(MonsterAniType.Type_Idle)
            this.scheduleHunt(1)
        } else if (huntType == 1) {
            //随机行走
            this.dirX = Math.random() * 1 < 0.5 ? -1 : 1
            this.scheduleHunt(1)
        } else if (huntType == 2) {
            //行走至人物旁边
            this.dirX = Player.Share.node.position.x < this.myPos.x ? -1 : 1
            this.scheduleHunt(1)
        } else if (huntType == 3) {
            //攻击
            this.attack()
            this.scheduleHunt(2)
        }
    }
    scheduleHunt(time: number) {
        this.scheduleOnce(() => {
            this.scheduleOnce(this.startHunt, time)
        })
    }

    move() {
        if (this.isDied || this.isHurting || this.isAttacking) return

        let sp = this.speed
        let pos = this.myPos
        pos.x += this.dirX * sp
        this.node.position = pos
        if (this.dirX != 0) {
            this.node.setScale(v3(this.dirX * -1, 1, 1))
            this.playAnimation(MonsterAniType.Type_Run, -1, 0.8)
        }
    }

    attack() {
        if (this.isDied || this.isHurting) return
        this.isAttacking = true
        let times: number = Utility.GetRandom(1, 3)
        this.playAnimation(MonsterAniType.Type_Attack, times)
    }
    checkAttack() {
        this.checkHurtPlayer()
    }

    hurt(v: number, hurtType: number) {
        if (this.isDied || !this.node.active) return
        GameCamera.Share.shake()
        this.hp -= v
        this.playAnimation(MonsterAniType.Type_Hurt, 1)
        this.isHurting = true
        this.isAttacking = false
        this.unschedule(this.startHunt)
        if (this.hp < 0) {
            this.died()
            return
        }
        this.unschedule(this.resetHurt)
        let dir = this.node.position.x < Player.Share.node.position.x ? -1 : 1
        if (hurtType == 0) {
            this.scheduleOnce(this.resetHurt, 0.3)
        } else if (hurtType == 1) {
            this.schedule(this.resetHurt)
            Tween.stopAllByTag(this.hitBackTag1, this.node)
            Tween.stopAllByTag(this.hitBackTag2, this.node)
            tween(this.node).tag(this.hitBackTag1).to(0.04, { position: v3(this.myPos.x + dir * 100, -220) }).delay(0.3).call(() => {
                this.isHurting = false
            }).start()
        } else if (hurtType == 2) {
            this.schedule(this.resetHurt)
            Tween.stopAllByTag(this.hitBackTag1, this.node)
            Tween.stopAllByTag(this.hitBackTag2, this.node)
            let pos1 = this.myPos
            let pos2 = this.myPos
            let pos3 = this.myPos
            pos2.y += 400
            pos2.x += 150 * dir
            pos3.x += 300 * dir
            pos3.y = -220
            if (pos2.x < this.edgeMin) pos2.x = this.edgeMin
            if (pos2.x > this.edgeMax) pos2.x = this.edgeMax
            if (pos3.x < this.edgeMin) pos3.x = this.edgeMin
            if (pos3.x > this.edgeMax) pos3.x = this.edgeMax
            Utility.bezierTo(
                this.node, 0.6, pos1, pos2, pos3, null)
                .tag(this.hitBackTag2)
                .call(() => {
                    this.isHurting = false
                })
                .start()
        }
    }

    resetHurt() {
        if (!this.isHurting && this.node.position.y == -220 && !this.isDied) {
            this.isHurting = false
            this.playAnimation(MonsterAniType.Type_Idle)
            this.unschedule(this.resetHurt)
            this.startHunt()
        }
    }

    died() {
        if (this.isDied) return
        this.isDied = true
        this.playAnimation(MonsterAniType.Type_Died, 1)
        this.ani.node.getChildByName('FireFx').active = true
        tween(this.node.getChildByName('db').getComponent(UIOpacity)).to(1, { opacity: 0 }).call(() => {
            this.node.destroy()
        }).start()
    }


    update(deltaTime: number) {
        if (this.isDied) return

        this.move()

        let myPos = this.myPos
        if (myPos.x < -view.getVisibleSize().width / 2 + 50) {
            myPos.x = -view.getVisibleSize().width / 2 + 50
        }
        if (myPos.x > 3000 - view.getVisibleSize().width / 2 - 50) {
            myPos.x = 3000 - view.getVisibleSize().width / 2 - 50
        }
        this.node.position = myPos
    }
}

