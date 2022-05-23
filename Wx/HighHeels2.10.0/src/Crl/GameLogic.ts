
import FdMgr from "../FanDong/fdMgr"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import WxApi from "../Libs/WxApi"
import SoundMgr from "../Mod/SoundMgr"
import Utility from "../Mod/Utility"
import CameraCrl from "./CameraCrl"
import MoveComponent from "./MoveComponent"
import Player, { AniState } from "./Player"
import Board from "./Prop/Board"
import Heel from "./Prop/Heel"
import Jewel from "./Prop/Jewel"
import Key from "./Prop/Key"
import Obs from "./Prop/Obs"
import Pole from "./Prop/Pole"
import Road from "./Prop/Road"
import RoadFinish from "./Prop/RoadFinish"
import RoadTS from "./Prop/RoadTS"
import RotateBoard from "./Prop/RotateBoard"
import Thorn from "./Prop/Thorn"

export default class GameLogic {
    public static Share: GameLogic

    public _scene: Laya.Scene3D
    public _camera: Laya.Camera
    public _light: Laya.DirectionLight

    public camStartPos: Laya.Vector3 = new Laya.Vector3(0, 0, 0)
    private camStartRotation: Laya.Quaternion = null
    public _cameraCrl: CameraCrl = null

    private lightStartAngle: Laya.Vector3 = new Laya.Vector3()

    public _levelNode: Laya.Sprite3D = null
    public _player: Laya.Sprite3D = null
    public _playerCrl: Player = null

    public _coinCount: number = 0
    public _score: number = 0
    public totalDistance: number = 0
    public isDes: boolean = false
    public startCamField: number = 80

    public isMan: boolean = false
    public isStartGame: boolean = false
    public isGameOver: boolean = false
    public isWin: boolean = false
    public isPause: boolean = false
    public isFinish: boolean = false

