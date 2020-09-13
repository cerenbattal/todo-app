import React from "react";
import ToDoItem from "./ToDoItem";
import AddToDo from "./AddToDo";

class ToDoList extends React.Component {
  render() {
    return (
      <div className="ui middle aligned divided list">
        <ToDoItem />
        <AddToDo />
      </div>
    );
  }
}

export default ToDoList;
