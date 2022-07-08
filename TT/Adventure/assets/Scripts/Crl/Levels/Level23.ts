import { _decorator, Component, Node } from 'cc';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Level23')
export class Level23 extends Component {

    start() {
        GameLogic.Share.playerCrl.bigCB()
    }

    update(deltaTime: number) {

    }
}

