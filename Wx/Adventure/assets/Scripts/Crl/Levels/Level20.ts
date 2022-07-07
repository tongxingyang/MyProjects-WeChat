import { _decorator, Component, Node, tween, v3, Game, EventTouch, Vec2, v2, Vec3 } from 'cc';
import { GameUI } from '../../UI/GameUI';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Level20')
export class Level20 extends Component {

    @property(Node)
    ciNode: Node = null
    @property(Node)
    monsterNode: Node = null


    @property(Node)
    noStr: Node = null

    touchStartPos: Vec2 = v2()

    start() {
        for (let i = 0; i < this.ciNode.children.length; i++) {
            let ci = this.ciNode.children[i]
            if (i != 1)
                tween(ci).by(1, { position: v3(0, 160, 0) }).by(1, { position: v3(0, -160, 0) }).union().repeatForever().start()
            else
                tween(ci).by(1, { position: v3(0, -160, 0) }).by(1, { position: v3(0, 160, 0) }).union().repeatForever().start()
        }

        GameUI.Share.canJump = false

        this.noStr.on(Node.EventType.TOUCH_START, this.touchStart, this)
        this.noStr.on(Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.noStr.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
        this.noStr.on(Node.EventType.TOUCH_END, this.touchEnd, this)
    }

    touchStart(evt: EventTouch) {
        let pos = evt.getUILocation()
        this.touchStartPos = pos
    }
    touchMove(evt: EventTouch) {
        let pos = evt.getUIDelta()
        let noPos = this.noStr.position.clone()
        noPos.x += pos.x
        noPos.y += pos.y
        this.noStr.position = noPos
    }
    touchEnd(evt: EventTouch) {

    }


    update(deltaTime: number) {
        if (!this.monsterNode.active && GameLogic.Share.player.position.x >= 1300) {
            this.monsterNode.active = true
        }
        if (Vec3.distance(this.noStr.position, v3(-33.31, 0, 0)) > 120) {
            GameUI.Share.canJump = true
        } else {
            GameUI.Share.canJump = false
        }
    }
}

