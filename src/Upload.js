import React from 'react';

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
      var parser = new DOMParser();
      content = parser.parseFromString(content, "image/svg+xml");    
      
      /*
      console.log(content)
      var arr = Array.from(content.children)
      console.log(arr)
      console.log(content.documentElement.attributes)   
      console.log(content.documentElement)
      */
      
      console.log(content);
      this.props.loadSVG(content); //xmldocument
      //this.props.loadSVG(content.documentElement) //svgsvgelement
      /*
      this.setState({
        file: content.documentElement
      });
    Zamiast set state > this.props.HandleNewFile(file) 
    */
    }
  
    render() {
      return (
        <div className="custom-file">
          <input
            accept =".svg"
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