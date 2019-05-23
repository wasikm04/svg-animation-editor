import React from "react";
import { HuePicker } from "react-color";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./styles/App.css";
import {
  width60,
  inputStyle,
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

export { FiledInput, ColorInput, SliderInput };
