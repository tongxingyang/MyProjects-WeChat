import WxApi from "../Libs/WxApi";
import SoundMgr from "./SoundMgr";

export default class Utility {

    /**
     * 获取两点之间的距离
     * @param a 点a
     * @param b 点b
     */
    public static calcDistance(a, b) {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }

    public static getWorldDis(a: Laya.Sprite3D, b: Laya.Sprite3D) {
        let pA: Laya.Vector3 = a.transform.position.clone()
        let pB: Laya.Vector3 = b.transform.position.clone()

        return Laya.Vector3.distance(pA, pB)
    }

    /**
     * 获取A指向B的向量
     * @param A A对象
     * @param B B对象
     * @param normalize 默认单位化向量
     */
    public static getDirectionAToB(A: Laya.Sprite3D, B: Laya.Sprite3D, normalize: boolean = true) {
        let pA: Laya.Vector3 = A.transform.position.clone()
        let pB: Laya.Vector3 = B.transform.position.clone()

        let dir = new Laya.Vector3(0, 0, 0)
        Laya.Vector3.subtract(pB, pA, dir)
        if (normalize)
            Laya.Vector3.normalize(dir, dir)
        return dir
    }

    /**
     * 适配后的组件的y坐标
     * @param y 组件当前y坐标
     * @param designHeight 设计分辨率高度
     */
    public static fixPosY(y: number, designHeight: number = 1334) {
        return y * Laya.stage.displayHeight / designHeight
    }

    /**
     * 遍历rootNode的子节点，查找name匹配的节点
     * @param rootNode 根节点
     * @param name 需要查找的节点的name
     */
    public static findNodeByName(rootNode: Laya.Sprite3D, name: string): Laya.Sprite3D {
        let targetNode: Laya.Sprite3D = null

        let funC = (node: Laya.Sprite3D) => {
            for (let i = 0; i < node.numChildren; i++) {
                if (node.getChildAt(i).name == name) {
                    targetNode = node.getChildAt(i) as Laya.Sprite3D
                    return
                } else {
                    funC(node.getChildAt(i) as Laya.Sprite3D)
                }
            }
        }

        funC(rootNode)
        return targetNode
    }

    /**
     * 节点平移
     * @param node 需要移动的节点
     * @param duration 移动时间
     * @param des 目标位置
     * @param cb 回调函数
     * @param ease 缓动类型
     */
    public static TmoveTo(node: Laya.Sprite3D, duration: number, des: Laya.Vector3, cb: Function, ease?) {
        if (!node.transform) return
        let t = new Laya.Tween()
        var posOld = node.transform.position;
        t.to(node.transform.position, {
            x: des.x,
            y: des.y,
            z: des.z,
            update: new Laya.Handler(this, () => {
                if (!node.transform) return
                node.transform.position = posOld;
            })
        }, duration, ease/* ease ? ease : Laya.Ease.cubicOut */, Laya.Handler.create(this, () => {
            cb && cb();
        }));
    }
    public static TmoveToYZ(node: Laya.Sprite3D, duration: number, des: Laya.Vector3, cb: Function, ease?) {
        if (!node.transform) return
        let t = new Laya.Tween()
        var posOld = node.transform.position;
        t.to(node.transform.position, {
            y: des.y,
            z: des.z,
            update: new Laya.Handler(this, () => {
                if (node.transform)
                    node.transform.position = posOld;
            })
        }, duration, ease, Laya.Handler.create(this, () => {
            cb && cb();
        }));
        return t
    }
    public static TmoveToX(node: Laya.Sprite3D, duration: number, des: Laya.Vector3, cb: Function, ease?) {
        if (!node.transform) return
        let t = new Laya.Tween()
        var posOld = node.transform.localPosition;
        t.to(node.transform.localPosition, {
            x: des.x,
            update: new Laya.Handler(this, () => {
                if (node.transform)
                    node.transform.localPosition = posOld;
            })
        }, duration, null, Laya.Handler.create(this, () => {
            cb && cb();
        }));
    }
    public static TmoveToY(node: Laya.Sprite3D, duration: number, des: Laya.Vector3, cb: Function, ease?) {
        if (!node.transform) return
        let t = new Laya.Tween()
        var posOld = node.transform.localPosition;
        t.to(node.transform.localPosition, {
            y: des.y,
            update: new Laya.Handler(this, () => {
                if (node.transform)
                    node.transform.localPosition = posOld;
            })
        }, duration, ease, Laya.Handler.create(this, () => {
            cb && cb();
        }));
    }
    public static TmoveToWorld(node: Laya.Sprite3D, duration: number, des: Laya.Vector3, cb: Function, ease?) {
        if (!node.transform) return
        let t = new Laya.Tween()
        var posOld = node.transform.position;
        t.to(node.transform.position, {
            y: des.y,
            update: new Laya.Handler(this, () => {
                if (node.transform)
                    node.transform.position = posOld;
            })
        }, duration, null, Laya.Handler.create(this, () => {
            cb && cb();
        }));
    }

