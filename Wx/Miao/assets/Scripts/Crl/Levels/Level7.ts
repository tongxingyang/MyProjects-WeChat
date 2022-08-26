import { _decorator, Component, Node, UITransform, Vec3, Vec2 } from 'cc';
import { SoundMgr } from '../../Mod/SoundMgr';
import { GameLogic } from '../GameLogic';
import { MoveStage } from '../Prop/MoveStage';
const { ccclass, property } = _decorator;

@ccclass('Level7')
export class Level7 extends Component {

    @property(Node)
    moveStage1: Node = null
    @property(Node)
    moveStage2: Node = null
    @property(Node)
    switch: Node = null

    collingSwitch: boolean = false
    isOpened: boolean = false

    start() {

    }

    collSwitch() {
        if (this.isOpened) return
        if (Vec2.distance(this.switch.position, GameLogic.Share.player.position) <= 50) {
            SoundMgr.Share.PlaySound('take_item_positive')
            this.collingSwitch = true
            this.isOpened = true
            this.moveStage1.getComponent(MoveStage).canStart = true
            this.moveStage2.getComponent(MoveStage).canStart = true

            this.switch.children[0].active = false
            this.switch.children[1].active = true
        } else {
            this.collingSwitch = false
            this.switch.children[0].active = true
            this.switch.children[1].active = false
        }
    }

    update(deltaTime: number) {
        this.collSwitch()
    }
}

