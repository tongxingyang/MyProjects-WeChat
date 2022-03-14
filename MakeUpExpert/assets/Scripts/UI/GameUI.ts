
import { _decorator, Component, Node, Label } from 'cc';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends Component {

    public static Share: GameUI

    @property(Node)
    nextBtn: Node = null
    @property(Node)
    ptNode: Node = null
    @property(Node)
    splashNode: Node = null

    @property(Node)
    levelNode: Node[] = []

    @property(Label)
    gradeNum: Label = null

    onLoad() {
        GameUI.Share = this
    }

    start() {
        // [3]
        let id = Math.floor((PlayerDataMgr.getPlayerData().grade - 1) % this.levelNode.length)
        this.levelNode[id].active = true

        this.gradeNum.string = PlayerDataMgr.getPlayerData().grade.toString()
    }

    showNextBtn() {
        this.nextBtn.active = true
    }

    nextBtnCB() {
        SoundMgr.Share.PlaySound('Finish')
        this.nextBtn.active = false
        this.ptNode.active = true
        this.scheduleOnce(() => {
            this.splashNode.active = true
        }, 1)
        this.scheduleOnce(() => {
            UINode.Share.showUI(UIType.UI_FINISH)
        }, 2)
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}