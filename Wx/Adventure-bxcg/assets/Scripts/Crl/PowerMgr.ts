import { _decorator, Component, Node, Label } from 'cc';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { TimeCountMgr } from '../Mod/TimeCountMgr';
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

    calculatePowerTime() {
        let t = TimeCountMgr.Share.tCount
        let m = Math.floor(t / 60)
        let s = Math.floor(t - m * 60)
        let sStr = s < 10 ? '0' + s.toString() : s.toString()
        this.timeStr.string = 0 + m.toString() + ':' + sStr
        this.timeNode.active = PlayerDataMgr.getPlayerData().power < PlayerDataMgr.powerMax
    }

    update(deltaTime: number) {
        this.calculatePowerTime()
        this.powerNum.string = PlayerDataMgr.getPlayerData().power.toString()
        this.powerNum.node.active = PlayerDataMgr.getPlayerData().power < 9999
        // if (this.plusPic)
        //     this.plusPic.active = PlayerDataMgr.getPlayerData().power < 9999
        this.maxPic.active = PlayerDataMgr.getPlayerData().power >= 9999
        this.timeNode.active = PlayerDataMgr.getPlayerData().power < PlayerDataMgr.powerMax
    }
}