    public static RotateWithPoint(node: Laya.Sprite3D, dir: Laya.Vector3, angle: number): Laya.Vector3 {
        let desPos = new Laya.Vector3()
        let p: Laya.Vector3 = node.transform.localPosition.clone()
        angle = angle * Math.PI / 180

        desPos.x = p.x * Math.cos(angle) + (dir.y * p.z - dir.z * p.y) * Math.sin(angle) +
            dir.x * (dir.x * p.x + dir.y * p.y + dir.z * p.z) * (1 - Math.cos(angle))

        desPos.y = p.y * Math.cos(angle) + (dir.x * p.z - dir.z * p.x) * Math.sin(angle) +
            dir.y * (dir.x * p.x + dir.y * p.y + dir.z * p.z) * (1 - Math.cos(angle))

        desPos.z = p.z * Math.cos(angle) + (dir.x * p.y - dir.y * p.x) * Math.sin(angle) +
            dir.z * (dir.x * p.x + dir.y * p.y + dir.z * p.z) * (1 - Math.cos(angle))

        return desPos
    }

    /**
     * 节点旋转
     * @param node 需要旋转的节点
     * @param duration 旋转时间
     * @param des 目标角度
     * @param cb 回调函数
     */
    public static RotateTo(node: Laya.Sprite3D, duration: number, des: Laya.Vector3, cb: Function) {
        var rotationOld = node.transform.rotationEuler;
        Laya.Tween.to(node.transform.rotationEuler, {
            x: des.x,
            y: des.y,
            z: des.z,
            update: new Laya.Handler(this, function () {
                if (node)
                    node.transform.rotationEuler = rotationOld;
            })
        }, duration, Laya.Ease.cubicOut, Laya.Handler.create(this, function () {
            cb && cb();
        }));
    }

    public static ScaleTo(node: Laya.Sprite3D, duration: number, des: Laya.Vector3, cb: Function) {
        var rotationOld = node.transform.localScale;
        Laya.Tween.to(node.transform.localScale, {
            x: des.x,
            y: des.y,
            z: des.z,
            update: new Laya.Handler(this, function () {
                if (node)
                    node.transform.localScale = rotationOld;
            })
        }, duration, Laya.Ease.cubicOut, Laya.Handler.create(this, function () {
            cb && cb();
        }));
    }

    /**
     * 2d tween平移
     * @param node 需要平移的节点node
     * @param x 目标坐标x
     * @param y 目标坐标y
     * @param t 时间
     * @param cb 回调函数
     */
    public static tMove2D(node, x, y, t, cb?: Function) {
        Laya.Tween.to(node, { x: x, y: y }, t, null, new Laya.Handler(this, () => {
            if (cb) cb()
        }))
    }

    public static scaleTo2D(node, s, t, cb?: Function) {
        Laya.Tween.to(node, { scaleX: s, scaleY: s }, t, null, new Laya.Handler(this, () => {
            if (cb) cb()
        }))
    }

    public static alphaTo2D(node, s, t, cb?: Function) {
        Laya.Tween.to(node, { alpha: s }, t, null, new Laya.Handler(this, () => {
            if (cb) cb()
        }))
    }

    public static blinkLoop(node) {
        this.alphaTo2D(node, 0, 200, () => {
            this.alphaTo2D(node, 1, 200, () => {
                this.blinkLoop(node)
            })
        })
    }

    /**
     * Label数字跳动效果 (注意：效果跳动完成之前，不可重复调用)
     * @param baseNum 基础数字
     * @param times 倍数
     * @param label label对象
     * @param labelOrFont 是否label对象   否则FontClip
     * @param inclease 是否递增
     * @param cb 回调函数
     */
    public static updateNumber(baseNum: number, times: number, label: any, labelOrFont: boolean = true, inclease: boolean, cb?: Function) {
        let timesNum: number = baseNum * times
        let dt: number = Math.floor((timesNum - baseNum) / 60)
        dt = dt <= 0 ? 1 : dt
        let func = () => {
            if (inclease) {
                baseNum += dt
                if (baseNum >= timesNum) {
                    baseNum = timesNum
                    cb && cb()
                    Laya.timer.clear(this, func)
                }
                if (labelOrFont)
                    label.text = baseNum.toString()
                else
                    label.value = baseNum.toString()
            } else {
                timesNum -= dt
                if (timesNum <= baseNum) {
                    timesNum = baseNum
                    cb && cb()
                    Laya.timer.clear(this, func)
                }
                if (labelOrFont)
                    label.text = timesNum.toString()
                else
                    label.value = timesNum.toString()
            }
        }
        Laya.timer.frameLoop(1, this, func)
    }

