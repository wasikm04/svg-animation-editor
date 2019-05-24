import React from "react";
import "react-input-range/lib/css/index.css";
import "./styles/App.css";
import { title, fillHeight, heightBox, marginTitle } from "./EditionConfig.js";
import { FiledInput, ColorInput, SliderInput } from "./InputHelpers.js";
import {
  createAnimationTtransformInput,
  createAnimationInput
} from "./AnimationHelpers.js";
import AnimationsList from "./AnimationsList.js";

class EditionPanel extends React.Component {
  constructor(props) {
    super(props);
    this.createAnimation = "translate";
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
      return <div>Choose animation before edit!</div>;
    }
    return resultArr;
  }

  render() {
    var editor = [];
    var animation = [];
    if (this.props.selectedElement !== null) {
      animation = this.createAnimationEdit(this.props.selectedElement);

      for (var propAttr in this.props.selectedElement._attributes) {
        if (this.props.selectedElement._attributes[propAttr]) {
          var tempField = null;
          if (propAttr === "id") {
            tempField = (
              <div style={title}>
                {" "}
                Editing element id:{" "}
                <strong>
                  {this.props.selectedElement._attributes[propAttr]}
                </strong>
              </div>
            );
            editor.push(tempField);
          } else if (propAttr === "fill") {
            tempField = (
              <ColorInput
                valueChange={this.props.selectedElement._attributes[propAttr]}
                fieldName={"Change " + propAttr + " color: "}
                onValueChange={this.handlefill}
              />
            );

            editor.push(tempField);
          } else if (propAttr === "stroke") {
            tempField = (
              <ColorInput
                valueChange={this.props.selectedElement._attributes[propAttr]}
                fieldName={"Change " + propAttr + " color: "}
                onValueChange={this.handlestroke}
              />
            );

            editor.push(tempField);
          } else if (propAttr === "fill-opacity") {
            tempField = (
              <SliderInput
                valueChange={this.props.selectedElement._attributes[propAttr]}
                min={0.01}
                max={1}
                step={0.01}
                fieldName={"Change " + propAttr + ":"}
                onValueChange={this.handlefillopacity}
              />
            );

            editor.push(tempField);
          } else if (propAttr === "stroke-opacity") {
            tempField = (
              <SliderInput
                valueChange={this.props.selectedElement._attributes[propAttr]}
                min={0.01}
                max={1}
                step={0.01}
                fieldName={"Change " + propAttr + ":"}
                onValueChange={this.handlestrokeopacity}
              />
            );

            editor.push(tempField);
          } else if (propAttr === "opacity") {
            tempField = (
              <SliderInput
                valueChange={this.props.selectedElement._attributes[propAttr]}
                min={0.01}
                max={1}
                step={0.01}
                fieldName={"Change " + propAttr + ":"}
                onValueChange={this.handleopacity}
              />
            );
            editor.push(tempField);
          } else {
            tempField = (
              <FiledInput
                name={propAttr}
                valueChange={this.props.selectedElement._attributes[propAttr]}
                fieldName={"Change " + propAttr + " value:"}
                onValueChange={this.handleChange}
              />
            );

            editor.push(tempField);
          }
        }
      }
    }
    return (
      <div height="calc(100vh/2)" className="container pr-0 pl-15">
        <ul
          className="nav nav-tabs justify-content-center nav-justified nav-fill container row"
          role="tablist"
        >
          <li className="nav-item">
            <a className="nav-link   active" data-toggle="tab" href="#css">
              Edycja parametrów obiektu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#animations">
              Edycja parametrów animacji
            </a>
          </li>
        </ul>
        <div
          style={heightBox}
          className=" tab-content container scrollable-config"
        >
          <div id="css" className="container tab-pane active">
            <div style={marginTitle} className="container">
              {editor}
            </div>
          </div>
          <div
            style={fillHeight}
            id="animations"
            className="container tab-pane"
          >
            <h4>Lista animacji</h4>
            <div className="col-12 row mt-2">
              <div className="col-7 pl-0">
                <label className="mr-2">
                  <select
                    className="form-control"
                    onChange={e => {
                      this.createAnimation = e.target.value;
                    }}
                  >
                    <option value="translate">Translacja</option>
                    <option value="rotate">Rotacja</option>
                  </select>
                </label>
                <button
                  className="btn btn-primary mb-2"
                  onClick={this.handleSubmit}
                >
                  Dodaj animacje
                </button>
              </div>
              <span className="col-5">
                {this.props.anim ? (
                  <button
                    className="btn btn-primary mb-2"
                    onClick={this.deleteAnimation}
                  >
                    Usuń animacje
                  </button>
                ) : null}
              </span>
              {this.props.selectedElement !== null
                  ? <AnimationsList handleselectedAnim={this.props.handleselectedAnim} selectedElement={this.props.selectedElement}/>
                  : null}
              <div className="container pt-2">{animation}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditionPanel;
