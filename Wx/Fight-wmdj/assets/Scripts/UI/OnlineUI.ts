import { _decorator, Component, Node, Toggle } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import GameData from '../Crl/GameData';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import { OnlineTimeMgr } from '../Mod/OnlineTimeMgr';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('OnlineUI')
export class OnlineUI extends Component {

    @property(Node)
    sureBtn: Node = null
    @property(Node)
    sureBtn1: Node = null
    @property(Node)
    getBtn: Node = null
    @property(Toggle)
    toggle: Toggle = null
    @property(Node)
    tips: Node = null

    countArr: number[] = [10000, 5000, 5, 5, 5, 5]

    needVideo: boolean = true

    start() {
        GameData.hadShowOnlineGift = true
    }

    onEnable() {
        this.toggle.isChecked = true
        // if (OnlineTimeMgr.Share.time >= OnlineTimeMgr.Share.giftTime && !OnlineTimeMgr.Share.hadGotOnlineGift) {
        //     this.sureBtn.active = false
        //     this.getBtn.active = true
        //     this.needVideo = false
        // }
    }

    getBtnCB() {
        SoundMgr.Share.PlaySound('click')
        let cb = () => {
            PlayerDataMgr.getPlayerData().material += this.countArr[0]
            PlayerDataMgr.getPlayerData().soul += this.countArr[1]
            PlayerDataMgr.getPlayerData().enchantArr[0] += this.countArr[2]
            PlayerDataMgr.getPlayerData().enchantArr[1] += this.countArr[3]
            PlayerDataMgr.getPlayerData().enchantArr[2] += this.countArr[4]
            PlayerDataMgr.getPlayerData().enchantArr[3] += this.countArr[5]
            PlayerDataMgr.setPlayerData();
            OnlineTimeMgr.Share.hadGotOnlineGift = true

            for (let i = 0; i < 6; i++) {
                GameLogic.Share.scheduleOnce(() => {
                    if (i == 0) {
                        GameLogic.Share.createTips('恭喜获得材料x' + this.countArr[0])
                    } else if (i == 1) {
                        GameLogic.Share.createTips('恭喜获得魂x' + this.countArr[1])
                    } else if (i == 2) {
                        GameLogic.Share.createTips('恭喜获得火焰附魔石x' + this.countArr[2])
                    } else if (i == 3) {
                        GameLogic.Share.createTips('恭喜获得寒冰附魔石x' + this.countArr[3])
                    } else if (i == 4) {
                        GameLogic.Share.createTips('恭喜获得雷电附魔石x' + this.countArr[4])
                    } else if (i == 5) {
                        GameLogic.Share.createTips('恭喜获得剧毒附魔石x' + this.countArr[5])
                    }
                }, i * 0.5)
            }
            UINode.Share.closeUI(UIType.UI_ONLINE)
        }
        if (this.needVideo) {
            FdAd.showVideoAd(cb)
        } else {
            cb()
        }
    }


    closeBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.closeUI(UIType.UI_ONLINE)
    }

    update(deltaTime: number) {
        if(FdMgr.selectvideo){
            if (OnlineTimeMgr.Share.time >= OnlineTimeMgr.Share.giftTime && !OnlineTimeMgr.Share.hadGotOnlineGift) {
                this.needVideo = false
            } else {
                this.needVideo = this.toggle.isChecked
            }
    
            this.getBtn.active = this.needVideo || (OnlineTimeMgr.Share.time >= OnlineTimeMgr.Share.giftTime && !OnlineTimeMgr.Share.hadGotOnlineGift)
            this.sureBtn.active = !this.getBtn.active
            this.toggle.node.active = !(OnlineTimeMgr.Share.time >= OnlineTimeMgr.Share.giftTime && !OnlineTimeMgr.Share.hadGotOnlineGift)
            this.tips.active = this.toggle.node.active
        }else{
            this.needVideo = false
            this.getBtn.active = OnlineTimeMgr.Share.time >= OnlineTimeMgr.Share.giftTime && !OnlineTimeMgr.Share.hadGotOnlineGift
            this.sureBtn.active = false
            this.sureBtn1.active = !this.getBtn.active
            this.toggle.node.active = false
            this.tips.active = false
        }
        
    }
}

