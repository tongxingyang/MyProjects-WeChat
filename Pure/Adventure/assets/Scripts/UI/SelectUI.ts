import { _decorator, Component, Node, instantiate, Label, Button, EventHandler, path, v3, PageView } from 'cc';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('SelectUI')
export class SelectUI extends Component {

    @property(PageView)
    pageView: PageView = null
    @property(Node)
    pagePrefab: Node = null
    @property(Node)
    itemPrefab: Node = null
    @property(Node)
    content: Node = null

    start() {
        this.updatePageView()
    }

    updatePageView() {
        let count = Math.round(PlayerDataMgr.maxGrade / 15)
        for (let i = 0; i < count; i++) {
            let page = instantiate(this.pagePrefab)
            page.active = true
            page.position = v3()
            for (let j = 0; j < 15; j++) {
                let id = j + 15 * i + 1

                let item = instantiate(this.itemPrefab)
                item.active = true
                item.position = v3()
                let num = item.getChildByName('num')
                let lock = item.getChildByName('lock')
                let tick = item.getChildByName('tick')
                let soon = item.getChildByName('soon')
                num.getComponent(Label).string = id.toString()
                lock.active = id > PlayerDataMgr.getPlayerData().grade && id <= PlayerDataMgr.maxGrade
                tick.active = id < PlayerDataMgr.getPlayerData().grade && id <= PlayerDataMgr.maxGrade
                soon.active = id > PlayerDataMgr.maxGrade

                let btnCom: Button = item.addComponent(Button)
                btnCom.transition = Button.Transition.SCALE
                let eventHandler = new EventHandler();
                eventHandler.target = this.node;
                eventHandler.component = "SelectUI";
                eventHandler.handler = "chooseCB";
                eventHandler.customEventData = id.toString();
                btnCom.clickEvents.push(eventHandler)
                page.addChild(item)
            }
            this.pageView.addPage(page)
        }
    }

    chooseCB(evt, data) {
        let id = parseInt(data)

        SoundMgr.Share.PlaySound('click')
        if (id > PlayerDataMgr.getPlayerData().grade) {
            return
        }

        if (PlayerDataMgr.getPlayerData().power > 0) {
            GameLogic.Share.gameStart(id)
            UINode.Share.showUI(UIType.UI_GAME)
        } else {
            UINode.Share.showUI(UIType.UI_POWER, () => {
                UINode.Share.showUI(UIType.UI_SELECT)
            })
        }
    }

    leftBtnCB() {
        let p = this.pageView.getCurrentPageIndex()
        p--
        if (p < 0) p = 0
        this.pageView.scrollToPage(p, 0.2)
    }
    rightBtnCB() {
        let p = this.pageView.getCurrentPageIndex()
        p++
        if (p >= this.content.children.length) p = this.content.children.length - 1
        this.pageView.scrollToPage(p, 0.2)
    }

    backBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_START)
    }

    update(deltaTime: number) {

    }
}

