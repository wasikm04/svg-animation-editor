import React from "react";
import "./../styles/App.css";
import ModalWindow from "./ModalWindow.js";
import Upload from "./Upload.js";
import ReactDOMServer from "react-dom/server";
import convertStateToJSX from "../helpers/SVGCreator.js";

class SVGWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImport: false,
      showExport: false
    };
    this.svg = null;
    this.toggleModalImport = this.toggleModalImport.bind(this);
    this.toggleModalEksport = this.toggleModalEksport.bind(this);
  }

  toggleModalImport() {
    this.setState({ showImport: !this.state.showImport });
  }

  toggleModalEksport() {
    this.props.setExport(ReactDOMServer.renderToString(this.svg));
    this.setState({
      showExport: !this.state.showExport
    });
  }
  render() {
    if (this.props.file) {
      this.svg = convertStateToJSX(this.props.file);
    }
    return (
      <div className="container text-center mt-2 border rounded h-100 d-inline-block">
        <button
          className="btn btn-secondary mr-1 mt-3"
          onClick={this.toggleModalImport}
        >
          Importuj
        </button>
        <ModalWindow
          show={this.state.showImport}
          onHide={this.toggleModalImport}
          header={"Importuj plik SVG"}
          title={"Import"}
          children={<Upload loadSVG={this.props.loadSVG} />}
        />
        <button
          className="btn btn-secondary  mt-3"
          onClick={this.toggleModalEksport}
        >
          Eksportuj
        </button>
        <ModalWindow
          show={this.state.showExport}
          onHide={this.toggleModalEksport}
          title={"Eksport"}
          children={
            this.props.export ? (
              <textarea
                key="3123"
                className="area col-md"
                rows="8"
                value={this.props.export}
                readOnly
              />
            ) : null
          }
        />
        <div className="container fill panel panel-primary">
          <div className="panel-body container fill">
            <div className="container fill text-center">
              {this.svg
                ? this.svg
                : "Aby rozpocząć edycję zaimportuj plik z rozszerzeniem .svg"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SVGWindow;
