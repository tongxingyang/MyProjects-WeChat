import { _decorator, Component, Node } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { UINode } from './UINode';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {
    public static Share: GameLogic

    leveNode: Node = null

    isStart: boolean = false
    isWin: boolean = false
    isPause: boolean = false
    isGameOver: boolean = false

    onLoad() {
        GameLogic.Share = this
        this.leveNode = this.node.getChildByName('LevelNode')
    }

    start() {
    }

    gameStart() {
        let g = Math.floor((PlayerDataMgr.getPlayerData().grade - 1) % 10)
        this.leveNode.children[g].active = true
    }

    gameOver(isWin: boolean) {
        if (this.isGameOver) return

        this.isWin = isWin
        this.isStart = false
        this.isGameOver = true
        this.isPause = true

        UINode.Share.closeUI(UIType.UI_GAME)
        this.scheduleOnce(() => {
            this.showFinishUI()
        }, 1)
    }

    showFinishUI() {
        FdMgr.showGameOver(() => {
            UINode.Share.showUI(UIType.UI_FINISH)
        })
    }

    update(deltaTime: number) {

    }
}

