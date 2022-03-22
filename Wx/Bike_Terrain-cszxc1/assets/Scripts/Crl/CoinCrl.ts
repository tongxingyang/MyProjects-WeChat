
import { _decorator, Component, Node, Label } from 'cc';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('CoinCrl')
export class CoinCrl extends Component {

    update(deltaTime: number) {
        this.node.getComponent(Label).string = PlayerDataMgr.getPlayerData().coin.toString()
    }
}