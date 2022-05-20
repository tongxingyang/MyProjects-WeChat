import { _decorator, Component, Node, Animation, Contact2DType, Collider2D, IPhysics2DContact, RigidBody2D, DistanceJoint2D, instantiate, v2, FixedJoint2D, Vec2, UIOpacity, HingeJoint2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Arrow')
export class Arrow extends Component {

    ani: Animation = null
    collider: Collider2D = null
    lockNode: Node = null

    hadClick: boolean = false
    hadCatch: boolean = false

    onLoad() {
        this.ani = this.node.getComponent(Animation)
        this.collider = this.node.getComponent(Collider2D)
        this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
        this.node.parent.on(Node.EventType.TOUCH_START, this.clickCB, this)
        this.lockNode = this.node.parent.getChildByName("lock")

        this.initLock()
    }

    start() {

    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体开始接触时被调用一次
        if (this.hadCatch) return
        if (otherCollider.node.parent.name == 'worm') {
            this.hadCatch = true
            let body = otherCollider.node.getComponent(RigidBody2D)
            this.getComponent(DistanceJoint2D).connectedBody = body
            this.getComponent(DistanceJoint2D).enabled = true
        }
    }

    clickCB() {
        if (this.hadClick) return
        this.hadClick = true
        this.ani.play()
    }

    resetCB() {
        this.ani.stop()
    }

    initLock() {
        for (let i = 0; i < 18; i++) {
            let lock = instantiate(this.lockNode.children[0])
            this.lockNode.addChild(lock)
        }
        this.scheduleOnce(() => {
            for (let i = 0; i < this.lockNode.children.length; i++) {
                let l = this.lockNode.children[i]
                if (i > 0) {
                    let dj = l.getComponent(FixedJoint2D)
                    dj.anchor = v2(0, 15)
                    dj.connectedAnchor = v2(0, -15)
                    let body = this.lockNode.children[i - 1].getComponent(RigidBody2D)
                    dj.connectedBody = body
                }
                l.getComponent(FixedJoint2D).enabled = true
                if (i == this.lockNode.children.length - 1) {
                    l.getComponent(HingeJoint2D).enabled = true
                }
            }
        })
    }

    update(deltaTime: number) {
        let hide: boolean = false
        for (let i = 0; i < this.lockNode.children.length; i++) {
            let l = this.lockNode.children[i]
            let pos = l.position.clone()
            if (Vec2.distance(v2(pos.x, pos.y), v2(0, 0)) < 20 || hide) {
                l.getComponent(UIOpacity).opacity = 0
                hide = true
            } else {
                l.getComponent(UIOpacity).opacity = 255
            }
        }
    }
}

