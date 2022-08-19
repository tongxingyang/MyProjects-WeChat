import { _decorator, Component, Node, RigidBody, CapsuleCollider, v3, EventTouch, Vec2, v2, Vec3, sp, geometry, PhysicsSystem, misc } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {

    @property(Node)
    cam: Node = null
    @property(Node)
    touchNode: Node = null
    @property(Node)
    road: Node = null
    @property(Node)
    rayPoint: Node = null

    body: RigidBody = null
    collider: CapsuleCollider = null

    preTouchPos: Vec2 = v2()
    roadPointArr: Vec3[] = []
    roadIndex: number = 1

    onLoad() {
        this.body = this.getComponent(RigidBody)
        //this.collider = this.getComponentInChildren(CapsuleCollider)

        for (let i = 0; i < this.road.children.length - 1; i++) {
            let p = this.road.children[i]
            this.roadPointArr.push(p.position.clone())
        }
    }

    start() {
        this.touchNode.on(Node.EventType.TOUCH_START, this.touchStart, this)
        this.touchNode.on(Node.EventType.TOUCH_MOVE, this.touchMove, this)
    }

    touchStart(evt: EventTouch) {
        let pos = evt.getLocation()
        this.preTouchPos = pos
    }
    touchMove(evt: EventTouch) {
        let pos = evt.getLocation()

        let myPos = this.node.position.clone()
        let dtX = pos.x - this.preTouchPos.x
        if (dtX > 0) {

        } else if (dtX < 0) {

        } else {
        }

        this.preTouchPos = pos
    }

    getNearPoint() {
        let disArr: any[] = []
        for (let i = 0; i < this.roadPointArr.length; i++) {
            let p = this.roadPointArr[i]
            disArr.push({ dis: Vec3.distance(this.node.position.clone(), p), id: i })
        }
        disArr = disArr.sort((a, b) => { return a.dis - b.dis });
        this.roadIndex = disArr[0].id
    }

    move() {
        this.getNearPoint()

        let id = this.roadIndex
        let id1 = this.roadIndex + 5
        if (id1 >= this.road.children.length) id1 = this.road.children.length - 1
        let curPointNode: Node = this.road.children[id]
        let nextPointNode: Node = this.road.children[id1]
        let curPos = this.node.worldPosition.clone()//curPointNode.getWorldPosition().clone()
        let nextPos = nextPointNode.getWorldPosition().clone()
        let dir = v3()
        Vec3.subtract(dir, nextPos, curPos)
        dir = dir.normalize()

        let speed = 50
        Vec3.multiplyScalar(dir, dir, speed)
        this.body.setLinearVelocity(dir)
    }

    fixCarForward() {
        let id = this.roadIndex + 20
        if (id >= this.road.children.length) id = this.road.children.length - 1
        let camTarget: Node = this.road.children[id]
        let nextPos = camTarget.getWorldPosition().clone()
        let dir = v3()
        Vec3.subtract(dir, nextPos, this.node.worldPosition.clone())
        dir = dir.normalize()

        let angle = this.node.forward.clone()
        Vec3.lerp(angle, angle, dir.normalize(), 0.1)
        this.node.forward = angle
    }

    checkRay() {
        const outRay = new geometry.Ray()
        geometry.Ray.fromPoints(outRay, this.rayPoint.children[0].worldPosition.clone(), this.rayPoint.children[1].worldPosition.clone())
        const mask = 0xffffffff;
        if (PhysicsSystem.instance.raycast(outRay, mask, 10, false)) {
            const raycastResults = PhysicsSystem.instance.raycastResults;
            for (let i = 0; i < raycastResults.length; i++) {
                if (raycastResults[i].collider.node.name.search('Aquapark_3') == -1) continue
                const hitPoint = raycastResults[i].hitPoint
                const hitNormal = raycastResults[i].hitNormal;
                const collider = raycastResults[i].collider;
                const distance = raycastResults[i];

                let dir = hitNormal.clone().normalize()
                let angle = Vec3.angle(dir, this.node.up)
                angle = misc.radiansToDegrees(angle)
                this.node.setWorldRotationFromEuler(this.node.eulerAngles.x, this.node.eulerAngles.y, 0)
            }
        }
    }

    update(deltaTime: number) {
        this.move()
        this.fixCarForward()
        this.checkRay()
    }
}

