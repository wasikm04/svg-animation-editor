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
      content = parser.parseFromString(content, "image/svg+xml"); 
      var arr = Array.from(content.children)
      console.log(arr)
      console.log(content.firstElementChild)
      this.setState({
        file: content.firstElementChild
      });
    }
  
    render() {
      return (
        <div>
          <input
            type="file"
            onChange={e => {
              this.handleChoose(e);
            }}
          />
          <div>
          {this.state.file ? <div></div> : <p>Załaduj plik</p>}
          </div>
        </div>
      );
    }
  }

  export default Upload;