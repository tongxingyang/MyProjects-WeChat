export enum UIType {
    UI_START = 'StartUI',
    UI_SHOP = 'ShopUI',
    UI_GAME = 'GameUI',
    UI_FINISH = 'FinishUI',
    UI_WEAPON = 'WeaponUI',
    UI_WEAPONUP = 'WeaponUpUI',
    UI_WEAPONENCHANT = 'WeaponEnchantUI',
    UI_PLAYERUP = 'PlayerUpUI',
    UI_SETTING = 'SettingUI',
    UI_GOTOSHOP = 'GoToShopUI',
    UI_ONLINE = 'OnlineUI',
    UI_RANK = 'RankUI'
}

export enum MonsterAniType {
    Type_Idle = 'Idle',
    Type_Run = 'Run',
    Type_Attack = 'Attack',
    Type_Skill = 'Skill',
    Type_Hurt = 'Hurt',
    Type_Died = 'Died'
}

export enum DropPropType {
    Type_Material = 0,
    Type_Soul,
    Type_Enchant1,
    Type_Enchant2,
    Type_Enchant3,
    Type_Enchant4
}

export class RankData {
    rank: number = -1
    nickName: string = ''
    score: number = 0
}