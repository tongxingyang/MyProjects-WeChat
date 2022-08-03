import { _decorator, Component, Node, Label, tween, v3, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TipsNode')
export class TipsNode extends Component {
    start() {

    }

    show(str: string) {
        this.node.getComponentInChildren(Label).string = str
        tween(this.node).by(2, { position: v3(0, 200) }).call(() => {
            tween(this.node.getComponent(UIOpacity)).to(1, { opacity: 0 }).call(() => {
                this.node.destroy()
            }).start()
        }).start()
    }

    update(deltaTime: number) {

    }
}

