
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerCamera')
export class PlayerCamera extends Component {

    @property(Node)
    playerNode: Node = null

    start() {
        // [3]
    }

    update(deltaTime: number) {
        // [4]
        // let playerPos = this.playerNode.worldPosition.clone()
        // playerPos.y += 0.685 - 0.523
        // playerPos.z -= 1.115 - 1.175
        // this.node.worldPosition = playerPos
    }
}