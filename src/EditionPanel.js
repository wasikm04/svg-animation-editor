import React from "react";
import { HuePicker } from "react-color";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./styles/App.css";
import {
  title,
  fillHeight,
  width60,
  heightBox,
  inputStyle,
  marginTitle,
  nameSliderStyle,
  nameColorStyle,
  nameStyle
} from "./EditionConfig.js";

class FiledInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onValueChange(event);
  }

  render() {
    const valueChange = this.props.valueChange;
    const title = this.props.fieldName;
    const name = this.props.name;
    return (
      <div className="row">
        <legend style={nameStyle}>{title}</legend>
        <input
          name={name}
          className="form-control w-50"
          style={inputStyle}
          value={valueChange}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
class ColorInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (color, event) => {
    this.props.onValueChange(color.hex);
  };

  render() {
    const valueChange = this.props.valueChange;
    const title = this.props.fieldName;
    return (
      <div>
        <div className="row">
          <fieldset>
            <legend style={nameColorStyle}>{title}</legend>
          </fieldset>
        </div>
        <div className="row">
          <HuePicker color={valueChange} onChangeComplete={this.handleChange} />
        </div>
      </div>
    );
  }
}

class SliderInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: parseInt(this.props.valueChange) };
  }

  handleChange(e) {
    this.setState(e);
    this.props.onValueChange(this.state.value);
  }

  render() {
    const title = this.props.fieldName;
    const min = this.props.min;
    const max = this.props.max;
    const step = this.props.step;
    return (
      <div>
        <div className="row">
          <fieldset className="inline">
            <legend style={nameSliderStyle}>{title}</legend>
          </fieldset>
        </div>
        <div style={width60} className="row ">
          <InputRange
            maxValue={max}
            step={step}
            minValue={min}
            value={this.state.value}
            onChange={value => this.handleChange({ value })}
          />
        </div>
      </div>
    );
  }
}

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
    this.createList = this.createList.bind(this);
    this.OnSelectedAnimation = this.OnSelectedAnimation.bind(this);
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

  createList(svg) {
    var resultArr = [];
    if (svg.animate && Array.isArray(svg.animate)) {
      for (var elem in svg.animate) {
        //0,1
        // for(var itr in svg.animate[elem]){
        //var tmparr=[[elem],[itr]];
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
        //0,1
        // for(var itr in svg.animate[elem]){
        //var tmparr=[[elem],[itr]];
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

  createAnimationInput() {}

  createAnimationEdit(svg) {
    var resultArr = [];
    if (svg.animate && Array.isArray(svg.animate)) {
      for (var elem in svg.animate) {
        //0,1
        if (
          typeof svg.animate[elem]._attributes !== "undefined" &&
          svg.animate[elem]._attributes.id === this.props.anim
        ) {
          for (var itr in svg.animate[elem]) {
            for (var anim in svg.animate[elem][itr]) {
              var tempField = (
                <FiledInput
                  name={anim}
                  valueChange={svg.animate[elem][itr][anim]}
                  fieldName={"Change " + anim + " value:"}
                  onValueChange={this.handleChangeAnimation}
                />
              );

              resultArr.push(tempField);
            }
          }
        }
      }
    } else if (
      svg.animate &&
      svg.animate._attributes &&
      svg.animate._attributes.id
    ) {
      if (svg.animate._attributes.id === this.props.anim) {
        for (anim in svg.animate._attributes) {
          tempField = (
            <FiledInput
              name={anim}
              valueChange={svg.animate._attributes[anim]}
              fieldName={"Change " + anim + " value:"}
              onValueChange={this.handleChangeAnimation}
            />
          );

          resultArr.push(tempField);
        }
      }
    }

    if (svg.animateTransform && Array.isArray(svg.animateTransform)) {
      for (var elem in svg.animateTransform) {
        //0,1
        if (
          typeof svg.animateTransform[elem]._attributes !== "undefined" &&
          svg.animateTransform[elem]._attributes.id === this.props.anim
        ) {
          for (var itr in svg.animateTransform[elem]) {
            for (var anim in svg.animateTransform[elem][itr]) {
              var tempField = (
                <FiledInput
                  name={anim}
                  valueChange={svg.animateTransform[elem][itr][anim]}
                  fieldName={"Change " + anim + " value:"}
                  onValueChange={this.handleChangeAnimation}
                />
              );

              resultArr.push(tempField);
            }
          }
        }
      }
    } else if (
      svg.animateTransform &&
      svg.animateTransform._attributes &&
      svg.animateTransform._attributes.id
    ) {
      if (svg.animateTransform._attributes.id === this.props.anim) {
        for (anim in svg.animateTransform._attributes) {
          tempField = (
            <FiledInput
              name={anim}
              valueChange={svg.animateTransform._attributes[anim]}
              fieldName={"Change " + anim + " value:"}
              onValueChange={this.handleChangeAnimation}
            />
          );

          resultArr.push(tempField);
        }
      }
    }

    if (resultArr.length === 0) {
      return <div>Choose animation before edit!</div>;
    }
    return resultArr;
  }

  OnSelectedAnimation(e) {
    var elem = e.target.value;
    this.props.handleselectedAnim(elem);
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
      <div height="calc(100vh/2)" className="container pr-0 pl-0">
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
                  Dodaj
                </button>
              </div>
              <span className="col-5">
                {this.props.anim ? (
                  <button
                    className="btn btn-primary mb-2"
                    onClick={this.deleteAnimation}
                  >
                    Usuń wybrane
                  </button>
                ) : null}
              </span>
              <select
                className="custom-select"
                size="6"
                onChange={this.OnSelectedAnimation}
              >
                {this.props.selectedElement !== null
                  ? this.createList(this.props.selectedElement)
                  : null}
              </select>
              <div className="container pt-2">{animation}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditionPanel;
