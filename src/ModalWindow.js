import React from "react";
import Modal from 'react-bootstrap/Modal'
import "./styles/App.css";
class ModalWindow extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show} 
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center">{this.props.header}</h4>
          {this.props.children}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.onHide}>Zamknij</button>
        </Modal.Footer>
      </Modal>
    );
  }
}
  export default ModalWindow;