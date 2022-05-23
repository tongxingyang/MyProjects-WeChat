
import { _decorator, Component, Node, geometry, PhysicsSystem, RigidBody, v3, Vec3, Animation, SphereCollider, ICollisionEvent, SkeletalAnimation, SkinnedMeshRenderer, tween } from 'cc';
import { SoundMgr } from '../Mod/SoundMgr';
import Utility from '../Mod/Utility';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('AiCrl')
export class AiCrl extends Component {

    _man: Node = null

    baseLocalPos: Vec3 = v3()
    dirX: number = 0
    maxZ: number = 1
    isDied: boolean = false
    hadPlayDie: boolean = false

    onLoad() {
        this._man = this.node.children[0]
        this.baseLocalPos = this._man.position.clone()
    }

    start() {
        // [3]
        this.maxZ = Math.random() * 3
        this.addSpeed()
        this.changeSkin()
    }

    get myPosClone(): Vec3 {
        return this.node.worldPosition.clone()
    }

    changeSkin() {
        let index = Math.floor(Math.random() * 6)
        this._man.children[0].getComponent(SkinnedMeshRenderer).material = this._man.children[0].getComponent(SkinnedMeshRenderer).materials[index]
    }

    addSpeed() {
        this.schedule(this.applyForce)
    }

    applyForce() {
        //this._body.applyForce(v3(0, 0, 4))
        this.node.translate(v3(0, 0, Math.random() * 0.05))
    }

    stopSpeed() {
        this.unschedule(this.applyForce)
    }

    moveX(dt: number) {
        this.dirX = dt
        this._man.setRotationFromEuler(v3(0, dt / 5 * 15, 0))
        let p = this.baseLocalPos.clone()
        p.x -= dt / 5 * 0.02
        this._man.setPosition(p)
    }
    stopMoveX() {
        this.dirX = 0
        this._man.setRotationFromEuler(v3(0, 0, 0))
        this._man.setPosition(this.baseLocalPos.clone())
    }

    canApplyImpulse: boolean = true
    applyImpulse() {
        if (!this.canApplyImpulse || this.isDied) return
        // this.canApplyImpulse = false
        // this.scheduleOnce(() => { this.canApplyImpulse = true }, 1)
        // this._body.applyImpulse(v3(0, 4, 6))
    }

    dieCB() {
        if (this.isDied || GameLogic.Share.isGameOver) return
        this.isDied = true
        this._man.getComponent(SkeletalAnimation).play('die')
        this.hadPlayDie = true
        this.stopSpeed()
    }
    collStone() {
        if (this.isDied) return
        this.isDied = true
        this.stopSpeed()
        this._man.getComponent(SkeletalAnimation).play('die')
        this.schedule(() => {
            this.node.translate(v3(0, 0, -0.01))
        }, 0.01, 50)
    }

    checkCollPlayer() {
        let myPos = this.myPosClone
        let playerPos = GameLogic.Share.playerCrl.myPosClone
        if (myPos.x > playerPos.x - 0.3 && myPos.x < playerPos.x + 0.3 &&
            Vec3.distance(myPos, playerPos) <= 0.85 && !this.isDied) {
            SoundMgr.Share.PlaySound('kick' + Math.floor(Math.random() * 3 + 1))
            Utility.DoVibrate()
            this.dieCB()
            GameLogic.Share.playerCrl.collBack()
            this.schedule(() => {
                this.node.translate(v3(0, 0, 0.15))
            }, 0.01, 50)
        }
    }

    checkCollTerrian() {
        let pos = this.myPosClone
        let desPos = this.myPosClone
        desPos.y -= 100
        const outRay = new geometry.Ray();
        geometry.Ray.fromPoints(outRay, pos, desPos);
        if (PhysicsSystem.instance.raycast(outRay, 0xffffffff, 100)) {
            for (let i = 0; i < PhysicsSystem.instance.raycastResults.length; i++) {
                if (PhysicsSystem.instance.raycastResults[i].collider.node.name.search('terrain') != -1) {
                    let p = PhysicsSystem.instance.raycastResults[i].hitPoint.clone()
                    //p.y += 0.1
                    pos.y = p.y + 0.1
                    this.node.worldPosition = pos
                    return true
                }
            }
        }
        return false
    }

    update(deltaTime: number) {
        if (this.myPosClone.z >= GameLogic.Share.DesNode.worldPosition.z) {
            this.stopSpeed()
            if (this._man.getComponent(SkeletalAnimation).getState('idle') && !this._man.getComponent(SkeletalAnimation).getState('idle').isPlaying)
                this._man.getComponent(SkeletalAnimation).play('idle')
        }

        if (this.isDied && !this.hadPlayDie) {
            if (this._man.getComponent(SkeletalAnimation).getState('die') && !this._man.getComponent(SkeletalAnimation).getState('die').isPlaying) {
                this.hadPlayDie = true
                this._man.getComponent(SkeletalAnimation).play('die')
            }
        }

        this.checkCollTerrian()
        if (GameLogic.Share.isGameOver) {
            return
        }

        this.checkCollPlayer()
    }
}