import { _decorator, Component, Node, game, director, Director, instantiate, v3, view, Size, assetManager, Sprite } from 'cc';
import BundleMgr from '../Mod/BundleMgr';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { Player } from './Player';
import { UINode } from './UINode';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {

    static Share: GameLogic

    private MonsterPrefab: Node = null
    private BgNode: Node = null
    public StartBtnNode: Node = null
    public GameBtnNode: Node = null
    private gameNode: Node = null
    public monsterNode: Node = null
    public EffectNode: Node = null

    public curGrade: number = 1
    public gotMaterialsCount: number = 0
    public gotSoulCount: number = 0
    public gotEnchant1Count: number = 0
    public gotEnchant2Count: number = 0
    public gotEnchant3Count: number = 0
    public gotEnchant4Count: number = 0

    public isWin: boolean = false
    public isGameOver: boolean = false

    onLoad() {
        GameLogic.Share = this
        this.BgNode = this.node.getChildByName('BgNode')
        this.StartBtnNode = this.node.getChildByName('StartBtnNode')
        this.GameBtnNode = this.node.getChildByName('GameBtnNode')
        this.gameNode = this.node.getChildByName('GameNode')
        this.MonsterPrefab = this.gameNode.getChildByName('MonsterPrefab')
        this.monsterNode = this.gameNode.getChildByName('MonsterNode')
        this.EffectNode = this.gameNode.getChildByName('EffectNode')
    }

    start() {
    }

    get visibleSize(): Size {
        return view.getVisibleSize()
    }

    setTimeScale(v: number = 1) {
        director['_timeScale'] = v
    }

    gameStart() {
        UINode.Share.showUI(UIType.UI_GAME)
        this.BgNode.children[0].active = false
        this.BgNode.children[1].active = true
        this.StartBtnNode.active = false
        Player.Share.resetPos()
        this.createMonster()
        this.schedule(this.checkMonsterClear)
    }

    createMonster() {
        for (let i = 0; i < 10; i++) {
            let m = instantiate(this.MonsterPrefab)
            this.monsterNode.addChild(m)
            m.active = true
            let x = Math.random() * (3000 - this.visibleSize.width / 2 - 500) + 400
            m.position = v3(x, -220)
        }
    }

    checkMonsterClear() {
        if (this.monsterNode.children.length <= 0) {
            this.GameBtnNode.active = true
            this.unschedule(this.checkMonsterClear)
        }
    }

    nextGrade() {
        this.curGrade++
        this.GameBtnNode.active = false
        Player.Share.resetPos()
        this.createMonster()
        this.schedule(this.checkMonsterClear)
    }

    gameOver(isWin: boolean) {
        if (this.isGameOver) return
        this.unschedule(this.checkMonsterClear)
        this.isWin = isWin
        this.isGameOver = true

        UINode.Share.showUI(UIType.UI_FINISH)
    }

    restartGame() {
        director.loadScene('Game')
    }

    update(deltaTime: number) {

    }
}

