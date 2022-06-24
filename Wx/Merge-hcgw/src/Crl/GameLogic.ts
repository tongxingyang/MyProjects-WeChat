import PlayerDataMgr, { ItemId } from "../Libs/PlayerDataMgr"
import WxApi from "../Libs/WxApi"
import CameraCrl from "./CameraCrl"
import FdMgr from "../FanDong/FdMgr"
import Utility from "../Mod/Utility"
import MergeSprite from "./MergeSprite"
import Monster from "./Monster"
import Effects from "./Effects"
import SoundMgr from "../Mod/SoundMgr"

export default class GameLogic {
    public static Share: GameLogic

    public _scene: Laya.Scene3D
    public _camera: Laya.Camera
    public _light: Laya.DirectionLight

    public camStartPos: Laya.Vector3 = new Laya.Vector3(0, 0, 0)
    private camStartRotation: Laya.Quaternion = null
    public _cameraCrl: CameraCrl = null
    public startCamField: number = 60

    public isStartGame: boolean = false
    public isGameOver: boolean = false
    public isWin: boolean = false
    public isPause: boolean = false
    public isFinish: boolean = false

    public _levelNode: Laya.Sprite3D = null
    public _tempItemNode: Laya.Sprite3D = null
    public _playerNode: Laya.Sprite3D = null
    public _enemyNode: Laya.Sprite3D = null
    public _effectNode: Laya.Sprite3D = null

