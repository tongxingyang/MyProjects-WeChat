import { _decorator, Component, Node, view, Vec3, tween, v3, Tween } from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('GameCamera')
export class GameCamera extends Component {

    static Share: GameCamera = null

    shakeTag: number = 1

    onLoad() {
        GameCamera.Share = this
    }

    start() {

    }

    shake(countMax: number = 5) {
        Tween.stopAllByTag(this.shakeTag, this.node)
        let rate = 10
        let count = 1
        let basePos = this.node.position.clone()
        let cb = () => {
            let pos = v3(Math.random() * rate - rate / 2, Math.random() * rate - rate / 2)
            Vec3.add(pos, pos, basePos)
            tween(this.node).to(0.02, { position: pos }).call(() => {
                count++
                if (count >= countMax) {
                    let myPos = this.node.position.clone()
                    myPos.y = 0
                    this.node.position = myPos
                    return
                }
                cb()
            }).tag(this.shakeTag).start()
        }
        cb()
    }

    update(deltaTime: number) {
        if (Player.Share && Player.Share) {
            let pPos = Player.Share.myPos
            let myPos = this.node.position.clone()
            myPos.x = pPos.x
            if (myPos.x < 0) {
                myPos.x = 0
            }
            if (myPos.x > 3000 - view.getVisibleSize().width) {
                myPos.x = 3000 - view.getVisibleSize().width
            }
            Vec3.lerp(myPos, this.node.position.clone(), myPos, 0.1)
            this.node.position = myPos
        }
    }
}

