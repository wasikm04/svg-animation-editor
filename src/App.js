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
    this.handleSelected = this.handleSelected.bind(this);
  };

  /*Tymczasowo w oddzielnej zmiennej żeby potestować a nie zaśmiecać tego file*/
  loadSVG(JSONFile){
    this.setState({
      rawfile: JSONFile
    });
  };

  handleSelected(elementID){
    this.setState({
      selectedElement: elementID
    });
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
        <Editor file={this.state} handleSelected={this.handleSelected} handleChange = {this.handleChange} loadSVG = {this.loadSVG}/>
      </div>
      <div className="col-6">
        <SVGWindow file={this.state.rawfile}/>
      </div>
    </div>
  );
}
}

export default App;
