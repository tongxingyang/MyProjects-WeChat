import { _decorator, Component, Node, Vec3, v3, view } from 'cc';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('GameCamera')
export class GameCamera extends Component {
    start() {

    }

    update(deltaTime: number) {
        if (!GameLogic.Share.isStart || GameLogic.Share.isGameOver) return

        let myPos = this.node.position.clone()
        myPos.y = 0
        let desPos = GameLogic.Share.player.position.clone()
        desPos.y = 0
        let pos = v3()
        Vec3.lerp(pos, myPos, desPos, 0.1)

        if (pos.x < GameLogic.Share.leftMax.position.x + view.getVisibleSize().width / 2)
            pos.x = GameLogic.Share.leftMax.position.x + view.getVisibleSize().width / 2
        if (pos.x > GameLogic.Share.rightMax.position.x - view.getVisibleSize().width / 2)
            pos.x = GameLogic.Share.rightMax.position.x - view.getVisibleSize().width / 2

        this.node.position = pos
    }
}

