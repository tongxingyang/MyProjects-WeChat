import Utility from "../Mod/Utility";
import GameLogic from "./GameLogic";

export default class Effects {

    private static getFXByName(name: string, parent: Laya.Sprite3D) {
        let res = GameLogic.Share._effectNode.getChildByName(name) as Laya.Sprite3D
        let fx = Laya.Sprite3D.instantiate(res, parent, false, new Laya.Vector3())
        return fx
    }

    //水花
    static createWaterSpray(pos: Laya.Vector3) {
        let fx = this.getFXByName('FX_Water_Spray', GameLogic.Share._levelNode)
        fx.transform.position = pos
        Laya.timer.once(1000, this, () => {
            if (fx && !fx.destroyed) fx.destroy()
        })
    }

    //龙卷风
    static createWindTurn(pos: Laya.Vector3) {
        let fx = this.getFXByName('FX_Wind_Turn', GameLogic.Share._levelNode)
        fx.transform.position = pos
        Laya.timer.once(4000, this, () => {
            if (fx && !fx.destroyed) fx.destroy();
        });
        (fx.getChildAt(0).getChildAt(0) as Laya.MeshSprite3D).meshRenderer.receiveShadow = false;
    }

    //烟雾
    static createSmoke(pos: Laya.Vector3) {
        let fx = this.getFXByName('FX_Smoke_1', GameLogic.Share._levelNode)
        fx.transform.position = pos
        Laya.timer.once(2000, this, () => {
            if (fx && !fx.destroyed) fx.destroy()
        })
    }

    //液体受击
    static createHurt1(pos: Laya.Vector3) {
        let fx = this.getFXByName('FX_TakeDamage_1', GameLogic.Share._levelNode)
        fx.transform.position = pos
        Laya.timer.once(1000, this, () => {
            if (fx && !fx.destroyed) fx.destroy()
        })
    }

    //金币受击
    static createHurt2(pos: Laya.Vector3) {
        let fx = this.getFXByName('FX_TakeDamage_2', GameLogic.Share._levelNode)
        fx.transform.position = pos
        Laya.timer.once(1000, this, () => {
            if (fx && !fx.destroyed) fx.destroy()
        })
    }

    //近身受击
    static createHurt3(pos: Laya.Vector3) {
        let fx = this.getFXByName('FX_TakeDamage_3', GameLogic.Share._levelNode)
        fx.transform.position = pos
        Laya.timer.once(1000, this, () => {
            if (fx && !fx.destroyed) fx.destroy()
        })
    }

    //技能
    static createFlyCast(node: Laya.Sprite3D) {
        let pos = node.transform.position.clone()
        pos.y += 1
        let fx = this.getFXByName('FX_FlyCast_1', node)
        fx.transform.position = pos
        Laya.timer.once(3000, this, () => {
            if (fx && !fx.destroyed) fx.destroy()
        })

        let fx1 = this.getFXByName('FX_FlyCast_2', node)
        fx1.transform.position = pos
        Laya.timer.once(2500, this, () => {
            Utility.ScaleTo(fx, 200, new Laya.Vector3(0, 0, 0), () => {
                if (fx && !fx.destroyed) fx.destroy()
            })
            Utility.ScaleTo(fx1, 200, new Laya.Vector3(0, 0, 0), () => {
                if (fx1 && !fx1.destroyed) fx1.destroy()
            })
        })
    }

    //落地
    static createFlyCast3(node: Laya.Sprite3D) {
        let pos = node.transform.position.clone()
        pos.y += 0.05
        let fx = this.getFXByName('FX_FlyCast_3', GameLogic.Share._levelNode)
        fx.transform.position = pos
        Laya.timer.once(3000, this, () => {
            if (fx && !fx.destroyed) fx.destroy()
        })
    }

    //远程攻击1
    static createAttack1(pos: Laya.Vector3, desPos: Laya.Vector3, cb?: Function) {
        let fx = this.getFXByName('FX_Attack_1', GameLogic.Share._levelNode)
        fx.transform.position = pos
        Utility.TmoveTo(fx, 500, desPos, () => {
            fx.destroy()
            cb && cb()
        })
    }

    //远程攻击2
    static createAttack2(pos: Laya.Vector3, desPos: Laya.Vector3, cb?: Function) {
        let fx = this.getFXByName('FX_Attack_2', GameLogic.Share._levelNode)
        fx.transform.position = pos
        Utility.TmoveTo(fx.getChildAt(0) as Laya.Sprite3D, 500, desPos, () => {
            fx.destroy()
            cb && cb()
        })
    }

    //技能子弹攻击
    static createFlyCastBullet(pos: Laya.Vector3, desPos: Laya.Vector3, cb?: Function) {
        let fx = this.getFXByName('FX_Fire_1', GameLogic.Share._levelNode)
        fx.transform.position = pos
        Utility.TmoveTo(fx, 500, desPos, () => {
            fx.destroy()
            cb && cb()
        })
    }

    //技能受击
    static createSkillHurt(pos: Laya.Vector3) {
        let fx = this.getFXByName('FX_TakeDamage_4', GameLogic.Share._levelNode)
        fx.transform.position = pos
        Laya.timer.once(1000, this, () => {
            if (fx && !fx.destroyed) fx.destroy()
        })
    }

    //彩带
    static createFireWork() {
        let fx = this.getFXByName('FX_FireWork', GameLogic.Share._levelNode)
        fx.transform.position = new Laya.Vector3(0, 4, 15)
    }
}