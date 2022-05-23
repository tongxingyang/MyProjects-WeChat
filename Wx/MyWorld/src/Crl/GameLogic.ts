import PlayerDataMgr from "../Libs/PlayerDataMgr"
import WxApi from "../Libs/WxApi"
import SoundMgr from "../Mod/SoundMgr"
import CameraCrl from "./CameraCrl"
import PlayerCrl from "./PlayerCrl"
import FdMgr from "../FanDong/FdMgr"
import Enemy from "./Enemy"
import Utility from "../Mod/Utility"

export default class GameLogic {
    public static Share: GameLogic

    public _scene: Laya.Scene3D
    public _camera: Laya.Camera
    public _light: Laya.DirectionLight

    public camStartPos: Laya.Vector3 = new Laya.Vector3(0, 0, 0)
    public camStartRotation: Laya.Quaternion = null
    public _cameraCrl: CameraCrl = null
    public startCamField: number = 60

    public isStartGame: boolean = false
    public isGameOver: boolean = false
    public isWin: boolean = false
    public isPause: boolean = true
    public isFinish: boolean = false
    public isSelectingSkin: boolean = false

    public _levelNode: Laya.Sprite3D = null
    public _enemyNode: Laya.Sprite3D = null
    public _player: Laya.Sprite3D = null
    public _playerCrl: PlayerCrl = null
    public _cubeArr1: Laya.Sprite3D[] = []
    public _cubeArr2: Laya.Sprite3D[] = []

    public _sceneId: number = 1
    public _enemyCount: number = 15
    public _curEnemyCount: number = 15

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
                    title: '世界大逃杀',
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
        this._light.shadowDistance = 30;
        // Set shadow resolution.
        this._light.shadowResolution = 1024;
        // Set shadow cascade mode.
        this._light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;

        //this.fixCameraField()

        this.camStartPos = this._camera.transform.position.clone()
        this.camStartRotation = this._camera.transform.rotation.clone()
        this._camera.fieldOfView = this.startCamField
        this._cameraCrl = this._camera.addComponent(CameraCrl)

        let cubeNode = this._scene.getChildByName('Scene_1').getChildByName('CubeNode')
        for (let i = 0; i < cubeNode.numChildren; i++) {
            this._cubeArr1.push(cubeNode.getChildAt(i) as Laya.Sprite3D)
        }
        let cubeNode1 = this._scene.getChildByName('Scene_2').getChildByName('CubeNode')
        for (let i = 0; i < cubeNode1.numChildren; i++) {
            this._cubeArr2.push(cubeNode1.getChildAt(i) as Laya.Sprite3D)
        }

        this._levelNode = this._scene.addChild(new Laya.Sprite3D()) as Laya.Sprite3D

