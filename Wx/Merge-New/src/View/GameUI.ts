
import GameLogic from "../Crl/GameLogic"
import Monster from "../Crl/Monster"
import SGMgr from "../SGSDK/SGMgr"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"

export default class GameUI extends Laya.Scene {
    constructor() {
        super()
    }
    static Share: GameUI

    skillTips: Laya.Image
    skillBtnNode: Laya.Image
    playerHpNode: Laya.Sprite
    enemyHpNode: Laya.Sprite

    barArr: number[] = [0, 0, 0]
    timeArr: number[] = []

    onOpened() {
        GameUI.Share = this
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Laya.timer.frameLoop(1, this, this.myUpdate)

        for (let i = 0; i < this.skillBtnNode.numChildren; i++) {
            let btn: Laya.Image = this.skillBtnNode.getChildAt(i) as Laya.Image
            Utility.addClickEvent(btn, this, this.clickSkillBtn, [i])
        }
        for (let i = 0; i < PlayerDataMgr.getPlayerData().chooseArr.length; i++) {
            let type = PlayerDataMgr.getPlayerData().chooseArr[i].type
            this.timeArr.push(PlayerDataMgr.getSkillTimeByTypeId(type))
        }
        Laya.timer.once(5000, this, () => {
            Laya.timer.loop(50, this, this.addBar)
        })

        SGMgr.inGame()
    }
    onClosed() {
        Laya.timer.clearAll(this)
    }

    updateSkillBtn() {
        let count = PlayerDataMgr.getPlayerData().chooseArr.length
        for (let i = 0; i < this.skillBtnNode.numChildren; i++) {
            let btn: Laya.Image = this.skillBtnNode.getChildAt(i) as Laya.Image
            if (i >= count) {
                btn.visible = false
                continue
            }
            btn.visible = true
            let light: Laya.Image = btn.getChildByName('light') as Laya.Image
            let bg: Laya.Image = btn.getChildByName('bg') as Laya.Image
            let bar: Laya.Image = btn.getChildByName('bar') as Laya.Image
            let icon: Laya.Image = btn.getChildByName('icon') as Laya.Image
            let died: Laya.Image = btn.getChildByName('died') as Laya.Image
            let guide: Laya.Image = btn.getChildByName('guide') as Laya.Image
            let ready: Laya.Image = btn.getChildByName('ready') as Laya.Image

            light.visible = this.barArr[i] >= 1
            bg.skin = 'gameUI/yxz_pj_dk' + PlayerDataMgr.getPlayerData().chooseArr[i].type + '.png'
            bar.skin = 'gameUI/yxz_pj_cd' + PlayerDataMgr.getPlayerData().chooseArr[i].type + '.png'
            bar.height = this.barArr[i] * 164
            icon.skin = 'gameUI/Body/Body_' + (PlayerDataMgr.getPlayerData().chooseArr[i].bodyId + 1) + '.png'
            died.visible = (GameLogic.Share._playerNode.getChildAt(i).getComponent(Monster) as Monster).isDied
            guide.visible = PlayerDataMgr.getPlayerData().grade == 1 && this.barArr[i] >= 1
            ready.visible = this.barArr[i] >= 1

            if ((GameLogic.Share._playerNode.getChildAt(i).getComponent(Monster) as Monster).isDied) {
                bg.gray = true
                icon.gray = true
            }
        }
        if (count == 1) (this.skillBtnNode.getChildAt(0) as Laya.Image).x = 0
        if (count == 2) {
            (this.skillBtnNode.getChildAt(0) as Laya.Image).x = -100;
            (this.skillBtnNode.getChildAt(1) as Laya.Image).x = 100;
        }
        if (count == 3) {
            (this.skillBtnNode.getChildAt(0) as Laya.Image).x = 0;
            (this.skillBtnNode.getChildAt(1) as Laya.Image).x = 200;
            (this.skillBtnNode.getChildAt(2) as Laya.Image).x = -200;
        }
    }

    clickSkillBtn(arr: any[]) {
        let id: number = arr[0]
        if (this.barArr[id] < 1) return
        this.barArr[id] = 0
        let node = GameLogic.Share._playerNode.getChildAt(id) as Laya.Sprite3D
        let crl = node.getComponent(Monster) as Monster
        crl.skill()
    }

    addBar() {
        for (let i = 0; i < this.timeArr.length; i++) {
            if ((GameLogic.Share._playerNode.getChildAt(i).getComponent(Monster) as Monster).isDied) {
                this.barArr[i] = 0
                continue
            }
            this.barArr[i] += 0.05 * (1 / this.timeArr[i])
            if (this.barArr[i] > 1) this.barArr[i] = 1
        }
    }

    updatePlayerHp() {
        for (let i = 0; i < GameLogic.Share._playerNode.numChildren; i++) {
            let player = GameLogic.Share._playerNode.getChildAt(i) as Laya.Sprite3D
            let playerCrl = player.getComponent(Monster)
            let bar: Laya.ProgressBar = this.playerHpNode.getChildAt(i) as Laya.ProgressBar

            let op: Laya.Vector4 = new Laya.Vector4(0, 0, 0)
            let hPos = player.transform.position.clone()
            hPos.y += 2.5
            GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op)
            bar.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY)
            bar.value = playerCrl.hp / playerCrl.hpMax
        }

        for (let i = 0; i < GameLogic.Share._enemyNode.numChildren; i++) {
            let enemy = GameLogic.Share._enemyNode.getChildAt(i) as Laya.Sprite3D
            let enemyCrl = enemy.getComponent(Monster)
            let bar: Laya.ProgressBar = this.enemyHpNode.getChildAt(i) as Laya.ProgressBar

            let op: Laya.Vector4 = new Laya.Vector4(0, 0, 0)
            let hPos = enemy.transform.position.clone()
            hPos.y += 2.5
            GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op)
            bar.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY)
            bar.value = enemyCrl.hp / enemyCrl.hpMax
        }
    }

    myUpdate() {
        this.updateSkillBtn()
        this.updatePlayerHp()
    }
}
