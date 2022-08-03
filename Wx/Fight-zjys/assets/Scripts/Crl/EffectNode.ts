import { _decorator, Component, Node, Prefab, Vec3, instantiate, Animation } from 'cc';
import Utility from '../Mod/Utility';
const { ccclass, property } = _decorator;

@ccclass('EffectNode')
export class EffectNode extends Component {

    static Share: EffectNode = null

    @property(Prefab)
    SwordEffect: Prefab = null
    @property(Prefab)
    MonsterHurtEffect: Prefab[] = []
    @property(Prefab)
    CriticalFX: Prefab = null

    onLoad() {
        EffectNode.Share = this
    }

    start() {

    }

    createSwordEffect(pos: Vec3) {
        for (let i = 0; i < Utility.GetRandom(1, 2); i++) {
            let se = instantiate(this.SwordEffect)
            this.node.addChild(se)
            se.angle = Math.random() * 360
            se.position = pos
            se.setSiblingIndex(999)
            this.scheduleOnce(() => {
                if (se && se.isValid)
                    se.destroy()
            }, 1)
        }
    }

    createMonsterHurtEffect(type: number, pos: Vec3, scale?: Vec3) {
        let se = instantiate(this.MonsterHurtEffect[type])
        if (scale)
            se.setScale(scale)
        this.node.addChild(se)
        se.position = pos
        se.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
            se.destroy()
        }, this)
    }

    createCriticalEffect(pos: Vec3) {
        let fx = instantiate(this.CriticalFX)
        this.node.addChild(fx)
        fx.position = pos
        fx.setSiblingIndex(999)
        this.scheduleOnce(() => {
            if (fx && fx.isValid)
                fx.destroy()
        }, 0.5)
    }

}

