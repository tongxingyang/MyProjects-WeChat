import PlayerDataMgr from "../Libs/PlayerDataMgr"
import WxApi from "../Libs/WxApi"
import SoundMgr from "../Mod/SoundMgr"
import Utility from "../Mod/Utility"
import CameraCrl from "./CameraCrl"
import PlayerCrl from "./PlayerCrl"
import FdMgr from "../FanDong/FdMgr"

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
    public isMeet: boolean = false

    public _levelNode: Laya.Sprite3D = null
    public _player: Laya.Sprite3D = null
    public _playerCrl: PlayerCrl = null
    public _enemy: Laya.Sprite3D = null
    public _enemyCrl: PlayerCrl = null

    playerHp: number = 10
    playerPower: number = 10
    enemyHp: number = 10
    enemyPower: number = 10

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
                    title: '怪物对决',
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
        this._light.shadowMode = Laya.ShadowMode.SoftLow;
        // Set shadow max distance from camera.
        this._light.shadowDistance = 100;
        // Set shadow resolution.
        this._light.shadowResolution = 1024;
        // Set shadow cascade mode.
        this._light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;

        //this.fixCameraField()

        this.camStartPos = this._camera.transform.position.clone()
        this.camStartRotation = this._camera.transform.rotation.clone()
        this._camera.fieldOfView = this.startCamField
        this._cameraCrl = this._camera.addComponent(CameraCrl)

        this._levelNode = this._scene.addChild(new Laya.Sprite3D()) as Laya.Sprite3D
    }

    gameStart(bodyNode: Laya.Sprite3D, hp: number, power: number) {
        this._player = Laya.Sprite3D.instantiate(bodyNode, this._levelNode, false)
        this._player.transform.position = new Laya.Vector3(10, 1, 0)
        this._playerCrl = this._player.addComponent(PlayerCrl)
        this._playerCrl.initData(hp, power, true)

        this.createEnemy()
        Laya.timer.frameLoop(1, this, this.checkColl)
        Laya.Scene.open('MyScenes/GameUI.scene')
    }

    createEnemy() {
        let bodyNode: Laya.Sprite3D = GameLogic.Share._scene.getChildByName('BodyNode') as Laya.Sprite3D
        let bodyRes = bodyNode.getChildAt(Utility.GetRandom(0, 5)) as Laya.Sprite3D
        this._enemy = Laya.Sprite3D.instantiate(bodyRes, this._levelNode, false, new Laya.Vector3(0, 0, 0))
        this._enemy.transform.position = new Laya.Vector3(-10, 1, 0)
        this._enemyCrl = this._enemy.addComponent(PlayerCrl)
        this._enemyCrl.moveDir = 1
        this._enemy.active = true
        this._enemy.transform.rotate(new Laya.Vector3(0, 180, 0), true, false)

        for (let i = 0; i < 5; i++) {
            this.createEnemyItems(i)
        }
        let h1 = 10
        let h2 = Utility.GetRandom(10, 30)
        this._enemyCrl.initData(PlayerDataMgr.getPlayerData().grade >= 3 ? h2 : h1, Utility.GetRandom(1, 10))
    }
    createEnemyItems(type: number) {
        let index = 0
        let itemNode: Laya.Sprite3D = null
        let itemRes: Laya.Sprite3D = null
        let root: Laya.Sprite3D = null
        let itemArrName: string[] = ['HeadNode', 'LegNode', 'TailNode', 'WingsNode']
        if (type == 0) {
            root = this._enemy.getChildByName('HeadNode') as Laya.Sprite3D
        } else if (type == 1) {
            root = this._enemy.getChildByName('WingNode') as Laya.Sprite3D
        } else if (type == 2) {
            root = this._enemy.getChildByName('TailNode') as Laya.Sprite3D
        } else if (type == 3) {
            root = this._enemy.getChildByName('FLegNode') as Laya.Sprite3D
        } else if (type == 4) {
            root = this._enemy.getChildByName('BLegNode') as Laya.Sprite3D
        }
        itemNode = this._scene.getChildByName(Utility.getRandomItemInArr(itemArrName)) as Laya.Sprite3D
        index = Utility.GetRandom(0, itemNode.numChildren - 1)
        itemRes = itemNode.getChildAt(index) as Laya.Sprite3D
        let item = Laya.Sprite3D.instantiate(itemRes, root, false, new Laya.Vector3(0, 0, 0))
        item.transform.localPosition = new Laya.Vector3()
        item.transform.localRotationEuler = new Laya.Vector3()
        item.active = true
    }

    checkColl() {
        if (this.isGameOver || !this._player || !this._enemy || !this._playerCrl.canMove || !this._enemyCrl.canMove || !this.isStartGame) return
        let playerX = this._player.transform.position.x
        let enemyX = this._enemy.transform.position.x
        if (Math.abs(playerX - enemyX) <= 4) {
            WxApi.DoVibrate()
            SoundMgr.instance.playSoundEffect('Hurt.mp3')
            let pD: number = Utility.GetRandom(2, 6)
            let eD: number = Utility.GetRandom(1, 4)
            if (PlayerDataMgr.getPlayerData().grade >= 3) {
                pD *= 1.5
                eD *= 1.5
            } else {
                eD = 1
                pD = 3
            }

            this._playerCrl.hurtCB(Math.floor(eD))
            this._enemyCrl.hurtCB(Math.floor(pD))
            this.createHitFX()
        }
        if (Math.abs(playerX - enemyX) <= 6) {
            this.isMeet = true
        }
    }

    createHitFX() {
        let fx = this._scene.getChildByName('T_Hit_1') as Laya.ShuriKenParticle3D
        let pos = new Laya.Vector3()
        pos.x = (GameLogic.Share._player.transform.position.x + GameLogic.Share._enemy.transform.position.x) / 2
        pos.y = 2.3;
        (this._scene.getChildByName('T_Hit_1') as Laya.Sprite3D).transform.position = pos;
        (this._scene.getChildByName('T_Hit_1') as Laya.Sprite3D).transform.setWorldLossyScale(new Laya.Vector3(10, 10, 10));
        this._scene.getChildByName('T_Hit_1').active = true;
        fx.particleSystem.play()
        Laya.timer.once(300, this, () => {
            (this._scene.getChildByName('T_Hit_1') as Laya.Sprite3D).transform.position = new Laya.Vector3(0, 100000, 0);
        })
    }
    createWinFX() {
        let fx = Laya.Sprite3D.instantiate((this._scene.getChildByName('T_Confetti') as Laya.Sprite3D), this._levelNode, false)

        let pos = new Laya.Vector3()
        pos.x = (GameLogic.Share._player.transform.position.x + GameLogic.Share._enemy.transform.position.x) / 2
        pos.z += 2;
        fx.transform.position = pos;
        fx.transform.setWorldLossyScale(new Laya.Vector3(3, 3, 3))
        fx.active = true;
        Laya.timer.once(3000, this, () => {
            if (fx)
                fx.destroy()
        })
    }

    gameOver(isWin: boolean) {
        Laya.timer.clearAll(this)
        WxApi.DoVibrate(false)
        if (isWin) {
            SoundMgr.instance.playSoundEffect('Win.mp3')
            this.createWinFX()
        } else {
            SoundMgr.instance.playSoundEffect('Lose.mp3')
        }
        this.isWin = isWin
        this.isGameOver = true
        this.isStartGame = false
        Laya.Scene.close('MyScenes/GameUI.scene')
        Laya.timer.once(2000, this, () => {
            FdMgr.showGameOver(()=>{
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
        this.isMeet = false

        this._camera.transform.position = this.camStartPos
        this._camera.transform.rotation = this.camStartRotation

        this._levelNode.destroyChildren()
    }
}