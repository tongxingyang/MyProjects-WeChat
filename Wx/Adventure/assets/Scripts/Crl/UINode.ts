
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

    showUI(type: UIType, closeCB?: Function) {
        this.closeCB = closeCB
        this.node.children.forEach(n => { n.active = n.name == type })
    }

    closeUI(type: UIType) {
        if (this.closeCB)
            this.closeCB()
        else
            this.node.getChildByName(type).active = false
    }

    closeAllUI() {
        this.node.children.forEach(n => { n.active = false })
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
