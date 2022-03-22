import PlayerDataMgr from "../Libs/PlayerDataMgr"
import WxApi from "../Libs/WxApi"
import Utility from "../Mod/Utility"
import GameLogic from "./GameLogic"
import MoveComponent from "./MoveComponent"

export enum AniState {
    ANI_IDLE = 'idle',
    ANI_APPLAUD = 'applaud',
    ANI_SHOW = 'show',
    ANI_WALK = 'walk',
    ANI_WALK1 = 'walk1',
    ANI_SIT = 'sit',
    ANI_UP = 'UP',
    ANI_DIE = 'die',
    ANI_WIN = 'win'
}

export default class Player extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null
    _ani: Laya.Animator = null

    shoesArr: Laya.Sprite3D[] = []
    shoesRootR: Laya.Sprite3D = null
    shoesRootL: Laya.Sprite3D = null
    hatNode: Laya.Sprite3D = null
    backNode: Laya.Sprite3D = null
    handNode: Laya.Sprite3D = null

    isCrowed: boolean = false

    isSliding: boolean = false
    isBoarding: boolean = false

    stopLerpPosY: boolean = false
    isDied: boolean = false
    speed: number = 0.05
    roadEdge: number = 2.3
    currentAniName: string = ''

    onAwake() {
        if (this.myOwner) return
        this.myOwner = this.owner as Laya.Sprite3D
        this._ani = this.owner.getComponent(Laya.Animator);
        this.shoesRootL = Utility.findNodeByName(this.myOwner, 'FootL');
        this.shoesRootR = Utility.findNodeByName(this.myOwner, 'FootR');
        this.hatNode = Utility.findNodeByName(this.myOwner, 'Hat');
        this.backNode = Utility.findNodeByName(this.myOwner, 'Back');
        this.handNode = Utility.findNodeByName(this.myOwner, 'Hand');

        this.myOwner.transform.setWorldLossyScale(new Laya.Vector3(1.5, 1.8, 1.5))

        this.playAnimation(AniState.ANI_IDLE);

        for (let i = 0; i < this.myOwner.numChildren; i++) {
            let n = this.myOwner.getChildAt(i) as Laya.Sprite3D
            if (n.name.search('Hair') != -1 || (n.name.search('Shoes') != -1 && n.name != 'Shoes_C' && n.name != 'Shoes_L') || n.name.search('Clothes') != -1) {
                n.active = false
            } else {
                n.active = true
            }
        }

        this.changeSkin(PlayerDataMgr.getPlayerData().skinId)
        this.initShoes(PlayerDataMgr.getPlayerData().shoesId)
        this.activeAcc(PlayerDataMgr.getPlayerData().hatId)
    }

    onDisable() {

    }

    getMyLocalPos(): Laya.Vector3 {
        return this.myOwner.transform.localPosition.clone()
    }

    getMyBB() {
        return Utility.getBoundBox(this.myOwner)
    }

    getCurAniName(): string {
        return this._ani.getControllerLayer().getCurrentPlayState().animatorState.name
    }

    playAnimation(name: string, speed: number = 1, transitionDuration: number = 0.2) {
        if (this.currentAniName == AniState.ANI_IDLE && name == AniState.ANI_IDLE) return
        this.currentAniName = name
        if (this.isSliding && name == AniState.ANI_APPLAUD) transitionDuration = 0
        this._ani.speed = speed
        this._ani.crossFade(name, transitionDuration)
    }

    goToDes(z: number = 27) {
        (this.myOwner.getComponent(MoveComponent) as MoveComponent).stageOff();

        let pos = this.getMyLocalPos()
        pos.x = 0
        pos.z = z
        this.playAnimation(AniState.ANI_SHOW)
        Utility.TmoveTo(this.myOwner, 1000, pos, () => {
            this.playAnimation(AniState.ANI_WIN)
            GameLogic.Share.winCB()
        })
    }

    addShoes() {
        if (this.shoesArr.length <= 0) {
            let shoesL: Laya.Sprite3D = Utility.getSprite3DResByUrl('Heel.lh', this.shoesRootL)
            let shoesR: Laya.Sprite3D = Utility.getSprite3DResByUrl('Heel.lh', this.shoesRootR);
            (shoesL as Laya.MeshSprite3D).meshRenderer.receiveShadow = true;
            (shoesR as Laya.MeshSprite3D).meshRenderer.receiveShadow = true;
            shoesL.transform.localPosition = new Laya.Vector3(0, 0, 0)
            shoesR.transform.localPosition = new Laya.Vector3(0, 0, 0)
            shoesL.transform.setWorldLossyScale(new Laya.Vector3(shoesL.transform.getWorldLossyScale().x, 1, 1.5))
            shoesR.transform.setWorldLossyScale(new Laya.Vector3(shoesR.transform.getWorldLossyScale().x, 1, 1.5))
            this.shoesArr.push(shoesL)
            this.shoesArr.push(shoesR)
        } else {
            let shoesL: Laya.Sprite3D = Utility.getSprite3DResByUrl('Heel.lh', this.shoesArr[this.shoesArr.length - 2].getChildAt(0))
            let shoesR: Laya.Sprite3D = Utility.getSprite3DResByUrl('Heel.lh', this.shoesArr[this.shoesArr.length - 1].getChildAt(0));
            (shoesL as Laya.MeshSprite3D).meshRenderer.receiveShadow = true;
            (shoesR as Laya.MeshSprite3D).meshRenderer.receiveShadow = true;
            shoesL.transform.localPosition = new Laya.Vector3(0, 0, 0)
            shoesR.transform.localPosition = new Laya.Vector3(0, 0, 0)
            shoesL.transform.setWorldLossyScale(new Laya.Vector3(shoesL.transform.getWorldLossyScale().x, 1, 1.5))
            shoesR.transform.setWorldLossyScale(new Laya.Vector3(shoesR.transform.getWorldLossyScale().x, 1, 1.5))
            this.shoesArr.push(shoesL)
            this.shoesArr.push(shoesR)
        }
        WxApi.DoVibrate()
    }

    preObs: Laya.Sprite3D = null
    decShoes(preObs: Laya.Sprite3D, time: number = 400) {
        if (preObs && this.preObs) {
            if (Math.abs(preObs.transform.position.x - this.preObs.transform.position.x) >= 0.2 &&
                Math.abs(preObs.transform.position.z - this.preObs.transform.position.z) <= 0.5) {
                return
            }
        }
        if (preObs && preObs.name.search('Obs_01') != -1) {
            if (GameLogic.Share._playerCrl.shoesArr.length <= 0 || preObs.transform.position.y - this.myOwner.transform.position.y >= 0) {
                GameLogic.Share._playerCrl.diedCB()
                return
            }
        }
        if (preObs == null && this.shoesArr.length <= 0) {
            Utility.RotateTo(this.myOwner, 1500, new Laya.Vector3(0, 180, 0), () => { })
            this.playAnimation(AniState.ANI_WIN)
            GameLogic.Share.winCB()
            return
        }

        let pos1 = this.shoesArr[this.shoesArr.length - 1].transform.position.clone()
        let pos2 = this.shoesArr[this.shoesArr.length - 2].transform.position.clone()
        GameLogic.Share._levelNode.addChild(this.shoesArr[this.shoesArr.length - 1])
        GameLogic.Share._levelNode.addChild(this.shoesArr[this.shoesArr.length - 2])
        this.shoesArr[this.shoesArr.length - 1].transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1))
        this.shoesArr[this.shoesArr.length - 2].transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1))
        pos1.z -= 0.2
        pos2.z -= 0.2
        this.shoesArr[this.shoesArr.length - 1].transform.position = pos1
        this.shoesArr[this.shoesArr.length - 2].transform.position = pos2
        this.shoesArr.pop()
        this.shoesArr.pop()
        this.pauseFixY = true
        Laya.timer.clear(this, this.resetPauseFixY)
        Laya.timer.once(time, this, this.resetPauseFixY)

        this.preObs = preObs
        WxApi.DoVibrate()
    }

    resetPauseFixY() {
        this.pauseFixY = false
    }

    pauseFixY: boolean = false
    lerpPosY() {
        let y = Math.floor(this.shoesArr.length / 2)
        let pos = this.getMyLocalPos()
        let desPos = this.getMyLocalPos()
        desPos.y = y
        Laya.Vector3.lerp(pos, desPos, 0.1, pos)
        this.myOwner.transform.localPosition = pos
    }
    fixPosY() {
        let y = Math.floor(this.shoesArr.length / 2)
        let desPos = this.getMyLocalPos()
        desPos.y = y
        //this.myOwner.transform.localPosition = desPos
        Utility.TmoveToY(this.myOwner, 200, desPos, () => { })
    }

    slideCB() {
        this.playAnimation(AniState.ANI_APPLAUD)
        let pos = this.myOwner.transform.localPosition.clone()
        pos.y = 0.1
        Utility.TmoveToY(this.myOwner, 300, pos, () => {
            pos = this.myOwner.transform.localPosition.clone()
            pos.y = pos.y > 0.5 ? 0.5 : 0.1
            Utility.TmoveToY(this.myOwner, 100, pos, () => {
                pos = this.myOwner.transform.localPosition.clone()
                pos.y = 0.1
                Utility.TmoveToY(this.myOwner, 100, pos, null)
            })
        })
        this.isSliding = true
        this.speed = 0.1
    }

    randomAngle: number = 0.25
    boardCB() {
        this.speed = 0.025;
        (this.myOwner.getComponent(MoveComponent) as MoveComponent).isRotate = true
        this.isBoarding = true;
        this.playAnimation(AniState.ANI_WALK1, 2);
        this.randomAngle = Math.random() * 1 < 0.5 ? this.randomAngle : -this.randomAngle
        Laya.timer.frameLoop(1, this, this.randomRotate)
    }
    randomRotate() {
        let a = this.myOwner.transform.localRotationEuler.clone()

        if (Math.abs(a.z) >= 30) {
            this.diedCB(true)
            Laya.timer.clear(this, this.randomRotate)
            return
        }

        a.z += this.randomAngle
        this.myOwner.transform.localRotationEuler = a
        let rPos = Utility.RotateWithPoint(this.myOwner, new Laya.Vector3(0, 0, 1), this.randomAngle)
        this.myOwner.transform.localPosition = rPos
    }

    resetIdle(node: Laya.Sprite3D) {
        this.isSliding = false
        if (this.isBoarding) {
            Laya.timer.clear(this, this.randomRotate);
            this.isBoarding = false;
            (this.myOwner.getComponent(MoveComponent) as MoveComponent).isRotate = false;
        }
        this.speed = 0.06;
        this.myOwner.transform.localRotationEuler = new Laya.Vector3()

        let pos = GameLogic.Share._player.transform.position.clone()
        node.addChild(GameLogic.Share._player)
        GameLogic.Share._player.transform.position = pos

        this.playAnimation(AniState.ANI_WALK, 2)
    }

    diedCB(isFall: boolean = false) {
        if (this.myOwner.getComponent(MoveComponent)) {
            this.myOwner.getComponent(MoveComponent).stageOff()
            //this.myOwner.getComponent(MoveComponent).destroy()
        }
        GameLogic.Share.loseCB()

        let p = this.myOwner.transform.position.clone()
        GameLogic.Share._levelNode.addChild(this.myOwner)
        this.myOwner.transform.position = p
        let r = this.myOwner.transform.localRotationEuler.clone()
        r.x = 0
        this.myOwner.transform.localRotationEuler = r

        if (isFall) {
            this.playAnimation(AniState.ANI_DIE, 1, 0)
            let pos = this.myOwner.transform.position.clone()
            pos.y -= 20
            Utility.TmoveToY(this.myOwner, 3000, pos, () => { })

            pos = this.myOwner.transform.position.clone()
            pos.z += 1
            this.myOwner.transform.position = pos

        } else {
            this.playAnimation(AniState.ANI_DIE)
            let pos = this.myOwner.transform.position.clone()
            pos.y = 0
            Utility.TmoveToY(this.myOwner, 1000, pos, () => { })
        }
    }

    onUpdate() {
        if (!GameLogic.Share.isStartGame || GameLogic.Share.isGameOver || GameLogic.Share.isPause || this.isCrowed) return

        if (!this.pauseFixY && !this.isSliding && !this.stopLerpPosY) {
            this.lerpPosY()
        }

        // if (this.myOwner.transform.position.z >= GameLogic.Share.totalDistance) {
        //     GameLogic.Share.winCB()
        //     return
        // }

        let s = this.speed
        s = s / (this.myOwner.parent as Laya.Sprite3D).transform.localScaleZ
        this.myOwner.transform.translate(new Laya.Vector3(0, 0, s), true);
    }

    //切换皮肤
    changeSkin(id: number, isShared: boolean = true) {
        Laya.Texture2D.load('res/skinRes/Hero' + (id + 1) + '.jpg', Laya.Handler.create(this, (tex) => {
            if (!isShared)
                (this.myOwner.getChildAt(1) as any).skinnedMeshRenderer.sharedMaterial.albedoTexture = tex;
            else
                (this.myOwner.getChildAt(1) as any).skinnedMeshRenderer.material.albedoTexture = tex;
        }));
        this.initHair(id)
        this.initClothes(id)
    }

    initShoes(id: number, isShared: boolean = true) {
        let v1: number = Math.floor(id / 5) + 1
        let v2: number = Math.floor(id % 5) + 1
        for (let i = 0; i < this.myOwner.numChildren; i++) {
            let n = this.myOwner.getChildAt(i) as Laya.Sprite3D
            if (n.name.search('Shoes') != -1 && n.name != 'Shoes_C' && n.name != 'Shoes_L') {
                n.active = false
            }
        }
        this.myOwner.getChildByName('Shoes' + v1 + '_0' + v2 + '_D').active = true
        Laya.Texture2D.load('res/shoesRes/Shoes' + (id + 1) + '.jpg', Laya.Handler.create(this, (tex) => {
            if (isShared)
                (this.myOwner.getChildByName('Shoes' + v1 + '_0' + v2 + '_D') as any).skinnedMeshRenderer.sharedMaterial.albedoTexture = tex;
            else
                (this.myOwner.getChildByName('Shoes' + v1 + '_0' + v2 + '_D') as any).skinnedMeshRenderer.material.albedoTexture = tex;
        }));
    }

    initHair(id: number) {
        let v1: number = Math.floor(id / 5) + 1
        let v2: number = Math.floor(id % 5) + 1
        for (let i = 0; i < this.myOwner.numChildren; i++) {
            let n = this.myOwner.getChildAt(i) as Laya.Sprite3D
            if (n.name.search('Hair') != -1) {
                n.active = false
            }
        }
        if (this.myOwner.getChildByName('Hair' + v1 + '_0' + v2)) {
            this.myOwner.getChildByName('Hair' + v1 + '_0' + v2).active = true
        }
    }

    initClothes(id: number) {
        let v1: number = Math.floor(id / 5) + 1
        let v2: number = Math.floor(id % 5) + 1
        for (let i = 0; i < this.myOwner.numChildren; i++) {
            let n = this.myOwner.getChildAt(i) as Laya.Sprite3D
            if (n.name.search('Clothes') != -1) {
                n.active = false
            }
        }
        if (this.myOwner.getChildByName('Clothes' + v1 + '_0' + v2)) {
            this.myOwner.getChildByName('Clothes' + v1 + '_0' + v2).active = true
        }
    }

    activeAcc(id: number) {
        this.hatNode.destroyChildren()
        this.backNode.destroyChildren()
        this.handNode.destroyChildren()
        if (id == -1) return

        let res = Laya.loader.getRes(WxApi.UnityPath + 'AccNode.lh') as Laya.Sprite3D
        let acc = res.getChildAt(id) as Laya.Sprite3D
        let root = this.hatNode
        if (id == 4 || id == 5 || id == 6 || id == 7) root = this.backNode
        else if (id == 1 || id == 11) root = this.handNode
        let hat = Laya.Sprite3D.instantiate(acc, root, false, new Laya.Vector3(0, 0, 0))
        hat.transform.localPosition = new Laya.Vector3(0)
    }
}