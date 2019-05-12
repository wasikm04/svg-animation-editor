import React from 'react';

class ElementsList extends React.Component {
    render() {
      return (       
        <div classNameName="container">
          <h2>SVG Editor</h2>
          <br></br>
          <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#list">Lista Elementów</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#import">Import</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#export">Export</a>
              </li>
          </ul>
          <div className="tab-content">
            <div id="list" className="container tab-pane active">          
              <h3>Elementy</h3>
              <p>Lista mapowana z tablicy z propsów</p>
            </div>
            <div id="import" className="container tab-pane fade">    
            <h3>Importuj plik SVG</h3>
              <p>import z onChange podpiętym do funkcji przekazanej z App.js</p>     
            </div>
            <div id="export" className="container tab-pane fade">  
            <h3>Eksportuj plik SVG</h3>
              <p>Zrzut całego state do pliku</p>  
            </div>
          </div>
        </div>
      );
    }
  }

  export default ElementsList;