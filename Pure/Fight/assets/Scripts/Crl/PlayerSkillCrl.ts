import { _decorator, Component, Node, Intersection2D, UITransform } from 'cc';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import Utility from '../Mod/Utility';
import { EffectNode } from './EffectNode';
import GameData from './GameData';
import { GameLogic } from './GameLogic';
import { Monster } from './Monster';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('PlayerSkillCrl')
export class PlayerSkillCrl extends Component {

    private hurtArea: Node = null

    onLoad() {
        this.hurtArea = this.node.getChildByName('HurtArea')
    }

    start() {

    }

    getSkillDmg(weaponId: number, index: number): number {
        let arr: any[] = [
            [2, 2], [4, 2], [1, 1], [1, 1], [1, 1],
            [4, 1], [4, 1], [2, 4], [1, 1], [1, 1],
            [2, 4], [2, 2], [2, 2], [1, 1], [1, 1],
            [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]
        ]
        return arr[weaponId][index]
    }

    /**
     * type:击退怪物类型  0：不动  1：后退  2：击飞
     * weaponId:武器id
     * index:技能1或2
     */
    skillCB(type: number) {
        let weaponId = PlayerDataMgr.getPlayerData().weaponId
        let index = Player.Share.playSkillIndex
        let arr = this.checkCollMonster()
        if (arr.length <= 0) return
        for (let i = 0; i < arr.length; i++) {
            let monster = arr[i]
            let mCrl = monster.getComponent(Monster)
            if (!mCrl.isDied) {
                let effectPos = monster.position.clone()
                effectPos.y += 100
                EffectNode.Share.createMonsterHurtEffect(Player.Share.enchantType, effectPos)
                Player.Share.addAwakenNum(1)
            }
            let atk = Player.Share.myAtk.atk
            let isCritical = Player.Share.myAtk.isCritical
            if (isCritical) {
                let pos = monster.position.clone()
                pos.y += 200
                EffectNode.Share.createCriticalEffect(pos)
            }
            mCrl.hurt(this.getSkillDmg(weaponId, index - 1) * atk, type, false)
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

