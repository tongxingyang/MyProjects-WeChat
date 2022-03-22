import { _decorator, Sprite, SpriteFrame, SpriteAtlas, Vec2, v2, resources, UITransform, Vec3, Quat, v3 } from "cc";
import { WECHAT } from "cc/env";

const { ccclass, property } = _decorator;

@ccclass('Utility')
export default class Utility {

    public static loadSpriteFrame(spName: string, sprite: Sprite, cb?: Function) {
        //加载SpriteAtlas(图集)，并获取其中一张图片
        resources.load(spName + '/spriteFrame', SpriteFrame, function (err, spriteFrame) {
            sprite.spriteFrame = spriteFrame
            cb && cb()
        })
    }
    //打乱数组
    public static shuffleArr(arr: any[]) {
        let i = arr.length;
        while (i) {
            let j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    public static getWorldPos(node, point: Vec3 = v3(0, 0)): Vec3 {
        let out = v3()
        node.getComponent(UITransform).convertToWorldSpaceAR(point, out)
        return out
    }

    //数字前补0
    public static joinZero(length: number, num: number) {
        return (Array(length).join('0') + num).slice(-length);
    }

    public static delayActive(node: any, duration: number, target) {
        node.active = false
        target.scheduleOnce(() => { node.active = true }, duration)
    }

    public static getRandomItemInArr(arr: any[]): any {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    public static getRandomItemInArrWithoutSelf(self: any, arr: any[], count: number = 1) {
        let temp: any = [].concat(arr)
        if (temp.indexOf(self) != -1)
            temp.splice(temp.indexOf(self), 1)
        temp = this.shuffleArr(temp)
        return temp.slice(0, count)
    }

    public static GetRandom(mix, max, isInt = true) {
        let w = max - mix + 1
        let r1 = Math.random() * w
        r1 += mix
        return isInt ? Math.floor(r1) : r1
    }

    /**
     * 点绕点旋转
     * @param myPos 待旋转对象坐标
     * @param targetPos 被绕对象坐标
     * @param axis 轴
     * @param angle 角度
     * @returns 旋转后坐标
     */
    public static RotateWithAxis(myPos: Vec3, targetPos: Vec3, axis: Vec3, angle: number): Vec3 {
        let desPos: Vec3 = new Vec3()
        let dis: number = Vec3.distance(myPos, targetPos)
        let dir = new Vec3()
        Vec3.subtract(dir, myPos, targetPos)
        Vec3.normalize(dir, dir)
        let q = new Quat()
        Vec3.normalize(axis, axis)
        Quat.rotateAround(q, q, axis, angle * Math.PI / 180)
        Vec3.transformQuat(dir, dir, q)
        Vec3.multiplyScalar(dir, dir, dis)
        Vec3.add(desPos, dir, targetPos)
        return desPos
    }

    public static getIsNewDate() {
        if (localStorage.getItem('lastDate')) {
            if (new Date().getDate() == parseInt(localStorage.getItem('lastDate'))) {
                //同一天
                return false
            } else {
                //新的一天
                return true
            }
        } else {
            //新的一天
            return true
        }
    }

    //震动
    public static DoVibrate(isShort: boolean = true) {
        if (WECHAT) {
            if (isShort) {
                window['wx'].vibrateShort()
            } else {
                window['wx'].vibrateLong()
            }
        }
    }
}
