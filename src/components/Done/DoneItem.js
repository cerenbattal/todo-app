import React from "react";
import DoneDropdown from "./DoneDropdown";

//done list item
class DoneItem extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="right floated content">
          <DoneDropdown key={this.props.key} text={this.props.text} />
        </div>
        <div className="middle aligned content">
          <div
            className="header"
            style={{ color: "#4d4b68", textDecoration: "line-through" }}
          >
            <i className="check icon" style={{ textDecoration: "none" }}></i>
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

export default DoneItem;