    constructor() {
        if (!Laya.Browser.onWeiXin)
            localStorage.clear()
        GameLogic.Share = this
        PlayerDataMgr.getPlayerData()

        if (Laya.Browser.onWeiXin) {
            Laya.Browser.window.wx.showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            });
            Laya.Browser.window.wx.onShareAppMessage(() => {
                return {
                    title: '融合怪物',
                    imageUrl: '' // 图片 URL
                }
            })
        }

        Laya.Scene.open('MyScenes/LoadingUI.scene')
    }

    initScene() {
        Laya.Scene3D.load(WxApi.UnityPath + 'SampleScene.ls', Laya.Handler.create(this, this.onLoadScene));
    }
    onLoadScene(scene) {
        Laya.Scene.open('MyScenes/StartUI.scene')

        this._scene = Laya.stage.addChild(scene) as Laya.Scene3D
        Laya.stage.setChildIndex(this._scene, 0)
        this._camera = this._scene.getChildByName('Main Camera') as Laya.Camera
        this._light = this._scene.getChildByName('Directional Light') as Laya.DirectionLight
        // Use soft shadow.
        this._light.shadowMode = Laya.ShadowMode.SoftHigh;
        // Set shadow max distance from camera.
        this._light.shadowDistance = 25;
        // Set shadow resolution.
        this._light.shadowResolution = 1024;
        // Set shadow cascade mode.
        this._light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
        // Set shadow normal bias.
        this._light.shadowNormalBias = 0;

        // //雾化代码
        // this._scene.enableFog = true;
        // //设置雾化的颜色
        // this._scene.fogColor = new Laya.Vector3(0, 0.8, 0);
        // //设置雾化的起始位置，相对于相机的距离
        // this._scene.fogStart = 10;
        // //设置雾化最浓处的距离。
        // this._scene.fogRange = 60;

        this.camStartPos = this._camera.transform.position.clone()
        this.camStartRotation = this._camera.transform.rotation.clone()
        this._camera.fieldOfView = this.startCamField
        this._cameraCrl = this._camera.addComponent(CameraCrl)

        this._levelNode = this._scene.addChild(new Laya.Sprite3D()) as Laya.Sprite3D

        this.createLevel()
    }

    gameStart() {
        SoundMgr.instance.stopMusic()
        SoundMgr.instance.playSoundEffect('warning')
        this.isStartGame = true
        this._scene.getChildByName('Scene_Ground1').active = false
        this._scene.getChildByName('Scene_Ground2').active = true
        this._scene.getChildByName('Scene_1').active = true
        this._scene.getChildByName('Object_01').active = false
        this._scene.getChildByName('Back_01').active = false
        this._scene.getChildByName('Chashka_01').active = false
        this._tempItemNode.destroyChildren()
        this.createMyMonster()
        this.createEnemyMonster()
        Laya.Scene.open('MyScenes/GameUI.scene')
        this._cameraCrl.gameStart()
        Laya.timer.frameLoop(1, this, this.checkGameOver);
        (this._scene.getChildByName('Object_01') as Laya.Sprite3D).transform.position = new Laya.Vector3(0, 0, 0)
    }

    createLevel() {
        this._effectNode = Utility.getSprite3DResByUrl('EffectNode.lh', this._levelNode)
        this._effectNode.active = false
        this._tempItemNode = this._levelNode.addChild(new Laya.Sprite3D()) as Laya.Sprite3D
        this._playerNode = this._levelNode.addChild(new Laya.Sprite3D()) as Laya.Sprite3D
        this._enemyNode = this._levelNode.addChild(new Laya.Sprite3D()) as Laya.Sprite3D
        this._scene.getChildByName('Scene_Ground1').active = true
        this._scene.getChildByName('Scene_Ground2').active = false
        this._scene.getChildByName('Scene_1').active = false
        this._scene.getChildByName('Object_01').active = false
        this._scene.getChildByName('Back_01').active = true
        this._scene.getChildByName('Chashka_01').active = true
        Laya.timer.frameLoop(1, this, () => {
            (this._scene.getChildByName('Chashka_01').getChildAt(0) as Laya.Sprite3D).transform.rotate(new Laya.Vector3(0, -2, 0), true, false)
        })
    }

    createMonster(bodyId: number, handId: number, backId: number): Laya.Sprite3D {
        let bodyDir: string = 'Body_' + (bodyId + 1) + '.lh'
        let handDir: string = 'Hand_' + (handId + 1) + '_L.lh'
        let backDir: string = 'Hand_' + (backId + 1) + '_L.lh'

        let body = Utility.getSprite3DResByUrl(bodyDir, this._levelNode, false)
        body.transform.position = new Laya.Vector3(0, 3, 0)
        let armL: Laya.Sprite3D = Utility.findNodeByName(body, 'ArmNodeL')
        let l = Utility.getSprite3DResByUrl(handDir, armL, false)
        l.transform.localScale = new Laya.Vector3(1, 1, 1)
        l.transform.position = armL.transform.position.clone()
        l.transform.rotationEuler = armL.transform.rotationEuler.clone()

        let armR: Laya.Sprite3D = Utility.findNodeByName(body, 'ArmNodeR')
        let r = Utility.getSprite3DResByUrl(handDir, armR, false)
        r.transform.localScale = new Laya.Vector3(-1, 1, 1)
        r.transform.position = armR.transform.position.clone()
        r.transform.rotationEuler = armR.transform.rotationEuler.clone()

        if (backId == 5) {
            let wingL: Laya.Sprite3D = Utility.findNodeByName(body, 'WingL')
            let wl = Utility.getSprite3DResByUrl(backDir, wingL, false)
            //wl.transform.localScale = new Laya.Vector3(1.5, 1.5, 1.5)
            wl.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1))
            wl.transform.position = wingL.transform.position.clone()
            wl.transform.rotationEuler = wingL.transform.rotationEuler.clone()

            let wingR: Laya.Sprite3D = Utility.findNodeByName(body, 'WingR')
            let wr = Utility.getSprite3DResByUrl(backDir, wingR, false)
            //wr.transform.localScale = new Laya.Vector3(1.5, 1.5, 1.5)
            wr.transform.setWorldLossyScale(new Laya.Vector3(-1, 1, 1))
            wr.transform.position = wingR.transform.position.clone()
            wr.transform.rotationEuler = wingR.transform.rotationEuler.clone()
        } else {
            let back: Laya.Sprite3D = Utility.findNodeByName(body, 'Back')
            let h = Utility.getSprite3DResByUrl(backDir, back, false)
            //h.transform.localScale = new Laya.Vector3(1, 1, 1)
            h.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1))
            let p = back.transform.position.clone()
            //p.x += 0.2
            h.transform.position = p
            h.transform.rotationEuler = back.transform.rotationEuler.clone()
        }

        return body
    }

    createUIBody(bodyId: number) {
        let bodyDir: string = 'Body_' + (bodyId + 1) + '.lh'

        let body = Utility.getSprite3DResByUrl(bodyDir, this._tempItemNode, false)
        body.transform.position = new Laya.Vector3(0, 0, -5)
        let desPos = new Laya.Vector3(0, 0.4, Math.random() * 1 + 0.5)
        let pArr = Utility.BezierPoints(new Laya.Vector3(2, 0, -5), new Laya.Vector3(0, 4, -2.5), desPos, 30)
        let crl: MergeSprite = body.addComponent(MergeSprite)
        crl.init(pArr)
    }
    createUIItem(handId: number) {
        let handDir: string = 'Hand_' + (handId + 1) + '_L.lh'

        let r = Utility.getSprite3DResByUrl(handDir, this._tempItemNode, false)
        r.transform.position = new Laya.Vector3(0, 0, -5)
        let desPos = new Laya.Vector3(0, 1, Math.random() * 1 + 0.5)
        let pArr = Utility.BezierPoints(new Laya.Vector3(2, 0, -5), new Laya.Vector3(0, 4, -2.5), desPos, 30)
        let crl: MergeSprite = r.addComponent(MergeSprite)
        crl.init(pArr)
    }

    combineBody(bodyId: number, handId: number, backId: number) {
        this._tempItemNode.destroyChildren()

        // let r = this._camera.transform.rotationEuler.clone()
        // r.x += 15
        // Utility.RotateTo(this._camera, 800, r, null)

        this._scene.getChildByName('Chashka_01').active = false
        this._scene.getChildByName('Object_01').active = true;
        (this._scene.getChildByName('Object_01').getComponent(Laya.Animator) as Laya.Animator).play('start');
        Laya.timer.once(400, this, () => {
            (this._scene.getChildByName('Object_01').getComponent(Laya.Animator) as Laya.Animator).play('idle');

            let body = this.createMonster(bodyId, handId, backId)
            this._tempItemNode.addChild(body)
            body.transform.rotate(new Laya.Vector3(0, 180, 0), false, false)
            body.transform.position = new Laya.Vector3(0, 3.7, 0)
            body.transform.setWorldLossyScale(new Laya.Vector3(2, 2, 2));

            let p1 = (this._scene.getChildByName('Object_01') as Laya.Sprite3D).transform.position.clone()
            let p2 = p1.clone()
            p2.y += 0.2
            Utility.upDownTween(this._scene.getChildByName('Object_01') as Laya.Sprite3D, p1, p2)

            p1 = body.transform.position.clone()
            p2 = p1.clone()
            p2.y += 0.2
            Utility.upDownTween(body, p1, p2)
        })
    }

    createMyMonster() {
        let count = PlayerDataMgr.getPlayerData().chooseArr.length
        for (let i = 0; i < count; i++) {
            let item = PlayerDataMgr.getPlayerData().chooseArr[i]
            let monster = this.createMonster(item.bodyId, item.handId, item.backId)
            this._playerNode.addChild(monster)
            let x = 0
            if (i == 1) x = -2
            if (i == 2) x = 2
            monster.transform.position = new Laya.Vector3(x, 0, 0)
            let crl: Monster = monster.addComponent(Monster)
            crl.init(true, item)
        }
    }

    createEnemyMonster() {
        let count = PlayerDataMgr.getPlayerData().chooseArr.length
        for (let i = 0; i < count; i++) {
            let item = new ItemId()
            item.bodyId = Utility.GetRandom(0, 7)
            item.handId = Utility.GetRandom(0, 13)
            item.backId = Utility.GetRandom(0, 13)
            item.type = Utility.GetRandom(1, 5)
            let monster = this.createMonster(item.bodyId, item.handId, item.backId)
            this._enemyNode.addChild(monster)
            let x = 0
            if (i == 1) x = -2
            if (i == 2) x = 2
            monster.transform.position = new Laya.Vector3(x, 0, 15)
            monster.transform.rotate(new Laya.Vector3(0, 180, 0), false, false)
            let crl: Monster = monster.addComponent(Monster)
            crl.init(false, item)
        }
    }

    checkGameOver() {
        if (!this.isStartGame || this.isGameOver) return
        let isLose = true
        for (let i = 0; i < this._playerNode.numChildren; i++) {
            let crl = this._playerNode.getChildAt(i).getComponent(Monster) as Monster
            if (!crl.isDied) { isLose = false; break }
        }
        let isWin = true
        for (let i = 0; i < this._enemyNode.numChildren; i++) {
            let crl = this._enemyNode.getChildAt(i).getComponent(Monster) as Monster
            if (!crl.isDied) { isWin = false; break }
        }
        if (isLose) {
            this.gameOver(false)
        }
        if (isWin) {
            this.gameOver(true)
        }
    }

    gameOver(isWin: boolean) {
        Laya.timer.clearAll(this)
        WxApi.DoVibrate(false)
        if (isWin) {
            SoundMgr.instance.playSoundEffect('win')
            SoundMgr.instance.playSoundEffect('fireWork')
            Effects.createFireWork()
        } else {
            SoundMgr.instance.playSoundEffect('lose')
        }
        this.isWin = isWin
        this.isGameOver = true
        this.isStartGame = false
        Laya.Scene.close('MyScenes/GameUI.scene')
        Laya.timer.once(2000, this, () => {
            FdMgr.showGameOver(() => {
                Laya.Scene.open('MyScenes/FinishUI.scene')
            })
        })
    }

    restartGame() {
        this.isStartGame = false
        this.isGameOver = false
        this.isWin = false
        this.isPause = false
        this._camera.fieldOfView = this.startCamField
        this.isFinish = false

        this._camera.transform.position = this.camStartPos
        this._camera.transform.rotation = this.camStartRotation

        this._levelNode.destroyChildren()
        this.createLevel()
    }
}