export default class Water extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.MeshSprite3D = null

    onAwake(): void {
        this.myOwner = this.owner as Laya.MeshSprite3D
    }

    //海流动效
    waterAnim() {
        let mat: any = this.myOwner.meshRenderer.material;
        mat.tilingOffsetY += 0.01;
        mat.tilingOffsetX += 0.001;
    }


    onUpdate(): void {
        this.waterAnim()
    }
}