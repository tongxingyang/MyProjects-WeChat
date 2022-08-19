
import { _decorator, Component, Node } from 'cc';
import { WECHAT } from 'cc/env';
const { ccclass, property } = _decorator;

@ccclass('YsUI')
export class YsUI extends Component {

    @property(Node)
    rootNode: Node = null
    @property(Node)
    yszc: Node = null
    @property(Node)
    yhxy: Node = null

    ccb: Function = null

    onDisable() {
        this.ccb && this.ccb()
        this.ccb = null
    }

    showUI(cb?: Function) {
        this.ccb = cb
        this.node.active = true
        this.rootNode.active = true
        this.yszc.active = false
        this.yhxy.active = false
    }

    argee() {
        localStorage.setItem('older', "1")
        this.node.active = false
    }

    disAgree() {
        if (WECHAT) {
            window['qq'].exitMiniProgram()
        }
    }

    showYSZC() {
        this.rootNode.active = false
        this.yszc.active = true
    }
    closeYSZC() {
        this.yszc.active = false
        this.rootNode.active = true
    }

    showYHXY() {
        this.rootNode.active = false
        this.yhxy.active = true
    }
    closeYHXY() {
        this.yhxy.active = false
        this.rootNode.active = true
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}