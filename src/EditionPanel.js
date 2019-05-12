import React from 'react';

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
      <fieldset>
        <legend>{title}</legend>
        <input value={valueChange}
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
        <div className="container">
        <div className="row">
                <EditingTitle
        elemName="Element 1" />
        </div>
        <FiledInput
          valueChange={this.state.xposition}
          fieldName= 'Change X Postion: '
          onValueChange={this.handleXPositionChange} />
          <p>posX: {this.state.xposition}</p>
          </div>
      );
    }
  }

  export default EditionPanel;