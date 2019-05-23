import React from "react";
import convert from "xml-js";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.handleChoose = this.handleChoose.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }
  handleChoose(event) {
    event.preventDefault();
    this.reader = new FileReader();
    this.reader.onload = this.handleLoad;
    this.reader.readAsText(event.target.files[0]);
    //this.reader.readAsDataURL(event.target.files[0]); //data:image/svg+xml;base64,PD9...
  }

  handleLoad(event) {
    var content = this.reader.result;
    //var parser = new DOMParser();
    //content = parser.parseFromString(content, "image/svg+xml");
    var result = convert.xml2json(content, {
      compact: true,
      spaces: 4,
      ignoreDeclaration: true
    });
    result = JSON.parse(result);
    this.props.loadSVG(result);
  }

  render() {
    return (
      <div className="custom-file">
        <input
          accept=".svg"
          className="custom-file-input"
          id="SVGFile"
          type="file"
          onChange={e => {
            this.handleChoose(e);
          }}
        />
        <label className="custom-file-label" htmlFor="SVGFile">
          Wybierz plik
        </label>
      </div>
    );
  }
}

export default Upload;
