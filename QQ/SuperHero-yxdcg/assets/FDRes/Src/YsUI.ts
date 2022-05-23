
import { _decorator, Component, Node } from 'cc';
import { WECHAT } from 'cc/env';
const { ccclass, property } = _decorator;

@ccclass('YsUI')
export class YsUI extends Component {

    ccb: Function = null

    onDisable() {
        this.ccb && this.ccb()
        this.ccb = null
    }

    showUI(cb?: Function) {
        this.ccb = cb
        this.node.active = true
    }

    argee() {
        this.node.active = false
    }

    disAgree() {
        if (WECHAT) {
            window['qq'].exitMiniProgram()
        }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}