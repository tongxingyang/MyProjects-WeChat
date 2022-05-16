
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import WxApi from "../Libs/WxApi"
import Utility from "../Mod/Utility"
import CameraCrl from "./CameraCrl"
import Hammer from "./Prop/Hammer"
import Runner from "./Prop/Runner"
import Slice from "./Prop/Slice"
import PTime from "./Prop/PTime"
import Mosquito, { AniState } from "./Mosquito"
import Player from "./Player"
import Woman, { WomanState } from "./Woman"
import SoundMgr from "../Mod/SoundMgr"
import FdMgr from "../FanDong/FdMgr"

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
    public startCamField: number = 80
    public _floorFinish: Laya.Sprite3D = null
    public _Bench: Laya.Sprite3D = null
    public _woman: Laya.Sprite3D = null
    public _womanCrl: Woman = null
    public _mosquitoNode: Laya.Sprite3D = null

    public isStartGame: boolean = false
    public isGameOver: boolean = false
    public isWin: boolean = false
    public isPause: boolean = false
    public isFinish: boolean = false

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
                    title: '蚊子大作战',
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
        this._light.shadowDistance = 15;
        // Set shadow resolution.
        this._light.shadowResolution = 512;
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
        this._Bench = this._scene.getChildByName('Scene_1').getChildByName('Bench') as Laya.Sprite3D
        this._woman = this._Bench.getChildAt(0) as Laya.Sprite3D
        this._womanCrl = this._woman.addComponent(Woman)

        if (!FdMgr.isVersionValid) {
            let a = this._camera.transform.localRotationEuler.clone()
            a.x = 0
            this._camera.transform.localRotationEuler = a
            this.camStartPos.z += 5
            this.camStartPos.y -= 4
            this._camera.transform.position = this.camStartPos
            this._scene.getChildByName('Scene_1').active = false
        }

        this._mosquitoNode = this._levelNode.addChild(new Laya.Sprite3D()) as Laya.Sprite3D
        this._playerCrl = this._mosquitoNode.addComponent(Player)
        this.createLevel()
        this.createMosquito()
    }

    gameStart() {
        Laya.Scene.open('MyScenes/GameUI.scene')
    }
    startToWalk() {
        // for (let i = 0; i < this._mosquitoNode.numChildren; i++) {
        //     let mq = this._mosquitoNode.getChildAt(i)
        //     let crl: Mosquito = mq.getComponent(Mosquito)
        //     crl.playAnimation(AniState.ANI_RUN)
        // }
    }

    createLevel() {
        let lv: number = PlayerDataMgr.getPlayerData().grade
        lv = (lv - 1) % 5

        if (!FdMgr.isVersionValid && lv == 0) lv = 4

        let dataArr: any[] = PlayerDataMgr.levelDataArr[lv]
        for (let i = 0; i < dataArr.length; i++) {
            let data: any = dataArr[i]
            this.createProp(data)
        }
    }

    createMosquito() {
        let count: number = this._mosquitoNode.numChildren
        let res = Laya.loader.getRes(WxApi.UnityPath + 'mosquito_1.lh') as Laya.Sprite3D
        res.active = false
        let mosquito = Laya.Sprite3D.instantiate(res, this._mosquitoNode, false, new Laya.Vector3(0, 0, 0))
        mosquito.addComponent(Mosquito)
        mosquito.transform.localPosition =
            new Laya.Vector3(
                count == 0 ? 0 : (Math.random() * 2.6 - 1.3),
                count == 0 ? 2.5 : 2.5 + (Math.random() * 2 - 1),
                -(count / 5))
    }

    createProp(data: any) {
        let name: string = data.name
        let pos: Laya.Vector3 = new Laya.Vector3(Number(data.position.x), Number(data.position.y), Number(data.position.z))
        let rotation: Laya.Vector3 = new Laya.Vector3(Number(data.rotation.x), Number(data.rotation.y), Number(data.rotation.z))
        let scale: Laya.Vector3 = new Laya.Vector3(Number(data.scale.x), Number(data.scale.y), Number(data.scale.z))
        let value: string = data.value.v

        let res: Laya.Sprite3D = null
        if (name.search('Floor_1') != -1) {
            res = Utility.getSprite3DResByUrl('Floor_1.lh', this._levelNode)
            if (!FdMgr.isVersionValid) {
                ((res as Laya.MeshSprite3D).meshRenderer.material as Laya.BlinnPhongMaterial).albedoColor = new Laya.Vector4(1, 0, 0, 1)
            }
        } else if (name.search('Floor_Finsh') != -1) {
            res = Utility.getSprite3DResByUrl('Floor_Finsh.lh', this._levelNode)
            this._floorFinish = res
            let benchPos: Laya.Vector3 = this._Bench.transform.position.clone();
            let desPos: Laya.Vector3 = (this._floorFinish.parent.getChildAt(this._floorFinish.parent.numChildren - 2) as Laya.Sprite3D).transform.position.clone()
            benchPos.z = desPos.z + 80
            this._Bench.transform.position = benchPos
        } else if (name.search('Runer_1') != -1) {
            res = Utility.getSprite3DResByUrl('Runer_1.lh', this._levelNode)
            res.addComponent(Runner)
        } else if (name.search('Hammer_1') != -1) {
            res = Utility.getSprite3DResByUrl('Hammer_1.lh', this._levelNode)
            res.addComponent(Hammer)
        } else if (name.search('Slice_1') != -1) {
            res = Utility.getSprite3DResByUrl('Slice_1.lh', this._levelNode)
            let crl: Slice = res.addComponent(Slice)
            crl.value = value
            crl.init(1)
        } else if (name.search('Slice_2') != -1) {
            res = Utility.getSprite3DResByUrl('Slice_2.lh', this._levelNode)
            let crl: Slice = res.addComponent(Slice)
            crl.value = value
            crl.init(2)
        } else if (name.search('Time_1') != -1) {
            res = Utility.getSprite3DResByUrl('Time_1.lh', this._levelNode)
            res.addComponent(PTime)
        }

        res.transform.position = pos
        res.transform.rotationEuler = rotation
        res.transform.setWorldLossyScale(scale)
    }

    updateMosquitoNum(num: number) {
        if (num <= 0) {
            this.createFX(this._mosquitoNode.transform.position.clone())
            this._mosquitoNode.destroyChildren()
            this.finishCB(false)
            return
        }
        let total: number = this._mosquitoNode.numChildren
        let dt = Math.abs(num - total)
        if (num > total) {
            //创建蚊子
            SoundMgr.instance.playSoundEffect('correct.mp3')
            for (let i = 0; i < dt; i++) {
                this.createMosquito()
            }
        } else if (num < total) {
            //销毁蚊子
            SoundMgr.instance.playSoundEffect('wrong.mp3')
            for (let i = dt - 1; i >= 0; i--) {
                this._mosquitoNode.getChildAt(this._mosquitoNode.numChildren - 1).destroy()
            }
            this.createFX(this._mosquitoNode.transform.position.clone())
        }
    }

    finishCB(isWin: boolean) {
        this.isGameOver = true
        this.isWin = isWin
        this.isStartGame = false
        if (!isWin)
            WxApi.DoVibrate(false)

        if (isWin) {
            for (let i = 0; i < this._mosquitoNode.numChildren; i++) {
                let m: Laya.Sprite3D = this._mosquitoNode.getChildAt(i) as Laya.Sprite3D
                let mPos: Laya.Vector3 = m.transform.position.clone()
                mPos.x = Math.random() * 6 - 3
                mPos.z = this._floorFinish.transform.position.z + 2
                Utility.TmoveTo(m, 1000, mPos, null)
            }

            let camPos: Laya.Vector3 = this._camera.transform.position.clone()
            camPos.y = 3
            camPos.z += 2
            Utility.TmoveTo(this._camera, 1000, camPos, () => {
                Laya.timer.once(1000, this, () => {
                    this.dryWoman()
                })
            })
            let camEr: Laya.Vector3 = this._camera.transform.rotationEuler.clone()
            camEr.x = 0
            Utility.RotateTo(this._camera, 1000, camEr, null)
        } else {
            Laya.timer.once(2000, this, () => {
                FdMgr.showGameOver(()=>{
                    Laya.Scene.open('MyScenes/FinishUI.scene')
                })
            })
        }
    }

    dryWoman() {
        let count = this._mosquitoNode.numChildren
        for (let i = this._mosquitoNode.numChildren - 1; i >= 0; i--) {
            let m = this._mosquitoNode.getChildAt(i) as Laya.Sprite3D
            let des = this._womanCrl.mosquitoNode

            let desPos: Laya.Vector3 = des.transform.localPosition.clone()
            desPos.x = Math.random() * 2.3 - 1.15
            desPos.y -= i / 15
            desPos.z = -1.8
            let wPos: Laya.Vector3 = des.transform.position.clone()
            Laya.Vector3.add(wPos, desPos, desPos)

            Utility.TmoveTo(m, 500, desPos, () => {
                m.transform.localRotationEuler = new Laya.Vector3(-90, 0, 0)

                let mPos: Laya.Vector3 = m.transform.position.clone()
                let mRo: Laya.Vector3 = m.transform.rotationEuler.clone()
                let newM: Laya.Sprite3D = des.addChild(m) as Laya.Sprite3D
                newM.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1))
                newM.transform.position = mPos
                newM.transform.rotationEuler = mRo
            })
        }

        Laya.timer.once(1000, this, () => {
            let camPos: Laya.Vector3 = this._camera.transform.position.clone()
            camPos.x = 20
            camPos.y = 30
            //camPos.z += 5
            Utility.TmoveTo(this._camera, 500, camPos, () => {
                Laya.timer.once(1000, this, () => {
                    if (count >= 20) {
                        this._womanCrl.playAnimation(WomanState.ANI_dry, 0.5)
                        Laya.timer.once(300, this, () => {
                            SoundMgr.instance.playSoundEffect('hurt.mp3')
                        })
                    } else {
                        this._womanCrl.playAnimation(WomanState.ANI_SLAP)
                        Laya.timer.once(1000, this, () => {
                            SoundMgr.instance.playSoundEffect('hit.mp3')
                            this.createFX(this._womanCrl.mosquitoNode.transform.position.clone(), false)
                            this._womanCrl.mosquitoNode.destroyChildren()
                        })
                    }
                    Laya.timer.once(2000, this, () => {
                        FdMgr.showGameOver(()=>{
                            Laya.Scene.open('MyScenes/FinishUI.scene')
                        })
                    })
                })
            })
            let camEr: Laya.Vector3 = this._camera.transform.rotationEuler.clone()
            camEr.x -= 30
            camEr.y -= 20
            Utility.RotateTo(this._camera, 500, camEr, null)
        })
    }

    createFX(pos: Laya.Vector3, addZ: boolean = true) {
        if (addZ)
            pos.z += 2
        let fx: Laya.Sprite3D = Utility.getSprite3DResByUrl('mosquitoFX.lh', this._levelNode)
        fx.transform.position = pos
        Laya.timer.once(500, this, () => {
            fx.destroy()
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
        this._light.transform.localRotationEuler = this.lightStartAngle

        let cav = Laya.Browser.createElement("canvas");
        let cxt = cav.getContext("2d");
        cxt.clearRect(0, 0, 256, 256)

        this._levelNode.destroyChildren()
        this._mosquitoNode = this._levelNode.addChild(new Laya.Sprite3D()) as Laya.Sprite3D
        this._playerCrl = this._mosquitoNode.addComponent(Player)
        this._womanCrl.mosquitoNode.destroyChildren()
        this._womanCrl.playAnimation(WomanState.ANI_IDLE)
        this.createLevel()
        this.createMosquito()
    }
}