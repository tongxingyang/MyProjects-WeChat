import { _decorator, Component, Node, v3, Vec3, tween, Camera, find, math, geometry, PhysicsSystem } from 'cc';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Car')
export class Car extends Component {
    static Share: Car

    gameCam: Camera = null
    camPos: Node = null
    targetNode: Node = null
    car: Node = null
    rayP: Node = null

    roadPointArr: Vec3[] = []
    roadRotationArr: Vec3[] = []
    roadIndex: number = 0
    targetPos: Vec3 = v3(0, 0, 0)
    speed: number = 1
    dir: Vec3 = v3()
    preTargetPos: Vec3 = v3(0, 0, 0.1)
    worldRay = null
    isMoving: boolean = false

    onLoad() {
        Car.Share = this
        this.gameCam = this.getComponentInChildren(Camera)
        this.camPos = this.node.getChildByName('CamNode')
        this.rayP = this.node.getChildByName('rayP')
        this.targetNode = GameLogic.Share.node.getChildByName('targetNode')
        this.car = this.node.children[0]
        this.worldRay = new geometry.Ray()
    }

    start() {
        let getBezier = (t, v0, a0, v1) => {
            let a = v3()
            a.x = t * t * (v1.x - 2 * a0.x + v0.x) + v0.x + 2 * t * (a0.x - v0.x);//公式为B(t)=(1-t)^2*v0+2*t*(1-t)*a0+t*t*v1 其中v0为起点 v1为终点 a为中间点 
            a.y = t * t * (v1.y - 2 * a0.y + v0.y) + v0.y + 2 * t * (a0.y - v0.y);
            a.z = t * t * (v1.z - 2 * a0.z + v0.z) + v0.z + 2 * t * (a0.z - v0.z);
            return a;
        }

        for (let i = 0; i < PlayerDataMgr.pathArr[0].length; i += 2) {
            if (i >= PlayerDataMgr.pathArr[0].length ||
                i + 1 >= PlayerDataMgr.pathArr[0].length ||
                i + 2 >= PlayerDataMgr.pathArr[0].length) break

            let pos1 = v3()
            let pos2 = v3()
            let pos3 = v3()
            let a1 = PlayerDataMgr.pathArr[0][i]
            let a2 = PlayerDataMgr.pathArr[0][i + 1]
            let a3 = PlayerDataMgr.pathArr[0][i + 2]
            pos1.x = Number(a1.position.x)
            pos1.y = Number(a1.position.y)
            pos1.z = Number(a1.position.z)
            pos2.x = Number(a2.position.x)
            pos2.y = Number(a2.position.y)
            pos2.z = Number(a2.position.z)
            pos3.x = Number(a3.position.x)
            pos3.y = Number(a3.position.y)
            pos3.z = Number(a3.position.z)

            for (let j = 0; j < 39; j++) {
                this.roadPointArr.push(getBezier(j / 40, pos1, pos2, pos3))
            }
        }
    }

    move() {
        let nearId = this.getNearPoint()
        if (nearId == -1 || nearId >= this.roadPointArr.length) return
        let id = nearId
        let id1 = id + 5
        if (id >= this.roadPointArr.length) id = this.roadPointArr.length - 1
        if (id1 >= this.roadPointArr.length) id1 = this.roadPointArr.length - 1
        let p1 = this.roadPointArr[id]
        let p2 = this.roadPointArr[id1]

        let dir = v3()
        Vec3.subtract(dir, p2, p1)
        dir = dir.normalize()
        this.dir = dir.clone()
        Vec3.multiplyScalar(dir, dir, this.speed)
        this.node.worldPosition = Vec3.add(dir, dir, this.node.worldPosition.clone())
        // if (Vec3.distance(p2, this.node.worldPosition) <= 0.5) {
        //     this.roadIndex += 10
        // }

        let lookId = nearId + 40
        if (lookId >= this.roadPointArr.length) return
        let nearP = this.roadPointArr[lookId]
        this.node.lookAt(nearP)
    }

    moveX(isLeft: boolean) {
        this.isMoving = true
        let myPos = this.car.position.clone()
        myPos.x += isLeft ? -0.1 : 0.1
        if (myPos.x > 3) myPos.x = 3
        if (myPos.x < -3) myPos.x = -3
        this.car.position = myPos
        //this.checkRay()
    }
    stopMove() {
        this.isMoving = false
    }

    getNearPoint() {
        let arr = []
        for (let i = 0; i < this.roadPointArr.length; i++) {
            let p = this.roadPointArr[i]
            if (Vec3.distance(this.node.worldPosition.clone(), p) > 30) continue
            arr.push({
                id: i,
                dis: Vec3.distance(this.node.worldPosition.clone(), p)
            })
        }
        if (arr.length <= 0) return -1
        arr.sort((a, b) => { return a.dis - b.dis })
        return arr[0].id
    }

    checkRay() {
        geometry.Ray.fromPoints(this.worldRay, this.rayP.children[0].worldPosition.clone(), this.rayP.children[1].worldPosition.clone())
        const bResult = PhysicsSystem.instance.raycast(this.worldRay, 0xffffffff, 3, true);
        if (bResult) {
            const results = PhysicsSystem.instance.raycastResults;

            for (let i = 0; i < results.length; i++) {
                const result = results[i];
                const collider = result.collider;
                if (collider.node.name.search('Road') == -1) continue
                const distance = result.distance;
                const hitPoint = result.hitPoint;
                const hitNormal = result.hitNormal;
                this.car.worldPosition = hitPoint

                break
            }
        }
    }

    update(deltaTime: number) {
        this.move()
        if (!this.isMoving)
            this.checkRay()
    }
}

