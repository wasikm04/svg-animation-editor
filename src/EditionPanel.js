import React from 'react';
import { HuePicker } from 'react-color';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const nameStyle = {
  float: 'left',
  display: 'inline',
  marginBottom: "0px",
  fontSize: '1em',
};

const nameColorStyle = {
  float: 'left',
  display: 'inline',
  marginBottom: "5px",
  fontSize: '1em',
};

const nameSliderStyle = {
  float: 'left',
  display: 'inline',
  marginBottom: "14px",
  fontSize: '1em',
};

const inputStyle = {
  float: 'left',
  display: 'inline',
  marginTop: "5px",
};

const heightBox = {
  maxHeight:'250px',
  overflowY: 'scroll',
};

const width60 = {
  width: '55%'
}

function EditingTitle(props) {
  return (
    <p>Edytujesz element: <strong>{props.elemName}</strong></p>
  );
}

class FiledInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onValueChange(e.target.value);
  }

  render() {
    const valueChange = this.props.valueChange;
    const title = this.props.fieldName;
    return (
      <div className="row">
      <fieldset className="inline">
        <legend style={nameStyle}>{title}</legend>
        <input style={inputStyle} value={valueChange}
               onChange={this.handleChange} />
              
      </fieldset>
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
        <HuePicker
          color={valueChange}
           onChangeComplete={ this.handleChange }
          />
        </div>
        </div>
      );
    }

  }


  class SliderInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {value:50};
    }
  
    handleChange(e) {
      this.setState(e)
      this.props.onValueChange(this.state.value);
    }
  
    render() {
      const title = this.props.fieldName;
      const min = this.props.min;
      const max = this.props.max;
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
        minValue={min}
        value={this.state.value}
        onChange={value => this.handleChange({ value })} />
        </div>
        </div>
      );
    }
  }

class EditionPanel extends React.Component {

  constructor(props) {
    super(props);
    this.handleXPositionChange = this.handleXPositionChange.bind(this);
    this.handleYPositionChange = this.handleYPositionChange.bind(this);
    this.handleBaseColorChange = this.handleBaseColorChange.bind(this);
    this.handleBorderColorChange = this.handleBorderColorChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.state = {xposition: 50, yposition: 250, baseColor: '#ffa900', borderColor: '#00ff42', size: 50};
  }

  handleXPositionChange(valueChange) {
    this.props.handleChange("xposition",valueChange,this.props.file.selectedElement);
    this.setState({xposition: valueChange});
  }

  handleYPositionChange(valueChange) {
    this.setState({yposition: valueChange});
  }

  handleBaseColorChange(valueChange) {
    this.setState({baseColor: valueChange});
  }

  handleBorderColorChange(valueChange) {
    this.setState({borderColor: valueChange});
  }

  handleSizeChange(valueChange) {
    this.setState({size: valueChange});
  }

    render() {
      return (      
        <div height='calc(100vh/2)' className="container">
        <div className="container">
        <div className="row">
                <EditingTitle
        elemName="Element 1" />
        </div>
        <div style={heightBox} className="container">
          <FiledInput
          valueChange={this.state.xposition}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleXPositionChange} />
          <FiledInput
          valueChange={this.state.yposition}
          fieldName= 'Change Y Postion: '
          onValueChange={this.handleYPositionChange} />
          <ColorInput
          valueChange={this.state.baseColor}
          fieldName= 'Change Base color: '
          onValueChange={this.handleBaseColorChange} />
          <ColorInput
          valueChange={this.state.borderColor}
          fieldName= 'Change Border color: '
          onValueChange={this.handleBorderColorChange} />
          <SliderInput
          valueChange={this.state.size}
          min = {1}
          max = {100}
          fieldName= 'Change size: '
          onValueChange={this.handleSizeChange} />
          <FiledInput
          valueChange={this.state.xposition}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleXPositionChange} />
          <FiledInput
          valueChange={this.state.xposition}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleXPositionChange} />
          <FiledInput
          valueChange={this.state.xposition}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleXPositionChange} />
          <FiledInput
          valueChange={this.state.xposition}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleXPositionChange} />
          <FiledInput
          valueChange={this.state.xposition}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleXPositionChange} />
          <FiledInput
          valueChange={this.state.xposition}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleXPositionChange} />
          <FiledInput
          valueChange={this.state.xposition}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleXPositionChange} />
          <FiledInput
          valueChange={this.state.xposition}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleXPositionChange} />
          <FiledInput
          valueChange={this.state.xposition}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleXPositionChange} />
          <FiledInput
          valueChange={this.state.xposition}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleXPositionChange} />
          <FiledInput
          valueChange={this.state.xposition}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleXPositionChange} />
          <FiledInput
          valueChange={this.state.xposition}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleXPositionChange} />

         
          </div>
          <p>posX: {this.state.xposition} posY: {this.state.yposition} baseColour: {this.state.baseColor} borderColour: {this.state.borderColor}  size: {this.state.size}</p>
          </div>
          </div>
      );
    }
  }

  export default EditionPanel;