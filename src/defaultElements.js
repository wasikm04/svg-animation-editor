const animations = {
  rotate_animateTransform: {
    _attributes: {
      attributeName: "transform",
      type: "rotate",
      begin: "0s",
      dur: "9s",
      from: "0 0 0",
      id: "default-rotate",
      repeatCount: "indefinite",
      additive: "sum",
      to: "360 20 20"
    }
  },
  rotateInPlace_animateTransform: {
    _attributes: {
      attributeName: "transform",
      type: "rotate",
      begin: "0s",
      dur: "9s",
      from: "0 20 20",
      id: "default-rotate",
      repeatCount: "indefinite",
      additive: "sum",
      to: "360 20 20"
    }
  },
  translate_animateTransform: {
    _attributes: {
      attributeName: "transform",
      type: "translate",
      from: "0 0",
      to: "50 50",
      begin: "0s",
      dur: "9s",
      additive: "sum",
      repeatCount: "indefinite",
      id: "default-translate"
    }
  },
  fade_animate: {
    _attributes: {
      attributeName: "opacity",
      attributeType: "CSS",
      from: "1",
      to: "0",
      dur: "6s",
      repeatCount: "indefinite",
      id: "default-fade"
    }
  }
};

const objects = ["circle", "rect", "polygon", "ellipse", "path", "g"];
export { animations, objects };
