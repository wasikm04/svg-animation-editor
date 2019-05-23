import React from "react";
import SVGWindow from "./SVGWindow.js";
import Editor from "./Editor.js";
import animations from "./defaultElements.js";
import './styles/App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement: null,
      file: null,
      elementCategory: null,
      selectedAnim: null,
      export: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.loadSVG = this.loadSVG.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleElementCategory = this.handleElementCategory.bind(this);
    this.handleselectedAnim = this.handleselectedAnim.bind(this);
    this.handleChangeAnimation = this.handleChangeAnimation.bind(this);
    this.addAnimation = this.addAnimation.bind(this);
    this.setExport = this.setExport.bind(this);
  }

  setExport(text) {
    this.setState({
      export: text
    });
  }

  addAnimation(elementId, animationType) {
    var prevSelected = this.state.selectedElement;
    var svg = this.state.file;

    if (prevSelected.animateTransform) {
      var newAnimationsArr = [];
      if (Array.isArray(prevSelected.animateTransform)) {
        prevSelected.animateTransform.push(animations[animationType]);
      } else {
        newAnimationsArr.push(prevSelected.animateTransform);
        newAnimationsArr.push(animations[animationType]);
        prevSelected.animateTransform = newAnimationsArr;
      }
    } else {
      prevSelected.animateTransform = animations[animationType];
    }
    for (var elem in svg) {
      if (Array.isArray(svg[elem])) {
        for (var iter in svg[elem]) {
          if (svg[elem][iter]._attributes.id === elementId) {
            svg[elem][iter] = prevSelected;
            break;
          }
        }
      } else if (svg[elem]._attributes && svg[elem]._attributes.id) {
        if (svg[elem]._attributes.id === elementId) {
          svg[elem] = prevSelected;
          break;
        }
      }
    }
    this.setState({
      file: svg,
      selectedElement: prevSelected
    });
  }

  handleElementCategory(category) {
    this.setState({
      elementCategory: category
    });
  }

  handleselectedAnim(category) {
    this.setState({
      selectedAnim: category
    });
  }

  loadSVG(JSONFile) {
    this.setState({
      file: JSONFile.svg
    });
  }

  handleSelected(element) {
    this.setState({
      selectedElement: element
    });
  }

  handleChange(propertyName, propertyValue, elementID) {
    var prevSelected = null;
    var svg = this.state.file;
    for (var elem in svg) {
      if (Array.isArray(svg[elem])) {
        for (var iter in svg[elem]) {
          if (svg[elem][iter]._attributes.id === elementID) {
            svg[elem][iter]._attributes[propertyName] = propertyValue;
            prevSelected = svg[elem][iter];
          }
        }
      } else if (svg[elem]._attributes && svg[elem]._attributes.id) {
        if (svg[elem]._attributes.id === elementID) {
          svg[elem]._attributes[propertyName] = propertyValue;
          prevSelected = svg[elem];
          break;
        }
      }
    }
    this.setState({
      file: svg,
      selectedElement: prevSelected
    });
  }

  createAnimationEdit(svg, selectedAnim, target, value, deleteIt) {
    if (
      typeof svg !== "undefined" &&
      svg.animate &&
      Array.isArray(svg.animate)
    ) {
      for (var elem in svg.animate) {
        //0,1
        if (
          typeof svg.animate[elem]._attributes !== "undefined" &&
          svg.animate[elem]._attributes.id === selectedAnim
        ) {
          if (deleteIt === true) {
            //delete anim
            svg.animate[elem] = "";
          } else {
            //update anim
            for (var itr in svg.animate[elem]) {
              for (var anim in svg.animate[elem][itr]) {
                if (anim === target) {
                  svg.animate[elem][itr][anim] = value;
                }
              }
            }
          }
        }
      }
    } else if (
      svg.animate &&
      svg.animate._attributes &&
      svg.animate._attributes.id
    ) {
      if (svg.animate._attributes.id == selectedAnim) {
        for (anim in svg.animate._attributes) {
          if (deleteIt === true) {
            //delete anim
            svg.animate = "";
          } else {
            if (anim === target) {
              svg.animate._attributes[anim] = value;
            }
          }
        }
      }
    }

    if (
      typeof svg !== "undefined" &&
      svg.animateTransform &&
      Array.isArray(svg.animateTransform)
    ) {
      for (var elem in svg.animateTransform) {
        //0,1
        if (
          typeof svg.animateTransform[elem]._attributes !== "undefined" &&
          svg.animateTransform[elem]._attributes.id === selectedAnim
        ) {
          if (deleteIt === true) {
            //delete anim
            svg.animateTransform[elem] = "";
          } else {
            //update anim
            for (var itr in svg.animateTransform[elem]) {
              for (var anim in svg.animateTransform[elem][itr]) {
                if (anim === target) {
                  svg.animateTransform[elem][itr][anim] = value;
                }
              }
            }
          }
        }
      }
    } else if (
      svg.animateTransform &&
      svg.animateTransform._attributes &&
      svg.animateTransform._attributes.id
    ) {
      if (svg.animateTransform._attributes.id == selectedAnim) {
        for (anim in svg.animateTransform._attributes) {
          if (deleteIt === true) {
            //delete anim
            svg.animateTransform = "";
          } else {
            if (anim === target) {
              svg.animateTransform._attributes[anim] = value;
            }
          }
        }
      }
    }

    return;
  }

  handleChangeAnimation(target, value, animationId, elementID, deleteIt) {
    var prevSelected = null;
    var svg = this.state.file;
    for (var elem in svg) {
      if (Array.isArray(svg[elem])) {
        for (var iter in svg[elem]) {
          if (svg[elem][iter]._attributes.id === elementID) {
            this.createAnimationEdit(
              svg[elem][iter],
              animationId,
              target,
              value,
              deleteIt
            );
            prevSelected = svg[elem][iter];
          }
        }
      } else if (svg[elem]._attributes && svg[elem]._attributes.id) {
        if (svg[elem]._attributes.id === elementID) {
          this.createAnimationEdit(
            svg[elem],
            animationId,
            target,
            value,
            deleteIt
          );
          prevSelected = svg[elem];
        }
      }
    }

    this.setState({
      file: svg,
      selectedElement: prevSelected
    });
  }

  render() {
    return (
      <div className="container-fluid h-100">
        <div className="col-12 row h-100">
          <div className="col-6">
            <Editor
              export={this.state.export}
              addAnimation={this.addAnimation}
              anim={this.state.selectedAnim}
              file={this.state.file}
              handleselectedAnim={this.handleselectedAnim}
              selectedElement={this.state.selectedElement}
              handleSelected={this.handleSelected}
              handleChange={this.handleChange}
              handleChangeAnimation={this.handleChangeAnimation}
              loadSVG={this.loadSVG}
              handleElementCategory={this.handleElementCategory}
            />
          </div>
          <div className="col-6 h-100">
            <SVGWindow setExport={this.setExport} file={this.state.file} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
