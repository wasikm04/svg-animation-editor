import React from 'react';
import "./styles/App.css"
import SvgComponent from "./test.js"
class SVGWindow extends React.Component {

  
    render() {
      return (
        <div className="container mt-2 border rounded h-100 d-inline-block">
            <div className="container fill panel panel-primary">
              <div className="panel-heading text-center">Plik SVG</div>
              <div className="panel-body container fill">
                <div className="container fill text-center">
                *obraz*
                {/*<SvgComponent/>*/}
                </div>
              </div>
              <div className="panel-footer">
                <div className="text-center">
                  <button type="button" className="btn primary btn-lg">Start</button>
                  <button type="button" className="btn primary btn-lg">Stop</button>
                </div>
              </div>
            </div>    
        </div>
      );
    }
  }

  export default SVGWindow;