import React from 'react';

function EditingTitle(props) {
  return (
    <p>Edytujesz element: <strong>{props.elemName}</strong></p>
  );
}

function EditingTitle(props) {
  return (
    <p>Edytujesz element: <strong>{props.elemName}</strong></p>
  );
}


class EditionPanel extends React.Component {

    render() {
      return (      
        <div className="container">
        <div className="row">
                <EditingTitle
        elemName="Element 1" />
        </div>
        <div className="row">test</div>
        </div>
      );
    }
  }

  export default EditionPanel;