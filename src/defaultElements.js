const animations = Object.freeze({
  rotate: {
    _attributes: {
      attributeName: "transform",
      type: "rotate",
      begin: "0s",
      dur: "9s",
      from: "0 0 0",
      id: "default-rotate",
      repeatCount: "indefinite",
      to: "360 50 50"
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
      repeatCount: "indefinite",
      id: "default-translate"
    }
  }
});

export default animations;
