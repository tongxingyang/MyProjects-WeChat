
import { _decorator, Component, Node} from 'cc';
import SGConfig from './SGConfig';
import SGMgr from './SGMgr';
const { ccclass, property } = _decorator;

@ccclass('SGHomeUI')
export class SGHomeUI extends Component {
    @property(Node)
    remenBtn: Node = null
    @property(Node)
    drawBtn: Node = null

    start() {
        this.remenBtn.active = SGConfig.data.front_more_haowan_switch
        this.drawBtn.active = SGConfig.data.front_more_haowan_switch
    }

    remenCB() {
        SGMgr.moreGame()
    }

}