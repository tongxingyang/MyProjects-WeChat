import { _decorator, Component, Node, Animation, AnimationClip, AnimationState, AnimationComponent, TERRAIN_HEIGHT_BASE } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    static Share: Player

    private ani: AnimationComponent = null

    private curAni: string = ''

    onLoad() {
        Player.Share = this
        this.ani = this.getComponent(AnimationComponent)
        this.ani.on(Animation.EventType.FINISHED, this.animationFinished, this)
    }

    start() {
        this.playAnimation('Attack1_1')
        this.scheduleOnce(() => {
            this.ani.stop()
            this.playAnimation('Idle1')
            this.scheduleOnce(()=>{
                this.playAnimation('Run')
            })
        }, 0.3)
    }

    getAniClip(name: string): AnimationClip {
        return this.ani.getState(name).clip
    }

    playAnimation(name: string, isLoop: boolean = false, speed: number = 1) {
        this.ani.play(name)
        //this.ani.getState(name).speed = this.ani.getState(name).speed * speed
        //this.ani.getState(name).wrapMode = true ? AnimationClip.WrapMode.Loop : AnimationClip.WrapMode.Normal
        //this.curAni = name
    }

    animationFinished(evt: AnimationEvent, state: AnimationState) {
        // console.log(evt, state)
        // if (this.curAni == 'Attack1_1') {
        //     this.playAnimation('Run', true)
        // }
    }

    update(deltaTime: number) {

    }
}

