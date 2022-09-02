const adMgr = require('./AdMgr');

var Box = {
  onShowCB: null,
  closeCB: null,
  closeUI(node) {
    adMgr.hideBannerAd();
    wx.offShow(this.onShowCB);
    Laya.timer.clearAll(this);
    this.closeCB && this.closeCB();
    node.destroy();
  },
  showUI(cb) {
    this.closeCB = cb;
    this.onShowCB = () => {
      this.closeUI();
    };
    adMgr.hideBannerAd();
    adMgr.visibleFullGridAd(false);
    let root = new Laya.Sprite();
    root.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
    Laya.stage.addChild(root);
    Laya.timer.frameLoop(1,this,()=>{Laya.stage.setChildIndex(root, Laya.stage.numChildren-1);});
    let panel = new Laya.Panel();
    panel.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
    panel.bgColor = '#000000';
    panel.alpha = 0.8;
    root.addChild(panel);

    let title1 = new Laya.Image('SGSDK/res/jx_wz_01.png');
    title1.anchorX = 0.5;
    title1.anchorY = 0.5;
    title1.centerX = 0;
    if (window.ConfigData.portrait)
    title1.top = 50;
    else
    title1.top = 0;
    root.addChild(title1);
    let title2 = new Laya.Image('SGSDK/res/jx_wz_02.png');
    title2.anchorX = 0.5;
    title2.anchorY = 0.5;
    title2.centerX = 0;
    if (window.ConfigData.portrait)
    title2.top = 150;
    else
    title2.top = 100;
    root.addChild(title2);
    let light = new Laya.Image('SGSDK/res/jx_tx_01.png');
    light.anchorX = 0.5;
    light.anchorY = 0.5;
    light.centerX = 0;
    light.centerY = 0;
    if (window.ConfigData.portrait) light.scale(1.5, 1.5);
    else light.scale(1, 1);
    rotateLoop(light);
    root.addChild(light);
    let box = new Laya.Image('SGSDK/res/bx_1.png');
    box.anchorX = 0.5;
    box.anchorY = 0.5;
    box.centerX = 0;
    box.centerY = 0;
    if (window.ConfigData.portrait) box.scale(1, 1);
    else box.scale(0.6, 0.6);
    root.addChild(box);
    let bar = new Laya.ProgressBar('SGSDK/res/jx_jdt_01.png');
    bar.centerX = 0;
    bar.centerY = 250;
    bar.value = 0;
    if (window.ConfigData.portrait) bar.scale(1, 1);
    else {
      bar.scale(0.6, 0.6);
      bar.centerY = 120;
    }
    root.addChild(bar);

    let continueBtn = new Laya.Image('SGSDK/res/jx_an_01.png');
    continueBtn.anchorX = 0.5;
    continueBtn.anchorY = 0.5;
    continueBtn.centerX = 0;
    continueBtn.bottom = 20;
    root.addChild(continueBtn);
    let btnTips = new Laya.Image('SGSDK/res/jx_kd_01.png');
    btnTips.anchorX = 0;
    btnTips.anchorY = 1;
    btnTips.pos(300, 60);
    continueBtn.addChild(btnTips);
    continueBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
      if (window.ConfigData.portrait)
      box.scale(1.1, 1.1);
      else
      box.scale(0.6, 0.6);
      continueBtn.scale(1.1, 1.1);
    });
    continueBtn.on(Laya.Event.MOUSE_UP, this, click);

    let hadShowBanner = false;
    let clickCount = 0;
    let maxProgress = Math.random() * 0.4 + 0.3;
    Laya.timer.frameLoop(1, this, () => {
      bar.value -= 0.01;
    });

    function click() {
      if (window.ConfigData.portrait)
      box.scale(1, 1);
      else
      box.scale(0.5, 0.5);
      continueBtn.scale(1, 1);
      bar.value += 0.2;
      if (bar.value >= maxProgress && !hadShowBanner) {
        clickCount++;
        adMgr.showBannerAd();
        Laya.timer.once(1000, this, () => {
          if (clickCount >= window.ConfigData.data.bannerBox_count) {
            this.closeUI(root);
          } else {
            adMgr.hideBannerAd();
            hadShowBanner = false;
            bar.value = 0;
            maxProgress = Math.random() * 0.4 + 0.3;
          }
        });
      }
    };

    function rotateLoop(node) {
      Laya.Tween.to(node, {
        rotation: 360
      }, 3000, null, new Laya.Handler(this, () => {
        node.rotation = 0;
        rotateLoop(node);
      }));
    }
  }
}

module.exports = Box;