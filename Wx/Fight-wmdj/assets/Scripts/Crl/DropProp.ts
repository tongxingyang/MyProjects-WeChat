import { _decorator, Component, Node, Label, Intersection2D, UITransform, tween, v3, UIOpacity, TTFFont } from 'cc';
import PlatformApi from '../Common/PlatformApi';
import { DropPropType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import Utility from '../Mod/Utility';
import { GameLogic } from './GameLogic';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('DropProp')
export class DropProp extends Component {

    type: DropPropType = null

    isGot: boolean = false
    isReady: boolean = false

    count: number = 0

    start() {

    }

    initData(type: DropPropType, isBoss: boolean = false) {
        this.type = type
        let count = Utility.GetRandom(1, GameLogic.Share.curGrade * 5) * 2
        if (type == 0) {
            this.node.getChildByName('upDownNode').getChildByName('zd_tips_dk').getComponentInChildren(Label).string = ':' + count
            count *= isBoss ? 2 : 1
        } else if (type == 1) {
            this.node.getChildByName('upDownNode').getChildByName('zd_tips_dk').getComponentInChildren(Label).string = ':' + count
            count *= isBoss ? 2 : 1
        } else if (type == 2) {
            count = 1
        } else if (type == 3) {
            count = 1
        } else if (type == 4) {
            count = 1
        } else if (type == 5) {
            count = 1
        }
        this.count = count
    }

    checkGot() {
        if (this.isGot || !this.isReady) return
        if (Math.abs(this.node.position.x - Player.Share.myPos.x) <= 150) {
            PlatformApi.doVibrate()
            SoundMgr.Share.PlaySound('getProp')
            this.isGot = true
            let type = this.type
            if (type == 0) {
                PlayerDataMgr.getPlayerData().material += this.count
                GameLogic.Share.gotMaterialsCount += this.count
            } else if (type == 1) {
                PlayerDataMgr.getPlayerData().soul += this.count
                GameLogic.Share.gotSoulCount += this.count
            } else if (type == 2) {
                PlayerDataMgr.getPlayerData().enchantArr[0] += this.count
                GameLogic.Share.gotEnchant1Count += this.count
            } else if (type == 3) {
                PlayerDataMgr.getPlayerData().enchantArr[1] += this.count
                GameLogic.Share.gotEnchant2Count += this.count
            } else if (type == 4) {
                PlayerDataMgr.getPlayerData().enchantArr[2] += this.count
                GameLogic.Share.gotEnchant3Count += this.count
            } else if (type == 5) {
                PlayerDataMgr.getPlayerData().enchantArr[3] += this.count
                GameLogic.Share.gotEnchant4Count += this.count
            }
            PlayerDataMgr.setPlayerData()
            if (type == 0 || type == 1) {
                tween(this.node).by(1, { position: v3(0, 100) }).call(() => {
                    this.node.destroy()
                }).start()
                tween(this.node.getComponent(UIOpacity)).to(1, { opacity: 0 }).start()
            } else {
                tween(this.node).by(1, { position: v3(0, 150) }).delay(1).call(() => {
                    tween(this.node.getComponent(UIOpacity)).to(1, { opacity: 0 }).start()
                }).start()
            }
        }
    }

    gotCB() {
        if (this.isGot) {
            this.node.destroy()
            return
        }
        this.isGot = true
        let type = this.type
        if (type == 0) {
            PlayerDataMgr.getPlayerData().material += this.count
            GameLogic.Share.gotMaterialsCount += this.count
        } else if (type == 1) {
            PlayerDataMgr.getPlayerData().soul += this.count
            GameLogic.Share.gotSoulCount += this.count
        } else if (type == 2) {
            PlayerDataMgr.getPlayerData().enchantArr[0] += this.count
            GameLogic.Share.gotEnchant1Count += this.count
        } else if (type == 3) {
            PlayerDataMgr.getPlayerData().enchantArr[1] += this.count
            GameLogic.Share.gotEnchant2Count += this.count
        } else if (type == 4) {
            PlayerDataMgr.getPlayerData().enchantArr[2] += this.count
            GameLogic.Share.gotEnchant3Count += this.count
        } else if (type == 5) {
            PlayerDataMgr.getPlayerData().enchantArr[3] += this.count
            GameLogic.Share.gotEnchant4Count += this.count
        }
        PlayerDataMgr.setPlayerData()
        this.node.destroy()
    }

    update(deltaTime: number) {
        this.checkGot()
    }
}

