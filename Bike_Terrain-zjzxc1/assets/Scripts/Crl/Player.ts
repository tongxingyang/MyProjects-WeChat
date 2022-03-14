
import { _decorator, Component, Node, RigidBody, v2, v3, Vec3, geometry, PhysicsSystem, SkeletalAnimation, SphereCollider, Tween, tween, BoxCollider, ITriggerEvent, Animation, SkinnedMeshRenderer, v4 } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import Utility from '../Mod/Utility';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    _body: RigidBody = null
    _man: Node = null
    _skinMan: Node = null
    collider: BoxCollider = null

    baseLocalPos: Vec3 = v3()
    speedForce: number = 10
    maxSpeed: number = 8

    dirX: number = 0
    isDied: boolean = false
    hadWin: boolean = false

    onLoad() {
        this._body = this.getComponent(RigidBody)
        this.collider = this.getComponent(BoxCollider)
        this._skinMan = this.node.children[0]
        this._man = this.node.children[1]
        this.baseLocalPos = this._man.position.clone()

        this._body.useGravity = false
    }

    start() {
        // [3]
        this.changeSkin()
        if (!FdMgr.isVersionValid) {
            this._skinMan.children[0].getComponent(SkinnedMeshRenderer).material.setProperty('albedo', v4(0, 0, 0, 1))
        }
    }

    changeSkin() {
        let index = PlayerDataMgr.getPlayerData().skinId
        this._skinMan.children[0].getComponent(SkinnedMeshRenderer).material = this._skinMan.children[0].getComponent(SkinnedMeshRenderer).materials[index]
    }

    get myPosClone(): Vec3 {
        return this.node.worldPosition.clone()
    }

    get myLinearV(): Vec3 {
        let v: Vec3 = v3()
        this._body.getLinearVelocity(v)
        return v
    }

    addSpeed() {
        this.schedule(this.applyForce)
    }

    applyForce() {
        this._body.applyForce(v3(0, 0, this.speedForce))
    }

    stopSpeed() {
        this.unschedule(this.applyForce)
    }

    moveX(dt: number) {
        this.dirX = dt / 2
        this._man.setRotationFromEuler(v3(10, dt / 8 * 15, 0))
        let p = this.baseLocalPos.clone()
        p.x -= dt / 8 * 0.02
        this._man.setPosition(p)
    }
    stopMoveX() {
        this.dirX = 0
        this._man.setRotationFromEuler(v3(10, 0, 0))
        this._man.setPosition(this.baseLocalPos.clone())
    }

    canApplyImpulse: boolean = true
    applyImpulse() {
        if (!this.canApplyImpulse) return
        this.canApplyImpulse = false
        this.scheduleOnce(() => { this.canApplyImpulse = true }, 1)
        this._body.applyImpulse(v3(0, 6, 8))
        Utility.DoVibrate()
        SoundMgr.Share.PlaySound('speed')
    }

    collBack() {
        this._body.applyImpulse(v3(0, 0, -3))
    }

    checkCollTerrian() {
        let pos = this.myPosClone
        let desPos = this.myPosClone
        desPos.y -= 1
        const outRay = new geometry.Ray();
        geometry.Ray.fromPoints(outRay, pos, desPos);
        if (PhysicsSystem.instance.raycast(outRay, 0xffffffff, 0.2)) {
            for (let i = 0; i < PhysicsSystem.instance.raycastResults.length; i++) {
                if (PhysicsSystem.instance.raycastResults[i].collider.node.name.search('terrain') != -1) {
                    return true
                }
            }
        }
        return false
    }

    collStone() {
        if (this.isDied) return
        SoundMgr.Share.PlaySound('kick' + Math.floor(Math.random() * 3 + 1))
        this.isDied = true
        GameLogic.Share.gameOver(false)
        this.stopSpeed()
        this._body.setLinearVelocity(v3(this.myLinearV.x, this.myLinearV.y, 0))
        this.collBack()
        this.collider.material.friction = 10
        this.node.children[0].active = true
        this.node.children[1].active = false
        this.node.children[0].getComponent(SkeletalAnimation).play('die')

        let camPos = GameLogic.Share.playerCam.position.clone()
        camPos.y += 1
        camPos.z -= 1.5
        tween(GameLogic.Share.playerCam).to(0.5, { position: camPos }).start()
    }

    fixRotation() {
        let min = 5
        let lv = this.myLinearV
        let angle = this._man.eulerAngles.clone()
        let y = lv.y
        if (y > min) y = min
        if (y < -min) y = -min
        angle.x = -20 * (y / min)
        Vec3.lerp(angle, this._man.eulerAngles, angle, 0.02)
        this._man.setRotationFromEuler(angle)
    }

    update(deltaTime: number) {
        if (GameLogic.Share.isGameOver && GameLogic.Share.isWin) {
            let lv = this.myLinearV
            if (lv.z < 3 && lv.z > 0 && !this.hadWin) {
                this.hadWin = true
                lv.z = 0
                this._body.setLinearVelocity(lv)
                this._body.linearDamping = 1
                this.node.children[0].active = true
                this.node.children[1].active = false
                GameLogic.Share.playerCam.getComponent(Animation).play()
            }
            return
        }
        //this.fixRotation()
        if (this.myPosClone.z >= GameLogic.Share.DesNode.worldPosition.z) {
            this._body.linearDamping = .98
            GameLogic.Share.gameOver(true)
            return
        }

        let ly = this.myLinearV.y
        let lz = this.myLinearV.z > this.maxSpeed ? this.maxSpeed : this.myLinearV.z
        if (this.checkCollTerrian() && ly < -3) {
            ly = -3
        }
        this._body.setLinearVelocity(v3(this.dirX * (lz / this.maxSpeed), ly, lz))
    }
}