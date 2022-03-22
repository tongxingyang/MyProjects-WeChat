
import { _decorator, Component, Node } from 'cc';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('Guide')
export class Guide extends Component {

    @property
    heroId: number = 0

    start() {
        // [3]
        if (this.heroId == 0)
            this.node.active = PlayerDataMgr.getPlayerData().grade < 5
        if (this.heroId == 1)
            this.node.active = PlayerDataMgr.getPlayerData().grade1 < 5
        if (this.node.active) {
            this.scheduleOnce(() => { this.node.active = false }, 3)
        }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}