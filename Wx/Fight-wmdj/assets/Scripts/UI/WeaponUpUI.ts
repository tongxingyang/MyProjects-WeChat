import { _decorator, Component, Node, Sprite, Label,Animation } from 'cc';
import GameData from '../Crl/GameData';
import { GameLogic } from '../Crl/GameLogic';
import { Player } from '../Crl/Player';
import { UINode } from '../Crl/UINode';
import BundleMgr from '../Mod/BundleMgr';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
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
        
        let weaponType = GameData.weaponData[PlayerDataMgr.getPlayerData().weaponId].type
        this.player.getComponent(Animation).play('Idle' + (weaponType + 1))
    }

    upgradeBtnCB() {
        SoundMgr.Share.PlaySound('click')
        if (PlayerDataMgr.getPlayerData().material < 500) {
            //材料不足
            UINode.Share.showUI(UIType.UI_GOTOSHOP, false, () => {
                UINode.Share.showUI(UIType.UI_WEAPONUP)
            })
            return
        }
        GameLogic.Share.createTips('武器强化成功')
        let id = PlayerDataMgr.getPlayerData().weaponId
        PlayerDataMgr.getPlayerData().material -= 500
        PlayerDataMgr.getPlayerData().weaponUpArr[id] += 1
        PlayerDataMgr.setPlayerData()
        this.updateAtk()
    }

    closeBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_START)
        Player.Share.resetData()
    }

    update(deltaTime: number) {

    }
}

