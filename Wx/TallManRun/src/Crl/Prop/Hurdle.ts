import GameLogic from "../GameLogic"

export default class Hurdle extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null

    type: number = 1
    num: string = ''

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    init(type: number, num: string) {
        this.type = type
        this.num = num

        let typeNode = this.myOwner.getChildByName('Hurdle_Word_1') as Laya.MeshSprite3D
        let num1 = this.myOwner.getChildByName('Hurdle_Num_1') as Laya.MeshSprite3D
        let num2 = this.myOwner.getChildByName('Hurdle_Num_2') as Laya.MeshSprite3D
        let num3 = this.myOwner.getChildByName('Hurdle_Num_3') as Laya.MeshSprite3D;
        let gate = this.myOwner.getChildByName('Hurdle_Gate_1') as Laya.MeshSprite3D;

        let isInc: boolean = num.substring(0, 1) == '+' || num.substring(0, 1) == '*';
        ((typeNode.meshRenderer.material) as Laya.BlinnPhongMaterial).tilingOffset = new Laya.Vector4(1, 1, isInc ? 0 : 0.5, type == 1 ? 0 : 0.8);

        let z = 0;
        let w = 0;
        switch (num.substring(0, 1)) {
            case '+':
                z = 0.5;
                w = 0.5;
                break;
            case '-':
                z = 0.75;
                w = 0.5;
                break;
            case '*':
                z = 0;
                w = 0.25;
                break;
            case '/':
                z = 0.25;
                w = 0.25;
                break;
        }
        ((num1.meshRenderer.material) as Laya.BlinnPhongMaterial).tilingOffset = new Laya.Vector4(1, 1, z, w);

        let intNum = parseInt(num.substring(1, 2));
        ((num2.meshRenderer.material) as Laya.BlinnPhongMaterial).tilingOffset =
            new Laya.Vector4(1, 1, Math.floor(intNum % 4) * 0.25, Math.floor(intNum / 4) * -0.25);

        if (num.substring(2) == '.') {
            ((num3.meshRenderer.material) as Laya.BlinnPhongMaterial).tilingOffset = new Laya.Vector4(1, 1, 0.75, 0.25);
            num1.transform.translate(new Laya.Vector3(-0.5, 0, 0), false);
            num2.transform.translate(new Laya.Vector3(-0.5, 0, 0), false);
        } else {
            let intNum1 = parseInt(num.substring(2));
            ((num3.meshRenderer.material) as Laya.BlinnPhongMaterial).tilingOffset =
                new Laya.Vector4(1, 1, Math.floor(intNum1 % 4) * 0.25, Math.floor(intNum1 / 4) * -0.25);
        }

        if (!isInc) {
            ((gate.meshRenderer.material) as Laya.BlinnPhongMaterial) = ((gate.meshRenderer.materials) as Laya.BlinnPhongMaterial[])[1];
        }
    }

    onUpdate() {
        let myPos = this.myOwner.transform.position.clone()
        let pPos = GameLogic.Share._player.transform.position.clone()
        if (Math.abs(myPos.x - pPos.x) <= 1.5 && Math.abs(myPos.z - pPos.z) <= 0.1) {
            if (this.num.substring(2) == '.') this.num.replace('.', '')
            if (this.type == 1) {
                //竖
                GameLogic.Share._playerCrl.changeV(this.num.substring(0, 1), parseInt(this.num.substring(1)))
            } else {
                //横
                GameLogic.Share._playerCrl.changeH(this.num.substring(0, 1), parseInt(this.num.substring(1)))
            }
            this.myOwner.destroy()
        }
    }
}