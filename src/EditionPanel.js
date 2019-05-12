import React from 'react';


const nameStyle = {
  float: 'left',
  display: 'inline',
  width: '60%',
  marginBottom: "0px",
};

const inputStyle = {
  float: 'left',
  display: 'inline',
  width: '40%',
  marginTop: "5px",
};

const heightBox = {
  maxHeight:'250px',
  overflowY: 'scroll',
};

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

class EditionPanel extends React.Component {

  constructor(props) {
    super(props);
    this.handleXPositionChange = this.handleXPositionChange.bind(this);
    this.state = {xposition: 50};
  }

  handleXPositionChange(valueChange) {
    this.setState({xposition: valueChange});
  }

    render() {
      return (      
        <div height='calc(100vh/2)' className="container">
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
          <p>posX: {this.state.xposition}</p>
          </div>
      );
    }
  }

  export default EditionPanel;