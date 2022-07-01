
import { _decorator, Component, Node, EventTouch, view, v3, Vec3, instantiate, input, SystemEvent, Input, KeyCode, EventKeyboard } from 'cc';
import { GameLogic } from '../Crl/GameLogic';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends Component {

    static Share: GameUI

    onLoad() {
        GameUI.Share = this
    }

    start() {
        // [3]
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this)

    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.touchMove(true)
                break
            case KeyCode.KEY_D:
                this.touchMove(false)
                break
            case KeyCode.KEY_W:
                GameLogic.Share.playerCrl.jump()
                break
        }
    }
    onKeyUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.resetMove()
                break
            case KeyCode.KEY_D:
                this.resetMove()
                break
        }
    }

    touchMove(isLeft: boolean) {
        GameLogic.Share.playerCrl.dirX = isLeft ? -1 : 1
    }

    resetMove() {
        GameLogic.Share.playerCrl.dirX = 0
    }

    update(deltaTime: number) {
    }
}