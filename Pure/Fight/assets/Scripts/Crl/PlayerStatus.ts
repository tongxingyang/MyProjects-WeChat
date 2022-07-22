import { _decorator, Component, Node, ProgressBar, Label } from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('PlayerStatus')
export class PlayerStatus extends Component {

    HpBarNode: Node = null
    AwakenBarNode: Node = null

    onLoad() {
        this.HpBarNode = this.node.getChildByName('HpBar')
        this.AwakenBarNode = this.node.getChildByName('AwakenBar')
    }

    start() {

    }

    update(deltaTime: number) {
        this.HpBarNode.getChildByName('ProgressBar').getComponent(ProgressBar).progress = Player.Share.hp / Player.Share.hpMax
        this.HpBarNode.getChildByName('ValueNode').getComponentInChildren(Label).string = Player.Share.hp + ';' + Player.Share.hpMax
        this.AwakenBarNode.getChildByName('ProgressBar').getComponent(ProgressBar).progress = Player.Share.awakenNum / 100
        this.AwakenBarNode.getChildByName('ProgressBar').getChildByName('fx').active = Player.Share.awakenNum >= 100
    }
}

