
import { _decorator, Component, Node, v3, tween, director } from 'cc';
import { GameLogic } from '../Crl/GameLogic';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('FinishUI')
export class FinishUI extends Component {

    @property(Node)
    nextBtn: Node = null

    start() {
        // [3]
    }

    nextBtnCB() {
        if (GameLogic.Share.isWin) {
            PlayerDataMgr.changeGrade(1)
        }
        director.loadScene('Game')
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}