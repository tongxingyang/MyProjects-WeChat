
import { _decorator, Component, Node, Label, director } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends Component {

    static Share: GameUI

    @property(Node)
    line: Node = null

    @property(Label)
    targetNum: Label = null
    @property(Node)
    touchNode: Node = null

    start() {
        GameUI.Share = this
        // [3]
        this.touchNode.on(Node.EventType.TOUCH_START, () => { GameLogic.Share.isTouching = true }, this)
        this.touchNode.on(Node.EventType.TOUCH_END, () => { GameLogic.Share.isTouching = false }, this)
        this.touchNode.on(Node.EventType.TOUCH_CANCEL, () => { GameLogic.Share.isTouching = false }, this)
        this.touchNode.eventProcessor.touchListener.setSwallowTouches(false);
        FdMgr.inGame()
    }

    backBtnCB() {
        FdMgr.showGameOver()
        director.loadScene('Game')
    }

    update(deltaTime: number) {
        // [4]
        this.targetNum.string = GameLogic.Share.enemyDiedCount + ':' + PlayerDataMgr.getEnemyDieCountArr()[GameLogic.Share.lvIndex]
    }
}