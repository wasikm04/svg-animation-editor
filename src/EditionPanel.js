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

  handleChange(event) {
    this.props.onValueChange(event);
  }

  render() {
    const valueChange = this.props.valueChange;
    const title = this.props.fieldName;
    const name = this.props.name;
    return (
      <div className="row">
      <fieldset className="inline">
        <legend style={nameStyle}>{title}</legend>
        <input name = {name} style={inputStyle} value={valueChange}
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
      this.state = {value:this.props.valueChange};
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
    this.handleChange = this.handleChange.bind(this);
    this.handleColorBaseChange = this.handleColorBaseChange.bind(this);
    this.handleColorBorderChange = this.handleColorBorderChange.bind(this);
    this.handlesizeChange = this.handlesizeChange.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event.target.name,event.target.value,this.props.file.selectedElement);
  }

  handleColorBaseChange(value) {
    this.props.handleChange("basecolor",value,this.props.file.selectedElement);
  }

  handleColorBorderChange(value) {
    this.props.handleChange("bordercolor",value,this.props.file.selectedElement);
  }

  handlesizeChange(size) {
    this.props.handleChange("size",size,this.props.file.selectedElement);
  }


    render() {
      return (      
        <div height='calc(100vh/2)' className="container">
        <ul className="nav nav-tabs justify-content-center nav-justified nav-fill container row" role="tablist">
             <li className="nav-item">
               <a className="nav-link   active" data-toggle="tab" href="#css">Edycja Css</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" data-toggle="tab" href="#animations">Edycja animacji</a>
             </li>
         </ul>
       <div style={heightBox} className=" tab-content container">
       <div id="css" className="container tab-pane active">    
       {this.props.file?
       <div className ="container">
        
          <FiledInput
          name = "xposition"
          valueChange={this.props.selectedElement._atribiutes.cx}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleChange} />
          <FiledInput
          name = "yposition"
          valueChange={this.props.file.yposition}
          fieldName= 'Change Y Postion: '
          onValueChange={this.handleChange} />
          <ColorInput
          valueChange={this.props.file.basecolor}
          fieldName= 'Change Base color: '
          onValueChange={this.handleColorBaseChange} />
          <ColorInput
          valueChange={this.props.file.bordercolor}
          fieldName= 'Change Border color: '
          onValueChange={this.handleColorBorderChange} />
          <SliderInput
          valueChange={this.props.file.size}
          min = {1}
          max = {100}
          fieldName= 'Change size: '
          onValueChange={this.handlesizeChange} />
          </div>
          :null}
           </div>
          <div id="animations" className="container tab-pane"> 
 

        </div>
               </div>
         
          </div>
      );
    }
  }

  export default EditionPanel;