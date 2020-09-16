import React from "react";
import { connect } from "react-redux";
import { deleteDone } from "../actions";

//dropdown component for "done" list
class DoneDropdown extends React.Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div class="ui simple icon dropdown button">
        <i class="dropdown icon"></i>
        <div class="menu">
          <div
            class="item"
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                deleteDone({ id: this.props.key, text: this.props.text })
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

export default connect()(DoneDropdown);
