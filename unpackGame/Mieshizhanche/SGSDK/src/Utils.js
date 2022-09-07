var getSpriteFrame = (src) => {
  return new Promise((rs, rj) => {
    var img = new Image();
    img.src = src;
    img.onload = () => {
      let frame = cc.SpriteFrame.createWithImage(img);
      rs(frame);
    }
  });
}

exports.getSpriteFrame = getSpriteFrame;
