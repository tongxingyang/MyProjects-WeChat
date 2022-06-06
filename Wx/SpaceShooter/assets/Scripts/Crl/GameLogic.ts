import { _decorator, Component, Node, tween, v3, view, resources, Prefab, instantiate, Vec3, dragonBones, SpriteFrame } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import { PropType, UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import Utility from '../Mod/Utility';
import BulletPool from './BulletPool';
import { Plane } from './Plane';
import { Prop } from './Prop';
import { UINode } from './UINode';
import WormHitPool from './WormHitPool';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {
    public static Share: GameLogic

    planeDBAsset: dragonBones.DragonBonesAsset[] = []
    planeDBAtlasAsset: dragonBones.DragonBonesAtlasAsset[] = []
    wormDBAsset: dragonBones.DragonBonesAsset[] = []
    wormDBAtlasAsset: dragonBones.DragonBonesAtlasAsset[] = []

    @property(Prefab)
    effectPrefabsArr: Prefab[] = []
    @property(SpriteFrame)
    planeBulletSPArr: SpriteFrame[] = []
    @property(SpriteFrame)
    propPlaneSPArr: SpriteFrame[] = []
    @property(SpriteFrame)
    wormBulletSPArr: SpriteFrame[] = []

    @property(Prefab)
    bossHitFX: Prefab = null
    @property(Prefab)
    wormHitFX: Prefab = null

    groupNode: Node = null
    propNode: Node = null
    wormBulletNode: Node = null
    bossBulletNode: Node = null
    effectNode: Node = null
    boss1: Node = null
    boss2: Node = null
    boss3: Node = null

    wormArr: Node[] = []

    waveCount: number = 1
    reviveCount: number = 0
    hadShowPow: boolean = false
    hadCreateBossHit1: boolean = false

    isStart: boolean = false
    isWin: boolean = false
    isPause: boolean = false
    isGameOver: boolean = false

    onLoad() {
        GameLogic.Share = this
        this.groupNode = this.node.getChildByName('GroupNode')
        this.propNode = this.node.getChildByName('PropNode')
        this.wormBulletNode = this.node.getChildByName('wormBulletNode')
        this.bossBulletNode = this.node.getChildByName('BossBulletNode')
        this.effectNode = this.node.getChildByName('effectNode')
        this.boss1 = this.node.getChildByName('Boss1')
        this.boss2 = this.node.getChildByName('Boss2')
        this.boss3 = this.node.getChildByName('Boss3')
        BulletPool.initPool()
        WormHitPool.initPool()
    }

    start() {
        this.loadWormDBData(() => {
            this.loadPlaneDBData(() => {
                this.node.getChildByName('Plane').active = true
            })
        })
    }

    getWormBulletSPByName(name: string) {
        for (let i = 0; i < this.wormBulletSPArr.length; i++) {
            if (this.wormBulletSPArr[i].name == name) return this.wormBulletSPArr[i]
        }
        return null
    }

    getPropPlaneSPByName(name: string) {
        for (let i = 0; i < this.propPlaneSPArr.length; i++) {
            if (this.propPlaneSPArr[i].name == name) return this.propPlaneSPArr[i]
        }
        return null
    }

    getPlaneBulletSPByName(name: string) {
        for (let i = 0; i < this.planeBulletSPArr.length; i++) {
            if (this.planeBulletSPArr[i].name == name) return this.planeBulletSPArr[i]
        }
        return null
    }

    getEffectPrefabByName(name: string) {
        for (let i = 0; i < this.effectPrefabsArr.length; i++) {
            if (this.effectPrefabsArr[i].data.name == name) return this.effectPrefabsArr[i]
        }
        return null
    }

    loadWormDBData(callBack: Function) {
        let finish1: boolean = false
        let finish2: boolean = false
        let type = 1
        let cb1 = () => {
            resources.load('DB/Worm/w' + type + '_ani_ske', dragonBones.DragonBonesAsset, (err, res) => {
                this.wormDBAsset.push(res)
                type++
                if (type > 10) { finish1 = true; return }
                cb1()
            })
        }
        cb1()

        let type1 = 1
        let cb2 = () => {
            resources.load('DB/Worm/w' + type1 + '_ani_tex', dragonBones.DragonBonesAtlasAsset, (err, res) => {
                this.wormDBAtlasAsset.push(res)
                type1++
                if (type1 > 10) { finish2 = true; return }
                cb2()
            })
        }
        cb2()

        let cb = () => {
            if (finish1 && finish2) {
                this.unschedule(cb)
                callBack && callBack()
            }
        }
        this.schedule(cb)
    }

    loadPlaneDBData(callBack: Function) {
        let finish1: boolean = false
        let finish2: boolean = false
        let type = 1
        let index = 1
        let cb1 = () => {
            resources.load('DB/Plane/s' + type + '_' + index + 'ani_ske', dragonBones.DragonBonesAsset, (err, res) => {
                this.planeDBAsset.push(res)
                index++
                if (index > 3) {
                    index = 1
                    type++
                    if (type > 6) { finish1 = true; return }
                }
                cb1()
            })
        }
        cb1()

        let type1 = 1
        let index1 = 1
        let cb2 = () => {
            resources.load('DB/Plane/s' + type1 + '_' + index1 + 'ani_tex', dragonBones.DragonBonesAtlasAsset, (err, res) => {
                this.planeDBAtlasAsset.push(res)
                index1++
                if (index1 > 3) {
                    index1 = 1
                    type1++
                    if (type1 > 6) { finish2 = true; return }
                }
                cb2()
            })
        }
        cb2()

        let cb = () => {
            if (finish1 && finish2) {
                this.unschedule(cb)
                callBack && callBack()
            }
        }
        this.schedule(cb)
    }

    gameStart() {
        tween(this.node.getChildByName('Plane')).to(0.5, { position: v3(0, -(view.getVisibleSize().height / 2 - 350)) }).call(() => {
            this.isStart = true
            this.scheduleOnce(() => { Plane.Share.isInvincible = false }, 2)
            this.createGroup(PlayerDataMgr.getPlayerData().grade == 1 ? 1 : Utility.GetRandom(1, 10))
        }).start()
    }

    createGroup(id: number) {
        resources.load('Prefabs/Group' + id, Prefab, (err, res) => {
            if (err) { console.log(err); return }
            let group = instantiate(res)
            this.groupNode.addChild(group)
        })
    }

    clearGroup() {
        this.waveCount++
        let bossWave = 4
        if (PlayerDataMgr.getPlayerData().grade == 1) bossWave = 3
        else if (PlayerDataMgr.getPlayerData().grade == 1) bossWave = 4
        else bossWave = 5
        if (this.waveCount > bossWave) {
            SoundMgr.Share.PlaySound('warning', true)
            this.scheduleOnce(() => { SoundMgr.Share.stopSound('warning') }, 2)
            this['boss' + (Math.floor((PlayerDataMgr.getPlayerData().grade - 1) % 3) + 1)].active = true
            //this.boss1.active = true
        } else {
            this.scheduleOnce(() => {
                this.createGroup(Utility.GetRandom(1, 10))
            }, 2)
        }
    }

    createProp(type: PropType, pos: Vec3) {
        let prop = instantiate(this.getEffectPrefabByName('prop'))
        prop.setPosition(pos)
        this.propNode.addChild(prop)
        let crl = prop.addComponent(Prop)
        crl.initData(type)
    }

    createHit1FX(bossNode: Node) {
        if (this.hadCreateBossHit1) return
        this.hadCreateBossHit1 = true
        SoundMgr.Share.PlaySound('bossSmoke')
        let fx = instantiate(this.getEffectPrefabByName('bossHit1'))
        fx.setPosition(v3())
        fx.setScale(v3(1.5, 1.5, 1))
        fx.active = true
        bossNode.addChild(fx)
    }

    createBossDiedFX(bossNode: Node) {
        let fx = instantiate(this.getEffectPrefabByName('bossDied'))
        fx.setPosition(v3())
        fx.setScale(v3(1.5, 1.5, 1))
        fx.active = true
        bossNode.addChild(fx)
    }

    revive() {
        SoundMgr.Share.PlayMusic('bgm')
        UINode.Share.showUI(UIType.UI_GAME)
        this.wormBulletNode.destroyAllChildren()
        this.isStart = true
        this.isGameOver = false
        this.isPause = false
        Plane.Share.lifeCount = 3
        Plane.Share.node.active = true
        Plane.Share.isInvincible = true
        this.scheduleOnce(() => { Plane.Share.isInvincible = false }, 2)
    }

    gameOver(isWin: boolean) {
        if (this.isGameOver) return

        this.isWin = isWin
        this.isStart = false
        this.isGameOver = true
        this.isPause = true

        if (!isWin) {
            if (this.reviveCount <= 0) {
                Plane.Share.node.active = false
                this.reviveCount++
                UINode.Share.showUI(UIType.UI_Revive)
                return
            } else {
                Plane.Share.node.active = false
                this.showFinishUI()
            }
        } else {
            SoundMgr.Share.PlaySound('win')
            Plane.Share.stopCreateBullet()
            this.scheduleOnce(() => {
                Plane.Share.node.getChildByName("fire").active = true
                tween(Plane.Share.node).by(1.5, { position: v3(0, 2000) }, { easing: "backIn" }).call(() => {
                    this.showFinishUI()
                }).start()
            }, 1)
        }
    }

    showFinishUI() {
        FdMgr.showGameOver(() => {
            UINode.Share.showUI(UIType.UI_FINISH)
        })
    }

    update(deltaTime: number) {

    }
}

