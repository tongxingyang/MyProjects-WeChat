
import { _decorator, Component, Node, UI } from 'cc';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { UINode } from './UINode';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {

    public static Share: GameLogic

    levelNode: Node = null

    lvIndex: number = 0

    isTouching: boolean = false
    isGameOver: boolean = false
    isWin: boolean = false

    start() {
        GameLogic.Share = this
        this.levelNode = this.node.getChildByName('LevelNode')
    }

    gameStart() {
        this.lvIndex = Math.floor((PlayerDataMgr.getPlayerData().grade - 1) % PlayerDataMgr.maxGrade)
        this.levelNode.children[this.lvIndex].active = true
    }

    gameOver(isWin: boolean) {
        this.isGameOver = true
        this.isWin = isWin

        this.scheduleOnce(() => {
            UINode.Share.showUI(UIType.UI_FINISH)
        }, 2)
    }

    update(deltaTime: number) {
        // [4]
    }
}