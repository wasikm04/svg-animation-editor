import React from "react";
import "./../styles/App.css";
class AnimationsList extends React.Component {
  constructor(props) {
    super(props);
    this.createAnimationsList = this.createAnimationsList.bind(this);
    this.OnSelectedAnimation = this.OnSelectedAnimation.bind(this);
  }

  createAnimationsList(svg) {
    var resultArr = [];
    for (var anim in svg) {
      if(["animate","animateTransform","animateMotion"].includes(anim)){
        if (svg[anim] && Array.isArray(svg[anim])) {
          for (var elem in svg[anim]) {
            if (svg[anim][elem]._attributes && svg[anim][elem]._attributes.id) {
              resultArr.push(
                <option
                  key={elem}
                  value={svg[anim][elem]._attributes.id}
                  className="col-md"
                >
                  {svg[anim][elem]._attributes.id}
                </option>
              );
            }
          }
        } else if (
          svg[anim] &&
          svg[anim]._attributes &&
          svg[anim]._attributes.id
        ) {
          resultArr.push(
            <option
              key={svg[anim]._attributes.id}
              value={svg[anim]._attributes.id}
              className="col-md"
            >
              {svg[anim]._attributes.id}
            </option>
          );
        }
    }
  }
    return resultArr;
  }

  OnSelectedAnimation(e) {
    var elem = e.target.value;
    this.props.handleselectedAnim(elem);
  }
  render() {
    return (
      <select
      key = {23241}
        style={{ height: "100px" }}
        className="custom-select scrollable-config"
        size="6"
        onChange={this.OnSelectedAnimation}
      >
        {this.createAnimationsList(this.props.selectedElement)}
      </select>
    );
  }
}

export default AnimationsList;
