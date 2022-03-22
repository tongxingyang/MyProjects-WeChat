
import { _decorator, Component, Node } from 'cc';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('Guide')
export class Guide extends Component {

    start() {
        // [3]
        this.node.active = PlayerDataMgr.getPlayerData().grade < 5
        if (this.node.active) {
            this.scheduleOnce(() => { this.node.active = false }, 3)
        }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}