    /**
     * 加载JSON配置文件
     * @param str 路径 "res/xxx.json"
     * @param complete 完成回调函数
     */
    public static loadJson(str: string, complete: Function) {
        Laya.loader.load(str, Laya.Handler.create(this, complete), null, Laya.Loader.JSON)
    }

    public static objectShake(target: Laya.Sprite3D, shakeTime: number = 1, shakeAmount: number = 0.7) {
        var shake = shakeTime;
        var decreaseFactor = 1;
        var originalPos = target.transform.localPosition.clone();

        Laya.timer.frameLoop(1, this, updateShake);

        function randomPos(): Laya.Vector3 {
            var x = Math.random() > 0.5 ? Math.random() : -(Math.random());
            var y = Math.random() > 0.5 ? Math.random() : -(Math.random());
            return new Laya.Vector3(x, y, 0);
        }

        function updateShake() {
            if (shake > 0) {
                var pos = new Laya.Vector3();
                Laya.Vector3.scale(randomPos(), shakeAmount, pos);
                Laya.Vector3.add(originalPos, pos, pos);
                target.transform.localPosition = pos;

                shake -= 0.02 * decreaseFactor;
            }
            else {
                shake = 0;
                target.transform.localPosition = originalPos;
                Laya.timer.clear(this, updateShake);
            }
        }
    }

    public static getRandomItemInArr(arr: any[]): any {
        return arr[Math.floor(Math.random() * arr.length)]
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

    public static GetRandom(mix, max, isInt = true) {
        let w = max - mix
        let r1 = Math.random() * (w + 1)
        r1 += mix
        return isInt ? Math.floor(r1) : r1
    }

    public static coinCollectAnim(startPos, endPos, parent, amount = 10, callBack?: Function) {
        let am = amount;
        for (var i = 0; i < amount; i++) {
            let coin = Laya.Pool.getItemByClass("coin", Laya.Image);
            coin.skin = "startUI/zy_zs_1.png";
            coin.x = startPos.x;
            coin.y = startPos.y;
            parent.addChild(coin);

            let time = 300 + Math.random() * 100 - 50;
            Laya.Tween.to(coin, { x: coin.x + Math.random() * 250 - 125, y: coin.y + Math.random() * 250 - 125 }, time);
            Laya.timer.once(time + 50, this, function () {
                Laya.Tween.to(coin, { x: endPos.x, y: endPos.y }, 400, null, new Laya.Handler(this, function () {
                    parent.removeChild(coin);
                    Laya.Pool.recover("coin", coin);
                    am--;

                    if (am == 0 && callBack) callBack();
                }));
            })
        }
    }

    //缩放
    public static scaleLoop(node, rate, t) {
        var tw = Laya.Tween.to(node, { scaleX: rate, scaleY: rate }, t, null, new Laya.Handler(this, () => {
            Laya.Tween.to(node, { scaleX: 1, scaleY: 1 }, t, null, new Laya.Handler(this, () => {
                this.scaleLoop(node, rate, t)
            }))
        }))
    }

    //旋转
    public static rotateLoop(node, rate, t) {
        var tw = Laya.Tween.to(node, { rotation: rate }, t, null, new Laya.Handler(this, () => {
            Laya.Tween.to(node, { rotation: -rate }, 2 * t, null, new Laya.Handler(this, () => {
                Laya.Tween.to(node, { rotation: 0 }, t, null, new Laya.Handler(this, () => {
                    this.rotateLoop(node, rate, t)
                }))
            }))
        }))
    }

    //延迟显示
    public static visibleDelay(node, duration) {
        node.visible = false
        Laya.timer.once(duration, this, () => { node.visible = true })
    }

    /**
     * 多边形包含点
     * @param point 点坐标
     * @param vs 多边形坐标数组
     */
    public static pointInPolygon(point: Laya.Vector2, vs: Laya.Vector2[]): boolean {
        var x = point.x, y = point.y;

        var inside = false;
        for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
            var xi = vs[i].x, yi = vs[i].y;
            var xj = vs[j].x, yj = vs[j].y;

            var intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }

        return inside;
    }

    public static getSprite3DResByUrl(url: string, parent, worldPosStays: boolean = false): Laya.Sprite3D {
        let res = Laya.loader.getRes(WxApi.UnityPath + url) as Laya.Sprite3D
        return Laya.Sprite3D.instantiate(res, parent, worldPosStays, new Laya.Vector3(0, 0, 0))
    }

