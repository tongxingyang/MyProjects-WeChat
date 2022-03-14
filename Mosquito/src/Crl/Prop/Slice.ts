import GameLogic from "../GameLogic"
import WxApi from "../../Libs/WxApi"

export default class Slice extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null
    value: string = ''
    type: number = 1
    plane: Laya.MeshSprite3D = null
    cxt: any = null
    cav: any = null

    calType: number = 0
    num: number = 1

    hadColl: boolean = false
    hadClear: boolean = false

    texture2d: Laya.Texture2D = null

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
        this.plane = this.myOwner.getChildByName('Plane') as Laya.MeshSprite3D
    }

    onDisable() {

    }

    init(type: number) {
        this.type = type

        if (this.value[0] == '+') {
            this.calType = 0
            let strArr: string[] = this.value.split('+')
            this.num = parseInt(strArr[1])
        } else if (this.value[0] == '-') {
            this.calType = 1
            let strArr: string[] = this.value.split('-')
            this.num = parseInt(strArr[1])
        } else if (this.value[0] == '*') {
            this.calType = 2
            let strArr: string[] = this.value.split('*')
            this.num = parseInt(strArr[1])
        } else if (this.value[0] == '/') {
            this.calType = 3
            let strArr: string[] = this.value.split('/')
            this.num = parseInt(strArr[1])
        }

        if (this.value[0] == '*') {
            let str = this.value.split('*')
            this.value = 'x' + str[1]
        } else if (this.value.search('/') != -1) {
            let str = this.value.split('/')
            this.value = '÷' + str[1]
        }
        let mat: Laya.UnlitMaterial = this.plane.meshRenderer.material as Laya.UnlitMaterial;
        this.cav = Laya.Browser.createElement("canvas");
        this.cxt = this.cav.getContext("2d");
        this.cav.width = 256;
        this.cav.height = 256;
        this.cxt.fillStyle = 'rgb(255,255,255)';
        this.cxt.font = "bold 150px Arial";
        this.cxt.textAlign = "center";//文本的对齐方式
        this.cxt.textBaseline = "center";//文本相对于起点的位置
        this.cxt.fillText(this.value, 130, 180, 200);//有填充cxt.font="bold 60px 宋体";

        this.cxt.strokeStyle = "black";
        this.cxt.font = "bold 150px Arial";
        this.cxt.strokeText(this.value, 130, 180, 200);//只有边框

        this.texture2d = new Laya.Texture2D(256, 256);
        this.texture2d.loadImageSource(this.cav);

        //给材质贴图
        mat.albedoTexture = this.texture2d;
    }

    checkColl() {
        if (this.hadColl || GameLogic.Share.isGameOver) return
        let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()
        let mPos: Laya.Vector3 = GameLogic.Share._mosquitoNode.transform.position.clone()
        if (Math.abs(myPos.z - mPos.z) < 0.1 && mPos.x > myPos.x - 2 && mPos.x < myPos.x + 2) {
            WxApi.DoVibrate()
            this.hadColl = true
            let totalCount: number = GameLogic.Share._mosquitoNode.numChildren
            if (this.calType == 0) {
                totalCount += this.num
            } else if (this.calType == 1) {
                totalCount -= this.num
            } else if (this.calType == 2) {
                totalCount *= this.num
            } else if (this.calType == 3) {
                totalCount /= this.num
            }
            GameLogic.Share.updateMosquitoNum(Math.floor(totalCount))
        }
    }

    onUpdate() {
        this.checkColl()
        if (GameLogic.Share.isGameOver && !this.hadClear) {
            this.hadClear = true
            this.cxt.clearRect(0, 0, 256, 256)
        }
    }

    onDestroy() {
        this.texture2d.destroy()
    }
}