import React from "react";
import "react-input-range/lib/css/index.css";
import "./../styles/App.css";
import { title, fillHeight, heightBox } from "../consts/EditionConfig.js";
import { FiledInput, ColorInput, SliderInput } from "../helpers/InputHelpers.js";
import {
  createAnimationTtransformInput,
  createAnimationInput
} from "../helpers/AnimationHelpers.js";
import AnimationsList from "../helpers/AnimationsList.js";
import animationsDefault from "../consts/defaultProperties";

class EditionPanel extends React.Component {
  constructor(props) {
    super(props);
    this.createAnimation = "rotate_animateTransform";
    this.handleChangeAnimation = this.handleChangeAnimation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlefill = this.handlefill.bind(this);
    this.handlestroke = this.handlestroke.bind(this);
    this.handlefillopacity = this.handlefillopacity.bind(this);
    this.handlestrokeopacity = this.handlestrokeopacity.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.handleopacity = this.handleopacity.bind(this);
    this.deleteAnimation = this.deleteAnimation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    if (this.props.selectedElement) {
      this.props.addAnimation(
        this.props.selectedElement._attributes.id,
        this.createAnimation
      );
    }
  }

  deleteAnimation() {
    this.props.handleChangeAnimation(
      null,
      null,
      this.props.anim,
      this.props.selectedElement._attributes.id,
      true
    );
  }

  handleChangeAnimation(event) {
    this.props.handleChangeAnimation(
      event.target.name,
      event.target.value,
      this.props.anim,
      this.props.selectedElement._attributes.id,
      false
    );
  }

  handleChange(event) {
    this.props.handleChange(
      event.target.name,
      event.target.value,
      this.props.selectedElement._attributes.id
    );
  }

  handlefill(value) {
    this.props.handleChange(
      "fill",
      value,
      this.props.selectedElement._attributes.id
    );
  }

  handlestroke(value) {
    this.props.handleChange(
      "stroke",
      value,
      this.props.selectedElement._attributes.id
    );
  }

  handlefillopacity(value) {
    this.props.handleChange(
      "fill-opacity",
      value,
      this.props.selectedElement._attributes.id
    );
  }

  handlestrokeopacity(value) {
    this.props.handleChange(
      "stroke-opacity",
      value,
      this.props.selectedElement._attributes.id
    );
  }

