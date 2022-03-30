
export class PlayerData {
    grade: number = 1
    bodyArr: number[] = [1, 0, 0, 0, 0, 0]
    headArr: number[] = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    legArr: number[] = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    tailArr: number[] = [1, 1, 0, 0]
    wingsArr: number[] = [0, 0]
}
export class ItemData {
    head: any[] = [
        [2, 1, 25], [4, 2, 30], [6, 3, 35], [8, 4, 40], [10, 5, 45],
        [12, 6, 50], [14, 7, 55], [16, 8, 60], [18, 9, 65], [20, 10, 70]
    ]
    leg: any[] = [
        [2, 1, 25], [4, 2, 30], [6, 3, 35], [8, 4, 40], [10, 5, 45],
        [12, 6, 50], [14, 7, 55], [16, 8, 60], [18, 9, 65], [20, 10, 70]
    ]
    tail: any[] = [[5, 2, 20], [10, 4, 30], [15, 6, 40], [20, 8, 50]]
    wings: any[] = [[10, 5, 50], [10, 5, 50]]
}

export default class PlayerDataMgr {
    private static _playerData: PlayerData = null
    private static _itemData: ItemData = null
    static isHideHuman:boolean = true

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

    static getBodyName(index: number) {
        let arr: string[] = ['美洲狮 身体', '大象 身体', '青蛙 身体', '长颈鹿 身体', '马 身体', '霸王龙 身体']
        return arr[index]
    }
    static getHeadName(index: number) {
        let arr: string[] = ['美洲狮 头', '鹿 头', '鸭子 头', '大象 头', '青蛙 头', '长颈鹿 头', '马 头', '人类 头', '独角兽 头', '霸王龙 头']
        return arr[index]
    }
    static getLegName(index: number) {
        let arr: string[] = ['美洲狮 腿', '大象 腿', '青蛙 腿', '青蛙 腿', '长颈鹿 腿', '马 腿', '人类 手', '人类 腿', '霸王龙 腿', '霸王龙 腿']
        return arr[index]
    }
    static getTailName(index: number) {
        let arr: string[] = ['美洲狮 尾巴', '大象 尾巴', '长颈鹿 尾巴', '马 尾巴']
        return arr[index]
    }
    static getWingsName(index: number) {
        let arr: string[] = ['蝙蝠 翅膀', '独角兽 翅膀']
        return arr[index]
    }

    static getDataByType(type: number): any[] {
        let data: any[] = []
        if (type == 0) {
            data = this._playerData.headArr
        } else if (type == 1) {
            data = this._playerData.legArr
        } else if (type == 2) {
            data = this._playerData.tailArr
        } else if (type == 3) {
            data = this._playerData.wingsArr
        }
        return data
    }

    static getItemData(): ItemData {
        if (!this._itemData) {
            this._itemData = new ItemData()
        }
        return this._itemData
    }

    static getInvalidSkins(): any[] {
        let arr: any[] = []
        for (let i = 0; i < 4; i++) {
            let dataArr: any[] = this.getDataByType(i)
            for (let j = 0; j < dataArr.length; j++) {
                if (PlayerDataMgr.isHideHuman) {
                    if (i == 0 && j == 7) continue
                    if (i == 1 && j == 6) continue
                    if (i == 1 && j == 7) continue
                }
                if (dataArr[j] == 0) {
                    arr.push([i, j])
                }
            }
        }
        return arr
    }

    static unlockBody() {
        for (let i = 0; i < this._playerData.bodyArr.length; i++) {
            if (this._playerData.bodyArr[i] == 0) {
                this._playerData.bodyArr[i] = 1
                this.setPlayerData()
                return
            }
        }
    }
}