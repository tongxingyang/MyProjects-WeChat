import { _decorator, Component, Node, tween, v3, view, resources, Prefab, instantiate, Vec3 } from 'cc';
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

    @property(Prefab)
    bossHitFX: Prefab = null

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
        resources.load('Prefabs/prop', Prefab, (err, res) => {
            if (err) return
            let prop = instantiate(res)
            prop.setPosition(pos)
            this.propNode.addChild(prop)
            let crl = prop.addComponent(Prop)
            crl.initData(type)
        })
    }

    createHit1FX(bossNode: Node) {
        if (bossNode.getChildByName('bossHit1')) return
        resources.load('Prefabs/Effects/bossHit1', Prefab, (err, res) => {
            SoundMgr.Share.PlaySound('bossSmoke')
            let fx = instantiate(res)
            fx.setPosition(v3())
            fx.setScale(v3(1.5, 1.5, 1))
            fx.active = true
            bossNode.addChild(fx)
            //this.scheduleOnce(() => { fx.destroy(); }, 3)
        })
    }

    createBossDiedFX(bossNode: Node) {
        resources.load('Prefabs/Effects/bossDied', Prefab, (err, res) => {
            let fx = instantiate(res)
            fx.setPosition(v3())
            fx.setScale(v3(1.5, 1.5, 1))
            fx.active = true
            bossNode.addChild(fx)
            //this.scheduleOnce(() => { fx.destroy(); }, 3)
        })
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

