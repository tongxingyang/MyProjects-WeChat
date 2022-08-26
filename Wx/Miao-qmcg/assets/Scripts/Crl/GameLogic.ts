import { _decorator, Component, Node, resources, Prefab, instantiate, dragonBones, director, v3, tween, view, Label } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import Utility from '../Mod/Utility';
import GameData from './GameData';
import { Player } from './Player';
import { UINode } from './UINode';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {
    static Share: GameLogic

    levelNode: Node = null
    player: Node = null
    playerCrl: Player = null

    leftMax: Node = null
    rightMax: Node = null

    isStart: boolean = false
    isGameOver: boolean = false
    isWin: boolean = false
    isPause: boolean = false

    curGrade: number = 1

    onLoad() {
        GameLogic.Share = this
        this.levelNode = this.node.getChildByName('LevelNode')
    }

    start() {

    }

    gameStart() {
        SoundMgr.Share.PlayMusic('ingame_loop' + Utility.GetRandom(1, 2))
        let grade = Math.floor((PlayerDataMgr.getPlayerData().grade - 1) % PlayerDataMgr.maxGrade) + 1
        this.curGrade = grade
        resources.load('Prefabs/Levels/Level' + grade, Prefab, (err, res) => {
            let level = instantiate(res)
            let pos = v3(0, -view.getVisibleSize().height / 2)
            level.setPosition(pos)
            this.leftMax = level.getChildByName('coll').getChildByName('left')
            this.rightMax = level.getChildByName('coll').getChildByName('right')
            this.levelNode.addChild(level)
            this.player = level.getChildByName('player')
            this.playerCrl = this.player.getComponent(Player)

            level.getChildByName('tips').getComponentInChildren(Label).string = GameData.tipsArr[grade-1]

            this.isStart = true

            UINode.Share.showUI(UIType.UI_GAME)
        })
    }

    gameOver(isWin: boolean) {
        if (this.isGameOver) return
        this.isGameOver = true
        this.isStart = false
        this.isWin = isWin
        this.isPause = true
        UINode.Share.closeUI(UIType.UI_GAME)

        if (isWin) {
            SoundMgr.Share.PlaySound('win_01')
        } else {
            SoundMgr.Share.PlaySound('lose')
            this.playerCrl.loseCB()
        }

        this.scheduleOnce(() => {
            FdMgr.showGameOver(() => {
                UINode.Share.showUI(UIType.UI_FINISH)
            })
        }, 2.5)
    }

    restart(isToHome: boolean = true) {
        if (!isToHome) {
            let g = this.curGrade
            if (this.isWin) {
                g = this.curGrade + 1
            }
            director.loadScene('Game', () => {
                GameLogic.Share.gameStart()
            })
        } else {
            director.loadScene('Game', () => {
                UINode.Share.showUI(UIType.UI_START)
            })
        }
    }

    update(deltaTime: number) {

    }
}

