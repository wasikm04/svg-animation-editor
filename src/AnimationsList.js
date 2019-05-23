import React from "react";

class AnimationsList extends React.Component {
    constructor(props) {
        super(props);      
        this.createAnimationsList = this.createAnimationsList.bind(this);
        this.OnSelectedAnimation = this.OnSelectedAnimation.bind(this);
        };

createAnimationsList(svg) {
    var resultArr = [];
    if (svg.animate && Array.isArray(svg.animate)) {
      for (var elem in svg.animate) {
        if (svg.animate[elem]._attributes && svg.animate[elem]._attributes.id) {
          resultArr.push(
            <option
              key={elem}
              value={svg.animate[elem]._attributes.id}
              className="col-md"
            >
              {svg.animate[elem]._attributes.id}
            </option>
          );
        }
      }
    } else if (
      svg.animate &&
      svg.animate._attributes &&
      svg.animate._attributes.id
    ) {
      resultArr.push(
        <option
          key={svg.animate._attributes.id}
          value={svg.animate._attributes.id}
          className="col-md"
        >
          {svg.animate._attributes.id}
        </option>
      );
    }
    if (svg.animateTransform && Array.isArray(svg.animateTransform)) {
      for (elem in svg.animateTransform) {
        if (
          svg.animateTransform[elem]._attributes &&
          svg.animateTransform[elem]._attributes.id
        ) {
          resultArr.push(
            <option
              key={elem}
              value={svg.animateTransform[elem]._attributes.id}
              className="col-md"
            >
              {svg.animateTransform[elem]._attributes.id}
            </option>
          );
        }
      }
    } else if (
      svg.animateTransform &&
      svg.animateTransform._attributes &&
      svg.animateTransform._attributes.id
    ) {
      resultArr.push(
        <option
          key={svg.animateTransform._attributes.id}
          value={svg.animateTransform._attributes.id}
          className="col-md"
        >
          {svg.animateTransform._attributes.id}
        </option>
      );
    }
    return resultArr;
  }

  OnSelectedAnimation(e) {
    var elem = e.target.value;
    this.props.handleselectedAnim(elem);
  }
  render(){
    return (
            <select
                className="custom-select"
                size="6"
                onChange={this.OnSelectedAnimation}
                >
                    {this.createAnimationsList(this.props.selectedElement)}
            </select>
    )};
}

export default AnimationsList;