import React from 'react';
import "./styles/App.css";

function setCharAt(str,index,chr) {
  if(index > str.length-1) return str;
  return str.substr(0,index) + chr + str.substr(index+1);
}

class SVGWindow extends React.Component {
  constructor(props) {
    super(props);
    this.convertState = this.convertState.bind(this);
    this.createElements = this.createElements.bind(this);
    this.parseArray = this.parseArray.bind(this);
  }

  fixName(text){
   // var text = "position-pos"
    for (var i = 1; i <= text.length; i++) {
      if(text[i]==='-'){
        text = setCharAt(text,i,'');
        text = setCharAt(text,i,text[i].toUpperCase());
        break;
      }
      if(text[i]===':'){
        text = setCharAt(text,i,'');
        text = setCharAt(text,i,text[i].toUpperCase());
        break;
      }
    }
    return text;
  }

  createElements(elements, Category){
        var arr =[];
        var tmpelement = null;
         var tmpAnimates =[];
         for(var arrelem in elements){
           if(elements[arrelem].type === "animate"){
              tmpAnimates.push(elements[arrelem]);
           }else{
             if(tmpelement){
              arr.push(<Category key={tmpelement.id} {...tmpelement}>{tmpAnimates.map((el) => el)}</Category>)
              tmpAnimates.length = 0;
              tmpelement = elements[arrelem];
            }else{
               tmpelement = elements[arrelem] ;
            }
           }
         }
         if(tmpelement){
          arr.push(<Category key={tmpelement.id} {...tmpelement}>{tmpAnimates.map((el) => el)}</Category>);
         }
         //console.log("Lista z createElements")
         //console.log(arr);
         return arr;
  }

  parseArray(elem){ //wczytywanie atrybutów z obiektów lub tablic obiektów
    var resultarray =[];
    var attrobj = {};
    var keyval = 100;
    if( Array.isArray(elem)){ //arrays
      for(var obj in elem){ //0: 1:
        for(var attr in elem[obj]){ //_attributes: animate:
          if(attr === "animate"){ //</animate>
            for(var i in elem[obj][attr]){
              if(Array.isArray(elem[obj][attr])){
              for(var key3 in elem[obj][attr][i]._attributes){
                attrobj[this.fixName(key3)] = elem[obj][attr][i]._attributes[key3];
                //console.log(this.fixName(elem[obj][attr]._attributes[key3]));
              }
              resultarray.push(<animate key={keyval++} {...attrobj}/>); 
              attrobj = {};
            }else{
              for(var key4 in elem[obj][attr]._attributes){
                attrobj[this.fixName(key4)] = elem[obj][attr]._attributes[key4];
                //console.log(this.fixName(elem[obj][attr]._attributes[key3]));
              }
              resultarray.push(<animate key={keyval++} {...attrobj}/>); 
              attrobj = {};
            }
            }
          }else{ //_attributes
              for(var key in elem[obj][attr]){
                attrobj[this.fixName(key)] = elem[obj][attr][key];
              }
              resultarray.push(attrobj);
              attrobj = {};
          }
        }
      };
    }else{ // single element
      for(attr in elem){
          if(attr === "animate"){ //</animate>
            for(i in elem[attr]){
              if(Array.isArray(elem[attr])){ //array of animates
              for(var key5 in elem[attr][i]._attributes){
                attrobj[this.fixName(key5)] = elem[attr][i]._attributes[key5];
                //console.log(this.fixName(elem[attr]._attributes[key3]));
              }
              resultarray.push(<animate key={keyval++} {...attrobj}/>); 
              attrobj = {};
            }else{
              for(var key6 in elem[attr]._attributes){
                attrobj[this.fixName(key6)] = elem[attr]._attributes[key6];
                //console.log(this.fixName(elem[attr]._attributes[key3]));
              }
              resultarray.push(<animate key={keyval++} {...attrobj}/>); 
              attrobj = {};
            }
            }
          }else{ //attributes
            for(var key2 in elem._attributes){
              attrobj[this.fixName(key2)] = elem._attributes[key2];  
            }
            resultarray.push(attrobj); 
            attrobj = {};   
          }
    }
    }
    //console.log("Lista z parseArray")
    //console.log(resultarray);
    return resultarray;
  }

  convertState(file){
    var arr= [];
    var svgattributes = {};

    for(var elem in file) { //główna pętla
      if( elem === "_attributes"){ //poszczególne elementy, tu svg
        for(var key2 in file[elem]){
          svgattributes[this.fixName(key2)] = file[elem][key2];
        }
        continue;
      }
      if( elem === "circle"){
         var circles = this.parseArray(file[elem])
         var arrayOfJsxCircles = this.createElements(circles, "circle");
         arr = arr.concat(arrayOfJsxCircles);
         continue;
      }
      if( elem === "rect"){
         var rects = this.parseArray(file[elem])
         var arrayOfJsxRects = this.createElements(rects, "rect");
         arr = arr.concat(arrayOfJsxRects);
         continue;
      }
      if( elem === "polygon"){
        var polygons = this.parseArray(file[elem])
        var arrayOfJsxpolygons = this.createElements(polygons, "polygon");
        arr = arr.concat(arrayOfJsxpolygons);
        continue;
      }
      if(elem === "ellipse"){
        var ellipses = this.parseArray(file[elem])
        var arrayOfJsxellipses = this.createElements(ellipses, "ellipse");
        arr = arr.concat(arrayOfJsxellipses);
        continue;
      }  
      if(elem === "script"){
        arr.push(<script key={184} type="text/ecmascript">{file[elem]._cdata}</script>);
        continue;
      }
      if(elem === "style"){
        arr.push(<style key={167}>{file[elem]._text}</style>);
      }
      if(elem === "animate"){
        var animates = this.parseArray(file[elem]);
        arr.push(<animate key={169} {...animates[0]}/>);
      }
    }

    //console.log("Lista z convertState")
    //console.log(arr);
    return <svg  {...svgattributes}>{arr}</svg>; 
  }
  
    render() {
      return (
        <div className="container mt-2 border rounded h-100 d-inline-block">
            <div className="container fill panel panel-primary">
              <div className="panel-heading text-center">Plik SVG</div>
              <div className="panel-body container fill">
                <div className="container fill text-center">
                {this.props.file ? this.convertState(this.props.file) : null} 
                {/*zamiast SVGexample wczytywać z pliku w upload na starcie aplikacji */}
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
    };
  }

  export default SVGWindow;