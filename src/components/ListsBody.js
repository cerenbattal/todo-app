import React from "react";
import ToDoList from "./ToDo/ToDoList";
import InProgressList from "./InProgress/InProgressList";
import DoneList from "./Done/DoneList";

const headerStyle = {
  fontSize: "20px",
};

//list all the three states
class ListsBody extends React.Component {
  render() {
    return (
      <div
        className="ui three column very padded centered grid"
        style={{ fontSize: "16px" }}
      >
        <div className="column">
          <div className="ui text container" style={headerStyle}>
            To Do
          </div>
          <ToDoList />
        </div>
        <div className="column">
          <div className="ui text container" style={headerStyle}>
            In Progress
          </div>
          <InProgressList />
        </div>
        <div className="column">
          <div className="ui text container" style={headerStyle}>
            Done
          </div>
          <DoneList />
        </div>
      </div>
    );
  }
}

export default ListsBody;
