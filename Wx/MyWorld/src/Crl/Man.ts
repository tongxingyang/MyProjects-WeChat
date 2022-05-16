import Utility from "../Mod/Utility"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import GameLogic from "./GameLogic"
import WxApi from "../Libs/WxApi"
import SoundMgr from "../Mod/SoundMgr"
import GameUI from "../View/GameUI"
import FdMgr from "../FanDong/FdMgr"

export default class Man extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null

    _ani: Laya.Animator = null
    weaponNode: Laya.Sprite3D = null
    atkArea: Laya.Sprite3D = null
    steve: Laya.Sprite3D = null
    smoke_1: Laya.Sprite3D = null
    smoke_beat: Laya.Sprite3D = null

    myDir: Laya.Vector3 = new Laya.Vector3()
    tempDir: Laya.Vector3 = new Laya.Vector3()
    speed: number = 0.2
    weaponIndex: number = 0
    areaIndex: number = 0
    scaleNum: number = 1

    canMove: boolean = true
    isDied: boolean = false
    isPlayer: boolean = true

    curAniName: string = ''

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
        this._ani = this.myOwner.getComponent(Laya.Animator)
        this.weaponNode = Utility.findNodeByName(this.myOwner, 'weapon_hand.R')
        this.atkArea = Utility.findNodeByName(this.myOwner, 'AtkArea')
        this.steve = Utility.findNodeByName(this.myOwner, 'Steve')
        this.smoke_1 = Utility.findNodeByName(this.myOwner, 'Smoke_1')
        this.smoke_beat = Utility.findNodeByName(this.myOwner, 'Smoke_Beat')
        this.playAni('character_bones|default_idle_' + Utility.GetRandom(1, 7))
    }

    onDestroy() {
        Laya.timer.clearAll(this)
    }

    get myPos(): Laya.Vector3 {
        return this.myOwner.transform.position.clone()
    }

    changeSkin(id: number) {
        let dir: string = "res/Texture/Man_" + (id + 1) + ".png"
        let ms: Laya.SkinnedMeshSprite3D = this.steve as Laya.SkinnedMeshSprite3D
        Laya.Texture2D.load(dir, Laya.Handler.create(this, (texture) => {
            (ms.skinnedMeshRenderer.material as Laya.BlinnPhongMaterial).albedoTexture = texture;
            if (!FdMgr.isVersionValid) {
                (ms.skinnedMeshRenderer.material as Laya.BlinnPhongMaterial).albedoColor = new Laya.Vector4(0, 0, 0, 1);
            }
        }));
    }

    playAni(name: string, speed: number = 1, normalizedTime: number = 0) {
        if (name.search('idle') != -1 && this.curAniName == this.getAniTypeName() + 'idle') return
        if (name.search('run') != -1 && this.curAniName == this.getAniTypeName() + 'run') return
        //this._ani.crossFade(name, 0.1, 0, normalizedTime)
        this._ani.play(name, 0, normalizedTime)
        this._ani.speed = speed
        this.curAniName = name
    }
    playIdle() {
        this.playAni(this.getAniTypeName() + 'idle')
    }
    playRun() {
        this.playAni(this.getAniTypeName() + 'run')
    }
    playAttack() {
        this.playAni(this.getAniTypeName() + 'attack', 1.5)
    }
    playWin() {
        this.playAni(this.getAniTypeName() + 'win_1')
    }

    getAniTypeName() {
        switch (this.weaponIndex) {
            case 0:
                return 'character_bones|hammer_'
            case 1:
                return 'character_bones|sword_'
            case 2:
                return 'character_bones|gunman_'
            case 3:
                return 'character_bones|trapman_'
            case 4:
                return 'character_bones|hunter_'
        }
    }

    activeWeapon(id: number) {
        for (let i = 0; i < this.weaponNode.numChildren; i++) {
            let weapon: Laya.Sprite3D = this.weaponNode.getChildAt(i) as Laya.Sprite3D
            weapon.active = i == id
        }
    }
    activeAtkArea(id: number) {
        this.areaIndex = id
        for (let i = 0; i < this.atkArea.numChildren; i++) {
            let area: Laya.Sprite3D = this.atkArea.getChildAt(i) as Laya.Sprite3D
            area.active = i == id
        }
    }

    move() {
        if (GameLogic.Share.isGameOver || !this.canMove || this.isDied) return
        if (Laya.Vector3.scalarLength(this.myDir) > 0) this.playRun()

        this.checkCollision()

        let speed = this.speed
        if (this.isPlayer) speed += this.scaleNum * 0.02
        let pos = this.myOwner.transform.position.clone()
        let dir = new Laya.Vector3(0, 0, 0)
        let sp = speed

        Laya.Vector3.scale(this.myDir, sp, dir)
        Laya.Vector3.add(pos, dir, pos)
        this.myOwner.transform.position = pos
    }
    rotateMySelf() {
        if (this.isDied || !this.canMove || Laya.Vector3.equals(this.myDir, new Laya.Vector3())) {
            return
        }

        let angle = new Laya.Quaternion()
        let dir = new Laya.Vector3()
        Laya.Vector3.scale(this.myDir, -1, dir)
        Laya.Quaternion.rotationLookAt(dir, new Laya.Vector3(0, 1, 0), angle)
        Laya.Quaternion.invert(angle, angle)
        Laya.Quaternion.lerp(this.myOwner.transform.localRotation.clone(), angle, 0.2, angle)
        this.myOwner.transform.localRotation = angle

        let a = this.myOwner.transform.localRotationEuler.clone()
        a.x = 0
        this.myOwner.transform.localRotationEuler = a
    }

    stronger() {
        this.scaleNum += 0.3
        this.myOwner.transform.setWorldLossyScale(new Laya.Vector3(this.scaleNum, this.scaleNum, this.scaleNum))
        this.smoke_beat.transform.setWorldLossyScale(new Laya.Vector3(this.scaleNum, this.scaleNum, this.scaleNum))
    }

    hurtCB(fromPlayer: boolean = false) {
        if (this.isDied) return
        SoundMgr.instance.playSoundEffect('Hurt.mp3')
        WxApi.DoVibrate()
        GameLogic.Share.createHitFX(this.myOwner)
        Laya.timer.clearAll(this)
        this.isDied = true
        this.atkArea.active = false
        if (!this.isPlayer) {
            if (fromPlayer) {
                GameLogic.Share._playerCrl.stronger()
            }
            GameUI.Share.getCoins(this.myPos)
            GameLogic.Share._curEnemyCount--
            this.myOwner.destroy()
            if (GameLogic.Share._enemyNode.numChildren <= 0) {
                GameLogic.Share.gameOver(true)
            }
        } else {
            GameLogic.Share.gameOver(false)
            this.dieCB()
            this.playIdle()
        }
    }

    dieCB() {
        let r = this.myOwner.transform.localRotationEuler.clone()
        r.x -= 90
        Utility.RotateTo(this.myOwner, 300, r, null)
        //this.myOwner.transform.localRotationEuler = r
    }

    checkCollision() {
        let l1 = GameLogic.Share._sceneId == 1 ? 3 : 3.5
        let l2 = GameLogic.Share._sceneId == 1 ? 2.5 : 3
        let arr = GameLogic.Share._sceneId == 1 ? GameLogic.Share._cubeArr1 : GameLogic.Share._cubeArr2
        for (let i = 0; i < arr.length; i++) {
            let cube: Laya.Sprite3D = arr[i]
            let cPos: Laya.Vector3 = cube.transform.position.clone()
            if (this.myPos.x <= cPos.x + l1 && this.myPos.x >= cPos.x - l1 && this.myPos.z <= cPos.z + l1 && this.myPos.z >= cPos.z - l1) {
                if (this.myPos.x >= cPos.x + l2 && this.myDir.x < 0) {
                    this.myDir.x = 0
                }
                if (this.myPos.x <= cPos.x - l2 && this.myDir.x > 0) {
                    this.myDir.x = 0
                }
                if (this.myPos.z >= cPos.z + l2 && this.myDir.z < 0) {
                    this.myDir.z = 0
                }
                if (this.myPos.z <= cPos.z - l2 && this.myDir.z > 0) {
                    this.myDir.z = 0
                }
            }
        }
    }

    checkAniComplete() {
        if (this._ani.getCurrentAnimatorPlayState().animatorState.name.search('attack') != -1) {
            if (this._ani.getCurrentAnimatorPlayState().normalizedTime >= 1) {
                this.playIdle()
            }
        }
    }

    onUpdate(): void {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || this.isDied) return

        this.move()
        this.rotateMySelf()
        this.checkAniComplete()
    }
}