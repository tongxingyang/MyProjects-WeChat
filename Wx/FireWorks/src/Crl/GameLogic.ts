import PlayerDataMgr from "../Libs/PlayerDataMgr"
import WxApi from "../Libs/WxApi"
import CameraCrl from "./CameraCrl"
import FdMgr from "../FanDong/FdMgr"
import Utility from "../Mod/Utility"
import FireWork1 from "./Prop/FireWork1"
import FireWork2 from "./Prop/FireWork2"
import FireWork3 from "./Prop/FireWork3"
import FireWork4 from "./Prop/FireWork4"
import FireWork5 from "./Prop/FireWork5"
import FireWork6 from "./Prop/FireWork6"
import FireWork7 from "./Prop/FireWork7"
import FireWork8 from "./Prop/FireWork8"
import FireWork9 from "./Prop/FireWork9"
import FireWork10 from "./Prop/FireWork10"
import FireWork11 from "./Prop/FireWork11"
import FireWork12 from "./Prop/FireWork12"
import FireWork13 from "./Prop/FireWork13"

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
    public _fw: Laya.Sprite3D = null
    public _fwArr: Laya.Sprite3D[] = []
    public _fwId: number = 0

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
                    title: '梦幻夜空',
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

        this._levelNode = this._scene.addChild(new Laya.Sprite3D()) as Laya.Sprite3D
    }

    gameStart(id: number) {
        this._cameraCrl.isLookAt = true
        this._fwId = id
        if (id == 3 || id == 4 || id == 5) {
            for (let i = 0; i < 5; i++) {
                this.createFireWorkArr(id, i)
            }
        } else {
            this.createFireWork(id)
        }
    }

    startFire() {
        if (this._fwId == 0) {
            this._fw.addComponent(FireWork1)
        } else if (this._fwId == 1) {
            this._fw.addComponent(FireWork2)
        } else if (this._fwId == 2) {
            this._fw.addComponent(FireWork3)
        } else if (this._fwId == 3) {
            for (let i = 0; i < this._fwArr.length; i++) {
                let fw = this._fwArr[i]
                fw.addComponent(FireWork4)
            }
            Laya.timer.once(8000, this, () => {
                GameLogic.Share.gameOver(true)
            })
        } else if (this._fwId == 4) {
            for (let i = 0; i < this._fwArr.length; i++) {
                let fw = this._fwArr[i]
                fw.addComponent(FireWork5)
            }
            Laya.timer.once(8000, this, () => {
                GameLogic.Share.gameOver(true)
            })
        } else if (this._fwId == 5) {
            for (let i = 0; i < this._fwArr.length; i++) {
                let fw = this._fwArr[i]
                fw.addComponent(FireWork6)
            }
            Laya.timer.once(8000, this, () => {
                GameLogic.Share.gameOver(true)
            })
        } else if (this._fwId == 6) {
            this._fw.addComponent(FireWork7)
        } else if (this._fwId == 7) {
            this._fw.addComponent(FireWork8)
        } else if (this._fwId == 8) {
            this._fw.addComponent(FireWork9)
        } else if (this._fwId == 9) {
            this._fw.addComponent(FireWork10)
        } else if (this._fwId == 10) {
            this._fw.addComponent(FireWork11)
        } else if (this._fwId == 11) {
            this._fw.addComponent(FireWork12)
        } else if (this._fwId == 12) {
            this._fw.addComponent(FireWork13)
        }
    }

    createFireWork(id: number) {
        let res = GameLogic.Share._scene.getChildByName('FwNode').getChildAt(id) as Laya.Sprite3D
        this._fw = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
        this._fw.transform.position = new Laya.Vector3()
        this._fw.active = true
    }
    createFireWorkArr(id: number, index: number) {
        let res = GameLogic.Share._scene.getChildByName('FwNode').getChildAt(id) as Laya.Sprite3D
        let fw = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
        fw.transform.position = new Laya.Vector3(-0.45 + index * 0.25, 0, 0)
        fw.active = true
        this._fwArr.push(fw)
    }

    gameOver(isWin: boolean) {
        if (this.isGameOver) return
        //Laya.timer.clearAll(this)
        WxApi.DoVibrate(false)
        this.isGameOver = true
        this.isStartGame = false
        this.isPause = true
        this.isWin = isWin
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
    }
}