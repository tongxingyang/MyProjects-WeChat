export enum AniState {
    ANI_IDLE = 'idle',
    ANI_RUN = 'run'
}
export default class Mosquito extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D = null
    _ani: Laya.Animator = null
    currentAniName: string = ''

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
        this._ani = this.owner.getComponent(Laya.Animator);

        this.playAnimation(AniState.ANI_RUN);
    }

    onDisable() {

    }

    getCurAniName(): string {
        return this._ani.getControllerLayer().getCurrentPlayState().animatorState.name
    }

    playAnimation(name: string, speed: number = 1, transitionDuration: number = 0.2) {
        this.currentAniName = name
        this._ani.speed = speed
        this._ani.crossFade(name, transitionDuration)
    }

    onUpdate() {

    }
}