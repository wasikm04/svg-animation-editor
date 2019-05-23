const animations = {
  rotate: {
    _attributes: {
      attributeName: "transform",
      type: "rotate",
      begin: "0s",
      dur: "9s",
      from: "0 0 0",
      id: "default-rotate",
      repeatCount: "indefinite",
      additive:"sum",
      to: "360 20 20"
    }
  },
  rotateInPlace: {
    _attributes: {
      attributeName: "transform",
      type: "rotate",
      begin: "0s",
      dur: "9s",
      from: "0 20 20",
      id: "default-rotate",
      repeatCount: "indefinite",
      additive:"sum",
      to: "360 20 20"
    }
  },
  translate: {
    _attributes: {
      attributeName: "transform",
      type: "translate",
      from: "0 0",
      to: "50 50",
      begin: "0s",
      dur: "9s",
      additive:"sum",
      repeatCount: "indefinite",
      id: "default-translate"
    }
  }
};

export default animations;
