import React from 'react';
import SVGWindow from "./SVGWindow.js";
import Editor from "./Editor.js";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement : {},
      file: null
      elementCategory : null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loadSVG = this.loadSVG.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleElementCategory = this.handleElementCategory.bind(this);
  };

  handleElementCategory(category){
    this.setState({
      elementCategory: category
    });
  };

  loadSVG(JSONFile){
    this.setState({
      file: JSONFile.svg
    });
  };

  handleSelected(element){
    this.setState({
      selectedElement: element
    });
  };
  
  handleChange(propertyName,propertyValue,elementID ) {
    //tu trzeba jakieś ogarnięte wyszukiwanie zmiennych i ustawianie
    var prevState = this.state.file;
    prevState.rect._attributes.x = propertyValue;

    this.setState({
      file:  prevState 
    });
  };
  
  
render(){
  return (
    <div className="col-12 row">
      <div  className="col-6">
        <Editor file={this.state.file} handleSelected={this.handleSelected} handleChange = {this.handleChange} loadSVG = {this.loadSVG} handleElementCategory={this.handleElementCategory}/>
      </div>
      <div className="col-6">
        <SVGWindow file={this.state.file}/>
       
      </div>
    </div>
  );
}
}

export default App;