        this.createLevel()
    }

    gameStart() {
        GameLogic.Share.isPause = false
        this._light.shadowDistance = 100;
        this._playerCrl.gameStart()
        this.enemyStart()
    }
    enemyStart() {
        for (let i = 0; i < this._enemyNode.numChildren; i++) {
            let enemy: Laya.Sprite3D = this._enemyNode.getChildAt(i) as Laya.Sprite3D
            let crl: Enemy = enemy.getComponent(Enemy)
            crl.gameStart()
        }
    }
    enemyHunt() {
        for (let i = 0; i < this._enemyNode.numChildren; i++) {
            let enemy: Laya.Sprite3D = this._enemyNode.getChildAt(i) as Laya.Sprite3D
            let crl: Enemy = enemy.getComponent(Enemy)
            crl.hunt()
        }
    }

    createLevel() {
        this._enemyNode = this._levelNode.addChild(new Laya.Sprite3D()) as Laya.Sprite3D
        this._sceneId = Math.random() > 0.5 ? 1 : 2
        this._scene.getChildByName('Scene_1').active = false
        this._scene.getChildByName('Scene_2').active = false
        this._scene.getChildByName('Scene_' + this._sceneId).active = true
        if (!FdMgr.isVersionValid) {
            let ms = this._scene.getChildByName('Scene_1').getChildAt(1) as Laya.MeshSprite3D
            let ms1 = this._scene.getChildByName('Scene_2').getChildAt(1) as Laya.MeshSprite3D
            Laya.Texture2D.load('res/Texture/Man_9.png', Laya.Handler.create(this, (texture) => {
                (ms.meshRenderer.sharedMaterial as Laya.BlinnPhongMaterial).albedoTexture = texture;
                (ms1.meshRenderer.sharedMaterial as Laya.BlinnPhongMaterial).albedoTexture = texture;
            }));
        }

        this.createPlayer()
        this.createEnemy()
    }

    createPlayer() {
        let res = this._scene.getChildByName('Model') as Laya.Sprite3D
        this._player = Laya.Sprite3D.instantiate(res, this._levelNode, false, new Laya.Vector3(0, 0, 0))
        this._player.active = true
        this._player.transform.position = new Laya.Vector3()
        this._player.transform.localRotationEuler = new Laya.Vector3(0, 180, 0)
        this._playerCrl = this._player.addComponent(PlayerCrl)

        let g: number = PlayerDataMgr.getPlayerData().grade
        g = Math.floor((g - 1) % 5)
        this._playerCrl.initData(g, PlayerDataMgr.getPlayerData().skinId)
    }

    createEnemy() {
        if (PlayerDataMgr.getPlayerData().grade == 1) {
            this._enemyCount = 3
            this._curEnemyCount = 3
            for (let i = 0; i < 3; i++) {
                let pos: Laya.Vector3 = new Laya.Vector3()
                if (i == 0) pos = new Laya.Vector3(0, 0, 7)
                if (i == 1) pos = new Laya.Vector3(7, 0, 7)
                if (i == 2) pos = new Laya.Vector3(7, 0, 0)
                let res = this._scene.getChildByName('Model') as Laya.Sprite3D
                let enemy = Laya.Sprite3D.instantiate(res, this._enemyNode, false, new Laya.Vector3(0, 0, 0))
                enemy.active = true
                enemy.transform.position = pos
                enemy.transform.localRotationEuler = new Laya.Vector3(0, 180, 0)
                let crl: Enemy = enemy.addComponent(Enemy)
                crl.initData(Utility.GetRandom(0, 10))
            }
        } else {
            let enemyNode: Laya.Sprite3D = this._scene.getChildByName('Scene_' + this._sceneId).getChildByName('EnemyNode') as Laya.Sprite3D
            this._enemyCount = enemyNode.numChildren
            if (PlayerDataMgr.getPlayerData().grade == 2) this._enemyCount = 6
            if (PlayerDataMgr.getPlayerData().grade == 3) this._enemyCount = 10
            this._curEnemyCount = this._enemyCount
            for (let i = 0; i < this._enemyCount; i++) {
                let node: Laya.Sprite3D = enemyNode.getChildAt(i) as Laya.Sprite3D
                let pos: Laya.Vector3 = node.transform.position.clone()
                let res = this._scene.getChildByName('Model') as Laya.Sprite3D
                let enemy = Laya.Sprite3D.instantiate(res, this._enemyNode, false, new Laya.Vector3(0, 0, 0))
                enemy.active = true
                enemy.transform.position = pos
                enemy.transform.localRotationEuler = new Laya.Vector3(0, 180, 0)
                let crl: Enemy = enemy.addComponent(Enemy)
                crl.initData(Utility.GetRandom(0, 10))
            }
        }
    }

    createHitFX(node: Laya.Sprite3D) {
        let res = this._scene.getChildByName('FXNode').getChildByName('Blood_Hit1') as Laya.Sprite3D
        let fx: Laya.Sprite3D = Laya.Sprite3D.instantiate(res, this._levelNode, false, new Laya.Vector3(0, 0, 0))
        let pos = node.transform.position.clone()
        pos.y = node.transform.getWorldLossyScale().y / 2
        fx.transform.setWorldLossyScale(new Laya.Vector3(2, 2, 2))
        fx.transform.position = pos
        fx.active = true
        Laya.timer.once(1000, this, () => { fx.destroy() })
    }

    createBoomFX(node: Laya.Sprite3D) {
        let res = this._scene.getChildByName('FXNode').getChildByName('Smoke_Bomb') as Laya.Sprite3D
        let fx: Laya.Sprite3D = Laya.Sprite3D.instantiate(res, this._levelNode, false, new Laya.Vector3(0, 0, 0))
        let pos = node.transform.position.clone()
        pos.y = node.transform.getWorldLossyScale().y / 2
        let s = node.transform.getWorldLossyScale().clone()
        fx.transform.setWorldLossyScale(new Laya.Vector3(s.x + 1, s.y + 1, s.z + 1))
        fx.transform.position = pos
        fx.active = true
        Laya.timer.once(800, this, () => { fx.destroy() })
    }

    createWinFX() {
        let res = this._scene.getChildByName('FXNode').getChildByName('WinFX') as Laya.Sprite3D
        let fx: Laya.Sprite3D = Laya.Sprite3D.instantiate(res, this._levelNode, false, new Laya.Vector3(0, 0, 0))
        let pos = this._player.transform.position.clone()
        pos.z += 2
        fx.transform.position = pos
        fx.active = true
    }

    gameOver(isWin: boolean) {
        if (this.isGameOver) return
        //Laya.timer.clearAll(this)
        SoundMgr.instance.stopMusic()
        if (isWin) {
            this._playerCrl.winCB()
            this.createWinFX()
            Laya.timer.once(500, this, () => {
                this.isWin = isWin
            })
            SoundMgr.instance.playSoundEffect('Win.mp3')
        } else {
            this.isWin = isWin
            SoundMgr.instance.playSoundEffect('Lose.mp3')
        }
        WxApi.DoVibrate(false)
        this.isGameOver = true
        this.isStartGame = false
        this.isPause = true
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
        this.isPause = true
        this._camera.fieldOfView = this.startCamField
        this.isFinish = false

        this._light.shadowDistance = 30;
        this._camera.transform.position = this.camStartPos
        this._camera.transform.rotation = this.camStartRotation

        this._levelNode.destroyChildren()
        this.createLevel()
    }
}