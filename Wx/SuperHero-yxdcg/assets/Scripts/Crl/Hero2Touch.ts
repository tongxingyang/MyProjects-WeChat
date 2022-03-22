
import { _decorator, Component, Node, EventTouch, Vec2, Graphics, v2, view, v3 } from 'cc';
import { Bullet } from './Bullet';
import { GameLogic } from './GameLogic';
import { Player2 } from './Player2';
const { ccclass, property } = _decorator;

@ccclass('Hero2Touch')
export class Hero2Touch extends Component {

    static Share: Hero2Touch

    @property(Node)
    bullet: Node = null

    myGraphics: Graphics = null

    touchStartPos: Vec2
    lineArr: Vec2[] = []

    canTouch: boolean = false
    isMoveEnd: boolean = true

    onLoad() {
        Hero2Touch.Share = this
    }

    start() {
        // [3]
        this.myGraphics = this.getComponent(Graphics)
        this.node.on(Node.EventType.TOUCH_START, this.touchStart, this)
        this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this)
        this.node.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
    }

    touchStart(event: EventTouch) {
        if (GameLogic.Share.isGameOver || !this.isMoveEnd) return
        //if (!this.canTouch) return
        this.lineArr = []
        let pos = event.getUILocation()
        if (Vec2.distance(pos, v2(Player2.Share.myWorldPos.x, Player2.Share.myWorldPos.y)) <= 100) {
            this.touchStartPos = pos.clone()
            this.pushInLineArr(pos)
            this.myGraphics.clear()
            Player2.Share.handUp(v3(pos.x, pos.y))
            this.canTouch = true
            this.isMoveEnd = false
        }
    }
    touchMove(event: EventTouch) {
        if (GameLogic.Share.isGameOver) return
        if (!this.canTouch) return
        let pos = event.getUILocation()
        if (Vec2.distance(pos.clone(), this.touchStartPos) > 10) {
            this.pushInLineArr(pos.clone())
            this.drawLine()
            this.touchStartPos = pos.clone()
            Player2.Share.handUp(v3(pos.x, pos.y))
        }
    }
    touchEnd(event: EventTouch) {
        if (GameLogic.Share.isGameOver || !this.canTouch) return
        this.myGraphics.clear()
        if (this.lineArr.length < 5) {
            this.isMoveEnd = true
        } else {
            this.canTouch = false
            Bullet.Share.startMove(this.lineArr)
            this.lineArr = []
        }
        Player2.Share.handDown()
    }

    pushInLineArr(pos: Vec2) {
        pos.x -= view.getVisibleSize().width / 2
        pos.y -= view.getVisibleSize().height / 2
        this.lineArr.push(pos)
    }

    drawLine() {
        if (this.lineArr.length < 2 || this.lineArr.length > 200) return
        this.myGraphics.clear()
        this.myGraphics.moveTo(this.lineArr[0].x, this.lineArr[0].y);
        for (let i = 0; i < this.lineArr.length; i++) {
            let p = this.lineArr[i]
            this.myGraphics.lineTo(p.x, p.y)
        }
        this.myGraphics.stroke();
    }

    bulletFinish() {
        this.isMoveEnd = true
        this.lineArr = []
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}