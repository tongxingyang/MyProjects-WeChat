import { _decorator, Component, Node, Label } from 'cc';
import PlayerDataMgr from './PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('UpdateCoin')
export class UpdateCoin extends Component {
    str: Label = null
    onLoad() {
        this.str = this.getComponent(Label)
    }

    update(deltaTime: number) {
        this.str.string = PlayerDataMgr.getPlayerData().coin.toString()
    }
}

