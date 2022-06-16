import PlayerDataMgr from "../Libs/PlayerDataMgr"
import WxApi from "../Libs/WxApi"
import Utility from "../Mod/Utility"
import CameraCrl from "./CameraCrl"
import PlayerCrl from "./PlayerCrl"
import FdMgr from "../FanDong/FdMgr"
import Boss from "./Boss"
import Hurdle from "./Prop/Hurdle"
import Jumper from "./Prop/Jumper"
import Diamond from "./Prop/Diamond"
import Obstacle1 from "./Prop/Obstacle1"
import Obstacle2 from "./Prop/Obstacle2"
import MoveLR from "./Prop/MoveLR"
import Obstacle3 from "./Prop/Obstacle3"
import Enemy from "./Enemy"
import Arrow from "./Prop/Arrow"
import FinishStep from "./Prop/FinishStep"

export default class GameLogic {
    public static Share: GameLogic

    public _scene: Laya.Scene3D
    public _camera: Laya.Camera
    public _light: Laya.DirectionLight

    public camStartPos: Laya.Vector3 = new Laya.Vector3(0, 0, 0)
    private camStartRotation: Laya.Quaternion = null
    public _cameraCrl: CameraCrl = null
    public startCamField: number = 70

    public isStartGame: boolean = false
    public isGameOver: boolean = false
    public isWin: boolean = false
    public isPause: boolean = false
    public isFinish: boolean = false

    public _levelNode: Laya.Sprite3D = null
    public _player: Laya.Sprite3D = null
    public _boss: Laya.Sprite3D = null
    public _playerCrl: PlayerCrl = null
    public _bossCrl: Boss = null
    public _roadFinish: Laya.Sprite3D = null
    public _roadFinish2: Laya.Sprite3D = null

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
                    title: '高个子快冲',
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
        // this._scene.fogColor = new Laya.Vector3(0, 0, 1);
        // //设置雾化的起始位置，相对于相机的距离
        // this._scene.fogStart = 0;
        // //设置雾化最浓处的距离。
        // this._scene.fogRange = 50;

        // this._camera.farPlane = 50
        this.camStartPos = this._camera.transform.position.clone()
        this.camStartRotation = this._camera.transform.rotation.clone()
        this._camera.fieldOfView = this.startCamField
        this._cameraCrl = this._camera.addComponent(CameraCrl)

        this._levelNode = this._scene.addChild(new Laya.Sprite3D()) as Laya.Sprite3D

        this.createLevel()
    }

    gameStart() {
        this.isStartGame = true
        this._playerCrl.startRun()
    }

    getItemByName(name: string): Laya.Sprite3D {
        let res = Laya.loader.getRes(WxApi.UnityPath + 'ItemNode.lh') as Laya.Sprite3D
        return res.getChildByName(name) as Laya.Sprite3D
    }

    createPlayer() {
        this._player = Laya.Sprite3D.instantiate(this.getItemByName('Hero'), this._levelNode, false)
        this._player.transform.position = new Laya.Vector3(0, 0, 0)
        this._playerCrl = this._player.addComponent(PlayerCrl)
    }

    createLevel() {
        this.createPlayer()

        let g: number = PlayerDataMgr.getPlayerData().grade
        g = Math.floor((g - 1) % 5)
        let dataArr: any[] = PlayerDataMgr.levelDataArr[g]
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
        let dirName: string = name
        if (name.search('Hurdle') != -1) {
            dirName = 'Hurdle'
        } else if (name.search('Jump1') != -1) {
            dirName = 'Jump1'
        } else if (name.search('Jump2') != -1) {
            dirName = 'Jump2'
        } else if (name.search('Boss') != -1) {
            dirName = 'Boss'
        }
        let sp: Laya.Sprite3D = Laya.Sprite3D.instantiate(this.getItemByName(dirName), this._levelNode, false, new Laya.Vector3())
        sp.transform.position = pos
        sp.transform.rotationEuler = rot
        sp.transform.setWorldLossyScale(scale)
        if (name.search('Hurdle') != -1) {
            let crl: Hurdle = sp.addComponent(Hurdle)
            crl.init(parseInt(name.substring(0, 1)), name.substring(1, 4))
            if (name.search('Move') != -1) {
                sp.addComponent(MoveLR)
            }
        } else if (name.search('Jump1') != -1) {
            sp.addComponent(Jumper)
        } else if (name.search('Diamond') != -1) {
            sp.addComponent(Diamond)
        } else if (name.search('Obstacle_1') != -1) {
            sp.addComponent(Obstacle1)
        } else if (name.search('Obstacle_2') != -1) {
            sp.addComponent(Obstacle2)
        } else if (name.search('Obstacle_3') != -1) {
            sp.addComponent(Obstacle3)
        } else if (name.search('Finish_1') != -1) {
            this._roadFinish = sp
        } else if (name.search('Finish_2') != -1) {
            this._roadFinish2 = sp
            for (let i = 3; i < sp.numChildren; i++) {
                let node = sp.getChildAt(i).getChildAt(2) as Laya.Sprite3D
                node.addComponent(Obstacle1)
                sp.getChildAt(i).getChildAt(0).addComponent(FinishStep)
            }
            this.createDiamond()
        } else if (name.search('Boss') != -1 && name.search('Enemy') < 0) {
            this._boss = sp
            this._bossCrl = this._boss.addComponent(Boss)
        } else if (name.search('Enemy') != -1) {
            sp.addComponent(Enemy)
        } else if (name.search('Arrow_Up') != -1) {
            let crl: Arrow = sp.addComponent(Arrow)
            crl.init(1)
        } else if (name.search('Arrow_Down') != -1) {
            let crl: Arrow = sp.addComponent(Arrow)
            crl.init(2)
        } else if (name.search('Arrow_Outside') != -1) {
            let crl: Arrow = sp.addComponent(Arrow)
            crl.init(3)
        } else if (name.search('Arrow_Entad') != -1) {
            let crl: Arrow = sp.addComponent(Arrow)
            crl.init(4)
        }
    }

    createDiamond() {
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 3; j++) {
                let sp: Laya.Sprite3D = Laya.Sprite3D.instantiate(this.getItemByName('Diamond'), this._levelNode, false, new Laya.Vector3())
                let pos = (this._roadFinish2.getChildAt(i + 3) as Laya.Sprite3D).transform.position.clone();
                pos.y = 2 + j
                pos.z += 1
                sp.transform.position = pos
                sp.addComponent(Diamond)
            }
        }
    }

    finish() {
        this.isFinish = true
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
        this.createLevel()
    }
}