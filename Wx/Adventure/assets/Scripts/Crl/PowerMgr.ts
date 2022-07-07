import { _decorator, Component, Node, Label } from 'cc';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('PowerMgr')
export class PowerMgr extends Component {

    timeNode: Node = null
    timeStr: Label = null
    powerNum: Label = null
    plusPic: Node = null
    maxPic: Node = null

    onLoad() {
        this.timeNode = this.node.getChildByName('ksy_dk_1')
        this.timeStr = this.timeNode.getChildByName('time').getComponent(Label)
        this.powerNum = this.node.getChildByName('num').getComponent(Label)
        this.plusPic = this.node.getChildByName('ksy_btn_jh')
        this.maxPic = this.node.getChildByName('max')
    }

    start() {

    }

    update(deltaTime: number) {
        this.powerNum.string = PlayerDataMgr.getPlayerData().power.toString()
        if (this.plusPic)
            this.plusPic.active = PlayerDataMgr.getPlayerData().power < 9999
        this.maxPic.active = PlayerDataMgr.getPlayerData().power >= 9999
        this.timeNode.active = PlayerDataMgr.getPlayerData().power < PlayerDataMgr.maxPower
    }
}

