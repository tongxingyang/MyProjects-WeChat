import Utility from "../Mod/Utility";

export class ModelPos {
    constructor(x: any, y: any, z: any) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getV3() {
        return new Laya.Vector3(Number(this.x), Number(this.y), Number(this.z));
    }

    x: Number;
    y: Number;
    z: Number;
}

export class PlayerData {
    grade: number = 1
    coin: number = 0
    key: number = 0
    skinId: number = 0
    skinArr: number[] = []
    hatId: number = -1
    hatArr: number[] = []
    shoesId: number = 0
    shoesArr: number[] = []
    videoArr: number[] = []
    exitTime: number = 0
}

export default class PlayerDataMgr {
    private static _playerData: PlayerData = null
    public static powerMax: number = 10
    public static tempSkinId: number = -1
    public static levelDataArr: any[] = []

    //获取用户数据
    public static getPlayerData(): PlayerData {
        if (!localStorage.getItem('playerData')) {
            this._playerData = new PlayerData()
            for (let i = 0; i < 15; i++) {
                if (i == 0) {
                    this._playerData.skinArr.push(1)
                    this._playerData.hatArr.push(0)
                    this._playerData.shoesArr.push(1)
                } else {
                    this._playerData.skinArr.push(0)
                    this._playerData.hatArr.push(0)
                    this._playerData.shoesArr.push(0)
                }
                this._playerData.videoArr.push(0)
            }
            localStorage.setItem('playerData', JSON.stringify(this._playerData))
        } else {
            if (this._playerData == null) {
                this._playerData = JSON.parse(localStorage.getItem('playerData')) as PlayerData
            }
        }
        return this._playerData
    }

    //设置用户数据
    public static setPlayerData() {
        localStorage.setItem('playerData', JSON.stringify(this._playerData))
    }

    public static changeCoin(dt: number) {
        this._playerData.coin += dt
        this.setPlayerData()
    }

    public static setExitTime() {
        this._playerData.exitTime = new Date().getTime()
        this.setPlayerData()
    }

    public static getUnlockSkinId(cost: boolean = false): number {
        let id = -1
        let arr = []
        let length = cost ? 10 : this._playerData.skinArr.length
        for (let i = 0; i < length; i++) {
            if (this._playerData.skinArr[i] == 0) {
                arr.push(i)
            }
        }
        if (arr.length > 0) {
            id = Utility.getRandomItemInArr(arr)
        }
        return id
    }
    public static getUnlockShoesId(cost: boolean = false): number {
        let id = -1
        let arr = []
        let length = cost ? 10 : this._playerData.shoesArr.length
        for (let i = 0; i < length; i++) {
            if (this._playerData.shoesArr[i] == 0) {
                arr.push(i)
            }
        }
        if (arr.length > 0) {
            id = Utility.getRandomItemInArr(arr)
        }
        return id
    }
    public static getUnlockHatId(cost: boolean = false): number {
        let id = -1
        let arr = []
        let length = cost ? 10 : this._playerData.hatArr.length
        for (let i = 0; i < length; i++) {
            if (this._playerData.hatArr[i] == 0) {
                arr.push(i)
            }
        }
        if (arr.length > 0) {
            id = Utility.getRandomItemInArr(arr)
        }
        return id
    }
}