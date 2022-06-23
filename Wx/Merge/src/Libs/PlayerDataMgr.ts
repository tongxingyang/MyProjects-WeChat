
export class ItemId {
    bodyId: number = 0
    handId: number = 0
    backId: number = 0
    type: number = 1
}

export class PlayerData {
    grade: number = 1
    skinArr: number[] = [1, 0, 0, 0, 0, 0, 0, 0]
    itemArr: number[] = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    chooseArr: ItemId[] = []
}

export default class PlayerDataMgr {
    private static _playerData: PlayerData = null
    static levelDataArr: any[] = []

    //获取用户数据
    public static getPlayerData(): PlayerData {
        if (!localStorage.getItem('playerData')) {
            this._playerData = new PlayerData()
            // for (let i = 0; i < 2; i++) {
            //     let item = new ItemId()
            //     item.bodyId = i
            //     item.handId = i
            //     item.backId = i
            //     item.type = i + 1
            //     this._playerData.chooseArr.push(item)
            // }
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

    public static setChooseItem(bodyId: number, handId: number, backId: number, type: number) {
        let item: ItemId = new ItemId()
        item.bodyId = bodyId
        item.handId = handId
        item.backId = backId
        item.type = type

        if (this._playerData.chooseArr.length < 3) this._playerData.chooseArr.push(item)
        else {
            this._playerData.chooseArr.shift()
            this._playerData.chooseArr.push(item)
        }
        this.setPlayerData()
    }

    public static getBodyNameById(id: number): string {
        let str: string = ''
        switch (id) {
            case 0:
                str = '可乐'
                break
            case 1:
                str = '斑马'
                break
            case 2:
                str = '消防栓'
                break
            case 3:
                str = '章鱼怪'
                break
            case 4:
                str = '剪刀怪'
                break
            case 5:
                str = '呆呆鸟'
                break
            case 6:
                str = '面包机'
                break
            case 7:
                str = '奶牛'
                break
        }
        return str
    }
    public static getItemNameById(id: number): string {
        let str: string = ''
        switch (id) {
            case 0:
                str = '可乐手臂'
                break
            case 1:
                str = '斑马腿'
                break
            case 2:
                str = '喷水枪'
                break
            case 3:
                str = '章鱼触手'
                break
            case 4:
                str = '剪刀手'
                break
            case 5:
                str = '翅膀'
                break
            case 6:
                str = '机器手臂'
                break
            case 7:
                str = '牛奶壶'
                break
            case 8:
                str = '假手'
                break
            case 9:
                str = '喷胶器'
                break
            case 10:
                str = '马桶'
                break
            case 11:
                str = '怪物手臂'
                break
            case 12:
                str = '铁棒'
                break
            case 13:
                str = '植物手'
                break
        }
        return str
    }

    public static getSkillTimeByTypeId(id: number) {
        let time: number = 0
        switch (id) {
            case 1:
                time = Math.random() * 2 + 6
                break
            case 2:
                time = Math.random() * 2 + 5.5
                break
            case 3:
                time = Math.random() * 2 + 5
                break
            case 4:
                time = Math.random() * 2 + 4.5
                break
            case 5:
                time = Math.random() * 2 + 4
                break
        }
        return time
    }

    public static getAttackEventTime(bodyId: number) {
        let time: number = 0
        switch (bodyId) {
            case 0:
                time = 1330
                break
            case 1:
                time = 880
                break
            case 2:
                time = 880
                break
            case 3:
                time = 880
                break
            case 4:
                time = 1000
                break
            case 5:
                time = 1200
                break
            case 6:
                time = 750
                break
            case 7:
                time = 880
                break
        }
        return time
    }

    public static getDamageByType(type: number) {
        let dmg: number = 0
        switch (type) {
            case 1:
                dmg = Math.random() * 50 + 30
                break
            case 2:
                dmg = Math.random() * 50 + 40
                break
            case 3:
                dmg = Math.random() * 50 + 50
                break
            case 4:
                dmg = Math.random() * 50 + 60
                break
            case 5:
                dmg = Math.random() * 50 + 70
                break
        }
        return dmg
    }

    public static getHpByType(type: number) {
        let hp: number = 0
        switch (type) {
            case 1:
                hp = Math.random() * 200 + 500
                break
            case 2:
                hp = Math.random() * 200 + 600
                break
            case 3:
                hp = Math.random() * 200 + 700
                break
            case 4:
                hp = Math.random() * 200 + 800
                break
            case 5:
                hp = Math.random() * 200 + 900
                break
        }
        return hp
    }
}