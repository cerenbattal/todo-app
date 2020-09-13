import React from "react";

class ToDoItem extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="right floated content">
          <div class="ui simple icon dropdown button">
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="header">Move To..</div>
              <div class="item">In Progress</div>
              <div class="item">Done</div>
            </div>
          </div>
        </div>
        <div className="middle aligned content">
          <div className="header" style={{ color: "#4d4b68" }}>
            <i className="like icon"></i>
            Task
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoItem;
