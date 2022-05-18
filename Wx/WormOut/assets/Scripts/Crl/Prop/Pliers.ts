import { _decorator, Component, Node, Vec3, v3, misc, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Pliers')
export class Pliers extends Component {

    base: Node = null
    hose: Node = null
    clip: Node = null

    extractAngle: number = 0

    onLoad() {
        this.base = this.node.getChildByName('clip_5')
        this.hose = this.node.getChildByName('hose')
        this.clip = this.node.getChildByName('clip')
    }

    start() {

    }

    update(deltaTime: number) {
        let v1 = v3(1, 0)
        let v2 = v3()
        Vec3.subtract(v2, this.clip.position.clone(), this.base.position.clone())
        v2 = v2.normalize()
        let angle = Vec3.angle(v1, v2)
        angle = misc.radiansToDegrees(angle)
        this.clip.angle = angle + this.extractAngle
        this.hose.angle = this.clip.angle - 90

        let dis = Vec3.distance(this.clip.position.clone(), this.base.position.clone())
        this.hose.getComponent(UITransform).height = dis
    }

}

