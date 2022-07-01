import { _decorator, Component, Node, Intersection2D, UITransform } from 'cc';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Level11')
export class Level11 extends Component {

    @property(Node)
    tips: Node = null
    @property(Node)
    flag: Node = null

    time: number = 0

    start() {

    }

    update(deltaTime: number) {
        if (GameLogic.Share.isStart) {
            if (Intersection2D.rectRect(GameLogic.Share.player.getComponent(UITransform).getBoundingBoxToWorld(),
                this.tips.getComponent(UITransform).getBoundingBoxToWorld())) {
                this.time += deltaTime
                if (this.time >= 2) this.flag.active = true
            } else {
                this.time = 0
            }
        }
    }
}

