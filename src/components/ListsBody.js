import React from "react";
import ToDoList from "./ToDoList";
import InProgressList from "./InProgressList";
import DoneList from "./DoneList";

class ListsBody extends React.Component {
  render() {
    return (
      <div className="ui three column very padded centered grid">
        <div className="column">
          <div className="ui text container">To Do</div>
          <ToDoList />
        </div>
        <div className="column">
          <div className="ui text container">In Progress</div>
          <InProgressList />
        </div>
        <div className="column">
          <div className="ui text container">Done</div>
          <DoneList />
        </div>
      </div>
    );
  }
}

export default ListsBody;
