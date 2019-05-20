import React from 'react';
import Upload from "./Upload.js";
import "./styles/App.css"
class ElementsList extends React.Component {
  constructor(props) {
    super(props);
    this.selected = null;
    this.OnSelectedItem = this.OnSelectedItem.bind(this);
    this.createList = this.createList.bind(this);
  }
  OnSelectedItem(e) {
    var elem = e.target.value.split(",");
    var obj = null;
    if(elem.length>1){
      obj = this.props.file[elem[0]][elem[1]]
    }else{
      obj = this.props.file[elem[0]]
    }
      //this.selected = obj.id;   
      this.props.handleSelected(obj);
      this.props.handleElementCategory(elem[0]);
  }

  createList(svg){
    var resultArr = [];
    for(var elem in svg){
      if(Array.isArray(svg[elem])){
        for(var itr in svg[elem]){
          var tmparr=[[elem],[itr]];
          resultArr.push(<option key={svg[elem][itr]._attributes.id} value={tmparr} className="col-md">{svg[elem][itr]._attributes.id}</option>);
        }
      }else if(svg[elem]._attributes && svg[elem]._attributes.id){
        resultArr.push(<option key={svg[elem]._attributes.id} value={[elem]} className="col-md">{svg[elem]._attributes.id}</option>);
      }
    }
    return resultArr;
  }

  render() {
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
                onChange={this.OnSelectedItem}>
                {(this.props.file !== null) ? this.createList(this.props.file) : null}
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
      {/*this.selected ? <p>Edytujesz element <b>{this.selected}</b></p> : null*/}
        </div>
      );
    }
  }

  export default ElementsList;