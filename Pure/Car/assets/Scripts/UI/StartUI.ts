import { _decorator, Component, Node, v3, tween, Animation } from 'cc';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('StartUI')
export class StartUI extends Component {

    @property(Node)
    carArr: Node[] = []

    start() {
        let car = this.carArr[PlayerDataMgr.getPlayerData().skinId]
        car.translate(v3(0, 0, -5))
        tween(car).to(1.5, { position: v3() }, { easing: "cubicOut" }).call(() => {
            car.getComponent(Animation).stop()
        }).start()
    }

    startGameBtnCB() {
        UINode.Share.closeUI(UIType.UI_START)
        GameLogic.Share.gameStart()
    }

    shopBtnCB() {

    }

    update(deltaTime: number) {

    }
}

