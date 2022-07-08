import { _decorator, Component, Node } from 'cc';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Level4')
export class Level4 extends Component {

    @property(Node)
    monster: Node = null

    start() {

    }

    update(deltaTime: number) {
        if (GameLogic.Share.isStart && Math.abs(this.monster.position.x - GameLogic.Share.player.position.x) <= 150) {
            this.monster.active = true
        }
    }
}

