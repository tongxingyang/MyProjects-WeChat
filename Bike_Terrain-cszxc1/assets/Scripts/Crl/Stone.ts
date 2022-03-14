
import { _decorator, Component, Node, BoxCollider, SphereCollider, ICollisionEvent, PhysicsSystem, Vec3 } from 'cc';
import { AiCrl } from './AiCrl';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Stone')
export class Stone extends Component {

    onLoad() {
    }

    start() {
        // [3]
    }

    update() {
        let myPos = this.node.worldPosition.clone()
        for (let i = 0; i < GameLogic.Share.aiNode.children.length; i++) {
            let ai = GameLogic.Share.aiNode.children[i]
            let pos = ai.worldPosition.clone()
            if (Math.abs(pos.x - myPos.x) <= 0.85 && Math.abs(pos.z - myPos.z) <= 0.5) {
                ai.getComponent(AiCrl).collStone()
            }
        }
        let pPos = GameLogic.Share.playerCrl.myPosClone
        if (Math.abs(pPos.x - myPos.x) <= 0.85 && Math.abs(pPos.z - myPos.z) <= 0.5 && Math.abs(pPos.y - myPos.y) <= 1) {
            GameLogic.Share.playerCrl.collStone()
        }
    }
}