
import { _decorator, Component, Node, Label } from 'cc';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('HardModeUI')
export class HardModeUI extends Component {

    @property(Label)
    times: Label = null

    @property(Node)
    startBtn: Node = null

    onEnable() {
        this.times.string = PlayerDataMgr.getPlayerData().hardModeChance + ':3'
    }

    startBtnCB() {
        if (PlayerDataMgr.getPlayerData().hardModeChance <= 0) {
            let cb = () => {
                PlayerDataMgr.getPlayerData().hardModeChance += 3
                PlayerDataMgr.setPlayerData()
                this.times.string = PlayerDataMgr.getPlayerData().hardModeChance + ':3'
            }
            cb()
        } else {
            //开始地狱模式
            PlayerDataMgr.getPlayerData().hardModeChance--
            PlayerDataMgr.setPlayerData()
            GameLogic.Share.isHardMode = true
            GameLogic.Share.resetHardMode()
            GameLogic.Share.ready()
            UINode.Share.showUI(UIType.UI_GAME)
        }
    }

    closeBtnCB() {
        this.node.active = false
    }

    update(deltaTime: number) {
        this.startBtn.children[0].active = PlayerDataMgr.getPlayerData().hardModeChance > 0
        this.startBtn.children[1].active = PlayerDataMgr.getPlayerData().hardModeChance <= 0
    }
}