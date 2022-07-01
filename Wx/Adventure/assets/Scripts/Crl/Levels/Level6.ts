import { _decorator, Component, Node } from 'cc';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Level6')
export class Level6 extends Component {
    start() {

    }

    update(deltaTime: number) {
        if (GameLogic.Share.isStart) {
            if (GameLogic.Share.player.position.y <= -375) {
                let pos = GameLogic.Share.player.position.clone()
                pos.y = 375
                GameLogic.Share.player.position = pos
                let v = GameLogic.Share.playerCrl.body.linearVelocity
                v.y = 0
                GameLogic.Share.playerCrl.body.linearVelocity = v
            }
        }
    }
}

