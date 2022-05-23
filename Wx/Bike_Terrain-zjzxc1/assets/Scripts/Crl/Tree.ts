
import { _decorator, Component, Node, Vec3 } from 'cc';
import { AiCrl } from './AiCrl';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Tree')
export class Tree extends Component {

    start() {
        // [3]
    }

    update() {
        let myPos = this.node.worldPosition.clone()
        for (let i = 0; i < GameLogic.Share.aiNode.children.length; i++) {
            let ai = GameLogic.Share.aiNode.children[i]
            let pos = ai.worldPosition.clone()
            if (Math.abs(pos.x - myPos.x) <= 0.4 && Math.abs(pos.z - myPos.z) <= 0.8) {
                ai.getComponent(AiCrl).collStone()
            }
        }
        let pPos = GameLogic.Share.playerCrl.myPosClone
        if (Math.abs(pPos.x - myPos.x) <= 0.25 && Math.abs(pPos.z - myPos.z) <= 0.8) {
            GameLogic.Share.playerCrl.collStone()
        }
    }
}