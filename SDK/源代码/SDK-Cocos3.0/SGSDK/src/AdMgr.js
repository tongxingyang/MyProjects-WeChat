var sysInfo = wx.getSystemInfoSync();

function shuffleArr(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}

var AdMgr = {
  bannerIdArr: [],
  fullGridId: [],
  initAd(cb) {
    this.initBanner();
    this.createFullGrid();
    let func = () => {
      if (this.isFullGridAdLoaded) {
        window.myScheduler.unschedule(func);
        cb && cb();
      }
    }
    window.myScheduler.schedule(func, 0.1);
  },

  //banner
  bannerAds: [],
  bannerIndex: 0,
  bannerTimesArr: [],
  bannerShowCount: [],
  bannerErrorArr: [],
  countBannerTimeSchedule: null,
  initBanner() {
    this.bannerIdArr = shuffleArr(this.bannerIdArr);
    if (!window.canTrapAll && this.bannerAds.length > 1) {
      this.bannerAds.splice(0, this.bannerAds.length - 1);
    }
    for (let i = 0; i < this.bannerIdArr.length; i++) {
      this.bannerTimesArr.push(0);
      this.bannerShowCount.push(0);
      this.bannerErrorArr.push(false);
    }
    for (let i = 0; i < this.bannerIdArr.length; i++) {
      let bannerAd = this.createBannerAd(i);
      this.bannerAds.push(bannerAd);
    }
  },
  get isAllBannerError() {
    let isAllError = true;
    for (let i = 0; i < this.bannerErrorArr.length; i++) {
      if (!this.bannerErrorArr[i]) {
        isAllError = false;
        break;
      }
    }
    return isAllError;
  },
  showBannerAd() {
    if (this.isAllBannerError) {
      this.stopCountBannerTime();
      return;
    }
    for (let i = 0; i < this.bannerErrorArr.length; i++) {
      if (this.bannerErrorArr[this.bannerIndex]) {
        this.bannerIndex++;
        if (this.bannerIndex >= this.bannerIdArr.length) this.bannerIndex = 0;
      } else {
        break;
      }
    }
    this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].show();
    this.stopCountBannerTime();
    if (!window.canTrapAll) return;
    window.myScheduler.schedule(() => {
      this.countBannerTime();
    }, 0.1);
  },
  hideBannerAd() {
    if (this.isAllBannerError) {
      this.stopCountBannerTime();
      return;
    }
    this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide();
    this.stopCountBannerTime();
  },
  countBannerTime() {
    this.bannerTimesArr[this.bannerIndex] += 0.1;
    if (this.bannerTimesArr[this.bannerIndex] >= window.ConfigData.data.refresh_banner_time) {
      this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide();
      this.bannerTimesArr[this.bannerIndex] = 0;
      this.bannerShowCount[this.bannerIndex]++;
      if (this.bannerShowCount[this.bannerIndex] >= window.ConfigData.data.updateBanner) {
        this.bannerShowCount[this.bannerIndex] = 0;
        this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].destroy();
        this.bannerAds[this.bannerIndex] = null;
        this.bannerAds[this.bannerIndex] = this.createBannerAd(this.bannerIndex);
      }
      this.bannerIndex++;
      if (this.bannerIndex >= this.bannerIdArr.length) this.bannerIndex = 0;
      this.showBannerAd();
    }
  },
  stopCountBannerTime() {
    window.myScheduler.unscheduleAllCallbacks();
  },
  createBannerAd(index) {
    let bannerAd = wx.createBannerAd({
      adUnitId: this.bannerIdArr[index],
      style: {
        top: sysInfo.screenHeight * 0.8,
        width: 300,
        left: sysInfo.screenWidth / 2 - 150
      },
      adIntervals: 30
    });
    bannerAd.onLoad(() => {
      this.bannerErrorArr[index] = false;
      console.log("Banner广告加载成功");
    });
    bannerAd.onError(err => {
      this.bannerErrorArr[index] = true;
      console.error("Banner广告加载失败", JSON.stringify(err));
    });
    bannerAd.onResize(res => {
      let realHeight = bannerAd.style.realHeight + 0.1;
      bannerAd.style.top = sysInfo.screenHeight - realHeight;
    });
    return bannerAd;
  },
  //全屏格子
  fullGridAd: [],
  isFullGridAdLoaded: false,
  createFullGrid() {
    let count = window.ConfigData.portrait ? 1 : 2;
    let style = {};
    for (let i = 0; i < count; i++) {
      if (window.ConfigData.portrait) {
        style = {
          left: 0,
          top: sysInfo.screenHeight / 2 - sysInfo.screenWidth / 2 - 50,
          width: sysInfo.screenWidth
        }
      } else {
        style = {
          left: (sysInfo.screenWidth / 2 - 300) + i * 300,
          top: 30,
          width: 10,
          height: 10
        }
      }
      let fullGridAd = wx.createCustomAd({
        adUnitId: this.fullGridId.length > 0 ? this.fullGridId[0] : "",
        adIntervals: 60,
        style: style
      });
      fullGridAd.onError((err) => {
        this.isFullGridAdLoaded = true;
        console.log('全屏格子加载失败:', JSON.stringify(err));
      })
      fullGridAd.onLoad(() => {
        this.isFullGridAdLoaded = true;
        this.fullGridAd.push(fullGridAd);
      })
    }
  },
  visibleFullGridAd(v) {
    if (this.fullGridAd.length <= 0) {
      this.createFullGrid();
      return;
    }
    for (let i = 0; i < this.fullGridAd.length; i++) {
      v ? this.fullGridAd[i].show() : this.fullGridAd[i].hide();
    }
  },

}

module.exports = AdMgr;