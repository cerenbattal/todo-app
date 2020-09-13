import React from "react";
import { connect } from "react-redux";
import { moveInProgress } from "../actions";

class ToDoItem extends React.Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div className="item">
        <div className="right floated content">
          <div class="ui simple icon dropdown button">
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="header">Move To..</div>
              <div
                class="item"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(
                    moveInProgress({ id: this.props.id, text: this.props.text })
                  );
                }}
              >
                In Progress
              </div>
              <div class="item">Done</div>
            </div>
          </div>
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

export default connect()(ToDoItem);
