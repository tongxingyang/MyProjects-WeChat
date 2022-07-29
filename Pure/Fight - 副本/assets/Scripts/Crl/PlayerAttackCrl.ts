import { _decorator, Component, Node, Intersection2D, UITransform } from 'cc';
import Utility from '../Mod/Utility';
import { EffectNode } from './EffectNode';
import { GameLogic } from './GameLogic';
import { Monster } from './Monster';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('PlayerAttackCrl')
export class PlayerAttackCrl extends Component {

    private hurtArea: Node = null

    onLoad() {
        this.hurtArea = this.node.getChildByName('HurtArea')
    }

    start() {

    }

    atkCB(type: number) {
        let arr = this.checkCollMonster()
        if (arr.length <= 0) return
        for (let i = 0; i < arr.length; i++) {
            let monster = arr[i]
            let mCrl = monster.getComponent(Monster)
            if (!mCrl.isDied) {
                let effectPos = monster.position.clone()
                effectPos.y += 100
                EffectNode.Share.createSwordEffect(effectPos)
                Player.Share.addAwakenNum(1)
            }
            mCrl.hurt(Player.Share.myAtk, type)
        }
    }

    checkCollMonster(): Node[] {
        let monsterArr: Node[] = []
        let monsterNode = GameLogic.Share.monsterNode
        for (let i = 0; i < monsterNode.children.length; i++) {
            let monster = monsterNode.children[i]
            if (!monster.active) return
            // if (Intersection2D.rectRect(monster.getComponent(UITransform).getBoundingBoxToWorld(), this.hurtArea.getComponent(UITransform).getBoundingBoxToWorld())) {
            //     monsterArr.push(monster)
            // }

            if (Intersection2D.rectRect(Utility.getBoundingBoxToWorld(monster), Utility.getBoundingBoxToWorld(this.hurtArea))) {
                monsterArr.push(monster)
            }
        }
        return monsterArr
    }

    update(deltaTime: number) {

    }
}

