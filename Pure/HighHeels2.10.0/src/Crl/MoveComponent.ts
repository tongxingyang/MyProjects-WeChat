import Utility from "../Mod/Utility";
import GameLogic from "./GameLogic";

export default class MoveComponent extends Laya.Script3D {
    /**自身对象 */
    private _self: Laya.Sprite3D;

    /**记录点击原点 */
    private _originPosX: number;

    /**目标位置 */
    private _targetPos: Laya.Vector3;
    /**目标欧拉角 */
    // private _targetRot: Laya.Vector3;

    /**插值位置 */
    private _lerpPos: Laya.Vector3;
    /**插值欧拉角 */
    // private _lerpRot: Laya.Vector3;

    private _maxDis: number;

    /**速度系数 */
    private _speedFactor: number;

    public _maxPosX: number;
    // private _maxRotX: number;

    /**是否按下 */
    public isPressed: boolean;

    public isRotate: boolean = false

    onAwake() {
        this._self = this.owner as Laya.Sprite3D;
        this.init();
    }

    init() {
        this.initData();

        this._speedFactor = 1;
        this._maxDis = 0;
        this._maxPosX = 2.4;
        // this._maxRotX = 10;
        this.stageOff()
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEvent);
    }

    stageOff() {
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent);
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEvent);
    }

    initData() {
        this._targetPos = new Laya.Vector3;

        this._lerpPos = new Laya.Vector3;
    }

    onMouseDownEvent(evt) {
        if (!GameLogic.Share.isStartGame) return
        Laya.timer.clear(this, this.frameUpdateRolePos);
        Laya.timer.frameLoop(1, this, this.frameUpdateRolePos);

        this.isPressed = true;
        this._originPosX = evt.stageX;
    }

    onMouseUpEvent() {
        if (!GameLogic.Share.isStartGame) return
        this.isPressed = false
    }

    onMouseMoveEvent(evt) {
        if (!GameLogic.Share.isStartGame || !this._self.transform) return
        if (this.isPressed) {
            let posLimit = this._maxPosX;
            // let rotLimit = this._maxRotX;

            if (evt.stageX != this._originPosX) {
                let pos = this._self.transform.position.clone();
                let rot = this._self.transform.rotationEuler.clone();

                let dis = evt.stageX - this._originPosX;

                if ((dis > 0 && this._maxDis < 0) || (dis < 0 && this._maxDis > 0)) this._maxDis = 0;

                if (Math.abs(dis) > Math.abs(this._maxDis)) {
                    this._maxDis = dis;
                }

                pos.x -= 0.01 * this._maxDis * this._speedFactor; //调整灵敏度，数字越大灵敏度越高
                // rot.z += dis / rotLimit;

                if (this.isRotate) {
                    let dt = 0.2
                    if (dis > 0) {
                        let angle = this._self.transform.localRotationEuler.clone()
                        angle.z += dt
                        Laya.Vector3.lerp(this._self.transform.localRotationEuler.clone(), angle, 0.25, angle)
                        this._self.transform.localRotationEuler = angle
                        let rPos = Utility.RotateWithPoint(this._self, new Laya.Vector3(0, 0, 1), dt)
                        Laya.Vector3.lerp(this._self.transform.localPosition.clone(), rPos, 0.25, rPos)
                        this._self.transform.localPosition = rPos
                        GameLogic.Share._playerCrl.randomAngle = 0.25
                    } else if (dis < 0) {
                        let angle = this._self.transform.localRotationEuler.clone()
                        angle.z -= dt
                        Laya.Vector3.lerp(this._self.transform.localRotationEuler.clone(), angle, 0.25, angle)
                        this._self.transform.localRotationEuler = angle
                        let rPos = Utility.RotateWithPoint(this._self, new Laya.Vector3(0, 0, 1), -dt)
                        Laya.Vector3.lerp(this._self.transform.localPosition.clone(), rPos, 0.25, rPos)
                        this._self.transform.localPosition = rPos
                        GameLogic.Share._playerCrl.randomAngle = -0.25
                    }
                    this._originPosX = evt.stageX;
                    return
                }

                if (pos.x > posLimit) pos.x = posLimit;
                else if (pos.x < -posLimit) pos.x = -posLimit;

                this._targetPos = pos;
                this._self.transform.rotationEuler = rot;

                this._originPosX = evt.stageX;
            }
        }
    }

    frameUpdateRolePos() {
        if (this.isRotate) return
        this._targetPos.setValue(this._targetPos.x, this._self.transform.position.y, this._self.transform.position.z);
        Laya.Vector3.lerp(this._self.transform.position, this._targetPos, 0.8, this._lerpPos);
        this._self.transform.position = this._lerpPos;

        if (Math.abs(this._lerpPos.x - this._targetPos.x) < 0.01) {
            this._maxDis = 0;
        }
    }
}