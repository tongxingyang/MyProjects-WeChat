import { _decorator, Component, Node, v3, Vec3, dragonBones } from 'cc';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Level21')
export class Level21 extends Component {

    @property(Node)
    cloud: Node = null

    isHunt: boolean = false
    playCloudAni: boolean = false

    start() {

    }

    update(deltaTime: number) {
        if (GameLogic.Share.player.position.x >= this.cloud.position.x) {
            this.isHunt = true
            if (!this.playCloudAni) {
                this.playCloudAni = true
                this.cloud.getComponent(dragonBones.ArmatureDisplay).playAnimation('idle_2')
            }
        }

        if (this.isHunt) {
            let pPos = GameLogic.Share.player.position.clone()
            let cloudPos = this.cloud.position.clone()
            let dir = v3()
            Vec3.subtract(dir, pPos, cloudPos)
            Vec3.normalize(dir, dir)
            dir = dir.multiplyScalar(6)
            let des = v3()
            Vec3.add(des, dir, cloudPos)
            this.cloud.position = des
        } else {
            let cloudPos = this.cloud.position.clone()
            cloudPos.x += 2
            this.cloud.position = cloudPos
        }
    }
}

