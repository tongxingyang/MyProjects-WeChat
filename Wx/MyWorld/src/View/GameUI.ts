import GameLogic from "../Crl/GameLogic"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"
import FdMgr from "../FanDong/FdMgr"
import SoundMgr from "../Mod/SoundMgr"

export default class GameUI extends Laya.Scene {
    constructor() {
        super()
    }
    static Share: GameUI

    leftNum: Laya.FontClip
    curGrade: Laya.FontClip
    nextGrade: Laya.FontClip
    coinNum: Laya.FontClip
    guideAni: Laya.Animation
    NewerGuide: Laya.Animation
    touchBtn: Laya.Image
    joyStickBg: Laya.Image
    joyStick: Laya.Image
    tips: Laya.Image
    pBar: Laya.ProgressBar
    DirNode: Laya.Sprite

    weaponTips: Laya.Image
    weaponName: Laya.Image
    weaponPic: Laya.Image

    touchStartPos: Laya.Vector3

    onOpened() {
        GameUI.Share = this
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Laya.timer.frameLoop(1, this, this.myUpdate)
        this.touchBtn.on(Laya.Event.MOUSE_DOWN, this, this.touchStart)
        this.touchBtn.on(Laya.Event.MOUSE_MOVE, this, this.touchMove)
        this.touchBtn.on(Laya.Event.MOUSE_UP, this, this.touchEnd)

        this.curGrade.value = PlayerDataMgr.getPlayerData().grade.toString()
        this.nextGrade.value = (PlayerDataMgr.getPlayerData().grade + 1).toString()

        this.touchBtn.visible = false
        this.showWeaponTips()
        GameLogic.Share.gameStart()
        SoundMgr.instance.playMusic('Bgm.mp3')
        this.createDir()
        FdMgr.inGame()
    }
    onClosed() {
        this.DirNode.destroyChildren()
        Laya.timer.clearAll(this)
    }

    touchStart(evt: Laya.Event) {
        if (GameLogic.Share.isGameOver) return
        if (!GameLogic.Share.isStartGame) {
            this.guideAni.visible = false
            GameLogic.Share.isStartGame = true
            GameLogic.Share.enemyStart()
            GameLogic.Share.enemyHunt()
            if (PlayerDataMgr.getPlayerData().grade == 1) {
                this.NewerGuide.visible = true
                Laya.timer.once(3000, this, () => { this.NewerGuide.visible = false })
            }
        }
        let x = evt.stageX
        let y = evt.stageY
        this.joyStickBg.visible = true
        this.joyStickBg.pos(x, y)
        this.joyStick.pos(105, 105)
        this.touchStartPos = new Laya.Vector3(x, y)
    }
    touchMove(evt: Laya.Event) {
        if (GameLogic.Share.isGameOver) { this.joyStickBg.visible = false; return }
        let x = evt.stageX
        let y = evt.stageY
        let pos = new Laya.Vector3(x, y)

        let dir = new Laya.Vector3(0, 0, 0)
        Laya.Vector3.subtract(new Laya.Vector3(this.touchStartPos.x, 0, this.touchStartPos.y), new Laya.Vector3(pos.x, 0, pos.y), dir)
        Laya.Vector3.normalize(dir, dir)
        GameLogic.Share._playerCrl.myDir = dir.clone()

        dir = new Laya.Vector3()
        if (Laya.Vector3.distance(pos, this.touchStartPos) <= 105) {
            this.joyStick.pos(x - this.touchStartPos.x + 105, y - this.touchStartPos.y + 105)
        }
        else {
            Laya.Vector3.subtract(pos, this.touchStartPos, dir)
            Laya.Vector3.normalize(dir, dir)
            Laya.Vector3.scale(dir, 105, dir)
            Laya.Vector3.add(new Laya.Vector3(105, 105), dir, dir)
            this.joyStick.pos(dir.x, dir.y)
        }
    }
    touchEnd(evt: Laya.Event) {
        this.joyStickBg.visible = false
        GameLogic.Share._playerCrl.tempDir = GameLogic.Share._playerCrl.myDir.clone()
        GameLogic.Share._playerCrl.myDir = new Laya.Vector3()
        if (GameLogic.Share.isGameOver) return

        GameLogic.Share._playerCrl.attack()
    }

