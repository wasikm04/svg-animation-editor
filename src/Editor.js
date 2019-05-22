import React from 'react';
import EditionPanel from "./EditionPanel.js"
import ElementsList from "./ElementsList.js"
class Editor extends React.Component {

    render() {
      return (
        <div  className="container">
          <ElementsList export={this.props.export} file={this.props.file} handleSelected={this.props.handleSelected} loadSVG = {this.props.loadSVG} handleElementCategory={this.props.handleElementCategory}/>
          <EditionPanel addAnimation={this.props.addAnimation} anim = {this.props.anim} handleselectedAnim={this.props.handleselectedAnim} selectedElement={this.props.selectedElement} handleChange = {this.props.handleChange} handleChangeAnimation = {this.props.handleChangeAnimation}/>
        </div>
      );
    }
  }

  export default Editor;