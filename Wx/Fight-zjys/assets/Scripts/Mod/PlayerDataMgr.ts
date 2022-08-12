import { _decorator } from "cc";
const { ccclass, property } = _decorator;

export class PlayerData {
    isNewer: boolean = true
    soul: number = 0
    material: number = 0
    hp: number = 200
    attack: number = 100
    speed: number = 1
    critical: number = 0
    enchantArr: number[] = [0, 0, 0, 0]
    weaponId: number = 0
    weaponArr: number[] = [
        1, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0
    ]
    weaponUpArr: number[] = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0
    ]
    weaponEnchantArr: number[] = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0
    ]
    weaponEnchantTypeArr: number[] = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0
    ]
    exitTime: number = 0
}
@ccclass
export default class PlayerDataMgr {
    private static _playerData: PlayerData

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

    public static getWeaponEnchantType() {
        return this._playerData.weaponEnchantTypeArr[this._playerData.weaponId]
    }
}
