import React from "react";
import ToDoDropdown from "./ToDoDropdown";

class ToDoItem extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="right floated content">
          <ToDoDropdown key={this.props.key} text={this.props.text} />
        </div>
        <div className="middle aligned content">
          <div className="header" style={{ color: "#4d4b68" }}>
            <i className="like icon"></i>
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoItem;
