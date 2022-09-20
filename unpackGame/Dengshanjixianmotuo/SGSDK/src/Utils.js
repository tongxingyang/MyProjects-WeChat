var getSpriteFrame = (src) => {
  return new Promise((rs, rj) => {
    cc.loader.load(src, (err, tex) => {
      rs(new cc.SpriteFrame(tex));
    });
  });
}

exports.getSpriteFrame = getSpriteFrame;