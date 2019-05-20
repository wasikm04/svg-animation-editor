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
  width: '55%',
  marginBottom: '15px'
}

const title = {
  marginLeft: '-15px',
  marginBottom: '10px',
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
    this.handlefill = this.handlefill.bind(this);
    this.handlestroke = this.handlestroke.bind(this);
    this.handlefillopacity = this.handlefillopacity.bind(this);
    this.handlestrokeopacity = this.handlestrokeopacity.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event.target.name,event.target.value,this.props.selectedElement._attributes.id);
  }

  handlefill(value) {
    this.props.handleChange("fill",value,this.props.selectedElement._attributes.id);
  }

  handlestroke(value) {
    this.props.handleChange("stroke",value,this.props.selectedElement._attributes.id);
  }

  handlefillopacity(value) {
    this.props.handleChange("fill-opacity",value,this.props.selectedElement._attributes.id);
  }

  handlestrokeopacity(value) {
    this.props.handleChange("stroke-opacity",value,this.props.selectedElement._attributes.id);
  }


  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

    render() {
      var editor = []
      if(this.props.selectedElement !== null){
       
      for(var propAttr in this.props.selectedElement._attributes ){
      if(this.props.selectedElement._attributes[propAttr]){   
        
        if(propAttr==='id'){
          var tempField = <div style={title}> Editing element id: <strong>{this.props.selectedElement._attributes[propAttr]}</strong></div>
          editor.push(tempField)
        }
        else if(propAttr==='fill'){

          var tempField = <ColorInput
          valueChange={this.props.selectedElement._attributes[propAttr]}
          fieldName= {'Change '+ propAttr +' color: '}
          onValueChange={this.handlefill} />
      
          editor.push(tempField)

        }else if(propAttr==='stroke'){

          var tempField = <ColorInput
          valueChange={this.props.selectedElement._attributes[propAttr]}
          fieldName= {'Change '+ propAttr +' color: '}
          onValueChange={this.handlestroke} />
      
          editor.push(tempField)

        }else if(propAttr==='fill-opacity'){
          var tempField = <SliderInput
          valueChange={this.props.selectedElement._attributes[propAttr]}
          min = {0.01}
          max = {1}
          step = {0.01}
          fieldName= {'Change '+ propAttr +':'}
          onValueChange={this.handlefillopacity} />
          
          editor.push(tempField)

        }else if(propAttr==='stroke-opacity'){
          var tempField = <SliderInput
          valueChange={this.props.selectedElement._attributes[propAttr]}
          min = {0.01}
          max = {1}
          step = {0.01}
          fieldName= {'Change '+ propAttr +':'}
          onValueChange={this.handlestrokeopacity} />
          
          editor.push(tempField)
        }else{

          var tempField = <FiledInput
          name = {propAttr}
          valueChange={ this.props.selectedElement._attributes[propAttr] }
          fieldName= {'Change ' + propAttr + ' value:'}
          onValueChange={this.handleChange} />   
      
          editor.push(tempField)
        }
      }
    }
    var animations = [];
    for(var anmt in this.props.selectedElement){
      
    }

    }
    


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
       <div className ="container">
          {editor}
          </div>
           </div>
          <div id="animations" className="container tab-pane"> 
 
          <div className="col-12 row">
      <div  className="col-6">
        kontrolki
        </div>
        <div  className="col-6">
          lista
          {/* TUTAJ DODAJ LISTE   */}
        </div>

        </div>

        </div>
        </div> 
        </div>
      );
    
  };
}
  export default EditionPanel;