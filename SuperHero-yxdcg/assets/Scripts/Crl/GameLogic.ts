
import { _decorator, Component, Node, UI } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import Utility from '../Mod/Utility';
import { UINode } from './UINode';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {

    public static Share: GameLogic

    bg: Node = null
    bg1: Node = null
    levelNode: Node = null
    levelNode1: Node = null

    lvIndex: number = 0
    enemyDiedCount: number = 0

    isTouching: boolean = false
    isGameOver: boolean = false
    isWin: boolean = false

    start() {
        GameLogic.Share = this
        this.levelNode = this.node.getChildByName('LevelNode')
        this.levelNode1 = this.node.getChildByName('LevelNode1')
        if (!FdMgr.isVersionValid) {
            this.node.getChildByName('bg').active = false
            this.node.getChildByName('bg1').active = true
        }
    }

    gameStart() {
        if (PlayerDataMgr.getPlayerData().skinId == 0) {
            this.lvIndex = Math.floor((PlayerDataMgr.getPlayerData().grade - 1) % PlayerDataMgr.maxGrade)
            this.levelNode.children[this.lvIndex].active = true
        }else{
            this.lvIndex = Math.floor((PlayerDataMgr.getPlayerData().grade1 - 1) % PlayerDataMgr.maxGrade)
            this.levelNode1.children[this.lvIndex].active = true
        }
    }

    addDieCount() {
        SoundMgr.Share.PlaySound('Hurt')
        Utility.DoVibrate()
        this.enemyDiedCount++
    }

    checkGameOver() {
        if (this.isGameOver || this.isTouching) return
        if (this.enemyDiedCount >= PlayerDataMgr.getEnemyDieCountArr()[this.lvIndex]) {
            this.gameOver(true)
        }
    }

    gameOver(isWin: boolean) {
        FdMgr.showGameOver()
        this.isGameOver = true
        this.isWin = isWin

        this.scheduleOnce(() => {
            UINode.Share.showUI(UIType.UI_FINISH)
        }, 2)
    }

    update(deltaTime: number) {
        // [4]
        this.checkGameOver()
    }
}