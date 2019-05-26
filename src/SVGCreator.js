import React from "react";

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

function createElements(elements, Category) {
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

function parseArray(elem) {
  var resultarray = [];
  var attrobj = {};
  var keyval = 100;
  if (Array.isArray(elem)) {
    for (var obj in elem) {
      for (var Attr in elem[obj]) {
        if (
          Attr === "animate" ||
          Attr === "animateTransform" ||
          Attr === "animateMotion"
        ) {
          for (var i in elem[obj][Attr]) {
            if (Array.isArray(elem[obj][Attr])) {
              for (var key3 in elem[obj][Attr][i]._attributes) {
                attrobj[fixName(key3)] = elem[obj][Attr][i]._attributes[key3];
              }
              resultarray.push(<Attr key={keyval++} {...attrobj} />);
              attrobj = {};
            } else {
              for (var key4 in elem[obj][Attr]._attributes) {
                attrobj[fixName(key4)] = elem[obj][Attr]._attributes[key4];
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
      if (
        Attr === "animate" ||
        Attr === "animateTransform" ||
        Attr === "animateMotion"
      ) {
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

function convertStateToJSX(file) {
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
      var circles = parseArray(file[elem]);
      var arrayOfJsxCircles = createElements(circles, "circle");
      arr = arr.concat(arrayOfJsxCircles);
      continue;
    }
    if (elem === "rect") {
      var rects = parseArray(file[elem]);
      var arrayOfJsxRects = createElements(rects, "rect");
      arr = arr.concat(arrayOfJsxRects);
      continue;
    }
    if (elem === "polygon") {
      var polygons = parseArray(file[elem]);
      var arrayOfJsxpolygons = createElements(polygons, "polygon");
      arr = arr.concat(arrayOfJsxpolygons);
      continue;
    }
    if (elem === "ellipse") {
      var ellipses = parseArray(file[elem]);
      var arrayOfJsxellipses = createElements(ellipses, "ellipse");
      arr = arr.concat(arrayOfJsxellipses);
      continue;
    }
    if (elem === "path") {
      var paths = parseArray(file[elem]);
      var arrayOfJsxpaths = createElements(paths, "path");
      arr = arr.concat(arrayOfJsxpaths);
      continue;
    }
    if (elem === "g") {
      var groups = parseArray(file[elem]);
      var arrayOfJsxgroups = createElements(groups, "g");
      arr = arr.concat(arrayOfJsxgroups);
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
      var animates = parseArray(file[elem]);
      arr.push(<animate key={169} {...animates[0]} />);
    }
    if (elem === "animateTransform") {
      var animates2 = parseArray(file[elem]);
      arr.push(<animateTransform key={159} {...animates2[0]} />);
    }
    if (elem === "animateMotion") {
      var animates3 = parseArray(file[elem]);
      arr.push(<animateTransform key={150} {...animates3[0]} />);
    }
  }
  var svg1 = <svg {...svgattributes}>{arr}</svg>;
  return svg1;
}

export default convertStateToJSX;