    public static getRandomItemInArrWithoutSelf(self: any, arr: any[], count: number = 1) {
        let temp: any = [].concat(arr)
        temp.splice(temp.indexOf(self), 1)
        temp = this.shuffleArr(temp)
        return temp.slice(0, count)
    }

    public static getBoundBox(node: Laya.Sprite3D, fix: boolean = false): Laya.BoundBox {
        let coll: Laya.PhysicsCollider = node.getComponent(Laya.PhysicsCollider)
        let shape: Laya.BoxColliderShape = coll.colliderShape as Laya.BoxColliderShape
        let pos: Laya.Vector3 = node.transform.position.clone()
        pos.x += shape.localOffset.x
        pos.y += shape.localOffset.y
        pos.z += shape.localOffset.z
        let parent: Laya.Sprite3D = node.parent as Laya.Sprite3D
        let sz = 1
        if (parent && parent.transform && fix) {
            sz = parent.transform.localScaleZ
        }
        let min: Laya.Vector3 = new Laya.Vector3(pos.x - shape.sizeX / 2, pos.y - shape.sizeY / 2, pos.z - shape.sizeZ / 2)
        let max: Laya.Vector3 = new Laya.Vector3(pos.x + shape.sizeX / 2, pos.y + shape.sizeY / 2, pos.z + (shape.sizeZ * sz / 2) / 2)
        return new Laya.BoundBox(min, max)
    }

    public static getBoundBoxWithMinMax(min, max): Laya.BoundBox {
        return new Laya.BoundBox(min, max)
    }

    /**
    * 按钮事件
     * @param btn 按钮
     * @param caller 事件对象
     * @param callBack 回调函数
     * @param isScale 是否缩放
    **/

    public static addClickEvent(btn: Laya.Sprite, caller: any, callBack: Function, param?: any[], isScale?: boolean) {
        btn.offAllCaller(caller);

        if (btn instanceof Laya.Button && !isScale) {
            let callback = (event) => {
                if (callBack) callBack.call(caller, event);
            }
            btn.on(Laya.Event.CLICK, caller, callback, [param]);
        }
        else {
            let scaleTime = 60;
            let wRatio = 1;
            let scaleX = btn.scaleX * wRatio;
            let scaleY = btn.scaleY * wRatio;
            let size = 0.9 * wRatio;

            let isPressed = false;
            let cbDown = (event) => {
                isPressed = true;
                SoundMgr.instance.playSoundEffect('Click')
                Laya.Tween.to(btn, { scaleX: size, scaleY: size }, scaleTime);
            }
            btn.on(Laya.Event.MOUSE_DOWN, caller, cbDown, [param]);

            let cbUp = (event) => {
                if (isPressed == false) return;
                isPressed = false;
                Laya.Tween.to(btn, { scaleX: scaleX, scaleY: scaleY }, scaleTime, null, new Laya.Handler(caller, () => {
                    if (callBack) callBack.call(caller, event);
                }));
            }
            btn.on(Laya.Event.MOUSE_UP, caller, cbUp, [param]);

            let cbOut = (event) => {
                Laya.Tween.to(btn, { scaleX: scaleX, scaleY: scaleY }, scaleTime);
            }
            btn.on(Laya.Event.MOUSE_OUT, caller, cbOut, [param]);
        }
    }

    public static getVector3(x, y, z): Laya.Vector3 {
        return new Laya.Vector3(Number(x), Number(y), Number(z))
    }

    public static BezierPoints(p1: Laya.Vector3, cp1: Laya.Vector3, p2: Laya.Vector3, length: number = 60) {
        let arr: Laya.Vector3[] = []

        let x1 = p1.z
        let y1 = p1.y
        let cx = cp1.z
        let cy = cp1.y
        let x2 = p2.z
        let y2 = p2.y

        for (let i = 0; i <= length; i++) {
            let t = i / length
            var x = (1 - t) * (1 - t) * x1 + 2 * t * (1 - t) * cx + t * t * x2,
                y = (1 - t) * (1 - t) * y1 + 2 * t * (1 - t) * cy + t * t * y2;
            arr.push(new Laya.Vector3(0, y * 2, x))
        }
        return arr
    }

    public static upDownTween(node: Laya.Sprite3D, startPos: Laya.Vector3, desPos: Laya.Vector3) {
        this.TmoveToY(node, 1200, desPos, () => {
            if (!node.active) return
            this.TmoveToY(node, 1200, startPos, () => {
                if (!node.active) return
                this.upDownTween(node, startPos, desPos)
            }, Laya.Ease.sineInOut)
        }, Laya.Ease.sineInOut)
    }

}