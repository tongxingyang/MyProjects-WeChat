import { _decorator, Component, Node, Animation, Vec2, Vec3, v3, tween, view, Tween, TweenAction, resources, Prefab, instantiate, animation, RealKeyframeValue, AnimationClip, v4, Sprite, Color, color } from 'cc';
import BundleMgr from '../Mod/BundleMgr';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import GameData from './GameData';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    static Share: Player = null

    weaponPic: Node = null

    private ani: Animation = null
    private flashFX: Node = null
    private AttackEffect: Node = null
    private SkillEffect: Node = null
    private AwakenEffect1: Node = null
    private AwakenEffect2: Node = null

    public hp: number = 100
    public hpMax: number = 100
    public awakenNum: number = 0
    private atk: number = 100
    private speed: number = 1
    private critical: number = 0
    public weaponType: number = 0
    public enchantType: number = 0
    private attackStep: number = 0
    private moveSpeed: number = 10
    public skill1CoolTime: number = 0
    public skill2CoolTime: number = 0
    public playSkillIndex: number = 1

    private curAniName: string = ''

    private dirX: number = 0

    public isSkill1CoolDone: boolean = false
    public isSkill2CoolDone: boolean = false
    public isSkill1Cooling: boolean = false
    public isSkill2Cooling: boolean = false
    private canAttackCombo: boolean = false
    private isHurting: boolean = false
    private isAttacking: boolean = false
    private isSkilling: boolean = false
    private isFlashing: boolean = false
    private isInvincible: boolean = false
    public isAwakening: boolean = false
    private isDied: boolean = false

    private attackTweenTag: number = 1
    private hurtTweenTag: number = 2

    onLoad() {
        Player.Share = this
        this.ani = this.getComponent(Animation)
        this.weaponPic = this.node.getChildByName('BodyRoot').getChildByName('centre').getChildByName('arm_r').getChildByName('p_forearm_r').getChildByName('knife1_1')
        this.AttackEffect = this.node.getChildByName('AttackEffect')
        this.SkillEffect = this.node.getChildByName('SkillEffect')
    }

    start() {
        this.AwakenEffect2 = GameLogic.Share.node.getChildByName('AwakeEffect2')
        this.resetData()

        resources.load('Prefabs/Effect/FlashFX', Prefab, (err, res) => {
            this.flashFX = instantiate(res)
            this.flashFX.position = v3(-200, 100)
            this.node.addChild(this.flashFX)
        })

        resources.load('Prefabs/Effect/AwakeEffect1', Prefab, (err, res) => {
            this.AwakenEffect1 = instantiate(res)
            this.AwakenEffect1.position = v3(0, -30)
            this.node.addChild(this.AwakenEffect1)
        })

        this.playAnimation(this.idleName)
        this.ani.on(Animation.EventType.FINISHED, this.animationCompleted, this)

        this.resetPos()
        this.changeWeapon()
        if (GameData.VectorTrackDataArr.length <= 0)
            this.setRootVectorTrackValue()
    }

    resetData() {
        this.weaponType = GameData.weaponData[PlayerDataMgr.getPlayerData().weaponId].type
        let weaponId = PlayerDataMgr.getPlayerData().weaponId
        this.hp = PlayerDataMgr.getPlayerData().hp
        this.hpMax = this.hp
        this.speed = PlayerDataMgr.getPlayerData().speed
        this.critical = PlayerDataMgr.getPlayerData().critical
        this.atk = GameData.getWeaponAtk(weaponId)
    }

    changeWeapon() {
        let weaponId = PlayerDataMgr.getPlayerData().weaponId
        this.weaponType = GameData.weaponData[weaponId].type
        this.enchantType = PlayerDataMgr.getPlayerData().weaponEnchantTypeArr[weaponId]
        BundleMgr.setSpriteFrameInBundle(GameData.getWeaponDir(PlayerDataMgr.getPlayerData().weaponId, this.enchantType), this.weaponPic.getComponent(Sprite))
        switch (this.enchantType) {
            case 0:
                this.AttackEffect.getComponent(Sprite).color = new Color().fromHEX('#ffffff')
                this.SkillEffect.getComponent(Sprite).color = new Color().fromHEX('#ffffff')
                break
            case 1:
                this.AttackEffect.getComponent(Sprite).color = new Color().fromHEX('#ffff00')
                this.SkillEffect.getComponent(Sprite).color = new Color().fromHEX('#ffff00')
                break
            case 2:
                this.AttackEffect.getComponent(Sprite).color = new Color().fromHEX('#00ffff')
                this.SkillEffect.getComponent(Sprite).color = new Color().fromHEX('#00ffff')
                break
            case 3:
                this.AttackEffect.getComponent(Sprite).color = new Color().fromHEX('#F500FF')
                this.SkillEffect.getComponent(Sprite).color = new Color().fromHEX('#F500FF')
                break
            case 4:
                this.AttackEffect.getComponent(Sprite).color = new Color().fromHEX('#00FF00')
                this.SkillEffect.getComponent(Sprite).color = new Color().fromHEX('#00FF00')
                break
        }
    }

    setRootVectorTrackValue() {
        let clips: AnimationClip[] = this.ani.clips
        for (let i = 0; i < clips.length; i++) {
            let data: any = {}
            let clip = clips[i]
            let tracks: any = clip.tracks
            for (let j = 0; j < tracks.length; j++) {
                let path: animation.TrackPath = tracks[j].path
                if (!path) continue
                if (path.slice(0, 1).isPropertyAt(0) && path.slice(0, 1).parsePropertyAt(0) == 'position') {
                    data.name = clip.name
                    let track: animation.Track = tracks[j]
                    let arrX = []
                    let arrY = []
                    track.channels()[0].curve._values.forEach((v) => {
                        arrX.push(v.value)
                    });
                    track.channels()[1].curve._values.forEach((v) => {
                        arrY.push(v.value)
                    });
                    data.values = [arrX, arrY]
                    GameData.VectorTrackDataArr.push(data)
                }
            }
        }
    }

    getRootVectorTrack(clipName: string): any[] {
        let data: any[] = []
        for (let i = 0; i < GameData.VectorTrackDataArr.length; i++) {
            if (GameData.VectorTrackDataArr[i].name == clipName) {
                data = GameData.VectorTrackDataArr[i].values
            }
        }
        return data
    }

    applyRootVectorTrack(clipName: string) {
        let data: any[] = this.getRootVectorTrack(clipName)
        let tracks: any = this.ani.getState(clipName).clip.tracks
        for (let i = 0; i < tracks.length; i++) {
            let path: animation.TrackPath = tracks[i].path
            if (!path) continue
            if (path.slice(0, 1).isPropertyAt(0) && path.slice(0, 1).parsePropertyAt(0) == 'position') {
                let t: animation.Track = tracks[i]
                t.channels()[0].curve._values.forEach((v) => {
                    let id = t.channels()[0].curve._values.indexOf(v)
                    let desV = this.myPos.x + data[0][id] * this.node.getScale().x
                    if (desV < -view.getVisibleSize().width / 2 + 50) {
                        desV = -view.getVisibleSize().width / 2 + 50
                    }
                    if (desV > 3000 - view.getVisibleSize().width / 2 - 50) {
                        desV = 3000 - view.getVisibleSize().width / 2 - 50
                    }
                    v.value = desV
                });

                t.channels()[1].curve._values.forEach((v) => {
                    let id = t.channels()[1].curve._values.indexOf(v)
                    v.value = this.myPos.y + data[1][id]
                });
            }
        }
    }

    resetPos() {
        let pos = v3(-view.getVisibleSize().width / 2 + 400, this.myPos.y)
        this.node.position = pos
    }

    get myAtk(): number {
        return Math.random() * 100 < this.critical ? this.atk * 1.5 : this.atk
    }
    get myPos(): Vec3 {
        return this.node.position.clone()
    }
    get idleName(): string {
        return 'Idle' + (this.weaponType + 1)
    }
    get runName(): string {
        return 'Run' + (this.weaponType + 1)
    }
    get attackName(): string {
        return 'Attack' + (this.weaponType + 1) + '_' + this.attackStep
    }
    get skillName(): string {
        return 'Skill' + (this.weaponType + 1) + '_' + (GameData.getWeaponIndexById(PlayerDataMgr.getPlayerData().weaponId) + 1) + '_'
    }
    get flashName(): string {
        return 'Flash' + (this.weaponType + 1)
    }
    get hurtName(): string {
        return 'Hurt' + (this.weaponType + 1)
    }
    get diedName(): string {
        return 'Died' + (this.weaponType + 1)
    }

    playAnimation(name: string, speed?: number) {
        Tween.stopAllByTag(this.attackTweenTag, this.node)
        Tween.stopAllByTag(this.hurtTweenTag, this.node)

        this.ani.play(name)
        this.ani.getState(name).speed = speed ? speed : this.ani.getState(name).speed
        this.curAniName = name

        this.unschedule(this.resetAttacking)

        this.canAttackCombo = false
        this.isAttacking = false
        this.isHurting = false
        this.isSkilling = false
        this.isFlashing = false
        if (name.search('Attack') != -1) {
            this.isAttacking = true
        } if (name.search('Hurt') != -1) {
            this.isHurting = true
        } if (name.search('Skill') != -1) {
            this.isSkilling = true
        } if (name.search('Flash') != -1) {
            this.isFlashing = true
        }
    }

    animationCompleted(evt: AnimationEvent) {
        if (this.curAniName.search('Attack') != -1) {
            this.unschedule(this.resetAttackStep)
            this.scheduleOnce(this.resetAttackStep, 0.2)
        }
        if (this.curAniName.search('Skill') != -1) {
            this.isSkilling = false
            this.isInvincible = false
        }

        if (this.curAniName.search('Attack') != -1 || this.curAniName.search('Hurt') != -1 ||
            this.curAniName.search('Flash') != -1 || this.curAniName.search('Skill') != -1) {
            this.playAnimation(this.idleName)
        }
    }

    setMoveDir(dirX: number) {
        this.dirX = dirX
    }

    move() {
        if (this.dirX == 0 || this.isFlashing || this.isAttacking || this.isHurting || this.isSkilling || this.isDied) return

        if (!this.ani.getState(this.runName).isPlaying) {
            this.playAnimation(this.runName)
        }

        let sp = this.moveSpeed + (this.speed - 1) * 0.5
        let pos = this.myPos
        pos.x += this.dirX * sp
        this.node.position = pos
        this.node.setScale(v3(this.dirX, 1, 1))
    }
    resetMove() {
        if (this.isFlashing || this.isAttacking || this.isHurting || this.isSkilling || this.isDied) return
        this.playAnimation(this.idleName)
    }

    attack() {
        if (this.isFlashing || this.isHurting || this.isSkilling || this.isDied) return
        if (this.isAttacking && !this.canAttackCombo) {
            return
        }
        SoundMgr.Share.PlaySound('attack')
        this.unschedule(this.resetAttackStep)
        this.unschedule(this.resetAttacking)
        this.attackStep++
        if (this.attackStep > 3) this.attackStep = 1
        this.applyRootVectorTrack(this.attackName)
        this.playAnimation(this.attackName)
        this.scheduleOnce(this.resetAttacking,
            this.ani.getState(this.attackName).clip.duration / this.ani.getState(this.attackName).clip.speed * 0.65)

        //tween(this.node).by(0.1, { position: v3(this.node.getScale().x * 50, 0) }).tag(this.attackTweenTag).start()
    }
    resetAttackStep() {
        this.attackStep = 0
    }
    resetAttacking() {
        this.canAttackCombo = true
    }

    skill1() {
        if (this.isFlashing || this.isAttacking || this.isHurting || this.isSkilling || this.isDied) return
        this.playSkillIndex = 1
        this.isInvincible = true
        this.isSkill1Cooling = true
        this.isSkill1CoolDone = false
        this.skill1CoolTime = GameData.skillCoolTime[PlayerDataMgr.getPlayerData().weaponId][0]
        this.applyRootVectorTrack(this.skillName + 1)
        this.playAnimation(this.skillName + 1)
    }

    skill2() {
        if (this.isFlashing || this.isAttacking || this.isHurting || this.isSkilling || this.isDied) return
        this.playSkillIndex = 2
        this.isInvincible = true
        this.isSkill2Cooling = true
        this.isSkill2CoolDone = false
        this.skill2CoolTime = GameData.skillCoolTime[PlayerDataMgr.getPlayerData().weaponId][1]
        this.applyRootVectorTrack(this.skillName + 2)
        this.playAnimation(this.skillName + 2)
    }

    flash() {
        if (this.isFlashing || this.isAttacking || this.isHurting || this.isSkilling || this.isDied) return
        SoundMgr.Share.PlaySound('flash')
        this.playAnimation(this.flashName)
        this.isInvincible = true
        if (this.flashFX)
            this.flashFX.getComponent(Animation).play()
        let pos = this.myPos
        pos.x += this.node.getScale().x * 500
        tween(this.node).to(0.02, { position: pos }).call(() => {
            this.isInvincible = false
            this.isFlashing = false
        }).start()
    }

    addAwakenNum(v: number) {
        this.awakenNum += v
        if (this.awakenNum >= 100) {
            this.awakenNum = 100
        }
    }

    awaken() {
        SoundMgr.Share.PlaySound('awaken')
        this.awakenNum = 0
        this.AwakenEffect1.active = true
        this.AwakenEffect2.active = true
        this.isAwakening = true
        this.unschedule(this.resetAwakenEffect)
        this.scheduleOnce(this.resetAwakenEffect, 10)
    }
    resetAwakenEffect() {
        this.AwakenEffect1.active = false
        this.AwakenEffect2.active = false
        this.isAwakening = false
    }

    hurt(v: number, dir: number = 1) {
        if (this.isInvincible || this.isDied) return
        SoundMgr.Share.PlaySound('playerHurt')
        this.playAnimation(this.hurtName)
        tween(this.node).by(0.1, { position: v3(dir * 50, 0) }).tag(this.hurtTweenTag).start()
        this.hp -= v
        if (this.hp <= 0) {
            this.died()
        }
    }

    died() {
        if (this.isDied) return
        this.isDied = true
        this.playAnimation(this.diedName)
        this.scheduleOnce(() => {
            GameLogic.Share.gameOver(false)
        }, 2)
    }

    update(deltaTime: number) {
        if (this.isDied) return


        if (this.isSkill1Cooling) {
            this.skill1CoolTime -= deltaTime
            if (this.skill1CoolTime <= 0) {
                this.skill1CoolTime = 0
                this.isSkill1Cooling = false
                this.isSkill1CoolDone = true
            }
        }
        if (this.isSkill2Cooling) {
            this.skill2CoolTime -= deltaTime
            if (this.skill2CoolTime <= 0) {
                this.skill2CoolTime = 0
                this.isSkill2Cooling = false
                this.isSkill2CoolDone = true
            }
        }

        if (this.isAwakening) {
            this.hp += this.hpMax * 0.01
            if (this.hp > this.hpMax) this.hp = this.hpMax
            this.skill1CoolTime = 0
            this.skill2CoolTime = 0
        }

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

