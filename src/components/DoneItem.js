import React from "react";

class DoneItem extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="middle aligned content">
          <div className="header" style={{ color: "#4d4b68" }}>
            <i className="like icon"></i>
            Completed Task
          </div>
        </div>
      </div>
    );
  }
}

export default DoneItem;
