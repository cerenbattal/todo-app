import React from "react";
import { connect } from "react-redux";
import { deleteToDo, moveInProgress, moveDone } from "../actions";

//dropdown component for "to do" list
class ToDoDropdown extends React.Component {
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
                moveInProgress({
                  id: this.props.key,
                  text: this.props.text,
                })
              );
              dispatch(
                deleteToDo({ id: this.props.key, text: this.props.text })
              );
            }}
          >
            In Progress
          </div>
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
                deleteToDo({ id: this.props.key, text: this.props.text })
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
                deleteToDo({ id: this.props.key, text: this.props.text })
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

export default connect()(ToDoDropdown);
