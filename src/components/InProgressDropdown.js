import React from "react";
import { connect } from "react-redux";
import { moveDone, deleteInProgress } from "../actions";

class InProgressDropdown extends React.Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div class="ui simple icon dropdown button">
        <i class="dropdown icon"></i>
        <div class="menu">
          <div class="header">Move To..</div>
          <div
            class="item"
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                moveDone({
                  id: this.props.key,
                  text: this.props.text,
                })
              );
              dispatch(
                deleteInProgress({ id: this.props.key, text: this.props.text })
              );
            }}
          >
            Done
          </div>
          <div class="ui divider"></div>
          <div
            class="item"
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                deleteInProgress({ id: this.props.key, text: this.props.text })
              );
            }}
          >
            Delete
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(InProgressDropdown);
