import React from 'react';

class Upload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        file: null
      };
      this.handleChoose = this.handleChoose.bind(this);
      this.handleLoad = this.handleLoad.bind(this);
    }
    handleChoose(event) {
      event.preventDefault();
      this.reader = new FileReader();
      this.reader.onload = this.handleLoad;
      this.reader.readAsText(event.target.files[0]);
    }
  
    handleLoad(event) {
      var content = this.reader.result;
      var parser = new DOMParser();
      console.log(content)
      content = parser.parseFromString(content, "image/svg+xml"); 
      var arr = Array.from(content.children)
      console.log(arr)
      console.log(content.documentElement)
      console.log(content.documentElement.attributes)
      this.setState({
        file: content.firstElementChild
      });
    /*Zamiast set state > this.props.HandleNewFile(file) */
    }
  
    render() {
      return (
        <div className="custom-file">
          <input
            className="custom-file-input" 
            id="SVGFile"
            type="file"
            onChange={e => {
              this.handleChoose(e);
            }}
          />
          <label className="custom-file-label" htmlFor="SVGFile">Wybierz plik</label>
        </div>
      );
    }
  }

  export default Upload;