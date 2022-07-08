import { _decorator, Component, Node, dragonBones, RigidBody2D, BoxCollider2D, Vec2, v2, Vec3, v3, PolygonCollider2D, Contact2DType, Collider2D, IPhysics2DContact, tween, UIOpacity, ParticleSystem2D } from 'cc';
import PlatformApi from '../Mod/PlatformApi';
import { SoundMgr } from '../Mod/SoundMgr';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    body: RigidBody2D = null
    boxCollider: BoxCollider2D = null
    polygonCollider: PolygonCollider2D = null
    ani: dragonBones.ArmatureDisplay = null
    db: Node = null
    groundedPt: ParticleSystem2D = null

    groundColl: Collider2D[] = []

    curAni: string = 'idle'

    speed: number = 8
    dirX: number = 0

    isJumping: boolean = false
    isHide: boolean = false
    isSmaller: boolean = false
    isBigger: boolean = false

    onLoad() {
        this.body = this.getComponent(RigidBody2D)
        this.boxCollider = this.getComponent(BoxCollider2D)
        this.polygonCollider = this.getComponent(PolygonCollider2D)
        this.db = this.node.getChildByName("db")
        this.ani = this.db.getComponent(dragonBones.ArmatureDisplay)
        this.groundedPt = this.node.getChildByName('grounded').getComponent(ParticleSystem2D)
    }

    start() {
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onGroundCollider, this)
        this.boxCollider.on(Contact2DType.END_CONTACT, this.onGroundExitCollider, this)
        this.polygonCollider.on(Contact2DType.BEGIN_CONTACT, this.onPolygonCollider, this)
    }

    initAsset(id: number) {
        this.ani.dragonAsset = GameLogic.Share.playerDBA[id]
        this.ani.dragonAtlasAsset = GameLogic.Share.playerDBAA[id]
        this.ani.armatureName = 'Armature'
        this.ani.playAnimation('idle')
    }

    onGroundCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (GameLogic.Share.isGameOver) return
        if (selfCollider.tag == 1 && otherCollider != this.polygonCollider && otherCollider.tag != 100) {
            this.groundColl.push(otherCollider)
            if (this.isJumping) {
                PlatformApi.DoVibrate()
                this.isJumping = false
                this.groundedPt.resetSystem()
                this.playAni(this.dirX == 0 ? 'idle' : 'run')
            }
        }
    }
    onGroundExitCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (GameLogic.Share.isGameOver) return
        if (selfCollider.tag == 1 && otherCollider != this.polygonCollider && otherCollider.tag != 100) {
            this.groundColl.splice(this.groundColl.indexOf(otherCollider), 1)
            if (this.groundColl.length <= 0) {
                this.isJumping = true
            }
        }
    }
    onPolygonCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

    }

    playAni(name: string, times: number = -1) {
        if (name == this.curAni || this.curAni == 'death') return
        this.curAni = name
        this.ani.playAnimation(name, times)
    }

    get myLinearVelocity(): Vec2 {
        return this.body.linearVelocity.clone();
    }

    move() {
        if (GameLogic.Share.isGameOver) {
            this.dirX = 0
        }
        let v = this.myLinearVelocity
        v.x = this.dirX * this.speed
        this.body.linearVelocity = v
        if (this.dirX != 0)
            this.db.setScale(v3(this.dirX * 0.8, 0.8, 0.8))
        if (!this.isJumping) {
            if (this.dirX != 0) {
                this.playAni('run')
            } else {
                this.playAni('idle')
            }
        }
    }

    jump() {
        if (this.isJumping || GameLogic.Share.isGameOver) return
        SoundMgr.Share.PlaySound('jump')
        this.isJumping = true
        this.playAni('jump')
        if (this.isSmaller) {
            this.body.applyLinearImpulseToCenter(v2(0, 180 * 0.25), true)
        } else if (this.isBigger) {
            this.body.applyLinearImpulseToCenter(v2(0, 180 * 4), true)
        } else {
            this.body.applyLinearImpulseToCenter(v2(0, 180), true)
        }
    }

    hideCB() {
        this.db.getComponent(UIOpacity).opacity = 100
        this.isHide = true
    }

    smallCB() {
        this.isSmaller = true
        this.node.setScale(.5, .5, 1)
    }

    bigCB() {
        this.isBigger = true
        this.node.setScale(2, 2, 1)
    }

    resize() {
        this.isHide = true
        this.isSmaller = false
        this.isBigger = false
        this.node.setScale(1, 1, 1)
        this.scheduleOnce(() => {
            this.polygonCollider.apply()
        })

        let count = 0
        let blink = () => {
            tween(this.db).hide().delay(0.1).show().delay(0.1).call(() => {
                count++
                if (count > 5) {
                    this.isHide = false
                    return
                }
                blink()
            }).start()
        }
        blink()
    }

    winCB() {

    }

    loseCB() {
        this.polygonCollider.destroy()
        this.boxCollider.destroy()
        this.playAni('death', 0)
        tween(this.node).by(0.3, { position: v3(0, 150, 0) }, { easing: "smooth" }).by(1, { position: v3(0, -1000, 0) }, { easing: "smooth" }).start()
    }

    update(deltaTime: number) {
        this.move()
    }
}

