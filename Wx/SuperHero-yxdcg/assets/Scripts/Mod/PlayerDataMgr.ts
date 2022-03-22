import { _decorator } from "cc";
const { ccclass, property } = _decorator;

export class PlayerData {
    grade: number = 1
    grade1: number = 1
    skinId: number = 0
    skinArr: number[] = [1, 0]
    exitTime: number = 0
}
@ccclass
export default class PlayerDataMgr {
    private static _playerData: PlayerData
    public static maxGrade: number = 10

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

    public static changeGrade(v: number = 1) {
        if (this._playerData.skinId == 0)
            this._playerData.grade += v
        if (this._playerData.skinId == 1)
            this._playerData.grade1 += v
        this.setPlayerData()
    }

    public static getEnemyDieCountArr(): number[] {
        if (this._playerData.skinId == 0)
            return [1, 2, 1, 1, 1, 1, 1, 4, 1, 1]
        if (this._playerData.skinId == 1)
            return [1, 1, 4, 1, 1, 1, 3, 1, 1, 1]
    }
}
