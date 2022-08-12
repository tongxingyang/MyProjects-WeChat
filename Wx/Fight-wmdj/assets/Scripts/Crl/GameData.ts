import PlayerDataMgr from "../Mod/PlayerDataMgr"

export default class GameData {
    static isMusic: boolean = true
    static isSound: boolean = true
    static isVibrate: boolean = true

    static hadShowOnlineGift: boolean = false
    static VectorTrackDataArr: any[] = []

    //武器数据
    //type:0刀  1枪  2剑  3棍  4双刀
    static weaponData: any[] = [
        { id: 1, type: 0, atk: 100 }, { id: 2, type: 0, atk: 120 }, { id: 3, type: 0, atk: 140 }, { id: 4, type: 0, atk: 160 }, { id: 5, type: 0, atk: 200 },
        { id: 6, type: 1, atk: 120 }, { id: 7, type: 1, atk: 140 }, { id: 8, type: 1, atk: 160 }, { id: 9, type: 1, atk: 180 }, { id: 10, type: 1, atk: 200 },
        { id: 11, type: 2, atk: 120 }, { id: 12, type: 2, atk: 140 }, { id: 13, type: 2, atk: 160 }, { id: 14, type: 2, atk: 180 }, { id: 15, type: 2, atk: 200 },
        { id: 16, type: 3, atk: 120 }, { id: 17, type: 3, atk: 140 }, { id: 18, type: 3, atk: 160 }, { id: 19, type: 3, atk: 180 }, { id: 20, type: 3, atk: 200 }
    ]

    //武器价格
    static weaponCost: number[] = [
        0, 5888, 8888, 11888, 18888,
        5888, 8888, 11888, 13888, 18888,
        5888, 8888, 11888, 13888, 18888,
        5888, 8888, 11888, 13888, 18888
    ]

    //技能冷却
    static skillCoolTime: any[] = [
        [3, 3], [4, 4], [4, 3], [4, 4], [4, 4],
        [3, 3], [3, 3], [3, 3], [5, 3], [5, 3],
        [3, 3], [4, 3], [4, 4], [5, 3], [5, 4],
        [4, 4], [4, 4], [4, 4], [4, 3], [4, 4]
    ]

    static weaponOpenArr: any[] = [
        1, 1, 1, 1, 1,
        1, 1, 1, 1, 1,
        1, 1, 1, 1, 1,
        1, 1, 1, 1, 1
    ]

    //获取武器攻击力
    //攻击力 = （人物基础攻击力 + 武器基础攻击力+ 武器强化等级*5）* （1+附魔次数%）
    static getWeaponAtk(weaponId: number): number {
        let atk: number = 0
        atk =
            (PlayerDataMgr.getPlayerData().attack + this.weaponData[weaponId].atk + PlayerDataMgr.getPlayerData().weaponUpArr[weaponId] * 5)
            * (1 + PlayerDataMgr.getPlayerData().weaponEnchantArr[weaponId] * 0.01)
        return atk
    }

    static getWeaponDir(id: number, type: number = 0): string {
        let dir = ''
        if (id < 5) {
            dir = 'Texture/Weapon/knife' + (id + 1) + '_' + (type + 1)
        } else if (id < 10) {
            id -= 5
            dir = 'Texture/Weapon/spear' + (id + 1) + '_' + (type + 1)
        } else if (id < 15) {
            id -= 10
            dir = 'Texture/Weapon/sword' + (id + 1) + '_' + (type + 1)
        } else if (id < 20) {
            id -= 15
            dir = 'Texture/Weapon/stick' + (id + 1) + '_' + (type + 1)
        }
        return dir
    }

    static getWeaponIndexById(id: number) {
        if (id < 5) {
        } else if (id < 10) {
            id -= 5
        } else if (id < 15) {
            id -= 10
        } else if (id < 20) {
            id -= 15
        }
        return id
    }
}