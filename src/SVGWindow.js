import React from 'react';
import "./styles/App.css";
import { ReactComponent as SVGExample} from "./svg/example.svg";
class SVGWindow extends React.Component {
  constructor(props) {
    super(props);
    this.convertState = this.convertState.bind(this);
  }

  parseArray(elem){ //wczytywanie atrybutów z obiektów lub tablic obiektów
    var resultarray =[];
    var attrobj = {};
    if( Array.isArray(elem)){ //arrays
      for(var obj in elem){ //0: 1:
        for(var attr in elem[obj]){ //_attributes: animate:
          if(attr === "animate"){ //</animate>
              for(var key3 in elem[obj][attr]._attributes){
                //zamiana key na key bez '-'
                attrobj[key3] = elem[obj][attr]._attributes[key3];
              }
              resultarray.push(<animate {...attrobj}/>); 
          } else{ //_attributes
              for(var key in elem[obj][attr]){
                //zamiana key na key bez '-'
                attrobj[key] = elem[obj][attr][key];
              }
              resultarray.push(attrobj);
          }
        }
      };
    }else{ //_attributes
        for(var key2 in elem._attributes){
        //zamiana key na key bez '-'
        attrobj[key2] = elem._attributes[key2];  
        }
        resultarray.push(attrobj);    
    }
    console.log(resultarray);
    return resultarray;
  }

  convertState(file){
    var arr= [];
    var svgattributes = {};
    //przykład 
    arr.push(<div key="1">12123</div>);
    arr.push(<div key="2">1we3</div>);

    for(var elem in file) { //główna pętla
      if( elem === "_attributes"){ //poszczególne elementy, tu svg
        for(var key2 in file[elem]){
          //zamiana key na key bez '-' 
          svgattributes[key2] = file[elem][key2];
        }
        console.log(svgattributes);
      }
      if( elem === "circle"){
         var circle = this.parseArray(file[elem])
         
         //arr.push();
         // [{x:1,y2}, <animate asfkha/>]
        // rysowanie elementu circle == "<cricle tab[0]>tab[1]</circle>"
      }
      if( elem === "rect"){

      }
      if( elem === "polygon"){

      }
      if(elem === "ellipse"){
        
      }
      

    }
    return <svg {...svgattributes}>{arr}</svg>;
  }
  

    render() {
      //var rawSvg = '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="drawing" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 width="500px" height="500px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve"><line id="line1234" fill="none" stroke="#FF7BAC" stroke-width="20" stroke-linecap="round" stroke-miterlimit="10" x1="138.682" y1="250" x2="293.248" y2="95.433"/><rect id="rect1235" x="22.48" y="19.078" fill="#F7931E" stroke="#C1272D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="94.972" height="94.972"/><path id="path1236" opacity="0.5" fill="#29ABE2" d="M189.519,131.983c0,5.523-4.477,10-10,10H92.257c-5.523,0-10-4.477-10-10V53.659	c0-5.523,4.477-10,10-10h87.262c5.523,0,10,4.477,10,10V131.983z"/><circle id="circle1237" opacity="0.8" fill="#8CC63F" cx="201.603" cy="159.508" r="69.067"/><polygon id="polygon1238" fill="none" stroke="#8C6239" stroke-width="20" stroke-linecap="round" stroke-miterlimit="10" points="286.331,287.025 	227.883,271.365 212.221,212.915 255.009,170.127 313.459,185.789 329.119,244.237 "/></svg>'
      //var draw = SVG('#drawing')
      //console.log(draw);
      //var store = draw.svg(rawSvg);
      //console.log(store);

      return (
        <div className="container mt-2 border rounded h-100 d-inline-block">
            <div className="container fill panel panel-primary">
              <div className="panel-heading text-center">Plik SVG</div>
              <div className="panel-body container fill">
                <div className="container fill text-center">
                {this.props.file ? this.convertState(this.props.file) : <SVGExample/>}
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