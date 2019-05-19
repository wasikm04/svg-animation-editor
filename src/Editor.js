import React from 'react';
import EditionPanel from "./EditionPanel.js"
import ElementsList from "./ElementsList.js"
class Editor extends React.Component {

    render() {
      return (
        <div  className="container">
          <ElementsList file={this.props.file} handleSelected={this.props.handleSelected} loadSVG = {this.props.loadSVG} handleElementCategory={this.props.handleElementCategory}/>
          <EditionPanel file={this.props.file} handleChange = {this.props.handleChange}/>
        </div>
      );
    }
  }

  export default Editor;