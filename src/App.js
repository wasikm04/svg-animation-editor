import React from 'react';
import SVGWindow from "./SVGWindow.js";
import Editor from "./Editor.js";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement : <div>Choose animation before edit!</div>,
      file: null,
      elementCategory : null,
      selectedAnim: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loadSVG = this.loadSVG.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleElementCategory = this.handleElementCategory.bind(this);
    this.handleselectedAnim = this.handleselectedAnim.bind(this);
  };

  handleElementCategory(category){
    this.setState({
      elementCategory: category
    });
  };

  handleselectedAnim(category){
    this.setState({
      selectedAnim: category
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
    var prevSelected = null
    var svg = this.state.file;
    for(var elem in svg){
      if(Array.isArray(svg[elem])){
        for(var iter in svg[elem]){
          if(svg[elem][iter]._attributes.id === elementID){
            svg[elem][iter]._attributes[propertyName] = propertyValue;
            prevSelected = svg[elem][iter]
          }
        }
      }else if(svg[elem]._attributes && svg[elem]._attributes.id){
        if(svg[elem]._attributes.id === elementID){
          svg[elem]._attributes[propertyName] = propertyValue;
          prevSelected = svg[elem];
          break;
        }
      }
    }
   

    this.setState({
      file: svg,
      selectedElement : prevSelected  
    });
  };
  
  
render(){
  return (
    <div className="col-12 row">
      <div  className="col-6">
      <Editor anim={this.state.selectedAnim} file={this.state.file} handleselectedAnim={this.handleselectedAnim} selectedElement={this.state.selectedElement} handleSelected={this.handleSelected} handleChange = {this.handleChange} loadSVG = {this.loadSVG} handleElementCategory={this.handleElementCategory}/>
      </div>
      <div className="col-6">
        <SVGWindow file={this.state.file}/>
       
      </div>
    </div>
  );
}
}

export default App;