import Utility from "../Mod/Utility"

export class PlayerData {
    grade: number = 1
    coin: number = 0
    skinId: number = 0
    skinArr: number[] = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}

export default class PlayerDataMgr {
    private static _playerData: PlayerData = null

    //获取用户数据
    public static getPlayerData(): PlayerData {
        if (!localStorage.getItem('playerData')) {
            this._playerData = new PlayerData()
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

    public static getCostById(id: number) {
        switch (id) {
            case 0:
                return 0
            case 1:
                return 400
            case 2:
                return 400
            case 3:
                return 400
            case 4:
                return 400
            case 5:
                return 400
            case 6:
                return 400
            case 7:
                return 400
            case 8:
                return 400
            case 9:
                return 400
        }
    }
}