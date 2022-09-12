import { _decorator } from "cc";
import Utility from "./Utility";
const { ccclass, property } = _decorator;

export class PlayerData {
    coin: number = 0
    lv: number = 1
    lvArr: number[] = [0, 0, 0]
    skinId: number = 0
    skinArr: number[] = [1, 0, 0, 0, 0, 0]
    exitTime: number = 0
}
@ccclass
export default class PlayerDataMgr {
    private static _playerData: PlayerData
    public static freeSkinId: number = -1
    public static pathArr: any[] = []

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
}
