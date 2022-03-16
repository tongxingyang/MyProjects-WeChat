
export class PlayerData {
    grade: number = 1
    skinArr: number[] = [1, 0, 0, 0]
    skinId: number = 0
}

export default class PlayerDataMgr {
    private static _playerData: PlayerData = null
    static levelDataArr: any[] = []

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
}