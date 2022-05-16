import GameLogic from "../GameLogic"
import Utility from "../../Mod/Utility";
import SoundMgr from "../../Mod/SoundMgr";

export default class FireWork3 extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null
    fire: Laya.Sprite3D = null
    fw3: Laya.Sprite3D = null

    count: number = 0

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
        this.fw3 = Utility.findNodeByName(this.myOwner, 'fw3')
        this.fire = Utility.findNodeByName(this.myOwner, 'fire')
        this.fire.active = true
        let fireParent = this.fire.parent as Laya.Sprite3D
        let pos = fireParent.transform.position.clone()
        pos.y -= 0.1
        Utility.TmoveTo(fireParent, 2000, pos, null)

        SoundMgr.instance.playSoundEffect('fitil.mp3')
        SoundMgr.instance.playSoundEffect('BlackDeathZ.mp3')
        Laya.timer.once(2000, this, () => {
            this.fw3.active = true
            GameLogic.Share._cameraCrl.isLookAt = false
            Laya.timer.once(3000, this, () => {
                Utility.findNodeByName(this.owner as Laya.Sprite3D, 'fire').active = false
                this.initData()
            })
        })
    }

    initData() {
        this.shoot()
        Laya.timer.once(8000, this, () => {
            this.fw3.active = false
            GameLogic.Share.gameOver(true)
        })
    }

    shoot() {
        for (let i = 0; i < 10; i++) {
            Laya.timer.once(i * 500 + (Math.random() * 400 - 200), this, () => {
                this.createBase()
            })
        }
    }
    
    createBase() {
        SoundMgr.instance.playSoundEffect('BsLaunch08_1.mp3')
        let res = GameLogic.Share._scene.getChildByName('Base') as Laya.Sprite3D
        let base = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
        base.active = true
        let bPos = base.transform.position.clone()
        bPos.y = this.fire.transform.position.y
        base.transform.position = bPos

        let pos = base.transform.position.clone()
        pos.y += (Math.random() * 6 - 3) + 20
        pos.x += Math.random() * 10 - 5
        Utility.TmoveTo(base, 2000, pos, () => {
            this.createFW(base.transform.position.clone())
            base.destroy()
        }, Laya.Ease.linearIn)
    }

    createFW(pos: Laya.Vector3) {
        Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1)
        SoundMgr.instance.playSoundEffect('BsExpl08_3.mp3')
        let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(Utility.GetRandom(1, 2)) as Laya.Sprite3D;
        let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
        pt.transform.position = pos;
        let s = Math.random() * 3 + 10
        pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
        pt.active = true;
        (pt as Laya.ShuriKenParticle3D).particleSystem.startLifetimeConstant = 2
        //Laya.timer.once(1500, this, () => { pt.destroy() })
    }

    onUpdate() {

    }
}