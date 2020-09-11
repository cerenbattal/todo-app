import React from "react";

class ToDoItem extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="right floated content">
          <div className="ui labeled icon button" tabindex="0">
            <i className="play icon"></i>
            In Progress
          </div>
        </div>
        <div className="right floated content">
          <div className="ui animated green button" tabindex="0">
            <div className="hidden content">Done</div>
            <div className="visible content">
              <i className="check icon"></i>
            </div>
          </div>
        </div>
        <div className="middle aligned content">
          <div className="header">
            <i className="like icon"></i>
            Task
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoItem;
