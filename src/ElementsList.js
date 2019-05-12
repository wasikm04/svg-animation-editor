import React from 'react';
import Upload from "./Upload.js";
import "./styles/App.css"


var DataSet = {
  elements: [
    {
      id: 1,
      name: "Element 1"
    },
    {
      id: 2,
      name: "Element 2"
    },
    {
      id: 3,
      name: "Element 3"
    },
    {
      id: 4,
      name: "Element 4"
    },
    {
      id: 5,
      name: "Element 5"
    },
  ]
};
class ElementsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement: null
    }
  
  };
  OnSelectedItem(e) {
    var id = e.target.value;
    this.setState({
      selectedElement: id
    });
  }
    render() {
      return (       
        <div className="container row">
          <h2 className="text-center container  " >SVG Editor</h2>
          <br></br>
          <ul className="nav nav-tabs justify-content-center nav-justified nav-fill container row" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#list">Lista Elementów</a>
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
              <p>Lista mapowana z tablicy z propsów</p>
              <select
                className="custom-select" size="6"
                onChange={e => this.OnSelectedItem(e)}
              >
                {DataSet.elements.map((s, id) => {
                  return (
                    <option key={id} value={s.id} className="col-md">
                      {s.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div id="import" className="container tab-pane fade">    
            <h3 className="text-center">Importuj plik SVG</h3>
              <p>import z onChange podpiętym do funkcji przekazanej z App.js</p>
              <Upload/>     
            </div>
            <div id="export" className="container tab-pane fade">  
            <h3 className="text-center">Eksportuj plik SVG</h3>
              <p>Zrzut całego state do pliku</p>  
            </div>
          </div>
        </div>
      );
    }
  }

  export default ElementsList;