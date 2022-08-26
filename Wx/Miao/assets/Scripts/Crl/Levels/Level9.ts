import { _decorator, Component, Node, UITransform, Vec3, Vec2 } from 'cc';
import { SoundMgr } from '../../Mod/SoundMgr';
import { GameLogic } from '../GameLogic';
import { MoveStage } from '../Prop/MoveStage';
const { ccclass, property } = _decorator;

@ccclass('Level9')
export class Level9 extends Component {

    @property(Node)
    moveStage1: Node = null
    @property(Node)
    moveStage2: Node = null
    @property(Node)
    switch: Node = null


    start() {
        this.switch.on(Node.EventType.TOUCH_START, this.collSwitch, this)
    }

    collSwitch() {
        SoundMgr.Share.PlaySound('take_item_positive')
        this.moveStage1.getComponent(MoveStage).canStart = true
        this.moveStage2.getComponent(MoveStage).canStart = true
        this.switch.children[0].active = false
        this.switch.children[1].active = true
    }

    update(deltaTime: number) {

    }
}

