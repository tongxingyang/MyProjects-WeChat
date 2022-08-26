import { _decorator, Component, Node, Vec2 } from 'cc';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Level14')
export class Level14 extends Component {
    start() {

    }

    update(deltaTime: number) {
        if (Vec2.distance(this.node.getChildByName('p1').position, GameLogic.Share.player.position) <= 50) {
            GameLogic.Share.player.setPosition(this.node.getChildByName('p2').position)
        }
    }
}

