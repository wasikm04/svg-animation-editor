import React from 'react';
import Upload from "./Upload.js";
import "./styles/App.css"

/*function findElements(file){
  Object.keys(svg).map((s, idx) => {
    console.log(svg[s]);
    return (svg[s]._attributes && svg[s]._attributes.id) ?
      <option key={idx} value={svg[s]} className="col-md">
        {svg[s]._attributes.id}
      </option>
    : {{Array.isArray(svg[s])} ? findElements(svg[s]) : null}
}
*/
class ElementsList extends React.Component {

  OnSelectedItem(e) {
    var id = e.target.value;
    this.props.handleSelected(id);
  }
    render() {
      let render1 = null;
      let svg = null;
      if(this.props.file === null) {
        render1 = false;
      } else {
        render1 = true;
         svg = this.props.file;
      }

      return (       
        <div height='calc(100vh/2)' className="container row">
          <h2 className="text-center container  " >SVG Editor</h2>
          <br></br>
          <ul className="nav nav-tabs justify-content-center nav-justified nav-fill container row" role="tablist">
              <li className="nav-item">
                <a className="nav-link   active" data-toggle="tab" href="#list">Lista Elementów</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#import">Import</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#export">Eksport</a>
              </li>
          </ul>
          <div className="tab-content container " style={{height: '200px'}}>
            <div id="list" className="container tab-pane active">     
            <br></br>
              <select
                className="custom-select" size="6"
                onChange={e => this.OnSelectedItem(e)}>
                {render1 ?
                Object.keys(svg).map((s, idx) => {
                  return (svg[s]._attributes && svg[s]._attributes.id) ?
                    <option key={idx} value={svg[s]} className="col-md">
                      {svg[s]._attributes.id}
                    </option>
                  : null;
                }) : ""};
              </select>
            </div>
            <div id="import" className="container tab-pane fade">    
            <h3 className="text-center">Importuj plik SVG</h3>
              <Upload loadSVG={this.props.loadSVG}/>     
            </div>
            <div id="export" className="container tab-pane fade">  
            <h3 className="text-center">Eksportuj plik SVG</h3>
            </div>
          </div>
        </div>
      );
    }
  }

  export default ElementsList;