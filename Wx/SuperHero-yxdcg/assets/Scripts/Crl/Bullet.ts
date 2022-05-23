
import { _decorator, Component, Node, Vec2, tween, v3, v2, Vec3, ParticleSystem2D, Tween, RigidBody2D, CircleCollider2D } from 'cc';
import { Hero2Touch } from './Hero2Touch';
const { ccclass, property } = _decorator;

@ccclass('Bullet')
export class Bullet extends Component {

    static Share: Bullet

    bulletDis: Node = null

    basePos: Vec3 = v3()

    lineArr: Vec2[] = []

    moveIndex: number = 0

    onLoad() {
        Bullet.Share = this
        this.bulletDis = this.node.parent.getChildByName('BulletDis')
        this.basePos = this.bulletDis.position.clone()
    }

    start() {
        // [3]
    }

    startMove(lineArr: Vec2[]) {
        this.lineArr = lineArr
        this.moveIndex = 0
        this.node.children[0].active = true
        this.bulletDis.position = this.basePos.clone()
        this.node.position = this.basePos.clone()
        this.move()
    }

    move() {
        let pos = this.lineArr[this.moveIndex]
        tween(this.bulletDis).to(0.01, { position: v3(pos.x, pos.y) }).call(() => {
            this.moveIndex++
            if (this.moveIndex >= this.lineArr.length) {
                this.moveEnd()
            } else {
                this.move()
            }
        }).start()
    }

    moveEnd() {
        Tween.stopAllByTarget(this.bulletDis)
        tween(this.bulletDis).to(0.01, { position: this.basePos }).start()
        tween(this.node).to(0.01, { position: this.basePos }).start()
        this.node.children[0].getComponent(ParticleSystem2D).resetSystem()
        this.bulletDis.position = this.basePos.clone()
        this.node.position = this.basePos.clone()
        this.node.children[0].active = false
        Hero2Touch.Share.bulletFinish()
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
