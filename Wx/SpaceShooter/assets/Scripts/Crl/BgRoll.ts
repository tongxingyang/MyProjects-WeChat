import { _decorator, Component, Node, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BgRoll')
export class BgRoll extends Component {

    @property
    rollSpeed: number = 5

    start() {

    }

    update(deltaTime: number) {
        for (let i = 0; i < this.node.children.length; i++) {
            let bg = this.node.children[i]
            bg.translate(v3(0, -this.rollSpeed))
            if (bg.position.y <= -1750) {
                bg.setPosition(0, 1750)
            }
        }
    }
}

