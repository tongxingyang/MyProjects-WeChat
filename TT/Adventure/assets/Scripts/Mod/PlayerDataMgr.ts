import { _decorator } from "cc";
const { ccclass, property } = _decorator;

export class PlayerData {
    grade: number = 1
    coin: number = 0
    dieCount: number = 0
    power: number = 10
    powerAd15: number = 0
    powerAdMax: number = 0
    skinId: number = 0
    skinArr: number[] = [1, 0, 0, 0, 0, 0]
    exitTime: number = 0
}
@ccclass
export default class PlayerDataMgr {
    private static _playerData: PlayerData
    public static maxGrade: number = 30
    public static powerMax: number = 10

    //获取用户数据
    public static getPlayerData(): PlayerData {
        if (!localStorage.getItem('playerData')) {
            this._playerData = new PlayerData()
            localStorage.setItem('playerData', JSON.stringify(this._playerData))
        } else {
            if (this._playerData == null) {
                let item: any = localStorage.getItem('playerData')
                this._playerData = JSON.parse(item) as PlayerData
            }
        }
        return this._playerData
    }

    //设置用户数据
    public static setPlayerData() {
        localStorage.setItem('playerData', JSON.stringify(this._playerData))
    }

    public static addDieCount() {
        this._playerData.dieCount++
        this.setPlayerData()
    }

    public static changeCoin(v: number = 1) {
        this._playerData.coin += v
        this.setPlayerData()
    }
    public static changePower(v: number = 1) {
        if (this._playerData.power >= 9999) return
        this._playerData.power += v
        this.setPlayerData()
    }

    public static changeGrade(v: number = 1) {
        this._playerData.grade += v
        if (this._playerData.grade > this.maxGrade) this._playerData.grade = this.maxGrade
        this.setPlayerData()
    }

    public static getCostById(id: number): number {
        let cost: number = 0

        switch (id) {
            case 0:
                cost = 0
                break
            case 1:
                cost = 1000
                break
            case 2:
                cost = 1200
                break
            case 3:
                cost = 1400
                break
            case 4:
                cost = 1600
                break
            case 5:
                cost = 2000
                break
        }

        return cost
    }

    public static getFinishBounes(g: number) {
        return g * 10 > 300 ? 300 : g * 10
    }
}
