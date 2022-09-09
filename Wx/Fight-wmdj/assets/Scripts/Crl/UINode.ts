
import { _decorator, Component, Node } from 'cc';
import { UIType } from '../Mod/Entity';
const { ccclass, property } = _decorator;

@ccclass('UINode')
export class UINode extends Component {

    public static Share: UINode

    closeCB: Function = null

    onLoad() {
        UINode.Share = this
    }
    start() {
        // [3]
    }

    showUI(type: UIType, closeOther: boolean = true, closeCB?: Function) {
        this.closeCB = closeCB
        if (closeOther)
            this.node.children.forEach(n => { n.active = n.name == type })
        else
            this.node.getChildByName(type).active = true
    }

    closeUI(type: UIType) {
        this.closeCB && this.closeCB()
        this.node.getChildByName(type).active = false
    }

    closeAllUI() {
        this.node.children.forEach(n => { n.active = false })
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
