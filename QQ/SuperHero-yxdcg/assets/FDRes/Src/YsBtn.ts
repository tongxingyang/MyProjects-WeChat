
import { _decorator, Component, Node } from 'cc';
import FdMgr from './FdMgr';
const { ccclass, property } = _decorator;

@ccclass('YsBtn')
export class YsBtn extends Component {

    start() {
        // [3]
        this.node.on(Node.EventType.TOUCH_END, this.showYsUI, this)
    }

    showYsUI() {
        FdMgr.showYsUI()
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}