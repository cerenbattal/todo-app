import React from "react";

class InProgressItem extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="right floated content">
          <div
            className="ui icon button"
            tabindex="0"
            style={{ backgroundColor: "#A4BF73", color: "white" }}
          >
            <i class="check icon"></i>
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

export default InProgressItem;
