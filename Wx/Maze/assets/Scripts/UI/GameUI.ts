
import { _decorator, Component, Node, EventTouch, view, Intersection2D, Vec2, Graphics, v2, UITransform } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
import Utility from '../Mod/Utility';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends Component {

    static Share: GameUI

    touchNode: Node = null
    touchStartPos: Vec2 = v2()
    myGraphics: Graphics = null
    lineArr: Vec2[] = []

    onLoad() {
        this.myGraphics = this.getComponent(Graphics)
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

    touchStart(event: EventTouch) {
        if (GameLogic.Share.isGameOver) return
        //if (!this.canTouch) return
        this.lineArr = []
        let pos = event.getUILocation()
        let playerPos = Utility.getWorldPos(GameLogic.Share.node.getChildByName('LevelNode').getChildByName('Level_5').getChildByName('playerPos'))
        if (Vec2.distance(pos, v2(playerPos.x, playerPos.y)) <= 50) {
            this.touchStartPos = pos.clone()
            this.pushInLineArr(pos)
            this.myGraphics.clear()
        }
    }
    touchMove(event: EventTouch) {
        if (GameLogic.Share.isGameOver) return
        let pos = event.getUILocation()
        if (Vec2.distance(pos.clone(), this.touchStartPos) > 10 && !this.checkColl(this.touchStartPos, pos)) {
            this.pushInLineArr(pos.clone())
            this.drawLine()
            this.touchStartPos = pos.clone()
        }
    }
    touchEnd(event: EventTouch) {
        if (GameLogic.Share.isGameOver) return
        this.myGraphics.clear()
    }

    pushInLineArr(pos: Vec2) {
        pos.x -= view.getVisibleSize().width / 2
        pos.y -= view.getVisibleSize().height / 2
        this.lineArr.push(pos)
    }

    drawLine() {
        //if (this.lineArr.length < 2 || this.lineArr.length > 200) return
        this.myGraphics.clear()
        this.myGraphics.moveTo(this.lineArr[0].x, this.lineArr[0].y);
        for (let i = 0; i < this.lineArr.length; i++) {
            let p = this.lineArr[i]
            this.myGraphics.lineTo(p.x, p.y)
        }
        this.myGraphics.stroke();
    }

    checkColl(l1: Vec2, l2: Vec2) {
        let lvNode = GameLogic.Share.node.getChildByName('LevelNode').getChildByName('Level_5').getChildByName('polyNode')
        for (let i = 0; i < lvNode.children.length; i++) {
            let p = lvNode.children[i]
            if (Intersection2D.lineRect(l1, l2, p.getComponent(UITransform).getBoundingBoxToWorld())) {
                return true
            }
        }
        return false
    }

    tipsBtnCB() {

    }

    skipBtnCB() {
        GameLogic.Share.gameOver(true)
    }

    update(deltaTime: number) {
        // [4]
    }
}