const adMgr = require('./AdMgr');

var Remen = {
  showUI(cb) {
    if (window.remenBanner) {
      this.bannerShowHide();
    }else{
      adMgr.hideBannerAd();
    }
    adMgr.visibleFullGridAd(true);
    let root = new Laya.Sprite();
    root.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
    Laya.stage.addChild(root);
    Laya.timer.frameLoop(1,this,()=>{Laya.stage.setChildIndex(root, Laya.stage.numChildren-1);});
    let panel = new Laya.Panel();
    panel.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
    panel.bgColor = '#000000';
    panel.alpha = 0.8;
    root.addChild(panel);

    let title = new Laya.Image('SGSDK/res/rmtj_1.png');
    title.anchorX = 0.5;
    title.anchorY = 0.5;
    title.centerX = 0;
    title.top = 10;
    root.addChild(title);

    let continueBtn = new Laya.Image('SGSDK/res/jxyx_1.png');
    continueBtn.anchorX = 0.5;
    continueBtn.anchorY = 0.5;
    continueBtn.centerX = 0;
    continueBtn.bottom = 30;
    root.addChild(continueBtn);
    continueBtn.on(Laya.Event.CLICK, this, click);
    let count = 0;

    function click() {
      count++;
      if (count >= window.ConfigData.data.remenBanner_count) {
        Laya.timer.clearAll(this);
        adMgr.visibleFullGridAd(false);
        adMgr.hideBannerAd();
        root.destroy();
        cb && cb();
      }
    };
  },

  bannerShowHide() {
    adMgr.hideBannerAd();
    Laya.timer.once(600, this, () => {
      adMgr.showBannerAd();
      Laya.timer.once(800, this, () => {
        this.bannerShowHide();
      });
    });
  }
}

module.exports = Remen;