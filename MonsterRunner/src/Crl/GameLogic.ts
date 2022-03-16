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

    public _levelNode: Laya.Sprite3D = null
    public _player: Laya.Sprite3D = null
    public _playerCrl: PlayerCrl = null
    public _standNode: Laya.Sprite3D = null

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
                    title: '怪物实验室',
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
        this._light.shadowDistance = 10;
        // Set shadow resolution.
        this._light.shadowResolution = 1024;
        // Set shadow cascade mode.
        this._light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
        // Set shadow normal bias.
        this._light.shadowNormalBias = 0;

        //this.fixCameraField()

        this.camStartPos = this._camera.transform.position.clone()
        this.camStartRotation = this._camera.transform.rotation.clone()
        this._camera.fieldOfView = this.startCamField
        this._cameraCrl = this._camera.addComponent(CameraCrl)

        this._levelNode = this._scene.addChild(new Laya.Sprite3D()) as Laya.Sprite3D

        this.createLevel()
    }

    gameStart() {
        this.isStartGame = true
        this._standNode.getChildAt(0).active = false
        this._standNode.getChildAt(1).active = true;
        (this._standNode.getChildAt(1).getComponent(Laya.Animator) as Laya.Animator).speed = 1;
    }

    createLevel() {
        let g: number = 1
        let dataArr: any[] = PlayerDataMgr.levelDataArr[g - 1]
        for (let i = 0; i < dataArr.length; i++) {
            let data: any = dataArr[i]
            let name: string = data.name
            let pos: Laya.Vector3 = new Laya.Vector3(Number(data.position.x), Number(data.position.y), Number(data.position.z))
            let rotate: Laya.Vector3 = new Laya.Vector3(Number(data.rotation.x), Number(data.rotation.y), Number(data.rotation.z))
            let scale: Laya.Vector3 = new Laya.Vector3(Number(data.scale.x), Number(data.scale.y), Number(data.scale.z))
            this.createItem(name, pos, rotate, scale)
        }
    }
    createItem(name: string, pos: Laya.Vector3, rot: Laya.Vector3, scale: Laya.Vector3) {
        if (name.search('SelectNode') != -1) {
            name = name.slice(0, name.length - 1)
        }
        let sp: Laya.Sprite3D = Utility.getSprite3DResByUrl(name + '.lh', this._levelNode, false)
        sp.transform.position = pos
        sp.transform.rotationEuler = rot
        sp.transform.setWorldLossyScale(scale)
        if (name.search('Player') != -1) {
            this._player = sp
            this._playerCrl = sp.addComponent(PlayerCrl)
        } else if (name.search('Stand') != -1) {
            this._standNode = sp
        }
    }

    gameOver(isWin: boolean) {
        Laya.timer.clearAll(this)
        WxApi.DoVibrate(false)
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
    }
}