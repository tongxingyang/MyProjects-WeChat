import { _decorator, Component, Node, game, director, Director, instantiate, v3, view, Size, assetManager, Sprite, resources, Prefab, Vec3, UIOpacity, tween, Label } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import PlatformApi from '../Common/PlatformApi';
import { TipsNode } from '../Common/TipsNode';
import BundleMgr from '../Mod/BundleMgr';
import { DropPropType, UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import Utility from '../Mod/Utility';
import { DropProp } from './DropProp';
import { Monster } from './Monster';
import { Player } from './Player';
import { UINode } from './UINode';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {

    static Share: GameLogic

    @property(Prefab)
    MonsterPrefabArr: Prefab[] = []
    @property(Prefab)
    ArrowTipsPrefab: Prefab = null

    private BgNode: Node = null
    public StartBtnNode: Node = null
    public GameBtnNode: Node = null
    private gameNode: Node = null
    public monsterNode: Node = null
    public EffectNode: Node = null
    private PropNode: Node = null

    public curGrade: number = 1
    public waveCount: number = 1
    public gotMaterialsCount: number = 0
    public gotSoulCount: number = 0
    public gotEnchant1Count: number = 0
    public gotEnchant2Count: number = 0
    public gotEnchant3Count: number = 0
    public gotEnchant4Count: number = 0

    public isStart: boolean = false
    public isWin: boolean = false
    public isGameOver: boolean = false

    onLoad() {
        GameLogic.Share = this
        this.BgNode = this.node.getChildByName('BgNode')
        this.StartBtnNode = this.node.getChildByName('StartBtnNode')
        this.GameBtnNode = this.node.getChildByName('GameBtnNode')
        this.gameNode = this.node.getChildByName('GameNode')
        this.monsterNode = this.gameNode.getChildByName('MonsterNode')
        this.EffectNode = this.gameNode.getChildByName('EffectNode')
        this.PropNode = this.gameNode.getChildByName('PropNode')
    }

    start() {
    }

    get visibleSize(): Size {
        return view.getVisibleSize()
    }

    setTimeScale(v: number = 1, revocerTime: number = 0.1) {
        this.unschedule(this.resetTimeScale)
        director['_timeScale'] = v
        if (revocerTime > 0) {
            this.scheduleOnce(this.resetTimeScale, revocerTime)
        }
    }
    resetTimeScale() {
        director['_timeScale'] = 1
    }

    gameStart() {
        SoundMgr.Share.PlayMusic('gameBgm')
        PlayerDataMgr.getPlayerData().isNewer = false
        PlayerDataMgr.setPlayerData()
        UINode.Share.showUI(UIType.UI_GAME)
        this.isStart = true
        this.BgNode.children[0].active = false
        this.BgNode.children[1].active = true
        this.StartBtnNode.active = false
        Player.Share.resetPos()
        this.createMonster()
        this.schedule(this.checkMonsterClear)
    }

    createMonster() {
        for (let i = 0; i < 10; i++) {
            let id = Utility.GetRandom(0, 11)
            let m = instantiate(this.MonsterPrefabArr[id])
            this.monsterNode.addChild(m)
            m.active = true
            let x = Math.random() * (3000 - this.visibleSize.width / 2 - 500) + 400
            m.position = v3(x, -220)
            let crl = m.getComponent(Monster)
            crl.initData(id)
        }
    }

    createMonsterNextWave() {
        for (let i = 0; i < 10; i++) {
            let id = Utility.GetRandom(0, 11)
            let m = instantiate(this.MonsterPrefabArr[id])
            this.monsterNode.addChild(m)
            m.active = true
            let x = Utility.GetRandom(-view.getVisibleSize().width / 2 + 50, 3000 - view.getVisibleSize().width / 2 - 50, false)
            m.position = v3(x, -220)
            let crl = m.getComponent(Monster)
            crl.initData(id)
        }
    }

    createBoss() {
        for (let i = 0; i < 1; i++) {
            let id = Utility.GetRandom(0, 10)
            let m = instantiate(this.MonsterPrefabArr[id])
            this.monsterNode.addChild(m)
            m.active = true
            let x = 3000 - view.getVisibleSize().width / 2 - 350
            m.position = v3(x, -220)
            let crl = m.getComponent(Monster)
            crl.initData(id, true)
        }
    }

    checkMonsterClear() {
        // if (this.monsterNode.children.length <= 0 && this.waveCount >= 2) {
        //     this.waveCount = 1
        //     this.GameBtnNode.active = true
        //     this.unschedule(this.checkMonsterClear)
        // } else if (this.monsterNode.children.length <= 0 && this.waveCount < 2) {
        //     this.waveCount++
        //     this.createMonsterNextWave()
        // }
        if (this.monsterNode.children.length <= 0) {
            this.GameBtnNode.active = true
            this.unschedule(this.checkMonsterClear)
        }
    }

    createMonsterArrow(dmg: number) {
        let pos = v3(Player.Share.myPos.x, -220)
        let arrowTips = instantiate(this.ArrowTipsPrefab)
        this.gameNode.addChild(arrowTips)
        arrowTips.position = pos
        let arrow = arrowTips.getChildByName('arrow')
        this.scheduleOnce(() => {
            tween(arrow).to(0.2, { position: v3(0, 0) }).call(() => {
                if (Math.abs(arrowTips.position.x - Player.Share.myPos.x) <= 100) {
                    Player.Share.hurt(dmg)
                }
                arrowTips.destroy()
            }).start()
        }, 1)
    }

    createMonsterDmg(v: number, pos: Vec3) {
        resources.load('Prefabs/Effect/MonsterDmg', Prefab, (err, res) => {
            let dmg = instantiate(res)
            dmg.position = pos
            dmg.setScale(5, 5, 1)
            this.gameNode.addChild(dmg)
            dmg.getComponentInChildren(Label).string = '=' + Math.floor(v)
            tween(dmg).to(0.1, { scale: v3(1, 1, 1) }).by(1, { position: v3(0, 200) }).removeSelf().start()
        })
    }

    createDropProp(pos: Vec3, isBoss: boolean = false, type?: DropPropType) {
        let dir = ''
        if (!type) {
            if (Math.random() * 100 < (isBoss ? 5 : 1)) {
                type = Utility.GetRandom(2, 5)
                SoundMgr.Share.PlaySound('dropEnchant')
                PlatformApi.doVibrate(true)
            } else {
                if (Math.random() * 100 < 80) {
                    type = 0
                } else {
                    type = 1
                }
            }
        }
        if (type == 0) {
            dir = 'Prefabs/Drop/DropMaterial'
        } else if (type == 1) {
            dir = 'Prefabs/Drop/DropSoul'
        } else if (type == 2) {
            dir = 'Prefabs/Drop/DropEnchant1'
        } else if (type == 3) {
            dir = 'Prefabs/Drop/DropEnchant2'
        } else if (type == 4) {
            dir = 'Prefabs/Drop/DropEnchant3'
        } else if (type == 5) {
            dir = 'Prefabs/Drop/DropEnchant4'
        }
        resources.load(dir, Prefab, (err, res) => {
            let drop = instantiate(res)
            this.PropNode.addChild(drop)
            pos.y += 100
            drop.position = pos.clone()
            let p1 = pos.clone()
            let p2 = pos.clone()
            let p3 = pos.clone()
            let rNum = Math.random() * 100 - 50
            p2.x += rNum
            p2.y += 100
            p3.x = rNum == 0 ? 0 : (rNum > 0 ? p2.x + 50 : p2.x - 50)
            p3.y = -220
            if (p2.x < -view.getVisibleSize().width / 2 + 50) {
                p2.x = -view.getVisibleSize().width / 2 + 50
            }
            if (p2.x > 3000 - view.getVisibleSize().width / 2 - 50) {
                p2.x = 3000 - view.getVisibleSize().width / 2 - 50
            }
            if (p3.x < -view.getVisibleSize().width / 2 + 50) {
                p3.x = -view.getVisibleSize().width / 2 + 50
            }
            if (p3.x > 3000 - view.getVisibleSize().width / 2 - 50) {
                p3.x = 3000 - view.getVisibleSize().width / 2 - 50
            }
            let crl = drop.addComponent(DropProp)
            crl.initData(type)
            Utility.bezierTo(drop, 0.5, p1, p2, p3, null).call(() => { crl.isReady = true }).start()
        })
    }

    nextGrade() {
        this.curGrade++
        this.GameBtnNode.active = false
        Player.Share.resetPos()
        this.createMonster()
        if (this.curGrade % 5 == 0) this.createBoss()
        this.schedule(this.checkMonsterClear)
        this.PropNode.children.forEach((p) => {
            let crl = p.getComponent(DropProp)
            crl.gotCB()
        })
    }

    gameOver(isWin: boolean) {
        if (this.isGameOver) return
        this.unschedule(this.checkMonsterClear)
        if (isWin) {
            this.PropNode.children.forEach((p) => {
                let crl = p.getComponent(DropProp)
                crl.gotCB()
            })
        }
        this.isStart = false
        this.isWin = isWin
        this.isGameOver = true

        UINode.Share.closeUI(UIType.UI_GAME)
        FdMgr.showGameOver(() => {
            UINode.Share.showUI(UIType.UI_FINISH)
        })
    }

    restartGame() {
        director.loadScene('Game')
    }

    createTips(str: string) {
        resources.load('Prefabs/TipsNode', Prefab, (err, res) => {
            let tipsNode = instantiate(res)
            tipsNode.position = v3()
            this.node.addChild(tipsNode)
            tipsNode.getComponent(TipsNode).show(str)
        })
    }

    update(deltaTime: number) {

    }
}