    constructor() {
        if (!Laya.Browser.onWeiXin)
            localStorage.clear()
        GameLogic.Share = this
        if (Laya.Browser.onWeiXin) {
            Laya.Browser.window.wx.showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            });
            Laya.Browser.window.wx.onShareAppMessage(() => {
                return {
                    title: '开心高跟鞋',
                    imageUrl: '' // 图片 URL
                }
            })
        }
        PlayerDataMgr.getPlayerData()

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
        this._light.shadowDistance = 15;
        // Set shadow resolution.
        this._light.shadowResolution = 2048;
        // Set shadow cascade mode.
        this._light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;

        this.lightStartAngle = this._light.transform.rotationEuler.clone()

        //this.fixCameraField()

        this.camStartPos = this._camera.transform.position.clone()
        this.camStartRotation = this._camera.transform.rotation.clone()
        this._camera.fieldOfView = this.startCamField
        this._cameraCrl = this._camera.addComponent(CameraCrl)

        //this.setFog()

        this._levelNode = new Laya.Sprite3D()
        this._scene.addChild(this._levelNode)

        this.createPlayer()
        this.createLevel()
    }

    fixCameraField() {
        // let staticDT: number = 1624 - 1334
        // let curDT: number = Laya.stage.displayHeight - 1334 < 0 ? 0 : Laya.stage.displayHeight - 1334
        // let per = curDT / staticDT * 10
        // this._camera.fieldOfView = 90 + per
    }

    setFog() {
        // return;
        //开启雾化效果
        let scene = this._scene
        scene.enableFog = true;
        //设置雾化的颜色
        scene.fogColor = this.getRGB("#F17673"); //00FFD6
        //设置雾化的起始位置，相对于相机的距离
        scene.fogStart = 0;
        //设置雾化最浓处的距离。
        scene.fogRange = 400;
    }
    getRGB(_hexColor) {
        var color = [], rgb = [];
        let hexColor = _hexColor.replace(/#/, "");
        if (hexColor.length == 3) { // 处理 "#abc" 成 "#aabbcc"
            var tmp = [];
            for (var i = 0; i < 3; i++) {
                tmp.push(hexColor.charAt(i) + hexColor.charAt(i));
            }
            hexColor = tmp.join("");
        }

        for (var i = 0; i < 3; i++) {
            color[i] = "0x" + hexColor.substr(i * 2, 2);
            // rgb.push(parseInt(Number(color[i])));
            rgb.push(parseInt(color[i]));
        }
        return new Laya.Vector3(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255);
    }

    gameStart() {
        Laya.Scene.open('MyScenes/GameUI.scene')
    }
    startToWalk() {
        this._playerCrl.playAnimation(AniState.ANI_WALK, 2)
    }

    createLevel() {
        let g = 0
        if (PlayerDataMgr.getPlayerData().grade <= 10) {
            g = PlayerDataMgr.getPlayerData().grade - 1
        } else {
            g = Math.floor(Math.random() * 5 + 5)
        }
        let dataArr: any[] = PlayerDataMgr.levelDataArr[g]
        for (let i = 0; i < dataArr.length; i++) {
            let item: any = dataArr[i]
            let name: string = item.name
            let position: Laya.Vector3 = Utility.getVector3(item.position.x, item.position.y, item.position.z)
            let rotation: Laya.Vector3 = Utility.getVector3(item.rotation.x, item.rotation.y, item.rotation.z)
            let scale: Laya.Vector3 = Utility.getVector3(item.scale.x, item.scale.y, item.scale.z)

            if (name.search('Road_01') != -1) {
                this.createRoad(position, rotation, scale)
            } else if (name.search('Pole_01') != -1) {
                this.createPole(position, rotation, scale)
            } else if (name.search('Obs_01') != -1) {
                this.createObs(position, rotation, scale)
            } else if (name.search('Heel') != -1) {
                this.createHeel(position, rotation, scale)
            } else if (name.search('Jewel_01') != -1) {
                this.createJewel(position, rotation, scale)
            } else if (name.search('Road_Finish') != -1) {
                this.createRoadFinish(position, rotation, scale)
            } else if (name.search('Board_01') != -1) {
                this.createBoard(position, rotation, scale)
            } else if (name.search('Road_Ts_01') != -1) {
                this.createRoadTS(position, rotation, scale)
            } else if (name.search('Thorn_01') != -1) {
                this.createThorn(position, rotation, scale)
            } else if (name.search('Key_01') != -1) {
                this.createKey(position, rotation, scale)
            } else if (name.search('Board_02') != -1) {
                this.createBoard2(position, rotation, scale)
            }
        }

        this.createRoad(new Laya.Vector3(0, 0, -20), new Laya.Vector3(), new Laya.Vector3(1, 1, 1))
    }

    createPlayer() {
        this.isMan = PlayerDataMgr.getPlayerData().skinId == 4 || PlayerDataMgr.getPlayerData().skinId == 8 ||
            PlayerDataMgr.getPlayerData().skinId == 11 || PlayerDataMgr.getPlayerData().skinId == 13 || PlayerDataMgr.getPlayerData().skinId == 14
        let name = this.isMan ? 'Man_01.lh' : 'Wuman_01.lh'
        this._player = Utility.getSprite3DResByUrl(name, this._levelNode)
        this._player.name = 'Player'
        this._playerCrl = this._player.addComponent(Player)
        this._player.addComponent(MoveComponent)
    }

    createRoad(position: Laya.Vector3, rotation: Laya.Vector3, scale: Laya.Vector3) {
        let road = Utility.getSprite3DResByUrl('Road_01.lh', this._levelNode)
        road.transform.position = position;
        road.transform.rotationEuler = rotation;
        road.transform.setWorldLossyScale(scale);
        road.addComponent(Road);
    }

    createObs(position: Laya.Vector3, rotation: Laya.Vector3, scale: Laya.Vector3) {
        let obs = Utility.getSprite3DResByUrl('Obs_01.lh', this._levelNode)
        obs.transform.position = position
        obs.transform.rotationEuler = rotation
        obs.transform.setWorldLossyScale(scale)
        obs.addComponent(Obs)
    }

    createPole(position: Laya.Vector3, rotation: Laya.Vector3, scale: Laya.Vector3) {
        let pole = Utility.getSprite3DResByUrl('Pole_01.lh', this._levelNode)
        pole.transform.position = position
        pole.transform.rotationEuler = rotation
        pole.transform.setWorldLossyScale(scale)
        pole.addComponent(Pole)
    }

    createThorn(position: Laya.Vector3, rotation: Laya.Vector3, scale: Laya.Vector3) {
        let thorn = Utility.getSprite3DResByUrl('Thorn_01.lh', this._levelNode)
        thorn.transform.position = position
        thorn.transform.rotationEuler = rotation
        thorn.transform.setWorldLossyScale(scale)
        thorn.addComponent(Thorn)
    }

    createHeel(position: Laya.Vector3, rotation: Laya.Vector3, scale: Laya.Vector3) {
        let res = Laya.loader.getRes(WxApi.UnityPath + 'ShoesNode.lh') as Laya.Sprite3D
        let shoes = res.getChildAt(0) as Laya.Sprite3D
        let heel = Laya.Sprite3D.instantiate(shoes, this._levelNode, false, new Laya.Vector3(0, 0, 0))
        //position.y -= 0.5
        scale = new Laya.Vector3(1.5, 1.5, 1.5)
        heel.transform.position = position
        heel.transform.rotationEuler = rotation
        heel.transform.setWorldLossyScale(scale)
        heel.addComponent(Heel)

        let heelNode = Utility.getSprite3DResByUrl('HeelsNode.lh', heel)
        heelNode.transform.localPosition = new Laya.Vector3(0, 0, 0)
    }

    createBoard(position: Laya.Vector3, rotation: Laya.Vector3, scale: Laya.Vector3) {
        let board = Utility.getSprite3DResByUrl('Board_01.lh', this._levelNode)
        board.transform.position = position
        board.transform.rotationEuler = rotation
        board.transform.setWorldLossyScale(scale)
        board.addComponent(Board)
    }
    createBoard2(position: Laya.Vector3, rotation: Laya.Vector3, scale: Laya.Vector3) {
        let board = Utility.getSprite3DResByUrl('Board_02.lh', this._levelNode)
        board.transform.position = position
        board.transform.rotationEuler = rotation
        board.transform.setWorldLossyScale(scale)
        board.addComponent(RotateBoard)
    }

    createJewel(position: Laya.Vector3, rotation: Laya.Vector3, scale: Laya.Vector3) {
        let jewel = Utility.getSprite3DResByUrl('Jewel_01.lh', this._levelNode)
        jewel.transform.position = position
        jewel.transform.rotationEuler = rotation
        jewel.transform.setWorldLossyScale(scale)
        jewel.addComponent(Jewel)
    }
    createKey(position: Laya.Vector3, rotation: Laya.Vector3, scale: Laya.Vector3) {
        let key = Utility.getSprite3DResByUrl('Key_01.lh', this._levelNode)
        key.transform.position = position
        key.transform.rotationEuler = rotation
        key.transform.setWorldLossyScale(scale)
        key.addComponent(Key)
    }
    createRoadFinish(position: Laya.Vector3, rotation: Laya.Vector3, scale: Laya.Vector3) {
        let roadFinish = Utility.getSprite3DResByUrl('Road_Finish.lh', this._levelNode)
        roadFinish.transform.position = position;
        roadFinish.transform.rotationEuler = rotation;
        roadFinish.transform.setWorldLossyScale(scale);
        roadFinish.addComponent(RoadFinish);
    }

    createRoadTS(position: Laya.Vector3, rotation: Laya.Vector3, scale: Laya.Vector3) {
        let roadTS = Utility.getSprite3DResByUrl('Road_Ts_01.lh', this._levelNode)
        roadTS.transform.position = position
        roadTS.transform.rotationEuler = rotation
        roadTS.transform.setWorldLossyScale(scale)
        roadTS.addComponent(RoadTS)
    }

    winCB() {
        this.isGameOver = true
        this.isWin = true
        this.isStartGame = false
        SoundMgr.instance.playSoundEffect('Victory.mp3')

        Laya.timer.once(2000, this, () => {
            this.showFinishUI()
        })
    }

    loseCB(isFall?: boolean) {
        WxApi.DoVibrate(false)
        this.isGameOver = true
        this.isWin = false
        this.isStartGame = false
        SoundMgr.instance.playSoundEffect('Lose.mp3')
        Laya.timer.once(2000, this, () => {
            this.showFinishUI()
        })
    }

    showFinishUI() {
        if (PlayerDataMgr.getPlayerData().key < 3) {
            Laya.Scene.open('MyScenes/FinishUI.scene', true)
        } else {
            Laya.Scene.open('MyScenes/BoxUI.scene', true)
        }
    }

    activeRoad() {

    }

    restartGame() {
        this.isStartGame = false
        this.isGameOver = false
        this.isWin = false
        this.totalDistance = 0
        this._score = 0
        this._coinCount = 0
        this.isPause = false
        this._camera.fieldOfView = this.startCamField
        this.isFinish = false

        this.isDes = false

        this._camera.transform.position = this.camStartPos
        this._camera.transform.rotation = this.camStartRotation
        this._light.transform.localRotationEuler = this.lightStartAngle

        this._levelNode.destroyChildren()
        this.createPlayer()
        this.createLevel()
    }
}