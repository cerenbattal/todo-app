import React from "react";
import DoneItem from "./DoneItem";

class DoneList extends React.Component {
  render() {
    return (
      <div className="ui middle aligned divided list">
        You have not done any tasks
      </div>
    );
  }
}

export default DoneList;
