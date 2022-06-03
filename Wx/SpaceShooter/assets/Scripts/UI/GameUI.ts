
import { _decorator, Component, Node, Label, director, EventTouch, game, view, v3, Vec3, instantiate, tween, UITransform, Prefab, resources } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
import { Plane } from '../Crl/Plane';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import Utility from '../Mod/Utility';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends Component {

    static Share: GameUI

    lvNode: Node = null
    touchNode: Node = null
    lifeNode: Node = null

    onLoad() {
        this.lvNode = this.node.getChildByName('lvNode')
        this.touchNode = this.node.getChildByName('touchNode')
        this.lifeNode = this.node.getChildByName('lifeNode')
        this.touchNode.on(Node.EventType.TOUCH_START, this.touchStart, this)
        this.touchNode.on(Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.touchNode.on(Node.EventType.TOUCH_END, this.touchEnd, this)
        this.touchNode.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
    }

    start() {
        GameUI.Share = this
        // [3]
        FdMgr.inGame()
    }

    touchStart(evt: EventTouch) {
        if (!GameLogic.Share.isStart || GameLogic.Share.isPause || GameLogic.Share.isGameOver) return
        let pos = evt.getUILocation()
        pos.x -= view.getVisibleSize().width / 2
        pos.y -= view.getVisibleSize().height / 2
        Plane.Share.node.setPosition(v3(pos.x, pos.y + 100))
    }
    touchMove(evt: EventTouch) {
        if (!GameLogic.Share.isStart || GameLogic.Share.isPause || GameLogic.Share.isGameOver) return
        let pos = evt.getUILocation()
        pos.x -= view.getVisibleSize().width / 2
        pos.y -= view.getVisibleSize().height / 2
        Plane.Share.node.setPosition(v3(pos.x, pos.y + 100))
    }
    touchEnd(evt: EventTouch) {
        if (!GameLogic.Share.isStart || GameLogic.Share.isPause || GameLogic.Share.isGameOver) return
    }

    getCoinEffect(startPos: Vec3) {
        SoundMgr.Share.PlaySound('getCoin')
        PlayerDataMgr.getPlayerData().coin += 10
        PlayerDataMgr.setPlayerData()
        resources.load('Prefabs/Effects/getCoinFX', Prefab, (err, res) => {
            let fx = instantiate(res)
            fx.setPosition(startPos)
            fx.active = true
            this.node.addChild(fx)
            this.scheduleOnce(() => { fx.destroy() }, 2)
        })
    }

    update(deltaTime: number) {
        // [4]
        for (let i = 0; i < this.lvNode.children.length; i++) {
            this.lvNode.children[i].children[0].active = Plane.Share._lv > i + 1
        }

        for (let i = 0; i < this.lifeNode.children.length; i++) {
            let l = this.lifeNode.children[i]
            l.children[0].active = i < Plane.Share.lifeCount
        }
    }
}