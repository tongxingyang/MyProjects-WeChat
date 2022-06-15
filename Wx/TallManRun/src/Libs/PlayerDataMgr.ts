
export class PlayerData {
    grade: number = 2
    skinArr: number[] = [1, 0, 0, 0, 0, 0]
    skinId: number = 0
    coin: number = 0
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

    public static changeCoin(v: number) {
        this._playerData.coin += v
        this.setPlayerData()
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
                return 500
            case 3:
                return 600
            case 4:
                return 600
            case 5:
                return 600
        }
    }
}