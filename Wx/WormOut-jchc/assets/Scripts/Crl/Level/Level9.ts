import { _decorator, Component, Node, Vec3, UITransform, size, v3, tween, instantiate, misc, Intersection2D, Label, dragonBones } from 'cc';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Level9')
export class Level9 extends Component {

    @property(Node)
    faceDB: Node = null
    @property(Node)
    arrowNode: Node = null
    @property(Node)
    punchNode: Node = null
    @property(Node)
    lock: Node = null
    @property(Node)
    wormNode: Node = null
    @property(Node)
    wormPrefab: Node = null
    @property(Label)
    countLabel: Label = null

    rotateLeft: boolean = true
    stopRotate: boolean = false
    canClick: boolean = true

    finishCount: number = 0
    wormCount: number = 0

    start() {
        this.punchNode.on(Node.EventType.TOUCH_START, this.clickPunch, this)
        this.createWorm()
    }

    clickPunch() {
        if (!this.canClick) return
        if (this.node.getChildByName('guide')) this.node.getChildByName('guide').active = false
        this.canClick = false
        this.stopRotate = true
        let dir = v3()
        Vec3.subtract(dir, this.arrowNode.getChildByName('d').position, this.arrowNode.position)
        dir = dir.normalize()
        let punchPos = this.punchNode.position.clone()
        Vec3.add(punchPos, punchPos, v3(dir.x * 1000, dir.y * 1000))
        tween(this.punchNode).to(0.3, { position: punchPos }).delay(.5).to(0.5, { position: v3() }).call(() => { this.punchBack() }).start()
    }

    punchBack() {
        if (this.finishCount >= 75) {
            this.faceDB.getComponent(dragonBones.ArmatureDisplay).playAnimation('fruits_3_win', 1)
            let cameraNode = GameLogic.Share.node.getChildByName('Camera')
            tween(cameraNode).to(1, { position: v3(0, 150, 0), scale: v3(0.5, 0.5, 1) }).start()
            this.node.getChildByName('ptNode').active = true
            GameLogic.Share.gameOver(true)
            return
        }
        this.canClick = true
        this.stopRotate = false
        this.createWorm()
    }

    rotateArrow() {
        if (this.stopRotate) return
        if (this.arrowNode.angle < -30) {
            this.arrowNode.angle = -30
            this.rotateLeft = false
        } else if (this.arrowNode.angle > 30) {
            this.arrowNode.angle = 30
            this.rotateLeft = true
        }

        this.arrowNode.angle += this.rotateLeft ? -0.5 : 0.5
    }

    updateLockLength() {
        let dis = Vec3.distance(this.punchNode.position.clone(), this.lock.position.clone())
        this.lock.getComponent(UITransform).setContentSize(size(26, dis))
    }

    createWorm() {
        if (this.wormCount >= 75 || this.wormNode.children.length >= 15) return
        for (let i = 0; i < 15; i++) {
            if (this.wormCount >= 75) return
            let worm = instantiate(this.wormPrefab)
            let s = Math.random() * 0.6 + 0.5
            worm.setScale(v3(s, s))
            this.wormNode.addChild(worm)
            let dir = v3(Math.random() * 2 - 1, Math.random() * 2 - 1)
            dir = dir.normalize()
            dir.multiplyScalar(Math.random() * 300 - 150)
            worm.setPosition(dir)
            worm.setSiblingIndex(this.wormNode.children.length - this.wormNode.children.indexOf(worm))

            let angle = Vec3.angle(dir, v3(0, 1))
            angle = misc.radiansToDegrees(angle)
            if (worm.position.x > 0) angle = -angle
            worm.angle = angle

            tween(worm).by(Math.random() * 0.5 + 0.5, { scale: v3(0.1, 0.1) }).by(Math.random() * 0.5 + 0.5, { scale: v3(-0.1, -0.1) }).union().repeatForever().start()

            this.wormCount++
        }
    }

    checkColl() {
        for (let i = this.wormNode.children.length - 1; i >= 0; i--) {
            let worm = this.wormNode.children[i]
            if (worm.name != 'died' &&
                Intersection2D.rectRect(worm.getComponent(UITransform).getBoundingBoxToWorld(), this.punchNode.getComponent(UITransform).getBoundingBoxToWorld())) {
                worm.name = 'died'
                tween(worm).to(0.2, { position: v3(Math.random() * 750 - 375, 500) }).removeSelf().start()
                this.finishCount++
            }
        }
    }

    update(deltaTime: number) {
        this.rotateArrow()
        this.updateLockLength()
        this.checkColl()
        this.countLabel.string = this.finishCount + ' / 75'
    }
}

