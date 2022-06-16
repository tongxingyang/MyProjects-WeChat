
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import { PlayerAniType } from "../Mod/Entity"
import SoundMgr from "../Mod/SoundMgr"
import Utility from "../Mod/Utility"
import Effects from "./Effects"
import GameLogic from "./GameLogic"

export default class PlayerCrl extends Laya.Script {
    constructor() {
        super()
    }
    _ani: Laya.Animator
    myOwner: Laya.Sprite3D = null
    hatNode: Laya.Sprite3D = null

    Bones_L_Forearm: Laya.Sprite3D = null
    Bones_L_UpperArm: Laya.Sprite3D = null
    Bones_L_Clavicle: Laya.Sprite3D = null
    Bones_R_Forearm: Laya.Sprite3D = null
    Bones_R_UpperArm: Laya.Sprite3D = null
    Bones_R_Clavicle: Laya.Sprite3D = null
    Bones_Pelvis: Laya.Sprite3D = null
    Bones_L_Calf: Laya.Sprite3D = null
    Bones_L_Thigh: Laya.Sprite3D = null
    Bones_R_Calf: Laya.Sprite3D = null
    Bones_R_Thigh: Laya.Sprite3D = null
    Bones_Spine: Laya.Sprite3D = null
    Dummy_Head_Vertex: Laya.Sprite3D = null
    Dummy001: Laya.Sprite3D = null
    Dummy_Arm001: Laya.Sprite3D = null
    Dummy_Arm002: Laya.Sprite3D = null

    touchX: number = 0
    speed: number = 0.1
    edgeMax: number = 3
    tempSpeed: number = 0

    scaleH: number = 1
    maxH: number = 10
    scaleV: number = 1
    maxV: number = 15
    HArr: Laya.Sprite3D[] = []

    isJumping: boolean = false
    canMove: boolean = true
    curAniName: string = ""

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
        this._ani = this.myOwner.getComponent(Laya.Animator)
        this.hatNode = Utility.findNodeByName(this.myOwner, 'Dummy_Head') as Laya.Sprite3D

        this.Bones_L_Forearm = Utility.findNodeByName(this.myOwner, 'Bones_L_Forearm') as Laya.Sprite3D
        this.Bones_L_UpperArm = Utility.findNodeByName(this.myOwner, 'Bones_L_UpperArm') as Laya.Sprite3D
        this.Bones_L_Clavicle = Utility.findNodeByName(this.myOwner, 'Bones_L_Clavicle') as Laya.Sprite3D
        this.Bones_R_Forearm = Utility.findNodeByName(this.myOwner, 'Bones_R_Forearm') as Laya.Sprite3D
        this.Bones_R_UpperArm = Utility.findNodeByName(this.myOwner, 'Bones_R_UpperArm') as Laya.Sprite3D
        this.Bones_R_Clavicle = Utility.findNodeByName(this.myOwner, 'Bones_R_Clavicle') as Laya.Sprite3D
        this.Bones_Pelvis = Utility.findNodeByName(this.myOwner, 'Bones_Pelvis') as Laya.Sprite3D
        this.Bones_L_Calf = Utility.findNodeByName(this.myOwner, 'Bones_L_Calf') as Laya.Sprite3D
        this.Bones_L_Thigh = Utility.findNodeByName(this.myOwner, 'Bones_L_Thigh') as Laya.Sprite3D
        this.Bones_R_Calf = Utility.findNodeByName(this.myOwner, 'Bones_R_Calf') as Laya.Sprite3D
        this.Bones_R_Thigh = Utility.findNodeByName(this.myOwner, 'Bones_R_Thigh') as Laya.Sprite3D
        this.Bones_Spine = Utility.findNodeByName(this.myOwner, 'Bones_Spine') as Laya.Sprite3D
        this.Dummy_Head_Vertex = Utility.findNodeByName(this.myOwner, 'Dummy_Head_Vertex') as Laya.Sprite3D
        this.Dummy001 = Utility.findNodeByName(this.myOwner, 'Dummy001') as Laya.Sprite3D
        this.Dummy_Arm001 = Utility.findNodeByName(this.myOwner, 'Dummy_Arm001') as Laya.Sprite3D
        this.Dummy_Arm002 = Utility.findNodeByName(this.myOwner, 'Dummy_Arm002') as Laya.Sprite3D

