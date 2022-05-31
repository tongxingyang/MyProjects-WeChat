
import { _decorator, Component, Node, Label, director, EventTouch, game, view, v3 } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
import { Plane } from '../Crl/Plane';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends Component {

    static Share: GameUI

    lvNode: Node = null
    touchNode: Node = null

    onLoad() {
        this.lvNode = this.node.getChildByName('lvNode')
        this.touchNode = this.node.getChildByName('touchNode')
        this.touchNode.on(Node.EventType.TOUCH_START, this.touchStart, this)
        this.touchNode.on(Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.touchNode.on(Node.EventType.TOUCH_END, this.touchEnd, this)
        this.touchNode.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
    }

    start() {
        GameUI.Share = this
        // [3]
        FdMgr.inGame()
    }

    touchStart(evt: EventTouch) {
        if (!GameLogic.Share.isStart || GameLogic.Share.isPause || GameLogic.Share.isGameOver) return
        let pos = evt.getUILocation()
        pos.x -= view.getVisibleSize().width / 2
        pos.y -= view.getVisibleSize().height / 2
        Plane.Share.node.setPosition(v3(pos.x, pos.y))
    }
    touchMove(evt: EventTouch) {
        if (!GameLogic.Share.isStart || GameLogic.Share.isPause || GameLogic.Share.isGameOver) return
        let pos = evt.getUILocation()
        pos.x -= view.getVisibleSize().width / 2
        pos.y -= view.getVisibleSize().height / 2
        Plane.Share.node.setPosition(v3(pos.x, pos.y))
    }
    touchEnd(evt: EventTouch) {
        if (!GameLogic.Share.isStart || GameLogic.Share.isPause || GameLogic.Share.isGameOver) return
    }

    update(deltaTime: number) {
        // [4]
        for (let i = 0; i < this.lvNode.children.length; i++) {
            this.lvNode.children[i].children[0].active = Plane.Share._lv > i + 1
        }
    }
}