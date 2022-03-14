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

    gameStart() {
        Laya.Scene.open('MyScenes/GameUI.scene')
    }

    gameOver(isWin: boolean) {
        Laya.timer.clearAll(this)
        WxApi.DoVibrate(false)
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