import { _decorator, Component, Node, Sprite, Label } from 'cc';
import GameData from '../Crl/GameData';
import { Player } from '../Crl/Player';
import { UINode } from '../Crl/UINode';
import BundleMgr from '../Mod/BundleMgr';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('WeaponUpUI')
export class WeaponUpUI extends Component {

    @property(Node)
    player: Node = null
    @property(Node)
    playerWeapon: Node = null
    @property(Node)
    item: Node = null
    @property(Label)
    atkStr1: Label = null
    @property(Label)
    atkStr2: Label = null
    @property(Label)
    weaponAtkStr: Label = null

    onEnable() {
        let weapon = this.item.getChildByName('weapon').getComponent(Sprite)
        BundleMgr.setSpriteFrameInBundle(GameData.getWeaponDir(PlayerDataMgr.getPlayerData().weaponId, PlayerDataMgr.getWeaponEnchantType()), weapon)
        BundleMgr.setSpriteFrameInBundle(GameData.getWeaponDir(PlayerDataMgr.getPlayerData().weaponId, PlayerDataMgr.getWeaponEnchantType()), this.playerWeapon.getComponent(Sprite))
        this.updateAtk()
    }

    updateAtk() {
        this.atkStr1.string = PlayerDataMgr.getPlayerData().attack.toString()

        let id = PlayerDataMgr.getPlayerData().weaponId
        let atk = GameData.weaponData[id].atk + PlayerDataMgr.getPlayerData().weaponUpArr[id] * 5
        this.weaponAtkStr.string = atk.toString()

        this.atkStr2.string = '<' + atk
    }

    upgradeBtnCB() {
        if (PlayerDataMgr.getPlayerData().material < 500) {
            return
        }
        let id = PlayerDataMgr.getPlayerData().weaponId
        PlayerDataMgr.getPlayerData().material -= 500
        PlayerDataMgr.getPlayerData().weaponUpArr[id] += 1
        PlayerDataMgr.setPlayerData()
        this.updateAtk()
    }

    closeBtnCB() {
        UINode.Share.showUI(UIType.UI_START)
        Player.Share.resetData()
    }

    update(deltaTime: number) {

    }
}