  handleopacity(value) {
    this.props.handleChange(
      "opacity",
      value,
      this.props.selectedElement._attributes.id
    );
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  createAnimationEdit(svg) {
    var resultArr = [];

    createAnimationInput(
      svg,
      resultArr,
      this.props.anim,
      this.handleChangeAnimation
    );

    createAnimationTtransformInput(
      svg,
      resultArr,
      this.props.anim,
      this.handleChangeAnimation
    );

    if (resultArr.length === 0) {
      return (
        <div className="container text-center">
          Wybierz animacje z listy aby ją edytować
        </div>
      );
    }
    return resultArr;
  }

  setName(attr) {
    var tempName = animationsDefault[attr];
    if (typeof tempName === "undefined") {
      tempName = attr + ":";
    }
    return tempName;
  }

  render() {
    var editor = [];
    var animation = [];
    if (this.props.selectedElement !== null) {
      animation = this.createAnimationEdit(this.props.selectedElement);

      for (var propAttr in this.props.selectedElement._attributes) {
        var tempField = null;
        if (propAttr === "id") {
          tempField = (
            <div key={"id" + propAttr} style={title}>
              {" "}
              Edytujesz obiekt o nazwie:{" "}
              <strong>
                {this.props.selectedElement._attributes[propAttr]}
              </strong>
            </div>
          );
          editor.push(tempField);
        } else if (propAttr === "fill") {
          tempField = (
            <ColorInput
              key={"color" + propAttr}
              valueChange={this.props.selectedElement._attributes[propAttr]}
              fieldName={this.setName(propAttr)}
              onValueChange={this.handlefill}
            />
          );

          editor.push(tempField);
        } else if (propAttr === "stroke") {
          tempField = (
            <ColorInput
              key={"color" + propAttr}
              valueChange={this.props.selectedElement._attributes[propAttr]}
              fieldName={this.setName(propAttr)}
              onValueChange={this.handlestroke}
            />
          );

          editor.push(tempField);
        } else if (propAttr === "fill-opacity") {
          tempField = (
            <SliderInput
              valueChange={this.props.selectedElement._attributes[propAttr]}
              key={"slider" + propAttr}
              min={0.01}
              max={1}
              step={0.01}
              fieldName={this.setName(propAttr)}
              onValueChange={this.handlefillopacity}
            />
          );

          editor.push(tempField);
        } else if (propAttr === "stroke-opacity") {
          tempField = (
            <SliderInput
              valueChange={this.props.selectedElement._attributes[propAttr]}
              key={"slider" + propAttr}
              min={0.01}
              max={1}
              step={0.01}
              fieldName={this.setName(propAttr)}
              onValueChange={this.handlestrokeopacity}
            />
          );

          editor.push(tempField);
        } else if (propAttr === "opacity") {
          tempField = (
            <SliderInput
              valueChange={this.props.selectedElement._attributes[propAttr]}
              key={"slider" + propAttr}
              min={0.01}
              max={1}
              step={0.01}
              fieldName={this.setName(propAttr)}
              onValueChange={this.handleopacity}
            />
          );
          editor.push(tempField);
        } else {
          tempField = (
            <FiledInput
              name={propAttr}
              key={propAttr}
              valueChange={this.props.selectedElement._attributes[propAttr]}
              fieldName={this.setName(propAttr)}
              onValueChange={this.handleChange}
            />
          );

          editor.push(tempField);
        }
      }
    }
    return (
      <div style={{ paddingLeft: "0px" }} className="container pr-0">
        <ul
          className="nav nav-tabs justify-content-center nav-justified nav-fill container row pr-0 ml-0"
          role="tablist"
        >
          <li className="nav-item">
            <a className="nav-link   active" data-toggle="tab" href="#css">
              Edycja parametrów obiektu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#animations">
              Lista animacji obiektu
            </a>
          </li>
        </ul>
        <div
          style={heightBox}
          className=" tab-content container scrollable-config"
        >
          <div id="css" className="container tab-pane active">
            <div className="container">{editor}</div>
          </div>
          <div
            style={fillHeight}
            id="animations"
            className="container tab-pane"
          >
            <div className="col-12 row mt-2">
              <div
                style={{
                  float: "right",
                  flex: "0 0 100%",
                  maxWidth: "100%!important"
                }}
                className="col-7 pl-0"
              >
                <label className="mr-1">
                  <select
                    className="form-control"
                    onChange={e => {
                      this.createAnimation = e.target.value;
                    }}
                  >
                    <option value="rotate_animateTransform">Rotacja</option>
                    <option value="translate_animateTransform">
                      Translacja
                    </option>
                    <option value="fade_animate">Zanikanie</option>
                    <option value="rotateInPlace_animateTransform">
                      Obracanie
                    </option>
                  </select>
                </label>
                <button
                  className="btn btn-primary mb-1"
                  onClick={this.handleSubmit}
                >
                  Dodaj animacje
                </button>
              </div>
              <span
                style={{ float: "right", paddingRight: "0px" }}
                className="col-5"
              >
                {this.props.anim ? (
                  <button
                    style={{ float: "right" }}
                    className="btn btn-primary mb-1"
                    onClick={this.deleteAnimation}
                  >
                    Usuń animacje
                  </button>
                ) : null}
              </span>
              {this.props.selectedElement !== null ? (
                <AnimationsList
                  handleselectedAnim={this.props.handleselectedAnim}
                  selectedElement={this.props.selectedElement}
                />
              ) : null}
              <div className="container pt-2">{animation}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditionPanel;
