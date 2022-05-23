
import { _decorator, Component, Node, game, v2, view, v3, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FDNode')
export class FDNode extends Component {

    public static Share: FDNode

    onLoad() {
        FDNode.Share = this
        // this.node.getComponent(UITransform).setContentSize(view.getVisibleSize())
        // this.node.position = v3(view.getVisibleSize().width / 2, view.getVisibleSize().height / 2, 0)
        game.addPersistRootNode(this.node.parent)
        this.node.setSiblingIndex(999)
    }

    start() {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}