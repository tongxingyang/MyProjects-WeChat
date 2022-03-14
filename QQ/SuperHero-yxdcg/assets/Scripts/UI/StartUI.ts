
import { _decorator, Component, Node, PageView, Label, tween, v3 } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('StartUI')
export class StartUI extends Component {

    @property(Node)
    iconContent: Node = null

    @property(Node)
    playerNode: Node = null

    @property(Label)
    skinTips: Label = null

    chooseIconId: number = 0

    start() {
        // [3]
        SoundMgr.Share.PlayMusic('Bgm')

        this.chooseIconId = PlayerDataMgr.getPlayerData().skinId
        this.scrollContent(PlayerDataMgr.getPlayerData().skinId)
        this.changePlayer(PlayerDataMgr.getPlayerData().skinId)

        FdMgr.inHomePage()
    }

    startBtnCB() {
        if (this.chooseIconId == 1 && PlayerDataMgr.getPlayerData().grade <= 5) {
            return
        }
        FdMgr.startGame(() => {
            UINode.Share.showUI(UIType.UI_GAME)
            GameLogic.Share.gameStart()
        })
    }

    changePlayer(id: number) {
        this.iconContent.children[1].children[0].active = PlayerDataMgr.getPlayerData().grade <= 5
        for (let i = 0; i < this.playerNode.children.length; i++) {
            this.playerNode.children[i].active = i == id
        }
        if (this.chooseIconId == 0) {
            this.skinTips.string = '超能异人'
        } else if (this.chooseIconId == 1) {
            if (PlayerDataMgr.getPlayerData().grade > 5)
                this.skinTips.string = '超能幽灵人'
            else
                this.skinTips.string = '解锁：完成1-5关'
        }
    }

    clickIcon(event, data) {
        let id = parseInt(data)
        this.chooseIconId = id
        this.changePlayer(this.chooseIconId)
        this.scrollContent(this.chooseIconId)
        if (id == 1 && PlayerDataMgr.getPlayerData().grade <= 5) {
            return
        }
        PlayerDataMgr.getPlayerData().skinId = this.chooseIconId
        PlayerDataMgr.setPlayerData()
    }

    scrollContent(id: number) {
        if (id == 0) {
            tween(this.iconContent).to(0.2, { position: v3(-57, this.iconContent.position.y) }).start()
        } else if (id == 1) {
            tween(this.iconContent).to(0.2, { position: v3(-57 - 124, this.iconContent.position.y) }).start()
        }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
