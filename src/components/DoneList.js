import React from "react";
import DoneItem from "./DoneItem";

class DoneList extends React.Component {
  render() {
    return (
      <div className="ui middle aligned divided list">
        <DoneItem />
        <DoneItem />
        <DoneItem />
      </div>
    );
  }
}

export default DoneList;
