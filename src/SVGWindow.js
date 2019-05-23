import React from "react";
import "./styles/App.css";
import ModalWindow from "./ModalWindow.js";
import Upload from "./Upload.js";
import ReactDOMServer from "react-dom/server";

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substr(0, index) + chr + str.substr(index + 1);
}

function fixName(text) {
  for (var i = 1; i <= text.length; i++) {
    if (text[i] === "-") {
      text = setCharAt(text, i, "");
      text = setCharAt(text, i, text[i].toUpperCase());
      break;
    }
    if (text[i] === ":") {
      text = setCharAt(text, i, "");
      text = setCharAt(text, i, text[i].toUpperCase());
      break;
    }
  }
  return text;
}

class SVGWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImport: false,
      showExport: false,
    };
    this.svg1 = null;
    this.convertStateToJSX = this.convertStateToJSX.bind(this);
    this.createElements = this.createElements.bind(this);
    this.parseArray = this.parseArray.bind(this);
    this.toggleModalImport = this.toggleModalImport.bind(this);
    this.toggleModalEksport = this.toggleModalEksport.bind(this);
  }


  createElements(elements, Category) {
    var arr = [];
    var tmpelement = null;
    var tmpAnimates = [];
    for (var arrelem in elements) {
      if (
        elements[arrelem].type === "animate" ||
        elements[arrelem].type === "animateTransform"
      ) {
        tmpAnimates.push(elements[arrelem]);
      } else {
        if (tmpelement) {
          arr.push(
            <Category key={tmpelement.id} {...tmpelement}>
              {tmpAnimates.map(el => el)}
            </Category>
          );
          tmpAnimates.length = 0;
          tmpelement = elements[arrelem];
        } else {
          tmpelement = elements[arrelem];
        }
      }
    }
    if (tmpelement) {
      arr.push(
        <Category key={tmpelement.id} {...tmpelement}>
          {tmpAnimates.map(el => el)}
        </Category>
      );
    }
    return arr;
  }

  parseArray(elem) {
    var resultarray = [];
    var attrobj = {};
    var keyval = 100;
    if (Array.isArray(elem)) {
      for (var obj in elem) {
        for (var Attr in elem[obj]) {
          if (Attr === "animate" || Attr === "animateTransform") {
            for (var i in elem[obj][Attr]) {
              if (Array.isArray(elem[obj][Attr])) {
                for (var key3 in elem[obj][Attr][i]._attributes) {
                  attrobj[fixName(key3)] =
                    elem[obj][Attr][i]._attributes[key3];
                }
                resultarray.push(<Attr key={keyval++} {...attrobj} />);
                attrobj = {};
              } else {
                for (var key4 in elem[obj][Attr]._attributes) {
                  attrobj[fixName(key4)] =
                    elem[obj][Attr]._attributes[key4];
                }
                resultarray.push(<Attr key={keyval++} {...attrobj} />);
                attrobj = {};
              }
            }
          } else {
            for (var key in elem[obj][Attr]) {
              attrobj[fixName(key)] = elem[obj][Attr][key];
            }
            resultarray.push(attrobj);
            attrobj = {};
          }
        }
      }
    } else {
      for (Attr in elem) {
        if (Attr === "animate" || Attr === "animateTransform") {
          for (i in elem[Attr]) {
            if (Array.isArray(elem[Attr])) {
              for (var key5 in elem[Attr][i]._attributes) {
                attrobj[fixName(key5)] = elem[Attr][i]._attributes[key5];
              }
              resultarray.push(<Attr key={keyval++} {...attrobj} />);
              attrobj = {};
            } else {
              for (var key6 in elem[Attr]._attributes) {
                attrobj[fixName(key6)] = elem[Attr]._attributes[key6];
              }
              resultarray.push(<Attr key={keyval++} {...attrobj} />);
              attrobj = {};
            }
          }
        } else {
          for (var key2 in elem._attributes) {
            attrobj[fixName(key2)] = elem._attributes[key2];
          }
          resultarray.push(attrobj);
          attrobj = {};
        }
      }
    }
    return resultarray;
  }

  convertStateToJSX(file) {
    var arr = [];
    var svgattributes = {};
    for (var elem in file) {
      if (elem === "_attributes") {
        for (var key2 in file[elem]) {
          svgattributes[fixName(key2)] = file[elem][key2];
        }
        continue;
      }
      if (elem === "circle") {
        var circles = this.parseArray(file[elem]);
        var arrayOfJsxCircles = this.createElements(circles, "circle");
        arr = arr.concat(arrayOfJsxCircles);
        continue;
      }
      if (elem === "rect") {
        var rects = this.parseArray(file[elem]);
        var arrayOfJsxRects = this.createElements(rects, "rect");
        arr = arr.concat(arrayOfJsxRects);
        continue;
      }
      if (elem === "polygon") {
        var polygons = this.parseArray(file[elem]);
        var arrayOfJsxpolygons = this.createElements(polygons, "polygon");
        arr = arr.concat(arrayOfJsxpolygons);
        continue;
      }
      if (elem === "ellipse") {
        var ellipses = this.parseArray(file[elem]);
        var arrayOfJsxellipses = this.createElements(ellipses, "ellipse");
        arr = arr.concat(arrayOfJsxellipses);
        continue;
      }
      if (elem === "script") {
        arr.push(
          <script key={184} type="text/ecmascript">
            {file[elem]._cdata}
          </script>
        );
        continue;
      }
      if (elem === "style") {
        arr.push(<style key={167}>{file[elem]._text}</style>);
      }
      if (elem === "animate") {
        var animates = this.parseArray(file[elem]);
        arr.push(<animate key={169} {...animates[0]} />);
      }
    }
    this.svg1 = <svg {...svgattributes}>{arr}</svg>;
    return this.svg1;
  }
  
  toggleModalImport() {
    this.setState({ showImport: !this.state.showImport }) 
 }

 toggleModalEksport() {;
  this.props.setExport(ReactDOMServer.renderToString(this.svg1));
   this.setState({ 
     showExport: !this.state.showExport,
   })
 }
  render() {
    return (
      <div className="container text-center mt-2 border rounded h-100 d-inline-block">
        <button className="btn btn-secondary mr-1 mt-3" onClick={this.toggleModalImport}>
          Importuj
        </button>
        <ModalWindow show={this.state.showImport}
          onHide={this.toggleModalImport}
          header={"Importuj plik SVG"}
          title={"Import"}
          children={ <Upload loadSVG={this.props.loadSVG} />}
          />
        <button className="btn btn-secondary  mt-3" onClick={this.toggleModalEksport}>
          Eksportuj
        </button>
        <ModalWindow show={this.state.showExport}
          onHide={this.toggleModalEksport}
          title={"Eksport"}
          children={
              this.props.export ? 
              <textarea key="3123" className="area col-md" rows="8"  value={this.props.export} readOnly/> : null} 
        />
        <div className="container fill panel panel-primary">
          <div className="panel-body container fill">
            <div className="container fill text-center">
              {this.props.file ? this.convertStateToJSX(this.props.file) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SVGWindow;
