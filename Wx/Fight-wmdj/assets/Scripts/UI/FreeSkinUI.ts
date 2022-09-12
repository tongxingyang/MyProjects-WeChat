import { _decorator, Component, Node, Sprite, Toggle } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import GameData from '../Crl/GameData';
import { Player } from '../Crl/Player';
import { UINode } from '../Crl/UINode';
import BundleMgr from '../Mod/BundleMgr';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('FreeSkinUI')
export class FreeSkinUI extends Component {

    @property(Node)
    closeBtn: Node = null
    @property(Node)
    tips: Node = null
    @property(Node)
    toggle: Node = null
    @property(Node)
    getBtn: Node = null
    @property(Node)
    noBtn: Node = null
    @property(Node)
    adSp: Node = null
    @property(Node)
    weapon: Node = null

    skinId: number = -1


    onEnable() {
        FdMgr.visibleGameBanner(false)
        if (FdMgr.selectvideo) {
            this.closeBtn.active = false
            this.tips.active = true
            this.toggle.active = true
            this.getBtn.active = true
            this.noBtn.active = false
            this.adSp.active = false
        } else {
            this.closeBtn.active = true
            this.tips.active = false
            this.toggle.active = false
            this.getBtn.active = true
            this.noBtn.active = false
            this.adSp.active = true
        }
        this.toggle.getComponent(Toggle).isChecked = true
        this.skinId = PlayerDataMgr.getFreeSkinId()
        if (this.skinId == -1) {
            this.scheduleOnce(this.closeBtnCB, 0.05)
            return
        }

        BundleMgr.setSpriteFrameInBundle(GameData.getWeaponDir(this.skinId, 1), this.weapon.getComponent(Sprite))
    }

    getBtnCB() {
        SoundMgr.Share.PlaySound('click')
        let cb = () => {
            PlayerDataMgr.freeSkinId = this.skinId
            Player.Share.resetData(this.skinId)
            Player.Share.changeWeapon(this.skinId)
            UINode.Share.closeUI(UIType.UI_FREESKIN)
        }
        FdAd.showVideoAd(cb)
    }

    closeBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.closeUI(UIType.UI_FREESKIN)
    }

    update(deltaTime: number) {
        if (FdMgr.selectvideo) {
            this.getBtn.active = this.toggle.getComponent(Toggle).isChecked
            this.noBtn.active = !this.getBtn.active
        }
    }
}

