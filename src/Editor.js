import React from 'react';
import EditionPanel from "./EditionPanel.js"
import ElementsList from "./ElementsList.js"
class Editor extends React.Component {

    render() {
      return (
        <div  className="container">
        <ElementsList/>
        <EditionPanel/>
        </div>
      );
    }
  }

  export default Editor;