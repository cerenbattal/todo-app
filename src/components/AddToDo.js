import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddToDo = ({ dispatch }) => {
  let input;

  return (
    <div
      class="ui fluid action input"
      style={{ marginRight: "0.25em", marginTop: "0.30em" }}
    >
      <input
        type="text"
        placeholder="Add new item"
        ref={(node) => (input = node)}
      ></input>
      <div
        className="ui icon button"
        tabindex="0"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            //if there is no input
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <i class="plus icon"></i>
      </div>
    </div>
  );
};

//to use dispatch and connect the component
export default connect()(AddToDo);
