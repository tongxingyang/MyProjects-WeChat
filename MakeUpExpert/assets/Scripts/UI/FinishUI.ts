
import { _decorator, Component, Node, director } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('FinishUI')
export class FinishUI extends Component {

    @property(Node)
    after: Node = null
    @property(Node)
    before: Node = null
    @property(Node)
    nextBtn: Node = null

    start() {
        for (let i = 0; i < this.after.children.length; i++) {
            let a = this.after.children[i]
            let b = this.before.children[i]
            a.active = (PlayerDataMgr.getPlayerData().grade - 1) % this.after.children.length == i
            b.active = (PlayerDataMgr.getPlayerData().grade - 1) % this.after.children.length == i
        }

        FdMgr.inFinish(this.nextBtn)
    }

    nextBtnCB() {
        FdMgr.closeFinish(() => {
            PlayerDataMgr.changeGrade(1)
            director.loadScene('Game')
        })
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}