    showTips(v: number) {
        Laya.timer.clear(this, this.delayShowTips)
        if (v == 2) {
            SoundMgr.instance.playSoundEffect('kill_double.mp3')
            this.tips.skin = 'gameUI/yxz_glwz_1.png'
        } else if (v == 3) {
            SoundMgr.instance.playSoundEffect('kill_multi.mp3')
            this.tips.skin = 'gameUI/yxz_glwz_2.png'
        } else if (v == 4) {
            SoundMgr.instance.playSoundEffect('kill_ultra.mp3')
            this.tips.skin = 'gameUI/yxz_glwz_3.png'
        } else {
            let id = Utility.GetRandom(4, 6)
            this.tips.skin = 'gameUI/yxz_glwz_' + id + '.png'
            SoundMgr.instance.playSoundEffect(id != 6 ? 'Good.mp3' : 'Perfect.mp3')
        }
        this.tips.visible = true
        this.tips.scale(1, 1)
        Laya.timer.once(1000, this, this.delayShowTips)
    }
    delayShowTips() {
        Utility.scaleTo2D(this.tips, 0, 100, () => { this.tips.visible = false })
    }

    showWeaponTips() {
        this.weaponTips.visible = true
        let g: number = PlayerDataMgr.getPlayerData().grade
        g = Math.floor((g - 1) % 5) + 1
        this.weaponName.skin = 'gameUI/yxz_wzts_' + g + '.png'
        this.weaponPic.skin = 'skinUI/Weapon/Weapon_' + g + '.png'
        Laya.timer.once(2000, this, () => {
            this.weaponTips.visible = false
            this.touchBtn.visible = true
        })

        this.weaponName.pos(this.weaponName.x, this.weaponName.y - 500)
        Utility.tMove2D(this.weaponName, this.weaponName.x, this.weaponName.y + 500, 500, null)
    }

    getCoins(nodePos: Laya.Vector3) {
        SoundMgr.instance.playSoundEffect('GetCoin.mp3')
        let op: Laya.Vector4 = new Laya.Vector4(0, 0, 0)
        let hPos = nodePos
        GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op)

        let pos = new Laya.Vector2(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY)
        Utility.coinCollectAnim('startUI/ksy_jb.png', pos, new Laya.Vector2(35, 95), this, 5, () => {
            PlayerDataMgr.getPlayerData().coin += 5
            PlayerDataMgr.setPlayerData()
            SoundMgr.instance.playSoundEffect('AddCoin.mp3')
        })
    }

    createDir() {
        for (let i = 0; i < GameLogic.Share._enemyNode.numChildren; i++) {
            let dir: Laya.Image = new Laya.Image(GameLogic.Share._sceneId == 1 ? 'gameUI/Down1.png' : 'gameUI/Down2.png')
            dir.anchorX = 0.5
            dir.anchorY = 1
            this.DirNode.addChild(dir)
            dir.pos(-100, -100)
            dir.visible = false
        }
    }
    fixEnemyDir() {
        for (let i = 0; i < this.DirNode.numChildren; i++) {
            let dir: Laya.Image = this.DirNode.getChildAt(i) as Laya.Image
            dir.visible = false
            dir.pos(-100, -100)
        }
        for (let i = 0; i < GameLogic.Share._enemyNode.numChildren; i++) {
            let enemy: Laya.Sprite3D = GameLogic.Share._enemyNode.getChildAt(i) as Laya.Sprite3D
            let ePos: Laya.Vector3 = enemy.transform.position.clone()

            let op: Laya.Vector4 = new Laya.Vector4(0, 0, 0)
            let hPos = ePos
            GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op)
            let pos = new Laya.Vector2(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY)
            let dir: Laya.Image = this.DirNode.getChildAt(i) as Laya.Image
            if ((pos.x > 0 && pos.y > 0 && pos.x < this.displayWidth && pos.y < this.displayHeight)) {
                dir.visible = false
                continue
            }
            
            if (pos.x > this.width - 20) { pos.x = this.width - 20; dir.rotation = -90 }
            if (pos.x < 20) { pos.x = 20; dir.rotation = 90 }
            if (pos.y > this.height - 20) { pos.y = this.height - 20; dir.rotation = 0 }
            if (pos.y < 20) { pos.y = 20; dir.rotation = 180 }

            if (pos.x <= 20 && pos.y <= 20) dir.rotation = 135
            if (pos.x <= 20 && pos.y >= this.height - 20) dir.rotation = 45
            if (pos.x >= this.width - 20 && pos.y <= 20) dir.rotation = 225
            if (pos.x >= this.width - 20 && pos.y >= this.height - 20) dir.rotation = -45

            dir.pos(pos.x, pos.y)
            dir.visible = true
        }
    }

    myUpdate() {
        this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString()
        this.leftNum.value = (GameLogic.Share._enemyNode.numChildren + 1).toString()
        this.pBar.value = (GameLogic.Share._enemyCount - GameLogic.Share._curEnemyCount) / GameLogic.Share._enemyCount
        this.fixEnemyDir()
    }
}
