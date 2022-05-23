import GameLogic from "../GameLogic"
import Utility from "../../Mod/Utility";
import SoundMgr from "../../Mod/SoundMgr";

export default class FireWork6 extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null
    fire: Laya.Sprite3D = null
    base: Laya.Sprite3D = null

    count: number = 0

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
        this.base = Utility.findNodeByName(this.myOwner, 'Base')
        this.fire = Utility.findNodeByName(this.myOwner, 'fire')
        this.fire.active = true
        let fireParent = this.fire.parent as Laya.Sprite3D
        let pos = fireParent.transform.position.clone()
        pos.y += 0.1
        Utility.TmoveTo(fireParent, 2000, pos, () => {
            GameLogic.Share._cameraCrl.isLookAt = false
            Laya.timer.once(Math.random() * 4000, this, () => {
                this.initData()
            })
        })
        SoundMgr.instance.playSoundEffect('fitil.mp3')
    }

    initData() {
        this.shoot()
    }

    shoot() {
        SoundMgr.instance.playSoundEffect('rocketLaunchBig_1.mp3')
        this.base.active = true

        let pos = this.myOwner.transform.position.clone()
        pos.y += (Math.random() * 6 - 3) + 20
        pos.x += Math.random() * 10 - 5
        Utility.TmoveTo(this.myOwner, 1500, pos, () => {
            this.createFW(this.myOwner.transform.position.clone())
            this.myOwner.destroy()
        }, Laya.Ease.linearIn)
    }

    createFW(pos: Laya.Vector3) {
        Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1)
        SoundMgr.instance.playSoundEffect('BsExpl10_tresk.mp3')
        let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(Utility.GetRandom(0, 5)) as Laya.Sprite3D;
        let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
        pt.transform.position = pos;
        let s = Math.random() * 5 + 10
        pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
        pt.active = true;
        (pt as Laya.ShuriKenParticle3D).particleSystem.startLifetimeConstant = 2
        //Laya.timer.once(1500, this, () => { pt.destroy() })
    }

    onUpdate() {

    }
}