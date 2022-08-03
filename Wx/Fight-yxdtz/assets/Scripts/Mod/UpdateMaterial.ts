import { _decorator, Component, Node, Label } from 'cc';
import PlayerDataMgr from './PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('UpdateMaterial')
export class UpdateMaterial extends Component {

    str: Label = null

    onLoad() {
        this.str = this.getComponent(Label)
    }

    start() {

    }

    update(deltaTime: number) {
        this.str.string = PlayerDataMgr.getPlayerData().material.toString()
    }
}

