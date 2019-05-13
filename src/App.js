import React from 'react';
import SVGWindow from "./SVGWindow.js";
import Editor from "./Editor.js";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement : null,
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.loadSVG = this.loadSVG.bind(this);
  };

  loadSVG(){

  };
/*event,propertyName,propertyValue,elementID */
  handleChange(propertyName,propertyValue,elementID ) {
    this.setState({
      file:  [{ [propertyName] : propertyValue}]
    });
  };
  
render(){
  return (
    <div className="col-12 row">
      <div  className="col-6">
        <Editor file={this.state} handleChange = {this.handleChange} loadSVG = {this.loadSVG}/>
      </div>
      <div className="col-6">
        <SVGWindow file={this.state.file}/>
      </div>
    </div>
  );
}
}

export default App;
