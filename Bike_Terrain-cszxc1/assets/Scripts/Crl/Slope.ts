
import { _decorator, Component, Node, MeshCollider, ICollisionEvent, TypeScript } from 'cc';
import { AiCrl } from './AiCrl';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Slope')
export class Slope extends Component {

    onLoad() {
    }

    start() {
        // [3]
    }

    update(deltaTime: number) {
        // [4]
        let pPos = GameLogic.Share.playerCrl.myPosClone
        let myPos = this.node.worldPosition.clone()
        if (pPos.x > myPos.x - 0.5 && pPos.x < myPos.x + 0.5 && pPos.z < myPos.z && pPos.z > myPos.z - 1.5 && Math.abs(myPos.y - pPos.y) <= 0.5) {
            GameLogic.Share.playerCrl.applyImpulse()
        }
    }
}