        this.HArr = [
            this.Bones_L_Forearm, this.Bones_L_UpperArm, this.Bones_L_Clavicle,
            this.Bones_R_Forearm, this.Bones_R_UpperArm, this.Bones_R_Clavicle,
            this.Bones_L_Calf, this.Bones_L_Thigh, this.Bones_R_Calf, this.Bones_R_Thigh, this.Bones_Spine, this.Dummy_Arm001, this.Dummy_Arm002
        ]

        this.playAni(PlayerAniType.ANI_IDLE)
        this.init()
    }

    init() {
        this.changeSkin(PlayerDataMgr.getPlayerData().skinId)
    }

    changeSkin(id: number) {
        let dir: string = "res/Heros/Hero_" + (id + 1) + ".jpg"
        Laya.Texture2D.load(dir, Laya.Handler.create(this, (texture) => {
            let ms: Laya.SkinnedMeshSprite3D = this.myOwner.getChildAt(0) as Laya.SkinnedMeshSprite3D;
            (ms.skinnedMeshRenderer.material as Laya.BlinnPhongMaterial).albedoTexture = texture;
            let ms1: Laya.SkinnedMeshSprite3D = this.myOwner.getChildAt(1) as Laya.SkinnedMeshSprite3D;
            (ms1.skinnedMeshRenderer.material as Laya.BlinnPhongMaterial).albedoTexture = texture;
            let ms2: Laya.SkinnedMeshSprite3D = this.myOwner.getChildAt(3) as Laya.SkinnedMeshSprite3D;
            (ms2.skinnedMeshRenderer.material as Laya.BlinnPhongMaterial).albedoTexture = texture;
            let ms3: Laya.MeshSprite3D = Utility.findNodeByName(this.myOwner, 'Head') as Laya.MeshSprite3D;
            (ms3.meshRenderer.material as Laya.BlinnPhongMaterial).albedoTexture = texture;
        }));

        for (let i = 0; i < 5; i++) {
            let hat = this.hatNode.getChildAt(i) as Laya.Sprite3D
            hat.active = id > 0 && i + 1 == id
        }
    }

    startRun() {
        this.myOwner.transform.position = new Laya.Vector3(0, 0, 0)
        this.myOwner.transform.rotationEuler = new Laya.Vector3(0, 0, 0)
        this.playAni(PlayerAniType.ANI_RUN)
    }

    playAni(name: string, speed: number = 1, normalizedTime: number = 0) {
        if (name == this.curAniName) return
        this._ani.crossFade(name, 0.2, 0, normalizedTime)
        this._ani.speed = speed
        this.curAniName = name
    }

    moveX() {
        if (GameLogic.Share.isGameOver || !this.canMove) return

        let speed = this.speed + this.tempSpeed
        let pos = new Laya.Vector3(0, 0, speed)
        this.myOwner.transform.translate(pos, false)

        let x = this.touchX
        x -= Laya.stage.displayWidth / 2
        x = x / (Laya.stage.displayWidth / 2) * this.edgeMax
        pos = this.myOwner.transform.position.clone()
        pos.x = -x
        Laya.Vector3.lerp(this.myOwner.transform.position.clone(), pos, 0.2, pos)
        this.myOwner.transform.position = pos
    }

    hurtCB(type: number) {
    }

    jump() {
        this.isJumping = true
        this.playAni(PlayerAniType.ANI_JUMPSTART)
        Laya.timer.once(200, this, () => { this.playAni(PlayerAniType.ANI_FLYING) })
        let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()
        let p1: Laya.Vector3 = myPos.clone()
        p1.z += 5
        p1.y += 8
        let p2: Laya.Vector3 = myPos.clone()
        p2.z += 10
        p2.y = 0
        Utility.TmoveToYZ(this.myOwner, 800, p1, () => {
            Utility.TmoveToYZ(this.myOwner, 800, p2, () => {
                this.playAni(PlayerAniType.ANI_RUN)
                this.isJumping = false
            }, Laya.Ease.sineIn)
        }, Laya.Ease.sineInOut)
    }

    changeV(type: string, v: number) {
        switch (type) {
            case '+':
                v /= 15;
                this.scaleV += v;
                break;
            case '-':
                v /= 15;
                this.scaleV -= v;
                break;
            case '*':
                this.scaleV *= v;
                break;
            case '/':
                this.scaleV /= v;
                break;
        }
        if (this.scaleV < 0) this.scaleV = 0
        if (this.scaleV > this.maxV) this.scaleV = this.maxV
    }
    changeH(type: string, v: number) {
        switch (type) {
            case '+':
                v /= 15;
                this.scaleH += v;
                break;
            case '-':
                v /= 15;
                this.scaleH -= v;
                break;
            case '*':
                this.scaleH *= v;
                break;
            case '/':
                this.scaleH /= v;
                break;
        }
        if (this.scaleH < 0) this.scaleH = 0
        if (this.scaleH > this.maxH) this.scaleH = this.maxH
    }

    decHV(v: number = 0.4) {
        if (this.scaleV > 1) {
            this.scaleV -= v
        } else {
            this.scaleH -= v
        }
        if (this.scaleH < 0) {
            this.scaleH = 0
            this._ani.speed = 0
            GameLogic.Share._bossCrl.playAni('win')
            this.diedCB()
            GameLogic.Share.gameOver(true)
        }
        if (this.scaleV < 0) {
            this.scaleV = 0
        }
    }

    diedCB() {
        let myPos = this.myOwner.transform.position.clone()
        let x = Math.random() * 4 - 2
        myPos.x = x
        myPos.z += (Math.random() * 10 + 5)
        Utility.TmoveTo(this.myOwner, 1500, myPos, null)

        let r: Laya.Vector3 = new Laya.Vector3()
        r.x = Math.random() * 720 + 360
        //r.y = Math.random() * 720 + 360
        r.z = Math.random() * 720 + 360
        Utility.RotateTo(this.myOwner, 1500, r, null)
    }

    updateScaleH() {
        let s = new Laya.Vector3(1, this.scaleH, this.scaleH)
        for (let i = 0; i < this.HArr.length; i++) {
            let node = this.HArr[i]
            if (node == this.Bones_Spine) s = new Laya.Vector3(1, this.scaleH * 1.5, this.scaleH * 1.5)
            if (node == this.Bones_R_Calf || node == this.Bones_R_Thigh || node == this.Dummy_Arm001) {
                let sh = this.scaleH * 0.03
                let myP = node.transform.localPosition.clone()
                let desP = myP.clone()
                desP.z = sh
                Laya.Vector3.lerp(myP, desP, 0.1, desP)
                node.transform.localPosition = desP
                if (node == this.Dummy_Arm001) continue
            }
            else if (node == this.Bones_L_Calf || node == this.Bones_L_Thigh || node == this.Dummy_Arm002) {
                let sh = this.scaleH * 0.03
                let myP = node.transform.localPosition.clone()
                let desP = myP.clone()
                desP.z = -sh
                Laya.Vector3.lerp(myP, desP, 0.1, desP)
                node.transform.localPosition = desP
                if (node == this.Dummy_Arm002) continue
            }
            let desS = new Laya.Vector3()
            let myS = node.transform.localScale.clone()
            Laya.Vector3.lerp(myS, s, 0.1, desS)
            node.transform.localScale = desS
        }

        s = new Laya.Vector3(this.scaleH, this.scaleH, /* this.scaleH < 1 ? 1 :  */this.scaleH * 0.6)
        let desS = new Laya.Vector3()
        let myS = this.Bones_Pelvis.transform.localScale.clone()
        Laya.Vector3.lerp(myS, s, 0.1, desS)
        this.Bones_Pelvis.transform.localScale = desS
    }

    updateScaleV() {
        let s = new Laya.Vector3(this.scaleV, 1, 1)
        let desS = new Laya.Vector3()
        let myS = this.Bones_Spine.transform.localScale.clone()
        Laya.Vector3.lerp(myS, s, 0.1, desS)
        this.Bones_Spine.transform.localScale = desS

        let headPos = this.Dummy001.transform.position.clone()
        this.Dummy_Head_Vertex.transform.position = headPos
    }

    walkFinish() {
        GameLogic.Share.isFinish = true
        let myPos = this.myOwner.transform.position.clone()
        myPos.x = 0
        myPos.z = GameLogic.Share._roadFinish.transform.position.z + 3.5
        Utility.TmoveTo(this.myOwner, 500, myPos, () => {
            this.jumpToDes()
        })

        let p1 = GameLogic.Share._roadFinish.transform.position.clone()
        p1.x = 1
        p1.z += 2
        let p2 = GameLogic.Share._roadFinish.transform.position.clone()
        p2.x = -1
        p2.z += 2
        Effects.createFireWork(p1)
        Effects.createFireWork(p2)
    }
    jumpToDes() {
        SoundMgr.instance.playSoundEffect('spring')
        this.playAni(PlayerAniType.ANI_JUMPSTART)
        Laya.timer.once(200, this, () => { this.playAni(PlayerAniType.ANI_FLYING) })
        let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()
        let p1: Laya.Vector3 = myPos.clone()
        p1.z += 20
        p1.y += 10
        let p2: Laya.Vector3 = GameLogic.Share._roadFinish2.transform.position.clone()
        Utility.TmoveToYZ(this.myOwner, 1500, p1, () => {
            Utility.TmoveToYZ(this.myOwner, 800, p2, () => {
                SoundMgr.instance.playSoundEffect('land')
                this.playAni(PlayerAniType.ANI_SPRINT)
                Laya.timer.frameLoop(1, this, this.rushToBoss)
            }, Laya.Ease.sineIn)
        }, Laya.Ease.sineInOut)

        let r = GameLogic.Share._camera.transform.rotationEuler.clone()
        r.y += 15
        Utility.RotateTo(GameLogic.Share._camera, 1000, r, null)
        let p = GameLogic.Share._camera.transform.position.clone()
        p.x -= 3
        Utility.TmoveToX(GameLogic.Share._camera, 1000, p, null)
    }

    rushToBoss() {
        if (GameLogic.Share.isGameOver) return
        let speed = this.speed * 2
        let pos = new Laya.Vector3(0, 0, speed)
        this.myOwner.transform.translate(pos, false)

        let j = GameLogic.Share._roadFinish2.getChildAt(1) as Laya.Sprite3D
        if (this.myOwner.transform.position.z >= j.transform.position.z) {
            Laya.timer.clear(this, this.rushToBoss)
            this.jumpToBoss()
        }
    }

    jumpToBoss() {
        SoundMgr.instance.playSoundEffect('spring')
        GameLogic.Share.isGameOver = true
        GameLogic.Share._cameraCrl.moveToBoss()
        this.playAni(PlayerAniType.ANI_FLYINGKICK, 0.15)
        let bossPos = GameLogic.Share._boss.transform.position.clone()
        bossPos.y = 14
        bossPos.z -= 1.5
        Utility.TmoveTo(this.myOwner, 2300, bossPos, () => {
            SoundMgr.instance.playSoundEffect('boss')
            Effects.createBoom4(new Laya.Vector3(bossPos.x, bossPos.y, bossPos.z + 1.5))
            GameLogic.Share._bossCrl.playAni('die', 0.2)

            let myPos = this.myOwner.transform.position.clone()
            myPos.y = 0

            Laya.timer.once(1000, this, () => {
                this._ani.speed = 0.5
                Utility.TmoveTo(this.myOwner, 2000, myPos, null)

                GameLogic.Share.gameOver(true)
            })
        })
    }

    onUpdate(): void {

        this.updateScaleH()
        this.updateScaleV()

        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isFinish) {
            return
        }

        this.moveX()

        if (this.myOwner.transform.position.z >= GameLogic.Share._roadFinish.transform.position.z) {
            this.walkFinish()
        }

        if (this.myOwner.transform.position.x < -this.edgeMax) {
            let pos = this.myOwner.transform.position.clone()
            pos.x = -this.edgeMax
            this.myOwner.transform.position = pos
        } else if (this.myOwner.transform.position.x > this.edgeMax) {
            let pos = this.myOwner.transform.position.clone()
            pos.x = this.edgeMax
            this.myOwner.transform.position = pos
        }
    }
}