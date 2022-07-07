import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, tween, v3 } from 'cc';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('QBrick')
export class QBrick extends Component {
    boxCollider: BoxCollider2D = null

    isGot: boolean = false

    @property(Node)
    flag: Node = null
    @property(Node)
    fallCi: Node = null
    @property(Node)
    fallNode: Node = null
    @property(Node)
    monster: Node = null
    @property
    type: number = 0

    onLoad() {
        this.boxCollider = this.getComponents(BoxCollider2D)[1]
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onGroundCollider, this)
    }

    onGroundCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (!this.isGot && otherCollider.node.name == 'player' && selfCollider.tag == 1) {
            this.isGot = true;
            this.scheduleOnce(() => {
                this['type' + this.type]();
            })
        }
    }

    //移动
    type0() {
        tween(this.node).by(.5, { position: v3(0, 200, 0) }).start()
    }
    //下落地面
    type1() {
        this.node.children[0].active = false
        this.node.children[1].active = true
        this.fallNode.getChildByName('flag').active = true
        tween(this.node).by(.1, { position: v3(0, 20, 0) }).by(.1, { position: v3(0, -20, 0) }).start()
        for (let i = 0; i < this.fallNode.children.length; i++) {
            tween(this.fallNode.children[i]).by(.2, { position: v3(0, -700, 0) }).start()
        }
    }
    //有刺
    type2() {
        this.node.children[0].active = false
        this.node.children[1].active = true
        GameLogic.Share.gameOver(false)
    }
    //出怪物
    type3() {
        tween(this.node).by(.1, { position: v3(0, 20, 0) }).by(.1, { position: v3(0, -20, 0) }).start()
        this.node.children[0].active = false
        this.node.children[1].active = true
        this.monster.active = true
    }
    //出金币
    type4() {
        tween(this.node).by(.1, { position: v3(0, 20, 0) }).by(.1, { position: v3(0, -20, 0) }).start()
        this.node.children[0].active = false
        this.node.children[1].active = true
    }
    //掉落刺
    type5() {
        this.node.children[0].active = false
        this.node.children[1].active = true
        tween(this.node).by(.1, { position: v3(0, 20, 0) }).by(.1, { position: v3(0, -20, 0) }).start()
        tween(this.fallCi).by(1, { position: v3(0, -1000, 0) }).start()
    }
    //下落部件
    type6() {
        this.flag.active = true
        this.node.children[0].active = false
        this.node.children[1].active = true
        tween(this.node).by(.1, { position: v3(0, 20, 0) }).by(.1, { position: v3(0, -20, 0) }).start()
        for (let i = 0; i < this.fallNode.children.length; i++) {
            tween(this.fallNode.children[i]).by(.2, { position: v3(0, -700, 0) }).start()
        }
    }

    update(deltaTime: number) {

    }
}

