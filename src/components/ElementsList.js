import React from "react";
import "./../styles/App.css";

class ElementsList extends React.Component {
  constructor(props) {
    super(props);
    this.OnSelectedItem = this.OnSelectedItem.bind(this);
    this.createList = this.createList.bind(this);
  }

  OnSelectedItem(e) {
    var elem = e.target.value.split(",");
    var obj = null;
    if (elem.length > 1) {
      obj = this.props.file[elem[0]][elem[1]];
    } else {
      obj = this.props.file[elem[0]];
    }
    this.props.handleSelected(obj);
    this.props.handleElementCategory(elem[0]);
  }

  createList(svg) {
    var resultArr = [];
    for (var elem in svg) {
      if (Array.isArray(svg[elem])) {
        for (var itr in svg[elem]) {
          var tmparr = [[elem], [itr]];
          resultArr.push(
            <option
              key={svg[elem][itr]._attributes.id}
              value={tmparr}
              className="col-md"
            >
              {svg[elem][itr]._attributes.id + " - " + elem}
            </option>
          );
        }
      } else if (svg[elem]._attributes && svg[elem]._attributes.id) {
        resultArr.push(
          <option
            key={svg[elem]._attributes.id}
            value={[elem]}
            className="col-md"
          >
            {svg[elem]._attributes.id + " - " + elem}
          </option>
        );
      }
    }
    return resultArr;
  }

  render() {
    return (
      <div height="calc(100vh/2)" className="container row pl-0 pr-0 mr-0 ml-0">
        <h2 className="container text-center mt-2 mb-3">SVG Editor</h2>
        <h4 className="text-center">Lista obiektów</h4>
        <div
          className="tab-content container pl-0 pr-0"
          style={{ height: "140px" }}
        >
          <div id="list" className="container tab-pane active pl-0 pr-0">
            <select
              style={{ height: "100px", marginTop: "0px" }}
              className="custom-select scrollable-config"
              size="6"
              onChange={this.OnSelectedItem}
            >
              {this.props.file !== null
                ? this.createList(this.props.file)
                : null}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default ElementsList;
