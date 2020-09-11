import React from "react";
import ToDoItem from "./ToDoItem";
import InProgressItem from "./InProgressItem";
import DoneItem from "./DoneItem";

class ToDoList extends React.Component {
  render() {
    return (
      <div className="ui four column centered grid">
        <div className="column">
          <div className="ui text container">To Do</div>

          <div className="ui middle aligned divided list">
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
          </div>
        </div>
        <div className="column">
          <div className="ui text container">In Progress</div>
          <div className="ui middle aligned divided list">
            <InProgressItem />
            <InProgressItem />
            <InProgressItem />
          </div>
        </div>
        <div className="column">
          <div className="ui text container">Done</div>
          <div className="ui middle aligned divided list">
            <DoneItem />
            <DoneItem />
            <DoneItem />
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
