import React from "react";

class InProgressItem extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="right floated content">
          <div className="ui animated button" tabindex="0">
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

export default InProgressItem;
